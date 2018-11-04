import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState) 

export { selectHome }