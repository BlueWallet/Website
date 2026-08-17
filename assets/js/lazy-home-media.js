(function () {
  if (window.__bwLazyMedia) return;
  window.__bwLazyMedia = true;

  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var assets = window.BW_ASSETS || {};

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      if (window.rive) {
        resolve();
        return;
      }
      var s = document.createElement('script');
      s.src = src;
      s.async = true;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  function initRiveCard(canvas) {
    if (!window.rive || canvas.dataset.riveReady) return;
    canvas.dataset.riveReady = '1';
    var alignKey = canvas.getAttribute('data-rive-align') || 'Center';
    var alignment = (rive.Alignment && rive.Alignment[alignKey]) || rive.Alignment.Center;
    var artboard = canvas.getAttribute('data-rive-artboard');
    var sm = canvas.getAttribute('data-rive-sm');
    var r = new rive.Rive({
      src: canvas.getAttribute('data-rive-src'),
      canvas: canvas,
      artboard: artboard || undefined,
      stateMachines: sm || undefined,
      autoplay: !reduced,
      autoBind: true,
      layout: new rive.Layout({
        fit: rive.Fit.Contain,
        alignment: alignment
      }),
      onLoad: function () {
        if (canvas.offsetWidth > 0 && canvas.offsetHeight > 0) {
          r.resizeDrawingSurfaceToCanvas();
        }
      }
    });
    if (window.ResizeObserver) {
      new ResizeObserver(function () {
        if (canvas.offsetWidth > 0 && canvas.offsetHeight > 0) {
          r.resizeDrawingSurfaceToCanvas();
        }
      }).observe(canvas);
    }
  }

  function observeRive() {
    var canvases = document.querySelectorAll('canvas[data-rive-src]');
    if (!canvases.length || !assets.riveJs) return;

    function start() {
      loadScript(assets.riveJs).then(function () {
        if (window.rive && window.rive.RuntimeLoader && assets.riveWasm) {
          window.rive.RuntimeLoader.setWasmUrl(assets.riveWasm);
        }
        canvases.forEach(initRiveCard);
      });
    }

    if (!('IntersectionObserver' in window)) {
      start();
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      if (entries.some(function (entry) { return entry.isIntersecting; })) {
        io.disconnect();
        start();
      }
    }, { rootMargin: '200px 0px' });
    canvases.forEach(function (canvas) { io.observe(canvas); });
  }

  var FLOW_VALUES = [0, 0.00110011, 0.2121, 6.15];
  var HOLD_MS = 3000;
  var ROLL_MS = 1000;

  function startFlow(flow) {
    if (!flow || flow.dataset.flowReady) return;
    flow.dataset.flowReady = '1';
    flow.format = { minimumFractionDigits: 1, maximumFractionDigits: 8 };
    flow.numberSuffix = ' BTC';
    flow.spinTiming = { duration: ROLL_MS, easing: 'ease-out' };
    flow.opacityTiming = { duration: ROLL_MS * 0.4, easing: 'ease-out' };
    flow.update(FLOW_VALUES[0]);
    if (reduced) return;
    var idx = 1;
    setTimeout(function loop() {
      flow.update(FLOW_VALUES[idx]);
      idx = (idx + 1) % FLOW_VALUES.length;
      setTimeout(loop, ROLL_MS + HOLD_MS);
    }, HOLD_MS);
  }

  function observeNumberFlow() {
    var nodes = document.querySelectorAll('number-flow');
    if (!nodes.length || !assets.numberFlow) return;

    function start() {
      import(assets.numberFlow).then(function () {
        nodes.forEach(startFlow);
      });
    }

    if (!('IntersectionObserver' in window)) {
      start();
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      if (entries.some(function (entry) { return entry.isIntersecting; })) {
        io.disconnect();
        start();
      }
    }, { rootMargin: '200px 0px' });
    nodes.forEach(function (node) { io.observe(node); });
  }

  function init() {
    observeRive();
    observeNumberFlow();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
