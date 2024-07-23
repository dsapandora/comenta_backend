
# Exam Project

## Overview

This project consists of a backend and a frontend. The backend is built with FastAPI and the frontend is built with Next.js, React, TypeScript, and Tailwind CSS.

### Problem to solve
Three friends enter a bar that only sells beer. The place offers occasional promotions.
Implement an endpoint in Python to get the status of the order.

FRONTEND: https://comenta-exam.vercel.app/
BACKEND: https://dry-citadel-13934-076124cec1e2.herokuapp.com/


## Project Structure

```
exam-project/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   ├── services.py
│   │   ├── routers/
│   │   │   ├── __init__.py
│   │   │   └── order.py
│   ├── tests/
│   │   ├── __init__.py
│   │   ├── test_order.py
│   ├── requirements.txt
│   ├── Procfile
│   └── README.md
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx
│   │   ├── components/
│   │   │   ├── Order.tsx
│   │   │   ├── Stock.tsx
│   │   ├── utils/
│   │   │   ├── api.ts
│   │   │   ├── api.test.ts
│   │   ├── public/
│   │   ├── styles/
│   │   │   ├── globals.css
│   ├── jest.config.js
│   ├── jest.setup.ts
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   ├── package.json
│   ├── .env.local
│   ├── README.md
└── README.md
```

## Backend Setup

### Prerequisites

- Python 3.8+
- FastAPI
- Uvicorn

### Installation

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Create a virtual environment and activate it:

   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. Install the dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Run the backend server:

   ```bash
   uvicorn app.main:app --reload
   ```

## Frontend Setup

### Prerequisites

- Node.js 14+
- npm

### Installation

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the `frontend` directory and add your environment variables:

   ```env
   NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
   ```

4. Run the frontend development server:

   ```bash
   npm run dev
   ```

### Testing

To run the tests for the frontend, use the following command:

```bash
npm test
```

## Project Configuration

### Backend Configuration

- **Procfile**: Defines the process types for the Heroku deployment.
- **requirements.txt**: Lists the Python dependencies for the backend.

### Frontend Configuration

- **jest.config.js**: Jest configuration for testing.
- **tailwind.config.js**: Tailwind CSS configuration.
- **tsconfig.json**: TypeScript configuration.
