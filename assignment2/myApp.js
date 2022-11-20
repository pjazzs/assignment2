const express = require("express");

const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8000;

app.listen(PORT, (req, res) =>{
    console.log(`Server is RUNNING smoothly...`)
})


// ANSWER 1

const RSU = [
    {
        jssOne: {
            name: "Evidence",
            DOB: "23/07/2010",
            gender: "F",
            state: "Bayelsa",
            nationality: "Nigerian"
        }
    },
    {
        jssTwo: {
            name: "LadySnow",
            DOB: "16/11/2011",
            gender: "F",
            state: "Rivers",
            nationality: "Nigerian"
        }
    },
    {
        jssThree: {
            name: "Favour",
            DOB: "23/07/2009",
            gender: "F",
            state: "Akwa Ibom",
            nationality: "Nigerian"
        }
    }
]


app.get("/student", (req, res) =>{
    // res.json("It's working")
    const getStudent = RSU[0];
    res.json(getStudent)
})



// ANSWER 2

app.post("/student", (req, res) =>{
    const getPostBody  = req.body;

    console.log(getPostBody)
    res.json("It worked!")
})

// ANSWER 3

app.post("/contact", (req, res) =>{
    const getPost = req.body;
    const allStudent = [...RSU, getPost ];

    console.log(allStudent);
    res.json("worked!!!")
})


