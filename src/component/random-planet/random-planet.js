import React, {Component} from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator'
import Planet from './../../services/planet';

import './random-planet.css';


export default class RandomPlanet extends Component {

  _service = new Planet()
  state = {
    planet: {},
    loading: true,
    error: false
  };

  // constructor() {
  //   super();
  //   console.log('constructor');
  //   this.updatePlanet();
  //   setInterval(this.updatePlanet, 1000);
  // }

  componentDidMount() {
    this.updatePlanet();
    // setInterval(this.updatePlanet, 1000);
    this.interval = setInterval(this.updatePlanet, 11000);
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    clearInterval(this.interval)
    console.log('componentWillUnMount');
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
      error: false
    })
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    });
  }

  updatePlanet = () => {
    console.log('update');
    const id = Math.floor(Math.random() * 55 + 2);
    this._service._read(id).then(
      this.onPlanetLoaded
    ).catch(this.onError)
  }


  render() {
    console.log('render');
    const {planet, loading, error} = this.state;

    const hasData = !(loading || error)

    const isError = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = hasData ? <PlanetPreview planet={planet}/> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {spinner}
        {content}
        {isError}
      </div>
    );

  }
}

const PlanetPreview = ({planet}) => {
  const {id, name, population, rotationPeriod, diameter} = planet;
  const image = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
  return (
    <React.Fragment>
      <Image src={image}/>
      <div>
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
}

function Image(props) {
  return <img className="planet-image" src={props.src} alt="planet"/>;
}