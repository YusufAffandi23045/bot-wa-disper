import { setUserState } from "../utils/state.js";
import { sendMainMenu } from "../menu/mainMenu.js";

export async function handleSekretariat(sock, from, text) {
  switch (text) {
    case "1":
      return sock.sendMessage(from, {
        text: `
📄 *Sekretariat*
Bidang Sekretariat menangani administrasi,
kepegawaian, keuangan, dan perencanaan.
`
      });

    case "2":
      return sock.sendMessage(from, {
        text: `
⏰ *Jam Pelayanan*
Senin – Jumat
08.00 – 15.00 WIB
`
      });

    case "0":
      setUserState(from, "MAIN");
      return sendMainMenu(sock, from);

    default:
      return sock.sendMessage(from, {
        text: "❌ Pilihan tidak tersedia."
      });
  }
}
