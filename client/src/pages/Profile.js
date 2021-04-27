import React, {useContext, useState} from 'react';
import {Context} from "../index";

const Profile = () => {

    const {user} = useContext(Context);
    console.log('user: ', user);
    const [userData, setUserData] = useState(user.user);
    return (
        <div className="flex justify-center h-screen font-montserrat font-normal">
            <div className="flex justify-center mt-20 w-full">
                <div className="h-3/5 w-1/6">
                    <div className="bg-blue h-1/4">
                        <div className="transform translate-y-12">
                            <img src="img/Sunmi.jpg" className="object-cover w-48 h-48 rounded-full  mx-auto"/>
                        </div>
                    </div>
                    <div className="bg-yellow border-solid rounded-md pt-28 pb-4 w-full">
                        <div className="text-xl">
                            <p className="text-center mb-3"> {userData.name} </p>
                            <p className="ml-8"> 10 статей </p>
                            <p className="ml-8"> 2 комментария </p>
                        </div>
                    </div>
                    <button className="bg-pink text-lg px-3 py-2 rounded-md mx-auto w-full mt-4"> Редактировать</button>
                </div>
                <div className="flex h-3/5">
                    <div className="bg-yellow p-5 w-3/6 rounded-md ml-10">
                        <p className="text-xl"> Мои новости </p>
                        <div className="flex h-1/6 w-1/6 my-auto">
                            <img className="bg-blue rounded-md p-3 max-h-full w-1/3 mx-auto" src="img/Plus.svg"/>
                        </div>
                            <div className="mt-3 bg-pink flex mx-auto rounded-md">
                            <img src="img/Rose.jpg" className="object-scale-down h-24 w-24 rounded-md mx-2 my-2"/>
                            <p className="mx-8 mt-5 font-medium w-3/4 text-lg">Розе (BLACKPINK) установила новый рекорд среди корейских певиц на YouTube</p>
                            <p className="mx-8 mt-8 w-1/4">Добавлено: 10.03.2021</p>
                            <div className="flex h-1/4 w-1/4 mx-3 my-auto">
                                <img className="bg-blue rounded-md p-3 max-h-full w-1/3 mx-auto" src="img/Pen.svg"/>
                                <img className="bg-blue rounded-md p-3 max-h-full w-1/3 mx-auto" src="img/Trash.svg"/>
                            </div>
                        </div>

                        {/*копия*/}
                        <div className="mt-3 bg-pink flex mx-auto rounded-md">
                            <img src="img/Rose.jpg" className="object-scale-down h-24 w-24 rounded-md mx-2 my-2"/>
                            <p className="mx-8 mt-5 font-medium w-3/4 text-lg">Розе (BLACKPINK) установила новый рекорд среди корейских певиц на YouTube</p>
                            <p className="mx-8 mt-8 w-1/4">Добавлено: 10.03.2021</p>
                            <div className="flex h-1/4 w-1/4 mx-3 my-auto">
                                <img className="bg-blue rounded-md p-3 max-h-full w-1/3 mx-auto" src="img/Pen.svg"/>
                                <img className="bg-blue rounded-md p-3 max-h-full w-1/3 mx-auto" src="img/Trash.svg"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="bg-pink h-1/4"><div className="transform origin-bottom-left rotate-90">dfgwerwe</div></div>
                        <div className="bg-pink h-1/4"><div className="transform origin-bottom-left rotate-90">dfgwerw</div></div>
                            <div className="bg-pink h-1/4"><div className="transform origin-bottom-left rotate-90">ere</div></div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Profile;