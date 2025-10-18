# 🚗 Car Marketplace — Version 2.0 (Stable)

**Branch:** `master`  
**Status:** ✅ Stable Release  
**Last Updated:** October 2025

---

## 🧩 Overview

Car Marketplace System là nền tảng web giúp người dùng:
- Xem thông tin chi tiết xe từ các đại lý (dealer).
- Đặt lịch **lái thử xe (test drive)** trong 1 giờ.
- Đánh giá và lưu (save) xe yêu thích.
- Quản lý dữ liệu đại lý, giờ làm việc và lịch hẹn.

Phiên bản **v2.0** hiện tại đã hoàn thiện toàn bộ **chức năng cốt lõi** cho hệ thống giao dịch xe hơi:
> CRUD đầy đủ cho xe, đại lý, người dùng, và tính năng booking lái thử.

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | Next.js (app router) + TypeScript + shadcn/ui  |
| **Backend** | NextJS (server action) + Prisma ORM |
| **Database** | PostgreSQL (Supabase) |
| **Deployment** | Vercel (branch: `deploy-lite`) |

---

## 🧠 Core Features (v2.0)

### 👤 User
- Đăng nhập qua **Clerk**.
- Lưu xe yêu thích (Wishlist).
- Đặt lịch lái thử.

### 🏢 Dealer
- Quản lý danh sách xe.
- Quản lý giờ làm việc (`WorkingHour`).
- Theo dõi đánh giá (Review) từ khách hàng.(chưa hoàn thiện)

### 🚘 Car
- CRUD xe với thông tin chi tiết: `make`, `model`, `year`, `fuelType`, `price`, `status`, ...
- Upload hình ảnh (hỗ trợ AI phân tích cho admin).
- Quản lý trạng thái: `AVAILABLE`, `RESERVED`, `SOLD`, `MAINTENANCE`, `PENDING`.

### 🧾 Booking
- Đặt lịch **test drive trong 1 giờ**.
- Quản lý trạng thái lịch hẹn:
  - `PENDING`, `CONFIRMED`, `COMPLETED`, `CANCELLED`, `NO_SHOW`.

### ⭐ Review
- Chưa hoàn thiện

---

## 🧱 Prisma Schema Summary

Các bảng chính trong version 2.0:
- `User`
- `Dealer`
- `Car`
- `WorkingHour`
- `Review`
- `TestDriveBooking`
- `UserSavedCar`

Cấu trúc quan hệ đã được thiết kế chuẩn với Prisma ORM.

---

## 🚀 Deployment Notes

- **Production branch:** `deploy-lite`
- **Main stable branch:** `master`
- **Next release branch:** `release/3.0` (đang refactor hỗ trợ dịch vụ hóa “bán / thuê xe”)

> Mọi bản cập nhật cho hệ thống deploy hiện tại đều merge từ `master → deploy-lite`.

---

## 🧭 Next Steps (v3.0 Plan)

Phiên bản **3.0** sẽ mở rộng mô hình hiện tại với:
- Dịch vụ **bán, lái thử, cho thuê** trong cùng một hệ thống.
- Thêm các bảng:
  - `SaleInfo`, `RentInfo`, `Purchase`, `Booking` (tổng quát hóa).
- Cấu trúc dữ liệu mới linh hoạt hơn cho pricing, trạng thái, và thời gian thuê.

Nhánh phát triển cho 3.0:  
```bash
git checkout -b release/3.0
