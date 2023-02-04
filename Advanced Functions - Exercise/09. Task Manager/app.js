function solve() {
    document.getElementById("add").addEventListener("click", addClickHendler);

      const openSectionElement = document.querySelector("#task")
      const inProgresSectionElement = document.querySelector("#description")
      const completeSectionElement = document.querySelector("#date")


    function addClickHendler(event) {
      event.preventDefault();
      const inputData = validateInput();
      if (inputData) {
        addToOpen(inputData);
      }
    }
  
    function addToOpen(dataObject) {
      let { taskInput, descriptionInput, dueDateInput } = dataObject;
      console.log("Add");
      let articleHtml = createOpenCard(taskInput, descriptionInput, dueDateInput);
      openSectionElement.appendChild(articleHtml);
    }
  
    function validateInput() {
      let taskInput = document.getElementById("task").value;
      let descriptionInput = document.getElementById("description").value;
      let dueDateInput = document.getElementById("date").value;
  
      if (!taskInput || !descriptionInput || !dueDateInput) {
        return false;
      } else {
        return {
          taskInput,
          descriptionInput,
          dueDateInput,
        };
      }
    }
  
    function btnClicked(event) {
      let buttonContent = event.target.textContent;
  
      switch (buttonContent) {
        case "Start":
          moveToInProgres(event);
          break;
        case "Delete":
          deleteCard(event);
          break;
        case "Finish":
          finishClicked(event);
          break;
        default:
          break;
      }
    }
  
    function finishClicked(event){
      let article = event.target.closest("article");
      let divs = article.getElementsByTagName("div");
          divs[0].remove();
      completeSectionElement.appendChild(article);
    }
  
  
    function deleteCard(event) {;
      let article = event.target.closest("article");
          article.remove();
    }
  
    function moveToInProgres(event){
      let article = event.target.closest("article");
      let btnStart = article.querySelectorAll("button"); 
      btnStart[0].className = "red"; 
      btnStart[0].textContent = "Delete"
      btnStart[1].className = "orange"; 
      btnStart[0].textContent = "Finish"
  
      inProgresSectionElement.appendChild(article);
    }
  
    function createOpenCard(tastTitel, taskDescription, taskDueDate) {
      let article = document.createElement("article");
      let h3 = document.createElement("h3");
      let descriptionP = document.createElement("p");
      let dueDateP = document.createElement("p");
      let div = document.createElement("div");
      let btnStart = document.createElement("button");
      let btnDelete = document.createElement("button");
  
      div.className = "flex";
      btnStart.className = "green";
      btnStart.onclick = btnClicked;
      btnDelete.onclick = btnClicked;
      btnDelete.className = "red";
      btnStart.textContent = "Start";
      btnDelete.textContent = "Delete";
  
      div.appendChild(btnStart);
      div.appendChild(btnDelete);
  
      h3.textContent = tastTitel;
      article.appendChild(h3);
  
      descriptionP.textContent = `Description: ${taskDescription}`;
      article.appendChild(descriptionP);
  
      dueDateP.textContent = `Due Date: ${taskDueDate}` ;
      article.appendChild(dueDateP);
  
      article.appendChild(div);
  
      return article;
    }
  }
  