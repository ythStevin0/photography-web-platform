<div align="center">

# 📷 Luminari Studio

**Platform web fotografi profesional berbasis MERN Stack**

![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

</div>

---

## 📌 Overview

Luminari Studio adalah website portofolio fotografi profesional yang dibangun dengan arsitektur **MERN Stack** modern. Menampilkan layanan, galeri portofolio dengan filter kategori, dan integrasi kontak langsung via WhatsApp. Mendukung upload media ke **Cloudinary** dan data dinamis dari **MongoDB**.

---

## 🗂️ Struktur Proyek

```
luminari-mern/
├── client/                          # Frontend — React + Vite + TypeScript
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx           # Scroll-aware navigation
│   │   │   ├── Hero.tsx             # Landing section + WhatsApp CTA
│   │   │   ├── Services.tsx         # Service list with hover reveal
│   │   │   ├── Gallery.tsx          # Masonry gallery + category filter
│   │   │   └── Contact.tsx          # Contact section + social links
│   │   ├── hooks/
│   │   │   └── usePublicData.ts     # Data fetching hook with fallback
│   │   ├── services/
│   │   │   └── api.ts               # Axios instance + API methods
│   │   ├── constants/
│   │   │   └── fallback.ts          # Static fallback data (offline mode)
│   │   └── types/
│   │       └── index.ts             # Global TypeScript interfaces
│   ├── tailwind.config.js
│   └── vite.config.ts
│
└── server/                          # Backend — Express + Mongoose
    └── src/
        ├── config/
        │   └── cloudinary.js        # Multer + Cloudinary storage config
        ├── middleware/
        │   └── errorHandler.js      # Global error handler
        ├── models/
        │   └── index.js             # Mongoose schemas (Profile, Service, Portfolio)
        ├── routes/
        │   └── api.js               # REST API routes (public + admin)
        └── server.js                # Express entry point
```

---

## ⚙️ Instalasi & Konfigurasi

### Prerequisites
- Node.js >= 18
- MongoDB Atlas account
- Cloudinary account

### 1. Clone Repository

```bash
git clone https://github.com/ythStevin0/photography-web-platform.git
cd photography-web-platform
```

### 2. Install Dependencies

```bash
# Install semua sekaligus
npm run install:all

# Atau manual per folder
cd client && npm install
cd ../server && npm install
```

### 3. Konfigurasi Environment

```bash
cd server
cp .env.example .env
```

Isi file `.env`:

```env
PORT=5000
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/luminari
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 4. Jalankan Development Server

```bash
# Terminal 1 — Backend
npm run dev:server

# Terminal 2 — Frontend
npm run dev:client
```

| Service | URL |
|---------|-----|
| Frontend | http://localhost:3000 |
| Backend | http://localhost:5000 |

---

## 🔌 API Reference

### Public Endpoints

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| `GET` | `/api/public-data` | Mengambil profile, services, dan portfolio sekaligus |
| `GET` | `/health` | Health check server |

### Admin Endpoints

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| `POST` | `/api/admin/profile` | Upsert profil studio |
| `POST` | `/api/admin/service` | Tambah layanan baru |
| `DELETE` | `/api/admin/service/:id` | Hapus layanan berdasarkan ID |
| `POST` | `/api/admin/portfolio` | Upload foto ke Cloudinary (`multipart/form-data`) |
| `DELETE` | `/api/admin/portfolio/:id` | Hapus foto dari DB dan Cloudinary |

---

## 🧰 Tech Stack

| Layer | Teknologi |
|-------|-----------|
| **Frontend** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS 3 (custom design tokens) |
| **Animation** | Framer Motion |
| **Icons** | Lucide React |
| **HTTP Client** | Axios |
| **Backend** | Node.js, Express 4 |
| **Database** | MongoDB, Mongoose |
| **Media Storage** | Cloudinary + Multer |
| **Notifications** | React Hot Toast |

---

## ✨ Fitur Utama

- **Scroll-aware Navbar** — transisi glass morphism saat scroll
- **Hero Section** — animasi entrance dengan Framer Motion
- **Services** — hover image reveal interaktif
- **Portfolio Gallery** — masonry layout + filter kategori animasi
- **Offline Fallback** — tampil dengan data statis bila API tidak tersedia
- **Cloudinary Integration** — upload & manajemen media otomatis
- **WhatsApp CTA** — tombol booking langsung via WhatsApp

---

<div align="center">
  <p>Built with ☕ by <strong>ythStevin0</strong></p>
</div>