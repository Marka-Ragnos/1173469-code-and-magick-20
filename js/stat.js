'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var MARGIN_X = 35;
var MARGIN_Y = 25;
var FONT_GAP = 16;
var COLUMN_WIDTH = 40;
var COLUMN_INTERVAL = 50;
var barHeight = 150 - GAP - FONT_GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = FONT_GAP + 'px' + ' PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';

  ctx.fillText(
      'Ура вы победили!',
      CLOUD_X + MARGIN_X,
      CLOUD_Y + MARGIN_Y
  );

  ctx.fillText(
      'Список результатов:',
      CLOUD_X + MARGIN_X,
      CLOUD_Y + MARGIN_Y + FONT_GAP + GAP
  );

  ctx.textBaseline = 'alphabetic';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var CLOUD_X_HISTOGRAM = CLOUD_X + MARGIN_X;
    var CLOUD_Y_HISTOGRAM = CLOUD_Y + CLOUD_HEIGHT - MARGIN_Y;

    ctx.fillStyle = 'rgba(0, 0, 0, 1)';

    ctx.fillText(
        players[i],
        CLOUD_X_HISTOGRAM + (COLUMN_WIDTH + COLUMN_INTERVAL) * i,
        CLOUD_Y_HISTOGRAM
    );

    ctx.fillText(
        Math.floor(times[i]),
        CLOUD_X_HISTOGRAM + (COLUMN_WIDTH + COLUMN_INTERVAL) * i,
        CLOUD_Y_HISTOGRAM - FONT_GAP - (barHeight * times[i]) / maxTime - GAP
    );

    ctx.fillStyle = 'hsl(240, ' + Math.floor(Math.random() * 100) + '%, 50%)';

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }

    ctx.fillRect(
        CLOUD_X_HISTOGRAM + (COLUMN_WIDTH + COLUMN_INTERVAL) * i,
        CLOUD_Y_HISTOGRAM - FONT_GAP,
        COLUMN_WIDTH,
        -(barHeight * times[i]) / maxTime
    );
  }
};
