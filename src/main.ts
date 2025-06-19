import App from "./App.vue";
import router from "./router";
import { createApp } from "vue";
import "./assets/style/style.css";

// Quasar Framework Import
import { Quasar } from "quasar";
import quasarLang from "quasar/lang/ko-KR";
// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-icons-round/material-icons-round.css";
import "@quasar/extras/fontawesome-v6/fontawesome-v6.css";

// Import Quasar css
import "quasar/src/css/index.sass";
// A few examples for animations from Animate.css:
import "@quasar/extras/animate/fadeIn.css";
import "@quasar/extras/animate/fadeOut.css";

// Assumes your root component is App.vue
createApp(App).use(router).use(Quasar, { lang: quasarLang }).mount("#app");
