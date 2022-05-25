import React from 'react';

function Footer() {
    return (
        <footer className="">
            <h1>
                <a className="" style={{ fontSize: '52px', padding: '10px'  }} href="https://www.linkedin.com/in/kaitlynskinner/">
                <i className="fa-brands fa-linkedin"></i>
                </a>
                <a className="" style={{ fontSize: '52px', padding: '10px'  }} href="https://github.com/kaitlynskinner">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a className="" href="mailto:kaitlyneskinner@gmail.com">
                    <i className="fa-solid fa-paper-plane" style={{ fontSize: '52px', padding: '8px'  }}></i>
                </a>
            </h1>
        </footer>
    )
}

export default Footer;