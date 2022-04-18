import React from "react";
import axios from "axios";
import Post from "./Post";

const baseUrl = "http://localhost:5263/api"

export default function Blog() {
    // const post = <Post
    //     title="How to create a website?"
    //     createdAt="9:45PM 16/04/2022"
    //     postSummary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    //     viewCount={20193}
    //     upvote={4021}
    //     downvote={102}
    // />;

    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        axios.get(`${baseUrl}/post/all`).then((response) => {
            console.log(response.data);
            setPosts(response.data);
        })
    }, []);
    
    const postsJsx = posts.map(post => {
        console.log(post);
        return <Post {...post} />
    })
    // const posts = [post, post, post, post, post, post, post, post]
    return (
        postsJsx
    )
}