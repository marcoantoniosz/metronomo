import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Service from '../services/lp.service';
import messages from '../utils/messages';

require('express-async-errors');

export default class LpController {
  public static async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const lps = await Service.getAll();
      return res.status(StatusCodes.OK).send(lps);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
    }
  }

  public static async getOne(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    try {
      const lp = await Service.getOne(id);
      return res.status(StatusCodes.OK).send(lp);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
    }
  }

  public static async getBySearchTerm(req: Request, res: Response): Promise<Response> {
    const searchTerm = req.query.q as string;
    try {
      const lps = await Service.getBySearchTerm(searchTerm);
      if (lps.length === 0) {
        return res.status(StatusCodes.NOT_FOUND).send(messages.notFound);
      }
      return res.status(StatusCodes.OK).send(lps);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
    }
  }

  public static async create(req: Request, res: Response): Promise<Response> {
    const lp = req.body;
    try {
      const newLp = await Service.create(lp);
      return res.status(StatusCodes.CREATED).send(newLp);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
    }
  }

  public static async update(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const lp = req.body;
    try {
      await Service.update(id, lp);
      return res.status(StatusCodes.OK).send(messages.updated);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
    }
  }

  public static async delete(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    try {
      const deleted = await Service.delete(id);
      return res.status(StatusCodes.NO_CONTENT).send(deleted);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
    }
  }

  public static async updatePrice(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const price = Number(req.body.price);
    try {
      await Service.updatePrice(id, price);
      return res.status(StatusCodes.OK).send(messages.updated);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
    }
  }
}
