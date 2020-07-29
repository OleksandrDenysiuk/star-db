const compose = (...funcs) => (comp) => {
    return funcs.reduceRight(((previousValue, f) => f(prevResult)), comp);
};

export default compose;