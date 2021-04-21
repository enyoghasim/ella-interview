import React from "react";
import PropTypes from 'prop-types';
import Card from "../../components/card/index";
import "./index.css";

const Film = () => {
  return (
    <>
      <div className="films-page">
        <div className="film-details">
          <div className="left-section">
            <div className="header">A New Hope</div>
            <div className="film-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quis
              quisquam fugit dolorum, rem beatae magnam culpa, voluptates harum
              exercitationem dolore est reiciendis tempora. Eius architecto esse
              suscipit deserunt quae numquam unde rem atque, quibusdam, iure
              voluptate est maiores delectus aliquid distinctio voluptatibus
              alias. Expedita ducimus ad explicabo dolores earum.
            </div>
          </div>
          <div className="right-section">
            <div className="rating-wrapper-contain">
              Rate:{(true) ? (<span class="fa fa-heart checked"></span>) : (<span class="fa fa-heart"></span>)}
            </div>
            <div className="director">Directed By : John Hawking</div>
            <div className="producer">Produced By : Corner cole</div>
            <div className="release-date">Released On : 21-44-5890</div>
          </div>
        </div>
        <div className="details-wrapper">
          <Card>
            <div className="character-header">Vehicles</div>
            <div className="character">https://starwars.com/ok.o</div>
            <div className="character">https://starwars.com/ok.o</div>
            <div className="character">https://starwars.com/ok.o</div>
            <div className="character">https://starwars.com/ok.o</div>
            <div className="character">https://starwars.com/ok.o</div>
          </Card>
        </div>
      </div>
    </>
  );
};

Film.propTypes = {
  children: PropTypes.element
}

export default Film;
