import React from 'react';

function Footer() {
    return (
        <div className="container Footer">
            <div className="row mt-4">
                <div className="col-md-3">
                    Github: <a href="https://www.linkedin.com/in/kelly-cook-5b320a1bb/" target="blank">
                        <img className="icon"
                            src="https://github.com/krcook1980/KellyCookPortfolio/blob/main/src/assets/git.png?raw=true" alt="..." />
                    </a>
                </div>
                <div className="col-md-3">

                    LinkedIn: <a href="https://www.linkedin.com/in/kelly-cook-5b320a1bb/" target="blank">
                        <img className="icon"
                            src="https://github.com/krcook1980/KellyCookPortfolio/blob/main/src/assets/li.png?raw=true" alt="..." />
                    </a>
                </div>
                <div className="col-md-3">
                    {/* Email */}
                 Email: <a href="https://www.linkedin.com/in/kelly-cook-5b320a1bb/" target="blank">
                        <img className="icon"
                            src="https://github.com/krcook1980/KellyCookPortfolio/blob/main/src/assets/email.png?raw=true" alt="..." />
                    </a>
                </div>
                <div className="col-md-3">

                        <a className="navbar-item has-text-white is-size-4 text-white"
                            href="https://drive.google.com/file/d/19sM3GQE5TbAchJwQMJ5R5WX2IaZN0QOL/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer">
                            Download My Resume Here
                </a>

                </div>
            </div>
        </div>
    )
}
export default Footer; 