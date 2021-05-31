const express = require('express');
const app = express();
const url = require('url');
const PORT = 3000;
rewrite = require('express-urlrewrite');




app.listen(PORT, () => {
console.log(`app started on port ${PORT}`)
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});



app.use(rewrite('/0', '/dog')); //example to show if you wanted to orgainize pages
                                //by index instead of by page in this case index 0

app.get('/dog', (req, res) => {
    console.log(req.url)
    res.sendFile(__dirname + '/client/dog.html');
})


app.use(rewrite('/1', '/cat')); 
                               

app.get('/cat', (req, res) => {
    res.sendFile(__dirname + '/client/cat.html');
})


app.use(rewrite('/2', '/pig')); 
                                

app.get('/pig', (req, res) => {
    res.sendFile(__dirname + '/client/pig.html');
})


app.use((req, res) => {
    if (req.url === '/block-url') {         //blocking url you do not want user to be able
      return res.sendStatus(204);           //to navigate to. In this case: /block-url
    }

    if (req.url === '/dont-go-here') {
        return res.sendStatus(204);       
    }

    res.status(404).send('Not Found!');
  });


