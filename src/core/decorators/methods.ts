/**
 * Registers an action to be executed when GET request comes
 * on a route. Applied to class methods
 *
 * @export
 * @param {string} [route]
 * @returns {Function}
 * @seeAlso https://github.com/pleerock/routing-controllers
 */
export function Get(route?: string): Function;
export function Get(route?: RegExp): Function;
export function Get(route?: string | RegExp): Function {
    return function(object: Object, method: string) {

    };
}

