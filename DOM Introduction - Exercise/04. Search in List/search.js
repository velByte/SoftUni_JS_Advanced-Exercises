function search() {
   let matchCountElemet = document.getElementById("result");
   let matchCount = 0;
   let input = document.getElementById("searchText").value
   let townsCollection = document.querySelectorAll("li");


   for (const item of townsCollection) {
      let text = item.textContent;

      if (text.includes(input)) {
         item.style.fontWeight = "bold";
         item.style.textDecoration = "underline";
         matchCount++;
      }
   }
   matchCountElemet.innerText = `${matchCount} matches found`;
   document.getElementById("searchText").value = ""
}
