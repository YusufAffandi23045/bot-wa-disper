import makeWASocket, {
  useMultiFileAuthState,
  DisconnectReason
} from "@whiskeysockets/baileys";

import pino from "pino";
import qrcode from "qrcode-terminal";

import { getUserState, setUserState } from "./utils/state.js";
import { resetIdleTimer } from "./utils/idle.js";

import { sendMainMenu } from "./menu/mainMenu.js";

import { handleMain } from "./handlers/mainHandlers.js";
import { handleTangkap } from "./handlers/tangkapHandlers.js";
import { handleBudidaya } from "./handlers/budidayaHandlers.js";
import { handleP2hp } from "./handlers/p2hpHandlers.js";
import { handleSekretariat } from "./handlers/sekretariatHandlers.js";
import { handleP2sp } from "./handlers/p2spHandlers.js";

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState("session");

  const sock = makeWASocket({
    logger: pino({ level: "silent" }),
    auth: state,
    browser: ["Bot Disper", "Chrome", "1.0.0"]
  });

  // ======================
  // SAVE SESSION
  // ======================
  sock.ev.on("creds.update", saveCreds);

  // ======================
  // CONNECTION HANDLER
  // ======================
  sock.ev.on("connection.update", (update) => {
    const { connection, lastDisconnect, qr } = update;

    if (qr) {
      console.log("\n📱 Scan QR berikut:");
      qrcode.generate(qr, { small: true });
    }

    if (connection === "open") {
      console.log("✅ Bot tersambung ke WhatsApp");
    }

    if (connection === "close") {
      const reason =
        lastDisconnect?.error?.output?.statusCode ||
        lastDisconnect?.error?.statusCode;

      console.log("❌ Koneksi terputus. Reason:", reason);

      if (reason === DisconnectReason.loggedOut) {
        console.log("⚠️ Logout terdeteksi. Hapus folder session dan scan ulang.");
        return;
      }

      console.log("🔄 Reconnecting...");
      startBot();
    }
  });

  // ======================
  // MESSAGE HANDLER
  // ======================
  sock.ev.on("messages.upsert", async ({ messages }) => {
    const msg = messages[0];
    if (!msg.message || msg.key.fromMe) return;

    const from = msg.key.remoteJid;
    const text =
      msg.message.conversation ||
      msg.message.extendedTextMessage?.text ||
      "";

    const input = text.trim();

    resetIdleTimer(sock, from);

    let stateUser = getUserState(from);

    // ======================
    // USER BARU
    // ======================
    if (!stateUser) {
      setUserState(from, "MAIN");
      return sendMainMenu(sock, from);
    }

    // ======================
    // ROUTING STATE
    // ======================
    if (stateUser === "MAIN") return handleMain(sock, from, input);
    if (stateUser === "TANGKAP") return handleTangkap(sock, from, input);
    if (stateUser === "BUDIDAYA") return handleBudidaya(sock, from, input);
    if (stateUser === "P2HP") return handleP2hp(sock, from, input);
    if (stateUser === "SEKRETARIAT") return handleSekretariat(sock, from, input);
    if (stateUser === "P2SP") return handleP2sp(sock, from, input);

    // ======================
    // FALLBACK
    // ======================
    setUserState(from, "MAIN");
    return sendMainMenu(sock, from);
  });
}

startBot();
