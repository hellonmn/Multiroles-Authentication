# Multi-Roles Authentication Template (MERN)

This is a basic template for multi-roles authentication in a MERN (MongoDB, Express, React, Node.js) stack application. It includes role-based access control (RBAC) for users such as Admin, User, and Moderator.

## Features
- User authentication using JWT (JSON Web Tokens)
- Role-based access control (RBAC)
- Secure password hashing with bcrypt
- Protected routes for different roles
- API authentication using middleware
- User registration & login with role assignment
- MongoDB integration with Mongoose
- React-based frontend with role-based UI rendering

## Tech Stack
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt
- **Frontend:** React.js, Axios, React Router

## Installation

### 1. Clone the repository:
```sh
git clone https://github.com/hellonmn/Multiroles-Authentication
cd Multiroles-Authentication
```

### 2. Install dependencies:
#### Backend
```sh
cd server
npm install
```
#### Frontend
```sh
cd client
npm install
```

### 3. Set up environment variables
Create a `.env` file inside the `server` folder and add:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run the application
#### Backend
```sh
cd server
npm start
```
#### Frontend
```sh
cd client
npm start
```

## API Endpoints
### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and get a JWT token

### User Routes
- `GET /api/user/profile` - Get user profile (protected)
- `GET /api/user/admin` - Access admin-only route (admin role required)
- `GET /api/user/moderator` - Access moderator route (moderator role required)

## Role-Based Access Control (RBAC)
| Role       | Permissions                                      |
|------------|------------------------------------------------|
| User       | Can view profile and general user routes      |
| Moderator  | Can access moderator-only content            |
| Admin      | Full access, including user management       |

## Folder Structure
```
multiroles-auth-mern/
  ├── backend/
  │   ├── models/
  │   ├── routes/
  │   ├── middleware/
  │   ├── controllers/
  │   ├── server.js
  │   ├── .env
  │   └── package.json
  ├── frontend/
  │   ├── src/
  │   │   ├── components/
  │   │   ├── pages/
  │   │   ├── context/
  │   │   ├── App.js
  │   │   ├── index.js
  │   ├── package.json
  ├── README.md
```

## Contributing
Contributions are welcome! Feel free to submit issues or pull requests.

## License
This project is open-source and available under the [MIT License](LICENSE).