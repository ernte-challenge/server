import {User, UserSession} from '../models';
import {Request} from 'restify';
import {getRepository} from 'typeorm';

// Ein Tag
const sessionValidationTime = 1000 * 60 * 60 * 24;

export class SessionService {
  private getSessionId(req: Request): string | void {
    const cookies = (req as any).cookies;
    return cookies.SessionId;
  }

  public async getSessionUser(sessionId: number): Promise<User> {
    const userSession = await getRepository(UserSession).findOne(sessionId);
    const user = await getRepository(User).findOne(userSession.user);
    return user;
  }

  public async createSessionForUser(user: User): Promise<string> {
    const userSession = new UserSession();
    const now = new Date();
    const validTill = new Date(now.getTime() + sessionValidationTime);
    userSession.user = user.id;
    userSession.validTill = validTill;
    await getRepository(UserSession).save(userSession);
    return userSession.id;
  }

  public async getSession(req: Request): Promise<UserSession> {
    const sessionId = this.getSessionId(req);
    if (!sessionId) {
      throw new Error('MissingSessionId');
    }
    const userSession = await getRepository(UserSession).findOne(sessionId);
    return userSession;
  }

  public async deleteSession(req: Request): Promise<void> {
    const sessionId = this.getSessionId(req);
    if (!sessionId) {
      return;
    }
    await getRepository(UserSession).delete(sessionId);
  }
}

export default new SessionService();
