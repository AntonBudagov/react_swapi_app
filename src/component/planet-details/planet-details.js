import React, {Component} from 'react';
import Planet from '../../services/planet'
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";

export default class PlanetDetails extends Component {

  _service = new Planet();

  state = {
    planet: {},
    loading: true,
    error: false
  };

  componentDidMount() {
    this.updatePlanet();
  }

  componentDidUpdate(prevProps) {
    if (this.props.planetId !== prevProps.planetId) {
      this.setState({loading: true});
      this.updatePlanet();
    }
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
      error: false
    })
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    });
  }

  updatePlanet() {
    const {planetId} = this.props;
    if (!planetId) {
      return
    }
    this._service._read(planetId).then(
      this.onPlanetLoaded
    ).catch(this.onError)
  }


  render() {
    const {planet, loading, error} = this.state;

    const hasData = !(loading || error);

    const isError = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = hasData ? <PlanetPreview planet={planet}/> : null;

    return (
      <div className="jumbotron rounded">
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