import { RequestHandler, Application } from "express";
import { Logger } from "src/logger";

type EndpointProperty = {
    method: 'get' | 'post' | 'put' | 'delete';
    uri: string;
    routers: RequestHandler[]
}

export default (app: Application, logger: Logger) => {
    const routers: EndpointProperty[] = [
        {
            method: 'get',
            uri: '/api/test',
            routers: []     
        }
    ];
}