const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Connect to MongoDB Atlas
mongoose.connect("mongodb+srv://iamvermanikhil:burger20@cluster0.kfks7p6.mongodb.net/blogDB", { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

// Create a schema for the blog post
const postSchema = new mongoose.Schema({
  title: String,
  content: String
});

// Create a model for the blog post using the schema
const Post = mongoose.model("Post", postSchema);

// Predefined content for different pages
const homeStartingContent = "Welcome to my daily journal! This is a space where I document and reflect upon my day-to-day experiences, thoughts, and emotions. Through my journal entries, I aim to capture the essence of my journey and share my observations, insights, and lessons learned along the way. Join me as I navigate through the ups and downs, celebrate successes, and overcome obstacles. I hope that my reflections and experiences resonate with you and inspire you to embark on your own introspective journey. Let's embark on this daily exploration together and uncover the beauty and meaning in each passing day.";
const aboutContent = "I am an aspiring full stack developer eagerly seeking new opportunities in the field. I possess a versatile skill set that encompasses HTML, CSS, JavaScript, Node.js, React.js, Python, and SQL, providing me with a well-rounded understanding of web development technologies. I am dedicated to honing my technical expertise and continuously improving my skills.Outside of coding, I have a diverse range of hobbies that enrich my life. I find great joy in traveling, as it allows me to explore new places, experience different cultures, and broaden my horizons. Games and cricket provide a wonderful outlet for fun and friendly competition, helping me unwind and connect with others who share my interests. Being an avid reader, I often find solace in the world of literature. I'm particularly drawn to novels that transport me to new worlds and deep dive into the human experience. Additionally, I have a fascination with mythological stories that captivate my imagination and spark my curiosity. Moreover, I appreciate the power of cinema and take pleasure in discovering new movies that inspire and entertain me. My ultimate ambition is to become a successful full stack developer, and I am wholeheartedly committed to achieving this goal. Whether it's crafting seamless user interfaces, building robust backend systems, or bringing ideas to life through code, I am driven by a profound passion for technology and a strong desire to excel in my craft. Equipped with my skills, determination, and broad range of interests, I am ready to embark on an exciting professional journey. My enthusiasm for continuous learning and my ability to adapt to new challenges make me a valuable asset to any development team. I eagerly look forward to the opportunities that lie ahead and the chance to make a meaningful impact in the field of web development.";
const contactContent = "";

// Render the home page and retrieve all posts from the database
app.get("/", function (req, res) {
  Post.find({})
    .then(function (posts) {
      res.render("home", {
        startingContent: homeStartingContent,
        posts: posts
      });
    })
    .catch(function (err) {
      console.error("Error retrieving posts:", err);
    });
});

// Render the about page
app.get("/about", function (req, res) {
  res.render('about', { aboutValue: aboutContent });
});

// Render the contact page
app.get("/contact", function (req, res) {
  res.render('contact', { contactValue: contactContent });
});

// Render the compose page for creating new posts
app.get("/compose", function (req, res) {
  res.render("compose");
});

// Save a new post to the database
app.post("/compose", function (req, res) {
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody
  });
  post.save()
    .then(function () {
      return res.redirect("/");
    })
    .catch(function (err) {
      return console.error("Error saving post:", err);
    });
});

// Render a specific blog post using its ID
app.get("/posts/:postId", function (req, res) {
  const requestedPostId = req.params.postId;
  Post.findOne({ _id: requestedPostId })
    .then(function (post) {
      res.render("post", {
        title: post.title,
        content: post.content
      });
    })
    .catch(function (err) {
      console.error("Error retrieving post:", err);
    });
});

// Start the server on the specified port
app.listen(process.env.PORT || 3000, function () {
  console.log("Server started on port 3000");
});
