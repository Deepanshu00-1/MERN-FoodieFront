import express from "express";
import cors from "cors";
import connectDB from "./db.js";
import UserModel from "./models/UserModel.js";

const app = express();

app.use(cors(
    {
        origin: ["https://mern-foodie-front-frontend.vercel.app"],
        methods: ["POST"],
        credentials: true
    }
)); // for client-server side connection
app.use(express.json()); // for passing data in json format 

// const port = process.env.PORT || 3000;

app.post("/signup", (req,res)=>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(error => res.json(error))
});

app.post("/login", (req,res)=>{
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("Password is incorrect")
            }
        }else{
            res.json("No record found");
        }
    })
    .catch(error => res.json(error))
});

connectDB();

app.listen(8000, (req,res)=>{

    console.log("Server is running")
});
