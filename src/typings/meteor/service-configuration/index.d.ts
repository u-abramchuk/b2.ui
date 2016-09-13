declare module 'meteor/service-configuration' {
    import { Mongo } from 'meteor/mongo';

    interface IServiceConfiguration {
        configurations: Mongo.Collection<any>;
    }

    export const ServiceConfiguration: IServiceConfiguration;
}