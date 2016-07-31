import { userSaga } from 'App/views/UsersList/state/sagas.js';

export default function* rootSaga() {
  yield [
    userSaga()
  ];
}
