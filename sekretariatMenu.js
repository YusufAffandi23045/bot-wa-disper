export async function sendSekretariatMenu(sock, from) {
  const text = `🏢 *Menu Sekretariat*

1️⃣ Informasi Umum
2️⃣ Alamat & Kontak
3️⃣ Jam Pelayanan
0️⃣ Kembali ke Menu Utama

✍️ Ketik angka pilihan`;
  
  await sock.sendMessage(from, { text });
}
