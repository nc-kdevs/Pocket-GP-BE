//POST AN IMAGE TO IMGUR

var https = require('https');

var options = {
  'method': 'POST',
  'hostname': 'api.imgur.com',
  'path': '/3/image',
  'headers': {
    'Authorization': 'Client-ID {{c6f21ab825b2cc5}}'
  }
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData = "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"image\"\r\n\r\nR0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--";

req.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');

req.write(postData);

req.end();

//GET IMAGE FROM IMGUR

var https = require('https');

var options = {
  'method': 'GET',
  'hostname': 'api.imgur.com',
  'path': '/3/image/{{orunSTu}}',
  'headers': {
    'Authorization': 'Client-ID {{c6f21ab825b2cc5}}'
  }
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();

//EXPECTED RESPONSE

{
    "data": {
      "id": "orunSTu",
      "title": null,
      "description": null,
      "datetime": 1495556889,
      "type": "image/gif",
      "animated": false,
      "width": 1,
      "height": 1,
      "size": 42,
      "views": 0,
      "bandwidth": 0,
      "vote": null,
      "favorite": false,
      "nsfw": null,
      "section": null,
      "account_url": null,
      "account_id": 0,
      "is_ad": false,
      "in_most_viral": false,
      "tags": [],
      "ad_type": 0,
      "ad_url": "",
      "in_gallery": false,
      "deletehash": "x70po4w7BVvSUzZ",
      "name": "",
      "link": "http://i.imgur.com/orunSTu.gif"
    },
    "success": true,
    "status": 200
}
