import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
export const ProtectedRoute: React.FC = (): JSX.Element => {
    const { userData } = useAuth();

    if (userData === null) {
        return <Navigate to="/login" />;
    }
    return <Outlet />;
};
