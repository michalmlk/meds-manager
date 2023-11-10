import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
export const ProtectedRoute: React.FC = (): JSX.Element => {
    const { userData } = useAuth();
    console.log(userData);

    if (!userData) return <Navigate to="/" replace />;
    return <Outlet />;
};
