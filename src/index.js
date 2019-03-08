import React from 'react';
import ReactDom from 'react-dom';
import App from './component/app';

ReactDom.render(<App/>, document.getElementById('root'))


// import People from './services/people';
//
//
// const p = new People();
// p.read(1).then(d => {
//   console.log(d);
// })
// p.list().then(d => {
//   console.log(d);
// })
// class SwapiService {
//
//   _apiBase = 'https://swapi.co/api';
//   constructor(url, endpoint) {
//     this.url = url;
//     this.endpoint = endpoint;
//   }
//   async read () {
//     const response = await fetch(`${this._apiBase}${this.endpoint}${this.url}`);
//     if(!response.ok) {
//       throw new Error(`Could not fetch ${this.url}, received ${response.status}`)
//     }
//     const body = await response.json();
//     return body;
//   };
//
//   async list() {
//     const response = await this.read(this.endpoint);
//     return response.results
//     // const response = await this.read()
//     // return response.results
//   }
// }

// const _swapi = new SwapiService();
//
// _swapi.read('/planets/1/').then((data) => {
//   console.log(data);
// });
// _swapi.list().then((data) => {
//  data.forEach(({name}) =>
//   console.log(name))
// })
//
//
// _swapi.read('/people/3').then((data) => {
//   console.log('_'+data.name);
// })


// class People extends SwapiService{
//   // endpoint = '/people/';
//   constructor(url, endpoint) {
//     super(url = '', endpoint = '/people/')
//   }
//   read() {
//     return super.read(`${this.endpoint}${this.url}`)
//   }
//   list() {
//     return super.list(this.endpoint)
//   }
// }


// const read = async (url) => {
//   const response = await fetch(url);
//   if(!response.ok) {
//     throw new Error(`Could not fetch ${url}, received ${response.status}`)
//   }
//   const body = await response.json();
//   return body;
// };


// fetch('https://swapi.co/api/planets/1/').then((data) => {
//   console.log('Got response', data);
//   return  data.json();
// }).then((body) => {
//   console.log(body);
// });

// read('https://swapi.co/api/planets/13/').then((data) => {
//   console.log(data);
// }).catch((error) => {
//   console.error('Could not fetch: ', error);
// });
