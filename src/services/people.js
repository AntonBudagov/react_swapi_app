import AppService from './app';

export default class People extends AppService {
  constructor(endpoint) {
    super(endpoint = '/people/')
  }
  read(id) {
    return super.read(id)
  }
  list() {
    return super.list()
  }
}