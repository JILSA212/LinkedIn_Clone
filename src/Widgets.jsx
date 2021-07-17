import React from 'react'
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2> LinkedIn News </h2>
                <InfoIcon />
            </div>

            {newsArticle("News1 is here", "Top news - headline")}
            {newsArticle("News2 is here", "Not too Top news - headline")}
            {newsArticle("News3 is here", "Who reads all these?")}
            {newsArticle("News4 is here", "Who cares seriously?")}
        </div>
    )
}

export default Widgets
