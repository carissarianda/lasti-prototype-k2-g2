# Smart Trash Bin Service Documentation

## Overview

Layanan Smart Trash Bin adalah layanan yang dirancang untuk mengoptimalkan pengelolaan sampah di lingkungan asrama melalui pemanfaatan teknologi IoT. Tujuannya adalah meningkatkan efisiensi, kenyamanan, dan kebersihan asrama dengan memberikan informasi real-time tentang keterisian tempat sampah. Layanan ini merupakan salah satu sub-layanan dari sistem layanan smart dormitory. Penjelasan lengkap mengenai smart dormitory bisa diakses melalui dokumen docs berikut

1. [II3120_Dokumen3_K2_G2](https://docs.google.com/document/d/1AmyqBRyA_CAj1G5N_2hPRUNMK3ZVo655KCwXPsRhAAU/edit) 
2. [PPT Canva](https://www.canva.com/design/DAFzBXx52WQ/vfVEiPGMewX7mS7HAMs5Ig/edit).
3. [Dokumentasi](https://docs.google.com/document/d/1AJJkgV_JKCOe3o8Ew9F1RbuMubm6WTzmAZ_v4tmjxyY/edit?usp=sharing)

## User Guide

### Running the Website

#### Web Deployment
Layanan smart trash bin dapat langsung diakses melalui link deployment berikut:  [Smart Trash Bin Deployment](https://bit.ly/iDormPrototypeK2G2).

#### Local Deployment

Untuk menjalankan web, clone repository, buka project directory, lalu buka terminal, kemudian ikuti langkah berikut:

1. Rename the `.env.example` file.
2. Install dependencies:

    ```bash
    npm install
    ```

3. Generate Prisma:

    ```bash
    npx prisma generate
    ```

4. Run the development server:

    ```bash
    npm run dev
    ```

Layanan akan dapat diakses di http://localhost:3000.

## Technical Description

Smart Trash Bin Service dikembangkan dengan memanfaatkan perangkat IoT untuk memonitor dan mengelola keterisian tempat sampah di asrama yaitu:

- **ESP32**

- **HC-SR04 Ultrasonic Sensor**

emantauan dan pengelolaan akan ditampilkan melalui website yang dikembangkan dengan:

- **Next.js**
- **Tailwind CSS**
- **Prisma**
- **PostgreSQL**