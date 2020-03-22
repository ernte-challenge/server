const sharp = require('sharp');
import {generateRandomString} from '../util/stringUtil';
import {getRepository} from 'typeorm';
import {existsSync, mkdirSync, unlinkSync, readFileSync} from 'fs';
import {User, UserSession} from '../models';

const ALLOWED_MAX_SIZE = 500;
const fileNameLength = 24;

const companyImagePrefixPath = '/../../images/company_images/';
const userImagePrefixPath = '/../../images/user_images/';

class ImageService {
  getCompanyImage(fileName: string): Buffer {
    return this.getImage(fileName, companyImagePrefixPath);
  }

  getUserImage(fileName: string): Buffer {
    return this.getImage(fileName, userImagePrefixPath);
  }

  getImage(fileName: string, dir: string): Buffer {
    return readFileSync(__dirname + dir + fileName);
  }

  async uploadCompanyImage(filePath: string): Promise<string> {
    const newFileName = await this.saveImage(filePath, __dirname + companyImagePrefixPath);
    return newFileName;
  }

  async uploadUserImage(filePath: string): Promise<string> {
    const newFileName = await this.saveImage(filePath, __dirname + userImagePrefixPath);
    return newFileName;
  }

  async saveImage(fileName: string, dir: string): Promise<string> {
    const image = sharp(fileName);
    const metaData = await image.metadata();
    const scaleFactor = Math.max(metaData.width, metaData.height) / ALLOWED_MAX_SIZE;
    const newFileName = generateRandomString(fileNameLength);
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }
    const filePath = `${dir}${newFileName}`;
    if (scaleFactor > 1) {
      await image.resize(500).toFile(filePath);
    } else {
      await image.toFile(filePath);
    }
    unlinkSync(fileName);
    return newFileName;
  }
}

export default new ImageService();
