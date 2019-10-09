var on = document.getElementById('on');
var off = document.getElementById('off');
var Status = document.getElementById('text');
var timeStamp = new Date();

client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")

client.on("connect", function () {
  off.disabled = true;
});

on.addEventListener('click', function (prevent) {
  prevent.preventDefault();

  off.disabled = false;
  Status.innerHTML = 'The device is currently turned On';

  client.publish('bargaso/device/status', 'Turned ON: ' + timeStamp, function (err) {
    if (err) {
      swal({
        title: "Error!",
        text: "Failed to Connect!",
        icon: "error",
        button: "OK",
      });
    }
  });
})

off.addEventListener('click', function () {

  Status.innerHTML = 'The device is currently turned Off';

  client.publish('bargaso/device/status', 'Turned OFF: ' + timeStamp, function (err) {
    if (err) {
      swal({
        title: "Error!",
        text: "Failed to Connect!",
        icon: "error",
        button: "OK",
      })
    }
  })
});
