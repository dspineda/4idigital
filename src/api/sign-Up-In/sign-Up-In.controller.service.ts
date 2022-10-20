import User from './sign-Up-In.model';

export function createUser(user: string){
  return User.create(user);
}