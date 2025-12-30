import { setUserState } from "../utils/state.js";
import { sendMainMenu } from "../menu/mainMenu.js";

import { handleMain } from "./mainHandlers.js";
import { handleSekretariat } from "./sekretariatHandlers.js";
import { handleTangkap } from "./tangkapHandlers.js";
import { handleBudidaya } from "./budidayaHandlers.js";
import { handleP2hp } from "./p2hpHandlers.js";
import { handleP2sdp } from "./p2sdpHandlers.js";

/**
 * Router utama berbasis STATE
 */
export async function routeMessage(sock, from, input) {
  const routes = {
    MAIN: handleMain,
    SEKRETARIAT: handleSekretariat,
    TANGKAP: handleTangkap,
    BUDIDAYA: handleBudidaya,
    P2HP: handleP2hp,
    P2SDP: handleP2sdp
  };

  const handler = routes[input === "menu" ? "MAIN" : null];

  if (handler) {
    setUserState(from, "MAIN");
    return handler(sock, from, input);
  }

  return false;
}


export async function routeByState(sock, from, stateUser, input) {
  const routes = {
    MAIN: handleMain,
    SEKRETARIAT: handleSekretariat,
    TANGKAP: handleTangkap,
    BUDIDAYA: handleBudidaya,
    P2HP: handleP2hp,
    P2SDP: handleP2sdp
  };

  const handler = routes[stateUser];

  if (!handler) {
    setUserState(from, "MAIN");
    return sendMainMenu(sock, from);
  }

  return handler(sock, from, input);
}
