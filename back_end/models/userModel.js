import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    company_id: { type: String, unique: true, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true, select: false },
    isAdmin: { type: String, default: false, required: true },
    role: { type: String, required: true },
}, {
    timestamps: true,
});

const User = mongoose.model("User", userSchema);
export default User;