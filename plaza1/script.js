let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu=document.querySelector('#menu-bar')
let navbar=document.querySelector('.navbar')
let videoBtn=document.querySelectorAll('.vid-btn')
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submitButton');
const message = document.getElementById('message');
const decrementBtn = document.getElementById("decrement");
const incrementBtn = document.getElementById("increment");
const resetBtn = document.getElementById("reset");
const numberInput = document.getElementById("number");
const addParagraphButton = document.getElementById('addParagraphButton');
const paragraphContainer = document.getElementById('paragraphContainer');



const rapper = document.querySelector(".rapper"),
selectBtn = rapper.querySelector(".select-btn");

selectBtn.addEventListener("click", () => {
	rapper.classList.toggle("active");
})





window.onscroll = () =>{
	searchBtn.classList.remove('bx-x');
	searchBar.classList.remove('active');
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
	loginForm.classList.remove('active');
}

menu.addEventListener('click',() => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
});



searchBtn.addEventListener('click',() => {
	searchBtn.classList.toggle('bx-x');
	searchBar.classList.toggle('active');
});

formBtn.addEventListener('click',() => {
	loginForm.classList.add('active');
});

formClose.addEventListener("click", () => { // Gamitin ang variable na 'formClose'
    alert("Are you sure you want to leave! (click OK)");
    document.querySelector('.login-form-container').classList.remove('active');
});

videoBtn.forEach(btn =>{
	btn.addEventListener('click', ()=>{
		document.querySelector('.controls .active').classList.remove('active');
		btn.classList.add('active');
		let src = btn.getAttribute('data-src');
		document.querySelector('#video-slider').src = src;
	});
});



function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isValidPassword(password) {
    return password.length >= 8;
}

submitButton.addEventListener("click", function(e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // ❌ Check if email is empty
    if (email === '') {
        message.textContent = "Please enter your email.";
        message.style.color = "red";
        return; // stop execution
    }

    // ❌ Check if email is empty
    if (password === '') {
        message.textContent = "Please enter your password.";
        message.style.color = "red";
        return; // stop execution
    }


    // ❌ Wrong email = no reset
    if (!isValidEmail(email)) {
        message.textContent = "Invalid email format!";
        message.style.color = "red";
        return;
    }

    // ❌ Wrong password = no reset
    if (!isValidPassword(password)) {
        message.textContent = "Password must be at least 8 characters.";
        message.style.color = "red";
        return;
    }

    // ✅ SUCCESS LOGIN
    message.textContent = "Login successful!";
    message.style.color = "green";

    // 🔥 AUTO RESET AFTER SUCCESS
    setTimeout(() => {
        emailInput.value = "";
        passwordInput.value = "";
        message.textContent = "";
        message.style.color = "";
    }, 1500);
});


// INCREMENT
incrementBtn.addEventListener("click", () => {
    numberInput.value = parseInt(numberInput.value) + 1;
});

// DECREMENT (LIMIT: cannot go below 0)
decrementBtn.addEventListener("click", () => {
    if (numberInput.value > 0) {
        numberInput.value = parseInt(numberInput.value) - 1;
    }
});

// RESET
resetBtn.addEventListener("click", () => {
    numberInput.value = 0;
});


 


var swiper = new Swiper(".review-slider", {
	spaceBetween: 20,
	loop:true,
	autoplay: {
		delay:2500,
		disableInteraction: false,
	},
	breakpoints: {
		640: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	},
});


var swiper = new Swiper(".brand-slider", {
	spaceBetween: 20,
	loop:true,
	autoplay: {
		delay:2500,
		disableInteraction: false,
	},
	breakpoints: {
		450: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		991: {
			slidesPerView: 4,
		},
		1200: {
			slidesPerView: 5,
		},
	},
});


addParagraphButton.addEventListener('click', function() {
	const newParagraph = document.createElement('p');
	newParagraph.textContent = 'Thank you and Mabuhay';
	paragraphContainer.appendChild(newParagraph)
});