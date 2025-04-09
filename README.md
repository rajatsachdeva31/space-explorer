# 🚀 Space Explorer

Space Explorer is a NASA-inspired Angular 18 single-page application (SPA) that showcases space-related content using public APIs, reactive forms, and a responsive design.

---

## 🌟 Features

- 🔭 **Home Page**

  - Beautiful hero section with a starry background
  - NASA quote and inspirational text
  - Interactive planet cards (Earth, Mars, Jupiter)

- 🌌 **NASA Feed Page**

  - Consumes data from NASA's APOD (Astronomy Picture of the Day) API
  - Displays title, explanation, and image

- 🛰️ **Mission Request Form**
  - Reactive form with name, email, planet preference, and message
  - Client-side validation and feedback

---

## 🛠️ Technologies Used

- Angular 18
- Angular Router
- Reactive Forms
- SCSS (space-themed styling)
- NASA APOD API

---

## 📁 Project Structure (Simplified)

```
src/
├── app/
│   ├── components/
│   │   └── navbar
│   ├── pages/
│   │   ├── home
│   │   ├── nasa-feed
│   │   └── mission-request
│   ├── services/
│   │   └── nasa-api.service.ts
│   └── routes.ts
```

---

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone <repo-url>
cd space-explorer
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the app locally**

```bash
ng serve
```

Visit `http://localhost:4200`

4. **Build for production**

```bash
ng build
```

---

## 🔑 NASA API Key

Get your free API key from https://api.nasa.gov/ and replace `DEMO_KEY` in `nasa-api.service.ts`:

```ts
private apiKey = 'YOUR_API_KEY';
```

---

## 💡 Inspiration

> "Somewhere, something incredible is waiting to be known." – Carl Sagan

---

## 📬 Contact

Made with 💫 by [Your Name] — for educational purposes.
