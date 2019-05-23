import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types'

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator'
import Planet from './../../services/planet';

import './random-planet.css';


const RandomPlanet = (props) => {
    const [planet, setPlanet] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const api = new Planet();
    const {updateInterval} = props;


    // const unMountHandler = () => {
    //     setPlanet(null);
    //     setError(null);
    //     setLoading(null);
    // };

    const onPlanetLoaded = (planet) => {
        setPlanet(planet);
        setError(false);
        setLoading(false);
    };
    const onError = () => {
        setLoading(false);
        setError(true);
    };

    const updatePlanet = () => {

        const id = Math.floor(Math.random() * 55 + 2);
        api._read(id)
            .then(onPlanetLoaded)
            .catch(onError);
    };


    useEffect(() => {
        updatePlanet();
        let interval = setInterval(updatePlanet, updateInterval);
        return () => clearInterval(interval);
        // return unMountHandler
    }, [setPlanet]);


    const hasData = !(loading || error)

    const isError = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = hasData ? <PlanetPreview planet={planet}/> : null;
    return (
        <div className="card random-planet jumbotron rounded">
            {spinner}
            {content}
            {isError}
        </div>
    );
};
export default RandomPlanet;
// RandomPlanet.defaultProps = {
//     updateInterval: 11000
// };
// RandomPlanet.propTypes = {
//     updateInterval: PropTypes.number
// };
const PlanetPreview = ({planet}) => {
    const {id, name, population, rotationPeriod, diameter} = planet;
    const image = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
    return (
        <React.Fragment>
            <Image src={image}/>
            <div className="ul-list">
                <h4 className="random-planet__title">Planet {name} / #{id}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
};

function Image(props) {
    return <img className="planet-image" src={props.src} alt="planet"/>;
}
