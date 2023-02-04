function solve() {

    document.getElementById('add').addEventListener('click', addClicked);
    const [addTaskSection, openSection, inProgressSection, completeSection] = document.querySelectorAll('section');

    //Utils
    function addClicked(event){
      event.preventDefault();
      
      const task = document.querySelector('#task').value.trim();
      const description = document.querySelector('#description').value.trim();
      const date = document.querySelector('#date').value.trim();

      if(task === '' || description === ''|| date === '' ){
        return;
      }

      const taskArticle = createTaskArticle(task, description, date);
      openSection.lastElementChild.appendChild(taskArticle);
    }

    function createTaskArticle(task, description, date){
      const article = document.createElement('article');
      const h3 = document.createElement('h3'); 
      const pDesc = document.createElement('p');
      const pDate = document.createElement('p');
      const divBtns = document.createElement('div');
      const startBtn = document.createElement('button');
      const deleteBtn = document.createElement('button'); 
      
      h3.textContent = task; 
      pDesc.textContent = `Description: ${description}`;
      pDate.textContent = `Due Date: ${date}`;
      
      divBtns.classList.add('flex');
      
      startBtn.classList.add('green');
      startBtn.textContent = 'Start';
      startBtn.addEventListener('click', () => {
        inProgressSection.lastElementChild.appendChild(article);
        startBtn.remove();
        const finishBtn = document.createElement('button');
        finishBtn.classList.add('orange');
        finishBtn.textContent = 'Finish';
        finishBtn.addEventListener('click', () => {
          completeSection.lastElementChild.appendChild(article);
          divBtns.remove();
        })

        divBtns.appendChild(finishBtn);
      });
      
      deleteBtn.classList.add('red'); 
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', () => {
        article.remove()
      });

      divBtns.appendChild(startBtn);
      divBtns.appendChild(deleteBtn);

      article.appendChild(h3);
      article.appendChild(pDesc);
      article.appendChild(pDate);
      article.appendChild(divBtns);

      return article;
    }

    function startClicked(){}
    function deleteClicked(){
      article.remove()
    }
    function finishClicked(){}
  }
  