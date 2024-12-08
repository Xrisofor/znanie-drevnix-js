(() => {
    "use strict";
    var e = {
            289: (e, t, o) => {
                var n = o(215),
                    r = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
                    a = Object.prototype.toString,
                    i = Array.prototype.concat,
                    l = Object.defineProperty,
                    s = l && function() {
                        var e = {};
                        try {
                            for (var t in l(e, "x", {
                                    enumerable: !1,
                                    value: e
                                }), e) return !1;
                            return e.x === e
                        } catch (e) {
                            return !1
                        }
                    }(),
                    c = function(e, t, o, n) {
                        var r;
                        (!(t in e) || "function" == typeof(r = n) && "[object Function]" === a.call(r) && n()) && (s ? l(e, t, {
                            configurable: !0,
                            enumerable: !1,
                            value: o,
                            writable: !0
                        }) : e[t] = o)
                    },
                    u = function(e, t) {
                        var o = arguments.length > 2 ? arguments[2] : {},
                            a = n(t);
                        r && (a = i.call(a, Object.getOwnPropertySymbols(t)));
                        for (var l = 0; l < a.length; l += 1) c(e, a[l], t[a[l]], o[a[l]])
                    };
                u.supportsDescriptors = !!s, e.exports = u
            },
            221: e => {
                "undefined" != typeof self ? e.exports = self : "undefined" != typeof window ? e.exports = window : e.exports = Function("return this")()
            },
            503: (e, t, o) => {
                var n = o(289),
                    r = o(221),
                    a = o(168),
                    i = o(471),
                    l = a(),
                    s = function() {
                        return l
                    };
                n(s, {
                    getPolyfill: a,
                    implementation: r,
                    shim: i
                }), e.exports = s
            },
            168: (e, t, o) => {
                var n = o(221);
                e.exports = function() {
                    return "object" == typeof o.g && o.g && o.g.Math === Math && o.g.Array === Array ? o.g : n
                }
            },
            471: (e, t, o) => {
                var n = o(289),
                    r = o(168);
                e.exports = function() {
                    var e = r();
                    if (n.supportsDescriptors) {
                        var t = Object.getOwnPropertyDescriptor(e, "globalThis");
                        (!t || t.configurable && (t.enumerable || t.writable || globalThis !== e)) && Object.defineProperty(e, "globalThis", {
                            configurable: !0,
                            enumerable: !1,
                            value: e,
                            writable: !1
                        })
                    } else "object" == typeof globalThis && globalThis === e || (e.globalThis = e);
                    return e
                }
            },
            987: (e, t, o) => {
                var n;
                if (!Object.keys) {
                    var r = Object.prototype.hasOwnProperty,
                        a = Object.prototype.toString,
                        i = o(414),
                        l = Object.prototype.propertyIsEnumerable,
                        s = !l.call({
                            toString: null
                        }, "toString"),
                        c = l.call((function() {}), "prototype"),
                        u = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                        p = function(e) {
                            var t = e.constructor;
                            return t && t.prototype === e
                        },
                        d = {
                            $applicationCache: !0,
                            $console: !0,
                            $external: !0,
                            $frame: !0,
                            $frameElement: !0,
                            $frames: !0,
                            $innerHeight: !0,
                            $innerWidth: !0,
                            $onmozfullscreenchange: !0,
                            $onmozfullscreenerror: !0,
                            $outerHeight: !0,
                            $outerWidth: !0,
                            $pageXOffset: !0,
                            $pageYOffset: !0,
                            $parent: !0,
                            $scrollLeft: !0,
                            $scrollTop: !0,
                            $scrollX: !0,
                            $scrollY: !0,
                            $self: !0,
                            $webkitIndexedDB: !0,
                            $webkitStorageInfo: !0,
                            $window: !0
                        },
                        f = function() {
                            if ("undefined" == typeof window) return !1;
                            for (var e in window) try {
                                if (!d["$" + e] && r.call(window, e) && null !== window[e] && "object" == typeof window[e]) try {
                                    p(window[e])
                                } catch (e) {
                                    return !0
                                }
                            } catch (e) {
                                return !0
                            }
                            return !1
                        }();
                    n = function(e) {
                        var t = null !== e && "object" == typeof e,
                            o = "[object Function]" === a.call(e),
                            n = i(e),
                            l = t && "[object String]" === a.call(e),
                            d = [];
                        if (!t && !o && !n) throw new TypeError("Object.keys called on a non-object");
                        var h = c && o;
                        if (l && e.length > 0 && !r.call(e, 0))
                            for (var m = 0; m < e.length; ++m) d.push(String(m));
                        if (n && e.length > 0)
                            for (var g = 0; g < e.length; ++g) d.push(String(g));
                        else
                            for (var y in e) h && "prototype" === y || !r.call(e, y) || d.push(String(y));
                        if (s)
                            for (var b = function(e) {
                                    if ("undefined" == typeof window || !f) return p(e);
                                    try {
                                        return p(e)
                                    } catch (e) {
                                        return !1
                                    }
                                }(e), v = 0; v < u.length; ++v) b && "constructor" === u[v] || !r.call(e, u[v]) || d.push(u[v]);
                        return d
                    }
                }
                e.exports = n
            },
            215: (e, t, o) => {
                var n = Array.prototype.slice,
                    r = o(414),
                    a = Object.keys,
                    i = a ? function(e) {
                        return a(e)
                    } : o(987),
                    l = Object.keys;
                i.shim = function() {
                    Object.keys ? function() {
                        var e = Object.keys(arguments);
                        return e && e.length === arguments.length
                    }(1, 2) || (Object.keys = function(e) {
                        return r(e) ? l(n.call(e)) : l(e)
                    }) : Object.keys = i;
                    return Object.keys || i
                }, e.exports = i
            },
            414: e => {
                var t = Object.prototype.toString;
                e.exports = function(e) {
                    var o = t.call(e),
                        n = "[object Arguments]" === o;
                    return n || (n = "[object Array]" !== o && null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Function]" === t.call(e.callee)), n
                }
            },
            776: function(e, t, o) {
                var n = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.compile = void 0;
                var r = n(o(503)),
                    a = n(o(326));

                function i(e, t) {
                    void 0 === t && (t = "rs");
                    var o = "rs" === t ? 1 : 0;
                    return a.default.sort((function(e, t) {
                        var n = e[o].length;
                        return t[o].length - n
                    })).forEach((function(t) {
                        return n = e, r = t[o], a = t[+!o], i = new RegExp(function(e) {
                            return e = e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), /^\w+$/.test(e) && (e = "\\b" + e + "\\b"), e
                        }(r), "g"), e = n.replace(i, a);
                        var n, r, a, i
                    })), e
                }

                function l(e, t) {
                    void 0 === t && (t = "rs");
                    var o = /((?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)|(?:\/\/.*))/g,
                        n = "ys_" + (new Date).getTime() + "_",
                        r = {},
                        a = (e = e.replace(/\"(?:\\.|[^\"\\])*\"|\'(?:\\.|[^\'\\])*\'/g, (function(e, t) {
                            var o = n + t;
                            return r[o] = e, o
                        }))).match(o) || [];
                    for (var l in e = (e = i(e, t)).replace(o, (function() {
                            return a.shift() || ""
                        })), r) e = e.replace(l, r[l]);
                    return e
                }
                t.compile = l, r.default().rs = l
            },
            607: function(e, t, o) {
                var n = this && this.__awaiter || function(e, t, o, n) {
                        return new(o || (o = Promise))((function(r, a) {
                            function i(e) {
                                try {
                                    s(n.next(e))
                                } catch (e) {
                                    a(e)
                                }
                            }

                            function l(e) {
                                try {
                                    s(n.throw(e))
                                } catch (e) {
                                    a(e)
                                }
                            }

                            function s(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof o ? t : new o((function(e) {
                                    e(t)
                                }))).then(i, l)
                            }
                            s((n = n.apply(e, t || [])).next())
                        }))
                    },
                    r = this && this.__generator || function(e, t) {
                        var o, n, r, a, i = {
                            label: 0,
                            sent: function() {
                                if (1 & r[0]) throw r[1];
                                return r[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return a = {
                            next: l(0),
                            throw: l(1),
                            return: l(2)
                        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                            return this
                        }), a;

                        function l(a) {
                            return function(l) {
                                return function(a) {
                                    if (o) throw new TypeError("Generator is already executing.");
                                    for (; i;) try {
                                        if (o = 1, n && (r = 2 & a[0] ? n.return : a[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, a[1])).done) return r;
                                        switch (n = 0, r && (a = [2 & a[0], r.value]), a[0]) {
                                            case 0:
                                            case 1:
                                                r = a;
                                                break;
                                            case 4:
                                                return i.label++, {
                                                    value: a[1],
                                                    done: !1
                                                };
                                            case 5:
                                                i.label++, n = a[1], a = [0];
                                                continue;
                                            case 7:
                                                a = i.ops.pop(), i.trys.pop();
                                                continue;
                                            default:
                                                if (!(r = i.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                    i = 0;
                                                    continue
                                                }
                                                if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                                                    i.label = a[1];
                                                    break
                                                }
                                                if (6 === a[0] && i.label < r[1]) {
                                                    i.label = r[1], r = a;
                                                    break
                                                }
                                                if (r && i.label < r[2]) {
                                                    i.label = r[2], i.ops.push(a);
                                                    break
                                                }
                                                r[2] && i.ops.pop(), i.trys.pop();
                                                continue
                                        }
                                        a = t.call(e, i)
                                    } catch (e) {
                                        a = [6, e], n = 0
                                    } finally {
                                        o = r = 0
                                    }
                                    if (5 & a[0]) throw a[1];
                                    return {
                                        value: a[0] ? a[1] : void 0,
                                        done: !0
                                    }
                                }([a, l])
                            }
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.rs = void 0;
                var a = o(776);

                function i(e) {
                    return n(this, void 0, void 0, (function() {
                        var t, o;
                        return r(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return null === e.parentNode ? [3, 3] : (o = e.textContent) ? [3, 2] : [4, l(e)];
                                case 1:
                                    o = n.sent(), n.label = 2;
                                case 2:
                                    t = o, e.parentNode.removeChild(e), r = a.compile(t, "rs"), (i = document.createElement("script")).innerHTML = r, document.body.appendChild(i), n.label = 3;
                                case 3:
                                    return [2]
                            }
                            var r, i
                        }))
                    }))
                }

                function l(e) {
                    return n(this, void 0, void 0, (function() {
                        var t, o;
                        return r(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return t = e.getAttribute("src"), o = "", null !== t && t.length ? [4, fetch(t, {
                                        method: "GET"
                                    })] : [3, 3];
                                case 1:
                                    return [4, n.sent().text()];
                                case 2:
                                    o = n.sent(), n.label = 3;
                                case 3:
                                    return [2, o]
                            }
                        }))
                    }))
                }
                Object.defineProperty(t, "rs", {
                    enumerable: !0,
                    get: function() {
                        return a.compile
                    }
                }), "undefined" != typeof window && (document.querySelectorAll('[language="Русь"]').forEach(i), document.querySelectorAll('[type="text/x-русь"]').forEach(i))
            },
            326: e => {
                e.exports = JSON.parse('[' +
                    '["let", "внедрить"],' +
                    '["var", "внедрить"],' +
                    '["null", "НИЧТО"],' +
                    '["new", "новь"],' +
                    '["status", "состояние_дружины"],' +

                    // Other
                    '["function", "внемлить"],' +
                    '["class", "династия"],' +
                    '["const", "приказ_княжий"],' +
                    '["await", "ожидание_ящеров"],' +
                    '["async", "основная_дружина"],' +
                    '["setTimeout", "ожидание_приказа"],' +
                    '["return", "воздать"],' +
                    '["open", "откупорить"],' +
                    '["close", "закупорить"],' +
                    '["this", "местный"],' +

                    // Request
                    '["XMLHttpRequest", "тридевятое_царство"],' +
                    '["send", "отправить_гонца"],' +
                    '["setRequestHeader", "написать_послание"],' +
                    '["response", "ответ_князя"],' + 
                    '["responseText", "телеграмма_от_князя"],' +
                    '["responseType", "передай_гонец"],' + 

                    // Window
                    '["window", "царь_батюшка_главный"],' +
                    '["history", "история"],' +
                    '["replaceState", "убийство_ящеров"],' +
                    '["location", "земля_русская"],' +
                    '["onload", "вперёд_славяне"],' +
                    '["alert", "молвить"],' +
                    '["prompt", "зачерпнуть"],' +
                    '["confirm", "проверка_на_ящера"],' +

                    // Console
                    '["console", "семейство"],' +
                    '["log", "исповедать"],' +
                    '["clear", "нарядиться"],' +
                    '["error", "задача"],' +

                    // Document
                    '["document", "Русь"],' +
                    '["getElementById", "поиск_дружины"],' +
                    '["querySelector", "поиск_княжей"],' +
                    '["currentScript", "1"],' +
                    '["documentURI", "2"],' +
                    '["cookie", "водица"],' +

                    '["addEventListener", "приток_Байкала"],' +
                    '["removeEventListener", "отток_Байкала"],' +
                    '["createElement", "свет_мой_зеркальце"],' +

                    '["body", "столица"],' +
                    '["style", "кольчуга"],' +
                    '["href", "поход"],' +
                    '["textContent", "много_букав"],' +
                    '["onclick", "дело"],' +
                    '["innerHTML", "перепись_указа"],' +
                    '["appendChild", "добрый_молодец"],' +
                    //'["scrollTop", "добрый_молодец"],' +
                    //'["scrollHeight", "добрый_молодец"],' +
                    
                    // Проверки и т.д
                    '["if", "коли"],' +
                    '["else if", "однаколи"],' +
                    '["else", "отнюдь"],' +
                    '["while", "покуда"],' +
                    '["for", "для"],' +

                    '["break", "бить_ящеров"],' +
                    '["switch", "путевой_камень"],' +
                    '["case", "путь"],' +
                    '["continue", "добить_ящеров"],' +
                    '["default", "базированно"],' +
                    
                    '["true", "правда"],' +
                    '["true", "истина"],' +
                    '["false", "кривда"],' +
                    '["false", "ложь"],' +
                    '["false", "чушь"],' +
                    '["false", "ерись"],' +

                    '["try", "пытать_ящера"],' +
                    '["catch", "поймать_ящера"],' +
                    '["throw", "получи_басурман"],' +
                    '["exception", "гнев_Перуна"],' +

                    '["Math.random", "судьба"]' +
                ']');
                
                // 
            }
        },
        t = {};

    function o(n) {
        var r = t[n];
        if (void 0 !== r) return r.exports;
        var a = t[n] = {
            exports: {}
        };
        return e[n].call(a.exports, a, a.exports, o), a.exports
    }
    o.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }();
    o(607)
})();

const счёт_древних_русов = {
	ноль: 0,
    целковый: 1,
    полушка: 2,
    четвертушка: 3,
    осьмушка: 4,
    пудовичок: 5,
    медячок: 6,
    серебрячок: 7,
    золотничок: 8,
    девятичок: 9,
    десятичок: 10
}