import { Op } from 'sequelize';
import Lps from '../database/models/lp.model';
import ILp from '../typescript/interfaces/ILp';

export default class LpService {
  public static async getAll(): Promise<ILp[]> {
    const lps = await Lps.findAll();
    return lps;
  }

  public static async getOne(id: number): Promise<ILp | null> {
    const lp = await Lps.findByPk(id);
    return lp;
  }

  public static getBySearchTerm(searchTerm: string): Promise<ILp[]> {
    const lps = Lps.findAll({
      where: {
        title: {
          [Op.like]: `%${searchTerm}%`,
        },
      },
    });
    return lps;
  }

  public static async create(lp: ILp | any): Promise<ILp> {
    const newLp = await Lps.create(lp);
    return newLp;
  }

  public static async update(id: number, lp: ILp): Promise<boolean> {
    const updatedLp = await Lps.update(lp, {
      where: {
        id,
      },
    });
    if (updatedLp[0] === 1) {
      return true;
    }
    return false;
  }

  public static async delete(id: number): Promise<boolean> {
    const deletedLp = await Lps.destroy({
      where: {
        id,
      },
    });
    if (deletedLp === 1) {
      return true;
    }
    return false;
  }

  public static async updatePrice(id: number, price: number): Promise<boolean> {
    const updatedLp = await Lps.update(
      {
        price,
      },
      {
        where: {
          id,
        },
      },
    );
    if (updatedLp[0] === 1) {
      return true;
    }
    return false;
  }
}
