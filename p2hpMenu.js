export async function sendP2hpMenu(sock, from) {
  const text = `🏭 *Menu P2HP*
(Pengolahan & Pemasaran Hasil Perikanan)

1️⃣ Informasi UMKM
2️⃣ Sertifikasi Produk
3️⃣ Bantuan Pemasaran
0️⃣ Kembali ke Menu Utama

✍️ Ketik angka pilihan`;
  
  await sock.sendMessage(from, { text });
}
