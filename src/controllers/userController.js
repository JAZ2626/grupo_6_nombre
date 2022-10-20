const express = require('express');
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');

const controller = {
    users: (req, res) => {
        const usersJSON = fs.readFileSync(path.join(__dirname, "../data/user.json"), "utf-8");
        const users = JSON.parse(usersJSON);
        res.render('users')
    },

    register: (req, res) => {
        res.render('register')
    },
    addUser: (req, res) => {
        const usersJSON = fs.readFileSync(path.join(__dirname, "../data/user.json"), "utf-8");
        const users = JSON.parse(usersJSON);

        const newUser = {
            id: users[users.length - 1].id + 1,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            image: '/imgUsers/' + req.file.filename,
            email: req.body.email,
            password: req.body.password,
            telefono: Number(req.body.telefono)


        };

        users.push(newUser);

        const newListUsers = JSON.stringify(users);

        fs.writeFileSync(path.join(__dirname, "../data/user.json"), newListUsers, "utf-8");

        res.redirect('/')

    },
    login: (req, res)=>{
        let errors = validationResult(req);
        if (errors.isEmpty()){
            let user = req.body;
            userId = usersModel.create(user);
            res.redirect('/')
        }else{
            return res.render('login', {errors: errors.mapped(),
                old: req.body});
        }
    },

    productCart: (req, res) => {
        res.render('productCart')
    },
}



module.exports = controller;