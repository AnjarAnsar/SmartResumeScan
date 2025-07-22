import axios from 'axios';
export const baseURL = 'http://localhost:8080';
 // Adjust the base URL as needed


export const axiosInstance = axios.create({
  baseURL: baseURL,
});


export const generateResume = async (description) => {
  try {
    const response = await axiosInstance.post('/api/v1/resume/generate', {userDescription: description});
    return response.data;
  } catch (error) {
    console.error('Error generating resume:', error);
  }
  
} 