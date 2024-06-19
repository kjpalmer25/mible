//schema for user data with MongoDB
import mongoose, { Schema, models } from "mongoose";

const entrySchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Entry = models.Entry || mongoose.model("Entry", entrySchema);
export default Entry;
