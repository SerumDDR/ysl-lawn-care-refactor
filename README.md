YSL Lawn Care & Snow Removal — Web Client

A fast, responsive, and mobile-friendly website built for YSL Lawn Care & Snow Removal. This repository contains the static client-side application deployed to Netlify and integrated with a decoupled Spring Boot backend service.

Architecture Overview

Frontend: Semantic HTML5, Modular CSS3, and Vanilla JavaScript (ES6+).

Hosting: Static CDN edge hosting via Netlify.

Backend Microservice: Decoupled Java 17 / Spring Boot API hosted on Render.

Form Handling: Submissions dispatch asynchronous fetch() requests directly to the API endpoint (/api/contact-form).

Project Structure

ysl-lawn-care-refactor/
│
├── public/                     # Static production distribution
│   ├── index.html              # Homepage & company services
│   ├── about-us.html           # Company bio & operations background
│   ├── gallery.html            # Before/after showcases
│   ├── contact-us.html         # Estimate & intake form
│   ├── css/
│   │   └── styles.css          # Core styles & responsive rules
│   └── images/                 # Photographic assets & web icons
│
├── .gitignore
└── README.md


Backend Integration Details

API Endpoints

Production Endpoint: https://ysl-lawn-care-api-java.onrender.com/api/contact-form

Local Development Endpoint: http://localhost:8080/api/contact-form

Request Contract (POST /api/contact-form)

The intake form transmits a JSON payload mapped directly to the backend ContactForm DTO:

{
  "name": "Jane Doe",
  "phone": "(303) 555-0123",
  "email": "jane@example.com",
  "address": "123 Main St, Thornton, CO",
  "service": "Lawn Care",
  "message": "Interested in seasonal aeration and mowing."
}


Response Codes

200 OK: Lead submitted successfully; automated notification email dispatched.

400 Bad Request: Validation failure on required fields.

500 Internal Server Error: Downstream SMTP delivery failure.

Local Development

Prerequisites

Modern web browser

Lightweight local HTTP server (VS Code Live Server, Python, or Node)

Running Locally

Clone the repository:

git clone https://github.com/serumddr/ysl-lawn-care-refactor.git
cd ysl-lawn-care-refactor


Start a local server pointing to public/:

Using Python 3:

python3 -m http.server 3000 --directory public


Using Node (npx):

npx serve public


Open http://localhost:3000 in your browser.

Deployment

Host: Netlify

Publish Directory: public/

CORS Settings: Configured on the backend to allow origins from Netlify production domains and local development ports.

Related Repositories

ysl-lawn-care-api-java: Dedicated Spring Boot REST backend handling SMTP mail dispatch.

License

This project is licensed under the MIT License.
