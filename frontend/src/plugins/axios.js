import axios from "axios"
import { getConnectionString } from '../utils/connections';

/**
 * Creates Axios Instance for Development
 */
function CreateAxiosInstanceFromEnv() {
    let baseAPI_URL = process.env.VUE_APP_URL
    let Port = process.env.VUE_APP_PORT
    baseAPI_URL = "http://" + baseAPI_URL + ":" + Port
    return axios.create({
        baseURL: baseAPI_URL
    })
}

function CreateRemoteAxiosInstance() {
    return axios.create({
        baseURL: getConnectionString()
    })
}


const install = function (Vue) {

    const DEV_STATE = "development"
    // 1. add global method or property
    Vue.myGlobalMethod = function () {

    }

    /**
     * Create authorized Axios Instance with dynamic BaseURL. 
     * If host runs on port 8080 then application is in DevMode.
     * If host runs on port 8000 or 80 then application is in Productionmode. 
     * @param {*} session Current Session from vue-session
     * @param {*} router VueJS Router
     */
    const axiosx = function CreateAuthorizedInstance() {
        let authAxiosInstance = null;
        if (process.env.NODE_ENV === DEV_STATE) {
            authAxiosInstance = CreateAxiosInstanceFromEnv()
        } else {
            authAxiosInstance = CreateRemoteAxiosInstance();
        }


        authAxiosInstance.interceptors.response.use(function (response) {
            return response;
        }, function (error) {

            if (error.response) {
                let res = error.response;
                let status = res.status;
                if (status > 200) {
                    res.data.message = res.data.message.join("<br>");
                }
                return Promise.reject(res.data);
            }
            return Promise.reject(error);
        });

        return authAxiosInstance;
    }


    Vue.prototype.$axiosx = axiosx();
}

export default {
    install
}