exports.info = (message) => {
    console.log(`INFO: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}: ${message}`)
}

exports.verbose = (message) => {
    console.log(`VERBOSE: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}: ${message}`)
}
