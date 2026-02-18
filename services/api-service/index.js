import express from "express";
import dotenv from "dotenv";
import { connectDB } from "../../shared/config/database.js";
import Ticket from "../../shared/models/Ticket.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.get("/analytics/dashboard", async (req, res) => {
  const total = await Ticket.countDocuments();
  const open = await Ticket.countDocuments({ status: "open" });
  const closed = await Ticket.countDocuments({ status: "closed" });

  res.json({ total, open, closed });
});

app.listen(4000, () => console.log("API running"));
