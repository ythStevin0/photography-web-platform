# Luminari Studio – MERN Stack

Fotografi profesional website dibangun dengan **MongoDB · Express · React · Node.js** + **Tailwind CSS**.

---

## Struktur Folder

```
luminari-studio/
├── client/                  # React + Vite + Tailwind (Frontend)
│   ├── src/
│   │   ├── components/      # Hero, Navbar, Services, Gallery, Contact
│   │   ├── constants/       # fallback.ts  (data demo bila API offline)
│   │   ├── hooks/           # usePublicData.ts
│   │   ├── services/        # api.ts (axios wrapper)
│   │   └── types/           # index.ts (TypeScript interfaces)
│   ├── tailwind.config.js
│   └── vite.config.ts
│
└── server/                  # Express + Mongoose (Backend)
    └── src/
        ├── config/          # cloudinary.js (multer + cloudinary)
        ├── middleware/      # errorHandler.js
        ├── models/          # index.js (Profile, Service, Portfolio)
        ├── routes/          # api.js (public + admin endpoints)
        └── server.js        # Entry point
```

---

## Setup & Menjalankan

### 1 · Clone & Install

```bash
npm run install:all
```

### 2 · Konfigurasi Backend

```bash
cp server/.env.example server/.env
# Isi MONGO_URI dan CLOUDINARY_* di server/.env
```

### 3 · Jalankan

```bash
# Terminal 1 – Backend
npm run dev:server

# Terminal 2 – Frontend
npm run dev:client
```

Frontend: **http://localhost:3000**  
Backend:  **http://localhost:5000**

---

## API Endpoints

| Method | Path | Keterangan |
|--------|------|------------|
| GET | `/api/public-data` | Ambil semua data publik (profile, services, portfolio) |
| POST | `/api/admin/profile` | Upsert profil studio |
| POST | `/api/admin/service` | Tambah layanan baru |
| DELETE | `/api/admin/service/:id` | Hapus layanan |
| POST | `/api/admin/portfolio` | Upload foto portofolio (multipart/form-data) |
| DELETE | `/api/admin/portfolio/:id` | Hapus foto + Cloudinary asset |
| GET | `/health` | Health check server |

---

## Tech Stack

| Layer | Teknologi |
|-------|-----------|
| Frontend | React 18, TypeScript, Vite, Framer Motion, Lucide |
| Styling | Tailwind CSS 3 (custom theme) |
| Backend | Node.js, Express 4 |
| Database | MongoDB + Mongoose |
| Media Storage | Cloudinary (via Multer) |
