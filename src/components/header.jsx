import React from "react";


const Header = () => {
        return(
            <header>
        <div className="container">
            <div className="flex jus-space flex-origin">
                <div className="flex flex-origin">
                    <div className="logo">My Chat</div>
                    <div className="logo-text">7 users 9 messages</div>
                </div>
                <div>
                    <div className="data">Last message: 2019-08/18 15:15:07</div>
                </div>
            </div>
        </div>
    </header>
        );
}

export default Header;