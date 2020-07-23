"use strict";

!function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).PDFLib = {});
}(void 0, function (t) {
  "use strict";

  var _e2 = function e(t, n) {
    return (_e2 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    })(t, n);
  };

  function n(t, n) {
    function r() {
      this.constructor = t;
    }

    _e2(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  }

  var _r2 = function r() {
    return (_r2 = Object.assign || function (t) {
      for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);

      return t;
    }).apply(this, arguments);
  };

  function i(t, e, n, r) {
    return new (n || (n = Promise))(function (i, o) {
      function a(t) {
        try {
          u(r.next(t));
        } catch (t) {
          o(t);
        }
      }

      function s(t) {
        try {
          u(r.throw(t));
        } catch (t) {
          o(t);
        }
      }

      function u(t) {
        t.done ? i(t.value) : new n(function (e) {
          e(t.value);
        }).then(a, s);
      }

      u((r = r.apply(t, e || [])).next());
    });
  }

  function o(t, e) {
    var n,
        r,
        i,
        o,
        a = {
      label: 0,
      sent: function () {
        if (1 & i[0]) throw i[1];
        return i[1];
      },
      trys: [],
      ops: []
    };
    return o = {
      next: s(0),
      throw: s(1),
      return: s(2)
    }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
      return this;
    }), o;

    function s(o) {
      return function (s) {
        return function (o) {
          if (n) throw new TypeError("Generator is already executing.");

          for (; a;) try {
            if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;

            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
              case 0:
              case 1:
                i = o;
                break;

              case 4:
                return a.label++, {
                  value: o[1],
                  done: !1
                };

              case 5:
                a.label++, r = o[1], o = [0];
                continue;

              case 7:
                o = a.ops.pop(), a.trys.pop();
                continue;

              default:
                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                  a = 0;
                  continue;
                }

                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                  a.label = o[1];
                  break;
                }

                if (6 === o[0] && a.label < i[1]) {
                  a.label = i[1], i = o;
                  break;
                }

                if (i && a.label < i[2]) {
                  a.label = i[2], a.ops.push(o);
                  break;
                }

                i[2] && a.ops.pop(), a.trys.pop();
                continue;
            }

            o = e.call(t, a);
          } catch (t) {
            o = [6, t], r = 0;
          } finally {
            n = i = 0;
          }

          if (5 & o[0]) throw o[1];
          return {
            value: o[0] ? o[1] : void 0,
            done: !0
          };
        }([o, s]);
      };
    }
  }

  function a() {
    for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;

    var r = Array(t),
        i = 0;

    for (e = 0; e < n; e++) for (var o = arguments[e], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];

    return r;
  }

  for (var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", u = new Uint8Array(256), h = 0; h < s.length; h++) u[s.charCodeAt(h)] = h;

  var c = function c(t) {
    for (var e = "", n = t.length, r = 0; r < n; r += 3) e += s[t[r] >> 2], e += s[(3 & t[r]) << 4 | t[r + 1] >> 4], e += s[(15 & t[r + 1]) << 2 | t[r + 2] >> 6], e += s[63 & t[r + 2]];

    return n % 3 == 2 ? e = e.substring(0, e.length - 1) + "=" : n % 3 == 1 && (e = e.substring(0, e.length - 2) + "=="), e;
  },
      f = function f(t) {
    var e,
        n,
        r,
        i,
        o,
        a = .75 * t.length,
        s = t.length,
        h = 0;
    "=" === t[t.length - 1] && (a--, "=" === t[t.length - 2] && a--);
    var c = new Uint8Array(a);

    for (e = 0; e < s; e += 4) n = u[t.charCodeAt(e)], r = u[t.charCodeAt(e + 1)], i = u[t.charCodeAt(e + 2)], o = u[t.charCodeAt(e + 3)], c[h++] = n << 2 | r >> 4, c[h++] = (15 & r) << 4 | i >> 2, c[h++] = (3 & i) << 6 | 63 & o;

    return c;
  },
      l = /^(data)?:?([\w\/\+]+)?;?(charset=[\w-]+|base64)?.*,/i,
      d = function d(t) {
    var e = t.trim(),
        n = e.substring(0, 100).match(l);
    if (!n) return f(e);
    var r = n[0],
        i = e.substring(r.length);
    return f(i);
  },
      p = function p(t) {
    return t.charCodeAt(0);
  },
      y = function y(t) {
    return t.codePointAt(0);
  },
      g = function g(t, e) {
    return w(t.toString(16), e, "0").toUpperCase();
  },
      v = function v(t) {
    return g(t, 2);
  },
      m = function m(t) {
    return String.fromCharCode(t);
  },
      b = function b(t) {
    return m(parseInt(t, 16));
  },
      w = function w(t, e, n) {
    for (var r = "", i = 0, o = e - t.length; i < o; i++) r += n;

    return r + t;
  },
      x = function x(t, e, n) {
    for (var r = t.length, i = 0; i < r; i++) e[n++] = t.charCodeAt(i);

    return r;
  },
      S = function S(t, e) {
    return void 0 === e && (e = 4), t + "-" + Math.floor(Math.random() * Math.pow(10, e));
  },
      k = function k(t) {
    return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  },
      C = function C(t) {
    return t.replace(/\t/g, "    ").replace(/[\b\v]/g, "");
  },
      F = function F(t, e, n, r) {
    for (var i = function (t) {
      for (var e = ["$"], n = 0, r = t.length; n < r; n++) {
        var i = t[n];
        if (i.includes("\n") || i.includes("\r")) throw new TypeError("`wordBreak` must not include \\n or \\r");
        e.push("" === i ? "." : k(i));
      }

      var o = e.join("|");
      return new RegExp("(\\n|\\r)|((.*?)(" + o + "))", "gm");
    }(e), o = C(t).match(i), a = "", s = 0, u = [], h = function h() {
      "" !== a && u.push(a), a = "", s = 0;
    }, c = 0, f = o.length; c < f; c++) {
      var l = o[c];
      if ("\n" === l || "\r" === l) h();else {
        var d = r(l);
        s + d > n && h(), a += l, s += d;
      }
    }

    return h(), u;
  },
      P = function P(t) {
    return t[t.length - 1];
  },
      R = function R(t) {
    if (t instanceof Uint8Array) return t;

    for (var e = t.length, n = new Uint8Array(e), r = 0; r < e; r++) n[r] = t.charCodeAt(r);

    return n;
  },
      O = function O() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];

    for (var n = t.length, r = [], i = 0; i < n; i++) {
      var o = t[i];
      r[i] = o instanceof Uint8Array ? o : R(o);
    }

    var a = 0;

    for (i = 0; i < n; i++) a += t[i].length;

    for (var s = new Uint8Array(a), u = 0, h = 0; h < n; h++) for (var c = r[h], f = 0, l = c.length; f < l; f++) s[u++] = c[f];

    return s;
  },
      T = function T(t) {
    for (var e = 0, n = 0, r = t.length; n < r; n++) e += t[n].length;

    var i = new Uint8Array(e),
        o = 0;

    for (n = 0, r = t.length; n < r; n++) {
      var a = t[n];
      i.set(a, o), o += a.length;
    }

    return i;
  },
      j = function j(t) {
    for (var e = "", n = 0, r = t.length; n < r; n++) e += m(t[n]);

    return e;
  },
      z = function z(t, e) {
    return t.id - e.id;
  },
      N = function N(t, e) {
    for (var n = [], r = 0, i = t.length; r < i; r++) {
      var o = t[r],
          a = t[r - 1];
      0 !== r && e(o) === e(a) || n.push(o);
    }

    return n;
  },
      U = function U(t) {
    for (var e = t.length, n = 0, r = Math.floor(e / 2); n < r; n++) {
      var i = n,
          o = e - n - 1,
          a = t[n];
      t[i] = t[o], t[o] = a;
    }

    return t;
  },
      I = function I(t) {
    for (var e = 0, n = 0, r = t.length; n < r; n++) e += t[n];

    return e;
  },
      q = function q(t, e) {
    for (var n = new Array(e - t), r = t; r < e; r++) n[r] = r;

    return n;
  },
      V = function V(t, e) {
    for (var n = new Array(e.length), r = 0, i = e.length; r < i; r++) n[r] = t[e[r]];

    return n;
  },
      B = function B(t) {
    return t instanceof Uint8Array || t instanceof ArrayBuffer || "string" == typeof t;
  },
      D = function D(t) {
    if ("string" == typeof t) return d(t);
    if (t instanceof ArrayBuffer) return new Uint8Array(t);
    if (t instanceof Uint8Array) return t;
    throw new TypeError("`input` must be one of `string | ArrayBuffer | Uint8Array`");
  },
      M = function M() {
    return new Promise(function (t) {
      setTimeout(function () {
        return t();
      }, 0);
    });
  },
      E = function E(t, e) {
    void 0 === e && (e = !0);
    var n = [];
    e && n.push(65279);

    for (var r = 0, i = t.length; r < i;) {
      var o = t.codePointAt(r);
      if (o < 65536) n.push(o), r += 1;else {
        if (!(o < 1114112)) throw new Error("Invalid code point: 0x" + v(o));
        n.push(K(o), W(o)), r += 2;
      }
    }

    return new Uint16Array(n);
  },
      A = function A(t) {
    return t >= 0 && t <= 65535;
  },
      G = function G(t) {
    return t >= 65536 && t <= 1114111;
  },
      K = function K(t) {
    return Math.floor((t - 65536) / 1024) + 55296;
  },
      W = function W(t) {
    return (t - 65536) % 1024 + 56320;
  },
      X = function X(t) {
    var e,
        n = String(t);

    if (Math.abs(t) < 1) {
      if (e = parseInt(t.toString().split("e-")[1])) {
        var r = t < 0;
        r && (t *= -1), t *= Math.pow(10, e - 1), n = "0." + new Array(e).join("0") + t.toString().substring(2), r && (n = "-" + n);
      }
    } else (e = parseInt(t.toString().split("+")[1])) > 20 && (e -= 20, n = (t /= Math.pow(10, e)).toString() + new Array(e + 1).join("0"));

    return n;
  },
      H = function H(t) {
    return Math.ceil(t.toString(2).length / 8);
  },
      L = function L(t) {
    for (var e = new Uint8Array(H(t)), n = 1; n <= e.length; n++) e[n - 1] = t >> 8 * (e.length - n);

    return e;
  },
      Z = function Z(t) {
    throw new Error(t);
  };

  function Y(t, e) {
    return t(e = {
      exports: {}
    }, e.exports), e.exports;
  }

  var J = Y(function (t, e) {
    !function () {
      for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = new Uint8Array(256), r = 0; r < t.length; r++) n[t.charCodeAt(r)] = r;

      e.encode = function (e) {
        var n,
            r = new Uint8Array(e),
            i = r.length,
            o = "";

        for (n = 0; n < i; n += 3) o += t[r[n] >> 2], o += t[(3 & r[n]) << 4 | r[n + 1] >> 4], o += t[(15 & r[n + 1]) << 2 | r[n + 2] >> 6], o += t[63 & r[n + 2]];

        return i % 3 == 2 ? o = o.substring(0, o.length - 1) + "=" : i % 3 == 1 && (o = o.substring(0, o.length - 2) + "=="), o;
      }, e.decode = function (t) {
        var e,
            r,
            i,
            o,
            a,
            s = .75 * t.length,
            u = t.length,
            h = 0;
        "=" === t[t.length - 1] && (s--, "=" === t[t.length - 2] && s--);
        var c = new ArrayBuffer(s),
            f = new Uint8Array(c);

        for (e = 0; e < u; e += 4) r = n[t.charCodeAt(e)], i = n[t.charCodeAt(e + 1)], o = n[t.charCodeAt(e + 2)], a = n[t.charCodeAt(e + 3)], f[h++] = r << 2 | i >> 4, f[h++] = (15 & i) << 4 | o >> 2, f[h++] = (3 & o) << 6 | 63 & a;

        return c;
      };
    }();
  }),
      Q = (J.encode, J.decode),
      _ = Y(function (t, e) {
    var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;

    function r(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }

    e.assign = function (t) {
      for (var e = Array.prototype.slice.call(arguments, 1); e.length;) {
        var n = e.shift();

        if (n) {
          if ("object" != typeof n) throw new TypeError(n + "must be non-object");

          for (var i in n) r(n, i) && (t[i] = n[i]);
        }
      }

      return t;
    }, e.shrinkBuf = function (t, e) {
      return t.length === e ? t : t.subarray ? t.subarray(0, e) : (t.length = e, t);
    };
    var i = {
      arraySet: function (t, e, n, r, i) {
        if (e.subarray && t.subarray) t.set(e.subarray(n, n + r), i);else for (var o = 0; o < r; o++) t[i + o] = e[n + o];
      },
      flattenChunks: function (t) {
        var e, n, r, i, o, a;

        for (r = 0, e = 0, n = t.length; e < n; e++) r += t[e].length;

        for (a = new Uint8Array(r), i = 0, e = 0, n = t.length; e < n; e++) o = t[e], a.set(o, i), i += o.length;

        return a;
      }
    },
        o = {
      arraySet: function (t, e, n, r, i) {
        for (var o = 0; o < r; o++) t[i + o] = e[n + o];
      },
      flattenChunks: function (t) {
        return [].concat.apply([], t);
      }
    };
    e.setTyped = function (t) {
      t ? (e.Buf8 = Uint8Array, e.Buf16 = Uint16Array, e.Buf32 = Int32Array, e.assign(e, i)) : (e.Buf8 = Array, e.Buf16 = Array, e.Buf32 = Array, e.assign(e, o));
    }, e.setTyped(n);
  }),
      $ = (_.assign, _.shrinkBuf, _.setTyped, _.Buf8, _.Buf16, _.Buf32, 4),
      tt = 0,
      et = 1,
      nt = 2;

  function rt(t) {
    for (var e = t.length; --e >= 0;) t[e] = 0;
  }

  var it = 0,
      ot = 1,
      at = 2,
      st = 29,
      ut = 256,
      ht = ut + 1 + st,
      ct = 30,
      ft = 19,
      lt = 2 * ht + 1,
      dt = 15,
      pt = 16,
      yt = 7,
      gt = 256,
      vt = 16,
      mt = 17,
      bt = 18,
      wt = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
      xt = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
      St = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
      kt = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
      Ct = new Array(2 * (ht + 2));
  rt(Ct);
  var Ft = new Array(2 * ct);
  rt(Ft);
  var Pt = new Array(512);
  rt(Pt);
  var Rt = new Array(256);
  rt(Rt);
  var Ot = new Array(st);
  rt(Ot);
  var Tt,
      jt,
      zt,
      Nt = new Array(ct);

  function Ut(t, e, n, r, i) {
    this.static_tree = t, this.extra_bits = e, this.extra_base = n, this.elems = r, this.max_length = i, this.has_stree = t && t.length;
  }

  function It(t, e) {
    this.dyn_tree = t, this.max_code = 0, this.stat_desc = e;
  }

  function qt(t) {
    return t < 256 ? Pt[t] : Pt[256 + (t >>> 7)];
  }

  function Vt(t, e) {
    t.pending_buf[t.pending++] = 255 & e, t.pending_buf[t.pending++] = e >>> 8 & 255;
  }

  function Bt(t, e, n) {
    t.bi_valid > pt - n ? (t.bi_buf |= e << t.bi_valid & 65535, Vt(t, t.bi_buf), t.bi_buf = e >> pt - t.bi_valid, t.bi_valid += n - pt) : (t.bi_buf |= e << t.bi_valid & 65535, t.bi_valid += n);
  }

  function Dt(t, e, n) {
    Bt(t, n[2 * e], n[2 * e + 1]);
  }

  function Mt(t, e) {
    var n = 0;

    do {
      n |= 1 & t, t >>>= 1, n <<= 1;
    } while (--e > 0);

    return n >>> 1;
  }

  function Et(t, e, n) {
    var r,
        i,
        o = new Array(dt + 1),
        a = 0;

    for (r = 1; r <= dt; r++) o[r] = a = a + n[r - 1] << 1;

    for (i = 0; i <= e; i++) {
      var s = t[2 * i + 1];
      0 !== s && (t[2 * i] = Mt(o[s]++, s));
    }
  }

  function At(t) {
    var e;

    for (e = 0; e < ht; e++) t.dyn_ltree[2 * e] = 0;

    for (e = 0; e < ct; e++) t.dyn_dtree[2 * e] = 0;

    for (e = 0; e < ft; e++) t.bl_tree[2 * e] = 0;

    t.dyn_ltree[2 * gt] = 1, t.opt_len = t.static_len = 0, t.last_lit = t.matches = 0;
  }

  function Gt(t) {
    t.bi_valid > 8 ? Vt(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf), t.bi_buf = 0, t.bi_valid = 0;
  }

  function Kt(t, e, n, r) {
    var i = 2 * e,
        o = 2 * n;
    return t[i] < t[o] || t[i] === t[o] && r[e] <= r[n];
  }

  function Wt(t, e, n) {
    for (var r = t.heap[n], i = n << 1; i <= t.heap_len && (i < t.heap_len && Kt(e, t.heap[i + 1], t.heap[i], t.depth) && i++, !Kt(e, r, t.heap[i], t.depth));) t.heap[n] = t.heap[i], n = i, i <<= 1;

    t.heap[n] = r;
  }

  function Xt(t, e, n) {
    var r,
        i,
        o,
        a,
        s = 0;
    if (0 !== t.last_lit) do {
      r = t.pending_buf[t.d_buf + 2 * s] << 8 | t.pending_buf[t.d_buf + 2 * s + 1], i = t.pending_buf[t.l_buf + s], s++, 0 === r ? Dt(t, i, e) : (Dt(t, (o = Rt[i]) + ut + 1, e), 0 !== (a = wt[o]) && Bt(t, i -= Ot[o], a), Dt(t, o = qt(--r), n), 0 !== (a = xt[o]) && Bt(t, r -= Nt[o], a));
    } while (s < t.last_lit);
    Dt(t, gt, e);
  }

  function Ht(t, e) {
    var n,
        r,
        i,
        o = e.dyn_tree,
        a = e.stat_desc.static_tree,
        s = e.stat_desc.has_stree,
        u = e.stat_desc.elems,
        h = -1;

    for (t.heap_len = 0, t.heap_max = lt, n = 0; n < u; n++) 0 !== o[2 * n] ? (t.heap[++t.heap_len] = h = n, t.depth[n] = 0) : o[2 * n + 1] = 0;

    for (; t.heap_len < 2;) o[2 * (i = t.heap[++t.heap_len] = h < 2 ? ++h : 0)] = 1, t.depth[i] = 0, t.opt_len--, s && (t.static_len -= a[2 * i + 1]);

    for (e.max_code = h, n = t.heap_len >> 1; n >= 1; n--) Wt(t, o, n);

    i = u;

    do {
      n = t.heap[1], t.heap[1] = t.heap[t.heap_len--], Wt(t, o, 1), r = t.heap[1], t.heap[--t.heap_max] = n, t.heap[--t.heap_max] = r, o[2 * i] = o[2 * n] + o[2 * r], t.depth[i] = (t.depth[n] >= t.depth[r] ? t.depth[n] : t.depth[r]) + 1, o[2 * n + 1] = o[2 * r + 1] = i, t.heap[1] = i++, Wt(t, o, 1);
    } while (t.heap_len >= 2);

    t.heap[--t.heap_max] = t.heap[1], function (t, e) {
      var n,
          r,
          i,
          o,
          a,
          s,
          u = e.dyn_tree,
          h = e.max_code,
          c = e.stat_desc.static_tree,
          f = e.stat_desc.has_stree,
          l = e.stat_desc.extra_bits,
          d = e.stat_desc.extra_base,
          p = e.stat_desc.max_length,
          y = 0;

      for (o = 0; o <= dt; o++) t.bl_count[o] = 0;

      for (u[2 * t.heap[t.heap_max] + 1] = 0, n = t.heap_max + 1; n < lt; n++) (o = u[2 * u[2 * (r = t.heap[n]) + 1] + 1] + 1) > p && (o = p, y++), u[2 * r + 1] = o, r > h || (t.bl_count[o]++, a = 0, r >= d && (a = l[r - d]), s = u[2 * r], t.opt_len += s * (o + a), f && (t.static_len += s * (c[2 * r + 1] + a)));

      if (0 !== y) {
        do {
          for (o = p - 1; 0 === t.bl_count[o];) o--;

          t.bl_count[o]--, t.bl_count[o + 1] += 2, t.bl_count[p]--, y -= 2;
        } while (y > 0);

        for (o = p; 0 !== o; o--) for (r = t.bl_count[o]; 0 !== r;) (i = t.heap[--n]) > h || (u[2 * i + 1] !== o && (t.opt_len += (o - u[2 * i + 1]) * u[2 * i], u[2 * i + 1] = o), r--);
      }
    }(t, e), Et(o, h, t.bl_count);
  }

  function Lt(t, e, n) {
    var r,
        i,
        o = -1,
        a = e[1],
        s = 0,
        u = 7,
        h = 4;

    for (0 === a && (u = 138, h = 3), e[2 * (n + 1) + 1] = 65535, r = 0; r <= n; r++) i = a, a = e[2 * (r + 1) + 1], ++s < u && i === a || (s < h ? t.bl_tree[2 * i] += s : 0 !== i ? (i !== o && t.bl_tree[2 * i]++, t.bl_tree[2 * vt]++) : s <= 10 ? t.bl_tree[2 * mt]++ : t.bl_tree[2 * bt]++, s = 0, o = i, 0 === a ? (u = 138, h = 3) : i === a ? (u = 6, h = 3) : (u = 7, h = 4));
  }

  function Zt(t, e, n) {
    var r,
        i,
        o = -1,
        a = e[1],
        s = 0,
        u = 7,
        h = 4;

    for (0 === a && (u = 138, h = 3), r = 0; r <= n; r++) if (i = a, a = e[2 * (r + 1) + 1], !(++s < u && i === a)) {
      if (s < h) do {
        Dt(t, i, t.bl_tree);
      } while (0 != --s);else 0 !== i ? (i !== o && (Dt(t, i, t.bl_tree), s--), Dt(t, vt, t.bl_tree), Bt(t, s - 3, 2)) : s <= 10 ? (Dt(t, mt, t.bl_tree), Bt(t, s - 3, 3)) : (Dt(t, bt, t.bl_tree), Bt(t, s - 11, 7));
      s = 0, o = i, 0 === a ? (u = 138, h = 3) : i === a ? (u = 6, h = 3) : (u = 7, h = 4);
    }
  }

  rt(Nt);
  var Yt = !1;

  function Jt(t, e, n, r) {
    Bt(t, (it << 1) + (r ? 1 : 0), 3), function (t, e, n, r) {
      Gt(t), r && (Vt(t, n), Vt(t, ~n)), _.arraySet(t.pending_buf, t.window, e, n, t.pending), t.pending += n;
    }(t, e, n, !0);
  }

  var Qt = {
    _tr_init: function (t) {
      Yt || (!function () {
        var t,
            e,
            n,
            r,
            i,
            o = new Array(dt + 1);

        for (n = 0, r = 0; r < st - 1; r++) for (Ot[r] = n, t = 0; t < 1 << wt[r]; t++) Rt[n++] = r;

        for (Rt[n - 1] = r, i = 0, r = 0; r < 16; r++) for (Nt[r] = i, t = 0; t < 1 << xt[r]; t++) Pt[i++] = r;

        for (i >>= 7; r < ct; r++) for (Nt[r] = i << 7, t = 0; t < 1 << xt[r] - 7; t++) Pt[256 + i++] = r;

        for (e = 0; e <= dt; e++) o[e] = 0;

        for (t = 0; t <= 143;) Ct[2 * t + 1] = 8, t++, o[8]++;

        for (; t <= 255;) Ct[2 * t + 1] = 9, t++, o[9]++;

        for (; t <= 279;) Ct[2 * t + 1] = 7, t++, o[7]++;

        for (; t <= 287;) Ct[2 * t + 1] = 8, t++, o[8]++;

        for (Et(Ct, ht + 1, o), t = 0; t < ct; t++) Ft[2 * t + 1] = 5, Ft[2 * t] = Mt(t, 5);

        Tt = new Ut(Ct, wt, ut + 1, ht, dt), jt = new Ut(Ft, xt, 0, ct, dt), zt = new Ut(new Array(0), St, 0, ft, yt);
      }(), Yt = !0), t.l_desc = new It(t.dyn_ltree, Tt), t.d_desc = new It(t.dyn_dtree, jt), t.bl_desc = new It(t.bl_tree, zt), t.bi_buf = 0, t.bi_valid = 0, At(t);
    },
    _tr_stored_block: Jt,
    _tr_flush_block: function (t, e, n, r) {
      var i,
          o,
          a = 0;
      t.level > 0 ? (t.strm.data_type === nt && (t.strm.data_type = function (t) {
        var e,
            n = 4093624447;

        for (e = 0; e <= 31; e++, n >>>= 1) if (1 & n && 0 !== t.dyn_ltree[2 * e]) return tt;

        if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26]) return et;

        for (e = 32; e < ut; e++) if (0 !== t.dyn_ltree[2 * e]) return et;

        return tt;
      }(t)), Ht(t, t.l_desc), Ht(t, t.d_desc), a = function (t) {
        var e;

        for (Lt(t, t.dyn_ltree, t.l_desc.max_code), Lt(t, t.dyn_dtree, t.d_desc.max_code), Ht(t, t.bl_desc), e = ft - 1; e >= 3 && 0 === t.bl_tree[2 * kt[e] + 1]; e--);

        return t.opt_len += 3 * (e + 1) + 5 + 5 + 4, e;
      }(t), i = t.opt_len + 3 + 7 >>> 3, (o = t.static_len + 3 + 7 >>> 3) <= i && (i = o)) : i = o = n + 5, n + 4 <= i && -1 !== e ? Jt(t, e, n, r) : t.strategy === $ || o === i ? (Bt(t, (ot << 1) + (r ? 1 : 0), 3), Xt(t, Ct, Ft)) : (Bt(t, (at << 1) + (r ? 1 : 0), 3), function (t, e, n, r) {
        var i;

        for (Bt(t, e - 257, 5), Bt(t, n - 1, 5), Bt(t, r - 4, 4), i = 0; i < r; i++) Bt(t, t.bl_tree[2 * kt[i] + 1], 3);

        Zt(t, t.dyn_ltree, e - 1), Zt(t, t.dyn_dtree, n - 1);
      }(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, a + 1), Xt(t, t.dyn_ltree, t.dyn_dtree)), At(t), r && Gt(t);
    },
    _tr_tally: function (t, e, n) {
      return t.pending_buf[t.d_buf + 2 * t.last_lit] = e >>> 8 & 255, t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e, t.pending_buf[t.l_buf + t.last_lit] = 255 & n, t.last_lit++, 0 === e ? t.dyn_ltree[2 * n]++ : (t.matches++, e--, t.dyn_ltree[2 * (Rt[n] + ut + 1)]++, t.dyn_dtree[2 * qt(e)]++), t.last_lit === t.lit_bufsize - 1;
    },
    _tr_align: function (t) {
      Bt(t, ot << 1, 3), Dt(t, gt, Ct), function (t) {
        16 === t.bi_valid ? (Vt(t, t.bi_buf), t.bi_buf = 0, t.bi_valid = 0) : t.bi_valid >= 8 && (t.pending_buf[t.pending++] = 255 & t.bi_buf, t.bi_buf >>= 8, t.bi_valid -= 8);
      }(t);
    }
  };

  var _t = function _t(t, e, n, r) {
    for (var i = 65535 & t | 0, o = t >>> 16 & 65535 | 0, a = 0; 0 !== n;) {
      n -= a = n > 2e3 ? 2e3 : n;

      do {
        o = o + (i = i + e[r++] | 0) | 0;
      } while (--a);

      i %= 65521, o %= 65521;
    }

    return i | o << 16 | 0;
  };

  var $t = function () {
    for (var t, e = [], n = 0; n < 256; n++) {
      t = n;

      for (var r = 0; r < 8; r++) t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;

      e[n] = t;
    }

    return e;
  }();

  var te,
      ee = function ee(t, e, n, r) {
    var i = $t,
        o = r + n;
    t ^= -1;

    for (var a = r; a < o; a++) t = t >>> 8 ^ i[255 & (t ^ e[a])];

    return -1 ^ t;
  },
      ne = {
    2: "need dictionary",
    1: "stream end",
    0: "",
    "-1": "file error",
    "-2": "stream error",
    "-3": "data error",
    "-4": "insufficient memory",
    "-5": "buffer error",
    "-6": "incompatible version"
  },
      re = 0,
      ie = 1,
      oe = 3,
      ae = 4,
      se = 5,
      ue = 0,
      he = 1,
      ce = -2,
      fe = -3,
      le = -5,
      de = -1,
      pe = 1,
      ye = 2,
      ge = 3,
      ve = 4,
      me = 0,
      be = 2,
      we = 8,
      xe = 9,
      Se = 15,
      ke = 8,
      Ce = 286,
      Fe = 30,
      Pe = 19,
      Re = 2 * Ce + 1,
      Oe = 15,
      Te = 3,
      je = 258,
      ze = je + Te + 1,
      Ne = 32,
      Ue = 42,
      Ie = 69,
      qe = 73,
      Ve = 91,
      Be = 103,
      De = 113,
      Me = 666,
      Ee = 1,
      Ae = 2,
      Ge = 3,
      Ke = 4,
      We = 3;

  function Xe(t, e) {
    return t.msg = ne[e], e;
  }

  function He(t) {
    return (t << 1) - (t > 4 ? 9 : 0);
  }

  function Le(t) {
    for (var e = t.length; --e >= 0;) t[e] = 0;
  }

  function Ze(t) {
    var e = t.state,
        n = e.pending;
    n > t.avail_out && (n = t.avail_out), 0 !== n && (_.arraySet(t.output, e.pending_buf, e.pending_out, n, t.next_out), t.next_out += n, e.pending_out += n, t.total_out += n, t.avail_out -= n, e.pending -= n, 0 === e.pending && (e.pending_out = 0));
  }

  function Ye(t, e) {
    Qt._tr_flush_block(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e), t.block_start = t.strstart, Ze(t.strm);
  }

  function Je(t, e) {
    t.pending_buf[t.pending++] = e;
  }

  function Qe(t, e) {
    t.pending_buf[t.pending++] = e >>> 8 & 255, t.pending_buf[t.pending++] = 255 & e;
  }

  function _e(t, e, n, r) {
    var i = t.avail_in;
    return i > r && (i = r), 0 === i ? 0 : (t.avail_in -= i, _.arraySet(e, t.input, t.next_in, i, n), 1 === t.state.wrap ? t.adler = _t(t.adler, e, i, n) : 2 === t.state.wrap && (t.adler = ee(t.adler, e, i, n)), t.next_in += i, t.total_in += i, i);
  }

  function $e(t, e) {
    var n,
        r,
        i = t.max_chain_length,
        o = t.strstart,
        a = t.prev_length,
        s = t.nice_match,
        u = t.strstart > t.w_size - ze ? t.strstart - (t.w_size - ze) : 0,
        h = t.window,
        c = t.w_mask,
        f = t.prev,
        l = t.strstart + je,
        d = h[o + a - 1],
        p = h[o + a];
    t.prev_length >= t.good_match && (i >>= 2), s > t.lookahead && (s = t.lookahead);

    do {
      if (h[(n = e) + a] === p && h[n + a - 1] === d && h[n] === h[o] && h[++n] === h[o + 1]) {
        o += 2, n++;

        do {} while (h[++o] === h[++n] && h[++o] === h[++n] && h[++o] === h[++n] && h[++o] === h[++n] && h[++o] === h[++n] && h[++o] === h[++n] && h[++o] === h[++n] && h[++o] === h[++n] && o < l);

        if (r = je - (l - o), o = l - je, r > a) {
          if (t.match_start = e, a = r, r >= s) break;
          d = h[o + a - 1], p = h[o + a];
        }
      }
    } while ((e = f[e & c]) > u && 0 != --i);

    return a <= t.lookahead ? a : t.lookahead;
  }

  function tn(t) {
    var e,
        n,
        r,
        i,
        o,
        a = t.w_size;

    do {
      if (i = t.window_size - t.lookahead - t.strstart, t.strstart >= a + (a - ze)) {
        _.arraySet(t.window, t.window, a, a, 0), t.match_start -= a, t.strstart -= a, t.block_start -= a, e = n = t.hash_size;

        do {
          r = t.head[--e], t.head[e] = r >= a ? r - a : 0;
        } while (--n);

        e = n = a;

        do {
          r = t.prev[--e], t.prev[e] = r >= a ? r - a : 0;
        } while (--n);

        i += a;
      }

      if (0 === t.strm.avail_in) break;
      if (n = _e(t.strm, t.window, t.strstart + t.lookahead, i), t.lookahead += n, t.lookahead + t.insert >= Te) for (o = t.strstart - t.insert, t.ins_h = t.window[o], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[o + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[o + Te - 1]) & t.hash_mask, t.prev[o & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = o, o++, t.insert--, !(t.lookahead + t.insert < Te)););
    } while (t.lookahead < ze && 0 !== t.strm.avail_in);
  }

  function en(t, e) {
    for (var n, r;;) {
      if (t.lookahead < ze) {
        if (tn(t), t.lookahead < ze && e === re) return Ee;
        if (0 === t.lookahead) break;
      }

      if (n = 0, t.lookahead >= Te && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + Te - 1]) & t.hash_mask, n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), 0 !== n && t.strstart - n <= t.w_size - ze && (t.match_length = $e(t, n)), t.match_length >= Te) {
        if (r = Qt._tr_tally(t, t.strstart - t.match_start, t.match_length - Te), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= Te) {
          t.match_length--;

          do {
            t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + Te - 1]) & t.hash_mask, n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart;
          } while (0 != --t.match_length);

          t.strstart++;
        } else t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
      } else r = Qt._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
      if (r && (Ye(t, !1), 0 === t.strm.avail_out)) return Ee;
    }

    return t.insert = t.strstart < Te - 1 ? t.strstart : Te - 1, e === ae ? (Ye(t, !0), 0 === t.strm.avail_out ? Ge : Ke) : t.last_lit && (Ye(t, !1), 0 === t.strm.avail_out) ? Ee : Ae;
  }

  function nn(t, e) {
    for (var n, r, i;;) {
      if (t.lookahead < ze) {
        if (tn(t), t.lookahead < ze && e === re) return Ee;
        if (0 === t.lookahead) break;
      }

      if (n = 0, t.lookahead >= Te && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + Te - 1]) & t.hash_mask, n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = Te - 1, 0 !== n && t.prev_length < t.max_lazy_match && t.strstart - n <= t.w_size - ze && (t.match_length = $e(t, n), t.match_length <= 5 && (t.strategy === pe || t.match_length === Te && t.strstart - t.match_start > 4096) && (t.match_length = Te - 1)), t.prev_length >= Te && t.match_length <= t.prev_length) {
        i = t.strstart + t.lookahead - Te, r = Qt._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - Te), t.lookahead -= t.prev_length - 1, t.prev_length -= 2;

        do {
          ++t.strstart <= i && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + Te - 1]) & t.hash_mask, n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart);
        } while (0 != --t.prev_length);

        if (t.match_available = 0, t.match_length = Te - 1, t.strstart++, r && (Ye(t, !1), 0 === t.strm.avail_out)) return Ee;
      } else if (t.match_available) {
        if ((r = Qt._tr_tally(t, 0, t.window[t.strstart - 1])) && Ye(t, !1), t.strstart++, t.lookahead--, 0 === t.strm.avail_out) return Ee;
      } else t.match_available = 1, t.strstart++, t.lookahead--;
    }

    return t.match_available && (r = Qt._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < Te - 1 ? t.strstart : Te - 1, e === ae ? (Ye(t, !0), 0 === t.strm.avail_out ? Ge : Ke) : t.last_lit && (Ye(t, !1), 0 === t.strm.avail_out) ? Ee : Ae;
  }

  function rn(t, e, n, r, i) {
    this.good_length = t, this.max_lazy = e, this.nice_length = n, this.max_chain = r, this.func = i;
  }

  function on() {
    this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = we, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new _.Buf16(2 * Re), this.dyn_dtree = new _.Buf16(2 * (2 * Fe + 1)), this.bl_tree = new _.Buf16(2 * (2 * Pe + 1)), Le(this.dyn_ltree), Le(this.dyn_dtree), Le(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new _.Buf16(Oe + 1), this.heap = new _.Buf16(2 * Ce + 1), Le(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new _.Buf16(2 * Ce + 1), Le(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
  }

  function an(t) {
    var e;
    return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = be, (e = t.state).pending = 0, e.pending_out = 0, e.wrap < 0 && (e.wrap = -e.wrap), e.status = e.wrap ? Ue : De, t.adler = 2 === e.wrap ? 0 : 1, e.last_flush = re, Qt._tr_init(e), ue) : Xe(t, ce);
  }

  function sn(t) {
    var e,
        n = an(t);
    return n === ue && ((e = t.state).window_size = 2 * e.w_size, Le(e.head), e.max_lazy_match = te[e.level].max_lazy, e.good_match = te[e.level].good_length, e.nice_match = te[e.level].nice_length, e.max_chain_length = te[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = Te - 1, e.match_available = 0, e.ins_h = 0), n;
  }

  function un(t, e, n, r, i, o) {
    if (!t) return ce;
    var a = 1;
    if (e === de && (e = 6), r < 0 ? (a = 0, r = -r) : r > 15 && (a = 2, r -= 16), i < 1 || i > xe || n !== we || r < 8 || r > 15 || e < 0 || e > 9 || o < 0 || o > ve) return Xe(t, ce);
    8 === r && (r = 9);
    var s = new on();
    return t.state = s, s.strm = t, s.wrap = a, s.gzhead = null, s.w_bits = r, s.w_size = 1 << s.w_bits, s.w_mask = s.w_size - 1, s.hash_bits = i + 7, s.hash_size = 1 << s.hash_bits, s.hash_mask = s.hash_size - 1, s.hash_shift = ~~((s.hash_bits + Te - 1) / Te), s.window = new _.Buf8(2 * s.w_size), s.head = new _.Buf16(s.hash_size), s.prev = new _.Buf16(s.w_size), s.lit_bufsize = 1 << i + 6, s.pending_buf_size = 4 * s.lit_bufsize, s.pending_buf = new _.Buf8(s.pending_buf_size), s.d_buf = 1 * s.lit_bufsize, s.l_buf = 3 * s.lit_bufsize, s.level = e, s.strategy = o, s.method = n, sn(t);
  }

  te = [new rn(0, 0, 0, 0, function (t, e) {
    var n = 65535;

    for (n > t.pending_buf_size - 5 && (n = t.pending_buf_size - 5);;) {
      if (t.lookahead <= 1) {
        if (tn(t), 0 === t.lookahead && e === re) return Ee;
        if (0 === t.lookahead) break;
      }

      t.strstart += t.lookahead, t.lookahead = 0;
      var r = t.block_start + n;
      if ((0 === t.strstart || t.strstart >= r) && (t.lookahead = t.strstart - r, t.strstart = r, Ye(t, !1), 0 === t.strm.avail_out)) return Ee;
      if (t.strstart - t.block_start >= t.w_size - ze && (Ye(t, !1), 0 === t.strm.avail_out)) return Ee;
    }

    return t.insert = 0, e === ae ? (Ye(t, !0), 0 === t.strm.avail_out ? Ge : Ke) : (t.strstart > t.block_start && (Ye(t, !1), t.strm.avail_out), Ee);
  }), new rn(4, 4, 8, 4, en), new rn(4, 5, 16, 8, en), new rn(4, 6, 32, 32, en), new rn(4, 4, 16, 16, nn), new rn(8, 16, 32, 32, nn), new rn(8, 16, 128, 128, nn), new rn(8, 32, 128, 256, nn), new rn(32, 128, 258, 1024, nn), new rn(32, 258, 258, 4096, nn)];
  var hn = {
    deflateInit: function (t, e) {
      return un(t, e, we, Se, ke, me);
    },
    deflateInit2: un,
    deflateReset: sn,
    deflateResetKeep: an,
    deflateSetHeader: function (t, e) {
      return t && t.state ? 2 !== t.state.wrap ? ce : (t.state.gzhead = e, ue) : ce;
    },
    deflate: function (t, e) {
      var n, r, i, o;
      if (!t || !t.state || e > se || e < 0) return t ? Xe(t, ce) : ce;
      if (r = t.state, !t.output || !t.input && 0 !== t.avail_in || r.status === Me && e !== ae) return Xe(t, 0 === t.avail_out ? le : ce);
      if (r.strm = t, n = r.last_flush, r.last_flush = e, r.status === Ue) if (2 === r.wrap) t.adler = 0, Je(r, 31), Je(r, 139), Je(r, 8), r.gzhead ? (Je(r, (r.gzhead.text ? 1 : 0) + (r.gzhead.hcrc ? 2 : 0) + (r.gzhead.extra ? 4 : 0) + (r.gzhead.name ? 8 : 0) + (r.gzhead.comment ? 16 : 0)), Je(r, 255 & r.gzhead.time), Je(r, r.gzhead.time >> 8 & 255), Je(r, r.gzhead.time >> 16 & 255), Je(r, r.gzhead.time >> 24 & 255), Je(r, 9 === r.level ? 2 : r.strategy >= ye || r.level < 2 ? 4 : 0), Je(r, 255 & r.gzhead.os), r.gzhead.extra && r.gzhead.extra.length && (Je(r, 255 & r.gzhead.extra.length), Je(r, r.gzhead.extra.length >> 8 & 255)), r.gzhead.hcrc && (t.adler = ee(t.adler, r.pending_buf, r.pending, 0)), r.gzindex = 0, r.status = Ie) : (Je(r, 0), Je(r, 0), Je(r, 0), Je(r, 0), Je(r, 0), Je(r, 9 === r.level ? 2 : r.strategy >= ye || r.level < 2 ? 4 : 0), Je(r, We), r.status = De);else {
        var a = we + (r.w_bits - 8 << 4) << 8;
        a |= (r.strategy >= ye || r.level < 2 ? 0 : r.level < 6 ? 1 : 6 === r.level ? 2 : 3) << 6, 0 !== r.strstart && (a |= Ne), a += 31 - a % 31, r.status = De, Qe(r, a), 0 !== r.strstart && (Qe(r, t.adler >>> 16), Qe(r, 65535 & t.adler)), t.adler = 1;
      }
      if (r.status === Ie) if (r.gzhead.extra) {
        for (i = r.pending; r.gzindex < (65535 & r.gzhead.extra.length) && (r.pending !== r.pending_buf_size || (r.gzhead.hcrc && r.pending > i && (t.adler = ee(t.adler, r.pending_buf, r.pending - i, i)), Ze(t), i = r.pending, r.pending !== r.pending_buf_size));) Je(r, 255 & r.gzhead.extra[r.gzindex]), r.gzindex++;

        r.gzhead.hcrc && r.pending > i && (t.adler = ee(t.adler, r.pending_buf, r.pending - i, i)), r.gzindex === r.gzhead.extra.length && (r.gzindex = 0, r.status = qe);
      } else r.status = qe;
      if (r.status === qe) if (r.gzhead.name) {
        i = r.pending;

        do {
          if (r.pending === r.pending_buf_size && (r.gzhead.hcrc && r.pending > i && (t.adler = ee(t.adler, r.pending_buf, r.pending - i, i)), Ze(t), i = r.pending, r.pending === r.pending_buf_size)) {
            o = 1;
            break;
          }

          o = r.gzindex < r.gzhead.name.length ? 255 & r.gzhead.name.charCodeAt(r.gzindex++) : 0, Je(r, o);
        } while (0 !== o);

        r.gzhead.hcrc && r.pending > i && (t.adler = ee(t.adler, r.pending_buf, r.pending - i, i)), 0 === o && (r.gzindex = 0, r.status = Ve);
      } else r.status = Ve;
      if (r.status === Ve) if (r.gzhead.comment) {
        i = r.pending;

        do {
          if (r.pending === r.pending_buf_size && (r.gzhead.hcrc && r.pending > i && (t.adler = ee(t.adler, r.pending_buf, r.pending - i, i)), Ze(t), i = r.pending, r.pending === r.pending_buf_size)) {
            o = 1;
            break;
          }

          o = r.gzindex < r.gzhead.comment.length ? 255 & r.gzhead.comment.charCodeAt(r.gzindex++) : 0, Je(r, o);
        } while (0 !== o);

        r.gzhead.hcrc && r.pending > i && (t.adler = ee(t.adler, r.pending_buf, r.pending - i, i)), 0 === o && (r.status = Be);
      } else r.status = Be;

      if (r.status === Be && (r.gzhead.hcrc ? (r.pending + 2 > r.pending_buf_size && Ze(t), r.pending + 2 <= r.pending_buf_size && (Je(r, 255 & t.adler), Je(r, t.adler >> 8 & 255), t.adler = 0, r.status = De)) : r.status = De), 0 !== r.pending) {
        if (Ze(t), 0 === t.avail_out) return r.last_flush = -1, ue;
      } else if (0 === t.avail_in && He(e) <= He(n) && e !== ae) return Xe(t, le);

      if (r.status === Me && 0 !== t.avail_in) return Xe(t, le);

      if (0 !== t.avail_in || 0 !== r.lookahead || e !== re && r.status !== Me) {
        var s = r.strategy === ye ? function (t, e) {
          for (var n;;) {
            if (0 === t.lookahead && (tn(t), 0 === t.lookahead)) {
              if (e === re) return Ee;
              break;
            }

            if (t.match_length = 0, n = Qt._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++, n && (Ye(t, !1), 0 === t.strm.avail_out)) return Ee;
          }

          return t.insert = 0, e === ae ? (Ye(t, !0), 0 === t.strm.avail_out ? Ge : Ke) : t.last_lit && (Ye(t, !1), 0 === t.strm.avail_out) ? Ee : Ae;
        }(r, e) : r.strategy === ge ? function (t, e) {
          for (var n, r, i, o, a = t.window;;) {
            if (t.lookahead <= je) {
              if (tn(t), t.lookahead <= je && e === re) return Ee;
              if (0 === t.lookahead) break;
            }

            if (t.match_length = 0, t.lookahead >= Te && t.strstart > 0 && (r = a[i = t.strstart - 1]) === a[++i] && r === a[++i] && r === a[++i]) {
              o = t.strstart + je;

              do {} while (r === a[++i] && r === a[++i] && r === a[++i] && r === a[++i] && r === a[++i] && r === a[++i] && r === a[++i] && r === a[++i] && i < o);

              t.match_length = je - (o - i), t.match_length > t.lookahead && (t.match_length = t.lookahead);
            }

            if (t.match_length >= Te ? (n = Qt._tr_tally(t, 1, t.match_length - Te), t.lookahead -= t.match_length, t.strstart += t.match_length, t.match_length = 0) : (n = Qt._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++), n && (Ye(t, !1), 0 === t.strm.avail_out)) return Ee;
          }

          return t.insert = 0, e === ae ? (Ye(t, !0), 0 === t.strm.avail_out ? Ge : Ke) : t.last_lit && (Ye(t, !1), 0 === t.strm.avail_out) ? Ee : Ae;
        }(r, e) : te[r.level].func(r, e);
        if (s !== Ge && s !== Ke || (r.status = Me), s === Ee || s === Ge) return 0 === t.avail_out && (r.last_flush = -1), ue;
        if (s === Ae && (e === ie ? Qt._tr_align(r) : e !== se && (Qt._tr_stored_block(r, 0, 0, !1), e === oe && (Le(r.head), 0 === r.lookahead && (r.strstart = 0, r.block_start = 0, r.insert = 0))), Ze(t), 0 === t.avail_out)) return r.last_flush = -1, ue;
      }

      return e !== ae ? ue : r.wrap <= 0 ? he : (2 === r.wrap ? (Je(r, 255 & t.adler), Je(r, t.adler >> 8 & 255), Je(r, t.adler >> 16 & 255), Je(r, t.adler >> 24 & 255), Je(r, 255 & t.total_in), Je(r, t.total_in >> 8 & 255), Je(r, t.total_in >> 16 & 255), Je(r, t.total_in >> 24 & 255)) : (Qe(r, t.adler >>> 16), Qe(r, 65535 & t.adler)), Ze(t), r.wrap > 0 && (r.wrap = -r.wrap), 0 !== r.pending ? ue : he);
    },
    deflateEnd: function (t) {
      var e;
      return t && t.state ? (e = t.state.status) !== Ue && e !== Ie && e !== qe && e !== Ve && e !== Be && e !== De && e !== Me ? Xe(t, ce) : (t.state = null, e === De ? Xe(t, fe) : ue) : ce;
    },
    deflateSetDictionary: function (t, e) {
      var n,
          r,
          i,
          o,
          a,
          s,
          u,
          h,
          c = e.length;
      if (!t || !t.state) return ce;
      if (2 === (o = (n = t.state).wrap) || 1 === o && n.status !== Ue || n.lookahead) return ce;

      for (1 === o && (t.adler = _t(t.adler, e, c, 0)), n.wrap = 0, c >= n.w_size && (0 === o && (Le(n.head), n.strstart = 0, n.block_start = 0, n.insert = 0), h = new _.Buf8(n.w_size), _.arraySet(h, e, c - n.w_size, n.w_size, 0), e = h, c = n.w_size), a = t.avail_in, s = t.next_in, u = t.input, t.avail_in = c, t.next_in = 0, t.input = e, tn(n); n.lookahead >= Te;) {
        r = n.strstart, i = n.lookahead - (Te - 1);

        do {
          n.ins_h = (n.ins_h << n.hash_shift ^ n.window[r + Te - 1]) & n.hash_mask, n.prev[r & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = r, r++;
        } while (--i);

        n.strstart = r, n.lookahead = Te - 1, tn(n);
      }

      return n.strstart += n.lookahead, n.block_start = n.strstart, n.insert = n.lookahead, n.lookahead = 0, n.match_length = n.prev_length = Te - 1, n.match_available = 0, t.next_in = s, t.input = u, t.avail_in = a, n.wrap = o, ue;
    },
    deflateInfo: "pako deflate (from Nodeca project)"
  },
      cn = !0,
      fn = !0;

  try {
    String.fromCharCode.apply(null, [0]);
  } catch (t) {
    cn = !1;
  }

  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch (t) {
    fn = !1;
  }

  for (var ln = new _.Buf8(256), dn = 0; dn < 256; dn++) ln[dn] = dn >= 252 ? 6 : dn >= 248 ? 5 : dn >= 240 ? 4 : dn >= 224 ? 3 : dn >= 192 ? 2 : 1;

  ln[254] = ln[254] = 1;

  function pn(t, e) {
    if (e < 65534 && (t.subarray && fn || !t.subarray && cn)) return String.fromCharCode.apply(null, _.shrinkBuf(t, e));

    for (var n = "", r = 0; r < e; r++) n += String.fromCharCode(t[r]);

    return n;
  }

  var yn = {
    string2buf: function (t) {
      var e,
          n,
          r,
          i,
          o,
          a = t.length,
          s = 0;

      for (i = 0; i < a; i++) 55296 == (64512 & (n = t.charCodeAt(i))) && i + 1 < a && 56320 == (64512 & (r = t.charCodeAt(i + 1))) && (n = 65536 + (n - 55296 << 10) + (r - 56320), i++), s += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;

      for (e = new _.Buf8(s), o = 0, i = 0; o < s; i++) 55296 == (64512 & (n = t.charCodeAt(i))) && i + 1 < a && 56320 == (64512 & (r = t.charCodeAt(i + 1))) && (n = 65536 + (n - 55296 << 10) + (r - 56320), i++), n < 128 ? e[o++] = n : n < 2048 ? (e[o++] = 192 | n >>> 6, e[o++] = 128 | 63 & n) : n < 65536 ? (e[o++] = 224 | n >>> 12, e[o++] = 128 | n >>> 6 & 63, e[o++] = 128 | 63 & n) : (e[o++] = 240 | n >>> 18, e[o++] = 128 | n >>> 12 & 63, e[o++] = 128 | n >>> 6 & 63, e[o++] = 128 | 63 & n);

      return e;
    },
    buf2binstring: function (t) {
      return pn(t, t.length);
    },
    binstring2buf: function (t) {
      for (var e = new _.Buf8(t.length), n = 0, r = e.length; n < r; n++) e[n] = t.charCodeAt(n);

      return e;
    },
    buf2string: function (t, e) {
      var n,
          r,
          i,
          o,
          a = e || t.length,
          s = new Array(2 * a);

      for (r = 0, n = 0; n < a;) if ((i = t[n++]) < 128) s[r++] = i;else if ((o = ln[i]) > 4) s[r++] = 65533, n += o - 1;else {
        for (i &= 2 === o ? 31 : 3 === o ? 15 : 7; o > 1 && n < a;) i = i << 6 | 63 & t[n++], o--;

        o > 1 ? s[r++] = 65533 : i < 65536 ? s[r++] = i : (i -= 65536, s[r++] = 55296 | i >> 10 & 1023, s[r++] = 56320 | 1023 & i);
      }

      return pn(s, r);
    },
    utf8border: function (t, e) {
      var n;

      for ((e = e || t.length) > t.length && (e = t.length), n = e - 1; n >= 0 && 128 == (192 & t[n]);) n--;

      return n < 0 ? e : 0 === n ? e : n + ln[t[n]] > e ? n : e;
    }
  };

  var gn = function gn() {
    this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
  },
      vn = Object.prototype.toString,
      mn = 0,
      bn = -1,
      wn = 0,
      xn = 8;

  function Sn(t) {
    if (!(this instanceof Sn)) return new Sn(t);
    this.options = _.assign({
      level: bn,
      method: xn,
      chunkSize: 16384,
      windowBits: 15,
      memLevel: 8,
      strategy: wn,
      to: ""
    }, t || {});
    var e = this.options;
    e.raw && e.windowBits > 0 ? e.windowBits = -e.windowBits : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new gn(), this.strm.avail_out = 0;
    var n = hn.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
    if (n !== mn) throw new Error(ne[n]);

    if (e.header && hn.deflateSetHeader(this.strm, e.header), e.dictionary) {
      var r;
      if (r = "string" == typeof e.dictionary ? yn.string2buf(e.dictionary) : "[object ArrayBuffer]" === vn.call(e.dictionary) ? new Uint8Array(e.dictionary) : e.dictionary, (n = hn.deflateSetDictionary(this.strm, r)) !== mn) throw new Error(ne[n]);
      this._dict_set = !0;
    }
  }

  function kn(t, e) {
    var n = new Sn(e);
    if (n.push(t, !0), n.err) throw n.msg || ne[n.err];
    return n.result;
  }

  Sn.prototype.push = function (t, e) {
    var n,
        r,
        i = this.strm,
        o = this.options.chunkSize;
    if (this.ended) return !1;
    r = e === ~~e ? e : !0 === e ? 4 : 0, "string" == typeof t ? i.input = yn.string2buf(t) : "[object ArrayBuffer]" === vn.call(t) ? i.input = new Uint8Array(t) : i.input = t, i.next_in = 0, i.avail_in = i.input.length;

    do {
      if (0 === i.avail_out && (i.output = new _.Buf8(o), i.next_out = 0, i.avail_out = o), 1 !== (n = hn.deflate(i, r)) && n !== mn) return this.onEnd(n), this.ended = !0, !1;
      0 !== i.avail_out && (0 !== i.avail_in || 4 !== r && 2 !== r) || ("string" === this.options.to ? this.onData(yn.buf2binstring(_.shrinkBuf(i.output, i.next_out))) : this.onData(_.shrinkBuf(i.output, i.next_out)));
    } while ((i.avail_in > 0 || 0 === i.avail_out) && 1 !== n);

    return 4 === r ? (n = hn.deflateEnd(this.strm), this.onEnd(n), this.ended = !0, n === mn) : 2 !== r || (this.onEnd(mn), i.avail_out = 0, !0);
  }, Sn.prototype.onData = function (t) {
    this.chunks.push(t);
  }, Sn.prototype.onEnd = function (t) {
    t === mn && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = _.flattenChunks(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg;
  };

  var Cn = {
    Deflate: Sn,
    deflate: kn,
    deflateRaw: function (t, e) {
      return (e = e || {}).raw = !0, kn(t, e);
    },
    gzip: function (t, e) {
      return (e = e || {}).gzip = !0, kn(t, e);
    }
  },
      Fn = function Fn(t, e) {
    var n, r, i, o, a, s, u, h, c, f, l, d, p, y, g, v, m, b, w, x, S, k, C, F, P;
    n = t.state, r = t.next_in, F = t.input, i = r + (t.avail_in - 5), o = t.next_out, P = t.output, a = o - (e - t.avail_out), s = o + (t.avail_out - 257), u = n.dmax, h = n.wsize, c = n.whave, f = n.wnext, l = n.window, d = n.hold, p = n.bits, y = n.lencode, g = n.distcode, v = (1 << n.lenbits) - 1, m = (1 << n.distbits) - 1;

    t: do {
      p < 15 && (d += F[r++] << p, p += 8, d += F[r++] << p, p += 8), b = y[d & v];

      e: for (;;) {
        if (d >>>= w = b >>> 24, p -= w, 0 === (w = b >>> 16 & 255)) P[o++] = 65535 & b;else {
          if (!(16 & w)) {
            if (0 == (64 & w)) {
              b = y[(65535 & b) + (d & (1 << w) - 1)];
              continue e;
            }

            if (32 & w) {
              n.mode = 12;
              break t;
            }

            t.msg = "invalid literal/length code", n.mode = 30;
            break t;
          }

          x = 65535 & b, (w &= 15) && (p < w && (d += F[r++] << p, p += 8), x += d & (1 << w) - 1, d >>>= w, p -= w), p < 15 && (d += F[r++] << p, p += 8, d += F[r++] << p, p += 8), b = g[d & m];

          n: for (;;) {
            if (d >>>= w = b >>> 24, p -= w, !(16 & (w = b >>> 16 & 255))) {
              if (0 == (64 & w)) {
                b = g[(65535 & b) + (d & (1 << w) - 1)];
                continue n;
              }

              t.msg = "invalid distance code", n.mode = 30;
              break t;
            }

            if (S = 65535 & b, p < (w &= 15) && (d += F[r++] << p, (p += 8) < w && (d += F[r++] << p, p += 8)), (S += d & (1 << w) - 1) > u) {
              t.msg = "invalid distance too far back", n.mode = 30;
              break t;
            }

            if (d >>>= w, p -= w, S > (w = o - a)) {
              if ((w = S - w) > c && n.sane) {
                t.msg = "invalid distance too far back", n.mode = 30;
                break t;
              }

              if (k = 0, C = l, 0 === f) {
                if (k += h - w, w < x) {
                  x -= w;

                  do {
                    P[o++] = l[k++];
                  } while (--w);

                  k = o - S, C = P;
                }
              } else if (f < w) {
                if (k += h + f - w, (w -= f) < x) {
                  x -= w;

                  do {
                    P[o++] = l[k++];
                  } while (--w);

                  if (k = 0, f < x) {
                    x -= w = f;

                    do {
                      P[o++] = l[k++];
                    } while (--w);

                    k = o - S, C = P;
                  }
                }
              } else if (k += f - w, w < x) {
                x -= w;

                do {
                  P[o++] = l[k++];
                } while (--w);

                k = o - S, C = P;
              }

              for (; x > 2;) P[o++] = C[k++], P[o++] = C[k++], P[o++] = C[k++], x -= 3;

              x && (P[o++] = C[k++], x > 1 && (P[o++] = C[k++]));
            } else {
              k = o - S;

              do {
                P[o++] = P[k++], P[o++] = P[k++], P[o++] = P[k++], x -= 3;
              } while (x > 2);

              x && (P[o++] = P[k++], x > 1 && (P[o++] = P[k++]));
            }

            break;
          }
        }
        break;
      }
    } while (r < i && o < s);

    r -= x = p >> 3, d &= (1 << (p -= x << 3)) - 1, t.next_in = r, t.next_out = o, t.avail_in = r < i ? i - r + 5 : 5 - (r - i), t.avail_out = o < s ? s - o + 257 : 257 - (o - s), n.hold = d, n.bits = p;
  },
      Pn = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
      Rn = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
      On = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
      Tn = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64],
      jn = function jn(t, e, n, r, i, o, a, s) {
    var u,
        h,
        c,
        f,
        l,
        d,
        p,
        y,
        g,
        v = s.bits,
        m = 0,
        b = 0,
        w = 0,
        x = 0,
        S = 0,
        k = 0,
        C = 0,
        F = 0,
        P = 0,
        R = 0,
        O = null,
        T = 0,
        j = new _.Buf16(16),
        z = new _.Buf16(16),
        N = null,
        U = 0;

    for (m = 0; m <= 15; m++) j[m] = 0;

    for (b = 0; b < r; b++) j[e[n + b]]++;

    for (S = v, x = 15; x >= 1 && 0 === j[x]; x--);

    if (S > x && (S = x), 0 === x) return i[o++] = 20971520, i[o++] = 20971520, s.bits = 1, 0;

    for (w = 1; w < x && 0 === j[w]; w++);

    for (S < w && (S = w), F = 1, m = 1; m <= 15; m++) if (F <<= 1, (F -= j[m]) < 0) return -1;

    if (F > 0 && (0 === t || 1 !== x)) return -1;

    for (z[1] = 0, m = 1; m < 15; m++) z[m + 1] = z[m] + j[m];

    for (b = 0; b < r; b++) 0 !== e[n + b] && (a[z[e[n + b]]++] = b);

    if (0 === t ? (O = N = a, d = 19) : 1 === t ? (O = Pn, T -= 257, N = Rn, U -= 257, d = 256) : (O = On, N = Tn, d = -1), R = 0, b = 0, m = w, l = o, k = S, C = 0, c = -1, f = (P = 1 << S) - 1, 1 === t && P > 852 || 2 === t && P > 592) return 1;

    for (;;) {
      p = m - C, a[b] < d ? (y = 0, g = a[b]) : a[b] > d ? (y = N[U + a[b]], g = O[T + a[b]]) : (y = 96, g = 0), u = 1 << m - C, w = h = 1 << k;

      do {
        i[l + (R >> C) + (h -= u)] = p << 24 | y << 16 | g | 0;
      } while (0 !== h);

      for (u = 1 << m - 1; R & u;) u >>= 1;

      if (0 !== u ? (R &= u - 1, R += u) : R = 0, b++, 0 == --j[m]) {
        if (m === x) break;
        m = e[n + a[b]];
      }

      if (m > S && (R & f) !== c) {
        for (0 === C && (C = S), l += w, F = 1 << (k = m - C); k + C < x && !((F -= j[k + C]) <= 0);) k++, F <<= 1;

        if (P += 1 << k, 1 === t && P > 852 || 2 === t && P > 592) return 1;
        i[c = R & f] = S << 24 | k << 16 | l - o | 0;
      }
    }

    return 0 !== R && (i[l + R] = m - C << 24 | 64 << 16 | 0), s.bits = S, 0;
  },
      zn = 0,
      Nn = 1,
      Un = 2,
      In = 4,
      qn = 5,
      Vn = 6,
      Bn = 0,
      Dn = 1,
      Mn = 2,
      En = -2,
      An = -3,
      Gn = -4,
      Kn = -5,
      Wn = 8,
      Xn = 1,
      Hn = 2,
      Ln = 3,
      Zn = 4,
      Yn = 5,
      Jn = 6,
      Qn = 7,
      _n = 8,
      $n = 9,
      tr = 10,
      er = 11,
      nr = 12,
      rr = 13,
      ir = 14,
      or = 15,
      ar = 16,
      sr = 17,
      ur = 18,
      hr = 19,
      cr = 20,
      fr = 21,
      lr = 22,
      dr = 23,
      pr = 24,
      yr = 25,
      gr = 26,
      vr = 27,
      mr = 28,
      br = 29,
      wr = 30,
      xr = 31,
      Sr = 32,
      kr = 852,
      Cr = 592,
      Fr = 15;

  function Pr(t) {
    return (t >>> 24 & 255) + (t >>> 8 & 65280) + ((65280 & t) << 8) + ((255 & t) << 24);
  }

  function Rr() {
    this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new _.Buf16(320), this.work = new _.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
  }

  function Or(t) {
    var e;
    return t && t.state ? (e = t.state, t.total_in = t.total_out = e.total = 0, t.msg = "", e.wrap && (t.adler = 1 & e.wrap), e.mode = Xn, e.last = 0, e.havedict = 0, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = new _.Buf32(kr), e.distcode = e.distdyn = new _.Buf32(Cr), e.sane = 1, e.back = -1, Bn) : En;
  }

  function Tr(t) {
    var e;
    return t && t.state ? ((e = t.state).wsize = 0, e.whave = 0, e.wnext = 0, Or(t)) : En;
  }

  function jr(t, e) {
    var n, r;
    return t && t.state ? (r = t.state, e < 0 ? (n = 0, e = -e) : (n = 1 + (e >> 4), e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? En : (null !== r.window && r.wbits !== e && (r.window = null), r.wrap = n, r.wbits = e, Tr(t))) : En;
  }

  function zr(t, e) {
    var n, r;
    return t ? (r = new Rr(), t.state = r, r.window = null, (n = jr(t, e)) !== Bn && (t.state = null), n) : En;
  }

  var Nr,
      Ur,
      Ir = !0;

  function qr(t) {
    if (Ir) {
      var e;

      for (Nr = new _.Buf32(512), Ur = new _.Buf32(32), e = 0; e < 144;) t.lens[e++] = 8;

      for (; e < 256;) t.lens[e++] = 9;

      for (; e < 280;) t.lens[e++] = 7;

      for (; e < 288;) t.lens[e++] = 8;

      for (jn(Nn, t.lens, 0, 288, Nr, 0, t.work, {
        bits: 9
      }), e = 0; e < 32;) t.lens[e++] = 5;

      jn(Un, t.lens, 0, 32, Ur, 0, t.work, {
        bits: 5
      }), Ir = !1;
    }

    t.lencode = Nr, t.lenbits = 9, t.distcode = Ur, t.distbits = 5;
  }

  function Vr(t, e, n, r) {
    var i,
        o = t.state;
    return null === o.window && (o.wsize = 1 << o.wbits, o.wnext = 0, o.whave = 0, o.window = new _.Buf8(o.wsize)), r >= o.wsize ? (_.arraySet(o.window, e, n - o.wsize, o.wsize, 0), o.wnext = 0, o.whave = o.wsize) : ((i = o.wsize - o.wnext) > r && (i = r), _.arraySet(o.window, e, n - r, i, o.wnext), (r -= i) ? (_.arraySet(o.window, e, n - r, r, 0), o.wnext = r, o.whave = o.wsize) : (o.wnext += i, o.wnext === o.wsize && (o.wnext = 0), o.whave < o.wsize && (o.whave += i))), 0;
  }

  var Br = {
    inflateReset: Tr,
    inflateReset2: jr,
    inflateResetKeep: Or,
    inflateInit: function (t) {
      return zr(t, Fr);
    },
    inflateInit2: zr,
    inflate: function (t, e) {
      var n,
          r,
          i,
          o,
          a,
          s,
          u,
          h,
          c,
          f,
          l,
          d,
          p,
          y,
          g,
          v,
          m,
          b,
          w,
          x,
          S,
          k,
          C,
          F,
          P = 0,
          R = new _.Buf8(4),
          O = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
      if (!t || !t.state || !t.output || !t.input && 0 !== t.avail_in) return En;
      (n = t.state).mode === nr && (n.mode = rr), a = t.next_out, i = t.output, u = t.avail_out, o = t.next_in, r = t.input, s = t.avail_in, h = n.hold, c = n.bits, f = s, l = u, k = Bn;

      t: for (;;) switch (n.mode) {
        case Xn:
          if (0 === n.wrap) {
            n.mode = rr;
            break;
          }

          for (; c < 16;) {
            if (0 === s) break t;
            s--, h += r[o++] << c, c += 8;
          }

          if (2 & n.wrap && 35615 === h) {
            n.check = 0, R[0] = 255 & h, R[1] = h >>> 8 & 255, n.check = ee(n.check, R, 2, 0), h = 0, c = 0, n.mode = Hn;
            break;
          }

          if (n.flags = 0, n.head && (n.head.done = !1), !(1 & n.wrap) || (((255 & h) << 8) + (h >> 8)) % 31) {
            t.msg = "incorrect header check", n.mode = wr;
            break;
          }

          if ((15 & h) !== Wn) {
            t.msg = "unknown compression method", n.mode = wr;
            break;
          }

          if (c -= 4, S = 8 + (15 & (h >>>= 4)), 0 === n.wbits) n.wbits = S;else if (S > n.wbits) {
            t.msg = "invalid window size", n.mode = wr;
            break;
          }
          n.dmax = 1 << S, t.adler = n.check = 1, n.mode = 512 & h ? tr : nr, h = 0, c = 0;
          break;

        case Hn:
          for (; c < 16;) {
            if (0 === s) break t;
            s--, h += r[o++] << c, c += 8;
          }

          if (n.flags = h, (255 & n.flags) !== Wn) {
            t.msg = "unknown compression method", n.mode = wr;
            break;
          }

          if (57344 & n.flags) {
            t.msg = "unknown header flags set", n.mode = wr;
            break;
          }

          n.head && (n.head.text = h >> 8 & 1), 512 & n.flags && (R[0] = 255 & h, R[1] = h >>> 8 & 255, n.check = ee(n.check, R, 2, 0)), h = 0, c = 0, n.mode = Ln;

        case Ln:
          for (; c < 32;) {
            if (0 === s) break t;
            s--, h += r[o++] << c, c += 8;
          }

          n.head && (n.head.time = h), 512 & n.flags && (R[0] = 255 & h, R[1] = h >>> 8 & 255, R[2] = h >>> 16 & 255, R[3] = h >>> 24 & 255, n.check = ee(n.check, R, 4, 0)), h = 0, c = 0, n.mode = Zn;

        case Zn:
          for (; c < 16;) {
            if (0 === s) break t;
            s--, h += r[o++] << c, c += 8;
          }

          n.head && (n.head.xflags = 255 & h, n.head.os = h >> 8), 512 & n.flags && (R[0] = 255 & h, R[1] = h >>> 8 & 255, n.check = ee(n.check, R, 2, 0)), h = 0, c = 0, n.mode = Yn;

        case Yn:
          if (1024 & n.flags) {
            for (; c < 16;) {
              if (0 === s) break t;
              s--, h += r[o++] << c, c += 8;
            }

            n.length = h, n.head && (n.head.extra_len = h), 512 & n.flags && (R[0] = 255 & h, R[1] = h >>> 8 & 255, n.check = ee(n.check, R, 2, 0)), h = 0, c = 0;
          } else n.head && (n.head.extra = null);

          n.mode = Jn;

        case Jn:
          if (1024 & n.flags && ((d = n.length) > s && (d = s), d && (n.head && (S = n.head.extra_len - n.length, n.head.extra || (n.head.extra = new Array(n.head.extra_len)), _.arraySet(n.head.extra, r, o, d, S)), 512 & n.flags && (n.check = ee(n.check, r, d, o)), s -= d, o += d, n.length -= d), n.length)) break t;
          n.length = 0, n.mode = Qn;

        case Qn:
          if (2048 & n.flags) {
            if (0 === s) break t;
            d = 0;

            do {
              S = r[o + d++], n.head && S && n.length < 65536 && (n.head.name += String.fromCharCode(S));
            } while (S && d < s);

            if (512 & n.flags && (n.check = ee(n.check, r, d, o)), s -= d, o += d, S) break t;
          } else n.head && (n.head.name = null);

          n.length = 0, n.mode = _n;

        case _n:
          if (4096 & n.flags) {
            if (0 === s) break t;
            d = 0;

            do {
              S = r[o + d++], n.head && S && n.length < 65536 && (n.head.comment += String.fromCharCode(S));
            } while (S && d < s);

            if (512 & n.flags && (n.check = ee(n.check, r, d, o)), s -= d, o += d, S) break t;
          } else n.head && (n.head.comment = null);

          n.mode = $n;

        case $n:
          if (512 & n.flags) {
            for (; c < 16;) {
              if (0 === s) break t;
              s--, h += r[o++] << c, c += 8;
            }

            if (h !== (65535 & n.check)) {
              t.msg = "header crc mismatch", n.mode = wr;
              break;
            }

            h = 0, c = 0;
          }

          n.head && (n.head.hcrc = n.flags >> 9 & 1, n.head.done = !0), t.adler = n.check = 0, n.mode = nr;
          break;

        case tr:
          for (; c < 32;) {
            if (0 === s) break t;
            s--, h += r[o++] << c, c += 8;
          }

          t.adler = n.check = Pr(h), h = 0, c = 0, n.mode = er;

        case er:
          if (0 === n.havedict) return t.next_out = a, t.avail_out = u, t.next_in = o, t.avail_in = s, n.hold = h, n.bits = c, Mn;
          t.adler = n.check = 1, n.mode = nr;

        case nr:
          if (e === qn || e === Vn) break t;

        case rr:
          if (n.last) {
            h >>>= 7 & c, c -= 7 & c, n.mode = vr;
            break;
          }

          for (; c < 3;) {
            if (0 === s) break t;
            s--, h += r[o++] << c, c += 8;
          }

          switch (n.last = 1 & h, c -= 1, 3 & (h >>>= 1)) {
            case 0:
              n.mode = ir;
              break;

            case 1:
              if (qr(n), n.mode = cr, e === Vn) {
                h >>>= 2, c -= 2;
                break t;
              }

              break;

            case 2:
              n.mode = sr;
              break;

            case 3:
              t.msg = "invalid block type", n.mode = wr;
          }

          h >>>= 2, c -= 2;
          break;

        case ir:
          for (h >>>= 7 & c, c -= 7 & c; c < 32;) {
            if (0 === s) break t;
            s--, h += r[o++] << c, c += 8;
          }

          if ((65535 & h) != (h >>> 16 ^ 65535)) {
            t.msg = "invalid stored block lengths", n.mode = wr;
            break;
          }

          if (n.length = 65535 & h, h = 0, c = 0, n.mode = or, e === Vn) break t;

        case or:
          n.mode = ar;

        case ar:
          if (d = n.length) {
            if (d > s && (d = s), d > u && (d = u), 0 === d) break t;
            _.arraySet(i, r, o, d, a), s -= d, o += d, u -= d, a += d, n.length -= d;
            break;
          }

          n.mode = nr;
          break;

        case sr:
          for (; c < 14;) {
            if (0 === s) break t;
            s--, h += r[o++] << c, c += 8;
          }

          if (n.nlen = 257 + (31 & h), h >>>= 5, c -= 5, n.ndist = 1 + (31 & h), h >>>= 5, c -= 5, n.ncode = 4 + (15 & h), h >>>= 4, c -= 4, n.nlen > 286 || n.ndist > 30) {
            t.msg = "too many length or distance symbols", n.mode = wr;
            break;
          }

          n.have = 0, n.mode = ur;

        case ur:
          for (; n.have < n.ncode;) {
            for (; c < 3;) {
              if (0 === s) break t;
              s--, h += r[o++] << c, c += 8;
            }

            n.lens[O[n.have++]] = 7 & h, h >>>= 3, c -= 3;
          }

          for (; n.have < 19;) n.lens[O[n.have++]] = 0;

          if (n.lencode = n.lendyn, n.lenbits = 7, C = {
            bits: n.lenbits
          }, k = jn(zn, n.lens, 0, 19, n.lencode, 0, n.work, C), n.lenbits = C.bits, k) {
            t.msg = "invalid code lengths set", n.mode = wr;
            break;
          }

          n.have = 0, n.mode = hr;

        case hr:
          for (; n.have < n.nlen + n.ndist;) {
            for (; v = (P = n.lencode[h & (1 << n.lenbits) - 1]) >>> 16 & 255, m = 65535 & P, !((g = P >>> 24) <= c);) {
              if (0 === s) break t;
              s--, h += r[o++] << c, c += 8;
            }

            if (m < 16) h >>>= g, c -= g, n.lens[n.have++] = m;else {
              if (16 === m) {
                for (F = g + 2; c < F;) {
                  if (0 === s) break t;
                  s--, h += r[o++] << c, c += 8;
                }

                if (h >>>= g, c -= g, 0 === n.have) {
                  t.msg = "invalid bit length repeat", n.mode = wr;
                  break;
                }

                S = n.lens[n.have - 1], d = 3 + (3 & h), h >>>= 2, c -= 2;
              } else if (17 === m) {
                for (F = g + 3; c < F;) {
                  if (0 === s) break t;
                  s--, h += r[o++] << c, c += 8;
                }

                c -= g, S = 0, d = 3 + (7 & (h >>>= g)), h >>>= 3, c -= 3;
              } else {
                for (F = g + 7; c < F;) {
                  if (0 === s) break t;
                  s--, h += r[o++] << c, c += 8;
                }

                c -= g, S = 0, d = 11 + (127 & (h >>>= g)), h >>>= 7, c -= 7;
              }

              if (n.have + d > n.nlen + n.ndist) {
                t.msg = "invalid bit length repeat", n.mode = wr;
                break;
              }

              for (; d--;) n.lens[n.have++] = S;
            }
          }

          if (n.mode === wr) break;

          if (0 === n.lens[256]) {
            t.msg = "invalid code -- missing end-of-block", n.mode = wr;
            break;
          }

          if (n.lenbits = 9, C = {
            bits: n.lenbits
          }, k = jn(Nn, n.lens, 0, n.nlen, n.lencode, 0, n.work, C), n.lenbits = C.bits, k) {
            t.msg = "invalid literal/lengths set", n.mode = wr;
            break;
          }

          if (n.distbits = 6, n.distcode = n.distdyn, C = {
            bits: n.distbits
          }, k = jn(Un, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, C), n.distbits = C.bits, k) {
            t.msg = "invalid distances set", n.mode = wr;
            break;
          }

          if (n.mode = cr, e === Vn) break t;

        case cr:
          n.mode = fr;

        case fr:
          if (s >= 6 && u >= 258) {
            t.next_out = a, t.avail_out = u, t.next_in = o, t.avail_in = s, n.hold = h, n.bits = c, Fn(t, l), a = t.next_out, i = t.output, u = t.avail_out, o = t.next_in, r = t.input, s = t.avail_in, h = n.hold, c = n.bits, n.mode === nr && (n.back = -1);
            break;
          }

          for (n.back = 0; v = (P = n.lencode[h & (1 << n.lenbits) - 1]) >>> 16 & 255, m = 65535 & P, !((g = P >>> 24) <= c);) {
            if (0 === s) break t;
            s--, h += r[o++] << c, c += 8;
          }

          if (v && 0 == (240 & v)) {
            for (b = g, w = v, x = m; v = (P = n.lencode[x + ((h & (1 << b + w) - 1) >> b)]) >>> 16 & 255, m = 65535 & P, !(b + (g = P >>> 24) <= c);) {
              if (0 === s) break t;
              s--, h += r[o++] << c, c += 8;
            }

            h >>>= b, c -= b, n.back += b;
          }

          if (h >>>= g, c -= g, n.back += g, n.length = m, 0 === v) {
            n.mode = gr;
            break;
          }

          if (32 & v) {
            n.back = -1, n.mode = nr;
            break;
          }

          if (64 & v) {
            t.msg = "invalid literal/length code", n.mode = wr;
            break;
          }

          n.extra = 15 & v, n.mode = lr;

        case lr:
          if (n.extra) {
            for (F = n.extra; c < F;) {
              if (0 === s) break t;
              s--, h += r[o++] << c, c += 8;
            }

            n.length += h & (1 << n.extra) - 1, h >>>= n.extra, c -= n.extra, n.back += n.extra;
          }

          n.was = n.length, n.mode = dr;

        case dr:
          for (; v = (P = n.distcode[h & (1 << n.distbits) - 1]) >>> 16 & 255, m = 65535 & P, !((g = P >>> 24) <= c);) {
            if (0 === s) break t;
            s--, h += r[o++] << c, c += 8;
          }

          if (0 == (240 & v)) {
            for (b = g, w = v, x = m; v = (P = n.distcode[x + ((h & (1 << b + w) - 1) >> b)]) >>> 16 & 255, m = 65535 & P, !(b + (g = P >>> 24) <= c);) {
              if (0 === s) break t;
              s--, h += r[o++] << c, c += 8;
            }

            h >>>= b, c -= b, n.back += b;
          }

          if (h >>>= g, c -= g, n.back += g, 64 & v) {
            t.msg = "invalid distance code", n.mode = wr;
            break;
          }

          n.offset = m, n.extra = 15 & v, n.mode = pr;

        case pr:
          if (n.extra) {
            for (F = n.extra; c < F;) {
              if (0 === s) break t;
              s--, h += r[o++] << c, c += 8;
            }

            n.offset += h & (1 << n.extra) - 1, h >>>= n.extra, c -= n.extra, n.back += n.extra;
          }

          if (n.offset > n.dmax) {
            t.msg = "invalid distance too far back", n.mode = wr;
            break;
          }

          n.mode = yr;

        case yr:
          if (0 === u) break t;

          if (d = l - u, n.offset > d) {
            if ((d = n.offset - d) > n.whave && n.sane) {
              t.msg = "invalid distance too far back", n.mode = wr;
              break;
            }

            d > n.wnext ? (d -= n.wnext, p = n.wsize - d) : p = n.wnext - d, d > n.length && (d = n.length), y = n.window;
          } else y = i, p = a - n.offset, d = n.length;

          d > u && (d = u), u -= d, n.length -= d;

          do {
            i[a++] = y[p++];
          } while (--d);

          0 === n.length && (n.mode = fr);
          break;

        case gr:
          if (0 === u) break t;
          i[a++] = n.length, u--, n.mode = fr;
          break;

        case vr:
          if (n.wrap) {
            for (; c < 32;) {
              if (0 === s) break t;
              s--, h |= r[o++] << c, c += 8;
            }

            if (l -= u, t.total_out += l, n.total += l, l && (t.adler = n.check = n.flags ? ee(n.check, i, l, a - l) : _t(n.check, i, l, a - l)), l = u, (n.flags ? h : Pr(h)) !== n.check) {
              t.msg = "incorrect data check", n.mode = wr;
              break;
            }

            h = 0, c = 0;
          }

          n.mode = mr;

        case mr:
          if (n.wrap && n.flags) {
            for (; c < 32;) {
              if (0 === s) break t;
              s--, h += r[o++] << c, c += 8;
            }

            if (h !== (4294967295 & n.total)) {
              t.msg = "incorrect length check", n.mode = wr;
              break;
            }

            h = 0, c = 0;
          }

          n.mode = br;

        case br:
          k = Dn;
          break t;

        case wr:
          k = An;
          break t;

        case xr:
          return Gn;

        case Sr:
        default:
          return En;
      }

      return t.next_out = a, t.avail_out = u, t.next_in = o, t.avail_in = s, n.hold = h, n.bits = c, (n.wsize || l !== t.avail_out && n.mode < wr && (n.mode < vr || e !== In)) && Vr(t, t.output, t.next_out, l - t.avail_out), f -= t.avail_in, l -= t.avail_out, t.total_in += f, t.total_out += l, n.total += l, n.wrap && l && (t.adler = n.check = n.flags ? ee(n.check, i, l, t.next_out - l) : _t(n.check, i, l, t.next_out - l)), t.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === nr ? 128 : 0) + (n.mode === cr || n.mode === or ? 256 : 0), (0 === f && 0 === l || e === In) && k === Bn && (k = Kn), k;
    },
    inflateEnd: function (t) {
      if (!t || !t.state) return En;
      var e = t.state;
      return e.window && (e.window = null), t.state = null, Bn;
    },
    inflateGetHeader: function (t, e) {
      var n;
      return t && t.state ? 0 == (2 & (n = t.state).wrap) ? En : (n.head = e, e.done = !1, Bn) : En;
    },
    inflateSetDictionary: function (t, e) {
      var n,
          r = e.length;
      return t && t.state ? 0 !== (n = t.state).wrap && n.mode !== er ? En : n.mode === er && _t(1, e, r, 0) !== n.check ? An : Vr(t, e, r, r) ? (n.mode = xr, Gn) : (n.havedict = 1, Bn) : En;
    },
    inflateInfo: "pako inflate (from Nodeca project)"
  },
      Dr = {
    Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,
    Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    Z_BUF_ERROR: -5,
    Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    Z_BINARY: 0,
    Z_TEXT: 1,
    Z_UNKNOWN: 2,
    Z_DEFLATED: 8
  };

  var Mr = function Mr() {
    this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
  },
      Er = Object.prototype.toString;

  function Ar(t) {
    if (!(this instanceof Ar)) return new Ar(t);
    this.options = _.assign({
      chunkSize: 16384,
      windowBits: 0,
      to: ""
    }, t || {});
    var e = this.options;
    e.raw && e.windowBits >= 0 && e.windowBits < 16 && (e.windowBits = -e.windowBits, 0 === e.windowBits && (e.windowBits = -15)), !(e.windowBits >= 0 && e.windowBits < 16) || t && t.windowBits || (e.windowBits += 32), e.windowBits > 15 && e.windowBits < 48 && 0 == (15 & e.windowBits) && (e.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new gn(), this.strm.avail_out = 0;
    var n = Br.inflateInit2(this.strm, e.windowBits);
    if (n !== Dr.Z_OK) throw new Error(ne[n]);
    if (this.header = new Mr(), Br.inflateGetHeader(this.strm, this.header), e.dictionary && ("string" == typeof e.dictionary ? e.dictionary = yn.string2buf(e.dictionary) : "[object ArrayBuffer]" === Er.call(e.dictionary) && (e.dictionary = new Uint8Array(e.dictionary)), e.raw && (n = Br.inflateSetDictionary(this.strm, e.dictionary)) !== Dr.Z_OK)) throw new Error(ne[n]);
  }

  function Gr(t, e) {
    var n = new Ar(e);
    if (n.push(t, !0), n.err) throw n.msg || ne[n.err];
    return n.result;
  }

  Ar.prototype.push = function (t, e) {
    var n,
        r,
        i,
        o,
        a,
        s = this.strm,
        u = this.options.chunkSize,
        h = this.options.dictionary,
        c = !1;
    if (this.ended) return !1;
    r = e === ~~e ? e : !0 === e ? Dr.Z_FINISH : Dr.Z_NO_FLUSH, "string" == typeof t ? s.input = yn.binstring2buf(t) : "[object ArrayBuffer]" === Er.call(t) ? s.input = new Uint8Array(t) : s.input = t, s.next_in = 0, s.avail_in = s.input.length;

    do {
      if (0 === s.avail_out && (s.output = new _.Buf8(u), s.next_out = 0, s.avail_out = u), (n = Br.inflate(s, Dr.Z_NO_FLUSH)) === Dr.Z_NEED_DICT && h && (n = Br.inflateSetDictionary(this.strm, h)), n === Dr.Z_BUF_ERROR && !0 === c && (n = Dr.Z_OK, c = !1), n !== Dr.Z_STREAM_END && n !== Dr.Z_OK) return this.onEnd(n), this.ended = !0, !1;
      s.next_out && (0 !== s.avail_out && n !== Dr.Z_STREAM_END && (0 !== s.avail_in || r !== Dr.Z_FINISH && r !== Dr.Z_SYNC_FLUSH) || ("string" === this.options.to ? (i = yn.utf8border(s.output, s.next_out), o = s.next_out - i, a = yn.buf2string(s.output, i), s.next_out = o, s.avail_out = u - o, o && _.arraySet(s.output, s.output, i, o, 0), this.onData(a)) : this.onData(_.shrinkBuf(s.output, s.next_out)))), 0 === s.avail_in && 0 === s.avail_out && (c = !0);
    } while ((s.avail_in > 0 || 0 === s.avail_out) && n !== Dr.Z_STREAM_END);

    return n === Dr.Z_STREAM_END && (r = Dr.Z_FINISH), r === Dr.Z_FINISH ? (n = Br.inflateEnd(this.strm), this.onEnd(n), this.ended = !0, n === Dr.Z_OK) : r !== Dr.Z_SYNC_FLUSH || (this.onEnd(Dr.Z_OK), s.avail_out = 0, !0);
  }, Ar.prototype.onData = function (t) {
    this.chunks.push(t);
  }, Ar.prototype.onEnd = function (t) {
    t === Dr.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = _.flattenChunks(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg;
  };
  var Kr = {
    Inflate: Ar,
    inflate: Gr,
    inflateRaw: function (t, e) {
      return (e = e || {}).raw = !0, Gr(t, e);
    },
    ungzip: Gr
  },
      Wr = {};
  (0, _.assign)(Wr, Cn, Kr, Dr);

  var Xr,
      Hr = Wr,
      Lr = function Lr(t) {
    return function (t) {
      for (var e = "", n = 0; n < t.length; n++) e += String.fromCharCode(t[n]);

      return e;
    }(Hr.inflate(Q(t)));
  },
      Zr = {
    Courier: "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",
    "Courier-Bold": "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",
    "Courier-Oblique": "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",
    "Courier-BoldOblique": "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",
    Helvetica: "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",
    "Helvetica-Bold": "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",
    "Helvetica-Oblique": "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",
    "Helvetica-BoldOblique": "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",
    "Times-Roman": "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",
    "Times-Bold": "eJyFnVtzG0eShf8KA0+7EfKseJXkN9nj0Vj0yNaNEHZiHkCySWEJsmmAIA1PzH/fRqMr8+TJU9CLQv2dYqMrK/NU9Q349+jH9va2uXsYfT86+8dqOb1u9o72Tw5P9o4PTk72R89Gf2vvHt5Nb5uuwafZbbP87od2frnhq/kc+V7h09vZfI1KB8fN7Prr5jOGRj8/TOezi9d31/Ou1fNue/m32R/N5W+zh4uvo+8fFqvm2ejHr9PF9OKhWXxsNn/50x8Pzd1lc/mhvZ3eDcf1ww/tH6Pv//nd/snLZ98d7L98tv/8+fNnrw6P//Vs9LlrvJjP7prf2uXsYdbejb7/rpNB+PR1dnFz1yyXo++PO37WLJZ9s9Hz5wd/6XbUfci79mF2senIj+39erHpw95/Xfz33v6rl8fPNv++6P99tfn31fP+38P+3xd7ry/b82bv43r50Nwu936+u2gX9+1i+tBc/mVv7/V8vvdhs7fl3odm2SweO7oN4my5N917WEwvm9vp4mavvdr7ZXbXPqzvm+/+3nR/9frN3vTu8n/axd6s++Pl6nw5u5xNF7Nm+ZfucH/qPuZydnf98eJr08e/P4qPD92fTBeXRe0a/ji9//swJCcvTp6NvpSto5P9Z6PXy4tNqBed+PLw2eivjW13QX7xbPTx4fLv467tUf/fs+6/+4evtgP2j+ZhMbvoIvrPf4/GX0bfH2wi+647kuX9tAvkf55t8eHh4RY3f1zMp7fGj4+Pt/z3VduF6nzuyvNhR3er2/PNSF3fZe2ync+nC+N9NvTCfbO42CR5UV6Wz5/edtKyi08+tP4Q+jHP2v100dzNm6uaFP/Mjm+63OxxeePKi3KA89XSqAXtoqvNaf6Ir+v7r81dbt51ZdZ6Tw5evBxiP58uv+aj+bNZtJm2d02GD0+i5cPXRSPaXrWrhaCzR9F2OftDwOaxEYPb6Jjeze5EXl208/Yu42VzO4uSjcB8YwSJNr+vpvOMrxdNV8qim7+vmmVvNkV5dVjG3o/9xcHBlr02dHLyYot+yK1+zOiv+Q9/crS/v0V/8z8sqfAmo797mDon69HPuWNv8x+e5oP4xfu9cYcN+kc++nd5X7/mo/8tt3qf9/UBvONkiz7m4/qU//BzRmfCOca52ZeMJvkj/zdn33k3n900D8E3rEjPOy0WKv8dmcrL/WIqF7PZxWxxsbrNw7ba+Paym3xEjfQGFw7GjSpH9dzQURnai9zqMrcSn3yVP/E67+trDtIs7+v/8h/e5D/0Gjbrv81/KFynza3uM/o9d9vNwcpqmY/+Ie9rlQ/iMWfcU24lrHSdj+tPP4hXR55fMREODp6XrFxU2lM2HjyHbHyYzS+rk/1l+yTiHKZnnwoe+qWaJ8d+Ka+rzdoQjdb7rCaPq3m7mAm+bCp7uVgtunn8Yp1TqS+b5axfuwr/365bdFldr2adcts+6KXDRu53/A2ZQl8S52ommFhBdWs5uR64nF5fqzlty3ExRiuOzdg1i8Zr//io6N0S/noxvQdTK3963p0/NKKXHt7z6XJHhHerlQWYDUDU3e67NfbsfjlbCqnr68PXdhUWi2neD8ntI7eYPop6mF6sHtTapffyq3nzR9YqlXU7vVio9c75olEffNk+TC9Cxbk060YSA2DKAuvQD7a57EKqFqmru+vpYnU7n67Ex7TX3TrzRuxuiv2AcbkNOevCa1/3HJpnLy6vuoVeWBn6EiVOsr4Cidw/4Vf4hEP/hNvO6VZz/Ajz5qkzc43LTdEvl7OszCvL85YOtOy9hbQvZd7VZ3dW3OU9jJst5tKQ+tQcM9Cn/5g3PjXJQfXdxdHz1VE6AltIX84eZ5cihJN4ZL5iFsXhh135o8+7/mhNVWiTdX/yRWUCXc279M8LpeI4h8GOnOrB/4ZGyEaC/sBPA9KH+ElD5xFwFhLPMqmjL45eFHG48CE+ilzH14UxD7yXOi7v1AF4edRyNJqqL/Vld+xcqra3aKwQzmyVniGhm8DJE335Gj/9qCyo5u2fzd21yNwPVFF2Gqc66cmxs0h2Ze7r2pAu4oHAUFNf/fwnR85O7T59bReiV7/Sp3sYKlXwMfKTF0P7y4oRfaYP8IjFyS1c4Viu+lXOQhxvTEGPYo2TrRYTvF3NH2b387U4LuqgJ3kcjpJI3XrrYTadX86uxCnWum4N7+LneMKKZPHa2JlmO2adunRRGei7mg3WMuZdpTZ/ph3h9bduxYAX4ewUaNHeNHd4ImTmuGiuZ8u49PUSpbWXT8e5LuxsZNVVdTgf8WDHnPLCrBhaS5Hxuqyk1P+SaR+9KmvX/lJXvBBmcf7pQaxQfqwa4FxOqvvDaD5UTKapzo414XVt+bAjKysB/rNWGvzZ5gq1EalNPbx4t3mk9sm5ju2zdy5LaMbcL+uCZv4gLvg8BJN2T3xqdzhiXuKU3d2uRE/iEXmo5DrTa4FC71ef4grnxTH6eJfAiy6RxaF9TCcxNjFX5t9Tlcd+ihEHzk8l7MaOMsX6QuNnOn80XqvxX+iwSxy6qH2dzmFqKEW+OTWhS902FsrlzZfjsslT7RsDSOsgCwLPz3beHs0UOzQMqxrVqZzrP8oFomWwPsWxayGdTaibHm1lyv+xchAryvwyEF2CzC6U0f614o2Lncvdd3F8/HAr4/Zhd17v/KzXlX2+rpp0PB2wEYj7cSMWE6cvRSrTfc0pbuQC2hZkYSXge9tZCnQIdsVm5yfN2+vNeN+14mJVWzfTVZZKBnW7qlTytTwSu8ICM7nHvJK+d2pXfv3lLi+a3fNrNf7TanM78l/PRqfN4u636WyxuYv8z9Hrze3q0bPvjo//9WzY2rpHQNvjjGgwdYRv4tbWVQLCjqHwa7d15FvlEABBcgRuQxXotv4DCs4TlCFkgW2vDgW0LRxE78PWp27rlW+VmCEKvXfh8yYWz23LBsBR6D1w6D3Q0ntA1HtQrPfAhroOrLcTJGfd1r53f7zZPDR1stl87pulU8jg6AHfd5sHtlt4TuDZdy+OCl6FQ1nlkK0qIVvJkK1yyFbVkK1EyFYiZKsUssfY06dNFtjWOnRwXboECA59oEMjLGFDVMfGqZidc0UX5Y1AVNvGZYEXFarcEJW6cVXvJuaiN4kq37guf5PZA0wgIzBOblD4+4zAFwyROThXDlFUsAlDlPjGVfabmEvAJKoD47oYTOaKMIHLwoRYGwWjpxSGxlIYuosxthgThM8UDcymIOU4RVvlQ2bvMb5rCIQLmVQZgoofmVwbguRMJugheBRRAqMqaJ2Dw5ZlPPvWYB/oW4bIt4yTbzln3yrKG4HIt4xL3yoq+JYh8i3jyrdMzL5lEvmWce1bJrNvmUC+ZZx8q/D3GYFvGSLfcq58q6jgW4aoaIyrojExF41JVDTGddGYzEVjAheNCbFoCkbfKgx9qzD0LWPsWyYI3yoa+FZByreKtsqHzL5lfNcQCN8yqTIEFd8yuTYEybdM0EPwKKIEvlXQOgeHfct49i2MDZpX5ORgUSQbI5G9LMhvapxcLYrS2kIT8LfIyeSiqJwutsh2F3XyvChq44tt2P2iShYYRfLBIL6vcHDEyMkWSVTeGJqAQUZOJRpFVaexRS7WqFPFRlGXbWzDtRtVLuCoxioOGrppENBSg4C+GgU216gKhw0NwGYDV14bGqwqXWPXjeI3h1T4b9R3DWnFiWObnUOaPDmqO4b0sRZhsOjA15XAsllHMTu2E/RrpOTWKJFXB4mdGsQ3mpJLoyQ9GhqAQyMlf0ZJuTPq2ZtRJWdGSfsytmBXRo08GSVyZJDeSwpujJS8OEjKiaEB+DBSKlmUVMGinssVVSpWlHSpYgsuVNS4TFGLRQoKui5g9FzA6LiI2W9RE24LMngtUOW0IK9kV9hlUfrGkAmHRbU+ZBV3xRY7hiw5K2rVIXvUkQRPBbqWAWQ/RSm76dB9tFJD5KPGyUSds4MW5Y1A5J3GpXEWFVzTEFmmceWXJmazNImc0ri2SZPZI00ggzRO7lj4+4zAFw2RKTpXjlhUsENDVFjGVVWZmEvKJKon47qYTOZKMoHLyIRYQwWj5xWGhlcYup0xtjoThM8VDUyuIOVwRVvlQ2ZvM75rCISrmVQZgoqfmVwbguRkJugheBRRAgMraJ2Dw9ZlPPtWOVg0LmfkXC6QdYHA3mXSG8XIvVyQ9mUy+JczMjAXlIO5mi3MNfIwF7SJuc4u5grZmAvkYya8FwyczBlZGQjKy0wGM3NGpeSCqiVXczG5RtXkgi4n17meXOGCciVWlHF0NYNoawbR1xyysbkinM1EsDZjyttMXIlDZ3dzYeeQCH9zrTYkFYdzvTokyeNcqQzJo4oY2JyxtQgUG50L2enKkaHTOSOnc4GcDgR2OpPeKEZO54J0OpPB6ZyR07mgnM7V7HSukdO5oJ3OdXY6V8jpXCCnM+G9YOB0zsjpQFBOZzI4nTMqKxdUWbmay8o1KisXdFm5zmXlCpeVK7GsjKPTGUSnM4hO55CdzhXhdCaC0xlTTmfiShw6O50LO4dEOJ1rtSGpOJ3r1SFJTudKZUgeVcTA6YxtnO6QAmVOlwTo9qAthi9bcTsphFyuYPI4w+xwg/AmE3K3gqW3DSI4WyHkawUrVyta9rSikKMVrP2sqOxmhZOXFUxONuD3iYCLFUIeZlg52CCCfxVCpVKwKpSi5TIpChVJwbpEisoFUjiXR+GxOAaKbjUg9KoBoVMVxD5VuHCpQQKPGohyqEFapUNldyp4R8iFMxVFh7ziSkWthDw5UuEy5I85MuBFA1mngPCKq+C83hpqA23IEPmQcTIi5+xERXkjEHmRcWlGRQU3MkR2ZFz5kYnZkEwiRzKuLclk9iQTyJSMkysV/j4j8CVDZEzOlTMVFazJEBWKcVUpJuZSMYlqxbguFpO5WkzgcjEh1kvB6FGFoUkVhi5ljG3KBOFTRQOjKkg5VdFW+ZDZq4zvGgLhViZVhqDiVybXhiA5lgl6CB5FlMC0Clrn4LBtGU++9UNHX2/WUs9ty5ZejorHAAoxBY7rM6clkoAsSsAsQMCG2AApBe/ocx8p2/L0MxQOF3hISKPlcAHRmINiHQFmHQE2dGRL/lrifmxbFndHFndHMe7OMe5OLe6OPO7OPO7OStydWNwNbUziyPozDluTuGWziyOcO4wO367XecEWDf6MwTJEETNOYTOuYmdiDqBJFEXjHEoTOJ4mxKAapsgWDuEtaJzRRCCKtvEc8iKluPfveMa4F8RxL5zjXriMexFF3IvEcS88xb0IKe5FoLgXzHEfOMZ9QOOMJgJx3AsXcR8kivvfhpC/8q2yT0Al0IBCjIHDJwMtkQVkQQVm8QQ2hBJIiaKjqc3l/VbpAaDSA0ChB8ChB0BLDwBZD4BZD4ANPQBSeuBo+52gXZ8OCol6k/vUlKUkIt2nRvYJXk4OOHe1EV1tRFfbuJWPua0cYCsPsM1H0tK8CIo4xras4QHl2FtJ7G/nyrdhjfI2r1He5jXK28oa5a1co7zNa5S3Yo3yVqxR3qY1ytu8Rnk71MT+sW3ZGsVR6QGguGxxjssWp7ZsceSLE2e+OHFWFidOSg8c0VbugVUAIt2DRvYgVADg3LFGdKwRHWvjVj7mtnKArTzANh8JVwAo4hitAgDlSNOksEGr0GCVO7KqdGQlO7LKHeHTGlBER1Yi2KuQRaej7XWGbQn0W7FseyRqtOepRnsaa7RHdNSgUPX2rIQfUCzV02D1p9nqT7PVn1as/lRa/am2+tNs9afC6k+F1Z8Gqz/NVn9asfpTafWn2epPq1Z/Kqz+NFv9abb605DVpzmrTytZfSqz+jRn9Wk1q09FVp+KrD6VWb054z7yrXjhrEfpslj4KpNQFyRQiZCqqoWa5MKhBlRDpOpyokZcWSRTkZFK9RZVSA8SKKNJpYJkVaQ+NclVwA1yxVILKhlSuUZI5pKOclsVdoZF1jw1+VbH2QlI1aZAjXb3na2CVHKNqIKBkEBeQqqyFWqSHYYakNmQqn2HGrEFkcxuRHI0piiCR5FAdkVqcq5fRsOF8wPbsmvmgOLlchPOwtY4bE3ilp3nOsKTV6Pxy4fLGsmUgoeTh1+GWBxbZywAgPAi8JaGt/YPIqL+197aj+pZRuOMJgJRYNTr7CRVQiTfbC9xwhe6KQYcMfVC9yDFbILgkUAhZFUFMrY5qwnjmjCpChRgUnOYY4NKsEUjDnmuWBlFDn+9YocGg59i+A1R4J2rkBf1LKNxRhOBKLTGc1CLVAlnkDmQRVznGHDwjKewvRttLzNsP7DfssnVkV24chQnWec4szq16dSRT4/OfD3grFy4cmJz4xaVwnwtEPXFOHXIuOqViblrJlH/jHMnTeCemhC7a5j6jDcIGFGf0w0C5qrP6gYBS9TnfIOABe4z3yBgzH0ODvC6KnD/o8pRiKqMRWwiIhIbcFyimqIT5RSjKFOkokjxKvc/XwtEMTJO0TGu4mJijohJFAvjHAUTuP8mxJ4bjn3+dejukW/FmxO/YicBxcc9nKdbGL9irwD5AxzOrC/Ahm4AsSc5DH2KW2XyQhTmLRc2U9axbY3D1pfQchI0m7EApUcEfkWjPSJEYU5Gy1wFXBktSxT6bLQs8CCw0TKm4cAVMSMamMqKmNSzHM9xRl/yH05yKx42tUgepPCmOAxg5DSKUaShjKIaz9giD2rUaWSjyMMbVR7jqMaBjhqNdvrCC8lp3Hd94YVqclYZlXGFf6nsZ1Jpz1lR/dKHQYeXXiExkFJaoERJgZJKCdRzQqBK6YASJwNqnAqoxURAhdKA3rMXlFKg/p59bnAmIz+W9Ivcw0S25WGvvHs+qOV1QRhxQzTcxmmsjauBNjGPskk0xMZ5fE3gwTUhjqxhGlZ8R5gRDWjlHWFSz3I8xxl9yX84ya14+NT7tIMUL7LhELJCI8kyDSjLaly5TR5ebkGjzDIPNus85qzHoWeVMoDkT3WF8iHJKi2o0Vl1xMZV5Ut1b5Pq33DmsJwTyF6hg9RxRknjAqWLCypRXM0p4holhwucFq5wQrgSU8E5JUF4wzYxGvjaG7Ysn4nojgX7Iv52ItrxoMq3UAetXN2B0TREg2mcxtK4GkoT80iaRANpnMfRBB5GE+IoGqZBxKt9jGgIK1f7SD3L8Rxn9CX/4SS34sFTFwAHCU/SjwjR2KWTdOZq7NRJOks0dvkknQUeOz5JZ0xjh28mMKKxq7yZQOpZjuc4oy/5Dye5FY+deop/K/02DNv2mfLfcMQAlcECFMYJeHpO/TccHUA2MMBsTIANwwGkjISj/gkt648/oeXIntByJB4s73l6sLyn8cHyHtHj4z2jx8d7Fh4f74k9N2QoPrW4IX5BqN+KF7t6ZHfOAeVLXD1PV7e2FG+MO47Xu3pEl7p6Rle5NqyNW/mY28oBtvIA23wk6a61K+IY/f60o3ixbYP4qcX3I3wvod+KGdUjkT49T+nT05g+PZLvJfQKJVbPKLF6FhLr/Sg9ffZhhM+r9FvxIZUeiSdTep4eR+lpfAalR/LBk16hp016Fh8x6VF8ruRDcNUP2VA/1Lz0wzBwvp/Pub+fK/39LPv7OfeXBw4U0d/P9NTpBxg4J735H5etje8f2tYkbsVH+D+Qqw+0XESD0TdEITGu4mJiDo5JFCHjOkwmc6xMoAQxTlmSL2o6onzZeVHT1M9535w+xnfFSiSSSZVYVVLK5FqsUnKZEDMsXLeNGTLOSTMRiLJOXaQdpHLnC1LPEIXTuAqniTmcJlE4jetwmszhNIFSzzilXuGQeoYo9Zyr1Cvq57xvTj3ju2IlUs+kSqwqqWdyLVYp9UyIqYdvRB3HDBnnpJkIRKmn3ogqUuVJTRY4tN98UpObiDDvelKT1UrIdz6pyTKn6q4nNUnFtNXP9lRUmcKhzefaZ6Z0juq3Y65SOzbYGfNamsdGu2OeUz7KlPjpoadjlaXjWvpOqgIXRPWhp22DbrjhxbR+y57tcRRfTOuReDGt5+nFtJ7GF9N6RC+m9YxeTOtZeDGtJ/HFtE9DNe+/tC1bkDuKC3LnuCB3agtyR7wgd8UX5M7sdRBHdlpnyE/p+q34TFWP7EsgHMWX3p3jybtTe9Xdkb/G7szj7qzE3Unpgf/hRTuHs/Qt2Z6qOoldanIv7VQVUcgu57KX4VQVGufON6Lzjej81/X91yYe0iwM3Syn2MxPwoy1YRdt7ntb6Sie8gK1MnJEeQmKF5izkpeArJoM2YmiF9giDOkiXgXqURlERGFKcGHZ3M5y5qzCMaxyrFaVWK1krFY5VvzsNigiViuRF6tUFE+hD/6dV/2WebGj9D1XZVpFF04PujEnP9YPurGYnTk96MacPTo/6MZCdOv0oBtx8O10GsBcObg6DWCJvLx2GsAyu3o6DWBO/l44mLwhym3jZPfGleebmC3RJDJA4+yCJnDKmxDz3jDNCIVTcTsOc0PBIhI8SxinqcK5sAYT6xFSM4dpleilOcSEWvR4Nil8lrOF5xXjPLkUoc275WnG+K4giQnHJHJS49pOTWZPNYEmIeM0ExXO01Hhi5xKPDEZp9nJuZqiiirmqSKt8mHyjGV8V9jF3GVSJeyVWczkWtjTfGaCLu6n3GuY3gzRHGdcTHTp6eYyoPrpZq3y1Lfj6WbdREyD+ulmraYpsfJ0s5ZpetRPN0sVp0p9wUKrctqsXrDQDXgK3XnBQjdK06m+YKFVnlqDihNsFLggo8qTbVTllBubiGklNuAJJKppGolyqtYoU81GkafloLKjkRin6Pgya+0D03QdVZ60SVX2GJt8K9JyGo8tdo5FntKjvHss0vQe1Fktb9NUH9U04Qe5rX1cmvyj+u1gq4VAbMDzUlQrs1NslOaoKPMCIaq8TAhqWiwEdVFL7bRwiCovH0iVi4jQRi0lQoNVrUNpWRHVbw+oWmLEBjsHtLbciI12D2heekR5l5k91SKGi5Eo8JIkqmlh8nlYjZw8t62yB0BlugAUYg8cPgFoiTIgixowCxWwIT5ASg04Ks59bMRKYUD4cssJIepwermFueq6ermFJQpCfrmFBQ4Hv9zCmAJTOEWnYA5ReofkRHEKln6HRIoqbNV3SKROAay8QyJVDqV8h0RqFNQgUmSDxuGl9zBOMqXQqvcwhKTCWnkPQ6gUUvkehtA4nOI9DKFQKEGiQILCYcQ3G04IUQDTmw3MVejUmw0sUdDymw0scLj4zQbGFKjCKUoFc4jECwQnWqGA1V4gqMgqfDteIKi0oGBWXyCo6BzaygsEFZUCTTLFm1QOe3js/oQZhTo/dp8EFV752H3SKKTisfukcBjTY/eJU+hMoKAZ53DZz19AuJxRuFygcLmgwuVqDpdrFC4XOFyucLhcieFyTuEygcLlv8NC4Rq+pR+CVQiFqmAKVMEqTEXLQSoKhahgDlDhHJ7CY3AKpdAMmAJTfvohhuVsCMn+9ob+GcYDmT3kDCxeHAIBLwkBtgtBwPzKDkA/ewVYnkgFZFd2nG1+DOHQema/gwAonm+54L9+0G/ZywWOxG8e9Dx9O1JP4y8d9Ej+yEGv0O8b9Cz+tEGP4q8abJBfv+q34ulej+ySpyNx2tfzdK7X03iC1yM6YesZnaX1LJya9SSefp+N/IoSkm3i7h+8Kqgf5ec2Vv41o8DKaXZg8UlqF8Kj1IDxq0aB+zPWzuBRaofwLLVBu8SzPRPdoM11ncMXtmXnnI7iY0vO8QTUqT2g5MgfOHLmTxkZa+OxtiKybS2KrY5iK6KVvhAVJBVI/0pUYP5ugzF/wN5rAi+XeFat4lauFHU1pOeyLFa5LPTFjl4RBcOXNXoWCmZcvHn7yP04eDMw82ZgcchAwCEDbEMGzMcFoCc4wOLNgGysnPU3IXwrvvgwTg4LPL34MEaHBSRffBgHhwXmOWYovj4zHhz25Ni2bLHgyBYKjuIiwTkuEJza4sCRLwyc+aLAWVkQOLHFgKFSC8dA8JWg8WCw/hdN7qXZKyLdy0b2Mngr4Nz5RnS+EZ03X9262XiE18vHo3SRfDzKV8bHgwW+sL2aAwKKb6Q5xzfSnNobaY4oL0Hxd9WclbwEZC+mGfJr1TaIaHw+2P6jOGM0PkDip3DGZHxA4w/gjIXxgUI/ezMOxgcs/NjNhmwu0J74Vlyj9ygttifFL/d90zIAmPklsOg8IKD1ADbvAeYWA9DzDWDxS0BmPM76p8yPbSs+mztJfgk8Pag7Qb8ExI8uu0I/pzFBvwQUfyxjMvjlS98qRw2oxB9Q6Ahw6AjQ0hFAdrjALPTAhsgDKT1wFNcOk+SXk8Ev9/f3bdPzzJktSJHFPHMBrQQorkehtVmMIzcSZ5B8BumG42SEq9HJKK1GJ6O8cJwMrgm7bUUE2lpvw8IRsFeVM57SQYKCc2iTOjAvLmNkn5ORWjdORrhunIzSunGS7BN4WjdORmndOBH2CQqtGyejvG6cjHjdOLH7GeAn6WZNEtgW9e2apAqDTDdskpCsMt+ySQqZZrppwwLYZ35BkbgyUvmCIklkqdUXFElmc80vKBInmy0cvNYQGa5xcl3jynpNzP5rEpmwcXZiE9iOTYiebJiM2W/GhQrle3SEseqNsVWZwI7tgjIyU7N3uyQM3ERyceNs5SYkPy8Km3rh4OyGyN6Ns8cXoRWfl9zehJ2RUr5vGpu/CZUZwPQ0DZjCc4EJPCGkW7oURzE1FGklEE0SxtVMYWKeLkyiOcO4njhM5tnDBJ5CTIjzCN1xLQarbrkqjSeU6k1X1UBMK+q2q9LS5CJvvCqRphh161VoMNEgpbkGJTXdoJ5nHFRp0kFJzzvYgqce1Gj2QYkmIJBgDkJK0xBKNBOhpCYj1PN8hCpNSSjxrIQaT0yoxbkJFZqewr34YBTiLn1W0IwQs8+ixrNV0JQNY4M8ZwVVTFuo08yFEk9eqKX5C0SewkCCWQwpTWQo8VwGWqs/Ps1oqH0rmmpeQ5mnNtQqsxs2SRMcijzHocbTnHosJIdbTHagrjSlKQ8lNeuhnic+VGnuQ0lPf9iCZ0DUeBJELcyDXcX2P7u8/a2Z4myIBkdDFB5lAg6fArQ8iQLI7vsDs5vbwOC37AeCPxW9Refd1vmoXNU+x+E/MrQZ2APfKgMKSHzD0jkNIND4DUvnYsBAoW9YOg8DBCx8zfn50Mntb90M5pp+K+Ioq0XaXiTtwtA/KLrdzeXF8COsjprwOQ0mwIDKiyuIOAEGTglQqBsuYsyLAYW8GFjIiy27gunGSfcx82a5nNlMfjXY64FttXHL0sCR+P2oKzJBoPGXoq6E5YFCvwl1hQYHKP760xXms/eV8mB7afmKUmCbAdd5D9elpplXnhjfquX3RmDL5hVHOFv0dFaGrj/GWUiwLcrZtOWcTVsa0maLYtpsWUybnt2UtYhvxft0N2HlASjfuruhdQbScJ/dcLyjdxOWE8DoC8tuyqx+bFsx6Dd5DneeBuMmzNiO5G933cT52Vn8Sc+bMBsbWsetfNQ5VW7yWzVDFCpv1WiVRnDXWzW6SR7XHW/V6BY02rW3arTMOZDfcJHx4szY9YaLbvKtEeHU2f2Gi27ECVV5w0WrlGb5vQct7AxMzsNiJdv1wx1a1oBwTiwo7BQEXLJsURtsqS3z8XYrG6QhaFXxzMihvfRSpNA2O6whaEUPvD5WFfgbYdTOoF350tzHjKAVBpaQtyqTWFo6bWfHKEet/MW8uSqPSm/3yUK0I1bjd6iyKuyImyQ74gbRbFgls2GZzIbl8GWZLMYnSnpVB2tHpHaE6Vsx2h2gHdHZFZpdcakH5dsRgf9/d3Jo6pByI//60YiHFbvSQsqKXS70ny3i2U/UytwptfB0qWjhD+5FHC9mRK18oNS6mXg+n9bU+LCraHE/vegv5Bwl6dE60AVpdLEZsJe2FZ+s6ZEtKQDZwQEM18AWZQ1jepN33eRd0xLFOeY5UFyMOI6vpi/issMZPTO0YZ7a/VYszB7F0LtATy1tkM/0/VaciXtkAQAU9+9CnP8XZTVkh97mALeVaLYymm0OW1rWuCIC2sYX9hdh1WLoPoTNT7SeG/s9tPcprlQvJq0h6r1xyjHnnMP6jqNhsW9O6Xy/kbkYDnW3MUk5zdPNRuY8PuJmYxSuc5w5/43LIkg3LYdKKBwS3RDVhHEqDOeqOkylEgl3OmNnuVgq9zlJrA8R1071JifJtVHiUsp3OCO/z8OQKqsIv+c/hxqz72XyVoYoaMYp351zjfGXPg01hl/6RC25xtKXPiUuBlB96VOSco2lL31izqOXv/SJhOscZ64x47LG0rdHDTVWONSMIaox41RjzlWNmUo1hl85RZ3lGtNfOcVifYi4xmpfOcVybZS4xtJXThG/z8OQaqwIv+c/xxqLX68CbaPAAYwqVwCpqfbkd7qUCsxXn9RfpWqsXH3Sqhr2+tUn3UBUaeXqk1RTLtSuPin5ujaCqYajqitZf11MqeegYpVGgWs7qlzhpMo6j2242vPVOBWoVPm7rsbJJt9KhOQFu6/GyUa7cyG5Q+VqnFLva8Oc/SLIv9d26N4xnNj1Fxm2l2qMlKATtq+0iji+HBA1fEEgKvaSQMT+OkDk/kpA5OW1gEjtG6oC/jQqr3MasRNnwuIV0CJuvk37KOx3nNpM0mdPdEwnKUDdAMFPCvVb8XpPj6JN9Ehc3+l5uq7T03g9p0d0HadndP2mZ+G6TU/i9ZpHmBS8T1Fvcp/ojsNjNnrnsk/ihsJj8HFHoqt8v+Cx2JJv5WPmFx+NywNs85Hktx5NEcfYxvfRHoN9GDJreNGjpzQcT6FrT7lrT5WuPcmuPeWuPVW79iS69pS79pS79pS7tk5dW4dMW+dMW+dMW1cybS0zba0zbZ0zbS0ybS0ybT3Ce+prHA5A4p76moYDaLynvhbDAQrdU1/jcACK99TXYjj4wscwJuHCR2zJo5MvfDAX4yQvfLCURyxf+CDOYycufEQBRjFdHmCuxlNdHmCJRrZ2eYBlHuN0eYA5jXa6FjAMuXh2cRh1fnYxteexl08uCklkQOW5RaXmPFCPLQqJs0E/tpg0yAn1MKGQVGZUHiUUKuXHjgcJRQvOEvUYoZAoV9RDhF26/Os//w8s8zdF",
    "Times-Italic": "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",
    "Times-BoldItalic": "eJyFnV9TG0myxb8K0U/3RjC7NgZj5o0ZZnYGz5pZGyH3bsyDEA3oImhWfxCajf3ut1Xqyjx5Mkt+cbh/p9RdlZV1qrrVJf5T/dg+PjZPi+r76urvy/nortk7PPpwfLh39P7DyUm1X/3cPi0+jR6brsDl5LGZf/dDO735dTGaTsYbdTmdorq3UfdUHj1Opmss0MFhM7m731xwU7Y73pY+fbqbdqW+e3vUkfnPk9fm5vfJYnxffb+YLZv96sf70Ww0XjSzL83msz+9Lpqnm+bmc/s4euqr+cMP7Wv1/b++O3jzZv+7g7cf9k9O3u+fHLz9Y78adGVn08lT83s7nywm7dPmSl0xFS7vJ+OHp2Y+r74/6vhVM5unYtWbNwd/efPmTXeNT+1iMt605Mf2eT3bNGLvf8b/u/f25MPR/ubf4/Tvyebfkzfp33fp3+O905v2utn7sp4vmsf53q9P43b23M5Gi+bmL3t7p9Pp3ufN2eZ7n5t5M3vp6DaYk/neaG8xG900j6PZw157u/fb5KldrJ+b735puk+d/m1v9HTz13a2N+k+PF9ezyc3k9Fs0sz/0lX3p+4yN5Onuy/j+yZ1QKrFl0X3kdHsJqtdwR9Hz7/0ffL+/cl+9TUfHb4/2K9O5+NNpGed+OHdfnXWyHEX4+P96svi5pdhV/Yg/feq++/bg7fb/vp7s5hNxl1E//Wfavi1+v5gE9lPXU3mz6MukP/d3+J3XcwSbl7H09Gj8KOjoy3/97LtQnU9VeVNf6Kn5eP1pqfunrx2006no5nwD+/ebflzMxtvMj4Lx8cftsLosZPmXXi0ZvkzqQapy732PJo1T9PmtiTZj0n1RvPNGecPqhz3yvN0ORcqMRt3A3XkL3G/fr5vnnzxrimTVltykBs5n47m9742fzaz1tP2qfFwsQpKLu5nTVD2tl3OAjp5CcrOJ68BbF6aoG+bOKZPE6iwhGjcTtsnj+fN48RK0gPTjQ842vx7OZp6fDdrupEcNPPfy2aevEZT8KDve637+/fHW3bq0Q8e/ahpe9Cf7MyX+smjn/0H/+aHwC9+UP7qG3buT/9R0du3W/Sbtjuf6+++Ep88uvDn+t2X+oevxGewjvdb9MWf69Kfa+DPdeVrP/SlvvrT1x790yffdTeZPTQLYxsyRq87zY5T/hx5yrF4yngyGU9m4+Wj77XlxrXn3dQTDJHkb6Yy6lMeXQs6PDzsx1jgv75UcOVb/8E73433PkgTj/7Pn+vBl9IhLGn/6K8YmE5ge8/BqPdDaObR3Ndr4Sux9CF88Um48pV49R9c+0r8qejwg+aXTYSDg9zrMJna8ruycTGZ3hSn+pt2FcTZzM46EyzSQk2T421u/+1mYYg+K59ZR3PH7bSdTQI+bwpnGS9n3TQ+XvsuS8NmPklL18D+t6uWeFjdLSed8tgu4pXDRk4n/oZMoc+JczsJWLB+6lZy4XLgZnR3F01pW45LMVpwbPqumTU3/qPdWmh0Nxs9g6nlj153dxFN0EoN7/VoviPCu9XC+ks6wOrdXUGOzXQ6eZ5P5oHUtXVx3y7NWtFN+ya5tedmo5fABkfj5SJauiQvv502r16jkZXx42g8i5Y717MmuvBNuxiNzYhTadL1JAZAlBmOQ61sc9OFNFqjLp/uRrPl43S0DC7T3nXLzIfgdCNsB/TLo8nZk2xwp7rqOXjf53w7u7ntlnlmXagLFDvH6vrDcrnAhV7gncwJs5vHzueWU7yCnGmkTDzjZjPk5/Ng+poW1uZtoZ5tkPTd6OxuiLush16TlZzrUJ2Ybf7p5G+zRiemsEv1dLbvdG3kaiCTxc3kZXITdFJta6bL5WBoaLXth3SdF3xIJ0gagzJVpzsvGiTQVH9KvZ4ZKIp9GKTmNBr0M9RD0hP0Ab0HcBfRO4bOIeAWxN5iUkOPD4+z2D/0CC5FnqOrQpsH2so4Lp+iCujwKOWotVRd50dn0xup0tmsrUI4vVFqhphmAidH1MWrvfrhSR+waftn83QXXP6zvYTew0WN1OTYOUgCUYcXTyOylrUVga6mturdj4+c9tF9OwtadUFX1zAURsEXcok32WwLYRvQBTRidmozjzfmy7TGmQX1pRSUKJY42Wo2wcfldDF5nq6DelEDNcltd+RE6lZbi8loejO5vfV9tS5bwyd7HU3YXcny08402zHrlKVxoaOfSjZIHQqeEo/NX+lE+PCtWzDgEzi5AZq1D80T3gaJOc6au8ncLnx1iNLKS6djPy7kXmTZjWpzN6LBphWkDMyCobU8lmRcFlLqn2Tahyd55Zqec9mnYNLKnxb3vq4/Fg1wGvnWu7xsWxRMpinOjqVZ8LS0fNiRlYUA/1kaGqVKXZR6pDT1lDx3XrpyeRxf7FyW8IyZ1wXNdBE87lkYk1ZPXLU7HDFY6b3PJhe0xNZIQxWuM3UsUOj1PtWucI6P0Me7BJ51iQxVk2nE3cJ8OMj5OgonpI/hIkPuMGzH6T2MfKkTmWJ5ofFrITV/LY3x32j+y3HoonY/msKztzzIN7cm9Jxb+iJyefFlu2zSVPtGB9I6SILA87Pc31gzxQb13Rr16iic67+E613J4PgWRzKss4noG4+2MOX/WKjEkjL/UOz8ZjKOjPasMKHNdrbmk+0frW5huft5d17vXFqfFs55WjTp+HbgovDs8M9g4tSlSGG6LznFQ9iUN9mrzEpAz7ZzKNgq6PPdnVeatneb/n5qg0dVrTdTSR8v5QzqTlUYyXfhTYM8X4GZXGNeSN+ncB6H7w/dFKGeXxrjPy0330X+sV99bGZPv48ms803yP+qTjdfVVf7370/+mO/P9q6h0HbelrUmzrCv22O3sjR1lUMwoahcNEdHelRrgIgSA7DpasM3Y5/g4zzGKUPmWHbp0MGbQcOon9sjqT1l/YoxwyRab0KA3PWgW/9oND6Qdj6gW/9oNj6QdD6vPAzLNkJkqvu6ETaMOyOuqk4H9bd4bEe5SYBgqorhVcCOnyY8bI7eieFlvlsgEyAgMNVgOYAAaIAgSIBAiYBAtYHSMmLacPKHK3tkcRHEcZnS/tCOF4F0aAVTiNXOQ/frMAYFkQDWXg4mrMKQ1oQZbbwKL1F9DkuEiW68DjbReaUF4FGvXAa+pnD+M/oMkDkBMojO8jqwF+OjUH4rvAFFiFSIXwFsxC5FD5nGyJY78gYDCQjdJHMwEoEkZ8I96aSpchZsgb2Iog8RnhkNCJ6txGJLEd47Dsis/mIwA4kgrWhjF98q1cerQNE1iTc+1NvE+hPgsifhJM/KWd/ygr4kyDyJ+GhP2UV/EkQDTDh0QAT0Q8wkWiACY8HmMg8wEQgfxJO/pQ5+FNGlwEif1Ie+VNWB/5y7E/Cd4Uv8CeRCuEr+JPIpfA5fxLB+lPG4E8ZoT9lBv4kiPxJuPenLEX+lDXwJ0HkT8IjfxLR+5NI5E/CY38Smf1JBPYnEaw/ZfziW73yaB0g8ifh3p8wNGhSlpNTWZHsikT2LCODcVlO7mXF0MJMEfAxy2k0WjEakraEH5dWp8FpxXiE2jI8TK1KVmdF8jsjgukZflniZH8kRh5oigwK9WA3tOI34x/4otV3xb/gkLbMzvg7r7SqNUyjgWsajtZpBPBPy8lEreid1OiRnZoC4KmWk7FaMXJXW8JbrNXJZ60Ym60tw45rVbZdq1rvNdpLIU6rAl+XOPmxFb0pK0FLRkqGjBLZsZHYjEEEK0ZKRoxSaMNQAEwYKVkASpEBoO6HP6o0+FGKhz6W4IGPGtkuSmS6IIHlAr2MKdmtkSKzhQKD8OpstCh9I8qByaJajnLBYLHEjig7c0XNWisoYKxA0VYBg6kiJUtFyRsqqJGdggxmipSsFKXISFH3NooqmShKsYViCTZQ1Ng+UbPmCcpLGJNVSNcxJdNEyVtm33r0S0FklsLJKZWzTWYFPFIQGaTw0B2zCtYoiEas8Gi4iujHqkg0UIXHo1RkHqIikAsKJwvMHPwvo8sAkfMpj2wvqwN/OTY84bvCF1idSIXwFUxO5FL4nL2JYL0tYzC2jNDVMgNLE0R+JtybWZYiJ8sa2Jgg8jDhkYGJ6N1LJLIu4bFvicymJQI7lgjWrjJ+8a1eebQOEFmUcO9Pua5oUMrIoVQgiwKBPUokMCll5FIqhDYlMviUMhppKkRDTVU/1lSjwaZCPNpU5+GmCtmVCuRXIoBhCbuMGFkWCJFniTwIrsmupcLOWAa+pVoplgXnUr0YS+ddqljzEg7uJQztSyD4lzIyMBW8g4kWWZiI4GHKyMRUiFxMVW9jqpGPqRAbmersZKqwlalivUz4S9D+VcDWESM/U8EbWq4YGpoyMjQVyNBAYEMTCQxNGRmaCqGhiQyGpowGoQrRIFTVD0LVaBCqEA9C1XkQqkKGpgIZmghgaMIuI0aGBkJkaCIPgmuyoamwM5aBoalWimXB0FQvxtIZmirW0ISDoQlDQxMIhqaMDE0Fb2iiRYYmIhiaMjI0FSJDU9UbmmpkaCrEhqY6G5oqbGiqWEMT/hK0fxWwjaG9YyYxYQFbvdVm/W+UqANlQmaWMVmZYDayXgAby4RMLOPQwnoRDCwTGnIZRwMua364ZYUGW8bxUMsqD7TMybIyJsPqMdhVTy49IasSHBlVLw7cldikMt4RscCgshJHrGBOWS1EzBlT5taWegqm1BO0pB6BIWVCdpSxN6Neiayol8CIMiEbyjgyoax5C8oKGVDGsf1klc0nc7aezK3x9PTFtXXlyNoTWkFl7NdP/SBAvxFEhiOcHEc5W05WwHMEkekID10nq2A7gmgUCY+GkYh+HIlEA0l4PJJE5qEkArmPcLKfzMF/MroMEDmQ8siCsjrwl2MTEr4rfIENiVQIX8GIRC6Fz1mRCNaLMgYzygjdKDOwI0HkR8K9IWUpcqSsgSUJIk8SHpmSiN6VRCJbEh77kshsTCKwM4lgrSnjF9/qlUfrAJE9CXf+9ENHT7ujgyM5yp8FlL0EkAkpcLgC0BxIQBIkYBIfYH1ogOSBrWiQMlCOcgsAmeoCh+oCzdUFRF0OijQEmDQEWN+QLTkzcT/zcT/zcT8rxP0sjPuZj/tZEPezIO5nLu5nPu5nvRkcSXs2PnAoR7XRamuDZzTue9qbLkZGEIVHOMVIeBQoEX20RKKQCee4icDBE8FGUDCFMfMrHwYIaEa1L8WhFR7EN21itPHNiOObOcc38zC+WQzimyWOb+Yuvllw8c0CxTdjjm/Pr3wYML49qn0pF9/MXXx/7kPbT4Y/Y1iR5ZAiI4NSwTiUYrUoZeBECsGKFIoXKcphAzaSuT4d5aYAyi0BZBoCHNoBNDcDkLQCmDQCWN8GILkJira/cdk16uAkI2pjE3RQkxd/hhU6qIk7CHbdWh50XBN1XBN13EQyNh3lugMy1QQOtQSaKwNI6gJMqqKsldVaOrJru4RMTYC75V6iuSaAaMoFReoILN8GAMr5oKj/EVOTEDMzfmd2tCck9wKA7G1AEs6Ns557Uz33fnpesNLz0EXPvYGeB955HtjmuXPMc2+W5/2gP5T2jGyKneOgBxRk3TkNeqA2687NoAdGWXcOgx5IboEiGfRCrN74NsmIRxS3qQnbZIY7YN/UJmhqEzS1tUe+zm2hgm1YwdbXhAcYKEEdZYAB8rHXASZoaQosfUOWhYYsw4YsfUP4fgyUoCHLINhLk1cfq+2TkHd6ZO8sEwpuKhN395OJ2lvJhMK7yKTQDWRiOfyAcvgV6VD+iIkOKCc6Im8/HynRkUKiA7au9NEkOjBypY99osORr3NbqGAbVrD1NeFEByWooyQ6IGuTH/usPpC4S1YDsrVWjrVWKrVWxLVWRWutTCOrLPu9kLU98rVe+9qZqQ7HBQk0REiNRgsV8QOHCtAYIjUeTlSIRxbJNMhIpfFmVUgPEiijSaUByWqQ+lTEjwIu4EcslaAhQyqPEZJ5SFu5LQo7wxKOeSryrYazE5AamwIV2t12tgpSyTWsuiyNMPYSUiNboSLfGsNsNqTGvkOF2IJIZjci2RqTFddFYWdgvHP9Vm0f7b/9IEdyYwfIrORV2DwveHecj4bmqLZH4nyK0MuEmsfZ268OfusbrIXW/mxrfzbcc9/X2e25dzxqKW5Ip3MPPaoDRPWN9qOTFMUBt2FTcY5ItA27l2xKQHBIoBCxGgXKlrkqXXNYEuqiQM0j9VuNjILpB1T4UQ5seUD1BXq7w8AKopAqj4KZ1St/7qFHdYCo6sLLlY4ClbW1L87BEe6u8Kna3vdvlwXpyK6FEsp3zYCCNVHibiGUqF39JESrmcToO6bEzNdLidilzKc8pE4DRG0RTg0SHrVKRN80kah9wrmRInBLRbDNFUxtxi8bGFGb3ZcNzKM2R182sERt9l82sMBt5i8bGHObzQg/LQrcfqtyFKwaxsIWCSJiC3BcrOqiY2UXIytTpKxI8cpfnJ4GiGIknKIjPIqLiD4iIlEshHMUROD2i2BbLti2+aJv7qEe2Uc2F9hIQMFTnAtqGlD7FOfCNAgYPau5gGYAsc+hLvoZCo7s470LPy+poN8TXfSzkR59NSVro9HXRBdV9A3RBRrtISEKszNa5lHAI6NliULvjZYF7gQ2WsbUHbhWZUQdU1irknrl4zn06Kv/YO1LcbdFy9deMtu5oQMtp160InWlFaP+tCV8p1qdetaK3L1W5T62qu1oq1Fvux+eCDn1+64fnoiKXBV6ZVjgXwvnqQvlOSuKv7/Q67BpFRIDKaUFSpQUKEUpgbpPCFQpHVDiZECNUwE1mwioUBrQZviAUgqUN8P7Aldh5Ich/RqeoQ7LcrcX9oj3at4GCD0uiLpbOPW18KijRfS9LBJ1sXDuXxG4c0WwPSuYuhX3+DKiDi3s8SX1ysdz6NFX/8Hal+Lui7bE9pJ9xoVdyAr1JMvUoSxH/cplfPdyCepllrmzWec+Z912PauUASRflhXKBydHaUGFroo9NiwqX4tnq4uf4cxh2SeQ7JmD1FFGSaMCpYsKUaKo6lNENUoOFTgtVOGEUMWmgnJKArNz1jHq+NLOWZavgugOA/Y1+GwdlONODTeY9lp+ugO9KYg6Uzj1pfCoK0X0PSkSdaRw7kcRuBtFsL0omDoRn+Yxoi4sPM0j9crHc+jRV//B2pfizose8PUS3qQfEqK+czfpzKO+i27SWaK+8zfpLHDf8U06Y+o73LrAiPqusHWB1Csfz6FHX/0Ha1+K+y56038r/d5324cjOcqfBZQ7C5DpJ+BwBaC5dwBJxwCTPgHWdweQ3BOK9JWpdGRzLiGbbgkFmZa4S7JEbX4lRKmVGGVVYiahErG5tEH0nuQGNaaTGtulCdnX4rbIb2pJPOx488U0YLvDJSHavZIYbVzZsM2XzUfSLfINMyBbQeVYQaVSE0W8zUYVraMy2ZukSLYlCeKXEv9R4Y6GdGR3NCQU7GhI3O1oSNTuaEgo3NGQFNrRkBjtaEjM7Gj4XG1fDjnUIzsQEgqyPnGX9YnarE8ofNUrKTQeErPvrCVkk/9z76Hv9CinNSLjnCoMzHkGvr2DQnsHYXsHvr3cS6AE7R3Q+P8MvaRkY/Xb7+E+9y6vR7U9krxThPm1pfmRGfS+IAqJ8CguIvrgiEQREh6HSWSOlQiUIMIpS/AR5jtClC+FR5ikDvy5OX2E74pVkEgiFWJVSCmRS7FyySWCzTB8SksZMvSoDhBlXfRItpfy91yQeoIonMKjcIrowykShVN4HE6ROZwiUOoJp9TLHFJPEKWe8ij1sjrw5+bUE74rVkHqiVSIVSH1RC7FyqWeCDb1cC8VZcjQozpAlHrRXqosudcicyXi1yJjNQxw8bXIuAAHe+drkXEhF/j4tchY5YR17+C8CwVO3l3v4IRlBqVrunS26rdjHqW2LbAz5qU0t4V2x9ynvJUp8d3LSWGWDktCXRR4QBRfTtoW6Lo73dBtV7fpyK7CE8q3Q4CChXnibmGeqF2YJ0TL78T0FkFZ3tauxK7IL/vRrO25sDG4dOMWeBgQGaGAePWtiq6+leUBCEj26wlK2/UO5CjXGpBs11Nkt+spx+16SmW7niLdrqdMt+spy9v1lMh2PUHjdrrd1nWoZHtjqmXsJxrfSrkvRRS30tyXAoX7UigsSadIk05Z0Pj79fN9Y6u02cm3fX0sHdmXzRLS1ziEbe5vTyRL5f4WULD7MnG3+zJRu/syIcpLUGhfZmI5LwHZTZgbJPe32vqZadbMt1723CGyU4II8+Zx4jNnacos/SXoVyGUuxf8EpXXcBTxjgNV9N0cZUF/yu8+CFmZo7U98m3wLyPmaRVd2L3Wxpz8OH6tjUXvzO61Nubs0f61NhasW7vX2oiDb7vbAOaRg0e3ASyRl5duA1hmV3e3AczJ3zMHMxREHiic7F545IYieuMXidxfOE8BIrAVimAnA8E0I2ROg1uxmRsyDk7As4RwmiqU74hQMGmo5GcO0Wj6EM5ziAil6PFskjlMKYLIMoSzGWUBZhhBNM0Ij+YaEf2EIxLNOsLjqUdknn9EoElIOM1EmfN0lPnMR4MnJuE0OymPpqisBvNUlpa+NM9YwqNpS8TyfMATmPB4FhOZpzIRSilEk1rGK4/WASq0Opro3LvMeTaI32WOVZ76drzLHBcJpsH4XeZYdVNi4V3mWKbpMX6XOVRxqowfWMRqOG0WH1jEBXgK3fnAIi7kptP4gUWs8tRqVJxRrMCTiFV5srVqOKHYIsHEawvw9GtVNwlb2U0mVqYJ2Yo8LRuVHY1EO0XbnaNFYWek3aRN6jcjHU3gVCCYxm0Jnsyt6qZ0K+/uCze9GxUneSuwc1rVubXdqgrTpBV48rdquASwRYKFgC3AywGrFhYFtpBbGliZFwhW5WWCUd1iwaizUjzdwsGqvHwgNVxEmDLRUsIUWJY+6ZYVVg0XF7bIt2Zit9CwamG5YQu5RYeVdyczL0CMuCoJ66KwM2J+YTLoVyOHR3Ikz6MVyRshiuxzaeX4MFqpPIFWpE+UleljZGX52bESeYS/RWaXCiFqi9+lQjxqVbhLhSRqX7BLhQRuqdulQpja7Hd3RJxaX9jdEYlRHMq7OyKdIlLa3RGpHJt4d0ekUZR4o4OnFKFwo4OXouiUNjp4lSITb3TwGkcl2ujgFYqI2QVAiGLhdwEQj6IQ7gIgidof7AIggVvudgEQpjZHb8/HCkWg+PZ8LEfx2PX2fFyColN+ez7WOValt+djlSJnXxtnRtEKXhtnIYpQ/No4axSV6LVxVjgS/rVx5tR6+bsMpxGj1qtArVchar2qvvWqUetV4Narwq1XxbZeObW+/5H4U0+o5RlTuzOOWp013+asUIsz5vZmzq3N3LY1U9vSq76VH/TIvtV7ha0DFLzVe0WtAmrf6r0yrQFGb/VeQSuA2Ld6N2jzo/rbVxvTkf5oqyC7UFdBfyMrHdmN4gkFe8ETd9vAE7U7wBMKf+wqKbQtPDH7s1YJ2U3fG5Te/337Vg7lORAwCQIw+0QIBHwOBFie/gDTxzkA9ZVTgPmdU0DyOEeZvTfaEvOG8wbRZ5qgwfpLsMgKDcbnCsdA8YdgobT84qki/V1TZVEU5BHBsfTe5rnAkeTuxD70TIgeJW5Ya0/bBhFoS61t4+5tg+7lm3iUop6XG3ZkQS/zi9Mb5u+MN3Rpmr300VkGT3oTd493E7XPdBMKXwxPCj3iTSzojKV5mDvsPXTbhiF6KKA8HgHZn91VjsmpVJJQkSahMqkusL66QOT3dgWlp8zSHn20rMiml3LMLqWSXIo4t1TR1FImmaVIEkvQSOaBIRohIDt3DZ0NAndz1xBNEBDNXUNjgcDM3DVEA1SUR8ARkK3/ad+kZ15v5Ege9CmSB62AzAM/5W6Dx5CtDwrbDR5D43zA9DGpMDE+LaYPRIeVewo6rPyjz2FvfB/kFOJ7gGx3KsfuVCrdqYjyEhTtaGU5LwFJrwoSv9NORLvTzl7aI2t3w4LdDUO7G3q7GxbtbhjY3TCwu2Fod2t75Gu9drWrjUvW3iVr75J1wSXr0CVr75J14JJ14JK1c8nau2Tdu+SBtEdcElDwa5g1uSRQ+7uXdeCSoNAvXNbokoDsb1nWFX5RVlfu27G6cl+J1c4lgbsvv+rKfeNVV/5rrrry323VFX+hVVfuW6waXBIJfl9VV2aRWFd+kVhXfpFYO6M8Vu7WiDUbJZ7FrhHryq8R6ypYI9aV+xqprnCNWFdujVhXfo1YV2aNWFd+jVg7s0TBrxHryq8R68AvUeI1Yl35NWJd+TVi7T2zJs/U4CztkU/nZSF3l2HuLn3usmeCEmT1Msjqpc1qfEzfN889pmdOXhg/pmfRu6J7TM+c/dE/pmfBOqV7TE8cPNNtNmMeuWe02Ywl8tHSZjOW2VHdZjPm5K2Zj3xPs8sKJ6sVHuWsiD5xRaLsFc6JKgJnqwhxyrIbZ07jUrHx5YxxrAtjgxKBbVqFwKtF9IatUuDaIpJ1C2f/FsGZeFbYyTMHOxdEni6cjT0LbXA9Z/EihD4vamD2orHji1CwfdGd94vCE4AIPAtkgaeCzIP5IEvLABWGYDg9iFgeajxRCI9nC5FLI9HNGyLYkUjf5PUxib7JCySaRYrf5AW6n0uib/ICiWeU8Ju8QLPzSvRNnpdgdkFKEwxK0RyDup9mUKWZBqV4ssESPN+gRlMOSjTrgDQKs4TnHpRo+kEpGhao+5GBKg0OlHgAoMZjALXiMOA5CSSyB6OYmQkUtCDE7K6o8RRltGCWQt1PVEYN5irUabpCiWcs1NykBSLPWyDB1IWUZi+UeAIDrY0v76Yx1MKZDAsEkxnKPJ+hVpjSsIib1VDkiQ01nttA4+kNpGCGA3UZ0/JwD6c61HeOaZ7wUIrnPCyxY9S7mQ81M+qvO3Jd5a/srjF4h4L0D3RcYzgABX+K45qaD9T+0Y3roLmg0J/XuDbNA2b+kMZ4M+ikWZujB3sUfWE5lmWmRw8BCs8hW1M8eghQfI78183NWQQ+hDA809aStz/4f3M9zb/5v33B06hWakxaZKNGlFuACF+XAg7Jh1RtGHF+0QaQvEQBTF4tUHZb8R+825DuMtNmPk/PxgU2pgj84UtB9m9WCqbf/tmw2yq/Pn+bHVi01p+Z/Fa5/V2i28g+VRFjVKR/tTQj+gt0t9TV2+njoQ/HNjgPGA5A9hcKHtwkDNx9cf/A8QRsv89/MHMsMPod9wcT6Acf6IdCoB94PlNqw/9QDP+DnbSU2S558F1iRygGvfDOf6xSV+x65z8u4jtoxzv/cQnqttI7/7HMnenfvw/jxV286/37uIjv+ML797Eap0Pp/ftYpiQpvH+/VTeO9yLz8FP2YEDZgxGZM4KQf3lQUdsfbb/t3Rxt3gg/kCMN5OZobY9sZyTkwttilfurZASXyujVf3AdILqycH95Mx9BHQyHihj+WjjPusSpXlb0lYNJEaoGFCoG9DU8wzqmVCWUfIXyxAu1yQiqktGr/+A6QFQD4f7y9LYo1IIUqAwpr8WzrcsK1ZBlX1FZjUAVhUHlhL0Gn11HjKqigq9E/g1YqENGUIWMXv0H1wGi60d/5qmX0Ez6y2cEl8/o1X9wHSC6vHB3+byuKSxrrWy1hKbN7SLL2//3N4r4gepG2mbxePtH7yPNXDA45Sz+mGyRijR5DhJpdsnvS8zjeszt80yr5QuGWr7diFVTnajE82hcuKxugLI42gFmSmgKdtGV9f97IbII7hF/j0KYi/MvLBB2xcM9n6FIH+1js/37SseG2Bd5BMtfV7I42LcmGi79rGJ3qgmm3WfC6UUi4Wa/mVB5w9bgzW9zbd/azGToSO2J5K7F+MwvKS/QAdsLv/Sr7m26vOBSG5AdcC9uUQ3cvZn3wstnwPaFvRezUAamd5jCWnvk69wWKtiGFWx9TdzaVpWgjq19dfDFLF0FSX5vg9/NC5Xemacja/gJ2VfLEwoW9om7aSFRu4RPiJbkidF9fGLmN3wTsevxlUuoVYWPElaVe5SwMgkFKG5TE7YpeBaxMgmlKGgqP7JYmYRa+YRaFRJqFSbUyifUqphQqyChVj6hVj6hVj6hXk3wX33wX33wXwvBfw2D/xoH/9UH/zUI/msQ/LVLobVv2JqnKMJcPPgKxiv4oT/++/9jjgIE",
    Symbol: "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",
    ZapfDingbats: "eJxtmNtu20YQhl+F4FULyMGeD7pz3AY1ChtG7NpFA18w1NomIlECSRcxgrx7SVk7+wOdG8H5OJydf2Z2d5gf9cV+t0v9VK/r+6vXsXlOlbHe28paq229qj/t++m62aXZ4J/m8PRb1z9/baZxefK63Z6eXN5dVMvTCh83u277xr/6kLrnl2XNq7TpXnczuZyabdee98/b2VzM/x4/dd/T5qab2pd6PQ2vaVVfvDRD005puE3Lu7eH1HbN9hTjx4/77/X6y5lcnUmjVzHIVVDicVX/1W/SsO36dLMfu6nb9/X6TAoBD+5euvZbn8axXtuZ36dhPJrVQqgPQoh5hev91LWLkIv94W1Ygq9+aX+tZAx2tfz64284/sblN/rqfLP/mqrbt3FKu7G67Nv9cNgPzZQ2H6rz7bb6vLgZq89pTMO/M/xfEqturJpqSM/d7GJIm2oamk3aNcO3av80O5xh3yyKmm1193ZIT02bqovTKjP+MAf++7zsZvZ3276kYyWWXB0z99S18/PbafPHQ71W4fjn/fxnFO+ZvkrT0LVzTr78qB/+nk38bHM9exgP8zr1z9U7jt6840YW5uSJKcZOCaBBnKgm5mU8MVNYyMwWFvO7Ukagkmgg6sDWQ5yFFqjzUrLEaQ3BEmiwNsMSaZS0vgWfOkPHWQowNeTUc0kumnxZvsgPxlGai6VTGUqAVCTQ6QkWnc77DKEiLktSUBJKqHIQZ86d8gCpHYoiEzMsb1ubYy8vW50DChB5ZhGqrijD0EqUIeiaEHIfCg5Kpuu0ApiToaGPSY0uaQsyr65L2oKi1yFt1PLaQ3lzfXTgXodGoJYzglndSLDMPg1sTPJpQJHJigw0QrGERqD9YhyTOgONQDUyuF1zaxuokc/BW2ztXCMrGZ9WMW1oQZHIXWNBkSCfRZEL5BMUiZw6CzVSFCfUSGZFNjIldoKDkonTKQiJIGzWmFd3BizJJ9SINoLDriOfUCOZS+zg+KGD1qGiLNMLxtJD1/ns00ON6EzyUCM6vbxhoBKaqbG3DFQCNiL1iHccBPV0DHhQH/JW8EW90dkyFKGywCJU0WkVSvSGeiSUODWFFD0HYdPQVoiRgfPMA+/nnRgiAyNYSjpWNQcNSMrtFCUH4ZIRpSCWocFCSuhCEY6hoUClc0WC52BJlCYYLQdhN+hygRRRlo5BKRRLS6oihSqh+ZzzRGG1Mo4Iz1LoP0qsxDGFzk0JE42ji0jCPejomJKCuwil4m5CiRMEUMVSzVLDUstSx1Juc0oVWMpqY295qVltmtWmWW2a1aZZbZrVplltmtWmWW2G1WZYbYbVZlhthtVmWG2G1WZYbYbVZlhtltVmWW2W1WZZbZbVZlltltVmWW2W1QYjQCh7E2aAQHeGhCFgPoNoy8KNb2wxBhmGKBxoUZXlLGsLI6AsftEDHV0wIURVbANLcTKlGGBIKPOAxCmhePCKUwFzAmpDFRQvjA9R06Hq8TONvshgKDCuRAZTXigUxjxNFfKRo3CLhnIJBMFRvMZpqpNBMlQJzGT5WFQMVQI/AikPMIhEU1aDjqJvQwmjSHB05cC9jbYwc5UtAHNLhDw41ha+lEqF4JaH3gmB61SYcqInxTDmQK8v08vjqv4zDf1N0w3Lf4A8/vwPpfK11w=="
  };

  !function (t) {
    t.Courier = "Courier", t.CourierBold = "Courier-Bold", t.CourierOblique = "Courier-Oblique", t.CourierBoldOblique = "Courier-BoldOblique", t.Helvetica = "Helvetica", t.HelveticaBold = "Helvetica-Bold", t.HelveticaOblique = "Helvetica-Oblique", t.HelveticaBoldOblique = "Helvetica-BoldOblique", t.TimesRoman = "Times-Roman", t.TimesRomanBold = "Times-Bold", t.TimesRomanItalic = "Times-Italic", t.TimesRomanBoldItalic = "Times-BoldItalic", t.Symbol = "Symbol", t.ZapfDingbats = "ZapfDingbats";
  }(Xr || (Xr = {}));

  var Yr,
      Jr = {},
      Qr = function () {
    function t() {
      var t = this;
      this.getWidthOfGlyph = function (e) {
        return t.CharWidths[e];
      }, this.getXAxisKerningForPair = function (e, n) {
        return (t.KernPairXAmounts[e] || {})[n];
      };
    }

    return t.load = function (e) {
      var n = Jr[e];
      if (n) return n;
      var r = Lr(Zr[e]),
          i = Object.assign(new t(), JSON.parse(r));
      return i.CharWidths = i.CharMetrics.reduce(function (t, e) {
        return t[e.N] = e.WX, t;
      }, {}), i.KernPairXAmounts = i.KernPairs.reduce(function (t, e) {
        var n = e[0],
            r = e[1],
            i = e[2];
        return t[n] || (t[n] = {}), t[n][r] = i, t;
      }, {}), Jr[e] = i, i;
    }, t;
  }(),
      _r = Lr("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"),
      $r = JSON.parse(_r),
      ti = function ti(t, e) {
    var n = this;
    this.canEncodeUnicodeCodePoint = function (t) {
      return t in n.unicodeMappings;
    }, this.encodeUnicodeCodePoint = function (t) {
      var e = n.unicodeMappings[t];

      if (!e) {
        var r = String.fromCharCode(t),
            i = n.name + ' cannot encode "' + r + '"';
        throw new Error(i);
      }

      return {
        code: e[0],
        name: e[1]
      };
    }, this.name = t, this.unicodeMappings = e;
  },
      ei = {
    Symbol: new ti("Symbol", $r.symbol),
    ZapfDingbats: new ti("ZapfDingbats", $r.zapfdingbats),
    WinAnsi: new ti("WinAnsi", $r.win1252)
  },
      ni = function ni(t) {
    return Object.keys(t).map(function (e) {
      return t[e];
    });
  },
      ri = ni(Xr),
      ii = function ii(t) {
    return ri.includes(t);
  },
      oi = function oi(t) {
    return "`" + t + "`";
  },
      ai = function ai(t) {
    return null === t ? "null" : void 0 === t ? "undefined" : "string" == typeof t ? "string" : isNaN(t) ? "NaN" : "number" == typeof t ? "number" : "boolean" == typeof t ? "boolean" : "symbol" == typeof t ? "symbol" : "bigint" == typeof t ? "bigint" : t.constructor && t.constructor.name ? t.constructor.name : t.name ? t.name : t.constructor ? String(t.constructor) : String(t);
  },
      si = function si(t, e) {
    return "null" === e ? null === t : "undefined" === e ? void 0 === t : "string" === e ? "string" == typeof t : "number" === e ? "number" == typeof t && !isNaN(t) : "boolean" === e ? "boolean" == typeof t : "symbol" === e ? "symbol" == typeof t : "bigint" === e ? "bigint" == typeof t : e === Array ? t instanceof Array : e === Uint8Array ? t instanceof Uint8Array : e === ArrayBuffer ? t instanceof ArrayBuffer : t instanceof e[0];
  },
      ui = function ui(t, e, n) {
    for (var r = new Array(n.length), i = 0, o = n.length; i < o; i++) {
      var a = n[i];
      "null" === a && (r[i] = oi("null")), "undefined" === a && (r[i] = oi("undefined")), "string" === a ? r[i] = oi("string") : "number" === a ? r[i] = oi("number") : "boolean" === a ? r[i] = oi("boolean") : "symbol" === a ? r[i] = oi("symbol") : "bigint" === a ? r[i] = oi("bigint") : a === Array ? r[i] = oi("Array") : a === Uint8Array ? r[i] = oi("Uint8Array") : a === ArrayBuffer ? r[i] = oi("ArrayBuffer") : r[i] = oi(a[1]);
    }

    var s = r.join(" or ");
    return oi(e) + " must be of type " + s + ", but was actually of type " + oi(ai(t));
  },
      hi = function hi(t, e, n) {
    for (var r = 0, i = n.length; r < i; r++) if (si(t, n[r])) return;

    throw new TypeError(ui(t, e, n));
  },
      ci = function ci(t, e, n) {
    hi(t, e, n.concat("undefined"));
  },
      fi = function fi(t, e, n) {
    for (var r = 0, i = t.length; r < i; r++) hi(t[r], e, n);
  },
      li = function li(t, e, n, r) {
    if (hi(t, e, ["number"]), hi(n, "min", ["number"]), hi(r, "max", ["number"]), r = Math.max(n, r), t < n || t > r) throw new Error(oi(e) + " must be at least " + n + " and at most " + r + ", but was actually " + t);
  },
      di = function di(t, e, n) {
    if (hi(t, e, ["number"]), t % n != 0) throw new Error(oi(e) + " must be a multiple of " + n + ", but was actually " + t);
  },
      pi = function () {
    function t(t) {
      this.populate = t, this.value = void 0;
    }

    return t.prototype.access = function () {
      return this.value || (this.value = this.populate()), this.value;
    }, t.prototype.invalidate = function () {
      this.value = void 0;
    }, t.populatedBy = function (e) {
      return new t(e);
    }, t;
  }(),
      yi = function (t) {
    function e(e, n) {
      var r = "Method " + e + "." + n + "() not implemented";
      return t.call(this, r) || this;
    }

    return n(e, t), e;
  }(Error),
      gi = function (t) {
    function e(e) {
      var n = "Cannot construct " + e + " - it has a private constructor";
      return t.call(this, n) || this;
    }

    return n(e, t), e;
  }(Error),
      vi = function (t) {
    function e(e, n) {
      var r = "Expected instance of " + (Array.isArray(e) ? e.map(function (t) {
        return t.name;
      }) : [e.name]).join(" or ") + ", but got instance of " + (n ? n.constructor.name : n);
      return t.call(this, r) || this;
    }

    return n(e, t), e;
  }(Error),
      mi = function (t) {
    function e(e) {
      var n = e + " stream encoding not supported";
      return t.call(this, n) || this;
    }

    return n(e, t), e;
  }(Error),
      bi = function (t) {
    function e(e, n) {
      var r = "Cannot call " + e + "." + n + "() more than once";
      return t.call(this, r) || this;
    }

    return n(e, t), e;
  }(Error),
      wi = function (t) {
    function e(e) {
      var n = "Missing catalog (ref=" + e + ")";
      return t.call(this, n) || this;
    }

    return n(e, t), e;
  }(Error),
      xi = function (t) {
    function e() {
      return t.call(this, "Can't embed page with missing Contents") || this;
    }

    return n(e, t), e;
  }(Error),
      Si = function (t) {
    function e(e) {
      var n,
          r,
          i,
          o,
          a,
          s = "Unrecognized stream type: " + (null != (a = null != (i = null === (r = null === (n = e) || void 0 === n ? void 0 : n.contructor) || void 0 === r ? void 0 : r.name) ? i : null === (o = e) || void 0 === o ? void 0 : o.name) ? a : e);
      return t.call(this, s) || this;
    }

    return n(e, t), e;
  }(Error),
      ki = function (t) {
    function e() {
      return t.call(this, "Found mismatched contexts while embedding pages. All pages in the array passed to `PDFDocument.embedPages()` must be from the same document.") || this;
    }

    return n(e, t), e;
  }(Error),
      Ci = function (t) {
    function e(e, n) {
      var r = "Failed to parse number (line:" + e.line + " col:" + e.column + " offset=" + e.offset + '): "' + n + '"';
      return t.call(this, r) || this;
    }

    return n(e, t), e;
  }(Error),
      Fi = function (t) {
    function e(e, n) {
      var r = "Failed to parse PDF document (line:" + e.line + " col:" + e.column + " offset=" + e.offset + "): " + n;
      return t.call(this, r) || this;
    }

    return n(e, t), e;
  }(Error),
      Pi = function (t) {
    function e(e, n, r) {
      var i = "Expected next byte to be " + n + " but it was actually " + r;
      return t.call(this, e, i) || this;
    }

    return n(e, t), e;
  }(Fi),
      Ri = function (t) {
    function e(e, n) {
      var r = "Failed to parse PDF object starting with the following byte: " + n;
      return t.call(this, e, r) || this;
    }

    return n(e, t), e;
  }(Fi),
      Oi = function (t) {
    function e(e) {
      return t.call(this, e, "Failed to parse invalid PDF object") || this;
    }

    return n(e, t), e;
  }(Fi),
      Ti = function (t) {
    function e(e) {
      return t.call(this, e, "Failed to parse PDF stream") || this;
    }

    return n(e, t), e;
  }(Fi),
      ji = function (t) {
    function e(e) {
      return t.call(this, e, "Failed to parse PDF literal string due to unbalanced parenthesis") || this;
    }

    return n(e, t), e;
  }(Fi),
      zi = function (t) {
    function e(e) {
      return t.call(this, e, "Parser stalled") || this;
    }

    return n(e, t), e;
  }(Fi),
      Ni = function (t) {
    function e(e) {
      return t.call(this, e, "No PDF header found") || this;
    }

    return n(e, t), e;
  }(Fi),
      Ui = function (t) {
    function e(e, n) {
      var r = "Did not find expected keyword '" + j(n) + "'";
      return t.call(this, e, r) || this;
    }

    return n(e, t), e;
  }(Fi);

  !function (t) {
    t[t.Null = 0] = "Null", t[t.Tab = 9] = "Tab", t[t.Newline = 10] = "Newline", t[t.FormFeed = 12] = "FormFeed", t[t.CarriageReturn = 13] = "CarriageReturn", t[t.Space = 32] = "Space", t[t.ExclamationPoint = 33] = "ExclamationPoint", t[t.Hash = 35] = "Hash", t[t.Percent = 37] = "Percent", t[t.LeftParen = 40] = "LeftParen", t[t.RightParen = 41] = "RightParen", t[t.Plus = 43] = "Plus", t[t.Minus = 45] = "Minus", t[t.Dash = 45] = "Dash", t[t.Period = 46] = "Period", t[t.ForwardSlash = 47] = "ForwardSlash", t[t.Zero = 48] = "Zero", t[t.One = 49] = "One", t[t.Two = 50] = "Two", t[t.Three = 51] = "Three", t[t.Four = 52] = "Four", t[t.Five = 53] = "Five", t[t.Six = 54] = "Six", t[t.Seven = 55] = "Seven", t[t.Eight = 56] = "Eight", t[t.Nine = 57] = "Nine", t[t.LessThan = 60] = "LessThan", t[t.GreaterThan = 62] = "GreaterThan", t[t.A = 65] = "A", t[t.D = 68] = "D", t[t.E = 69] = "E", t[t.F = 70] = "F", t[t.O = 79] = "O", t[t.P = 80] = "P", t[t.R = 82] = "R", t[t.LeftSquareBracket = 91] = "LeftSquareBracket", t[t.BackSlash = 92] = "BackSlash", t[t.RightSquareBracket = 93] = "RightSquareBracket", t[t.a = 97] = "a", t[t.b = 98] = "b", t[t.d = 100] = "d", t[t.e = 101] = "e", t[t.f = 102] = "f", t[t.i = 105] = "i", t[t.j = 106] = "j", t[t.l = 108] = "l", t[t.m = 109] = "m", t[t.n = 110] = "n", t[t.o = 111] = "o", t[t.r = 114] = "r", t[t.s = 115] = "s", t[t.t = 116] = "t", t[t.u = 117] = "u", t[t.x = 120] = "x", t[t.LeftCurly = 123] = "LeftCurly", t[t.RightCurly = 125] = "RightCurly", t[t.Tilde = 126] = "Tilde";
  }(Yr || (Yr = {}));

  var Ii = Yr,
      qi = function () {
    function t(t, e) {
      this.major = String(t), this.minor = String(e);
    }

    return t.prototype.toString = function () {
      var t = m(129);
      return "%PDF-" + this.major + "." + this.minor + "\n%" + t + t + t + t;
    }, t.prototype.sizeInBytes = function () {
      return 12 + this.major.length + this.minor.length;
    }, t.prototype.copyBytesInto = function (t, e) {
      var n = e;
      return t[e++] = Ii.Percent, t[e++] = Ii.P, t[e++] = Ii.D, t[e++] = Ii.F, t[e++] = Ii.Dash, e += x(this.major, t, e), t[e++] = Ii.Period, e += x(this.minor, t, e), t[e++] = Ii.Newline, t[e++] = Ii.Percent, t[e++] = 129, t[e++] = 129, t[e++] = 129, t[e++] = 129, e - n;
    }, t.forVersion = function (e, n) {
      return new t(e, n);
    }, t;
  }(),
      Vi = function () {
    function t() {}

    return t.prototype.clone = function (t) {
      throw new yi(this.constructor.name, "clone");
    }, t.prototype.toString = function () {
      throw new yi(this.constructor.name, "toString");
    }, t.prototype.sizeInBytes = function () {
      throw new yi(this.constructor.name, "sizeInBytes");
    }, t.prototype.copyBytesInto = function (t, e) {
      throw new yi(this.constructor.name, "copyBytesInto");
    }, t;
  }(),
      Bi = function (t) {
    function e(e) {
      var n = t.call(this) || this;
      return n.array = [], n.context = e, n;
    }

    return n(e, t), e.prototype.size = function () {
      return this.array.length;
    }, e.prototype.push = function (t) {
      this.array.push(t);
    }, e.prototype.insert = function (t, e) {
      this.array.splice(t, 0, e);
    }, e.prototype.remove = function (t) {
      this.array.splice(t, 1);
    }, e.prototype.set = function (t, e) {
      this.array[t] = e;
    }, e.prototype.get = function (t) {
      return this.array[t];
    }, e.prototype.lookupMaybe = function (t, e) {
      return this.context.lookupMaybe(this.get(t), e);
    }, e.prototype.lookup = function (t, e) {
      return this.context.lookup(this.get(t), e);
    }, e.prototype.clone = function (t) {
      for (var n = e.withContext(t || this.context), r = 0, i = this.size(); r < i; r++) n.push(this.array[r]);

      return n;
    }, e.prototype.toString = function () {
      for (var t = "[ ", e = 0, n = this.size(); e < n; e++) t += this.get(e).toString(), t += " ";

      return t += "]";
    }, e.prototype.sizeInBytes = function () {
      for (var t = 3, e = 0, n = this.size(); e < n; e++) t += this.get(e).sizeInBytes() + 1;

      return t;
    }, e.prototype.copyBytesInto = function (t, e) {
      var n = e;
      t[e++] = Ii.LeftSquareBracket, t[e++] = Ii.Space;

      for (var r = 0, i = this.size(); r < i; r++) e += this.get(r).copyBytesInto(t, e), t[e++] = Ii.Space;

      return t[e++] = Ii.RightSquareBracket, e - n;
    }, e.withContext = function (t) {
      return new e(t);
    }, e;
  }(Vi),
      Di = {},
      Mi = function (t) {
    function e(e, n) {
      var r = this;
      if (e !== Di) throw new gi("PDFBool");
      return (r = t.call(this) || this).value = n, r;
    }

    return n(e, t), e.prototype.clone = function () {
      return this;
    }, e.prototype.toString = function () {
      return String(this.value);
    }, e.prototype.sizeInBytes = function () {
      return this.value ? 4 : 5;
    }, e.prototype.copyBytesInto = function (t, e) {
      return this.value ? (t[e++] = Ii.t, t[e++] = Ii.r, t[e++] = Ii.u, t[e++] = Ii.e, 4) : (t[e++] = Ii.f, t[e++] = Ii.a, t[e++] = Ii.l, t[e++] = Ii.s, t[e++] = Ii.e, 5);
    }, e.True = new e(Di, !0), e.False = new e(Di, !1), e;
  }(Vi),
      Ei = function (t) {
    function e(e, n) {
      var r = t.call(this) || this;
      return r.dict = e, r.context = n, r;
    }

    return n(e, t), e.prototype.entries = function () {
      return Array.from(this.dict.entries());
    }, e.prototype.set = function (t, e) {
      this.dict.set(t, e);
    }, e.prototype.get = function (t) {
      return this.dict.get(t);
    }, e.prototype.has = function (t) {
      return this.dict.has(t);
    }, e.prototype.lookupMaybe = function (t, e) {
      return this.context.lookupMaybe(this.get(t), e);
    }, e.prototype.lookup = function (t, e) {
      return this.context.lookup(this.get(t), e);
    }, e.prototype.delete = function (t) {
      return this.dict.delete(t);
    }, e.prototype.clone = function (t) {
      for (var n = e.withContext(t || this.context), r = this.entries(), i = 0, o = r.length; i < o; i++) {
        var a = r[i],
            s = a[0],
            u = a[1];
        n.set(s, u);
      }

      return n;
    }, e.prototype.toString = function () {
      for (var t = "<<\n", e = this.entries(), n = 0, r = e.length; n < r; n++) {
        var i = e[n],
            o = i[0],
            a = i[1];
        t += o.toString() + " " + a.toString() + "\n";
      }

      return t += ">>";
    }, e.prototype.sizeInBytes = function () {
      for (var t = 5, e = this.entries(), n = 0, r = e.length; n < r; n++) {
        var i = e[n],
            o = i[0],
            a = i[1];
        t += o.sizeInBytes() + a.sizeInBytes() + 2;
      }

      return t;
    }, e.prototype.copyBytesInto = function (t, e) {
      var n = e;
      t[e++] = Ii.LessThan, t[e++] = Ii.LessThan, t[e++] = Ii.Newline;

      for (var r = this.entries(), i = 0, o = r.length; i < o; i++) {
        var a = r[i],
            s = a[0],
            u = a[1];
        e += s.copyBytesInto(t, e), t[e++] = Ii.Space, e += u.copyBytesInto(t, e), t[e++] = Ii.Newline;
      }

      return t[e++] = Ii.GreaterThan, t[e++] = Ii.GreaterThan, e - n;
    }, e.withContext = function (t) {
      return new e(new Map(), t);
    }, e.fromMapWithContext = function (t, n) {
      return new e(t, n);
    }, e;
  }(Vi),
      Ai = new Uint8Array(256);

  Ai[Ii.LeftParen] = 1, Ai[Ii.RightParen] = 1, Ai[Ii.LessThan] = 1, Ai[Ii.GreaterThan] = 1, Ai[Ii.LeftSquareBracket] = 1, Ai[Ii.RightSquareBracket] = 1, Ai[Ii.LeftCurly] = 1, Ai[Ii.RightCurly] = 1, Ai[Ii.ForwardSlash] = 1, Ai[Ii.Percent] = 1;
  var Gi = new Uint8Array(256);
  Gi[Ii.Null] = 1, Gi[Ii.Tab] = 1, Gi[Ii.Newline] = 1, Gi[Ii.FormFeed] = 1, Gi[Ii.CarriageReturn] = 1, Gi[Ii.Space] = 1;

  for (var Ki = new Uint8Array(256), Wi = 0; Wi < 256; Wi++) Ki[Wi] = Gi[Wi] || Ai[Wi] ? 1 : 0;

  Ki[Ii.Hash] = 1;

  var Xi,
      Hi = function Hi(t) {
    return t >= Ii.ExclamationPoint && t <= Ii.Tilde && !Ki[t];
  },
      Li = {},
      Zi = new Map(),
      Yi = function (t) {
    function e(e, n) {
      var r = this;
      if (e !== Li) throw new gi("PDFName");
      r = t.call(this) || this;

      for (var i = "/", o = 0, a = n.length; o < a; o++) {
        var s = n[o],
            u = p(s);
        i += Hi(u) ? s : "#" + v(u);
      }

      return r.encodedName = i, r;
    }

    return n(e, t), e.prototype.value = function () {
      return this.encodedName;
    }, e.prototype.clone = function () {
      return this;
    }, e.prototype.toString = function () {
      return this.encodedName;
    }, e.prototype.sizeInBytes = function () {
      return this.encodedName.length;
    }, e.prototype.copyBytesInto = function (t, e) {
      return e += x(this.encodedName, t, e), this.encodedName.length;
    }, e.of = function (t) {
      var n = function (t) {
        return t.replace(/#([\dABCDEF]{2})/g, function (t, e) {
          return b(e);
        });
      }(t),
          r = Zi.get(n);

      return r || (r = new e(Li, n), Zi.set(n, r)), r;
    }, e.Length = e.of("Length"), e.FlateDecode = e.of("FlateDecode"), e.Resources = e.of("Resources"), e.Font = e.of("Font"), e.XObject = e.of("XObject"), e.Contents = e.of("Contents"), e.Type = e.of("Type"), e.Parent = e.of("Parent"), e.MediaBox = e.of("MediaBox"), e.Page = e.of("Page"), e.Annots = e.of("Annots"), e.TrimBox = e.of("TrimBox"), e.BleedBox = e.of("BleedBox"), e.CropBox = e.of("CropBox"), e.Rotate = e.of("Rotate"), e;
  }(Vi),
      Ji = new (function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return n(e, t), e.prototype.clone = function () {
      return this;
    }, e.prototype.toString = function () {
      return "null";
    }, e.prototype.sizeInBytes = function () {
      return 4;
    }, e.prototype.copyBytesInto = function (t, e) {
      return t[e++] = Ii.n, t[e++] = Ii.u, t[e++] = Ii.l, t[e++] = Ii.l, 4;
    }, e;
  }(Vi))(),
      Qi = function (t) {
    function e(e) {
      var n = t.call(this) || this;
      return n.numberValue = e, n.stringValue = X(e), n;
    }

    return n(e, t), e.prototype.value = function () {
      return this.numberValue;
    }, e.prototype.clone = function () {
      return e.of(this.numberValue);
    }, e.prototype.toString = function () {
      return this.stringValue;
    }, e.prototype.sizeInBytes = function () {
      return this.stringValue.length;
    }, e.prototype.copyBytesInto = function (t, e) {
      return e += x(this.stringValue, t, e), this.stringValue.length;
    }, e.of = function (t) {
      return new e(t);
    }, e;
  }(Vi),
      _i = function (t) {
    function e(e) {
      var n = t.call(this) || this;
      return n.dict = e, n;
    }

    return n(e, t), e.prototype.clone = function (t) {
      throw new yi(this.constructor.name, "clone");
    }, e.prototype.getContentsString = function () {
      throw new yi(this.constructor.name, "getContentsString");
    }, e.prototype.getContents = function () {
      throw new yi(this.constructor.name, "getContents");
    }, e.prototype.getContentsSize = function () {
      throw new yi(this.constructor.name, "getContentsSize");
    }, e.prototype.updateDict = function () {
      var t = this.getContentsSize();
      this.dict.set(Yi.Length, Qi.of(t));
    }, e.prototype.sizeInBytes = function () {
      return this.updateDict(), this.dict.sizeInBytes() + this.getContentsSize() + 18;
    }, e.prototype.toString = function () {
      this.updateDict();
      var t = this.dict.toString();
      return t += "\nstream\n", t += this.getContentsString(), t += "\nendstream";
    }, e.prototype.copyBytesInto = function (t, e) {
      this.updateDict();
      var n = e;
      e += this.dict.copyBytesInto(t, e), t[e++] = Ii.Newline, t[e++] = Ii.s, t[e++] = Ii.t, t[e++] = Ii.r, t[e++] = Ii.e, t[e++] = Ii.a, t[e++] = Ii.m, t[e++] = Ii.Newline;

      for (var r = this.getContents(), i = 0, o = r.length; i < o; i++) t[e++] = r[i];

      return t[e++] = Ii.Newline, t[e++] = Ii.e, t[e++] = Ii.n, t[e++] = Ii.d, t[e++] = Ii.s, t[e++] = Ii.t, t[e++] = Ii.r, t[e++] = Ii.e, t[e++] = Ii.a, t[e++] = Ii.m, e - n;
    }, e;
  }(Vi),
      $i = function (t) {
    function e(e, n) {
      var r = t.call(this, e) || this;
      return r.contents = n, r;
    }

    return n(e, t), e.prototype.clone = function (t) {
      return e.of(this.dict.clone(t), this.contents.slice());
    }, e.prototype.getContentsString = function () {
      return j(this.contents);
    }, e.prototype.getContents = function () {
      return this.contents;
    }, e.prototype.getContentsSize = function () {
      return this.contents.length;
    }, e.of = function (t, n) {
      return new e(t, n);
    }, e;
  }(_i),
      to = {},
      eo = new Map(),
      no = function (t) {
    function e(e, n, r) {
      var i = this;
      if (e !== to) throw new gi("PDFRef");
      return (i = t.call(this) || this).objectNumber = n, i.generationNumber = r, i.tag = n + " " + r + " R", i;
    }

    return n(e, t), e.prototype.clone = function () {
      return this;
    }, e.prototype.toString = function () {
      return this.tag;
    }, e.prototype.sizeInBytes = function () {
      return this.tag.length;
    }, e.prototype.copyBytesInto = function (t, e) {
      return e += x(this.tag, t, e), this.tag.length;
    }, e.of = function (t, n) {
      void 0 === n && (n = 0);
      var r = t + " " + n + " R",
          i = eo.get(r);
      return i || (i = new e(to, t, n), eo.set(r, i)), i;
    }, e;
  }(Vi),
      ro = function () {
    function t(t, e) {
      this.name = t, this.args = e || [];
    }

    return t.prototype.clone = function (e) {
      for (var n = new Array(this.args.length), r = 0, i = n.length; r < i; r++) {
        var o = this.args[r];
        n[r] = o instanceof Vi ? o.clone(e) : o;
      }

      return t.of(this.name, n);
    }, t.prototype.toString = function () {
      for (var t = "", e = 0, n = this.args.length; e < n; e++) t += String(this.args[e]) + " ";

      return t += this.name;
    }, t.prototype.sizeInBytes = function () {
      for (var t = 0, e = 0, n = this.args.length; e < n; e++) {
        var r = this.args[e];
        t += (r instanceof Vi ? r.sizeInBytes() : r.length) + 1;
      }

      return t += this.name.length;
    }, t.prototype.copyBytesInto = function (t, e) {
      for (var n = e, r = 0, i = this.args.length; r < i; r++) {
        var o = this.args[r];
        e += o instanceof Vi ? o.copyBytesInto(t, e) : x(o, t, e), t[e++] = Ii.Space;
      }

      return (e += x(this.name, t, e)) - n;
    }, t.of = function (e, n) {
      return new t(e, n);
    }, t;
  }();

  !function (t) {
    t.NonStrokingColor = "sc", t.NonStrokingColorN = "scn", t.NonStrokingColorRgb = "rg", t.NonStrokingColorGray = "g", t.NonStrokingColorCmyk = "k", t.NonStrokingColorspace = "cs", t.StrokingColor = "SC", t.StrokingColorN = "SCN", t.StrokingColorRgb = "RG", t.StrokingColorGray = "G", t.StrokingColorCmyk = "K", t.StrokingColorspace = "CS", t.BeginMarkedContentSequence = "BDC", t.BeginMarkedContent = "BMC", t.EndMarkedContent = "EMC", t.MarkedContentPointWithProps = "DP", t.MarkedContentPoint = "MP", t.DrawObject = "Do", t.ConcatTransformationMatrix = "cm", t.PopGraphicsState = "Q", t.PushGraphicsState = "q", t.SetFlatness = "i", t.SetGraphicsStateParams = "gs", t.SetLineCapStyle = "J", t.SetLineDashPattern = "d", t.SetLineJoinStyle = "j", t.SetLineMiterLimit = "M", t.SetLineWidth = "w", t.SetTextMatrix = "Tm", t.SetRenderingIntent = "ri", t.AppendRectangle = "re", t.BeginInlineImage = "BI", t.BeginInlineImageData = "ID", t.EndInlineImage = "EI", t.ClipEvenOdd = "W*", t.ClipNonZero = "W", t.CloseAndStroke = "s", t.CloseFillEvenOddAndStroke = "b*", t.CloseFillNonZeroAndStroke = "b", t.ClosePath = "h", t.AppendBezierCurve = "c", t.CurveToReplicateFinalPoint = "y", t.CurveToReplicateInitialPoint = "v", t.EndPath = "n", t.FillEvenOddAndStroke = "B*", t.FillEvenOdd = "f*", t.FillNonZeroAndStroke = "B", t.FillNonZero = "f", t.LegacyFillNonZero = "F", t.LineTo = "l", t.MoveTo = "m", t.ShadingFill = "sh", t.StrokePath = "S", t.BeginText = "BT", t.EndText = "ET", t.MoveText = "Td", t.MoveTextSetLeading = "TD", t.NextLine = "T*", t.SetCharacterSpacing = "Tc", t.SetFontAndSize = "Tf", t.SetTextHorizontalScaling = "Tz", t.SetTextLineHeight = "TL", t.SetTextRenderingMode = "Tr", t.SetTextRise = "Ts", t.SetWordSpacing = "Tw", t.ShowText = "Tj", t.ShowTextAdjusted = "TJ", t.ShowTextLine = "'", t.ShowTextLineAndSpace = '"', t.Type3D0 = "d0", t.Type3D1 = "d1", t.BeginCompatibilitySection = "BX", t.EndCompatibilitySection = "EX";
  }(Xi || (Xi = {}));

  var io,
      oo = Xi,
      ao = function (t) {
    function e(e, n) {
      var r = t.call(this, e) || this;
      return r.computeContents = function () {
        var t = r.getUnencodedContents();
        return r.encode ? Hr.deflate(t) : t;
      }, r.encode = n, n && e.set(Yi.of("Filter"), Yi.of("FlateDecode")), r.contentsCache = pi.populatedBy(r.computeContents), r;
    }

    return n(e, t), e.prototype.getContents = function () {
      return this.contentsCache.access();
    }, e.prototype.getContentsSize = function () {
      return this.contentsCache.access().length;
    }, e.prototype.getUnencodedContents = function () {
      throw new yi(this.constructor.name, "getUnencodedContents");
    }, e;
  }(_i),
      so = function (t) {
    function e(e, n, r) {
      void 0 === r && (r = !0);
      var i = t.call(this, e, r) || this;
      return i.operators = n, i;
    }

    return n(e, t), e.prototype.push = function () {
      for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];

      (t = this.operators).push.apply(t, e);
    }, e.prototype.clone = function (t) {
      for (var n = new Array(this.operators.length), r = 0, i = this.operators.length; r < i; r++) n[r] = this.operators[r].clone(t);

      var o = this.dict,
          a = this.encode;
      return e.of(o.clone(t), n, a);
    }, e.prototype.getContentsString = function () {
      for (var t = "", e = 0, n = this.operators.length; e < n; e++) t += this.operators[e] + "\n";

      return t;
    }, e.prototype.getUnencodedContents = function () {
      for (var t = new Uint8Array(this.getUnencodedContentsSize()), e = 0, n = 0, r = this.operators.length; n < r; n++) e += this.operators[n].copyBytesInto(t, e), t[e++] = Ii.Newline;

      return t;
    }, e.prototype.getUnencodedContentsSize = function () {
      for (var t = 0, e = 0, n = this.operators.length; e < n; e++) t += this.operators[e].sizeInBytes() + 1;

      return t;
    }, e.of = function (t, n, r) {
      return void 0 === r && (r = !0), new e(t, n, r);
    }, e;
  }(ao),
      uo = function uo(t, e) {
    var n = t[0],
        r = e[0];
    return n.objectNumber - r.objectNumber;
  },
      ho = function () {
    function t() {
      this.largestObjectNumber = 0, this.header = qi.forVersion(1, 7), this.trailerInfo = {}, this.indirectObjects = new Map();
    }

    return t.prototype.assign = function (t, e) {
      this.indirectObjects.set(t, e), t.objectNumber > this.largestObjectNumber && (this.largestObjectNumber = t.objectNumber);
    }, t.prototype.nextRef = function () {
      return this.largestObjectNumber += 1, no.of(this.largestObjectNumber);
    }, t.prototype.register = function (t) {
      var e = this.nextRef();
      return this.assign(e, t), e;
    }, t.prototype.delete = function (t) {
      return this.indirectObjects.delete(t);
    }, t.prototype.lookupMaybe = function (t, e) {
      var n = t instanceof no ? this.indirectObjects.get(t) : t;
      if (n && !(n instanceof e)) throw new vi(e, n);
      return n;
    }, t.prototype.lookup = function (t, e) {
      var n = t instanceof no ? this.indirectObjects.get(t) : t;
      if (e && !(n instanceof e)) throw new vi(e, n);
      return n;
    }, t.prototype.enumerateIndirectObjects = function () {
      return Array.from(this.indirectObjects.entries()).sort(uo);
    }, t.prototype.obj = function (t) {
      if (t instanceof Vi) return t;
      if (null == t) return Ji;
      if ("string" == typeof t) return Yi.of(t);
      if ("number" == typeof t) return Qi.of(t);
      if ("boolean" == typeof t) return t ? Mi.True : Mi.False;

      if (Array.isArray(t)) {
        for (var e = Bi.withContext(this), n = 0, r = t.length; n < r; n++) e.push(this.obj(t[n]));

        return e;
      }

      var i = Ei.withContext(this),
          o = Object.keys(t);

      for (n = 0, r = o.length; n < r; n++) {
        var a = o[n],
            s = t[a];
        void 0 !== s && i.set(Yi.of(a), this.obj(s));
      }

      return i;
    }, t.prototype.stream = function (t, e) {
      return void 0 === e && (e = {}), $i.of(this.obj(e), R(t));
    }, t.prototype.flateStream = function (t, e) {
      return void 0 === e && (e = {}), this.stream(Hr.deflate(R(t)), _r2(_r2({}, e), {
        Filter: "FlateDecode"
      }));
    }, t.prototype.getPushGraphicsStateContentStream = function () {
      if (this.pushGraphicsStateContentStreamRef) return this.pushGraphicsStateContentStreamRef;
      var t = this.obj({}),
          e = ro.of(oo.PushGraphicsState),
          n = so.of(t, [e]);
      return this.pushGraphicsStateContentStreamRef = this.register(n), this.pushGraphicsStateContentStreamRef;
    }, t.prototype.getPopGraphicsStateContentStream = function () {
      if (this.popGraphicsStateContentStreamRef) return this.popGraphicsStateContentStreamRef;
      var t = this.obj({}),
          e = ro.of(oo.PopGraphicsState),
          n = so.of(t, [e]);
      return this.popGraphicsStateContentStreamRef = this.register(n), this.popGraphicsStateContentStreamRef;
    }, t.create = function () {
      return new t();
    }, t;
  }(),
      co = function (t) {
    function e(e, n, r) {
      void 0 === r && (r = !0);
      var i = t.call(this, e, n) || this;
      return i.normalized = !1, i.autoNormalizeCTM = r, i;
    }

    return n(e, t), e.prototype.clone = function (t) {
      for (var n = e.fromMapWithContext(new Map(), t || this.context, this.autoNormalizeCTM), r = this.entries(), i = 0, o = r.length; i < o; i++) {
        var a = r[i],
            s = a[0],
            u = a[1];
        n.set(s, u);
      }

      return n;
    }, e.prototype.Parent = function () {
      return this.lookupMaybe(Yi.Parent, Ei);
    }, e.prototype.Contents = function () {
      return this.lookup(Yi.of("Contents"));
    }, e.prototype.Annots = function () {
      return this.lookupMaybe(Yi.Annots, Bi);
    }, e.prototype.BleedBox = function () {
      return this.lookupMaybe(Yi.BleedBox, Bi);
    }, e.prototype.TrimBox = function () {
      return this.lookupMaybe(Yi.TrimBox, Bi);
    }, e.prototype.Resources = function () {
      var t = this.getInheritableAttribute(Yi.Resources);
      return this.context.lookupMaybe(t, Ei);
    }, e.prototype.MediaBox = function () {
      var t = this.getInheritableAttribute(Yi.MediaBox);
      return this.context.lookup(t, Bi);
    }, e.prototype.CropBox = function () {
      var t = this.getInheritableAttribute(Yi.CropBox);
      return this.context.lookupMaybe(t, Bi);
    }, e.prototype.Rotate = function () {
      var t = this.getInheritableAttribute(Yi.Rotate);
      return this.context.lookupMaybe(t, Qi);
    }, e.prototype.getInheritableAttribute = function (t) {
      var e;
      return this.ascend(function (n) {
        e || (e = n.get(t));
      }), e;
    }, e.prototype.setParent = function (t) {
      this.set(Yi.Parent, t);
    }, e.prototype.addContentStream = function (t) {
      var e = this.normalizedEntries().Contents || this.context.obj([]);
      this.set(Yi.Contents, e), e.push(t);
    }, e.prototype.wrapContentStreams = function (t, e) {
      var n = this.Contents();
      return n instanceof Bi && (n.insert(0, t), n.push(e), !0);
    }, e.prototype.setFontDictionary = function (t, e) {
      this.normalizedEntries().Font.set(t, e);
    }, e.prototype.setXObject = function (t, e) {
      this.normalizedEntries().XObject.set(t, e);
    }, e.prototype.ascend = function (t) {
      t(this);
      var e = this.Parent();
      e && e.ascend(t);
    }, e.prototype.normalize = function () {
      if (!this.normalized) {
        var t = this.context,
            e = this.get(Yi.Contents);
        this.context.lookup(e) instanceof _i && this.set(Yi.Contents, t.obj([e])), this.autoNormalizeCTM && this.wrapContentStreams(this.context.getPushGraphicsStateContentStream(), this.context.getPopGraphicsStateContentStream());
        var n = this.getInheritableAttribute(Yi.Resources),
            r = t.lookupMaybe(n, Ei) || t.obj({});
        this.set(Yi.Resources, r);
        var i = r.lookupMaybe(Yi.Font, Ei) || t.obj({});
        r.set(Yi.Font, i);
        var o = r.lookupMaybe(Yi.XObject, Ei) || t.obj({});
        r.set(Yi.XObject, o), this.normalized = !0;
      }
    }, e.prototype.normalizedEntries = function () {
      this.normalize();
      var t = this.Resources();
      return {
        Resources: t,
        Contents: this.Contents(),
        Font: t.lookup(Yi.Font, Ei),
        XObject: t.lookup(Yi.XObject, Ei)
      };
    }, e.InheritableEntries = ["Resources", "MediaBox", "CropBox", "Rotate"], e.withContextAndParent = function (t, n) {
      var r = new Map();
      return r.set(Yi.Type, Yi.Page), r.set(Yi.Parent, n), r.set(Yi.Resources, t.obj({})), r.set(Yi.MediaBox, t.obj([0, 0, 612, 792])), new e(r, t, !1);
    }, e.fromMapWithContext = function (t, n, r) {
      return void 0 === r && (r = !0), new e(t, n, r);
    }, e;
  }(Ei),
      fo = function () {
    function t(t, e) {
      var n = this;
      this.traversedObjects = new Map(), this.copy = function (t) {
        return t instanceof co ? n.copyPDFPage(t) : t instanceof Ei ? n.copyPDFDict(t) : t instanceof Bi ? n.copyPDFArray(t) : t instanceof _i ? n.copyPDFStream(t) : t instanceof no ? n.copyPDFIndirectObject(t) : t.clone();
      }, this.copyPDFPage = function (t) {
        for (var e = t.clone(), r = co.InheritableEntries, i = 0, o = r.length; i < o; i++) {
          var a = Yi.of(r[i]),
              s = e.getInheritableAttribute(a);
          !e.get(a) && s && e.set(a, s);
        }

        return e.delete(Yi.of("Parent")), n.copyPDFDict(e);
      }, this.copyPDFDict = function (t) {
        if (n.traversedObjects.has(t)) return n.traversedObjects.get(t);
        var e = t.clone(n.dest);
        n.traversedObjects.set(t, e);

        for (var r = t.entries(), i = 0, o = r.length; i < o; i++) {
          var a = r[i],
              s = a[0],
              u = a[1];
          e.set(s, n.copy(u));
        }

        return e;
      }, this.copyPDFArray = function (t) {
        if (n.traversedObjects.has(t)) return n.traversedObjects.get(t);
        var e = t.clone(n.dest);
        n.traversedObjects.set(t, e);

        for (var r = 0, i = t.size(); r < i; r++) {
          var o = t.get(r);
          e.set(r, n.copy(o));
        }

        return e;
      }, this.copyPDFStream = function (t) {
        if (n.traversedObjects.has(t)) return n.traversedObjects.get(t);
        var e = t.clone(n.dest);
        n.traversedObjects.set(t, e);

        for (var r = t.dict.entries(), i = 0, o = r.length; i < o; i++) {
          var a = r[i],
              s = a[0],
              u = a[1];
          e.dict.set(s, n.copy(u));
        }

        return e;
      }, this.copyPDFIndirectObject = function (t) {
        if (!n.traversedObjects.has(t)) {
          var e = n.dest.nextRef();
          n.traversedObjects.set(t, e);
          var r = n.src.lookup(t);

          if (r) {
            var i = n.copy(r);
            n.dest.assign(e, i);
          }
        }

        return n.traversedObjects.get(t);
      }, this.src = t, this.dest = e;
    }

    return t.for = function (e, n) {
      return new t(e, n);
    }, t;
  }(),
      lo = function () {
    function t(t) {
      this.subsections = t ? [[t]] : [], this.chunkIdx = 0, this.chunkLength = t ? 1 : 0;
    }

    return t.prototype.addEntry = function (t, e) {
      this.append({
        ref: t,
        offset: e,
        deleted: !1
      });
    }, t.prototype.addDeletedEntry = function (t, e) {
      this.append({
        ref: t,
        offset: e,
        deleted: !0
      });
    }, t.prototype.toString = function () {
      for (var t = "xref\n", e = 0, n = this.subsections.length; e < n; e++) {
        var r = this.subsections[e];
        t += r[0].ref.objectNumber + " " + r.length + "\n";

        for (var i = 0, o = r.length; i < o; i++) {
          var a = r[i];
          t += w(String(a.offset), 10, "0"), t += " ", t += w(String(a.ref.generationNumber), 5, "0"), t += " ", t += a.deleted ? "f" : "n", t += " \n";
        }
      }

      return t;
    }, t.prototype.sizeInBytes = function () {
      for (var t = 5, e = 0, n = this.subsections.length; e < n; e++) {
        var r = this.subsections[e],
            i = r.length,
            o = r[0];
        t += 2, t += String(o.ref.objectNumber).length, t += String(i).length, t += 20 * i;
      }

      return t;
    }, t.prototype.copyBytesInto = function (t, e) {
      var n = e;
      return t[e++] = Ii.x, t[e++] = Ii.r, t[e++] = Ii.e, t[e++] = Ii.f, t[e++] = Ii.Newline, (e += this.copySubsectionsIntoBuffer(this.subsections, t, e)) - n;
    }, t.prototype.copySubsectionsIntoBuffer = function (t, e, n) {
      for (var r = n, i = t.length, o = 0; o < i; o++) {
        var a = this.subsections[o],
            s = String(a[0].ref.objectNumber);
        n += x(s, e, n), e[n++] = Ii.Space;
        var u = String(a.length);
        n += x(u, e, n), e[n++] = Ii.Newline, n += this.copyEntriesIntoBuffer(a, e, n);
      }

      return n - r;
    }, t.prototype.copyEntriesIntoBuffer = function (t, e, n) {
      for (var r = t.length, i = 0; i < r; i++) {
        var o = t[i],
            a = w(String(o.offset), 10, "0");
        n += x(a, e, n), e[n++] = Ii.Space;
        var s = w(String(o.ref.generationNumber), 5, "0");
        n += x(s, e, n), e[n++] = Ii.Space, e[n++] = o.deleted ? Ii.f : Ii.n, e[n++] = Ii.Space, e[n++] = Ii.Newline;
      }

      return 20 * r;
    }, t.prototype.append = function (t) {
      if (0 === this.chunkLength) return this.subsections.push([t]), this.chunkIdx = 0, void (this.chunkLength = 1);
      var e = this.subsections[this.chunkIdx],
          n = e[this.chunkLength - 1];
      t.ref.objectNumber - n.ref.objectNumber > 1 ? (this.subsections.push([t]), this.chunkIdx += 1, this.chunkLength = 1) : (e.push(t), this.chunkLength += 1);
    }, t.create = function () {
      return new t({
        ref: no.of(0, 65535),
        offset: 0,
        deleted: !0
      });
    }, t.createEmpty = function () {
      return new t();
    }, t;
  }(),
      po = function () {
    function t(t) {
      this.lastXRefOffset = String(t);
    }

    return t.prototype.toString = function () {
      return "startxref\n" + this.lastXRefOffset + "\n%%EOF";
    }, t.prototype.sizeInBytes = function () {
      return 16 + this.lastXRefOffset.length;
    }, t.prototype.copyBytesInto = function (t, e) {
      var n = e;
      return t[e++] = Ii.s, t[e++] = Ii.t, t[e++] = Ii.a, t[e++] = Ii.r, t[e++] = Ii.t, t[e++] = Ii.x, t[e++] = Ii.r, t[e++] = Ii.e, t[e++] = Ii.f, t[e++] = Ii.Newline, e += x(this.lastXRefOffset, t, e), t[e++] = Ii.Newline, t[e++] = Ii.Percent, t[e++] = Ii.Percent, t[e++] = Ii.E, t[e++] = Ii.O, t[e++] = Ii.F, e - n;
    }, t.forLastCrossRefSectionOffset = function (e) {
      return new t(e);
    }, t;
  }(),
      yo = function () {
    function t(t) {
      this.dict = t;
    }

    return t.prototype.toString = function () {
      return "trailer\n" + this.dict.toString();
    }, t.prototype.sizeInBytes = function () {
      return 8 + this.dict.sizeInBytes();
    }, t.prototype.copyBytesInto = function (t, e) {
      var n = e;
      return t[e++] = Ii.t, t[e++] = Ii.r, t[e++] = Ii.a, t[e++] = Ii.i, t[e++] = Ii.l, t[e++] = Ii.e, t[e++] = Ii.r, t[e++] = Ii.Newline, (e += this.dict.copyBytesInto(t, e)) - n;
    }, t.of = function (e) {
      return new t(e);
    }, t;
  }(),
      go = function (t) {
    function e(e, n, r) {
      void 0 === r && (r = !0);
      var i = t.call(this, e.obj({}), r) || this;
      return i.objects = n, i.offsets = i.computeObjectOffsets(), i.offsetsString = i.computeOffsetsString(), i.dict.set(Yi.of("Type"), Yi.of("ObjStm")), i.dict.set(Yi.of("N"), Qi.of(i.objects.length)), i.dict.set(Yi.of("First"), Qi.of(i.offsetsString.length)), i;
    }

    return n(e, t), e.prototype.getObjectsCount = function () {
      return this.objects.length;
    }, e.prototype.clone = function (t) {
      return e.withContextAndObjects(t || this.dict.context, this.objects.slice(), this.encode);
    }, e.prototype.getContentsString = function () {
      for (var t = this.offsetsString, e = 0, n = this.objects.length; e < n; e++) {
        t += this.objects[e][1] + "\n";
      }

      return t;
    }, e.prototype.getUnencodedContents = function () {
      for (var t = new Uint8Array(this.getUnencodedContentsSize()), e = x(this.offsetsString, t, 0), n = 0, r = this.objects.length; n < r; n++) {
        e += this.objects[n][1].copyBytesInto(t, e), t[e++] = Ii.Newline;
      }

      return t;
    }, e.prototype.getUnencodedContentsSize = function () {
      return this.offsetsString.length + P(this.offsets)[1] + P(this.objects)[1].sizeInBytes() + 1;
    }, e.prototype.computeOffsetsString = function () {
      for (var t = "", e = 0, n = this.offsets.length; e < n; e++) {
        var r = this.offsets[e];
        t += r[0] + " " + r[1] + " ";
      }

      return t;
    }, e.prototype.computeObjectOffsets = function () {
      for (var t = 0, e = new Array(this.objects.length), n = 0, r = this.objects.length; n < r; n++) {
        var i = this.objects[n],
            o = i[0],
            a = i[1];
        e[n] = [o.objectNumber, t], t += a.sizeInBytes() + 1;
      }

      return e;
    }, e.withContextAndObjects = function (t, n, r) {
      return void 0 === r && (r = !0), new e(t, n, r);
    }, e;
  }(ao),
      vo = function () {
    function t(t, e) {
      var n = this;
      this.parsedObjects = 0, this.shouldWaitForTick = function (t) {
        return n.parsedObjects += t, n.parsedObjects % n.objectsPerTick == 0;
      }, this.context = t, this.objectsPerTick = e;
    }

    return t.prototype.serializeToBuffer = function () {
      return i(this, void 0, void 0, function () {
        var t, e, n, r, i, a, s, u, h, c, f, l, d, p, y, g, v;
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              return [4, this.computeBufferSize()];

            case 1:
              t = o.sent(), e = t.size, n = t.header, r = t.indirectObjects, i = t.xref, a = t.trailerDict, s = t.trailer, u = 0, h = new Uint8Array(e), u += n.copyBytesInto(h, u), h[u++] = Ii.Newline, h[u++] = Ii.Newline, c = 0, f = r.length, o.label = 2;

            case 2:
              return c < f ? (l = r[c], d = l[0], p = l[1], y = String(d.objectNumber), u += x(y, h, u), h[u++] = Ii.Space, g = String(d.generationNumber), u += x(g, h, u), h[u++] = Ii.Space, h[u++] = Ii.o, h[u++] = Ii.b, h[u++] = Ii.j, h[u++] = Ii.Newline, u += p.copyBytesInto(h, u), h[u++] = Ii.Newline, h[u++] = Ii.e, h[u++] = Ii.n, h[u++] = Ii.d, h[u++] = Ii.o, h[u++] = Ii.b, h[u++] = Ii.j, h[u++] = Ii.Newline, h[u++] = Ii.Newline, v = p instanceof go ? p.getObjectsCount() : 1, this.shouldWaitForTick(v) ? [4, M()] : [3, 4]) : [3, 5];

            case 3:
              o.sent(), o.label = 4;

            case 4:
              return c++, [3, 2];

            case 5:
              return i && (u += i.copyBytesInto(h, u), h[u++] = Ii.Newline), a && (u += a.copyBytesInto(h, u), h[u++] = Ii.Newline, h[u++] = Ii.Newline), u += s.copyBytesInto(h, u), [2, h];
          }
        });
      });
    }, t.prototype.computeIndirectObjectSize = function (t) {
      var e = t[0],
          n = t[1];
      return e.sizeInBytes() + 3 + (n.sizeInBytes() + 9);
    }, t.prototype.createTrailerDict = function () {
      return this.context.obj({
        Size: this.context.largestObjectNumber + 1,
        Root: this.context.trailerInfo.Root,
        Encrypt: this.context.trailerInfo.Encrypt,
        Info: this.context.trailerInfo.Info,
        ID: this.context.trailerInfo.ID
      });
    }, t.prototype.computeBufferSize = function () {
      return i(this, void 0, void 0, function () {
        var t, e, n, r, i, a, s, u, h, c, f;
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              t = qi.forVersion(1, 7), e = t.sizeInBytes() + 2, n = lo.create(), r = this.context.enumerateIndirectObjects(), i = 0, a = r.length, o.label = 1;

            case 1:
              return i < a ? (s = r[i], u = s[0], n.addEntry(u, e), e += this.computeIndirectObjectSize(s), this.shouldWaitForTick(1) ? [4, M()] : [3, 3]) : [3, 4];

            case 2:
              o.sent(), o.label = 3;

            case 3:
              return i++, [3, 1];

            case 4:
              return h = e, e += n.sizeInBytes() + 1, c = yo.of(this.createTrailerDict()), e += c.sizeInBytes() + 2, f = po.forLastCrossRefSectionOffset(h), [2, {
                size: e += f.sizeInBytes(),
                header: t,
                indirectObjects: r,
                xref: n,
                trailerDict: c,
                trailer: f
              }];
          }
        });
      });
    }, t.forContext = function (e, n) {
      return new t(e, n);
    }, t;
  }(),
      mo = function (t) {
    function e(e) {
      var n = t.call(this) || this;
      return n.data = e, n;
    }

    return n(e, t), e.prototype.clone = function () {
      return e.of(this.data.slice());
    }, e.prototype.toString = function () {
      return "PDFInvalidObject(" + this.data.length + " bytes)";
    }, e.prototype.sizeInBytes = function () {
      return this.data.length;
    }, e.prototype.copyBytesInto = function (t, e) {
      for (var n = this.data.length, r = 0; r < n; r++) t[e++] = this.data[r];

      return n;
    }, e.of = function (t) {
      return new e(t);
    }, e;
  }(Vi);

  !function (t) {
    t[t.Deleted = 0] = "Deleted", t[t.Uncompressed = 1] = "Uncompressed", t[t.Compressed = 2] = "Compressed";
  }(io || (io = {}));

  var bo,
      wo = function (t) {
    function e(e, n, r) {
      void 0 === r && (r = !0);
      var i = t.call(this, e, r) || this;
      return i.computeIndex = function () {
        for (var t = [], e = 0, n = 0, r = i.entries.length; n < r; n++) {
          var o = i.entries[n],
              a = i.entries[n - 1];
          0 === n ? t.push(o.ref.objectNumber) : o.ref.objectNumber - a.ref.objectNumber > 1 && (t.push(e), t.push(o.ref.objectNumber), e = 0), e += 1;
        }

        return t.push(e), t;
      }, i.computeEntryTuples = function () {
        for (var t = new Array(i.entries.length), e = 0, n = i.entries.length; e < n; e++) {
          var r = i.entries[e];

          if (r.type === io.Deleted) {
            var o = r.type,
                a = r.nextFreeObjectNumber,
                s = r.ref;
            t[e] = [o, a, s.generationNumber];
          }

          if (r.type === io.Uncompressed) {
            o = r.type;
            var u = r.offset;
            s = r.ref;
            t[e] = [o, u, s.generationNumber];
          }

          if (r.type === io.Compressed) {
            o = r.type;
            var h = r.objectStreamRef,
                c = r.index;
            t[e] = [o, h.objectNumber, c];
          }
        }

        return t;
      }, i.computeMaxEntryByteWidths = function () {
        for (var t = i.entryTuplesCache.access(), e = [0, 0, 0], n = 0, r = t.length; n < r; n++) {
          var o = t[n],
              a = o[0],
              s = o[1],
              u = o[2],
              h = H(a),
              c = H(s),
              f = H(u);
          h > e[0] && (e[0] = h), c > e[1] && (e[1] = c), f > e[2] && (e[2] = f);
        }

        return e;
      }, i.entries = n || [], i.entryTuplesCache = pi.populatedBy(i.computeEntryTuples), i.maxByteWidthsCache = pi.populatedBy(i.computeMaxEntryByteWidths), i.indexCache = pi.populatedBy(i.computeIndex), e.set(Yi.of("Type"), Yi.of("XRef")), i;
    }

    return n(e, t), e.prototype.addDeletedEntry = function (t, e) {
      var n = io.Deleted;
      this.entries.push({
        type: n,
        ref: t,
        nextFreeObjectNumber: e
      }), this.entryTuplesCache.invalidate(), this.maxByteWidthsCache.invalidate(), this.indexCache.invalidate(), this.contentsCache.invalidate();
    }, e.prototype.addUncompressedEntry = function (t, e) {
      var n = io.Uncompressed;
      this.entries.push({
        type: n,
        ref: t,
        offset: e
      }), this.entryTuplesCache.invalidate(), this.maxByteWidthsCache.invalidate(), this.indexCache.invalidate(), this.contentsCache.invalidate();
    }, e.prototype.addCompressedEntry = function (t, e, n) {
      var r = io.Compressed;
      this.entries.push({
        type: r,
        ref: t,
        objectStreamRef: e,
        index: n
      }), this.entryTuplesCache.invalidate(), this.maxByteWidthsCache.invalidate(), this.indexCache.invalidate(), this.contentsCache.invalidate();
    }, e.prototype.clone = function (t) {
      var n = this.dict,
          r = this.entries,
          i = this.encode;
      return e.of(n.clone(t), r.slice(), i);
    }, e.prototype.getContentsString = function () {
      for (var t = this.entryTuplesCache.access(), e = this.maxByteWidthsCache.access(), n = "", r = 0, i = t.length; r < i; r++) {
        for (var o = t[r], a = o[0], s = o[1], u = o[2], h = U(L(a)), c = U(L(s)), f = U(L(u)), l = e[0] - 1; l >= 0; l--) n += (h[l] || 0).toString(2);

        for (l = e[1] - 1; l >= 0; l--) n += (c[l] || 0).toString(2);

        for (l = e[2] - 1; l >= 0; l--) n += (f[l] || 0).toString(2);
      }

      return n;
    }, e.prototype.getUnencodedContents = function () {
      for (var t = this.entryTuplesCache.access(), e = this.maxByteWidthsCache.access(), n = new Uint8Array(this.getUnencodedContentsSize()), r = 0, i = 0, o = t.length; i < o; i++) {
        for (var a = t[i], s = a[0], u = a[1], h = a[2], c = U(L(s)), f = U(L(u)), l = U(L(h)), d = e[0] - 1; d >= 0; d--) n[r++] = c[d] || 0;

        for (d = e[1] - 1; d >= 0; d--) n[r++] = f[d] || 0;

        for (d = e[2] - 1; d >= 0; d--) n[r++] = l[d] || 0;
      }

      return n;
    }, e.prototype.getUnencodedContentsSize = function () {
      var t = this.maxByteWidthsCache.access();
      return I(t) * this.entries.length;
    }, e.prototype.updateDict = function () {
      t.prototype.updateDict.call(this);
      var e = this.maxByteWidthsCache.access(),
          n = this.indexCache.access(),
          r = this.dict.context;
      this.dict.set(Yi.of("W"), r.obj(e)), this.dict.set(Yi.of("Index"), r.obj(n));
    }, e.create = function (t, n) {
      void 0 === n && (n = !0);
      var r = new e(t, [], n);
      return r.addDeletedEntry(no.of(0, 65535), 0), r;
    }, e.of = function (t, n, r) {
      return void 0 === r && (r = !0), new e(t, n, r);
    }, e;
  }(ao),
      xo = function (t) {
    function e(e, n, r, i) {
      var o = t.call(this, e, n) || this;
      return o.encodeStreams = r, o.objectsPerStream = i, o;
    }

    return n(e, t), e.prototype.computeBufferSize = function () {
      return i(this, void 0, void 0, function () {
        var t, e, n, r, i, a, s, u, h, c, f, l, d, p, y, g, v, m, b;
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              t = this.context.largestObjectNumber + 1, e = qi.forVersion(1, 7), n = e.sizeInBytes() + 2, r = wo.create(this.createTrailerDict(), this.encodeStreams), i = [], a = [], s = [], u = this.context.enumerateIndirectObjects(), l = 0, d = u.length, o.label = 1;

            case 1:
              return l < d ? (h = u[l], y = h[0], c = h[1], y === this.context.trailerInfo.Encrypt || c instanceof _i || c instanceof mo || 0 !== y.generationNumber ? (i.push(h), r.addUncompressedEntry(y, n), n += this.computeIndirectObjectSize(h), this.shouldWaitForTick(1) ? [4, M()] : [3, 3]) : [3, 4]) : [3, 6];

            case 2:
              o.sent(), o.label = 3;

            case 3:
              return [3, 5];

            case 4:
              p = P(a), f = P(s), p && p.length % this.objectsPerStream != 0 || (p = [], a.push(p), f = no.of(t++), s.push(f)), r.addCompressedEntry(y, f, p.length), p.push(h), o.label = 5;

            case 5:
              return l++, [3, 1];

            case 6:
              l = 0, d = a.length, o.label = 7;

            case 7:
              return l < d ? (p = a[l], y = s[l], g = go.withContextAndObjects(this.context, p, this.encodeStreams), r.addUncompressedEntry(y, n), n += this.computeIndirectObjectSize([y, g]), i.push([y, g]), this.shouldWaitForTick(p.length) ? [4, M()] : [3, 9]) : [3, 10];

            case 8:
              o.sent(), o.label = 9;

            case 9:
              return l++, [3, 7];

            case 10:
              return v = no.of(t++), r.dict.set(Yi.of("Size"), Qi.of(t)), r.addUncompressedEntry(v, n), m = n, n += this.computeIndirectObjectSize([v, r]), i.push([v, r]), b = po.forLastCrossRefSectionOffset(m), [2, {
                size: n += b.sizeInBytes(),
                header: e,
                indirectObjects: i,
                trailer: b
              }];
          }
        });
      });
    }, e.forContext = function (t, n, r, i) {
      return void 0 === r && (r = !0), void 0 === i && (i = 50), new e(t, n, r, i);
    }, e;
  }(vo),
      So = function (t) {
    function e(e) {
      var n = t.call(this) || this;
      return n.value = e, n;
    }

    return n(e, t), e.prototype.clone = function () {
      return e.of(this.value);
    }, e.prototype.toString = function () {
      return "<" + this.value + ">";
    }, e.prototype.sizeInBytes = function () {
      return this.value.length + 2;
    }, e.prototype.copyBytesInto = function (t, e) {
      return t[e++] = Ii.LessThan, e += x(this.value, t, e), t[e++] = Ii.GreaterThan, this.value.length + 2;
    }, e.of = function (t) {
      return new e(t);
    }, e.fromText = function (t) {
      for (var n = E(t), r = "", i = 0, o = n.length; i < o; i++) r += g(n[i], 4);

      return new e(r);
    }, e;
  }(Vi),
      ko = function () {
    function t(t) {
      this.encoding = t === Xr.ZapfDingbats ? ei.ZapfDingbats : t === Xr.Symbol ? ei.Symbol : ei.WinAnsi, this.font = Qr.load(t), this.fontName = this.font.FontName;
    }

    return t.prototype.encodeText = function (t) {
      for (var e = this.encodeTextAsGlyphs(t), n = new Array(e.length), r = 0, i = e.length; r < i; r++) n[r] = v(e[r].code);

      return So.of(n.join(""));
    }, t.prototype.widthOfTextAtSize = function (t, e) {
      for (var n = this.encodeTextAsGlyphs(t), r = 0, i = 0, o = n.length; i < o; i++) {
        var a = n[i].name,
            s = (n[i + 1] || {}).name,
            u = this.font.getXAxisKerningForPair(a, s) || 0;
        r += this.widthOfGlyph(a) + u;
      }

      return r * (e / 1e3);
    }, t.prototype.heightOfFontAtSize = function (t) {
      var e = this.font,
          n = e.Ascender,
          r = e.Descender,
          i = e.FontBBox;
      return ((n || i[3]) - (r || i[1])) / 1e3 * t;
    }, t.prototype.sizeOfFontAtHeight = function (t) {
      var e = this.font,
          n = e.Ascender,
          r = e.Descender,
          i = e.FontBBox;
      return 1e3 * t / ((n || i[3]) - (r || i[1]));
    }, t.prototype.embedIntoContext = function (t, e) {
      var n = t.obj({
        Type: "Font",
        Subtype: "Type1",
        BaseFont: this.font.FontName,
        Encoding: this.encoding === ei.WinAnsi ? "WinAnsiEncoding" : void 0
      });
      return e ? (t.assign(e, n), e) : t.register(n);
    }, t.prototype.widthOfGlyph = function (t) {
      return this.font.getWidthOfGlyph(t) || 250;
    }, t.prototype.encodeTextAsGlyphs = function (t) {
      for (var e = Array.from(t), n = new Array(e.length), r = 0, i = e.length; r < i; r++) {
        var o = y(e[r]);
        n[r] = this.encoding.encodeUnicodeCodePoint(o);
      }

      return n;
    }, t.for = function (e) {
      return new t(e);
    }, t;
  }(),
      Co = function Co(t) {
    return "/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000><ffff>\nendcodespacerange\n" + t.length + " beginbfchar\n" + t.map(function (t) {
      return t[0] + " " + t[1];
    }).join("\n") + "\nendbfchar\nendcmap\nCMapName currentdict /CMap defineresource pop\nend\nend";
  },
      Fo = function Fo() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];

    return "<" + t.join("") + ">";
  },
      Po = function Po(t) {
    return g(t, 4);
  },
      Ro = function Ro(t) {
    if (A(t)) return Po(t);

    if (G(t)) {
      var e = K(t),
          n = W(t);
      return "" + Po(e) + Po(n);
    }

    var r = v(t);
    throw new Error("0x" + r + " is not a valid UTF-8 or UTF-16 codepoint.");
  },
      Oo = function (t) {
    function e(e) {
      var n = t.call(this) || this;
      return n.value = e, n;
    }

    return n(e, t), e.prototype.clone = function () {
      return e.of(this.value);
    }, e.prototype.toString = function () {
      return "(" + this.value + ")";
    }, e.prototype.sizeInBytes = function () {
      return this.value.length + 2;
    }, e.prototype.copyBytesInto = function (t, e) {
      return t[e++] = Ii.LeftParen, e += x(this.value, t, e), t[e++] = Ii.RightParen, this.value.length + 2;
    }, e.of = function (t) {
      return new e(t);
    }, e.fromDate = function (t) {
      return new e("D:" + w(String(t.getUTCFullYear()), 4, "0") + w(String(t.getUTCMonth() + 1), 2, "0") + w(String(t.getUTCDate()), 2, "0") + w(String(t.getUTCHours()), 2, "0") + w(String(t.getUTCMinutes()), 2, "0") + w(String(t.getUTCSeconds()), 2, "0") + "Z");
    }, e;
  }(Vi),
      To = function () {
    function t(t, e) {
      var n = this;
      this.allGlyphsInFontSortedById = function () {
        for (var t = new Array(n.font.characterSet.length), e = 0, r = t.length; e < r; e++) {
          var i = n.font.characterSet[e];
          t[e] = n.font.glyphForCodePoint(i);
        }

        return N(t.sort(z), function (t) {
          return t.id;
        });
      }, this.font = t, this.scale = 1e3 / this.font.unitsPerEm, this.fontData = e, this.fontName = this.font.postscriptName || "Font", this.baseFontName = "", this.glyphCache = pi.populatedBy(this.allGlyphsInFontSortedById);
    }

    return t.for = function (e, n) {
      return i(this, void 0, void 0, function () {
        return o(this, function (r) {
          switch (r.label) {
            case 0:
              return [4, e.create(n)];

            case 1:
              return [2, new t(r.sent(), n)];
          }
        });
      });
    }, t.prototype.encodeText = function (t) {
      for (var e = this.font.layout(t).glyphs, n = new Array(e.length), r = 0, i = e.length; r < i; r++) n[r] = g(e[r].id, 4);

      return So.of(n.join(""));
    }, t.prototype.widthOfTextAtSize = function (t, e) {
      for (var n = this.font.layout(t).glyphs, r = 0, i = 0, o = n.length; i < o; i++) r += n[i].advanceWidth * this.scale;

      return r * (e / 1e3);
    }, t.prototype.heightOfFontAtSize = function (t) {
      var e = this.font,
          n = e.ascent,
          r = e.descent,
          i = e.bbox;
      return ((n || i.maxY) * this.scale - (r || i.minY) * this.scale) / 1e3 * t;
    }, t.prototype.sizeOfFontAtHeight = function (t) {
      var e = this.font,
          n = e.ascent,
          r = e.descent,
          i = e.bbox;
      return 1e3 * t / ((n || i.maxY) * this.scale - (r || i.minY) * this.scale);
    }, t.prototype.embedIntoContext = function (t, e) {
      return this.baseFontName = S(this.fontName), this.embedFontDict(t, e);
    }, t.prototype.embedFontDict = function (t, e) {
      return i(this, void 0, void 0, function () {
        var n, r, i;
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              return [4, this.embedCIDFontDict(t)];

            case 1:
              return n = o.sent(), r = this.embedUnicodeCmap(t), i = t.obj({
                Type: "Font",
                Subtype: "Type0",
                BaseFont: this.baseFontName,
                Encoding: "Identity-H",
                DescendantFonts: [n],
                ToUnicode: r
              }), e ? (t.assign(e, i), [2, e]) : [2, t.register(i)];
          }
        });
      });
    }, t.prototype.isCFF = function () {
      return this.font.cff;
    }, t.prototype.embedCIDFontDict = function (t) {
      return i(this, void 0, void 0, function () {
        var e, n;
        return o(this, function (r) {
          switch (r.label) {
            case 0:
              return [4, this.embedFontDescriptor(t)];

            case 1:
              return e = r.sent(), n = t.obj({
                Type: "Font",
                Subtype: this.isCFF() ? "CIDFontType0" : "CIDFontType2",
                BaseFont: this.baseFontName,
                CIDSystemInfo: {
                  Registry: Oo.of("Adobe"),
                  Ordering: Oo.of("Identity"),
                  Supplement: 0
                },
                FontDescriptor: e,
                W: this.computeWidths()
              }), [2, t.register(n)];
          }
        });
      });
    }, t.prototype.embedFontDescriptor = function (t) {
      return i(this, void 0, void 0, function () {
        var e, n, r, i, a, s, u, h, c, f, l, d, p, y, g;
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              return [4, this.embedFontStream(t)];

            case 1:
              return e = o.sent(), n = this.scale, r = this.font, i = r.italicAngle, a = r.ascent, s = r.descent, u = r.capHeight, h = r.xHeight, c = this.font.bbox, f = c.minX, l = c.minY, d = c.maxX, p = c.maxY, y = t.obj(((g = {
                Type: "FontDescriptor",
                FontName: this.baseFontName,
                Flags: (w = this.font, x = w["OS/2"] ? w["OS/2"].sFamilyClass : 0, v = {
                  fixedPitch: w.post.isFixedPitch,
                  serif: 1 <= x && x <= 7,
                  symbolic: !0,
                  script: 10 === x,
                  italic: w.head.macStyle.italic
                }, m = 0, b = function (t) {
                  m |= 1 << t - 1;
                }, v.fixedPitch && b(1), v.serif && b(2), v.symbolic && b(3), v.script && b(4), v.nonsymbolic && b(6), v.italic && b(7), v.allCap && b(17), v.smallCap && b(18), v.forceBold && b(19), m),
                FontBBox: [f * n, l * n, d * n, p * n],
                ItalicAngle: i,
                Ascent: a * n,
                Descent: s * n,
                CapHeight: (u || a) * n,
                XHeight: (h || 0) * n,
                StemV: 0
              })[this.isCFF() ? "FontFile3" : "FontFile2"] = e, g)), [2, t.register(y)];
          }

          var v, m, b, w, x;
        });
      });
    }, t.prototype.serializeFont = function () {
      return i(this, void 0, void 0, function () {
        return o(this, function (t) {
          return [2, this.fontData];
        });
      });
    }, t.prototype.embedFontStream = function (t) {
      return i(this, void 0, void 0, function () {
        var e, n, r;
        return o(this, function (i) {
          switch (i.label) {
            case 0:
              return r = (n = t).flateStream, [4, this.serializeFont()];

            case 1:
              return e = r.apply(n, [i.sent(), {
                Subtype: this.isCFF() ? "CIDFontType0C" : void 0
              }]), [2, t.register(e)];
          }
        });
      });
    }, t.prototype.embedUnicodeCmap = function (t) {
      var e = function (t, e) {
        for (var n = new Array(t.length), r = 0, i = t.length; r < i; r++) {
          var o = t[r],
              a = Fo(Po(e(o))),
              s = Fo.apply(void 0, o.codePoints.map(Ro));
          n[r] = [a, s];
        }

        return Co(n);
      }(this.glyphCache.access(), this.glyphId.bind(this)),
          n = t.flateStream(e);

      return t.register(n);
    }, t.prototype.glyphId = function (t) {
      return t ? t.id : -1;
    }, t.prototype.computeWidths = function () {
      for (var t = this.glyphCache.access(), e = [], n = [], r = 0, i = t.length; r < i; r++) {
        var o = t[r],
            a = t[r - 1],
            s = this.glyphId(o),
            u = this.glyphId(a);
        0 === r ? e.push(s) : s - u != 1 && (e.push(n), e.push(s), n = []), n.push(o.advanceWidth * this.scale);
      }

      return e.push(n), e;
    }, t;
  }(),
      jo = function (t) {
    function e(e, n) {
      var r = t.call(this, e, n) || this;
      return r.subset = r.font.createSubset(), r.glyphs = [], r.glyphCache = pi.populatedBy(function () {
        return r.glyphs;
      }), r.glyphIdMap = new Map(), r;
    }

    return n(e, t), e.for = function (t, n) {
      return i(this, void 0, void 0, function () {
        return o(this, function (r) {
          switch (r.label) {
            case 0:
              return [4, t.create(n)];

            case 1:
              return [2, new e(r.sent(), n)];
          }
        });
      });
    }, e.prototype.encodeText = function (t) {
      for (var e = this.font.layout(t).glyphs, n = new Array(e.length), r = 0, i = e.length; r < i; r++) {
        var o = e[r],
            a = this.subset.includeGlyph(o);
        this.glyphs[a - 1] = o, this.glyphIdMap.set(o.id, a), n[r] = g(a, 4);
      }

      return this.glyphCache.invalidate(), So.of(n.join(""));
    }, e.prototype.isCFF = function () {
      return this.subset.cff;
    }, e.prototype.glyphId = function (t) {
      return t ? this.glyphIdMap.get(t.id) : -1;
    }, e.prototype.serializeFont = function () {
      var t = this;
      return new Promise(function (e, n) {
        var r = [];
        t.subset.encodeStream().on("data", function (t) {
          return r.push(t);
        }).on("end", function () {
          return e(T(r));
        }).on("error", function (t) {
          return n(t);
        });
      });
    }, e;
  }(To),
      zo = [65472, 65473, 65474, 65475, 65477, 65478, 65479, 65480, 65481, 65482, 65483, 65484, 65485, 65486, 65487];

  !function (t) {
    t.DeviceGray = "DeviceGray", t.DeviceRGB = "DeviceRGB", t.DeviceCYMK = "DeviceCYMK";
  }(bo || (bo = {}));

  var No,
      Uo,
      Io,
      qo = {
    1: bo.DeviceGray,
    3: bo.DeviceRGB,
    4: bo.DeviceCYMK
  },
      Vo = function () {
    function t(t, e, n, r, i) {
      this.imageData = t, this.bitsPerComponent = e, this.width = n, this.height = r, this.colorSpace = i;
    }

    return t.for = function (e) {
      return i(this, void 0, void 0, function () {
        var n, r, i, a, s, u, h, c;
        return o(this, function (o) {
          if (n = new DataView(e.buffer), 65496 !== n.getUint16(0)) throw new Error("SOI not found in JPEG");

          for (r = 2; r < n.byteLength && (i = n.getUint16(r), r += 2, !zo.includes(i));) r += n.getUint16(r);

          if (!zo.includes(i)) throw new Error("Invalid JPEG");
          if (r += 2, a = n.getUint8(r++), s = n.getUint16(r), r += 2, u = n.getUint16(r), r += 2, h = n.getUint8(r++), !(c = qo[h])) throw new Error("Unknown JPEG channel.");
          return [2, new t(e, a, u, s, c)];
        });
      });
    }, t.prototype.embedIntoContext = function (t, e) {
      return i(this, void 0, void 0, function () {
        var n;
        return o(this, function (r) {
          return n = t.stream(this.imageData, {
            Type: "XObject",
            Subtype: "Image",
            BitsPerComponent: this.bitsPerComponent,
            Width: this.width,
            Height: this.height,
            ColorSpace: this.colorSpace,
            Filter: "DCTDecode"
          }), e ? (t.assign(e, n), [2, e]) : [2, t.register(n)];
        });
      });
    }, t;
  }(),
      Bo = {};

  Bo.toRGBA8 = function (t) {
    var e = t.width,
        n = t.height;
    if (null == t.tabs.acTL) return [Bo.toRGBA8.decodeImage(t.data, e, n, t).buffer];
    var r = [];
    null == t.frames[0].data && (t.frames[0].data = t.data);

    for (var i = e * n * 4, o = new Uint8Array(i), a = new Uint8Array(i), s = new Uint8Array(i), u = 0; u < t.frames.length; u++) {
      var h = t.frames[u],
          c = h.rect.x,
          f = h.rect.y,
          l = h.rect.width,
          d = h.rect.height,
          p = Bo.toRGBA8.decodeImage(h.data, l, d, t);
      if (0 != u) for (var y = 0; y < i; y++) s[y] = o[y];
      if (0 == h.blend ? Bo._copyTile(p, l, d, o, e, n, c, f, 0) : 1 == h.blend && Bo._copyTile(p, l, d, o, e, n, c, f, 1), r.push(o.buffer.slice(0)), 0 == h.dispose) ;else if (1 == h.dispose) Bo._copyTile(a, l, d, o, e, n, c, f, 0);else if (2 == h.dispose) for (y = 0; y < i; y++) o[y] = s[y];
    }

    return r;
  }, Bo.toRGBA8.decodeImage = function (t, e, n, r) {
    var i = e * n,
        o = Bo.decode._getBPP(r),
        a = Math.ceil(e * o / 8),
        s = new Uint8Array(4 * i),
        u = new Uint32Array(s.buffer),
        h = r.ctype,
        c = r.depth,
        f = Bo._bin.readUshort;

    if (6 == h) {
      var l = i << 2;
      if (8 == c) for (var d = 0; d < l; d += 4) s[d] = t[d], s[d + 1] = t[d + 1], s[d + 2] = t[d + 2], s[d + 3] = t[d + 3];
      if (16 == c) for (d = 0; d < l; d++) s[d] = t[d << 1];
    } else if (2 == h) {
      var p = r.tabs.tRNS;

      if (null == p) {
        if (8 == c) for (d = 0; d < i; d++) {
          var y = 3 * d;
          u[d] = 255 << 24 | t[y + 2] << 16 | t[y + 1] << 8 | t[y];
        }
        if (16 == c) for (d = 0; d < i; d++) {
          y = 6 * d;
          u[d] = 255 << 24 | t[y + 4] << 16 | t[y + 2] << 8 | t[y];
        }
      } else {
        var g = p[0],
            v = p[1],
            m = p[2];
        if (8 == c) for (d = 0; d < i; d++) {
          var b = d << 2;
          y = 3 * d;
          u[d] = 255 << 24 | t[y + 2] << 16 | t[y + 1] << 8 | t[y], t[y] == g && t[y + 1] == v && t[y + 2] == m && (s[b + 3] = 0);
        }
        if (16 == c) for (d = 0; d < i; d++) {
          b = d << 2, y = 6 * d;
          u[d] = 255 << 24 | t[y + 4] << 16 | t[y + 2] << 8 | t[y], f(t, y) == g && f(t, y + 2) == v && f(t, y + 4) == m && (s[b + 3] = 0);
        }
      }
    } else if (3 == h) {
      var w = r.tabs.PLTE,
          x = r.tabs.tRNS,
          S = x ? x.length : 0;
      if (1 == c) for (var k = 0; k < n; k++) {
        var C = k * a,
            F = k * e;

        for (d = 0; d < e; d++) {
          b = F + d << 2;
          var P = 3 * (R = t[C + (d >> 3)] >> 7 - ((7 & d) << 0) & 1);
          s[b] = w[P], s[b + 1] = w[P + 1], s[b + 2] = w[P + 2], s[b + 3] = R < S ? x[R] : 255;
        }
      }
      if (2 == c) for (k = 0; k < n; k++) for (C = k * a, F = k * e, d = 0; d < e; d++) {
        b = F + d << 2, P = 3 * (R = t[C + (d >> 2)] >> 6 - ((3 & d) << 1) & 3);
        s[b] = w[P], s[b + 1] = w[P + 1], s[b + 2] = w[P + 2], s[b + 3] = R < S ? x[R] : 255;
      }
      if (4 == c) for (k = 0; k < n; k++) for (C = k * a, F = k * e, d = 0; d < e; d++) {
        b = F + d << 2, P = 3 * (R = t[C + (d >> 1)] >> 4 - ((1 & d) << 2) & 15);
        s[b] = w[P], s[b + 1] = w[P + 1], s[b + 2] = w[P + 2], s[b + 3] = R < S ? x[R] : 255;
      }
      if (8 == c) for (d = 0; d < i; d++) {
        var R;
        b = d << 2, P = 3 * (R = t[d]);
        s[b] = w[P], s[b + 1] = w[P + 1], s[b + 2] = w[P + 2], s[b + 3] = R < S ? x[R] : 255;
      }
    } else if (4 == h) {
      if (8 == c) for (d = 0; d < i; d++) {
        b = d << 2;
        var O = t[T = d << 1];
        s[b] = O, s[b + 1] = O, s[b + 2] = O, s[b + 3] = t[T + 1];
      }
      if (16 == c) for (d = 0; d < i; d++) {
        var T;
        b = d << 2, O = t[T = d << 2];
        s[b] = O, s[b + 1] = O, s[b + 2] = O, s[b + 3] = t[T + 2];
      }
    } else if (0 == h) for (g = r.tabs.tRNS ? r.tabs.tRNS : -1, k = 0; k < n; k++) {
      var j = k * a,
          z = k * e;
      if (1 == c) for (var N = 0; N < e; N++) {
        var U = (O = 255 * (t[j + (N >>> 3)] >>> 7 - (7 & N) & 1)) == 255 * g ? 0 : 255;
        u[z + N] = U << 24 | O << 16 | O << 8 | O;
      } else if (2 == c) for (N = 0; N < e; N++) {
        U = (O = 85 * (t[j + (N >>> 2)] >>> 6 - ((3 & N) << 1) & 3)) == 85 * g ? 0 : 255;
        u[z + N] = U << 24 | O << 16 | O << 8 | O;
      } else if (4 == c) for (N = 0; N < e; N++) {
        U = (O = 17 * (t[j + (N >>> 1)] >>> 4 - ((1 & N) << 2) & 15)) == 17 * g ? 0 : 255;
        u[z + N] = U << 24 | O << 16 | O << 8 | O;
      } else if (8 == c) for (N = 0; N < e; N++) {
        U = (O = t[j + N]) == g ? 0 : 255;
        u[z + N] = U << 24 | O << 16 | O << 8 | O;
      } else if (16 == c) for (N = 0; N < e; N++) {
        O = t[j + (N << 1)], U = f(t, j + (N << d)) == g ? 0 : 255;
        u[z + N] = U << 24 | O << 16 | O << 8 | O;
      }
    }

    return s;
  }, Bo.decode = function (t) {
    for (var e, n = new Uint8Array(t), r = 8, i = Bo._bin, o = i.readUshort, a = i.readUint, s = {
      tabs: {},
      frames: []
    }, u = new Uint8Array(n.length), h = 0, c = 0, f = [137, 80, 78, 71, 13, 10, 26, 10], l = 0; l < 8; l++) if (n[l] != f[l]) throw "The input is not a PNG file!";

    for (; r < n.length;) {
      var d = i.readUint(n, r);
      r += 4;
      var p = i.readASCII(n, r, 4);
      if (r += 4, "IHDR" == p) Bo.decode._IHDR(n, r, s);else if ("IDAT" == p) {
        for (l = 0; l < d; l++) u[h + l] = n[r + l];

        h += d;
      } else if ("acTL" == p) s.tabs[p] = {
        num_frames: a(n, r),
        num_plays: a(n, r + 4)
      }, e = new Uint8Array(n.length);else if ("fcTL" == p) {
        var y;
        if (0 != c) (y = s.frames[s.frames.length - 1]).data = Bo.decode._decompress(s, e.slice(0, c), y.rect.width, y.rect.height), c = 0;
        var g = {
          x: a(n, r + 12),
          y: a(n, r + 16),
          width: a(n, r + 4),
          height: a(n, r + 8)
        },
            v = o(n, r + 22);
        v = o(n, r + 20) / (0 == v ? 100 : v);
        var m = {
          rect: g,
          delay: Math.round(1e3 * v),
          dispose: n[r + 24],
          blend: n[r + 25]
        };
        s.frames.push(m);
      } else if ("fdAT" == p) {
        for (l = 0; l < d - 4; l++) e[c + l] = n[r + l + 4];

        c += d - 4;
      } else if ("pHYs" == p) s.tabs[p] = [i.readUint(n, r), i.readUint(n, r + 4), n[r + 8]];else if ("cHRM" == p) {
        s.tabs[p] = [];

        for (l = 0; l < 8; l++) s.tabs[p].push(i.readUint(n, r + 4 * l));
      } else if ("tEXt" == p) {
        null == s.tabs[p] && (s.tabs[p] = {});
        var b = i.nextZero(n, r),
            w = i.readASCII(n, r, b - r),
            x = i.readASCII(n, b + 1, r + d - b - 1);
        s.tabs[p][w] = x;
      } else if ("iTXt" == p) {
        null == s.tabs[p] && (s.tabs[p] = {});
        b = 0;
        var S = r;
        b = i.nextZero(n, S);
        w = i.readASCII(n, S, b - S);
        S = b + 1, S += 2, b = i.nextZero(n, S);
        i.readASCII(n, S, b - S);
        S = b + 1, b = i.nextZero(n, S);
        i.readUTF8(n, S, b - S);
        S = b + 1;
        x = i.readUTF8(n, S, d - (S - r));
        s.tabs[p][w] = x;
      } else if ("PLTE" == p) s.tabs[p] = i.readBytes(n, r, d);else if ("hIST" == p) {
        var k = s.tabs.PLTE.length / 3;
        s.tabs[p] = [];

        for (l = 0; l < k; l++) s.tabs[p].push(o(n, r + 2 * l));
      } else if ("tRNS" == p) 3 == s.ctype ? s.tabs[p] = i.readBytes(n, r, d) : 0 == s.ctype ? s.tabs[p] = o(n, r) : 2 == s.ctype && (s.tabs[p] = [o(n, r), o(n, r + 2), o(n, r + 4)]);else if ("gAMA" == p) s.tabs[p] = i.readUint(n, r) / 1e5;else if ("sRGB" == p) s.tabs[p] = n[r];else if ("bKGD" == p) 0 == s.ctype || 4 == s.ctype ? s.tabs[p] = [o(n, r)] : 2 == s.ctype || 6 == s.ctype ? s.tabs[p] = [o(n, r), o(n, r + 2), o(n, r + 4)] : 3 == s.ctype && (s.tabs[p] = n[r]);else if ("IEND" == p) break;
      r += d;
      i.readUint(n, r);
      r += 4;
    }

    0 != c && ((y = s.frames[s.frames.length - 1]).data = Bo.decode._decompress(s, e.slice(0, c), y.rect.width, y.rect.height), c = 0);
    return s.data = Bo.decode._decompress(s, u, s.width, s.height), delete s.compress, delete s.interlace, delete s.filter, s;
  }, Bo.decode._decompress = function (t, e, n, r) {
    var i = Bo.decode._getBPP(t),
        o = Math.ceil(n * i / 8),
        a = new Uint8Array((o + 1 + t.interlace) * r);

    return e = Bo.decode._inflate(e, a), 0 == t.interlace ? e = Bo.decode._filterZero(e, t, 0, n, r) : 1 == t.interlace && (e = Bo.decode._readInterlace(e, t)), e;
  }, Bo.decode._inflate = function (t, e) {
    return Bo.inflateRaw(new Uint8Array(t.buffer, 2, t.length - 6), e);
  }, Bo.inflateRaw = ((Io = {}).H = {}, Io.H.N = function (t, e) {
    var n,
        r,
        i = Uint8Array,
        o = 0,
        a = 0,
        s = 0,
        u = 0,
        h = 0,
        c = 0,
        f = 0,
        l = 0,
        d = 0;
    if (3 == t[0] && 0 == t[1]) return e || new i(0);
    var p = Io.H,
        y = p.b,
        g = p.e,
        v = p.R,
        m = p.n,
        b = p.A,
        w = p.Z,
        x = p.m,
        S = null == e;

    for (S && (e = new i(t.length >>> 2 << 3)); 0 == o;) if (o = y(t, d, 1), a = y(t, d + 1, 2), d += 3, 0 != a) {
      if (S && (e = Io.H.W(e, l + (1 << 17))), 1 == a && (n = x.J, r = x.h, c = 511, f = 31), 2 == a) {
        s = g(t, d, 5) + 257, u = g(t, d + 5, 5) + 1, h = g(t, d + 10, 4) + 4, d += 14;

        for (var k = 1, C = 0; C < 38; C += 2) x.Q[C] = 0, x.Q[C + 1] = 0;

        for (C = 0; C < h; C++) {
          var F = g(t, d + 3 * C, 3);
          x.Q[1 + (x.X[C] << 1)] = F, F > k && (k = F);
        }

        d += 3 * h, m(x.Q, k), b(x.Q, k, x.u), n = x.w, r = x.d, d = v(x.u, (1 << k) - 1, s + u, t, d, x.v);
        var P = p.V(x.v, 0, s, x.C);
        c = (1 << P) - 1;
        var R = p.V(x.v, s, u, x.D);
        f = (1 << R) - 1, m(x.C, P), b(x.C, P, n), m(x.D, R), b(x.D, R, r);
      }

      for (;;) {
        var O = n[w(t, d) & c];
        d += 15 & O;
        var T = O >>> 4;
        if (T >>> 8 == 0) e[l++] = T;else {
          if (256 == T) break;
          var j = l + T - 254;

          if (T > 264) {
            var z = x.q[T - 257];
            j = l + (z >>> 3) + g(t, d, 7 & z), d += 7 & z;
          }

          var N = r[w(t, d) & f];
          d += 15 & N;
          var U = N >>> 4,
              I = x.c[U],
              q = (I >>> 4) + y(t, d, 15 & I);

          for (d += 15 & I; l < j;) e[l] = e[l++ - q], e[l] = e[l++ - q], e[l] = e[l++ - q], e[l] = e[l++ - q];

          l = j;
        }
      }
    } else {
      0 != (7 & d) && (d += 8 - (7 & d));
      var V = 4 + (d >>> 3),
          B = t[V - 4] | t[V - 3] << 8;
      S && (e = Io.H.W(e, l + B)), e.set(new i(t.buffer, t.byteOffset + V, B), l), d = V + B << 3, l += B;
    }

    return e.length == l ? e : e.slice(0, l);
  }, Io.H.W = function (t, e) {
    var n = t.length;
    if (e <= n) return t;
    var r = new Uint8Array(n << 1);
    return r.set(t, 0), r;
  }, Io.H.R = function (t, e, n, r, i, o) {
    for (var a = Io.H.e, s = Io.H.Z, u = 0; u < n;) {
      var h = t[s(r, i) & e];
      i += 15 & h;
      var c = h >>> 4;
      if (c <= 15) o[u] = c, u++;else {
        var f = 0,
            l = 0;
        16 == c ? (l = 3 + a(r, i, 2), i += 2, f = o[u - 1]) : 17 == c ? (l = 3 + a(r, i, 3), i += 3) : 18 == c && (l = 11 + a(r, i, 7), i += 7);

        for (var d = u + l; u < d;) o[u] = f, u++;
      }
    }

    return i;
  }, Io.H.V = function (t, e, n, r) {
    for (var i = 0, o = 0, a = r.length >>> 1; o < n;) {
      var s = t[o + e];
      r[o << 1] = 0, r[1 + (o << 1)] = s, s > i && (i = s), o++;
    }

    for (; o < a;) r[o << 1] = 0, r[1 + (o << 1)] = 0, o++;

    return i;
  }, Io.H.n = function (t, e) {
    for (var n, r, i, o, a = Io.H.m, s = t.length, u = a.j, h = 0; h <= e; h++) u[h] = 0;

    for (h = 1; h < s; h += 2) u[t[h]]++;

    var c = a.K;

    for (n = 0, u[0] = 0, r = 1; r <= e; r++) n = n + u[r - 1] << 1, c[r] = n;

    for (i = 0; i < s; i += 2) 0 != (o = t[i + 1]) && (t[i] = c[o], c[o]++);
  }, Io.H.A = function (t, e, n) {
    for (var r = t.length, i = Io.H.m.r, o = 0; o < r; o += 2) if (0 != t[o + 1]) for (var a = o >> 1, s = t[o + 1], u = a << 4 | s, h = e - s, c = t[o] << h, f = c + (1 << h); c != f;) n[i[c] >>> 15 - e] = u, c++;
  }, Io.H.l = function (t, e) {
    for (var n = Io.H.m.r, r = 15 - e, i = 0; i < t.length; i += 2) {
      var o = t[i] << e - t[i + 1];
      t[i] = n[o] >>> r;
    }
  }, Io.H.M = function (t, e, n) {
    n <<= 7 & e;
    var r = e >>> 3;
    t[r] |= n, t[r + 1] |= n >>> 8;
  }, Io.H.I = function (t, e, n) {
    n <<= 7 & e;
    var r = e >>> 3;
    t[r] |= n, t[r + 1] |= n >>> 8, t[r + 2] |= n >>> 16;
  }, Io.H.e = function (t, e, n) {
    return (t[e >>> 3] | t[1 + (e >>> 3)] << 8) >>> (7 & e) & (1 << n) - 1;
  }, Io.H.b = function (t, e, n) {
    return (t[e >>> 3] | t[1 + (e >>> 3)] << 8 | t[2 + (e >>> 3)] << 16) >>> (7 & e) & (1 << n) - 1;
  }, Io.H.Z = function (t, e) {
    return (t[e >>> 3] | t[1 + (e >>> 3)] << 8 | t[2 + (e >>> 3)] << 16) >>> (7 & e);
  }, Io.H.i = function (t, e) {
    return (t[e >>> 3] | t[1 + (e >>> 3)] << 8 | t[2 + (e >>> 3)] << 16 | t[3 + (e >>> 3)] << 24) >>> (7 & e);
  }, Io.H.m = (No = Uint16Array, Uo = Uint32Array, {
    K: new No(16),
    j: new No(16),
    X: [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
    S: [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999, 999, 999],
    T: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0],
    q: new No(32),
    p: [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 65535, 65535],
    z: [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0],
    c: new Uo(32),
    J: new No(512),
    _: [],
    h: new No(32),
    $: [],
    w: new No(32768),
    C: [],
    v: [],
    d: new No(32768),
    D: [],
    u: new No(512),
    Q: [],
    r: new No(32768),
    s: new Uo(286),
    Y: new Uo(30),
    a: new Uo(19),
    t: new Uo(15e3),
    k: new No(65536),
    g: new No(32768)
  }), function () {
    for (var t = Io.H.m, e = 0; e < 32768; e++) {
      var n = e;
      n = (4278255360 & (n = (4042322160 & (n = (3435973836 & (n = (2863311530 & n) >>> 1 | (1431655765 & n) << 1)) >>> 2 | (858993459 & n) << 2)) >>> 4 | (252645135 & n) << 4)) >>> 8 | (16711935 & n) << 8, t.r[e] = (n >>> 16 | n << 16) >>> 17;
    }

    function r(t, e, n) {
      for (; 0 != e--;) t.push(0, n);
    }

    for (e = 0; e < 32; e++) t.q[e] = t.S[e] << 3 | t.T[e], t.c[e] = t.p[e] << 4 | t.z[e];

    r(t._, 144, 8), r(t._, 112, 9), r(t._, 24, 7), r(t._, 8, 8), Io.H.n(t._, 9), Io.H.A(t._, 9, t.J), Io.H.l(t._, 9), r(t.$, 32, 5), Io.H.n(t.$, 5), Io.H.A(t.$, 5, t.h), Io.H.l(t.$, 5), r(t.Q, 19, 0), r(t.C, 286, 0), r(t.D, 30, 0), r(t.v, 320, 0);
  }(), Io.H.N), Bo.decode._readInterlace = function (t, e) {
    for (var n = e.width, r = e.height, i = Bo.decode._getBPP(e), o = i >> 3, a = Math.ceil(n * i / 8), s = new Uint8Array(r * a), u = 0, h = [0, 0, 4, 0, 2, 0, 1], c = [0, 4, 0, 2, 0, 1, 0], f = [8, 8, 8, 4, 4, 2, 2], l = [8, 8, 4, 4, 2, 2, 1], d = 0; d < 7;) {
      for (var p = f[d], y = l[d], g = 0, v = 0, m = h[d]; m < r;) m += p, v++;

      for (var b = c[d]; b < n;) b += y, g++;

      var w = Math.ceil(g * i / 8);

      Bo.decode._filterZero(t, e, u, g, v);

      for (var x = 0, S = h[d]; S < r;) {
        for (var k = c[d], C = u + x * w << 3; k < n;) {
          var F;
          if (1 == i) F = (F = t[C >> 3]) >> 7 - (7 & C) & 1, s[S * a + (k >> 3)] |= F << 7 - ((7 & k) << 0);
          if (2 == i) F = (F = t[C >> 3]) >> 6 - (7 & C) & 3, s[S * a + (k >> 2)] |= F << 6 - ((3 & k) << 1);
          if (4 == i) F = (F = t[C >> 3]) >> 4 - (7 & C) & 15, s[S * a + (k >> 1)] |= F << 4 - ((1 & k) << 2);
          if (i >= 8) for (var P = S * a + k * o, R = 0; R < o; R++) s[P + R] = t[(C >> 3) + R];
          C += i, k += y;
        }

        x++, S += p;
      }

      g * v != 0 && (u += v * (1 + w)), d += 1;
    }

    return s;
  }, Bo.decode._getBPP = function (t) {
    return [1, null, 3, 1, 2, null, 4][t.ctype] * t.depth;
  }, Bo.decode._filterZero = function (t, e, n, r, i) {
    var o = Bo.decode._getBPP(e),
        a = Math.ceil(r * o / 8),
        s = Bo.decode._paeth;

    o = Math.ceil(o / 8);
    var u = 0,
        h = 1,
        c = t[n],
        f = 0;
    if (c > 1 && (t[n] = [0, 0, 1][c - 2]), 3 == c) for (f = o; f < a; f++) t[f + 1] = t[f + 1] + (t[f + 1 - o] >>> 1) & 255;

    for (var l = 0; l < i; l++) if (f = 0, 0 == (c = t[(h = (u = n + l * a) + l + 1) - 1])) for (; f < a; f++) t[u + f] = t[h + f];else if (1 == c) {
      for (; f < o; f++) t[u + f] = t[h + f];

      for (; f < a; f++) t[u + f] = t[h + f] + t[u + f - o];
    } else if (2 == c) for (; f < a; f++) t[u + f] = t[h + f] + t[u + f - a];else if (3 == c) {
      for (; f < o; f++) t[u + f] = t[h + f] + (t[u + f - a] >>> 1);

      for (; f < a; f++) t[u + f] = t[h + f] + (t[u + f - a] + t[u + f - o] >>> 1);
    } else {
      for (; f < o; f++) t[u + f] = t[h + f] + s(0, t[u + f - a], 0);

      for (; f < a; f++) t[u + f] = t[h + f] + s(t[u + f - o], t[u + f - a], t[u + f - o - a]);
    }

    return t;
  }, Bo.decode._paeth = function (t, e, n) {
    var r = t + e - n,
        i = r - t,
        o = r - e,
        a = r - n;
    return i * i <= o * o && i * i <= a * a ? t : o * o <= a * a ? e : n;
  }, Bo.decode._IHDR = function (t, e, n) {
    var r = Bo._bin;
    n.width = r.readUint(t, e), e += 4, n.height = r.readUint(t, e), e += 4, n.depth = t[e], e++, n.ctype = t[e], e++, n.compress = t[e], e++, n.filter = t[e], e++, n.interlace = t[e], e++;
  }, Bo._bin = {
    nextZero: function (t, e) {
      for (; 0 != t[e];) e++;

      return e;
    },
    readUshort: function (t, e) {
      return t[e] << 8 | t[e + 1];
    },
    writeUshort: function (t, e, n) {
      t[e] = n >> 8 & 255, t[e + 1] = 255 & n;
    },
    readUint: function (t, e) {
      return 16777216 * t[e] + (t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]);
    },
    writeUint: function (t, e, n) {
      t[e] = n >> 24 & 255, t[e + 1] = n >> 16 & 255, t[e + 2] = n >> 8 & 255, t[e + 3] = 255 & n;
    },
    readASCII: function (t, e, n) {
      for (var r = "", i = 0; i < n; i++) r += String.fromCharCode(t[e + i]);

      return r;
    },
    writeASCII: function (t, e, n) {
      for (var r = 0; r < n.length; r++) t[e + r] = n.charCodeAt(r);
    },
    readBytes: function (t, e, n) {
      for (var r = [], i = 0; i < n; i++) r.push(t[e + i]);

      return r;
    },
    pad: function (t) {
      return t.length < 2 ? "0" + t : t;
    },
    readUTF8: function (t, e, n) {
      for (var r, i = "", o = 0; o < n; o++) i += "%" + Bo._bin.pad(t[e + o].toString(16));

      try {
        r = decodeURIComponent(i);
      } catch (r) {
        return Bo._bin.readASCII(t, e, n);
      }

      return r;
    }
  }, Bo._copyTile = function (t, e, n, r, i, o, a, s, u) {
    for (var h = Math.min(e, i), c = Math.min(n, o), f = 0, l = 0, d = 0; d < c; d++) for (var p = 0; p < h; p++) if (a >= 0 && s >= 0 ? (f = d * e + p << 2, l = (s + d) * i + a + p << 2) : (f = (-s + d) * e - a + p << 2, l = d * i + p << 2), 0 == u) r[l] = t[f], r[l + 1] = t[f + 1], r[l + 2] = t[f + 2], r[l + 3] = t[f + 3];else if (1 == u) {
      var y = t[f + 3] * (1 / 255),
          g = t[f] * y,
          v = t[f + 1] * y,
          m = t[f + 2] * y,
          b = r[l + 3] * (1 / 255),
          w = r[l] * b,
          x = r[l + 1] * b,
          S = r[l + 2] * b,
          k = 1 - y,
          C = y + b * k,
          F = 0 == C ? 0 : 1 / C;
      r[l + 3] = 255 * C, r[l + 0] = (g + w * k) * F, r[l + 1] = (v + x * k) * F, r[l + 2] = (m + S * k) * F;
    } else if (2 == u) {
      y = t[f + 3], g = t[f], v = t[f + 1], m = t[f + 2], b = r[l + 3], w = r[l], x = r[l + 1], S = r[l + 2];
      y == b && g == w && v == x && m == S ? (r[l] = 0, r[l + 1] = 0, r[l + 2] = 0, r[l + 3] = 0) : (r[l] = g, r[l + 1] = v, r[l + 2] = m, r[l + 3] = y);
    } else if (3 == u) {
      y = t[f + 3], g = t[f], v = t[f + 1], m = t[f + 2], b = r[l + 3], w = r[l], x = r[l + 1], S = r[l + 2];
      if (y == b && g == w && v == x && m == S) continue;
      if (y < 220 && b > 20) return !1;
    }

    return !0;
  }, Bo.encode = function (t, e, n, r, i, o, a) {
    null == r && (r = 0), null == a && (a = !1);
    var s = Bo.encode.compress(t, e, n, r, [!1, !1, !1, 0, a]);
    return Bo.encode.compressPNG(s, -1), Bo.encode._main(s, e, n, i, o);
  }, Bo.encodeLL = function (t, e, n, r, i, o, a, s) {
    for (var u = {
      ctype: 0 + (1 == r ? 0 : 2) + (0 == i ? 0 : 4),
      depth: o,
      frames: []
    }, h = (r + i) * o, c = h * e, f = 0; f < t.length; f++) u.frames.push({
      rect: {
        x: 0,
        y: 0,
        width: e,
        height: n
      },
      img: new Uint8Array(t[f]),
      blend: 0,
      dispose: 1,
      bpp: Math.ceil(h / 8),
      bpl: Math.ceil(c / 8)
    });

    return Bo.encode.compressPNG(u, 0, !0), Bo.encode._main(u, e, n, a, s);
  }, Bo.encode._main = function (t, e, n, r, i) {
    null == i && (i = {});
    var o = Bo.crc.crc,
        a = Bo._bin.writeUint,
        s = Bo._bin.writeUshort,
        u = Bo._bin.writeASCII,
        h = 8,
        c = t.frames.length > 1,
        f = !1,
        l = 33 + (c ? 20 : 0);

    if (null != i.sRGB && (l += 13), null != i.pHYs && (l += 21), 3 == t.ctype) {
      for (var d = t.plte.length, p = 0; p < d; p++) t.plte[p] >>> 24 != 255 && (f = !0);

      l += 8 + 3 * d + 4 + (f ? 8 + 1 * d + 4 : 0);
    }

    for (var y = 0; y < t.frames.length; y++) {
      c && (l += 38), l += (C = t.frames[y]).cimg.length + 12, 0 != y && (l += 4);
    }

    l += 12;
    var g = new Uint8Array(l),
        v = [137, 80, 78, 71, 13, 10, 26, 10];

    for (p = 0; p < 8; p++) g[p] = v[p];

    if (a(g, h, 13), u(g, h += 4, "IHDR"), a(g, h += 4, e), a(g, h += 4, n), g[h += 4] = t.depth, g[++h] = t.ctype, g[++h] = 0, g[++h] = 0, g[++h] = 0, a(g, ++h, o(g, h - 17, 17)), h += 4, null != i.sRGB && (a(g, h, 1), u(g, h += 4, "sRGB"), g[h += 4] = i.sRGB, a(g, ++h, o(g, h - 5, 5)), h += 4), null != i.pHYs && (a(g, h, 9), u(g, h += 4, "pHYs"), a(g, h += 4, i.pHYs[0]), a(g, h += 4, i.pHYs[1]), g[h += 4] = i.pHYs[2], a(g, ++h, o(g, h - 13, 13)), h += 4), c && (a(g, h, 8), u(g, h += 4, "acTL"), a(g, h += 4, t.frames.length), a(g, h += 4, null != i.loop ? i.loop : 0), a(g, h += 4, o(g, h - 12, 12)), h += 4), 3 == t.ctype) {
      a(g, h, 3 * (d = t.plte.length)), u(g, h += 4, "PLTE"), h += 4;

      for (p = 0; p < d; p++) {
        var m = 3 * p,
            b = t.plte[p],
            w = 255 & b,
            x = b >>> 8 & 255,
            S = b >>> 16 & 255;
        g[h + m + 0] = w, g[h + m + 1] = x, g[h + m + 2] = S;
      }

      if (a(g, h += 3 * d, o(g, h - 3 * d - 4, 3 * d + 4)), h += 4, f) {
        a(g, h, d), u(g, h += 4, "tRNS"), h += 4;

        for (p = 0; p < d; p++) g[h + p] = t.plte[p] >>> 24 & 255;

        a(g, h += d, o(g, h - d - 4, d + 4)), h += 4;
      }
    }

    var k = 0;

    for (y = 0; y < t.frames.length; y++) {
      var C = t.frames[y];
      c && (a(g, h, 26), u(g, h += 4, "fcTL"), a(g, h += 4, k++), a(g, h += 4, C.rect.width), a(g, h += 4, C.rect.height), a(g, h += 4, C.rect.x), a(g, h += 4, C.rect.y), s(g, h += 4, r[y]), s(g, h += 2, 1e3), g[h += 2] = C.dispose, g[++h] = C.blend, a(g, ++h, o(g, h - 30, 30)), h += 4);
      var F = C.cimg;
      a(g, h, (d = F.length) + (0 == y ? 0 : 4));
      var P = h += 4;
      u(g, h, 0 == y ? "IDAT" : "fdAT"), h += 4, 0 != y && (a(g, h, k++), h += 4), g.set(F, h), a(g, h += d, o(g, P, h - P)), h += 4;
    }

    return a(g, h, 0), u(g, h += 4, "IEND"), a(g, h += 4, o(g, h - 4, 4)), h += 4, g.buffer;
  }, Bo.encode.compressPNG = function (t, e, n) {
    for (var r = 0; r < t.frames.length; r++) {
      var i = t.frames[r],
          o = (i.rect.width, i.rect.height),
          a = new Uint8Array(o * i.bpl + o);
      i.cimg = Bo.encode._filterZero(i.img, o, i.bpp, i.bpl, a, e, n);
    }
  }, Bo.encode.compress = function (t, e, n, r, i) {
    for (var o = i[0], a = i[1], s = i[2], u = i[3], h = i[4], c = 6, f = 8, l = 255, d = 0; d < t.length; d++) for (var p = new Uint8Array(t[d]), y = p.length, g = 0; g < y; g += 4) l &= p[g + 3];

    var v = 255 != l,
        m = Bo.encode.framize(t, e, n, o, a, s),
        b = {},
        w = [],
        x = [];

    if (0 != r) {
      var S = [];

      for (g = 0; g < m.length; g++) S.push(m[g].img.buffer);

      var k = Bo.encode.concatRGBA(S),
          C = Bo.quantize(k, r),
          F = 0,
          P = new Uint8Array(C.abuf);

      for (g = 0; g < m.length; g++) {
        var R = (X = m[g].img).length;
        x.push(new Uint8Array(C.inds.buffer, F >> 2, R >> 2));

        for (d = 0; d < R; d += 4) X[d] = P[F + d], X[d + 1] = P[F + d + 1], X[d + 2] = P[F + d + 2], X[d + 3] = P[F + d + 3];

        F += R;
      }

      for (g = 0; g < C.plte.length; g++) w.push(C.plte[g].est.rgba);
    } else for (d = 0; d < m.length; d++) {
      var O = m[d],
          T = new Uint32Array(O.img.buffer),
          j = O.rect.width,
          z = (y = T.length, new Uint8Array(y));
      x.push(z);

      for (g = 0; g < y; g++) {
        var N = T[g];
        if (0 != g && N == T[g - 1]) z[g] = z[g - 1];else if (g > j && N == T[g - j]) z[g] = z[g - j];else {
          var U = b[N];
          if (null == U && (b[N] = U = w.length, w.push(N), w.length >= 300)) break;
          z[g] = U;
        }
      }
    }

    var I = w.length;
    I <= 256 && 0 == h && (f = I <= 2 ? 1 : I <= 4 ? 2 : I <= 16 ? 4 : 8, f = Math.max(f, u));

    for (d = 0; d < m.length; d++) {
      (O = m[d]).rect.x, O.rect.y, j = O.rect.width;
      var q = O.rect.height,
          V = O.img,
          B = (new Uint32Array(V.buffer), 4 * j),
          D = 4;

      if (I <= 256 && 0 == h) {
        B = Math.ceil(f * j / 8);

        for (var M = new Uint8Array(B * q), E = x[d], A = 0; A < q; A++) {
          g = A * B;
          var G = A * j;
          if (8 == f) for (var K = 0; K < j; K++) M[g + K] = E[G + K];else if (4 == f) for (K = 0; K < j; K++) M[g + (K >> 1)] |= E[G + K] << 4 - 4 * (1 & K);else if (2 == f) for (K = 0; K < j; K++) M[g + (K >> 2)] |= E[G + K] << 6 - 2 * (3 & K);else if (1 == f) for (K = 0; K < j; K++) M[g + (K >> 3)] |= E[G + K] << 7 - 1 * (7 & K);
        }

        V = M, c = 3, D = 1;
      } else if (0 == v && 1 == m.length) {
        M = new Uint8Array(j * q * 3);
        var W = j * q;

        for (g = 0; g < W; g++) {
          var X,
              H = 4 * g;
          M[X = 3 * g] = V[H], M[X + 1] = V[H + 1], M[X + 2] = V[H + 2];
        }

        V = M, c = 2, D = 3, B = 3 * j;
      }

      O.img = V, O.bpl = B, O.bpp = D;
    }

    return {
      ctype: c,
      depth: f,
      plte: w,
      frames: m
    };
  }, Bo.encode.framize = function (t, e, n, r, i, o) {
    for (var a = [], s = 0; s < t.length; s++) {
      var u,
          h = new Uint8Array(t[s]),
          c = new Uint32Array(h.buffer),
          f = 0,
          l = 0,
          d = e,
          p = n,
          y = r ? 1 : 0;

      if (0 != s) {
        for (var g = o || r || 1 == s || 0 != a[s - 2].dispose ? 1 : 2, v = 0, m = 1e9, b = 0; b < g; b++) {
          for (var w = new Uint8Array(t[s - 1 - b]), x = new Uint32Array(t[s - 1 - b]), S = e, k = n, C = -1, F = -1, P = 0; P < n; P++) for (var R = 0; R < e; R++) {
            c[I = P * e + R] != x[I] && (R < S && (S = R), R > C && (C = R), P < k && (k = P), P > F && (F = P));
          }

          -1 == C && (S = k = C = F = 0), i && (1 == (1 & S) && S--, 1 == (1 & k) && k--);
          var O = (C - S + 1) * (F - k + 1);
          O < m && (m = O, v = b, f = S, l = k, d = C - S + 1, p = F - k + 1);
        }

        w = new Uint8Array(t[s - 1 - v]);
        1 == v && (a[s - 1].dispose = 2), u = new Uint8Array(d * p * 4), Bo._copyTile(w, e, n, u, d, p, -f, -l, 0), 1 == (y = Bo._copyTile(h, e, n, u, d, p, -f, -l, 3) ? 1 : 0) ? Bo.encode._prepareDiff(h, e, n, u, {
          x: f,
          y: l,
          width: d,
          height: p
        }) : Bo._copyTile(h, e, n, u, d, p, -f, -l, 0);
      } else u = h.slice(0);

      a.push({
        rect: {
          x: f,
          y: l,
          width: d,
          height: p
        },
        img: u,
        blend: y,
        dispose: 0
      });
    }

    if (r) for (s = 0; s < a.length; s++) {
      if (1 != (q = a[s]).blend) {
        var T = q.rect,
            j = a[s - 1].rect,
            z = Math.min(T.x, j.x),
            N = Math.min(T.y, j.y),
            U = {
          x: z,
          y: N,
          width: Math.max(T.x + T.width, j.x + j.width) - z,
          height: Math.max(T.y + T.height, j.y + j.height) - N
        };
        a[s - 1].dispose = 1, s - 1 != 0 && Bo.encode._updateFrame(t, e, n, a, s - 1, U, i), Bo.encode._updateFrame(t, e, n, a, s, U, i);
      }
    }
    if (1 != t.length) for (var I = 0; I < a.length; I++) {
      var q;
      (q = a[I]).rect.width * q.rect.height;
    }
    return a;
  }, Bo.encode._updateFrame = function (t, e, n, r, i, o, a) {
    for (var s = Uint8Array, u = Uint32Array, h = new s(t[i - 1]), c = new u(t[i - 1]), f = i + 1 < t.length ? new s(t[i + 1]) : null, l = new s(t[i]), d = new u(l.buffer), p = e, y = n, g = -1, v = -1, m = 0; m < o.height; m++) for (var b = 0; b < o.width; b++) {
      var w = o.x + b,
          x = o.y + m,
          S = x * e + w,
          k = d[S];
      0 == k || 0 == r[i - 1].dispose && c[S] == k && (null == f || 0 != f[4 * S + 3]) || (w < p && (p = w), w > g && (g = w), x < y && (y = x), x > v && (v = x));
    }

    -1 == g && (p = y = g = v = 0), a && (1 == (1 & p) && p--, 1 == (1 & y) && y--), o = {
      x: p,
      y: y,
      width: g - p + 1,
      height: v - y + 1
    };
    var C = r[i];
    C.rect = o, C.blend = 1, C.img = new Uint8Array(o.width * o.height * 4), 0 == r[i - 1].dispose ? (Bo._copyTile(h, e, n, C.img, o.width, o.height, -o.x, -o.y, 0), Bo.encode._prepareDiff(l, e, n, C.img, o)) : Bo._copyTile(l, e, n, C.img, o.width, o.height, -o.x, -o.y, 0);
  }, Bo.encode._prepareDiff = function (t, e, n, r, i) {
    Bo._copyTile(t, e, n, r, i.width, i.height, -i.x, -i.y, 2);
  }, Bo.encode._filterZero = function (t, e, n, r, i, o, a) {
    var s,
        u = [],
        h = [0, 1, 2, 3, 4];
    -1 != o ? h = [o] : (e * r > 5e5 || 1 == n) && (h = [0]), a && (s = {
      level: 0
    });

    for (var c = a && null != UZIP ? UZIP : Hr, f = 0; f < h.length; f++) {
      for (var l = 0; l < e; l++) Bo.encode._filterLine(i, t, l, r, n, h[f]);

      u.push(c.deflate(i, s));
    }

    var d,
        p = 1e9;

    for (f = 0; f < u.length; f++) u[f].length < p && (d = f, p = u[f].length);

    return u[d];
  }, Bo.encode._filterLine = function (t, e, n, r, i, o) {
    var a = n * r,
        s = a + n,
        u = Bo.decode._paeth;
    if (t[s] = o, s++, 0 == o) {
      if (r < 500) for (var h = 0; h < r; h++) t[s + h] = e[a + h];else t.set(new Uint8Array(e.buffer, a, r), s);
    } else if (1 == o) {
      for (h = 0; h < i; h++) t[s + h] = e[a + h];

      for (h = i; h < r; h++) t[s + h] = e[a + h] - e[a + h - i] + 256 & 255;
    } else if (0 == n) {
      for (h = 0; h < i; h++) t[s + h] = e[a + h];

      if (2 == o) for (h = i; h < r; h++) t[s + h] = e[a + h];
      if (3 == o) for (h = i; h < r; h++) t[s + h] = e[a + h] - (e[a + h - i] >> 1) + 256 & 255;
      if (4 == o) for (h = i; h < r; h++) t[s + h] = e[a + h] - u(e[a + h - i], 0, 0) + 256 & 255;
    } else {
      if (2 == o) for (h = 0; h < r; h++) t[s + h] = e[a + h] + 256 - e[a + h - r] & 255;

      if (3 == o) {
        for (h = 0; h < i; h++) t[s + h] = e[a + h] + 256 - (e[a + h - r] >> 1) & 255;

        for (h = i; h < r; h++) t[s + h] = e[a + h] + 256 - (e[a + h - r] + e[a + h - i] >> 1) & 255;
      }

      if (4 == o) {
        for (h = 0; h < i; h++) t[s + h] = e[a + h] + 256 - u(0, e[a + h - r], 0) & 255;

        for (h = i; h < r; h++) t[s + h] = e[a + h] + 256 - u(e[a + h - i], e[a + h - r], e[a + h - i - r]) & 255;
      }
    }
  }, Bo.crc = {
    table: function () {
      for (var t = new Uint32Array(256), e = 0; e < 256; e++) {
        for (var n = e, r = 0; r < 8; r++) 1 & n ? n = 3988292384 ^ n >>> 1 : n >>>= 1;

        t[e] = n;
      }

      return t;
    }(),
    update: function (t, e, n, r) {
      for (var i = 0; i < r; i++) t = Bo.crc.table[255 & (t ^ e[n + i])] ^ t >>> 8;

      return t;
    },
    crc: function (t, e, n) {
      return 4294967295 ^ Bo.crc.update(4294967295, t, e, n);
    }
  }, Bo.quantize = function (t, e) {
    for (var n = new Uint8Array(t), r = n.slice(0), i = new Uint32Array(r.buffer), o = Bo.quantize.getKDtree(r, e), a = o[0], s = o[1], u = (Bo.quantize.planeDst, n), h = i, c = u.length, f = new Uint8Array(n.length >> 2), l = 0; l < c; l += 4) {
      var d = u[l] * (1 / 255),
          p = u[l + 1] * (1 / 255),
          y = u[l + 2] * (1 / 255),
          g = u[l + 3] * (1 / 255),
          v = Bo.quantize.getNearest(a, d, p, y, g);
      f[l >> 2] = v.ind, h[l >> 2] = v.est.rgba;
    }

    return {
      abuf: r.buffer,
      inds: f,
      plte: s
    };
  }, Bo.quantize.getKDtree = function (t, e, n) {
    null == n && (n = 1e-4);
    var r = new Uint32Array(t.buffer),
        i = {
      i0: 0,
      i1: t.length,
      bst: null,
      est: null,
      tdst: 0,
      left: null,
      right: null
    };
    i.bst = Bo.quantize.stats(t, i.i0, i.i1), i.est = Bo.quantize.estats(i.bst);

    for (var o = [i]; o.length < e;) {
      for (var a = 0, s = 0, u = 0; u < o.length; u++) o[u].est.L > a && (a = o[u].est.L, s = u);

      if (a < n) break;
      var h = o[s],
          c = Bo.quantize.splitPixels(t, r, h.i0, h.i1, h.est.e, h.est.eMq255);
      if (h.i0 >= c || h.i1 <= c) h.est.L = 0;else {
        var f = {
          i0: h.i0,
          i1: c,
          bst: null,
          est: null,
          tdst: 0,
          left: null,
          right: null
        };
        f.bst = Bo.quantize.stats(t, f.i0, f.i1), f.est = Bo.quantize.estats(f.bst);
        var l = {
          i0: c,
          i1: h.i1,
          bst: null,
          est: null,
          tdst: 0,
          left: null,
          right: null
        };
        l.bst = {
          R: [],
          m: [],
          N: h.bst.N - f.bst.N
        };

        for (u = 0; u < 16; u++) l.bst.R[u] = h.bst.R[u] - f.bst.R[u];

        for (u = 0; u < 4; u++) l.bst.m[u] = h.bst.m[u] - f.bst.m[u];

        l.est = Bo.quantize.estats(l.bst), h.left = f, h.right = l, o[s] = f, o.push(l);
      }
    }

    o.sort(function (t, e) {
      return e.bst.N - t.bst.N;
    });

    for (u = 0; u < o.length; u++) o[u].ind = u;

    return [i, o];
  }, Bo.quantize.getNearest = function (t, e, n, r, i) {
    if (null == t.left) return t.tdst = Bo.quantize.dist(t.est.q, e, n, r, i), t;
    var o = Bo.quantize.planeDst(t.est, e, n, r, i),
        a = t.left,
        s = t.right;
    o > 0 && (a = t.right, s = t.left);
    var u = Bo.quantize.getNearest(a, e, n, r, i);
    if (u.tdst <= o * o) return u;
    var h = Bo.quantize.getNearest(s, e, n, r, i);
    return h.tdst < u.tdst ? h : u;
  }, Bo.quantize.planeDst = function (t, e, n, r, i) {
    var o = t.e;
    return o[0] * e + o[1] * n + o[2] * r + o[3] * i - t.eMq;
  }, Bo.quantize.dist = function (t, e, n, r, i) {
    var o = e - t[0],
        a = n - t[1],
        s = r - t[2],
        u = i - t[3];
    return o * o + a * a + s * s + u * u;
  }, Bo.quantize.splitPixels = function (t, e, n, r, i, o) {
    var a = Bo.quantize.vecDot;

    for (r -= 4; n < r;) {
      for (; a(t, n, i) <= o;) n += 4;

      for (; a(t, r, i) > o;) r -= 4;

      if (n >= r) break;
      var s = e[n >> 2];
      e[n >> 2] = e[r >> 2], e[r >> 2] = s, n += 4, r -= 4;
    }

    for (; a(t, n, i) > o;) n -= 4;

    return n + 4;
  }, Bo.quantize.vecDot = function (t, e, n) {
    return t[e] * n[0] + t[e + 1] * n[1] + t[e + 2] * n[2] + t[e + 3] * n[3];
  }, Bo.quantize.stats = function (t, e, n) {
    for (var r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i = [0, 0, 0, 0], o = n - e >> 2, a = e; a < n; a += 4) {
      var s = t[a] * (1 / 255),
          u = t[a + 1] * (1 / 255),
          h = t[a + 2] * (1 / 255),
          c = t[a + 3] * (1 / 255);
      i[0] += s, i[1] += u, i[2] += h, i[3] += c, r[0] += s * s, r[1] += s * u, r[2] += s * h, r[3] += s * c, r[5] += u * u, r[6] += u * h, r[7] += u * c, r[10] += h * h, r[11] += h * c, r[15] += c * c;
    }

    return r[4] = r[1], r[8] = r[2], r[9] = r[6], r[12] = r[3], r[13] = r[7], r[14] = r[11], {
      R: r,
      m: i,
      N: o
    };
  }, Bo.quantize.estats = function (t) {
    var e = t.R,
        n = t.m,
        r = t.N,
        i = n[0],
        o = n[1],
        a = n[2],
        s = n[3],
        u = 0 == r ? 0 : 1 / r,
        h = [e[0] - i * i * u, e[1] - i * o * u, e[2] - i * a * u, e[3] - i * s * u, e[4] - o * i * u, e[5] - o * o * u, e[6] - o * a * u, e[7] - o * s * u, e[8] - a * i * u, e[9] - a * o * u, e[10] - a * a * u, e[11] - a * s * u, e[12] - s * i * u, e[13] - s * o * u, e[14] - s * a * u, e[15] - s * s * u],
        c = h,
        f = Bo.M4,
        l = [.5, .5, .5, .5],
        d = 0,
        p = 0;
    if (0 != r) for (var y = 0; y < 10 && (l = f.multVec(c, l), p = Math.sqrt(f.dot(l, l)), l = f.sml(1 / p, l), !(Math.abs(p - d) < 1e-9)); y++) d = p;
    var g = [i * u, o * u, a * u, s * u];
    return {
      Cov: h,
      q: g,
      e: l,
      L: d,
      eMq255: f.dot(f.sml(255, g), l),
      eMq: f.dot(l, g),
      rgba: (Math.round(255 * g[3]) << 24 | Math.round(255 * g[2]) << 16 | Math.round(255 * g[1]) << 8 | Math.round(255 * g[0]) << 0) >>> 0
    };
  }, Bo.M4 = {
    multVec: function (t, e) {
      return [t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3], t[4] * e[0] + t[5] * e[1] + t[6] * e[2] + t[7] * e[3], t[8] * e[0] + t[9] * e[1] + t[10] * e[2] + t[11] * e[3], t[12] * e[0] + t[13] * e[1] + t[14] * e[2] + t[15] * e[3]];
    },
    dot: function (t, e) {
      return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
    },
    sml: function (t, e) {
      return [t * e[0], t * e[1], t * e[2], t * e[3]];
    }
  }, Bo.encode.concatRGBA = function (t) {
    for (var e = 0, n = 0; n < t.length; n++) e += t[n].byteLength;

    var r = new Uint8Array(e),
        i = 0;

    for (n = 0; n < t.length; n++) {
      for (var o = new Uint8Array(t[n]), a = o.length, s = 0; s < a; s += 4) {
        var u = o[s],
            h = o[s + 1],
            c = o[s + 2],
            f = o[s + 3];
        0 == f && (u = h = c = 0), r[i + s] = u, r[i + s + 1] = h, r[i + s + 2] = c, r[i + s + 3] = f;
      }

      i += a;
    }

    return r.buffer;
  };

  var Do,
      Mo = function Mo(t) {
    if (0 === t) return Do.Greyscale;
    if (2 === t) return Do.Truecolour;
    if (3 === t) return Do.IndexedColour;
    if (4 === t) return Do.GreyscaleWithAlpha;
    if (6 === t) return Do.TruecolourWithAlpha;
    throw new Error("Unknown color type: " + t);
  },
      Eo = function Eo(t) {
    for (var e = Math.floor(t.length / 4), n = new Uint8Array(3 * e), r = new Uint8Array(1 * e), i = 0, o = 0, a = 0; i < t.length;) n[o++] = t[i++], n[o++] = t[i++], n[o++] = t[i++], r[a++] = t[i++];

    return {
      rgbChannel: n,
      alphaChannel: r
    };
  };

  !function (t) {
    t.Greyscale = "Greyscale", t.Truecolour = "Truecolour", t.IndexedColour = "IndexedColour", t.GreyscaleWithAlpha = "GreyscaleWithAlpha", t.TruecolourWithAlpha = "TruecolourWithAlpha";
  }(Do || (Do = {}));

  var Ao = function () {
    function t(t) {
      var e = Bo.decode(t),
          n = Bo.toRGBA8(e);
      if (n.length > 1) throw new Error("Animated PNGs are not supported");
      var r = new Uint8Array(n[0]),
          i = Eo(r),
          o = i.rgbChannel,
          a = i.alphaChannel;
      this.rgbChannel = o, a.some(function (t) {
        return t < 1;
      }) && (this.alphaChannel = a), this.type = Mo(e.ctype), this.width = e.width, this.height = e.height, this.bitsPerComponent = 8;
    }

    return t.load = function (e) {
      return new t(e);
    }, t;
  }(),
      Go = function () {
    function t(t) {
      this.image = t, this.bitsPerComponent = t.bitsPerComponent, this.width = t.width, this.height = t.height, this.colorSpace = "DeviceRGB";
    }

    return t.for = function (e) {
      return i(this, void 0, void 0, function () {
        return o(this, function (n) {
          return [2, new t(Ao.load(e))];
        });
      });
    }, t.prototype.embedIntoContext = function (t, e) {
      return i(this, void 0, void 0, function () {
        var n, r;
        return o(this, function (i) {
          return n = this.embedAlphaChannel(t), r = t.flateStream(this.image.rgbChannel, {
            Type: "XObject",
            Subtype: "Image",
            BitsPerComponent: this.image.bitsPerComponent,
            Width: this.image.width,
            Height: this.image.height,
            ColorSpace: this.colorSpace,
            SMask: n
          }), e ? (t.assign(e, r), [2, e]) : [2, t.register(r)];
        });
      });
    }, t.prototype.embedAlphaChannel = function (t) {
      if (this.image.alphaChannel) {
        var e = t.flateStream(this.image.alphaChannel, {
          Type: "XObject",
          Subtype: "Image",
          Height: this.image.height,
          Width: this.image.width,
          BitsPerComponent: this.image.bitsPerComponent,
          ColorSpace: "DeviceGray",
          Decode: [0, 1]
        });
        return t.register(e);
      }
    }, t;
  }(),
      Ko = function () {
    function t(t, e, n) {
      this.bytes = t, this.start = e || 0, this.pos = this.start, this.end = e && n ? e + n : this.bytes.length;
    }

    return Object.defineProperty(t.prototype, "length", {
      get: function () {
        return this.end - this.start;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(t.prototype, "isEmpty", {
      get: function () {
        return 0 === this.length;
      },
      enumerable: !0,
      configurable: !0
    }), t.prototype.getByte = function () {
      return this.pos >= this.end ? -1 : this.bytes[this.pos++];
    }, t.prototype.getUint16 = function () {
      var t = this.getByte(),
          e = this.getByte();
      return -1 === t || -1 === e ? -1 : (t << 8) + e;
    }, t.prototype.getInt32 = function () {
      return (this.getByte() << 24) + (this.getByte() << 16) + (this.getByte() << 8) + this.getByte();
    }, t.prototype.getBytes = function (t, e) {
      void 0 === e && (e = !1);
      var n = this.bytes,
          r = this.pos,
          i = this.end;

      if (t) {
        var o = r + t;
        o > i && (o = i), this.pos = o;
        a = n.subarray(r, o);
        return e ? new Uint8ClampedArray(a) : a;
      }

      var a = n.subarray(r, i);
      return e ? new Uint8ClampedArray(a) : a;
    }, t.prototype.peekByte = function () {
      var t = this.getByte();
      return this.pos--, t;
    }, t.prototype.peekBytes = function (t, e) {
      void 0 === e && (e = !1);
      var n = this.getBytes(t, e);
      return this.pos -= n.length, n;
    }, t.prototype.skip = function (t) {
      t || (t = 1), this.pos += t;
    }, t.prototype.reset = function () {
      this.pos = this.start;
    }, t.prototype.moveStart = function () {
      this.start = this.pos;
    }, t.prototype.makeSubStream = function (e, n) {
      return new t(this.bytes, e, n);
    }, t.prototype.decode = function () {
      return this.bytes;
    }, t;
  }(),
      Wo = new Uint8Array(0),
      Xo = function () {
    function t(t) {
      if (this.pos = 0, this.bufferLength = 0, this.eof = !1, this.buffer = Wo, this.minBufferLength = 512, t) for (; this.minBufferLength < t;) this.minBufferLength *= 2;
    }

    return Object.defineProperty(t.prototype, "isEmpty", {
      get: function () {
        for (; !this.eof && 0 === this.bufferLength;) this.readBlock();

        return 0 === this.bufferLength;
      },
      enumerable: !0,
      configurable: !0
    }), t.prototype.getByte = function () {
      for (var t = this.pos; this.bufferLength <= t;) {
        if (this.eof) return -1;
        this.readBlock();
      }

      return this.buffer[this.pos++];
    }, t.prototype.getUint16 = function () {
      var t = this.getByte(),
          e = this.getByte();
      return -1 === t || -1 === e ? -1 : (t << 8) + e;
    }, t.prototype.getInt32 = function () {
      return (this.getByte() << 24) + (this.getByte() << 16) + (this.getByte() << 8) + this.getByte();
    }, t.prototype.getBytes = function (t, e) {
      var n;
      void 0 === e && (e = !1);
      var r = this.pos;

      if (t) {
        for (this.ensureBuffer(r + t), n = r + t; !this.eof && this.bufferLength < n;) this.readBlock();

        var i = this.bufferLength;
        n > i && (n = i);
      } else {
        for (; !this.eof;) this.readBlock();

        n = this.bufferLength;
      }

      this.pos = n;
      var o = this.buffer.subarray(r, n);
      return !e || o instanceof Uint8ClampedArray ? o : new Uint8ClampedArray(o);
    }, t.prototype.peekByte = function () {
      var t = this.getByte();
      return this.pos--, t;
    }, t.prototype.peekBytes = function (t, e) {
      void 0 === e && (e = !1);
      var n = this.getBytes(t, e);
      return this.pos -= n.length, n;
    }, t.prototype.skip = function (t) {
      t || (t = 1), this.pos += t;
    }, t.prototype.reset = function () {
      this.pos = 0;
    }, t.prototype.makeSubStream = function (t, e) {
      for (var n = t + e; this.bufferLength <= n && !this.eof;) this.readBlock();

      return new Ko(this.buffer, t, e);
    }, t.prototype.decode = function () {
      for (; !this.eof;) this.readBlock();

      return this.buffer.subarray(0, this.bufferLength);
    }, t.prototype.readBlock = function () {
      throw new yi(this.constructor.name, "readBlock");
    }, t.prototype.ensureBuffer = function (t) {
      var e = this.buffer;
      if (t <= e.byteLength) return e;

      for (var n = this.minBufferLength; n < t;) n *= 2;

      var r = new Uint8Array(n);
      return r.set(e), this.buffer = r;
    }, t;
  }(),
      Ho = function Ho(t) {
    return 32 === t || 9 === t || 13 === t || 10 === t;
  },
      Lo = function (t) {
    function e(e, n) {
      var r = t.call(this, n) || this;
      return r.stream = e, r.input = new Uint8Array(5), n && (n *= .8), r;
    }

    return n(e, t), e.prototype.readBlock = function () {
      for (var t = this.stream, e = t.getByte(); Ho(e);) e = t.getByte();

      if (-1 !== e && 126 !== e) {
        var n,
            r,
            i = this.bufferLength;

        if (122 === e) {
          for (n = this.ensureBuffer(i + 4), r = 0; r < 4; ++r) n[i + r] = 0;

          this.bufferLength += 4;
        } else {
          var o = this.input;

          for (o[0] = e, r = 1; r < 5; ++r) {
            for (e = t.getByte(); Ho(e);) e = t.getByte();

            if (o[r] = e, -1 === e || 126 === e) break;
          }

          if (n = this.ensureBuffer(i + r - 1), this.bufferLength += r - 1, r < 5) {
            for (; r < 5; ++r) o[r] = 117;

            this.eof = !0;
          }

          var a = 0;

          for (r = 0; r < 5; ++r) a = 85 * a + (o[r] - 33);

          for (r = 3; r >= 0; --r) n[i + r] = 255 & a, a >>= 8;
        }
      } else this.eof = !0;
    }, e;
  }(Xo),
      Zo = function (t) {
    function e(e, n) {
      var r = t.call(this, n) || this;
      return r.stream = e, r.firstDigit = -1, n && (n *= .5), r;
    }

    return n(e, t), e.prototype.readBlock = function () {
      var t = this.stream.getBytes(8e3);

      if (t.length) {
        for (var e = t.length + 1 >> 1, n = this.ensureBuffer(this.bufferLength + e), r = this.bufferLength, i = this.firstDigit, o = 0, a = t.length; o < a; o++) {
          var s = t[o],
              u = void 0;
          if (s >= 48 && s <= 57) u = 15 & s;else {
            if (!(s >= 65 && s <= 70 || s >= 97 && s <= 102)) {
              if (62 === s) {
                this.eof = !0;
                break;
              }

              continue;
            }

            u = 9 + (15 & s);
          }
          i < 0 ? i = u : (n[r++] = i << 4 | u, i = -1);
        }

        i >= 0 && this.eof && (n[r++] = i << 4, i = -1), this.firstDigit = i, this.bufferLength = r;
      } else this.eof = !0;
    }, e;
  }(Xo),
      Yo = new Int32Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
      Jo = new Int32Array([3, 4, 5, 6, 7, 8, 9, 10, 65547, 65549, 65551, 65553, 131091, 131095, 131099, 131103, 196643, 196651, 196659, 196667, 262211, 262227, 262243, 262259, 327811, 327843, 327875, 327907, 258, 258, 258]),
      Qo = new Int32Array([1, 2, 3, 4, 65541, 65543, 131081, 131085, 196625, 196633, 262177, 262193, 327745, 327777, 393345, 393409, 459009, 459137, 524801, 525057, 590849, 591361, 657409, 658433, 724993, 727041, 794625, 798721, 868353, 876545]),
      _o = [new Int32Array([459008, 524368, 524304, 524568, 459024, 524400, 524336, 590016, 459016, 524384, 524320, 589984, 524288, 524416, 524352, 590048, 459012, 524376, 524312, 589968, 459028, 524408, 524344, 590032, 459020, 524392, 524328, 59e4, 524296, 524424, 524360, 590064, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590024, 459018, 524388, 524324, 589992, 524292, 524420, 524356, 590056, 459014, 524380, 524316, 589976, 459030, 524412, 524348, 590040, 459022, 524396, 524332, 590008, 524300, 524428, 524364, 590072, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590020, 459017, 524386, 524322, 589988, 524290, 524418, 524354, 590052, 459013, 524378, 524314, 589972, 459029, 524410, 524346, 590036, 459021, 524394, 524330, 590004, 524298, 524426, 524362, 590068, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590028, 459019, 524390, 524326, 589996, 524294, 524422, 524358, 590060, 459015, 524382, 524318, 589980, 459031, 524414, 524350, 590044, 459023, 524398, 524334, 590012, 524302, 524430, 524366, 590076, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590018, 459016, 524385, 524321, 589986, 524289, 524417, 524353, 590050, 459012, 524377, 524313, 589970, 459028, 524409, 524345, 590034, 459020, 524393, 524329, 590002, 524297, 524425, 524361, 590066, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590026, 459018, 524389, 524325, 589994, 524293, 524421, 524357, 590058, 459014, 524381, 524317, 589978, 459030, 524413, 524349, 590042, 459022, 524397, 524333, 590010, 524301, 524429, 524365, 590074, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590022, 459017, 524387, 524323, 589990, 524291, 524419, 524355, 590054, 459013, 524379, 524315, 589974, 459029, 524411, 524347, 590038, 459021, 524395, 524331, 590006, 524299, 524427, 524363, 590070, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590030, 459019, 524391, 524327, 589998, 524295, 524423, 524359, 590062, 459015, 524383, 524319, 589982, 459031, 524415, 524351, 590046, 459023, 524399, 524335, 590014, 524303, 524431, 524367, 590078, 459008, 524368, 524304, 524568, 459024, 524400, 524336, 590017, 459016, 524384, 524320, 589985, 524288, 524416, 524352, 590049, 459012, 524376, 524312, 589969, 459028, 524408, 524344, 590033, 459020, 524392, 524328, 590001, 524296, 524424, 524360, 590065, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590025, 459018, 524388, 524324, 589993, 524292, 524420, 524356, 590057, 459014, 524380, 524316, 589977, 459030, 524412, 524348, 590041, 459022, 524396, 524332, 590009, 524300, 524428, 524364, 590073, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590021, 459017, 524386, 524322, 589989, 524290, 524418, 524354, 590053, 459013, 524378, 524314, 589973, 459029, 524410, 524346, 590037, 459021, 524394, 524330, 590005, 524298, 524426, 524362, 590069, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590029, 459019, 524390, 524326, 589997, 524294, 524422, 524358, 590061, 459015, 524382, 524318, 589981, 459031, 524414, 524350, 590045, 459023, 524398, 524334, 590013, 524302, 524430, 524366, 590077, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590019, 459016, 524385, 524321, 589987, 524289, 524417, 524353, 590051, 459012, 524377, 524313, 589971, 459028, 524409, 524345, 590035, 459020, 524393, 524329, 590003, 524297, 524425, 524361, 590067, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590027, 459018, 524389, 524325, 589995, 524293, 524421, 524357, 590059, 459014, 524381, 524317, 589979, 459030, 524413, 524349, 590043, 459022, 524397, 524333, 590011, 524301, 524429, 524365, 590075, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590023, 459017, 524387, 524323, 589991, 524291, 524419, 524355, 590055, 459013, 524379, 524315, 589975, 459029, 524411, 524347, 590039, 459021, 524395, 524331, 590007, 524299, 524427, 524363, 590071, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590031, 459019, 524391, 524327, 589999, 524295, 524423, 524359, 590063, 459015, 524383, 524319, 589983, 459031, 524415, 524351, 590047, 459023, 524399, 524335, 590015, 524303, 524431, 524367, 590079]), 9],
      $o = [new Int32Array([327680, 327696, 327688, 327704, 327684, 327700, 327692, 327708, 327682, 327698, 327690, 327706, 327686, 327702, 327694, 0, 327681, 327697, 327689, 327705, 327685, 327701, 327693, 327709, 327683, 327699, 327691, 327707, 327687, 327703, 327695, 0]), 5],
      ta = function (t) {
    function e(e, n) {
      var r = t.call(this, n) || this;
      r.stream = e;
      var i = e.getByte(),
          o = e.getByte();
      if (-1 === i || -1 === o) throw new Error("Invalid header in flate stream: " + i + ", " + o);
      if (8 != (15 & i)) throw new Error("Unknown compression method in flate stream: " + i + ", " + o);
      if (((i << 8) + o) % 31 != 0) throw new Error("Bad FCHECK in flate stream: " + i + ", " + o);
      if (32 & o) throw new Error("FDICT bit set in flate stream: " + i + ", " + o);
      return r.codeSize = 0, r.codeBuf = 0, r;
    }

    return n(e, t), e.prototype.readBlock = function () {
      var t,
          e,
          n = this.stream,
          r = this.getBits(3);

      if (1 & r && (this.eof = !0), 0 !== (r >>= 1)) {
        var i, o;
        if (1 === r) i = _o, o = $o;else {
          if (2 !== r) throw new Error("Unknown block type in flate stream");
          var a = this.getBits(5) + 257,
              s = this.getBits(5) + 1,
              u = this.getBits(4) + 4,
              h = new Uint8Array(Yo.length),
              c = void 0;

          for (c = 0; c < u; ++c) h[Yo[c]] = this.getBits(3);

          var f = this.generateHuffmanTable(h);
          e = 0, c = 0;

          for (var l = a + s, d = new Uint8Array(l), p = void 0, y = void 0, g = void 0; c < l;) {
            var v = this.getCode(f);
            if (16 === v) p = 2, y = 3, g = e;else if (17 === v) p = 3, y = 3, g = e = 0;else {
              if (18 !== v) {
                d[c++] = e = v;
                continue;
              }

              p = 7, y = 11, g = e = 0;
            }

            for (var m = this.getBits(p) + y; m-- > 0;) d[c++] = g;
          }

          i = this.generateHuffmanTable(d.subarray(0, a)), o = this.generateHuffmanTable(d.subarray(a, l));
        }

        for (var b = (t = this.buffer) ? t.length : 0, w = this.bufferLength;;) {
          var x = this.getCode(i);
          if (x < 256) w + 1 >= b && (b = (t = this.ensureBuffer(w + 1)).length), t[w++] = x;else {
            if (256 === x) return void (this.bufferLength = w);
            var S = (x = Jo[x -= 257]) >> 16;
            S > 0 && (S = this.getBits(S)), e = (65535 & x) + S, x = this.getCode(o), (S = (x = Qo[x]) >> 16) > 0 && (S = this.getBits(S));
            var k = (65535 & x) + S;
            w + e >= b && (b = (t = this.ensureBuffer(w + e)).length);

            for (var C = 0; C < e; ++C, ++w) t[w] = t[w - k];
          }
        }
      } else {
        var F = void 0;
        if (-1 === (F = n.getByte())) throw new Error("Bad block header in flate stream");
        var P = F;
        if (-1 === (F = n.getByte())) throw new Error("Bad block header in flate stream");
        if (P |= F << 8, -1 === (F = n.getByte())) throw new Error("Bad block header in flate stream");
        var R = F;
        if (-1 === (F = n.getByte())) throw new Error("Bad block header in flate stream");
        if ((R |= F << 8) !== (65535 & ~P) && (0 !== P || 0 !== R)) throw new Error("Bad uncompressed block length in flate stream");
        this.codeBuf = 0, this.codeSize = 0;
        var O = this.bufferLength;
        t = this.ensureBuffer(O + P);
        var T = O + P;
        if (this.bufferLength = T, 0 === P) -1 === n.peekByte() && (this.eof = !0);else for (var j = O; j < T; ++j) {
          if (-1 === (F = n.getByte())) {
            this.eof = !0;
            break;
          }

          t[j] = F;
        }
      }
    }, e.prototype.getBits = function (t) {
      for (var e, n = this.stream, r = this.codeSize, i = this.codeBuf; r < t;) {
        if (-1 === (e = n.getByte())) throw new Error("Bad encoding in flate stream");
        i |= e << r, r += 8;
      }

      return e = i & (1 << t) - 1, this.codeBuf = i >> t, this.codeSize = r -= t, e;
    }, e.prototype.getCode = function (t) {
      for (var e, n = this.stream, r = t[0], i = t[1], o = this.codeSize, a = this.codeBuf; o < i && -1 !== (e = n.getByte());) a |= e << o, o += 8;

      var s = r[a & (1 << i) - 1];
      "number" == typeof r && console.log("FLATE:", s);
      var u = s >> 16,
          h = 65535 & s;
      if (u < 1 || o < u) throw new Error("Bad encoding in flate stream");
      return this.codeBuf = a >> u, this.codeSize = o - u, h;
    }, e.prototype.generateHuffmanTable = function (t) {
      var e,
          n = t.length,
          r = 0;

      for (e = 0; e < n; ++e) t[e] > r && (r = t[e]);

      for (var i = 1 << r, o = new Int32Array(i), a = 1, s = 0, u = 2; a <= r; ++a, s <<= 1, u <<= 1) for (var h = 0; h < n; ++h) if (t[h] === a) {
        var c = 0,
            f = s;

        for (e = 0; e < a; ++e) c = c << 1 | 1 & f, f >>= 1;

        for (e = c; e < i; e += u) o[e] = a << 16 | h;

        ++s;
      }

      return [o, r];
    }, e;
  }(Xo),
      ea = function (t) {
    function e(e, n, r) {
      var i = t.call(this, n) || this;
      i.stream = e, i.cachedData = 0, i.bitsCached = 0;

      for (var o = {
        earlyChange: r,
        codeLength: 9,
        nextCode: 258,
        dictionaryValues: new Uint8Array(4096),
        dictionaryLengths: new Uint16Array(4096),
        dictionaryPrevCodes: new Uint16Array(4096),
        currentSequence: new Uint8Array(4096),
        currentSequenceLength: 0
      }, a = 0; a < 256; ++a) o.dictionaryValues[a] = a, o.dictionaryLengths[a] = 1;

      return i.lzwState = o, i;
    }

    return n(e, t), e.prototype.readBlock = function () {
      var t,
          e,
          n,
          r = 1024,
          i = this.lzwState;

      if (i) {
        var o = i.earlyChange,
            a = i.nextCode,
            s = i.dictionaryValues,
            u = i.dictionaryLengths,
            h = i.dictionaryPrevCodes,
            c = i.codeLength,
            f = i.prevCode,
            l = i.currentSequence,
            d = i.currentSequenceLength,
            p = 0,
            y = this.bufferLength,
            g = this.ensureBuffer(this.bufferLength + r);

        for (t = 0; t < 512; t++) {
          var v = this.readBits(c),
              m = d > 0;
          if (!v || v < 256) l[0] = v, d = 1;else {
            if (!(v >= 258)) {
              if (256 === v) {
                c = 9, a = 258, d = 0;
                continue;
              }

              this.eof = !0, delete this.lzwState;
              break;
            }

            if (v < a) for (e = (d = u[v]) - 1, n = v; e >= 0; e--) l[e] = s[n], n = h[n];else l[d++] = l[0];
          }

          if (m && (h[a] = f, u[a] = u[f] + 1, s[a] = l[0], c = ++a + o & a + o - 1 ? c : 0 | Math.min(Math.log(a + o) / .6931471805599453 + 1, 12)), f = v, r < (p += d)) {
            do {
              r += 512;
            } while (r < p);

            g = this.ensureBuffer(this.bufferLength + r);
          }

          for (e = 0; e < d; e++) g[y++] = l[e];
        }

        i.nextCode = a, i.codeLength = c, i.prevCode = f, i.currentSequenceLength = d, this.bufferLength = y;
      }
    }, e.prototype.readBits = function (t) {
      for (var e = this.bitsCached, n = this.cachedData; e < t;) {
        var r = this.stream.getByte();
        if (-1 === r) return this.eof = !0, null;
        n = n << 8 | r, e += 8;
      }

      return this.bitsCached = e -= t, this.cachedData = n, n >>> e & (1 << t) - 1;
    }, e;
  }(Xo),
      na = function (t) {
    function e(e, n) {
      var r = t.call(this, n) || this;
      return r.stream = e, r;
    }

    return n(e, t), e.prototype.readBlock = function () {
      var t = this.stream.getBytes(2);
      if (!t || t.length < 2 || 128 === t[0]) this.eof = !0;else {
        var e,
            n = this.bufferLength,
            r = t[0];

        if (r < 128) {
          if ((e = this.ensureBuffer(n + r + 1))[n++] = t[1], r > 0) {
            var i = this.stream.getBytes(r);
            e.set(i, n), n += r;
          }
        } else {
          r = 257 - r;
          var o = t[1];
          e = this.ensureBuffer(n + r + 1);

          for (var a = 0; a < r; a++) e[n++] = o;
        }

        this.bufferLength = n;
      }
    }, e;
  }(Xo),
      ra = function ra(t, e, n) {
    if (e === Yi.of("FlateDecode")) return new ta(t);

    if (e === Yi.of("LZWDecode")) {
      var r = 1;

      if (n instanceof Ei) {
        var i = n.lookup(Yi.of("EarlyChange"));
        i instanceof Qi && (r = i.value());
      }

      return new ea(t, void 0, r);
    }

    if (e === Yi.of("ASCII85Decode")) return new Lo(t);
    if (e === Yi.of("ASCIIHexDecode")) return new Zo(t);
    if (e === Yi.of("RunLengthDecode")) return new na(t);
    throw new mi(e.value());
  },
      ia = function ia(t) {
    var e = t.dict,
        n = t.contents,
        r = new Ko(n),
        i = e.lookup(Yi.of("Filter")),
        o = e.lookup(Yi.of("DecodeParms"));
    if (i instanceof Yi) r = ra(r, i, o);else if (i instanceof Bi) for (var a = 0, s = i.size(); a < s; a++) r = ra(r, i.lookup(a, Yi), o && o.lookup(a));else if (i) throw new vi([Yi, Bi], i);
    return r;
  },
      oa = function oa(t) {
    var e = t.MediaBox();
    return {
      left: 0,
      bottom: 0,
      right: e.lookup(2, Qi).value() - e.lookup(0, Qi).value(),
      top: e.lookup(3, Qi).value() - e.lookup(1, Qi).value()
    };
  },
      aa = function aa(t) {
    return [1, 0, 0, 1, -t.left, -t.bottom];
  },
      sa = function () {
    function t(t, e, n) {
      this.page = t;
      var r = null != e ? e : oa(t);
      this.width = r.right - r.left, this.height = r.top - r.bottom, this.boundingBox = r, this.transformationMatrix = null != n ? n : aa(r);
    }

    return t.for = function (e, n, r) {
      return i(this, void 0, void 0, function () {
        return o(this, function (i) {
          return [2, new t(e, n, r)];
        });
      });
    }, t.prototype.embedIntoContext = function (t, e) {
      return i(this, void 0, void 0, function () {
        var n, r, i, a, s, u, h, c, f, l;
        return o(this, function (o) {
          if (n = this.page.normalizedEntries(), r = n.Contents, i = n.Resources, !r) throw new xi();
          return a = this.decodeContents(r), s = this.boundingBox, u = s.left, h = s.bottom, c = s.right, f = s.top, l = t.stream(a, {
            Type: "XObject",
            Subtype: "Form",
            FormType: 1,
            BBox: [u, h, c, f],
            Matrix: this.transformationMatrix,
            Resources: i
          }), e ? (t.assign(e, l), [2, e]) : [2, t.register(l)];
        });
      });
    }, t.prototype.decodeContents = function (t) {
      for (var e = Uint8Array.of(Ii.Newline), n = [], r = 0, i = t.size(); r < i; r++) {
        var o = t.lookup(r, _i),
            a = void 0;
        if (o instanceof $i) a = ia(o).decode();else {
          if (!(o instanceof so)) throw new Si(o);
          a = o.getUnencodedContents();
        }
        n.push(a, e);
      }

      return O.apply(void 0, n);
    }, t;
  }(),
      ua = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return n(e, t), e.prototype.Pages = function () {
      return this.lookup(Yi.of("Pages"), Ei);
    }, e.prototype.insertLeafNode = function (t, e) {
      var n = this.get(Yi.of("Pages"));
      return this.Pages().insertLeafNode(t, e) || n;
    }, e.prototype.removeLeafNode = function (t) {
      this.Pages().removeLeafNode(t);
    }, e.withContextAndPages = function (t, n) {
      var r = new Map();
      return r.set(Yi.of("Type"), Yi.of("Catalog")), r.set(Yi.of("Pages"), n), new e(r, t);
    }, e.fromMapWithContext = function (t, n) {
      return new e(t, n);
    }, e;
  }(Ei),
      ha = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return n(e, t), e.prototype.Parent = function () {
      return this.lookup(Yi.of("Parent"));
    }, e.prototype.Kids = function () {
      return this.lookup(Yi.of("Kids"), Bi);
    }, e.prototype.Count = function () {
      return this.lookup(Yi.of("Count"), Qi);
    }, e.prototype.pushTreeNode = function (t) {
      this.Kids().push(t);
    }, e.prototype.pushLeafNode = function (t) {
      this.Kids().push(t), this.ascend(function (t) {
        var e = t.Count();
        t.set(Yi.of("Count"), Qi.of(e.value() + 1));
      });
    }, e.prototype.insertLeafNode = function (t, n) {
      for (var r = this.Kids(), i = r.size(), o = 0, a = 0; a < n;) {
        if (o >= i) throw new Error("Index out of bounds: " + o + "/" + i);
        var s = r.get(o++),
            u = this.context.lookup(s);

        if (u instanceof e) {
          var h = u.Count().value();
          if (a + h > n) return u.insertLeafNode(t, n - a) || s;
          a += h;
        } else a += 1;
      }

      r.insert(o, t), this.ascend(function (t) {
        var e = t.Count();
        t.set(Yi.of("Count"), Qi.of(e.value() + 1));
      });
    }, e.prototype.removeLeafNode = function (t) {
      for (var n = this.Kids(), r = n.size(), i = 0, o = 0; o < t;) {
        if (i >= r - 1) throw new Error("Index out of bounds: " + i + "/" + (r - 1));
        var a = n.get(i++),
            s = this.context.lookup(a);

        if (s instanceof e) {
          var u = s.Count().value();
          if (o + u > t) return void s.removeLeafNode(t - o);
          o += u;
        } else o += 1;
      }

      var h = n.lookup(i);
      h instanceof e ? h.removeLeafNode(0) : (n.remove(i), this.ascend(function (t) {
        var e = t.Count();
        t.set(Yi.of("Count"), Qi.of(e.value() - 1));
      }));
    }, e.prototype.ascend = function (t) {
      t(this);
      var e = this.Parent();
      e && e.ascend(t);
    }, e.prototype.traverse = function (t) {
      for (var n = this.Kids(), r = 0, i = n.size(); r < i; r++) {
        var o = n.get(r),
            a = this.context.lookup(o);
        a instanceof e && a.traverse(t), t(a, o);
      }
    }, e.withContext = function (t, n) {
      var r = new Map();
      return r.set(Yi.of("Type"), Yi.of("Pages")), r.set(Yi.of("Kids"), t.obj([])), r.set(Yi.of("Count"), t.obj(0)), n && r.set(Yi.of("Parent"), n), new e(r, t);
    }, e.fromMapWithContext = function (t, n) {
      return new e(t, n);
    }, e;
  }(Ei),
      ca = new Uint8Array(256);

  ca[Ii.Zero] = 1, ca[Ii.One] = 1, ca[Ii.Two] = 1, ca[Ii.Three] = 1, ca[Ii.Four] = 1, ca[Ii.Five] = 1, ca[Ii.Six] = 1, ca[Ii.Seven] = 1, ca[Ii.Eight] = 1, ca[Ii.Nine] = 1;
  var fa = new Uint8Array(256);
  fa[Ii.Period] = 1, fa[Ii.Plus] = 1, fa[Ii.Minus] = 1;

  for (var la = new Uint8Array(256), da = 0; da < 256; da++) la[da] = ca[da] || fa[da] ? 1 : 0;

  var pa,
      ya = Ii.Newline,
      ga = Ii.CarriageReturn,
      va = function () {
    function t(t) {
      this.bytes = t;
    }

    return t.prototype.parseRawInt = function () {
      for (var t = ""; !this.bytes.done();) {
        var e = this.bytes.peek();
        if (!ca[e]) break;
        t += m(this.bytes.next());
      }

      var n = Number(t);
      if (!t || !isFinite(n)) throw new Ci(this.bytes.position(), t);
      return n;
    }, t.prototype.parseRawNumber = function () {
      for (var t = ""; !this.bytes.done();) {
        var e = this.bytes.peek();
        if (!la[e]) break;
        if (t += m(this.bytes.next()), e === Ii.Period) break;
      }

      for (; !this.bytes.done();) {
        e = this.bytes.peek();
        if (!ca[e]) break;
        t += m(this.bytes.next());
      }

      var n = Number(t);
      if (!t || !isFinite(n)) throw new Ci(this.bytes.position(), t);
      return n;
    }, t.prototype.skipWhitespace = function () {
      for (; !this.bytes.done() && Gi[this.bytes.peek()];) this.bytes.next();
    }, t.prototype.skipLine = function () {
      for (; !this.bytes.done();) {
        var t = this.bytes.peek();
        if (t === ya || t === ga) return;
        this.bytes.next();
      }
    }, t.prototype.skipComment = function () {
      if (this.bytes.peek() !== Ii.Percent) return !1;

      for (; !this.bytes.done();) {
        var t = this.bytes.peek();
        if (t === ya || t === ga) return !0;
        this.bytes.next();
      }

      return !0;
    }, t.prototype.skipWhitespaceAndComments = function () {
      for (this.skipWhitespace(); this.skipComment();) this.skipWhitespace();
    }, t.prototype.matchKeyword = function (t) {
      for (var e = this.bytes.offset(), n = 0, r = t.length; n < r; n++) if (this.bytes.done() || this.bytes.next() !== t[n]) return this.bytes.moveTo(e), !1;

      return !0;
    }, t;
  }(),
      ma = function () {
    function t(t) {
      this.idx = 0, this.line = 0, this.column = 0, this.bytes = t, this.length = this.bytes.length;
    }

    return t.prototype.moveTo = function (t) {
      this.idx = t;
    }, t.prototype.next = function () {
      var t = this.bytes[this.idx++];
      return t === Ii.Newline ? (this.line += 1, this.column = 0) : this.column += 1, t;
    }, t.prototype.assertNext = function (t) {
      if (this.peek() !== t) throw new Pi(this.position(), t, this.peek());
      return this.next();
    }, t.prototype.peek = function () {
      return this.bytes[this.idx];
    }, t.prototype.peekAhead = function (t) {
      return this.bytes[this.idx + t];
    }, t.prototype.peekAt = function (t) {
      return this.bytes[t];
    }, t.prototype.done = function () {
      return this.idx >= this.length;
    }, t.prototype.offset = function () {
      return this.idx;
    }, t.prototype.slice = function (t, e) {
      return this.bytes.slice(t, e);
    }, t.prototype.position = function () {
      return {
        line: this.line,
        column: this.column,
        offset: this.idx
      };
    }, t.of = function (e) {
      return new t(e);
    }, t.fromPDFRawStream = function (e) {
      return t.of(ia(e).decode());
    }, t;
  }(),
      ba = Ii.Space,
      wa = Ii.CarriageReturn,
      xa = Ii.Newline,
      Sa = [Ii.s, Ii.t, Ii.r, Ii.e, Ii.a, Ii.m],
      ka = [Ii.e, Ii.n, Ii.d, Ii.s, Ii.t, Ii.r, Ii.e, Ii.a, Ii.m],
      Ca = {
    header: [Ii.Percent, Ii.P, Ii.D, Ii.F, Ii.Dash],
    eof: [Ii.Percent, Ii.Percent, Ii.E, Ii.O, Ii.F],
    obj: [Ii.o, Ii.b, Ii.j],
    endobj: [Ii.e, Ii.n, Ii.d, Ii.o, Ii.b, Ii.j],
    xref: [Ii.x, Ii.r, Ii.e, Ii.f],
    trailer: [Ii.t, Ii.r, Ii.a, Ii.i, Ii.l, Ii.e, Ii.r],
    startxref: [Ii.s, Ii.t, Ii.a, Ii.r, Ii.t, Ii.x, Ii.r, Ii.e, Ii.f],
    true: [Ii.t, Ii.r, Ii.u, Ii.e],
    false: [Ii.f, Ii.a, Ii.l, Ii.s, Ii.e],
    null: [Ii.n, Ii.u, Ii.l, Ii.l],
    stream: Sa,
    streamEOF1: a(Sa, [ba, wa, xa]),
    streamEOF2: a(Sa, [wa, xa]),
    streamEOF3: a(Sa, [wa]),
    streamEOF4: a(Sa, [xa]),
    endstream: ka,
    EOF1endstream: a([wa, xa], ka),
    EOF2endstream: a([wa], ka),
    EOF3endstream: a([xa], ka)
  },
      Fa = function (t) {
    function e(e, n) {
      var r = t.call(this, e) || this;
      return r.context = n, r;
    }

    return n(e, t), e.prototype.parseObject = function () {
      if (this.skipWhitespaceAndComments(), this.matchKeyword(Ca.true)) return Mi.True;
      if (this.matchKeyword(Ca.false)) return Mi.False;
      if (this.matchKeyword(Ca.null)) return Ji;
      var t = this.bytes.peek();
      if (t === Ii.LessThan && this.bytes.peekAhead(1) === Ii.LessThan) return this.parseDictOrStream();
      if (t === Ii.LessThan) return this.parseHexString();
      if (t === Ii.LeftParen) return this.parseString();
      if (t === Ii.ForwardSlash) return this.parseName();
      if (t === Ii.LeftSquareBracket) return this.parseArray();
      if (la[t]) return this.parseNumberOrRef();
      throw new Ri(this.bytes.position(), t);
    }, e.prototype.parseNumberOrRef = function () {
      var t = this.parseRawNumber();
      this.skipWhitespaceAndComments();
      var e = this.bytes.offset();

      if (ca[this.bytes.peek()]) {
        var n = this.parseRawNumber();
        if (this.skipWhitespaceAndComments(), this.bytes.peek() === Ii.R) return this.bytes.assertNext(Ii.R), no.of(t, n);
      }

      return this.bytes.moveTo(e), Qi.of(t);
    }, e.prototype.parseHexString = function () {
      var t = "";

      for (this.bytes.assertNext(Ii.LessThan); !this.bytes.done() && this.bytes.peek() !== Ii.GreaterThan;) t += m(this.bytes.next());

      return this.bytes.assertNext(Ii.GreaterThan), So.of(t);
    }, e.prototype.parseString = function () {
      for (var t = 0, e = !1, n = ""; !this.bytes.done();) {
        var r = this.bytes.next();
        if (n += m(r), e || (r === Ii.LeftParen && (t += 1), r === Ii.RightParen && (t -= 1)), r === Ii.BackSlash ? e = !e : e && (e = !1), 0 === t) return Oo.of(n.substring(1, n.length - 1));
      }

      throw new ji(this.bytes.position());
    }, e.prototype.parseName = function () {
      this.bytes.assertNext(Ii.ForwardSlash);

      for (var t = ""; !this.bytes.done();) {
        var e = this.bytes.peek();
        if (e < Ii.ExclamationPoint || e > Ii.Tilde || Gi[e] || Ai[e]) break;
        t += m(e), this.bytes.next();
      }

      return Yi.of(t);
    }, e.prototype.parseArray = function () {
      this.bytes.assertNext(Ii.LeftSquareBracket), this.skipWhitespaceAndComments();

      for (var t = Bi.withContext(this.context); this.bytes.peek() !== Ii.RightSquareBracket;) {
        var e = this.parseObject();
        t.push(e), this.skipWhitespaceAndComments();
      }

      return this.bytes.assertNext(Ii.RightSquareBracket), t;
    }, e.prototype.parseDict = function () {
      this.bytes.assertNext(Ii.LessThan), this.bytes.assertNext(Ii.LessThan);

      for (var t = new Map(); !this.bytes.done() && this.bytes.peek() !== Ii.GreaterThan && this.bytes.peekAhead(1) !== Ii.GreaterThan;) {
        this.skipWhitespaceAndComments();
        var e = this.parseName(),
            n = this.parseObject();
        t.set(e, n), this.skipWhitespaceAndComments();
      }

      this.skipWhitespaceAndComments(), this.bytes.assertNext(Ii.GreaterThan), this.bytes.assertNext(Ii.GreaterThan);
      var r = t.get(Yi.of("Type"));
      return r === Yi.of("Catalog") ? ua.fromMapWithContext(t, this.context) : r === Yi.of("Pages") ? ha.fromMapWithContext(t, this.context) : r === Yi.of("Page") ? co.fromMapWithContext(t, this.context) : Ei.fromMapWithContext(t, this.context);
    }, e.prototype.parseDictOrStream = function () {
      var t = this.bytes.position(),
          e = this.parseDict();
      if (this.skipWhitespaceAndComments(), !(this.matchKeyword(Ca.streamEOF1) || this.matchKeyword(Ca.streamEOF2) || this.matchKeyword(Ca.streamEOF3) || this.matchKeyword(Ca.streamEOF4) || this.matchKeyword(Ca.stream))) return e;
      var n,
          r = this.bytes.offset(),
          i = e.get(Yi.of("Length"));
      i instanceof Qi ? (n = r + i.value(), this.bytes.moveTo(n), this.skipWhitespaceAndComments(), this.matchKeyword(Ca.endstream) || (this.bytes.moveTo(r), n = this.findEndOfStreamFallback(t))) : n = this.findEndOfStreamFallback(t);
      var o = this.bytes.slice(r, n);
      return $i.of(e, o);
    }, e.prototype.findEndOfStreamFallback = function (t) {
      for (var e = 1, n = this.bytes.offset(); !this.bytes.done() && (n = this.bytes.offset(), this.matchKeyword(Ca.stream) ? e += 1 : this.matchKeyword(Ca.EOF1endstream) || this.matchKeyword(Ca.EOF2endstream) || this.matchKeyword(Ca.EOF3endstream) || this.matchKeyword(Ca.endstream) ? e -= 1 : this.bytes.next(), 0 !== e););

      if (0 !== e) throw new Ti(t);
      return n;
    }, e.forBytes = function (t, n) {
      return new e(ma.of(t), n);
    }, e.forByteStream = function (t, n) {
      return new e(t, n);
    }, e;
  }(va),
      Pa = function (t) {
    function e(e, n) {
      var r = t.call(this, ma.fromPDFRawStream(e), e.dict.context) || this,
          i = e.dict;
      return r.alreadyParsed = !1, r.shouldWaitForTick = n || function () {
        return !1;
      }, r.firstOffset = i.lookup(Yi.of("First"), Qi).value(), r.objectCount = i.lookup(Yi.of("N"), Qi).value(), r;
    }

    return n(e, t), e.prototype.parseIntoContext = function () {
      return i(this, void 0, void 0, function () {
        var t, e, n, r, i, a, s, u;
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              if (this.alreadyParsed) throw new bi("PDFObjectStreamParser", "parseIntoContext");
              this.alreadyParsed = !0, t = this.parseOffsetsAndObjectNumbers(), e = 0, n = t.length, o.label = 1;

            case 1:
              return e < n ? (r = t[e], i = r.objectNumber, a = r.offset, this.bytes.moveTo(this.firstOffset + a), s = this.parseObject(), u = no.of(i, 0), this.context.assign(u, s), this.shouldWaitForTick() ? [4, M()] : [3, 3]) : [3, 4];

            case 2:
              o.sent(), o.label = 3;

            case 3:
              return e++, [3, 1];

            case 4:
              return [2];
          }
        });
      });
    }, e.prototype.parseOffsetsAndObjectNumbers = function () {
      for (var t = [], e = 0, n = this.objectCount; e < n; e++) {
        this.skipWhitespaceAndComments();
        var r = this.parseRawInt();
        this.skipWhitespaceAndComments();
        var i = this.parseRawInt();
        t.push({
          objectNumber: r,
          offset: i
        });
      }

      return t;
    }, e.forStream = function (t, n) {
      return new e(t, n);
    }, e;
  }(Fa),
      Ra = function () {
    function t(t) {
      this.alreadyParsed = !1, this.dict = t.dict, this.bytes = ma.fromPDFRawStream(t), this.context = this.dict.context;
      var e = this.dict.lookup(Yi.of("Size"), Qi),
          n = this.dict.lookup(Yi.of("Index"));

      if (n instanceof Bi) {
        this.subsections = [];

        for (var r = 0, i = n.size(); r < i; r += 2) {
          var o = n.lookup(r + 0, Qi).value(),
              a = n.lookup(r + 1, Qi).value();
          this.subsections.push({
            firstObjectNumber: o,
            length: a
          });
        }
      } else this.subsections = [{
        firstObjectNumber: 0,
        length: e.value()
      }];

      var s = this.dict.lookup(Yi.of("W"), Bi);
      this.byteWidths = [-1, -1, -1];

      for (r = 0, i = s.size(); r < i; r++) this.byteWidths[r] = s.lookup(r, Qi).value();
    }

    return t.prototype.parseIntoContext = function () {
      if (this.alreadyParsed) throw new bi("PDFXRefStreamParser", "parseIntoContext");
      return this.alreadyParsed = !0, this.context.trailerInfo = {
        Root: this.dict.get(Yi.of("Root")),
        Encrypt: this.dict.get(Yi.of("Encrypt")),
        Info: this.dict.get(Yi.of("Info")),
        ID: this.dict.get(Yi.of("ID"))
      }, this.parseEntries();
    }, t.prototype.parseEntries = function () {
      for (var t = [], e = this.byteWidths, n = e[0], r = e[1], i = e[2], o = 0, a = this.subsections.length; o < a; o++) for (var s = this.subsections[o], u = s.firstObjectNumber, h = s.length, c = 0; c < h; c++) {
        for (var f = 0, l = 0, d = n; l < d; l++) f = f << 8 | this.bytes.next();

        var p = 0;

        for (l = 0, d = r; l < d; l++) p = p << 8 | this.bytes.next();

        var y = 0;

        for (l = 0, d = i; l < d; l++) y = y << 8 | this.bytes.next();

        0 === n && (f = 1);
        var g = u + c,
            v = {
          ref: no.of(g, y),
          offset: p,
          deleted: 0 === f,
          inObjectStream: 2 === f
        };
        t.push(v);
      }

      return t;
    }, t.forStream = function (e) {
      return new t(e);
    }, t;
  }(),
      Oa = function (t) {
    function e(e, n, r) {
      void 0 === n && (n = 1 / 0), void 0 === r && (r = !1);
      var i = t.call(this, ma.of(e), ho.create()) || this;
      return i.alreadyParsed = !1, i.parsedObjects = 0, i.shouldWaitForTick = function () {
        return i.parsedObjects += 1, i.parsedObjects % i.objectsPerTick == 0;
      }, i.objectsPerTick = n, i.throwOnInvalidObject = r, i;
    }

    return n(e, t), e.prototype.parseDocument = function () {
      return i(this, void 0, void 0, function () {
        var t, e;
        return o(this, function (n) {
          switch (n.label) {
            case 0:
              if (this.alreadyParsed) throw new bi("PDFParser", "parseDocument");
              this.alreadyParsed = !0, this.context.header = this.parseHeader(), n.label = 1;

            case 1:
              return this.bytes.done() ? [3, 3] : [4, this.parseDocumentSection()];

            case 2:
              if (n.sent(), (e = this.bytes.offset()) === t) throw new zi(this.bytes.position());
              return t = e, [3, 1];

            case 3:
              return this.maybeRecoverRoot(), [2, this.context];
          }
        });
      });
    }, e.prototype.maybeRecoverRoot = function () {
      var t = function t(t) {
        return t instanceof Ei && t.lookup(Yi.of("Type")) === Yi.of("Catalog");
      };

      if (!t(this.context.lookup(this.context.trailerInfo.Root))) for (var e = this.context.enumerateIndirectObjects(), n = 0, r = e.length; n < r; n++) {
        var i = e[n],
            o = i[0];
        t(i[1]) && (this.context.trailerInfo.Root = o);
      }
    }, e.prototype.parseHeader = function () {
      for (; !this.bytes.done();) {
        if (this.matchKeyword(Ca.header)) {
          var t = this.parseRawInt();
          this.bytes.assertNext(Ii.Period);
          var e = this.parseRawInt(),
              n = qi.forVersion(t, e);
          return this.skipBinaryHeaderComment(), n;
        }

        this.bytes.next();
      }

      throw new Ni(this.bytes.position());
    }, e.prototype.parseIndirectObjectHeader = function () {
      this.skipWhitespaceAndComments();
      var t = this.parseRawInt();
      this.skipWhitespaceAndComments();
      var e = this.parseRawInt();
      if (this.skipWhitespaceAndComments(), !this.matchKeyword(Ca.obj)) throw new Ui(this.bytes.position(), Ca.obj);
      return no.of(t, e);
    }, e.prototype.matchIndirectObjectHeader = function () {
      var t = this.bytes.offset();

      try {
        return this.parseIndirectObjectHeader(), !0;
      } catch (e) {
        return this.bytes.moveTo(t), !1;
      }
    }, e.prototype.parseIndirectObject = function () {
      return i(this, void 0, void 0, function () {
        var t, e;
        return o(this, function (n) {
          switch (n.label) {
            case 0:
              return t = this.parseIndirectObjectHeader(), this.skipWhitespaceAndComments(), e = this.parseObject(), this.skipWhitespaceAndComments(), this.matchKeyword(Ca.endobj), e instanceof $i && e.dict.lookup(Yi.of("Type")) === Yi.of("ObjStm") ? [4, Pa.forStream(e, this.shouldWaitForTick).parseIntoContext()] : [3, 2];

            case 1:
              return n.sent(), [3, 3];

            case 2:
              e instanceof $i && e.dict.lookup(Yi.of("Type")) === Yi.of("XRef") ? Ra.forStream(e).parseIntoContext() : this.context.assign(t, e), n.label = 3;

            case 3:
              return [2, t];
          }
        });
      });
    }, e.prototype.tryToParseInvalidIndirectObject = function () {
      var t = this.bytes.position(),
          e = "Trying to parse invalid object: " + JSON.stringify(t) + ")";
      if (this.throwOnInvalidObject) throw new Error(e);
      console.warn(e);
      var n = this.parseIndirectObjectHeader();
      console.warn("Invalid object ref: " + n), this.skipWhitespaceAndComments();

      for (var r = this.bytes.offset(), i = !0; !this.bytes.done() && (this.matchKeyword(Ca.endobj) && (i = !1), i);) this.bytes.next();

      if (i) throw new Oi(t);
      var o = this.bytes.offset() - Ca.endobj.length,
          a = mo.of(this.bytes.slice(r, o));
      return this.context.assign(n, a), n;
    }, e.prototype.parseIndirectObjects = function () {
      return i(this, void 0, void 0, function () {
        var t;
        return o(this, function (e) {
          switch (e.label) {
            case 0:
              this.skipWhitespaceAndComments(), e.label = 1;

            case 1:
              if (this.bytes.done() || !ca[this.bytes.peek()]) return [3, 8];
              t = this.bytes.offset(), e.label = 2;

            case 2:
              return e.trys.push([2, 4,, 5]), [4, this.parseIndirectObject()];

            case 3:
              return e.sent(), [3, 5];

            case 4:
              return e.sent(), this.bytes.moveTo(t), this.tryToParseInvalidIndirectObject(), [3, 5];

            case 5:
              return this.skipWhitespaceAndComments(), this.skipJibberish(), this.shouldWaitForTick() ? [4, M()] : [3, 7];

            case 6:
              e.sent(), e.label = 7;

            case 7:
              return [3, 1];

            case 8:
              return [2];
          }
        });
      });
    }, e.prototype.maybeParseCrossRefSection = function () {
      if (this.skipWhitespaceAndComments(), this.matchKeyword(Ca.xref)) {
        this.skipWhitespaceAndComments();

        for (var t = -1, e = lo.createEmpty(); !this.bytes.done() && ca[this.bytes.peek()];) {
          var n = this.parseRawInt();
          this.skipWhitespaceAndComments();
          var r = this.parseRawInt();
          this.skipWhitespaceAndComments();
          var i = this.bytes.peek();

          if (i === Ii.n || i === Ii.f) {
            var o = no.of(t, r);
            this.bytes.next() === Ii.n ? e.addEntry(o, n) : e.addDeletedEntry(o, n), t += 1;
          } else t = n;

          this.skipWhitespaceAndComments();
        }

        return e;
      }
    }, e.prototype.maybeParseTrailerDict = function () {
      if (this.skipWhitespaceAndComments(), this.matchKeyword(Ca.trailer)) {
        this.skipWhitespaceAndComments();
        var t = this.parseDict(),
            e = this.context;
        e.trailerInfo = {
          Root: t.get(Yi.of("Root")) || e.trailerInfo.Root,
          Encrypt: t.get(Yi.of("Encrypt")) || e.trailerInfo.Encrypt,
          Info: t.get(Yi.of("Info")) || e.trailerInfo.Info,
          ID: t.get(Yi.of("ID")) || e.trailerInfo.ID
        };
      }
    }, e.prototype.maybeParseTrailer = function () {
      if (this.skipWhitespaceAndComments(), this.matchKeyword(Ca.startxref)) {
        this.skipWhitespaceAndComments();
        var t = this.parseRawInt();
        return this.skipWhitespace(), this.matchKeyword(Ca.eof), this.skipWhitespaceAndComments(), this.matchKeyword(Ca.eof), this.skipWhitespaceAndComments(), po.forLastCrossRefSectionOffset(t);
      }
    }, e.prototype.parseDocumentSection = function () {
      return i(this, void 0, void 0, function () {
        return o(this, function (t) {
          switch (t.label) {
            case 0:
              return [4, this.parseIndirectObjects()];

            case 1:
              return t.sent(), this.maybeParseCrossRefSection(), this.maybeParseTrailerDict(), this.maybeParseTrailer(), this.skipJibberish(), [2];
          }
        });
      });
    }, e.prototype.skipJibberish = function () {
      for (this.skipWhitespaceAndComments(); !this.bytes.done();) {
        var t = this.bytes.offset(),
            e = this.bytes.peek();

        if (e >= Ii.Space && e <= Ii.Tilde && (this.matchKeyword(Ca.xref) || this.matchKeyword(Ca.trailer) || this.matchKeyword(Ca.startxref) || this.matchIndirectObjectHeader())) {
          this.bytes.moveTo(t);
          break;
        }

        this.bytes.next();
      }
    }, e.prototype.skipBinaryHeaderComment = function () {
      this.skipWhitespaceAndComments();

      try {
        var t = this.bytes.offset();
        this.parseIndirectObjectHeader(), this.bytes.moveTo(t);
      } catch (t) {
        this.bytes.next(), this.skipWhitespaceAndComments();
      }
    }, e.forBytesWithOptions = function (t, n, r) {
      return new e(t, n, r);
    }, e;
  }(Fa),
      Ta = function Ta(t) {
    return t instanceof Yi ? t : Yi.of(t);
  },
      ja = function ja(t) {
    return t instanceof Qi ? t : Qi.of(t);
  },
      za = function za(t) {
    return t instanceof Qi ? t.value() : t;
  };

  (pa = t.RotationTypes || (t.RotationTypes = {})).Degrees = "degrees", pa.Radians = "radians";

  var Na,
      Ua = function Ua(e) {
    return hi(e, "degreeAngle", ["number"]), {
      type: t.RotationTypes.Degrees,
      angle: e
    };
  },
      Ia = t.RotationTypes.Radians,
      qa = t.RotationTypes.Degrees,
      Va = function Va(t) {
    return t * Math.PI / 180;
  },
      Ba = function Ba(t) {
    return 180 * t / Math.PI;
  },
      Da = function Da(t) {
    return t.type === Ia ? t.angle : t.type === qa ? Va(t.angle) : Z("Invalid rotation: " + JSON.stringify(t));
  },
      Ma = function Ma(t) {
    return t.type === Ia ? Ba(t.angle) : t.type === qa ? t.angle : Z("Invalid rotation: " + JSON.stringify(t));
  },
      Ea = Math.cos,
      Aa = Math.sin,
      Ga = Math.tan,
      Ka = function Ka(t, e, n, r, i, o) {
    return ro.of(oo.ConcatTransformationMatrix, [ja(t), ja(e), ja(n), ja(r), ja(i), ja(o)]);
  },
      Wa = function Wa(t, e) {
    return Ka(1, 0, 0, 1, t, e);
  },
      Xa = function Xa(t, e) {
    return Ka(t, 0, 0, e, 0, 0);
  },
      Ha = function Ha(t) {
    return Ka(Ea(za(t)), Aa(za(t)), -Aa(za(t)), Ea(za(t)), 0, 0);
  },
      La = function La(t, e) {
    return Ka(1, Ga(za(t)), Ga(za(e)), 1, 0, 0);
  },
      Za = function Za(t, e) {
    return ro.of(oo.SetLineDashPattern, ["[" + t.map(ja).join(" ") + "]", ja(e)]);
  };

  (Na = t.LineCapStyle || (t.LineCapStyle = {}))[Na.Butt = 0] = "Butt", Na[Na.Round = 1] = "Round", Na[Na.Projecting = 2] = "Projecting";
  var Ya;
  (Ya = t.LineJoinStyle || (t.LineJoinStyle = {}))[Ya.Miter = 0] = "Miter", Ya[Ya.Round = 1] = "Round", Ya[Ya.Bevel = 2] = "Bevel";

  var Ja,
      Qa = function Qa() {
    return ro.of(oo.PushGraphicsState);
  },
      _a = function _a() {
    return ro.of(oo.PopGraphicsState);
  },
      $a = function $a(t) {
    return ro.of(oo.SetLineWidth, [ja(t)]);
  },
      ts = function ts(t, e, n, r, i, o) {
    return ro.of(oo.AppendBezierCurve, [ja(t), ja(e), ja(n), ja(r), ja(i), ja(o)]);
  },
      es = function es(t, e, n, r) {
    return ro.of(oo.CurveToReplicateInitialPoint, [ja(t), ja(e), ja(n), ja(r)]);
  },
      ns = function ns() {
    return ro.of(oo.ClosePath);
  },
      rs = function rs(t, e) {
    return ro.of(oo.MoveTo, [ja(t), ja(e)]);
  },
      is = function is(t, e) {
    return ro.of(oo.LineTo, [ja(t), ja(e)]);
  },
      os = function os(t, e, n, r) {
    return ro.of(oo.AppendRectangle, [ja(t), ja(e), ja(n), ja(r)]);
  },
      as = function as() {
    return ro.of(oo.StrokePath);
  },
      ss = function ss() {
    return ro.of(oo.FillNonZero);
  },
      us = function us() {
    return ro.of(oo.FillNonZeroAndStroke);
  },
      hs = function hs() {
    return ro.of(oo.NextLine);
  },
      cs = function cs(t) {
    return ro.of(oo.ShowText, [t]);
  },
      fs = function fs() {
    return ro.of(oo.BeginText);
  },
      ls = function ls() {
    return ro.of(oo.EndText);
  },
      ds = function ds(t, e) {
    return ro.of(oo.SetFontAndSize, [Ta(t), ja(e)]);
  },
      ps = function ps(t) {
    return ro.of(oo.SetTextLineHeight, [ja(t)]);
  };

  (Ja = t.TextRenderingMode || (t.TextRenderingMode = {}))[Ja.Fill = 0] = "Fill", Ja[Ja.Outline = 1] = "Outline", Ja[Ja.FillAndOutline = 2] = "FillAndOutline", Ja[Ja.Invisible = 3] = "Invisible", Ja[Ja.FillAndClip = 4] = "FillAndClip", Ja[Ja.OutlineAndClip = 5] = "OutlineAndClip", Ja[Ja.FillAndOutlineAndClip = 6] = "FillAndOutlineAndClip", Ja[Ja.Clip = 7] = "Clip";

  var ys,
      gs = function gs(t, e, n, r, i, o) {
    return ro.of(oo.SetTextMatrix, [ja(t), ja(e), ja(n), ja(r), ja(i), ja(o)]);
  },
      vs = function vs(t, e, n, r, i) {
    return gs(Ea(za(t)), Aa(za(t)) + Ga(za(e)), -Aa(za(t)) + Ga(za(n)), Ea(za(t)), r, i);
  },
      ms = function ms(t) {
    return ro.of(oo.DrawObject, [Ta(t)]);
  },
      bs = function bs(t) {
    return ro.of(oo.NonStrokingColorGray, [ja(t)]);
  },
      ws = function ws(t) {
    return ro.of(oo.StrokingColorGray, [ja(t)]);
  },
      xs = function xs(t, e, n) {
    return ro.of(oo.NonStrokingColorRgb, [ja(t), ja(e), ja(n)]);
  },
      Ss = function Ss(t, e, n) {
    return ro.of(oo.StrokingColorRgb, [ja(t), ja(e), ja(n)]);
  },
      ks = function ks(t, e, n, r) {
    return ro.of(oo.NonStrokingColorCmyk, [ja(t), ja(e), ja(n), ja(r)]);
  },
      Cs = function Cs(t, e, n, r) {
    return ro.of(oo.StrokingColorCmyk, [ja(t), ja(e), ja(n), ja(r)]);
  };

  (ys = t.ColorTypes || (t.ColorTypes = {})).Grayscale = "Grayscale", ys.RGB = "RGB", ys.CMYK = "CMYK";

  var Fs,
      Ps = function Ps(e, n, r) {
    return li(e, "red", 0, 1), li(n, "green", 0, 1), li(r, "blue", 0, 1), {
      type: t.ColorTypes.RGB,
      red: e,
      green: n,
      blue: r
    };
  },
      Rs = t.ColorTypes.Grayscale,
      Os = t.ColorTypes.RGB,
      Ts = t.ColorTypes.CMYK,
      js = function js(t) {
    return t.type === Rs ? bs(t.gray) : t.type === Os ? xs(t.red, t.green, t.blue) : t.type === Ts ? ks(t.cyan, t.magenta, t.yellow, t.key) : Z("Invalid color: " + JSON.stringify(t));
  },
      zs = function zs(t) {
    return t.type === Rs ? ws(t.gray) : t.type === Os ? Ss(t.red, t.green, t.blue) : t.type === Ts ? Cs(t.cyan, t.magenta, t.yellow, t.key) : Z("Invalid color: " + JSON.stringify(t));
  },
      Ns = function (t) {
    function e() {
      return t.call(this, "Input document to `PDFDocument.load` is encrypted. You can use `PDFDocument.load(..., { ignoreEncryption: true })` if you wish to load the document anyways.") || this;
    }

    return n(e, t), e;
  }(Error),
      Us = function (t) {
    function e() {
      return t.call(this, "Input to `PDFDocument.embedFont` was a custom font, but no `fontkit` instance was found. You must register a `fontkit` instance with `PDFDocument.registerFontkit(...)` before embedding custom fonts.") || this;
    }

    return n(e, t), e;
  }(Error),
      Is = function (t) {
    function e() {
      return t.call(this, "A `page` passed to `PDFDocument.addPage` or `PDFDocument.insertPage` was from a different (foreign) PDF document. If you want to copy pages from one PDFDocument to another, you must use `PDFDocument.copyPages(...)` to copy the pages before adding or inserting them.") || this;
    }

    return n(e, t), e;
  }(Error),
      qs = function (t) {
    function e() {
      return t.call(this, "PDFDocument has no pages so `PDFDocument.removePage` cannot be called") || this;
    }

    return n(e, t), e;
  }(Error),
      Vs = 0,
      Bs = 0,
      Ds = 0,
      Ms = 0,
      Es = 0,
      As = 0,
      Gs = new Map([["A", 7], ["a", 7], ["C", 6], ["c", 6], ["H", 1], ["h", 1], ["L", 2], ["l", 2], ["M", 2], ["m", 2], ["Q", 4], ["q", 4], ["S", 4], ["s", 4], ["T", 2], ["t", 2], ["V", 1], ["v", 1], ["Z", 0], ["z", 0]]),
      Ks = {
    M: function (t) {
      return Vs = t[0], Bs = t[1], Ds = Ms = null, Es = Vs, As = Bs, rs(Vs, Bs);
    },
    m: function (t) {
      return Vs += t[0], Bs += t[1], Ds = Ms = null, Es = Vs, As = Bs, rs(Vs, Bs);
    },
    C: function (t) {
      return Vs = t[4], Bs = t[5], Ds = t[2], Ms = t[3], ts(t[0], t[1], t[2], t[3], t[4], t[5]);
    },
    c: function (t) {
      var e = ts(t[0] + Vs, t[1] + Bs, t[2] + Vs, t[3] + Bs, t[4] + Vs, t[5] + Bs);
      return Ds = Vs + t[2], Ms = Bs + t[3], Vs += t[4], Bs += t[5], e;
    },
    S: function (t) {
      null !== Ds && null !== Ms || (Ds = Vs, Ms = Bs);
      var e = ts(Vs - (Ds - Vs), Bs - (Ms - Bs), t[0], t[1], t[2], t[3]);
      return Ds = t[0], Ms = t[1], Vs = t[2], Bs = t[3], e;
    },
    s: function (t) {
      null !== Ds && null !== Ms || (Ds = Vs, Ms = Bs);
      var e = ts(Vs - (Ds - Vs), Bs - (Ms - Bs), Vs + t[0], Bs + t[1], Vs + t[2], Bs + t[3]);
      return Ds = Vs + t[0], Ms = Bs + t[1], Vs += t[2], Bs += t[3], e;
    },
    Q: function (t) {
      return Ds = t[0], Ms = t[1], Vs = t[2], Bs = t[3], es(t[0], t[1], Vs, Bs);
    },
    q: function (t) {
      var e = es(t[0] + Vs, t[1] + Bs, t[2] + Vs, t[3] + Bs);
      return Ds = Vs + t[0], Ms = Bs + t[1], Vs += t[2], Bs += t[3], e;
    },
    T: function (t) {
      null === Ds || null === Ms ? (Ds = Vs, Ms = Bs) : (Ds = Vs - (Ds - Vs), Ms = Bs - (Ms - Bs));
      var e = es(Ds, Ms, t[0], t[1]);
      return Ds = Vs - (Ds - Vs), Ms = Bs - (Ms - Bs), Vs = t[0], Bs = t[1], e;
    },
    t: function (t) {
      null === Ds || null === Ms ? (Ds = Vs, Ms = Bs) : (Ds = Vs - (Ds - Vs), Ms = Bs - (Ms - Bs));
      var e = es(Ds, Ms, Vs + t[0], Bs + t[1]);
      return Vs += t[0], Bs += t[1], e;
    },
    A: function (t) {
      var e = Ws(Vs, Bs, t);
      return Vs = t[5], Bs = t[6], e;
    },
    a: function (t) {
      t[5] += Vs, t[6] += Bs;
      var e = Ws(Vs, Bs, t);
      return Vs = t[5], Bs = t[6], e;
    },
    L: function (t) {
      return Vs = t[0], Bs = t[1], Ds = Ms = null, is(Vs, Bs);
    },
    l: function (t) {
      return Vs += t[0], Bs += t[1], Ds = Ms = null, is(Vs, Bs);
    },
    H: function (t) {
      return Vs = t[0], Ds = Ms = null, is(Vs, Bs);
    },
    h: function (t) {
      return Vs += t[0], Ds = Ms = null, is(Vs, Bs);
    },
    V: function (t) {
      return Bs = t[0], Ds = Ms = null, is(Vs, Bs);
    },
    v: function (t) {
      return Bs += t[0], Ds = Ms = null, is(Vs, Bs);
    },
    Z: function () {
      var t = ns();
      return Vs = Es, Bs = As, t;
    },
    z: function () {
      var t = ns();
      return Vs = Es, Bs = As, t;
    }
  },
      Ws = function Ws(t, e, n) {
    for (var r = n[0], i = n[1], o = n[2], a = n[3], s = n[4], u = n[5], h = n[6], c = [], f = 0, l = Xs(u, h, r, i, a, s, o, t, e); f < l.length; f++) {
      var d = l[f],
          p = Hs.apply(void 0, d);
      c.push(ts.apply(void 0, p));
    }

    return c;
  },
      Xs = function Xs(t, e, n, r, i, o, a, s, u) {
    var h = a * (Math.PI / 180),
        c = Math.sin(h),
        f = Math.cos(h);
    n = Math.abs(n), r = Math.abs(r);
    var l = (Ds = f * (s - t) * .5 + c * (u - e) * .5) * Ds / (n * n) + (Ms = f * (u - e) * .5 - c * (s - t) * .5) * Ms / (r * r);
    l > 1 && (n *= l = Math.sqrt(l), r *= l);
    var d = f / n,
        p = c / n,
        y = -c / r,
        g = f / r,
        v = d * s + p * u,
        m = y * s + g * u,
        b = d * t + p * e,
        w = y * t + g * e,
        x = 1 / ((b - v) * (b - v) + (w - m) * (w - m)) - .25;
    x < 0 && (x = 0);
    var S = Math.sqrt(x);
    o === i && (S = -S);
    var k = .5 * (v + b) - S * (w - m),
        C = .5 * (m + w) + S * (b - v),
        F = Math.atan2(m - C, v - k),
        P = Math.atan2(w - C, b - k) - F;
    P < 0 && 1 === o ? P += 2 * Math.PI : P > 0 && 0 === o && (P -= 2 * Math.PI);

    for (var R = Math.ceil(Math.abs(P / (.5 * Math.PI + .001))), O = [], T = 0; T < R; T++) {
      var j = F + T * P / R,
          z = F + (T + 1) * P / R;
      O[T] = [k, C, j, z, n, r, c, f];
    }

    return O;
  },
      Hs = function Hs(t, e, n, r, i, o, a, s) {
    var u = s * i,
        h = -a * o,
        c = a * i,
        f = s * o,
        l = .5 * (r - n),
        d = 8 / 3 * Math.sin(.5 * l) * Math.sin(.5 * l) / Math.sin(l),
        p = t + Math.cos(n) - d * Math.sin(n),
        y = e + Math.sin(n) + d * Math.cos(n),
        g = t + Math.cos(r),
        v = e + Math.sin(r),
        m = g + d * Math.sin(r),
        b = v - d * Math.cos(r);
    return [u * p + h * y, c * p + f * y, u * m + h * b, c * m + f * b, u * g + h * v, c * g + f * v];
  },
      Ls = function Ls(t) {
    return function (t) {
      Vs = Bs = Ds = Ms = Es = As = 0;

      for (var e = [], n = 0; n < t.length; n++) {
        var r = t[n];

        if (r.cmd && "function" == typeof Ks[r.cmd]) {
          var i = Ks[r.cmd](r.args);
          Array.isArray(i) ? e = e.concat(i) : e.push(i);
        }
      }

      return e;
    }(function (t) {
      for (var e, n = [], r = [], i = "", o = !1, a = 0, s = 0, u = t; s < u.length; s++) {
        var h = u[s];
        if (Gs.has(h)) a = Gs.get(h), e && (i.length > 0 && (r[r.length] = +i), n[n.length] = {
          cmd: e,
          args: r
        }, r = [], i = "", o = !1), e = h;else if ([" ", ","].includes(h) || "-" === h && i.length > 0 && "e" !== i[i.length - 1] || "." === h && o) {
          if (0 === i.length) continue;
          r.length === a ? (n[n.length] = {
            cmd: e,
            args: r
          }, r = [+i], "M" === e && (e = "L"), "m" === e && (e = "l")) : r[r.length] = +i, o = "." === h, i = ["-", "."].includes(h) ? h : "";
        } else i += h, "." === h && (o = !0);
      }

      return i.length > 0 && (r.length === a ? (n[n.length] = {
        cmd: e,
        args: r
      }, r = [+i], "M" === e && (e = "L"), "m" === e && (e = "l")) : r[r.length] = +i), n[n.length] = {
        cmd: e,
        args: r
      }, n;
    }(t));
  },
      Zs = function Zs(t, e) {
    for (var n = [fs(), js(e.color), ds(e.font, e.size), ps(e.lineHeight), vs(Da(e.rotate), Da(e.xSkew), Da(e.ySkew), e.x, e.y)], r = 0, i = t.length; r < i; r++) n.push(cs(t[r]), hs());

    return n.push(ls()), n;
  },
      Ys = function Ys(t, e) {
    return [Qa(), Wa(e.x, e.y), Ha(Da(e.rotate)), Xa(e.width, e.height), La(Da(e.xSkew), Da(e.ySkew)), ms(t), _a()];
  },
      Js = function Js(t, e) {
    return [Qa(), Wa(e.x, e.y), Ha(Da(e.rotate)), Xa(e.xScale, e.yScale), La(Da(e.xSkew), Da(e.ySkew)), ms(t), _a()];
  },
      Qs = function Qs(t) {
    return [Qa(), t.color && zs(t.color), $a(t.thickness), rs(t.start.x, t.start.y), is(t.end.x, t.end.y), as(), _a()].filter(Boolean);
  },
      _s = function _s(t) {
    return [Qa(), t.color && js(t.color), t.borderColor && zs(t.borderColor), $a(t.borderWidth), Wa(t.x, t.y), Ha(Da(t.rotate)), La(Da(t.xSkew), Da(t.ySkew)), rs(0, 0), is(0, t.height), is(t.width, t.height), is(t.width, 0), ns(), t.color && t.borderWidth ? us() : t.color ? ss() : t.borderColor ? as() : ns(), _a()].filter(Boolean);
  },
      $s = (Math.sqrt(2) - 1) / 3 * 4,
      tu = function tu(t) {
    var e = za(t.x),
        n = za(t.y),
        r = za(t.xScale),
        i = za(t.yScale),
        o = r * $s,
        a = i * $s,
        s = (e -= r) + 2 * r,
        u = (n -= i) + 2 * i,
        h = e + r,
        c = n + i;
    return [Qa(), rs(e, c), ts(e, c - a, h - o, n, h, n), ts(h + o, n, s, c - a, s, c), ts(s, c + a, h + o, u, h, u), ts(h - o, u, e, c + a, e, c), _a()];
  },
      eu = function eu(t) {
    return a([Qa(), t.color && js(t.color), t.borderColor && zs(t.borderColor), $a(t.borderWidth)], tu({
      x: t.x,
      y: t.y,
      xScale: t.xScale,
      yScale: t.yScale
    }), [t.color && t.borderWidth ? us() : t.color ? ss() : t.borderColor ? as() : ns(), _a()]).filter(Boolean);
  },
      nu = function nu(t, e) {
    return a([Qa(), Wa(e.x, e.y), e.scale ? Xa(e.scale, -e.scale) : Xa(1, -1), e.color && js(e.color), e.borderColor && zs(e.borderColor), e.borderWidth && $a(e.borderWidth)], Ls(t), [e.color && e.borderWidth ? us() : e.color ? ss() : e.borderColor ? as() : ns(), _a()]).filter(Boolean);
  },
      ru = {
    "4A0": [4767.87, 6740.79],
    "2A0": [3370.39, 4767.87],
    A0: [2383.94, 3370.39],
    A1: [1683.78, 2383.94],
    A2: [1190.55, 1683.78],
    A3: [841.89, 1190.55],
    A4: [595.28, 841.89],
    A5: [419.53, 595.28],
    A6: [297.64, 419.53],
    A7: [209.76, 297.64],
    A8: [147.4, 209.76],
    A9: [104.88, 147.4],
    A10: [73.7, 104.88],
    B0: [2834.65, 4008.19],
    B1: [2004.09, 2834.65],
    B2: [1417.32, 2004.09],
    B3: [1000.63, 1417.32],
    B4: [708.66, 1000.63],
    B5: [498.9, 708.66],
    B6: [354.33, 498.9],
    B7: [249.45, 354.33],
    B8: [175.75, 249.45],
    B9: [124.72, 175.75],
    B10: [87.87, 124.72],
    C0: [2599.37, 3676.54],
    C1: [1836.85, 2599.37],
    C2: [1298.27, 1836.85],
    C3: [918.43, 1298.27],
    C4: [649.13, 918.43],
    C5: [459.21, 649.13],
    C6: [323.15, 459.21],
    C7: [229.61, 323.15],
    C8: [161.57, 229.61],
    C9: [113.39, 161.57],
    C10: [79.37, 113.39],
    RA0: [2437.8, 3458.27],
    RA1: [1729.13, 2437.8],
    RA2: [1218.9, 1729.13],
    RA3: [864.57, 1218.9],
    RA4: [609.45, 864.57],
    SRA0: [2551.18, 3628.35],
    SRA1: [1814.17, 2551.18],
    SRA2: [1275.59, 1814.17],
    SRA3: [907.09, 1275.59],
    SRA4: [637.8, 907.09],
    Executive: [521.86, 756],
    Folio: [612, 936],
    Legal: [612, 1008],
    Letter: [612, 792],
    Tabloid: [792, 1224]
  };

  (Fs = t.StandardFonts || (t.StandardFonts = {})).Courier = "Courier", Fs.CourierBold = "Courier-Bold", Fs.CourierOblique = "Courier-Oblique", Fs.CourierBoldOblique = "Courier-BoldOblique", Fs.Helvetica = "Helvetica", Fs.HelveticaBold = "Helvetica-Bold", Fs.HelveticaOblique = "Helvetica-Oblique", Fs.HelveticaBoldOblique = "Helvetica-BoldOblique", Fs.TimesRoman = "Times-Roman", Fs.TimesRomanBold = "Times-Bold", Fs.TimesRomanItalic = "Times-Italic", Fs.TimesRomanBoldItalic = "Times-BoldItalic", Fs.Symbol = "Symbol", Fs.ZapfDingbats = "ZapfDingbats";

  var iu,
      ou = function () {
    function t(t, e, n) {
      this.alreadyEmbedded = !1, hi(t, "ref", [[no, "PDFRef"]]), hi(e, "doc", [[hu, "PDFDocument"]]), hi(n, "embedder", [[sa, "PDFPageEmbedder"]]), this.ref = t, this.doc = e, this.width = n.width, this.height = n.height, this.embedder = n;
    }

    return t.prototype.scale = function (t) {
      return hi(t, "factor", ["number"]), {
        width: this.width * t,
        height: this.height * t
      };
    }, t.prototype.size = function () {
      return this.scale(1);
    }, t.prototype.embed = function () {
      return i(this, void 0, void 0, function () {
        return o(this, function (t) {
          switch (t.label) {
            case 0:
              return this.alreadyEmbedded ? [3, 2] : [4, this.embedder.embedIntoContext(this.doc.context, this.ref)];

            case 1:
              t.sent(), this.alreadyEmbedded = !0, t.label = 2;

            case 2:
              return [2];
          }
        });
      });
    }, t.of = function (e, n, r) {
      return new t(e, n, r);
    }, t;
  }(),
      au = function () {
    function t(t, e, n) {
      this.modified = !0, hi(t, "ref", [[no, "PDFRef"]]), hi(e, "doc", [[hu, "PDFDocument"]]), hi(n, "embedder", [[To, "CustomFontEmbedder"], [ko, "StandardFontEmbedder"]]), this.ref = t, this.doc = e, this.name = n.fontName, this.embedder = n;
    }

    return t.prototype.encodeText = function (t) {
      return hi(t, "text", ["string"]), this.modified = !0, this.embedder.encodeText(t);
    }, t.prototype.widthOfTextAtSize = function (t, e) {
      return hi(t, "text", ["string"]), hi(e, "size", ["number"]), this.embedder.widthOfTextAtSize(t, e);
    }, t.prototype.heightAtSize = function (t) {
      return hi(t, "size", ["number"]), this.embedder.heightOfFontAtSize(t);
    }, t.prototype.sizeAtHeight = function (t) {
      return hi(t, "height", ["number"]), this.embedder.sizeOfFontAtHeight(t);
    }, t.prototype.getCharacterSet = function () {
      return this.embedder instanceof ko ? Object.keys(this.embedder.encoding.unicodeMappings).map(Number).sort(function (t, e) {
        return t - e;
      }) : this.embedder.font.characterSet;
    }, t.prototype.embed = function () {
      return i(this, void 0, void 0, function () {
        return o(this, function (t) {
          switch (t.label) {
            case 0:
              return this.modified ? [4, this.embedder.embedIntoContext(this.doc.context, this.ref)] : [3, 2];

            case 1:
              t.sent(), this.modified = !1, t.label = 2;

            case 2:
              return [2];
          }
        });
      });
    }, t.of = function (e, n, r) {
      return new t(e, n, r);
    }, t;
  }(),
      su = function () {
    function t(t, e, n) {
      this.alreadyEmbedded = !1, hi(t, "ref", [[no, "PDFRef"]]), hi(e, "doc", [[hu, "PDFDocument"]]), hi(n, "embedder", [[Vo, "JpegEmbedder"], [Go, "PngEmbedder"]]), this.ref = t, this.doc = e, this.width = n.width, this.height = n.height, this.embedder = n;
    }

    return t.prototype.scale = function (t) {
      return hi(t, "factor", ["number"]), {
        width: this.width * t,
        height: this.height * t
      };
    }, t.prototype.size = function () {
      return this.scale(1);
    }, t.prototype.embed = function () {
      return i(this, void 0, void 0, function () {
        return o(this, function (t) {
          switch (t.label) {
            case 0:
              return this.alreadyEmbedded ? [3, 2] : [4, this.embedder.embedIntoContext(this.doc.context, this.ref)];

            case 1:
              t.sent(), this.alreadyEmbedded = !0, t.label = 2;

            case 2:
              return [2];
          }
        });
      });
    }, t.of = function (e, n, r) {
      return new t(e, n, r);
    }, t;
  }(),
      uu = function () {
    function e(t, e, n) {
      this.fontSize = 24, this.fontColor = Ps(0, 0, 0), this.lineHeight = 24, this.x = 0, this.y = 0, hi(t, "leafNode", [[co, "PDFPageLeaf"]]), hi(e, "ref", [[no, "PDFRef"]]), hi(n, "doc", [[hu, "PDFDocument"]]), this.node = t, this.ref = e, this.doc = n;
    }

    return e.prototype.setRotation = function (t) {
      var e = Ma(t);
      di(e, "degreesAngle", 90), this.node.set(Yi.of("Rotate"), this.doc.context.obj(e));
    }, e.prototype.getRotation = function () {
      var t = this.node.Rotate();
      return Ua(t ? t.value() : 0);
    }, e.prototype.setSize = function (t, e) {
      hi(t, "width", ["number"]), hi(e, "height", ["number"]);
      var n = this.node.MediaBox().clone();
      n.set(2, this.doc.context.obj(t)), n.set(3, this.doc.context.obj(e)), this.node.set(Yi.of("MediaBox"), n);
    }, e.prototype.setWidth = function (t) {
      hi(t, "width", ["number"]), this.setSize(t, this.getSize().height);
    }, e.prototype.setHeight = function (t) {
      hi(t, "height", ["number"]), this.setSize(this.getSize().width, t);
    }, e.prototype.getSize = function () {
      var t = this.node.MediaBox();
      return {
        width: t.lookup(2, Qi).value() - t.lookup(0, Qi).value(),
        height: t.lookup(3, Qi).value() - t.lookup(1, Qi).value()
      };
    }, e.prototype.getWidth = function () {
      return this.getSize().width;
    }, e.prototype.getHeight = function () {
      return this.getSize().height;
    }, e.prototype.translateContent = function (t, e) {
      hi(t, "x", ["number"]), hi(e, "y", ["number"]), this.node.normalize(), this.getContentStream();
      var n = this.createContentStream(Qa(), Wa(t, e)),
          r = this.doc.context.register(n),
          i = this.createContentStream(_a()),
          o = this.doc.context.register(i);
      this.node.wrapContentStreams(r, o);
    }, e.prototype.resetPosition = function () {
      this.getContentStream(!1), this.x = 0, this.y = 0;
    }, e.prototype.setFont = function (t) {
      hi(t, "font", [[au, "PDFFont"]]), this.font = t, this.fontKey = S(this.font.name), this.node.setFontDictionary(Yi.of(this.fontKey), this.font.ref);
    }, e.prototype.setFontSize = function (t) {
      hi(t, "fontSize", ["number"]), this.fontSize = t;
    }, e.prototype.setFontColor = function (t) {
      hi(t, "fontColor", [[Object, "Color"]]), this.fontColor = t;
    }, e.prototype.setLineHeight = function (t) {
      hi(t, "lineHeight", ["number"]), this.lineHeight = t;
    }, e.prototype.getPosition = function () {
      return {
        x: this.x,
        y: this.y
      };
    }, e.prototype.getX = function () {
      return this.x;
    }, e.prototype.getY = function () {
      return this.y;
    }, e.prototype.moveTo = function (t, e) {
      hi(t, "x", ["number"]), hi(e, "y", ["number"]), this.x = t, this.y = e;
    }, e.prototype.moveDown = function (t) {
      hi(t, "yDecrease", ["number"]), this.y -= t;
    }, e.prototype.moveUp = function (t) {
      hi(t, "yIncrease", ["number"]), this.y += t;
    }, e.prototype.moveLeft = function (t) {
      hi(t, "xDecrease", ["number"]), this.x -= t;
    }, e.prototype.moveRight = function (t) {
      hi(t, "xIncrease", ["number"]), this.x += t;
    }, e.prototype.pushOperators = function () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];

      fi(t, "operator", [[ro, "PDFOperator"]]);
      var n = this.getContentStream();
      n.push.apply(n, t);
    }, e.prototype.drawText = function (t, e) {
      var n, r, i, o, a, s, u;
      void 0 === e && (e = {}), hi(t, "text", ["string"]), ci(e.color, "options.color", [[Object, "Color"]]), ci(e.font, "options.font", [[au, "PDFFont"]]), ci(e.size, "options.size", ["number"]), ci(e.rotate, "options.rotate", [[Object, "Rotation"]]), ci(e.xSkew, "options.xSkew", [[Object, "Rotation"]]), ci(e.ySkew, "options.ySkew", [[Object, "Rotation"]]), ci(e.x, "options.x", ["number"]), ci(e.y, "options.y", ["number"]), ci(e.lineHeight, "options.lineHeight", ["number"]), ci(e.maxWidth, "options.maxWidth", ["number"]), ci(e.wordBreaks, "options.wordBreaks", [Array]);
      var h = this.getFont()[0];
      e.font && this.setFont(e.font);

      for (var c = this.getFont(), f = c[0], l = c[1], d = e.size || this.fontSize, p = e.wordBreaks || this.doc.defaultWordBreaks, y = void 0 === e.maxWidth ? C(t).split(/[\r\n\f]/) : F(t, p, e.maxWidth, function (t) {
        return f.widthOfTextAtSize(t, d);
      }), g = new Array(y.length), v = 0, m = y.length; v < m; v++) g[v] = f.encodeText(y[v]);

      var b = this.getContentStream();
      b.push.apply(b, Zs(g, {
        color: (n = e.color, null != n ? n : this.fontColor),
        font: l,
        size: d,
        rotate: (r = e.rotate, null != r ? r : Ua(0)),
        xSkew: (i = e.xSkew, null != i ? i : Ua(0)),
        ySkew: (o = e.ySkew, null != o ? o : Ua(0)),
        x: (a = e.x, null != a ? a : this.x),
        y: (s = e.y, null != s ? s : this.y),
        lineHeight: (u = e.lineHeight, null != u ? u : this.lineHeight)
      })), e.font && this.setFont(h);
    }, e.prototype.drawImage = function (t, e) {
      var n, r, i, o, a, s, u;
      void 0 === e && (e = {}), hi(t, "image", [[su, "PDFImage"]]), ci(e.x, "options.x", ["number"]), ci(e.y, "options.y", ["number"]), ci(e.width, "options.width", ["number"]), ci(e.height, "options.height", ["number"]), ci(e.rotate, "options.rotate", [[Object, "Rotation"]]), ci(e.xSkew, "options.xSkew", [[Object, "Rotation"]]), ci(e.ySkew, "options.ySkew", [[Object, "Rotation"]]);
      var h = S("Image", 10);
      this.node.setXObject(Yi.of(h), t.ref);
      var c = this.getContentStream();
      c.push.apply(c, Ys(h, {
        x: (n = e.x, null != n ? n : this.x),
        y: (r = e.y, null != r ? r : this.y),
        width: (i = e.width, null != i ? i : t.size().width),
        height: (o = e.height, null != o ? o : t.size().height),
        rotate: (a = e.rotate, null != a ? a : Ua(0)),
        xSkew: (s = e.xSkew, null != s ? s : Ua(0)),
        ySkew: (u = e.ySkew, null != u ? u : Ua(0))
      }));
    }, e.prototype.drawPage = function (t, e) {
      var n, r, i, o, a;
      void 0 === e && (e = {}), hi(t, "embeddedPage", [[ou, "PDFEmbeddedPage"]]), ci(e.x, "options.x", ["number"]), ci(e.y, "options.y", ["number"]), ci(e.xScale, "options.xScale", ["number"]), ci(e.yScale, "options.yScale", ["number"]), ci(e.width, "options.width", ["number"]), ci(e.height, "options.height", ["number"]), ci(e.rotate, "options.rotate", [[Object, "Rotation"]]), ci(e.xSkew, "options.xSkew", [[Object, "Rotation"]]), ci(e.ySkew, "options.ySkew", [[Object, "Rotation"]]);
      var s = S("EmbeddedPdfPage", 10);
      this.node.setXObject(Yi.of(s), t.ref);
      var u = void 0 !== e.width ? e.width / t.width : void 0 !== e.xScale ? e.xScale : 1,
          h = void 0 !== e.height ? e.height / t.height : void 0 !== e.yScale ? e.yScale : 1,
          c = this.getContentStream();
      c.push.apply(c, Js(s, {
        x: (n = e.x, null != n ? n : this.x),
        y: (r = e.y, null != r ? r : this.y),
        xScale: u,
        yScale: h,
        rotate: (i = e.rotate, null != i ? i : Ua(0)),
        xSkew: (o = e.xSkew, null != o ? o : Ua(0)),
        ySkew: (a = e.ySkew, null != a ? a : Ua(0))
      }));
    }, e.prototype.drawSvgPath = function (t, e) {
      var n, r, i, o, a;
      void 0 === e && (e = {}), hi(t, "path", ["string"]), ci(e.x, "options.x", ["number"]), ci(e.y, "options.y", ["number"]), ci(e.scale, "options.scale", ["number"]), ci(e.borderWidth, "options.borderWidth", ["number"]), ci(e.color, "options.color", [[Object, "Color"]]), ci(e.borderColor, "options.borderColor", [[Object, "Color"]]);
      var s = this.getContentStream();
      "color" in e || "borderColor" in e || (e.borderColor = Ps(0, 0, 0)), s.push.apply(s, nu(t, {
        x: (n = e.x, null != n ? n : this.x),
        y: (r = e.y, null != r ? r : this.y),
        scale: e.scale,
        color: (i = e.color, null != i ? i : void 0),
        borderColor: (o = e.borderColor, null != o ? o : void 0),
        borderWidth: (a = e.borderWidth, null != a ? a : 0)
      }));
    }, e.prototype.drawLine = function (t) {
      var e, n;
      hi(t.start, "options.start", [[Object, "{ x: number, y: number }"]]), hi(t.end, "options.end", [[Object, "{ x: number, y: number }"]]), hi(t.start.x, "options.start.x", ["number"]), hi(t.start.y, "options.start.y", ["number"]), hi(t.end.x, "options.end.x", ["number"]), hi(t.end.y, "options.end.y", ["number"]), ci(t.thickness, "options.thickness", ["number"]), ci(t.color, "options.color", [[Object, "Color"]]);
      var r = this.getContentStream();
      "color" in t || (t.color = Ps(0, 0, 0)), r.push.apply(r, Qs({
        start: t.start,
        end: t.end,
        thickness: (e = t.thickness, null != e ? e : 1),
        color: (n = t.color, null != n ? n : void 0)
      }));
    }, e.prototype.drawRectangle = function (t) {
      var e, n, r, i, o, a, s, u, h, c;
      void 0 === t && (t = {}), ci(t.x, "options.x", ["number"]), ci(t.y, "options.y", ["number"]), ci(t.width, "options.width", ["number"]), ci(t.height, "options.height", ["number"]), ci(t.rotate, "options.rotate", [[Object, "Rotation"]]), ci(t.xSkew, "options.xSkew", [[Object, "Rotation"]]), ci(t.ySkew, "options.ySkew", [[Object, "Rotation"]]), ci(t.borderWidth, "options.borderWidth", ["number"]), ci(t.color, "options.color", [[Object, "Color"]]), ci(t.borderColor, "options.borderColor", [[Object, "Color"]]);
      var f = this.getContentStream();
      "color" in t || "borderColor" in t || (t.color = Ps(0, 0, 0)), f.push.apply(f, _s({
        x: (e = t.x, null != e ? e : this.x),
        y: (n = t.y, null != n ? n : this.y),
        width: (r = t.width, null != r ? r : 150),
        height: (i = t.height, null != i ? i : 100),
        rotate: (o = t.rotate, null != o ? o : Ua(0)),
        xSkew: (a = t.xSkew, null != a ? a : Ua(0)),
        ySkew: (s = t.ySkew, null != s ? s : Ua(0)),
        borderWidth: (u = t.borderWidth, null != u ? u : 0),
        color: (h = t.color, null != h ? h : void 0),
        borderColor: (c = t.borderColor, null != c ? c : void 0)
      }));
    }, e.prototype.drawSquare = function (t) {
      void 0 === t && (t = {});
      var e = t.size;
      ci(e, "size", ["number"]), this.drawRectangle(_r2(_r2({}, t), {
        width: e,
        height: e
      }));
    }, e.prototype.drawEllipse = function (t) {
      var e, n, r, i, o, a, s;
      void 0 === t && (t = {}), ci(t.x, "options.x", ["number"]), ci(t.y, "options.y", ["number"]), ci(t.xScale, "options.xScale", ["number"]), ci(t.yScale, "options.yScale", ["number"]), ci(t.color, "options.color", [[Object, "Color"]]), ci(t.borderColor, "options.borderColor", [[Object, "Color"]]), ci(t.borderWidth, "options.borderWidth", ["number"]);
      var u = this.getContentStream();
      "color" in t || "borderColor" in t || (t.color = Ps(0, 0, 0)), u.push.apply(u, eu({
        x: (e = t.x, null != e ? e : this.x),
        y: (n = t.y, null != n ? n : this.y),
        xScale: (r = t.xScale, null != r ? r : 100),
        yScale: (i = t.yScale, null != i ? i : 100),
        color: (o = t.color, null != o ? o : void 0),
        borderColor: (a = t.borderColor, null != a ? a : void 0),
        borderWidth: (s = t.borderWidth, null != s ? s : 0)
      }));
    }, e.prototype.drawCircle = function (t) {
      void 0 === t && (t = {});
      var e = t.size;
      ci(e, "size", ["number"]), this.drawEllipse(_r2(_r2({}, t), {
        xScale: e,
        yScale: e
      }));
    }, e.prototype.getFont = function () {
      if (!this.font || !this.fontKey) {
        var e = this.doc.embedStandardFont(t.StandardFonts.Helvetica);
        this.setFont(e);
      }

      return [this.font, this.fontKey];
    }, e.prototype.getContentStream = function (t) {
      return void 0 === t && (t = !0), t && this.contentStream ? this.contentStream : (this.contentStream = this.createContentStream(), this.contentStreamRef = this.doc.context.register(this.contentStream), this.node.addContentStream(this.contentStreamRef), this.contentStream);
    }, e.prototype.createContentStream = function () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];

      var n = this.doc.context.obj({}),
          r = so.of(n, t);
      return r;
    }, e.of = function (t, n, r) {
      return new e(t, n, r);
    }, e.create = function (t) {
      hi(t, "doc", [[hu, "PDFDocument"]]);
      var n = no.of(-1),
          r = co.withContextAndParent(t.context, n);
      return new e(r, t.context.register(r), t);
    }, e;
  }();

  (iu = t.ParseSpeeds || (t.ParseSpeeds = {}))[iu.Fastest = 1 / 0] = "Fastest", iu[iu.Fast = 1500] = "Fast", iu[iu.Medium = 500] = "Medium", iu[iu.Slow = 100] = "Slow";

  var hu = function () {
    function e(t, e) {
      var n = this;
      if (this.defaultWordBreaks = [" "], this.computePages = function () {
        var t = [];
        return n.catalog.Pages().traverse(function (e, r) {
          if (e instanceof co) {
            var i = n.pageMap.get(e);
            i || (i = uu.of(e, r, n), n.pageMap.set(e, i)), t.push(i);
          }
        }), t;
      }, hi(t, "context", [[ho, "PDFContext"]]), hi(e, "ignoreEncryption", ["boolean"]), this.context = t, this.catalog = t.lookup(t.trailerInfo.Root), this.isEncrypted = !!t.lookup(t.trailerInfo.Encrypt), this.pageCache = pi.populatedBy(this.computePages), this.pageMap = new Map(), this.fonts = [], this.images = [], this.embeddedPages = [], !e && this.isEncrypted) throw new Ns();
      this.updateInfoDict();
    }

    return e.load = function (n, r) {
      return void 0 === r && (r = {}), i(this, void 0, void 0, function () {
        var i, a, s, u, h, c, f;
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              return i = r.ignoreEncryption, a = void 0 !== i && i, s = r.parseSpeed, u = void 0 === s ? t.ParseSpeeds.Slow : s, h = r.throwOnInvalidObject, c = void 0 !== h && h, hi(n, "pdf", ["string", Uint8Array, ArrayBuffer]), hi(a, "ignoreEncryption", ["boolean"]), hi(u, "parseSpeed", ["number"]), hi(c, "throwOnInvalidObject", ["boolean"]), f = D(n), [4, Oa.forBytesWithOptions(f, u, c).parseDocument()];

            case 1:
              return [2, new e(o.sent(), a)];
          }
        });
      });
    }, e.create = function () {
      return i(this, void 0, void 0, function () {
        var t, n, r, i;
        return o(this, function (o) {
          return t = ho.create(), n = ha.withContext(t), r = t.register(n), i = ua.withContextAndPages(t, r), t.trailerInfo.Root = t.register(i), [2, new e(t, !1)];
        });
      });
    }, e.prototype.registerFontkit = function (t) {
      this.fontkit = t;
    }, e.prototype.setTitle = function (t) {
      hi(t, "title", ["string"]);
      var e = Yi.of("Title");
      this.getInfoDict().set(e, So.fromText(t));
    }, e.prototype.setAuthor = function (t) {
      hi(t, "author", ["string"]);
      var e = Yi.of("Author");
      this.getInfoDict().set(e, So.fromText(t));
    }, e.prototype.setSubject = function (t) {
      hi(t, "author", ["string"]);
      var e = Yi.of("Subject");
      this.getInfoDict().set(e, So.fromText(t));
    }, e.prototype.setKeywords = function (t) {
      hi(t, "keywords", [Array]);
      var e = Yi.of("Keywords");
      this.getInfoDict().set(e, So.fromText(t.join(" ")));
    }, e.prototype.setCreator = function (t) {
      hi(t, "creator", ["string"]);
      var e = Yi.of("Creator");
      this.getInfoDict().set(e, So.fromText(t));
    }, e.prototype.setProducer = function (t) {
      hi(t, "creator", ["string"]);
      var e = Yi.of("Producer");
      this.getInfoDict().set(e, So.fromText(t));
    }, e.prototype.setLanguage = function (t) {
      hi(t, "language", ["string"]);
      var e = Yi.of("Lang");
      this.catalog.set(e, Oo.of(t));
    }, e.prototype.setCreationDate = function (t) {
      hi(t, "creationDate", [[Date, "Date"]]);
      var e = Yi.of("CreationDate");
      this.getInfoDict().set(e, Oo.fromDate(t));
    }, e.prototype.setModificationDate = function (t) {
      hi(t, "modificationDate", [[Date, "Date"]]);
      var e = Yi.of("ModDate");
      this.getInfoDict().set(e, Oo.fromDate(t));
    }, e.prototype.getPageCount = function () {
      return void 0 === this.pageCount && (this.pageCount = this.getPages().length), this.pageCount;
    }, e.prototype.getPages = function () {
      return this.pageCache.access();
    }, e.prototype.getPageIndices = function () {
      return q(0, this.getPageCount());
    }, e.prototype.removePage = function (t) {
      var e = this.getPageCount();
      if (0 === this.pageCount) throw new qs();
      li(t, "index", 0, e - 1), this.catalog.removeLeafNode(t), this.pageCount = e - 1;
    }, e.prototype.addPage = function (t) {
      return hi(t, "page", ["undefined", [uu, "PDFPage"], Array]), this.insertPage(this.getPageCount(), t);
    }, e.prototype.insertPage = function (t, e) {
      var n = this.getPageCount();

      if (li(t, "index", 0, n), hi(e, "page", ["undefined", [uu, "PDFPage"], Array]), !e || Array.isArray(e)) {
        var r = Array.isArray(e) ? e : ru.A4;
        (e = uu.create(this)).setSize.apply(e, r);
      } else if (e.doc !== this) throw new Is();

      var i = this.catalog.insertLeafNode(e.ref, t);
      return e.node.setParent(i), this.pageMap.set(e.node, e), this.pageCache.invalidate(), this.pageCount = n + 1, e;
    }, e.prototype.copyPages = function (t, n) {
      return i(this, void 0, void 0, function () {
        var r, i, a, s, u, h, c, f;
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              return hi(t, "srcDoc", [[e, "PDFDocument"]]), hi(n, "indices", [Array]), [4, t.flush()];

            case 1:
              for (o.sent(), r = fo.for(t.context, this.context), i = t.getPages(), a = new Array(n.length), s = 0, u = n.length; s < u; s++) h = i[n[s]], c = r.copy(h.node), f = this.context.register(c), a[s] = uu.of(c, f, this);

              return [2, a];
          }
        });
      });
    }, e.prototype.embedFont = function (t, e) {
      return void 0 === e && (e = {}), i(this, void 0, void 0, function () {
        var n, r, i, a, s, u, h, c;
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              return n = e.subset, r = void 0 !== n && n, hi(t, "font", ["string", Uint8Array, ArrayBuffer]), hi(r, "subset", ["boolean"]), ii(t) ? (i = ko.for(t), [3, 7]) : [3, 1];

            case 1:
              return B(t) ? (a = D(t), s = this.assertFontkit(), r ? [4, jo.for(s, a)] : [3, 3]) : [3, 6];

            case 2:
              return u = o.sent(), [3, 5];

            case 3:
              return [4, To.for(s, a)];

            case 4:
              u = o.sent(), o.label = 5;

            case 5:
              return i = u, [3, 7];

            case 6:
              throw new TypeError("`font` must be one of `StandardFonts | string | Uint8Array | ArrayBuffer`");

            case 7:
              return h = this.context.nextRef(), c = au.of(h, this, i), this.fonts.push(c), [2, c];
          }
        });
      });
    }, e.prototype.embedStandardFont = function (t) {
      if (hi(t, "font", ["string"]), !ii(t)) throw new TypeError("`font` must be one of type `StandardFontsr`");
      var e = ko.for(t),
          n = this.context.nextRef(),
          r = au.of(n, this, e);
      return this.fonts.push(r), r;
    }, e.prototype.embedJpg = function (t) {
      return i(this, void 0, void 0, function () {
        var e, n, r, i;
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              return hi(t, "jpg", ["string", Uint8Array, ArrayBuffer]), e = D(t), [4, Vo.for(e)];

            case 1:
              return n = o.sent(), r = this.context.nextRef(), i = su.of(r, this, n), this.images.push(i), [2, i];
          }
        });
      });
    }, e.prototype.embedPng = function (t) {
      return i(this, void 0, void 0, function () {
        var e, n, r, i;
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              return hi(t, "png", ["string", Uint8Array, ArrayBuffer]), e = D(t), [4, Go.for(e)];

            case 1:
              return n = o.sent(), r = this.context.nextRef(), i = su.of(r, this, n), this.images.push(i), [2, i];
          }
        });
      });
    }, e.prototype.embedPdf = function (t, n) {
      return void 0 === n && (n = [0]), i(this, void 0, void 0, function () {
        var r, i;
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              return hi(t, "pdf", ["string", Uint8Array, ArrayBuffer, [e, "PDFDocument"]]), hi(n, "indices", [Array]), t instanceof e ? (r = t, [3, 3]) : [3, 1];

            case 1:
              return [4, e.load(t)];

            case 2:
              r = o.sent(), o.label = 3;

            case 3:
              return i = V(r.getPages(), n), [2, this.embedPages(i)];
          }
        });
      });
    }, e.prototype.embedPage = function (t, e, n) {
      return i(this, void 0, void 0, function () {
        return o(this, function (r) {
          switch (r.label) {
            case 0:
              return hi(t, "page", [[uu, "PDFPage"]]), [4, this.embedPages([t], [e], [n])];

            case 1:
              return [2, r.sent()[0]];
          }
        });
      });
    }, e.prototype.embedPages = function (t, e, n) {
      return void 0 === e && (e = []), void 0 === n && (n = []), i(this, void 0, void 0, function () {
        var r, i, a, s, u, h, c, f, l, d, p, y, g;
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              if (0 === t.length) return [2, []];

              for (h = 0, c = t.length - 1; h < c; h++) if (r = t[h], i = t[h + 1], r.node.context !== i.node.context) throw new ki();

              a = t[0].node.context, s = a === this.context ? function (t) {
                return t;
              } : fo.for(a, this.context).copy, u = new Array(t.length), h = 0, c = t.length, o.label = 1;

            case 1:
              return h < c ? (f = s(t[h].node), l = e[h], d = n[h], [4, sa.for(f, l, d)]) : [3, 4];

            case 2:
              p = o.sent(), y = this.context.nextRef(), u[h] = ou.of(y, this, p), o.label = 3;

            case 3:
              return h++, [3, 1];

            case 4:
              return (g = this.embeddedPages).push.apply(g, u), [2, u];
          }
        });
      });
    }, e.prototype.flush = function () {
      return i(this, void 0, void 0, function () {
        return o(this, function (t) {
          switch (t.label) {
            case 0:
              return [4, this.embedAll(this.fonts)];

            case 1:
              return t.sent(), [4, this.embedAll(this.images)];

            case 2:
              return t.sent(), [4, this.embedAll(this.embeddedPages)];

            case 3:
              return t.sent(), [2];
          }
        });
      });
    }, e.prototype.save = function (t) {
      return void 0 === t && (t = {}), i(this, void 0, void 0, function () {
        var e, n, r, i, a, s;
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              return e = t.useObjectStreams, n = void 0 === e || e, r = t.addDefaultPage, i = void 0 === r || r, a = t.objectsPerTick, s = void 0 === a ? 50 : a, hi(n, "useObjectStreams", ["boolean"]), hi(i, "addDefaultPage", ["boolean"]), hi(s, "objectsPerTick", ["number"]), i && 0 === this.getPageCount() && this.addPage(), [4, this.flush()];

            case 1:
              return o.sent(), [2, (n ? xo : vo).forContext(this.context, s).serializeToBuffer()];
          }
        });
      });
    }, e.prototype.saveAsBase64 = function (t) {
      return void 0 === t && (t = {}), i(this, void 0, void 0, function () {
        var e, n, r, i, a;
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              return e = t.dataUri, n = void 0 !== e && e, r = function (t, e) {
                var n = {};

                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);

                if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                  var i = 0;

                  for (r = Object.getOwnPropertySymbols(t); i < r.length; i++) e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
                }

                return n;
              }(t, ["dataUri"]), hi(n, "dataUri", ["boolean"]), [4, this.save(r)];

            case 1:
              return i = o.sent(), a = c(i), [2, n ? "data:application/pdf;base64," + a : a];
          }
        });
      });
    }, e.prototype.embedAll = function (t) {
      return i(this, void 0, void 0, function () {
        var e, n;
        return o(this, function (r) {
          switch (r.label) {
            case 0:
              e = 0, n = t.length, r.label = 1;

            case 1:
              return e < n ? [4, t[e].embed()] : [3, 4];

            case 2:
              r.sent(), r.label = 3;

            case 3:
              return e++, [3, 1];

            case 4:
              return [2];
          }
        });
      });
    }, e.prototype.updateInfoDict = function () {
      var t = "pdf-lib (https://github.com/Hopding/pdf-lib)",
          e = new Date(),
          n = this.getInfoDict();
      this.setProducer(t), this.setModificationDate(e), n.get(Yi.of("Creator")) || this.setCreator(t), n.get(Yi.of("CreationDate")) || this.setCreationDate(e);
    }, e.prototype.getInfoDict = function () {
      var t = this.context.lookup(this.context.trailerInfo.Info);
      if (t instanceof Ei) return t;
      var e = this.context.obj({});
      return this.context.trailerInfo.Info = this.context.register(e), e;
    }, e.prototype.assertFontkit = function () {
      if (!this.fontkit) throw new Us();
      return this.fontkit;
    }, e;
  }();

  t.Cache = pi, t.CharCodes = Ii, t.CustomFontEmbedder = To, t.CustomFontSubsetEmbedder = jo, t.EncryptedPDFError = Ns, t.FontkitNotRegisteredError = Us, t.ForeignPageError = Is, t.JpegEmbedder = Vo, t.MethodNotImplementedError = yi, t.MissingCatalogError = wi, t.MissingKeywordError = Ui, t.MissingPDFHeaderError = Ni, t.MissingPageContentsEmbeddingError = xi, t.NextByteAssertionError = Pi, t.NumberParsingError = Ci, t.PDFArray = Bi, t.PDFBool = Mi, t.PDFCatalog = ua, t.PDFContentStream = so, t.PDFContext = ho, t.PDFCrossRefSection = lo, t.PDFCrossRefStream = wo, t.PDFDict = Ei, t.PDFDocument = hu, t.PDFEmbeddedPage = ou, t.PDFFlateStream = ao, t.PDFFont = au, t.PDFHeader = qi, t.PDFHexString = So, t.PDFImage = su, t.PDFInvalidObject = mo, t.PDFInvalidObjectParsingError = Oi, t.PDFName = Yi, t.PDFNull = Ji, t.PDFNumber = Qi, t.PDFObject = Vi, t.PDFObjectCopier = fo, t.PDFObjectParser = Fa, t.PDFObjectParsingError = Ri, t.PDFObjectStream = go, t.PDFObjectStreamParser = Pa, t.PDFOperator = ro, t.PDFOperatorNames = oo, t.PDFPage = uu, t.PDFPageEmbedder = sa, t.PDFPageLeaf = co, t.PDFPageTree = ha, t.PDFParser = Oa, t.PDFParsingError = Fi, t.PDFRawStream = $i, t.PDFRef = no, t.PDFStream = _i, t.PDFStreamParsingError = Ti, t.PDFStreamWriter = xo, t.PDFString = Oo, t.PDFTrailer = po, t.PDFTrailerDict = yo, t.PDFWriter = vo, t.PDFXRefStreamParser = Ra, t.PageEmbeddingMismatchedContextError = ki, t.PageSizes = ru, t.PngEmbedder = Go, t.PrivateConstructorError = gi, t.RemovePageFromEmptyDocumentError = qs, t.ReparseError = bi, t.StalledParserError = zi, t.StandardFontEmbedder = ko, t.StandardFontValues = ri, t.UnbalancedParenthesisError = ji, t.UnexpectedObjectTypeError = vi, t.UnrecognizedStreamTypeError = Si, t.UnsupportedEncodingError = mi, t.addRandomSuffix = S, t.appendBezierCurve = ts, t.appendQuadraticCurve = es, t.arrayAsString = j, t.asNumber = za, t.asPDFName = Ta, t.asPDFNumber = ja, t.assertEachIs = fi, t.assertIs = hi, t.assertMultiple = di, t.assertOrUndefined = ci, t.assertRange = li, t.backtick = oi, t.beginText = fs, t.breakTextIntoLines = F, t.byAscendingId = z, t.bytesFor = L, t.canBeConvertedToUint8Array = B, t.charFromCode = m, t.charFromHexCode = b, t.cleanText = C, t.clip = function () {
    return ro.of(oo.ClipNonZero);
  }, t.clipEvenOdd = function () {
    return ro.of(oo.ClipEvenOdd);
  }, t.closePath = ns, t.cmyk = function (e, n, r, i) {
    return li(e, "cyan", 0, 1), li(n, "magenta", 0, 1), li(r, "yellow", 0, 1), li(i, "key", 0, 1), {
      type: t.ColorTypes.CMYK,
      cyan: e,
      magenta: n,
      yellow: r,
      key: i
    };
  }, t.concatTransformationMatrix = Ka, t.copyStringIntoBuffer = x, t.createTypeErrorMsg = ui, t.decodeFromBase64 = f, t.decodeFromBase64DataUri = d, t.decodePDFRawStream = ia, t.degrees = Ua, t.degreesToRadians = Va, t.drawEllipse = eu, t.drawEllipsePath = tu, t.drawImage = Ys, t.drawLine = Qs, t.drawLinesOfText = Zs, t.drawObject = ms, t.drawPage = Js, t.drawRectangle = _s, t.drawSvgPath = nu, t.drawText = function (t, e) {
    return [fs(), js(e.color), ds(e.font, e.size), vs(Da(e.rotate), Da(e.xSkew), Da(e.ySkew), e.x, e.y), cs(t), ls()];
  }, t.encodeToBase64 = c, t.endPath = function () {
    return ro.of(oo.EndPath);
  }, t.endText = ls, t.error = Z, t.escapeRegExp = k, t.fill = ss, t.fillAndStroke = us, t.getType = ai, t.grayscale = function (e) {
    return li(e, "gray", 0, 1), {
      type: t.ColorTypes.Grayscale,
      gray: e
    };
  }, t.hasSurrogates = G, t.highSurrogate = K, t.isStandardFont = ii, t.isType = si, t.isWithinBMP = A, t.last = P, t.lineTo = is, t.lowSurrogate = W, t.mergeIntoTypedArray = O, t.mergeUint8Arrays = T, t.moveText = function (t, e) {
    return ro.of(oo.MoveText, [ja(t), ja(e)]);
  }, t.moveTo = rs, t.nextLine = hs, t.numberToString = X, t.padStart = w, t.pluckIndices = V, t.popGraphicsState = _a, t.pushGraphicsState = Qa, t.radians = function (e) {
    return hi(e, "radianAngle", ["number"]), {
      type: t.RotationTypes.Radians,
      angle: e
    };
  }, t.radiansToDegrees = Ba, t.range = q, t.rectangle = os, t.restoreDashPattern = function () {
    return Za([], 0);
  }, t.reverseArray = U, t.rgb = Ps, t.rotateAndSkewTextDegreesAndTranslate = function (t, e, n, r, i) {
    return vs(Va(za(t)), Va(za(e)), Va(za(n)), r, i);
  }, t.rotateAndSkewTextRadiansAndTranslate = vs, t.rotateDegrees = function (t) {
    return Ha(Va(za(t)));
  }, t.rotateRadians = Ha, t.scale = Xa, t.setCharacterSpacing = function (t) {
    return ro.of(oo.SetCharacterSpacing, [ja(t)]);
  }, t.setCharacterSqueeze = function (t) {
    return ro.of(oo.SetTextHorizontalScaling, [ja(t)]);
  }, t.setDashPattern = Za, t.setFillingCmykColor = ks, t.setFillingColor = js, t.setFillingGrayscaleColor = bs, t.setFillingRgbColor = xs, t.setFontAndSize = ds, t.setLineCap = function (t) {
    return ro.of(oo.SetLineCapStyle, [ja(t)]);
  }, t.setLineHeight = ps, t.setLineJoin = function (t) {
    return ro.of(oo.SetLineJoinStyle, [ja(t)]);
  }, t.setLineWidth = $a, t.setStrokingCmykColor = Cs, t.setStrokingColor = zs, t.setStrokingGrayscaleColor = ws, t.setStrokingRgbColor = Ss, t.setTextMatrix = gs, t.setTextRenderingMode = function (t) {
    return ro.of(oo.SetTextRenderingMode, [ja(t)]);
  }, t.setTextRise = function (t) {
    return ro.of(oo.SetTextRise, [ja(t)]);
  }, t.setWordSpacing = function (t) {
    return ro.of(oo.SetWordSpacing, [ja(t)]);
  }, t.showText = cs, t.sizeInBytes = H, t.skewDegrees = function (t, e) {
    return La(Va(za(t)), Va(za(e)));
  }, t.skewRadians = La, t.sortedUniq = N, t.square = function (t, e, n) {
    return os(t, e, n, n);
  }, t.stroke = as, t.sum = I, t.toCharCode = p, t.toCodePoint = y, t.toDegrees = Ma, t.toHexString = v, t.toHexStringOfMinLength = g, t.toRadians = Da, t.toUint8Array = D, t.translate = Wa, t.typedArrayFor = R, t.utf16Encode = E, t.utf8Encode = function (t, e) {
    void 0 === e && (e = !0);
    var n = [];
    e && n.push(239, 187, 191);

    for (var r = 0, i = t.length; r < i;) {
      var o = t.codePointAt(r);

      if (o < 128) {
        var a = 127 & o;
        n.push(a), r += 1;
      } else if (o < 2048) {
        a = o >> 6 & 31 | 192;
        var s = 63 & o | 128;
        n.push(a, s), r += 1;
      } else if (o < 65536) {
        a = o >> 12 & 15 | 224, s = o >> 6 & 63 | 128;
        var u = 63 & o | 128;
        n.push(a, s, u), r += 1;
      } else {
        if (!(o < 1114112)) throw new Error("Invalid code point: 0x" + v(o));
        a = o >> 18 & 7 | 240, s = o >> 12 & 63 | 128, u = o >> 6 & 63 | 128;
        var h = o >> 0 & 63 | 128;
        n.push(a, s, u, h), r += 2;
      }
    }

    return new Uint8Array(n);
  }, t.values = ni, t.waitForTick = M, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});