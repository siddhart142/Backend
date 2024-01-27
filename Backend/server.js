import express from 'express'

const app = express();
const port = 3000
app.get("/api/jokes", (req,res) => {

    const jokes = [
        {
            id : 1,
            title : "1st",
            content : "1st joke",
        },
        {
            id : 2,
            title : "2st",
            content : "2st joke",
        },
        {
            id : 3,
            title : "1st",
            content : "1st joke",
        },
        {
            id : 4,
            title : "1st",
            content : "1st joke",
        },
        {
            id : 5,
            title : "1st",
            content : "1st joke",
        },

    ]
    res.send(jokes);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })