import { HttpVerb } from "../HttpVerb";

/**
 * Action metadata used to storage information about registered actions
 *
 * @export
 * @class ActionMetadata
 */
export class ActionMetadata {

    /**
     * Route to be registered
     *
     * @type {(string | RegExp)}
     */
    path: string | RegExp;

    /**
     * HTTP Verb used for registered route
     *
     * @type {string}
     */
    verb: HttpVerb | Array<HttpVerb>;

    /**
     * Class on which's method is attached
     *
     * @type {Function}
     */
    target: Object;

}