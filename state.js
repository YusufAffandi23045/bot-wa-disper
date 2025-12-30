// Simpan state user di memory (RAM)
const userStates = {};

/**
 * Ambil state user
 * @param {string} jid
 * @returns {string|null}
 */
export function getUserState(jid) {
  return userStates[jid] || null;
}

/**
 * Set / update state user
 * @param {string} jid
 * @param {string} state
 */
export function setUserState(jid, state) {
  userStates[jid] = state;
}

/**
 * Hapus state user (opsional)
 * @param {string} jid
 */
export function clearUserState(jid) {
  delete userStates[jid];
}
