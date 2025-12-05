import { ContactFormData, ApiResponse } from '../types';
import { CONTACT_INFO } from '../constants';

/**
 * Sends contact form data to the backend.
 * 
 * STATUS: CONNECTED TO LIVE BACKEND (FormSubmit.co)
 * 
 * This service uses FormSubmit.co to forward form submissions directly to the 
 * email address defined in CONTACT_INFO (agrigrowenterprise@gmail.com).
 * 
 * NOTE: The first time you submit a form from a new domain (or localhost),
 * you must check your email inbox to 'Activate' the form endpoint.
 */
export const submitContactForm = async (data: ContactFormData): Promise<ApiResponse> => {
  console.log("Sending data to backend...", data);

  const endpoint = `https://formsubmit.co/ajax/${CONTACT_INFO.email}`;

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
        _captcha: 'false'   // Optional: removes captcha for smoother UX (enable if spam occurs)
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