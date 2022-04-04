const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
app.use(express.json()) 
app.get('/test', function (req, res) {
  res.send('Hello World!')
});
//posting a Stream
app.post('/createstream', async function (req, res) {
  const {
    streamName,
    schema
  } = req.body

  const request = `{
    "streamName": ${streamName},
    "schema": ${schema}
}`
  const header = {
    'Content-Type': 'application/json'
  }
  const url = "https://dbs-demo.mathematik.uni-marburg.de/native/create-stream"
  try {
    const response = await axios.post(url, request, {
      headers: header
    })
    let data = response.data;

    //console.log("response isss " + response)
    console.log(data)
    res.send(data)

  } catch (error) {
    console.error(error)
  }
});



//posting A schema
app.post('/schema', async function (req, res) {
  const queryString = req.body.queryString

  const request = `{
    "queryString": "${queryString}"
}`
  const header = {
    'Content-Type': 'application/json'
  }
  const url = "https://dbs-demo.mathematik.uni-marburg.de/native/schema"
  try {
    const response = await axios.post(url, request, {
      headers: header
    })
    let data = response.data;

    //console.log("response isss " + response)
    //console.log(request)
    console.log(req.body)
    res.send(data)

  } catch (error) {
   // console.error(error)
    console.log(req.body)
  }
});

//posting A Query
app.post('/query', async function (req, res) {
  const {
    queryString,
    startTime,
    endTime
  } = req.body

  const request = `{
    "queryString": "${queryString}",
    "startTime": ${startTime},
    "endTime": ${endTime}
  }`
  const header = {
    'Content-Type': 'application/json'
  }
  const url = "https://dbs-demo.mathematik.uni-marburg.de/native/query"
  try {
    const response = await axios.post(url, request, {
      headers: header
    })
    let data = response.data;

    //console.log("response isss " + response)
    console.log(data)
    res.send(data)

  } catch (error) {
    console.error(error)
    console.log(req.body)
  }
});

//posting(inserting) An Event
app.post('/event', async function (req, res) {
  const {
    streamName,
    events
  } = req.body

  const request = `{
    "streamName": "${streamName}",
    "events": ${events}
  }`
  const header = {
    'Content-Type': 'application/json'
  }
  const url = "https://dbs-demo.mathematik.uni-marburg.de/native/insert"
  try {
    const response = await axios.post(url, request, {
      headers: header
    })
    let data = response.data;

    //console.log("response isss " + response)
    console.log(data)
    res.send(data)

  } catch (error) {
    console.error(error)
  }
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
});
