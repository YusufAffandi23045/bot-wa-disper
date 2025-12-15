import fs from "fs";

const path = "./storage/userState.json";

function readState() {
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, "{}");
  }
  return JSON.parse(fs.readFileSync(path));
}

export function getUserState(user) {
  const data = readState();
  return data[user];
}

export function setUserState(user, state) {
  const data = readState();
  data[user] = state; // ⬅️ SIMPAN STRING
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}
