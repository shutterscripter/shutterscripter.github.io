/// use this code to open the link in new tab
var viewAllArticles = document.getElementById("view-all-articles");
viewAllArticles.addEventListener("click", function () {
  //open link : https://auth.geeksforgeeks.org/user/jayesh_shinde22/articles
  window.open(
    "https://auth.geeksforgeeks.org/user/jayesh_shinde22/articles",
    "_blank"
  );
});

// get in touch button logic
var getInTouch = document.getElementById("btn-contact-me");
getInTouch.addEventListener("click", function () {
  //   write email to "jay2272001@gmail.com"
  window.location.href = "mailto:jay2272001@gmail.com";
});

// Custom cusror logic
// UPDATE: I was able to get this working again... Enjoy!

var cursor = document.querySelector(".cursor");
var cursorinner = document.querySelector(".cursor2");
var a = document.querySelectorAll("a");

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + "px";
  cursorinner.style.top = y + "px";
});

document.addEventListener("mousedown", function () {
  cursor.classList.add("click");
  cursorinner.classList.add("cursorinnerhover");
});

document.addEventListener("mouseup", function () {
  cursor.classList.remove("click");
  cursorinner.classList.remove("cursorinnerhover");
});

a.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});

// detect right click on the page
// document.addEventListener("contextmenu", function (e) {
//   e.preventDefault();
//   // custom dialog box with message
//   Swal.fire({

//     position: "top-end",
//     icon: "success",
//     title: "Your work has been saved",
//     showConfirmButton: false,
//   });
// });
