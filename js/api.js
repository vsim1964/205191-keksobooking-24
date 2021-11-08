const getData = (onSuccess, onError) => {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    }).catch(() => {
      onError();
    });
};

const sendData = (onSuccess, onError, data) => {

  const formData = new FormData(data);

  fetch('https://24.javascript.pages.academy/keksobooking', {
    method: 'POST',
    body: formData,
  }).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      onError();
    }
  }).catch(() => {
    onError();
  });
};


export {
  getData,
  sendData
};
