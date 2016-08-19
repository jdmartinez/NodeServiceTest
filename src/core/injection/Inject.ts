import { Injector } from "./Injector";

export function InjectConstructor(...keys: Array<string>): Function {
    return function (target: any) {
        let original = target;
        let injectArgs = keys.map(key => Injector.getRegistered(key));

        function construct(constructor: any, ...args: any[]) {
            let c: any = function () {
                return constructor.apply(this, args);
            }
        }

        let newCtor: any = function (...args: any[]) {
            return construct(original, injectArgs);
        }

        newCtor.prototype = original.prototype;

        return newCtor;

//        target.apply(target.prototype, args);
    }
}
