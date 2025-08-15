import { Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware
{
    private logger = new Logger("HTTP");

    public use(req: Request, res: Response, next: NextFunction)
    {
        res.on("close", () =>
        {
            const { statusCode } = res;
            const { method, path } = req;

            let logStr = "";

            if (method === "GET")
            {
                logStr = `{${path}, ${method}} - Params: ${JSON.stringify(req.params)}`;
            }
            else
            {
                logStr = `{${path}, ${method}} - Body: ${JSON.stringify(req.body)}`;
            }

            if (statusCode >= 400)
            {
                logStr = `${statusCode} ${logStr}`;
                this.logger.error(logStr);
            }
            else
            {
                this.logger.log(`${statusCode}: ${logStr}`);
            }
        })
        next();
    }
}