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
