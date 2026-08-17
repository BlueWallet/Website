// esm-env-stub.mjs
var BROWSER = true;

// number-flow-pkg/package/dist/ssr-DvIINv8w.mjs
var h = String.raw;
var m = String.raw;
var v = BROWSER && (() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return false;
  }
  return true;
})();
var k = BROWSER && typeof CSS < "u" && CSS.supports && CSS.supports("line-height", "mod(1,1)");
var S = BROWSER && typeof matchMedia < "u" ? matchMedia("(prefers-reduced-motion: reduce)") : null;
var d = "--_number-flow-d-opacity";
var g = "--_number-flow-d-width";
var c = "--_number-flow-dx";
var u = "--_number-flow-d";
var _ = (() => {
  try {
    return CSS.registerProperty({
      name: d,
      syntax: "<number>",
      inherits: false,
      initialValue: "0"
    }), CSS.registerProperty({
      name: c,
      syntax: "<length>",
      inherits: true,
      initialValue: "0px"
    }), CSS.registerProperty({
      name: g,
      syntax: "<number>",
      inherits: false,
      initialValue: "0"
    }), CSS.registerProperty({
      name: u,
      syntax: "<number>",
      inherits: true,
      initialValue: "0"
    }), true;
  } catch {
    return false;
  }
})();
var s = "round(nearest, calc(var(--number-flow-mask-height, 0.25em) / 2), 1px)";
var t = `calc(${s} * 2)`;
var p = "var(--number-flow-mask-width, 0.5em)";
var n = `calc(${p} / var(--scale-x))`;
var r = "#000 0, transparent 71%";
var x = m`:host{display:inline-block;direction:ltr;white-space:nowrap;isolation:isolate;line-height:1}.number,.number__inner{display:inline-block;transform-origin:left top}:host([data-will-change]) :is(.number,.number__inner,.section,.digit,.digit__num,.symbol){will-change:transform}.number{--scale-x:calc(1 + var(${g}) / var(--width));transform:translateX(var(${c})) scaleX(var(--scale-x));margin:0 calc(-1 * ${p});position:relative;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 ${n},#000 calc(100% - ${n}),transparent ),linear-gradient(to bottom,transparent 0,#000 ${t},#000 calc(100% - ${t}),transparent 100% ),radial-gradient(at bottom right,${r}),radial-gradient(at bottom left,${r}),radial-gradient(at top left,${r}),radial-gradient(at top right,${r});-webkit-mask-size:100% calc(100% - ${t} * 2),calc(100% - ${n} * 2) 100%,${n} ${t},${n} ${t},${n} ${t},${n} ${t};-webkit-mask-position:center,center,top left,top right,bottom right,bottom left;-webkit-mask-repeat:no-repeat}.number__inner{padding:${s} ${p};transform:scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(${c})))}:host > :not(.number){z-index:5}.section,.symbol{display:inline-block;position:relative;isolation:isolate}.section::after{content:'\200b';display:inline-block}.section--justify-left{transform-origin:center left}.section--justify-right{transform-origin:center right}.section > [inert],.symbol > [inert]{margin:0 !important;position:absolute !important;z-index:-1}.digit{display:inline-block;position:relative;--c:var(--current) + var(${u})}.digit__num,.number .section::after{padding:${s} 0}.digit__num{display:inline-block;--offset-raw:mod(var(--length) + var(--n) - mod(var(--c),var(--length)),var(--length));--offset:calc( var(--offset-raw) - var(--length) * round(down,var(--offset-raw) / (var(--length) / 2),1) );--y:clamp(-100%,var(--offset) * 100%,100%);transform:translateY(var(--y))}.digit__num[inert]{position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(var(--y))}.digit:not(.is-spinning) .digit__num[inert]{display:none}.symbol__value{display:inline-block;mix-blend-mode:plus-lighter;white-space:pre}.section--justify-left .symbol > [inert]{left:0}.section--justify-right .symbol > [inert]{right:0}.animate-presence{opacity:calc(1 + var(${d}))}`;
var M = BROWSER && typeof HTMLElement < "u" ? HTMLElement : class {
};
var y = m`:host{display:inline-block;direction:ltr;white-space:nowrap;line-height:1}span{display:inline-block}:host([data-will-change]) span{will-change:transform}.number,.digit{padding:${s} 0}.symbol{white-space:pre}`;
var b = (e) => `<span class="${e.type === "integer" || e.type === "fraction" ? "digit" : "symbol"}" part="${e.type === "integer" || e.type === "fraction" ? `digit ${e.type}-digit` : `symbol ${e.type}`}">${e.value}</span>`;
var i = (e, a) => `<span part="${a}">${e.reduce((l2, f4) => l2 + b(f4), "")}</span>`;
var $ = (e = "") => m`:where(number-flow${e}){line-height:1}number-flow${e} > span{font-kerning:none;display:inline-block;padding:${t} 0}`;
var V = (e, { nonce: a, elementSuffix: l2 } = {}) => (
  // shadowroot="open" non-standard attribute for old Chrome:
  h`<template shadowroot="open" shadowrootmode="open"
			><style${a ? ` nonce="${a}"` : ""}>${y}</style
			><span role="img" aria-label="${e.valueAsString}"
				>${i(e.pre, "left")}<span part="number" class="number"
					>${i(e.integer, "integer")}${i(e.fraction, "fraction")}</span
				>${i(e.post, "right")}</span
			></template
		><style${a ? ` nonce="${a}"` : ""}>${$(l2)}</style
		><span>${e.valueAsString}</span>`
);

