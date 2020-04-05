import { User } from '../../services/models/User';
import { Firebase } from '../../Firebase';
import parseFirebaseError from '../../utils/FirebaseErrorParser';
import { useHistory } from 'react-router-dom';
import AppRoute from '../appRoute';
import firebase from 'firebase';

export class AuthenticationManager {
	static user: User | void = null;
	static manager: AuthenticationManager | void = null;
	private history = useHistory();

	static getInstance(): AuthenticationManager {
		if (AuthenticationManager.manager) {
			return AuthenticationManager.manager;
		}

		AuthenticationManager.manager = new AuthenticationManager();
		return AuthenticationManager.manager;
	}

	static logout() {
		Firebase.auth().signOut();
	}

	static login(email: string, password) {
		Firebase.auth()
			.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
			.then(() => {
				return Firebase.auth().signInWithEmailAndPassword(email, password);
			})
			.catch((error) => {
				alert(parseFirebaseError(error));
			});
	}

	observeAuth() {
		Firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				AuthenticationManager.user = new User(user.uid, user.displayName, user.email);
				this.history.push(AppRoute.Home);
			} else {
				AuthenticationManager.user = null;
			}
		});
	}
}
