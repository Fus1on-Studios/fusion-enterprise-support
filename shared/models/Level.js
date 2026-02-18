import mongoose from "mongoose";

const LevelSchema = new mongoose.Schema({
  guildId: String,
  userId: String,
  xp: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  lastMessage: { type: Date, default: Date.now }
});

export default mongoose.model("Level", LevelSchema);
