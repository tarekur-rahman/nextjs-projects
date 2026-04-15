# KeenKeeper - Relationship Management App

KeenKeeper is a modern web application designed to help users maintain and nurture meaningful connections with their friends and family. It tracks the time since your last contact and helps you stay on top of your social goals.

## Features

- Dynamic Friend Profiles: View detailed information for each connection via dynamic routing.
- Relationship Tracking: Monitor days since the last contact and set specific interaction goals.
- Quick Actions: Integrated buttons for initiating calls, texts, or video chats with instant feedback.
- Responsive Design: Fully optimized for mobile, tablet, and desktop views using Tailwind CSS.
- Toast Notifications: Real-time user feedback for every action performed within the app.

## Tech Stack

- Framework: Next.js (App Router)
- Styling: Tailwind CSS
- Icons: Lucide React
- Notifications: React Hot Toast
- Data Management: Client-side fetching with useEffect from local JSON

## Installation and Setup

Follow these steps to run the project locally:

1. Clone the repository:
   git clone https://github.com/tarekur-rahman/your-repo-name.git

2. Navigate to the project directory:
   cd your-repo-name

3. Install dependencies:
   npm install

4. Start the development server:
   npm run dev

Open http://localhost:3000 in your browser to see the application.

## Project Structure

- /app/friend/[id]/page.jsx: Main logic for dynamic friend detail cards.
- /public/friends.json: Data source for the application.
- /components/: Directory for reusable UI components.

## Deployment

The project is live at:
https://nextjs-project-tau-ochre.vercel.app/

## Contribution

If you would like to contribute to this project, please fork the repository and submit a pull request.

---
Developed by Tarekur Rahman