import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getAnalytics,
  logEvent
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";

import { firebaseConfig } from "./firebase-config.js";

try {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  logEvent(analytics, "nexcalc_app_open");

  window.nexcalcAnalytics = analytics;

  console.log("NEXCALC Analytics connected successfully.");
} catch (error) {
  console.error("NEXCALC Analytics failed:", error);
}