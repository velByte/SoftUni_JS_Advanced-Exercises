function solve() {
    const addMovieSection = document.getElementById('container');
    const moviesSection = document.getElementById('movies');
    const archiveSection = document.getElementById('archive');
    
    const onScreenBtn = addMovieSection.getElementsByTagName('button')[0];
    const clearBtn = archiveSection.querySelector("button");

    onScreenBtn.addEventListener('click', onScreenBtnClicked);
    clearBtn.addEventListener("click", clearClicked)

    function onScreenBtnClicked(e){
        e.preventDefault();

        const [movieName, hallName, ticketPrice] = addMovieSection.querySelectorAll('input');
        
        if(
            movieName.value.trim() === '' ||
            hallName.value.trim() === '' || 
            ticketPrice.value.trim() === '' || 
            isNaN(ticketPrice.value.trim()) == true
        ) {
            return
        } 

        const li = addToMoviesSection(movieName.value.trim(), hallName.value.trim(), +ticketPrice.value.trim());
        const ul = moviesSection.querySelector("ul");
        
        ul.appendChild(li)


        //Clear the input
        movieName.value = '';
        hallName.value = '';
        ticketPrice.value = '';

    }

    function addToMoviesSection(name, hall, price){
        
        const li = document.createElement("li");
        const span = document.createElement("span"); 
        const strong = document.createElement("strong"); 
        const div = document.createElement("div"); 
        const divStrong = document.createElement("strong"); 
        const divInput = document.createElement("input"); 
        const divBtn = document.createElement("button");

        span.textContent = name; 
        strong.textContent = `Hall: ${hall}`; 

        divStrong.textContent = price.toFixed(2);
        divInput.placeholder = "Tickets Sold";
        divBtn.textContent = "Archive"
        divBtn.addEventListener("click", archiveClicked); 

        div.appendChild(divStrong);
        div.appendChild(divInput);
        div.appendChild(divBtn);

        li.appendChild(span);
        li.appendChild(strong);
        li.appendChild(div);

        function archiveClicked(){
            const soldTicketCount = divInput.value.trim();

            if(soldTicketCount === "" || isNaN(soldTicketCount) === true){
                return
            } 
            const totalProfit = soldTicketCount * (+price);
            moveToArchive(totalProfit);

        }

        function moveToArchive(total){
            strong.textContent = `Total amount: ${total.toFixed(2)}`
            div.remove();

            const deleteBtn = document.createElement("button"); 
            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener("click", deleteItem)
            li.appendChild(deleteBtn); 

            archiveSection.querySelector("ul").appendChild(li);
        }

        function deleteItem(){
            li.remove();
        }

        return li;
    
    }

    function clearClicked(){
        const allListItems = Array.from(archiveSection.querySelectorAll("li"));

        allListItems.forEach(item => {
            item.remove();
        })
        
    }
}