import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Service from '../services/lp.service';
import messages from '../utils/messages';

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
    const searchTerm = req.query.q as string;
    console.log(searchTerm);
    const lps = await Service.getBySearchTerm(searchTerm);
    if (lps.length === 0) {
      return res.status(StatusCodes.NOT_FOUND).send(messages.notFound);
    }
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
    await Service.update(id, lp);
    return res.status(StatusCodes.OK).send(messages.updated);
  }

  public static async delete(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const deleted = await Service.delete(id);
    return res.status(StatusCodes.NO_CONTENT).send(deleted);
  }

  public static async updatePrice(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const price = Number(req.body.price);
    await Service.updatePrice(id, price);
    return res.status(StatusCodes.OK).send(messages.updated);
  }
}
