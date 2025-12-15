import { setUserState } from "../utils/state.js";
import { sendMainMenu } from "../menu/mainMenu.js";
import { budidaya } from "../data/budidaya.js";
import { p2hp } from "../data/p2hp.js";
import { perikananTangkap } from "../data/tangkap.js";
import { sekertariat } from "../data/sekertariat.js";
import { p2sp } from "../data/p2sp.js";

export async function handleMain(sock, from, input) {
  if (input === "1") {
    setUserState(from, "SEKERTARIAT");
    return sock.sendMessage(from, {
      text: "🏢 Menu Sekertariat\n1️⃣ Informasi Umum\n2️⃣ Alamat\n3️⃣ Kembali"
    });
  }
  if (input === "2") {
    setUserState(from, "TANGKAP");
    return sock.sendMessage(from, {
      text: "🐟 Menu Perikanan Tangkap\n1️⃣ Informasi Perizinan\n2️⃣ Bantuan Sarana\n3️⃣ Kembali"
    });
  }

  if (input === "3") {
    setUserState(from, "BUDIDAYA");
    return sock.sendMessage(from, {
      text: "🦐 Menu Budidaya\n1️⃣ Informasi Perizinan\n2️⃣ Bantuan Sarana\n3️⃣ Kembali"
    });
  }

  if (input === "4") {
    setUserState(from, "P2SP");
    return sock.sendMessage(from, {
      text: `🚤 Menu P2SP\n1️⃣ Pengawasan Sumberdaya\n2️⃣ Tata Cara Pengaduan\n3️⃣ Kembali`
    });
  }

  if (input === "5") {
    setUserState(from, "P2HP");
    return sock.sendMessage(from, {
      text: `🐠 Menu P2HP\n1️⃣ Informasi Pengelolaan\n2️⃣ Bantuan\n3️⃣ Kembali`
    });
  }

  return sendMainMenu(sock, from);
}
