declare module 'meteor/std:accounts-ui' {
    // interface IReactMeteorData {
    //     data: any;
    // }

    // export const ReactMeteorData: IReactMeteorData;

    interface IUi {
        config: any;
        LoginForm: any;
    }

    interface IAccounts {
        ui: any;
        config: any;
    }

    export const Accounts: IAccounts;
}