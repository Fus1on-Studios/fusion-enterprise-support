import mongoose from "mongoose";

const GuildConfigSchema = new mongoose.Schema({
  guildId: { type: String, required: true, unique: true },
  welcomeChannelId: { type: String },
  welcomeMessage: { type: String, default: "Welcome {user} to {server}!" },
  welcomeEnabled: { type: Boolean, default: false },
  autoRoleId: { type: String }
});

export default mongoose.model("GuildConfig", GuildConfigSchema);
