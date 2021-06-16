import React, {useContext, useState} from 'react';
import {Context} from "../../index";

const Vikis = () => {

    const {user} = useContext(Context);
    console.log('user: ', user);
    const [userData, setUserData] = useState(user.user);
    return (
        <div className="flex justify-center font-montserrat font-normal py-10">
            Vikis
        </div>
    );
};

export default Vikis;
