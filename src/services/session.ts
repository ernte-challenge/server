import {User, UserSession} from '../models';
import {getRepository} from 'typeorm';

export class SessionService {
  public async getSessionUser(sessionId: number): Promise<User> {
    const userSession = await getRepository(UserSession).findOne(sessionId);
    const user = await getRepository(User).findOne(userSession.user);
    return user;
  }
}

export default new SessionService();
