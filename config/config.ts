import * as fs from "fs";

interface Config {
    root: string;
    host: string;
    port: number;
}

export const Config = <Config>JSON.parse(fs.readFileSync("config/config.json", "utf-8"));

