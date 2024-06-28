/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('hi')
        },millis)
    })
}