import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

export const useAuth = () => {
    const auth = useContext(AuthContext);

    if (!auth) {
        throw new Error('useAuth needs to be in child of AuthProvider');
    }

    return auth;
};
