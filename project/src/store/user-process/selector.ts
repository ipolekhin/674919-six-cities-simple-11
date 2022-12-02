import {NameSpace} from '../name-space';
import {State} from '../../types/state';

const NAME_SPACE = NameSpace.User;

export const getAuthorizationStatus = (state: State) => state[NAME_SPACE].authorizationStatus;

export const getLogin = (state: State) => state[NAME_SPACE].login;
