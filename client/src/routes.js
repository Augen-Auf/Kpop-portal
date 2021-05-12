import {
    ADMIN_ROUTE,
    LOGIN_ROUTE,
    PROFILE_ROUTE,
    REGISTRATION_ROUTE,
    PORTAL_ROUTE,
    NEWS_ROUTE,
    VIKIS_ROUTE,
    CREATE_NEWS_ROUTE,
    STATISTICS_ROUTE, MUSIC_ROUTE, TRENDS_ROUTE, ARTICLES_ROUTE
} from "./utils/consts";

import Admin from "./pages/Admin";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import Portal from "./pages/Portal";
import News from "./pages/News";
import Vikis from "./pages/Vikis";
import CreateNews from './pages/CreateNews';
import Statistics from './pages/Statistics'
import Music from "./pages/Music";
import Trends from "./pages/Trends";
import Articles from "./pages/Articles";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: PROFILE_ROUTE,
        Component: Profile
    },
    {
        path: CREATE_NEWS_ROUTE,
        Component: CreateNews
    },
];

export const publicRoutes = [
    {
        path: VIKIS_ROUTE,
        Component: Vikis
    },
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
    {
        path: STATISTICS_ROUTE,
        Component: Statistics
    },
    {
        path: MUSIC_ROUTE,
        Component: Music
    },
    {
        path: TRENDS_ROUTE,
        Component: Trends
    },
    {
        path: ARTICLES_ROUTE,
        Component: Articles
    },
];