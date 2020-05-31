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
var CLOUD_X_HISTOGRAM = CLOUD_X + MARGIN_X;
var CLOUD_Y_HISTOGRAM = CLOUD_Y + CLOUD_HEIGHT - MARGIN_Y;
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

var renderText = function (ctx, x, y, text) {
  ctx.font = FONT_GAP + 'px' + ' PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';

  ctx.fillText(
      text,
      x,
      y
  );
};

var renderName = function (ctx, playerName, index, playerTime, playerPositionY) {
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';

  ctx.fillText(
      playerName,
      CLOUD_X_HISTOGRAM + (COLUMN_WIDTH + COLUMN_INTERVAL) * index,
      CLOUD_Y_HISTOGRAM
  );

  ctx.fillText(
      Math.floor(playerTime),
      CLOUD_X_HISTOGRAM + (COLUMN_WIDTH + COLUMN_INTERVAL) * index,
      playerPositionY
  );
};

var renderBar = function (ctx, index, playerName, playerBarHeight) {
  ctx.fillStyle = 'hsl(240, ' + Math.floor(Math.random() * 100) + '%, 50%)';

  if (playerName === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  }

  ctx.fillRect(
      CLOUD_X_HISTOGRAM + (COLUMN_WIDTH + COLUMN_INTERVAL) * index,
      CLOUD_Y_HISTOGRAM - FONT_GAP,
      COLUMN_WIDTH,
      playerBarHeight
  );
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  renderText(ctx, CLOUD_X + MARGIN_X, CLOUD_Y + MARGIN_Y, 'Ура вы победили!');
  renderText(ctx, CLOUD_X + MARGIN_X, CLOUD_Y + MARGIN_Y + FONT_GAP + GAP, 'Список результатов:');

  ctx.textBaseline = 'alphabetic';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    renderName(ctx, players[i], i, times[i], CLOUD_Y_HISTOGRAM - FONT_GAP - (barHeight * times[i]) / maxTime - GAP);

    renderBar(ctx, i, players[i], -(barHeight * times[i]) / maxTime);
  }
};
