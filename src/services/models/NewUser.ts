export class NewUser {
	name: string;
	email: string;
	password: string;
	country: string;

	constructor(name: string, email: string, password: string, country: string) {
		this.name = name;
		this.email = email;
		this.password = password;
		this.country = country;
	}
}
