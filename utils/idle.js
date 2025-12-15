const idleTimers = {};

export function resetIdleTimer(sock, from) {
  if (idleTimers[from]) {
    clearTimeout(idleTimers[from]);
  }

  idleTimers[from] = setTimeout(async () => {
    await sock.sendMessage(from, {
      text: `
🙏 Terima kasih telah menghubungi
*Dinas Perikanan Kabupaten Gresik*.

Jika masih membutuhkan bantuan,
silakan kirim pesan kembali.

Selamat melanjutkan aktivitas 🌿
`
    });
  }, 1 * 60 * 1000); // 1 menit idle
}
