import { setUserState } from "../utils/state.js";
import { sendMainMenu } from "../menu/mainMenu.js";

export async function handleP2sp(sock, from, text) {
  switch (text) {
    case "1":
      return sock.sendMessage(from, {
        text: `
🛥️ *Pengawasan Sumberdaya Perikanan*
Meliputi pengawasan alat tangkap,
wilayah tangkap, dan kepatuhan nelayan.
`
      });

    case "2":
      return sock.sendMessage(from, {
        text: `
📢 *Pengaduan*
Silakan sampaikan laporan
terkait pelanggaran perikanan
melalui kontak resmi Dinas Perikanan.
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
