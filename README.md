# Express Blog App

This is a simple Express.js application that allows users to create and view blog posts. The app uses MongoDB as the database to store the blog posts.

## Features

- **Home Page**: The home page displays a list of all blog posts. Each post shows the title and a snippet of the content. Users can click on a post to view the full content.

- **Compose Page**: Users can create new blog posts by visiting the compose page. They can enter a title and the content for the post, and upon submission, the post is saved to the database.

- **Individual Post Page**: Clicking on a blog post from the home page or using its direct URL takes the user to the individual post page. Here, the full content of the post is displayed.

- **About Page**: The about page provides information about the author of the blog, including their skills, interests, and aspirations.

- **Contact Page**: The contact page allows users to get in touch with the author. It can be customized to include contact information or a contact form.

## Prerequisites

Before running the application, make sure you have the following dependencies installed:

- [Node.js](https://nodejs.org)
- [MongoDB](https://www.mongodb.com)
- [Express.js](https://expressjs.com)
- [Mongoose](https://mongoosejs.com)

## Installation

1. Clone the repository or download the source code.

2. Navigate to the project directory.

3. Install the dependencies by running the following command:

   ```
   npm install
   ```

4. Start the application using the following command:

   ```
   node app.js
   ```

   The server will start running on `http://localhost:3000`. You can access the application in your web browser.

## Configuration

The application is already configured to connect to a MongoDB Atlas database. If you want to use a different database, you can modify the MongoDB connection URL in the `mongoose.connect` function call in the `app.js` file.

## Usage

- Access the home page at `http://localhost:3000` to view the list of blog posts.

- Click on a post title to view the full content of that post.

- Create a new post by visiting `http://localhost:3000/compose`. Enter the title and content of the post and click the "Publish" button.

- Explore the about page at `http://localhost:3000/about` to learn more about the author.

- Visit the contact page at `http://localhost:3000/contact` to get in touch with the author.
