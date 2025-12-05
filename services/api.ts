/**
 * Backend Configuration
 * 
 * We are using a native HTML form submission in Contact.tsx to avoid CORS/NetworkErrors.
 * We use the email address directly to ensure a fresh activation email is sent if the token was invalid.
 */

// Your email address (using this instead of the token to reset the connection)
export const FORMSUBMIT_EMAIL = "agrigrowenterprise@gmail.com";

// The full endpoint URL
export const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/${FORMSUBMIT_EMAIL}`;
