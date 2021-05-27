import React from 'react';

function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper">
                    {/* <a href="#" class="brand-logo">Logo</a>  */}
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">About Me</a></li>
                    <li><a href="badges.html">Projects</a></li>
                </ul>
                </div>
        </nav>
    )
}

export default Navbar;