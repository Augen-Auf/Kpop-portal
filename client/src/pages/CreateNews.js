import React, {useState, useRef, useContext} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import Tag from '../components/Tag'
import {useForm} from "react-hook-form";
import {updateUser} from "../http/userAPI";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {createNews} from "../http/NewsAPI";


const CreateNews = observer(() => {

    const {user} = useContext(Context);

    const [text, setText] = useState('')
    const [tags, setTags] = useState([])

    const {register, handleSubmit, formState: { errors }, setValue} = useForm();

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            [{ 'size': [ 'small', false, 'large', 'huge' ]}],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
            ['clean']
        ]
    }
    const formats = [
        'header', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]

    const tag = useRef(null)

    const handleChange = (value) => {
        console.log(value)
        setText(value)
    }

    const addNew = async({title, lid}) => {
        const { newsData } = await createNews(user.user.id, title, lid, text, 'news', 1, tags);
        console.log(newsData)
    }

    const removeTagHandler = (tagName) => {
        setTags(tags.filter(el => el !== tagName))
    }
    const addTagHandler = () => {
        const tagName = tag.current.value
        if(tagName && tagName.trim() !== '' && !tags.includes(tagName))
            setTags([...tags, tagName])
        tag.current.value = ''
    }

    return (
        <div className="justify-center font-montserrat font-normal" >
            <div className="flex flex-grow justify-center mt-10">
                <div className="w-4/6 p-5 bg-white min-h-3/4 mb-10 shadow-md rounded-md">
                    <form onSubmit={handleSubmit(addNew)}>
                        <div className="mb-4">
                            <label>Загаловок</label>
                            <input
                                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-pink"
                                { ...register("title", {required: 'Обязательное поле для заполнения'})}/>
                        </div>
                        <div className="mb-4">
                            <label>Лид</label>
                            <input className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-pink"
                                   { ...register("lid", {required: 'Обязательное поле для заполнения'})}/>
                        </div>
                        <div className="mb-4">
                            <label>Текст</label>
                            <ReactQuill onChange={handleChange} modules={modules} formats={formats}/>
                        </div>
                        <div className="mb-4 w-full">
                            <div className="flex justify-between">
                                <input
                                    ref={tag}
                                    type="text"
                                    className="appearance-none block w-5/6 bg-white text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter some tags"/>
                                <button
                                    type="button"
                                    className="py-2 px-3 bg-yellow rounded-md focus:outline-none focus:ring focus:ring-offset-2 focus:ring-pink"
                                    onClick={addTagHandler}>
                                    Добавить
                                </button>
                            </div>
                            <div>
                            {tags && tags.map((item, index) => {
                                return <Tag key={'tag_'+index} tagName={item} removeHandler={removeTagHandler}/>
                            })}
                            </div>
                        </div>
                        <div className=" flex justify-between">
                            <button type="button" className="py-2 px-3 bg-yellow rounded-md focus:outline-none focus:ring focus:ring-offset-2 focus:ring-pink">
                                Отменить
                            </button>
                            <button type="submit" className="py-2 px-3 bg-pink rounded-md focus:outline-none focus:ring focus:ring-offset-2 focus:ring-pink">
                                Добавить статью
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
});

export default CreateNews
