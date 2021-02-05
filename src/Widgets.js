import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__aritcle">
            <div className="widgets__aritcleLeft">
                <FiberManualRecordIcon/>
            </div>

            <div className="widgets__aritcleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>

            {newsArticle("i am back the world will change","i will destroy and take over everything")}
            {newsArticle("I am back the world will change","i will destroy and take over everything")}
            {newsArticle("I am back the world will change","i will destroy and take over everything")}
            {newsArticle("I am back the world will change","i will destroy and take over everything")}
            {newsArticle("I am back the world will change","i will destroy and take over everything")}
            {newsArticle("I am back the world will change","i will destroy and take over everything")}
        </div>
    )
}

export default Widgets
