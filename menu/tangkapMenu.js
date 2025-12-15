export async function sendTangkapMenu(sock, to) {
  await sock.sendMessage(to, {
    text: `🐟 *Perikanan Tangkap*
1️⃣ Rekomendasi Pembelian Bahan Bakar Minyak Untuk Nelayan
2️⃣ Bantuan Alat Tangkap
3️⃣ Kembali ke Menu Utama
Balas dengan *angka*
`
  });
  await sock.sendMessage(to, { text });
}
