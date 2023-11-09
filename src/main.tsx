import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { AuthProvider } from './providers/AuthProvider.tsx';
import LocationView from './routes/LocationView/LocationView.tsx';
import { ProtectedRoute } from './helpers/ProtectedRoute.tsx';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="meds" element={<ProtectedRoute />}>
                <Route index element={<LocationView />} />
            </Route>
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
