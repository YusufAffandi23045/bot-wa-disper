export async function sendMainMenu(sock, from) {
  const text = `🤖 *BOT DISPERIKANAN*
Silakan pilih menu layanan:

1️⃣ Sekretariat
2️⃣ Tangkap
3️⃣ Budidaya
4️⃣ P2HP
5️⃣ P2SDP

✍️ Ketik angka (1-5)`;

  await sock.sendMessage(from, { text });
}
