export const ADMIN_ROUTE = '/admin';
export const LOGIN_ROUTE = '/login';
export const REGISTRATION_ROUTE = '/registration';
export const PROFILE_ROUTE = '/profile';
export const PORTAL_ROUTE = '/kpopworld';
export const NEWS_ROUTE = '/news';
export const ARTICLES_ROUTE = '/articles';
export const CREATE_NEWS_ROUTE = '/news/create';
export const UPDATE_NEWS_ROUTE = '/update/news/:id';
export const VIKIS_ROUTE = '/vikis';
export const VIKI_PAGE_ROUTE = '/vikis/:id';
export const CREATE_VIKI_ROUTE = '/vikis/create';
export const UPDATE_VIKI_ROUTE = '/update/vikis/:id';
export const STATISTICS_ROUTE = '/statistics';
export const TRENDS_ROUTE = '/trends';
export const MUSIC_ROUTE = '/music';

export const ROUTE_NAMES = {
    ADMIN_ROUTE: 'Админ-панель',
    LOGIN_ROUTE: 'Авторизация',
    REGISTRATION_ROUTE: 'Регистрация',
    PROFILE_ROUTE: 'Профиль',
    PORTAL_ROUTE: 'Портал',
    NEWS_ROUTE: 'Новости',
    ARTICLES_ROUTE: 'Статьи',
    CREATE_NEWS_ROUTE: 'Создать статью',
    VIKIS_ROUTE: 'Вики',
    STATISTICS_ROUTE: 'Статистика',
    TRENDS_ROUTE: 'Тренды',
    MUSIC_ROUTE: 'Музыка'
}

export const EMAIL_REGEX = RegExp( '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])');
