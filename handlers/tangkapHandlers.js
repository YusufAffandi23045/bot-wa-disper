import { setUserState } from "../utils/state.js";
import { sendMainMenu } from "../menu/mainMenu.js";

export async function handleTangkap(sock, from, input) {
  if (input === "1") {
    return sock.sendMessage(from, {
      text: "📄 Informasi Perizinan Perikanan Tangkap"
    });
  }

  if (input === "2") {
    return sock.sendMessage(from, {
      text: "🎣 Bantuan Alat Tangkap"
    });
  }

  if (input === "3") {
    setUserState(from, "MAIN");
    return sendMainMenu(sock, from);
  }

  return sock.sendMessage(from, {
    text: "Pilihan tidak tersedia. Pilih 1 / 2 / 3."
  });
}
