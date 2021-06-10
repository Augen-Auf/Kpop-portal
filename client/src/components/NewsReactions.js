import React, {useEffect, useState} from 'react';
import {getNewsReactions, setNewsReaction} from "../http/NewsAPI";

const NewsReactions = ({userId, newsId}) => {
    const [reactions, setReactions] = useState({happy: 0, sweat: 0, sad: 0, crying: 0, angry: 0})
    const [userReaction, setUserReaction] = useState(null)

    useEffect(() => {
        getNewsReactions(newsId).then(r => {
            const results = r;
            const newReactions = {}
            reactions.keys().forEach(emotion => {
                newReactions[emotion] = results.filter(item=> item.emotion === emotion).length;
            })
            setReactions(newReactions)
            results.map(item => {
                if(item.user_id === userId)
                    setUserReaction(item.emotion)
            })
        })
    })

    const setReaction = (reaction) => {
        let newReactions = {...reactions}

        if (reaction === null) {
            const { data } = setNewsReaction(userId, newsId, reaction)
            setUserReaction(reaction)
            newReactions[reaction] += 1
        }
        else {
            const { data } = setNewsReaction(userId, newsId, reaction)
            if (reaction === userReaction)
            {
                setUserReaction(null)
                newReactions[reaction] -= 1
            }
            else
            {
                newReactions[reaction] += 1
                newReactions[userReaction] -= 1
            }
        }

        setReactions(newReactions)
    }

    return (
        <div className="flex space-x-3 bg-yellow rounded-md p-3">
            <div className="flex flex-col items-center p-3 hover:bg-pink rounded-md"
                 onClick={() => setReaction('happy')}>
                <img src="/img/Emoji/happy.svg"  className="w-10 h-10"/>
                <span>0</span>
            </div>
            <div className="flex flex-col items-center p-3 hover:bg-pink rounded-md"
                 onClick={() => setReaction('sweat')}>
                <img src="/img/Emoji/sweat.svg"  className="w-10 h-10"/>
                <span>0</span>
            </div>
            <div className="flex flex-col items-center p-3 hover:bg-pink rounded-md"
                 onClick={() => setReaction('sad')}>
                <img src="/img/Emoji/sad.svg"  className="w-10 h-10"/>
                <span>0</span>
            </div>
            <div className="flex flex-col items-center p-3 hover:bg-pink rounded-md"
                 onClick={() => setReaction('crying')}>
                <img src="/img/Emoji/crying.svg"  className="w-10 h-10"/>
                <span>0</span>
            </div>
            <div className="flex flex-col items-center p-3 hover:bg-pink rounded-md"
                 onClick={() => setReaction('angry')}>
                <img src="/img/Emoji/angry.svg"  className="w-10 h-10"/>
                <span>0</span>
            </div>
        </div>
    );
};

export default NewsReactions;
