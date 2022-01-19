import React from "react";
import s from "./FrendsList.module.css";
import {NavLink} from "react-router-dom";

let Friend = ({user, followingProgress, unfollow, follow}) => {
    return  <div  className={s.windovlist}>
            <span className={s.fotobottom}>
                <div>
                    <NavLink to={'/profile/' +user.id}>
                    <img alt={'someimage'} src={user.photos.small != null ?
                        user.photos.small : "https://encrypted-tbn0.gstatic.com/images?" +
                        "q=tbn:ANd9GcR_x0mc_P6TJzhQc3VYXr7gHNXA9-UXEm-yKw&usqp=CAU"} className={s.foto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingProgress.some(id=> id===user.id)} onClick={() => {
                                unfollow(user.id)
                            }} className={s.bottom}>unfollow</button>
                            : <button disabled={followingProgress.some(id=> id===user.id)} onClick={() => {
                                follow(user.id)
                            }} className={s.bottom}>follow</button>
                        }
                    </div>
            </span>
                    <span className={s.datafriend}>
                        <span>
                            <div className={s.data}>{user.name}</div>
                            <div className={s.data}>{user.status}</div>
                        </span>
                        <span>
                        </span>
                    </span>
                </div>
}

export default Friend;