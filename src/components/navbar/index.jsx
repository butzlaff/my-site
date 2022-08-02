import React, { Fragment } from "react";



const Navbar = () => {
    return (
        <Fragment>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a href="/" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href="/">Home</a>
                        <a href="/" className="navbar-item">About</a>
                        <a href="/" className="navbar-item">Jobs</a>
                        <a href="/" className="navbar-item">Contact</a>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a href="/" className="navbar-link">More</a>
                            <div className="navbar-dropdown">
                                <hr className="navbar-divider" />
                                <a href="/" className="navbar-item">Report an issue</a>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary" href="/register">
                                    <strong>Sign up</strong>
                                </a>
                                <a className="button is-light" href="/login">Log in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar;