import AppService from './app';

export default class Planet extends AppService {
  constructor(endpoint) {
    super(endpoint = '/planets/')
  }
  read(id) {
    return super.read(id)
  }
  list() {
    return super.list()
  }
}