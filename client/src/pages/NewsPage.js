import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getOneNew} from "../http/NewsAPI";
import moment from "moment";
import 'moment/locale/ru'
import Comment from "../components/Comment";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import CommentCard from "../components/CommentCard";

const NewsPage = observer(() => {
    let { id } = useParams();

    const {user} = useContext(Context);

    const [newsObj, setNewsObj] = useState();
    const [comments, setComments] = useState();
    const [loadedImages, setLoadedImages] = useState([]);

    const printCommentsTree = (commentsNode) => {
        console.log(commentsNode)
        return commentsNode.map(item =>
                    <div className="bg-yellow p-5 rounded-md">
                        <CommentCard comment={item} authorId={user.user.id}/>
                    </div>
                )

    }

    const getNew = async () => {
        return await getOneNew(id)
    }

    const loadImage = (e) => {
        setLoadedImages([...loadedImages, e.target.files[0]])
    }

    const transformToHTML = (text) => {
        return {__html: text}
    }


    useEffect(() => {
        getNew().then( ({news, comments}) => {
                console.log(news)
                console.log(comments)
                news.createdAt = moment(news.createdAt).format('DD.MM.YYYY')
                setNewsObj(news)
                setComments(comments)
            }
        )
    }, []);

    return (
        <div className="w-full">
            {newsObj &&
                <>
                    <header className="bg-pink">
                        <div className="max-w-5xl mx-auto py-6 px-10">
                            <h1 className="text-3xl font-medium text-gray-900">{ newsObj.title }</h1>
                        </div>
                    </header>

                    <div className="max-w-5xl container mx-auto px-10 py-3 space-y-3">
                        {/*Хлебные крошки*/}
                        <div className="flex justify-between">
                            <div className="flex space-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="flex flex-col items-end">
                                <span>{ newsObj.user.name }, { newsObj.createdAt }</span>
                                <span>{ newsObj.views } просмотров</span>
                            </div>
                        </div>

                        {/*Лид*/}
                        <div className="text-2xl">{newsObj.lid}</div>

                        {/*Содержание статьи*/}
                        <div dangerouslySetInnerHTML={transformToHTML(newsObj.text)} className="text-xl landing-6 space-y-4"/>

                        {/*Теги*/}
                        <div className="space-y-2">
                            <p className="text-xl font-semibold">Теги</p>
                            <div className="flex flex-wrap space-x-4">
                                {
                                    newsObj.tags.map( item =>
                                    <div className="px-3 py-2 border rounded-md bg-white">
                                        {item.tag}
                                    </div>
                                    )
                                }
                            </div>
                        </div>

                        {/*Эмодзи*/}
                        <div className="flex justify-center">
                            <div className="flex space-x-3 bg-yellow rounded-md p-3">
                                <div className="flex flex-col items-center p-3 hover:bg-pink rounded-md">
                                    <img src="/img/Emoji/happy.svg"  className="w-10 h-10"/>
                                    <span>0</span>
                                </div>
                                <div className="flex flex-col items-center p-3 hover:bg-pink rounded-md">
                                    <img src="/img/Emoji/sweat.svg"  className="w-10 h-10"/>
                                    <span>0</span>
                                </div>
                                <div className="flex flex-col items-center p-3 hover:bg-pink rounded-md">
                                    <img src="/img/Emoji/sad.svg"  className="w-10 h-10"/>
                                    <span>0</span>
                                </div>
                                <div className="flex flex-col items-center p-3 hover:bg-pink rounded-md">
                                    <img src="/img/Emoji/crying.svg"  className="w-10 h-10"/>
                                    <span>0</span>
                                </div>
                                <div className="flex flex-col items-center p-3 hover:bg-pink rounded-md">
                                    <img src="/img/Emoji/angry.svg"  className="w-10 h-10"/>
                                    <span>0</span>
                                </div>
                            </div>
                        </div>

                        {/*Комментарии*/}
                        <div className="space-y-3">
                            <p className="text-xl font-semibold">2 Комментария</p>

                            <Comment newsId={newsObj.id} parentId={null} authorId={user.user.id}/>

                            { comments &&
                                <div className="space-y-4">
                                    { printCommentsTree(comments) }
                                </div>
                            }
                        </div>
                    </div>
                </>
            }
        </div>
    );
})

export default NewsPage;
