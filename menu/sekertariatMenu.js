export async function sendSekretariatMenu(sock, to) {
  const text = `
📂 *Bidang Sekretariat*

Silakan pilih informasi:
1️⃣ Profil Sekretariat
2️⃣ Tugas dan Fungsi
3️⃣ Jam Pelayanan
0️⃣ Kembali ke Menu Utama

Balas dengan *angka*
`;

  await sock.sendMessage(to, { text });
}
