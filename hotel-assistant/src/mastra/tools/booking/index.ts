import { createTool } from "@mastra/core/tools";
import { z } from "zod";
import fetchBookings from "./services/fetch";

const getBookings=createTool({
    id:`get-bookings`,
    description:`Get bookings for a specific user using their account id`,
    inputSchema: z.object({
        accountId: z.string().describe("User's account identifier"),
    }),
    outputSchema: z.object({
        accountId: z.string(),
        bookings: z.array(
        z.object({
            bookingId: z.number(),
            location: z.string(),
            buildingName: z.string(),
            buildingId: z.number(),
            startDate: z.date(),
            endDate: z.date(),
            })
        )
    }),
    execute:async({context})=>{
        return fetchBookings(context.accountId)
    }
});

export default getBookings;