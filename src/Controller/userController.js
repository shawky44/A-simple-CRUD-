import User from "../Model/userModel.js"; // make sure you export default User from the model file
import { validationResult, checkSchema } from "express-validator";
import { createuservalidationschema } from "../Utils/validationschema.js";

export const createUser = async (req, res) => {
  // checkSchema(createuservalidationschema);
  try {
    // validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email } = req.body;

    // check if user already exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // create and save new user
    const userData = new User(req.body);
    const savedUser = await userData.save();

    return res.status(201).json(savedUser); // 201 is more appropriate for "created"
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ message: "Email already exists" });
    }
    return res
      .status(500)
      .json({ message: err.message || "Internal Server Error" });
  }
};

export const fetch = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
    if (users.length === 0) {
      res.status(404).json({ message: "user not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const userExist = await User.findOne({ _id: id });
    if (!userExist) return res.status(404).json({ message: "user not found" });
    const updateUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "User updated successfully",
      user: updateUser,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userExist = await User.findOne({ _id: id });
    if (!userExist) return res.status(404).json({ message: "user not found" });
    await User.findByIdAndDelete(id);

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// const { id } = req.params;

// // ✅ تحقق إن الـ id صحيح (ObjectId)
// if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
//   return res.status(400).json({ message: "Invalid user ID" });
// }

// // ✅ ابحث عن اليوزر
// const userExist = await User.findById(id);
// if (!userExist) {
//   return res.status(404).json({ message: "User not found" });
// }

// // ✅ احذف اليوزر
// await User.findByIdAndDelete(id);

// return res.status(200).json({ message: "User deleted successfully" });
