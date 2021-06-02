import React, { Fragment, useContext, useState } from 'react';
import {Context} from "../../index";
import { Dialog, Transition } from '@headlessui/react'
import {observer} from "mobx-react-lite";
import UserNews from "./UserNews";
import UserArticles from "./UserArticles";
import UserComments from "./UserComments";
import UpdateProfileForm from "./UpdateProfileForm";
import UpdatePasswordForm from "./UpdatePasswordForm";
import {$authHost, $host} from "../../http";

const Profile = observer(() => {

    const {user} = useContext(Context);

    const [isOpen, setIsOpen] = useState(false)
    const [dialogForm, setDialogForm] = useState()

    const sections = [
        {title: 'Новости', section: 'news', component: <UserNews/>},
        {title: 'Статьи', section: 'articles', component: <UserArticles/>},
        {title: 'Комментарии', section: 'comments', component: <UserComments/> }
    ]

    const dialogs = {
        'updateProfile': <UpdateProfileForm openForm={setIsOpen}/>,
        'updatePassword': <UpdatePasswordForm openForm={setIsOpen}/>
    }

    const [section, setSection] = useState(sections[0])

    const openDialog = (dialogFormName) => {
        setDialogForm(dialogFormName);
        setIsOpen(true);
    }

    return (
        <>
            <div className="w-full font-montserrat font-normal px-10 py-14">
                <div className="flex lg:flex-row flex-col w-full h-full justify-center lg:space-x-10 lg:space-y-0 space-y-10">
                    <aside className="lg:w-1/5 lg:sticky h-1/3 lg:top-10">
                        <div className="flex flex-col space-y-4">
                            <div className="bg-yellow rounded-md shadow-md ">
                                <div className="flex flex-col px-3 py-4 space-y-5 text-black">
                                    <img src={ user.user.avatarId ? process.env.REACT_APP_API_URL + 'api/avatar/' + user.user.avatarId : 'img/Sunmi.jpg' } className="object-cover rounded-full lg:w-48 lg:h-48 w-32 h-32 mx-auto"/>
                                    <div>
                                        <p className="text-center text-2xl font-semibold">{user.user.name}</p>
                                        <p className="text-center text-md">{user.user.email}</p>
                                    </div>
                                    <div className="flex justify-center space-x-4 bg-orange-200 rounded-md py-2">
                                        <div className="flex flex-col justify-center items-center">
                                            <span className="text-2xl font-medium">10</span>
                                            <span className="text-xs">статей</span>
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            <span className="text-2xl font-medium">2</span>
                                            <span className="text-xs">комментов</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="bg-pink text-lg rounded-md py-2 shadow-md focus:outline-none" onClick={() => openDialog('updateProfile')}>
                                Редактировать
                            </button>
                            <button className="bg-pink text-lg rounded-md py-2 shadow-md focus:outline-none" onClick={() => openDialog('updatePassword')}>
                                Сменить пароль
                            </button>
                        </div>
                    </aside>
                    <main className="lg:w-4/6">
                        <div className="flex flex-col w-full h-full">
                            <div className="flex space-x-5 text-lg uppercase font-montserrat">
                                { sections.map(item =>
                                <button className="bg-pink px-3 py-2 rounded-t-md focus:outline-none" onClick={() => setSection(item)}>
                                    { item.title }
                                </button>
                                )}
                            </div>
                            <div className="bg-yellow flex flex-col w-full h-full shadow-md rounded-b-md">
                                <div className="flex space-x-5 text-lg font-montserrat">
                                    { sections.map(item =>
                                        <div className={`bg-pink px-3 h-3 ${ section.section === item.section ? '': 'invisible'}`}>
                                            <p className="invisible">{ item.title }</p>
                                        </div>
                                    )}
                                </div>
                                { section.component }
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>

                    <Dialog
                        as="div"
                        className="fixed inset-0 z-10 overflow-y-auto"
                        open={isOpen} onClose={() => setIsOpen(false)}>
                        <div className="min-h-screen px-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0" />
                            </Transition.Child>
                            <span
                                className="inline-block h-screen align-middle"
                                aria-hidden="true"
                            >
                              &#8203;
                            </span>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                    { dialogs[dialogForm] }
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
            </Transition>
        </>
    );
});

export default Profile;
