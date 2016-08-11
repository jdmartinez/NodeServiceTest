import * as winston from "winston";

const Logger = new winston.Logger({
    exitOnError: false, 

    transports: [
        new winston.transports.Console({
            level: "debug",
            handleExceptions: true,
            json: false,
            colorize: true,
            prettyPrint: true,
        })
    ]
});

export { Logger };
