"use strict";

import foods from "./modules/food.js";

const documentReady = () => {
  foods();
};

document.addEventListener("DOMContentLoaded", documentReady);
