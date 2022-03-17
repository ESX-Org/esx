import {attachMeta, getMeta} from "../meta";
import {CLASSWIDE_META, INTERNAL_ARGS, metaName} from "../constants";
import {ClassReflector} from "../classes/reflector";

/**
 * Attaches metadata to the receiver of the decorator
 * @param key
 * @param value
 * @constructor
 */
export const Meta = (key: string, value: any) => {
    return (target: any, memberName?: string, propertyDescr?: PropertyDescriptor) => {
        const parsedTarget = memberName ? target : target.prototype
        attachMeta(parsedTarget, memberName || CLASSWIDE_META, metaName(key), value)
    }
}


/**
 * Gets the `ClassReflector` of the current class
 * @constructor
 */
export const Reflector = () => {
return (target: Object, propKey: string, idx: number) => {
    const map: any[] = getMeta<any[]>(target, propKey, INTERNAL_ARGS) || []
    map[idx] = new ClassReflector(target, propKey)
    attachMeta(target, propKey, INTERNAL_ARGS, map)
}
}