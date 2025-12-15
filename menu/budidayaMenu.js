export async function sendBudidayaMenu(sock, to) {
  await sock.sendMessage(to, {
    text: `🦐 *Budidaya*
1️⃣ Informasi Perizinan
2️⃣ Bantuan Sarana
3️⃣ Kembali ke Menu Utama

Balas dengan *angka*
`
  }); 
  await sock.sendMessage(to, { text });
}
