import { Mongo } from 'meteor/mongo';

export interface Workspace {
    id: string;
    name: string;
}

export const Workspaces = new Mongo.Collection<Workspace>('workspaces');