function getArticleGenerator(articles) {
  console.log(articles);
  let iterator = articles[Symbol.iterator]();
  let div = document.getElementById("content");

  return function () {
    let result = iterator.next();
    if (!result.done) {
      let article = document.createElement("article");
      article.textContent = result.value;
      div.appendChild(article);
    }
  };
}
