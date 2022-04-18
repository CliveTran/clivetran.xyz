import React from "react";
import axios from "axios";
import Post from "./Post";

const baseUrl = "http://localhost:5263/api"

export default function Blog() {
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        axios.get(`${baseUrl}/post/all`).then((response) => {
            setPosts(response.data);
        })
    }, []);
    
    const postsJsx = posts.map(post => {
        return <Post key={post.id} {...post} />
    })
    
    return (
        postsJsx
    )
}