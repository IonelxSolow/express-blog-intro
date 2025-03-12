const express = require('express');
const app = express();
const PORT = 3000;

// middleware
app.use(express.static('public'));

// define the route to home
app.get('/', (req, res) => {
    res.send('Server del mio blog')
});

//define api endpoint for 5 blog posts
app.get('/bacheca',(req, res) => {
    const posts = [
        {
            title: "Ciambellone",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, nesciunt!",
            image: "/images/ciambellone.jpeg",
            tags: ["dolce", "tondo"]
        },
        {
            title: "Cracker barbabietola",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, nesciunt!",
            image: "/images/cracker_barbabietola.jpeg",
            tags: ["dolce", "cracker"]
        },
        {
            title: "Pane fritto dolce",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, nesciunt!",
            image: "/images/pane_fritto_dolce.jpeg",
            tags: ["dolce", "fritto"]
        },
        {
            title: "Pasta barbabietola",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, nesciunt!",
            image: "/images/pasta_barbabietola.jpeg",
            tags: ["dolce", "barbabietola"]
        },
        {
            title: "Torta paesana",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, nesciunt!",
            image: "/images/torta_paesana.jpeg",
            tags: ["dolce", "torta"]
        }
       
    ];
    res.json(posts)
})

//start server listen
app.listen(PORT, () => {
    console.log(`Server run on port http://localhost:${PORT}`)
})

