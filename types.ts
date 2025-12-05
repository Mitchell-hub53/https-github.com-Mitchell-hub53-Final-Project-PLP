export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}