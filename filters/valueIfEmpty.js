/*
A default value formatter filter for Nunjucks
*/
module.exports = function (value, defaultValue) {
    const valueType = typeof value

    // return early for undefined
    if (valueType === 'undefined') {
        return defaultValue
    }

    // if string but no value return default value
    if (valueType === 'string' && !value.length) {
        return defaultValue
    }

    return value
  }