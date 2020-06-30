'use strict';

(function () {
  var Url = {
    DOWNLOAD: 'https://javascript.pages.academy/code-and-magick/data',
    UPLOAD: 'https://javascript.pages.academy/code-and-magick'
  };

  var ServerCode = {
    SUCCESS: 200,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    ENTERNAL_ERROR: 500
  };

  function createXHR(onLoad, onError) {
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      switch (xhr.status) {
        case ServerCode.SUCCESS:
          onLoad(xhr.response);
          break;
        case ServerCode.BAD_REQUEST:
          onError('Произошла ошибка сервера: неверный запрос');
          break;
        case ServerCode.NOT_FOUND:
          onError('Произошла ошибка сервера: запрашиваемый ресурс не найден');
          break;
        case ServerCode.ENTERNAL_ERROR:
          onError('Произошла внутренняя ошибка сервера');
          break;
        default:
          onError('Произошла ошибка сервера: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос к серверу не успел выполниться за отведённое время');
    });

    return xhr;
  }

  function loadData(onLoad, onError) {
    var xhr = createXHR(onLoad, onError);

    xhr.open('GET', Url.DOWNLOAD);
    xhr.send();
  }

  function saveData(data, onLoad, onError) {
    var xhr = createXHR(onLoad, onError);

    xhr.open('POST', Url.UPLOAD);
    xhr.send(data);
  }

  window.backend = {
    load: loadData,
    save: saveData
  };
})();
