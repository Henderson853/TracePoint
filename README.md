# TracePoint Investigations

## Operation Digital Detective — NWED622

### Group Information

| No. | Student Name           | Student Number           |
| --: | ---------------------- | ------------------------ |
|   1 | Thuto Henderson        | 202207325                |
|   2 | Lebogang Ntholeng      | 202336592                |
|   3 | Aatea Kakoli Kakudi    | 202572559                |
|   4 | Nomzamo Lusanda Xaba   | 202425697                |
|   5 | Milisa Lunika          | 202431987                |

**Module:** NWED622 — Web Development II
**Application:** TracePoint Investigations
**Academic Year:** 2026


---

# 1. Application Description

TracePoint Investigations is a full-stack investigation management system developed for a fictional private investigation company.

The application allows investigators to view investigation cases, suspects, and evidence, and to submit investigation findings. The system consists of a React frontend, an ASP.NET Core Web API backend, and a SQLite relational database.

The backend provides RESTful API endpoints that allow the React application to retrieve investigation information and submit investigation records.

The application demonstrates the use of:

* RESTful Web APIs
* ASP.NET Core
* Entity Framework Core
* Dapper
* SQLite
* React
* React Router
* HTTP/JSON communication
* Unit testing
* Integration testing

---

# 2. Technologies Used

## Backend

* **C#**
* **ASP.NET Core Web API**
* **Entity Framework Core**
* **Dapper**
* **SQLite**
* **.NET 10**

## Frontend

* **React**
* **JavaScript**
* **Vite**
* **React Router**
* **HTML5**
* **CSS3**

## Development and Testing

* Visual Studio / Visual Studio Code
* .NET CLI
* Node.js and npm
* Git
* Postman or browser for API testing
* Unit and integration testing tools

---

# 3. System Architecture

The application uses the following architecture:

```text
React Frontend
      |
      | HTTP / JSON
      ↓
ASP.NET Core Web API
      |
      ├── Entity Framework Core
      |
      └── Dapper
              |
              ↓
        SQLite Database
```

The React frontend communicates with the ASP.NET Core API. The API handles requests and accesses the SQLite database using Entity Framework Core and Dapper.

---

# 4. API Endpoints

The API runs locally at:

```text
http://localhost:5168
```

## Cases

### Get all cases

```http
GET /api/cases
```

Returns all investigation cases.

### Get a specific case

```http
GET /api/cases/{id}
```

Example:

```http
GET /api/cases/1
```

---

## Suspects

### Get all suspects

```http
GET /api/suspects
```

Returns all suspects.

### Get a specific suspect

```http
GET /api/suspects/{id}
```

Example:

```http
GET /api/suspects/1
```

---

## Evidence

### Get all evidence

```http
GET /api/evidence
```

Returns all evidence records.

### Get specific evidence

```http
GET /api/evidence/{id}
```

Example:

```http
GET /api/evidence/1
```

The evidence ID uses an integer route constraint.

---

## Investigations

### Submit an investigation

```http
POST /api/investigations
```

Example request body:

```json
{
  "caseID": 1,
  "suspectID": 2,
  "conclusion": "The evidence indicates that the suspect was involved in the incident.",
  "dateStarted": "2026-10-08"
}
```

The investigation is stored in the SQLite database.

---

# 5. Database

The application uses **SQLite** as its relational database.

The main database tables are:

```text
Cases
Suspects
Evidence
Investigations
```

The database file is:

```text
TracePointDB.db
```

The database connection is configured in:

```text
TracePointAPI/appsettings.json
```

