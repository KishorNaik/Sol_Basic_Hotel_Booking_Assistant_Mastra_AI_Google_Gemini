import { google } from "@ai-sdk/google";
import { Agent } from "@mastra/core";
import { Memory } from "@mastra/memory";
import { assistancePrompt } from "./services/prompts";
import { LibSQLStore } from "@mastra/libsql";
import getBookings from "../../tools/booking";

// Memory
const memory = new Memory({
  storage: new LibSQLStore({
    url: "file:../mastra.db", // Or your database URL
  }),
});

// Agent
const hotelAssistant=new Agent({
    name:`Hotel Assistance`,
    instructions:assistancePrompt,
    model: google("gemini-2.0-flash"),
    tools:{getBookings},
    memory:memory
});

export default hotelAssistant;