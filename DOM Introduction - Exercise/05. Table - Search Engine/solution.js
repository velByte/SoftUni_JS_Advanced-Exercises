function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let tbodyElement = document.getElementsByTagName("tbody")[0];
      let tr = tbodyElement.getElementsByTagName("tr");
      let allTds = tbodyElement.getElementsByTagName("td");
      let input = document.getElementById("searchField").value;
      resetStyle();
      for (const item of tr) {
         let [studentName, email, course] = Array.from(item.getElementsByTagName("td")).map(item => item.innerText);
         let studentArr = studentName.split(" ");
         if (studentArr.indexOf(input) != -1 || studentName === input) {
            if (!(item.classList.contains("select"))) {
               item.classList.add("select");
            }
         }

         if (email.includes(input) && input.length != 0) {
            if (!(item.classList.contains("select"))) {
               item.classList.add("select");
            }
         }

         if (course.includes(input) && input.length != 0) {
            if (!(item.classList.contains("select"))) {
               item.classList.add("select");
            }
         }

      }


      document.getElementById("searchField").value = "";


      function resetStyle() {
         for (const item of tr) {
            if (item.classList.contains("select")) {
               item.classList.remove("select")
            }
         }
      }
   }
}