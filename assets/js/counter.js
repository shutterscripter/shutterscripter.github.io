import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";
import { CountUp } from "https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.0.7/countUp.js";

let firebaseConfig = {
  apiKey: "AIzaSyCcFtaS050xXSDY8ZmF7H6JMfK4bQJsx_w",
  authDomain: "jayesh-shinde.firebaseapp.com",
  databaseURL:
    "https://jayesh-shinde-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jayesh-shinde",
  storageBucket: "jayesh-shinde.appspot.com",
  messagingSenderId: "347117801248",
  appId: "1:347117801248:web:83a20815000073eec09145",
  measurementId: "G-JS2S770DF4",
};

let views,
  github_contribution,
  github_repo,
  leetcode,
  data = [];

// Initialize Firebase
let app = await initializeApp(firebaseConfig);
let db = getDatabase(app);
let dbRef = ref(db);

onValue(dbRef, (snapshot) => {
  if (snapshot.exists()) {
    let data = snapshot.val();
    views = data.views + 1;
    github_contribution = data.github_contribution;
    github_repo = data.github_repo;
    leetcode = data.leetcode;

    // Update HTML elements
    document.querySelector(".wv").setAttribute("data-value", views);
    document
      .querySelector(".gc")
      .setAttribute("data-value", github_contribution);
    document.querySelector(".gr").setAttribute("data-value", github_repo);
    document.querySelector(".lc").setAttribute("data-value", leetcode);

    countStart();
    // updateViews();
  } else {
    console.log("No data available");
  }
});

function countStart() {
  const $counters = document.querySelectorAll(".js-count-up"),
    options = {
      useEasing: true,
      useGrouping: true,
      separator: ",",
      decimal: ".",
    };

  $counters.forEach((item) => {
    const value = item.dataset.value;
    const counter = new CountUp(item, value, options);
    counter.start();
  });
}

new Waypoint({
  element: document.querySelector(".level"),
  handler: function () {
    countStart();
    this.destroy(); //for once
  },
  offset: "90%",
  triggerOnce: true,
});
