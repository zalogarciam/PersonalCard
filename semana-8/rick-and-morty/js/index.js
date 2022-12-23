"use strict";

import characters from "./modules/character.js";

const documentReady = () => {
  characters();
};

document.addEventListener("DOMContentLoaded", documentReady);
