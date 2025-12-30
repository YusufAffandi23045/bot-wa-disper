export async function sendTangkapMenu(sock, from) {
  const text = `🎣 *Menu Perikanan Tangkap*

1️⃣ Informasi Perizinan
2️⃣ Data Produksi
3️⃣ Bantuan Nelayan
0️⃣ Kembali ke Menu Utama

✍️ Ketik angka pilihan`;
  
  await sock.sendMessage(from, { text });
}
