const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    name: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
});

const Avatar = sequelize.define('avatars', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    img: {type:DataTypes.BLOB}
})

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
}, {
    hierarchy: true
});

const CommentRating = sequelize.define('comment_rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    choice: {type: DataTypes.ENUM("up", "down")}
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

Role.hasMany(User, {foreignKey: 'role_id', allowNull: true});

User.hasMany(Viki, {foreignKey: 'author_id', onDelete: 'SET NULL'});
User.hasMany(Reaction, {foreignKey: 'user_id', onDelete: 'SET NULL'});
User.hasMany(SavedNews, {foreignKey: 'user_id', onDelete: 'CASCADE'});
User.hasMany(Comment, {foreignKey: 'user_id', onDelete: 'SET NULL'});
User.hasMany(News, {foreignKey: 'author_id', onDelete: 'SET NULL'});
User.hasMany(CommentRating, {foreignKey: 'user_id', onDelete: 'CASCADE'});
User.belongsTo(Avatar, {as: 'avatar', allowNull: true, onUpdate:'SET NULL'})

News.belongsTo(User, {foreignKey: 'author_id', onDelete: 'SET NULL'})
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


Comment.belongsTo(User, {foreignKey: 'user_id', onDelete: 'SET NULL'});


CommentRating.belongsTo(Comment, {foreignKey: 'comment_id', onDelete: 'SET NULL'});
CommentRating.belongsTo(User, {foreignKey: 'user_id', onDelete: 'SET NULL'});


News.belongsToMany(Tag, {through: NewsTag, foreignKey: 'publication_id', onDelete: 'CASCADE'});
Tag.belongsToMany(News, {through: NewsTag, foreignKey: 'tag_id', onDelete: 'CASCADE'});


module.exports = {
    User,
    Role,
    News,
    Reaction,
    Comment,
    CommentRating,
    Image,
    Viki,
    SavedNews,
    Tag,
    Avatar,
    NewsTag
};
