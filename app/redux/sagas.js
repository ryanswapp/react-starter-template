import { userSaga } from './sagas/user-sagas';

export default function* rootSaga() {
  yield [
    userSaga()
  ];
}
