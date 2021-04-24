import React, {useContext, useState} from 'react';
import {Context} from "../index";

const Vikis = () => {

    const {user} = useContext(Context);
    console.log('user: ', user);
    const [userData, setUserData] = useState(user.user);
    return (
        <div className="flex justify-center h-screen font-montserrat font-normal">
            <div className="flex justify-center mt-20 w-full">
                <div className="w-1/5">
                    <img src="img/Chungha.jpg" className=""/>
                </div>
                <div className="flex h-2/5 w-2/6">
                    <div>
                        <div className="w-1/3 h-1/3">
                            <img src="img/Sunmi.jpg" className="object-cover rounded-full h-44 w-44 transform translate-x-24"/>
                        </div>
                        <div className="w-1/3 h-2/4 bg-yellow rounded-md">
                            <div className="text-md ml-32">
                                <p className="text-3xl my-3"> Kim Chung Ha </p>
                                <p className=""> Независимы исполнитель </p>
                                <p className=""> Статус: активна </p>
                                <p className=""> Дата рождения: 09.02.96 </p>
                                <p className=""> Количество треков: 100 </p>
                                <a href="#">
                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter"
                                     className="svg-inline--fa fa-twitter fa-w-16 fill-current text-pink h-10 w-90" role="img"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor"
                                          d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                </svg>
                                </a>
                                <a href="#">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram"
                                         className="svg-inline--fa fa-instagram fa-w-14 fill-current text-pink h-10 w-90" role="img"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor"
                                              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        ffjfk
                    </div>


                    {/*<button className="bg-pink text-lg px-3 py-2 rounded-md mx-auto w-full mt-4"> Редактировать</button>*/}
                </div>


                {/*<div className="flex h-3/5">*/}
                {/*    <div className="bg-yellow p-5 w-3/6 rounded-md ml-10">*/}
                {/*        <p className="text-xl"> Мои новости </p>*/}
                {/*        <div className="flex h-1/6 w-1/6 my-auto">*/}
                {/*            <img className="bg-blue rounded-md p-3 max-h-full w-1/3 mx-auto" src="img/Plus.svg"/>*/}
                {/*        </div>*/}
                {/*        <div className="mt-3 bg-pink flex mx-auto rounded-md">*/}
                {/*            <img src="img/Rose.jpg" className="object-scale-down h-24 w-24 rounded-md mx-2 my-2"/>*/}
                {/*            <p className="mx-8 mt-5 font-medium w-3/4 text-lg">Розе (BLACKPINK) установила новый рекорд среди корейских певиц на YouTube</p>*/}
                {/*            <p className="mx-8 mt-8 w-1/4">Добавлено: 10.03.2021</p>*/}
                {/*            <div className="flex h-1/4 w-1/4 mx-3 my-auto">*/}
                {/*                <img className="bg-blue rounded-md p-3 max-h-full w-1/3 mx-auto" src="img/Pen.svg"/>*/}
                {/*                <img className="bg-blue rounded-md p-3 max-h-full w-1/3 mx-auto" src="img/Trash.svg"/>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        /!*копия*!/*/}
                {/*        <div className="mt-3 bg-pink flex mx-auto rounded-md">*/}
                {/*            <img src="img/Rose.jpg" className="object-scale-down h-24 w-24 rounded-md mx-2 my-2"/>*/}
                {/*            <p className="mx-8 mt-5 font-medium w-3/4 text-lg">Розе (BLACKPINK) установила новый рекорд среди корейских певиц на YouTube</p>*/}
                {/*            <p className="mx-8 mt-8 w-1/4">Добавлено: 10.03.2021</p>*/}
                {/*            <div className="flex h-1/4 w-1/4 mx-3 my-auto">*/}
                {/*                <img className="bg-blue rounded-md p-3 max-h-full w-1/3 mx-auto" src="img/Pen.svg"/>*/}
                {/*                <img className="bg-blue rounded-md p-3 max-h-full w-1/3 mx-auto" src="img/Trash.svg"/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="flex flex-col justify-between">*/}
                {/*        <div className="bg-pink h-1/4"><div className="transform origin-bottom-left rotate-90">dfgwerwe</div></div>*/}
                {/*        <div className="bg-pink h-1/4"><div className="transform origin-bottom-left rotate-90">dfgwerw</div></div>*/}
                {/*        <div className="bg-pink h-1/4"><div className="transform origin-bottom-left rotate-90">ere</div></div>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>
        </div>

    );
};

export default Vikis;