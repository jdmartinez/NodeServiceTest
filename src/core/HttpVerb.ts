/**
 * HTTP Verbs enumeration
 *
 * @export
 * @type HttpVerb
 */
export type HttpVerb = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";


/**
 * HTTP Verb static acctess class
 *
 * @export
 * @class HttpAction
 */
export class HttpAction {
    public static Get: HttpVerb = "GET";
    public static Post: HttpVerb  = "POST";
    public static Put: HttpVerb  = "PUT";
    public static Delete: HttpVerb  = "DELETE";
    public static Patch: HttpVerb  = "PATCH";
    public static Options: HttpVerb  = "OPTIONS";
    public static Head: HttpVerb  = "HEAD"

    public static All: Array<HttpVerb> = [
        HttpAction.Get,
        HttpAction.Post,
        HttpAction.Put,
        HttpAction.Delete,
        HttpAction.Patch,
        HttpAction.Options,
        HttpAction.Head
    ];
}

