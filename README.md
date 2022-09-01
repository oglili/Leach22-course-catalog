# Leach22-course-catalog
<p align="center">

  <p align="center">
    <a href="https://github.com/oglili/Leach22-course-catalog">
        <img src="/client/src/assets/images/logo.svg" alt="Logo" width= "200" height = "200">
    </a>
   </p>
  
  <h3 align="center">Leach22 Course Catalog</h3>

  <p align="center">
     Leach22 is a UN goal-based training platform that will need to catalog the courses it will offer. 
</p>

  <br>
  <br>


<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#some-technologies-used">Some Technologies Used</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#test">Test</a></li>
        <li><a href="#use-app">Use App</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#links-contacts">Links & Contacts</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

## About The Project
In this project I created a RESTful JSON APIs using Express js, which provides a way for insertion of the courses offered by the platform into the database. Users can interact with the database by retrieving a list of courses, as well as adding, updating and deleting courses in the database and React to create the frontend user interface.

### Some Technologies Used

-   [Node.js](https://nodejs.org/en/)
-   [Express js](https://expressjs.com/)
-   [MongoDB/Mongoose](https://mongoosejs.com/)
-   [Normalize CSS](https://necolas.github.io/normalize.css/)
-   [Styled Components](https://styled-components.com/)
-   [JWT](https://jwt.io/)
-   [Bcrypt.js](https://www.npmjs.com/package/bcryptjs)

## Getting Started

### Prerequisites

You use it for your project by following the Installation or Use App to use the app.

### Installation

1. Clone the repository locally with the git command:

    ```sh
    git clone https://github.com/oglili/Leach22-course-catalog.git
    ```
2. Open the package.json to install the dependencies in the client and main folder:
    ```sh
    "scripts": {
        "build-client": "cd client && npm run build",
        "install-client": "cd client && npm install",
        "server": "nodemon server --ignore client",
        "client": "npm start --prefix client",
        "start": "concurrently --kill-others-on-fail \"npm run server\" \" npm run client\""
      }

       ```

3. Create your database with MongoDB/Mongoose & JWT 

4. Create your .env file with your database & JWT credentials 

You can now access the server at http://localhost:5000

REST API project section endpoints:

- `POST /api/v1/auth/register` - To register a user.
- `POST /api/v1/auth/login` - To login a registered user.
- `PATCH /api/v1/auth/updateUser` - To update a user.
- `GET /api/v1/courses` - Returns all courses of the current user.   
- `GET /api/v1/courses/stats` - Returns all course showing statistics.
- `GET /api/v1/courses/total` - Returns all courses.
- `POST /api/v1/courses` - Creates a course.
- `PATCH /api/v1/courses/:id` - Updates a course specifying the id.
- `DELETE /api/v1/courses/:id` - Deletes a course specifying the id.

### Test

- Postman can be used to test the REST API.

### Use App

- Open https://leach22-course-catalog.herokuapp.com/landing
- Register/Login
- Start adding, editing, deleting courses and viewing all courses in the piattaform.

<h3 align="center">Preview</h3>

  <a href="https://github.com/Auro-93/bonny-state-bonuses-laravel">
    <img src="public/screenshots/overview.png" alt="site-homepage-overview">
  </a>

  <a href="https://github.com/Auro-93/bonny-state-bonuses-laravel">
    <img src="public/screenshots/bonuses-table.png" alt="site-bonuses-table">
  </a>

  <a href="https://github.com/Auro-93/bonny-state-bonuses-laravel">
    <img src="public/screenshots/create-category.png" alt="site-create-category">
  </a>


## License

Distributed  the MIT License. See `LICENSE` for more information.

## Links & Contacts

[@Aurora Sirigu](https://www.linkedin.com/in/aurora-sirigu-a001301b4/) - 93a.sirigu at gmail dot com

Project Repository: [bonny-state-bonuses-laravel](https://github.com/Auro-93/bonny-state-bonuses-laravel)

Project Website: [leach22-course-catalog - Heroku](https://leach22-course-catalog.herokuapp.com/landing)

Portfolio: [aurodev-web-developer-portfolio](https://aurodev-web-developer-portfolio.netlify.app/)

## Acknowledgements

-   [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
-   [Awesome README](https://github.com/matiassingers/awesome-readme)
-   [Laravel](https://laravel.com/)
-   [Tailwind CSS](https://tailwindcss.com/)
