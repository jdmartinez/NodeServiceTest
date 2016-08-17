import { HttpVerb } from "../HttpVerb";
import { ActionMetadata } from "../metadata/ActionMetadata";

/**
 * Used to decorate a class to associate a RESTful route path mapping
 * with an action
 *
 * @export
 * @param path When request comes to this route an action will be executed
 * @param verb HTTP verb to register
 * @returns {Function}
 */
export function Route(path: string, verb: HttpVerb): Function;
export function Route(path: RegExp, verb: HttpVerb): Function;
export function Route(path: string, verb: Array<HttpVerb>): Function;
export function Route(path: RegExp, verb: Array<HttpVerb>): Function;
export function Route(path: string | RegExp, verb: HttpVerb | Array<HttpVerb>): Function {
    return function (object: Object, methodName: string) {
        const metadata: ActionMetadata = {
            path: path,
            verb: verb,
            target: object
        };
    };
}