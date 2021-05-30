import React from 'react';
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';
import Resume from '../assets/Resume.pdf'
const MyDoc = () => (
    <Document>
        <Page>
            <h4><a href={Resume} download={Resume}>Download My Resume Here</a></h4>
        </Page>
    </Document>
);


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
            <div className="mt-2">
                <PDFDownloadLink document={<MyDoc />} fileName="Resume.pdf">
                    <MyDoc />
                </PDFDownloadLink>
            </div>

        </div>
    )
}

export default P4;
