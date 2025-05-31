# Hotel Assistance AI Agent using Mastra AI TypeScript Framework

## Description
This project showcases an AI-powered assistant designed to provide hotel guests with essential information about their stay at Opportunity Hotel. The agent is built using the Mastra AI TypeScript framework and is tailored for accurate and efficient responses. It does not generate recommendations or make up information but rather retrieves verified details using the integrated getBookings tool.

## Built With
* **[Mastra AI](https://mastra.ai/).:** A TypeScript framework for building AI agents and applications.
* **TypeScript:** A strongly typed superset of JavaScript.
* **Google Gemini:** A state-of-the-art large language model from Google, used for the AI agent's reasoning and natural language understanding.

## Core Feature
- Retrieves guest booking details using their account ID.
- Ensures accurate and relevant responses strictly related to the hotel stay.
- Supports only English for interactions.

## How It Works
- The AI agent first confirms which booking the guest needs assistance with, listing all upcoming bookings concisely in a single line.
- Once the guest selects a booking, the AI retrieves detailed booking information such as check-in dates, building name, and location.
- Responses are strictly related to hotel services, ensuring efficient interactions without irrelevant recommendations.

## Implementation Notes
- Tool Integration: The getBookings tool is used for fetching guest reservations.
- Data Storage: Uses LibSQLStore for in-memory storage, ensuring fast access to booking information while avoiding persistent data storage.
- Bookings are presented concisely on one line, ordered chronologically from the nearest to the farthest in time.
- How to Generate a Gemini API Key from Google AI Studio:

    Google AI Studio provides a user-friendly interface to generate API keys for the Gemini models. Follow these steps:

    1.  **Open Google AI Studio:** Go to [https://aistudio.google.com/](https://aistudio.google.com/) in your web browser.
    2.  **Sign In:** Sign in with your Google account. If it's your first time, you might need to agree to the terms of service.
    3.  **Navigate to Get API Key:** In the Google AI Studio interface, look for the "Get API key" button, usually located in the top-left corner. Click on it.
    4.  **Create API Key:** A dialog will appear. Click on the "Create API key" button. You might be prompted to create an API key in a new project or select an existing one. Choose your preferred option.
    5.  **Copy Your API Key:** Once the API key is generated, a pop-up will display your key. **Click the "Copy" button to copy the API key to your clipboard.**
    6.  **Secure Your API Key:** **This is crucial!** Treat your API key like a password. Do not share it publicly, do not commit it directly to your code repository, and store it securely.
    7.  **Paste into `.env`:** Paste the copied API key into your `.env` file for the `GOOGLE_GENERATIVE_AI_API_KEY` variable.
