import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App.tsx';
import './index.css';
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import { AuthProvider } from './providers/AuthProvider.tsx';
import LocationView from './routes/LocationView/LocationView.tsx';
import { ProtectedRoute } from './helpers/ProtectedRoute.tsx';
import Login from './routes/Login/Login.tsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route element={<ProtectedRoute />}>
                <Route path="/meds" element={<LocationView />} />
            </Route>
            <Route path="/login" element={<Login />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AuthProvider>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                theme="light"
            />
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
