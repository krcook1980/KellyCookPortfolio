import React from 'react';

function Card({card}) {
    return(
        <div className="cardImg mb-5">
              <div className="card-body text-white About ">
                <h4 className="card-title text-center">
                    <a href={card.link} className="text-white" target="_blank" rel="noreferrer">{card.alt}</a>
                </h4>
                <h5>
                    <a href={card.repo} className="text-white"  target="_blank" rel="noreferrer">See The Repository</a>
                </h5>
                <p className="text-muted">{card.why}</p>
            </div>

            <img src={card.src} className="card-img-top" alt={card.alt} />
          
            <div className="cardText">
                <p>{card.text}</p>
            </div>
            
        </div>
    )
}
export default Card;