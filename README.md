
# Cryptocurrency Web App

## Overview
This repository contains the code for a cryptocurrency web application built with **React** on the frontend. The app fetches and displays cryptocurrency data, supports dark/light mode, and includes a loading spinner while data is being fetched.

## Features
- Fetch and display top 10 cryptocurrencies.
- Filter cryptocurrencies based on selected type.
- Toggle between dark and light mode.
- Show a loading spinner while fetching data.

## Project Structure

### **Frontend**

- **Components**
  - Content: Fetches and displays cryptocurrency data.
  - Header: Displays the header of the application.
  - Footer: Displays the footer of the application.
  - Loader: Displays a loading spinner while data is being fetched.

- **Contexts**
  - DisplayContext: Manages the dark/light mode of the application.
  - CryptoContext: Provides the selected cryptocurrency for filtering.
  - RefetchContext: Allows triggering a refetch of data.

- **Styles**
  - index.css: Contains CSS styles for the Content component.

### **Backend**

- **API Endpoints**
  - **Get Top 10 Cryptocurrencies**
    - **Endpoint**: /api/getTop10/
    - **Method**: GET
    - **Description**: Retrieves a list of the top 10 cryptocurrencies.
    - **Response**: JSON array of cryptocurrency objects.

## Setup

### **Frontend**

1.**Change directory and install dependecies **
   
bash
   cd client
   npm install

2.Start Development Server

bash
Copy code
npm start
The application will be available at http://localhost:3000.
ChatGPT said:
ChatGPT
Here’s the revised README.md with the setup instructions clearly separated and formatted correctly:

markdown
Copy code
# Cryptocurrency Web App

## Overview
This repository contains the code for a cryptocurrency web application built with **React** on the frontend. The app fetches and displays cryptocurrency data, supports dark/light mode, and includes a loading spinner while data is being fetched.

## Features
- Fetch and display top 10 cryptocurrencies.
- Filter cryptocurrencies based on selected type.
- Toggle between dark and light mode.
- Show a loading spinner while fetching data.

## Project Structure

### **Frontend**

- **Components**
  - `Content`: Fetches and displays cryptocurrency data.
  - `Header`: Displays the header of the application.
  - `Footer`: Displays the footer of the application.
  - `Loader`: Displays a loading spinner while data is being fetched.

- **Contexts**
  - `DisplayContext`: Manages the dark/light mode of the application.
  - `CryptoContext`: Provides the selected cryptocurrency for filtering.
  - `RefetchContext`: Allows triggering a refetch of data.

- **Styles**
  - `index.css`: Contains CSS styles for the `Content` component.

### **Backend**

- **API Endpoints**
  - **Get Top 10 Cryptocurrencies**
    - **Endpoint**: `/api/getTop10/`
    - **Method**: `GET`
    - **Description**: Retrieves a list of the top 10 cryptocurrencies.
    - **Response**: JSON array of cryptocurrency objects.

## Setup

### **Frontend**

1. **Change Directory and Install Dependencies**
   ```bash
   cd client
   npm install
Navigate into the client directory and install all necessary dependencies listed in package.json to set up the project environment.

Start Development Server
Start the development server and access the application at http://localhost:3000.
bash
Copy code
  ```bash
  npm start







