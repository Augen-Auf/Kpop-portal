import React from 'react';

const UserArticles = () => {
    return (
        <div className="p-5 flex flex-col">
            <div className="flex justify-between items-center">
                <span className="text-xl">Мои статьи</span>
                <button className="bg-blue p-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </button>
            </div>
            <div className="mt-3 2xl:w-5/6 2xl:mx-auto w-full bg-pink flex sm:flex-row flex-col rounded-md lg:items-center">
                <div className="flex lg:py-0 py-3">
                    <img src="img/Rose.jpg" className="object-scale-down lg:h-24 lg:w-24 w-40 h-40 rounded-md mx-2 my-2" alt=""/>
                    <div className="flex lg:flex-row flex-col lg:items-center justify-center">
                        <p className="mx-8 font-medium w-3/4 lg:text-lg">Розе (BLACKPINK) установила новый рекорд среди корейских певиц на YouTube</p>
                        <p className="mx-8 w-1/4 lg:text-md text-sm">Добавлено: 10.03.2021</p>
                    </div>
                </div>
                <div className="flex lg:flex-row sm:flex-col lg:w-1/4 lg:py-0 py-4 mx-3 lg:space-x-4 lg:space-y-0 sm:space-y-4 sm:space-x-0 space-y-0 space-x-4 sm:justify-start justify-center my-auto">
                    <button className="p-2 bg-blue sm:w-max w-1/3 rounded-md items-center justify-center flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </button>
                    <button className="p-2 bg-blue sm:w-max w-1/3 rounded-md items-center justify-center flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="mt-3 2xl:w-5/6 2xl:mx-auto w-full bg-pink flex sm:flex-row flex-col rounded-md lg:items-center">
                <div className="flex lg:py-0 py-3">
                    <img src="img/Rose.jpg" className="object-scale-down lg:h-24 lg:w-24 w-40 h-40 rounded-md mx-2 my-2" alt=""/>
                    <div className="flex lg:flex-row flex-col lg:items-center justify-center">
                        <p className="mx-8 font-medium w-3/4 lg:text-lg">Розе (BLACKPINK) установила новый рекорд среди корейских певиц на YouTube</p>
                        <p className="mx-8 w-1/4 lg:text-md text-sm">Добавлено: 10.03.2021</p>
                    </div>
                </div>
                <div className="flex lg:flex-row sm:flex-col lg:w-1/4 lg:py-0 py-4 mx-3 lg:space-x-4 lg:space-y-0 sm:space-y-4 sm:space-x-0 space-y-0 space-x-4 sm:justify-start justify-center my-auto">
                    <button className="p-2 bg-blue sm:w-max w-1/3 rounded-md items-center justify-center flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </button>
                    <button className="p-2 bg-blue sm:w-max w-1/3 rounded-md items-center justify-center flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserArticles;
