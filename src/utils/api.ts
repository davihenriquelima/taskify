import { Post } from '@/types/Post';
import { User } from '@/types/User';
import axios from 'axios';

export const api = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
});

export const getPosts = async ():Promise<Post[]> => {
    const result = await api.get('/posts');
    return result.data;
}

export const getPost = async (id:number):Promise<Post[]> => {
    const result = await api.get('/posts/'+ id);
    return result.data;
}

export const getUsers = async ():Promise<User[]> => {
    const result = await api.get('/users');
    return result.data;
}

export const addPost = async (data: Omit<Post, "id">) => {
    const result = await api.post('/posts', data)
    return result.data;
}