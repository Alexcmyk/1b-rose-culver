// Page numbers
let pageNumber = 0;

// Slide array
const pages = [
  {
    copy: "a Brooklyn-based graphic designer",
    background: "#edc7a9",
    circle: "#3e78ed",
  },
  {
    copy: `Kanye West's biggest fan`,
    background: "#a1fffe",
    circle: "#e34a47",
  },
  {
    copy: "Looking for a job at the start of October",
    background: "#d3c7f3",
    circle: "#27e06e",
  },
  {
    copy: `Letting you <a href="pdf.pdf">download his PDF</a>`,
    background: "#faffb8",
    circle: "#b472e6",
  },
];

// Relevant tag selectors
const nextTag = document.querySelector("footer img.next");
const previousTag = document.querySelector("footer img.prev");
const randomTag = document.querySelector("footer img.random");
const outputTag = document.querySelector("h2");
const circleTag = document.querySelector("section div.circle");
const bodyTag = document.querySelector("body");

// Next logic
const next = () => {
  pageNumber += 1;

  if (pageNumber > pages.length - 1) {
    pageNumber = 0;
  }

  updateSection();
};

// Previous logic
const previous = () => {
  pageNumber -= 1;

  if (pageNumber < 0) {
    pageNumber = pages.length - 1;
  }
  updateSection();
};

// Random logic
const random = () => {
  pageNumber = Math.floor(Math.random() * pages.length);
  updateSection();
};

// Update main section
const updateSection = () => {
  outputTag.innerHTML = pages[pageNumber].copy;
  circleTag.style.backgroundColor = pages[pageNumber].circle;
  bodyTag.style.backgroundColor = pages[pageNumber].background;
};

// Event listener for buttons that triggers functions
nextTag.addEventListener("click", () => {
  next();
});

previousTag.addEventListener("click", () => {
  previous();
});

randomTag.addEventListener("click", () => {
  random();
});

// Keyboard logic

document.addEventListener("keyup", (event) => {
  if (event.key == "ArrowRight") {
    next();
  }

  if (event.key == "ArrowLeft") {
    previous();
  }
});
