import React from "react";
import s from "./Post.module.css";



const Post = (props) => {
    return (
        <div className={s.postfail}>
           <div> <img src={props.ava}/></div>
            <div><span>{props.text}</span></div>
        </div>
    );
}

export default Post;