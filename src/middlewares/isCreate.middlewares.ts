import { Request, Response, NextFunction } from "express";
import { AnyZodObject, ZodError } from "zod";

interface requestSchemaInterface{
    params?: AnyZodObject;
    body?: AnyZodObject;
    query?: AnyZodObject;
}

export class validadeBody{
    static execute(schema: requestSchemaInterface){
        return  async (req: Request, res: Response, next: NextFunction) => {
            try {
                if(schema.body){
                    req.body = await schema.body.parseAsync(req.body);
                } else if(schema.params){
                    req.params = await schema.params.parseAsync(req.params);
                } else if(schema.query){
                    req.query = await schema.query.parseAsync(req.query);
                }
    
                next();
            } catch (error) {
                if(error instanceof ZodError){
                    return res.status(409).json(error)
                }
            }

        }

    }
}