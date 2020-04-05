import { Firebase } from '../Firebase';
import { NewUser } from './models/NewUser';
import { User } from './models/User';

export class UserService {
	private USER_DOCUMENT_NAME = '/users/';

	createNewUser(newUser: NewUser): Promise<User> {
		return new Promise((reject, resolve) => {
			let user = new User("", newUser.name, newUser.email);
			Firebase.auth()
				.createUserWithEmailAndPassword(newUser.email, newUser.password)
				.then((credentials) => {
					user.id = credentials.user.uid;
					return Promise.all([
						Firebase.database().ref(this.USER_DOCUMENT_NAME + credentials.user.uid).set({
							name: newUser.name,
							email: newUser.email,
							country: newUser.country
						}),
						credentials.user.updateProfile({
							displayName: newUser.name,
							photoURL: null
						})
					]);
				})
				.then((data) => resolve(user))
				.catch((error) => reject(error));
		});
	}
}
