import { SIGN_IN, SIGN_OUT } from './types';

//action creator to sign in

export const signIn = () => {
	return {
		type: SIGN_IN
	};
};

//action creator to sign out

export const signOut = () => {
	return {
		type: SIGN_OUT
	};
};

