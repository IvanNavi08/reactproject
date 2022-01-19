import React from "react";
import s from "./FrendsList.module.css";
import Friend from "./Friend";

import Paginator from "./Paginator";

let Friends = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount} pageSize={pageSize}/>
            {
                props.UserData.map(u => <Friend user={u}
                                                followingProgress={props.followingProgress}
                                                unfollow={props.unfollow}
                                                follow={props.follow}
                                                key={u.id}
                                                className={s.windovlist}/>
                )
            }
    </div>
}

export default Friends;