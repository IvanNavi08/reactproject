import React from "react";
import s from "./NevPost.module.css"
import NewPostRedux from "./NewPostForm";


const NevPost = React.memo(props => {
        let addNewPost = (values) => {
            props.addPostAndReset(values.newPostText)
        };
        return (
            <div className={s.post}>
                <NewPostRedux onSubmit={addNewPost}/>
            </div>
        )
    })
export default NevPost;