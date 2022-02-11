const BACKEND_PORT = process.env.VUE_APP_PORT;
const PROTOCOL = "http"
const DEV_STATE = "development"


function getConnectionString(protocol) {
    let origin = getOrigin(protocol);
    return `${origin}:${BACKEND_PORT}`
}

function getOrigin(protocol) {
    let protocolName;
    let connection;
    if (!protocol) {
        protocolName = PROTOCOL;
    } else {
        protocolName = PROTOCOL;
    }

    if (process.env.NODE_ENV === DEV_STATE) {
        let baseAPI_URL = process.env.VUE_APP_URL
        connection = `${protocolName}://${baseAPI_URL}`
    } else {
        connection = `${protocolName}://${window.location.hostname}`
    }
    return connection;
}

module.exports = { getConnectionString, getOrigin }
