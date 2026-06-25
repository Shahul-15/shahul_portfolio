# Deployment & Client Preview Guide

Here are three simple, free methods to show this website to your client.

---

## Option 1: Instant Local Tunneling (No Signup Required)
If you are running the project locally and want to show your client the site **immediately** without uploading files:

1. Start your local server:
   ```bash
   npm run dev
   ```
   *(Ensure it runs on port `5173`)*

2. Open a **new, separate terminal** in the project folder and run:
   ```bash
   npx localtunnel --port 5173
   ```

3. The terminal will output a link (e.g., `https://glowing-words-fall.localtunnel.me`).
4. **Share this link** with your client. They will see your exact local server.
   *Note: The link only works while your local terminal remains open.*

---

## Option 2: Deploy to Vercel (Highly Recommended & Permanent)
Vercel is free, fast, and builds the project directly in the cloud. It provides a permanent, professional preview link.

1. Open your terminal in the project folder and run:
   ```bash
   npx vercel
   ```

2. Follow the 1-minute command line prompts:
   - **Log in**: Choose GitHub, Google, or Email.
   - **Set up and deploy**: Press `Y` (Yes).
   - **Which scope?**: Press `Enter` (select default).
   - **Link to existing project?**: Press `N` (No).
   - **Project Name**: Press `Enter` (select `thabre-portfolio` or choose your own).
   - **In which directory?**: Press `Enter` (select current `./`).
   - **Modify settings?**: Press `N` (No).

3. Vercel will automatically compile the project and generate a public URL (e.g., `thabre-portfolio.vercel.app`).
4. **Share this URL** with your client. It will stay online permanently for free!

---

## Option 3: Deploy to Surge (Instant Static Upload)
Surge is a simple terminal tool to deploy compiled static folders.

1. Build the production files locally first:
   ```bash
   npm run build
   ```
   *(This creates a `dist` folder in your project)*

2. Deploy the `dist` folder:
   ```bash
   npx surge dist
   ```

3. Follow the prompt:
   - Enter your email and choose a password to create a free account.
   - Surge will propose a random domain name (e.g., `brief-shake.surge.sh`).
   - Press `Enter` to deploy, or rename it (e.g., `thabre-analytics.surge.sh`).

4. Your website is now live at that `.surge.sh` domain!
