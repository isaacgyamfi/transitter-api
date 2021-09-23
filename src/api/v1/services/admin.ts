import { hash, compare } from 'bcrypt';
import { IAdmin } from '../interfaces/admin';
import { Admin } from '../models/Admin';
import { generateToken } from '../middlewares/authJWT';

export const saveNewAdmin = async (data: IAdmin): Promise<any> => {
  try {
    const hashedPassword = await hash(data.password, 12);
    return await Admin.create(data);
  } catch (error) {
    return false;
  }
};

export const getAdmins = async (): Promise<any> => {
  try {
    return await Admin.find();
  } catch (error) {
    return false;
  }
};

export const authenticatePublisher = async ({ email, password }: any): Promise<any | boolean> => {
  try {
    const user = await Admin.findOne({ where: { email } });
    if (!user) return false;
    const checkPassword = await compare(password, user?.password);
    if (!checkPassword) return false;
    return generateToken(user);
  } catch (e) {
    return false;
  }
};
