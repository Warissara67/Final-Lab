# INDIVIDUAL_REPORT_67543210073-2.md

## Name

ชื่อ: นางสาว กันติชา เกิดสี
รหัสนักศึกษา: 67543210052-6

---

## ส่วนที่รับผิดชอบ

* พัฒนา Task Service สำหรับจัดการงานของผู้ใช้
* พัฒนา User Service สำหรับจัดการข้อมูลผู้ใช้
* พัฒนา Frontend สำหรับ Task Board
* ตั้งค่า PostgreSQL database สำหรับ task-db และ user-db
* เขียน Dockerfile สำหรับ Task Service และ User Service
* ตั้งค่า docker-compose.yml สำหรับเชื่อมต่อ services
* ทดสอบ API ของ Task และ User Service ด้วย Postman

## สิ่งที่ลงมือทำจริง

* เขียน API สำหรับ Task Service เช่น สร้าง task,ดูรายการ task,แก้ไข task,ลบ task
* เขียน API สำหรับ User Service เช่น ดูข้อมูลผู้ใช้,แก้ไขข้อมูลผู้ใช้
* ออกแบบและพัฒนา Frontend Task Board เช่น เชื่อมต่อ API จาก backend,แสดงรายการ task,เพิ่ม/แก้ไข/ลบ task ผ่าน UI
* ตั้งค่า PostgreSQL สำหรับ task-db และ user-db
* เขียน SQL สำหรับสร้างตาราง เช่น tasks และ user_profiles
* ตั้งค่า Docker container สำหรับแต่ละ service
* ตั้งค่า docker-compose เพื่อเชื่อมต่อระบบทั้งหมด
* ทดสอบ endpoint ต่าง ๆ ด้วย Postman

## ปัญหาที่พบและวิธีแก้

* ปัญหา Frontend เรียก API ไม่ได้ (404 / Network Error)

  * แก้ไขโดยตรวจสอบ URL และ port ของ service ให้ถูกต้อง

* ปัญหา CORS error ระหว่าง Frontend และ Backend

  * แก้ไขโดยเพิ่มการตั้งค่า CORS ใน backend

* ปัญหา Task Service เชื่อมต่อ database ไม่ได้

  * แก้ไขโดยตรวจสอบ environment variable และชื่อ service ใน docker-compose

* ปัญหา JWT ไม่ถูกส่งไปกับ request

  * แก้ไขโดยเพิ่ม Authorization header ใน frontend

## สิ่งที่เรียนรู้เชิงสถาปัตยกรรม

* เข้าใจการทำงานของ Microservices Architecture
* เรียนรู้การแยก service ตาม Business Logic
* เข้าใจการทำงานร่วมกันระหว่าง Frontend และ Backend
* เรียนรู้การใช้ JWT เพื่อยืนยันตัวตนระหว่าง services
* เรียนรู้การใช้ Docker และ Docker Compose ในการจัดการระบบ
* เข้าใจการเชื่อมต่อหลาย database ในระบบเดียว


## ส่วนที่ยังไม่สมบูรณ์หรืออยากปรับปรุง

* ปรับปรุง UI/UX ของ Task Board ให้ใช้งานง่ายขึ้น
* เพิ่ม validation ใน frontend และ backend
* เพิ่มระบบ pagination สำหรับรายการ task
* เพิ่มระบบ error handling ให้ครอบคลุมมากขึ้น
* ปรับปรุง performance ของการเรียก API
* เพิ่มการ deploy frontend ขึ้น cloud