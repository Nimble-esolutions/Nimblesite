import image1 from "@/assets/images/project/project-2-1.jpg";
import image2 from "@/assets/images/project/project-2-2.jpg";
import image3 from "@/assets/images/project/project-2-3.jpg";
import image4 from "@/assets/images/project/project-2-4.jpg";
import image5 from "@/assets/images/project/project-2-5.jpg";
import image6 from "@/assets/images/project/project-2-6.jpg";
const projectsData = {
  title: "Developed, deployed and under AMC projects",
  subtitle: "Our Portfolio",
  filterCategories: [
    { name: "All", filterClass: "filter-item" },
    { name: "Wordpress site & PHP application", filterClass: "Wordpress site & PHP application" },
    { name: ".Net Application ", filterClass: ".Net Application" },
    { name: "AI enabled Application ", filterClass: "AI enabled Application " },
    { name: "Websites", filterClass: "Websites" },
  ],
  projects: [
    {
      image: image1,
      category: "Websites",
      title: "Shelter Associates",
      link: "/project-details",
      filterClasses: ["Websites"],
      xl: 3,
      md: 6,
    },
    {
      image: image2,
      category: "Websites",
      title: "Monjin",
      link: "/project-details",
      filterClasses: ["Websites"],
      xl: 3,
      md: 6,
    },
    {
      image: image3,
      category: "Wordpress site & PHP application",
      title: "Fergusson College Pune",
      link: "/project-details",
      filterClasses: ["Websites", "Wordpress site & PHP application"],
      xl: 6,
      md: 12,
    },
    {
      image: image4,
      category: "Websites",
      title: "Lovekar Design",
      link: "/project-details",
      filterClasses: ["Websites"],
      xl: 6,
      md: 12,
    },
    {
      image: image5,
      category: "Wordpress site & PHP application",
      title: "Venue Booking",
      link: "/project-details",
      filterClasses: ["Wordpress site & PHP application", "Website"],
      xl: 3,
      md: 6,
    },
    {
      image: image6,
      category: "Wordpress site & PHP application",
      title: "R D Karve",
      link: "/project-details",
      filterClasses: ["busiWordpress site & PHP applicationness", "Website"],
      xl: 3,
      md: 6,
    },
  ],
};

export default projectsData;
