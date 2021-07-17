import { Avatar } from '@material-ui/core';
import React from 'react'
import { selectUser } from './features/userSlice';
import "./Sidebar.css";
import { useSelector } from 'react-redux';

function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            {/* <h1> I am a sidebar </h1> */}

            <div className="sidebar__top">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR71f8nzbKdUrf_ERQv2qOLaZ1UKZUjkHmORw&usqp=CAU" alt="" />
                <Avatar src={user.photoUrl} className="sidebar__avatar" > {user.email[0]} </Avatar>
                <h2> {user.displayName} </h2>
                <h4> {user.email} </h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p> Who viewed you </p>
                    <p className="sidebar__statNumber"> 2,543 </p>
                </div>
                <div className="sidebar__stat">
                    <p> Who viewed you </p>
                    <p className="sidebar__statNumber"> 4,268 </p>
                </div>

            </div>
            <div className="sidebar__bottom">
                <p> Recent </p>
                {recentItem("Reactjs")}
                {recentItem("programming")}
                {recentItem("softwareengineering")}
                {recentItem("design")}
                {recentItem("developer")}
            </div>
        </div>

    )
}

export default Sidebar
