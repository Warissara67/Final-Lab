# INDIVIDUAL_REPORT_67543210073-2.md

## Name

ชื่อ: นางสาว วริศรา สรรพกรพิเศษ  
รหัสนักศึกษา: 67543210073-2  

---

## ส่วนที่รับผิดชอบ

* พัฒนา Auth Service สำหรับระบบ Authentication
* พัฒนา Task Service สำหรับจัดการ Task ของผู้ใช้
* พัฒนา User Service สำหรับจัดการข้อมูลผู้ใช้
* ตั้งค่า PostgreSQL database สำหรับแต่ละ service
* เขียน Dockerfile สำหรับแต่ละ service
* ตั้งค่า docker-compose.yml เพื่อรันระบบทั้งหมด
* Deploy ระบบขึ้น Railway Cloud Platform
* ทดสอบ API ด้วย Postman

## สิ่งที่ลงมือทำจริง

* เขียน API สำหรับ Auth Service เช่น register, login และ verify token
* เขียน API สำหรับ Task Service เพื่อสร้าง ดู แก้ไข และลบ task
* เขียน API สำหรับ User Service เพื่อดูและแก้ไขข้อมูลผู้ใช้
* เขียน SQL สำหรับสร้างตาราง เช่น users, tasks และ user_profiles
* ตั้งค่า Docker container สำหรับแต่ละ service
* ตั้งค่า docker-compose เพื่อเชื่อมต่อ service ทั้งหมด
* Deploy service ขึ้น Railway
* ทดสอบ endpoint ต่าง ๆ ด้วย Postman

## ปัญหาที่พบและวิธีแก้

* ปัญหา Docker container ไม่สามารถเชื่อมต่อ database ได้

  * แก้ไขโดยตรวจสอบการตั้งค่า docker-compose และการเชื่อมต่อ database

* ปัญหา Login ไม่สำเร็จ (401 Unauthorized)

  * เกิดจาก password hash ใน database ไม่ตรงกับ bcrypt
  * แก้ไขโดยสร้าง bcrypt hash ใหม่

* ปัญหา Railway deploy แล้ว Application failed to respond

  * เกิดจาก server ไม่ได้ใช้ process.env.PORT
  * แก้ไขโดยปรับโค้ดให้ใช้ port จาก environment variable

* ปัญหา Service ไม่สามารถเข้าถึง Public URL

  * แก้ไขโดย Generate Domain ใน Railway Networking

## สิ่งที่เรียนรู้เชิงสถาปัตยกรรม

* เข้าใจแนวคิด Microservices Architecture
* เข้าใจการแยก service ตามหน้าที่ของระบบ
* เรียนรู้การใช้ Database-per-Service Pattern
* เรียนรู้การใช้ JWT สำหรับ Authentication และ Authorization
* เรียนรู้การใช้ Docker และ Docker Compose เพื่อจัดการหลาย service
* เรียนรู้การ deploy ระบบขึ้น Cloud Platform

## ส่วนที่ยังไม่สมบูรณ์หรืออยากปรับปรุง

* เพิ่มระบบ API Gateway เพื่อรวม endpoint ของทุก service
* เพิ่มระบบ logging แบบรวมศูนย์
* เพิ่มระบบ monitoring และ alert
* ปรับปรุง frontend ให้รองรับการใช้งานที่ซับซ้อนมากขึ้น
* เพิ่มระบบ CI/CD สำหรับการ deploy อัตโนมัติ
