import React, {useState, useRef} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import Tag from '../components/Tag'


const CreateNews = () => {

    const [text, setText] = useState('')
    const [tags, setTags] = useState([])

    const tag = useRef(null)

    const handleChange = (value) => {
        setText(value)
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
                <div className="w-4/6 p-5 bg-white">
                    <div className="mb-4">
                        <label>Загаловок</label>
                        <input className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-pink"/>
                    </div>
                    <div className="mb-4">
                        <label>Лид</label>
                        <input className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-pink"/>
                    </div>
                    <div className="mb-4">
                        <label>Текст</label>
                        <ReactQuill onChange={handleChange} />
                    </div>
                    <div className="mb-4 w-full">
                        <div className="flex justify-between">
                            <input
                                ref={tag}
                                className="appearance-none block w-5/6 bg-white text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter some tags"/>
                            <button
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
                        <button className="py-2 px-3 bg-yellow rounded-md focus:outline-none focus:ring focus:ring-offset-2 focus:ring-pink">
                            Отменить
                        </button>
                        <button className="py-2 px-3 bg-pink rounded-md focus:outline-none focus:ring focus:ring-offset-2 focus:ring-pink">
                            Добавить статью
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateNews