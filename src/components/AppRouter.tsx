import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Profile from '../pages/Profile';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route index element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </>
    )
}

export default AppRouter;