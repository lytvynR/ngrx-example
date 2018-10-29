import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb(): {} {
    return {
      tutorial: [
        { id: 66, name: 'someStrangeName', url: 'someUrl' }
      ]
    };
  }
}
