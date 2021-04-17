import React from 'react';
import { useLocation, NavLink } from "react-router-dom"
import {LOGIN_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {useForm} from "react-hook-form";



const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const {register, handleSubmit, errors} = useForm()

    const onSubmit = async (data) => {
        console.log(data)
        if (isLogin) {
            const response = await login(data.email, data.password)
        } else {
            const response = await registration(data.email, data.password, data.name)
            console.log(response)
        }
    }

    return (
        <div
            className="mx-auto h-5/6 items-center flex justify-center flex-col">
            <div className="max-w-md w-full mx-auto mt-4 bg-pink p-8 rounded-md">
                <h3 className="text-center text-2xl">{ isLogin ? 'Авторизация' : 'Регистрация' }</h3>
                <form action="" className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="" className="text-black block">Email</label>
                        <input className="w-full p-2 rounded-md" {...register('email')}/>
                    </div>
                    {
                        !isLogin ?
                            <div>
                                <label htmlFor="" className="text-black block">Имя</label>
                                <input className="w-full p-2 rounded-md" type="text" {...register('name')}/>
                            </div>
                            :
                            null
                    }
                    <div>
                        <label htmlFor="" className="text-black block">Пароль</label>
                        <input className="w-full p-2 rounded-md" type="password" {...register('password')}/>
                    </div>

                    <button type="submit" className="w-full py-2 px-4 bg-yellow rounded-md text-black">
                        { isLogin ? 'Войти' : 'Зарегестрироваться' }
                    </button>
                </form>
            </div>
            <div className="mt-5">
                {isLogin ?
                    <p>Нет аккаунта?  <NavLink to={LOGIN_ROUTE} className="font-medium text-pink-dark">
                            Зарегистрируйтесь!
                        </NavLink>
                    </p>
                    :
                    <p>Есть аккаунт?  <NavLink to={LOGIN_ROUTE} className="font-medium text-pink-dark">
                         Зарегистрируйтесь!
                        </NavLink>
                    </p>
                }
            </div>
        </div>
    );
};

export default Auth;