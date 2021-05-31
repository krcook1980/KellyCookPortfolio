import React from 'react';
import Resume from '../assets/Resume.pdf'

function Footer() {
    return (
        <div className="container Footer">
            <div className="row mt-4">
                <div className="col-md-3">
                    Github: <a href="https://github.com/krcook1980" target="blank">
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
                 Email: <a href="mailto:kellyrcook1980@gmail.com" target="blank">
                        <img className="icon"
                            src="https://github.com/krcook1980/KellyCookPortfolio/blob/main/src/assets/email.png?raw=true" alt="..." />
                    </a>
                </div>
                <div className="col-md-3">

                <a href={Resume} download={Resume} className="text-info">Download My Resume Here</a>

                </div>
            </div>
        </div>
    )
}
export default Footer; 
