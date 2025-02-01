interface ValidationResult {
  success: boolean;
  error?: string;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export function validateContactForm(data: ContactFormData): ValidationResult {
  const { name, email, message } = data;

  // Check if all required fields are present
  if (!name || !email || !message) {
    return {
      success: false,
      error: "All fields are required",
    };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      error: "Please enter a valid email address",
    };
  }

  // Validate name length
  if (name.length < 2) {
    return {
      success: false,
      error: "Name must be at least 2 characters long",
    };
  }

  // Validate message length
  if (message.length < 10) {
    return {
      success: false,
      error: "Message must be at least 10 characters long",
    };
  }

  return { success: true };
}
