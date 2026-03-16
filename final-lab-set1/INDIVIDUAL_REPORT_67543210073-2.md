# INDIVIDUAL_REPORT_67543210073-2.md

## ข้อมูลผู้จัดทำ

ชื่อ: นางสาว วริศรา สรรพกรพิเศษ  
รหัสนักศึกษา: 67543210073-2  

---

## ส่วนที่รับผิดชอบ

รับผิดชอบในส่วนของ **Backend Development ของระบบ Task Board แบบ Microservices** โดยมีหน้าที่หลักดังนี้

- พัฒนา Auth Service สำหรับระบบ Authentication
- พัฒนา Task Service สำหรับจัดการ Task ของผู้ใช้
- พัฒนา Log Service สำหรับบันทึกข้อมูลการทำงานของระบบ
- ออกแบบและตั้งค่า PostgreSQL Database
- เขียน Dockerfile สำหรับแต่ละ service
- ตั้งค่า docker-compose.yml เพื่อรันระบบทั้งหมด
- ตั้งค่า Nginx Reverse Proxy และ HTTPS
- ทดสอบ API ของแต่ละ service ให้สามารถทำงานร่วมกันได้

---

## สิ่งที่ได้ลงมือพัฒนาด้วยตนเอง

ในการทำ Set 1 ได้พัฒนาและตั้งค่าระบบ backend ของโปรเจกต์ โดยมีรายละเอียดดังนี้

- พัฒนา **Auth Service** สำหรับการ login ของผู้ใช้
- พัฒนา **Task Service** สำหรับจัดการ task เช่น การสร้าง ดู แก้ไข และลบ task
- พัฒนา **Log Service** สำหรับบันทึกการทำงานของระบบ
- ออกแบบ **database schema ของ task** เช่น ตาราง tasks
- ตั้งค่า **PostgreSQL database container**
- เขียน **Dockerfile สำหรับแต่ละ service**
  - auth-service
  - task-service
  - log-service
- ตั้งค่า **docker-compose.yml** เพื่อรันระบบทั้งหมดพร้อมกัน
  - postgres
  - auth-service
  - task-service
  - log-service
  - frontend
  - nginx
- ตั้งค่า **Nginx Reverse Proxy** เพื่อ route API ไปยัง service ต่าง ๆ
- ตั้งค่า **HTTPS certificate** สำหรับการเชื่อมต่อแบบปลอดภัย
- ทดสอบการทำงานของ API ผ่าน browser และ frontend

---

## ปัญหาที่พบและวิธีการแก้ไข

### 1. Docker container ไม่สามารถเชื่อมต่อ Database ได้

สาเหตุ  
เกิดจาก service เริ่มทำงานก่อนที่ database จะพร้อมใช้งาน

วิธีแก้ไข  
เพิ่มระบบ retry ใน service เพื่อรอให้ database พร้อมก่อนเชื่อมต่อ

---

### 2. Nginx container ไม่สามารถ start ได้

สาเหตุ  
เกิดจากการตั้งค่า nginx.conf ไม่ถูกต้อง และมี directive อยู่ในตำแหน่งที่ผิด

วิธีแก้ไข  
แก้ไขโครงสร้าง nginx.conf ให้ configuration อยู่ภายใน http block ที่ถูกต้อง

---

### 3. Database schema ไม่ตรงกับโครงสร้างใหม่

สาเหตุ  
docker volume เก่าทำให้ schema เดิมยังคงอยู่

วิธีแก้ไข  
ลบ docker volume และสร้าง database ใหม่

---

### 4. Service ไม่สามารถเชื่อมต่อกันได้

สาเหตุ  
เกิดจากการตั้งค่า network และ hostname ของ container ไม่ถูกต้อง

วิธีแก้ไข  
ตั้งค่า docker-compose ให้ทุก service อยู่ใน network เดียวกันและใช้ชื่อ container ในการเชื่อมต่อ

---

## สิ่งที่ได้เรียนรู้จากงานนี้

จากการทำ Set 1 ทำให้เข้าใจแนวคิดสำคัญของการพัฒนาระบบแบบ Microservices มากขึ้น เช่น

- เข้าใจแนวคิด **Microservices Architecture**
- เข้าใจการแยก service ตามหน้าที่ของระบบ
- เรียนรู้การใช้ **Docker และ Docker Compose**
- เข้าใจการทำงานของ **Reverse Proxy ผ่าน Nginx**
- เรียนรู้การเชื่อมต่อ service ต่าง ๆ ผ่าน container network
- เข้าใจการ deploy และ run ระบบหลาย service พร้อมกัน

---

## แนวทางที่ต้องการพัฒนาต่อใน Set 2

สำหรับ Set 2 ต้องการพัฒนาระบบเพิ่มเติมในส่วนต่อไปนี้

- เพิ่มระบบ **API Gateway ที่มีความสามารถมากขึ้น**
- เพิ่มระบบ **Rate Limiting และ Security**
- เพิ่มระบบ **Centralized Logging**
- เพิ่มระบบ **Monitoring สำหรับตรวจสอบ service**
- ปรับปรุงระบบให้รองรับผู้ใช้งานจำนวนมากขึ้น