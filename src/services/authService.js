export const authService = {
  login: async (email, password) => {
    // Mock implementation - replace with actual API calls
    return Promise.resolve({
      token: 'mock-token',
      user: { id: 1, email, name: 'Test User' }
    });
  },
  
  register: async (userData) => {
    return Promise.resolve({
      token: 'mock-token',
      user: { id: 1, ...userData }
    });
  },
  
  logout: async () => Promise.resolve(),
  
  getCurrentUser: async () => {
    return Promise.resolve({
      id: 1, 
      email: 'test@example.com', 
      name: 'Test User'
    });
  }
};