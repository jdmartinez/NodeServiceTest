import { Server } from "./server";
import { Config } from "./config/config";

Server.instance().run(Config.port || 3000);