# Lee Trends - Designer Boutique

Full-stack boutique web app with Spring Boot backend and React frontend.

---

## Project Structure

```
LeeTrends/
├── backend/     → Spring Boot (Java 21) + PostgreSQL + Cloudinary
├── frontend/    → React + Vite + Tailwind CSS
└── render.yaml  → Render deployment config
```

---

## Local Development

### Backend

```bash
cd backend
# Set up .env with your PostgreSQL and Cloudinary credentials
./mvnw spring-boot:run
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Deploy Backend on Render

1. Push code to GitHub
2. Go to [render.com](https://render.com) → New → Web Service
3. Connect your GitHub repo
4. Set these settings:
   - **Root Directory:** `backend`
   - **Build Command:** `./mvnw clean package -DskipTests`
   - **Start Command:** `java -jar target/backend-0.0.1-SNAPSHOT.jar`
   - **Runtime:** Java
5. Add Environment Variables:

| Key | Value |
|-----|-------|
| `SPRING_DATASOURCE_URL` | `jdbc:postgresql://<host>/<db>` |
| `SPRING_DATASOURCE_USERNAME` | your db username |
| `SPRING_DATASOURCE_PASSWORD` | your db password |
| `SPRING_DATASOURCE_DRIVER_CLASS_NAME` | `org.postgresql.Driver` |
| `SPRING_JPA_PROPERTIES_HIBERNATE_DIALECT` | `org.hibernate.dialect.PostgreSQLDialect` |
| `SPRING_JPA_HIBERNATE_DDL_AUTO` | `update` |
| `CLOUDINARY_CLOUD_NAME` | your cloudinary cloud name |
| `CLOUDINARY_API_KEY` | your cloudinary api key |
| `CLOUDINARY_API_SECRET` | your cloudinary api secret |
| `JWT_SECRET` | a long random secret string |
| `ALLOWED_ORIGINS` | `https://your-app.vercel.app` |

> **Tip:** Use Render's free PostgreSQL database and copy the Internal Database URL.

---

## Deploy Frontend on Vercel

1. Go to [vercel.com](https://vercel.com) → New Project
2. Import your GitHub repo
3. Set **Root Directory** to `frontend`
4. Add Environment Variable:

| Key | Value |
|-----|-------|
| `VITE_API_URL` | `https://your-backend.onrender.com/api` |

5. Deploy — Vercel auto-detects Vite.

> The `vercel.json` file handles SPA routing automatically.

---

## Admin Setup

After deploying, register an admin account by calling:

```
POST https://your-backend.onrender.com/api/auth/register
Content-Type: application/json

{
  "email": "admin@leetrends.com",
  "password": "yourpassword"
}
```

Then login at `/login` on your frontend.

---

## Tech Stack

- **Backend:** Spring Boot 3, Spring Security, JWT, JPA, PostgreSQL, Cloudinary
- **Frontend:** React 19, Vite, Tailwind CSS v4, Swiper, Framer Motion, React Hot Toast
