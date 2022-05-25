import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {
        setCurrentCategory,
        currentCategory
    } = props;

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="cell-phone"> 📱 Kaitlyn Skinner</span> 
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about" onClick={() => setCurrentCategory('About')}>
                            About me
                        </a>
                    </li>
                    {/* { } to contain the JavaScript expression, as well as the template literal to interpolate the JavaScript statement. */}
                    <li className='mx-2'>
                        <span onClick={() => setCurrentCategory('Contact')}>Contact</span>
                    </li>
                    <li className="mx-2">
                        <a href="#projects" onClick={() => setCurrentCategory('Projects')}>
                            Projects
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#resume" onClick={() => setCurrentCategory('Resume')}>
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header> 
    );
}

export default Nav;