# TEAM_SPLIT.md

## Team Members

* 67543210073-2 นางสาว วริศรา สรรพกรพิเศษ
* 67543210052-6 นางสาว กันติชา เกิดสี

## Work Allocation

### Student 1: 67543210073-2 นางสาว วริศรา สรรพกรพิเศษ

* รับผิดชอบ Auth Service
* พัฒนา JWT Authentication (register, login, verify token)
* ตั้งค่า PostgreSQL สำหรับ auth-db
* Deploy Auth Service บน Railway
* ทดสอบ API ของ Auth Service ด้วย Postman

### Student 2: 67543210052-6 นางสาว กันติชา เกิดสี

* รับผิดชอบ Task Service
* รับผิดชอบ User Service
* พัฒนา API สำหรับจัดการ Task และ User Profile
* ตั้งค่า PostgreSQL สำหรับ task-db และ user-db
* พัฒนา Frontend สำหรับ Task Board

## Shared Responsibilities

* ออกแบบ Microservices Architecture ของระบบร่วมกัน
* ตั้งค่า Docker และ Docker Compose สำหรับระบบทั้งหมด
* ทดสอบ end-to-end flow ของระบบ
* ตรวจสอบการทำงานของ JWT ระหว่าง services
* จัดทำ README และ screenshots สำหรับรายงาน

## Reason for Work Split

การแบ่งงานใช้แนวคิดตาม service boundary ของระบบ Microservices
โดยแบ่งตามความรับผิดชอบของแต่ละ service เพื่อลดความซ้ำซ้อนในการพัฒนา และให้สามารถพัฒนาแต่ละ service แยกกันได้อย่างอิสระ
Student 1 รับผิดชอบ Auth Service ซึ่งเป็นศูนย์กลางของระบบ Authentication และ JWT ส่วน Student 2 รับผิดชอบ Task และ User Service ซึ่งเป็นส่วนของ Business Logic และการจัดการข้อมูลผู้ใช้

## Integration Notes

Auth Service ทำหน้าที่สร้าง JWT token เมื่อผู้ใช้ login สำเร็จ จากนั้น Task Service และ User Service จะใช้ token นี้ในการ verify สิทธิ์ของผู้ใช้ผ่าน middleware ก่อนเข้าถึง API ต่าง ๆ
Frontend จะเรียก API จากแต่ละ service โดยแนบ JWT token ไปใน Authorization header เพื่อให้ระบบสามารถตรวจสอบสิทธิ์ได้
