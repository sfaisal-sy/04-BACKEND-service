import express from "express";
const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.send("BACKEND IS READY 03")
});

app.get('/api', (req, res) => {
    res.status(201).json({
        status: 201,
        message: "04 API IS WORKING PORPERLY"
    })
});


export default app;