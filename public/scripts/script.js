/*
	Name: Donnie Ranjel
	File Name: script.js
	Date: 11/24/2024
*/

const API_URL = "https://ysl-lawn-care-api-java.onrender.com/api/contact-form";

//Global variables
var figElement = document.getElementById("placeholder");
var imgSource = document.getElementById("image");
var figCap = document.getElementById("gal-text");

//Hamburger menu function
function hamburger() {
	var menu = document.getElementById("menu-links");
	var logo = document.getElementById("mobile-logo");
	if (menu.style.display === "block" && logo.style.display === "none") {
		menu.style.display = "none";
		logo.style.display = "block";
	} else {
		menu.style.display = "block";
		logo.style.display = "none";
	}
}

// Add event listener to the menu icon
document.addEventListener('DOMContentLoaded', function() {
    // ... (menuIcon setup)

    var contactForm = document.getElementById('contactForm');
    if (contactForm) {

        contactForm.addEventListener('submit', async function(event) { // ADD 'async' HERE
            event.preventDefault();

            // --- 1. Client-Side Validation (Fast Check) ---
            var missing = [];

            if (!document.getElementById('fName').value.trim()) { missing.push('First Name'); }
            if (!document.getElementById('lName').value.trim()) { missing.push('Last Name'); }
            if (!document.getElementById('email').value.trim()) { missing.push('Email'); }
            if (!document.getElementById('phone').value.trim()) { missing.push('Phone'); }
            
            // ... (rest of validation) ...
            
            if (missing.length > 0) {
                alert('Please fill in the following required fields: ' + missing.join(', ') + '.');
                return; 
            }

            // Gather Data and Convert to JSON
            var formData = new FormData(contactForm);
            var data = {};

            formData.forEach((value, key) => {
                // Handle multi-select fields (checkboxes)
                if (key.endsWith('[]')) {
                    key = key.slice(0, -2);
                    data[key] = data[key] || [];
                    data[key].push(value);
                } 
                // Handle all single inputs (fName, email, phone, etc.)
                else {
                    // THE FIX: Send null if the field is completely empty
                    data[key] = (value.trim() === '') ? null : value.trim();
                }
            });
            
            // --- 2. Send the POST Request to the Java API using async/await ---
            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data) 
                });

                // Read response text for detailed error message
                const responseText = await response.text();

                if (!response.ok) {
                    // This handles 400 (Validation Failure) and 500 (Email Failure)
                    throw new Error(responseText);
                }
                
                // SUCCESS
                alert(responseText);
                contactForm.reset(); 

            } catch (error) {
                // FAILURE: Shows the message returned by the Java Controller (e.g., "Please fill in...")
                alert('Submission failed: ' + error.message);
                console.error('Submission failed:', error);
            }
        });
    }
});

//Function to display the first picture
function pic1() {
    imgSource.src = "images/after-back-white-house.jpeg";
    imgSource.alt = "clean fresh mowed striped grass backyard";
    figElement.style.display = "block";
    figCap.innerText = "Stripe Design";
}

//Function to display second image
function pic2() {
	imgSource.src = "images/after-wavy-yard-design.jpeg";
	imgSource.alt = "mowed grass wavy design";
    figElement.style.display = "block";
    figCap.textContent = "Wavy Design";
}

//Function to display third image
function pic3() {
	imgSource.src = "images/after-trimmed-front-yard.jpeg";
	imgSource.alt = "mowed grass trimmed walkway";
    figElement.style.display = "block";
    figCap.textContent = "Walkway Installation";
}

//Function to display fourth image
function pic4() {
    imgSource.src = "images/after-backyard.jpeg";
    imgSource.alt = "clean fresh mowed backyard";
    figElement.style.display = "block";
    figCap.textContent = "Spring Special";
}

//Function to display fifth image
function pic5() {
	imgSource.src = "images/after-ac-side-house.jpeg";
	imgSource.alt = "after image of complex edge and trim";
    figElement.style.display = "block";
    figCap.textContent = "Custom Special";
}

//Function to display sixth image
function pic6() {
	imgSource.src = "images/striped-back-yard.jpeg";
	imgSource.alt = "Mowed yard with stripe design";
    figElement.style.display = "block";
    figCap.textContent = "Fall Special";
}

//Function to display seventh image
function pic7() {
    imgSource.src = "images/christmas-decor-front-lawn4.jpg";
    imgSource.alt = "christmas decoration setup lights and blow-ups";
    figElement.style.display = "block";
    figCap.textContent = "Christmas Paradise";
}

//Function to display eighth image
function pic8() {
	imgSource.src = "images/purple-blue-halloween-decor.png";
	imgSource.alt = "purple and blue halloween lights and other decorations";
    figElement.style.display = "block";
    figCap.textContent = "Halloween Light";
}

//Function to display ninth image
function pic9() {
	imgSource.src = "images/halloween-decor-orange-lights.jpg";
	imgSource.alt = "light of orange halloween and other decorations";
    figElement.style.display = "block";
    figCap.textContent = "Halloween Dark";
}


