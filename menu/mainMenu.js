export async function sendMainMenu(sock, to) {
  const text = `
Halo 👋
Selamat datang di
*Bot Resmi Dinas Perikanan Kabupaten Gresik*

Silakan pilih layanan:
1️⃣ Sekertariat
2️⃣ Perikanan Tangkap
3️⃣ Budidaya
4️⃣ P2SP
5️⃣ P2HP

Balas dengan *angka 1 / 2 / 3 / 4*
`;

  await sock.sendMessage(to, { text });
}
