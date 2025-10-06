import axios from 'axios';

// API base URL - Change this to your backend URL
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Unauthorized - clear token and redirect to login
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    
    if (error.response?.status === 403) {
      // Forbidden - show error message
      console.error('Access forbidden');
    }
    
    if (error.response?.status >= 500) {
      // Server error
      console.error('Server error:', error.response.data);
    }
    
    // Return formatted error
    const errorMessage = error.response?.data?.message || error.message || 'Something went wrong';
    return Promise.reject(new Error(errorMessage));
  }
);

// API endpoints
export const apiEndpoints = {
  // Auth endpoints
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    me: '/auth/me',
    forgotPassword: '/auth/forgot-password',
    resetPassword: '/auth/reset-password',
  },
  
  // User endpoints
  users: {
    profile: '/users/profile',
    updateProfile: '/users/profile',
    changePassword: '/users/change-password',
  },
  
  // Services endpoints
  services: {
    list: '/services',
    detail: (id) => `/services/${id}`,
    create: '/services',
    update: (id) => `/services/${id}`,
    delete: (id) => `/services/${id}`,
  },
  
  // Jobs/Careers endpoints
  jobs: {
    list: '/jobs',
    detail: (id) => `/jobs/${id}`,
    apply: (id) => `/jobs/${id}/apply`,
    applications: '/jobs/applications',
  },
  
  // Blog endpoints
  blog: {
    posts: '/blog/posts',
    post: (slug) => `/blog/posts/${slug}`,
    categories: '/blog/categories',
    tags: '/blog/tags',
    comments: (postId) => `/blog/posts/${postId}/comments`,
  },
  
  // Contact endpoints
  contact: {
    submit: '/contact/submit',
    inquiries: '/contact/inquiries',
  },
  
  // Dashboard endpoints
  dashboard: {
    stats: '/dashboard/stats',
    notifications: '/dashboard/notifications',
    activities: '/dashboard/activities',
  },
};

// Generic API methods
export const apiMethods = {
  // GET request
  get: async (endpoint, params = {}) => {
    try {
      return await api.get(endpoint, { params });
    } catch (error) {
      throw error;
    }
  },
  
  // POST request
  post: async (endpoint, data = {}) => {
    try {
      return await api.post(endpoint, data);
    } catch (error) {
      throw error;
    }
  },
  
  // PUT request
  put: async (endpoint, data = {}) => {
    try {
      return await api.put(endpoint, data);
    } catch (error) {
      throw error;
    }
  },
  
  // PATCH request
  patch: async (endpoint, data = {}) => {
    try {
      return await api.patch(endpoint, data);
    } catch (error) {
      throw error;
    }
  },
  
  // DELETE request
  delete: async (endpoint) => {
    try {
      return await api.delete(endpoint);
    } catch (error) {
      throw error;
    }
  },
  
  // Upload file
  upload: async (endpoint, formData) => {
    try {
      return await api.post(endpoint, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error) {
      throw error;
    }
  },
};

export default api;