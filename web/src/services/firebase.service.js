import firebase from './firebase';

const db = firebase.ref( `localhost:5000`);

class DataService {
  getAll() {
    return db;
  }

  create(data) {
    return db.push(data);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new DataService();