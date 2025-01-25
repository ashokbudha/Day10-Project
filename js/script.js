const header = document.querySelector(".header-container");
const navbar = document.querySelector(".navbar");
const hamburgerMenu = document.querySelector('.hamburgar-menu');
const imageTag = document.querySelector(".hamburgar-menu img");
hamburgerMenu.addEventListener("click",()=>{
    navbar.classList.toggle('active');
    header.classList.toggle("active") ;

    if (imageTag.src.includes("image/hamburger-menu.png")) {
        console.log("hello inside");
        imageTag.src = '../image/cancel-hamburger-menu.png'; // Replace with close image
        imageTag.alt = 'Close Menu';  // Update alt text (optional)
    } else {
        imageTag.src = 'image/hamburger-menu.png'; // Replace with hamburger menu image
        imageTag.alt = 'Hamburger Menu';  // Update alt text (optional)
    }
})

