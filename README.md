# Quiz App 🎯

A simple quiz application built with **Angular** that fetches trivia questions from the **Open Trivia DB API**.
This project was mainly created to practice **CI/CD workflows using GitHub Actions**.

---

## 🚀 Features

* Fetches trivia questions from the Open Trivia DB API
* Multiple choice quiz format
* Score tracking
* Question Timer
* Simple and responsive UI
* Automated build workflow with GitHub Actions

---

## 🛠️ Tech Stack

* **Frontend:** Angular
* **API:** Open Trivia DB
* **CI/CD:** GitHub Actions
* **Runtime:** Node.js

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/christophe762/quiz-app.git
cd quiz-app
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
ng serve
```

Open your browser and go to:

```
http://localhost:4200
```

---

## 🧠 API Used

This project uses the **Open Trivia Database API** to fetch quiz questions.

Example request:

```
https://opentdb.com/api.php?amount=10&type=multiple
```

Documentation:
https://opentdb.com/api_config.php

---

## ⚙️ CI/CD Pipeline

This project includes a **GitHub Actions workflow** that automatically builds and tests the application when code is pushed to the `main` branch or when a pull request is opened.

### Workflow Steps

1. Checkout repository
2. Setup Node.js
3. Install dependencies
4. Build the Angular application

### GitHub Actions Workflow

```yaml
name: Build and Test Workflow

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '22'

    - name: Install dependencies
      run: npm install

    - name: Build app
      run: npm run build --if-present
```

---

## 📁 Project Structure

```
quiz-app/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── services/
│   │   └── models/
│   │
│   ├── assets/
│   └── environments/
│
├── .github/
│   └── workflows/
│       └── main-ci.yml
│
├── package.json
└── README.md
```

---

## 🎯 Purpose of the Project

The goal of this project was to:

* Implement **CI/CD using GitHub Actions**
* Automate builds on push and pull requests

---

## 🙌 Acknowledgments

* Open Trivia DB for providing the trivia API
* Angular framework
* GitHub Actions for CI/CD automation
