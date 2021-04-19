import React, {useContext, useState} from 'react';
import { NavLink, useLocation, useHistory  } from "react-router-dom"
import {useForm} from "react-hook-form";
import {observer} from "mobx-react-lite";
import * as yup from 'yup'


import {LOGIN_ROUTE, PORTAL_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {Context} from "../index";

const schema = yup.object().shape({
    name: yup.string().required("Пожалуйста, введите имя"),
    email: yup.string().required("Пожалуйста, введите email").email(),
    password: yup.string().required("Пожалуйста, введите пароль").min(6)
})

const Auth = observer(() => {

    const { user } = useContext(Context)
    const [authError, setAuthError] = useState()

    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const {register, handleSubmit, errors} = useForm(
        {
            validationSchema: schema
        }
    )



    const onSubmit = async (data) => {
        try {
            let user_data;
            if (isLogin) {
                user_data = await login(data.email, data.password).catch(err => { throw err })
            } else {
                user_data = await registration(data.email, data.password, data.name).catch(err => { throw err })
            }

            console.log(user_data)

            if(!authError) {
                user.setUser(user_data)
                user.setIsAuth(true)
                history.push(PORTAL_ROUTE)
            }
        }
        catch (e) {
            setAuthError(e.message);
        }
    }

    return (
        <div
            className="mx-auto h-5/6 items-center flex justify-center flex-col">
            <div className="max-w-md w-full mx-auto mt-4">
                <div className="bg-pink p-8 rounded-md">
                <h3 className="text-center text-2xl">{ isLogin ? 'Авторизация' : 'Регистрация' }</h3>
                    <form action="" className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="" className="text-black block">Email</label>
                            <input className="w-full p-2 rounded-md" {...register('email')}/>
                            <p>{errors.email.message}</p>
                        </div>
                        {
                            !isLogin ?
                                <div>
                                    <label htmlFor="" className="text-black block">Имя</label>
                                    <input className="w-full p-2 rounded-md" type="text" {...register('name')}/>
                                    <p>{errors.name.message}</p>
                                </div>
                                :
                                null
                        }
                        <div>
                            <label htmlFor="" className="text-black block">Пароль</label>
                            <input className="w-full p-2 rounded-md" type="password" {...register('password')}/>
                            <p>{errors.password.message}</p>
                        </div>

                        <button type="submit" className="w-full py-2 px-4 bg-yellow rounded-md text-black">
                            { isLogin ? 'Войти' : 'Зарегестрироваться' }
                        </button>
                    </form>
                </div>

            <div className="mt-5 text-center">
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
                {authError ? (<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-5" role="alert">
                       <strong className="font-bold">Ошибка! </strong>
                       <span className="block sm:inline mr-10">{ authError }</span>
                       <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                        <svg onClick={() => setAuthError(null)} className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 20 20"><title>Close</title><path
                            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                    </span>
                   </div>) :
                        null
                }


        </div>
    );
});

export default Auth;