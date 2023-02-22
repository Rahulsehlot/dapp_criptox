import { Navigate } from "react-router-dom";

const AuthGuard = ({ user, children, redirectPath = "/login" }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default AuthGuard;
