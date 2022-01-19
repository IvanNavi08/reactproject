import React from "react";
import {connect} from "react-redux";
import {
    follow, getFrinds,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow
} from "../Redux/frinds-reducer";
import Friends from "./Friends";
import Scrolls from "../../Fail/scroll";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingProgress,
    getFriends,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "../Redux/frinds-selectors";

class FriendsListAPIComponents extends React.Component {
    componentDidMount() {
        this.props.getFrinds(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber, pageSize) => {
        this.props.getFrinds(pageNumber, pageSize)
    }
    render() {
        return <>
            {this.props.isFetching ? <Scrolls/> :null}
            <Friends totalUsersCount={this.props.totalUsersCount}
                     pageSize={this.props.pageSize}
                     currentPage={this.props.currentPage}
                     onPageChanged={this.onPageChanged}
                     UserData={this.props.UserData}
                     follow={this.props.follow}
                     unfollow={this.props.unfollow}
                     followingProgress={this.props.followingProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return{
        UserData: getFriends(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state)
    }
}

export default compose (
    connect (mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getFrinds,})
    ) (FriendsListAPIComponents);


