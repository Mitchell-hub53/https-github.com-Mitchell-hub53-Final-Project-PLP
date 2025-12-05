import { ContactFormData, ApiResponse } from '../types';

/**
 * Simulates sending data to a backend.
 * In a real application, you would replace the URL with your actual backend endpoint.
 * Example: const response = await fetch('https://api.agrigrow.com/contact', ...);
 */
export const submitContactForm = async (data: ContactFormData): Promise<ApiResponse> => {
  console.log("Submitting to backend...", data);

  // MOCKING BACKEND DELAY AND RESPONSE
  // To link to a real backend, replace this entire block with a fetch() call.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: "Message sent successfully! We will contact you soon."
      });
    }, 1500);
  });
  
  /* REAL BACKEND IMPLEMENTATION EXAMPLE:
  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    return { success: false, message: "Failed to send message." };
  }
  */
};