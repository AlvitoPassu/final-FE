# Carta.AI - Generator Undangan Digital

Proyek ini adalah aplikasi web (Frontend) yang dirancang untuk membuat dan mengelola undangan digital. Pengguna dapat mendaftar, login, membuat undangan personal, dan mengelolanya.

Aplikasi ini dibangun menggunakan React.js dengan Vite sebagai build tool, dan menggunakan Tailwind CSS untuk styling. Untuk backend, proyek ini menggunakan pendekatan hybrid:
1.  **`json-server`** untuk mensimulasikan REST API untuk operasi data (CRUD).
2.  **Server Express.js** kustom untuk menangani unggahan file (gambar dan musik).

---

## Teknologi yang Digunakan

*   **Frontend**:
    *   React.js
    *   Vite
    *   React Router DOM
    *   Axios
    *   Tailwind CSS
*   **Backend**:
    *   Node.js
    *   Express.js (untuk file upload)
    *   `json-server` (untuk data API)
    *   `multer` (untuk menangani `multipart/form-data`)

---

## Cara Menjalankan Proyek

Proyek ini terdiri dari 3 bagian yang perlu dijalankan: Frontend (Vite), Backend Data (json-server), dan Backend File (Express).

### 1. Menjalankan Backend (Data API)

Backend ini menggunakan `json-server` untuk menyajikan file `db.json` sebagai REST API.

```bash
# Instal dependensi (jika belum)
npm install

# Jalankan json-server pada port 3000
# Perintah ini akan memantau perubahan pada db.json
npx json-server --watch db.json --port 3000
```

### 2. Menjalankan Backend (File API)

Backend ini digunakan khusus untuk menangani upload file.

```bash
# Masuk ke direktori api
cd api

# Instal dependensi khusus backend
npm install

# Jalankan server Express
node server.js
```
Server akan berjalan di `http://localhost:4000`.

### 3. Menjalankan Frontend

```bash
# Di direktori utama proyek, jalankan server development Vite
npm run dev
```
Aplikasi frontend akan dapat diakses di `http://localhost:5173` (atau port lain yang tersedia).

---

## Lokasi Operasi CRUD

Operasi CRUD (Create, Read, Update, Delete) tersebar di beberapa file di dalam direktori `src/pages`, yang berkomunikasi dengan `json-server` di `http://localhost:3000`.

### **CREATE** (Membuat Data Baru)

1.  **Registrasi User**:
    *   **File**: `src/pages/Register.jsx`
    *   **Endpoint**: `POST http://localhost:3000/users`
    *   **Logika**: Mengirimkan data pengguna baru (nama, email, password) saat form registrasi di-submit.

2.  **Membuat Undangan**:
    *   **File**: `src/pages/PremiumGenerator.jsx`
    *   **Endpoint**: `POST http://localhost:3000/invitations`
    *   **Logika**: Mengirimkan seluruh data dari form pembuatan undangan untuk disimpan sebagai entri baru.

3.  **Upload File**:
    *   **File**: `src/pages/PremiumGenerator.jsx`
    *   **Endpoint**: `POST http://localhost:4000/upload`
    *   **Logika**: Mengirimkan file (gambar, musik) ke server Express untuk disimpan. Secara teknis ini adalah operasi "Create" untuk file.

### **READ** (Membaca Data)

1.  **Login User**:
    *   **File**: `src/pages/Login.jsx`
    *   **Endpoint**: `GET http://localhost:3000/users`
    *   **Logika**: Mengambil semua data pengguna untuk diverifikasi saat proses login.

2.  **Membaca Data Undangan Pengguna**:
    *   **File**: `src/pages/Profile.jsx`
    *   **Endpoint**: `GET http://localhost:3000/invitations`
    *   **Logika**: Mengambil daftar undangan yang dimiliki oleh pengguna yang sedang login.

3.  **Membaca Data Pengguna (untuk update password)**:
    *   **File**: `src/pages/UpdatePassword.jsx`
    *   **Endpoint**: `GET http://localhost:3000/users?email={email}`
    *   **Logika**: Mengambil data satu pengguna spesifik berdasarkan email.

### **UPDATE** (Memperbarui Data)

1.  **Update Password**:
    *   **File**: `src/pages/UpdatePassword.jsx`
    *   **Endpoint**: `PATCH http://localhost:3000/users/{id}`
    *   **Logika**: Memperbarui field password dari pengguna tertentu berdasarkan ID-nya.

### **DELETE** (Menghapus Data)

1.  **Menghapus Undangan**:
    *   **File**: `src/pages/Profile.jsx`
    *   **Endpoint**: `DELETE http://localhost:3000/invitations/{id}`
    *   **Logika**: Menghapus data undangan tertentu dari database berdasarkan ID-nya.