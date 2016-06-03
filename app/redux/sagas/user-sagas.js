import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';

let getPokemon = function() {
  return fetch('http://pokeapi.co/api/v1/pokedex/1').then(function (response) {
    return response.json().then(function (json) {
      return json.pokemon.splice(0, 9);
    });
  });
};

function* fetchPokemon() {
  try {
    const pokemon = yield call(getPokemon);
    yield put({type: 'FETCH_USERS', users: pokemon});
  } catch (e) {
    yield put({type: 'FETCH_USERS_FAILED', error: e.message});
  }
}

export function* userSaga() {
  yield* takeEvery('FETCH_USERS_REQUESTED', fetchPokemon);
}
