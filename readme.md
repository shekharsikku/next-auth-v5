# Next Auth V5 - Advance Auth.js Project

![Demo App](/public/demo.png)

## 🌟 Introduction

Built with the latest Next.js and TypeScript. It implements users to securely authenticate using credentials and social login with Google & GitHub.

## ⚙️ Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Shadcn UI
- Prisma
- Next Auth V5
- React Hook Form
- Resend
- Zod

## 🔋 Key Features

- 🔐 Next-auth v5 (Auth.js)
- 🚀 Next.js 14 with server actions
- 🔑 Credentials Provider
- 🌐 OAuth Provider (Social login with Google & GitHub)
- 🔒 Forgot password functionality
- ✉️ Email verification
- 📱 Two factor verification (2FA)
- 👥 User roles (Admin & User)
- 🔓 Login component (Opens in redirect or modal)
- 📝 Register component
- 🤔 Forgot password component
- ✅ Verification component
- ⚠️ Error component
- 🔘 Login button
- 🚪 Logout button
- 🚧 Role Gate
- 🔍 Exploring next.js middleware
- 📈 Extending & Exploring next-auth session
- 🔄 Exploring next-auth callbacks
- 👤 useCurrentUser hook
- 🛂 useRole hook
- 🧑 currentUser utility
- 👮 currentRole utility
- 🖥️ Example with server component
- 💻 Example with client component
- 👑 Render content for admins using RoleGate component
- 🛡️ Protect API Routes for admins only
- 🔐 Protect Server Actions for admins only
- 📧 Change email with new verification in Settings page
- 🔑 Change password with old password confirmation in Settings page
- 🔔 Enable/disable two-factor auth in Settings page
- 🔄 Change user role in Settings page (for development purposes only)

## ⭐ Quick Start

**⏳ Prerequisites**

Make sure you have the following installed on your machine!

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

### 🚀 Setup Instructions

**Clone This Repository**

```bash
git clone https://github.com/shekharsikku/next-auth-v5
cd next-auth-v5
```

**Install Node Modules**

```bash
npm install
```

Rename, **.env.sample** filename to **.env** and add all required fields!

```env
AUTH_SECRET=""

GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""

GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

RESEND_API_KEY=""
RESEND_ORIGIN="onboarding@resend.dev"

DATABASE_URL=""
DOMAIN_ORIGIN="http://localhost:3000"
```

_For (GitHub and Google client id and secret) register your application and get its client id and secret key._

**⏳ Note**

In this project i'm using mysql database you are free to use any other database like - postgresql or mongodb by changing provider in **schema.prisma** file.

```prisma
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```

_Change other configuration according to database provider requirements_

### 💻 Start Application

**Start Development**

```bash
npm run dev
```

**Build App**

```bash
npm run build
```

**Start App**

```bash
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

```bash
http://localhost:3000
```

---

## 📣 Contribution

Welcome contributors to **Next Auth - Advance Auth.js Project** Project. I'm excited to have you here.

Want to contribute code? Fork the repository, make your changes, and submit a pull request.

### ⚡ How to Contribute

- 🐞 Bug Found/Fix?
- ✨ Add New Features?

### 🪄 Code by **Shekhar Sharma**

---
