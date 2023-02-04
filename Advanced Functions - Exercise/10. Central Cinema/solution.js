function solve() {
    const addMovieSection = document.getElementById('container');
    const moviesSection = document.getElementById('movies');
    const archiveSection = document.getElementById('archive');
    
    const onScreenBtn = addMovieSection.getElementsByTagName('button')[0];
    onScreenBtn.addEventListener('click', onScreenBtnClicked);

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


        //Clear the input
        movieName.value = '';
        hallName.value = '';
        ticketPrice.value = '';

    }
}