// import { people01, people02, people03, facebook, instagram, linkedin, twitter } from "../assets";

interface navLinks {
  id: string;
  title: string;
  url: string;
}

// interface footerLinks {
//   title: string;
//   links: links[];
// }

// interface links {
//   name: string;
//   link: string;
// }

// interface socialMedia {
//     id: string;
//     icon: string | any;
//     link: string;
// }

export const navLinks = [
  {
    id: "home",
    title: "Home",
    url: "/"
  },
  {
    id: "about us",
    title: "About Us",
    url: "/AboutUs"
  },
  {
    id: "our services",
    title: "Our  Services",
    url:"/OurServices"
  },
  {
    id: "contact us",
    title: "Contact Us",
    url: "/ContactUs"
  },
];

// export const feedback = [
//   {
//     id: "feedback-1",
//     content:
//       "Love this tool. I get instant weather updates!",
//     name: "Herman Jensen",
//     title: "Gardener",
//     img: people01,
//   },
//   {
//     id: "feedback-2",
//     content:
//       "This app has given me all the information I need to plan my day. It gives very precise weather updates which is perfect for me and my line of business",
//     name: "Steve Mark",
//     title: "Car wash busniess",
//     img: people02,
//   },
//   {
//     id: "feedback-3",
//     content:
//       "Great for personal and business use!",
//     name: "Kenn Gallagher",
//     title: "Events Planner",
//     img: people03,
//   },
// ];
// export const footerLinks = [
//   {
//     title: "Useful Links",
//     links: [
//       {
//         name: "How it Works",
//         link: "",
//       },
//       {
//         name: "Explore",
//         link: "",
//       },
//       {
//         name: "Terms & Services",
//         link: "",
//       },
//     ],
//   },
//   {
//     title: "Community",
//     links: [
//       {
//         name: "Help Center",
//         link: "",
//       },
//       {
//         name: "Blog",
//         link: "",
//       },
//       {
//         name: "Newsletters",
//         link: "",
//       },
//     ],
//   },
//   {
//     title: "Partner",
//     links: [
//       {
//         name: "Our Partner",
//         link: "",
//       },
//       {
//         name: "Become a Partner",
//         link: "",
//       },
//     ],
//   },
// ];

// export const socialMedia = [
//   {
//     id: "social-media-1",
//     icon: instagram,
//     link: "https://www.instagram.com/",
//   },
//   {
//     id: "social-media-2",
//     icon: facebook,
//     link: "https://www.facebook.com/",
//   },
//   {
//     id: "social-media-3",
//     icon: twitter,
//     link: "https://www.twitter.com/",
//   },
//   {
//     id: "social-media-4",
//     icon: linkedin,
//     link: "https://www.linkedin.com/",
//   },
// ];