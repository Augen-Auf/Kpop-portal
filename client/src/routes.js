import {ADMIN_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, PORTAL_ROUTE, NEWS_ROUTE} from "./utils/consts";
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import Portal from "./pages/Portal";
import News from "./pages/News";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: PROFILE_ROUTE,
        Component: Profile
    },
];

export const publicRoutes = [

    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: PORTAL_ROUTE,
        Component: Portal
    },
    {
        path: NEWS_ROUTE + '/:id',
        Component: News
    },
];