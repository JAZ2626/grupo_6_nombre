const express = require('express');
const path = require('path');

const controller = {

productDetail:  (req, res)=>{
    res.sendFile(path.resolve(__dirname, "../views/products/productDetail.html"))
},

}
module.exports = controller;


