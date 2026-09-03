import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { auth } from '../middleware/auth.js';

export async function register(req, res, next) {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            success: true,
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
            message: "User registered successfully",
        });

    } catch (error) {
        next(error);
    }
}

export async function login(req, res, next) {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const token = jwt.sign(
            {
                id: user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN  || "1d"
            }
        );

        res.json({
            success: true,
            data: {
                token,
                user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                },
            },
            message: "Login successful",
        });

    } catch (error) {
        next(error);
    }
}

export async function authenticate(req, res, next) {
    try {
        
    } catch (error) {
        
    }
}
