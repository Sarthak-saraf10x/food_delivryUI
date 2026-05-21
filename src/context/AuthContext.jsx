import { createContext, useContext, useState, useCallback } from 'react';

const AuthContext = createContext(null);

/**
 * Reads initial state from localStorage so the session survives a page refresh.
 */
const getStoredAuth = () => {
  try {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    if (token && user) return { token, user };
  } catch (_) {}
  return { token: null, user: null };
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(getStoredAuth);

  /** Call after a successful login / register API response. */
  const login = useCallback((token, user, restaurantId = null) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    if (restaurantId) {
      localStorage.setItem('restaurantId', restaurantId);
    }
    setAuth({ token, user });
  }, []);

  /** Clears all stored session data. */
  const logout = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('restaurantId');
    setAuth({ token: null, user: null });
  }, []);

  const value = {
    token: auth.token,
    user: auth.user,
    isAuthenticated: !!auth.token,
    restaurantId: localStorage.getItem('restaurantId'),
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

/** Convenience hook */
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
  return ctx;
};