// number-flow-pkg/package/dist/plugins.mjs
var f = (e, n2) => e == null ? n2 : n2 == null ? e : Math.max(e, n2);
var i2 = /* @__PURE__ */ new WeakMap();
var l = {
  onUpdate(e, n2, o) {
    if (i2.set(o, void 0), !o.computedTrend)
      return;
    const s2 = n2.integer.concat(n2.fraction).filter((t2) => t2.type === "integer" || t2.type === "fraction"), r3 = e.integer.concat(e.fraction).filter((t2) => t2.type === "integer" || t2.type === "fraction"), u2 = s2.find((t2) => !r3.find((c2) => c2.pos === t2.pos && c2.value === t2.value)), a = r3.find((t2) => !s2.find((c2) => t2.pos === c2.pos && t2.value === c2.value));
    i2.set(o, f(u2 == null ? void 0 : u2.pos, a == null ? void 0 : a.pos));
  },
  getDelta(e, n2, o) {
    const s2 = e - n2, r3 = i2.get(o.flow);
    if (!s2 && r3 != null && r3 >= o.pos)
      return o.length * o.flow.computedTrend;
  }
};

// number-flow-pkg/package/dist/lite.mjs
var f2 = (n2, t2, e) => {
  const i3 = document.createElement(n2), [s2, o] = Array.isArray(t2) ? [void 0, t2] : [t2, e];
  return s2 && Object.assign(i3, s2), o == null || o.forEach((a) => i3.appendChild(a)), i3;
};
var D = (n2, t2) => {
  var e;
  return t2 === "left" ? n2.offsetLeft : (((e = n2.offsetParent instanceof HTMLElement ? n2.offsetParent : null) == null ? void 0 : e.offsetWidth) ?? 0) - n2.offsetWidth - n2.offsetLeft;
};
var W = (n2) => n2.offsetWidth > 0 && n2.offsetHeight > 0;
var X = (n2, t2) => {
  BROWSER && typeof HTMLElement < "u" && typeof customElements < "u" && !customElements.get(n2) && customElements.define(n2, t2);
};
function k2(n2, t2, { reverse: e = false } = {}) {
  const i3 = n2.length;
  for (let s2 = e ? i3 - 1 : 0; e ? s2 >= 0 : s2 < i3; e ? s2-- : s2++)
    t2(n2[s2], s2);
}
function z(n2, t2, e, i3) {
  const s2 = t2.formatToParts(n2);
  e && s2.unshift({ type: "prefix", value: e }), i3 && s2.push({ type: "suffix", value: i3 });
  const o = [], a = [], r3 = [], d2 = [], c2 = {}, p2 = (l2) => `${l2}:${c2[l2] = (c2[l2] ?? -1) + 1}`;
  let u2 = "", m2 = false, g2 = false;
  for (const l2 of s2) {
    u2 += l2.value;
    const h3 = l2.type === "minusSign" || l2.type === "plusSign" ? "sign" : l2.type;
    h3 === "integer" ? (m2 = true, a.push(...l2.value.split("").map((_2) => ({ type: h3, value: parseInt(_2) })))) : h3 === "group" ? a.push({ type: h3, value: l2.value }) : h3 === "decimal" ? (g2 = true, r3.push({ type: h3, value: l2.value, key: p2(h3) })) : h3 === "fraction" ? r3.push(...l2.value.split("").map((_2) => ({
      type: h3,
      value: parseInt(_2),
      key: p2(h3),
      pos: -1 - c2[h3]
    }))) : (m2 || g2 ? d2 : o).push({
      type: h3,
      value: l2.value,
      key: p2(h3)
    });
  }
  const v3 = [];
  for (let l2 = a.length - 1; l2 >= 0; l2--) {
    const h3 = a[l2];
    v3.unshift(h3.type === "integer" ? {
      ...h3,
      key: p2(h3.type),
      pos: c2[h3.type]
    } : {
      ...h3,
      key: p2(h3.type)
    });
  }
  return {
    pre: o,
    integer: v3,
    fraction: r3,
    post: d2,
    valueAsString: u2,
    value: typeof n2 == "string" ? parseFloat(n2) : n2
  };
}
var E = k && v && _;
var B = class extends M {
  constructor() {
    super(), this.created = false, this.batched = false, this._preUpdated = false;
    const { animated: t2, ...e } = this.constructor.defaultProps;
    this._animated = this.computedAnimated = t2, Object.assign(this, e);
  }
  get animated() {
    return this._animated;
  }
  set animated(t2) {
    var e;
    this.animated !== t2 && (this._animated = t2, (e = this.shadowRoot) == null || e.getAnimations().forEach((i3) => i3.finish()));
  }
  /**
   * @internal
   */
  set data(t2) {
    var r3, d2;
    if (t2 == null || t2 === this._data)
      return;
    const { pre: e, integer: i3, fraction: s2, post: o, value: a } = t2;
    if (this.created) {
      const c2 = this._data;
      this._data = t2, this.computedTrend = typeof this.trend == "function" ? this.trend(c2.value, a) : this.trend, this.computedAnimated = E && this._animated && (!this.respectMotionPreference || !((r3 = S) != null && r3.matches)) && // https://github.com/barvian/number-flow/issues/9
      W(this) && // https://github.com/barvian/number-flow/issues/165
      this.ownerDocument.visibilityState === "visible", (d2 = this.plugins) == null || d2.forEach((p2) => {
        var u2;
        return (u2 = p2.onUpdate) == null ? void 0 : u2.call(p2, t2, c2, this);
      }), this.batched || this.willUpdate(), this._pre.update(e), this._num.update({ integer: i3, fraction: s2 }), this._post.update(o), this.batched || this.didUpdate();
    } else {
      this._data = t2, this.attachShadow({ mode: "open" });
      try {
        this._internals ?? (this._internals = this.attachInternals()), this._internals.role = "img";
      } catch {
      }
      const c2 = document.createElement("style");
      this.nonce && (c2.nonce = this.nonce), c2.textContent = x, this.shadowRoot.appendChild(c2), this._pre = new U(this, e, {
        justify: "right",
        part: "left"
      }), this.shadowRoot.appendChild(this._pre.el), this._num = new F(this, i3, s2), this.shadowRoot.appendChild(this._num.el), this._post = new U(this, o, {
        justify: "left",
        part: "right"
      }), this.shadowRoot.appendChild(this._post.el), this.created = true;
    }
    try {
      this._internals.ariaLabel = t2.valueAsString;
    } catch {
    }
  }
  /**
   * @internal
   */
  willUpdate() {
    var t2;
    this._preUpdated = E && this._animated && (!this.respectMotionPreference || !((t2 = S) != null && t2.matches)) && this.ownerDocument.visibilityState === "visible", this._preUpdated && (this._pre.willUpdate(), this._num.willUpdate(), this._post.willUpdate());
  }
  /**
   * @internal
   */
  didUpdate() {
    if (!this.computedAnimated || !this._preUpdated)
      return;
    this._abortAnimationsFinish ? this._abortAnimationsFinish.abort() : this.dispatchEvent(new Event("animationsstart")), this._pre.didUpdate(), this._num.didUpdate(), this._post.didUpdate();
    const t2 = new AbortController();
    Promise.all(this.shadowRoot.getAnimations().map((e) => e.finished)).then(() => {
      t2.signal.aborted || (this.dispatchEvent(new Event("animationsfinish")), this._abortAnimationsFinish = void 0);
    }), this._abortAnimationsFinish = t2;
  }
};
B.defaultProps = {
  transformTiming: {
    duration: 900,
    // Make sure to keep this minified:
    easing: "linear(0,.005,.019,.039,.066,.096,.129,.165,.202,.24,.278,.316,.354,.39,.426,.461,.494,.526,.557,.586,.614,.64,.665,.689,.711,.731,.751,.769,.786,.802,.817,.831,.844,.856,.867,.877,.887,.896,.904,.912,.919,.925,.931,.937,.942,.947,.951,.955,.959,.962,.965,.968,.971,.973,.976,.978,.98,.981,.983,.984,.986,.987,.988,.989,.99,.991,.992,.992,.993,.994,.994,.995,.995,.996,.996,.9963,.9967,.9969,.9972,.9975,.9977,.9979,.9981,.9982,.9984,.9985,.9987,.9988,.9989,1)"
  },
  spinTiming: void 0,
  opacityTiming: { duration: 450, easing: "ease-out" },
  animated: true,
  trend: (n2, t2) => Math.sign(t2 - n2),
  respectMotionPreference: true,
  plugins: void 0,
  digits: void 0
};
var F = class {
  constructor(t2, e, i3, { className: s2, ...o } = {}) {
    this.flow = t2, this._integer = new A(t2, e, {
      justify: "right",
      part: "integer"
    }), this._fraction = new A(t2, i3, {
      justify: "left",
      part: "fraction"
    }), this._inner = f2("span", {
      className: "number__inner"
    }, [this._integer.el, this._fraction.el]), this.el = f2("span", {
      ...o,
      part: "number",
      className: `number ${s2 ?? ""}`
    }, [this._inner]);
  }
  willUpdate() {
    this._prevWidth = this.el.offsetWidth, this._prevLeft = this.el.getBoundingClientRect().left, this._integer.willUpdate(), this._fraction.willUpdate();
  }
  update({ integer: t2, fraction: e }) {
    this._integer.update(t2), this._fraction.update(e);
  }
  didUpdate() {
    const t2 = this.el.getBoundingClientRect();
    this._integer.didUpdate(), this._fraction.didUpdate();
    const e = this._prevLeft - t2.left, i3 = this.el.offsetWidth, s2 = this._prevWidth - i3;
    this.el.style.setProperty("--width", String(i3)), this.el.animate({
      [c]: [`${e}px`, "0px"],
      [g]: [s2, 0]
    }, {
      ...this.flow.transformTiming,
      composite: "accumulate"
    });
  }
};
var R = class {
  constructor(t2, e, { justify: i3, className: s2, ...o }, a) {
    this.flow = t2, this.children = /* @__PURE__ */ new Map(), this.onCharRemove = (d2) => () => {
      this.children.delete(d2);
    }, this.justify = i3;
    const r3 = e.map((d2) => this.addChar(d2).el);
    this.el = f2("span", {
      ...o,
      className: `section section--justify-${i3} ${s2 ?? ""}`
    }, a ? a(r3) : r3);
  }
  addChar(t2, { startDigitsAtZero: e = false, ...i3 } = {}) {
    const s2 = t2.type === "integer" || t2.type === "fraction" ? new C(this, t2.type, e ? 0 : t2.value, t2.pos, {
      ...i3,
      onRemove: this.onCharRemove(t2.key)
    }) : new I(this, t2.type, t2.value, {
      ...i3,
      onRemove: this.onCharRemove(t2.key)
    });
    return this.children.set(t2.key, s2), s2;
  }
  unpop(t2) {
    t2.el.removeAttribute("inert"), t2.el.style.top = "", t2.el.style[this.justify] = "";
  }
  pop(t2) {
    t2.forEach((e) => {
      e.el.style.top = `${e.el.offsetTop}px`, e.el.style[this.justify] = `${D(e.el, this.justify)}px`;
    }), t2.forEach((e) => {
      e.el.setAttribute("inert", ""), e.present = false;
    });
  }
  addNewAndUpdateExisting(t2) {
    const e = /* @__PURE__ */ new Map(), i3 = /* @__PURE__ */ new Map(), s2 = this.justify === "left", o = s2 ? "prepend" : "append";
    if (k2(t2, (a) => {
      let r3;
      this.children.has(a.key) ? (r3 = this.children.get(a.key), i3.set(a, r3), this.unpop(r3), r3.present = true) : (r3 = this.addChar(a, { startDigitsAtZero: true, animateIn: true }), e.set(a, r3)), this.el[o](r3.el);
    }, { reverse: s2 }), this.flow.computedAnimated) {
      const a = this.el.getBoundingClientRect();
      e.forEach((r3) => {
        r3.willUpdate(a);
      });
    }
    e.forEach((a, r3) => {
      a.update(r3.value);
    }), i3.forEach((a, r3) => {
      a.update(r3.value);
    });
  }
  willUpdate() {
    const t2 = this.el.getBoundingClientRect();
    this._prevOffset = t2[this.justify], this.children.forEach((e) => e.willUpdate(t2));
  }
  didUpdate() {
    const t2 = this.el.getBoundingClientRect();
    this.children.forEach((s2) => s2.didUpdate(t2));
    const e = t2[this.justify], i3 = this._prevOffset - e;
    i3 && this.children.size && this.el.animate({
      transform: [`translateX(${i3}px)`, "none"]
    }, {
      ...this.flow.transformTiming,
      composite: "accumulate"
    });
  }
};
var A = class extends R {
  update(t2) {
    const e = /* @__PURE__ */ new Map();
    this.children.forEach((i3, s2) => {
      t2.find((o) => o.key === s2) || e.set(s2, i3), this.unpop(i3);
    }), this.addNewAndUpdateExisting(t2), e.forEach((i3) => {
      i3 instanceof C && i3.update(0);
    }), this.pop(e);
  }
};
var U = class extends R {
  update(t2) {
    const e = /* @__PURE__ */ new Map();
    this.children.forEach((i3, s2) => {
      t2.find((o) => o.key === s2) || e.set(s2, i3);
    }), this.pop(e), this.addNewAndUpdateExisting(t2);
  }
};
var y2 = class {
  constructor(t2, e, { onRemove: i3, animateIn: s2 = false } = {}) {
    this.flow = t2, this.el = e, this._present = true, this._remove = () => {
      var o;
      this.el.remove(), (o = this._onRemove) == null || o.call(this);
    }, this.el.classList.add("animate-presence"), this.flow.computedAnimated && s2 && this.el.animate({
      [d]: [-0.9999, 0]
    }, {
      ...this.flow.opacityTiming,
      composite: "accumulate"
    }), this._onRemove = i3;
  }
  get present() {
    return this._present;
  }
  set present(t2) {
    if (this._present !== t2) {
      if (this._present = t2, t2 ? this.el.removeAttribute("inert") : this.el.setAttribute("inert", ""), !this.flow.computedAnimated) {
        t2 || this._remove();
        return;
      }
      this.el.style.setProperty("--_number-flow-d-opacity", t2 ? "0" : "-.999"), this.el.animate({
        [d]: t2 ? [-0.9999, 0] : [0.999, 0]
      }, {
        ...this.flow.opacityTiming,
        composite: "accumulate"
      }), t2 ? this.flow.removeEventListener("animationsfinish", this._remove) : this.flow.addEventListener("animationsfinish", this._remove, {
        once: true
      });
    }
  }
};
var x2 = class extends y2 {
  constructor(t2, e, i3, s2) {
    super(t2.flow, i3, s2), this.section = t2, this.value = e, this.el = i3;
  }
};
var C = class extends x2 {
  constructor(t2, e, i3, s2, o) {
    var c2, p2;
    const a = (((p2 = (c2 = t2.flow.digits) == null ? void 0 : c2[s2]) == null ? void 0 : p2.max) ?? 9) + 1, r3 = Array.from({ length: a }).map((u2, m2) => {
      const g2 = f2("span", { className: "digit__num" }, [
        document.createTextNode(String(m2))
      ]);
      return m2 !== i3 && g2.setAttribute("inert", ""), g2.style.setProperty("--n", String(m2)), g2;
    }), d2 = f2("span", {
      part: `digit ${e}-digit`,
      className: "digit"
    }, r3);
    d2.style.setProperty("--current", String(i3)), d2.style.setProperty("--length", String(a)), super(t2, i3, d2, o), this.pos = s2, this._onAnimationsFinish = () => {
      this.el.classList.remove("is-spinning");
    }, this._numbers = r3, this.length = a;
  }
  willUpdate(t2) {
    const e = this.el.getBoundingClientRect();
    this._prevValue = this.value;
    const i3 = e[this.section.justify] - t2[this.section.justify], s2 = e.width / 2;
    this._prevCenter = this.section.justify === "left" ? i3 + s2 : i3 - s2;
  }
  update(t2) {
    this.el.style.setProperty("--current", String(t2)), this._numbers.forEach((e, i3) => i3 === t2 ? e.removeAttribute("inert") : e.setAttribute("inert", "")), this.value = t2;
  }
  didUpdate(t2) {
    const e = this.el.getBoundingClientRect(), i3 = e[this.section.justify] - t2[this.section.justify], s2 = e.width / 2, o = this.section.justify === "left" ? i3 + s2 : i3 - s2, a = this._prevCenter - o;
    a && this.el.animate({
      transform: [`translateX(${a}px)`, "none"]
    }, {
      ...this.flow.transformTiming,
      composite: "accumulate"
    });
    const r3 = this.getDelta();
    r3 && (this.el.classList.add("is-spinning"), this.el.animate({
      [u]: [-r3, 0]
    }, {
      ...this.flow.spinTiming ?? this.flow.transformTiming,
      composite: "accumulate"
    }), this.flow.addEventListener("animationsfinish", this._onAnimationsFinish, { once: true }));
  }
  getDelta() {
    var i3;
    if (this.flow.plugins)
      for (const s2 of this.flow.plugins) {
        const o = (i3 = s2.getDelta) == null ? void 0 : i3.call(s2, this.value, this._prevValue, this);
        if (o != null)
          return o;
      }
    const t2 = this.value - this._prevValue, e = this.flow.computedTrend || Math.sign(t2);
    return e < 0 && this.value > this._prevValue ? this.value - this.length - this._prevValue : e > 0 && this.value < this._prevValue ? this.length - this._prevValue + this.value : t2;
  }
};
var I = class extends x2 {
  constructor(t2, e, i3, s2) {
    const o = f2("span", {
      className: "symbol__value",
      textContent: i3
    });
    super(t2, i3, f2("span", {
      part: `symbol ${e}`,
      className: "symbol"
    }, [o]), s2), this.type = e, this._children = /* @__PURE__ */ new Map(), this._onChildRemove = (a) => () => {
      this._children.delete(a);
    }, this._children.set(i3, new y2(this.flow, o, {
      onRemove: this._onChildRemove(i3)
    }));
  }
  willUpdate(t2) {
    if (this.type === "decimal")
      return;
    const e = this.el.getBoundingClientRect();
    this._prevOffset = e[this.section.justify] - t2[this.section.justify];
  }
  update(t2) {
    if (this.value !== t2) {
      const e = this._children.get(this.value);
      e && (e.present = false);
      const i3 = this._children.get(t2);
      if (i3)
        i3.present = true;
      else {
        const s2 = f2("span", {
          className: "symbol__value",
          textContent: t2
        });
        this.el.appendChild(s2), this._children.set(t2, new y2(this.flow, s2, {
          animateIn: true,
          onRemove: this._onChildRemove(t2)
        }));
      }
    }
    this.value = t2;
  }
  didUpdate(t2) {
    if (this.type === "decimal")
      return;
    const i3 = this.el.getBoundingClientRect()[this.section.justify] - t2[this.section.justify], s2 = this._prevOffset - i3;
    s2 && this.el.animate({
      transform: [`translateX(${s2}px)`, "none"]
    }, { ...this.flow.transformTiming, composite: "accumulate" });
  }
};

