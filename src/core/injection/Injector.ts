export class Injector {

    private static store: {[key: string]: any} = {};

    public static register(key: string, value: any) {

        if (Injector.store[key]) {
            throw new Error(`Error: ${key} is already registered`);
        }

        Injector.store[key] = value;

    }

    public static getRegistered(key: string): any {

        let registered = Injector.store[key];

        if (registered) {
            return registered;
        } else {
            throw new Error(`Error: ${key} is not registered`);
        }


    }

}