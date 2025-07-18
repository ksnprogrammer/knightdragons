
# KingDragons (KD) - The Royal Deployment Decree

Welcome, my liege, to the source code of your digital kingdom. This document contains the sacred instructions to summon, run, and deploy your application, making it accessible to your entire realm.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fksnprogrammer%2FKD&env=NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY,GOOGLE_API_KEY,NEXT_PUBLIC_WHATSAPP_CHANNEL_URL&envDescription=Your%20Supabase%20and%20Google%20AI%20credentials%20are%20needed%20for%20the%20app%20to%20function.%20The%20WhatsApp%20URL%20is%20optional.&project-name=kingdragons&repository-name=kingdragons-clone)

---

## Part 0: Preparing the Supabase Kingdom

Before you can deploy or run the code, you must first prepare your Supabase project to act as the kingdom's database and file storage.

### 0.1: Get Your Credentials
You will need three keys to run the application:
- `NEXT_PUBLIC_SUPABASE_URL` (From your Supabase Project's API Settings)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` (From your Supabase Project's API Settings)
- `GOOGLE_API_KEY` (From [Google AI Studio](https://aistudio.google.com/app/apikey))
- `NEXT_PUBLIC_WHATSAPP_CHANNEL_URL` (Optional: The full URL to your WhatsApp channel)

Keep these safe and ready for the deployment step.

### 0.2: Set Up the Database Schema
You need to create the tables your application will use.
1. Go to your Supabase Project dashboard.
2. In the left navigation, click on the **SQL Editor** icon.
3. Click **"+ New query"**.
4. Open the `setup.sql` file in this repository, copy its entire contents, and paste it into the Supabase SQL editor.
5. Click the **"RUN"** button. This will set up all your tables, functions, and security policies.

### 0.3: Create Storage Bucket for Receipts
The application needs a place to store uploaded payment receipts.
1. Go to your Supabase Project dashboard.
2. In the left navigation, click the **Storage** icon.
3. Click the **"+ New bucket"** button.
4. Name the bucket `receipts`.
5. Toggle the **"Public bucket"** switch to **ON**.
6. Click **"Create bucket"**.

With the kingdom's foundations prepared, you may now proceed.

---

## Part 1: Deploying to the World with Vercel (Easy Mode)

To make your kingdom accessible to knights across the globe, we will use Vercel.

**1. Click the Deploy Button:**
Click the button at the top of this document or right here:
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fksnprogrammer%2FKD&env=NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY,GOOGLE_API_KEY,NEXT_PUBLIC_WHATSAPP_CHANNEL_URL&envDescription=Your%20Supabase%20and%20Google%20AI%20credentials%20are%20needed%20for%20the%20app%20to%20function.%20The%20WhatsApp%20URL%20is%20optional.&project-name=kingdragons&repository-name=kingdragons-clone)

**2. Follow the Vercel Wizard:**
1.  Vercel will ask you to connect your GitHub account. This will create a copy (a clone) of the kingdom's repository for you.
2.  Next, it will ask you to fill in the Environment Variables. Paste the keys you gathered in "Part 0.1".
3.  Click **"Deploy"**. Vercel will build your application and provide you with a public URL (e.g., `kingdragons.vercel.app`).

**Automatic Deployments:**
From now on, every time you `git push` a change to your `main` branch on GitHub, Vercel will automatically redeploy your kingdom with the latest updates.

---

## Part 2: Local Development Setup (For Wizards)

If you wish to modify the kingdom's source code, you'll need a local setup.

### Prerequisites
1.  **Node.js**: The magical energy that powers the kingdom. Download and install it from [nodejs.org](https://nodejs.org/).
2.  **Git**: The Royal Scribe's tool for tracking and managing code. Download and install it from [git-scm.com](https://git-scm.com/).
3.  **A Code Editor**: A tool like [Visual Studio Code](https://code.visualstudio.com/) is highly recommended.

### Summoning a Local Copy
1.  **Set Your Environment Variables:** In the root directory of your project, create a new file named `.env` and add your credentials.
    ```
    # Supabase credentials from your project's dashboard
    NEXT_PUBLIC_SUPABASE_URL="YOUR_SUPABASE_URL"
    NEXT_PUBLIC_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"

    # Google AI credential for Genkit AI features
    GOOGLE_API_KEY="YOUR_GOOGLE_API_KEY"

    # (Optional) Full URL to your WhatsApp channel for the "Join" buttons
    NEXT_PUBLIC_WHATSAPP_CHANNEL_URL="YOUR_WHATSAPP_CHANNEL_URL"
    ```
2.  **Install All Dependencies:** Open a terminal in the project directory and run:
    ```bash
    npm install
    ```
3.  **Run the Kingdom:** This command starts your local development server.
    ```bash
    npm run dev
    ```
Once you see a "ready" message, you can access your local kingdom at: **[http://localhost:9002](http://localhost:9002)**

---

## Part 3: Managing Your Kingdom

### Granting Admin Privileges
To access the King's Court at `/admin`, a user must have the `admin` role.
1. Go to your Supabase project dashboard.
2. Navigate to the **Authentication** section.
3. Find the user you wish to promote and click on them.
4. Under the **User Management** section, find the **User Metadata** editor.
5. Add or edit the `role` field to be `"admin"`. It should look like this:
   ```json
   {
     "name": "The King",
     "exam_level": "A/L",
     "role": "admin"
   }
   ```
6. Save the changes. The user will now have access to the King's Court.

---
The kingdom is ready. Your reign may now begin.
