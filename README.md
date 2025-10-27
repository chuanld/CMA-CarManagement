# 🚗 Car Marketplace — Version 3.0 (Next Release)

**Branch:** `release/3.0`  
**Status:** 🚧 In Progress — Pre-Release  
**Last Updated:** October 2025  

---

## 🧩 Overview

**Car Marketplace v3.0** expands the platform from a “view & test drive” system into a **multi-service automotive platform**, enabling:  
- **Buy / Sell / Rent / Test Drive** within a single unified system.  
- Flexible **Dealer Services** with reusable data models.  
- A fully generalized **Booking System** for all transaction types.

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | Next.js 15 (App Router) + TypeScript + shadcn/ui + Tailwind CSS v4 |
| **Backend** | Next.js (Server Actions + Prisma ORM) |
| **Database** | PostgreSQL (Supabase) |
| **Deployment** | Vercel (`release/3.0` branch) |

---

## 🧠 Core Features (v3.0)

### 👤 User
- Authentication & session via **Clerk**.  
- Manage saved cars, bookings, and contracts (buy/rent).  
- Quick service booking for **Buy / Rent / Test Drive**.

### 🏢 Dealer
- Manage cars, working hours (`WorkingHour`), and service offerings.  
- Handle multiple **Service Packages**.  
- Review and approve user **Bookings**.

### 🚘 Car
- Enhanced CRUD operations with service integration.  
- Classify cars by service type: **for sale**, **for rent**, **for test drive**.  
- Attach multiple price/service configurations to one car.  
- Status values include:  
  `AVAILABLE`, `RESERVED`, `SOLD`, `MAINTENANCE`, `RENTED`, `PENDING`.

### 💼 Service Modules
| Module | Description |
|---------|--------------|
| **SaleInfo** | Sale details, price, and payment status. |
| **RentInfo** | Rental details with hourly/daily/monthly pricing. |
| **Purchase** | Transaction record for vehicle purchases. |
| **Booking** | Unified model for all appointment types (test drive, rent, buy). |

---

## 🧾 Prisma Schema Summary (v3.0)

New and updated tables:
- `User`
- `Dealer`
- `Car`
- `WorkingHour`
- `Review`
- `Booking` *(replaces `TestDriveBooking`)*
- `SaleInfo`
- `RentInfo`
- `Purchase`
- `UserSavedCar`

> All relationships have been restructured in a **Service-Oriented Architecture (SOA)** style for better scalability and modularity.

---

## ⚙️ Datetime Handling (FE ⇄ BE)

```
FE: parse localString (display) -> fill input (string) => UTC DateTime => Send to BE
BE: store UTC in DB => return ISOString => display as local time in FE
```

> System convention: **UTC stored**, **Local displayed**.  
> Ensures synchronization between user timezone (VN) and backend (Vercel UTC).

---


## Project Struture 



```bash
car-marketplace/
├── app/                        # Next.js App Router entry point
│   ├── (admin)/                # Dealer & Admin dashboards
│   │   ├── layout.tsx          # Admin layout wrapper
│   │   ├── page.tsx            # Admin landing
│   │   ├── cars/               # CRUD management for cars
│   │   ├── dealers/            # Manage dealer info
│   │   ├── bookings/           # Manage test drives, sales, rentals
│   │   └── analytics/          # Dashboard / Statistics
│   │
│   ├── (user)/                 # User-facing pages
│   │   ├── layout.tsx          # User layout wrapper
│   │   ├── page.tsx            # Home page
│   │   ├── cars/               # Car listing & details
│   │   ├── booking/            # Test drive / rental booking
│   │   ├── wishlist/           # Saved cars
│   │   └── profile/            # User info & booking history
│   │
│   ├── api/                    # Route handlers / Server Actions
│   │   ├── car/
│   │   ├── booking/
│   │   ├── dealer/
│   │   └── ...
│   │
│   ├── providers/              # Context & global providers (theme, auth...)
│   ├── globals.css             # Global Tailwind theme
│   ├── layout.tsx              # Root layout (ClerkProvider, ThemeProvider, etc.)
│   ├── page.tsx                # Root landing page
│   └── error.tsx               # Global error boundary
│
├── actions/                    # Server-side logic via Next.js Server Actions
│   ├── car.ts                  # CRUD for cars
│   ├── booking.ts              # Handle test drive / rent bookings
│   ├── dealer.ts               # Dealer CRUD & working hours
│   ├── user.ts                 # User actions (wishlist, profile)
│   ├── review.ts               # Review & rating (v3.1 plan)
│   └── utils.ts                # Shared helpers for actions
│
├── components/                 # Reusable UI components
│   ├── ui/                     # shadcn/ui-based primitives
│   ├── layout/                 # Header, Footer, Sidebar
│   ├── car-card.tsx            # Car display component
│   ├── booking-form.tsx        # Booking form component
│   ├── dealer-card.tsx         # Dealer card component
│   ├── badge-status.tsx        # Car status badges (Sale, Rent, etc.)
│   └── ...
│
├── hooks/                      # Custom React hooks
│   ├── use-fetch.ts            # Handle client fetch state
│   ├── use-toast.ts            # Toast notifications
│   ├── use-theme.ts            # Light/Dark mode switch
│   ├── use-auth.ts             # Clerk user session
│   └── ...
│
├── lib/                        # Utility & shared logic
│   ├── prisma.ts               # Prisma client singleton
│   ├── utils.ts                # Common helpers
│   ├── constants.ts            # Enums, app constants
│   ├── data.ts                 # Static data (body types, fuel types, etc.)
│   └── validation.ts           # Zod schemas for validation
│
├── prisma/
│   ├── schema.prisma           # Database schema (v3.currently)
│   ├── migrations/             # Auto-generated migrations
│
├── public/                     # Static assets
│
├── types/                      # TypeScript types & interfaces
│   ├── car.ts
│   ├── booking.ts
│   ├── dealer.ts
│   ├── user.ts
│   └── index.ts
│
├── middleware.ts               # Authentication & route middleware (Clerk)
│
├── config/                     # Configuration files (theme, env)
│   ├── theme.ts
│   └── site.ts
│
├── .env.example                # Environment variable template
├── next.config.mjs             # Next.js configuration
├── tailwind.config.ts          # Tailwind v4 config
├── tsconfig.json               # TypeScript configuration
├── package.json
└── README.md
```


---


## 🚀 Deployment Notes

- **Stable branch:** `master`
- **Production deploy:** `master`
- **Development branch:** `release/3.0`
- Merge flow:
  ```bash
  release/3.0 → master 
  ```
- **v1 deploy:** `deploy-lite`
- **v2:** `release2.0`
- **v3 (currently):** `release/3.0 -> master`

---

## 🧭 Next Milestone (v4.0 Plan)
- Complete **Review & Dealer Rating** module.
- Log & notification realtime for dealers  
- Build analytics dashboard for dealer performance.
- Integrate **Payment Gateway** (Stripe / ZaloPay).  
- Add **Multi-language (i18n)** support.  

---


## 🗺️ Schema Diagram (Simplified)

```plaintext
User ───< Booking >─── Car
Dealer ───< Car >─── SaleInfo / RentInfo
Booking ───< Purchase
```

> Designed for scalability and flexibility in multi-service car commerce systems.
