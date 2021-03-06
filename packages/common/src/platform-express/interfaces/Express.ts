import {RequestContext, RequestLogger} from "../../platform";

namespace Express {
  export interface NextFunction extends Function {}

  export interface Response {
    headersSent: boolean;
  }

  export interface Application {}

  export interface Request {
    id: string;
    ctx: RequestContext;
    /**
     * @deprecated
     */
    log: RequestLogger;
  }
}
