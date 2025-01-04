# Backend_Assesment

College Management Backend Application

This project is a backend application built with NestJS and PostgreSQL to manage and query college-related data, including placements, courses, and city/state filters. The project demonstrates efficient database design, relationship handling, complex queries, and deployment readiness.

Prerequisites

Node.js (v14 or higher)

PostgreSQL (v13 or higher)

npm (v6 or higher)

Setup Instructions

1. Clone the Repository
git clone https://github.com/your-repo/college-management-backend.git
cd college-management-backend

2. Install Dependencies
npm install

3. Configure the Database 
  1.Create a PostgreSQL database named college_management.
  2.Update the database connection settings in src/app.module.ts:
   
TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'your_password',
  database: 'college_management',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // Set to false in production
})

4. Seed the Database

Use a custom script or a tool like pgAdmin to populate the database with realistic dummy data.
Ensure all foreign key relationships are maintained.

5. Run the Application

npm run start:dev
The server will run on http://localhost:3000/.

API Endpoints

1. College Placements Dat
Endpoint: /college_data/:college_id
Fetch placement statistics and trends for a specific college.

2. College Courses Data
Endpoint: /college_courses/:college_id
Retrieve all courses offered by a specific college, sorted by course fees.

3. City and State Filter
  Endpoint: /colleges
  Query Parameters:
    city: Filter colleges by city ID.
    state: Filter colleges by state ID.

API Documentation
Accessible via Swagger at http://localhost:3000/api (if Swagger module is integrated).

Deployment

Deploy to Render (or any cloud provider):
  Configure the environment variables for the database.
  Push the code to a GitHub repository and link it to Render.

Production Notes:

  Set synchronize: false in TypeOrmModule.forRoot() to prevent accidental schema changes.
  Use environment variables for sensitive data.

Testing

Use Postman or Swagger to test the endpoints.
Verify database operations using pgAdmin.

