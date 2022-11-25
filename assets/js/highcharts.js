/*
 Highcharts JS v10.3.1 (2022-10-31)

 (c) 2009-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
(function (Z, M) { "object" === typeof module && module.exports ? (M["default"] = M, module.exports = Z.document ? M(Z) : M) : "function" === typeof define && define.amd ? define("highcharts/highcharts", function () { return M(Z) }) : (Z.Highcharts && Z.Highcharts.error(16, !0), Z.Highcharts = M(Z)) })("undefined" !== typeof window ? window : this, function (Z) {
    function M(a, y, f, E) { a.hasOwnProperty(y) || (a[y] = E.apply(null, f), "function" === typeof CustomEvent && Z.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", { detail: { path: y, module: a[y] } }))) }
    var f = {}; M(f, "Core/Globals.js", [], function () {
        var a; (function (a) {
            a.SVG_NS = "http://www.w3.org/2000/svg"; a.product = "Highcharts"; a.version = "10.3.1"; a.win = "undefined" !== typeof Z ? Z : {}; a.doc = a.win.document; a.svg = a.doc && a.doc.createElementNS && !!a.doc.createElementNS(a.SVG_NS, "svg").createSVGRect; a.userAgent = a.win.navigator && a.win.navigator.userAgent || ""; a.isChrome = -1 !== a.userAgent.indexOf("Chrome"); a.isFirefox = -1 !== a.userAgent.indexOf("Firefox"); a.isMS = /(edge|msie|trident)/i.test(a.userAgent) && !a.win.opera;
            a.isSafari = !a.isChrome && -1 !== a.userAgent.indexOf("Safari"); a.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(a.userAgent); a.isWebKit = -1 !== a.userAgent.indexOf("AppleWebKit"); a.deg2rad = 2 * Math.PI / 360; a.hasBidiBug = a.isFirefox && 4 > parseInt(a.userAgent.split("Firefox/")[1], 10); a.hasTouch = !!a.win.TouchEvent; a.marginNames = ["plotTop", "marginRight", "marginBottom", "plotLeft"]; a.noop = function () { }; a.supportsPassiveEvents = function () {
                var f = !1; if (!a.isMS) {
                    var y = Object.defineProperty({}, "passive", {
                        get: function () {
                            f =
                            !0
                        }
                    }); a.win.addEventListener && a.win.removeEventListener && (a.win.addEventListener("testPassive", a.noop, y), a.win.removeEventListener("testPassive", a.noop, y))
                } return f
            }(); a.charts = []; a.dateFormats = {}; a.seriesTypes = {}; a.symbolSizes = {}; a.chartCount = 0
        })(a || (a = {})); ""; return a
    }); M(f, "Core/Utilities.js", [f["Core/Globals.js"]], function (a) {
        function f(c, d, m, D) {
            var k = d ? "Highcharts error" : "Highcharts warning"; 32 === c && (c = "" + k + ": Deprecated member"); var z = p(c), q = z ? "" + k + " #" + c + ": www.highcharts.com/errors/" + c + "/" :
                c.toString(); if ("undefined" !== typeof D) { var H = ""; z && (q += "?"); I(D, function (c, k) { H += "\n - ".concat(k, ": ").concat(c); z && (q += encodeURI(k) + "=" + encodeURI(c)) }); q += H } w(a, "displayError", { chart: m, code: c, message: q, params: D }, function () { if (d) throw Error(q); h.console && -1 === f.messages.indexOf(q) && console.warn(q) }); f.messages.push(q)
        } function x(c, d) {
            var k = {}; I(c, function (D, z) { if (J(c[z], !0) && !c.nodeType && d[z]) D = x(c[z], d[z]), Object.keys(D).length && (k[z] = D); else if (J(c[z]) || c[z] !== d[z] || z in c && !(z in d)) k[z] = c[z] });
            return k
        } function E(c, d) { return parseInt(c, d || 10) } function B(c) { return "string" === typeof c } function A(c) { c = Object.prototype.toString.call(c); return "[object Array]" === c || "[object Array Iterator]" === c } function J(c, d) { return !!c && "object" === typeof c && (!d || !A(c)) } function t(c) { return J(c) && "number" === typeof c.nodeType } function u(c) { var k = c && c.constructor; return !(!J(c, !0) || t(c) || !k || !k.name || "Object" === k.name) } function p(c) { return "number" === typeof c && !isNaN(c) && Infinity > c && -Infinity < c } function g(c) {
            return "undefined" !==
                typeof c && null !== c
        } function b(c, d, h) { var k = B(d) && !g(h), z, m = function (D, d) { g(D) ? c.setAttribute(d, D) : k ? (z = c.getAttribute(d)) || "class" !== d || (z = c.getAttribute(d + "Name")) : c.removeAttribute(d) }; B(d) ? m(h, d) : I(d, m); return z } function l(c, d) { var k; c || (c = {}); for (k in d) c[k] = d[k]; return c } function n() { for (var c = arguments, d = c.length, h = 0; h < d; h++) { var D = c[h]; if ("undefined" !== typeof D && null !== D) return D } } function e(c, d) {
            a.isMS && !a.svg && d && g(d.opacity) && (d.filter = "alpha(opacity=".concat(100 * d.opacity, ")")); l(c.style,
                d)
        } function r(c) { return Math.pow(10, Math.floor(Math.log(c) / Math.LN10)) } function G(c, d) { return 1E14 < c ? c : parseFloat(c.toPrecision(d || 14)) } function K(c, d, m) {
            var k = a.getStyle || K; if ("width" === d) return d = Math.min(c.offsetWidth, c.scrollWidth), m = c.getBoundingClientRect && c.getBoundingClientRect().width, m < d && m >= d - 1 && (d = Math.floor(m)), Math.max(0, d - (k(c, "padding-left", !0) || 0) - (k(c, "padding-right", !0) || 0)); if ("height" === d) return Math.max(0, Math.min(c.offsetHeight, c.scrollHeight) - (k(c, "padding-top", !0) || 0) - (k(c,
                "padding-bottom", !0) || 0)); h.getComputedStyle || f(27, !0); if (c = h.getComputedStyle(c, void 0)) { var z = c.getPropertyValue(d); n(m, "opacity" !== d) && (z = E(z)) } return z
        } function I(c, d, h) { for (var k in c) Object.hasOwnProperty.call(c, k) && d.call(h || c[k], c[k], k, c) } function N(c, d, h) {
            function k(d, C) { var k = c.removeEventListener || a.removeEventListenerPolyfill; k && k.call(c, d, C, !1) } function m(D) { var C; if (c.nodeName) { if (d) { var L = {}; L[d] = !0 } else L = D; I(L, function (c, d) { if (D[d]) for (C = D[d].length; C--;)k(d, D[d][C].fn) }) } } var q =
                "function" === typeof c && c.prototype || c; if (Object.hasOwnProperty.call(q, "hcEvents")) { var z = q.hcEvents; d ? (q = z[d] || [], h ? (z[d] = q.filter(function (c) { return h !== c.fn }), k(d, h)) : (m(z), z[d] = [])) : (m(z), delete q.hcEvents) }
        } function w(c, d, h, D) {
            h = h || {}; if (v.createEvent && (c.dispatchEvent || c.fireEvent && c !== a)) { var k = v.createEvent("Events"); k.initEvent(d, !0, !0); h = l(k, h); c.dispatchEvent ? c.dispatchEvent(h) : c.fireEvent(d, h) } else if (c.hcEvents) {
                h.target || l(h, {
                    preventDefault: function () { h.defaultPrevented = !0 }, target: c,
                    type: d
                }); k = []; for (var m = c, q = !1; m.hcEvents;)Object.hasOwnProperty.call(m, "hcEvents") && m.hcEvents[d] && (k.length && (q = !0), k.unshift.apply(k, m.hcEvents[d])), m = Object.getPrototypeOf(m); q && k.sort(function (c, d) { return c.order - d.order }); k.forEach(function (d) { !1 === d.fn.call(c, h) && h.preventDefault() })
            } D && !h.defaultPrevented && D.call(c, h)
        } var m = a.charts, v = a.doc, h = a.win; (f || (f = {})).messages = []; Math.easeInOutSine = function (c) { return -.5 * (Math.cos(Math.PI * c) - 1) }; var d = Array.prototype.find ? function (c, d) { return c.find(d) } :
            function (c, d) { var k, D = c.length; for (k = 0; k < D; k++)if (d(c[k], k)) return c[k] }; I({ map: "map", each: "forEach", grep: "filter", reduce: "reduce", some: "some" }, function (c, d) { a[d] = function (k) { var D; f(32, !1, void 0, (D = {}, D["Highcharts.".concat(d)] = "use Array.".concat(c), D)); return Array.prototype[c].apply(k, [].slice.call(arguments, 1)) } }); var c, q = function () { var d = Math.random().toString(36).substring(2, 9) + "-", h = 0; return function () { return "highcharts-" + (c ? "" : d) + h++ } }(); h.jQuery && (h.jQuery.fn.highcharts = function () {
                var c =
                    [].slice.call(arguments); if (this[0]) return c[0] ? (new (a[B(c[0]) ? c.shift() : "Chart"])(this[0], c[0], c[1]), this) : m[b(this[0], "data-highcharts-chart")]
            }); d = {
                addEvent: function (c, d, h, D) {
                    void 0 === D && (D = {}); var k = "function" === typeof c && c.prototype || c; Object.hasOwnProperty.call(k, "hcEvents") || (k.hcEvents = {}); k = k.hcEvents; a.Point && c instanceof a.Point && c.series && c.series.chart && (c.series.chart.runTrackerClick = !0); var m = c.addEventListener || a.addEventListenerPolyfill; m && m.call(c, d, h, a.supportsPassiveEvents ? {
                        passive: void 0 ===
                            D.passive ? -1 !== d.indexOf("touch") : D.passive, capture: !1
                    } : !1); k[d] || (k[d] = []); k[d].push({ fn: h, order: "number" === typeof D.order ? D.order : Infinity }); k[d].sort(function (c, d) { return c.order - d.order }); return function () { N(c, d, h) }
                }, arrayMax: function (c) { for (var d = c.length, k = c[0]; d--;)c[d] > k && (k = c[d]); return k }, arrayMin: function (c) { for (var d = c.length, k = c[0]; d--;)c[d] < k && (k = c[d]); return k }, attr: b, clamp: function (c, d, h) { return c > d ? c < h ? c : h : d }, cleanRecursively: x, clearTimeout: function (c) { g(c) && clearTimeout(c) }, correctFloat: G,
                createElement: function (c, d, h, D, m) { c = v.createElement(c); d && l(c, d); m && e(c, { padding: "0", border: "none", margin: "0" }); h && e(c, h); D && D.appendChild(c); return c }, css: e, defined: g, destroyObjectProperties: function (c, d) { I(c, function (k, D) { k && k !== d && k.destroy && k.destroy(); delete c[D] }) }, discardElement: function (c) { c && c.parentElement && c.parentElement.removeChild(c) }, erase: function (c, d) { for (var k = c.length; k--;)if (c[k] === d) { c.splice(k, 1); break } }, error: f, extend: l, extendClass: function (c, d) {
                    var k = function () { }; k.prototype =
                        new c; l(k.prototype, d); return k
                }, find: d, fireEvent: w, getMagnitude: r, getNestedProperty: function (c, d) { for (c = c.split("."); c.length && g(d);) { var k = c.shift(); if ("undefined" === typeof k || "__proto__" === k) return; d = d[k]; if (!g(d) || "function" === typeof d || "number" === typeof d.nodeType || d === h) return } return d }, getStyle: K, inArray: function (c, d, h) { f(32, !1, void 0, { "Highcharts.inArray": "use Array.indexOf" }); return d.indexOf(c, h) }, isArray: A, isClass: u, isDOMElement: t, isFunction: function (c) { return "function" === typeof c }, isNumber: p,
                isObject: J, isString: B, keys: function (c) { f(32, !1, void 0, { "Highcharts.keys": "use Object.keys" }); return Object.keys(c) }, merge: function () { var c, d = arguments, h = {}, D = function (c, d) { "object" !== typeof c && (c = {}); I(d, function (k, C) { "__proto__" !== C && "constructor" !== C && (!J(k, !0) || u(k) || t(k) ? c[C] = d[C] : c[C] = D(c[C] || {}, k)) }); return c }; !0 === d[0] && (h = d[1], d = Array.prototype.slice.call(d, 2)); var m = d.length; for (c = 0; c < m; c++)h = D(h, d[c]); return h }, normalizeTickInterval: function (c, d, h, D, m) {
                    var k = c; h = n(h, r(c)); var q = c / h; d || (d =
                        m ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === D && (1 === h ? d = d.filter(function (c) { return 0 === c % 1 }) : .1 >= h && (d = [1 / h]))); for (D = 0; D < d.length && !(k = d[D], m && k * h >= c || !m && q <= (d[D] + (d[D + 1] || d[D])) / 2); D++); return k = G(k * h, -Math.round(Math.log(.001) / Math.LN10))
                }, objectEach: I, offset: function (c) {
                    var d = v.documentElement; c = c.parentElement || c.parentNode ? c.getBoundingClientRect() : { top: 0, left: 0, width: 0, height: 0 }; return {
                        top: c.top + (h.pageYOffset || d.scrollTop) - (d.clientTop || 0), left: c.left + (h.pageXOffset || d.scrollLeft) -
                            (d.clientLeft || 0), width: c.width, height: c.height
                    }
                }, pad: function (c, d, h) { return Array((d || 2) + 1 - String(c).replace("-", "").length).join(h || "0") + c }, pick: n, pInt: E, relativeLength: function (c, d, h) { return /%$/.test(c) ? d * parseFloat(c) / 100 + (h || 0) : parseFloat(c) }, removeEvent: N, splat: function (c) { return A(c) ? c : [c] }, stableSort: function (c, d) { var h = c.length, D, k; for (k = 0; k < h; k++)c[k].safeI = k; c.sort(function (c, h) { D = d(c, h); return 0 === D ? c.safeI - h.safeI : D }); for (k = 0; k < h; k++)delete c[k].safeI }, syncTimeout: function (c, d, h) {
                    if (0 <
                        d) return setTimeout(c, d, h); c.call(0, h); return -1
                }, timeUnits: { millisecond: 1, second: 1E3, minute: 6E4, hour: 36E5, day: 864E5, week: 6048E5, month: 24192E5, year: 314496E5 }, uniqueKey: q, useSerialIds: function (d) { return c = n(d, c) }, wrap: function (c, d, h) { var D = c[d]; c[d] = function () { var c = arguments, d = this; return h.apply(this, [function () { return D.apply(d, arguments.length ? arguments : c) }].concat([].slice.call(arguments))) } }
            }; ""; return d
    }); M(f, "Core/Chart/ChartDefaults.js", [], function () {
        return {
            alignThresholds: !1, panning: {
                enabled: !1,
                type: "x"
            }, styledMode: !1, borderRadius: 0, colorCount: 10, allowMutatingData: !0, defaultSeriesType: "line", ignoreHiddenSeries: !0, spacing: [10, 10, 15, 10], resetZoomButton: { theme: { zIndex: 6 }, position: { align: "right", x: -10, y: 10 } }, zoomBySingleTouch: !1, zooming: { singleTouch: !1, resetButton: { theme: { zIndex: 6 }, position: { align: "right", x: -10, y: 10 } } }, width: null, height: null, borderColor: "#335cad", backgroundColor: "#ffffff", plotBorderColor: "#cccccc"
        }
    }); M(f, "Core/Color/Color.js", [f["Core/Globals.js"], f["Core/Utilities.js"]], function (a,
        f) {
            var y = f.isNumber, E = f.merge, B = f.pInt; f = function () {
                function f(y) { this.rgba = [NaN, NaN, NaN, NaN]; this.input = y; var t = a.Color; if (t && t !== f) return new t(y); if (!(this instanceof f)) return new f(y); this.init(y) } f.parse = function (a) { return a ? new f(a) : f.None }; f.prototype.init = function (a) {
                    var t; if ("object" === typeof a && "undefined" !== typeof a.stops) this.stops = a.stops.map(function (b) { return new f(b[1]) }); else if ("string" === typeof a) {
                        this.input = a = f.names[a.toLowerCase()] || a; if ("#" === a.charAt(0)) {
                            var u = a.length; var p =
                                parseInt(a.substr(1), 16); 7 === u ? t = [(p & 16711680) >> 16, (p & 65280) >> 8, p & 255, 1] : 4 === u && (t = [(p & 3840) >> 4 | (p & 3840) >> 8, (p & 240) >> 4 | p & 240, (p & 15) << 4 | p & 15, 1])
                        } if (!t) for (p = f.parsers.length; p-- && !t;) { var g = f.parsers[p]; (u = g.regex.exec(a)) && (t = g.parse(u)) }
                    } t && (this.rgba = t)
                }; f.prototype.get = function (a) {
                    var t = this.input, u = this.rgba; if ("object" === typeof t && "undefined" !== typeof this.stops) { var p = E(t); p.stops = [].slice.call(p.stops); this.stops.forEach(function (g, b) { p.stops[b] = [p.stops[b][0], g.get(a)] }); return p } return u &&
                        y(u[0]) ? "rgb" === a || !a && 1 === u[3] ? "rgb(" + u[0] + "," + u[1] + "," + u[2] + ")" : "a" === a ? "".concat(u[3]) : "rgba(" + u.join(",") + ")" : t
                }; f.prototype.brighten = function (a) { var t = this.rgba; if (this.stops) this.stops.forEach(function (p) { p.brighten(a) }); else if (y(a) && 0 !== a) for (var u = 0; 3 > u; u++)t[u] += B(255 * a), 0 > t[u] && (t[u] = 0), 255 < t[u] && (t[u] = 255); return this }; f.prototype.setOpacity = function (a) { this.rgba[3] = a; return this }; f.prototype.tweenTo = function (a, t) {
                    var u = this.rgba, p = a.rgba; if (!y(u[0]) || !y(p[0])) return a.input || "none"; a =
                        1 !== p[3] || 1 !== u[3]; return (a ? "rgba(" : "rgb(") + Math.round(p[0] + (u[0] - p[0]) * (1 - t)) + "," + Math.round(p[1] + (u[1] - p[1]) * (1 - t)) + "," + Math.round(p[2] + (u[2] - p[2]) * (1 - t)) + (a ? "," + (p[3] + (u[3] - p[3]) * (1 - t)) : "") + ")"
                }; f.names = { white: "#ffffff", black: "#000000" }; f.parsers = [{ regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/, parse: function (a) { return [B(a[1]), B(a[2]), B(a[3]), parseFloat(a[4], 10)] } }, {
                    regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, parse: function (a) {
                        return [B(a[1]),
                        B(a[2]), B(a[3]), 1]
                    }
                }]; f.None = new f(""); return f
            }(); ""; return f
    }); M(f, "Core/Color/Palettes.js", [], function () { return { colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" ") } }); M(f, "Core/Time.js", [f["Core/Globals.js"], f["Core/Utilities.js"]], function (a, f) {
        var y = a.win, E = f.defined, B = f.error, A = f.extend, J = f.isObject, t = f.merge, u = f.objectEach, p = f.pad, g = f.pick, b = f.splat, l = f.timeUnits, n = a.isSafari && y.Intl && y.Intl.DateTimeFormat.prototype.formatRange, e = a.isSafari &&
            y.Intl && !y.Intl.DateTimeFormat.prototype.formatRange; f = function () {
                function r(b) { this.options = {}; this.variableTimezone = this.useUTC = !1; this.Date = y.Date; this.getTimezoneOffset = this.timezoneOffsetFunction(); this.update(b) } r.prototype.get = function (b, n) { if (this.variableTimezone || this.timezoneOffset) { var e = n.getTime(), g = e - this.getTimezoneOffset(n); n.setTime(g); b = n["getUTC" + b](); n.setTime(e); return b } return this.useUTC ? n["getUTC" + b]() : n["get" + b]() }; r.prototype.set = function (b, e, g) {
                    if (this.variableTimezone ||
                        this.timezoneOffset) { if ("Milliseconds" === b || "Seconds" === b || "Minutes" === b && 0 === this.getTimezoneOffset(e) % 36E5) return e["setUTC" + b](g); var l = this.getTimezoneOffset(e); l = e.getTime() - l; e.setTime(l); e["setUTC" + b](g); b = this.getTimezoneOffset(e); l = e.getTime() + b; return e.setTime(l) } return this.useUTC || n && "FullYear" === b ? e["setUTC" + b](g) : e["set" + b](g)
                }; r.prototype.update = function (b) {
                    void 0 === b && (b = {}); var e = g(b.useUTC, !0); this.options = b = t(!0, this.options, b); this.Date = b.Date || y.Date || Date; this.timezoneOffset =
                        (this.useUTC = e) && b.timezoneOffset || void 0; this.getTimezoneOffset = this.timezoneOffsetFunction(); this.variableTimezone = e && !(!b.getTimezoneOffset && !b.timezone)
                }; r.prototype.makeTime = function (b, n, l, r, w, m) { if (this.useUTC) { var v = this.Date.UTC.apply(0, arguments); var h = this.getTimezoneOffset(v); v += h; var d = this.getTimezoneOffset(v); h !== d ? v += d - h : h - 36E5 !== this.getTimezoneOffset(v - 36E5) || e || (v -= 36E5) } else v = (new this.Date(b, n, g(l, 1), g(r, 0), g(w, 0), g(m, 0))).getTime(); return v }; r.prototype.timezoneOffsetFunction =
                    function () { var b = this, e = this.options, n = e.getTimezoneOffset, l = e.moment || y.moment; if (!this.useUTC) return function (b) { return 6E4 * (new Date(b.toString())).getTimezoneOffset() }; if (e.timezone) { if (l) return function (b) { return 6E4 * -l.tz(b, e.timezone).utcOffset() }; B(25) } return this.useUTC && n ? function (b) { return 6E4 * n(b.valueOf()) } : function () { return 6E4 * (b.timezoneOffset || 0) } }; r.prototype.dateFormat = function (b, e, n) {
                        if (!E(e) || isNaN(e)) return a.defaultOptions.lang && a.defaultOptions.lang.invalidDate || ""; b = g(b, "%Y-%m-%d %H:%M:%S");
                        var l = this, r = new this.Date(e), m = this.get("Hours", r), v = this.get("Day", r), h = this.get("Date", r), d = this.get("Month", r), c = this.get("FullYear", r), q = a.defaultOptions.lang, k = q && q.weekdays, z = q && q.shortWeekdays; r = A({ a: z ? z[v] : k[v].substr(0, 3), A: k[v], d: p(h), e: p(h, 2, " "), w: v, b: q.shortMonths[d], B: q.months[d], m: p(d + 1), o: d + 1, y: c.toString().substr(2, 2), Y: c, H: p(m), k: m, I: p(m % 12 || 12), l: m % 12 || 12, M: p(this.get("Minutes", r)), p: 12 > m ? "AM" : "PM", P: 12 > m ? "am" : "pm", S: p(r.getSeconds()), L: p(Math.floor(e % 1E3), 3) }, a.dateFormats); u(r,
                            function (c, d) { for (; -1 !== b.indexOf("%" + d);)b = b.replace("%" + d, "function" === typeof c ? c.call(l, e) : c) }); return n ? b.substr(0, 1).toUpperCase() + b.substr(1) : b
                    }; r.prototype.resolveDTLFormat = function (e) { return J(e, !0) ? e : (e = b(e), { main: e[0], from: e[1], to: e[2] }) }; r.prototype.getTimeTicks = function (b, e, n, r) {
                        var w = this, m = [], v = {}, h = new w.Date(e), d = b.unitRange, c = b.count || 1, q; r = g(r, 1); if (E(e)) {
                            w.set("Milliseconds", h, d >= l.second ? 0 : c * Math.floor(w.get("Milliseconds", h) / c)); d >= l.second && w.set("Seconds", h, d >= l.minute ? 0 : c *
                                Math.floor(w.get("Seconds", h) / c)); d >= l.minute && w.set("Minutes", h, d >= l.hour ? 0 : c * Math.floor(w.get("Minutes", h) / c)); d >= l.hour && w.set("Hours", h, d >= l.day ? 0 : c * Math.floor(w.get("Hours", h) / c)); d >= l.day && w.set("Date", h, d >= l.month ? 1 : Math.max(1, c * Math.floor(w.get("Date", h) / c))); if (d >= l.month) { w.set("Month", h, d >= l.year ? 0 : c * Math.floor(w.get("Month", h) / c)); var k = w.get("FullYear", h) } d >= l.year && w.set("FullYear", h, k - k % c); d === l.week && (k = w.get("Day", h), w.set("Date", h, w.get("Date", h) - k + r + (k < r ? -7 : 0))); k = w.get("FullYear",
                                    h); r = w.get("Month", h); var z = w.get("Date", h), H = w.get("Hours", h); e = h.getTime(); !w.variableTimezone && w.useUTC || !E(n) || (q = n - e > 4 * l.month || w.getTimezoneOffset(e) !== w.getTimezoneOffset(n)); e = h.getTime(); for (h = 1; e < n;)m.push(e), e = d === l.year ? w.makeTime(k + h * c, 0) : d === l.month ? w.makeTime(k, r + h * c) : !q || d !== l.day && d !== l.week ? q && d === l.hour && 1 < c ? w.makeTime(k, r, z, H + h * c) : e + d * c : w.makeTime(k, r, z + h * c * (d === l.day ? 1 : 7)), h++; m.push(e); d <= l.hour && 1E4 > m.length && m.forEach(function (c) {
                                        0 === c % 18E5 && "000000000" === w.dateFormat("%H%M%S%L",
                                            c) && (v[c] = "day")
                                    })
                        } m.info = A(b, { higherRanks: v, totalRange: d * c }); return m
                    }; r.prototype.getDateFormat = function (b, e, n, r) { var g = this.dateFormat("%m-%d %H:%M:%S.%L", e), m = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 }, v = "millisecond"; for (h in l) { if (b === l.week && +this.dateFormat("%w", e) === n && "00:00:00.000" === g.substr(6)) { var h = "week"; break } if (l[h] > b) { h = v; break } if (m[h] && g.substr(m[h]) !== "01-01 00:00:00.000".substr(m[h])) break; "week" !== h && (v = h) } return this.resolveDTLFormat(r[h]).main }; return r
            }(); ""; return f
    });
    M(f, "Core/Defaults.js", [f["Core/Chart/ChartDefaults.js"], f["Core/Color/Color.js"], f["Core/Globals.js"], f["Core/Color/Palettes.js"], f["Core/Time.js"], f["Core/Utilities.js"]], function (a, f, x, E, B, A) {
        f = f.parse; var y = A.merge, t = {
            colors: E.colors, symbols: ["circle", "diamond", "square", "triangle", "triangle-down"], lang: {
                loading: "Loading...", months: "January February March April May June July August September October November December".split(" "), shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), decimalPoint: ".", numericSymbols: "kMGTPE".split(""), resetZoom: "Reset zoom", resetZoomTitle: "Reset zoom level 1:1", thousandsSep: " "
            }, global: {}, time: { Date: void 0, getTimezoneOffset: void 0, timezone: void 0, timezoneOffset: 0, useUTC: !0 }, chart: a, title: { text: "Chart title", align: "center", margin: 15, widthAdjust: -44 }, subtitle: { text: "", align: "center", widthAdjust: -44 }, caption: { margin: 15, text: "", align: "left", verticalAlign: "bottom" }, plotOptions: {},
            labels: { style: { position: "absolute", color: "#333333" } }, legend: {
                enabled: !0, align: "center", alignColumns: !0, className: "highcharts-no-tooltip", layout: "horizontal", labelFormatter: function () { return this.name }, borderColor: "#999999", borderRadius: 0, navigation: { activeColor: "#003399", inactiveColor: "#cccccc" }, itemStyle: { color: "#333333", cursor: "pointer", fontSize: "12px", fontWeight: "bold", textOverflow: "ellipsis" }, itemHoverStyle: { color: "#000000" }, itemHiddenStyle: { color: "#cccccc" }, shadow: !1, itemCheckboxStyle: {
                    position: "absolute",
                    width: "13px", height: "13px"
                }, squareSymbol: !0, symbolPadding: 5, verticalAlign: "bottom", x: 0, y: 0, title: { style: { fontWeight: "bold" } }
            }, loading: { labelStyle: { fontWeight: "bold", position: "relative", top: "45%" }, style: { position: "absolute", backgroundColor: "#ffffff", opacity: .5, textAlign: "center" } }, tooltip: {
                enabled: !0, animation: x.svg, borderRadius: 3, dateTimeLabelFormats: {
                    millisecond: "%A, %b %e, %H:%M:%S.%L", second: "%A, %b %e, %H:%M:%S", minute: "%A, %b %e, %H:%M", hour: "%A, %b %e, %H:%M", day: "%A, %b %e, %Y", week: "Week from %A, %b %e, %Y",
                    month: "%B %Y", year: "%Y"
                }, footerFormat: "", headerShape: "callout", hideDelay: 500, padding: 8, shape: "callout", shared: !1, snap: x.isTouchDevice ? 25 : 10, headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>', pointFormat: '<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>', backgroundColor: f("#f7f7f7").setOpacity(.85).get(), borderWidth: 1, shadow: !0, stickOnContact: !1, style: { color: "#333333", cursor: "default", fontSize: "12px", whiteSpace: "nowrap" }, useHTML: !1
            }, credits: {
                enabled: 0,
                href: "https://www.highcharts.com?credits", position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 }, style: { cursor: "pointer", color: "#999999", fontSize: "9px" }, text: "Highcharts.com"
            }
        }; t.chart.styledMode = !1; ""; var u = new B(y(t.global, t.time)); a = { defaultOptions: t, defaultTime: u, getOptions: function () { return t }, setOptions: function (a) { y(!0, t, a); if (a.time || a.global) x.time ? x.time.update(y(t.global, t.time, a.global, a.time)) : x.time = u; return t } }; ""; return a
    }); M(f, "Core/Animation/Fx.js", [f["Core/Color/Color.js"],
    f["Core/Globals.js"], f["Core/Utilities.js"]], function (a, f, x) {
        var y = a.parse, B = f.win, A = x.isNumber, J = x.objectEach; return function () {
            function a(a, p, g) { this.pos = NaN; this.options = p; this.elem = a; this.prop = g } a.prototype.dSetter = function () {
                var a = this.paths, p = a && a[0]; a = a && a[1]; var g = this.now || 0, b = []; if (1 !== g && p && a) if (p.length === a.length && 1 > g) for (var l = 0; l < a.length; l++) { for (var n = p[l], e = a[l], r = [], G = 0; G < e.length; G++) { var K = n[G], I = e[G]; A(K) && A(I) && ("A" !== e[0] || 4 !== G && 5 !== G) ? r[G] = K + g * (I - K) : r[G] = I } b.push(r) } else b =
                    a; else b = this.toD || []; this.elem.attr("d", b, void 0, !0)
            }; a.prototype.update = function () { var a = this.elem, p = this.prop, g = this.now, b = this.options.step; if (this[p + "Setter"]) this[p + "Setter"](); else a.attr ? a.element && a.attr(p, g, null, !0) : a.style[p] = g + this.unit; b && b.call(a, g, this) }; a.prototype.run = function (t, p, g) {
                var b = this, l = b.options, n = function (e) { return n.stopped ? !1 : b.step(e) }, e = B.requestAnimationFrame || function (b) { setTimeout(b, 13) }, r = function () {
                    for (var b = 0; b < a.timers.length; b++)a.timers[b]() || a.timers.splice(b--,
                        1); a.timers.length && e(r)
                }; t !== p || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +new Date, this.start = t, this.end = p, this.unit = g, this.now = this.start, this.pos = 0, n.elem = this.elem, n.prop = this.prop, n() && 1 === a.timers.push(n) && e(r)) : (delete l.curAnim[this.prop], l.complete && 0 === Object.keys(l.curAnim).length && l.complete.call(this.elem))
            }; a.prototype.step = function (a) {
                var p = +new Date, g = this.options, b = this.elem, l = g.complete, n = g.duration, e = g.curAnim; if (b.attr && !b.element) a = !1; else if (a || p >= n + this.startTime) {
                    this.now =
                    this.end; this.pos = 1; this.update(); var r = e[this.prop] = !0; J(e, function (b) { !0 !== b && (r = !1) }); r && l && l.call(b); a = !1
                } else this.pos = g.easing((p - this.startTime) / n), this.now = this.start + (this.end - this.start) * this.pos, this.update(), a = !0; return a
            }; a.prototype.initPath = function (a, p, g) {
                function b(b, m) { for (; b.length < t;) { var e = b[0], h = m[t - b.length]; h && "M" === e[0] && (b[0] = "C" === h[0] ? ["C", e[1], e[2], e[1], e[2], e[1], e[2]] : ["L", e[1], e[2]]); b.unshift(e); r && (e = b.pop(), b.push(b[b.length - 1], e)) } } function l(b, m) {
                    for (; b.length <
                        t;)if (m = b[Math.floor(b.length / G) - 1].slice(), "C" === m[0] && (m[1] = m[5], m[2] = m[6]), r) { var e = b[Math.floor(b.length / G)].slice(); b.splice(b.length / 2, 0, m, e) } else b.push(m)
                } var n = a.startX, e = a.endX; g = g.slice(); var r = a.isArea, G = r ? 2 : 1; p = p && p.slice(); if (!p) return [g, g]; if (n && e && e.length) { for (a = 0; a < n.length; a++)if (n[a] === e[0]) { var K = a; break } else if (n[0] === e[e.length - n.length + a]) { K = a; var I = !0; break } else if (n[n.length - 1] === e[e.length - n.length + a]) { K = n.length - a; break } "undefined" === typeof K && (p = []) } if (p.length && A(K)) {
                    var t =
                        g.length + K * G; I ? (b(p, g), l(g, p)) : (b(g, p), l(p, g))
                } return [p, g]
            }; a.prototype.fillSetter = function () { a.prototype.strokeSetter.apply(this, arguments) }; a.prototype.strokeSetter = function () { this.elem.attr(this.prop, y(this.start).tweenTo(y(this.end), this.pos), void 0, !0) }; a.timers = []; return a
        }()
    }); M(f, "Core/Animation/AnimationUtilities.js", [f["Core/Animation/Fx.js"], f["Core/Utilities.js"]], function (a, f) {
        function y(b) { return u(b) ? p({ duration: 500, defer: 0 }, b) : { duration: b ? 500 : 0, defer: 0 } } function E(b, n) {
            for (var e = a.timers.length; e--;)a.timers[e].elem !==
                b || n && n !== a.timers[e].prop || (a.timers[e].stopped = !0)
        } var B = f.defined, A = f.getStyle, J = f.isArray, t = f.isNumber, u = f.isObject, p = f.merge, g = f.objectEach, b = f.pick; return {
            animate: function (b, n, e) {
                var r, l = "", K, I; if (!u(e)) { var f = arguments; e = { duration: f[2], easing: f[3], complete: f[4] } } t(e.duration) || (e.duration = 400); e.easing = "function" === typeof e.easing ? e.easing : Math[e.easing] || Math.easeInOutSine; e.curAnim = p(n); g(n, function (g, m) {
                    E(b, m); I = new a(b, e, m); K = void 0; "d" === m && J(n.d) ? (I.paths = I.initPath(b, b.pathArray, n.d),
                        I.toD = n.d, r = 0, K = 1) : b.attr ? r = b.attr(m) : (r = parseFloat(A(b, m)) || 0, "opacity" !== m && (l = "px")); K || (K = g); "string" === typeof K && K.match("px") && (K = K.replace(/px/g, "")); I.run(r, K, l)
                })
            }, animObject: y, getDeferredAnimation: function (b, n, e) { var r = y(n), g = 0, l = 0; (e ? [e] : b.series).forEach(function (b) { b = y(b.options.animation); g = n && B(n.defer) ? r.defer : Math.max(g, b.duration + b.defer); l = Math.min(r.duration, b.duration) }); b.renderer.forExport && (g = 0); return { defer: Math.max(0, g - l), duration: Math.min(g, l) } }, setAnimation: function (g,
                n) { n.renderer.globalAnimation = b(g, n.options.chart.animation, !0) }, stop: E
        }
    }); M(f, "Core/Renderer/HTML/AST.js", [f["Core/Globals.js"], f["Core/Utilities.js"]], function (a, f) {
        var y = a.SVG_NS, E = f.attr, B = f.createElement, A = f.css, J = f.error, t = f.isFunction, u = f.isString, p = f.objectEach, g = f.splat, b = (f = a.win.trustedTypes) && t(f.createPolicy) && f.createPolicy("highcharts", { createHTML: function (b) { return b } }), l = b ? b.createHTML("") : ""; try { var n = !!(new DOMParser).parseFromString(l, "text/html") } catch (e) { n = !1 } t = function () {
            function e(b) {
                this.nodes =
                "string" === typeof b ? this.parseMarkup(b) : b
            } e.filterUserAttributes = function (b) { p(b, function (n, g) { var r = !0; -1 === e.allowedAttributes.indexOf(g) && (r = !1); -1 !== ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(g) && (r = u(n) && e.allowedReferences.some(function (b) { return 0 === n.indexOf(b) })); r || (J(33, !1, void 0, { "Invalid attribute in config": "".concat(g) }), delete b[g]) }); return b }; e.parseStyle = function (b) {
                return b.split(";").reduce(function (b, e) {
                    e = e.split(":").map(function (b) { return b.trim() }); var n = e.shift();
                    n && e.length && (b[n.replace(/-([a-z])/g, function (b) { return b[1].toUpperCase() })] = e.join(":")); return b
                }, {})
            }; e.setElementHTML = function (b, n) { b.innerHTML = e.emptyHTML; n && (new e(n)).addToDOM(b) }; e.prototype.addToDOM = function (b) {
                function n(b, r) {
                    var l; g(b).forEach(function (b) {
                        var m = b.tagName, v = b.textContent ? a.doc.createTextNode(b.textContent) : void 0, h = e.bypassHTMLFiltering; if (m) if ("#text" === m) var d = v; else if (-1 !== e.allowedTags.indexOf(m) || h) {
                            m = a.doc.createElementNS("svg" === m ? y : r.namespaceURI || y, m); var c =
                                b.attributes || {}; p(b, function (d, h) { "tagName" !== h && "attributes" !== h && "children" !== h && "style" !== h && "textContent" !== h && (c[h] = d) }); E(m, h ? c : e.filterUserAttributes(c)); b.style && A(m, b.style); v && m.appendChild(v); n(b.children || [], m); d = m
                        } else J(33, !1, void 0, { "Invalid tagName in config": m }); d && r.appendChild(d); l = d
                    }); return l
                } return n(this.nodes, b)
            }; e.prototype.parseMarkup = function (g) {
                var l = []; g = g.trim().replace(/ style=(["'])/g, " data-style=$1"); if (n) g = (new DOMParser).parseFromString(b ? b.createHTML(g) : g, "text/html");
                else { var r = B("div"); r.innerHTML = g; g = { body: r } } var a = function (b, n) { var m = b.nodeName.toLowerCase(), v = { tagName: m }; "#text" === m && (v.textContent = b.textContent || ""); if (m = b.attributes) { var h = {};[].forEach.call(m, function (c) { "data-style" === c.name ? v.style = e.parseStyle(c.value) : h[c.name] = c.value }); v.attributes = h } if (b.childNodes.length) { var d = [];[].forEach.call(b.childNodes, function (c) { a(c, d) }); d.length && (v.children = d) } n.push(v) };[].forEach.call(g.body.childNodes, function (b) { return a(b, l) }); return l
            }; e.allowedAttributes =
                "aria-controls aria-describedby aria-expanded aria-haspopup aria-hidden aria-label aria-labelledby aria-live aria-pressed aria-readonly aria-roledescription aria-selected class clip-path color colspan cx cy d dx dy disabled fill height href id in markerHeight markerWidth offset opacity orient padding paddingLeft paddingRight patternUnits r refX refY role scope slope src startOffset stdDeviation stroke stroke-linecap stroke-width style tableValues result rowspan summary target tabindex text-align text-anchor textAnchor textLength title type valign width x x1 x2 y y1 y2 zIndex".split(" ");
            e.allowedReferences = "https:// http:// mailto: / ../ ./ #".split(" "); e.allowedTags = "a abbr b br button caption circle clipPath code dd defs div dl dt em feComponentTransfer feFuncA feFuncB feFuncG feFuncR feGaussianBlur feOffset feMerge feMergeNode filter h1 h2 h3 h4 h5 h6 hr i img li linearGradient marker ol p path pattern pre rect small span stop strong style sub sup svg table text textPath thead tbody tspan td th tr u ul #text".split(" "); e.emptyHTML = l; e.bypassHTMLFiltering = !1; return e
        }(); ""; return t
    });
    M(f, "Core/FormatUtilities.js", [f["Core/Defaults.js"], f["Core/Utilities.js"]], function (a, f) {
        function y(a, g, b, l) {
            a = +a || 0; g = +g; var n = E.lang, e = (a.toString().split(".")[1] || "").split("e")[0].length, r = a.toString().split("e"), G = g; if (-1 === g) g = Math.min(e, 20); else if (!J(g)) g = 2; else if (g && r[1] && 0 > r[1]) { var f = g + +r[1]; 0 <= f ? (r[0] = (+r[0]).toExponential(f).split("e")[0], g = f) : (r[0] = r[0].split(".")[0] || 0, a = 20 > g ? (r[0] * Math.pow(10, r[1])).toFixed(g) : 0, r[1] = 0) } f = (Math.abs(r[1] ? r[0] : a) + Math.pow(10, -Math.max(g, e) - 1)).toFixed(g);
            e = String(u(f)); var p = 3 < e.length ? e.length % 3 : 0; b = t(b, n.decimalPoint); l = t(l, n.thousandsSep); a = (0 > a ? "-" : "") + (p ? e.substr(0, p) + l : ""); a = 0 > +r[1] && !G ? "0" : a + e.substr(p).replace(/(\d{3})(?=\d)/g, "$1" + l); g && (a += b + f.slice(-g)); r[1] && 0 !== +a && (a += "e" + r[1]); return a
        } var E = a.defaultOptions, B = a.defaultTime, A = f.getNestedProperty, J = f.isNumber, t = f.pick, u = f.pInt; return {
            dateFormat: function (a, g, b) { return B.dateFormat(a, g, b) }, format: function (a, g, b) {
                var l = "{", n = !1, e = /f$/, r = /\.([0-9])/, G = E.lang, f = b && b.time || B; b = b && b.numberFormatter ||
                    y; for (var p = []; a;) { var t = a.indexOf(l); if (-1 === t) break; var w = a.slice(0, t); if (n) { w = w.split(":"); l = A(w.shift() || "", g); if (w.length && "number" === typeof l) if (w = w.join(":"), e.test(w)) { var m = parseInt((w.match(r) || ["", "-1"])[1], 10); null !== l && (l = b(l, m, G.decimalPoint, -1 < w.indexOf(",") ? G.thousandsSep : "")) } else l = f.dateFormat(w, l); p.push(l) } else p.push(w); a = a.slice(t + 1); l = (n = !n) ? "}" : "{" } p.push(a); return p.join("")
            }, numberFormat: y
        }
    }); M(f, "Core/Renderer/RendererUtilities.js", [f["Core/Utilities.js"]], function (a) {
        var f =
            a.clamp, x = a.pick, E = a.stableSort, B; (function (a) {
                function y(a, u, p) {
                    var g = a, b = g.reducedLen || u, l = function (b, e) { return (e.rank || 0) - (b.rank || 0) }, n = function (b, e) { return b.target - e.target }, e, r = !0, G = [], K = 0; for (e = a.length; e--;)K += a[e].size; if (K > b) { E(a, l); for (K = e = 0; K <= b;)K += a[e].size, e++; G = a.splice(e - 1, a.length) } E(a, n); for (a = a.map(function (b) { return { size: b.size, targets: [b.target], align: x(b.align, .5) } }); r;) {
                        for (e = a.length; e--;)b = a[e], l = (Math.min.apply(0, b.targets) + Math.max.apply(0, b.targets)) / 2, b.pos = f(l - b.size *
                            b.align, 0, u - b.size); e = a.length; for (r = !1; e--;)0 < e && a[e - 1].pos + a[e - 1].size > a[e].pos && (a[e - 1].size += a[e].size, a[e - 1].targets = a[e - 1].targets.concat(a[e].targets), a[e - 1].align = .5, a[e - 1].pos + a[e - 1].size > u && (a[e - 1].pos = u - a[e - 1].size), a.splice(e, 1), r = !0)
                    } g.push.apply(g, G); e = 0; a.some(function (b) {
                        var n = 0; return (b.targets || []).some(function () {
                            g[e].pos = b.pos + n; if ("undefined" !== typeof p && Math.abs(g[e].pos - g[e].target) > p) return g.slice(0, e + 1).forEach(function (b) { return delete b.pos }), g.reducedLen = (g.reducedLen ||
                                u) - .1 * u, g.reducedLen > .1 * u && y(g, u, p), !0; n += g[e].size; e++; return !1
                        })
                    }); E(g, n); return g
                } a.distribute = y
            })(B || (B = {})); return B
    }); M(f, "Core/Renderer/SVG/SVGElement.js", [f["Core/Animation/AnimationUtilities.js"], f["Core/Color/Color.js"], f["Core/Globals.js"], f["Core/Utilities.js"]], function (a, f, x, E) {
        var y = a.animate, A = a.animObject, J = a.stop, t = x.deg2rad, u = x.doc, p = x.svg, g = x.SVG_NS, b = x.win, l = E.addEvent, n = E.attr, e = E.createElement, r = E.css, G = E.defined, K = E.erase, I = E.extend, N = E.fireEvent, w = E.isArray, m = E.isFunction,
        v = E.isString, h = E.merge, d = E.objectEach, c = E.pick, q = E.pInt, k = E.syncTimeout, z = E.uniqueKey; a = function () {
            function a() { this.element = void 0; this.onEvents = {}; this.opacity = 1; this.renderer = void 0; this.SVG_NS = g; this.symbolCustomAttribs = "x y width height r start end innerR anchorX anchorY rounded".split(" ") } a.prototype._defaultGetter = function (d) { d = c(this[d + "Value"], this[d], this.element ? this.element.getAttribute(d) : null, 0); /^[\-0-9\.]+$/.test(d) && (d = parseFloat(d)); return d }; a.prototype._defaultSetter = function (c,
                d, b) { b.setAttribute(d, c) }; a.prototype.add = function (c) { var d = this.renderer, b = this.element; c && (this.parentGroup = c); this.parentInverted = c && c.inverted; "undefined" !== typeof this.textStr && "text" === this.element.nodeName && d.buildText(this); this.added = !0; if (!c || c.handleZ || this.zIndex) var h = this.zIndexSetter(); h || (c ? c.element : d.box).appendChild(b); if (this.onAdd) this.onAdd(); return this }; a.prototype.addClass = function (c, d) {
                    var b = d ? "" : this.attr("class") || ""; c = (c || "").split(/ /g).reduce(function (c, d) {
                        -1 === b.indexOf(d) &&
                        c.push(d); return c
                    }, b ? [b] : []).join(" "); c !== b && this.attr("class", c); return this
                }; a.prototype.afterSetters = function () { this.doTransform && (this.updateTransform(), this.doTransform = !1) }; a.prototype.align = function (d, b, h) {
                    var k = {}, m = this.renderer, C = m.alignedObjects, L, D, q; if (d) { if (this.alignOptions = d, this.alignByTranslate = b, !h || v(h)) this.alignTo = L = h || "renderer", K(C, this), C.push(this), h = void 0 } else d = this.alignOptions, b = this.alignByTranslate, L = this.alignTo; h = c(h, m[L], "scrollablePlotBox" === L ? m.plotBox : void 0,
                        m); L = d.align; var e = d.verticalAlign; m = (h.x || 0) + (d.x || 0); C = (h.y || 0) + (d.y || 0); "right" === L ? D = 1 : "center" === L && (D = 2); D && (m += (h.width - (d.width || 0)) / D); k[b ? "translateX" : "x"] = Math.round(m); "bottom" === e ? q = 1 : "middle" === e && (q = 2); q && (C += (h.height - (d.height || 0)) / q); k[b ? "translateY" : "y"] = Math.round(C); this[this.placed ? "animate" : "attr"](k); this.placed = !0; this.alignAttr = k; return this
                }; a.prototype.alignSetter = function (c) {
                    var d = { left: "start", center: "middle", right: "end" }; d[c] && (this.alignValue = c, this.element.setAttribute("text-anchor",
                        d[c]))
                }; a.prototype.animate = function (b, h, m) { var D = this, q = A(c(h, this.renderer.globalAnimation, !0)); h = q.defer; c(u.hidden, u.msHidden, u.webkitHidden, !1) && (q.duration = 0); 0 !== q.duration ? (m && (q.complete = m), k(function () { D.element && y(D, b, q) }, h)) : (this.attr(b, void 0, m || q.complete), d(b, function (c, d) { q.step && q.step.call(this, c, { prop: d, pos: 1, elem: this }) }, this)); return this }; a.prototype.applyTextOutline = function (c) {
                    var d = this.element; -1 !== c.indexOf("contrast") && (c = c.replace(/contrast/g, this.renderer.getContrast(d.style.fill)));
                    var b = c.split(" "); c = b[b.length - 1]; if ((b = b[0]) && "none" !== b && x.svg) {
                        this.fakeTS = !0; b = b.replace(/(^[\d\.]+)(.*?)$/g, function (c, d, b) { return 2 * Number(d) + b }); this.removeTextOutline(); var h = u.createElementNS(g, "tspan"); n(h, { "class": "highcharts-text-outline", fill: c, stroke: c, "stroke-width": b, "stroke-linejoin": "round" }); c = d.querySelector("textPath") || d;[].forEach.call(c.childNodes, function (c) {
                            var d = c.cloneNode(!0); d.removeAttribute && ["fill", "stroke", "stroke-width", "stroke"].forEach(function (c) { return d.removeAttribute(c) });
                            h.appendChild(d)
                        }); var k = 0;[].forEach.call(c.querySelectorAll("text tspan"), function (c) { k += Number(c.getAttribute("dy")) }); b = u.createElementNS(g, "tspan"); b.textContent = "\u200b"; n(b, { x: Number(d.getAttribute("x")), dy: -k }); h.appendChild(b); c.insertBefore(h, c.firstChild)
                    }
                }; a.prototype.attr = function (c, b, h, k) {
                    var m = this.element, C = this.symbolCustomAttribs, L, q = this, D, e; if ("string" === typeof c && "undefined" !== typeof b) { var a = c; c = {}; c[a] = b } "string" === typeof c ? q = (this[c + "Getter"] || this._defaultGetter).call(this,
                        c, m) : (d(c, function (d, b) { D = !1; k || J(this, b); this.symbolName && -1 !== C.indexOf(b) && (L || (this.symbolAttr(c), L = !0), D = !0); !this.rotation || "x" !== b && "y" !== b || (this.doTransform = !0); D || (e = this[b + "Setter"] || this._defaultSetter, e.call(this, d, b, m), !this.styledMode && this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(b) && this.updateShadows(b, d, e)) }, this), this.afterSetters()); h && h.call(this); return q
                }; a.prototype.clip = function (c) {
                    return this.attr("clip-path", c ? "url(" + this.renderer.url + "#" + c.id +
                        ")" : "none")
                }; a.prototype.crisp = function (c, d) { d = d || c.strokeWidth || 0; var b = Math.round(d) % 2 / 2; c.x = Math.floor(c.x || this.x || 0) + b; c.y = Math.floor(c.y || this.y || 0) + b; c.width = Math.floor((c.width || this.width || 0) - 2 * b); c.height = Math.floor((c.height || this.height || 0) - 2 * b); G(c.strokeWidth) && (c.strokeWidth = d); return c }; a.prototype.complexColor = function (c, b, k) {
                    var m = this.renderer, q, C, L, e, D, a, n, F, v, g, l = [], r; N(this.renderer, "complexColor", { args: arguments }, function () {
                        c.radialGradient ? C = "radialGradient" : c.linearGradient &&
                            (C = "linearGradient"); if (C) {
                                L = c[C]; D = m.gradients; a = c.stops; v = k.radialReference; w(L) && (c[C] = L = { x1: L[0], y1: L[1], x2: L[2], y2: L[3], gradientUnits: "userSpaceOnUse" }); "radialGradient" === C && v && !G(L.gradientUnits) && (e = L, L = h(L, m.getRadialAttr(v, e), { gradientUnits: "userSpaceOnUse" })); d(L, function (c, d) { "id" !== d && l.push(d, c) }); d(a, function (c) { l.push(c) }); l = l.join(","); if (D[l]) g = D[l].attr("id"); else {
                                    L.id = g = z(); var O = D[l] = m.createElement(C).attr(L).add(m.defs); O.radAttr = e; O.stops = []; a.forEach(function (c) {
                                        0 === c[1].indexOf("rgba") ?
                                        (q = f.parse(c[1]), n = q.get("rgb"), F = q.get("a")) : (n = c[1], F = 1); c = m.createElement("stop").attr({ offset: c[0], "stop-color": n, "stop-opacity": F }).add(O); O.stops.push(c)
                                    })
                                } r = "url(" + m.url + "#" + g + ")"; k.setAttribute(b, r); k.gradient = l; c.toString = function () { return r }
                            }
                    })
                }; a.prototype.css = function (c) {
                    var b = this.styles, m = {}, k = this.element, e = !b; c.color && (c.fill = c.color); b && d(c, function (c, d) { b && b[d] !== c && (m[d] = c, e = !0) }); if (e) {
                        b && (c = I(b, m)); if (null === c.width || "auto" === c.width) delete this.textWidth; else if ("text" === k.nodeName.toLowerCase() &&
                            c.width) var C = this.textWidth = q(c.width); this.styles = c; C && !p && this.renderer.forExport && delete c.width; var L = h(c); k.namespaceURI === this.SVG_NS && ["textOutline", "textOverflow", "width"].forEach(function (c) { return L && delete L[c] }); r(k, L); this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), c.textOutline && this.applyTextOutline(c.textOutline))
                    } return this
                }; a.prototype.dashstyleSetter = function (d) {
                    var b = this["stroke-width"]; "inherit" === b && (b = 1); if (d = d && d.toLowerCase()) {
                        var h = d.replace("shortdashdotdot",
                            "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(","); for (d = h.length; d--;)h[d] = "" + q(h[d]) * c(b, NaN); d = h.join(",").replace(/NaN/g, "none"); this.element.setAttribute("stroke-dasharray", d)
                    }
                }; a.prototype.destroy = function () {
                    var c = this, b = c.element || {}, h = c.renderer, k = b.ownerSVGElement, m = h.isSVG && "SPAN" === b.nodeName && c.parentGroup || void 0; b.onclick = b.onmouseout =
                        b.onmouseover = b.onmousemove = b.point = null; J(c); if (c.clipPath && k) { var C = c.clipPath;[].forEach.call(k.querySelectorAll("[clip-path],[CLIP-PATH]"), function (c) { -1 < c.getAttribute("clip-path").indexOf(C.element.id) && c.removeAttribute("clip-path") }); c.clipPath = C.destroy() } if (c.stops) { for (k = 0; k < c.stops.length; k++)c.stops[k].destroy(); c.stops.length = 0; c.stops = void 0 } c.safeRemoveChild(b); for (h.styledMode || c.destroyShadows(); m && m.div && 0 === m.div.childNodes.length;)b = m.parentGroup, c.safeRemoveChild(m.div), delete m.div,
                            m = b; c.alignTo && K(h.alignedObjects, c); d(c, function (d, b) { c[b] && c[b].parentGroup === c && c[b].destroy && c[b].destroy(); delete c[b] })
                }; a.prototype.destroyShadows = function () { (this.shadows || []).forEach(function (c) { this.safeRemoveChild(c) }, this); this.shadows = void 0 }; a.prototype.dSetter = function (c, d, b) {
                    w(c) && ("string" === typeof c[0] && (c = this.renderer.pathToSegments(c)), this.pathArray = c, c = c.reduce(function (c, d, b) { return d && d.join ? (b ? c + " " : "") + d.join(" ") : (d || "").toString() }, "")); /(NaN| {2}|^$)/.test(c) && (c = "M 0 0");
                    this[d] !== c && (b.setAttribute(d, c), this[d] = c)
                }; a.prototype.fadeOut = function (d) { var b = this; b.animate({ opacity: 0 }, { duration: c(d, 150), complete: function () { b.hide() } }) }; a.prototype.fillSetter = function (c, d, b) { "string" === typeof c ? b.setAttribute(d, c) : c && this.complexColor(c, d, b) }; a.prototype.getBBox = function (d, b) {
                    var h = this.alignValue, k = this.element, q = this.renderer, C = this.styles, L = this.textStr, e = q.cache, n = q.cacheKeys, v = k.namespaceURI === this.SVG_NS; b = c(b, this.rotation, 0); var g = q.styledMode ? k && a.prototype.getStyle.call(k,
                        "font-size") : C && C.fontSize, F; if (G(L)) { var l = L.toString(); -1 === l.indexOf("<") && (l = l.replace(/[0-9]/g, "0")); l += ["", b, g, this.textWidth, h, C && C.textOverflow, C && C.fontWeight].join() } l && !d && (F = e[l]); if (!F) {
                            if (v || q.forExport) { try { var z = this.fakeTS && function (c) { var d = k.querySelector(".highcharts-text-outline"); d && r(d, { display: c }) }; m(z) && z("none"); F = k.getBBox ? I({}, k.getBBox()) : { width: k.offsetWidth, height: k.offsetHeight, x: 0, y: 0 }; m(z) && z("") } catch (V) { "" } if (!F || 0 > F.width) F = { x: 0, y: 0, width: 0, height: 0 } } else F = this.htmlGetBBox();
                            if (q.isSVG && (q = F.width, d = F.height, v && (F.height = d = { "11px,17": 14, "13px,20": 16 }["" + (g || "") + ",".concat(Math.round(d))] || d), b)) { v = Number(k.getAttribute("y") || 0) - F.y; h = { right: 1, center: .5 }[h || 0] || 0; C = b * t; g = (b - 90) * t; var D = q * Math.cos(C); b = q * Math.sin(C); z = Math.cos(g); C = Math.sin(g); q = F.x + h * (q - D) + v * z; g = q + D; z = g - d * z; D = z - D; v = F.y + v - h * b + v * C; h = v + b; d = h - d * C; b = d - b; F.x = Math.min(q, g, z, D); F.y = Math.min(v, h, d, b); F.width = Math.max(q, g, z, D) - F.x; F.height = Math.max(v, h, d, b) - F.y } if (l && ("" === L || 0 < F.height)) {
                                for (; 250 < n.length;)delete e[n.shift()];
                                e[l] || n.push(l); e[l] = F
                            }
                        } return F
                }; a.prototype.getStyle = function (c) { return b.getComputedStyle(this.element || this, "").getPropertyValue(c) }; a.prototype.hasClass = function (c) { return -1 !== ("" + this.attr("class")).split(" ").indexOf(c) }; a.prototype.hide = function () { return this.attr({ visibility: "hidden" }) }; a.prototype.htmlGetBBox = function () { return { height: 0, width: 0, x: 0, y: 0 } }; a.prototype.init = function (c, d) { this.element = "span" === d ? e(d) : u.createElementNS(this.SVG_NS, d); this.renderer = c; N(this, "afterInit") }; a.prototype.invert =
                    function (c) { this.inverted = c; this.updateTransform(); return this }; a.prototype.on = function (c, d) { var b = this.onEvents; if (b[c]) b[c](); b[c] = l(this.element, c, d); return this }; a.prototype.opacitySetter = function (c, d, b) { this.opacity = c = Number(Number(c).toFixed(3)); b.setAttribute(d, c) }; a.prototype.removeClass = function (c) { return this.attr("class", ("" + this.attr("class")).replace(v(c) ? new RegExp("(^| )".concat(c, "( |$)")) : c, " ").replace(/ +/g, " ").trim()) }; a.prototype.removeTextOutline = function () {
                        var c = this.element.querySelector("tspan.highcharts-text-outline");
                        c && this.safeRemoveChild(c)
                    }; a.prototype.safeRemoveChild = function (c) { var d = c.parentNode; d && d.removeChild(c) }; a.prototype.setRadialReference = function (c) { var d = this.element.gradient && this.renderer.gradients[this.element.gradient]; this.element.radialReference = c; d && d.radAttr && d.animate(this.renderer.getRadialAttr(c, d.radAttr)); return this }; a.prototype.setTextPath = function (c, d) {
                        var b = this; d = h(!0, { enabled: !0, attributes: { dy: -5, startOffset: "50%", textAnchor: "middle" } }, d); var k = this.renderer.url, m = this.text ||
                            this, C = m.textPath, q = d.attributes, e = d.enabled; c = c || C && C.path; C && C.undo(); c && e ? (d = l(m, "afterModifyTree", function (d) { if (c && e) { var h = c.attr("id"); h || c.attr("id", h = z()); var C = { x: 0, y: 0 }; G(q.dx) && (C.dx = q.dx, delete q.dx); G(q.dy) && (C.dy = q.dy, delete q.dy); m.attr(C); b.attr({ transform: "" }); b.box && (b.box = b.box.destroy()); C = d.nodes.slice(0); d.nodes.length = 0; d.nodes[0] = { tagName: "textPath", attributes: I(q, { "text-anchor": q.textAnchor, href: "" + k + "#".concat(h) }), children: C } } }), m.textPath = { path: c, undo: d }) : (m.attr({
                                dx: 0,
                                dy: 0
                            }), delete m.textPath); this.added && (m.textCache = "", this.renderer.buildText(m)); return this
                    }; a.prototype.shadow = function (c, b, h) {
                        var k = [], m = this.element, C = this.oldShadowOptions, q = { color: "#000000", offsetX: this.parentInverted ? -1 : 1, offsetY: this.parentInverted ? -1 : 1, opacity: .15, width: 3 }, e = !1, a; !0 === c ? a = q : "object" === typeof c && (a = I(q, c)); a && (a && C && d(a, function (c, d) { c !== C[d] && (e = !0) }), e && this.destroyShadows(), this.oldShadowOptions = a); if (!a) this.destroyShadows(); else if (!this.shadows) {
                            var v = a.opacity / a.width;
                            var g = this.parentInverted ? "translate(".concat(a.offsetY, ", ").concat(a.offsetX, ")") : "translate(".concat(a.offsetX, ", ").concat(a.offsetY, ")"); for (q = 1; q <= a.width; q++) {
                                var F = m.cloneNode(!1); var l = 2 * a.width + 1 - 2 * q; n(F, { stroke: c.color || "#000000", "stroke-opacity": v * q, "stroke-width": l, transform: g, fill: "none" }); F.setAttribute("class", (F.getAttribute("class") || "") + " highcharts-shadow"); h && (n(F, "height", Math.max(n(F, "height") - l, 0)), F.cutHeight = l); b ? b.element.appendChild(F) : m.parentNode && m.parentNode.insertBefore(F,
                                    m); k.push(F)
                            } this.shadows = k
                        } return this
                    }; a.prototype.show = function (c) { void 0 === c && (c = !0); return this.attr({ visibility: c ? "inherit" : "visible" }) }; a.prototype.strokeSetter = function (c, d, b) {
                        this[d] = c; this.stroke && this["stroke-width"] ? (a.prototype.fillSetter.call(this, this.stroke, "stroke", b), b.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === d && 0 === c && this.hasStroke ? (b.removeAttribute("stroke"), this.hasStroke = !1) : this.renderer.styledMode && this["stroke-width"] && (b.setAttribute("stroke-width",
                            this["stroke-width"]), this.hasStroke = !0)
                    }; a.prototype.strokeWidth = function () { if (!this.renderer.styledMode) return this["stroke-width"] || 0; var c = this.getStyle("stroke-width"), d = 0; if (c.indexOf("px") === c.length - 2) d = q(c); else if ("" !== c) { var b = u.createElementNS(g, "rect"); n(b, { width: c, "stroke-width": 0 }); this.element.parentNode.appendChild(b); d = b.getBBox().width; b.parentNode.removeChild(b) } return d }; a.prototype.symbolAttr = function (d) {
                        var b = this; "x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function (h) {
                            b[h] =
                            c(d[h], b[h])
                        }); b.attr({ d: b.renderer.symbols[b.symbolName](b.x, b.y, b.width, b.height, b) })
                    }; a.prototype.textSetter = function (c) { c !== this.textStr && (delete this.textPxLength, this.textStr = c, this.added && this.renderer.buildText(this)) }; a.prototype.titleSetter = function (d) {
                        var b = this.element, h = b.getElementsByTagName("title")[0] || u.createElementNS(this.SVG_NS, "title"); b.insertBefore ? b.insertBefore(h, b.firstChild) : b.appendChild(h); h.textContent = String(c(d, "")).replace(/<[^>]*>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g,
                            ">")
                    }; a.prototype.toFront = function () { var c = this.element; c.parentNode.appendChild(c); return this }; a.prototype.translate = function (c, d) { return this.attr({ translateX: c, translateY: d }) }; a.prototype.updateShadows = function (c, d, b) { var h = this.shadows; if (h) for (var k = h.length; k--;)b.call(h[k], "height" === c ? Math.max(d - (h[k].cutHeight || 0), 0) : "d" === c ? this.d : d, c, h[k]) }; a.prototype.updateTransform = function () {
                        var d = this.scaleX, b = this.scaleY, h = this.inverted, k = this.rotation, m = this.matrix, C = this.element, q = this.translateX ||
                            0, e = this.translateY || 0; h && (q += this.width, e += this.height); q = ["translate(" + q + "," + e + ")"]; G(m) && q.push("matrix(" + m.join(",") + ")"); h ? q.push("rotate(90) scale(-1,1)") : k && q.push("rotate(" + k + " " + c(this.rotationOriginX, C.getAttribute("x"), 0) + " " + c(this.rotationOriginY, C.getAttribute("y") || 0) + ")"); (G(d) || G(b)) && q.push("scale(" + c(d, 1) + " " + c(b, 1) + ")"); q.length && !(this.text || this).textPath && C.setAttribute("transform", q.join(" "))
                    }; a.prototype.visibilitySetter = function (c, d, b) {
                        "inherit" === c ? b.removeAttribute(d) :
                        this[d] !== c && b.setAttribute(d, c); this[d] = c
                    }; a.prototype.xGetter = function (c) { "circle" === this.element.nodeName && ("x" === c ? c = "cx" : "y" === c && (c = "cy")); return this._defaultGetter(c) }; a.prototype.zIndexSetter = function (c, d) {
                        var b = this.renderer, h = this.parentGroup, k = (h || b).element || b.box, C = this.element; b = k === b.box; var m = !1; var e = this.added; var a; G(c) ? (C.setAttribute("data-z-index", c), c = +c, this[d] === c && (e = !1)) : G(this[d]) && C.removeAttribute("data-z-index"); this[d] = c; if (e) {
                            (c = this.zIndex) && h && (h.handleZ = !0); d =
                                k.childNodes; for (a = d.length - 1; 0 <= a && !m; a--) { h = d[a]; e = h.getAttribute("data-z-index"); var v = !G(e); if (h !== C) if (0 > c && v && !b && !a) k.insertBefore(C, d[a]), m = !0; else if (q(e) <= c || v && (!G(c) || 0 <= c)) k.insertBefore(C, d[a + 1] || null), m = !0 } m || (k.insertBefore(C, d[b ? 3 : 0] || null), m = !0)
                        } return m
                    }; return a
        }(); a.prototype["stroke-widthSetter"] = a.prototype.strokeSetter; a.prototype.yGetter = a.prototype.xGetter; a.prototype.matrixSetter = a.prototype.rotationOriginXSetter = a.prototype.rotationOriginYSetter = a.prototype.rotationSetter =
            a.prototype.scaleXSetter = a.prototype.scaleYSetter = a.prototype.translateXSetter = a.prototype.translateYSetter = a.prototype.verticalAlignSetter = function (c, d) { this[d] = c; this.doTransform = !0 }; ""; return a
    }); M(f, "Core/Renderer/RendererRegistry.js", [f["Core/Globals.js"]], function (a) {
        var f; (function (f) { f.rendererTypes = {}; var y; f.getRendererType = function (a) { void 0 === a && (a = y); return f.rendererTypes[a] || f.rendererTypes[y] }; f.registerRendererType = function (x, A, E) { f.rendererTypes[x] = A; if (!y || E) y = x, a.Renderer = A } })(f ||
            (f = {})); return f
    }); M(f, "Core/Renderer/SVG/SVGLabel.js", [f["Core/Renderer/SVG/SVGElement.js"], f["Core/Utilities.js"]], function (a, f) {
        var y = this && this.__extends || function () { var a = function (g, b) { a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, a) { b.__proto__ = a } || function (b, a) { for (var e in a) a.hasOwnProperty(e) && (b[e] = a[e]) }; return a(g, b) }; return function (g, b) { function l() { this.constructor = g } a(g, b); g.prototype = null === b ? Object.create(b) : (l.prototype = b.prototype, new l) } }(), E = f.defined,
        B = f.extend, A = f.isNumber, J = f.merge, t = f.pick, u = f.removeEvent; return function (f) {
            function g(b, a, n, e, r, G, p, I, t, w) {
                var m = f.call(this) || this; m.paddingLeftSetter = m.paddingSetter; m.paddingRightSetter = m.paddingSetter; m.init(b, "g"); m.textStr = a; m.x = n; m.y = e; m.anchorX = G; m.anchorY = p; m.baseline = t; m.className = w; m.addClass("button" === w ? "highcharts-no-tooltip" : "highcharts-label"); w && m.addClass("highcharts-" + w); m.text = b.text(void 0, 0, 0, I).attr({ zIndex: 1 }); var v; "string" === typeof r && ((v = /^url\((.*?)\)$/.test(r)) || m.renderer.symbols[r]) &&
                    (m.symbolKey = r); m.bBox = g.emptyBBox; m.padding = 3; m.baselineOffset = 0; m.needsBox = b.styledMode || v; m.deferredAttr = {}; m.alignFactor = 0; return m
            } y(g, f); g.prototype.alignSetter = function (b) { b = { left: 0, center: .5, right: 1 }[b]; b !== this.alignFactor && (this.alignFactor = b, this.bBox && A(this.xSetting) && this.attr({ x: this.xSetting })) }; g.prototype.anchorXSetter = function (b, a) { this.anchorX = b; this.boxAttr(a, Math.round(b) - this.getCrispAdjust() - this.xSetting) }; g.prototype.anchorYSetter = function (b, a) {
                this.anchorY = b; this.boxAttr(a,
                    b - this.ySetting)
            }; g.prototype.boxAttr = function (b, a) { this.box ? this.box.attr(b, a) : this.deferredAttr[b] = a }; g.prototype.css = function (b) { if (b) { var l = {}; b = J(b); g.textProps.forEach(function (e) { "undefined" !== typeof b[e] && (l[e] = b[e], delete b[e]) }); this.text.css(l); var n = "width" in l; "fontSize" in l || "fontWeight" in l ? this.updateTextPadding() : n && this.updateBoxSize() } return a.prototype.css.call(this, b) }; g.prototype.destroy = function () {
                u(this.element, "mouseenter"); u(this.element, "mouseleave"); this.text && this.text.destroy();
                this.box && (this.box = this.box.destroy()); a.prototype.destroy.call(this)
            }; g.prototype.fillSetter = function (b, a) { b && (this.needsBox = !0); this.fill = b; this.boxAttr(a, b) }; g.prototype.getBBox = function () { this.textStr && 0 === this.bBox.width && 0 === this.bBox.height && this.updateBoxSize(); var b = this.padding, a = t(this.paddingLeft, b); return { width: this.width, height: this.height, x: this.bBox.x - a, y: this.bBox.y - b } }; g.prototype.getCrispAdjust = function () {
                return this.renderer.styledMode && this.box ? this.box.strokeWidth() % 2 / 2 : (this["stroke-width"] ?
                    parseInt(this["stroke-width"], 10) : 0) % 2 / 2
            }; g.prototype.heightSetter = function (b) { this.heightSetting = b }; g.prototype.onAdd = function () { var b = this.textStr; this.text.add(this); this.attr({ text: E(b) ? b : "", x: this.x, y: this.y }); this.box && E(this.anchorX) && this.attr({ anchorX: this.anchorX, anchorY: this.anchorY }) }; g.prototype.paddingSetter = function (b, a) { A(b) ? b !== this[a] && (this[a] = b, this.updateTextPadding()) : this[a] = void 0 }; g.prototype.rSetter = function (b, a) { this.boxAttr(a, b) }; g.prototype.shadow = function (b) {
                b && !this.renderer.styledMode &&
                (this.updateBoxSize(), this.box && this.box.shadow(b)); return this
            }; g.prototype.strokeSetter = function (b, a) { this.stroke = b; this.boxAttr(a, b) }; g.prototype["stroke-widthSetter"] = function (b, a) { b && (this.needsBox = !0); this["stroke-width"] = b; this.boxAttr(a, b) }; g.prototype["text-alignSetter"] = function (b) { this.textAlign = b }; g.prototype.textSetter = function (b) { "undefined" !== typeof b && this.text.attr({ text: b }); this.updateTextPadding() }; g.prototype.updateBoxSize = function () {
                var b = this.text, a = b.element.style, n = {}, e = this.padding,
                r = this.bBox = A(this.widthSetting) && A(this.heightSetting) && !this.textAlign || !E(b.textStr) ? g.emptyBBox : b.getBBox(); this.width = this.getPaddedWidth(); this.height = (this.heightSetting || r.height || 0) + 2 * e; a = this.renderer.fontMetrics(a && a.fontSize, b); this.baselineOffset = e + Math.min((this.text.firstLineMetrics || a).b, r.height || Infinity); this.heightSetting && (this.baselineOffset += (this.heightSetting - a.h) / 2); this.needsBox && !b.textPath && (this.box || (b = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect(),
                    b.addClass(("button" === this.className ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), b.add(this)), b = this.getCrispAdjust(), n.x = b, n.y = (this.baseline ? -this.baselineOffset : 0) + b, n.width = Math.round(this.width), n.height = Math.round(this.height), this.box.attr(B(n, this.deferredAttr)), this.deferredAttr = {})
            }; g.prototype.updateTextPadding = function () {
                var b = this.text; if (!b.textPath) {
                    this.updateBoxSize(); var a = this.baseline ? 0 : this.baselineOffset, n = t(this.paddingLeft, this.padding);
                    E(this.widthSetting) && this.bBox && ("center" === this.textAlign || "right" === this.textAlign) && (n += { center: .5, right: 1 }[this.textAlign] * (this.widthSetting - this.bBox.width)); if (n !== b.x || a !== b.y) b.attr("x", n), b.hasBoxWidthChanged && (this.bBox = b.getBBox(!0)), "undefined" !== typeof a && b.attr("y", a); b.x = n; b.y = a
                }
            }; g.prototype.widthSetter = function (b) { this.widthSetting = A(b) ? b : void 0 }; g.prototype.getPaddedWidth = function () {
                var b = this.padding, a = t(this.paddingLeft, b); b = t(this.paddingRight, b); return (this.widthSetting || this.bBox.width ||
                    0) + a + b
            }; g.prototype.xSetter = function (b) { this.x = b; this.alignFactor && (b -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = !0); this.xSetting = Math.round(b); this.attr("translateX", this.xSetting) }; g.prototype.ySetter = function (b) { this.ySetting = this.y = Math.round(b); this.attr("translateY", this.ySetting) }; g.emptyBBox = { width: 0, height: 0, x: 0, y: 0 }; g.textProps = "color direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow width".split(" "); return g
        }(a)
    });
    M(f, "Core/Renderer/SVG/Symbols.js", [f["Core/Utilities.js"]], function (a) {
        function f(a, f, p, g, b) {
            var l = []; if (b) {
                var n = b.start || 0, e = J(b.r, p); p = J(b.r, g || p); var r = (b.end || 0) - .001; g = b.innerR; var G = J(b.open, .001 > Math.abs((b.end || 0) - n - 2 * Math.PI)), K = Math.cos(n), I = Math.sin(n), t = Math.cos(r), w = Math.sin(r); n = J(b.longArc, .001 > r - n - Math.PI ? 0 : 1); l.push(["M", a + e * K, f + p * I], ["A", e, p, 0, n, J(b.clockwise, 1), a + e * t, f + p * w]); B(g) && l.push(G ? ["M", a + g * t, f + g * w] : ["L", a + g * t, f + g * w], ["A", g, g, 0, n, B(b.clockwise) ? 1 - b.clockwise : 0, a + g * K, f +
                    g * I]); G || l.push(["Z"])
            } return l
        } function x(a, f, p, g, b) { return b && b.r ? E(a, f, p, g, b) : [["M", a, f], ["L", a + p, f], ["L", a + p, f + g], ["L", a, f + g], ["Z"]] } function E(a, f, p, g, b) { b = b && b.r || 0; return [["M", a + b, f], ["L", a + p - b, f], ["C", a + p, f, a + p, f, a + p, f + b], ["L", a + p, f + g - b], ["C", a + p, f + g, a + p, f + g, a + p - b, f + g], ["L", a + b, f + g], ["C", a, f + g, a, f + g, a, f + g - b], ["L", a, f + b], ["C", a, f, a, f, a + b, f]] } var B = a.defined, A = a.isNumber, J = a.pick; return {
            arc: f, callout: function (a, f, p, g, b) {
                var l = Math.min(b && b.r || 0, p, g), n = l + 6, e = b && b.anchorX; b = b && b.anchorY || 0; var r =
                    E(a, f, p, g, { r: l }); if (!A(e)) return r; a + e >= p ? b > f + n && b < f + g - n ? r.splice(3, 1, ["L", a + p, b - 6], ["L", a + p + 6, b], ["L", a + p, b + 6], ["L", a + p, f + g - l]) : r.splice(3, 1, ["L", a + p, g / 2], ["L", e, b], ["L", a + p, g / 2], ["L", a + p, f + g - l]) : 0 >= a + e ? b > f + n && b < f + g - n ? r.splice(7, 1, ["L", a, b + 6], ["L", a - 6, b], ["L", a, b - 6], ["L", a, f + l]) : r.splice(7, 1, ["L", a, g / 2], ["L", e, b], ["L", a, g / 2], ["L", a, f + l]) : b && b > g && e > a + n && e < a + p - n ? r.splice(5, 1, ["L", e + 6, f + g], ["L", e, f + g + 6], ["L", e - 6, f + g], ["L", a + l, f + g]) : b && 0 > b && e > a + n && e < a + p - n && r.splice(1, 1, ["L", e - 6, f], ["L", e, f - 6], ["L", e +
                        6, f], ["L", p - l, f]); return r
            }, circle: function (a, u, p, g) { return f(a + p / 2, u + g / 2, p / 2, g / 2, { start: .5 * Math.PI, end: 2.5 * Math.PI, open: !1 }) }, diamond: function (a, f, p, g) { return [["M", a + p / 2, f], ["L", a + p, f + g / 2], ["L", a + p / 2, f + g], ["L", a, f + g / 2], ["Z"]] }, rect: x, roundedRect: E, square: x, triangle: function (a, f, p, g) { return [["M", a + p / 2, f], ["L", a + p, f + g], ["L", a, f + g], ["Z"]] }, "triangle-down": function (a, f, p, g) { return [["M", a, f], ["L", a + p, f], ["L", a + p / 2, f + g], ["Z"]] }
        }
    }); M(f, "Core/Renderer/SVG/TextBuilder.js", [f["Core/Renderer/HTML/AST.js"],
    f["Core/Globals.js"], f["Core/Utilities.js"]], function (a, f, x) {
        var y = f.doc, B = f.SVG_NS, A = f.win, J = x.attr, t = x.extend, u = x.fireEvent, p = x.isString, g = x.objectEach, b = x.pick; return function () {
            function l(b) { var a = b.styles; this.renderer = b.renderer; this.svgElement = b; this.width = b.textWidth; this.textLineHeight = a && a.lineHeight; this.textOutline = a && a.textOutline; this.ellipsis = !(!a || "ellipsis" !== a.textOverflow); this.noWrap = !(!a || "nowrap" !== a.whiteSpace); this.fontSize = a && a.fontSize } l.prototype.buildSVG = function () {
                var g =
                    this.svgElement, e = g.element, r = g.renderer, l = b(g.textStr, "").toString(), f = -1 !== l.indexOf("<"), I = e.childNodes; r = this.width && !g.added && r.box; var N = /<br.*?>/g, w = [l, this.ellipsis, this.noWrap, this.textLineHeight, this.textOutline, this.fontSize, this.width].join(); if (w !== g.textCache) {
                        g.textCache = w; delete g.actualWidth; for (w = I.length; w--;)e.removeChild(I[w]); f || this.ellipsis || this.width || g.textPath || -1 !== l.indexOf(" ") && (!this.noWrap || N.test(l)) ? "" !== l && (r && r.appendChild(e), l = new a(l), this.modifyTree(l.nodes),
                            l.addToDOM(e), this.modifyDOM(), this.ellipsis && -1 !== (e.textContent || "").indexOf("\u2026") && g.attr("title", this.unescapeEntities(g.textStr || "", ["&lt;", "&gt;"])), r && r.removeChild(e)) : e.appendChild(y.createTextNode(this.unescapeEntities(l))); p(this.textOutline) && g.applyTextOutline && g.applyTextOutline(this.textOutline)
                    }
            }; l.prototype.modifyDOM = function () {
                var b = this, a = this.svgElement, g = J(a.element, "x"); a.firstLineMetrics = void 0; for (var l; l = a.element.firstChild;)if (/^[\s\u200B]*$/.test(l.textContent || " ")) a.element.removeChild(l);
                else break;[].forEach.call(a.element.querySelectorAll("tspan.highcharts-br"), function (e, m) { e.nextSibling && e.previousSibling && (0 === m && 1 === e.previousSibling.nodeType && (a.firstLineMetrics = a.renderer.fontMetrics(void 0, e.previousSibling)), J(e, { dy: b.getLineHeight(e.nextSibling), x: g })) }); var f = this.width || 0; if (f) {
                    var p = function (e, m) {
                        var v = e.textContent || "", h = v.replace(/([^\^])-/g, "$1- ").split(" "), d = !b.noWrap && (1 < h.length || 1 < a.element.childNodes.length), c = b.getLineHeight(m), q = 0, k = a.actualWidth; if (b.ellipsis) v &&
                            b.truncate(e, v, void 0, 0, Math.max(0, f - parseInt(b.fontSize || 12, 10)), function (c, d) { return c.substring(0, d) + "\u2026" }); else if (d) {
                                v = []; for (d = []; m.firstChild && m.firstChild !== e;)d.push(m.firstChild), m.removeChild(m.firstChild); for (; h.length;)h.length && !b.noWrap && 0 < q && (v.push(e.textContent || ""), e.textContent = h.join(" ").replace(/- /g, "-")), b.truncate(e, void 0, h, 0 === q ? k || 0 : 0, f, function (c, d) { return h.slice(0, d).join(" ").replace(/- /g, "-") }), k = a.actualWidth, q++; d.forEach(function (c) { m.insertBefore(c, e) });
                                v.forEach(function (d) { m.insertBefore(y.createTextNode(d), e); d = y.createElementNS(B, "tspan"); d.textContent = "\u200b"; J(d, { dy: c, x: g }); m.insertBefore(d, e) })
                            }
                    }, N = function (b) { [].slice.call(b.childNodes).forEach(function (m) { m.nodeType === A.Node.TEXT_NODE ? p(m, b) : (-1 !== m.className.baseVal.indexOf("highcharts-br") && (a.actualWidth = 0), N(m)) }) }; N(a.element)
                }
            }; l.prototype.getLineHeight = function (b) {
                var a; b = b.nodeType === A.Node.TEXT_NODE ? b.parentElement : b; this.renderer.styledMode || (a = b && /(px|em)$/.test(b.style.fontSize) ?
                    b.style.fontSize : this.fontSize || this.renderer.style.fontSize || 12); return this.textLineHeight ? parseInt(this.textLineHeight.toString(), 10) : this.renderer.fontMetrics(a, b || this.svgElement.element).h
            }; l.prototype.modifyTree = function (b) {
                var a = this, g = function (e, n) {
                    var l = e.attributes; l = void 0 === l ? {} : l; var r = e.children, f = e.style; f = void 0 === f ? {} : f; var m = e.tagName, v = a.renderer.styledMode; if ("b" === m || "strong" === m) v ? l["class"] = "highcharts-strong" : f.fontWeight = "bold"; else if ("i" === m || "em" === m) v ? l["class"] = "highcharts-emphasized" :
                        f.fontStyle = "italic"; f && f.color && (f.fill = f.color); "br" === m ? (l["class"] = "highcharts-br", e.textContent = "\u200b", (n = b[n + 1]) && n.textContent && (n.textContent = n.textContent.replace(/^ +/gm, ""))) : "a" === m && r && r.some(function (b) { return "#text" === b.tagName }) && (e.children = [{ children: r, tagName: "tspan" }]); "#text" !== m && "a" !== m && (e.tagName = "tspan"); t(e, { attributes: l, style: f }); r && r.filter(function (b) { return "#text" !== b.tagName }).forEach(g)
                }; b.forEach(g); u(this.svgElement, "afterModifyTree", { nodes: b })
            }; l.prototype.truncate =
                function (b, a, g, l, f, p) {
                    var e = this.svgElement, n = e.renderer, m = e.rotation, v = [], h = g ? 1 : 0, d = (a || g || "").length, c = d, q, k = function (c, d) { d = d || c; var h = b.parentNode; if (h && "undefined" === typeof v[d]) if (h.getSubStringLength) try { v[d] = l + h.getSubStringLength(0, g ? d + 1 : d) } catch (P) { "" } else n.getSpanWidth && (b.textContent = p(a || g, c), v[d] = l + n.getSpanWidth(e, b)); return v[d] }; e.rotation = 0; var z = k(b.textContent.length); if (l + z > f) {
                        for (; h <= d;)c = Math.ceil((h + d) / 2), g && (q = p(g, c)), z = k(c, q && q.length - 1), h === d ? h = d + 1 : z > f ? d = c - 1 : h = c; 0 === d ?
                            b.textContent = "" : a && d === a.length - 1 || (b.textContent = q || p(a || g, c))
                    } g && g.splice(0, c); e.actualWidth = z; e.rotation = m
                }; l.prototype.unescapeEntities = function (b, a) { g(this.renderer.escapes, function (e, g) { a && -1 !== a.indexOf(e) || (b = b.toString().replace(new RegExp(e, "g"), g)) }); return b }; return l
        }()
    }); M(f, "Core/Renderer/SVG/SVGRenderer.js", [f["Core/Renderer/HTML/AST.js"], f["Core/Color/Color.js"], f["Core/Globals.js"], f["Core/Renderer/RendererRegistry.js"], f["Core/Renderer/SVG/SVGElement.js"], f["Core/Renderer/SVG/SVGLabel.js"],
    f["Core/Renderer/SVG/Symbols.js"], f["Core/Renderer/SVG/TextBuilder.js"], f["Core/Utilities.js"]], function (a, f, x, E, B, A, J, t, u) {
        var p = x.charts, g = x.deg2rad, b = x.doc, l = x.isFirefox, n = x.isMS, e = x.isWebKit, r = x.noop, G = x.SVG_NS, K = x.symbolSizes, I = x.win, N = u.addEvent, w = u.attr, m = u.createElement, v = u.css, h = u.defined, d = u.destroyObjectProperties, c = u.extend, q = u.isArray, k = u.isNumber, z = u.isObject, H = u.isString, D = u.merge, R = u.pick, P = u.pInt, y = u.uniqueKey, Y; x = function () {
            function C(c, d, b, h, a, C, k) {
                this.width = this.url = this.style =
                    this.isSVG = this.imgCount = this.height = this.gradients = this.globalAnimation = this.defs = this.chartIndex = this.cacheKeys = this.cache = this.boxWrapper = this.box = this.alignedObjects = void 0; this.init(c, d, b, h, a, C, k)
            } C.prototype.init = function (c, d, h, a, C, k, m) {
                var q = this.createElement("svg").attr({ version: "1.1", "class": "highcharts-root" }), e = q.element; m || q.css(this.getStyle(a)); c.appendChild(e); w(c, "dir", "ltr"); -1 === c.innerHTML.indexOf("xmlns") && w(e, "xmlns", this.SVG_NS); this.isSVG = !0; this.box = e; this.boxWrapper = q; this.alignedObjects =
                    []; this.url = this.getReferenceURL(); this.createElement("desc").add().element.appendChild(b.createTextNode("Created with Highcharts 10.3.1")); this.defs = this.createElement("defs").add(); this.allowHTML = k; this.forExport = C; this.styledMode = m; this.gradients = {}; this.cache = {}; this.cacheKeys = []; this.imgCount = 0; this.setSize(d, h, !1); var F; l && c.getBoundingClientRect && (d = function () { v(c, { left: 0, top: 0 }); F = c.getBoundingClientRect(); v(c, { left: Math.ceil(F.left) - F.left + "px", top: Math.ceil(F.top) - F.top + "px" }) }, d(), this.unSubPixelFix =
                        N(I, "resize", d))
            }; C.prototype.definition = function (c) { return (new a([c])).addToDOM(this.defs.element) }; C.prototype.getReferenceURL = function () {
                if ((l || e) && b.getElementsByTagName("base").length) {
                    if (!h(Y)) {
                        var c = y(); c = (new a([{ tagName: "svg", attributes: { width: 8, height: 8 }, children: [{ tagName: "defs", children: [{ tagName: "clipPath", attributes: { id: c }, children: [{ tagName: "rect", attributes: { width: 4, height: 4 } }] }] }, { tagName: "rect", attributes: { id: "hitme", width: 8, height: 8, "clip-path": "url(#".concat(c, ")"), fill: "rgba(0,0,0,0.001)" } }] }])).addToDOM(b.body);
                        v(c, { position: "fixed", top: 0, left: 0, zIndex: 9E5 }); var d = b.elementFromPoint(6, 6); Y = "hitme" === (d && d.id); b.body.removeChild(c)
                    } if (Y) return I.location.href.split("#")[0].replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20")
                } return ""
            }; C.prototype.getStyle = function (d) { return this.style = c({ fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif', fontSize: "12px" }, d) }; C.prototype.setStyle = function (c) { this.boxWrapper.css(this.getStyle(c)) }; C.prototype.isHidden = function () { return !this.boxWrapper.getBBox().width };
            C.prototype.destroy = function () { var c = this.defs; this.box = null; this.boxWrapper = this.boxWrapper.destroy(); d(this.gradients || {}); this.gradients = null; c && (this.defs = c.destroy()); this.unSubPixelFix && this.unSubPixelFix(); return this.alignedObjects = null }; C.prototype.createElement = function (c) { var d = new this.Element; d.init(this, c); return d }; C.prototype.getRadialAttr = function (c, d) { return { cx: c[0] - c[2] / 2 + (d.cx || 0) * c[2], cy: c[1] - c[2] / 2 + (d.cy || 0) * c[2], r: (d.r || 0) * c[2] } }; C.prototype.buildText = function (c) { (new t(c)).buildSVG() };
            C.prototype.getContrast = function (c) { c = f.parse(c).rgba.map(function (c) { c /= 255; return .03928 >= c ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4) }); c = .2126 * c[0] + .7152 * c[1] + .0722 * c[2]; return 1.05 / (c + .05) > (c + .05) / .05 ? "#FFFFFF" : "#000000" }; C.prototype.button = function (d, b, h, C, k, m, q, e, g, v) {
                void 0 === k && (k = {}); var F = this.label(d, b, h, g, void 0, void 0, v, void 0, "button"), L = this.styledMode; d = k.states || {}; var l = 0; k = D(k); delete k.states; var r = D({ color: "#333333", cursor: "pointer", fontWeight: "normal" }, k.style); delete k.style; var f =
                    a.filterUserAttributes(k); F.attr(D({ padding: 8, r: 2 }, f)); if (!L) { f = D({ fill: "#f7f7f7", stroke: "#cccccc", "stroke-width": 1 }, f); m = D(f, { fill: "#e6e6e6" }, a.filterUserAttributes(m || d.hover || {})); var O = m.style; delete m.style; q = D(f, { fill: "#e6ebf5", style: { color: "#000000", fontWeight: "bold" } }, a.filterUserAttributes(q || d.select || {})); var Q = q.style; delete q.style; e = D(f, { style: { color: "#cccccc" } }, a.filterUserAttributes(e || d.disabled || {})); var H = e.style; delete e.style } N(F.element, n ? "mouseover" : "mouseenter", function () {
                        3 !==
                        l && F.setState(1)
                    }); N(F.element, n ? "mouseout" : "mouseleave", function () { 3 !== l && F.setState(l) }); F.setState = function (c) { 1 !== c && (F.state = l = c); F.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][c || 0]); L || (F.attr([f, m, q, e][c || 0]), c = [r, O, Q, H][c || 0], z(c) && F.css(c)) }; L || (F.attr(f).css(c({ cursor: "default" }, r)), v && F.text.css({ pointerEvents: "none" })); return F.on("touchstart", function (c) { return c.stopPropagation() }).on("click",
                        function (c) { 3 !== l && C.call(F, c) })
            }; C.prototype.crispLine = function (c, d, b) { void 0 === b && (b = "round"); var a = c[0], C = c[1]; h(a[1]) && a[1] === C[1] && (a[1] = C[1] = Math[b](a[1]) - d % 2 / 2); h(a[2]) && a[2] === C[2] && (a[2] = C[2] = Math[b](a[2]) + d % 2 / 2); return c }; C.prototype.path = function (d) { var b = this.styledMode ? {} : { fill: "none" }; q(d) ? b.d = d : z(d) && c(b, d); return this.createElement("path").attr(b) }; C.prototype.circle = function (c, d, b) {
                c = z(c) ? c : "undefined" === typeof c ? {} : { x: c, y: d, r: b }; d = this.createElement("circle"); d.xSetter = d.ySetter =
                    function (c, d, b) { b.setAttribute("c" + d, c) }; return d.attr(c)
            }; C.prototype.arc = function (c, d, b, h, a, C) { z(c) ? (h = c, d = h.y, b = h.r, c = h.x) : h = { innerR: h, start: a, end: C }; c = this.symbol("arc", c, d, b, b, h); c.r = b; return c }; C.prototype.rect = function (c, d, b, h, a, C) {
                a = z(c) ? c.r : a; var k = this.createElement("rect"); c = z(c) ? c : "undefined" === typeof c ? {} : { x: c, y: d, width: Math.max(b, 0), height: Math.max(h, 0) }; this.styledMode || ("undefined" !== typeof C && (c["stroke-width"] = C, c = k.crisp(c)), c.fill = "none"); a && (c.r = a); k.rSetter = function (c, d, b) {
                    k.r =
                    c; w(b, { rx: c, ry: c })
                }; k.rGetter = function () { return k.r || 0 }; return k.attr(c)
            }; C.prototype.setSize = function (c, d, b) { this.width = c; this.height = d; this.boxWrapper.animate({ width: c, height: d }, { step: function () { this.attr({ viewBox: "0 0 " + this.attr("width") + " " + this.attr("height") }) }, duration: R(b, !0) ? void 0 : 0 }); this.alignElements() }; C.prototype.g = function (c) { var d = this.createElement("g"); return c ? d.attr({ "class": "highcharts-" + c }) : d }; C.prototype.image = function (c, d, b, h, a, C) {
                var m = { preserveAspectRatio: "none" }, q = function (c,
                    d) { c.setAttributeNS ? c.setAttributeNS("http://www.w3.org/1999/xlink", "href", d) : c.setAttribute("hc-svg-href", d) }; k(d) && (m.x = d); k(b) && (m.y = b); k(h) && (m.width = h); k(a) && (m.height = a); var e = this.createElement("image").attr(m); d = function (d) { q(e.element, c); C.call(e, d) }; C ? (q(e.element, "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), b = new I.Image, N(b, "load", d), b.src = c, b.complete && d({})) : q(e.element, c); return e
            }; C.prototype.symbol = function (d, a, C, k, q, e) {
                var F = this, g = /^url\((.*?)\)$/,
                l = g.test(d), n = !l && (this.symbols[d] ? d : "circle"), z = n && this.symbols[n], r; if (z) { "number" === typeof a && (r = z.call(this.symbols, Math.round(a || 0), Math.round(C || 0), k || 0, q || 0, e)); var f = this.path(r); F.styledMode || f.attr("fill", "none"); c(f, { symbolName: n || void 0, x: a, y: C, width: k, height: q }); e && c(f, e) } else if (l) {
                    var L = d.match(g)[1]; var H = f = this.image(L); H.imgwidth = R(K[L] && K[L].width, e && e.width); H.imgheight = R(K[L] && K[L].height, e && e.height); var D = function (c) { return c.attr({ width: c.width, height: c.height }) };["width",
                        "height"].forEach(function (c) { H[c + "Setter"] = function (c, d) { this[d] = c; c = this.alignByTranslate; var b = this.element, a = this.width, C = this.height, k = this.imgwidth, m = this.imgheight, q = this["img" + d]; if (h(q)) { var F = 1; e && "within" === e.backgroundSize && a && C ? (F = Math.min(a / k, C / m), q = Math.round(q * F), w(b, { width: Math.round(k * F), height: Math.round(m * F) })) : b && b.setAttribute(d, q); c || this.translate(((a || 0) - q * F) / 2, ((C || 0) - q * F) / 2) } } }); h(a) && H.attr({ x: a, y: C }); H.isImg = !0; h(H.imgwidth) && h(H.imgheight) ? D(H) : (H.attr({ width: 0, height: 0 }),
                            m("img", { onload: function () { var c = p[F.chartIndex]; 0 === this.width && (v(this, { position: "absolute", top: "-999em" }), b.body.appendChild(this)); K[L] = { width: this.width, height: this.height }; H.imgwidth = this.width; H.imgheight = this.height; H.element && D(H); this.parentNode && this.parentNode.removeChild(this); F.imgCount--; if (!F.imgCount && c && !c.hasLoaded) c.onload() }, src: L }), this.imgCount++)
                } return f
            }; C.prototype.clipRect = function (c, d, b, a) {
                var h = y() + "-", C = this.createElement("clipPath").attr({ id: h }).add(this.defs); c = this.rect(c,
                    d, b, a, 0).add(C); c.id = h; c.clipPath = C; c.count = 0; return c
            }; C.prototype.text = function (c, d, b, a) { var C = {}; if (a && (this.allowHTML || !this.forExport)) return this.html(c, d, b); C.x = Math.round(d || 0); b && (C.y = Math.round(b)); h(c) && (C.text = c); c = this.createElement("text").attr(C); if (!a || this.forExport && !this.allowHTML) c.xSetter = function (c, d, b) { for (var a = b.getElementsByTagName("tspan"), h = b.getAttribute(d), C = 0, k; C < a.length; C++)k = a[C], k.getAttribute(d) === h && k.setAttribute(d, c); b.setAttribute(d, c) }; return c }; C.prototype.fontMetrics =
                function (c, d) { c = !this.styledMode && /px/.test(c) || !I.getComputedStyle ? c || d && d.style && d.style.fontSize || this.style && this.style.fontSize : d && B.prototype.getStyle.call(d, "font-size"); c = /px/.test(c) ? P(c) : 12; d = 24 > c ? c + 3 : Math.round(1.2 * c); return { h: d, b: Math.round(.8 * d), f: c } }; C.prototype.rotCorr = function (c, d, b) { var a = c; d && b && (a = Math.max(a * Math.cos(d * g), 4)); return { x: -c / 3 * Math.sin(d * g), y: a } }; C.prototype.pathToSegments = function (c) {
                    for (var d = [], b = [], a = { A: 8, C: 7, H: 2, L: 3, M: 3, Q: 5, S: 5, T: 3, V: 2 }, h = 0; h < c.length; h++)H(b[0]) &&
                        k(c[h]) && b.length === a[b[0].toUpperCase()] && c.splice(h, 0, b[0].replace("M", "L").replace("m", "l")), "string" === typeof c[h] && (b.length && d.push(b.slice(0)), b.length = 0), b.push(c[h]); d.push(b.slice(0)); return d
                }; C.prototype.label = function (c, d, b, a, h, C, k, m, q) { return new A(this, c, d, b, a, h, C, k, m, q) }; C.prototype.alignElements = function () { this.alignedObjects.forEach(function (c) { return c.align() }) }; return C
        }(); c(x.prototype, {
            Element: B, SVG_NS: G, escapes: { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }, symbols: J,
            draw: r
        }); E.registerRendererType("svg", x, !0); ""; return x
    }); M(f, "Core/Renderer/HTML/HTMLElement.js", [f["Core/Globals.js"], f["Core/Renderer/SVG/SVGElement.js"], f["Core/Utilities.js"]], function (a, f, x) {
        var y = this && this.__extends || function () {
            var b = function (a, g) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, a) { b.__proto__ = a } || function (b, a) { for (var e in a) a.hasOwnProperty(e) && (b[e] = a[e]) }; return b(a, g) }; return function (a, g) {
                function e() { this.constructor = a } b(a, g); a.prototype = null === g ?
                    Object.create(g) : (e.prototype = g.prototype, new e)
            }
        }(), B = a.isFirefox, A = a.isMS, J = a.isWebKit, t = a.win, u = x.css, p = x.defined, g = x.extend, b = x.pick, l = x.pInt; return function (a) {
            function e() { return null !== a && a.apply(this, arguments) || this } y(e, a); e.compose = function (b) { if (-1 === e.composedClasses.indexOf(b)) { e.composedClasses.push(b); var a = e.prototype, g = b.prototype; g.getSpanCorrection = a.getSpanCorrection; g.htmlCss = a.htmlCss; g.htmlGetBBox = a.htmlGetBBox; g.htmlUpdateTransform = a.htmlUpdateTransform; g.setSpanRotation = a.setSpanRotation } return b };
            e.prototype.getSpanCorrection = function (b, a, e) { this.xCorr = -b * e; this.yCorr = -a }; e.prototype.htmlCss = function (a) { var e = "SPAN" === this.element.tagName && a && "width" in a, l = b(e && a.width, void 0); if (e) { delete a.width; this.textWidth = l; var n = !0 } a && "ellipsis" === a.textOverflow && (a.whiteSpace = "nowrap", a.overflow = "hidden"); this.styles = g(this.styles, a); u(this.element, a); n && this.htmlUpdateTransform(); return this }; e.prototype.htmlGetBBox = function () {
                var b = this.element; return {
                    x: b.offsetLeft, y: b.offsetTop, width: b.offsetWidth,
                    height: b.offsetHeight
                }
            }; e.prototype.htmlUpdateTransform = function () {
                if (this.added) {
                    var b = this.renderer, a = this.element, e = this.translateX || 0, g = this.translateY || 0, n = this.x || 0, f = this.y || 0, m = this.textAlign || "left", v = { left: 0, center: .5, right: 1 }[m], h = this.styles; h = h && h.whiteSpace; u(a, { marginLeft: e, marginTop: g }); !b.styledMode && this.shadows && this.shadows.forEach(function (c) { u(c, { marginLeft: e + 1, marginTop: g + 1 }) }); this.inverted && [].forEach.call(a.childNodes, function (c) { b.invertChild(c, a) }); if ("SPAN" === a.tagName) {
                        var d =
                            this.rotation, c = this.textWidth && l(this.textWidth), q = [d, m, a.innerHTML, this.textWidth, this.textAlign].join(), k = void 0; k = !1; if (c !== this.oldTextWidth) { if (this.textPxLength) var z = this.textPxLength; else u(a, { width: "", whiteSpace: h || "nowrap" }), z = a.offsetWidth; (c > this.oldTextWidth || z > c) && (/[ \-]/.test(a.textContent || a.innerText) || "ellipsis" === a.style.textOverflow) && (u(a, { width: z > c || d ? c + "px" : "auto", display: "block", whiteSpace: h || "normal" }), this.oldTextWidth = c, k = !0) } this.hasBoxWidthChanged = k; q !== this.cTT && (k =
                                b.fontMetrics(a.style.fontSize, a).b, !p(d) || d === (this.oldRotation || 0) && m === this.oldAlign || this.setSpanRotation(d, v, k), this.getSpanCorrection(!p(d) && this.textPxLength || a.offsetWidth, k, v, d, m)); u(a, { left: n + (this.xCorr || 0) + "px", top: f + (this.yCorr || 0) + "px" }); this.cTT = q; this.oldRotation = d; this.oldAlign = m
                    }
                } else this.alignOnAdd = !0
            }; e.prototype.setSpanRotation = function (b, a, e) {
                var g = {}, l = A && !/Edge/.test(t.navigator.userAgent) ? "-ms-transform" : J ? "-webkit-transform" : B ? "MozTransform" : t.opera ? "-o-transform" : void 0;
                l && (g[l] = g.transform = "rotate(" + b + "deg)", g[l + (B ? "Origin" : "-origin")] = g.transformOrigin = 100 * a + "% " + e + "px", u(this.element, g))
            }; e.composedClasses = []; return e
        }(f)
    }); M(f, "Core/Renderer/HTML/HTMLRenderer.js", [f["Core/Renderer/HTML/AST.js"], f["Core/Renderer/SVG/SVGElement.js"], f["Core/Renderer/SVG/SVGRenderer.js"], f["Core/Utilities.js"]], function (a, f, x, E) {
        var y = this && this.__extends || function () {
            var a = function (g, b) {
                a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, a) { b.__proto__ = a } || function (b,
                    a) { for (var e in a) a.hasOwnProperty(e) && (b[e] = a[e]) }; return a(g, b)
            }; return function (g, b) { function l() { this.constructor = g } a(g, b); g.prototype = null === b ? Object.create(b) : (l.prototype = b.prototype, new l) }
        }(), A = E.attr, J = E.createElement, t = E.extend, u = E.pick; return function (p) {
            function g() { return null !== p && p.apply(this, arguments) || this } y(g, p); g.compose = function (b) { -1 === g.composedClasses.indexOf(b) && (g.composedClasses.push(b), b.prototype.html = g.prototype.html); return b }; g.prototype.html = function (b, g, n) {
                var e =
                    this.createElement("span"), l = e.element, p = e.renderer, K = p.isSVG, I = function (b, a) { ["opacity", "visibility"].forEach(function (m) { b[m + "Setter"] = function (e, h, d) { var c = b.div ? b.div.style : a; f.prototype[m + "Setter"].call(this, e, h, d); c && (c[h] = e) } }); b.addedSetters = !0 }; e.textSetter = function (b) { b !== this.textStr && (delete this.bBox, delete this.oldTextWidth, a.setElementHTML(this.element, u(b, "")), this.textStr = b, e.doTransform = !0) }; K && I(e, e.element.style); e.xSetter = e.ySetter = e.alignSetter = e.rotationSetter = function (b, a) {
                        "align" ===
                        a ? e.alignValue = e.textAlign = b : e[a] = b; e.doTransform = !0
                    }; e.afterSetters = function () { this.doTransform && (this.htmlUpdateTransform(), this.doTransform = !1) }; e.attr({ text: b, x: Math.round(g), y: Math.round(n) }).css({ position: "absolute" }); p.styledMode || e.css({ fontFamily: this.style.fontFamily, fontSize: this.style.fontSize }); l.style.whiteSpace = "nowrap"; e.css = e.htmlCss; K && (e.add = function (b) {
                        var a = p.box.parentNode, m = []; if (this.parentGroup = b) {
                            var g = b.div; if (!g) {
                                for (; b;)m.push(b), b = b.parentGroup; m.reverse().forEach(function (b) {
                                    function d(c,
                                        d) { b[d] = c; "translateX" === d ? k.left = c + "px" : k.top = c + "px"; b.doTransform = !0 } var c = A(b.element, "class"), h = b.styles || {}; g = b.div = b.div || J("div", c ? { className: c } : void 0, { position: "absolute", left: (b.translateX || 0) + "px", top: (b.translateY || 0) + "px", display: b.display, opacity: b.opacity, cursor: h.cursor, pointerEvents: h.pointerEvents, visibility: b.visibility }, g || a); var k = g.style; t(b, {
                                            classSetter: function (c) { return function (d) { this.element.setAttribute("class", d); c.className = d } }(g), on: function () {
                                                m[0].div && e.on.apply({
                                                    element: m[0].div,
                                                    onEvents: b.onEvents
                                                }, arguments); return b
                                            }, translateXSetter: d, translateYSetter: d
                                        }); b.addedSetters || I(b)
                                })
                            }
                        } else g = a; g.appendChild(l); e.added = !0; e.alignOnAdd && e.htmlUpdateTransform(); return e
                    }); return e
            }; g.composedClasses = []; return g
        }(x)
    }); M(f, "Core/Axis/AxisDefaults.js", [], function () {
        var a; (function (a) {
            a.defaultXAxisOptions = {
                alignTicks: !0, allowDecimals: void 0, panningEnabled: !0, zIndex: 2, zoomEnabled: !0, dateTimeLabelFormats: {
                    millisecond: { main: "%H:%M:%S.%L", range: !1 }, second: { main: "%H:%M:%S", range: !1 },
                    minute: { main: "%H:%M", range: !1 }, hour: { main: "%H:%M", range: !1 }, day: { main: "%e. %b" }, week: { main: "%e. %b" }, month: { main: "%b '%y" }, year: { main: "%Y" }
                }, endOnTick: !1, gridLineDashStyle: "Solid", gridZIndex: 1, labels: { autoRotation: void 0, autoRotationLimit: 80, distance: void 0, enabled: !0, indentation: 10, overflow: "justify", padding: 5, reserveSpace: void 0, rotation: void 0, staggerLines: 0, step: 0, useHTML: !1, x: 0, zIndex: 7, style: { color: "#666666", cursor: "default", fontSize: "11px" } }, maxPadding: .01, minorGridLineDashStyle: "Solid", minorTickLength: 2,
                minorTickPosition: "outside", minPadding: .01, offset: void 0, opposite: !1, reversed: void 0, reversedStacks: !1, showEmpty: !0, showFirstLabel: !0, showLastLabel: !0, startOfWeek: 1, startOnTick: !1, tickLength: 10, tickPixelInterval: 100, tickmarkPlacement: "between", tickPosition: "outside", title: { align: "middle", rotation: 0, useHTML: !1, x: 0, y: 0, style: { color: "#666666" } }, type: "linear", uniqueNames: !0, visible: !0, minorGridLineColor: "#f2f2f2", minorGridLineWidth: 1, minorTickColor: "#999999", lineColor: "#ccd6eb", lineWidth: 1, gridLineColor: "#e6e6e6",
                gridLineWidth: void 0, tickColor: "#ccd6eb"
            }; a.defaultYAxisOptions = { reversedStacks: !0, endOnTick: !0, maxPadding: .05, minPadding: .05, tickPixelInterval: 72, showLastLabel: !0, labels: { x: -8 }, startOnTick: !0, title: { rotation: 270, text: "Values" }, stackLabels: { animation: {}, allowOverlap: !1, enabled: !1, crop: !0, overflow: "justify", formatter: function () { var a = this.axis.chart.numberFormatter; return a(this.total || 0, -1) }, style: { color: "#000000", fontSize: "11px", fontWeight: "bold", textOutline: "1px contrast" } }, gridLineWidth: 1, lineWidth: 0 };
            a.defaultLeftAxisOptions = { labels: { x: -15 }, title: { rotation: 270 } }; a.defaultRightAxisOptions = { labels: { x: 15 }, title: { rotation: 90 } }; a.defaultBottomAxisOptions = { labels: { autoRotation: [-45], x: 0 }, margin: 15, title: { rotation: 0 } }; a.defaultTopAxisOptions = { labels: { autoRotation: [-45], x: 0 }, margin: 15, title: { rotation: 0 } }
        })(a || (a = {})); return a
    }); M(f, "Core/Foundation.js", [f["Core/Utilities.js"]], function (a) {
        var f = a.addEvent, x = a.isFunction, E = a.objectEach, B = a.removeEvent, A; (function (a) {
            a.registerEventOptions = function (a, u) {
                a.eventOptions =
                a.eventOptions || {}; E(u.events, function (p, g) { a.eventOptions[g] !== p && (a.eventOptions[g] && (B(a, g, a.eventOptions[g]), delete a.eventOptions[g]), x(p) && (a.eventOptions[g] = p, f(a, g, p))) })
            }
        })(A || (A = {})); return A
    }); M(f, "Core/Axis/Tick.js", [f["Core/FormatUtilities.js"], f["Core/Globals.js"], f["Core/Utilities.js"]], function (a, f, x) {
        var y = f.deg2rad, B = x.clamp, A = x.correctFloat, J = x.defined, t = x.destroyObjectProperties, u = x.extend, p = x.fireEvent, g = x.isNumber, b = x.merge, l = x.objectEach, n = x.pick; f = function () {
            function e(b, a,
                e, g, l) { this.isNewLabel = this.isNew = !0; this.axis = b; this.pos = a; this.type = e || ""; this.parameters = l || {}; this.tickmarkOffset = this.parameters.tickmarkOffset; this.options = this.parameters.options; p(this, "init"); e || g || this.addLabel() } e.prototype.addLabel = function () {
                    var b = this, e = b.axis, l = e.options, f = e.chart, N = e.categories, w = e.logarithmic, m = e.names, v = b.pos, h = n(b.options && b.options.labels, l.labels), d = e.tickPositions, c = v === d[0], q = v === d[d.length - 1], k = (!h.step || 1 === h.step) && 1 === e.tickInterval; d = d.info; var z = b.label,
                        H; N = this.parameters.category || (N ? n(N[v], m[v], v) : v); w && g(N) && (N = A(w.lin2log(N))); if (e.dateTime) if (d) { var D = f.time.resolveDTLFormat(l.dateTimeLabelFormats[!l.grid && d.higherRanks[v] || d.unitName]); var R = D.main } else g(N) && (R = e.dateTime.getXDateFormat(N, l.dateTimeLabelFormats || {})); b.isFirst = c; b.isLast = q; var P = { axis: e, chart: f, dateTimeLabelFormat: R, isFirst: c, isLast: q, pos: v, tick: b, tickPositionInfo: d, value: N }; p(this, "labelFormat", P); var t = function (c) {
                            return h.formatter ? h.formatter.call(c, c) : h.format ? (c.text =
                                e.defaultLabelFormatter.call(c, c), a.format(h.format, c, f)) : e.defaultLabelFormatter.call(c, c)
                        }; l = t.call(P, P); var Y = D && D.list; b.shortenLabel = Y ? function () { for (H = 0; H < Y.length; H++)if (u(P, { dateTimeLabelFormat: Y[H] }), z.attr({ text: t.call(P, P) }), z.getBBox().width < e.getSlotWidth(b) - 2 * h.padding) return; z.attr({ text: "" }) } : void 0; k && e._addedPlotLB && b.moveLabel(l, h); J(z) || b.movedLabel ? z && z.textStr !== l && !k && (!z.textWidth || h.style.width || z.styles.width || z.css({ width: null }), z.attr({ text: l }), z.textPxLength = z.getBBox().width) :
                            (b.label = z = b.createLabel({ x: 0, y: 0 }, l, h), b.rotation = 0)
                }; e.prototype.createLabel = function (a, e, g) { var l = this.axis, f = l.chart; if (a = J(e) && g.enabled ? f.renderer.text(e, a.x, a.y, g.useHTML).add(l.labelGroup) : null) f.styledMode || a.css(b(g.style)), a.textPxLength = a.getBBox().width; return a }; e.prototype.destroy = function () { t(this, this.axis) }; e.prototype.getPosition = function (b, a, e, g) {
                    var l = this.axis, f = l.chart, m = g && f.oldChartHeight || f.chartHeight; b = {
                        x: b ? A(l.translate(a + e, void 0, void 0, g) + l.transB) : l.left + l.offset + (l.opposite ?
                            (g && f.oldChartWidth || f.chartWidth) - l.right - l.left : 0), y: b ? m - l.bottom + l.offset - (l.opposite ? l.height : 0) : A(m - l.translate(a + e, void 0, void 0, g) - l.transB)
                    }; b.y = B(b.y, -1E5, 1E5); p(this, "afterGetPosition", { pos: b }); return b
                }; e.prototype.getLabelPosition = function (b, a, e, g, l, f, m, v) {
                    var h = this.axis, d = h.transA, c = h.isLinked && h.linkedParent ? h.linkedParent.reversed : h.reversed, q = h.staggerLines, k = h.tickRotCorr || { x: 0, y: 0 }, n = g || h.reserveSpaceDefault ? 0 : -h.labelOffset * ("center" === h.labelAlign ? .5 : 1), r = {}; e = 0 === h.side ? e.rotation ?
                        -8 : -e.getBBox().height : 2 === h.side ? k.y + 8 : Math.cos(e.rotation * y) * (k.y - e.getBBox(!1, 0).height / 2); J(l.y) && (e = 0 === h.side && h.horiz ? l.y + e : l.y); b = b + l.x + n + k.x - (f && g ? f * d * (c ? -1 : 1) : 0); a = a + e - (f && !g ? f * d * (c ? 1 : -1) : 0); q && (g = m / (v || 1) % q, h.opposite && (g = q - g - 1), a += h.labelOffset / q * g); r.x = b; r.y = Math.round(a); p(this, "afterGetLabelPosition", { pos: r, tickmarkOffset: f, index: m }); return r
                }; e.prototype.getLabelSize = function () { return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0 }; e.prototype.getMarkPath = function (b,
                    a, e, g, l, f) { return f.crispLine([["M", b, a], ["L", b + (l ? 0 : -e), a + (l ? e : 0)]], g) }; e.prototype.handleOverflow = function (b) {
                        var a = this.axis, e = a.options.labels, g = b.x, l = a.chart.chartWidth, f = a.chart.spacing, m = n(a.labelLeft, Math.min(a.pos, f[3])); f = n(a.labelRight, Math.max(a.isRadial ? 0 : a.pos + a.len, l - f[1])); var v = this.label, h = this.rotation, d = { left: 0, center: .5, right: 1 }[a.labelAlign || v.attr("align")], c = v.getBBox().width, q = a.getSlotWidth(this), k = {}, z = q, r = 1, D; if (h || "justify" !== e.overflow) 0 > h && g - d * c < m ? D = Math.round(g / Math.cos(h *
                            y) - m) : 0 < h && g + d * c > f && (D = Math.round((l - g) / Math.cos(h * y))); else if (l = g + (1 - d) * c, g - d * c < m ? z = b.x + z * (1 - d) - m : l > f && (z = f - b.x + z * d, r = -1), z = Math.min(q, z), z < q && "center" === a.labelAlign && (b.x += r * (q - z - d * (q - Math.min(c, z)))), c > z || a.autoRotation && (v.styles || {}).width) D = z; D && (this.shortenLabel ? this.shortenLabel() : (k.width = Math.floor(D) + "px", (e.style || {}).textOverflow || (k.textOverflow = "ellipsis"), v.css(k)))
                    }; e.prototype.moveLabel = function (b, a) {
                        var e = this, g = e.label, f = e.axis, n = f.reversed, m = !1; g && g.textStr === b ? (e.movedLabel =
                            g, m = !0, delete e.label) : l(f.ticks, function (a) { m || a.isNew || a === e || !a.label || a.label.textStr !== b || (e.movedLabel = a.label, m = !0, a.labelPos = e.movedLabel.xy, delete a.label) }); if (!m && (e.labelPos || g)) { var v = e.labelPos || g.xy; g = f.horiz ? n ? 0 : f.width + f.left : v.x; f = f.horiz ? v.y : n ? f.width + f.left : 0; e.movedLabel = e.createLabel({ x: g, y: f }, b, a); e.movedLabel && e.movedLabel.attr({ opacity: 0 }) }
                    }; e.prototype.render = function (b, a, e) {
                        var g = this.axis, l = g.horiz, f = this.pos, m = n(this.tickmarkOffset, g.tickmarkOffset); f = this.getPosition(l,
                            f, m, a); m = f.x; var v = f.y; g = l && m === g.pos + g.len || !l && v === g.pos ? -1 : 1; l = n(e, this.label && this.label.newOpacity, 1); e = n(e, 1); this.isActive = !0; this.renderGridLine(a, e, g); this.renderMark(f, e, g); this.renderLabel(f, a, l, b); this.isNew = !1; p(this, "afterRender")
                    }; e.prototype.renderGridLine = function (b, a, e) {
                        var g = this.axis, l = g.options, f = {}, m = this.pos, v = this.type, h = n(this.tickmarkOffset, g.tickmarkOffset), d = g.chart.renderer, c = this.gridLine, q = l.gridLineWidth, k = l.gridLineColor, z = l.gridLineDashStyle; "minor" === this.type &&
                            (q = l.minorGridLineWidth, k = l.minorGridLineColor, z = l.minorGridLineDashStyle); c || (g.chart.styledMode || (f.stroke = k, f["stroke-width"] = q || 0, f.dashstyle = z), v || (f.zIndex = 1), b && (a = 0), this.gridLine = c = d.path().attr(f).addClass("highcharts-" + (v ? v + "-" : "") + "grid-line").add(g.gridGroup)); if (c && (e = g.getPlotLinePath({ value: m + h, lineWidth: c.strokeWidth() * e, force: "pass", old: b }))) c[b || this.isNew ? "attr" : "animate"]({ d: e, opacity: a })
                    }; e.prototype.renderMark = function (b, a, e) {
                        var g = this.axis, l = g.options, f = g.chart.renderer, m =
                            this.type, v = g.tickSize(m ? m + "Tick" : "tick"), h = b.x; b = b.y; var d = n(l["minor" !== m ? "tickWidth" : "minorTickWidth"], !m && g.isXAxis ? 1 : 0); l = l["minor" !== m ? "tickColor" : "minorTickColor"]; var c = this.mark, q = !c; v && (g.opposite && (v[0] = -v[0]), c || (this.mark = c = f.path().addClass("highcharts-" + (m ? m + "-" : "") + "tick").add(g.axisGroup), g.chart.styledMode || c.attr({ stroke: l, "stroke-width": d })), c[q ? "attr" : "animate"]({ d: this.getMarkPath(h, b, v[0], c.strokeWidth() * e, g.horiz, f), opacity: a }))
                    }; e.prototype.renderLabel = function (b, a, e, l) {
                        var f =
                            this.axis, r = f.horiz, m = f.options, v = this.label, h = m.labels, d = h.step; f = n(this.tickmarkOffset, f.tickmarkOffset); var c = b.x; b = b.y; var q = !0; v && g(c) && (v.xy = b = this.getLabelPosition(c, b, v, r, h, f, l, d), this.isFirst && !this.isLast && !m.showFirstLabel || this.isLast && !this.isFirst && !m.showLastLabel ? q = !1 : !r || h.step || h.rotation || a || 0 === e || this.handleOverflow(b), d && l % d && (q = !1), q && g(b.y) ? (b.opacity = e, v[this.isNewLabel ? "attr" : "animate"](b).show(!0), this.isNewLabel = !1) : (v.hide(), this.isNewLabel = !0))
                    }; e.prototype.replaceMovedLabel =
                        function () { var b = this.label, a = this.axis, e = a.reversed; if (b && !this.isNew) { var g = a.horiz ? e ? a.left : a.width + a.left : b.xy.x; e = a.horiz ? b.xy.y : e ? a.width + a.top : a.top; b.animate({ x: g, y: e, opacity: 0 }, void 0, b.destroy); delete this.label } a.isDirty = !0; this.label = this.movedLabel; delete this.movedLabel }; return e
        }(); ""; return f
    }); M(f, "Core/Axis/Axis.js", [f["Core/Animation/AnimationUtilities.js"], f["Core/Axis/AxisDefaults.js"], f["Core/Color/Color.js"], f["Core/Defaults.js"], f["Core/Foundation.js"], f["Core/Globals.js"],
    f["Core/Axis/Tick.js"], f["Core/Utilities.js"]], function (a, f, x, E, B, A, J, t) {
        var u = a.animObject, p = E.defaultOptions, g = B.registerEventOptions, b = A.deg2rad, l = t.arrayMax, n = t.arrayMin, e = t.clamp, r = t.correctFloat, G = t.defined, K = t.destroyObjectProperties, I = t.erase, y = t.error, w = t.extend, m = t.fireEvent, v = t.isArray, h = t.isNumber, d = t.isString, c = t.merge, q = t.normalizeTickInterval, k = t.objectEach, z = t.pick, H = t.relativeLength, D = t.removeEvent, R = t.splat, P = t.syncTimeout, W = function (c, d) {
            return q(d, void 0, void 0, z(c.options.allowDecimals,
                .5 > d || void 0 !== c.tickAmount), !!c.tickAmount)
        }; a = function () {
            function a(c, d) {
                this.zoomEnabled = this.width = this.visible = this.userOptions = this.translationSlope = this.transB = this.transA = this.top = this.ticks = this.tickRotCorr = this.tickPositions = this.tickmarkOffset = this.tickInterval = this.tickAmount = this.side = this.series = this.right = this.positiveValuesOnly = this.pos = this.pointRangePadding = this.pointRange = this.plotLinesAndBandsGroups = this.plotLinesAndBands = this.paddedTicks = this.overlap = this.options = this.offset =
                    this.names = this.minPixelPadding = this.minorTicks = this.minorTickInterval = this.min = this.maxLabelLength = this.max = this.len = this.left = this.labelFormatter = this.labelEdge = this.isLinked = this.height = this.hasVisibleSeries = this.hasNames = this.eventOptions = this.coll = this.closestPointRange = this.chart = this.bottom = this.alternateBands = void 0; this.init(c, d)
            } a.prototype.init = function (c, d) {
                var b = d.isX; this.chart = c; this.horiz = c.inverted && !this.isZAxis ? !b : b; this.isXAxis = b; this.coll = this.coll || (b ? "xAxis" : "yAxis"); m(this,
                    "init", { userOptions: d }); this.opposite = z(d.opposite, this.opposite); this.side = z(d.side, this.side, this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3); this.setOptions(d); var a = this.options, e = a.labels, k = a.type; this.userOptions = d; this.minPixelPadding = 0; this.reversed = z(a.reversed, this.reversed); this.visible = a.visible; this.zoomEnabled = a.zoomEnabled; this.hasNames = "category" === k || !0 === a.categories; this.categories = a.categories || (this.hasNames ? [] : void 0); this.names || (this.names = [], this.names.keys = {}); this.plotLinesAndBandsGroups =
                        {}; this.positiveValuesOnly = !!this.logarithmic; this.isLinked = G(a.linkedTo); this.ticks = {}; this.labelEdge = []; this.minorTicks = {}; this.plotLinesAndBands = []; this.alternateBands = {}; this.len = 0; this.minRange = this.userMinRange = a.minRange || a.maxZoom; this.range = a.range; this.offset = a.offset || 0; this.min = this.max = null; d = z(a.crosshair, R(c.options.tooltip.crosshairs)[b ? 0 : 1]); this.crosshair = !0 === d ? {} : d; -1 === c.axes.indexOf(this) && (b ? c.axes.splice(c.xAxis.length, 0, this) : c.axes.push(this), c[this.coll].push(this)); this.series =
                            this.series || []; c.inverted && !this.isZAxis && b && "undefined" === typeof this.reversed && (this.reversed = !0); this.labelRotation = h(e.rotation) ? e.rotation : void 0; g(this, a); m(this, "afterInit")
            }; a.prototype.setOptions = function (d) { this.options = c(f.defaultXAxisOptions, "yAxis" === this.coll && f.defaultYAxisOptions, [f.defaultTopAxisOptions, f.defaultRightAxisOptions, f.defaultBottomAxisOptions, f.defaultLeftAxisOptions][this.side], c(p[this.coll], d)); m(this, "afterSetOptions", { userOptions: d }) }; a.prototype.defaultLabelFormatter =
                function (c) {
                    var d = this.axis; c = this.chart.numberFormatter; var b = h(this.value) ? this.value : NaN, a = d.chart.time, e = this.dateTimeLabelFormat, k = p.lang, C = k.numericSymbols; k = k.numericSymbolMagnitude || 1E3; var m = d.logarithmic ? Math.abs(b) : d.tickInterval, q = C && C.length; if (d.categories) var g = "".concat(this.value); else if (e) g = a.dateFormat(e, b); else if (q && 1E3 <= m) for (; q-- && "undefined" === typeof g;)d = Math.pow(k, q + 1), m >= d && 0 === 10 * b % d && null !== C[q] && 0 !== b && (g = c(b / d, -1) + C[q]); "undefined" === typeof g && (g = 1E4 <= Math.abs(b) ? c(b,
                        -1) : c(b, -1, void 0, "")); return g
                }; a.prototype.getSeriesExtremes = function () {
                    var c = this, d = c.chart, b; m(this, "getSeriesExtremes", null, function () {
                        c.hasVisibleSeries = !1; c.dataMin = c.dataMax = c.threshold = null; c.softThreshold = !c.isXAxis; c.stacking && c.stacking.buildStacks(); c.series.forEach(function (a) {
                            if (a.visible || !d.options.chart.ignoreHiddenSeries) {
                                var e = a.options, k = e.threshold; c.hasVisibleSeries = !0; c.positiveValuesOnly && 0 >= k && (k = null); if (c.isXAxis) {
                                    if (e = a.xData, e.length) {
                                        e = c.logarithmic ? e.filter(c.validatePositiveValue) :
                                            e; b = a.getXExtremes(e); var m = b.min; var q = b.max; h(m) || m instanceof Date || (e = e.filter(h), b = a.getXExtremes(e), m = b.min, q = b.max); e.length && (c.dataMin = Math.min(z(c.dataMin, m), m), c.dataMax = Math.max(z(c.dataMax, q), q))
                                    }
                                } else if (a = a.applyExtremes(), h(a.dataMin) && (m = a.dataMin, c.dataMin = Math.min(z(c.dataMin, m), m)), h(a.dataMax) && (q = a.dataMax, c.dataMax = Math.max(z(c.dataMax, q), q)), G(k) && (c.threshold = k), !e.softThreshold || c.positiveValuesOnly) c.softThreshold = !1
                            }
                        })
                    }); m(this, "afterGetSeriesExtremes")
                }; a.prototype.translate =
                    function (c, d, b, a, e, k) { var m = this.linkedParent || this, q = a && m.old ? m.old.min : m.min; if (!h(q)) return NaN; var g = m.minPixelPadding; e = (m.isOrdinal || m.brokenAxis && m.brokenAxis.hasBreaks || m.logarithmic && e) && m.lin2val; var C = 1, l = 0; a = a && m.old ? m.old.transA : m.transA; a || (a = m.transA); b && (C *= -1, l = m.len); m.reversed && (C *= -1, l -= C * (m.sector || m.len)); d ? (k = (c * C + l - g) / a + q, e && (k = m.lin2val(k))) : (e && (c = m.val2lin(c)), c = C * (c - q) * a, k = (m.isRadial ? c : r(c)) + l + C * g + (h(k) ? a * k : 0)); return k }; a.prototype.toPixels = function (c, d) {
                        return this.translate(c,
                            !1, !this.horiz, void 0, !0) + (d ? 0 : this.pos)
                    }; a.prototype.toValue = function (c, d) { return this.translate(c - (d ? 0 : this.pos), !0, !this.horiz, void 0, !0) }; a.prototype.getPlotLinePath = function (c) {
                        function d(c, d, b) { if ("pass" !== r && c < d || c > b) r ? c = e(c, d, b) : R = !0; return c } var b = this, a = b.chart, k = b.left, q = b.top, g = c.old, C = c.value, l = c.lineWidth, f = g && a.oldChartHeight || a.chartHeight, v = g && a.oldChartWidth || a.chartWidth, n = b.transB, H = c.translatedValue, r = c.force, D, p, w, P, R; c = {
                            value: C, lineWidth: l, old: g, force: r, acrossPanes: c.acrossPanes,
                            translatedValue: H
                        }; m(this, "getPlotLinePath", c, function (c) { H = z(H, b.translate(C, void 0, void 0, g)); H = e(H, -1E5, 1E5); D = w = Math.round(H + n); p = P = Math.round(f - H - n); h(H) ? b.horiz ? (p = q, P = f - b.bottom, D = w = d(D, k, k + b.width)) : (D = k, w = v - b.right, p = P = d(p, q, q + b.height)) : (R = !0, r = !1); c.path = R && !r ? null : a.renderer.crispLine([["M", D, p], ["L", w, P]], l || 1) }); return c.path
                    }; a.prototype.getLinearTickPositions = function (c, d, b) {
                        var a = r(Math.floor(d / c) * c); b = r(Math.ceil(b / c) * c); var h = [], e; r(a + c) === a && (e = 20); if (this.single) return [d]; for (d =
                            a; d <= b;) { h.push(d); d = r(d + c, e); if (d === k) break; var k = d } return h
                    }; a.prototype.getMinorTickInterval = function () { var c = this.options; return !0 === c.minorTicks ? z(c.minorTickInterval, "auto") : !1 === c.minorTicks ? null : c.minorTickInterval }; a.prototype.getMinorTickPositions = function () {
                        var c = this.options, d = this.tickPositions, b = this.minorTickInterval, a = this.pointRangePadding || 0, h = this.min - a; a = this.max + a; var e = a - h, k = []; if (e && e / b < this.len / 3) {
                            var m = this.logarithmic; if (m) this.paddedTicks.forEach(function (c, d, a) {
                                d && k.push.apply(k,
                                    m.getLogTickPositions(b, a[d - 1], a[d], !0))
                            }); else if (this.dateTime && "auto" === this.getMinorTickInterval()) k = k.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(b), h, a, c.startOfWeek)); else for (c = h + (d[0] - h) % b; c <= a && c !== k[0]; c += b)k.push(c)
                        } 0 !== k.length && this.trimTicks(k); return k
                    }; a.prototype.adjustForMinRange = function () {
                        var c = this.options, d = this.logarithmic, b = this.min, a = this.max, h = 0, e, k, m, q; this.isXAxis && "undefined" === typeof this.minRange && !d && (G(c.min) || G(c.max) || G(c.floor) || G(c.ceiling) ?
                            this.minRange = null : (this.series.forEach(function (c) { m = c.xData; q = c.xIncrement ? 1 : m.length - 1; if (1 < m.length) for (e = q; 0 < e; e--)if (k = m[e] - m[e - 1], !h || k < h) h = k }), this.minRange = Math.min(5 * h, this.dataMax - this.dataMin))); if (a - b < this.minRange) {
                                var g = this.dataMax - this.dataMin >= this.minRange; var f = this.minRange; var v = (f - a + b) / 2; v = [b - v, z(c.min, b - v)]; g && (v[2] = this.logarithmic ? this.logarithmic.log2lin(this.dataMin) : this.dataMin); b = l(v); a = [b + f, z(c.max, b + f)]; g && (a[2] = d ? d.log2lin(this.dataMax) : this.dataMax); a = n(a); a - b < f &&
                                    (v[0] = a - f, v[1] = z(c.min, a - f), b = l(v))
                            } this.min = b; this.max = a
                    }; a.prototype.getClosest = function () { var c; this.categories ? c = 1 : this.series.forEach(function (d) { var b = d.closestPointRange, a = d.visible || !d.chart.options.chart.ignoreHiddenSeries; !d.noSharedTooltip && G(b) && a && (c = G(c) ? Math.min(c, b) : b) }); return c }; a.prototype.nameToX = function (c) {
                        var d = v(this.options.categories), b = d ? this.categories : this.names, a = c.options.x; c.series.requireSorting = !1; G(a) || (a = this.options.uniqueNames && b ? d ? b.indexOf(c.name) : z(b.keys[c.name],
                            -1) : c.series.autoIncrement()); if (-1 === a) { if (!d && b) var h = b.length } else h = a; "undefined" !== typeof h ? (this.names[h] = c.name, this.names.keys[c.name] = h) : c.x && (h = c.x); return h
                    }; a.prototype.updateNames = function () {
                        var c = this, d = this.names; 0 < d.length && (Object.keys(d.keys).forEach(function (c) { delete d.keys[c] }), d.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach(function (d) {
                            d.xIncrement = null; if (!d.points || d.isDirtyData) c.max = Math.max(c.max, d.xData.length - 1), d.processData(), d.generatePoints();
                            d.data.forEach(function (b, a) { if (b && b.options && "undefined" !== typeof b.name) { var h = c.nameToX(b); "undefined" !== typeof h && h !== b.x && (b.x = h, d.xData[a] = h) } })
                        }))
                    }; a.prototype.setAxisTranslation = function () {
                        var c = this, b = c.max - c.min, a = c.linkedParent, h = !!c.categories, e = c.isXAxis, k = c.axisPointRange || 0, q = 0, g = 0, l = c.transA; if (e || h || k) {
                            var f = c.getClosest(); a ? (q = a.minPointOffset, g = a.pointRangePadding) : c.series.forEach(function (b) {
                                var a = h ? 1 : e ? z(b.options.pointRange, f, 0) : c.axisPointRange || 0, m = b.options.pointPlacement;
                                k = Math.max(k, a); if (!c.single || h) b = b.is("xrange") ? !e : e, q = Math.max(q, b && d(m) ? 0 : a / 2), g = Math.max(g, b && "on" === m ? 0 : a)
                            }); a = c.ordinal && c.ordinal.slope && f ? c.ordinal.slope / f : 1; c.minPointOffset = q *= a; c.pointRangePadding = g *= a; c.pointRange = Math.min(k, c.single && h ? 1 : b); e && (c.closestPointRange = f)
                        } c.translationSlope = c.transA = l = c.staticScale || c.len / (b + g || 1); c.transB = c.horiz ? c.left : c.bottom; c.minPixelPadding = l * q; m(this, "afterSetAxisTranslation")
                    }; a.prototype.minFromRange = function () { return this.max - this.range }; a.prototype.setTickInterval =
                        function (c) {
                            var b = this.chart, d = this.logarithmic, a = this.options, e = this.isXAxis, k = this.isLinked, q = a.tickPixelInterval, g = this.categories, l = this.softThreshold, f = a.maxPadding, C = a.minPadding, v = h(a.tickInterval) && 0 <= a.tickInterval ? a.tickInterval : void 0, n = h(this.threshold) ? this.threshold : null; this.dateTime || g || k || this.getTickAmount(); var H = z(this.userMin, a.min); var D = z(this.userMax, a.max); if (k) {
                                this.linkedParent = b[this.coll][a.linkedTo]; var p = this.linkedParent.getExtremes(); this.min = z(p.min, p.dataMin); this.max =
                                    z(p.max, p.dataMax); a.type !== this.linkedParent.options.type && y(11, 1, b)
                            } else { if (l && G(n)) if (this.dataMin >= n) p = n, C = 0; else if (this.dataMax <= n) { var w = n; f = 0 } this.min = z(H, p, this.dataMin); this.max = z(D, w, this.dataMax) } d && (this.positiveValuesOnly && !c && 0 >= Math.min(this.min, z(this.dataMin, this.min)) && y(10, 1, b), this.min = r(d.log2lin(this.min), 16), this.max = r(d.log2lin(this.max), 16)); this.range && G(this.max) && (this.userMin = this.min = H = Math.max(this.dataMin, this.minFromRange()), this.userMax = D = this.max, this.range = null);
                            m(this, "foundExtremes"); this.beforePadding && this.beforePadding(); this.adjustForMinRange(); !(g || this.axisPointRange || this.stacking && this.stacking.usePercentage || k) && G(this.min) && G(this.max) && (b = this.max - this.min) && (!G(H) && C && (this.min -= b * C), !G(D) && f && (this.max += b * f)); h(this.userMin) || (h(a.softMin) && a.softMin < this.min && (this.min = H = a.softMin), h(a.floor) && (this.min = Math.max(this.min, a.floor))); h(this.userMax) || (h(a.softMax) && a.softMax > this.max && (this.max = D = a.softMax), h(a.ceiling) && (this.max = Math.min(this.max,
                                a.ceiling))); l && G(this.dataMin) && (n = n || 0, !G(H) && this.min < n && this.dataMin >= n ? this.min = this.options.minRange ? Math.min(n, this.max - this.minRange) : n : !G(D) && this.max > n && this.dataMax <= n && (this.max = this.options.minRange ? Math.max(n, this.min + this.minRange) : n)); h(this.min) && h(this.max) && !this.chart.polar && this.min > this.max && (G(this.options.min) ? this.max = this.min : G(this.options.max) && (this.min = this.max)); this.tickInterval = this.min === this.max || "undefined" === typeof this.min || "undefined" === typeof this.max ? 1 : k &&
                                    this.linkedParent && !v && q === this.linkedParent.options.tickPixelInterval ? v = this.linkedParent.tickInterval : z(v, this.tickAmount ? (this.max - this.min) / Math.max(this.tickAmount - 1, 1) : void 0, g ? 1 : (this.max - this.min) * q / Math.max(this.len, q)); if (e && !c) { var P = this.min !== (this.old && this.old.min) || this.max !== (this.old && this.old.max); this.series.forEach(function (c) { c.forceCrop = c.forceCropping && c.forceCropping(); c.processData(P) }); m(this, "postProcessData", { hasExtremesChanged: P }) } this.setAxisTranslation(); m(this, "initialAxisTranslation");
                            this.pointRange && !v && (this.tickInterval = Math.max(this.pointRange, this.tickInterval)); c = z(a.minTickInterval, this.dateTime && !this.series.some(function (c) { return c.noSharedTooltip }) ? this.closestPointRange : 0); !v && this.tickInterval < c && (this.tickInterval = c); this.dateTime || this.logarithmic || v || (this.tickInterval = W(this, this.tickInterval)); this.tickAmount || (this.tickInterval = this.unsquish()); this.setTickPositions()
                        }; a.prototype.setTickPositions = function () {
                            var c = this.options, b = c.tickPositions, d = c.tickPositioner,
                            a = this.getMinorTickInterval(), e = this.hasVerticalPanning(), k = "colorAxis" === this.coll, q = (k || !e) && c.startOnTick; e = (k || !e) && c.endOnTick; k = []; var g; this.tickmarkOffset = this.categories && "between" === c.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0; this.minorTickInterval = "auto" === a && this.tickInterval ? this.tickInterval / 5 : a; this.single = this.min === this.max && G(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || !1 !== c.allowDecimals); if (b) k = b.slice(); else if (h(this.min) && h(this.max)) {
                                if (this.ordinal &&
                                    this.ordinal.positions || !((this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200))) if (this.dateTime) k = this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval, c.units), this.min, this.max, c.startOfWeek, this.ordinal && this.ordinal.positions, this.closestPointRange, !0); else if (this.logarithmic) k = this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max); else for (a = c = this.tickInterval; a <= 2 * c;)if (k = this.getLinearTickPositions(this.tickInterval, this.min, this.max), this.tickAmount &&
                                        k.length > this.tickAmount) this.tickInterval = W(this, a *= 1.1); else break; else k = [this.min, this.max], y(19, !1, this.chart); k.length > this.len && (k = [k[0], k[k.length - 1]], k[0] === k[1] && (k.length = 1)); d && (this.tickPositions = k, (g = d.apply(this, [this.min, this.max])) && (k = g))
                            } this.tickPositions = k; this.paddedTicks = k.slice(0); this.trimTicks(k, q, e); !this.isLinked && h(this.min) && h(this.max) && (this.single && 2 > k.length && !this.categories && !this.series.some(function (c) { return c.is("heatmap") && "between" === c.options.pointPlacement }) &&
                                (this.min -= .5, this.max += .5), b || g || this.adjustTickAmount()); m(this, "afterSetTickPositions")
                        }; a.prototype.trimTicks = function (c, b, d) { var a = c[0], h = c[c.length - 1], k = !this.isOrdinal && this.minPointOffset || 0; m(this, "trimTicks"); if (!this.isLinked) { if (b && -Infinity !== a) this.min = a; else for (; this.min - k > c[0];)c.shift(); if (d) this.max = h; else for (; this.max + k < c[c.length - 1];)c.pop(); 0 === c.length && G(a) && !this.options.tickPositions && c.push((h + a) / 2) } }; a.prototype.alignToOthers = function () {
                            var c = this, b = [this], d = c.options,
                            a = "yAxis" === this.coll && this.chart.options.chart.alignThresholds, k = [], e; c.thresholdAlignment = void 0; if ((!1 !== this.chart.options.chart.alignTicks && d.alignTicks || a) && !1 !== d.startOnTick && !1 !== d.endOnTick && !c.logarithmic) { var m = function (c) { var b = c.options; return [c.horiz ? b.left : b.top, b.width, b.height, b.pane].join() }, q = m(this); this.chart[this.coll].forEach(function (d) { var a = d.series; a.length && a.some(function (c) { return c.visible }) && d !== c && m(d) === q && (e = !0, b.push(d)) }) } if (e && a) {
                                b.forEach(function (b) {
                                    b = b.getThresholdAlignment(c);
                                    h(b) && k.push(b)
                                }); var g = 1 < k.length ? k.reduce(function (c, b) { return c + b }, 0) / k.length : void 0; b.forEach(function (c) { c.thresholdAlignment = g })
                            } return e
                        }; a.prototype.getThresholdAlignment = function (c) { (!h(this.dataMin) || this !== c && this.series.some(function (c) { return c.isDirty || c.isDirtyData })) && this.getSeriesExtremes(); if (h(this.threshold)) return c = e((this.threshold - (this.dataMin || 0)) / ((this.dataMax || 0) - (this.dataMin || 0)), 0, 1), this.options.reversed && (c = 1 - c), c }; a.prototype.getTickAmount = function () {
                            var c = this.options,
                            b = c.tickPixelInterval, d = c.tickAmount; !G(c.tickInterval) && !d && this.len < b && !this.isRadial && !this.logarithmic && c.startOnTick && c.endOnTick && (d = 2); !d && this.alignToOthers() && (d = Math.ceil(this.len / b) + 1); 4 > d && (this.finalTickAmt = d, d = 5); this.tickAmount = d
                        }; a.prototype.adjustTickAmount = function () {
                            var c = this, b = c.finalTickAmt, d = c.max, a = c.min, k = c.options, e = c.tickPositions, m = c.tickAmount, q = c.thresholdAlignment, g = e && e.length, l = z(c.threshold, c.softThreshold ? 0 : null); var f = c.tickInterval; if (h(q)) {
                                var v = .5 > q ? Math.ceil(q *
                                    (m - 1)) : Math.floor(q * (m - 1)); k.reversed && (v = m - 1 - v)
                            } if (c.hasData() && h(a) && h(d)) {
                                q = function () { c.transA *= (g - 1) / (m - 1); c.min = k.startOnTick ? e[0] : Math.min(a, e[0]); c.max = k.endOnTick ? e[e.length - 1] : Math.max(d, e[e.length - 1]) }; if (h(v) && h(c.threshold)) { for (; e[v] !== l || e.length !== m || e[0] > a || e[e.length - 1] < d;) { e.length = 0; for (e.push(c.threshold); e.length < m;)void 0 === e[v] || e[v] > c.threshold ? e.unshift(r(e[0] - f)) : e.push(r(e[e.length - 1] + f)); if (f > 8 * c.tickInterval) break; f *= 2 } q() } else if (g < m) {
                                    for (; e.length < m;)e.length % 2 || a ===
                                        l ? e.push(r(e[e.length - 1] + f)) : e.unshift(r(e[0] - f)); q()
                                } if (G(b)) { for (f = l = e.length; f--;)(3 === b && 1 === f % 2 || 2 >= b && 0 < f && f < l - 1) && e.splice(f, 1); c.finalTickAmt = void 0 }
                            }
                        }; a.prototype.setScale = function () {
                            var c = !1, b = !1; this.series.forEach(function (d) { c = c || d.isDirtyData || d.isDirty; b = b || d.xAxis && d.xAxis.isDirty || !1 }); this.setAxisSize(); var d = this.len !== (this.old && this.old.len); d || c || b || this.isLinked || this.forceRedraw || this.userMin !== (this.old && this.old.userMin) || this.userMax !== (this.old && this.old.userMax) || this.alignToOthers() ?
                                (this.stacking && this.stacking.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.isDirty || (this.isDirty = d || this.min !== (this.old && this.old.min) || this.max !== (this.old && this.old.max))) : this.stacking && this.stacking.cleanStacks(); c && this.panningState && (this.panningState.isDirty = !0); m(this, "afterSetScale")
                        }; a.prototype.setExtremes = function (c, b, d, a, e) {
                            var k = this, h = k.chart; d = z(d, !0); k.series.forEach(function (c) { delete c.kdTree }); e = w(e, { min: c, max: b }); m(k, "setExtremes", e,
                                function () { k.userMin = c; k.userMax = b; k.eventArgs = e; d && h.redraw(a) })
                        }; a.prototype.zoom = function (c, b) {
                            var d = this, a = this.dataMin, e = this.dataMax, k = this.options, h = Math.min(a, z(k.min, a)), q = Math.max(e, z(k.max, e)); c = { newMin: c, newMax: b }; m(this, "zoom", c, function (c) {
                                var b = c.newMin, k = c.newMax; if (b !== d.min || k !== d.max) d.allowZoomOutside || (G(a) && (b < h && (b = h), b > q && (b = q)), G(e) && (k < h && (k = h), k > q && (k = q))), d.displayBtn = "undefined" !== typeof b || "undefined" !== typeof k, d.setExtremes(b, k, !1, void 0, { trigger: "zoom" }); c.zoomed =
                                    !0
                            }); return c.zoomed
                        }; a.prototype.setAxisSize = function () {
                            var c = this.chart, b = this.options, d = b.offsets || [0, 0, 0, 0], a = this.horiz, e = this.width = Math.round(H(z(b.width, c.plotWidth - d[3] + d[1]), c.plotWidth)), k = this.height = Math.round(H(z(b.height, c.plotHeight - d[0] + d[2]), c.plotHeight)), h = this.top = Math.round(H(z(b.top, c.plotTop + d[0]), c.plotHeight, c.plotTop)); b = this.left = Math.round(H(z(b.left, c.plotLeft + d[3]), c.plotWidth, c.plotLeft)); this.bottom = c.chartHeight - k - h; this.right = c.chartWidth - e - b; this.len = Math.max(a ?
                                e : k, 0); this.pos = a ? b : h
                        }; a.prototype.getExtremes = function () { var c = this.logarithmic; return { min: c ? r(c.lin2log(this.min)) : this.min, max: c ? r(c.lin2log(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax } }; a.prototype.getThreshold = function (c) { var b = this.logarithmic, d = b ? b.lin2log(this.min) : this.min; b = b ? b.lin2log(this.max) : this.max; null === c || -Infinity === c ? c = d : Infinity === c ? c = b : d > c ? c = d : b < c && (c = b); return this.translate(c, 0, 1, 0, 1) }; a.prototype.autoLabelAlign =
                            function (c) { var b = (z(c, 0) - 90 * this.side + 720) % 360; c = { align: "center" }; m(this, "autoLabelAlign", c, function (c) { 15 < b && 165 > b ? c.align = "right" : 195 < b && 345 > b && (c.align = "left") }); return c.align }; a.prototype.tickSize = function (c) { var b = this.options, d = z(b["tick" === c ? "tickWidth" : "minorTickWidth"], "tick" === c && this.isXAxis && !this.categories ? 1 : 0), a = b["tick" === c ? "tickLength" : "minorTickLength"]; if (d && a) { "inside" === b[c + "Position"] && (a = -a); var e = [a, d] } c = { tickSize: e }; m(this, "afterTickSize", c); return c.tickSize }; a.prototype.labelMetrics =
                                function () { var c = this.tickPositions && this.tickPositions[0] || 0; return this.chart.renderer.fontMetrics(this.options.labels.style.fontSize, this.ticks[c] && this.ticks[c].label) }; a.prototype.unsquish = function () {
                                    var c = this.options.labels, d = this.horiz, a = this.tickInterval, e = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / a), k = c.rotation, m = this.labelMetrics(), q = Math.max(this.max - this.min, 0), g = function (c) {
                                        var b = c / (e || 1); b = 1 < b ? Math.ceil(b) : 1; b * a > q && Infinity !== c && Infinity !== e && q && (b = Math.ceil(q / a)); return r(b *
                                            a)
                                    }, f = a, l = Number.MAX_VALUE; if (d) { if (!c.staggerLines) if (h(k)) var v = [k]; else e < c.autoRotationLimit && (v = c.autoRotation); if (v) for (var n = d = void 0, H = 0, D = v; H < D.length; H++) { var p = D[H]; if (p === k || p && -90 <= p && 90 >= p) if (d = g(Math.abs(m.h / Math.sin(b * p))), n = d + Math.abs(p / 360), n < l) { l = n; var w = p; f = d } } } else f = g(m.h); this.autoRotation = v; this.labelRotation = z(w, h(k) ? k : 0); return c.step ? a : f
                                }; a.prototype.getSlotWidth = function (c) {
                                    var b = this.chart, d = this.horiz, a = this.options.labels, e = Math.max(this.tickPositions.length - (this.categories ?
                                        0 : 1), 1), k = b.margin[3]; if (c && h(c.slotWidth)) return c.slotWidth; if (d && 2 > a.step) return a.rotation ? 0 : (this.staggerLines || 1) * this.len / e; if (!d) { c = a.style.width; if (void 0 !== c) return parseInt(String(c), 10); if (k) return k - b.spacing[3] } return .33 * b.chartWidth
                                }; a.prototype.renderUnsquish = function () {
                                    var c = this.chart, b = c.renderer, a = this.tickPositions, e = this.ticks, k = this.options.labels, h = k.style, m = this.horiz, q = this.getSlotWidth(), g = Math.max(1, Math.round(q - 2 * k.padding)), f = {}, l = this.labelMetrics(), v = h.textOverflow,
                                    n = 0; d(k.rotation) || (f.rotation = k.rotation || 0); a.forEach(function (c) { c = e[c]; c.movedLabel && c.replaceMovedLabel(); c && c.label && c.label.textPxLength > n && (n = c.label.textPxLength) }); this.maxLabelLength = n; if (this.autoRotation) n > g && n > l.h ? f.rotation = this.labelRotation : this.labelRotation = 0; else if (q) {
                                        var z = g; if (!v) {
                                            var H = "clip"; for (g = a.length; !m && g--;) {
                                                var D = a[g]; if (D = e[D].label) D.styles && "ellipsis" === D.styles.textOverflow ? D.css({ textOverflow: "clip" }) : D.textPxLength > q && D.css({ width: q + "px" }), D.getBBox().height >
                                                    this.len / a.length - (l.h - l.f) && (D.specificTextOverflow = "ellipsis")
                                            }
                                        }
                                    } f.rotation && (z = n > .5 * c.chartHeight ? .33 * c.chartHeight : n, v || (H = "ellipsis")); if (this.labelAlign = k.align || this.autoLabelAlign(this.labelRotation)) f.align = this.labelAlign; a.forEach(function (c) {
                                        var b = (c = e[c]) && c.label, d = h.width, a = {}; b && (b.attr(f), c.shortenLabel ? c.shortenLabel() : z && !d && "nowrap" !== h.whiteSpace && (z < b.textPxLength || "SPAN" === b.element.tagName) ? (a.width = z + "px", v || (a.textOverflow = b.specificTextOverflow || H), b.css(a)) : b.styles && b.styles.width &&
                                            !a.width && !d && b.css({ width: null }), delete b.specificTextOverflow, c.rotation = f.rotation)
                                    }, this); this.tickRotCorr = b.rotCorr(l.b, this.labelRotation || 0, 0 !== this.side)
                                }; a.prototype.hasData = function () { return this.series.some(function (c) { return c.hasData() }) || this.options.showEmpty && G(this.min) && G(this.max) }; a.prototype.addTitle = function (b) {
                                    var d = this.chart.renderer, a = this.horiz, e = this.opposite, k = this.options.title, h = this.chart.styledMode, m; this.axisTitle || ((m = k.textAlign) || (m = (a ? {
                                        low: "left", middle: "center",
                                        high: "right"
                                    } : { low: e ? "right" : "left", middle: "center", high: e ? "left" : "right" })[k.align]), this.axisTitle = d.text(k.text || "", 0, 0, k.useHTML).attr({ zIndex: 7, rotation: k.rotation, align: m }).addClass("highcharts-axis-title"), h || this.axisTitle.css(c(k.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = !0); h || k.style.width || this.isRadial || this.axisTitle.css({ width: this.len + "px" }); this.axisTitle[b ? "show" : "hide"](b)
                                }; a.prototype.generateTick = function (c) {
                                    var b = this.ticks; b[c] ? b[c].addLabel() : b[c] = new J(this,
                                        c)
                                }; a.prototype.getOffset = function () {
                                    var c = this, b = this, d = b.chart, a = b.horiz, e = b.options, h = b.side, q = b.ticks, g = b.tickPositions, f = b.coll, l = b.axisParent, v = d.renderer, n = d.inverted && !b.isZAxis ? [1, 0, 3, 2][h] : h, D = b.hasData(), H = e.title, r = e.labels, p = d.axisOffset; d = d.clipOffset; var w = [-1, 1, 1, -1][h], P = e.className, R, u = 0, ja = 0, ba = 0; b.showAxis = R = D || e.showEmpty; b.staggerLines = b.horiz && r.staggerLines || void 0; if (!b.axisGroup) {
                                        var t = function (b, d, a) {
                                            return v.g(b).attr({ zIndex: a }).addClass("highcharts-".concat(f.toLowerCase()).concat(d,
                                                " ") + (c.isRadial ? "highcharts-radial-axis".concat(d, " ") : "") + (P || "")).add(l)
                                        }; b.gridGroup = t("grid", "-grid", e.gridZIndex); b.axisGroup = t("axis", "", e.zIndex); b.labelGroup = t("axis-labels", "-labels", r.zIndex)
                                    } D || b.isLinked ? (g.forEach(function (c) { b.generateTick(c) }), b.renderUnsquish(), b.reserveSpaceDefault = 0 === h || 2 === h || { 1: "left", 3: "right" }[h] === b.labelAlign, z(r.reserveSpace, "center" === b.labelAlign ? !0 : null, b.reserveSpaceDefault) && g.forEach(function (c) { ba = Math.max(q[c].getLabelSize(), ba) }), b.staggerLines &&
                                        (ba *= b.staggerLines), b.labelOffset = ba * (b.opposite ? -1 : 1)) : k(q, function (c, b) { c.destroy(); delete q[b] }); if (H && H.text && !1 !== H.enabled && (b.addTitle(R), R && !1 !== H.reserveSpace)) { b.titleOffset = u = b.axisTitle.getBBox()[a ? "height" : "width"]; var I = H.offset; ja = G(I) ? 0 : z(H.margin, a ? 5 : 10) } b.renderLine(); b.offset = w * z(e.offset, p[h] ? p[h] + (e.margin || 0) : 0); b.tickRotCorr = b.tickRotCorr || { x: 0, y: 0 }; H = 0 === h ? -b.labelMetrics().h : 2 === h ? b.tickRotCorr.y : 0; D = Math.abs(ba) + ja; ba && (D = D - H + w * (a ? z(r.y, b.tickRotCorr.y + 8 * w) : r.x)); b.axisTitleMargin =
                                            z(I, D); b.getMaxLabelDimensions && (b.maxLabelDimensions = b.getMaxLabelDimensions(q, g)); "colorAxis" !== f && (a = this.tickSize("tick"), p[h] = Math.max(p[h], (b.axisTitleMargin || 0) + u + w * b.offset, D, g && g.length && a ? a[0] + w * b.offset : 0), e = !b.axisLine || e.offset ? 0 : 2 * Math.floor(b.axisLine.strokeWidth() / 2), d[n] = Math.max(d[n], e)); m(this, "afterGetOffset")
                                }; a.prototype.getLinePath = function (c) {
                                    var b = this.chart, d = this.opposite, a = this.offset, e = this.horiz, k = this.left + (d ? this.width : 0) + a; a = b.chartHeight - this.bottom - (d ? this.height :
                                        0) + a; d && (c *= -1); return b.renderer.crispLine([["M", e ? this.left : k, e ? a : this.top], ["L", e ? b.chartWidth - this.right : k, e ? a : b.chartHeight - this.bottom]], c)
                                }; a.prototype.renderLine = function () { this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({ stroke: this.options.lineColor, "stroke-width": this.options.lineWidth, zIndex: 7 })) }; a.prototype.getTitlePosition = function () {
                                    var c = this.horiz, b = this.left, d = this.top, a = this.len,
                                    e = this.options.title, k = c ? b : d, h = this.opposite, q = this.offset, g = e.x, f = e.y, l = this.axisTitle, v = this.chart.renderer.fontMetrics(e.style.fontSize, l); l = l ? Math.max(l.getBBox(!1, 0).height - v.h - 1, 0) : 0; a = { low: k + (c ? 0 : a), middle: k + a / 2, high: k + (c ? a : 0) }[e.align]; b = (c ? d + this.height : b) + (c ? 1 : -1) * (h ? -1 : 1) * (this.axisTitleMargin || 0) + [-l, l, v.f, -l][this.side]; c = { x: c ? a + g : b + (h ? this.width : 0) + q + g, y: c ? b + f - (h ? this.height : 0) + q : a + f }; m(this, "afterGetTitlePosition", { titlePosition: c }); return c
                                }; a.prototype.renderMinorTick = function (c,
                                    b) { var d = this.minorTicks; d[c] || (d[c] = new J(this, c, "minor")); b && d[c].isNew && d[c].render(null, !0); d[c].render(null, !1, 1) }; a.prototype.renderTick = function (c, b, d) { var a = this.ticks; if (!this.isLinked || c >= this.min && c <= this.max || this.grid && this.grid.isColumn) a[c] || (a[c] = new J(this, c)), d && a[c].isNew && a[c].render(b, !0, -1), a[c].render(b) }; a.prototype.render = function () {
                                        var c = this, b = c.chart, d = c.logarithmic, a = c.options, e = c.isLinked, q = c.tickPositions, g = c.axisTitle, l = c.ticks, f = c.minorTicks, v = c.alternateBands, n = a.stackLabels,
                                        z = a.alternateGridColor, D = c.tickmarkOffset, H = c.axisLine, r = c.showAxis, p = u(b.renderer.globalAnimation), w, R; c.labelEdge.length = 0; c.overlap = !1;[l, f, v].forEach(function (c) { k(c, function (c) { c.isActive = !1 }) }); if (c.hasData() || e) {
                                            var t = c.chart.hasRendered && c.old && h(c.old.min); c.minorTickInterval && !c.categories && c.getMinorTickPositions().forEach(function (b) { c.renderMinorTick(b, t) }); q.length && (q.forEach(function (b, d) { c.renderTick(b, d, t) }), D && (0 === c.min || c.single) && (l[-1] || (l[-1] = new J(c, -1, null, !0)), l[-1].render(-1)));
                                            z && q.forEach(function (a, e) { R = "undefined" !== typeof q[e + 1] ? q[e + 1] + D : c.max - D; 0 === e % 2 && a < c.max && R <= c.max + (b.polar ? -D : D) && (v[a] || (v[a] = new A.PlotLineOrBand(c)), w = a + D, v[a].options = { from: d ? d.lin2log(w) : w, to: d ? d.lin2log(R) : R, color: z, className: "highcharts-alternate-grid" }, v[a].render(), v[a].isActive = !0) }); c._addedPlotLB || (c._addedPlotLB = !0, (a.plotLines || []).concat(a.plotBands || []).forEach(function (b) { c.addPlotBandOrLine(b) }))
                                        } [l, f, v].forEach(function (c) {
                                            var d = [], a = p.duration; k(c, function (c, b) {
                                                c.isActive ||
                                                (c.render(b, !1, 0), c.isActive = !1, d.push(b))
                                            }); P(function () { for (var b = d.length; b--;)c[d[b]] && !c[d[b]].isActive && (c[d[b]].destroy(), delete c[d[b]]) }, c !== v && b.hasRendered && a ? a : 0)
                                        }); H && (H[H.isPlaced ? "animate" : "attr"]({ d: this.getLinePath(H.strokeWidth()) }), H.isPlaced = !0, H[r ? "show" : "hide"](r)); g && r && (a = c.getTitlePosition(), g[g.isNew ? "attr" : "animate"](a), g.isNew = !1); n && n.enabled && c.stacking && c.stacking.renderStackTotals(); c.old = { len: c.len, max: c.max, min: c.min, transA: c.transA, userMax: c.userMax, userMin: c.userMin };
                                        c.isDirty = !1; m(this, "afterRender")
                                    }; a.prototype.redraw = function () { this.visible && (this.render(), this.plotLinesAndBands.forEach(function (c) { c.render() })); this.series.forEach(function (c) { c.isDirty = !0 }) }; a.prototype.getKeepProps = function () { return this.keepProps || a.keepProps }; a.prototype.destroy = function (c) {
                                        var b = this, d = b.plotLinesAndBands, a = this.eventOptions; m(this, "destroy", { keepEvents: c }); c || D(b);[b.ticks, b.minorTicks, b.alternateBands].forEach(function (c) { K(c) }); if (d) for (c = d.length; c--;)d[c].destroy();
                                        "axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function (c) { b[c] && (b[c] = b[c].destroy()) }); for (var e in b.plotLinesAndBandsGroups) b.plotLinesAndBandsGroups[e] = b.plotLinesAndBandsGroups[e].destroy(); k(b, function (c, d) { -1 === b.getKeepProps().indexOf(d) && delete b[d] }); this.eventOptions = a
                                    }; a.prototype.drawCrosshair = function (c, b) {
                                        var d = this.crosshair, a = z(d && d.snap, !0), e = this.chart, k, h = this.cross; m(this, "drawCrosshair", { e: c, point: b }); c || (c = this.cross && this.cross.e); if (d &&
                                            !1 !== (G(b) || !a)) {
                                                a ? G(b) && (k = z("colorAxis" !== this.coll ? b.crosshairPos : null, this.isXAxis ? b.plotX : this.len - b.plotY)) : k = c && (this.horiz ? c.chartX - this.pos : this.len - c.chartY + this.pos); if (G(k)) { var q = { value: b && (this.isXAxis ? b.x : z(b.stackY, b.y)), translatedValue: k }; e.polar && w(q, { isCrosshair: !0, chartX: c && c.chartX, chartY: c && c.chartY, point: b }); q = this.getPlotLinePath(q) || null } if (!G(q)) { this.hideCrosshair(); return } a = this.categories && !this.isRadial; h || (this.cross = h = e.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" +
                                                    (a ? "category " : "thin ") + (d.className || "")).attr({ zIndex: z(d.zIndex, 2) }).add(), e.styledMode || (h.attr({ stroke: d.color || (a ? x.parse("#ccd6eb").setOpacity(.25).get() : "#cccccc"), "stroke-width": z(d.width, 1) }).css({ "pointer-events": "none" }), d.dashStyle && h.attr({ dashstyle: d.dashStyle }))); h.show().attr({ d: q }); a && !d.width && h.attr({ "stroke-width": this.transA }); this.cross.e = c
                                        } else this.hideCrosshair(); m(this, "afterDrawCrosshair", { e: c, point: b })
                                    }; a.prototype.hideCrosshair = function () {
                                        this.cross && this.cross.hide();
                                        m(this, "afterHideCrosshair")
                                    }; a.prototype.hasVerticalPanning = function () { var c = this.chart.options.chart.panning; return !!(c && c.enabled && /y/.test(c.type)) }; a.prototype.validatePositiveValue = function (c) { return h(c) && 0 < c }; a.prototype.update = function (b, d) { var a = this.chart; b = c(this.userOptions, b); this.destroy(!0); this.init(a, b); a.isDirtyBox = !0; z(d, !0) && a.redraw() }; a.prototype.remove = function (c) {
                                        for (var b = this.chart, d = this.coll, a = this.series, e = a.length; e--;)a[e] && a[e].remove(!1); I(b.axes, this); I(b[d], this);
                                        b[d].forEach(function (c, b) { c.options.index = c.userOptions.index = b }); this.destroy(); b.isDirtyBox = !0; z(c, !0) && b.redraw()
                                    }; a.prototype.setTitle = function (c, b) { this.update({ title: c }, b) }; a.prototype.setCategories = function (c, b) { this.update({ categories: c }, b) }; a.defaultOptions = f.defaultXAxisOptions; a.keepProps = "extKey hcEvents names series userMax userMin".split(" "); return a
        }(); ""; return a
    }); M(f, "Core/Axis/DateTimeAxis.js", [f["Core/Utilities.js"]], function (a) {
        var f = a.addEvent, x = a.getMagnitude, E = a.normalizeTickInterval,
        B = a.timeUnits, A; (function (a) {
            function t() { return this.chart.time.getTimeTicks.apply(this.chart.time, arguments) } function u(b) { "datetime" !== b.userOptions.type ? this.dateTime = void 0 : this.dateTime || (this.dateTime = new g(this)) } var p = []; a.compose = function (b) { -1 === p.indexOf(b) && (p.push(b), b.keepProps.push("dateTime"), b.prototype.getTimeTicks = t, f(b, "init", u)); return b }; var g = function () {
                function b(b) { this.axis = b } b.prototype.normalizeTimeTickInterval = function (b, a) {
                    var e = a || [["millisecond", [1, 2, 5, 10, 20, 25, 50,
                        100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]]; a = e[e.length - 1]; var g = B[a[0]], f = a[1], l; for (l = 0; l < e.length && !(a = e[l], g = B[a[0]], f = a[1], e[l + 1] && b <= (g * f[f.length - 1] + B[e[l + 1][0]]) / 2); l++); g === B.year && b < 5 * g && (f = [1, 2, 5]); b = E(b / g, f, "year" === a[0] ? Math.max(x(b / g), 1) : 1); return { unitRange: g, count: b, unitName: a[0] }
                }; b.prototype.getXDateFormat = function (b, a) {
                    var e = this.axis, g = e.chart.time; return e.closestPointRange ?
                        g.getDateFormat(e.closestPointRange, b, e.options.startOfWeek, a) || g.resolveDTLFormat(a.year).main : g.resolveDTLFormat(a.day).main
                }; return b
            }(); a.Additions = g
        })(A || (A = {})); return A
    }); M(f, "Core/Axis/LogarithmicAxis.js", [f["Core/Utilities.js"]], function (a) {
        var f = a.addEvent, x = a.normalizeTickInterval, E = a.pick, B; (function (a) {
            function y(a) { var b = this.logarithmic; "logarithmic" !== a.userOptions.type ? this.logarithmic = void 0 : b || (this.logarithmic = new p(this)) } function t() {
                var a = this.logarithmic; a && (this.lin2val = function (b) { return a.lin2log(b) },
                    this.val2lin = function (b) { return a.log2lin(b) })
            } var u = []; a.compose = function (a) { -1 === u.indexOf(a) && (u.push(a), a.keepProps.push("logarithmic"), f(a, "init", y), f(a, "afterInit", t)); return a }; var p = function () {
                function a(b) { this.axis = b } a.prototype.getLogTickPositions = function (b, a, g, e) {
                    var f = this.axis, l = f.len, n = f.options, p = []; e || (this.minorAutoInterval = void 0); if (.5 <= b) b = Math.round(b), p = f.getLinearTickPositions(b, a, g); else if (.08 <= b) {
                        var t = Math.floor(a), w, m = n = void 0; for (l = .3 < b ? [1, 2, 4] : .15 < b ? [1, 2, 4, 6, 8] : [1,
                            2, 3, 4, 5, 6, 7, 8, 9]; t < g + 1 && !m; t++) { var v = l.length; for (w = 0; w < v && !m; w++) { var h = this.log2lin(this.lin2log(t) * l[w]); h > a && (!e || n <= g) && "undefined" !== typeof n && p.push(n); n > g && (m = !0); n = h } }
                    } else a = this.lin2log(a), g = this.lin2log(g), b = e ? f.getMinorTickInterval() : n.tickInterval, b = E("auto" === b ? null : b, this.minorAutoInterval, n.tickPixelInterval / (e ? 5 : 1) * (g - a) / ((e ? l / f.tickPositions.length : l) || 1)), b = x(b), p = f.getLinearTickPositions(b, a, g).map(this.log2lin), e || (this.minorAutoInterval = b / 5); e || (f.tickInterval = b); return p
                };
                a.prototype.lin2log = function (b) { return Math.pow(10, b) }; a.prototype.log2lin = function (b) { return Math.log(b) / Math.LN10 }; return a
            }(); a.Additions = p
        })(B || (B = {})); return B
    }); M(f, "Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js", [f["Core/Utilities.js"]], function (a) {
        var f = a.erase, x = a.extend, E = a.isNumber, B; (function (a) {
            var y = [], t; a.compose = function (a, g) { t || (t = a); -1 === y.indexOf(g) && (y.push(g), x(g.prototype, u.prototype)); return g }; var u = function () {
                function a() { } a.prototype.getPlotBandPath = function (a, b, f) {
                    void 0 ===
                    f && (f = this.options); var g = this.getPlotLinePath({ value: b, force: !0, acrossPanes: f.acrossPanes }), e = [], l = this.horiz; b = !E(this.min) || !E(this.max) || a < this.min && b < this.min || a > this.max && b > this.max; a = this.getPlotLinePath({ value: a, force: !0, acrossPanes: f.acrossPanes }); f = 1; if (a && g) {
                        if (b) { var p = a.toString() === g.toString(); f = 0 } for (b = 0; b < a.length; b += 2) {
                            var t = a[b], u = a[b + 1], y = g[b], w = g[b + 1]; "M" !== t[0] && "L" !== t[0] || "M" !== u[0] && "L" !== u[0] || "M" !== y[0] && "L" !== y[0] || "M" !== w[0] && "L" !== w[0] || (l && y[1] === t[1] ? (y[1] += f, w[1] +=
                                f) : l || y[2] !== t[2] || (y[2] += f, w[2] += f), e.push(["M", t[1], t[2]], ["L", u[1], u[2]], ["L", w[1], w[2]], ["L", y[1], y[2]], ["Z"])); e.isFlat = p
                        }
                    } return e
                }; a.prototype.addPlotBand = function (a) { return this.addPlotBandOrLine(a, "plotBands") }; a.prototype.addPlotLine = function (a) { return this.addPlotBandOrLine(a, "plotLines") }; a.prototype.addPlotBandOrLine = function (a, b) {
                    var g = this, f = this.userOptions, e = new t(this, a); this.visible && (e = e.render()); if (e) {
                        this._addedPlotLB || (this._addedPlotLB = !0, (f.plotLines || []).concat(f.plotBands ||
                            []).forEach(function (b) { g.addPlotBandOrLine(b) })); if (b) { var r = f[b] || []; r.push(a); f[b] = r } this.plotLinesAndBands.push(e)
                    } return e
                }; a.prototype.removePlotBandOrLine = function (a) { var b = this.plotLinesAndBands, g = this.options, n = this.userOptions; if (b) { for (var e = b.length; e--;)b[e].id === a && b[e].destroy();[g.plotLines || [], n.plotLines || [], g.plotBands || [], n.plotBands || []].forEach(function (b) { for (e = b.length; e--;)(b[e] || {}).id === a && f(b, b[e]) }) } }; a.prototype.removePlotBand = function (a) { this.removePlotBandOrLine(a) };
                a.prototype.removePlotLine = function (a) { this.removePlotBandOrLine(a) }; return a
            }()
        })(B || (B = {})); return B
    }); M(f, "Core/Axis/PlotLineOrBand/PlotLineOrBand.js", [f["Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js"], f["Core/Utilities.js"]], function (a, f) {
        var y = f.arrayMax, E = f.arrayMin, B = f.defined, A = f.destroyObjectProperties, J = f.erase, t = f.fireEvent, u = f.merge, p = f.objectEach, g = f.pick; f = function () {
            function b(b, a) { this.axis = b; a && (this.options = a, this.id = a.id) } b.compose = function (g) { return a.compose(b, g) }; b.prototype.render =
                function () {
                    t(this, "render"); var b = this, a = b.axis, e = a.horiz, f = a.logarithmic, G = b.options, y = G.color, I = g(G.zIndex, 0), x = G.events, w = {}, m = a.chart.renderer, v = G.label, h = b.label, d = G.to, c = G.from, q = G.value, k = b.svgElem, z = [], H = B(c) && B(d); z = B(q); var D = !k, R = { "class": "highcharts-plot-" + (H ? "band " : "line ") + (G.className || "") }, P = H ? "bands" : "lines"; f && (c = f.log2lin(c), d = f.log2lin(d), q = f.log2lin(q)); a.chart.styledMode || (z ? (R.stroke = y || "#999999", R["stroke-width"] = g(G.width, 1), G.dashStyle && (R.dashstyle = G.dashStyle)) : H && (R.fill =
                        y || "#e6ebf5", G.borderWidth && (R.stroke = G.borderColor, R["stroke-width"] = G.borderWidth))); w.zIndex = I; P += "-" + I; (f = a.plotLinesAndBandsGroups[P]) || (a.plotLinesAndBandsGroups[P] = f = m.g("plot-" + P).attr(w).add()); D && (b.svgElem = k = m.path().attr(R).add(f)); if (z) z = a.getPlotLinePath({ value: q, lineWidth: k.strokeWidth(), acrossPanes: G.acrossPanes }); else if (H) z = a.getPlotBandPath(c, d, G); else return; !b.eventsAdded && x && (p(x, function (c, a) { k.on(a, function (c) { x[a].apply(b, [c]) }) }), b.eventsAdded = !0); (D || !k.d) && z && z.length ?
                            k.attr({ d: z }) : k && (z ? (k.show(), k.animate({ d: z })) : k.d && (k.hide(), h && (b.label = h = h.destroy()))); v && (B(v.text) || B(v.formatter)) && z && z.length && 0 < a.width && 0 < a.height && !z.isFlat ? (v = u({ align: e && H && "center", x: e ? !H && 4 : 10, verticalAlign: !e && H && "middle", y: e ? H ? 16 : 10 : H ? 6 : -4, rotation: e && !H && 90 }, v), this.renderLabel(v, z, H, I)) : h && h.hide(); return b
                }; b.prototype.renderLabel = function (b, a, e, g) {
                    var f = this.axis, l = f.chart.renderer, n = this.label; n || (this.label = n = l.text(this.getLabelText(b), 0, 0, b.useHTML).attr({
                        align: b.textAlign ||
                            b.align, rotation: b.rotation, "class": "highcharts-plot-" + (e ? "band" : "line") + "-label " + (b.className || ""), zIndex: g
                    }).add(), f.chart.styledMode || n.css(u({ textOverflow: "ellipsis" }, b.style))); g = a.xBounds || [a[0][1], a[1][1], e ? a[2][1] : a[0][1]]; a = a.yBounds || [a[0][2], a[1][2], e ? a[2][2] : a[0][2]]; e = E(g); l = E(a); n.align(b, !1, { x: e, y: l, width: y(g) - e, height: y(a) - l }); n.alignValue && "left" !== n.alignValue || n.css({ width: (90 === n.rotation ? f.height - (n.alignAttr.y - f.top) : f.width - (n.alignAttr.x - f.left)) + "px" }); n.show(!0)
                }; b.prototype.getLabelText =
                    function (b) { return B(b.formatter) ? b.formatter.call(this) : b.text }; b.prototype.destroy = function () { J(this.axis.plotLinesAndBands, this); delete this.axis; A(this) }; return b
        }(); ""; ""; return f
    }); M(f, "Core/Tooltip.js", [f["Core/FormatUtilities.js"], f["Core/Globals.js"], f["Core/Renderer/RendererUtilities.js"], f["Core/Renderer/RendererRegistry.js"], f["Core/Utilities.js"]], function (a, f, x, E, B) {
        var y = a.format, J = f.doc, t = x.distribute, u = B.clamp, p = B.css, g = B.defined, b = B.discardElement, l = B.extend, n = B.fireEvent, e = B.isArray,
        r = B.isNumber, G = B.isString, K = B.merge, I = B.pick, N = B.splat, w = B.syncTimeout; a = function () {
            function a(b, a) { this.allowShared = !0; this.container = void 0; this.crosshairs = []; this.distance = 0; this.isHidden = !0; this.isSticky = !1; this.now = {}; this.options = {}; this.outside = !1; this.chart = b; this.init(b, a) } a.prototype.applyFilter = function () {
                var b = this.chart; b.renderer.definition({
                    tagName: "filter", attributes: { id: "drop-shadow-" + b.index, opacity: .5 }, children: [{ tagName: "feGaussianBlur", attributes: { "in": "SourceAlpha", stdDeviation: 1 } },
                    { tagName: "feOffset", attributes: { dx: 1, dy: 1 } }, { tagName: "feComponentTransfer", children: [{ tagName: "feFuncA", attributes: { type: "linear", slope: .3 } }] }, { tagName: "feMerge", children: [{ tagName: "feMergeNode" }, { tagName: "feMergeNode", attributes: { "in": "SourceGraphic" } }] }]
                })
            }; a.prototype.bodyFormatter = function (b) { return b.map(function (b) { var a = b.series.tooltipOptions; return (a[(b.point.formatPrefix || "point") + "Formatter"] || b.point.tooltipFormatter).call(b.point, a[(b.point.formatPrefix || "point") + "Format"] || "") }) }; a.prototype.cleanSplit =
                function (b) { this.chart.series.forEach(function (a) { var d = a && a.tt; d && (!d.isActive || b ? a.tt = d.destroy() : d.isActive = !1) }) }; a.prototype.defaultFormatter = function (b) { var a = this.points || N(this); var d = [b.tooltipFooterHeaderFormatter(a[0])]; d = d.concat(b.bodyFormatter(a)); d.push(b.tooltipFooterHeaderFormatter(a[0], !0)); return d }; a.prototype.destroy = function () {
                    this.label && (this.label = this.label.destroy()); this.split && this.tt && (this.cleanSplit(!0), this.tt = this.tt.destroy()); this.renderer && (this.renderer = this.renderer.destroy(),
                        b(this.container)); B.clearTimeout(this.hideTimer); B.clearTimeout(this.tooltipTimeout)
                }; a.prototype.getAnchor = function (b, a) {
                    var d = this.chart, c = d.pointer, e = d.inverted, k = d.plotTop, h = d.plotLeft, m, g, f = 0, l = 0; b = N(b); this.followPointer && a ? ("undefined" === typeof a.chartX && (a = c.normalize(a)), c = [a.chartX - h, a.chartY - k]) : b[0].tooltipPos ? c = b[0].tooltipPos : (b.forEach(function (c) {
                        m = c.series.yAxis; g = c.series.xAxis; f += c.plotX || 0; l += c.plotLow ? (c.plotLow + (c.plotHigh || 0)) / 2 : c.plotY || 0; g && m && (e ? (f += k + d.plotHeight - g.len -
                            g.pos, l += h + d.plotWidth - m.len - m.pos) : (f += g.pos - h, l += m.pos - k))
                    }), f /= b.length, l /= b.length, c = [e ? d.plotWidth - l : f, e ? d.plotHeight - f : l], this.shared && 1 < b.length && a && (e ? c[0] = a.chartX - h : c[1] = a.chartY - k)); return c.map(Math.round)
                }; a.prototype.getLabel = function () {
                    var b = this, a = this.chart.styledMode, d = this.options, c = this.split && this.allowShared, e = "tooltip" + (g(d.className) ? " " + d.className : ""), k = d.style.pointerEvents || (this.shouldStickOnContact() ? "auto" : "none"), m, l = this.chart.renderer; if (b.label) {
                        var n = !b.label.hasClass("highcharts-label");
                        (c && !n || !c && n) && b.destroy()
                    } if (!this.label) {
                        if (this.outside) { n = this.chart.options.chart.style; var r = E.getRendererType(); this.container = m = f.doc.createElement("div"); m.className = "highcharts-tooltip-container"; p(m, { position: "absolute", top: "1px", pointerEvents: k, zIndex: Math.max(this.options.style.zIndex || 0, (n && n.zIndex || 0) + 3) }); f.doc.body.appendChild(m); this.renderer = l = new r(m, 0, 0, n, void 0, void 0, l.styledMode) } c ? this.label = l.g(e) : (this.label = l.label("", 0, 0, d.shape, void 0, void 0, d.useHTML, void 0, e).attr({
                            padding: d.padding,
                            r: d.borderRadius
                        }), a || this.label.attr({ fill: d.backgroundColor, "stroke-width": d.borderWidth }).css(d.style).css({ pointerEvents: k }).shadow(d.shadow)); a && d.shadow && (this.applyFilter(), this.label.attr({ filter: "url(#drop-shadow-" + this.chart.index + ")" })); if (b.outside && !b.split) { var w = this.label, t = w.xSetter, u = w.ySetter; w.xSetter = function (c) { t.call(w, b.distance); m.style.left = c + "px" }; w.ySetter = function (c) { u.call(w, b.distance); m.style.top = c + "px" } } this.label.attr({ zIndex: 8 }).add()
                    } return this.label
                }; a.prototype.getPosition =
                    function (b, a, d) {
                        var c = this.chart, e = this.distance, k = {}, h = c.inverted && d.h || 0, m = this.outside, g = m ? J.documentElement.clientWidth - 2 * e : c.chartWidth, f = m ? Math.max(J.body.scrollHeight, J.documentElement.scrollHeight, J.body.offsetHeight, J.documentElement.offsetHeight, J.documentElement.clientHeight) : c.chartHeight, l = c.pointer.getChartPosition(), v = function (k) {
                            var h = "x" === k; return [k, h ? g : f, h ? b : a].concat(m ? [h ? b * l.scaleX : a * l.scaleY, h ? l.left - e + (d.plotX + c.plotLeft) * l.scaleX : l.top - e + (d.plotY + c.plotTop) * l.scaleY, 0, h ? g :
                                f] : [h ? b : a, h ? d.plotX + c.plotLeft : d.plotY + c.plotTop, h ? c.plotLeft : c.plotTop, h ? c.plotLeft + c.plotWidth : c.plotTop + c.plotHeight])
                        }, n = v("y"), p = v("x"), r; v = !!d.negative; !c.polar && c.hoverSeries && c.hoverSeries.yAxis && c.hoverSeries.yAxis.reversed && (v = !v); var w = !this.followPointer && I(d.ttBelow, !c.inverted === v), t = function (c, b, a, d, g, q, f) {
                            var v = m ? "y" === c ? e * l.scaleY : e * l.scaleX : e, n = (a - d) / 2, z = d < g - e, F = g + e + d < b, D = g - v - a + n; g = g + v - n; if (w && F) k[c] = g; else if (!w && z) k[c] = D; else if (z) k[c] = Math.min(f - d, 0 > D - h ? D : D - h); else if (F) k[c] =
                                Math.max(q, g + h + a > b ? g : g + h); else return !1
                        }, u = function (c, b, a, d, h) { var m; h < e || h > b - e ? m = !1 : k[c] = h < a / 2 ? 1 : h > b - d / 2 ? b - d - 2 : h - a / 2; return m }, G = function (c) { var b = n; n = p; p = b; r = c }, F = function () { !1 !== t.apply(0, n) ? !1 !== u.apply(0, p) || r || (G(!0), F()) : r ? k.x = k.y = 0 : (G(!0), F()) }; (c.inverted || 1 < this.len) && G(); F(); return k
                    }; a.prototype.hide = function (b) { var a = this; B.clearTimeout(this.hideTimer); b = I(b, this.options.hideDelay); this.isHidden || (this.hideTimer = w(function () { a.getLabel().fadeOut(b ? void 0 : b); a.isHidden = !0 }, b)) }; a.prototype.init =
                        function (b, a) { this.chart = b; this.options = a; this.crosshairs = []; this.now = { x: 0, y: 0 }; this.isHidden = !0; this.split = a.split && !b.inverted && !b.polar; this.shared = a.shared || this.split; this.outside = I(a.outside, !(!b.scrollablePixelsX && !b.scrollablePixelsY)) }; a.prototype.shouldStickOnContact = function (b) { return !(this.followPointer || !this.options.stickOnContact || b && !this.chart.pointer.inClass(b.target, "highcharts-tooltip")) }; a.prototype.move = function (b, a, d, c) {
                            var e = this, k = e.now, h = !1 !== e.options.animation && !e.isHidden &&
                                (1 < Math.abs(b - k.x) || 1 < Math.abs(a - k.y)), m = e.followPointer || 1 < e.len; l(k, { x: h ? (2 * k.x + b) / 3 : b, y: h ? (k.y + a) / 2 : a, anchorX: m ? void 0 : h ? (2 * k.anchorX + d) / 3 : d, anchorY: m ? void 0 : h ? (k.anchorY + c) / 2 : c }); e.getLabel().attr(k); e.drawTracker(); h && (B.clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () { e && e.move(b, a, d, c) }, 32))
                        }; a.prototype.refresh = function (b, a) {
                            var d = this.chart, c = this.options, h = N(b), k = h[0], m = [], g = c.formatter || this.defaultFormatter, f = this.shared, l = d.styledMode, v = {}; if (c.enabled && k.series) {
                                B.clearTimeout(this.hideTimer);
                                this.allowShared = !(!e(b) && b.series && b.series.noSharedTooltip); this.followPointer = !this.split && k.series.tooltipOptions.followPointer; b = this.getAnchor(b, a); var p = b[0], r = b[1]; f && this.allowShared ? (d.pointer.applyInactiveState(h), h.forEach(function (c) { c.setState("hover"); m.push(c.getLabelConfig()) }), v = { x: k.category, y: k.y }, v.points = m) : v = k.getLabelConfig(); this.len = m.length; g = g.call(v, this); f = k.series; this.distance = I(f.tooltipOptions.distance, 16); if (!1 === g) this.hide(); else {
                                    if (this.split && this.allowShared) this.renderSplit(g,
                                        h); else {
                                            var w = p, t = r; a && d.pointer.isDirectTouch && (w = a.chartX - d.plotLeft, t = a.chartY - d.plotTop); if (d.polar || !1 === f.options.clip || h.some(function (c) { return c.series.shouldShowTooltip(w, t) })) a = this.getLabel(), c.style.width && !l || a.css({ width: this.chart.spacingBox.width + "px" }), a.attr({ text: g && g.join ? g.join("") : g }), a.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" + I(k.colorIndex, f.colorIndex)), l || a.attr({ stroke: c.borderColor || k.color || f.color || "#666666" }), this.updatePosition({
                                                plotX: p,
                                                plotY: r, negative: k.negative, ttBelow: k.ttBelow, h: b[2] || 0
                                            }); else { this.hide(); return }
                                    } this.isHidden && this.label && this.label.attr({ opacity: 1 }).show(); this.isHidden = !1
                                } n(this, "refresh")
                            }
                        }; a.prototype.renderSplit = function (b, a) {
                            function d(b, a, d, e, k) { void 0 === k && (k = !0); d ? (a = V ? 0 : A, b = u(b - e / 2, Q.left, Q.right - e - (c.outside ? X : 0))) : (a -= U, b = k ? b - e - x : b + x, b = u(b, k ? b : Q.left, Q.right)); return { x: b, y: a } } var c = this, e = c.chart, k = c.chart, h = k.chartWidth, m = k.chartHeight, g = k.plotHeight, f = k.plotLeft, v = k.plotTop, n = k.pointer, p = k.scrollablePixelsY;
                            p = void 0 === p ? 0 : p; var r = k.scrollablePixelsX, w = k.scrollingContainer; w = void 0 === w ? { scrollLeft: 0, scrollTop: 0 } : w; var y = w.scrollLeft; w = w.scrollTop; var K = k.styledMode, x = c.distance, B = c.options, F = c.options.positioner, Q = c.outside && "number" !== typeof r ? J.documentElement.getBoundingClientRect() : { left: y, right: y + h, top: w, bottom: w + m }, O = c.getLabel(), T = this.renderer || e.renderer, V = !(!e.xAxis[0] || !e.xAxis[0].opposite); e = n.getChartPosition(); var X = e.left; e = e.top; var U = v + w, aa = 0, A = g - p; G(b) && (b = [!1, b]); b = b.slice(0, a.length +
                                1).reduce(function (b, e, k) {
                                    if (!1 !== e && "" !== e) {
                                        k = a[k - 1] || { isHeader: !0, plotX: a[0].plotX, plotY: g, series: {} }; var h = k.isHeader, m = h ? c : k.series; e = e.toString(); var q = m.tt, l = k.isHeader; var n = k.series; var z = "highcharts-color-" + I(k.colorIndex, n.colorIndex, "none"); q || (q = { padding: B.padding, r: B.borderRadius }, K || (q.fill = B.backgroundColor, q["stroke-width"] = B.borderWidth), q = T.label("", 0, 0, B[l ? "headerShape" : "shape"], void 0, void 0, B.useHTML).addClass((l ? "highcharts-tooltip-header " : "") + "highcharts-tooltip-box " + z).attr(q).add(O));
                                        q.isActive = !0; q.attr({ text: e }); K || q.css(B.style).shadow(B.shadow).attr({ stroke: B.borderColor || k.color || n.color || "#333333" }); m = m.tt = q; l = m.getBBox(); e = l.width + m.strokeWidth(); h && (aa = l.height, A += aa, V && (U -= aa)); n = k.plotX; n = void 0 === n ? 0 : n; z = k.plotY; z = void 0 === z ? 0 : z; q = k.series; if (k.isHeader) { n = f + n; var D = v + g / 2 } else { var H = q.xAxis, p = q.yAxis; n = H.pos + u(n, -x, H.len + x); q.shouldShowTooltip(0, p.pos - v + z, { ignoreX: !0 }) && (D = p.pos + z) } n = u(n, Q.left - x, Q.right + x); "number" === typeof D ? (l = l.height + 1, z = F ? F.call(c, e, l, k) : d(n,
                                            D, h, e), b.push({ align: F ? 0 : void 0, anchorX: n, anchorY: D, boxWidth: e, point: k, rank: I(z.rank, h ? 1 : 0), size: l, target: z.y, tt: m, x: z.x })) : m.isActive = !1
                                    } return b
                                }, []); !F && b.some(function (b) { var a = (c.outside ? X : 0) + b.anchorX; return a < Q.left && a + b.boxWidth < Q.right ? !0 : a < X - Q.left + b.boxWidth && Q.right - a > a }) && (b = b.map(function (c) { var b = d(c.anchorX, c.anchorY, c.point.isHeader, c.boxWidth, !1); return l(c, { target: b.y, x: b.x }) })); c.cleanSplit(); t(b, A); var N = X, E = X; b.forEach(function (b) {
                                    var a = b.x, d = b.boxWidth; b = b.isHeader; b || (c.outside &&
                                        X + a < N && (N = X + a), !b && c.outside && N + d > E && (E = X + a))
                                }); b.forEach(function (b) { var a = b.x, d = b.anchorX, e = b.pos, k = b.point.isHeader; e = { visibility: "undefined" === typeof e ? "hidden" : "inherit", x: a, y: e + U, anchorX: d, anchorY: b.anchorY }; if (c.outside && a < d) { var h = X - N; 0 < h && (k || (e.x = a + h, e.anchorX = d + h), k && (e.x = (E - N) / 2, e.anchorX = d + h)) } b.tt.attr(e) }); b = c.container; p = c.renderer; c.outside && b && p && (k = O.getBBox(), p.setSize(k.width + k.x, k.height + k.y, !1), b.style.left = N + "px", b.style.top = e + "px")
                        }; a.prototype.drawTracker = function () {
                            if (this.shouldStickOnContact()) {
                                var b =
                                    this.chart, a = this.label, d = this.shared ? b.hoverPoints : b.hoverPoint; if (a && d) {
                                        var c = { x: 0, y: 0, width: 0, height: 0 }; d = this.getAnchor(d); var e = a.getBBox(); d[0] += b.plotLeft - a.translateX; d[1] += b.plotTop - a.translateY; c.x = Math.min(0, d[0]); c.y = Math.min(0, d[1]); c.width = 0 > d[0] ? Math.max(Math.abs(d[0]), e.width - d[0]) : Math.max(Math.abs(d[0]), e.width); c.height = 0 > d[1] ? Math.max(Math.abs(d[1]), e.height - Math.abs(d[1])) : Math.max(Math.abs(d[1]), e.height); this.tracker ? this.tracker.attr(c) : (this.tracker = a.renderer.rect(c).addClass("highcharts-tracker").add(a),
                                            b.styledMode || this.tracker.attr({ fill: "rgba(0,0,0,0)" }))
                                    }
                            } else this.tracker && this.tracker.destroy()
                        }; a.prototype.styledModeFormat = function (b) { return b.replace('style="font-size: 10px"', 'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex}"') }; a.prototype.tooltipFooterHeaderFormatter = function (b, a) {
                            var d = b.series, c = d.tooltipOptions, e = d.xAxis, k = e && e.dateTime; e = { isFooter: a, labelConfig: b }; var h = c.xDateFormat, m = c[a ? "footerFormat" : "headerFormat"];
                            n(this, "headerFormatter", e, function (a) { k && !h && r(b.key) && (h = k.getXDateFormat(b.key, c.dateTimeLabelFormats)); k && h && (b.point && b.point.tooltipDateKeys || ["key"]).forEach(function (c) { m = m.replace("{point." + c + "}", "{point." + c + ":" + h + "}") }); d.chart.styledMode && (m = this.styledModeFormat(m)); a.text = y(m, { point: b, series: d }, this.chart) }); return e.text
                        }; a.prototype.update = function (b) { this.destroy(); K(!0, this.chart.options.tooltip.userOptions, b); this.init(this.chart, K(!0, this.options, b)) }; a.prototype.updatePosition =
                            function (b) {
                                var a = this.chart, d = this.options, c = a.pointer, e = this.getLabel(); c = c.getChartPosition(); var k = (d.positioner || this.getPosition).call(this, e.width, e.height, b), m = b.plotX + a.plotLeft; b = b.plotY + a.plotTop; if (this.outside) { d = d.borderWidth + 2 * this.distance; this.renderer.setSize(e.width + d, e.height + d, !1); if (1 !== c.scaleX || 1 !== c.scaleY) p(this.container, { transform: "scale(".concat(c.scaleX, ", ").concat(c.scaleY, ")") }), m *= c.scaleX, b *= c.scaleY; m += c.left - k.x; b += c.top - k.y } this.move(Math.round(k.x), Math.round(k.y ||
                                    0), m, b)
                            }; return a
        }(); ""; return a
    }); M(f, "Core/Series/Point.js", [f["Core/Renderer/HTML/AST.js"], f["Core/Animation/AnimationUtilities.js"], f["Core/Defaults.js"], f["Core/FormatUtilities.js"], f["Core/Utilities.js"]], function (a, f, x, E, B) {
        var y = f.animObject, J = x.defaultOptions, t = E.format, u = B.addEvent, p = B.defined, g = B.erase, b = B.extend, l = B.fireEvent, n = B.getNestedProperty, e = B.isArray, r = B.isFunction, G = B.isNumber, K = B.isObject, I = B.merge, N = B.objectEach, w = B.pick, m = B.syncTimeout, v = B.removeEvent, h = B.uniqueKey; f = function () {
            function d() {
                this.colorIndex =
                this.category = void 0; this.formatPrefix = "point"; this.id = void 0; this.isNull = !1; this.percentage = this.options = this.name = void 0; this.selected = !1; this.total = this.shapeArgs = this.series = void 0; this.visible = !0; this.x = void 0
            } d.prototype.animateBeforeDestroy = function () {
                var c = this, a = { x: c.startXPos, opacity: 0 }, d = c.getGraphicalProps(); d.singular.forEach(function (b) { c[b] = c[b].animate("dataLabel" === b ? { x: c[b].startXPos, y: c[b].startYPos, opacity: 0 } : a) }); d.plural.forEach(function (a) {
                    c[a].forEach(function (a) {
                        a.element &&
                        a.animate(b({ x: c.startXPos }, a.startYPos ? { x: a.startXPos, y: a.startYPos } : {}))
                    })
                })
            }; d.prototype.applyOptions = function (c, a) {
                var e = this.series, h = e.options.pointValKey || e.pointValKey; c = d.prototype.optionsToObject.call(this, c); b(this, c); this.options = this.options ? b(this.options, c) : c; c.group && delete this.group; c.dataLabels && delete this.dataLabels; h && (this.y = d.prototype.getNestedProperty.call(this, h)); this.formatPrefix = (this.isNull = this.isValid && !this.isValid()) ? "null" : "point"; this.selected && (this.state = "select");
                "name" in this && "undefined" === typeof a && e.xAxis && e.xAxis.hasNames && (this.x = e.xAxis.nameToX(this)); "undefined" === typeof this.x && e ? this.x = "undefined" === typeof a ? e.autoIncrement() : a : G(c.x) && e.options.relativeXValue && (this.x = e.autoIncrement(c.x)); return this
            }; d.prototype.destroy = function () {
                function c() { if (b.graphic || b.graphics || b.dataLabel || b.dataLabels) v(b), b.destroyElements(); for (f in b) b[f] = null } var b = this, a = b.series, d = a.chart; a = a.options.dataSorting; var e = d.hoverPoints, h = y(b.series.chart.renderer.globalAnimation),
                    f; b.legendItem && d.legend.destroyItem(b); e && (b.setState(), g(e, b), e.length || (d.hoverPoints = null)); if (b === d.hoverPoint) b.onMouseOut(); a && a.enabled ? (this.animateBeforeDestroy(), m(c, h.duration)) : c(); d.pointCount--
            }; d.prototype.destroyElements = function (c) { var b = this; c = b.getGraphicalProps(c); c.singular.forEach(function (c) { b[c] = b[c].destroy() }); c.plural.forEach(function (c) { b[c].forEach(function (c) { c.element && c.destroy() }); delete b[c] }) }; d.prototype.firePointEvent = function (c, b, a) {
                var d = this, e = this.series.options;
                (e.point.events[c] || d.options && d.options.events && d.options.events[c]) && d.importEvents(); "click" === c && e.allowPointSelect && (a = function (c) { d.select && d.select(null, c.ctrlKey || c.metaKey || c.shiftKey) }); l(d, c, b, a)
            }; d.prototype.getClassName = function () {
                return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + ("undefined" !== typeof this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ?
                    " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "")
            }; d.prototype.getGraphicalProps = function (c) {
                var b = this, a = [], d = { singular: [], plural: [] }, e; c = c || { graphic: 1, dataLabel: 1 }; c.graphic && a.push("graphic", "shadowGroup"); c.dataLabel && a.push("dataLabel", "dataLabelPath", "dataLabelUpper", "connector"); for (e = a.length; e--;) { var h = a[e]; b[h] && d.singular.push(h) } ["graphic", "dataLabel", "connector"].forEach(function (a) { var e = a + "s"; c[a] && b[e] && d.plural.push(e) });
                return d
            }; d.prototype.getLabelConfig = function () { return { x: this.category, y: this.y, color: this.color, colorIndex: this.colorIndex, key: this.name || this.category, series: this.series, point: this, percentage: this.percentage, total: this.total || this.stackTotal } }; d.prototype.getNestedProperty = function (c) { if (c) return 0 === c.indexOf("custom.") ? n(c, this.options) : this[c] }; d.prototype.getZone = function () {
                var c = this.series, b = c.zones; c = c.zoneAxis || "y"; var a, d = 0; for (a = b[d]; this[c] >= a.value;)a = b[++d]; this.nonZonedColor || (this.nonZonedColor =
                    this.color); this.color = a && a.color && !this.options.color ? a.color : this.nonZonedColor; return a
            }; d.prototype.hasNewShapeType = function () { return (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !== this.shapeType }; d.prototype.init = function (c, b, a) { this.series = c; this.applyOptions(b, a); this.id = p(this.id) ? this.id : h(); this.resolveColor(); c.chart.pointCount++; l(this, "afterInit"); return this }; d.prototype.isValid = function () { return null !== this.x && G(this.y) }; d.prototype.optionsToObject = function (c) {
                var b =
                    this.series, a = b.options.keys, h = a || b.pointArrayMap || ["y"], m = h.length, g = {}, f = 0, l = 0; if (G(c) || null === c) g[h[0]] = c; else if (e(c)) for (!a && c.length > m && (b = typeof c[0], "string" === b ? g.name = c[0] : "number" === b && (g.x = c[0]), f++); l < m;)a && "undefined" === typeof c[f] || (0 < h[l].indexOf(".") ? d.prototype.setNestedProperty(g, c[f], h[l]) : g[h[l]] = c[f]), f++, l++; else "object" === typeof c && (g = c, c.dataLabels && (b._hasPointLabels = !0), c.marker && (b._hasPointMarkers = !0)); return g
            }; d.prototype.resolveColor = function () {
                var c = this.series, b =
                    c.chart.styledMode; var a = c.chart.options.chart.colorCount; delete this.nonZonedColor; if (c.options.colorByPoint) { if (!b) { a = c.options.colors || c.chart.options.colors; var d = a[c.colorCounter]; a = a.length } b = c.colorCounter; c.colorCounter++; c.colorCounter === a && (c.colorCounter = 0) } else b || (d = c.color), b = c.colorIndex; this.colorIndex = w(this.options.colorIndex, b); this.color = w(this.options.color, d)
            }; d.prototype.setNestedProperty = function (c, b, a) {
                a.split(".").reduce(function (c, a, d, e) {
                    c[a] = e.length - 1 === d ? b : K(c[a], !0) ?
                        c[a] : {}; return c[a]
                }, c); return c
            }; d.prototype.shouldDraw = function () { return !this.isNull }; d.prototype.tooltipFormatter = function (c) { var b = this.series, a = b.tooltipOptions, d = w(a.valueDecimals, ""), e = a.valuePrefix || "", h = a.valueSuffix || ""; b.chart.styledMode && (c = b.chart.tooltip.styledModeFormat(c)); (b.pointArrayMap || ["y"]).forEach(function (b) { b = "{point." + b; if (e || h) c = c.replace(RegExp(b + "}", "g"), e + b + "}" + h); c = c.replace(RegExp(b + "}", "g"), b + ":,." + d + "f}") }); return t(c, { point: this, series: this.series }, b.chart) }; d.prototype.update =
                function (c, b, a, d) {
                    function e() {
                        h.applyOptions(c); var d = m && h.hasMockGraphic; d = null === h.y ? !d : d; m && d && (h.graphic = m.destroy(), delete h.hasMockGraphic); K(c, !0) && (m && m.element && c && c.marker && "undefined" !== typeof c.marker.symbol && (h.graphic = m.destroy()), c && c.dataLabels && h.dataLabel && (h.dataLabel = h.dataLabel.destroy()), h.connector && (h.connector = h.connector.destroy())); q = h.index; k.updateParallelArrays(h, q); f.data[q] = K(f.data[q], !0) || K(c, !0) ? h.options : w(c, f.data[q]); k.isDirty = k.isDirtyData = !0; !k.fixedBox && k.hasCartesianSeries &&
                            (g.isDirtyBox = !0); "point" === f.legendType && (g.isDirtyLegend = !0); b && g.redraw(a)
                    } var h = this, k = h.series, m = h.graphic, g = k.chart, f = k.options, q; b = w(b, !0); !1 === d ? e() : h.firePointEvent("update", { options: c }, e)
                }; d.prototype.remove = function (c, b) { this.series.removePoint(this.series.data.indexOf(this), c, b) }; d.prototype.select = function (c, b) {
                    var a = this, d = a.series, e = d.chart; this.selectedStaging = c = w(c, !a.selected); a.firePointEvent(c ? "select" : "unselect", { accumulate: b }, function () {
                        a.selected = a.options.selected = c; d.options.data[d.data.indexOf(a)] =
                            a.options; a.setState(c && "select"); b || e.getSelectedPoints().forEach(function (c) { var b = c.series; c.selected && c !== a && (c.selected = c.options.selected = !1, b.options.data[b.data.indexOf(c)] = c.options, c.setState(e.hoverPoints && b.options.inactiveOtherPoints ? "inactive" : ""), c.firePointEvent("unselect")) })
                    }); delete this.selectedStaging
                }; d.prototype.onMouseOver = function (c) { var b = this.series.chart, a = b.pointer; c = c ? a.normalize(c) : a.getChartCoordinatesFromPoint(this, b.inverted); a.runPointActions(c, this) }; d.prototype.onMouseOut =
                    function () { var c = this.series.chart; this.firePointEvent("mouseOut"); this.series.options.inactiveOtherPoints || (c.hoverPoints || []).forEach(function (c) { c.setState() }); c.hoverPoints = c.hoverPoint = null }; d.prototype.importEvents = function () { if (!this.hasImportedEvents) { var c = this, b = I(c.series.options.point, c.options).events; c.events = b; N(b, function (b, a) { r(b) && u(c, a, b) }); this.hasImportedEvents = !0 } }; d.prototype.setState = function (c, d) {
                        var e = this.series, h = this.state, m = e.options.states[c || "normal"] || {}, g = J.plotOptions[e.type].marker &&
                            e.options.marker, f = g && !1 === g.enabled, q = g && g.states && g.states[c || "normal"] || {}, n = !1 === q.enabled, v = this.marker || {}, p = e.chart, r = g && e.markerAttribs, t = e.halo, u, y = e.stateMarkerGraphic; c = c || ""; if (!(c === this.state && !d || this.selected && "select" !== c || !1 === m.enabled || c && (n || f && !1 === q.enabled) || c && v.states && v.states[c] && !1 === v.states[c].enabled)) {
                                this.state = c; r && (u = e.markerAttribs(this, c)); if (this.graphic && !this.hasMockGraphic) {
                                    h && this.graphic.removeClass("highcharts-point-" + h); c && this.graphic.addClass("highcharts-point-" +
                                        c); if (!p.styledMode) { h = e.pointAttribs(this, c); var I = w(p.options.chart.animation, m.animation); var F = h.opacity; G(F) && ((this.dataLabels || []).forEach(function (c) { c && !c.hasClass("highcharts-data-label-hidden") && c.animate({ opacity: F }, I) }), this.connector && this.connector.animate({ opacity: F }, I)); this.graphic.animate(h, I) } u && this.graphic.animate(u, w(p.options.chart.animation, q.animation, g.animation)); y && y.hide()
                                } else {
                                    if (c && q) {
                                        g = v.symbol || e.symbol; y && y.currentSymbol !== g && (y = y.destroy()); if (u) if (y) y[d ? "animate" :
                                            "attr"]({ x: u.x, y: u.y }); else g && (e.stateMarkerGraphic = y = p.renderer.symbol(g, u.x, u.y, u.width, u.height).add(e.markerGroup), y.currentSymbol = g); !p.styledMode && y && "inactive" !== this.state && y.attr(e.pointAttribs(this, c))
                                    } y && (y[c && this.isInside ? "show" : "hide"](), y.element.point = this, y.addClass(this.getClassName(), !0))
                                } m = m.halo; u = (y = this.graphic || y) && y.visibility || "inherit"; m && m.size && y && "hidden" !== u && !this.isCluster ? (t || (e.halo = t = p.renderer.path().add(y.parentGroup)), t.show()[d ? "animate" : "attr"]({ d: this.haloPath(m.size) }),
                                    t.attr({ "class": "highcharts-halo highcharts-color-" + w(this.colorIndex, e.colorIndex) + (this.className ? " " + this.className : ""), visibility: u, zIndex: -1 }), t.point = this, p.styledMode || t.attr(b({ fill: this.color || e.color, "fill-opacity": m.opacity }, a.filterUserAttributes(m.attributes || {})))) : t && t.point && t.point.haloPath && t.animate({ d: t.point.haloPath(0) }, null, t.hide); l(this, "afterSetState", { state: c })
                            }
                    }; d.prototype.haloPath = function (c) {
                        return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - c, this.plotY -
                            c, 2 * c, 2 * c)
                    }; return d
        }(); ""; return f
    }); M(f, "Core/Pointer.js", [f["Core/Color/Color.js"], f["Core/Globals.js"], f["Core/Tooltip.js"], f["Core/Utilities.js"]], function (a, f, x, E) {
        var y = a.parse, A = f.charts, J = f.noop, t = E.addEvent, u = E.attr, p = E.css, g = E.defined, b = E.extend, l = E.find, n = E.fireEvent, e = E.isNumber, r = E.isObject, G = E.objectEach, K = E.offset, I = E.pick, N = E.splat; a = function () {
            function a(b, a) {
                this.lastValidTouch = {}; this.pinchDown = []; this.runChartClick = !1; this.eventsToUnbind = []; this.chart = b; this.hasDragged = !1; this.options =
                    a; this.init(b, a)
            } a.prototype.applyInactiveState = function (b) { var a = [], e; (b || []).forEach(function (b) { e = b.series; a.push(e); e.linkedParent && a.push(e.linkedParent); e.linkedSeries && (a = a.concat(e.linkedSeries)); e.navigatorSeries && a.push(e.navigatorSeries) }); this.chart.series.forEach(function (b) { -1 === a.indexOf(b) ? b.setState("inactive", !0) : b.options.inactiveOtherPoints && b.setAllPointsToState("inactive") }) }; a.prototype.destroy = function () {
                var b = this; this.eventsToUnbind.forEach(function (b) { return b() }); this.eventsToUnbind =
                    []; f.chartCount || (a.unbindDocumentMouseUp && (a.unbindDocumentMouseUp = a.unbindDocumentMouseUp()), a.unbindDocumentTouchEnd && (a.unbindDocumentTouchEnd = a.unbindDocumentTouchEnd())); clearInterval(b.tooltipTimeout); G(b, function (a, e) { b[e] = void 0 })
            }; a.prototype.getSelectionMarkerAttrs = function (b, a) {
                var e = this, d = { args: { chartX: b, chartY: a }, attrs: {}, shapeType: "rect" }; n(this, "getSelectionMarkerAttrs", d, function (c) {
                    var d = e.chart, h = e.mouseDownX; h = void 0 === h ? 0 : h; var m = e.mouseDownY; m = void 0 === m ? 0 : m; var g = e.zoomHor,
                        f = e.zoomVert; c = c.attrs; c.x = d.plotLeft; c.y = d.plotTop; c.width = g ? 1 : d.plotWidth; c.height = f ? 1 : d.plotHeight; g && (d = b - h, c.width = Math.abs(d), c.x = (0 < d ? 0 : d) + h); f && (d = a - m, c.height = Math.abs(d), c.y = (0 < d ? 0 : d) + m)
                }); return d
            }; a.prototype.drag = function (b) {
                var a = this.chart, e = a.options.chart, d = a.plotLeft, c = a.plotTop, m = a.plotWidth, g = a.plotHeight, f = this.mouseDownX || 0, l = this.mouseDownY || 0, n = r(e.panning) ? e.panning && e.panning.enabled : e.panning, p = e.panKey && b[e.panKey + "Key"], w = b.chartX, t = b.chartY, u = this.selectionMarker; u &&
                    u.touch || (w < d ? w = d : w > d + m && (w = d + m), t < c ? t = c : t > c + g && (t = c + g), this.hasDragged = Math.sqrt(Math.pow(f - w, 2) + Math.pow(l - t, 2)), 10 < this.hasDragged && (d = a.isInsidePlot(f - d, l - c, { visiblePlotOnly: !0 }), t = this.getSelectionMarkerAttrs(w, t), w = t.shapeType, t = t.attrs, !a.hasCartesianSeries && !a.mapView || !this.zoomX && !this.zoomY || !d || p || u || (this.selectionMarker = u = a.renderer[w](), u.attr({ "class": "highcharts-selection-marker", zIndex: 7 }).add(), a.styledMode || u.attr({ fill: e.selectionMarkerFill || y("#335cad").setOpacity(.25).get() })),
                        u && u.attr(t), d && !u && n && a.pan(b, e.panning)))
            }; a.prototype.dragStart = function (b) { var a = this.chart; a.mouseIsDown = b.type; a.cancelClick = !1; a.mouseDownX = this.mouseDownX = b.chartX; a.mouseDownY = this.mouseDownY = b.chartY }; a.prototype.getSelectionBox = function (b) { var a = { args: { marker: b }, result: {} }; n(this, "getSelectionBox", a, function (a) { a.result = { x: b.attr ? +b.attr("x") : b.x, y: b.attr ? +b.attr("y") : b.y, width: b.attr ? b.attr("width") : b.width, height: b.attr ? b.attr("height") : b.height } }); return a.result }; a.prototype.drop = function (a) {
                var m =
                    this, h = this.chart, d = this.hasPinched; if (this.selectionMarker) {
                        var c = this.getSelectionBox(this.selectionMarker), f = c.x, k = c.y, l = c.width, r = c.height, D = { originalEvent: a, xAxis: [], yAxis: [], x: f, y: k, width: l, height: r }, w = !!h.mapView; if (this.hasDragged || d) h.axes.forEach(function (c) {
                            if (c.zoomEnabled && g(c.min) && (d || m[{ xAxis: "zoomX", yAxis: "zoomY" }[c.coll]]) && e(f) && e(k) && e(l) && e(r)) {
                                var b = c.horiz, h = "touchend" === a.type ? c.minPixelPadding : 0, q = c.toValue((b ? f : k) + h); b = c.toValue((b ? f + l : k + r) - h); D[c.coll].push({
                                    axis: c, min: Math.min(q,
                                        b), max: Math.max(q, b)
                                }); w = !0
                            }
                        }), w && n(h, "selection", D, function (c) { h.zoom(b(c, d ? { animation: !1 } : null)) }); e(h.index) && (this.selectionMarker = this.selectionMarker.destroy()); d && this.scaleGroups()
                    } h && e(h.index) && (p(h.container, { cursor: h._cursor }), h.cancelClick = 10 < this.hasDragged, h.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [])
            }; a.prototype.findNearestKDPoint = function (b, a, e) {
                var d; b.forEach(function (c) {
                    var b = !(c.noSharedTooltip && a) && 0 > c.options.findNearestPointBy.indexOf("y"); c = c.searchPoint(e,
                        b); if ((b = r(c, !0) && c.series) && !(b = !r(d, !0))) { b = d.distX - c.distX; var h = d.dist - c.dist, g = (c.series.group && c.series.group.zIndex) - (d.series.group && d.series.group.zIndex); b = 0 < (0 !== b && a ? b : 0 !== h ? h : 0 !== g ? g : d.series.index > c.series.index ? -1 : 1) } b && (d = c)
                }); return d
            }; a.prototype.getChartCoordinatesFromPoint = function (b, a) {
                var h = b.series, d = h.xAxis; h = h.yAxis; var c = b.shapeArgs; if (d && h) {
                    var g = I(b.clientX, b.plotX), k = b.plotY || 0; b.isNode && c && e(c.x) && e(c.y) && (g = c.x, k = c.y); return a ? {
                        chartX: h.len + h.pos - k, chartY: d.len + d.pos -
                            g
                    } : { chartX: g + d.pos, chartY: k + h.pos }
                } if (c && c.x && c.y) return { chartX: c.x, chartY: c.y }
            }; a.prototype.getChartPosition = function () { if (this.chartPosition) return this.chartPosition; var b = this.chart.container, a = K(b); this.chartPosition = { left: a.left, top: a.top, scaleX: 1, scaleY: 1 }; var e = b.offsetWidth; b = b.offsetHeight; 2 < e && 2 < b && (this.chartPosition.scaleX = a.width / e, this.chartPosition.scaleY = a.height / b); return this.chartPosition }; a.prototype.getCoordinates = function (b) {
                var a = { xAxis: [], yAxis: [] }; this.chart.axes.forEach(function (e) {
                    a[e.isXAxis ?
                        "xAxis" : "yAxis"].push({ axis: e, value: e.toValue(b[e.horiz ? "chartX" : "chartY"]) })
                }); return a
            }; a.prototype.getHoverData = function (b, a, e, d, c, g) {
                var h = []; d = !(!d || !b); var m = function (b) { return b.visible && !(!c && b.directTouch) && I(b.options.enableMouseTracking, !0) }, f = { chartX: g ? g.chartX : void 0, chartY: g ? g.chartY : void 0, shared: c }; n(this, "beforeGetHoverData", f); var q = a && !a.stickyTracking ? [a] : e.filter(function (c) { return c.stickyTracking && (f.filter || m)(c) }); var v = d || !g ? b : this.findNearestKDPoint(q, c, g); a = v && v.series;
                v && (c && !a.noSharedTooltip ? (q = e.filter(function (c) { return f.filter ? f.filter(c) : m(c) && !c.noSharedTooltip }), q.forEach(function (c) { var b = l(c.points, function (c) { return c.x === v.x && !c.isNull }); r(b) && (c.boosted && c.boost && (b = c.boost.getPoint(b)), h.push(b)) })) : h.push(v)); f = { hoverPoint: v }; n(this, "afterGetHoverData", f); return { hoverPoint: f.hoverPoint, hoverSeries: a, hoverPoints: h }
            }; a.prototype.getPointFromEvent = function (b) { b = b.target; for (var a; b && !a;)a = b.point, b = b.parentNode; return a }; a.prototype.onTrackerMouseOut =
                function (b) { b = b.relatedTarget || b.toElement; var a = this.chart.hoverSeries; this.isDirectTouch = !1; if (!(!a || !b || a.stickyTracking || this.inClass(b, "highcharts-tooltip") || this.inClass(b, "highcharts-series-" + a.index) && this.inClass(b, "highcharts-tracker"))) a.onMouseOut() }; a.prototype.inClass = function (b, a) { for (var e; b;) { if (e = u(b, "class")) { if (-1 !== e.indexOf(a)) return !0; if (-1 !== e.indexOf("highcharts-container")) return !1 } b = b.parentElement } }; a.prototype.init = function (b, a) {
                    this.options = a; this.chart = b; this.runChartClick =
                        !(!a.chart.events || !a.chart.events.click); this.pinchDown = []; this.lastValidTouch = {}; x && (b.tooltip = new x(b, a.tooltip)); this.setDOMEvents()
                }; a.prototype.normalize = function (a, e) { var h = a.touches, d = h ? h.length ? h.item(0) : I(h.changedTouches, a.changedTouches)[0] : a; e || (e = this.getChartPosition()); h = d.pageX - e.left; d = d.pageY - e.top; h /= e.scaleX; d /= e.scaleY; return b(a, { chartX: Math.round(h), chartY: Math.round(d) }) }; a.prototype.onContainerClick = function (a) {
                    var e = this.chart, h = e.hoverPoint; a = this.normalize(a); var d = e.plotLeft,
                        c = e.plotTop; e.cancelClick || (h && this.inClass(a.target, "highcharts-tracker") ? (n(h.series, "click", b(a, { point: h })), e.hoverPoint && h.firePointEvent("click", a)) : (b(a, this.getCoordinates(a)), e.isInsidePlot(a.chartX - d, a.chartY - c, { visiblePlotOnly: !0 }) && n(e, "click", a)))
                }; a.prototype.onContainerMouseDown = function (b) {
                    var a = 1 === ((b.buttons || b.button) & 1); b = this.normalize(b); if (f.isFirefox && 0 !== b.button) this.onContainerMouseMove(b); if ("undefined" === typeof b.button || a) this.zoomOption(b), a && b.preventDefault && b.preventDefault(),
                        this.dragStart(b)
                }; a.prototype.onContainerMouseLeave = function (b) { var e = A[I(a.hoverChartIndex, -1)], h = this.chart.tooltip; b = this.normalize(b); e && (b.relatedTarget || b.toElement) && (e.pointer.reset(), e.pointer.chartPosition = void 0); h && !h.isHidden && this.reset() }; a.prototype.onContainerMouseEnter = function (b) { delete this.chartPosition }; a.prototype.onContainerMouseMove = function (b) {
                    var a = this.chart, e = a.tooltip; b = this.normalize(b); this.setHoverChartIndex(); b.preventDefault || (b.returnValue = !1); ("mousedown" === a.mouseIsDown ||
                        this.touchSelect(b)) && this.drag(b); a.openMenu || !this.inClass(b.target, "highcharts-tracker") && !a.isInsidePlot(b.chartX - a.plotLeft, b.chartY - a.plotTop, { visiblePlotOnly: !0 }) || e && e.shouldStickOnContact(b) || (this.inClass(b.target, "highcharts-no-tooltip") ? this.reset(!1, 0) : this.runPointActions(b))
                }; a.prototype.onDocumentTouchEnd = function (b) { var e = A[I(a.hoverChartIndex, -1)]; e && e.pointer.drop(b) }; a.prototype.onContainerTouchMove = function (b) { if (this.touchSelect(b)) this.onContainerMouseMove(b); else this.touch(b) };
            a.prototype.onContainerTouchStart = function (b) { if (this.touchSelect(b)) this.onContainerMouseDown(b); else this.zoomOption(b), this.touch(b, !0) }; a.prototype.onDocumentMouseMove = function (b) { var a = this.chart, e = a.tooltip, d = this.chartPosition; b = this.normalize(b, d); !d || a.isInsidePlot(b.chartX - a.plotLeft, b.chartY - a.plotTop, { visiblePlotOnly: !0 }) || e && e.shouldStickOnContact(b) || this.inClass(b.target, "highcharts-tracker") || this.reset() }; a.prototype.onDocumentMouseUp = function (b) {
                var e = A[I(a.hoverChartIndex, -1)];
                e && e.pointer.drop(b)
            }; a.prototype.pinch = function (a) {
                var e = this, h = e.chart, d = e.pinchDown, c = a.touches || [], g = c.length, k = e.lastValidTouch, f = e.hasZoom, m = {}, l = 1 === g && (e.inClass(a.target, "highcharts-tracker") && h.runTrackerClick || e.runChartClick), p = {}, r = e.chart.tooltip; r = 1 === g && I(r && r.options.followTouchMove, !0); var w = e.selectionMarker; 1 < g ? e.initiated = !0 : r && (e.initiated = !1); f && e.initiated && !l && !1 !== a.cancelable && a.preventDefault();[].map.call(c, function (c) { return e.normalize(c) }); "touchstart" === a.type ? ([].forEach.call(c,
                    function (c, b) { d[b] = { chartX: c.chartX, chartY: c.chartY } }), k.x = [d[0].chartX, d[1] && d[1].chartX], k.y = [d[0].chartY, d[1] && d[1].chartY], h.axes.forEach(function (c) { if (c.zoomEnabled) { var b = h.bounds[c.horiz ? "h" : "v"], a = c.minPixelPadding, d = c.toPixels(Math.min(I(c.options.min, c.dataMin), c.dataMin)), e = c.toPixels(Math.max(I(c.options.max, c.dataMax), c.dataMax)), g = Math.max(d, e); b.min = Math.min(c.pos, Math.min(d, e) - a); b.max = Math.max(c.pos + c.len, g + a) } }), e.res = !0) : r ? this.runPointActions(e.normalize(a)) : d.length && (n(h, "touchpan",
                        { originalEvent: a }, function () { w || (e.selectionMarker = w = b({ destroy: J, touch: !0 }, h.plotBox)); e.pinchTranslate(d, c, m, w, p, k); e.hasPinched = f; e.scaleGroups(m, p) }), e.res && (e.res = !1, this.reset(!1, 0)))
            }; a.prototype.pinchTranslate = function (b, a, e, d, c, g) { this.zoomHor && this.pinchTranslateDirection(!0, b, a, e, d, c, g); this.zoomVert && this.pinchTranslateDirection(!1, b, a, e, d, c, g) }; a.prototype.pinchTranslateDirection = function (b, a, e, d, c, g, k, f) {
                var h = this.chart, m = b ? "x" : "y", l = b ? "X" : "Y", q = "chart" + l, n = b ? "width" : "height", p = h["plot" +
                    (b ? "Left" : "Top")], z = h.inverted, r = h.bounds[b ? "h" : "v"], v = 1 === a.length, w = a[0][q], t = !v && a[1][q]; a = function () { "number" === typeof T && 20 < Math.abs(w - t) && (Q = f || Math.abs(O - T) / Math.abs(w - t)); F = (p - O) / Q + w; u = h["plot" + (b ? "Width" : "Height")] / Q }; var u, F, Q = f || 1, O = e[0][q], T = !v && e[1][q]; a(); e = F; if (e < r.min) { e = r.min; var V = !0 } else e + u > r.max && (e = r.max - u, V = !0); V ? (O -= .8 * (O - k[m][0]), "number" === typeof T && (T -= .8 * (T - k[m][1])), a()) : k[m] = [O, T]; z || (g[m] = F - p, g[n] = u); g = z ? 1 / Q : Q; c[n] = u; c[m] = e; d[z ? b ? "scaleY" : "scaleX" : "scale" + l] = Q; d["translate" +
                        l] = g * p + (O - g * w)
            }; a.prototype.reset = function (b, a) {
                var e = this.chart, d = e.hoverSeries, c = e.hoverPoint, g = e.hoverPoints, k = e.tooltip, f = k && k.shared ? g : c; b && f && N(f).forEach(function (c) { c.series.isCartesian && "undefined" === typeof c.plotX && (b = !1) }); if (b) k && f && N(f).length && (k.refresh(f), k.shared && g ? g.forEach(function (c) { c.setState(c.state, !0); c.series.isCartesian && (c.series.xAxis.crosshair && c.series.xAxis.drawCrosshair(null, c), c.series.yAxis.crosshair && c.series.yAxis.drawCrosshair(null, c)) }) : c && (c.setState(c.state,
                    !0), e.axes.forEach(function (b) { b.crosshair && c.series[b.coll] === b && b.drawCrosshair(null, c) }))); else { if (c) c.onMouseOut(); g && g.forEach(function (c) { c.setState() }); if (d) d.onMouseOut(); k && k.hide(a); this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()); e.axes.forEach(function (c) { c.hideCrosshair() }); this.hoverX = e.hoverPoints = e.hoverPoint = null }
            }; a.prototype.runPointActions = function (b, e) {
                var g = this.chart, d = g.tooltip && g.tooltip.options.enabled ? g.tooltip : void 0, c = d ? d.shared : !1, f = e || g.hoverPoint, k =
                    f && f.series || g.hoverSeries; e = this.getHoverData(f, k, g.series, (!b || "touchmove" !== b.type) && (!!e || k && k.directTouch && this.isDirectTouch), c, b); f = e.hoverPoint; k = e.hoverSeries; var m = e.hoverPoints; e = k && k.tooltipOptions.followPointer && !k.tooltipOptions.split; var n = c && k && !k.noSharedTooltip; if (f && (f !== g.hoverPoint || d && d.isHidden)) {
                        (g.hoverPoints || []).forEach(function (c) { -1 === m.indexOf(c) && c.setState() }); if (g.hoverSeries !== k) k.onMouseOver(); this.applyInactiveState(m); (m || []).forEach(function (c) { c.setState("hover") });
                        g.hoverPoint && g.hoverPoint.firePointEvent("mouseOut"); if (!f.series) return; g.hoverPoints = m; g.hoverPoint = f; f.firePointEvent("mouseOver", void 0, function () { d && f && d.refresh(n ? m : f, b) })
                    } else e && d && !d.isHidden && (c = d.getAnchor([{}], b), g.isInsidePlot(c[0], c[1], { visiblePlotOnly: !0 }) && d.updatePosition({ plotX: c[0], plotY: c[1] })); this.unDocMouseMove || (this.unDocMouseMove = t(g.container.ownerDocument, "mousemove", function (c) { var b = A[a.hoverChartIndex]; if (b) b.pointer.onDocumentMouseMove(c) }), this.eventsToUnbind.push(this.unDocMouseMove));
                g.axes.forEach(function (c) { var a = I((c.crosshair || {}).snap, !0), d; a && ((d = g.hoverPoint) && d.series[c.coll] === c || (d = l(m, function (b) { return b.series && b.series[c.coll] === c }))); d || !a ? c.drawCrosshair(b, d) : c.hideCrosshair() })
            }; a.prototype.scaleGroups = function (b, a) {
                var e = this.chart; e.series.forEach(function (d) { var c = b || d.getPlotBox(); d.group && (d.xAxis && d.xAxis.zoomEnabled || e.mapView) && (d.group.attr(c), d.markerGroup && (d.markerGroup.attr(c), d.markerGroup.clip(a ? e.clipRect : null)), d.dataLabelsGroup && d.dataLabelsGroup.attr(c)) });
                e.clipRect.attr(a || e.clipBox)
            }; a.prototype.setDOMEvents = function () {
                var b = this, e = this.chart.container, g = e.ownerDocument; e.onmousedown = this.onContainerMouseDown.bind(this); e.onmousemove = this.onContainerMouseMove.bind(this); e.onclick = this.onContainerClick.bind(this); this.eventsToUnbind.push(t(e, "mouseenter", this.onContainerMouseEnter.bind(this))); this.eventsToUnbind.push(t(e, "mouseleave", this.onContainerMouseLeave.bind(this))); a.unbindDocumentMouseUp || (a.unbindDocumentMouseUp = t(g, "mouseup", this.onDocumentMouseUp.bind(this)));
                for (var d = this.chart.renderTo.parentElement; d && "BODY" !== d.tagName;)this.eventsToUnbind.push(t(d, "scroll", function () { delete b.chartPosition })), d = d.parentElement; f.hasTouch && (this.eventsToUnbind.push(t(e, "touchstart", this.onContainerTouchStart.bind(this), { passive: !1 })), this.eventsToUnbind.push(t(e, "touchmove", this.onContainerTouchMove.bind(this), { passive: !1 })), a.unbindDocumentTouchEnd || (a.unbindDocumentTouchEnd = t(g, "touchend", this.onDocumentTouchEnd.bind(this), { passive: !1 })))
            }; a.prototype.setHoverChartIndex =
                function () { var b = this.chart, e = f.charts[I(a.hoverChartIndex, -1)]; if (e && e !== b) e.pointer.onContainerMouseLeave({ relatedTarget: b.container }); e && e.mouseIsDown || (a.hoverChartIndex = b.index) }; a.prototype.touch = function (b, a) {
                    var e = this.chart, d; this.setHoverChartIndex(); if (1 === b.touches.length) if (b = this.normalize(b), (d = e.isInsidePlot(b.chartX - e.plotLeft, b.chartY - e.plotTop, { visiblePlotOnly: !0 })) && !e.openMenu) {
                        a && this.runPointActions(b); if ("touchmove" === b.type) {
                            a = this.pinchDown; var c = a[0] ? 4 <= Math.sqrt(Math.pow(a[0].chartX -
                                b.chartX, 2) + Math.pow(a[0].chartY - b.chartY, 2)) : !1
                        } I(c, !0) && this.pinch(b)
                    } else a && this.reset(); else 2 === b.touches.length && this.pinch(b)
                }; a.prototype.touchSelect = function (b) { return !(!this.chart.options.chart.zooming.singleTouch || !b.touches || 1 !== b.touches.length) }; a.prototype.zoomOption = function (b) {
                    var a = this.chart, e = a.options.chart; a = a.inverted; var d = e.zooming.type || ""; /touch/.test(b.type) && (d = I(e.zooming.pinchType, d)); this.zoomX = b = /x/.test(d); this.zoomY = e = /y/.test(d); this.zoomHor = b && !a || e && a; this.zoomVert =
                        e && !a || b && a; this.hasZoom = b || e
                }; return a
        }(); ""; return a
    }); M(f, "Core/MSPointer.js", [f["Core/Globals.js"], f["Core/Pointer.js"], f["Core/Utilities.js"]], function (a, f, x) {
        function y() { var b = []; b.item = function (b) { return this[b] }; l(r, function (a) { b.push({ pageX: a.pageX, pageY: a.pageY, target: a.target }) }); return b } function B(b, a, e, g) { var l = J[f.hoverChartIndex || NaN]; "touch" !== b.pointerType && b.pointerType !== b.MSPOINTER_TYPE_TOUCH || !l || (l = l.pointer, g(b), l[a]({ type: e, target: b.currentTarget, preventDefault: u, touches: y() })) }
        var A = this && this.__extends || function () { var b = function (a, e) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, a) { b.__proto__ = a } || function (b, a) { for (var e in a) a.hasOwnProperty(e) && (b[e] = a[e]) }; return b(a, e) }; return function (a, e) { function g() { this.constructor = a } b(a, e); a.prototype = null === e ? Object.create(e) : (g.prototype = e.prototype, new g) } }(), J = a.charts, t = a.doc, u = a.noop, p = a.win, g = x.addEvent, b = x.css, l = x.objectEach, n = x.pick, e = x.removeEvent, r = {}, G = !!p.PointerEvent; return function (f) {
            function l() {
                return null !==
                    f && f.apply(this, arguments) || this
            } A(l, f); l.isRequired = function () { return !(a.hasTouch || !p.PointerEvent && !p.MSPointerEvent) }; l.prototype.batchMSEvents = function (b) { b(this.chart.container, G ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown); b(this.chart.container, G ? "pointermove" : "MSPointerMove", this.onContainerPointerMove); b(t, G ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp) }; l.prototype.destroy = function () { this.batchMSEvents(e); f.prototype.destroy.call(this) }; l.prototype.init = function (a, e) {
                f.prototype.init.call(this,
                    a, e); this.hasZoom && b(a.container, { "-ms-touch-action": "none", "touch-action": "none" })
            }; l.prototype.onContainerPointerDown = function (b) { B(b, "onContainerTouchStart", "touchstart", function (b) { r[b.pointerId] = { pageX: b.pageX, pageY: b.pageY, target: b.currentTarget } }) }; l.prototype.onContainerPointerMove = function (b) { B(b, "onContainerTouchMove", "touchmove", function (b) { r[b.pointerId] = { pageX: b.pageX, pageY: b.pageY }; r[b.pointerId].target || (r[b.pointerId].target = b.currentTarget) }) }; l.prototype.onDocumentPointerUp = function (b) {
                B(b,
                    "onDocumentTouchEnd", "touchend", function (b) { delete r[b.pointerId] })
            }; l.prototype.setDOMEvents = function () { var b = this.chart.tooltip; f.prototype.setDOMEvents.call(this); (this.hasZoom || n(b && b.options.followTouchMove, !0)) && this.batchMSEvents(g) }; return l
        }(f)
    }); M(f, "Core/Legend/Legend.js", [f["Core/Animation/AnimationUtilities.js"], f["Core/FormatUtilities.js"], f["Core/Globals.js"], f["Core/Series/Point.js"], f["Core/Renderer/RendererUtilities.js"], f["Core/Utilities.js"]], function (a, f, x, E, B, A) {
        var y = a.animObject,
        t = a.setAnimation, u = f.format, p = x.marginNames, g = B.distribute, b = A.addEvent, l = A.createElement, n = A.css, e = A.defined, r = A.discardElement, G = A.find, K = A.fireEvent, I = A.isNumber, N = A.merge, w = A.pick, m = A.relativeLength, v = A.stableSort, h = A.syncTimeout; a = function () {
            function a(c, b) {
                this.allItems = []; this.contentGroup = this.box = void 0; this.display = !1; this.group = void 0; this.offsetWidth = this.maxLegendWidth = this.maxItemWidth = this.legendWidth = this.legendHeight = this.lastLineHeight = this.lastItemY = this.itemY = this.itemX = this.itemMarginTop =
                    this.itemMarginBottom = this.itemHeight = this.initialItemY = 0; this.options = void 0; this.padding = 0; this.pages = []; this.proximate = !1; this.scrollGroup = void 0; this.widthOption = this.totalItemWidth = this.titleHeight = this.symbolWidth = this.symbolHeight = 0; this.chart = c; this.init(c, b)
            } a.prototype.init = function (c, a) {
                this.chart = c; this.setOptions(a); a.enabled && (this.render(), b(this.chart, "endResize", function () { this.legend.positionCheckboxes() }), this.proximate ? this.unchartrender = b(this.chart, "render", function () {
                    this.legend.proximatePositions();
                    this.legend.positionItems()
                }) : this.unchartrender && this.unchartrender())
            }; a.prototype.setOptions = function (c) { var b = w(c.padding, 8); this.options = c; this.chart.styledMode || (this.itemStyle = c.itemStyle, this.itemHiddenStyle = N(this.itemStyle, c.itemHiddenStyle)); this.itemMarginTop = c.itemMarginTop || 0; this.itemMarginBottom = c.itemMarginBottom || 0; this.padding = b; this.initialItemY = b - 5; this.symbolWidth = w(c.symbolWidth, 16); this.pages = []; this.proximate = "proximate" === c.layout && !this.chart.inverted; this.baseline = void 0 };
            a.prototype.update = function (c, b) { var a = this.chart; this.setOptions(N(!0, this.options, c)); this.destroy(); a.isDirtyLegend = a.isDirtyBox = !0; w(b, !0) && a.redraw(); K(this, "afterUpdate") }; a.prototype.colorizeItem = function (c, b) {
                var a = c.legendItem || {}, d = a.group, e = a.label, g = a.line; a = a.symbol; if (d) d[b ? "removeClass" : "addClass"]("highcharts-legend-item-hidden"); if (!this.chart.styledMode) {
                    var f = this.options; d = this.itemHiddenStyle.color; f = b ? f.itemStyle.color : d; var h = b ? c.color || d : d, l = c.options && c.options.marker, m = { fill: h };
                    e && e.css({ fill: f, color: f }); g && g.attr({ stroke: h }); a && (l && a.isMarker && (m = c.pointAttribs(), b || (m.stroke = m.fill = d)), a.attr(m))
                } K(this, "afterColorizeItem", { item: c, visible: b })
            }; a.prototype.positionItems = function () { this.allItems.forEach(this.positionItem, this); this.chart.isResizing || this.positionCheckboxes() }; a.prototype.positionItem = function (c) {
                var b = this, a = c.legendItem || {}, d = a.group, g = a.x; g = void 0 === g ? 0 : g; a = a.y; a = void 0 === a ? 0 : a; var f = this.options, h = f.symbolPadding, l = !f.rtl; f = c.checkbox; d && d.element && (h =
                    { translateX: l ? g : this.legendWidth - g - 2 * h - 4, translateY: a }, d[e(d.translateY) ? "animate" : "attr"](h, void 0, function () { K(b, "afterPositionItem", { item: c }) })); f && (f.x = g, f.y = a)
            }; a.prototype.destroyItem = function (c) { for (var b = c.checkbox, a = c.legendItem || {}, d = 0, e = ["group", "label", "line", "symbol"]; d < e.length; d++) { var g = e[d]; a[g] && (a[g] = a[g].destroy()) } b && r(b); c.legendItem = void 0 }; a.prototype.destroy = function () {
                for (var c = 0, b = this.getAllItems(); c < b.length; c++)this.destroyItem(b[c]); c = 0; for (b = "clipRect up down pager nav box title group".split(" "); c <
                    b.length; c++) { var a = b[c]; this[a] && (this[a] = this[a].destroy()) } this.display = null
            }; a.prototype.positionCheckboxes = function () { var c = this.group && this.group.alignAttr, b = this.clipHeight || this.legendHeight, a = this.titleHeight; if (c) { var d = c.translateY; this.allItems.forEach(function (e) { var g = e.checkbox; if (g) { var f = d + a + g.y + (this.scrollOffset || 0) + 3; n(g, { left: c.translateX + e.checkboxOffset + g.x - 20 + "px", top: f + "px", display: this.proximate || f > d - 6 && f < d + b - 6 ? "" : "none" }) } }, this) } }; a.prototype.renderTitle = function () {
                var c =
                    this.options, b = this.padding, a = c.title, d = 0; a.text && (this.title || (this.title = this.chart.renderer.label(a.text, b - 3, b - 4, void 0, void 0, void 0, c.useHTML, void 0, "legend-title").attr({ zIndex: 1 }), this.chart.styledMode || this.title.css(a.style), this.title.add(this.group)), a.width || this.title.css({ width: this.maxLegendWidth + "px" }), c = this.title.getBBox(), d = c.height, this.offsetWidth = c.width, this.contentGroup.attr({ translateY: d })); this.titleHeight = d
            }; a.prototype.setText = function (c) {
                var b = this.options; c.legendItem.label.attr({
                    text: b.labelFormat ?
                        u(b.labelFormat, c, this.chart) : b.labelFormatter.call(c)
                })
            }; a.prototype.renderItem = function (c) {
                var b = c.legendItem = c.legendItem || {}, a = this.chart, d = a.renderer, e = this.options, g = this.symbolWidth, f = e.symbolPadding || 0, h = this.itemStyle, l = this.itemHiddenStyle, m = "horizontal" === e.layout ? w(e.itemDistance, 20) : 0, n = !e.rtl, p = !c.series, r = !p && c.series.drawLegendSymbol ? c.series : c, v = r.options, t = this.createCheckboxForItem && v && v.showCheckbox, u = e.useHTML, F = c.options.className, Q = b.label; v = g + f + m + (t ? 20 : 0); Q || (b.group = d.g("legend-item").addClass("highcharts-" +
                    r.type + "-series highcharts-color-" + c.colorIndex + (F ? " " + F : "") + (p ? " highcharts-series-" + c.index : "")).attr({ zIndex: 1 }).add(this.scrollGroup), b.label = Q = d.text("", n ? g + f : -f, this.baseline || 0, u), a.styledMode || Q.css(N(c.visible ? h : l)), Q.attr({ align: n ? "left" : "right", zIndex: 2 }).add(b.group), this.baseline || (this.fontMetrics = d.fontMetrics(a.styledMode ? 12 : h.fontSize, Q), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, Q.attr("y", this.baseline), this.symbolHeight = e.symbolHeight || this.fontMetrics.f, e.squareSymbol &&
                        (this.symbolWidth = w(e.symbolWidth, Math.max(this.symbolHeight, 16)), v = this.symbolWidth + f + m + (t ? 20 : 0), n && Q.attr("x", this.symbolWidth + f))), r.drawLegendSymbol(this, c), this.setItemEvents && this.setItemEvents(c, Q, u)); t && !c.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(c); this.colorizeItem(c, c.visible); !a.styledMode && h.width || Q.css({ width: (e.itemWidth || this.widthOption || a.spacingBox.width) - v + "px" }); this.setText(c); a = Q.getBBox(); d = this.fontMetrics && this.fontMetrics.h || 0; c.itemWidth = c.checkboxOffset =
                            e.itemWidth || b.labelWidth || a.width + v; this.maxItemWidth = Math.max(this.maxItemWidth, c.itemWidth); this.totalItemWidth += c.itemWidth; this.itemHeight = c.itemHeight = Math.round(b.labelHeight || (a.height > 1.5 * d ? a.height : d))
            }; a.prototype.layoutItem = function (c) {
                var b = this.options, a = this.padding, d = "horizontal" === b.layout, e = c.itemHeight, g = this.itemMarginBottom, f = this.itemMarginTop, h = d ? w(b.itemDistance, 20) : 0, l = this.maxLegendWidth; b = b.alignColumns && this.totalItemWidth > l ? this.maxItemWidth : c.itemWidth; var m = c.legendItem ||
                    {}; d && this.itemX - a + b > l && (this.itemX = a, this.lastLineHeight && (this.itemY += f + this.lastLineHeight + g), this.lastLineHeight = 0); this.lastItemY = f + this.itemY + g; this.lastLineHeight = Math.max(e, this.lastLineHeight); m.x = this.itemX; m.y = this.itemY; d ? this.itemX += b : (this.itemY += f + e + g, this.lastLineHeight = e); this.offsetWidth = this.widthOption || Math.max((d ? this.itemX - a - (c.checkbox ? 0 : h) : b) + a, this.offsetWidth)
            }; a.prototype.getAllItems = function () {
                var c = []; this.chart.series.forEach(function (b) {
                    var a = b && b.options; b && w(a.showInLegend,
                        e(a.linkedTo) ? !1 : void 0, !0) && (c = c.concat((b.legendItem || {}).labels || ("point" === a.legendType ? b.data : b)))
                }); K(this, "afterGetAllItems", { allItems: c }); return c
            }; a.prototype.getAlignment = function () { var c = this.options; return this.proximate ? c.align.charAt(0) + "tv" : c.floating ? "" : c.align.charAt(0) + c.verticalAlign.charAt(0) + c.layout.charAt(0) }; a.prototype.adjustMargins = function (c, b) {
                var a = this.chart, d = this.options, g = this.getAlignment(); g && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function (f,
                    h) { f.test(g) && !e(c[h]) && (a[p[h]] = Math.max(a[p[h]], a.legend[(h + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][h] * d[h % 2 ? "x" : "y"] + w(d.margin, 12) + b[h] + (a.titleOffset[h] || 0))) })
            }; a.prototype.proximatePositions = function () {
                var c = this.chart, b = [], a = "left" === this.options.align; this.allItems.forEach(function (d) {
                    var e; var g = a; if (d.yAxis) {
                        d.xAxis.options.reversed && (g = !g); d.points && (e = G(g ? d.points : d.points.slice(0).reverse(), function (c) { return I(c.plotY) })); g = this.itemMarginTop + d.legendItem.label.getBBox().height +
                            this.itemMarginBottom; var f = d.yAxis.top - c.plotTop; d.visible ? (e = e ? e.plotY : d.yAxis.height, e += f - .3 * g) : e = f + d.yAxis.height; b.push({ target: e, size: g, item: d })
                    }
                }, this); for (var d, e = 0, f = g(b, c.plotHeight); e < f.length; e++) { var h = f[e]; d = h.item.legendItem || {}; h.pos && (d.y = c.plotTop - c.spacing[0] + h.pos) }
            }; a.prototype.render = function () {
                var c = this.chart, b = c.renderer, a = this.options, d = this.padding, e = this.getAllItems(), g = this.group, f = this.box; this.itemX = d; this.itemY = this.initialItemY; this.lastItemY = this.offsetWidth = 0; this.widthOption =
                    m(a.width, c.spacingBox.width - d); var h = c.spacingBox.width - 2 * d - a.x; -1 < ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) && (h /= 2); this.maxLegendWidth = this.widthOption || h; g || (this.group = g = b.g("legend").addClass(a.className || "").attr({ zIndex: 7 }).add(), this.contentGroup = b.g().attr({ zIndex: 1 }).add(g), this.scrollGroup = b.g().add(this.contentGroup)); this.renderTitle(); v(e, function (c, b) { return (c.options && c.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0) }); a.reversed && e.reverse(); this.allItems =
                        e; this.display = h = !!e.length; this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0; e.forEach(this.renderItem, this); e.forEach(this.layoutItem, this); e = (this.widthOption || this.offsetWidth) + d; var l = this.lastItemY + this.lastLineHeight + this.titleHeight; l = this.handleOverflow(l); l += d; f || (this.box = f = b.rect().addClass("highcharts-legend-box").attr({ r: a.borderRadius }).add(g)); c.styledMode || f.attr({ stroke: a.borderColor, "stroke-width": a.borderWidth || 0, fill: a.backgroundColor || "none" }).shadow(a.shadow);
                if (0 < e && 0 < l) f[f.placed ? "animate" : "attr"](f.crisp.call({}, { x: 0, y: 0, width: e, height: l }, f.strokeWidth())); g[h ? "show" : "hide"](); c.styledMode && "none" === g.getStyle("display") && (e = l = 0); this.legendWidth = e; this.legendHeight = l; h && this.align(); this.proximate || this.positionItems(); K(this, "afterRender")
            }; a.prototype.align = function (c) {
                void 0 === c && (c = this.chart.spacingBox); var b = this.chart, a = this.options, d = c.y; /(lth|ct|rth)/.test(this.getAlignment()) && 0 < b.titleOffset[0] ? d += b.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) &&
                    0 < b.titleOffset[2] && (d -= b.titleOffset[2]); d !== c.y && (c = N(c, { y: d })); b.hasRendered || (this.group.placed = !1); this.group.align(N(a, { width: this.legendWidth, height: this.legendHeight, verticalAlign: this.proximate ? "top" : a.verticalAlign }), !0, c)
            }; a.prototype.handleOverflow = function (c) {
                var b = this, a = this.chart, d = a.renderer, e = this.options, g = e.y, f = "top" === e.verticalAlign, h = this.padding, l = e.maxHeight, m = e.navigation, n = w(m.animation, !0), p = m.arrowSize || 12, r = this.pages, v = this.allItems, t = function (c) {
                    "number" === typeof c ?
                    V.attr({ height: c }) : V && (b.clipRect = V.destroy(), b.contentGroup.clip()); b.contentGroup.div && (b.contentGroup.div.style.clip = c ? "rect(" + h + "px,9999px," + (h + c) + "px,0)" : "auto")
                }, u = function (c) { b[c] = d.circle(0, 0, 1.3 * p).translate(p / 2, p / 2).add(T); a.styledMode || b[c].attr("fill", "rgba(0,0,0,0.0001)"); return b[c] }, F, Q, O; g = a.spacingBox.height + (f ? -g : g) - h; var T = this.nav, V = this.clipRect; "horizontal" !== e.layout || "middle" === e.verticalAlign || e.floating || (g /= 2); l && (g = Math.min(g, l)); r.length = 0; c && 0 < g && c > g && !1 !== m.enabled ?
                    (this.clipHeight = F = Math.max(g - 20 - this.titleHeight - h, 0), this.currentPage = w(this.currentPage, 1), this.fullHeight = c, v.forEach(function (c, b) { O = c.legendItem || {}; c = O.y || 0; var a = Math.round(O.label.getBBox().height), d = r.length; if (!d || c - r[d - 1] > F && (Q || c) !== r[d - 1]) r.push(Q || c), d++; O.pageIx = d - 1; Q && ((v[b - 1].legendItem || {}).pageIx = d - 1); b === v.length - 1 && c + a - r[d - 1] > F && a <= F && (r.push(c), O.pageIx = d); c !== Q && (Q = c) }), V || (V = b.clipRect = d.clipRect(0, h, 9999, 0), b.contentGroup.clip(V)), t(F), T || (this.nav = T = d.g().attr({ zIndex: 1 }).add(this.group),
                        this.up = d.symbol("triangle", 0, 0, p, p).add(T), u("upTracker").on("click", function () { b.scroll(-1, n) }), this.pager = d.text("", 15, 10).addClass("highcharts-legend-navigation"), !a.styledMode && m.style && this.pager.css(m.style), this.pager.add(T), this.down = d.symbol("triangle-down", 0, 0, p, p).add(T), u("downTracker").on("click", function () { b.scroll(1, n) })), b.scroll(0), c = g) : T && (t(), this.nav = T.destroy(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0); return c
            }; a.prototype.scroll = function (c, b) {
                var a = this, d = this.chart,
                e = this.pages, g = e.length, f = this.clipHeight, l = this.options.navigation, m = this.pager, n = this.padding, q = this.currentPage + c; q > g && (q = g); 0 < q && ("undefined" !== typeof b && t(b, d), this.nav.attr({ translateX: n, translateY: f + this.padding + 7 + this.titleHeight, visibility: "inherit" }), [this.up, this.upTracker].forEach(function (c) { c.attr({ "class": 1 === q ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" }) }), m.attr({ text: q + "/" + g }), [this.down, this.downTracker].forEach(function (c) {
                    c.attr({
                        x: 18 + this.pager.getBBox().width,
                        "class": q === g ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                    })
                }, this), d.styledMode || (this.up.attr({ fill: 1 === q ? l.inactiveColor : l.activeColor }), this.upTracker.css({ cursor: 1 === q ? "default" : "pointer" }), this.down.attr({ fill: q === g ? l.inactiveColor : l.activeColor }), this.downTracker.css({ cursor: q === g ? "default" : "pointer" })), this.scrollOffset = -e[q - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: this.scrollOffset }), this.currentPage = q, this.positionCheckboxes(), c = y(w(b, d.renderer.globalAnimation,
                    !0)), h(function () { K(a, "afterScroll", { currentPage: q }) }, c.duration))
            }; a.prototype.setItemEvents = function (c, b, a) {
                var d = this, e = c.legendItem || {}, g = d.chart.renderer.boxWrapper, f = c instanceof E, h = "highcharts-legend-" + (f ? "point" : "series") + "-active", k = d.chart.styledMode, l = function (b) { d.allItems.forEach(function (a) { c !== a && [a].concat(a.linkedSeries || []).forEach(function (c) { c.setState(b, !f) }) }) }, m = 0; for (a = a ? [b, e.symbol] : [e.group]; m < a.length; m++)if (e = a[m]) e.on("mouseover", function () {
                    c.visible && l("inactive"); c.setState("hover");
                    c.visible && g.addClass(h); k || b.css(d.options.itemHoverStyle)
                }).on("mouseout", function () { d.chart.styledMode || b.css(N(c.visible ? d.itemStyle : d.itemHiddenStyle)); l(""); g.removeClass(h); c.setState() }).on("click", function (b) { var a = function () { c.setVisible && c.setVisible(); l(c.visible ? "inactive" : "") }; g.removeClass(h); b = { browserEvent: b }; c.firePointEvent ? c.firePointEvent("legendItemClick", b, a) : K(c, "legendItemClick", b, a) })
            }; a.prototype.createCheckboxForItem = function (c) {
                c.checkbox = l("input", {
                    type: "checkbox", className: "highcharts-legend-checkbox",
                    checked: c.selected, defaultChecked: c.selected
                }, this.options.itemCheckboxStyle, this.chart.container); b(c.checkbox, "click", function (b) { K(c.series || c, "checkboxClick", { checked: b.target.checked, item: c }, function () { c.select() }) })
            }; return a
        }(); ""; return a
    }); M(f, "Core/Series/SeriesRegistry.js", [f["Core/Globals.js"], f["Core/Defaults.js"], f["Core/Series/Point.js"], f["Core/Utilities.js"]], function (a, f, x, E) {
        var y = f.defaultOptions, A = E.extendClass, J = E.merge, t; (function (f) {
            function p(a, b) {
                var g = y.plotOptions || {},
                n = b.defaultOptions, e = b.prototype; e.type = a; e.pointClass || (e.pointClass = x); n && (g[a] = n); f.seriesTypes[a] = b
            } f.seriesTypes = a.seriesTypes; f.registerSeriesType = p; f.seriesType = function (a, b, l, n, e) { var g = y.plotOptions || {}; b = b || ""; g[a] = J(g[b], l); p(a, A(f.seriesTypes[b] || function () { }, n)); f.seriesTypes[a].prototype.type = a; e && (f.seriesTypes[a].prototype.pointClass = A(x, e)); return f.seriesTypes[a] }
        })(t || (t = {})); return t
    }); M(f, "Core/Chart/Chart.js", [f["Core/Animation/AnimationUtilities.js"], f["Core/Axis/Axis.js"],
    f["Core/Defaults.js"], f["Core/FormatUtilities.js"], f["Core/Foundation.js"], f["Core/Globals.js"], f["Core/Legend/Legend.js"], f["Core/MSPointer.js"], f["Core/Pointer.js"], f["Core/Renderer/RendererRegistry.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Renderer/SVG/SVGRenderer.js"], f["Core/Time.js"], f["Core/Utilities.js"], f["Core/Renderer/HTML/AST.js"]], function (a, f, x, E, B, A, J, t, u, p, g, b, l, n, e) {
        var r = a.animate, G = a.animObject, y = a.setAnimation, I = x.defaultOptions, N = x.defaultTime, w = E.numberFormat, m = B.registerEventOptions,
        v = A.charts, h = A.doc, d = A.marginNames, c = A.svg, q = A.win, k = g.seriesTypes, z = n.addEvent, H = n.attr, D = n.cleanRecursively, R = n.createElement, P = n.css, W = n.defined, Y = n.discardElement, C = n.erase, L = n.error, M = n.extend, ca = n.find, S = n.fireEvent, da = n.getStyle, F = n.isArray, Q = n.isNumber, O = n.isObject, T = n.isString, V = n.merge, X = n.objectEach, U = n.pick, aa = n.pInt, fa = n.relativeLength, ha = n.removeEvent, ea = n.splat, ia = n.syncTimeout, ka = n.uniqueKey; a = function () {
            function a(c, b, a) {
                this.series = this.renderTo = this.renderer = this.pointer = this.pointCount =
                    this.plotWidth = this.plotTop = this.plotLeft = this.plotHeight = this.plotBox = this.options = this.numberFormatter = this.margin = this.legend = this.labelCollectors = this.isResizing = this.index = this.eventOptions = this.container = this.colorCounter = this.clipBox = this.chartWidth = this.chartHeight = this.bounds = this.axisOffset = this.axes = void 0; this.sharedClips = {}; this.yAxis = this.xAxis = this.userOptions = this.titleOffset = this.time = this.symbolCounter = this.spacingBox = this.spacing = void 0; this.getArgs(c, b, a)
            } a.chart = function (c, b,
                d) { return new a(c, b, d) }; a.prototype.getArgs = function (c, b, a) { T(c) || c.nodeName ? (this.renderTo = c, this.init(b, a)) : this.init(c, b) }; a.prototype.init = function (c, b) {
                    var a = c.plotOptions || {}; S(this, "init", { args: arguments }, function () {
                        var d = V(I, c), e = d.chart; X(d.plotOptions, function (c, b) { O(c) && (c.tooltip = a[b] && V(a[b].tooltip) || void 0) }); d.tooltip.userOptions = c.chart && c.chart.forExport && c.tooltip.userOptions || c.tooltip; this.userOptions = c; this.margin = []; this.spacing = []; this.bounds = { h: {}, v: {} }; this.labelCollectors =
                            []; this.callback = b; this.isResizing = 0; var g = e.zooming = e.zooming || {}; c.chart && !c.chart.zooming && (g.resetButton = e.resetZoomButton); g.key = U(g.key, e.zoomKey); g.pinchType = U(g.pinchType, e.pinchType); g.singleTouch = U(g.singleTouch, e.zoomBySingleTouch); g.type = U(g.type, e.zoomType); this.options = d; this.axes = []; this.series = []; this.time = c.time && Object.keys(c.time).length ? new l(c.time) : A.time; this.numberFormatter = e.numberFormatter || w; this.styledMode = e.styledMode; this.hasCartesianSeries = e.showAxes; this.index = v.length;
                        v.push(this); A.chartCount++; m(this, e); this.xAxis = []; this.yAxis = []; this.pointCount = this.colorCounter = this.symbolCounter = 0; S(this, "afterInit"); this.firstRender()
                    })
                }; a.prototype.initSeries = function (c) { var b = this.options.chart; b = c.type || b.type || b.defaultSeriesType; var a = k[b]; a || L(17, !0, this, { missingModuleFor: b }); b = new a; "function" === typeof b.init && b.init(this, c); return b }; a.prototype.setSeriesData = function () {
                    this.getSeriesOrderByLinks().forEach(function (c) {
                        c.points || c.data || !c.enabledDataSorting || c.setData(c.options.data,
                            !1)
                    })
                }; a.prototype.getSeriesOrderByLinks = function () { return this.series.concat().sort(function (c, b) { return c.linkedSeries.length || b.linkedSeries.length ? b.linkedSeries.length - c.linkedSeries.length : 0 }) }; a.prototype.orderSeries = function (c) { var b = this.series; c = c || 0; for (var a = b.length; c < a; ++c)b[c] && (b[c].index = c, b[c].name = b[c].getName()) }; a.prototype.isInsidePlot = function (c, b, a) {
                    void 0 === a && (a = {}); var d = this.inverted, e = this.plotBox, g = this.plotLeft, f = this.plotTop, h = this.scrollablePlotBox, k = 0; var l = 0; a.visiblePlotOnly &&
                        this.scrollingContainer && (l = this.scrollingContainer, k = l.scrollLeft, l = l.scrollTop); var m = a.series; e = a.visiblePlotOnly && h || e; h = a.inverted ? b : c; b = a.inverted ? c : b; c = { x: h, y: b, isInsidePlot: !0, options: a }; if (!a.ignoreX) { var n = m && (d && !this.polar ? m.yAxis : m.xAxis) || { pos: g, len: Infinity }; h = a.paneCoordinates ? n.pos + h : g + h; h >= Math.max(k + g, n.pos) && h <= Math.min(k + g + e.width, n.pos + n.len) || (c.isInsidePlot = !1) } !a.ignoreY && c.isInsidePlot && (d = a.axis && !a.axis.isXAxis && a.axis || m && (d ? m.xAxis : m.yAxis) || { pos: f, len: Infinity }, a = a.paneCoordinates ?
                            d.pos + b : f + b, a >= Math.max(l + f, d.pos) && a <= Math.min(l + f + e.height, d.pos + d.len) || (c.isInsidePlot = !1)); S(this, "afterIsInsidePlot", c); return c.isInsidePlot
                }; a.prototype.redraw = function (c) {
                    S(this, "beforeRedraw"); var b = this.hasCartesianSeries ? this.axes : this.colorAxis || [], a = this.series, d = this.pointer, e = this.legend, g = this.userOptions.legend, f = this.renderer, h = f.isHidden(), k = [], l = this.isDirtyBox, m = this.isDirtyLegend; this.setResponsive && this.setResponsive(!1); y(this.hasRendered ? c : !1, this); h && this.temporaryDisplay();
                    this.layOutTitles(); for (c = a.length; c--;) { var n = a[c]; if (n.options.stacking || n.options.centerInCategory) { var q = !0; if (n.isDirty) { var F = !0; break } } } if (F) for (c = a.length; c--;)n = a[c], n.options.stacking && (n.isDirty = !0); a.forEach(function (c) { c.isDirty && ("point" === c.options.legendType ? ("function" === typeof c.updateTotals && c.updateTotals(), m = !0) : g && (g.labelFormatter || g.labelFormat) && (m = !0)); c.isDirtyData && S(c, "updatedData") }); m && e && e.options.enabled && (e.render(), this.isDirtyLegend = !1); q && this.getStacks(); b.forEach(function (c) {
                        c.updateNames();
                        c.setScale()
                    }); this.getMargins(); b.forEach(function (c) { c.isDirty && (l = !0) }); b.forEach(function (c) { var b = c.min + "," + c.max; c.extKey !== b && (c.extKey = b, k.push(function () { S(c, "afterSetExtremes", M(c.eventArgs, c.getExtremes())); delete c.eventArgs })); (l || q) && c.redraw() }); l && this.drawChartBox(); S(this, "predraw"); a.forEach(function (c) { (l || c.isDirty) && c.visible && c.redraw(); c.isDirtyData = !1 }); d && d.reset(!0); f.draw(); S(this, "redraw"); S(this, "render"); h && this.temporaryDisplay(!0); k.forEach(function (c) { c.call() })
                };
            a.prototype.get = function (c) { function b(b) { return b.id === c || b.options && b.options.id === c } for (var a = this.series, d = ca(this.axes, b) || ca(this.series, b), e = 0; !d && e < a.length; e++)d = ca(a[e].points || [], b); return d }; a.prototype.getAxes = function () { var c = this, b = this.options, a = b.xAxis = ea(b.xAxis || {}); b = b.yAxis = ea(b.yAxis || {}); S(this, "getAxes"); a.forEach(function (c, b) { c.index = b; c.isX = !0 }); b.forEach(function (c, b) { c.index = b }); a.concat(b).forEach(function (b) { new f(c, b) }); S(this, "afterGetAxes") }; a.prototype.getSelectedPoints =
                function () { return this.series.reduce(function (c, b) { b.getPointsCollection().forEach(function (b) { U(b.selectedStaging, b.selected) && c.push(b) }); return c }, []) }; a.prototype.getSelectedSeries = function () { return this.series.filter(function (c) { return c.selected }) }; a.prototype.setTitle = function (c, b, a) { this.applyDescription("title", c); this.applyDescription("subtitle", b); this.applyDescription("caption", void 0); this.layOutTitles(a) }; a.prototype.applyDescription = function (c, b) {
                    var a = this, d = "title" === c ? {
                        color: "#333333",
                        fontSize: this.options.isStock ? "16px" : "18px"
                    } : { color: "#666666" }; d = this.options[c] = V(!this.styledMode && { style: d }, this.options[c], b); var e = this[c]; e && b && (this[c] = e = e.destroy()); d && !e && (e = this.renderer.text(d.text, 0, 0, d.useHTML).attr({ align: d.align, "class": "highcharts-" + c, zIndex: d.zIndex || 4 }).add(), e.update = function (b) { a[{ title: "setTitle", subtitle: "setSubtitle", caption: "setCaption" }[c]](b) }, this.styledMode || e.css(d.style), this[c] = e)
                }; a.prototype.layOutTitles = function (c) {
                    var b = [0, 0, 0], a = this.renderer,
                    d = this.spacingBox;["title", "subtitle", "caption"].forEach(function (c) {
                        var e = this[c], g = this.options[c], f = g.verticalAlign || "top"; c = "title" === c ? "top" === f ? -3 : 0 : "top" === f ? b[0] + 2 : 0; var h; if (e) {
                            this.styledMode || (h = g.style && g.style.fontSize); h = a.fontMetrics(h, e).b; e.css({ width: (g.width || d.width + (g.widthAdjust || 0)) + "px" }); var k = Math.round(e.getBBox(g.useHTML).height); e.align(M({ y: "bottom" === f ? h : c + h, height: k }, g), !1, "spacingBox"); g.floating || ("top" === f ? b[0] = Math.ceil(b[0] + k) : "bottom" === f && (b[2] = Math.ceil(b[2] +
                                k)))
                        }
                    }, this); b[0] && "top" === (this.options.title.verticalAlign || "top") && (b[0] += this.options.title.margin); b[2] && "bottom" === this.options.caption.verticalAlign && (b[2] += this.options.caption.margin); var e = !this.titleOffset || this.titleOffset.join(",") !== b.join(","); this.titleOffset = b; S(this, "afterLayOutTitles"); !this.isDirtyBox && e && (this.isDirtyBox = this.isDirtyLegend = e, this.hasRendered && U(c, !0) && this.isDirtyBox && this.redraw())
                }; a.prototype.getChartSize = function () {
                    var c = this.options.chart, b = c.width; c = c.height;
                    var a = this.renderTo; W(b) || (this.containerWidth = da(a, "width")); W(c) || (this.containerHeight = da(a, "height")); this.chartWidth = Math.max(0, b || this.containerWidth || 600); this.chartHeight = Math.max(0, fa(c, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400))
                }; a.prototype.temporaryDisplay = function (c) {
                    var b = this.renderTo; if (c) for (; b && b.style;)b.hcOrigStyle && (P(b, b.hcOrigStyle), delete b.hcOrigStyle), b.hcOrigDetached && (h.body.removeChild(b), b.hcOrigDetached = !1), b = b.parentNode; else for (; b && b.style;) {
                        h.body.contains(b) ||
                        b.parentNode || (b.hcOrigDetached = !0, h.body.appendChild(b)); if ("none" === da(b, "display", !1) || b.hcOricDetached) b.hcOrigStyle = { display: b.style.display, height: b.style.height, overflow: b.style.overflow }, c = { display: "block", overflow: "hidden" }, b !== this.renderTo && (c.height = 0), P(b, c), b.offsetWidth || b.style.setProperty("display", "block", "important"); b = b.parentNode; if (b === h.body) break
                    }
                }; a.prototype.setClassName = function (c) { this.container.className = "highcharts-container " + (c || "") }; a.prototype.getContainer = function () {
                    var a =
                        this.options, d = a.chart, g = ka(), f, k = this.renderTo; k || (this.renderTo = k = d.renderTo); T(k) && (this.renderTo = k = h.getElementById(k)); k || L(13, !0, this); var l = aa(H(k, "data-highcharts-chart")); Q(l) && v[l] && v[l].hasRendered && v[l].destroy(); H(k, "data-highcharts-chart", this.index); k.innerHTML = e.emptyHTML; d.skipClone || k.offsetWidth || this.temporaryDisplay(); this.getChartSize(); l = this.chartWidth; var m = this.chartHeight; P(k, { overflow: "hidden" }); this.styledMode || (f = M({
                            position: "relative", overflow: "hidden", width: l + "px",
                            height: m + "px", textAlign: "left", lineHeight: "normal", zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)", userSelect: "none", "touch-action": "manipulation", outline: "none"
                        }, d.style || {})); this.container = g = R("div", { id: g }, f, k); this._cursor = g.style.cursor; this.renderer = new (d.renderer || !c ? p.getRendererType(d.renderer) : b)(g, l, m, void 0, d.forExport, a.exporting && a.exporting.allowHTML, this.styledMode); y(void 0, this); this.setClassName(d.className); if (this.styledMode) for (var n in a.defs) this.renderer.definition(a.defs[n]);
                    else this.renderer.setStyle(d.style); this.renderer.chartIndex = this.index; S(this, "afterGetContainer")
                }; a.prototype.getMargins = function (c) { var b = this.spacing, a = this.margin, d = this.titleOffset; this.resetMargins(); d[0] && !W(a[0]) && (this.plotTop = Math.max(this.plotTop, d[0] + b[0])); d[2] && !W(a[2]) && (this.marginBottom = Math.max(this.marginBottom, d[2] + b[2])); this.legend && this.legend.display && this.legend.adjustMargins(a, b); S(this, "getMargins"); c || this.getAxisMargins() }; a.prototype.getAxisMargins = function () {
                    var c =
                        this, b = c.axisOffset = [0, 0, 0, 0], a = c.colorAxis, e = c.margin, g = function (c) { c.forEach(function (c) { c.visible && c.getOffset() }) }; c.hasCartesianSeries ? g(c.axes) : a && a.length && g(a); d.forEach(function (a, d) { W(e[d]) || (c[a] += b[d]) }); c.setChartSize()
                }; a.prototype.reflow = function (c) {
                    var b = this, a = b.options.chart, d = b.renderTo, e = W(a.width) && W(a.height), g = a.width || da(d, "width"); a = a.height || da(d, "height"); d = c ? c.target : q; delete b.pointer.chartPosition; if (!e && !b.isPrinting && g && a && (d === q || d === h)) {
                        if (g !== b.containerWidth || a !==
                            b.containerHeight) n.clearTimeout(b.reflowTimeout), b.reflowTimeout = ia(function () { b.container && b.setSize(void 0, void 0, !1) }, c ? 100 : 0); b.containerWidth = g; b.containerHeight = a
                    }
                }; a.prototype.setReflow = function (c) { var b = this; !1 === c || this.unbindReflow ? !1 === c && this.unbindReflow && (this.unbindReflow = this.unbindReflow()) : (this.unbindReflow = z(q, "resize", function (c) { b.options && b.reflow(c) }), z(this, "destroy", this.unbindReflow)) }; a.prototype.setSize = function (c, b, a) {
                    var d = this, e = d.renderer; d.isResizing += 1; y(a, d); a =
                        e.globalAnimation; d.oldChartHeight = d.chartHeight; d.oldChartWidth = d.chartWidth; "undefined" !== typeof c && (d.options.chart.width = c); "undefined" !== typeof b && (d.options.chart.height = b); d.getChartSize(); d.styledMode || (a ? r : P)(d.container, { width: d.chartWidth + "px", height: d.chartHeight + "px" }, a); d.setChartSize(!0); e.setSize(d.chartWidth, d.chartHeight, a); d.axes.forEach(function (c) { c.isDirty = !0; c.setScale() }); d.isDirtyLegend = !0; d.isDirtyBox = !0; d.layOutTitles(); d.getMargins(); d.redraw(a); d.oldChartHeight = null; S(d,
                            "resize"); ia(function () { d && S(d, "endResize", null, function () { --d.isResizing }) }, G(a).duration)
                }; a.prototype.setChartSize = function (c) {
                    var b = this.inverted, a = this.renderer, d = this.chartWidth, e = this.chartHeight, g = this.options.chart, f = this.spacing, h = this.clipOffset, k, l, m, n; this.plotLeft = k = Math.round(this.plotLeft); this.plotTop = l = Math.round(this.plotTop); this.plotWidth = m = Math.max(0, Math.round(d - k - this.marginRight)); this.plotHeight = n = Math.max(0, Math.round(e - l - this.marginBottom)); this.plotSizeX = b ? n : m; this.plotSizeY =
                        b ? m : n; this.plotBorderWidth = g.plotBorderWidth || 0; this.spacingBox = a.spacingBox = { x: f[3], y: f[0], width: d - f[3] - f[1], height: e - f[0] - f[2] }; this.plotBox = a.plotBox = { x: k, y: l, width: m, height: n }; b = 2 * Math.floor(this.plotBorderWidth / 2); d = Math.ceil(Math.max(b, h[3]) / 2); e = Math.ceil(Math.max(b, h[0]) / 2); this.clipBox = { x: d, y: e, width: Math.floor(this.plotSizeX - Math.max(b, h[1]) / 2 - d), height: Math.max(0, Math.floor(this.plotSizeY - Math.max(b, h[2]) / 2 - e)) }; c || (this.axes.forEach(function (c) { c.setAxisSize(); c.setAxisTranslation() }),
                            a.alignElements()); S(this, "afterSetChartSize", { skipAxes: c })
                }; a.prototype.resetMargins = function () { S(this, "resetMargins"); var c = this, b = c.options.chart;["margin", "spacing"].forEach(function (a) { var d = b[a], e = O(d) ? d : [d, d, d, d];["Top", "Right", "Bottom", "Left"].forEach(function (d, g) { c[a][g] = U(b[a + d], e[g]) }) }); d.forEach(function (b, a) { c[b] = U(c.margin[a], c.spacing[a]) }); c.axisOffset = [0, 0, 0, 0]; c.clipOffset = [0, 0, 0, 0] }; a.prototype.drawChartBox = function () {
                    var c = this.options.chart, b = this.renderer, a = this.chartWidth,
                    d = this.chartHeight, e = this.styledMode, g = this.plotBGImage, f = c.backgroundColor, h = c.plotBackgroundColor, k = c.plotBackgroundImage, l = this.plotLeft, m = this.plotTop, n = this.plotWidth, q = this.plotHeight, F = this.plotBox, p = this.clipRect, r = this.clipBox, O = this.chartBackground, v = this.plotBackground, z = this.plotBorder, w, Q = "animate"; O || (this.chartBackground = O = b.rect().addClass("highcharts-background").add(), Q = "attr"); if (e) var t = w = O.strokeWidth(); else {
                        t = c.borderWidth || 0; w = t + (c.shadow ? 8 : 0); f = { fill: f || "none" }; if (t || O["stroke-width"]) f.stroke =
                            c.borderColor, f["stroke-width"] = t; O.attr(f).shadow(c.shadow)
                    } O[Q]({ x: w / 2, y: w / 2, width: a - w - t % 2, height: d - w - t % 2, r: c.borderRadius }); Q = "animate"; v || (Q = "attr", this.plotBackground = v = b.rect().addClass("highcharts-plot-background").add()); v[Q](F); e || (v.attr({ fill: h || "none" }).shadow(c.plotShadow), k && (g ? (k !== g.attr("href") && g.attr("href", k), g.animate(F)) : this.plotBGImage = b.image(k, l, m, n, q).add())); p ? p.animate({ width: r.width, height: r.height }) : this.clipRect = b.clipRect(r); Q = "animate"; z || (Q = "attr", this.plotBorder =
                        z = b.rect().addClass("highcharts-plot-border").attr({ zIndex: 1 }).add()); e || z.attr({ stroke: c.plotBorderColor, "stroke-width": c.plotBorderWidth || 0, fill: "none" }); z[Q](z.crisp({ x: l, y: m, width: n, height: q }, -z.strokeWidth())); this.isDirtyBox = !1; S(this, "afterDrawChartBox")
                }; a.prototype.propFromSeries = function () {
                    var c = this, b = c.options.chart, a = c.options.series, d, e, g;["inverted", "angular", "polar"].forEach(function (f) {
                        e = k[b.type || b.defaultSeriesType]; g = b[f] || e && e.prototype[f]; for (d = a && a.length; !g && d--;)(e = k[a[d].type]) &&
                            e.prototype[f] && (g = !0); c[f] = g
                    })
                }; a.prototype.linkSeries = function () { var c = this, b = c.series; b.forEach(function (c) { c.linkedSeries.length = 0 }); b.forEach(function (b) { var a = b.options.linkedTo; T(a) && (a = ":previous" === a ? c.series[b.index - 1] : c.get(a)) && a.linkedParent !== b && (a.linkedSeries.push(b), b.linkedParent = a, a.enabledDataSorting && b.setDataSortingOptions(), b.visible = U(b.options.visible, a.options.visible, b.visible)) }); S(this, "afterLinkSeries") }; a.prototype.renderSeries = function () {
                    this.series.forEach(function (c) {
                        c.translate();
                        c.render()
                    })
                }; a.prototype.renderLabels = function () { var c = this, b = c.options.labels; b.items && b.items.forEach(function (a) { var d = M(b.style, a.style), e = aa(d.left) + c.plotLeft, g = aa(d.top) + c.plotTop + 12; delete d.left; delete d.top; c.renderer.text(a.html, e, g).attr({ zIndex: 2 }).css(d).add() }) }; a.prototype.render = function () {
                    var c = this.axes, b = this.colorAxis, a = this.renderer, d = this.options, e = function (c) { c.forEach(function (c) { c.visible && c.render() }) }, g = 0; this.setTitle(); this.legend = new J(this, d.legend); this.getStacks &&
                        this.getStacks(); this.getMargins(!0); this.setChartSize(); d = this.plotWidth; c.some(function (c) { if (c.horiz && c.visible && c.options.labels.enabled && c.series.length) return g = 21, !0 }); var f = this.plotHeight = Math.max(this.plotHeight - g, 0); c.forEach(function (c) { c.setScale() }); this.getAxisMargins(); var h = 1.1 < d / this.plotWidth, k = 1.05 < f / this.plotHeight; if (h || k) c.forEach(function (c) { (c.horiz && h || !c.horiz && k) && c.setTickInterval(!0) }), this.getMargins(); this.drawChartBox(); this.hasCartesianSeries ? e(c) : b && b.length && e(b);
                    this.seriesGroup || (this.seriesGroup = a.g("series-group").attr({ zIndex: 3 }).add()); this.renderSeries(); this.renderLabels(); this.addCredits(); this.setResponsive && this.setResponsive(); this.hasRendered = !0
                }; a.prototype.addCredits = function (c) {
                    var b = this, a = V(!0, this.options.credits, c); a.enabled && !this.credits && (this.credits = this.renderer.text(a.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function () { a.href && (q.location.href = a.href) }).attr({ align: a.position.align, zIndex: 8 }), b.styledMode ||
                        this.credits.css(a.style), this.credits.add().align(a.position), this.credits.update = function (c) { b.credits = b.credits.destroy(); b.addCredits(c) })
                }; a.prototype.destroy = function () {
                    var c = this, b = c.axes, a = c.series, d = c.container, g = d && d.parentNode, f; S(c, "destroy"); c.renderer.forExport ? C(v, c) : v[c.index] = void 0; A.chartCount--; c.renderTo.removeAttribute("data-highcharts-chart"); ha(c); for (f = b.length; f--;)b[f] = b[f].destroy(); this.scroller && this.scroller.destroy && this.scroller.destroy(); for (f = a.length; f--;)a[f] =
                        a[f].destroy(); "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function (b) { var a = c[b]; a && a.destroy && (c[b] = a.destroy()) }); d && (d.innerHTML = e.emptyHTML, ha(d), g && Y(d)); X(c, function (b, a) { delete c[a] })
                }; a.prototype.firstRender = function () {
                    var c = this, b = c.options; if (!c.isReadyToRender || c.isReadyToRender()) {
                        c.getContainer(); c.resetMargins(); c.setChartSize(); c.propFromSeries();
                        c.getAxes(); (F(b.series) ? b.series : []).forEach(function (b) { c.initSeries(b) }); c.linkSeries(); c.setSeriesData(); S(c, "beforeRender"); u && (t.isRequired() ? c.pointer = new t(c, b) : c.pointer = new u(c, b)); c.render(); c.pointer.getChartPosition(); if (!c.renderer.imgCount && !c.hasLoaded) c.onload(); c.temporaryDisplay(!0)
                    }
                }; a.prototype.onload = function () {
                    this.callbacks.concat([this.callback]).forEach(function (c) { c && "undefined" !== typeof this.index && c.apply(this, [this]) }, this); S(this, "load"); S(this, "render"); W(this.index) &&
                        this.setReflow(this.options.chart.reflow); this.warnIfA11yModuleNotLoaded(); this.hasLoaded = !0
                }; a.prototype.warnIfA11yModuleNotLoaded = function () {
                    var c = this.options, b = this.title; c && !this.accessibility && (this.renderer.boxWrapper.attr({ role: "img", "aria-label": b && b.element.textContent || "" }), c.accessibility && !1 === c.accessibility.enabled || L('Highcharts warning: Consider including the "accessibility.js" module to make your chart more usable for people with disabilities. Set the "accessibility.enabled" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.',
                        !1, this))
                }; a.prototype.addSeries = function (c, b, a) { var d = this, e; c && (b = U(b, !0), S(d, "addSeries", { options: c }, function () { e = d.initSeries(c); d.isDirtyLegend = !0; d.linkSeries(); e.enabledDataSorting && e.setData(c.data, !1); S(d, "afterAddSeries", { series: e }); b && d.redraw(a) })); return e }; a.prototype.addAxis = function (c, b, a, d) { return this.createAxis(b ? "xAxis" : "yAxis", { axis: c, redraw: a, animation: d }) }; a.prototype.addColorAxis = function (c, b, a) { return this.createAxis("colorAxis", { axis: c, redraw: b, animation: a }) }; a.prototype.createAxis =
                    function (c, b) { c = new f(this, V(b.axis, { index: this[c].length, isX: "xAxis" === c })); U(b.redraw, !0) && this.redraw(b.animation); return c }; a.prototype.showLoading = function (c) {
                        var b = this, a = b.options, d = a.loading, g = function () { f && P(f, { left: b.plotLeft + "px", top: b.plotTop + "px", width: b.plotWidth + "px", height: b.plotHeight + "px" }) }, f = b.loadingDiv, h = b.loadingSpan; f || (b.loadingDiv = f = R("div", { className: "highcharts-loading highcharts-loading-hidden" }, null, b.container)); h || (b.loadingSpan = h = R("span", { className: "highcharts-loading-inner" },
                            null, f), z(b, "redraw", g)); f.className = "highcharts-loading"; e.setElementHTML(h, U(c, a.lang.loading, "")); b.styledMode || (P(f, M(d.style, { zIndex: 10 })), P(h, d.labelStyle), b.loadingShown || (P(f, { opacity: 0, display: "" }), r(f, { opacity: d.style.opacity || .5 }, { duration: d.showDuration || 0 }))); b.loadingShown = !0; g()
                    }; a.prototype.hideLoading = function () {
                        var c = this.options, b = this.loadingDiv; b && (b.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || r(b, { opacity: 0 }, {
                            duration: c.loading.hideDuration || 100,
                            complete: function () { P(b, { display: "none" }) }
                        })); this.loadingShown = !1
                    }; a.prototype.update = function (c, b, a, d) {
                        var e = this, g = { credits: "addCredits", title: "setTitle", subtitle: "setSubtitle", caption: "setCaption" }, f = c.isResponsiveOptions, h = [], k, n; S(e, "update", { options: c }); f || e.setResponsive(!1, !0); c = D(c, e.options); e.userOptions = V(e.userOptions, c); var q = c.chart; if (q) {
                            V(!0, e.options.chart, q); "className" in q && e.setClassName(q.className); "reflow" in q && e.setReflow(q.reflow); if ("inverted" in q || "polar" in q || "type" in
                                q) { e.propFromSeries(); var F = !0 } "alignTicks" in q && (F = !0); "events" in q && m(this, q); X(q, function (c, b) { -1 !== e.propsRequireUpdateSeries.indexOf("chart." + b) && (k = !0); -1 !== e.propsRequireDirtyBox.indexOf(b) && (e.isDirtyBox = !0); -1 !== e.propsRequireReflow.indexOf(b) && (f ? e.isDirtyBox = !0 : n = !0) }); !e.styledMode && q.style && e.renderer.setStyle(e.options.chart.style || {})
                        } !e.styledMode && c.colors && (this.options.colors = c.colors); c.time && (this.time === N && (this.time = new l(c.time)), V(!0, e.options.time, c.time)); X(c, function (b,
                            a) { if (e[a] && "function" === typeof e[a].update) e[a].update(b, !1); else if ("function" === typeof e[g[a]]) e[g[a]](b); else "colors" !== a && -1 === e.collectionsWithUpdate.indexOf(a) && V(!0, e.options[a], c[a]); "chart" !== a && -1 !== e.propsRequireUpdateSeries.indexOf(a) && (k = !0) }); this.collectionsWithUpdate.forEach(function (b) {
                                if (c[b]) {
                                    var d = []; e[b].forEach(function (c, b) { c.options.isInternal || d.push(U(c.options.index, b)) }); ea(c[b]).forEach(function (c, g) {
                                        var f = W(c.id), h; f && (h = e.get(c.id)); !h && e[b] && (h = e[b][d ? d[g] : g]) && f &&
                                            W(h.options.id) && (h = void 0); h && h.coll === b && (h.update(c, !1), a && (h.touched = !0)); !h && a && e.collectionsWithInit[b] && (e.collectionsWithInit[b][0].apply(e, [c].concat(e.collectionsWithInit[b][1] || []).concat([!1])).touched = !0)
                                    }); a && e[b].forEach(function (c) { c.touched || c.options.isInternal ? delete c.touched : h.push(c) })
                                }
                            }); h.forEach(function (c) { c.chart && c.remove && c.remove(!1) }); F && e.axes.forEach(function (c) { c.update({}, !1) }); k && e.getSeriesOrderByLinks().forEach(function (c) { c.chart && c.update({}, !1) }, this); F = q &&
                                q.width; q = q && (T(q.height) ? fa(q.height, F || e.chartWidth) : q.height); n || Q(F) && F !== e.chartWidth || Q(q) && q !== e.chartHeight ? e.setSize(F, q, d) : U(b, !0) && e.redraw(d); S(e, "afterUpdate", { options: c, redraw: b, animation: d })
                    }; a.prototype.setSubtitle = function (c, b) { this.applyDescription("subtitle", c); this.layOutTitles(b) }; a.prototype.setCaption = function (c, b) { this.applyDescription("caption", c); this.layOutTitles(b) }; a.prototype.showResetZoom = function () {
                        function c() { b.zoomOut() } var b = this, a = I.lang, d = b.options.chart.zooming.resetButton,
                            e = d.theme, g = "chart" === d.relativeTo || "spacingBox" === d.relativeTo ? null : "scrollablePlotBox"; S(this, "beforeShowResetZoom", null, function () { b.resetZoomButton = b.renderer.button(a.resetZoom, null, null, c, e).attr({ align: d.position.align, title: a.resetZoomTitle }).addClass("highcharts-reset-zoom").add().align(d.position, !1, g) }); S(this, "afterShowResetZoom")
                    }; a.prototype.zoomOut = function () { S(this, "selection", { resetSelection: !0 }, this.zoom) }; a.prototype.zoom = function (c) {
                        var b = this, a = b.pointer, d = !1, e; !c || c.resetSelection ?
                            (b.axes.forEach(function (c) { e = c.zoom() }), a.initiated = !1) : c.xAxis.concat(c.yAxis).forEach(function (c) { var g = c.axis; if (a[g.isXAxis ? "zoomX" : "zoomY"] && W(a.mouseDownX) && W(a.mouseDownY) && b.isInsidePlot(a.mouseDownX - b.plotLeft, a.mouseDownY - b.plotTop, { axis: g }) || !W(b.inverted ? a.mouseDownX : a.mouseDownY)) e = g.zoom(c.min, c.max), g.displayBtn && (d = !0) }); var g = b.resetZoomButton; d && !g ? b.showResetZoom() : !d && O(g) && (b.resetZoomButton = g.destroy()); e && b.redraw(U(b.options.chart.animation, c && c.animation, 100 > b.pointCount))
                    };
            a.prototype.pan = function (c, b) {
                var a = this, d = a.hoverPoints; b = "object" === typeof b ? b : { enabled: b, type: "x" }; var e = a.options.chart; e && e.panning && (e.panning = b); var g = b.type, f; S(this, "pan", { originalEvent: c }, function () {
                    d && d.forEach(function (c) { c.setState() }); var b = a.xAxis; "xy" === g ? b = b.concat(a.yAxis) : "y" === g && (b = a.yAxis); var e = {}; b.forEach(function (b) {
                        if (b.options.panningEnabled && !b.options.isInternal) {
                            var d = b.horiz, h = c[d ? "chartX" : "chartY"]; d = d ? "mouseDownX" : "mouseDownY"; var k = a[d], l = b.minPointOffset || 0, m = b.reversed &&
                                !a.inverted || !b.reversed && a.inverted ? -1 : 1, n = b.getExtremes(), q = b.toValue(k - h, !0) + l * m, F = b.toValue(k + b.len - h, !0) - (l * m || b.isXAxis && b.pointRangePadding || 0), p = F < q; m = b.hasVerticalPanning(); k = p ? F : q; q = p ? q : F; var r = b.panningState; !m || b.isXAxis || r && !r.isDirty || b.series.forEach(function (c) {
                                    var b = c.getProcessedData(!0); b = c.getExtremes(b.yData, !0); r || (r = { startMin: Number.MAX_VALUE, startMax: -Number.MAX_VALUE }); Q(b.dataMin) && Q(b.dataMax) && (r.startMin = Math.min(U(c.options.threshold, Infinity), b.dataMin, r.startMin), r.startMax =
                                        Math.max(U(c.options.threshold, -Infinity), b.dataMax, r.startMax))
                                }); m = Math.min(U(r && r.startMin, n.dataMin), l ? n.min : b.toValue(b.toPixels(n.min) - b.minPixelPadding)); F = Math.max(U(r && r.startMax, n.dataMax), l ? n.max : b.toValue(b.toPixels(n.max) + b.minPixelPadding)); b.panningState = r; b.isOrdinal || (l = m - k, 0 < l && (q += l, k = m), l = q - F, 0 < l && (q = F, k -= l), b.series.length && k !== n.min && q !== n.max && k >= m && q <= F && (b.setExtremes(k, q, !1, !1, { trigger: "pan" }), !a.resetZoomButton && k !== m && q !== F && g.match("y") && (a.showResetZoom(), b.displayBtn =
                                    !1), f = !0), e[d] = h)
                        }
                    }); X(e, function (c, b) { a[b] = c }); f && a.redraw(!1); P(a.container, { cursor: "move" })
                })
            }; return a
        }(); M(a.prototype, {
            callbacks: [], collectionsWithInit: { xAxis: [a.prototype.addAxis, [!0]], yAxis: [a.prototype.addAxis, [!1]], series: [a.prototype.addSeries] }, collectionsWithUpdate: ["xAxis", "yAxis", "series"], propsRequireDirtyBox: "backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "), propsRequireReflow: "margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),
            propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" ")
        }); ""; return a
    }); M(f, "Core/Legend/LegendSymbol.js", [f["Core/Utilities.js"]], function (a) {
        var f = a.merge, x = a.pick, E; (function (a) {
            a.drawLineMarker = function (a) {
                var y = this.legendItem = this.legendItem || {}, t = this.options, u = a.symbolWidth, p = a.symbolHeight, g = p / 2, b = this.chart.renderer, l = y.group; a = a.baseline - Math.round(.3 * a.fontMetrics.b); var n = {}, e = t.marker; this.chart.styledMode ||
                    (n = { "stroke-width": t.lineWidth || 0 }, t.dashStyle && (n.dashstyle = t.dashStyle)); y.line = b.path([["M", 0, a], ["L", u, a]]).addClass("highcharts-graph").attr(n).add(l); e && !1 !== e.enabled && u && (t = Math.min(x(e.radius, g), g), 0 === this.symbol.indexOf("url") && (e = f(e, { width: p, height: p }), t = 0), y.symbol = y = b.symbol(this.symbol, u / 2 - t, a - t, 2 * t, 2 * t, e).addClass("highcharts-point").add(l), y.isMarker = !0)
            }; a.drawRectangle = function (a, f) {
                f = f.legendItem || {}; var t = a.symbolHeight, u = a.options.squareSymbol; f.symbol = this.chart.renderer.rect(u ?
                    (a.symbolWidth - t) / 2 : 0, a.baseline - t + 1, u ? t : a.symbolWidth, t, x(a.options.symbolRadius, t / 2)).addClass("highcharts-point").attr({ zIndex: 3 }).add(f.group)
            }
        })(E || (E = {})); return E
    }); M(f, "Core/Series/SeriesDefaults.js", [], function () {
        return {
            lineWidth: 2, allowPointSelect: !1, crisp: !0, showCheckbox: !1, animation: { duration: 1E3 }, events: {}, marker: {
                enabledThreshold: 2, lineColor: "#ffffff", lineWidth: 0, radius: 4, states: {
                    normal: { animation: !0 }, hover: { animation: { duration: 50 }, enabled: !0, radiusPlus: 2, lineWidthPlus: 1 }, select: {
                        fillColor: "#cccccc",
                        lineColor: "#000000", lineWidth: 2
                    }
                }
            }, point: { events: {} }, dataLabels: { animation: {}, align: "center", defer: !0, formatter: function () { var a = this.series.chart.numberFormatter; return "number" !== typeof this.y ? "" : a(this.y, -1) }, padding: 5, style: { fontSize: "11px", fontWeight: "bold", color: "contrast", textOutline: "1px contrast" }, verticalAlign: "bottom", x: 0, y: 0 }, cropThreshold: 300, opacity: 1, pointRange: 0, softThreshold: !0, states: {
                normal: { animation: !0 }, hover: { animation: { duration: 50 }, lineWidthPlus: 1, marker: {}, halo: { size: 10, opacity: .25 } },
                select: { animation: { duration: 0 } }, inactive: { animation: { duration: 50 }, opacity: .2 }
            }, stickyTracking: !0, turboThreshold: 1E3, findNearestPointBy: "x"
        }
    }); M(f, "Core/Series/Series.js", [f["Core/Animation/AnimationUtilities.js"], f["Core/Defaults.js"], f["Core/Foundation.js"], f["Core/Globals.js"], f["Core/Legend/LegendSymbol.js"], f["Core/Series/Point.js"], f["Core/Series/SeriesDefaults.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Renderer/SVG/SVGElement.js"], f["Core/Utilities.js"]], function (a, f, x, E, B, A, J, t, u, p) {
        var g =
            a.animObject, b = a.setAnimation, l = f.defaultOptions, n = x.registerEventOptions, e = E.hasTouch, r = E.svg, G = E.win, y = t.seriesTypes, I = p.addEvent, N = p.arrayMax, w = p.arrayMin, m = p.clamp, v = p.cleanRecursively, h = p.correctFloat, d = p.defined, c = p.erase, q = p.error, k = p.extend, z = p.find, H = p.fireEvent, D = p.getNestedProperty, R = p.isArray, P = p.isNumber, W = p.isString, Y = p.merge, C = p.objectEach, L = p.pick, M = p.removeEvent, ca = p.splat, S = p.syncTimeout; a = function () {
                function a() {
                    this.zones = this.yAxis = this.xAxis = this.userOptions = this.tooltipOptions =
                        this.processedYData = this.processedXData = this.points = this.options = this.linkedSeries = this.index = this.eventsToUnbind = this.eventOptions = this.data = this.chart = this._i = void 0
                } a.prototype.init = function (c, b) {
                    H(this, "init", { options: b }); var a = this, d = c.series; this.eventsToUnbind = []; a.chart = c; a.options = a.setOptions(b); b = a.options; a.linkedSeries = []; a.bindAxes(); k(a, { name: b.name, state: "", visible: !1 !== b.visible, selected: !0 === b.selected }); n(this, b); var e = b.events; if (e && e.click || b.point && b.point.events && b.point.events.click ||
                        b.allowPointSelect) c.runTrackerClick = !0; a.getColor(); a.getSymbol(); a.parallelArrays.forEach(function (c) { a[c + "Data"] || (a[c + "Data"] = []) }); a.isCartesian && (c.hasCartesianSeries = !0); var g; d.length && (g = d[d.length - 1]); a._i = L(g && g._i, -1) + 1; a.opacity = a.options.opacity; c.orderSeries(this.insert(d)); b.dataSorting && b.dataSorting.enabled ? a.setDataSortingOptions() : a.points || a.data || a.setData(b.data, !1); H(this, "afterInit")
                }; a.prototype.is = function (c) { return y[c] && this instanceof y[c] }; a.prototype.insert = function (c) {
                    var b =
                        this.options.index, a; if (P(b)) { for (a = c.length; a--;)if (b >= L(c[a].options.index, c[a]._i)) { c.splice(a + 1, 0, this); break } -1 === a && c.unshift(this); a += 1 } else c.push(this); return L(a, c.length - 1)
                }; a.prototype.bindAxes = function () {
                    var c = this, b = c.options, a = c.chart, d; H(this, "bindAxes", null, function () {
                        (c.axisTypes || []).forEach(function (e) {
                            var g = 0; a[e].forEach(function (a) {
                                d = a.options; if (b[e] === g && !d.isInternal || "undefined" !== typeof b[e] && b[e] === d.id || "undefined" === typeof b[e] && 0 === d.index) c.insert(a.series), c[e] = a,
                                    a.isDirty = !0; d.isInternal || g++
                            }); c[e] || c.optionalAxis === e || q(18, !0, a)
                        })
                    }); H(this, "afterBindAxes")
                }; a.prototype.updateParallelArrays = function (c, b) { var a = c.series, d = arguments, e = P(b) ? function (d) { var e = "y" === d && a.toYData ? a.toYData(c) : c[d]; a[d + "Data"][b] = e } : function (c) { Array.prototype[b].apply(a[c + "Data"], Array.prototype.slice.call(d, 2)) }; a.parallelArrays.forEach(e) }; a.prototype.hasData = function () {
                    return this.visible && "undefined" !== typeof this.dataMax && "undefined" !== typeof this.dataMin || this.visible &&
                        this.yData && 0 < this.yData.length
                }; a.prototype.autoIncrement = function (c) { var b = this.options, a = b.pointIntervalUnit, d = b.relativeXValue, e = this.chart.time, g = this.xIncrement, f; g = L(g, b.pointStart, 0); this.pointInterval = f = L(this.pointInterval, b.pointInterval, 1); d && P(c) && (f *= c); a && (b = new e.Date(g), "day" === a ? e.set("Date", b, e.get("Date", b) + f) : "month" === a ? e.set("Month", b, e.get("Month", b) + f) : "year" === a && e.set("FullYear", b, e.get("FullYear", b) + f), f = b.getTime() - g); if (d && P(c)) return g + f; this.xIncrement = g + f; return g };
                a.prototype.setDataSortingOptions = function () { var c = this.options; k(this, { requireSorting: !1, sorted: !1, enabledDataSorting: !0, allowDG: !1 }); d(c.pointRange) || (c.pointRange = 1) }; a.prototype.setOptions = function (c) {
                    var b = this.chart, a = b.options, e = a.plotOptions, g = b.userOptions || {}; c = Y(c); b = b.styledMode; var f = { plotOptions: e, userOptions: c }; H(this, "setOptions", f); var h = f.plotOptions[this.type], k = g.plotOptions || {}; this.userOptions = f.userOptions; g = Y(h, e.series, g.plotOptions && g.plotOptions[this.type], c); this.tooltipOptions =
                        Y(l.tooltip, l.plotOptions.series && l.plotOptions.series.tooltip, l.plotOptions[this.type].tooltip, a.tooltip.userOptions, e.series && e.series.tooltip, e[this.type].tooltip, c.tooltip); this.stickyTracking = L(c.stickyTracking, k[this.type] && k[this.type].stickyTracking, k.series && k.series.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? !0 : g.stickyTracking); null === h.marker && delete g.marker; this.zoneAxis = g.zoneAxis; e = this.zones = (g.zones || []).slice(); !g.negativeColor && !g.negativeFillColor || g.zones ||
                            (a = { value: g[this.zoneAxis + "Threshold"] || g.threshold || 0, className: "highcharts-negative" }, b || (a.color = g.negativeColor, a.fillColor = g.negativeFillColor), e.push(a)); e.length && d(e[e.length - 1].value) && e.push(b ? {} : { color: this.color, fillColor: this.fillColor }); H(this, "afterSetOptions", { options: g }); return g
                }; a.prototype.getName = function () { return L(this.options.name, "Series " + (this.index + 1)) }; a.prototype.getCyclic = function (c, b, a) {
                    var e = this.chart, g = this.userOptions, f = c + "Index", h = c + "Counter", k = a ? a.length : L(e.options.chart[c +
                        "Count"], e[c + "Count"]); if (!b) { var l = L(g[f], g["_" + f]); d(l) || (e.series.length || (e[h] = 0), g["_" + f] = l = e[h] % k, e[h] += 1); a && (b = a[l]) } "undefined" !== typeof l && (this[f] = l); this[c] = b
                }; a.prototype.getColor = function () { this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.color = "#cccccc" : this.getCyclic("color", this.options.color || l.plotOptions[this.type].color, this.chart.options.colors) }; a.prototype.getPointsCollection = function () { return (this.hasGroupedData ? this.points : this.data) || [] }; a.prototype.getSymbol =
                    function () { this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols) }; a.prototype.findPointIndex = function (c, b) {
                        var a = c.id, d = c.x, e = this.points, g = this.options.dataSorting, f, h; if (a) g = this.chart.get(a), g instanceof A && (f = g); else if (this.linkedParent || this.enabledDataSorting || this.options.relativeXValue) if (f = function (b) { return !b.touched && b.index === c.index }, g && g.matchByName ? f = function (b) { return !b.touched && b.name === c.name } : this.options.relativeXValue && (f = function (b) {
                            return !b.touched &&
                                b.options.x === c.x
                        }), f = z(e, f), !f) return; if (f) { var k = f && f.index; "undefined" !== typeof k && (h = !0) } "undefined" === typeof k && P(d) && (k = this.xData.indexOf(d, b)); -1 !== k && "undefined" !== typeof k && this.cropped && (k = k >= this.cropStart ? k - this.cropStart : k); !h && P(k) && e[k] && e[k].touched && (k = void 0); return k
                    }; a.prototype.updateData = function (c, b) {
                        var a = this.options, e = a.dataSorting, g = this.points, f = [], h = this.requireSorting, k = c.length === g.length, l, m, n, q = !0; this.xIncrement = null; c.forEach(function (c, b) {
                            var m = d(c) && this.pointClass.prototype.optionsToObject.call({ series: this },
                                c) || {}, q = m.x; if (m.id || P(q)) { if (m = this.findPointIndex(m, n), -1 === m || "undefined" === typeof m ? f.push(c) : g[m] && c !== a.data[m] ? (g[m].update(c, !1, null, !1), g[m].touched = !0, h && (n = m + 1)) : g[m] && (g[m].touched = !0), !k || b !== m || e && e.enabled || this.hasDerivedData) l = !0 } else f.push(c)
                        }, this); if (l) for (c = g.length; c--;)(m = g[c]) && !m.touched && m.remove && m.remove(!1, b); else !k || e && e.enabled ? q = !1 : (c.forEach(function (c, b) { c !== g[b].y && g[b].update && g[b].update(c, !1, null, !1) }), f.length = 0); g.forEach(function (c) { c && (c.touched = !1) }); if (!q) return !1;
                        f.forEach(function (c) { this.addPoint(c, !1, null, null, !1) }, this); null === this.xIncrement && this.xData && this.xData.length && (this.xIncrement = N(this.xData), this.autoIncrement()); return !0
                    }; a.prototype.setData = function (c, b, a, d) {
                        void 0 === b && (b = !0); var e = this, g = e.points, f = g && g.length || 0, h = e.options, k = e.chart, l = h.dataSorting, m = e.xAxis, n = h.turboThreshold, p = this.xData, r = this.yData, F = e.pointArrayMap; F = F && F.length; var v = h.keys, z, w = 0, t = 1, u = null; if (!k.options.chart.allowMutatingData) {
                            h.data && delete e.options.data; e.userOptions.data &&
                                delete e.userOptions.data; var O = Y(!0, c)
                        } c = O || c || []; O = c.length; l && l.enabled && (c = this.sortData(c)); k.options.chart.allowMutatingData && !1 !== d && O && f && !e.cropped && !e.hasGroupedData && e.visible && !e.boosted && (z = this.updateData(c, a)); if (!z) {
                            e.xIncrement = null; e.colorCounter = 0; this.parallelArrays.forEach(function (c) { e[c + "Data"].length = 0 }); if (n && O > n) if (u = e.getFirstValidPoint(c), P(u)) for (a = 0; a < O; a++)p[a] = this.autoIncrement(), r[a] = c[a]; else if (R(u)) if (F) if (u.length === F) for (a = 0; a < O; a++)p[a] = this.autoIncrement(),
                                r[a] = c[a]; else for (a = 0; a < O; a++)d = c[a], p[a] = d[0], r[a] = d.slice(1, F + 1); else if (v && (w = v.indexOf("x"), t = v.indexOf("y"), w = 0 <= w ? w : 0, t = 0 <= t ? t : 1), 1 === u.length && (t = 0), w === t) for (a = 0; a < O; a++)p[a] = this.autoIncrement(), r[a] = c[a][t]; else for (a = 0; a < O; a++)d = c[a], p[a] = d[w], r[a] = d[t]; else q(12, !1, k); else for (a = 0; a < O; a++)"undefined" !== typeof c[a] && (d = { series: e }, e.pointClass.prototype.applyOptions.apply(d, [c[a]]), e.updateParallelArrays(d, a)); r && W(r[0]) && q(14, !0, k); e.data = []; e.options.data = e.userOptions.data = c; for (a = f; a--;)g[a] &&
                                    g[a].destroy && g[a].destroy(); m && (m.minRange = m.userMinRange); e.isDirty = k.isDirtyBox = !0; e.isDirtyData = !!g; a = !1
                        } "point" === h.legendType && (this.processData(), this.generatePoints()); b && k.redraw(a)
                    }; a.prototype.sortData = function (c) {
                        var b = this, a = b.options.dataSorting.sortKey || "y", e = function (c, b) { return d(b) && c.pointClass.prototype.optionsToObject.call({ series: c }, b) || {} }; c.forEach(function (a, d) { c[d] = e(b, a); c[d].index = d }, this); c.concat().sort(function (c, b) { c = D(a, c); b = D(a, b); return b < c ? -1 : b > c ? 1 : 0 }).forEach(function (c,
                            b) { c.x = b }, this); b.linkedSeries && b.linkedSeries.forEach(function (b) { var a = b.options, d = a.data; a.dataSorting && a.dataSorting.enabled || !d || (d.forEach(function (a, g) { d[g] = e(b, a); c[g] && (d[g].x = c[g].x, d[g].index = g) }), b.setData(d, !1)) }); return c
                    }; a.prototype.getProcessedData = function (c) {
                        var b = this.xAxis, a = this.options, d = a.cropThreshold, e = c || this.getExtremesFromAll || a.getExtremesFromAll, g = this.isCartesian; c = b && b.val2lin; a = !(!b || !b.logarithmic); var f = 0, h = this.xData, k = this.yData, l = this.requireSorting; var m = !1;
                        var n = h.length; if (b) { m = b.getExtremes(); var p = m.min; var r = m.max; m = !(!b.categories || b.names.length) } if (g && this.sorted && !e && (!d || n > d || this.forceCrop)) if (h[n - 1] < p || h[0] > r) h = [], k = []; else if (this.yData && (h[0] < p || h[n - 1] > r)) { var F = this.cropData(this.xData, this.yData, p, r); h = F.xData; k = F.yData; f = F.start; F = !0 } for (d = h.length || 1; --d;)if (b = a ? c(h[d]) - c(h[d - 1]) : h[d] - h[d - 1], 0 < b && ("undefined" === typeof v || b < v)) var v = b; else 0 > b && l && !m && (q(15, !1, this.chart), l = !1); return { xData: h, yData: k, cropped: F, cropStart: f, closestPointRange: v }
                    };
                a.prototype.processData = function (c) { var b = this.xAxis; if (this.isCartesian && !this.isDirty && !b.isDirty && !this.yAxis.isDirty && !c) return !1; c = this.getProcessedData(); this.cropped = c.cropped; this.cropStart = c.cropStart; this.processedXData = c.xData; this.processedYData = c.yData; this.closestPointRange = this.basePointRange = c.closestPointRange; H(this, "afterProcessData") }; a.prototype.cropData = function (c, b, a, d, e) {
                    var g = c.length, f, h = 0, k = g; e = L(e, this.cropShoulder); for (f = 0; f < g; f++)if (c[f] >= a) { h = Math.max(0, f - e); break } for (a =
                        f; a < g; a++)if (c[a] > d) { k = a + e; break } return { xData: c.slice(h, k), yData: b.slice(h, k), start: h, end: k }
                }; a.prototype.generatePoints = function () {
                    var c = this.options, b = this.processedData || c.data, a = this.processedXData, d = this.processedYData, e = this.pointClass, g = a.length, f = this.cropStart || 0, h = this.hasGroupedData, l = c.keys, m = []; c = c.dataGrouping && c.dataGrouping.groupAll ? f : 0; var n, q, p = this.data; if (!p && !h) { var r = []; r.length = b.length; p = this.data = r } l && h && (this.options.keys = !1); for (q = 0; q < g; q++) {
                        r = f + q; if (h) {
                            var v = (new e).init(this,
                                [a[q]].concat(ca(d[q]))); v.dataGroup = this.groupMap[c + q]; v.dataGroup.options && (v.options = v.dataGroup.options, k(v, v.dataGroup.options), delete v.dataLabels)
                        } else (v = p[r]) || "undefined" === typeof b[r] || (p[r] = v = (new e).init(this, b[r], a[q])); v && (v.index = h ? c + q : r, m[q] = v)
                    } this.options.keys = l; if (p && (g !== (n = p.length) || h)) for (q = 0; q < n; q++)q !== f || h || (q += g), p[q] && (p[q].destroyElements(), p[q].plotX = void 0); this.data = p; this.points = m; H(this, "afterGeneratePoints")
                }; a.prototype.getXExtremes = function (c) {
                    return {
                        min: w(c),
                        max: N(c)
                    }
                }; a.prototype.getExtremes = function (c, b) {
                    var a = this.xAxis, d = this.yAxis, e = this.processedXData || this.xData, g = [], f = this.requireSorting ? this.cropShoulder : 0; d = d ? d.positiveValuesOnly : !1; var h, k = 0, l = 0, m = 0; c = c || this.stackedYData || this.processedYData || []; var n = c.length; if (a) { var q = a.getExtremes(); k = q.min; l = q.max } for (h = 0; h < n; h++) {
                        var p = e[h]; q = c[h]; var r = (P(q) || R(q)) && (q.length || 0 < q || !d); p = b || this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || !a || (e[h + f] || p) >= k && (e[h - f] || p) <= l; if (r &&
                            p) if (r = q.length) for (; r--;)P(q[r]) && (g[m++] = q[r]); else g[m++] = q
                    } c = { activeYData: g, dataMin: w(g), dataMax: N(g) }; H(this, "afterGetExtremes", { dataExtremes: c }); return c
                }; a.prototype.applyExtremes = function () { var c = this.getExtremes(); this.dataMin = c.dataMin; this.dataMax = c.dataMax; return c }; a.prototype.getFirstValidPoint = function (c) { for (var b = c.length, a = 0, d = null; null === d && a < b;)d = c[a], a++; return d }; a.prototype.translate = function () {
                    this.processedXData || this.processData(); this.generatePoints(); var c = this.options,
                        b = c.stacking, a = this.xAxis, e = a.categories, g = this.enabledDataSorting, f = this.yAxis, k = this.points, l = k.length, n = this.pointPlacementToXValue(), q = !!n, p = c.threshold, r = c.startFromThreshold ? p : 0, v = this.zoneAxis || "y", w, z, t = Number.MAX_VALUE; for (w = 0; w < l; w++) {
                            var u = k[w], D = u.x, C = void 0, G = void 0, y = u.y, x = u.low, I = b && f.stacking && f.stacking.stacks[(this.negStacks && y < (r ? 0 : p) ? "-" : "") + this.stackKey]; if (f.positiveValuesOnly && !f.validatePositiveValue(y) || a.positiveValuesOnly && !a.validatePositiveValue(D)) u.isNull = !0; u.plotX =
                                z = h(m(a.translate(D, 0, 0, 0, 1, n, "flags" === this.type), -1E5, 1E5)); if (b && this.visible && I && I[D]) { var B = this.getStackIndicator(B, D, this.index); u.isNull || (C = I[D], G = C.points[B.key]) } R(G) && (x = G[0], y = G[1], x === r && B.key === I[D].base && (x = L(P(p) && p, f.min)), f.positiveValuesOnly && 0 >= x && (x = null), u.total = u.stackTotal = C.total, u.percentage = C.total && u.y / C.total * 100, u.stackY = y, this.irregularWidths || C.setOffset(this.pointXOffset || 0, this.barW || 0)); u.yBottom = d(x) ? m(f.translate(x, 0, 1, 0, 1), -1E5, 1E5) : null; this.dataModify && (y =
                                    this.dataModify.modifyValue(y, w)); u.plotY = void 0; P(y) && (C = f.translate(y, !1, !0, !1, !0), "undefined" !== typeof C && (u.plotY = m(C, -1E5, 1E5))); u.isInside = this.isPointInside(u); u.clientX = q ? h(a.translate(D, 0, 0, 0, 1, n)) : z; u.negative = u[v] < (c[v + "Threshold"] || p || 0); u.category = L(e && e[u.x], u.x); if (!u.isNull && !1 !== u.visible) { "undefined" !== typeof K && (t = Math.min(t, Math.abs(z - K))); var K = z } u.zone = this.zones.length ? u.getZone() : void 0; !u.graphic && this.group && g && (u.isNew = !0)
                        } this.closestPointRangePx = t; H(this, "afterTranslate")
                };
                a.prototype.getValidPoints = function (c, b, a) { var d = this.chart; return (c || this.points || []).filter(function (c) { return b && !d.isInsidePlot(c.plotX, c.plotY, { inverted: d.inverted }) ? !1 : !1 !== c.visible && (a || !c.isNull) }) }; a.prototype.getClipBox = function () { var c = this.chart, b = this.xAxis, a = this.yAxis, d = Y(c.clipBox); b && b.len !== c.plotSizeX && (d.width = b.len); a && a.len !== c.plotSizeY && (d.height = a.len); return d }; a.prototype.getSharedClipKey = function () {
                    return this.sharedClipKey = (this.options.xAxis || 0) + "," + (this.options.yAxis ||
                        0)
                }; a.prototype.setClip = function () { var c = this.chart, b = this.group, a = this.markerGroup, d = c.sharedClips; c = c.renderer; var e = this.getClipBox(), g = this.getSharedClipKey(), f = d[g]; f ? f.animate(e) : d[g] = f = c.clipRect(e); b && b.clip(!1 === this.options.clip ? void 0 : f); a && a.clip() }; a.prototype.animate = function (c) {
                    var b = this.chart, a = this.group, d = this.markerGroup, e = b.inverted, f = g(this.options.animation), h = [this.getSharedClipKey(), f.duration, f.easing, f.defer].join(), k = b.sharedClips[h], l = b.sharedClips[h + "m"]; if (c && a) f = this.getClipBox(),
                        k ? k.attr("height", f.height) : (f.width = 0, e && (f.x = b.plotHeight), k = b.renderer.clipRect(f), b.sharedClips[h] = k, l = b.renderer.clipRect({ x: e ? (b.plotSizeX || 0) + 99 : -99, y: e ? -b.plotLeft : -b.plotTop, width: 99, height: e ? b.chartWidth : b.chartHeight }), b.sharedClips[h + "m"] = l), a.clip(k), d && d.clip(l); else if (k && !k.hasClass("highcharts-animating")) {
                            b = this.getClipBox(); var m = f.step; d && d.element.childNodes.length && (f.step = function (c, b) { m && m.apply(b, arguments); l && l.element && l.attr(b.prop, "width" === b.prop ? c + 99 : c) }); k.addClass("highcharts-animating").animate(b,
                                f)
                        }
                }; a.prototype.afterAnimate = function () { var c = this; this.setClip(); C(this.chart.sharedClips, function (b, a, d) { b && !c.chart.container.querySelector('[clip-path="url(#'.concat(b.id, ')"]')) && (b.destroy(), delete d[a]) }); this.finishedAnimating = !0; H(this, "afterAnimate") }; a.prototype.drawPoints = function (c) {
                    void 0 === c && (c = this.points); var b = this.chart, a = this.options.marker, d = this[this.specialGroup] || this.markerGroup, e = this.xAxis, g = L(a.enabled, !e || e.isRadial ? !0 : null, this.closestPointRangePx >= a.enabledThreshold *
                        a.radius), f, h; if (!1 !== a.enabled || this._hasPointMarkers) for (f = 0; f < c.length; f++) {
                            var k = c[f]; var l = (h = k.graphic) ? "animate" : "attr"; var m = k.marker || {}; var n = !!k.marker; if ((g && "undefined" === typeof m.enabled || m.enabled) && !k.isNull && !1 !== k.visible) {
                                var q = L(m.symbol, this.symbol, "rect"); var p = this.markerAttribs(k, k.selected && "select"); this.enabledDataSorting && (k.startXPos = e.reversed ? -(p.width || 0) : e.width); var r = !1 !== k.isInside; h ? h[r ? "show" : "hide"](r).animate(p) : r && (0 < (p.width || 0) || k.hasImage) && (k.graphic = h =
                                    b.renderer.symbol(q, p.x, p.y, p.width, p.height, n ? m : a).add(d), this.enabledDataSorting && b.hasRendered && (h.attr({ x: k.startXPos }), l = "animate")); h && "animate" === l && h[r ? "show" : "hide"](r).animate(p); if (h && !b.styledMode) h[l](this.pointAttribs(k, k.selected && "select")); h && h.addClass(k.getClassName(), !0)
                            } else h && (k.graphic = h.destroy())
                        }
                }; a.prototype.markerAttribs = function (c, b) {
                    var a = this.options, d = a.marker, e = c.marker || {}, g = e.symbol || d.symbol, f = L(e.radius, d && d.radius); b && (d = d.states[b], b = e.states && e.states[b], f =
                        L(b && b.radius, d && d.radius, f && f + (d && d.radiusPlus || 0))); c.hasImage = g && 0 === g.indexOf("url"); c.hasImage && (f = 0); c = P(f) ? { x: a.crisp ? Math.floor(c.plotX - f) : c.plotX - f, y: c.plotY - f } : {}; f && (c.width = c.height = 2 * f); return c
                }; a.prototype.pointAttribs = function (c, b) {
                    var a = this.options.marker, d = c && c.options, e = d && d.marker || {}, g = d && d.color, f = c && c.color, h = c && c.zone && c.zone.color, k = this.color; c = L(e.lineWidth, a.lineWidth); d = 1; k = g || h || f || k; g = e.fillColor || a.fillColor || k; f = e.lineColor || a.lineColor || k; b = b || "normal"; a = a.states[b] ||
                        {}; b = e.states && e.states[b] || {}; c = L(b.lineWidth, a.lineWidth, c + L(b.lineWidthPlus, a.lineWidthPlus, 0)); g = b.fillColor || a.fillColor || g; f = b.lineColor || a.lineColor || f; d = L(b.opacity, a.opacity, d); return { stroke: f, "stroke-width": c, fill: g, opacity: d }
                }; a.prototype.destroy = function (b) {
                    var a = this, d = a.chart, e = /AppleWebKit\/533/.test(G.navigator.userAgent), g = a.data || [], f, h, k, l; H(a, "destroy", { keepEventsForUpdate: b }); this.removeEvents(b); (a.axisTypes || []).forEach(function (b) {
                        (l = a[b]) && l.series && (c(l.series, a), l.isDirty =
                            l.forceRedraw = !0)
                    }); a.legendItem && a.chart.legend.destroyItem(a); for (h = g.length; h--;)(k = g[h]) && k.destroy && k.destroy(); a.clips && a.clips.forEach(function (c) { return c.destroy() }); p.clearTimeout(a.animationTimeout); C(a, function (c, b) { c instanceof u && !c.survive && (f = e && "group" === b ? "hide" : "destroy", c[f]()) }); d.hoverSeries === a && (d.hoverSeries = void 0); c(d.series, a); d.orderSeries(); C(a, function (c, d) { b && "hcEvents" === d || delete a[d] })
                }; a.prototype.applyZones = function () {
                    var c = this, b = this.chart, a = b.renderer, d = this.zones,
                    e = this.clips || [], g = this.graph, f = this.area, h = Math.max(b.plotWidth, b.plotHeight), k = this[(this.zoneAxis || "y") + "Axis"], l = b.inverted, n, q, p, r, v, w, z, t, u = !1; if (d.length && (g || f) && k && "undefined" !== typeof k.min) {
                        var D = k.reversed; var C = k.horiz; g && !this.showLine && g.hide(); f && f.hide(); var H = k.getExtremes(); d.forEach(function (d, F) {
                            n = D ? C ? b.plotWidth : 0 : C ? 0 : k.toPixels(H.min) || 0; n = m(L(q, n), 0, h); q = m(Math.round(k.toPixels(L(d.value, H.max), !0) || 0), 0, h); u && (n = q = k.toPixels(H.max)); r = Math.abs(n - q); v = Math.min(n, q); w = Math.max(n,
                                q); k.isXAxis ? (p = { x: l ? w : v, y: 0, width: r, height: h }, C || (p.x = b.plotHeight - p.x)) : (p = { x: 0, y: l ? w : v, width: h, height: r }, C && (p.y = b.plotWidth - p.y)); l && a.isVML && (p = k.isXAxis ? { x: 0, y: D ? v : w, height: p.width, width: b.chartWidth } : { x: p.y - b.plotLeft - b.spacingBox.x, y: 0, width: p.height, height: b.chartHeight }); e[F] ? e[F].animate(p) : e[F] = a.clipRect(p); z = c["zone-area-" + F]; t = c["zone-graph-" + F]; g && t && t.clip(e[F]); f && z && z.clip(e[F]); u = d.value > H.max; c.resetZones && 0 === q && (q = void 0)
                        }); this.clips = e
                    } else c.visible && (g && g.show(), f && f.show())
                };
                a.prototype.invertGroups = function (c) { function b() { ["group", "markerGroup"].forEach(function (b) { a[b] && (d.renderer.isVML && a[b].attr({ width: a.yAxis.len, height: a.xAxis.len }), a[b].width = a.yAxis.len, a[b].height = a.xAxis.len, a[b].invert(a.isRadialSeries ? !1 : c)) }) } var a = this, d = a.chart; a.xAxis && (a.eventsToUnbind.push(I(d, "resize", b)), b(), a.invertGroups = b) }; a.prototype.plotGroup = function (c, b, a, e, g) {
                    var f = this[c], h = !f; a = { visibility: a, zIndex: e || .1 }; "undefined" === typeof this.opacity || this.chart.styledMode || "inactive" ===
                        this.state || (a.opacity = this.opacity); h && (this[c] = f = this.chart.renderer.g().add(g)); f.addClass("highcharts-" + b + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (d(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (f.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0); f.attr(a)[h ? "attr" : "animate"](this.getPlotBox()); return f
                }; a.prototype.getPlotBox = function () {
                    var c = this.chart, b = this.xAxis, a = this.yAxis; c.inverted && (b = a, a = this.xAxis);
                    return { translateX: b ? b.left : c.plotLeft, translateY: a ? a.top : c.plotTop, scaleX: 1, scaleY: 1 }
                }; a.prototype.removeEvents = function (c) { c || M(this); this.eventsToUnbind.length && (this.eventsToUnbind.forEach(function (c) { c() }), this.eventsToUnbind.length = 0) }; a.prototype.render = function () {
                    var c = this, b = c.chart, a = c.options, d = g(a.animation), e = c.visible ? "inherit" : "hidden", f = a.zIndex, h = c.hasRendered, k = b.seriesGroup, l = b.inverted; b = !c.finishedAnimating && b.renderer.isSVG ? d.duration : 0; H(this, "render"); var m = c.plotGroup("group",
                        "series", e, f, k); c.markerGroup = c.plotGroup("markerGroup", "markers", e, f, k); !1 !== a.clip && c.setClip(); c.animate && b && c.animate(!0); m.inverted = L(c.invertible, c.isCartesian) ? l : !1; c.drawGraph && (c.drawGraph(), c.applyZones()); c.visible && c.drawPoints(); c.drawDataLabels && c.drawDataLabels(); c.redrawPoints && c.redrawPoints(); c.drawTracker && !1 !== c.options.enableMouseTracking && c.drawTracker(); c.invertGroups(l); c.animate && b && c.animate(); h || (b && d.defer && (b += d.defer), c.animationTimeout = S(function () { c.afterAnimate() },
                            b || 0)); c.isDirty = !1; c.hasRendered = !0; H(c, "afterRender")
                }; a.prototype.redraw = function () { var c = this.chart, b = this.isDirty || this.isDirtyData, a = this.group, d = this.xAxis, e = this.yAxis; a && (c.inverted && a.attr({ width: c.plotWidth, height: c.plotHeight }), a.animate({ translateX: L(d && d.left, c.plotLeft), translateY: L(e && e.top, c.plotTop) })); this.translate(); this.render(); b && delete this.kdTree }; a.prototype.searchPoint = function (c, b) {
                    var a = this.xAxis, d = this.yAxis, e = this.chart.inverted; return this.searchKDTree({
                        clientX: e ?
                            a.len - c.chartY + a.pos : c.chartX - a.pos, plotY: e ? d.len - c.chartX + d.pos : c.chartY - d.pos
                    }, b, c)
                }; a.prototype.buildKDTree = function (c) {
                    function b(c, d, e) { var g = c && c.length; if (g) { var f = a.kdAxisArray[d % e]; c.sort(function (c, b) { return c[f] - b[f] }); g = Math.floor(g / 2); return { point: c[g], left: b(c.slice(0, g), d + 1, e), right: b(c.slice(g + 1), d + 1, e) } } } this.buildingKdTree = !0; var a = this, d = -1 < a.options.findNearestPointBy.indexOf("y") ? 2 : 1; delete a.kdTree; S(function () {
                        a.kdTree = b(a.getValidPoints(null, !a.directTouch), d, d); a.buildingKdTree =
                            !1
                    }, a.options.kdNow || c && "touchstart" === c.type ? 0 : 1)
                }; a.prototype.searchKDTree = function (c, b, a) {
                    function e(c, b, a, l) {
                        var m = b.point, n = g.kdAxisArray[a % l], q = m, p = d(c[f]) && d(m[f]) ? Math.pow(c[f] - m[f], 2) : null; var r = d(c[h]) && d(m[h]) ? Math.pow(c[h] - m[h], 2) : null; r = (p || 0) + (r || 0); m.dist = d(r) ? Math.sqrt(r) : Number.MAX_VALUE; m.distX = d(p) ? Math.sqrt(p) : Number.MAX_VALUE; n = c[n] - m[n]; r = 0 > n ? "left" : "right"; p = 0 > n ? "right" : "left"; b[r] && (r = e(c, b[r], a + 1, l), q = r[k] < q[k] ? r : m); b[p] && Math.sqrt(n * n) < q[k] && (c = e(c, b[p], a + 1, l), q = c[k] < q[k] ?
                            c : q); return q
                    } var g = this, f = this.kdAxisArray[0], h = this.kdAxisArray[1], k = b ? "distX" : "dist"; b = -1 < g.options.findNearestPointBy.indexOf("y") ? 2 : 1; this.kdTree || this.buildingKdTree || this.buildKDTree(a); if (this.kdTree) return e(c, this.kdTree, b, b)
                }; a.prototype.pointPlacementToXValue = function () { var c = this.options, b = c.pointRange, a = this.xAxis; c = c.pointPlacement; "between" === c && (c = a.reversed ? -.5 : .5); return P(c) ? c * (b || a.pointRange) : 0 }; a.prototype.isPointInside = function (c) {
                    var b = this.chart, a = this.xAxis, d = this.yAxis;
                    return "undefined" !== typeof c.plotY && "undefined" !== typeof c.plotX && 0 <= c.plotY && c.plotY <= (d ? d.len : b.plotHeight) && 0 <= c.plotX && c.plotX <= (a ? a.len : b.plotWidth)
                }; a.prototype.drawTracker = function () {
                    var c = this, b = c.options, a = b.trackByArea, d = [].concat(a ? c.areaPath : c.graphPath), g = c.chart, f = g.pointer, h = g.renderer, k = g.options.tooltip.snap, l = c.tracker, m = function (b) { if (g.hoverSeries !== c) c.onMouseOver() }, n = "rgba(192,192,192," + (r ? .0001 : .002) + ")"; l ? l.attr({ d: d }) : c.graph && (c.tracker = h.path(d).attr({
                        visibility: c.visible ?
                            "inherit" : "hidden", zIndex: 2
                    }).addClass(a ? "highcharts-tracker-area" : "highcharts-tracker-line").add(c.group), g.styledMode || c.tracker.attr({ "stroke-linecap": "round", "stroke-linejoin": "round", stroke: n, fill: a ? n : "none", "stroke-width": c.graph.strokeWidth() + (a ? 0 : 2 * k) }), [c.tracker, c.markerGroup, c.dataLabelsGroup].forEach(function (c) {
                        if (c && (c.addClass("highcharts-tracker").on("mouseover", m).on("mouseout", function (c) { f.onTrackerMouseOut(c) }), b.cursor && !g.styledMode && c.css({ cursor: b.cursor }), e)) c.on("touchstart",
                            m)
                    })); H(this, "afterDrawTracker")
                }; a.prototype.addPoint = function (c, b, a, d, e) {
                    var g = this.options, f = this.data, h = this.chart, k = this.xAxis; k = k && k.hasNames && k.names; var l = g.data, m = this.xData, n; b = L(b, !0); var q = { series: this }; this.pointClass.prototype.applyOptions.apply(q, [c]); var p = q.x; var r = m.length; if (this.requireSorting && p < m[r - 1]) for (n = !0; r && m[r - 1] > p;)r--; this.updateParallelArrays(q, "splice", r, 0, 0); this.updateParallelArrays(q, r); k && q.name && (k[p] = q.name); l.splice(r, 0, c); if (n || this.processedData) this.data.splice(r,
                        0, null), this.processData(); "point" === g.legendType && this.generatePoints(); a && (f[0] && f[0].remove ? f[0].remove(!1) : (f.shift(), this.updateParallelArrays(q, "shift"), l.shift())); !1 !== e && H(this, "addPoint", { point: q }); this.isDirtyData = this.isDirty = !0; b && h.redraw(d)
                }; a.prototype.removePoint = function (c, a, d) {
                    var e = this, g = e.data, f = g[c], h = e.points, k = e.chart, l = function () {
                        h && h.length === g.length && h.splice(c, 1); g.splice(c, 1); e.options.data.splice(c, 1); e.updateParallelArrays(f || { series: e }, "splice", c, 1); f && f.destroy();
                        e.isDirty = !0; e.isDirtyData = !0; a && k.redraw()
                    }; b(d, k); a = L(a, !0); f ? f.firePointEvent("remove", null, l) : l()
                }; a.prototype.remove = function (c, b, a, d) { function e() { g.destroy(d); f.isDirtyLegend = f.isDirtyBox = !0; f.linkSeries(); L(c, !0) && f.redraw(b) } var g = this, f = g.chart; !1 !== a ? H(g, "remove", null, e) : e() }; a.prototype.update = function (c, b) {
                    c = v(c, this.userOptions); H(this, "update", { options: c }); var a = this, d = a.chart, e = a.userOptions, g = a.initialType || a.type, f = d.options.plotOptions, h = y[g].prototype, l = a.finishedAnimating && { animation: !1 },
                        m = {}, n = ["eventOptions", "navigatorSeries", "baseSeries"], p = c.type || e.type || d.options.chart.type, r = !(this.hasDerivedData || p && p !== this.type || "undefined" !== typeof c.pointStart || "undefined" !== typeof c.pointInterval || "undefined" !== typeof c.relativeXValue || c.joinBy || c.mapData || a.hasOptionChanged("dataGrouping") || a.hasOptionChanged("pointStart") || a.hasOptionChanged("pointInterval") || a.hasOptionChanged("pointIntervalUnit") || a.hasOptionChanged("keys")); p = p || g; r && (n.push("data", "isDirtyData", "points", "processedData",
                            "processedXData", "processedYData", "xIncrement", "cropped", "_hasPointMarkers", "_hasPointLabels", "clips", "nodes", "layout", "level", "mapMap", "mapData", "minY", "maxY", "minX", "maxX"), !1 !== c.visible && n.push("area", "graph"), a.parallelArrays.forEach(function (c) { n.push(c + "Data") }), c.data && (c.dataSorting && k(a.options.dataSorting, c.dataSorting), this.setData(c.data, !1))); c = Y(e, l, { index: "undefined" === typeof e.index ? a.index : e.index, pointStart: L(f && f.series && f.series.pointStart, e.pointStart, a.xData[0]) }, !r && { data: a.options.data },
                                c); r && c.data && (c.data = a.options.data); n = ["group", "markerGroup", "dataLabelsGroup", "transformGroup", "shadowGroup"].concat(n); n.forEach(function (c) { n[c] = a[c]; delete a[c] }); f = !1; if (y[p]) { if (f = p !== a.type, a.remove(!1, !1, !1, !0), f) if (Object.setPrototypeOf) Object.setPrototypeOf(a, y[p].prototype); else { l = Object.hasOwnProperty.call(a, "hcEvents") && a.hcEvents; for (w in h) a[w] = void 0; k(a, y[p].prototype); l ? a.hcEvents = l : delete a.hcEvents } } else q(17, !0, d, { missingModuleFor: p }); n.forEach(function (c) { a[c] = n[c] }); a.init(d,
                                    c); if (r && this.points) { c = a.options; if (!1 === c.visible) m.graphic = 1, m.dataLabel = 1; else if (!a._hasPointLabels) { h = c.marker; var w = c.dataLabels; !h || !1 !== h.enabled && (e.marker && e.marker.symbol) === h.symbol || (m.graphic = 1); w && !1 === w.enabled && (m.dataLabel = 1) } e = 0; for (h = this.points; e < h.length; e++)(w = h[e]) && w.series && (w.resolveColor(), Object.keys(m).length && w.destroyElements(m), !1 === c.showInLegend && w.legendItem && d.legend.destroyItem(w)) } a.initialType = g; d.linkSeries(); f && a.linkedSeries.length && (a.isDirtyData = !0); H(this,
                                        "afterUpdate"); L(b, !0) && d.redraw(r ? void 0 : !1)
                }; a.prototype.setName = function (c) { this.name = this.options.name = this.userOptions.name = c; this.chart.isDirtyLegend = !0 }; a.prototype.hasOptionChanged = function (c) { var b = this.options[c], a = this.chart.options.plotOptions, d = this.userOptions[c]; return d ? b !== d : b !== L(a && a[this.type] && a[this.type][c], a && a.series && a.series[c], b) }; a.prototype.onMouseOver = function () {
                    var c = this.chart, b = c.hoverSeries; c.pointer.setHoverChartIndex(); if (b && b !== this) b.onMouseOut(); this.options.events.mouseOver &&
                        H(this, "mouseOver"); this.setState("hover"); c.hoverSeries = this
                }; a.prototype.onMouseOut = function () { var c = this.options, b = this.chart, a = b.tooltip, d = b.hoverPoint; b.hoverSeries = null; if (d) d.onMouseOut(); this && c.events.mouseOut && H(this, "mouseOut"); !a || this.stickyTracking || a.shared && !this.noSharedTooltip || a.hide(); b.series.forEach(function (c) { c.setState("", !0) }) }; a.prototype.setState = function (c, b) {
                    var a = this, d = a.options, e = a.graph, g = d.inactiveOtherPoints, f = d.states, h = L(f[c || "normal"] && f[c || "normal"].animation,
                        a.chart.options.chart.animation), k = d.lineWidth, l = 0, m = d.opacity; c = c || ""; if (a.state !== c && ([a.group, a.markerGroup, a.dataLabelsGroup].forEach(function (b) { b && (a.state && b.removeClass("highcharts-series-" + a.state), c && b.addClass("highcharts-series-" + c)) }), a.state = c, !a.chart.styledMode)) {
                            if (f[c] && !1 === f[c].enabled) return; c && (k = f[c].lineWidth || k + (f[c].lineWidthPlus || 0), m = L(f[c].opacity, m)); if (e && !e.dashstyle) for (d = { "stroke-width": k }, e.animate(d, h); a["zone-graph-" + l];)a["zone-graph-" + l].animate(d, h), l += 1; g ||
                                [a.group, a.markerGroup, a.dataLabelsGroup, a.labelBySeries].forEach(function (c) { c && c.animate({ opacity: m }, h) })
                        } b && g && a.points && a.setAllPointsToState(c || void 0)
                }; a.prototype.setAllPointsToState = function (c) { this.points.forEach(function (b) { b.setState && b.setState(c) }) }; a.prototype.setVisible = function (c, b) {
                    var a = this, d = a.chart, e = d.options.chart.ignoreHiddenSeries, g = a.visible, f = (a.visible = c = a.options.visible = a.userOptions.visible = "undefined" === typeof c ? !g : c) ? "show" : "hide";["group", "dataLabelsGroup", "markerGroup",
                        "tracker", "tt"].forEach(function (c) { if (a[c]) a[c][f]() }); if (d.hoverSeries === a || (d.hoverPoint && d.hoverPoint.series) === a) a.onMouseOut(); a.legendItem && d.legend.colorizeItem(a, c); a.isDirty = !0; a.options.stacking && d.series.forEach(function (c) { c.options.stacking && c.visible && (c.isDirty = !0) }); a.linkedSeries.forEach(function (b) { b.setVisible(c, !1) }); e && (d.isDirtyBox = !0); H(a, f); !1 !== b && d.redraw()
                }; a.prototype.show = function () { this.setVisible(!0) }; a.prototype.hide = function () { this.setVisible(!1) }; a.prototype.select =
                    function (c) { this.selected = c = this.options.selected = "undefined" === typeof c ? !this.selected : c; this.checkbox && (this.checkbox.checked = c); H(this, c ? "select" : "unselect") }; a.prototype.shouldShowTooltip = function (c, b, a) { void 0 === a && (a = {}); a.series = this; a.visiblePlotOnly = !0; return this.chart.isInsidePlot(c, b, a) }; a.defaultOptions = J; a.types = t.seriesTypes; a.registerType = t.registerSeriesType; return a
            }(); k(a.prototype, {
                axisTypes: ["xAxis", "yAxis"], coll: "series", colorCounter: 0, cropShoulder: 1, directTouch: !1, drawLegendSymbol: B.drawLineMarker,
                isCartesian: !0, kdAxisArray: ["clientX", "plotY"], parallelArrays: ["x", "y"], pointClass: A, requireSorting: !0, sorted: !0
            }); t.series = a; ""; ""; return a
    }); M(f, "Extensions/ScrollablePlotArea.js", [f["Core/Animation/AnimationUtilities.js"], f["Core/Axis/Axis.js"], f["Core/Chart/Chart.js"], f["Core/Series/Series.js"], f["Core/Renderer/RendererRegistry.js"], f["Core/Utilities.js"]], function (a, f, x, E, B, A) {
        var y = a.stop, t = A.addEvent, u = A.createElement, p = A.defined, g = A.merge, b = A.pick; t(x, "afterSetChartSize", function (b) {
            var a =
                this.options.chart.scrollablePlotArea, e = a && a.minWidth; a = a && a.minHeight; if (!this.renderer.forExport) {
                    if (e) { if (this.scrollablePixelsX = e = Math.max(0, e - this.chartWidth)) { this.scrollablePlotBox = this.renderer.scrollablePlotBox = g(this.plotBox); this.plotBox.width = this.plotWidth += e; this.inverted ? this.clipBox.height += e : this.clipBox.width += e; var l = { 1: { name: "right", value: e } } } } else a && (this.scrollablePixelsY = e = Math.max(0, a - this.chartHeight), p(e) && (this.scrollablePlotBox = this.renderer.scrollablePlotBox = g(this.plotBox),
                        this.plotBox.height = this.plotHeight += e, this.inverted ? this.clipBox.width += e : this.clipBox.height += e, l = { 2: { name: "bottom", value: e } })); l && !b.skipAxes && this.axes.forEach(function (b) { l[b.side] ? b.getPlotLinePath = function () { var a = l[b.side].name, e = this[a]; this[a] = e - l[b.side].value; var g = f.prototype.getPlotLinePath.apply(this, arguments); this[a] = e; return g } : (b.setAxisSize(), b.setAxisTranslation()) })
                }
        }); t(x, "render", function () {
            this.scrollablePixelsX || this.scrollablePixelsY ? (this.setUpScrolling && this.setUpScrolling(),
                this.applyFixed()) : this.fixedDiv && this.applyFixed()
        }); x.prototype.setUpScrolling = function () {
            var b = this, a = { WebkitOverflowScrolling: "touch", overflowX: "hidden", overflowY: "hidden" }; this.scrollablePixelsX && (a.overflowX = "auto"); this.scrollablePixelsY && (a.overflowY = "auto"); this.scrollingParent = u("div", { className: "highcharts-scrolling-parent" }, { position: "relative" }, this.renderTo); this.scrollingContainer = u("div", { className: "highcharts-scrolling" }, a, this.scrollingParent); t(this.scrollingContainer, "scroll",
                function () { b.pointer && delete b.pointer.chartPosition }); this.innerContainer = u("div", { className: "highcharts-inner-container" }, null, this.scrollingContainer); this.innerContainer.appendChild(this.container); this.setUpScrolling = null
        }; x.prototype.moveFixedElements = function () {
            var b = this.container, a = this.fixedRenderer, e = ".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-drillup-button .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" "),
            g; this.scrollablePixelsX && !this.inverted ? g = ".highcharts-yaxis" : this.scrollablePixelsX && this.inverted ? g = ".highcharts-xaxis" : this.scrollablePixelsY && !this.inverted ? g = ".highcharts-xaxis" : this.scrollablePixelsY && this.inverted && (g = ".highcharts-yaxis"); g && e.push("" + g + ":not(.highcharts-radial-axis)", "" + g + "-labels:not(.highcharts-radial-axis-labels)"); e.forEach(function (e) {
                [].forEach.call(b.querySelectorAll(e), function (b) {
                    (b.namespaceURI === a.SVG_NS ? a.box : a.box.parentNode).appendChild(b); b.style.pointerEvents =
                        "auto"
                })
            })
        }; x.prototype.applyFixed = function () {
            var a = !this.fixedDiv, g = this.options.chart, e = g.scrollablePlotArea, f = B.getRendererType(); a ? (this.fixedDiv = u("div", { className: "highcharts-fixed" }, { position: "absolute", overflow: "hidden", pointerEvents: "none", zIndex: (g.style && g.style.zIndex || 0) + 2, top: 0 }, null, !0), this.scrollingContainer && this.scrollingContainer.parentNode.insertBefore(this.fixedDiv, this.scrollingContainer), this.renderTo.style.overflow = "visible", this.fixedRenderer = g = new f(this.fixedDiv, this.chartWidth,
                this.chartHeight, this.options.chart.style), this.scrollableMask = g.path().attr({ fill: this.options.chart.backgroundColor || "#fff", "fill-opacity": b(e.opacity, .85), zIndex: -1 }).addClass("highcharts-scrollable-mask").add(), t(this, "afterShowResetZoom", this.moveFixedElements), t(this, "afterApplyDrilldown", this.moveFixedElements), t(this, "afterLayOutTitles", this.moveFixedElements)) : this.fixedRenderer.setSize(this.chartWidth, this.chartHeight); if (this.scrollableDirty || a) this.scrollableDirty = !1, this.moveFixedElements();
            g = this.chartWidth + (this.scrollablePixelsX || 0); f = this.chartHeight + (this.scrollablePixelsY || 0); y(this.container); this.container.style.width = g + "px"; this.container.style.height = f + "px"; this.renderer.boxWrapper.attr({ width: g, height: f, viewBox: [0, 0, g, f].join(" ") }); this.chartBackground.attr({ width: g, height: f }); this.scrollingContainer.style.height = this.chartHeight + "px"; a && (e.scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixelsX * e.scrollPositionX), e.scrollPositionY && (this.scrollingContainer.scrollTop =
                this.scrollablePixelsY * e.scrollPositionY)); f = this.axisOffset; a = this.plotTop - f[0] - 1; e = this.plotLeft - f[3] - 1; g = this.plotTop + this.plotHeight + f[2] + 1; f = this.plotLeft + this.plotWidth + f[1] + 1; var p = this.plotLeft + this.plotWidth - (this.scrollablePixelsX || 0), x = this.plotTop + this.plotHeight - (this.scrollablePixelsY || 0); a = this.scrollablePixelsX ? [["M", 0, a], ["L", this.plotLeft - 1, a], ["L", this.plotLeft - 1, g], ["L", 0, g], ["Z"], ["M", p, a], ["L", this.chartWidth, a], ["L", this.chartWidth, g], ["L", p, g], ["Z"]] : this.scrollablePixelsY ?
                    [["M", e, 0], ["L", e, this.plotTop - 1], ["L", f, this.plotTop - 1], ["L", f, 0], ["Z"], ["M", e, x], ["L", e, this.chartHeight], ["L", f, this.chartHeight], ["L", f, x], ["Z"]] : [["M", 0, 0]]; "adjustHeight" !== this.redrawTrigger && this.scrollableMask.attr({ d: a })
        }; t(f, "afterInit", function () { this.chart.scrollableDirty = !0 }); t(E, "show", function () { this.chart.scrollableDirty = !0 }); ""
    }); M(f, "Core/Axis/Stacking/StackItem.js", [f["Core/FormatUtilities.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (a, f, x) {
        var y = a.format,
        B = f.series, A = x.defined, J = x.destroyObjectProperties, t = x.isNumber, u = x.pick; a = function () {
            function a(a, b, f, n, e) { var g = a.chart.inverted; this.axis = a; this.isNegative = f; this.options = b = b || {}; this.x = n; this.cumulative = this.total = null; this.points = {}; this.hasValidPoints = !1; this.stack = e; this.rightCliff = this.leftCliff = 0; this.alignOptions = { align: b.align || (g ? f ? "left" : "right" : "center"), verticalAlign: b.verticalAlign || (g ? "middle" : f ? "bottom" : "top"), y: b.y, x: b.x }; this.textAlign = b.textAlign || (g ? f ? "right" : "left" : "center") }
            a.prototype.destroy = function () { J(this, this.axis) }; a.prototype.render = function (a) {
                var b = this.axis.chart, g = this.options, f = g.format; f = f ? y(f, this, b) : g.formatter.call(this); this.label ? this.label.attr({ text: f, visibility: "hidden" }) : (this.label = b.renderer.label(f, null, null, g.shape, null, null, g.useHTML, !1, "stack-labels"), f = { r: g.borderRadius || 0, text: f, rotation: g.rotation, padding: u(g.padding, 5), visibility: "hidden" }, b.styledMode || (f.fill = g.backgroundColor, f.stroke = g.borderColor, f["stroke-width"] = g.borderWidth,
                    this.label.css(g.style)), this.label.attr(f), this.label.added || this.label.add(a)); this.label.labelrank = b.plotSizeY
            }; a.prototype.setOffset = function (a, b, f, n, e) {
                var g = this.axis, l = g.chart; n = g.translate(g.stacking.usePercentage ? 100 : n ? n : this.total, 0, 0, 0, 1); f = g.translate(f ? f : 0); a = u(e, l.xAxis[0].translate(this.x)) + a; g = A(n) && this.getStackBox(l, this, a, n, b, Math.abs(n - f), g); b = this.label; f = this.isNegative; var p = this.textAlign; b && g && (a = b.getBBox(), e = b.padding, n = "justify" === u(this.options.overflow, "justify"), p = "left" ===
                    p ? l.inverted ? -e : e : "right" === p ? a.width : l.inverted && "center" === p ? a.width / 2 : l.inverted ? f ? a.width + e : -e : a.width / 2, f = l.inverted ? a.height / 2 : f ? -e : a.height, this.alignOptions.x = u(this.options.x, 0), this.alignOptions.y = u(this.options.y, 0), g.x -= p, g.y -= f, b.align(this.alignOptions, null, g), l.isInsidePlot(b.alignAttr.x + p - this.alignOptions.x, b.alignAttr.y + f - this.alignOptions.y) ? b.show() : (b.hide(), n = !1), n && B.prototype.justifyDataLabel.call(this.axis, b, this.alignOptions, b.alignAttr, a, g), b.attr({ x: b.alignAttr.x, y: b.alignAttr.y }),
                    u(!n && this.options.crop, !0) && ((l = t(b.x) && t(b.y) && l.isInsidePlot(b.x - e + b.width, b.y) && l.isInsidePlot(b.x + e, b.y)) || b.hide()))
            }; a.prototype.getStackBox = function (a, b, f, n, e, p, t) { var g = b.axis.reversed, l = a.inverted, r = t.height + t.pos - (l ? a.plotLeft : a.plotTop); b = b.isNegative && !g || !b.isNegative && g; return { x: l ? b ? n - t.right : n - p + t.pos - a.plotLeft : f + a.xAxis[0].transB - a.plotLeft, y: l ? t.height - f - e : b ? r - n - p : r - n, width: l ? p : e, height: l ? e : p } }; return a
        }(); ""; return a
    }); M(f, "Core/Axis/Stacking/StackingAxis.js", [f["Core/Animation/AnimationUtilities.js"],
    f["Core/Axis/Axis.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Axis/Stacking/StackItem.js"], f["Core/Utilities.js"]], function (a, f, x, E, B) {
        function y() {
            var c = this, b = c.inverted; c.yAxis.forEach(function (c) { c.stacking && c.stacking.stacks && c.hasVisibleSeries && (c.stacking.oldStacks = c.stacking.stacks) }); c.series.forEach(function (a) {
                var d = a.xAxis && a.xAxis.options || {}; !a.options.stacking || !0 !== a.visible && !1 !== c.options.chart.ignoreHiddenSeries || (a.stackKey = [a.type, h(a.options.stack, ""), b ? d.top : d.left, b ? d.height :
                    d.width].join())
            })
        } function J() { var c = this.stacking; if (c) { var b = c.stacks; v(b, function (c, a) { I(c); b[a] = null }); c && c.stackTotalGroup && c.stackTotalGroup.destroy() } } function t() { this.stacking || (this.stacking = new d(this)) } function u(c, b, a, d) { !K(c) || c.x !== b || d && c.stackKey !== d ? c = { x: b, index: 0, key: d, stackKey: d } : c.index++; c.key = [a, b, c.index].join(); return c } function p() {
            var c = this, b = c.stackKey, a = c.yAxis.stacking.stacks, d = c.processedXData, e = c[c.options.stacking + "Stacker"], g; e && [b, "-" + b].forEach(function (b) {
                for (var f =
                    d.length, h, k; f--;)h = d[f], g = c.getStackIndicator(g, h, c.index, b), (k = (h = a[b] && a[b][h]) && h.points[g.key]) && e.call(c, k, h, f)
            })
        } function g(c, b, a) { b = b.total ? 100 / b.total : 0; c[0] = G(c[0] * b); c[1] = G(c[1] * b); this.stackedYData[a] = c[1] } function b() {
            var c = this.yAxis.stacking; this.options.centerInCategory && (this.is("column") || this.is("columnrange")) && !this.options.stacking && 1 < this.chart.series.length ? e.setStackedPoints.call(this, "group") : c && v(c.stacks, function (b, a) {
                "group" === a.slice(-5) && (v(b, function (c) { return c.destroy() }),
                    delete c.stacks[a])
            })
        } function l(c) {
            var b = c || this.options.stacking; if (b && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
                var a = this.processedXData, d = this.processedYData, e = [], g = d.length, f = this.options, l = f.threshold, m = h(f.startFromThreshold && l, 0); f = f.stack; c = c ? "" + this.type + ",".concat(b) : this.stackKey; var n = "-" + c, q = this.negStacks, p = this.yAxis, r = p.stacking.stacks, v = p.stacking.oldStacks, t, u; p.stacking.stacksTouched += 1; for (u = 0; u < g; u++) {
                    var y = a[u]; var x = d[u]; var I = this.getStackIndicator(I,
                        y, this.index); var B = I.key; var A = (t = q && x < (m ? 0 : l)) ? n : c; r[A] || (r[A] = {}); r[A][y] || (v[A] && v[A][y] ? (r[A][y] = v[A][y], r[A][y].total = null) : r[A][y] = new E(p, p.options.stackLabels, !!t, y, f)); A = r[A][y]; null !== x ? (A.points[B] = A.points[this.index] = [h(A.cumulative, m)], K(A.cumulative) || (A.base = B), A.touched = p.stacking.stacksTouched, 0 < I.index && !1 === this.singleStacks && (A.points[B][0] = A.points[this.index + "," + y + ",0"][0])) : A.points[B] = A.points[this.index] = null; "percent" === b ? (t = t ? c : n, q && r[t] && r[t][y] ? (t = r[t][y], A.total = t.total =
                            Math.max(t.total, A.total) + Math.abs(x) || 0) : A.total = G(A.total + (Math.abs(x) || 0))) : "group" === b ? (w(x) && (x = x[0]), null !== x && (A.total = (A.total || 0) + 1)) : A.total = G(A.total + (x || 0)); A.cumulative = "group" === b ? (A.total || 1) - 1 : h(A.cumulative, m) + (x || 0); null !== x && (A.points[B].push(A.cumulative), e[u] = A.cumulative, A.hasValidPoints = !0)
                } "percent" === b && (p.stacking.usePercentage = !0); "group" !== b && (this.stackedYData = e); p.stacking.oldStacks = {}
            }
        } var n = a.getDeferredAnimation, e = x.series.prototype, r = B.addEvent, G = B.correctFloat, K =
            B.defined, I = B.destroyObjectProperties, N = B.fireEvent, w = B.isArray, m = B.isNumber, v = B.objectEach, h = B.pick, d = function () {
                function c(c) { this.oldStacks = {}; this.stacks = {}; this.stacksTouched = 0; this.axis = c } c.prototype.buildStacks = function () { var c = this.axis, b = c.series, a = c.options.reversedStacks, d = b.length, e; if (!c.isXAxis) { this.usePercentage = !1; for (e = d; e--;) { var g = b[a ? e : d - e - 1]; g.setStackedPoints(); g.setGroupedPoints() } for (e = 0; e < d; e++)b[e].modifyStacks(); N(c, "afterBuildStacks") } }; c.prototype.cleanStacks = function () {
                    if (!this.axis.isXAxis) {
                        if (this.oldStacks) var c =
                            this.stacks = this.oldStacks; v(c, function (c) { v(c, function (c) { c.cumulative = c.total }) })
                    }
                }; c.prototype.resetStacks = function () { var c = this, b = c.stacks; c.axis.isXAxis || v(b, function (b) { v(b, function (a, d) { m(a.touched) && a.touched < c.stacksTouched ? (a.destroy(), delete b[d]) : (a.total = null, a.cumulative = null) }) }) }; c.prototype.renderStackTotals = function () {
                    var c = this.axis, b = c.chart, a = b.renderer, d = this.stacks; c = n(b, c.options.stackLabels && c.options.stackLabels.animation || !1); var e = this.stackTotalGroup = this.stackTotalGroup ||
                        a.g("stack-labels").attr({ zIndex: 6, opacity: 0 }).add(); e.translate(b.plotLeft, b.plotTop); v(d, function (c) { v(c, function (c) { c.render(e) }) }); e.animate({ opacity: 1 }, c)
                }; return c
            }(), c; (function (c) { var a = []; c.compose = function (c, d, e) { -1 === a.indexOf(c) && (a.push(c), r(c, "init", t), r(c, "destroy", J)); -1 === a.indexOf(d) && (a.push(d), d.prototype.getStacks = y); -1 === a.indexOf(e) && (a.push(e), c = e.prototype, c.getStackIndicator = u, c.modifyStacks = p, c.percentStacker = g, c.setGroupedPoints = b, c.setStackedPoints = l) } })(c || (c = {})); return c
    });
    M(f, "Series/Line/LineSeries.js", [f["Core/Series/Series.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (a, f, x) {
        var y = this && this.__extends || function () { var a = function (f, u) { a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, g) { a.__proto__ = g } || function (a, g) { for (var b in g) g.hasOwnProperty(b) && (a[b] = g[b]) }; return a(f, u) }; return function (f, u) { function p() { this.constructor = f } a(f, u); f.prototype = null === u ? Object.create(u) : (p.prototype = u.prototype, new p) } }(), B = x.defined,
        A = x.merge; x = function (f) {
            function t() { var a = null !== f && f.apply(this, arguments) || this; a.data = void 0; a.options = void 0; a.points = void 0; return a } y(t, f); t.prototype.drawGraph = function () {
                var a = this, f = this.options, g = (this.gappedPath || this.getGraphPath).call(this), b = this.chart.styledMode, l = [["graph", "highcharts-graph"]]; b || l[0].push(f.lineColor || this.color || "#cccccc", f.dashStyle); l = a.getZonesGraphs(l); l.forEach(function (l, e) {
                    var n = l[0], p = a[n], t = p ? "animate" : "attr"; p ? (p.endX = a.preventGraphAnimation ? null : g.xMap,
                        p.animate({ d: g })) : g.length && (a[n] = p = a.chart.renderer.path(g).addClass(l[1]).attr({ zIndex: 1 }).add(a.group)); p && !b && (n = { stroke: l[2], "stroke-width": f.lineWidth, fill: a.fillGraph && a.color || "none" }, l[3] ? n.dashstyle = l[3] : "square" !== f.linecap && (n["stroke-linecap"] = n["stroke-linejoin"] = "round"), p[t](n).shadow(2 > e && f.shadow)); p && (p.startX = g.xMap, p.isArea = g.isArea)
                })
            }; t.prototype.getGraphPath = function (a, f, g) {
                var b = this, l = b.options, n = [], e = [], p, t = l.step; a = a || b.points; var u = a.reversed; u && a.reverse(); (t = {
                    right: 1,
                    center: 2
                }[t] || t && 3) && u && (t = 4 - t); a = this.getValidPoints(a, !1, !(l.connectNulls && !f && !g)); a.forEach(function (r, u) {
                    var w = r.plotX, m = r.plotY, v = a[u - 1]; (r.leftCliff || v && v.rightCliff) && !g && (p = !0); r.isNull && !B(f) && 0 < u ? p = !l.connectNulls : r.isNull && !f ? p = !0 : (0 === u || p ? u = [["M", r.plotX, r.plotY]] : b.getPointSpline ? u = [b.getPointSpline(a, r, u)] : t ? (u = 1 === t ? [["L", v.plotX, m]] : 2 === t ? [["L", (v.plotX + w) / 2, v.plotY], ["L", (v.plotX + w) / 2, m]] : [["L", w, v.plotY]], u.push(["L", w, m])) : u = [["L", w, m]], e.push(r.x), t && (e.push(r.x), 2 === t && e.push(r.x)),
                        n.push.apply(n, u), p = !1)
                }); n.xMap = e; return b.graphPath = n
            }; t.prototype.getZonesGraphs = function (a) { this.zones.forEach(function (f, g) { g = ["zone-graph-" + g, "highcharts-graph highcharts-zone-graph-" + g + " " + (f.className || "")]; this.chart.styledMode || g.push(f.color || this.color, f.dashStyle || this.options.dashStyle); a.push(g) }, this); return a }; t.defaultOptions = A(a.defaultOptions, {}); return t
        }(a); f.registerSeriesType("line", x); ""; return x
    }); M(f, "Series/Area/AreaSeries.js", [f["Core/Color/Color.js"], f["Core/Legend/LegendSymbol.js"],
    f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (a, f, x, E) {
        var y = this && this.__extends || function () { var a = function (b, f) { a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, a) { b.__proto__ = a } || function (b, a) { for (var e in a) a.hasOwnProperty(e) && (b[e] = a[e]) }; return a(b, f) }; return function (b, f) { function g() { this.constructor = b } a(b, f); b.prototype = null === f ? Object.create(f) : (g.prototype = f.prototype, new g) } }(), A = a.parse, J = x.seriesTypes.line; a = E.extend; var t = E.merge, u = E.objectEach,
            p = E.pick; E = function (a) {
                function b() { var b = null !== a && a.apply(this, arguments) || this; b.data = void 0; b.options = void 0; b.points = void 0; return b } y(b, a); b.prototype.drawGraph = function () {
                    this.areaPath = []; a.prototype.drawGraph.apply(this); var b = this, f = this.areaPath, e = this.options, g = [["area", "highcharts-area", this.color, e.fillColor]]; this.zones.forEach(function (a, f) { g.push(["zone-area-" + f, "highcharts-area highcharts-zone-area-" + f + " " + a.className, a.color || b.color, a.fillColor || e.fillColor]) }); g.forEach(function (a) {
                        var g =
                            a[0], l = {}, n = b[g], r = n ? "animate" : "attr"; n ? (n.endX = b.preventGraphAnimation ? null : f.xMap, n.animate({ d: f })) : (l.zIndex = 0, n = b[g] = b.chart.renderer.path(f).addClass(a[1]).add(b.group), n.isArea = !0); b.chart.styledMode || (l.fill = p(a[3], A(a[2]).setOpacity(p(e.fillOpacity, .75)).get())); n[r](l); n.startX = f.xMap; n.shiftUnit = e.step ? 2 : 1
                    })
                }; b.prototype.getGraphPath = function (b) {
                    var a = J.prototype.getGraphPath, e = this.options, f = e.stacking, g = this.yAxis, l = [], t = [], u = this.index, w = g.stacking.stacks[this.stackKey], m = e.threshold,
                    v = Math.round(g.getThreshold(e.threshold)); e = p(e.connectNulls, "percent" === f); var h = function (c, a, d) { var e = b[c]; c = f && w[e.x].points[u]; var h = e[d + "Null"] || 0; d = e[d + "Cliff"] || 0; e = !0; if (d || h) { var n = (h ? c[0] : c[1]) + d; var q = c[0] + d; e = !!h } else !f && b[a] && b[a].isNull && (n = q = m); "undefined" !== typeof n && (t.push({ plotX: k, plotY: null === n ? v : g.getThreshold(n), isNull: e, isCliff: !0 }), l.push({ plotX: k, plotY: null === q ? v : g.getThreshold(q), doCurve: !1 })) }; b = b || this.points; f && (b = this.getStackPoints(b)); for (var d = 0, c = b.length; d < c; ++d) {
                        f ||
                        (b[d].leftCliff = b[d].rightCliff = b[d].leftNull = b[d].rightNull = void 0); var q = b[d].isNull; var k = p(b[d].rectPlotX, b[d].plotX); var z = f ? p(b[d].yBottom, v) : v; if (!q || e) e || h(d, d - 1, "left"), q && !f && e || (t.push(b[d]), l.push({ x: d, plotX: k, plotY: z })), e || h(d, d + 1, "right")
                    } h = a.call(this, t, !0, !0); l.reversed = !0; q = a.call(this, l, !0, !0); (z = q[0]) && "M" === z[0] && (q[0] = ["L", z[1], z[2]]); q = h.concat(q); q.length && q.push(["Z"]); a = a.call(this, t, !1, e); q.xMap = h.xMap; this.areaPath = q; return a
                }; b.prototype.getStackPoints = function (b) {
                    var a =
                        this, e = [], f = [], g = this.xAxis, l = this.yAxis, t = l.stacking.stacks[this.stackKey], y = {}, w = l.series, m = w.length, v = l.options.reversedStacks ? 1 : -1, h = w.indexOf(a); b = b || this.points; if (this.options.stacking) {
                            for (var d = 0; d < b.length; d++)b[d].leftNull = b[d].rightNull = void 0, y[b[d].x] = b[d]; u(t, function (c, b) { null !== c.total && f.push(b) }); f.sort(function (c, b) { return c - b }); var c = w.map(function (c) { return c.visible }); f.forEach(function (b, d) {
                                var k = 0, n, q; if (y[b] && !y[b].isNull) e.push(y[b]), [-1, 1].forEach(function (e) {
                                    var g = 1 ===
                                        e ? "rightNull" : "leftNull", k = t[f[d + e]], l = 0; if (k) for (var p = h; 0 <= p && p < m;) { var r = w[p].index; n = k.points[r]; n || (r === a.index ? y[b][g] = !0 : c[p] && (q = t[b].points[r]) && (l -= q[1] - q[0])); p += v } y[b][1 === e ? "rightCliff" : "leftCliff"] = l
                                }); else { for (var r = h; 0 <= r && r < m;) { if (n = t[b].points[w[r].index]) { k = n[1]; break } r += v } k = p(k, 0); k = l.translate(k, 0, 1, 0, 1); e.push({ isNull: !0, plotX: g.translate(b, 0, 0, 0, 1), x: b, plotY: k, yBottom: k }) }
                            })
                        } return e
                }; b.defaultOptions = t(J.defaultOptions, { threshold: 0 }); return b
            }(J); a(E.prototype, {
                singleStacks: !1,
                drawLegendSymbol: f.drawRectangle
            }); x.registerSeriesType("area", E); ""; return E
    }); M(f, "Series/Spline/SplineSeries.js", [f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (a, f) {
        var y = this && this.__extends || function () {
            var a = function (f, u) { a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, f) { a.__proto__ = f } || function (a, f) { for (var b in f) f.hasOwnProperty(b) && (a[b] = f[b]) }; return a(f, u) }; return function (f, u) {
                function p() { this.constructor = f } a(f, u); f.prototype = null === u ? Object.create(u) :
                    (p.prototype = u.prototype, new p)
            }
        }(), E = a.seriesTypes.line, B = f.merge, A = f.pick; f = function (a) {
            function f() { var f = null !== a && a.apply(this, arguments) || this; f.data = void 0; f.options = void 0; f.points = void 0; return f } y(f, a); f.prototype.getPointSpline = function (a, f, g) {
                var b = f.plotX || 0, l = f.plotY || 0, n = a[g - 1]; g = a[g + 1]; if (n && !n.isNull && !1 !== n.doCurve && !f.isCliff && g && !g.isNull && !1 !== g.doCurve && !f.isCliff) {
                    a = n.plotY || 0; var e = g.plotX || 0; g = g.plotY || 0; var p = 0; var t = (1.5 * b + (n.plotX || 0)) / 2.5; var u = (1.5 * l + a) / 2.5; e = (1.5 * b +
                        e) / 2.5; var y = (1.5 * l + g) / 2.5; e !== t && (p = (y - u) * (e - b) / (e - t) + l - y); u += p; y += p; u > a && u > l ? (u = Math.max(a, l), y = 2 * l - u) : u < a && u < l && (u = Math.min(a, l), y = 2 * l - u); y > g && y > l ? (y = Math.max(g, l), u = 2 * l - y) : y < g && y < l && (y = Math.min(g, l), u = 2 * l - y); f.rightContX = e; f.rightContY = y
                } f = ["C", A(n.rightContX, n.plotX, 0), A(n.rightContY, n.plotY, 0), A(t, b, 0), A(u, l, 0), b, l]; n.rightContX = n.rightContY = void 0; return f
            }; f.defaultOptions = B(E.defaultOptions); return f
        }(E); a.registerSeriesType("spline", f); ""; return f
    }); M(f, "Series/AreaSpline/AreaSplineSeries.js",
        [f["Series/Spline/SplineSeries.js"], f["Core/Legend/LegendSymbol.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (a, f, x, E) {
            var y = this && this.__extends || function () { var a = function (f, b) { a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, a) { b.__proto__ = a } || function (b, a) { for (var e in a) a.hasOwnProperty(e) && (b[e] = a[e]) }; return a(f, b) }; return function (f, b) { function g() { this.constructor = f } a(f, b); f.prototype = null === b ? Object.create(b) : (g.prototype = b.prototype, new g) } }(),
            A = x.seriesTypes, J = A.area; A = A.area.prototype; var t = E.extend, u = E.merge; E = function (f) { function g() { var b = null !== f && f.apply(this, arguments) || this; b.data = void 0; b.points = void 0; b.options = void 0; return b } y(g, f); g.defaultOptions = u(a.defaultOptions, J.defaultOptions); return g }(a); t(E.prototype, { getGraphPath: A.getGraphPath, getStackPoints: A.getStackPoints, drawGraph: A.drawGraph, drawLegendSymbol: f.drawRectangle }); x.registerSeriesType("areaspline", E); ""; return E
        }); M(f, "Series/Column/ColumnSeriesDefaults.js", [],
            function () { ""; return { borderRadius: 0, centerInCategory: !1, groupPadding: .2, marker: null, pointPadding: .1, minPointLength: 0, cropThreshold: 50, pointRange: null, states: { hover: { halo: !1, brightness: .1 }, select: { color: "#cccccc", borderColor: "#000000" } }, dataLabels: { align: void 0, verticalAlign: void 0, y: void 0 }, startFromThreshold: !0, stickyTracking: !1, tooltip: { distance: 6 }, threshold: 0, borderColor: "#ffffff" } }); M(f, "Series/Column/ColumnSeries.js", [f["Core/Animation/AnimationUtilities.js"], f["Core/Color/Color.js"], f["Series/Column/ColumnSeriesDefaults.js"],
            f["Core/Globals.js"], f["Core/Legend/LegendSymbol.js"], f["Core/Series/Series.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (a, f, x, E, B, A, J, t) {
                var u = this && this.__extends || function () {
                    var b = function (a, d) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (c, b) { c.__proto__ = b } || function (c, b) { for (var a in b) b.hasOwnProperty(a) && (c[a] = b[a]) }; return b(a, d) }; return function (a, d) {
                        function c() { this.constructor = a } b(a, d); a.prototype = null === d ? Object.create(d) : (c.prototype =
                            d.prototype, new c)
                    }
                }(), p = a.animObject, g = f.parse, b = E.hasTouch; a = E.noop; var l = t.clamp, n = t.css, e = t.defined, r = t.extend, y = t.fireEvent, K = t.isArray, I = t.isNumber, N = t.merge, w = t.pick, m = t.objectEach; t = function (a) {
                    function f() { var b = null !== a && a.apply(this, arguments) || this; b.borderWidth = void 0; b.data = void 0; b.group = void 0; b.options = void 0; b.points = void 0; return b } u(f, a); f.prototype.animate = function (b) {
                        var c = this, a = this.yAxis, d = c.options, e = this.chart.inverted, f = {}, g = e ? "translateX" : "translateY"; if (b) f.scaleY = .001,
                            b = l(a.toPixels(d.threshold), a.pos, a.pos + a.len), e ? f.translateX = b - a.len : f.translateY = b, c.clipBox && c.setClip(), c.group.attr(f); else { var h = Number(c.group.attr(g)); c.group.animate({ scaleY: 1 }, r(p(c.options.animation), { step: function (b, d) { c.group && (f[g] = h + d.pos * (a.pos - h), c.group.attr(f)) } })) }
                    }; f.prototype.init = function (b, c) { a.prototype.init.apply(this, arguments); var d = this; b = d.chart; b.hasRendered && b.series.forEach(function (c) { c.type === d.type && (c.isDirty = !0) }) }; f.prototype.getColumnMetrics = function () {
                        var b =
                            this, c = b.options, a = b.xAxis, e = b.yAxis, f = a.options.reversedStacks; f = a.reversed && !f || !a.reversed && f; var g = {}, h, m = 0; !1 === c.grouping ? m = 1 : b.chart.series.forEach(function (c) { var a = c.yAxis, d = c.options; if (c.type === b.type && (c.visible || !b.chart.options.chart.ignoreHiddenSeries) && e.len === a.len && e.pos === a.pos) { if (d.stacking && "group" !== d.stacking) { h = c.stackKey; "undefined" === typeof g[h] && (g[h] = m++); var f = g[h] } else !1 !== d.grouping && (f = m++); c.columnIndex = f } }); var l = Math.min(Math.abs(a.transA) * (a.ordinal && a.ordinal.slope ||
                                c.pointRange || a.closestPointRange || a.tickInterval || 1), a.len), n = l * c.groupPadding, p = (l - 2 * n) / (m || 1); c = Math.min(c.maxPointWidth || a.len, w(c.pointWidth, p * (1 - 2 * c.pointPadding))); b.columnMetrics = { width: c, offset: (p - c) / 2 + (n + ((b.columnIndex || 0) + (f ? 1 : 0)) * p - l / 2) * (f ? -1 : 1), paddedWidth: p, columnCount: m }; return b.columnMetrics
                    }; f.prototype.crispCol = function (b, c, a, e) {
                        var d = this.chart, f = this.borderWidth, g = -(f % 2 ? .5 : 0); f = f % 2 ? .5 : 1; d.inverted && d.renderer.isVML && (f += 1); this.options.crisp && (a = Math.round(b + a) + g, b = Math.round(b) +
                            g, a -= b); e = Math.round(c + e) + f; g = .5 >= Math.abs(c) && .5 < e; c = Math.round(c) + f; e -= c; g && e && (--c, e += 1); return { x: b, y: c, width: a, height: e }
                    }; f.prototype.adjustForMissingColumns = function (b, c, a, e) {
                        var d = this, f = this.options.stacking; if (!a.isNull && 1 < e.columnCount) {
                            var g = this.yAxis.options.reversedStacks, h = 0, k = g ? 0 : -e.columnCount; m(this.yAxis.stacking && this.yAxis.stacking.stacks, function (c) {
                                if ("number" === typeof a.x) {
                                    var b = c[a.x.toString()]; b && (c = b.points[d.index], f ? (c && (h = k), b.hasValidPoints && (g ? k++ : k--)) : K(c) && (c = Object.keys(b.points).filter(function (c) {
                                        return !c.match(",") &&
                                            b.points[c] && 1 < b.points[c].length
                                    }).map(parseFloat).sort(function (c, b) { return b - c }), h = c.indexOf(d.index), k = c.length))
                                }
                            }); b = (a.plotX || 0) + ((k - 1) * e.paddedWidth + c) / 2 - c - h * e.paddedWidth
                        } return b
                    }; f.prototype.translate = function () {
                        var b = this, c = b.chart, a = b.options, f = b.dense = 2 > b.closestPointRange * b.xAxis.transA; f = b.borderWidth = w(a.borderWidth, f ? 0 : 1); var g = b.xAxis, h = b.yAxis, m = a.threshold, n = b.translatedThreshold = h.getThreshold(m), p = w(a.minPointLength, 5), r = b.getColumnMetrics(), v = r.width, t = b.pointXOffset = r.offset,
                            u = b.dataMin, y = b.dataMax, x = b.barW = Math.max(v, 1 + 2 * f); c.inverted && (n -= .5); a.pointPadding && (x = Math.ceil(x)); A.prototype.translate.apply(b); b.points.forEach(function (d) {
                                var f = w(d.yBottom, n), k = 999 + Math.abs(f), q = d.plotX || 0; k = l(d.plotY, -k, h.len + k); var z = Math.min(k, f), C = Math.max(k, f) - z, D = v, A = q + t, B = x; p && Math.abs(C) < p && (C = p, q = !h.reversed && !d.negative || h.reversed && d.negative, I(m) && I(y) && d.y === m && y <= m && (h.min || 0) < m && (u !== y || (h.max || 0) <= m) && (q = !q), z = Math.abs(z - n) > p ? f - p : n - (q ? p : 0)); e(d.options.pointWidth) && (D = B =
                                    Math.ceil(d.options.pointWidth), A -= Math.round((D - v) / 2)); a.centerInCategory && (A = b.adjustForMissingColumns(A, D, d, r)); d.barX = A; d.pointWidth = D; d.tooltipPos = c.inverted ? [l(h.len + h.pos - c.plotLeft - k, h.pos - c.plotLeft, h.len + h.pos - c.plotLeft), g.len + g.pos - c.plotTop - A - B / 2, C] : [g.left - c.plotLeft + A + B / 2, l(k + h.pos - c.plotTop, h.pos - c.plotTop, h.len + h.pos - c.plotTop), C]; d.shapeType = b.pointClass.prototype.shapeType || "rect"; d.shapeArgs = b.crispCol.apply(b, d.isNull ? [A, n, B, 0] : [A, z, B, C])
                            })
                    }; f.prototype.drawGraph = function () {
                        this.group[this.dense ?
                            "addClass" : "removeClass"]("highcharts-dense-data")
                    }; f.prototype.pointAttribs = function (b, c) {
                        var a = this.options, d = this.pointAttrToOptions || {}, e = d.stroke || "borderColor", f = d["stroke-width"] || "borderWidth", h = b && b.color || this.color, m = b && b[e] || a[e] || h; d = b && b.options.dashStyle || a.dashStyle; var l = b && b[f] || a[f] || this[f] || 0, n = w(b && b.opacity, a.opacity, 1); if (b && this.zones.length) {
                            var p = b.getZone(); h = b.options.color || p && (p.color || b.nonZonedColor) || this.color; p && (m = p.borderColor || m, d = p.dashStyle || d, l = p.borderWidth ||
                                l)
                        } c && b && (b = N(a.states[c], b.options.states && b.options.states[c] || {}), c = b.brightness, h = b.color || "undefined" !== typeof c && g(h).brighten(b.brightness).get() || h, m = b[e] || m, l = b[f] || l, d = b.dashStyle || d, n = w(b.opacity, n)); e = { fill: h, stroke: m, "stroke-width": l, opacity: n }; d && (e.dashstyle = d); return e
                    }; f.prototype.drawPoints = function (b) {
                        void 0 === b && (b = this.points); var c = this, a = this.chart, d = c.options, e = a.renderer, f = d.animationLimit || 250, g; b.forEach(function (b) {
                            var h = b.graphic, k = !!h, m = h && a.pointCount < f ? "animate" : "attr";
                            if (I(b.plotY) && null !== b.y) {
                                g = b.shapeArgs; h && b.hasNewShapeType() && (h = h.destroy()); c.enabledDataSorting && (b.startXPos = c.xAxis.reversed ? -(g ? g.width || 0 : 0) : c.xAxis.width); h || (b.graphic = h = e[b.shapeType](g).add(b.group || c.group)) && c.enabledDataSorting && a.hasRendered && a.pointCount < f && (h.attr({ x: b.startXPos }), k = !0, m = "animate"); if (h && k) h[m](N(g)); if (d.borderRadius) h[m]({ r: d.borderRadius }); a.styledMode || h[m](c.pointAttribs(b, b.selected && "select")).shadow(!1 !== b.allowShadow && d.shadow, null, d.stacking && !d.borderRadius);
                                h && (h.addClass(b.getClassName(), !0), h.attr({ visibility: b.visible ? "inherit" : "hidden" }))
                            } else h && (b.graphic = h.destroy())
                        })
                    }; f.prototype.drawTracker = function () {
                        var a = this, c = a.chart, e = c.pointer, f = function (c) { var b = e.getPointFromEvent(c); "undefined" !== typeof b && (e.isDirectTouch = !0, b.onMouseOver(c)) }, g; a.points.forEach(function (c) { g = K(c.dataLabels) ? c.dataLabels : c.dataLabel ? [c.dataLabel] : []; c.graphic && (c.graphic.element.point = c); g.forEach(function (b) { b.div ? b.div.point = c : b.element.point = c }) }); a._hasTracking ||
                            (a.trackerGroups.forEach(function (d) { if (a[d]) { a[d].addClass("highcharts-tracker").on("mouseover", f).on("mouseout", function (c) { e.onTrackerMouseOut(c) }); if (b) a[d].on("touchstart", f); !c.styledMode && a.options.cursor && a[d].css(n).css({ cursor: a.options.cursor }) } }), a._hasTracking = !0); y(this, "afterDrawTracker")
                    }; f.prototype.remove = function () { var b = this, c = b.chart; c.hasRendered && c.series.forEach(function (c) { c.type === b.type && (c.isDirty = !0) }); A.prototype.remove.apply(b, arguments) }; f.defaultOptions = N(A.defaultOptions,
                        x); return f
                }(A); r(t.prototype, { cropShoulder: 0, directTouch: !0, drawLegendSymbol: B.drawRectangle, getSymbol: a, negStacks: !0, trackerGroups: ["group", "dataLabelsGroup"] }); J.registerSeriesType("column", t); ""; return t
            }); M(f, "Core/Series/DataLabel.js", [f["Core/Animation/AnimationUtilities.js"], f["Core/FormatUtilities.js"], f["Core/Utilities.js"]], function (a, f, x) {
                var y = a.getDeferredAnimation, B = f.format, A = x.defined, J = x.extend, t = x.fireEvent, u = x.isArray, p = x.isString, g = x.merge, b = x.objectEach, l = x.pick, n = x.splat, e;
                (function (a) {
                    function e(b, a, c, e, f) {
                        var d = this, g = this.chart, h = this.isCartesian && g.inverted, m = this.enabledDataSorting, k = l(b.dlBox && b.dlBox.centerX, b.plotX), n = b.plotY, p = c.rotation, q = c.align, r = A(k) && A(n) && g.isInsidePlot(k, Math.round(n), { inverted: h, paneCoordinates: !0, series: d }), v = function (c) { m && d.xAxis && !t && d.setDataLabelStartPos(b, a, f, r, c) }, t = "justify" === l(c.overflow, m ? "none" : "justify"), w = this.visible && !1 !== b.visible && (b.series.forceDL || m && !t || r || l(c.inside, !!this.options.stacking) && e && g.isInsidePlot(k,
                            h ? e.x + 1 : e.y + e.height - 1, { inverted: h, paneCoordinates: !0, series: d })); if (w && A(k) && A(n)) {
                                p && a.attr({ align: q }); q = a.getBBox(!0); var u = [0, 0]; var y = g.renderer.fontMetrics(g.styledMode ? void 0 : c.style.fontSize, a).b; e = J({ x: h ? this.yAxis.len - n : k, y: Math.round(h ? this.xAxis.len - k : n), width: 0, height: 0 }, e); J(c, { width: q.width, height: q.height }); p ? (t = !1, u = g.renderer.rotCorr(y, p), k = { x: e.x + (c.x || 0) + e.width / 2 + u.x, y: e.y + (c.y || 0) + { top: 0, middle: .5, bottom: 1 }[c.verticalAlign] * e.height }, u = [q.x - Number(a.attr("x")), q.y - Number(a.attr("y"))],
                                    v(k), a[f ? "attr" : "animate"](k)) : (v(e), a.align(c, void 0, e), k = a.alignAttr); t && 0 <= e.height ? this.justifyDataLabel(a, c, k, q, e, f) : l(c.crop, !0) && (e = k.x, v = k.y, e += u[0], v += u[1], w = g.isInsidePlot(e, v, { paneCoordinates: !0, series: d }) && g.isInsidePlot(e + q.width, v + q.height, { paneCoordinates: !0, series: d })); if (c.shape && !p) a[f ? "attr" : "animate"]({ anchorX: h ? g.plotWidth - b.plotY : b.plotX, anchorY: h ? g.plotHeight - b.plotX : b.plotY })
                            } f && m && (a.placed = !1); w || m && !t ? a.show() : (a.hide(), a.placed = !1)
                    } function f(b, a) {
                        var c = a.filter; return c ?
                            (a = c.operator, b = b[c.property], c = c.value, ">" === a && b > c || "<" === a && b < c || ">=" === a && b >= c || "<=" === a && b <= c || "==" === a && b == c || "===" === a && b === c ? !0 : !1) : !0
                    } function r(a) {
                        void 0 === a && (a = this.points); var d = this, c = d.chart, e = d.options, g = d.hasRendered || 0, h = c.renderer, m = c.options.chart, r = m.backgroundColor; m = m.plotBackgroundColor; var v = h.getContrast(p(m) && m || p(r) && r || "#000000"), x = e.dataLabels, G; r = x.animation; r = x.defer ? y(c, r, d) : { defer: 0, duration: 0 }; x = w(w(c.options.plotOptions && c.options.plotOptions.series && c.options.plotOptions.series.dataLabels,
                            c.options.plotOptions && c.options.plotOptions[d.type] && c.options.plotOptions[d.type].dataLabels), x); t(this, "drawDataLabels"); if (u(x) || x.enabled || d._hasPointLabels) {
                                var E = d.plotGroup("dataLabelsGroup", "data-labels", g ? "inherit" : "hidden", x.zIndex || 6); E.attr({ opacity: +g }); !g && (g = d.dataLabelsGroup) && (d.visible && E.show(), g[e.animation ? "animate" : "attr"]({ opacity: 1 }, r)); a.forEach(function (a) {
                                    G = n(w(x, a.dlOptions || a.options && a.options.dataLabels)); G.forEach(function (g, m) {
                                        var k = g.enabled && (!a.isNull || a.dataLabelOnNull) &&
                                            f(a, g), n = a.connectors ? a.connectors[m] : a.connector, p = a.dataLabels ? a.dataLabels[m] : a.dataLabel, q = !p, r = l(g.distance, a.labelDistance); if (k) {
                                                var t = a.getLabelConfig(); var w = l(g[a.formatPrefix + "Format"], g.format); t = A(w) ? B(w, t, c) : (g[a.formatPrefix + "Formatter"] || g.formatter).call(t, g); w = g.style; var u = g.rotation; c.styledMode || (w.color = l(g.color, w.color, d.color, "#000000"), "contrast" === w.color ? (a.contrastColor = h.getContrast(a.color || d.color), w.color = !A(r) && g.inside || 0 > r || e.stacking ? a.contrastColor : v) : delete a.contrastColor,
                                                    e.cursor && (w.cursor = e.cursor)); var y = { r: g.borderRadius || 0, rotation: u, padding: g.padding, zIndex: 1 }; c.styledMode || (y.fill = g.backgroundColor, y.stroke = g.borderColor, y["stroke-width"] = g.borderWidth); b(y, function (c, b) { "undefined" === typeof c && delete y[b] })
                                            } !p || k && A(t) && !!p.div === !!g.useHTML && (p.rotation && g.rotation || p.rotation === g.rotation) || (q = !0, a.dataLabel = p = a.dataLabel && a.dataLabel.destroy(), a.dataLabels && (1 === a.dataLabels.length ? delete a.dataLabels : delete a.dataLabels[m]), m || delete a.dataLabel, n && (a.connector =
                                                a.connector.destroy(), a.connectors && (1 === a.connectors.length ? delete a.connectors : delete a.connectors[m]))); k && A(t) ? (p ? y.text = t : (a.dataLabels = a.dataLabels || [], p = a.dataLabels[m] = u ? h.text(t, 0, 0, g.useHTML).addClass("highcharts-data-label") : h.label(t, 0, 0, g.shape, null, null, g.useHTML, null, "data-label"), m || (a.dataLabel = p), p.addClass(" highcharts-data-label-color-" + a.colorIndex + " " + (g.className || "") + (g.useHTML ? " highcharts-tracker" : ""))), p.options = g, p.attr(y), c.styledMode || p.css(w).shadow(g.shadow), (m = g[a.formatPrefix +
                                                    "TextPath"] || g.textPath) && !g.useHTML && (p.setTextPath(a.getDataLabelPath && a.getDataLabelPath(p) || a.graphic, m), a.dataLabelPath && !m.enabled && (a.dataLabelPath = a.dataLabelPath.destroy())), p.added || p.add(E), d.alignDataLabel(a, p, g, null, q)) : p && p.hide()
                                    })
                                })
                            } t(this, "afterDrawDataLabels")
                    } function x(b, a, c, e, f, g) {
                        var d = this.chart, h = a.align, m = a.verticalAlign, k = b.box ? 0 : b.padding || 0, l = a.x; l = void 0 === l ? 0 : l; var n = a.y; n = void 0 === n ? 0 : n; var p = (c.x || 0) + k; if (0 > p) {
                            "right" === h && 0 <= l ? (a.align = "left", a.inside = !0) : l -= p; var q =
                                !0
                        } p = (c.x || 0) + e.width - k; p > d.plotWidth && ("left" === h && 0 >= l ? (a.align = "right", a.inside = !0) : l += d.plotWidth - p, q = !0); p = c.y + k; 0 > p && ("bottom" === m && 0 <= n ? (a.verticalAlign = "top", a.inside = !0) : n -= p, q = !0); p = (c.y || 0) + e.height - k; p > d.plotHeight && ("top" === m && 0 >= n ? (a.verticalAlign = "bottom", a.inside = !0) : n += d.plotHeight - p, q = !0); q && (a.x = l, a.y = n, b.placed = !g, b.align(a, void 0, f)); return q
                    } function w(b, a) {
                        var c = [], d; if (u(b) && !u(a)) c = b.map(function (c) { return g(c, a) }); else if (u(a) && !u(b)) c = a.map(function (c) { return g(b, c) }); else if (u(b) ||
                            u(a)) for (d = Math.max(b.length, a.length); d--;)c[d] = g(b[d], a[d]); else c = g(b, a); return c
                    } function m(b, a, c, e, f) { var d = this.chart, g = d.inverted, h = this.xAxis, m = h.reversed, k = g ? a.height / 2 : a.width / 2; b = (b = b.pointWidth) ? b / 2 : 0; a.startXPos = g ? f.x : m ? -k - b : h.width - k + b; a.startYPos = g ? m ? this.yAxis.height - k + b : -k - b : f.y; e ? "hidden" === a.visibility && (a.show(), a.attr({ opacity: 0 }).animate({ opacity: 1 })) : a.attr({ opacity: 1 }).animate({ opacity: 0 }, void 0, a.hide); d.hasRendered && (c && a.attr({ x: a.startXPos, y: a.startYPos }), a.placed = !0) }
                    var v = []; a.compose = function (b) { if (-1 === v.indexOf(b)) { var a = b.prototype; v.push(b); a.alignDataLabel = e; a.drawDataLabels = r; a.justifyDataLabel = x; a.setDataLabelStartPos = m } }
                })(e || (e = {})); ""; return e
            }); M(f, "Series/Column/ColumnDataLabel.js", [f["Core/Series/DataLabel.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (a, f, x) {
                var y = f.series, B = x.merge, A = x.pick, J; (function (f) {
                    function t(a, b, f, n, e) {
                        var g = this.chart.inverted, l = a.series, p = (l.xAxis ? l.xAxis.len : this.chart.plotSizeX) || 0; l = (l.yAxis ?
                            l.yAxis.len : this.chart.plotSizeY) || 0; var t = a.dlBox || a.shapeArgs, u = A(a.below, a.plotY > A(this.translatedThreshold, l)), w = A(f.inside, !!this.options.stacking); t && (n = B(t), 0 > n.y && (n.height += n.y, n.y = 0), t = n.y + n.height - l, 0 < t && t < n.height && (n.height -= t), g && (n = { x: l - n.y - n.height, y: p - n.x - n.width, width: n.height, height: n.width }), w || (g ? (n.x += u ? 0 : n.width, n.width = 0) : (n.y += u ? n.height : 0, n.height = 0))); f.align = A(f.align, !g || w ? "center" : u ? "right" : "left"); f.verticalAlign = A(f.verticalAlign, g || w ? "middle" : u ? "top" : "bottom"); y.prototype.alignDataLabel.call(this,
                                a, b, f, n, e); f.inside && a.contrastColor && b.css({ color: a.contrastColor })
                    } var p = []; f.compose = function (f) { a.compose(y); -1 === p.indexOf(f) && (p.push(f), f.prototype.alignDataLabel = t) }
                })(J || (J = {})); return J
            }); M(f, "Series/Bar/BarSeries.js", [f["Series/Column/ColumnSeries.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (a, f, x) {
                var y = this && this.__extends || function () {
                    var a = function (f, u) {
                        a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, f) { a.__proto__ = f } || function (a, f) {
                            for (var b in f) f.hasOwnProperty(b) &&
                                (a[b] = f[b])
                        }; return a(f, u)
                    }; return function (f, u) { function p() { this.constructor = f } a(f, u); f.prototype = null === u ? Object.create(u) : (p.prototype = u.prototype, new p) }
                }(), B = x.extend, A = x.merge; x = function (f) { function t() { var a = null !== f && f.apply(this, arguments) || this; a.data = void 0; a.options = void 0; a.points = void 0; return a } y(t, f); t.defaultOptions = A(a.defaultOptions, {}); return t }(a); B(x.prototype, { inverted: !0 }); f.registerSeriesType("bar", x); ""; return x
            }); M(f, "Series/Scatter/ScatterSeriesDefaults.js", [], function () {
                "";
                return { lineWidth: 0, findNearestPointBy: "xy", jitter: { x: 0, y: 0 }, marker: { enabled: !0 }, tooltip: { headerFormat: '<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px"> {series.name}</span><br/>', pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>" } }
            }); M(f, "Series/Scatter/ScatterSeries.js", [f["Series/Scatter/ScatterSeriesDefaults.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (a, f, x) {
                var y = this && this.__extends || function () {
                    var a = function (f, b) {
                        a = Object.setPrototypeOf ||
                        { __proto__: [] } instanceof Array && function (b, a) { b.__proto__ = a } || function (b, a) { for (var e in a) a.hasOwnProperty(e) && (b[e] = a[e]) }; return a(f, b)
                    }; return function (f, b) { function g() { this.constructor = f } a(f, b); f.prototype = null === b ? Object.create(b) : (g.prototype = b.prototype, new g) }
                }(), B = f.seriesTypes, A = B.column, J = B.line; B = x.addEvent; var t = x.extend, u = x.merge; x = function (f) {
                    function g() { var b = null !== f && f.apply(this, arguments) || this; b.data = void 0; b.options = void 0; b.points = void 0; return b } y(g, f); g.prototype.applyJitter =
                        function () { var b = this, a = this.options.jitter, f = this.points.length; a && this.points.forEach(function (e, g) { ["x", "y"].forEach(function (l, n) { var p = "plot" + l.toUpperCase(); if (a[l] && !e.isNull) { var r = b[l + "Axis"]; var t = a[l] * r.transA; if (r && !r.isLog) { var m = Math.max(0, e[p] - t); r = Math.min(r.len, e[p] + t); n = 1E4 * Math.sin(g + n * f); e[p] = m + (r - m) * (n - Math.floor(n)); "x" === l && (e.clientX = e.plotX) } } }) }) }; g.prototype.drawGraph = function () { this.options.lineWidth ? f.prototype.drawGraph.call(this) : this.graph && (this.graph = this.graph.destroy()) };
                    g.defaultOptions = u(J.defaultOptions, a); return g
                }(J); t(x.prototype, { drawTracker: A.prototype.drawTracker, sorted: !1, requireSorting: !1, noSharedTooltip: !0, trackerGroups: ["group", "markerGroup", "dataLabelsGroup"], takeOrdinalPosition: !1 }); B(x, "afterTranslate", function () { this.applyJitter() }); f.registerSeriesType("scatter", x); return x
            }); M(f, "Series/CenteredUtilities.js", [f["Core/Globals.js"], f["Core/Series/Series.js"], f["Core/Utilities.js"]], function (a, f, x) {
                var y = a.deg2rad, B = x.fireEvent, A = x.isNumber, J = x.pick,
                t = x.relativeLength, u; (function (a) {
                    a.getCenter = function () {
                        var a = this.options, b = this.chart, l = 2 * (a.slicedOffset || 0), n = b.plotWidth - 2 * l, e = b.plotHeight - 2 * l, p = a.center, u = Math.min(n, e), y = a.thickness, x = a.size, E = a.innerSize || 0; "string" === typeof x && (x = parseFloat(x)); "string" === typeof E && (E = parseFloat(E)); a = [J(p[0], "50%"), J(p[1], "50%"), J(x && 0 > x ? void 0 : a.size, "100%"), J(E && 0 > E ? void 0 : a.innerSize || 0, "0%")]; !b.angular || this instanceof f || (a[3] = 0); for (p = 0; 4 > p; ++p)x = a[p], b = 2 > p || 2 === p && /%$/.test(x), a[p] = t(x, [n, e, u,
                            a[2]][p]) + (b ? l : 0); a[3] > a[2] && (a[3] = a[2]); A(y) && 2 * y < a[2] && 0 < y && (a[3] = a[2] - 2 * y); B(this, "afterGetCenter", { positions: a }); return a
                    }; a.getStartAndEndRadians = function (a, b) { a = A(a) ? a : 0; b = A(b) && b > a && 360 > b - a ? b : a + 360; return { start: y * (a + -90), end: y * (b + -90) } }
                })(u || (u = {})); ""; return u
            }); M(f, "Series/Pie/PiePoint.js", [f["Core/Animation/AnimationUtilities.js"], f["Core/Series/Point.js"], f["Core/Utilities.js"]], function (a, f, x) {
                var y = this && this.__extends || function () {
                    var a = function (b, f) {
                        a = Object.setPrototypeOf || { __proto__: [] } instanceof
                        Array && function (a, b) { a.__proto__ = b } || function (a, b) { for (var e in b) b.hasOwnProperty(e) && (a[e] = b[e]) }; return a(b, f)
                    }; return function (b, f) { function g() { this.constructor = b } a(b, f); b.prototype = null === f ? Object.create(f) : (g.prototype = f.prototype, new g) }
                }(), B = a.setAnimation, A = x.addEvent, J = x.defined; a = x.extend; var t = x.isNumber, u = x.pick, p = x.relativeLength; f = function (a) {
                    function b() { var b = null !== a && a.apply(this, arguments) || this; b.labelDistance = void 0; b.options = void 0; b.series = void 0; return b } y(b, a); b.prototype.getConnectorPath =
                        function () { var a = this.labelPosition, b = this.series.options.dataLabels, e = this.connectorShapes, f = b.connectorShape; e[f] && (f = e[f]); return f.call(this, { x: a.final.x, y: a.final.y, alignment: a.alignment }, a.connectorPosition, b) }; b.prototype.getTranslate = function () { return this.sliced ? this.slicedTranslation : { translateX: 0, translateY: 0 } }; b.prototype.haloPath = function (a) {
                            var b = this.shapeArgs; return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(b.x, b.y, b.r + a, b.r + a, {
                                innerR: b.r - 1, start: b.start,
                                end: b.end
                            })
                        }; b.prototype.init = function () { var b = this; a.prototype.init.apply(this, arguments); this.name = u(this.name, "Slice"); var f = function (a) { b.slice("select" === a.type) }; A(this, "select", f); A(this, "unselect", f); return this }; b.prototype.isValid = function () { return t(this.y) && 0 <= this.y }; b.prototype.setVisible = function (a, b) {
                            var e = this, f = this.series, g = f.chart, l = f.options.ignoreHiddenPoint; b = u(b, l); a !== this.visible && (this.visible = this.options.visible = a = "undefined" === typeof a ? !this.visible : a, f.options.data[f.data.indexOf(this)] =
                                this.options, ["graphic", "dataLabel", "connector", "shadowGroup"].forEach(function (b) { if (e[b]) e[b][a ? "show" : "hide"](a) }), this.legendItem && g.legend.colorizeItem(this, a), a || "hover" !== this.state || this.setState(""), l && (f.isDirty = !0), b && g.redraw())
                        }; b.prototype.slice = function (a, b, e) { var f = this.series; B(e, f.chart); u(b, !0); this.sliced = this.options.sliced = J(a) ? a : !this.sliced; f.options.data[f.data.indexOf(this)] = this.options; this.graphic && this.graphic.animate(this.getTranslate()); this.shadowGroup && this.shadowGroup.animate(this.getTranslate()) };
                    return b
                }(f); a(f.prototype, {
                    connectorShapes: {
                        fixedOffset: function (a, b, f) { var g = b.breakAt; b = b.touchingSliceAt; return [["M", a.x, a.y], f.softConnector ? ["C", a.x + ("left" === a.alignment ? -5 : 5), a.y, 2 * g.x - b.x, 2 * g.y - b.y, g.x, g.y] : ["L", g.x, g.y], ["L", b.x, b.y]] }, straight: function (a, b) { b = b.touchingSliceAt; return [["M", a.x, a.y], ["L", b.x, b.y]] }, crookedLine: function (a, b, f) {
                            b = b.touchingSliceAt; var g = this.series, e = g.center[0], l = g.chart.plotWidth, t = g.chart.plotLeft; g = a.alignment; var u = this.shapeArgs.r; f = p(f.crookDistance,
                                1); l = "left" === g ? e + u + (l + t - e - u) * (1 - f) : t + (e - u) * f; f = ["L", l, a.y]; e = !0; if ("left" === g ? l > a.x || l < b.x : l < a.x || l > b.x) e = !1; a = [["M", a.x, a.y]]; e && a.push(f); a.push(["L", b.x, b.y]); return a
                        }
                    }
                }); return f
            }); M(f, "Series/Pie/PieSeriesDefaults.js", [], function () {
                ""; return {
                    center: [null, null], clip: !1, colorByPoint: !0, dataLabels: { allowOverlap: !0, connectorPadding: 5, connectorShape: "fixedOffset", crookDistance: "70%", distance: 30, enabled: !0, formatter: function () { return this.point.isNull ? void 0 : this.point.name }, softConnector: !0, x: 0 },
                    fillColor: void 0, ignoreHiddenPoint: !0, inactiveOtherPoints: !0, legendType: "point", marker: null, size: null, showInLegend: !1, slicedOffset: 10, stickyTracking: !1, tooltip: { followPointer: !0 }, borderColor: "#ffffff", borderWidth: 1, lineWidth: void 0, states: { hover: { brightness: .1 } }
                }
            }); M(f, "Series/Pie/PieSeries.js", [f["Series/CenteredUtilities.js"], f["Series/Column/ColumnSeries.js"], f["Core/Globals.js"], f["Core/Legend/LegendSymbol.js"], f["Series/Pie/PiePoint.js"], f["Series/Pie/PieSeriesDefaults.js"], f["Core/Series/Series.js"],
            f["Core/Series/SeriesRegistry.js"], f["Core/Renderer/SVG/Symbols.js"], f["Core/Utilities.js"]], function (a, f, x, E, B, A, J, t, u, p) {
                var g = this && this.__extends || function () { var a = function (b, e) { a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, b) { a.__proto__ = b } || function (a, b) { for (var e in b) b.hasOwnProperty(e) && (a[e] = b[e]) }; return a(b, e) }; return function (b, e) { function f() { this.constructor = b } a(b, e); b.prototype = null === e ? Object.create(e) : (f.prototype = e.prototype, new f) } }(), b = a.getStartAndEndRadians;
                x = x.noop; var l = p.clamp, n = p.extend, e = p.fireEvent, r = p.merge, y = p.pick, K = p.relativeLength; p = function (a) {
                    function f() { var b = null !== a && a.apply(this, arguments) || this; b.center = void 0; b.data = void 0; b.maxLabelDistance = void 0; b.options = void 0; b.points = void 0; return b } g(f, a); f.prototype.animate = function (a) {
                        var b = this, e = b.points, f = b.startAngleRad; a || e.forEach(function (a) {
                            var c = a.graphic, d = a.shapeArgs; c && d && (c.attr({ r: y(a.startR, b.center && b.center[3] / 2), start: f, end: f }), c.animate({ r: d.r, start: d.start, end: d.end },
                                b.options.animation))
                        })
                    }; f.prototype.drawEmpty = function () {
                        var a = this.startAngleRad, b = this.endAngleRad, e = this.options; if (0 === this.total && this.center) {
                            var f = this.center[0]; var d = this.center[1]; this.graph || (this.graph = this.chart.renderer.arc(f, d, this.center[1] / 2, 0, a, b).addClass("highcharts-empty-series").add(this.group)); this.graph.attr({ d: u.arc(f, d, this.center[2] / 2, 0, { start: a, end: b, innerR: this.center[3] / 2 }) }); this.chart.styledMode || this.graph.attr({
                                "stroke-width": e.borderWidth, fill: e.fillColor || "none",
                                stroke: e.color || "#cccccc"
                            })
                        } else this.graph && (this.graph = this.graph.destroy())
                    }; f.prototype.drawPoints = function () { var a = this.chart.renderer; this.points.forEach(function (b) { b.graphic && b.hasNewShapeType() && (b.graphic = b.graphic.destroy()); b.graphic || (b.graphic = a[b.shapeType](b.shapeArgs).add(b.series.group), b.delayedRendering = !0) }) }; f.prototype.generatePoints = function () { a.prototype.generatePoints.call(this); this.updateTotals() }; f.prototype.getX = function (a, b, e) {
                        var f = this.center, d = this.radii ? this.radii[e.index] ||
                            0 : f[2] / 2; a = Math.asin(l((a - f[1]) / (d + e.labelDistance), -1, 1)); return f[0] + (b ? -1 : 1) * Math.cos(a) * (d + e.labelDistance) + (0 < e.labelDistance ? (b ? -1 : 1) * this.options.dataLabels.padding : 0)
                    }; f.prototype.hasData = function () { return !!this.processedXData.length }; f.prototype.redrawPoints = function () {
                        var a = this, b = a.chart, e = b.renderer, f = a.options.shadow, d, c, g, k; this.drawEmpty(); !f || a.shadowGroup || b.styledMode || (a.shadowGroup = e.g("shadow").attr({ zIndex: -1 }).add(a.group)); a.points.forEach(function (h) {
                            var m = {}; c = h.graphic;
                            if (!h.isNull && c) {
                                var l = void 0; k = h.shapeArgs; d = h.getTranslate(); b.styledMode || (l = h.shadowGroup, f && !l && (l = h.shadowGroup = e.g("shadow").add(a.shadowGroup)), l && l.attr(d), g = a.pointAttribs(h, h.selected && "select")); h.delayedRendering ? (c.setRadialReference(a.center).attr(k).attr(d), b.styledMode || c.attr(g).attr({ "stroke-linejoin": "round" }).shadow(f, l), h.delayedRendering = !1) : (c.setRadialReference(a.center), b.styledMode || r(!0, m, g), r(!0, m, k, d), c.animate(m)); c.attr({ visibility: h.visible ? "inherit" : "hidden" }); c.addClass(h.getClassName(),
                                    !0)
                            } else c && (h.graphic = c.destroy())
                        })
                    }; f.prototype.sortByAngle = function (a, b) { a.sort(function (a, e) { return "undefined" !== typeof a.angle && (e.angle - a.angle) * b }) }; f.prototype.translate = function (a) {
                        e(this, "translate"); this.generatePoints(); var f = this.options, g = f.slicedOffset, h = g + (f.borderWidth || 0), d = b(f.startAngle, f.endAngle), c = this.startAngleRad = d.start; d = (this.endAngleRad = d.end) - c; var l = this.points, k = f.dataLabels.distance; f = f.ignoreHiddenPoint; var n = l.length, p, r = 0; a || (this.center = a = this.getCenter()); for (p =
                            0; p < n; p++) {
                                var t = l[p]; var u = c + r * d; !t.isValid() || f && !t.visible || (r += t.percentage / 100); var w = c + r * d; var x = { x: a[0], y: a[1], r: a[2] / 2, innerR: a[3] / 2, start: Math.round(1E3 * u) / 1E3, end: Math.round(1E3 * w) / 1E3 }; t.shapeType = "arc"; t.shapeArgs = x; t.labelDistance = y(t.options.dataLabels && t.options.dataLabels.distance, k); t.labelDistance = K(t.labelDistance, x.r); this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, t.labelDistance); w = (w + u) / 2; w > 1.5 * Math.PI ? w -= 2 * Math.PI : w < -Math.PI / 2 && (w += 2 * Math.PI); t.slicedTranslation = {
                                    translateX: Math.round(Math.cos(w) *
                                        g), translateY: Math.round(Math.sin(w) * g)
                                }; x = Math.cos(w) * a[2] / 2; var A = Math.sin(w) * a[2] / 2; t.tooltipPos = [a[0] + .7 * x, a[1] + .7 * A]; t.half = w < -Math.PI / 2 || w > Math.PI / 2 ? 1 : 0; t.angle = w; u = Math.min(h, t.labelDistance / 5); t.labelPosition = { natural: { x: a[0] + x + Math.cos(w) * t.labelDistance, y: a[1] + A + Math.sin(w) * t.labelDistance }, "final": {}, alignment: 0 > t.labelDistance ? "center" : t.half ? "right" : "left", connectorPosition: { breakAt: { x: a[0] + x + Math.cos(w) * u, y: a[1] + A + Math.sin(w) * u }, touchingSliceAt: { x: a[0] + x, y: a[1] + A } } }
                        } e(this, "afterTranslate")
                    };
                    f.prototype.updateTotals = function () { var a = this.points, b = a.length, e = this.options.ignoreHiddenPoint, f, d = 0; for (f = 0; f < b; f++) { var c = a[f]; !c.isValid() || e && !c.visible || (d += c.y) } this.total = d; for (f = 0; f < b; f++)c = a[f], c.percentage = 0 < d && (c.visible || !e) ? c.y / d * 100 : 0, c.total = d }; f.defaultOptions = r(J.defaultOptions, A); return f
                }(J); n(p.prototype, {
                    axisTypes: [], directTouch: !0, drawGraph: void 0, drawLegendSymbol: E.drawRectangle, drawTracker: f.prototype.drawTracker, getCenter: a.getCenter, getSymbol: x, isCartesian: !1, noSharedTooltip: !0,
                    pointAttribs: f.prototype.pointAttribs, pointClass: B, requireSorting: !1, searchPoint: x, trackerGroups: ["group", "dataLabelsGroup"]
                }); t.registerSeriesType("pie", p); return p
            }); M(f, "Series/Pie/PieDataLabel.js", [f["Core/Series/DataLabel.js"], f["Core/Globals.js"], f["Core/Renderer/RendererUtilities.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (a, f, x, E, B) {
                var y = f.noop, J = x.distribute, t = E.series, u = B.arrayMax, p = B.clamp, g = B.defined, b = B.merge, l = B.pick, n = B.relativeLength, e; (function (e) {
                    function f() {
                        var a =
                            this, e = a.data, f = a.chart, d = a.options.dataLabels || {}, c = d.connectorPadding, n = f.plotWidth, k = f.plotHeight, p = f.plotLeft, r = Math.round(f.chartWidth / 3), w = a.center, y = w[2] / 2, x = w[1], A = [[], []], B = [0, 0, 0, 0], C = a.dataLabelPositioners, E, G, I, K, N, F, M, O, T, V, X, U; a.visible && (d.enabled || a._hasPointLabels) && (e.forEach(function (a) { a.dataLabel && a.visible && a.dataLabel.shortened && (a.dataLabel.attr({ width: "auto" }).css({ width: "auto", textOverflow: "clip" }), a.dataLabel.shortened = !1) }), t.prototype.drawDataLabels.apply(a), e.forEach(function (a) {
                                a.dataLabel &&
                                (a.visible ? (A[a.half].push(a), a.dataLabel._pos = null, !g(d.style.width) && !g(a.options.dataLabels && a.options.dataLabels.style && a.options.dataLabels.style.width) && a.dataLabel.getBBox().width > r && (a.dataLabel.css({ width: Math.round(.7 * r) + "px" }), a.dataLabel.shortened = !0)) : (a.dataLabel = a.dataLabel.destroy(), a.dataLabels && 1 === a.dataLabels.length && delete a.dataLabels))
                            }), A.forEach(function (b, e) {
                                var h = b.length, m = [], q; if (h) {
                                    a.sortByAngle(b, e - .5); if (0 < a.maxLabelDistance) {
                                        var r = Math.max(0, x - y - a.maxLabelDistance);
                                        var t = Math.min(x + y + a.maxLabelDistance, f.plotHeight); b.forEach(function (a) { 0 < a.labelDistance && a.dataLabel && (a.top = Math.max(0, x - y - a.labelDistance), a.bottom = Math.min(x + y + a.labelDistance, f.plotHeight), q = a.dataLabel.getBBox().height || 21, a.distributeBox = { target: a.labelPosition.natural.y - a.top + q / 2, size: q, rank: a.y }, m.push(a.distributeBox)) }); r = t + q - r; J(m, r, r / 5)
                                    } for (X = 0; X < h; X++) {
                                        E = b[X]; F = E.labelPosition; K = E.dataLabel; V = !1 === E.visible ? "hidden" : "inherit"; T = r = F.natural.y; m && g(E.distributeBox) && ("undefined" ===
                                            typeof E.distributeBox.pos ? V = "hidden" : (M = E.distributeBox.size, T = C.radialDistributionY(E))); delete E.positionIndex; if (d.justify) O = C.justify(E, y, w); else switch (d.alignTo) { case "connectors": O = C.alignToConnectors(b, e, n, p); break; case "plotEdges": O = C.alignToPlotEdges(K, e, n, p); break; default: O = C.radialDistributionX(a, E, T, r) }K._attr = { visibility: V, align: F.alignment }; U = E.options.dataLabels || {}; K._pos = { x: O + l(U.x, d.x) + ({ left: c, right: -c }[F.alignment] || 0), y: T + l(U.y, d.y) - 10 }; F.final.x = O; F.final.y = T; l(d.crop, !0) &&
                                                (N = K.getBBox().width, r = null, O - N < c && 1 === e ? (r = Math.round(N - O + c), B[3] = Math.max(r, B[3])) : O + N > n - c && 0 === e && (r = Math.round(O + N - n + c), B[1] = Math.max(r, B[1])), 0 > T - M / 2 ? B[0] = Math.max(Math.round(-T + M / 2), B[0]) : T + M / 2 > k && (B[2] = Math.max(Math.round(T + M / 2 - k), B[2])), K.sideOverflow = r)
                                    }
                                }
                            }), 0 === u(B) || this.verifyDataLabelOverflow(B)) && (this.placeDataLabels(), this.points.forEach(function (c) {
                                U = b(d, c.options.dataLabels); if (G = l(U.connectorWidth, 1)) {
                                    var e; I = c.connector; if ((K = c.dataLabel) && K._pos && c.visible && 0 < c.labelDistance) {
                                        V =
                                        K._attr.visibility; if (e = !I) c.connector = I = f.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + c.colorIndex + (c.className ? " " + c.className : "")).add(a.dataLabelsGroup), f.styledMode || I.attr({ "stroke-width": G, stroke: U.connectorColor || c.color || "#666666" }); I[e ? "attr" : "animate"]({ d: c.getConnectorPath() }); I.attr("visibility", V)
                                    } else I && (c.connector = I.destroy())
                                }
                            }))
                    } function r() {
                        this.points.forEach(function (a) {
                            var b = a.dataLabel, e; b && a.visible && ((e = b._pos) ? (b.sideOverflow && (b._attr.width =
                                Math.max(b.getBBox().width - b.sideOverflow, 0), b.css({ width: b._attr.width + "px", textOverflow: (this.options.dataLabels.style || {}).textOverflow || "ellipsis" }), b.shortened = !0), b.attr(b._attr), b[b.moved ? "animate" : "attr"](e), b.moved = !0) : b && b.attr({ y: -9999 })); delete a.distributeBox
                        }, this)
                    } function x(a) {
                        var b = this.center, e = this.options, d = e.center, c = e.minSize || 80, f = null !== e.size; if (!f) {
                            if (null !== d[0]) var g = Math.max(b[2] - Math.max(a[1], a[3]), c); else g = Math.max(b[2] - a[1] - a[3], c), b[0] += (a[3] - a[1]) / 2; null !== d[1] ?
                                g = p(g, c, b[2] - Math.max(a[0], a[2])) : (g = p(g, c, b[2] - a[0] - a[2]), b[1] += (a[0] - a[2]) / 2); g < b[2] ? (b[2] = g, b[3] = Math.min(e.thickness ? Math.max(0, g - 2 * e.thickness) : Math.max(0, n(e.innerSize || 0, g)), g), this.translate(b), this.drawDataLabels && this.drawDataLabels()) : f = !0
                        } return f
                    } var A = [], w = {
                        radialDistributionY: function (a) { return a.top + a.distributeBox.pos }, radialDistributionX: function (a, b, e, d) { return a.getX(e < b.top + 2 || e > b.bottom - 2 ? d : e, b.half, b) }, justify: function (a, b, e) { return e[0] + (a.half ? -1 : 1) * (b + a.labelDistance) }, alignToPlotEdges: function (a,
                            b, e, d) { a = a.getBBox().width; return b ? a + d : e - a - d }, alignToConnectors: function (a, b, e, d) { var c = 0, f; a.forEach(function (a) { f = a.dataLabel.getBBox().width; f > c && (c = f) }); return b ? c + d : e - c - d }
                    }; e.compose = function (b) { a.compose(t); -1 === A.indexOf(b) && (A.push(b), b = b.prototype, b.dataLabelPositioners = w, b.alignDataLabel = y, b.drawDataLabels = f, b.placeDataLabels = r, b.verifyDataLabelOverflow = x) }
                })(e || (e = {})); return e
            }); M(f, "Extensions/OverlappingDataLabels.js", [f["Core/Chart/Chart.js"], f["Core/Utilities.js"]], function (a, f) {
                function y(a,
                    f) { var b = !1; if (a) { var g = a.newOpacity; a.oldOpacity !== g && (a.alignAttr && a.placed ? (a[g ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), b = !0, a.alignAttr.opacity = g, a[a.isOld ? "animate" : "attr"](a.alignAttr, null, function () { f.styledMode || a.css({ pointerEvents: g ? "auto" : "none" }) }), B(f, "afterHideOverlappingLabel")) : a.attr({ opacity: g })); a.isOld = !0 } return b } var E = f.addEvent, B = f.fireEvent, A = f.isArray, J = f.isNumber, t = f.objectEach, u = f.pick; E(a, "render", function () {
                        var a = this, f = []; (this.labelCollectors || []).forEach(function (a) {
                            f =
                            f.concat(a())
                        }); (this.yAxis || []).forEach(function (a) { a.stacking && a.options.stackLabels && !a.options.stackLabels.allowOverlap && t(a.stacking.stacks, function (a) { t(a, function (a) { a.label && f.push(a.label) }) }) }); (this.series || []).forEach(function (b) {
                            var g = b.options.dataLabels; b.visible && (!1 !== g.enabled || b._hasPointLabels) && (g = function (b) {
                                return b.forEach(function (b) {
                                    b.visible && (A(b.dataLabels) ? b.dataLabels : b.dataLabel ? [b.dataLabel] : []).forEach(function (e) {
                                        var g = e.options; e.labelrank = u(g.labelrank, b.labelrank,
                                            b.shapeArgs && b.shapeArgs.height); g.allowOverlap ? (e.oldOpacity = e.opacity, e.newOpacity = 1, y(e, a)) : f.push(e)
                                    })
                                })
                            }, g(b.nodes || []), g(b.points))
                        }); this.hideOverlappingLabels(f)
                    }); a.prototype.hideOverlappingLabels = function (a) {
                        var f = this, b = a.length, l = f.renderer, n, e, p, t = !1; var u = function (a) {
                            var b, e = a.box ? 0 : a.padding || 0, f = b = 0, d; if (a && (!a.alignAttr || a.placed)) {
                                var c = a.alignAttr || { x: a.attr("x"), y: a.attr("y") }; var g = a.parentGroup; a.width || (b = a.getBBox(), a.width = b.width, a.height = b.height, b = l.fontMetrics(null, a.element).h);
                                var k = a.width - 2 * e; (d = { left: "0", center: "0.5", right: "1" }[a.alignValue]) ? f = +d * k : J(a.x) && Math.round(a.x) !== a.translateX && (f = a.x - a.translateX); return { x: c.x + (g.translateX || 0) + e - (f || 0), y: c.y + (g.translateY || 0) + e - b, width: a.width - 2 * e, height: a.height - 2 * e }
                            }
                        }; for (e = 0; e < b; e++)if (n = a[e]) n.oldOpacity = n.opacity, n.newOpacity = 1, n.absoluteBox = u(n); a.sort(function (a, b) { return (b.labelrank || 0) - (a.labelrank || 0) }); for (e = 0; e < b; e++) {
                            var x = (u = a[e]) && u.absoluteBox; for (n = e + 1; n < b; ++n) {
                                var A = (p = a[n]) && p.absoluteBox; !x || !A || u ===
                                    p || 0 === u.newOpacity || 0 === p.newOpacity || "hidden" === u.visibility || "hidden" === p.visibility || A.x >= x.x + x.width || A.x + A.width <= x.x || A.y >= x.y + x.height || A.y + A.height <= x.y || ((u.labelrank < p.labelrank ? u : p).newOpacity = 0)
                            }
                        } a.forEach(function (a) { y(a, f) && (t = !0) }); t && B(f, "afterHideAllOverlappingLabels")
                    }
            }); M(f, "Core/Responsive.js", [f["Core/Utilities.js"]], function (a) {
                var f = a.extend, x = a.find, E = a.isArray, B = a.isObject, A = a.merge, J = a.objectEach, t = a.pick, u = a.splat, p = a.uniqueKey, g; (function (a) {
                    var b = []; a.compose = function (a) {
                        -1 ===
                        b.indexOf(a) && (b.push(a), f(a.prototype, g.prototype)); return a
                    }; var g = function () {
                        function a() { } a.prototype.currentOptions = function (a) {
                            function b(a, f, g, l) { var h; J(a, function (a, c) { if (!l && -1 < e.collectionsWithUpdate.indexOf(c) && f[c]) for (a = u(a), g[c] = [], h = 0; h < Math.max(a.length, f[c].length); h++)f[c][h] && (void 0 === a[h] ? g[c][h] = f[c][h] : (g[c][h] = {}, b(a[h], f[c][h], g[c][h], l + 1))); else B(a) ? (g[c] = E(a) ? [] : {}, b(a, f[c] || {}, g[c], l + 1)) : g[c] = "undefined" === typeof f[c] ? null : f[c] }) } var e = this, f = {}; b(a, this.options, f, 0);
                            return f
                        }; a.prototype.matchResponsiveRule = function (a, b) { var e = a.condition; (e.callback || function () { return this.chartWidth <= t(e.maxWidth, Number.MAX_VALUE) && this.chartHeight <= t(e.maxHeight, Number.MAX_VALUE) && this.chartWidth >= t(e.minWidth, 0) && this.chartHeight >= t(e.minHeight, 0) }).call(this) && b.push(a._id) }; a.prototype.setResponsive = function (a, b) {
                            var e = this, f = this.options.responsive, g = this.currentResponsive, l = []; !b && f && f.rules && f.rules.forEach(function (a) {
                                "undefined" === typeof a._id && (a._id = p()); e.matchResponsiveRule(a,
                                    l)
                            }, this); b = A.apply(void 0, l.map(function (a) { return x((f || {}).rules || [], function (b) { return b._id === a }) }).map(function (a) { return a && a.chartOptions })); b.isResponsiveOptions = !0; l = l.toString() || void 0; l !== (g && g.ruleIds) && (g && this.update(g.undoOptions, a, !0), l ? (g = this.currentOptions(b), g.isResponsiveOptions = !0, this.currentResponsive = { ruleIds: l, mergedOptions: b, undoOptions: g }, this.update(b, a, !0)) : this.currentResponsive = void 0)
                        }; return a
                    }()
                })(g || (g = {})); ""; ""; return g
            }); M(f, "masters/highcharts.src.js", [f["Core/Globals.js"],
            f["Core/Utilities.js"], f["Core/Defaults.js"], f["Core/Animation/Fx.js"], f["Core/Animation/AnimationUtilities.js"], f["Core/Renderer/HTML/AST.js"], f["Core/FormatUtilities.js"], f["Core/Renderer/RendererUtilities.js"], f["Core/Renderer/SVG/SVGElement.js"], f["Core/Renderer/SVG/SVGRenderer.js"], f["Core/Renderer/HTML/HTMLElement.js"], f["Core/Renderer/HTML/HTMLRenderer.js"], f["Core/Axis/Axis.js"], f["Core/Axis/DateTimeAxis.js"], f["Core/Axis/LogarithmicAxis.js"], f["Core/Axis/PlotLineOrBand/PlotLineOrBand.js"],
            f["Core/Axis/Tick.js"], f["Core/Tooltip.js"], f["Core/Series/Point.js"], f["Core/Pointer.js"], f["Core/MSPointer.js"], f["Core/Legend/Legend.js"], f["Core/Chart/Chart.js"], f["Core/Axis/Stacking/StackingAxis.js"], f["Core/Axis/Stacking/StackItem.js"], f["Core/Series/Series.js"], f["Core/Series/SeriesRegistry.js"], f["Series/Column/ColumnSeries.js"], f["Series/Column/ColumnDataLabel.js"], f["Series/Pie/PieSeries.js"], f["Series/Pie/PieDataLabel.js"], f["Core/Series/DataLabel.js"], f["Core/Responsive.js"], f["Core/Color/Color.js"],
            f["Core/Time.js"]], function (a, f, x, E, B, A, J, t, u, p, g, b, l, n, e, r, G, K, I, M, w, m, v, h, d, c, q, k, z, H, D, R, P, W, Y) {
                a.animate = B.animate; a.animObject = B.animObject; a.getDeferredAnimation = B.getDeferredAnimation; a.setAnimation = B.setAnimation; a.stop = B.stop; a.timers = E.timers; a.AST = A; a.Axis = l; a.Chart = v; a.chart = v.chart; a.Fx = E; a.Legend = m; a.PlotLineOrBand = r; a.Point = I; a.Pointer = w.isRequired() ? w : M; a.Series = c; a.StackItem = d; a.SVGElement = u; a.SVGRenderer = p; a.Tick = G; a.Time = Y; a.Tooltip = K; a.Color = W; a.color = W.parse; b.compose(p); g.compose(u);
                a.defaultOptions = x.defaultOptions; a.getOptions = x.getOptions; a.time = x.defaultTime; a.setOptions = x.setOptions; a.dateFormat = J.dateFormat; a.format = J.format; a.numberFormat = J.numberFormat; a.addEvent = f.addEvent; a.arrayMax = f.arrayMax; a.arrayMin = f.arrayMin; a.attr = f.attr; a.clearTimeout = f.clearTimeout; a.correctFloat = f.correctFloat; a.createElement = f.createElement; a.css = f.css; a.defined = f.defined; a.destroyObjectProperties = f.destroyObjectProperties; a.discardElement = f.discardElement; a.distribute = t.distribute; a.erase =
                    f.erase; a.error = f.error; a.extend = f.extend; a.extendClass = f.extendClass; a.find = f.find; a.fireEvent = f.fireEvent; a.getMagnitude = f.getMagnitude; a.getStyle = f.getStyle; a.inArray = f.inArray; a.isArray = f.isArray; a.isClass = f.isClass; a.isDOMElement = f.isDOMElement; a.isFunction = f.isFunction; a.isNumber = f.isNumber; a.isObject = f.isObject; a.isString = f.isString; a.keys = f.keys; a.merge = f.merge; a.normalizeTickInterval = f.normalizeTickInterval; a.objectEach = f.objectEach; a.offset = f.offset; a.pad = f.pad; a.pick = f.pick; a.pInt = f.pInt;
                a.relativeLength = f.relativeLength; a.removeEvent = f.removeEvent; a.seriesType = q.seriesType; a.splat = f.splat; a.stableSort = f.stableSort; a.syncTimeout = f.syncTimeout; a.timeUnits = f.timeUnits; a.uniqueKey = f.uniqueKey; a.useSerialIds = f.useSerialIds; a.wrap = f.wrap; z.compose(k); R.compose(c); n.compose(l); e.compose(l); D.compose(H); r.compose(l); P.compose(v); h.compose(l, v, c); return a
            }); f["masters/highcharts.src.js"]._modules = f; return f["masters/highcharts.src.js"]
});
