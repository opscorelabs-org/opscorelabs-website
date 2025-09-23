# Google Forms Setup Guide (FREE Email Solution)

This guide will help you set up a completely FREE contact form using Google Forms. No paid services required!

## 🚀 Step 1: Create a Google Form

1. **Go to Google Forms**
   - Visit [forms.google.com](https://forms.google.com)
   - Sign in with your Google account

2. **Create a New Form**
   - Click "Blank" to create a new form
   - Title it "OpsCore Labs Contact Form"

3. **Add Form Fields**
   Add these fields in order:
   
   **Field 1: Name**
   - Type: Short answer
   - Question: "Name *"
   - Required: Yes
   
   **Field 2: Email**
   - Type: Short answer
   - Question: "Email *"
   - Required: Yes
   - Validation: Email
   
   **Field 3: Company**
   - Type: Short answer
   - Question: "Company (Optional)"
   - Required: No
   
   **Field 4: Message**
   - Type: Paragraph
   - Question: "Message *"
   - Required: Yes

## 🔧 Step 2: Get Form Configuration

1. **Get Form URL**
   - Click "Send" button in top right
   - Click the link icon (🔗)
   - Copy the form URL
   - It should look like: `https://docs.google.com/forms/d/e/1ABC123.../viewform`

2. **Get Form Response URL**
   - Replace `/viewform` with `/formResponse`
   - Your response URL: `https://docs.google.com/forms/d/e/1ABC123.../formResponse`

3. **Get Field IDs** (Important!)
   - Open your form in a new tab
   - Right-click on the first field (Name) and "Inspect Element"
   - Look for `name="entry.1234567890"` (numbers will be different)
   - Note down the entry IDs for each field:
     - Name field: `entry.XXXXXXXXXX`
     - Email field: `entry.YYYYYYYYYY`
     - Company field: `entry.ZZZZZZZZZZ`
     - Message field: `entry.AAAAAAAAAA`

## ⚙️ Step 3: Configure Your Website

1. **Create Environment File**
   ```bash
   cp env.example .env.local
   ```

2. **Update .env.local**
   ```env
   # Replace with your actual form details
   VITE_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse
   VITE_GOOGLE_FORM_ID=YOUR_FORM_ID
   ```

3. **Update Field IDs in Code**
   Edit `src/services/emailService.ts` and replace the field IDs:
   ```typescript
   // Replace these with your actual field IDs
   formData.append('entry.1234567890', data.name); // Your name field ID
   formData.append('entry.0987654321', data.email); // Your email field ID
   formData.append('entry.1122334455', data.company || ''); // Your company field ID
   formData.append('entry.5566778899', data.message); // Your message field ID
   ```

## 📧 Step 4: Set Up Email Notifications

1. **Enable Email Notifications**
   - In your Google Form, click the "Responses" tab
   - Click the three dots (⋮) next to "Responses"
   - Select "Get email notifications for new responses"
   - Enter your email address

2. **Set Up Response Collection**
   - In the "Responses" tab, click "Create Spreadsheet"
   - This will create a Google Sheet to store all form submissions
   - You can also export responses as CSV

## 🎯 Step 5: Test Your Form

1. **Test the Form**
   - Fill out your contact form on the website
   - Submit it
   - Check your email for the notification
   - Check the Google Sheet for the response

2. **Troubleshooting**
   - If form doesn't submit directly, it will open Google Form in a new tab
   - Make sure field IDs match exactly
   - Check browser console for any errors

## 🔒 Step 6: Privacy and Security

1. **Form Settings**
   - In your Google Form, click the Settings gear
   - Enable "Collect email addresses" if you want to track who submitted
   - Set "Limit to 1 response" if needed

2. **Response Privacy**
   - Responses are stored in your Google account
   - Only you can see the responses
   - You can share access with team members if needed

## 📱 Step 7: Mobile Optimization

Your Google Form will automatically be mobile-friendly when opened in a new tab. The form will work perfectly on all devices.

## 🎉 Benefits of Google Forms

- ✅ **Completely FREE** - No monthly fees or limits
- ✅ **Reliable** - Google's infrastructure
- ✅ **Easy Setup** - No complex configuration
- ✅ **Email Notifications** - Get notified of new submissions
- ✅ **Data Storage** - All responses saved in Google Sheets
- ✅ **Mobile Friendly** - Works on all devices
- ✅ **No Spam** - Google handles spam protection
- ✅ **Unlimited Submissions** - No limits on form submissions

## 🆘 Need Help?

If you run into any issues:

1. **Check Field IDs** - Make sure they match exactly
2. **Test Form URL** - Verify the form URL is correct
3. **Check Console** - Look for errors in browser developer tools
4. **Contact Support** - Email contact@opscorelabs.com

---

**That's it!** Your contact form is now set up with Google Forms - completely free and reliable! 🚀
