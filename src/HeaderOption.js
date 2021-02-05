import { Avatar } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./HeaderOption.css";

function HeaderOption({avatar , Icon, title, onClick}) {
    const user = useSelector(selectUser);

    return (
        <div onClick={onClick} className="headeroption">
            {Icon && <Icon className="headerOption__icon" /> }
            {avatar && (
                   <Avatar className="headerOption__icon" >{user?.email[0]}</Avatar>
            )}
            <h3 className="headeroption__title">{title}</h3>

        </div>
    )
}

export default HeaderOption
