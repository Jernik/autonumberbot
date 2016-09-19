require(http)
//while(true){
    var options = {
        hostname: 'www.meistertask.com',
        port: 80,
        path: '/api/tasks',
        method: 'GET',
        headers: {
            'Authorization': 'Bearer '
        }
    }
    var req = http.request(options, (res) => {
            console.log(`STATUS ${res.statusCode}`);
    });

//}
