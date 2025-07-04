const { request, response } = require("express");
const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");


const register = async (request, response, next) => {
    const {firstName, lastName, usenName, password, googleId, githubId} = request.body;
    console.log(request.body);
    if (!firstName || !username || !password) {
        return response.status(400).json({
            error: {message: "Missing required fields."},
            statusCode: 400,
        })
    }
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User ({
                firstName: firstName,
                lastName: lastName,
                username: username,
                password: hashedPassword,
                googleId: "",
            });
        
            await newUser.save();

            request.login(newUser, (error) => {
                if (error) {
                    return next(error);
                }

                newUser.password = undefined;

                return response.status(201).json({
                    success: {message: "New user created."},
                    data: {newUser},
                    statusCode: 201
                });
            })
            
        } catch (error) {
            if (error.code === 11000 && error.keyPattern.username) {
                response.status(400).json({
                    error: {message: "Username already exist."},
                    statusCode: 400,
                });
            } else {
              response.status(500).json({
              error: {message: "Internal server error"},
              statusCode: 500
             });
            }
        };
    };


const login = async (request, response, next) => {
    try {
        return response.status(200).json({
        success: {message: "Login Successfil"},
        statusCode: 200,
    });
    } catch (error) {
        return response.status(400).json({
            error: {message: "There was a problem logging in."},
            statusCode: 400
        });
    };
};

const localLogin = async (request, response, next) => {

    passport.authenticate("local", (error, user, info) => {
        if (error) {
            return next (error)
        };
        if (!user) {
            return response.status(401).json({
                error: {message: "There is no user detected. Try again"},
            });
        }
        request.login(user, (error) => {
            if (error) {
                return next(error)
            }
        const userCopy = {...request.user._doc};
        userCopy.password = undefined;
        console.log(userCopy)
        response.status(200).json({
            success: {message: "Local Login Complete"},
            data: {user: userCopy},
            statusCode: 200,
        });
       }) 
    })
};

const logout = async (request, response, next) => {
    request.logout((error) => {
        if (error) {
            return next(error);
        };
        request.session.destroy((error) => {
            if (error) {
                return next(error);
            }
        })
        response.clearCookie("connect.sid");
        return response.status(200).json({
            success: {message: "User logged out!"},
            statusCode: 200,
        })
    })
};



module.exports = { register, logout, localLogin, login };