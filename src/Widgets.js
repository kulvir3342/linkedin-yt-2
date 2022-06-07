import React from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import NewsArticle from './NewsArticle';

function Widgets() {

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            <NewsArticle heading="PAPA React is back" subtitle="Top news - 9099 readers" />
            <NewsArticle heading="Coronavirus: UK updates" subtitle="Top news - 886 readers" />
            <NewsArticle heading="Tesla hits new highs" subtitle="Cars auto - 300 readers" />
            <NewsArticle heading="Bitcoin Breaks $22k" subtitle="Crypto - 8000 readers" />
            <NewsArticle heading="Is Redux too good?" subtitle="Code - 123 readers" />
            <NewsArticle heading="PAPA React launches course?!" subtitle="Top news - 6503 readers" />
        </div>
    );
}

export default Widgets;
