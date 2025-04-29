export interface ILoginService<T> {
    login(email: string, password: string): Promise<String>;
}