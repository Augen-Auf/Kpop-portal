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
import Profile from "./pages/Profile/Profile";
import Auth from "./pages/Auth";
import Portal from "./pages/Portal";
import News from "./pages/News";
import NewsPage from "./pages/NewsPage";
import Vikis from "./pages/Vikis";
import CreateNews from './pages/CreateNews';
import Statistics from './pages/Statistics'
import Music from "./pages/Music";
import Trends from "./pages/Trends";
import Articles from "./pages/Articles";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        name: 'Админ-панель',
        Component: Admin
    },
    {
        path: PROFILE_ROUTE,
        name: 'Профиль',
        Component: Profile
    },
    {
        path: CREATE_NEWS_ROUTE,
        name: 'Создать новость',
        Component: CreateNews
    },
];

export const publicRoutes = [
    {
        path: VIKIS_ROUTE,
        name: 'Вики',
        Component: Vikis
    },
    {
        path: REGISTRATION_ROUTE,
        name: 'Регистрация',
        Component: Auth
    },
    {
        path: LOGIN_ROUTE,
        name: 'Авторизация',
        Component: Auth
    },
    {
        path: PORTAL_ROUTE,
        name: 'Портал',
        Component: Portal
    },
    {
        path: NEWS_ROUTE,
        name: 'Новости',
        Component: News
    },
    {
        path: NEWS_ROUTE + '/:id',
        name: '',
        Component: NewsPage
    },
    {
        path: STATISTICS_ROUTE,
        name: 'Статистика',
        Component: Statistics
    },
    {
        path: MUSIC_ROUTE,
        name: 'Музыка',
        Component: Music
    },
    {
        path: TRENDS_ROUTE,
        name: 'Тренды',
        Component: Trends
    },
    {
        path: ARTICLES_ROUTE,
        name: 'Статьи',
        Component: Articles
    },
];
