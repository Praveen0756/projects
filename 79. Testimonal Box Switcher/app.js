const testimonialContainer = document.querySelector(".testimonial-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-avater");
const username = document.querySelector(".username");
const twitterHandle = document.querySelector(".twitter-handle");

const testimonials = [
  {
    name: "Aarav Sharma",
    position: "Frontend Developer",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "This project made my workflow so much smoother. The UI is clean and easy to use!",
  },
  {
    name: "Priya Patel",
    position: "UI/UX Designer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "I love the design and simplicity. It really helps me stay focused and productive.",
  },
  {
    name: "Rahul Verma",
    position: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/men/76.jpg",
    text: "Super intuitive and fast. It solved a lot of problems I had with similar tools.",
  },
  {
    name: "Sneha Reddy",
    position: "Product Manager",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "The experience is fantastic. Everything works seamlessly and looks great.",
  },
  {
    name: "Karan Mehta",
    position: "Backend Developer",
    photo: "https://randomuser.me/api/portraits/men/51.jpg",
    text: "Efficient and reliable. It integrates perfectly with my existing workflow.",
  },
  {
    name: "Neha Gupta",
    position: "Digital Marketer",
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "A powerful tool that saves time and delivers excellent results every time.",
  },
  {
    name: "Rohit Singh",
    position: "Full Stack Developer",
    photo: "https://randomuser.me/api/portraits/men/85.jpg",
    text: "Clean design and great performance. Definitely one of the best tools I've used.",
  },
  {
    name: "Ananya Iyer",
    position: "Data Analyst",
    photo: "https://randomuser.me/api/portraits/women/29.jpg",
    text: "Very user-friendly and visually appealing. Makes my work much easier.",
  },
  {
    name: "Vikram Joshi",
    position: "DevOps Engineer",
    photo: "https://randomuser.me/api/portraits/men/63.jpg",
    text: "Reliable and fast. I appreciate how smooth everything runs.",
  },
  {
    name: "Meera Nair",
    position: "Content Strategist",
    photo: "https://randomuser.me/api/portraits/women/90.jpg",
    text: "A delightful experience! The interface is intuitive and beautifully designed.",
  },
];

let counter = 1;

function showNextTestimonial() {
  const { name, position, photo, text } = testimonials[counter];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  twitterHandle.innerHTML = position;

  counter++;

  if (counter > testimonial.length - 1) {
    counter = 0;
  }
}

setInterval(showNextTestimonial, 10000);
