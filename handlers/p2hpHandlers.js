import { setUserState } from "../utils/state.js";
import { sendMainMenu } from "../menu/mainMenu.js";

export async function handleP2hp(sock, from, input) {
  if (input === "1") {
    return sock.sendMessage(from, {
      text: "🏷 Sertifikasi Mutu Produk"
    });
  }

  if (input === "2") {
    return sock.sendMessage(from, {
      text: "🏪 Pembinaan UMKM Perikanan"
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
