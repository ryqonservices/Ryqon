# Setting Up Email Contact Form

This project uses **EmailJS** to send emails directly from the contact form without needing a backend server.

## 1. Create an EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/) and create a free account.

## 2. Create a Service
1. In your EmailJS dashboard, go to the **Email Services** tab.
2. Click **Add New Service**.
3. Select your email provider (e.g., Gmail, Outlook).
4. Connect your account and click **Create Service**.
5. Copy the **Service ID** (e.g., `service_xxxxxxx`).

## 3. Create an Email Template
1. In the dashboard, go to the **Email Templates** tab.
2. Click **Create New Template**.
3. In the template editor, you can design how the email will look. Use the following dynamic variables to capture form data:
   - `{{user_name}}` - The user's first name
   - `{{user_lastname}}` - The user's last name
   - `{{user_email}}` - The user's email address
   - `{{message}}` - The user's message

   **Example Subject:** `New Contact from {{user_name}}`
   **Example Content:**
   ```
   Name: {{user_name}} {{user_lastname}}
   Email: {{user_email}}
   
   Message:
   {{message}}
   ```
4. Save the template.
5. Copy the **Template ID** (e.g., `template_xxxxxxx`).

## 4. Get Your Public Key
1. Go to the **Account** page (click your avatar in the top right).
2. Copy your **Public Key** (e.g., `user_xxxxxxx`).

## 5. Configure the Project
1. Open the `.env` file in the root of your project.
2. Fill in the values you copied:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```
   **Note:** Do not share your `.env` file publicly if you push this code to GitHub.

## 6. Restart the Server
If your development server is running, restart it for the environment variables to take effect:
```bash
npm run dev
```

Your contact form is now fully functional!
