(() => {
  "use strict";
  var e,
    r = {
      566: (e, r, n) => {
        var t = n(379),
          o = n.n(t),
          a = n(578);
        o()(a.Z, { insert: "head", singleton: !1 }), a.Z.locals;
        const s = n(755);
        s("body").append("<header></header>"),
          s("header").append(
            '<div id="logo"></div>',
            "<h1>Holberton Dashboard</h1>"
          ),
          console.log("Init header");
      },
      578: (e, r, n) => {
        n.d(r, { Z: () => d });
        var t = n(15),
          o = n.n(t),
          a = n(645),
          s = n.n(a),
          i = n(667),
          c = n.n(i),
          p = n(568),
          l = s()(o()),
          u = c()(p.Z);
        l.push([
          e.id,
          "#logo {\n  width: 200px;\n  height: 200px;\n  background-image: url(" +
            u +
            ");\n  background-size: 200px 200px;\n}\n",
          "",
          {
            version: 3,
            sources: ["webpack://./modules/header/header.css"],
            names: [],
            mappings: "AAAA;EACE,YAAY;EACZ,aAAa;EACb,yDAAwD;EACxD,4BAA4B;AAC9B",
            sourcesContent: [
              '#logo {\n  width: 200px;\n  height: 200px;\n  background-image: url("../../assets/holberton-logo.jpg");\n  background-size: 200px 200px;\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const d = l;
      },
      667: (e) => {
        e.exports = function (e, r) {
          return (
            r || (r = {}),
            "string" != typeof (e = e && e.__esModule ? e.default : e)
              ? e
              : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                r.hash && (e += r.hash),
                /["'() \t\n]/.test(e) || r.needQuotes
                  ? '"'.concat(
                      e.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"'
                    )
                  : e)
          );
        };
      },
      568: (e, r, n) => {
        n.d(r, { Z: () => t });
        const t = n.p + "d88e2b6551683f9cfb05f9b8f83860a8.jpg";
      },
    },
    n = {};
  function t(e) {
    var o = n[e];
    if (void 0 !== o) return o.exports;
    var a = (n[e] = { id: e, exports: {} });
    return r[e].call(a.exports, a, a.exports, t), a.exports;
  }
  (t.m = r),
    (e = []),
    (t.O = (r, n, o, a) => {
      if (!n) {
        var s = 1 / 0;
        for (p = 0; p < e.length; p++) {
          for (var [n, o, a] = e[p], i = !0, c = 0; c < n.length; c++)
            (!1 & a || s >= a) && Object.keys(t.O).every((e) => t.O[e](n[c]))
              ? n.splice(c--, 1)
              : ((i = !1), a < s && (s = a));
          i && (e.splice(p--, 1), (r = o()));
        }
        return r;
      }
      a = a || 0;
      for (var p = e.length; p > 0 && e[p - 1][2] > a; p--) e[p] = e[p - 1];
      e[p] = [n, o, a];
    }),
    (t.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return t.d(r, { a: r }), r;
    }),
    (t.d = (e, r) => {
      for (var n in r)
        t.o(r, n) &&
          !t.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: r[n] });
    }),
    (t.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (() => {
      var e;
      t.g.importScripts && (e = t.g.location + "");
      var r = t.g.document;
      if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
        var n = r.getElementsByTagName("script");
        n.length && (e = n[n.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (t.p = e);
    })(),
    (() => {
      var e = { 19: 0 };
      t.O.j = (r) => 0 === e[r];
      var r = (r, n) => {
          var o,
            a,
            [s, i, c] = n,
            p = 0;
          for (o in i) t.o(i, o) && (t.m[o] = i[o]);
          if (c) var l = c(t);
          for (r && r(n); p < s.length; p++)
            (a = s[p]), t.o(e, a) && e[a] && e[a][0](), (e[s[p]] = 0);
          return t.O(l);
        },
        n = (self.webpackChunktask_3 = self.webpackChunktask_3 || []);
      n.forEach(r.bind(null, 0)), (n.push = r.bind(null, n.push.bind(n)));
    })();
  var o = t.O(void 0, [919], () => t(566));
  o = t.O(o);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrXzMvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly90YXNrXzMvLi9tb2R1bGVzL2hlYWRlci9oZWFkZXIuY3NzPzY1ZDUiLCJ3ZWJwYWNrOi8vdGFza18zLy4vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovL3Rhc2tfMy8uL21vZHVsZXMvaGVhZGVyL2hlYWRlci5jc3MiLCJ3ZWJwYWNrOi8vdGFza18zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90YXNrXzMvLi9hc3NldHMvaG9sYmVydG9uLWxvZ28uanBnIiwid2VicGFjazovL3Rhc2tfMy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90YXNrXzMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGFza18zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90YXNrXzMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90YXNrXzMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90YXNrXzMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdGFza18zL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Rhc2tfMy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiZGVmZXJyZWQiLCIkIiwiYXBwZW5kIiwiY29uc29sZSIsImxvZyIsIl9fX0NTU19MT0FERVJfRVhQT1JUX19fIiwiX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyIsInB1c2giLCJtb2R1bGUiLCJpZCIsImV4cG9ydHMiLCJ1cmwiLCJvcHRpb25zIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJ0ZXN0Iiwic2xpY2UiLCJoYXNoIiwibmVlZFF1b3RlcyIsImNvbmNhdCIsInJlcGxhY2UiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiY2FsbCIsIm0iLCJPIiwicmVzdWx0IiwiY2h1bmtJZHMiLCJmbiIsInByaW9yaXR5Iiwibm90RnVsZmlsbGVkIiwiSW5maW5pdHkiLCJpIiwibGVuZ3RoIiwiZnVsZmlsbGVkIiwiaiIsIk9iamVjdCIsImtleXMiLCJldmVyeSIsImtleSIsInNwbGljZSIsIm4iLCJnZXR0ZXIiLCJkIiwiYSIsImRlZmluaXRpb24iLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiZyIsImdsb2JhbFRoaXMiLCJ0aGlzIiwiRnVuY3Rpb24iLCJlIiwid2luZG93Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5Iiwic2NyaXB0VXJsIiwiaW1wb3J0U2NyaXB0cyIsImxvY2F0aW9uIiwiZG9jdW1lbnQiLCJjdXJyZW50U2NyaXB0Iiwic3JjIiwic2NyaXB0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiRXJyb3IiLCJwIiwiaW5zdGFsbGVkQ2h1bmtzIiwiMTkiLCJjaHVua0lkIiwid2VicGFja0pzb25wQ2FsbGJhY2siLCJwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiIsImRhdGEiLCJtb3JlTW9kdWxlcyIsInJ1bnRpbWUiLCJjaHVua0xvYWRpbmdHbG9iYWwiLCJzZWxmIiwiZm9yRWFjaCIsImJpbmQiLCJfX3dlYnBhY2tfZXhwb3J0c19fIl0sIm1hcHBpbmdzIjoidUJBQUlBLEUsZ0RDUVMsSUFBSSxJQUxILENBRWQsT0FBaUIsT0FDakIsV0FBb0IsSUFNTCxXQUFmLE1DWE1DLEVBQUksRUFBUSxLQUdsQkEsRUFBRSxRQUFRQyxPQUFPLHFCQUNqQkQs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LEVBQVNLLElBQU0sRUFFaEMsT0FBT2QsRUFBb0JPLEVBQUVDLElBRzFCb0QsRUFBcUJDLEtBQXlCLG1CQUFJQSxLQUF5QixvQkFBSyxHQUNwRkQsRUFBbUJFLFFBQVFQLEVBQXFCUSxLQUFLLEtBQU0sSUFDM0RILEVBQW1CM0UsS0FBT3NFLEVBQXFCUSxLQUFLLEtBQU1ILEVBQW1CM0UsS0FBSzhFLEtBQUtILEssR0MzQ3ZGLElBQUlJLEVBQXNCaEUsRUFBb0JPLE9BQUVKLEVBQVcsQ0FBQyxNQUFNLElBQU9ILEVBQW9CLE9BQzdGZ0UsRUFBc0JoRSxFQUFvQk8sRUFBRXlELEkiLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0cmVzdWx0ID0gZm4oKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCAkID0gcmVxdWlyZShcImpxdWVyeVwiKTtcbmltcG9ydCBcIi4vaGVhZGVyLmNzc1wiO1xuXG4kKFwiYm9keVwiKS5hcHBlbmQoXCI8aGVhZGVyPjwvaGVhZGVyPlwiKTtcbiQoXCJoZWFkZXJcIikuYXBwZW5kKCc8ZGl2IGlkPVwibG9nb1wiPjwvZGl2PicsIFwiPGgxPkhvbGJlcnRvbiBEYXNoYm9hcmQ8L2gxPlwiKTtcblxuY29uc29sZS5sb2coXCJJbml0IGhlYWRlclwiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vLi4vYXNzZXRzL2hvbGJlcnRvbi1sb2dvLmpwZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNsb2dvIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAyMDBweCAyMDBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IseURBQXdEO0VBQ3hELDRCQUE0QjtBQUM5QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjbG9nbyB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi8uLi9hc3NldHMvaG9sYmVydG9uLWxvZ28uanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDIwMHB4IDIwMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkODhlMmI2NTUxNjgzZjljZmIwNWY5YjhmODM4NjBhOC5qcGdcIjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0MTk6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rdGFza18zXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3Rhc2tfM1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgWzkxOV0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKDU2NikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
