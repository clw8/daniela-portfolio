//contact form
// const contactSubmit = document.querySelector('#contact-submit');
// const formInputs = document.querySelectorAll('.form-input');
// contactSubmit.addEventListener('click', (e)=> {
//     e.preventDefault();
//     //json triggers preflight, so we are manually serializing the input data rather than sending as a json object
//    let data = "";
//     for (let i = 0; i < formInputs.length; ++i) {
//       let input = formInputs[i];
//       if (input.name) {
//       data += `${input.value}%$`;
//       }
//     }

//     let xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         document.getElementById("submit-res").innerHTML = "Thanks for getting in touch. I'll get back to you soon :)";
//         document.getElementById("submit-res").classList.add('ok');
//       }
//       else if(this.status !== 0 && this.status !== 200 && this.status !== undefined){
//         document.getElementById("submit-res").innerHTML = "Something went wrong..Please try again.";       
//         document.getElementById("submit-res").classList.add('error');
//       }
//     };

//    const url = "https://script.google.com/macros/s/AKfycbxxOgizTg8_9ZXoGH_6zmp8JlcuOmW4TSjkzeyfDW7lAlWiyiAg/exec";
//    xhttp.open("POST", url, true);
//     xhttp.setRequestHeader('Content-Type', 'text/plain');
//    xhttp.setRequestHeader('Accept', 'text/plain');
//     xhttp.send(data);
// })
