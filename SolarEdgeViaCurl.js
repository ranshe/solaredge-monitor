const curl = new (require( 'curl-request' ))();
curl.setHeaders([
    'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
])
.get('https://monitoringapi.solaredge.com/site/748976/power?startTime=2020-09-10%2011:00:00&endTime=2020-09-10%2011:15:00&api_key=A6R6O91MTK0ZMFDA4EE1W6CDL307YF29')
.then(({statusCode, body, headers}) => {
    console.log(statusCode, body, headers)
})
.catch((e) => {
    console.log(e);
});