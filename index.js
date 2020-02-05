var express = require('express');

const app=express();

require("appdynamics").profile({
  controllerHostName: 'master-onprem-controller.e2e.appd-test.com',
  controllerPort: 8090,
    accountName: 'customer1',
  accountAccessKey: '2d6c32c1-1938-4e43-bd7a-7e3c7f31e3bb',
  applicationName: 'GettingStarted',
  tierName: 'Tier3',
  nodeName: 'process' // The controller will automatically append the node name with a unique number
});

app.get('/', (req, res)=>{
    res.send('Hello world');
});

app.get('/getsomething-from master', (req, res)=>{
// done by master 
});

app.get('/getsomething', (req, res)=>{
// done by someother user and not the master
});
//comment by master
// comment by otheruser user

app.listen(1800);