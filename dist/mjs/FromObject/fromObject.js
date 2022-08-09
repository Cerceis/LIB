export const FromObject = {
    _isObj: (x) => Object.prototype.toString.call(x) === "[object Object]",
    /**
     * Convert Object into a 2-dimentional array ([[key, value], [key2, value2],...]).
     * @param inputObj Input object.
     * @returns An 2 dimentional array with a type of [[key, value], [key2, value2],...]
     */
    ObjectToArray(inputObj) {
        return Object.keys(inputObj).map((key) => { return [String(key), inputObj[key]]; });
    },
    /**
     * Flatten a multi level object.
     * @param obj Object
     * @param overwriteKey Determine if to overwrite duplicated key, default: false.
     * @returns
     */
    flatten(obj, overwriteKey = false) {
        if (Object.keys(obj).length === 0)
            return {};
        const rs = {};
        const genId = () => (new Date().getTime() / 1000 | 0).toString(16) + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () => {
            return (Math.random() * 16 | 0).toString(16);
        }).toLowerCase();
        const interRecursiveFunc = (o) => {
            for (let key in o) {
                if (this._isObj(o[key])) {
                    interRecursiveFunc(o[key]);
                }
                else {
                    if (rs.hasOwnProperty(key) && !overwriteKey) {
                        rs[genId()] = o[key];
                    }
                    else
                        rs[key] = o[key];
                }
            }
        };
        interRecursiveFunc(obj);
        return rs;
    },
    /**
     * Find and return the nested deepest object. If there are 2 result at the same depth, it will
     * return the last occur deepest object.
     * @param obj input Object;
     * @param multi return all result if multiple result is available.
     * @returns Deepest object
     */
    getDeepest(obj, multi = false) {
        if (Object.keys(obj).length === 0)
            return {};
        let deepest = 0;
        let rs = {};
        const rsMulti = {};
        const interRecursiveFunc = (o, depth = 0) => {
            depth++;
            if (depth >= deepest) {
                deepest = depth;
                rs = o;
                if (!rsMulti[depth] && multi)
                    rsMulti[depth] = [];
                if (multi)
                    rsMulti[depth].push(o);
            }
            for (let key in o) {
                if (this._isObj(o[key])) {
                    interRecursiveFunc(o[key], depth);
                }
            }
        };
        interRecursiveFunc(obj);
        return multi ? rsMulti[deepest] : rs;
    }
};
const inputObj = {
    "001": {
        name: "Cerceis",
        skills: {
            "001": "Cooking",
            "002": "Fishing",
            "003": "Reading",
            "specials": {
                "skill": "Invisible",
                "random": "PickPoket"
            }
        }
    },
    "002": {
        name: "Bob",
        skills: {
            "001": "Hunting",
            "002": "Fishing",
            "003": "Fighting",
            "specials": {
                "skill": "Power up",
                "random": "Heal"
            }
        }
    }
};
console.log(inputObj);
console.log(FromObject.getDeepest(inputObj));
console.log(FromObject.getDeepest(inputObj, true));
