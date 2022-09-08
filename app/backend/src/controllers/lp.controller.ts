import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Service from '../services/lp.service';

export default class LpController {
  public static async getAll(req: Request, res: Response): Promise<Response> {
    const lps = await Service.getAll();
    return res.status(StatusCodes.OK).send(lps);
  }

  public static async getOne(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const lp = await Service.getOne(id);
    return res.status(StatusCodes.OK).send(lp);
  }

  public static async getBySearchTerm(req: Request, res: Response): Promise<Response> {
    const searchTerm = req.query.searchTerm as string;
    const lps = await Service.getBySearchTerm(searchTerm);
    return res.status(StatusCodes.OK).send(lps);
  }

  public static async create(req: Request, res: Response): Promise<Response> {
    const lp = req.body;
    const newLp = await Service.create(lp);
    return res.status(StatusCodes.CREATED).send(newLp);
  }

  public static async update(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const lp = req.body;
    const updated = await Service.update(id, lp);
    return res.status(StatusCodes.NO_CONTENT).send(updated);
  }

  public static async delete(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const deleted = await Service.delete(id);
    return res.status(StatusCodes.NO_CONTENT).send(deleted);
  }

  public static async updatePrice(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const price = Number(req.body.price);
    const updated = await Service.updatePrice(id, price);
    return res.status(StatusCodes.NO_CONTENT).send(updated);
  }
}
