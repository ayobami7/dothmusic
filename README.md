# **Music Review App**

A full-stack web application for reviewing music albums and tracks. The app includes:
- A **main site** for users to browse reviews.
- An **admin interface** for assigning albums/tracks to reviewers.
- A **reviewer interface** for submitting reviews.

---

## **Technologies Used**
- **Frontend**: Next.js, React, TypeScript, React Query
- **Backend**: Express.js, TypeScript, TypeORM
- **Database**: PostgreSQL
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: Tailwind CSS (or your choice of CSS framework)

---

## **Features**
- **Main Site**:
  - Browse albums and tracks.
  - View reviews for albums/tracks.
  - Search functionality.
- **Admin Interface**:
  - Assign albums/tracks to reviewers.
  - Approve or reject submitted reviews.
- **Reviewer Interface**:
  - View assigned albums/tracks.
  - Submit reviews for assigned albums/tracks.

---

## **Setup Instructions**

### **Prerequisites**
1. **Node.js**: Install [Node.js](https://nodejs.org/) (v16 or higher).
2. **PostgreSQL**: Install [PostgreSQL](https://www.postgresql.org/download/).
3. **Git**: Install [Git](https://git-scm.com/).

---

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/music-review-app.git
cd music-review-app
```

---

### **2. Set Up the Backend**
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` folder and add the following:
   ```
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=your_db_username
   DB_PASSWORD=your_db_password
   DB_NAME=music_review_db
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```
   Replace the placeholders with your actual database credentials and a secure JWT secret.

4. Start the backend server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000`.

---

### **3. Set Up the Frontend**
1. Navigate to the `frontend` folder:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:3000`.

---

### **4. Set Up the Database**
1. Create a PostgreSQL database:
   ```bash
   createdb music_review_db
   ```
2. TypeORM will automatically create the necessary tables when the backend server starts.

---

## **Project Structure**
```
music-review-app/
├── backend/               # Express.js backend
│   ├── src/               # Source code
│   │   ├── controllers/   # Route handlers
│   │   ├── models/        # Database models
│   │   ├── routes/        # API routes
│   │   ├── utils/         # Utility functions
│   │   └── index.ts       # Entry point
│   ├── .env               # Environment variables
│   ├── package.json
│   └── tsconfig.json
├── frontend/              # Next.js frontend
│   ├── pages/             # Next.js pages
│   ├── components/        # React components
│   ├── hooks/             # Custom React hooks
│   ├── styles/            # CSS or Tailwind styles
│   ├── package.json
│   └── tsconfig.json
├── database/              # PostgreSQL setup and migrations
└── README.md              # Project documentation
```

---

## **API Endpoints**
### **Authentication**
- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Log in a user.
- `GET /api/auth/me`: Get the current user's details.

### **Albums**
- `GET /api/albums`: Fetch all albums.
- `GET /api/albums/:id`: Fetch a specific album.
- `POST /api/albums`: Create a new album (admin only).
- `PUT /api/albums/:id`: Update an album (admin only).

### **Reviews**
- `POST /api/reviews`: Submit a review (reviewer only).
- `GET /api/reviews`: Fetch all reviews.
- `GET /api/reviews/:id`: Fetch a specific review.
- `PUT /api/reviews/:id`: Approve/reject a review (admin only).

### **Assignments**
- `POST /api/assignments`: Assign an album/track to a reviewer (admin only).
- `GET /api/assignments`: Fetch assigned albums/tracks (reviewer only).

---

## **Environment Variables**
### **Backend**
- `DB_HOST`: PostgreSQL host (default: `localhost`).
- `DB_PORT`: PostgreSQL port (default: `5432`).
- `DB_USERNAME`: PostgreSQL username.
- `DB_PASSWORD`: PostgreSQL password.
- `DB_NAME`: PostgreSQL database name.
- `JWT_SECRET`: Secret key for JWT authentication.
- `PORT`: Backend server port (default: `5000`).

---

## **Contributing**
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Acknowledgments**
- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Documentation](https://expressjs.com/)
- [TypeORM Documentation](https://typeorm.io/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
