import { connectDB } from "../../shared/config/database.js";
import Ticket from "../../shared/models/Ticket.js";

connectDB();

setInterval(async () => {
  const overdue = await Ticket.find({
    status: "open",
    slaDue: { $lt: new Date() }
  });

  for (const ticket of overdue) {
    ticket.priority = "critical";
    ticket.escalated = true;
    await ticket.save();
  }
}, 60000);
