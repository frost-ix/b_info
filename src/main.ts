import { createApp } from "vue";
import { Quasar } from "quasar";
import quasarLang from "quasar/lang/ko-KR";
import "./assets/style/style.css";
import App from "./App.vue";
import router from "./router";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-icons-round/material-icons-round.css";
import "@quasar/extras/fontawesome-v6/fontawesome-v6.css";

// A few examples for animations from Animate.css:
// import @quasar/extras/animate/fadeIn.css
// import @quasar/extras/animate/fadeOut.css

// Import Quasar css
import "quasar/src/css/index.sass";

// Assumes your root component is App.vue
// and placed in same folder as main.js
createApp(App).use(router).use(Quasar, { lang: quasarLang }).mount("#app");
