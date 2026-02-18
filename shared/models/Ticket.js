import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema({
  userId: String,
  channelId: String,
  status: { type: String, default: "open" },
  priority: { type: String, default: "low" },
  category: String,
  slaDue: Date,
  escalated: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Ticket", TicketSchema);
