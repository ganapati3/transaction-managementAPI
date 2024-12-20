# transaction-managementAPI

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- **Node.js** 
- **npm** 
---

## Setup Instructions

### Step 1: Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/ganapati3/transaction-managementAPI.git
cd transaction-managementAPI
```

### Step 2: Install Dependencies

Run the following command to install the necessary dependencies for the project:

```bash
npm install
```

This will install all the required packages, including Vue 3, Tailwind CSS, and Axios.

### Step 3: Run the Application

After installing dependencies and configuring Tailwind CSS, start the development server by running:

```bash
npm run build
npm run start
```

### Step 4: Config .env file according to your credentials
```bash

PORT=3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=test_db
DB_PORT = 3307

```

This will start the local development server. You should see the following output in your terminal:
```
  App running at:
  - Local:   http://localhost:3000/
  - Network: http://<your-ip>:3000/
```

```
  Swagger docs running at:
  - Local:   http://localhost:3000/api-docs
  - Network: http://<your-ip>:3000/api-docs
```

Now, open your browser and navigate to [http://localhost:3000/](http://localhost:3000/) it will print "Hello World!".


## Troubleshooting

- **Port in use**: If you see an error like `Error: listen EADDRINUSE: address already in use`, it means the port (default 3000) is occupied. To resolve this, you can change the port number:
  
- **Missing Dependencies**: If you see an error about missing dependencies, try running:
  ```bash
  npm install
  ```

If you still face any issue use the deployed url
### Swagger docs 
[https://transaction-managementapi.onrender.com/api-docs](https://transaction-managementapi.onrender.com/api-docs)

### Live api Urls

POST [https://transaction-managementapi.onrender.com/api/trasactions](https://transaction-managementapi.onrender.com/api/trasactions)

PUT [https://transaction-managementapi.onrender.com/api/transactions/1](https://transaction-managementapi.onrender.com/api/transactions/1)

GET [https://transaction-managementapi.onrender.com/api/transactions?user_id=10](https://transaction-managementapi.onrender.com/api/transactions?user_id=10)

GET [https://transaction-managementapi.onrender.com/api/transactions/1](https://transaction-managementapi.onrender.com/api/transactions/1)
