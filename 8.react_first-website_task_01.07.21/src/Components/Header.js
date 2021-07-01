import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Header() {

    const [mainMenuCollapsed, setMainMenuCollapsed] = useState(true);

    const toggleMainMenu = () => {
        setMainMenuCollapsed(!mainMenuCollapsed);
    }

    let mainMenuClasses = 'collapse navbar-collapse';
    if (!mainMenuCollapsed) {
        mainMenuClasses += ' show';
    }

    let menuTogglerBtnClasses = 'navbar-toggler';
    if (mainMenuCollapsed) {
        menuTogglerBtnClasses += ' collapsed';
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark text-light bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Logo</NavLink>
                    <button onClick={toggleMainMenu} className={menuTogglerBtnClasses} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={mainMenuClasses} id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/article">Article</NavLink>
                            <NavLink className="nav-link" to="/tags">Tags</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;