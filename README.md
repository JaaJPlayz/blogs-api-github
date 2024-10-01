# 📝 Blogs API

## 🌟 Description
**Blogs API** is a powerful API designed for managing blog posts and categories. It allows users to create, read, update, and delete blog posts while handling user authentication through JSON Web Tokens (JWT). This project demonstrates a solid understanding of RESTful API design and database management.

## 🚀 Features
- **Manage Blog Posts**: Create, read, update, and delete posts with ease. 📚
- **Category Management**: Organize posts into categories for better navigation. 🗂️
- **User Authentication**: Secure login system using JWT for user sessions. 🔒
- **Modular Architecture**: Organized code with models, services, and controllers for better maintainability. 🛠️

## 📦 Installation

To set up the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd blogs-api
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Set up your database with the necessary migrations and models:
   ```bash
   npm run prestart
   ```

## 🎮 Usage

You can run the API either using npm directly or with Docker.

### Using npm

To run the API, use the following command:

```bash
npm run dev
```

You can then access the API at `http://localhost:3000` (or your specified port).

### Using Docker

1. **Build and Run the Docker Containers:**
   ```bash
   docker-compose up -d
   ```

2. **Access the API:**
   You can access the API at `http://localhost:3001` (or your specified port).

3. **Access the Container:**
   To attach to the container, use:
   ```bash
   docker exec -it blogs_api bash
   ```

## 📋 Dependencies

This project relies on the following packages:

- **Dependencies**:
  - `express`: Web framework for Node.js.
  - `express-async-errors`: Middleware to handle async errors.
  - `joi`: Data validation library.
  - `jsonwebtoken`: For handling JWT authentication.
  - `morgan`: HTTP request logger.
  - `mysql2`: MySQL client for Node.js.
  - `sequelize`: ORM for managing SQL databases.
  - `shelljs`: Unix shell commands for Node.js.

- **DevDependencies**:
  - `chai`: Assertion library.
  - `chai-http`: HTTP integration testing for Chai.
  - `change-case`: Utilities for changing case of strings.
  - `eslint-config-trybe-backend`: ESLint configuration.
  - `frisby`: API testing framework.
  - `jest`: JavaScript testing framework.
  - `mocha`: Test framework.
  - `nodemon`: Auto-restart for Node.js applications.
  - `nyc`: Code coverage tool.
  - `sequelize-cli`: CLI for Sequelize.
  - `sinon`: Standalone test spies, stubs, and mocks.
  - `supertest`: Testing HTTP servers.
  - `wait-on`: Wait for a resource to be available.

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request. Let's enhance this API together! 🎉

## 📜 License

This project is licensed under the MIT License. Happy coding! 🚀✨

---
