import { ContactFormData, ApiResponse } from '../types';

/**
 * Sends contact form data to the backend.
 * 
 * STATUS: CONNECTED TO LIVE BACKEND (FormSubmit.co)
 * 
 * This service uses FormSubmit.co to forward form submissions.
 * We are using a secure Token (from your email) instead of the raw email address.
 * This prevents spam and usually bypasses the need for manual activation links.
 */
export const submitContactForm = async (data: ContactFormData): Promise<ApiResponse> => {
  console.log("Sending data to backend...", data);

  // SECURE TOKEN from your activation email (510a4101e526ebf35a84b7448d02f737)
  // This maps to: agrigrowenterprise@gmail.com
  const FORMSUBMIT_TOKEN = "510a4101e526ebf35a84b7448d02f737";
  const endpoint = `https://formsubmit.co/ajax/${FORMSUBMIT_TOKEN}`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        message: data.message,
        _subject: `New Order/Inquiry from ${data.name} - Agrigrow Website`, // Custom email subject
        _template: 'table', // Formats the email nicely
        _captcha: 'false'   // Optional: removes captcha for smoother UX
      }),
    });

    const result = await response.json();

    if (response.ok) {
      return {
        success: true,
        message: "Message sent successfully! We will contact you soon."
      };
    } else {
      console.error("Backend error:", result);
      return {
        success: false,
        message: "Failed to send message. Please try again later."
      };
    }
  } catch (error) {
    console.error("Network error:", error);
    return {
      success: false,
      message: "Network error. Please check your internet connection."
    };
  }
};