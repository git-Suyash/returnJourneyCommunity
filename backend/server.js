import Express  from "express";


const PORT = 3000;
const app = Express();






app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});