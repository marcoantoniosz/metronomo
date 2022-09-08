import { Request, Response, NextFunction } from 'express';
import * as Joi from 'joi';
import { StatusCodes } from 'http-status-codes';
import LpService from '../services/lp.service';
import messages from '../utils/messages';

export default class LpMiddleware {
  public static async validateId(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const id = Number(req.params.id);
    const lp = await LpService.getOne(id);
    if (!lp) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .send(messages.notFound);
    }
    next();
  }

  public static validateBody(req: Request, res: Response, next: NextFunction) {
    const schema = Joi.object({
      title: Joi.string().required(),
      image: Joi.string().required(),
      artist: Joi.string().required(),
      genre: Joi.string().required(),
      description: Joi.string().required(),
      price: Joi.number().required(),
    });
    const { body } = req;
    const { error } = schema.validate(body);
    if (!error) {
      return next();
    }
    return res.status(StatusCodes.BAD_REQUEST).send(messages.filedsMissing);
  }

  public static validatePrice(req: Request, res: Response, next: NextFunction) {
    const schema = Joi.object({
      price: Joi.number().required(),
    });
    const { body } = req;
    const { error } = schema.validate(body);
    if (!error) {
      return next();
    }
    return res.status(StatusCodes.BAD_REQUEST).send(messages.filedsMissing);
  }

  public static async validateQuery(req: Request, res: Response, next: NextFunction) {
    const schema = Joi.object({
      q: Joi.string().required(),
    });
    const { query } = req;
    const { error } = schema.validate(query);
    if (!error) {
      return next();
    }
    return res.status(StatusCodes.BAD_REQUEST).send(messages.filedsMissing);
  }
}
