# Cricket Tournament Management System

This project is a **Cricket Tournament Management System** developed using **React** for the frontend, **Spring Boot** for the backend, and **MySQL** as the database. The system allows users to manage and view match details, teams, points tables, and player information. Admin users have additional privileges to edit, add, or delete data, while regular users can only view it. The entire project (frontend and backend) is contained in a single repository.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Database Schema](#database-schema)
- [Future Enhancements](#future-enhancements)

## Project Overview

The Cricket Tournament Management System provides an efficient way to organize and manage cricket tournaments. It supports features for adding, editing, and deleting tournament data, including match schedules, team information, points tables, and players. The project includes role-based authentication, where admins can manage the data, while regular users can only view it.

## Features

### 1. **User Authentication**
   - **Login system** for users and admins.
   - Admins can manage match details, points tables, teams, and players.
   - Regular users can view match schedules, team information, and points tables without logging in.

### 2. **Role-Based Access Control**
   - Admins have privileges to:
     - Add, edit, and delete match details.
     - Update team rosters, points table, and player information.
   - Regular users can:
     - View match details, team rosters, and points table.

### 3. **Points Table Management**
   - Displays points tables for tournaments.
   - Allows editing of match results that affect the points table.

### 4. **Match Management**
   - View match results, player stats, and points updates.
   - Admins can add or modify match schedules and results.

### 5. **Team and Player Management**
   - Display detailed team information and player statistics.
   - Admins can add, edit, or remove teams and players.

### 6. **Home Page with Tournament Photo**
   - Displays an image related to the tournament on the home page after login.

## Tech Stack

### Frontend:
- **React.js**: Used for building the user interface, including dynamic components for displaying match data, teams, points tables, and the admin dashboard.
  
### Backend:
- **Spring Boot**: Manages the backend logic, user authentication, and API endpoints for fetching and modifying tournament data.
  
### Database:
- **MySQL**: Stores all tournament-related data, including teams, players, match details, and points tables.

### Other Tools:
- **Spring Security**: Used for role-based authentication (admin and regular users).
- **REST API**: Facilitates communication between the React frontend and Spring Boot backend.

## Installation

### Prerequisites
- Java (JDK 8 or higher)
- Node.js and npm
- MySQL
- Maven

### Backend Setup (Spring Boot)
1. Clone the repository.
    ```bash
   https://github.com/suhas5324/Cricket-Tournament.git
    ```
2. Navigate to the backend project directory.
    ```bash
    cd cricket-tournament-management/backend
    ```
3. Configure the MySQL database in the `application.properties` file.
    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/cricket_tournament_db
    spring.datasource.username=your_db_username
    spring.datasource.password=your_db_password
    ```
4. Build and run the Spring Boot application.
    ```bash
    mvn clean install
    mvn spring-boot:run
    ```

### Frontend Setup (React)
1. Navigate to the frontend project directory.
    ```bash
    cd cricket-tournament-management/frontend
    ```
2. Install the dependencies.
    ```bash
    npm install
    ```
3. Start the React development server.
    ```bash
    npm start
    ```

### Database Setup (MySQL)
1. Open MySQL and create a new database.
    ```sql
    CREATE DATABASE cricket_tournament_db;
    ```
2. The necessary tables will be created automatically when the Spring Boot application is run for the first time.

## Usage

1. **Admin Login**:
   - Use the admin credentials to log in and access the dashboard where you can add, edit, or delete match details, teams, and players.
   
2. **User Access**:
   - Regular users can view match information, points tables, and team rosters without needing to log in.

## Database Schema

- **Users Table**: Stores user credentials and role information.
- **Matches Table**: Stores details of each match (teams, venue, date, result).
- **Teams Table**: Stores team details (team name, captain, players).
- **Points Table**: Stores tournament points and rankings.
- **Players Table**: Stores individual player statistics.

## Future Enhancements

1. **Search Functionality**:
   - Implement a search bar to allow users to filter matches by specific criteria, such as team, city, or date.
   
2. **Match Statistics**:
   - Add the ability to store and display detailed statistics for each match (runs, wickets, etc.).

3. **User Profiles**:
   - Allow users to create profiles and track the teams and matches they are following.

4. **Live Score Updates**:
   - Implement live score tracking functionality.

5. **Deploy Project**:
   - Deploy the project on a cloud platform to make it accessible to a wider audience.

---

## Conclusion

The Cricket Tournament Management System is a comprehensive solution for managing tournaments, teams, and matches. The project can be enhanced further by adding more features and improving the user interface. The combination of React, Spring Boot, and MySQL ensures a smooth and efficient system for organizing and managing cricket tournaments.
