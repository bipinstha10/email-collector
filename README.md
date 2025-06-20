# JoinUs App 👥

A minimalist Node.js web application using Express.js, EJS templating, and MySQL that allows users to register their email to a waitlist. It dynamically displays the total number of users who have signed up.

## 📸 Preview

![App Screenshot](./assets/image.png)

## 🚀 Features

- Register email addresses via a form
- Store data in a MySQL database
- Display a live counter of registered users
- Uses EJS for dynamic templating
- Styled with custom CSS and a background image

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** EJS, HTML/CSS
- **Database:** MySQL
- **Middleware:** body-parser

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone git@github.com:bipinstha10/email-collector.git
cd email-collector
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup MySQL Database

```sql
CREATE DATABASE joinUs;

USE joinUs;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL
);
```

### 4. 🔐 Configure Environment Variables

#### Step 1: Create a `.env` file

After cloning the project, copy the example environment file:

```bash
cp .env.example .env
```

#### Step 2: Update .env with your local credentials
Open `.env` in a text editor and provide your actual MySQL credentials:
```env
DB_HOST=localhost
DB_USER=yourUsername
DB_PASSWORD=yourPassword
DB_NAME=joinUs
DB_PORT=3306
```

#### Step 3: Understand the purpose of `.env.example`
.`env.example` is included in the repo to document the required variables without exposing secrets.
`.env` is ignored by Git and should contain your actual credentials. 
### 5. Start the App

```bash
node app.js
```

Visit http://localhost:3000 in your browser.
