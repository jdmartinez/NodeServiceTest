import { Server } from './server';

Server.instance().run(process.env.PORT || 3000);