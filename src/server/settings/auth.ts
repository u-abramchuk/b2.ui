enum LoginStyle {
    popup,
    redirect
}

export interface AuthSettings {
    clientId: string;
    secret: string;
    loginStyle: LoginStyle
}