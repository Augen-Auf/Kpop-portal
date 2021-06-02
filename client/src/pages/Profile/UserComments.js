import React from 'react';

const UserComments = (props) => {
    return (
        <div className="p-5 flex flex-col">
            <div className="flex bg-white px-3 py-3 rounded-md">
                <div className="w-4/6">
                    <span className="text-sm text-pink">Комментарий к новости: BTS стали культовой групой 10 летия</span>
                    <p className="text-lg">Как же я рад за них! Пусть продолжают в том же духе!</p>
                </div>
                <div className="flex justify-end w-2/6">
                    <span className="text-sm">Около месяца назад</span>
                </div>
            </div>
        </div>
    );
}

export default UserComments;
