const { request, response } = require("express");
const login = async (request, response, next) => {
    response.status(200).json({
        success: {message: "User logged in successfully"},
        statusCode: 200,
    });
};

const localLogin = async (request, response, next) => {
    const result = true;

    function mockPassport (error, user) {
        if (error) {
            return next(error);
        }
    }
    mockPassport();
    return response.json({
        success: {message: "Login Successful"},
        result: {result},
    })
};

const logout = async (request, response, next) => {
    console.log("Initializing logout controller logic...");
    console.log("session destroyed");
    response.clearCookie("connect.sid");
    

    return response.status(200).json({
        success: {message:"User logged out"},
        statusCode: 200,
        });
    function sessionDestruction (error) {
    //error handling as a final check and a failsafe
    if (error) {
      return next(error);
    }
  sessionDestruction();
  console.log("Logout function activated");
  }
};

const register = async (request, response, next) => {
    const { firstName, lastName, userName, password } = request.body;
    console.log(firstName, lastName, userName, password);

    try {
        const newUser = {
            firstName,
            lastName,
            userName, 
            password,
        };
        console.log("In motion");
        response.status(201).json({
            success: {message: "New user created."},
            data: {newUser},
            statusCode: 201
        })
    } catch (error) {
        response.status(500).json({
            error: { message: "Internal Server error!"},
            statusCode: 500
        })
    }
};


module.exports = { register, login, logout, localLogin };