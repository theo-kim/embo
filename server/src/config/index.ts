import { resolve } from 'path';
import { Client, ClientResourceType } from './client-loader';

const client = new Client(resolve(__dirname + "../../../../client"));

export { client, ClientResourceType, Client }
