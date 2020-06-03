//Reading
export const fetchData = (url, token) => {
    const reqHeaders = {
            "Content-type": "application/json"
        };
    if (token) {
        reqHeaders = {
            "Content-type": "application/json",
            ["auth-token"]: token
        }
    }

    fetch(url, {
        method: "get",
        headers: reqHeaders
    }).then(response => {
        return ({ response });
    })
        .catch(error => {
            return (error)
        })
};
//Create
export const create = (url, token, body) => {
    const reqHeaders = {
            "Content-type": "application/json"
        };
    if (token) {
        reqHeaders = {
            "Content-type": "application/json",
            ["auth-token"]: token
        }
    }

    fetch(url, {
        method: "post",
        headers: reqHeaders,
        body: body,
    }).then(response => {
        return ({ response });
    })
        .catch(error => {
            return (error)
        })
};
//Editing
export const update = (url, token, body) => {
    const reqHeaders = {
            "Content-type": "application/json"
        };
    if (token) {
        reqHeaders = {
            "Content-type": "application/json",
            ["auth-token"]: token
        }
    }

    fetch(url, {
        method: "put",
        headers: reqHeaders,
        body: body,
    }).then(response => {
        return ({ response });
    })
        .catch(error => {
            return (error)
        })
};
//Remove
export const remove = (url, token) => {
    const reqHeaders = {
            "Content-type": "application/json"
        };
    if (token) {
        reqHeaders = {
            "Content-type": "application/json",
            ["auth-token"]: token
        }
    }

    fetch(url, {
        method: "delete",
        headers: reqHeaders
    }).then(response => {
        return ({ response });
    })
        .catch(error => {
            return (error)
        })
};