import winston, { createLogger, format, transports } from "winston";
import dotenv from "dotenv";

const config = dotenv.config();
export type Logger = {
    error: (message: any) => void;
    info: (message: any) => void;
    debug: (message: any) => void;
}

export default createLogger({
        level: process.env.LOG_LEVEL,
        format: format.simple(),
        transports: [
            new transports.Console()
        ]
    });