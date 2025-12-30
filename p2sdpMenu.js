export async function sendP2sdpMenu(sock, from) {
  const text = `📑 *Menu P2SDP*
(Pengelolaan & Pengembangan Sumber Daya Perikanan)

1️⃣ Informasi Program
2️⃣ Data & Statistik
3️⃣ Pendampingan
0️⃣ Kembali ke Menu Utama

✍️ Ketik angka pilihan`;

  await sock.sendMessage(from, { text });
}
