// Navigation Bar
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Fungsi untuk menampilkan nama user di banner
function displayUserName() {
    var userName = document.getElementById('nameInput').value; // Ambil nilai input
    var bannerText = document.getElementById('bannerText'); // Ambil elemen teks di banner

    if (userName) {
        bannerText.innerHTML = "Selamat Datang, " + userName + "!"; // Tampilkan nama di banner
    } else {
        bannerText.innerHTML = "Welcome to My Homepage"; // Default jika input kosong
    }
}

// Portfolio
let slideIndex = 1;
showSlides(slideIndex);

    // Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

    // Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
}

// Contact Form
document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Ambil nilai dari formulir
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Format output
    const outputMessage = `
        <h3>Your Submitted Information:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;

    // Tampilkan hasil di elemen formOutput
    const formOutput = document.getElementById("formOutput");
    formOutput.innerHTML = outputMessage;

    // Mengosongkan form setelah pengiriman
    document.getElementById('messageForm').reset();
});
