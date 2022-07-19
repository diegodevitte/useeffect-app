import React, { useEffect, useState, useCallback } from 'react'
import getUser from './helpers/getUser';
import getPosts from './helpers/getPosts';

/* const initialUser = {
    name: "",
    email: ""
}

const initialPosts = [
    { id: 1, title: "Post #1" },
    { id: 2, title: "Post #2" },
    { id: 3, title: "Post #3" },
    { id: 4, title: "Post #4" },
    { id: 5, title: "Post #5" }
] */

const FetchCard = () => {
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);

    const updateUser = () => {
        getUser()
            .then((newUser) => {
                setUser(newUser);
            })
    }

    const updatePosts = useCallback(() => {
        getPosts(user.id)
            .then((newPosts) => {
                setPosts(newPosts);
            })
    }, [user.id])


    useEffect(() => {
        updateUser();
    }, []);

    useEffect(() => {
        if (user?.id) {
            updatePosts();
        }
    }, [user, updatePosts]);

    return (
        <div>
            <button onClick={updateUser}>
                Anothe User
            </button>
            <h1>Name: {user.name}</h1>
            <h1>Email: {user.email}</h1>
            <br />

            <h2>Post - User: {user.id}</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default FetchCard