import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';


function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/vstatic/svg/124/124011.svg?token=exp=1612033223~hmac=76d0027bafc41a6fcd8f5ed53a8f2cdd" alt=""/>

                <div className="header__search">
                      {/*search icon */}
                      <SearchIcon/>
                      <input type="text" placeholder="Search" ></input>
                </div>
            </div>

            <div className="header__right">
                    <HeaderOption Icon={HomeIcon} title="Home" />
                    <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                    <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                    <HeaderOption Icon={ChatIcon} title="Messaging" />
                    <HeaderOption Icon={NotificationsIcon} title="Notification" />
                    <HeaderOption avatar="https://upload.wikimedia.org/wikipedia/en/c/c7/Wikipedia_profile_photo_%28Tronic2%29.jpg" title="Guy"/>
     

            </div>
        </div>
    )
}

export default Header
