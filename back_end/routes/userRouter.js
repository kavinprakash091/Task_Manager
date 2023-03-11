import express from "express";
import User from "../models/userModel.js";
import expressAsyncHandler from "express-async-handler";
import { generateToken, isAuth } from "../utils.js";
import bcrypt from "bcryptjs";

const userRouter = express.Router();

userRouter.get(
    "/",
    expressAsyncHandler(async(req, res) => {
        const user = await User.find({});
        if (user) {
            res.send(user);
            return;
        }
        res.status(404).send({ message: "User not found!" });
    })
);

userRouter.post(
    "/signin",
    expressAsyncHandler(async(req, res) => {
        const user = await User.findOne({ email: req.body.email }).select(
            "+password"
        );
        if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                res.send({
                    _id: user._id,
                    company_id: user.company_id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    role: user.role,
                    token: generateToken(user),
                });
                return;
            } else {
                res.status(400).send({ message: "Wrong Password!" });
            }
        } else {
            res.status(400).send({ message: "No user found!" });
        }
    })
);

userRouter.put(
    "/signup",
    isAuth,
    expressAsyncHandler(async(req, res) => {
        const user = new User({
            company_id: req.body.companyId,
            first_name: req.body.firstname,
            last_name: req.body.lastname,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),
            role: req.body.role,
        });
        await user.save();
        res.send({ message: "Success" });
        return;
    })
);

userRouter.get(
    "/:id",
    isAuth,
    expressAsyncHandler(async(req, res) => {
        const user = await User.findById({ _id: req.params.id });
        if (user) {
            res.send(user);
            return;
        }
        res.status(404).send({ message: "User not found" });
    })
);

userRouter.post(
    "/remove/:id",
    expressAsyncHandler(async(req, res) => {
        const user = await User.findById({ _id: req.params.id });
        if (user) {
            const users = await User.remove({ _id: req.params.id });
            if (users) {
                res.send({ email: user.email });
                return;
            }
        }
        res.status(404).send({ message: "User not found!" });
    })
);

userRouter.put(
    "/update/:id",
    isAuth,
    expressAsyncHandler(async(req, res) => {
        const user = await User.findById({ _id: req.params.id });
        if (user) {
            user.company_id = req.body.companyId || user.company_id;
            user.first_name = req.body.firstname || user.first_name;
            user.last_name = req.body.lastname || user.last_name;
            user.role = req.body.role || user.role;
            user.email = req.body.email || user.email;
            if (req.body.password) {
                user.password = bcrypt.hashSync(req.body.password, 8);
            }
            const updateUser = await user.save();
            if (updateUser) {
                res.send({ message: "Updated successfully" });
                return;
            }
        }
        res.status(404).send({ message: "User not found" });
    })
);

export default userRouter;