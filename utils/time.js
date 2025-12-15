export function isWorkingHours() {
  const now = new Date();

  // Waktu lokal (WIB jika server Indonesia)
  const hour = now.getHours();
  const day = now.getDay(); // 0 = Minggu, 6 = Sabtu

  // Senin - Jumat
  const isWeekday = day >= 1 && day <= 5;

  // Jam kerja 08.00 - 16.00
  const isWorkingTime = hour >= 8 && hour < 16;

  return isWeekday && isWorkingTime;
}

export function outsideWorkingHoursMessage() {
  return ` 
⏰ *Di luar Jam Kerja Pelayanan*

Jam layanan:
🗓 Senin – Jumat
🕗 08.00 – 16.00 WIB

Silakan tinggalkan pesan,
kami akan merespons pada jam kerja berikutnya 🙏
`;
}
