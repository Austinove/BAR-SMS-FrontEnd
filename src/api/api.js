/* eslint-disable no-console */

export const request = async ({ url, opt }, parseJSON = true) => {
    const request = fetch(url, opt);
    if (parseJSON) {
        return request
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            })
            .catch(async error => {
                const errorResponse = await error.json();
                throw errorResponse;
            });
    }
    return request;
};

export const requestOptions = (
    method = "GET",
    token = "",
    customHeaders = {},
    opt = {},
    postFormData = false
) => {
    const reqHeaders = !postFormData
        ? {
            "Content-Type": "application/json"
        }
        : {};

    if (token) {
        reqHeaders["x-auth-token"] = token;
    }
    return {
        method: method,
        headers: {
            ...reqHeaders,
            ...customHeaders
        },
        ...opt
    };
};

export default {
    request,
    requestOptions
};
