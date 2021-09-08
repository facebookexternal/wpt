let messages = {};

onconnect = function(e) {
  let port = e.ports[0];

  port.addEventListener('message', function(e) {
    const from = e.data.from;
    const check = e.data.check;

    if (from) {
      messages[from] = true;
    }

    if (check) {
      port.postMessage(messages);
    }
  });

  port.start();
};
