import mongoose from "mongoose";

const VerificationSchema = new mongoose.Schema({
  guildId: String,
  verifiedRoleId: String,
  verificationChannelId: String,
  enabled: { type: Boolean, default: false }
});

export default mongoose.model("Verification", VerificationSchema);
