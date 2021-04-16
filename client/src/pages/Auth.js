import React from 'react';
import {useForm} from 'react-hook-form';


const Auth = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = handleSubmit((data) =>{
        console.log(data);
    });
    return (
        <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
            h-4/5 items-center flex justify-center">
            <div className="max-w-md w-full mx-auto mt-4 bg-pink p-8 rounded-md">
            <form action="" className="space-y-6" onSubmit={onSubmit}>
                <div>
                    <label htmlFor="" className="text-black block">Email</label>
                    <input ref={register()} name="email" type="text" className="w-full p-2 rounded-md"/>
                </div>
                <div>
                    <label htmlFor="" className="text-black block">Пароль</label>
                    <input ref={register()} name="password" type="text" className="w-full p-2 rounded-md"/>
                </div>
                <button className="w-full py-2 px-4 bg-yellow rounded-md text-black">Войти</button>
            </form>
            </div>
            <div>
                <p>Нет аккаунта? <a href="" className="font-medium text-pink-dark">Зарегистрируйтесь!</a></p>
            </div>
        </div>
    );
};

export default Auth;