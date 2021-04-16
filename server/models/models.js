const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    name: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    avatar: {type: DataTypes.STRING, allowNull: true, defaultValue: null},
});

const News = sequelize.define('news', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true},
    lid: {type: DataTypes.TEXT},
    text: {type: DataTypes.TEXT},
    type: {type: DataTypes.ENUM("news", "articles")},
    views: {type: DataTypes.INTEGER},
});

const SavedNews = sequelize.define('savedNews', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});


const Viki = sequelize.define('viki', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true},
    lid: {type: DataTypes.TEXT},
    text: {type: DataTypes.TEXT},
});

const Comment = sequelize.define('comment', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    text: {type: DataTypes.TEXT},
    date: {type: DataTypes.DATE},
    time: {type: DataTypes.TIME},
    parent_id: {type: DataTypes.INTEGER},
    likes: {type: DataTypes.INTEGER},
    dislikes: {type: DataTypes.INTEGER}
});

const Reaction = sequelize.define('reaction', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    emotion: {type: DataTypes.ENUM("happy", "funny", "sad", "upset", "fury")}
});

const Image = sequelize.define('image', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    image: {type: DataTypes.STRING},
    type: {type: DataTypes.ENUM("news", "vikis")},
});

const Tag = sequelize.define('tag', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    tag: {type: DataTypes.STRING, unique: true}
});

const Role = sequelize.define('role', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    role: {type: DataTypes.STRING},
    crud_access: {type: DataTypes.BOOLEAN},
    moderate_access: {type: DataTypes.BOOLEAN}
});

const NewsTag = sequelize.define('newsTag', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const UserSubscriber = sequelize.define('userSubscriber', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

Role.hasMany(User, {foreignKey: 'role_id'});
User.hasMany(Comment, {foreignKey: 'user_id', onDelete: 'SET NULL'});
User.hasMany(News, {foreignKey: 'author_id', onDelete: 'SET NULL'});
User.hasMany(Viki, {foreignKey: 'author_id', onDelete: 'SET NULL'});
User.hasMany(Reaction, {foreignKey: 'user_id', onDelete: 'SET NULL'});
User.hasMany(SavedNews, {foreignKey: 'user_id', onDelete: 'CASCADE'});


News.hasMany(Reaction, {foreignKey: 'publication_id', onDelete: 'CASCADE'});
News.hasMany(Comment, {foreignKey: 'publication_id', onDelete: 'CASCADE'});
News.hasMany(SavedNews, {
    foreignKey: 'publication_id',
    constraints: false,
    scope: {
        type: "news"
    },
    onDelete: 'CASCADE'
});
News.hasMany(Image, {
    foreignKey: 'publication_id',
    constraints: false,
    scope: {
        type: "news"
    },
    onDelete: 'CASCADE'
});


Viki.hasMany(SavedNews, {
    foreignKey: 'publication_id',
    constraints: false,
    scope: {
        type: "vikis"
    },
    onDelete: 'CASCADE'
});
Viki.hasMany(Image, {
    foreignKey: 'publication_id',
    constraints: false,
    scope: {
        type: "vikis"
    },
    onDelete: 'CASCADE'
});


News.belongsToMany(Tag, {through: NewsTag, foreignKey: 'publication_id', onDelete: 'CASCADE'});
Tag.belongsToMany(News, {through: NewsTag, foreignKey: 'tag_id', onDelete: 'CASCADE'});

User.belongsToMany(User, {through: UserSubscriber, as: 'user', foreignKey: 'user_id', onDelete: 'CASCADE'});
User.belongsToMany(User, {through: UserSubscriber, as: 'subscriber', foreignKey: 'subscriber_id', onDelete: 'CASCADE'});


module.exports = {
    User,
    Role,
    News,
    Reaction,
    Comment,
    Image,
    Viki,
    SavedNews,
    Tag
};