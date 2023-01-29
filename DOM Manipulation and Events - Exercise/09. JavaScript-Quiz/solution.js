function solve() {

  const sectionsArr = Array.from(document.querySelectorAll('section'));
  const rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  const answareWraper = document.querySelectorAll("p");
  for (const question of answareWraper) {
    question.addEventListener("click", clicked);
  }

  let currentIndex = 0;
  let correctAnswers = 0;
  function clicked(e) {
    if (e.target.textContent === rightAnswers[currentIndex]) {
      correctAnswers++;
    }
    sectionsArr[currentIndex].style.display = "none";
    if ((currentIndex + 1) < sectionsArr.length) {
      currentIndex = (currentIndex + 1);
      sectionsArr[currentIndex].style.display = "block";
    } else {
      showResults();
    }
  }

  function showResults() {
    sectionsArr[currentIndex].style.display = "none";
    document.querySelector("#results").style.display = "block";
    let resultsHeading = document.querySelector("#results h1");
    if (correctAnswers === 3) {
      resultsHeading.textContent = "You are recognized as top JavaScript fan!";
    } else {
      resultsHeading.textContent = `You have ${correctAnswers} right answers`;
    }
  }
}
