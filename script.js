let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer','Python Developer','Web Designer','Web Developer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay:1200,
    loop: true,
  });
  
   document.getElementById("contact-form").addEventListener("submit", function(event) {
       event.preventDefault(); // Prevent the form from submitting the traditional way

       // Get the form data
       const formData = {
           full_name: this.full_name.value,
           email: this.email.value,
           message: this.message.value
       };

       // Use EmailJS to send the email
       emailjs.send("service_39ukrp5", "template_82u9egw",formdata)
           .then(function(response) {
               alert("Message sent successfully!");
               console.log("SUCCESS!", response.status, response.text);
           }, function(error) {
               alert("Failed to send message. Please try again.");
               console.log("FAILED...", error);
           });
   });


