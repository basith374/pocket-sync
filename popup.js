document.addEventListener('DOMContentLoaded', function() {
  var key = '66477-dc00d2035838fe8a7c2cdf7f';
  document.getElementById('btn').addEventListener('click', function() {
    document.getElementById('msg').innerText = 'waiting';
    var x = new XMLHttpRequest();
    x.open('POST', 'https://getpocket.com/v3/oauth/request');
    x.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    x.setRequestHeader('X-Accept', 'application/json');
    x.onreadystatechange = function() {
      if(x.readyState == 4) {
        var token = JSON.parse(x.responseText).code
        // document.getElementById('msg').innerText = token;

        window.open('https://getpocket.com/auth/authorize?request_token=' + token + '&redirect_uri=https://bluroe.com')
      }
    }
    x.send(JSON.stringify({
      consumer_key: key,
      redirect_uri: 'https://bluroe.com'
    }));
  });

  document.getElementById('btn2').addEventListener('click', function() {
    var token = document.getElementById('input').value;
    var x = new XMLHttpRequest();
    x.open('POST', 'https://getpocket.com/v3/oauth/authorize');
    x.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    x.setRequestHeader('X-Accept', 'application/json');
    x.onreadystatechange = function() {
      if(x.readyState == 4) {
        document.getElementById('msg').innerText = x.responseText;
      }
    }
    x.send(JSON.stringify({
      consumer_key: key,
      code: token
    }));
  });

  document.getElementById('btn3').addEventListener('click', function() {
    document.getElementById('msg').innerText = 'loading';
    var token = '85b51fbf-1316-a776-5be6-059a93';
    var x = new XMLHttpRequest();
    x.open('POST', 'https://getpocket.com/v3/get');
    x.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    x.setRequestHeader('X-Accept', 'application/json');
    x.onreadystatechange = function() {
      if(x.readyState == 4) {
        var bookmarks = JSON.parse(x.responseText).list;
        document.getElementById('msg').innerText = 'found ' + Object.keys(bookmarks).length + ' bookmarks';
      }
    }
    x.send(JSON.stringify({
      consumer_key: key,
      access_token: token
    }));
  });
});