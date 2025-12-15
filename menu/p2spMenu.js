export async function sendP2spMenu(sock, to) {
  const text = `
📂 *Bidang P2SP*
(Pengelolaan & Pengawasan Sumberdaya Perikanan)

Silakan pilih layanan:
1️⃣ Profil P2SP
2️⃣ Tugas dan Fungsi
3️⃣ Layanan P2SP
4️⃣ Pengaduan
5️⃣ Jam Pelayanan
0️⃣ Kembali ke Menu Utama

Balas dengan *angka*
`;

  await sock.sendMessage(to, { text });
}
