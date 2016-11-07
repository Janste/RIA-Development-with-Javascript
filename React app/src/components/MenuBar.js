import React from 'react';
import Search from './Search';

const MenuBar = ({children, history}) => {
    return (
        <div className="main-container">
            <nav className="navbar navbar-default" role="navigation">
                <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
                    <Search />
                </div>
            </nav>
            <div className="container">
                {children}
            </div>
        </div>
    )
};

module.exports = MenuBar;