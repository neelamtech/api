// import express from 'express';
// import mysql from 'mysql';

var con = require('./connection');

var express = require('express');

var app = express();
var bodyParser = require('body-parser');

// app.use(bodyParser);

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/register.html');
});

app.post('/',function(req,res){
    var name = req.body.name;
    var email = req.body.email;
    var mobile_no = req.body.mobile_no;

    con.connect(function(error){
        if(error) throw error;

        var sql = "INSERT INTO student(name,email,mobile_no) VALUES('"+name+"','"+email+"','"+mobile_no+"')";
        con.query(sql,function(error,result){
            res.send('Student Register successfully'+result.insertId);

        });
    });
});
app.listen(8085);