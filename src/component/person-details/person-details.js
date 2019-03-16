import React, {Component} from 'react';
import Person from './../../services/people';
import './person-details.css';

export default class PersonDetails extends Component {

  _service = new Person();

  state = {
    id: null,
    name: null,
    gender: null,
    birthYear: null,
    eyeColor: null,
    population: null
  }

  constructor() {
    super();
    this.updatePerson()
  }

  updatePerson() {
    this._service._read(4).then(person => {
      this.setState({...person});
    })
  }

  render() {
    const {id, name, gender, birthYear, eyeColor} = this.state
    const image = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
    return (
      <div className="person-details card">
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
        </div>
      </div>
    )
  }
}
