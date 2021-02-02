import { Avatar } from '@material-ui/core';
import React from 'react'
import "./HeaderOption.css";

function HeaderOption({avatar , Icon, title}) {
    return (
        <div className="headeroption">
            {Icon && <Icon className="headerOption__icon" /> }
            {avatar && (
                   <Avatar className="headerOption__icon" src={avatar}/>
            )}
            <h3 className="headeroption__title">{title}</h3>

        </div>
    )
}

export default HeaderOption
