```markdown
# YSL Lawn Care & Snow Removal — Web Client

A fast, responsive, and accessible client-side web application built for YSL Lawn Care & Snow Removal. This repository represents the modernized frontend interface, architected as a decoupled static platform deployed via CDN (Netlify) and integrated with a dedicated Java Spring Boot microservice on Render.

---

## Architecture & Integration

This client operates within a decoupled Jamstack architecture:
* **Frontend Client (`ysl-lawn-care-refactor`):** Semantic HTML5, modern CSS3 (Flexbox/Grid), and Vanilla ES6+ JavaScript. Hosted on Netlify edge nodes for rapid asset delivery and high Core Web Vitals performance.
* **Backend Microservice (`ysl-lawn-care-api-java`):** Java 17 / Spring Boot service containerized with Docker and hosted on Render.
* **Communication Contract:** Client form submissions dispatch asynchronous `POST` requests via the `fetch()` API delivering JSON payloads directly to the Spring Boot REST endpoint (`/api/contact-form`).


```

+------------------------------------+        POST /api/contact-form       +------------------------------------+
|                                    | ----------------------------------> |                                    |
|   Frontend Client (Netlify Edge)   |           (JSON Payload)            |  Spring Boot Service (Render Host) |
|   - Contact Form UI                |                                     |  - ContactController.java          |
|   - Vanilla JS fetch() Handler     | <---------------------------------- |  - EmailService (JavaMailSender)   |
|                                    |           HTTP 200 / Error          |                                    |
+------------------------------------+                                     +------------------------------------+

```

---

## Project Structure

```text
ysl-lawn-care-refactor/
│
├── public/                     # Static production distribution
│   ├── index.html              # Landing page & primary services
│   ├── about-us.html           # Company bio & operations background
│   ├── gallery.html            # Completed work showcases
│   ├── contact-us.html         # Estimate intake & scheduling form
│   ├── css/
│   │   └── styles.css          # Responsive design & typography
│   └── images/                 # Optimized image assets & favicons
│
├── .env.example                # Blueprint for frontend environment variables
├── .gitignore                  # Git tracking rules
└── README.md                   # System documentation

```

---

## Backend Integration Details

### 1. API Endpoint Configuration

The contact form script binds to the API base URL defined via environment configuration:

* **Production Endpoint:** `https://ysl-lawn-care-api-java.onrender.com/api/contact-form`
* **Local Development Endpoint:** `http://localhost:8080/api/contact-form`

### 2. Request Contract (`POST /api/contact-form`)

The contact page collects input parameters and dispatches the following JSON model mapped directly to `ContactForm.java`:

```json
{
  "name": "Jane Doe",
  "phone": "(303) 555-0123",
  "email": "janedoe@example.com",
  "address": "123 Main St, Thornton, CO",
  "service": "Lawn Care",
  "message": "Need a seasonal aeration and mowing estimate."
}

```

### 3. Response Handling & States

* **`200 OK`**: Frontend renders an inline success modal/alert and clears the form fields.
* **`4xx / 5xx Error`**: Gracefully displays an inline error prompt informing the customer to retry or call directly, avoiding silent failures or unhandled promise rejections.
* **CORS Compliance**: The Spring Boot backend `ContactController` is configured via `@CrossOrigin` to allow requests originating from the Netlify production domain and `localhost` ports.

---

## Local Development Setup

### Prerequisites

* Web browser (Chrome, Firefox, Safari, Edge)
* Local HTTP server (`Live Server` in VS Code, `npx serve`, or Python HTTP module)
* *(Optional)* Java 17+ and Maven to run the companion `ysl-lawn-care-api-java` backend locally

### Step-by-Step Installation

1. **Clone the repository:**
```bash
git clone [https://github.com/serumddr/ysl-lawn-care-refactor.git](https://github.com/serumddr/ysl-lawn-care-refactor.git)
cd ysl-lawn-care-refactor

```


2. **Configure environment settings:**
```bash
cp .env.example .env

```


Configure the target API URL inside `.env` or your JavaScript config:
```env
API_BASE_URL=http://localhost:8080
# For production testing:
# API_BASE_URL=[https://ysl-lawn-care-api-java.onrender.com](https://ysl-lawn-care-api-java.onrender.com)

```


3. **Launch the development server:**
* **Using Python:**
```bash
python3 -m http.server 3000 --directory public

```


* **Using Node:**
```bash
npx serve public

```




4. Navigate to `http://localhost:3000` in your browser.

---

## Production Deployment

* **Hosting:** Netlify (Edge CDN)
* **Publish Directory:** `public/`
* **Custom Domain:** Configured via DNS `A` records and `CNAME` targeting Netlify's load balancer.

---

## Related Repositories

* [ysl-lawn-care-api-java](https://www.google.com/search?q=https://github.com/serumddr/ysl-lawn-care-api-java): Dedicated Spring Boot REST backend handling SMTP mail dispatching and contact form routing.

---

## License

This project is licensed under the MIT License. See the [LICENSE](https://www.google.com/search?q=LICENSE) file for full details.

```

---

### Terminal Commands to Save & Push

Run these terminal commands from inside your `ysl-lawn-care-refactor` folder:

```bash
git add README.md
git commit -m "docs: update root README with complete architecture and backend contract"
git push origin main

```
