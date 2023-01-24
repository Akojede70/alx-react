/*! For license information please see 919.js.LICENSE.txt */
(self.webpackChunktask_3 = self.webpackChunktask_3 || []).push([
  [919],
  {
    645: (e) => {
      "use strict";
      e.exports = function (e) {
        var t = [];
        return (
          (t.toString = function () {
            return this.map(function (t) {
              var n = e(t);
              return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
            }).join("");
          }),
          (t.i = function (e, n, r) {
            "string" == typeof e && (e = [[null, e, ""]]);
            var i = {};
            if (r)
              for (var o = 0; o < this.length; o++) {
                var a = this[o][0];
                null != a && (i[a] = !0);
              }
            for (var s = 0; s < e.length; s++) {
              var u = [].concat(e[s]);
              (r && i[u[0]]) ||
                (n &&
                  (u[2]
                    ? (u[2] = "".concat(n, " and ").concat(u[2]))
                    : (u[2] = n)),
                t.push(u));
            }
          }),
          t
        );
      };
    },
    15: (e) => {
      "use strict";
      function t(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      e.exports = function (e) {
        var n,
          r,
          i =
            ((r = 4),
            (function (e) {
              if (Array.isArray(e)) return e;
            })((n = e)) ||
              (function (e, t) {
                var n =
                  e &&
                  (("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"]);
                if (null != n) {
                  var r,
                    i,
                    o = [],
                    a = !0,
                    s = !1;
                  try {
                    for (
                      n = n.call(e);
                      !(a = (r = n.next()).done) &&
                      (o.push(r.value), !t || o.length !== t);
                      a = !0
                    );
                  } catch (e) {
                    (s = !0), (i = e);
                  } finally {
                    try {
                      a || null == n.return || n.return();
                    } finally {
                      if (s) throw i;
                    }
                  }
                  return o;
                }
              })(n, r) ||
              (function (e, n) {
                if (e) {
                  if ("string" == typeof e) return t(e, n);
                  var r = Object.prototype.toString.call(e).slice(8, -1);
                  return (
                    "Object" === r && e.constructor && (r = e.constructor.name),
                    "Map" === r || "Set" === r
                      ? Array.from(e)
                      : "Arguments" === r ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                      ? t(e, n)
                      : void 0
                  );
                }
              })(n, r) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()),
          o = i[1],
          a = i[3];
        if ("function" == typeof btoa) {
          var s = btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
            u =
              "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                s
              ),
            l = "/*# ".concat(u, " */"),
            c = a.sources.map(function (e) {
              return "/*# sourceURL="
                .concat(a.sourceRoot || "")
                .concat(e, " */");
            });
          return [o].concat(c).concat([l]).join("\n");
        }
        return [o].join("\n");
      };
    },
    755: function (e, t) {
      var n;
      !(function (t, n) {
        "use strict";
        "object" == typeof e.exports
          ? (e.exports = t.document
              ? n(t, !0)
              : function (e) {
                  if (!e.document)
                    throw new Error("jQuery requires a window with a document");
                  return n(e);
                })
          : n(t);
      })("undefined" != typeof window ? window : this, function (r, i) {
        "use strict";
        var o = [],
          a = Object.getPrototypeOf,
          s = o.slice,
          u = o.flat
            ? function (e) {
                return o.flat.call(e);
              }
            : function (e) {
                return o.concat.apply([], e);
              },
          l = o.push,
          c = o.indexOf,
          f = {},
          p = f.toString,
          d = f.hasOwnProperty,
          h = d.toString,
          g = h.call(Object),
          v = {},
          m = function (e) {
            return (
              "function" == typeof e &&
              "number" != typeof e.nodeType &&
              "function" != typeof e.item
            );
          },
          y = function (e) {
            return null != e && e === e.window;
          },
          x = r.document,
          b = { type: !0, src: !0, nonce: !0, noModule: !0 };
        function w(e, t, n) {
          var r,
            i,
            o = (n = n || x).createElement("script");
          if (((o.text = e), t))
            for (r in b)
              (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                o.setAttribute(r, i);
          n.head.appendChild(o).parentNode.removeChild(o);
        }
        function T(e) {
          return null == e
            ? e + ""
            : "object" == typeof e || "function" == typeof e
            ? f[p.call(e)] || "object"
            : typeof e;
        }
        var C = "3.6.0",
          S = function (e, t) {
            return new S.fn.init(e, t);
          };
        function E(e) {
          var t = !!e && "length" in e && e.length,
            n = T(e);
          return (
            !m(e) &&
            !y(e) &&
            ("array" === n ||
              0 === t ||
              ("number" == typeof t && t > 0 && t - 1 in e))
          );
        }
        (S.fn = S.prototype =
          {
            jquery: C,
            constructor: S,
            length: 0,
            toArray: function () {
              return s.call(this);
            },
            get: function (e) {
              return null == e
                ? s.call(this)
                : e < 0
                ? this[e + this.length]
                : this[e];
            },
            pushStack: function (e) {
              var t = S.merge(this.constructor(), e);
              return (t.prevObject = this), t;
            },
            each: function (e) {
              return S.each(this, e);
            },
            map: function (e) {
              return this.pushStack(
                S.map(this, function (t, n) {
                  return e.call(t, n, t);
                })
              );
            },
            slice: function () {
              return this.pushStack(s.apply(this, arguments));
            },
            first: function () {
              return this.eq(0);
            },
            last: function () {
              return this.eq(-1);
            },
            even: function () {
              return this.pushStack(
                S.grep(this, function (e, t) {
                  return (t + 1) % 2;
                })
              );
            },
            odd: function () {
              return this.pushStack(
                S.grep(this, function (e, t) {
                  return t % 2;
                })
              );
            },
            eq: function (e) {
              var t = this.length,
                n = +e + (e < 0 ? t : 0);
              return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
            },
            end: function () {
              return this.prevObject || this.constructor();
            },
            push: l,
            sort: o.sort,
            splice: o.splice,
          }),
          (S.extend = S.fn.extend =
            function () {
              var e,
                t,
                n,
                r,
                i,
                o,
                a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                l = !1;
              for (
                "boolean" == typeof a &&
                  ((l = a), (a = arguments[s] || {}), s++),
                  "object" == typeof a || m(a) || (a = {}),
                  s === u && ((a = this), s--);
                s < u;
                s++
              )
                if (null != (e = arguments[s]))
                  for (t in e)
                    (r = e[t]),
                      "__proto__" !== t &&
                        a !== r &&
                        (l &&
                        r &&
                        (S.isPlainObject(r) || (i = Array.isArray(r)))
                          ? ((n = a[t]),
                            (o =
                              i && !Array.isArray(n)
                                ? []
                                : i || S.isPlainObject(n)
                                ? n
                                : {}),
                            (i = !1),
                            (a[t] = S.extend(l, o, r)))
                          : void 0 !== r && (a[t] = r));
              return a;
            }),
          S.extend({
            expando: "jQuery" + (C + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
              throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
              var t, n;
              return !(
                !e ||
                "[object Object]" !== p.call(e) ||
                ((t = a(e)) &&
                  ("function" !=
                    typeof (n = d.call(t, "constructor") && t.constructor) ||
                    h.call(n) !== g))
              );
            },
            isEmptyObject: function (e) {
              var t;
              for (t in e) return !1;
              return !0;
            },
            globalEval: function (e, t, n) {
              w(e, { nonce: t && t.nonce }, n);
            },
            each: function (e, t) {
              var n,
                r = 0;
              if (E(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
              else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
              return e;
            },
            makeArray: function (e, t) {
              var n = t || [];
              return (
                null != e &&
                  (E(Object(e))
                    ? S.merge(n, "string" == typeof e ? [e] : e)
                    : l.call(n, e)),
                n
              );
            },
            inArray: function (e, t, n) {
              return null == t ? -1 : c.call(t, e, n);
            },
            merge: function (e, t) {
              for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
              return (e.length = i), e;
            },
            grep: function (e, t, n) {
              for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
              return r;
            },
            map: function (e, t, n) {
              var r,
                i,
                o = 0,
                a = [];
              if (E(e))
                for (r = e.length; o < r; o++)
                  null != (i = t(e[o], o, n)) && a.push(i);
              else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
              return u(a);
            },
            guid: 1,
            support: v,
          }),
          "function" == typeof Symbol &&
            (S.fn[Symbol.iterator] = o[Symbol.iterator]),
          S.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
              " "
            ),
            function (e, t) {
              f["[object " + t + "]"] = t.toLowerCase();
            }
          );
        var k = (function (e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            v,
            m,
            y,
            x,
            b = "sizzle" + 1 * new Date(),
            w = e.document,
            T = 0,
            C = 0,
            S = ue(),
            E = ue(),
            k = ue(),
            A = ue(),
            j = function (e, t) {
              return e === t && (f = !0), 0;
            },
            N = {}.hasOwnProperty,
            D = [],
            L = D.pop,
            q = D.push,
            H = D.push,
            O = D.slice,
            R = function (e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t) return n;
              return -1;
            },
            M =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]",
            I =
              "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W =
              "\\[[\\x20\\t\\r\\n\\f]*(" +
              I +
              ")(?:" +
              P +
              "*([*^$|!~]?=)" +
              P +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              I +
              "))|)" +
              P +
              "*\\]",
            F =
              ":(" +
              I +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              W +
              ")*)|.*)\\)|)",
            B = new RegExp(P + "+", "g"),
            $ = new RegExp(
              "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
              "g"
            ),
            _ = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
            U = new RegExp(
              "^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"
            ),
            z = new RegExp(P + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + I + "$"),
            G = {
              ID: new RegExp("^#(" + I + ")"),
              CLASS: new RegExp("^\\.(" + I + ")"),
              TAG: new RegExp("^(" + I + "|[*])"),
              ATTR: new RegExp("^" + W),
              PSEUDO: new RegExp("^" + F),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + M + ")$", "i"),
              needsContext: new RegExp(
                "^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            Y = /HTML$/i,
            J = /^(?:input|select|textarea|button)$/i,
            Q = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp(
              "\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])",
              "g"
            ),
            ne = function (e, t) {
              var n = "0x" + e.slice(1) - 65536;
              return (
                t ||
                (n < 0
                  ? String.fromCharCode(n + 65536)
                  : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
              );
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function (e, t) {
              return t
                ? "\0" === e
                  ? "�"
                  : e.slice(0, -1) +
                    "\\" +
                    e.charCodeAt(e.length - 1).toString(16) +
                    " "
                : "\\" + e;
            },
            oe = function () {
              p();
            },
            ae = be(
              function (e) {
                return (
                  !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                );
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            H.apply((D = O.call(w.childNodes)), w.childNodes),
              D[w.childNodes.length].nodeType;
          } catch (e) {
            H = {
              apply: D.length
                ? function (e, t) {
                    q.apply(e, O.call(t));
                  }
                : function (e, t) {
                    for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                    e.length = n - 1;
                  },
            };
          }
          function se(e, t, r, i) {
            var o,
              s,
              l,
              c,
              f,
              h,
              m,
              y = t && t.ownerDocument,
              w = t ? t.nodeType : 9;
            if (
              ((r = r || []),
              "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))
            )
              return r;
            if (!i && (p(t), (t = t || d), g)) {
              if (11 !== w && (f = Z.exec(e)))
                if ((o = f[1])) {
                  if (9 === w) {
                    if (!(l = t.getElementById(o))) return r;
                    if (l.id === o) return r.push(l), r;
                  } else if (
                    y &&
                    (l = y.getElementById(o)) &&
                    x(t, l) &&
                    l.id === o
                  )
                    return r.push(l), r;
                } else {
                  if (f[2]) return H.apply(r, t.getElementsByTagName(e)), r;
                  if (
                    (o = f[3]) &&
                    n.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return H.apply(r, t.getElementsByClassName(o)), r;
                }
              if (
                n.qsa &&
                !A[e + " "] &&
                (!v || !v.test(e)) &&
                (1 !== w || "object" !== t.nodeName.toLowerCase())
              ) {
                if (((m = e), (y = t), 1 === w && (z.test(e) || U.test(e)))) {
                  for (
                    ((y = (ee.test(e) && me(t.parentNode)) || t) === t &&
                      n.scope) ||
                      ((c = t.getAttribute("id"))
                        ? (c = c.replace(re, ie))
                        : t.setAttribute("id", (c = b))),
                      s = (h = a(e)).length;
                    s--;

                  )
                    h[s] = (c ? "#" + c : ":scope") + " " + xe(h[s]);
                  m = h.join(",");
                }
                try {
                  return H.apply(r, y.querySelectorAll(m)), r;
                } catch (t) {
                  A(e, !0);
                } finally {
                  c === b && t.removeAttribute("id");
                }
              }
            }
            return u(e.replace($, "$1"), t, r, i);
          }
          function ue() {
            var e = [];
            return function t(n, i) {
              return (
                e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                (t[n + " "] = i)
              );
            };
          }
          function le(e) {
            return (e[b] = !0), e;
          }
          function ce(e) {
            var t = d.createElement("fieldset");
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function fe(e, t) {
            for (var n = e.split("|"), i = n.length; i--; )
              r.attrHandle[n[i]] = t;
          }
          function pe(e, t) {
            var n = t && e,
              r =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function de(e) {
            return function (t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          }
          function he(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }
          function ge(e) {
            return function (t) {
              return "form" in t
                ? t.parentNode && !1 === t.disabled
                  ? "label" in t
                    ? "label" in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e)
                  : t.disabled === e
                : "label" in t && t.disabled === e;
            };
          }
          function ve(e) {
            return le(function (t) {
              return (
                (t = +t),
                le(function (n, r) {
                  for (var i, o = e([], n.length, t), a = o.length; a--; )
                    n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                })
              );
            });
          }
          function me(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          for (t in ((n = se.support = {}),
          (o = se.isXML =
            function (e) {
              var t = e && e.namespaceURI,
                n = e && (e.ownerDocument || e).documentElement;
              return !Y.test(t || (n && n.nodeName) || "HTML");
            }),
          (p = se.setDocument =
            function (e) {
              var t,
                i,
                a = e ? e.ownerDocument || e : w;
              return a != d && 9 === a.nodeType && a.documentElement
                ? ((h = (d = a).documentElement),
                  (g = !o(d)),
                  w != d &&
                    (i = d.defaultView) &&
                    i.top !== i &&
                    (i.addEventListener
                      ? i.addEventListener("unload", oe, !1)
                      : i.attachEvent && i.attachEvent("onunload", oe)),
                  (n.scope = ce(function (e) {
                    return (
                      h.appendChild(e).appendChild(d.createElement("div")),
                      void 0 !== e.querySelectorAll &&
                        !e.querySelectorAll(":scope fieldset div").length
                    );
                  })),
                  (n.attributes = ce(function (e) {
                    return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (n.getElementsByTagName = ce(function (e) {
                    return (
                      e.appendChild(d.createComment("")),
                      !e.getElementsByTagName("*").length
                    );
                  })),
                  (n.getElementsByClassName = K.test(d.getElementsByClassName)),
                  (n.getById = ce(function (e) {
                    return (
                      (h.appendChild(e).id = b),
                      !d.getElementsByName || !d.getElementsByName(b).length
                    );
                  })),
                  n.getById
                    ? ((r.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      }),
                      (r.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && g) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((r.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                          var n =
                            void 0 !== e.getAttributeNode &&
                            e.getAttributeNode("id");
                          return n && n.value === t;
                        };
                      }),
                      (r.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && g) {
                          var n,
                            r,
                            i,
                            o = t.getElementById(e);
                          if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                              return [o];
                            for (
                              i = t.getElementsByName(e), r = 0;
                              (o = i[r++]);

                            )
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [o];
                          }
                          return [];
                        }
                      })),
                  (r.find.TAG = n.getElementsByTagName
                    ? function (e, t) {
                        return void 0 !== t.getElementsByTagName
                          ? t.getElementsByTagName(e)
                          : n.qsa
                          ? t.querySelectorAll(e)
                          : void 0;
                      }
                    : function (e, t) {
                        var n,
                          r = [],
                          i = 0,
                          o = t.getElementsByTagName(e);
                        if ("*" === e) {
                          for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                          return r;
                        }
                        return o;
                      }),
                  (r.find.CLASS =
                    n.getElementsByClassName &&
                    function (e, t) {
                      if (void 0 !== t.getElementsByClassName && g)
                        return t.getElementsByClassName(e);
                    }),
                  (m = []),
                  (v = []),
                  (n.qsa = K.test(d.querySelectorAll)) &&
                    (ce(function (e) {
                      var t;
                      (h.appendChild(e).innerHTML =
                        "<a id='" +
                        b +
                        "'></a><select id='" +
                        b +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length &&
                          v.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length ||
                          v.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + M + ")"),
                        e.querySelectorAll("[id~=" + b + "-]").length ||
                          v.push("~="),
                        (t = d.createElement("input")).setAttribute("name", ""),
                        e.appendChild(t),
                        e.querySelectorAll("[name='']").length ||
                          v.push(
                            "\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"
                          ),
                        e.querySelectorAll(":checked").length ||
                          v.push(":checked"),
                        e.querySelectorAll("a#" + b + "+*").length ||
                          v.push(".#.+[+~]"),
                        e.querySelectorAll("\\\f"),
                        v.push("[\\r\\n\\f]");
                    }),
                    ce(function (e) {
                      e.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var t = d.createElement("input");
                      t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length &&
                          v.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length &&
                          v.push(":enabled", ":disabled"),
                        (h.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(":disabled").length &&
                          v.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        v.push(",.*:");
                    })),
                  (n.matchesSelector = K.test(
                    (y =
                      h.matches ||
                      h.webkitMatchesSelector ||
                      h.mozMatchesSelector ||
                      h.oMatchesSelector ||
                      h.msMatchesSelector)
                  )) &&
                    ce(function (e) {
                      (n.disconnectedMatch = y.call(e, "*")),
                        y.call(e, "[s!='']:x"),
                        m.push("!=", F);
                    }),
                  (v = v.length && new RegExp(v.join("|"))),
                  (m = m.length && new RegExp(m.join("|"))),
                  (t = K.test(h.compareDocumentPosition)),
                  (x =
                    t || K.test(h.contains)
                      ? function (e, t) {
                          var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                          return (
                            e === r ||
                            !(
                              !r ||
                              1 !== r.nodeType ||
                              !(n.contains
                                ? n.contains(r)
                                : e.compareDocumentPosition &&
                                  16 & e.compareDocumentPosition(r))
                            )
                          );
                        }
                      : function (e, t) {
                          if (t)
                            for (; (t = t.parentNode); ) if (t === e) return !0;
                          return !1;
                        }),
                  (j = t
                    ? function (e, t) {
                        if (e === t) return (f = !0), 0;
                        var r =
                          !e.compareDocumentPosition -
                          !t.compareDocumentPosition;
                        return (
                          r ||
                          (1 &
                            (r =
                              (e.ownerDocument || e) == (t.ownerDocument || t)
                                ? e.compareDocumentPosition(t)
                                : 1) ||
                          (!n.sortDetached &&
                            t.compareDocumentPosition(e) === r)
                            ? e == d || (e.ownerDocument == w && x(w, e))
                              ? -1
                              : t == d || (t.ownerDocument == w && x(w, t))
                              ? 1
                              : c
                              ? R(c, e) - R(c, t)
                              : 0
                            : 4 & r
                            ? -1
                            : 1)
                        );
                      }
                    : function (e, t) {
                        if (e === t) return (f = !0), 0;
                        var n,
                          r = 0,
                          i = e.parentNode,
                          o = t.parentNode,
                          a = [e],
                          s = [t];
                        if (!i || !o)
                          return e == d
                            ? -1
                            : t == d
                            ? 1
                            : i
                            ? -1
                            : o
                            ? 1
                            : c
                            ? R(c, e) - R(c, t)
                            : 0;
                        if (i === o) return pe(e, t);
                        for (n = e; (n = n.parentNode); ) a.unshift(n);
                        for (n = t; (n = n.parentNode); ) s.unshift(n);
                        for (; a[r] === s[r]; ) r++;
                        return r
                          ? pe(a[r], s[r])
                          : a[r] == w
                          ? -1
                          : s[r] == w
                          ? 1
                          : 0;
                      }),
                  d)
                : d;
            }),
          (se.matches = function (e, t) {
            return se(e, null, null, t);
          }),
          (se.matchesSelector = function (e, t) {
            if (
              (p(e),
              n.matchesSelector &&
                g &&
                !A[t + " "] &&
                (!m || !m.test(t)) &&
                (!v || !v.test(t)))
            )
              try {
                var r = y.call(e, t);
                if (
                  r ||
                  n.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return r;
              } catch (e) {
                A(t, !0);
              }
            return se(t, d, null, [e]).length > 0;
          }),
          (se.contains = function (e, t) {
            return (e.ownerDocument || e) != d && p(e), x(e, t);
          }),
          (se.attr = function (e, t) {
            (e.ownerDocument || e) != d && p(e);
            var i = r.attrHandle[t.toLowerCase()],
              o =
                i && N.call(r.attrHandle, t.toLowerCase())
                  ? i(e, t, !g)
                  : void 0;
            return void 0 !== o
              ? o
              : n.attributes || !g
              ? e.getAttribute(t)
              : (o = e.getAttributeNode(t)) && o.specified
              ? o.value
              : null;
          }),
          (se.escape = function (e) {
            return (e + "").replace(re, ie);
          }),
          (se.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (se.uniqueSort = function (e) {
            var t,
              r = [],
              i = 0,
              o = 0;
            if (
              ((f = !n.detectDuplicates),
              (c = !n.sortStable && e.slice(0)),
              e.sort(j),
              f)
            ) {
              for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
              for (; i--; ) e.splice(r[i], 1);
            }
            return (c = null), e;
          }),
          (i = se.getText =
            function (e) {
              var t,
                n = "",
                r = 0,
                o = e.nodeType;
              if (o) {
                if (1 === o || 9 === o || 11 === o) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
              } else for (; (t = e[r++]); ) n += i(t);
              return n;
            }),
          ((r = se.selectors =
            {
              cacheLength: 50,
              createPseudo: le,
              match: G,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (e) {
                  return (
                    (e[1] = e[1].replace(te, ne)),
                    (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                  );
                },
                CHILD: function (e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    "nth" === e[1].slice(0, 3)
                      ? (e[3] || se.error(e[0]),
                        (e[4] = +(e[4]
                          ? e[5] + (e[6] || 1)
                          : 2 * ("even" === e[3] || "odd" === e[3]))),
                        (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                      : e[3] && se.error(e[0]),
                    e
                  );
                },
                PSEUDO: function (e) {
                  var t,
                    n = !e[6] && e[2];
                  return G.CHILD.test(e[0])
                    ? null
                    : (e[3]
                        ? (e[2] = e[4] || e[5] || "")
                        : n &&
                          X.test(n) &&
                          (t = a(n, !0)) &&
                          (t = n.indexOf(")", n.length - t) - n.length) &&
                          ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                      e.slice(0, 3));
                },
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(te, ne).toLowerCase();
                  return "*" === e
                    ? function () {
                        return !0;
                      }
                    : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                      };
                },
                CLASS: function (e) {
                  var t = S[e + " "];
                  return (
                    t ||
                    ((t = new RegExp(
                      "(^|[\\x20\\t\\r\\n\\f])" + e + "(" + P + "|$)"
                    )) &&
                      S(e, function (e) {
                        return t.test(
                          ("string" == typeof e.className && e.className) ||
                            (void 0 !== e.getAttribute &&
                              e.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function (e, t, n) {
                  return function (r) {
                    var i = se.attr(r, e);
                    return null == i
                      ? "!=" === t
                      : !t ||
                          ((i += ""),
                          "=" === t
                            ? i === n
                            : "!=" === t
                            ? i !== n
                            : "^=" === t
                            ? n && 0 === i.indexOf(n)
                            : "*=" === t
                            ? n && i.indexOf(n) > -1
                            : "$=" === t
                            ? n && i.slice(-n.length) === n
                            : "~=" === t
                            ? (" " + i.replace(B, " ") + " ").indexOf(n) > -1
                            : "|=" === t &&
                              (i === n ||
                                i.slice(0, n.length + 1) === n + "-"));
                  };
                },
                CHILD: function (e, t, n, r, i) {
                  var o = "nth" !== e.slice(0, 3),
                    a = "last" !== e.slice(-4),
                    s = "of-type" === t;
                  return 1 === r && 0 === i
                    ? function (e) {
                        return !!e.parentNode;
                      }
                    : function (t, n, u) {
                        var l,
                          c,
                          f,
                          p,
                          d,
                          h,
                          g = o !== a ? "nextSibling" : "previousSibling",
                          v = t.parentNode,
                          m = s && t.nodeName.toLowerCase(),
                          y = !u && !s,
                          x = !1;
                        if (v) {
                          if (o) {
                            for (; g; ) {
                              for (p = t; (p = p[g]); )
                                if (
                                  s
                                    ? p.nodeName.toLowerCase() === m
                                    : 1 === p.nodeType
                                )
                                  return !1;
                              h = g = "only" === e && !h && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((h = [a ? v.firstChild : v.lastChild]), a && y)
                          ) {
                            for (
                              x =
                                (d =
                                  (l =
                                    (c =
                                      (f = (p = v)[b] || (p[b] = {}))[
                                        p.uniqueID
                                      ] || (f[p.uniqueID] = {}))[e] ||
                                    [])[0] === T && l[1]) && l[2],
                                p = d && v.childNodes[d];
                              (p =
                                (++d && p && p[g]) || (x = d = 0) || h.pop());

                            )
                              if (1 === p.nodeType && ++x && p === t) {
                                c[e] = [T, d, x];
                                break;
                              }
                          } else if (
                            (y &&
                              (x = d =
                                (l =
                                  (c =
                                    (f = (p = t)[b] || (p[b] = {}))[
                                      p.uniqueID
                                    ] || (f[p.uniqueID] = {}))[e] || [])[0] ===
                                  T && l[1]),
                            !1 === x)
                          )
                            for (
                              ;
                              (p =
                                (++d && p && p[g]) || (x = d = 0) || h.pop()) &&
                              ((s
                                ? p.nodeName.toLowerCase() !== m
                                : 1 !== p.nodeType) ||
                                !++x ||
                                (y &&
                                  ((c =
                                    (f = p[b] || (p[b] = {}))[p.uniqueID] ||
                                    (f[p.uniqueID] = {}))[e] = [T, x]),
                                p !== t));

                            );
                          return (x -= i) === r || (x % r == 0 && x / r >= 0);
                        }
                      };
                },
                PSEUDO: function (e, t) {
                  var n,
                    i =
                      r.pseudos[e] ||
                      r.setFilters[e.toLowerCase()] ||
                      se.error("unsupported pseudo: " + e);
                  return i[b]
                    ? i(t)
                    : i.length > 1
                    ? ((n = [e, e, "", t]),
                      r.setFilters.hasOwnProperty(e.toLowerCase())
                        ? le(function (e, n) {
                            for (var r, o = i(e, t), a = o.length; a--; )
                              e[(r = R(e, o[a]))] = !(n[r] = o[a]);
                          })
                        : function (e) {
                            return i(e, 0, n);
                          })
                    : i;
                },
              },
              pseudos: {
                not: le(function (e) {
                  var t = [],
                    n = [],
                    r = s(e.replace($, "$1"));
                  return r[b]
                    ? le(function (e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--; )
                          (o = a[s]) && (e[s] = !(t[s] = o));
                      })
                    : function (e, i, o) {
                        return (
                          (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                        );
                      };
                }),
                has: le(function (e) {
                  return function (t) {
                    return se(e, t).length > 0;
                  };
                }),
                contains: le(function (e) {
                  return (
                    (e = e.replace(te, ne)),
                    function (t) {
                      return (t.textContent || i(t)).indexOf(e) > -1;
                    }
                  );
                }),
                lang: le(function (e) {
                  return (
                    V.test(e || "") || se.error("unsupported lang: " + e),
                    (e = e.replace(te, ne).toLowerCase()),
                    function (t) {
                      var n;
                      do {
                        if (
                          (n = g
                            ? t.lang
                            : t.getAttribute("xml:lang") ||
                              t.getAttribute("lang"))
                        )
                          return (
                            (n = n.toLowerCase()) === e ||
                            0 === n.indexOf(e + "-")
                          );
                      } while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id;
                },
                root: function (e) {
                  return e === h;
                },
                focus: function (e) {
                  return (
                    e === d.activeElement &&
                    (!d.hasFocus || d.hasFocus()) &&
                    !!(e.type || e.href || ~e.tabIndex)
                  );
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && !!e.checked) ||
                    ("option" === t && !!e.selected)
                  );
                },
                selected: function (e) {
                  return (
                    e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                  );
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (e) {
                  return !r.pseudos.empty(e);
                },
                header: function (e) {
                  return Q.test(e.nodeName);
                },
                input: function (e) {
                  return J.test(e.nodeName);
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && "button" === e.type) || "button" === t
                  );
                },
                text: function (e) {
                  var t;
                  return (
                    "input" === e.nodeName.toLowerCase() &&
                    "text" === e.type &&
                    (null == (t = e.getAttribute("type")) ||
                      "text" === t.toLowerCase())
                  );
                },
                first: ve(function () {
                  return [0];
                }),
                last: ve(function (e, t) {
                  return [t - 1];
                }),
                eq: ve(function (e, t, n) {
                  return [n < 0 ? n + t : n];
                }),
                even: ve(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e;
                }),
                odd: ve(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e;
                }),
                lt: ve(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                    e.push(r);
                  return e;
                }),
                gt: ve(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                  return e;
                }),
              },
            }).pseudos.nth = r.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            r.pseudos[t] = de(t);
          for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
          function ye() {}
          function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
          }
          function be(e, t, n) {
            var r = t.dir,
              i = t.next,
              o = i || r,
              a = n && "parentNode" === o,
              s = C++;
            return t.first
              ? function (t, n, i) {
                  for (; (t = t[r]); )
                    if (1 === t.nodeType || a) return e(t, n, i);
                  return !1;
                }
              : function (t, n, u) {
                  var l,
                    c,
                    f,
                    p = [T, s];
                  if (u) {
                    for (; (t = t[r]); )
                      if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                  } else
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || a)
                        if (
                          ((c =
                            (f = t[b] || (t[b] = {}))[t.uniqueID] ||
                            (f[t.uniqueID] = {})),
                          i && i === t.nodeName.toLowerCase())
                        )
                          t = t[r] || t;
                        else {
                          if ((l = c[o]) && l[0] === T && l[1] === s)
                            return (p[2] = l[2]);
                          if (((c[o] = p), (p[2] = e(t, n, u)))) return !0;
                        }
                  return !1;
                };
          }
          function we(e) {
            return e.length > 1
              ? function (t, n, r) {
                  for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                  return !0;
                }
              : e[0];
          }
          function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
              (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
            return a;
          }
          function Ce(e, t, n, r, i, o) {
            return (
              r && !r[b] && (r = Ce(r)),
              i && !i[b] && (i = Ce(i, o)),
              le(function (o, a, s, u) {
                var l,
                  c,
                  f,
                  p = [],
                  d = [],
                  h = a.length,
                  g =
                    o ||
                    (function (e, t, n) {
                      for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                      return n;
                    })(t || "*", s.nodeType ? [s] : s, []),
                  v = !e || (!o && t) ? g : Te(g, p, e, s, u),
                  m = n ? (i || (o ? e : h || r) ? [] : a) : v;
                if ((n && n(v, m, s, u), r))
                  for (l = Te(m, d), r(l, [], s, u), c = l.length; c--; )
                    (f = l[c]) && (m[d[c]] = !(v[d[c]] = f));
                if (o) {
                  if (i || e) {
                    if (i) {
                      for (l = [], c = m.length; c--; )
                        (f = m[c]) && l.push((v[c] = f));
                      i(null, (m = []), l, u);
                    }
                    for (c = m.length; c--; )
                      (f = m[c]) &&
                        (l = i ? R(o, f) : p[c]) > -1 &&
                        (o[l] = !(a[l] = f));
                  }
                } else (m = Te(m === a ? m.splice(h, m.length) : m)), i ? i(null, a, m, u) : H.apply(a, m);
              })
            );
          }
          function Se(e) {
            for (
              var t,
                n,
                i,
                o = e.length,
                a = r.relative[e[0].type],
                s = a || r.relative[" "],
                u = a ? 1 : 0,
                c = be(
                  function (e) {
                    return e === t;
                  },
                  s,
                  !0
                ),
                f = be(
                  function (e) {
                    return R(t, e) > -1;
                  },
                  s,
                  !0
                ),
                p = [
                  function (e, n, r) {
                    var i =
                      (!a && (r || n !== l)) ||
                      ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                    return (t = null), i;
                  },
                ];
              u < o;
              u++
            )
              if ((n = r.relative[e[u].type])) p = [be(we(p), n)];
              else {
                if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                  for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                  return Ce(
                    u > 1 && we(p),
                    u > 1 &&
                      xe(
                        e
                          .slice(0, u - 1)
                          .concat({ value: " " === e[u - 2].type ? "*" : "" })
                      ).replace($, "$1"),
                    n,
                    u < i && Se(e.slice(u, i)),
                    i < o && Se((e = e.slice(i))),
                    i < o && xe(e)
                  );
                }
                p.push(n);
              }
            return we(p);
          }
          return (
            (ye.prototype = r.filters = r.pseudos),
            (r.setFilters = new ye()),
            (a = se.tokenize =
              function (e, t) {
                var n,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l,
                  c = E[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (s = e, u = [], l = r.preFilter; s; ) {
                  for (a in ((n && !(i = _.exec(s))) ||
                    (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
                  (n = !1),
                  (i = U.exec(s)) &&
                    ((n = i.shift()),
                    o.push({ value: n, type: i[0].replace($, " ") }),
                    (s = s.slice(n.length))),
                  r.filter))
                    !(i = G[a].exec(s)) ||
                      (l[a] && !(i = l[a](i))) ||
                      ((n = i.shift()),
                      o.push({ value: n, type: a, matches: i }),
                      (s = s.slice(n.length)));
                  if (!n) break;
                }
                return t ? s.length : s ? se.error(e) : E(e, u).slice(0);
              }),
            (s = se.compile =
              function (e, t) {
                var n,
                  i = [],
                  o = [],
                  s = k[e + " "];
                if (!s) {
                  for (t || (t = a(e)), n = t.length; n--; )
                    (s = Se(t[n]))[b] ? i.push(s) : o.push(s);
                  (s = k(
                    e,
                    (function (e, t) {
                      var n = t.length > 0,
                        i = e.length > 0,
                        o = function (o, a, s, u, c) {
                          var f,
                            h,
                            v,
                            m = 0,
                            y = "0",
                            x = o && [],
                            b = [],
                            w = l,
                            C = o || (i && r.find.TAG("*", c)),
                            S = (T += null == w ? 1 : Math.random() || 0.1),
                            E = C.length;
                          for (
                            c && (l = a == d || a || c);
                            y !== E && null != (f = C[y]);
                            y++
                          ) {
                            if (i && f) {
                              for (
                                h = 0,
                                  a || f.ownerDocument == d || (p(f), (s = !g));
                                (v = e[h++]);

                              )
                                if (v(f, a || d, s)) {
                                  u.push(f);
                                  break;
                                }
                              c && (T = S);
                            }
                            n && ((f = !v && f) && m--, o && x.push(f));
                          }
                          if (((m += y), n && y !== m)) {
                            for (h = 0; (v = t[h++]); ) v(x, b, a, s);
                            if (o) {
                              if (m > 0)
                                for (; y--; )
                                  x[y] || b[y] || (b[y] = L.call(u));
                              b = Te(b);
                            }
                            H.apply(u, b),
                              c &&
                                !o &&
                                b.length > 0 &&
                                m + t.length > 1 &&
                                se.uniqueSort(u);
                          }
                          return c && ((T = S), (l = w)), x;
                        };
                      return n ? le(o) : o;
                    })(o, i)
                  )).selector = e;
                }
                return s;
              }),
            (u = se.select =
              function (e, t, n, i) {
                var o,
                  u,
                  l,
                  c,
                  f,
                  p = "function" == typeof e && e,
                  d = !i && a((e = p.selector || e));
                if (((n = n || []), 1 === d.length)) {
                  if (
                    (u = d[0] = d[0].slice(0)).length > 2 &&
                    "ID" === (l = u[0]).type &&
                    9 === t.nodeType &&
                    g &&
                    r.relative[u[1].type]
                  ) {
                    if (
                      !(t = (r.find.ID(l.matches[0].replace(te, ne), t) ||
                        [])[0])
                    )
                      return n;
                    p && (t = t.parentNode),
                      (e = e.slice(u.shift().value.length));
                  }
                  for (
                    o = G.needsContext.test(e) ? 0 : u.length;
                    o-- && ((l = u[o]), !r.relative[(c = l.type)]);

                  )
                    if (
                      (f = r.find[c]) &&
                      (i = f(
                        l.matches[0].replace(te, ne),
                        (ee.test(u[0].type) && me(t.parentNode)) || t
                      ))
                    ) {
                      if ((u.splice(o, 1), !(e = i.length && xe(u))))
                        return H.apply(n, i), n;
                      break;
                    }
                }
                return (
                  (p || s(e, d))(
                    i,
                    t,
                    !g,
                    n,
                    !t || (ee.test(e) && me(t.parentNode)) || t
                  ),
                  n
                );
              }),
            (n.sortStable = b.split("").sort(j).join("") === b),
            (n.detectDuplicates = !!f),
            p(),
            (n.sortDetached = ce(function (e) {
              return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
            })),
            ce(function (e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                "#" === e.firstChild.getAttribute("href")
              );
            }) ||
              fe("type|href|height|width", function (e, t, n) {
                if (!n)
                  return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
            (n.attributes &&
              ce(function (e) {
                return (
                  (e.innerHTML = "<input/>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })) ||
              fe("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                  return e.defaultValue;
              }),
            ce(function (e) {
              return null == e.getAttribute("disabled");
            }) ||
              fe(M, function (e, t, n) {
                var r;
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (r = e.getAttributeNode(t)) && r.specified
                    ? r.value
                    : null;
              }),
            se
          );
        })(r);
        (S.find = k),
          (S.expr = k.selectors),
          (S.expr[":"] = S.expr.pseudos),
          (S.uniqueSort = S.unique = k.uniqueSort),
          (S.text = k.getText),
          (S.isXMLDoc = k.isXML),
          (S.contains = k.contains),
          (S.escapeSelector = k.escape);
        var A = function (e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
              if (1 === e.nodeType) {
                if (i && S(e).is(n)) break;
                r.push(e);
              }
            return r;
          },
          j = function (e, t) {
            for (var n = []; e; e = e.nextSibling)
              1 === e.nodeType && e !== t && n.push(e);
            return n;
          },
          N = S.expr.match.needsContext;
        function D(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        }
        var L =
          /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function q(e, t, n) {
          return m(t)
            ? S.grep(e, function (e, r) {
                return !!t.call(e, r, e) !== n;
              })
            : t.nodeType
            ? S.grep(e, function (e) {
                return (e === t) !== n;
              })
            : "string" != typeof t
            ? S.grep(e, function (e) {
                return c.call(t, e) > -1 !== n;
              })
            : S.filter(t, e, n);
        }
        (S.filter = function (e, t, n) {
          var r = t[0];
          return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
              ? S.find.matchesSelector(r, e)
                ? [r]
                : []
              : S.find.matches(
                  e,
                  S.grep(t, function (e) {
                    return 1 === e.nodeType;
                  })
                )
          );
        }),
          S.fn.extend({
            find: function (e) {
              var t,
                n,
                r = this.length,
                i = this;
              if ("string" != typeof e)
                return this.pushStack(
                  S(e).filter(function () {
                    for (t = 0; t < r; t++)
                      if (S.contains(i[t], this)) return !0;
                  })
                );
              for (n = this.pushStack([]), t = 0; t < r; t++)
                S.find(e, i[t], n);
              return r > 1 ? S.uniqueSort(n) : n;
            },
            filter: function (e) {
              return this.pushStack(q(this, e || [], !1));
            },
            not: function (e) {
              return this.pushStack(q(this, e || [], !0));
            },
            is: function (e) {
              return !!q(
                this,
                "string" == typeof e && N.test(e) ? S(e) : e || [],
                !1
              ).length;
            },
          });
        var H,
          O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        ((S.fn.init = function (e, t, n) {
          var r, i;
          if (!e) return this;
          if (((n = n || H), "string" == typeof e)) {
            if (
              !(r =
                "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                  ? [null, e, null]
                  : O.exec(e)) ||
              (!r[1] && t)
            )
              return !t || t.jquery
                ? (t || n).find(e)
                : this.constructor(t).find(e);
            if (r[1]) {
              if (
                ((t = t instanceof S ? t[0] : t),
                S.merge(
                  this,
                  S.parseHTML(
                    r[1],
                    t && t.nodeType ? t.ownerDocument || t : x,
                    !0
                  )
                ),
                L.test(r[1]) && S.isPlainObject(t))
              )
                for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
              return this;
            }
            return (
              (i = x.getElementById(r[2])) &&
                ((this[0] = i), (this.length = 1)),
              this
            );
          }
          return e.nodeType
            ? ((this[0] = e), (this.length = 1), this)
            : m(e)
            ? void 0 !== n.ready
              ? n.ready(e)
              : e(S)
            : S.makeArray(e, this);
        }).prototype = S.fn),
          (H = S(x));
        var R = /^(?:parents|prev(?:Until|All))/,
          M = { children: !0, contents: !0, next: !0, prev: !0 };
        function P(e, t) {
          for (; (e = e[t]) && 1 !== e.nodeType; );
          return e;
        }
        S.fn.extend({
          has: function (e) {
            var t = S(e, this),
              n = t.length;
            return this.filter(function () {
              for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
            });
          },
          closest: function (e, t) {
            var n,
              r = 0,
              i = this.length,
              o = [],
              a = "string" != typeof e && S(e);
            if (!N.test(e))
              for (; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                  if (
                    n.nodeType < 11 &&
                    (a
                      ? a.index(n) > -1
                      : 1 === n.nodeType && S.find.matchesSelector(n, e))
                  ) {
                    o.push(n);
                    break;
                  }
            return this.pushStack(o.length > 1 ? S.uniqueSort(o) : o);
          },
          index: function (e) {
            return e
              ? "string" == typeof e
                ? c.call(S(e), this[0])
                : c.call(this, e.jquery ? e[0] : e)
              : this[0] && this[0].parentNode
              ? this.first().prevAll().length
              : -1;
          },
          add: function (e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
          },
          addBack: function (e) {
            return this.add(
              null == e ? this.prevObject : this.prevObject.filter(e)
            );
          },
        }),
          S.each(
            {
              parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
              },
              parents: function (e) {
                return A(e, "parentNode");
              },
              parentsUntil: function (e, t, n) {
                return A(e, "parentNode", n);
              },
              next: function (e) {
                return P(e, "nextSibling");
              },
              prev: function (e) {
                return P(e, "previousSibling");
              },
              nextAll: function (e) {
                return A(e, "nextSibling");
              },
              prevAll: function (e) {
                return A(e, "previousSibling");
              },
              nextUntil: function (e, t, n) {
                return A(e, "nextSibling", n);
              },
              prevUntil: function (e, t, n) {
                return A(e, "previousSibling", n);
              },
              siblings: function (e) {
                return j((e.parentNode || {}).firstChild, e);
              },
              children: function (e) {
                return j(e.firstChild);
              },
              contents: function (e) {
                return null != e.contentDocument && a(e.contentDocument)
                  ? e.contentDocument
                  : (D(e, "template") && (e = e.content || e),
                    S.merge([], e.childNodes));
              },
            },
            function (e, t) {
              S.fn[e] = function (n, r) {
                var i = S.map(this, t, n);
                return (
                  "Until" !== e.slice(-5) && (r = n),
                  r && "string" == typeof r && (i = S.filter(r, i)),
                  this.length > 1 &&
                    (M[e] || S.uniqueSort(i), R.test(e) && i.reverse()),
                  this.pushStack(i)
                );
              };
            }
          );
        var I = /[^\x20\t\r\n\f]+/g;
        function W(e) {
          return e;
        }
        function F(e) {
          throw e;
        }
        function B(e, t, n, r) {
          var i;
          try {
            e && m((i = e.promise))
              ? i.call(e).done(t).fail(n)
              : e && m((i = e.then))
              ? i.call(e, t, n)
              : t.apply(void 0, [e].slice(r));
          } catch (e) {
            n.apply(void 0, [e]);
          }
        }
        (S.Callbacks = function (e) {
          e =
            "string" == typeof e
              ? (function (e) {
                  var t = {};
                  return (
                    S.each(e.match(I) || [], function (e, n) {
                      t[n] = !0;
                    }),
                    t
                  );
                })(e)
              : S.extend({}, e);
          var t,
            n,
            r,
            i,
            o = [],
            a = [],
            s = -1,
            u = function () {
              for (i = i || e.once, r = t = !0; a.length; s = -1)
                for (n = a.shift(); ++s < o.length; )
                  !1 === o[s].apply(n[0], n[1]) &&
                    e.stopOnFalse &&
                    ((s = o.length), (n = !1));
              e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
            },
            l = {
              add: function () {
                return (
                  o &&
                    (n && !t && ((s = o.length - 1), a.push(n)),
                    (function t(n) {
                      S.each(n, function (n, r) {
                        m(r)
                          ? (e.unique && l.has(r)) || o.push(r)
                          : r && r.length && "string" !== T(r) && t(r);
                      });
                    })(arguments),
                    n && !t && u()),
                  this
                );
              },
              remove: function () {
                return (
                  S.each(arguments, function (e, t) {
                    for (var n; (n = S.inArray(t, o, n)) > -1; )
                      o.splice(n, 1), n <= s && s--;
                  }),
                  this
                );
              },
              has: function (e) {
                return e ? S.inArray(e, o) > -1 : o.length > 0;
              },
              empty: function () {
                return o && (o = []), this;
              },
              disable: function () {
                return (i = a = []), (o = n = ""), this;
              },
              disabled: function () {
                return !o;
              },
              lock: function () {
                return (i = a = []), n || t || (o = n = ""), this;
              },
              locked: function () {
                return !!i;
              },
              fireWith: function (e, n) {
                return (
                  i ||
                    ((n = [e, (n = n || []).slice ? n.slice() : n]),
                    a.push(n),
                    t || u()),
                  this
                );
              },
              fire: function () {
                return l.fireWith(this, arguments), this;
              },
              fired: function () {
                return !!r;
              },
            };
          return l;
        }),
          S.extend({
            Deferred: function (e) {
              var t = [
                  [
                    "notify",
                    "progress",
                    S.Callbacks("memory"),
                    S.Callbacks("memory"),
                    2,
                  ],
                  [
                    "resolve",
                    "done",
                    S.Callbacks("once memory"),
                    S.Callbacks("once memory"),
                    0,
                    "resolved",
                  ],
                  [
                    "reject",
                    "fail",
                    S.Callbacks("once memory"),
                    S.Callbacks("once memory"),
                    1,
                    "rejected",
                  ],
                ],
                n = "pending",
                i = {
                  state: function () {
                    return n;
                  },
                  always: function () {
                    return o.done(arguments).fail(arguments), this;
                  },
                  catch: function (e) {
                    return i.then(null, e);
                  },
                  pipe: function () {
                    var e = arguments;
                    return S.Deferred(function (n) {
                      S.each(t, function (t, r) {
                        var i = m(e[r[4]]) && e[r[4]];
                        o[r[1]](function () {
                          var e = i && i.apply(this, arguments);
                          e && m(e.promise)
                            ? e
                                .promise()
                                .progress(n.notify)
                                .done(n.resolve)
                                .fail(n.reject)
                            : n[r[0] + "With"](this, i ? [e] : arguments);
                        });
                      }),
                        (e = null);
                    }).promise();
                  },
                  then: function (e, n, i) {
                    var o = 0;
                    function a(e, t, n, i) {
                      return function () {
                        var s = this,
                          u = arguments,
                          l = function () {
                            var r, l;
                            if (!(e < o)) {
                              if ((r = n.apply(s, u)) === t.promise())
                                throw new TypeError("Thenable self-resolution");
                              (l =
                                r &&
                                ("object" == typeof r ||
                                  "function" == typeof r) &&
                                r.then),
                                m(l)
                                  ? i
                                    ? l.call(r, a(o, t, W, i), a(o, t, F, i))
                                    : (o++,
                                      l.call(
                                        r,
                                        a(o, t, W, i),
                                        a(o, t, F, i),
                                        a(o, t, W, t.notifyWith)
                                      ))
                                  : (n !== W && ((s = void 0), (u = [r])),
                                    (i || t.resolveWith)(s, u));
                            }
                          },
                          c = i
                            ? l
                            : function () {
                                try {
                                  l();
                                } catch (r) {
                                  S.Deferred.exceptionHook &&
                                    S.Deferred.exceptionHook(r, c.stackTrace),
                                    e + 1 >= o &&
                                      (n !== F && ((s = void 0), (u = [r])),
                                      t.rejectWith(s, u));
                                }
                              };
                        e
                          ? c()
                          : (S.Deferred.getStackHook &&
                              (c.stackTrace = S.Deferred.getStackHook()),
                            r.setTimeout(c));
                      };
                    }
                    return S.Deferred(function (r) {
                      t[0][3].add(a(0, r, m(i) ? i : W, r.notifyWith)),
                        t[1][3].add(a(0, r, m(e) ? e : W)),
                        t[2][3].add(a(0, r, m(n) ? n : F));
                    }).promise();
                  },
                  promise: function (e) {
                    return null != e ? S.extend(e, i) : i;
                  },
                },
                o = {};
              return (
                S.each(t, function (e, r) {
                  var a = r[2],
                    s = r[5];
                  (i[r[1]] = a.add),
                    s &&
                      a.add(
                        function () {
                          n = s;
                        },
                        t[3 - e][2].disable,
                        t[3 - e][3].disable,
                        t[0][2].lock,
                        t[0][3].lock
                      ),
                    a.add(r[3].fire),
                    (o[r[0]] = function () {
                      return (
                        o[r[0] + "With"](this === o ? void 0 : this, arguments),
                        this
                      );
                    }),
                    (o[r[0] + "With"] = a.fireWith);
                }),
                i.promise(o),
                e && e.call(o, o),
                o
              );
            },
            when: function (e) {
              var t = arguments.length,
                n = t,
                r = Array(n),
                i = s.call(arguments),
                o = S.Deferred(),
                a = function (e) {
                  return function (n) {
                    (r[e] = this),
                      (i[e] = arguments.length > 1 ? s.call(arguments) : n),
                      --t || o.resolveWith(r, i);
                  };
                };
              if (
                t <= 1 &&
                (B(e, o.done(a(n)).resolve, o.reject, !t),
                "pending" === o.state() || m(i[n] && i[n].then))
              )
                return o.then();
              for (; n--; ) B(i[n], a(n), o.reject);
              return o.promise();
            },
          });
        var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        (S.Deferred.exceptionHook = function (e, t) {
          r.console &&
            r.console.warn &&
            e &&
            $.test(e.name) &&
            r.console.warn(
              "jQuery.Deferred exception: " + e.message,
              e.stack,
              t
            );
        }),
          (S.readyException = function (e) {
            r.setTimeout(function () {
              throw e;
            });
          });
        var _ = S.Deferred();
        function U() {
          x.removeEventListener("DOMContentLoaded", U),
            r.removeEventListener("load", U),
            S.ready();
        }
        (S.fn.ready = function (e) {
          return (
            _.then(e).catch(function (e) {
              S.readyException(e);
            }),
            this
          );
        }),
          S.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
              (!0 === e ? --S.readyWait : S.isReady) ||
                ((S.isReady = !0),
                (!0 !== e && --S.readyWait > 0) || _.resolveWith(x, [S]));
            },
          }),
          (S.ready.then = _.then),
          "complete" === x.readyState ||
          ("loading" !== x.readyState && !x.documentElement.doScroll)
            ? r.setTimeout(S.ready)
            : (x.addEventListener("DOMContentLoaded", U),
              r.addEventListener("load", U));
        var z = function (e, t, n, r, i, o, a) {
            var s = 0,
              u = e.length,
              l = null == n;
            if ("object" === T(n))
              for (s in ((i = !0), n)) z(e, t, s, n[s], !0, o, a);
            else if (
              void 0 !== r &&
              ((i = !0),
              m(r) || (a = !0),
              l &&
                (a
                  ? (t.call(e, r), (t = null))
                  : ((l = t),
                    (t = function (e, t, n) {
                      return l.call(S(e), n);
                    }))),
              t)
            )
              for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
          },
          X = /^-ms-/,
          V = /-([a-z])/g;
        function G(e, t) {
          return t.toUpperCase();
        }
        function Y(e) {
          return e.replace(X, "ms-").replace(V, G);
        }
        var J = function (e) {
          return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
        };
        function Q() {
          this.expando = S.expando + Q.uid++;
        }
        (Q.uid = 1),
          (Q.prototype = {
            cache: function (e) {
              var t = e[this.expando];
              return (
                t ||
                  ((t = {}),
                  J(e) &&
                    (e.nodeType
                      ? (e[this.expando] = t)
                      : Object.defineProperty(e, this.expando, {
                          value: t,
                          configurable: !0,
                        }))),
                t
              );
            },
            set: function (e, t, n) {
              var r,
                i = this.cache(e);
              if ("string" == typeof t) i[Y(t)] = n;
              else for (r in t) i[Y(r)] = t[r];
              return i;
            },
            get: function (e, t) {
              return void 0 === t
                ? this.cache(e)
                : e[this.expando] && e[this.expando][Y(t)];
            },
            access: function (e, t, n) {
              return void 0 === t || (t && "string" == typeof t && void 0 === n)
                ? this.get(e, t)
                : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
              var n,
                r = e[this.expando];
              if (void 0 !== r) {
                if (void 0 !== t) {
                  n = (t = Array.isArray(t)
                    ? t.map(Y)
                    : (t = Y(t)) in r
                    ? [t]
                    : t.match(I) || []).length;
                  for (; n--; ) delete r[t[n]];
                }
                (void 0 === t || S.isEmptyObject(r)) &&
                  (e.nodeType
                    ? (e[this.expando] = void 0)
                    : delete e[this.expando]);
              }
            },
            hasData: function (e) {
              var t = e[this.expando];
              return void 0 !== t && !S.isEmptyObject(t);
            },
          });
        var K = new Q(),
          Z = new Q(),
          ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          te = /[A-Z]/g;
        function ne(e, t, n) {
          var r;
          if (void 0 === n && 1 === e.nodeType)
            if (
              ((r = "data-" + t.replace(te, "-$&").toLowerCase()),
              "string" == typeof (n = e.getAttribute(r)))
            ) {
              try {
                n = (function (e) {
                  return (
                    "true" === e ||
                    ("false" !== e &&
                      ("null" === e
                        ? null
                        : e === +e + ""
                        ? +e
                        : ee.test(e)
                        ? JSON.parse(e)
                        : e))
                  );
                })(n);
              } catch (e) {}
              Z.set(e, t, n);
            } else n = void 0;
          return n;
        }
        S.extend({
          hasData: function (e) {
            return Z.hasData(e) || K.hasData(e);
          },
          data: function (e, t, n) {
            return Z.access(e, t, n);
          },
          removeData: function (e, t) {
            Z.remove(e, t);
          },
          _data: function (e, t, n) {
            return K.access(e, t, n);
          },
          _removeData: function (e, t) {
            K.remove(e, t);
          },
        }),
          S.fn.extend({
            data: function (e, t) {
              var n,
                r,
                i,
                o = this[0],
                a = o && o.attributes;
              if (void 0 === e) {
                if (
                  this.length &&
                  ((i = Z.get(o)),
                  1 === o.nodeType && !K.get(o, "hasDataAttrs"))
                ) {
                  for (n = a.length; n--; )
                    a[n] &&
                      0 === (r = a[n].name).indexOf("data-") &&
                      ((r = Y(r.slice(5))), ne(o, r, i[r]));
                  K.set(o, "hasDataAttrs", !0);
                }
                return i;
              }
              return "object" == typeof e
                ? this.each(function () {
                    Z.set(this, e);
                  })
                : z(
                    this,
                    function (t) {
                      var n;
                      if (o && void 0 === t)
                        return void 0 !== (n = Z.get(o, e)) ||
                          void 0 !== (n = ne(o, e))
                          ? n
                          : void 0;
                      this.each(function () {
                        Z.set(this, e, t);
                      });
                    },
                    null,
                    t,
                    arguments.length > 1,
                    null,
                    !0
                  );
            },
            removeData: function (e) {
              return this.each(function () {
                Z.remove(this, e);
              });
            },
          }),
          S.extend({
            queue: function (e, t, n) {
              var r;
              if (e)
                return (
                  (t = (t || "fx") + "queue"),
                  (r = K.get(e, t)),
                  n &&
                    (!r || Array.isArray(n)
                      ? (r = K.access(e, t, S.makeArray(n)))
                      : r.push(n)),
                  r || []
                );
            },
            dequeue: function (e, t) {
              t = t || "fx";
              var n = S.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = S._queueHooks(e, t);
              "inprogress" === i && ((i = n.shift()), r--),
                i &&
                  ("fx" === t && n.unshift("inprogress"),
                  delete o.stop,
                  i.call(
                    e,
                    function () {
                      S.dequeue(e, t);
                    },
                    o
                  )),
                !r && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
              var n = t + "queueHooks";
              return (
                K.get(e, n) ||
                K.access(e, n, {
                  empty: S.Callbacks("once memory").add(function () {
                    K.remove(e, [t + "queue", n]);
                  }),
                })
              );
            },
          }),
          S.fn.extend({
            queue: function (e, t) {
              var n = 2;
              return (
                "string" != typeof e && ((t = e), (e = "fx"), n--),
                arguments.length < n
                  ? S.queue(this[0], e)
                  : void 0 === t
                  ? this
                  : this.each(function () {
                      var n = S.queue(this, e, t);
                      S._queueHooks(this, e),
                        "fx" === e &&
                          "inprogress" !== n[0] &&
                          S.dequeue(this, e);
                    })
              );
            },
            dequeue: function (e) {
              return this.each(function () {
                S.dequeue(this, e);
              });
            },
            clearQueue: function (e) {
              return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
              var n,
                r = 1,
                i = S.Deferred(),
                o = this,
                a = this.length,
                s = function () {
                  --r || i.resolveWith(o, [o]);
                };
              for (
                "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
                a--;

              )
                (n = K.get(o[a], e + "queueHooks")) &&
                  n.empty &&
                  (r++, n.empty.add(s));
              return s(), i.promise(t);
            },
          });
        var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
          oe = ["Top", "Right", "Bottom", "Left"],
          ae = x.documentElement,
          se = function (e) {
            return S.contains(e.ownerDocument, e);
          },
          ue = { composed: !0 };
        ae.getRootNode &&
          (se = function (e) {
            return (
              S.contains(e.ownerDocument, e) ||
              e.getRootNode(ue) === e.ownerDocument
            );
          });
        var le = function (e, t) {
          return (
            "none" === (e = t || e).style.display ||
            ("" === e.style.display && se(e) && "none" === S.css(e, "display"))
          );
        };
        function ce(e, t, n, r) {
          var i,
            o,
            a = 20,
            s = r
              ? function () {
                  return r.cur();
                }
              : function () {
                  return S.css(e, t, "");
                },
            u = s(),
            l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
            c =
              e.nodeType &&
              (S.cssNumber[t] || ("px" !== l && +u)) &&
              ie.exec(S.css(e, t));
          if (c && c[3] !== l) {
            for (u /= 2, l = l || c[3], c = +u || 1; a--; )
              S.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
                (c /= o);
            (c *= 2), S.style(e, t, c + l), (n = n || []);
          }
          return (
            n &&
              ((c = +c || +u || 0),
              (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
              r && ((r.unit = l), (r.start = c), (r.end = i))),
            i
          );
        }
        var fe = {};
        function pe(e) {
          var t,
            n = e.ownerDocument,
            r = e.nodeName,
            i = fe[r];
          return (
            i ||
            ((t = n.body.appendChild(n.createElement(r))),
            (i = S.css(t, "display")),
            t.parentNode.removeChild(t),
            "none" === i && (i = "block"),
            (fe[r] = i),
            i)
          );
        }
        function de(e, t) {
          for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
            (r = e[o]).style &&
              ((n = r.style.display),
              t
                ? ("none" === n &&
                    ((i[o] = K.get(r, "display") || null),
                    i[o] || (r.style.display = "")),
                  "" === r.style.display && le(r) && (i[o] = pe(r)))
                : "none" !== n && ((i[o] = "none"), K.set(r, "display", n)));
          for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
          return e;
        }
        S.fn.extend({
          show: function () {
            return de(this, !0);
          },
          hide: function () {
            return de(this);
          },
          toggle: function (e) {
            return "boolean" == typeof e
              ? e
                ? this.show()
                : this.hide()
              : this.each(function () {
                  le(this) ? S(this).show() : S(this).hide();
                });
          },
        });
        var he,
          ge,
          ve = /^(?:checkbox|radio)$/i,
          me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
          ye = /^$|^module$|\/(?:java|ecma)script/i;
        (he = x.createDocumentFragment().appendChild(x.createElement("div"))),
          (ge = x.createElement("input")).setAttribute("type", "radio"),
          ge.setAttribute("checked", "checked"),
          ge.setAttribute("name", "t"),
          he.appendChild(ge),
          (v.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (he.innerHTML = "<textarea>x</textarea>"),
          (v.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue),
          (he.innerHTML = "<option></option>"),
          (v.option = !!he.lastChild);
        var xe = {
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""],
        };
        function be(e, t) {
          var n;
          return (
            (n =
              void 0 !== e.getElementsByTagName
                ? e.getElementsByTagName(t || "*")
                : void 0 !== e.querySelectorAll
                ? e.querySelectorAll(t || "*")
                : []),
            void 0 === t || (t && D(e, t)) ? S.merge([e], n) : n
          );
        }
        function we(e, t) {
          for (var n = 0, r = e.length; n < r; n++)
            K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
        }
        (xe.tbody = xe.tfoot = xe.colgroup = xe.caption = xe.thead),
          (xe.th = xe.td),
          v.option ||
            (xe.optgroup = xe.option =
              [1, "<select multiple='multiple'>", "</select>"]);
        var Te = /<|&#?\w+;/;
        function Ce(e, t, n, r, i) {
          for (
            var o,
              a,
              s,
              u,
              l,
              c,
              f = t.createDocumentFragment(),
              p = [],
              d = 0,
              h = e.length;
            d < h;
            d++
          )
            if ((o = e[d]) || 0 === o)
              if ("object" === T(o)) S.merge(p, o.nodeType ? [o] : o);
              else if (Te.test(o)) {
                for (
                  a = a || f.appendChild(t.createElement("div")),
                    s = (me.exec(o) || ["", ""])[1].toLowerCase(),
                    u = xe[s] || xe._default,
                    a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2],
                    c = u[0];
                  c--;

                )
                  a = a.lastChild;
                S.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
              } else p.push(t.createTextNode(o));
          for (f.textContent = "", d = 0; (o = p[d++]); )
            if (r && S.inArray(o, r) > -1) i && i.push(o);
            else if (
              ((l = se(o)), (a = be(f.appendChild(o), "script")), l && we(a), n)
            )
              for (c = 0; (o = a[c++]); ) ye.test(o.type || "") && n.push(o);
          return f;
        }
        var Se = /^([^.]*)(?:\.(.+)|)/;
        function Ee() {
          return !0;
        }
        function ke() {
          return !1;
        }
        function Ae(e, t) {
          return (
            (e ===
              (function () {
                try {
                  return x.activeElement;
                } catch (e) {}
              })()) ==
            ("focus" === t)
          );
        }
        function je(e, t, n, r, i, o) {
          var a, s;
          if ("object" == typeof t) {
            for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
              je(e, s, n, r, t[s], o);
            return e;
          }
          if (
            (null == r && null == i
              ? ((i = n), (r = n = void 0))
              : null == i &&
                ("string" == typeof n
                  ? ((i = r), (r = void 0))
                  : ((i = r), (r = n), (n = void 0))),
            !1 === i)
          )
            i = ke;
          else if (!i) return e;
          return (
            1 === o &&
              ((a = i),
              ((i = function (e) {
                return S().off(e), a.apply(this, arguments);
              }).guid = a.guid || (a.guid = S.guid++))),
            e.each(function () {
              S.event.add(this, t, i, r, n);
            })
          );
        }
        function Ne(e, t, n) {
          n
            ? (K.set(e, t, !1),
              S.event.add(e, t, {
                namespace: !1,
                handler: function (e) {
                  var r,
                    i,
                    o = K.get(this, t);
                  if (1 & e.isTrigger && this[t]) {
                    if (o.length)
                      (S.event.special[t] || {}).delegateType &&
                        e.stopPropagation();
                    else if (
                      ((o = s.call(arguments)),
                      K.set(this, t, o),
                      (r = n(this, t)),
                      this[t](),
                      o !== (i = K.get(this, t)) || r
                        ? K.set(this, t, !1)
                        : (i = {}),
                      o !== i)
                    )
                      return (
                        e.stopImmediatePropagation(),
                        e.preventDefault(),
                        i && i.value
                      );
                  } else
                    o.length &&
                      (K.set(this, t, {
                        value: S.event.trigger(
                          S.extend(o[0], S.Event.prototype),
                          o.slice(1),
                          this
                        ),
                      }),
                      e.stopImmediatePropagation());
                },
              }))
            : void 0 === K.get(e, t) && S.event.add(e, t, Ee);
        }
        (S.event = {
          global: {},
          add: function (e, t, n, r, i) {
            var o,
              a,
              s,
              u,
              l,
              c,
              f,
              p,
              d,
              h,
              g,
              v = K.get(e);
            if (J(e))
              for (
                n.handler && ((n = (o = n).handler), (i = o.selector)),
                  i && S.find.matchesSelector(ae, i),
                  n.guid || (n.guid = S.guid++),
                  (u = v.events) || (u = v.events = Object.create(null)),
                  (a = v.handle) ||
                    (a = v.handle =
                      function (t) {
                        return void 0 !== S && S.event.triggered !== t.type
                          ? S.event.dispatch.apply(e, arguments)
                          : void 0;
                      }),
                  l = (t = (t || "").match(I) || [""]).length;
                l--;

              )
                (d = g = (s = Se.exec(t[l]) || [])[1]),
                  (h = (s[2] || "").split(".").sort()),
                  d &&
                    ((f = S.event.special[d] || {}),
                    (d = (i ? f.delegateType : f.bindType) || d),
                    (f = S.event.special[d] || {}),
                    (c = S.extend(
                      {
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && S.expr.match.needsContext.test(i),
                        namespace: h.join("."),
                      },
                      o
                    )),
                    (p = u[d]) ||
                      (((p = u[d] = []).delegateCount = 0),
                      (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                        (e.addEventListener && e.addEventListener(d, a))),
                    f.add &&
                      (f.add.call(e, c),
                      c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    (S.event.global[d] = !0));
          },
          remove: function (e, t, n, r, i) {
            var o,
              a,
              s,
              u,
              l,
              c,
              f,
              p,
              d,
              h,
              g,
              v = K.hasData(e) && K.get(e);
            if (v && (u = v.events)) {
              for (l = (t = (t || "").match(I) || [""]).length; l--; )
                if (
                  ((d = g = (s = Se.exec(t[l]) || [])[1]),
                  (h = (s[2] || "").split(".").sort()),
                  d)
                ) {
                  for (
                    f = S.event.special[d] || {},
                      p = u[(d = (r ? f.delegateType : f.bindType) || d)] || [],
                      s =
                        s[2] &&
                        new RegExp(
                          "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                        ),
                      a = o = p.length;
                    o--;

                  )
                    (c = p[o]),
                      (!i && g !== c.origType) ||
                        (n && n.guid !== c.guid) ||
                        (s && !s.test(c.namespace)) ||
                        (r &&
                          r !== c.selector &&
                          ("**" !== r || !c.selector)) ||
                        (p.splice(o, 1),
                        c.selector && p.delegateCount--,
                        f.remove && f.remove.call(e, c));
                  a &&
                    !p.length &&
                    ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                      S.removeEvent(e, d, v.handle),
                    delete u[d]);
                } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
              S.isEmptyObject(u) && K.remove(e, "handle events");
            }
          },
          dispatch: function (e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              s = new Array(arguments.length),
              u = S.event.fix(e),
              l = (K.get(this, "events") || Object.create(null))[u.type] || [],
              c = S.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++)
              s[t] = arguments[t];
            if (
              ((u.delegateTarget = this),
              !c.preDispatch || !1 !== c.preDispatch.call(this, u))
            ) {
              for (
                a = S.event.handlers.call(this, u, l), t = 0;
                (i = a[t++]) && !u.isPropagationStopped();

              )
                for (
                  u.currentTarget = i.elem, n = 0;
                  (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();

                )
                  (u.rnamespace &&
                    !1 !== o.namespace &&
                    !u.rnamespace.test(o.namespace)) ||
                    ((u.handleObj = o),
                    (u.data = o.data),
                    void 0 !==
                      (r = (
                        (S.event.special[o.origType] || {}).handle || o.handler
                      ).apply(i.elem, s)) &&
                      !1 === (u.result = r) &&
                      (u.preventDefault(), u.stopPropagation()));
              return c.postDispatch && c.postDispatch.call(this, u), u.result;
            }
          },
          handlers: function (e, t) {
            var n,
              r,
              i,
              o,
              a,
              s = [],
              u = t.delegateCount,
              l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
              for (; l !== this; l = l.parentNode || this)
                if (
                  1 === l.nodeType &&
                  ("click" !== e.type || !0 !== l.disabled)
                ) {
                  for (o = [], a = {}, n = 0; n < u; n++)
                    void 0 === a[(i = (r = t[n]).selector + " ")] &&
                      (a[i] = r.needsContext
                        ? S(i, this).index(l) > -1
                        : S.find(i, this, null, [l]).length),
                      a[i] && o.push(r);
                  o.length && s.push({ elem: l, handlers: o });
                }
            return (
              (l = this),
              u < t.length && s.push({ elem: l, handlers: t.slice(u) }),
              s
            );
          },
          addProp: function (e, t) {
            Object.defineProperty(S.Event.prototype, e, {
              enumerable: !0,
              configurable: !0,
              get: m(t)
                ? function () {
                    if (this.originalEvent) return t(this.originalEvent);
                  }
                : function () {
                    if (this.originalEvent) return this.originalEvent[e];
                  },
              set: function (t) {
                Object.defineProperty(this, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                });
              },
            });
          },
          fix: function (e) {
            return e[S.expando] ? e : new S.Event(e);
          },
          special: {
            load: { noBubble: !0 },
            click: {
              setup: function (e) {
                var t = this || e;
                return (
                  ve.test(t.type) &&
                    t.click &&
                    D(t, "input") &&
                    Ne(t, "click", Ee),
                  !1
                );
              },
              trigger: function (e) {
                var t = this || e;
                return (
                  ve.test(t.type) && t.click && D(t, "input") && Ne(t, "click"),
                  !0
                );
              },
              _default: function (e) {
                var t = e.target;
                return (
                  (ve.test(t.type) &&
                    t.click &&
                    D(t, "input") &&
                    K.get(t, "click")) ||
                  D(t, "a")
                );
              },
            },
            beforeunload: {
              postDispatch: function (e) {
                void 0 !== e.result &&
                  e.originalEvent &&
                  (e.originalEvent.returnValue = e.result);
              },
            },
          },
        }),
          (S.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
          }),
          (S.Event = function (e, t) {
            if (!(this instanceof S.Event)) return new S.Event(e, t);
            e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented =
                  e.defaultPrevented ||
                  (void 0 === e.defaultPrevented && !1 === e.returnValue)
                    ? Ee
                    : ke),
                (this.target =
                  e.target && 3 === e.target.nodeType
                    ? e.target.parentNode
                    : e.target),
                (this.currentTarget = e.currentTarget),
                (this.relatedTarget = e.relatedTarget))
              : (this.type = e),
              t && S.extend(this, t),
              (this.timeStamp = (e && e.timeStamp) || Date.now()),
              (this[S.expando] = !0);
          }),
          (S.Event.prototype = {
            constructor: S.Event,
            isDefaultPrevented: ke,
            isPropagationStopped: ke,
            isImmediatePropagationStopped: ke,
            isSimulated: !1,
            preventDefault: function () {
              var e = this.originalEvent;
              (this.isDefaultPrevented = Ee),
                e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
              var e = this.originalEvent;
              (this.isPropagationStopped = Ee),
                e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
              var e = this.originalEvent;
              (this.isImmediatePropagationStopped = Ee),
                e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation();
            },
          }),
          S.each(
            {
              altKey: !0,
              bubbles: !0,
              cancelable: !0,
              changedTouches: !0,
              ctrlKey: !0,
              detail: !0,
              eventPhase: !0,
              metaKey: !0,
              pageX: !0,
              pageY: !0,
              shiftKey: !0,
              view: !0,
              char: !0,
              code: !0,
              charCode: !0,
              key: !0,
              keyCode: !0,
              button: !0,
              buttons: !0,
              clientX: !0,
              clientY: !0,
              offsetX: !0,
              offsetY: !0,
              pointerId: !0,
              pointerType: !0,
              screenX: !0,
              screenY: !0,
              targetTouches: !0,
              toElement: !0,
              touches: !0,
              which: !0,
            },
            S.event.addProp
          ),
          S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            S.event.special[e] = {
              setup: function () {
                return Ne(this, e, Ae), !1;
              },
              trigger: function () {
                return Ne(this, e), !0;
              },
              _default: function () {
                return !0;
              },
              delegateType: t,
            };
          }),
          S.each(
            {
              mouseenter: "mouseover",
              mouseleave: "mouseout",
              pointerenter: "pointerover",
              pointerleave: "pointerout",
            },
            function (e, t) {
              S.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                  var n,
                    r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                  return (
                    (i && (i === r || S.contains(r, i))) ||
                      ((e.type = o.origType),
                      (n = o.handler.apply(this, arguments)),
                      (e.type = t)),
                    n
                  );
                },
              };
            }
          ),
          S.fn.extend({
            on: function (e, t, n, r) {
              return je(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
              return je(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
              var r, i;
              if (e && e.preventDefault && e.handleObj)
                return (
                  (r = e.handleObj),
                  S(e.delegateTarget).off(
                    r.namespace ? r.origType + "." + r.namespace : r.origType,
                    r.selector,
                    r.handler
                  ),
                  this
                );
              if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this;
              }
              return (
                (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                !1 === n && (n = ke),
                this.each(function () {
                  S.event.remove(this, e, n, t);
                })
              );
            },
          });
        var De = /<script|<style|<link/i,
          Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
          qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function He(e, t) {
          return (
            (D(e, "table") &&
              D(11 !== t.nodeType ? t : t.firstChild, "tr") &&
              S(e).children("tbody")[0]) ||
            e
          );
        }
        function Oe(e) {
          return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
        }
        function Re(e) {
          return (
            "true/" === (e.type || "").slice(0, 5)
              ? (e.type = e.type.slice(5))
              : e.removeAttribute("type"),
            e
          );
        }
        function Me(e, t) {
          var n, r, i, o, a, s;
          if (1 === t.nodeType) {
            if (K.hasData(e) && (s = K.get(e).events))
              for (i in (K.remove(t, "handle events"), s))
                for (n = 0, r = s[i].length; n < r; n++)
                  S.event.add(t, i, s[i][n]);
            Z.hasData(e) &&
              ((o = Z.access(e)), (a = S.extend({}, o)), Z.set(t, a));
          }
        }
        function Pe(e, t) {
          var n = t.nodeName.toLowerCase();
          "input" === n && ve.test(e.type)
            ? (t.checked = e.checked)
            : ("input" !== n && "textarea" !== n) ||
              (t.defaultValue = e.defaultValue);
        }
        function Ie(e, t, n, r) {
          t = u(t);
          var i,
            o,
            a,
            s,
            l,
            c,
            f = 0,
            p = e.length,
            d = p - 1,
            h = t[0],
            g = m(h);
          if (
            g ||
            (p > 1 && "string" == typeof h && !v.checkClone && Le.test(h))
          )
            return e.each(function (i) {
              var o = e.eq(i);
              g && (t[0] = h.call(this, i, o.html())), Ie(o, t, n, r);
            });
          if (
            p &&
            ((o = (i = Ce(t, e[0].ownerDocument, !1, e, r)).firstChild),
            1 === i.childNodes.length && (i = o),
            o || r)
          ) {
            for (s = (a = S.map(be(i, "script"), Oe)).length; f < p; f++)
              (l = i),
                f !== d &&
                  ((l = S.clone(l, !0, !0)), s && S.merge(a, be(l, "script"))),
                n.call(e[f], l, f);
            if (s)
              for (
                c = a[a.length - 1].ownerDocument, S.map(a, Re), f = 0;
                f < s;
                f++
              )
                (l = a[f]),
                  ye.test(l.type || "") &&
                    !K.access(l, "globalEval") &&
                    S.contains(c, l) &&
                    (l.src && "module" !== (l.type || "").toLowerCase()
                      ? S._evalUrl &&
                        !l.noModule &&
                        S._evalUrl(
                          l.src,
                          { nonce: l.nonce || l.getAttribute("nonce") },
                          c
                        )
                      : w(l.textContent.replace(qe, ""), l, c));
          }
          return e;
        }
        function We(e, t, n) {
          for (
            var r, i = t ? S.filter(t, e) : e, o = 0;
            null != (r = i[o]);
            o++
          )
            n || 1 !== r.nodeType || S.cleanData(be(r)),
              r.parentNode &&
                (n && se(r) && we(be(r, "script")),
                r.parentNode.removeChild(r));
          return e;
        }
        S.extend({
          htmlPrefilter: function (e) {
            return e;
          },
          clone: function (e, t, n) {
            var r,
              i,
              o,
              a,
              s = e.cloneNode(!0),
              u = se(e);
            if (
              !(
                v.noCloneChecked ||
                (1 !== e.nodeType && 11 !== e.nodeType) ||
                S.isXMLDoc(e)
              )
            )
              for (a = be(s), r = 0, i = (o = be(e)).length; r < i; r++)
                Pe(o[r], a[r]);
            if (t)
              if (n)
                for (
                  o = o || be(e), a = a || be(s), r = 0, i = o.length;
                  r < i;
                  r++
                )
                  Me(o[r], a[r]);
              else Me(e, s);
            return (
              (a = be(s, "script")).length > 0 && we(a, !u && be(e, "script")),
              s
            );
          },
          cleanData: function (e) {
            for (
              var t, n, r, i = S.event.special, o = 0;
              void 0 !== (n = e[o]);
              o++
            )
              if (J(n)) {
                if ((t = n[K.expando])) {
                  if (t.events)
                    for (r in t.events)
                      i[r]
                        ? S.event.remove(n, r)
                        : S.removeEvent(n, r, t.handle);
                  n[K.expando] = void 0;
                }
                n[Z.expando] && (n[Z.expando] = void 0);
              }
          },
        }),
          S.fn.extend({
            detach: function (e) {
              return We(this, e, !0);
            },
            remove: function (e) {
              return We(this, e);
            },
            text: function (e) {
              return z(
                this,
                function (e) {
                  return void 0 === e
                    ? S.text(this)
                    : this.empty().each(function () {
                        (1 !== this.nodeType &&
                          11 !== this.nodeType &&
                          9 !== this.nodeType) ||
                          (this.textContent = e);
                      });
                },
                null,
                e,
                arguments.length
              );
            },
            append: function () {
              return Ie(this, arguments, function (e) {
                (1 !== this.nodeType &&
                  11 !== this.nodeType &&
                  9 !== this.nodeType) ||
                  He(this, e).appendChild(e);
              });
            },
            prepend: function () {
              return Ie(this, arguments, function (e) {
                if (
                  1 === this.nodeType ||
                  11 === this.nodeType ||
                  9 === this.nodeType
                ) {
                  var t = He(this, e);
                  t.insertBefore(e, t.firstChild);
                }
              });
            },
            before: function () {
              return Ie(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
              });
            },
            after: function () {
              return Ie(this, arguments, function (e) {
                this.parentNode &&
                  this.parentNode.insertBefore(e, this.nextSibling);
              });
            },
            empty: function () {
              for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType &&
                  (S.cleanData(be(e, !1)), (e.textContent = ""));
              return this;
            },
            clone: function (e, t) {
              return (
                (e = null != e && e),
                (t = null == t ? e : t),
                this.map(function () {
                  return S.clone(this, e, t);
                })
              );
            },
            html: function (e) {
              return z(
                this,
                function (e) {
                  var t = this[0] || {},
                    n = 0,
                    r = this.length;
                  if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                  if (
                    "string" == typeof e &&
                    !De.test(e) &&
                    !xe[(me.exec(e) || ["", ""])[1].toLowerCase()]
                  ) {
                    e = S.htmlPrefilter(e);
                    try {
                      for (; n < r; n++)
                        1 === (t = this[n] || {}).nodeType &&
                          (S.cleanData(be(t, !1)), (t.innerHTML = e));
                      t = 0;
                    } catch (e) {}
                  }
                  t && this.empty().append(e);
                },
                null,
                e,
                arguments.length
              );
            },
            replaceWith: function () {
              var e = [];
              return Ie(
                this,
                arguments,
                function (t) {
                  var n = this.parentNode;
                  S.inArray(this, e) < 0 &&
                    (S.cleanData(be(this)), n && n.replaceChild(t, this));
                },
                e
              );
            },
          }),
          S.each(
            {
              appendTo: "append",
              prependTo: "prepend",
              insertBefore: "before",
              insertAfter: "after",
              replaceAll: "replaceWith",
            },
            function (e, t) {
              S.fn[e] = function (e) {
                for (
                  var n, r = [], i = S(e), o = i.length - 1, a = 0;
                  a <= o;
                  a++
                )
                  (n = a === o ? this : this.clone(!0)),
                    S(i[a])[t](n),
                    l.apply(r, n.get());
                return this.pushStack(r);
              };
            }
          );
        var Fe = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
          Be = function (e) {
            var t = e.ownerDocument.defaultView;
            return (t && t.opener) || (t = r), t.getComputedStyle(e);
          },
          $e = function (e, t, n) {
            var r,
              i,
              o = {};
            for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
            for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
            return r;
          },
          _e = new RegExp(oe.join("|"), "i");
        function Ue(e, t, n) {
          var r,
            i,
            o,
            a,
            s = e.style;
          return (
            (n = n || Be(e)) &&
              ("" !== (a = n.getPropertyValue(t) || n[t]) ||
                se(e) ||
                (a = S.style(e, t)),
              !v.pixelBoxStyles() &&
                Fe.test(a) &&
                _e.test(t) &&
                ((r = s.width),
                (i = s.minWidth),
                (o = s.maxWidth),
                (s.minWidth = s.maxWidth = s.width = a),
                (a = n.width),
                (s.width = r),
                (s.minWidth = i),
                (s.maxWidth = o))),
            void 0 !== a ? a + "" : a
          );
        }
        function ze(e, t) {
          return {
            get: function () {
              if (!e()) return (this.get = t).apply(this, arguments);
              delete this.get;
            },
          };
        }
        !(function () {
          function e() {
            if (c) {
              (l.style.cssText =
                "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                (c.style.cssText =
                  "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                ae.appendChild(l).appendChild(c);
              var e = r.getComputedStyle(c);
              (n = "1%" !== e.top),
                (u = 12 === t(e.marginLeft)),
                (c.style.right = "60%"),
                (a = 36 === t(e.right)),
                (i = 36 === t(e.width)),
                (c.style.position = "absolute"),
                (o = 12 === t(c.offsetWidth / 3)),
                ae.removeChild(l),
                (c = null);
            }
          }
          function t(e) {
            return Math.round(parseFloat(e));
          }
          var n,
            i,
            o,
            a,
            s,
            u,
            l = x.createElement("div"),
            c = x.createElement("div");
          c.style &&
            ((c.style.backgroundClip = "content-box"),
            (c.cloneNode(!0).style.backgroundClip = ""),
            (v.clearCloneStyle = "content-box" === c.style.backgroundClip),
            S.extend(v, {
              boxSizingReliable: function () {
                return e(), i;
              },
              pixelBoxStyles: function () {
                return e(), a;
              },
              pixelPosition: function () {
                return e(), n;
              },
              reliableMarginLeft: function () {
                return e(), u;
              },
              scrollboxSize: function () {
                return e(), o;
              },
              reliableTrDimensions: function () {
                var e, t, n, i;
                return (
                  null == s &&
                    ((e = x.createElement("table")),
                    (t = x.createElement("tr")),
                    (n = x.createElement("div")),
                    (e.style.cssText =
                      "position:absolute;left:-11111px;border-collapse:separate"),
                    (t.style.cssText = "border:1px solid"),
                    (t.style.height = "1px"),
                    (n.style.height = "9px"),
                    (n.style.display = "block"),
                    ae.appendChild(e).appendChild(t).appendChild(n),
                    (i = r.getComputedStyle(t)),
                    (s =
                      parseInt(i.height, 10) +
                        parseInt(i.borderTopWidth, 10) +
                        parseInt(i.borderBottomWidth, 10) ===
                      t.offsetHeight),
                    ae.removeChild(e)),
                  s
                );
              },
            }));
        })();
        var Xe = ["Webkit", "Moz", "ms"],
          Ve = x.createElement("div").style,
          Ge = {};
        function Ye(e) {
          return (
            S.cssProps[e] ||
            Ge[e] ||
            (e in Ve
              ? e
              : (Ge[e] =
                  (function (e) {
                    for (
                      var t = e[0].toUpperCase() + e.slice(1), n = Xe.length;
                      n--;

                    )
                      if ((e = Xe[n] + t) in Ve) return e;
                  })(e) || e))
          );
        }
        var Je = /^(none|table(?!-c[ea]).+)/,
          Qe = /^--/,
          Ke = { position: "absolute", visibility: "hidden", display: "block" },
          Ze = { letterSpacing: "0", fontWeight: "400" };
        function et(e, t, n) {
          var r = ie.exec(t);
          return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
        }
        function tt(e, t, n, r, i, o) {
          var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
          if (n === (r ? "border" : "content")) return 0;
          for (; a < 4; a += 2)
            "margin" === n && (u += S.css(e, n + oe[a], !0, i)),
              r
                ? ("content" === n && (u -= S.css(e, "padding" + oe[a], !0, i)),
                  "margin" !== n &&
                    (u -= S.css(e, "border" + oe[a] + "Width", !0, i)))
                : ((u += S.css(e, "padding" + oe[a], !0, i)),
                  "padding" !== n
                    ? (u += S.css(e, "border" + oe[a] + "Width", !0, i))
                    : (s += S.css(e, "border" + oe[a] + "Width", !0, i)));
          return (
            !r &&
              o >= 0 &&
              (u +=
                Math.max(
                  0,
                  Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      o -
                      u -
                      s -
                      0.5
                  )
                ) || 0),
            u
          );
        }
        function nt(e, t, n) {
          var r = Be(e),
            i =
              (!v.boxSizingReliable() || n) &&
              "border-box" === S.css(e, "boxSizing", !1, r),
            o = i,
            a = Ue(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
          if (Fe.test(a)) {
            if (!n) return a;
            a = "auto";
          }
          return (
            ((!v.boxSizingReliable() && i) ||
              (!v.reliableTrDimensions() && D(e, "tr")) ||
              "auto" === a ||
              (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
              e.getClientRects().length &&
              ((i = "border-box" === S.css(e, "boxSizing", !1, r)),
              (o = s in e) && (a = e[s])),
            (a = parseFloat(a) || 0) +
              tt(e, t, n || (i ? "border" : "content"), o, r, a) +
              "px"
          );
        }
        function rt(e, t, n, r, i) {
          return new rt.prototype.init(e, t, n, r, i);
        }
        S.extend({
          cssHooks: {
            opacity: {
              get: function (e, t) {
                if (t) {
                  var n = Ue(e, "opacity");
                  return "" === n ? "1" : n;
                }
              },
            },
          },
          cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
          },
          cssProps: {},
          style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var i,
                o,
                a,
                s = Y(t),
                u = Qe.test(t),
                l = e.style;
              if (
                (u || (t = Ye(s)),
                (a = S.cssHooks[t] || S.cssHooks[s]),
                void 0 === n)
              )
                return a && "get" in a && void 0 !== (i = a.get(e, !1, r))
                  ? i
                  : l[t];
              "string" == (o = typeof n) &&
                (i = ie.exec(n)) &&
                i[1] &&
                ((n = ce(e, t, i)), (o = "number")),
                null != n &&
                  n == n &&
                  ("number" !== o ||
                    u ||
                    (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
                  v.clearCloneStyle ||
                    "" !== n ||
                    0 !== t.indexOf("background") ||
                    (l[t] = "inherit"),
                  (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                    (u ? l.setProperty(t, n) : (l[t] = n)));
            }
          },
          css: function (e, t, n, r) {
            var i,
              o,
              a,
              s = Y(t);
            return (
              Qe.test(t) || (t = Ye(s)),
              (a = S.cssHooks[t] || S.cssHooks[s]) &&
                "get" in a &&
                (i = a.get(e, !0, n)),
              void 0 === i && (i = Ue(e, t, r)),
              "normal" === i && t in Ze && (i = Ze[t]),
              "" === n || n
                ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
                : i
            );
          },
        }),
          S.each(["height", "width"], function (e, t) {
            S.cssHooks[t] = {
              get: function (e, n, r) {
                if (n)
                  return !Je.test(S.css(e, "display")) ||
                    (e.getClientRects().length &&
                      e.getBoundingClientRect().width)
                    ? nt(e, t, r)
                    : $e(e, Ke, function () {
                        return nt(e, t, r);
                      });
              },
              set: function (e, n, r) {
                var i,
                  o = Be(e),
                  a = !v.scrollboxSize() && "absolute" === o.position,
                  s = (a || r) && "border-box" === S.css(e, "boxSizing", !1, o),
                  u = r ? tt(e, t, r, s, o) : 0;
                return (
                  s &&
                    a &&
                    (u -= Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        parseFloat(o[t]) -
                        tt(e, t, "border", !1, o) -
                        0.5
                    )),
                  u &&
                    (i = ie.exec(n)) &&
                    "px" !== (i[3] || "px") &&
                    ((e.style[t] = n), (n = S.css(e, t))),
                  et(0, n, u)
                );
              },
            };
          }),
          (S.cssHooks.marginLeft = ze(v.reliableMarginLeft, function (e, t) {
            if (t)
              return (
                (parseFloat(Ue(e, "marginLeft")) ||
                  e.getBoundingClientRect().left -
                    $e(e, { marginLeft: 0 }, function () {
                      return e.getBoundingClientRect().left;
                    })) + "px"
              );
          })),
          S.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            (S.cssHooks[e + t] = {
              expand: function (n) {
                for (
                  var r = 0,
                    i = {},
                    o = "string" == typeof n ? n.split(" ") : [n];
                  r < 4;
                  r++
                )
                  i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                return i;
              },
            }),
              "margin" !== e && (S.cssHooks[e + t].set = et);
          }),
          S.fn.extend({
            css: function (e, t) {
              return z(
                this,
                function (e, t, n) {
                  var r,
                    i,
                    o = {},
                    a = 0;
                  if (Array.isArray(t)) {
                    for (r = Be(e), i = t.length; a < i; a++)
                      o[t[a]] = S.css(e, t[a], !1, r);
                    return o;
                  }
                  return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
                },
                e,
                t,
                arguments.length > 1
              );
            },
          }),
          (S.Tween = rt),
          (rt.prototype = {
            constructor: rt,
            init: function (e, t, n, r, i, o) {
              (this.elem = e),
                (this.prop = n),
                (this.easing = i || S.easing._default),
                (this.options = t),
                (this.start = this.now = this.cur()),
                (this.end = r),
                (this.unit = o || (S.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
              var e = rt.propHooks[this.prop];
              return e && e.get ? e.get(this) : rt.propHooks._default.get(this);
            },
            run: function (e) {
              var t,
                n = rt.propHooks[this.prop];
              return (
                this.options.duration
                  ? (this.pos = t =
                      S.easing[this.easing](
                        e,
                        this.options.duration * e,
                        0,
                        1,
                        this.options.duration
                      ))
                  : (this.pos = t = e),
                (this.now = (this.end - this.start) * t + this.start),
                this.options.step &&
                  this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : rt.propHooks._default.set(this),
                this
              );
            },
          }),
          (rt.prototype.init.prototype = rt.prototype),
          (rt.propHooks = {
            _default: {
              get: function (e) {
                var t;
                return 1 !== e.elem.nodeType ||
                  (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                  ? e.elem[e.prop]
                  : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
                  ? t
                  : 0;
              },
              set: function (e) {
                S.fx.step[e.prop]
                  ? S.fx.step[e.prop](e)
                  : 1 !== e.elem.nodeType ||
                    (!S.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)])
                  ? (e.elem[e.prop] = e.now)
                  : S.style(e.elem, e.prop, e.now + e.unit);
              },
            },
          }),
          (rt.propHooks.scrollTop = rt.propHooks.scrollLeft =
            {
              set: function (e) {
                e.elem.nodeType &&
                  e.elem.parentNode &&
                  (e.elem[e.prop] = e.now);
              },
            }),
          (S.easing = {
            linear: function (e) {
              return e;
            },
            swing: function (e) {
              return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
          }),
          (S.fx = rt.prototype.init),
          (S.fx.step = {});
        var it,
          ot,
          at = /^(?:toggle|show|hide)$/,
          st = /queueHooks$/;
        function ut() {
          ot &&
            (!1 === x.hidden && r.requestAnimationFrame
              ? r.requestAnimationFrame(ut)
              : r.setTimeout(ut, S.fx.interval),
            S.fx.tick());
        }
        function lt() {
          return (
            r.setTimeout(function () {
              it = void 0;
            }),
            (it = Date.now())
          );
        }
        function ct(e, t) {
          var n,
            r = 0,
            i = { height: e };
          for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = oe[r])] = i["padding" + n] = e;
          return t && (i.opacity = i.width = e), i;
        }
        function ft(e, t, n) {
          for (
            var r,
              i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]),
              o = 0,
              a = i.length;
            o < a;
            o++
          )
            if ((r = i[o].call(n, t, e))) return r;
        }
        function pt(e, t, n) {
          var r,
            i,
            o = 0,
            a = pt.prefilters.length,
            s = S.Deferred().always(function () {
              delete u.elem;
            }),
            u = function () {
              if (i) return !1;
              for (
                var t = it || lt(),
                  n = Math.max(0, l.startTime + l.duration - t),
                  r = 1 - (n / l.duration || 0),
                  o = 0,
                  a = l.tweens.length;
                o < a;
                o++
              )
                l.tweens[o].run(r);
              return (
                s.notifyWith(e, [l, r, n]),
                r < 1 && a
                  ? n
                  : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
              );
            },
            l = s.promise({
              elem: e,
              props: S.extend({}, t),
              opts: S.extend(
                !0,
                { specialEasing: {}, easing: S.easing._default },
                n
              ),
              originalProperties: t,
              originalOptions: n,
              startTime: it || lt(),
              duration: n.duration,
              tweens: [],
              createTween: function (t, n) {
                var r = S.Tween(
                  e,
                  l.opts,
                  t,
                  n,
                  l.opts.specialEasing[t] || l.opts.easing
                );
                return l.tweens.push(r), r;
              },
              stop: function (t) {
                var n = 0,
                  r = t ? l.tweens.length : 0;
                if (i) return this;
                for (i = !0; n < r; n++) l.tweens[n].run(1);
                return (
                  t
                    ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
                    : s.rejectWith(e, [l, t]),
                  this
                );
              },
            }),
            c = l.props;
          for (
            (function (e, t) {
              var n, r, i, o, a;
              for (n in e)
                if (
                  ((i = t[(r = Y(n))]),
                  (o = e[n]),
                  Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                  n !== r && ((e[r] = o), delete e[n]),
                  (a = S.cssHooks[r]) && ("expand" in a))
                )
                  for (n in ((o = a.expand(o)), delete e[r], o))
                    (n in e) || ((e[n] = o[n]), (t[n] = i));
                else t[r] = i;
            })(c, l.opts.specialEasing);
            o < a;
            o++
          )
            if ((r = pt.prefilters[o].call(l, e, c, l.opts)))
              return (
                m(r.stop) &&
                  (S._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                r
              );
          return (
            S.map(c, ft, l),
            m(l.opts.start) && l.opts.start.call(e, l),
            l
              .progress(l.opts.progress)
              .done(l.opts.done, l.opts.complete)
              .fail(l.opts.fail)
              .always(l.opts.always),
            S.fx.timer(S.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
            l
          );
        }
        (S.Animation = S.extend(pt, {
          tweeners: {
            "*": [
              function (e, t) {
                var n = this.createTween(e, t);
                return ce(n.elem, e, ie.exec(t), n), n;
              },
            ],
          },
          tweener: function (e, t) {
            m(e) ? ((t = e), (e = ["*"])) : (e = e.match(I));
            for (var n, r = 0, i = e.length; r < i; r++)
              (n = e[r]),
                (pt.tweeners[n] = pt.tweeners[n] || []),
                pt.tweeners[n].unshift(t);
          },
          prefilters: [
            function (e, t, n) {
              var r,
                i,
                o,
                a,
                s,
                u,
                l,
                c,
                f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && le(e),
                v = K.get(e, "fxshow");
              for (r in (n.queue ||
                (null == (a = S._queueHooks(e, "fx")).unqueued &&
                  ((a.unqueued = 0),
                  (s = a.empty.fire),
                  (a.empty.fire = function () {
                    a.unqueued || s();
                  })),
                a.unqueued++,
                p.always(function () {
                  p.always(function () {
                    a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
                  });
                })),
              t))
                if (((i = t[r]), at.test(i))) {
                  if (
                    (delete t[r],
                    (o = o || "toggle" === i),
                    i === (g ? "hide" : "show"))
                  ) {
                    if ("show" !== i || !v || void 0 === v[r]) continue;
                    g = !0;
                  }
                  d[r] = (v && v[r]) || S.style(e, r);
                }
              if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in (f &&
                  1 === e.nodeType &&
                  ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                  null == (l = v && v.display) && (l = K.get(e, "display")),
                  "none" === (c = S.css(e, "display")) &&
                    (l
                      ? (c = l)
                      : (de([e], !0),
                        (l = e.style.display || l),
                        (c = S.css(e, "display")),
                        de([e]))),
                  ("inline" === c || ("inline-block" === c && null != l)) &&
                    "none" === S.css(e, "float") &&
                    (u ||
                      (p.done(function () {
                        h.display = l;
                      }),
                      null == l &&
                        ((c = h.display), (l = "none" === c ? "" : c))),
                    (h.display = "inline-block"))),
                n.overflow &&
                  ((h.overflow = "hidden"),
                  p.always(function () {
                    (h.overflow = n.overflow[0]),
                      (h.overflowX = n.overflow[1]),
                      (h.overflowY = n.overflow[2]);
                  })),
                (u = !1),
                d))
                  u ||
                    (v
                      ? "hidden" in v && (g = v.hidden)
                      : (v = K.access(e, "fxshow", { display: l })),
                    o && (v.hidden = !g),
                    g && de([e], !0),
                    p.done(function () {
                      for (r in (g || de([e]), K.remove(e, "fxshow"), d))
                        S.style(e, r, d[r]);
                    })),
                    (u = ft(g ? v[r] : 0, r, p)),
                    r in v ||
                      ((v[r] = u.start),
                      g && ((u.end = u.start), (u.start = 0)));
            },
          ],
          prefilter: function (e, t) {
            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
          },
        })),
          (S.speed = function (e, t, n) {
            var r =
              e && "object" == typeof e
                ? S.extend({}, e)
                : {
                    complete: n || (!n && t) || (m(e) && e),
                    duration: e,
                    easing: (n && t) || (t && !m(t) && t),
                  };
            return (
              S.fx.off
                ? (r.duration = 0)
                : "number" != typeof r.duration &&
                  (r.duration in S.fx.speeds
                    ? (r.duration = S.fx.speeds[r.duration])
                    : (r.duration = S.fx.speeds._default)),
              (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
              (r.old = r.complete),
              (r.complete = function () {
                m(r.old) && r.old.call(this),
                  r.queue && S.dequeue(this, r.queue);
              }),
              r
            );
          }),
          S.fn.extend({
            fadeTo: function (e, t, n, r) {
              return this.filter(le)
                .css("opacity", 0)
                .show()
                .end()
                .animate({ opacity: t }, e, n, r);
            },
            animate: function (e, t, n, r) {
              var i = S.isEmptyObject(e),
                o = S.speed(t, n, r),
                a = function () {
                  var t = pt(this, S.extend({}, e), o);
                  (i || K.get(this, "finish")) && t.stop(!0);
                };
              return (
                (a.finish = a),
                i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
              );
            },
            stop: function (e, t, n) {
              var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n);
              };
              return (
                "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                t && this.queue(e || "fx", []),
                this.each(function () {
                  var t = !0,
                    i = null != e && e + "queueHooks",
                    o = S.timers,
                    a = K.get(this);
                  if (i) a[i] && a[i].stop && r(a[i]);
                  else for (i in a) a[i] && a[i].stop && st.test(i) && r(a[i]);
                  for (i = o.length; i--; )
                    o[i].elem !== this ||
                      (null != e && o[i].queue !== e) ||
                      (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                  (!t && n) || S.dequeue(this, e);
                })
              );
            },
            finish: function (e) {
              return (
                !1 !== e && (e = e || "fx"),
                this.each(function () {
                  var t,
                    n = K.get(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = S.timers,
                    a = r ? r.length : 0;
                  for (
                    n.finish = !0,
                      S.queue(this, e, []),
                      i && i.stop && i.stop.call(this, !0),
                      t = o.length;
                    t--;

                  )
                    o[t].elem === this &&
                      o[t].queue === e &&
                      (o[t].anim.stop(!0), o.splice(t, 1));
                  for (t = 0; t < a; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                  delete n.finish;
                })
              );
            },
          }),
          S.each(["toggle", "show", "hide"], function (e, t) {
            var n = S.fn[t];
            S.fn[t] = function (e, r, i) {
              return null == e || "boolean" == typeof e
                ? n.apply(this, arguments)
                : this.animate(ct(t, !0), e, r, i);
            };
          }),
          S.each(
            {
              slideDown: ct("show"),
              slideUp: ct("hide"),
              slideToggle: ct("toggle"),
              fadeIn: { opacity: "show" },
              fadeOut: { opacity: "hide" },
              fadeToggle: { opacity: "toggle" },
            },
            function (e, t) {
              S.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r);
              };
            }
          ),
          (S.timers = []),
          (S.fx.tick = function () {
            var e,
              t = 0,
              n = S.timers;
            for (it = Date.now(); t < n.length; t++)
              (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || S.fx.stop(), (it = void 0);
          }),
          (S.fx.timer = function (e) {
            S.timers.push(e), S.fx.start();
          }),
          (S.fx.interval = 13),
          (S.fx.start = function () {
            ot || ((ot = !0), ut());
          }),
          (S.fx.stop = function () {
            ot = null;
          }),
          (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
          (S.fn.delay = function (e, t) {
            return (
              (e = (S.fx && S.fx.speeds[e]) || e),
              (t = t || "fx"),
              this.queue(t, function (t, n) {
                var i = r.setTimeout(t, e);
                n.stop = function () {
                  r.clearTimeout(i);
                };
              })
            );
          }),
          (function () {
            var e = x.createElement("input"),
              t = x
                .createElement("select")
                .appendChild(x.createElement("option"));
            (e.type = "checkbox"),
              (v.checkOn = "" !== e.value),
              (v.optSelected = t.selected),
              ((e = x.createElement("input")).value = "t"),
              (e.type = "radio"),
              (v.radioValue = "t" === e.value);
          })();
        var dt,
          ht = S.expr.attrHandle;
        S.fn.extend({
          attr: function (e, t) {
            return z(this, S.attr, e, t, arguments.length > 1);
          },
          removeAttr: function (e) {
            return this.each(function () {
              S.removeAttr(this, e);
            });
          },
        }),
          S.extend({
            attr: function (e, t, n) {
              var r,
                i,
                o = e.nodeType;
              if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute
                  ? S.prop(e, t, n)
                  : ((1 === o && S.isXMLDoc(e)) ||
                      (i =
                        S.attrHooks[t.toLowerCase()] ||
                        (S.expr.match.bool.test(t) ? dt : void 0)),
                    void 0 !== n
                      ? null === n
                        ? void S.removeAttr(e, t)
                        : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                        ? r
                        : (e.setAttribute(t, n + ""), n)
                      : i && "get" in i && null !== (r = i.get(e, t))
                      ? r
                      : null == (r = S.find.attr(e, t))
                      ? void 0
                      : r);
            },
            attrHooks: {
              type: {
                set: function (e, t) {
                  if (!v.radioValue && "radio" === t && D(e, "input")) {
                    var n = e.value;
                    return e.setAttribute("type", t), n && (e.value = n), t;
                  }
                },
              },
            },
            removeAttr: function (e, t) {
              var n,
                r = 0,
                i = t && t.match(I);
              if (i && 1 === e.nodeType)
                for (; (n = i[r++]); ) e.removeAttribute(n);
            },
          }),
          (dt = {
            set: function (e, t, n) {
              return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
          }),
          S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = ht[t] || S.find.attr;
            ht[t] = function (e, t, r) {
              var i,
                o,
                a = t.toLowerCase();
              return (
                r ||
                  ((o = ht[a]),
                  (ht[a] = i),
                  (i = null != n(e, t, r) ? a : null),
                  (ht[a] = o)),
                i
              );
            };
          });
        var gt = /^(?:input|select|textarea|button)$/i,
          vt = /^(?:a|area)$/i;
        function mt(e) {
          return (e.match(I) || []).join(" ");
        }
        function yt(e) {
          return (e.getAttribute && e.getAttribute("class")) || "";
        }
        function xt(e) {
          return Array.isArray(e)
            ? e
            : ("string" == typeof e && e.match(I)) || [];
        }
        S.fn.extend({
          prop: function (e, t) {
            return z(this, S.prop, e, t, arguments.length > 1);
          },
          removeProp: function (e) {
            return this.each(function () {
              delete this[S.propFix[e] || e];
            });
          },
        }),
          S.extend({
            prop: function (e, t, n) {
              var r,
                i,
                o = e.nodeType;
              if (3 !== o && 8 !== o && 2 !== o)
                return (
                  (1 === o && S.isXMLDoc(e)) ||
                    ((t = S.propFix[t] || t), (i = S.propHooks[t])),
                  void 0 !== n
                    ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                      ? r
                      : (e[t] = n)
                    : i && "get" in i && null !== (r = i.get(e, t))
                    ? r
                    : e[t]
                );
            },
            propHooks: {
              tabIndex: {
                get: function (e) {
                  var t = S.find.attr(e, "tabindex");
                  return t
                    ? parseInt(t, 10)
                    : gt.test(e.nodeName) || (vt.test(e.nodeName) && e.href)
                    ? 0
                    : -1;
                },
              },
            },
            propFix: { for: "htmlFor", class: "className" },
          }),
          v.optSelected ||
            (S.propHooks.selected = {
              get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null;
              },
              set: function (e) {
                var t = e.parentNode;
                t &&
                  (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
              },
            }),
          S.each(
            [
              "tabIndex",
              "readOnly",
              "maxLength",
              "cellSpacing",
              "cellPadding",
              "rowSpan",
              "colSpan",
              "useMap",
              "frameBorder",
              "contentEditable",
            ],
            function () {
              S.propFix[this.toLowerCase()] = this;
            }
          ),
          S.fn.extend({
            addClass: function (e) {
              var t,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;
              if (m(e))
                return this.each(function (t) {
                  S(this).addClass(e.call(this, t, yt(this)));
                });
              if ((t = xt(e)).length)
                for (; (n = this[u++]); )
                  if (
                    ((i = yt(n)), (r = 1 === n.nodeType && " " + mt(i) + " "))
                  ) {
                    for (a = 0; (o = t[a++]); )
                      r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                    i !== (s = mt(r)) && n.setAttribute("class", s);
                  }
              return this;
            },
            removeClass: function (e) {
              var t,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;
              if (m(e))
                return this.each(function (t) {
                  S(this).removeClass(e.call(this, t, yt(this)));
                });
              if (!arguments.length) return this.attr("class", "");
              if ((t = xt(e)).length)
                for (; (n = this[u++]); )
                  if (
                    ((i = yt(n)), (r = 1 === n.nodeType && " " + mt(i) + " "))
                  ) {
                    for (a = 0; (o = t[a++]); )
                      for (; r.indexOf(" " + o + " ") > -1; )
                        r = r.replace(" " + o + " ", " ");
                    i !== (s = mt(r)) && n.setAttribute("class", s);
                  }
              return this;
            },
            toggleClass: function (e, t) {
              var n = typeof e,
                r = "string" === n || Array.isArray(e);
              return "boolean" == typeof t && r
                ? t
                  ? this.addClass(e)
                  : this.removeClass(e)
                : m(e)
                ? this.each(function (n) {
                    S(this).toggleClass(e.call(this, n, yt(this), t), t);
                  })
                : this.each(function () {
                    var t, i, o, a;
                    if (r)
                      for (i = 0, o = S(this), a = xt(e); (t = a[i++]); )
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else
                      (void 0 !== e && "boolean" !== n) ||
                        ((t = yt(this)) && K.set(this, "__className__", t),
                        this.setAttribute &&
                          this.setAttribute(
                            "class",
                            t || !1 === e
                              ? ""
                              : K.get(this, "__className__") || ""
                          ));
                  });
            },
            hasClass: function (e) {
              var t,
                n,
                r = 0;
              for (t = " " + e + " "; (n = this[r++]); )
                if (1 === n.nodeType && (" " + mt(yt(n)) + " ").indexOf(t) > -1)
                  return !0;
              return !1;
            },
          });
        var bt = /\r/g;
        S.fn.extend({
          val: function (e) {
            var t,
              n,
              r,
              i = this[0];
            return arguments.length
              ? ((r = m(e)),
                this.each(function (n) {
                  var i;
                  1 === this.nodeType &&
                    (null == (i = r ? e.call(this, n, S(this).val()) : e)
                      ? (i = "")
                      : "number" == typeof i
                      ? (i += "")
                      : Array.isArray(i) &&
                        (i = S.map(i, function (e) {
                          return null == e ? "" : e + "";
                        })),
                    ((t =
                      S.valHooks[this.type] ||
                      S.valHooks[this.nodeName.toLowerCase()]) &&
                      "set" in t &&
                      void 0 !== t.set(this, i, "value")) ||
                      (this.value = i));
                }))
              : i
              ? (t =
                  S.valHooks[i.type] || S.valHooks[i.nodeName.toLowerCase()]) &&
                "get" in t &&
                void 0 !== (n = t.get(i, "value"))
                ? n
                : "string" == typeof (n = i.value)
                ? n.replace(bt, "")
                : null == n
                ? ""
                : n
              : void 0;
          },
        }),
          S.extend({
            valHooks: {
              option: {
                get: function (e) {
                  var t = S.find.attr(e, "value");
                  return null != t ? t : mt(S.text(e));
                },
              },
              select: {
                get: function (e) {
                  var t,
                    n,
                    r,
                    i = e.options,
                    o = e.selectedIndex,
                    a = "select-one" === e.type,
                    s = a ? null : [],
                    u = a ? o + 1 : i.length;
                  for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                    if (
                      ((n = i[r]).selected || r === o) &&
                      !n.disabled &&
                      (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))
                    ) {
                      if (((t = S(n).val()), a)) return t;
                      s.push(t);
                    }
                  return s;
                },
                set: function (e, t) {
                  for (
                    var n, r, i = e.options, o = S.makeArray(t), a = i.length;
                    a--;

                  )
                    ((r = i[a]).selected =
                      S.inArray(S.valHooks.option.get(r), o) > -1) && (n = !0);
                  return n || (e.selectedIndex = -1), o;
                },
              },
            },
          }),
          S.each(["radio", "checkbox"], function () {
            (S.valHooks[this] = {
              set: function (e, t) {
                if (Array.isArray(t))
                  return (e.checked = S.inArray(S(e).val(), t) > -1);
              },
            }),
              v.checkOn ||
                (S.valHooks[this].get = function (e) {
                  return null === e.getAttribute("value") ? "on" : e.value;
                });
          }),
          (v.focusin = "onfocusin" in r);
        var wt = /^(?:focusinfocus|focusoutblur)$/,
          Tt = function (e) {
            e.stopPropagation();
          };
        S.extend(S.event, {
          trigger: function (e, t, n, i) {
            var o,
              a,
              s,
              u,
              l,
              c,
              f,
              p,
              h = [n || x],
              g = d.call(e, "type") ? e.type : e,
              v = d.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
              ((a = p = s = n = n || x),
              3 !== n.nodeType &&
                8 !== n.nodeType &&
                !wt.test(g + S.event.triggered) &&
                (g.indexOf(".") > -1 &&
                  ((v = g.split(".")), (g = v.shift()), v.sort()),
                (l = g.indexOf(":") < 0 && "on" + g),
                ((e = e[S.expando]
                  ? e
                  : new S.Event(g, "object" == typeof e && e)).isTrigger = i
                  ? 2
                  : 3),
                (e.namespace = v.join(".")),
                (e.rnamespace = e.namespace
                  ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)")
                  : null),
                (e.result = void 0),
                e.target || (e.target = n),
                (t = null == t ? [e] : S.makeArray(t, [e])),
                (f = S.event.special[g] || {}),
                i || !f.trigger || !1 !== f.trigger.apply(n, t)))
            ) {
              if (!i && !f.noBubble && !y(n)) {
                for (
                  u = f.delegateType || g, wt.test(u + g) || (a = a.parentNode);
                  a;
                  a = a.parentNode
                )
                  h.push(a), (s = a);
                s === (n.ownerDocument || x) &&
                  h.push(s.defaultView || s.parentWindow || r);
              }
              for (o = 0; (a = h[o++]) && !e.isPropagationStopped(); )
                (p = a),
                  (e.type = o > 1 ? u : f.bindType || g),
                  (c =
                    (K.get(a, "events") || Object.create(null))[e.type] &&
                    K.get(a, "handle")) && c.apply(a, t),
                  (c = l && a[l]) &&
                    c.apply &&
                    J(a) &&
                    ((e.result = c.apply(a, t)),
                    !1 === e.result && e.preventDefault());
              return (
                (e.type = g),
                i ||
                  e.isDefaultPrevented() ||
                  (f._default && !1 !== f._default.apply(h.pop(), t)) ||
                  !J(n) ||
                  (l &&
                    m(n[g]) &&
                    !y(n) &&
                    ((s = n[l]) && (n[l] = null),
                    (S.event.triggered = g),
                    e.isPropagationStopped() && p.addEventListener(g, Tt),
                    n[g](),
                    e.isPropagationStopped() && p.removeEventListener(g, Tt),
                    (S.event.triggered = void 0),
                    s && (n[l] = s))),
                e.result
              );
            }
          },
          simulate: function (e, t, n) {
            var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
            S.event.trigger(r, null, t);
          },
        }),
          S.fn.extend({
            trigger: function (e, t) {
              return this.each(function () {
                S.event.trigger(e, t, this);
              });
            },
            triggerHandler: function (e, t) {
              var n = this[0];
              if (n) return S.event.trigger(e, t, n, !0);
            },
          }),
          v.focusin ||
            S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              var n = function (e) {
                S.event.simulate(t, e.target, S.event.fix(e));
              };
              S.event.special[t] = {
                setup: function () {
                  var r = this.ownerDocument || this.document || this,
                    i = K.access(r, t);
                  i || r.addEventListener(e, n, !0),
                    K.access(r, t, (i || 0) + 1);
                },
                teardown: function () {
                  var r = this.ownerDocument || this.document || this,
                    i = K.access(r, t) - 1;
                  i
                    ? K.access(r, t, i)
                    : (r.removeEventListener(e, n, !0), K.remove(r, t));
                },
              };
            });
        var Ct = r.location,
          St = { guid: Date.now() },
          Et = /\?/;
        S.parseXML = function (e) {
          var t, n;
          if (!e || "string" != typeof e) return null;
          try {
            t = new r.DOMParser().parseFromString(e, "text/xml");
          } catch (e) {}
          return (
            (n = t && t.getElementsByTagName("parsererror")[0]),
            (t && !n) ||
              S.error(
                "Invalid XML: " +
                  (n
                    ? S.map(n.childNodes, function (e) {
                        return e.textContent;
                      }).join("\n")
                    : e)
              ),
            t
          );
        };
        var kt = /\[\]$/,
          At = /\r?\n/g,
          jt = /^(?:submit|button|image|reset|file)$/i,
          Nt = /^(?:input|select|textarea|keygen)/i;
        function Dt(e, t, n, r) {
          var i;
          if (Array.isArray(t))
            S.each(t, function (t, i) {
              n || kt.test(e)
                ? r(e, i)
                : Dt(
                    e +
                      "[" +
                      ("object" == typeof i && null != i ? t : "") +
                      "]",
                    i,
                    n,
                    r
                  );
            });
          else if (n || "object" !== T(t)) r(e, t);
          else for (i in t) Dt(e + "[" + i + "]", t[i], n, r);
        }
        (S.param = function (e, t) {
          var n,
            r = [],
            i = function (e, t) {
              var n = m(t) ? t() : t;
              r[r.length] =
                encodeURIComponent(e) +
                "=" +
                encodeURIComponent(null == n ? "" : n);
            };
          if (null == e) return "";
          if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
            S.each(e, function () {
              i(this.name, this.value);
            });
          else for (n in e) Dt(n, e[n], t, i);
          return r.join("&");
        }),
          S.fn.extend({
            serialize: function () {
              return S.param(this.serializeArray());
            },
            serializeArray: function () {
              return this.map(function () {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this;
              })
                .filter(function () {
                  var e = this.type;
                  return (
                    this.name &&
                    !S(this).is(":disabled") &&
                    Nt.test(this.nodeName) &&
                    !jt.test(e) &&
                    (this.checked || !ve.test(e))
                  );
                })
                .map(function (e, t) {
                  var n = S(this).val();
                  return null == n
                    ? null
                    : Array.isArray(n)
                    ? S.map(n, function (e) {
                        return { name: t.name, value: e.replace(At, "\r\n") };
                      })
                    : { name: t.name, value: n.replace(At, "\r\n") };
                })
                .get();
            },
          });
        var Lt = /%20/g,
          qt = /#.*$/,
          Ht = /([?&])_=[^&]*/,
          Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          Rt = /^(?:GET|HEAD)$/,
          Mt = /^\/\//,
          Pt = {},
          It = {},
          Wt = "*/".concat("*"),
          Ft = x.createElement("a");
        function Bt(e) {
          return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var r,
              i = 0,
              o = t.toLowerCase().match(I) || [];
            if (m(n))
              for (; (r = o[i++]); )
                "+" === r[0]
                  ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                  : (e[r] = e[r] || []).push(n);
          };
        }
        function $t(e, t, n, r) {
          var i = {},
            o = e === It;
          function a(s) {
            var u;
            return (
              (i[s] = !0),
              S.each(e[s] || [], function (e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l]
                  ? o
                    ? !(u = l)
                    : void 0
                  : (t.dataTypes.unshift(l), a(l), !1);
              }),
              u
            );
          }
          return a(t.dataTypes[0]) || (!i["*"] && a("*"));
        }
        function _t(e, t) {
          var n,
            r,
            i = S.ajaxSettings.flatOptions || {};
          for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
          return r && S.extend(!0, e, r), e;
        }
        (Ft.href = Ct.href),
          S.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
              url: Ct.href,
              type: "GET",
              isLocal:
                /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                  Ct.protocol
                ),
              global: !0,
              processData: !0,
              async: !0,
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              accepts: {
                "*": Wt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript",
              },
              contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
              responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON",
              },
              converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML,
              },
              flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
              return t ? _t(_t(e, S.ajaxSettings), t) : _t(S.ajaxSettings, e);
            },
            ajaxPrefilter: Bt(Pt),
            ajaxTransport: Bt(It),
            ajax: function (e, t) {
              "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
              var n,
                i,
                o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d = S.ajaxSetup({}, t),
                h = d.context || d,
                g = d.context && (h.nodeType || h.jquery) ? S(h) : S.event,
                v = S.Deferred(),
                m = S.Callbacks("once memory"),
                y = d.statusCode || {},
                b = {},
                w = {},
                T = "canceled",
                C = {
                  readyState: 0,
                  getResponseHeader: function (e) {
                    var t;
                    if (l) {
                      if (!a)
                        for (a = {}; (t = Ot.exec(o)); )
                          a[t[1].toLowerCase() + " "] = (
                            a[t[1].toLowerCase() + " "] || []
                          ).concat(t[2]);
                      t = a[e.toLowerCase() + " "];
                    }
                    return null == t ? null : t.join(", ");
                  },
                  getAllResponseHeaders: function () {
                    return l ? o : null;
                  },
                  setRequestHeader: function (e, t) {
                    return (
                      null == l &&
                        ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                        (b[e] = t)),
                      this
                    );
                  },
                  overrideMimeType: function (e) {
                    return null == l && (d.mimeType = e), this;
                  },
                  statusCode: function (e) {
                    var t;
                    if (e)
                      if (l) C.always(e[C.status]);
                      else for (t in e) y[t] = [y[t], e[t]];
                    return this;
                  },
                  abort: function (e) {
                    var t = e || T;
                    return n && n.abort(t), E(0, t), this;
                  },
                };
              if (
                (v.promise(C),
                (d.url = ((e || d.url || Ct.href) + "").replace(
                  Mt,
                  Ct.protocol + "//"
                )),
                (d.type = t.method || t.type || d.method || d.type),
                (d.dataTypes = (d.dataType || "*").toLowerCase().match(I) || [
                  "",
                ]),
                null == d.crossDomain)
              ) {
                u = x.createElement("a");
                try {
                  (u.href = d.url),
                    (u.href = u.href),
                    (d.crossDomain =
                      Ft.protocol + "//" + Ft.host !=
                      u.protocol + "//" + u.host);
                } catch (e) {
                  d.crossDomain = !0;
                }
              }
              if (
                (d.data &&
                  d.processData &&
                  "string" != typeof d.data &&
                  (d.data = S.param(d.data, d.traditional)),
                $t(Pt, d, t, C),
                l)
              )
                return C;
              for (f in ((c = S.event && d.global) &&
                0 == S.active++ &&
                S.event.trigger("ajaxStart"),
              (d.type = d.type.toUpperCase()),
              (d.hasContent = !Rt.test(d.type)),
              (i = d.url.replace(qt, "")),
              d.hasContent
                ? d.data &&
                  d.processData &&
                  0 ===
                    (d.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  (d.data = d.data.replace(Lt, "+"))
                : ((p = d.url.slice(i.length)),
                  d.data &&
                    (d.processData || "string" == typeof d.data) &&
                    ((i += (Et.test(i) ? "&" : "?") + d.data), delete d.data),
                  !1 === d.cache &&
                    ((i = i.replace(Ht, "$1")),
                    (p = (Et.test(i) ? "&" : "?") + "_=" + St.guid++ + p)),
                  (d.url = i + p)),
              d.ifModified &&
                (S.lastModified[i] &&
                  C.setRequestHeader("If-Modified-Since", S.lastModified[i]),
                S.etag[i] && C.setRequestHeader("If-None-Match", S.etag[i])),
              ((d.data && d.hasContent && !1 !== d.contentType) ||
                t.contentType) &&
                C.setRequestHeader("Content-Type", d.contentType),
              C.setRequestHeader(
                "Accept",
                d.dataTypes[0] && d.accepts[d.dataTypes[0]]
                  ? d.accepts[d.dataTypes[0]] +
                      ("*" !== d.dataTypes[0] ? ", " + Wt + "; q=0.01" : "")
                  : d.accepts["*"]
              ),
              d.headers))
                C.setRequestHeader(f, d.headers[f]);
              if (d.beforeSend && (!1 === d.beforeSend.call(h, C, d) || l))
                return C.abort();
              if (
                ((T = "abort"),
                m.add(d.complete),
                C.done(d.success),
                C.fail(d.error),
                (n = $t(It, d, t, C)))
              ) {
                if (((C.readyState = 1), c && g.trigger("ajaxSend", [C, d]), l))
                  return C;
                d.async &&
                  d.timeout > 0 &&
                  (s = r.setTimeout(function () {
                    C.abort("timeout");
                  }, d.timeout));
                try {
                  (l = !1), n.send(b, E);
                } catch (e) {
                  if (l) throw e;
                  E(-1, e);
                }
              } else E(-1, "No Transport");
              function E(e, t, a, u) {
                var f,
                  p,
                  x,
                  b,
                  w,
                  T = t;
                l ||
                  ((l = !0),
                  s && r.clearTimeout(s),
                  (n = void 0),
                  (o = u || ""),
                  (C.readyState = e > 0 ? 4 : 0),
                  (f = (e >= 200 && e < 300) || 304 === e),
                  a &&
                    (b = (function (e, t, n) {
                      for (
                        var r, i, o, a, s = e.contents, u = e.dataTypes;
                        "*" === u[0];

                      )
                        u.shift(),
                          void 0 === r &&
                            (r =
                              e.mimeType ||
                              t.getResponseHeader("Content-Type"));
                      if (r)
                        for (i in s)
                          if (s[i] && s[i].test(r)) {
                            u.unshift(i);
                            break;
                          }
                      if (u[0] in n) o = u[0];
                      else {
                        for (i in n) {
                          if (!u[0] || e.converters[i + " " + u[0]]) {
                            o = i;
                            break;
                          }
                          a || (a = i);
                        }
                        o = o || a;
                      }
                      if (o) return o !== u[0] && u.unshift(o), n[o];
                    })(d, C, a)),
                  !f &&
                    S.inArray("script", d.dataTypes) > -1 &&
                    S.inArray("json", d.dataTypes) < 0 &&
                    (d.converters["text script"] = function () {}),
                  (b = (function (e, t, n, r) {
                    var i,
                      o,
                      a,
                      s,
                      u,
                      l = {},
                      c = e.dataTypes.slice();
                    if (c[1])
                      for (a in e.converters)
                        l[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o; )
                      if (
                        (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u &&
                          r &&
                          e.dataFilter &&
                          (t = e.dataFilter(t, e.dataType)),
                        (u = o),
                        (o = c.shift()))
                      )
                        if ("*" === o) o = u;
                        else if ("*" !== u && u !== o) {
                          if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                              if (
                                (s = i.split(" "))[1] === o &&
                                (a = l[u + " " + s[0]] || l["* " + s[0]])
                              ) {
                                !0 === a
                                  ? (a = l[i])
                                  : !0 !== l[i] &&
                                    ((o = s[0]), c.unshift(s[1]));
                                break;
                              }
                          if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else
                              try {
                                t = a(t);
                              } catch (e) {
                                return {
                                  state: "parsererror",
                                  error: a
                                    ? e
                                    : "No conversion from " + u + " to " + o,
                                };
                              }
                        }
                    return { state: "success", data: t };
                  })(d, b, C, f)),
                  f
                    ? (d.ifModified &&
                        ((w = C.getResponseHeader("Last-Modified")) &&
                          (S.lastModified[i] = w),
                        (w = C.getResponseHeader("etag")) && (S.etag[i] = w)),
                      204 === e || "HEAD" === d.type
                        ? (T = "nocontent")
                        : 304 === e
                        ? (T = "notmodified")
                        : ((T = b.state), (p = b.data), (f = !(x = b.error))))
                    : ((x = T), (!e && T) || ((T = "error"), e < 0 && (e = 0))),
                  (C.status = e),
                  (C.statusText = (t || T) + ""),
                  f ? v.resolveWith(h, [p, T, C]) : v.rejectWith(h, [C, T, x]),
                  C.statusCode(y),
                  (y = void 0),
                  c &&
                    g.trigger(f ? "ajaxSuccess" : "ajaxError", [
                      C,
                      d,
                      f ? p : x,
                    ]),
                  m.fireWith(h, [C, T]),
                  c &&
                    (g.trigger("ajaxComplete", [C, d]),
                    --S.active || S.event.trigger("ajaxStop")));
              }
              return C;
            },
            getJSON: function (e, t, n) {
              return S.get(e, t, n, "json");
            },
            getScript: function (e, t) {
              return S.get(e, void 0, t, "script");
            },
          }),
          S.each(["get", "post"], function (e, t) {
            S[t] = function (e, n, r, i) {
              return (
                m(n) && ((i = i || r), (r = n), (n = void 0)),
                S.ajax(
                  S.extend(
                    { url: e, type: t, dataType: i, data: n, success: r },
                    S.isPlainObject(e) && e
                  )
                )
              );
            };
          }),
          S.ajaxPrefilter(function (e) {
            var t;
            for (t in e.headers)
              "content-type" === t.toLowerCase() &&
                (e.contentType = e.headers[t] || "");
          }),
          (S._evalUrl = function (e, t, n) {
            return S.ajax({
              url: e,
              type: "GET",
              dataType: "script",
              cache: !0,
              async: !1,
              global: !1,
              converters: { "text script": function () {} },
              dataFilter: function (e) {
                S.globalEval(e, t, n);
              },
            });
          }),
          S.fn.extend({
            wrapAll: function (e) {
              var t;
              return (
                this[0] &&
                  (m(e) && (e = e.call(this[0])),
                  (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
                  this[0].parentNode && t.insertBefore(this[0]),
                  t
                    .map(function () {
                      for (var e = this; e.firstElementChild; )
                        e = e.firstElementChild;
                      return e;
                    })
                    .append(this)),
                this
              );
            },
            wrapInner: function (e) {
              return m(e)
                ? this.each(function (t) {
                    S(this).wrapInner(e.call(this, t));
                  })
                : this.each(function () {
                    var t = S(this),
                      n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e);
                  });
            },
            wrap: function (e) {
              var t = m(e);
              return this.each(function (n) {
                S(this).wrapAll(t ? e.call(this, n) : e);
              });
            },
            unwrap: function (e) {
              return (
                this.parent(e)
                  .not("body")
                  .each(function () {
                    S(this).replaceWith(this.childNodes);
                  }),
                this
              );
            },
          }),
          (S.expr.pseudos.hidden = function (e) {
            return !S.expr.pseudos.visible(e);
          }),
          (S.expr.pseudos.visible = function (e) {
            return !!(
              e.offsetWidth ||
              e.offsetHeight ||
              e.getClientRects().length
            );
          }),
          (S.ajaxSettings.xhr = function () {
            try {
              return new r.XMLHttpRequest();
            } catch (e) {}
          });
        var Ut = { 0: 200, 1223: 204 },
          zt = S.ajaxSettings.xhr();
        (v.cors = !!zt && "withCredentials" in zt),
          (v.ajax = zt = !!zt),
          S.ajaxTransport(function (e) {
            var t, n;
            if (v.cors || (zt && !e.crossDomain))
              return {
                send: function (i, o) {
                  var a,
                    s = e.xhr();
                  if (
                    (s.open(e.type, e.url, e.async, e.username, e.password),
                    e.xhrFields)
                  )
                    for (a in e.xhrFields) s[a] = e.xhrFields[a];
                  for (a in (e.mimeType &&
                    s.overrideMimeType &&
                    s.overrideMimeType(e.mimeType),
                  e.crossDomain ||
                    i["X-Requested-With"] ||
                    (i["X-Requested-With"] = "XMLHttpRequest"),
                  i))
                    s.setRequestHeader(a, i[a]);
                  (t = function (e) {
                    return function () {
                      t &&
                        ((t =
                          n =
                          s.onload =
                          s.onerror =
                          s.onabort =
                          s.ontimeout =
                          s.onreadystatechange =
                            null),
                        "abort" === e
                          ? s.abort()
                          : "error" === e
                          ? "number" != typeof s.status
                            ? o(0, "error")
                            : o(s.status, s.statusText)
                          : o(
                              Ut[s.status] || s.status,
                              s.statusText,
                              "text" !== (s.responseType || "text") ||
                                "string" != typeof s.responseText
                                ? { binary: s.response }
                                : { text: s.responseText },
                              s.getAllResponseHeaders()
                            ));
                    };
                  }),
                    (s.onload = t()),
                    (n = s.onerror = s.ontimeout = t("error")),
                    void 0 !== s.onabort
                      ? (s.onabort = n)
                      : (s.onreadystatechange = function () {
                          4 === s.readyState &&
                            r.setTimeout(function () {
                              t && n();
                            });
                        }),
                    (t = t("abort"));
                  try {
                    s.send((e.hasContent && e.data) || null);
                  } catch (e) {
                    if (t) throw e;
                  }
                },
                abort: function () {
                  t && t();
                },
              };
          }),
          S.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
          }),
          S.ajaxSetup({
            accepts: {
              script:
                "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
              "text script": function (e) {
                return S.globalEval(e), e;
              },
            },
          }),
          S.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1),
              e.crossDomain && (e.type = "GET");
          }),
          S.ajaxTransport("script", function (e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs)
              return {
                send: function (r, i) {
                  (t = S("<script>")
                    .attr(e.scriptAttrs || {})
                    .prop({ charset: e.scriptCharset, src: e.url })
                    .on(
                      "load error",
                      (n = function (e) {
                        t.remove(),
                          (n = null),
                          e && i("error" === e.type ? 404 : 200, e.type);
                      })
                    )),
                    x.head.appendChild(t[0]);
                },
                abort: function () {
                  n && n();
                },
              };
          });
        var Xt,
          Vt = [],
          Gt = /(=)\?(?=&|$)|\?\?/;
        S.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function () {
            var e = Vt.pop() || S.expando + "_" + St.guid++;
            return (this[e] = !0), e;
          },
        }),
          S.ajaxPrefilter("json jsonp", function (e, t, n) {
            var i,
              o,
              a,
              s =
                !1 !== e.jsonp &&
                (Gt.test(e.url)
                  ? "url"
                  : "string" == typeof e.data &&
                    0 ===
                      (e.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    Gt.test(e.data) &&
                    "data");
            if (s || "jsonp" === e.dataTypes[0])
              return (
                (i = e.jsonpCallback =
                  m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                s
                  ? (e[s] = e[s].replace(Gt, "$1" + i))
                  : !1 !== e.jsonp &&
                    (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                (e.converters["script json"] = function () {
                  return a || S.error(i + " was not called"), a[0];
                }),
                (e.dataTypes[0] = "json"),
                (o = r[i]),
                (r[i] = function () {
                  a = arguments;
                }),
                n.always(function () {
                  void 0 === o ? S(r).removeProp(i) : (r[i] = o),
                    e[i] && ((e.jsonpCallback = t.jsonpCallback), Vt.push(i)),
                    a && m(o) && o(a[0]),
                    (a = o = void 0);
                }),
                "script"
              );
          }),
          (v.createHTMLDocument =
            (((Xt = x.implementation.createHTMLDocument("").body).innerHTML =
              "<form></form><form></form>"),
            2 === Xt.childNodes.length)),
          (S.parseHTML = function (e, t, n) {
            return "string" != typeof e
              ? []
              : ("boolean" == typeof t && ((n = t), (t = !1)),
                t ||
                  (v.createHTMLDocument
                    ? (((r = (t =
                        x.implementation.createHTMLDocument("")).createElement(
                        "base"
                      )).href = x.location.href),
                      t.head.appendChild(r))
                    : (t = x)),
                (o = !n && []),
                (i = L.exec(e))
                  ? [t.createElement(i[1])]
                  : ((i = Ce([e], t, o)),
                    o && o.length && S(o).remove(),
                    S.merge([], i.childNodes)));
            var r, i, o;
          }),
          (S.fn.load = function (e, t, n) {
            var r,
              i,
              o,
              a = this,
              s = e.indexOf(" ");
            return (
              s > -1 && ((r = mt(e.slice(s))), (e = e.slice(0, s))),
              m(t)
                ? ((n = t), (t = void 0))
                : t && "object" == typeof t && (i = "POST"),
              a.length > 0 &&
                S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                  .done(function (e) {
                    (o = arguments),
                      a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
                  })
                  .always(
                    n &&
                      function (e, t) {
                        a.each(function () {
                          n.apply(this, o || [e.responseText, t, e]);
                        });
                      }
                  ),
              this
            );
          }),
          (S.expr.pseudos.animated = function (e) {
            return S.grep(S.timers, function (t) {
              return e === t.elem;
            }).length;
          }),
          (S.offset = {
            setOffset: function (e, t, n) {
              var r,
                i,
                o,
                a,
                s,
                u,
                l = S.css(e, "position"),
                c = S(e),
                f = {};
              "static" === l && (e.style.position = "relative"),
                (s = c.offset()),
                (o = S.css(e, "top")),
                (u = S.css(e, "left")),
                ("absolute" === l || "fixed" === l) &&
                (o + u).indexOf("auto") > -1
                  ? ((a = (r = c.position()).top), (i = r.left))
                  : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                m(t) && (t = t.call(e, n, S.extend({}, s))),
                null != t.top && (f.top = t.top - s.top + a),
                null != t.left && (f.left = t.left - s.left + i),
                "using" in t ? t.using.call(e, f) : c.css(f);
            },
          }),
          S.fn.extend({
            offset: function (e) {
              if (arguments.length)
                return void 0 === e
                  ? this
                  : this.each(function (t) {
                      S.offset.setOffset(this, e, t);
                    });
              var t,
                n,
                r = this[0];
              return r
                ? r.getClientRects().length
                  ? ((t = r.getBoundingClientRect()),
                    (n = r.ownerDocument.defaultView),
                    {
                      top: t.top + n.pageYOffset,
                      left: t.left + n.pageXOffset,
                    })
                  : { top: 0, left: 0 }
                : void 0;
            },
            position: function () {
              if (this[0]) {
                var e,
                  t,
                  n,
                  r = this[0],
                  i = { top: 0, left: 0 };
                if ("fixed" === S.css(r, "position"))
                  t = r.getBoundingClientRect();
                else {
                  for (
                    t = this.offset(),
                      n = r.ownerDocument,
                      e = r.offsetParent || n.documentElement;
                    e &&
                    (e === n.body || e === n.documentElement) &&
                    "static" === S.css(e, "position");

                  )
                    e = e.parentNode;
                  e &&
                    e !== r &&
                    1 === e.nodeType &&
                    (((i = S(e).offset()).top += S.css(
                      e,
                      "borderTopWidth",
                      !0
                    )),
                    (i.left += S.css(e, "borderLeftWidth", !0)));
                }
                return {
                  top: t.top - i.top - S.css(r, "marginTop", !0),
                  left: t.left - i.left - S.css(r, "marginLeft", !0),
                };
              }
            },
            offsetParent: function () {
              return this.map(function () {
                for (
                  var e = this.offsetParent;
                  e && "static" === S.css(e, "position");

                )
                  e = e.offsetParent;
                return e || ae;
              });
            },
          }),
          S.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function (e, t) {
              var n = "pageYOffset" === t;
              S.fn[e] = function (r) {
                return z(
                  this,
                  function (e, r, i) {
                    var o;
                    if (
                      (y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                      void 0 === i)
                    )
                      return o ? o[t] : e[r];
                    o
                      ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                      : (e[r] = i);
                  },
                  e,
                  r,
                  arguments.length
                );
              };
            }
          ),
          S.each(["top", "left"], function (e, t) {
            S.cssHooks[t] = ze(v.pixelPosition, function (e, n) {
              if (n)
                return (
                  (n = Ue(e, t)), Fe.test(n) ? S(e).position()[t] + "px" : n
                );
            });
          }),
          S.each({ Height: "height", Width: "width" }, function (e, t) {
            S.each(
              { padding: "inner" + e, content: t, "": "outer" + e },
              function (n, r) {
                S.fn[r] = function (i, o) {
                  var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                  return z(
                    this,
                    function (t, n, i) {
                      var o;
                      return y(t)
                        ? 0 === r.indexOf("outer")
                          ? t["inner" + e]
                          : t.document.documentElement["client" + e]
                        : 9 === t.nodeType
                        ? ((o = t.documentElement),
                          Math.max(
                            t.body["scroll" + e],
                            o["scroll" + e],
                            t.body["offset" + e],
                            o["offset" + e],
                            o["client" + e]
                          ))
                        : void 0 === i
                        ? S.css(t, n, s)
                        : S.style(t, n, i, s);
                    },
                    t,
                    a ? i : void 0,
                    a
                  );
                };
              }
            );
          }),
          S.each(
            [
              "ajaxStart",
              "ajaxStop",
              "ajaxComplete",
              "ajaxError",
              "ajaxSuccess",
              "ajaxSend",
            ],
            function (e, t) {
              S.fn[t] = function (e) {
                return this.on(t, e);
              };
            }
          ),
          S.fn.extend({
            bind: function (e, t, n) {
              return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
              return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
              return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
              return 1 === arguments.length
                ? this.off(e, "**")
                : this.off(t, e || "**", n);
            },
            hover: function (e, t) {
              return this.mouseenter(e).mouseleave(t || e);
            },
          }),
          S.each(
            "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
              " "
            ),
            function (e, t) {
              S.fn[t] = function (e, n) {
                return arguments.length > 0
                  ? this.on(t, null, e, n)
                  : this.trigger(t);
              };
            }
          );
        var Yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        (S.proxy = function (e, t) {
          var n, r, i;
          if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
            return (
              (r = s.call(arguments, 2)),
              ((i = function () {
                return e.apply(t || this, r.concat(s.call(arguments)));
              }).guid = e.guid =
                e.guid || S.guid++),
              i
            );
        }),
          (S.holdReady = function (e) {
            e ? S.readyWait++ : S.ready(!0);
          }),
          (S.isArray = Array.isArray),
          (S.parseJSON = JSON.parse),
          (S.nodeName = D),
          (S.isFunction = m),
          (S.isWindow = y),
          (S.camelCase = Y),
          (S.type = T),
          (S.now = Date.now),
          (S.isNumeric = function (e) {
            var t = S.type(e);
            return (
              ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            );
          }),
          (S.trim = function (e) {
            return null == e ? "" : (e + "").replace(Yt, "");
          }),
          void 0 ===
            (n = function () {
              return S;
            }.apply(t, [])) || (e.exports = n);
        var Jt = r.jQuery,
          Qt = r.$;
        return (
          (S.noConflict = function (e) {
            return (
              r.$ === S && (r.$ = Qt), e && r.jQuery === S && (r.jQuery = Jt), S
            );
          }),
          void 0 === i && (r.jQuery = r.$ = S),
          S
        );
      });
    },
    379: (e, t, n) => {
      "use strict";
      var r,
        i = (function () {
          var e = {};
          return function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          };
        })(),
        o = [];
      function a(e) {
        for (var t = -1, n = 0; n < o.length; n++)
          if (o[n].identifier === e) {
            t = n;
            break;
          }
        return t;
      }
      function s(e, t) {
        for (var n = {}, r = [], i = 0; i < e.length; i++) {
          var s = e[i],
            u = t.base ? s[0] + t.base : s[0],
            l = n[u] || 0,
            c = "".concat(u, " ").concat(l);
          n[u] = l + 1;
          var f = a(c),
            p = { css: s[1], media: s[2], sourceMap: s[3] };
          -1 !== f
            ? (o[f].references++, o[f].updater(p))
            : o.push({ identifier: c, updater: g(p, t), references: 1 }),
            r.push(c);
        }
        return r;
      }
      function u(e) {
        var t = document.createElement("style"),
          r = e.attributes || {};
        if (void 0 === r.nonce) {
          var o = n.nc;
          o && (r.nonce = o);
        }
        if (
          (Object.keys(r).forEach(function (e) {
            t.setAttribute(e, r[e]);
          }),
          "function" == typeof e.insert)
        )
          e.insert(t);
        else {
          var a = i(e.insert || "head");
          if (!a)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          a.appendChild(t);
        }
        return t;
      }
      var l,
        c =
          ((l = []),
          function (e, t) {
            return (l[e] = t), l.filter(Boolean).join("\n");
          });
      function f(e, t, n, r) {
        var i = n
          ? ""
          : r.media
          ? "@media ".concat(r.media, " {").concat(r.css, "}")
          : r.css;
        if (e.styleSheet) e.styleSheet.cssText = c(t, i);
        else {
          var o = document.createTextNode(i),
            a = e.childNodes;
          a[t] && e.removeChild(a[t]),
            a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
        }
      }
      function p(e, t, n) {
        var r = n.css,
          i = n.media,
          o = n.sourceMap;
        if (
          (i ? e.setAttribute("media", i) : e.removeAttribute("media"),
          o &&
            "undefined" != typeof btoa &&
            (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
              btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
              " */"
            )),
          e.styleSheet)
        )
          e.styleSheet.cssText = r;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(r));
        }
      }
      var d = null,
        h = 0;
      function g(e, t) {
        var n, r, i;
        if (t.singleton) {
          var o = h++;
          (n = d || (d = u(t))),
            (r = f.bind(null, n, o, !1)),
            (i = f.bind(null, n, o, !0));
        } else
          (n = u(t)),
            (r = p.bind(null, n, t)),
            (i = function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            });
        return (
          r(e),
          function (t) {
            if (t) {
              if (
                t.css === e.css &&
                t.media === e.media &&
                t.sourceMap === e.sourceMap
              )
                return;
              r((e = t));
            } else i();
          }
        );
      }
      e.exports = function (e, t) {
        (t = t || {}).singleton ||
          "boolean" == typeof t.singleton ||
          (t.singleton =
            (void 0 === r &&
              (r = Boolean(window && document && document.all && !window.atob)),
            r));
        var n = s((e = e || []), t);
        return function (e) {
          if (
            ((e = e || []),
            "[object Array]" === Object.prototype.toString.call(e))
          ) {
            for (var r = 0; r < n.length; r++) {
              var i = a(n[r]);
              o[i].references--;
            }
            for (var u = s(e, t), l = 0; l < n.length; l++) {
              var c = a(n[l]);
              0 === o[c].references && (o[c].updater(), o.splice(c, 1));
            }
            n = u;
          }
        };
      };
    },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrXzMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Rhc2tfMy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3Rhc2tfMy8uL25vZGVfbW9kdWxlcy9qcXVlcnkvZGlzdC9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vdGFza18zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwidGhpcyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwiY29uY2F0Iiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWFRdWVyeSIsImRlZHVwZSIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJsZW5ndGgiLCJpZCIsIl9pIiwicHVzaCIsIl9hcnJheUxpa2VUb0FycmF5IiwiYXJyIiwibGVuIiwiYXJyMiIsIkFycmF5IiwiX2l0ZW0iLCJpc0FycmF5IiwiX2FycmF5V2l0aEhvbGVzIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJfcyIsIl9lIiwiX2FyciIsIl9uIiwiX2QiLCJjYWxsIiwibmV4dCIsImRvbmUiLCJ2YWx1ZSIsImVyciIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIm8iLCJtaW5MZW4iLCJuIiwiT2JqZWN0IiwicHJvdG90eXBlIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJmcm9tIiwidGVzdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIlR5cGVFcnJvciIsIl9ub25JdGVyYWJsZVJlc3QiLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290IiwiZ2xvYmFsIiwiZmFjdG9yeSIsImRvY3VtZW50IiwidyIsIkVycm9yIiwid2luZG93Iiwibm9HbG9iYWwiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiZmxhdCIsImFycmF5IiwiYXBwbHkiLCJpbmRleE9mIiwiY2xhc3MydHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZm5Ub1N0cmluZyIsIk9iamVjdEZ1bmN0aW9uU3RyaW5nIiwic3VwcG9ydCIsImlzRnVuY3Rpb24iLCJvYmoiLCJub2RlVHlwZSIsImlzV2luZG93IiwicHJlc2VydmVkU2NyaXB0QXR0cmlidXRlcyIsInR5cGUiLCJzcmMiLCJub25jZSIsIm5vTW9kdWxlIiwiRE9NRXZhbCIsImNvZGUiLCJub2RlIiwiZG9jIiwidmFsIiwic2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsInRleHQiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJ0b1R5cGUiLCJ2ZXJzaW9uIiwialF1ZXJ5Iiwic2VsZWN0b3IiLCJjb250ZXh0IiwiZm4iLCJpbml0IiwiaXNBcnJheUxpa2UiLCJqcXVlcnkiLCJ0b0FycmF5IiwiZ2V0IiwibnVtIiwicHVzaFN0YWNrIiwiZWxlbXMiLCJyZXQiLCJtZXJnZSIsInByZXZPYmplY3QiLCJlYWNoIiwiY2FsbGJhY2siLCJlbGVtIiwiYXJndW1lbnRzIiwiZmlyc3QiLCJlcSIsImxhc3QiLCJldmVuIiwiZ3JlcCIsIl9lbGVtIiwib2RkIiwiaiIsImVuZCIsInNvcnQiLCJzcGxpY2UiLCJleHRlbmQiLCJvcHRpb25zIiwiY29weSIsImNvcHlJc0FycmF5IiwiY2xvbmUiLCJ0YXJnZXQiLCJkZWVwIiwiaXNQbGFpbk9iamVjdCIsInVuZGVmaW5lZCIsImV4cGFuZG8iLCJNYXRoIiwicmFuZG9tIiwicmVwbGFjZSIsImlzUmVhZHkiLCJlcnJvciIsIm1zZyIsIm5vb3AiLCJwcm90byIsIkN0b3IiLCJpc0VtcHR5T2JqZWN0IiwiZ2xvYmFsRXZhbCIsIm1ha2VBcnJheSIsInJlc3VsdHMiLCJpbkFycmF5Iiwic2Vjb25kIiwiaW52ZXJ0IiwibWF0Y2hlcyIsImNhbGxiYWNrRXhwZWN0IiwiYXJnIiwiZ3VpZCIsInNwbGl0IiwidG9Mb3dlckNhc2UiLCJTaXp6bGUiLCJFeHByIiwiZ2V0VGV4dCIsImlzWE1MIiwidG9rZW5pemUiLCJjb21waWxlIiwic2VsZWN0Iiwib3V0ZXJtb3N0Q29udGV4dCIsInNvcnRJbnB1dCIsImhhc0R1cGxpY2F0ZSIsInNldERvY3VtZW50IiwiZG9jRWxlbSIsImRvY3VtZW50SXNIVE1MIiwicmJ1Z2d5UVNBIiwicmJ1Z2d5TWF0Y2hlcyIsImNvbnRhaW5zIiwiRGF0ZSIsInByZWZlcnJlZERvYyIsImRpcnJ1bnMiLCJjbGFzc0NhY2hlIiwiY3JlYXRlQ2FjaGUiLCJ0b2tlbkNhY2hlIiwiY29tcGlsZXJDYWNoZSIsIm5vbm5hdGl2ZVNlbGVjdG9yQ2FjaGUiLCJzb3J0T3JkZXIiLCJhIiwiYiIsInBvcCIsInB1c2hOYXRpdmUiLCJib29sZWFucyIsIndoaXRlc3BhY2UiLCJpZGVudGlmaWVyIiwiYXR0cmlidXRlcyIsInBzZXVkb3MiLCJyd2hpdGVzcGFjZSIsIlJlZ0V4cCIsInJ0cmltIiwicmNvbW1hIiwicmNvbWJpbmF0b3JzIiwicmRlc2NlbmQiLCJycHNldWRvIiwicmlkZW50aWZpZXIiLCJtYXRjaEV4cHIiLCJyaHRtbCIsInJpbnB1dHMiLCJyaGVhZGVyIiwicm5hdGl2ZSIsInJxdWlja0V4cHIiLCJyc2libGluZyIsInJ1bmVzY2FwZSIsImZ1bmVzY2FwZSIsImVzY2FwZSIsIm5vbkhleCIsImhpZ2giLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJyY3NzZXNjYXBlIiwiZmNzc2VzY2FwZSIsImNoIiwiYXNDb2RlUG9pbnQiLCJjaGFyQ29kZUF0IiwidW5sb2FkSGFuZGxlciIsImluRGlzYWJsZWRGaWVsZHNldCIsImFkZENvbWJpbmF0b3IiLCJkaXNhYmxlZCIsIm5vZGVOYW1lIiwiZGlyIiwiY2hpbGROb2RlcyIsImUiLCJlbHMiLCJzZWVkIiwibSIsIm5pZCIsIm1hdGNoIiwiZ3JvdXBzIiwibmV3U2VsZWN0b3IiLCJuZXdDb250ZXh0Iiwib3duZXJEb2N1bWVudCIsImV4ZWMiLCJnZXRFbGVtZW50QnlJZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInFzYSIsInRlc3RDb250ZXh0Iiwic2NvcGUiLCJ0b1NlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsInFzYUVycm9yIiwicmVtb3ZlQXR0cmlidXRlIiwia2V5cyIsImNhY2hlIiwia2V5IiwiY2FjaGVMZW5ndGgiLCJzaGlmdCIsIm1hcmtGdW5jdGlvbiIsImFzc2VydCIsImVsIiwiYWRkSGFuZGxlIiwiYXR0cnMiLCJoYW5kbGVyIiwiYXR0ckhhbmRsZSIsInNpYmxpbmdDaGVjayIsImN1ciIsImRpZmYiLCJzb3VyY2VJbmRleCIsIm5leHRTaWJsaW5nIiwiY3JlYXRlSW5wdXRQc2V1ZG8iLCJjcmVhdGVCdXR0b25Qc2V1ZG8iLCJjcmVhdGVEaXNhYmxlZFBzZXVkbyIsImlzRGlzYWJsZWQiLCJjcmVhdGVQb3NpdGlvbmFsUHNldWRvIiwiYXJndW1lbnQiLCJtYXRjaEluZGV4ZXMiLCJuYW1lc3BhY2UiLCJuYW1lc3BhY2VVUkkiLCJkb2N1bWVudEVsZW1lbnQiLCJoYXNDb21wYXJlIiwic3ViV2luZG93IiwiZGVmYXVsdFZpZXciLCJ0b3AiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJjbGFzc05hbWUiLCJjcmVhdGVDb21tZW50IiwiZ2V0QnlJZCIsImdldEVsZW1lbnRzQnlOYW1lIiwiZmlsdGVyIiwiYXR0cklkIiwiZmluZCIsImdldEF0dHJpYnV0ZU5vZGUiLCJ0YWciLCJ0bXAiLCJpbnB1dCIsImlubmVySFRNTCIsIm1hdGNoZXNTZWxlY3RvciIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsIm1vek1hdGNoZXNTZWxlY3RvciIsIm9NYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsImRpc2Nvbm5lY3RlZE1hdGNoIiwiY29tcGFyZURvY3VtZW50UG9zaXRpb24iLCJhZG93biIsImJ1cCIsImNvbXBhcmUiLCJzb3J0RGV0YWNoZWQiLCJhdXAiLCJhcCIsImJwIiwidW5zaGlmdCIsImV4cHIiLCJlbGVtZW50cyIsImF0dHIiLCJzcGVjaWZpZWQiLCJzZWwiLCJ1bmlxdWVTb3J0IiwiZHVwbGljYXRlcyIsImRldGVjdER1cGxpY2F0ZXMiLCJzb3J0U3RhYmxlIiwidGV4dENvbnRlbnQiLCJmaXJzdENoaWxkIiwibm9kZVZhbHVlIiwic2VsZWN0b3JzIiwiY3JlYXRlUHNldWRvIiwicmVsYXRpdmUiLCJwcmVGaWx0ZXIiLCJleGNlc3MiLCJ1bnF1b3RlZCIsIm5vZGVOYW1lU2VsZWN0b3IiLCJwYXR0ZXJuIiwib3BlcmF0b3IiLCJjaGVjayIsInJlc3VsdCIsIndoYXQiLCJfYXJndW1lbnQiLCJzaW1wbGUiLCJmb3J3YXJkIiwib2ZUeXBlIiwiX2NvbnRleHQiLCJ4bWwiLCJ1bmlxdWVDYWNoZSIsIm91dGVyQ2FjaGUiLCJub2RlSW5kZXgiLCJzdGFydCIsInBhcmVudCIsInVzZUNhY2hlIiwibGFzdENoaWxkIiwidW5pcXVlSUQiLCJwc2V1ZG8iLCJhcmdzIiwic2V0RmlsdGVycyIsImlkeCIsIm1hdGNoZWQiLCJtYXRjaGVyIiwidW5tYXRjaGVkIiwibGFuZyIsImVsZW1MYW5nIiwiaGFzaCIsImxvY2F0aW9uIiwiYWN0aXZlRWxlbWVudCIsImhhc0ZvY3VzIiwiaHJlZiIsInRhYkluZGV4IiwiY2hlY2tlZCIsInNlbGVjdGVkIiwic2VsZWN0ZWRJbmRleCIsIl9tYXRjaEluZGV4ZXMiLCJyYWRpbyIsImNoZWNrYm94IiwiZmlsZSIsInBhc3N3b3JkIiwiaW1hZ2UiLCJzdWJtaXQiLCJyZXNldCIsInRva2VucyIsImNvbWJpbmF0b3IiLCJiYXNlIiwic2tpcCIsImNoZWNrTm9uRWxlbWVudHMiLCJkb25lTmFtZSIsIm9sZENhY2hlIiwibmV3Q2FjaGUiLCJlbGVtZW50TWF0Y2hlciIsIm1hdGNoZXJzIiwiY29uZGVuc2UiLCJuZXdVbm1hdGNoZWQiLCJtYXBwZWQiLCJzZXRNYXRjaGVyIiwicG9zdEZpbHRlciIsInBvc3RGaW5kZXIiLCJwb3N0U2VsZWN0b3IiLCJ0ZW1wIiwicHJlTWFwIiwicG9zdE1hcCIsInByZWV4aXN0aW5nIiwiY29udGV4dHMiLCJtdWx0aXBsZUNvbnRleHRzIiwibWF0Y2hlckluIiwibWF0Y2hlck91dCIsIm1hdGNoZXJGcm9tVG9rZW5zIiwiY2hlY2tDb250ZXh0IiwibGVhZGluZ1JlbGF0aXZlIiwiaW1wbGljaXRSZWxhdGl2ZSIsIm1hdGNoQ29udGV4dCIsIm1hdGNoQW55Q29udGV4dCIsImZpbHRlcnMiLCJwYXJzZU9ubHkiLCJzb0ZhciIsInByZUZpbHRlcnMiLCJjYWNoZWQiLCJzZXRNYXRjaGVycyIsImVsZW1lbnRNYXRjaGVycyIsImJ5U2V0IiwiYnlFbGVtZW50Iiwic3VwZXJNYXRjaGVyIiwib3V0ZXJtb3N0IiwibWF0Y2hlZENvdW50Iiwic2V0TWF0Y2hlZCIsImNvbnRleHRCYWNrdXAiLCJkaXJydW5zVW5pcXVlIiwibWF0Y2hlckZyb21Hcm91cE1hdGNoZXJzIiwidG9rZW4iLCJjb21waWxlZCIsIl9uYW1lIiwiZGVmYXVsdFZhbHVlIiwidW5pcXVlIiwiaXNYTUxEb2MiLCJlc2NhcGVTZWxlY3RvciIsInVudGlsIiwidHJ1bmNhdGUiLCJpcyIsInNpYmxpbmdzIiwicm5lZWRzQ29udGV4dCIsIm5lZWRzQ29udGV4dCIsInJzaW5nbGVUYWciLCJ3aW5ub3ciLCJxdWFsaWZpZXIiLCJub3QiLCJzZWxmIiwicm9vdGpRdWVyeSIsInJvb3QiLCJwYXJzZUhUTUwiLCJyZWFkeSIsInJwYXJlbnRzcHJldiIsImd1YXJhbnRlZWRVbmlxdWUiLCJjaGlsZHJlbiIsImNvbnRlbnRzIiwicHJldiIsInNpYmxpbmciLCJoYXMiLCJ0YXJnZXRzIiwibCIsImNsb3Nlc3QiLCJpbmRleCIsInByZXZBbGwiLCJhZGQiLCJhZGRCYWNrIiwicGFyZW50cyIsInBhcmVudHNVbnRpbCIsIm5leHRBbGwiLCJuZXh0VW50aWwiLCJwcmV2VW50aWwiLCJjb250ZW50RG9jdW1lbnQiLCJyZXZlcnNlIiwicm5vdGh0bWx3aGl0ZSIsIklkZW50aXR5IiwidiIsIlRocm93ZXIiLCJleCIsImFkb3B0VmFsdWUiLCJyZXNvbHZlIiwicmVqZWN0Iiwibm9WYWx1ZSIsIm1ldGhvZCIsInByb21pc2UiLCJmYWlsIiwidGhlbiIsIkNhbGxiYWNrcyIsIm9iamVjdCIsIl8iLCJmbGFnIiwiY3JlYXRlT3B0aW9ucyIsImZpcmluZyIsIm1lbW9yeSIsImZpcmVkIiwibG9ja2VkIiwicXVldWUiLCJmaXJpbmdJbmRleCIsImZpcmUiLCJvbmNlIiwic3RvcE9uRmFsc2UiLCJyZW1vdmUiLCJlbXB0eSIsImRpc2FibGUiLCJsb2NrIiwiZmlyZVdpdGgiLCJEZWZlcnJlZCIsImZ1bmMiLCJ0dXBsZXMiLCJzdGF0ZSIsImFsd2F5cyIsImRlZmVycmVkIiwicGlwZSIsImZucyIsIm5ld0RlZmVyIiwidHVwbGUiLCJyZXR1cm5lZCIsInByb2dyZXNzIiwibm90aWZ5Iiwib25GdWxmaWxsZWQiLCJvblJlamVjdGVkIiwib25Qcm9ncmVzcyIsIm1heERlcHRoIiwiZGVwdGgiLCJzcGVjaWFsIiwidGhhdCIsIm1pZ2h0VGhyb3ciLCJub3RpZnlXaXRoIiwicmVzb2x2ZVdpdGgiLCJwcm9jZXNzIiwiZXhjZXB0aW9uSG9vayIsInN0YWNrVHJhY2UiLCJyZWplY3RXaXRoIiwiZ2V0U3RhY2tIb29rIiwic2V0VGltZW91dCIsInN0YXRlU3RyaW5nIiwid2hlbiIsInNpbmdsZVZhbHVlIiwicmVtYWluaW5nIiwicmVzb2x2ZUNvbnRleHRzIiwicmVzb2x2ZVZhbHVlcyIsInByaW1hcnkiLCJ1cGRhdGVGdW5jIiwicmVycm9yTmFtZXMiLCJzdGFjayIsImNvbnNvbGUiLCJ3YXJuIiwibWVzc2FnZSIsInJlYWR5RXhjZXB0aW9uIiwicmVhZHlMaXN0IiwiY29tcGxldGVkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNhdGNoIiwicmVhZHlXYWl0Iiwid2FpdCIsInJlYWR5U3RhdGUiLCJkb1Njcm9sbCIsImFjY2VzcyIsImNoYWluYWJsZSIsImVtcHR5R2V0IiwicmF3IiwiYnVsayIsIl9rZXkiLCJybXNQcmVmaXgiLCJyZGFzaEFscGhhIiwiZmNhbWVsQ2FzZSIsIl9hbGwiLCJsZXR0ZXIiLCJ0b1VwcGVyQ2FzZSIsImNhbWVsQ2FzZSIsInN0cmluZyIsImFjY2VwdERhdGEiLCJvd25lciIsIkRhdGEiLCJ1aWQiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsInNldCIsInByb3AiLCJoYXNEYXRhIiwiZGF0YVByaXYiLCJkYXRhVXNlciIsInJicmFjZSIsInJtdWx0aURhc2giLCJkYXRhQXR0ciIsInBhcnNlIiwiZ2V0RGF0YSIsInJlbW92ZURhdGEiLCJfZGF0YSIsIl9yZW1vdmVEYXRhIiwiZGVxdWV1ZSIsInN0YXJ0TGVuZ3RoIiwiaG9va3MiLCJfcXVldWVIb29rcyIsInN0b3AiLCJzZXR0ZXIiLCJjbGVhclF1ZXVlIiwiY291bnQiLCJkZWZlciIsInBudW0iLCJyY3NzTnVtIiwiY3NzRXhwYW5kIiwiaXNBdHRhY2hlZCIsImNvbXBvc2VkIiwiZ2V0Um9vdE5vZGUiLCJpc0hpZGRlbldpdGhpblRyZWUiLCJzdHlsZSIsImRpc3BsYXkiLCJjc3MiLCJhZGp1c3RDU1MiLCJ2YWx1ZVBhcnRzIiwidHdlZW4iLCJhZGp1c3RlZCIsInNjYWxlIiwibWF4SXRlcmF0aW9ucyIsImN1cnJlbnRWYWx1ZSIsImluaXRpYWwiLCJ1bml0IiwiY3NzTnVtYmVyIiwiaW5pdGlhbEluVW5pdCIsImRlZmF1bHREaXNwbGF5TWFwIiwiZ2V0RGVmYXVsdERpc3BsYXkiLCJib2R5Iiwic2hvd0hpZGUiLCJzaG93IiwidmFsdWVzIiwiaGlkZSIsInRvZ2dsZSIsImRpdiIsInJjaGVja2FibGVUeXBlIiwicnRhZ05hbWUiLCJyc2NyaXB0VHlwZSIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJjaGVja0Nsb25lIiwiY2xvbmVOb2RlIiwibm9DbG9uZUNoZWNrZWQiLCJvcHRpb24iLCJ3cmFwTWFwIiwidGhlYWQiLCJjb2wiLCJ0ciIsInRkIiwiX2RlZmF1bHQiLCJnZXRBbGwiLCJzZXRHbG9iYWxFdmFsIiwicmVmRWxlbWVudHMiLCJ0Ym9keSIsInRmb290IiwiY29sZ3JvdXAiLCJjYXB0aW9uIiwidGgiLCJvcHRncm91cCIsImJ1aWxkRnJhZ21lbnQiLCJzY3JpcHRzIiwic2VsZWN0aW9uIiwiaWdub3JlZCIsIndyYXAiLCJhdHRhY2hlZCIsImZyYWdtZW50Iiwibm9kZXMiLCJodG1sUHJlZmlsdGVyIiwiY3JlYXRlVGV4dE5vZGUiLCJydHlwZW5hbWVzcGFjZSIsInJldHVyblRydWUiLCJyZXR1cm5GYWxzZSIsImV4cGVjdFN5bmMiLCJzYWZlQWN0aXZlRWxlbWVudCIsIm9uIiwidHlwZXMiLCJvbmUiLCJvcmlnRm4iLCJldmVudCIsIm9mZiIsImxldmVyYWdlTmF0aXZlIiwibm90QXN5bmMiLCJzYXZlZCIsImlzVHJpZ2dlciIsImRlbGVnYXRlVHlwZSIsInN0b3BQcm9wYWdhdGlvbiIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwidHJpZ2dlciIsIkV2ZW50IiwiaGFuZGxlT2JqSW4iLCJldmVudEhhbmRsZSIsImV2ZW50cyIsInQiLCJoYW5kbGVPYmoiLCJoYW5kbGVycyIsIm5hbWVzcGFjZXMiLCJvcmlnVHlwZSIsImVsZW1EYXRhIiwiY3JlYXRlIiwiaGFuZGxlIiwidHJpZ2dlcmVkIiwiZGlzcGF0Y2giLCJiaW5kVHlwZSIsImRlbGVnYXRlQ291bnQiLCJzZXR1cCIsIm1hcHBlZFR5cGVzIiwib3JpZ0NvdW50IiwidGVhcmRvd24iLCJyZW1vdmVFdmVudCIsIm5hdGl2ZUV2ZW50IiwiaGFuZGxlclF1ZXVlIiwiZml4IiwiZGVsZWdhdGVUYXJnZXQiLCJwcmVEaXNwYXRjaCIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwiY3VycmVudFRhcmdldCIsImlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkIiwicm5hbWVzcGFjZSIsInBvc3REaXNwYXRjaCIsIm1hdGNoZWRIYW5kbGVycyIsIm1hdGNoZWRTZWxlY3RvcnMiLCJidXR0b24iLCJhZGRQcm9wIiwiaG9vayIsImVudW1lcmFibGUiLCJvcmlnaW5hbEV2ZW50Iiwid3JpdGFibGUiLCJsb2FkIiwibm9CdWJibGUiLCJjbGljayIsImJlZm9yZXVubG9hZCIsInJldHVyblZhbHVlIiwicHJvcHMiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJkZWZhdWx0UHJldmVudGVkIiwicmVsYXRlZFRhcmdldCIsInRpbWVTdGFtcCIsIm5vdyIsImlzU2ltdWxhdGVkIiwiYWx0S2V5IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJjaGFuZ2VkVG91Y2hlcyIsImN0cmxLZXkiLCJkZXRhaWwiLCJldmVudFBoYXNlIiwibWV0YUtleSIsInBhZ2VYIiwicGFnZVkiLCJzaGlmdEtleSIsInZpZXciLCJjaGFyQ29kZSIsImtleUNvZGUiLCJidXR0b25zIiwiY2xpZW50WCIsImNsaWVudFkiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInBvaW50ZXJJZCIsInBvaW50ZXJUeXBlIiwic2NyZWVuWCIsInNjcmVlblkiLCJ0YXJnZXRUb3VjaGVzIiwidG9FbGVtZW50IiwidG91Y2hlcyIsIndoaWNoIiwiZm9jdXMiLCJibHVyIiwibW91c2VlbnRlciIsIm1vdXNlbGVhdmUiLCJwb2ludGVyZW50ZXIiLCJwb2ludGVybGVhdmUiLCJvcmlnIiwicmVsYXRlZCIsInJub0lubmVyaHRtbCIsInJjaGVja2VkIiwicmNsZWFuU2NyaXB0IiwibWFuaXB1bGF0aW9uVGFyZ2V0IiwiZGlzYWJsZVNjcmlwdCIsInJlc3RvcmVTY3JpcHQiLCJjbG9uZUNvcHlFdmVudCIsImRlc3QiLCJ1ZGF0YU9sZCIsInVkYXRhQ3VyIiwiZml4SW5wdXQiLCJkb21NYW5pcCIsImNvbGxlY3Rpb24iLCJoYXNTY3JpcHRzIiwiaU5vQ2xvbmUiLCJ2YWx1ZUlzRnVuY3Rpb24iLCJodG1sIiwiX2V2YWxVcmwiLCJrZWVwRGF0YSIsImNsZWFuRGF0YSIsImRhdGFBbmRFdmVudHMiLCJkZWVwRGF0YUFuZEV2ZW50cyIsInNyY0VsZW1lbnRzIiwiZGVzdEVsZW1lbnRzIiwiaW5QYWdlIiwiZGV0YWNoIiwiYXBwZW5kIiwicHJlcGVuZCIsImluc2VydEJlZm9yZSIsImJlZm9yZSIsImFmdGVyIiwicmVwbGFjZVdpdGgiLCJyZXBsYWNlQ2hpbGQiLCJhcHBlbmRUbyIsInByZXBlbmRUbyIsImluc2VydEFmdGVyIiwicmVwbGFjZUFsbCIsIm9yaWdpbmFsIiwiaW5zZXJ0Iiwicm51bW5vbnB4IiwiZ2V0U3R5bGVzIiwib3BlbmVyIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInN3YXAiLCJvbGQiLCJyYm94U3R5bGUiLCJjdXJDU1MiLCJjb21wdXRlZCIsIndpZHRoIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsImdldFByb3BlcnR5VmFsdWUiLCJwaXhlbEJveFN0eWxlcyIsImFkZEdldEhvb2tJZiIsImNvbmRpdGlvbkZuIiwiaG9va0ZuIiwiY29tcHV0ZVN0eWxlVGVzdHMiLCJjb250YWluZXIiLCJjc3NUZXh0IiwiZGl2U3R5bGUiLCJwaXhlbFBvc2l0aW9uVmFsIiwicmVsaWFibGVNYXJnaW5MZWZ0VmFsIiwicm91bmRQaXhlbE1lYXN1cmVzIiwibWFyZ2luTGVmdCIsInJpZ2h0IiwicGl4ZWxCb3hTdHlsZXNWYWwiLCJib3hTaXppbmdSZWxpYWJsZVZhbCIsInBvc2l0aW9uIiwic2Nyb2xsYm94U2l6ZVZhbCIsIm9mZnNldFdpZHRoIiwibWVhc3VyZSIsInJvdW5kIiwicGFyc2VGbG9hdCIsInJlbGlhYmxlVHJEaW1lbnNpb25zVmFsIiwiYmFja2dyb3VuZENsaXAiLCJjbGVhckNsb25lU3R5bGUiLCJib3hTaXppbmdSZWxpYWJsZSIsInBpeGVsUG9zaXRpb24iLCJyZWxpYWJsZU1hcmdpbkxlZnQiLCJzY3JvbGxib3hTaXplIiwicmVsaWFibGVUckRpbWVuc2lvbnMiLCJ0YWJsZSIsInRyQ2hpbGQiLCJ0clN0eWxlIiwiaGVpZ2h0IiwicGFyc2VJbnQiLCJib3JkZXJUb3BXaWR0aCIsImJvcmRlckJvdHRvbVdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiY3NzUHJlZml4ZXMiLCJlbXB0eVN0eWxlIiwidmVuZG9yUHJvcHMiLCJmaW5hbFByb3BOYW1lIiwiY3NzUHJvcHMiLCJjYXBOYW1lIiwidmVuZG9yUHJvcE5hbWUiLCJyZGlzcGxheXN3YXAiLCJyY3VzdG9tUHJvcCIsImNzc1Nob3ciLCJ2aXNpYmlsaXR5IiwiY3NzTm9ybWFsVHJhbnNmb3JtIiwibGV0dGVyU3BhY2luZyIsImZvbnRXZWlnaHQiLCJzZXRQb3NpdGl2ZU51bWJlciIsInN1YnRyYWN0IiwibWF4IiwiYm94TW9kZWxBZGp1c3RtZW50IiwiZGltZW5zaW9uIiwiYm94IiwiaXNCb3JkZXJCb3giLCJzdHlsZXMiLCJjb21wdXRlZFZhbCIsImV4dHJhIiwiZGVsdGEiLCJjZWlsIiwiZ2V0V2lkdGhPckhlaWdodCIsInZhbHVlSXNCb3JkZXJCb3giLCJvZmZzZXRQcm9wIiwiZ2V0Q2xpZW50UmVjdHMiLCJUd2VlbiIsImVhc2luZyIsImNzc0hvb2tzIiwib3BhY2l0eSIsIm9yaWdOYW1lIiwiaXNDdXN0b21Qcm9wIiwic2V0UHJvcGVydHkiLCJpc0Zpbml0ZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInNjcm9sbGJveFNpemVCdWdneSIsImxlZnQiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyIiwicHJlZml4Iiwic3VmZml4IiwiZXhwYW5kIiwiZXhwYW5kZWQiLCJwYXJ0cyIsInByb3BIb29rcyIsInJ1biIsInBlcmNlbnQiLCJlYXNlZCIsImR1cmF0aW9uIiwicG9zIiwic3RlcCIsImZ4Iiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImxpbmVhciIsInAiLCJzd2luZyIsImNvcyIsIlBJIiwiZnhOb3ciLCJpblByb2dyZXNzIiwicmZ4dHlwZXMiLCJycnVuIiwic2NoZWR1bGUiLCJoaWRkZW4iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpbnRlcnZhbCIsInRpY2siLCJjcmVhdGVGeE5vdyIsImdlbkZ4IiwiaW5jbHVkZVdpZHRoIiwiY3JlYXRlVHdlZW4iLCJhbmltYXRpb24iLCJBbmltYXRpb24iLCJ0d2VlbmVycyIsInByb3BlcnRpZXMiLCJzdG9wcGVkIiwicHJlZmlsdGVycyIsImN1cnJlbnRUaW1lIiwic3RhcnRUaW1lIiwidHdlZW5zIiwib3B0cyIsInNwZWNpYWxFYXNpbmciLCJvcmlnaW5hbFByb3BlcnRpZXMiLCJvcmlnaW5hbE9wdGlvbnMiLCJnb3RvRW5kIiwicHJvcEZpbHRlciIsImJpbmQiLCJjb21wbGV0ZSIsInRpbWVyIiwiYW5pbSIsInR3ZWVuZXIiLCJvbGRmaXJlIiwicHJvcFR3ZWVuIiwicmVzdG9yZURpc3BsYXkiLCJpc0JveCIsImRhdGFTaG93IiwidW5xdWV1ZWQiLCJvdmVyZmxvdyIsIm92ZXJmbG93WCIsIm92ZXJmbG93WSIsInByZWZpbHRlciIsInNwZWVkIiwib3B0Iiwic3BlZWRzIiwiZmFkZVRvIiwidG8iLCJhbmltYXRlIiwib3B0YWxsIiwiZG9BbmltYXRpb24iLCJmaW5pc2giLCJzdG9wUXVldWUiLCJ0aW1lcnMiLCJjc3NGbiIsInNsaWRlRG93biIsInNsaWRlVXAiLCJzbGlkZVRvZ2dsZSIsImZhZGVJbiIsImZhZGVPdXQiLCJmYWRlVG9nZ2xlIiwic2xvdyIsImZhc3QiLCJkZWxheSIsInRpbWUiLCJ0aW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiY2hlY2tPbiIsIm9wdFNlbGVjdGVkIiwicmFkaW9WYWx1ZSIsImJvb2xIb29rIiwicmVtb3ZlQXR0ciIsIm5UeXBlIiwiYXR0ckhvb2tzIiwiYm9vbCIsImF0dHJOYW1lcyIsImdldHRlciIsImxvd2VyY2FzZU5hbWUiLCJyZm9jdXNhYmxlIiwicmNsaWNrYWJsZSIsInN0cmlwQW5kQ29sbGFwc2UiLCJnZXRDbGFzcyIsImNsYXNzZXNUb0FycmF5IiwicmVtb3ZlUHJvcCIsInByb3BGaXgiLCJ0YWJpbmRleCIsImFkZENsYXNzIiwiY2xhc3NlcyIsImN1clZhbHVlIiwiY2xhenoiLCJmaW5hbFZhbHVlIiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsInN0YXRlVmFsIiwiaXNWYWxpZFZhbHVlIiwiY2xhc3NOYW1lcyIsImhhc0NsYXNzIiwicnJldHVybiIsInZhbEhvb2tzIiwib3B0aW9uU2V0IiwiZm9jdXNpbiIsInJmb2N1c01vcnBoIiwic3RvcFByb3BhZ2F0aW9uQ2FsbGJhY2siLCJvbmx5SGFuZGxlcnMiLCJidWJibGVUeXBlIiwib250eXBlIiwibGFzdEVsZW1lbnQiLCJldmVudFBhdGgiLCJwYXJlbnRXaW5kb3ciLCJzaW11bGF0ZSIsInRyaWdnZXJIYW5kbGVyIiwiYXR0YWNoZXMiLCJycXVlcnkiLCJwYXJzZVhNTCIsInBhcnNlckVycm9yRWxlbSIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsInJicmFja2V0IiwickNSTEYiLCJyc3VibWl0dGVyVHlwZXMiLCJyc3VibWl0dGFibGUiLCJidWlsZFBhcmFtcyIsInRyYWRpdGlvbmFsIiwicGFyYW0iLCJzIiwidmFsdWVPckZ1bmN0aW9uIiwic2VyaWFsaXplIiwic2VyaWFsaXplQXJyYXkiLCJyMjAiLCJyaGFzaCIsInJhbnRpQ2FjaGUiLCJyaGVhZGVycyIsInJub0NvbnRlbnQiLCJycHJvdG9jb2wiLCJ0cmFuc3BvcnRzIiwiYWxsVHlwZXMiLCJvcmlnaW5BbmNob3IiLCJhZGRUb1ByZWZpbHRlcnNPclRyYW5zcG9ydHMiLCJzdHJ1Y3R1cmUiLCJkYXRhVHlwZUV4cHJlc3Npb24iLCJkYXRhVHlwZSIsImRhdGFUeXBlcyIsImluc3BlY3RQcmVmaWx0ZXJzT3JUcmFuc3BvcnRzIiwianFYSFIiLCJpbnNwZWN0ZWQiLCJzZWVraW5nVHJhbnNwb3J0IiwiaW5zcGVjdCIsInByZWZpbHRlck9yRmFjdG9yeSIsImRhdGFUeXBlT3JUcmFuc3BvcnQiLCJhamF4RXh0ZW5kIiwiZmxhdE9wdGlvbnMiLCJhamF4U2V0dGluZ3MiLCJhY3RpdmUiLCJsYXN0TW9kaWZpZWQiLCJldGFnIiwidXJsIiwiaXNMb2NhbCIsInByb3RvY29sIiwicHJvY2Vzc0RhdGEiLCJhc3luYyIsImNvbnRlbnRUeXBlIiwiYWNjZXB0cyIsImpzb24iLCJyZXNwb25zZUZpZWxkcyIsImNvbnZlcnRlcnMiLCJhamF4U2V0dXAiLCJzZXR0aW5ncyIsImFqYXhQcmVmaWx0ZXIiLCJhamF4VHJhbnNwb3J0IiwiYWpheCIsInRyYW5zcG9ydCIsImNhY2hlVVJMIiwicmVzcG9uc2VIZWFkZXJzU3RyaW5nIiwicmVzcG9uc2VIZWFkZXJzIiwidGltZW91dFRpbWVyIiwidXJsQW5jaG9yIiwiZmlyZUdsb2JhbHMiLCJ1bmNhY2hlZCIsImNhbGxiYWNrQ29udGV4dCIsImdsb2JhbEV2ZW50Q29udGV4dCIsImNvbXBsZXRlRGVmZXJyZWQiLCJzdGF0dXNDb2RlIiwicmVxdWVzdEhlYWRlcnMiLCJyZXF1ZXN0SGVhZGVyc05hbWVzIiwic3RyQWJvcnQiLCJnZXRSZXNwb25zZUhlYWRlciIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInNldFJlcXVlc3RIZWFkZXIiLCJvdmVycmlkZU1pbWVUeXBlIiwibWltZVR5cGUiLCJzdGF0dXMiLCJhYm9ydCIsInN0YXR1c1RleHQiLCJmaW5hbFRleHQiLCJjcm9zc0RvbWFpbiIsImhvc3QiLCJoYXNDb250ZW50IiwiaWZNb2RpZmllZCIsImhlYWRlcnMiLCJiZWZvcmVTZW5kIiwic3VjY2VzcyIsInNlbmQiLCJuYXRpdmVTdGF0dXNUZXh0IiwicmVzcG9uc2VzIiwiaXNTdWNjZXNzIiwicmVzcG9uc2UiLCJtb2RpZmllZCIsImN0IiwiZmluYWxEYXRhVHlwZSIsImZpcnN0RGF0YVR5cGUiLCJhamF4SGFuZGxlUmVzcG9uc2VzIiwiY29udjIiLCJjdXJyZW50IiwiY29udiIsImRhdGFGaWx0ZXIiLCJ0aHJvd3MiLCJhamF4Q29udmVydCIsImdldEpTT04iLCJnZXRTY3JpcHQiLCJ3cmFwQWxsIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJ3cmFwSW5uZXIiLCJodG1sSXNGdW5jdGlvbiIsInVud3JhcCIsInZpc2libGUiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsInhoclN1Y2Nlc3NTdGF0dXMiLCIwIiwiMTIyMyIsInhoclN1cHBvcnRlZCIsImNvcnMiLCJlcnJvckNhbGxiYWNrIiwib3BlbiIsInVzZXJuYW1lIiwieGhyRmllbGRzIiwib25sb2FkIiwib25lcnJvciIsIm9uYWJvcnQiLCJvbnRpbWVvdXQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZXNwb25zZVR5cGUiLCJyZXNwb25zZVRleHQiLCJiaW5hcnkiLCJzY3JpcHRBdHRycyIsImNoYXJzZXQiLCJzY3JpcHRDaGFyc2V0IiwiZXZ0Iiwib2xkQ2FsbGJhY2tzIiwicmpzb25wIiwianNvbnAiLCJqc29ucENhbGxiYWNrIiwib3JpZ2luYWxTZXR0aW5ncyIsImNhbGxiYWNrTmFtZSIsIm92ZXJ3cml0dGVuIiwicmVzcG9uc2VDb250YWluZXIiLCJqc29uUHJvcCIsImNyZWF0ZUhUTUxEb2N1bWVudCIsImltcGxlbWVudGF0aW9uIiwia2VlcFNjcmlwdHMiLCJwYXJzZWQiLCJwYXJhbXMiLCJhbmltYXRlZCIsIm9mZnNldCIsInNldE9mZnNldCIsImN1clBvc2l0aW9uIiwiY3VyTGVmdCIsImN1ckNTU1RvcCIsImN1clRvcCIsImN1ck9mZnNldCIsImN1ckNTU0xlZnQiLCJjdXJFbGVtIiwidXNpbmciLCJyZWN0Iiwid2luIiwicGFnZVlPZmZzZXQiLCJwYWdlWE9mZnNldCIsIm9mZnNldFBhcmVudCIsInBhcmVudE9mZnNldCIsInNjcm9sbFRvIiwiSGVpZ2h0IiwiV2lkdGgiLCJkZWZhdWx0RXh0cmEiLCJmdW5jTmFtZSIsInVuYmluZCIsImRlbGVnYXRlIiwidW5kZWxlZ2F0ZSIsImhvdmVyIiwiZm5PdmVyIiwiZm5PdXQiLCJwcm94eSIsImhvbGRSZWFkeSIsImhvbGQiLCJwYXJzZUpTT04iLCJpc051bWVyaWMiLCJpc05hTiIsInRyaW0iLCJfalF1ZXJ5IiwiXyQiLCIkIiwibm9Db25mbGljdCIsIm1lbW8iLCJnZXRUYXJnZXQiLCJzdHlsZVRhcmdldCIsInF1ZXJ5U2VsZWN0b3IiLCJIVE1MSUZyYW1lRWxlbWVudCIsInN0eWxlc0luRG9tIiwiZ2V0SW5kZXhCeUlkZW50aWZpZXIiLCJtb2R1bGVzVG9Eb20iLCJpZENvdW50TWFwIiwiaWRlbnRpZmllcnMiLCJtZWRpYSIsInNvdXJjZU1hcCIsInJlZmVyZW5jZXMiLCJ1cGRhdGVyIiwiYWRkU3R5bGUiLCJpbnNlcnRTdHlsZUVsZW1lbnQiLCJmb3JFYWNoIiwidGV4dFN0b3JlIiwicmVwbGFjZVRleHQiLCJyZXBsYWNlbWVudCIsIkJvb2xlYW4iLCJhcHBseVRvU2luZ2xldG9uVGFnIiwic3R5bGVTaGVldCIsImNzc05vZGUiLCJhcHBseVRvVGFnIiwic2luZ2xldG9uIiwic2luZ2xldG9uQ291bnRlciIsInVwZGF0ZSIsInN0eWxlSW5kZXgiLCJyZW1vdmVTdHlsZUVsZW1lbnQiLCJuZXdPYmoiLCJhbGwiLCJhdG9iIiwibGFzdElkZW50aWZpZXJzIiwibmV3TGlzdCIsIm5ld0xhc3RJZGVudGlmaWVycyIsIl9pbmRleCJdLCJtYXBwaW5ncyI6Ijt3RkFRQUEsRUFBT0MsUUFBVSxTQUFVQyxHQUN6QixJQUFJQyxFQUFPLEdBdURYLE9BckRBQSxFQUFLQyxTQUFXLFdBQ2QsT0FBT0MsS0FBS0MsS0FBSSxTQUFVQyxHQUN4QixJQUFJQyxFQUFVTixFQUF1QkssR0FFckMsT0FBSUEsRUFBSyxHQUNBLFVBQVVFLE9BQU9GLEVBQUssR0FBSSxNQUFNRSxPQUFPRCxFQUFTLEtBR2xEQSxLQUNORSxLQUFLLEtBS1ZQLEVBQUtRLEVBQUksU0FBVUMsRUFBU0MsRUFBWUMsR0FDZixpQkFBWkYsSUFFVEEsRUFBVSxDQUFDLENBQUMsS0FBTUEs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Z0IsRUFBTzVvQyxFQUFNK29DLFFBRWIvdUIsS0FLTnZmLEVBQU9DLFFBQVUsU0FBVUUsRUFBTTJJLElBQy9CQSxFQUFVQSxHQUFXLElBR1JtbEMsV0FBMEMsa0JBQXRCbmxDLEVBQVFtbEMsWUFDdkNubEMsRUFBUW1sQyxnQkFyT1ksSUFBVHpCLElBTVRBLEVBQU9vQixRQUFRcHBDLFFBQVVILFVBQVlBLFNBQVNrcUMsTUFBUS9wQyxPQUFPZ3FDLE9BR3hEaEMsSUFnT1QsSUFBSWlDLEVBQWtCMUIsRUFEdEI1c0MsRUFBT0EsR0FBUSxHQUMwQjJJLEdBQ3pDLE9BQU8sU0FBZ0I0bEMsR0FHckIsR0FGQUEsRUFBVUEsR0FBVyxHQUUyQixtQkFBNUM5ckMsT0FBT0MsVUFBVXpDLFNBQVMrQixLQUFLdXNDLEdBQW5DLENBSUEsSUFBSyxJQUFJL3RDLEVBQUksRUFBR0EsRUFBSTh0QyxFQUFnQnp0QyxPQUFRTCxJQUFLLENBQy9DLElBQ0lzYyxFQUFRNnZCLEVBREsyQixFQUFnQjl0QyxJQUVqQ2tzQyxFQUFZNXZCLEdBQU9td0IsYUFLckIsSUFGQSxJQUFJdUIsRUFBcUI1QixFQUFhMkIsRUFBUzVsQyxHQUV0QzVILEVBQUssRUFBR0EsRUFBS3V0QyxFQUFnQnp0QyxPQUFRRSxJQUFNLENBQ2xELElBRUkwdEMsRUFBUzlCLEVBRksyQixFQUFnQnZ0QyxJQUlLLElBQW5DMnJDLEVBQVkrQixHQUFReEIsYUFDdEJQLEVBQVkrQixHQUFRdkIsVUFFcEJSLEVBQVlqa0MsT0FBT2dtQyxFQUFRLElBSS9CSCxFQUFrQkUiLCJmaWxlIjoiOTE5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKiFcbiAqIGpRdWVyeSBKYXZhU2NyaXB0IExpYnJhcnkgdjMuNi4wXG4gKiBodHRwczovL2pxdWVyeS5jb20vXG4gKlxuICogSW5jbHVkZXMgU2l6emxlLmpzXG4gKiBodHRwczovL3NpenpsZWpzLmNvbS9cbiAqXG4gKiBDb3B5cmlnaHQgT3BlbkpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2pxdWVyeS5vcmcvbGljZW5zZVxuICpcbiAqIERhdGU6IDIwMjEtMDMtMDJUMTc6MDhaXG4gKi9cbiggZnVuY3Rpb24oIGdsb2JhbCwgZmFjdG9yeSApIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblxuXHRpZiAoIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSBcIm9iamVjdFwiICkge1xuXG5cdFx0Ly8gRm9yIENvbW1vbkpTIGFuZCBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB3aGVyZSBhIHByb3BlciBgd2luZG93YFxuXHRcdC8vIGlzIHByZXNlbnQsIGV4ZWN1dGUgdGhlIGZhY3RvcnkgYW5kIGdldCBqUXVlcnkuXG5cdFx0Ly8gRm9yIGVudmlyb25tZW50cyB0aGF0IGRvIG5vdCBoYXZlIGEgYHdpbmRvd2Agd2l0aCBhIGBkb2N1bWVudGBcblx0XHQvLyAoc3VjaCBhcyBOb2RlLmpzKSwgZXhwb3NlIGEgZmFjdG9yeSBhcyBtb2R1bGUuZXhwb3J0cy5cblx0XHQvLyBUaGlzIGFjY2VudHVhdGVzIHRoZSBuZWVkIGZvciB0aGUgY3JlYXRpb24gb2YgYSByZWFsIGB3aW5kb3dgLlxuXHRcdC8vIGUuZy4gdmFyIGpRdWVyeSA9IHJlcXVpcmUoXCJqcXVlcnlcIikod2luZG93KTtcblx0XHQvLyBTZWUgdGlja2V0ICMxNDU0OSBmb3IgbW9yZSBpbmZvLlxuXHRcdG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsLmRvY3VtZW50ID9cblx0XHRcdGZhY3RvcnkoIGdsb2JhbCwgdHJ1ZSApIDpcblx0XHRcdGZ1bmN0aW9uKCB3ICkge1xuXHRcdFx0XHRpZiAoICF3LmRvY3VtZW50ICkge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gZmFjdG9yeSggdyApO1xuXHRcdFx0fTtcblx0fSBlbHNlIHtcblx0XHRmYWN0b3J5KCBnbG9iYWwgKTtcblx0fVxuXG4vLyBQYXNzIHRoaXMgaWYgd2luZG93IGlzIG5vdCBkZWZpbmVkIHlldFxufSApKCB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdGhpcywgZnVuY3Rpb24oIHdpbmRvdywgbm9HbG9iYWwgKSB7XG5cbi8vIEVkZ2UgPD0gMTIgLSAxMyssIEZpcmVmb3ggPD0xOCAtIDQ1KywgSUUgMTAgLSAxMSwgU2FmYXJpIDUuMSAtIDkrLCBpT1MgNiAtIDkuMVxuLy8gdGhyb3cgZXhjZXB0aW9ucyB3aGVuIG5vbi1zdHJpY3QgY29kZSAoZS5nLiwgQVNQLk5FVCA0LjUpIGFjY2Vzc2VzIHN0cmljdCBtb2RlXG4vLyBhcmd1bWVudHMuY2FsbGVlLmNhbGxlciAodHJhYy0xMzMzNSkuIEJ1dCBhcyBvZiBqUXVlcnkgMy4wICgyMDE2KSwgc3RyaWN0IG1vZGUgc2hvdWxkIGJlIGNvbW1vblxuLy8gZW5vdWdoIHRoYXQgYWxsIHN1Y2ggYXR0ZW1wdHMgYXJlIGd1YXJkZWQgaW4gYSB0cnkgYmxvY2suXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGFyciA9IFtdO1xuXG52YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cbnZhciBzbGljZSA9IGFyci5zbGljZTtcblxudmFyIGZsYXQgPSBhcnIuZmxhdCA/IGZ1bmN0aW9uKCBhcnJheSApIHtcblx0cmV0dXJuIGFyci5mbGF0LmNhbGwoIGFycmF5ICk7XG59IDogZnVuY3Rpb24oIGFycmF5ICkge1xuXHRyZXR1cm4gYXJyLmNvbmNhdC5hcHBseSggW10sIGFycmF5ICk7XG59O1xuXG5cbnZhciBwdXNoID0gYXJyLnB1c2g7XG5cbnZhciBpbmRleE9mID0gYXJyLmluZGV4T2Y7XG5cbnZhciBjbGFzczJ0eXBlID0ge307XG5cbnZhciB0b1N0cmluZyA9IGNsYXNzMnR5cGUudG9TdHJpbmc7XG5cbnZhciBoYXNPd24gPSBjbGFzczJ0eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgZm5Ub1N0cmluZyA9IGhhc093bi50b1N0cmluZztcblxudmFyIE9iamVjdEZ1bmN0aW9uU3RyaW5nID0gZm5Ub1N0cmluZy5jYWxsKCBPYmplY3QgKTtcblxudmFyIHN1cHBvcnQgPSB7fTtcblxudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiBpc0Z1bmN0aW9uKCBvYmogKSB7XG5cblx0XHQvLyBTdXBwb3J0OiBDaHJvbWUgPD01NywgRmlyZWZveCA8PTUyXG5cdFx0Ly8gSW4gc29tZSBicm93c2VycywgdHlwZW9mIHJldHVybnMgXCJmdW5jdGlvblwiIGZvciBIVE1MIDxvYmplY3Q+IGVsZW1lbnRzXG5cdFx0Ly8gKGkuZS4sIGB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJvYmplY3RcIiApID09PSBcImZ1bmN0aW9uXCJgKS5cblx0XHQvLyBXZSBkb24ndCB3YW50IHRvIGNsYXNzaWZ5ICphbnkqIERPTSBub2RlIGFzIGEgZnVuY3Rpb24uXG5cdFx0Ly8gU3VwcG9ydDogUXRXZWIgPD0zLjguNSwgV2ViS2l0IDw9NTM0LjM0LCB3a2h0bWx0b3BkZiB0b29sIDw9MC4xMi41XG5cdFx0Ly8gUGx1cyBmb3Igb2xkIFdlYktpdCwgdHlwZW9mIHJldHVybnMgXCJmdW5jdGlvblwiIGZvciBIVE1MIGNvbGxlY3Rpb25zXG5cdFx0Ly8gKGUuZy4sIGB0eXBlb2YgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkaXZcIikgPT09IFwiZnVuY3Rpb25cImApLiAoZ2gtNDc1Nilcblx0XHRyZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBvYmoubm9kZVR5cGUgIT09IFwibnVtYmVyXCIgJiZcblx0XHRcdHR5cGVvZiBvYmouaXRlbSAhPT0gXCJmdW5jdGlvblwiO1xuXHR9O1xuXG5cbnZhciBpc1dpbmRvdyA9IGZ1bmN0aW9uIGlzV2luZG93KCBvYmogKSB7XG5cdFx0cmV0dXJuIG9iaiAhPSBudWxsICYmIG9iaiA9PT0gb2JqLndpbmRvdztcblx0fTtcblxuXG52YXIgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQ7XG5cblxuXG5cdHZhciBwcmVzZXJ2ZWRTY3JpcHRBdHRyaWJ1dGVzID0ge1xuXHRcdHR5cGU6IHRydWUsXG5cdFx0c3JjOiB0cnVlLFxuXHRcdG5vbmNlOiB0cnVlLFxuXHRcdG5vTW9kdWxlOiB0cnVlXG5cdH07XG5cblx0ZnVuY3Rpb24gRE9NRXZhbCggY29kZSwgbm9kZSwgZG9jICkge1xuXHRcdGRvYyA9IGRvYyB8fCBkb2N1bWVudDtcblxuXHRcdHZhciBpLCB2YWwsXG5cdFx0XHRzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudCggXCJzY3JpcHRcIiApO1xuXG5cdFx0c2NyaXB0LnRleHQgPSBjb2RlO1xuXHRcdGlmICggbm9kZSApIHtcblx0XHRcdGZvciAoIGkgaW4gcHJlc2VydmVkU2NyaXB0QXR0cmlidXRlcyApIHtcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBGaXJlZm94IDY0KywgRWRnZSAxOCtcblx0XHRcdFx0Ly8gU29tZSBicm93c2VycyBkb24ndCBzdXBwb3J0IHRoZSBcIm5vbmNlXCIgcHJvcGVydHkgb24gc2NyaXB0cy5cblx0XHRcdFx0Ly8gT24gdGhlIG90aGVyIGhhbmQsIGp1c3QgdXNpbmcgYGdldEF0dHJpYnV0ZWAgaXMgbm90IGVub3VnaCBhc1xuXHRcdFx0XHQvLyB0aGUgYG5vbmNlYCBhdHRyaWJ1dGUgaXMgcmVzZXQgdG8gYW4gZW1wdHkgc3RyaW5nIHdoZW5ldmVyIGl0XG5cdFx0XHRcdC8vIGJlY29tZXMgYnJvd3NpbmctY29udGV4dCBjb25uZWN0ZWQuXG5cdFx0XHRcdC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vd2hhdHdnL2h0bWwvaXNzdWVzLzIzNjlcblx0XHRcdFx0Ly8gU2VlIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI25vbmNlLWF0dHJpYnV0ZXNcblx0XHRcdFx0Ly8gVGhlIGBub2RlLmdldEF0dHJpYnV0ZWAgY2hlY2sgd2FzIGFkZGVkIGZvciB0aGUgc2FrZSBvZlxuXHRcdFx0XHQvLyBgalF1ZXJ5Lmdsb2JhbEV2YWxgIHNvIHRoYXQgaXQgY2FuIGZha2UgYSBub25jZS1jb250YWluaW5nIG5vZGVcblx0XHRcdFx0Ly8gdmlhIGFuIG9iamVjdC5cblx0XHRcdFx0dmFsID0gbm9kZVsgaSBdIHx8IG5vZGUuZ2V0QXR0cmlidXRlICYmIG5vZGUuZ2V0QXR0cmlidXRlKCBpICk7XG5cdFx0XHRcdGlmICggdmFsICkge1xuXHRcdFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoIGksIHZhbCApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGRvYy5oZWFkLmFwcGVuZENoaWxkKCBzY3JpcHQgKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBzY3JpcHQgKTtcblx0fVxuXG5cbmZ1bmN0aW9uIHRvVHlwZSggb2JqICkge1xuXHRpZiAoIG9iaiA9PSBudWxsICkge1xuXHRcdHJldHVybiBvYmogKyBcIlwiO1xuXHR9XG5cblx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTIuMyBvbmx5IChmdW5jdGlvbmlzaCBSZWdFeHApXG5cdHJldHVybiB0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIiA/XG5cdFx0Y2xhc3MydHlwZVsgdG9TdHJpbmcuY2FsbCggb2JqICkgXSB8fCBcIm9iamVjdFwiIDpcblx0XHR0eXBlb2Ygb2JqO1xufVxuLyogZ2xvYmFsIFN5bWJvbCAqL1xuLy8gRGVmaW5pbmcgdGhpcyBnbG9iYWwgaW4gLmVzbGludHJjLmpzb24gd291bGQgY3JlYXRlIGEgZGFuZ2VyIG9mIHVzaW5nIHRoZSBnbG9iYWxcbi8vIHVuZ3VhcmRlZCBpbiBhbm90aGVyIHBsYWNlLCBpdCBzZWVtcyBzYWZlciB0byBkZWZpbmUgZ2xvYmFsIG9ubHkgZm9yIHRoaXMgbW9kdWxlXG5cblxuXG52YXJcblx0dmVyc2lvbiA9IFwiMy42LjBcIixcblxuXHQvLyBEZWZpbmUgYSBsb2NhbCBjb3B5IG9mIGpRdWVyeVxuXHRqUXVlcnkgPSBmdW5jdGlvbiggc2VsZWN0b3IsIGNvbnRleHQgKSB7XG5cblx0XHQvLyBUaGUgalF1ZXJ5IG9iamVjdCBpcyBhY3R1YWxseSBqdXN0IHRoZSBpbml0IGNvbnN0cnVjdG9yICdlbmhhbmNlZCdcblx0XHQvLyBOZWVkIGluaXQgaWYgalF1ZXJ5IGlzIGNhbGxlZCAoanVzdCBhbGxvdyBlcnJvciB0byBiZSB0aHJvd24gaWYgbm90IGluY2x1ZGVkKVxuXHRcdHJldHVybiBuZXcgalF1ZXJ5LmZuLmluaXQoIHNlbGVjdG9yLCBjb250ZXh0ICk7XG5cdH07XG5cbmpRdWVyeS5mbiA9IGpRdWVyeS5wcm90b3R5cGUgPSB7XG5cblx0Ly8gVGhlIGN1cnJlbnQgdmVyc2lvbiBvZiBqUXVlcnkgYmVpbmcgdXNlZFxuXHRqcXVlcnk6IHZlcnNpb24sXG5cblx0Y29uc3RydWN0b3I6IGpRdWVyeSxcblxuXHQvLyBUaGUgZGVmYXVsdCBsZW5ndGggb2YgYSBqUXVlcnkgb2JqZWN0IGlzIDBcblx0bGVuZ3RoOiAwLFxuXG5cdHRvQXJyYXk6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBzbGljZS5jYWxsKCB0aGlzICk7XG5cdH0sXG5cblx0Ly8gR2V0IHRoZSBOdGggZWxlbWVudCBpbiB0aGUgbWF0Y2hlZCBlbGVtZW50IHNldCBPUlxuXHQvLyBHZXQgdGhlIHdob2xlIG1hdGNoZWQgZWxlbWVudCBzZXQgYXMgYSBjbGVhbiBhcnJheVxuXHRnZXQ6IGZ1bmN0aW9uKCBudW0gKSB7XG5cblx0XHQvLyBSZXR1cm4gYWxsIHRoZSBlbGVtZW50cyBpbiBhIGNsZWFuIGFycmF5XG5cdFx0aWYgKCBudW0gPT0gbnVsbCApIHtcblx0XHRcdHJldHVybiBzbGljZS5jYWxsKCB0aGlzICk7XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIGp1c3QgdGhlIG9uZSBlbGVtZW50IGZyb20gdGhlIHNldFxuXHRcdHJldHVybiBudW0gPCAwID8gdGhpc1sgbnVtICsgdGhpcy5sZW5ndGggXSA6IHRoaXNbIG51bSBdO1xuXHR9LFxuXG5cdC8vIFRha2UgYW4gYXJyYXkgb2YgZWxlbWVudHMgYW5kIHB1c2ggaXQgb250byB0aGUgc3RhY2tcblx0Ly8gKHJldHVybmluZyB0aGUgbmV3IG1hdGNoZWQgZWxlbWVudCBzZXQpXG5cdHB1c2hTdGFjazogZnVuY3Rpb24oIGVsZW1zICkge1xuXG5cdFx0Ly8gQnVpbGQgYSBuZXcgalF1ZXJ5IG1hdGNoZWQgZWxlbWVudCBzZXRcblx0XHR2YXIgcmV0ID0galF1ZXJ5Lm1lcmdlKCB0aGlzLmNvbnN0cnVjdG9yKCksIGVsZW1zICk7XG5cblx0XHQvLyBBZGQgdGhlIG9sZCBvYmplY3Qgb250byB0aGUgc3RhY2sgKGFzIGEgcmVmZXJlbmNlKVxuXHRcdHJldC5wcmV2T2JqZWN0ID0gdGhpcztcblxuXHRcdC8vIFJldHVybiB0aGUgbmV3bHktZm9ybWVkIGVsZW1lbnQgc2V0XG5cdFx0cmV0dXJuIHJldDtcblx0fSxcblxuXHQvLyBFeGVjdXRlIGEgY2FsbGJhY2sgZm9yIGV2ZXJ5IGVsZW1lbnQgaW4gdGhlIG1hdGNoZWQgc2V0LlxuXHRlYWNoOiBmdW5jdGlvbiggY2FsbGJhY2sgKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5lYWNoKCB0aGlzLCBjYWxsYmFjayApO1xuXHR9LFxuXG5cdG1hcDogZnVuY3Rpb24oIGNhbGxiYWNrICkge1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggalF1ZXJ5Lm1hcCggdGhpcywgZnVuY3Rpb24oIGVsZW0sIGkgKSB7XG5cdFx0XHRyZXR1cm4gY2FsbGJhY2suY2FsbCggZWxlbSwgaSwgZWxlbSApO1xuXHRcdH0gKSApO1xuXHR9LFxuXG5cdHNsaWNlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIHNsaWNlLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKSApO1xuXHR9LFxuXG5cdGZpcnN0OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5lcSggMCApO1xuXHR9LFxuXG5cdGxhc3Q6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmVxKCAtMSApO1xuXHR9LFxuXG5cdGV2ZW46IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggalF1ZXJ5LmdyZXAoIHRoaXMsIGZ1bmN0aW9uKCBfZWxlbSwgaSApIHtcblx0XHRcdHJldHVybiAoIGkgKyAxICkgJSAyO1xuXHRcdH0gKSApO1xuXHR9LFxuXG5cdG9kZDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCBqUXVlcnkuZ3JlcCggdGhpcywgZnVuY3Rpb24oIF9lbGVtLCBpICkge1xuXHRcdFx0cmV0dXJuIGkgJSAyO1xuXHRcdH0gKSApO1xuXHR9LFxuXG5cdGVxOiBmdW5jdGlvbiggaSApIHtcblx0XHR2YXIgbGVuID0gdGhpcy5sZW5ndGgsXG5cdFx0XHRqID0gK2kgKyAoIGkgPCAwID8gbGVuIDogMCApO1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggaiA+PSAwICYmIGogPCBsZW4gPyBbIHRoaXNbIGogXSBdIDogW10gKTtcblx0fSxcblxuXHRlbmQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnByZXZPYmplY3QgfHwgdGhpcy5jb25zdHJ1Y3RvcigpO1xuXHR9LFxuXG5cdC8vIEZvciBpbnRlcm5hbCB1c2Ugb25seS5cblx0Ly8gQmVoYXZlcyBsaWtlIGFuIEFycmF5J3MgbWV0aG9kLCBub3QgbGlrZSBhIGpRdWVyeSBtZXRob2QuXG5cdHB1c2g6IHB1c2gsXG5cdHNvcnQ6IGFyci5zb3J0LFxuXHRzcGxpY2U6IGFyci5zcGxpY2Vcbn07XG5cbmpRdWVyeS5leHRlbmQgPSBqUXVlcnkuZm4uZXh0ZW5kID0gZnVuY3Rpb24oKSB7XG5cdHZhciBvcHRpb25zLCBuYW1lLCBzcmMsIGNvcHksIGNvcHlJc0FycmF5LCBjbG9uZSxcblx0XHR0YXJnZXQgPSBhcmd1bWVudHNbIDAgXSB8fCB7fSxcblx0XHRpID0gMSxcblx0XHRsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoLFxuXHRcdGRlZXAgPSBmYWxzZTtcblxuXHQvLyBIYW5kbGUgYSBkZWVwIGNvcHkgc2l0dWF0aW9uXG5cdGlmICggdHlwZW9mIHRhcmdldCA9PT0gXCJib29sZWFuXCIgKSB7XG5cdFx0ZGVlcCA9IHRhcmdldDtcblxuXHRcdC8vIFNraXAgdGhlIGJvb2xlYW4gYW5kIHRoZSB0YXJnZXRcblx0XHR0YXJnZXQgPSBhcmd1bWVudHNbIGkgXSB8fCB7fTtcblx0XHRpKys7XG5cdH1cblxuXHQvLyBIYW5kbGUgY2FzZSB3aGVuIHRhcmdldCBpcyBhIHN0cmluZyBvciBzb21ldGhpbmcgKHBvc3NpYmxlIGluIGRlZXAgY29weSlcblx0aWYgKCB0eXBlb2YgdGFyZ2V0ICE9PSBcIm9iamVjdFwiICYmICFpc0Z1bmN0aW9uKCB0YXJnZXQgKSApIHtcblx0XHR0YXJnZXQgPSB7fTtcblx0fVxuXG5cdC8vIEV4dGVuZCBqUXVlcnkgaXRzZWxmIGlmIG9ubHkgb25lIGFyZ3VtZW50IGlzIHBhc3NlZFxuXHRpZiAoIGkgPT09IGxlbmd0aCApIHtcblx0XHR0YXJnZXQgPSB0aGlzO1xuXHRcdGktLTtcblx0fVxuXG5cdGZvciAoIDsgaSA8IGxlbmd0aDsgaSsrICkge1xuXG5cdFx0Ly8gT25seSBkZWFsIHdpdGggbm9uLW51bGwvdW5kZWZpbmVkIHZhbHVlc1xuXHRcdGlmICggKCBvcHRpb25zID0gYXJndW1lbnRzWyBpIF0gKSAhPSBudWxsICkge1xuXG5cdFx0XHQvLyBFeHRlbmQgdGhlIGJhc2Ugb2JqZWN0XG5cdFx0XHRmb3IgKCBuYW1lIGluIG9wdGlvbnMgKSB7XG5cdFx0XHRcdGNvcHkgPSBvcHRpb25zWyBuYW1lIF07XG5cblx0XHRcdFx0Ly8gUHJldmVudCBPYmplY3QucHJvdG90eXBlIHBvbGx1dGlvblxuXHRcdFx0XHQvLyBQcmV2ZW50IG5ldmVyLWVuZGluZyBsb29wXG5cdFx0XHRcdGlmICggbmFtZSA9PT0gXCJfX3Byb3RvX19cIiB8fCB0YXJnZXQgPT09IGNvcHkgKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBSZWN1cnNlIGlmIHdlJ3JlIG1lcmdpbmcgcGxhaW4gb2JqZWN0cyBvciBhcnJheXNcblx0XHRcdFx0aWYgKCBkZWVwICYmIGNvcHkgJiYgKCBqUXVlcnkuaXNQbGFpbk9iamVjdCggY29weSApIHx8XG5cdFx0XHRcdFx0KCBjb3B5SXNBcnJheSA9IEFycmF5LmlzQXJyYXkoIGNvcHkgKSApICkgKSB7XG5cdFx0XHRcdFx0c3JjID0gdGFyZ2V0WyBuYW1lIF07XG5cblx0XHRcdFx0XHQvLyBFbnN1cmUgcHJvcGVyIHR5cGUgZm9yIHRoZSBzb3VyY2UgdmFsdWVcblx0XHRcdFx0XHRpZiAoIGNvcHlJc0FycmF5ICYmICFBcnJheS5pc0FycmF5KCBzcmMgKSApIHtcblx0XHRcdFx0XHRcdGNsb25lID0gW107XG5cdFx0XHRcdFx0fSBlbHNlIGlmICggIWNvcHlJc0FycmF5ICYmICFqUXVlcnkuaXNQbGFpbk9iamVjdCggc3JjICkgKSB7XG5cdFx0XHRcdFx0XHRjbG9uZSA9IHt9O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjbG9uZSA9IHNyYztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29weUlzQXJyYXkgPSBmYWxzZTtcblxuXHRcdFx0XHRcdC8vIE5ldmVyIG1vdmUgb3JpZ2luYWwgb2JqZWN0cywgY2xvbmUgdGhlbVxuXHRcdFx0XHRcdHRhcmdldFsgbmFtZSBdID0galF1ZXJ5LmV4dGVuZCggZGVlcCwgY2xvbmUsIGNvcHkgKTtcblxuXHRcdFx0XHQvLyBEb24ndCBicmluZyBpbiB1bmRlZmluZWQgdmFsdWVzXG5cdFx0XHRcdH0gZWxzZSBpZiAoIGNvcHkgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHR0YXJnZXRbIG5hbWUgXSA9IGNvcHk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIG1vZGlmaWVkIG9iamVjdFxuXHRyZXR1cm4gdGFyZ2V0O1xufTtcblxualF1ZXJ5LmV4dGVuZCgge1xuXG5cdC8vIFVuaXF1ZSBmb3IgZWFjaCBjb3B5IG9mIGpRdWVyeSBvbiB0aGUgcGFnZVxuXHRleHBhbmRvOiBcImpRdWVyeVwiICsgKCB2ZXJzaW9uICsgTWF0aC5yYW5kb20oKSApLnJlcGxhY2UoIC9cXEQvZywgXCJcIiApLFxuXG5cdC8vIEFzc3VtZSBqUXVlcnkgaXMgcmVhZHkgd2l0aG91dCB0aGUgcmVhZHkgbW9kdWxlXG5cdGlzUmVhZHk6IHRydWUsXG5cblx0ZXJyb3I6IGZ1bmN0aW9uKCBtc2cgKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBtc2cgKTtcblx0fSxcblxuXHRub29wOiBmdW5jdGlvbigpIHt9LFxuXG5cdGlzUGxhaW5PYmplY3Q6IGZ1bmN0aW9uKCBvYmogKSB7XG5cdFx0dmFyIHByb3RvLCBDdG9yO1xuXG5cdFx0Ly8gRGV0ZWN0IG9idmlvdXMgbmVnYXRpdmVzXG5cdFx0Ly8gVXNlIHRvU3RyaW5nIGluc3RlYWQgb2YgalF1ZXJ5LnR5cGUgdG8gY2F0Y2ggaG9zdCBvYmplY3RzXG5cdFx0aWYgKCAhb2JqIHx8IHRvU3RyaW5nLmNhbGwoIG9iaiApICE9PSBcIltvYmplY3QgT2JqZWN0XVwiICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHByb3RvID0gZ2V0UHJvdG8oIG9iaiApO1xuXG5cdFx0Ly8gT2JqZWN0cyB3aXRoIG5vIHByb3RvdHlwZSAoZS5nLiwgYE9iamVjdC5jcmVhdGUoIG51bGwgKWApIGFyZSBwbGFpblxuXHRcdGlmICggIXByb3RvICkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gT2JqZWN0cyB3aXRoIHByb3RvdHlwZSBhcmUgcGxhaW4gaWZmIHRoZXkgd2VyZSBjb25zdHJ1Y3RlZCBieSBhIGdsb2JhbCBPYmplY3QgZnVuY3Rpb25cblx0XHRDdG9yID0gaGFzT3duLmNhbGwoIHByb3RvLCBcImNvbnN0cnVjdG9yXCIgKSAmJiBwcm90by5jb25zdHJ1Y3Rvcjtcblx0XHRyZXR1cm4gdHlwZW9mIEN0b3IgPT09IFwiZnVuY3Rpb25cIiAmJiBmblRvU3RyaW5nLmNhbGwoIEN0b3IgKSA9PT0gT2JqZWN0RnVuY3Rpb25TdHJpbmc7XG5cdH0sXG5cblx0aXNFbXB0eU9iamVjdDogZnVuY3Rpb24oIG9iaiApIHtcblx0XHR2YXIgbmFtZTtcblxuXHRcdGZvciAoIG5hbWUgaW4gb2JqICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHQvLyBFdmFsdWF0ZXMgYSBzY3JpcHQgaW4gYSBwcm92aWRlZCBjb250ZXh0OyBmYWxscyBiYWNrIHRvIHRoZSBnbG9iYWwgb25lXG5cdC8vIGlmIG5vdCBzcGVjaWZpZWQuXG5cdGdsb2JhbEV2YWw6IGZ1bmN0aW9uKCBjb2RlLCBvcHRpb25zLCBkb2MgKSB7XG5cdFx0RE9NRXZhbCggY29kZSwgeyBub25jZTogb3B0aW9ucyAmJiBvcHRpb25zLm5vbmNlIH0sIGRvYyApO1xuXHR9LFxuXG5cdGVhY2g6IGZ1bmN0aW9uKCBvYmosIGNhbGxiYWNrICkge1xuXHRcdHZhciBsZW5ndGgsIGkgPSAwO1xuXG5cdFx0aWYgKCBpc0FycmF5TGlrZSggb2JqICkgKSB7XG5cdFx0XHRsZW5ndGggPSBvYmoubGVuZ3RoO1xuXHRcdFx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRcdGlmICggY2FsbGJhY2suY2FsbCggb2JqWyBpIF0sIGksIG9ialsgaSBdICkgPT09IGZhbHNlICkge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAoIGkgaW4gb2JqICkge1xuXHRcdFx0XHRpZiAoIGNhbGxiYWNrLmNhbGwoIG9ialsgaSBdLCBpLCBvYmpbIGkgXSApID09PSBmYWxzZSApIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBvYmo7XG5cdH0sXG5cblx0Ly8gcmVzdWx0cyBpcyBmb3IgaW50ZXJuYWwgdXNhZ2Ugb25seVxuXHRtYWtlQXJyYXk6IGZ1bmN0aW9uKCBhcnIsIHJlc3VsdHMgKSB7XG5cdFx0dmFyIHJldCA9IHJlc3VsdHMgfHwgW107XG5cblx0XHRpZiAoIGFyciAhPSBudWxsICkge1xuXHRcdFx0aWYgKCBpc0FycmF5TGlrZSggT2JqZWN0KCBhcnIgKSApICkge1xuXHRcdFx0XHRqUXVlcnkubWVyZ2UoIHJldCxcblx0XHRcdFx0XHR0eXBlb2YgYXJyID09PSBcInN0cmluZ1wiID9cblx0XHRcdFx0XHRcdFsgYXJyIF0gOiBhcnJcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHB1c2guY2FsbCggcmV0LCBhcnIgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmV0O1xuXHR9LFxuXG5cdGluQXJyYXk6IGZ1bmN0aW9uKCBlbGVtLCBhcnIsIGkgKSB7XG5cdFx0cmV0dXJuIGFyciA9PSBudWxsID8gLTEgOiBpbmRleE9mLmNhbGwoIGFyciwgZWxlbSwgaSApO1xuXHR9LFxuXG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seSwgUGhhbnRvbUpTIDEgb25seVxuXHQvLyBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG5cdG1lcmdlOiBmdW5jdGlvbiggZmlyc3QsIHNlY29uZCApIHtcblx0XHR2YXIgbGVuID0gK3NlY29uZC5sZW5ndGgsXG5cdFx0XHRqID0gMCxcblx0XHRcdGkgPSBmaXJzdC5sZW5ndGg7XG5cblx0XHRmb3IgKCA7IGogPCBsZW47IGorKyApIHtcblx0XHRcdGZpcnN0WyBpKysgXSA9IHNlY29uZFsgaiBdO1xuXHRcdH1cblxuXHRcdGZpcnN0Lmxlbmd0aCA9IGk7XG5cblx0XHRyZXR1cm4gZmlyc3Q7XG5cdH0sXG5cblx0Z3JlcDogZnVuY3Rpb24oIGVsZW1zLCBjYWxsYmFjaywgaW52ZXJ0ICkge1xuXHRcdHZhciBjYWxsYmFja0ludmVyc2UsXG5cdFx0XHRtYXRjaGVzID0gW10sXG5cdFx0XHRpID0gMCxcblx0XHRcdGxlbmd0aCA9IGVsZW1zLmxlbmd0aCxcblx0XHRcdGNhbGxiYWNrRXhwZWN0ID0gIWludmVydDtcblxuXHRcdC8vIEdvIHRocm91Z2ggdGhlIGFycmF5LCBvbmx5IHNhdmluZyB0aGUgaXRlbXNcblx0XHQvLyB0aGF0IHBhc3MgdGhlIHZhbGlkYXRvciBmdW5jdGlvblxuXHRcdGZvciAoIDsgaSA8IGxlbmd0aDsgaSsrICkge1xuXHRcdFx0Y2FsbGJhY2tJbnZlcnNlID0gIWNhbGxiYWNrKCBlbGVtc1sgaSBdLCBpICk7XG5cdFx0XHRpZiAoIGNhbGxiYWNrSW52ZXJzZSAhPT0gY2FsbGJhY2tFeHBlY3QgKSB7XG5cdFx0XHRcdG1hdGNoZXMucHVzaCggZWxlbXNbIGkgXSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBtYXRjaGVzO1xuXHR9LFxuXG5cdC8vIGFyZyBpcyBmb3IgaW50ZXJuYWwgdXNhZ2Ugb25seVxuXHRtYXA6IGZ1bmN0aW9uKCBlbGVtcywgY2FsbGJhY2ssIGFyZyApIHtcblx0XHR2YXIgbGVuZ3RoLCB2YWx1ZSxcblx0XHRcdGkgPSAwLFxuXHRcdFx0cmV0ID0gW107XG5cblx0XHQvLyBHbyB0aHJvdWdoIHRoZSBhcnJheSwgdHJhbnNsYXRpbmcgZWFjaCBvZiB0aGUgaXRlbXMgdG8gdGhlaXIgbmV3IHZhbHVlc1xuXHRcdGlmICggaXNBcnJheUxpa2UoIGVsZW1zICkgKSB7XG5cdFx0XHRsZW5ndGggPSBlbGVtcy5sZW5ndGg7XG5cdFx0XHRmb3IgKCA7IGkgPCBsZW5ndGg7IGkrKyApIHtcblx0XHRcdFx0dmFsdWUgPSBjYWxsYmFjayggZWxlbXNbIGkgXSwgaSwgYXJnICk7XG5cblx0XHRcdFx0aWYgKCB2YWx1ZSAhPSBudWxsICkge1xuXHRcdFx0XHRcdHJldC5wdXNoKCB2YWx1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHQvLyBHbyB0aHJvdWdoIGV2ZXJ5IGtleSBvbiB0aGUgb2JqZWN0LFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKCBpIGluIGVsZW1zICkge1xuXHRcdFx0XHR2YWx1ZSA9IGNhbGxiYWNrKCBlbGVtc1sgaSBdLCBpLCBhcmcgKTtcblxuXHRcdFx0XHRpZiAoIHZhbHVlICE9IG51bGwgKSB7XG5cdFx0XHRcdFx0cmV0LnB1c2goIHZhbHVlICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBGbGF0dGVuIGFueSBuZXN0ZWQgYXJyYXlzXG5cdFx0cmV0dXJuIGZsYXQoIHJldCApO1xuXHR9LFxuXG5cdC8vIEEgZ2xvYmFsIEdVSUQgY291bnRlciBmb3Igb2JqZWN0c1xuXHRndWlkOiAxLFxuXG5cdC8vIGpRdWVyeS5zdXBwb3J0IGlzIG5vdCB1c2VkIGluIENvcmUgYnV0IG90aGVyIHByb2plY3RzIGF0dGFjaCB0aGVpclxuXHQvLyBwcm9wZXJ0aWVzIHRvIGl0IHNvIGl0IG5lZWRzIHRvIGV4aXN0LlxuXHRzdXBwb3J0OiBzdXBwb3J0XG59ICk7XG5cbmlmICggdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICkge1xuXHRqUXVlcnkuZm5bIFN5bWJvbC5pdGVyYXRvciBdID0gYXJyWyBTeW1ib2wuaXRlcmF0b3IgXTtcbn1cblxuLy8gUG9wdWxhdGUgdGhlIGNsYXNzMnR5cGUgbWFwXG5qUXVlcnkuZWFjaCggXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yIFN5bWJvbFwiLnNwbGl0KCBcIiBcIiApLFxuXHRmdW5jdGlvbiggX2ksIG5hbWUgKSB7XG5cdFx0Y2xhc3MydHlwZVsgXCJbb2JqZWN0IFwiICsgbmFtZSArIFwiXVwiIF0gPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cdH0gKTtcblxuZnVuY3Rpb24gaXNBcnJheUxpa2UoIG9iaiApIHtcblxuXHQvLyBTdXBwb3J0OiByZWFsIGlPUyA4LjIgb25seSAobm90IHJlcHJvZHVjaWJsZSBpbiBzaW11bGF0b3IpXG5cdC8vIGBpbmAgY2hlY2sgdXNlZCB0byBwcmV2ZW50IEpJVCBlcnJvciAoZ2gtMjE0NSlcblx0Ly8gaGFzT3duIGlzbid0IHVzZWQgaGVyZSBkdWUgdG8gZmFsc2UgbmVnYXRpdmVzXG5cdC8vIHJlZ2FyZGluZyBOb2RlbGlzdCBsZW5ndGggaW4gSUVcblx0dmFyIGxlbmd0aCA9ICEhb2JqICYmIFwibGVuZ3RoXCIgaW4gb2JqICYmIG9iai5sZW5ndGgsXG5cdFx0dHlwZSA9IHRvVHlwZSggb2JqICk7XG5cblx0aWYgKCBpc0Z1bmN0aW9uKCBvYmogKSB8fCBpc1dpbmRvdyggb2JqICkgKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIHR5cGUgPT09IFwiYXJyYXlcIiB8fCBsZW5ndGggPT09IDAgfHxcblx0XHR0eXBlb2YgbGVuZ3RoID09PSBcIm51bWJlclwiICYmIGxlbmd0aCA+IDAgJiYgKCBsZW5ndGggLSAxICkgaW4gb2JqO1xufVxudmFyIFNpenpsZSA9XG4vKiFcbiAqIFNpenpsZSBDU1MgU2VsZWN0b3IgRW5naW5lIHYyLjMuNlxuICogaHR0cHM6Ly9zaXp6bGVqcy5jb20vXG4gKlxuICogQ29weXJpZ2h0IEpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2pzLmZvdW5kYXRpb24vXG4gKlxuICogRGF0ZTogMjAyMS0wMi0xNlxuICovXG4oIGZ1bmN0aW9uKCB3aW5kb3cgKSB7XG52YXIgaSxcblx0c3VwcG9ydCxcblx0RXhwcixcblx0Z2V0VGV4dCxcblx0aXNYTUwsXG5cdHRva2VuaXplLFxuXHRjb21waWxlLFxuXHRzZWxlY3QsXG5cdG91dGVybW9zdENvbnRleHQsXG5cdHNvcnRJbnB1dCxcblx0aGFzRHVwbGljYXRlLFxuXG5cdC8vIExvY2FsIGRvY3VtZW50IHZhcnNcblx0c2V0RG9jdW1lbnQsXG5cdGRvY3VtZW50LFxuXHRkb2NFbGVtLFxuXHRkb2N1bWVudElzSFRNTCxcblx0cmJ1Z2d5UVNBLFxuXHRyYnVnZ3lNYXRjaGVzLFxuXHRtYXRjaGVzLFxuXHRjb250YWlucyxcblxuXHQvLyBJbnN0YW5jZS1zcGVjaWZpYyBkYXRhXG5cdGV4cGFuZG8gPSBcInNpenpsZVwiICsgMSAqIG5ldyBEYXRlKCksXG5cdHByZWZlcnJlZERvYyA9IHdpbmRvdy5kb2N1bWVudCxcblx0ZGlycnVucyA9IDAsXG5cdGRvbmUgPSAwLFxuXHRjbGFzc0NhY2hlID0gY3JlYXRlQ2FjaGUoKSxcblx0dG9rZW5DYWNoZSA9IGNyZWF0ZUNhY2hlKCksXG5cdGNvbXBpbGVyQ2FjaGUgPSBjcmVhdGVDYWNoZSgpLFxuXHRub25uYXRpdmVTZWxlY3RvckNhY2hlID0gY3JlYXRlQ2FjaGUoKSxcblx0c29ydE9yZGVyID0gZnVuY3Rpb24oIGEsIGIgKSB7XG5cdFx0aWYgKCBhID09PSBiICkge1xuXHRcdFx0aGFzRHVwbGljYXRlID0gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIDA7XG5cdH0sXG5cblx0Ly8gSW5zdGFuY2UgbWV0aG9kc1xuXHRoYXNPd24gPSAoIHt9ICkuaGFzT3duUHJvcGVydHksXG5cdGFyciA9IFtdLFxuXHRwb3AgPSBhcnIucG9wLFxuXHRwdXNoTmF0aXZlID0gYXJyLnB1c2gsXG5cdHB1c2ggPSBhcnIucHVzaCxcblx0c2xpY2UgPSBhcnIuc2xpY2UsXG5cblx0Ly8gVXNlIGEgc3RyaXBwZWQtZG93biBpbmRleE9mIGFzIGl0J3MgZmFzdGVyIHRoYW4gbmF0aXZlXG5cdC8vIGh0dHBzOi8vanNwZXJmLmNvbS90aG9yLWluZGV4b2YtdnMtZm9yLzVcblx0aW5kZXhPZiA9IGZ1bmN0aW9uKCBsaXN0LCBlbGVtICkge1xuXHRcdHZhciBpID0gMCxcblx0XHRcdGxlbiA9IGxpc3QubGVuZ3RoO1xuXHRcdGZvciAoIDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0aWYgKCBsaXN0WyBpIF0gPT09IGVsZW0gKSB7XG5cdFx0XHRcdHJldHVybiBpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gLTE7XG5cdH0sXG5cblx0Ym9vbGVhbnMgPSBcImNoZWNrZWR8c2VsZWN0ZWR8YXN5bmN8YXV0b2ZvY3VzfGF1dG9wbGF5fGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxcIiArXG5cdFx0XCJpc21hcHxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkXCIsXG5cblx0Ly8gUmVndWxhciBleHByZXNzaW9uc1xuXG5cdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtc2VsZWN0b3JzLyN3aGl0ZXNwYWNlXG5cdHdoaXRlc3BhY2UgPSBcIltcXFxceDIwXFxcXHRcXFxcclxcXFxuXFxcXGZdXCIsXG5cblx0Ly8gaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zeW50YXgtMy8jaWRlbnQtdG9rZW4tZGlhZ3JhbVxuXHRpZGVudGlmaWVyID0gXCIoPzpcXFxcXFxcXFtcXFxcZGEtZkEtRl17MSw2fVwiICsgd2hpdGVzcGFjZSArXG5cdFx0XCI/fFxcXFxcXFxcW15cXFxcclxcXFxuXFxcXGZdfFtcXFxcdy1dfFteXFwwLVxcXFx4N2ZdKStcIixcblxuXHQvLyBBdHRyaWJ1dGUgc2VsZWN0b3JzOiBodHRwOi8vd3d3LnczLm9yZy9UUi9zZWxlY3RvcnMvI2F0dHJpYnV0ZS1zZWxlY3RvcnNcblx0YXR0cmlidXRlcyA9IFwiXFxcXFtcIiArIHdoaXRlc3BhY2UgKyBcIiooXCIgKyBpZGVudGlmaWVyICsgXCIpKD86XCIgKyB3aGl0ZXNwYWNlICtcblxuXHRcdC8vIE9wZXJhdG9yIChjYXB0dXJlIDIpXG5cdFx0XCIqKFsqXiR8IX5dPz0pXCIgKyB3aGl0ZXNwYWNlICtcblxuXHRcdC8vIFwiQXR0cmlidXRlIHZhbHVlcyBtdXN0IGJlIENTUyBpZGVudGlmaWVycyBbY2FwdHVyZSA1XVxuXHRcdC8vIG9yIHN0cmluZ3MgW2NhcHR1cmUgMyBvciBjYXB0dXJlIDRdXCJcblx0XHRcIiooPzonKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCJ8KFwiICsgaWRlbnRpZmllciArIFwiKSl8KVwiICtcblx0XHR3aGl0ZXNwYWNlICsgXCIqXFxcXF1cIixcblxuXHRwc2V1ZG9zID0gXCI6KFwiICsgaWRlbnRpZmllciArIFwiKSg/OlxcXFwoKFwiICtcblxuXHRcdC8vIFRvIHJlZHVjZSB0aGUgbnVtYmVyIG9mIHNlbGVjdG9ycyBuZWVkaW5nIHRva2VuaXplIGluIHRoZSBwcmVGaWx0ZXIsIHByZWZlciBhcmd1bWVudHM6XG5cdFx0Ly8gMS4gcXVvdGVkIChjYXB0dXJlIDM7IGNhcHR1cmUgNCBvciBjYXB0dXJlIDUpXG5cdFx0XCIoJygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwiKXxcIiArXG5cblx0XHQvLyAyLiBzaW1wbGUgKGNhcHR1cmUgNilcblx0XHRcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpW1xcXFxdXXxcIiArIGF0dHJpYnV0ZXMgKyBcIikqKXxcIiArXG5cblx0XHQvLyAzLiBhbnl0aGluZyBlbHNlIChjYXB0dXJlIDIpXG5cdFx0XCIuKlwiICtcblx0XHRcIilcXFxcKXwpXCIsXG5cblx0Ly8gTGVhZGluZyBhbmQgbm9uLWVzY2FwZWQgdHJhaWxpbmcgd2hpdGVzcGFjZSwgY2FwdHVyaW5nIHNvbWUgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVycyBwcmVjZWRpbmcgdGhlIGxhdHRlclxuXHRyd2hpdGVzcGFjZSA9IG5ldyBSZWdFeHAoIHdoaXRlc3BhY2UgKyBcIitcIiwgXCJnXCIgKSxcblx0cnRyaW0gPSBuZXcgUmVnRXhwKCBcIl5cIiArIHdoaXRlc3BhY2UgKyBcIit8KCg/Ol58W15cXFxcXFxcXF0pKD86XFxcXFxcXFwuKSopXCIgK1xuXHRcdHdoaXRlc3BhY2UgKyBcIiskXCIsIFwiZ1wiICksXG5cblx0cmNvbW1hID0gbmV3IFJlZ0V4cCggXCJeXCIgKyB3aGl0ZXNwYWNlICsgXCIqLFwiICsgd2hpdGVzcGFjZSArIFwiKlwiICksXG5cdHJjb21iaW5hdG9ycyA9IG5ldyBSZWdFeHAoIFwiXlwiICsgd2hpdGVzcGFjZSArIFwiKihbPit+XXxcIiArIHdoaXRlc3BhY2UgKyBcIilcIiArIHdoaXRlc3BhY2UgK1xuXHRcdFwiKlwiICksXG5cdHJkZXNjZW5kID0gbmV3IFJlZ0V4cCggd2hpdGVzcGFjZSArIFwifD5cIiApLFxuXG5cdHJwc2V1ZG8gPSBuZXcgUmVnRXhwKCBwc2V1ZG9zICksXG5cdHJpZGVudGlmaWVyID0gbmV3IFJlZ0V4cCggXCJeXCIgKyBpZGVudGlmaWVyICsgXCIkXCIgKSxcblxuXHRtYXRjaEV4cHIgPSB7XG5cdFx0XCJJRFwiOiBuZXcgUmVnRXhwKCBcIl4jKFwiICsgaWRlbnRpZmllciArIFwiKVwiICksXG5cdFx0XCJDTEFTU1wiOiBuZXcgUmVnRXhwKCBcIl5cXFxcLihcIiArIGlkZW50aWZpZXIgKyBcIilcIiApLFxuXHRcdFwiVEFHXCI6IG5ldyBSZWdFeHAoIFwiXihcIiArIGlkZW50aWZpZXIgKyBcInxbKl0pXCIgKSxcblx0XHRcIkFUVFJcIjogbmV3IFJlZ0V4cCggXCJeXCIgKyBhdHRyaWJ1dGVzICksXG5cdFx0XCJQU0VVRE9cIjogbmV3IFJlZ0V4cCggXCJeXCIgKyBwc2V1ZG9zICksXG5cdFx0XCJDSElMRFwiOiBuZXcgUmVnRXhwKCBcIl46KG9ubHl8Zmlyc3R8bGFzdHxudGh8bnRoLWxhc3QpLShjaGlsZHxvZi10eXBlKSg/OlxcXFwoXCIgK1xuXHRcdFx0d2hpdGVzcGFjZSArIFwiKihldmVufG9kZHwoKFsrLV18KShcXFxcZCopbnwpXCIgKyB3aGl0ZXNwYWNlICsgXCIqKD86KFsrLV18KVwiICtcblx0XHRcdHdoaXRlc3BhY2UgKyBcIiooXFxcXGQrKXwpKVwiICsgd2hpdGVzcGFjZSArIFwiKlxcXFwpfClcIiwgXCJpXCIgKSxcblx0XHRcImJvb2xcIjogbmV3IFJlZ0V4cCggXCJeKD86XCIgKyBib29sZWFucyArIFwiKSRcIiwgXCJpXCIgKSxcblxuXHRcdC8vIEZvciB1c2UgaW4gbGlicmFyaWVzIGltcGxlbWVudGluZyAuaXMoKVxuXHRcdC8vIFdlIHVzZSB0aGlzIGZvciBQT1MgbWF0Y2hpbmcgaW4gYHNlbGVjdGBcblx0XHRcIm5lZWRzQ29udGV4dFwiOiBuZXcgUmVnRXhwKCBcIl5cIiArIHdoaXRlc3BhY2UgK1xuXHRcdFx0XCIqWz4rfl18OihldmVufG9kZHxlcXxndHxsdHxudGh8Zmlyc3R8bGFzdCkoPzpcXFxcKFwiICsgd2hpdGVzcGFjZSArXG5cdFx0XHRcIiooKD86LVxcXFxkKT9cXFxcZCopXCIgKyB3aGl0ZXNwYWNlICsgXCIqXFxcXCl8KSg/PVteLV18JClcIiwgXCJpXCIgKVxuXHR9LFxuXG5cdHJodG1sID0gL0hUTUwkL2ksXG5cdHJpbnB1dHMgPSAvXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLFxuXHRyaGVhZGVyID0gL15oXFxkJC9pLFxuXG5cdHJuYXRpdmUgPSAvXltee10rXFx7XFxzKlxcW25hdGl2ZSBcXHcvLFxuXG5cdC8vIEVhc2lseS1wYXJzZWFibGUvcmV0cmlldmFibGUgSUQgb3IgVEFHIG9yIENMQVNTIHNlbGVjdG9yc1xuXHRycXVpY2tFeHByID0gL14oPzojKFtcXHctXSspfChcXHcrKXxcXC4oW1xcdy1dKykpJC8sXG5cblx0cnNpYmxpbmcgPSAvWyt+XS8sXG5cblx0Ly8gQ1NTIGVzY2FwZXNcblx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvQ1NTMjEvc3luZGF0YS5odG1sI2VzY2FwZWQtY2hhcmFjdGVyc1xuXHRydW5lc2NhcGUgPSBuZXcgUmVnRXhwKCBcIlxcXFxcXFxcW1xcXFxkYS1mQS1GXXsxLDZ9XCIgKyB3aGl0ZXNwYWNlICsgXCI/fFxcXFxcXFxcKFteXFxcXHJcXFxcblxcXFxmXSlcIiwgXCJnXCIgKSxcblx0ZnVuZXNjYXBlID0gZnVuY3Rpb24oIGVzY2FwZSwgbm9uSGV4ICkge1xuXHRcdHZhciBoaWdoID0gXCIweFwiICsgZXNjYXBlLnNsaWNlKCAxICkgLSAweDEwMDAwO1xuXG5cdFx0cmV0dXJuIG5vbkhleCA/XG5cblx0XHRcdC8vIFN0cmlwIHRoZSBiYWNrc2xhc2ggcHJlZml4IGZyb20gYSBub24taGV4IGVzY2FwZSBzZXF1ZW5jZVxuXHRcdFx0bm9uSGV4IDpcblxuXHRcdFx0Ly8gUmVwbGFjZSBhIGhleGFkZWNpbWFsIGVzY2FwZSBzZXF1ZW5jZSB3aXRoIHRoZSBlbmNvZGVkIFVuaWNvZGUgY29kZSBwb2ludFxuXHRcdFx0Ly8gU3VwcG9ydDogSUUgPD0xMStcblx0XHRcdC8vIEZvciB2YWx1ZXMgb3V0c2lkZSB0aGUgQmFzaWMgTXVsdGlsaW5ndWFsIFBsYW5lIChCTVApLCBtYW51YWxseSBjb25zdHJ1Y3QgYVxuXHRcdFx0Ly8gc3Vycm9nYXRlIHBhaXJcblx0XHRcdGhpZ2ggPCAwID9cblx0XHRcdFx0U3RyaW5nLmZyb21DaGFyQ29kZSggaGlnaCArIDB4MTAwMDAgKSA6XG5cdFx0XHRcdFN0cmluZy5mcm9tQ2hhckNvZGUoIGhpZ2ggPj4gMTAgfCAweEQ4MDAsIGhpZ2ggJiAweDNGRiB8IDB4REMwMCApO1xuXHR9LFxuXG5cdC8vIENTUyBzdHJpbmcvaWRlbnRpZmllciBzZXJpYWxpemF0aW9uXG5cdC8vIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3NvbS8jY29tbW9uLXNlcmlhbGl6aW5nLWlkaW9tc1xuXHRyY3NzZXNjYXBlID0gLyhbXFwwLVxceDFmXFx4N2ZdfF4tP1xcZCl8Xi0kfFteXFwwLVxceDFmXFx4N2YtXFx1RkZGRlxcdy1dL2csXG5cdGZjc3Nlc2NhcGUgPSBmdW5jdGlvbiggY2gsIGFzQ29kZVBvaW50ICkge1xuXHRcdGlmICggYXNDb2RlUG9pbnQgKSB7XG5cblx0XHRcdC8vIFUrMDAwMCBOVUxMIGJlY29tZXMgVStGRkZEIFJFUExBQ0VNRU5UIENIQVJBQ1RFUlxuXHRcdFx0aWYgKCBjaCA9PT0gXCJcXDBcIiApIHtcblx0XHRcdFx0cmV0dXJuIFwiXFx1RkZGRFwiO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDb250cm9sIGNoYXJhY3RlcnMgYW5kIChkZXBlbmRlbnQgdXBvbiBwb3NpdGlvbikgbnVtYmVycyBnZXQgZXNjYXBlZCBhcyBjb2RlIHBvaW50c1xuXHRcdFx0cmV0dXJuIGNoLnNsaWNlKCAwLCAtMSApICsgXCJcXFxcXCIgK1xuXHRcdFx0XHRjaC5jaGFyQ29kZUF0KCBjaC5sZW5ndGggLSAxICkudG9TdHJpbmcoIDE2ICkgKyBcIiBcIjtcblx0XHR9XG5cblx0XHQvLyBPdGhlciBwb3RlbnRpYWxseS1zcGVjaWFsIEFTQ0lJIGNoYXJhY3RlcnMgZ2V0IGJhY2tzbGFzaC1lc2NhcGVkXG5cdFx0cmV0dXJuIFwiXFxcXFwiICsgY2g7XG5cdH0sXG5cblx0Ly8gVXNlZCBmb3IgaWZyYW1lc1xuXHQvLyBTZWUgc2V0RG9jdW1lbnQoKVxuXHQvLyBSZW1vdmluZyB0aGUgZnVuY3Rpb24gd3JhcHBlciBjYXVzZXMgYSBcIlBlcm1pc3Npb24gRGVuaWVkXCJcblx0Ly8gZXJyb3IgaW4gSUVcblx0dW5sb2FkSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuXHRcdHNldERvY3VtZW50KCk7XG5cdH0sXG5cblx0aW5EaXNhYmxlZEZpZWxkc2V0ID0gYWRkQ29tYmluYXRvcihcblx0XHRmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiBlbGVtLmRpc2FibGVkID09PSB0cnVlICYmIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJmaWVsZHNldFwiO1xuXHRcdH0sXG5cdFx0eyBkaXI6IFwicGFyZW50Tm9kZVwiLCBuZXh0OiBcImxlZ2VuZFwiIH1cblx0KTtcblxuLy8gT3B0aW1pemUgZm9yIHB1c2guYXBwbHkoIF8sIE5vZGVMaXN0IClcbnRyeSB7XG5cdHB1c2guYXBwbHkoXG5cdFx0KCBhcnIgPSBzbGljZS5jYWxsKCBwcmVmZXJyZWREb2MuY2hpbGROb2RlcyApICksXG5cdFx0cHJlZmVycmVkRG9jLmNoaWxkTm9kZXNcblx0KTtcblxuXHQvLyBTdXBwb3J0OiBBbmRyb2lkPDQuMFxuXHQvLyBEZXRlY3Qgc2lsZW50bHkgZmFpbGluZyBwdXNoLmFwcGx5XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0YXJyWyBwcmVmZXJyZWREb2MuY2hpbGROb2Rlcy5sZW5ndGggXS5ub2RlVHlwZTtcbn0gY2F0Y2ggKCBlICkge1xuXHRwdXNoID0geyBhcHBseTogYXJyLmxlbmd0aCA/XG5cblx0XHQvLyBMZXZlcmFnZSBzbGljZSBpZiBwb3NzaWJsZVxuXHRcdGZ1bmN0aW9uKCB0YXJnZXQsIGVscyApIHtcblx0XHRcdHB1c2hOYXRpdmUuYXBwbHkoIHRhcmdldCwgc2xpY2UuY2FsbCggZWxzICkgKTtcblx0XHR9IDpcblxuXHRcdC8vIFN1cHBvcnQ6IElFPDlcblx0XHQvLyBPdGhlcndpc2UgYXBwZW5kIGRpcmVjdGx5XG5cdFx0ZnVuY3Rpb24oIHRhcmdldCwgZWxzICkge1xuXHRcdFx0dmFyIGogPSB0YXJnZXQubGVuZ3RoLFxuXHRcdFx0XHRpID0gMDtcblxuXHRcdFx0Ly8gQ2FuJ3QgdHJ1c3QgTm9kZUxpc3QubGVuZ3RoXG5cdFx0XHR3aGlsZSAoICggdGFyZ2V0WyBqKysgXSA9IGVsc1sgaSsrIF0gKSApIHt9XG5cdFx0XHR0YXJnZXQubGVuZ3RoID0gaiAtIDE7XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBTaXp6bGUoIHNlbGVjdG9yLCBjb250ZXh0LCByZXN1bHRzLCBzZWVkICkge1xuXHR2YXIgbSwgaSwgZWxlbSwgbmlkLCBtYXRjaCwgZ3JvdXBzLCBuZXdTZWxlY3Rvcixcblx0XHRuZXdDb250ZXh0ID0gY29udGV4dCAmJiBjb250ZXh0Lm93bmVyRG9jdW1lbnQsXG5cblx0XHQvLyBub2RlVHlwZSBkZWZhdWx0cyB0byA5LCBzaW5jZSBjb250ZXh0IGRlZmF1bHRzIHRvIGRvY3VtZW50XG5cdFx0bm9kZVR5cGUgPSBjb250ZXh0ID8gY29udGV4dC5ub2RlVHlwZSA6IDk7XG5cblx0cmVzdWx0cyA9IHJlc3VsdHMgfHwgW107XG5cblx0Ly8gUmV0dXJuIGVhcmx5IGZyb20gY2FsbHMgd2l0aCBpbnZhbGlkIHNlbGVjdG9yIG9yIGNvbnRleHRcblx0aWYgKCB0eXBlb2Ygc2VsZWN0b3IgIT09IFwic3RyaW5nXCIgfHwgIXNlbGVjdG9yIHx8XG5cdFx0bm9kZVR5cGUgIT09IDEgJiYgbm9kZVR5cGUgIT09IDkgJiYgbm9kZVR5cGUgIT09IDExICkge1xuXG5cdFx0cmV0dXJuIHJlc3VsdHM7XG5cdH1cblxuXHQvLyBUcnkgdG8gc2hvcnRjdXQgZmluZCBvcGVyYXRpb25zIChhcyBvcHBvc2VkIHRvIGZpbHRlcnMpIGluIEhUTUwgZG9jdW1lbnRzXG5cdGlmICggIXNlZWQgKSB7XG5cdFx0c2V0RG9jdW1lbnQoIGNvbnRleHQgKTtcblx0XHRjb250ZXh0ID0gY29udGV4dCB8fCBkb2N1bWVudDtcblxuXHRcdGlmICggZG9jdW1lbnRJc0hUTUwgKSB7XG5cblx0XHRcdC8vIElmIHRoZSBzZWxlY3RvciBpcyBzdWZmaWNpZW50bHkgc2ltcGxlLCB0cnkgdXNpbmcgYSBcImdldCpCeSpcIiBET00gbWV0aG9kXG5cdFx0XHQvLyAoZXhjZXB0aW5nIERvY3VtZW50RnJhZ21lbnQgY29udGV4dCwgd2hlcmUgdGhlIG1ldGhvZHMgZG9uJ3QgZXhpc3QpXG5cdFx0XHRpZiAoIG5vZGVUeXBlICE9PSAxMSAmJiAoIG1hdGNoID0gcnF1aWNrRXhwci5leGVjKCBzZWxlY3RvciApICkgKSB7XG5cblx0XHRcdFx0Ly8gSUQgc2VsZWN0b3Jcblx0XHRcdFx0aWYgKCAoIG0gPSBtYXRjaFsgMSBdICkgKSB7XG5cblx0XHRcdFx0XHQvLyBEb2N1bWVudCBjb250ZXh0XG5cdFx0XHRcdFx0aWYgKCBub2RlVHlwZSA9PT0gOSApIHtcblx0XHRcdFx0XHRcdGlmICggKCBlbGVtID0gY29udGV4dC5nZXRFbGVtZW50QnlJZCggbSApICkgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUsIE9wZXJhLCBXZWJraXRcblx0XHRcdFx0XHRcdFx0Ly8gVE9ETzogaWRlbnRpZnkgdmVyc2lvbnNcblx0XHRcdFx0XHRcdFx0Ly8gZ2V0RWxlbWVudEJ5SWQgY2FuIG1hdGNoIGVsZW1lbnRzIGJ5IG5hbWUgaW5zdGVhZCBvZiBJRFxuXHRcdFx0XHRcdFx0XHRpZiAoIGVsZW0uaWQgPT09IG0gKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0cy5wdXNoKCBlbGVtICk7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gRWxlbWVudCBjb250ZXh0XG5cdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUsIE9wZXJhLCBXZWJraXRcblx0XHRcdFx0XHRcdC8vIFRPRE86IGlkZW50aWZ5IHZlcnNpb25zXG5cdFx0XHRcdFx0XHQvLyBnZXRFbGVtZW50QnlJZCBjYW4gbWF0Y2ggZWxlbWVudHMgYnkgbmFtZSBpbnN0ZWFkIG9mIElEXG5cdFx0XHRcdFx0XHRpZiAoIG5ld0NvbnRleHQgJiYgKCBlbGVtID0gbmV3Q29udGV4dC5nZXRFbGVtZW50QnlJZCggbSApICkgJiZcblx0XHRcdFx0XHRcdFx0Y29udGFpbnMoIGNvbnRleHQsIGVsZW0gKSAmJlxuXHRcdFx0XHRcdFx0XHRlbGVtLmlkID09PSBtICkge1xuXG5cdFx0XHRcdFx0XHRcdHJlc3VsdHMucHVzaCggZWxlbSApO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gVHlwZSBzZWxlY3RvclxuXHRcdFx0XHR9IGVsc2UgaWYgKCBtYXRjaFsgMiBdICkge1xuXHRcdFx0XHRcdHB1c2guYXBwbHkoIHJlc3VsdHMsIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIHNlbGVjdG9yICkgKTtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblxuXHRcdFx0XHQvLyBDbGFzcyBzZWxlY3RvclxuXHRcdFx0XHR9IGVsc2UgaWYgKCAoIG0gPSBtYXRjaFsgMyBdICkgJiYgc3VwcG9ydC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lICYmXG5cdFx0XHRcdFx0Y29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lICkge1xuXG5cdFx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cywgY29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCBtICkgKTtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBUYWtlIGFkdmFudGFnZSBvZiBxdWVyeVNlbGVjdG9yQWxsXG5cdFx0XHRpZiAoIHN1cHBvcnQucXNhICYmXG5cdFx0XHRcdCFub25uYXRpdmVTZWxlY3RvckNhY2hlWyBzZWxlY3RvciArIFwiIFwiIF0gJiZcblx0XHRcdFx0KCAhcmJ1Z2d5UVNBIHx8ICFyYnVnZ3lRU0EudGVzdCggc2VsZWN0b3IgKSApICYmXG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgOCBvbmx5XG5cdFx0XHRcdC8vIEV4Y2x1ZGUgb2JqZWN0IGVsZW1lbnRzXG5cdFx0XHRcdCggbm9kZVR5cGUgIT09IDEgfHwgY29udGV4dC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICE9PSBcIm9iamVjdFwiICkgKSB7XG5cblx0XHRcdFx0bmV3U2VsZWN0b3IgPSBzZWxlY3Rvcjtcblx0XHRcdFx0bmV3Q29udGV4dCA9IGNvbnRleHQ7XG5cblx0XHRcdFx0Ly8gcVNBIGNvbnNpZGVycyBlbGVtZW50cyBvdXRzaWRlIGEgc2NvcGluZyByb290IHdoZW4gZXZhbHVhdGluZyBjaGlsZCBvclxuXHRcdFx0XHQvLyBkZXNjZW5kYW50IGNvbWJpbmF0b3JzLCB3aGljaCBpcyBub3Qgd2hhdCB3ZSB3YW50LlxuXHRcdFx0XHQvLyBJbiBzdWNoIGNhc2VzLCB3ZSB3b3JrIGFyb3VuZCB0aGUgYmVoYXZpb3IgYnkgcHJlZml4aW5nIGV2ZXJ5IHNlbGVjdG9yIGluIHRoZVxuXHRcdFx0XHQvLyBsaXN0IHdpdGggYW4gSUQgc2VsZWN0b3IgcmVmZXJlbmNpbmcgdGhlIHNjb3BlIGNvbnRleHQuXG5cdFx0XHRcdC8vIFRoZSB0ZWNobmlxdWUgaGFzIHRvIGJlIHVzZWQgYXMgd2VsbCB3aGVuIGEgbGVhZGluZyBjb21iaW5hdG9yIGlzIHVzZWRcblx0XHRcdFx0Ly8gYXMgc3VjaCBzZWxlY3RvcnMgYXJlIG5vdCByZWNvZ25pemVkIGJ5IHF1ZXJ5U2VsZWN0b3JBbGwuXG5cdFx0XHRcdC8vIFRoYW5rcyB0byBBbmRyZXcgRHVwb250IGZvciB0aGlzIHRlY2huaXF1ZS5cblx0XHRcdFx0aWYgKCBub2RlVHlwZSA9PT0gMSAmJlxuXHRcdFx0XHRcdCggcmRlc2NlbmQudGVzdCggc2VsZWN0b3IgKSB8fCByY29tYmluYXRvcnMudGVzdCggc2VsZWN0b3IgKSApICkge1xuXG5cdFx0XHRcdFx0Ly8gRXhwYW5kIGNvbnRleHQgZm9yIHNpYmxpbmcgc2VsZWN0b3JzXG5cdFx0XHRcdFx0bmV3Q29udGV4dCA9IHJzaWJsaW5nLnRlc3QoIHNlbGVjdG9yICkgJiYgdGVzdENvbnRleHQoIGNvbnRleHQucGFyZW50Tm9kZSApIHx8XG5cdFx0XHRcdFx0XHRjb250ZXh0O1xuXG5cdFx0XHRcdFx0Ly8gV2UgY2FuIHVzZSA6c2NvcGUgaW5zdGVhZCBvZiB0aGUgSUQgaGFjayBpZiB0aGUgYnJvd3NlclxuXHRcdFx0XHRcdC8vIHN1cHBvcnRzIGl0ICYgaWYgd2UncmUgbm90IGNoYW5naW5nIHRoZSBjb250ZXh0LlxuXHRcdFx0XHRcdGlmICggbmV3Q29udGV4dCAhPT0gY29udGV4dCB8fCAhc3VwcG9ydC5zY29wZSApIHtcblxuXHRcdFx0XHRcdFx0Ly8gQ2FwdHVyZSB0aGUgY29udGV4dCBJRCwgc2V0dGluZyBpdCBmaXJzdCBpZiBuZWNlc3Nhcnlcblx0XHRcdFx0XHRcdGlmICggKCBuaWQgPSBjb250ZXh0LmdldEF0dHJpYnV0ZSggXCJpZFwiICkgKSApIHtcblx0XHRcdFx0XHRcdFx0bmlkID0gbmlkLnJlcGxhY2UoIHJjc3Nlc2NhcGUsIGZjc3Nlc2NhcGUgKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRleHQuc2V0QXR0cmlidXRlKCBcImlkXCIsICggbmlkID0gZXhwYW5kbyApICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gUHJlZml4IGV2ZXJ5IHNlbGVjdG9yIGluIHRoZSBsaXN0XG5cdFx0XHRcdFx0Z3JvdXBzID0gdG9rZW5pemUoIHNlbGVjdG9yICk7XG5cdFx0XHRcdFx0aSA9IGdyb3Vwcy5sZW5ndGg7XG5cdFx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0XHRncm91cHNbIGkgXSA9ICggbmlkID8gXCIjXCIgKyBuaWQgOiBcIjpzY29wZVwiICkgKyBcIiBcIiArXG5cdFx0XHRcdFx0XHRcdHRvU2VsZWN0b3IoIGdyb3Vwc1sgaSBdICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG5ld1NlbGVjdG9yID0gZ3JvdXBzLmpvaW4oIFwiLFwiICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHB1c2guYXBwbHkoIHJlc3VsdHMsXG5cdFx0XHRcdFx0XHRuZXdDb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoIG5ld1NlbGVjdG9yIClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdFx0XHR9IGNhdGNoICggcXNhRXJyb3IgKSB7XG5cdFx0XHRcdFx0bm9ubmF0aXZlU2VsZWN0b3JDYWNoZSggc2VsZWN0b3IsIHRydWUgKTtcblx0XHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0XHRpZiAoIG5pZCA9PT0gZXhwYW5kbyApIHtcblx0XHRcdFx0XHRcdGNvbnRleHQucmVtb3ZlQXR0cmlidXRlKCBcImlkXCIgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBBbGwgb3RoZXJzXG5cdHJldHVybiBzZWxlY3QoIHNlbGVjdG9yLnJlcGxhY2UoIHJ0cmltLCBcIiQxXCIgKSwgY29udGV4dCwgcmVzdWx0cywgc2VlZCApO1xufVxuXG4vKipcbiAqIENyZWF0ZSBrZXktdmFsdWUgY2FjaGVzIG9mIGxpbWl0ZWQgc2l6ZVxuICogQHJldHVybnMge2Z1bmN0aW9uKHN0cmluZywgb2JqZWN0KX0gUmV0dXJucyB0aGUgT2JqZWN0IGRhdGEgYWZ0ZXIgc3RvcmluZyBpdCBvbiBpdHNlbGYgd2l0aFxuICpcdHByb3BlcnR5IG5hbWUgdGhlIChzcGFjZS1zdWZmaXhlZCkgc3RyaW5nIGFuZCAoaWYgdGhlIGNhY2hlIGlzIGxhcmdlciB0aGFuIEV4cHIuY2FjaGVMZW5ndGgpXG4gKlx0ZGVsZXRpbmcgdGhlIG9sZGVzdCBlbnRyeVxuICovXG5mdW5jdGlvbiBjcmVhdGVDYWNoZSgpIHtcblx0dmFyIGtleXMgPSBbXTtcblxuXHRmdW5jdGlvbiBjYWNoZSgga2V5LCB2YWx1ZSApIHtcblxuXHRcdC8vIFVzZSAoa2V5ICsgXCIgXCIpIHRvIGF2b2lkIGNvbGxpc2lvbiB3aXRoIG5hdGl2ZSBwcm90b3R5cGUgcHJvcGVydGllcyAoc2VlIElzc3VlICMxNTcpXG5cdFx0aWYgKCBrZXlzLnB1c2goIGtleSArIFwiIFwiICkgPiBFeHByLmNhY2hlTGVuZ3RoICkge1xuXG5cdFx0XHQvLyBPbmx5IGtlZXAgdGhlIG1vc3QgcmVjZW50IGVudHJpZXNcblx0XHRcdGRlbGV0ZSBjYWNoZVsga2V5cy5zaGlmdCgpIF07XG5cdFx0fVxuXHRcdHJldHVybiAoIGNhY2hlWyBrZXkgKyBcIiBcIiBdID0gdmFsdWUgKTtcblx0fVxuXHRyZXR1cm4gY2FjaGU7XG59XG5cbi8qKlxuICogTWFyayBhIGZ1bmN0aW9uIGZvciBzcGVjaWFsIHVzZSBieSBTaXp6bGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBtYXJrXG4gKi9cbmZ1bmN0aW9uIG1hcmtGdW5jdGlvbiggZm4gKSB7XG5cdGZuWyBleHBhbmRvIF0gPSB0cnVlO1xuXHRyZXR1cm4gZm47XG59XG5cbi8qKlxuICogU3VwcG9ydCB0ZXN0aW5nIHVzaW5nIGFuIGVsZW1lbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFBhc3NlZCB0aGUgY3JlYXRlZCBlbGVtZW50IGFuZCByZXR1cm5zIGEgYm9vbGVhbiByZXN1bHRcbiAqL1xuZnVuY3Rpb24gYXNzZXJ0KCBmbiApIHtcblx0dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJmaWVsZHNldFwiICk7XG5cblx0dHJ5IHtcblx0XHRyZXR1cm4gISFmbiggZWwgKTtcblx0fSBjYXRjaCAoIGUgKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9IGZpbmFsbHkge1xuXG5cdFx0Ly8gUmVtb3ZlIGZyb20gaXRzIHBhcmVudCBieSBkZWZhdWx0XG5cdFx0aWYgKCBlbC5wYXJlbnROb2RlICkge1xuXHRcdFx0ZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggZWwgKTtcblx0XHR9XG5cblx0XHQvLyByZWxlYXNlIG1lbW9yeSBpbiBJRVxuXHRcdGVsID0gbnVsbDtcblx0fVxufVxuXG4vKipcbiAqIEFkZHMgdGhlIHNhbWUgaGFuZGxlciBmb3IgYWxsIG9mIHRoZSBzcGVjaWZpZWQgYXR0cnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBhdHRycyBQaXBlLXNlcGFyYXRlZCBsaXN0IG9mIGF0dHJpYnV0ZXNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgVGhlIG1ldGhvZCB0aGF0IHdpbGwgYmUgYXBwbGllZFxuICovXG5mdW5jdGlvbiBhZGRIYW5kbGUoIGF0dHJzLCBoYW5kbGVyICkge1xuXHR2YXIgYXJyID0gYXR0cnMuc3BsaXQoIFwifFwiICksXG5cdFx0aSA9IGFyci5sZW5ndGg7XG5cblx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0RXhwci5hdHRySGFuZGxlWyBhcnJbIGkgXSBdID0gaGFuZGxlcjtcblx0fVxufVxuXG4vKipcbiAqIENoZWNrcyBkb2N1bWVudCBvcmRlciBvZiB0d28gc2libGluZ3NcbiAqIEBwYXJhbSB7RWxlbWVudH0gYVxuICogQHBhcmFtIHtFbGVtZW50fSBiXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBSZXR1cm5zIGxlc3MgdGhhbiAwIGlmIGEgcHJlY2VkZXMgYiwgZ3JlYXRlciB0aGFuIDAgaWYgYSBmb2xsb3dzIGJcbiAqL1xuZnVuY3Rpb24gc2libGluZ0NoZWNrKCBhLCBiICkge1xuXHR2YXIgY3VyID0gYiAmJiBhLFxuXHRcdGRpZmYgPSBjdXIgJiYgYS5ub2RlVHlwZSA9PT0gMSAmJiBiLm5vZGVUeXBlID09PSAxICYmXG5cdFx0XHRhLnNvdXJjZUluZGV4IC0gYi5zb3VyY2VJbmRleDtcblxuXHQvLyBVc2UgSUUgc291cmNlSW5kZXggaWYgYXZhaWxhYmxlIG9uIGJvdGggbm9kZXNcblx0aWYgKCBkaWZmICkge1xuXHRcdHJldHVybiBkaWZmO1xuXHR9XG5cblx0Ly8gQ2hlY2sgaWYgYiBmb2xsb3dzIGFcblx0aWYgKCBjdXIgKSB7XG5cdFx0d2hpbGUgKCAoIGN1ciA9IGN1ci5uZXh0U2libGluZyApICkge1xuXHRcdFx0aWYgKCBjdXIgPT09IGIgKSB7XG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gYSA/IDEgOiAtMTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdG8gdXNlIGluIHBzZXVkb3MgZm9yIGlucHV0IHR5cGVzXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICovXG5mdW5jdGlvbiBjcmVhdGVJbnB1dFBzZXVkbyggdHlwZSApIHtcblx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHZhciBuYW1lID0gZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdHJldHVybiBuYW1lID09PSBcImlucHV0XCIgJiYgZWxlbS50eXBlID09PSB0eXBlO1xuXHR9O1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0byB1c2UgaW4gcHNldWRvcyBmb3IgYnV0dG9uc1xuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQnV0dG9uUHNldWRvKCB0eXBlICkge1xuXHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0dmFyIG5hbWUgPSBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG5cdFx0cmV0dXJuICggbmFtZSA9PT0gXCJpbnB1dFwiIHx8IG5hbWUgPT09IFwiYnV0dG9uXCIgKSAmJiBlbGVtLnR5cGUgPT09IHR5cGU7XG5cdH07XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRvIHVzZSBpbiBwc2V1ZG9zIGZvciA6ZW5hYmxlZC86ZGlzYWJsZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZGlzYWJsZWQgdHJ1ZSBmb3IgOmRpc2FibGVkOyBmYWxzZSBmb3IgOmVuYWJsZWRcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRGlzYWJsZWRQc2V1ZG8oIGRpc2FibGVkICkge1xuXG5cdC8vIEtub3duIDpkaXNhYmxlZCBmYWxzZSBwb3NpdGl2ZXM6IGZpZWxkc2V0W2Rpc2FibGVkXSA+IGxlZ2VuZDpudGgtb2YtdHlwZShuKzIpIDpjYW4tZGlzYWJsZVxuXHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHQvLyBPbmx5IGNlcnRhaW4gZWxlbWVudHMgY2FuIG1hdGNoIDplbmFibGVkIG9yIDpkaXNhYmxlZFxuXHRcdC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NjcmlwdGluZy5odG1sI3NlbGVjdG9yLWVuYWJsZWRcblx0XHQvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zY3JpcHRpbmcuaHRtbCNzZWxlY3Rvci1kaXNhYmxlZFxuXHRcdGlmICggXCJmb3JtXCIgaW4gZWxlbSApIHtcblxuXHRcdFx0Ly8gQ2hlY2sgZm9yIGluaGVyaXRlZCBkaXNhYmxlZG5lc3Mgb24gcmVsZXZhbnQgbm9uLWRpc2FibGVkIGVsZW1lbnRzOlxuXHRcdFx0Ly8gKiBsaXN0ZWQgZm9ybS1hc3NvY2lhdGVkIGVsZW1lbnRzIGluIGEgZGlzYWJsZWQgZmllbGRzZXRcblx0XHRcdC8vICAgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybXMuaHRtbCNjYXRlZ29yeS1saXN0ZWRcblx0XHRcdC8vICAgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybXMuaHRtbCNjb25jZXB0LWZlLWRpc2FibGVkXG5cdFx0XHQvLyAqIG9wdGlvbiBlbGVtZW50cyBpbiBhIGRpc2FibGVkIG9wdGdyb3VwXG5cdFx0XHQvLyAgIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2Zvcm1zLmh0bWwjY29uY2VwdC1vcHRpb24tZGlzYWJsZWRcblx0XHRcdC8vIEFsbCBzdWNoIGVsZW1lbnRzIGhhdmUgYSBcImZvcm1cIiBwcm9wZXJ0eS5cblx0XHRcdGlmICggZWxlbS5wYXJlbnROb2RlICYmIGVsZW0uZGlzYWJsZWQgPT09IGZhbHNlICkge1xuXG5cdFx0XHRcdC8vIE9wdGlvbiBlbGVtZW50cyBkZWZlciB0byBhIHBhcmVudCBvcHRncm91cCBpZiBwcmVzZW50XG5cdFx0XHRcdGlmICggXCJsYWJlbFwiIGluIGVsZW0gKSB7XG5cdFx0XHRcdFx0aWYgKCBcImxhYmVsXCIgaW4gZWxlbS5wYXJlbnROb2RlICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ucGFyZW50Tm9kZS5kaXNhYmxlZCA9PT0gZGlzYWJsZWQ7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtLmRpc2FibGVkID09PSBkaXNhYmxlZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA2IC0gMTFcblx0XHRcdFx0Ly8gVXNlIHRoZSBpc0Rpc2FibGVkIHNob3J0Y3V0IHByb3BlcnR5IHRvIGNoZWNrIGZvciBkaXNhYmxlZCBmaWVsZHNldCBhbmNlc3RvcnNcblx0XHRcdFx0cmV0dXJuIGVsZW0uaXNEaXNhYmxlZCA9PT0gZGlzYWJsZWQgfHxcblxuXHRcdFx0XHRcdC8vIFdoZXJlIHRoZXJlIGlzIG5vIGlzRGlzYWJsZWQsIGNoZWNrIG1hbnVhbGx5XG5cdFx0XHRcdFx0LyoganNoaW50IC1XMDE4ICovXG5cdFx0XHRcdFx0ZWxlbS5pc0Rpc2FibGVkICE9PSAhZGlzYWJsZWQgJiZcblx0XHRcdFx0XHRpbkRpc2FibGVkRmllbGRzZXQoIGVsZW0gKSA9PT0gZGlzYWJsZWQ7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBlbGVtLmRpc2FibGVkID09PSBkaXNhYmxlZDtcblxuXHRcdC8vIFRyeSB0byB3aW5ub3cgb3V0IGVsZW1lbnRzIHRoYXQgY2FuJ3QgYmUgZGlzYWJsZWQgYmVmb3JlIHRydXN0aW5nIHRoZSBkaXNhYmxlZCBwcm9wZXJ0eS5cblx0XHQvLyBTb21lIHZpY3RpbXMgZ2V0IGNhdWdodCBpbiBvdXIgbmV0IChsYWJlbCwgbGVnZW5kLCBtZW51LCB0cmFjayksIGJ1dCBpdCBzaG91bGRuJ3Rcblx0XHQvLyBldmVuIGV4aXN0IG9uIHRoZW0sIGxldCBhbG9uZSBoYXZlIGEgYm9vbGVhbiB2YWx1ZS5cblx0XHR9IGVsc2UgaWYgKCBcImxhYmVsXCIgaW4gZWxlbSApIHtcblx0XHRcdHJldHVybiBlbGVtLmRpc2FibGVkID09PSBkaXNhYmxlZDtcblx0XHR9XG5cblx0XHQvLyBSZW1haW5pbmcgZWxlbWVudHMgYXJlIG5laXRoZXIgOmVuYWJsZWQgbm9yIDpkaXNhYmxlZFxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdG8gdXNlIGluIHBzZXVkb3MgZm9yIHBvc2l0aW9uYWxzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICovXG5mdW5jdGlvbiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKCBmbiApIHtcblx0cmV0dXJuIG1hcmtGdW5jdGlvbiggZnVuY3Rpb24oIGFyZ3VtZW50ICkge1xuXHRcdGFyZ3VtZW50ID0gK2FyZ3VtZW50O1xuXHRcdHJldHVybiBtYXJrRnVuY3Rpb24oIGZ1bmN0aW9uKCBzZWVkLCBtYXRjaGVzICkge1xuXHRcdFx0dmFyIGosXG5cdFx0XHRcdG1hdGNoSW5kZXhlcyA9IGZuKCBbXSwgc2VlZC5sZW5ndGgsIGFyZ3VtZW50ICksXG5cdFx0XHRcdGkgPSBtYXRjaEluZGV4ZXMubGVuZ3RoO1xuXG5cdFx0XHQvLyBNYXRjaCBlbGVtZW50cyBmb3VuZCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4ZXNcblx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRpZiAoIHNlZWRbICggaiA9IG1hdGNoSW5kZXhlc1sgaSBdICkgXSApIHtcblx0XHRcdFx0XHRzZWVkWyBqIF0gPSAhKCBtYXRjaGVzWyBqIF0gPSBzZWVkWyBqIF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSApO1xufVxuXG4vKipcbiAqIENoZWNrcyBhIG5vZGUgZm9yIHZhbGlkaXR5IGFzIGEgU2l6emxlIGNvbnRleHRcbiAqIEBwYXJhbSB7RWxlbWVudHxPYmplY3Q9fSBjb250ZXh0XG4gKiBAcmV0dXJucyB7RWxlbWVudHxPYmplY3R8Qm9vbGVhbn0gVGhlIGlucHV0IG5vZGUgaWYgYWNjZXB0YWJsZSwgb3RoZXJ3aXNlIGEgZmFsc3kgdmFsdWVcbiAqL1xuZnVuY3Rpb24gdGVzdENvbnRleHQoIGNvbnRleHQgKSB7XG5cdHJldHVybiBjb250ZXh0ICYmIHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lICE9PSBcInVuZGVmaW5lZFwiICYmIGNvbnRleHQ7XG59XG5cbi8vIEV4cG9zZSBzdXBwb3J0IHZhcnMgZm9yIGNvbnZlbmllbmNlXG5zdXBwb3J0ID0gU2l6emxlLnN1cHBvcnQgPSB7fTtcblxuLyoqXG4gKiBEZXRlY3RzIFhNTCBub2Rlc1xuICogQHBhcmFtIHtFbGVtZW50fE9iamVjdH0gZWxlbSBBbiBlbGVtZW50IG9yIGEgZG9jdW1lbnRcbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmZiBlbGVtIGlzIGEgbm9uLUhUTUwgWE1MIG5vZGVcbiAqL1xuaXNYTUwgPSBTaXp6bGUuaXNYTUwgPSBmdW5jdGlvbiggZWxlbSApIHtcblx0dmFyIG5hbWVzcGFjZSA9IGVsZW0gJiYgZWxlbS5uYW1lc3BhY2VVUkksXG5cdFx0ZG9jRWxlbSA9IGVsZW0gJiYgKCBlbGVtLm93bmVyRG9jdW1lbnQgfHwgZWxlbSApLmRvY3VtZW50RWxlbWVudDtcblxuXHQvLyBTdXBwb3J0OiBJRSA8PThcblx0Ly8gQXNzdW1lIEhUTUwgd2hlbiBkb2N1bWVudEVsZW1lbnQgZG9lc24ndCB5ZXQgZXhpc3QsIHN1Y2ggYXMgaW5zaWRlIGxvYWRpbmcgaWZyYW1lc1xuXHQvLyBodHRwczovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvNDgzM1xuXHRyZXR1cm4gIXJodG1sLnRlc3QoIG5hbWVzcGFjZSB8fCBkb2NFbGVtICYmIGRvY0VsZW0ubm9kZU5hbWUgfHwgXCJIVE1MXCIgKTtcbn07XG5cbi8qKlxuICogU2V0cyBkb2N1bWVudC1yZWxhdGVkIHZhcmlhYmxlcyBvbmNlIGJhc2VkIG9uIHRoZSBjdXJyZW50IGRvY3VtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR8T2JqZWN0fSBbZG9jXSBBbiBlbGVtZW50IG9yIGRvY3VtZW50IG9iamVjdCB0byB1c2UgdG8gc2V0IHRoZSBkb2N1bWVudFxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY3VycmVudCBkb2N1bWVudFxuICovXG5zZXREb2N1bWVudCA9IFNpenpsZS5zZXREb2N1bWVudCA9IGZ1bmN0aW9uKCBub2RlICkge1xuXHR2YXIgaGFzQ29tcGFyZSwgc3ViV2luZG93LFxuXHRcdGRvYyA9IG5vZGUgPyBub2RlLm93bmVyRG9jdW1lbnQgfHwgbm9kZSA6IHByZWZlcnJlZERvYztcblxuXHQvLyBSZXR1cm4gZWFybHkgaWYgZG9jIGlzIGludmFsaWQgb3IgYWxyZWFkeSBzZWxlY3RlZFxuXHQvLyBTdXBwb3J0OiBJRSAxMSssIEVkZ2UgMTcgLSAxOCtcblx0Ly8gSUUvRWRnZSBzb21ldGltZXMgdGhyb3cgYSBcIlBlcm1pc3Npb24gZGVuaWVkXCIgZXJyb3Igd2hlbiBzdHJpY3QtY29tcGFyaW5nXG5cdC8vIHR3byBkb2N1bWVudHM7IHNoYWxsb3cgY29tcGFyaXNvbnMgd29yay5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuXHRpZiAoIGRvYyA9PSBkb2N1bWVudCB8fCBkb2Mubm9kZVR5cGUgIT09IDkgfHwgIWRvYy5kb2N1bWVudEVsZW1lbnQgKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50O1xuXHR9XG5cblx0Ly8gVXBkYXRlIGdsb2JhbCB2YXJpYWJsZXNcblx0ZG9jdW1lbnQgPSBkb2M7XG5cdGRvY0VsZW0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cdGRvY3VtZW50SXNIVE1MID0gIWlzWE1MKCBkb2N1bWVudCApO1xuXG5cdC8vIFN1cHBvcnQ6IElFIDkgLSAxMSssIEVkZ2UgMTIgLSAxOCtcblx0Ly8gQWNjZXNzaW5nIGlmcmFtZSBkb2N1bWVudHMgYWZ0ZXIgdW5sb2FkIHRocm93cyBcInBlcm1pc3Npb24gZGVuaWVkXCIgZXJyb3JzIChqUXVlcnkgIzEzOTM2KVxuXHQvLyBTdXBwb3J0OiBJRSAxMSssIEVkZ2UgMTcgLSAxOCtcblx0Ly8gSUUvRWRnZSBzb21ldGltZXMgdGhyb3cgYSBcIlBlcm1pc3Npb24gZGVuaWVkXCIgZXJyb3Igd2hlbiBzdHJpY3QtY29tcGFyaW5nXG5cdC8vIHR3byBkb2N1bWVudHM7IHNoYWxsb3cgY29tcGFyaXNvbnMgd29yay5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuXHRpZiAoIHByZWZlcnJlZERvYyAhPSBkb2N1bWVudCAmJlxuXHRcdCggc3ViV2luZG93ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcgKSAmJiBzdWJXaW5kb3cudG9wICE9PSBzdWJXaW5kb3cgKSB7XG5cblx0XHQvLyBTdXBwb3J0OiBJRSAxMSwgRWRnZVxuXHRcdGlmICggc3ViV2luZG93LmFkZEV2ZW50TGlzdGVuZXIgKSB7XG5cdFx0XHRzdWJXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJ1bmxvYWRcIiwgdW5sb2FkSGFuZGxlciwgZmFsc2UgKTtcblxuXHRcdC8vIFN1cHBvcnQ6IElFIDkgLSAxMCBvbmx5XG5cdFx0fSBlbHNlIGlmICggc3ViV2luZG93LmF0dGFjaEV2ZW50ICkge1xuXHRcdFx0c3ViV2luZG93LmF0dGFjaEV2ZW50KCBcIm9udW5sb2FkXCIsIHVubG9hZEhhbmRsZXIgKTtcblx0XHR9XG5cdH1cblxuXHQvLyBTdXBwb3J0OiBJRSA4IC0gMTErLCBFZGdlIDEyIC0gMTgrLCBDaHJvbWUgPD0xNiAtIDI1IG9ubHksIEZpcmVmb3ggPD0zLjYgLSAzMSBvbmx5LFxuXHQvLyBTYWZhcmkgNCAtIDUgb25seSwgT3BlcmEgPD0xMS42IC0gMTIueCBvbmx5XG5cdC8vIElFL0VkZ2UgJiBvbGRlciBicm93c2VycyBkb24ndCBzdXBwb3J0IHRoZSA6c2NvcGUgcHNldWRvLWNsYXNzLlxuXHQvLyBTdXBwb3J0OiBTYWZhcmkgNi4wIG9ubHlcblx0Ly8gU2FmYXJpIDYuMCBzdXBwb3J0cyA6c2NvcGUgYnV0IGl0J3MgYW4gYWxpYXMgb2YgOnJvb3QgdGhlcmUuXG5cdHN1cHBvcnQuc2NvcGUgPSBhc3NlcnQoIGZ1bmN0aW9uKCBlbCApIHtcblx0XHRkb2NFbGVtLmFwcGVuZENoaWxkKCBlbCApLmFwcGVuZENoaWxkKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiICkgKTtcblx0XHRyZXR1cm4gdHlwZW9mIGVsLnF1ZXJ5U2VsZWN0b3JBbGwgIT09IFwidW5kZWZpbmVkXCIgJiZcblx0XHRcdCFlbC5xdWVyeVNlbGVjdG9yQWxsKCBcIjpzY29wZSBmaWVsZHNldCBkaXZcIiApLmxlbmd0aDtcblx0fSApO1xuXG5cdC8qIEF0dHJpYnV0ZXNcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5cdC8vIFN1cHBvcnQ6IElFPDhcblx0Ly8gVmVyaWZ5IHRoYXQgZ2V0QXR0cmlidXRlIHJlYWxseSByZXR1cm5zIGF0dHJpYnV0ZXMgYW5kIG5vdCBwcm9wZXJ0aWVzXG5cdC8vIChleGNlcHRpbmcgSUU4IGJvb2xlYW5zKVxuXHRzdXBwb3J0LmF0dHJpYnV0ZXMgPSBhc3NlcnQoIGZ1bmN0aW9uKCBlbCApIHtcblx0XHRlbC5jbGFzc05hbWUgPSBcImlcIjtcblx0XHRyZXR1cm4gIWVsLmdldEF0dHJpYnV0ZSggXCJjbGFzc05hbWVcIiApO1xuXHR9ICk7XG5cblx0LyogZ2V0RWxlbWVudChzKUJ5KlxuXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cblx0Ly8gQ2hlY2sgaWYgZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpIHJldHVybnMgb25seSBlbGVtZW50c1xuXHRzdXBwb3J0LmdldEVsZW1lbnRzQnlUYWdOYW1lID0gYXNzZXJ0KCBmdW5jdGlvbiggZWwgKSB7XG5cdFx0ZWwuYXBwZW5kQ2hpbGQoIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoIFwiXCIgKSApO1xuXHRcdHJldHVybiAhZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIFwiKlwiICkubGVuZ3RoO1xuXHR9ICk7XG5cblx0Ly8gU3VwcG9ydDogSUU8OVxuXHRzdXBwb3J0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgPSBybmF0aXZlLnRlc3QoIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgKTtcblxuXHQvLyBTdXBwb3J0OiBJRTwxMFxuXHQvLyBDaGVjayBpZiBnZXRFbGVtZW50QnlJZCByZXR1cm5zIGVsZW1lbnRzIGJ5IG5hbWVcblx0Ly8gVGhlIGJyb2tlbiBnZXRFbGVtZW50QnlJZCBtZXRob2RzIGRvbid0IHBpY2sgdXAgcHJvZ3JhbW1hdGljYWxseS1zZXQgbmFtZXMsXG5cdC8vIHNvIHVzZSBhIHJvdW5kYWJvdXQgZ2V0RWxlbWVudHNCeU5hbWUgdGVzdFxuXHRzdXBwb3J0LmdldEJ5SWQgPSBhc3NlcnQoIGZ1bmN0aW9uKCBlbCApIHtcblx0XHRkb2NFbGVtLmFwcGVuZENoaWxkKCBlbCApLmlkID0gZXhwYW5kbztcblx0XHRyZXR1cm4gIWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lIHx8ICFkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSggZXhwYW5kbyApLmxlbmd0aDtcblx0fSApO1xuXG5cdC8vIElEIGZpbHRlciBhbmQgZmluZFxuXHRpZiAoIHN1cHBvcnQuZ2V0QnlJZCApIHtcblx0XHRFeHByLmZpbHRlclsgXCJJRFwiIF0gPSBmdW5jdGlvbiggaWQgKSB7XG5cdFx0XHR2YXIgYXR0cklkID0gaWQucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKTtcblx0XHRcdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0cmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlKCBcImlkXCIgKSA9PT0gYXR0cklkO1xuXHRcdFx0fTtcblx0XHR9O1xuXHRcdEV4cHIuZmluZFsgXCJJRFwiIF0gPSBmdW5jdGlvbiggaWQsIGNvbnRleHQgKSB7XG5cdFx0XHRpZiAoIHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRCeUlkICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50SXNIVE1MICkge1xuXHRcdFx0XHR2YXIgZWxlbSA9IGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQoIGlkICk7XG5cdFx0XHRcdHJldHVybiBlbGVtID8gWyBlbGVtIF0gOiBbXTtcblx0XHRcdH1cblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdEV4cHIuZmlsdGVyWyBcIklEXCIgXSA9ICBmdW5jdGlvbiggaWQgKSB7XG5cdFx0XHR2YXIgYXR0cklkID0gaWQucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKTtcblx0XHRcdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0dmFyIG5vZGUgPSB0eXBlb2YgZWxlbS5nZXRBdHRyaWJ1dGVOb2RlICE9PSBcInVuZGVmaW5lZFwiICYmXG5cdFx0XHRcdFx0ZWxlbS5nZXRBdHRyaWJ1dGVOb2RlKCBcImlkXCIgKTtcblx0XHRcdFx0cmV0dXJuIG5vZGUgJiYgbm9kZS52YWx1ZSA9PT0gYXR0cklkO1xuXHRcdFx0fTtcblx0XHR9O1xuXG5cdFx0Ly8gU3VwcG9ydDogSUUgNiAtIDcgb25seVxuXHRcdC8vIGdldEVsZW1lbnRCeUlkIGlzIG5vdCByZWxpYWJsZSBhcyBhIGZpbmQgc2hvcnRjdXRcblx0XHRFeHByLmZpbmRbIFwiSURcIiBdID0gZnVuY3Rpb24oIGlkLCBjb250ZXh0ICkge1xuXHRcdFx0aWYgKCB0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50QnlJZCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudElzSFRNTCApIHtcblx0XHRcdFx0dmFyIG5vZGUsIGksIGVsZW1zLFxuXHRcdFx0XHRcdGVsZW0gPSBjb250ZXh0LmdldEVsZW1lbnRCeUlkKCBpZCApO1xuXG5cdFx0XHRcdGlmICggZWxlbSApIHtcblxuXHRcdFx0XHRcdC8vIFZlcmlmeSB0aGUgaWQgYXR0cmlidXRlXG5cdFx0XHRcdFx0bm9kZSA9IGVsZW0uZ2V0QXR0cmlidXRlTm9kZSggXCJpZFwiICk7XG5cdFx0XHRcdFx0aWYgKCBub2RlICYmIG5vZGUudmFsdWUgPT09IGlkICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIFsgZWxlbSBdO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIEZhbGwgYmFjayBvbiBnZXRFbGVtZW50c0J5TmFtZVxuXHRcdFx0XHRcdGVsZW1zID0gY29udGV4dC5nZXRFbGVtZW50c0J5TmFtZSggaWQgKTtcblx0XHRcdFx0XHRpID0gMDtcblx0XHRcdFx0XHR3aGlsZSAoICggZWxlbSA9IGVsZW1zWyBpKysgXSApICkge1xuXHRcdFx0XHRcdFx0bm9kZSA9IGVsZW0uZ2V0QXR0cmlidXRlTm9kZSggXCJpZFwiICk7XG5cdFx0XHRcdFx0XHRpZiAoIG5vZGUgJiYgbm9kZS52YWx1ZSA9PT0gaWQgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBbIGVsZW0gXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gW107XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXG5cdC8vIFRhZ1xuXHRFeHByLmZpbmRbIFwiVEFHXCIgXSA9IHN1cHBvcnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUgP1xuXHRcdGZ1bmN0aW9uKCB0YWcsIGNvbnRleHQgKSB7XG5cdFx0XHRpZiAoIHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lICE9PSBcInVuZGVmaW5lZFwiICkge1xuXHRcdFx0XHRyZXR1cm4gY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSggdGFnICk7XG5cblx0XHRcdC8vIERvY3VtZW50RnJhZ21lbnQgbm9kZXMgZG9uJ3QgaGF2ZSBnRUJUTlxuXHRcdFx0fSBlbHNlIGlmICggc3VwcG9ydC5xc2EgKSB7XG5cdFx0XHRcdHJldHVybiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoIHRhZyApO1xuXHRcdFx0fVxuXHRcdH0gOlxuXG5cdFx0ZnVuY3Rpb24oIHRhZywgY29udGV4dCApIHtcblx0XHRcdHZhciBlbGVtLFxuXHRcdFx0XHR0bXAgPSBbXSxcblx0XHRcdFx0aSA9IDAsXG5cblx0XHRcdFx0Ly8gQnkgaGFwcHkgY29pbmNpZGVuY2UsIGEgKGJyb2tlbikgZ0VCVE4gYXBwZWFycyBvbiBEb2N1bWVudEZyYWdtZW50IG5vZGVzIHRvb1xuXHRcdFx0XHRyZXN1bHRzID0gY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSggdGFnICk7XG5cblx0XHRcdC8vIEZpbHRlciBvdXQgcG9zc2libGUgY29tbWVudHNcblx0XHRcdGlmICggdGFnID09PSBcIipcIiApIHtcblx0XHRcdFx0d2hpbGUgKCAoIGVsZW0gPSByZXN1bHRzWyBpKysgXSApICkge1xuXHRcdFx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblx0XHRcdFx0XHRcdHRtcC5wdXNoKCBlbGVtICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHRtcDtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdH07XG5cblx0Ly8gQ2xhc3Ncblx0RXhwci5maW5kWyBcIkNMQVNTXCIgXSA9IHN1cHBvcnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSAmJiBmdW5jdGlvbiggY2xhc3NOYW1lLCBjb250ZXh0ICkge1xuXHRcdGlmICggdHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudElzSFRNTCApIHtcblx0XHRcdHJldHVybiBjb250ZXh0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoIGNsYXNzTmFtZSApO1xuXHRcdH1cblx0fTtcblxuXHQvKiBRU0EvbWF0Y2hlc1NlbGVjdG9yXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuXHQvLyBRU0EgYW5kIG1hdGNoZXNTZWxlY3RvciBzdXBwb3J0XG5cblx0Ly8gbWF0Y2hlc1NlbGVjdG9yKDphY3RpdmUpIHJlcG9ydHMgZmFsc2Ugd2hlbiB0cnVlIChJRTkvT3BlcmEgMTEuNSlcblx0cmJ1Z2d5TWF0Y2hlcyA9IFtdO1xuXG5cdC8vIHFTYSg6Zm9jdXMpIHJlcG9ydHMgZmFsc2Ugd2hlbiB0cnVlIChDaHJvbWUgMjEpXG5cdC8vIFdlIGFsbG93IHRoaXMgYmVjYXVzZSBvZiBhIGJ1ZyBpbiBJRTgvOSB0aGF0IHRocm93cyBhbiBlcnJvclxuXHQvLyB3aGVuZXZlciBgZG9jdW1lbnQuYWN0aXZlRWxlbWVudGAgaXMgYWNjZXNzZWQgb24gYW4gaWZyYW1lXG5cdC8vIFNvLCB3ZSBhbGxvdyA6Zm9jdXMgdG8gcGFzcyB0aHJvdWdoIFFTQSBhbGwgdGhlIHRpbWUgdG8gYXZvaWQgdGhlIElFIGVycm9yXG5cdC8vIFNlZSBodHRwczovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvMTMzNzhcblx0cmJ1Z2d5UVNBID0gW107XG5cblx0aWYgKCAoIHN1cHBvcnQucXNhID0gcm5hdGl2ZS50ZXN0KCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsICkgKSApIHtcblxuXHRcdC8vIEJ1aWxkIFFTQSByZWdleFxuXHRcdC8vIFJlZ2V4IHN0cmF0ZWd5IGFkb3B0ZWQgZnJvbSBEaWVnbyBQZXJpbmlcblx0XHRhc3NlcnQoIGZ1bmN0aW9uKCBlbCApIHtcblxuXHRcdFx0dmFyIGlucHV0O1xuXG5cdFx0XHQvLyBTZWxlY3QgaXMgc2V0IHRvIGVtcHR5IHN0cmluZyBvbiBwdXJwb3NlXG5cdFx0XHQvLyBUaGlzIGlzIHRvIHRlc3QgSUUncyB0cmVhdG1lbnQgb2Ygbm90IGV4cGxpY2l0bHlcblx0XHRcdC8vIHNldHRpbmcgYSBib29sZWFuIGNvbnRlbnQgYXR0cmlidXRlLFxuXHRcdFx0Ly8gc2luY2UgaXRzIHByZXNlbmNlIHNob3VsZCBiZSBlbm91Z2hcblx0XHRcdC8vIGh0dHBzOi8vYnVncy5qcXVlcnkuY29tL3RpY2tldC8xMjM1OVxuXHRcdFx0ZG9jRWxlbS5hcHBlbmRDaGlsZCggZWwgKS5pbm5lckhUTUwgPSBcIjxhIGlkPSdcIiArIGV4cGFuZG8gKyBcIic+PC9hPlwiICtcblx0XHRcdFx0XCI8c2VsZWN0IGlkPSdcIiArIGV4cGFuZG8gKyBcIi1cXHJcXFxcJyBtc2FsbG93Y2FwdHVyZT0nJz5cIiArXG5cdFx0XHRcdFwiPG9wdGlvbiBzZWxlY3RlZD0nJz48L29wdGlvbj48L3NlbGVjdD5cIjtcblxuXHRcdFx0Ly8gU3VwcG9ydDogSUU4LCBPcGVyYSAxMS0xMi4xNlxuXHRcdFx0Ly8gTm90aGluZyBzaG91bGQgYmUgc2VsZWN0ZWQgd2hlbiBlbXB0eSBzdHJpbmdzIGZvbGxvdyBePSBvciAkPSBvciAqPVxuXHRcdFx0Ly8gVGhlIHRlc3QgYXR0cmlidXRlIG11c3QgYmUgdW5rbm93biBpbiBPcGVyYSBidXQgXCJzYWZlXCIgZm9yIFdpblJUXG5cdFx0XHQvLyBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2hoNDY1Mzg4LmFzcHgjYXR0cmlidXRlX3NlY3Rpb25cblx0XHRcdGlmICggZWwucXVlcnlTZWxlY3RvckFsbCggXCJbbXNhbGxvd2NhcHR1cmVePScnXVwiICkubGVuZ3RoICkge1xuXHRcdFx0XHRyYnVnZ3lRU0EucHVzaCggXCJbKl4kXT1cIiArIHdoaXRlc3BhY2UgKyBcIiooPzonJ3xcXFwiXFxcIilcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRThcblx0XHRcdC8vIEJvb2xlYW4gYXR0cmlidXRlcyBhbmQgXCJ2YWx1ZVwiIGFyZSBub3QgdHJlYXRlZCBjb3JyZWN0bHlcblx0XHRcdGlmICggIWVsLnF1ZXJ5U2VsZWN0b3JBbGwoIFwiW3NlbGVjdGVkXVwiICkubGVuZ3RoICkge1xuXHRcdFx0XHRyYnVnZ3lRU0EucHVzaCggXCJcXFxcW1wiICsgd2hpdGVzcGFjZSArIFwiKig/OnZhbHVlfFwiICsgYm9vbGVhbnMgKyBcIilcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTdXBwb3J0OiBDaHJvbWU8MjksIEFuZHJvaWQ8NC40LCBTYWZhcmk8Ny4wKywgaU9TPDcuMCssIFBoYW50b21KUzwxLjkuOCtcblx0XHRcdGlmICggIWVsLnF1ZXJ5U2VsZWN0b3JBbGwoIFwiW2lkfj1cIiArIGV4cGFuZG8gKyBcIi1dXCIgKS5sZW5ndGggKSB7XG5cdFx0XHRcdHJidWdneVFTQS5wdXNoKCBcIn49XCIgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU3VwcG9ydDogSUUgMTErLCBFZGdlIDE1IC0gMTgrXG5cdFx0XHQvLyBJRSAxMS9FZGdlIGRvbid0IGZpbmQgZWxlbWVudHMgb24gYSBgW25hbWU9JyddYCBxdWVyeSBpbiBzb21lIGNhc2VzLlxuXHRcdFx0Ly8gQWRkaW5nIGEgdGVtcG9yYXJ5IGF0dHJpYnV0ZSB0byB0aGUgZG9jdW1lbnQgYmVmb3JlIHRoZSBzZWxlY3Rpb24gd29ya3Ncblx0XHRcdC8vIGFyb3VuZCB0aGUgaXNzdWUuXG5cdFx0XHQvLyBJbnRlcmVzdGluZ2x5LCBJRSAxMCAmIG9sZGVyIGRvbid0IHNlZW0gdG8gaGF2ZSB0aGUgaXNzdWUuXG5cdFx0XHRpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiaW5wdXRcIiApO1xuXHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKCBcIm5hbWVcIiwgXCJcIiApO1xuXHRcdFx0ZWwuYXBwZW5kQ2hpbGQoIGlucHV0ICk7XG5cdFx0XHRpZiAoICFlbC5xdWVyeVNlbGVjdG9yQWxsKCBcIltuYW1lPScnXVwiICkubGVuZ3RoICkge1xuXHRcdFx0XHRyYnVnZ3lRU0EucHVzaCggXCJcXFxcW1wiICsgd2hpdGVzcGFjZSArIFwiKm5hbWVcIiArIHdoaXRlc3BhY2UgKyBcIio9XCIgK1xuXHRcdFx0XHRcdHdoaXRlc3BhY2UgKyBcIiooPzonJ3xcXFwiXFxcIilcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBXZWJraXQvT3BlcmEgLSA6Y2hlY2tlZCBzaG91bGQgcmV0dXJuIHNlbGVjdGVkIG9wdGlvbiBlbGVtZW50c1xuXHRcdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvMjAxMS9SRUMtY3NzMy1zZWxlY3RvcnMtMjAxMTA5MjkvI2NoZWNrZWRcblx0XHRcdC8vIElFOCB0aHJvd3MgZXJyb3IgaGVyZSBhbmQgd2lsbCBub3Qgc2VlIGxhdGVyIHRlc3RzXG5cdFx0XHRpZiAoICFlbC5xdWVyeVNlbGVjdG9yQWxsKCBcIjpjaGVja2VkXCIgKS5sZW5ndGggKSB7XG5cdFx0XHRcdHJidWdneVFTQS5wdXNoKCBcIjpjaGVja2VkXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU3VwcG9ydDogU2FmYXJpIDgrLCBpT1MgOCtcblx0XHRcdC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzY4NTFcblx0XHRcdC8vIEluLXBhZ2UgYHNlbGVjdG9yI2lkIHNpYmxpbmctY29tYmluYXRvciBzZWxlY3RvcmAgZmFpbHNcblx0XHRcdGlmICggIWVsLnF1ZXJ5U2VsZWN0b3JBbGwoIFwiYSNcIiArIGV4cGFuZG8gKyBcIisqXCIgKS5sZW5ndGggKSB7XG5cdFx0XHRcdHJidWdneVFTQS5wdXNoKCBcIi4jLitbK35dXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU3VwcG9ydDogRmlyZWZveCA8PTMuNiAtIDUgb25seVxuXHRcdFx0Ly8gT2xkIEZpcmVmb3ggZG9lc24ndCB0aHJvdyBvbiBhIGJhZGx5LWVzY2FwZWQgaWRlbnRpZmllci5cblx0XHRcdGVsLnF1ZXJ5U2VsZWN0b3JBbGwoIFwiXFxcXFxcZlwiICk7XG5cdFx0XHRyYnVnZ3lRU0EucHVzaCggXCJbXFxcXHJcXFxcblxcXFxmXVwiICk7XG5cdFx0fSApO1xuXG5cdFx0YXNzZXJ0KCBmdW5jdGlvbiggZWwgKSB7XG5cdFx0XHRlbC5pbm5lckhUTUwgPSBcIjxhIGhyZWY9JycgZGlzYWJsZWQ9J2Rpc2FibGVkJz48L2E+XCIgK1xuXHRcdFx0XHRcIjxzZWxlY3QgZGlzYWJsZWQ9J2Rpc2FibGVkJz48b3B0aW9uLz48L3NlbGVjdD5cIjtcblxuXHRcdFx0Ly8gU3VwcG9ydDogV2luZG93cyA4IE5hdGl2ZSBBcHBzXG5cdFx0XHQvLyBUaGUgdHlwZSBhbmQgbmFtZSBhdHRyaWJ1dGVzIGFyZSByZXN0cmljdGVkIGR1cmluZyAuaW5uZXJIVE1MIGFzc2lnbm1lbnRcblx0XHRcdHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiaW5wdXRcIiApO1xuXHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKCBcInR5cGVcIiwgXCJoaWRkZW5cIiApO1xuXHRcdFx0ZWwuYXBwZW5kQ2hpbGQoIGlucHV0ICkuc2V0QXR0cmlidXRlKCBcIm5hbWVcIiwgXCJEXCIgKTtcblxuXHRcdFx0Ly8gU3VwcG9ydDogSUU4XG5cdFx0XHQvLyBFbmZvcmNlIGNhc2Utc2Vuc2l0aXZpdHkgb2YgbmFtZSBhdHRyaWJ1dGVcblx0XHRcdGlmICggZWwucXVlcnlTZWxlY3RvckFsbCggXCJbbmFtZT1kXVwiICkubGVuZ3RoICkge1xuXHRcdFx0XHRyYnVnZ3lRU0EucHVzaCggXCJuYW1lXCIgKyB3aGl0ZXNwYWNlICsgXCIqWypeJHwhfl0/PVwiICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZGIDMuNSAtIDplbmFibGVkLzpkaXNhYmxlZCBhbmQgaGlkZGVuIGVsZW1lbnRzIChoaWRkZW4gZWxlbWVudHMgYXJlIHN0aWxsIGVuYWJsZWQpXG5cdFx0XHQvLyBJRTggdGhyb3dzIGVycm9yIGhlcmUgYW5kIHdpbGwgbm90IHNlZSBsYXRlciB0ZXN0c1xuXHRcdFx0aWYgKCBlbC5xdWVyeVNlbGVjdG9yQWxsKCBcIjplbmFibGVkXCIgKS5sZW5ndGggIT09IDIgKSB7XG5cdFx0XHRcdHJidWdneVFTQS5wdXNoKCBcIjplbmFibGVkXCIsIFwiOmRpc2FibGVkXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU3VwcG9ydDogSUU5LTExK1xuXHRcdFx0Ly8gSUUncyA6ZGlzYWJsZWQgc2VsZWN0b3IgZG9lcyBub3QgcGljayB1cCB0aGUgY2hpbGRyZW4gb2YgZGlzYWJsZWQgZmllbGRzZXRzXG5cdFx0XHRkb2NFbGVtLmFwcGVuZENoaWxkKCBlbCApLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdGlmICggZWwucXVlcnlTZWxlY3RvckFsbCggXCI6ZGlzYWJsZWRcIiApLmxlbmd0aCAhPT0gMiApIHtcblx0XHRcdFx0cmJ1Z2d5UVNBLnB1c2goIFwiOmVuYWJsZWRcIiwgXCI6ZGlzYWJsZWRcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTdXBwb3J0OiBPcGVyYSAxMCAtIDExIG9ubHlcblx0XHRcdC8vIE9wZXJhIDEwLTExIGRvZXMgbm90IHRocm93IG9uIHBvc3QtY29tbWEgaW52YWxpZCBwc2V1ZG9zXG5cdFx0XHRlbC5xdWVyeVNlbGVjdG9yQWxsKCBcIiosOnhcIiApO1xuXHRcdFx0cmJ1Z2d5UVNBLnB1c2goIFwiLC4qOlwiICk7XG5cdFx0fSApO1xuXHR9XG5cblx0aWYgKCAoIHN1cHBvcnQubWF0Y2hlc1NlbGVjdG9yID0gcm5hdGl2ZS50ZXN0KCAoIG1hdGNoZXMgPSBkb2NFbGVtLm1hdGNoZXMgfHxcblx0XHRkb2NFbGVtLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fFxuXHRcdGRvY0VsZW0ubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG5cdFx0ZG9jRWxlbS5vTWF0Y2hlc1NlbGVjdG9yIHx8XG5cdFx0ZG9jRWxlbS5tc01hdGNoZXNTZWxlY3RvciApICkgKSApIHtcblxuXHRcdGFzc2VydCggZnVuY3Rpb24oIGVsICkge1xuXG5cdFx0XHQvLyBDaGVjayB0byBzZWUgaWYgaXQncyBwb3NzaWJsZSB0byBkbyBtYXRjaGVzU2VsZWN0b3Jcblx0XHRcdC8vIG9uIGEgZGlzY29ubmVjdGVkIG5vZGUgKElFIDkpXG5cdFx0XHRzdXBwb3J0LmRpc2Nvbm5lY3RlZE1hdGNoID0gbWF0Y2hlcy5jYWxsKCBlbCwgXCIqXCIgKTtcblxuXHRcdFx0Ly8gVGhpcyBzaG91bGQgZmFpbCB3aXRoIGFuIGV4Y2VwdGlvblxuXHRcdFx0Ly8gR2Vja28gZG9lcyBub3QgZXJyb3IsIHJldHVybnMgZmFsc2UgaW5zdGVhZFxuXHRcdFx0bWF0Y2hlcy5jYWxsKCBlbCwgXCJbcyE9JyddOnhcIiApO1xuXHRcdFx0cmJ1Z2d5TWF0Y2hlcy5wdXNoKCBcIiE9XCIsIHBzZXVkb3MgKTtcblx0XHR9ICk7XG5cdH1cblxuXHRyYnVnZ3lRU0EgPSByYnVnZ3lRU0EubGVuZ3RoICYmIG5ldyBSZWdFeHAoIHJidWdneVFTQS5qb2luKCBcInxcIiApICk7XG5cdHJidWdneU1hdGNoZXMgPSByYnVnZ3lNYXRjaGVzLmxlbmd0aCAmJiBuZXcgUmVnRXhwKCByYnVnZ3lNYXRjaGVzLmpvaW4oIFwifFwiICkgKTtcblxuXHQvKiBDb250YWluc1xuXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cdGhhc0NvbXBhcmUgPSBybmF0aXZlLnRlc3QoIGRvY0VsZW0uY29tcGFyZURvY3VtZW50UG9zaXRpb24gKTtcblxuXHQvLyBFbGVtZW50IGNvbnRhaW5zIGFub3RoZXJcblx0Ly8gUHVycG9zZWZ1bGx5IHNlbGYtZXhjbHVzaXZlXG5cdC8vIEFzIGluLCBhbiBlbGVtZW50IGRvZXMgbm90IGNvbnRhaW4gaXRzZWxmXG5cdGNvbnRhaW5zID0gaGFzQ29tcGFyZSB8fCBybmF0aXZlLnRlc3QoIGRvY0VsZW0uY29udGFpbnMgKSA/XG5cdFx0ZnVuY3Rpb24oIGEsIGIgKSB7XG5cdFx0XHR2YXIgYWRvd24gPSBhLm5vZGVUeXBlID09PSA5ID8gYS5kb2N1bWVudEVsZW1lbnQgOiBhLFxuXHRcdFx0XHRidXAgPSBiICYmIGIucGFyZW50Tm9kZTtcblx0XHRcdHJldHVybiBhID09PSBidXAgfHwgISEoIGJ1cCAmJiBidXAubm9kZVR5cGUgPT09IDEgJiYgKFxuXHRcdFx0XHRhZG93bi5jb250YWlucyA/XG5cdFx0XHRcdFx0YWRvd24uY29udGFpbnMoIGJ1cCApIDpcblx0XHRcdFx0XHRhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uICYmIGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oIGJ1cCApICYgMTZcblx0XHRcdCkgKTtcblx0XHR9IDpcblx0XHRmdW5jdGlvbiggYSwgYiApIHtcblx0XHRcdGlmICggYiApIHtcblx0XHRcdFx0d2hpbGUgKCAoIGIgPSBiLnBhcmVudE5vZGUgKSApIHtcblx0XHRcdFx0XHRpZiAoIGIgPT09IGEgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9O1xuXG5cdC8qIFNvcnRpbmdcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5cdC8vIERvY3VtZW50IG9yZGVyIHNvcnRpbmdcblx0c29ydE9yZGVyID0gaGFzQ29tcGFyZSA/XG5cdGZ1bmN0aW9uKCBhLCBiICkge1xuXG5cdFx0Ly8gRmxhZyBmb3IgZHVwbGljYXRlIHJlbW92YWxcblx0XHRpZiAoIGEgPT09IGIgKSB7XG5cdFx0XHRoYXNEdXBsaWNhdGUgPSB0cnVlO1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0Ly8gU29ydCBvbiBtZXRob2QgZXhpc3RlbmNlIGlmIG9ubHkgb25lIGlucHV0IGhhcyBjb21wYXJlRG9jdW1lbnRQb3NpdGlvblxuXHRcdHZhciBjb21wYXJlID0gIWEuY29tcGFyZURvY3VtZW50UG9zaXRpb24gLSAhYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbjtcblx0XHRpZiAoIGNvbXBhcmUgKSB7XG5cdFx0XHRyZXR1cm4gY29tcGFyZTtcblx0XHR9XG5cblx0XHQvLyBDYWxjdWxhdGUgcG9zaXRpb24gaWYgYm90aCBpbnB1dHMgYmVsb25nIHRvIHRoZSBzYW1lIGRvY3VtZW50XG5cdFx0Ly8gU3VwcG9ydDogSUUgMTErLCBFZGdlIDE3IC0gMTgrXG5cdFx0Ly8gSUUvRWRnZSBzb21ldGltZXMgdGhyb3cgYSBcIlBlcm1pc3Npb24gZGVuaWVkXCIgZXJyb3Igd2hlbiBzdHJpY3QtY29tcGFyaW5nXG5cdFx0Ly8gdHdvIGRvY3VtZW50czsgc2hhbGxvdyBjb21wYXJpc29ucyB3b3JrLlxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcblx0XHRjb21wYXJlID0gKCBhLm93bmVyRG9jdW1lbnQgfHwgYSApID09ICggYi5vd25lckRvY3VtZW50IHx8IGIgKSA/XG5cdFx0XHRhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKCBiICkgOlxuXG5cdFx0XHQvLyBPdGhlcndpc2Ugd2Uga25vdyB0aGV5IGFyZSBkaXNjb25uZWN0ZWRcblx0XHRcdDE7XG5cblx0XHQvLyBEaXNjb25uZWN0ZWQgbm9kZXNcblx0XHRpZiAoIGNvbXBhcmUgJiAxIHx8XG5cdFx0XHQoICFzdXBwb3J0LnNvcnREZXRhY2hlZCAmJiBiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKCBhICkgPT09IGNvbXBhcmUgKSApIHtcblxuXHRcdFx0Ly8gQ2hvb3NlIHRoZSBmaXJzdCBlbGVtZW50IHRoYXQgaXMgcmVsYXRlZCB0byBvdXIgcHJlZmVycmVkIGRvY3VtZW50XG5cdFx0XHQvLyBTdXBwb3J0OiBJRSAxMSssIEVkZ2UgMTcgLSAxOCtcblx0XHRcdC8vIElFL0VkZ2Ugc29tZXRpbWVzIHRocm93IGEgXCJQZXJtaXNzaW9uIGRlbmllZFwiIGVycm9yIHdoZW4gc3RyaWN0LWNvbXBhcmluZ1xuXHRcdFx0Ly8gdHdvIGRvY3VtZW50czsgc2hhbGxvdyBjb21wYXJpc29ucyB3b3JrLlxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuXHRcdFx0aWYgKCBhID09IGRvY3VtZW50IHx8IGEub3duZXJEb2N1bWVudCA9PSBwcmVmZXJyZWREb2MgJiZcblx0XHRcdFx0Y29udGFpbnMoIHByZWZlcnJlZERvYywgYSApICkge1xuXHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFN1cHBvcnQ6IElFIDExKywgRWRnZSAxNyAtIDE4K1xuXHRcdFx0Ly8gSUUvRWRnZSBzb21ldGltZXMgdGhyb3cgYSBcIlBlcm1pc3Npb24gZGVuaWVkXCIgZXJyb3Igd2hlbiBzdHJpY3QtY29tcGFyaW5nXG5cdFx0XHQvLyB0d28gZG9jdW1lbnRzOyBzaGFsbG93IGNvbXBhcmlzb25zIHdvcmsuXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG5cdFx0XHRpZiAoIGIgPT0gZG9jdW1lbnQgfHwgYi5vd25lckRvY3VtZW50ID09IHByZWZlcnJlZERvYyAmJlxuXHRcdFx0XHRjb250YWlucyggcHJlZmVycmVkRG9jLCBiICkgKSB7XG5cdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBNYWludGFpbiBvcmlnaW5hbCBvcmRlclxuXHRcdFx0cmV0dXJuIHNvcnRJbnB1dCA/XG5cdFx0XHRcdCggaW5kZXhPZiggc29ydElucHV0LCBhICkgLSBpbmRleE9mKCBzb3J0SW5wdXQsIGIgKSApIDpcblx0XHRcdFx0MDtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29tcGFyZSAmIDQgPyAtMSA6IDE7XG5cdH0gOlxuXHRmdW5jdGlvbiggYSwgYiApIHtcblxuXHRcdC8vIEV4aXQgZWFybHkgaWYgdGhlIG5vZGVzIGFyZSBpZGVudGljYWxcblx0XHRpZiAoIGEgPT09IGIgKSB7XG5cdFx0XHRoYXNEdXBsaWNhdGUgPSB0cnVlO1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0dmFyIGN1cixcblx0XHRcdGkgPSAwLFxuXHRcdFx0YXVwID0gYS5wYXJlbnROb2RlLFxuXHRcdFx0YnVwID0gYi5wYXJlbnROb2RlLFxuXHRcdFx0YXAgPSBbIGEgXSxcblx0XHRcdGJwID0gWyBiIF07XG5cblx0XHQvLyBQYXJlbnRsZXNzIG5vZGVzIGFyZSBlaXRoZXIgZG9jdW1lbnRzIG9yIGRpc2Nvbm5lY3RlZFxuXHRcdGlmICggIWF1cCB8fCAhYnVwICkge1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRSAxMSssIEVkZ2UgMTcgLSAxOCtcblx0XHRcdC8vIElFL0VkZ2Ugc29tZXRpbWVzIHRocm93IGEgXCJQZXJtaXNzaW9uIGRlbmllZFwiIGVycm9yIHdoZW4gc3RyaWN0LWNvbXBhcmluZ1xuXHRcdFx0Ly8gdHdvIGRvY3VtZW50czsgc2hhbGxvdyBjb21wYXJpc29ucyB3b3JrLlxuXHRcdFx0LyogZXNsaW50LWRpc2FibGUgZXFlcWVxICovXG5cdFx0XHRyZXR1cm4gYSA9PSBkb2N1bWVudCA/IC0xIDpcblx0XHRcdFx0YiA9PSBkb2N1bWVudCA/IDEgOlxuXHRcdFx0XHQvKiBlc2xpbnQtZW5hYmxlIGVxZXFlcSAqL1xuXHRcdFx0XHRhdXAgPyAtMSA6XG5cdFx0XHRcdGJ1cCA/IDEgOlxuXHRcdFx0XHRzb3J0SW5wdXQgP1xuXHRcdFx0XHQoIGluZGV4T2YoIHNvcnRJbnB1dCwgYSApIC0gaW5kZXhPZiggc29ydElucHV0LCBiICkgKSA6XG5cdFx0XHRcdDA7XG5cblx0XHQvLyBJZiB0aGUgbm9kZXMgYXJlIHNpYmxpbmdzLCB3ZSBjYW4gZG8gYSBxdWljayBjaGVja1xuXHRcdH0gZWxzZSBpZiAoIGF1cCA9PT0gYnVwICkge1xuXHRcdFx0cmV0dXJuIHNpYmxpbmdDaGVjayggYSwgYiApO1xuXHRcdH1cblxuXHRcdC8vIE90aGVyd2lzZSB3ZSBuZWVkIGZ1bGwgbGlzdHMgb2YgdGhlaXIgYW5jZXN0b3JzIGZvciBjb21wYXJpc29uXG5cdFx0Y3VyID0gYTtcblx0XHR3aGlsZSAoICggY3VyID0gY3VyLnBhcmVudE5vZGUgKSApIHtcblx0XHRcdGFwLnVuc2hpZnQoIGN1ciApO1xuXHRcdH1cblx0XHRjdXIgPSBiO1xuXHRcdHdoaWxlICggKCBjdXIgPSBjdXIucGFyZW50Tm9kZSApICkge1xuXHRcdFx0YnAudW5zaGlmdCggY3VyICk7XG5cdFx0fVxuXG5cdFx0Ly8gV2FsayBkb3duIHRoZSB0cmVlIGxvb2tpbmcgZm9yIGEgZGlzY3JlcGFuY3lcblx0XHR3aGlsZSAoIGFwWyBpIF0gPT09IGJwWyBpIF0gKSB7XG5cdFx0XHRpKys7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGkgP1xuXG5cdFx0XHQvLyBEbyBhIHNpYmxpbmcgY2hlY2sgaWYgdGhlIG5vZGVzIGhhdmUgYSBjb21tb24gYW5jZXN0b3Jcblx0XHRcdHNpYmxpbmdDaGVjayggYXBbIGkgXSwgYnBbIGkgXSApIDpcblxuXHRcdFx0Ly8gT3RoZXJ3aXNlIG5vZGVzIGluIG91ciBkb2N1bWVudCBzb3J0IGZpcnN0XG5cdFx0XHQvLyBTdXBwb3J0OiBJRSAxMSssIEVkZ2UgMTcgLSAxOCtcblx0XHRcdC8vIElFL0VkZ2Ugc29tZXRpbWVzIHRocm93IGEgXCJQZXJtaXNzaW9uIGRlbmllZFwiIGVycm9yIHdoZW4gc3RyaWN0LWNvbXBhcmluZ1xuXHRcdFx0Ly8gdHdvIGRvY3VtZW50czsgc2hhbGxvdyBjb21wYXJpc29ucyB3b3JrLlxuXHRcdFx0LyogZXNsaW50LWRpc2FibGUgZXFlcWVxICovXG5cdFx0XHRhcFsgaSBdID09IHByZWZlcnJlZERvYyA/IC0xIDpcblx0XHRcdGJwWyBpIF0gPT0gcHJlZmVycmVkRG9jID8gMSA6XG5cdFx0XHQvKiBlc2xpbnQtZW5hYmxlIGVxZXFlcSAqL1xuXHRcdFx0MDtcblx0fTtcblxuXHRyZXR1cm4gZG9jdW1lbnQ7XG59O1xuXG5TaXp6bGUubWF0Y2hlcyA9IGZ1bmN0aW9uKCBleHByLCBlbGVtZW50cyApIHtcblx0cmV0dXJuIFNpenpsZSggZXhwciwgbnVsbCwgbnVsbCwgZWxlbWVudHMgKTtcbn07XG5cblNpenpsZS5tYXRjaGVzU2VsZWN0b3IgPSBmdW5jdGlvbiggZWxlbSwgZXhwciApIHtcblx0c2V0RG9jdW1lbnQoIGVsZW0gKTtcblxuXHRpZiAoIHN1cHBvcnQubWF0Y2hlc1NlbGVjdG9yICYmIGRvY3VtZW50SXNIVE1MICYmXG5cdFx0IW5vbm5hdGl2ZVNlbGVjdG9yQ2FjaGVbIGV4cHIgKyBcIiBcIiBdICYmXG5cdFx0KCAhcmJ1Z2d5TWF0Y2hlcyB8fCAhcmJ1Z2d5TWF0Y2hlcy50ZXN0KCBleHByICkgKSAmJlxuXHRcdCggIXJidWdneVFTQSAgICAgfHwgIXJidWdneVFTQS50ZXN0KCBleHByICkgKSApIHtcblxuXHRcdHRyeSB7XG5cdFx0XHR2YXIgcmV0ID0gbWF0Y2hlcy5jYWxsKCBlbGVtLCBleHByICk7XG5cblx0XHRcdC8vIElFIDkncyBtYXRjaGVzU2VsZWN0b3IgcmV0dXJucyBmYWxzZSBvbiBkaXNjb25uZWN0ZWQgbm9kZXNcblx0XHRcdGlmICggcmV0IHx8IHN1cHBvcnQuZGlzY29ubmVjdGVkTWF0Y2ggfHxcblxuXHRcdFx0XHQvLyBBcyB3ZWxsLCBkaXNjb25uZWN0ZWQgbm9kZXMgYXJlIHNhaWQgdG8gYmUgaW4gYSBkb2N1bWVudFxuXHRcdFx0XHQvLyBmcmFnbWVudCBpbiBJRSA5XG5cdFx0XHRcdGVsZW0uZG9jdW1lbnQgJiYgZWxlbS5kb2N1bWVudC5ub2RlVHlwZSAhPT0gMTEgKSB7XG5cdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoIGUgKSB7XG5cdFx0XHRub25uYXRpdmVTZWxlY3RvckNhY2hlKCBleHByLCB0cnVlICk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIFNpenpsZSggZXhwciwgZG9jdW1lbnQsIG51bGwsIFsgZWxlbSBdICkubGVuZ3RoID4gMDtcbn07XG5cblNpenpsZS5jb250YWlucyA9IGZ1bmN0aW9uKCBjb250ZXh0LCBlbGVtICkge1xuXG5cdC8vIFNldCBkb2N1bWVudCB2YXJzIGlmIG5lZWRlZFxuXHQvLyBTdXBwb3J0OiBJRSAxMSssIEVkZ2UgMTcgLSAxOCtcblx0Ly8gSUUvRWRnZSBzb21ldGltZXMgdGhyb3cgYSBcIlBlcm1pc3Npb24gZGVuaWVkXCIgZXJyb3Igd2hlbiBzdHJpY3QtY29tcGFyaW5nXG5cdC8vIHR3byBkb2N1bWVudHM7IHNoYWxsb3cgY29tcGFyaXNvbnMgd29yay5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuXHRpZiAoICggY29udGV4dC5vd25lckRvY3VtZW50IHx8IGNvbnRleHQgKSAhPSBkb2N1bWVudCApIHtcblx0XHRzZXREb2N1bWVudCggY29udGV4dCApO1xuXHR9XG5cdHJldHVybiBjb250YWlucyggY29udGV4dCwgZWxlbSApO1xufTtcblxuU2l6emxlLmF0dHIgPSBmdW5jdGlvbiggZWxlbSwgbmFtZSApIHtcblxuXHQvLyBTZXQgZG9jdW1lbnQgdmFycyBpZiBuZWVkZWRcblx0Ly8gU3VwcG9ydDogSUUgMTErLCBFZGdlIDE3IC0gMTgrXG5cdC8vIElFL0VkZ2Ugc29tZXRpbWVzIHRocm93IGEgXCJQZXJtaXNzaW9uIGRlbmllZFwiIGVycm9yIHdoZW4gc3RyaWN0LWNvbXBhcmluZ1xuXHQvLyB0d28gZG9jdW1lbnRzOyBzaGFsbG93IGNvbXBhcmlzb25zIHdvcmsuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcblx0aWYgKCAoIGVsZW0ub3duZXJEb2N1bWVudCB8fCBlbGVtICkgIT0gZG9jdW1lbnQgKSB7XG5cdFx0c2V0RG9jdW1lbnQoIGVsZW0gKTtcblx0fVxuXG5cdHZhciBmbiA9IEV4cHIuYXR0ckhhbmRsZVsgbmFtZS50b0xvd2VyQ2FzZSgpIF0sXG5cblx0XHQvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IE9iamVjdC5wcm90b3R5cGUgcHJvcGVydGllcyAoalF1ZXJ5ICMxMzgwNylcblx0XHR2YWwgPSBmbiAmJiBoYXNPd24uY2FsbCggRXhwci5hdHRySGFuZGxlLCBuYW1lLnRvTG93ZXJDYXNlKCkgKSA/XG5cdFx0XHRmbiggZWxlbSwgbmFtZSwgIWRvY3VtZW50SXNIVE1MICkgOlxuXHRcdFx0dW5kZWZpbmVkO1xuXG5cdHJldHVybiB2YWwgIT09IHVuZGVmaW5lZCA/XG5cdFx0dmFsIDpcblx0XHRzdXBwb3J0LmF0dHJpYnV0ZXMgfHwgIWRvY3VtZW50SXNIVE1MID9cblx0XHRcdGVsZW0uZ2V0QXR0cmlidXRlKCBuYW1lICkgOlxuXHRcdFx0KCB2YWwgPSBlbGVtLmdldEF0dHJpYnV0ZU5vZGUoIG5hbWUgKSApICYmIHZhbC5zcGVjaWZpZWQgP1xuXHRcdFx0XHR2YWwudmFsdWUgOlxuXHRcdFx0XHRudWxsO1xufTtcblxuU2l6emxlLmVzY2FwZSA9IGZ1bmN0aW9uKCBzZWwgKSB7XG5cdHJldHVybiAoIHNlbCArIFwiXCIgKS5yZXBsYWNlKCByY3NzZXNjYXBlLCBmY3NzZXNjYXBlICk7XG59O1xuXG5TaXp6bGUuZXJyb3IgPSBmdW5jdGlvbiggbXNnICkge1xuXHR0aHJvdyBuZXcgRXJyb3IoIFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIgKyBtc2cgKTtcbn07XG5cbi8qKlxuICogRG9jdW1lbnQgc29ydGluZyBhbmQgcmVtb3ZpbmcgZHVwbGljYXRlc1xuICogQHBhcmFtIHtBcnJheUxpa2V9IHJlc3VsdHNcbiAqL1xuU2l6emxlLnVuaXF1ZVNvcnQgPSBmdW5jdGlvbiggcmVzdWx0cyApIHtcblx0dmFyIGVsZW0sXG5cdFx0ZHVwbGljYXRlcyA9IFtdLFxuXHRcdGogPSAwLFxuXHRcdGkgPSAwO1xuXG5cdC8vIFVubGVzcyB3ZSAqa25vdyogd2UgY2FuIGRldGVjdCBkdXBsaWNhdGVzLCBhc3N1bWUgdGhlaXIgcHJlc2VuY2Vcblx0aGFzRHVwbGljYXRlID0gIXN1cHBvcnQuZGV0ZWN0RHVwbGljYXRlcztcblx0c29ydElucHV0ID0gIXN1cHBvcnQuc29ydFN0YWJsZSAmJiByZXN1bHRzLnNsaWNlKCAwICk7XG5cdHJlc3VsdHMuc29ydCggc29ydE9yZGVyICk7XG5cblx0aWYgKCBoYXNEdXBsaWNhdGUgKSB7XG5cdFx0d2hpbGUgKCAoIGVsZW0gPSByZXN1bHRzWyBpKysgXSApICkge1xuXHRcdFx0aWYgKCBlbGVtID09PSByZXN1bHRzWyBpIF0gKSB7XG5cdFx0XHRcdGogPSBkdXBsaWNhdGVzLnB1c2goIGkgKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0d2hpbGUgKCBqLS0gKSB7XG5cdFx0XHRyZXN1bHRzLnNwbGljZSggZHVwbGljYXRlc1sgaiBdLCAxICk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ2xlYXIgaW5wdXQgYWZ0ZXIgc29ydGluZyB0byByZWxlYXNlIG9iamVjdHNcblx0Ly8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvc2l6emxlL3B1bGwvMjI1XG5cdHNvcnRJbnB1dCA9IG51bGw7XG5cblx0cmV0dXJuIHJlc3VsdHM7XG59O1xuXG4vKipcbiAqIFV0aWxpdHkgZnVuY3Rpb24gZm9yIHJldHJpZXZpbmcgdGhlIHRleHQgdmFsdWUgb2YgYW4gYXJyYXkgb2YgRE9NIG5vZGVzXG4gKiBAcGFyYW0ge0FycmF5fEVsZW1lbnR9IGVsZW1cbiAqL1xuZ2V0VGV4dCA9IFNpenpsZS5nZXRUZXh0ID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdHZhciBub2RlLFxuXHRcdHJldCA9IFwiXCIsXG5cdFx0aSA9IDAsXG5cdFx0bm9kZVR5cGUgPSBlbGVtLm5vZGVUeXBlO1xuXG5cdGlmICggIW5vZGVUeXBlICkge1xuXG5cdFx0Ly8gSWYgbm8gbm9kZVR5cGUsIHRoaXMgaXMgZXhwZWN0ZWQgdG8gYmUgYW4gYXJyYXlcblx0XHR3aGlsZSAoICggbm9kZSA9IGVsZW1bIGkrKyBdICkgKSB7XG5cblx0XHRcdC8vIERvIG5vdCB0cmF2ZXJzZSBjb21tZW50IG5vZGVzXG5cdFx0XHRyZXQgKz0gZ2V0VGV4dCggbm9kZSApO1xuXHRcdH1cblx0fSBlbHNlIGlmICggbm9kZVR5cGUgPT09IDEgfHwgbm9kZVR5cGUgPT09IDkgfHwgbm9kZVR5cGUgPT09IDExICkge1xuXG5cdFx0Ly8gVXNlIHRleHRDb250ZW50IGZvciBlbGVtZW50c1xuXHRcdC8vIGlubmVyVGV4dCB1c2FnZSByZW1vdmVkIGZvciBjb25zaXN0ZW5jeSBvZiBuZXcgbGluZXMgKGpRdWVyeSAjMTExNTMpXG5cdFx0aWYgKCB0eXBlb2YgZWxlbS50ZXh0Q29udGVudCA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdHJldHVybiBlbGVtLnRleHRDb250ZW50O1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vIFRyYXZlcnNlIGl0cyBjaGlsZHJlblxuXHRcdFx0Zm9yICggZWxlbSA9IGVsZW0uZmlyc3RDaGlsZDsgZWxlbTsgZWxlbSA9IGVsZW0ubmV4dFNpYmxpbmcgKSB7XG5cdFx0XHRcdHJldCArPSBnZXRUZXh0KCBlbGVtICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2UgaWYgKCBub2RlVHlwZSA9PT0gMyB8fCBub2RlVHlwZSA9PT0gNCApIHtcblx0XHRyZXR1cm4gZWxlbS5ub2RlVmFsdWU7XG5cdH1cblxuXHQvLyBEbyBub3QgaW5jbHVkZSBjb21tZW50IG9yIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb24gbm9kZXNcblxuXHRyZXR1cm4gcmV0O1xufTtcblxuRXhwciA9IFNpenpsZS5zZWxlY3RvcnMgPSB7XG5cblx0Ly8gQ2FuIGJlIGFkanVzdGVkIGJ5IHRoZSB1c2VyXG5cdGNhY2hlTGVuZ3RoOiA1MCxcblxuXHRjcmVhdGVQc2V1ZG86IG1hcmtGdW5jdGlvbixcblxuXHRtYXRjaDogbWF0Y2hFeHByLFxuXG5cdGF0dHJIYW5kbGU6IHt9LFxuXG5cdGZpbmQ6IHt9LFxuXG5cdHJlbGF0aXZlOiB7XG5cdFx0XCI+XCI6IHsgZGlyOiBcInBhcmVudE5vZGVcIiwgZmlyc3Q6IHRydWUgfSxcblx0XHRcIiBcIjogeyBkaXI6IFwicGFyZW50Tm9kZVwiIH0sXG5cdFx0XCIrXCI6IHsgZGlyOiBcInByZXZpb3VzU2libGluZ1wiLCBmaXJzdDogdHJ1ZSB9LFxuXHRcdFwiflwiOiB7IGRpcjogXCJwcmV2aW91c1NpYmxpbmdcIiB9XG5cdH0sXG5cblx0cHJlRmlsdGVyOiB7XG5cdFx0XCJBVFRSXCI6IGZ1bmN0aW9uKCBtYXRjaCApIHtcblx0XHRcdG1hdGNoWyAxIF0gPSBtYXRjaFsgMSBdLnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICk7XG5cblx0XHRcdC8vIE1vdmUgdGhlIGdpdmVuIHZhbHVlIHRvIG1hdGNoWzNdIHdoZXRoZXIgcXVvdGVkIG9yIHVucXVvdGVkXG5cdFx0XHRtYXRjaFsgMyBdID0gKCBtYXRjaFsgMyBdIHx8IG1hdGNoWyA0IF0gfHxcblx0XHRcdFx0bWF0Y2hbIDUgXSB8fCBcIlwiICkucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKTtcblxuXHRcdFx0aWYgKCBtYXRjaFsgMiBdID09PSBcIn49XCIgKSB7XG5cdFx0XHRcdG1hdGNoWyAzIF0gPSBcIiBcIiArIG1hdGNoWyAzIF0gKyBcIiBcIjtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG1hdGNoLnNsaWNlKCAwLCA0ICk7XG5cdFx0fSxcblxuXHRcdFwiQ0hJTERcIjogZnVuY3Rpb24oIG1hdGNoICkge1xuXG5cdFx0XHQvKiBtYXRjaGVzIGZyb20gbWF0Y2hFeHByW1wiQ0hJTERcIl1cblx0XHRcdFx0MSB0eXBlIChvbmx5fG50aHwuLi4pXG5cdFx0XHRcdDIgd2hhdCAoY2hpbGR8b2YtdHlwZSlcblx0XHRcdFx0MyBhcmd1bWVudCAoZXZlbnxvZGR8XFxkKnxcXGQqbihbKy1dXFxkKyk/fC4uLilcblx0XHRcdFx0NCB4bi1jb21wb25lbnQgb2YgeG4reSBhcmd1bWVudCAoWystXT9cXGQqbnwpXG5cdFx0XHRcdDUgc2lnbiBvZiB4bi1jb21wb25lbnRcblx0XHRcdFx0NiB4IG9mIHhuLWNvbXBvbmVudFxuXHRcdFx0XHQ3IHNpZ24gb2YgeS1jb21wb25lbnRcblx0XHRcdFx0OCB5IG9mIHktY29tcG9uZW50XG5cdFx0XHQqL1xuXHRcdFx0bWF0Y2hbIDEgXSA9IG1hdGNoWyAxIF0udG9Mb3dlckNhc2UoKTtcblxuXHRcdFx0aWYgKCBtYXRjaFsgMSBdLnNsaWNlKCAwLCAzICkgPT09IFwibnRoXCIgKSB7XG5cblx0XHRcdFx0Ly8gbnRoLSogcmVxdWlyZXMgYXJndW1lbnRcblx0XHRcdFx0aWYgKCAhbWF0Y2hbIDMgXSApIHtcblx0XHRcdFx0XHRTaXp6bGUuZXJyb3IoIG1hdGNoWyAwIF0gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIG51bWVyaWMgeCBhbmQgeSBwYXJhbWV0ZXJzIGZvciBFeHByLmZpbHRlci5DSElMRFxuXHRcdFx0XHQvLyByZW1lbWJlciB0aGF0IGZhbHNlL3RydWUgY2FzdCByZXNwZWN0aXZlbHkgdG8gMC8xXG5cdFx0XHRcdG1hdGNoWyA0IF0gPSArKCBtYXRjaFsgNCBdID9cblx0XHRcdFx0XHRtYXRjaFsgNSBdICsgKCBtYXRjaFsgNiBdIHx8IDEgKSA6XG5cdFx0XHRcdFx0MiAqICggbWF0Y2hbIDMgXSA9PT0gXCJldmVuXCIgfHwgbWF0Y2hbIDMgXSA9PT0gXCJvZGRcIiApICk7XG5cdFx0XHRcdG1hdGNoWyA1IF0gPSArKCAoIG1hdGNoWyA3IF0gKyBtYXRjaFsgOCBdICkgfHwgbWF0Y2hbIDMgXSA9PT0gXCJvZGRcIiApO1xuXG5cdFx0XHRcdC8vIG90aGVyIHR5cGVzIHByb2hpYml0IGFyZ3VtZW50c1xuXHRcdFx0fSBlbHNlIGlmICggbWF0Y2hbIDMgXSApIHtcblx0XHRcdFx0U2l6emxlLmVycm9yKCBtYXRjaFsgMCBdICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBtYXRjaDtcblx0XHR9LFxuXG5cdFx0XCJQU0VVRE9cIjogZnVuY3Rpb24oIG1hdGNoICkge1xuXHRcdFx0dmFyIGV4Y2Vzcyxcblx0XHRcdFx0dW5xdW90ZWQgPSAhbWF0Y2hbIDYgXSAmJiBtYXRjaFsgMiBdO1xuXG5cdFx0XHRpZiAoIG1hdGNoRXhwclsgXCJDSElMRFwiIF0udGVzdCggbWF0Y2hbIDAgXSApICkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWNjZXB0IHF1b3RlZCBhcmd1bWVudHMgYXMtaXNcblx0XHRcdGlmICggbWF0Y2hbIDMgXSApIHtcblx0XHRcdFx0bWF0Y2hbIDIgXSA9IG1hdGNoWyA0IF0gfHwgbWF0Y2hbIDUgXSB8fCBcIlwiO1xuXG5cdFx0XHQvLyBTdHJpcCBleGNlc3MgY2hhcmFjdGVycyBmcm9tIHVucXVvdGVkIGFyZ3VtZW50c1xuXHRcdFx0fSBlbHNlIGlmICggdW5xdW90ZWQgJiYgcnBzZXVkby50ZXN0KCB1bnF1b3RlZCApICYmXG5cblx0XHRcdFx0Ly8gR2V0IGV4Y2VzcyBmcm9tIHRva2VuaXplIChyZWN1cnNpdmVseSlcblx0XHRcdFx0KCBleGNlc3MgPSB0b2tlbml6ZSggdW5xdW90ZWQsIHRydWUgKSApICYmXG5cblx0XHRcdFx0Ly8gYWR2YW5jZSB0byB0aGUgbmV4dCBjbG9zaW5nIHBhcmVudGhlc2lzXG5cdFx0XHRcdCggZXhjZXNzID0gdW5xdW90ZWQuaW5kZXhPZiggXCIpXCIsIHVucXVvdGVkLmxlbmd0aCAtIGV4Y2VzcyApIC0gdW5xdW90ZWQubGVuZ3RoICkgKSB7XG5cblx0XHRcdFx0Ly8gZXhjZXNzIGlzIGEgbmVnYXRpdmUgaW5kZXhcblx0XHRcdFx0bWF0Y2hbIDAgXSA9IG1hdGNoWyAwIF0uc2xpY2UoIDAsIGV4Y2VzcyApO1xuXHRcdFx0XHRtYXRjaFsgMiBdID0gdW5xdW90ZWQuc2xpY2UoIDAsIGV4Y2VzcyApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZXR1cm4gb25seSBjYXB0dXJlcyBuZWVkZWQgYnkgdGhlIHBzZXVkbyBmaWx0ZXIgbWV0aG9kICh0eXBlIGFuZCBhcmd1bWVudClcblx0XHRcdHJldHVybiBtYXRjaC5zbGljZSggMCwgMyApO1xuXHRcdH1cblx0fSxcblxuXHRmaWx0ZXI6IHtcblxuXHRcdFwiVEFHXCI6IGZ1bmN0aW9uKCBub2RlTmFtZVNlbGVjdG9yICkge1xuXHRcdFx0dmFyIG5vZGVOYW1lID0gbm9kZU5hbWVTZWxlY3Rvci5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRyZXR1cm4gbm9kZU5hbWVTZWxlY3RvciA9PT0gXCIqXCIgP1xuXHRcdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fSA6XG5cdFx0XHRcdGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHRcdHJldHVybiBlbGVtLm5vZGVOYW1lICYmIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbm9kZU5hbWU7XG5cdFx0XHRcdH07XG5cdFx0fSxcblxuXHRcdFwiQ0xBU1NcIjogZnVuY3Rpb24oIGNsYXNzTmFtZSApIHtcblx0XHRcdHZhciBwYXR0ZXJuID0gY2xhc3NDYWNoZVsgY2xhc3NOYW1lICsgXCIgXCIgXTtcblxuXHRcdFx0cmV0dXJuIHBhdHRlcm4gfHxcblx0XHRcdFx0KCBwYXR0ZXJuID0gbmV3IFJlZ0V4cCggXCIoXnxcIiArIHdoaXRlc3BhY2UgK1xuXHRcdFx0XHRcdFwiKVwiICsgY2xhc3NOYW1lICsgXCIoXCIgKyB3aGl0ZXNwYWNlICsgXCJ8JClcIiApICkgJiYgY2xhc3NDYWNoZShcblx0XHRcdFx0XHRcdGNsYXNzTmFtZSwgZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBwYXR0ZXJuLnRlc3QoXG5cdFx0XHRcdFx0XHRcdFx0dHlwZW9mIGVsZW0uY2xhc3NOYW1lID09PSBcInN0cmluZ1wiICYmIGVsZW0uY2xhc3NOYW1lIHx8XG5cdFx0XHRcdFx0XHRcdFx0dHlwZW9mIGVsZW0uZ2V0QXR0cmlidXRlICE9PSBcInVuZGVmaW5lZFwiICYmXG5cdFx0XHRcdFx0XHRcdFx0XHRlbGVtLmdldEF0dHJpYnV0ZSggXCJjbGFzc1wiICkgfHxcblx0XHRcdFx0XHRcdFx0XHRcIlwiXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gKTtcblx0XHR9LFxuXG5cdFx0XCJBVFRSXCI6IGZ1bmN0aW9uKCBuYW1lLCBvcGVyYXRvciwgY2hlY2sgKSB7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdHZhciByZXN1bHQgPSBTaXp6bGUuYXR0ciggZWxlbSwgbmFtZSApO1xuXG5cdFx0XHRcdGlmICggcmVzdWx0ID09IG51bGwgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9wZXJhdG9yID09PSBcIiE9XCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCAhb3BlcmF0b3IgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXN1bHQgKz0gXCJcIjtcblxuXHRcdFx0XHQvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5cblx0XHRcdFx0cmV0dXJuIG9wZXJhdG9yID09PSBcIj1cIiA/IHJlc3VsdCA9PT0gY2hlY2sgOlxuXHRcdFx0XHRcdG9wZXJhdG9yID09PSBcIiE9XCIgPyByZXN1bHQgIT09IGNoZWNrIDpcblx0XHRcdFx0XHRvcGVyYXRvciA9PT0gXCJePVwiID8gY2hlY2sgJiYgcmVzdWx0LmluZGV4T2YoIGNoZWNrICkgPT09IDAgOlxuXHRcdFx0XHRcdG9wZXJhdG9yID09PSBcIio9XCIgPyBjaGVjayAmJiByZXN1bHQuaW5kZXhPZiggY2hlY2sgKSA+IC0xIDpcblx0XHRcdFx0XHRvcGVyYXRvciA9PT0gXCIkPVwiID8gY2hlY2sgJiYgcmVzdWx0LnNsaWNlKCAtY2hlY2subGVuZ3RoICkgPT09IGNoZWNrIDpcblx0XHRcdFx0XHRvcGVyYXRvciA9PT0gXCJ+PVwiID8gKCBcIiBcIiArIHJlc3VsdC5yZXBsYWNlKCByd2hpdGVzcGFjZSwgXCIgXCIgKSArIFwiIFwiICkuaW5kZXhPZiggY2hlY2sgKSA+IC0xIDpcblx0XHRcdFx0XHRvcGVyYXRvciA9PT0gXCJ8PVwiID8gcmVzdWx0ID09PSBjaGVjayB8fCByZXN1bHQuc2xpY2UoIDAsIGNoZWNrLmxlbmd0aCArIDEgKSA9PT0gY2hlY2sgKyBcIi1cIiA6XG5cdFx0XHRcdFx0ZmFsc2U7XG5cdFx0XHRcdC8qIGVzbGludC1lbmFibGUgbWF4LWxlbiAqL1xuXG5cdFx0XHR9O1xuXHRcdH0sXG5cblx0XHRcIkNISUxEXCI6IGZ1bmN0aW9uKCB0eXBlLCB3aGF0LCBfYXJndW1lbnQsIGZpcnN0LCBsYXN0ICkge1xuXHRcdFx0dmFyIHNpbXBsZSA9IHR5cGUuc2xpY2UoIDAsIDMgKSAhPT0gXCJudGhcIixcblx0XHRcdFx0Zm9yd2FyZCA9IHR5cGUuc2xpY2UoIC00ICkgIT09IFwibGFzdFwiLFxuXHRcdFx0XHRvZlR5cGUgPSB3aGF0ID09PSBcIm9mLXR5cGVcIjtcblxuXHRcdFx0cmV0dXJuIGZpcnN0ID09PSAxICYmIGxhc3QgPT09IDAgP1xuXG5cdFx0XHRcdC8vIFNob3J0Y3V0IGZvciA6bnRoLSoobilcblx0XHRcdFx0ZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdFx0cmV0dXJuICEhZWxlbS5wYXJlbnROb2RlO1xuXHRcdFx0XHR9IDpcblxuXHRcdFx0XHRmdW5jdGlvbiggZWxlbSwgX2NvbnRleHQsIHhtbCApIHtcblx0XHRcdFx0XHR2YXIgY2FjaGUsIHVuaXF1ZUNhY2hlLCBvdXRlckNhY2hlLCBub2RlLCBub2RlSW5kZXgsIHN0YXJ0LFxuXHRcdFx0XHRcdFx0ZGlyID0gc2ltcGxlICE9PSBmb3J3YXJkID8gXCJuZXh0U2libGluZ1wiIDogXCJwcmV2aW91c1NpYmxpbmdcIixcblx0XHRcdFx0XHRcdHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZSxcblx0XHRcdFx0XHRcdG5hbWUgPSBvZlR5cGUgJiYgZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLFxuXHRcdFx0XHRcdFx0dXNlQ2FjaGUgPSAheG1sICYmICFvZlR5cGUsXG5cdFx0XHRcdFx0XHRkaWZmID0gZmFsc2U7XG5cblx0XHRcdFx0XHRpZiAoIHBhcmVudCApIHtcblxuXHRcdFx0XHRcdFx0Ly8gOihmaXJzdHxsYXN0fG9ubHkpLShjaGlsZHxvZi10eXBlKVxuXHRcdFx0XHRcdFx0aWYgKCBzaW1wbGUgKSB7XG5cdFx0XHRcdFx0XHRcdHdoaWxlICggZGlyICkge1xuXHRcdFx0XHRcdFx0XHRcdG5vZGUgPSBlbGVtO1xuXHRcdFx0XHRcdFx0XHRcdHdoaWxlICggKCBub2RlID0gbm9kZVsgZGlyIF0gKSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmICggb2ZUeXBlID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0bm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lIDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0bm9kZS5ub2RlVHlwZSA9PT0gMSApIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gUmV2ZXJzZSBkaXJlY3Rpb24gZm9yIDpvbmx5LSogKGlmIHdlIGhhdmVuJ3QgeWV0IGRvbmUgc28pXG5cdFx0XHRcdFx0XHRcdFx0c3RhcnQgPSBkaXIgPSB0eXBlID09PSBcIm9ubHlcIiAmJiAhc3RhcnQgJiYgXCJuZXh0U2libGluZ1wiO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRzdGFydCA9IFsgZm9yd2FyZCA/IHBhcmVudC5maXJzdENoaWxkIDogcGFyZW50Lmxhc3RDaGlsZCBdO1xuXG5cdFx0XHRcdFx0XHQvLyBub24teG1sIDpudGgtY2hpbGQoLi4uKSBzdG9yZXMgY2FjaGUgZGF0YSBvbiBgcGFyZW50YFxuXHRcdFx0XHRcdFx0aWYgKCBmb3J3YXJkICYmIHVzZUNhY2hlICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIFNlZWsgYGVsZW1gIGZyb20gYSBwcmV2aW91c2x5LWNhY2hlZCBpbmRleFxuXG5cdFx0XHRcdFx0XHRcdC8vIC4uLmluIGEgZ3ppcC1mcmllbmRseSB3YXlcblx0XHRcdFx0XHRcdFx0bm9kZSA9IHBhcmVudDtcblx0XHRcdFx0XHRcdFx0b3V0ZXJDYWNoZSA9IG5vZGVbIGV4cGFuZG8gXSB8fCAoIG5vZGVbIGV4cGFuZG8gXSA9IHt9ICk7XG5cblx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPDkgb25seVxuXHRcdFx0XHRcdFx0XHQvLyBEZWZlbmQgYWdhaW5zdCBjbG9uZWQgYXR0cm9wZXJ0aWVzIChqUXVlcnkgZ2gtMTcwOSlcblx0XHRcdFx0XHRcdFx0dW5pcXVlQ2FjaGUgPSBvdXRlckNhY2hlWyBub2RlLnVuaXF1ZUlEIF0gfHxcblx0XHRcdFx0XHRcdFx0XHQoIG91dGVyQ2FjaGVbIG5vZGUudW5pcXVlSUQgXSA9IHt9ICk7XG5cblx0XHRcdFx0XHRcdFx0Y2FjaGUgPSB1bmlxdWVDYWNoZVsgdHlwZSBdIHx8IFtdO1xuXHRcdFx0XHRcdFx0XHRub2RlSW5kZXggPSBjYWNoZVsgMCBdID09PSBkaXJydW5zICYmIGNhY2hlWyAxIF07XG5cdFx0XHRcdFx0XHRcdGRpZmYgPSBub2RlSW5kZXggJiYgY2FjaGVbIDIgXTtcblx0XHRcdFx0XHRcdFx0bm9kZSA9IG5vZGVJbmRleCAmJiBwYXJlbnQuY2hpbGROb2Rlc1sgbm9kZUluZGV4IF07XG5cblx0XHRcdFx0XHRcdFx0d2hpbGUgKCAoIG5vZGUgPSArK25vZGVJbmRleCAmJiBub2RlICYmIG5vZGVbIGRpciBdIHx8XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBGYWxsYmFjayB0byBzZWVraW5nIGBlbGVtYCBmcm9tIHRoZSBzdGFydFxuXHRcdFx0XHRcdFx0XHRcdCggZGlmZiA9IG5vZGVJbmRleCA9IDAgKSB8fCBzdGFydC5wb3AoKSApICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gV2hlbiBmb3VuZCwgY2FjaGUgaW5kZXhlcyBvbiBgcGFyZW50YCBhbmQgYnJlYWtcblx0XHRcdFx0XHRcdFx0XHRpZiAoIG5vZGUubm9kZVR5cGUgPT09IDEgJiYgKytkaWZmICYmIG5vZGUgPT09IGVsZW0gKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR1bmlxdWVDYWNoZVsgdHlwZSBdID0gWyBkaXJydW5zLCBub2RlSW5kZXgsIGRpZmYgXTtcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdC8vIFVzZSBwcmV2aW91c2x5LWNhY2hlZCBlbGVtZW50IGluZGV4IGlmIGF2YWlsYWJsZVxuXHRcdFx0XHRcdFx0XHRpZiAoIHVzZUNhY2hlICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gLi4uaW4gYSBnemlwLWZyaWVuZGx5IHdheVxuXHRcdFx0XHRcdFx0XHRcdG5vZGUgPSBlbGVtO1xuXHRcdFx0XHRcdFx0XHRcdG91dGVyQ2FjaGUgPSBub2RlWyBleHBhbmRvIF0gfHwgKCBub2RlWyBleHBhbmRvIF0gPSB7fSApO1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPDkgb25seVxuXHRcdFx0XHRcdFx0XHRcdC8vIERlZmVuZCBhZ2FpbnN0IGNsb25lZCBhdHRyb3BlcnRpZXMgKGpRdWVyeSBnaC0xNzA5KVxuXHRcdFx0XHRcdFx0XHRcdHVuaXF1ZUNhY2hlID0gb3V0ZXJDYWNoZVsgbm9kZS51bmlxdWVJRCBdIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHQoIG91dGVyQ2FjaGVbIG5vZGUudW5pcXVlSUQgXSA9IHt9ICk7XG5cblx0XHRcdFx0XHRcdFx0XHRjYWNoZSA9IHVuaXF1ZUNhY2hlWyB0eXBlIF0gfHwgW107XG5cdFx0XHRcdFx0XHRcdFx0bm9kZUluZGV4ID0gY2FjaGVbIDAgXSA9PT0gZGlycnVucyAmJiBjYWNoZVsgMSBdO1xuXHRcdFx0XHRcdFx0XHRcdGRpZmYgPSBub2RlSW5kZXg7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQvLyB4bWwgOm50aC1jaGlsZCguLi4pXG5cdFx0XHRcdFx0XHRcdC8vIG9yIDpudGgtbGFzdC1jaGlsZCguLi4pIG9yIDpudGgoLWxhc3QpPy1vZi10eXBlKC4uLilcblx0XHRcdFx0XHRcdFx0aWYgKCBkaWZmID09PSBmYWxzZSApIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIFVzZSB0aGUgc2FtZSBsb29wIGFzIGFib3ZlIHRvIHNlZWsgYGVsZW1gIGZyb20gdGhlIHN0YXJ0XG5cdFx0XHRcdFx0XHRcdFx0d2hpbGUgKCAoIG5vZGUgPSArK25vZGVJbmRleCAmJiBub2RlICYmIG5vZGVbIGRpciBdIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHQoIGRpZmYgPSBub2RlSW5kZXggPSAwICkgfHwgc3RhcnQucG9wKCkgKSApIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCAoIG9mVHlwZSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZSA6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5vZGUubm9kZVR5cGUgPT09IDEgKSAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQrK2RpZmYgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gQ2FjaGUgdGhlIGluZGV4IG9mIGVhY2ggZW5jb3VudGVyZWQgZWxlbWVudFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIHVzZUNhY2hlICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG91dGVyQ2FjaGUgPSBub2RlWyBleHBhbmRvIF0gfHxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCggbm9kZVsgZXhwYW5kbyBdID0ge30gKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw5IG9ubHlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBEZWZlbmQgYWdhaW5zdCBjbG9uZWQgYXR0cm9wZXJ0aWVzIChqUXVlcnkgZ2gtMTcwOSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1bmlxdWVDYWNoZSA9IG91dGVyQ2FjaGVbIG5vZGUudW5pcXVlSUQgXSB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KCBvdXRlckNhY2hlWyBub2RlLnVuaXF1ZUlEIF0gPSB7fSApO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pcXVlQ2FjaGVbIHR5cGUgXSA9IFsgZGlycnVucywgZGlmZiBdO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBub2RlID09PSBlbGVtICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIEluY29ycG9yYXRlIHRoZSBvZmZzZXQsIHRoZW4gY2hlY2sgYWdhaW5zdCBjeWNsZSBzaXplXG5cdFx0XHRcdFx0XHRkaWZmIC09IGxhc3Q7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZGlmZiA9PT0gZmlyc3QgfHwgKCBkaWZmICUgZmlyc3QgPT09IDAgJiYgZGlmZiAvIGZpcnN0ID49IDAgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0fSxcblxuXHRcdFwiUFNFVURPXCI6IGZ1bmN0aW9uKCBwc2V1ZG8sIGFyZ3VtZW50ICkge1xuXG5cdFx0XHQvLyBwc2V1ZG8tY2xhc3MgbmFtZXMgYXJlIGNhc2UtaW5zZW5zaXRpdmVcblx0XHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL3NlbGVjdG9ycy8jcHNldWRvLWNsYXNzZXNcblx0XHRcdC8vIFByaW9yaXRpemUgYnkgY2FzZSBzZW5zaXRpdml0eSBpbiBjYXNlIGN1c3RvbSBwc2V1ZG9zIGFyZSBhZGRlZCB3aXRoIHVwcGVyY2FzZSBsZXR0ZXJzXG5cdFx0XHQvLyBSZW1lbWJlciB0aGF0IHNldEZpbHRlcnMgaW5oZXJpdHMgZnJvbSBwc2V1ZG9zXG5cdFx0XHR2YXIgYXJncyxcblx0XHRcdFx0Zm4gPSBFeHByLnBzZXVkb3NbIHBzZXVkbyBdIHx8IEV4cHIuc2V0RmlsdGVyc1sgcHNldWRvLnRvTG93ZXJDYXNlKCkgXSB8fFxuXHRcdFx0XHRcdFNpenpsZS5lcnJvciggXCJ1bnN1cHBvcnRlZCBwc2V1ZG86IFwiICsgcHNldWRvICk7XG5cblx0XHRcdC8vIFRoZSB1c2VyIG1heSB1c2UgY3JlYXRlUHNldWRvIHRvIGluZGljYXRlIHRoYXRcblx0XHRcdC8vIGFyZ3VtZW50cyBhcmUgbmVlZGVkIHRvIGNyZWF0ZSB0aGUgZmlsdGVyIGZ1bmN0aW9uXG5cdFx0XHQvLyBqdXN0IGFzIFNpenpsZSBkb2VzXG5cdFx0XHRpZiAoIGZuWyBleHBhbmRvIF0gKSB7XG5cdFx0XHRcdHJldHVybiBmbiggYXJndW1lbnQgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQnV0IG1haW50YWluIHN1cHBvcnQgZm9yIG9sZCBzaWduYXR1cmVzXG5cdFx0XHRpZiAoIGZuLmxlbmd0aCA+IDEgKSB7XG5cdFx0XHRcdGFyZ3MgPSBbIHBzZXVkbywgcHNldWRvLCBcIlwiLCBhcmd1bWVudCBdO1xuXHRcdFx0XHRyZXR1cm4gRXhwci5zZXRGaWx0ZXJzLmhhc093blByb3BlcnR5KCBwc2V1ZG8udG9Mb3dlckNhc2UoKSApID9cblx0XHRcdFx0XHRtYXJrRnVuY3Rpb24oIGZ1bmN0aW9uKCBzZWVkLCBtYXRjaGVzICkge1xuXHRcdFx0XHRcdFx0dmFyIGlkeCxcblx0XHRcdFx0XHRcdFx0bWF0Y2hlZCA9IGZuKCBzZWVkLCBhcmd1bWVudCApLFxuXHRcdFx0XHRcdFx0XHRpID0gbWF0Y2hlZC5sZW5ndGg7XG5cdFx0XHRcdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0XHRcdFx0aWR4ID0gaW5kZXhPZiggc2VlZCwgbWF0Y2hlZFsgaSBdICk7XG5cdFx0XHRcdFx0XHRcdHNlZWRbIGlkeCBdID0gISggbWF0Y2hlc1sgaWR4IF0gPSBtYXRjaGVkWyBpIF0gKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9ICkgOlxuXHRcdFx0XHRcdGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZuKCBlbGVtLCAwLCBhcmdzICk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZuO1xuXHRcdH1cblx0fSxcblxuXHRwc2V1ZG9zOiB7XG5cblx0XHQvLyBQb3RlbnRpYWxseSBjb21wbGV4IHBzZXVkb3Ncblx0XHRcIm5vdFwiOiBtYXJrRnVuY3Rpb24oIGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblxuXHRcdFx0Ly8gVHJpbSB0aGUgc2VsZWN0b3IgcGFzc2VkIHRvIGNvbXBpbGVcblx0XHRcdC8vIHRvIGF2b2lkIHRyZWF0aW5nIGxlYWRpbmcgYW5kIHRyYWlsaW5nXG5cdFx0XHQvLyBzcGFjZXMgYXMgY29tYmluYXRvcnNcblx0XHRcdHZhciBpbnB1dCA9IFtdLFxuXHRcdFx0XHRyZXN1bHRzID0gW10sXG5cdFx0XHRcdG1hdGNoZXIgPSBjb21waWxlKCBzZWxlY3Rvci5yZXBsYWNlKCBydHJpbSwgXCIkMVwiICkgKTtcblxuXHRcdFx0cmV0dXJuIG1hdGNoZXJbIGV4cGFuZG8gXSA/XG5cdFx0XHRcdG1hcmtGdW5jdGlvbiggZnVuY3Rpb24oIHNlZWQsIG1hdGNoZXMsIF9jb250ZXh0LCB4bWwgKSB7XG5cdFx0XHRcdFx0dmFyIGVsZW0sXG5cdFx0XHRcdFx0XHR1bm1hdGNoZWQgPSBtYXRjaGVyKCBzZWVkLCBudWxsLCB4bWwsIFtdICksXG5cdFx0XHRcdFx0XHRpID0gc2VlZC5sZW5ndGg7XG5cblx0XHRcdFx0XHQvLyBNYXRjaCBlbGVtZW50cyB1bm1hdGNoZWQgYnkgYG1hdGNoZXJgXG5cdFx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0XHRpZiAoICggZWxlbSA9IHVubWF0Y2hlZFsgaSBdICkgKSB7XG5cdFx0XHRcdFx0XHRcdHNlZWRbIGkgXSA9ICEoIG1hdGNoZXNbIGkgXSA9IGVsZW0gKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKSA6XG5cdFx0XHRcdGZ1bmN0aW9uKCBlbGVtLCBfY29udGV4dCwgeG1sICkge1xuXHRcdFx0XHRcdGlucHV0WyAwIF0gPSBlbGVtO1xuXHRcdFx0XHRcdG1hdGNoZXIoIGlucHV0LCBudWxsLCB4bWwsIHJlc3VsdHMgKTtcblxuXHRcdFx0XHRcdC8vIERvbid0IGtlZXAgdGhlIGVsZW1lbnQgKGlzc3VlICMyOTkpXG5cdFx0XHRcdFx0aW5wdXRbIDAgXSA9IG51bGw7XG5cdFx0XHRcdFx0cmV0dXJuICFyZXN1bHRzLnBvcCgpO1xuXHRcdFx0XHR9O1xuXHRcdH0gKSxcblxuXHRcdFwiaGFzXCI6IG1hcmtGdW5jdGlvbiggZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHRyZXR1cm4gU2l6emxlKCBzZWxlY3RvciwgZWxlbSApLmxlbmd0aCA+IDA7XG5cdFx0XHR9O1xuXHRcdH0gKSxcblxuXHRcdFwiY29udGFpbnNcIjogbWFya0Z1bmN0aW9uKCBmdW5jdGlvbiggdGV4dCApIHtcblx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICk7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdHJldHVybiAoIGVsZW0udGV4dENvbnRlbnQgfHwgZ2V0VGV4dCggZWxlbSApICkuaW5kZXhPZiggdGV4dCApID4gLTE7XG5cdFx0XHR9O1xuXHRcdH0gKSxcblxuXHRcdC8vIFwiV2hldGhlciBhbiBlbGVtZW50IGlzIHJlcHJlc2VudGVkIGJ5IGEgOmxhbmcoKSBzZWxlY3RvclxuXHRcdC8vIGlzIGJhc2VkIHNvbGVseSBvbiB0aGUgZWxlbWVudCdzIGxhbmd1YWdlIHZhbHVlXG5cdFx0Ly8gYmVpbmcgZXF1YWwgdG8gdGhlIGlkZW50aWZpZXIgQyxcblx0XHQvLyBvciBiZWdpbm5pbmcgd2l0aCB0aGUgaWRlbnRpZmllciBDIGltbWVkaWF0ZWx5IGZvbGxvd2VkIGJ5IFwiLVwiLlxuXHRcdC8vIFRoZSBtYXRjaGluZyBvZiBDIGFnYWluc3QgdGhlIGVsZW1lbnQncyBsYW5ndWFnZSB2YWx1ZSBpcyBwZXJmb3JtZWQgY2FzZS1pbnNlbnNpdGl2ZWx5LlxuXHRcdC8vIFRoZSBpZGVudGlmaWVyIEMgZG9lcyBub3QgaGF2ZSB0byBiZSBhIHZhbGlkIGxhbmd1YWdlIG5hbWUuXCJcblx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9zZWxlY3RvcnMvI2xhbmctcHNldWRvXG5cdFx0XCJsYW5nXCI6IG1hcmtGdW5jdGlvbiggZnVuY3Rpb24oIGxhbmcgKSB7XG5cblx0XHRcdC8vIGxhbmcgdmFsdWUgbXVzdCBiZSBhIHZhbGlkIGlkZW50aWZpZXJcblx0XHRcdGlmICggIXJpZGVudGlmaWVyLnRlc3QoIGxhbmcgfHwgXCJcIiApICkge1xuXHRcdFx0XHRTaXp6bGUuZXJyb3IoIFwidW5zdXBwb3J0ZWQgbGFuZzogXCIgKyBsYW5nICk7XG5cdFx0XHR9XG5cdFx0XHRsYW5nID0gbGFuZy5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdHZhciBlbGVtTGFuZztcblx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdGlmICggKCBlbGVtTGFuZyA9IGRvY3VtZW50SXNIVE1MID9cblx0XHRcdFx0XHRcdGVsZW0ubGFuZyA6XG5cdFx0XHRcdFx0XHRlbGVtLmdldEF0dHJpYnV0ZSggXCJ4bWw6bGFuZ1wiICkgfHwgZWxlbS5nZXRBdHRyaWJ1dGUoIFwibGFuZ1wiICkgKSApIHtcblxuXHRcdFx0XHRcdFx0ZWxlbUxhbmcgPSBlbGVtTGFuZy50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW1MYW5nID09PSBsYW5nIHx8IGVsZW1MYW5nLmluZGV4T2YoIGxhbmcgKyBcIi1cIiApID09PSAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSB3aGlsZSAoICggZWxlbSA9IGVsZW0ucGFyZW50Tm9kZSApICYmIGVsZW0ubm9kZVR5cGUgPT09IDEgKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fTtcblx0XHR9ICksXG5cblx0XHQvLyBNaXNjZWxsYW5lb3VzXG5cdFx0XCJ0YXJnZXRcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHR2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbiAmJiB3aW5kb3cubG9jYXRpb24uaGFzaDtcblx0XHRcdHJldHVybiBoYXNoICYmIGhhc2guc2xpY2UoIDEgKSA9PT0gZWxlbS5pZDtcblx0XHR9LFxuXG5cdFx0XCJyb290XCI6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGVsZW0gPT09IGRvY0VsZW07XG5cdFx0fSxcblxuXHRcdFwiZm9jdXNcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gZWxlbSA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxuXHRcdFx0XHQoICFkb2N1bWVudC5oYXNGb2N1cyB8fCBkb2N1bWVudC5oYXNGb2N1cygpICkgJiZcblx0XHRcdFx0ISEoIGVsZW0udHlwZSB8fCBlbGVtLmhyZWYgfHwgfmVsZW0udGFiSW5kZXggKTtcblx0XHR9LFxuXG5cdFx0Ly8gQm9vbGVhbiBwcm9wZXJ0aWVzXG5cdFx0XCJlbmFibGVkXCI6IGNyZWF0ZURpc2FibGVkUHNldWRvKCBmYWxzZSApLFxuXHRcdFwiZGlzYWJsZWRcIjogY3JlYXRlRGlzYWJsZWRQc2V1ZG8oIHRydWUgKSxcblxuXHRcdFwiY2hlY2tlZFwiOiBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdFx0Ly8gSW4gQ1NTMywgOmNoZWNrZWQgc2hvdWxkIHJldHVybiBib3RoIGNoZWNrZWQgYW5kIHNlbGVjdGVkIGVsZW1lbnRzXG5cdFx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDExL1JFQy1jc3MzLXNlbGVjdG9ycy0yMDExMDkyOS8jY2hlY2tlZFxuXHRcdFx0dmFyIG5vZGVOYW1lID0gZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0cmV0dXJuICggbm9kZU5hbWUgPT09IFwiaW5wdXRcIiAmJiAhIWVsZW0uY2hlY2tlZCApIHx8XG5cdFx0XHRcdCggbm9kZU5hbWUgPT09IFwib3B0aW9uXCIgJiYgISFlbGVtLnNlbGVjdGVkICk7XG5cdFx0fSxcblxuXHRcdFwic2VsZWN0ZWRcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHRcdC8vIEFjY2Vzc2luZyB0aGlzIHByb3BlcnR5IG1ha2VzIHNlbGVjdGVkLWJ5LWRlZmF1bHRcblx0XHRcdC8vIG9wdGlvbnMgaW4gU2FmYXJpIHdvcmsgcHJvcGVybHlcblx0XHRcdGlmICggZWxlbS5wYXJlbnROb2RlICkge1xuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG5cdFx0XHRcdGVsZW0ucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZWxlbS5zZWxlY3RlZCA9PT0gdHJ1ZTtcblx0XHR9LFxuXG5cdFx0Ly8gQ29udGVudHNcblx0XHRcImVtcHR5XCI6IGZ1bmN0aW9uKCBlbGVtICkge1xuXG5cdFx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9zZWxlY3RvcnMvI2VtcHR5LXBzZXVkb1xuXHRcdFx0Ly8gOmVtcHR5IGlzIG5lZ2F0ZWQgYnkgZWxlbWVudCAoMSkgb3IgY29udGVudCBub2RlcyAodGV4dDogMzsgY2RhdGE6IDQ7IGVudGl0eSByZWY6IDUpLFxuXHRcdFx0Ly8gICBidXQgbm90IGJ5IG90aGVycyAoY29tbWVudDogODsgcHJvY2Vzc2luZyBpbnN0cnVjdGlvbjogNzsgZXRjLilcblx0XHRcdC8vIG5vZGVUeXBlIDwgNiB3b3JrcyBiZWNhdXNlIGF0dHJpYnV0ZXMgKDIpIGRvIG5vdCBhcHBlYXIgYXMgY2hpbGRyZW5cblx0XHRcdGZvciAoIGVsZW0gPSBlbGVtLmZpcnN0Q2hpbGQ7IGVsZW07IGVsZW0gPSBlbGVtLm5leHRTaWJsaW5nICkge1xuXHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPCA2ICkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSxcblxuXHRcdFwicGFyZW50XCI6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuICFFeHByLnBzZXVkb3NbIFwiZW1wdHlcIiBdKCBlbGVtICk7XG5cdFx0fSxcblxuXHRcdC8vIEVsZW1lbnQvaW5wdXQgdHlwZXNcblx0XHRcImhlYWRlclwiOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiByaGVhZGVyLnRlc3QoIGVsZW0ubm9kZU5hbWUgKTtcblx0XHR9LFxuXG5cdFx0XCJpbnB1dFwiOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiByaW5wdXRzLnRlc3QoIGVsZW0ubm9kZU5hbWUgKTtcblx0XHR9LFxuXG5cdFx0XCJidXR0b25cIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHR2YXIgbmFtZSA9IGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRcdHJldHVybiBuYW1lID09PSBcImlucHV0XCIgJiYgZWxlbS50eXBlID09PSBcImJ1dHRvblwiIHx8IG5hbWUgPT09IFwiYnV0dG9uXCI7XG5cdFx0fSxcblxuXHRcdFwidGV4dFwiOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHZhciBhdHRyO1xuXHRcdFx0cmV0dXJuIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnB1dFwiICYmXG5cdFx0XHRcdGVsZW0udHlwZSA9PT0gXCJ0ZXh0XCIgJiZcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBJRTw4XG5cdFx0XHRcdC8vIE5ldyBIVE1MNSBhdHRyaWJ1dGUgdmFsdWVzIChlLmcuLCBcInNlYXJjaFwiKSBhcHBlYXIgd2l0aCBlbGVtLnR5cGUgPT09IFwidGV4dFwiXG5cdFx0XHRcdCggKCBhdHRyID0gZWxlbS5nZXRBdHRyaWJ1dGUoIFwidHlwZVwiICkgKSA9PSBudWxsIHx8XG5cdFx0XHRcdFx0YXR0ci50b0xvd2VyQ2FzZSgpID09PSBcInRleHRcIiApO1xuXHRcdH0sXG5cblx0XHQvLyBQb3NpdGlvbi1pbi1jb2xsZWN0aW9uXG5cdFx0XCJmaXJzdFwiOiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKCBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBbIDAgXTtcblx0XHR9ICksXG5cblx0XHRcImxhc3RcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyggZnVuY3Rpb24oIF9tYXRjaEluZGV4ZXMsIGxlbmd0aCApIHtcblx0XHRcdHJldHVybiBbIGxlbmd0aCAtIDEgXTtcblx0XHR9ICksXG5cblx0XHRcImVxXCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oIGZ1bmN0aW9uKCBfbWF0Y2hJbmRleGVzLCBsZW5ndGgsIGFyZ3VtZW50ICkge1xuXHRcdFx0cmV0dXJuIFsgYXJndW1lbnQgPCAwID8gYXJndW1lbnQgKyBsZW5ndGggOiBhcmd1bWVudCBdO1xuXHRcdH0gKSxcblxuXHRcdFwiZXZlblwiOiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKCBmdW5jdGlvbiggbWF0Y2hJbmRleGVzLCBsZW5ndGggKSB7XG5cdFx0XHR2YXIgaSA9IDA7XG5cdFx0XHRmb3IgKCA7IGkgPCBsZW5ndGg7IGkgKz0gMiApIHtcblx0XHRcdFx0bWF0Y2hJbmRleGVzLnB1c2goIGkgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBtYXRjaEluZGV4ZXM7XG5cdFx0fSApLFxuXG5cdFx0XCJvZGRcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyggZnVuY3Rpb24oIG1hdGNoSW5kZXhlcywgbGVuZ3RoICkge1xuXHRcdFx0dmFyIGkgPSAxO1xuXHRcdFx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpICs9IDIgKSB7XG5cdFx0XHRcdG1hdGNoSW5kZXhlcy5wdXNoKCBpICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbWF0Y2hJbmRleGVzO1xuXHRcdH0gKSxcblxuXHRcdFwibHRcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyggZnVuY3Rpb24oIG1hdGNoSW5kZXhlcywgbGVuZ3RoLCBhcmd1bWVudCApIHtcblx0XHRcdHZhciBpID0gYXJndW1lbnQgPCAwID9cblx0XHRcdFx0YXJndW1lbnQgKyBsZW5ndGggOlxuXHRcdFx0XHRhcmd1bWVudCA+IGxlbmd0aCA/XG5cdFx0XHRcdFx0bGVuZ3RoIDpcblx0XHRcdFx0XHRhcmd1bWVudDtcblx0XHRcdGZvciAoIDsgLS1pID49IDA7ICkge1xuXHRcdFx0XHRtYXRjaEluZGV4ZXMucHVzaCggaSApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG1hdGNoSW5kZXhlcztcblx0XHR9ICksXG5cblx0XHRcImd0XCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oIGZ1bmN0aW9uKCBtYXRjaEluZGV4ZXMsIGxlbmd0aCwgYXJndW1lbnQgKSB7XG5cdFx0XHR2YXIgaSA9IGFyZ3VtZW50IDwgMCA/IGFyZ3VtZW50ICsgbGVuZ3RoIDogYXJndW1lbnQ7XG5cdFx0XHRmb3IgKCA7ICsraSA8IGxlbmd0aDsgKSB7XG5cdFx0XHRcdG1hdGNoSW5kZXhlcy5wdXNoKCBpICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbWF0Y2hJbmRleGVzO1xuXHRcdH0gKVxuXHR9XG59O1xuXG5FeHByLnBzZXVkb3NbIFwibnRoXCIgXSA9IEV4cHIucHNldWRvc1sgXCJlcVwiIF07XG5cbi8vIEFkZCBidXR0b24vaW5wdXQgdHlwZSBwc2V1ZG9zXG5mb3IgKCBpIGluIHsgcmFkaW86IHRydWUsIGNoZWNrYm94OiB0cnVlLCBmaWxlOiB0cnVlLCBwYXNzd29yZDogdHJ1ZSwgaW1hZ2U6IHRydWUgfSApIHtcblx0RXhwci5wc2V1ZG9zWyBpIF0gPSBjcmVhdGVJbnB1dFBzZXVkbyggaSApO1xufVxuZm9yICggaSBpbiB7IHN1Ym1pdDogdHJ1ZSwgcmVzZXQ6IHRydWUgfSApIHtcblx0RXhwci5wc2V1ZG9zWyBpIF0gPSBjcmVhdGVCdXR0b25Qc2V1ZG8oIGkgKTtcbn1cblxuLy8gRWFzeSBBUEkgZm9yIGNyZWF0aW5nIG5ldyBzZXRGaWx0ZXJzXG5mdW5jdGlvbiBzZXRGaWx0ZXJzKCkge31cbnNldEZpbHRlcnMucHJvdG90eXBlID0gRXhwci5maWx0ZXJzID0gRXhwci5wc2V1ZG9zO1xuRXhwci5zZXRGaWx0ZXJzID0gbmV3IHNldEZpbHRlcnMoKTtcblxudG9rZW5pemUgPSBTaXp6bGUudG9rZW5pemUgPSBmdW5jdGlvbiggc2VsZWN0b3IsIHBhcnNlT25seSApIHtcblx0dmFyIG1hdGNoZWQsIG1hdGNoLCB0b2tlbnMsIHR5cGUsXG5cdFx0c29GYXIsIGdyb3VwcywgcHJlRmlsdGVycyxcblx0XHRjYWNoZWQgPSB0b2tlbkNhY2hlWyBzZWxlY3RvciArIFwiIFwiIF07XG5cblx0aWYgKCBjYWNoZWQgKSB7XG5cdFx0cmV0dXJuIHBhcnNlT25seSA/IDAgOiBjYWNoZWQuc2xpY2UoIDAgKTtcblx0fVxuXG5cdHNvRmFyID0gc2VsZWN0b3I7XG5cdGdyb3VwcyA9IFtdO1xuXHRwcmVGaWx0ZXJzID0gRXhwci5wcmVGaWx0ZXI7XG5cblx0d2hpbGUgKCBzb0ZhciApIHtcblxuXHRcdC8vIENvbW1hIGFuZCBmaXJzdCBydW5cblx0XHRpZiAoICFtYXRjaGVkIHx8ICggbWF0Y2ggPSByY29tbWEuZXhlYyggc29GYXIgKSApICkge1xuXHRcdFx0aWYgKCBtYXRjaCApIHtcblxuXHRcdFx0XHQvLyBEb24ndCBjb25zdW1lIHRyYWlsaW5nIGNvbW1hcyBhcyB2YWxpZFxuXHRcdFx0XHRzb0ZhciA9IHNvRmFyLnNsaWNlKCBtYXRjaFsgMCBdLmxlbmd0aCApIHx8IHNvRmFyO1xuXHRcdFx0fVxuXHRcdFx0Z3JvdXBzLnB1c2goICggdG9rZW5zID0gW10gKSApO1xuXHRcdH1cblxuXHRcdG1hdGNoZWQgPSBmYWxzZTtcblxuXHRcdC8vIENvbWJpbmF0b3JzXG5cdFx0aWYgKCAoIG1hdGNoID0gcmNvbWJpbmF0b3JzLmV4ZWMoIHNvRmFyICkgKSApIHtcblx0XHRcdG1hdGNoZWQgPSBtYXRjaC5zaGlmdCgpO1xuXHRcdFx0dG9rZW5zLnB1c2goIHtcblx0XHRcdFx0dmFsdWU6IG1hdGNoZWQsXG5cblx0XHRcdFx0Ly8gQ2FzdCBkZXNjZW5kYW50IGNvbWJpbmF0b3JzIHRvIHNwYWNlXG5cdFx0XHRcdHR5cGU6IG1hdGNoWyAwIF0ucmVwbGFjZSggcnRyaW0sIFwiIFwiIClcblx0XHRcdH0gKTtcblx0XHRcdHNvRmFyID0gc29GYXIuc2xpY2UoIG1hdGNoZWQubGVuZ3RoICk7XG5cdFx0fVxuXG5cdFx0Ly8gRmlsdGVyc1xuXHRcdGZvciAoIHR5cGUgaW4gRXhwci5maWx0ZXIgKSB7XG5cdFx0XHRpZiAoICggbWF0Y2ggPSBtYXRjaEV4cHJbIHR5cGUgXS5leGVjKCBzb0ZhciApICkgJiYgKCAhcHJlRmlsdGVyc1sgdHlwZSBdIHx8XG5cdFx0XHRcdCggbWF0Y2ggPSBwcmVGaWx0ZXJzWyB0eXBlIF0oIG1hdGNoICkgKSApICkge1xuXHRcdFx0XHRtYXRjaGVkID0gbWF0Y2guc2hpZnQoKTtcblx0XHRcdFx0dG9rZW5zLnB1c2goIHtcblx0XHRcdFx0XHR2YWx1ZTogbWF0Y2hlZCxcblx0XHRcdFx0XHR0eXBlOiB0eXBlLFxuXHRcdFx0XHRcdG1hdGNoZXM6IG1hdGNoXG5cdFx0XHRcdH0gKTtcblx0XHRcdFx0c29GYXIgPSBzb0Zhci5zbGljZSggbWF0Y2hlZC5sZW5ndGggKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoICFtYXRjaGVkICkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBsZW5ndGggb2YgdGhlIGludmFsaWQgZXhjZXNzXG5cdC8vIGlmIHdlJ3JlIGp1c3QgcGFyc2luZ1xuXHQvLyBPdGhlcndpc2UsIHRocm93IGFuIGVycm9yIG9yIHJldHVybiB0b2tlbnNcblx0cmV0dXJuIHBhcnNlT25seSA/XG5cdFx0c29GYXIubGVuZ3RoIDpcblx0XHRzb0ZhciA/XG5cdFx0XHRTaXp6bGUuZXJyb3IoIHNlbGVjdG9yICkgOlxuXG5cdFx0XHQvLyBDYWNoZSB0aGUgdG9rZW5zXG5cdFx0XHR0b2tlbkNhY2hlKCBzZWxlY3RvciwgZ3JvdXBzICkuc2xpY2UoIDAgKTtcbn07XG5cbmZ1bmN0aW9uIHRvU2VsZWN0b3IoIHRva2VucyApIHtcblx0dmFyIGkgPSAwLFxuXHRcdGxlbiA9IHRva2Vucy5sZW5ndGgsXG5cdFx0c2VsZWN0b3IgPSBcIlwiO1xuXHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRzZWxlY3RvciArPSB0b2tlbnNbIGkgXS52YWx1ZTtcblx0fVxuXHRyZXR1cm4gc2VsZWN0b3I7XG59XG5cbmZ1bmN0aW9uIGFkZENvbWJpbmF0b3IoIG1hdGNoZXIsIGNvbWJpbmF0b3IsIGJhc2UgKSB7XG5cdHZhciBkaXIgPSBjb21iaW5hdG9yLmRpcixcblx0XHRza2lwID0gY29tYmluYXRvci5uZXh0LFxuXHRcdGtleSA9IHNraXAgfHwgZGlyLFxuXHRcdGNoZWNrTm9uRWxlbWVudHMgPSBiYXNlICYmIGtleSA9PT0gXCJwYXJlbnROb2RlXCIsXG5cdFx0ZG9uZU5hbWUgPSBkb25lKys7XG5cblx0cmV0dXJuIGNvbWJpbmF0b3IuZmlyc3QgP1xuXG5cdFx0Ly8gQ2hlY2sgYWdhaW5zdCBjbG9zZXN0IGFuY2VzdG9yL3ByZWNlZGluZyBlbGVtZW50XG5cdFx0ZnVuY3Rpb24oIGVsZW0sIGNvbnRleHQsIHhtbCApIHtcblx0XHRcdHdoaWxlICggKCBlbGVtID0gZWxlbVsgZGlyIF0gKSApIHtcblx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxIHx8IGNoZWNrTm9uRWxlbWVudHMgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG1hdGNoZXIoIGVsZW0sIGNvbnRleHQsIHhtbCApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSA6XG5cblx0XHQvLyBDaGVjayBhZ2FpbnN0IGFsbCBhbmNlc3Rvci9wcmVjZWRpbmcgZWxlbWVudHNcblx0XHRmdW5jdGlvbiggZWxlbSwgY29udGV4dCwgeG1sICkge1xuXHRcdFx0dmFyIG9sZENhY2hlLCB1bmlxdWVDYWNoZSwgb3V0ZXJDYWNoZSxcblx0XHRcdFx0bmV3Q2FjaGUgPSBbIGRpcnJ1bnMsIGRvbmVOYW1lIF07XG5cblx0XHRcdC8vIFdlIGNhbid0IHNldCBhcmJpdHJhcnkgZGF0YSBvbiBYTUwgbm9kZXMsIHNvIHRoZXkgZG9uJ3QgYmVuZWZpdCBmcm9tIGNvbWJpbmF0b3IgY2FjaGluZ1xuXHRcdFx0aWYgKCB4bWwgKSB7XG5cdFx0XHRcdHdoaWxlICggKCBlbGVtID0gZWxlbVsgZGlyIF0gKSApIHtcblx0XHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgfHwgY2hlY2tOb25FbGVtZW50cyApIHtcblx0XHRcdFx0XHRcdGlmICggbWF0Y2hlciggZWxlbSwgY29udGV4dCwgeG1sICkgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2hpbGUgKCAoIGVsZW0gPSBlbGVtWyBkaXIgXSApICkge1xuXHRcdFx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMSB8fCBjaGVja05vbkVsZW1lbnRzICkge1xuXHRcdFx0XHRcdFx0b3V0ZXJDYWNoZSA9IGVsZW1bIGV4cGFuZG8gXSB8fCAoIGVsZW1bIGV4cGFuZG8gXSA9IHt9ICk7XG5cblx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw5IG9ubHlcblx0XHRcdFx0XHRcdC8vIERlZmVuZCBhZ2FpbnN0IGNsb25lZCBhdHRyb3BlcnRpZXMgKGpRdWVyeSBnaC0xNzA5KVxuXHRcdFx0XHRcdFx0dW5pcXVlQ2FjaGUgPSBvdXRlckNhY2hlWyBlbGVtLnVuaXF1ZUlEIF0gfHxcblx0XHRcdFx0XHRcdFx0KCBvdXRlckNhY2hlWyBlbGVtLnVuaXF1ZUlEIF0gPSB7fSApO1xuXG5cdFx0XHRcdFx0XHRpZiAoIHNraXAgJiYgc2tpcCA9PT0gZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICkge1xuXHRcdFx0XHRcdFx0XHRlbGVtID0gZWxlbVsgZGlyIF0gfHwgZWxlbTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoICggb2xkQ2FjaGUgPSB1bmlxdWVDYWNoZVsga2V5IF0gKSAmJlxuXHRcdFx0XHRcdFx0XHRvbGRDYWNoZVsgMCBdID09PSBkaXJydW5zICYmIG9sZENhY2hlWyAxIF0gPT09IGRvbmVOYW1lICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIEFzc2lnbiB0byBuZXdDYWNoZSBzbyByZXN1bHRzIGJhY2stcHJvcGFnYXRlIHRvIHByZXZpb3VzIGVsZW1lbnRzXG5cdFx0XHRcdFx0XHRcdHJldHVybiAoIG5ld0NhY2hlWyAyIF0gPSBvbGRDYWNoZVsgMiBdICk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdC8vIFJldXNlIG5ld2NhY2hlIHNvIHJlc3VsdHMgYmFjay1wcm9wYWdhdGUgdG8gcHJldmlvdXMgZWxlbWVudHNcblx0XHRcdFx0XHRcdFx0dW5pcXVlQ2FjaGVbIGtleSBdID0gbmV3Q2FjaGU7XG5cblx0XHRcdFx0XHRcdFx0Ly8gQSBtYXRjaCBtZWFucyB3ZSdyZSBkb25lOyBhIGZhaWwgbWVhbnMgd2UgaGF2ZSB0byBrZWVwIGNoZWNraW5nXG5cdFx0XHRcdFx0XHRcdGlmICggKCBuZXdDYWNoZVsgMiBdID0gbWF0Y2hlciggZWxlbSwgY29udGV4dCwgeG1sICkgKSApIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07XG59XG5cbmZ1bmN0aW9uIGVsZW1lbnRNYXRjaGVyKCBtYXRjaGVycyApIHtcblx0cmV0dXJuIG1hdGNoZXJzLmxlbmd0aCA+IDEgP1xuXHRcdGZ1bmN0aW9uKCBlbGVtLCBjb250ZXh0LCB4bWwgKSB7XG5cdFx0XHR2YXIgaSA9IG1hdGNoZXJzLmxlbmd0aDtcblx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRpZiAoICFtYXRjaGVyc1sgaSBdKCBlbGVtLCBjb250ZXh0LCB4bWwgKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gOlxuXHRcdG1hdGNoZXJzWyAwIF07XG59XG5cbmZ1bmN0aW9uIG11bHRpcGxlQ29udGV4dHMoIHNlbGVjdG9yLCBjb250ZXh0cywgcmVzdWx0cyApIHtcblx0dmFyIGkgPSAwLFxuXHRcdGxlbiA9IGNvbnRleHRzLmxlbmd0aDtcblx0Zm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0U2l6emxlKCBzZWxlY3RvciwgY29udGV4dHNbIGkgXSwgcmVzdWx0cyApO1xuXHR9XG5cdHJldHVybiByZXN1bHRzO1xufVxuXG5mdW5jdGlvbiBjb25kZW5zZSggdW5tYXRjaGVkLCBtYXAsIGZpbHRlciwgY29udGV4dCwgeG1sICkge1xuXHR2YXIgZWxlbSxcblx0XHRuZXdVbm1hdGNoZWQgPSBbXSxcblx0XHRpID0gMCxcblx0XHRsZW4gPSB1bm1hdGNoZWQubGVuZ3RoLFxuXHRcdG1hcHBlZCA9IG1hcCAhPSBudWxsO1xuXG5cdGZvciAoIDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdGlmICggKCBlbGVtID0gdW5tYXRjaGVkWyBpIF0gKSApIHtcblx0XHRcdGlmICggIWZpbHRlciB8fCBmaWx0ZXIoIGVsZW0sIGNvbnRleHQsIHhtbCApICkge1xuXHRcdFx0XHRuZXdVbm1hdGNoZWQucHVzaCggZWxlbSApO1xuXHRcdFx0XHRpZiAoIG1hcHBlZCApIHtcblx0XHRcdFx0XHRtYXAucHVzaCggaSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG5ld1VubWF0Y2hlZDtcbn1cblxuZnVuY3Rpb24gc2V0TWF0Y2hlciggcHJlRmlsdGVyLCBzZWxlY3RvciwgbWF0Y2hlciwgcG9zdEZpbHRlciwgcG9zdEZpbmRlciwgcG9zdFNlbGVjdG9yICkge1xuXHRpZiAoIHBvc3RGaWx0ZXIgJiYgIXBvc3RGaWx0ZXJbIGV4cGFuZG8gXSApIHtcblx0XHRwb3N0RmlsdGVyID0gc2V0TWF0Y2hlciggcG9zdEZpbHRlciApO1xuXHR9XG5cdGlmICggcG9zdEZpbmRlciAmJiAhcG9zdEZpbmRlclsgZXhwYW5kbyBdICkge1xuXHRcdHBvc3RGaW5kZXIgPSBzZXRNYXRjaGVyKCBwb3N0RmluZGVyLCBwb3N0U2VsZWN0b3IgKTtcblx0fVxuXHRyZXR1cm4gbWFya0Z1bmN0aW9uKCBmdW5jdGlvbiggc2VlZCwgcmVzdWx0cywgY29udGV4dCwgeG1sICkge1xuXHRcdHZhciB0ZW1wLCBpLCBlbGVtLFxuXHRcdFx0cHJlTWFwID0gW10sXG5cdFx0XHRwb3N0TWFwID0gW10sXG5cdFx0XHRwcmVleGlzdGluZyA9IHJlc3VsdHMubGVuZ3RoLFxuXG5cdFx0XHQvLyBHZXQgaW5pdGlhbCBlbGVtZW50cyBmcm9tIHNlZWQgb3IgY29udGV4dFxuXHRcdFx0ZWxlbXMgPSBzZWVkIHx8IG11bHRpcGxlQ29udGV4dHMoXG5cdFx0XHRcdHNlbGVjdG9yIHx8IFwiKlwiLFxuXHRcdFx0XHRjb250ZXh0Lm5vZGVUeXBlID8gWyBjb250ZXh0IF0gOiBjb250ZXh0LFxuXHRcdFx0XHRbXVxuXHRcdFx0KSxcblxuXHRcdFx0Ly8gUHJlZmlsdGVyIHRvIGdldCBtYXRjaGVyIGlucHV0LCBwcmVzZXJ2aW5nIGEgbWFwIGZvciBzZWVkLXJlc3VsdHMgc3luY2hyb25pemF0aW9uXG5cdFx0XHRtYXRjaGVySW4gPSBwcmVGaWx0ZXIgJiYgKCBzZWVkIHx8ICFzZWxlY3RvciApID9cblx0XHRcdFx0Y29uZGVuc2UoIGVsZW1zLCBwcmVNYXAsIHByZUZpbHRlciwgY29udGV4dCwgeG1sICkgOlxuXHRcdFx0XHRlbGVtcyxcblxuXHRcdFx0bWF0Y2hlck91dCA9IG1hdGNoZXIgP1xuXG5cdFx0XHRcdC8vIElmIHdlIGhhdmUgYSBwb3N0RmluZGVyLCBvciBmaWx0ZXJlZCBzZWVkLCBvciBub24tc2VlZCBwb3N0RmlsdGVyIG9yIHByZWV4aXN0aW5nIHJlc3VsdHMsXG5cdFx0XHRcdHBvc3RGaW5kZXIgfHwgKCBzZWVkID8gcHJlRmlsdGVyIDogcHJlZXhpc3RpbmcgfHwgcG9zdEZpbHRlciApID9cblxuXHRcdFx0XHRcdC8vIC4uLmludGVybWVkaWF0ZSBwcm9jZXNzaW5nIGlzIG5lY2Vzc2FyeVxuXHRcdFx0XHRcdFtdIDpcblxuXHRcdFx0XHRcdC8vIC4uLm90aGVyd2lzZSB1c2UgcmVzdWx0cyBkaXJlY3RseVxuXHRcdFx0XHRcdHJlc3VsdHMgOlxuXHRcdFx0XHRtYXRjaGVySW47XG5cblx0XHQvLyBGaW5kIHByaW1hcnkgbWF0Y2hlc1xuXHRcdGlmICggbWF0Y2hlciApIHtcblx0XHRcdG1hdGNoZXIoIG1hdGNoZXJJbiwgbWF0Y2hlck91dCwgY29udGV4dCwgeG1sICk7XG5cdFx0fVxuXG5cdFx0Ly8gQXBwbHkgcG9zdEZpbHRlclxuXHRcdGlmICggcG9zdEZpbHRlciApIHtcblx0XHRcdHRlbXAgPSBjb25kZW5zZSggbWF0Y2hlck91dCwgcG9zdE1hcCApO1xuXHRcdFx0cG9zdEZpbHRlciggdGVtcCwgW10sIGNvbnRleHQsIHhtbCApO1xuXG5cdFx0XHQvLyBVbi1tYXRjaCBmYWlsaW5nIGVsZW1lbnRzIGJ5IG1vdmluZyB0aGVtIGJhY2sgdG8gbWF0Y2hlckluXG5cdFx0XHRpID0gdGVtcC5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0aWYgKCAoIGVsZW0gPSB0ZW1wWyBpIF0gKSApIHtcblx0XHRcdFx0XHRtYXRjaGVyT3V0WyBwb3N0TWFwWyBpIF0gXSA9ICEoIG1hdGNoZXJJblsgcG9zdE1hcFsgaSBdIF0gPSBlbGVtICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIHNlZWQgKSB7XG5cdFx0XHRpZiAoIHBvc3RGaW5kZXIgfHwgcHJlRmlsdGVyICkge1xuXHRcdFx0XHRpZiAoIHBvc3RGaW5kZXIgKSB7XG5cblx0XHRcdFx0XHQvLyBHZXQgdGhlIGZpbmFsIG1hdGNoZXJPdXQgYnkgY29uZGVuc2luZyB0aGlzIGludGVybWVkaWF0ZSBpbnRvIHBvc3RGaW5kZXIgY29udGV4dHNcblx0XHRcdFx0XHR0ZW1wID0gW107XG5cdFx0XHRcdFx0aSA9IG1hdGNoZXJPdXQubGVuZ3RoO1xuXHRcdFx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRcdFx0aWYgKCAoIGVsZW0gPSBtYXRjaGVyT3V0WyBpIF0gKSApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBSZXN0b3JlIG1hdGNoZXJJbiBzaW5jZSBlbGVtIGlzIG5vdCB5ZXQgYSBmaW5hbCBtYXRjaFxuXHRcdFx0XHRcdFx0XHR0ZW1wLnB1c2goICggbWF0Y2hlckluWyBpIF0gPSBlbGVtICkgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cG9zdEZpbmRlciggbnVsbCwgKCBtYXRjaGVyT3V0ID0gW10gKSwgdGVtcCwgeG1sICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBNb3ZlIG1hdGNoZWQgZWxlbWVudHMgZnJvbSBzZWVkIHRvIHJlc3VsdHMgdG8ga2VlcCB0aGVtIHN5bmNocm9uaXplZFxuXHRcdFx0XHRpID0gbWF0Y2hlck91dC5sZW5ndGg7XG5cdFx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRcdGlmICggKCBlbGVtID0gbWF0Y2hlck91dFsgaSBdICkgJiZcblx0XHRcdFx0XHRcdCggdGVtcCA9IHBvc3RGaW5kZXIgPyBpbmRleE9mKCBzZWVkLCBlbGVtICkgOiBwcmVNYXBbIGkgXSApID4gLTEgKSB7XG5cblx0XHRcdFx0XHRcdHNlZWRbIHRlbXAgXSA9ICEoIHJlc3VsdHNbIHRlbXAgXSA9IGVsZW0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdC8vIEFkZCBlbGVtZW50cyB0byByZXN1bHRzLCB0aHJvdWdoIHBvc3RGaW5kZXIgaWYgZGVmaW5lZFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRtYXRjaGVyT3V0ID0gY29uZGVuc2UoXG5cdFx0XHRcdG1hdGNoZXJPdXQgPT09IHJlc3VsdHMgP1xuXHRcdFx0XHRcdG1hdGNoZXJPdXQuc3BsaWNlKCBwcmVleGlzdGluZywgbWF0Y2hlck91dC5sZW5ndGggKSA6XG5cdFx0XHRcdFx0bWF0Y2hlck91dFxuXHRcdFx0KTtcblx0XHRcdGlmICggcG9zdEZpbmRlciApIHtcblx0XHRcdFx0cG9zdEZpbmRlciggbnVsbCwgcmVzdWx0cywgbWF0Y2hlck91dCwgeG1sICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwdXNoLmFwcGx5KCByZXN1bHRzLCBtYXRjaGVyT3V0ICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9ICk7XG59XG5cbmZ1bmN0aW9uIG1hdGNoZXJGcm9tVG9rZW5zKCB0b2tlbnMgKSB7XG5cdHZhciBjaGVja0NvbnRleHQsIG1hdGNoZXIsIGosXG5cdFx0bGVuID0gdG9rZW5zLmxlbmd0aCxcblx0XHRsZWFkaW5nUmVsYXRpdmUgPSBFeHByLnJlbGF0aXZlWyB0b2tlbnNbIDAgXS50eXBlIF0sXG5cdFx0aW1wbGljaXRSZWxhdGl2ZSA9IGxlYWRpbmdSZWxhdGl2ZSB8fCBFeHByLnJlbGF0aXZlWyBcIiBcIiBdLFxuXHRcdGkgPSBsZWFkaW5nUmVsYXRpdmUgPyAxIDogMCxcblxuXHRcdC8vIFRoZSBmb3VuZGF0aW9uYWwgbWF0Y2hlciBlbnN1cmVzIHRoYXQgZWxlbWVudHMgYXJlIHJlYWNoYWJsZSBmcm9tIHRvcC1sZXZlbCBjb250ZXh0KHMpXG5cdFx0bWF0Y2hDb250ZXh0ID0gYWRkQ29tYmluYXRvciggZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gZWxlbSA9PT0gY2hlY2tDb250ZXh0O1xuXHRcdH0sIGltcGxpY2l0UmVsYXRpdmUsIHRydWUgKSxcblx0XHRtYXRjaEFueUNvbnRleHQgPSBhZGRDb21iaW5hdG9yKCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiBpbmRleE9mKCBjaGVja0NvbnRleHQsIGVsZW0gKSA+IC0xO1xuXHRcdH0sIGltcGxpY2l0UmVsYXRpdmUsIHRydWUgKSxcblx0XHRtYXRjaGVycyA9IFsgZnVuY3Rpb24oIGVsZW0sIGNvbnRleHQsIHhtbCApIHtcblx0XHRcdHZhciByZXQgPSAoICFsZWFkaW5nUmVsYXRpdmUgJiYgKCB4bWwgfHwgY29udGV4dCAhPT0gb3V0ZXJtb3N0Q29udGV4dCApICkgfHwgKFxuXHRcdFx0XHQoIGNoZWNrQ29udGV4dCA9IGNvbnRleHQgKS5ub2RlVHlwZSA/XG5cdFx0XHRcdFx0bWF0Y2hDb250ZXh0KCBlbGVtLCBjb250ZXh0LCB4bWwgKSA6XG5cdFx0XHRcdFx0bWF0Y2hBbnlDb250ZXh0KCBlbGVtLCBjb250ZXh0LCB4bWwgKSApO1xuXG5cdFx0XHQvLyBBdm9pZCBoYW5naW5nIG9udG8gZWxlbWVudCAoaXNzdWUgIzI5OSlcblx0XHRcdGNoZWNrQ29udGV4dCA9IG51bGw7XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH0gXTtcblxuXHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRpZiAoICggbWF0Y2hlciA9IEV4cHIucmVsYXRpdmVbIHRva2Vuc1sgaSBdLnR5cGUgXSApICkge1xuXHRcdFx0bWF0Y2hlcnMgPSBbIGFkZENvbWJpbmF0b3IoIGVsZW1lbnRNYXRjaGVyKCBtYXRjaGVycyApLCBtYXRjaGVyICkgXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWF0Y2hlciA9IEV4cHIuZmlsdGVyWyB0b2tlbnNbIGkgXS50eXBlIF0uYXBwbHkoIG51bGwsIHRva2Vuc1sgaSBdLm1hdGNoZXMgKTtcblxuXHRcdFx0Ly8gUmV0dXJuIHNwZWNpYWwgdXBvbiBzZWVpbmcgYSBwb3NpdGlvbmFsIG1hdGNoZXJcblx0XHRcdGlmICggbWF0Y2hlclsgZXhwYW5kbyBdICkge1xuXG5cdFx0XHRcdC8vIEZpbmQgdGhlIG5leHQgcmVsYXRpdmUgb3BlcmF0b3IgKGlmIGFueSkgZm9yIHByb3BlciBoYW5kbGluZ1xuXHRcdFx0XHRqID0gKytpO1xuXHRcdFx0XHRmb3IgKCA7IGogPCBsZW47IGorKyApIHtcblx0XHRcdFx0XHRpZiAoIEV4cHIucmVsYXRpdmVbIHRva2Vuc1sgaiBdLnR5cGUgXSApIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gc2V0TWF0Y2hlcihcblx0XHRcdFx0XHRpID4gMSAmJiBlbGVtZW50TWF0Y2hlciggbWF0Y2hlcnMgKSxcblx0XHRcdFx0XHRpID4gMSAmJiB0b1NlbGVjdG9yKFxuXG5cdFx0XHRcdFx0Ly8gSWYgdGhlIHByZWNlZGluZyB0b2tlbiB3YXMgYSBkZXNjZW5kYW50IGNvbWJpbmF0b3IsIGluc2VydCBhbiBpbXBsaWNpdCBhbnktZWxlbWVudCBgKmBcblx0XHRcdFx0XHR0b2tlbnNcblx0XHRcdFx0XHRcdC5zbGljZSggMCwgaSAtIDEgKVxuXHRcdFx0XHRcdFx0LmNvbmNhdCggeyB2YWx1ZTogdG9rZW5zWyBpIC0gMiBdLnR5cGUgPT09IFwiIFwiID8gXCIqXCIgOiBcIlwiIH0gKVxuXHRcdFx0XHRcdCkucmVwbGFjZSggcnRyaW0sIFwiJDFcIiApLFxuXHRcdFx0XHRcdG1hdGNoZXIsXG5cdFx0XHRcdFx0aSA8IGogJiYgbWF0Y2hlckZyb21Ub2tlbnMoIHRva2Vucy5zbGljZSggaSwgaiApICksXG5cdFx0XHRcdFx0aiA8IGxlbiAmJiBtYXRjaGVyRnJvbVRva2VucyggKCB0b2tlbnMgPSB0b2tlbnMuc2xpY2UoIGogKSApICksXG5cdFx0XHRcdFx0aiA8IGxlbiAmJiB0b1NlbGVjdG9yKCB0b2tlbnMgKVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0bWF0Y2hlcnMucHVzaCggbWF0Y2hlciApO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBlbGVtZW50TWF0Y2hlciggbWF0Y2hlcnMgKTtcbn1cblxuZnVuY3Rpb24gbWF0Y2hlckZyb21Hcm91cE1hdGNoZXJzKCBlbGVtZW50TWF0Y2hlcnMsIHNldE1hdGNoZXJzICkge1xuXHR2YXIgYnlTZXQgPSBzZXRNYXRjaGVycy5sZW5ndGggPiAwLFxuXHRcdGJ5RWxlbWVudCA9IGVsZW1lbnRNYXRjaGVycy5sZW5ndGggPiAwLFxuXHRcdHN1cGVyTWF0Y2hlciA9IGZ1bmN0aW9uKCBzZWVkLCBjb250ZXh0LCB4bWwsIHJlc3VsdHMsIG91dGVybW9zdCApIHtcblx0XHRcdHZhciBlbGVtLCBqLCBtYXRjaGVyLFxuXHRcdFx0XHRtYXRjaGVkQ291bnQgPSAwLFxuXHRcdFx0XHRpID0gXCIwXCIsXG5cdFx0XHRcdHVubWF0Y2hlZCA9IHNlZWQgJiYgW10sXG5cdFx0XHRcdHNldE1hdGNoZWQgPSBbXSxcblx0XHRcdFx0Y29udGV4dEJhY2t1cCA9IG91dGVybW9zdENvbnRleHQsXG5cblx0XHRcdFx0Ly8gV2UgbXVzdCBhbHdheXMgaGF2ZSBlaXRoZXIgc2VlZCBlbGVtZW50cyBvciBvdXRlcm1vc3QgY29udGV4dFxuXHRcdFx0XHRlbGVtcyA9IHNlZWQgfHwgYnlFbGVtZW50ICYmIEV4cHIuZmluZFsgXCJUQUdcIiBdKCBcIipcIiwgb3V0ZXJtb3N0ICksXG5cblx0XHRcdFx0Ly8gVXNlIGludGVnZXIgZGlycnVucyBpZmYgdGhpcyBpcyB0aGUgb3V0ZXJtb3N0IG1hdGNoZXJcblx0XHRcdFx0ZGlycnVuc1VuaXF1ZSA9ICggZGlycnVucyArPSBjb250ZXh0QmFja3VwID09IG51bGwgPyAxIDogTWF0aC5yYW5kb20oKSB8fCAwLjEgKSxcblx0XHRcdFx0bGVuID0gZWxlbXMubGVuZ3RoO1xuXG5cdFx0XHRpZiAoIG91dGVybW9zdCApIHtcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBJRSAxMSssIEVkZ2UgMTcgLSAxOCtcblx0XHRcdFx0Ly8gSUUvRWRnZSBzb21ldGltZXMgdGhyb3cgYSBcIlBlcm1pc3Npb24gZGVuaWVkXCIgZXJyb3Igd2hlbiBzdHJpY3QtY29tcGFyaW5nXG5cdFx0XHRcdC8vIHR3byBkb2N1bWVudHM7IHNoYWxsb3cgY29tcGFyaXNvbnMgd29yay5cblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuXHRcdFx0XHRvdXRlcm1vc3RDb250ZXh0ID0gY29udGV4dCA9PSBkb2N1bWVudCB8fCBjb250ZXh0IHx8IG91dGVybW9zdDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWRkIGVsZW1lbnRzIHBhc3NpbmcgZWxlbWVudE1hdGNoZXJzIGRpcmVjdGx5IHRvIHJlc3VsdHNcblx0XHRcdC8vIFN1cHBvcnQ6IElFPDksIFNhZmFyaVxuXHRcdFx0Ly8gVG9sZXJhdGUgTm9kZUxpc3QgcHJvcGVydGllcyAoSUU6IFwibGVuZ3RoXCI7IFNhZmFyaTogPG51bWJlcj4pIG1hdGNoaW5nIGVsZW1lbnRzIGJ5IGlkXG5cdFx0XHRmb3IgKCA7IGkgIT09IGxlbiAmJiAoIGVsZW0gPSBlbGVtc1sgaSBdICkgIT0gbnVsbDsgaSsrICkge1xuXHRcdFx0XHRpZiAoIGJ5RWxlbWVudCAmJiBlbGVtICkge1xuXHRcdFx0XHRcdGogPSAwO1xuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgMTErLCBFZGdlIDE3IC0gMTgrXG5cdFx0XHRcdFx0Ly8gSUUvRWRnZSBzb21ldGltZXMgdGhyb3cgYSBcIlBlcm1pc3Npb24gZGVuaWVkXCIgZXJyb3Igd2hlbiBzdHJpY3QtY29tcGFyaW5nXG5cdFx0XHRcdFx0Ly8gdHdvIGRvY3VtZW50czsgc2hhbGxvdyBjb21wYXJpc29ucyB3b3JrLlxuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcblx0XHRcdFx0XHRpZiAoICFjb250ZXh0ICYmIGVsZW0ub3duZXJEb2N1bWVudCAhPSBkb2N1bWVudCApIHtcblx0XHRcdFx0XHRcdHNldERvY3VtZW50KCBlbGVtICk7XG5cdFx0XHRcdFx0XHR4bWwgPSAhZG9jdW1lbnRJc0hUTUw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHdoaWxlICggKCBtYXRjaGVyID0gZWxlbWVudE1hdGNoZXJzWyBqKysgXSApICkge1xuXHRcdFx0XHRcdFx0aWYgKCBtYXRjaGVyKCBlbGVtLCBjb250ZXh0IHx8IGRvY3VtZW50LCB4bWwgKSApIHtcblx0XHRcdFx0XHRcdFx0cmVzdWx0cy5wdXNoKCBlbGVtICk7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIG91dGVybW9zdCApIHtcblx0XHRcdFx0XHRcdGRpcnJ1bnMgPSBkaXJydW5zVW5pcXVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFRyYWNrIHVubWF0Y2hlZCBlbGVtZW50cyBmb3Igc2V0IGZpbHRlcnNcblx0XHRcdFx0aWYgKCBieVNldCApIHtcblxuXHRcdFx0XHRcdC8vIFRoZXkgd2lsbCBoYXZlIGdvbmUgdGhyb3VnaCBhbGwgcG9zc2libGUgbWF0Y2hlcnNcblx0XHRcdFx0XHRpZiAoICggZWxlbSA9ICFtYXRjaGVyICYmIGVsZW0gKSApIHtcblx0XHRcdFx0XHRcdG1hdGNoZWRDb3VudC0tO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIExlbmd0aGVuIHRoZSBhcnJheSBmb3IgZXZlcnkgZWxlbWVudCwgbWF0Y2hlZCBvciBub3Rcblx0XHRcdFx0XHRpZiAoIHNlZWQgKSB7XG5cdFx0XHRcdFx0XHR1bm1hdGNoZWQucHVzaCggZWxlbSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBgaWAgaXMgbm93IHRoZSBjb3VudCBvZiBlbGVtZW50cyB2aXNpdGVkIGFib3ZlLCBhbmQgYWRkaW5nIGl0IHRvIGBtYXRjaGVkQ291bnRgXG5cdFx0XHQvLyBtYWtlcyB0aGUgbGF0dGVyIG5vbm5lZ2F0aXZlLlxuXHRcdFx0bWF0Y2hlZENvdW50ICs9IGk7XG5cblx0XHRcdC8vIEFwcGx5IHNldCBmaWx0ZXJzIHRvIHVubWF0Y2hlZCBlbGVtZW50c1xuXHRcdFx0Ly8gTk9URTogVGhpcyBjYW4gYmUgc2tpcHBlZCBpZiB0aGVyZSBhcmUgbm8gdW5tYXRjaGVkIGVsZW1lbnRzIChpLmUuLCBgbWF0Y2hlZENvdW50YFxuXHRcdFx0Ly8gZXF1YWxzIGBpYCksIHVubGVzcyB3ZSBkaWRuJ3QgdmlzaXQgX2FueV8gZWxlbWVudHMgaW4gdGhlIGFib3ZlIGxvb3AgYmVjYXVzZSB3ZSBoYXZlXG5cdFx0XHQvLyBubyBlbGVtZW50IG1hdGNoZXJzIGFuZCBubyBzZWVkLlxuXHRcdFx0Ly8gSW5jcmVtZW50aW5nIGFuIGluaXRpYWxseS1zdHJpbmcgXCIwXCIgYGlgIGFsbG93cyBgaWAgdG8gcmVtYWluIGEgc3RyaW5nIG9ubHkgaW4gdGhhdFxuXHRcdFx0Ly8gY2FzZSwgd2hpY2ggd2lsbCByZXN1bHQgaW4gYSBcIjAwXCIgYG1hdGNoZWRDb3VudGAgdGhhdCBkaWZmZXJzIGZyb20gYGlgIGJ1dCBpcyBhbHNvXG5cdFx0XHQvLyBudW1lcmljYWxseSB6ZXJvLlxuXHRcdFx0aWYgKCBieVNldCAmJiBpICE9PSBtYXRjaGVkQ291bnQgKSB7XG5cdFx0XHRcdGogPSAwO1xuXHRcdFx0XHR3aGlsZSAoICggbWF0Y2hlciA9IHNldE1hdGNoZXJzWyBqKysgXSApICkge1xuXHRcdFx0XHRcdG1hdGNoZXIoIHVubWF0Y2hlZCwgc2V0TWF0Y2hlZCwgY29udGV4dCwgeG1sICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIHNlZWQgKSB7XG5cblx0XHRcdFx0XHQvLyBSZWludGVncmF0ZSBlbGVtZW50IG1hdGNoZXMgdG8gZWxpbWluYXRlIHRoZSBuZWVkIGZvciBzb3J0aW5nXG5cdFx0XHRcdFx0aWYgKCBtYXRjaGVkQ291bnQgPiAwICkge1xuXHRcdFx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0XHRcdGlmICggISggdW5tYXRjaGVkWyBpIF0gfHwgc2V0TWF0Y2hlZFsgaSBdICkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0TWF0Y2hlZFsgaSBdID0gcG9wLmNhbGwoIHJlc3VsdHMgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIERpc2NhcmQgaW5kZXggcGxhY2Vob2xkZXIgdmFsdWVzIHRvIGdldCBvbmx5IGFjdHVhbCBtYXRjaGVzXG5cdFx0XHRcdFx0c2V0TWF0Y2hlZCA9IGNvbmRlbnNlKCBzZXRNYXRjaGVkICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBBZGQgbWF0Y2hlcyB0byByZXN1bHRzXG5cdFx0XHRcdHB1c2guYXBwbHkoIHJlc3VsdHMsIHNldE1hdGNoZWQgKTtcblxuXHRcdFx0XHQvLyBTZWVkbGVzcyBzZXQgbWF0Y2hlcyBzdWNjZWVkaW5nIG11bHRpcGxlIHN1Y2Nlc3NmdWwgbWF0Y2hlcnMgc3RpcHVsYXRlIHNvcnRpbmdcblx0XHRcdFx0aWYgKCBvdXRlcm1vc3QgJiYgIXNlZWQgJiYgc2V0TWF0Y2hlZC5sZW5ndGggPiAwICYmXG5cdFx0XHRcdFx0KCBtYXRjaGVkQ291bnQgKyBzZXRNYXRjaGVycy5sZW5ndGggKSA+IDEgKSB7XG5cblx0XHRcdFx0XHRTaXp6bGUudW5pcXVlU29ydCggcmVzdWx0cyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIE92ZXJyaWRlIG1hbmlwdWxhdGlvbiBvZiBnbG9iYWxzIGJ5IG5lc3RlZCBtYXRjaGVyc1xuXHRcdFx0aWYgKCBvdXRlcm1vc3QgKSB7XG5cdFx0XHRcdGRpcnJ1bnMgPSBkaXJydW5zVW5pcXVlO1xuXHRcdFx0XHRvdXRlcm1vc3RDb250ZXh0ID0gY29udGV4dEJhY2t1cDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHVubWF0Y2hlZDtcblx0XHR9O1xuXG5cdHJldHVybiBieVNldCA/XG5cdFx0bWFya0Z1bmN0aW9uKCBzdXBlck1hdGNoZXIgKSA6XG5cdFx0c3VwZXJNYXRjaGVyO1xufVxuXG5jb21waWxlID0gU2l6emxlLmNvbXBpbGUgPSBmdW5jdGlvbiggc2VsZWN0b3IsIG1hdGNoIC8qIEludGVybmFsIFVzZSBPbmx5ICovICkge1xuXHR2YXIgaSxcblx0XHRzZXRNYXRjaGVycyA9IFtdLFxuXHRcdGVsZW1lbnRNYXRjaGVycyA9IFtdLFxuXHRcdGNhY2hlZCA9IGNvbXBpbGVyQ2FjaGVbIHNlbGVjdG9yICsgXCIgXCIgXTtcblxuXHRpZiAoICFjYWNoZWQgKSB7XG5cblx0XHQvLyBHZW5lcmF0ZSBhIGZ1bmN0aW9uIG9mIHJlY3Vyc2l2ZSBmdW5jdGlvbnMgdGhhdCBjYW4gYmUgdXNlZCB0byBjaGVjayBlYWNoIGVsZW1lbnRcblx0XHRpZiAoICFtYXRjaCApIHtcblx0XHRcdG1hdGNoID0gdG9rZW5pemUoIHNlbGVjdG9yICk7XG5cdFx0fVxuXHRcdGkgPSBtYXRjaC5sZW5ndGg7XG5cdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRjYWNoZWQgPSBtYXRjaGVyRnJvbVRva2VucyggbWF0Y2hbIGkgXSApO1xuXHRcdFx0aWYgKCBjYWNoZWRbIGV4cGFuZG8gXSApIHtcblx0XHRcdFx0c2V0TWF0Y2hlcnMucHVzaCggY2FjaGVkICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbGVtZW50TWF0Y2hlcnMucHVzaCggY2FjaGVkICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQ2FjaGUgdGhlIGNvbXBpbGVkIGZ1bmN0aW9uXG5cdFx0Y2FjaGVkID0gY29tcGlsZXJDYWNoZShcblx0XHRcdHNlbGVjdG9yLFxuXHRcdFx0bWF0Y2hlckZyb21Hcm91cE1hdGNoZXJzKCBlbGVtZW50TWF0Y2hlcnMsIHNldE1hdGNoZXJzIClcblx0XHQpO1xuXG5cdFx0Ly8gU2F2ZSBzZWxlY3RvciBhbmQgdG9rZW5pemF0aW9uXG5cdFx0Y2FjaGVkLnNlbGVjdG9yID0gc2VsZWN0b3I7XG5cdH1cblx0cmV0dXJuIGNhY2hlZDtcbn07XG5cbi8qKlxuICogQSBsb3ctbGV2ZWwgc2VsZWN0aW9uIGZ1bmN0aW9uIHRoYXQgd29ya3Mgd2l0aCBTaXp6bGUncyBjb21waWxlZFxuICogIHNlbGVjdG9yIGZ1bmN0aW9uc1xuICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IHNlbGVjdG9yIEEgc2VsZWN0b3Igb3IgYSBwcmUtY29tcGlsZWRcbiAqICBzZWxlY3RvciBmdW5jdGlvbiBidWlsdCB3aXRoIFNpenpsZS5jb21waWxlXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGNvbnRleHRcbiAqIEBwYXJhbSB7QXJyYXl9IFtyZXN1bHRzXVxuICogQHBhcmFtIHtBcnJheX0gW3NlZWRdIEEgc2V0IG9mIGVsZW1lbnRzIHRvIG1hdGNoIGFnYWluc3RcbiAqL1xuc2VsZWN0ID0gU2l6emxlLnNlbGVjdCA9IGZ1bmN0aW9uKCBzZWxlY3RvciwgY29udGV4dCwgcmVzdWx0cywgc2VlZCApIHtcblx0dmFyIGksIHRva2VucywgdG9rZW4sIHR5cGUsIGZpbmQsXG5cdFx0Y29tcGlsZWQgPSB0eXBlb2Ygc2VsZWN0b3IgPT09IFwiZnVuY3Rpb25cIiAmJiBzZWxlY3Rvcixcblx0XHRtYXRjaCA9ICFzZWVkICYmIHRva2VuaXplKCAoIHNlbGVjdG9yID0gY29tcGlsZWQuc2VsZWN0b3IgfHwgc2VsZWN0b3IgKSApO1xuXG5cdHJlc3VsdHMgPSByZXN1bHRzIHx8IFtdO1xuXG5cdC8vIFRyeSB0byBtaW5pbWl6ZSBvcGVyYXRpb25zIGlmIHRoZXJlIGlzIG9ubHkgb25lIHNlbGVjdG9yIGluIHRoZSBsaXN0IGFuZCBubyBzZWVkXG5cdC8vICh0aGUgbGF0dGVyIG9mIHdoaWNoIGd1YXJhbnRlZXMgdXMgY29udGV4dClcblx0aWYgKCBtYXRjaC5sZW5ndGggPT09IDEgKSB7XG5cblx0XHQvLyBSZWR1Y2UgY29udGV4dCBpZiB0aGUgbGVhZGluZyBjb21wb3VuZCBzZWxlY3RvciBpcyBhbiBJRFxuXHRcdHRva2VucyA9IG1hdGNoWyAwIF0gPSBtYXRjaFsgMCBdLnNsaWNlKCAwICk7XG5cdFx0aWYgKCB0b2tlbnMubGVuZ3RoID4gMiAmJiAoIHRva2VuID0gdG9rZW5zWyAwIF0gKS50eXBlID09PSBcIklEXCIgJiZcblx0XHRcdGNvbnRleHQubm9kZVR5cGUgPT09IDkgJiYgZG9jdW1lbnRJc0hUTUwgJiYgRXhwci5yZWxhdGl2ZVsgdG9rZW5zWyAxIF0udHlwZSBdICkge1xuXG5cdFx0XHRjb250ZXh0ID0gKCBFeHByLmZpbmRbIFwiSURcIiBdKCB0b2tlbi5tYXRjaGVzWyAwIF1cblx0XHRcdFx0LnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICksIGNvbnRleHQgKSB8fCBbXSApWyAwIF07XG5cdFx0XHRpZiAoICFjb250ZXh0ICkge1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblxuXHRcdFx0Ly8gUHJlY29tcGlsZWQgbWF0Y2hlcnMgd2lsbCBzdGlsbCB2ZXJpZnkgYW5jZXN0cnksIHNvIHN0ZXAgdXAgYSBsZXZlbFxuXHRcdFx0fSBlbHNlIGlmICggY29tcGlsZWQgKSB7XG5cdFx0XHRcdGNvbnRleHQgPSBjb250ZXh0LnBhcmVudE5vZGU7XG5cdFx0XHR9XG5cblx0XHRcdHNlbGVjdG9yID0gc2VsZWN0b3Iuc2xpY2UoIHRva2Vucy5zaGlmdCgpLnZhbHVlLmxlbmd0aCApO1xuXHRcdH1cblxuXHRcdC8vIEZldGNoIGEgc2VlZCBzZXQgZm9yIHJpZ2h0LXRvLWxlZnQgbWF0Y2hpbmdcblx0XHRpID0gbWF0Y2hFeHByWyBcIm5lZWRzQ29udGV4dFwiIF0udGVzdCggc2VsZWN0b3IgKSA/IDAgOiB0b2tlbnMubGVuZ3RoO1xuXHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0dG9rZW4gPSB0b2tlbnNbIGkgXTtcblxuXHRcdFx0Ly8gQWJvcnQgaWYgd2UgaGl0IGEgY29tYmluYXRvclxuXHRcdFx0aWYgKCBFeHByLnJlbGF0aXZlWyAoIHR5cGUgPSB0b2tlbi50eXBlICkgXSApIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRpZiAoICggZmluZCA9IEV4cHIuZmluZFsgdHlwZSBdICkgKSB7XG5cblx0XHRcdFx0Ly8gU2VhcmNoLCBleHBhbmRpbmcgY29udGV4dCBmb3IgbGVhZGluZyBzaWJsaW5nIGNvbWJpbmF0b3JzXG5cdFx0XHRcdGlmICggKCBzZWVkID0gZmluZChcblx0XHRcdFx0XHR0b2tlbi5tYXRjaGVzWyAwIF0ucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKSxcblx0XHRcdFx0XHRyc2libGluZy50ZXN0KCB0b2tlbnNbIDAgXS50eXBlICkgJiYgdGVzdENvbnRleHQoIGNvbnRleHQucGFyZW50Tm9kZSApIHx8XG5cdFx0XHRcdFx0XHRjb250ZXh0XG5cdFx0XHRcdCkgKSApIHtcblxuXHRcdFx0XHRcdC8vIElmIHNlZWQgaXMgZW1wdHkgb3Igbm8gdG9rZW5zIHJlbWFpbiwgd2UgY2FuIHJldHVybiBlYXJseVxuXHRcdFx0XHRcdHRva2Vucy5zcGxpY2UoIGksIDEgKTtcblx0XHRcdFx0XHRzZWxlY3RvciA9IHNlZWQubGVuZ3RoICYmIHRvU2VsZWN0b3IoIHRva2VucyApO1xuXHRcdFx0XHRcdGlmICggIXNlbGVjdG9yICkge1xuXHRcdFx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cywgc2VlZCApO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBDb21waWxlIGFuZCBleGVjdXRlIGEgZmlsdGVyaW5nIGZ1bmN0aW9uIGlmIG9uZSBpcyBub3QgcHJvdmlkZWRcblx0Ly8gUHJvdmlkZSBgbWF0Y2hgIHRvIGF2b2lkIHJldG9rZW5pemF0aW9uIGlmIHdlIG1vZGlmaWVkIHRoZSBzZWxlY3RvciBhYm92ZVxuXHQoIGNvbXBpbGVkIHx8IGNvbXBpbGUoIHNlbGVjdG9yLCBtYXRjaCApICkoXG5cdFx0c2VlZCxcblx0XHRjb250ZXh0LFxuXHRcdCFkb2N1bWVudElzSFRNTCxcblx0XHRyZXN1bHRzLFxuXHRcdCFjb250ZXh0IHx8IHJzaWJsaW5nLnRlc3QoIHNlbGVjdG9yICkgJiYgdGVzdENvbnRleHQoIGNvbnRleHQucGFyZW50Tm9kZSApIHx8IGNvbnRleHRcblx0KTtcblx0cmV0dXJuIHJlc3VsdHM7XG59O1xuXG4vLyBPbmUtdGltZSBhc3NpZ25tZW50c1xuXG4vLyBTb3J0IHN0YWJpbGl0eVxuc3VwcG9ydC5zb3J0U3RhYmxlID0gZXhwYW5kby5zcGxpdCggXCJcIiApLnNvcnQoIHNvcnRPcmRlciApLmpvaW4oIFwiXCIgKSA9PT0gZXhwYW5kbztcblxuLy8gU3VwcG9ydDogQ2hyb21lIDE0LTM1K1xuLy8gQWx3YXlzIGFzc3VtZSBkdXBsaWNhdGVzIGlmIHRoZXkgYXJlbid0IHBhc3NlZCB0byB0aGUgY29tcGFyaXNvbiBmdW5jdGlvblxuc3VwcG9ydC5kZXRlY3REdXBsaWNhdGVzID0gISFoYXNEdXBsaWNhdGU7XG5cbi8vIEluaXRpYWxpemUgYWdhaW5zdCB0aGUgZGVmYXVsdCBkb2N1bWVudFxuc2V0RG9jdW1lbnQoKTtcblxuLy8gU3VwcG9ydDogV2Via2l0PDUzNy4zMiAtIFNhZmFyaSA2LjAuMy9DaHJvbWUgMjUgKGZpeGVkIGluIENocm9tZSAyNylcbi8vIERldGFjaGVkIG5vZGVzIGNvbmZvdW5kaW5nbHkgZm9sbG93ICplYWNoIG90aGVyKlxuc3VwcG9ydC5zb3J0RGV0YWNoZWQgPSBhc3NlcnQoIGZ1bmN0aW9uKCBlbCApIHtcblxuXHQvLyBTaG91bGQgcmV0dXJuIDEsIGJ1dCByZXR1cm5zIDQgKGZvbGxvd2luZylcblx0cmV0dXJuIGVsLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImZpZWxkc2V0XCIgKSApICYgMTtcbn0gKTtcblxuLy8gU3VwcG9ydDogSUU8OFxuLy8gUHJldmVudCBhdHRyaWJ1dGUvcHJvcGVydHkgXCJpbnRlcnBvbGF0aW9uXCJcbi8vIGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvbXM1MzY0MjklMjhWUy44NSUyOS5hc3B4XG5pZiAoICFhc3NlcnQoIGZ1bmN0aW9uKCBlbCApIHtcblx0ZWwuaW5uZXJIVE1MID0gXCI8YSBocmVmPScjJz48L2E+XCI7XG5cdHJldHVybiBlbC5maXJzdENoaWxkLmdldEF0dHJpYnV0ZSggXCJocmVmXCIgKSA9PT0gXCIjXCI7XG59ICkgKSB7XG5cdGFkZEhhbmRsZSggXCJ0eXBlfGhyZWZ8aGVpZ2h0fHdpZHRoXCIsIGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCBpc1hNTCApIHtcblx0XHRpZiAoICFpc1hNTCApIHtcblx0XHRcdHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZSggbmFtZSwgbmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInR5cGVcIiA/IDEgOiAyICk7XG5cdFx0fVxuXHR9ICk7XG59XG5cbi8vIFN1cHBvcnQ6IElFPDlcbi8vIFVzZSBkZWZhdWx0VmFsdWUgaW4gcGxhY2Ugb2YgZ2V0QXR0cmlidXRlKFwidmFsdWVcIilcbmlmICggIXN1cHBvcnQuYXR0cmlidXRlcyB8fCAhYXNzZXJ0KCBmdW5jdGlvbiggZWwgKSB7XG5cdGVsLmlubmVySFRNTCA9IFwiPGlucHV0Lz5cIjtcblx0ZWwuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoIFwidmFsdWVcIiwgXCJcIiApO1xuXHRyZXR1cm4gZWwuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoIFwidmFsdWVcIiApID09PSBcIlwiO1xufSApICkge1xuXHRhZGRIYW5kbGUoIFwidmFsdWVcIiwgZnVuY3Rpb24oIGVsZW0sIF9uYW1lLCBpc1hNTCApIHtcblx0XHRpZiAoICFpc1hNTCAmJiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiaW5wdXRcIiApIHtcblx0XHRcdHJldHVybiBlbGVtLmRlZmF1bHRWYWx1ZTtcblx0XHR9XG5cdH0gKTtcbn1cblxuLy8gU3VwcG9ydDogSUU8OVxuLy8gVXNlIGdldEF0dHJpYnV0ZU5vZGUgdG8gZmV0Y2ggYm9vbGVhbnMgd2hlbiBnZXRBdHRyaWJ1dGUgbGllc1xuaWYgKCAhYXNzZXJ0KCBmdW5jdGlvbiggZWwgKSB7XG5cdHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoIFwiZGlzYWJsZWRcIiApID09IG51bGw7XG59ICkgKSB7XG5cdGFkZEhhbmRsZSggYm9vbGVhbnMsIGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCBpc1hNTCApIHtcblx0XHR2YXIgdmFsO1xuXHRcdGlmICggIWlzWE1MICkge1xuXHRcdFx0cmV0dXJuIGVsZW1bIG5hbWUgXSA9PT0gdHJ1ZSA/IG5hbWUudG9Mb3dlckNhc2UoKSA6XG5cdFx0XHRcdCggdmFsID0gZWxlbS5nZXRBdHRyaWJ1dGVOb2RlKCBuYW1lICkgKSAmJiB2YWwuc3BlY2lmaWVkID9cblx0XHRcdFx0XHR2YWwudmFsdWUgOlxuXHRcdFx0XHRcdG51bGw7XG5cdFx0fVxuXHR9ICk7XG59XG5cbnJldHVybiBTaXp6bGU7XG5cbn0gKSggd2luZG93ICk7XG5cblxuXG5qUXVlcnkuZmluZCA9IFNpenpsZTtcbmpRdWVyeS5leHByID0gU2l6emxlLnNlbGVjdG9ycztcblxuLy8gRGVwcmVjYXRlZFxualF1ZXJ5LmV4cHJbIFwiOlwiIF0gPSBqUXVlcnkuZXhwci5wc2V1ZG9zO1xualF1ZXJ5LnVuaXF1ZVNvcnQgPSBqUXVlcnkudW5pcXVlID0gU2l6emxlLnVuaXF1ZVNvcnQ7XG5qUXVlcnkudGV4dCA9IFNpenpsZS5nZXRUZXh0O1xualF1ZXJ5LmlzWE1MRG9jID0gU2l6emxlLmlzWE1MO1xualF1ZXJ5LmNvbnRhaW5zID0gU2l6emxlLmNvbnRhaW5zO1xualF1ZXJ5LmVzY2FwZVNlbGVjdG9yID0gU2l6emxlLmVzY2FwZTtcblxuXG5cblxudmFyIGRpciA9IGZ1bmN0aW9uKCBlbGVtLCBkaXIsIHVudGlsICkge1xuXHR2YXIgbWF0Y2hlZCA9IFtdLFxuXHRcdHRydW5jYXRlID0gdW50aWwgIT09IHVuZGVmaW5lZDtcblxuXHR3aGlsZSAoICggZWxlbSA9IGVsZW1bIGRpciBdICkgJiYgZWxlbS5ub2RlVHlwZSAhPT0gOSApIHtcblx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0XHRpZiAoIHRydW5jYXRlICYmIGpRdWVyeSggZWxlbSApLmlzKCB1bnRpbCApICkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdG1hdGNoZWQucHVzaCggZWxlbSApO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gbWF0Y2hlZDtcbn07XG5cblxudmFyIHNpYmxpbmdzID0gZnVuY3Rpb24oIG4sIGVsZW0gKSB7XG5cdHZhciBtYXRjaGVkID0gW107XG5cblx0Zm9yICggOyBuOyBuID0gbi5uZXh0U2libGluZyApIHtcblx0XHRpZiAoIG4ubm9kZVR5cGUgPT09IDEgJiYgbiAhPT0gZWxlbSApIHtcblx0XHRcdG1hdGNoZWQucHVzaCggbiApO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBtYXRjaGVkO1xufTtcblxuXG52YXIgcm5lZWRzQ29udGV4dCA9IGpRdWVyeS5leHByLm1hdGNoLm5lZWRzQ29udGV4dDtcblxuXG5cbmZ1bmN0aW9uIG5vZGVOYW1lKCBlbGVtLCBuYW1lICkge1xuXG5cdHJldHVybiBlbGVtLm5vZGVOYW1lICYmIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG59XG52YXIgcnNpbmdsZVRhZyA9ICggL148KFthLXpdW15cXC9cXDA+OlxceDIwXFx0XFxyXFxuXFxmXSopW1xceDIwXFx0XFxyXFxuXFxmXSpcXC8/Pig/OjxcXC9cXDE+fCkkL2kgKTtcblxuXG5cbi8vIEltcGxlbWVudCB0aGUgaWRlbnRpY2FsIGZ1bmN0aW9uYWxpdHkgZm9yIGZpbHRlciBhbmQgbm90XG5mdW5jdGlvbiB3aW5ub3coIGVsZW1lbnRzLCBxdWFsaWZpZXIsIG5vdCApIHtcblx0aWYgKCBpc0Z1bmN0aW9uKCBxdWFsaWZpZXIgKSApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmdyZXAoIGVsZW1lbnRzLCBmdW5jdGlvbiggZWxlbSwgaSApIHtcblx0XHRcdHJldHVybiAhIXF1YWxpZmllci5jYWxsKCBlbGVtLCBpLCBlbGVtICkgIT09IG5vdDtcblx0XHR9ICk7XG5cdH1cblxuXHQvLyBTaW5nbGUgZWxlbWVudFxuXHRpZiAoIHF1YWxpZmllci5ub2RlVHlwZSApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmdyZXAoIGVsZW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiAoIGVsZW0gPT09IHF1YWxpZmllciApICE9PSBub3Q7XG5cdFx0fSApO1xuXHR9XG5cblx0Ly8gQXJyYXlsaWtlIG9mIGVsZW1lbnRzIChqUXVlcnksIGFyZ3VtZW50cywgQXJyYXkpXG5cdGlmICggdHlwZW9mIHF1YWxpZmllciAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmdyZXAoIGVsZW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiAoIGluZGV4T2YuY2FsbCggcXVhbGlmaWVyLCBlbGVtICkgPiAtMSApICE9PSBub3Q7XG5cdFx0fSApO1xuXHR9XG5cblx0Ly8gRmlsdGVyZWQgZGlyZWN0bHkgZm9yIGJvdGggc2ltcGxlIGFuZCBjb21wbGV4IHNlbGVjdG9yc1xuXHRyZXR1cm4galF1ZXJ5LmZpbHRlciggcXVhbGlmaWVyLCBlbGVtZW50cywgbm90ICk7XG59XG5cbmpRdWVyeS5maWx0ZXIgPSBmdW5jdGlvbiggZXhwciwgZWxlbXMsIG5vdCApIHtcblx0dmFyIGVsZW0gPSBlbGVtc1sgMCBdO1xuXG5cdGlmICggbm90ICkge1xuXHRcdGV4cHIgPSBcIjpub3QoXCIgKyBleHByICsgXCIpXCI7XG5cdH1cblxuXHRpZiAoIGVsZW1zLmxlbmd0aCA9PT0gMSAmJiBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdHJldHVybiBqUXVlcnkuZmluZC5tYXRjaGVzU2VsZWN0b3IoIGVsZW0sIGV4cHIgKSA/IFsgZWxlbSBdIDogW107XG5cdH1cblxuXHRyZXR1cm4galF1ZXJ5LmZpbmQubWF0Y2hlcyggZXhwciwgalF1ZXJ5LmdyZXAoIGVsZW1zLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gZWxlbS5ub2RlVHlwZSA9PT0gMTtcblx0fSApICk7XG59O1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGZpbmQ6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHR2YXIgaSwgcmV0LFxuXHRcdFx0bGVuID0gdGhpcy5sZW5ndGgsXG5cdFx0XHRzZWxmID0gdGhpcztcblxuXHRcdGlmICggdHlwZW9mIHNlbGVjdG9yICE9PSBcInN0cmluZ1wiICkge1xuXHRcdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCBqUXVlcnkoIHNlbGVjdG9yICkuZmlsdGVyKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0Zm9yICggaSA9IDA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdFx0XHRpZiAoIGpRdWVyeS5jb250YWlucyggc2VsZlsgaSBdLCB0aGlzICkgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gKSApO1xuXHRcdH1cblxuXHRcdHJldCA9IHRoaXMucHVzaFN0YWNrKCBbXSApO1xuXG5cdFx0Zm9yICggaSA9IDA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdGpRdWVyeS5maW5kKCBzZWxlY3Rvciwgc2VsZlsgaSBdLCByZXQgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbGVuID4gMSA/IGpRdWVyeS51bmlxdWVTb3J0KCByZXQgKSA6IHJldDtcblx0fSxcblx0ZmlsdGVyOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCB3aW5ub3coIHRoaXMsIHNlbGVjdG9yIHx8IFtdLCBmYWxzZSApICk7XG5cdH0sXG5cdG5vdDogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggd2lubm93KCB0aGlzLCBzZWxlY3RvciB8fCBbXSwgdHJ1ZSApICk7XG5cdH0sXG5cdGlzOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0cmV0dXJuICEhd2lubm93KFxuXHRcdFx0dGhpcyxcblxuXHRcdFx0Ly8gSWYgdGhpcyBpcyBhIHBvc2l0aW9uYWwvcmVsYXRpdmUgc2VsZWN0b3IsIGNoZWNrIG1lbWJlcnNoaXAgaW4gdGhlIHJldHVybmVkIHNldFxuXHRcdFx0Ly8gc28gJChcInA6Zmlyc3RcIikuaXMoXCJwOmxhc3RcIikgd29uJ3QgcmV0dXJuIHRydWUgZm9yIGEgZG9jIHdpdGggdHdvIFwicFwiLlxuXHRcdFx0dHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiICYmIHJuZWVkc0NvbnRleHQudGVzdCggc2VsZWN0b3IgKSA/XG5cdFx0XHRcdGpRdWVyeSggc2VsZWN0b3IgKSA6XG5cdFx0XHRcdHNlbGVjdG9yIHx8IFtdLFxuXHRcdFx0ZmFsc2Vcblx0XHQpLmxlbmd0aDtcblx0fVxufSApO1xuXG5cbi8vIEluaXRpYWxpemUgYSBqUXVlcnkgb2JqZWN0XG5cblxuLy8gQSBjZW50cmFsIHJlZmVyZW5jZSB0byB0aGUgcm9vdCBqUXVlcnkoZG9jdW1lbnQpXG52YXIgcm9vdGpRdWVyeSxcblxuXHQvLyBBIHNpbXBsZSB3YXkgdG8gY2hlY2sgZm9yIEhUTUwgc3RyaW5nc1xuXHQvLyBQcmlvcml0aXplICNpZCBvdmVyIDx0YWc+IHRvIGF2b2lkIFhTUyB2aWEgbG9jYXRpb24uaGFzaCAoIzk1MjEpXG5cdC8vIFN0cmljdCBIVE1MIHJlY29nbml0aW9uICgjMTEyOTA6IG11c3Qgc3RhcnQgd2l0aCA8KVxuXHQvLyBTaG9ydGN1dCBzaW1wbGUgI2lkIGNhc2UgZm9yIHNwZWVkXG5cdHJxdWlja0V4cHIgPSAvXig/OlxccyooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0rKSkkLyxcblxuXHRpbml0ID0galF1ZXJ5LmZuLmluaXQgPSBmdW5jdGlvbiggc2VsZWN0b3IsIGNvbnRleHQsIHJvb3QgKSB7XG5cdFx0dmFyIG1hdGNoLCBlbGVtO1xuXG5cdFx0Ly8gSEFORExFOiAkKFwiXCIpLCAkKG51bGwpLCAkKHVuZGVmaW5lZCksICQoZmFsc2UpXG5cdFx0aWYgKCAhc2VsZWN0b3IgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHQvLyBNZXRob2QgaW5pdCgpIGFjY2VwdHMgYW4gYWx0ZXJuYXRlIHJvb3RqUXVlcnlcblx0XHQvLyBzbyBtaWdyYXRlIGNhbiBzdXBwb3J0IGpRdWVyeS5zdWIgKGdoLTIxMDEpXG5cdFx0cm9vdCA9IHJvb3QgfHwgcm9vdGpRdWVyeTtcblxuXHRcdC8vIEhhbmRsZSBIVE1MIHN0cmluZ3Ncblx0XHRpZiAoIHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdGlmICggc2VsZWN0b3JbIDAgXSA9PT0gXCI8XCIgJiZcblx0XHRcdFx0c2VsZWN0b3JbIHNlbGVjdG9yLmxlbmd0aCAtIDEgXSA9PT0gXCI+XCIgJiZcblx0XHRcdFx0c2VsZWN0b3IubGVuZ3RoID49IDMgKSB7XG5cblx0XHRcdFx0Ly8gQXNzdW1lIHRoYXQgc3RyaW5ncyB0aGF0IHN0YXJ0IGFuZCBlbmQgd2l0aCA8PiBhcmUgSFRNTCBhbmQgc2tpcCB0aGUgcmVnZXggY2hlY2tcblx0XHRcdFx0bWF0Y2ggPSBbIG51bGwsIHNlbGVjdG9yLCBudWxsIF07XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1hdGNoID0gcnF1aWNrRXhwci5leGVjKCBzZWxlY3RvciApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBNYXRjaCBodG1sIG9yIG1ha2Ugc3VyZSBubyBjb250ZXh0IGlzIHNwZWNpZmllZCBmb3IgI2lkXG5cdFx0XHRpZiAoIG1hdGNoICYmICggbWF0Y2hbIDEgXSB8fCAhY29udGV4dCApICkge1xuXG5cdFx0XHRcdC8vIEhBTkRMRTogJChodG1sKSAtPiAkKGFycmF5KVxuXHRcdFx0XHRpZiAoIG1hdGNoWyAxIF0gKSB7XG5cdFx0XHRcdFx0Y29udGV4dCA9IGNvbnRleHQgaW5zdGFuY2VvZiBqUXVlcnkgPyBjb250ZXh0WyAwIF0gOiBjb250ZXh0O1xuXG5cdFx0XHRcdFx0Ly8gT3B0aW9uIHRvIHJ1biBzY3JpcHRzIGlzIHRydWUgZm9yIGJhY2stY29tcGF0XG5cdFx0XHRcdFx0Ly8gSW50ZW50aW9uYWxseSBsZXQgdGhlIGVycm9yIGJlIHRocm93biBpZiBwYXJzZUhUTUwgaXMgbm90IHByZXNlbnRcblx0XHRcdFx0XHRqUXVlcnkubWVyZ2UoIHRoaXMsIGpRdWVyeS5wYXJzZUhUTUwoXG5cdFx0XHRcdFx0XHRtYXRjaFsgMSBdLFxuXHRcdFx0XHRcdFx0Y29udGV4dCAmJiBjb250ZXh0Lm5vZGVUeXBlID8gY29udGV4dC5vd25lckRvY3VtZW50IHx8IGNvbnRleHQgOiBkb2N1bWVudCxcblx0XHRcdFx0XHRcdHRydWVcblx0XHRcdFx0XHQpICk7XG5cblx0XHRcdFx0XHQvLyBIQU5ETEU6ICQoaHRtbCwgcHJvcHMpXG5cdFx0XHRcdFx0aWYgKCByc2luZ2xlVGFnLnRlc3QoIG1hdGNoWyAxIF0gKSAmJiBqUXVlcnkuaXNQbGFpbk9iamVjdCggY29udGV4dCApICkge1xuXHRcdFx0XHRcdFx0Zm9yICggbWF0Y2ggaW4gY29udGV4dCApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBQcm9wZXJ0aWVzIG9mIGNvbnRleHQgYXJlIGNhbGxlZCBhcyBtZXRob2RzIGlmIHBvc3NpYmxlXG5cdFx0XHRcdFx0XHRcdGlmICggaXNGdW5jdGlvbiggdGhpc1sgbWF0Y2ggXSApICkge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXNbIG1hdGNoIF0oIGNvbnRleHRbIG1hdGNoIF0gKTtcblxuXHRcdFx0XHRcdFx0XHQvLyAuLi5hbmQgb3RoZXJ3aXNlIHNldCBhcyBhdHRyaWJ1dGVzXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5hdHRyKCBtYXRjaCwgY29udGV4dFsgbWF0Y2ggXSApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cblx0XHRcdFx0Ly8gSEFORExFOiAkKCNpZClcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIG1hdGNoWyAyIF0gKTtcblxuXHRcdFx0XHRcdGlmICggZWxlbSApIHtcblxuXHRcdFx0XHRcdFx0Ly8gSW5qZWN0IHRoZSBlbGVtZW50IGRpcmVjdGx5IGludG8gdGhlIGpRdWVyeSBvYmplY3Rcblx0XHRcdFx0XHRcdHRoaXNbIDAgXSA9IGVsZW07XG5cdFx0XHRcdFx0XHR0aGlzLmxlbmd0aCA9IDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9XG5cblx0XHRcdC8vIEhBTkRMRTogJChleHByLCAkKC4uLikpXG5cdFx0XHR9IGVsc2UgaWYgKCAhY29udGV4dCB8fCBjb250ZXh0LmpxdWVyeSApIHtcblx0XHRcdFx0cmV0dXJuICggY29udGV4dCB8fCByb290ICkuZmluZCggc2VsZWN0b3IgKTtcblxuXHRcdFx0Ly8gSEFORExFOiAkKGV4cHIsIGNvbnRleHQpXG5cdFx0XHQvLyAod2hpY2ggaXMganVzdCBlcXVpdmFsZW50IHRvOiAkKGNvbnRleHQpLmZpbmQoZXhwcilcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yKCBjb250ZXh0ICkuZmluZCggc2VsZWN0b3IgKTtcblx0XHRcdH1cblxuXHRcdC8vIEhBTkRMRTogJChET01FbGVtZW50KVxuXHRcdH0gZWxzZSBpZiAoIHNlbGVjdG9yLm5vZGVUeXBlICkge1xuXHRcdFx0dGhpc1sgMCBdID0gc2VsZWN0b3I7XG5cdFx0XHR0aGlzLmxlbmd0aCA9IDE7XG5cdFx0XHRyZXR1cm4gdGhpcztcblxuXHRcdC8vIEhBTkRMRTogJChmdW5jdGlvbilcblx0XHQvLyBTaG9ydGN1dCBmb3IgZG9jdW1lbnQgcmVhZHlcblx0XHR9IGVsc2UgaWYgKCBpc0Z1bmN0aW9uKCBzZWxlY3RvciApICkge1xuXHRcdFx0cmV0dXJuIHJvb3QucmVhZHkgIT09IHVuZGVmaW5lZCA/XG5cdFx0XHRcdHJvb3QucmVhZHkoIHNlbGVjdG9yICkgOlxuXG5cdFx0XHRcdC8vIEV4ZWN1dGUgaW1tZWRpYXRlbHkgaWYgcmVhZHkgaXMgbm90IHByZXNlbnRcblx0XHRcdFx0c2VsZWN0b3IoIGpRdWVyeSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBqUXVlcnkubWFrZUFycmF5KCBzZWxlY3RvciwgdGhpcyApO1xuXHR9O1xuXG4vLyBHaXZlIHRoZSBpbml0IGZ1bmN0aW9uIHRoZSBqUXVlcnkgcHJvdG90eXBlIGZvciBsYXRlciBpbnN0YW50aWF0aW9uXG5pbml0LnByb3RvdHlwZSA9IGpRdWVyeS5mbjtcblxuLy8gSW5pdGlhbGl6ZSBjZW50cmFsIHJlZmVyZW5jZVxucm9vdGpRdWVyeSA9IGpRdWVyeSggZG9jdW1lbnQgKTtcblxuXG52YXIgcnBhcmVudHNwcmV2ID0gL14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sXG5cblx0Ly8gTWV0aG9kcyBndWFyYW50ZWVkIHRvIHByb2R1Y2UgYSB1bmlxdWUgc2V0IHdoZW4gc3RhcnRpbmcgZnJvbSBhIHVuaXF1ZSBzZXRcblx0Z3VhcmFudGVlZFVuaXF1ZSA9IHtcblx0XHRjaGlsZHJlbjogdHJ1ZSxcblx0XHRjb250ZW50czogdHJ1ZSxcblx0XHRuZXh0OiB0cnVlLFxuXHRcdHByZXY6IHRydWVcblx0fTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRoYXM6IGZ1bmN0aW9uKCB0YXJnZXQgKSB7XG5cdFx0dmFyIHRhcmdldHMgPSBqUXVlcnkoIHRhcmdldCwgdGhpcyApLFxuXHRcdFx0bCA9IHRhcmdldHMubGVuZ3RoO1xuXG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyKCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpID0gMDtcblx0XHRcdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0aWYgKCBqUXVlcnkuY29udGFpbnMoIHRoaXMsIHRhcmdldHNbIGkgXSApICkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdGNsb3Nlc3Q6IGZ1bmN0aW9uKCBzZWxlY3RvcnMsIGNvbnRleHQgKSB7XG5cdFx0dmFyIGN1cixcblx0XHRcdGkgPSAwLFxuXHRcdFx0bCA9IHRoaXMubGVuZ3RoLFxuXHRcdFx0bWF0Y2hlZCA9IFtdLFxuXHRcdFx0dGFyZ2V0cyA9IHR5cGVvZiBzZWxlY3RvcnMgIT09IFwic3RyaW5nXCIgJiYgalF1ZXJ5KCBzZWxlY3RvcnMgKTtcblxuXHRcdC8vIFBvc2l0aW9uYWwgc2VsZWN0b3JzIG5ldmVyIG1hdGNoLCBzaW5jZSB0aGVyZSdzIG5vIF9zZWxlY3Rpb25fIGNvbnRleHRcblx0XHRpZiAoICFybmVlZHNDb250ZXh0LnRlc3QoIHNlbGVjdG9ycyApICkge1xuXHRcdFx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0XHRmb3IgKCBjdXIgPSB0aGlzWyBpIF07IGN1ciAmJiBjdXIgIT09IGNvbnRleHQ7IGN1ciA9IGN1ci5wYXJlbnROb2RlICkge1xuXG5cdFx0XHRcdFx0Ly8gQWx3YXlzIHNraXAgZG9jdW1lbnQgZnJhZ21lbnRzXG5cdFx0XHRcdFx0aWYgKCBjdXIubm9kZVR5cGUgPCAxMSAmJiAoIHRhcmdldHMgP1xuXHRcdFx0XHRcdFx0dGFyZ2V0cy5pbmRleCggY3VyICkgPiAtMSA6XG5cblx0XHRcdFx0XHRcdC8vIERvbid0IHBhc3Mgbm9uLWVsZW1lbnRzIHRvIFNpenpsZVxuXHRcdFx0XHRcdFx0Y3VyLm5vZGVUeXBlID09PSAxICYmXG5cdFx0XHRcdFx0XHRcdGpRdWVyeS5maW5kLm1hdGNoZXNTZWxlY3RvciggY3VyLCBzZWxlY3RvcnMgKSApICkge1xuXG5cdFx0XHRcdFx0XHRtYXRjaGVkLnB1c2goIGN1ciApO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCBtYXRjaGVkLmxlbmd0aCA+IDEgPyBqUXVlcnkudW5pcXVlU29ydCggbWF0Y2hlZCApIDogbWF0Y2hlZCApO1xuXHR9LFxuXG5cdC8vIERldGVybWluZSB0aGUgcG9zaXRpb24gb2YgYW4gZWxlbWVudCB3aXRoaW4gdGhlIHNldFxuXHRpbmRleDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHQvLyBObyBhcmd1bWVudCwgcmV0dXJuIGluZGV4IGluIHBhcmVudFxuXHRcdGlmICggIWVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gKCB0aGlzWyAwIF0gJiYgdGhpc1sgMCBdLnBhcmVudE5vZGUgKSA/IHRoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoIDogLTE7XG5cdFx0fVxuXG5cdFx0Ly8gSW5kZXggaW4gc2VsZWN0b3Jcblx0XHRpZiAoIHR5cGVvZiBlbGVtID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0cmV0dXJuIGluZGV4T2YuY2FsbCggalF1ZXJ5KCBlbGVtICksIHRoaXNbIDAgXSApO1xuXHRcdH1cblxuXHRcdC8vIExvY2F0ZSB0aGUgcG9zaXRpb24gb2YgdGhlIGRlc2lyZWQgZWxlbWVudFxuXHRcdHJldHVybiBpbmRleE9mLmNhbGwoIHRoaXMsXG5cblx0XHRcdC8vIElmIGl0IHJlY2VpdmVzIGEgalF1ZXJ5IG9iamVjdCwgdGhlIGZpcnN0IGVsZW1lbnQgaXMgdXNlZFxuXHRcdFx0ZWxlbS5qcXVlcnkgPyBlbGVtWyAwIF0gOiBlbGVtXG5cdFx0KTtcblx0fSxcblxuXHRhZGQ6IGZ1bmN0aW9uKCBzZWxlY3RvciwgY29udGV4dCApIHtcblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soXG5cdFx0XHRqUXVlcnkudW5pcXVlU29ydChcblx0XHRcdFx0alF1ZXJ5Lm1lcmdlKCB0aGlzLmdldCgpLCBqUXVlcnkoIHNlbGVjdG9yLCBjb250ZXh0ICkgKVxuXHRcdFx0KVxuXHRcdCk7XG5cdH0sXG5cblx0YWRkQmFjazogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHJldHVybiB0aGlzLmFkZCggc2VsZWN0b3IgPT0gbnVsbCA/XG5cdFx0XHR0aGlzLnByZXZPYmplY3QgOiB0aGlzLnByZXZPYmplY3QuZmlsdGVyKCBzZWxlY3RvciApXG5cdFx0KTtcblx0fVxufSApO1xuXG5mdW5jdGlvbiBzaWJsaW5nKCBjdXIsIGRpciApIHtcblx0d2hpbGUgKCAoIGN1ciA9IGN1clsgZGlyIF0gKSAmJiBjdXIubm9kZVR5cGUgIT09IDEgKSB7fVxuXHRyZXR1cm4gY3VyO1xufVxuXG5qUXVlcnkuZWFjaCgge1xuXHRwYXJlbnQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHZhciBwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGU7XG5cdFx0cmV0dXJuIHBhcmVudCAmJiBwYXJlbnQubm9kZVR5cGUgIT09IDExID8gcGFyZW50IDogbnVsbDtcblx0fSxcblx0cGFyZW50czogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIGRpciggZWxlbSwgXCJwYXJlbnROb2RlXCIgKTtcblx0fSxcblx0cGFyZW50c1VudGlsOiBmdW5jdGlvbiggZWxlbSwgX2ksIHVudGlsICkge1xuXHRcdHJldHVybiBkaXIoIGVsZW0sIFwicGFyZW50Tm9kZVwiLCB1bnRpbCApO1xuXHR9LFxuXHRuZXh0OiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gc2libGluZyggZWxlbSwgXCJuZXh0U2libGluZ1wiICk7XG5cdH0sXG5cdHByZXY6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBzaWJsaW5nKCBlbGVtLCBcInByZXZpb3VzU2libGluZ1wiICk7XG5cdH0sXG5cdG5leHRBbGw6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBkaXIoIGVsZW0sIFwibmV4dFNpYmxpbmdcIiApO1xuXHR9LFxuXHRwcmV2QWxsOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gZGlyKCBlbGVtLCBcInByZXZpb3VzU2libGluZ1wiICk7XG5cdH0sXG5cdG5leHRVbnRpbDogZnVuY3Rpb24oIGVsZW0sIF9pLCB1bnRpbCApIHtcblx0XHRyZXR1cm4gZGlyKCBlbGVtLCBcIm5leHRTaWJsaW5nXCIsIHVudGlsICk7XG5cdH0sXG5cdHByZXZVbnRpbDogZnVuY3Rpb24oIGVsZW0sIF9pLCB1bnRpbCApIHtcblx0XHRyZXR1cm4gZGlyKCBlbGVtLCBcInByZXZpb3VzU2libGluZ1wiLCB1bnRpbCApO1xuXHR9LFxuXHRzaWJsaW5nczogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIHNpYmxpbmdzKCAoIGVsZW0ucGFyZW50Tm9kZSB8fCB7fSApLmZpcnN0Q2hpbGQsIGVsZW0gKTtcblx0fSxcblx0Y2hpbGRyZW46IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBzaWJsaW5ncyggZWxlbS5maXJzdENoaWxkICk7XG5cdH0sXG5cdGNvbnRlbnRzOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRpZiAoIGVsZW0uY29udGVudERvY3VtZW50ICE9IG51bGwgJiZcblxuXHRcdFx0Ly8gU3VwcG9ydDogSUUgMTErXG5cdFx0XHQvLyA8b2JqZWN0PiBlbGVtZW50cyB3aXRoIG5vIGBkYXRhYCBhdHRyaWJ1dGUgaGFzIGFuIG9iamVjdFxuXHRcdFx0Ly8gYGNvbnRlbnREb2N1bWVudGAgd2l0aCBhIGBudWxsYCBwcm90b3R5cGUuXG5cdFx0XHRnZXRQcm90byggZWxlbS5jb250ZW50RG9jdW1lbnQgKSApIHtcblxuXHRcdFx0cmV0dXJuIGVsZW0uY29udGVudERvY3VtZW50O1xuXHRcdH1cblxuXHRcdC8vIFN1cHBvcnQ6IElFIDkgLSAxMSBvbmx5LCBpT1MgNyBvbmx5LCBBbmRyb2lkIEJyb3dzZXIgPD00LjMgb25seVxuXHRcdC8vIFRyZWF0IHRoZSB0ZW1wbGF0ZSBlbGVtZW50IGFzIGEgcmVndWxhciBvbmUgaW4gYnJvd3NlcnMgdGhhdFxuXHRcdC8vIGRvbid0IHN1cHBvcnQgaXQuXG5cdFx0aWYgKCBub2RlTmFtZSggZWxlbSwgXCJ0ZW1wbGF0ZVwiICkgKSB7XG5cdFx0XHRlbGVtID0gZWxlbS5jb250ZW50IHx8IGVsZW07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGpRdWVyeS5tZXJnZSggW10sIGVsZW0uY2hpbGROb2RlcyApO1xuXHR9XG59LCBmdW5jdGlvbiggbmFtZSwgZm4gKSB7XG5cdGpRdWVyeS5mblsgbmFtZSBdID0gZnVuY3Rpb24oIHVudGlsLCBzZWxlY3RvciApIHtcblx0XHR2YXIgbWF0Y2hlZCA9IGpRdWVyeS5tYXAoIHRoaXMsIGZuLCB1bnRpbCApO1xuXG5cdFx0aWYgKCBuYW1lLnNsaWNlKCAtNSApICE9PSBcIlVudGlsXCIgKSB7XG5cdFx0XHRzZWxlY3RvciA9IHVudGlsO1xuXHRcdH1cblxuXHRcdGlmICggc2VsZWN0b3IgJiYgdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0bWF0Y2hlZCA9IGpRdWVyeS5maWx0ZXIoIHNlbGVjdG9yLCBtYXRjaGVkICk7XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLmxlbmd0aCA+IDEgKSB7XG5cblx0XHRcdC8vIFJlbW92ZSBkdXBsaWNhdGVzXG5cdFx0XHRpZiAoICFndWFyYW50ZWVkVW5pcXVlWyBuYW1lIF0gKSB7XG5cdFx0XHRcdGpRdWVyeS51bmlxdWVTb3J0KCBtYXRjaGVkICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJldmVyc2Ugb3JkZXIgZm9yIHBhcmVudHMqIGFuZCBwcmV2LWRlcml2YXRpdmVzXG5cdFx0XHRpZiAoIHJwYXJlbnRzcHJldi50ZXN0KCBuYW1lICkgKSB7XG5cdFx0XHRcdG1hdGNoZWQucmV2ZXJzZSgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggbWF0Y2hlZCApO1xuXHR9O1xufSApO1xudmFyIHJub3RodG1sd2hpdGUgPSAoIC9bXlxceDIwXFx0XFxyXFxuXFxmXSsvZyApO1xuXG5cblxuLy8gQ29udmVydCBTdHJpbmctZm9ybWF0dGVkIG9wdGlvbnMgaW50byBPYmplY3QtZm9ybWF0dGVkIG9uZXNcbmZ1bmN0aW9uIGNyZWF0ZU9wdGlvbnMoIG9wdGlvbnMgKSB7XG5cdHZhciBvYmplY3QgPSB7fTtcblx0alF1ZXJ5LmVhY2goIG9wdGlvbnMubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbXSwgZnVuY3Rpb24oIF8sIGZsYWcgKSB7XG5cdFx0b2JqZWN0WyBmbGFnIF0gPSB0cnVlO1xuXHR9ICk7XG5cdHJldHVybiBvYmplY3Q7XG59XG5cbi8qXG4gKiBDcmVhdGUgYSBjYWxsYmFjayBsaXN0IHVzaW5nIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczpcbiAqXG4gKlx0b3B0aW9uczogYW4gb3B0aW9uYWwgbGlzdCBvZiBzcGFjZS1zZXBhcmF0ZWQgb3B0aW9ucyB0aGF0IHdpbGwgY2hhbmdlIGhvd1xuICpcdFx0XHR0aGUgY2FsbGJhY2sgbGlzdCBiZWhhdmVzIG9yIGEgbW9yZSB0cmFkaXRpb25hbCBvcHRpb24gb2JqZWN0XG4gKlxuICogQnkgZGVmYXVsdCBhIGNhbGxiYWNrIGxpc3Qgd2lsbCBhY3QgbGlrZSBhbiBldmVudCBjYWxsYmFjayBsaXN0IGFuZCBjYW4gYmVcbiAqIFwiZmlyZWRcIiBtdWx0aXBsZSB0aW1lcy5cbiAqXG4gKiBQb3NzaWJsZSBvcHRpb25zOlxuICpcbiAqXHRvbmNlOlx0XHRcdHdpbGwgZW5zdXJlIHRoZSBjYWxsYmFjayBsaXN0IGNhbiBvbmx5IGJlIGZpcmVkIG9uY2UgKGxpa2UgYSBEZWZlcnJlZClcbiAqXG4gKlx0bWVtb3J5Olx0XHRcdHdpbGwga2VlcCB0cmFjayBvZiBwcmV2aW91cyB2YWx1ZXMgYW5kIHdpbGwgY2FsbCBhbnkgY2FsbGJhY2sgYWRkZWRcbiAqXHRcdFx0XHRcdGFmdGVyIHRoZSBsaXN0IGhhcyBiZWVuIGZpcmVkIHJpZ2h0IGF3YXkgd2l0aCB0aGUgbGF0ZXN0IFwibWVtb3JpemVkXCJcbiAqXHRcdFx0XHRcdHZhbHVlcyAobGlrZSBhIERlZmVycmVkKVxuICpcbiAqXHR1bmlxdWU6XHRcdFx0d2lsbCBlbnN1cmUgYSBjYWxsYmFjayBjYW4gb25seSBiZSBhZGRlZCBvbmNlIChubyBkdXBsaWNhdGUgaW4gdGhlIGxpc3QpXG4gKlxuICpcdHN0b3BPbkZhbHNlOlx0aW50ZXJydXB0IGNhbGxpbmdzIHdoZW4gYSBjYWxsYmFjayByZXR1cm5zIGZhbHNlXG4gKlxuICovXG5qUXVlcnkuQ2FsbGJhY2tzID0gZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG5cblx0Ly8gQ29udmVydCBvcHRpb25zIGZyb20gU3RyaW5nLWZvcm1hdHRlZCB0byBPYmplY3QtZm9ybWF0dGVkIGlmIG5lZWRlZFxuXHQvLyAod2UgY2hlY2sgaW4gY2FjaGUgZmlyc3QpXG5cdG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIiA/XG5cdFx0Y3JlYXRlT3B0aW9ucyggb3B0aW9ucyApIDpcblx0XHRqUXVlcnkuZXh0ZW5kKCB7fSwgb3B0aW9ucyApO1xuXG5cdHZhciAvLyBGbGFnIHRvIGtub3cgaWYgbGlzdCBpcyBjdXJyZW50bHkgZmlyaW5nXG5cdFx0ZmlyaW5nLFxuXG5cdFx0Ly8gTGFzdCBmaXJlIHZhbHVlIGZvciBub24tZm9yZ2V0dGFibGUgbGlzdHNcblx0XHRtZW1vcnksXG5cblx0XHQvLyBGbGFnIHRvIGtub3cgaWYgbGlzdCB3YXMgYWxyZWFkeSBmaXJlZFxuXHRcdGZpcmVkLFxuXG5cdFx0Ly8gRmxhZyB0byBwcmV2ZW50IGZpcmluZ1xuXHRcdGxvY2tlZCxcblxuXHRcdC8vIEFjdHVhbCBjYWxsYmFjayBsaXN0XG5cdFx0bGlzdCA9IFtdLFxuXG5cdFx0Ly8gUXVldWUgb2YgZXhlY3V0aW9uIGRhdGEgZm9yIHJlcGVhdGFibGUgbGlzdHNcblx0XHRxdWV1ZSA9IFtdLFxuXG5cdFx0Ly8gSW5kZXggb2YgY3VycmVudGx5IGZpcmluZyBjYWxsYmFjayAobW9kaWZpZWQgYnkgYWRkL3JlbW92ZSBhcyBuZWVkZWQpXG5cdFx0ZmlyaW5nSW5kZXggPSAtMSxcblxuXHRcdC8vIEZpcmUgY2FsbGJhY2tzXG5cdFx0ZmlyZSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBFbmZvcmNlIHNpbmdsZS1maXJpbmdcblx0XHRcdGxvY2tlZCA9IGxvY2tlZCB8fCBvcHRpb25zLm9uY2U7XG5cblx0XHRcdC8vIEV4ZWN1dGUgY2FsbGJhY2tzIGZvciBhbGwgcGVuZGluZyBleGVjdXRpb25zLFxuXHRcdFx0Ly8gcmVzcGVjdGluZyBmaXJpbmdJbmRleCBvdmVycmlkZXMgYW5kIHJ1bnRpbWUgY2hhbmdlc1xuXHRcdFx0ZmlyZWQgPSBmaXJpbmcgPSB0cnVlO1xuXHRcdFx0Zm9yICggOyBxdWV1ZS5sZW5ndGg7IGZpcmluZ0luZGV4ID0gLTEgKSB7XG5cdFx0XHRcdG1lbW9yeSA9IHF1ZXVlLnNoaWZ0KCk7XG5cdFx0XHRcdHdoaWxlICggKytmaXJpbmdJbmRleCA8IGxpc3QubGVuZ3RoICkge1xuXG5cdFx0XHRcdFx0Ly8gUnVuIGNhbGxiYWNrIGFuZCBjaGVjayBmb3IgZWFybHkgdGVybWluYXRpb25cblx0XHRcdFx0XHRpZiAoIGxpc3RbIGZpcmluZ0luZGV4IF0uYXBwbHkoIG1lbW9yeVsgMCBdLCBtZW1vcnlbIDEgXSApID09PSBmYWxzZSAmJlxuXHRcdFx0XHRcdFx0b3B0aW9ucy5zdG9wT25GYWxzZSApIHtcblxuXHRcdFx0XHRcdFx0Ly8gSnVtcCB0byBlbmQgYW5kIGZvcmdldCB0aGUgZGF0YSBzbyAuYWRkIGRvZXNuJ3QgcmUtZmlyZVxuXHRcdFx0XHRcdFx0ZmlyaW5nSW5kZXggPSBsaXN0Lmxlbmd0aDtcblx0XHRcdFx0XHRcdG1lbW9yeSA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBGb3JnZXQgdGhlIGRhdGEgaWYgd2UncmUgZG9uZSB3aXRoIGl0XG5cdFx0XHRpZiAoICFvcHRpb25zLm1lbW9yeSApIHtcblx0XHRcdFx0bWVtb3J5ID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGZpcmluZyA9IGZhbHNlO1xuXG5cdFx0XHQvLyBDbGVhbiB1cCBpZiB3ZSdyZSBkb25lIGZpcmluZyBmb3IgZ29vZFxuXHRcdFx0aWYgKCBsb2NrZWQgKSB7XG5cblx0XHRcdFx0Ly8gS2VlcCBhbiBlbXB0eSBsaXN0IGlmIHdlIGhhdmUgZGF0YSBmb3IgZnV0dXJlIGFkZCBjYWxsc1xuXHRcdFx0XHRpZiAoIG1lbW9yeSApIHtcblx0XHRcdFx0XHRsaXN0ID0gW107XG5cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlLCB0aGlzIG9iamVjdCBpcyBzcGVudFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxpc3QgPSBcIlwiO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8vIEFjdHVhbCBDYWxsYmFja3Mgb2JqZWN0XG5cdFx0c2VsZiA9IHtcblxuXHRcdFx0Ly8gQWRkIGEgY2FsbGJhY2sgb3IgYSBjb2xsZWN0aW9uIG9mIGNhbGxiYWNrcyB0byB0aGUgbGlzdFxuXHRcdFx0YWRkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCBsaXN0ICkge1xuXG5cdFx0XHRcdFx0Ly8gSWYgd2UgaGF2ZSBtZW1vcnkgZnJvbSBhIHBhc3QgcnVuLCB3ZSBzaG91bGQgZmlyZSBhZnRlciBhZGRpbmdcblx0XHRcdFx0XHRpZiAoIG1lbW9yeSAmJiAhZmlyaW5nICkge1xuXHRcdFx0XHRcdFx0ZmlyaW5nSW5kZXggPSBsaXN0Lmxlbmd0aCAtIDE7XG5cdFx0XHRcdFx0XHRxdWV1ZS5wdXNoKCBtZW1vcnkgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQoIGZ1bmN0aW9uIGFkZCggYXJncyApIHtcblx0XHRcdFx0XHRcdGpRdWVyeS5lYWNoKCBhcmdzLCBmdW5jdGlvbiggXywgYXJnICkge1xuXHRcdFx0XHRcdFx0XHRpZiAoIGlzRnVuY3Rpb24oIGFyZyApICkge1xuXHRcdFx0XHRcdFx0XHRcdGlmICggIW9wdGlvbnMudW5pcXVlIHx8ICFzZWxmLmhhcyggYXJnICkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRsaXN0LnB1c2goIGFyZyApO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICggYXJnICYmIGFyZy5sZW5ndGggJiYgdG9UeXBlKCBhcmcgKSAhPT0gXCJzdHJpbmdcIiApIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIEluc3BlY3QgcmVjdXJzaXZlbHlcblx0XHRcdFx0XHRcdFx0XHRhZGQoIGFyZyApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fSApKCBhcmd1bWVudHMgKTtcblxuXHRcdFx0XHRcdGlmICggbWVtb3J5ICYmICFmaXJpbmcgKSB7XG5cdFx0XHRcdFx0XHRmaXJlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gUmVtb3ZlIGEgY2FsbGJhY2sgZnJvbSB0aGUgbGlzdFxuXHRcdFx0cmVtb3ZlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0alF1ZXJ5LmVhY2goIGFyZ3VtZW50cywgZnVuY3Rpb24oIF8sIGFyZyApIHtcblx0XHRcdFx0XHR2YXIgaW5kZXg7XG5cdFx0XHRcdFx0d2hpbGUgKCAoIGluZGV4ID0galF1ZXJ5LmluQXJyYXkoIGFyZywgbGlzdCwgaW5kZXggKSApID4gLTEgKSB7XG5cdFx0XHRcdFx0XHRsaXN0LnNwbGljZSggaW5kZXgsIDEgKTtcblxuXHRcdFx0XHRcdFx0Ly8gSGFuZGxlIGZpcmluZyBpbmRleGVzXG5cdFx0XHRcdFx0XHRpZiAoIGluZGV4IDw9IGZpcmluZ0luZGV4ICkge1xuXHRcdFx0XHRcdFx0XHRmaXJpbmdJbmRleC0tO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSApO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cblx0XHRcdC8vIENoZWNrIGlmIGEgZ2l2ZW4gY2FsbGJhY2sgaXMgaW4gdGhlIGxpc3QuXG5cdFx0XHQvLyBJZiBubyBhcmd1bWVudCBpcyBnaXZlbiwgcmV0dXJuIHdoZXRoZXIgb3Igbm90IGxpc3QgaGFzIGNhbGxiYWNrcyBhdHRhY2hlZC5cblx0XHRcdGhhczogZnVuY3Rpb24oIGZuICkge1xuXHRcdFx0XHRyZXR1cm4gZm4gP1xuXHRcdFx0XHRcdGpRdWVyeS5pbkFycmF5KCBmbiwgbGlzdCApID4gLTEgOlxuXHRcdFx0XHRcdGxpc3QubGVuZ3RoID4gMDtcblx0XHRcdH0sXG5cblx0XHRcdC8vIFJlbW92ZSBhbGwgY2FsbGJhY2tzIGZyb20gdGhlIGxpc3Rcblx0XHRcdGVtcHR5OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCBsaXN0ICkge1xuXHRcdFx0XHRcdGxpc3QgPSBbXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cblx0XHRcdC8vIERpc2FibGUgLmZpcmUgYW5kIC5hZGRcblx0XHRcdC8vIEFib3J0IGFueSBjdXJyZW50L3BlbmRpbmcgZXhlY3V0aW9uc1xuXHRcdFx0Ly8gQ2xlYXIgYWxsIGNhbGxiYWNrcyBhbmQgdmFsdWVzXG5cdFx0XHRkaXNhYmxlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0bG9ja2VkID0gcXVldWUgPSBbXTtcblx0XHRcdFx0bGlzdCA9IG1lbW9yeSA9IFwiXCI7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblx0XHRcdGRpc2FibGVkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICFsaXN0O1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gRGlzYWJsZSAuZmlyZVxuXHRcdFx0Ly8gQWxzbyBkaXNhYmxlIC5hZGQgdW5sZXNzIHdlIGhhdmUgbWVtb3J5IChzaW5jZSBpdCB3b3VsZCBoYXZlIG5vIGVmZmVjdClcblx0XHRcdC8vIEFib3J0IGFueSBwZW5kaW5nIGV4ZWN1dGlvbnNcblx0XHRcdGxvY2s6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsb2NrZWQgPSBxdWV1ZSA9IFtdO1xuXHRcdFx0XHRpZiAoICFtZW1vcnkgJiYgIWZpcmluZyApIHtcblx0XHRcdFx0XHRsaXN0ID0gbWVtb3J5ID0gXCJcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cdFx0XHRsb2NrZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gISFsb2NrZWQ7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBDYWxsIGFsbCBjYWxsYmFja3Mgd2l0aCB0aGUgZ2l2ZW4gY29udGV4dCBhbmQgYXJndW1lbnRzXG5cdFx0XHRmaXJlV2l0aDogZnVuY3Rpb24oIGNvbnRleHQsIGFyZ3MgKSB7XG5cdFx0XHRcdGlmICggIWxvY2tlZCApIHtcblx0XHRcdFx0XHRhcmdzID0gYXJncyB8fCBbXTtcblx0XHRcdFx0XHRhcmdzID0gWyBjb250ZXh0LCBhcmdzLnNsaWNlID8gYXJncy5zbGljZSgpIDogYXJncyBdO1xuXHRcdFx0XHRcdHF1ZXVlLnB1c2goIGFyZ3MgKTtcblx0XHRcdFx0XHRpZiAoICFmaXJpbmcgKSB7XG5cdFx0XHRcdFx0XHRmaXJlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gQ2FsbCBhbGwgdGhlIGNhbGxiYWNrcyB3aXRoIHRoZSBnaXZlbiBhcmd1bWVudHNcblx0XHRcdGZpcmU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRzZWxmLmZpcmVXaXRoKCB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBUbyBrbm93IGlmIHRoZSBjYWxsYmFja3MgaGF2ZSBhbHJlYWR5IGJlZW4gY2FsbGVkIGF0IGxlYXN0IG9uY2Vcblx0XHRcdGZpcmVkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICEhZmlyZWQ7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRyZXR1cm4gc2VsZjtcbn07XG5cblxuZnVuY3Rpb24gSWRlbnRpdHkoIHYgKSB7XG5cdHJldHVybiB2O1xufVxuZnVuY3Rpb24gVGhyb3dlciggZXggKSB7XG5cdHRocm93IGV4O1xufVxuXG5mdW5jdGlvbiBhZG9wdFZhbHVlKCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0LCBub1ZhbHVlICkge1xuXHR2YXIgbWV0aG9kO1xuXG5cdHRyeSB7XG5cblx0XHQvLyBDaGVjayBmb3IgcHJvbWlzZSBhc3BlY3QgZmlyc3QgdG8gcHJpdmlsZWdlIHN5bmNocm9ub3VzIGJlaGF2aW9yXG5cdFx0aWYgKCB2YWx1ZSAmJiBpc0Z1bmN0aW9uKCAoIG1ldGhvZCA9IHZhbHVlLnByb21pc2UgKSApICkge1xuXHRcdFx0bWV0aG9kLmNhbGwoIHZhbHVlICkuZG9uZSggcmVzb2x2ZSApLmZhaWwoIHJlamVjdCApO1xuXG5cdFx0Ly8gT3RoZXIgdGhlbmFibGVzXG5cdFx0fSBlbHNlIGlmICggdmFsdWUgJiYgaXNGdW5jdGlvbiggKCBtZXRob2QgPSB2YWx1ZS50aGVuICkgKSApIHtcblx0XHRcdG1ldGhvZC5jYWxsKCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0ICk7XG5cblx0XHQvLyBPdGhlciBub24tdGhlbmFibGVzXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gQ29udHJvbCBgcmVzb2x2ZWAgYXJndW1lbnRzIGJ5IGxldHRpbmcgQXJyYXkjc2xpY2UgY2FzdCBib29sZWFuIGBub1ZhbHVlYCB0byBpbnRlZ2VyOlxuXHRcdFx0Ly8gKiBmYWxzZTogWyB2YWx1ZSBdLnNsaWNlKCAwICkgPT4gcmVzb2x2ZSggdmFsdWUgKVxuXHRcdFx0Ly8gKiB0cnVlOiBbIHZhbHVlIF0uc2xpY2UoIDEgKSA9PiByZXNvbHZlKClcblx0XHRcdHJlc29sdmUuYXBwbHkoIHVuZGVmaW5lZCwgWyB2YWx1ZSBdLnNsaWNlKCBub1ZhbHVlICkgKTtcblx0XHR9XG5cblx0Ly8gRm9yIFByb21pc2VzL0ErLCBjb252ZXJ0IGV4Y2VwdGlvbnMgaW50byByZWplY3Rpb25zXG5cdC8vIFNpbmNlIGpRdWVyeS53aGVuIGRvZXNuJ3QgdW53cmFwIHRoZW5hYmxlcywgd2UgY2FuIHNraXAgdGhlIGV4dHJhIGNoZWNrcyBhcHBlYXJpbmcgaW5cblx0Ly8gRGVmZXJyZWQjdGhlbiB0byBjb25kaXRpb25hbGx5IHN1cHByZXNzIHJlamVjdGlvbi5cblx0fSBjYXRjaCAoIHZhbHVlICkge1xuXG5cdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA0LjAgb25seVxuXHRcdC8vIFN0cmljdCBtb2RlIGZ1bmN0aW9ucyBpbnZva2VkIHdpdGhvdXQgLmNhbGwvLmFwcGx5IGdldCBnbG9iYWwtb2JqZWN0IGNvbnRleHRcblx0XHRyZWplY3QuYXBwbHkoIHVuZGVmaW5lZCwgWyB2YWx1ZSBdICk7XG5cdH1cbn1cblxualF1ZXJ5LmV4dGVuZCgge1xuXG5cdERlZmVycmVkOiBmdW5jdGlvbiggZnVuYyApIHtcblx0XHR2YXIgdHVwbGVzID0gW1xuXG5cdFx0XHRcdC8vIGFjdGlvbiwgYWRkIGxpc3RlbmVyLCBjYWxsYmFja3MsXG5cdFx0XHRcdC8vIC4uLiAudGhlbiBoYW5kbGVycywgYXJndW1lbnQgaW5kZXgsIFtmaW5hbCBzdGF0ZV1cblx0XHRcdFx0WyBcIm5vdGlmeVwiLCBcInByb2dyZXNzXCIsIGpRdWVyeS5DYWxsYmFja3MoIFwibWVtb3J5XCIgKSxcblx0XHRcdFx0XHRqUXVlcnkuQ2FsbGJhY2tzKCBcIm1lbW9yeVwiICksIDIgXSxcblx0XHRcdFx0WyBcInJlc29sdmVcIiwgXCJkb25lXCIsIGpRdWVyeS5DYWxsYmFja3MoIFwib25jZSBtZW1vcnlcIiApLFxuXHRcdFx0XHRcdGpRdWVyeS5DYWxsYmFja3MoIFwib25jZSBtZW1vcnlcIiApLCAwLCBcInJlc29sdmVkXCIgXSxcblx0XHRcdFx0WyBcInJlamVjdFwiLCBcImZhaWxcIiwgalF1ZXJ5LkNhbGxiYWNrcyggXCJvbmNlIG1lbW9yeVwiICksXG5cdFx0XHRcdFx0alF1ZXJ5LkNhbGxiYWNrcyggXCJvbmNlIG1lbW9yeVwiICksIDEsIFwicmVqZWN0ZWRcIiBdXG5cdFx0XHRdLFxuXHRcdFx0c3RhdGUgPSBcInBlbmRpbmdcIixcblx0XHRcdHByb21pc2UgPSB7XG5cdFx0XHRcdHN0YXRlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXR1cm4gc3RhdGU7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFsd2F5czogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0ZGVmZXJyZWQuZG9uZSggYXJndW1lbnRzICkuZmFpbCggYXJndW1lbnRzICk7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiY2F0Y2hcIjogZnVuY3Rpb24oIGZuICkge1xuXHRcdFx0XHRcdHJldHVybiBwcm9taXNlLnRoZW4oIG51bGwsIGZuICk7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gS2VlcCBwaXBlIGZvciBiYWNrLWNvbXBhdFxuXHRcdFx0XHRwaXBlOiBmdW5jdGlvbiggLyogZm5Eb25lLCBmbkZhaWwsIGZuUHJvZ3Jlc3MgKi8gKSB7XG5cdFx0XHRcdFx0dmFyIGZucyA9IGFyZ3VtZW50cztcblxuXHRcdFx0XHRcdHJldHVybiBqUXVlcnkuRGVmZXJyZWQoIGZ1bmN0aW9uKCBuZXdEZWZlciApIHtcblx0XHRcdFx0XHRcdGpRdWVyeS5lYWNoKCB0dXBsZXMsIGZ1bmN0aW9uKCBfaSwgdHVwbGUgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gTWFwIHR1cGxlcyAocHJvZ3Jlc3MsIGRvbmUsIGZhaWwpIHRvIGFyZ3VtZW50cyAoZG9uZSwgZmFpbCwgcHJvZ3Jlc3MpXG5cdFx0XHRcdFx0XHRcdHZhciBmbiA9IGlzRnVuY3Rpb24oIGZuc1sgdHVwbGVbIDQgXSBdICkgJiYgZm5zWyB0dXBsZVsgNCBdIF07XG5cblx0XHRcdFx0XHRcdFx0Ly8gZGVmZXJyZWQucHJvZ3Jlc3MoZnVuY3Rpb24oKSB7IGJpbmQgdG8gbmV3RGVmZXIgb3IgbmV3RGVmZXIubm90aWZ5IH0pXG5cdFx0XHRcdFx0XHRcdC8vIGRlZmVycmVkLmRvbmUoZnVuY3Rpb24oKSB7IGJpbmQgdG8gbmV3RGVmZXIgb3IgbmV3RGVmZXIucmVzb2x2ZSB9KVxuXHRcdFx0XHRcdFx0XHQvLyBkZWZlcnJlZC5mYWlsKGZ1bmN0aW9uKCkgeyBiaW5kIHRvIG5ld0RlZmVyIG9yIG5ld0RlZmVyLnJlamVjdCB9KVxuXHRcdFx0XHRcdFx0XHRkZWZlcnJlZFsgdHVwbGVbIDEgXSBdKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmV0dXJuZWQgPSBmbiAmJiBmbi5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCByZXR1cm5lZCAmJiBpc0Z1bmN0aW9uKCByZXR1cm5lZC5wcm9taXNlICkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5lZC5wcm9taXNlKClcblx0XHRcdFx0XHRcdFx0XHRcdFx0LnByb2dyZXNzKCBuZXdEZWZlci5ub3RpZnkgKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuZG9uZSggbmV3RGVmZXIucmVzb2x2ZSApXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5mYWlsKCBuZXdEZWZlci5yZWplY3QgKTtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0bmV3RGVmZXJbIHR1cGxlWyAwIF0gKyBcIldpdGhcIiBdKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbiA/IFsgcmV0dXJuZWQgXSA6IGFyZ3VtZW50c1xuXHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdGZucyA9IG51bGw7XG5cdFx0XHRcdFx0fSApLnByb21pc2UoKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0dGhlbjogZnVuY3Rpb24oIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCBvblByb2dyZXNzICkge1xuXHRcdFx0XHRcdHZhciBtYXhEZXB0aCA9IDA7XG5cdFx0XHRcdFx0ZnVuY3Rpb24gcmVzb2x2ZSggZGVwdGgsIGRlZmVycmVkLCBoYW5kbGVyLCBzcGVjaWFsICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgdGhhdCA9IHRoaXMsXG5cdFx0XHRcdFx0XHRcdFx0YXJncyA9IGFyZ3VtZW50cyxcblx0XHRcdFx0XHRcdFx0XHRtaWdodFRocm93ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgcmV0dXJuZWQsIHRoZW47XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb24gMi4zLjMuMy4zXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC01OVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gSWdub3JlIGRvdWJsZS1yZXNvbHV0aW9uIGF0dGVtcHRzXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIGRlcHRoIDwgbWF4RGVwdGggKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuZWQgPSBoYW5kbGVyLmFwcGx5KCB0aGF0LCBhcmdzICk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb24gMi4zLjFcblx0XHRcdFx0XHRcdFx0XHRcdC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTQ4XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIHJldHVybmVkID09PSBkZWZlcnJlZC5wcm9taXNlKCkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoIFwiVGhlbmFibGUgc2VsZi1yZXNvbHV0aW9uXCIgKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbnMgMi4zLjMuMSwgMy41XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC01NFxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNzVcblx0XHRcdFx0XHRcdFx0XHRcdC8vIFJldHJpZXZlIGB0aGVuYCBvbmx5IG9uY2Vcblx0XHRcdFx0XHRcdFx0XHRcdHRoZW4gPSByZXR1cm5lZCAmJlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb24gMi4zLjRcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNjRcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gT25seSBjaGVjayBvYmplY3RzIGFuZCBmdW5jdGlvbnMgZm9yIHRoZW5hYmlsaXR5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCggdHlwZW9mIHJldHVybmVkID09PSBcIm9iamVjdFwiIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZW9mIHJldHVybmVkID09PSBcImZ1bmN0aW9uXCIgKSAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5lZC50aGVuO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBIYW5kbGUgYSByZXR1cm5lZCB0aGVuYWJsZVxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBpc0Z1bmN0aW9uKCB0aGVuICkgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gU3BlY2lhbCBwcm9jZXNzb3JzIChub3RpZnkpIGp1c3Qgd2FpdCBmb3IgcmVzb2x1dGlvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIHNwZWNpYWwgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhlbi5jYWxsKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuZWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKCBtYXhEZXB0aCwgZGVmZXJyZWQsIElkZW50aXR5LCBzcGVjaWFsICksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKCBtYXhEZXB0aCwgZGVmZXJyZWQsIFRocm93ZXIsIHNwZWNpYWwgKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gTm9ybWFsIHByb2Nlc3NvcnMgKHJlc29sdmUpIGFsc28gaG9vayBpbnRvIHByb2dyZXNzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyAuLi5hbmQgZGlzcmVnYXJkIG9sZGVyIHJlc29sdXRpb24gdmFsdWVzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWF4RGVwdGgrKztcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoZW4uY2FsbChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybmVkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSggbWF4RGVwdGgsIGRlZmVycmVkLCBJZGVudGl0eSwgc3BlY2lhbCApLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSggbWF4RGVwdGgsIGRlZmVycmVkLCBUaHJvd2VyLCBzcGVjaWFsICksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKCBtYXhEZXB0aCwgZGVmZXJyZWQsIElkZW50aXR5LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZlcnJlZC5ub3RpZnlXaXRoIClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIEhhbmRsZSBhbGwgb3RoZXIgcmV0dXJuZWQgdmFsdWVzXG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIE9ubHkgc3Vic3RpdHV0ZSBoYW5kbGVycyBwYXNzIG9uIGNvbnRleHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gYW5kIG11bHRpcGxlIHZhbHVlcyAobm9uLXNwZWMgYmVoYXZpb3IpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICggaGFuZGxlciAhPT0gSWRlbnRpdHkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhhdCA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmdzID0gWyByZXR1cm5lZCBdO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gUHJvY2VzcyB0aGUgdmFsdWUocylcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gRGVmYXVsdCBwcm9jZXNzIGlzIHJlc29sdmVcblx0XHRcdFx0XHRcdFx0XHRcdFx0KCBzcGVjaWFsIHx8IGRlZmVycmVkLnJlc29sdmVXaXRoICkoIHRoYXQsIGFyZ3MgKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9LFxuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gT25seSBub3JtYWwgcHJvY2Vzc29ycyAocmVzb2x2ZSkgY2F0Y2ggYW5kIHJlamVjdCBleGNlcHRpb25zXG5cdFx0XHRcdFx0XHRcdFx0cHJvY2VzcyA9IHNwZWNpYWwgP1xuXHRcdFx0XHRcdFx0XHRcdFx0bWlnaHRUaHJvdyA6XG5cdFx0XHRcdFx0XHRcdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtaWdodFRocm93KCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKCBlICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBqUXVlcnkuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGpRdWVyeS5EZWZlcnJlZC5leGNlcHRpb25Ib29rKCBlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwcm9jZXNzLnN0YWNrVHJhY2UgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBQcm9taXNlcy9BKyBzZWN0aW9uIDIuMy4zLjMuNC4xXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNjFcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBJZ25vcmUgcG9zdC1yZXNvbHV0aW9uIGV4Y2VwdGlvbnNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIGRlcHRoICsgMSA+PSBtYXhEZXB0aCApIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gT25seSBzdWJzdGl0dXRlIGhhbmRsZXJzIHBhc3Mgb24gY29udGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gYW5kIG11bHRpcGxlIHZhbHVlcyAobm9uLXNwZWMgYmVoYXZpb3IpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIGhhbmRsZXIgIT09IFRocm93ZXIgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyZ3MgPSBbIGUgXTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0V2l0aCggdGhhdCwgYXJncyApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBQcm9taXNlcy9BKyBzZWN0aW9uIDIuMy4zLjMuMVxuXHRcdFx0XHRcdFx0XHQvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC01N1xuXHRcdFx0XHRcdFx0XHQvLyBSZS1yZXNvbHZlIHByb21pc2VzIGltbWVkaWF0ZWx5IHRvIGRvZGdlIGZhbHNlIHJlamVjdGlvbiBmcm9tXG5cdFx0XHRcdFx0XHRcdC8vIHN1YnNlcXVlbnQgZXJyb3JzXG5cdFx0XHRcdFx0XHRcdGlmICggZGVwdGggKSB7XG5cdFx0XHRcdFx0XHRcdFx0cHJvY2VzcygpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gQ2FsbCBhbiBvcHRpb25hbCBob29rIHRvIHJlY29yZCB0aGUgc3RhY2ssIGluIGNhc2Ugb2YgZXhjZXB0aW9uXG5cdFx0XHRcdFx0XHRcdFx0Ly8gc2luY2UgaXQncyBvdGhlcndpc2UgbG9zdCB3aGVuIGV4ZWN1dGlvbiBnb2VzIGFzeW5jXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCBqUXVlcnkuRGVmZXJyZWQuZ2V0U3RhY2tIb29rICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cHJvY2Vzcy5zdGFja1RyYWNlID0galF1ZXJ5LkRlZmVycmVkLmdldFN0YWNrSG9vaygpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dCggcHJvY2VzcyApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiBqUXVlcnkuRGVmZXJyZWQoIGZ1bmN0aW9uKCBuZXdEZWZlciApIHtcblxuXHRcdFx0XHRcdFx0Ly8gcHJvZ3Jlc3NfaGFuZGxlcnMuYWRkKCAuLi4gKVxuXHRcdFx0XHRcdFx0dHVwbGVzWyAwIF1bIDMgXS5hZGQoXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUoXG5cdFx0XHRcdFx0XHRcdFx0MCxcblx0XHRcdFx0XHRcdFx0XHRuZXdEZWZlcixcblx0XHRcdFx0XHRcdFx0XHRpc0Z1bmN0aW9uKCBvblByb2dyZXNzICkgP1xuXHRcdFx0XHRcdFx0XHRcdFx0b25Qcm9ncmVzcyA6XG5cdFx0XHRcdFx0XHRcdFx0XHRJZGVudGl0eSxcblx0XHRcdFx0XHRcdFx0XHRuZXdEZWZlci5ub3RpZnlXaXRoXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRcdC8vIGZ1bGZpbGxlZF9oYW5kbGVycy5hZGQoIC4uLiApXG5cdFx0XHRcdFx0XHR0dXBsZXNbIDEgXVsgMyBdLmFkZChcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZShcblx0XHRcdFx0XHRcdFx0XHQwLFxuXHRcdFx0XHRcdFx0XHRcdG5ld0RlZmVyLFxuXHRcdFx0XHRcdFx0XHRcdGlzRnVuY3Rpb24oIG9uRnVsZmlsbGVkICkgP1xuXHRcdFx0XHRcdFx0XHRcdFx0b25GdWxmaWxsZWQgOlxuXHRcdFx0XHRcdFx0XHRcdFx0SWRlbnRpdHlcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdFx0Ly8gcmVqZWN0ZWRfaGFuZGxlcnMuYWRkKCAuLi4gKVxuXHRcdFx0XHRcdFx0dHVwbGVzWyAyIF1bIDMgXS5hZGQoXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUoXG5cdFx0XHRcdFx0XHRcdFx0MCxcblx0XHRcdFx0XHRcdFx0XHRuZXdEZWZlcixcblx0XHRcdFx0XHRcdFx0XHRpc0Z1bmN0aW9uKCBvblJlamVjdGVkICkgP1xuXHRcdFx0XHRcdFx0XHRcdFx0b25SZWplY3RlZCA6XG5cdFx0XHRcdFx0XHRcdFx0XHRUaHJvd2VyXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSApLnByb21pc2UoKTtcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBHZXQgYSBwcm9taXNlIGZvciB0aGlzIGRlZmVycmVkXG5cdFx0XHRcdC8vIElmIG9iaiBpcyBwcm92aWRlZCwgdGhlIHByb21pc2UgYXNwZWN0IGlzIGFkZGVkIHRvIHRoZSBvYmplY3Rcblx0XHRcdFx0cHJvbWlzZTogZnVuY3Rpb24oIG9iaiApIHtcblx0XHRcdFx0XHRyZXR1cm4gb2JqICE9IG51bGwgPyBqUXVlcnkuZXh0ZW5kKCBvYmosIHByb21pc2UgKSA6IHByb21pc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRkZWZlcnJlZCA9IHt9O1xuXG5cdFx0Ly8gQWRkIGxpc3Qtc3BlY2lmaWMgbWV0aG9kc1xuXHRcdGpRdWVyeS5lYWNoKCB0dXBsZXMsIGZ1bmN0aW9uKCBpLCB0dXBsZSApIHtcblx0XHRcdHZhciBsaXN0ID0gdHVwbGVbIDIgXSxcblx0XHRcdFx0c3RhdGVTdHJpbmcgPSB0dXBsZVsgNSBdO1xuXG5cdFx0XHQvLyBwcm9taXNlLnByb2dyZXNzID0gbGlzdC5hZGRcblx0XHRcdC8vIHByb21pc2UuZG9uZSA9IGxpc3QuYWRkXG5cdFx0XHQvLyBwcm9taXNlLmZhaWwgPSBsaXN0LmFkZFxuXHRcdFx0cHJvbWlzZVsgdHVwbGVbIDEgXSBdID0gbGlzdC5hZGQ7XG5cblx0XHRcdC8vIEhhbmRsZSBzdGF0ZVxuXHRcdFx0aWYgKCBzdGF0ZVN0cmluZyApIHtcblx0XHRcdFx0bGlzdC5hZGQoXG5cdFx0XHRcdFx0ZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0XHRcdC8vIHN0YXRlID0gXCJyZXNvbHZlZFwiIChpLmUuLCBmdWxmaWxsZWQpXG5cdFx0XHRcdFx0XHQvLyBzdGF0ZSA9IFwicmVqZWN0ZWRcIlxuXHRcdFx0XHRcdFx0c3RhdGUgPSBzdGF0ZVN0cmluZztcblx0XHRcdFx0XHR9LFxuXG5cdFx0XHRcdFx0Ly8gcmVqZWN0ZWRfY2FsbGJhY2tzLmRpc2FibGVcblx0XHRcdFx0XHQvLyBmdWxmaWxsZWRfY2FsbGJhY2tzLmRpc2FibGVcblx0XHRcdFx0XHR0dXBsZXNbIDMgLSBpIF1bIDIgXS5kaXNhYmxlLFxuXG5cdFx0XHRcdFx0Ly8gcmVqZWN0ZWRfaGFuZGxlcnMuZGlzYWJsZVxuXHRcdFx0XHRcdC8vIGZ1bGZpbGxlZF9oYW5kbGVycy5kaXNhYmxlXG5cdFx0XHRcdFx0dHVwbGVzWyAzIC0gaSBdWyAzIF0uZGlzYWJsZSxcblxuXHRcdFx0XHRcdC8vIHByb2dyZXNzX2NhbGxiYWNrcy5sb2NrXG5cdFx0XHRcdFx0dHVwbGVzWyAwIF1bIDIgXS5sb2NrLFxuXG5cdFx0XHRcdFx0Ly8gcHJvZ3Jlc3NfaGFuZGxlcnMubG9ja1xuXHRcdFx0XHRcdHR1cGxlc1sgMCBdWyAzIF0ubG9ja1xuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBwcm9ncmVzc19oYW5kbGVycy5maXJlXG5cdFx0XHQvLyBmdWxmaWxsZWRfaGFuZGxlcnMuZmlyZVxuXHRcdFx0Ly8gcmVqZWN0ZWRfaGFuZGxlcnMuZmlyZVxuXHRcdFx0bGlzdC5hZGQoIHR1cGxlWyAzIF0uZmlyZSApO1xuXG5cdFx0XHQvLyBkZWZlcnJlZC5ub3RpZnkgPSBmdW5jdGlvbigpIHsgZGVmZXJyZWQubm90aWZ5V2l0aCguLi4pIH1cblx0XHRcdC8vIGRlZmVycmVkLnJlc29sdmUgPSBmdW5jdGlvbigpIHsgZGVmZXJyZWQucmVzb2x2ZVdpdGgoLi4uKSB9XG5cdFx0XHQvLyBkZWZlcnJlZC5yZWplY3QgPSBmdW5jdGlvbigpIHsgZGVmZXJyZWQucmVqZWN0V2l0aCguLi4pIH1cblx0XHRcdGRlZmVycmVkWyB0dXBsZVsgMCBdIF0gPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0ZGVmZXJyZWRbIHR1cGxlWyAwIF0gKyBcIldpdGhcIiBdKCB0aGlzID09PSBkZWZlcnJlZCA/IHVuZGVmaW5lZCA6IHRoaXMsIGFyZ3VtZW50cyApO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH07XG5cblx0XHRcdC8vIGRlZmVycmVkLm5vdGlmeVdpdGggPSBsaXN0LmZpcmVXaXRoXG5cdFx0XHQvLyBkZWZlcnJlZC5yZXNvbHZlV2l0aCA9IGxpc3QuZmlyZVdpdGhcblx0XHRcdC8vIGRlZmVycmVkLnJlamVjdFdpdGggPSBsaXN0LmZpcmVXaXRoXG5cdFx0XHRkZWZlcnJlZFsgdHVwbGVbIDAgXSArIFwiV2l0aFwiIF0gPSBsaXN0LmZpcmVXaXRoO1xuXHRcdH0gKTtcblxuXHRcdC8vIE1ha2UgdGhlIGRlZmVycmVkIGEgcHJvbWlzZVxuXHRcdHByb21pc2UucHJvbWlzZSggZGVmZXJyZWQgKTtcblxuXHRcdC8vIENhbGwgZ2l2ZW4gZnVuYyBpZiBhbnlcblx0XHRpZiAoIGZ1bmMgKSB7XG5cdFx0XHRmdW5jLmNhbGwoIGRlZmVycmVkLCBkZWZlcnJlZCApO1xuXHRcdH1cblxuXHRcdC8vIEFsbCBkb25lIVxuXHRcdHJldHVybiBkZWZlcnJlZDtcblx0fSxcblxuXHQvLyBEZWZlcnJlZCBoZWxwZXJcblx0d2hlbjogZnVuY3Rpb24oIHNpbmdsZVZhbHVlICkge1xuXHRcdHZhclxuXG5cdFx0XHQvLyBjb3VudCBvZiB1bmNvbXBsZXRlZCBzdWJvcmRpbmF0ZXNcblx0XHRcdHJlbWFpbmluZyA9IGFyZ3VtZW50cy5sZW5ndGgsXG5cblx0XHRcdC8vIGNvdW50IG9mIHVucHJvY2Vzc2VkIGFyZ3VtZW50c1xuXHRcdFx0aSA9IHJlbWFpbmluZyxcblxuXHRcdFx0Ly8gc3Vib3JkaW5hdGUgZnVsZmlsbG1lbnQgZGF0YVxuXHRcdFx0cmVzb2x2ZUNvbnRleHRzID0gQXJyYXkoIGkgKSxcblx0XHRcdHJlc29sdmVWYWx1ZXMgPSBzbGljZS5jYWxsKCBhcmd1bWVudHMgKSxcblxuXHRcdFx0Ly8gdGhlIHByaW1hcnkgRGVmZXJyZWRcblx0XHRcdHByaW1hcnkgPSBqUXVlcnkuRGVmZXJyZWQoKSxcblxuXHRcdFx0Ly8gc3Vib3JkaW5hdGUgY2FsbGJhY2sgZmFjdG9yeVxuXHRcdFx0dXBkYXRlRnVuYyA9IGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0XHRcdHJlc29sdmVDb250ZXh0c1sgaSBdID0gdGhpcztcblx0XHRcdFx0XHRyZXNvbHZlVmFsdWVzWyBpIF0gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IHNsaWNlLmNhbGwoIGFyZ3VtZW50cyApIDogdmFsdWU7XG5cdFx0XHRcdFx0aWYgKCAhKCAtLXJlbWFpbmluZyApICkge1xuXHRcdFx0XHRcdFx0cHJpbWFyeS5yZXNvbHZlV2l0aCggcmVzb2x2ZUNvbnRleHRzLCByZXNvbHZlVmFsdWVzICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0fTtcblxuXHRcdC8vIFNpbmdsZS0gYW5kIGVtcHR5IGFyZ3VtZW50cyBhcmUgYWRvcHRlZCBsaWtlIFByb21pc2UucmVzb2x2ZVxuXHRcdGlmICggcmVtYWluaW5nIDw9IDEgKSB7XG5cdFx0XHRhZG9wdFZhbHVlKCBzaW5nbGVWYWx1ZSwgcHJpbWFyeS5kb25lKCB1cGRhdGVGdW5jKCBpICkgKS5yZXNvbHZlLCBwcmltYXJ5LnJlamVjdCxcblx0XHRcdFx0IXJlbWFpbmluZyApO1xuXG5cdFx0XHQvLyBVc2UgLnRoZW4oKSB0byB1bndyYXAgc2Vjb25kYXJ5IHRoZW5hYmxlcyAoY2YuIGdoLTMwMDApXG5cdFx0XHRpZiAoIHByaW1hcnkuc3RhdGUoKSA9PT0gXCJwZW5kaW5nXCIgfHxcblx0XHRcdFx0aXNGdW5jdGlvbiggcmVzb2x2ZVZhbHVlc1sgaSBdICYmIHJlc29sdmVWYWx1ZXNbIGkgXS50aGVuICkgKSB7XG5cblx0XHRcdFx0cmV0dXJuIHByaW1hcnkudGhlbigpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIE11bHRpcGxlIGFyZ3VtZW50cyBhcmUgYWdncmVnYXRlZCBsaWtlIFByb21pc2UuYWxsIGFycmF5IGVsZW1lbnRzXG5cdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRhZG9wdFZhbHVlKCByZXNvbHZlVmFsdWVzWyBpIF0sIHVwZGF0ZUZ1bmMoIGkgKSwgcHJpbWFyeS5yZWplY3QgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcHJpbWFyeS5wcm9taXNlKCk7XG5cdH1cbn0gKTtcblxuXG4vLyBUaGVzZSB1c3VhbGx5IGluZGljYXRlIGEgcHJvZ3JhbW1lciBtaXN0YWtlIGR1cmluZyBkZXZlbG9wbWVudCxcbi8vIHdhcm4gYWJvdXQgdGhlbSBBU0FQIHJhdGhlciB0aGFuIHN3YWxsb3dpbmcgdGhlbSBieSBkZWZhdWx0LlxudmFyIHJlcnJvck5hbWVzID0gL14oRXZhbHxJbnRlcm5hbHxSYW5nZXxSZWZlcmVuY2V8U3ludGF4fFR5cGV8VVJJKUVycm9yJC87XG5cbmpRdWVyeS5EZWZlcnJlZC5leGNlcHRpb25Ib29rID0gZnVuY3Rpb24oIGVycm9yLCBzdGFjayApIHtcblxuXHQvLyBTdXBwb3J0OiBJRSA4IC0gOSBvbmx5XG5cdC8vIENvbnNvbGUgZXhpc3RzIHdoZW4gZGV2IHRvb2xzIGFyZSBvcGVuLCB3aGljaCBjYW4gaGFwcGVuIGF0IGFueSB0aW1lXG5cdGlmICggd2luZG93LmNvbnNvbGUgJiYgd2luZG93LmNvbnNvbGUud2FybiAmJiBlcnJvciAmJiByZXJyb3JOYW1lcy50ZXN0KCBlcnJvci5uYW1lICkgKSB7XG5cdFx0d2luZG93LmNvbnNvbGUud2FybiggXCJqUXVlcnkuRGVmZXJyZWQgZXhjZXB0aW9uOiBcIiArIGVycm9yLm1lc3NhZ2UsIGVycm9yLnN0YWNrLCBzdGFjayApO1xuXHR9XG59O1xuXG5cblxuXG5qUXVlcnkucmVhZHlFeGNlcHRpb24gPSBmdW5jdGlvbiggZXJyb3IgKSB7XG5cdHdpbmRvdy5zZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHR0aHJvdyBlcnJvcjtcblx0fSApO1xufTtcblxuXG5cblxuLy8gVGhlIGRlZmVycmVkIHVzZWQgb24gRE9NIHJlYWR5XG52YXIgcmVhZHlMaXN0ID0galF1ZXJ5LkRlZmVycmVkKCk7XG5cbmpRdWVyeS5mbi5yZWFkeSA9IGZ1bmN0aW9uKCBmbiApIHtcblxuXHRyZWFkeUxpc3Rcblx0XHQudGhlbiggZm4gKVxuXG5cdFx0Ly8gV3JhcCBqUXVlcnkucmVhZHlFeGNlcHRpb24gaW4gYSBmdW5jdGlvbiBzbyB0aGF0IHRoZSBsb29rdXBcblx0XHQvLyBoYXBwZW5zIGF0IHRoZSB0aW1lIG9mIGVycm9yIGhhbmRsaW5nIGluc3RlYWQgb2YgY2FsbGJhY2tcblx0XHQvLyByZWdpc3RyYXRpb24uXG5cdFx0LmNhdGNoKCBmdW5jdGlvbiggZXJyb3IgKSB7XG5cdFx0XHRqUXVlcnkucmVhZHlFeGNlcHRpb24oIGVycm9yICk7XG5cdFx0fSApO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxualF1ZXJ5LmV4dGVuZCgge1xuXG5cdC8vIElzIHRoZSBET00gcmVhZHkgdG8gYmUgdXNlZD8gU2V0IHRvIHRydWUgb25jZSBpdCBvY2N1cnMuXG5cdGlzUmVhZHk6IGZhbHNlLFxuXG5cdC8vIEEgY291bnRlciB0byB0cmFjayBob3cgbWFueSBpdGVtcyB0byB3YWl0IGZvciBiZWZvcmVcblx0Ly8gdGhlIHJlYWR5IGV2ZW50IGZpcmVzLiBTZWUgIzY3ODFcblx0cmVhZHlXYWl0OiAxLFxuXG5cdC8vIEhhbmRsZSB3aGVuIHRoZSBET00gaXMgcmVhZHlcblx0cmVhZHk6IGZ1bmN0aW9uKCB3YWl0ICkge1xuXG5cdFx0Ly8gQWJvcnQgaWYgdGhlcmUgYXJlIHBlbmRpbmcgaG9sZHMgb3Igd2UncmUgYWxyZWFkeSByZWFkeVxuXHRcdGlmICggd2FpdCA9PT0gdHJ1ZSA/IC0talF1ZXJ5LnJlYWR5V2FpdCA6IGpRdWVyeS5pc1JlYWR5ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFJlbWVtYmVyIHRoYXQgdGhlIERPTSBpcyByZWFkeVxuXHRcdGpRdWVyeS5pc1JlYWR5ID0gdHJ1ZTtcblxuXHRcdC8vIElmIGEgbm9ybWFsIERPTSBSZWFkeSBldmVudCBmaXJlZCwgZGVjcmVtZW50LCBhbmQgd2FpdCBpZiBuZWVkIGJlXG5cdFx0aWYgKCB3YWl0ICE9PSB0cnVlICYmIC0talF1ZXJ5LnJlYWR5V2FpdCA+IDAgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlcmUgYXJlIGZ1bmN0aW9ucyBib3VuZCwgdG8gZXhlY3V0ZVxuXHRcdHJlYWR5TGlzdC5yZXNvbHZlV2l0aCggZG9jdW1lbnQsIFsgalF1ZXJ5IF0gKTtcblx0fVxufSApO1xuXG5qUXVlcnkucmVhZHkudGhlbiA9IHJlYWR5TGlzdC50aGVuO1xuXG4vLyBUaGUgcmVhZHkgZXZlbnQgaGFuZGxlciBhbmQgc2VsZiBjbGVhbnVwIG1ldGhvZFxuZnVuY3Rpb24gY29tcGxldGVkKCkge1xuXHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCBcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY29tcGxldGVkICk7XG5cdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCBcImxvYWRcIiwgY29tcGxldGVkICk7XG5cdGpRdWVyeS5yZWFkeSgpO1xufVxuXG4vLyBDYXRjaCBjYXNlcyB3aGVyZSAkKGRvY3VtZW50KS5yZWFkeSgpIGlzIGNhbGxlZFxuLy8gYWZ0ZXIgdGhlIGJyb3dzZXIgZXZlbnQgaGFzIGFscmVhZHkgb2NjdXJyZWQuXG4vLyBTdXBwb3J0OiBJRSA8PTkgLSAxMCBvbmx5XG4vLyBPbGRlciBJRSBzb21ldGltZXMgc2lnbmFscyBcImludGVyYWN0aXZlXCIgdG9vIHNvb25cbmlmICggZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiIHx8XG5cdCggZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkaW5nXCIgJiYgIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbCApICkge1xuXG5cdC8vIEhhbmRsZSBpdCBhc3luY2hyb25vdXNseSB0byBhbGxvdyBzY3JpcHRzIHRoZSBvcHBvcnR1bml0eSB0byBkZWxheSByZWFkeVxuXHR3aW5kb3cuc2V0VGltZW91dCggalF1ZXJ5LnJlYWR5ICk7XG5cbn0gZWxzZSB7XG5cblx0Ly8gVXNlIHRoZSBoYW5keSBldmVudCBjYWxsYmFja1xuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCBcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY29tcGxldGVkICk7XG5cblx0Ly8gQSBmYWxsYmFjayB0byB3aW5kb3cub25sb2FkLCB0aGF0IHdpbGwgYWx3YXlzIHdvcmtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwibG9hZFwiLCBjb21wbGV0ZWQgKTtcbn1cblxuXG5cblxuLy8gTXVsdGlmdW5jdGlvbmFsIG1ldGhvZCB0byBnZXQgYW5kIHNldCB2YWx1ZXMgb2YgYSBjb2xsZWN0aW9uXG4vLyBUaGUgdmFsdWUvcyBjYW4gb3B0aW9uYWxseSBiZSBleGVjdXRlZCBpZiBpdCdzIGEgZnVuY3Rpb25cbnZhciBhY2Nlc3MgPSBmdW5jdGlvbiggZWxlbXMsIGZuLCBrZXksIHZhbHVlLCBjaGFpbmFibGUsIGVtcHR5R2V0LCByYXcgKSB7XG5cdHZhciBpID0gMCxcblx0XHRsZW4gPSBlbGVtcy5sZW5ndGgsXG5cdFx0YnVsayA9IGtleSA9PSBudWxsO1xuXG5cdC8vIFNldHMgbWFueSB2YWx1ZXNcblx0aWYgKCB0b1R5cGUoIGtleSApID09PSBcIm9iamVjdFwiICkge1xuXHRcdGNoYWluYWJsZSA9IHRydWU7XG5cdFx0Zm9yICggaSBpbiBrZXkgKSB7XG5cdFx0XHRhY2Nlc3MoIGVsZW1zLCBmbiwgaSwga2V5WyBpIF0sIHRydWUsIGVtcHR5R2V0LCByYXcgKTtcblx0XHR9XG5cblx0Ly8gU2V0cyBvbmUgdmFsdWVcblx0fSBlbHNlIGlmICggdmFsdWUgIT09IHVuZGVmaW5lZCApIHtcblx0XHRjaGFpbmFibGUgPSB0cnVlO1xuXG5cdFx0aWYgKCAhaXNGdW5jdGlvbiggdmFsdWUgKSApIHtcblx0XHRcdHJhdyA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKCBidWxrICkge1xuXG5cdFx0XHQvLyBCdWxrIG9wZXJhdGlvbnMgcnVuIGFnYWluc3QgdGhlIGVudGlyZSBzZXRcblx0XHRcdGlmICggcmF3ICkge1xuXHRcdFx0XHRmbi5jYWxsKCBlbGVtcywgdmFsdWUgKTtcblx0XHRcdFx0Zm4gPSBudWxsO1xuXG5cdFx0XHQvLyAuLi5leGNlcHQgd2hlbiBleGVjdXRpbmcgZnVuY3Rpb24gdmFsdWVzXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRidWxrID0gZm47XG5cdFx0XHRcdGZuID0gZnVuY3Rpb24oIGVsZW0sIF9rZXksIHZhbHVlICkge1xuXHRcdFx0XHRcdHJldHVybiBidWxrLmNhbGwoIGpRdWVyeSggZWxlbSApLCB2YWx1ZSApO1xuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggZm4gKSB7XG5cdFx0XHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdFx0Zm4oXG5cdFx0XHRcdFx0ZWxlbXNbIGkgXSwga2V5LCByYXcgP1xuXHRcdFx0XHRcdFx0dmFsdWUgOlxuXHRcdFx0XHRcdFx0dmFsdWUuY2FsbCggZWxlbXNbIGkgXSwgaSwgZm4oIGVsZW1zWyBpIF0sIGtleSApIClcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAoIGNoYWluYWJsZSApIHtcblx0XHRyZXR1cm4gZWxlbXM7XG5cdH1cblxuXHQvLyBHZXRzXG5cdGlmICggYnVsayApIHtcblx0XHRyZXR1cm4gZm4uY2FsbCggZWxlbXMgKTtcblx0fVxuXG5cdHJldHVybiBsZW4gPyBmbiggZWxlbXNbIDAgXSwga2V5ICkgOiBlbXB0eUdldDtcbn07XG5cblxuLy8gTWF0Y2hlcyBkYXNoZWQgc3RyaW5nIGZvciBjYW1lbGl6aW5nXG52YXIgcm1zUHJlZml4ID0gL14tbXMtLyxcblx0cmRhc2hBbHBoYSA9IC8tKFthLXpdKS9nO1xuXG4vLyBVc2VkIGJ5IGNhbWVsQ2FzZSBhcyBjYWxsYmFjayB0byByZXBsYWNlKClcbmZ1bmN0aW9uIGZjYW1lbENhc2UoIF9hbGwsIGxldHRlciApIHtcblx0cmV0dXJuIGxldHRlci50b1VwcGVyQ2FzZSgpO1xufVxuXG4vLyBDb252ZXJ0IGRhc2hlZCB0byBjYW1lbENhc2U7IHVzZWQgYnkgdGhlIGNzcyBhbmQgZGF0YSBtb2R1bGVzXG4vLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSwgRWRnZSAxMiAtIDE1XG4vLyBNaWNyb3NvZnQgZm9yZ290IHRvIGh1bXAgdGhlaXIgdmVuZG9yIHByZWZpeCAoIzk1NzIpXG5mdW5jdGlvbiBjYW1lbENhc2UoIHN0cmluZyApIHtcblx0cmV0dXJuIHN0cmluZy5yZXBsYWNlKCBybXNQcmVmaXgsIFwibXMtXCIgKS5yZXBsYWNlKCByZGFzaEFscGhhLCBmY2FtZWxDYXNlICk7XG59XG52YXIgYWNjZXB0RGF0YSA9IGZ1bmN0aW9uKCBvd25lciApIHtcblxuXHQvLyBBY2NlcHRzIG9ubHk6XG5cdC8vICAtIE5vZGVcblx0Ly8gICAgLSBOb2RlLkVMRU1FTlRfTk9ERVxuXHQvLyAgICAtIE5vZGUuRE9DVU1FTlRfTk9ERVxuXHQvLyAgLSBPYmplY3Rcblx0Ly8gICAgLSBBbnlcblx0cmV0dXJuIG93bmVyLm5vZGVUeXBlID09PSAxIHx8IG93bmVyLm5vZGVUeXBlID09PSA5IHx8ICEoICtvd25lci5ub2RlVHlwZSApO1xufTtcblxuXG5cblxuZnVuY3Rpb24gRGF0YSgpIHtcblx0dGhpcy5leHBhbmRvID0galF1ZXJ5LmV4cGFuZG8gKyBEYXRhLnVpZCsrO1xufVxuXG5EYXRhLnVpZCA9IDE7XG5cbkRhdGEucHJvdG90eXBlID0ge1xuXG5cdGNhY2hlOiBmdW5jdGlvbiggb3duZXIgKSB7XG5cblx0XHQvLyBDaGVjayBpZiB0aGUgb3duZXIgb2JqZWN0IGFscmVhZHkgaGFzIGEgY2FjaGVcblx0XHR2YXIgdmFsdWUgPSBvd25lclsgdGhpcy5leHBhbmRvIF07XG5cblx0XHQvLyBJZiBub3QsIGNyZWF0ZSBvbmVcblx0XHRpZiAoICF2YWx1ZSApIHtcblx0XHRcdHZhbHVlID0ge307XG5cblx0XHRcdC8vIFdlIGNhbiBhY2NlcHQgZGF0YSBmb3Igbm9uLWVsZW1lbnQgbm9kZXMgaW4gbW9kZXJuIGJyb3dzZXJzLFxuXHRcdFx0Ly8gYnV0IHdlIHNob3VsZCBub3QsIHNlZSAjODMzNS5cblx0XHRcdC8vIEFsd2F5cyByZXR1cm4gYW4gZW1wdHkgb2JqZWN0LlxuXHRcdFx0aWYgKCBhY2NlcHREYXRhKCBvd25lciApICkge1xuXG5cdFx0XHRcdC8vIElmIGl0IGlzIGEgbm9kZSB1bmxpa2VseSB0byBiZSBzdHJpbmdpZnktZWQgb3IgbG9vcGVkIG92ZXJcblx0XHRcdFx0Ly8gdXNlIHBsYWluIGFzc2lnbm1lbnRcblx0XHRcdFx0aWYgKCBvd25lci5ub2RlVHlwZSApIHtcblx0XHRcdFx0XHRvd25lclsgdGhpcy5leHBhbmRvIF0gPSB2YWx1ZTtcblxuXHRcdFx0XHQvLyBPdGhlcndpc2Ugc2VjdXJlIGl0IGluIGEgbm9uLWVudW1lcmFibGUgcHJvcGVydHlcblx0XHRcdFx0Ly8gY29uZmlndXJhYmxlIG11c3QgYmUgdHJ1ZSB0byBhbGxvdyB0aGUgcHJvcGVydHkgdG8gYmVcblx0XHRcdFx0Ly8gZGVsZXRlZCB3aGVuIGRhdGEgaXMgcmVtb3ZlZFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggb3duZXIsIHRoaXMuZXhwYW5kbywge1xuXHRcdFx0XHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9LFxuXHRzZXQ6IGZ1bmN0aW9uKCBvd25lciwgZGF0YSwgdmFsdWUgKSB7XG5cdFx0dmFyIHByb3AsXG5cdFx0XHRjYWNoZSA9IHRoaXMuY2FjaGUoIG93bmVyICk7XG5cblx0XHQvLyBIYW5kbGU6IFsgb3duZXIsIGtleSwgdmFsdWUgXSBhcmdzXG5cdFx0Ly8gQWx3YXlzIHVzZSBjYW1lbENhc2Uga2V5IChnaC0yMjU3KVxuXHRcdGlmICggdHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRjYWNoZVsgY2FtZWxDYXNlKCBkYXRhICkgXSA9IHZhbHVlO1xuXG5cdFx0Ly8gSGFuZGxlOiBbIG93bmVyLCB7IHByb3BlcnRpZXMgfSBdIGFyZ3Ncblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyBDb3B5IHRoZSBwcm9wZXJ0aWVzIG9uZS1ieS1vbmUgdG8gdGhlIGNhY2hlIG9iamVjdFxuXHRcdFx0Zm9yICggcHJvcCBpbiBkYXRhICkge1xuXHRcdFx0XHRjYWNoZVsgY2FtZWxDYXNlKCBwcm9wICkgXSA9IGRhdGFbIHByb3AgXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGNhY2hlO1xuXHR9LFxuXHRnZXQ6IGZ1bmN0aW9uKCBvd25lciwga2V5ICkge1xuXHRcdHJldHVybiBrZXkgPT09IHVuZGVmaW5lZCA/XG5cdFx0XHR0aGlzLmNhY2hlKCBvd25lciApIDpcblxuXHRcdFx0Ly8gQWx3YXlzIHVzZSBjYW1lbENhc2Uga2V5IChnaC0yMjU3KVxuXHRcdFx0b3duZXJbIHRoaXMuZXhwYW5kbyBdICYmIG93bmVyWyB0aGlzLmV4cGFuZG8gXVsgY2FtZWxDYXNlKCBrZXkgKSBdO1xuXHR9LFxuXHRhY2Nlc3M6IGZ1bmN0aW9uKCBvd25lciwga2V5LCB2YWx1ZSApIHtcblxuXHRcdC8vIEluIGNhc2VzIHdoZXJlIGVpdGhlcjpcblx0XHQvL1xuXHRcdC8vICAgMS4gTm8ga2V5IHdhcyBzcGVjaWZpZWRcblx0XHQvLyAgIDIuIEEgc3RyaW5nIGtleSB3YXMgc3BlY2lmaWVkLCBidXQgbm8gdmFsdWUgcHJvdmlkZWRcblx0XHQvL1xuXHRcdC8vIFRha2UgdGhlIFwicmVhZFwiIHBhdGggYW5kIGFsbG93IHRoZSBnZXQgbWV0aG9kIHRvIGRldGVybWluZVxuXHRcdC8vIHdoaWNoIHZhbHVlIHRvIHJldHVybiwgcmVzcGVjdGl2ZWx5IGVpdGhlcjpcblx0XHQvL1xuXHRcdC8vICAgMS4gVGhlIGVudGlyZSBjYWNoZSBvYmplY3Rcblx0XHQvLyAgIDIuIFRoZSBkYXRhIHN0b3JlZCBhdCB0aGUga2V5XG5cdFx0Ly9cblx0XHRpZiAoIGtleSA9PT0gdW5kZWZpbmVkIHx8XG5cdFx0XHRcdCggKCBrZXkgJiYgdHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIiApICYmIHZhbHVlID09PSB1bmRlZmluZWQgKSApIHtcblxuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0KCBvd25lciwga2V5ICk7XG5cdFx0fVxuXG5cdFx0Ly8gV2hlbiB0aGUga2V5IGlzIG5vdCBhIHN0cmluZywgb3IgYm90aCBhIGtleSBhbmQgdmFsdWVcblx0XHQvLyBhcmUgc3BlY2lmaWVkLCBzZXQgb3IgZXh0ZW5kIChleGlzdGluZyBvYmplY3RzKSB3aXRoIGVpdGhlcjpcblx0XHQvL1xuXHRcdC8vICAgMS4gQW4gb2JqZWN0IG9mIHByb3BlcnRpZXNcblx0XHQvLyAgIDIuIEEga2V5IGFuZCB2YWx1ZVxuXHRcdC8vXG5cdFx0dGhpcy5zZXQoIG93bmVyLCBrZXksIHZhbHVlICk7XG5cblx0XHQvLyBTaW5jZSB0aGUgXCJzZXRcIiBwYXRoIGNhbiBoYXZlIHR3byBwb3NzaWJsZSBlbnRyeSBwb2ludHNcblx0XHQvLyByZXR1cm4gdGhlIGV4cGVjdGVkIGRhdGEgYmFzZWQgb24gd2hpY2ggcGF0aCB3YXMgdGFrZW5bKl1cblx0XHRyZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoga2V5O1xuXHR9LFxuXHRyZW1vdmU6IGZ1bmN0aW9uKCBvd25lciwga2V5ICkge1xuXHRcdHZhciBpLFxuXHRcdFx0Y2FjaGUgPSBvd25lclsgdGhpcy5leHBhbmRvIF07XG5cblx0XHRpZiAoIGNhY2hlID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCBrZXkgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Ly8gU3VwcG9ydCBhcnJheSBvciBzcGFjZSBzZXBhcmF0ZWQgc3RyaW5nIG9mIGtleXNcblx0XHRcdGlmICggQXJyYXkuaXNBcnJheSgga2V5ICkgKSB7XG5cblx0XHRcdFx0Ly8gSWYga2V5IGlzIGFuIGFycmF5IG9mIGtleXMuLi5cblx0XHRcdFx0Ly8gV2UgYWx3YXlzIHNldCBjYW1lbENhc2Uga2V5cywgc28gcmVtb3ZlIHRoYXQuXG5cdFx0XHRcdGtleSA9IGtleS5tYXAoIGNhbWVsQ2FzZSApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0a2V5ID0gY2FtZWxDYXNlKCBrZXkgKTtcblxuXHRcdFx0XHQvLyBJZiBhIGtleSB3aXRoIHRoZSBzcGFjZXMgZXhpc3RzLCB1c2UgaXQuXG5cdFx0XHRcdC8vIE90aGVyd2lzZSwgY3JlYXRlIGFuIGFycmF5IGJ5IG1hdGNoaW5nIG5vbi13aGl0ZXNwYWNlXG5cdFx0XHRcdGtleSA9IGtleSBpbiBjYWNoZSA/XG5cdFx0XHRcdFx0WyBrZXkgXSA6XG5cdFx0XHRcdFx0KCBrZXkubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbXSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpID0ga2V5Lmxlbmd0aDtcblxuXHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdGRlbGV0ZSBjYWNoZVsga2V5WyBpIF0gXTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBSZW1vdmUgdGhlIGV4cGFuZG8gaWYgdGhlcmUncyBubyBtb3JlIGRhdGFcblx0XHRpZiAoIGtleSA9PT0gdW5kZWZpbmVkIHx8IGpRdWVyeS5pc0VtcHR5T2JqZWN0KCBjYWNoZSApICkge1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBDaHJvbWUgPD0zNSAtIDQ1XG5cdFx0XHQvLyBXZWJraXQgJiBCbGluayBwZXJmb3JtYW5jZSBzdWZmZXJzIHdoZW4gZGVsZXRpbmcgcHJvcGVydGllc1xuXHRcdFx0Ly8gZnJvbSBET00gbm9kZXMsIHNvIHNldCB0byB1bmRlZmluZWQgaW5zdGVhZFxuXHRcdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9Mzc4NjA3IChidWcgcmVzdHJpY3RlZClcblx0XHRcdGlmICggb3duZXIubm9kZVR5cGUgKSB7XG5cdFx0XHRcdG93bmVyWyB0aGlzLmV4cGFuZG8gXSA9IHVuZGVmaW5lZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRlbGV0ZSBvd25lclsgdGhpcy5leHBhbmRvIF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRoYXNEYXRhOiBmdW5jdGlvbiggb3duZXIgKSB7XG5cdFx0dmFyIGNhY2hlID0gb3duZXJbIHRoaXMuZXhwYW5kbyBdO1xuXHRcdHJldHVybiBjYWNoZSAhPT0gdW5kZWZpbmVkICYmICFqUXVlcnkuaXNFbXB0eU9iamVjdCggY2FjaGUgKTtcblx0fVxufTtcbnZhciBkYXRhUHJpdiA9IG5ldyBEYXRhKCk7XG5cbnZhciBkYXRhVXNlciA9IG5ldyBEYXRhKCk7XG5cblxuXG4vL1x0SW1wbGVtZW50YXRpb24gU3VtbWFyeVxuLy9cbi8vXHQxLiBFbmZvcmNlIEFQSSBzdXJmYWNlIGFuZCBzZW1hbnRpYyBjb21wYXRpYmlsaXR5IHdpdGggMS45LnggYnJhbmNoXG4vL1x0Mi4gSW1wcm92ZSB0aGUgbW9kdWxlJ3MgbWFpbnRhaW5hYmlsaXR5IGJ5IHJlZHVjaW5nIHRoZSBzdG9yYWdlXG4vL1x0XHRwYXRocyB0byBhIHNpbmdsZSBtZWNoYW5pc20uXG4vL1x0My4gVXNlIHRoZSBzYW1lIHNpbmdsZSBtZWNoYW5pc20gdG8gc3VwcG9ydCBcInByaXZhdGVcIiBhbmQgXCJ1c2VyXCIgZGF0YS5cbi8vXHQ0LiBfTmV2ZXJfIGV4cG9zZSBcInByaXZhdGVcIiBkYXRhIHRvIHVzZXIgY29kZSAoVE9ETzogRHJvcCBfZGF0YSwgX3JlbW92ZURhdGEpXG4vL1x0NS4gQXZvaWQgZXhwb3NpbmcgaW1wbGVtZW50YXRpb24gZGV0YWlscyBvbiB1c2VyIG9iamVjdHMgKGVnLiBleHBhbmRvIHByb3BlcnRpZXMpXG4vL1x0Ni4gUHJvdmlkZSBhIGNsZWFyIHBhdGggZm9yIGltcGxlbWVudGF0aW9uIHVwZ3JhZGUgdG8gV2Vha01hcCBpbiAyMDE0XG5cbnZhciByYnJhY2UgPSAvXig/Olxce1tcXHdcXFddKlxcfXxcXFtbXFx3XFxXXSpcXF0pJC8sXG5cdHJtdWx0aURhc2ggPSAvW0EtWl0vZztcblxuZnVuY3Rpb24gZ2V0RGF0YSggZGF0YSApIHtcblx0aWYgKCBkYXRhID09PSBcInRydWVcIiApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmICggZGF0YSA9PT0gXCJmYWxzZVwiICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGlmICggZGF0YSA9PT0gXCJudWxsXCIgKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvLyBPbmx5IGNvbnZlcnQgdG8gYSBudW1iZXIgaWYgaXQgZG9lc24ndCBjaGFuZ2UgdGhlIHN0cmluZ1xuXHRpZiAoIGRhdGEgPT09ICtkYXRhICsgXCJcIiApIHtcblx0XHRyZXR1cm4gK2RhdGE7XG5cdH1cblxuXHRpZiAoIHJicmFjZS50ZXN0KCBkYXRhICkgKSB7XG5cdFx0cmV0dXJuIEpTT04ucGFyc2UoIGRhdGEgKTtcblx0fVxuXG5cdHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBkYXRhQXR0ciggZWxlbSwga2V5LCBkYXRhICkge1xuXHR2YXIgbmFtZTtcblxuXHQvLyBJZiBub3RoaW5nIHdhcyBmb3VuZCBpbnRlcm5hbGx5LCB0cnkgdG8gZmV0Y2ggYW55XG5cdC8vIGRhdGEgZnJvbSB0aGUgSFRNTDUgZGF0YS0qIGF0dHJpYnV0ZVxuXHRpZiAoIGRhdGEgPT09IHVuZGVmaW5lZCAmJiBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdG5hbWUgPSBcImRhdGEtXCIgKyBrZXkucmVwbGFjZSggcm11bHRpRGFzaCwgXCItJCZcIiApLnRvTG93ZXJDYXNlKCk7XG5cdFx0ZGF0YSA9IGVsZW0uZ2V0QXR0cmlidXRlKCBuYW1lICk7XG5cblx0XHRpZiAoIHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZGF0YSA9IGdldERhdGEoIGRhdGEgKTtcblx0XHRcdH0gY2F0Y2ggKCBlICkge31cblxuXHRcdFx0Ly8gTWFrZSBzdXJlIHdlIHNldCB0aGUgZGF0YSBzbyBpdCBpc24ndCBjaGFuZ2VkIGxhdGVyXG5cdFx0XHRkYXRhVXNlci5zZXQoIGVsZW0sIGtleSwgZGF0YSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkYXRhID0gdW5kZWZpbmVkO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZGF0YTtcbn1cblxualF1ZXJ5LmV4dGVuZCgge1xuXHRoYXNEYXRhOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gZGF0YVVzZXIuaGFzRGF0YSggZWxlbSApIHx8IGRhdGFQcml2Lmhhc0RhdGEoIGVsZW0gKTtcblx0fSxcblxuXHRkYXRhOiBmdW5jdGlvbiggZWxlbSwgbmFtZSwgZGF0YSApIHtcblx0XHRyZXR1cm4gZGF0YVVzZXIuYWNjZXNzKCBlbGVtLCBuYW1lLCBkYXRhICk7XG5cdH0sXG5cblx0cmVtb3ZlRGF0YTogZnVuY3Rpb24oIGVsZW0sIG5hbWUgKSB7XG5cdFx0ZGF0YVVzZXIucmVtb3ZlKCBlbGVtLCBuYW1lICk7XG5cdH0sXG5cblx0Ly8gVE9ETzogTm93IHRoYXQgYWxsIGNhbGxzIHRvIF9kYXRhIGFuZCBfcmVtb3ZlRGF0YSBoYXZlIGJlZW4gcmVwbGFjZWRcblx0Ly8gd2l0aCBkaXJlY3QgY2FsbHMgdG8gZGF0YVByaXYgbWV0aG9kcywgdGhlc2UgY2FuIGJlIGRlcHJlY2F0ZWQuXG5cdF9kYXRhOiBmdW5jdGlvbiggZWxlbSwgbmFtZSwgZGF0YSApIHtcblx0XHRyZXR1cm4gZGF0YVByaXYuYWNjZXNzKCBlbGVtLCBuYW1lLCBkYXRhICk7XG5cdH0sXG5cblx0X3JlbW92ZURhdGE6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lICkge1xuXHRcdGRhdGFQcml2LnJlbW92ZSggZWxlbSwgbmFtZSApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0ZGF0YTogZnVuY3Rpb24oIGtleSwgdmFsdWUgKSB7XG5cdFx0dmFyIGksIG5hbWUsIGRhdGEsXG5cdFx0XHRlbGVtID0gdGhpc1sgMCBdLFxuXHRcdFx0YXR0cnMgPSBlbGVtICYmIGVsZW0uYXR0cmlidXRlcztcblxuXHRcdC8vIEdldHMgYWxsIHZhbHVlc1xuXHRcdGlmICgga2V5ID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRpZiAoIHRoaXMubGVuZ3RoICkge1xuXHRcdFx0XHRkYXRhID0gZGF0YVVzZXIuZ2V0KCBlbGVtICk7XG5cblx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxICYmICFkYXRhUHJpdi5nZXQoIGVsZW0sIFwiaGFzRGF0YUF0dHJzXCIgKSApIHtcblx0XHRcdFx0XHRpID0gYXR0cnMubGVuZ3RoO1xuXHRcdFx0XHRcdHdoaWxlICggaS0tICkge1xuXG5cdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSAxMSBvbmx5XG5cdFx0XHRcdFx0XHQvLyBUaGUgYXR0cnMgZWxlbWVudHMgY2FuIGJlIG51bGwgKCMxNDg5NClcblx0XHRcdFx0XHRcdGlmICggYXR0cnNbIGkgXSApIHtcblx0XHRcdFx0XHRcdFx0bmFtZSA9IGF0dHJzWyBpIF0ubmFtZTtcblx0XHRcdFx0XHRcdFx0aWYgKCBuYW1lLmluZGV4T2YoIFwiZGF0YS1cIiApID09PSAwICkge1xuXHRcdFx0XHRcdFx0XHRcdG5hbWUgPSBjYW1lbENhc2UoIG5hbWUuc2xpY2UoIDUgKSApO1xuXHRcdFx0XHRcdFx0XHRcdGRhdGFBdHRyKCBlbGVtLCBuYW1lLCBkYXRhWyBuYW1lIF0gKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkYXRhUHJpdi5zZXQoIGVsZW0sIFwiaGFzRGF0YUF0dHJzXCIsIHRydWUgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZGF0YTtcblx0XHR9XG5cblx0XHQvLyBTZXRzIG11bHRpcGxlIHZhbHVlc1xuXHRcdGlmICggdHlwZW9mIGtleSA9PT0gXCJvYmplY3RcIiApIHtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRkYXRhVXNlci5zZXQoIHRoaXMsIGtleSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRcdHZhciBkYXRhO1xuXG5cdFx0XHQvLyBUaGUgY2FsbGluZyBqUXVlcnkgb2JqZWN0IChlbGVtZW50IG1hdGNoZXMpIGlzIG5vdCBlbXB0eVxuXHRcdFx0Ly8gKGFuZCB0aGVyZWZvcmUgaGFzIGFuIGVsZW1lbnQgYXBwZWFycyBhdCB0aGlzWyAwIF0pIGFuZCB0aGVcblx0XHRcdC8vIGB2YWx1ZWAgcGFyYW1ldGVyIHdhcyBub3QgdW5kZWZpbmVkLiBBbiBlbXB0eSBqUXVlcnkgb2JqZWN0XG5cdFx0XHQvLyB3aWxsIHJlc3VsdCBpbiBgdW5kZWZpbmVkYCBmb3IgZWxlbSA9IHRoaXNbIDAgXSB3aGljaCB3aWxsXG5cdFx0XHQvLyB0aHJvdyBhbiBleGNlcHRpb24gaWYgYW4gYXR0ZW1wdCB0byByZWFkIGEgZGF0YSBjYWNoZSBpcyBtYWRlLlxuXHRcdFx0aWYgKCBlbGVtICYmIHZhbHVlID09PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0Ly8gQXR0ZW1wdCB0byBnZXQgZGF0YSBmcm9tIHRoZSBjYWNoZVxuXHRcdFx0XHQvLyBUaGUga2V5IHdpbGwgYWx3YXlzIGJlIGNhbWVsQ2FzZWQgaW4gRGF0YVxuXHRcdFx0XHRkYXRhID0gZGF0YVVzZXIuZ2V0KCBlbGVtLCBrZXkgKTtcblx0XHRcdFx0aWYgKCBkYXRhICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBBdHRlbXB0IHRvIFwiZGlzY292ZXJcIiB0aGUgZGF0YSBpblxuXHRcdFx0XHQvLyBIVE1MNSBjdXN0b20gZGF0YS0qIGF0dHJzXG5cdFx0XHRcdGRhdGEgPSBkYXRhQXR0ciggZWxlbSwga2V5ICk7XG5cdFx0XHRcdGlmICggZGF0YSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdHJldHVybiBkYXRhO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gV2UgdHJpZWQgcmVhbGx5IGhhcmQsIGJ1dCB0aGUgZGF0YSBkb2Vzbid0IGV4aXN0LlxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNldCB0aGUgZGF0YS4uLlxuXHRcdFx0dGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHQvLyBXZSBhbHdheXMgc3RvcmUgdGhlIGNhbWVsQ2FzZWQga2V5XG5cdFx0XHRcdGRhdGFVc2VyLnNldCggdGhpcywga2V5LCB2YWx1ZSApO1xuXHRcdFx0fSApO1xuXHRcdH0sIG51bGwsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoID4gMSwgbnVsbCwgdHJ1ZSApO1xuXHR9LFxuXG5cdHJlbW92ZURhdGE6IGZ1bmN0aW9uKCBrZXkgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRkYXRhVXNlci5yZW1vdmUoIHRoaXMsIGtleSApO1xuXHRcdH0gKTtcblx0fVxufSApO1xuXG5cbmpRdWVyeS5leHRlbmQoIHtcblx0cXVldWU6IGZ1bmN0aW9uKCBlbGVtLCB0eXBlLCBkYXRhICkge1xuXHRcdHZhciBxdWV1ZTtcblxuXHRcdGlmICggZWxlbSApIHtcblx0XHRcdHR5cGUgPSAoIHR5cGUgfHwgXCJmeFwiICkgKyBcInF1ZXVlXCI7XG5cdFx0XHRxdWV1ZSA9IGRhdGFQcml2LmdldCggZWxlbSwgdHlwZSApO1xuXG5cdFx0XHQvLyBTcGVlZCB1cCBkZXF1ZXVlIGJ5IGdldHRpbmcgb3V0IHF1aWNrbHkgaWYgdGhpcyBpcyBqdXN0IGEgbG9va3VwXG5cdFx0XHRpZiAoIGRhdGEgKSB7XG5cdFx0XHRcdGlmICggIXF1ZXVlIHx8IEFycmF5LmlzQXJyYXkoIGRhdGEgKSApIHtcblx0XHRcdFx0XHRxdWV1ZSA9IGRhdGFQcml2LmFjY2VzcyggZWxlbSwgdHlwZSwgalF1ZXJ5Lm1ha2VBcnJheSggZGF0YSApICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cXVldWUucHVzaCggZGF0YSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcXVldWUgfHwgW107XG5cdFx0fVxuXHR9LFxuXG5cdGRlcXVldWU6IGZ1bmN0aW9uKCBlbGVtLCB0eXBlICkge1xuXHRcdHR5cGUgPSB0eXBlIHx8IFwiZnhcIjtcblxuXHRcdHZhciBxdWV1ZSA9IGpRdWVyeS5xdWV1ZSggZWxlbSwgdHlwZSApLFxuXHRcdFx0c3RhcnRMZW5ndGggPSBxdWV1ZS5sZW5ndGgsXG5cdFx0XHRmbiA9IHF1ZXVlLnNoaWZ0KCksXG5cdFx0XHRob29rcyA9IGpRdWVyeS5fcXVldWVIb29rcyggZWxlbSwgdHlwZSApLFxuXHRcdFx0bmV4dCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkuZGVxdWV1ZSggZWxlbSwgdHlwZSApO1xuXHRcdFx0fTtcblxuXHRcdC8vIElmIHRoZSBmeCBxdWV1ZSBpcyBkZXF1ZXVlZCwgYWx3YXlzIHJlbW92ZSB0aGUgcHJvZ3Jlc3Mgc2VudGluZWxcblx0XHRpZiAoIGZuID09PSBcImlucHJvZ3Jlc3NcIiApIHtcblx0XHRcdGZuID0gcXVldWUuc2hpZnQoKTtcblx0XHRcdHN0YXJ0TGVuZ3RoLS07XG5cdFx0fVxuXG5cdFx0aWYgKCBmbiApIHtcblxuXHRcdFx0Ly8gQWRkIGEgcHJvZ3Jlc3Mgc2VudGluZWwgdG8gcHJldmVudCB0aGUgZnggcXVldWUgZnJvbSBiZWluZ1xuXHRcdFx0Ly8gYXV0b21hdGljYWxseSBkZXF1ZXVlZFxuXHRcdFx0aWYgKCB0eXBlID09PSBcImZ4XCIgKSB7XG5cdFx0XHRcdHF1ZXVlLnVuc2hpZnQoIFwiaW5wcm9ncmVzc1wiICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENsZWFyIHVwIHRoZSBsYXN0IHF1ZXVlIHN0b3AgZnVuY3Rpb25cblx0XHRcdGRlbGV0ZSBob29rcy5zdG9wO1xuXHRcdFx0Zm4uY2FsbCggZWxlbSwgbmV4dCwgaG9va3MgKTtcblx0XHR9XG5cblx0XHRpZiAoICFzdGFydExlbmd0aCAmJiBob29rcyApIHtcblx0XHRcdGhvb2tzLmVtcHR5LmZpcmUoKTtcblx0XHR9XG5cdH0sXG5cblx0Ly8gTm90IHB1YmxpYyAtIGdlbmVyYXRlIGEgcXVldWVIb29rcyBvYmplY3QsIG9yIHJldHVybiB0aGUgY3VycmVudCBvbmVcblx0X3F1ZXVlSG9va3M6IGZ1bmN0aW9uKCBlbGVtLCB0eXBlICkge1xuXHRcdHZhciBrZXkgPSB0eXBlICsgXCJxdWV1ZUhvb2tzXCI7XG5cdFx0cmV0dXJuIGRhdGFQcml2LmdldCggZWxlbSwga2V5ICkgfHwgZGF0YVByaXYuYWNjZXNzKCBlbGVtLCBrZXksIHtcblx0XHRcdGVtcHR5OiBqUXVlcnkuQ2FsbGJhY2tzKCBcIm9uY2UgbWVtb3J5XCIgKS5hZGQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRkYXRhUHJpdi5yZW1vdmUoIGVsZW0sIFsgdHlwZSArIFwicXVldWVcIiwga2V5IF0gKTtcblx0XHRcdH0gKVxuXHRcdH0gKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdHF1ZXVlOiBmdW5jdGlvbiggdHlwZSwgZGF0YSApIHtcblx0XHR2YXIgc2V0dGVyID0gMjtcblxuXHRcdGlmICggdHlwZW9mIHR5cGUgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRkYXRhID0gdHlwZTtcblx0XHRcdHR5cGUgPSBcImZ4XCI7XG5cdFx0XHRzZXR0ZXItLTtcblx0XHR9XG5cblx0XHRpZiAoIGFyZ3VtZW50cy5sZW5ndGggPCBzZXR0ZXIgKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5LnF1ZXVlKCB0aGlzWyAwIF0sIHR5cGUgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGF0YSA9PT0gdW5kZWZpbmVkID9cblx0XHRcdHRoaXMgOlxuXHRcdFx0dGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHF1ZXVlID0galF1ZXJ5LnF1ZXVlKCB0aGlzLCB0eXBlLCBkYXRhICk7XG5cblx0XHRcdFx0Ly8gRW5zdXJlIGEgaG9va3MgZm9yIHRoaXMgcXVldWVcblx0XHRcdFx0alF1ZXJ5Ll9xdWV1ZUhvb2tzKCB0aGlzLCB0eXBlICk7XG5cblx0XHRcdFx0aWYgKCB0eXBlID09PSBcImZ4XCIgJiYgcXVldWVbIDAgXSAhPT0gXCJpbnByb2dyZXNzXCIgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5LmRlcXVldWUoIHRoaXMsIHR5cGUgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHR9LFxuXHRkZXF1ZXVlOiBmdW5jdGlvbiggdHlwZSApIHtcblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeS5kZXF1ZXVlKCB0aGlzLCB0eXBlICk7XG5cdFx0fSApO1xuXHR9LFxuXHRjbGVhclF1ZXVlOiBmdW5jdGlvbiggdHlwZSApIHtcblx0XHRyZXR1cm4gdGhpcy5xdWV1ZSggdHlwZSB8fCBcImZ4XCIsIFtdICk7XG5cdH0sXG5cblx0Ly8gR2V0IGEgcHJvbWlzZSByZXNvbHZlZCB3aGVuIHF1ZXVlcyBvZiBhIGNlcnRhaW4gdHlwZVxuXHQvLyBhcmUgZW1wdGllZCAoZnggaXMgdGhlIHR5cGUgYnkgZGVmYXVsdClcblx0cHJvbWlzZTogZnVuY3Rpb24oIHR5cGUsIG9iaiApIHtcblx0XHR2YXIgdG1wLFxuXHRcdFx0Y291bnQgPSAxLFxuXHRcdFx0ZGVmZXIgPSBqUXVlcnkuRGVmZXJyZWQoKSxcblx0XHRcdGVsZW1lbnRzID0gdGhpcyxcblx0XHRcdGkgPSB0aGlzLmxlbmd0aCxcblx0XHRcdHJlc29sdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCAhKCAtLWNvdW50ICkgKSB7XG5cdFx0XHRcdFx0ZGVmZXIucmVzb2x2ZVdpdGgoIGVsZW1lbnRzLCBbIGVsZW1lbnRzIF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdGlmICggdHlwZW9mIHR5cGUgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRvYmogPSB0eXBlO1xuXHRcdFx0dHlwZSA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0dHlwZSA9IHR5cGUgfHwgXCJmeFwiO1xuXG5cdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHR0bXAgPSBkYXRhUHJpdi5nZXQoIGVsZW1lbnRzWyBpIF0sIHR5cGUgKyBcInF1ZXVlSG9va3NcIiApO1xuXHRcdFx0aWYgKCB0bXAgJiYgdG1wLmVtcHR5ICkge1xuXHRcdFx0XHRjb3VudCsrO1xuXHRcdFx0XHR0bXAuZW1wdHkuYWRkKCByZXNvbHZlICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJlc29sdmUoKTtcblx0XHRyZXR1cm4gZGVmZXIucHJvbWlzZSggb2JqICk7XG5cdH1cbn0gKTtcbnZhciBwbnVtID0gKCAvWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLyApLnNvdXJjZTtcblxudmFyIHJjc3NOdW0gPSBuZXcgUmVnRXhwKCBcIl4oPzooWystXSk9fCkoXCIgKyBwbnVtICsgXCIpKFthLXolXSopJFwiLCBcImlcIiApO1xuXG5cbnZhciBjc3NFeHBhbmQgPSBbIFwiVG9wXCIsIFwiUmlnaHRcIiwgXCJCb3R0b21cIiwgXCJMZWZ0XCIgXTtcblxudmFyIGRvY3VtZW50RWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG5cblx0dmFyIGlzQXR0YWNoZWQgPSBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiBqUXVlcnkuY29udGFpbnMoIGVsZW0ub3duZXJEb2N1bWVudCwgZWxlbSApO1xuXHRcdH0sXG5cdFx0Y29tcG9zZWQgPSB7IGNvbXBvc2VkOiB0cnVlIH07XG5cblx0Ly8gU3VwcG9ydDogSUUgOSAtIDExKywgRWRnZSAxMiAtIDE4KywgaU9TIDEwLjAgLSAxMC4yIG9ubHlcblx0Ly8gQ2hlY2sgYXR0YWNobWVudCBhY3Jvc3Mgc2hhZG93IERPTSBib3VuZGFyaWVzIHdoZW4gcG9zc2libGUgKGdoLTM1MDQpXG5cdC8vIFN1cHBvcnQ6IGlPUyAxMC4wLTEwLjIgb25seVxuXHQvLyBFYXJseSBpT1MgMTAgdmVyc2lvbnMgc3VwcG9ydCBgYXR0YWNoU2hhZG93YCBidXQgbm90IGBnZXRSb290Tm9kZWAsXG5cdC8vIGxlYWRpbmcgdG8gZXJyb3JzLiBXZSBuZWVkIHRvIGNoZWNrIGZvciBgZ2V0Um9vdE5vZGVgLlxuXHRpZiAoIGRvY3VtZW50RWxlbWVudC5nZXRSb290Tm9kZSApIHtcblx0XHRpc0F0dGFjaGVkID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5LmNvbnRhaW5zKCBlbGVtLm93bmVyRG9jdW1lbnQsIGVsZW0gKSB8fFxuXHRcdFx0XHRlbGVtLmdldFJvb3ROb2RlKCBjb21wb3NlZCApID09PSBlbGVtLm93bmVyRG9jdW1lbnQ7XG5cdFx0fTtcblx0fVxudmFyIGlzSGlkZGVuV2l0aGluVHJlZSA9IGZ1bmN0aW9uKCBlbGVtLCBlbCApIHtcblxuXHRcdC8vIGlzSGlkZGVuV2l0aGluVHJlZSBtaWdodCBiZSBjYWxsZWQgZnJvbSBqUXVlcnkjZmlsdGVyIGZ1bmN0aW9uO1xuXHRcdC8vIGluIHRoYXQgY2FzZSwgZWxlbWVudCB3aWxsIGJlIHNlY29uZCBhcmd1bWVudFxuXHRcdGVsZW0gPSBlbCB8fCBlbGVtO1xuXG5cdFx0Ly8gSW5saW5lIHN0eWxlIHRydW1wcyBhbGxcblx0XHRyZXR1cm4gZWxlbS5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIiB8fFxuXHRcdFx0ZWxlbS5zdHlsZS5kaXNwbGF5ID09PSBcIlwiICYmXG5cblx0XHRcdC8vIE90aGVyd2lzZSwgY2hlY2sgY29tcHV0ZWQgc3R5bGVcblx0XHRcdC8vIFN1cHBvcnQ6IEZpcmVmb3ggPD00MyAtIDQ1XG5cdFx0XHQvLyBEaXNjb25uZWN0ZWQgZWxlbWVudHMgY2FuIGhhdmUgY29tcHV0ZWQgZGlzcGxheTogbm9uZSwgc28gZmlyc3QgY29uZmlybSB0aGF0IGVsZW0gaXNcblx0XHRcdC8vIGluIHRoZSBkb2N1bWVudC5cblx0XHRcdGlzQXR0YWNoZWQoIGVsZW0gKSAmJlxuXG5cdFx0XHRqUXVlcnkuY3NzKCBlbGVtLCBcImRpc3BsYXlcIiApID09PSBcIm5vbmVcIjtcblx0fTtcblxuXG5cbmZ1bmN0aW9uIGFkanVzdENTUyggZWxlbSwgcHJvcCwgdmFsdWVQYXJ0cywgdHdlZW4gKSB7XG5cdHZhciBhZGp1c3RlZCwgc2NhbGUsXG5cdFx0bWF4SXRlcmF0aW9ucyA9IDIwLFxuXHRcdGN1cnJlbnRWYWx1ZSA9IHR3ZWVuID9cblx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gdHdlZW4uY3VyKCk7XG5cdFx0XHR9IDpcblx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4galF1ZXJ5LmNzcyggZWxlbSwgcHJvcCwgXCJcIiApO1xuXHRcdFx0fSxcblx0XHRpbml0aWFsID0gY3VycmVudFZhbHVlKCksXG5cdFx0dW5pdCA9IHZhbHVlUGFydHMgJiYgdmFsdWVQYXJ0c1sgMyBdIHx8ICggalF1ZXJ5LmNzc051bWJlclsgcHJvcCBdID8gXCJcIiA6IFwicHhcIiApLFxuXG5cdFx0Ly8gU3RhcnRpbmcgdmFsdWUgY29tcHV0YXRpb24gaXMgcmVxdWlyZWQgZm9yIHBvdGVudGlhbCB1bml0IG1pc21hdGNoZXNcblx0XHRpbml0aWFsSW5Vbml0ID0gZWxlbS5ub2RlVHlwZSAmJlxuXHRcdFx0KCBqUXVlcnkuY3NzTnVtYmVyWyBwcm9wIF0gfHwgdW5pdCAhPT0gXCJweFwiICYmICtpbml0aWFsICkgJiZcblx0XHRcdHJjc3NOdW0uZXhlYyggalF1ZXJ5LmNzcyggZWxlbSwgcHJvcCApICk7XG5cblx0aWYgKCBpbml0aWFsSW5Vbml0ICYmIGluaXRpYWxJblVuaXRbIDMgXSAhPT0gdW5pdCApIHtcblxuXHRcdC8vIFN1cHBvcnQ6IEZpcmVmb3ggPD01NFxuXHRcdC8vIEhhbHZlIHRoZSBpdGVyYXRpb24gdGFyZ2V0IHZhbHVlIHRvIHByZXZlbnQgaW50ZXJmZXJlbmNlIGZyb20gQ1NTIHVwcGVyIGJvdW5kcyAoZ2gtMjE0NClcblx0XHRpbml0aWFsID0gaW5pdGlhbCAvIDI7XG5cblx0XHQvLyBUcnVzdCB1bml0cyByZXBvcnRlZCBieSBqUXVlcnkuY3NzXG5cdFx0dW5pdCA9IHVuaXQgfHwgaW5pdGlhbEluVW5pdFsgMyBdO1xuXG5cdFx0Ly8gSXRlcmF0aXZlbHkgYXBwcm94aW1hdGUgZnJvbSBhIG5vbnplcm8gc3RhcnRpbmcgcG9pbnRcblx0XHRpbml0aWFsSW5Vbml0ID0gK2luaXRpYWwgfHwgMTtcblxuXHRcdHdoaWxlICggbWF4SXRlcmF0aW9ucy0tICkge1xuXG5cdFx0XHQvLyBFdmFsdWF0ZSBhbmQgdXBkYXRlIG91ciBiZXN0IGd1ZXNzIChkb3VibGluZyBndWVzc2VzIHRoYXQgemVybyBvdXQpLlxuXHRcdFx0Ly8gRmluaXNoIGlmIHRoZSBzY2FsZSBlcXVhbHMgb3IgY3Jvc3NlcyAxIChtYWtpbmcgdGhlIG9sZCpuZXcgcHJvZHVjdCBub24tcG9zaXRpdmUpLlxuXHRcdFx0alF1ZXJ5LnN0eWxlKCBlbGVtLCBwcm9wLCBpbml0aWFsSW5Vbml0ICsgdW5pdCApO1xuXHRcdFx0aWYgKCAoIDEgLSBzY2FsZSApICogKCAxIC0gKCBzY2FsZSA9IGN1cnJlbnRWYWx1ZSgpIC8gaW5pdGlhbCB8fCAwLjUgKSApIDw9IDAgKSB7XG5cdFx0XHRcdG1heEl0ZXJhdGlvbnMgPSAwO1xuXHRcdFx0fVxuXHRcdFx0aW5pdGlhbEluVW5pdCA9IGluaXRpYWxJblVuaXQgLyBzY2FsZTtcblxuXHRcdH1cblxuXHRcdGluaXRpYWxJblVuaXQgPSBpbml0aWFsSW5Vbml0ICogMjtcblx0XHRqUXVlcnkuc3R5bGUoIGVsZW0sIHByb3AsIGluaXRpYWxJblVuaXQgKyB1bml0ICk7XG5cblx0XHQvLyBNYWtlIHN1cmUgd2UgdXBkYXRlIHRoZSB0d2VlbiBwcm9wZXJ0aWVzIGxhdGVyIG9uXG5cdFx0dmFsdWVQYXJ0cyA9IHZhbHVlUGFydHMgfHwgW107XG5cdH1cblxuXHRpZiAoIHZhbHVlUGFydHMgKSB7XG5cdFx0aW5pdGlhbEluVW5pdCA9ICtpbml0aWFsSW5Vbml0IHx8ICtpbml0aWFsIHx8IDA7XG5cblx0XHQvLyBBcHBseSByZWxhdGl2ZSBvZmZzZXQgKCs9Ly09KSBpZiBzcGVjaWZpZWRcblx0XHRhZGp1c3RlZCA9IHZhbHVlUGFydHNbIDEgXSA/XG5cdFx0XHRpbml0aWFsSW5Vbml0ICsgKCB2YWx1ZVBhcnRzWyAxIF0gKyAxICkgKiB2YWx1ZVBhcnRzWyAyIF0gOlxuXHRcdFx0K3ZhbHVlUGFydHNbIDIgXTtcblx0XHRpZiAoIHR3ZWVuICkge1xuXHRcdFx0dHdlZW4udW5pdCA9IHVuaXQ7XG5cdFx0XHR0d2Vlbi5zdGFydCA9IGluaXRpYWxJblVuaXQ7XG5cdFx0XHR0d2Vlbi5lbmQgPSBhZGp1c3RlZDtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGFkanVzdGVkO1xufVxuXG5cbnZhciBkZWZhdWx0RGlzcGxheU1hcCA9IHt9O1xuXG5mdW5jdGlvbiBnZXREZWZhdWx0RGlzcGxheSggZWxlbSApIHtcblx0dmFyIHRlbXAsXG5cdFx0ZG9jID0gZWxlbS5vd25lckRvY3VtZW50LFxuXHRcdG5vZGVOYW1lID0gZWxlbS5ub2RlTmFtZSxcblx0XHRkaXNwbGF5ID0gZGVmYXVsdERpc3BsYXlNYXBbIG5vZGVOYW1lIF07XG5cblx0aWYgKCBkaXNwbGF5ICkge1xuXHRcdHJldHVybiBkaXNwbGF5O1xuXHR9XG5cblx0dGVtcCA9IGRvYy5ib2R5LmFwcGVuZENoaWxkKCBkb2MuY3JlYXRlRWxlbWVudCggbm9kZU5hbWUgKSApO1xuXHRkaXNwbGF5ID0galF1ZXJ5LmNzcyggdGVtcCwgXCJkaXNwbGF5XCIgKTtcblxuXHR0ZW1wLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIHRlbXAgKTtcblxuXHRpZiAoIGRpc3BsYXkgPT09IFwibm9uZVwiICkge1xuXHRcdGRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdH1cblx0ZGVmYXVsdERpc3BsYXlNYXBbIG5vZGVOYW1lIF0gPSBkaXNwbGF5O1xuXG5cdHJldHVybiBkaXNwbGF5O1xufVxuXG5mdW5jdGlvbiBzaG93SGlkZSggZWxlbWVudHMsIHNob3cgKSB7XG5cdHZhciBkaXNwbGF5LCBlbGVtLFxuXHRcdHZhbHVlcyA9IFtdLFxuXHRcdGluZGV4ID0gMCxcblx0XHRsZW5ndGggPSBlbGVtZW50cy5sZW5ndGg7XG5cblx0Ly8gRGV0ZXJtaW5lIG5ldyBkaXNwbGF5IHZhbHVlIGZvciBlbGVtZW50cyB0aGF0IG5lZWQgdG8gY2hhbmdlXG5cdGZvciAoIDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0ZWxlbSA9IGVsZW1lbnRzWyBpbmRleCBdO1xuXHRcdGlmICggIWVsZW0uc3R5bGUgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRkaXNwbGF5ID0gZWxlbS5zdHlsZS5kaXNwbGF5O1xuXHRcdGlmICggc2hvdyApIHtcblxuXHRcdFx0Ly8gU2luY2Ugd2UgZm9yY2UgdmlzaWJpbGl0eSB1cG9uIGNhc2NhZGUtaGlkZGVuIGVsZW1lbnRzLCBhbiBpbW1lZGlhdGUgKGFuZCBzbG93KVxuXHRcdFx0Ly8gY2hlY2sgaXMgcmVxdWlyZWQgaW4gdGhpcyBmaXJzdCBsb29wIHVubGVzcyB3ZSBoYXZlIGEgbm9uZW1wdHkgZGlzcGxheSB2YWx1ZSAoZWl0aGVyXG5cdFx0XHQvLyBpbmxpbmUgb3IgYWJvdXQtdG8tYmUtcmVzdG9yZWQpXG5cdFx0XHRpZiAoIGRpc3BsYXkgPT09IFwibm9uZVwiICkge1xuXHRcdFx0XHR2YWx1ZXNbIGluZGV4IF0gPSBkYXRhUHJpdi5nZXQoIGVsZW0sIFwiZGlzcGxheVwiICkgfHwgbnVsbDtcblx0XHRcdFx0aWYgKCAhdmFsdWVzWyBpbmRleCBdICkge1xuXHRcdFx0XHRcdGVsZW0uc3R5bGUuZGlzcGxheSA9IFwiXCI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICggZWxlbS5zdHlsZS5kaXNwbGF5ID09PSBcIlwiICYmIGlzSGlkZGVuV2l0aGluVHJlZSggZWxlbSApICkge1xuXHRcdFx0XHR2YWx1ZXNbIGluZGV4IF0gPSBnZXREZWZhdWx0RGlzcGxheSggZWxlbSApO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIGRpc3BsYXkgIT09IFwibm9uZVwiICkge1xuXHRcdFx0XHR2YWx1ZXNbIGluZGV4IF0gPSBcIm5vbmVcIjtcblxuXHRcdFx0XHQvLyBSZW1lbWJlciB3aGF0IHdlJ3JlIG92ZXJ3cml0aW5nXG5cdFx0XHRcdGRhdGFQcml2LnNldCggZWxlbSwgXCJkaXNwbGF5XCIsIGRpc3BsYXkgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBTZXQgdGhlIGRpc3BsYXkgb2YgdGhlIGVsZW1lbnRzIGluIGEgc2Vjb25kIGxvb3AgdG8gYXZvaWQgY29uc3RhbnQgcmVmbG93XG5cdGZvciAoIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0aWYgKCB2YWx1ZXNbIGluZGV4IF0gIT0gbnVsbCApIHtcblx0XHRcdGVsZW1lbnRzWyBpbmRleCBdLnN0eWxlLmRpc3BsYXkgPSB2YWx1ZXNbIGluZGV4IF07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGVsZW1lbnRzO1xufVxuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdHNob3c6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBzaG93SGlkZSggdGhpcywgdHJ1ZSApO1xuXHR9LFxuXHRoaWRlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gc2hvd0hpZGUoIHRoaXMgKTtcblx0fSxcblx0dG9nZ2xlOiBmdW5jdGlvbiggc3RhdGUgKSB7XG5cdFx0aWYgKCB0eXBlb2Ygc3RhdGUgPT09IFwiYm9vbGVhblwiICkge1xuXHRcdFx0cmV0dXJuIHN0YXRlID8gdGhpcy5zaG93KCkgOiB0aGlzLmhpZGUoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGlmICggaXNIaWRkZW5XaXRoaW5UcmVlKCB0aGlzICkgKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLnNob3coKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmhpZGUoKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cbn0gKTtcbnZhciByY2hlY2thYmxlVHlwZSA9ICggL14oPzpjaGVja2JveHxyYWRpbykkL2kgKTtcblxudmFyIHJ0YWdOYW1lID0gKCAvPChbYS16XVteXFwvXFwwPlxceDIwXFx0XFxyXFxuXFxmXSopL2kgKTtcblxudmFyIHJzY3JpcHRUeXBlID0gKCAvXiR8Xm1vZHVsZSR8XFwvKD86amF2YXxlY21hKXNjcmlwdC9pICk7XG5cblxuXG4oIGZ1bmN0aW9uKCkge1xuXHR2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXG5cdFx0ZGl2ID0gZnJhZ21lbnQuYXBwZW5kQ2hpbGQoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKSApLFxuXHRcdGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJpbnB1dFwiICk7XG5cblx0Ly8gU3VwcG9ydDogQW5kcm9pZCA0LjAgLSA0LjMgb25seVxuXHQvLyBDaGVjayBzdGF0ZSBsb3N0IGlmIHRoZSBuYW1lIGlzIHNldCAoIzExMjE3KVxuXHQvLyBTdXBwb3J0OiBXaW5kb3dzIFdlYiBBcHBzIChXV0EpXG5cdC8vIGBuYW1lYCBhbmQgYHR5cGVgIG11c3QgdXNlIC5zZXRBdHRyaWJ1dGUgZm9yIFdXQSAoIzE0OTAxKVxuXHRpbnB1dC5zZXRBdHRyaWJ1dGUoIFwidHlwZVwiLCBcInJhZGlvXCIgKTtcblx0aW5wdXQuc2V0QXR0cmlidXRlKCBcImNoZWNrZWRcIiwgXCJjaGVja2VkXCIgKTtcblx0aW5wdXQuc2V0QXR0cmlidXRlKCBcIm5hbWVcIiwgXCJ0XCIgKTtcblxuXHRkaXYuYXBwZW5kQ2hpbGQoIGlucHV0ICk7XG5cblx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMSBvbmx5XG5cdC8vIE9sZGVyIFdlYktpdCBkb2Vzbid0IGNsb25lIGNoZWNrZWQgc3RhdGUgY29ycmVjdGx5IGluIGZyYWdtZW50c1xuXHRzdXBwb3J0LmNoZWNrQ2xvbmUgPSBkaXYuY2xvbmVOb2RlKCB0cnVlICkuY2xvbmVOb2RlKCB0cnVlICkubGFzdENoaWxkLmNoZWNrZWQ7XG5cblx0Ly8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG5cdC8vIE1ha2Ugc3VyZSB0ZXh0YXJlYSAoYW5kIGNoZWNrYm94KSBkZWZhdWx0VmFsdWUgaXMgcHJvcGVybHkgY2xvbmVkXG5cdGRpdi5pbm5lckhUTUwgPSBcIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIjtcblx0c3VwcG9ydC5ub0Nsb25lQ2hlY2tlZCA9ICEhZGl2LmNsb25lTm9kZSggdHJ1ZSApLmxhc3RDaGlsZC5kZWZhdWx0VmFsdWU7XG5cblx0Ly8gU3VwcG9ydDogSUUgPD05IG9ubHlcblx0Ly8gSUUgPD05IHJlcGxhY2VzIDxvcHRpb24+IHRhZ3Mgd2l0aCB0aGVpciBjb250ZW50cyB3aGVuIGluc2VydGVkIG91dHNpZGUgb2Zcblx0Ly8gdGhlIHNlbGVjdCBlbGVtZW50LlxuXHRkaXYuaW5uZXJIVE1MID0gXCI8b3B0aW9uPjwvb3B0aW9uPlwiO1xuXHRzdXBwb3J0Lm9wdGlvbiA9ICEhZGl2Lmxhc3RDaGlsZDtcbn0gKSgpO1xuXG5cbi8vIFdlIGhhdmUgdG8gY2xvc2UgdGhlc2UgdGFncyB0byBzdXBwb3J0IFhIVE1MICgjMTMyMDApXG52YXIgd3JhcE1hcCA9IHtcblxuXHQvLyBYSFRNTCBwYXJzZXJzIGRvIG5vdCBtYWdpY2FsbHkgaW5zZXJ0IGVsZW1lbnRzIGluIHRoZVxuXHQvLyBzYW1lIHdheSB0aGF0IHRhZyBzb3VwIHBhcnNlcnMgZG8uIFNvIHdlIGNhbm5vdCBzaG9ydGVuXG5cdC8vIHRoaXMgYnkgb21pdHRpbmcgPHRib2R5PiBvciBvdGhlciByZXF1aXJlZCBlbGVtZW50cy5cblx0dGhlYWQ6IFsgMSwgXCI8dGFibGU+XCIsIFwiPC90YWJsZT5cIiBdLFxuXHRjb2w6IFsgMiwgXCI8dGFibGU+PGNvbGdyb3VwPlwiLCBcIjwvY29sZ3JvdXA+PC90YWJsZT5cIiBdLFxuXHR0cjogWyAyLCBcIjx0YWJsZT48dGJvZHk+XCIsIFwiPC90Ym9keT48L3RhYmxlPlwiIF0sXG5cdHRkOiBbIDMsIFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsIFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCIgXSxcblxuXHRfZGVmYXVsdDogWyAwLCBcIlwiLCBcIlwiIF1cbn07XG5cbndyYXBNYXAudGJvZHkgPSB3cmFwTWFwLnRmb290ID0gd3JhcE1hcC5jb2xncm91cCA9IHdyYXBNYXAuY2FwdGlvbiA9IHdyYXBNYXAudGhlYWQ7XG53cmFwTWFwLnRoID0gd3JhcE1hcC50ZDtcblxuLy8gU3VwcG9ydDogSUUgPD05IG9ubHlcbmlmICggIXN1cHBvcnQub3B0aW9uICkge1xuXHR3cmFwTWFwLm9wdGdyb3VwID0gd3JhcE1hcC5vcHRpb24gPSBbIDEsIFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLCBcIjwvc2VsZWN0PlwiIF07XG59XG5cblxuZnVuY3Rpb24gZ2V0QWxsKCBjb250ZXh0LCB0YWcgKSB7XG5cblx0Ly8gU3VwcG9ydDogSUUgPD05IC0gMTEgb25seVxuXHQvLyBVc2UgdHlwZW9mIHRvIGF2b2lkIHplcm8tYXJndW1lbnQgbWV0aG9kIGludm9jYXRpb24gb24gaG9zdCBvYmplY3RzICgjMTUxNTEpXG5cdHZhciByZXQ7XG5cblx0aWYgKCB0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSAhPT0gXCJ1bmRlZmluZWRcIiApIHtcblx0XHRyZXQgPSBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lKCB0YWcgfHwgXCIqXCIgKTtcblxuXHR9IGVsc2UgaWYgKCB0eXBlb2YgY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsICE9PSBcInVuZGVmaW5lZFwiICkge1xuXHRcdHJldCA9IGNvbnRleHQucXVlcnlTZWxlY3RvckFsbCggdGFnIHx8IFwiKlwiICk7XG5cblx0fSBlbHNlIHtcblx0XHRyZXQgPSBbXTtcblx0fVxuXG5cdGlmICggdGFnID09PSB1bmRlZmluZWQgfHwgdGFnICYmIG5vZGVOYW1lKCBjb250ZXh0LCB0YWcgKSApIHtcblx0XHRyZXR1cm4galF1ZXJ5Lm1lcmdlKCBbIGNvbnRleHQgXSwgcmV0ICk7XG5cdH1cblxuXHRyZXR1cm4gcmV0O1xufVxuXG5cbi8vIE1hcmsgc2NyaXB0cyBhcyBoYXZpbmcgYWxyZWFkeSBiZWVuIGV2YWx1YXRlZFxuZnVuY3Rpb24gc2V0R2xvYmFsRXZhbCggZWxlbXMsIHJlZkVsZW1lbnRzICkge1xuXHR2YXIgaSA9IDAsXG5cdFx0bCA9IGVsZW1zLmxlbmd0aDtcblxuXHRmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG5cdFx0ZGF0YVByaXYuc2V0KFxuXHRcdFx0ZWxlbXNbIGkgXSxcblx0XHRcdFwiZ2xvYmFsRXZhbFwiLFxuXHRcdFx0IXJlZkVsZW1lbnRzIHx8IGRhdGFQcml2LmdldCggcmVmRWxlbWVudHNbIGkgXSwgXCJnbG9iYWxFdmFsXCIgKVxuXHRcdCk7XG5cdH1cbn1cblxuXG52YXIgcmh0bWwgPSAvPHwmIz9cXHcrOy87XG5cbmZ1bmN0aW9uIGJ1aWxkRnJhZ21lbnQoIGVsZW1zLCBjb250ZXh0LCBzY3JpcHRzLCBzZWxlY3Rpb24sIGlnbm9yZWQgKSB7XG5cdHZhciBlbGVtLCB0bXAsIHRhZywgd3JhcCwgYXR0YWNoZWQsIGosXG5cdFx0ZnJhZ21lbnQgPSBjb250ZXh0LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcblx0XHRub2RlcyA9IFtdLFxuXHRcdGkgPSAwLFxuXHRcdGwgPSBlbGVtcy5sZW5ndGg7XG5cblx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xuXHRcdGVsZW0gPSBlbGVtc1sgaSBdO1xuXG5cdFx0aWYgKCBlbGVtIHx8IGVsZW0gPT09IDAgKSB7XG5cblx0XHRcdC8vIEFkZCBub2RlcyBkaXJlY3RseVxuXHRcdFx0aWYgKCB0b1R5cGUoIGVsZW0gKSA9PT0gXCJvYmplY3RcIiApIHtcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHksIFBoYW50b21KUyAxIG9ubHlcblx0XHRcdFx0Ly8gcHVzaC5hcHBseShfLCBhcnJheWxpa2UpIHRocm93cyBvbiBhbmNpZW50IFdlYktpdFxuXHRcdFx0XHRqUXVlcnkubWVyZ2UoIG5vZGVzLCBlbGVtLm5vZGVUeXBlID8gWyBlbGVtIF0gOiBlbGVtICk7XG5cblx0XHRcdC8vIENvbnZlcnQgbm9uLWh0bWwgaW50byBhIHRleHQgbm9kZVxuXHRcdFx0fSBlbHNlIGlmICggIXJodG1sLnRlc3QoIGVsZW0gKSApIHtcblx0XHRcdFx0bm9kZXMucHVzaCggY29udGV4dC5jcmVhdGVUZXh0Tm9kZSggZWxlbSApICk7XG5cblx0XHRcdC8vIENvbnZlcnQgaHRtbCBpbnRvIERPTSBub2Rlc1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dG1wID0gdG1wIHx8IGZyYWdtZW50LmFwcGVuZENoaWxkKCBjb250ZXh0LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKSApO1xuXG5cdFx0XHRcdC8vIERlc2VyaWFsaXplIGEgc3RhbmRhcmQgcmVwcmVzZW50YXRpb25cblx0XHRcdFx0dGFnID0gKCBydGFnTmFtZS5leGVjKCBlbGVtICkgfHwgWyBcIlwiLCBcIlwiIF0gKVsgMSBdLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdHdyYXAgPSB3cmFwTWFwWyB0YWcgXSB8fCB3cmFwTWFwLl9kZWZhdWx0O1xuXHRcdFx0XHR0bXAuaW5uZXJIVE1MID0gd3JhcFsgMSBdICsgalF1ZXJ5Lmh0bWxQcmVmaWx0ZXIoIGVsZW0gKSArIHdyYXBbIDIgXTtcblxuXHRcdFx0XHQvLyBEZXNjZW5kIHRocm91Z2ggd3JhcHBlcnMgdG8gdGhlIHJpZ2h0IGNvbnRlbnRcblx0XHRcdFx0aiA9IHdyYXBbIDAgXTtcblx0XHRcdFx0d2hpbGUgKCBqLS0gKSB7XG5cdFx0XHRcdFx0dG1wID0gdG1wLmxhc3RDaGlsZDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seSwgUGhhbnRvbUpTIDEgb25seVxuXHRcdFx0XHQvLyBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG5cdFx0XHRcdGpRdWVyeS5tZXJnZSggbm9kZXMsIHRtcC5jaGlsZE5vZGVzICk7XG5cblx0XHRcdFx0Ly8gUmVtZW1iZXIgdGhlIHRvcC1sZXZlbCBjb250YWluZXJcblx0XHRcdFx0dG1wID0gZnJhZ21lbnQuZmlyc3RDaGlsZDtcblxuXHRcdFx0XHQvLyBFbnN1cmUgdGhlIGNyZWF0ZWQgbm9kZXMgYXJlIG9ycGhhbmVkICgjMTIzOTIpXG5cdFx0XHRcdHRtcC50ZXh0Q29udGVudCA9IFwiXCI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmVtb3ZlIHdyYXBwZXIgZnJvbSBmcmFnbWVudFxuXHRmcmFnbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG5cblx0aSA9IDA7XG5cdHdoaWxlICggKCBlbGVtID0gbm9kZXNbIGkrKyBdICkgKSB7XG5cblx0XHQvLyBTa2lwIGVsZW1lbnRzIGFscmVhZHkgaW4gdGhlIGNvbnRleHQgY29sbGVjdGlvbiAodHJhYy00MDg3KVxuXHRcdGlmICggc2VsZWN0aW9uICYmIGpRdWVyeS5pbkFycmF5KCBlbGVtLCBzZWxlY3Rpb24gKSA+IC0xICkge1xuXHRcdFx0aWYgKCBpZ25vcmVkICkge1xuXHRcdFx0XHRpZ25vcmVkLnB1c2goIGVsZW0gKTtcblx0XHRcdH1cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGF0dGFjaGVkID0gaXNBdHRhY2hlZCggZWxlbSApO1xuXG5cdFx0Ly8gQXBwZW5kIHRvIGZyYWdtZW50XG5cdFx0dG1wID0gZ2V0QWxsKCBmcmFnbWVudC5hcHBlbmRDaGlsZCggZWxlbSApLCBcInNjcmlwdFwiICk7XG5cblx0XHQvLyBQcmVzZXJ2ZSBzY3JpcHQgZXZhbHVhdGlvbiBoaXN0b3J5XG5cdFx0aWYgKCBhdHRhY2hlZCApIHtcblx0XHRcdHNldEdsb2JhbEV2YWwoIHRtcCApO1xuXHRcdH1cblxuXHRcdC8vIENhcHR1cmUgZXhlY3V0YWJsZXNcblx0XHRpZiAoIHNjcmlwdHMgKSB7XG5cdFx0XHRqID0gMDtcblx0XHRcdHdoaWxlICggKCBlbGVtID0gdG1wWyBqKysgXSApICkge1xuXHRcdFx0XHRpZiAoIHJzY3JpcHRUeXBlLnRlc3QoIGVsZW0udHlwZSB8fCBcIlwiICkgKSB7XG5cdFx0XHRcdFx0c2NyaXB0cy5wdXNoKCBlbGVtICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZnJhZ21lbnQ7XG59XG5cblxudmFyIHJ0eXBlbmFtZXNwYWNlID0gL14oW14uXSopKD86XFwuKC4rKXwpLztcblxuZnVuY3Rpb24gcmV0dXJuVHJ1ZSgpIHtcblx0cmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHJldHVybkZhbHNlKCkge1xuXHRyZXR1cm4gZmFsc2U7XG59XG5cbi8vIFN1cHBvcnQ6IElFIDw9OSAtIDExK1xuLy8gZm9jdXMoKSBhbmQgYmx1cigpIGFyZSBhc3luY2hyb25vdXMsIGV4Y2VwdCB3aGVuIHRoZXkgYXJlIG5vLW9wLlxuLy8gU28gZXhwZWN0IGZvY3VzIHRvIGJlIHN5bmNocm9ub3VzIHdoZW4gdGhlIGVsZW1lbnQgaXMgYWxyZWFkeSBhY3RpdmUsXG4vLyBhbmQgYmx1ciB0byBiZSBzeW5jaHJvbm91cyB3aGVuIHRoZSBlbGVtZW50IGlzIG5vdCBhbHJlYWR5IGFjdGl2ZS5cbi8vIChmb2N1cyBhbmQgYmx1ciBhcmUgYWx3YXlzIHN5bmNocm9ub3VzIGluIG90aGVyIHN1cHBvcnRlZCBicm93c2Vycyxcbi8vIHRoaXMganVzdCBkZWZpbmVzIHdoZW4gd2UgY2FuIGNvdW50IG9uIGl0KS5cbmZ1bmN0aW9uIGV4cGVjdFN5bmMoIGVsZW0sIHR5cGUgKSB7XG5cdHJldHVybiAoIGVsZW0gPT09IHNhZmVBY3RpdmVFbGVtZW50KCkgKSA9PT0gKCB0eXBlID09PSBcImZvY3VzXCIgKTtcbn1cblxuLy8gU3VwcG9ydDogSUUgPD05IG9ubHlcbi8vIEFjY2Vzc2luZyBkb2N1bWVudC5hY3RpdmVFbGVtZW50IGNhbiB0aHJvdyB1bmV4cGVjdGVkbHlcbi8vIGh0dHBzOi8vYnVncy5qcXVlcnkuY29tL3RpY2tldC8xMzM5M1xuZnVuY3Rpb24gc2FmZUFjdGl2ZUVsZW1lbnQoKSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cdH0gY2F0Y2ggKCBlcnIgKSB7IH1cbn1cblxuZnVuY3Rpb24gb24oIGVsZW0sIHR5cGVzLCBzZWxlY3RvciwgZGF0YSwgZm4sIG9uZSApIHtcblx0dmFyIG9yaWdGbiwgdHlwZTtcblxuXHQvLyBUeXBlcyBjYW4gYmUgYSBtYXAgb2YgdHlwZXMvaGFuZGxlcnNcblx0aWYgKCB0eXBlb2YgdHlwZXMgPT09IFwib2JqZWN0XCIgKSB7XG5cblx0XHQvLyAoIHR5cGVzLU9iamVjdCwgc2VsZWN0b3IsIGRhdGEgKVxuXHRcdGlmICggdHlwZW9mIHNlbGVjdG9yICE9PSBcInN0cmluZ1wiICkge1xuXG5cdFx0XHQvLyAoIHR5cGVzLU9iamVjdCwgZGF0YSApXG5cdFx0XHRkYXRhID0gZGF0YSB8fCBzZWxlY3Rvcjtcblx0XHRcdHNlbGVjdG9yID0gdW5kZWZpbmVkO1xuXHRcdH1cblx0XHRmb3IgKCB0eXBlIGluIHR5cGVzICkge1xuXHRcdFx0b24oIGVsZW0sIHR5cGUsIHNlbGVjdG9yLCBkYXRhLCB0eXBlc1sgdHlwZSBdLCBvbmUgKTtcblx0XHR9XG5cdFx0cmV0dXJuIGVsZW07XG5cdH1cblxuXHRpZiAoIGRhdGEgPT0gbnVsbCAmJiBmbiA9PSBudWxsICkge1xuXG5cdFx0Ly8gKCB0eXBlcywgZm4gKVxuXHRcdGZuID0gc2VsZWN0b3I7XG5cdFx0ZGF0YSA9IHNlbGVjdG9yID0gdW5kZWZpbmVkO1xuXHR9IGVsc2UgaWYgKCBmbiA9PSBudWxsICkge1xuXHRcdGlmICggdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiICkge1xuXG5cdFx0XHQvLyAoIHR5cGVzLCBzZWxlY3RvciwgZm4gKVxuXHRcdFx0Zm4gPSBkYXRhO1xuXHRcdFx0ZGF0YSA9IHVuZGVmaW5lZDtcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyAoIHR5cGVzLCBkYXRhLCBmbiApXG5cdFx0XHRmbiA9IGRhdGE7XG5cdFx0XHRkYXRhID0gc2VsZWN0b3I7XG5cdFx0XHRzZWxlY3RvciA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdH1cblx0aWYgKCBmbiA9PT0gZmFsc2UgKSB7XG5cdFx0Zm4gPSByZXR1cm5GYWxzZTtcblx0fSBlbHNlIGlmICggIWZuICkge1xuXHRcdHJldHVybiBlbGVtO1xuXHR9XG5cblx0aWYgKCBvbmUgPT09IDEgKSB7XG5cdFx0b3JpZ0ZuID0gZm47XG5cdFx0Zm4gPSBmdW5jdGlvbiggZXZlbnQgKSB7XG5cblx0XHRcdC8vIENhbiB1c2UgYW4gZW1wdHkgc2V0LCBzaW5jZSBldmVudCBjb250YWlucyB0aGUgaW5mb1xuXHRcdFx0alF1ZXJ5KCkub2ZmKCBldmVudCApO1xuXHRcdFx0cmV0dXJuIG9yaWdGbi5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG5cdFx0fTtcblxuXHRcdC8vIFVzZSBzYW1lIGd1aWQgc28gY2FsbGVyIGNhbiByZW1vdmUgdXNpbmcgb3JpZ0ZuXG5cdFx0Zm4uZ3VpZCA9IG9yaWdGbi5ndWlkIHx8ICggb3JpZ0ZuLmd1aWQgPSBqUXVlcnkuZ3VpZCsrICk7XG5cdH1cblx0cmV0dXJuIGVsZW0uZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0alF1ZXJ5LmV2ZW50LmFkZCggdGhpcywgdHlwZXMsIGZuLCBkYXRhLCBzZWxlY3RvciApO1xuXHR9ICk7XG59XG5cbi8qXG4gKiBIZWxwZXIgZnVuY3Rpb25zIGZvciBtYW5hZ2luZyBldmVudHMgLS0gbm90IHBhcnQgb2YgdGhlIHB1YmxpYyBpbnRlcmZhY2UuXG4gKiBQcm9wcyB0byBEZWFuIEVkd2FyZHMnIGFkZEV2ZW50IGxpYnJhcnkgZm9yIG1hbnkgb2YgdGhlIGlkZWFzLlxuICovXG5qUXVlcnkuZXZlbnQgPSB7XG5cblx0Z2xvYmFsOiB7fSxcblxuXHRhZGQ6IGZ1bmN0aW9uKCBlbGVtLCB0eXBlcywgaGFuZGxlciwgZGF0YSwgc2VsZWN0b3IgKSB7XG5cblx0XHR2YXIgaGFuZGxlT2JqSW4sIGV2ZW50SGFuZGxlLCB0bXAsXG5cdFx0XHRldmVudHMsIHQsIGhhbmRsZU9iaixcblx0XHRcdHNwZWNpYWwsIGhhbmRsZXJzLCB0eXBlLCBuYW1lc3BhY2VzLCBvcmlnVHlwZSxcblx0XHRcdGVsZW1EYXRhID0gZGF0YVByaXYuZ2V0KCBlbGVtICk7XG5cblx0XHQvLyBPbmx5IGF0dGFjaCBldmVudHMgdG8gb2JqZWN0cyB0aGF0IGFjY2VwdCBkYXRhXG5cdFx0aWYgKCAhYWNjZXB0RGF0YSggZWxlbSApICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIENhbGxlciBjYW4gcGFzcyBpbiBhbiBvYmplY3Qgb2YgY3VzdG9tIGRhdGEgaW4gbGlldSBvZiB0aGUgaGFuZGxlclxuXHRcdGlmICggaGFuZGxlci5oYW5kbGVyICkge1xuXHRcdFx0aGFuZGxlT2JqSW4gPSBoYW5kbGVyO1xuXHRcdFx0aGFuZGxlciA9IGhhbmRsZU9iakluLmhhbmRsZXI7XG5cdFx0XHRzZWxlY3RvciA9IGhhbmRsZU9iakluLnNlbGVjdG9yO1xuXHRcdH1cblxuXHRcdC8vIEVuc3VyZSB0aGF0IGludmFsaWQgc2VsZWN0b3JzIHRocm93IGV4Y2VwdGlvbnMgYXQgYXR0YWNoIHRpbWVcblx0XHQvLyBFdmFsdWF0ZSBhZ2FpbnN0IGRvY3VtZW50RWxlbWVudCBpbiBjYXNlIGVsZW0gaXMgYSBub24tZWxlbWVudCBub2RlIChlLmcuLCBkb2N1bWVudClcblx0XHRpZiAoIHNlbGVjdG9yICkge1xuXHRcdFx0alF1ZXJ5LmZpbmQubWF0Y2hlc1NlbGVjdG9yKCBkb2N1bWVudEVsZW1lbnQsIHNlbGVjdG9yICk7XG5cdFx0fVxuXG5cdFx0Ly8gTWFrZSBzdXJlIHRoYXQgdGhlIGhhbmRsZXIgaGFzIGEgdW5pcXVlIElELCB1c2VkIHRvIGZpbmQvcmVtb3ZlIGl0IGxhdGVyXG5cdFx0aWYgKCAhaGFuZGxlci5ndWlkICkge1xuXHRcdFx0aGFuZGxlci5ndWlkID0galF1ZXJ5Lmd1aWQrKztcblx0XHR9XG5cblx0XHQvLyBJbml0IHRoZSBlbGVtZW50J3MgZXZlbnQgc3RydWN0dXJlIGFuZCBtYWluIGhhbmRsZXIsIGlmIHRoaXMgaXMgdGhlIGZpcnN0XG5cdFx0aWYgKCAhKCBldmVudHMgPSBlbGVtRGF0YS5ldmVudHMgKSApIHtcblx0XHRcdGV2ZW50cyA9IGVsZW1EYXRhLmV2ZW50cyA9IE9iamVjdC5jcmVhdGUoIG51bGwgKTtcblx0XHR9XG5cdFx0aWYgKCAhKCBldmVudEhhbmRsZSA9IGVsZW1EYXRhLmhhbmRsZSApICkge1xuXHRcdFx0ZXZlbnRIYW5kbGUgPSBlbGVtRGF0YS5oYW5kbGUgPSBmdW5jdGlvbiggZSApIHtcblxuXHRcdFx0XHQvLyBEaXNjYXJkIHRoZSBzZWNvbmQgZXZlbnQgb2YgYSBqUXVlcnkuZXZlbnQudHJpZ2dlcigpIGFuZFxuXHRcdFx0XHQvLyB3aGVuIGFuIGV2ZW50IGlzIGNhbGxlZCBhZnRlciBhIHBhZ2UgaGFzIHVubG9hZGVkXG5cdFx0XHRcdHJldHVybiB0eXBlb2YgalF1ZXJ5ICE9PSBcInVuZGVmaW5lZFwiICYmIGpRdWVyeS5ldmVudC50cmlnZ2VyZWQgIT09IGUudHlwZSA/XG5cdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LmRpc3BhdGNoLmFwcGx5KCBlbGVtLCBhcmd1bWVudHMgKSA6IHVuZGVmaW5lZDtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Ly8gSGFuZGxlIG11bHRpcGxlIGV2ZW50cyBzZXBhcmF0ZWQgYnkgYSBzcGFjZVxuXHRcdHR5cGVzID0gKCB0eXBlcyB8fCBcIlwiICkubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbIFwiXCIgXTtcblx0XHR0ID0gdHlwZXMubGVuZ3RoO1xuXHRcdHdoaWxlICggdC0tICkge1xuXHRcdFx0dG1wID0gcnR5cGVuYW1lc3BhY2UuZXhlYyggdHlwZXNbIHQgXSApIHx8IFtdO1xuXHRcdFx0dHlwZSA9IG9yaWdUeXBlID0gdG1wWyAxIF07XG5cdFx0XHRuYW1lc3BhY2VzID0gKCB0bXBbIDIgXSB8fCBcIlwiICkuc3BsaXQoIFwiLlwiICkuc29ydCgpO1xuXG5cdFx0XHQvLyBUaGVyZSAqbXVzdCogYmUgYSB0eXBlLCBubyBhdHRhY2hpbmcgbmFtZXNwYWNlLW9ubHkgaGFuZGxlcnNcblx0XHRcdGlmICggIXR5cGUgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiBldmVudCBjaGFuZ2VzIGl0cyB0eXBlLCB1c2UgdGhlIHNwZWNpYWwgZXZlbnQgaGFuZGxlcnMgZm9yIHRoZSBjaGFuZ2VkIHR5cGVcblx0XHRcdHNwZWNpYWwgPSBqUXVlcnkuZXZlbnQuc3BlY2lhbFsgdHlwZSBdIHx8IHt9O1xuXG5cdFx0XHQvLyBJZiBzZWxlY3RvciBkZWZpbmVkLCBkZXRlcm1pbmUgc3BlY2lhbCBldmVudCBhcGkgdHlwZSwgb3RoZXJ3aXNlIGdpdmVuIHR5cGVcblx0XHRcdHR5cGUgPSAoIHNlbGVjdG9yID8gc3BlY2lhbC5kZWxlZ2F0ZVR5cGUgOiBzcGVjaWFsLmJpbmRUeXBlICkgfHwgdHlwZTtcblxuXHRcdFx0Ly8gVXBkYXRlIHNwZWNpYWwgYmFzZWQgb24gbmV3bHkgcmVzZXQgdHlwZVxuXHRcdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsWyB0eXBlIF0gfHwge307XG5cblx0XHRcdC8vIGhhbmRsZU9iaiBpcyBwYXNzZWQgdG8gYWxsIGV2ZW50IGhhbmRsZXJzXG5cdFx0XHRoYW5kbGVPYmogPSBqUXVlcnkuZXh0ZW5kKCB7XG5cdFx0XHRcdHR5cGU6IHR5cGUsXG5cdFx0XHRcdG9yaWdUeXBlOiBvcmlnVHlwZSxcblx0XHRcdFx0ZGF0YTogZGF0YSxcblx0XHRcdFx0aGFuZGxlcjogaGFuZGxlcixcblx0XHRcdFx0Z3VpZDogaGFuZGxlci5ndWlkLFxuXHRcdFx0XHRzZWxlY3Rvcjogc2VsZWN0b3IsXG5cdFx0XHRcdG5lZWRzQ29udGV4dDogc2VsZWN0b3IgJiYgalF1ZXJ5LmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LnRlc3QoIHNlbGVjdG9yICksXG5cdFx0XHRcdG5hbWVzcGFjZTogbmFtZXNwYWNlcy5qb2luKCBcIi5cIiApXG5cdFx0XHR9LCBoYW5kbGVPYmpJbiApO1xuXG5cdFx0XHQvLyBJbml0IHRoZSBldmVudCBoYW5kbGVyIHF1ZXVlIGlmIHdlJ3JlIHRoZSBmaXJzdFxuXHRcdFx0aWYgKCAhKCBoYW5kbGVycyA9IGV2ZW50c1sgdHlwZSBdICkgKSB7XG5cdFx0XHRcdGhhbmRsZXJzID0gZXZlbnRzWyB0eXBlIF0gPSBbXTtcblx0XHRcdFx0aGFuZGxlcnMuZGVsZWdhdGVDb3VudCA9IDA7XG5cblx0XHRcdFx0Ly8gT25seSB1c2UgYWRkRXZlbnRMaXN0ZW5lciBpZiB0aGUgc3BlY2lhbCBldmVudHMgaGFuZGxlciByZXR1cm5zIGZhbHNlXG5cdFx0XHRcdGlmICggIXNwZWNpYWwuc2V0dXAgfHxcblx0XHRcdFx0XHRzcGVjaWFsLnNldHVwLmNhbGwoIGVsZW0sIGRhdGEsIG5hbWVzcGFjZXMsIGV2ZW50SGFuZGxlICkgPT09IGZhbHNlICkge1xuXG5cdFx0XHRcdFx0aWYgKCBlbGVtLmFkZEV2ZW50TGlzdGVuZXIgKSB7XG5cdFx0XHRcdFx0XHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIoIHR5cGUsIGV2ZW50SGFuZGxlICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICggc3BlY2lhbC5hZGQgKSB7XG5cdFx0XHRcdHNwZWNpYWwuYWRkLmNhbGwoIGVsZW0sIGhhbmRsZU9iaiApO1xuXG5cdFx0XHRcdGlmICggIWhhbmRsZU9iai5oYW5kbGVyLmd1aWQgKSB7XG5cdFx0XHRcdFx0aGFuZGxlT2JqLmhhbmRsZXIuZ3VpZCA9IGhhbmRsZXIuZ3VpZDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgdG8gdGhlIGVsZW1lbnQncyBoYW5kbGVyIGxpc3QsIGRlbGVnYXRlcyBpbiBmcm9udFxuXHRcdFx0aWYgKCBzZWxlY3RvciApIHtcblx0XHRcdFx0aGFuZGxlcnMuc3BsaWNlKCBoYW5kbGVycy5kZWxlZ2F0ZUNvdW50KyssIDAsIGhhbmRsZU9iaiApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aGFuZGxlcnMucHVzaCggaGFuZGxlT2JqICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEtlZXAgdHJhY2sgb2Ygd2hpY2ggZXZlbnRzIGhhdmUgZXZlciBiZWVuIHVzZWQsIGZvciBldmVudCBvcHRpbWl6YXRpb25cblx0XHRcdGpRdWVyeS5ldmVudC5nbG9iYWxbIHR5cGUgXSA9IHRydWU7XG5cdFx0fVxuXG5cdH0sXG5cblx0Ly8gRGV0YWNoIGFuIGV2ZW50IG9yIHNldCBvZiBldmVudHMgZnJvbSBhbiBlbGVtZW50XG5cdHJlbW92ZTogZnVuY3Rpb24oIGVsZW0sIHR5cGVzLCBoYW5kbGVyLCBzZWxlY3RvciwgbWFwcGVkVHlwZXMgKSB7XG5cblx0XHR2YXIgaiwgb3JpZ0NvdW50LCB0bXAsXG5cdFx0XHRldmVudHMsIHQsIGhhbmRsZU9iaixcblx0XHRcdHNwZWNpYWwsIGhhbmRsZXJzLCB0eXBlLCBuYW1lc3BhY2VzLCBvcmlnVHlwZSxcblx0XHRcdGVsZW1EYXRhID0gZGF0YVByaXYuaGFzRGF0YSggZWxlbSApICYmIGRhdGFQcml2LmdldCggZWxlbSApO1xuXG5cdFx0aWYgKCAhZWxlbURhdGEgfHwgISggZXZlbnRzID0gZWxlbURhdGEuZXZlbnRzICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gT25jZSBmb3IgZWFjaCB0eXBlLm5hbWVzcGFjZSBpbiB0eXBlczsgdHlwZSBtYXkgYmUgb21pdHRlZFxuXHRcdHR5cGVzID0gKCB0eXBlcyB8fCBcIlwiICkubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbIFwiXCIgXTtcblx0XHR0ID0gdHlwZXMubGVuZ3RoO1xuXHRcdHdoaWxlICggdC0tICkge1xuXHRcdFx0dG1wID0gcnR5cGVuYW1lc3BhY2UuZXhlYyggdHlwZXNbIHQgXSApIHx8IFtdO1xuXHRcdFx0dHlwZSA9IG9yaWdUeXBlID0gdG1wWyAxIF07XG5cdFx0XHRuYW1lc3BhY2VzID0gKCB0bXBbIDIgXSB8fCBcIlwiICkuc3BsaXQoIFwiLlwiICkuc29ydCgpO1xuXG5cdFx0XHQvLyBVbmJpbmQgYWxsIGV2ZW50cyAob24gdGhpcyBuYW1lc3BhY2UsIGlmIHByb3ZpZGVkKSBmb3IgdGhlIGVsZW1lbnRcblx0XHRcdGlmICggIXR5cGUgKSB7XG5cdFx0XHRcdGZvciAoIHR5cGUgaW4gZXZlbnRzICkge1xuXHRcdFx0XHRcdGpRdWVyeS5ldmVudC5yZW1vdmUoIGVsZW0sIHR5cGUgKyB0eXBlc1sgdCBdLCBoYW5kbGVyLCBzZWxlY3RvciwgdHJ1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbIHR5cGUgXSB8fCB7fTtcblx0XHRcdHR5cGUgPSAoIHNlbGVjdG9yID8gc3BlY2lhbC5kZWxlZ2F0ZVR5cGUgOiBzcGVjaWFsLmJpbmRUeXBlICkgfHwgdHlwZTtcblx0XHRcdGhhbmRsZXJzID0gZXZlbnRzWyB0eXBlIF0gfHwgW107XG5cdFx0XHR0bXAgPSB0bXBbIDIgXSAmJlxuXHRcdFx0XHRuZXcgUmVnRXhwKCBcIihefFxcXFwuKVwiICsgbmFtZXNwYWNlcy5qb2luKCBcIlxcXFwuKD86LipcXFxcLnwpXCIgKSArIFwiKFxcXFwufCQpXCIgKTtcblxuXHRcdFx0Ly8gUmVtb3ZlIG1hdGNoaW5nIGV2ZW50c1xuXHRcdFx0b3JpZ0NvdW50ID0gaiA9IGhhbmRsZXJzLmxlbmd0aDtcblx0XHRcdHdoaWxlICggai0tICkge1xuXHRcdFx0XHRoYW5kbGVPYmogPSBoYW5kbGVyc1sgaiBdO1xuXG5cdFx0XHRcdGlmICggKCBtYXBwZWRUeXBlcyB8fCBvcmlnVHlwZSA9PT0gaGFuZGxlT2JqLm9yaWdUeXBlICkgJiZcblx0XHRcdFx0XHQoICFoYW5kbGVyIHx8IGhhbmRsZXIuZ3VpZCA9PT0gaGFuZGxlT2JqLmd1aWQgKSAmJlxuXHRcdFx0XHRcdCggIXRtcCB8fCB0bXAudGVzdCggaGFuZGxlT2JqLm5hbWVzcGFjZSApICkgJiZcblx0XHRcdFx0XHQoICFzZWxlY3RvciB8fCBzZWxlY3RvciA9PT0gaGFuZGxlT2JqLnNlbGVjdG9yIHx8XG5cdFx0XHRcdFx0XHRzZWxlY3RvciA9PT0gXCIqKlwiICYmIGhhbmRsZU9iai5zZWxlY3RvciApICkge1xuXHRcdFx0XHRcdGhhbmRsZXJzLnNwbGljZSggaiwgMSApO1xuXG5cdFx0XHRcdFx0aWYgKCBoYW5kbGVPYmouc2VsZWN0b3IgKSB7XG5cdFx0XHRcdFx0XHRoYW5kbGVycy5kZWxlZ2F0ZUNvdW50LS07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICggc3BlY2lhbC5yZW1vdmUgKSB7XG5cdFx0XHRcdFx0XHRzcGVjaWFsLnJlbW92ZS5jYWxsKCBlbGVtLCBoYW5kbGVPYmogKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gUmVtb3ZlIGdlbmVyaWMgZXZlbnQgaGFuZGxlciBpZiB3ZSByZW1vdmVkIHNvbWV0aGluZyBhbmQgbm8gbW9yZSBoYW5kbGVycyBleGlzdFxuXHRcdFx0Ly8gKGF2b2lkcyBwb3RlbnRpYWwgZm9yIGVuZGxlc3MgcmVjdXJzaW9uIGR1cmluZyByZW1vdmFsIG9mIHNwZWNpYWwgZXZlbnQgaGFuZGxlcnMpXG5cdFx0XHRpZiAoIG9yaWdDb3VudCAmJiAhaGFuZGxlcnMubGVuZ3RoICkge1xuXHRcdFx0XHRpZiAoICFzcGVjaWFsLnRlYXJkb3duIHx8XG5cdFx0XHRcdFx0c3BlY2lhbC50ZWFyZG93bi5jYWxsKCBlbGVtLCBuYW1lc3BhY2VzLCBlbGVtRGF0YS5oYW5kbGUgKSA9PT0gZmFsc2UgKSB7XG5cblx0XHRcdFx0XHRqUXVlcnkucmVtb3ZlRXZlbnQoIGVsZW0sIHR5cGUsIGVsZW1EYXRhLmhhbmRsZSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZGVsZXRlIGV2ZW50c1sgdHlwZSBdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFJlbW92ZSBkYXRhIGFuZCB0aGUgZXhwYW5kbyBpZiBpdCdzIG5vIGxvbmdlciB1c2VkXG5cdFx0aWYgKCBqUXVlcnkuaXNFbXB0eU9iamVjdCggZXZlbnRzICkgKSB7XG5cdFx0XHRkYXRhUHJpdi5yZW1vdmUoIGVsZW0sIFwiaGFuZGxlIGV2ZW50c1wiICk7XG5cdFx0fVxuXHR9LFxuXG5cdGRpc3BhdGNoOiBmdW5jdGlvbiggbmF0aXZlRXZlbnQgKSB7XG5cblx0XHR2YXIgaSwgaiwgcmV0LCBtYXRjaGVkLCBoYW5kbGVPYmosIGhhbmRsZXJRdWV1ZSxcblx0XHRcdGFyZ3MgPSBuZXcgQXJyYXkoIGFyZ3VtZW50cy5sZW5ndGggKSxcblxuXHRcdFx0Ly8gTWFrZSBhIHdyaXRhYmxlIGpRdWVyeS5FdmVudCBmcm9tIHRoZSBuYXRpdmUgZXZlbnQgb2JqZWN0XG5cdFx0XHRldmVudCA9IGpRdWVyeS5ldmVudC5maXgoIG5hdGl2ZUV2ZW50ICksXG5cblx0XHRcdGhhbmRsZXJzID0gKFxuXHRcdFx0XHRkYXRhUHJpdi5nZXQoIHRoaXMsIFwiZXZlbnRzXCIgKSB8fCBPYmplY3QuY3JlYXRlKCBudWxsIClcblx0XHRcdClbIGV2ZW50LnR5cGUgXSB8fCBbXSxcblx0XHRcdHNwZWNpYWwgPSBqUXVlcnkuZXZlbnQuc3BlY2lhbFsgZXZlbnQudHlwZSBdIHx8IHt9O1xuXG5cdFx0Ly8gVXNlIHRoZSBmaXgtZWQgalF1ZXJ5LkV2ZW50IHJhdGhlciB0aGFuIHRoZSAocmVhZC1vbmx5KSBuYXRpdmUgZXZlbnRcblx0XHRhcmdzWyAwIF0gPSBldmVudDtcblxuXHRcdGZvciAoIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrICkge1xuXHRcdFx0YXJnc1sgaSBdID0gYXJndW1lbnRzWyBpIF07XG5cdFx0fVxuXG5cdFx0ZXZlbnQuZGVsZWdhdGVUYXJnZXQgPSB0aGlzO1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcHJlRGlzcGF0Y2ggaG9vayBmb3IgdGhlIG1hcHBlZCB0eXBlLCBhbmQgbGV0IGl0IGJhaWwgaWYgZGVzaXJlZFxuXHRcdGlmICggc3BlY2lhbC5wcmVEaXNwYXRjaCAmJiBzcGVjaWFsLnByZURpc3BhdGNoLmNhbGwoIHRoaXMsIGV2ZW50ICkgPT09IGZhbHNlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIERldGVybWluZSBoYW5kbGVyc1xuXHRcdGhhbmRsZXJRdWV1ZSA9IGpRdWVyeS5ldmVudC5oYW5kbGVycy5jYWxsKCB0aGlzLCBldmVudCwgaGFuZGxlcnMgKTtcblxuXHRcdC8vIFJ1biBkZWxlZ2F0ZXMgZmlyc3Q7IHRoZXkgbWF5IHdhbnQgdG8gc3RvcCBwcm9wYWdhdGlvbiBiZW5lYXRoIHVzXG5cdFx0aSA9IDA7XG5cdFx0d2hpbGUgKCAoIG1hdGNoZWQgPSBoYW5kbGVyUXVldWVbIGkrKyBdICkgJiYgIWV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkgKSB7XG5cdFx0XHRldmVudC5jdXJyZW50VGFyZ2V0ID0gbWF0Y2hlZC5lbGVtO1xuXG5cdFx0XHRqID0gMDtcblx0XHRcdHdoaWxlICggKCBoYW5kbGVPYmogPSBtYXRjaGVkLmhhbmRsZXJzWyBqKysgXSApICYmXG5cdFx0XHRcdCFldmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpICkge1xuXG5cdFx0XHRcdC8vIElmIHRoZSBldmVudCBpcyBuYW1lc3BhY2VkLCB0aGVuIGVhY2ggaGFuZGxlciBpcyBvbmx5IGludm9rZWQgaWYgaXQgaXNcblx0XHRcdFx0Ly8gc3BlY2lhbGx5IHVuaXZlcnNhbCBvciBpdHMgbmFtZXNwYWNlcyBhcmUgYSBzdXBlcnNldCBvZiB0aGUgZXZlbnQncy5cblx0XHRcdFx0aWYgKCAhZXZlbnQucm5hbWVzcGFjZSB8fCBoYW5kbGVPYmoubmFtZXNwYWNlID09PSBmYWxzZSB8fFxuXHRcdFx0XHRcdGV2ZW50LnJuYW1lc3BhY2UudGVzdCggaGFuZGxlT2JqLm5hbWVzcGFjZSApICkge1xuXG5cdFx0XHRcdFx0ZXZlbnQuaGFuZGxlT2JqID0gaGFuZGxlT2JqO1xuXHRcdFx0XHRcdGV2ZW50LmRhdGEgPSBoYW5kbGVPYmouZGF0YTtcblxuXHRcdFx0XHRcdHJldCA9ICggKCBqUXVlcnkuZXZlbnQuc3BlY2lhbFsgaGFuZGxlT2JqLm9yaWdUeXBlIF0gfHwge30gKS5oYW5kbGUgfHxcblx0XHRcdFx0XHRcdGhhbmRsZU9iai5oYW5kbGVyICkuYXBwbHkoIG1hdGNoZWQuZWxlbSwgYXJncyApO1xuXG5cdFx0XHRcdFx0aWYgKCByZXQgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRcdGlmICggKCBldmVudC5yZXN1bHQgPSByZXQgKSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENhbGwgdGhlIHBvc3REaXNwYXRjaCBob29rIGZvciB0aGUgbWFwcGVkIHR5cGVcblx0XHRpZiAoIHNwZWNpYWwucG9zdERpc3BhdGNoICkge1xuXHRcdFx0c3BlY2lhbC5wb3N0RGlzcGF0Y2guY2FsbCggdGhpcywgZXZlbnQgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZlbnQucmVzdWx0O1xuXHR9LFxuXG5cdGhhbmRsZXJzOiBmdW5jdGlvbiggZXZlbnQsIGhhbmRsZXJzICkge1xuXHRcdHZhciBpLCBoYW5kbGVPYmosIHNlbCwgbWF0Y2hlZEhhbmRsZXJzLCBtYXRjaGVkU2VsZWN0b3JzLFxuXHRcdFx0aGFuZGxlclF1ZXVlID0gW10sXG5cdFx0XHRkZWxlZ2F0ZUNvdW50ID0gaGFuZGxlcnMuZGVsZWdhdGVDb3VudCxcblx0XHRcdGN1ciA9IGV2ZW50LnRhcmdldDtcblxuXHRcdC8vIEZpbmQgZGVsZWdhdGUgaGFuZGxlcnNcblx0XHRpZiAoIGRlbGVnYXRlQ291bnQgJiZcblxuXHRcdFx0Ly8gU3VwcG9ydDogSUUgPD05XG5cdFx0XHQvLyBCbGFjay1ob2xlIFNWRyA8dXNlPiBpbnN0YW5jZSB0cmVlcyAodHJhYy0xMzE4MClcblx0XHRcdGN1ci5ub2RlVHlwZSAmJlxuXG5cdFx0XHQvLyBTdXBwb3J0OiBGaXJlZm94IDw9NDJcblx0XHRcdC8vIFN1cHByZXNzIHNwZWMtdmlvbGF0aW5nIGNsaWNrcyBpbmRpY2F0aW5nIGEgbm9uLXByaW1hcnkgcG9pbnRlciBidXR0b24gKHRyYWMtMzg2MSlcblx0XHRcdC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMy1FdmVudHMvI2V2ZW50LXR5cGUtY2xpY2tcblx0XHRcdC8vIFN1cHBvcnQ6IElFIDExIG9ubHlcblx0XHRcdC8vIC4uLmJ1dCBub3QgYXJyb3cga2V5IFwiY2xpY2tzXCIgb2YgcmFkaW8gaW5wdXRzLCB3aGljaCBjYW4gaGF2ZSBgYnV0dG9uYCAtMSAoZ2gtMjM0Mylcblx0XHRcdCEoIGV2ZW50LnR5cGUgPT09IFwiY2xpY2tcIiAmJiBldmVudC5idXR0b24gPj0gMSApICkge1xuXG5cdFx0XHRmb3IgKCA7IGN1ciAhPT0gdGhpczsgY3VyID0gY3VyLnBhcmVudE5vZGUgfHwgdGhpcyApIHtcblxuXHRcdFx0XHQvLyBEb24ndCBjaGVjayBub24tZWxlbWVudHMgKCMxMzIwOClcblx0XHRcdFx0Ly8gRG9uJ3QgcHJvY2VzcyBjbGlja3Mgb24gZGlzYWJsZWQgZWxlbWVudHMgKCM2OTExLCAjODE2NSwgIzExMzgyLCAjMTE3NjQpXG5cdFx0XHRcdGlmICggY3VyLm5vZGVUeXBlID09PSAxICYmICEoIGV2ZW50LnR5cGUgPT09IFwiY2xpY2tcIiAmJiBjdXIuZGlzYWJsZWQgPT09IHRydWUgKSApIHtcblx0XHRcdFx0XHRtYXRjaGVkSGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRtYXRjaGVkU2VsZWN0b3JzID0ge307XG5cdFx0XHRcdFx0Zm9yICggaSA9IDA7IGkgPCBkZWxlZ2F0ZUNvdW50OyBpKysgKSB7XG5cdFx0XHRcdFx0XHRoYW5kbGVPYmogPSBoYW5kbGVyc1sgaSBdO1xuXG5cdFx0XHRcdFx0XHQvLyBEb24ndCBjb25mbGljdCB3aXRoIE9iamVjdC5wcm90b3R5cGUgcHJvcGVydGllcyAoIzEzMjAzKVxuXHRcdFx0XHRcdFx0c2VsID0gaGFuZGxlT2JqLnNlbGVjdG9yICsgXCIgXCI7XG5cblx0XHRcdFx0XHRcdGlmICggbWF0Y2hlZFNlbGVjdG9yc1sgc2VsIF0gPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRcdFx0bWF0Y2hlZFNlbGVjdG9yc1sgc2VsIF0gPSBoYW5kbGVPYmoubmVlZHNDb250ZXh0ID9cblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkoIHNlbCwgdGhpcyApLmluZGV4KCBjdXIgKSA+IC0xIDpcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkuZmluZCggc2VsLCB0aGlzLCBudWxsLCBbIGN1ciBdICkubGVuZ3RoO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKCBtYXRjaGVkU2VsZWN0b3JzWyBzZWwgXSApIHtcblx0XHRcdFx0XHRcdFx0bWF0Y2hlZEhhbmRsZXJzLnB1c2goIGhhbmRsZU9iaiApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIG1hdGNoZWRIYW5kbGVycy5sZW5ndGggKSB7XG5cdFx0XHRcdFx0XHRoYW5kbGVyUXVldWUucHVzaCggeyBlbGVtOiBjdXIsIGhhbmRsZXJzOiBtYXRjaGVkSGFuZGxlcnMgfSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEFkZCB0aGUgcmVtYWluaW5nIChkaXJlY3RseS1ib3VuZCkgaGFuZGxlcnNcblx0XHRjdXIgPSB0aGlzO1xuXHRcdGlmICggZGVsZWdhdGVDb3VudCA8IGhhbmRsZXJzLmxlbmd0aCApIHtcblx0XHRcdGhhbmRsZXJRdWV1ZS5wdXNoKCB7IGVsZW06IGN1ciwgaGFuZGxlcnM6IGhhbmRsZXJzLnNsaWNlKCBkZWxlZ2F0ZUNvdW50ICkgfSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBoYW5kbGVyUXVldWU7XG5cdH0sXG5cblx0YWRkUHJvcDogZnVuY3Rpb24oIG5hbWUsIGhvb2sgKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCBqUXVlcnkuRXZlbnQucHJvdG90eXBlLCBuYW1lLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXG5cdFx0XHRnZXQ6IGlzRnVuY3Rpb24oIGhvb2sgKSA/XG5cdFx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICggdGhpcy5vcmlnaW5hbEV2ZW50ICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGhvb2soIHRoaXMub3JpZ2luYWxFdmVudCApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSA6XG5cdFx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICggdGhpcy5vcmlnaW5hbEV2ZW50ICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMub3JpZ2luYWxFdmVudFsgbmFtZSBdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggdGhpcywgbmFtZSwge1xuXHRcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdHdyaXRhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdHZhbHVlOiB2YWx1ZVxuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdGZpeDogZnVuY3Rpb24oIG9yaWdpbmFsRXZlbnQgKSB7XG5cdFx0cmV0dXJuIG9yaWdpbmFsRXZlbnRbIGpRdWVyeS5leHBhbmRvIF0gP1xuXHRcdFx0b3JpZ2luYWxFdmVudCA6XG5cdFx0XHRuZXcgalF1ZXJ5LkV2ZW50KCBvcmlnaW5hbEV2ZW50ICk7XG5cdH0sXG5cblx0c3BlY2lhbDoge1xuXHRcdGxvYWQ6IHtcblxuXHRcdFx0Ly8gUHJldmVudCB0cmlnZ2VyZWQgaW1hZ2UubG9hZCBldmVudHMgZnJvbSBidWJibGluZyB0byB3aW5kb3cubG9hZFxuXHRcdFx0bm9CdWJibGU6IHRydWVcblx0XHR9LFxuXHRcdGNsaWNrOiB7XG5cblx0XHRcdC8vIFV0aWxpemUgbmF0aXZlIGV2ZW50IHRvIGVuc3VyZSBjb3JyZWN0IHN0YXRlIGZvciBjaGVja2FibGUgaW5wdXRzXG5cdFx0XHRzZXR1cDogZnVuY3Rpb24oIGRhdGEgKSB7XG5cblx0XHRcdFx0Ly8gRm9yIG11dHVhbCBjb21wcmVzc2liaWxpdHkgd2l0aCBfZGVmYXVsdCwgcmVwbGFjZSBgdGhpc2AgYWNjZXNzIHdpdGggYSBsb2NhbCB2YXIuXG5cdFx0XHRcdC8vIGB8fCBkYXRhYCBpcyBkZWFkIGNvZGUgbWVhbnQgb25seSB0byBwcmVzZXJ2ZSB0aGUgdmFyaWFibGUgdGhyb3VnaCBtaW5pZmljYXRpb24uXG5cdFx0XHRcdHZhciBlbCA9IHRoaXMgfHwgZGF0YTtcblxuXHRcdFx0XHQvLyBDbGFpbSB0aGUgZmlyc3QgaGFuZGxlclxuXHRcdFx0XHRpZiAoIHJjaGVja2FibGVUeXBlLnRlc3QoIGVsLnR5cGUgKSAmJlxuXHRcdFx0XHRcdGVsLmNsaWNrICYmIG5vZGVOYW1lKCBlbCwgXCJpbnB1dFwiICkgKSB7XG5cblx0XHRcdFx0XHQvLyBkYXRhUHJpdi5zZXQoIGVsLCBcImNsaWNrXCIsIC4uLiApXG5cdFx0XHRcdFx0bGV2ZXJhZ2VOYXRpdmUoIGVsLCBcImNsaWNrXCIsIHJldHVyblRydWUgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFJldHVybiBmYWxzZSB0byBhbGxvdyBub3JtYWwgcHJvY2Vzc2luZyBpbiB0aGUgY2FsbGVyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH0sXG5cdFx0XHR0cmlnZ2VyOiBmdW5jdGlvbiggZGF0YSApIHtcblxuXHRcdFx0XHQvLyBGb3IgbXV0dWFsIGNvbXByZXNzaWJpbGl0eSB3aXRoIF9kZWZhdWx0LCByZXBsYWNlIGB0aGlzYCBhY2Nlc3Mgd2l0aCBhIGxvY2FsIHZhci5cblx0XHRcdFx0Ly8gYHx8IGRhdGFgIGlzIGRlYWQgY29kZSBtZWFudCBvbmx5IHRvIHByZXNlcnZlIHRoZSB2YXJpYWJsZSB0aHJvdWdoIG1pbmlmaWNhdGlvbi5cblx0XHRcdFx0dmFyIGVsID0gdGhpcyB8fCBkYXRhO1xuXG5cdFx0XHRcdC8vIEZvcmNlIHNldHVwIGJlZm9yZSB0cmlnZ2VyaW5nIGEgY2xpY2tcblx0XHRcdFx0aWYgKCByY2hlY2thYmxlVHlwZS50ZXN0KCBlbC50eXBlICkgJiZcblx0XHRcdFx0XHRlbC5jbGljayAmJiBub2RlTmFtZSggZWwsIFwiaW5wdXRcIiApICkge1xuXG5cdFx0XHRcdFx0bGV2ZXJhZ2VOYXRpdmUoIGVsLCBcImNsaWNrXCIgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFJldHVybiBub24tZmFsc2UgdG8gYWxsb3cgbm9ybWFsIGV2ZW50LXBhdGggcHJvcGFnYXRpb25cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBGb3IgY3Jvc3MtYnJvd3NlciBjb25zaXN0ZW5jeSwgc3VwcHJlc3MgbmF0aXZlIC5jbGljaygpIG9uIGxpbmtzXG5cdFx0XHQvLyBBbHNvIHByZXZlbnQgaXQgaWYgd2UncmUgY3VycmVudGx5IGluc2lkZSBhIGxldmVyYWdlZCBuYXRpdmUtZXZlbnQgc3RhY2tcblx0XHRcdF9kZWZhdWx0OiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHRcdHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cdFx0XHRcdHJldHVybiByY2hlY2thYmxlVHlwZS50ZXN0KCB0YXJnZXQudHlwZSApICYmXG5cdFx0XHRcdFx0dGFyZ2V0LmNsaWNrICYmIG5vZGVOYW1lKCB0YXJnZXQsIFwiaW5wdXRcIiApICYmXG5cdFx0XHRcdFx0ZGF0YVByaXYuZ2V0KCB0YXJnZXQsIFwiY2xpY2tcIiApIHx8XG5cdFx0XHRcdFx0bm9kZU5hbWUoIHRhcmdldCwgXCJhXCIgKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0YmVmb3JldW5sb2FkOiB7XG5cdFx0XHRwb3N0RGlzcGF0Y2g6IGZ1bmN0aW9uKCBldmVudCApIHtcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBGaXJlZm94IDIwK1xuXHRcdFx0XHQvLyBGaXJlZm94IGRvZXNuJ3QgYWxlcnQgaWYgdGhlIHJldHVyblZhbHVlIGZpZWxkIGlzIG5vdCBzZXQuXG5cdFx0XHRcdGlmICggZXZlbnQucmVzdWx0ICE9PSB1bmRlZmluZWQgJiYgZXZlbnQub3JpZ2luYWxFdmVudCApIHtcblx0XHRcdFx0XHRldmVudC5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlID0gZXZlbnQucmVzdWx0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG4vLyBFbnN1cmUgdGhlIHByZXNlbmNlIG9mIGFuIGV2ZW50IGxpc3RlbmVyIHRoYXQgaGFuZGxlcyBtYW51YWxseS10cmlnZ2VyZWRcbi8vIHN5bnRoZXRpYyBldmVudHMgYnkgaW50ZXJydXB0aW5nIHByb2dyZXNzIHVudGlsIHJlaW52b2tlZCBpbiByZXNwb25zZSB0b1xuLy8gKm5hdGl2ZSogZXZlbnRzIHRoYXQgaXQgZmlyZXMgZGlyZWN0bHksIGVuc3VyaW5nIHRoYXQgc3RhdGUgY2hhbmdlcyBoYXZlXG4vLyBhbHJlYWR5IG9jY3VycmVkIGJlZm9yZSBvdGhlciBsaXN0ZW5lcnMgYXJlIGludm9rZWQuXG5mdW5jdGlvbiBsZXZlcmFnZU5hdGl2ZSggZWwsIHR5cGUsIGV4cGVjdFN5bmMgKSB7XG5cblx0Ly8gTWlzc2luZyBleHBlY3RTeW5jIGluZGljYXRlcyBhIHRyaWdnZXIgY2FsbCwgd2hpY2ggbXVzdCBmb3JjZSBzZXR1cCB0aHJvdWdoIGpRdWVyeS5ldmVudC5hZGRcblx0aWYgKCAhZXhwZWN0U3luYyApIHtcblx0XHRpZiAoIGRhdGFQcml2LmdldCggZWwsIHR5cGUgKSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0alF1ZXJ5LmV2ZW50LmFkZCggZWwsIHR5cGUsIHJldHVyblRydWUgKTtcblx0XHR9XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gUmVnaXN0ZXIgdGhlIGNvbnRyb2xsZXIgYXMgYSBzcGVjaWFsIHVuaXZlcnNhbCBoYW5kbGVyIGZvciBhbGwgZXZlbnQgbmFtZXNwYWNlc1xuXHRkYXRhUHJpdi5zZXQoIGVsLCB0eXBlLCBmYWxzZSApO1xuXHRqUXVlcnkuZXZlbnQuYWRkKCBlbCwgdHlwZSwge1xuXHRcdG5hbWVzcGFjZTogZmFsc2UsXG5cdFx0aGFuZGxlcjogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0dmFyIG5vdEFzeW5jLCByZXN1bHQsXG5cdFx0XHRcdHNhdmVkID0gZGF0YVByaXYuZ2V0KCB0aGlzLCB0eXBlICk7XG5cblx0XHRcdGlmICggKCBldmVudC5pc1RyaWdnZXIgJiAxICkgJiYgdGhpc1sgdHlwZSBdICkge1xuXG5cdFx0XHRcdC8vIEludGVycnVwdCBwcm9jZXNzaW5nIG9mIHRoZSBvdXRlciBzeW50aGV0aWMgLnRyaWdnZXIoKWVkIGV2ZW50XG5cdFx0XHRcdC8vIFNhdmVkIGRhdGEgc2hvdWxkIGJlIGZhbHNlIGluIHN1Y2ggY2FzZXMsIGJ1dCBtaWdodCBiZSBhIGxlZnRvdmVyIGNhcHR1cmUgb2JqZWN0XG5cdFx0XHRcdC8vIGZyb20gYW4gYXN5bmMgbmF0aXZlIGhhbmRsZXIgKGdoLTQzNTApXG5cdFx0XHRcdGlmICggIXNhdmVkLmxlbmd0aCApIHtcblxuXHRcdFx0XHRcdC8vIFN0b3JlIGFyZ3VtZW50cyBmb3IgdXNlIHdoZW4gaGFuZGxpbmcgdGhlIGlubmVyIG5hdGl2ZSBldmVudFxuXHRcdFx0XHRcdC8vIFRoZXJlIHdpbGwgYWx3YXlzIGJlIGF0IGxlYXN0IG9uZSBhcmd1bWVudCAoYW4gZXZlbnQgb2JqZWN0KSwgc28gdGhpcyBhcnJheVxuXHRcdFx0XHRcdC8vIHdpbGwgbm90IGJlIGNvbmZ1c2VkIHdpdGggYSBsZWZ0b3ZlciBjYXB0dXJlIG9iamVjdC5cblx0XHRcdFx0XHRzYXZlZCA9IHNsaWNlLmNhbGwoIGFyZ3VtZW50cyApO1xuXHRcdFx0XHRcdGRhdGFQcml2LnNldCggdGhpcywgdHlwZSwgc2F2ZWQgKTtcblxuXHRcdFx0XHRcdC8vIFRyaWdnZXIgdGhlIG5hdGl2ZSBldmVudCBhbmQgY2FwdHVyZSBpdHMgcmVzdWx0XG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD05IC0gMTErXG5cdFx0XHRcdFx0Ly8gZm9jdXMoKSBhbmQgYmx1cigpIGFyZSBhc3luY2hyb25vdXNcblx0XHRcdFx0XHRub3RBc3luYyA9IGV4cGVjdFN5bmMoIHRoaXMsIHR5cGUgKTtcblx0XHRcdFx0XHR0aGlzWyB0eXBlIF0oKTtcblx0XHRcdFx0XHRyZXN1bHQgPSBkYXRhUHJpdi5nZXQoIHRoaXMsIHR5cGUgKTtcblx0XHRcdFx0XHRpZiAoIHNhdmVkICE9PSByZXN1bHQgfHwgbm90QXN5bmMgKSB7XG5cdFx0XHRcdFx0XHRkYXRhUHJpdi5zZXQoIHRoaXMsIHR5cGUsIGZhbHNlICk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJlc3VsdCA9IHt9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIHNhdmVkICE9PSByZXN1bHQgKSB7XG5cblx0XHRcdFx0XHRcdC8vIENhbmNlbCB0aGUgb3V0ZXIgc3ludGhldGljIGV2ZW50XG5cdFx0XHRcdFx0XHRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IENocm9tZSA4Nitcblx0XHRcdFx0XHRcdC8vIEluIENocm9tZSwgaWYgYW4gZWxlbWVudCBoYXZpbmcgYSBmb2N1c291dCBoYW5kbGVyIGlzIGJsdXJyZWQgYnlcblx0XHRcdFx0XHRcdC8vIGNsaWNraW5nIG91dHNpZGUgb2YgaXQsIGl0IGludm9rZXMgdGhlIGhhbmRsZXIgc3luY2hyb25vdXNseS4gSWZcblx0XHRcdFx0XHRcdC8vIHRoYXQgaGFuZGxlciBjYWxscyBgLnJlbW92ZSgpYCBvbiB0aGUgZWxlbWVudCwgdGhlIGRhdGEgaXMgY2xlYXJlZCxcblx0XHRcdFx0XHRcdC8vIGxlYXZpbmcgYHJlc3VsdGAgdW5kZWZpbmVkLiBXZSBuZWVkIHRvIGd1YXJkIGFnYWluc3QgdGhpcy5cblx0XHRcdFx0XHRcdHJldHVybiByZXN1bHQgJiYgcmVzdWx0LnZhbHVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBJZiB0aGlzIGlzIGFuIGlubmVyIHN5bnRoZXRpYyBldmVudCBmb3IgYW4gZXZlbnQgd2l0aCBhIGJ1YmJsaW5nIHN1cnJvZ2F0ZVxuXHRcdFx0XHQvLyAoZm9jdXMgb3IgYmx1ciksIGFzc3VtZSB0aGF0IHRoZSBzdXJyb2dhdGUgYWxyZWFkeSBwcm9wYWdhdGVkIGZyb20gdHJpZ2dlcmluZyB0aGVcblx0XHRcdFx0Ly8gbmF0aXZlIGV2ZW50IGFuZCBwcmV2ZW50IHRoYXQgZnJvbSBoYXBwZW5pbmcgYWdhaW4gaGVyZS5cblx0XHRcdFx0Ly8gVGhpcyB0ZWNobmljYWxseSBnZXRzIHRoZSBvcmRlcmluZyB3cm9uZyB3LnIudC4gdG8gYC50cmlnZ2VyKClgIChpbiB3aGljaCB0aGVcblx0XHRcdFx0Ly8gYnViYmxpbmcgc3Vycm9nYXRlIHByb3BhZ2F0ZXMgKmFmdGVyKiB0aGUgbm9uLWJ1YmJsaW5nIGJhc2UpLCBidXQgdGhhdCBzZWVtc1xuXHRcdFx0XHQvLyBsZXNzIGJhZCB0aGFuIGR1cGxpY2F0aW9uLlxuXHRcdFx0XHR9IGVsc2UgaWYgKCAoIGpRdWVyeS5ldmVudC5zcGVjaWFsWyB0eXBlIF0gfHwge30gKS5kZWxlZ2F0ZVR5cGUgKSB7XG5cdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhpcyBpcyBhIG5hdGl2ZSBldmVudCB0cmlnZ2VyZWQgYWJvdmUsIGV2ZXJ5dGhpbmcgaXMgbm93IGluIG9yZGVyXG5cdFx0XHQvLyBGaXJlIGFuIGlubmVyIHN5bnRoZXRpYyBldmVudCB3aXRoIHRoZSBvcmlnaW5hbCBhcmd1bWVudHNcblx0XHRcdH0gZWxzZSBpZiAoIHNhdmVkLmxlbmd0aCApIHtcblxuXHRcdFx0XHQvLyAuLi5hbmQgY2FwdHVyZSB0aGUgcmVzdWx0XG5cdFx0XHRcdGRhdGFQcml2LnNldCggdGhpcywgdHlwZSwge1xuXHRcdFx0XHRcdHZhbHVlOiBqUXVlcnkuZXZlbnQudHJpZ2dlcihcblxuXHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD05IC0gMTErXG5cdFx0XHRcdFx0XHQvLyBFeHRlbmQgd2l0aCB0aGUgcHJvdG90eXBlIHRvIHJlc2V0IHRoZSBhYm92ZSBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxuXHRcdFx0XHRcdFx0alF1ZXJ5LmV4dGVuZCggc2F2ZWRbIDAgXSwgalF1ZXJ5LkV2ZW50LnByb3RvdHlwZSApLFxuXHRcdFx0XHRcdFx0c2F2ZWQuc2xpY2UoIDEgKSxcblx0XHRcdFx0XHRcdHRoaXNcblx0XHRcdFx0XHQpXG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0XHQvLyBBYm9ydCBoYW5kbGluZyBvZiB0aGUgbmF0aXZlIGV2ZW50XG5cdFx0XHRcdGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSApO1xufVxuXG5qUXVlcnkucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiggZWxlbSwgdHlwZSwgaGFuZGxlICkge1xuXG5cdC8vIFRoaXMgXCJpZlwiIGlzIG5lZWRlZCBmb3IgcGxhaW4gb2JqZWN0c1xuXHRpZiAoIGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lciApIHtcblx0XHRlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIHR5cGUsIGhhbmRsZSApO1xuXHR9XG59O1xuXG5qUXVlcnkuRXZlbnQgPSBmdW5jdGlvbiggc3JjLCBwcm9wcyApIHtcblxuXHQvLyBBbGxvdyBpbnN0YW50aWF0aW9uIHdpdGhvdXQgdGhlICduZXcnIGtleXdvcmRcblx0aWYgKCAhKCB0aGlzIGluc3RhbmNlb2YgalF1ZXJ5LkV2ZW50ICkgKSB7XG5cdFx0cmV0dXJuIG5ldyBqUXVlcnkuRXZlbnQoIHNyYywgcHJvcHMgKTtcblx0fVxuXG5cdC8vIEV2ZW50IG9iamVjdFxuXHRpZiAoIHNyYyAmJiBzcmMudHlwZSApIHtcblx0XHR0aGlzLm9yaWdpbmFsRXZlbnQgPSBzcmM7XG5cdFx0dGhpcy50eXBlID0gc3JjLnR5cGU7XG5cblx0XHQvLyBFdmVudHMgYnViYmxpbmcgdXAgdGhlIGRvY3VtZW50IG1heSBoYXZlIGJlZW4gbWFya2VkIGFzIHByZXZlbnRlZFxuXHRcdC8vIGJ5IGEgaGFuZGxlciBsb3dlciBkb3duIHRoZSB0cmVlOyByZWZsZWN0IHRoZSBjb3JyZWN0IHZhbHVlLlxuXHRcdHRoaXMuaXNEZWZhdWx0UHJldmVudGVkID0gc3JjLmRlZmF1bHRQcmV2ZW50ZWQgfHxcblx0XHRcdFx0c3JjLmRlZmF1bHRQcmV2ZW50ZWQgPT09IHVuZGVmaW5lZCAmJlxuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD0yLjMgb25seVxuXHRcdFx0XHRzcmMucmV0dXJuVmFsdWUgPT09IGZhbHNlID9cblx0XHRcdHJldHVyblRydWUgOlxuXHRcdFx0cmV0dXJuRmFsc2U7XG5cblx0XHQvLyBDcmVhdGUgdGFyZ2V0IHByb3BlcnRpZXNcblx0XHQvLyBTdXBwb3J0OiBTYWZhcmkgPD02IC0gNyBvbmx5XG5cdFx0Ly8gVGFyZ2V0IHNob3VsZCBub3QgYmUgYSB0ZXh0IG5vZGUgKCM1MDQsICMxMzE0Mylcblx0XHR0aGlzLnRhcmdldCA9ICggc3JjLnRhcmdldCAmJiBzcmMudGFyZ2V0Lm5vZGVUeXBlID09PSAzICkgP1xuXHRcdFx0c3JjLnRhcmdldC5wYXJlbnROb2RlIDpcblx0XHRcdHNyYy50YXJnZXQ7XG5cblx0XHR0aGlzLmN1cnJlbnRUYXJnZXQgPSBzcmMuY3VycmVudFRhcmdldDtcblx0XHR0aGlzLnJlbGF0ZWRUYXJnZXQgPSBzcmMucmVsYXRlZFRhcmdldDtcblxuXHQvLyBFdmVudCB0eXBlXG5cdH0gZWxzZSB7XG5cdFx0dGhpcy50eXBlID0gc3JjO1xuXHR9XG5cblx0Ly8gUHV0IGV4cGxpY2l0bHkgcHJvdmlkZWQgcHJvcGVydGllcyBvbnRvIHRoZSBldmVudCBvYmplY3Rcblx0aWYgKCBwcm9wcyApIHtcblx0XHRqUXVlcnkuZXh0ZW5kKCB0aGlzLCBwcm9wcyApO1xuXHR9XG5cblx0Ly8gQ3JlYXRlIGEgdGltZXN0YW1wIGlmIGluY29taW5nIGV2ZW50IGRvZXNuJ3QgaGF2ZSBvbmVcblx0dGhpcy50aW1lU3RhbXAgPSBzcmMgJiYgc3JjLnRpbWVTdGFtcCB8fCBEYXRlLm5vdygpO1xuXG5cdC8vIE1hcmsgaXQgYXMgZml4ZWRcblx0dGhpc1sgalF1ZXJ5LmV4cGFuZG8gXSA9IHRydWU7XG59O1xuXG4vLyBqUXVlcnkuRXZlbnQgaXMgYmFzZWQgb24gRE9NMyBFdmVudHMgYXMgc3BlY2lmaWVkIGJ5IHRoZSBFQ01BU2NyaXB0IExhbmd1YWdlIEJpbmRpbmdcbi8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi8yMDAzL1dELURPTS1MZXZlbC0zLUV2ZW50cy0yMDAzMDMzMS9lY21hLXNjcmlwdC1iaW5kaW5nLmh0bWxcbmpRdWVyeS5FdmVudC5wcm90b3R5cGUgPSB7XG5cdGNvbnN0cnVjdG9yOiBqUXVlcnkuRXZlbnQsXG5cdGlzRGVmYXVsdFByZXZlbnRlZDogcmV0dXJuRmFsc2UsXG5cdGlzUHJvcGFnYXRpb25TdG9wcGVkOiByZXR1cm5GYWxzZSxcblx0aXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6IHJldHVybkZhbHNlLFxuXHRpc1NpbXVsYXRlZDogZmFsc2UsXG5cblx0cHJldmVudERlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gdGhpcy5vcmlnaW5hbEV2ZW50O1xuXG5cdFx0dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQgPSByZXR1cm5UcnVlO1xuXG5cdFx0aWYgKCBlICYmICF0aGlzLmlzU2ltdWxhdGVkICkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblx0fSxcblx0c3RvcFByb3BhZ2F0aW9uOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IHRoaXMub3JpZ2luYWxFdmVudDtcblxuXHRcdHRoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQgPSByZXR1cm5UcnVlO1xuXG5cdFx0aWYgKCBlICYmICF0aGlzLmlzU2ltdWxhdGVkICkge1xuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9XG5cdH0sXG5cdHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSB0aGlzLm9yaWdpbmFsRXZlbnQ7XG5cblx0XHR0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkID0gcmV0dXJuVHJ1ZTtcblxuXHRcdGlmICggZSAmJiAhdGhpcy5pc1NpbXVsYXRlZCApIHtcblx0XHRcdGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zdG9wUHJvcGFnYXRpb24oKTtcblx0fVxufTtcblxuLy8gSW5jbHVkZXMgYWxsIGNvbW1vbiBldmVudCBwcm9wcyBpbmNsdWRpbmcgS2V5RXZlbnQgYW5kIE1vdXNlRXZlbnQgc3BlY2lmaWMgcHJvcHNcbmpRdWVyeS5lYWNoKCB7XG5cdGFsdEtleTogdHJ1ZSxcblx0YnViYmxlczogdHJ1ZSxcblx0Y2FuY2VsYWJsZTogdHJ1ZSxcblx0Y2hhbmdlZFRvdWNoZXM6IHRydWUsXG5cdGN0cmxLZXk6IHRydWUsXG5cdGRldGFpbDogdHJ1ZSxcblx0ZXZlbnRQaGFzZTogdHJ1ZSxcblx0bWV0YUtleTogdHJ1ZSxcblx0cGFnZVg6IHRydWUsXG5cdHBhZ2VZOiB0cnVlLFxuXHRzaGlmdEtleTogdHJ1ZSxcblx0dmlldzogdHJ1ZSxcblx0XCJjaGFyXCI6IHRydWUsXG5cdGNvZGU6IHRydWUsXG5cdGNoYXJDb2RlOiB0cnVlLFxuXHRrZXk6IHRydWUsXG5cdGtleUNvZGU6IHRydWUsXG5cdGJ1dHRvbjogdHJ1ZSxcblx0YnV0dG9uczogdHJ1ZSxcblx0Y2xpZW50WDogdHJ1ZSxcblx0Y2xpZW50WTogdHJ1ZSxcblx0b2Zmc2V0WDogdHJ1ZSxcblx0b2Zmc2V0WTogdHJ1ZSxcblx0cG9pbnRlcklkOiB0cnVlLFxuXHRwb2ludGVyVHlwZTogdHJ1ZSxcblx0c2NyZWVuWDogdHJ1ZSxcblx0c2NyZWVuWTogdHJ1ZSxcblx0dGFyZ2V0VG91Y2hlczogdHJ1ZSxcblx0dG9FbGVtZW50OiB0cnVlLFxuXHR0b3VjaGVzOiB0cnVlLFxuXHR3aGljaDogdHJ1ZVxufSwgalF1ZXJ5LmV2ZW50LmFkZFByb3AgKTtcblxualF1ZXJ5LmVhY2goIHsgZm9jdXM6IFwiZm9jdXNpblwiLCBibHVyOiBcImZvY3Vzb3V0XCIgfSwgZnVuY3Rpb24oIHR5cGUsIGRlbGVnYXRlVHlwZSApIHtcblx0alF1ZXJ5LmV2ZW50LnNwZWNpYWxbIHR5cGUgXSA9IHtcblxuXHRcdC8vIFV0aWxpemUgbmF0aXZlIGV2ZW50IGlmIHBvc3NpYmxlIHNvIGJsdXIvZm9jdXMgc2VxdWVuY2UgaXMgY29ycmVjdFxuXHRcdHNldHVwOiBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gQ2xhaW0gdGhlIGZpcnN0IGhhbmRsZXJcblx0XHRcdC8vIGRhdGFQcml2LnNldCggdGhpcywgXCJmb2N1c1wiLCAuLi4gKVxuXHRcdFx0Ly8gZGF0YVByaXYuc2V0KCB0aGlzLCBcImJsdXJcIiwgLi4uIClcblx0XHRcdGxldmVyYWdlTmF0aXZlKCB0aGlzLCB0eXBlLCBleHBlY3RTeW5jICk7XG5cblx0XHRcdC8vIFJldHVybiBmYWxzZSB0byBhbGxvdyBub3JtYWwgcHJvY2Vzc2luZyBpbiB0aGUgY2FsbGVyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblx0XHR0cmlnZ2VyOiBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gRm9yY2Ugc2V0dXAgYmVmb3JlIHRyaWdnZXJcblx0XHRcdGxldmVyYWdlTmF0aXZlKCB0aGlzLCB0eXBlICk7XG5cblx0XHRcdC8vIFJldHVybiBub24tZmFsc2UgdG8gYWxsb3cgbm9ybWFsIGV2ZW50LXBhdGggcHJvcGFnYXRpb25cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cblx0XHQvLyBTdXBwcmVzcyBuYXRpdmUgZm9jdXMgb3IgYmx1ciBhcyBpdCdzIGFscmVhZHkgYmVpbmcgZmlyZWRcblx0XHQvLyBpbiBsZXZlcmFnZU5hdGl2ZS5cblx0XHRfZGVmYXVsdDogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9LFxuXG5cdFx0ZGVsZWdhdGVUeXBlOiBkZWxlZ2F0ZVR5cGVcblx0fTtcbn0gKTtcblxuLy8gQ3JlYXRlIG1vdXNlZW50ZXIvbGVhdmUgZXZlbnRzIHVzaW5nIG1vdXNlb3Zlci9vdXQgYW5kIGV2ZW50LXRpbWUgY2hlY2tzXG4vLyBzbyB0aGF0IGV2ZW50IGRlbGVnYXRpb24gd29ya3MgaW4galF1ZXJ5LlxuLy8gRG8gdGhlIHNhbWUgZm9yIHBvaW50ZXJlbnRlci9wb2ludGVybGVhdmUgYW5kIHBvaW50ZXJvdmVyL3BvaW50ZXJvdXRcbi8vXG4vLyBTdXBwb3J0OiBTYWZhcmkgNyBvbmx5XG4vLyBTYWZhcmkgc2VuZHMgbW91c2VlbnRlciB0b28gb2Z0ZW47IHNlZTpcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ3MDI1OFxuLy8gZm9yIHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgYnVnIChpdCBleGlzdGVkIGluIG9sZGVyIENocm9tZSB2ZXJzaW9ucyBhcyB3ZWxsKS5cbmpRdWVyeS5lYWNoKCB7XG5cdG1vdXNlZW50ZXI6IFwibW91c2VvdmVyXCIsXG5cdG1vdXNlbGVhdmU6IFwibW91c2VvdXRcIixcblx0cG9pbnRlcmVudGVyOiBcInBvaW50ZXJvdmVyXCIsXG5cdHBvaW50ZXJsZWF2ZTogXCJwb2ludGVyb3V0XCJcbn0sIGZ1bmN0aW9uKCBvcmlnLCBmaXggKSB7XG5cdGpRdWVyeS5ldmVudC5zcGVjaWFsWyBvcmlnIF0gPSB7XG5cdFx0ZGVsZWdhdGVUeXBlOiBmaXgsXG5cdFx0YmluZFR5cGU6IGZpeCxcblxuXHRcdGhhbmRsZTogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0dmFyIHJldCxcblx0XHRcdFx0dGFyZ2V0ID0gdGhpcyxcblx0XHRcdFx0cmVsYXRlZCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQsXG5cdFx0XHRcdGhhbmRsZU9iaiA9IGV2ZW50LmhhbmRsZU9iajtcblxuXHRcdFx0Ly8gRm9yIG1vdXNlZW50ZXIvbGVhdmUgY2FsbCB0aGUgaGFuZGxlciBpZiByZWxhdGVkIGlzIG91dHNpZGUgdGhlIHRhcmdldC5cblx0XHRcdC8vIE5COiBObyByZWxhdGVkVGFyZ2V0IGlmIHRoZSBtb3VzZSBsZWZ0L2VudGVyZWQgdGhlIGJyb3dzZXIgd2luZG93XG5cdFx0XHRpZiAoICFyZWxhdGVkIHx8ICggcmVsYXRlZCAhPT0gdGFyZ2V0ICYmICFqUXVlcnkuY29udGFpbnMoIHRhcmdldCwgcmVsYXRlZCApICkgKSB7XG5cdFx0XHRcdGV2ZW50LnR5cGUgPSBoYW5kbGVPYmoub3JpZ1R5cGU7XG5cdFx0XHRcdHJldCA9IGhhbmRsZU9iai5oYW5kbGVyLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHRcdFx0ZXZlbnQudHlwZSA9IGZpeDtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fVxuXHR9O1xufSApO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cblx0b246IGZ1bmN0aW9uKCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuICkge1xuXHRcdHJldHVybiBvbiggdGhpcywgdHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbiApO1xuXHR9LFxuXHRvbmU6IGZ1bmN0aW9uKCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuICkge1xuXHRcdHJldHVybiBvbiggdGhpcywgdHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbiwgMSApO1xuXHR9LFxuXHRvZmY6IGZ1bmN0aW9uKCB0eXBlcywgc2VsZWN0b3IsIGZuICkge1xuXHRcdHZhciBoYW5kbGVPYmosIHR5cGU7XG5cdFx0aWYgKCB0eXBlcyAmJiB0eXBlcy5wcmV2ZW50RGVmYXVsdCAmJiB0eXBlcy5oYW5kbGVPYmogKSB7XG5cblx0XHRcdC8vICggZXZlbnQgKSAgZGlzcGF0Y2hlZCBqUXVlcnkuRXZlbnRcblx0XHRcdGhhbmRsZU9iaiA9IHR5cGVzLmhhbmRsZU9iajtcblx0XHRcdGpRdWVyeSggdHlwZXMuZGVsZWdhdGVUYXJnZXQgKS5vZmYoXG5cdFx0XHRcdGhhbmRsZU9iai5uYW1lc3BhY2UgP1xuXHRcdFx0XHRcdGhhbmRsZU9iai5vcmlnVHlwZSArIFwiLlwiICsgaGFuZGxlT2JqLm5hbWVzcGFjZSA6XG5cdFx0XHRcdFx0aGFuZGxlT2JqLm9yaWdUeXBlLFxuXHRcdFx0XHRoYW5kbGVPYmouc2VsZWN0b3IsXG5cdFx0XHRcdGhhbmRsZU9iai5oYW5kbGVyXG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdGlmICggdHlwZW9mIHR5cGVzID09PSBcIm9iamVjdFwiICkge1xuXG5cdFx0XHQvLyAoIHR5cGVzLW9iamVjdCBbLCBzZWxlY3Rvcl0gKVxuXHRcdFx0Zm9yICggdHlwZSBpbiB0eXBlcyApIHtcblx0XHRcdFx0dGhpcy5vZmYoIHR5cGUsIHNlbGVjdG9yLCB0eXBlc1sgdHlwZSBdICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0aWYgKCBzZWxlY3RvciA9PT0gZmFsc2UgfHwgdHlwZW9mIHNlbGVjdG9yID09PSBcImZ1bmN0aW9uXCIgKSB7XG5cblx0XHRcdC8vICggdHlwZXMgWywgZm5dIClcblx0XHRcdGZuID0gc2VsZWN0b3I7XG5cdFx0XHRzZWxlY3RvciA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0aWYgKCBmbiA9PT0gZmFsc2UgKSB7XG5cdFx0XHRmbiA9IHJldHVybkZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeS5ldmVudC5yZW1vdmUoIHRoaXMsIHR5cGVzLCBmbiwgc2VsZWN0b3IgKTtcblx0XHR9ICk7XG5cdH1cbn0gKTtcblxuXG52YXJcblxuXHQvLyBTdXBwb3J0OiBJRSA8PTEwIC0gMTEsIEVkZ2UgMTIgLSAxMyBvbmx5XG5cdC8vIEluIElFL0VkZ2UgdXNpbmcgcmVnZXggZ3JvdXBzIGhlcmUgY2F1c2VzIHNldmVyZSBzbG93ZG93bnMuXG5cdC8vIFNlZSBodHRwczovL2Nvbm5lY3QubWljcm9zb2Z0LmNvbS9JRS9mZWVkYmFjay9kZXRhaWxzLzE3MzY1MTIvXG5cdHJub0lubmVyaHRtbCA9IC88c2NyaXB0fDxzdHlsZXw8bGluay9pLFxuXG5cdC8vIGNoZWNrZWQ9XCJjaGVja2VkXCIgb3IgY2hlY2tlZFxuXHRyY2hlY2tlZCA9IC9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksXG5cdHJjbGVhblNjcmlwdCA9IC9eXFxzKjwhKD86XFxbQ0RBVEFcXFt8LS0pfCg/OlxcXVxcXXwtLSk+XFxzKiQvZztcblxuLy8gUHJlZmVyIGEgdGJvZHkgb3ZlciBpdHMgcGFyZW50IHRhYmxlIGZvciBjb250YWluaW5nIG5ldyByb3dzXG5mdW5jdGlvbiBtYW5pcHVsYXRpb25UYXJnZXQoIGVsZW0sIGNvbnRlbnQgKSB7XG5cdGlmICggbm9kZU5hbWUoIGVsZW0sIFwidGFibGVcIiApICYmXG5cdFx0bm9kZU5hbWUoIGNvbnRlbnQubm9kZVR5cGUgIT09IDExID8gY29udGVudCA6IGNvbnRlbnQuZmlyc3RDaGlsZCwgXCJ0clwiICkgKSB7XG5cblx0XHRyZXR1cm4galF1ZXJ5KCBlbGVtICkuY2hpbGRyZW4oIFwidGJvZHlcIiApWyAwIF0gfHwgZWxlbTtcblx0fVxuXG5cdHJldHVybiBlbGVtO1xufVxuXG4vLyBSZXBsYWNlL3Jlc3RvcmUgdGhlIHR5cGUgYXR0cmlidXRlIG9mIHNjcmlwdCBlbGVtZW50cyBmb3Igc2FmZSBET00gbWFuaXB1bGF0aW9uXG5mdW5jdGlvbiBkaXNhYmxlU2NyaXB0KCBlbGVtICkge1xuXHRlbGVtLnR5cGUgPSAoIGVsZW0uZ2V0QXR0cmlidXRlKCBcInR5cGVcIiApICE9PSBudWxsICkgKyBcIi9cIiArIGVsZW0udHlwZTtcblx0cmV0dXJuIGVsZW07XG59XG5mdW5jdGlvbiByZXN0b3JlU2NyaXB0KCBlbGVtICkge1xuXHRpZiAoICggZWxlbS50eXBlIHx8IFwiXCIgKS5zbGljZSggMCwgNSApID09PSBcInRydWUvXCIgKSB7XG5cdFx0ZWxlbS50eXBlID0gZWxlbS50eXBlLnNsaWNlKCA1ICk7XG5cdH0gZWxzZSB7XG5cdFx0ZWxlbS5yZW1vdmVBdHRyaWJ1dGUoIFwidHlwZVwiICk7XG5cdH1cblxuXHRyZXR1cm4gZWxlbTtcbn1cblxuZnVuY3Rpb24gY2xvbmVDb3B5RXZlbnQoIHNyYywgZGVzdCApIHtcblx0dmFyIGksIGwsIHR5cGUsIHBkYXRhT2xkLCB1ZGF0YU9sZCwgdWRhdGFDdXIsIGV2ZW50cztcblxuXHRpZiAoIGRlc3Qubm9kZVR5cGUgIT09IDEgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gMS4gQ29weSBwcml2YXRlIGRhdGE6IGV2ZW50cywgaGFuZGxlcnMsIGV0Yy5cblx0aWYgKCBkYXRhUHJpdi5oYXNEYXRhKCBzcmMgKSApIHtcblx0XHRwZGF0YU9sZCA9IGRhdGFQcml2LmdldCggc3JjICk7XG5cdFx0ZXZlbnRzID0gcGRhdGFPbGQuZXZlbnRzO1xuXG5cdFx0aWYgKCBldmVudHMgKSB7XG5cdFx0XHRkYXRhUHJpdi5yZW1vdmUoIGRlc3QsIFwiaGFuZGxlIGV2ZW50c1wiICk7XG5cblx0XHRcdGZvciAoIHR5cGUgaW4gZXZlbnRzICkge1xuXHRcdFx0XHRmb3IgKCBpID0gMCwgbCA9IGV2ZW50c1sgdHlwZSBdLmxlbmd0aDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0XHRqUXVlcnkuZXZlbnQuYWRkKCBkZXN0LCB0eXBlLCBldmVudHNbIHR5cGUgXVsgaSBdICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyAyLiBDb3B5IHVzZXIgZGF0YVxuXHRpZiAoIGRhdGFVc2VyLmhhc0RhdGEoIHNyYyApICkge1xuXHRcdHVkYXRhT2xkID0gZGF0YVVzZXIuYWNjZXNzKCBzcmMgKTtcblx0XHR1ZGF0YUN1ciA9IGpRdWVyeS5leHRlbmQoIHt9LCB1ZGF0YU9sZCApO1xuXG5cdFx0ZGF0YVVzZXIuc2V0KCBkZXN0LCB1ZGF0YUN1ciApO1xuXHR9XG59XG5cbi8vIEZpeCBJRSBidWdzLCBzZWUgc3VwcG9ydCB0ZXN0c1xuZnVuY3Rpb24gZml4SW5wdXQoIHNyYywgZGVzdCApIHtcblx0dmFyIG5vZGVOYW1lID0gZGVzdC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdC8vIEZhaWxzIHRvIHBlcnNpc3QgdGhlIGNoZWNrZWQgc3RhdGUgb2YgYSBjbG9uZWQgY2hlY2tib3ggb3IgcmFkaW8gYnV0dG9uLlxuXHRpZiAoIG5vZGVOYW1lID09PSBcImlucHV0XCIgJiYgcmNoZWNrYWJsZVR5cGUudGVzdCggc3JjLnR5cGUgKSApIHtcblx0XHRkZXN0LmNoZWNrZWQgPSBzcmMuY2hlY2tlZDtcblxuXHQvLyBGYWlscyB0byByZXR1cm4gdGhlIHNlbGVjdGVkIG9wdGlvbiB0byB0aGUgZGVmYXVsdCBzZWxlY3RlZCBzdGF0ZSB3aGVuIGNsb25pbmcgb3B0aW9uc1xuXHR9IGVsc2UgaWYgKCBub2RlTmFtZSA9PT0gXCJpbnB1dFwiIHx8IG5vZGVOYW1lID09PSBcInRleHRhcmVhXCIgKSB7XG5cdFx0ZGVzdC5kZWZhdWx0VmFsdWUgPSBzcmMuZGVmYXVsdFZhbHVlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRvbU1hbmlwKCBjb2xsZWN0aW9uLCBhcmdzLCBjYWxsYmFjaywgaWdub3JlZCApIHtcblxuXHQvLyBGbGF0dGVuIGFueSBuZXN0ZWQgYXJyYXlzXG5cdGFyZ3MgPSBmbGF0KCBhcmdzICk7XG5cblx0dmFyIGZyYWdtZW50LCBmaXJzdCwgc2NyaXB0cywgaGFzU2NyaXB0cywgbm9kZSwgZG9jLFxuXHRcdGkgPSAwLFxuXHRcdGwgPSBjb2xsZWN0aW9uLmxlbmd0aCxcblx0XHRpTm9DbG9uZSA9IGwgLSAxLFxuXHRcdHZhbHVlID0gYXJnc1sgMCBdLFxuXHRcdHZhbHVlSXNGdW5jdGlvbiA9IGlzRnVuY3Rpb24oIHZhbHVlICk7XG5cblx0Ly8gV2UgY2FuJ3QgY2xvbmVOb2RlIGZyYWdtZW50cyB0aGF0IGNvbnRhaW4gY2hlY2tlZCwgaW4gV2ViS2l0XG5cdGlmICggdmFsdWVJc0Z1bmN0aW9uIHx8XG5cdFx0XHQoIGwgPiAxICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJlxuXHRcdFx0XHQhc3VwcG9ydC5jaGVja0Nsb25lICYmIHJjaGVja2VkLnRlc3QoIHZhbHVlICkgKSApIHtcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5lYWNoKCBmdW5jdGlvbiggaW5kZXggKSB7XG5cdFx0XHR2YXIgc2VsZiA9IGNvbGxlY3Rpb24uZXEoIGluZGV4ICk7XG5cdFx0XHRpZiAoIHZhbHVlSXNGdW5jdGlvbiApIHtcblx0XHRcdFx0YXJnc1sgMCBdID0gdmFsdWUuY2FsbCggdGhpcywgaW5kZXgsIHNlbGYuaHRtbCgpICk7XG5cdFx0XHR9XG5cdFx0XHRkb21NYW5pcCggc2VsZiwgYXJncywgY2FsbGJhY2ssIGlnbm9yZWQgKTtcblx0XHR9ICk7XG5cdH1cblxuXHRpZiAoIGwgKSB7XG5cdFx0ZnJhZ21lbnQgPSBidWlsZEZyYWdtZW50KCBhcmdzLCBjb2xsZWN0aW9uWyAwIF0ub3duZXJEb2N1bWVudCwgZmFsc2UsIGNvbGxlY3Rpb24sIGlnbm9yZWQgKTtcblx0XHRmaXJzdCA9IGZyYWdtZW50LmZpcnN0Q2hpbGQ7XG5cblx0XHRpZiAoIGZyYWdtZW50LmNoaWxkTm9kZXMubGVuZ3RoID09PSAxICkge1xuXHRcdFx0ZnJhZ21lbnQgPSBmaXJzdDtcblx0XHR9XG5cblx0XHQvLyBSZXF1aXJlIGVpdGhlciBuZXcgY29udGVudCBvciBhbiBpbnRlcmVzdCBpbiBpZ25vcmVkIGVsZW1lbnRzIHRvIGludm9rZSB0aGUgY2FsbGJhY2tcblx0XHRpZiAoIGZpcnN0IHx8IGlnbm9yZWQgKSB7XG5cdFx0XHRzY3JpcHRzID0galF1ZXJ5Lm1hcCggZ2V0QWxsKCBmcmFnbWVudCwgXCJzY3JpcHRcIiApLCBkaXNhYmxlU2NyaXB0ICk7XG5cdFx0XHRoYXNTY3JpcHRzID0gc2NyaXB0cy5sZW5ndGg7XG5cblx0XHRcdC8vIFVzZSB0aGUgb3JpZ2luYWwgZnJhZ21lbnQgZm9yIHRoZSBsYXN0IGl0ZW1cblx0XHRcdC8vIGluc3RlYWQgb2YgdGhlIGZpcnN0IGJlY2F1c2UgaXQgY2FuIGVuZCB1cFxuXHRcdFx0Ly8gYmVpbmcgZW1wdGllZCBpbmNvcnJlY3RseSBpbiBjZXJ0YWluIHNpdHVhdGlvbnMgKCM4MDcwKS5cblx0XHRcdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0bm9kZSA9IGZyYWdtZW50O1xuXG5cdFx0XHRcdGlmICggaSAhPT0gaU5vQ2xvbmUgKSB7XG5cdFx0XHRcdFx0bm9kZSA9IGpRdWVyeS5jbG9uZSggbm9kZSwgdHJ1ZSwgdHJ1ZSApO1xuXG5cdFx0XHRcdFx0Ly8gS2VlcCByZWZlcmVuY2VzIHRvIGNsb25lZCBzY3JpcHRzIGZvciBsYXRlciByZXN0b3JhdGlvblxuXHRcdFx0XHRcdGlmICggaGFzU2NyaXB0cyApIHtcblxuXHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCBvbmx5LCBQaGFudG9tSlMgMSBvbmx5XG5cdFx0XHRcdFx0XHQvLyBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG5cdFx0XHRcdFx0XHRqUXVlcnkubWVyZ2UoIHNjcmlwdHMsIGdldEFsbCggbm9kZSwgXCJzY3JpcHRcIiApICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y2FsbGJhY2suY2FsbCggY29sbGVjdGlvblsgaSBdLCBub2RlLCBpICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggaGFzU2NyaXB0cyApIHtcblx0XHRcdFx0ZG9jID0gc2NyaXB0c1sgc2NyaXB0cy5sZW5ndGggLSAxIF0ub3duZXJEb2N1bWVudDtcblxuXHRcdFx0XHQvLyBSZWVuYWJsZSBzY3JpcHRzXG5cdFx0XHRcdGpRdWVyeS5tYXAoIHNjcmlwdHMsIHJlc3RvcmVTY3JpcHQgKTtcblxuXHRcdFx0XHQvLyBFdmFsdWF0ZSBleGVjdXRhYmxlIHNjcmlwdHMgb24gZmlyc3QgZG9jdW1lbnQgaW5zZXJ0aW9uXG5cdFx0XHRcdGZvciAoIGkgPSAwOyBpIDwgaGFzU2NyaXB0czsgaSsrICkge1xuXHRcdFx0XHRcdG5vZGUgPSBzY3JpcHRzWyBpIF07XG5cdFx0XHRcdFx0aWYgKCByc2NyaXB0VHlwZS50ZXN0KCBub2RlLnR5cGUgfHwgXCJcIiApICYmXG5cdFx0XHRcdFx0XHQhZGF0YVByaXYuYWNjZXNzKCBub2RlLCBcImdsb2JhbEV2YWxcIiApICYmXG5cdFx0XHRcdFx0XHRqUXVlcnkuY29udGFpbnMoIGRvYywgbm9kZSApICkge1xuXG5cdFx0XHRcdFx0XHRpZiAoIG5vZGUuc3JjICYmICggbm9kZS50eXBlIHx8IFwiXCIgKS50b0xvd2VyQ2FzZSgpICAhPT0gXCJtb2R1bGVcIiApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBPcHRpb25hbCBBSkFYIGRlcGVuZGVuY3ksIGJ1dCB3b24ndCBydW4gc2NyaXB0cyBpZiBub3QgcHJlc2VudFxuXHRcdFx0XHRcdFx0XHRpZiAoIGpRdWVyeS5fZXZhbFVybCAmJiAhbm9kZS5ub01vZHVsZSApIHtcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkuX2V2YWxVcmwoIG5vZGUuc3JjLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRub25jZTogbm9kZS5ub25jZSB8fCBub2RlLmdldEF0dHJpYnV0ZSggXCJub25jZVwiIClcblx0XHRcdFx0XHRcdFx0XHR9LCBkb2MgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0RE9NRXZhbCggbm9kZS50ZXh0Q29udGVudC5yZXBsYWNlKCByY2xlYW5TY3JpcHQsIFwiXCIgKSwgbm9kZSwgZG9jICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGNvbGxlY3Rpb247XG59XG5cbmZ1bmN0aW9uIHJlbW92ZSggZWxlbSwgc2VsZWN0b3IsIGtlZXBEYXRhICkge1xuXHR2YXIgbm9kZSxcblx0XHRub2RlcyA9IHNlbGVjdG9yID8galF1ZXJ5LmZpbHRlciggc2VsZWN0b3IsIGVsZW0gKSA6IGVsZW0sXG5cdFx0aSA9IDA7XG5cblx0Zm9yICggOyAoIG5vZGUgPSBub2Rlc1sgaSBdICkgIT0gbnVsbDsgaSsrICkge1xuXHRcdGlmICggIWtlZXBEYXRhICYmIG5vZGUubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0XHRqUXVlcnkuY2xlYW5EYXRhKCBnZXRBbGwoIG5vZGUgKSApO1xuXHRcdH1cblxuXHRcdGlmICggbm9kZS5wYXJlbnROb2RlICkge1xuXHRcdFx0aWYgKCBrZWVwRGF0YSAmJiBpc0F0dGFjaGVkKCBub2RlICkgKSB7XG5cdFx0XHRcdHNldEdsb2JhbEV2YWwoIGdldEFsbCggbm9kZSwgXCJzY3JpcHRcIiApICk7XG5cdFx0XHR9XG5cdFx0XHRub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIG5vZGUgKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZWxlbTtcbn1cblxualF1ZXJ5LmV4dGVuZCgge1xuXHRodG1sUHJlZmlsdGVyOiBmdW5jdGlvbiggaHRtbCApIHtcblx0XHRyZXR1cm4gaHRtbDtcblx0fSxcblxuXHRjbG9uZTogZnVuY3Rpb24oIGVsZW0sIGRhdGFBbmRFdmVudHMsIGRlZXBEYXRhQW5kRXZlbnRzICkge1xuXHRcdHZhciBpLCBsLCBzcmNFbGVtZW50cywgZGVzdEVsZW1lbnRzLFxuXHRcdFx0Y2xvbmUgPSBlbGVtLmNsb25lTm9kZSggdHJ1ZSApLFxuXHRcdFx0aW5QYWdlID0gaXNBdHRhY2hlZCggZWxlbSApO1xuXG5cdFx0Ly8gRml4IElFIGNsb25pbmcgaXNzdWVzXG5cdFx0aWYgKCAhc3VwcG9ydC5ub0Nsb25lQ2hlY2tlZCAmJiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgfHwgZWxlbS5ub2RlVHlwZSA9PT0gMTEgKSAmJlxuXHRcdFx0XHQhalF1ZXJ5LmlzWE1MRG9jKCBlbGVtICkgKSB7XG5cblx0XHRcdC8vIFdlIGVzY2hldyBTaXp6bGUgaGVyZSBmb3IgcGVyZm9ybWFuY2UgcmVhc29uczogaHR0cHM6Ly9qc3BlcmYuY29tL2dldGFsbC12cy1zaXp6bGUvMlxuXHRcdFx0ZGVzdEVsZW1lbnRzID0gZ2V0QWxsKCBjbG9uZSApO1xuXHRcdFx0c3JjRWxlbWVudHMgPSBnZXRBbGwoIGVsZW0gKTtcblxuXHRcdFx0Zm9yICggaSA9IDAsIGwgPSBzcmNFbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRcdGZpeElucHV0KCBzcmNFbGVtZW50c1sgaSBdLCBkZXN0RWxlbWVudHNbIGkgXSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENvcHkgdGhlIGV2ZW50cyBmcm9tIHRoZSBvcmlnaW5hbCB0byB0aGUgY2xvbmVcblx0XHRpZiAoIGRhdGFBbmRFdmVudHMgKSB7XG5cdFx0XHRpZiAoIGRlZXBEYXRhQW5kRXZlbnRzICkge1xuXHRcdFx0XHRzcmNFbGVtZW50cyA9IHNyY0VsZW1lbnRzIHx8IGdldEFsbCggZWxlbSApO1xuXHRcdFx0XHRkZXN0RWxlbWVudHMgPSBkZXN0RWxlbWVudHMgfHwgZ2V0QWxsKCBjbG9uZSApO1xuXG5cdFx0XHRcdGZvciAoIGkgPSAwLCBsID0gc3JjRWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0XHRcdGNsb25lQ29weUV2ZW50KCBzcmNFbGVtZW50c1sgaSBdLCBkZXN0RWxlbWVudHNbIGkgXSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbG9uZUNvcHlFdmVudCggZWxlbSwgY2xvbmUgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBQcmVzZXJ2ZSBzY3JpcHQgZXZhbHVhdGlvbiBoaXN0b3J5XG5cdFx0ZGVzdEVsZW1lbnRzID0gZ2V0QWxsKCBjbG9uZSwgXCJzY3JpcHRcIiApO1xuXHRcdGlmICggZGVzdEVsZW1lbnRzLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRzZXRHbG9iYWxFdmFsKCBkZXN0RWxlbWVudHMsICFpblBhZ2UgJiYgZ2V0QWxsKCBlbGVtLCBcInNjcmlwdFwiICkgKTtcblx0XHR9XG5cblx0XHQvLyBSZXR1cm4gdGhlIGNsb25lZCBzZXRcblx0XHRyZXR1cm4gY2xvbmU7XG5cdH0sXG5cblx0Y2xlYW5EYXRhOiBmdW5jdGlvbiggZWxlbXMgKSB7XG5cdFx0dmFyIGRhdGEsIGVsZW0sIHR5cGUsXG5cdFx0XHRzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWwsXG5cdFx0XHRpID0gMDtcblxuXHRcdGZvciAoIDsgKCBlbGVtID0gZWxlbXNbIGkgXSApICE9PSB1bmRlZmluZWQ7IGkrKyApIHtcblx0XHRcdGlmICggYWNjZXB0RGF0YSggZWxlbSApICkge1xuXHRcdFx0XHRpZiAoICggZGF0YSA9IGVsZW1bIGRhdGFQcml2LmV4cGFuZG8gXSApICkge1xuXHRcdFx0XHRcdGlmICggZGF0YS5ldmVudHMgKSB7XG5cdFx0XHRcdFx0XHRmb3IgKCB0eXBlIGluIGRhdGEuZXZlbnRzICkge1xuXHRcdFx0XHRcdFx0XHRpZiAoIHNwZWNpYWxbIHR5cGUgXSApIHtcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkuZXZlbnQucmVtb3ZlKCBlbGVtLCB0eXBlICk7XG5cblx0XHRcdFx0XHRcdFx0Ly8gVGhpcyBpcyBhIHNob3J0Y3V0IHRvIGF2b2lkIGpRdWVyeS5ldmVudC5yZW1vdmUncyBvdmVyaGVhZFxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeS5yZW1vdmVFdmVudCggZWxlbSwgdHlwZSwgZGF0YS5oYW5kbGUgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IENocm9tZSA8PTM1IC0gNDUrXG5cdFx0XHRcdFx0Ly8gQXNzaWduIHVuZGVmaW5lZCBpbnN0ZWFkIG9mIHVzaW5nIGRlbGV0ZSwgc2VlIERhdGEjcmVtb3ZlXG5cdFx0XHRcdFx0ZWxlbVsgZGF0YVByaXYuZXhwYW5kbyBdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggZWxlbVsgZGF0YVVzZXIuZXhwYW5kbyBdICkge1xuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogQ2hyb21lIDw9MzUgLSA0NStcblx0XHRcdFx0XHQvLyBBc3NpZ24gdW5kZWZpbmVkIGluc3RlYWQgb2YgdXNpbmcgZGVsZXRlLCBzZWUgRGF0YSNyZW1vdmVcblx0XHRcdFx0XHRlbGVtWyBkYXRhVXNlci5leHBhbmRvIF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn0gKTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRkZXRhY2g6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHRyZXR1cm4gcmVtb3ZlKCB0aGlzLCBzZWxlY3RvciwgdHJ1ZSApO1xuXHR9LFxuXG5cdHJlbW92ZTogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHJldHVybiByZW1vdmUoIHRoaXMsIHNlbGVjdG9yICk7XG5cdH0sXG5cblx0dGV4dDogZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRcdHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID9cblx0XHRcdFx0alF1ZXJ5LnRleHQoIHRoaXMgKSA6XG5cdFx0XHRcdHRoaXMuZW1wdHkoKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAoIHRoaXMubm9kZVR5cGUgPT09IDEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gMTEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gOSApIHtcblx0XHRcdFx0XHRcdHRoaXMudGV4dENvbnRlbnQgPSB2YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblx0XHR9LCBudWxsLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCApO1xuXHR9LFxuXG5cdGFwcGVuZDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGRvbU1hbmlwKCB0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0aWYgKCB0aGlzLm5vZGVUeXBlID09PSAxIHx8IHRoaXMubm9kZVR5cGUgPT09IDExIHx8IHRoaXMubm9kZVR5cGUgPT09IDkgKSB7XG5cdFx0XHRcdHZhciB0YXJnZXQgPSBtYW5pcHVsYXRpb25UYXJnZXQoIHRoaXMsIGVsZW0gKTtcblx0XHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKCBlbGVtICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdHByZXBlbmQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBkb21NYW5pcCggdGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdGlmICggdGhpcy5ub2RlVHlwZSA9PT0gMSB8fCB0aGlzLm5vZGVUeXBlID09PSAxMSB8fCB0aGlzLm5vZGVUeXBlID09PSA5ICkge1xuXHRcdFx0XHR2YXIgdGFyZ2V0ID0gbWFuaXB1bGF0aW9uVGFyZ2V0KCB0aGlzLCBlbGVtICk7XG5cdFx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoIGVsZW0sIHRhcmdldC5maXJzdENoaWxkICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdGJlZm9yZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGRvbU1hbmlwKCB0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0aWYgKCB0aGlzLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoIGVsZW0sIHRoaXMgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0YWZ0ZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBkb21NYW5pcCggdGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdGlmICggdGhpcy5wYXJlbnROb2RlICkge1xuXHRcdFx0XHR0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKCBlbGVtLCB0aGlzLm5leHRTaWJsaW5nICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdGVtcHR5OiBmdW5jdGlvbigpIHtcblx0XHR2YXIgZWxlbSxcblx0XHRcdGkgPSAwO1xuXG5cdFx0Zm9yICggOyAoIGVsZW0gPSB0aGlzWyBpIF0gKSAhPSBudWxsOyBpKysgKSB7XG5cdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cblx0XHRcdFx0Ly8gUHJldmVudCBtZW1vcnkgbGVha3Ncblx0XHRcdFx0alF1ZXJ5LmNsZWFuRGF0YSggZ2V0QWxsKCBlbGVtLCBmYWxzZSApICk7XG5cblx0XHRcdFx0Ly8gUmVtb3ZlIGFueSByZW1haW5pbmcgbm9kZXNcblx0XHRcdFx0ZWxlbS50ZXh0Q29udGVudCA9IFwiXCI7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0Y2xvbmU6IGZ1bmN0aW9uKCBkYXRhQW5kRXZlbnRzLCBkZWVwRGF0YUFuZEV2ZW50cyApIHtcblx0XHRkYXRhQW5kRXZlbnRzID0gZGF0YUFuZEV2ZW50cyA9PSBudWxsID8gZmFsc2UgOiBkYXRhQW5kRXZlbnRzO1xuXHRcdGRlZXBEYXRhQW5kRXZlbnRzID0gZGVlcERhdGFBbmRFdmVudHMgPT0gbnVsbCA/IGRhdGFBbmRFdmVudHMgOiBkZWVwRGF0YUFuZEV2ZW50cztcblxuXHRcdHJldHVybiB0aGlzLm1hcCggZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5LmNsb25lKCB0aGlzLCBkYXRhQW5kRXZlbnRzLCBkZWVwRGF0YUFuZEV2ZW50cyApO1xuXHRcdH0gKTtcblx0fSxcblxuXHRodG1sOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0dmFyIGVsZW0gPSB0aGlzWyAwIF0gfHwge30sXG5cdFx0XHRcdGkgPSAwLFxuXHRcdFx0XHRsID0gdGhpcy5sZW5ndGg7XG5cblx0XHRcdGlmICggdmFsdWUgPT09IHVuZGVmaW5lZCAmJiBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0XHRyZXR1cm4gZWxlbS5pbm5lckhUTUw7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNlZSBpZiB3ZSBjYW4gdGFrZSBhIHNob3J0Y3V0IGFuZCBqdXN0IHVzZSBpbm5lckhUTUxcblx0XHRcdGlmICggdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmICFybm9Jbm5lcmh0bWwudGVzdCggdmFsdWUgKSAmJlxuXHRcdFx0XHQhd3JhcE1hcFsgKCBydGFnTmFtZS5leGVjKCB2YWx1ZSApIHx8IFsgXCJcIiwgXCJcIiBdIClbIDEgXS50b0xvd2VyQ2FzZSgpIF0gKSB7XG5cblx0XHRcdFx0dmFsdWUgPSBqUXVlcnkuaHRtbFByZWZpbHRlciggdmFsdWUgKTtcblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0XHRcdGVsZW0gPSB0aGlzWyBpIF0gfHwge307XG5cblx0XHRcdFx0XHRcdC8vIFJlbW92ZSBlbGVtZW50IG5vZGVzIGFuZCBwcmV2ZW50IG1lbW9yeSBsZWFrc1xuXHRcdFx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0XHRcdFx0XHRqUXVlcnkuY2xlYW5EYXRhKCBnZXRBbGwoIGVsZW0sIGZhbHNlICkgKTtcblx0XHRcdFx0XHRcdFx0ZWxlbS5pbm5lckhUTUwgPSB2YWx1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRlbGVtID0gMDtcblxuXHRcdFx0XHQvLyBJZiB1c2luZyBpbm5lckhUTUwgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgdXNlIHRoZSBmYWxsYmFjayBtZXRob2Rcblx0XHRcdFx0fSBjYXRjaCAoIGUgKSB7fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGVsZW0gKSB7XG5cdFx0XHRcdHRoaXMuZW1wdHkoKS5hcHBlbmQoIHZhbHVlICk7XG5cdFx0XHR9XG5cdFx0fSwgbnVsbCwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggKTtcblx0fSxcblxuXHRyZXBsYWNlV2l0aDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGlnbm9yZWQgPSBbXTtcblxuXHRcdC8vIE1ha2UgdGhlIGNoYW5nZXMsIHJlcGxhY2luZyBlYWNoIG5vbi1pZ25vcmVkIGNvbnRleHQgZWxlbWVudCB3aXRoIHRoZSBuZXcgY29udGVudFxuXHRcdHJldHVybiBkb21NYW5pcCggdGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG5cblx0XHRcdGlmICggalF1ZXJ5LmluQXJyYXkoIHRoaXMsIGlnbm9yZWQgKSA8IDAgKSB7XG5cdFx0XHRcdGpRdWVyeS5jbGVhbkRhdGEoIGdldEFsbCggdGhpcyApICk7XG5cdFx0XHRcdGlmICggcGFyZW50ICkge1xuXHRcdFx0XHRcdHBhcmVudC5yZXBsYWNlQ2hpbGQoIGVsZW0sIHRoaXMgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0Ly8gRm9yY2UgY2FsbGJhY2sgaW52b2NhdGlvblxuXHRcdH0sIGlnbm9yZWQgKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZWFjaCgge1xuXHRhcHBlbmRUbzogXCJhcHBlbmRcIixcblx0cHJlcGVuZFRvOiBcInByZXBlbmRcIixcblx0aW5zZXJ0QmVmb3JlOiBcImJlZm9yZVwiLFxuXHRpbnNlcnRBZnRlcjogXCJhZnRlclwiLFxuXHRyZXBsYWNlQWxsOiBcInJlcGxhY2VXaXRoXCJcbn0sIGZ1bmN0aW9uKCBuYW1lLCBvcmlnaW5hbCApIHtcblx0alF1ZXJ5LmZuWyBuYW1lIF0gPSBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0dmFyIGVsZW1zLFxuXHRcdFx0cmV0ID0gW10sXG5cdFx0XHRpbnNlcnQgPSBqUXVlcnkoIHNlbGVjdG9yICksXG5cdFx0XHRsYXN0ID0gaW5zZXJ0Lmxlbmd0aCAtIDEsXG5cdFx0XHRpID0gMDtcblxuXHRcdGZvciAoIDsgaSA8PSBsYXN0OyBpKysgKSB7XG5cdFx0XHRlbGVtcyA9IGkgPT09IGxhc3QgPyB0aGlzIDogdGhpcy5jbG9uZSggdHJ1ZSApO1xuXHRcdFx0alF1ZXJ5KCBpbnNlcnRbIGkgXSApWyBvcmlnaW5hbCBdKCBlbGVtcyApO1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHksIFBoYW50b21KUyAxIG9ubHlcblx0XHRcdC8vIC5nZXQoKSBiZWNhdXNlIHB1c2guYXBwbHkoXywgYXJyYXlsaWtlKSB0aHJvd3Mgb24gYW5jaWVudCBXZWJLaXRcblx0XHRcdHB1c2guYXBwbHkoIHJldCwgZWxlbXMuZ2V0KCkgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIHJldCApO1xuXHR9O1xufSApO1xudmFyIHJudW1ub25weCA9IG5ldyBSZWdFeHAoIFwiXihcIiArIHBudW0gKyBcIikoPyFweClbYS16JV0rJFwiLCBcImlcIiApO1xuXG52YXIgZ2V0U3R5bGVzID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA8PTExIG9ubHksIEZpcmVmb3ggPD0zMCAoIzE1MDk4LCAjMTQxNTApXG5cdFx0Ly8gSUUgdGhyb3dzIG9uIGVsZW1lbnRzIGNyZWF0ZWQgaW4gcG9wdXBzXG5cdFx0Ly8gRkYgbWVhbndoaWxlIHRocm93cyBvbiBmcmFtZSBlbGVtZW50cyB0aHJvdWdoIFwiZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZVwiXG5cdFx0dmFyIHZpZXcgPSBlbGVtLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG5cblx0XHRpZiAoICF2aWV3IHx8ICF2aWV3Lm9wZW5lciApIHtcblx0XHRcdHZpZXcgPSB3aW5kb3c7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZpZXcuZ2V0Q29tcHV0ZWRTdHlsZSggZWxlbSApO1xuXHR9O1xuXG52YXIgc3dhcCA9IGZ1bmN0aW9uKCBlbGVtLCBvcHRpb25zLCBjYWxsYmFjayApIHtcblx0dmFyIHJldCwgbmFtZSxcblx0XHRvbGQgPSB7fTtcblxuXHQvLyBSZW1lbWJlciB0aGUgb2xkIHZhbHVlcywgYW5kIGluc2VydCB0aGUgbmV3IG9uZXNcblx0Zm9yICggbmFtZSBpbiBvcHRpb25zICkge1xuXHRcdG9sZFsgbmFtZSBdID0gZWxlbS5zdHlsZVsgbmFtZSBdO1xuXHRcdGVsZW0uc3R5bGVbIG5hbWUgXSA9IG9wdGlvbnNbIG5hbWUgXTtcblx0fVxuXG5cdHJldCA9IGNhbGxiYWNrLmNhbGwoIGVsZW0gKTtcblxuXHQvLyBSZXZlcnQgdGhlIG9sZCB2YWx1ZXNcblx0Zm9yICggbmFtZSBpbiBvcHRpb25zICkge1xuXHRcdGVsZW0uc3R5bGVbIG5hbWUgXSA9IG9sZFsgbmFtZSBdO1xuXHR9XG5cblx0cmV0dXJuIHJldDtcbn07XG5cblxudmFyIHJib3hTdHlsZSA9IG5ldyBSZWdFeHAoIGNzc0V4cGFuZC5qb2luKCBcInxcIiApLCBcImlcIiApO1xuXG5cblxuKCBmdW5jdGlvbigpIHtcblxuXHQvLyBFeGVjdXRpbmcgYm90aCBwaXhlbFBvc2l0aW9uICYgYm94U2l6aW5nUmVsaWFibGUgdGVzdHMgcmVxdWlyZSBvbmx5IG9uZSBsYXlvdXRcblx0Ly8gc28gdGhleSdyZSBleGVjdXRlZCBhdCB0aGUgc2FtZSB0aW1lIHRvIHNhdmUgdGhlIHNlY29uZCBjb21wdXRhdGlvbi5cblx0ZnVuY3Rpb24gY29tcHV0ZVN0eWxlVGVzdHMoKSB7XG5cblx0XHQvLyBUaGlzIGlzIGEgc2luZ2xldG9uLCB3ZSBuZWVkIHRvIGV4ZWN1dGUgaXQgb25seSBvbmNlXG5cdFx0aWYgKCAhZGl2ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi0xMTExMXB4O3dpZHRoOjYwcHg7XCIgK1xuXHRcdFx0XCJtYXJnaW4tdG9wOjFweDtwYWRkaW5nOjA7Ym9yZGVyOjBcIjtcblx0XHRkaXYuc3R5bGUuY3NzVGV4dCA9XG5cdFx0XHRcInBvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94O292ZXJmbG93OnNjcm9sbDtcIiArXG5cdFx0XHRcIm1hcmdpbjphdXRvO2JvcmRlcjoxcHg7cGFkZGluZzoxcHg7XCIgK1xuXHRcdFx0XCJ3aWR0aDo2MCU7dG9wOjElXCI7XG5cdFx0ZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKCBjb250YWluZXIgKS5hcHBlbmRDaGlsZCggZGl2ICk7XG5cblx0XHR2YXIgZGl2U3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSggZGl2ICk7XG5cdFx0cGl4ZWxQb3NpdGlvblZhbCA9IGRpdlN0eWxlLnRvcCAhPT0gXCIxJVwiO1xuXG5cdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA0LjAgLSA0LjMgb25seSwgRmlyZWZveCA8PTMgLSA0NFxuXHRcdHJlbGlhYmxlTWFyZ2luTGVmdFZhbCA9IHJvdW5kUGl4ZWxNZWFzdXJlcyggZGl2U3R5bGUubWFyZ2luTGVmdCApID09PSAxMjtcblxuXHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgNC4wIC0gNC4zIG9ubHksIFNhZmFyaSA8PTkuMSAtIDEwLjEsIGlPUyA8PTcuMCAtIDkuM1xuXHRcdC8vIFNvbWUgc3R5bGVzIGNvbWUgYmFjayB3aXRoIHBlcmNlbnRhZ2UgdmFsdWVzLCBldmVuIHRob3VnaCB0aGV5IHNob3VsZG4ndFxuXHRcdGRpdi5zdHlsZS5yaWdodCA9IFwiNjAlXCI7XG5cdFx0cGl4ZWxCb3hTdHlsZXNWYWwgPSByb3VuZFBpeGVsTWVhc3VyZXMoIGRpdlN0eWxlLnJpZ2h0ICkgPT09IDM2O1xuXG5cdFx0Ly8gU3VwcG9ydDogSUUgOSAtIDExIG9ubHlcblx0XHQvLyBEZXRlY3QgbWlzcmVwb3J0aW5nIG9mIGNvbnRlbnQgZGltZW5zaW9ucyBmb3IgYm94LXNpemluZzpib3JkZXItYm94IGVsZW1lbnRzXG5cdFx0Ym94U2l6aW5nUmVsaWFibGVWYWwgPSByb3VuZFBpeGVsTWVhc3VyZXMoIGRpdlN0eWxlLndpZHRoICkgPT09IDM2O1xuXG5cdFx0Ly8gU3VwcG9ydDogSUUgOSBvbmx5XG5cdFx0Ly8gRGV0ZWN0IG92ZXJmbG93OnNjcm9sbCBzY3Jld2luZXNzIChnaC0zNjk5KVxuXHRcdC8vIFN1cHBvcnQ6IENocm9tZSA8PTY0XG5cdFx0Ly8gRG9uJ3QgZ2V0IHRyaWNrZWQgd2hlbiB6b29tIGFmZmVjdHMgb2Zmc2V0V2lkdGggKGdoLTQwMjkpXG5cdFx0ZGl2LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuXHRcdHNjcm9sbGJveFNpemVWYWwgPSByb3VuZFBpeGVsTWVhc3VyZXMoIGRpdi5vZmZzZXRXaWR0aCAvIDMgKSA9PT0gMTI7XG5cblx0XHRkb2N1bWVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoIGNvbnRhaW5lciApO1xuXG5cdFx0Ly8gTnVsbGlmeSB0aGUgZGl2IHNvIGl0IHdvdWxkbid0IGJlIHN0b3JlZCBpbiB0aGUgbWVtb3J5IGFuZFxuXHRcdC8vIGl0IHdpbGwgYWxzbyBiZSBhIHNpZ24gdGhhdCBjaGVja3MgYWxyZWFkeSBwZXJmb3JtZWRcblx0XHRkaXYgPSBudWxsO1xuXHR9XG5cblx0ZnVuY3Rpb24gcm91bmRQaXhlbE1lYXN1cmVzKCBtZWFzdXJlICkge1xuXHRcdHJldHVybiBNYXRoLnJvdW5kKCBwYXJzZUZsb2F0KCBtZWFzdXJlICkgKTtcblx0fVxuXG5cdHZhciBwaXhlbFBvc2l0aW9uVmFsLCBib3hTaXppbmdSZWxpYWJsZVZhbCwgc2Nyb2xsYm94U2l6ZVZhbCwgcGl4ZWxCb3hTdHlsZXNWYWwsXG5cdFx0cmVsaWFibGVUckRpbWVuc2lvbnNWYWwsIHJlbGlhYmxlTWFyZ2luTGVmdFZhbCxcblx0XHRjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiICksXG5cdFx0ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApO1xuXG5cdC8vIEZpbmlzaCBlYXJseSBpbiBsaW1pdGVkIChub24tYnJvd3NlcikgZW52aXJvbm1lbnRzXG5cdGlmICggIWRpdi5zdHlsZSApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSBvbmx5XG5cdC8vIFN0eWxlIG9mIGNsb25lZCBlbGVtZW50IGFmZmVjdHMgc291cmNlIGVsZW1lbnQgY2xvbmVkICgjODkwOClcblx0ZGl2LnN0eWxlLmJhY2tncm91bmRDbGlwID0gXCJjb250ZW50LWJveFwiO1xuXHRkaXYuY2xvbmVOb2RlKCB0cnVlICkuc3R5bGUuYmFja2dyb3VuZENsaXAgPSBcIlwiO1xuXHRzdXBwb3J0LmNsZWFyQ2xvbmVTdHlsZSA9IGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCA9PT0gXCJjb250ZW50LWJveFwiO1xuXG5cdGpRdWVyeS5leHRlbmQoIHN1cHBvcnQsIHtcblx0XHRib3hTaXppbmdSZWxpYWJsZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRjb21wdXRlU3R5bGVUZXN0cygpO1xuXHRcdFx0cmV0dXJuIGJveFNpemluZ1JlbGlhYmxlVmFsO1xuXHRcdH0sXG5cdFx0cGl4ZWxCb3hTdHlsZXM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29tcHV0ZVN0eWxlVGVzdHMoKTtcblx0XHRcdHJldHVybiBwaXhlbEJveFN0eWxlc1ZhbDtcblx0XHR9LFxuXHRcdHBpeGVsUG9zaXRpb246IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29tcHV0ZVN0eWxlVGVzdHMoKTtcblx0XHRcdHJldHVybiBwaXhlbFBvc2l0aW9uVmFsO1xuXHRcdH0sXG5cdFx0cmVsaWFibGVNYXJnaW5MZWZ0OiBmdW5jdGlvbigpIHtcblx0XHRcdGNvbXB1dGVTdHlsZVRlc3RzKCk7XG5cdFx0XHRyZXR1cm4gcmVsaWFibGVNYXJnaW5MZWZ0VmFsO1xuXHRcdH0sXG5cdFx0c2Nyb2xsYm94U2l6ZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRjb21wdXRlU3R5bGVUZXN0cygpO1xuXHRcdFx0cmV0dXJuIHNjcm9sbGJveFNpemVWYWw7XG5cdFx0fSxcblxuXHRcdC8vIFN1cHBvcnQ6IElFIDkgLSAxMSssIEVkZ2UgMTUgLSAxOCtcblx0XHQvLyBJRS9FZGdlIG1pc3JlcG9ydCBgZ2V0Q29tcHV0ZWRTdHlsZWAgb2YgdGFibGUgcm93cyB3aXRoIHdpZHRoL2hlaWdodFxuXHRcdC8vIHNldCBpbiBDU1Mgd2hpbGUgYG9mZnNldCpgIHByb3BlcnRpZXMgcmVwb3J0IGNvcnJlY3QgdmFsdWVzLlxuXHRcdC8vIEJlaGF2aW9yIGluIElFIDkgaXMgbW9yZSBzdWJ0bGUgdGhhbiBpbiBuZXdlciB2ZXJzaW9ucyAmIGl0IHBhc3Nlc1xuXHRcdC8vIHNvbWUgdmVyc2lvbnMgb2YgdGhpcyB0ZXN0OyBtYWtlIHN1cmUgbm90IHRvIG1ha2UgaXQgcGFzcyB0aGVyZSFcblx0XHQvL1xuXHRcdC8vIFN1cHBvcnQ6IEZpcmVmb3ggNzArXG5cdFx0Ly8gT25seSBGaXJlZm94IGluY2x1ZGVzIGJvcmRlciB3aWR0aHNcblx0XHQvLyBpbiBjb21wdXRlZCBkaW1lbnNpb25zLiAoZ2gtNDUyOSlcblx0XHRyZWxpYWJsZVRyRGltZW5zaW9uczogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdGFibGUsIHRyLCB0ckNoaWxkLCB0clN0eWxlO1xuXHRcdFx0aWYgKCByZWxpYWJsZVRyRGltZW5zaW9uc1ZhbCA9PSBudWxsICkge1xuXHRcdFx0XHR0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwidGFibGVcIiApO1xuXHRcdFx0XHR0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwidHJcIiApO1xuXHRcdFx0XHR0ckNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApO1xuXG5cdFx0XHRcdHRhYmxlLnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTExMTExcHg7Ym9yZGVyLWNvbGxhcHNlOnNlcGFyYXRlXCI7XG5cdFx0XHRcdHRyLnN0eWxlLmNzc1RleHQgPSBcImJvcmRlcjoxcHggc29saWRcIjtcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBDaHJvbWUgODYrXG5cdFx0XHRcdC8vIEhlaWdodCBzZXQgdGhyb3VnaCBjc3NUZXh0IGRvZXMgbm90IGdldCBhcHBsaWVkLlxuXHRcdFx0XHQvLyBDb21wdXRlZCBoZWlnaHQgdGhlbiBjb21lcyBiYWNrIGFzIDAuXG5cdFx0XHRcdHRyLnN0eWxlLmhlaWdodCA9IFwiMXB4XCI7XG5cdFx0XHRcdHRyQ2hpbGQuc3R5bGUuaGVpZ2h0ID0gXCI5cHhcIjtcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDggQ2hyb21lIDg2K1xuXHRcdFx0XHQvLyBJbiBvdXIgYm9keUJhY2tncm91bmQuaHRtbCBpZnJhbWUsXG5cdFx0XHRcdC8vIGRpc3BsYXkgZm9yIGFsbCBkaXYgZWxlbWVudHMgaXMgc2V0IHRvIFwiaW5saW5lXCIsXG5cdFx0XHRcdC8vIHdoaWNoIGNhdXNlcyBhIHByb2JsZW0gb25seSBpbiBBbmRyb2lkIDggQ2hyb21lIDg2LlxuXHRcdFx0XHQvLyBFbnN1cmluZyB0aGUgZGl2IGlzIGRpc3BsYXk6IGJsb2NrXG5cdFx0XHRcdC8vIGdldHMgYXJvdW5kIHRoaXMgaXNzdWUuXG5cdFx0XHRcdHRyQ2hpbGQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuXHRcdFx0XHRkb2N1bWVudEVsZW1lbnRcblx0XHRcdFx0XHQuYXBwZW5kQ2hpbGQoIHRhYmxlIClcblx0XHRcdFx0XHQuYXBwZW5kQ2hpbGQoIHRyIClcblx0XHRcdFx0XHQuYXBwZW5kQ2hpbGQoIHRyQ2hpbGQgKTtcblxuXHRcdFx0XHR0clN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoIHRyICk7XG5cdFx0XHRcdHJlbGlhYmxlVHJEaW1lbnNpb25zVmFsID0gKCBwYXJzZUludCggdHJTdHlsZS5oZWlnaHQsIDEwICkgK1xuXHRcdFx0XHRcdHBhcnNlSW50KCB0clN0eWxlLmJvcmRlclRvcFdpZHRoLCAxMCApICtcblx0XHRcdFx0XHRwYXJzZUludCggdHJTdHlsZS5ib3JkZXJCb3R0b21XaWR0aCwgMTAgKSApID09PSB0ci5vZmZzZXRIZWlnaHQ7XG5cblx0XHRcdFx0ZG9jdW1lbnRFbGVtZW50LnJlbW92ZUNoaWxkKCB0YWJsZSApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlbGlhYmxlVHJEaW1lbnNpb25zVmFsO1xuXHRcdH1cblx0fSApO1xufSApKCk7XG5cblxuZnVuY3Rpb24gY3VyQ1NTKCBlbGVtLCBuYW1lLCBjb21wdXRlZCApIHtcblx0dmFyIHdpZHRoLCBtaW5XaWR0aCwgbWF4V2lkdGgsIHJldCxcblxuXHRcdC8vIFN1cHBvcnQ6IEZpcmVmb3ggNTErXG5cdFx0Ly8gUmV0cmlldmluZyBzdHlsZSBiZWZvcmUgY29tcHV0ZWQgc29tZWhvd1xuXHRcdC8vIGZpeGVzIGFuIGlzc3VlIHdpdGggZ2V0dGluZyB3cm9uZyB2YWx1ZXNcblx0XHQvLyBvbiBkZXRhY2hlZCBlbGVtZW50c1xuXHRcdHN0eWxlID0gZWxlbS5zdHlsZTtcblxuXHRjb21wdXRlZCA9IGNvbXB1dGVkIHx8IGdldFN0eWxlcyggZWxlbSApO1xuXG5cdC8vIGdldFByb3BlcnR5VmFsdWUgaXMgbmVlZGVkIGZvcjpcblx0Ly8gICAuY3NzKCdmaWx0ZXInKSAoSUUgOSBvbmx5LCAjMTI1MzcpXG5cdC8vICAgLmNzcygnLS1jdXN0b21Qcm9wZXJ0eSkgKCMzMTQ0KVxuXHRpZiAoIGNvbXB1dGVkICkge1xuXHRcdHJldCA9IGNvbXB1dGVkLmdldFByb3BlcnR5VmFsdWUoIG5hbWUgKSB8fCBjb21wdXRlZFsgbmFtZSBdO1xuXG5cdFx0aWYgKCByZXQgPT09IFwiXCIgJiYgIWlzQXR0YWNoZWQoIGVsZW0gKSApIHtcblx0XHRcdHJldCA9IGpRdWVyeS5zdHlsZSggZWxlbSwgbmFtZSApO1xuXHRcdH1cblxuXHRcdC8vIEEgdHJpYnV0ZSB0byB0aGUgXCJhd2Vzb21lIGhhY2sgYnkgRGVhbiBFZHdhcmRzXCJcblx0XHQvLyBBbmRyb2lkIEJyb3dzZXIgcmV0dXJucyBwZXJjZW50YWdlIGZvciBzb21lIHZhbHVlcyxcblx0XHQvLyBidXQgd2lkdGggc2VlbXMgdG8gYmUgcmVsaWFibHkgcGl4ZWxzLlxuXHRcdC8vIFRoaXMgaXMgYWdhaW5zdCB0aGUgQ1NTT00gZHJhZnQgc3BlYzpcblx0XHQvLyBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3Nzb20vI3Jlc29sdmVkLXZhbHVlc1xuXHRcdGlmICggIXN1cHBvcnQucGl4ZWxCb3hTdHlsZXMoKSAmJiBybnVtbm9ucHgudGVzdCggcmV0ICkgJiYgcmJveFN0eWxlLnRlc3QoIG5hbWUgKSApIHtcblxuXHRcdFx0Ly8gUmVtZW1iZXIgdGhlIG9yaWdpbmFsIHZhbHVlc1xuXHRcdFx0d2lkdGggPSBzdHlsZS53aWR0aDtcblx0XHRcdG1pbldpZHRoID0gc3R5bGUubWluV2lkdGg7XG5cdFx0XHRtYXhXaWR0aCA9IHN0eWxlLm1heFdpZHRoO1xuXG5cdFx0XHQvLyBQdXQgaW4gdGhlIG5ldyB2YWx1ZXMgdG8gZ2V0IGEgY29tcHV0ZWQgdmFsdWUgb3V0XG5cdFx0XHRzdHlsZS5taW5XaWR0aCA9IHN0eWxlLm1heFdpZHRoID0gc3R5bGUud2lkdGggPSByZXQ7XG5cdFx0XHRyZXQgPSBjb21wdXRlZC53aWR0aDtcblxuXHRcdFx0Ly8gUmV2ZXJ0IHRoZSBjaGFuZ2VkIHZhbHVlc1xuXHRcdFx0c3R5bGUud2lkdGggPSB3aWR0aDtcblx0XHRcdHN0eWxlLm1pbldpZHRoID0gbWluV2lkdGg7XG5cdFx0XHRzdHlsZS5tYXhXaWR0aCA9IG1heFdpZHRoO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXQgIT09IHVuZGVmaW5lZCA/XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSBvbmx5XG5cdFx0Ly8gSUUgcmV0dXJucyB6SW5kZXggdmFsdWUgYXMgYW4gaW50ZWdlci5cblx0XHRyZXQgKyBcIlwiIDpcblx0XHRyZXQ7XG59XG5cblxuZnVuY3Rpb24gYWRkR2V0SG9va0lmKCBjb25kaXRpb25GbiwgaG9va0ZuICkge1xuXG5cdC8vIERlZmluZSB0aGUgaG9vaywgd2UnbGwgY2hlY2sgb24gdGhlIGZpcnN0IHJ1biBpZiBpdCdzIHJlYWxseSBuZWVkZWQuXG5cdHJldHVybiB7XG5cdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdGlmICggY29uZGl0aW9uRm4oKSApIHtcblxuXHRcdFx0XHQvLyBIb29rIG5vdCBuZWVkZWQgKG9yIGl0J3Mgbm90IHBvc3NpYmxlIHRvIHVzZSBpdCBkdWVcblx0XHRcdFx0Ly8gdG8gbWlzc2luZyBkZXBlbmRlbmN5KSwgcmVtb3ZlIGl0LlxuXHRcdFx0XHRkZWxldGUgdGhpcy5nZXQ7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSG9vayBuZWVkZWQ7IHJlZGVmaW5lIGl0IHNvIHRoYXQgdGhlIHN1cHBvcnQgdGVzdCBpcyBub3QgZXhlY3V0ZWQgYWdhaW4uXG5cdFx0XHRyZXR1cm4gKCB0aGlzLmdldCA9IGhvb2tGbiApLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHR9XG5cdH07XG59XG5cblxudmFyIGNzc1ByZWZpeGVzID0gWyBcIldlYmtpdFwiLCBcIk1velwiLCBcIm1zXCIgXSxcblx0ZW1wdHlTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKS5zdHlsZSxcblx0dmVuZG9yUHJvcHMgPSB7fTtcblxuLy8gUmV0dXJuIGEgdmVuZG9yLXByZWZpeGVkIHByb3BlcnR5IG9yIHVuZGVmaW5lZFxuZnVuY3Rpb24gdmVuZG9yUHJvcE5hbWUoIG5hbWUgKSB7XG5cblx0Ly8gQ2hlY2sgZm9yIHZlbmRvciBwcmVmaXhlZCBuYW1lc1xuXHR2YXIgY2FwTmFtZSA9IG5hbWVbIDAgXS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSggMSApLFxuXHRcdGkgPSBjc3NQcmVmaXhlcy5sZW5ndGg7XG5cblx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0bmFtZSA9IGNzc1ByZWZpeGVzWyBpIF0gKyBjYXBOYW1lO1xuXHRcdGlmICggbmFtZSBpbiBlbXB0eVN0eWxlICkge1xuXHRcdFx0cmV0dXJuIG5hbWU7XG5cdFx0fVxuXHR9XG59XG5cbi8vIFJldHVybiBhIHBvdGVudGlhbGx5LW1hcHBlZCBqUXVlcnkuY3NzUHJvcHMgb3IgdmVuZG9yIHByZWZpeGVkIHByb3BlcnR5XG5mdW5jdGlvbiBmaW5hbFByb3BOYW1lKCBuYW1lICkge1xuXHR2YXIgZmluYWwgPSBqUXVlcnkuY3NzUHJvcHNbIG5hbWUgXSB8fCB2ZW5kb3JQcm9wc1sgbmFtZSBdO1xuXG5cdGlmICggZmluYWwgKSB7XG5cdFx0cmV0dXJuIGZpbmFsO1xuXHR9XG5cdGlmICggbmFtZSBpbiBlbXB0eVN0eWxlICkge1xuXHRcdHJldHVybiBuYW1lO1xuXHR9XG5cdHJldHVybiB2ZW5kb3JQcm9wc1sgbmFtZSBdID0gdmVuZG9yUHJvcE5hbWUoIG5hbWUgKSB8fCBuYW1lO1xufVxuXG5cbnZhclxuXG5cdC8vIFN3YXBwYWJsZSBpZiBkaXNwbGF5IGlzIG5vbmUgb3Igc3RhcnRzIHdpdGggdGFibGVcblx0Ly8gZXhjZXB0IFwidGFibGVcIiwgXCJ0YWJsZS1jZWxsXCIsIG9yIFwidGFibGUtY2FwdGlvblwiXG5cdC8vIFNlZSBoZXJlIGZvciBkaXNwbGF5IHZhbHVlczogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9DU1MvZGlzcGxheVxuXHRyZGlzcGxheXN3YXAgPSAvXihub25lfHRhYmxlKD8hLWNbZWFdKS4rKS8sXG5cdHJjdXN0b21Qcm9wID0gL14tLS8sXG5cdGNzc1Nob3cgPSB7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHZpc2liaWxpdHk6IFwiaGlkZGVuXCIsIGRpc3BsYXk6IFwiYmxvY2tcIiB9LFxuXHRjc3NOb3JtYWxUcmFuc2Zvcm0gPSB7XG5cdFx0bGV0dGVyU3BhY2luZzogXCIwXCIsXG5cdFx0Zm9udFdlaWdodDogXCI0MDBcIlxuXHR9O1xuXG5mdW5jdGlvbiBzZXRQb3NpdGl2ZU51bWJlciggX2VsZW0sIHZhbHVlLCBzdWJ0cmFjdCApIHtcblxuXHQvLyBBbnkgcmVsYXRpdmUgKCsvLSkgdmFsdWVzIGhhdmUgYWxyZWFkeSBiZWVuXG5cdC8vIG5vcm1hbGl6ZWQgYXQgdGhpcyBwb2ludFxuXHR2YXIgbWF0Y2hlcyA9IHJjc3NOdW0uZXhlYyggdmFsdWUgKTtcblx0cmV0dXJuIG1hdGNoZXMgP1xuXG5cdFx0Ly8gR3VhcmQgYWdhaW5zdCB1bmRlZmluZWQgXCJzdWJ0cmFjdFwiLCBlLmcuLCB3aGVuIHVzZWQgYXMgaW4gY3NzSG9va3Ncblx0XHRNYXRoLm1heCggMCwgbWF0Y2hlc1sgMiBdIC0gKCBzdWJ0cmFjdCB8fCAwICkgKSArICggbWF0Y2hlc1sgMyBdIHx8IFwicHhcIiApIDpcblx0XHR2YWx1ZTtcbn1cblxuZnVuY3Rpb24gYm94TW9kZWxBZGp1c3RtZW50KCBlbGVtLCBkaW1lbnNpb24sIGJveCwgaXNCb3JkZXJCb3gsIHN0eWxlcywgY29tcHV0ZWRWYWwgKSB7XG5cdHZhciBpID0gZGltZW5zaW9uID09PSBcIndpZHRoXCIgPyAxIDogMCxcblx0XHRleHRyYSA9IDAsXG5cdFx0ZGVsdGEgPSAwO1xuXG5cdC8vIEFkanVzdG1lbnQgbWF5IG5vdCBiZSBuZWNlc3Nhcnlcblx0aWYgKCBib3ggPT09ICggaXNCb3JkZXJCb3ggPyBcImJvcmRlclwiIDogXCJjb250ZW50XCIgKSApIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdGZvciAoIDsgaSA8IDQ7IGkgKz0gMiApIHtcblxuXHRcdC8vIEJvdGggYm94IG1vZGVscyBleGNsdWRlIG1hcmdpblxuXHRcdGlmICggYm94ID09PSBcIm1hcmdpblwiICkge1xuXHRcdFx0ZGVsdGEgKz0galF1ZXJ5LmNzcyggZWxlbSwgYm94ICsgY3NzRXhwYW5kWyBpIF0sIHRydWUsIHN0eWxlcyApO1xuXHRcdH1cblxuXHRcdC8vIElmIHdlIGdldCBoZXJlIHdpdGggYSBjb250ZW50LWJveCwgd2UncmUgc2Vla2luZyBcInBhZGRpbmdcIiBvciBcImJvcmRlclwiIG9yIFwibWFyZ2luXCJcblx0XHRpZiAoICFpc0JvcmRlckJveCApIHtcblxuXHRcdFx0Ly8gQWRkIHBhZGRpbmdcblx0XHRcdGRlbHRhICs9IGpRdWVyeS5jc3MoIGVsZW0sIFwicGFkZGluZ1wiICsgY3NzRXhwYW5kWyBpIF0sIHRydWUsIHN0eWxlcyApO1xuXG5cdFx0XHQvLyBGb3IgXCJib3JkZXJcIiBvciBcIm1hcmdpblwiLCBhZGQgYm9yZGVyXG5cdFx0XHRpZiAoIGJveCAhPT0gXCJwYWRkaW5nXCIgKSB7XG5cdFx0XHRcdGRlbHRhICs9IGpRdWVyeS5jc3MoIGVsZW0sIFwiYm9yZGVyXCIgKyBjc3NFeHBhbmRbIGkgXSArIFwiV2lkdGhcIiwgdHJ1ZSwgc3R5bGVzICk7XG5cblx0XHRcdC8vIEJ1dCBzdGlsbCBrZWVwIHRyYWNrIG9mIGl0IG90aGVyd2lzZVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZXh0cmEgKz0galF1ZXJ5LmNzcyggZWxlbSwgXCJib3JkZXJcIiArIGNzc0V4cGFuZFsgaSBdICsgXCJXaWR0aFwiLCB0cnVlLCBzdHlsZXMgKTtcblx0XHRcdH1cblxuXHRcdC8vIElmIHdlIGdldCBoZXJlIHdpdGggYSBib3JkZXItYm94IChjb250ZW50ICsgcGFkZGluZyArIGJvcmRlciksIHdlJ3JlIHNlZWtpbmcgXCJjb250ZW50XCIgb3Jcblx0XHQvLyBcInBhZGRpbmdcIiBvciBcIm1hcmdpblwiXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gRm9yIFwiY29udGVudFwiLCBzdWJ0cmFjdCBwYWRkaW5nXG5cdFx0XHRpZiAoIGJveCA9PT0gXCJjb250ZW50XCIgKSB7XG5cdFx0XHRcdGRlbHRhIC09IGpRdWVyeS5jc3MoIGVsZW0sIFwicGFkZGluZ1wiICsgY3NzRXhwYW5kWyBpIF0sIHRydWUsIHN0eWxlcyApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBGb3IgXCJjb250ZW50XCIgb3IgXCJwYWRkaW5nXCIsIHN1YnRyYWN0IGJvcmRlclxuXHRcdFx0aWYgKCBib3ggIT09IFwibWFyZ2luXCIgKSB7XG5cdFx0XHRcdGRlbHRhIC09IGpRdWVyeS5jc3MoIGVsZW0sIFwiYm9yZGVyXCIgKyBjc3NFeHBhbmRbIGkgXSArIFwiV2lkdGhcIiwgdHJ1ZSwgc3R5bGVzICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gQWNjb3VudCBmb3IgcG9zaXRpdmUgY29udGVudC1ib3ggc2Nyb2xsIGd1dHRlciB3aGVuIHJlcXVlc3RlZCBieSBwcm92aWRpbmcgY29tcHV0ZWRWYWxcblx0aWYgKCAhaXNCb3JkZXJCb3ggJiYgY29tcHV0ZWRWYWwgPj0gMCApIHtcblxuXHRcdC8vIG9mZnNldFdpZHRoL29mZnNldEhlaWdodCBpcyBhIHJvdW5kZWQgc3VtIG9mIGNvbnRlbnQsIHBhZGRpbmcsIHNjcm9sbCBndXR0ZXIsIGFuZCBib3JkZXJcblx0XHQvLyBBc3N1bWluZyBpbnRlZ2VyIHNjcm9sbCBndXR0ZXIsIHN1YnRyYWN0IHRoZSByZXN0IGFuZCByb3VuZCBkb3duXG5cdFx0ZGVsdGEgKz0gTWF0aC5tYXgoIDAsIE1hdGguY2VpbChcblx0XHRcdGVsZW1bIFwib2Zmc2V0XCIgKyBkaW1lbnNpb25bIDAgXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKCAxICkgXSAtXG5cdFx0XHRjb21wdXRlZFZhbCAtXG5cdFx0XHRkZWx0YSAtXG5cdFx0XHRleHRyYSAtXG5cdFx0XHQwLjVcblxuXHRcdC8vIElmIG9mZnNldFdpZHRoL29mZnNldEhlaWdodCBpcyB1bmtub3duLCB0aGVuIHdlIGNhbid0IGRldGVybWluZSBjb250ZW50LWJveCBzY3JvbGwgZ3V0dGVyXG5cdFx0Ly8gVXNlIGFuIGV4cGxpY2l0IHplcm8gdG8gYXZvaWQgTmFOIChnaC0zOTY0KVxuXHRcdCkgKSB8fCAwO1xuXHR9XG5cblx0cmV0dXJuIGRlbHRhO1xufVxuXG5mdW5jdGlvbiBnZXRXaWR0aE9ySGVpZ2h0KCBlbGVtLCBkaW1lbnNpb24sIGV4dHJhICkge1xuXG5cdC8vIFN0YXJ0IHdpdGggY29tcHV0ZWQgc3R5bGVcblx0dmFyIHN0eWxlcyA9IGdldFN0eWxlcyggZWxlbSApLFxuXG5cdFx0Ly8gVG8gYXZvaWQgZm9yY2luZyBhIHJlZmxvdywgb25seSBmZXRjaCBib3hTaXppbmcgaWYgd2UgbmVlZCBpdCAoZ2gtNDMyMikuXG5cdFx0Ly8gRmFrZSBjb250ZW50LWJveCB1bnRpbCB3ZSBrbm93IGl0J3MgbmVlZGVkIHRvIGtub3cgdGhlIHRydWUgdmFsdWUuXG5cdFx0Ym94U2l6aW5nTmVlZGVkID0gIXN1cHBvcnQuYm94U2l6aW5nUmVsaWFibGUoKSB8fCBleHRyYSxcblx0XHRpc0JvcmRlckJveCA9IGJveFNpemluZ05lZWRlZCAmJlxuXHRcdFx0alF1ZXJ5LmNzcyggZWxlbSwgXCJib3hTaXppbmdcIiwgZmFsc2UsIHN0eWxlcyApID09PSBcImJvcmRlci1ib3hcIixcblx0XHR2YWx1ZUlzQm9yZGVyQm94ID0gaXNCb3JkZXJCb3gsXG5cblx0XHR2YWwgPSBjdXJDU1MoIGVsZW0sIGRpbWVuc2lvbiwgc3R5bGVzICksXG5cdFx0b2Zmc2V0UHJvcCA9IFwib2Zmc2V0XCIgKyBkaW1lbnNpb25bIDAgXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKCAxICk7XG5cblx0Ly8gU3VwcG9ydDogRmlyZWZveCA8PTU0XG5cdC8vIFJldHVybiBhIGNvbmZvdW5kaW5nIG5vbi1waXhlbCB2YWx1ZSBvciBmZWlnbiBpZ25vcmFuY2UsIGFzIGFwcHJvcHJpYXRlLlxuXHRpZiAoIHJudW1ub25weC50ZXN0KCB2YWwgKSApIHtcblx0XHRpZiAoICFleHRyYSApIHtcblx0XHRcdHJldHVybiB2YWw7XG5cdFx0fVxuXHRcdHZhbCA9IFwiYXV0b1wiO1xuXHR9XG5cblxuXHQvLyBTdXBwb3J0OiBJRSA5IC0gMTEgb25seVxuXHQvLyBVc2Ugb2Zmc2V0V2lkdGgvb2Zmc2V0SGVpZ2h0IGZvciB3aGVuIGJveCBzaXppbmcgaXMgdW5yZWxpYWJsZS5cblx0Ly8gSW4gdGhvc2UgY2FzZXMsIHRoZSBjb21wdXRlZCB2YWx1ZSBjYW4gYmUgdHJ1c3RlZCB0byBiZSBib3JkZXItYm94LlxuXHRpZiAoICggIXN1cHBvcnQuYm94U2l6aW5nUmVsaWFibGUoKSAmJiBpc0JvcmRlckJveCB8fFxuXG5cdFx0Ly8gU3VwcG9ydDogSUUgMTAgLSAxMSssIEVkZ2UgMTUgLSAxOCtcblx0XHQvLyBJRS9FZGdlIG1pc3JlcG9ydCBgZ2V0Q29tcHV0ZWRTdHlsZWAgb2YgdGFibGUgcm93cyB3aXRoIHdpZHRoL2hlaWdodFxuXHRcdC8vIHNldCBpbiBDU1Mgd2hpbGUgYG9mZnNldCpgIHByb3BlcnRpZXMgcmVwb3J0IGNvcnJlY3QgdmFsdWVzLlxuXHRcdC8vIEludGVyZXN0aW5nbHksIGluIHNvbWUgY2FzZXMgSUUgOSBkb2Vzbid0IHN1ZmZlciBmcm9tIHRoaXMgaXNzdWUuXG5cdFx0IXN1cHBvcnQucmVsaWFibGVUckRpbWVuc2lvbnMoKSAmJiBub2RlTmFtZSggZWxlbSwgXCJ0clwiICkgfHxcblxuXHRcdC8vIEZhbGwgYmFjayB0byBvZmZzZXRXaWR0aC9vZmZzZXRIZWlnaHQgd2hlbiB2YWx1ZSBpcyBcImF1dG9cIlxuXHRcdC8vIFRoaXMgaGFwcGVucyBmb3IgaW5saW5lIGVsZW1lbnRzIHdpdGggbm8gZXhwbGljaXQgc2V0dGluZyAoZ2gtMzU3MSlcblx0XHR2YWwgPT09IFwiYXV0b1wiIHx8XG5cblx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4xIC0gNC4zIG9ubHlcblx0XHQvLyBBbHNvIHVzZSBvZmZzZXRXaWR0aC9vZmZzZXRIZWlnaHQgZm9yIG1pc3JlcG9ydGVkIGlubGluZSBkaW1lbnNpb25zIChnaC0zNjAyKVxuXHRcdCFwYXJzZUZsb2F0KCB2YWwgKSAmJiBqUXVlcnkuY3NzKCBlbGVtLCBcImRpc3BsYXlcIiwgZmFsc2UsIHN0eWxlcyApID09PSBcImlubGluZVwiICkgJiZcblxuXHRcdC8vIE1ha2Ugc3VyZSB0aGUgZWxlbWVudCBpcyB2aXNpYmxlICYgY29ubmVjdGVkXG5cdFx0ZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCApIHtcblxuXHRcdGlzQm9yZGVyQm94ID0galF1ZXJ5LmNzcyggZWxlbSwgXCJib3hTaXppbmdcIiwgZmFsc2UsIHN0eWxlcyApID09PSBcImJvcmRlci1ib3hcIjtcblxuXHRcdC8vIFdoZXJlIGF2YWlsYWJsZSwgb2Zmc2V0V2lkdGgvb2Zmc2V0SGVpZ2h0IGFwcHJveGltYXRlIGJvcmRlciBib3ggZGltZW5zaW9ucy5cblx0XHQvLyBXaGVyZSBub3QgYXZhaWxhYmxlIChlLmcuLCBTVkcpLCBhc3N1bWUgdW5yZWxpYWJsZSBib3gtc2l6aW5nIGFuZCBpbnRlcnByZXQgdGhlXG5cdFx0Ly8gcmV0cmlldmVkIHZhbHVlIGFzIGEgY29udGVudCBib3ggZGltZW5zaW9uLlxuXHRcdHZhbHVlSXNCb3JkZXJCb3ggPSBvZmZzZXRQcm9wIGluIGVsZW07XG5cdFx0aWYgKCB2YWx1ZUlzQm9yZGVyQm94ICkge1xuXHRcdFx0dmFsID0gZWxlbVsgb2Zmc2V0UHJvcCBdO1xuXHRcdH1cblx0fVxuXG5cdC8vIE5vcm1hbGl6ZSBcIlwiIGFuZCBhdXRvXG5cdHZhbCA9IHBhcnNlRmxvYXQoIHZhbCApIHx8IDA7XG5cblx0Ly8gQWRqdXN0IGZvciB0aGUgZWxlbWVudCdzIGJveCBtb2RlbFxuXHRyZXR1cm4gKCB2YWwgK1xuXHRcdGJveE1vZGVsQWRqdXN0bWVudChcblx0XHRcdGVsZW0sXG5cdFx0XHRkaW1lbnNpb24sXG5cdFx0XHRleHRyYSB8fCAoIGlzQm9yZGVyQm94ID8gXCJib3JkZXJcIiA6IFwiY29udGVudFwiICksXG5cdFx0XHR2YWx1ZUlzQm9yZGVyQm94LFxuXHRcdFx0c3R5bGVzLFxuXG5cdFx0XHQvLyBQcm92aWRlIHRoZSBjdXJyZW50IGNvbXB1dGVkIHNpemUgdG8gcmVxdWVzdCBzY3JvbGwgZ3V0dGVyIGNhbGN1bGF0aW9uIChnaC0zNTg5KVxuXHRcdFx0dmFsXG5cdFx0KVxuXHQpICsgXCJweFwiO1xufVxuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cblx0Ly8gQWRkIGluIHN0eWxlIHByb3BlcnR5IGhvb2tzIGZvciBvdmVycmlkaW5nIHRoZSBkZWZhdWx0XG5cdC8vIGJlaGF2aW9yIG9mIGdldHRpbmcgYW5kIHNldHRpbmcgYSBzdHlsZSBwcm9wZXJ0eVxuXHRjc3NIb29rczoge1xuXHRcdG9wYWNpdHk6IHtcblx0XHRcdGdldDogZnVuY3Rpb24oIGVsZW0sIGNvbXB1dGVkICkge1xuXHRcdFx0XHRpZiAoIGNvbXB1dGVkICkge1xuXG5cdFx0XHRcdFx0Ly8gV2Ugc2hvdWxkIGFsd2F5cyBnZXQgYSBudW1iZXIgYmFjayBmcm9tIG9wYWNpdHlcblx0XHRcdFx0XHR2YXIgcmV0ID0gY3VyQ1NTKCBlbGVtLCBcIm9wYWNpdHlcIiApO1xuXHRcdFx0XHRcdHJldHVybiByZXQgPT09IFwiXCIgPyBcIjFcIiA6IHJldDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHQvLyBEb24ndCBhdXRvbWF0aWNhbGx5IGFkZCBcInB4XCIgdG8gdGhlc2UgcG9zc2libHktdW5pdGxlc3MgcHJvcGVydGllc1xuXHRjc3NOdW1iZXI6IHtcblx0XHRcImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50XCI6IHRydWUsXG5cdFx0XCJjb2x1bW5Db3VudFwiOiB0cnVlLFxuXHRcdFwiZmlsbE9wYWNpdHlcIjogdHJ1ZSxcblx0XHRcImZsZXhHcm93XCI6IHRydWUsXG5cdFx0XCJmbGV4U2hyaW5rXCI6IHRydWUsXG5cdFx0XCJmb250V2VpZ2h0XCI6IHRydWUsXG5cdFx0XCJncmlkQXJlYVwiOiB0cnVlLFxuXHRcdFwiZ3JpZENvbHVtblwiOiB0cnVlLFxuXHRcdFwiZ3JpZENvbHVtbkVuZFwiOiB0cnVlLFxuXHRcdFwiZ3JpZENvbHVtblN0YXJ0XCI6IHRydWUsXG5cdFx0XCJncmlkUm93XCI6IHRydWUsXG5cdFx0XCJncmlkUm93RW5kXCI6IHRydWUsXG5cdFx0XCJncmlkUm93U3RhcnRcIjogdHJ1ZSxcblx0XHRcImxpbmVIZWlnaHRcIjogdHJ1ZSxcblx0XHRcIm9wYWNpdHlcIjogdHJ1ZSxcblx0XHRcIm9yZGVyXCI6IHRydWUsXG5cdFx0XCJvcnBoYW5zXCI6IHRydWUsXG5cdFx0XCJ3aWRvd3NcIjogdHJ1ZSxcblx0XHRcInpJbmRleFwiOiB0cnVlLFxuXHRcdFwiem9vbVwiOiB0cnVlXG5cdH0sXG5cblx0Ly8gQWRkIGluIHByb3BlcnRpZXMgd2hvc2UgbmFtZXMgeW91IHdpc2ggdG8gZml4IGJlZm9yZVxuXHQvLyBzZXR0aW5nIG9yIGdldHRpbmcgdGhlIHZhbHVlXG5cdGNzc1Byb3BzOiB7fSxcblxuXHQvLyBHZXQgYW5kIHNldCB0aGUgc3R5bGUgcHJvcGVydHkgb24gYSBET00gTm9kZVxuXHRzdHlsZTogZnVuY3Rpb24oIGVsZW0sIG5hbWUsIHZhbHVlLCBleHRyYSApIHtcblxuXHRcdC8vIERvbid0IHNldCBzdHlsZXMgb24gdGV4dCBhbmQgY29tbWVudCBub2Rlc1xuXHRcdGlmICggIWVsZW0gfHwgZWxlbS5ub2RlVHlwZSA9PT0gMyB8fCBlbGVtLm5vZGVUeXBlID09PSA4IHx8ICFlbGVtLnN0eWxlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIE1ha2Ugc3VyZSB0aGF0IHdlJ3JlIHdvcmtpbmcgd2l0aCB0aGUgcmlnaHQgbmFtZVxuXHRcdHZhciByZXQsIHR5cGUsIGhvb2tzLFxuXHRcdFx0b3JpZ05hbWUgPSBjYW1lbENhc2UoIG5hbWUgKSxcblx0XHRcdGlzQ3VzdG9tUHJvcCA9IHJjdXN0b21Qcm9wLnRlc3QoIG5hbWUgKSxcblx0XHRcdHN0eWxlID0gZWxlbS5zdHlsZTtcblxuXHRcdC8vIE1ha2Ugc3VyZSB0aGF0IHdlJ3JlIHdvcmtpbmcgd2l0aCB0aGUgcmlnaHQgbmFtZS4gV2UgZG9uJ3Rcblx0XHQvLyB3YW50IHRvIHF1ZXJ5IHRoZSB2YWx1ZSBpZiBpdCBpcyBhIENTUyBjdXN0b20gcHJvcGVydHlcblx0XHQvLyBzaW5jZSB0aGV5IGFyZSB1c2VyLWRlZmluZWQuXG5cdFx0aWYgKCAhaXNDdXN0b21Qcm9wICkge1xuXHRcdFx0bmFtZSA9IGZpbmFsUHJvcE5hbWUoIG9yaWdOYW1lICk7XG5cdFx0fVxuXG5cdFx0Ly8gR2V0cyBob29rIGZvciB0aGUgcHJlZml4ZWQgdmVyc2lvbiwgdGhlbiB1bnByZWZpeGVkIHZlcnNpb25cblx0XHRob29rcyA9IGpRdWVyeS5jc3NIb29rc1sgbmFtZSBdIHx8IGpRdWVyeS5jc3NIb29rc1sgb3JpZ05hbWUgXTtcblxuXHRcdC8vIENoZWNrIGlmIHdlJ3JlIHNldHRpbmcgYSB2YWx1ZVxuXHRcdGlmICggdmFsdWUgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdHR5cGUgPSB0eXBlb2YgdmFsdWU7XG5cblx0XHRcdC8vIENvbnZlcnQgXCIrPVwiIG9yIFwiLT1cIiB0byByZWxhdGl2ZSBudW1iZXJzICgjNzM0NSlcblx0XHRcdGlmICggdHlwZSA9PT0gXCJzdHJpbmdcIiAmJiAoIHJldCA9IHJjc3NOdW0uZXhlYyggdmFsdWUgKSApICYmIHJldFsgMSBdICkge1xuXHRcdFx0XHR2YWx1ZSA9IGFkanVzdENTUyggZWxlbSwgbmFtZSwgcmV0ICk7XG5cblx0XHRcdFx0Ly8gRml4ZXMgYnVnICM5MjM3XG5cdFx0XHRcdHR5cGUgPSBcIm51bWJlclwiO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBNYWtlIHN1cmUgdGhhdCBudWxsIGFuZCBOYU4gdmFsdWVzIGFyZW4ndCBzZXQgKCM3MTE2KVxuXHRcdFx0aWYgKCB2YWx1ZSA9PSBudWxsIHx8IHZhbHVlICE9PSB2YWx1ZSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiBhIG51bWJlciB3YXMgcGFzc2VkIGluLCBhZGQgdGhlIHVuaXQgKGV4Y2VwdCBmb3IgY2VydGFpbiBDU1MgcHJvcGVydGllcylcblx0XHRcdC8vIFRoZSBpc0N1c3RvbVByb3AgY2hlY2sgY2FuIGJlIHJlbW92ZWQgaW4galF1ZXJ5IDQuMCB3aGVuIHdlIG9ubHkgYXV0by1hcHBlbmRcblx0XHRcdC8vIFwicHhcIiB0byBhIGZldyBoYXJkY29kZWQgdmFsdWVzLlxuXHRcdFx0aWYgKCB0eXBlID09PSBcIm51bWJlclwiICYmICFpc0N1c3RvbVByb3AgKSB7XG5cdFx0XHRcdHZhbHVlICs9IHJldCAmJiByZXRbIDMgXSB8fCAoIGpRdWVyeS5jc3NOdW1iZXJbIG9yaWdOYW1lIF0gPyBcIlwiIDogXCJweFwiICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGJhY2tncm91bmQtKiBwcm9wcyBhZmZlY3Qgb3JpZ2luYWwgY2xvbmUncyB2YWx1ZXNcblx0XHRcdGlmICggIXN1cHBvcnQuY2xlYXJDbG9uZVN0eWxlICYmIHZhbHVlID09PSBcIlwiICYmIG5hbWUuaW5kZXhPZiggXCJiYWNrZ3JvdW5kXCIgKSA9PT0gMCApIHtcblx0XHRcdFx0c3R5bGVbIG5hbWUgXSA9IFwiaW5oZXJpdFwiO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiBhIGhvb2sgd2FzIHByb3ZpZGVkLCB1c2UgdGhhdCB2YWx1ZSwgb3RoZXJ3aXNlIGp1c3Qgc2V0IHRoZSBzcGVjaWZpZWQgdmFsdWVcblx0XHRcdGlmICggIWhvb2tzIHx8ICEoIFwic2V0XCIgaW4gaG9va3MgKSB8fFxuXHRcdFx0XHQoIHZhbHVlID0gaG9va3Muc2V0KCBlbGVtLCB2YWx1ZSwgZXh0cmEgKSApICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0aWYgKCBpc0N1c3RvbVByb3AgKSB7XG5cdFx0XHRcdFx0c3R5bGUuc2V0UHJvcGVydHkoIG5hbWUsIHZhbHVlICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c3R5bGVbIG5hbWUgXSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyBJZiBhIGhvb2sgd2FzIHByb3ZpZGVkIGdldCB0aGUgbm9uLWNvbXB1dGVkIHZhbHVlIGZyb20gdGhlcmVcblx0XHRcdGlmICggaG9va3MgJiYgXCJnZXRcIiBpbiBob29rcyAmJlxuXHRcdFx0XHQoIHJldCA9IGhvb2tzLmdldCggZWxlbSwgZmFsc2UsIGV4dHJhICkgKSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE90aGVyd2lzZSBqdXN0IGdldCB0aGUgdmFsdWUgZnJvbSB0aGUgc3R5bGUgb2JqZWN0XG5cdFx0XHRyZXR1cm4gc3R5bGVbIG5hbWUgXTtcblx0XHR9XG5cdH0sXG5cblx0Y3NzOiBmdW5jdGlvbiggZWxlbSwgbmFtZSwgZXh0cmEsIHN0eWxlcyApIHtcblx0XHR2YXIgdmFsLCBudW0sIGhvb2tzLFxuXHRcdFx0b3JpZ05hbWUgPSBjYW1lbENhc2UoIG5hbWUgKSxcblx0XHRcdGlzQ3VzdG9tUHJvcCA9IHJjdXN0b21Qcm9wLnRlc3QoIG5hbWUgKTtcblxuXHRcdC8vIE1ha2Ugc3VyZSB0aGF0IHdlJ3JlIHdvcmtpbmcgd2l0aCB0aGUgcmlnaHQgbmFtZS4gV2UgZG9uJ3Rcblx0XHQvLyB3YW50IHRvIG1vZGlmeSB0aGUgdmFsdWUgaWYgaXQgaXMgYSBDU1MgY3VzdG9tIHByb3BlcnR5XG5cdFx0Ly8gc2luY2UgdGhleSBhcmUgdXNlci1kZWZpbmVkLlxuXHRcdGlmICggIWlzQ3VzdG9tUHJvcCApIHtcblx0XHRcdG5hbWUgPSBmaW5hbFByb3BOYW1lKCBvcmlnTmFtZSApO1xuXHRcdH1cblxuXHRcdC8vIFRyeSBwcmVmaXhlZCBuYW1lIGZvbGxvd2VkIGJ5IHRoZSB1bnByZWZpeGVkIG5hbWVcblx0XHRob29rcyA9IGpRdWVyeS5jc3NIb29rc1sgbmFtZSBdIHx8IGpRdWVyeS5jc3NIb29rc1sgb3JpZ05hbWUgXTtcblxuXHRcdC8vIElmIGEgaG9vayB3YXMgcHJvdmlkZWQgZ2V0IHRoZSBjb21wdXRlZCB2YWx1ZSBmcm9tIHRoZXJlXG5cdFx0aWYgKCBob29rcyAmJiBcImdldFwiIGluIGhvb2tzICkge1xuXHRcdFx0dmFsID0gaG9va3MuZ2V0KCBlbGVtLCB0cnVlLCBleHRyYSApO1xuXHRcdH1cblxuXHRcdC8vIE90aGVyd2lzZSwgaWYgYSB3YXkgdG8gZ2V0IHRoZSBjb21wdXRlZCB2YWx1ZSBleGlzdHMsIHVzZSB0aGF0XG5cdFx0aWYgKCB2YWwgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdHZhbCA9IGN1ckNTUyggZWxlbSwgbmFtZSwgc3R5bGVzICk7XG5cdFx0fVxuXG5cdFx0Ly8gQ29udmVydCBcIm5vcm1hbFwiIHRvIGNvbXB1dGVkIHZhbHVlXG5cdFx0aWYgKCB2YWwgPT09IFwibm9ybWFsXCIgJiYgbmFtZSBpbiBjc3NOb3JtYWxUcmFuc2Zvcm0gKSB7XG5cdFx0XHR2YWwgPSBjc3NOb3JtYWxUcmFuc2Zvcm1bIG5hbWUgXTtcblx0XHR9XG5cblx0XHQvLyBNYWtlIG51bWVyaWMgaWYgZm9yY2VkIG9yIGEgcXVhbGlmaWVyIHdhcyBwcm92aWRlZCBhbmQgdmFsIGxvb2tzIG51bWVyaWNcblx0XHRpZiAoIGV4dHJhID09PSBcIlwiIHx8IGV4dHJhICkge1xuXHRcdFx0bnVtID0gcGFyc2VGbG9hdCggdmFsICk7XG5cdFx0XHRyZXR1cm4gZXh0cmEgPT09IHRydWUgfHwgaXNGaW5pdGUoIG51bSApID8gbnVtIHx8IDAgOiB2YWw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbDtcblx0fVxufSApO1xuXG5qUXVlcnkuZWFjaCggWyBcImhlaWdodFwiLCBcIndpZHRoXCIgXSwgZnVuY3Rpb24oIF9pLCBkaW1lbnNpb24gKSB7XG5cdGpRdWVyeS5jc3NIb29rc1sgZGltZW5zaW9uIF0gPSB7XG5cdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSwgY29tcHV0ZWQsIGV4dHJhICkge1xuXHRcdFx0aWYgKCBjb21wdXRlZCApIHtcblxuXHRcdFx0XHQvLyBDZXJ0YWluIGVsZW1lbnRzIGNhbiBoYXZlIGRpbWVuc2lvbiBpbmZvIGlmIHdlIGludmlzaWJseSBzaG93IHRoZW1cblx0XHRcdFx0Ly8gYnV0IGl0IG11c3QgaGF2ZSBhIGN1cnJlbnQgZGlzcGxheSBzdHlsZSB0aGF0IHdvdWxkIGJlbmVmaXRcblx0XHRcdFx0cmV0dXJuIHJkaXNwbGF5c3dhcC50ZXN0KCBqUXVlcnkuY3NzKCBlbGVtLCBcImRpc3BsYXlcIiApICkgJiZcblxuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IFNhZmFyaSA4K1xuXHRcdFx0XHRcdC8vIFRhYmxlIGNvbHVtbnMgaW4gU2FmYXJpIGhhdmUgbm9uLXplcm8gb2Zmc2V0V2lkdGggJiB6ZXJvXG5cdFx0XHRcdFx0Ly8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggdW5sZXNzIGRpc3BsYXkgaXMgY2hhbmdlZC5cblx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTExIG9ubHlcblx0XHRcdFx0XHQvLyBSdW5uaW5nIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBvbiBhIGRpc2Nvbm5lY3RlZCBub2RlXG5cdFx0XHRcdFx0Ly8gaW4gSUUgdGhyb3dzIGFuIGVycm9yLlxuXHRcdFx0XHRcdCggIWVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggfHwgIWVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKSA/XG5cdFx0XHRcdFx0c3dhcCggZWxlbSwgY3NzU2hvdywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZ2V0V2lkdGhPckhlaWdodCggZWxlbSwgZGltZW5zaW9uLCBleHRyYSApO1xuXHRcdFx0XHRcdH0gKSA6XG5cdFx0XHRcdFx0Z2V0V2lkdGhPckhlaWdodCggZWxlbSwgZGltZW5zaW9uLCBleHRyYSApO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uKCBlbGVtLCB2YWx1ZSwgZXh0cmEgKSB7XG5cdFx0XHR2YXIgbWF0Y2hlcyxcblx0XHRcdFx0c3R5bGVzID0gZ2V0U3R5bGVzKCBlbGVtICksXG5cblx0XHRcdFx0Ly8gT25seSByZWFkIHN0eWxlcy5wb3NpdGlvbiBpZiB0aGUgdGVzdCBoYXMgYSBjaGFuY2UgdG8gZmFpbFxuXHRcdFx0XHQvLyB0byBhdm9pZCBmb3JjaW5nIGEgcmVmbG93LlxuXHRcdFx0XHRzY3JvbGxib3hTaXplQnVnZ3kgPSAhc3VwcG9ydC5zY3JvbGxib3hTaXplKCkgJiZcblx0XHRcdFx0XHRzdHlsZXMucG9zaXRpb24gPT09IFwiYWJzb2x1dGVcIixcblxuXHRcdFx0XHQvLyBUbyBhdm9pZCBmb3JjaW5nIGEgcmVmbG93LCBvbmx5IGZldGNoIGJveFNpemluZyBpZiB3ZSBuZWVkIGl0IChnaC0zOTkxKVxuXHRcdFx0XHRib3hTaXppbmdOZWVkZWQgPSBzY3JvbGxib3hTaXplQnVnZ3kgfHwgZXh0cmEsXG5cdFx0XHRcdGlzQm9yZGVyQm94ID0gYm94U2l6aW5nTmVlZGVkICYmXG5cdFx0XHRcdFx0alF1ZXJ5LmNzcyggZWxlbSwgXCJib3hTaXppbmdcIiwgZmFsc2UsIHN0eWxlcyApID09PSBcImJvcmRlci1ib3hcIixcblx0XHRcdFx0c3VidHJhY3QgPSBleHRyYSA/XG5cdFx0XHRcdFx0Ym94TW9kZWxBZGp1c3RtZW50KFxuXHRcdFx0XHRcdFx0ZWxlbSxcblx0XHRcdFx0XHRcdGRpbWVuc2lvbixcblx0XHRcdFx0XHRcdGV4dHJhLFxuXHRcdFx0XHRcdFx0aXNCb3JkZXJCb3gsXG5cdFx0XHRcdFx0XHRzdHlsZXNcblx0XHRcdFx0XHQpIDpcblx0XHRcdFx0XHQwO1xuXG5cdFx0XHQvLyBBY2NvdW50IGZvciB1bnJlbGlhYmxlIGJvcmRlci1ib3ggZGltZW5zaW9ucyBieSBjb21wYXJpbmcgb2Zmc2V0KiB0byBjb21wdXRlZCBhbmRcblx0XHRcdC8vIGZha2luZyBhIGNvbnRlbnQtYm94IHRvIGdldCBib3JkZXIgYW5kIHBhZGRpbmcgKGdoLTM2OTkpXG5cdFx0XHRpZiAoIGlzQm9yZGVyQm94ICYmIHNjcm9sbGJveFNpemVCdWdneSApIHtcblx0XHRcdFx0c3VidHJhY3QgLT0gTWF0aC5jZWlsKFxuXHRcdFx0XHRcdGVsZW1bIFwib2Zmc2V0XCIgKyBkaW1lbnNpb25bIDAgXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKCAxICkgXSAtXG5cdFx0XHRcdFx0cGFyc2VGbG9hdCggc3R5bGVzWyBkaW1lbnNpb24gXSApIC1cblx0XHRcdFx0XHRib3hNb2RlbEFkanVzdG1lbnQoIGVsZW0sIGRpbWVuc2lvbiwgXCJib3JkZXJcIiwgZmFsc2UsIHN0eWxlcyApIC1cblx0XHRcdFx0XHQwLjVcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ29udmVydCB0byBwaXhlbHMgaWYgdmFsdWUgYWRqdXN0bWVudCBpcyBuZWVkZWRcblx0XHRcdGlmICggc3VidHJhY3QgJiYgKCBtYXRjaGVzID0gcmNzc051bS5leGVjKCB2YWx1ZSApICkgJiZcblx0XHRcdFx0KCBtYXRjaGVzWyAzIF0gfHwgXCJweFwiICkgIT09IFwicHhcIiApIHtcblxuXHRcdFx0XHRlbGVtLnN0eWxlWyBkaW1lbnNpb24gXSA9IHZhbHVlO1xuXHRcdFx0XHR2YWx1ZSA9IGpRdWVyeS5jc3MoIGVsZW0sIGRpbWVuc2lvbiApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gc2V0UG9zaXRpdmVOdW1iZXIoIGVsZW0sIHZhbHVlLCBzdWJ0cmFjdCApO1xuXHRcdH1cblx0fTtcbn0gKTtcblxualF1ZXJ5LmNzc0hvb2tzLm1hcmdpbkxlZnQgPSBhZGRHZXRIb29rSWYoIHN1cHBvcnQucmVsaWFibGVNYXJnaW5MZWZ0LFxuXHRmdW5jdGlvbiggZWxlbSwgY29tcHV0ZWQgKSB7XG5cdFx0aWYgKCBjb21wdXRlZCApIHtcblx0XHRcdHJldHVybiAoIHBhcnNlRmxvYXQoIGN1ckNTUyggZWxlbSwgXCJtYXJnaW5MZWZ0XCIgKSApIHx8XG5cdFx0XHRcdGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCAtXG5cdFx0XHRcdFx0c3dhcCggZWxlbSwgeyBtYXJnaW5MZWZ0OiAwIH0sIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcblx0XHRcdFx0XHR9IClcblx0XHRcdCkgKyBcInB4XCI7XG5cdFx0fVxuXHR9XG4pO1xuXG4vLyBUaGVzZSBob29rcyBhcmUgdXNlZCBieSBhbmltYXRlIHRvIGV4cGFuZCBwcm9wZXJ0aWVzXG5qUXVlcnkuZWFjaCgge1xuXHRtYXJnaW46IFwiXCIsXG5cdHBhZGRpbmc6IFwiXCIsXG5cdGJvcmRlcjogXCJXaWR0aFwiXG59LCBmdW5jdGlvbiggcHJlZml4LCBzdWZmaXggKSB7XG5cdGpRdWVyeS5jc3NIb29rc1sgcHJlZml4ICsgc3VmZml4IF0gPSB7XG5cdFx0ZXhwYW5kOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0XHR2YXIgaSA9IDAsXG5cdFx0XHRcdGV4cGFuZGVkID0ge30sXG5cblx0XHRcdFx0Ly8gQXNzdW1lcyBhIHNpbmdsZSBudW1iZXIgaWYgbm90IGEgc3RyaW5nXG5cdFx0XHRcdHBhcnRzID0gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiID8gdmFsdWUuc3BsaXQoIFwiIFwiICkgOiBbIHZhbHVlIF07XG5cblx0XHRcdGZvciAoIDsgaSA8IDQ7IGkrKyApIHtcblx0XHRcdFx0ZXhwYW5kZWRbIHByZWZpeCArIGNzc0V4cGFuZFsgaSBdICsgc3VmZml4IF0gPVxuXHRcdFx0XHRcdHBhcnRzWyBpIF0gfHwgcGFydHNbIGkgLSAyIF0gfHwgcGFydHNbIDAgXTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGV4cGFuZGVkO1xuXHRcdH1cblx0fTtcblxuXHRpZiAoIHByZWZpeCAhPT0gXCJtYXJnaW5cIiApIHtcblx0XHRqUXVlcnkuY3NzSG9va3NbIHByZWZpeCArIHN1ZmZpeCBdLnNldCA9IHNldFBvc2l0aXZlTnVtYmVyO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0Y3NzOiBmdW5jdGlvbiggbmFtZSwgdmFsdWUgKSB7XG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgZnVuY3Rpb24oIGVsZW0sIG5hbWUsIHZhbHVlICkge1xuXHRcdFx0dmFyIHN0eWxlcywgbGVuLFxuXHRcdFx0XHRtYXAgPSB7fSxcblx0XHRcdFx0aSA9IDA7XG5cblx0XHRcdGlmICggQXJyYXkuaXNBcnJheSggbmFtZSApICkge1xuXHRcdFx0XHRzdHlsZXMgPSBnZXRTdHlsZXMoIGVsZW0gKTtcblx0XHRcdFx0bGVuID0gbmFtZS5sZW5ndGg7XG5cblx0XHRcdFx0Zm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRcdFx0bWFwWyBuYW1lWyBpIF0gXSA9IGpRdWVyeS5jc3MoIGVsZW0sIG5hbWVbIGkgXSwgZmFsc2UsIHN0eWxlcyApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIG1hcDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgP1xuXHRcdFx0XHRqUXVlcnkuc3R5bGUoIGVsZW0sIG5hbWUsIHZhbHVlICkgOlxuXHRcdFx0XHRqUXVlcnkuY3NzKCBlbGVtLCBuYW1lICk7XG5cdFx0fSwgbmFtZSwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAxICk7XG5cdH1cbn0gKTtcblxuXG5mdW5jdGlvbiBUd2VlbiggZWxlbSwgb3B0aW9ucywgcHJvcCwgZW5kLCBlYXNpbmcgKSB7XG5cdHJldHVybiBuZXcgVHdlZW4ucHJvdG90eXBlLmluaXQoIGVsZW0sIG9wdGlvbnMsIHByb3AsIGVuZCwgZWFzaW5nICk7XG59XG5qUXVlcnkuVHdlZW4gPSBUd2VlbjtcblxuVHdlZW4ucHJvdG90eXBlID0ge1xuXHRjb25zdHJ1Y3RvcjogVHdlZW4sXG5cdGluaXQ6IGZ1bmN0aW9uKCBlbGVtLCBvcHRpb25zLCBwcm9wLCBlbmQsIGVhc2luZywgdW5pdCApIHtcblx0XHR0aGlzLmVsZW0gPSBlbGVtO1xuXHRcdHRoaXMucHJvcCA9IHByb3A7XG5cdFx0dGhpcy5lYXNpbmcgPSBlYXNpbmcgfHwgalF1ZXJ5LmVhc2luZy5fZGVmYXVsdDtcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdHRoaXMuc3RhcnQgPSB0aGlzLm5vdyA9IHRoaXMuY3VyKCk7XG5cdFx0dGhpcy5lbmQgPSBlbmQ7XG5cdFx0dGhpcy51bml0ID0gdW5pdCB8fCAoIGpRdWVyeS5jc3NOdW1iZXJbIHByb3AgXSA/IFwiXCIgOiBcInB4XCIgKTtcblx0fSxcblx0Y3VyOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgaG9va3MgPSBUd2Vlbi5wcm9wSG9va3NbIHRoaXMucHJvcCBdO1xuXG5cdFx0cmV0dXJuIGhvb2tzICYmIGhvb2tzLmdldCA/XG5cdFx0XHRob29rcy5nZXQoIHRoaXMgKSA6XG5cdFx0XHRUd2Vlbi5wcm9wSG9va3MuX2RlZmF1bHQuZ2V0KCB0aGlzICk7XG5cdH0sXG5cdHJ1bjogZnVuY3Rpb24oIHBlcmNlbnQgKSB7XG5cdFx0dmFyIGVhc2VkLFxuXHRcdFx0aG9va3MgPSBUd2Vlbi5wcm9wSG9va3NbIHRoaXMucHJvcCBdO1xuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMuZHVyYXRpb24gKSB7XG5cdFx0XHR0aGlzLnBvcyA9IGVhc2VkID0galF1ZXJ5LmVhc2luZ1sgdGhpcy5lYXNpbmcgXShcblx0XHRcdFx0cGVyY2VudCwgdGhpcy5vcHRpb25zLmR1cmF0aW9uICogcGVyY2VudCwgMCwgMSwgdGhpcy5vcHRpb25zLmR1cmF0aW9uXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBvcyA9IGVhc2VkID0gcGVyY2VudDtcblx0XHR9XG5cdFx0dGhpcy5ub3cgPSAoIHRoaXMuZW5kIC0gdGhpcy5zdGFydCApICogZWFzZWQgKyB0aGlzLnN0YXJ0O1xuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMuc3RlcCApIHtcblx0XHRcdHRoaXMub3B0aW9ucy5zdGVwLmNhbGwoIHRoaXMuZWxlbSwgdGhpcy5ub3csIHRoaXMgKTtcblx0XHR9XG5cblx0XHRpZiAoIGhvb2tzICYmIGhvb2tzLnNldCApIHtcblx0XHRcdGhvb2tzLnNldCggdGhpcyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRUd2Vlbi5wcm9wSG9va3MuX2RlZmF1bHQuc2V0KCB0aGlzICk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59O1xuXG5Ud2Vlbi5wcm90b3R5cGUuaW5pdC5wcm90b3R5cGUgPSBUd2Vlbi5wcm90b3R5cGU7XG5cblR3ZWVuLnByb3BIb29rcyA9IHtcblx0X2RlZmF1bHQ6IHtcblx0XHRnZXQ6IGZ1bmN0aW9uKCB0d2VlbiApIHtcblx0XHRcdHZhciByZXN1bHQ7XG5cblx0XHRcdC8vIFVzZSBhIHByb3BlcnR5IG9uIHRoZSBlbGVtZW50IGRpcmVjdGx5IHdoZW4gaXQgaXMgbm90IGEgRE9NIGVsZW1lbnQsXG5cdFx0XHQvLyBvciB3aGVuIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHN0eWxlIHByb3BlcnR5IHRoYXQgZXhpc3RzLlxuXHRcdFx0aWYgKCB0d2Vlbi5lbGVtLm5vZGVUeXBlICE9PSAxIHx8XG5cdFx0XHRcdHR3ZWVuLmVsZW1bIHR3ZWVuLnByb3AgXSAhPSBudWxsICYmIHR3ZWVuLmVsZW0uc3R5bGVbIHR3ZWVuLnByb3AgXSA9PSBudWxsICkge1xuXHRcdFx0XHRyZXR1cm4gdHdlZW4uZWxlbVsgdHdlZW4ucHJvcCBdO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBQYXNzaW5nIGFuIGVtcHR5IHN0cmluZyBhcyBhIDNyZCBwYXJhbWV0ZXIgdG8gLmNzcyB3aWxsIGF1dG9tYXRpY2FsbHlcblx0XHRcdC8vIGF0dGVtcHQgYSBwYXJzZUZsb2F0IGFuZCBmYWxsYmFjayB0byBhIHN0cmluZyBpZiB0aGUgcGFyc2UgZmFpbHMuXG5cdFx0XHQvLyBTaW1wbGUgdmFsdWVzIHN1Y2ggYXMgXCIxMHB4XCIgYXJlIHBhcnNlZCB0byBGbG9hdDtcblx0XHRcdC8vIGNvbXBsZXggdmFsdWVzIHN1Y2ggYXMgXCJyb3RhdGUoMXJhZClcIiBhcmUgcmV0dXJuZWQgYXMtaXMuXG5cdFx0XHRyZXN1bHQgPSBqUXVlcnkuY3NzKCB0d2Vlbi5lbGVtLCB0d2Vlbi5wcm9wLCBcIlwiICk7XG5cblx0XHRcdC8vIEVtcHR5IHN0cmluZ3MsIG51bGwsIHVuZGVmaW5lZCBhbmQgXCJhdXRvXCIgYXJlIGNvbnZlcnRlZCB0byAwLlxuXHRcdFx0cmV0dXJuICFyZXN1bHQgfHwgcmVzdWx0ID09PSBcImF1dG9cIiA/IDAgOiByZXN1bHQ7XG5cdFx0fSxcblx0XHRzZXQ6IGZ1bmN0aW9uKCB0d2VlbiApIHtcblxuXHRcdFx0Ly8gVXNlIHN0ZXAgaG9vayBmb3IgYmFjayBjb21wYXQuXG5cdFx0XHQvLyBVc2UgY3NzSG9vayBpZiBpdHMgdGhlcmUuXG5cdFx0XHQvLyBVc2UgLnN0eWxlIGlmIGF2YWlsYWJsZSBhbmQgdXNlIHBsYWluIHByb3BlcnRpZXMgd2hlcmUgYXZhaWxhYmxlLlxuXHRcdFx0aWYgKCBqUXVlcnkuZnguc3RlcFsgdHdlZW4ucHJvcCBdICkge1xuXHRcdFx0XHRqUXVlcnkuZnguc3RlcFsgdHdlZW4ucHJvcCBdKCB0d2VlbiApO1xuXHRcdFx0fSBlbHNlIGlmICggdHdlZW4uZWxlbS5ub2RlVHlwZSA9PT0gMSAmJiAoXG5cdFx0XHRcdGpRdWVyeS5jc3NIb29rc1sgdHdlZW4ucHJvcCBdIHx8XG5cdFx0XHRcdFx0dHdlZW4uZWxlbS5zdHlsZVsgZmluYWxQcm9wTmFtZSggdHdlZW4ucHJvcCApIF0gIT0gbnVsbCApICkge1xuXHRcdFx0XHRqUXVlcnkuc3R5bGUoIHR3ZWVuLmVsZW0sIHR3ZWVuLnByb3AsIHR3ZWVuLm5vdyArIHR3ZWVuLnVuaXQgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHR3ZWVuLmVsZW1bIHR3ZWVuLnByb3AgXSA9IHR3ZWVuLm5vdztcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbi8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG4vLyBQYW5pYyBiYXNlZCBhcHByb2FjaCB0byBzZXR0aW5nIHRoaW5ncyBvbiBkaXNjb25uZWN0ZWQgbm9kZXNcblR3ZWVuLnByb3BIb29rcy5zY3JvbGxUb3AgPSBUd2Vlbi5wcm9wSG9va3Muc2Nyb2xsTGVmdCA9IHtcblx0c2V0OiBmdW5jdGlvbiggdHdlZW4gKSB7XG5cdFx0aWYgKCB0d2Vlbi5lbGVtLm5vZGVUeXBlICYmIHR3ZWVuLmVsZW0ucGFyZW50Tm9kZSApIHtcblx0XHRcdHR3ZWVuLmVsZW1bIHR3ZWVuLnByb3AgXSA9IHR3ZWVuLm5vdztcblx0XHR9XG5cdH1cbn07XG5cbmpRdWVyeS5lYXNpbmcgPSB7XG5cdGxpbmVhcjogZnVuY3Rpb24oIHAgKSB7XG5cdFx0cmV0dXJuIHA7XG5cdH0sXG5cdHN3aW5nOiBmdW5jdGlvbiggcCApIHtcblx0XHRyZXR1cm4gMC41IC0gTWF0aC5jb3MoIHAgKiBNYXRoLlBJICkgLyAyO1xuXHR9LFxuXHRfZGVmYXVsdDogXCJzd2luZ1wiXG59O1xuXG5qUXVlcnkuZnggPSBUd2Vlbi5wcm90b3R5cGUuaW5pdDtcblxuLy8gQmFjayBjb21wYXQgPDEuOCBleHRlbnNpb24gcG9pbnRcbmpRdWVyeS5meC5zdGVwID0ge307XG5cblxuXG5cbnZhclxuXHRmeE5vdywgaW5Qcm9ncmVzcyxcblx0cmZ4dHlwZXMgPSAvXig/OnRvZ2dsZXxzaG93fGhpZGUpJC8sXG5cdHJydW4gPSAvcXVldWVIb29rcyQvO1xuXG5mdW5jdGlvbiBzY2hlZHVsZSgpIHtcblx0aWYgKCBpblByb2dyZXNzICkge1xuXHRcdGlmICggZG9jdW1lbnQuaGlkZGVuID09PSBmYWxzZSAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lICkge1xuXHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggc2NoZWR1bGUgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2luZG93LnNldFRpbWVvdXQoIHNjaGVkdWxlLCBqUXVlcnkuZnguaW50ZXJ2YWwgKTtcblx0XHR9XG5cblx0XHRqUXVlcnkuZngudGljaygpO1xuXHR9XG59XG5cbi8vIEFuaW1hdGlvbnMgY3JlYXRlZCBzeW5jaHJvbm91c2x5IHdpbGwgcnVuIHN5bmNocm9ub3VzbHlcbmZ1bmN0aW9uIGNyZWF0ZUZ4Tm93KCkge1xuXHR3aW5kb3cuc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0ZnhOb3cgPSB1bmRlZmluZWQ7XG5cdH0gKTtcblx0cmV0dXJuICggZnhOb3cgPSBEYXRlLm5vdygpICk7XG59XG5cbi8vIEdlbmVyYXRlIHBhcmFtZXRlcnMgdG8gY3JlYXRlIGEgc3RhbmRhcmQgYW5pbWF0aW9uXG5mdW5jdGlvbiBnZW5GeCggdHlwZSwgaW5jbHVkZVdpZHRoICkge1xuXHR2YXIgd2hpY2gsXG5cdFx0aSA9IDAsXG5cdFx0YXR0cnMgPSB7IGhlaWdodDogdHlwZSB9O1xuXG5cdC8vIElmIHdlIGluY2x1ZGUgd2lkdGgsIHN0ZXAgdmFsdWUgaXMgMSB0byBkbyBhbGwgY3NzRXhwYW5kIHZhbHVlcyxcblx0Ly8gb3RoZXJ3aXNlIHN0ZXAgdmFsdWUgaXMgMiB0byBza2lwIG92ZXIgTGVmdCBhbmQgUmlnaHRcblx0aW5jbHVkZVdpZHRoID0gaW5jbHVkZVdpZHRoID8gMSA6IDA7XG5cdGZvciAoIDsgaSA8IDQ7IGkgKz0gMiAtIGluY2x1ZGVXaWR0aCApIHtcblx0XHR3aGljaCA9IGNzc0V4cGFuZFsgaSBdO1xuXHRcdGF0dHJzWyBcIm1hcmdpblwiICsgd2hpY2ggXSA9IGF0dHJzWyBcInBhZGRpbmdcIiArIHdoaWNoIF0gPSB0eXBlO1xuXHR9XG5cblx0aWYgKCBpbmNsdWRlV2lkdGggKSB7XG5cdFx0YXR0cnMub3BhY2l0eSA9IGF0dHJzLndpZHRoID0gdHlwZTtcblx0fVxuXG5cdHJldHVybiBhdHRycztcbn1cblxuZnVuY3Rpb24gY3JlYXRlVHdlZW4oIHZhbHVlLCBwcm9wLCBhbmltYXRpb24gKSB7XG5cdHZhciB0d2Vlbixcblx0XHRjb2xsZWN0aW9uID0gKCBBbmltYXRpb24udHdlZW5lcnNbIHByb3AgXSB8fCBbXSApLmNvbmNhdCggQW5pbWF0aW9uLnR3ZWVuZXJzWyBcIipcIiBdICksXG5cdFx0aW5kZXggPSAwLFxuXHRcdGxlbmd0aCA9IGNvbGxlY3Rpb24ubGVuZ3RoO1xuXHRmb3IgKCA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrICkge1xuXHRcdGlmICggKCB0d2VlbiA9IGNvbGxlY3Rpb25bIGluZGV4IF0uY2FsbCggYW5pbWF0aW9uLCBwcm9wLCB2YWx1ZSApICkgKSB7XG5cblx0XHRcdC8vIFdlJ3JlIGRvbmUgd2l0aCB0aGlzIHByb3BlcnR5XG5cdFx0XHRyZXR1cm4gdHdlZW47XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRQcmVmaWx0ZXIoIGVsZW0sIHByb3BzLCBvcHRzICkge1xuXHR2YXIgcHJvcCwgdmFsdWUsIHRvZ2dsZSwgaG9va3MsIG9sZGZpcmUsIHByb3BUd2VlbiwgcmVzdG9yZURpc3BsYXksIGRpc3BsYXksXG5cdFx0aXNCb3ggPSBcIndpZHRoXCIgaW4gcHJvcHMgfHwgXCJoZWlnaHRcIiBpbiBwcm9wcyxcblx0XHRhbmltID0gdGhpcyxcblx0XHRvcmlnID0ge30sXG5cdFx0c3R5bGUgPSBlbGVtLnN0eWxlLFxuXHRcdGhpZGRlbiA9IGVsZW0ubm9kZVR5cGUgJiYgaXNIaWRkZW5XaXRoaW5UcmVlKCBlbGVtICksXG5cdFx0ZGF0YVNob3cgPSBkYXRhUHJpdi5nZXQoIGVsZW0sIFwiZnhzaG93XCIgKTtcblxuXHQvLyBRdWV1ZS1za2lwcGluZyBhbmltYXRpb25zIGhpamFjayB0aGUgZnggaG9va3Ncblx0aWYgKCAhb3B0cy5xdWV1ZSApIHtcblx0XHRob29rcyA9IGpRdWVyeS5fcXVldWVIb29rcyggZWxlbSwgXCJmeFwiICk7XG5cdFx0aWYgKCBob29rcy51bnF1ZXVlZCA9PSBudWxsICkge1xuXHRcdFx0aG9va3MudW5xdWV1ZWQgPSAwO1xuXHRcdFx0b2xkZmlyZSA9IGhvb2tzLmVtcHR5LmZpcmU7XG5cdFx0XHRob29rcy5lbXB0eS5maXJlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggIWhvb2tzLnVucXVldWVkICkge1xuXHRcdFx0XHRcdG9sZGZpcmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdFx0aG9va3MudW5xdWV1ZWQrKztcblxuXHRcdGFuaW0uYWx3YXlzKCBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gRW5zdXJlIHRoZSBjb21wbGV0ZSBoYW5kbGVyIGlzIGNhbGxlZCBiZWZvcmUgdGhpcyBjb21wbGV0ZXNcblx0XHRcdGFuaW0uYWx3YXlzKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aG9va3MudW5xdWV1ZWQtLTtcblx0XHRcdFx0aWYgKCAhalF1ZXJ5LnF1ZXVlKCBlbGVtLCBcImZ4XCIgKS5sZW5ndGggKSB7XG5cdFx0XHRcdFx0aG9va3MuZW1wdHkuZmlyZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9XG5cblx0Ly8gRGV0ZWN0IHNob3cvaGlkZSBhbmltYXRpb25zXG5cdGZvciAoIHByb3AgaW4gcHJvcHMgKSB7XG5cdFx0dmFsdWUgPSBwcm9wc1sgcHJvcCBdO1xuXHRcdGlmICggcmZ4dHlwZXMudGVzdCggdmFsdWUgKSApIHtcblx0XHRcdGRlbGV0ZSBwcm9wc1sgcHJvcCBdO1xuXHRcdFx0dG9nZ2xlID0gdG9nZ2xlIHx8IHZhbHVlID09PSBcInRvZ2dsZVwiO1xuXHRcdFx0aWYgKCB2YWx1ZSA9PT0gKCBoaWRkZW4gPyBcImhpZGVcIiA6IFwic2hvd1wiICkgKSB7XG5cblx0XHRcdFx0Ly8gUHJldGVuZCB0byBiZSBoaWRkZW4gaWYgdGhpcyBpcyBhIFwic2hvd1wiIGFuZFxuXHRcdFx0XHQvLyB0aGVyZSBpcyBzdGlsbCBkYXRhIGZyb20gYSBzdG9wcGVkIHNob3cvaGlkZVxuXHRcdFx0XHRpZiAoIHZhbHVlID09PSBcInNob3dcIiAmJiBkYXRhU2hvdyAmJiBkYXRhU2hvd1sgcHJvcCBdICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0aGlkZGVuID0gdHJ1ZTtcblxuXHRcdFx0XHQvLyBJZ25vcmUgYWxsIG90aGVyIG5vLW9wIHNob3cvaGlkZSBkYXRhXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG9yaWdbIHByb3AgXSA9IGRhdGFTaG93ICYmIGRhdGFTaG93WyBwcm9wIF0gfHwgalF1ZXJ5LnN0eWxlKCBlbGVtLCBwcm9wICk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gQmFpbCBvdXQgaWYgdGhpcyBpcyBhIG5vLW9wIGxpa2UgLmhpZGUoKS5oaWRlKClcblx0cHJvcFR3ZWVuID0gIWpRdWVyeS5pc0VtcHR5T2JqZWN0KCBwcm9wcyApO1xuXHRpZiAoICFwcm9wVHdlZW4gJiYgalF1ZXJ5LmlzRW1wdHlPYmplY3QoIG9yaWcgKSApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBSZXN0cmljdCBcIm92ZXJmbG93XCIgYW5kIFwiZGlzcGxheVwiIHN0eWxlcyBkdXJpbmcgYm94IGFuaW1hdGlvbnNcblx0aWYgKCBpc0JveCAmJiBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXG5cdFx0Ly8gU3VwcG9ydDogSUUgPD05IC0gMTEsIEVkZ2UgMTIgLSAxNVxuXHRcdC8vIFJlY29yZCBhbGwgMyBvdmVyZmxvdyBhdHRyaWJ1dGVzIGJlY2F1c2UgSUUgZG9lcyBub3QgaW5mZXIgdGhlIHNob3J0aGFuZFxuXHRcdC8vIGZyb20gaWRlbnRpY2FsbHktdmFsdWVkIG92ZXJmbG93WCBhbmQgb3ZlcmZsb3dZIGFuZCBFZGdlIGp1c3QgbWlycm9yc1xuXHRcdC8vIHRoZSBvdmVyZmxvd1ggdmFsdWUgdGhlcmUuXG5cdFx0b3B0cy5vdmVyZmxvdyA9IFsgc3R5bGUub3ZlcmZsb3csIHN0eWxlLm92ZXJmbG93WCwgc3R5bGUub3ZlcmZsb3dZIF07XG5cblx0XHQvLyBJZGVudGlmeSBhIGRpc3BsYXkgdHlwZSwgcHJlZmVycmluZyBvbGQgc2hvdy9oaWRlIGRhdGEgb3ZlciB0aGUgQ1NTIGNhc2NhZGVcblx0XHRyZXN0b3JlRGlzcGxheSA9IGRhdGFTaG93ICYmIGRhdGFTaG93LmRpc3BsYXk7XG5cdFx0aWYgKCByZXN0b3JlRGlzcGxheSA9PSBudWxsICkge1xuXHRcdFx0cmVzdG9yZURpc3BsYXkgPSBkYXRhUHJpdi5nZXQoIGVsZW0sIFwiZGlzcGxheVwiICk7XG5cdFx0fVxuXHRcdGRpc3BsYXkgPSBqUXVlcnkuY3NzKCBlbGVtLCBcImRpc3BsYXlcIiApO1xuXHRcdGlmICggZGlzcGxheSA9PT0gXCJub25lXCIgKSB7XG5cdFx0XHRpZiAoIHJlc3RvcmVEaXNwbGF5ICkge1xuXHRcdFx0XHRkaXNwbGF5ID0gcmVzdG9yZURpc3BsYXk7XG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIEdldCBub25lbXB0eSB2YWx1ZShzKSBieSB0ZW1wb3JhcmlseSBmb3JjaW5nIHZpc2liaWxpdHlcblx0XHRcdFx0c2hvd0hpZGUoIFsgZWxlbSBdLCB0cnVlICk7XG5cdFx0XHRcdHJlc3RvcmVEaXNwbGF5ID0gZWxlbS5zdHlsZS5kaXNwbGF5IHx8IHJlc3RvcmVEaXNwbGF5O1xuXHRcdFx0XHRkaXNwbGF5ID0galF1ZXJ5LmNzcyggZWxlbSwgXCJkaXNwbGF5XCIgKTtcblx0XHRcdFx0c2hvd0hpZGUoIFsgZWxlbSBdICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQW5pbWF0ZSBpbmxpbmUgZWxlbWVudHMgYXMgaW5saW5lLWJsb2NrXG5cdFx0aWYgKCBkaXNwbGF5ID09PSBcImlubGluZVwiIHx8IGRpc3BsYXkgPT09IFwiaW5saW5lLWJsb2NrXCIgJiYgcmVzdG9yZURpc3BsYXkgIT0gbnVsbCApIHtcblx0XHRcdGlmICggalF1ZXJ5LmNzcyggZWxlbSwgXCJmbG9hdFwiICkgPT09IFwibm9uZVwiICkge1xuXG5cdFx0XHRcdC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIGRpc3BsYXkgdmFsdWUgYXQgdGhlIGVuZCBvZiBwdXJlIHNob3cvaGlkZSBhbmltYXRpb25zXG5cdFx0XHRcdGlmICggIXByb3BUd2VlbiApIHtcblx0XHRcdFx0XHRhbmltLmRvbmUoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0c3R5bGUuZGlzcGxheSA9IHJlc3RvcmVEaXNwbGF5O1xuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRpZiAoIHJlc3RvcmVEaXNwbGF5ID09IG51bGwgKSB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5ID0gc3R5bGUuZGlzcGxheTtcblx0XHRcdFx0XHRcdHJlc3RvcmVEaXNwbGF5ID0gZGlzcGxheSA9PT0gXCJub25lXCIgPyBcIlwiIDogZGlzcGxheTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0c3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKCBvcHRzLm92ZXJmbG93ICkge1xuXHRcdHN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcblx0XHRhbmltLmFsd2F5cyggZnVuY3Rpb24oKSB7XG5cdFx0XHRzdHlsZS5vdmVyZmxvdyA9IG9wdHMub3ZlcmZsb3dbIDAgXTtcblx0XHRcdHN0eWxlLm92ZXJmbG93WCA9IG9wdHMub3ZlcmZsb3dbIDEgXTtcblx0XHRcdHN0eWxlLm92ZXJmbG93WSA9IG9wdHMub3ZlcmZsb3dbIDIgXTtcblx0XHR9ICk7XG5cdH1cblxuXHQvLyBJbXBsZW1lbnQgc2hvdy9oaWRlIGFuaW1hdGlvbnNcblx0cHJvcFR3ZWVuID0gZmFsc2U7XG5cdGZvciAoIHByb3AgaW4gb3JpZyApIHtcblxuXHRcdC8vIEdlbmVyYWwgc2hvdy9oaWRlIHNldHVwIGZvciB0aGlzIGVsZW1lbnQgYW5pbWF0aW9uXG5cdFx0aWYgKCAhcHJvcFR3ZWVuICkge1xuXHRcdFx0aWYgKCBkYXRhU2hvdyApIHtcblx0XHRcdFx0aWYgKCBcImhpZGRlblwiIGluIGRhdGFTaG93ICkge1xuXHRcdFx0XHRcdGhpZGRlbiA9IGRhdGFTaG93LmhpZGRlbjtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGF0YVNob3cgPSBkYXRhUHJpdi5hY2Nlc3MoIGVsZW0sIFwiZnhzaG93XCIsIHsgZGlzcGxheTogcmVzdG9yZURpc3BsYXkgfSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTdG9yZSBoaWRkZW4vdmlzaWJsZSBmb3IgdG9nZ2xlIHNvIGAuc3RvcCgpLnRvZ2dsZSgpYCBcInJldmVyc2VzXCJcblx0XHRcdGlmICggdG9nZ2xlICkge1xuXHRcdFx0XHRkYXRhU2hvdy5oaWRkZW4gPSAhaGlkZGVuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTaG93IGVsZW1lbnRzIGJlZm9yZSBhbmltYXRpbmcgdGhlbVxuXHRcdFx0aWYgKCBoaWRkZW4gKSB7XG5cdFx0XHRcdHNob3dIaWRlKCBbIGVsZW0gXSwgdHJ1ZSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvKiBlc2xpbnQtZGlzYWJsZSBuby1sb29wLWZ1bmMgKi9cblxuXHRcdFx0YW5pbS5kb25lKCBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHQvKiBlc2xpbnQtZW5hYmxlIG5vLWxvb3AtZnVuYyAqL1xuXG5cdFx0XHRcdC8vIFRoZSBmaW5hbCBzdGVwIG9mIGEgXCJoaWRlXCIgYW5pbWF0aW9uIGlzIGFjdHVhbGx5IGhpZGluZyB0aGUgZWxlbWVudFxuXHRcdFx0XHRpZiAoICFoaWRkZW4gKSB7XG5cdFx0XHRcdFx0c2hvd0hpZGUoIFsgZWxlbSBdICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGF0YVByaXYucmVtb3ZlKCBlbGVtLCBcImZ4c2hvd1wiICk7XG5cdFx0XHRcdGZvciAoIHByb3AgaW4gb3JpZyApIHtcblx0XHRcdFx0XHRqUXVlcnkuc3R5bGUoIGVsZW0sIHByb3AsIG9yaWdbIHByb3AgXSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0Ly8gUGVyLXByb3BlcnR5IHNldHVwXG5cdFx0cHJvcFR3ZWVuID0gY3JlYXRlVHdlZW4oIGhpZGRlbiA/IGRhdGFTaG93WyBwcm9wIF0gOiAwLCBwcm9wLCBhbmltICk7XG5cdFx0aWYgKCAhKCBwcm9wIGluIGRhdGFTaG93ICkgKSB7XG5cdFx0XHRkYXRhU2hvd1sgcHJvcCBdID0gcHJvcFR3ZWVuLnN0YXJ0O1xuXHRcdFx0aWYgKCBoaWRkZW4gKSB7XG5cdFx0XHRcdHByb3BUd2Vlbi5lbmQgPSBwcm9wVHdlZW4uc3RhcnQ7XG5cdFx0XHRcdHByb3BUd2Vlbi5zdGFydCA9IDA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIHByb3BGaWx0ZXIoIHByb3BzLCBzcGVjaWFsRWFzaW5nICkge1xuXHR2YXIgaW5kZXgsIG5hbWUsIGVhc2luZywgdmFsdWUsIGhvb2tzO1xuXG5cdC8vIGNhbWVsQ2FzZSwgc3BlY2lhbEVhc2luZyBhbmQgZXhwYW5kIGNzc0hvb2sgcGFzc1xuXHRmb3IgKCBpbmRleCBpbiBwcm9wcyApIHtcblx0XHRuYW1lID0gY2FtZWxDYXNlKCBpbmRleCApO1xuXHRcdGVhc2luZyA9IHNwZWNpYWxFYXNpbmdbIG5hbWUgXTtcblx0XHR2YWx1ZSA9IHByb3BzWyBpbmRleCBdO1xuXHRcdGlmICggQXJyYXkuaXNBcnJheSggdmFsdWUgKSApIHtcblx0XHRcdGVhc2luZyA9IHZhbHVlWyAxIF07XG5cdFx0XHR2YWx1ZSA9IHByb3BzWyBpbmRleCBdID0gdmFsdWVbIDAgXTtcblx0XHR9XG5cblx0XHRpZiAoIGluZGV4ICE9PSBuYW1lICkge1xuXHRcdFx0cHJvcHNbIG5hbWUgXSA9IHZhbHVlO1xuXHRcdFx0ZGVsZXRlIHByb3BzWyBpbmRleCBdO1xuXHRcdH1cblxuXHRcdGhvb2tzID0galF1ZXJ5LmNzc0hvb2tzWyBuYW1lIF07XG5cdFx0aWYgKCBob29rcyAmJiBcImV4cGFuZFwiIGluIGhvb2tzICkge1xuXHRcdFx0dmFsdWUgPSBob29rcy5leHBhbmQoIHZhbHVlICk7XG5cdFx0XHRkZWxldGUgcHJvcHNbIG5hbWUgXTtcblxuXHRcdFx0Ly8gTm90IHF1aXRlICQuZXh0ZW5kLCB0aGlzIHdvbid0IG92ZXJ3cml0ZSBleGlzdGluZyBrZXlzLlxuXHRcdFx0Ly8gUmV1c2luZyAnaW5kZXgnIGJlY2F1c2Ugd2UgaGF2ZSB0aGUgY29ycmVjdCBcIm5hbWVcIlxuXHRcdFx0Zm9yICggaW5kZXggaW4gdmFsdWUgKSB7XG5cdFx0XHRcdGlmICggISggaW5kZXggaW4gcHJvcHMgKSApIHtcblx0XHRcdFx0XHRwcm9wc1sgaW5kZXggXSA9IHZhbHVlWyBpbmRleCBdO1xuXHRcdFx0XHRcdHNwZWNpYWxFYXNpbmdbIGluZGV4IF0gPSBlYXNpbmc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0c3BlY2lhbEVhc2luZ1sgbmFtZSBdID0gZWFzaW5nO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBBbmltYXRpb24oIGVsZW0sIHByb3BlcnRpZXMsIG9wdGlvbnMgKSB7XG5cdHZhciByZXN1bHQsXG5cdFx0c3RvcHBlZCxcblx0XHRpbmRleCA9IDAsXG5cdFx0bGVuZ3RoID0gQW5pbWF0aW9uLnByZWZpbHRlcnMubGVuZ3RoLFxuXHRcdGRlZmVycmVkID0galF1ZXJ5LkRlZmVycmVkKCkuYWx3YXlzKCBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gRG9uJ3QgbWF0Y2ggZWxlbSBpbiB0aGUgOmFuaW1hdGVkIHNlbGVjdG9yXG5cdFx0XHRkZWxldGUgdGljay5lbGVtO1xuXHRcdH0gKSxcblx0XHR0aWNrID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoIHN0b3BwZWQgKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHZhciBjdXJyZW50VGltZSA9IGZ4Tm93IHx8IGNyZWF0ZUZ4Tm93KCksXG5cdFx0XHRcdHJlbWFpbmluZyA9IE1hdGgubWF4KCAwLCBhbmltYXRpb24uc3RhcnRUaW1lICsgYW5pbWF0aW9uLmR1cmF0aW9uIC0gY3VycmVudFRpbWUgKSxcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDIuMyBvbmx5XG5cdFx0XHRcdC8vIEFyY2hhaWMgY3Jhc2ggYnVnIHdvbid0IGFsbG93IHVzIHRvIHVzZSBgMSAtICggMC41IHx8IDAgKWAgKCMxMjQ5Nylcblx0XHRcdFx0dGVtcCA9IHJlbWFpbmluZyAvIGFuaW1hdGlvbi5kdXJhdGlvbiB8fCAwLFxuXHRcdFx0XHRwZXJjZW50ID0gMSAtIHRlbXAsXG5cdFx0XHRcdGluZGV4ID0gMCxcblx0XHRcdFx0bGVuZ3RoID0gYW5pbWF0aW9uLnR3ZWVucy5sZW5ndGg7XG5cblx0XHRcdGZvciAoIDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0XHRcdGFuaW1hdGlvbi50d2VlbnNbIGluZGV4IF0ucnVuKCBwZXJjZW50ICk7XG5cdFx0XHR9XG5cblx0XHRcdGRlZmVycmVkLm5vdGlmeVdpdGgoIGVsZW0sIFsgYW5pbWF0aW9uLCBwZXJjZW50LCByZW1haW5pbmcgXSApO1xuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIG1vcmUgdG8gZG8sIHlpZWxkXG5cdFx0XHRpZiAoIHBlcmNlbnQgPCAxICYmIGxlbmd0aCApIHtcblx0XHRcdFx0cmV0dXJuIHJlbWFpbmluZztcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhpcyB3YXMgYW4gZW1wdHkgYW5pbWF0aW9uLCBzeW50aGVzaXplIGEgZmluYWwgcHJvZ3Jlc3Mgbm90aWZpY2F0aW9uXG5cdFx0XHRpZiAoICFsZW5ndGggKSB7XG5cdFx0XHRcdGRlZmVycmVkLm5vdGlmeVdpdGgoIGVsZW0sIFsgYW5pbWF0aW9uLCAxLCAwIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmVzb2x2ZSB0aGUgYW5pbWF0aW9uIGFuZCByZXBvcnQgaXRzIGNvbmNsdXNpb25cblx0XHRcdGRlZmVycmVkLnJlc29sdmVXaXRoKCBlbGVtLCBbIGFuaW1hdGlvbiBdICk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblx0XHRhbmltYXRpb24gPSBkZWZlcnJlZC5wcm9taXNlKCB7XG5cdFx0XHRlbGVtOiBlbGVtLFxuXHRcdFx0cHJvcHM6IGpRdWVyeS5leHRlbmQoIHt9LCBwcm9wZXJ0aWVzICksXG5cdFx0XHRvcHRzOiBqUXVlcnkuZXh0ZW5kKCB0cnVlLCB7XG5cdFx0XHRcdHNwZWNpYWxFYXNpbmc6IHt9LFxuXHRcdFx0XHRlYXNpbmc6IGpRdWVyeS5lYXNpbmcuX2RlZmF1bHRcblx0XHRcdH0sIG9wdGlvbnMgKSxcblx0XHRcdG9yaWdpbmFsUHJvcGVydGllczogcHJvcGVydGllcyxcblx0XHRcdG9yaWdpbmFsT3B0aW9uczogb3B0aW9ucyxcblx0XHRcdHN0YXJ0VGltZTogZnhOb3cgfHwgY3JlYXRlRnhOb3coKSxcblx0XHRcdGR1cmF0aW9uOiBvcHRpb25zLmR1cmF0aW9uLFxuXHRcdFx0dHdlZW5zOiBbXSxcblx0XHRcdGNyZWF0ZVR3ZWVuOiBmdW5jdGlvbiggcHJvcCwgZW5kICkge1xuXHRcdFx0XHR2YXIgdHdlZW4gPSBqUXVlcnkuVHdlZW4oIGVsZW0sIGFuaW1hdGlvbi5vcHRzLCBwcm9wLCBlbmQsXG5cdFx0XHRcdFx0YW5pbWF0aW9uLm9wdHMuc3BlY2lhbEVhc2luZ1sgcHJvcCBdIHx8IGFuaW1hdGlvbi5vcHRzLmVhc2luZyApO1xuXHRcdFx0XHRhbmltYXRpb24udHdlZW5zLnB1c2goIHR3ZWVuICk7XG5cdFx0XHRcdHJldHVybiB0d2Vlbjtcblx0XHRcdH0sXG5cdFx0XHRzdG9wOiBmdW5jdGlvbiggZ290b0VuZCApIHtcblx0XHRcdFx0dmFyIGluZGV4ID0gMCxcblxuXHRcdFx0XHRcdC8vIElmIHdlIGFyZSBnb2luZyB0byB0aGUgZW5kLCB3ZSB3YW50IHRvIHJ1biBhbGwgdGhlIHR3ZWVuc1xuXHRcdFx0XHRcdC8vIG90aGVyd2lzZSB3ZSBza2lwIHRoaXMgcGFydFxuXHRcdFx0XHRcdGxlbmd0aCA9IGdvdG9FbmQgPyBhbmltYXRpb24udHdlZW5zLmxlbmd0aCA6IDA7XG5cdFx0XHRcdGlmICggc3RvcHBlZCApIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fVxuXHRcdFx0XHRzdG9wcGVkID0gdHJ1ZTtcblx0XHRcdFx0Zm9yICggOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRcdFx0XHRhbmltYXRpb24udHdlZW5zWyBpbmRleCBdLnJ1biggMSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUmVzb2x2ZSB3aGVuIHdlIHBsYXllZCB0aGUgbGFzdCBmcmFtZTsgb3RoZXJ3aXNlLCByZWplY3Rcblx0XHRcdFx0aWYgKCBnb3RvRW5kICkge1xuXHRcdFx0XHRcdGRlZmVycmVkLm5vdGlmeVdpdGgoIGVsZW0sIFsgYW5pbWF0aW9uLCAxLCAwIF0gKTtcblx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlV2l0aCggZWxlbSwgWyBhbmltYXRpb24sIGdvdG9FbmQgXSApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdFdpdGgoIGVsZW0sIFsgYW5pbWF0aW9uLCBnb3RvRW5kIF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHR9ICksXG5cdFx0cHJvcHMgPSBhbmltYXRpb24ucHJvcHM7XG5cblx0cHJvcEZpbHRlciggcHJvcHMsIGFuaW1hdGlvbi5vcHRzLnNwZWNpYWxFYXNpbmcgKTtcblxuXHRmb3IgKCA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrICkge1xuXHRcdHJlc3VsdCA9IEFuaW1hdGlvbi5wcmVmaWx0ZXJzWyBpbmRleCBdLmNhbGwoIGFuaW1hdGlvbiwgZWxlbSwgcHJvcHMsIGFuaW1hdGlvbi5vcHRzICk7XG5cdFx0aWYgKCByZXN1bHQgKSB7XG5cdFx0XHRpZiAoIGlzRnVuY3Rpb24oIHJlc3VsdC5zdG9wICkgKSB7XG5cdFx0XHRcdGpRdWVyeS5fcXVldWVIb29rcyggYW5pbWF0aW9uLmVsZW0sIGFuaW1hdGlvbi5vcHRzLnF1ZXVlICkuc3RvcCA9XG5cdFx0XHRcdFx0cmVzdWx0LnN0b3AuYmluZCggcmVzdWx0ICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0fVxuXG5cdGpRdWVyeS5tYXAoIHByb3BzLCBjcmVhdGVUd2VlbiwgYW5pbWF0aW9uICk7XG5cblx0aWYgKCBpc0Z1bmN0aW9uKCBhbmltYXRpb24ub3B0cy5zdGFydCApICkge1xuXHRcdGFuaW1hdGlvbi5vcHRzLnN0YXJ0LmNhbGwoIGVsZW0sIGFuaW1hdGlvbiApO1xuXHR9XG5cblx0Ly8gQXR0YWNoIGNhbGxiYWNrcyBmcm9tIG9wdGlvbnNcblx0YW5pbWF0aW9uXG5cdFx0LnByb2dyZXNzKCBhbmltYXRpb24ub3B0cy5wcm9ncmVzcyApXG5cdFx0LmRvbmUoIGFuaW1hdGlvbi5vcHRzLmRvbmUsIGFuaW1hdGlvbi5vcHRzLmNvbXBsZXRlIClcblx0XHQuZmFpbCggYW5pbWF0aW9uLm9wdHMuZmFpbCApXG5cdFx0LmFsd2F5cyggYW5pbWF0aW9uLm9wdHMuYWx3YXlzICk7XG5cblx0alF1ZXJ5LmZ4LnRpbWVyKFxuXHRcdGpRdWVyeS5leHRlbmQoIHRpY2ssIHtcblx0XHRcdGVsZW06IGVsZW0sXG5cdFx0XHRhbmltOiBhbmltYXRpb24sXG5cdFx0XHRxdWV1ZTogYW5pbWF0aW9uLm9wdHMucXVldWVcblx0XHR9IClcblx0KTtcblxuXHRyZXR1cm4gYW5pbWF0aW9uO1xufVxuXG5qUXVlcnkuQW5pbWF0aW9uID0galF1ZXJ5LmV4dGVuZCggQW5pbWF0aW9uLCB7XG5cblx0dHdlZW5lcnM6IHtcblx0XHRcIipcIjogWyBmdW5jdGlvbiggcHJvcCwgdmFsdWUgKSB7XG5cdFx0XHR2YXIgdHdlZW4gPSB0aGlzLmNyZWF0ZVR3ZWVuKCBwcm9wLCB2YWx1ZSApO1xuXHRcdFx0YWRqdXN0Q1NTKCB0d2Vlbi5lbGVtLCBwcm9wLCByY3NzTnVtLmV4ZWMoIHZhbHVlICksIHR3ZWVuICk7XG5cdFx0XHRyZXR1cm4gdHdlZW47XG5cdFx0fSBdXG5cdH0sXG5cblx0dHdlZW5lcjogZnVuY3Rpb24oIHByb3BzLCBjYWxsYmFjayApIHtcblx0XHRpZiAoIGlzRnVuY3Rpb24oIHByb3BzICkgKSB7XG5cdFx0XHRjYWxsYmFjayA9IHByb3BzO1xuXHRcdFx0cHJvcHMgPSBbIFwiKlwiIF07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHByb3BzID0gcHJvcHMubWF0Y2goIHJub3RodG1sd2hpdGUgKTtcblx0XHR9XG5cblx0XHR2YXIgcHJvcCxcblx0XHRcdGluZGV4ID0gMCxcblx0XHRcdGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuXHRcdGZvciAoIDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0XHRwcm9wID0gcHJvcHNbIGluZGV4IF07XG5cdFx0XHRBbmltYXRpb24udHdlZW5lcnNbIHByb3AgXSA9IEFuaW1hdGlvbi50d2VlbmVyc1sgcHJvcCBdIHx8IFtdO1xuXHRcdFx0QW5pbWF0aW9uLnR3ZWVuZXJzWyBwcm9wIF0udW5zaGlmdCggY2FsbGJhY2sgKTtcblx0XHR9XG5cdH0sXG5cblx0cHJlZmlsdGVyczogWyBkZWZhdWx0UHJlZmlsdGVyIF0sXG5cblx0cHJlZmlsdGVyOiBmdW5jdGlvbiggY2FsbGJhY2ssIHByZXBlbmQgKSB7XG5cdFx0aWYgKCBwcmVwZW5kICkge1xuXHRcdFx0QW5pbWF0aW9uLnByZWZpbHRlcnMudW5zaGlmdCggY2FsbGJhY2sgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0QW5pbWF0aW9uLnByZWZpbHRlcnMucHVzaCggY2FsbGJhY2sgKTtcblx0XHR9XG5cdH1cbn0gKTtcblxualF1ZXJ5LnNwZWVkID0gZnVuY3Rpb24oIHNwZWVkLCBlYXNpbmcsIGZuICkge1xuXHR2YXIgb3B0ID0gc3BlZWQgJiYgdHlwZW9mIHNwZWVkID09PSBcIm9iamVjdFwiID8galF1ZXJ5LmV4dGVuZCgge30sIHNwZWVkICkgOiB7XG5cdFx0Y29tcGxldGU6IGZuIHx8ICFmbiAmJiBlYXNpbmcgfHxcblx0XHRcdGlzRnVuY3Rpb24oIHNwZWVkICkgJiYgc3BlZWQsXG5cdFx0ZHVyYXRpb246IHNwZWVkLFxuXHRcdGVhc2luZzogZm4gJiYgZWFzaW5nIHx8IGVhc2luZyAmJiAhaXNGdW5jdGlvbiggZWFzaW5nICkgJiYgZWFzaW5nXG5cdH07XG5cblx0Ly8gR28gdG8gdGhlIGVuZCBzdGF0ZSBpZiBmeCBhcmUgb2ZmXG5cdGlmICggalF1ZXJ5LmZ4Lm9mZiApIHtcblx0XHRvcHQuZHVyYXRpb24gPSAwO1xuXG5cdH0gZWxzZSB7XG5cdFx0aWYgKCB0eXBlb2Ygb3B0LmR1cmF0aW9uICE9PSBcIm51bWJlclwiICkge1xuXHRcdFx0aWYgKCBvcHQuZHVyYXRpb24gaW4galF1ZXJ5LmZ4LnNwZWVkcyApIHtcblx0XHRcdFx0b3B0LmR1cmF0aW9uID0galF1ZXJ5LmZ4LnNwZWVkc1sgb3B0LmR1cmF0aW9uIF07XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9wdC5kdXJhdGlvbiA9IGpRdWVyeS5meC5zcGVlZHMuX2RlZmF1bHQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gTm9ybWFsaXplIG9wdC5xdWV1ZSAtIHRydWUvdW5kZWZpbmVkL251bGwgLT4gXCJmeFwiXG5cdGlmICggb3B0LnF1ZXVlID09IG51bGwgfHwgb3B0LnF1ZXVlID09PSB0cnVlICkge1xuXHRcdG9wdC5xdWV1ZSA9IFwiZnhcIjtcblx0fVxuXG5cdC8vIFF1ZXVlaW5nXG5cdG9wdC5vbGQgPSBvcHQuY29tcGxldGU7XG5cblx0b3B0LmNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCBpc0Z1bmN0aW9uKCBvcHQub2xkICkgKSB7XG5cdFx0XHRvcHQub2xkLmNhbGwoIHRoaXMgKTtcblx0XHR9XG5cblx0XHRpZiAoIG9wdC5xdWV1ZSApIHtcblx0XHRcdGpRdWVyeS5kZXF1ZXVlKCB0aGlzLCBvcHQucXVldWUgKTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIG9wdDtcbn07XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0ZmFkZVRvOiBmdW5jdGlvbiggc3BlZWQsIHRvLCBlYXNpbmcsIGNhbGxiYWNrICkge1xuXG5cdFx0Ly8gU2hvdyBhbnkgaGlkZGVuIGVsZW1lbnRzIGFmdGVyIHNldHRpbmcgb3BhY2l0eSB0byAwXG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyKCBpc0hpZGRlbldpdGhpblRyZWUgKS5jc3MoIFwib3BhY2l0eVwiLCAwICkuc2hvdygpXG5cblx0XHRcdC8vIEFuaW1hdGUgdG8gdGhlIHZhbHVlIHNwZWNpZmllZFxuXHRcdFx0LmVuZCgpLmFuaW1hdGUoIHsgb3BhY2l0eTogdG8gfSwgc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKTtcblx0fSxcblx0YW5pbWF0ZTogZnVuY3Rpb24oIHByb3AsIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICkge1xuXHRcdHZhciBlbXB0eSA9IGpRdWVyeS5pc0VtcHR5T2JqZWN0KCBwcm9wICksXG5cdFx0XHRvcHRhbGwgPSBqUXVlcnkuc3BlZWQoIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICksXG5cdFx0XHRkb0FuaW1hdGlvbiA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdC8vIE9wZXJhdGUgb24gYSBjb3B5IG9mIHByb3Agc28gcGVyLXByb3BlcnR5IGVhc2luZyB3b24ndCBiZSBsb3N0XG5cdFx0XHRcdHZhciBhbmltID0gQW5pbWF0aW9uKCB0aGlzLCBqUXVlcnkuZXh0ZW5kKCB7fSwgcHJvcCApLCBvcHRhbGwgKTtcblxuXHRcdFx0XHQvLyBFbXB0eSBhbmltYXRpb25zLCBvciBmaW5pc2hpbmcgcmVzb2x2ZXMgaW1tZWRpYXRlbHlcblx0XHRcdFx0aWYgKCBlbXB0eSB8fCBkYXRhUHJpdi5nZXQoIHRoaXMsIFwiZmluaXNoXCIgKSApIHtcblx0XHRcdFx0XHRhbmltLnN0b3AoIHRydWUgKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdGRvQW5pbWF0aW9uLmZpbmlzaCA9IGRvQW5pbWF0aW9uO1xuXG5cdFx0cmV0dXJuIGVtcHR5IHx8IG9wdGFsbC5xdWV1ZSA9PT0gZmFsc2UgP1xuXHRcdFx0dGhpcy5lYWNoKCBkb0FuaW1hdGlvbiApIDpcblx0XHRcdHRoaXMucXVldWUoIG9wdGFsbC5xdWV1ZSwgZG9BbmltYXRpb24gKTtcblx0fSxcblx0c3RvcDogZnVuY3Rpb24oIHR5cGUsIGNsZWFyUXVldWUsIGdvdG9FbmQgKSB7XG5cdFx0dmFyIHN0b3BRdWV1ZSA9IGZ1bmN0aW9uKCBob29rcyApIHtcblx0XHRcdHZhciBzdG9wID0gaG9va3Muc3RvcDtcblx0XHRcdGRlbGV0ZSBob29rcy5zdG9wO1xuXHRcdFx0c3RvcCggZ290b0VuZCApO1xuXHRcdH07XG5cblx0XHRpZiAoIHR5cGVvZiB0eXBlICE9PSBcInN0cmluZ1wiICkge1xuXHRcdFx0Z290b0VuZCA9IGNsZWFyUXVldWU7XG5cdFx0XHRjbGVhclF1ZXVlID0gdHlwZTtcblx0XHRcdHR5cGUgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXHRcdGlmICggY2xlYXJRdWV1ZSApIHtcblx0XHRcdHRoaXMucXVldWUoIHR5cGUgfHwgXCJmeFwiLCBbXSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGRlcXVldWUgPSB0cnVlLFxuXHRcdFx0XHRpbmRleCA9IHR5cGUgIT0gbnVsbCAmJiB0eXBlICsgXCJxdWV1ZUhvb2tzXCIsXG5cdFx0XHRcdHRpbWVycyA9IGpRdWVyeS50aW1lcnMsXG5cdFx0XHRcdGRhdGEgPSBkYXRhUHJpdi5nZXQoIHRoaXMgKTtcblxuXHRcdFx0aWYgKCBpbmRleCApIHtcblx0XHRcdFx0aWYgKCBkYXRhWyBpbmRleCBdICYmIGRhdGFbIGluZGV4IF0uc3RvcCApIHtcblx0XHRcdFx0XHRzdG9wUXVldWUoIGRhdGFbIGluZGV4IF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9yICggaW5kZXggaW4gZGF0YSApIHtcblx0XHRcdFx0XHRpZiAoIGRhdGFbIGluZGV4IF0gJiYgZGF0YVsgaW5kZXggXS5zdG9wICYmIHJydW4udGVzdCggaW5kZXggKSApIHtcblx0XHRcdFx0XHRcdHN0b3BRdWV1ZSggZGF0YVsgaW5kZXggXSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKCBpbmRleCA9IHRpbWVycy5sZW5ndGg7IGluZGV4LS07ICkge1xuXHRcdFx0XHRpZiAoIHRpbWVyc1sgaW5kZXggXS5lbGVtID09PSB0aGlzICYmXG5cdFx0XHRcdFx0KCB0eXBlID09IG51bGwgfHwgdGltZXJzWyBpbmRleCBdLnF1ZXVlID09PSB0eXBlICkgKSB7XG5cblx0XHRcdFx0XHR0aW1lcnNbIGluZGV4IF0uYW5pbS5zdG9wKCBnb3RvRW5kICk7XG5cdFx0XHRcdFx0ZGVxdWV1ZSA9IGZhbHNlO1xuXHRcdFx0XHRcdHRpbWVycy5zcGxpY2UoIGluZGV4LCAxICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gU3RhcnQgdGhlIG5leHQgaW4gdGhlIHF1ZXVlIGlmIHRoZSBsYXN0IHN0ZXAgd2Fzbid0IGZvcmNlZC5cblx0XHRcdC8vIFRpbWVycyBjdXJyZW50bHkgd2lsbCBjYWxsIHRoZWlyIGNvbXBsZXRlIGNhbGxiYWNrcywgd2hpY2hcblx0XHRcdC8vIHdpbGwgZGVxdWV1ZSBidXQgb25seSBpZiB0aGV5IHdlcmUgZ290b0VuZC5cblx0XHRcdGlmICggZGVxdWV1ZSB8fCAhZ290b0VuZCApIHtcblx0XHRcdFx0alF1ZXJ5LmRlcXVldWUoIHRoaXMsIHR5cGUgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cdGZpbmlzaDogZnVuY3Rpb24oIHR5cGUgKSB7XG5cdFx0aWYgKCB0eXBlICE9PSBmYWxzZSApIHtcblx0XHRcdHR5cGUgPSB0eXBlIHx8IFwiZnhcIjtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaW5kZXgsXG5cdFx0XHRcdGRhdGEgPSBkYXRhUHJpdi5nZXQoIHRoaXMgKSxcblx0XHRcdFx0cXVldWUgPSBkYXRhWyB0eXBlICsgXCJxdWV1ZVwiIF0sXG5cdFx0XHRcdGhvb2tzID0gZGF0YVsgdHlwZSArIFwicXVldWVIb29rc1wiIF0sXG5cdFx0XHRcdHRpbWVycyA9IGpRdWVyeS50aW1lcnMsXG5cdFx0XHRcdGxlbmd0aCA9IHF1ZXVlID8gcXVldWUubGVuZ3RoIDogMDtcblxuXHRcdFx0Ly8gRW5hYmxlIGZpbmlzaGluZyBmbGFnIG9uIHByaXZhdGUgZGF0YVxuXHRcdFx0ZGF0YS5maW5pc2ggPSB0cnVlO1xuXG5cdFx0XHQvLyBFbXB0eSB0aGUgcXVldWUgZmlyc3Rcblx0XHRcdGpRdWVyeS5xdWV1ZSggdGhpcywgdHlwZSwgW10gKTtcblxuXHRcdFx0aWYgKCBob29rcyAmJiBob29rcy5zdG9wICkge1xuXHRcdFx0XHRob29rcy5zdG9wLmNhbGwoIHRoaXMsIHRydWUgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTG9vayBmb3IgYW55IGFjdGl2ZSBhbmltYXRpb25zLCBhbmQgZmluaXNoIHRoZW1cblx0XHRcdGZvciAoIGluZGV4ID0gdGltZXJzLmxlbmd0aDsgaW5kZXgtLTsgKSB7XG5cdFx0XHRcdGlmICggdGltZXJzWyBpbmRleCBdLmVsZW0gPT09IHRoaXMgJiYgdGltZXJzWyBpbmRleCBdLnF1ZXVlID09PSB0eXBlICkge1xuXHRcdFx0XHRcdHRpbWVyc1sgaW5kZXggXS5hbmltLnN0b3AoIHRydWUgKTtcblx0XHRcdFx0XHR0aW1lcnMuc3BsaWNlKCBpbmRleCwgMSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIExvb2sgZm9yIGFueSBhbmltYXRpb25zIGluIHRoZSBvbGQgcXVldWUgYW5kIGZpbmlzaCB0aGVtXG5cdFx0XHRmb3IgKCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrICkge1xuXHRcdFx0XHRpZiAoIHF1ZXVlWyBpbmRleCBdICYmIHF1ZXVlWyBpbmRleCBdLmZpbmlzaCApIHtcblx0XHRcdFx0XHRxdWV1ZVsgaW5kZXggXS5maW5pc2guY2FsbCggdGhpcyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIFR1cm4gb2ZmIGZpbmlzaGluZyBmbGFnXG5cdFx0XHRkZWxldGUgZGF0YS5maW5pc2g7XG5cdFx0fSApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5lYWNoKCBbIFwidG9nZ2xlXCIsIFwic2hvd1wiLCBcImhpZGVcIiBdLCBmdW5jdGlvbiggX2ksIG5hbWUgKSB7XG5cdHZhciBjc3NGbiA9IGpRdWVyeS5mblsgbmFtZSBdO1xuXHRqUXVlcnkuZm5bIG5hbWUgXSA9IGZ1bmN0aW9uKCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayApIHtcblx0XHRyZXR1cm4gc3BlZWQgPT0gbnVsbCB8fCB0eXBlb2Ygc3BlZWQgPT09IFwiYm9vbGVhblwiID9cblx0XHRcdGNzc0ZuLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKSA6XG5cdFx0XHR0aGlzLmFuaW1hdGUoIGdlbkZ4KCBuYW1lLCB0cnVlICksIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICk7XG5cdH07XG59ICk7XG5cbi8vIEdlbmVyYXRlIHNob3J0Y3V0cyBmb3IgY3VzdG9tIGFuaW1hdGlvbnNcbmpRdWVyeS5lYWNoKCB7XG5cdHNsaWRlRG93bjogZ2VuRngoIFwic2hvd1wiICksXG5cdHNsaWRlVXA6IGdlbkZ4KCBcImhpZGVcIiApLFxuXHRzbGlkZVRvZ2dsZTogZ2VuRngoIFwidG9nZ2xlXCIgKSxcblx0ZmFkZUluOiB7IG9wYWNpdHk6IFwic2hvd1wiIH0sXG5cdGZhZGVPdXQ6IHsgb3BhY2l0eTogXCJoaWRlXCIgfSxcblx0ZmFkZVRvZ2dsZTogeyBvcGFjaXR5OiBcInRvZ2dsZVwiIH1cbn0sIGZ1bmN0aW9uKCBuYW1lLCBwcm9wcyApIHtcblx0alF1ZXJ5LmZuWyBuYW1lIF0gPSBmdW5jdGlvbiggc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKSB7XG5cdFx0cmV0dXJuIHRoaXMuYW5pbWF0ZSggcHJvcHMsIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICk7XG5cdH07XG59ICk7XG5cbmpRdWVyeS50aW1lcnMgPSBbXTtcbmpRdWVyeS5meC50aWNrID0gZnVuY3Rpb24oKSB7XG5cdHZhciB0aW1lcixcblx0XHRpID0gMCxcblx0XHR0aW1lcnMgPSBqUXVlcnkudGltZXJzO1xuXG5cdGZ4Tm93ID0gRGF0ZS5ub3coKTtcblxuXHRmb3IgKCA7IGkgPCB0aW1lcnMubGVuZ3RoOyBpKysgKSB7XG5cdFx0dGltZXIgPSB0aW1lcnNbIGkgXTtcblxuXHRcdC8vIFJ1biB0aGUgdGltZXIgYW5kIHNhZmVseSByZW1vdmUgaXQgd2hlbiBkb25lIChhbGxvd2luZyBmb3IgZXh0ZXJuYWwgcmVtb3ZhbClcblx0XHRpZiAoICF0aW1lcigpICYmIHRpbWVyc1sgaSBdID09PSB0aW1lciApIHtcblx0XHRcdHRpbWVycy5zcGxpY2UoIGktLSwgMSApO1xuXHRcdH1cblx0fVxuXG5cdGlmICggIXRpbWVycy5sZW5ndGggKSB7XG5cdFx0alF1ZXJ5LmZ4LnN0b3AoKTtcblx0fVxuXHRmeE5vdyA9IHVuZGVmaW5lZDtcbn07XG5cbmpRdWVyeS5meC50aW1lciA9IGZ1bmN0aW9uKCB0aW1lciApIHtcblx0alF1ZXJ5LnRpbWVycy5wdXNoKCB0aW1lciApO1xuXHRqUXVlcnkuZnguc3RhcnQoKTtcbn07XG5cbmpRdWVyeS5meC5pbnRlcnZhbCA9IDEzO1xualF1ZXJ5LmZ4LnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG5cdGlmICggaW5Qcm9ncmVzcyApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpblByb2dyZXNzID0gdHJ1ZTtcblx0c2NoZWR1bGUoKTtcbn07XG5cbmpRdWVyeS5meC5zdG9wID0gZnVuY3Rpb24oKSB7XG5cdGluUHJvZ3Jlc3MgPSBudWxsO1xufTtcblxualF1ZXJ5LmZ4LnNwZWVkcyA9IHtcblx0c2xvdzogNjAwLFxuXHRmYXN0OiAyMDAsXG5cblx0Ly8gRGVmYXVsdCBzcGVlZFxuXHRfZGVmYXVsdDogNDAwXG59O1xuXG5cbi8vIEJhc2VkIG9mZiBvZiB0aGUgcGx1Z2luIGJ5IENsaW50IEhlbGZlcnMsIHdpdGggcGVybWlzc2lvbi5cbi8vIGh0dHBzOi8vd2ViLmFyY2hpdmUub3JnL3dlYi8yMDEwMDMyNDAxNDc0Ny9odHRwOi8vYmxpbmRzaWduYWxzLmNvbS9pbmRleC5waHAvMjAwOS8wNy9qcXVlcnktZGVsYXkvXG5qUXVlcnkuZm4uZGVsYXkgPSBmdW5jdGlvbiggdGltZSwgdHlwZSApIHtcblx0dGltZSA9IGpRdWVyeS5meCA/IGpRdWVyeS5meC5zcGVlZHNbIHRpbWUgXSB8fCB0aW1lIDogdGltZTtcblx0dHlwZSA9IHR5cGUgfHwgXCJmeFwiO1xuXG5cdHJldHVybiB0aGlzLnF1ZXVlKCB0eXBlLCBmdW5jdGlvbiggbmV4dCwgaG9va3MgKSB7XG5cdFx0dmFyIHRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCggbmV4dCwgdGltZSApO1xuXHRcdGhvb2tzLnN0b3AgPSBmdW5jdGlvbigpIHtcblx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQoIHRpbWVvdXQgKTtcblx0XHR9O1xuXHR9ICk7XG59O1xuXG5cbiggZnVuY3Rpb24oKSB7XG5cdHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiaW5wdXRcIiApLFxuXHRcdHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwic2VsZWN0XCIgKSxcblx0XHRvcHQgPSBzZWxlY3QuYXBwZW5kQ2hpbGQoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwib3B0aW9uXCIgKSApO1xuXG5cdGlucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XG5cblx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMyBvbmx5XG5cdC8vIERlZmF1bHQgdmFsdWUgZm9yIGEgY2hlY2tib3ggc2hvdWxkIGJlIFwib25cIlxuXHRzdXBwb3J0LmNoZWNrT24gPSBpbnB1dC52YWx1ZSAhPT0gXCJcIjtcblxuXHQvLyBTdXBwb3J0OiBJRSA8PTExIG9ubHlcblx0Ly8gTXVzdCBhY2Nlc3Mgc2VsZWN0ZWRJbmRleCB0byBtYWtlIGRlZmF1bHQgb3B0aW9ucyBzZWxlY3Rcblx0c3VwcG9ydC5vcHRTZWxlY3RlZCA9IG9wdC5zZWxlY3RlZDtcblxuXHQvLyBTdXBwb3J0OiBJRSA8PTExIG9ubHlcblx0Ly8gQW4gaW5wdXQgbG9zZXMgaXRzIHZhbHVlIGFmdGVyIGJlY29taW5nIGEgcmFkaW9cblx0aW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImlucHV0XCIgKTtcblx0aW5wdXQudmFsdWUgPSBcInRcIjtcblx0aW5wdXQudHlwZSA9IFwicmFkaW9cIjtcblx0c3VwcG9ydC5yYWRpb1ZhbHVlID0gaW5wdXQudmFsdWUgPT09IFwidFwiO1xufSApKCk7XG5cblxudmFyIGJvb2xIb29rLFxuXHRhdHRySGFuZGxlID0galF1ZXJ5LmV4cHIuYXR0ckhhbmRsZTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRhdHRyOiBmdW5jdGlvbiggbmFtZSwgdmFsdWUgKSB7XG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgalF1ZXJ5LmF0dHIsIG5hbWUsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoID4gMSApO1xuXHR9LFxuXG5cdHJlbW92ZUF0dHI6IGZ1bmN0aW9uKCBuYW1lICkge1xuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5LnJlbW92ZUF0dHIoIHRoaXMsIG5hbWUgKTtcblx0XHR9ICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmV4dGVuZCgge1xuXHRhdHRyOiBmdW5jdGlvbiggZWxlbSwgbmFtZSwgdmFsdWUgKSB7XG5cdFx0dmFyIHJldCwgaG9va3MsXG5cdFx0XHRuVHlwZSA9IGVsZW0ubm9kZVR5cGU7XG5cblx0XHQvLyBEb24ndCBnZXQvc2V0IGF0dHJpYnV0ZXMgb24gdGV4dCwgY29tbWVudCBhbmQgYXR0cmlidXRlIG5vZGVzXG5cdFx0aWYgKCBuVHlwZSA9PT0gMyB8fCBuVHlwZSA9PT0gOCB8fCBuVHlwZSA9PT0gMiApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBGYWxsYmFjayB0byBwcm9wIHdoZW4gYXR0cmlidXRlcyBhcmUgbm90IHN1cHBvcnRlZFxuXHRcdGlmICggdHlwZW9mIGVsZW0uZ2V0QXR0cmlidXRlID09PSBcInVuZGVmaW5lZFwiICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeS5wcm9wKCBlbGVtLCBuYW1lLCB2YWx1ZSApO1xuXHRcdH1cblxuXHRcdC8vIEF0dHJpYnV0ZSBob29rcyBhcmUgZGV0ZXJtaW5lZCBieSB0aGUgbG93ZXJjYXNlIHZlcnNpb25cblx0XHQvLyBHcmFiIG5lY2Vzc2FyeSBob29rIGlmIG9uZSBpcyBkZWZpbmVkXG5cdFx0aWYgKCBuVHlwZSAhPT0gMSB8fCAhalF1ZXJ5LmlzWE1MRG9jKCBlbGVtICkgKSB7XG5cdFx0XHRob29rcyA9IGpRdWVyeS5hdHRySG9va3NbIG5hbWUudG9Mb3dlckNhc2UoKSBdIHx8XG5cdFx0XHRcdCggalF1ZXJ5LmV4cHIubWF0Y2guYm9vbC50ZXN0KCBuYW1lICkgPyBib29sSG9vayA6IHVuZGVmaW5lZCApO1xuXHRcdH1cblxuXHRcdGlmICggdmFsdWUgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdGlmICggdmFsdWUgPT09IG51bGwgKSB7XG5cdFx0XHRcdGpRdWVyeS5yZW1vdmVBdHRyKCBlbGVtLCBuYW1lICk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBob29rcyAmJiBcInNldFwiIGluIGhvb2tzICYmXG5cdFx0XHRcdCggcmV0ID0gaG9va3Muc2V0KCBlbGVtLCB2YWx1ZSwgbmFtZSApICkgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdH1cblxuXHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoIG5hbWUsIHZhbHVlICsgXCJcIiApO1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblxuXHRcdGlmICggaG9va3MgJiYgXCJnZXRcIiBpbiBob29rcyAmJiAoIHJldCA9IGhvb2tzLmdldCggZWxlbSwgbmFtZSApICkgIT09IG51bGwgKSB7XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH1cblxuXHRcdHJldCA9IGpRdWVyeS5maW5kLmF0dHIoIGVsZW0sIG5hbWUgKTtcblxuXHRcdC8vIE5vbi1leGlzdGVudCBhdHRyaWJ1dGVzIHJldHVybiBudWxsLCB3ZSBub3JtYWxpemUgdG8gdW5kZWZpbmVkXG5cdFx0cmV0dXJuIHJldCA9PSBudWxsID8gdW5kZWZpbmVkIDogcmV0O1xuXHR9LFxuXG5cdGF0dHJIb29rczoge1xuXHRcdHR5cGU6IHtcblx0XHRcdHNldDogZnVuY3Rpb24oIGVsZW0sIHZhbHVlICkge1xuXHRcdFx0XHRpZiAoICFzdXBwb3J0LnJhZGlvVmFsdWUgJiYgdmFsdWUgPT09IFwicmFkaW9cIiAmJlxuXHRcdFx0XHRcdG5vZGVOYW1lKCBlbGVtLCBcImlucHV0XCIgKSApIHtcblx0XHRcdFx0XHR2YXIgdmFsID0gZWxlbS52YWx1ZTtcblx0XHRcdFx0XHRlbGVtLnNldEF0dHJpYnV0ZSggXCJ0eXBlXCIsIHZhbHVlICk7XG5cdFx0XHRcdFx0aWYgKCB2YWwgKSB7XG5cdFx0XHRcdFx0XHRlbGVtLnZhbHVlID0gdmFsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0cmVtb3ZlQXR0cjogZnVuY3Rpb24oIGVsZW0sIHZhbHVlICkge1xuXHRcdHZhciBuYW1lLFxuXHRcdFx0aSA9IDAsXG5cblx0XHRcdC8vIEF0dHJpYnV0ZSBuYW1lcyBjYW4gY29udGFpbiBub24tSFRNTCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnNcblx0XHRcdC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI2F0dHJpYnV0ZXMtMlxuXHRcdFx0YXR0ck5hbWVzID0gdmFsdWUgJiYgdmFsdWUubWF0Y2goIHJub3RodG1sd2hpdGUgKTtcblxuXHRcdGlmICggYXR0ck5hbWVzICYmIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0XHR3aGlsZSAoICggbmFtZSA9IGF0dHJOYW1lc1sgaSsrIF0gKSApIHtcblx0XHRcdFx0ZWxlbS5yZW1vdmVBdHRyaWJ1dGUoIG5hbWUgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0gKTtcblxuLy8gSG9va3MgZm9yIGJvb2xlYW4gYXR0cmlidXRlc1xuYm9vbEhvb2sgPSB7XG5cdHNldDogZnVuY3Rpb24oIGVsZW0sIHZhbHVlLCBuYW1lICkge1xuXHRcdGlmICggdmFsdWUgPT09IGZhbHNlICkge1xuXG5cdFx0XHQvLyBSZW1vdmUgYm9vbGVhbiBhdHRyaWJ1dGVzIHdoZW4gc2V0IHRvIGZhbHNlXG5cdFx0XHRqUXVlcnkucmVtb3ZlQXR0ciggZWxlbSwgbmFtZSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbGVtLnNldEF0dHJpYnV0ZSggbmFtZSwgbmFtZSApO1xuXHRcdH1cblx0XHRyZXR1cm4gbmFtZTtcblx0fVxufTtcblxualF1ZXJ5LmVhY2goIGpRdWVyeS5leHByLm1hdGNoLmJvb2wuc291cmNlLm1hdGNoKCAvXFx3Ky9nICksIGZ1bmN0aW9uKCBfaSwgbmFtZSApIHtcblx0dmFyIGdldHRlciA9IGF0dHJIYW5kbGVbIG5hbWUgXSB8fCBqUXVlcnkuZmluZC5hdHRyO1xuXG5cdGF0dHJIYW5kbGVbIG5hbWUgXSA9IGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCBpc1hNTCApIHtcblx0XHR2YXIgcmV0LCBoYW5kbGUsXG5cdFx0XHRsb3dlcmNhc2VOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0aWYgKCAhaXNYTUwgKSB7XG5cblx0XHRcdC8vIEF2b2lkIGFuIGluZmluaXRlIGxvb3AgYnkgdGVtcG9yYXJpbHkgcmVtb3ZpbmcgdGhpcyBmdW5jdGlvbiBmcm9tIHRoZSBnZXR0ZXJcblx0XHRcdGhhbmRsZSA9IGF0dHJIYW5kbGVbIGxvd2VyY2FzZU5hbWUgXTtcblx0XHRcdGF0dHJIYW5kbGVbIGxvd2VyY2FzZU5hbWUgXSA9IHJldDtcblx0XHRcdHJldCA9IGdldHRlciggZWxlbSwgbmFtZSwgaXNYTUwgKSAhPSBudWxsID9cblx0XHRcdFx0bG93ZXJjYXNlTmFtZSA6XG5cdFx0XHRcdG51bGw7XG5cdFx0XHRhdHRySGFuZGxlWyBsb3dlcmNhc2VOYW1lIF0gPSBoYW5kbGU7XG5cdFx0fVxuXHRcdHJldHVybiByZXQ7XG5cdH07XG59ICk7XG5cblxuXG5cbnZhciByZm9jdXNhYmxlID0gL14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxcblx0cmNsaWNrYWJsZSA9IC9eKD86YXxhcmVhKSQvaTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRwcm9wOiBmdW5jdGlvbiggbmFtZSwgdmFsdWUgKSB7XG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgalF1ZXJ5LnByb3AsIG5hbWUsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoID4gMSApO1xuXHR9LFxuXG5cdHJlbW92ZVByb3A6IGZ1bmN0aW9uKCBuYW1lICkge1xuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0ZGVsZXRlIHRoaXNbIGpRdWVyeS5wcm9wRml4WyBuYW1lIF0gfHwgbmFtZSBdO1xuXHRcdH0gKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cdHByb3A6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCB2YWx1ZSApIHtcblx0XHR2YXIgcmV0LCBob29rcyxcblx0XHRcdG5UeXBlID0gZWxlbS5ub2RlVHlwZTtcblxuXHRcdC8vIERvbid0IGdldC9zZXQgcHJvcGVydGllcyBvbiB0ZXh0LCBjb21tZW50IGFuZCBhdHRyaWJ1dGUgbm9kZXNcblx0XHRpZiAoIG5UeXBlID09PSAzIHx8IG5UeXBlID09PSA4IHx8IG5UeXBlID09PSAyICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggblR5cGUgIT09IDEgfHwgIWpRdWVyeS5pc1hNTERvYyggZWxlbSApICkge1xuXG5cdFx0XHQvLyBGaXggbmFtZSBhbmQgYXR0YWNoIGhvb2tzXG5cdFx0XHRuYW1lID0galF1ZXJ5LnByb3BGaXhbIG5hbWUgXSB8fCBuYW1lO1xuXHRcdFx0aG9va3MgPSBqUXVlcnkucHJvcEhvb2tzWyBuYW1lIF07XG5cdFx0fVxuXG5cdFx0aWYgKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0aWYgKCBob29rcyAmJiBcInNldFwiIGluIGhvb2tzICYmXG5cdFx0XHRcdCggcmV0ID0gaG9va3Muc2V0KCBlbGVtLCB2YWx1ZSwgbmFtZSApICkgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuICggZWxlbVsgbmFtZSBdID0gdmFsdWUgKTtcblx0XHR9XG5cblx0XHRpZiAoIGhvb2tzICYmIFwiZ2V0XCIgaW4gaG9va3MgJiYgKCByZXQgPSBob29rcy5nZXQoIGVsZW0sIG5hbWUgKSApICE9PSBudWxsICkge1xuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9XG5cblx0XHRyZXR1cm4gZWxlbVsgbmFtZSBdO1xuXHR9LFxuXG5cdHByb3BIb29rczoge1xuXHRcdHRhYkluZGV4OiB7XG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9OSAtIDExIG9ubHlcblx0XHRcdFx0Ly8gZWxlbS50YWJJbmRleCBkb2Vzbid0IGFsd2F5cyByZXR1cm4gdGhlXG5cdFx0XHRcdC8vIGNvcnJlY3QgdmFsdWUgd2hlbiBpdCBoYXNuJ3QgYmVlbiBleHBsaWNpdGx5IHNldFxuXHRcdFx0XHQvLyBodHRwczovL3dlYi5hcmNoaXZlLm9yZy93ZWIvMjAxNDExMTYyMzMzNDcvaHR0cDovL2ZsdWlkcHJvamVjdC5vcmcvYmxvZy8yMDA4LzAxLzA5L2dldHRpbmctc2V0dGluZy1hbmQtcmVtb3ZpbmctdGFiaW5kZXgtdmFsdWVzLXdpdGgtamF2YXNjcmlwdC9cblx0XHRcdFx0Ly8gVXNlIHByb3BlciBhdHRyaWJ1dGUgcmV0cmlldmFsKCMxMjA3Milcblx0XHRcdFx0dmFyIHRhYmluZGV4ID0galF1ZXJ5LmZpbmQuYXR0ciggZWxlbSwgXCJ0YWJpbmRleFwiICk7XG5cblx0XHRcdFx0aWYgKCB0YWJpbmRleCApIHtcblx0XHRcdFx0XHRyZXR1cm4gcGFyc2VJbnQoIHRhYmluZGV4LCAxMCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHJmb2N1c2FibGUudGVzdCggZWxlbS5ub2RlTmFtZSApIHx8XG5cdFx0XHRcdFx0cmNsaWNrYWJsZS50ZXN0KCBlbGVtLm5vZGVOYW1lICkgJiZcblx0XHRcdFx0XHRlbGVtLmhyZWZcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdHByb3BGaXg6IHtcblx0XHRcImZvclwiOiBcImh0bWxGb3JcIixcblx0XHRcImNsYXNzXCI6IFwiY2xhc3NOYW1lXCJcblx0fVxufSApO1xuXG4vLyBTdXBwb3J0OiBJRSA8PTExIG9ubHlcbi8vIEFjY2Vzc2luZyB0aGUgc2VsZWN0ZWRJbmRleCBwcm9wZXJ0eVxuLy8gZm9yY2VzIHRoZSBicm93c2VyIHRvIHJlc3BlY3Qgc2V0dGluZyBzZWxlY3RlZFxuLy8gb24gdGhlIG9wdGlvblxuLy8gVGhlIGdldHRlciBlbnN1cmVzIGEgZGVmYXVsdCBvcHRpb24gaXMgc2VsZWN0ZWRcbi8vIHdoZW4gaW4gYW4gb3B0Z3JvdXBcbi8vIGVzbGludCBydWxlIFwibm8tdW51c2VkLWV4cHJlc3Npb25zXCIgaXMgZGlzYWJsZWQgZm9yIHRoaXMgY29kZVxuLy8gc2luY2UgaXQgY29uc2lkZXJzIHN1Y2ggYWNjZXNzaW9ucyBub29wXG5pZiAoICFzdXBwb3J0Lm9wdFNlbGVjdGVkICkge1xuXHRqUXVlcnkucHJvcEhvb2tzLnNlbGVjdGVkID0ge1xuXHRcdGdldDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHRcdC8qIGVzbGludCBuby11bnVzZWQtZXhwcmVzc2lvbnM6IFwib2ZmXCIgKi9cblxuXHRcdFx0dmFyIHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcblx0XHRcdGlmICggcGFyZW50ICYmIHBhcmVudC5wYXJlbnROb2RlICkge1xuXHRcdFx0XHRwYXJlbnQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fSxcblx0XHRzZXQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXG5cdFx0XHQvKiBlc2xpbnQgbm8tdW51c2VkLWV4cHJlc3Npb25zOiBcIm9mZlwiICovXG5cblx0XHRcdHZhciBwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGU7XG5cdFx0XHRpZiAoIHBhcmVudCApIHtcblx0XHRcdFx0cGFyZW50LnNlbGVjdGVkSW5kZXg7XG5cblx0XHRcdFx0aWYgKCBwYXJlbnQucGFyZW50Tm9kZSApIHtcblx0XHRcdFx0XHRwYXJlbnQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG5qUXVlcnkuZWFjaCggW1xuXHRcInRhYkluZGV4XCIsXG5cdFwicmVhZE9ubHlcIixcblx0XCJtYXhMZW5ndGhcIixcblx0XCJjZWxsU3BhY2luZ1wiLFxuXHRcImNlbGxQYWRkaW5nXCIsXG5cdFwicm93U3BhblwiLFxuXHRcImNvbFNwYW5cIixcblx0XCJ1c2VNYXBcIixcblx0XCJmcmFtZUJvcmRlclwiLFxuXHRcImNvbnRlbnRFZGl0YWJsZVwiXG5dLCBmdW5jdGlvbigpIHtcblx0alF1ZXJ5LnByb3BGaXhbIHRoaXMudG9Mb3dlckNhc2UoKSBdID0gdGhpcztcbn0gKTtcblxuXG5cblxuXHQvLyBTdHJpcCBhbmQgY29sbGFwc2Ugd2hpdGVzcGFjZSBhY2NvcmRpbmcgdG8gSFRNTCBzcGVjXG5cdC8vIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNzdHJpcC1hbmQtY29sbGFwc2UtYXNjaWktd2hpdGVzcGFjZVxuXHRmdW5jdGlvbiBzdHJpcEFuZENvbGxhcHNlKCB2YWx1ZSApIHtcblx0XHR2YXIgdG9rZW5zID0gdmFsdWUubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbXTtcblx0XHRyZXR1cm4gdG9rZW5zLmpvaW4oIFwiIFwiICk7XG5cdH1cblxuXG5mdW5jdGlvbiBnZXRDbGFzcyggZWxlbSApIHtcblx0cmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlICYmIGVsZW0uZ2V0QXR0cmlidXRlKCBcImNsYXNzXCIgKSB8fCBcIlwiO1xufVxuXG5mdW5jdGlvbiBjbGFzc2VzVG9BcnJheSggdmFsdWUgKSB7XG5cdGlmICggQXJyYXkuaXNBcnJheSggdmFsdWUgKSApIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblx0aWYgKCB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0cmV0dXJuIHZhbHVlLm1hdGNoKCBybm90aHRtbHdoaXRlICkgfHwgW107XG5cdH1cblx0cmV0dXJuIFtdO1xufVxuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGFkZENsYXNzOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0dmFyIGNsYXNzZXMsIGVsZW0sIGN1ciwgY3VyVmFsdWUsIGNsYXp6LCBqLCBmaW5hbFZhbHVlLFxuXHRcdFx0aSA9IDA7XG5cblx0XHRpZiAoIGlzRnVuY3Rpb24oIHZhbHVlICkgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbiggaiApIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuYWRkQ2xhc3MoIHZhbHVlLmNhbGwoIHRoaXMsIGosIGdldENsYXNzKCB0aGlzICkgKSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdGNsYXNzZXMgPSBjbGFzc2VzVG9BcnJheSggdmFsdWUgKTtcblxuXHRcdGlmICggY2xhc3Nlcy5sZW5ndGggKSB7XG5cdFx0XHR3aGlsZSAoICggZWxlbSA9IHRoaXNbIGkrKyBdICkgKSB7XG5cdFx0XHRcdGN1clZhbHVlID0gZ2V0Q2xhc3MoIGVsZW0gKTtcblx0XHRcdFx0Y3VyID0gZWxlbS5ub2RlVHlwZSA9PT0gMSAmJiAoIFwiIFwiICsgc3RyaXBBbmRDb2xsYXBzZSggY3VyVmFsdWUgKSArIFwiIFwiICk7XG5cblx0XHRcdFx0aWYgKCBjdXIgKSB7XG5cdFx0XHRcdFx0aiA9IDA7XG5cdFx0XHRcdFx0d2hpbGUgKCAoIGNsYXp6ID0gY2xhc3Nlc1sgaisrIF0gKSApIHtcblx0XHRcdFx0XHRcdGlmICggY3VyLmluZGV4T2YoIFwiIFwiICsgY2xhenogKyBcIiBcIiApIDwgMCApIHtcblx0XHRcdFx0XHRcdFx0Y3VyICs9IGNsYXp6ICsgXCIgXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gT25seSBhc3NpZ24gaWYgZGlmZmVyZW50IHRvIGF2b2lkIHVubmVlZGVkIHJlbmRlcmluZy5cblx0XHRcdFx0XHRmaW5hbFZhbHVlID0gc3RyaXBBbmRDb2xsYXBzZSggY3VyICk7XG5cdFx0XHRcdFx0aWYgKCBjdXJWYWx1ZSAhPT0gZmluYWxWYWx1ZSApIHtcblx0XHRcdFx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCBcImNsYXNzXCIsIGZpbmFsVmFsdWUgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRyZW1vdmVDbGFzczogZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHZhciBjbGFzc2VzLCBlbGVtLCBjdXIsIGN1clZhbHVlLCBjbGF6eiwgaiwgZmluYWxWYWx1ZSxcblx0XHRcdGkgPSAwO1xuXG5cdFx0aWYgKCBpc0Z1bmN0aW9uKCB2YWx1ZSApICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oIGogKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLnJlbW92ZUNsYXNzKCB2YWx1ZS5jYWxsKCB0aGlzLCBqLCBnZXRDbGFzcyggdGhpcyApICkgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRpZiAoICFhcmd1bWVudHMubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuYXR0ciggXCJjbGFzc1wiLCBcIlwiICk7XG5cdFx0fVxuXG5cdFx0Y2xhc3NlcyA9IGNsYXNzZXNUb0FycmF5KCB2YWx1ZSApO1xuXG5cdFx0aWYgKCBjbGFzc2VzLmxlbmd0aCApIHtcblx0XHRcdHdoaWxlICggKCBlbGVtID0gdGhpc1sgaSsrIF0gKSApIHtcblx0XHRcdFx0Y3VyVmFsdWUgPSBnZXRDbGFzcyggZWxlbSApO1xuXG5cdFx0XHRcdC8vIFRoaXMgZXhwcmVzc2lvbiBpcyBoZXJlIGZvciBiZXR0ZXIgY29tcHJlc3NpYmlsaXR5IChzZWUgYWRkQ2xhc3MpXG5cdFx0XHRcdGN1ciA9IGVsZW0ubm9kZVR5cGUgPT09IDEgJiYgKCBcIiBcIiArIHN0cmlwQW5kQ29sbGFwc2UoIGN1clZhbHVlICkgKyBcIiBcIiApO1xuXG5cdFx0XHRcdGlmICggY3VyICkge1xuXHRcdFx0XHRcdGogPSAwO1xuXHRcdFx0XHRcdHdoaWxlICggKCBjbGF6eiA9IGNsYXNzZXNbIGorKyBdICkgKSB7XG5cblx0XHRcdFx0XHRcdC8vIFJlbW92ZSAqYWxsKiBpbnN0YW5jZXNcblx0XHRcdFx0XHRcdHdoaWxlICggY3VyLmluZGV4T2YoIFwiIFwiICsgY2xhenogKyBcIiBcIiApID4gLTEgKSB7XG5cdFx0XHRcdFx0XHRcdGN1ciA9IGN1ci5yZXBsYWNlKCBcIiBcIiArIGNsYXp6ICsgXCIgXCIsIFwiIFwiICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gT25seSBhc3NpZ24gaWYgZGlmZmVyZW50IHRvIGF2b2lkIHVubmVlZGVkIHJlbmRlcmluZy5cblx0XHRcdFx0XHRmaW5hbFZhbHVlID0gc3RyaXBBbmRDb2xsYXBzZSggY3VyICk7XG5cdFx0XHRcdFx0aWYgKCBjdXJWYWx1ZSAhPT0gZmluYWxWYWx1ZSApIHtcblx0XHRcdFx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCBcImNsYXNzXCIsIGZpbmFsVmFsdWUgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHR0b2dnbGVDbGFzczogZnVuY3Rpb24oIHZhbHVlLCBzdGF0ZVZhbCApIHtcblx0XHR2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZSxcblx0XHRcdGlzVmFsaWRWYWx1ZSA9IHR5cGUgPT09IFwic3RyaW5nXCIgfHwgQXJyYXkuaXNBcnJheSggdmFsdWUgKTtcblxuXHRcdGlmICggdHlwZW9mIHN0YXRlVmFsID09PSBcImJvb2xlYW5cIiAmJiBpc1ZhbGlkVmFsdWUgKSB7XG5cdFx0XHRyZXR1cm4gc3RhdGVWYWwgPyB0aGlzLmFkZENsYXNzKCB2YWx1ZSApIDogdGhpcy5yZW1vdmVDbGFzcyggdmFsdWUgKTtcblx0XHR9XG5cblx0XHRpZiAoIGlzRnVuY3Rpb24oIHZhbHVlICkgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbiggaSApIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkudG9nZ2xlQ2xhc3MoXG5cdFx0XHRcdFx0dmFsdWUuY2FsbCggdGhpcywgaSwgZ2V0Q2xhc3MoIHRoaXMgKSwgc3RhdGVWYWwgKSxcblx0XHRcdFx0XHRzdGF0ZVZhbFxuXHRcdFx0XHQpO1xuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGNsYXNzTmFtZSwgaSwgc2VsZiwgY2xhc3NOYW1lcztcblxuXHRcdFx0aWYgKCBpc1ZhbGlkVmFsdWUgKSB7XG5cblx0XHRcdFx0Ly8gVG9nZ2xlIGluZGl2aWR1YWwgY2xhc3MgbmFtZXNcblx0XHRcdFx0aSA9IDA7XG5cdFx0XHRcdHNlbGYgPSBqUXVlcnkoIHRoaXMgKTtcblx0XHRcdFx0Y2xhc3NOYW1lcyA9IGNsYXNzZXNUb0FycmF5KCB2YWx1ZSApO1xuXG5cdFx0XHRcdHdoaWxlICggKCBjbGFzc05hbWUgPSBjbGFzc05hbWVzWyBpKysgXSApICkge1xuXG5cdFx0XHRcdFx0Ly8gQ2hlY2sgZWFjaCBjbGFzc05hbWUgZ2l2ZW4sIHNwYWNlIHNlcGFyYXRlZCBsaXN0XG5cdFx0XHRcdFx0aWYgKCBzZWxmLmhhc0NsYXNzKCBjbGFzc05hbWUgKSApIHtcblx0XHRcdFx0XHRcdHNlbGYucmVtb3ZlQ2xhc3MoIGNsYXNzTmFtZSApO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzZWxmLmFkZENsYXNzKCBjbGFzc05hbWUgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0Ly8gVG9nZ2xlIHdob2xlIGNsYXNzIG5hbWVcblx0XHRcdH0gZWxzZSBpZiAoIHZhbHVlID09PSB1bmRlZmluZWQgfHwgdHlwZSA9PT0gXCJib29sZWFuXCIgKSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IGdldENsYXNzKCB0aGlzICk7XG5cdFx0XHRcdGlmICggY2xhc3NOYW1lICkge1xuXG5cdFx0XHRcdFx0Ly8gU3RvcmUgY2xhc3NOYW1lIGlmIHNldFxuXHRcdFx0XHRcdGRhdGFQcml2LnNldCggdGhpcywgXCJfX2NsYXNzTmFtZV9fXCIsIGNsYXNzTmFtZSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSWYgdGhlIGVsZW1lbnQgaGFzIGEgY2xhc3MgbmFtZSBvciBpZiB3ZSdyZSBwYXNzZWQgYGZhbHNlYCxcblx0XHRcdFx0Ly8gdGhlbiByZW1vdmUgdGhlIHdob2xlIGNsYXNzbmFtZSAoaWYgdGhlcmUgd2FzIG9uZSwgdGhlIGFib3ZlIHNhdmVkIGl0KS5cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIGJyaW5nIGJhY2sgd2hhdGV2ZXIgd2FzIHByZXZpb3VzbHkgc2F2ZWQgKGlmIGFueXRoaW5nKSxcblx0XHRcdFx0Ly8gZmFsbGluZyBiYWNrIHRvIHRoZSBlbXB0eSBzdHJpbmcgaWYgbm90aGluZyB3YXMgc3RvcmVkLlxuXHRcdFx0XHRpZiAoIHRoaXMuc2V0QXR0cmlidXRlICkge1xuXHRcdFx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKCBcImNsYXNzXCIsXG5cdFx0XHRcdFx0XHRjbGFzc05hbWUgfHwgdmFsdWUgPT09IGZhbHNlID9cblx0XHRcdFx0XHRcdFx0XCJcIiA6XG5cdFx0XHRcdFx0XHRcdGRhdGFQcml2LmdldCggdGhpcywgXCJfX2NsYXNzTmFtZV9fXCIgKSB8fCBcIlwiXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblxuXHRoYXNDbGFzczogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHZhciBjbGFzc05hbWUsIGVsZW0sXG5cdFx0XHRpID0gMDtcblxuXHRcdGNsYXNzTmFtZSA9IFwiIFwiICsgc2VsZWN0b3IgKyBcIiBcIjtcblx0XHR3aGlsZSAoICggZWxlbSA9IHRoaXNbIGkrKyBdICkgKSB7XG5cdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgJiZcblx0XHRcdFx0KCBcIiBcIiArIHN0cmlwQW5kQ29sbGFwc2UoIGdldENsYXNzKCBlbGVtICkgKSArIFwiIFwiICkuaW5kZXhPZiggY2xhc3NOYW1lICkgPiAtMSApIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59ICk7XG5cblxuXG5cbnZhciBycmV0dXJuID0gL1xcci9nO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdHZhbDogZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHZhciBob29rcywgcmV0LCB2YWx1ZUlzRnVuY3Rpb24sXG5cdFx0XHRlbGVtID0gdGhpc1sgMCBdO1xuXG5cdFx0aWYgKCAhYXJndW1lbnRzLmxlbmd0aCApIHtcblx0XHRcdGlmICggZWxlbSApIHtcblx0XHRcdFx0aG9va3MgPSBqUXVlcnkudmFsSG9va3NbIGVsZW0udHlwZSBdIHx8XG5cdFx0XHRcdFx0alF1ZXJ5LnZhbEhvb2tzWyBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgXTtcblxuXHRcdFx0XHRpZiAoIGhvb2tzICYmXG5cdFx0XHRcdFx0XCJnZXRcIiBpbiBob29rcyAmJlxuXHRcdFx0XHRcdCggcmV0ID0gaG9va3MuZ2V0KCBlbGVtLCBcInZhbHVlXCIgKSApICE9PSB1bmRlZmluZWRcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldCA9IGVsZW0udmFsdWU7XG5cblx0XHRcdFx0Ly8gSGFuZGxlIG1vc3QgY29tbW9uIHN0cmluZyBjYXNlc1xuXHRcdFx0XHRpZiAoIHR5cGVvZiByZXQgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJldC5yZXBsYWNlKCBycmV0dXJuLCBcIlwiICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBIYW5kbGUgY2FzZXMgd2hlcmUgdmFsdWUgaXMgbnVsbC91bmRlZiBvciBudW1iZXJcblx0XHRcdFx0cmV0dXJuIHJldCA9PSBudWxsID8gXCJcIiA6IHJldDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhbHVlSXNGdW5jdGlvbiA9IGlzRnVuY3Rpb24oIHZhbHVlICk7XG5cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbiggaSApIHtcblx0XHRcdHZhciB2YWw7XG5cblx0XHRcdGlmICggdGhpcy5ub2RlVHlwZSAhPT0gMSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHZhbHVlSXNGdW5jdGlvbiApIHtcblx0XHRcdFx0dmFsID0gdmFsdWUuY2FsbCggdGhpcywgaSwgalF1ZXJ5KCB0aGlzICkudmFsKCkgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhbCA9IHZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBUcmVhdCBudWxsL3VuZGVmaW5lZCBhcyBcIlwiOyBjb252ZXJ0IG51bWJlcnMgdG8gc3RyaW5nXG5cdFx0XHRpZiAoIHZhbCA9PSBudWxsICkge1xuXHRcdFx0XHR2YWwgPSBcIlwiO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCB0eXBlb2YgdmFsID09PSBcIm51bWJlclwiICkge1xuXHRcdFx0XHR2YWwgKz0gXCJcIjtcblxuXHRcdFx0fSBlbHNlIGlmICggQXJyYXkuaXNBcnJheSggdmFsICkgKSB7XG5cdFx0XHRcdHZhbCA9IGpRdWVyeS5tYXAoIHZhbCwgZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0XHRcdHJldHVybiB2YWx1ZSA9PSBudWxsID8gXCJcIiA6IHZhbHVlICsgXCJcIjtcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXG5cdFx0XHRob29rcyA9IGpRdWVyeS52YWxIb29rc1sgdGhpcy50eXBlIF0gfHwgalF1ZXJ5LnZhbEhvb2tzWyB0aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgXTtcblxuXHRcdFx0Ly8gSWYgc2V0IHJldHVybnMgdW5kZWZpbmVkLCBmYWxsIGJhY2sgdG8gbm9ybWFsIHNldHRpbmdcblx0XHRcdGlmICggIWhvb2tzIHx8ICEoIFwic2V0XCIgaW4gaG9va3MgKSB8fCBob29rcy5zZXQoIHRoaXMsIHZhbCwgXCJ2YWx1ZVwiICkgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0dGhpcy52YWx1ZSA9IHZhbDtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmV4dGVuZCgge1xuXHR2YWxIb29rczoge1xuXHRcdG9wdGlvbjoge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdFx0XHR2YXIgdmFsID0galF1ZXJ5LmZpbmQuYXR0ciggZWxlbSwgXCJ2YWx1ZVwiICk7XG5cdFx0XHRcdHJldHVybiB2YWwgIT0gbnVsbCA/XG5cdFx0XHRcdFx0dmFsIDpcblxuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9MTAgLSAxMSBvbmx5XG5cdFx0XHRcdFx0Ly8gb3B0aW9uLnRleHQgdGhyb3dzIGV4Y2VwdGlvbnMgKCMxNDY4NiwgIzE0ODU4KVxuXHRcdFx0XHRcdC8vIFN0cmlwIGFuZCBjb2xsYXBzZSB3aGl0ZXNwYWNlXG5cdFx0XHRcdFx0Ly8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jc3RyaXAtYW5kLWNvbGxhcHNlLXdoaXRlc3BhY2Vcblx0XHRcdFx0XHRzdHJpcEFuZENvbGxhcHNlKCBqUXVlcnkudGV4dCggZWxlbSApICk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRzZWxlY3Q6IHtcblx0XHRcdGdldDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdHZhciB2YWx1ZSwgb3B0aW9uLCBpLFxuXHRcdFx0XHRcdG9wdGlvbnMgPSBlbGVtLm9wdGlvbnMsXG5cdFx0XHRcdFx0aW5kZXggPSBlbGVtLnNlbGVjdGVkSW5kZXgsXG5cdFx0XHRcdFx0b25lID0gZWxlbS50eXBlID09PSBcInNlbGVjdC1vbmVcIixcblx0XHRcdFx0XHR2YWx1ZXMgPSBvbmUgPyBudWxsIDogW10sXG5cdFx0XHRcdFx0bWF4ID0gb25lID8gaW5kZXggKyAxIDogb3B0aW9ucy5sZW5ndGg7XG5cblx0XHRcdFx0aWYgKCBpbmRleCA8IDAgKSB7XG5cdFx0XHRcdFx0aSA9IG1heDtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGkgPSBvbmUgPyBpbmRleCA6IDA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBMb29wIHRocm91Z2ggYWxsIHRoZSBzZWxlY3RlZCBvcHRpb25zXG5cdFx0XHRcdGZvciAoIDsgaSA8IG1heDsgaSsrICkge1xuXHRcdFx0XHRcdG9wdGlvbiA9IG9wdGlvbnNbIGkgXTtcblxuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG5cdFx0XHRcdFx0Ly8gSUU4LTkgZG9lc24ndCB1cGRhdGUgc2VsZWN0ZWQgYWZ0ZXIgZm9ybSByZXNldCAoIzI1NTEpXG5cdFx0XHRcdFx0aWYgKCAoIG9wdGlvbi5zZWxlY3RlZCB8fCBpID09PSBpbmRleCApICYmXG5cblx0XHRcdFx0XHRcdFx0Ly8gRG9uJ3QgcmV0dXJuIG9wdGlvbnMgdGhhdCBhcmUgZGlzYWJsZWQgb3IgaW4gYSBkaXNhYmxlZCBvcHRncm91cFxuXHRcdFx0XHRcdFx0XHQhb3B0aW9uLmRpc2FibGVkICYmXG5cdFx0XHRcdFx0XHRcdCggIW9wdGlvbi5wYXJlbnROb2RlLmRpc2FibGVkIHx8XG5cdFx0XHRcdFx0XHRcdFx0IW5vZGVOYW1lKCBvcHRpb24ucGFyZW50Tm9kZSwgXCJvcHRncm91cFwiICkgKSApIHtcblxuXHRcdFx0XHRcdFx0Ly8gR2V0IHRoZSBzcGVjaWZpYyB2YWx1ZSBmb3IgdGhlIG9wdGlvblxuXHRcdFx0XHRcdFx0dmFsdWUgPSBqUXVlcnkoIG9wdGlvbiApLnZhbCgpO1xuXG5cdFx0XHRcdFx0XHQvLyBXZSBkb24ndCBuZWVkIGFuIGFycmF5IGZvciBvbmUgc2VsZWN0c1xuXHRcdFx0XHRcdFx0aWYgKCBvbmUgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gTXVsdGktU2VsZWN0cyByZXR1cm4gYW4gYXJyYXlcblx0XHRcdFx0XHRcdHZhbHVlcy5wdXNoKCB2YWx1ZSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB2YWx1ZXM7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uKCBlbGVtLCB2YWx1ZSApIHtcblx0XHRcdFx0dmFyIG9wdGlvblNldCwgb3B0aW9uLFxuXHRcdFx0XHRcdG9wdGlvbnMgPSBlbGVtLm9wdGlvbnMsXG5cdFx0XHRcdFx0dmFsdWVzID0galF1ZXJ5Lm1ha2VBcnJheSggdmFsdWUgKSxcblx0XHRcdFx0XHRpID0gb3B0aW9ucy5sZW5ndGg7XG5cblx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0b3B0aW9uID0gb3B0aW9uc1sgaSBdO1xuXG5cdFx0XHRcdFx0LyogZXNsaW50LWRpc2FibGUgbm8tY29uZC1hc3NpZ24gKi9cblxuXHRcdFx0XHRcdGlmICggb3B0aW9uLnNlbGVjdGVkID1cblx0XHRcdFx0XHRcdGpRdWVyeS5pbkFycmF5KCBqUXVlcnkudmFsSG9va3Mub3B0aW9uLmdldCggb3B0aW9uICksIHZhbHVlcyApID4gLTFcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdG9wdGlvblNldCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LyogZXNsaW50LWVuYWJsZSBuby1jb25kLWFzc2lnbiAqL1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gRm9yY2UgYnJvd3NlcnMgdG8gYmVoYXZlIGNvbnNpc3RlbnRseSB3aGVuIG5vbi1tYXRjaGluZyB2YWx1ZSBpcyBzZXRcblx0XHRcdFx0aWYgKCAhb3B0aW9uU2V0ICkge1xuXHRcdFx0XHRcdGVsZW0uc2VsZWN0ZWRJbmRleCA9IC0xO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2YWx1ZXM7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59ICk7XG5cbi8vIFJhZGlvcyBhbmQgY2hlY2tib3hlcyBnZXR0ZXIvc2V0dGVyXG5qUXVlcnkuZWFjaCggWyBcInJhZGlvXCIsIFwiY2hlY2tib3hcIiBdLCBmdW5jdGlvbigpIHtcblx0alF1ZXJ5LnZhbEhvb2tzWyB0aGlzIF0gPSB7XG5cdFx0c2V0OiBmdW5jdGlvbiggZWxlbSwgdmFsdWUgKSB7XG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIHZhbHVlICkgKSB7XG5cdFx0XHRcdHJldHVybiAoIGVsZW0uY2hlY2tlZCA9IGpRdWVyeS5pbkFycmF5KCBqUXVlcnkoIGVsZW0gKS52YWwoKSwgdmFsdWUgKSA+IC0xICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRpZiAoICFzdXBwb3J0LmNoZWNrT24gKSB7XG5cdFx0alF1ZXJ5LnZhbEhvb2tzWyB0aGlzIF0uZ2V0ID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoIFwidmFsdWVcIiApID09PSBudWxsID8gXCJvblwiIDogZWxlbS52YWx1ZTtcblx0XHR9O1xuXHR9XG59ICk7XG5cblxuXG5cbi8vIFJldHVybiBqUXVlcnkgZm9yIGF0dHJpYnV0ZXMtb25seSBpbmNsdXNpb25cblxuXG5zdXBwb3J0LmZvY3VzaW4gPSBcIm9uZm9jdXNpblwiIGluIHdpbmRvdztcblxuXG52YXIgcmZvY3VzTW9ycGggPSAvXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC8sXG5cdHN0b3BQcm9wYWdhdGlvbkNhbGxiYWNrID0gZnVuY3Rpb24oIGUgKSB7XG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0fTtcblxualF1ZXJ5LmV4dGVuZCggalF1ZXJ5LmV2ZW50LCB7XG5cblx0dHJpZ2dlcjogZnVuY3Rpb24oIGV2ZW50LCBkYXRhLCBlbGVtLCBvbmx5SGFuZGxlcnMgKSB7XG5cblx0XHR2YXIgaSwgY3VyLCB0bXAsIGJ1YmJsZVR5cGUsIG9udHlwZSwgaGFuZGxlLCBzcGVjaWFsLCBsYXN0RWxlbWVudCxcblx0XHRcdGV2ZW50UGF0aCA9IFsgZWxlbSB8fCBkb2N1bWVudCBdLFxuXHRcdFx0dHlwZSA9IGhhc093bi5jYWxsKCBldmVudCwgXCJ0eXBlXCIgKSA/IGV2ZW50LnR5cGUgOiBldmVudCxcblx0XHRcdG5hbWVzcGFjZXMgPSBoYXNPd24uY2FsbCggZXZlbnQsIFwibmFtZXNwYWNlXCIgKSA/IGV2ZW50Lm5hbWVzcGFjZS5zcGxpdCggXCIuXCIgKSA6IFtdO1xuXG5cdFx0Y3VyID0gbGFzdEVsZW1lbnQgPSB0bXAgPSBlbGVtID0gZWxlbSB8fCBkb2N1bWVudDtcblxuXHRcdC8vIERvbid0IGRvIGV2ZW50cyBvbiB0ZXh0IGFuZCBjb21tZW50IG5vZGVzXG5cdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAzIHx8IGVsZW0ubm9kZVR5cGUgPT09IDggKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gZm9jdXMvYmx1ciBtb3JwaHMgdG8gZm9jdXNpbi9vdXQ7IGVuc3VyZSB3ZSdyZSBub3QgZmlyaW5nIHRoZW0gcmlnaHQgbm93XG5cdFx0aWYgKCByZm9jdXNNb3JwaC50ZXN0KCB0eXBlICsgalF1ZXJ5LmV2ZW50LnRyaWdnZXJlZCApICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggdHlwZS5pbmRleE9mKCBcIi5cIiApID4gLTEgKSB7XG5cblx0XHRcdC8vIE5hbWVzcGFjZWQgdHJpZ2dlcjsgY3JlYXRlIGEgcmVnZXhwIHRvIG1hdGNoIGV2ZW50IHR5cGUgaW4gaGFuZGxlKClcblx0XHRcdG5hbWVzcGFjZXMgPSB0eXBlLnNwbGl0KCBcIi5cIiApO1xuXHRcdFx0dHlwZSA9IG5hbWVzcGFjZXMuc2hpZnQoKTtcblx0XHRcdG5hbWVzcGFjZXMuc29ydCgpO1xuXHRcdH1cblx0XHRvbnR5cGUgPSB0eXBlLmluZGV4T2YoIFwiOlwiICkgPCAwICYmIFwib25cIiArIHR5cGU7XG5cblx0XHQvLyBDYWxsZXIgY2FuIHBhc3MgaW4gYSBqUXVlcnkuRXZlbnQgb2JqZWN0LCBPYmplY3QsIG9yIGp1c3QgYW4gZXZlbnQgdHlwZSBzdHJpbmdcblx0XHRldmVudCA9IGV2ZW50WyBqUXVlcnkuZXhwYW5kbyBdID9cblx0XHRcdGV2ZW50IDpcblx0XHRcdG5ldyBqUXVlcnkuRXZlbnQoIHR5cGUsIHR5cGVvZiBldmVudCA9PT0gXCJvYmplY3RcIiAmJiBldmVudCApO1xuXG5cdFx0Ly8gVHJpZ2dlciBiaXRtYXNrOiAmIDEgZm9yIG5hdGl2ZSBoYW5kbGVyczsgJiAyIGZvciBqUXVlcnkgKGFsd2F5cyB0cnVlKVxuXHRcdGV2ZW50LmlzVHJpZ2dlciA9IG9ubHlIYW5kbGVycyA/IDIgOiAzO1xuXHRcdGV2ZW50Lm5hbWVzcGFjZSA9IG5hbWVzcGFjZXMuam9pbiggXCIuXCIgKTtcblx0XHRldmVudC5ybmFtZXNwYWNlID0gZXZlbnQubmFtZXNwYWNlID9cblx0XHRcdG5ldyBSZWdFeHAoIFwiKF58XFxcXC4pXCIgKyBuYW1lc3BhY2VzLmpvaW4oIFwiXFxcXC4oPzouKlxcXFwufClcIiApICsgXCIoXFxcXC58JClcIiApIDpcblx0XHRcdG51bGw7XG5cblx0XHQvLyBDbGVhbiB1cCB0aGUgZXZlbnQgaW4gY2FzZSBpdCBpcyBiZWluZyByZXVzZWRcblx0XHRldmVudC5yZXN1bHQgPSB1bmRlZmluZWQ7XG5cdFx0aWYgKCAhZXZlbnQudGFyZ2V0ICkge1xuXHRcdFx0ZXZlbnQudGFyZ2V0ID0gZWxlbTtcblx0XHR9XG5cblx0XHQvLyBDbG9uZSBhbnkgaW5jb21pbmcgZGF0YSBhbmQgcHJlcGVuZCB0aGUgZXZlbnQsIGNyZWF0aW5nIHRoZSBoYW5kbGVyIGFyZyBsaXN0XG5cdFx0ZGF0YSA9IGRhdGEgPT0gbnVsbCA/XG5cdFx0XHRbIGV2ZW50IF0gOlxuXHRcdFx0alF1ZXJ5Lm1ha2VBcnJheSggZGF0YSwgWyBldmVudCBdICk7XG5cblx0XHQvLyBBbGxvdyBzcGVjaWFsIGV2ZW50cyB0byBkcmF3IG91dHNpZGUgdGhlIGxpbmVzXG5cdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsWyB0eXBlIF0gfHwge307XG5cdFx0aWYgKCAhb25seUhhbmRsZXJzICYmIHNwZWNpYWwudHJpZ2dlciAmJiBzcGVjaWFsLnRyaWdnZXIuYXBwbHkoIGVsZW0sIGRhdGEgKSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZXJtaW5lIGV2ZW50IHByb3BhZ2F0aW9uIHBhdGggaW4gYWR2YW5jZSwgcGVyIFczQyBldmVudHMgc3BlYyAoIzk5NTEpXG5cdFx0Ly8gQnViYmxlIHVwIHRvIGRvY3VtZW50LCB0aGVuIHRvIHdpbmRvdzsgd2F0Y2ggZm9yIGEgZ2xvYmFsIG93bmVyRG9jdW1lbnQgdmFyICgjOTcyNClcblx0XHRpZiAoICFvbmx5SGFuZGxlcnMgJiYgIXNwZWNpYWwubm9CdWJibGUgJiYgIWlzV2luZG93KCBlbGVtICkgKSB7XG5cblx0XHRcdGJ1YmJsZVR5cGUgPSBzcGVjaWFsLmRlbGVnYXRlVHlwZSB8fCB0eXBlO1xuXHRcdFx0aWYgKCAhcmZvY3VzTW9ycGgudGVzdCggYnViYmxlVHlwZSArIHR5cGUgKSApIHtcblx0XHRcdFx0Y3VyID0gY3VyLnBhcmVudE5vZGU7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKCA7IGN1cjsgY3VyID0gY3VyLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdGV2ZW50UGF0aC5wdXNoKCBjdXIgKTtcblx0XHRcdFx0dG1wID0gY3VyO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBPbmx5IGFkZCB3aW5kb3cgaWYgd2UgZ290IHRvIGRvY3VtZW50IChlLmcuLCBub3QgcGxhaW4gb2JqIG9yIGRldGFjaGVkIERPTSlcblx0XHRcdGlmICggdG1wID09PSAoIGVsZW0ub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudCApICkge1xuXHRcdFx0XHRldmVudFBhdGgucHVzaCggdG1wLmRlZmF1bHRWaWV3IHx8IHRtcC5wYXJlbnRXaW5kb3cgfHwgd2luZG93ICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRmlyZSBoYW5kbGVycyBvbiB0aGUgZXZlbnQgcGF0aFxuXHRcdGkgPSAwO1xuXHRcdHdoaWxlICggKCBjdXIgPSBldmVudFBhdGhbIGkrKyBdICkgJiYgIWV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkgKSB7XG5cdFx0XHRsYXN0RWxlbWVudCA9IGN1cjtcblx0XHRcdGV2ZW50LnR5cGUgPSBpID4gMSA/XG5cdFx0XHRcdGJ1YmJsZVR5cGUgOlxuXHRcdFx0XHRzcGVjaWFsLmJpbmRUeXBlIHx8IHR5cGU7XG5cblx0XHRcdC8vIGpRdWVyeSBoYW5kbGVyXG5cdFx0XHRoYW5kbGUgPSAoIGRhdGFQcml2LmdldCggY3VyLCBcImV2ZW50c1wiICkgfHwgT2JqZWN0LmNyZWF0ZSggbnVsbCApIClbIGV2ZW50LnR5cGUgXSAmJlxuXHRcdFx0XHRkYXRhUHJpdi5nZXQoIGN1ciwgXCJoYW5kbGVcIiApO1xuXHRcdFx0aWYgKCBoYW5kbGUgKSB7XG5cdFx0XHRcdGhhbmRsZS5hcHBseSggY3VyLCBkYXRhICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE5hdGl2ZSBoYW5kbGVyXG5cdFx0XHRoYW5kbGUgPSBvbnR5cGUgJiYgY3VyWyBvbnR5cGUgXTtcblx0XHRcdGlmICggaGFuZGxlICYmIGhhbmRsZS5hcHBseSAmJiBhY2NlcHREYXRhKCBjdXIgKSApIHtcblx0XHRcdFx0ZXZlbnQucmVzdWx0ID0gaGFuZGxlLmFwcGx5KCBjdXIsIGRhdGEgKTtcblx0XHRcdFx0aWYgKCBldmVudC5yZXN1bHQgPT09IGZhbHNlICkge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0ZXZlbnQudHlwZSA9IHR5cGU7XG5cblx0XHQvLyBJZiBub2JvZHkgcHJldmVudGVkIHRoZSBkZWZhdWx0IGFjdGlvbiwgZG8gaXQgbm93XG5cdFx0aWYgKCAhb25seUhhbmRsZXJzICYmICFldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSApIHtcblxuXHRcdFx0aWYgKCAoICFzcGVjaWFsLl9kZWZhdWx0IHx8XG5cdFx0XHRcdHNwZWNpYWwuX2RlZmF1bHQuYXBwbHkoIGV2ZW50UGF0aC5wb3AoKSwgZGF0YSApID09PSBmYWxzZSApICYmXG5cdFx0XHRcdGFjY2VwdERhdGEoIGVsZW0gKSApIHtcblxuXHRcdFx0XHQvLyBDYWxsIGEgbmF0aXZlIERPTSBtZXRob2Qgb24gdGhlIHRhcmdldCB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgdGhlIGV2ZW50LlxuXHRcdFx0XHQvLyBEb24ndCBkbyBkZWZhdWx0IGFjdGlvbnMgb24gd2luZG93LCB0aGF0J3Mgd2hlcmUgZ2xvYmFsIHZhcmlhYmxlcyBiZSAoIzYxNzApXG5cdFx0XHRcdGlmICggb250eXBlICYmIGlzRnVuY3Rpb24oIGVsZW1bIHR5cGUgXSApICYmICFpc1dpbmRvdyggZWxlbSApICkge1xuXG5cdFx0XHRcdFx0Ly8gRG9uJ3QgcmUtdHJpZ2dlciBhbiBvbkZPTyBldmVudCB3aGVuIHdlIGNhbGwgaXRzIEZPTygpIG1ldGhvZFxuXHRcdFx0XHRcdHRtcCA9IGVsZW1bIG9udHlwZSBdO1xuXG5cdFx0XHRcdFx0aWYgKCB0bXAgKSB7XG5cdFx0XHRcdFx0XHRlbGVtWyBvbnR5cGUgXSA9IG51bGw7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gUHJldmVudCByZS10cmlnZ2VyaW5nIG9mIHRoZSBzYW1lIGV2ZW50LCBzaW5jZSB3ZSBhbHJlYWR5IGJ1YmJsZWQgaXQgYWJvdmVcblx0XHRcdFx0XHRqUXVlcnkuZXZlbnQudHJpZ2dlcmVkID0gdHlwZTtcblxuXHRcdFx0XHRcdGlmICggZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSApIHtcblx0XHRcdFx0XHRcdGxhc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoIHR5cGUsIHN0b3BQcm9wYWdhdGlvbkNhbGxiYWNrICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0ZWxlbVsgdHlwZSBdKCk7XG5cblx0XHRcdFx0XHRpZiAoIGV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkgKSB7XG5cdFx0XHRcdFx0XHRsYXN0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCB0eXBlLCBzdG9wUHJvcGFnYXRpb25DYWxsYmFjayApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGpRdWVyeS5ldmVudC50cmlnZ2VyZWQgPSB1bmRlZmluZWQ7XG5cblx0XHRcdFx0XHRpZiAoIHRtcCApIHtcblx0XHRcdFx0XHRcdGVsZW1bIG9udHlwZSBdID0gdG1wO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBldmVudC5yZXN1bHQ7XG5cdH0sXG5cblx0Ly8gUGlnZ3liYWNrIG9uIGEgZG9ub3IgZXZlbnQgdG8gc2ltdWxhdGUgYSBkaWZmZXJlbnQgb25lXG5cdC8vIFVzZWQgb25seSBmb3IgYGZvY3VzKGluIHwgb3V0KWAgZXZlbnRzXG5cdHNpbXVsYXRlOiBmdW5jdGlvbiggdHlwZSwgZWxlbSwgZXZlbnQgKSB7XG5cdFx0dmFyIGUgPSBqUXVlcnkuZXh0ZW5kKFxuXHRcdFx0bmV3IGpRdWVyeS5FdmVudCgpLFxuXHRcdFx0ZXZlbnQsXG5cdFx0XHR7XG5cdFx0XHRcdHR5cGU6IHR5cGUsXG5cdFx0XHRcdGlzU2ltdWxhdGVkOiB0cnVlXG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdGpRdWVyeS5ldmVudC50cmlnZ2VyKCBlLCBudWxsLCBlbGVtICk7XG5cdH1cblxufSApO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cblx0dHJpZ2dlcjogZnVuY3Rpb24oIHR5cGUsIGRhdGEgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkuZXZlbnQudHJpZ2dlciggdHlwZSwgZGF0YSwgdGhpcyApO1xuXHRcdH0gKTtcblx0fSxcblx0dHJpZ2dlckhhbmRsZXI6IGZ1bmN0aW9uKCB0eXBlLCBkYXRhICkge1xuXHRcdHZhciBlbGVtID0gdGhpc1sgMCBdO1xuXHRcdGlmICggZWxlbSApIHtcblx0XHRcdHJldHVybiBqUXVlcnkuZXZlbnQudHJpZ2dlciggdHlwZSwgZGF0YSwgZWxlbSwgdHJ1ZSApO1xuXHRcdH1cblx0fVxufSApO1xuXG5cbi8vIFN1cHBvcnQ6IEZpcmVmb3ggPD00NFxuLy8gRmlyZWZveCBkb2Vzbid0IGhhdmUgZm9jdXMoaW4gfCBvdXQpIGV2ZW50c1xuLy8gUmVsYXRlZCB0aWNrZXQgLSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02ODc3ODdcbi8vXG4vLyBTdXBwb3J0OiBDaHJvbWUgPD00OCAtIDQ5LCBTYWZhcmkgPD05LjAgLSA5LjFcbi8vIGZvY3VzKGluIHwgb3V0KSBldmVudHMgZmlyZSBhZnRlciBmb2N1cyAmIGJsdXIgZXZlbnRzLFxuLy8gd2hpY2ggaXMgc3BlYyB2aW9sYXRpb24gLSBodHRwOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMy1FdmVudHMvI2V2ZW50cy1mb2N1c2V2ZW50LWV2ZW50LW9yZGVyXG4vLyBSZWxhdGVkIHRpY2tldCAtIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ0OTg1N1xuaWYgKCAhc3VwcG9ydC5mb2N1c2luICkge1xuXHRqUXVlcnkuZWFjaCggeyBmb2N1czogXCJmb2N1c2luXCIsIGJsdXI6IFwiZm9jdXNvdXRcIiB9LCBmdW5jdGlvbiggb3JpZywgZml4ICkge1xuXG5cdFx0Ly8gQXR0YWNoIGEgc2luZ2xlIGNhcHR1cmluZyBoYW5kbGVyIG9uIHRoZSBkb2N1bWVudCB3aGlsZSBzb21lb25lIHdhbnRzIGZvY3VzaW4vZm9jdXNvdXRcblx0XHR2YXIgaGFuZGxlciA9IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdGpRdWVyeS5ldmVudC5zaW11bGF0ZSggZml4LCBldmVudC50YXJnZXQsIGpRdWVyeS5ldmVudC5maXgoIGV2ZW50ICkgKTtcblx0XHR9O1xuXG5cdFx0alF1ZXJ5LmV2ZW50LnNwZWNpYWxbIGZpeCBdID0ge1xuXHRcdFx0c2V0dXA6IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdC8vIEhhbmRsZTogcmVndWxhciBub2RlcyAodmlhIGB0aGlzLm93bmVyRG9jdW1lbnRgKSwgd2luZG93XG5cdFx0XHRcdC8vICh2aWEgYHRoaXMuZG9jdW1lbnRgKSAmIGRvY3VtZW50ICh2aWEgYHRoaXNgKS5cblx0XHRcdFx0dmFyIGRvYyA9IHRoaXMub3duZXJEb2N1bWVudCB8fCB0aGlzLmRvY3VtZW50IHx8IHRoaXMsXG5cdFx0XHRcdFx0YXR0YWNoZXMgPSBkYXRhUHJpdi5hY2Nlc3MoIGRvYywgZml4ICk7XG5cblx0XHRcdFx0aWYgKCAhYXR0YWNoZXMgKSB7XG5cdFx0XHRcdFx0ZG9jLmFkZEV2ZW50TGlzdGVuZXIoIG9yaWcsIGhhbmRsZXIsIHRydWUgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkYXRhUHJpdi5hY2Nlc3MoIGRvYywgZml4LCAoIGF0dGFjaGVzIHx8IDAgKSArIDEgKTtcblx0XHRcdH0sXG5cdFx0XHR0ZWFyZG93bjogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBkb2MgPSB0aGlzLm93bmVyRG9jdW1lbnQgfHwgdGhpcy5kb2N1bWVudCB8fCB0aGlzLFxuXHRcdFx0XHRcdGF0dGFjaGVzID0gZGF0YVByaXYuYWNjZXNzKCBkb2MsIGZpeCApIC0gMTtcblxuXHRcdFx0XHRpZiAoICFhdHRhY2hlcyApIHtcblx0XHRcdFx0XHRkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lciggb3JpZywgaGFuZGxlciwgdHJ1ZSApO1xuXHRcdFx0XHRcdGRhdGFQcml2LnJlbW92ZSggZG9jLCBmaXggKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGRhdGFQcml2LmFjY2VzcyggZG9jLCBmaXgsIGF0dGFjaGVzICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHR9ICk7XG59XG52YXIgbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb247XG5cbnZhciBub25jZSA9IHsgZ3VpZDogRGF0ZS5ub3coKSB9O1xuXG52YXIgcnF1ZXJ5ID0gKCAvXFw/LyApO1xuXG5cblxuLy8gQ3Jvc3MtYnJvd3NlciB4bWwgcGFyc2luZ1xualF1ZXJ5LnBhcnNlWE1MID0gZnVuY3Rpb24oIGRhdGEgKSB7XG5cdHZhciB4bWwsIHBhcnNlckVycm9yRWxlbTtcblx0aWYgKCAhZGF0YSB8fCB0eXBlb2YgZGF0YSAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdC8vIFN1cHBvcnQ6IElFIDkgLSAxMSBvbmx5XG5cdC8vIElFIHRocm93cyBvbiBwYXJzZUZyb21TdHJpbmcgd2l0aCBpbnZhbGlkIGlucHV0LlxuXHR0cnkge1xuXHRcdHhtbCA9ICggbmV3IHdpbmRvdy5ET01QYXJzZXIoKSApLnBhcnNlRnJvbVN0cmluZyggZGF0YSwgXCJ0ZXh0L3htbFwiICk7XG5cdH0gY2F0Y2ggKCBlICkge31cblxuXHRwYXJzZXJFcnJvckVsZW0gPSB4bWwgJiYgeG1sLmdldEVsZW1lbnRzQnlUYWdOYW1lKCBcInBhcnNlcmVycm9yXCIgKVsgMCBdO1xuXHRpZiAoICF4bWwgfHwgcGFyc2VyRXJyb3JFbGVtICkge1xuXHRcdGpRdWVyeS5lcnJvciggXCJJbnZhbGlkIFhNTDogXCIgKyAoXG5cdFx0XHRwYXJzZXJFcnJvckVsZW0gP1xuXHRcdFx0XHRqUXVlcnkubWFwKCBwYXJzZXJFcnJvckVsZW0uY2hpbGROb2RlcywgZnVuY3Rpb24oIGVsICkge1xuXHRcdFx0XHRcdHJldHVybiBlbC50ZXh0Q29udGVudDtcblx0XHRcdFx0fSApLmpvaW4oIFwiXFxuXCIgKSA6XG5cdFx0XHRcdGRhdGFcblx0XHQpICk7XG5cdH1cblx0cmV0dXJuIHhtbDtcbn07XG5cblxudmFyXG5cdHJicmFja2V0ID0gL1xcW1xcXSQvLFxuXHRyQ1JMRiA9IC9cXHI/XFxuL2csXG5cdHJzdWJtaXR0ZXJUeXBlcyA9IC9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaSxcblx0cnN1Ym1pdHRhYmxlID0gL14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8a2V5Z2VuKS9pO1xuXG5mdW5jdGlvbiBidWlsZFBhcmFtcyggcHJlZml4LCBvYmosIHRyYWRpdGlvbmFsLCBhZGQgKSB7XG5cdHZhciBuYW1lO1xuXG5cdGlmICggQXJyYXkuaXNBcnJheSggb2JqICkgKSB7XG5cblx0XHQvLyBTZXJpYWxpemUgYXJyYXkgaXRlbS5cblx0XHRqUXVlcnkuZWFjaCggb2JqLCBmdW5jdGlvbiggaSwgdiApIHtcblx0XHRcdGlmICggdHJhZGl0aW9uYWwgfHwgcmJyYWNrZXQudGVzdCggcHJlZml4ICkgKSB7XG5cblx0XHRcdFx0Ly8gVHJlYXQgZWFjaCBhcnJheSBpdGVtIGFzIGEgc2NhbGFyLlxuXHRcdFx0XHRhZGQoIHByZWZpeCwgdiApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIEl0ZW0gaXMgbm9uLXNjYWxhciAoYXJyYXkgb3Igb2JqZWN0KSwgZW5jb2RlIGl0cyBudW1lcmljIGluZGV4LlxuXHRcdFx0XHRidWlsZFBhcmFtcyhcblx0XHRcdFx0XHRwcmVmaXggKyBcIltcIiArICggdHlwZW9mIHYgPT09IFwib2JqZWN0XCIgJiYgdiAhPSBudWxsID8gaSA6IFwiXCIgKSArIFwiXVwiLFxuXHRcdFx0XHRcdHYsXG5cdFx0XHRcdFx0dHJhZGl0aW9uYWwsXG5cdFx0XHRcdFx0YWRkXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdH0gZWxzZSBpZiAoICF0cmFkaXRpb25hbCAmJiB0b1R5cGUoIG9iaiApID09PSBcIm9iamVjdFwiICkge1xuXG5cdFx0Ly8gU2VyaWFsaXplIG9iamVjdCBpdGVtLlxuXHRcdGZvciAoIG5hbWUgaW4gb2JqICkge1xuXHRcdFx0YnVpbGRQYXJhbXMoIHByZWZpeCArIFwiW1wiICsgbmFtZSArIFwiXVwiLCBvYmpbIG5hbWUgXSwgdHJhZGl0aW9uYWwsIGFkZCApO1xuXHRcdH1cblxuXHR9IGVsc2Uge1xuXG5cdFx0Ly8gU2VyaWFsaXplIHNjYWxhciBpdGVtLlxuXHRcdGFkZCggcHJlZml4LCBvYmogKTtcblx0fVxufVxuXG4vLyBTZXJpYWxpemUgYW4gYXJyYXkgb2YgZm9ybSBlbGVtZW50cyBvciBhIHNldCBvZlxuLy8ga2V5L3ZhbHVlcyBpbnRvIGEgcXVlcnkgc3RyaW5nXG5qUXVlcnkucGFyYW0gPSBmdW5jdGlvbiggYSwgdHJhZGl0aW9uYWwgKSB7XG5cdHZhciBwcmVmaXgsXG5cdFx0cyA9IFtdLFxuXHRcdGFkZCA9IGZ1bmN0aW9uKCBrZXksIHZhbHVlT3JGdW5jdGlvbiApIHtcblxuXHRcdFx0Ly8gSWYgdmFsdWUgaXMgYSBmdW5jdGlvbiwgaW52b2tlIGl0IGFuZCB1c2UgaXRzIHJldHVybiB2YWx1ZVxuXHRcdFx0dmFyIHZhbHVlID0gaXNGdW5jdGlvbiggdmFsdWVPckZ1bmN0aW9uICkgP1xuXHRcdFx0XHR2YWx1ZU9yRnVuY3Rpb24oKSA6XG5cdFx0XHRcdHZhbHVlT3JGdW5jdGlvbjtcblxuXHRcdFx0c1sgcy5sZW5ndGggXSA9IGVuY29kZVVSSUNvbXBvbmVudCgga2V5ICkgKyBcIj1cIiArXG5cdFx0XHRcdGVuY29kZVVSSUNvbXBvbmVudCggdmFsdWUgPT0gbnVsbCA/IFwiXCIgOiB2YWx1ZSApO1xuXHRcdH07XG5cblx0aWYgKCBhID09IG51bGwgKSB7XG5cdFx0cmV0dXJuIFwiXCI7XG5cdH1cblxuXHQvLyBJZiBhbiBhcnJheSB3YXMgcGFzc2VkIGluLCBhc3N1bWUgdGhhdCBpdCBpcyBhbiBhcnJheSBvZiBmb3JtIGVsZW1lbnRzLlxuXHRpZiAoIEFycmF5LmlzQXJyYXkoIGEgKSB8fCAoIGEuanF1ZXJ5ICYmICFqUXVlcnkuaXNQbGFpbk9iamVjdCggYSApICkgKSB7XG5cblx0XHQvLyBTZXJpYWxpemUgdGhlIGZvcm0gZWxlbWVudHNcblx0XHRqUXVlcnkuZWFjaCggYSwgZnVuY3Rpb24oKSB7XG5cdFx0XHRhZGQoIHRoaXMubmFtZSwgdGhpcy52YWx1ZSApO1xuXHRcdH0gKTtcblxuXHR9IGVsc2Uge1xuXG5cdFx0Ly8gSWYgdHJhZGl0aW9uYWwsIGVuY29kZSB0aGUgXCJvbGRcIiB3YXkgKHRoZSB3YXkgMS4zLjIgb3Igb2xkZXJcblx0XHQvLyBkaWQgaXQpLCBvdGhlcndpc2UgZW5jb2RlIHBhcmFtcyByZWN1cnNpdmVseS5cblx0XHRmb3IgKCBwcmVmaXggaW4gYSApIHtcblx0XHRcdGJ1aWxkUGFyYW1zKCBwcmVmaXgsIGFbIHByZWZpeCBdLCB0cmFkaXRpb25hbCwgYWRkICk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSByZXN1bHRpbmcgc2VyaWFsaXphdGlvblxuXHRyZXR1cm4gcy5qb2luKCBcIiZcIiApO1xufTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRzZXJpYWxpemU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBqUXVlcnkucGFyYW0oIHRoaXMuc2VyaWFsaXplQXJyYXkoKSApO1xuXHR9LFxuXHRzZXJpYWxpemVBcnJheTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKCBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gQ2FuIGFkZCBwcm9wSG9vayBmb3IgXCJlbGVtZW50c1wiIHRvIGZpbHRlciBvciBhZGQgZm9ybSBlbGVtZW50c1xuXHRcdFx0dmFyIGVsZW1lbnRzID0galF1ZXJ5LnByb3AoIHRoaXMsIFwiZWxlbWVudHNcIiApO1xuXHRcdFx0cmV0dXJuIGVsZW1lbnRzID8galF1ZXJ5Lm1ha2VBcnJheSggZWxlbWVudHMgKSA6IHRoaXM7XG5cdFx0fSApLmZpbHRlciggZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdHlwZSA9IHRoaXMudHlwZTtcblxuXHRcdFx0Ly8gVXNlIC5pcyggXCI6ZGlzYWJsZWRcIiApIHNvIHRoYXQgZmllbGRzZXRbZGlzYWJsZWRdIHdvcmtzXG5cdFx0XHRyZXR1cm4gdGhpcy5uYW1lICYmICFqUXVlcnkoIHRoaXMgKS5pcyggXCI6ZGlzYWJsZWRcIiApICYmXG5cdFx0XHRcdHJzdWJtaXR0YWJsZS50ZXN0KCB0aGlzLm5vZGVOYW1lICkgJiYgIXJzdWJtaXR0ZXJUeXBlcy50ZXN0KCB0eXBlICkgJiZcblx0XHRcdFx0KCB0aGlzLmNoZWNrZWQgfHwgIXJjaGVja2FibGVUeXBlLnRlc3QoIHR5cGUgKSApO1xuXHRcdH0gKS5tYXAoIGZ1bmN0aW9uKCBfaSwgZWxlbSApIHtcblx0XHRcdHZhciB2YWwgPSBqUXVlcnkoIHRoaXMgKS52YWwoKTtcblxuXHRcdFx0aWYgKCB2YWwgPT0gbnVsbCApIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggQXJyYXkuaXNBcnJheSggdmFsICkgKSB7XG5cdFx0XHRcdHJldHVybiBqUXVlcnkubWFwKCB2YWwsIGZ1bmN0aW9uKCB2YWwgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHsgbmFtZTogZWxlbS5uYW1lLCB2YWx1ZTogdmFsLnJlcGxhY2UoIHJDUkxGLCBcIlxcclxcblwiICkgfTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4geyBuYW1lOiBlbGVtLm5hbWUsIHZhbHVlOiB2YWwucmVwbGFjZSggckNSTEYsIFwiXFxyXFxuXCIgKSB9O1xuXHRcdH0gKS5nZXQoKTtcblx0fVxufSApO1xuXG5cbnZhclxuXHRyMjAgPSAvJTIwL2csXG5cdHJoYXNoID0gLyMuKiQvLFxuXHRyYW50aUNhY2hlID0gLyhbPyZdKV89W14mXSovLFxuXHRyaGVhZGVycyA9IC9eKC4qPyk6WyBcXHRdKihbXlxcclxcbl0qKSQvbWcsXG5cblx0Ly8gIzc2NTMsICM4MTI1LCAjODE1MjogbG9jYWwgcHJvdG9jb2wgZGV0ZWN0aW9uXG5cdHJsb2NhbFByb3RvY29sID0gL14oPzphYm91dHxhcHB8YXBwLXN0b3JhZ2V8ListZXh0ZW5zaW9ufGZpbGV8cmVzfHdpZGdldCk6JC8sXG5cdHJub0NvbnRlbnQgPSAvXig/OkdFVHxIRUFEKSQvLFxuXHRycHJvdG9jb2wgPSAvXlxcL1xcLy8sXG5cblx0LyogUHJlZmlsdGVyc1xuXHQgKiAxKSBUaGV5IGFyZSB1c2VmdWwgdG8gaW50cm9kdWNlIGN1c3RvbSBkYXRhVHlwZXMgKHNlZSBhamF4L2pzb25wLmpzIGZvciBhbiBleGFtcGxlKVxuXHQgKiAyKSBUaGVzZSBhcmUgY2FsbGVkOlxuXHQgKiAgICAtIEJFRk9SRSBhc2tpbmcgZm9yIGEgdHJhbnNwb3J0XG5cdCAqICAgIC0gQUZURVIgcGFyYW0gc2VyaWFsaXphdGlvbiAocy5kYXRhIGlzIGEgc3RyaW5nIGlmIHMucHJvY2Vzc0RhdGEgaXMgdHJ1ZSlcblx0ICogMykga2V5IGlzIHRoZSBkYXRhVHlwZVxuXHQgKiA0KSB0aGUgY2F0Y2hhbGwgc3ltYm9sIFwiKlwiIGNhbiBiZSB1c2VkXG5cdCAqIDUpIGV4ZWN1dGlvbiB3aWxsIHN0YXJ0IHdpdGggdHJhbnNwb3J0IGRhdGFUeXBlIGFuZCBUSEVOIGNvbnRpbnVlIGRvd24gdG8gXCIqXCIgaWYgbmVlZGVkXG5cdCAqL1xuXHRwcmVmaWx0ZXJzID0ge30sXG5cblx0LyogVHJhbnNwb3J0cyBiaW5kaW5nc1xuXHQgKiAxKSBrZXkgaXMgdGhlIGRhdGFUeXBlXG5cdCAqIDIpIHRoZSBjYXRjaGFsbCBzeW1ib2wgXCIqXCIgY2FuIGJlIHVzZWRcblx0ICogMykgc2VsZWN0aW9uIHdpbGwgc3RhcnQgd2l0aCB0cmFuc3BvcnQgZGF0YVR5cGUgYW5kIFRIRU4gZ28gdG8gXCIqXCIgaWYgbmVlZGVkXG5cdCAqL1xuXHR0cmFuc3BvcnRzID0ge30sXG5cblx0Ly8gQXZvaWQgY29tbWVudC1wcm9sb2cgY2hhciBzZXF1ZW5jZSAoIzEwMDk4KTsgbXVzdCBhcHBlYXNlIGxpbnQgYW5kIGV2YWRlIGNvbXByZXNzaW9uXG5cdGFsbFR5cGVzID0gXCIqL1wiLmNvbmNhdCggXCIqXCIgKSxcblxuXHQvLyBBbmNob3IgdGFnIGZvciBwYXJzaW5nIHRoZSBkb2N1bWVudCBvcmlnaW5cblx0b3JpZ2luQW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJhXCIgKTtcblxub3JpZ2luQW5jaG9yLmhyZWYgPSBsb2NhdGlvbi5ocmVmO1xuXG4vLyBCYXNlIFwiY29uc3RydWN0b3JcIiBmb3IgalF1ZXJ5LmFqYXhQcmVmaWx0ZXIgYW5kIGpRdWVyeS5hamF4VHJhbnNwb3J0XG5mdW5jdGlvbiBhZGRUb1ByZWZpbHRlcnNPclRyYW5zcG9ydHMoIHN0cnVjdHVyZSApIHtcblxuXHQvLyBkYXRhVHlwZUV4cHJlc3Npb24gaXMgb3B0aW9uYWwgYW5kIGRlZmF1bHRzIHRvIFwiKlwiXG5cdHJldHVybiBmdW5jdGlvbiggZGF0YVR5cGVFeHByZXNzaW9uLCBmdW5jICkge1xuXG5cdFx0aWYgKCB0eXBlb2YgZGF0YVR5cGVFeHByZXNzaW9uICE9PSBcInN0cmluZ1wiICkge1xuXHRcdFx0ZnVuYyA9IGRhdGFUeXBlRXhwcmVzc2lvbjtcblx0XHRcdGRhdGFUeXBlRXhwcmVzc2lvbiA9IFwiKlwiO1xuXHRcdH1cblxuXHRcdHZhciBkYXRhVHlwZSxcblx0XHRcdGkgPSAwLFxuXHRcdFx0ZGF0YVR5cGVzID0gZGF0YVR5cGVFeHByZXNzaW9uLnRvTG93ZXJDYXNlKCkubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbXTtcblxuXHRcdGlmICggaXNGdW5jdGlvbiggZnVuYyApICkge1xuXG5cdFx0XHQvLyBGb3IgZWFjaCBkYXRhVHlwZSBpbiB0aGUgZGF0YVR5cGVFeHByZXNzaW9uXG5cdFx0XHR3aGlsZSAoICggZGF0YVR5cGUgPSBkYXRhVHlwZXNbIGkrKyBdICkgKSB7XG5cblx0XHRcdFx0Ly8gUHJlcGVuZCBpZiByZXF1ZXN0ZWRcblx0XHRcdFx0aWYgKCBkYXRhVHlwZVsgMCBdID09PSBcIitcIiApIHtcblx0XHRcdFx0XHRkYXRhVHlwZSA9IGRhdGFUeXBlLnNsaWNlKCAxICkgfHwgXCIqXCI7XG5cdFx0XHRcdFx0KCBzdHJ1Y3R1cmVbIGRhdGFUeXBlIF0gPSBzdHJ1Y3R1cmVbIGRhdGFUeXBlIF0gfHwgW10gKS51bnNoaWZ0KCBmdW5jICk7XG5cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIGFwcGVuZFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCggc3RydWN0dXJlWyBkYXRhVHlwZSBdID0gc3RydWN0dXJlWyBkYXRhVHlwZSBdIHx8IFtdICkucHVzaCggZnVuYyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG4vLyBCYXNlIGluc3BlY3Rpb24gZnVuY3Rpb24gZm9yIHByZWZpbHRlcnMgYW5kIHRyYW5zcG9ydHNcbmZ1bmN0aW9uIGluc3BlY3RQcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCBzdHJ1Y3R1cmUsIG9wdGlvbnMsIG9yaWdpbmFsT3B0aW9ucywganFYSFIgKSB7XG5cblx0dmFyIGluc3BlY3RlZCA9IHt9LFxuXHRcdHNlZWtpbmdUcmFuc3BvcnQgPSAoIHN0cnVjdHVyZSA9PT0gdHJhbnNwb3J0cyApO1xuXG5cdGZ1bmN0aW9uIGluc3BlY3QoIGRhdGFUeXBlICkge1xuXHRcdHZhciBzZWxlY3RlZDtcblx0XHRpbnNwZWN0ZWRbIGRhdGFUeXBlIF0gPSB0cnVlO1xuXHRcdGpRdWVyeS5lYWNoKCBzdHJ1Y3R1cmVbIGRhdGFUeXBlIF0gfHwgW10sIGZ1bmN0aW9uKCBfLCBwcmVmaWx0ZXJPckZhY3RvcnkgKSB7XG5cdFx0XHR2YXIgZGF0YVR5cGVPclRyYW5zcG9ydCA9IHByZWZpbHRlck9yRmFjdG9yeSggb3B0aW9ucywgb3JpZ2luYWxPcHRpb25zLCBqcVhIUiApO1xuXHRcdFx0aWYgKCB0eXBlb2YgZGF0YVR5cGVPclRyYW5zcG9ydCA9PT0gXCJzdHJpbmdcIiAmJlxuXHRcdFx0XHQhc2Vla2luZ1RyYW5zcG9ydCAmJiAhaW5zcGVjdGVkWyBkYXRhVHlwZU9yVHJhbnNwb3J0IF0gKSB7XG5cblx0XHRcdFx0b3B0aW9ucy5kYXRhVHlwZXMudW5zaGlmdCggZGF0YVR5cGVPclRyYW5zcG9ydCApO1xuXHRcdFx0XHRpbnNwZWN0KCBkYXRhVHlwZU9yVHJhbnNwb3J0ICk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH0gZWxzZSBpZiAoIHNlZWtpbmdUcmFuc3BvcnQgKSB7XG5cdFx0XHRcdHJldHVybiAhKCBzZWxlY3RlZCA9IGRhdGFUeXBlT3JUcmFuc3BvcnQgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdFx0cmV0dXJuIHNlbGVjdGVkO1xuXHR9XG5cblx0cmV0dXJuIGluc3BlY3QoIG9wdGlvbnMuZGF0YVR5cGVzWyAwIF0gKSB8fCAhaW5zcGVjdGVkWyBcIipcIiBdICYmIGluc3BlY3QoIFwiKlwiICk7XG59XG5cbi8vIEEgc3BlY2lhbCBleHRlbmQgZm9yIGFqYXggb3B0aW9uc1xuLy8gdGhhdCB0YWtlcyBcImZsYXRcIiBvcHRpb25zIChub3QgdG8gYmUgZGVlcCBleHRlbmRlZClcbi8vIEZpeGVzICM5ODg3XG5mdW5jdGlvbiBhamF4RXh0ZW5kKCB0YXJnZXQsIHNyYyApIHtcblx0dmFyIGtleSwgZGVlcCxcblx0XHRmbGF0T3B0aW9ucyA9IGpRdWVyeS5hamF4U2V0dGluZ3MuZmxhdE9wdGlvbnMgfHwge307XG5cblx0Zm9yICgga2V5IGluIHNyYyApIHtcblx0XHRpZiAoIHNyY1sga2V5IF0gIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdCggZmxhdE9wdGlvbnNbIGtleSBdID8gdGFyZ2V0IDogKCBkZWVwIHx8ICggZGVlcCA9IHt9ICkgKSApWyBrZXkgXSA9IHNyY1sga2V5IF07XG5cdFx0fVxuXHR9XG5cdGlmICggZGVlcCApIHtcblx0XHRqUXVlcnkuZXh0ZW5kKCB0cnVlLCB0YXJnZXQsIGRlZXAgKTtcblx0fVxuXG5cdHJldHVybiB0YXJnZXQ7XG59XG5cbi8qIEhhbmRsZXMgcmVzcG9uc2VzIHRvIGFuIGFqYXggcmVxdWVzdDpcbiAqIC0gZmluZHMgdGhlIHJpZ2h0IGRhdGFUeXBlIChtZWRpYXRlcyBiZXR3ZWVuIGNvbnRlbnQtdHlwZSBhbmQgZXhwZWN0ZWQgZGF0YVR5cGUpXG4gKiAtIHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgcmVzcG9uc2VcbiAqL1xuZnVuY3Rpb24gYWpheEhhbmRsZVJlc3BvbnNlcyggcywganFYSFIsIHJlc3BvbnNlcyApIHtcblxuXHR2YXIgY3QsIHR5cGUsIGZpbmFsRGF0YVR5cGUsIGZpcnN0RGF0YVR5cGUsXG5cdFx0Y29udGVudHMgPSBzLmNvbnRlbnRzLFxuXHRcdGRhdGFUeXBlcyA9IHMuZGF0YVR5cGVzO1xuXG5cdC8vIFJlbW92ZSBhdXRvIGRhdGFUeXBlIGFuZCBnZXQgY29udGVudC10eXBlIGluIHRoZSBwcm9jZXNzXG5cdHdoaWxlICggZGF0YVR5cGVzWyAwIF0gPT09IFwiKlwiICkge1xuXHRcdGRhdGFUeXBlcy5zaGlmdCgpO1xuXHRcdGlmICggY3QgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdGN0ID0gcy5taW1lVHlwZSB8fCBqcVhIUi5nZXRSZXNwb25zZUhlYWRlciggXCJDb250ZW50LVR5cGVcIiApO1xuXHRcdH1cblx0fVxuXG5cdC8vIENoZWNrIGlmIHdlJ3JlIGRlYWxpbmcgd2l0aCBhIGtub3duIGNvbnRlbnQtdHlwZVxuXHRpZiAoIGN0ICkge1xuXHRcdGZvciAoIHR5cGUgaW4gY29udGVudHMgKSB7XG5cdFx0XHRpZiAoIGNvbnRlbnRzWyB0eXBlIF0gJiYgY29udGVudHNbIHR5cGUgXS50ZXN0KCBjdCApICkge1xuXHRcdFx0XHRkYXRhVHlwZXMudW5zaGlmdCggdHlwZSApO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBDaGVjayB0byBzZWUgaWYgd2UgaGF2ZSBhIHJlc3BvbnNlIGZvciB0aGUgZXhwZWN0ZWQgZGF0YVR5cGVcblx0aWYgKCBkYXRhVHlwZXNbIDAgXSBpbiByZXNwb25zZXMgKSB7XG5cdFx0ZmluYWxEYXRhVHlwZSA9IGRhdGFUeXBlc1sgMCBdO1xuXHR9IGVsc2Uge1xuXG5cdFx0Ly8gVHJ5IGNvbnZlcnRpYmxlIGRhdGFUeXBlc1xuXHRcdGZvciAoIHR5cGUgaW4gcmVzcG9uc2VzICkge1xuXHRcdFx0aWYgKCAhZGF0YVR5cGVzWyAwIF0gfHwgcy5jb252ZXJ0ZXJzWyB0eXBlICsgXCIgXCIgKyBkYXRhVHlwZXNbIDAgXSBdICkge1xuXHRcdFx0XHRmaW5hbERhdGFUeXBlID0gdHlwZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRpZiAoICFmaXJzdERhdGFUeXBlICkge1xuXHRcdFx0XHRmaXJzdERhdGFUeXBlID0gdHlwZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBPciBqdXN0IHVzZSBmaXJzdCBvbmVcblx0XHRmaW5hbERhdGFUeXBlID0gZmluYWxEYXRhVHlwZSB8fCBmaXJzdERhdGFUeXBlO1xuXHR9XG5cblx0Ly8gSWYgd2UgZm91bmQgYSBkYXRhVHlwZVxuXHQvLyBXZSBhZGQgdGhlIGRhdGFUeXBlIHRvIHRoZSBsaXN0IGlmIG5lZWRlZFxuXHQvLyBhbmQgcmV0dXJuIHRoZSBjb3JyZXNwb25kaW5nIHJlc3BvbnNlXG5cdGlmICggZmluYWxEYXRhVHlwZSApIHtcblx0XHRpZiAoIGZpbmFsRGF0YVR5cGUgIT09IGRhdGFUeXBlc1sgMCBdICkge1xuXHRcdFx0ZGF0YVR5cGVzLnVuc2hpZnQoIGZpbmFsRGF0YVR5cGUgKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3BvbnNlc1sgZmluYWxEYXRhVHlwZSBdO1xuXHR9XG59XG5cbi8qIENoYWluIGNvbnZlcnNpb25zIGdpdmVuIHRoZSByZXF1ZXN0IGFuZCB0aGUgb3JpZ2luYWwgcmVzcG9uc2VcbiAqIEFsc28gc2V0cyB0aGUgcmVzcG9uc2VYWFggZmllbGRzIG9uIHRoZSBqcVhIUiBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBhamF4Q29udmVydCggcywgcmVzcG9uc2UsIGpxWEhSLCBpc1N1Y2Nlc3MgKSB7XG5cdHZhciBjb252MiwgY3VycmVudCwgY29udiwgdG1wLCBwcmV2LFxuXHRcdGNvbnZlcnRlcnMgPSB7fSxcblxuXHRcdC8vIFdvcmsgd2l0aCBhIGNvcHkgb2YgZGF0YVR5cGVzIGluIGNhc2Ugd2UgbmVlZCB0byBtb2RpZnkgaXQgZm9yIGNvbnZlcnNpb25cblx0XHRkYXRhVHlwZXMgPSBzLmRhdGFUeXBlcy5zbGljZSgpO1xuXG5cdC8vIENyZWF0ZSBjb252ZXJ0ZXJzIG1hcCB3aXRoIGxvd2VyY2FzZWQga2V5c1xuXHRpZiAoIGRhdGFUeXBlc1sgMSBdICkge1xuXHRcdGZvciAoIGNvbnYgaW4gcy5jb252ZXJ0ZXJzICkge1xuXHRcdFx0Y29udmVydGVyc1sgY29udi50b0xvd2VyQ2FzZSgpIF0gPSBzLmNvbnZlcnRlcnNbIGNvbnYgXTtcblx0XHR9XG5cdH1cblxuXHRjdXJyZW50ID0gZGF0YVR5cGVzLnNoaWZ0KCk7XG5cblx0Ly8gQ29udmVydCB0byBlYWNoIHNlcXVlbnRpYWwgZGF0YVR5cGVcblx0d2hpbGUgKCBjdXJyZW50ICkge1xuXG5cdFx0aWYgKCBzLnJlc3BvbnNlRmllbGRzWyBjdXJyZW50IF0gKSB7XG5cdFx0XHRqcVhIUlsgcy5yZXNwb25zZUZpZWxkc1sgY3VycmVudCBdIF0gPSByZXNwb25zZTtcblx0XHR9XG5cblx0XHQvLyBBcHBseSB0aGUgZGF0YUZpbHRlciBpZiBwcm92aWRlZFxuXHRcdGlmICggIXByZXYgJiYgaXNTdWNjZXNzICYmIHMuZGF0YUZpbHRlciApIHtcblx0XHRcdHJlc3BvbnNlID0gcy5kYXRhRmlsdGVyKCByZXNwb25zZSwgcy5kYXRhVHlwZSApO1xuXHRcdH1cblxuXHRcdHByZXYgPSBjdXJyZW50O1xuXHRcdGN1cnJlbnQgPSBkYXRhVHlwZXMuc2hpZnQoKTtcblxuXHRcdGlmICggY3VycmVudCApIHtcblxuXHRcdFx0Ly8gVGhlcmUncyBvbmx5IHdvcmsgdG8gZG8gaWYgY3VycmVudCBkYXRhVHlwZSBpcyBub24tYXV0b1xuXHRcdFx0aWYgKCBjdXJyZW50ID09PSBcIipcIiApIHtcblxuXHRcdFx0XHRjdXJyZW50ID0gcHJldjtcblxuXHRcdFx0Ly8gQ29udmVydCByZXNwb25zZSBpZiBwcmV2IGRhdGFUeXBlIGlzIG5vbi1hdXRvIGFuZCBkaWZmZXJzIGZyb20gY3VycmVudFxuXHRcdFx0fSBlbHNlIGlmICggcHJldiAhPT0gXCIqXCIgJiYgcHJldiAhPT0gY3VycmVudCApIHtcblxuXHRcdFx0XHQvLyBTZWVrIGEgZGlyZWN0IGNvbnZlcnRlclxuXHRcdFx0XHRjb252ID0gY29udmVydGVyc1sgcHJldiArIFwiIFwiICsgY3VycmVudCBdIHx8IGNvbnZlcnRlcnNbIFwiKiBcIiArIGN1cnJlbnQgXTtcblxuXHRcdFx0XHQvLyBJZiBub25lIGZvdW5kLCBzZWVrIGEgcGFpclxuXHRcdFx0XHRpZiAoICFjb252ICkge1xuXHRcdFx0XHRcdGZvciAoIGNvbnYyIGluIGNvbnZlcnRlcnMgKSB7XG5cblx0XHRcdFx0XHRcdC8vIElmIGNvbnYyIG91dHB1dHMgY3VycmVudFxuXHRcdFx0XHRcdFx0dG1wID0gY29udjIuc3BsaXQoIFwiIFwiICk7XG5cdFx0XHRcdFx0XHRpZiAoIHRtcFsgMSBdID09PSBjdXJyZW50ICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIElmIHByZXYgY2FuIGJlIGNvbnZlcnRlZCB0byBhY2NlcHRlZCBpbnB1dFxuXHRcdFx0XHRcdFx0XHRjb252ID0gY29udmVydGVyc1sgcHJldiArIFwiIFwiICsgdG1wWyAwIF0gXSB8fFxuXHRcdFx0XHRcdFx0XHRcdGNvbnZlcnRlcnNbIFwiKiBcIiArIHRtcFsgMCBdIF07XG5cdFx0XHRcdFx0XHRcdGlmICggY29udiApIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIENvbmRlbnNlIGVxdWl2YWxlbmNlIGNvbnZlcnRlcnNcblx0XHRcdFx0XHRcdFx0XHRpZiAoIGNvbnYgPT09IHRydWUgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb252ID0gY29udmVydGVyc1sgY29udjIgXTtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIE90aGVyd2lzZSwgaW5zZXJ0IHRoZSBpbnRlcm1lZGlhdGUgZGF0YVR5cGVcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCBjb252ZXJ0ZXJzWyBjb252MiBdICE9PSB0cnVlICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudCA9IHRtcFsgMCBdO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YVR5cGVzLnVuc2hpZnQoIHRtcFsgMSBdICk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQXBwbHkgY29udmVydGVyIChpZiBub3QgYW4gZXF1aXZhbGVuY2UpXG5cdFx0XHRcdGlmICggY29udiAhPT0gdHJ1ZSApIHtcblxuXHRcdFx0XHRcdC8vIFVubGVzcyBlcnJvcnMgYXJlIGFsbG93ZWQgdG8gYnViYmxlLCBjYXRjaCBhbmQgcmV0dXJuIHRoZW1cblx0XHRcdFx0XHRpZiAoIGNvbnYgJiYgcy50aHJvd3MgKSB7XG5cdFx0XHRcdFx0XHRyZXNwb25zZSA9IGNvbnYoIHJlc3BvbnNlICk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdHJlc3BvbnNlID0gY29udiggcmVzcG9uc2UgKTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKCBlICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdHN0YXRlOiBcInBhcnNlcmVycm9yXCIsXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGNvbnYgPyBlIDogXCJObyBjb252ZXJzaW9uIGZyb20gXCIgKyBwcmV2ICsgXCIgdG8gXCIgKyBjdXJyZW50XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHsgc3RhdGU6IFwic3VjY2Vzc1wiLCBkYXRhOiByZXNwb25zZSB9O1xufVxuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cblx0Ly8gQ291bnRlciBmb3IgaG9sZGluZyB0aGUgbnVtYmVyIG9mIGFjdGl2ZSBxdWVyaWVzXG5cdGFjdGl2ZTogMCxcblxuXHQvLyBMYXN0LU1vZGlmaWVkIGhlYWRlciBjYWNoZSBmb3IgbmV4dCByZXF1ZXN0XG5cdGxhc3RNb2RpZmllZDoge30sXG5cdGV0YWc6IHt9LFxuXG5cdGFqYXhTZXR0aW5nczoge1xuXHRcdHVybDogbG9jYXRpb24uaHJlZixcblx0XHR0eXBlOiBcIkdFVFwiLFxuXHRcdGlzTG9jYWw6IHJsb2NhbFByb3RvY29sLnRlc3QoIGxvY2F0aW9uLnByb3RvY29sICksXG5cdFx0Z2xvYmFsOiB0cnVlLFxuXHRcdHByb2Nlc3NEYXRhOiB0cnVlLFxuXHRcdGFzeW5jOiB0cnVlLFxuXHRcdGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiLFxuXG5cdFx0Lypcblx0XHR0aW1lb3V0OiAwLFxuXHRcdGRhdGE6IG51bGwsXG5cdFx0ZGF0YVR5cGU6IG51bGwsXG5cdFx0dXNlcm5hbWU6IG51bGwsXG5cdFx0cGFzc3dvcmQ6IG51bGwsXG5cdFx0Y2FjaGU6IG51bGwsXG5cdFx0dGhyb3dzOiBmYWxzZSxcblx0XHR0cmFkaXRpb25hbDogZmFsc2UsXG5cdFx0aGVhZGVyczoge30sXG5cdFx0Ki9cblxuXHRcdGFjY2VwdHM6IHtcblx0XHRcdFwiKlwiOiBhbGxUeXBlcyxcblx0XHRcdHRleHQ6IFwidGV4dC9wbGFpblwiLFxuXHRcdFx0aHRtbDogXCJ0ZXh0L2h0bWxcIixcblx0XHRcdHhtbDogXCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsXG5cdFx0XHRqc29uOiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwiXG5cdFx0fSxcblxuXHRcdGNvbnRlbnRzOiB7XG5cdFx0XHR4bWw6IC9cXGJ4bWxcXGIvLFxuXHRcdFx0aHRtbDogL1xcYmh0bWwvLFxuXHRcdFx0anNvbjogL1xcYmpzb25cXGIvXG5cdFx0fSxcblxuXHRcdHJlc3BvbnNlRmllbGRzOiB7XG5cdFx0XHR4bWw6IFwicmVzcG9uc2VYTUxcIixcblx0XHRcdHRleHQ6IFwicmVzcG9uc2VUZXh0XCIsXG5cdFx0XHRqc29uOiBcInJlc3BvbnNlSlNPTlwiXG5cdFx0fSxcblxuXHRcdC8vIERhdGEgY29udmVydGVyc1xuXHRcdC8vIEtleXMgc2VwYXJhdGUgc291cmNlIChvciBjYXRjaGFsbCBcIipcIikgYW5kIGRlc3RpbmF0aW9uIHR5cGVzIHdpdGggYSBzaW5nbGUgc3BhY2Vcblx0XHRjb252ZXJ0ZXJzOiB7XG5cblx0XHRcdC8vIENvbnZlcnQgYW55dGhpbmcgdG8gdGV4dFxuXHRcdFx0XCIqIHRleHRcIjogU3RyaW5nLFxuXG5cdFx0XHQvLyBUZXh0IHRvIGh0bWwgKHRydWUgPSBubyB0cmFuc2Zvcm1hdGlvbilcblx0XHRcdFwidGV4dCBodG1sXCI6IHRydWUsXG5cblx0XHRcdC8vIEV2YWx1YXRlIHRleHQgYXMgYSBqc29uIGV4cHJlc3Npb25cblx0XHRcdFwidGV4dCBqc29uXCI6IEpTT04ucGFyc2UsXG5cblx0XHRcdC8vIFBhcnNlIHRleHQgYXMgeG1sXG5cdFx0XHRcInRleHQgeG1sXCI6IGpRdWVyeS5wYXJzZVhNTFxuXHRcdH0sXG5cblx0XHQvLyBGb3Igb3B0aW9ucyB0aGF0IHNob3VsZG4ndCBiZSBkZWVwIGV4dGVuZGVkOlxuXHRcdC8vIHlvdSBjYW4gYWRkIHlvdXIgb3duIGN1c3RvbSBvcHRpb25zIGhlcmUgaWZcblx0XHQvLyBhbmQgd2hlbiB5b3UgY3JlYXRlIG9uZSB0aGF0IHNob3VsZG4ndCBiZVxuXHRcdC8vIGRlZXAgZXh0ZW5kZWQgKHNlZSBhamF4RXh0ZW5kKVxuXHRcdGZsYXRPcHRpb25zOiB7XG5cdFx0XHR1cmw6IHRydWUsXG5cdFx0XHRjb250ZXh0OiB0cnVlXG5cdFx0fVxuXHR9LFxuXG5cdC8vIENyZWF0ZXMgYSBmdWxsIGZsZWRnZWQgc2V0dGluZ3Mgb2JqZWN0IGludG8gdGFyZ2V0XG5cdC8vIHdpdGggYm90aCBhamF4U2V0dGluZ3MgYW5kIHNldHRpbmdzIGZpZWxkcy5cblx0Ly8gSWYgdGFyZ2V0IGlzIG9taXR0ZWQsIHdyaXRlcyBpbnRvIGFqYXhTZXR0aW5ncy5cblx0YWpheFNldHVwOiBmdW5jdGlvbiggdGFyZ2V0LCBzZXR0aW5ncyApIHtcblx0XHRyZXR1cm4gc2V0dGluZ3MgP1xuXG5cdFx0XHQvLyBCdWlsZGluZyBhIHNldHRpbmdzIG9iamVjdFxuXHRcdFx0YWpheEV4dGVuZCggYWpheEV4dGVuZCggdGFyZ2V0LCBqUXVlcnkuYWpheFNldHRpbmdzICksIHNldHRpbmdzICkgOlxuXG5cdFx0XHQvLyBFeHRlbmRpbmcgYWpheFNldHRpbmdzXG5cdFx0XHRhamF4RXh0ZW5kKCBqUXVlcnkuYWpheFNldHRpbmdzLCB0YXJnZXQgKTtcblx0fSxcblxuXHRhamF4UHJlZmlsdGVyOiBhZGRUb1ByZWZpbHRlcnNPclRyYW5zcG9ydHMoIHByZWZpbHRlcnMgKSxcblx0YWpheFRyYW5zcG9ydDogYWRkVG9QcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCB0cmFuc3BvcnRzICksXG5cblx0Ly8gTWFpbiBtZXRob2Rcblx0YWpheDogZnVuY3Rpb24oIHVybCwgb3B0aW9ucyApIHtcblxuXHRcdC8vIElmIHVybCBpcyBhbiBvYmplY3QsIHNpbXVsYXRlIHByZS0xLjUgc2lnbmF0dXJlXG5cdFx0aWYgKCB0eXBlb2YgdXJsID09PSBcIm9iamVjdFwiICkge1xuXHRcdFx0b3B0aW9ucyA9IHVybDtcblx0XHRcdHVybCA9IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHQvLyBGb3JjZSBvcHRpb25zIHRvIGJlIGFuIG9iamVjdFxuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdFx0dmFyIHRyYW5zcG9ydCxcblxuXHRcdFx0Ly8gVVJMIHdpdGhvdXQgYW50aS1jYWNoZSBwYXJhbVxuXHRcdFx0Y2FjaGVVUkwsXG5cblx0XHRcdC8vIFJlc3BvbnNlIGhlYWRlcnNcblx0XHRcdHJlc3BvbnNlSGVhZGVyc1N0cmluZyxcblx0XHRcdHJlc3BvbnNlSGVhZGVycyxcblxuXHRcdFx0Ly8gdGltZW91dCBoYW5kbGVcblx0XHRcdHRpbWVvdXRUaW1lcixcblxuXHRcdFx0Ly8gVXJsIGNsZWFudXAgdmFyXG5cdFx0XHR1cmxBbmNob3IsXG5cblx0XHRcdC8vIFJlcXVlc3Qgc3RhdGUgKGJlY29tZXMgZmFsc2UgdXBvbiBzZW5kIGFuZCB0cnVlIHVwb24gY29tcGxldGlvbilcblx0XHRcdGNvbXBsZXRlZCxcblxuXHRcdFx0Ly8gVG8ga25vdyBpZiBnbG9iYWwgZXZlbnRzIGFyZSB0byBiZSBkaXNwYXRjaGVkXG5cdFx0XHRmaXJlR2xvYmFscyxcblxuXHRcdFx0Ly8gTG9vcCB2YXJpYWJsZVxuXHRcdFx0aSxcblxuXHRcdFx0Ly8gdW5jYWNoZWQgcGFydCBvZiB0aGUgdXJsXG5cdFx0XHR1bmNhY2hlZCxcblxuXHRcdFx0Ly8gQ3JlYXRlIHRoZSBmaW5hbCBvcHRpb25zIG9iamVjdFxuXHRcdFx0cyA9IGpRdWVyeS5hamF4U2V0dXAoIHt9LCBvcHRpb25zICksXG5cblx0XHRcdC8vIENhbGxiYWNrcyBjb250ZXh0XG5cdFx0XHRjYWxsYmFja0NvbnRleHQgPSBzLmNvbnRleHQgfHwgcyxcblxuXHRcdFx0Ly8gQ29udGV4dCBmb3IgZ2xvYmFsIGV2ZW50cyBpcyBjYWxsYmFja0NvbnRleHQgaWYgaXQgaXMgYSBET00gbm9kZSBvciBqUXVlcnkgY29sbGVjdGlvblxuXHRcdFx0Z2xvYmFsRXZlbnRDb250ZXh0ID0gcy5jb250ZXh0ICYmXG5cdFx0XHRcdCggY2FsbGJhY2tDb250ZXh0Lm5vZGVUeXBlIHx8IGNhbGxiYWNrQ29udGV4dC5qcXVlcnkgKSA/XG5cdFx0XHRcdGpRdWVyeSggY2FsbGJhY2tDb250ZXh0ICkgOlxuXHRcdFx0XHRqUXVlcnkuZXZlbnQsXG5cblx0XHRcdC8vIERlZmVycmVkc1xuXHRcdFx0ZGVmZXJyZWQgPSBqUXVlcnkuRGVmZXJyZWQoKSxcblx0XHRcdGNvbXBsZXRlRGVmZXJyZWQgPSBqUXVlcnkuQ2FsbGJhY2tzKCBcIm9uY2UgbWVtb3J5XCIgKSxcblxuXHRcdFx0Ly8gU3RhdHVzLWRlcGVuZGVudCBjYWxsYmFja3Ncblx0XHRcdHN0YXR1c0NvZGUgPSBzLnN0YXR1c0NvZGUgfHwge30sXG5cblx0XHRcdC8vIEhlYWRlcnMgKHRoZXkgYXJlIHNlbnQgYWxsIGF0IG9uY2UpXG5cdFx0XHRyZXF1ZXN0SGVhZGVycyA9IHt9LFxuXHRcdFx0cmVxdWVzdEhlYWRlcnNOYW1lcyA9IHt9LFxuXG5cdFx0XHQvLyBEZWZhdWx0IGFib3J0IG1lc3NhZ2Vcblx0XHRcdHN0ckFib3J0ID0gXCJjYW5jZWxlZFwiLFxuXG5cdFx0XHQvLyBGYWtlIHhoclxuXHRcdFx0anFYSFIgPSB7XG5cdFx0XHRcdHJlYWR5U3RhdGU6IDAsXG5cblx0XHRcdFx0Ly8gQnVpbGRzIGhlYWRlcnMgaGFzaHRhYmxlIGlmIG5lZWRlZFxuXHRcdFx0XHRnZXRSZXNwb25zZUhlYWRlcjogZnVuY3Rpb24oIGtleSApIHtcblx0XHRcdFx0XHR2YXIgbWF0Y2g7XG5cdFx0XHRcdFx0aWYgKCBjb21wbGV0ZWQgKSB7XG5cdFx0XHRcdFx0XHRpZiAoICFyZXNwb25zZUhlYWRlcnMgKSB7XG5cdFx0XHRcdFx0XHRcdHJlc3BvbnNlSGVhZGVycyA9IHt9O1xuXHRcdFx0XHRcdFx0XHR3aGlsZSAoICggbWF0Y2ggPSByaGVhZGVycy5leGVjKCByZXNwb25zZUhlYWRlcnNTdHJpbmcgKSApICkge1xuXHRcdFx0XHRcdFx0XHRcdHJlc3BvbnNlSGVhZGVyc1sgbWF0Y2hbIDEgXS50b0xvd2VyQ2FzZSgpICsgXCIgXCIgXSA9XG5cdFx0XHRcdFx0XHRcdFx0XHQoIHJlc3BvbnNlSGVhZGVyc1sgbWF0Y2hbIDEgXS50b0xvd2VyQ2FzZSgpICsgXCIgXCIgXSB8fCBbXSApXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5jb25jYXQoIG1hdGNoWyAyIF0gKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bWF0Y2ggPSByZXNwb25zZUhlYWRlcnNbIGtleS50b0xvd2VyQ2FzZSgpICsgXCIgXCIgXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIG1hdGNoID09IG51bGwgPyBudWxsIDogbWF0Y2guam9pbiggXCIsIFwiICk7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gUmF3IHN0cmluZ1xuXHRcdFx0XHRnZXRBbGxSZXNwb25zZUhlYWRlcnM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiBjb21wbGV0ZWQgPyByZXNwb25zZUhlYWRlcnNTdHJpbmcgOiBudWxsO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIENhY2hlcyB0aGUgaGVhZGVyXG5cdFx0XHRcdHNldFJlcXVlc3RIZWFkZXI6IGZ1bmN0aW9uKCBuYW1lLCB2YWx1ZSApIHtcblx0XHRcdFx0XHRpZiAoIGNvbXBsZXRlZCA9PSBudWxsICkge1xuXHRcdFx0XHRcdFx0bmFtZSA9IHJlcXVlc3RIZWFkZXJzTmFtZXNbIG5hbWUudG9Mb3dlckNhc2UoKSBdID1cblx0XHRcdFx0XHRcdFx0cmVxdWVzdEhlYWRlcnNOYW1lc1sgbmFtZS50b0xvd2VyQ2FzZSgpIF0gfHwgbmFtZTtcblx0XHRcdFx0XHRcdHJlcXVlc3RIZWFkZXJzWyBuYW1lIF0gPSB2YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gT3ZlcnJpZGVzIHJlc3BvbnNlIGNvbnRlbnQtdHlwZSBoZWFkZXJcblx0XHRcdFx0b3ZlcnJpZGVNaW1lVHlwZTogZnVuY3Rpb24oIHR5cGUgKSB7XG5cdFx0XHRcdFx0aWYgKCBjb21wbGV0ZWQgPT0gbnVsbCApIHtcblx0XHRcdFx0XHRcdHMubWltZVR5cGUgPSB0eXBlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBTdGF0dXMtZGVwZW5kZW50IGNhbGxiYWNrc1xuXHRcdFx0XHRzdGF0dXNDb2RlOiBmdW5jdGlvbiggbWFwICkge1xuXHRcdFx0XHRcdHZhciBjb2RlO1xuXHRcdFx0XHRcdGlmICggbWFwICkge1xuXHRcdFx0XHRcdFx0aWYgKCBjb21wbGV0ZWQgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gRXhlY3V0ZSB0aGUgYXBwcm9wcmlhdGUgY2FsbGJhY2tzXG5cdFx0XHRcdFx0XHRcdGpxWEhSLmFsd2F5cyggbWFwWyBqcVhIUi5zdGF0dXMgXSApO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBMYXp5LWFkZCB0aGUgbmV3IGNhbGxiYWNrcyBpbiBhIHdheSB0aGF0IHByZXNlcnZlcyBvbGQgb25lc1xuXHRcdFx0XHRcdFx0XHRmb3IgKCBjb2RlIGluIG1hcCApIHtcblx0XHRcdFx0XHRcdFx0XHRzdGF0dXNDb2RlWyBjb2RlIF0gPSBbIHN0YXR1c0NvZGVbIGNvZGUgXSwgbWFwWyBjb2RlIF0gXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBDYW5jZWwgdGhlIHJlcXVlc3Rcblx0XHRcdFx0YWJvcnQ6IGZ1bmN0aW9uKCBzdGF0dXNUZXh0ICkge1xuXHRcdFx0XHRcdHZhciBmaW5hbFRleHQgPSBzdGF0dXNUZXh0IHx8IHN0ckFib3J0O1xuXHRcdFx0XHRcdGlmICggdHJhbnNwb3J0ICkge1xuXHRcdFx0XHRcdFx0dHJhbnNwb3J0LmFib3J0KCBmaW5hbFRleHQgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZG9uZSggMCwgZmluYWxUZXh0ICk7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHQvLyBBdHRhY2ggZGVmZXJyZWRzXG5cdFx0ZGVmZXJyZWQucHJvbWlzZSgganFYSFIgKTtcblxuXHRcdC8vIEFkZCBwcm90b2NvbCBpZiBub3QgcHJvdmlkZWQgKHByZWZpbHRlcnMgbWlnaHQgZXhwZWN0IGl0KVxuXHRcdC8vIEhhbmRsZSBmYWxzeSB1cmwgaW4gdGhlIHNldHRpbmdzIG9iamVjdCAoIzEwMDkzOiBjb25zaXN0ZW5jeSB3aXRoIG9sZCBzaWduYXR1cmUpXG5cdFx0Ly8gV2UgYWxzbyB1c2UgdGhlIHVybCBwYXJhbWV0ZXIgaWYgYXZhaWxhYmxlXG5cdFx0cy51cmwgPSAoICggdXJsIHx8IHMudXJsIHx8IGxvY2F0aW9uLmhyZWYgKSArIFwiXCIgKVxuXHRcdFx0LnJlcGxhY2UoIHJwcm90b2NvbCwgbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKTtcblxuXHRcdC8vIEFsaWFzIG1ldGhvZCBvcHRpb24gdG8gdHlwZSBhcyBwZXIgdGlja2V0ICMxMjAwNFxuXHRcdHMudHlwZSA9IG9wdGlvbnMubWV0aG9kIHx8IG9wdGlvbnMudHlwZSB8fCBzLm1ldGhvZCB8fCBzLnR5cGU7XG5cblx0XHQvLyBFeHRyYWN0IGRhdGFUeXBlcyBsaXN0XG5cdFx0cy5kYXRhVHlwZXMgPSAoIHMuZGF0YVR5cGUgfHwgXCIqXCIgKS50b0xvd2VyQ2FzZSgpLm1hdGNoKCBybm90aHRtbHdoaXRlICkgfHwgWyBcIlwiIF07XG5cblx0XHQvLyBBIGNyb3NzLWRvbWFpbiByZXF1ZXN0IGlzIGluIG9yZGVyIHdoZW4gdGhlIG9yaWdpbiBkb2Vzbid0IG1hdGNoIHRoZSBjdXJyZW50IG9yaWdpbi5cblx0XHRpZiAoIHMuY3Jvc3NEb21haW4gPT0gbnVsbCApIHtcblx0XHRcdHVybEFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiYVwiICk7XG5cblx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9OCAtIDExLCBFZGdlIDEyIC0gMTVcblx0XHRcdC8vIElFIHRocm93cyBleGNlcHRpb24gb24gYWNjZXNzaW5nIHRoZSBocmVmIHByb3BlcnR5IGlmIHVybCBpcyBtYWxmb3JtZWQsXG5cdFx0XHQvLyBlLmcuIGh0dHA6Ly9leGFtcGxlLmNvbTo4MHgvXG5cdFx0XHR0cnkge1xuXHRcdFx0XHR1cmxBbmNob3IuaHJlZiA9IHMudXJsO1xuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9OCAtIDExIG9ubHlcblx0XHRcdFx0Ly8gQW5jaG9yJ3MgaG9zdCBwcm9wZXJ0eSBpc24ndCBjb3JyZWN0bHkgc2V0IHdoZW4gcy51cmwgaXMgcmVsYXRpdmVcblx0XHRcdFx0dXJsQW5jaG9yLmhyZWYgPSB1cmxBbmNob3IuaHJlZjtcblx0XHRcdFx0cy5jcm9zc0RvbWFpbiA9IG9yaWdpbkFuY2hvci5wcm90b2NvbCArIFwiLy9cIiArIG9yaWdpbkFuY2hvci5ob3N0ICE9PVxuXHRcdFx0XHRcdHVybEFuY2hvci5wcm90b2NvbCArIFwiLy9cIiArIHVybEFuY2hvci5ob3N0O1xuXHRcdFx0fSBjYXRjaCAoIGUgKSB7XG5cblx0XHRcdFx0Ly8gSWYgdGhlcmUgaXMgYW4gZXJyb3IgcGFyc2luZyB0aGUgVVJMLCBhc3N1bWUgaXQgaXMgY3Jvc3NEb21haW4sXG5cdFx0XHRcdC8vIGl0IGNhbiBiZSByZWplY3RlZCBieSB0aGUgdHJhbnNwb3J0IGlmIGl0IGlzIGludmFsaWRcblx0XHRcdFx0cy5jcm9zc0RvbWFpbiA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQ29udmVydCBkYXRhIGlmIG5vdCBhbHJlYWR5IGEgc3RyaW5nXG5cdFx0aWYgKCBzLmRhdGEgJiYgcy5wcm9jZXNzRGF0YSAmJiB0eXBlb2Ygcy5kYXRhICE9PSBcInN0cmluZ1wiICkge1xuXHRcdFx0cy5kYXRhID0galF1ZXJ5LnBhcmFtKCBzLmRhdGEsIHMudHJhZGl0aW9uYWwgKTtcblx0XHR9XG5cblx0XHQvLyBBcHBseSBwcmVmaWx0ZXJzXG5cdFx0aW5zcGVjdFByZWZpbHRlcnNPclRyYW5zcG9ydHMoIHByZWZpbHRlcnMsIHMsIG9wdGlvbnMsIGpxWEhSICk7XG5cblx0XHQvLyBJZiByZXF1ZXN0IHdhcyBhYm9ydGVkIGluc2lkZSBhIHByZWZpbHRlciwgc3RvcCB0aGVyZVxuXHRcdGlmICggY29tcGxldGVkICkge1xuXHRcdFx0cmV0dXJuIGpxWEhSO1xuXHRcdH1cblxuXHRcdC8vIFdlIGNhbiBmaXJlIGdsb2JhbCBldmVudHMgYXMgb2Ygbm93IGlmIGFza2VkIHRvXG5cdFx0Ly8gRG9uJ3QgZmlyZSBldmVudHMgaWYgalF1ZXJ5LmV2ZW50IGlzIHVuZGVmaW5lZCBpbiBhbiBBTUQtdXNhZ2Ugc2NlbmFyaW8gKCMxNTExOClcblx0XHRmaXJlR2xvYmFscyA9IGpRdWVyeS5ldmVudCAmJiBzLmdsb2JhbDtcblxuXHRcdC8vIFdhdGNoIGZvciBhIG5ldyBzZXQgb2YgcmVxdWVzdHNcblx0XHRpZiAoIGZpcmVHbG9iYWxzICYmIGpRdWVyeS5hY3RpdmUrKyA9PT0gMCApIHtcblx0XHRcdGpRdWVyeS5ldmVudC50cmlnZ2VyKCBcImFqYXhTdGFydFwiICk7XG5cdFx0fVxuXG5cdFx0Ly8gVXBwZXJjYXNlIHRoZSB0eXBlXG5cdFx0cy50eXBlID0gcy50eXBlLnRvVXBwZXJDYXNlKCk7XG5cblx0XHQvLyBEZXRlcm1pbmUgaWYgcmVxdWVzdCBoYXMgY29udGVudFxuXHRcdHMuaGFzQ29udGVudCA9ICFybm9Db250ZW50LnRlc3QoIHMudHlwZSApO1xuXG5cdFx0Ly8gU2F2ZSB0aGUgVVJMIGluIGNhc2Ugd2UncmUgdG95aW5nIHdpdGggdGhlIElmLU1vZGlmaWVkLVNpbmNlXG5cdFx0Ly8gYW5kL29yIElmLU5vbmUtTWF0Y2ggaGVhZGVyIGxhdGVyIG9uXG5cdFx0Ly8gUmVtb3ZlIGhhc2ggdG8gc2ltcGxpZnkgdXJsIG1hbmlwdWxhdGlvblxuXHRcdGNhY2hlVVJMID0gcy51cmwucmVwbGFjZSggcmhhc2gsIFwiXCIgKTtcblxuXHRcdC8vIE1vcmUgb3B0aW9ucyBoYW5kbGluZyBmb3IgcmVxdWVzdHMgd2l0aCBubyBjb250ZW50XG5cdFx0aWYgKCAhcy5oYXNDb250ZW50ICkge1xuXG5cdFx0XHQvLyBSZW1lbWJlciB0aGUgaGFzaCBzbyB3ZSBjYW4gcHV0IGl0IGJhY2tcblx0XHRcdHVuY2FjaGVkID0gcy51cmwuc2xpY2UoIGNhY2hlVVJMLmxlbmd0aCApO1xuXG5cdFx0XHQvLyBJZiBkYXRhIGlzIGF2YWlsYWJsZSBhbmQgc2hvdWxkIGJlIHByb2Nlc3NlZCwgYXBwZW5kIGRhdGEgdG8gdXJsXG5cdFx0XHRpZiAoIHMuZGF0YSAmJiAoIHMucHJvY2Vzc0RhdGEgfHwgdHlwZW9mIHMuZGF0YSA9PT0gXCJzdHJpbmdcIiApICkge1xuXHRcdFx0XHRjYWNoZVVSTCArPSAoIHJxdWVyeS50ZXN0KCBjYWNoZVVSTCApID8gXCImXCIgOiBcIj9cIiApICsgcy5kYXRhO1xuXG5cdFx0XHRcdC8vICM5NjgyOiByZW1vdmUgZGF0YSBzbyB0aGF0IGl0J3Mgbm90IHVzZWQgaW4gYW4gZXZlbnR1YWwgcmV0cnlcblx0XHRcdFx0ZGVsZXRlIHMuZGF0YTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWRkIG9yIHVwZGF0ZSBhbnRpLWNhY2hlIHBhcmFtIGlmIG5lZWRlZFxuXHRcdFx0aWYgKCBzLmNhY2hlID09PSBmYWxzZSApIHtcblx0XHRcdFx0Y2FjaGVVUkwgPSBjYWNoZVVSTC5yZXBsYWNlKCByYW50aUNhY2hlLCBcIiQxXCIgKTtcblx0XHRcdFx0dW5jYWNoZWQgPSAoIHJxdWVyeS50ZXN0KCBjYWNoZVVSTCApID8gXCImXCIgOiBcIj9cIiApICsgXCJfPVwiICsgKCBub25jZS5ndWlkKysgKSArXG5cdFx0XHRcdFx0dW5jYWNoZWQ7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFB1dCBoYXNoIGFuZCBhbnRpLWNhY2hlIG9uIHRoZSBVUkwgdGhhdCB3aWxsIGJlIHJlcXVlc3RlZCAoZ2gtMTczMilcblx0XHRcdHMudXJsID0gY2FjaGVVUkwgKyB1bmNhY2hlZDtcblxuXHRcdC8vIENoYW5nZSAnJTIwJyB0byAnKycgaWYgdGhpcyBpcyBlbmNvZGVkIGZvcm0gYm9keSBjb250ZW50IChnaC0yNjU4KVxuXHRcdH0gZWxzZSBpZiAoIHMuZGF0YSAmJiBzLnByb2Nlc3NEYXRhICYmXG5cdFx0XHQoIHMuY29udGVudFR5cGUgfHwgXCJcIiApLmluZGV4T2YoIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgKSA9PT0gMCApIHtcblx0XHRcdHMuZGF0YSA9IHMuZGF0YS5yZXBsYWNlKCByMjAsIFwiK1wiICk7XG5cdFx0fVxuXG5cdFx0Ly8gU2V0IHRoZSBJZi1Nb2RpZmllZC1TaW5jZSBhbmQvb3IgSWYtTm9uZS1NYXRjaCBoZWFkZXIsIGlmIGluIGlmTW9kaWZpZWQgbW9kZS5cblx0XHRpZiAoIHMuaWZNb2RpZmllZCApIHtcblx0XHRcdGlmICggalF1ZXJ5Lmxhc3RNb2RpZmllZFsgY2FjaGVVUkwgXSApIHtcblx0XHRcdFx0anFYSFIuc2V0UmVxdWVzdEhlYWRlciggXCJJZi1Nb2RpZmllZC1TaW5jZVwiLCBqUXVlcnkubGFzdE1vZGlmaWVkWyBjYWNoZVVSTCBdICk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIGpRdWVyeS5ldGFnWyBjYWNoZVVSTCBdICkge1xuXHRcdFx0XHRqcVhIUi5zZXRSZXF1ZXN0SGVhZGVyKCBcIklmLU5vbmUtTWF0Y2hcIiwgalF1ZXJ5LmV0YWdbIGNhY2hlVVJMIF0gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBTZXQgdGhlIGNvcnJlY3QgaGVhZGVyLCBpZiBkYXRhIGlzIGJlaW5nIHNlbnRcblx0XHRpZiAoIHMuZGF0YSAmJiBzLmhhc0NvbnRlbnQgJiYgcy5jb250ZW50VHlwZSAhPT0gZmFsc2UgfHwgb3B0aW9ucy5jb250ZW50VHlwZSApIHtcblx0XHRcdGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoIFwiQ29udGVudC1UeXBlXCIsIHMuY29udGVudFR5cGUgKTtcblx0XHR9XG5cblx0XHQvLyBTZXQgdGhlIEFjY2VwdHMgaGVhZGVyIGZvciB0aGUgc2VydmVyLCBkZXBlbmRpbmcgb24gdGhlIGRhdGFUeXBlXG5cdFx0anFYSFIuc2V0UmVxdWVzdEhlYWRlcihcblx0XHRcdFwiQWNjZXB0XCIsXG5cdFx0XHRzLmRhdGFUeXBlc1sgMCBdICYmIHMuYWNjZXB0c1sgcy5kYXRhVHlwZXNbIDAgXSBdID9cblx0XHRcdFx0cy5hY2NlcHRzWyBzLmRhdGFUeXBlc1sgMCBdIF0gK1xuXHRcdFx0XHRcdCggcy5kYXRhVHlwZXNbIDAgXSAhPT0gXCIqXCIgPyBcIiwgXCIgKyBhbGxUeXBlcyArIFwiOyBxPTAuMDFcIiA6IFwiXCIgKSA6XG5cdFx0XHRcdHMuYWNjZXB0c1sgXCIqXCIgXVxuXHRcdCk7XG5cblx0XHQvLyBDaGVjayBmb3IgaGVhZGVycyBvcHRpb25cblx0XHRmb3IgKCBpIGluIHMuaGVhZGVycyApIHtcblx0XHRcdGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoIGksIHMuaGVhZGVyc1sgaSBdICk7XG5cdFx0fVxuXG5cdFx0Ly8gQWxsb3cgY3VzdG9tIGhlYWRlcnMvbWltZXR5cGVzIGFuZCBlYXJseSBhYm9ydFxuXHRcdGlmICggcy5iZWZvcmVTZW5kICYmXG5cdFx0XHQoIHMuYmVmb3JlU2VuZC5jYWxsKCBjYWxsYmFja0NvbnRleHQsIGpxWEhSLCBzICkgPT09IGZhbHNlIHx8IGNvbXBsZXRlZCApICkge1xuXG5cdFx0XHQvLyBBYm9ydCBpZiBub3QgZG9uZSBhbHJlYWR5IGFuZCByZXR1cm5cblx0XHRcdHJldHVybiBqcVhIUi5hYm9ydCgpO1xuXHRcdH1cblxuXHRcdC8vIEFib3J0aW5nIGlzIG5vIGxvbmdlciBhIGNhbmNlbGxhdGlvblxuXHRcdHN0ckFib3J0ID0gXCJhYm9ydFwiO1xuXG5cdFx0Ly8gSW5zdGFsbCBjYWxsYmFja3Mgb24gZGVmZXJyZWRzXG5cdFx0Y29tcGxldGVEZWZlcnJlZC5hZGQoIHMuY29tcGxldGUgKTtcblx0XHRqcVhIUi5kb25lKCBzLnN1Y2Nlc3MgKTtcblx0XHRqcVhIUi5mYWlsKCBzLmVycm9yICk7XG5cblx0XHQvLyBHZXQgdHJhbnNwb3J0XG5cdFx0dHJhbnNwb3J0ID0gaW5zcGVjdFByZWZpbHRlcnNPclRyYW5zcG9ydHMoIHRyYW5zcG9ydHMsIHMsIG9wdGlvbnMsIGpxWEhSICk7XG5cblx0XHQvLyBJZiBubyB0cmFuc3BvcnQsIHdlIGF1dG8tYWJvcnRcblx0XHRpZiAoICF0cmFuc3BvcnQgKSB7XG5cdFx0XHRkb25lKCAtMSwgXCJObyBUcmFuc3BvcnRcIiApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRqcVhIUi5yZWFkeVN0YXRlID0gMTtcblxuXHRcdFx0Ly8gU2VuZCBnbG9iYWwgZXZlbnRcblx0XHRcdGlmICggZmlyZUdsb2JhbHMgKSB7XG5cdFx0XHRcdGdsb2JhbEV2ZW50Q29udGV4dC50cmlnZ2VyKCBcImFqYXhTZW5kXCIsIFsganFYSFIsIHMgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiByZXF1ZXN0IHdhcyBhYm9ydGVkIGluc2lkZSBhamF4U2VuZCwgc3RvcCB0aGVyZVxuXHRcdFx0aWYgKCBjb21wbGV0ZWQgKSB7XG5cdFx0XHRcdHJldHVybiBqcVhIUjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gVGltZW91dFxuXHRcdFx0aWYgKCBzLmFzeW5jICYmIHMudGltZW91dCA+IDAgKSB7XG5cdFx0XHRcdHRpbWVvdXRUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRqcVhIUi5hYm9ydCggXCJ0aW1lb3V0XCIgKTtcblx0XHRcdFx0fSwgcy50aW1lb3V0ICk7XG5cdFx0XHR9XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbXBsZXRlZCA9IGZhbHNlO1xuXHRcdFx0XHR0cmFuc3BvcnQuc2VuZCggcmVxdWVzdEhlYWRlcnMsIGRvbmUgKTtcblx0XHRcdH0gY2F0Y2ggKCBlICkge1xuXG5cdFx0XHRcdC8vIFJldGhyb3cgcG9zdC1jb21wbGV0aW9uIGV4Y2VwdGlvbnNcblx0XHRcdFx0aWYgKCBjb21wbGV0ZWQgKSB7XG5cdFx0XHRcdFx0dGhyb3cgZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFByb3BhZ2F0ZSBvdGhlcnMgYXMgcmVzdWx0c1xuXHRcdFx0XHRkb25lKCAtMSwgZSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENhbGxiYWNrIGZvciB3aGVuIGV2ZXJ5dGhpbmcgaXMgZG9uZVxuXHRcdGZ1bmN0aW9uIGRvbmUoIHN0YXR1cywgbmF0aXZlU3RhdHVzVGV4dCwgcmVzcG9uc2VzLCBoZWFkZXJzICkge1xuXHRcdFx0dmFyIGlzU3VjY2Vzcywgc3VjY2VzcywgZXJyb3IsIHJlc3BvbnNlLCBtb2RpZmllZCxcblx0XHRcdFx0c3RhdHVzVGV4dCA9IG5hdGl2ZVN0YXR1c1RleHQ7XG5cblx0XHRcdC8vIElnbm9yZSByZXBlYXQgaW52b2NhdGlvbnNcblx0XHRcdGlmICggY29tcGxldGVkICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbXBsZXRlZCA9IHRydWU7XG5cblx0XHRcdC8vIENsZWFyIHRpbWVvdXQgaWYgaXQgZXhpc3RzXG5cdFx0XHRpZiAoIHRpbWVvdXRUaW1lciApIHtcblx0XHRcdFx0d2luZG93LmNsZWFyVGltZW91dCggdGltZW91dFRpbWVyICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIERlcmVmZXJlbmNlIHRyYW5zcG9ydCBmb3IgZWFybHkgZ2FyYmFnZSBjb2xsZWN0aW9uXG5cdFx0XHQvLyAobm8gbWF0dGVyIGhvdyBsb25nIHRoZSBqcVhIUiBvYmplY3Qgd2lsbCBiZSB1c2VkKVxuXHRcdFx0dHJhbnNwb3J0ID0gdW5kZWZpbmVkO1xuXG5cdFx0XHQvLyBDYWNoZSByZXNwb25zZSBoZWFkZXJzXG5cdFx0XHRyZXNwb25zZUhlYWRlcnNTdHJpbmcgPSBoZWFkZXJzIHx8IFwiXCI7XG5cblx0XHRcdC8vIFNldCByZWFkeVN0YXRlXG5cdFx0XHRqcVhIUi5yZWFkeVN0YXRlID0gc3RhdHVzID4gMCA/IDQgOiAwO1xuXG5cdFx0XHQvLyBEZXRlcm1pbmUgaWYgc3VjY2Vzc2Z1bFxuXHRcdFx0aXNTdWNjZXNzID0gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDAgfHwgc3RhdHVzID09PSAzMDQ7XG5cblx0XHRcdC8vIEdldCByZXNwb25zZSBkYXRhXG5cdFx0XHRpZiAoIHJlc3BvbnNlcyApIHtcblx0XHRcdFx0cmVzcG9uc2UgPSBhamF4SGFuZGxlUmVzcG9uc2VzKCBzLCBqcVhIUiwgcmVzcG9uc2VzICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFVzZSBhIG5vb3AgY29udmVydGVyIGZvciBtaXNzaW5nIHNjcmlwdCBidXQgbm90IGlmIGpzb25wXG5cdFx0XHRpZiAoICFpc1N1Y2Nlc3MgJiZcblx0XHRcdFx0alF1ZXJ5LmluQXJyYXkoIFwic2NyaXB0XCIsIHMuZGF0YVR5cGVzICkgPiAtMSAmJlxuXHRcdFx0XHRqUXVlcnkuaW5BcnJheSggXCJqc29uXCIsIHMuZGF0YVR5cGVzICkgPCAwICkge1xuXHRcdFx0XHRzLmNvbnZlcnRlcnNbIFwidGV4dCBzY3JpcHRcIiBdID0gZnVuY3Rpb24oKSB7fTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ29udmVydCBubyBtYXR0ZXIgd2hhdCAodGhhdCB3YXkgcmVzcG9uc2VYWFggZmllbGRzIGFyZSBhbHdheXMgc2V0KVxuXHRcdFx0cmVzcG9uc2UgPSBhamF4Q29udmVydCggcywgcmVzcG9uc2UsIGpxWEhSLCBpc1N1Y2Nlc3MgKTtcblxuXHRcdFx0Ly8gSWYgc3VjY2Vzc2Z1bCwgaGFuZGxlIHR5cGUgY2hhaW5pbmdcblx0XHRcdGlmICggaXNTdWNjZXNzICkge1xuXG5cdFx0XHRcdC8vIFNldCB0aGUgSWYtTW9kaWZpZWQtU2luY2UgYW5kL29yIElmLU5vbmUtTWF0Y2ggaGVhZGVyLCBpZiBpbiBpZk1vZGlmaWVkIG1vZGUuXG5cdFx0XHRcdGlmICggcy5pZk1vZGlmaWVkICkge1xuXHRcdFx0XHRcdG1vZGlmaWVkID0ganFYSFIuZ2V0UmVzcG9uc2VIZWFkZXIoIFwiTGFzdC1Nb2RpZmllZFwiICk7XG5cdFx0XHRcdFx0aWYgKCBtb2RpZmllZCApIHtcblx0XHRcdFx0XHRcdGpRdWVyeS5sYXN0TW9kaWZpZWRbIGNhY2hlVVJMIF0gPSBtb2RpZmllZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bW9kaWZpZWQgPSBqcVhIUi5nZXRSZXNwb25zZUhlYWRlciggXCJldGFnXCIgKTtcblx0XHRcdFx0XHRpZiAoIG1vZGlmaWVkICkge1xuXHRcdFx0XHRcdFx0alF1ZXJ5LmV0YWdbIGNhY2hlVVJMIF0gPSBtb2RpZmllZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBpZiBubyBjb250ZW50XG5cdFx0XHRcdGlmICggc3RhdHVzID09PSAyMDQgfHwgcy50eXBlID09PSBcIkhFQURcIiApIHtcblx0XHRcdFx0XHRzdGF0dXNUZXh0ID0gXCJub2NvbnRlbnRcIjtcblxuXHRcdFx0XHQvLyBpZiBub3QgbW9kaWZpZWRcblx0XHRcdFx0fSBlbHNlIGlmICggc3RhdHVzID09PSAzMDQgKSB7XG5cdFx0XHRcdFx0c3RhdHVzVGV4dCA9IFwibm90bW9kaWZpZWRcIjtcblxuXHRcdFx0XHQvLyBJZiB3ZSBoYXZlIGRhdGEsIGxldCdzIGNvbnZlcnQgaXRcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzdGF0dXNUZXh0ID0gcmVzcG9uc2Uuc3RhdGU7XG5cdFx0XHRcdFx0c3VjY2VzcyA9IHJlc3BvbnNlLmRhdGE7XG5cdFx0XHRcdFx0ZXJyb3IgPSByZXNwb25zZS5lcnJvcjtcblx0XHRcdFx0XHRpc1N1Y2Nlc3MgPSAhZXJyb3I7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gRXh0cmFjdCBlcnJvciBmcm9tIHN0YXR1c1RleHQgYW5kIG5vcm1hbGl6ZSBmb3Igbm9uLWFib3J0c1xuXHRcdFx0XHRlcnJvciA9IHN0YXR1c1RleHQ7XG5cdFx0XHRcdGlmICggc3RhdHVzIHx8ICFzdGF0dXNUZXh0ICkge1xuXHRcdFx0XHRcdHN0YXR1c1RleHQgPSBcImVycm9yXCI7XG5cdFx0XHRcdFx0aWYgKCBzdGF0dXMgPCAwICkge1xuXHRcdFx0XHRcdFx0c3RhdHVzID0gMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gU2V0IGRhdGEgZm9yIHRoZSBmYWtlIHhociBvYmplY3Rcblx0XHRcdGpxWEhSLnN0YXR1cyA9IHN0YXR1cztcblx0XHRcdGpxWEhSLnN0YXR1c1RleHQgPSAoIG5hdGl2ZVN0YXR1c1RleHQgfHwgc3RhdHVzVGV4dCApICsgXCJcIjtcblxuXHRcdFx0Ly8gU3VjY2Vzcy9FcnJvclxuXHRcdFx0aWYgKCBpc1N1Y2Nlc3MgKSB7XG5cdFx0XHRcdGRlZmVycmVkLnJlc29sdmVXaXRoKCBjYWxsYmFja0NvbnRleHQsIFsgc3VjY2Vzcywgc3RhdHVzVGV4dCwganFYSFIgXSApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0V2l0aCggY2FsbGJhY2tDb250ZXh0LCBbIGpxWEhSLCBzdGF0dXNUZXh0LCBlcnJvciBdICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFN0YXR1cy1kZXBlbmRlbnQgY2FsbGJhY2tzXG5cdFx0XHRqcVhIUi5zdGF0dXNDb2RlKCBzdGF0dXNDb2RlICk7XG5cdFx0XHRzdGF0dXNDb2RlID0gdW5kZWZpbmVkO1xuXG5cdFx0XHRpZiAoIGZpcmVHbG9iYWxzICkge1xuXHRcdFx0XHRnbG9iYWxFdmVudENvbnRleHQudHJpZ2dlciggaXNTdWNjZXNzID8gXCJhamF4U3VjY2Vzc1wiIDogXCJhamF4RXJyb3JcIixcblx0XHRcdFx0XHRbIGpxWEhSLCBzLCBpc1N1Y2Nlc3MgPyBzdWNjZXNzIDogZXJyb3IgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDb21wbGV0ZVxuXHRcdFx0Y29tcGxldGVEZWZlcnJlZC5maXJlV2l0aCggY2FsbGJhY2tDb250ZXh0LCBbIGpxWEhSLCBzdGF0dXNUZXh0IF0gKTtcblxuXHRcdFx0aWYgKCBmaXJlR2xvYmFscyApIHtcblx0XHRcdFx0Z2xvYmFsRXZlbnRDb250ZXh0LnRyaWdnZXIoIFwiYWpheENvbXBsZXRlXCIsIFsganFYSFIsIHMgXSApO1xuXG5cdFx0XHRcdC8vIEhhbmRsZSB0aGUgZ2xvYmFsIEFKQVggY291bnRlclxuXHRcdFx0XHRpZiAoICEoIC0talF1ZXJ5LmFjdGl2ZSApICkge1xuXHRcdFx0XHRcdGpRdWVyeS5ldmVudC50cmlnZ2VyKCBcImFqYXhTdG9wXCIgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBqcVhIUjtcblx0fSxcblxuXHRnZXRKU09OOiBmdW5jdGlvbiggdXJsLCBkYXRhLCBjYWxsYmFjayApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmdldCggdXJsLCBkYXRhLCBjYWxsYmFjaywgXCJqc29uXCIgKTtcblx0fSxcblxuXHRnZXRTY3JpcHQ6IGZ1bmN0aW9uKCB1cmwsIGNhbGxiYWNrICkge1xuXHRcdHJldHVybiBqUXVlcnkuZ2V0KCB1cmwsIHVuZGVmaW5lZCwgY2FsbGJhY2ssIFwic2NyaXB0XCIgKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZWFjaCggWyBcImdldFwiLCBcInBvc3RcIiBdLCBmdW5jdGlvbiggX2ksIG1ldGhvZCApIHtcblx0alF1ZXJ5WyBtZXRob2QgXSA9IGZ1bmN0aW9uKCB1cmwsIGRhdGEsIGNhbGxiYWNrLCB0eXBlICkge1xuXG5cdFx0Ly8gU2hpZnQgYXJndW1lbnRzIGlmIGRhdGEgYXJndW1lbnQgd2FzIG9taXR0ZWRcblx0XHRpZiAoIGlzRnVuY3Rpb24oIGRhdGEgKSApIHtcblx0XHRcdHR5cGUgPSB0eXBlIHx8IGNhbGxiYWNrO1xuXHRcdFx0Y2FsbGJhY2sgPSBkYXRhO1xuXHRcdFx0ZGF0YSA9IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHQvLyBUaGUgdXJsIGNhbiBiZSBhbiBvcHRpb25zIG9iamVjdCAod2hpY2ggdGhlbiBtdXN0IGhhdmUgLnVybClcblx0XHRyZXR1cm4galF1ZXJ5LmFqYXgoIGpRdWVyeS5leHRlbmQoIHtcblx0XHRcdHVybDogdXJsLFxuXHRcdFx0dHlwZTogbWV0aG9kLFxuXHRcdFx0ZGF0YVR5cGU6IHR5cGUsXG5cdFx0XHRkYXRhOiBkYXRhLFxuXHRcdFx0c3VjY2VzczogY2FsbGJhY2tcblx0XHR9LCBqUXVlcnkuaXNQbGFpbk9iamVjdCggdXJsICkgJiYgdXJsICkgKTtcblx0fTtcbn0gKTtcblxualF1ZXJ5LmFqYXhQcmVmaWx0ZXIoIGZ1bmN0aW9uKCBzICkge1xuXHR2YXIgaTtcblx0Zm9yICggaSBpbiBzLmhlYWRlcnMgKSB7XG5cdFx0aWYgKCBpLnRvTG93ZXJDYXNlKCkgPT09IFwiY29udGVudC10eXBlXCIgKSB7XG5cdFx0XHRzLmNvbnRlbnRUeXBlID0gcy5oZWFkZXJzWyBpIF0gfHwgXCJcIjtcblx0XHR9XG5cdH1cbn0gKTtcblxuXG5qUXVlcnkuX2V2YWxVcmwgPSBmdW5jdGlvbiggdXJsLCBvcHRpb25zLCBkb2MgKSB7XG5cdHJldHVybiBqUXVlcnkuYWpheCgge1xuXHRcdHVybDogdXJsLFxuXG5cdFx0Ly8gTWFrZSB0aGlzIGV4cGxpY2l0LCBzaW5jZSB1c2VyIGNhbiBvdmVycmlkZSB0aGlzIHRocm91Z2ggYWpheFNldHVwICgjMTEyNjQpXG5cdFx0dHlwZTogXCJHRVRcIixcblx0XHRkYXRhVHlwZTogXCJzY3JpcHRcIixcblx0XHRjYWNoZTogdHJ1ZSxcblx0XHRhc3luYzogZmFsc2UsXG5cdFx0Z2xvYmFsOiBmYWxzZSxcblxuXHRcdC8vIE9ubHkgZXZhbHVhdGUgdGhlIHJlc3BvbnNlIGlmIGl0IGlzIHN1Y2Nlc3NmdWwgKGdoLTQxMjYpXG5cdFx0Ly8gZGF0YUZpbHRlciBpcyBub3QgaW52b2tlZCBmb3IgZmFpbHVyZSByZXNwb25zZXMsIHNvIHVzaW5nIGl0IGluc3RlYWRcblx0XHQvLyBvZiB0aGUgZGVmYXVsdCBjb252ZXJ0ZXIgaXMga2x1ZGd5IGJ1dCBpdCB3b3Jrcy5cblx0XHRjb252ZXJ0ZXJzOiB7XG5cdFx0XHRcInRleHQgc2NyaXB0XCI6IGZ1bmN0aW9uKCkge31cblx0XHR9LFxuXHRcdGRhdGFGaWx0ZXI6IGZ1bmN0aW9uKCByZXNwb25zZSApIHtcblx0XHRcdGpRdWVyeS5nbG9iYWxFdmFsKCByZXNwb25zZSwgb3B0aW9ucywgZG9jICk7XG5cdFx0fVxuXHR9ICk7XG59O1xuXG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0d3JhcEFsbDogZnVuY3Rpb24oIGh0bWwgKSB7XG5cdFx0dmFyIHdyYXA7XG5cblx0XHRpZiAoIHRoaXNbIDAgXSApIHtcblx0XHRcdGlmICggaXNGdW5jdGlvbiggaHRtbCApICkge1xuXHRcdFx0XHRodG1sID0gaHRtbC5jYWxsKCB0aGlzWyAwIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gVGhlIGVsZW1lbnRzIHRvIHdyYXAgdGhlIHRhcmdldCBhcm91bmRcblx0XHRcdHdyYXAgPSBqUXVlcnkoIGh0bWwsIHRoaXNbIDAgXS5vd25lckRvY3VtZW50ICkuZXEoIDAgKS5jbG9uZSggdHJ1ZSApO1xuXG5cdFx0XHRpZiAoIHRoaXNbIDAgXS5wYXJlbnROb2RlICkge1xuXHRcdFx0XHR3cmFwLmluc2VydEJlZm9yZSggdGhpc1sgMCBdICk7XG5cdFx0XHR9XG5cblx0XHRcdHdyYXAubWFwKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGVsZW0gPSB0aGlzO1xuXG5cdFx0XHRcdHdoaWxlICggZWxlbS5maXJzdEVsZW1lbnRDaGlsZCApIHtcblx0XHRcdFx0XHRlbGVtID0gZWxlbS5maXJzdEVsZW1lbnRDaGlsZDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBlbGVtO1xuXHRcdFx0fSApLmFwcGVuZCggdGhpcyApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHdyYXBJbm5lcjogZnVuY3Rpb24oIGh0bWwgKSB7XG5cdFx0aWYgKCBpc0Z1bmN0aW9uKCBodG1sICkgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbiggaSApIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkud3JhcElubmVyKCBodG1sLmNhbGwoIHRoaXMsIGkgKSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHNlbGYgPSBqUXVlcnkoIHRoaXMgKSxcblx0XHRcdFx0Y29udGVudHMgPSBzZWxmLmNvbnRlbnRzKCk7XG5cblx0XHRcdGlmICggY29udGVudHMubGVuZ3RoICkge1xuXHRcdFx0XHRjb250ZW50cy53cmFwQWxsKCBodG1sICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNlbGYuYXBwZW5kKCBodG1sICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdHdyYXA6IGZ1bmN0aW9uKCBodG1sICkge1xuXHRcdHZhciBodG1sSXNGdW5jdGlvbiA9IGlzRnVuY3Rpb24oIGh0bWwgKTtcblxuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkud3JhcEFsbCggaHRtbElzRnVuY3Rpb24gPyBodG1sLmNhbGwoIHRoaXMsIGkgKSA6IGh0bWwgKTtcblx0XHR9ICk7XG5cdH0sXG5cblx0dW53cmFwOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0dGhpcy5wYXJlbnQoIHNlbGVjdG9yICkubm90KCBcImJvZHlcIiApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkucmVwbGFjZVdpdGgoIHRoaXMuY2hpbGROb2RlcyApO1xuXHRcdH0gKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufSApO1xuXG5cbmpRdWVyeS5leHByLnBzZXVkb3MuaGlkZGVuID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdHJldHVybiAhalF1ZXJ5LmV4cHIucHNldWRvcy52aXNpYmxlKCBlbGVtICk7XG59O1xualF1ZXJ5LmV4cHIucHNldWRvcy52aXNpYmxlID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdHJldHVybiAhISggZWxlbS5vZmZzZXRXaWR0aCB8fCBlbGVtLm9mZnNldEhlaWdodCB8fCBlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoICk7XG59O1xuXG5cblxuXG5qUXVlcnkuYWpheFNldHRpbmdzLnhociA9IGZ1bmN0aW9uKCkge1xuXHR0cnkge1xuXHRcdHJldHVybiBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KCk7XG5cdH0gY2F0Y2ggKCBlICkge31cbn07XG5cbnZhciB4aHJTdWNjZXNzU3RhdHVzID0ge1xuXG5cdFx0Ly8gRmlsZSBwcm90b2NvbCBhbHdheXMgeWllbGRzIHN0YXR1cyBjb2RlIDAsIGFzc3VtZSAyMDBcblx0XHQwOiAyMDAsXG5cblx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuXHRcdC8vICMxNDUwOiBzb21ldGltZXMgSUUgcmV0dXJucyAxMjIzIHdoZW4gaXQgc2hvdWxkIGJlIDIwNFxuXHRcdDEyMjM6IDIwNFxuXHR9LFxuXHR4aHJTdXBwb3J0ZWQgPSBqUXVlcnkuYWpheFNldHRpbmdzLnhocigpO1xuXG5zdXBwb3J0LmNvcnMgPSAhIXhoclN1cHBvcnRlZCAmJiAoIFwid2l0aENyZWRlbnRpYWxzXCIgaW4geGhyU3VwcG9ydGVkICk7XG5zdXBwb3J0LmFqYXggPSB4aHJTdXBwb3J0ZWQgPSAhIXhoclN1cHBvcnRlZDtcblxualF1ZXJ5LmFqYXhUcmFuc3BvcnQoIGZ1bmN0aW9uKCBvcHRpb25zICkge1xuXHR2YXIgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s7XG5cblx0Ly8gQ3Jvc3MgZG9tYWluIG9ubHkgYWxsb3dlZCBpZiBzdXBwb3J0ZWQgdGhyb3VnaCBYTUxIdHRwUmVxdWVzdFxuXHRpZiAoIHN1cHBvcnQuY29ycyB8fCB4aHJTdXBwb3J0ZWQgJiYgIW9wdGlvbnMuY3Jvc3NEb21haW4gKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNlbmQ6IGZ1bmN0aW9uKCBoZWFkZXJzLCBjb21wbGV0ZSApIHtcblx0XHRcdFx0dmFyIGksXG5cdFx0XHRcdFx0eGhyID0gb3B0aW9ucy54aHIoKTtcblxuXHRcdFx0XHR4aHIub3Blbihcblx0XHRcdFx0XHRvcHRpb25zLnR5cGUsXG5cdFx0XHRcdFx0b3B0aW9ucy51cmwsXG5cdFx0XHRcdFx0b3B0aW9ucy5hc3luYyxcblx0XHRcdFx0XHRvcHRpb25zLnVzZXJuYW1lLFxuXHRcdFx0XHRcdG9wdGlvbnMucGFzc3dvcmRcblx0XHRcdFx0KTtcblxuXHRcdFx0XHQvLyBBcHBseSBjdXN0b20gZmllbGRzIGlmIHByb3ZpZGVkXG5cdFx0XHRcdGlmICggb3B0aW9ucy54aHJGaWVsZHMgKSB7XG5cdFx0XHRcdFx0Zm9yICggaSBpbiBvcHRpb25zLnhockZpZWxkcyApIHtcblx0XHRcdFx0XHRcdHhoclsgaSBdID0gb3B0aW9ucy54aHJGaWVsZHNbIGkgXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBPdmVycmlkZSBtaW1lIHR5cGUgaWYgbmVlZGVkXG5cdFx0XHRcdGlmICggb3B0aW9ucy5taW1lVHlwZSAmJiB4aHIub3ZlcnJpZGVNaW1lVHlwZSApIHtcblx0XHRcdFx0XHR4aHIub3ZlcnJpZGVNaW1lVHlwZSggb3B0aW9ucy5taW1lVHlwZSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gWC1SZXF1ZXN0ZWQtV2l0aCBoZWFkZXJcblx0XHRcdFx0Ly8gRm9yIGNyb3NzLWRvbWFpbiByZXF1ZXN0cywgc2VlaW5nIGFzIGNvbmRpdGlvbnMgZm9yIGEgcHJlZmxpZ2h0IGFyZVxuXHRcdFx0XHQvLyBha2luIHRvIGEgamlnc2F3IHB1enpsZSwgd2Ugc2ltcGx5IG5ldmVyIHNldCBpdCB0byBiZSBzdXJlLlxuXHRcdFx0XHQvLyAoaXQgY2FuIGFsd2F5cyBiZSBzZXQgb24gYSBwZXItcmVxdWVzdCBiYXNpcyBvciBldmVuIHVzaW5nIGFqYXhTZXR1cClcblx0XHRcdFx0Ly8gRm9yIHNhbWUtZG9tYWluIHJlcXVlc3RzLCB3b24ndCBjaGFuZ2UgaGVhZGVyIGlmIGFscmVhZHkgcHJvdmlkZWQuXG5cdFx0XHRcdGlmICggIW9wdGlvbnMuY3Jvc3NEb21haW4gJiYgIWhlYWRlcnNbIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiIF0gKSB7XG5cdFx0XHRcdFx0aGVhZGVyc1sgXCJYLVJlcXVlc3RlZC1XaXRoXCIgXSA9IFwiWE1MSHR0cFJlcXVlc3RcIjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFNldCBoZWFkZXJzXG5cdFx0XHRcdGZvciAoIGkgaW4gaGVhZGVycyApIHtcblx0XHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlciggaSwgaGVhZGVyc1sgaSBdICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBDYWxsYmFja1xuXHRcdFx0XHRjYWxsYmFjayA9IGZ1bmN0aW9uKCB0eXBlICkge1xuXHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGlmICggY2FsbGJhY2sgKSB7XG5cdFx0XHRcdFx0XHRcdGNhbGxiYWNrID0gZXJyb3JDYWxsYmFjayA9IHhoci5vbmxvYWQgPVxuXHRcdFx0XHRcdFx0XHRcdHhoci5vbmVycm9yID0geGhyLm9uYWJvcnQgPSB4aHIub250aW1lb3V0ID1cblx0XHRcdFx0XHRcdFx0XHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuXG5cdFx0XHRcdFx0XHRcdGlmICggdHlwZSA9PT0gXCJhYm9ydFwiICkge1xuXHRcdFx0XHRcdFx0XHRcdHhoci5hYm9ydCgpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCB0eXBlID09PSBcImVycm9yXCIgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuXHRcdFx0XHRcdFx0XHRcdC8vIE9uIGEgbWFudWFsIG5hdGl2ZSBhYm9ydCwgSUU5IHRocm93c1xuXHRcdFx0XHRcdFx0XHRcdC8vIGVycm9ycyBvbiBhbnkgcHJvcGVydHkgYWNjZXNzIHRoYXQgaXMgbm90IHJlYWR5U3RhdGVcblx0XHRcdFx0XHRcdFx0XHRpZiAoIHR5cGVvZiB4aHIuc3RhdHVzICE9PSBcIm51bWJlclwiICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29tcGxldGUoIDAsIFwiZXJyb3JcIiApO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZShcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBGaWxlOiBwcm90b2NvbCBhbHdheXMgeWllbGRzIHN0YXR1cyAwOyBzZWUgIzg2MDUsICMxNDIwN1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR4aHIuc3RhdHVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR4aHIuc3RhdHVzVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29tcGxldGUoXG5cdFx0XHRcdFx0XHRcdFx0XHR4aHJTdWNjZXNzU3RhdHVzWyB4aHIuc3RhdHVzIF0gfHwgeGhyLnN0YXR1cyxcblx0XHRcdFx0XHRcdFx0XHRcdHhoci5zdGF0dXNUZXh0LFxuXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gSUU5IGhhcyBubyBYSFIyIGJ1dCB0aHJvd3Mgb24gYmluYXJ5ICh0cmFjLTExNDI2KVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gRm9yIFhIUjIgbm9uLXRleHQsIGxldCB0aGUgY2FsbGVyIGhhbmRsZSBpdCAoZ2gtMjQ5OClcblx0XHRcdFx0XHRcdFx0XHRcdCggeGhyLnJlc3BvbnNlVHlwZSB8fCBcInRleHRcIiApICE9PSBcInRleHRcIiAgfHxcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGVvZiB4aHIucmVzcG9uc2VUZXh0ICE9PSBcInN0cmluZ1wiID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0eyBiaW5hcnk6IHhoci5yZXNwb25zZSB9IDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyB0ZXh0OiB4aHIucmVzcG9uc2VUZXh0IH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKClcblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fTtcblxuXHRcdFx0XHQvLyBMaXN0ZW4gdG8gZXZlbnRzXG5cdFx0XHRcdHhoci5vbmxvYWQgPSBjYWxsYmFjaygpO1xuXHRcdFx0XHRlcnJvckNhbGxiYWNrID0geGhyLm9uZXJyb3IgPSB4aHIub250aW1lb3V0ID0gY2FsbGJhY2soIFwiZXJyb3JcIiApO1xuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDkgb25seVxuXHRcdFx0XHQvLyBVc2Ugb25yZWFkeXN0YXRlY2hhbmdlIHRvIHJlcGxhY2Ugb25hYm9ydFxuXHRcdFx0XHQvLyB0byBoYW5kbGUgdW5jYXVnaHQgYWJvcnRzXG5cdFx0XHRcdGlmICggeGhyLm9uYWJvcnQgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHR4aHIub25hYm9ydCA9IGVycm9yQ2FsbGJhY2s7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdFx0XHQvLyBDaGVjayByZWFkeVN0YXRlIGJlZm9yZSB0aW1lb3V0IGFzIGl0IGNoYW5nZXNcblx0XHRcdFx0XHRcdGlmICggeGhyLnJlYWR5U3RhdGUgPT09IDQgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gQWxsb3cgb25lcnJvciB0byBiZSBjYWxsZWQgZmlyc3QsXG5cdFx0XHRcdFx0XHRcdC8vIGJ1dCB0aGF0IHdpbGwgbm90IGhhbmRsZSBhIG5hdGl2ZSBhYm9ydFxuXHRcdFx0XHRcdFx0XHQvLyBBbHNvLCBzYXZlIGVycm9yQ2FsbGJhY2sgdG8gYSB2YXJpYWJsZVxuXHRcdFx0XHRcdFx0XHQvLyBhcyB4aHIub25lcnJvciBjYW5ub3QgYmUgYWNjZXNzZWRcblx0XHRcdFx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdGlmICggY2FsbGJhY2sgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRlcnJvckNhbGxiYWNrKCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIENyZWF0ZSB0aGUgYWJvcnQgY2FsbGJhY2tcblx0XHRcdFx0Y2FsbGJhY2sgPSBjYWxsYmFjayggXCJhYm9ydFwiICk7XG5cblx0XHRcdFx0dHJ5IHtcblxuXHRcdFx0XHRcdC8vIERvIHNlbmQgdGhlIHJlcXVlc3QgKHRoaXMgbWF5IHJhaXNlIGFuIGV4Y2VwdGlvbilcblx0XHRcdFx0XHR4aHIuc2VuZCggb3B0aW9ucy5oYXNDb250ZW50ICYmIG9wdGlvbnMuZGF0YSB8fCBudWxsICk7XG5cdFx0XHRcdH0gY2F0Y2ggKCBlICkge1xuXG5cdFx0XHRcdFx0Ly8gIzE0NjgzOiBPbmx5IHJldGhyb3cgaWYgdGhpcyBoYXNuJ3QgYmVlbiBub3RpZmllZCBhcyBhbiBlcnJvciB5ZXRcblx0XHRcdFx0XHRpZiAoIGNhbGxiYWNrICkge1xuXHRcdFx0XHRcdFx0dGhyb3cgZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdGFib3J0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCBjYWxsYmFjayApIHtcblx0XHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxufSApO1xuXG5cblxuXG4vLyBQcmV2ZW50IGF1dG8tZXhlY3V0aW9uIG9mIHNjcmlwdHMgd2hlbiBubyBleHBsaWNpdCBkYXRhVHlwZSB3YXMgcHJvdmlkZWQgKFNlZSBnaC0yNDMyKVxualF1ZXJ5LmFqYXhQcmVmaWx0ZXIoIGZ1bmN0aW9uKCBzICkge1xuXHRpZiAoIHMuY3Jvc3NEb21haW4gKSB7XG5cdFx0cy5jb250ZW50cy5zY3JpcHQgPSBmYWxzZTtcblx0fVxufSApO1xuXG4vLyBJbnN0YWxsIHNjcmlwdCBkYXRhVHlwZVxualF1ZXJ5LmFqYXhTZXR1cCgge1xuXHRhY2NlcHRzOiB7XG5cdFx0c2NyaXB0OiBcInRleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgXCIgK1xuXHRcdFx0XCJhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIlxuXHR9LFxuXHRjb250ZW50czoge1xuXHRcdHNjcmlwdDogL1xcYig/OmphdmF8ZWNtYSlzY3JpcHRcXGIvXG5cdH0sXG5cdGNvbnZlcnRlcnM6IHtcblx0XHRcInRleHQgc2NyaXB0XCI6IGZ1bmN0aW9uKCB0ZXh0ICkge1xuXHRcdFx0alF1ZXJ5Lmdsb2JhbEV2YWwoIHRleHQgKTtcblx0XHRcdHJldHVybiB0ZXh0O1xuXHRcdH1cblx0fVxufSApO1xuXG4vLyBIYW5kbGUgY2FjaGUncyBzcGVjaWFsIGNhc2UgYW5kIGNyb3NzRG9tYWluXG5qUXVlcnkuYWpheFByZWZpbHRlciggXCJzY3JpcHRcIiwgZnVuY3Rpb24oIHMgKSB7XG5cdGlmICggcy5jYWNoZSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdHMuY2FjaGUgPSBmYWxzZTtcblx0fVxuXHRpZiAoIHMuY3Jvc3NEb21haW4gKSB7XG5cdFx0cy50eXBlID0gXCJHRVRcIjtcblx0fVxufSApO1xuXG4vLyBCaW5kIHNjcmlwdCB0YWcgaGFjayB0cmFuc3BvcnRcbmpRdWVyeS5hamF4VHJhbnNwb3J0KCBcInNjcmlwdFwiLCBmdW5jdGlvbiggcyApIHtcblxuXHQvLyBUaGlzIHRyYW5zcG9ydCBvbmx5IGRlYWxzIHdpdGggY3Jvc3MgZG9tYWluIG9yIGZvcmNlZC1ieS1hdHRycyByZXF1ZXN0c1xuXHRpZiAoIHMuY3Jvc3NEb21haW4gfHwgcy5zY3JpcHRBdHRycyApIHtcblx0XHR2YXIgc2NyaXB0LCBjYWxsYmFjaztcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VuZDogZnVuY3Rpb24oIF8sIGNvbXBsZXRlICkge1xuXHRcdFx0XHRzY3JpcHQgPSBqUXVlcnkoIFwiPHNjcmlwdD5cIiApXG5cdFx0XHRcdFx0LmF0dHIoIHMuc2NyaXB0QXR0cnMgfHwge30gKVxuXHRcdFx0XHRcdC5wcm9wKCB7IGNoYXJzZXQ6IHMuc2NyaXB0Q2hhcnNldCwgc3JjOiBzLnVybCB9IClcblx0XHRcdFx0XHQub24oIFwibG9hZCBlcnJvclwiLCBjYWxsYmFjayA9IGZ1bmN0aW9uKCBldnQgKSB7XG5cdFx0XHRcdFx0XHRzY3JpcHQucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHRjYWxsYmFjayA9IG51bGw7XG5cdFx0XHRcdFx0XHRpZiAoIGV2dCApIHtcblx0XHRcdFx0XHRcdFx0Y29tcGxldGUoIGV2dC50eXBlID09PSBcImVycm9yXCIgPyA0MDQgOiAyMDAsIGV2dC50eXBlICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdC8vIFVzZSBuYXRpdmUgRE9NIG1hbmlwdWxhdGlvbiB0byBhdm9pZCBvdXIgZG9tTWFuaXAgQUpBWCB0cmlja2VyeVxuXHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCBzY3JpcHRbIDAgXSApO1xuXHRcdFx0fSxcblx0XHRcdGFib3J0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCBjYWxsYmFjayApIHtcblx0XHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxufSApO1xuXG5cblxuXG52YXIgb2xkQ2FsbGJhY2tzID0gW10sXG5cdHJqc29ucCA9IC8oPSlcXD8oPz0mfCQpfFxcP1xcPy87XG5cbi8vIERlZmF1bHQganNvbnAgc2V0dGluZ3NcbmpRdWVyeS5hamF4U2V0dXAoIHtcblx0anNvbnA6IFwiY2FsbGJhY2tcIixcblx0anNvbnBDYWxsYmFjazogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGNhbGxiYWNrID0gb2xkQ2FsbGJhY2tzLnBvcCgpIHx8ICggalF1ZXJ5LmV4cGFuZG8gKyBcIl9cIiArICggbm9uY2UuZ3VpZCsrICkgKTtcblx0XHR0aGlzWyBjYWxsYmFjayBdID0gdHJ1ZTtcblx0XHRyZXR1cm4gY2FsbGJhY2s7XG5cdH1cbn0gKTtcblxuLy8gRGV0ZWN0LCBub3JtYWxpemUgb3B0aW9ucyBhbmQgaW5zdGFsbCBjYWxsYmFja3MgZm9yIGpzb25wIHJlcXVlc3RzXG5qUXVlcnkuYWpheFByZWZpbHRlciggXCJqc29uIGpzb25wXCIsIGZ1bmN0aW9uKCBzLCBvcmlnaW5hbFNldHRpbmdzLCBqcVhIUiApIHtcblxuXHR2YXIgY2FsbGJhY2tOYW1lLCBvdmVyd3JpdHRlbiwgcmVzcG9uc2VDb250YWluZXIsXG5cdFx0anNvblByb3AgPSBzLmpzb25wICE9PSBmYWxzZSAmJiAoIHJqc29ucC50ZXN0KCBzLnVybCApID9cblx0XHRcdFwidXJsXCIgOlxuXHRcdFx0dHlwZW9mIHMuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuXHRcdFx0XHQoIHMuY29udGVudFR5cGUgfHwgXCJcIiApXG5cdFx0XHRcdFx0LmluZGV4T2YoIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgKSA9PT0gMCAmJlxuXHRcdFx0XHRyanNvbnAudGVzdCggcy5kYXRhICkgJiYgXCJkYXRhXCJcblx0XHQpO1xuXG5cdC8vIEhhbmRsZSBpZmYgdGhlIGV4cGVjdGVkIGRhdGEgdHlwZSBpcyBcImpzb25wXCIgb3Igd2UgaGF2ZSBhIHBhcmFtZXRlciB0byBzZXRcblx0aWYgKCBqc29uUHJvcCB8fCBzLmRhdGFUeXBlc1sgMCBdID09PSBcImpzb25wXCIgKSB7XG5cblx0XHQvLyBHZXQgY2FsbGJhY2sgbmFtZSwgcmVtZW1iZXJpbmcgcHJlZXhpc3RpbmcgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIGl0XG5cdFx0Y2FsbGJhY2tOYW1lID0gcy5qc29ucENhbGxiYWNrID0gaXNGdW5jdGlvbiggcy5qc29ucENhbGxiYWNrICkgP1xuXHRcdFx0cy5qc29ucENhbGxiYWNrKCkgOlxuXHRcdFx0cy5qc29ucENhbGxiYWNrO1xuXG5cdFx0Ly8gSW5zZXJ0IGNhbGxiYWNrIGludG8gdXJsIG9yIGZvcm0gZGF0YVxuXHRcdGlmICgganNvblByb3AgKSB7XG5cdFx0XHRzWyBqc29uUHJvcCBdID0gc1sganNvblByb3AgXS5yZXBsYWNlKCByanNvbnAsIFwiJDFcIiArIGNhbGxiYWNrTmFtZSApO1xuXHRcdH0gZWxzZSBpZiAoIHMuanNvbnAgIT09IGZhbHNlICkge1xuXHRcdFx0cy51cmwgKz0gKCBycXVlcnkudGVzdCggcy51cmwgKSA/IFwiJlwiIDogXCI/XCIgKSArIHMuanNvbnAgKyBcIj1cIiArIGNhbGxiYWNrTmFtZTtcblx0XHR9XG5cblx0XHQvLyBVc2UgZGF0YSBjb252ZXJ0ZXIgdG8gcmV0cmlldmUganNvbiBhZnRlciBzY3JpcHQgZXhlY3V0aW9uXG5cdFx0cy5jb252ZXJ0ZXJzWyBcInNjcmlwdCBqc29uXCIgXSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCAhcmVzcG9uc2VDb250YWluZXIgKSB7XG5cdFx0XHRcdGpRdWVyeS5lcnJvciggY2FsbGJhY2tOYW1lICsgXCIgd2FzIG5vdCBjYWxsZWRcIiApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlQ29udGFpbmVyWyAwIF07XG5cdFx0fTtcblxuXHRcdC8vIEZvcmNlIGpzb24gZGF0YVR5cGVcblx0XHRzLmRhdGFUeXBlc1sgMCBdID0gXCJqc29uXCI7XG5cblx0XHQvLyBJbnN0YWxsIGNhbGxiYWNrXG5cdFx0b3ZlcndyaXR0ZW4gPSB3aW5kb3dbIGNhbGxiYWNrTmFtZSBdO1xuXHRcdHdpbmRvd1sgY2FsbGJhY2tOYW1lIF0gPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlc3BvbnNlQ29udGFpbmVyID0gYXJndW1lbnRzO1xuXHRcdH07XG5cblx0XHQvLyBDbGVhbi11cCBmdW5jdGlvbiAoZmlyZXMgYWZ0ZXIgY29udmVydGVycylcblx0XHRqcVhIUi5hbHdheXMoIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBJZiBwcmV2aW91cyB2YWx1ZSBkaWRuJ3QgZXhpc3QgLSByZW1vdmUgaXRcblx0XHRcdGlmICggb3ZlcndyaXR0ZW4gPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0alF1ZXJ5KCB3aW5kb3cgKS5yZW1vdmVQcm9wKCBjYWxsYmFja05hbWUgKTtcblxuXHRcdFx0Ly8gT3RoZXJ3aXNlIHJlc3RvcmUgcHJlZXhpc3RpbmcgdmFsdWVcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHdpbmRvd1sgY2FsbGJhY2tOYW1lIF0gPSBvdmVyd3JpdHRlbjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU2F2ZSBiYWNrIGFzIGZyZWVcblx0XHRcdGlmICggc1sgY2FsbGJhY2tOYW1lIF0gKSB7XG5cblx0XHRcdFx0Ly8gTWFrZSBzdXJlIHRoYXQgcmUtdXNpbmcgdGhlIG9wdGlvbnMgZG9lc24ndCBzY3JldyB0aGluZ3MgYXJvdW5kXG5cdFx0XHRcdHMuanNvbnBDYWxsYmFjayA9IG9yaWdpbmFsU2V0dGluZ3MuanNvbnBDYWxsYmFjaztcblxuXHRcdFx0XHQvLyBTYXZlIHRoZSBjYWxsYmFjayBuYW1lIGZvciBmdXR1cmUgdXNlXG5cdFx0XHRcdG9sZENhbGxiYWNrcy5wdXNoKCBjYWxsYmFja05hbWUgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ2FsbCBpZiBpdCB3YXMgYSBmdW5jdGlvbiBhbmQgd2UgaGF2ZSBhIHJlc3BvbnNlXG5cdFx0XHRpZiAoIHJlc3BvbnNlQ29udGFpbmVyICYmIGlzRnVuY3Rpb24oIG92ZXJ3cml0dGVuICkgKSB7XG5cdFx0XHRcdG92ZXJ3cml0dGVuKCByZXNwb25zZUNvbnRhaW5lclsgMCBdICk7XG5cdFx0XHR9XG5cblx0XHRcdHJlc3BvbnNlQ29udGFpbmVyID0gb3ZlcndyaXR0ZW4gPSB1bmRlZmluZWQ7XG5cdFx0fSApO1xuXG5cdFx0Ly8gRGVsZWdhdGUgdG8gc2NyaXB0XG5cdFx0cmV0dXJuIFwic2NyaXB0XCI7XG5cdH1cbn0gKTtcblxuXG5cblxuLy8gU3VwcG9ydDogU2FmYXJpIDggb25seVxuLy8gSW4gU2FmYXJpIDggZG9jdW1lbnRzIGNyZWF0ZWQgdmlhIGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudFxuLy8gY29sbGFwc2Ugc2libGluZyBmb3JtczogdGhlIHNlY29uZCBvbmUgYmVjb21lcyBhIGNoaWxkIG9mIHRoZSBmaXJzdCBvbmUuXG4vLyBCZWNhdXNlIG9mIHRoYXQsIHRoaXMgc2VjdXJpdHkgbWVhc3VyZSBoYXMgdG8gYmUgZGlzYWJsZWQgaW4gU2FmYXJpIDguXG4vLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM3MzM3XG5zdXBwb3J0LmNyZWF0ZUhUTUxEb2N1bWVudCA9ICggZnVuY3Rpb24oKSB7XG5cdHZhciBib2R5ID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KCBcIlwiICkuYm9keTtcblx0Ym9keS5pbm5lckhUTUwgPSBcIjxmb3JtPjwvZm9ybT48Zm9ybT48L2Zvcm0+XCI7XG5cdHJldHVybiBib2R5LmNoaWxkTm9kZXMubGVuZ3RoID09PSAyO1xufSApKCk7XG5cblxuLy8gQXJndW1lbnQgXCJkYXRhXCIgc2hvdWxkIGJlIHN0cmluZyBvZiBodG1sXG4vLyBjb250ZXh0IChvcHRpb25hbCk6IElmIHNwZWNpZmllZCwgdGhlIGZyYWdtZW50IHdpbGwgYmUgY3JlYXRlZCBpbiB0aGlzIGNvbnRleHQsXG4vLyBkZWZhdWx0cyB0byBkb2N1bWVudFxuLy8ga2VlcFNjcmlwdHMgKG9wdGlvbmFsKTogSWYgdHJ1ZSwgd2lsbCBpbmNsdWRlIHNjcmlwdHMgcGFzc2VkIGluIHRoZSBodG1sIHN0cmluZ1xualF1ZXJ5LnBhcnNlSFRNTCA9IGZ1bmN0aW9uKCBkYXRhLCBjb250ZXh0LCBrZWVwU2NyaXB0cyApIHtcblx0aWYgKCB0eXBlb2YgZGF0YSAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblx0aWYgKCB0eXBlb2YgY29udGV4dCA9PT0gXCJib29sZWFuXCIgKSB7XG5cdFx0a2VlcFNjcmlwdHMgPSBjb250ZXh0O1xuXHRcdGNvbnRleHQgPSBmYWxzZTtcblx0fVxuXG5cdHZhciBiYXNlLCBwYXJzZWQsIHNjcmlwdHM7XG5cblx0aWYgKCAhY29udGV4dCApIHtcblxuXHRcdC8vIFN0b3Agc2NyaXB0cyBvciBpbmxpbmUgZXZlbnQgaGFuZGxlcnMgZnJvbSBiZWluZyBleGVjdXRlZCBpbW1lZGlhdGVseVxuXHRcdC8vIGJ5IHVzaW5nIGRvY3VtZW50LmltcGxlbWVudGF0aW9uXG5cdFx0aWYgKCBzdXBwb3J0LmNyZWF0ZUhUTUxEb2N1bWVudCApIHtcblx0XHRcdGNvbnRleHQgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoIFwiXCIgKTtcblxuXHRcdFx0Ly8gU2V0IHRoZSBiYXNlIGhyZWYgZm9yIHRoZSBjcmVhdGVkIGRvY3VtZW50XG5cdFx0XHQvLyBzbyBhbnkgcGFyc2VkIGVsZW1lbnRzIHdpdGggVVJMc1xuXHRcdFx0Ly8gYXJlIGJhc2VkIG9uIHRoZSBkb2N1bWVudCdzIFVSTCAoZ2gtMjk2NSlcblx0XHRcdGJhc2UgPSBjb250ZXh0LmNyZWF0ZUVsZW1lbnQoIFwiYmFzZVwiICk7XG5cdFx0XHRiYXNlLmhyZWYgPSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xuXHRcdFx0Y29udGV4dC5oZWFkLmFwcGVuZENoaWxkKCBiYXNlICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRleHQgPSBkb2N1bWVudDtcblx0XHR9XG5cdH1cblxuXHRwYXJzZWQgPSByc2luZ2xlVGFnLmV4ZWMoIGRhdGEgKTtcblx0c2NyaXB0cyA9ICFrZWVwU2NyaXB0cyAmJiBbXTtcblxuXHQvLyBTaW5nbGUgdGFnXG5cdGlmICggcGFyc2VkICkge1xuXHRcdHJldHVybiBbIGNvbnRleHQuY3JlYXRlRWxlbWVudCggcGFyc2VkWyAxIF0gKSBdO1xuXHR9XG5cblx0cGFyc2VkID0gYnVpbGRGcmFnbWVudCggWyBkYXRhIF0sIGNvbnRleHQsIHNjcmlwdHMgKTtcblxuXHRpZiAoIHNjcmlwdHMgJiYgc2NyaXB0cy5sZW5ndGggKSB7XG5cdFx0alF1ZXJ5KCBzY3JpcHRzICkucmVtb3ZlKCk7XG5cdH1cblxuXHRyZXR1cm4galF1ZXJ5Lm1lcmdlKCBbXSwgcGFyc2VkLmNoaWxkTm9kZXMgKTtcbn07XG5cblxuLyoqXG4gKiBMb2FkIGEgdXJsIGludG8gYSBwYWdlXG4gKi9cbmpRdWVyeS5mbi5sb2FkID0gZnVuY3Rpb24oIHVybCwgcGFyYW1zLCBjYWxsYmFjayApIHtcblx0dmFyIHNlbGVjdG9yLCB0eXBlLCByZXNwb25zZSxcblx0XHRzZWxmID0gdGhpcyxcblx0XHRvZmYgPSB1cmwuaW5kZXhPZiggXCIgXCIgKTtcblxuXHRpZiAoIG9mZiA+IC0xICkge1xuXHRcdHNlbGVjdG9yID0gc3RyaXBBbmRDb2xsYXBzZSggdXJsLnNsaWNlKCBvZmYgKSApO1xuXHRcdHVybCA9IHVybC5zbGljZSggMCwgb2ZmICk7XG5cdH1cblxuXHQvLyBJZiBpdCdzIGEgZnVuY3Rpb25cblx0aWYgKCBpc0Z1bmN0aW9uKCBwYXJhbXMgKSApIHtcblxuXHRcdC8vIFdlIGFzc3VtZSB0aGF0IGl0J3MgdGhlIGNhbGxiYWNrXG5cdFx0Y2FsbGJhY2sgPSBwYXJhbXM7XG5cdFx0cGFyYW1zID0gdW5kZWZpbmVkO1xuXG5cdC8vIE90aGVyd2lzZSwgYnVpbGQgYSBwYXJhbSBzdHJpbmdcblx0fSBlbHNlIGlmICggcGFyYW1zICYmIHR5cGVvZiBwYXJhbXMgPT09IFwib2JqZWN0XCIgKSB7XG5cdFx0dHlwZSA9IFwiUE9TVFwiO1xuXHR9XG5cblx0Ly8gSWYgd2UgaGF2ZSBlbGVtZW50cyB0byBtb2RpZnksIG1ha2UgdGhlIHJlcXVlc3Rcblx0aWYgKCBzZWxmLmxlbmd0aCA+IDAgKSB7XG5cdFx0alF1ZXJ5LmFqYXgoIHtcblx0XHRcdHVybDogdXJsLFxuXG5cdFx0XHQvLyBJZiBcInR5cGVcIiB2YXJpYWJsZSBpcyB1bmRlZmluZWQsIHRoZW4gXCJHRVRcIiBtZXRob2Qgd2lsbCBiZSB1c2VkLlxuXHRcdFx0Ly8gTWFrZSB2YWx1ZSBvZiB0aGlzIGZpZWxkIGV4cGxpY2l0IHNpbmNlXG5cdFx0XHQvLyB1c2VyIGNhbiBvdmVycmlkZSBpdCB0aHJvdWdoIGFqYXhTZXR1cCBtZXRob2Rcblx0XHRcdHR5cGU6IHR5cGUgfHwgXCJHRVRcIixcblx0XHRcdGRhdGFUeXBlOiBcImh0bWxcIixcblx0XHRcdGRhdGE6IHBhcmFtc1xuXHRcdH0gKS5kb25lKCBmdW5jdGlvbiggcmVzcG9uc2VUZXh0ICkge1xuXG5cdFx0XHQvLyBTYXZlIHJlc3BvbnNlIGZvciB1c2UgaW4gY29tcGxldGUgY2FsbGJhY2tcblx0XHRcdHJlc3BvbnNlID0gYXJndW1lbnRzO1xuXG5cdFx0XHRzZWxmLmh0bWwoIHNlbGVjdG9yID9cblxuXHRcdFx0XHQvLyBJZiBhIHNlbGVjdG9yIHdhcyBzcGVjaWZpZWQsIGxvY2F0ZSB0aGUgcmlnaHQgZWxlbWVudHMgaW4gYSBkdW1teSBkaXZcblx0XHRcdFx0Ly8gRXhjbHVkZSBzY3JpcHRzIHRvIGF2b2lkIElFICdQZXJtaXNzaW9uIERlbmllZCcgZXJyb3JzXG5cdFx0XHRcdGpRdWVyeSggXCI8ZGl2PlwiICkuYXBwZW5kKCBqUXVlcnkucGFyc2VIVE1MKCByZXNwb25zZVRleHQgKSApLmZpbmQoIHNlbGVjdG9yICkgOlxuXG5cdFx0XHRcdC8vIE90aGVyd2lzZSB1c2UgdGhlIGZ1bGwgcmVzdWx0XG5cdFx0XHRcdHJlc3BvbnNlVGV4dCApO1xuXG5cdFx0Ly8gSWYgdGhlIHJlcXVlc3Qgc3VjY2VlZHMsIHRoaXMgZnVuY3Rpb24gZ2V0cyBcImRhdGFcIiwgXCJzdGF0dXNcIiwgXCJqcVhIUlwiXG5cdFx0Ly8gYnV0IHRoZXkgYXJlIGlnbm9yZWQgYmVjYXVzZSByZXNwb25zZSB3YXMgc2V0IGFib3ZlLlxuXHRcdC8vIElmIGl0IGZhaWxzLCB0aGlzIGZ1bmN0aW9uIGdldHMgXCJqcVhIUlwiLCBcInN0YXR1c1wiLCBcImVycm9yXCJcblx0XHR9ICkuYWx3YXlzKCBjYWxsYmFjayAmJiBmdW5jdGlvbigganFYSFIsIHN0YXR1cyApIHtcblx0XHRcdHNlbGYuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNhbGxiYWNrLmFwcGx5KCB0aGlzLCByZXNwb25zZSB8fCBbIGpxWEhSLnJlc3BvbnNlVGV4dCwgc3RhdHVzLCBqcVhIUiBdICk7XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5cblxuXG5qUXVlcnkuZXhwci5wc2V1ZG9zLmFuaW1hdGVkID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdHJldHVybiBqUXVlcnkuZ3JlcCggalF1ZXJ5LnRpbWVycywgZnVuY3Rpb24oIGZuICkge1xuXHRcdHJldHVybiBlbGVtID09PSBmbi5lbGVtO1xuXHR9ICkubGVuZ3RoO1xufTtcblxuXG5cblxualF1ZXJ5Lm9mZnNldCA9IHtcblx0c2V0T2Zmc2V0OiBmdW5jdGlvbiggZWxlbSwgb3B0aW9ucywgaSApIHtcblx0XHR2YXIgY3VyUG9zaXRpb24sIGN1ckxlZnQsIGN1ckNTU1RvcCwgY3VyVG9wLCBjdXJPZmZzZXQsIGN1ckNTU0xlZnQsIGNhbGN1bGF0ZVBvc2l0aW9uLFxuXHRcdFx0cG9zaXRpb24gPSBqUXVlcnkuY3NzKCBlbGVtLCBcInBvc2l0aW9uXCIgKSxcblx0XHRcdGN1ckVsZW0gPSBqUXVlcnkoIGVsZW0gKSxcblx0XHRcdHByb3BzID0ge307XG5cblx0XHQvLyBTZXQgcG9zaXRpb24gZmlyc3QsIGluLWNhc2UgdG9wL2xlZnQgYXJlIHNldCBldmVuIG9uIHN0YXRpYyBlbGVtXG5cdFx0aWYgKCBwb3NpdGlvbiA9PT0gXCJzdGF0aWNcIiApIHtcblx0XHRcdGVsZW0uc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG5cdFx0fVxuXG5cdFx0Y3VyT2Zmc2V0ID0gY3VyRWxlbS5vZmZzZXQoKTtcblx0XHRjdXJDU1NUb3AgPSBqUXVlcnkuY3NzKCBlbGVtLCBcInRvcFwiICk7XG5cdFx0Y3VyQ1NTTGVmdCA9IGpRdWVyeS5jc3MoIGVsZW0sIFwibGVmdFwiICk7XG5cdFx0Y2FsY3VsYXRlUG9zaXRpb24gPSAoIHBvc2l0aW9uID09PSBcImFic29sdXRlXCIgfHwgcG9zaXRpb24gPT09IFwiZml4ZWRcIiApICYmXG5cdFx0XHQoIGN1ckNTU1RvcCArIGN1ckNTU0xlZnQgKS5pbmRleE9mKCBcImF1dG9cIiApID4gLTE7XG5cblx0XHQvLyBOZWVkIHRvIGJlIGFibGUgdG8gY2FsY3VsYXRlIHBvc2l0aW9uIGlmIGVpdGhlclxuXHRcdC8vIHRvcCBvciBsZWZ0IGlzIGF1dG8gYW5kIHBvc2l0aW9uIGlzIGVpdGhlciBhYnNvbHV0ZSBvciBmaXhlZFxuXHRcdGlmICggY2FsY3VsYXRlUG9zaXRpb24gKSB7XG5cdFx0XHRjdXJQb3NpdGlvbiA9IGN1ckVsZW0ucG9zaXRpb24oKTtcblx0XHRcdGN1clRvcCA9IGN1clBvc2l0aW9uLnRvcDtcblx0XHRcdGN1ckxlZnQgPSBjdXJQb3NpdGlvbi5sZWZ0O1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdGN1clRvcCA9IHBhcnNlRmxvYXQoIGN1ckNTU1RvcCApIHx8IDA7XG5cdFx0XHRjdXJMZWZ0ID0gcGFyc2VGbG9hdCggY3VyQ1NTTGVmdCApIHx8IDA7XG5cdFx0fVxuXG5cdFx0aWYgKCBpc0Z1bmN0aW9uKCBvcHRpb25zICkgKSB7XG5cblx0XHRcdC8vIFVzZSBqUXVlcnkuZXh0ZW5kIGhlcmUgdG8gYWxsb3cgbW9kaWZpY2F0aW9uIG9mIGNvb3JkaW5hdGVzIGFyZ3VtZW50IChnaC0xODQ4KVxuXHRcdFx0b3B0aW9ucyA9IG9wdGlvbnMuY2FsbCggZWxlbSwgaSwgalF1ZXJ5LmV4dGVuZCgge30sIGN1ck9mZnNldCApICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBvcHRpb25zLnRvcCAhPSBudWxsICkge1xuXHRcdFx0cHJvcHMudG9wID0gKCBvcHRpb25zLnRvcCAtIGN1ck9mZnNldC50b3AgKSArIGN1clRvcDtcblx0XHR9XG5cdFx0aWYgKCBvcHRpb25zLmxlZnQgIT0gbnVsbCApIHtcblx0XHRcdHByb3BzLmxlZnQgPSAoIG9wdGlvbnMubGVmdCAtIGN1ck9mZnNldC5sZWZ0ICkgKyBjdXJMZWZ0O1xuXHRcdH1cblxuXHRcdGlmICggXCJ1c2luZ1wiIGluIG9wdGlvbnMgKSB7XG5cdFx0XHRvcHRpb25zLnVzaW5nLmNhbGwoIGVsZW0sIHByb3BzICk7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y3VyRWxlbS5jc3MoIHByb3BzICk7XG5cdFx0fVxuXHR9XG59O1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cblx0Ly8gb2Zmc2V0KCkgcmVsYXRlcyBhbiBlbGVtZW50J3MgYm9yZGVyIGJveCB0byB0aGUgZG9jdW1lbnQgb3JpZ2luXG5cdG9mZnNldDogZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG5cblx0XHQvLyBQcmVzZXJ2ZSBjaGFpbmluZyBmb3Igc2V0dGVyXG5cdFx0aWYgKCBhcmd1bWVudHMubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIG9wdGlvbnMgPT09IHVuZGVmaW5lZCA/XG5cdFx0XHRcdHRoaXMgOlxuXHRcdFx0XHR0aGlzLmVhY2goIGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0XHRcdGpRdWVyeS5vZmZzZXQuc2V0T2Zmc2V0KCB0aGlzLCBvcHRpb25zLCBpICk7XG5cdFx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHR2YXIgcmVjdCwgd2luLFxuXHRcdFx0ZWxlbSA9IHRoaXNbIDAgXTtcblxuXHRcdGlmICggIWVsZW0gKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIHplcm9zIGZvciBkaXNjb25uZWN0ZWQgYW5kIGhpZGRlbiAoZGlzcGxheTogbm9uZSkgZWxlbWVudHMgKGdoLTIzMTApXG5cdFx0Ly8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG5cdFx0Ly8gUnVubmluZyBnZXRCb3VuZGluZ0NsaWVudFJlY3Qgb24gYVxuXHRcdC8vIGRpc2Nvbm5lY3RlZCBub2RlIGluIElFIHRocm93cyBhbiBlcnJvclxuXHRcdGlmICggIWVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm4geyB0b3A6IDAsIGxlZnQ6IDAgfTtcblx0XHR9XG5cblx0XHQvLyBHZXQgZG9jdW1lbnQtcmVsYXRpdmUgcG9zaXRpb24gYnkgYWRkaW5nIHZpZXdwb3J0IHNjcm9sbCB0byB2aWV3cG9ydC1yZWxhdGl2ZSBnQkNSXG5cdFx0cmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0d2luID0gZWxlbS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuXHRcdHJldHVybiB7XG5cdFx0XHR0b3A6IHJlY3QudG9wICsgd2luLnBhZ2VZT2Zmc2V0LFxuXHRcdFx0bGVmdDogcmVjdC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0XG5cdFx0fTtcblx0fSxcblxuXHQvLyBwb3NpdGlvbigpIHJlbGF0ZXMgYW4gZWxlbWVudCdzIG1hcmdpbiBib3ggdG8gaXRzIG9mZnNldCBwYXJlbnQncyBwYWRkaW5nIGJveFxuXHQvLyBUaGlzIGNvcnJlc3BvbmRzIHRvIHRoZSBiZWhhdmlvciBvZiBDU1MgYWJzb2x1dGUgcG9zaXRpb25pbmdcblx0cG9zaXRpb246IGZ1bmN0aW9uKCkge1xuXHRcdGlmICggIXRoaXNbIDAgXSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgb2Zmc2V0UGFyZW50LCBvZmZzZXQsIGRvYyxcblx0XHRcdGVsZW0gPSB0aGlzWyAwIF0sXG5cdFx0XHRwYXJlbnRPZmZzZXQgPSB7IHRvcDogMCwgbGVmdDogMCB9O1xuXG5cdFx0Ly8gcG9zaXRpb246Zml4ZWQgZWxlbWVudHMgYXJlIG9mZnNldCBmcm9tIHRoZSB2aWV3cG9ydCwgd2hpY2ggaXRzZWxmIGFsd2F5cyBoYXMgemVybyBvZmZzZXRcblx0XHRpZiAoIGpRdWVyeS5jc3MoIGVsZW0sIFwicG9zaXRpb25cIiApID09PSBcImZpeGVkXCIgKSB7XG5cblx0XHRcdC8vIEFzc3VtZSBwb3NpdGlvbjpmaXhlZCBpbXBsaWVzIGF2YWlsYWJpbGl0eSBvZiBnZXRCb3VuZGluZ0NsaWVudFJlY3Rcblx0XHRcdG9mZnNldCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0b2Zmc2V0ID0gdGhpcy5vZmZzZXQoKTtcblxuXHRcdFx0Ly8gQWNjb3VudCBmb3IgdGhlICpyZWFsKiBvZmZzZXQgcGFyZW50LCB3aGljaCBjYW4gYmUgdGhlIGRvY3VtZW50IG9yIGl0cyByb290IGVsZW1lbnRcblx0XHRcdC8vIHdoZW4gYSBzdGF0aWNhbGx5IHBvc2l0aW9uZWQgZWxlbWVudCBpcyBpZGVudGlmaWVkXG5cdFx0XHRkb2MgPSBlbGVtLm93bmVyRG9jdW1lbnQ7XG5cdFx0XHRvZmZzZXRQYXJlbnQgPSBlbGVtLm9mZnNldFBhcmVudCB8fCBkb2MuZG9jdW1lbnRFbGVtZW50O1xuXHRcdFx0d2hpbGUgKCBvZmZzZXRQYXJlbnQgJiZcblx0XHRcdFx0KCBvZmZzZXRQYXJlbnQgPT09IGRvYy5ib2R5IHx8IG9mZnNldFBhcmVudCA9PT0gZG9jLmRvY3VtZW50RWxlbWVudCApICYmXG5cdFx0XHRcdGpRdWVyeS5jc3MoIG9mZnNldFBhcmVudCwgXCJwb3NpdGlvblwiICkgPT09IFwic3RhdGljXCIgKSB7XG5cblx0XHRcdFx0b2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50LnBhcmVudE5vZGU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIG9mZnNldFBhcmVudCAmJiBvZmZzZXRQYXJlbnQgIT09IGVsZW0gJiYgb2Zmc2V0UGFyZW50Lm5vZGVUeXBlID09PSAxICkge1xuXG5cdFx0XHRcdC8vIEluY29ycG9yYXRlIGJvcmRlcnMgaW50byBpdHMgb2Zmc2V0LCBzaW5jZSB0aGV5IGFyZSBvdXRzaWRlIGl0cyBjb250ZW50IG9yaWdpblxuXHRcdFx0XHRwYXJlbnRPZmZzZXQgPSBqUXVlcnkoIG9mZnNldFBhcmVudCApLm9mZnNldCgpO1xuXHRcdFx0XHRwYXJlbnRPZmZzZXQudG9wICs9IGpRdWVyeS5jc3MoIG9mZnNldFBhcmVudCwgXCJib3JkZXJUb3BXaWR0aFwiLCB0cnVlICk7XG5cdFx0XHRcdHBhcmVudE9mZnNldC5sZWZ0ICs9IGpRdWVyeS5jc3MoIG9mZnNldFBhcmVudCwgXCJib3JkZXJMZWZ0V2lkdGhcIiwgdHJ1ZSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFN1YnRyYWN0IHBhcmVudCBvZmZzZXRzIGFuZCBlbGVtZW50IG1hcmdpbnNcblx0XHRyZXR1cm4ge1xuXHRcdFx0dG9wOiBvZmZzZXQudG9wIC0gcGFyZW50T2Zmc2V0LnRvcCAtIGpRdWVyeS5jc3MoIGVsZW0sIFwibWFyZ2luVG9wXCIsIHRydWUgKSxcblx0XHRcdGxlZnQ6IG9mZnNldC5sZWZ0IC0gcGFyZW50T2Zmc2V0LmxlZnQgLSBqUXVlcnkuY3NzKCBlbGVtLCBcIm1hcmdpbkxlZnRcIiwgdHJ1ZSApXG5cdFx0fTtcblx0fSxcblxuXHQvLyBUaGlzIG1ldGhvZCB3aWxsIHJldHVybiBkb2N1bWVudEVsZW1lbnQgaW4gdGhlIGZvbGxvd2luZyBjYXNlczpcblx0Ly8gMSkgRm9yIHRoZSBlbGVtZW50IGluc2lkZSB0aGUgaWZyYW1lIHdpdGhvdXQgb2Zmc2V0UGFyZW50LCB0aGlzIG1ldGhvZCB3aWxsIHJldHVyblxuXHQvLyAgICBkb2N1bWVudEVsZW1lbnQgb2YgdGhlIHBhcmVudCB3aW5kb3dcblx0Ly8gMikgRm9yIHRoZSBoaWRkZW4gb3IgZGV0YWNoZWQgZWxlbWVudFxuXHQvLyAzKSBGb3IgYm9keSBvciBodG1sIGVsZW1lbnQsIGkuZS4gaW4gY2FzZSBvZiB0aGUgaHRtbCBub2RlIC0gaXQgd2lsbCByZXR1cm4gaXRzZWxmXG5cdC8vXG5cdC8vIGJ1dCB0aG9zZSBleGNlcHRpb25zIHdlcmUgbmV2ZXIgcHJlc2VudGVkIGFzIGEgcmVhbCBsaWZlIHVzZS1jYXNlc1xuXHQvLyBhbmQgbWlnaHQgYmUgY29uc2lkZXJlZCBhcyBtb3JlIHByZWZlcmFibGUgcmVzdWx0cy5cblx0Ly9cblx0Ly8gVGhpcyBsb2dpYywgaG93ZXZlciwgaXMgbm90IGd1YXJhbnRlZWQgYW5kIGNhbiBjaGFuZ2UgYXQgYW55IHBvaW50IGluIHRoZSBmdXR1cmVcblx0b2Zmc2V0UGFyZW50OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG9mZnNldFBhcmVudCA9IHRoaXMub2Zmc2V0UGFyZW50O1xuXG5cdFx0XHR3aGlsZSAoIG9mZnNldFBhcmVudCAmJiBqUXVlcnkuY3NzKCBvZmZzZXRQYXJlbnQsIFwicG9zaXRpb25cIiApID09PSBcInN0YXRpY1wiICkge1xuXHRcdFx0XHRvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQub2Zmc2V0UGFyZW50O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGRvY3VtZW50RWxlbWVudDtcblx0XHR9ICk7XG5cdH1cbn0gKTtcblxuLy8gQ3JlYXRlIHNjcm9sbExlZnQgYW5kIHNjcm9sbFRvcCBtZXRob2RzXG5qUXVlcnkuZWFjaCggeyBzY3JvbGxMZWZ0OiBcInBhZ2VYT2Zmc2V0XCIsIHNjcm9sbFRvcDogXCJwYWdlWU9mZnNldFwiIH0sIGZ1bmN0aW9uKCBtZXRob2QsIHByb3AgKSB7XG5cdHZhciB0b3AgPSBcInBhZ2VZT2Zmc2V0XCIgPT09IHByb3A7XG5cblx0alF1ZXJ5LmZuWyBtZXRob2QgXSA9IGZ1bmN0aW9uKCB2YWwgKSB7XG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgZnVuY3Rpb24oIGVsZW0sIG1ldGhvZCwgdmFsICkge1xuXG5cdFx0XHQvLyBDb2FsZXNjZSBkb2N1bWVudHMgYW5kIHdpbmRvd3Ncblx0XHRcdHZhciB3aW47XG5cdFx0XHRpZiAoIGlzV2luZG93KCBlbGVtICkgKSB7XG5cdFx0XHRcdHdpbiA9IGVsZW07XG5cdFx0XHR9IGVsc2UgaWYgKCBlbGVtLm5vZGVUeXBlID09PSA5ICkge1xuXHRcdFx0XHR3aW4gPSBlbGVtLmRlZmF1bHRWaWV3O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHZhbCA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRyZXR1cm4gd2luID8gd2luWyBwcm9wIF0gOiBlbGVtWyBtZXRob2QgXTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCB3aW4gKSB7XG5cdFx0XHRcdHdpbi5zY3JvbGxUbyhcblx0XHRcdFx0XHQhdG9wID8gdmFsIDogd2luLnBhZ2VYT2Zmc2V0LFxuXHRcdFx0XHRcdHRvcCA/IHZhbCA6IHdpbi5wYWdlWU9mZnNldFxuXHRcdFx0XHQpO1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbGVtWyBtZXRob2QgXSA9IHZhbDtcblx0XHRcdH1cblx0XHR9LCBtZXRob2QsIHZhbCwgYXJndW1lbnRzLmxlbmd0aCApO1xuXHR9O1xufSApO1xuXG4vLyBTdXBwb3J0OiBTYWZhcmkgPD03IC0gOS4xLCBDaHJvbWUgPD0zNyAtIDQ5XG4vLyBBZGQgdGhlIHRvcC9sZWZ0IGNzc0hvb2tzIHVzaW5nIGpRdWVyeS5mbi5wb3NpdGlvblxuLy8gV2Via2l0IGJ1ZzogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI5MDg0XG4vLyBCbGluayBidWc6IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTU4OTM0N1xuLy8gZ2V0Q29tcHV0ZWRTdHlsZSByZXR1cm5zIHBlcmNlbnQgd2hlbiBzcGVjaWZpZWQgZm9yIHRvcC9sZWZ0L2JvdHRvbS9yaWdodDtcbi8vIHJhdGhlciB0aGFuIG1ha2UgdGhlIGNzcyBtb2R1bGUgZGVwZW5kIG9uIHRoZSBvZmZzZXQgbW9kdWxlLCBqdXN0IGNoZWNrIGZvciBpdCBoZXJlXG5qUXVlcnkuZWFjaCggWyBcInRvcFwiLCBcImxlZnRcIiBdLCBmdW5jdGlvbiggX2ksIHByb3AgKSB7XG5cdGpRdWVyeS5jc3NIb29rc1sgcHJvcCBdID0gYWRkR2V0SG9va0lmKCBzdXBwb3J0LnBpeGVsUG9zaXRpb24sXG5cdFx0ZnVuY3Rpb24oIGVsZW0sIGNvbXB1dGVkICkge1xuXHRcdFx0aWYgKCBjb21wdXRlZCApIHtcblx0XHRcdFx0Y29tcHV0ZWQgPSBjdXJDU1MoIGVsZW0sIHByb3AgKTtcblxuXHRcdFx0XHQvLyBJZiBjdXJDU1MgcmV0dXJucyBwZXJjZW50YWdlLCBmYWxsYmFjayB0byBvZmZzZXRcblx0XHRcdFx0cmV0dXJuIHJudW1ub25weC50ZXN0KCBjb21wdXRlZCApID9cblx0XHRcdFx0XHRqUXVlcnkoIGVsZW0gKS5wb3NpdGlvbigpWyBwcm9wIF0gKyBcInB4XCIgOlxuXHRcdFx0XHRcdGNvbXB1dGVkO1xuXHRcdFx0fVxuXHRcdH1cblx0KTtcbn0gKTtcblxuXG4vLyBDcmVhdGUgaW5uZXJIZWlnaHQsIGlubmVyV2lkdGgsIGhlaWdodCwgd2lkdGgsIG91dGVySGVpZ2h0IGFuZCBvdXRlcldpZHRoIG1ldGhvZHNcbmpRdWVyeS5lYWNoKCB7IEhlaWdodDogXCJoZWlnaHRcIiwgV2lkdGg6IFwid2lkdGhcIiB9LCBmdW5jdGlvbiggbmFtZSwgdHlwZSApIHtcblx0alF1ZXJ5LmVhY2goIHtcblx0XHRwYWRkaW5nOiBcImlubmVyXCIgKyBuYW1lLFxuXHRcdGNvbnRlbnQ6IHR5cGUsXG5cdFx0XCJcIjogXCJvdXRlclwiICsgbmFtZVxuXHR9LCBmdW5jdGlvbiggZGVmYXVsdEV4dHJhLCBmdW5jTmFtZSApIHtcblxuXHRcdC8vIE1hcmdpbiBpcyBvbmx5IGZvciBvdXRlckhlaWdodCwgb3V0ZXJXaWR0aFxuXHRcdGpRdWVyeS5mblsgZnVuY05hbWUgXSA9IGZ1bmN0aW9uKCBtYXJnaW4sIHZhbHVlICkge1xuXHRcdFx0dmFyIGNoYWluYWJsZSA9IGFyZ3VtZW50cy5sZW5ndGggJiYgKCBkZWZhdWx0RXh0cmEgfHwgdHlwZW9mIG1hcmdpbiAhPT0gXCJib29sZWFuXCIgKSxcblx0XHRcdFx0ZXh0cmEgPSBkZWZhdWx0RXh0cmEgfHwgKCBtYXJnaW4gPT09IHRydWUgfHwgdmFsdWUgPT09IHRydWUgPyBcIm1hcmdpblwiIDogXCJib3JkZXJcIiApO1xuXG5cdFx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBmdW5jdGlvbiggZWxlbSwgdHlwZSwgdmFsdWUgKSB7XG5cdFx0XHRcdHZhciBkb2M7XG5cblx0XHRcdFx0aWYgKCBpc1dpbmRvdyggZWxlbSApICkge1xuXG5cdFx0XHRcdFx0Ly8gJCggd2luZG93ICkub3V0ZXJXaWR0aC9IZWlnaHQgcmV0dXJuIHcvaCBpbmNsdWRpbmcgc2Nyb2xsYmFycyAoZ2gtMTcyOSlcblx0XHRcdFx0XHRyZXR1cm4gZnVuY05hbWUuaW5kZXhPZiggXCJvdXRlclwiICkgPT09IDAgP1xuXHRcdFx0XHRcdFx0ZWxlbVsgXCJpbm5lclwiICsgbmFtZSBdIDpcblx0XHRcdFx0XHRcdGVsZW0uZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50WyBcImNsaWVudFwiICsgbmFtZSBdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gR2V0IGRvY3VtZW50IHdpZHRoIG9yIGhlaWdodFxuXHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDkgKSB7XG5cdFx0XHRcdFx0ZG9jID0gZWxlbS5kb2N1bWVudEVsZW1lbnQ7XG5cblx0XHRcdFx0XHQvLyBFaXRoZXIgc2Nyb2xsW1dpZHRoL0hlaWdodF0gb3Igb2Zmc2V0W1dpZHRoL0hlaWdodF0gb3IgY2xpZW50W1dpZHRoL0hlaWdodF0sXG5cdFx0XHRcdFx0Ly8gd2hpY2hldmVyIGlzIGdyZWF0ZXN0XG5cdFx0XHRcdFx0cmV0dXJuIE1hdGgubWF4KFxuXHRcdFx0XHRcdFx0ZWxlbS5ib2R5WyBcInNjcm9sbFwiICsgbmFtZSBdLCBkb2NbIFwic2Nyb2xsXCIgKyBuYW1lIF0sXG5cdFx0XHRcdFx0XHRlbGVtLmJvZHlbIFwib2Zmc2V0XCIgKyBuYW1lIF0sIGRvY1sgXCJvZmZzZXRcIiArIG5hbWUgXSxcblx0XHRcdFx0XHRcdGRvY1sgXCJjbGllbnRcIiArIG5hbWUgXVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/XG5cblx0XHRcdFx0XHQvLyBHZXQgd2lkdGggb3IgaGVpZ2h0IG9uIHRoZSBlbGVtZW50LCByZXF1ZXN0aW5nIGJ1dCBub3QgZm9yY2luZyBwYXJzZUZsb2F0XG5cdFx0XHRcdFx0alF1ZXJ5LmNzcyggZWxlbSwgdHlwZSwgZXh0cmEgKSA6XG5cblx0XHRcdFx0XHQvLyBTZXQgd2lkdGggb3IgaGVpZ2h0IG9uIHRoZSBlbGVtZW50XG5cdFx0XHRcdFx0alF1ZXJ5LnN0eWxlKCBlbGVtLCB0eXBlLCB2YWx1ZSwgZXh0cmEgKTtcblx0XHRcdH0sIHR5cGUsIGNoYWluYWJsZSA/IG1hcmdpbiA6IHVuZGVmaW5lZCwgY2hhaW5hYmxlICk7XG5cdFx0fTtcblx0fSApO1xufSApO1xuXG5cbmpRdWVyeS5lYWNoKCBbXG5cdFwiYWpheFN0YXJ0XCIsXG5cdFwiYWpheFN0b3BcIixcblx0XCJhamF4Q29tcGxldGVcIixcblx0XCJhamF4RXJyb3JcIixcblx0XCJhamF4U3VjY2Vzc1wiLFxuXHRcImFqYXhTZW5kXCJcbl0sIGZ1bmN0aW9uKCBfaSwgdHlwZSApIHtcblx0alF1ZXJ5LmZuWyB0eXBlIF0gPSBmdW5jdGlvbiggZm4gKSB7XG5cdFx0cmV0dXJuIHRoaXMub24oIHR5cGUsIGZuICk7XG5cdH07XG59ICk7XG5cblxuXG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblxuXHRiaW5kOiBmdW5jdGlvbiggdHlwZXMsIGRhdGEsIGZuICkge1xuXHRcdHJldHVybiB0aGlzLm9uKCB0eXBlcywgbnVsbCwgZGF0YSwgZm4gKTtcblx0fSxcblx0dW5iaW5kOiBmdW5jdGlvbiggdHlwZXMsIGZuICkge1xuXHRcdHJldHVybiB0aGlzLm9mZiggdHlwZXMsIG51bGwsIGZuICk7XG5cdH0sXG5cblx0ZGVsZWdhdGU6IGZ1bmN0aW9uKCBzZWxlY3RvciwgdHlwZXMsIGRhdGEsIGZuICkge1xuXHRcdHJldHVybiB0aGlzLm9uKCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuICk7XG5cdH0sXG5cdHVuZGVsZWdhdGU6IGZ1bmN0aW9uKCBzZWxlY3RvciwgdHlwZXMsIGZuICkge1xuXG5cdFx0Ly8gKCBuYW1lc3BhY2UgKSBvciAoIHNlbGVjdG9yLCB0eXBlcyBbLCBmbl0gKVxuXHRcdHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID9cblx0XHRcdHRoaXMub2ZmKCBzZWxlY3RvciwgXCIqKlwiICkgOlxuXHRcdFx0dGhpcy5vZmYoIHR5cGVzLCBzZWxlY3RvciB8fCBcIioqXCIsIGZuICk7XG5cdH0sXG5cblx0aG92ZXI6IGZ1bmN0aW9uKCBmbk92ZXIsIGZuT3V0ICkge1xuXHRcdHJldHVybiB0aGlzLm1vdXNlZW50ZXIoIGZuT3ZlciApLm1vdXNlbGVhdmUoIGZuT3V0IHx8IGZuT3ZlciApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5lYWNoKFxuXHQoIFwiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IHJlc2l6ZSBzY3JvbGwgY2xpY2sgZGJsY2xpY2sgXCIgK1xuXHRcIm1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIFwiICtcblx0XCJjaGFuZ2Ugc2VsZWN0IHN1Ym1pdCBrZXlkb3duIGtleXByZXNzIGtleXVwIGNvbnRleHRtZW51XCIgKS5zcGxpdCggXCIgXCIgKSxcblx0ZnVuY3Rpb24oIF9pLCBuYW1lICkge1xuXG5cdFx0Ly8gSGFuZGxlIGV2ZW50IGJpbmRpbmdcblx0XHRqUXVlcnkuZm5bIG5hbWUgXSA9IGZ1bmN0aW9uKCBkYXRhLCBmbiApIHtcblx0XHRcdHJldHVybiBhcmd1bWVudHMubGVuZ3RoID4gMCA/XG5cdFx0XHRcdHRoaXMub24oIG5hbWUsIG51bGwsIGRhdGEsIGZuICkgOlxuXHRcdFx0XHR0aGlzLnRyaWdnZXIoIG5hbWUgKTtcblx0XHR9O1xuXHR9XG4pO1xuXG5cblxuXG4vLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHlcbi8vIE1ha2Ugc3VyZSB3ZSB0cmltIEJPTSBhbmQgTkJTUFxudmFyIHJ0cmltID0gL15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nO1xuXG4vLyBCaW5kIGEgZnVuY3Rpb24gdG8gYSBjb250ZXh0LCBvcHRpb25hbGx5IHBhcnRpYWxseSBhcHBseWluZyBhbnlcbi8vIGFyZ3VtZW50cy5cbi8vIGpRdWVyeS5wcm94eSBpcyBkZXByZWNhdGVkIHRvIHByb21vdGUgc3RhbmRhcmRzIChzcGVjaWZpY2FsbHkgRnVuY3Rpb24jYmluZClcbi8vIEhvd2V2ZXIsIGl0IGlzIG5vdCBzbGF0ZWQgZm9yIHJlbW92YWwgYW55IHRpbWUgc29vblxualF1ZXJ5LnByb3h5ID0gZnVuY3Rpb24oIGZuLCBjb250ZXh0ICkge1xuXHR2YXIgdG1wLCBhcmdzLCBwcm94eTtcblxuXHRpZiAoIHR5cGVvZiBjb250ZXh0ID09PSBcInN0cmluZ1wiICkge1xuXHRcdHRtcCA9IGZuWyBjb250ZXh0IF07XG5cdFx0Y29udGV4dCA9IGZuO1xuXHRcdGZuID0gdG1wO1xuXHR9XG5cblx0Ly8gUXVpY2sgY2hlY2sgdG8gZGV0ZXJtaW5lIGlmIHRhcmdldCBpcyBjYWxsYWJsZSwgaW4gdGhlIHNwZWNcblx0Ly8gdGhpcyB0aHJvd3MgYSBUeXBlRXJyb3IsIGJ1dCB3ZSB3aWxsIGp1c3QgcmV0dXJuIHVuZGVmaW5lZC5cblx0aWYgKCAhaXNGdW5jdGlvbiggZm4gKSApIHtcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHR9XG5cblx0Ly8gU2ltdWxhdGVkIGJpbmRcblx0YXJncyA9IHNsaWNlLmNhbGwoIGFyZ3VtZW50cywgMiApO1xuXHRwcm94eSA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBmbi5hcHBseSggY29udGV4dCB8fCB0aGlzLCBhcmdzLmNvbmNhdCggc2xpY2UuY2FsbCggYXJndW1lbnRzICkgKSApO1xuXHR9O1xuXG5cdC8vIFNldCB0aGUgZ3VpZCBvZiB1bmlxdWUgaGFuZGxlciB0byB0aGUgc2FtZSBvZiBvcmlnaW5hbCBoYW5kbGVyLCBzbyBpdCBjYW4gYmUgcmVtb3ZlZFxuXHRwcm94eS5ndWlkID0gZm4uZ3VpZCA9IGZuLmd1aWQgfHwgalF1ZXJ5Lmd1aWQrKztcblxuXHRyZXR1cm4gcHJveHk7XG59O1xuXG5qUXVlcnkuaG9sZFJlYWR5ID0gZnVuY3Rpb24oIGhvbGQgKSB7XG5cdGlmICggaG9sZCApIHtcblx0XHRqUXVlcnkucmVhZHlXYWl0Kys7XG5cdH0gZWxzZSB7XG5cdFx0alF1ZXJ5LnJlYWR5KCB0cnVlICk7XG5cdH1cbn07XG5qUXVlcnkuaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5qUXVlcnkucGFyc2VKU09OID0gSlNPTi5wYXJzZTtcbmpRdWVyeS5ub2RlTmFtZSA9IG5vZGVOYW1lO1xualF1ZXJ5LmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xualF1ZXJ5LmlzV2luZG93ID0gaXNXaW5kb3c7XG5qUXVlcnkuY2FtZWxDYXNlID0gY2FtZWxDYXNlO1xualF1ZXJ5LnR5cGUgPSB0b1R5cGU7XG5cbmpRdWVyeS5ub3cgPSBEYXRlLm5vdztcblxualF1ZXJ5LmlzTnVtZXJpYyA9IGZ1bmN0aW9uKCBvYmogKSB7XG5cblx0Ly8gQXMgb2YgalF1ZXJ5IDMuMCwgaXNOdW1lcmljIGlzIGxpbWl0ZWQgdG9cblx0Ly8gc3RyaW5ncyBhbmQgbnVtYmVycyAocHJpbWl0aXZlcyBvciBvYmplY3RzKVxuXHQvLyB0aGF0IGNhbiBiZSBjb2VyY2VkIHRvIGZpbml0ZSBudW1iZXJzIChnaC0yNjYyKVxuXHR2YXIgdHlwZSA9IGpRdWVyeS50eXBlKCBvYmogKTtcblx0cmV0dXJuICggdHlwZSA9PT0gXCJudW1iZXJcIiB8fCB0eXBlID09PSBcInN0cmluZ1wiICkgJiZcblxuXHRcdC8vIHBhcnNlRmxvYXQgTmFOcyBudW1lcmljLWNhc3QgZmFsc2UgcG9zaXRpdmVzIChcIlwiKVxuXHRcdC8vIC4uLmJ1dCBtaXNpbnRlcnByZXRzIGxlYWRpbmctbnVtYmVyIHN0cmluZ3MsIHBhcnRpY3VsYXJseSBoZXggbGl0ZXJhbHMgKFwiMHguLi5cIilcblx0XHQvLyBzdWJ0cmFjdGlvbiBmb3JjZXMgaW5maW5pdGllcyB0byBOYU5cblx0XHQhaXNOYU4oIG9iaiAtIHBhcnNlRmxvYXQoIG9iaiApICk7XG59O1xuXG5qUXVlcnkudHJpbSA9IGZ1bmN0aW9uKCB0ZXh0ICkge1xuXHRyZXR1cm4gdGV4dCA9PSBudWxsID9cblx0XHRcIlwiIDpcblx0XHQoIHRleHQgKyBcIlwiICkucmVwbGFjZSggcnRyaW0sIFwiXCIgKTtcbn07XG5cblxuXG4vLyBSZWdpc3RlciBhcyBhIG5hbWVkIEFNRCBtb2R1bGUsIHNpbmNlIGpRdWVyeSBjYW4gYmUgY29uY2F0ZW5hdGVkIHdpdGggb3RoZXJcbi8vIGZpbGVzIHRoYXQgbWF5IHVzZSBkZWZpbmUsIGJ1dCBub3QgdmlhIGEgcHJvcGVyIGNvbmNhdGVuYXRpb24gc2NyaXB0IHRoYXRcbi8vIHVuZGVyc3RhbmRzIGFub255bW91cyBBTUQgbW9kdWxlcy4gQSBuYW1lZCBBTUQgaXMgc2FmZXN0IGFuZCBtb3N0IHJvYnVzdFxuLy8gd2F5IHRvIHJlZ2lzdGVyLiBMb3dlcmNhc2UganF1ZXJ5IGlzIHVzZWQgYmVjYXVzZSBBTUQgbW9kdWxlIG5hbWVzIGFyZVxuLy8gZGVyaXZlZCBmcm9tIGZpbGUgbmFtZXMsIGFuZCBqUXVlcnkgaXMgbm9ybWFsbHkgZGVsaXZlcmVkIGluIGEgbG93ZXJjYXNlXG4vLyBmaWxlIG5hbWUuIERvIHRoaXMgYWZ0ZXIgY3JlYXRpbmcgdGhlIGdsb2JhbCBzbyB0aGF0IGlmIGFuIEFNRCBtb2R1bGUgd2FudHNcbi8vIHRvIGNhbGwgbm9Db25mbGljdCB0byBoaWRlIHRoaXMgdmVyc2lvbiBvZiBqUXVlcnksIGl0IHdpbGwgd29yay5cblxuLy8gTm90ZSB0aGF0IGZvciBtYXhpbXVtIHBvcnRhYmlsaXR5LCBsaWJyYXJpZXMgdGhhdCBhcmUgbm90IGpRdWVyeSBzaG91bGRcbi8vIGRlY2xhcmUgdGhlbXNlbHZlcyBhcyBhbm9ueW1vdXMgbW9kdWxlcywgYW5kIGF2b2lkIHNldHRpbmcgYSBnbG9iYWwgaWYgYW5cbi8vIEFNRCBsb2FkZXIgaXMgcHJlc2VudC4galF1ZXJ5IGlzIGEgc3BlY2lhbCBjYXNlLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlXG4vLyBodHRwczovL2dpdGh1Yi5jb20vanJidXJrZS9yZXF1aXJlanMvd2lraS9VcGRhdGluZy1leGlzdGluZy1saWJyYXJpZXMjd2lraS1hbm9uXG5cbmlmICggdHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQgKSB7XG5cdGRlZmluZSggXCJqcXVlcnlcIiwgW10sIGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBqUXVlcnk7XG5cdH0gKTtcbn1cblxuXG5cblxudmFyXG5cblx0Ly8gTWFwIG92ZXIgalF1ZXJ5IGluIGNhc2Ugb2Ygb3ZlcndyaXRlXG5cdF9qUXVlcnkgPSB3aW5kb3cualF1ZXJ5LFxuXG5cdC8vIE1hcCBvdmVyIHRoZSAkIGluIGNhc2Ugb2Ygb3ZlcndyaXRlXG5cdF8kID0gd2luZG93LiQ7XG5cbmpRdWVyeS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24oIGRlZXAgKSB7XG5cdGlmICggd2luZG93LiQgPT09IGpRdWVyeSApIHtcblx0XHR3aW5kb3cuJCA9IF8kO1xuXHR9XG5cblx0aWYgKCBkZWVwICYmIHdpbmRvdy5qUXVlcnkgPT09IGpRdWVyeSApIHtcblx0XHR3aW5kb3cualF1ZXJ5ID0gX2pRdWVyeTtcblx0fVxuXG5cdHJldHVybiBqUXVlcnk7XG59O1xuXG4vLyBFeHBvc2UgalF1ZXJ5IGFuZCAkIGlkZW50aWZpZXJzLCBldmVuIGluIEFNRFxuLy8gKCM3MTAyI2NvbW1lbnQ6MTAsIGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvanF1ZXJ5L3B1bGwvNTU3KVxuLy8gYW5kIENvbW1vbkpTIGZvciBicm93c2VyIGVtdWxhdG9ycyAoIzEzNTY2KVxuaWYgKCB0eXBlb2Ygbm9HbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgKSB7XG5cdHdpbmRvdy5qUXVlcnkgPSB3aW5kb3cuJCA9IGpRdWVyeTtcbn1cblxuXG5cblxucmV0dXJuIGpRdWVyeTtcbn0gKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==
