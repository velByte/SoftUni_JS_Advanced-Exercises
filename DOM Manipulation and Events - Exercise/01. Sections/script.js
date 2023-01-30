function create(words) {
   const content = document.getElementById('content');
   const createDiv = (text) => {
      const div = document.createElement("div");
      const p = document.createElement("p");
      p.textContent = text;
      p.style.display = "none";
      div.appendChild(p);
      div.addEventListener("click", e => e.target.children[0].style.display = 'block');
      return div;
   };

   words.forEach(word => content.appendChild(createDiv(word)));
}