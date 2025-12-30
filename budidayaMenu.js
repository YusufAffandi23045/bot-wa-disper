export async function sendBudidayaMenu(sock, from) {
  const text = `🐟 *Menu Perikanan Budidaya*

1️⃣ Informasi Budidaya
2️⃣ Jenis Komoditas
3️⃣ Penyuluhan
0️⃣ Kembali ke Menu Utama

✍️ Ketik angka pilihan`;
  
  await sock.sendMessage(from, { text });
}
