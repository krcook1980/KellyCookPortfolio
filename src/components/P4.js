import React from 'react';


function P4() {
    return (
        <div className="P4 rounded">
            <h2>Vital Socials</h2>

            <div className="row mt-4">
                <div className="col-md-4">
                    Github: <a href="https://github.com/krcook1980" target="blank">
                        <img className="icon"
                            src="https://github.com/krcook1980/KellyCookPortfolio/blob/main/src/assets/git.png?raw=true" alt="..." />
                    </a>
                </div>
                <div className="col-md-4">

                    LinkedIn: <a href="https://www.linkedin.com/in/kelly-cook-5b320a1bb/" target="blank">
                        <img className="icon"
                            src="https://github.com/krcook1980/KellyCookPortfolio/blob/main/src/assets/li.png?raw=true" alt="..." />
                    </a>
                </div>
                <div className="col-md-4">
                    {/* Email */}
                 Email: <a href="mailto:kellyrcook1980@gmail.com" target="blank">
                        <img className="icon"
                            src="https://github.com/krcook1980/KellyCookPortfolio/blob/main/src/assets/email.png?raw=true" alt="..." />
                    </a>
                </div>
            </div>
            <h4 className="text-center mt-4">   
                           <a className="navbar-item has-text-white is-size-4 text-info" 
                    href="https://drive.google.com/file/d/19sM3GQE5TbAchJwQMJ5R5WX2IaZN0QOL/view?usp=sharing" download 
                    target="_blank" 
                    rel="noreferrer">
                   Download My Resume Here
                </a>
            </h4>

        </div>
    )
}

export default P4;