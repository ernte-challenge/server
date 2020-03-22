const bcrypt = require('bcrypt');
const saltRounds = 8;

export function hashText(text: string): Promise<string> {
  return bcrypt.hash(text, saltRounds);
}

export function validateText(text: string, hash: string): Promise<boolean> {
  return bcrypt.compare(text, hash);
}
