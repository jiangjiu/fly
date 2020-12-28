//微信小程序适配器
module.exports = function (request, responseCallback) {
    let con = {
        defer: request.defer || false,
        method: request.method,
        url: request.url,
        dataType: request.dataType || undefined,
        header: request.headers,
        data: request.body || {},
        ext: request.ext || {},
        responseType: request.responseType || 'text',
        success(res) {
            responseCallback({
                statusCode: res.statusCode,
                responseText: res.data,
                headers: res.header
            });
        },
        fail(res) {
            responseCallback({
                statusCode: res.statusCode || 0,
                statusMessage: res.errMsg
            });
        }
    };
    swan.request(con);
};
