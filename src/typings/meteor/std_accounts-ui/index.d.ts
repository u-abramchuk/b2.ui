declare module 'meteor/std:accounts-ui' {
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