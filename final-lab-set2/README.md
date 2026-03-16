# ENGSE207 Software Architecture

## README — Final Lab Set 2: Microservices + Database-per-Service + Railway Deployment

---

## 1. ข้อมูลรายวิชาและสมาชิก

**รายวิชา:** ENGSE207 Software Architecture
**ชื่องาน:** Final Lab — ชุดที่ 2: Microservices + Database-per-Service + Cloud Deployment

**สมาชิกในกลุ่ม**

* ชื่อ-สกุล / รหัสนักศึกษา: นางสาว กันติชา เกิดสี 67543210052-6
* ชื่อ-สกุล / รหัสนักศึกษา: นางสาว วริศรา สรรพกรพิเศษ 67543210073-2

**Repository:** `final-lab-set2/`

---

# 2. ภาพรวมของระบบ

Final Lab Set 2 เป็นการต่อยอดจาก Set 1 โดยพัฒนาระบบ **Task Board แบบ Microservices** และปรับโครงสร้างฐานข้อมูลเป็น

**Database-per-Service Pattern**

ซึ่งแต่ละ service จะมี database ของตัวเอง และสามารถ deploy แยกกันได้บน Cloud

ระบบประกอบด้วย 3 Services หลัก

* **Auth Service** – จัดการ Register / Login และ JWT Authentication
* **Task Service** – จัดการ Task ของผู้ใช้
* **User Service** – จัดการข้อมูล Profile ของผู้ใช้

Frontend ใช้สำหรับแสดงผล Task Board และเรียกใช้งาน API ของแต่ละ service

---

# 3. วัตถุประสงค์ของงาน

งาน Set 2 มีจุดประสงค์เพื่อฝึกให้นักศึกษา

* ออกแบบระบบ **Microservices Architecture**
* ใช้ **Database-per-Service Pattern**
* ใช้ **JWT สำหรับ authentication**
* ใช้ **Docker สำหรับพัฒนาในเครื่อง**
* Deploy backend services ขึ้น **Railway Cloud Platform**
* ทดสอบ API ด้วย **Postman**

---

# 4. Architecture Overview

```
Browser / Frontend
        │
        ▼
    Auth Service
  (JWT Authentication)
        │
        ├──────────────┐
        ▼              ▼
   Task Service     User Service
        │              │
        ▼              ▼
     task-db        user-db

Auth Service ใช้ auth-db
```

### Services ในระบบ

| Service      | หน้าที่                    |
| ------------ | -------------------------- |
| Auth Service | Register / Login / JWT     |
| Task Service | CRUD Tasks                 |
| User Service | User Profile               |
| Frontend     | UI สำหรับใช้งาน Task Board |
| PostgreSQL   | Database ของแต่ละ service  |

---

# 5. โครงสร้าง Repository

```
final-lab-set2/
├── README.md
├── TEAM_SPLIT.md
├── INDIVIDUAL_REPORT_[studentid].md
├── docker-compose.yml
│
├── frontend/
│
├── auth-service/
│   ├── Dockerfile
│   ├── package.json
│   └── src/
│
├── task-service/
│   ├── Dockerfile
│   ├── package.json
│   └── src/
│
├── user-service/
│   ├── Dockerfile
│   ├── package.json
│   └── src/
│
└── screenshots/
```

---

# 6. เทคโนโลยีที่ใช้

* Node.js
* Express.js
* PostgreSQL
* Docker
* Docker Compose
* JWT (jsonwebtoken)
* bcryptjs
* HTML / CSS / JavaScript
* Railway Cloud Platform

---

# 7. การรันระบบในเครื่อง

### 7.1 รันระบบด้วย Docker

```
docker compose down -v
docker compose up --build
```

### 7.2 เปิดระบบผ่าน Browser

```
http://localhost:8080
```

---

# 8. API Summary

## Auth Service

| Method | Endpoint           |
| ------ | ------------------ |
| POST   | /api/auth/register |
| POST   | /api/auth/login    |
| GET    | /api/auth/me       |
| GET    | /api/auth/health   |

---

## Task Service

| Method | Endpoint          |
| ------ | ----------------- |
| GET    | /api/tasks/health |
| GET    | /api/tasks        |
| POST   | /api/tasks        |
| PUT    | /api/tasks/:id    |
| DELETE | /api/tasks/:id    |

---

## User Service

| Method | Endpoint                |
| ------ | ----------------------- |
| GET    | /api/users/health       |
| GET    | /api/users/me           |
| PUT    | /api/users/me           |
| GET    | /api/users (admin only) |

---

# 9. การ Deploy บน Railway

ใน Set 2 ระบบถูก deploy ขึ้น Railway โดยแยก service ดังนี้

## Auth Service

Environment Variables

```
DATABASE_URL=${{auth-db.DATABASE_URL}}
JWT_SECRET=your-shared-jwt-secret
JWT_EXPIRES_IN=1h
PORT=3001
NODE_ENV=production
```

---

## Task Service

```
DATABASE_URL=${{task-db.DATABASE_URL}}
JWT_SECRET=your-shared-jwt-secret
PORT=3002
NODE_ENV=production
```

---

## User Service

```
DATABASE_URL=${{user-db.DATABASE_URL}}
JWT_SECRET=your-shared-jwt-secret
PORT=3003
NODE_ENV=production
```

---

# 10. การทดสอบระบบด้วย Postman

### Register User

```
POST /api/auth/register
```

### Login

```
POST /api/auth/login
```

จะได้ JWT Token กลับมา

---

### Create Task

```
POST /api/tasks
Authorization: Bearer <token>
```

---

### Get Tasks

```
GET /api/tasks
Authorization: Bearer <token>
```

---

### User Profile

```
GET /api/users/me
Authorization: Bearer <token>
```

---

# 11. Screenshots

ในโฟลเดอร์ `screenshots/` มีภาพการทดสอบระบบ เช่น

* docker running
* register user
* login success
* create task
* get tasks
* update task
* delete task
* user profile API
* railway deploy success

---

# 12. การแบ่งงานของทีม

รายละเอียดการแบ่งงานของสมาชิกอยู่ในไฟล์

```
TEAM_SPLIT.md
```

รายงานรายบุคคลอยู่ในไฟล์

```
INDIVIDUAL_REPORT_[studentid].md
```

---

# 13. ปัญหาที่พบและแนวทางแก้ไข

ตัวอย่างปัญหาที่พบระหว่างทำงาน

* Docker container เชื่อมต่อ database ไม่ได้

  * แก้ไขโดยตรวจสอบการตั้งค่า DATABASE_URL

* Login ไม่สำเร็จ (401 Unauthorized)

  * เกิดจาก bcrypt hash ไม่ตรงกับ password

* Deploy Railway แล้ว Application failed to respond

  * เกิดจาก server ไม่ได้ใช้ `process.env.PORT`

* Task Service join table users ไม่ได้

  * เกิดจาก Database-per-service ทำให้ไม่มี table users ใน task-db

---

# 14. ข้อจำกัดของระบบ

* ยังไม่มี API Gateway
* ไม่มี centralized logging
* Frontend ยังเป็น static web
* ระบบยังไม่มี monitoring

---

# 15. สิ่งที่ได้เรียนรู้จากงานนี้

* การออกแบบ Microservices Architecture
* การใช้ Database-per-Service Pattern
* การใช้ JWT สำหรับ authentication
* การใช้ Docker ในการพัฒนา
* การ deploy backend services ขึ้น Cloud
* การทดสอบ API ด้วย Postman
