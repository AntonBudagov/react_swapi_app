import React, {Component} from 'react';
import Person from './../../services/people';
import './person-details.css';
import Spinner from '../spinner';
import ErrorButton from "../error-button";

export default class PersonDetails extends Component {

  _service = new Person();

  state = {
    id: null,
    name: null,
    gender: null,
    birthYear: null,
    eyeColor: null,
    population: null,
    loading: false
  };


  // constructor() {
  //   super();
  //   this.updatePerson()
  // }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    console.log('componentDidUpdate');
    if (this.props.personId !== prevProps.personId) {
      this.setState({loading: true})
      this.updatePerson();
    }

  }

  updatePerson() {
    const {personId} = this.props;
    if (!personId) {
      return
    }
    this._service._read(personId).then(person => {
      this.setState({
        ...person,
        loading: false,
      });
    })
  }

  render() {
    const {loading} = this.state;

    const spinner = loading ? <Spinner/> : null;
    const content = !loading ? <PersonPreview person={this.state}/> : null;

    // const image = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
    return (
      <div className="person-details card">
        {spinner}
        {content}

      </div>

    )
  }
}

const PersonPreview = ({person}) => {
  const {id, name, gender, birthYear, eyeColor} = person;
  const image = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
  return (
    <React.Fragment>
      <img className="person-image"
           src={image}/>

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
        <br/>
        <ErrorButton/>
      </div>
    </React.Fragment>
  )
};
