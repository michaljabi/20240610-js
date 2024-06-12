/**
 * It is a good idea to use classes and inheritance for better error handling.
 * 
 * In that case using instanceof operator - you can filter them out
 * and decide what to do.
 * 
 * Check out: c09
 */

class ViewError extends Error {

    // status = 0;

    // constructor(defMessage = 'View Error', status = 10010) {
    //     super(defMessage)
    //     this.status = status;
    // }
}

function renderSth(object) {

    if (!object) {
        throw new ViewError('Object to render is not defined!'/*, 3000*/)
    }
}

try {
    // JSON.parse(';')
    renderSth()
} catch (e) {
    console.log(e.message)
    console.log(e.constructor.name)

    // Actually we can:
    if (e instanceof ViewError) {
        console.log('Something wrong on view')
        // console.log(e.status)
    } else if (e instanceof SyntaxError) {
        console.log('Something wrong with your JSON code 🤪')
    } else if (e instanceof ReferenceError) {
        console.log('Read more about classes.. 🤪')
    } else if (e instanceof Error) {
        console.log('Generic error happened')
    }
}