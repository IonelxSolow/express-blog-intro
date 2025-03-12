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
app.get('/bacheca/posts',(req, res) => {
    const posts = [
        {
            title: "sdgasdg",
            content: "asdgasg",
            image: "asdgasdg",
            tags: "gasdg"
        },
        {
            title: "sdgasdg",
            content: "asdgasg",
            image: "asdgasdg",
            tags: ["gasdg", "gds", "asf", "asfa", "asaf"]
        },
        {
            title: "sdgasdg",
            content: "asdgasg",
            image: "asdgasdg",
            tags: ["gasdg", "gds", "asf", "asfa", "asaf"]
        },
        {
            title: "sdgasdg",
            content: "asdgasg",
            image: "asdgasdg",
            tags: ["gasdg", "gds", "asf", "asfa", "asaf"]
        },
        {
            title: "sdgasdg",
            content: "asdgasg",
            image: "asdgasdg",
            tags: ["gasdg", "gds", "asf", "asfa", "asaf"]
        }
       
    ];
    res.json(posts)
})

//start server listen
app.listen(PORT, () => {
    console.log(`Server run on port http://localhost:${PORT}`)
})