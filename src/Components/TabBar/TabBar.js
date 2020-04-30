import React from 'react';
import './index.css';

function TabBar() {
    return (
        <div className= 'profile-nav'>
            <nav>
                <a href='/#'>Overview</a>
                <a href='/#'>Repositories</a>
                <a href='/#'>Projects</a>
                <a href='/#'>Stars</a>
                <a href='/#'>Followers</a>
                <a href='/#'>Following</a>
            </nav>
        </div>
    )
}

export default TabBar;