# My Contact Backend

A RESTful backend API built with **Node.js**, **Express**, and **MongoDB** for managing user contacts. It supports user registration, authentication via JWT, and secure CRUD operations on contacts. Each user can manage their own contact list, with all endpoints protected for privacy.

## Features

- **User Authentication**: Register, login, and JWT-based authentication.
- **Contacts Management**: Create, read, update, and delete contacts.
- **Authorization**: Users can only access and modify their own contacts.
- **Error Handling**: Centralized error responses.
- **CORS Enabled**: Ready for integration with frontend applications.
- **Environment-Based Configuration**.

## Endpoints

### User

- `POST /api/users/register` — Register a new user
- `POST /api/users/login` — Login and receive JWT token
- `GET /api/users/current` — Get current user info (requires auth)

### Contacts (All Endpoints Require Authentication)

- `GET /api/contacts` — Get all your contacts
- `POST /api/contacts` — Create a new contact
- `GET /api/contacts/:id` — Get a single contact
- `PUT /api/contacts/:id` — Update a contact
- `DELETE /api/contacts/:id` — Delete a contact

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JWT
- **Other**: dotenv, bcrypt, cors

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- MongoDB instance (local or Atlas)
- npm

### Installation

1. **Clone the repo:**
   ```bash
   git clone https://github.com/Pratik2401/my_contact_backend.git
   cd my_contact_backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**

   Create a `.env` file in the root directory with:
   ```
   PORT=5000
   CONNECTION_STRING=your_mongodb_connection_string
   ACCESS_TOKEN_SECRET=your_jwt_secret
   ```

4. **Run the server:**
   ```bash
   npm start
   ```
   The API will be available at `http://localhost:5000/`.

## Folder Structure

```
.
├── config/               # Database connection
├── controller/           # Route controllers (contacts, users)
├── middleware/           # Custom middleware (auth, error handling)
├── models/               # Mongoose models (User, Contact)
├── routes/               # Express route definitions
├── constants.js
├── server.js
└── ...
```

## Example Contact Object

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890"
}
```

## Deployment

This backend is ready for deployment on platforms like **Vercel**.  
Live demo: [my-contact-backend-sigma.vercel.app](https://my-contact-backend-sigma.vercel.app)

## License

This project is for learning and personal use. No license specified.

---

Made with ❤️ by [Pratik2401](https://github.com/Pratik2401)
