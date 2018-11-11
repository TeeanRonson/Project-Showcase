const User = require('../models').User;
const jwt = require('jsonwebtoken');
const secret = require('../config').secret;
const uniqid = require('uniqid');
const emailVerification = require('../helpers/emailVerification');
const md5 = require('md5');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const axios = require('axios');
const linkedinConfig = require('../config/linkedin.json')

const Linkedin = require('node-linkedin')(linkedinConfig.app_id, linkedinConfig.secret, linkedinConfig.callback)


createAccountHelper = (req, res) => {
    return User
        .create({
            id: uniqid("user-"),
            email: req.body.email,
            username: req.body.username,
            password: md5(req.body.password),
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            github: req.body.github,
            linkedin: req.body.linkedin,
        })
        .then(user => {
            const jwttoken = jwt.sign({
                id: user.id,
                email: req.body.email,
                username: req.body.username,
                password: md5(req.body.password),
            }, secret, { expiresIn: '24h' });
            res.status(201).send({
                user: {
                    email: req.body.email,
                    username: req.body.username,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    github: req.body.github,
                    linkedin: req.body.linkedin, 
                },
                jwttoken: jwttoken
            })
        })
        .catch(err => res.status(403).send({
            error: err
        }));
    },

    loginHelper = (user, req, res) => {
        if (!user)
            return res.status(404).send({ error: 'Wrong username or email' })
        else if (user.password === md5(req.body.password)) {
            console.log("user = " + user)
            const jwttoken = jwt.sign({
                id: user.id,
                username: user.username,
                email: user.email,
                password: user.password,
                administrator: user.administrator,

            }, secret, { expiresIn: '24h' });
            return res.status(200).send({
                user: {
                    email: user.email,
                    username: user.username,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    github: user.github,
                    linkedin: user.linkedin, 
                },
                jwttoken: jwttoken
            });
        }
        return res.status(404).send({ error: 'wrong password' })
    }

module.exports = {
    createAccount(req, res) {
        User.findOne({ where: { email: req.body.email } })
            .then(user => {
                if (user) {
                    res.status(400).send({
                        error: "Email address is used"
                    })
                    return;
                } else {
                    User.findOne({ where: { username: req.body.username } })
                        .then(user => {
                            if (user) {
                                res.status(400).send({
                                    error: "Username is used"
                                })
                                return;
                            } else {
                                createAccountHelper(req, res);
                            }
                        })
                        .catch((err) => res.status(404).send({ error: err }))
                }
            })
            .catch((err) => res.status(404).send({ error: err }))
    },

    login(req, res) {
        if (req.body.username) {
            User.findOne({ where: { [Op.or]: [{ email: req.body.username }, { username: req.body.username }] } })
                .then((user) => loginHelper(user, req, res))
                .catch(err => res.status(200).send({err: err}));
        } else {
            res.status(404).send({ err: 'There is no such username' })
        }
    },

    find(req, res) {
        console.log("find request");
        const username = req.query.username;
        if (username) {
            console.log(username)
            User.findOne({ username: username})
            .then(user => {
                return res.status(200).send({
                    username: user.username,
                    id: user.id,
                    github: user.github
                })
            })
            .catch(err => res.status(404).send({err: err}));
        } else {
            res.status(400).send({ err: "No username param. "});
        }
    },

    user(req, res) {
        console.log("/user");
        const id = req.query.id;
        if (id) {
            console.log('id = ' + id)
            User.findById(id)
            .then(user => {
                console.log("github: " + user.github)
                if (!user.github)
                    return res.status(404).send({err: "Repos not found"})
                axios.get(`https://api.github.com/users/${user.github}/repos`)
                .then(response => {
                    console.log(response)
                    return res.status(200).send({
                        username: user.username,
                        id: user.id,
                        repos: response.data
                    })
                }) 
                .catch(err => {
                    res.status(400).send({err: "Fetch from gethub error: " + err})
                })
            })
            .catch(err => {
                res.status(404).send({err: err || 'user not found'})
            });
        } else {
            res.status(400).send({ err: "No id param. "});
        }
    },

    linkedin(req, res) {
        Linkedin.people.url('', (err, out) => {
            console.log(out)
        })
    }
}