import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [3, "Name must be at least 3 characters"],
      maxlength: [32, "Name must be at most 32 characters"],
      match: [
        /^[a-zA-Z0-9_]+$/,
        "Name can only contain letters, numbers, and underscores",
      ],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
      trim: true,
      minlength: [5, "Address must be at least 5 characters"],
      maxlength: [100, "Address must be at most 100 characters"],
      match: [
        /^[a-zA-Z0-9\s,.-]+$/,
        "Address can only contain letters, numbers, spaces, commas, dots, and hyphens",
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
