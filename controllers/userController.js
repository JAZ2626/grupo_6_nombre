const express = require('express');

const controller = {
register:  (req, res)=>{
    res.render('register')
},

login: (req, res)=>{
    res.render('login')
},

productCart: (req, res)=>{
    res.render('productCart')
}

}

module.exports = controller;


