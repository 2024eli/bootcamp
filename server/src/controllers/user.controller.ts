import express from 'express';
import crypto from 'crypto';
import {
    getAllUsersFromDB,
    createUserInDB,
    getUserById,
    deleteUserById,
  } from '../services/user.service';
import ApiError from '../util/apiError';
import StatusCode from '../util/statusCode';
import { IUser, User } from '../models/user.model';


// get all user information
const getAllUsers = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    return (
      getAllUsersFromDB()
        .then((userList) => {
          res.status(StatusCode.OK).send(userList);
        })
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .catch((e) => {
          next(ApiError.internal('Unable to retrieve all users'));
        })
    );
  };

// create a user
const createUser = async(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
    ) => {
        const {name, url, traits, year, hometown, major} = req.body;
        console.log(req.body);
        console.log(name, url, traits, year, hometown, major);
        return (
            createUserInDB(name, url, traits, year, hometown, major)
                .then((user) =>{
                    res.status(StatusCode.OK).send(user);
                })
                .catch((e) => {
                    console.log(e);
                    next(ApiError.internal('Unable to create user'));
                })
        );
    };
// edit
const editUser = async(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
    ) => {
        try {
        const userId = req.params.id; // Get user ID from route params
        const updateData = req.body;  // Extract fields to update from request body
    
        // Find the user by ID and update it with new data
        const updatedUser = await User.findByIdAndUpdate(
          userId,
          { $set: updateData }, // Set the new values
          { new: true, runValidators: true } // Return updated user, validate updates
        );
    
        if (!updatedUser) {
          // If the user doesn't exist, respond with a 404 error
          return res.status(StatusCode.NOT_FOUND).send({ error: 'User not found' });
        }
        
        // Return the updated user
        return res.status(StatusCode.OK).send(updatedUser);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        // Pass the error to the error handling middleware
        return next(ApiError.internal(`Unable to update user: ${errorMessage}`));
      }
}
// remove
const deleteUser = async(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
    ) => {
        try {
        const userId = req.params.id; // Get user ID from route params
        const user = getUserById(userId)
    
        if (!user) {
          // If the user doesn't exist, respond with a 404 error
          return res.status(StatusCode.NOT_FOUND).send({ error: 'User not found' });
        }
        // delete user
        return (
            deleteUserById(userId)
                .then((user) =>{
                    res.status(StatusCode.OK).send(user);
                })
                .catch((e) => {
                    next(ApiError.internal('Unable to create user'));
                })
        );
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        // Pass the error to the error handling middleware
        return next(ApiError.internal(`Unable to delete user: ${errorMessage}`));
      }
}

export {getAllUsers, createUser, editUser, deleteUser}