Example:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Data Source=TracePointDB.db"
  }
}
```

---

# 6. Database Setup Instructions

## Step 1 — Navigate to the API directory

Open PowerShell or a terminal and navigate to the backend:

```powershell
cd C:\Users\Admin\Desktop\TracePoint\TracePointAPI
```

If the project is stored somewhere else, use the appropriate project path.

---

## Step 2 — Restore .NET packages

Run:

```powershell
dotnet restore
```

---

## Step 3 — Verify the SQLite package

The project requires the Entity Framework Core SQLite provider.

If it has not already been installed, run:

```powershell
dotnet add package Microsoft.EntityFrameworkCore.Sqlite
```

---

## Step 4 — Create the database migration

Run:

```powershell
dotnet ef migrations add InitialCreate
```

This creates the initial Entity Framework Core migration.

---

## Step 5 — Create/update the database

Run:

```powershell
dotnet ef database update
```

This creates the SQLite database using the Entity Framework Core migrations.

The database file will be created as:

```text
TracePointDB.db
```

---

# 7. Running the API

## Step 1 — Open a terminal

Navigate to the API project:

```powershell
cd C:\Users\Admin\Desktop\TracePoint\TracePointAPI
```

## Step 2 — Build the API

Run:

```powershell
dotnet build
```

The project should build successfully.

## Step 3 — Start the API

Run:

```powershell
dotnet run
```

The API should display a message similar to:

```text
Now listening on: http://localhost:5168
```

The API is now running.

---

# 8. Testing the API Manually

Once the API is running, the endpoints can be tested using a web browser, Postman, or another API testing application.

For example:

```text
http://localhost:5168/api/cases
```

```text
http://localhost:5168/api/suspects
```

```text
http://localhost:5168/api/evidence
```

The OpenAPI document can also be viewed during development at:

```text
http://localhost:5168/openapi/v1.json
```

For the POST investigation endpoint, use Postman or another HTTP client.

Example:

```http
POST http://localhost:5168/api/investigations
Content-Type: application/json
```

Request body:

```json
{
  "caseID": 1,
  "suspectID": 1,
  "conclusion": "Investigation completed successfully.",
  "dateStarted": "2026-10-08"
}
```

---

# 9. Running the React Application

The React frontend is located in:

```text
TracePointClient
```

## Step 1 — Navigate to the React project

Open another terminal and run:

```powershell
cd C:\Users\Admin\Desktop\TracePoint\TracePointClient
```

Make sure the ASP.NET Core API is still running in the first terminal.

---

## Step 2 — Install npm dependencies

Run:

```powershell
npm install
```

This installs all required React and frontend dependencies.

---

## Step 3 — Start the React development server

Run:

```powershell
npm run dev
```

Vite will display a local address, normally:

```text
http://localhost:5173
```

Open the displayed URL in a web browser.

The React application communicates with the API running at:

```text
http://localhost:5168
```

---

# 10. Running the Complete Application

Both the backend and frontend must be running.

### Terminal 1 — ASP.NET Core API

```powershell
cd TracePointAPI
dotnet run
```

API:

```text
http://localhost:5168
```

### Terminal 2 — React

```powershell
cd TracePointClient
npm run dev
```

Frontend:

```text
http://localhost:5173
```

The complete application can then be accessed through the React frontend.

---

# 11. Testing Instructions

## Backend Unit Tests

Navigate to the test project if one has been created:

```powershell
cd TracePointAPI.Tests
```

Run:

```powershell
dotnet test
```

A successful test run should report the number of tests that passed.

---

## Integration Tests

Integration tests verify that the API works together with its database and application components.

Run:

```powershell
dotnet test
```

Integration tests should verify important API operations such as:

```text
GET /api/cases
GET /api/cases/{id}
GET /api/suspects
GET /api/suspects/{id}
GET /api/evidence
GET /api/evidence/{id}
POST /api/investigations
```

---

## Frontend Testing

The React application should be tested manually by checking:

1. Navigation between application pages.
2. Cases are displayed correctly.
3. Suspects are displayed correctly.
4. Evidence is displayed correctly.
5. Investigation form accepts user input.
6. Investigation submission sends data to the API.
7. Successful submissions are handled correctly.
8. Invalid requests display appropriate feedback.
9. The application works on different screen sizes.
10. Forms and navigation can be used with a keyboard.

---

# 12. Expected Application Routes

The React application provides the following routes:

| Route            | Description                   |
| ---------------- | ----------------------------- |
| `/`              | Home/application landing page |
| `/case`          | View investigation cases      |
| `/suspects`      | View suspects                 |
| `/evidence`      | View evidence                 |
| `/investigation` | Submit an investigation       |

---

# 13. Troubleshooting

### API returns 404

Ensure that `Program.cs` contains:

```csharp
builder.Services.AddControllers();
```

and:

```csharp
app.MapControllers();
```

Controllers should also contain:

```csharp
[ApiController]
[Route("api/[controller]")]
```

---

### Database does not exist

Run:

```powershell
dotnet ef database update
```

---

### API does not start

Run:

```powershell
dotnet build
```

and check for compilation errors.

---

### React cannot retrieve API data

Check that:

1. The ASP.NET Core API is running.
2. The API is running on `http://localhost:5168`.
3. The React application is running.
4. The API endpoint URL is correct.
5. CORS is configured correctly if required.

