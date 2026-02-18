import mongoose from "mongoose";

const ReactionRoleSchema = new mongoose.Schema({
  guildId: String,
  messageId: String,
  emoji: String,
  roleId: String
});

export default mongoose.model("ReactionRole", ReactionRoleSchema);
