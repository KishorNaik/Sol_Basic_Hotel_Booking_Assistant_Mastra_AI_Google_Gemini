
import { Mastra } from '@mastra/core';
import { createLogger } from "@mastra/core/logger";
import hotelAssistant from './agents/hotel_assistance';

export const mastra = new Mastra({
    agents:{hotelAssistant},
    logger:createLogger({
        name: "Mastra",
        level: "info",
    }),
});
        
