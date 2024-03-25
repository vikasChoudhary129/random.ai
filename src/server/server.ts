import express,  {Request, Response} from "express";
import cors from "cors"

const app = express();
const port =  1000;
app.use(cors());

app.get('/', (req:Request, res:Response)=>{
    res.send('Welcome to Random.ai., let start getting insights')
});


function start(){
app.listen(port , ()=>{
    console.log('listening on local port 1000')
});
};

export default {
    start
}