export async function sendP2hpMenu(sock, to) {
  await sock.sendMessage(to, {
    text: `📦 *P2HP*
1️⃣ Sertifikasi Produk
2️⃣ Informasi UMKM
3️⃣ Kembali ke Menu Utama
Balas dengan *angka*
`
  });
  await sock.sendMessage(to, { text });
}
