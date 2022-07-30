import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import List from './components/List';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';
import UserList from './components/UserList';
import { ITodo, IUser } from './types/types';
import EventsExample from './components/EventsExample';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserPage from './components/UserPage';
import TodosPage from './components/TodosPage';
import { Link } from 'react-router-dom';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';

function App() {


    return (
        <BrowserRouter>
            <div>
                <Link to='/users'>Пользователи</Link>
                <Link to='todos'>Список дел</Link>
            </div>
            <Routes>
                <Route path='/users' element={<UserPage />} />
                <Route path='/todos' element={<TodosPage />} />
                <Route path='/users/:id' element={<UserItemPage />} />
                <Route path='/todos/:id' element={<TodoItemPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
