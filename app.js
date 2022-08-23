const express = require ("express");
const path = require ('path');
const app = express();

app.listen(3030, ()=>{
    console.log(" ");
})
app.use(express.static('public'));
app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
});

app.get('/home', (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.get('/login', (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});

app.get('/productCart', (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/productCart.html"))
});

app.get('/productDetail', (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/productDetail.html"))
});

app.get('/mio', (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/mio.html"))
});

app.get('/register', (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});
