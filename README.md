# Humble Superhero API

## Introduction

The **Humble Superhero API** is a simple Node.js backend service that allows users to:

- Add a new superhero with a name, superpower, and a humility score.
- Retrieve a list of superheroes sorted by their humility score.

## Tech Stack

- **Backend:** Express.js (instead of NestJS as per personal preference)
- **Database:** In-memory storage (Array)
- **Testing:** Jest (for basic endpoint testing)

## Installation and Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/your-repo/humble-superhero-api.git
   cd humble-superhero-api
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the server:

   ```sh
   npm run dev
   ```

   The API will run on `http://localhost:5000`.

## API Endpoints

### 1. Add a New Superhero

**Endpoint:** `POST /superheroes`  
**Description:** Adds a new superhero to the list.  
**Request Body (JSON):**

```json
{
  "name": "Spider-Man",
  "superpower": "Web-Slinging",
  "humilityScore": 9
}
```

**Response:**

```json
{
  "data": [
    {
      "name": "Spider-man",
      "superpower": "Web-Slinging",
      "humilityScore": 9
    }
  ],
  "message": "Superhero added successfully"
}
```

### 2. Fetch Superheroes List (Sorted by Humility Score)

**Endpoint:** `GET /superheroes`  
**Description:** Retrieves the list of superheroes, ordered by humility score (highest first).  
**Response Example:**

```json
{
  "data": [
    {
      "name": "Bat-man",
      "superpower": "Web-Slinging",
      "humilityScore": 10
    },
    {
      "name": "Spider-man",
      "superpower": "Web-Slinging",
      "humilityScore": 9
    }
  ],

  "message": "Superheroes retrieved successfully"
}
```

## Validation

- The **humility score** must be a number between **1 and 10**.
- All fields (**name, superpower, humilityScore**) are required.

## Running Tests

To run the Jest tests:

```sh
npm test
```

## Team Collaboration

If I were collaborating with a teammate:

- I would use **Git** for version control with feature branches for different tasks.
- I’d suggest code reviews via pull requests before merging.
- Communication would be through **Slack/Teams/GitHub Discussions**.
- We’d set up a **Trello board or GitHub Projects** for tracking progress.

## If I Had More Time

- Implement a **database (MongoDB/PostgreSQL)** instead of an in-memory array.
- Add **authentication** (JWT) for managing superhero data securely.
- Deploy the API using **Docker** and host it on **Heroku/Vercel**.

---

### Submission

The project is submitted as a zip file.  
Alternatively, you can push it to GitHub and share the repository link.

---

🎉 **Thank you for the opportunity!** 🚀
