let projectsLink = document.querySelector('#projects-link');
let closeButton = document.querySelector('#close-button');
let display = document.querySelector('#display');
let modal = document.querySelector('#modal');

if(document.body.offsetWidth < 600){
    display.innerHTML = "";
    projectsLink.classList.add('show');
    projectsLink.classList.add('show-link');
}
else{
    projectsLink.innerHTML = "";
}


projectsLink.addEventListener('click', ()=> {
        modal.classList.toggle('show-modal');
})

closeButton.addEventListener('click', ()=>{
    modal.classList.toggle('show-modal'); 
})


//display is always there...just hidden on smaller sizes? nope
//display is shown on window size greater than 600
//but taken away on doc load if window size is less