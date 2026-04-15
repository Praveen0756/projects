const quoteBtn = document.getElementById("quoteBtn");
const quoteOutput = document.getElementById("quoteOutput");
const authorOutput = document.getElementById("authorOutput");

const arrayOfQuotes = [
  {
    author: "Albert Einstein",
    quote:
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  },
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    author: "Mahatma Gandhi",
    quote: "Be the change that you wish to see in the world.",
  },
  {
    author: "Mark Twain",
    quote: "The secret of getting ahead is getting started.",
  },
  {
    author: "Confucius",
    quote: "It does not matter how slowly you go as long as you do not stop.",
  },
  {
    author: "Steve Jobs",
    quote: "Stay hungry, stay foolish.",
  },
  {
    author: "Nelson Mandela",
    quote: "It always seems impossible until it's done.",
  },
  {
    author: "Abraham Lincoln",
    quote: "Whatever you are, be a good one.",
  },
  {
    author: "Aristotle",
    quote:
      "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
  },
  {
    author: "Bruce Lee",
    quote: "Be water, my friend.",
  },
  {
    author: "Walt Disney",
    quote: "The way to get started is to quit talking and begin doing.",
  },
  {
    author: "Helen Keller",
    quote:
      "The only thing worse than being blind is having sight but no vision.",
  },
  {
    author: "Tony Robbins",
    quote: "The only limit to your impact is your imagination and commitment.",
  },
  {
    author: "Oprah Winfrey",
    quote: "Turn your wounds into wisdom.",
  },
  {
    author: "Dalai Lama",
    quote:
      "Happiness is not something ready made. It comes from your own actions.",
  },
  {
    author: "J.K. Rowling",
    quote:
      "It is our choices that show what we truly are, far more than our abilities.",
  },
  {
    author: "Elon Musk",
    quote:
      "When something is important enough, you do it even if the odds are not in your favor.",
  },
];

function generateQuotes() {
  let random = Number.parseInt(Math.random() * arrayOfQuotes.length + 1);
  quoteOutput.innerHTML = `<span>${arrayOfQuotes[random].quote}</span>`;
  authorOutput.innerHTML = `<small>- ${arrayOfQuotes[random].author}</small>`;
}

quoteBtn.addEventListener("click", generateQuotes);
