# TEAM_SPLIT.md

## Team Members
- 67543210073-2 นางสาว วริศรา สรรพกรพิเศษ
- 67543210052-6 นางสาว กันติชา เกิดสี

---

## Work Allocation

### Student 1: นางสาว วริศรา สรรพกรพิเศษ (Backend Developer)

Responsibilities:
- พัฒนา **Auth Service**
- Implement **JWT Authentication (Register / Login)**
- พัฒนา **Task Service API**
- พัฒนา **Log Service**
- ออกแบบ **Database Schema (PostgreSQL)**
- ตั้งค่า **Nginx Reverse Proxy และ API Gateway**
- ตั้งค่า **HTTPS (TLS certificate)**
- จัดการ **Docker และ Docker Compose สำหรับ backend services**
- Debug และแก้ไข backend integration

---

### Student 2: นางสาว กันติชา เกิดสี (Frontend & Documentation)

Responsibilities:
- พัฒนา **Frontend interface (HTML pages)**
- ออกแบบ **หน้าเว็บสำหรับเรียกใช้งาน API**
- เชื่อมต่อ **Frontend กับ Backend API**
- จัดทำ **README.md documentation**
- จัดทำ **Screenshots สำหรับรายงาน**
- จัดรูปแบบเอกสารสำหรับการส่งงาน

---

## Shared Responsibilities

ทั้งสองคนร่วมกันทำงานในส่วนต่อไปนี้

- ออกแบบ **Microservices Architecture**
- วางโครงสร้าง **System Architecture Diagram**
- ทดสอบ **End-to-End system**
- ตรวจสอบการทำงานของ API ผ่าน Nginx Gateway
- Debug integration issues ระหว่าง frontend และ backend

---

## Reason for Work Split

ทีมแบ่งงานตาม **ความรับผิดชอบของระบบ**

- Backend Developer รับผิดชอบการพัฒนา **API services, database และ infrastructure**
- Frontend Developer รับผิดชอบ **User Interface, documentation และการนำเสนอระบบ**

การแบ่งงานลักษณะนี้ช่วยให้สามารถพัฒนาแต่ละส่วนของระบบได้อย่างมีประสิทธิภาพ และทำให้การทำงานของทีมเป็นระบบมากขึ้น

---

## Integration Notes

ระบบใช้ **Nginx เป็น API Gateway** สำหรับเชื่อมต่อระหว่าง Frontend และ Backend services

โครงสร้างการทำงานของระบบ:

Client → Nginx Gateway → Backend Services

API Routing:

- `/api/auth` → Auth Service (port 3001)
- `/api/tasks` → Task Service (port 3002)
- `/api/logs` → Log Service (port 3003)

Frontend จะเรียก API ผ่าน Nginx Gateway เพื่อให้ backend services ถูกซ่อนจากผู้ใช้

Docker Compose ถูกใช้ในการรัน containers ทั้งหมด ได้แก่

- nginx
- auth-service
- task-service
- log-service
- postgres

ทุก service เชื่อมต่อกันผ่าน **Docker Network เดียวกัน** ทำให้ระบบสามารถ run ได้ง่ายด้วยคำสั่งเดียว