// number-flow-pkg/package/dist/csp.mjs
var r2 = (s2) => [y, $(s2), x];

// number-flow-pkg/package/dist/index.mjs
var v2 = r2();
var f3 = "number-flow-connect";
var h2 = "number-flow-update";
var E2 = (e, { locales: t2, format: s2, numberPrefix: n2, numberSuffix: o, nonce: i3 } = {}) => {
  const a = z(e, new Intl.NumberFormat(t2, s2), n2, o);
  return V(a, { nonce: i3 });
};
var b2 = class extends B {
  constructor() {
    super(...arguments), this.connected = false;
  }
  connectedCallback() {
    this.connected = true, this.dispatchEvent(new Event(f3, { bubbles: true }));
  }
  disconnectedCallback() {
    this.connected = false;
  }
  get value() {
    return this._value;
  }
  update(t2) {
    (!this._formatter || this._prevFormat !== this.format || this._prevLocales !== this.locales) && (this._formatter = new Intl.NumberFormat(this.locales, this.format), this._prevFormat = this.format, this._prevLocales = this.locales), t2 != null && (this._value = t2), this.dispatchEvent(new Event(h2, { bubbles: true })), this.data = z(this._value, this._formatter, this.numberPrefix, this.numberSuffix);
  }
};
X("number-flow", b2);
export {
  f3 as CONNECT_EVENT,
  C as Digit,
  h2 as UPDATE_EVENT,
  E as canAnimate,
  l as continuous,
  b2 as default,
  X as define,
  z as formatToData,
  S as prefersReducedMotion,
  E2 as renderInnerHTML,
  v2 as styles
};
