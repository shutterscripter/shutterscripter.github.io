var data = [
  {
    name: "NewSummary - The News APP",
    description:
      "A Flutter application, a dynamic platform designed to deliver real-time news updates sourced from an open news API. Featuring an intuitive user interface and advanced features, the app offers users access to the latest headlines and articles, intelligently <b>summarized</b> for quick consumption. Built upon a robust clean architecture, the app ensures seamless performance and scalability while boasting features such as search functionality, pull-to-refresh for instant updates, and the ability to save favorite articles for future reference.",
    techStack: "<b>Tech Stack : Flutter , RoomDB , API.</b>",
    image: "/assets/images/temp_image.png",
    link: "https://github.com/shutterscripter/FlutterPress",
  },
  {
    name: "GlassKey - Android Keyboard",
    description:
      "The Custom Keyboard is an Android application designed to enhance and personalize the user's typing experience.The application supports multiple key variations, including special characters and a numeric keypad, ensuring a comprehensive typing tool for all users. Additionally, the application includes sound effects for keypress feedback, adding an auditory dimension to the user's interaction with the keyboard. With its smooth and responsive performance, the Custom Keyboard offers a unique and personalized typing experience for Android users.",
    techStack: "<b>Tech Stack : Android, Java, XML.</b>",
    image: "/assets/images/temp_image.png",
    link: "https://github.com/shutterscripter/Custom_Android_Keyboard",
  },
  {
    name: "DialTrack - Call Log Manager",
    description:
      "DialTrack is an Android application that not only <b>manages and organizes the user's call log history</b>, but also provides a feature for <b>automatic calling via CSV files</b>. The app offers a range of features, including the ability to view and filter call logs based on various criteria such as incoming, outgoing, and missed calls. Additionally, it allows users to automate their calling process by importing contacts from CSV files. With its intuitive user interface, robust functionality, and advanced features like automatic calling, DialTrack serves as a comprehensive call log management and calling solution for Android devices.",
    techStack: "<b>Tech Stack : Flutter, Firebase , Dart </b>",
    image: "/assets/images/temp_image.png",
    link: "#",
  },
];

var projectList = document.querySelector(".projects");
data.forEach((project) => {
  projectList.innerHTML += `
  <div class="project-card"
  data-aos-anchor-placement="center-bottom"
  data-aos-delay="0"
  data-aos="flip-left"
  data-aos-duration="1000"
  data-aos-offset="0"
  >
  <div class="project-image">
    <div>
      <figure>
        <img src="/assets/images/temp_image.png" alt="" />
      </figure>
    </div>
  </div>
  <div class="project-info">
    <h3 project-heading>${project.name}</h3>
    <p class="project-desc">
     ${project.description}
    </p>
    <p class="project-tech-stack" >
      ${project.techStack}
    </p>

   <div class="project-links">
      <a href="${project.link}" class="view-project-link" target="_blank">Explore</a>
   </div>
  </div>
</div>

        `;
});
