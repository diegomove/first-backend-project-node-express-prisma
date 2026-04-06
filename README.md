# Backend Full Course - Learning Project

This is my first backend project. I built it while following a full course and then adapted parts of the code to understand the concepts better.

## About this repository

This repository is organized by chapters, showing a progression from basic Express endpoints to authentication, ORM usage, and containerized deployment.

## Learning goals

- Build REST APIs with Node.js and Express
- Implement authentication with JWT
- Hash passwords with bcryptjs
- Work with database layers (SQLite and PostgreSQL)
- Use Prisma ORM in a real API
- Run services with Docker Compose

## Project structure

- chapter_1: Theory notes from the course
- chapter_2: Intro Express server and API basics
- chapter_3: Todo app with JWT auth and SQLite flow
- chapter_4: Dockerized todo app with PostgreSQL + Prisma + JWT

## Tech stack

- Node.js
- Express
- JWT (jsonwebtoken)
- bcryptjs
- SQLite (chapter 3)
- PostgreSQL (chapter 4)
- Prisma ORM (chapter 4)
- Docker and Docker Compose (chapter 4)

## Quick start

### Prerequisites

- Node.js 20+
- npm
- Docker Desktop (for chapter 4 Docker flow)

### Chapter 2

```bash
cd chapter_2
npm install
npm run dev
```

### Chapter 3

```bash
cd chapter_3
npm install
npm run dev
```

### Chapter 4 (recommended: Docker)

```bash
cd chapter_4
docker compose up --build
```

App should be available at http://localhost:3000

### Chapter 4 (local, without Docker)

```bash
cd chapter_4
npm install
npx prisma generate
npm run dev
```

## API overview (chapter 4)

- POST /auth/register: create user and return JWT
- POST /auth/login: authenticate user and return JWT
- GET /todos: list authenticated user todos
- POST /todos: create todo
- PUT /todos/:id: update todo completion
- DELETE /todos/:id: delete todo

## Testing requests

You can use the included REST files with VS Code REST Client extension:

- chapter_2/test.rest
- chapter_3/todo-app.rest
- chapter_4/todo-app.rest

## Attribution

This project was built by following these resources:

- YouTube tutorial: https://www.youtube.com/watch?v=9BD9eK9VqXA
- Original repository: https://github.com/jamezmca/backend-full-course.git

This repository is for learning purposes and includes my own adaptations while following the course.

## Author

Diego Moreno
