import axios from 'axios';
import React, { FC, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { IUser } from '../types/types';


const UserItemPage: FC = () => {

    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams<string>();
    const navi = useNavigate();

    useEffect(() => {
        fetchUser();
    }, [])

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id);
            setUser(response.data)
        }
        catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <button onClick={() => navi('/users')}>Back</button>
            <h1>Страница пользователя {user?.name} </h1>
            <div>{user?.email}</div>
            <div>{user?.address.city}</div>
        </div>
    )
}

export default UserItemPage
