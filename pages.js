let pageNumber = 0;
const nextTag = document.querySelector("footer img.next");
const previousTag = document.querySelector("footer img.prev");
const outputTag = document.querySelector("h2");



const next = () => {
  pageNumber += 1;

  if (pageNumber > 10) {
    pageNumber = 1;
  }

  updateSection();
};

const previous = () => {
  pageNumber -= 1;

  if (pageNumber < 1) {
    pageNumber = 10;
  }
  updateSection()
}



const updateSection = () => {
  outputTag.innerHTML = pageNumber;
};


// Event listener for functions
nextTag.addEventListener("click", () => {
  next();
});

previousTag.addEventListener("click", () => {
  previous();
});
