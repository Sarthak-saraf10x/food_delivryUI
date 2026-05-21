import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * ProtectedRoute – wraps any route that requires authentication.
 *
 * Props:
 *  - allowedRoles: string[]   Roles that may access the route.
 *  - redirectTo: string       Where to send unauthenticated users (default: /admin/login).
 *  - children: ReactNode
 */
const ProtectedRoute = ({
  children,
  allowedRoles = [],
  redirectTo = '/admin/login',
}) => {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  // Not logged in → send to login, preserving the intended URL
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  // Logged in but wrong role → send to a generic unauthorized page
  if (allowedRoles.length > 0 && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
