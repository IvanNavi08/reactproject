import React from "react";
import s from "./Post.module.css";
import Post from "./Post";


const Posts = (props) => {

    return (
    <div className={s.posts}>
        {props.PostData.map(element => <Post text={element.text} ava={element.ava}/>)|| null}
    </div>
)}




export default Posts;