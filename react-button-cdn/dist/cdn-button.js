(function () {
  const ul = document.createElement("link").relList;
  if (ul && ul.supports && ul.supports("modulepreload")) return;
  for (const q of document.querySelectorAll('link[rel="modulepreload"]')) h(q);
  new MutationObserver((q) => {
    for (const W of q)
      if (W.type === "childList")
        for (const al of W.addedNodes)
          al.tagName === "LINK" && al.rel === "modulepreload" && h(al);
  }).observe(document, { childList: !0, subtree: !0 });
  function x(q) {
    const W = {};
    return (
      q.integrity && (W.integrity = q.integrity),
      q.referrerPolicy && (W.referrerPolicy = q.referrerPolicy),
      q.crossOrigin === "use-credentials"
        ? (W.credentials = "include")
        : q.crossOrigin === "anonymous"
        ? (W.credentials = "omit")
        : (W.credentials = "same-origin"),
      W
    );
  }
  function h(q) {
    if (q.ep) return;
    q.ep = !0;
    const W = x(q);
    fetch(q.href, W);
  }
})();
var Wc = { exports: {} },
  Ee = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xd;
function mh() {
  if (Xd) return Ee;
  Xd = 1;
  var A = Symbol.for("react.transitional.element"),
    ul = Symbol.for("react.fragment");
  function x(h, q, W) {
    var al = null;
    if (
      (W !== void 0 && (al = "" + W),
      q.key !== void 0 && (al = "" + q.key),
      "key" in q)
    ) {
      W = {};
      for (var ml in q) ml !== "key" && (W[ml] = q[ml]);
    } else W = q;
    return (
      (q = W.ref),
      { $$typeof: A, type: h, key: al, ref: q !== void 0 ? q : null, props: W }
    );
  }
  return (Ee.Fragment = ul), (Ee.jsx = x), (Ee.jsxs = x), Ee;
}
var Qd;
function rh() {
  return Qd || ((Qd = 1), (Wc.exports = mh())), Wc.exports;
}
var gt = rh(),
  $c = { exports: {} },
  X = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cd;
function gh() {
  if (Cd) return X;
  Cd = 1;
  var A = Symbol.for("react.transitional.element"),
    ul = Symbol.for("react.portal"),
    x = Symbol.for("react.fragment"),
    h = Symbol.for("react.strict_mode"),
    q = Symbol.for("react.profiler"),
    W = Symbol.for("react.consumer"),
    al = Symbol.for("react.context"),
    ml = Symbol.for("react.forward_ref"),
    M = Symbol.for("react.suspense"),
    E = Symbol.for("react.memo"),
    $ = Symbol.for("react.lazy"),
    cl = Symbol.iterator;
  function il(s) {
    return s === null || typeof s != "object"
      ? null
      : ((s = (cl && s[cl]) || s["@@iterator"]),
        typeof s == "function" ? s : null);
  }
  var gl = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Ql = Object.assign,
    Pl = {};
  function Ll(s, T, p) {
    (this.props = s),
      (this.context = T),
      (this.refs = Pl),
      (this.updater = p || gl);
  }
  (Ll.prototype.isReactComponent = {}),
    (Ll.prototype.setState = function (s, T) {
      if (typeof s != "object" && typeof s != "function" && s != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, s, T, "setState");
    }),
    (Ll.prototype.forceUpdate = function (s) {
      this.updater.enqueueForceUpdate(this, s, "forceUpdate");
    });
  function Dt() {}
  Dt.prototype = Ll.prototype;
  function Bl(s, T, p) {
    (this.props = s),
      (this.context = T),
      (this.refs = Pl),
      (this.updater = p || gl);
  }
  var yt = (Bl.prototype = new Dt());
  (yt.constructor = Bl), Ql(yt, Ll.prototype), (yt.isPureReactComponent = !0);
  var Jt = Array.isArray,
    k = { H: null, A: null, T: null, S: null },
    Cl = Object.prototype.hasOwnProperty;
  function wt(s, T, p, R, O, L) {
    return (
      (p = L.ref),
      { $$typeof: A, type: s, key: T, ref: p !== void 0 ? p : null, props: L }
    );
  }
  function Wt(s, T) {
    return wt(s.type, T, void 0, void 0, void 0, s.props);
  }
  function N(s) {
    return typeof s == "object" && s !== null && s.$$typeof === A;
  }
  function F(s) {
    var T = { "=": "=0", ":": "=2" };
    return (
      "$" +
      s.replace(/[=:]/g, function (p) {
        return T[p];
      })
    );
  }
  var Il = /\/+/g;
  function Mt(s, T) {
    return typeof s == "object" && s !== null && s.key != null
      ? F("" + s.key)
      : T.toString(36);
  }
  function St() {}
  function Ut(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (
          (typeof s.status == "string"
            ? s.then(St, St)
            : ((s.status = "pending"),
              s.then(
                function (T) {
                  s.status === "pending" &&
                    ((s.status = "fulfilled"), (s.value = T));
                },
                function (T) {
                  s.status === "pending" &&
                    ((s.status = "rejected"), (s.reason = T));
                }
              )),
          s.status)
        ) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function jl(s, T, p, R, O) {
    var L = typeof s;
    (L === "undefined" || L === "boolean") && (s = null);
    var Q = !1;
    if (s === null) Q = !0;
    else
      switch (L) {
        case "bigint":
        case "string":
        case "number":
          Q = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case A:
            case ul:
              Q = !0;
              break;
            case $:
              return (Q = s._init), jl(Q(s._payload), T, p, R, O);
          }
      }
    if (Q)
      return (
        (O = O(s)),
        (Q = R === "" ? "." + Mt(s, 0) : R),
        Jt(O)
          ? ((p = ""),
            Q != null && (p = Q.replace(Il, "$&/") + "/"),
            jl(O, T, p, "", function (Sl) {
              return Sl;
            }))
          : O != null &&
            (N(O) &&
              (O = Wt(
                O,
                p +
                  (O.key == null || (s && s.key === O.key)
                    ? ""
                    : ("" + O.key).replace(Il, "$&/") + "/") +
                  Q
              )),
            T.push(O)),
        1
      );
    Q = 0;
    var Yl = R === "" ? "." : R + ":";
    if (Jt(s))
      for (var P = 0; P < s.length; P++)
        (R = s[P]), (L = Yl + Mt(R, P)), (Q += jl(R, T, p, L, O));
    else if (((P = il(s)), typeof P == "function"))
      for (s = P.call(s), P = 0; !(R = s.next()).done; )
        (R = R.value), (L = Yl + Mt(R, P++)), (Q += jl(R, T, p, L, O));
    else if (L === "object") {
      if (typeof s.then == "function") return jl(Ut(s), T, p, R, O);
      throw (
        ((T = String(s)),
        Error(
          "Objects are not valid as a React child (found: " +
            (T === "[object Object]"
              ? "object with keys {" + Object.keys(s).join(", ") + "}"
              : T) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return Q;
  }
  function z(s, T, p) {
    if (s == null) return s;
    var R = [],
      O = 0;
    return (
      jl(s, R, "", "", function (L) {
        return T.call(p, L, O++);
      }),
      R
    );
  }
  function G(s) {
    if (s._status === -1) {
      var T = s._result;
      (T = T()),
        T.then(
          function (p) {
            (s._status === 0 || s._status === -1) &&
              ((s._status = 1), (s._result = p));
          },
          function (p) {
            (s._status === 0 || s._status === -1) &&
              ((s._status = 2), (s._result = p));
          }
        ),
        s._status === -1 && ((s._status = 0), (s._result = T));
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var B =
    typeof reportError == "function"
      ? reportError
      : function (s) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var T = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof s == "object" &&
                s !== null &&
                typeof s.message == "string"
                  ? String(s.message)
                  : String(s),
              error: s,
            });
            if (!window.dispatchEvent(T)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", s);
            return;
          }
          console.error(s);
        };
  function el() {}
  return (
    (X.Children = {
      map: z,
      forEach: function (s, T, p) {
        z(
          s,
          function () {
            T.apply(this, arguments);
          },
          p
        );
      },
      count: function (s) {
        var T = 0;
        return (
          z(s, function () {
            T++;
          }),
          T
        );
      },
      toArray: function (s) {
        return (
          z(s, function (T) {
            return T;
          }) || []
        );
      },
      only: function (s) {
        if (!N(s))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return s;
      },
    }),
    (X.Component = Ll),
    (X.Fragment = x),
    (X.Profiler = q),
    (X.PureComponent = Bl),
    (X.StrictMode = h),
    (X.Suspense = M),
    (X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k),
    (X.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (X.cache = function (s) {
      return function () {
        return s.apply(null, arguments);
      };
    }),
    (X.cloneElement = function (s, T, p) {
      if (s == null)
        throw Error(
          "The argument must be a React element, but you passed " + s + "."
        );
      var R = Ql({}, s.props),
        O = s.key,
        L = void 0;
      if (T != null)
        for (Q in (T.ref !== void 0 && (L = void 0),
        T.key !== void 0 && (O = "" + T.key),
        T))
          !Cl.call(T, Q) ||
            Q === "key" ||
            Q === "__self" ||
            Q === "__source" ||
            (Q === "ref" && T.ref === void 0) ||
            (R[Q] = T[Q]);
      var Q = arguments.length - 2;
      if (Q === 1) R.children = p;
      else if (1 < Q) {
        for (var Yl = Array(Q), P = 0; P < Q; P++) Yl[P] = arguments[P + 2];
        R.children = Yl;
      }
      return wt(s.type, O, void 0, void 0, L, R);
    }),
    (X.createContext = function (s) {
      return (
        (s = {
          $$typeof: al,
          _currentValue: s,
          _currentValue2: s,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (s.Provider = s),
        (s.Consumer = { $$typeof: W, _context: s }),
        s
      );
    }),
    (X.createElement = function (s, T, p) {
      var R,
        O = {},
        L = null;
      if (T != null)
        for (R in (T.key !== void 0 && (L = "" + T.key), T))
          Cl.call(T, R) &&
            R !== "key" &&
            R !== "__self" &&
            R !== "__source" &&
            (O[R] = T[R]);
      var Q = arguments.length - 2;
      if (Q === 1) O.children = p;
      else if (1 < Q) {
        for (var Yl = Array(Q), P = 0; P < Q; P++) Yl[P] = arguments[P + 2];
        O.children = Yl;
      }
      if (s && s.defaultProps)
        for (R in ((Q = s.defaultProps), Q)) O[R] === void 0 && (O[R] = Q[R]);
      return wt(s, L, void 0, void 0, null, O);
    }),
    (X.createRef = function () {
      return { current: null };
    }),
    (X.forwardRef = function (s) {
      return { $$typeof: ml, render: s };
    }),
    (X.isValidElement = N),
    (X.lazy = function (s) {
      return { $$typeof: $, _payload: { _status: -1, _result: s }, _init: G };
    }),
    (X.memo = function (s, T) {
      return { $$typeof: E, type: s, compare: T === void 0 ? null : T };
    }),
    (X.startTransition = function (s) {
      var T = k.T,
        p = {};
      k.T = p;
      try {
        var R = s(),
          O = k.S;
        O !== null && O(p, R),
          typeof R == "object" &&
            R !== null &&
            typeof R.then == "function" &&
            R.then(el, B);
      } catch (L) {
        B(L);
      } finally {
        k.T = T;
      }
    }),
    (X.unstable_useCacheRefresh = function () {
      return k.H.useCacheRefresh();
    }),
    (X.use = function (s) {
      return k.H.use(s);
    }),
    (X.useActionState = function (s, T, p) {
      return k.H.useActionState(s, T, p);
    }),
    (X.useCallback = function (s, T) {
      return k.H.useCallback(s, T);
    }),
    (X.useContext = function (s) {
      return k.H.useContext(s);
    }),
    (X.useDebugValue = function () {}),
    (X.useDeferredValue = function (s, T) {
      return k.H.useDeferredValue(s, T);
    }),
    (X.useEffect = function (s, T) {
      return k.H.useEffect(s, T);
    }),
    (X.useId = function () {
      return k.H.useId();
    }),
    (X.useImperativeHandle = function (s, T, p) {
      return k.H.useImperativeHandle(s, T, p);
    }),
    (X.useInsertionEffect = function (s, T) {
      return k.H.useInsertionEffect(s, T);
    }),
    (X.useLayoutEffect = function (s, T) {
      return k.H.useLayoutEffect(s, T);
    }),
    (X.useMemo = function (s, T) {
      return k.H.useMemo(s, T);
    }),
    (X.useOptimistic = function (s, T) {
      return k.H.useOptimistic(s, T);
    }),
    (X.useReducer = function (s, T, p) {
      return k.H.useReducer(s, T, p);
    }),
    (X.useRef = function (s) {
      return k.H.useRef(s);
    }),
    (X.useState = function (s) {
      return k.H.useState(s);
    }),
    (X.useSyncExternalStore = function (s, T, p) {
      return k.H.useSyncExternalStore(s, T, p);
    }),
    (X.useTransition = function () {
      return k.H.useTransition();
    }),
    (X.version = "19.0.0"),
    X
  );
}
var jd;
function li() {
  return jd || ((jd = 1), ($c.exports = gh())), $c.exports;
}
var ze = li(),
  kc = { exports: {} },
  Te = {},
  Fc = { exports: {} },
  Pc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zd;
function Sh() {
  return (
    Zd ||
      ((Zd = 1),
      (function (A) {
        function ul(z, G) {
          var B = z.length;
          z.push(G);
          l: for (; 0 < B; ) {
            var el = (B - 1) >>> 1,
              s = z[el];
            if (0 < q(s, G)) (z[el] = G), (z[B] = s), (B = el);
            else break l;
          }
        }
        function x(z) {
          return z.length === 0 ? null : z[0];
        }
        function h(z) {
          if (z.length === 0) return null;
          var G = z[0],
            B = z.pop();
          if (B !== G) {
            z[0] = B;
            l: for (var el = 0, s = z.length, T = s >>> 1; el < T; ) {
              var p = 2 * (el + 1) - 1,
                R = z[p],
                O = p + 1,
                L = z[O];
              if (0 > q(R, B))
                O < s && 0 > q(L, R)
                  ? ((z[el] = L), (z[O] = B), (el = O))
                  : ((z[el] = R), (z[p] = B), (el = p));
              else if (O < s && 0 > q(L, B)) (z[el] = L), (z[O] = B), (el = O);
              else break l;
            }
          }
          return G;
        }
        function q(z, G) {
          var B = z.sortIndex - G.sortIndex;
          return B !== 0 ? B : z.id - G.id;
        }
        if (
          ((A.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var W = performance;
          A.unstable_now = function () {
            return W.now();
          };
        } else {
          var al = Date,
            ml = al.now();
          A.unstable_now = function () {
            return al.now() - ml;
          };
        }
        var M = [],
          E = [],
          $ = 1,
          cl = null,
          il = 3,
          gl = !1,
          Ql = !1,
          Pl = !1,
          Ll = typeof setTimeout == "function" ? setTimeout : null,
          Dt = typeof clearTimeout == "function" ? clearTimeout : null,
          Bl = typeof setImmediate < "u" ? setImmediate : null;
        function yt(z) {
          for (var G = x(E); G !== null; ) {
            if (G.callback === null) h(E);
            else if (G.startTime <= z)
              h(E), (G.sortIndex = G.expirationTime), ul(M, G);
            else break;
            G = x(E);
          }
        }
        function Jt(z) {
          if (((Pl = !1), yt(z), !Ql))
            if (x(M) !== null) (Ql = !0), Ut();
            else {
              var G = x(E);
              G !== null && jl(Jt, G.startTime - z);
            }
        }
        var k = !1,
          Cl = -1,
          wt = 5,
          Wt = -1;
        function N() {
          return !(A.unstable_now() - Wt < wt);
        }
        function F() {
          if (k) {
            var z = A.unstable_now();
            Wt = z;
            var G = !0;
            try {
              l: {
                (Ql = !1), Pl && ((Pl = !1), Dt(Cl), (Cl = -1)), (gl = !0);
                var B = il;
                try {
                  t: {
                    for (
                      yt(z), cl = x(M);
                      cl !== null && !(cl.expirationTime > z && N());

                    ) {
                      var el = cl.callback;
                      if (typeof el == "function") {
                        (cl.callback = null), (il = cl.priorityLevel);
                        var s = el(cl.expirationTime <= z);
                        if (((z = A.unstable_now()), typeof s == "function")) {
                          (cl.callback = s), yt(z), (G = !0);
                          break t;
                        }
                        cl === x(M) && h(M), yt(z);
                      } else h(M);
                      cl = x(M);
                    }
                    if (cl !== null) G = !0;
                    else {
                      var T = x(E);
                      T !== null && jl(Jt, T.startTime - z), (G = !1);
                    }
                  }
                  break l;
                } finally {
                  (cl = null), (il = B), (gl = !1);
                }
                G = void 0;
              }
            } finally {
              G ? Il() : (k = !1);
            }
          }
        }
        var Il;
        if (typeof Bl == "function")
          Il = function () {
            Bl(F);
          };
        else if (typeof MessageChannel < "u") {
          var Mt = new MessageChannel(),
            St = Mt.port2;
          (Mt.port1.onmessage = F),
            (Il = function () {
              St.postMessage(null);
            });
        } else
          Il = function () {
            Ll(F, 0);
          };
        function Ut() {
          k || ((k = !0), Il());
        }
        function jl(z, G) {
          Cl = Ll(function () {
            z(A.unstable_now());
          }, G);
        }
        (A.unstable_IdlePriority = 5),
          (A.unstable_ImmediatePriority = 1),
          (A.unstable_LowPriority = 4),
          (A.unstable_NormalPriority = 3),
          (A.unstable_Profiling = null),
          (A.unstable_UserBlockingPriority = 2),
          (A.unstable_cancelCallback = function (z) {
            z.callback = null;
          }),
          (A.unstable_continueExecution = function () {
            Ql || gl || ((Ql = !0), Ut());
          }),
          (A.unstable_forceFrameRate = function (z) {
            0 > z || 125 < z
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (wt = 0 < z ? Math.floor(1e3 / z) : 5);
          }),
          (A.unstable_getCurrentPriorityLevel = function () {
            return il;
          }),
          (A.unstable_getFirstCallbackNode = function () {
            return x(M);
          }),
          (A.unstable_next = function (z) {
            switch (il) {
              case 1:
              case 2:
              case 3:
                var G = 3;
                break;
              default:
                G = il;
            }
            var B = il;
            il = G;
            try {
              return z();
            } finally {
              il = B;
            }
          }),
          (A.unstable_pauseExecution = function () {}),
          (A.unstable_requestPaint = function () {}),
          (A.unstable_runWithPriority = function (z, G) {
            switch (z) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                z = 3;
            }
            var B = il;
            il = z;
            try {
              return G();
            } finally {
              il = B;
            }
          }),
          (A.unstable_scheduleCallback = function (z, G, B) {
            var el = A.unstable_now();
            switch (
              (typeof B == "object" && B !== null
                ? ((B = B.delay),
                  (B = typeof B == "number" && 0 < B ? el + B : el))
                : (B = el),
              z)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (s = B + s),
              (z = {
                id: $++,
                callback: G,
                priorityLevel: z,
                startTime: B,
                expirationTime: s,
                sortIndex: -1,
              }),
              B > el
                ? ((z.sortIndex = B),
                  ul(E, z),
                  x(M) === null &&
                    z === x(E) &&
                    (Pl ? (Dt(Cl), (Cl = -1)) : (Pl = !0), jl(Jt, B - el)))
                : ((z.sortIndex = s), ul(M, z), Ql || gl || ((Ql = !0), Ut())),
              z
            );
          }),
          (A.unstable_shouldYield = N),
          (A.unstable_wrapCallback = function (z) {
            var G = il;
            return function () {
              var B = il;
              il = G;
              try {
                return z.apply(this, arguments);
              } finally {
                il = B;
              }
            };
          });
      })(Pc)),
    Pc
  );
}
var xd;
function bh() {
  return xd || ((xd = 1), (Fc.exports = Sh())), Fc.exports;
}
var Ic = { exports: {} },
  ql = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vd;
function Eh() {
  if (Vd) return ql;
  Vd = 1;
  var A = li();
  function ul(M) {
    var E = "https://react.dev/errors/" + M;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var $ = 2; $ < arguments.length; $++)
        E += "&args[]=" + encodeURIComponent(arguments[$]);
    }
    return (
      "Minified React error #" +
      M +
      "; visit " +
      E +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function x() {}
  var h = {
      d: {
        f: x,
        r: function () {
          throw Error(ul(522));
        },
        D: x,
        C: x,
        L: x,
        m: x,
        X: x,
        S: x,
        M: x,
      },
      p: 0,
      findDOMNode: null,
    },
    q = Symbol.for("react.portal");
  function W(M, E, $) {
    var cl =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: q,
      key: cl == null ? null : "" + cl,
      children: M,
      containerInfo: E,
      implementation: $,
    };
  }
  var al = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function ml(M, E) {
    if (M === "font") return "";
    if (typeof E == "string") return E === "use-credentials" ? E : "";
  }
  return (
    (ql.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h),
    (ql.createPortal = function (M, E) {
      var $ =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!E || (E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11))
        throw Error(ul(299));
      return W(M, E, null, $);
    }),
    (ql.flushSync = function (M) {
      var E = al.T,
        $ = h.p;
      try {
        if (((al.T = null), (h.p = 2), M)) return M();
      } finally {
        (al.T = E), (h.p = $), h.d.f();
      }
    }),
    (ql.preconnect = function (M, E) {
      typeof M == "string" &&
        (E
          ? ((E = E.crossOrigin),
            (E =
              typeof E == "string"
                ? E === "use-credentials"
                  ? E
                  : ""
                : void 0))
          : (E = null),
        h.d.C(M, E));
    }),
    (ql.prefetchDNS = function (M) {
      typeof M == "string" && h.d.D(M);
    }),
    (ql.preinit = function (M, E) {
      if (typeof M == "string" && E && typeof E.as == "string") {
        var $ = E.as,
          cl = ml($, E.crossOrigin),
          il = typeof E.integrity == "string" ? E.integrity : void 0,
          gl = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
        $ === "style"
          ? h.d.S(M, typeof E.precedence == "string" ? E.precedence : void 0, {
              crossOrigin: cl,
              integrity: il,
              fetchPriority: gl,
            })
          : $ === "script" &&
            h.d.X(M, {
              crossOrigin: cl,
              integrity: il,
              fetchPriority: gl,
              nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            });
      }
    }),
    (ql.preinitModule = function (M, E) {
      if (typeof M == "string")
        if (typeof E == "object" && E !== null) {
          if (E.as == null || E.as === "script") {
            var $ = ml(E.as, E.crossOrigin);
            h.d.M(M, {
              crossOrigin: $,
              integrity: typeof E.integrity == "string" ? E.integrity : void 0,
              nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            });
          }
        } else E == null && h.d.M(M);
    }),
    (ql.preload = function (M, E) {
      if (
        typeof M == "string" &&
        typeof E == "object" &&
        E !== null &&
        typeof E.as == "string"
      ) {
        var $ = E.as,
          cl = ml($, E.crossOrigin);
        h.d.L(M, $, {
          crossOrigin: cl,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          nonce: typeof E.nonce == "string" ? E.nonce : void 0,
          type: typeof E.type == "string" ? E.type : void 0,
          fetchPriority:
            typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
          referrerPolicy:
            typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
          imageSrcSet:
            typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
          imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
          media: typeof E.media == "string" ? E.media : void 0,
        });
      }
    }),
    (ql.preloadModule = function (M, E) {
      if (typeof M == "string")
        if (E) {
          var $ = ml(E.as, E.crossOrigin);
          h.d.m(M, {
            as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
            crossOrigin: $,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          });
        } else h.d.m(M);
    }),
    (ql.requestFormReset = function (M) {
      h.d.r(M);
    }),
    (ql.unstable_batchedUpdates = function (M, E) {
      return M(E);
    }),
    (ql.useFormState = function (M, E, $) {
      return al.H.useFormState(M, E, $);
    }),
    (ql.useFormStatus = function () {
      return al.H.useHostTransitionStatus();
    }),
    (ql.version = "19.0.0"),
    ql
  );
}
var Ld;
function Th() {
  if (Ld) return Ic.exports;
  Ld = 1;
  function A() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
      } catch (ul) {
        console.error(ul);
      }
  }
  return A(), (Ic.exports = Eh()), Ic.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kd;
function zh() {
  if (Kd) return Te;
  Kd = 1;
  var A = bh(),
    ul = li(),
    x = Th();
  function h(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function q(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  var W = Symbol.for("react.element"),
    al = Symbol.for("react.transitional.element"),
    ml = Symbol.for("react.portal"),
    M = Symbol.for("react.fragment"),
    E = Symbol.for("react.strict_mode"),
    $ = Symbol.for("react.profiler"),
    cl = Symbol.for("react.provider"),
    il = Symbol.for("react.consumer"),
    gl = Symbol.for("react.context"),
    Ql = Symbol.for("react.forward_ref"),
    Pl = Symbol.for("react.suspense"),
    Ll = Symbol.for("react.suspense_list"),
    Dt = Symbol.for("react.memo"),
    Bl = Symbol.for("react.lazy"),
    yt = Symbol.for("react.offscreen"),
    Jt = Symbol.for("react.memo_cache_sentinel"),
    k = Symbol.iterator;
  function Cl(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (k && l[k]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var wt = Symbol.for("react.client.reference");
  function Wt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === wt ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case M:
        return "Fragment";
      case ml:
        return "Portal";
      case $:
        return "Profiler";
      case E:
        return "StrictMode";
      case Pl:
        return "Suspense";
      case Ll:
        return "SuspenseList";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case gl:
          return (l.displayName || "Context") + ".Provider";
        case il:
          return (l._context.displayName || "Context") + ".Consumer";
        case Ql:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case Dt:
          return (
            (t = l.displayName || null), t !== null ? t : Wt(l.type) || "Memo"
          );
        case Bl:
          (t = l._payload), (l = l._init);
          try {
            return Wt(l(t));
          } catch {}
      }
    return null;
  }
  var N = ul.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    F = Object.assign,
    Il,
    Mt;
  function St(l) {
    if (Il === void 0)
      try {
        throw Error();
      } catch (u) {
        var t = u.stack.trim().match(/\n( *(at )?)/);
        (Il = (t && t[1]) || ""),
          (Mt =
            -1 <
            u.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < u.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Il +
      l +
      Mt
    );
  }
  var Ut = !1;
  function jl(l, t) {
    if (!l || Ut) return "";
    Ut = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var b = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(b.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(b, []);
                } catch (r) {
                  var m = r;
                }
                Reflect.construct(l, [], b);
              } else {
                try {
                  b.call();
                } catch (r) {
                  m = r;
                }
                l.call(b.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (r) {
                m = r;
              }
              (b = l()) &&
                typeof b.catch == "function" &&
                b.catch(function () {});
            }
          } catch (r) {
            if (r && m && typeof r.stack == "string") return [r.stack, m.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      e &&
        e.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = a.DetermineComponentFrameRoot(),
        f = n[0],
        c = n[1];
      if (f && c) {
        var i = f.split(`
`),
          v = c.split(`
`);
        for (
          e = a = 0;
          a < i.length && !i[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; e < v.length && !v[e].includes("DetermineComponentFrameRoot"); )
          e++;
        if (a === i.length || e === v.length)
          for (
            a = i.length - 1, e = v.length - 1;
            1 <= a && 0 <= e && i[a] !== v[e];

          )
            e--;
        for (; 1 <= a && 0 <= e; a--, e--)
          if (i[a] !== v[e]) {
            if (a !== 1 || e !== 1)
              do
                if ((a--, e--, 0 > e || i[a] !== v[e])) {
                  var g =
                    `
` + i[a].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      g.includes("<anonymous>") &&
                      (g = g.replace("<anonymous>", l.displayName)),
                    g
                  );
                }
              while (1 <= a && 0 <= e);
            break;
          }
      }
    } finally {
      (Ut = !1), (Error.prepareStackTrace = u);
    }
    return (u = l ? l.displayName || l.name : "") ? St(u) : "";
  }
  function z(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return St(l.type);
      case 16:
        return St("Lazy");
      case 13:
        return St("Suspense");
      case 19:
        return St("SuspenseList");
      case 0:
      case 15:
        return (l = jl(l.type, !1)), l;
      case 11:
        return (l = jl(l.type.render, !1)), l;
      case 1:
        return (l = jl(l.type, !0)), l;
      default:
        return "";
    }
  }
  function G(l) {
    try {
      var t = "";
      do (t += z(l)), (l = l.return);
      while (l);
      return t;
    } catch (u) {
      return (
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack
      );
    }
  }
  function B(l) {
    var t = l,
      u = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do (t = l), (t.flags & 4098) !== 0 && (u = t.return), (l = t.return);
      while (l);
    }
    return t.tag === 3 ? u : null;
  }
  function el(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function s(l) {
    if (B(l) !== l) throw Error(h(188));
  }
  function T(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = B(l)), t === null)) throw Error(h(188));
      return t !== l ? null : l;
    }
    for (var u = l, a = t; ; ) {
      var e = u.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (((a = e.return), a !== null)) {
          u = a;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === u) return s(e), l;
          if (n === a) return s(e), t;
          n = n.sibling;
        }
        throw Error(h(188));
      }
      if (u.return !== a.return) (u = e), (a = n);
      else {
        for (var f = !1, c = e.child; c; ) {
          if (c === u) {
            (f = !0), (u = e), (a = n);
            break;
          }
          if (c === a) {
            (f = !0), (a = e), (u = n);
            break;
          }
          c = c.sibling;
        }
        if (!f) {
          for (c = n.child; c; ) {
            if (c === u) {
              (f = !0), (u = n), (a = e);
              break;
            }
            if (c === a) {
              (f = !0), (a = n), (u = e);
              break;
            }
            c = c.sibling;
          }
          if (!f) throw Error(h(189));
        }
      }
      if (u.alternate !== a) throw Error(h(190));
    }
    if (u.tag !== 3) throw Error(h(188));
    return u.stateNode.current === u ? l : t;
  }
  function p(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = p(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var R = Array.isArray,
    O = x.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    L = { pending: !1, data: null, method: null, action: null },
    Q = [],
    Yl = -1;
  function P(l) {
    return { current: l };
  }
  function Sl(l) {
    0 > Yl || ((l.current = Q[Yl]), (Q[Yl] = null), Yl--);
  }
  function sl(l, t) {
    Yl++, (Q[Yl] = l.current), (l.current = t);
  }
  var bt = P(null),
    Aa = P(null),
    $t = P(null),
    Ae = P(null);
  function Oe(l, t) {
    switch ((sl($t, t), sl(Aa, l), sl(bt, null), (l = t.nodeType), l)) {
      case 9:
      case 11:
        t = (t = t.documentElement) && (t = t.namespaceURI) ? yd(t) : 0;
        break;
      default:
        if (
          ((l = l === 8 ? t.parentNode : t),
          (t = l.tagName),
          (l = l.namespaceURI))
        )
          (l = yd(l)), (t = hd(l, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    Sl(bt), sl(bt, t);
  }
  function Zu() {
    Sl(bt), Sl(Aa), Sl($t);
  }
  function Qn(l) {
    l.memoizedState !== null && sl(Ae, l);
    var t = bt.current,
      u = hd(t, l.type);
    t !== u && (sl(Aa, l), sl(bt, u));
  }
  function _e(l) {
    Aa.current === l && (Sl(bt), Sl(Aa)),
      Ae.current === l && (Sl(Ae), (me._currentValue = L));
  }
  var Cn = Object.prototype.hasOwnProperty,
    jn = A.unstable_scheduleCallback,
    Zn = A.unstable_cancelCallback,
    wd = A.unstable_shouldYield,
    Wd = A.unstable_requestPaint,
    Et = A.unstable_now,
    $d = A.unstable_getCurrentPriorityLevel,
    ti = A.unstable_ImmediatePriority,
    ui = A.unstable_UserBlockingPriority,
    De = A.unstable_NormalPriority,
    kd = A.unstable_LowPriority,
    ai = A.unstable_IdlePriority,
    Fd = A.log,
    Pd = A.unstable_setDisableYieldValue,
    Oa = null,
    Kl = null;
  function Id(l) {
    if (Kl && typeof Kl.onCommitFiberRoot == "function")
      try {
        Kl.onCommitFiberRoot(Oa, l, void 0, (l.current.flags & 128) === 128);
      } catch {}
  }
  function kt(l) {
    if (
      (typeof Fd == "function" && Pd(l),
      Kl && typeof Kl.setStrictMode == "function")
    )
      try {
        Kl.setStrictMode(Oa, l);
      } catch {}
  }
  var Jl = Math.clz32 ? Math.clz32 : uv,
    lv = Math.log,
    tv = Math.LN2;
  function uv(l) {
    return (l >>>= 0), l === 0 ? 32 : (31 - ((lv(l) / tv) | 0)) | 0;
  }
  var Me = 128,
    Ue = 4194304;
  function bu(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Re(l, t) {
    var u = l.pendingLanes;
    if (u === 0) return 0;
    var a = 0,
      e = l.suspendedLanes,
      n = l.pingedLanes,
      f = l.warmLanes;
    l = l.finishedLanes !== 0;
    var c = u & 134217727;
    return (
      c !== 0
        ? ((u = c & ~e),
          u !== 0
            ? (a = bu(u))
            : ((n &= c),
              n !== 0
                ? (a = bu(n))
                : l || ((f = c & ~f), f !== 0 && (a = bu(f)))))
        : ((c = u & ~e),
          c !== 0
            ? (a = bu(c))
            : n !== 0
            ? (a = bu(n))
            : l || ((f = u & ~f), f !== 0 && (a = bu(f)))),
      a === 0
        ? 0
        : t !== 0 &&
          t !== a &&
          (t & e) === 0 &&
          ((e = a & -a),
          (f = t & -t),
          e >= f || (e === 32 && (f & 4194176) !== 0))
        ? t
        : a
    );
  }
  function _a(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function av(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
        return t + 250;
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ei() {
    var l = Me;
    return (Me <<= 1), (Me & 4194176) === 0 && (Me = 128), l;
  }
  function ni() {
    var l = Ue;
    return (Ue <<= 1), (Ue & 62914560) === 0 && (Ue = 4194304), l;
  }
  function xn(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function Da(l, t) {
    (l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0));
  }
  function ev(l, t, u, a, e, n) {
    var f = l.pendingLanes;
    (l.pendingLanes = u),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= u),
      (l.entangledLanes &= u),
      (l.errorRecoveryDisabledLanes &= u),
      (l.shellSuspendCounter = 0);
    var c = l.entanglements,
      i = l.expirationTimes,
      v = l.hiddenUpdates;
    for (u = f & ~u; 0 < u; ) {
      var g = 31 - Jl(u),
        b = 1 << g;
      (c[g] = 0), (i[g] = -1);
      var m = v[g];
      if (m !== null)
        for (v[g] = null, g = 0; g < m.length; g++) {
          var r = m[g];
          r !== null && (r.lane &= -536870913);
        }
      u &= ~b;
    }
    a !== 0 && fi(l, a, 0),
      n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function fi(l, t, u) {
    (l.pendingLanes |= t), (l.suspendedLanes &= ~t);
    var a = 31 - Jl(t);
    (l.entangledLanes |= t),
      (l.entanglements[a] = l.entanglements[a] | 1073741824 | (u & 4194218));
  }
  function ci(l, t) {
    var u = (l.entangledLanes |= t);
    for (l = l.entanglements; u; ) {
      var a = 31 - Jl(u),
        e = 1 << a;
      (e & t) | (l[a] & t) && (l[a] |= t), (u &= ~e);
    }
  }
  function ii(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function si() {
    var l = O.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : Nd(l.type));
  }
  function nv(l, t) {
    var u = O.p;
    try {
      return (O.p = l), t();
    } finally {
      O.p = u;
    }
  }
  var Ft = Math.random().toString(36).slice(2),
    Nl = "__reactFiber$" + Ft,
    Zl = "__reactProps$" + Ft,
    xu = "__reactContainer$" + Ft,
    Vn = "__reactEvents$" + Ft,
    fv = "__reactListeners$" + Ft,
    cv = "__reactHandles$" + Ft,
    di = "__reactResources$" + Ft,
    Ma = "__reactMarker$" + Ft;
  function Ln(l) {
    delete l[Nl], delete l[Zl], delete l[Vn], delete l[fv], delete l[cv];
  }
  function Eu(l) {
    var t = l[Nl];
    if (t) return t;
    for (var u = l.parentNode; u; ) {
      if ((t = u[xu] || u[Nl])) {
        if (
          ((u = t.alternate),
          t.child !== null || (u !== null && u.child !== null))
        )
          for (l = rd(l); l !== null; ) {
            if ((u = l[Nl])) return u;
            l = rd(l);
          }
        return t;
      }
      (l = u), (u = l.parentNode);
    }
    return null;
  }
  function Vu(l) {
    if ((l = l[Nl] || l[xu])) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Ua(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(h(33));
  }
  function Lu(l) {
    var t = l[di];
    return (
      t ||
        (t = l[di] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Ol(l) {
    l[Ma] = !0;
  }
  var vi = new Set(),
    yi = {};
  function Tu(l, t) {
    Ku(l, t), Ku(l + "Capture", t);
  }
  function Ku(l, t) {
    for (yi[l] = t, l = 0; l < t.length; l++) vi.add(t[l]);
  }
  var Rt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    iv = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    hi = {},
    oi = {};
  function sv(l) {
    return Cn.call(oi, l)
      ? !0
      : Cn.call(hi, l)
      ? !1
      : iv.test(l)
      ? (oi[l] = !0)
      : ((hi[l] = !0), !1);
  }
  function He(l, t, u) {
    if (sv(t))
      if (u === null) l.removeAttribute(t);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + u);
      }
  }
  function Ne(l, t, u) {
    if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + u);
    }
  }
  function Ht(l, t, u, a) {
    if (a === null) l.removeAttribute(u);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(t, u, "" + a);
    }
  }
  function lt(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function mi(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function dv(l) {
    var t = mi(l) ? "checked" : "value",
      u = Object.getOwnPropertyDescriptor(l.constructor.prototype, t),
      a = "" + l[t];
    if (
      !l.hasOwnProperty(t) &&
      typeof u < "u" &&
      typeof u.get == "function" &&
      typeof u.set == "function"
    ) {
      var e = u.get,
        n = u.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return e.call(this);
          },
          set: function (f) {
            (a = "" + f), n.call(this, f);
          },
        }),
        Object.defineProperty(l, t, { enumerable: u.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (f) {
            a = "" + f;
          },
          stopTracking: function () {
            (l._valueTracker = null), delete l[t];
          },
        }
      );
    }
  }
  function pe(l) {
    l._valueTracker || (l._valueTracker = dv(l));
  }
  function ri(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var u = t.getValue(),
      a = "";
    return (
      l && (a = mi(l) ? (l.checked ? "true" : "false") : l.value),
      (l = a),
      l !== u ? (t.setValue(l), !0) : !1
    );
  }
  function qe(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var vv = /[\n"\\]/g;
  function tt(l) {
    return l.replace(vv, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Kn(l, t, u, a, e, n, f, c) {
    (l.name = ""),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (l.type = f)
        : l.removeAttribute("type"),
      t != null
        ? f === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + lt(t))
          : l.value !== "" + lt(t) && (l.value = "" + lt(t))
        : (f !== "submit" && f !== "reset") || l.removeAttribute("value"),
      t != null
        ? Jn(l, f, lt(t))
        : u != null
        ? Jn(l, f, lt(u))
        : a != null && l.removeAttribute("value"),
      e == null && n != null && (l.defaultChecked = !!n),
      e != null &&
        (l.checked = e && typeof e != "function" && typeof e != "symbol"),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (l.name = "" + lt(c))
        : l.removeAttribute("name");
  }
  function gi(l, t, u, a, e, n, f, c) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || u != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) return;
      (u = u != null ? "" + lt(u) : ""),
        (t = t != null ? "" + lt(t) : u),
        c || t === l.value || (l.value = t),
        (l.defaultValue = t);
    }
    (a = a ?? e),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (l.checked = c ? l.checked : !!a),
      (l.defaultChecked = !!a),
      f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (l.name = f);
  }
  function Jn(l, t, u) {
    (t === "number" && qe(l.ownerDocument) === l) ||
      l.defaultValue === "" + u ||
      (l.defaultValue = "" + u);
  }
  function Ju(l, t, u, a) {
    if (((l = l.options), t)) {
      t = {};
      for (var e = 0; e < u.length; e++) t["$" + u[e]] = !0;
      for (u = 0; u < l.length; u++)
        (e = t.hasOwnProperty("$" + l[u].value)),
          l[u].selected !== e && (l[u].selected = e),
          e && a && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + lt(u), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === u) {
          (l[e].selected = !0), a && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Si(l, t, u) {
    if (
      t != null &&
      ((t = "" + lt(t)), t !== l.value && (l.value = t), u == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? "" + lt(u) : "";
  }
  function bi(l, t, u, a) {
    if (t == null) {
      if (a != null) {
        if (u != null) throw Error(h(92));
        if (R(a)) {
          if (1 < a.length) throw Error(h(93));
          a = a[0];
        }
        u = a;
      }
      u == null && (u = ""), (t = u);
    }
    (u = lt(t)),
      (l.defaultValue = u),
      (a = l.textContent),
      a === u && a !== "" && a !== null && (l.value = a);
  }
  function wu(l, t) {
    if (t) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var yv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Ei(l, t, u) {
    var a = t.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === ""
      ? a
        ? l.setProperty(t, "")
        : t === "float"
        ? (l.cssFloat = "")
        : (l[t] = "")
      : a
      ? l.setProperty(t, u)
      : typeof u != "number" || u === 0 || yv.has(t)
      ? t === "float"
        ? (l.cssFloat = u)
        : (l[t] = ("" + u).trim())
      : (l[t] = u + "px");
  }
  function Ti(l, t, u) {
    if (t != null && typeof t != "object") throw Error(h(62));
    if (((l = l.style), u != null)) {
      for (var a in u)
        !u.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? l.setProperty(a, "")
            : a === "float"
            ? (l.cssFloat = "")
            : (l[a] = ""));
      for (var e in t)
        (a = t[e]), t.hasOwnProperty(e) && u[e] !== a && Ei(l, e, a);
    } else for (var n in t) t.hasOwnProperty(n) && Ei(l, n, t[n]);
  }
  function wn(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var hv = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    ov =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Be(l) {
    return ov.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  var Wn = null;
  function $n(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var Wu = null,
    $u = null;
  function zi(l) {
    var t = Vu(l);
    if (t && (l = t.stateNode)) {
      var u = l[Zl] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (Kn(
              l,
              u.value,
              u.defaultValue,
              u.defaultValue,
              u.checked,
              u.defaultChecked,
              u.type,
              u.name
            ),
            (t = u.name),
            u.type === "radio" && t != null)
          ) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (
              u = u.querySelectorAll(
                'input[name="' + tt("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < u.length;
              t++
            ) {
              var a = u[t];
              if (a !== l && a.form === l.form) {
                var e = a[Zl] || null;
                if (!e) throw Error(h(90));
                Kn(
                  a,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (t = 0; t < u.length; t++)
              (a = u[t]), a.form === l.form && ri(a);
          }
          break l;
        case "textarea":
          Si(l, u.value, u.defaultValue);
          break l;
        case "select":
          (t = u.value), t != null && Ju(l, !!u.multiple, t, !1);
      }
    }
  }
  var kn = !1;
  function Ai(l, t, u) {
    if (kn) return l(t, u);
    kn = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (
        ((kn = !1),
        (Wu !== null || $u !== null) &&
          (Sn(), Wu && ((t = Wu), (l = $u), ($u = Wu = null), zi(t), l)))
      )
        for (t = 0; t < l.length; t++) zi(l[t]);
    }
  }
  function Ra(l, t) {
    var u = l.stateNode;
    if (u === null) return null;
    var a = u[Zl] || null;
    if (a === null) return null;
    u = a[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((l = l.type),
          (a = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !a);
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function") throw Error(h(231, t, typeof u));
    return u;
  }
  var Fn = !1;
  if (Rt)
    try {
      var Ha = {};
      Object.defineProperty(Ha, "passive", {
        get: function () {
          Fn = !0;
        },
      }),
        window.addEventListener("test", Ha, Ha),
        window.removeEventListener("test", Ha, Ha);
    } catch {
      Fn = !1;
    }
  var Pt = null,
    Pn = null,
    Ye = null;
  function Oi() {
    if (Ye) return Ye;
    var l,
      t = Pn,
      u = t.length,
      a,
      e = "value" in Pt ? Pt.value : Pt.textContent,
      n = e.length;
    for (l = 0; l < u && t[l] === e[l]; l++);
    var f = u - l;
    for (a = 1; a <= f && t[u - a] === e[n - a]; a++);
    return (Ye = e.slice(l, 1 < a ? 1 - a : void 0));
  }
  function Ge(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function Xe() {
    return !0;
  }
  function _i() {
    return !1;
  }
  function xl(l) {
    function t(u, a, e, n, f) {
      (this._reactName = u),
        (this._targetInst = e),
        (this.type = a),
        (this.nativeEvent = n),
        (this.target = f),
        (this.currentTarget = null);
      for (var c in l)
        l.hasOwnProperty(c) && ((u = l[c]), (this[c] = u ? u(n) : n[c]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Xe
          : _i),
        (this.isPropagationStopped = _i),
        this
      );
    }
    return (
      F(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var u = this.nativeEvent;
          u &&
            (u.preventDefault
              ? u.preventDefault()
              : typeof u.returnValue != "unknown" && (u.returnValue = !1),
            (this.isDefaultPrevented = Xe));
        },
        stopPropagation: function () {
          var u = this.nativeEvent;
          u &&
            (u.stopPropagation
              ? u.stopPropagation()
              : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0),
            (this.isPropagationStopped = Xe));
        },
        persist: function () {},
        isPersistent: Xe,
      }),
      t
    );
  }
  var zu = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Qe = xl(zu),
    Na = F({}, zu, { view: 0, detail: 0 }),
    mv = xl(Na),
    In,
    lf,
    pa,
    Ce = F({}, Na, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: uf,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== pa &&
              (pa && l.type === "mousemove"
                ? ((In = l.screenX - pa.screenX), (lf = l.screenY - pa.screenY))
                : (lf = In = 0),
              (pa = l)),
            In);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : lf;
      },
    }),
    Di = xl(Ce),
    rv = F({}, Ce, { dataTransfer: 0 }),
    gv = xl(rv),
    Sv = F({}, Na, { relatedTarget: 0 }),
    tf = xl(Sv),
    bv = F({}, zu, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ev = xl(bv),
    Tv = F({}, zu, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    zv = xl(Tv),
    Av = F({}, zu, { data: 0 }),
    Mi = xl(Av),
    Ov = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    _v = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Dv = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Mv(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = Dv[l])
      ? !!t[l]
      : !1;
  }
  function uf() {
    return Mv;
  }
  var Uv = F({}, Na, {
      key: function (l) {
        if (l.key) {
          var t = Ov[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = Ge(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
          ? _v[l.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: uf,
      charCode: function (l) {
        return l.type === "keypress" ? Ge(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? Ge(l)
          : l.type === "keydown" || l.type === "keyup"
          ? l.keyCode
          : 0;
      },
    }),
    Rv = xl(Uv),
    Hv = F({}, Ce, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Ui = xl(Hv),
    Nv = F({}, Na, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: uf,
    }),
    pv = xl(Nv),
    qv = F({}, zu, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Bv = xl(qv),
    Yv = F({}, Ce, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
          ? -l.wheelDeltaX
          : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
          ? -l.wheelDeltaY
          : "wheelDelta" in l
          ? -l.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Gv = xl(Yv),
    Xv = F({}, zu, { newState: 0, oldState: 0 }),
    Qv = xl(Xv),
    Cv = [9, 13, 27, 32],
    af = Rt && "CompositionEvent" in window,
    qa = null;
  Rt && "documentMode" in document && (qa = document.documentMode);
  var jv = Rt && "TextEvent" in window && !qa,
    Ri = Rt && (!af || (qa && 8 < qa && 11 >= qa)),
    Hi = " ",
    Ni = !1;
  function pi(l, t) {
    switch (l) {
      case "keyup":
        return Cv.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function qi(l) {
    return (l = l.detail), typeof l == "object" && "data" in l ? l.data : null;
  }
  var ku = !1;
  function Zv(l, t) {
    switch (l) {
      case "compositionend":
        return qi(t);
      case "keypress":
        return t.which !== 32 ? null : ((Ni = !0), Hi);
      case "textInput":
        return (l = t.data), l === Hi && Ni ? null : l;
      default:
        return null;
    }
  }
  function xv(l, t) {
    if (ku)
      return l === "compositionend" || (!af && pi(l, t))
        ? ((l = Oi()), (Ye = Pn = Pt = null), (ku = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Ri && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Vv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Bi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Vv[l.type] : t === "textarea";
  }
  function Yi(l, t, u, a) {
    Wu ? ($u ? $u.push(a) : ($u = [a])) : (Wu = a),
      (t = An(t, "onChange")),
      0 < t.length &&
        ((u = new Qe("onChange", "change", null, u, a)),
        l.push({ event: u, listeners: t }));
  }
  var Ba = null,
    Ya = null;
  function Lv(l) {
    cd(l, 0);
  }
  function je(l) {
    var t = Ua(l);
    if (ri(t)) return l;
  }
  function Gi(l, t) {
    if (l === "change") return t;
  }
  var Xi = !1;
  if (Rt) {
    var ef;
    if (Rt) {
      var nf = "oninput" in document;
      if (!nf) {
        var Qi = document.createElement("div");
        Qi.setAttribute("oninput", "return;"),
          (nf = typeof Qi.oninput == "function");
      }
      ef = nf;
    } else ef = !1;
    Xi = ef && (!document.documentMode || 9 < document.documentMode);
  }
  function Ci() {
    Ba && (Ba.detachEvent("onpropertychange", ji), (Ya = Ba = null));
  }
  function ji(l) {
    if (l.propertyName === "value" && je(Ya)) {
      var t = [];
      Yi(t, Ya, l, $n(l)), Ai(Lv, t);
    }
  }
  function Kv(l, t, u) {
    l === "focusin"
      ? (Ci(), (Ba = t), (Ya = u), Ba.attachEvent("onpropertychange", ji))
      : l === "focusout" && Ci();
  }
  function Jv(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return je(Ya);
  }
  function wv(l, t) {
    if (l === "click") return je(t);
  }
  function Wv(l, t) {
    if (l === "input" || l === "change") return je(t);
  }
  function $v(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var wl = typeof Object.is == "function" ? Object.is : $v;
  function Ga(l, t) {
    if (wl(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var u = Object.keys(l),
      a = Object.keys(t);
    if (u.length !== a.length) return !1;
    for (a = 0; a < u.length; a++) {
      var e = u[a];
      if (!Cn.call(t, e) || !wl(l[e], t[e])) return !1;
    }
    return !0;
  }
  function Zi(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function xi(l, t) {
    var u = Zi(l);
    l = 0;
    for (var a; u; ) {
      if (u.nodeType === 3) {
        if (((a = l + u.textContent.length), l <= t && a >= t))
          return { node: u, offset: t - l };
        l = a;
      }
      l: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break l;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = Zi(u);
    }
  }
  function Vi(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Vi(l, t.parentNode)
        : "contains" in l
        ? l.contains(t)
        : l.compareDocumentPosition
        ? !!(l.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Li(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = qe(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof t.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = t.contentWindow;
      else break;
      t = qe(l.document);
    }
    return t;
  }
  function ff(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  function kv(l, t) {
    var u = Li(t);
    t = l.focusedElem;
    var a = l.selectionRange;
    if (
      u !== t &&
      t &&
      t.ownerDocument &&
      Vi(t.ownerDocument.documentElement, t)
    ) {
      if (a !== null && ff(t)) {
        if (
          ((l = a.start),
          (u = a.end),
          u === void 0 && (u = l),
          "selectionStart" in t)
        )
          (t.selectionStart = l),
            (t.selectionEnd = Math.min(u, t.value.length));
        else if (
          ((u = ((l = t.ownerDocument || document) && l.defaultView) || window),
          u.getSelection)
        ) {
          u = u.getSelection();
          var e = t.textContent.length,
            n = Math.min(a.start, e);
          (a = a.end === void 0 ? n : Math.min(a.end, e)),
            !u.extend && n > a && ((e = a), (a = n), (n = e)),
            (e = xi(t, n));
          var f = xi(t, a);
          e &&
            f &&
            (u.rangeCount !== 1 ||
              u.anchorNode !== e.node ||
              u.anchorOffset !== e.offset ||
              u.focusNode !== f.node ||
              u.focusOffset !== f.offset) &&
            ((l = l.createRange()),
            l.setStart(e.node, e.offset),
            u.removeAllRanges(),
            n > a
              ? (u.addRange(l), u.extend(f.node, f.offset))
              : (l.setEnd(f.node, f.offset), u.addRange(l)));
        }
      }
      for (l = [], u = t; (u = u.parentNode); )
        u.nodeType === 1 &&
          l.push({ element: u, left: u.scrollLeft, top: u.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < l.length; t++)
        (u = l[t]),
          (u.element.scrollLeft = u.left),
          (u.element.scrollTop = u.top);
    }
  }
  var Fv = Rt && "documentMode" in document && 11 >= document.documentMode,
    Fu = null,
    cf = null,
    Xa = null,
    sf = !1;
  function Ki(l, t, u) {
    var a =
      u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    sf ||
      Fu == null ||
      Fu !== qe(a) ||
      ((a = Fu),
      "selectionStart" in a && ff(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Xa && Ga(Xa, a)) ||
        ((Xa = a),
        (a = An(cf, "onSelect")),
        0 < a.length &&
          ((t = new Qe("onSelect", "select", null, t, u)),
          l.push({ event: t, listeners: a }),
          (t.target = Fu))));
  }
  function Au(l, t) {
    var u = {};
    return (
      (u[l.toLowerCase()] = t.toLowerCase()),
      (u["Webkit" + l] = "webkit" + t),
      (u["Moz" + l] = "moz" + t),
      u
    );
  }
  var Pu = {
      animationend: Au("Animation", "AnimationEnd"),
      animationiteration: Au("Animation", "AnimationIteration"),
      animationstart: Au("Animation", "AnimationStart"),
      transitionrun: Au("Transition", "TransitionRun"),
      transitionstart: Au("Transition", "TransitionStart"),
      transitioncancel: Au("Transition", "TransitionCancel"),
      transitionend: Au("Transition", "TransitionEnd"),
    },
    df = {},
    Ji = {};
  Rt &&
    ((Ji = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Pu.animationend.animation,
      delete Pu.animationiteration.animation,
      delete Pu.animationstart.animation),
    "TransitionEvent" in window || delete Pu.transitionend.transition);
  function Ou(l) {
    if (df[l]) return df[l];
    if (!Pu[l]) return l;
    var t = Pu[l],
      u;
    for (u in t) if (t.hasOwnProperty(u) && u in Ji) return (df[l] = t[u]);
    return l;
  }
  var wi = Ou("animationend"),
    Wi = Ou("animationiteration"),
    $i = Ou("animationstart"),
    Pv = Ou("transitionrun"),
    Iv = Ou("transitionstart"),
    ly = Ou("transitioncancel"),
    ki = Ou("transitionend"),
    Fi = new Map(),
    Pi =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " "
      );
  function ht(l, t) {
    Fi.set(l, t), Tu(t, [l]);
  }
  var ut = [],
    Iu = 0,
    vf = 0;
  function Ze() {
    for (var l = Iu, t = (vf = Iu = 0); t < l; ) {
      var u = ut[t];
      ut[t++] = null;
      var a = ut[t];
      ut[t++] = null;
      var e = ut[t];
      ut[t++] = null;
      var n = ut[t];
      if (((ut[t++] = null), a !== null && e !== null)) {
        var f = a.pending;
        f === null ? (e.next = e) : ((e.next = f.next), (f.next = e)),
          (a.pending = e);
      }
      n !== 0 && Ii(u, e, n);
    }
  }
  function xe(l, t, u, a) {
    (ut[Iu++] = l),
      (ut[Iu++] = t),
      (ut[Iu++] = u),
      (ut[Iu++] = a),
      (vf |= a),
      (l.lanes |= a),
      (l = l.alternate),
      l !== null && (l.lanes |= a);
  }
  function yf(l, t, u, a) {
    return xe(l, t, u, a), Ve(l);
  }
  function It(l, t) {
    return xe(l, null, null, t), Ve(l);
  }
  function Ii(l, t, u) {
    l.lanes |= u;
    var a = l.alternate;
    a !== null && (a.lanes |= u);
    for (var e = !1, n = l.return; n !== null; )
      (n.childLanes |= u),
        (a = n.alternate),
        a !== null && (a.childLanes |= u),
        n.tag === 22 &&
          ((l = n.stateNode), l === null || l._visibility & 1 || (e = !0)),
        (l = n),
        (n = n.return);
    e &&
      t !== null &&
      l.tag === 3 &&
      ((n = l.stateNode),
      (e = 31 - Jl(u)),
      (n = n.hiddenUpdates),
      (l = n[e]),
      l === null ? (n[e] = [t]) : l.push(t),
      (t.lane = u | 536870912));
  }
  function Ve(l) {
    if (50 < ie) throw ((ie = 0), (Sc = null), Error(h(185)));
    for (var t = l.return; t !== null; ) (l = t), (t = l.return);
    return l.tag === 3 ? l.stateNode : null;
  }
  var la = {},
    ls = new WeakMap();
  function at(l, t) {
    if (typeof l == "object" && l !== null) {
      var u = ls.get(l);
      return u !== void 0
        ? u
        : ((t = { value: l, source: t, stack: G(t) }), ls.set(l, t), t);
    }
    return { value: l, source: t, stack: G(t) };
  }
  var ta = [],
    ua = 0,
    Le = null,
    Ke = 0,
    et = [],
    nt = 0,
    _u = null,
    Nt = 1,
    pt = "";
  function Du(l, t) {
    (ta[ua++] = Ke), (ta[ua++] = Le), (Le = l), (Ke = t);
  }
  function ts(l, t, u) {
    (et[nt++] = Nt), (et[nt++] = pt), (et[nt++] = _u), (_u = l);
    var a = Nt;
    l = pt;
    var e = 32 - Jl(a) - 1;
    (a &= ~(1 << e)), (u += 1);
    var n = 32 - Jl(t) + e;
    if (30 < n) {
      var f = e - (e % 5);
      (n = (a & ((1 << f) - 1)).toString(32)),
        (a >>= f),
        (e -= f),
        (Nt = (1 << (32 - Jl(t) + e)) | (u << e) | a),
        (pt = n + l);
    } else (Nt = (1 << n) | (u << e) | a), (pt = l);
  }
  function hf(l) {
    l.return !== null && (Du(l, 1), ts(l, 1, 0));
  }
  function of(l) {
    for (; l === Le; )
      (Le = ta[--ua]), (ta[ua] = null), (Ke = ta[--ua]), (ta[ua] = null);
    for (; l === _u; )
      (_u = et[--nt]),
        (et[nt] = null),
        (pt = et[--nt]),
        (et[nt] = null),
        (Nt = et[--nt]),
        (et[nt] = null);
  }
  var Gl = null,
    Ul = null,
    J = !1,
    ot = null,
    Tt = !1,
    mf = Error(h(519));
  function Mu(l) {
    var t = Error(h(418, ""));
    throw (ja(at(t, l)), mf);
  }
  function us(l) {
    var t = l.stateNode,
      u = l.type,
      a = l.memoizedProps;
    switch (((t[Nl] = l), (t[Zl] = a), u)) {
      case "dialog":
        V("cancel", t), V("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        V("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < de.length; u++) V(de[u], t);
        break;
      case "source":
        V("error", t);
        break;
      case "img":
      case "image":
      case "link":
        V("error", t), V("load", t);
        break;
      case "details":
        V("toggle", t);
        break;
      case "input":
        V("invalid", t),
          gi(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          ),
          pe(t);
        break;
      case "select":
        V("invalid", t);
        break;
      case "textarea":
        V("invalid", t), bi(t, a.value, a.defaultValue, a.children), pe(t);
    }
    (u = a.children),
      (typeof u != "string" && typeof u != "number" && typeof u != "bigint") ||
      t.textContent === "" + u ||
      a.suppressHydrationWarning === !0 ||
      vd(t.textContent, u)
        ? (a.popover != null && (V("beforetoggle", t), V("toggle", t)),
          a.onScroll != null && V("scroll", t),
          a.onScrollEnd != null && V("scrollend", t),
          a.onClick != null && (t.onclick = On),
          (t = !0))
        : (t = !1),
      t || Mu(l);
  }
  function as(l) {
    for (Gl = l.return; Gl; )
      switch (Gl.tag) {
        case 3:
        case 27:
          Tt = !0;
          return;
        case 5:
        case 13:
          Tt = !1;
          return;
        default:
          Gl = Gl.return;
      }
  }
  function Qa(l) {
    if (l !== Gl) return !1;
    if (!J) return as(l), (J = !0), !1;
    var t = !1,
      u;
    if (
      ((u = l.tag !== 3 && l.tag !== 27) &&
        ((u = l.tag === 5) &&
          ((u = l.type),
          (u =
            !(u !== "form" && u !== "button") || Yc(l.type, l.memoizedProps))),
        (u = !u)),
      u && (t = !0),
      t && Ul && Mu(l),
      as(l),
      l.tag === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(h(317));
      l: {
        for (l = l.nextSibling, t = 0; l; ) {
          if (l.nodeType === 8)
            if (((u = l.data), u === "/$")) {
              if (t === 0) {
                Ul = rt(l.nextSibling);
                break l;
              }
              t--;
            } else (u !== "$" && u !== "$!" && u !== "$?") || t++;
          l = l.nextSibling;
        }
        Ul = null;
      }
    } else Ul = Gl ? rt(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Ca() {
    (Ul = Gl = null), (J = !1);
  }
  function ja(l) {
    ot === null ? (ot = [l]) : ot.push(l);
  }
  var Za = Error(h(460)),
    es = Error(h(474)),
    rf = { then: function () {} };
  function ns(l) {
    return (l = l.status), l === "fulfilled" || l === "rejected";
  }
  function Je() {}
  function fs(l, t, u) {
    switch (
      ((u = l[u]),
      u === void 0 ? l.push(t) : u !== t && (t.then(Je, Je), (t = u)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), l === Za ? Error(h(483)) : l);
      default:
        if (typeof t.status == "string") t.then(Je, Je);
        else {
          if (((l = nl), l !== null && 100 < l.shellSuspendCounter))
            throw Error(h(482));
          (l = t),
            (l.status = "pending"),
            l.then(
              function (a) {
                if (t.status === "pending") {
                  var e = t;
                  (e.status = "fulfilled"), (e.value = a);
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var e = t;
                  (e.status = "rejected"), (e.reason = a);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), l === Za ? Error(h(483)) : l);
        }
        throw ((xa = t), Za);
    }
  }
  var xa = null;
  function cs() {
    if (xa === null) throw Error(h(459));
    var l = xa;
    return (xa = null), l;
  }
  var aa = null,
    Va = 0;
  function we(l) {
    var t = Va;
    return (Va += 1), aa === null && (aa = []), fs(aa, l, t);
  }
  function La(l, t) {
    (t = t.props.ref), (l.ref = t !== void 0 ? t : null);
  }
  function We(l, t) {
    throw t.$$typeof === W
      ? Error(h(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          h(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l
          )
        ));
  }
  function is(l) {
    var t = l._init;
    return t(l._payload);
  }
  function ss(l) {
    function t(y, d) {
      if (l) {
        var o = y.deletions;
        o === null ? ((y.deletions = [d]), (y.flags |= 16)) : o.push(d);
      }
    }
    function u(y, d) {
      if (!l) return null;
      for (; d !== null; ) t(y, d), (d = d.sibling);
      return null;
    }
    function a(y) {
      for (var d = new Map(); y !== null; )
        y.key !== null ? d.set(y.key, y) : d.set(y.index, y), (y = y.sibling);
      return d;
    }
    function e(y, d) {
      return (y = vu(y, d)), (y.index = 0), (y.sibling = null), y;
    }
    function n(y, d, o) {
      return (
        (y.index = o),
        l
          ? ((o = y.alternate),
            o !== null
              ? ((o = o.index), o < d ? ((y.flags |= 33554434), d) : o)
              : ((y.flags |= 33554434), d))
          : ((y.flags |= 1048576), d)
      );
    }
    function f(y) {
      return l && y.alternate === null && (y.flags |= 33554434), y;
    }
    function c(y, d, o, S) {
      return d === null || d.tag !== 6
        ? ((d = dc(o, y.mode, S)), (d.return = y), d)
        : ((d = e(d, o)), (d.return = y), d);
    }
    function i(y, d, o, S) {
      var _ = o.type;
      return _ === M
        ? g(y, d, o.props.children, S, o.key)
        : d !== null &&
          (d.elementType === _ ||
            (typeof _ == "object" &&
              _ !== null &&
              _.$$typeof === Bl &&
              is(_) === d.type))
        ? ((d = e(d, o.props)), La(d, o), (d.return = y), d)
        : ((d = hn(o.type, o.key, o.props, null, y.mode, S)),
          La(d, o),
          (d.return = y),
          d);
    }
    function v(y, d, o, S) {
      return d === null ||
        d.tag !== 4 ||
        d.stateNode.containerInfo !== o.containerInfo ||
        d.stateNode.implementation !== o.implementation
        ? ((d = vc(o, y.mode, S)), (d.return = y), d)
        : ((d = e(d, o.children || [])), (d.return = y), d);
    }
    function g(y, d, o, S, _) {
      return d === null || d.tag !== 7
        ? ((d = Xu(o, y.mode, S, _)), (d.return = y), d)
        : ((d = e(d, o)), (d.return = y), d);
    }
    function b(y, d, o) {
      if (
        (typeof d == "string" && d !== "") ||
        typeof d == "number" ||
        typeof d == "bigint"
      )
        return (d = dc("" + d, y.mode, o)), (d.return = y), d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case al:
            return (
              (o = hn(d.type, d.key, d.props, null, y.mode, o)),
              La(o, d),
              (o.return = y),
              o
            );
          case ml:
            return (d = vc(d, y.mode, o)), (d.return = y), d;
          case Bl:
            var S = d._init;
            return (d = S(d._payload)), b(y, d, o);
        }
        if (R(d) || Cl(d))
          return (d = Xu(d, y.mode, o, null)), (d.return = y), d;
        if (typeof d.then == "function") return b(y, we(d), o);
        if (d.$$typeof === gl) return b(y, dn(y, d), o);
        We(y, d);
      }
      return null;
    }
    function m(y, d, o, S) {
      var _ = d !== null ? d.key : null;
      if (
        (typeof o == "string" && o !== "") ||
        typeof o == "number" ||
        typeof o == "bigint"
      )
        return _ !== null ? null : c(y, d, "" + o, S);
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case al:
            return o.key === _ ? i(y, d, o, S) : null;
          case ml:
            return o.key === _ ? v(y, d, o, S) : null;
          case Bl:
            return (_ = o._init), (o = _(o._payload)), m(y, d, o, S);
        }
        if (R(o) || Cl(o)) return _ !== null ? null : g(y, d, o, S, null);
        if (typeof o.then == "function") return m(y, d, we(o), S);
        if (o.$$typeof === gl) return m(y, d, dn(y, o), S);
        We(y, o);
      }
      return null;
    }
    function r(y, d, o, S, _) {
      if (
        (typeof S == "string" && S !== "") ||
        typeof S == "number" ||
        typeof S == "bigint"
      )
        return (y = y.get(o) || null), c(d, y, "" + S, _);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case al:
            return (
              (y = y.get(S.key === null ? o : S.key) || null), i(d, y, S, _)
            );
          case ml:
            return (
              (y = y.get(S.key === null ? o : S.key) || null), v(d, y, S, _)
            );
          case Bl:
            var j = S._init;
            return (S = j(S._payload)), r(y, d, o, S, _);
        }
        if (R(S) || Cl(S)) return (y = y.get(o) || null), g(d, y, S, _, null);
        if (typeof S.then == "function") return r(y, d, o, we(S), _);
        if (S.$$typeof === gl) return r(y, d, o, dn(d, S), _);
        We(d, S);
      }
      return null;
    }
    function D(y, d, o, S) {
      for (
        var _ = null, j = null, U = d, H = (d = 0), Ml = null;
        U !== null && H < o.length;
        H++
      ) {
        U.index > H ? ((Ml = U), (U = null)) : (Ml = U.sibling);
        var w = m(y, U, o[H], S);
        if (w === null) {
          U === null && (U = Ml);
          break;
        }
        l && U && w.alternate === null && t(y, U),
          (d = n(w, d, H)),
          j === null ? (_ = w) : (j.sibling = w),
          (j = w),
          (U = Ml);
      }
      if (H === o.length) return u(y, U), J && Du(y, H), _;
      if (U === null) {
        for (; H < o.length; H++)
          (U = b(y, o[H], S)),
            U !== null &&
              ((d = n(U, d, H)),
              j === null ? (_ = U) : (j.sibling = U),
              (j = U));
        return J && Du(y, H), _;
      }
      for (U = a(U); H < o.length; H++)
        (Ml = r(U, y, H, o[H], S)),
          Ml !== null &&
            (l &&
              Ml.alternate !== null &&
              U.delete(Ml.key === null ? H : Ml.key),
            (d = n(Ml, d, H)),
            j === null ? (_ = Ml) : (j.sibling = Ml),
            (j = Ml));
      return (
        l &&
          U.forEach(function (Su) {
            return t(y, Su);
          }),
        J && Du(y, H),
        _
      );
    }
    function Y(y, d, o, S) {
      if (o == null) throw Error(h(151));
      for (
        var _ = null, j = null, U = d, H = (d = 0), Ml = null, w = o.next();
        U !== null && !w.done;
        H++, w = o.next()
      ) {
        U.index > H ? ((Ml = U), (U = null)) : (Ml = U.sibling);
        var Su = m(y, U, w.value, S);
        if (Su === null) {
          U === null && (U = Ml);
          break;
        }
        l && U && Su.alternate === null && t(y, U),
          (d = n(Su, d, H)),
          j === null ? (_ = Su) : (j.sibling = Su),
          (j = Su),
          (U = Ml);
      }
      if (w.done) return u(y, U), J && Du(y, H), _;
      if (U === null) {
        for (; !w.done; H++, w = o.next())
          (w = b(y, w.value, S)),
            w !== null &&
              ((d = n(w, d, H)),
              j === null ? (_ = w) : (j.sibling = w),
              (j = w));
        return J && Du(y, H), _;
      }
      for (U = a(U); !w.done; H++, w = o.next())
        (w = r(U, y, H, w.value, S)),
          w !== null &&
            (l && w.alternate !== null && U.delete(w.key === null ? H : w.key),
            (d = n(w, d, H)),
            j === null ? (_ = w) : (j.sibling = w),
            (j = w));
      return (
        l &&
          U.forEach(function (oh) {
            return t(y, oh);
          }),
        J && Du(y, H),
        _
      );
    }
    function ol(y, d, o, S) {
      if (
        (typeof o == "object" &&
          o !== null &&
          o.type === M &&
          o.key === null &&
          (o = o.props.children),
        typeof o == "object" && o !== null)
      ) {
        switch (o.$$typeof) {
          case al:
            l: {
              for (var _ = o.key; d !== null; ) {
                if (d.key === _) {
                  if (((_ = o.type), _ === M)) {
                    if (d.tag === 7) {
                      u(y, d.sibling),
                        (S = e(d, o.props.children)),
                        (S.return = y),
                        (y = S);
                      break l;
                    }
                  } else if (
                    d.elementType === _ ||
                    (typeof _ == "object" &&
                      _ !== null &&
                      _.$$typeof === Bl &&
                      is(_) === d.type)
                  ) {
                    u(y, d.sibling),
                      (S = e(d, o.props)),
                      La(S, o),
                      (S.return = y),
                      (y = S);
                    break l;
                  }
                  u(y, d);
                  break;
                } else t(y, d);
                d = d.sibling;
              }
              o.type === M
                ? ((S = Xu(o.props.children, y.mode, S, o.key)),
                  (S.return = y),
                  (y = S))
                : ((S = hn(o.type, o.key, o.props, null, y.mode, S)),
                  La(S, o),
                  (S.return = y),
                  (y = S));
            }
            return f(y);
          case ml:
            l: {
              for (_ = o.key; d !== null; ) {
                if (d.key === _)
                  if (
                    d.tag === 4 &&
                    d.stateNode.containerInfo === o.containerInfo &&
                    d.stateNode.implementation === o.implementation
                  ) {
                    u(y, d.sibling),
                      (S = e(d, o.children || [])),
                      (S.return = y),
                      (y = S);
                    break l;
                  } else {
                    u(y, d);
                    break;
                  }
                else t(y, d);
                d = d.sibling;
              }
              (S = vc(o, y.mode, S)), (S.return = y), (y = S);
            }
            return f(y);
          case Bl:
            return (_ = o._init), (o = _(o._payload)), ol(y, d, o, S);
        }
        if (R(o)) return D(y, d, o, S);
        if (Cl(o)) {
          if (((_ = Cl(o)), typeof _ != "function")) throw Error(h(150));
          return (o = _.call(o)), Y(y, d, o, S);
        }
        if (typeof o.then == "function") return ol(y, d, we(o), S);
        if (o.$$typeof === gl) return ol(y, d, dn(y, o), S);
        We(y, o);
      }
      return (typeof o == "string" && o !== "") ||
        typeof o == "number" ||
        typeof o == "bigint"
        ? ((o = "" + o),
          d !== null && d.tag === 6
            ? (u(y, d.sibling), (S = e(d, o)), (S.return = y), (y = S))
            : (u(y, d), (S = dc(o, y.mode, S)), (S.return = y), (y = S)),
          f(y))
        : u(y, d);
    }
    return function (y, d, o, S) {
      try {
        Va = 0;
        var _ = ol(y, d, o, S);
        return (aa = null), _;
      } catch (U) {
        if (U === Za) throw U;
        var j = st(29, U, null, y.mode);
        return (j.lanes = S), (j.return = y), j;
      } finally {
      }
    };
  }
  var Uu = ss(!0),
    ds = ss(!1),
    ea = P(null),
    $e = P(0);
  function vs(l, t) {
    (l = Vt), sl($e, l), sl(ea, t), (Vt = l | t.baseLanes);
  }
  function gf() {
    sl($e, Vt), sl(ea, ea.current);
  }
  function Sf() {
    (Vt = $e.current), Sl(ea), Sl($e);
  }
  var ft = P(null),
    zt = null;
  function lu(l) {
    var t = l.alternate;
    sl(zl, zl.current & 1),
      sl(ft, l),
      zt === null &&
        (t === null || ea.current !== null || t.memoizedState !== null) &&
        (zt = l);
  }
  function ys(l) {
    if (l.tag === 22) {
      if ((sl(zl, zl.current), sl(ft, l), zt === null)) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (zt = l);
      }
    } else tu();
  }
  function tu() {
    sl(zl, zl.current), sl(ft, ft.current);
  }
  function qt(l) {
    Sl(ft), zt === l && (zt = null), Sl(zl);
  }
  var zl = P(0);
  function ke(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var u = t.memoizedState;
        if (
          u !== null &&
          ((u = u.dehydrated), u === null || u.data === "$?" || u.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var ty =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (u, a) {
                  l.push(a);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                l.forEach(function (u) {
                  return u();
                });
            };
          },
    uy = A.unstable_scheduleCallback,
    ay = A.unstable_NormalPriority,
    Al = {
      $$typeof: gl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function bf() {
    return { controller: new ty(), data: new Map(), refCount: 0 };
  }
  function Ka(l) {
    l.refCount--,
      l.refCount === 0 &&
        uy(ay, function () {
          l.controller.abort();
        });
  }
  var Ja = null,
    Ef = 0,
    na = 0,
    fa = null;
  function ey(l, t) {
    if (Ja === null) {
      var u = (Ja = []);
      (Ef = 0),
        (na = Dc()),
        (fa = {
          status: "pending",
          value: void 0,
          then: function (a) {
            u.push(a);
          },
        });
    }
    return Ef++, t.then(hs, hs), t;
  }
  function hs() {
    if (--Ef === 0 && Ja !== null) {
      fa !== null && (fa.status = "fulfilled");
      var l = Ja;
      (Ja = null), (na = 0), (fa = null);
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function ny(l, t) {
    var u = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (e) {
          u.push(e);
        },
      };
    return (
      l.then(
        function () {
          (a.status = "fulfilled"), (a.value = t);
          for (var e = 0; e < u.length; e++) (0, u[e])(t);
        },
        function (e) {
          for (a.status = "rejected", a.reason = e, e = 0; e < u.length; e++)
            (0, u[e])(void 0);
        }
      ),
      a
    );
  }
  var os = N.S;
  N.S = function (l, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      ey(l, t),
      os !== null && os(l, t);
  };
  var Ru = P(null);
  function Tf() {
    var l = Ru.current;
    return l !== null ? l : nl.pooledCache;
  }
  function Fe(l, t) {
    t === null ? sl(Ru, Ru.current) : sl(Ru, t.pool);
  }
  function ms() {
    var l = Tf();
    return l === null ? null : { parent: Al._currentValue, pool: l };
  }
  var uu = 0,
    C = null,
    I = null,
    bl = null,
    Pe = !1,
    ca = !1,
    Hu = !1,
    Ie = 0,
    wa = 0,
    ia = null,
    fy = 0;
  function rl() {
    throw Error(h(321));
  }
  function zf(l, t) {
    if (t === null) return !1;
    for (var u = 0; u < t.length && u < l.length; u++)
      if (!wl(l[u], t[u])) return !1;
    return !0;
  }
  function Af(l, t, u, a, e, n) {
    return (
      (uu = n),
      (C = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (N.H = l === null || l.memoizedState === null ? Nu : au),
      (Hu = !1),
      (n = u(a, e)),
      (Hu = !1),
      ca && (n = gs(t, u, a, e)),
      rs(l),
      n
    );
  }
  function rs(l) {
    N.H = At;
    var t = I !== null && I.next !== null;
    if (((uu = 0), (bl = I = C = null), (Pe = !1), (wa = 0), (ia = null), t))
      throw Error(h(300));
    l === null ||
      _l ||
      ((l = l.dependencies), l !== null && sn(l) && (_l = !0));
  }
  function gs(l, t, u, a) {
    C = l;
    var e = 0;
    do {
      if ((ca && (ia = null), (wa = 0), (ca = !1), 25 <= e))
        throw Error(h(301));
      if (((e += 1), (bl = I = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        (n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0);
      }
      (N.H = pu), (n = t(u, a));
    } while (ca);
    return n;
  }
  function cy() {
    var l = N.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? Wa(t) : t),
      (l = l.useState()[0]),
      (I !== null ? I.memoizedState : null) !== l && (C.flags |= 1024),
      t
    );
  }
  function Of() {
    var l = Ie !== 0;
    return (Ie = 0), l;
  }
  function _f(l, t, u) {
    (t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~u);
  }
  function Df(l) {
    if (Pe) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), (l = l.next);
      }
      Pe = !1;
    }
    (uu = 0), (bl = I = C = null), (ca = !1), (wa = Ie = 0), (ia = null);
  }
  function Vl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return bl === null ? (C.memoizedState = bl = l) : (bl = bl.next = l), bl;
  }
  function El() {
    if (I === null) {
      var l = C.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = I.next;
    var t = bl === null ? C.memoizedState : bl.next;
    if (t !== null) (bl = t), (I = l);
    else {
      if (l === null)
        throw C.alternate === null ? Error(h(467)) : Error(h(310));
      (I = l),
        (l = {
          memoizedState: I.memoizedState,
          baseState: I.baseState,
          baseQueue: I.baseQueue,
          queue: I.queue,
          next: null,
        }),
        bl === null ? (C.memoizedState = bl = l) : (bl = bl.next = l);
    }
    return bl;
  }
  var ln;
  ln = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function Wa(l) {
    var t = wa;
    return (
      (wa += 1),
      ia === null && (ia = []),
      (l = fs(ia, l, t)),
      (t = C),
      (bl === null ? t.memoizedState : bl.next) === null &&
        ((t = t.alternate),
        (N.H = t === null || t.memoizedState === null ? Nu : au)),
      l
    );
  }
  function tn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Wa(l);
      if (l.$$typeof === gl) return pl(l);
    }
    throw Error(h(438, String(l)));
  }
  function Mf(l) {
    var t = null,
      u = C.updateQueue;
    if ((u !== null && (t = u.memoCache), t == null)) {
      var a = C.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (e) {
                return e.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      u === null && ((u = ln()), (C.updateQueue = u)),
      (u.memoCache = t),
      (u = t.data[t.index]),
      u === void 0)
    )
      for (u = t.data[t.index] = Array(l), a = 0; a < l; a++) u[a] = Jt;
    return t.index++, u;
  }
  function Bt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function un(l) {
    var t = El();
    return Uf(t, I, l);
  }
  function Uf(l, t, u) {
    var a = l.queue;
    if (a === null) throw Error(h(311));
    a.lastRenderedReducer = u;
    var e = l.baseQueue,
      n = a.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        (e.next = n.next), (n.next = f);
      }
      (t.baseQueue = e = n), (a.pending = null);
    }
    if (((n = l.baseState), e === null)) l.memoizedState = n;
    else {
      t = e.next;
      var c = (f = null),
        i = null,
        v = t,
        g = !1;
      do {
        var b = v.lane & -536870913;
        if (b !== v.lane ? (K & b) === b : (uu & b) === b) {
          var m = v.revertLane;
          if (m === 0)
            i !== null &&
              (i = i.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: v.action,
                  hasEagerState: v.hasEagerState,
                  eagerState: v.eagerState,
                  next: null,
                }),
              b === na && (g = !0);
          else if ((uu & m) === m) {
            (v = v.next), m === na && (g = !0);
            continue;
          } else
            (b = {
              lane: 0,
              revertLane: v.revertLane,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null,
            }),
              i === null ? ((c = i = b), (f = n)) : (i = i.next = b),
              (C.lanes |= m),
              (yu |= m);
          (b = v.action),
            Hu && u(n, b),
            (n = v.hasEagerState ? v.eagerState : u(n, b));
        } else
          (m = {
            lane: b,
            revertLane: v.revertLane,
            action: v.action,
            hasEagerState: v.hasEagerState,
            eagerState: v.eagerState,
            next: null,
          }),
            i === null ? ((c = i = m), (f = n)) : (i = i.next = m),
            (C.lanes |= b),
            (yu |= b);
        v = v.next;
      } while (v !== null && v !== t);
      if (
        (i === null ? (f = n) : (i.next = c),
        !wl(n, l.memoizedState) && ((_l = !0), g && ((u = fa), u !== null)))
      )
        throw u;
      (l.memoizedState = n),
        (l.baseState = f),
        (l.baseQueue = i),
        (a.lastRenderedState = n);
    }
    return e === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function Rf(l) {
    var t = El(),
      u = t.queue;
    if (u === null) throw Error(h(311));
    u.lastRenderedReducer = l;
    var a = u.dispatch,
      e = u.pending,
      n = t.memoizedState;
    if (e !== null) {
      u.pending = null;
      var f = (e = e.next);
      do (n = l(n, f.action)), (f = f.next);
      while (f !== e);
      wl(n, t.memoizedState) || (_l = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (u.lastRenderedState = n);
    }
    return [n, a];
  }
  function Ss(l, t, u) {
    var a = C,
      e = El(),
      n = J;
    if (n) {
      if (u === void 0) throw Error(h(407));
      u = u();
    } else u = t();
    var f = !wl((I || e).memoizedState, u);
    if (
      (f && ((e.memoizedState = u), (_l = !0)),
      (e = e.queue),
      pf(Ts.bind(null, a, e, l), [l]),
      e.getSnapshot !== t || f || (bl !== null && bl.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        sa(9, Es.bind(null, a, e, u, t), { destroy: void 0 }, null),
        nl === null)
      )
        throw Error(h(349));
      n || (uu & 60) !== 0 || bs(a, t, u);
    }
    return u;
  }
  function bs(l, t, u) {
    (l.flags |= 16384),
      (l = { getSnapshot: t, value: u }),
      (t = C.updateQueue),
      t === null
        ? ((t = ln()), (C.updateQueue = t), (t.stores = [l]))
        : ((u = t.stores), u === null ? (t.stores = [l]) : u.push(l));
  }
  function Es(l, t, u, a) {
    (t.value = u), (t.getSnapshot = a), zs(t) && As(l);
  }
  function Ts(l, t, u) {
    return u(function () {
      zs(t) && As(l);
    });
  }
  function zs(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var u = t();
      return !wl(l, u);
    } catch {
      return !0;
    }
  }
  function As(l) {
    var t = It(l, 2);
    t !== null && Xl(t, l, 2);
  }
  function Hf(l) {
    var t = Vl();
    if (typeof l == "function") {
      var u = l;
      if (((l = u()), Hu)) {
        kt(!0);
        try {
          u();
        } finally {
          kt(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Bt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function Os(l, t, u, a) {
    return (l.baseState = u), Uf(l, I, typeof a == "function" ? a : Bt);
  }
  function iy(l, t, u, a, e) {
    if (nn(l)) throw Error(h(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (f) {
          n.listeners.push(f);
        },
      };
      N.T !== null ? u(!0) : (n.isTransition = !1),
        a(n),
        (u = t.pending),
        u === null
          ? ((n.next = t.pending = n), _s(t, n))
          : ((n.next = u.next), (t.pending = u.next = n));
    }
  }
  function _s(l, t) {
    var u = t.action,
      a = t.payload,
      e = l.state;
    if (t.isTransition) {
      var n = N.T,
        f = {};
      N.T = f;
      try {
        var c = u(e, a),
          i = N.S;
        i !== null && i(f, c), Ds(l, t, c);
      } catch (v) {
        Nf(l, t, v);
      } finally {
        N.T = n;
      }
    } else
      try {
        (n = u(e, a)), Ds(l, t, n);
      } catch (v) {
        Nf(l, t, v);
      }
  }
  function Ds(l, t, u) {
    u !== null && typeof u == "object" && typeof u.then == "function"
      ? u.then(
          function (a) {
            Ms(l, t, a);
          },
          function (a) {
            return Nf(l, t, a);
          }
        )
      : Ms(l, t, u);
  }
  function Ms(l, t, u) {
    (t.status = "fulfilled"),
      (t.value = u),
      Us(t),
      (l.state = u),
      (t = l.pending),
      t !== null &&
        ((u = t.next),
        u === t ? (l.pending = null) : ((u = u.next), (t.next = u), _s(l, u)));
  }
  function Nf(l, t, u) {
    var a = l.pending;
    if (((l.pending = null), a !== null)) {
      a = a.next;
      do (t.status = "rejected"), (t.reason = u), Us(t), (t = t.next);
      while (t !== a);
    }
    l.action = null;
  }
  function Us(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Rs(l, t) {
    return t;
  }
  function Hs(l, t) {
    if (J) {
      var u = nl.formState;
      if (u !== null) {
        l: {
          var a = C;
          if (J) {
            if (Ul) {
              t: {
                for (var e = Ul, n = Tt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (((e = rt(e.nextSibling)), e === null)) {
                    e = null;
                    break t;
                  }
                }
                (n = e.data), (e = n === "F!" || n === "F" ? e : null);
              }
              if (e) {
                (Ul = rt(e.nextSibling)), (a = e.data === "F!");
                break l;
              }
            }
            Mu(a);
          }
          a = !1;
        }
        a && (t = u[0]);
      }
    }
    return (
      (u = Vl()),
      (u.memoizedState = u.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Rs,
        lastRenderedState: t,
      }),
      (u.queue = a),
      (u = Ws.bind(null, C, a)),
      (a.dispatch = u),
      (a = Hf(!1)),
      (n = Xf.bind(null, C, !1, a.queue)),
      (a = Vl()),
      (e = { state: t, dispatch: null, action: l, pending: null }),
      (a.queue = e),
      (u = iy.bind(null, C, e, n, u)),
      (e.dispatch = u),
      (a.memoizedState = l),
      [t, u, !1]
    );
  }
  function Ns(l) {
    var t = El();
    return ps(t, I, l);
  }
  function ps(l, t, u) {
    (t = Uf(l, t, Rs)[0]),
      (l = un(Bt)[0]),
      (t =
        typeof t == "object" && t !== null && typeof t.then == "function"
          ? Wa(t)
          : t);
    var a = El(),
      e = a.queue,
      n = e.dispatch;
    return (
      u !== a.memoizedState &&
        ((C.flags |= 2048),
        sa(9, sy.bind(null, e, u), { destroy: void 0 }, null)),
      [t, n, l]
    );
  }
  function sy(l, t) {
    l.action = t;
  }
  function qs(l) {
    var t = El(),
      u = I;
    if (u !== null) return ps(t, u, l);
    El(), (t = t.memoizedState), (u = El());
    var a = u.queue.dispatch;
    return (u.memoizedState = l), [t, a, !1];
  }
  function sa(l, t, u, a) {
    return (
      (l = { tag: l, create: t, inst: u, deps: a, next: null }),
      (t = C.updateQueue),
      t === null && ((t = ln()), (C.updateQueue = t)),
      (u = t.lastEffect),
      u === null
        ? (t.lastEffect = l.next = l)
        : ((a = u.next), (u.next = l), (l.next = a), (t.lastEffect = l)),
      l
    );
  }
  function Bs() {
    return El().memoizedState;
  }
  function an(l, t, u, a) {
    var e = Vl();
    (C.flags |= l),
      (e.memoizedState = sa(
        1 | t,
        u,
        { destroy: void 0 },
        a === void 0 ? null : a
      ));
  }
  function en(l, t, u, a) {
    var e = El();
    a = a === void 0 ? null : a;
    var n = e.memoizedState.inst;
    I !== null && a !== null && zf(a, I.memoizedState.deps)
      ? (e.memoizedState = sa(t, u, n, a))
      : ((C.flags |= l), (e.memoizedState = sa(1 | t, u, n, a)));
  }
  function Ys(l, t) {
    an(8390656, 8, l, t);
  }
  function pf(l, t) {
    en(2048, 8, l, t);
  }
  function Gs(l, t) {
    return en(4, 2, l, t);
  }
  function Xs(l, t) {
    return en(4, 4, l, t);
  }
  function Qs(l, t) {
    if (typeof t == "function") {
      l = l();
      var u = t(l);
      return function () {
        typeof u == "function" ? u() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function Cs(l, t, u) {
    (u = u != null ? u.concat([l]) : null), en(4, 4, Qs.bind(null, t, l), u);
  }
  function qf() {}
  function js(l, t) {
    var u = El();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    return t !== null && zf(t, a[1]) ? a[0] : ((u.memoizedState = [l, t]), l);
  }
  function Zs(l, t) {
    var u = El();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    if (t !== null && zf(t, a[1])) return a[0];
    if (((a = l()), Hu)) {
      kt(!0);
      try {
        l();
      } finally {
        kt(!1);
      }
    }
    return (u.memoizedState = [a, t]), a;
  }
  function Bf(l, t, u) {
    return u === void 0 || (uu & 1073741824) !== 0
      ? (l.memoizedState = t)
      : ((l.memoizedState = u), (l = V0()), (C.lanes |= l), (yu |= l), u);
  }
  function xs(l, t, u, a) {
    return wl(u, t)
      ? u
      : ea.current !== null
      ? ((l = Bf(l, u, a)), wl(l, t) || (_l = !0), l)
      : (uu & 42) === 0
      ? ((_l = !0), (l.memoizedState = u))
      : ((l = V0()), (C.lanes |= l), (yu |= l), t);
  }
  function Vs(l, t, u, a, e) {
    var n = O.p;
    O.p = n !== 0 && 8 > n ? n : 8;
    var f = N.T,
      c = {};
    (N.T = c), Xf(l, !1, t, u);
    try {
      var i = e(),
        v = N.S;
      if (
        (v !== null && v(c, i),
        i !== null && typeof i == "object" && typeof i.then == "function")
      ) {
        var g = ny(i, a);
        $a(l, t, g, Fl(l));
      } else $a(l, t, a, Fl(l));
    } catch (b) {
      $a(l, t, { then: function () {}, status: "rejected", reason: b }, Fl());
    } finally {
      (O.p = n), (N.T = f);
    }
  }
  function dy() {}
  function Yf(l, t, u, a) {
    if (l.tag !== 5) throw Error(h(476));
    var e = Ls(l).queue;
    Vs(
      l,
      e,
      t,
      L,
      u === null
        ? dy
        : function () {
            return Ks(l), u(a);
          }
    );
  }
  function Ls(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: L,
      baseState: L,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Bt,
        lastRenderedState: L,
      },
      next: null,
    };
    var u = {};
    return (
      (t.next = {
        memoizedState: u,
        baseState: u,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Bt,
          lastRenderedState: u,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function Ks(l) {
    var t = Ls(l).next.queue;
    $a(l, t, {}, Fl());
  }
  function Gf() {
    return pl(me);
  }
  function Js() {
    return El().memoizedState;
  }
  function ws() {
    return El().memoizedState;
  }
  function vy(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = Fl();
          l = fu(u);
          var a = cu(t, l, u);
          a !== null && (Xl(a, t, u), Pa(a, t, u)),
            (t = { cache: bf() }),
            (l.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function yy(l, t, u) {
    var a = Fl();
    (u = {
      lane: a,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      nn(l)
        ? $s(t, u)
        : ((u = yf(l, t, u, a)), u !== null && (Xl(u, l, a), ks(u, t, a)));
  }
  function Ws(l, t, u) {
    var a = Fl();
    $a(l, t, u, a);
  }
  function $a(l, t, u, a) {
    var e = {
      lane: a,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (nn(l)) $s(t, e);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var f = t.lastRenderedState,
            c = n(f, u);
          if (((e.hasEagerState = !0), (e.eagerState = c), wl(c, f)))
            return xe(l, t, e, 0), nl === null && Ze(), !1;
        } catch {
        } finally {
        }
      if (((u = yf(l, t, e, a)), u !== null))
        return Xl(u, l, a), ks(u, t, a), !0;
    }
    return !1;
  }
  function Xf(l, t, u, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Dc(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      nn(l))
    ) {
      if (t) throw Error(h(479));
    } else (t = yf(l, u, a, 2)), t !== null && Xl(t, l, 2);
  }
  function nn(l) {
    var t = l.alternate;
    return l === C || (t !== null && t === C);
  }
  function $s(l, t) {
    ca = Pe = !0;
    var u = l.pending;
    u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
      (l.pending = t);
  }
  function ks(l, t, u) {
    if ((u & 4194176) !== 0) {
      var a = t.lanes;
      (a &= l.pendingLanes), (u |= a), (t.lanes = u), ci(l, u);
    }
  }
  var At = {
    readContext: pl,
    use: tn,
    useCallback: rl,
    useContext: rl,
    useEffect: rl,
    useImperativeHandle: rl,
    useLayoutEffect: rl,
    useInsertionEffect: rl,
    useMemo: rl,
    useReducer: rl,
    useRef: rl,
    useState: rl,
    useDebugValue: rl,
    useDeferredValue: rl,
    useTransition: rl,
    useSyncExternalStore: rl,
    useId: rl,
  };
  (At.useCacheRefresh = rl),
    (At.useMemoCache = rl),
    (At.useHostTransitionStatus = rl),
    (At.useFormState = rl),
    (At.useActionState = rl),
    (At.useOptimistic = rl);
  var Nu = {
    readContext: pl,
    use: tn,
    useCallback: function (l, t) {
      return (Vl().memoizedState = [l, t === void 0 ? null : t]), l;
    },
    useContext: pl,
    useEffect: Ys,
    useImperativeHandle: function (l, t, u) {
      (u = u != null ? u.concat([l]) : null),
        an(4194308, 4, Qs.bind(null, t, l), u);
    },
    useLayoutEffect: function (l, t) {
      return an(4194308, 4, l, t);
    },
    useInsertionEffect: function (l, t) {
      an(4, 2, l, t);
    },
    useMemo: function (l, t) {
      var u = Vl();
      t = t === void 0 ? null : t;
      var a = l();
      if (Hu) {
        kt(!0);
        try {
          l();
        } finally {
          kt(!1);
        }
      }
      return (u.memoizedState = [a, t]), a;
    },
    useReducer: function (l, t, u) {
      var a = Vl();
      if (u !== void 0) {
        var e = u(t);
        if (Hu) {
          kt(!0);
          try {
            u(t);
          } finally {
            kt(!1);
          }
        }
      } else e = t;
      return (
        (a.memoizedState = a.baseState = e),
        (l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: l,
          lastRenderedState: e,
        }),
        (a.queue = l),
        (l = l.dispatch = yy.bind(null, C, l)),
        [a.memoizedState, l]
      );
    },
    useRef: function (l) {
      var t = Vl();
      return (l = { current: l }), (t.memoizedState = l);
    },
    useState: function (l) {
      l = Hf(l);
      var t = l.queue,
        u = Ws.bind(null, C, t);
      return (t.dispatch = u), [l.memoizedState, u];
    },
    useDebugValue: qf,
    useDeferredValue: function (l, t) {
      var u = Vl();
      return Bf(u, l, t);
    },
    useTransition: function () {
      var l = Hf(!1);
      return (
        (l = Vs.bind(null, C, l.queue, !0, !1)),
        (Vl().memoizedState = l),
        [!1, l]
      );
    },
    useSyncExternalStore: function (l, t, u) {
      var a = C,
        e = Vl();
      if (J) {
        if (u === void 0) throw Error(h(407));
        u = u();
      } else {
        if (((u = t()), nl === null)) throw Error(h(349));
        (K & 60) !== 0 || bs(a, t, u);
      }
      e.memoizedState = u;
      var n = { value: u, getSnapshot: t };
      return (
        (e.queue = n),
        Ys(Ts.bind(null, a, n, l), [l]),
        (a.flags |= 2048),
        sa(9, Es.bind(null, a, n, u, t), { destroy: void 0 }, null),
        u
      );
    },
    useId: function () {
      var l = Vl(),
        t = nl.identifierPrefix;
      if (J) {
        var u = pt,
          a = Nt;
        (u = (a & ~(1 << (32 - Jl(a) - 1))).toString(32) + u),
          (t = ":" + t + "R" + u),
          (u = Ie++),
          0 < u && (t += "H" + u.toString(32)),
          (t += ":");
      } else (u = fy++), (t = ":" + t + "r" + u.toString(32) + ":");
      return (l.memoizedState = t);
    },
    useCacheRefresh: function () {
      return (Vl().memoizedState = vy.bind(null, C));
    },
  };
  (Nu.useMemoCache = Mf),
    (Nu.useHostTransitionStatus = Gf),
    (Nu.useFormState = Hs),
    (Nu.useActionState = Hs),
    (Nu.useOptimistic = function (l) {
      var t = Vl();
      t.memoizedState = t.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (t.queue = u), (t = Xf.bind(null, C, !0, u)), (u.dispatch = t), [l, t]
      );
    });
  var au = {
    readContext: pl,
    use: tn,
    useCallback: js,
    useContext: pl,
    useEffect: pf,
    useImperativeHandle: Cs,
    useInsertionEffect: Gs,
    useLayoutEffect: Xs,
    useMemo: Zs,
    useReducer: un,
    useRef: Bs,
    useState: function () {
      return un(Bt);
    },
    useDebugValue: qf,
    useDeferredValue: function (l, t) {
      var u = El();
      return xs(u, I.memoizedState, l, t);
    },
    useTransition: function () {
      var l = un(Bt)[0],
        t = El().memoizedState;
      return [typeof l == "boolean" ? l : Wa(l), t];
    },
    useSyncExternalStore: Ss,
    useId: Js,
  };
  (au.useCacheRefresh = ws),
    (au.useMemoCache = Mf),
    (au.useHostTransitionStatus = Gf),
    (au.useFormState = Ns),
    (au.useActionState = Ns),
    (au.useOptimistic = function (l, t) {
      var u = El();
      return Os(u, I, l, t);
    });
  var pu = {
    readContext: pl,
    use: tn,
    useCallback: js,
    useContext: pl,
    useEffect: pf,
    useImperativeHandle: Cs,
    useInsertionEffect: Gs,
    useLayoutEffect: Xs,
    useMemo: Zs,
    useReducer: Rf,
    useRef: Bs,
    useState: function () {
      return Rf(Bt);
    },
    useDebugValue: qf,
    useDeferredValue: function (l, t) {
      var u = El();
      return I === null ? Bf(u, l, t) : xs(u, I.memoizedState, l, t);
    },
    useTransition: function () {
      var l = Rf(Bt)[0],
        t = El().memoizedState;
      return [typeof l == "boolean" ? l : Wa(l), t];
    },
    useSyncExternalStore: Ss,
    useId: Js,
  };
  (pu.useCacheRefresh = ws),
    (pu.useMemoCache = Mf),
    (pu.useHostTransitionStatus = Gf),
    (pu.useFormState = qs),
    (pu.useActionState = qs),
    (pu.useOptimistic = function (l, t) {
      var u = El();
      return I !== null
        ? Os(u, I, l, t)
        : ((u.baseState = l), [l, u.queue.dispatch]);
    });
  function Qf(l, t, u, a) {
    (t = l.memoizedState),
      (u = u(a, t)),
      (u = u == null ? t : F({}, t, u)),
      (l.memoizedState = u),
      l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var Cf = {
    isMounted: function (l) {
      return (l = l._reactInternals) ? B(l) === l : !1;
    },
    enqueueSetState: function (l, t, u) {
      l = l._reactInternals;
      var a = Fl(),
        e = fu(a);
      (e.payload = t),
        u != null && (e.callback = u),
        (t = cu(l, e, a)),
        t !== null && (Xl(t, l, a), Pa(t, l, a));
    },
    enqueueReplaceState: function (l, t, u) {
      l = l._reactInternals;
      var a = Fl(),
        e = fu(a);
      (e.tag = 1),
        (e.payload = t),
        u != null && (e.callback = u),
        (t = cu(l, e, a)),
        t !== null && (Xl(t, l, a), Pa(t, l, a));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var u = Fl(),
        a = fu(u);
      (a.tag = 2),
        t != null && (a.callback = t),
        (t = cu(l, a, u)),
        t !== null && (Xl(t, l, u), Pa(t, l, u));
    },
  };
  function Fs(l, t, u, a, e, n, f) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(a, n, f)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Ga(u, a) || !Ga(e, n)
        : !0
    );
  }
  function Ps(l, t, u, a) {
    (l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(u, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(u, a),
      t.state !== l && Cf.enqueueReplaceState(t, t.state, null);
  }
  function qu(l, t) {
    var u = t;
    if ("ref" in t) {
      u = {};
      for (var a in t) a !== "ref" && (u[a] = t[a]);
    }
    if ((l = l.defaultProps)) {
      u === t && (u = F({}, u));
      for (var e in l) u[e] === void 0 && (u[e] = l[e]);
    }
    return u;
  }
  var fn =
    typeof reportError == "function"
      ? reportError
      : function (l) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof l == "object" &&
                l !== null &&
                typeof l.message == "string"
                  ? String(l.message)
                  : String(l),
              error: l,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", l);
            return;
          }
          console.error(l);
        };
  function Is(l) {
    fn(l);
  }
  function l0(l) {
    console.error(l);
  }
  function t0(l) {
    fn(l);
  }
  function cn(l, t) {
    try {
      var u = l.onUncaughtError;
      u(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function u0(l, t, u) {
    try {
      var a = l.onCaughtError;
      a(u.value, {
        componentStack: u.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function jf(l, t, u) {
    return (
      (u = fu(u)),
      (u.tag = 3),
      (u.payload = { element: null }),
      (u.callback = function () {
        cn(l, t);
      }),
      u
    );
  }
  function a0(l) {
    return (l = fu(l)), (l.tag = 3), l;
  }
  function e0(l, t, u, a) {
    var e = u.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = a.value;
      (l.payload = function () {
        return e(n);
      }),
        (l.callback = function () {
          u0(t, u, a);
        });
    }
    var f = u.stateNode;
    f !== null &&
      typeof f.componentDidCatch == "function" &&
      (l.callback = function () {
        u0(t, u, a),
          typeof e != "function" &&
            (hu === null ? (hu = new Set([this])) : hu.add(this));
        var c = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: c !== null ? c : "",
        });
      });
  }
  function hy(l, t, u, a, e) {
    if (
      ((u.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = u.alternate),
        t !== null && Fa(t, u, e, !0),
        (u = ft.current),
        u !== null)
      ) {
        switch (u.tag) {
          case 13:
            return (
              zt === null ? Tc() : u.alternate === null && hl === 0 && (hl = 3),
              (u.flags &= -257),
              (u.flags |= 65536),
              (u.lanes = e),
              a === rf
                ? (u.flags |= 16384)
                : ((t = u.updateQueue),
                  t === null ? (u.updateQueue = new Set([a])) : t.add(a),
                  Ac(l, a, e)),
              !1
            );
          case 22:
            return (
              (u.flags |= 65536),
              a === rf
                ? (u.flags |= 16384)
                : ((t = u.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (u.updateQueue = t))
                    : ((u = t.retryQueue),
                      u === null ? (t.retryQueue = new Set([a])) : u.add(a)),
                  Ac(l, a, e)),
              !1
            );
        }
        throw Error(h(435, u.tag));
      }
      return Ac(l, a, e), Tc(), !1;
    }
    if (J)
      return (
        (t = ft.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = e),
            a !== mf && ((l = Error(h(422), { cause: a })), ja(at(l, u))))
          : (a !== mf && ((t = Error(h(423), { cause: a })), ja(at(t, u))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (e &= -e),
            (l.lanes |= e),
            (a = at(a, u)),
            (e = jf(l.stateNode, a, e)),
            tc(l, e),
            hl !== 4 && (hl = 2)),
        !1
      );
    var n = Error(h(520), { cause: a });
    if (
      ((n = at(n, u)),
      fe === null ? (fe = [n]) : fe.push(n),
      hl !== 4 && (hl = 2),
      t === null)
    )
      return !0;
    (a = at(a, u)), (u = t);
    do {
      switch (u.tag) {
        case 3:
          return (
            (u.flags |= 65536),
            (l = e & -e),
            (u.lanes |= l),
            (l = jf(u.stateNode, a, l)),
            tc(u, l),
            !1
          );
        case 1:
          if (
            ((t = u.type),
            (n = u.stateNode),
            (u.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (hu === null || !hu.has(n)))))
          )
            return (
              (u.flags |= 65536),
              (e &= -e),
              (u.lanes |= e),
              (e = a0(e)),
              e0(e, l, u, a),
              tc(u, e),
              !1
            );
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var n0 = Error(h(461)),
    _l = !1;
  function Rl(l, t, u, a) {
    t.child = l === null ? ds(t, null, u, a) : Uu(t, l.child, u, a);
  }
  function f0(l, t, u, a, e) {
    u = u.render;
    var n = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var c in a) c !== "ref" && (f[c] = a[c]);
    } else f = a;
    return (
      Yu(t),
      (a = Af(l, t, u, f, n, e)),
      (c = Of()),
      l !== null && !_l
        ? (_f(l, t, e), Yt(l, t, e))
        : (J && c && hf(t), (t.flags |= 1), Rl(l, t, a, e), t.child)
    );
  }
  function c0(l, t, u, a, e) {
    if (l === null) {
      var n = u.type;
      return typeof n == "function" &&
        !sc(n) &&
        n.defaultProps === void 0 &&
        u.compare === null
        ? ((t.tag = 15), (t.type = n), i0(l, t, n, a, e))
        : ((l = hn(u.type, null, a, t, t.mode, e)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((n = l.child), !$f(l, e))) {
      var f = n.memoizedProps;
      if (
        ((u = u.compare), (u = u !== null ? u : Ga), u(f, a) && l.ref === t.ref)
      )
        return Yt(l, t, e);
    }
    return (
      (t.flags |= 1),
      (l = vu(n, a)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function i0(l, t, u, a, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Ga(n, a) && l.ref === t.ref)
        if (((_l = !1), (t.pendingProps = a = n), $f(l, e)))
          (l.flags & 131072) !== 0 && (_l = !0);
        else return (t.lanes = l.lanes), Yt(l, t, e);
    }
    return Zf(l, t, u, a, e);
  }
  function s0(l, t, u) {
    var a = t.pendingProps,
      e = a.children,
      n = (t.stateNode._pendingVisibility & 2) !== 0,
      f = l !== null ? l.memoizedState : null;
    if ((ka(l, t), a.mode === "hidden" || n)) {
      if ((t.flags & 128) !== 0) {
        if (((a = f !== null ? f.baseLanes | u : u), l !== null)) {
          for (e = t.child = l.child, n = 0; e !== null; )
            (n = n | e.lanes | e.childLanes), (e = e.sibling);
          t.childLanes = n & ~a;
        } else (t.childLanes = 0), (t.child = null);
        return d0(l, t, a, u);
      }
      if ((u & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && Fe(t, f !== null ? f.cachePool : null),
          f !== null ? vs(t, f) : gf(),
          ys(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          d0(l, t, f !== null ? f.baseLanes | u : u, u)
        );
    } else
      f !== null
        ? (Fe(t, f.cachePool), vs(t, f), tu(), (t.memoizedState = null))
        : (l !== null && Fe(t, null), gf(), tu());
    return Rl(l, t, e, u), t.child;
  }
  function d0(l, t, u, a) {
    var e = Tf();
    return (
      (e = e === null ? null : { parent: Al._currentValue, pool: e }),
      (t.memoizedState = { baseLanes: u, cachePool: e }),
      l !== null && Fe(t, null),
      gf(),
      ys(t),
      l !== null && Fa(l, t, a, !0),
      null
    );
  }
  function ka(l, t) {
    var u = t.ref;
    if (u === null) l !== null && l.ref !== null && (t.flags |= 2097664);
    else {
      if (typeof u != "function" && typeof u != "object") throw Error(h(284));
      (l === null || l.ref !== u) && (t.flags |= 2097664);
    }
  }
  function Zf(l, t, u, a, e) {
    return (
      Yu(t),
      (u = Af(l, t, u, a, void 0, e)),
      (a = Of()),
      l !== null && !_l
        ? (_f(l, t, e), Yt(l, t, e))
        : (J && a && hf(t), (t.flags |= 1), Rl(l, t, u, e), t.child)
    );
  }
  function v0(l, t, u, a, e, n) {
    return (
      Yu(t),
      (t.updateQueue = null),
      (u = gs(t, a, u, e)),
      rs(l),
      (a = Of()),
      l !== null && !_l
        ? (_f(l, t, n), Yt(l, t, n))
        : (J && a && hf(t), (t.flags |= 1), Rl(l, t, u, n), t.child)
    );
  }
  function y0(l, t, u, a, e) {
    if ((Yu(t), t.stateNode === null)) {
      var n = la,
        f = u.contextType;
      typeof f == "object" && f !== null && (n = pl(f)),
        (n = new u(a, n)),
        (t.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = Cf),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = a),
        (n.state = t.memoizedState),
        (n.refs = {}),
        If(t),
        (f = u.contextType),
        (n.context = typeof f == "object" && f !== null ? pl(f) : la),
        (n.state = t.memoizedState),
        (f = u.getDerivedStateFromProps),
        typeof f == "function" && (Qf(t, u, f, a), (n.state = t.memoizedState)),
        typeof u.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((f = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          f !== n.state && Cf.enqueueReplaceState(n, n.state, null),
          le(t, a, n, e),
          Ia(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0);
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps,
        i = qu(u, c);
      n.props = i;
      var v = n.context,
        g = u.contextType;
      (f = la), typeof g == "object" && g !== null && (f = pl(g));
      var b = u.getDerivedStateFromProps;
      (g =
        typeof b == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (c = t.pendingProps !== c),
        g ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c || v !== f) && Ps(t, n, a, f)),
        (nu = !1);
      var m = t.memoizedState;
      (n.state = m),
        le(t, a, n, e),
        Ia(),
        (v = t.memoizedState),
        c || m !== v || nu
          ? (typeof b == "function" && (Qf(t, u, b, a), (v = t.memoizedState)),
            (i = nu || Fs(t, u, i, a, m, v, f))
              ? (g ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = v)),
            (n.props = a),
            (n.state = v),
            (n.context = f),
            (a = i))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1));
    } else {
      (n = t.stateNode),
        lc(l, t),
        (f = t.memoizedProps),
        (g = qu(u, f)),
        (n.props = g),
        (b = t.pendingProps),
        (m = n.context),
        (v = u.contextType),
        (i = la),
        typeof v == "object" && v !== null && (i = pl(v)),
        (c = u.getDerivedStateFromProps),
        (v =
          typeof c == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((f !== b || m !== i) && Ps(t, n, a, i)),
        (nu = !1),
        (m = t.memoizedState),
        (n.state = m),
        le(t, a, n, e),
        Ia();
      var r = t.memoizedState;
      f !== b ||
      m !== r ||
      nu ||
      (l !== null && l.dependencies !== null && sn(l.dependencies))
        ? (typeof c == "function" && (Qf(t, u, c, a), (r = t.memoizedState)),
          (g =
            nu ||
            Fs(t, u, g, a, m, r, i) ||
            (l !== null && l.dependencies !== null && sn(l.dependencies)))
            ? (v ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(a, r, i),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(a, r, i)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (f === l.memoizedProps && m === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (f === l.memoizedProps && m === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = r)),
          (n.props = a),
          (n.state = r),
          (n.context = i),
          (a = g))
        : (typeof n.componentDidUpdate != "function" ||
            (f === l.memoizedProps && m === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (f === l.memoizedProps && m === l.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (n = a),
      ka(l, t),
      (a = (t.flags & 128) !== 0),
      n || a
        ? ((n = t.stateNode),
          (u =
            a && typeof u.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (t.flags |= 1),
          l !== null && a
            ? ((t.child = Uu(t, l.child, null, e)),
              (t.child = Uu(t, null, u, e)))
            : Rl(l, t, u, e),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = Yt(l, t, e)),
      l
    );
  }
  function h0(l, t, u, a) {
    return Ca(), (t.flags |= 256), Rl(l, t, u, a), t.child;
  }
  var xf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Vf(l) {
    return { baseLanes: l, cachePool: ms() };
  }
  function Lf(l, t, u) {
    return (l = l !== null ? l.childLanes & ~u : 0), t && (l |= dt), l;
  }
  function o0(l, t, u) {
    var a = t.pendingProps,
      e = !1,
      n = (t.flags & 128) !== 0,
      f;
    if (
      ((f = n) ||
        (f =
          l !== null && l.memoizedState === null ? !1 : (zl.current & 2) !== 0),
      f && ((e = !0), (t.flags &= -129)),
      (f = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (J) {
        if ((e ? lu(t) : tu(), J)) {
          var c = Ul,
            i;
          if ((i = c)) {
            l: {
              for (i = c, c = Tt; i.nodeType !== 8; ) {
                if (!c) {
                  c = null;
                  break l;
                }
                if (((i = rt(i.nextSibling)), i === null)) {
                  c = null;
                  break l;
                }
              }
              c = i;
            }
            c !== null
              ? ((t.memoizedState = {
                  dehydrated: c,
                  treeContext: _u !== null ? { id: Nt, overflow: pt } : null,
                  retryLane: 536870912,
                }),
                (i = st(18, null, null, 0)),
                (i.stateNode = c),
                (i.return = t),
                (t.child = i),
                (Gl = t),
                (Ul = null),
                (i = !0))
              : (i = !1);
          }
          i || Mu(t);
        }
        if (
          ((c = t.memoizedState),
          c !== null && ((c = c.dehydrated), c !== null))
        )
          return c.data === "$!" ? (t.lanes = 16) : (t.lanes = 536870912), null;
        qt(t);
      }
      return (
        (c = a.children),
        (a = a.fallback),
        e
          ? (tu(),
            (e = t.mode),
            (c = Jf({ mode: "hidden", children: c }, e)),
            (a = Xu(a, e, u, null)),
            (c.return = t),
            (a.return = t),
            (c.sibling = a),
            (t.child = c),
            (e = t.child),
            (e.memoizedState = Vf(u)),
            (e.childLanes = Lf(l, f, u)),
            (t.memoizedState = xf),
            a)
          : (lu(t), Kf(t, c))
      );
    }
    if (
      ((i = l.memoizedState), i !== null && ((c = i.dehydrated), c !== null))
    ) {
      if (n)
        t.flags & 256
          ? (lu(t), (t.flags &= -257), (t = wf(l, t, u)))
          : t.memoizedState !== null
          ? (tu(), (t.child = l.child), (t.flags |= 128), (t = null))
          : (tu(),
            (e = a.fallback),
            (c = t.mode),
            (a = Jf({ mode: "visible", children: a.children }, c)),
            (e = Xu(e, c, u, null)),
            (e.flags |= 2),
            (a.return = t),
            (e.return = t),
            (a.sibling = e),
            (t.child = a),
            Uu(t, l.child, null, u),
            (a = t.child),
            (a.memoizedState = Vf(u)),
            (a.childLanes = Lf(l, f, u)),
            (t.memoizedState = xf),
            (t = e));
      else if ((lu(t), c.data === "$!")) {
        if (((f = c.nextSibling && c.nextSibling.dataset), f)) var v = f.dgst;
        (f = v),
          (a = Error(h(419))),
          (a.stack = ""),
          (a.digest = f),
          ja({ value: a, source: null, stack: null }),
          (t = wf(l, t, u));
      } else if (
        (_l || Fa(l, t, u, !1), (f = (u & l.childLanes) !== 0), _l || f)
      ) {
        if (((f = nl), f !== null)) {
          if (((a = u & -u), (a & 42) !== 0)) a = 1;
          else
            switch (a) {
              case 2:
                a = 1;
                break;
              case 8:
                a = 4;
                break;
              case 32:
                a = 16;
                break;
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
                a = 64;
                break;
              case 268435456:
                a = 134217728;
                break;
              default:
                a = 0;
            }
          if (
            ((a = (a & (f.suspendedLanes | u)) !== 0 ? 0 : a),
            a !== 0 && a !== i.retryLane)
          )
            throw ((i.retryLane = a), It(l, a), Xl(f, l, a), n0);
        }
        c.data === "$?" || Tc(), (t = wf(l, t, u));
      } else
        c.data === "$?"
          ? ((t.flags |= 128),
            (t.child = l.child),
            (t = Uy.bind(null, l)),
            (c._reactRetry = t),
            (t = null))
          : ((l = i.treeContext),
            (Ul = rt(c.nextSibling)),
            (Gl = t),
            (J = !0),
            (ot = null),
            (Tt = !1),
            l !== null &&
              ((et[nt++] = Nt),
              (et[nt++] = pt),
              (et[nt++] = _u),
              (Nt = l.id),
              (pt = l.overflow),
              (_u = t)),
            (t = Kf(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return e
      ? (tu(),
        (e = a.fallback),
        (c = t.mode),
        (i = l.child),
        (v = i.sibling),
        (a = vu(i, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = i.subtreeFlags & 31457280),
        v !== null ? (e = vu(v, e)) : ((e = Xu(e, c, u, null)), (e.flags |= 2)),
        (e.return = t),
        (a.return = t),
        (a.sibling = e),
        (t.child = a),
        (a = e),
        (e = t.child),
        (c = l.child.memoizedState),
        c === null
          ? (c = Vf(u))
          : ((i = c.cachePool),
            i !== null
              ? ((v = Al._currentValue),
                (i = i.parent !== v ? { parent: v, pool: v } : i))
              : (i = ms()),
            (c = { baseLanes: c.baseLanes | u, cachePool: i })),
        (e.memoizedState = c),
        (e.childLanes = Lf(l, f, u)),
        (t.memoizedState = xf),
        a)
      : (lu(t),
        (u = l.child),
        (l = u.sibling),
        (u = vu(u, { mode: "visible", children: a.children })),
        (u.return = t),
        (u.sibling = null),
        l !== null &&
          ((f = t.deletions),
          f === null ? ((t.deletions = [l]), (t.flags |= 16)) : f.push(l)),
        (t.child = u),
        (t.memoizedState = null),
        u);
  }
  function Kf(l, t) {
    return (
      (t = Jf({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function Jf(l, t) {
    return j0(l, t, 0, null);
  }
  function wf(l, t, u) {
    return (
      Uu(t, l.child, null, u),
      (l = Kf(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function m0(l, t, u) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), Ff(l.return, t, u);
  }
  function Wf(l, t, u, a, e) {
    var n = l.memoizedState;
    n === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: u,
          tailMode: e,
        })
      : ((n.isBackwards = t),
        (n.rendering = null),
        (n.renderingStartTime = 0),
        (n.last = a),
        (n.tail = u),
        (n.tailMode = e));
  }
  function r0(l, t, u) {
    var a = t.pendingProps,
      e = a.revealOrder,
      n = a.tail;
    if ((Rl(l, t, a.children, u), (a = zl.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (t.flags |= 128);
    else {
      if (l !== null && (l.flags & 128) !== 0)
        l: for (l = t.child; l !== null; ) {
          if (l.tag === 13) l.memoizedState !== null && m0(l, u, t);
          else if (l.tag === 19) m0(l, u, t);
          else if (l.child !== null) {
            (l.child.return = l), (l = l.child);
            continue;
          }
          if (l === t) break l;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === t) break l;
            l = l.return;
          }
          (l.sibling.return = l.return), (l = l.sibling);
        }
      a &= 1;
    }
    switch ((sl(zl, a), e)) {
      case "forwards":
        for (u = t.child, e = null; u !== null; )
          (l = u.alternate),
            l !== null && ke(l) === null && (e = u),
            (u = u.sibling);
        (u = e),
          u === null
            ? ((e = t.child), (t.child = null))
            : ((e = u.sibling), (u.sibling = null)),
          Wf(t, !1, e, u, n);
        break;
      case "backwards":
        for (u = null, e = t.child, t.child = null; e !== null; ) {
          if (((l = e.alternate), l !== null && ke(l) === null)) {
            t.child = e;
            break;
          }
          (l = e.sibling), (e.sibling = u), (u = e), (e = l);
        }
        Wf(t, !0, u, null, n);
        break;
      case "together":
        Wf(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Yt(l, t, u) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (yu |= t.lanes),
      (u & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((Fa(l, t, u, !1), (u & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(h(153));
    if (t.child !== null) {
      for (
        l = t.child, u = vu(l, l.pendingProps), t.child = u, u.return = t;
        l.sibling !== null;

      )
        (l = l.sibling),
          (u = u.sibling = vu(l, l.pendingProps)),
          (u.return = t);
      u.sibling = null;
    }
    return t.child;
  }
  function $f(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && sn(l)));
  }
  function oy(l, t, u) {
    switch (t.tag) {
      case 3:
        Oe(t, t.stateNode.containerInfo),
          eu(t, Al, l.memoizedState.cache),
          Ca();
        break;
      case 27:
      case 5:
        Qn(t);
        break;
      case 4:
        Oe(t, t.stateNode.containerInfo);
        break;
      case 10:
        eu(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (lu(t), (t.flags |= 128), null)
            : (u & t.child.childLanes) !== 0
            ? o0(l, t, u)
            : (lu(t), (l = Yt(l, t, u)), l !== null ? l.sibling : null);
        lu(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (
          ((a = (u & t.childLanes) !== 0),
          a || (Fa(l, t, u, !1), (a = (u & t.childLanes) !== 0)),
          e)
        ) {
          if (a) return r0(l, t, u);
          t.flags |= 128;
        }
        if (
          ((e = t.memoizedState),
          e !== null &&
            ((e.rendering = null), (e.tail = null), (e.lastEffect = null)),
          sl(zl, zl.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), s0(l, t, u);
      case 24:
        eu(t, Al, l.memoizedState.cache);
    }
    return Yt(l, t, u);
  }
  function g0(l, t, u) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) _l = !0;
      else {
        if (!$f(l, u) && (t.flags & 128) === 0) return (_l = !1), oy(l, t, u);
        _l = (l.flags & 131072) !== 0;
      }
    else (_l = !1), J && (t.flags & 1048576) !== 0 && ts(t, Ke, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          l = t.pendingProps;
          var a = t.elementType,
            e = a._init;
          if (((a = e(a._payload)), (t.type = a), typeof a == "function"))
            sc(a)
              ? ((l = qu(a, l)), (t.tag = 1), (t = y0(null, t, a, l, u)))
              : ((t.tag = 0), (t = Zf(null, t, a, l, u)));
          else {
            if (a != null) {
              if (((e = a.$$typeof), e === Ql)) {
                (t.tag = 11), (t = f0(null, t, a, l, u));
                break l;
              } else if (e === Dt) {
                (t.tag = 14), (t = c0(null, t, a, l, u));
                break l;
              }
            }
            throw ((t = Wt(a) || a), Error(h(306, t, "")));
          }
        }
        return t;
      case 0:
        return Zf(l, t, t.type, t.pendingProps, u);
      case 1:
        return (a = t.type), (e = qu(a, t.pendingProps)), y0(l, t, a, e, u);
      case 3:
        l: {
          if ((Oe(t, t.stateNode.containerInfo), l === null))
            throw Error(h(387));
          var n = t.pendingProps;
          (e = t.memoizedState), (a = e.element), lc(l, t), le(t, n, null, u);
          var f = t.memoizedState;
          if (
            ((n = f.cache),
            eu(t, Al, n),
            n !== e.cache && Pf(t, [Al], u, !0),
            Ia(),
            (n = f.element),
            e.isDehydrated)
          )
            if (
              ((e = { element: n, isDehydrated: !1, cache: f.cache }),
              (t.updateQueue.baseState = e),
              (t.memoizedState = e),
              t.flags & 256)
            ) {
              t = h0(l, t, n, u);
              break l;
            } else if (n !== a) {
              (a = at(Error(h(424)), t)), ja(a), (t = h0(l, t, n, u));
              break l;
            } else
              for (
                Ul = rt(t.stateNode.containerInfo.firstChild),
                  Gl = t,
                  J = !0,
                  ot = null,
                  Tt = !0,
                  u = ds(t, null, n, u),
                  t.child = u;
                u;

              )
                (u.flags = (u.flags & -3) | 4096), (u = u.sibling);
          else {
            if ((Ca(), n === a)) {
              t = Yt(l, t, u);
              break l;
            }
            Rl(l, t, n, u);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          ka(l, t),
          l === null
            ? (u = Ed(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = u)
              : J ||
                ((u = t.type),
                (l = t.pendingProps),
                (a = _n($t.current).createElement(u)),
                (a[Nl] = t),
                (a[Zl] = l),
                Hl(a, u, l),
                Ol(a),
                (t.stateNode = a))
            : (t.memoizedState = Ed(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState
              )),
          null
        );
      case 27:
        return (
          Qn(t),
          l === null &&
            J &&
            ((a = t.stateNode = gd(t.type, t.pendingProps, $t.current)),
            (Gl = t),
            (Tt = !0),
            (Ul = rt(a.firstChild))),
          (a = t.pendingProps.children),
          l !== null || J ? Rl(l, t, a, u) : (t.child = Uu(t, null, a, u)),
          ka(l, t),
          t.child
        );
      case 5:
        return (
          l === null &&
            J &&
            ((e = a = Ul) &&
              ((a = Ly(a, t.type, t.pendingProps, Tt)),
              a !== null
                ? ((t.stateNode = a),
                  (Gl = t),
                  (Ul = rt(a.firstChild)),
                  (Tt = !1),
                  (e = !0))
                : (e = !1)),
            e || Mu(t)),
          Qn(t),
          (e = t.type),
          (n = t.pendingProps),
          (f = l !== null ? l.memoizedProps : null),
          (a = n.children),
          Yc(e, n) ? (a = null) : f !== null && Yc(e, f) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((e = Af(l, t, cy, null, null, u)), (me._currentValue = e)),
          ka(l, t),
          Rl(l, t, a, u),
          t.child
        );
      case 6:
        return (
          l === null &&
            J &&
            ((l = u = Ul) &&
              ((u = Ky(u, t.pendingProps, Tt)),
              u !== null
                ? ((t.stateNode = u), (Gl = t), (Ul = null), (l = !0))
                : (l = !1)),
            l || Mu(t)),
          null
        );
      case 13:
        return o0(l, t, u);
      case 4:
        return (
          Oe(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          l === null ? (t.child = Uu(t, null, a, u)) : Rl(l, t, a, u),
          t.child
        );
      case 11:
        return f0(l, t, t.type, t.pendingProps, u);
      case 7:
        return Rl(l, t, t.pendingProps, u), t.child;
      case 8:
        return Rl(l, t, t.pendingProps.children, u), t.child;
      case 12:
        return Rl(l, t, t.pendingProps.children, u), t.child;
      case 10:
        return (
          (a = t.pendingProps),
          eu(t, t.type, a.value),
          Rl(l, t, a.children, u),
          t.child
        );
      case 9:
        return (
          (e = t.type._context),
          (a = t.pendingProps.children),
          Yu(t),
          (e = pl(e)),
          (a = a(e)),
          (t.flags |= 1),
          Rl(l, t, a, u),
          t.child
        );
      case 14:
        return c0(l, t, t.type, t.pendingProps, u);
      case 15:
        return i0(l, t, t.type, t.pendingProps, u);
      case 19:
        return r0(l, t, u);
      case 22:
        return s0(l, t, u);
      case 24:
        return (
          Yu(t),
          (a = pl(Al)),
          l === null
            ? ((e = Tf()),
              e === null &&
                ((e = nl),
                (n = bf()),
                (e.pooledCache = n),
                n.refCount++,
                n !== null && (e.pooledCacheLanes |= u),
                (e = n)),
              (t.memoizedState = { parent: a, cache: e }),
              If(t),
              eu(t, Al, e))
            : ((l.lanes & u) !== 0 && (lc(l, t), le(t, null, null, u), Ia()),
              (e = l.memoizedState),
              (n = t.memoizedState),
              e.parent !== a
                ? ((e = { parent: a, cache: a }),
                  (t.memoizedState = e),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = e),
                  eu(t, Al, a))
                : ((a = n.cache),
                  eu(t, Al, a),
                  a !== e.cache && Pf(t, [Al], u, !0))),
          Rl(l, t, t.pendingProps.children, u),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(h(156, t.tag));
  }
  var kf = P(null),
    Bu = null,
    Gt = null;
  function eu(l, t, u) {
    sl(kf, t._currentValue), (t._currentValue = u);
  }
  function Xt(l) {
    (l._currentValue = kf.current), Sl(kf);
  }
  function Ff(l, t, u) {
    for (; l !== null; ) {
      var a = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        l === u)
      )
        break;
      l = l.return;
    }
  }
  function Pf(l, t, u, a) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = e;
          for (var i = 0; i < t.length; i++)
            if (c.context === t[i]) {
              (n.lanes |= u),
                (c = n.alternate),
                c !== null && (c.lanes |= u),
                Ff(n.return, u, l),
                a || (f = null);
              break l;
            }
          n = c.next;
        }
      } else if (e.tag === 18) {
        if (((f = e.return), f === null)) throw Error(h(341));
        (f.lanes |= u),
          (n = f.alternate),
          n !== null && (n.lanes |= u),
          Ff(f, u, l),
          (f = null);
      } else f = e.child;
      if (f !== null) f.return = e;
      else
        for (f = e; f !== null; ) {
          if (f === l) {
            f = null;
            break;
          }
          if (((e = f.sibling), e !== null)) {
            (e.return = f.return), (f = e);
            break;
          }
          f = f.return;
        }
      e = f;
    }
  }
  function Fa(l, t, u, a) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(h(387));
        if (((f = f.memoizedProps), f !== null)) {
          var c = e.type;
          wl(e.pendingProps.value, f.value) ||
            (l !== null ? l.push(c) : (l = [c]));
        }
      } else if (e === Ae.current) {
        if (((f = e.alternate), f === null)) throw Error(h(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState &&
          (l !== null ? l.push(me) : (l = [me]));
      }
      e = e.return;
    }
    l !== null && Pf(t, l, u, a), (t.flags |= 262144);
  }
  function sn(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!wl(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Yu(l) {
    (Bu = l),
      (Gt = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null);
  }
  function pl(l) {
    return S0(Bu, l);
  }
  function dn(l, t) {
    return Bu === null && Yu(l), S0(l, t);
  }
  function S0(l, t) {
    var u = t._currentValue;
    if (((t = { context: t, memoizedValue: u, next: null }), Gt === null)) {
      if (l === null) throw Error(h(308));
      (Gt = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288);
    } else Gt = Gt.next = t;
    return u;
  }
  var nu = !1;
  function If(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function lc(l, t) {
    (l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        });
  }
  function fu(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function cu(l, t, u) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (vl & 2) !== 0)) {
      var e = a.pending;
      return (
        e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
        (a.pending = t),
        (t = Ve(l)),
        Ii(l, null, u),
        t
      );
    }
    return xe(l, a, t, u), Ve(l);
  }
  function Pa(l, t, u) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (u & 4194176) !== 0))
    ) {
      var a = t.lanes;
      (a &= l.pendingLanes), (u |= a), (t.lanes = u), ci(l, u);
    }
  }
  function tc(l, t) {
    var u = l.updateQueue,
      a = l.alternate;
    if (a !== null && ((a = a.updateQueue), u === a)) {
      var e = null,
        n = null;
      if (((u = u.firstBaseUpdate), u !== null)) {
        do {
          var f = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null,
          };
          n === null ? (e = n = f) : (n = n.next = f), (u = u.next);
        } while (u !== null);
        n === null ? (e = n = t) : (n = n.next = t);
      } else e = n = t;
      (u = {
        baseState: a.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (l.updateQueue = u);
      return;
    }
    (l = u.lastBaseUpdate),
      l === null ? (u.firstBaseUpdate = t) : (l.next = t),
      (u.lastBaseUpdate = t);
  }
  var uc = !1;
  function Ia() {
    if (uc) {
      var l = fa;
      if (l !== null) throw l;
    }
  }
  function le(l, t, u, a) {
    uc = !1;
    var e = l.updateQueue;
    nu = !1;
    var n = e.firstBaseUpdate,
      f = e.lastBaseUpdate,
      c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var i = c,
        v = i.next;
      (i.next = null), f === null ? (n = v) : (f.next = v), (f = i);
      var g = l.alternate;
      g !== null &&
        ((g = g.updateQueue),
        (c = g.lastBaseUpdate),
        c !== f &&
          (c === null ? (g.firstBaseUpdate = v) : (c.next = v),
          (g.lastBaseUpdate = i)));
    }
    if (n !== null) {
      var b = e.baseState;
      (f = 0), (g = v = i = null), (c = n);
      do {
        var m = c.lane & -536870913,
          r = m !== c.lane;
        if (r ? (K & m) === m : (a & m) === m) {
          m !== 0 && m === na && (uc = !0),
            g !== null &&
              (g = g.next =
                {
                  lane: 0,
                  tag: c.tag,
                  payload: c.payload,
                  callback: null,
                  next: null,
                });
          l: {
            var D = l,
              Y = c;
            m = t;
            var ol = u;
            switch (Y.tag) {
              case 1:
                if (((D = Y.payload), typeof D == "function")) {
                  b = D.call(ol, b, m);
                  break l;
                }
                b = D;
                break l;
              case 3:
                D.flags = (D.flags & -65537) | 128;
              case 0:
                if (
                  ((D = Y.payload),
                  (m = typeof D == "function" ? D.call(ol, b, m) : D),
                  m == null)
                )
                  break l;
                b = F({}, b, m);
                break l;
              case 2:
                nu = !0;
            }
          }
          (m = c.callback),
            m !== null &&
              ((l.flags |= 64),
              r && (l.flags |= 8192),
              (r = e.callbacks),
              r === null ? (e.callbacks = [m]) : r.push(m));
        } else
          (r = {
            lane: m,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }),
            g === null ? ((v = g = r), (i = b)) : (g = g.next = r),
            (f |= m);
        if (((c = c.next), c === null)) {
          if (((c = e.shared.pending), c === null)) break;
          (r = c),
            (c = r.next),
            (r.next = null),
            (e.lastBaseUpdate = r),
            (e.shared.pending = null);
        }
      } while (!0);
      g === null && (i = b),
        (e.baseState = i),
        (e.firstBaseUpdate = v),
        (e.lastBaseUpdate = g),
        n === null && (e.shared.lanes = 0),
        (yu |= f),
        (l.lanes = f),
        (l.memoizedState = b);
    }
  }
  function b0(l, t) {
    if (typeof l != "function") throw Error(h(191, l));
    l.call(t);
  }
  function E0(l, t) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++) b0(u[l], t);
  }
  function te(l, t) {
    try {
      var u = t.updateQueue,
        a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var e = a.next;
        u = e;
        do {
          if ((u.tag & l) === l) {
            a = void 0;
            var n = u.create,
              f = u.inst;
            (a = n()), (f.destroy = a);
          }
          u = u.next;
        } while (u !== e);
      }
    } catch (c) {
      tl(t, t.return, c);
    }
  }
  function iu(l, t, u) {
    try {
      var a = t.updateQueue,
        e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var f = a.inst,
              c = f.destroy;
            if (c !== void 0) {
              (f.destroy = void 0), (e = t);
              var i = u;
              try {
                c();
              } catch (v) {
                tl(e, i, v);
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (v) {
      tl(t, t.return, v);
    }
  }
  function T0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        E0(t, u);
      } catch (a) {
        tl(l, l.return, a);
      }
    }
  }
  function z0(l, t, u) {
    (u.props = qu(l.type, l.memoizedProps)), (u.state = l.memoizedState);
    try {
      u.componentWillUnmount();
    } catch (a) {
      tl(l, t, a);
    }
  }
  function Gu(l, t) {
    try {
      var u = l.ref;
      if (u !== null) {
        var a = l.stateNode;
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var e = a;
            break;
          default:
            e = a;
        }
        typeof u == "function" ? (l.refCleanup = u(e)) : (u.current = e);
      }
    } catch (n) {
      tl(l, t, n);
    }
  }
  function Wl(l, t) {
    var u = l.ref,
      a = l.refCleanup;
    if (u !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (e) {
          tl(l, t, e);
        } finally {
          (l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (e) {
          tl(l, t, e);
        }
      else u.current = null;
  }
  function A0(l) {
    var t = l.type,
      u = l.memoizedProps,
      a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && a.focus();
          break l;
        case "img":
          u.src ? (a.src = u.src) : u.srcSet && (a.srcset = u.srcSet);
      }
    } catch (e) {
      tl(l, l.return, e);
    }
  }
  function O0(l, t, u) {
    try {
      var a = l.stateNode;
      Cy(a, l.type, u, t), (a[Zl] = t);
    } catch (e) {
      tl(l, l.return, e);
    }
  }
  function _0(l) {
    return (
      l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 || l.tag === 4
    );
  }
  function ac(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || _0(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 27 && l.tag !== 18;

      ) {
        if (l.flags & 2 || l.child === null || l.tag === 4) continue l;
        (l.child.return = l), (l = l.child);
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function ec(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      (l = l.stateNode),
        t
          ? u.nodeType === 8
            ? u.parentNode.insertBefore(l, t)
            : u.insertBefore(l, t)
          : (u.nodeType === 8
              ? ((t = u.parentNode), t.insertBefore(l, u))
              : ((t = u), t.appendChild(l)),
            (u = u._reactRootContainer),
            u != null || t.onclick !== null || (t.onclick = On));
    else if (a !== 4 && a !== 27 && ((l = l.child), l !== null))
      for (ec(l, t, u), l = l.sibling; l !== null; )
        ec(l, t, u), (l = l.sibling);
  }
  function vn(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      (l = l.stateNode), t ? u.insertBefore(l, t) : u.appendChild(l);
    else if (a !== 4 && a !== 27 && ((l = l.child), l !== null))
      for (vn(l, t, u), l = l.sibling; l !== null; )
        vn(l, t, u), (l = l.sibling);
  }
  var Qt = !1,
    yl = !1,
    nc = !1,
    D0 = typeof WeakSet == "function" ? WeakSet : Set,
    Dl = null,
    M0 = !1;
  function my(l, t) {
    if (((l = l.containerInfo), (qc = Nn), (l = Li(l)), ff(l))) {
      if ("selectionStart" in l)
        var u = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          u = ((u = l.ownerDocument) && u.defaultView) || window;
          var a = u.getSelection && u.getSelection();
          if (a && a.rangeCount !== 0) {
            u = a.anchorNode;
            var e = a.anchorOffset,
              n = a.focusNode;
            a = a.focusOffset;
            try {
              u.nodeType, n.nodeType;
            } catch {
              u = null;
              break l;
            }
            var f = 0,
              c = -1,
              i = -1,
              v = 0,
              g = 0,
              b = l,
              m = null;
            t: for (;;) {
              for (
                var r;
                b !== u || (e !== 0 && b.nodeType !== 3) || (c = f + e),
                  b !== n || (a !== 0 && b.nodeType !== 3) || (i = f + a),
                  b.nodeType === 3 && (f += b.nodeValue.length),
                  (r = b.firstChild) !== null;

              )
                (m = b), (b = r);
              for (;;) {
                if (b === l) break t;
                if (
                  (m === u && ++v === e && (c = f),
                  m === n && ++g === a && (i = f),
                  (r = b.nextSibling) !== null)
                )
                  break;
                (b = m), (m = b.parentNode);
              }
              b = r;
            }
            u = c === -1 || i === -1 ? null : { start: c, end: i };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (
      Bc = { focusedElem: l, selectionRange: u }, Nn = !1, Dl = t;
      Dl !== null;

    )
      if (
        ((t = Dl), (l = t.child), (t.subtreeFlags & 1028) !== 0 && l !== null)
      )
        (l.return = t), (Dl = l);
      else
        for (; Dl !== null; ) {
          switch (((t = Dl), (n = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                (l = void 0),
                  (u = t),
                  (e = n.memoizedProps),
                  (n = n.memoizedState),
                  (a = u.stateNode);
                try {
                  var D = qu(u.type, e, u.elementType === u.type);
                  (l = a.getSnapshotBeforeUpdate(D, n)),
                    (a.__reactInternalSnapshotBeforeUpdate = l);
                } catch (Y) {
                  tl(u, u.return, Y);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (u = l.nodeType), u === 9)
                )
                  Qc(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Qc(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(h(163));
          }
          if (((l = t.sibling), l !== null)) {
            (l.return = t.return), (Dl = l);
            break;
          }
          Dl = t.return;
        }
    return (D = M0), (M0 = !1), D;
  }
  function U0(l, t, u) {
    var a = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        jt(l, u), a & 4 && te(5, u);
        break;
      case 1:
        if ((jt(l, u), a & 4))
          if (((l = u.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (c) {
              tl(u, u.return, c);
            }
          else {
            var e = qu(u.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(e, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              tl(u, u.return, c);
            }
          }
        a & 64 && T0(u), a & 512 && Gu(u, u.return);
        break;
      case 3:
        if ((jt(l, u), a & 64 && ((a = u.updateQueue), a !== null))) {
          if (((l = null), u.child !== null))
            switch (u.child.tag) {
              case 27:
              case 5:
                l = u.child.stateNode;
                break;
              case 1:
                l = u.child.stateNode;
            }
          try {
            E0(a, l);
          } catch (c) {
            tl(u, u.return, c);
          }
        }
        break;
      case 26:
        jt(l, u), a & 512 && Gu(u, u.return);
        break;
      case 27:
      case 5:
        jt(l, u), t === null && a & 4 && A0(u), a & 512 && Gu(u, u.return);
        break;
      case 12:
        jt(l, u);
        break;
      case 13:
        jt(l, u), a & 4 && N0(l, u);
        break;
      case 22:
        if (((e = u.memoizedState !== null || Qt), !e)) {
          t = (t !== null && t.memoizedState !== null) || yl;
          var n = Qt,
            f = yl;
          (Qt = e),
            (yl = t) && !f ? su(l, u, (u.subtreeFlags & 8772) !== 0) : jt(l, u),
            (Qt = n),
            (yl = f);
        }
        a & 512 &&
          (u.memoizedProps.mode === "manual"
            ? Gu(u, u.return)
            : Wl(u, u.return));
        break;
      default:
        jt(l, u);
    }
  }
  function R0(l) {
    var t = l.alternate;
    t !== null && ((l.alternate = null), R0(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && Ln(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null);
  }
  var Tl = null,
    $l = !1;
  function Ct(l, t, u) {
    for (u = u.child; u !== null; ) H0(l, t, u), (u = u.sibling);
  }
  function H0(l, t, u) {
    if (Kl && typeof Kl.onCommitFiberUnmount == "function")
      try {
        Kl.onCommitFiberUnmount(Oa, u);
      } catch {}
    switch (u.tag) {
      case 26:
        yl || Wl(u, t),
          Ct(l, t, u),
          u.memoizedState
            ? u.memoizedState.count--
            : u.stateNode && ((u = u.stateNode), u.parentNode.removeChild(u));
        break;
      case 27:
        yl || Wl(u, t);
        var a = Tl,
          e = $l;
        for (
          Tl = u.stateNode, Ct(l, t, u), u = u.stateNode, t = u.attributes;
          t.length;

        )
          u.removeAttributeNode(t[0]);
        Ln(u), (Tl = a), ($l = e);
        break;
      case 5:
        yl || Wl(u, t);
      case 6:
        e = Tl;
        var n = $l;
        if (((Tl = null), Ct(l, t, u), (Tl = e), ($l = n), Tl !== null))
          if ($l)
            try {
              (l = Tl),
                (a = u.stateNode),
                l.nodeType === 8
                  ? l.parentNode.removeChild(a)
                  : l.removeChild(a);
            } catch (f) {
              tl(u, t, f);
            }
          else
            try {
              Tl.removeChild(u.stateNode);
            } catch (f) {
              tl(u, t, f);
            }
        break;
      case 18:
        Tl !== null &&
          ($l
            ? ((t = Tl),
              (u = u.stateNode),
              t.nodeType === 8
                ? Xc(t.parentNode, u)
                : t.nodeType === 1 && Xc(t, u),
              be(t))
            : Xc(Tl, u.stateNode));
        break;
      case 4:
        (a = Tl),
          (e = $l),
          (Tl = u.stateNode.containerInfo),
          ($l = !0),
          Ct(l, t, u),
          (Tl = a),
          ($l = e);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        yl || iu(2, u, t), yl || iu(4, u, t), Ct(l, t, u);
        break;
      case 1:
        yl ||
          (Wl(u, t),
          (a = u.stateNode),
          typeof a.componentWillUnmount == "function" && z0(u, t, a)),
          Ct(l, t, u);
        break;
      case 21:
        Ct(l, t, u);
        break;
      case 22:
        yl || Wl(u, t),
          (yl = (a = yl) || u.memoizedState !== null),
          Ct(l, t, u),
          (yl = a);
        break;
      default:
        Ct(l, t, u);
    }
  }
  function N0(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        be(l);
      } catch (u) {
        tl(t, t.return, u);
      }
  }
  function ry(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new D0()), t;
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new D0()),
          t
        );
      default:
        throw Error(h(435, l.tag));
    }
  }
  function fc(l, t) {
    var u = ry(l);
    t.forEach(function (a) {
      var e = Ry.bind(null, l, a);
      u.has(a) || (u.add(a), a.then(e, e));
    });
  }
  function ct(l, t) {
    var u = t.deletions;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = u[a],
          n = l,
          f = t,
          c = f;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
            case 5:
              (Tl = c.stateNode), ($l = !1);
              break l;
            case 3:
              (Tl = c.stateNode.containerInfo), ($l = !0);
              break l;
            case 4:
              (Tl = c.stateNode.containerInfo), ($l = !0);
              break l;
          }
          c = c.return;
        }
        if (Tl === null) throw Error(h(160));
        H0(n, f, e),
          (Tl = null),
          ($l = !1),
          (n = e.alternate),
          n !== null && (n.return = null),
          (e.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) p0(t, l), (t = t.sibling);
  }
  var mt = null;
  function p0(l, t) {
    var u = l.alternate,
      a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ct(t, l),
          it(l),
          a & 4 && (iu(3, l, l.return), te(3, l), iu(5, l, l.return));
        break;
      case 1:
        ct(t, l),
          it(l),
          a & 512 && (yl || u === null || Wl(u, u.return)),
          a & 64 &&
            Qt &&
            ((l = l.updateQueue),
            l !== null &&
              ((a = l.callbacks),
              a !== null &&
                ((u = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = u === null ? a : u.concat(a)))));
        break;
      case 26:
        var e = mt;
        if (
          (ct(t, l),
          it(l),
          a & 512 && (yl || u === null || Wl(u, u.return)),
          a & 4)
        ) {
          var n = u !== null ? u.memoizedState : null;
          if (((a = l.memoizedState), u === null))
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  (a = l.type),
                    (u = l.memoizedProps),
                    (e = e.ownerDocument || e);
                  t: switch (a) {
                    case "title":
                      (n = e.getElementsByTagName("title")[0]),
                        (!n ||
                          n[Ma] ||
                          n[Nl] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = e.createElement(a)),
                          e.head.insertBefore(
                            n,
                            e.querySelector("head > title")
                          )),
                        Hl(n, a, u),
                        (n[Nl] = l),
                        Ol(n),
                        (a = n);
                      break l;
                    case "link":
                      var f = Ad("link", "href", e).get(a + (u.href || ""));
                      if (f) {
                        for (var c = 0; c < f.length; c++)
                          if (
                            ((n = f[c]),
                            n.getAttribute("href") ===
                              (u.href == null ? null : u.href) &&
                              n.getAttribute("rel") ===
                                (u.rel == null ? null : u.rel) &&
                              n.getAttribute("title") ===
                                (u.title == null ? null : u.title) &&
                              n.getAttribute("crossorigin") ===
                                (u.crossOrigin == null ? null : u.crossOrigin))
                          ) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      (n = e.createElement(a)),
                        Hl(n, a, u),
                        e.head.appendChild(n);
                      break;
                    case "meta":
                      if (
                        (f = Ad("meta", "content", e).get(
                          a + (u.content || "")
                        ))
                      ) {
                        for (c = 0; c < f.length; c++)
                          if (
                            ((n = f[c]),
                            n.getAttribute("content") ===
                              (u.content == null ? null : "" + u.content) &&
                              n.getAttribute("name") ===
                                (u.name == null ? null : u.name) &&
                              n.getAttribute("property") ===
                                (u.property == null ? null : u.property) &&
                              n.getAttribute("http-equiv") ===
                                (u.httpEquiv == null ? null : u.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (u.charSet == null ? null : u.charSet))
                          ) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      (n = e.createElement(a)),
                        Hl(n, a, u),
                        e.head.appendChild(n);
                      break;
                    default:
                      throw Error(h(468, a));
                  }
                  (n[Nl] = l), Ol(n), (a = n);
                }
                l.stateNode = a;
              } else Od(e, l.type, l.stateNode);
            else l.stateNode = zd(e, a, l.memoizedProps);
          else
            n !== a
              ? (n === null
                  ? u.stateNode !== null &&
                    ((u = u.stateNode), u.parentNode.removeChild(u))
                  : n.count--,
                a === null
                  ? Od(e, l.type, l.stateNode)
                  : zd(e, a, l.memoizedProps))
              : a === null &&
                l.stateNode !== null &&
                O0(l, l.memoizedProps, u.memoizedProps);
        }
        break;
      case 27:
        if (a & 4 && l.alternate === null) {
          (e = l.stateNode), (n = l.memoizedProps);
          try {
            for (var i = e.firstChild; i; ) {
              var v = i.nextSibling,
                g = i.nodeName;
              i[Ma] ||
                g === "HEAD" ||
                g === "BODY" ||
                g === "SCRIPT" ||
                g === "STYLE" ||
                (g === "LINK" && i.rel.toLowerCase() === "stylesheet") ||
                e.removeChild(i),
                (i = v);
            }
            for (var b = l.type, m = e.attributes; m.length; )
              e.removeAttributeNode(m[0]);
            Hl(e, b, n), (e[Nl] = l), (e[Zl] = n);
          } catch (D) {
            tl(l, l.return, D);
          }
        }
      case 5:
        if (
          (ct(t, l),
          it(l),
          a & 512 && (yl || u === null || Wl(u, u.return)),
          l.flags & 32)
        ) {
          e = l.stateNode;
          try {
            wu(e, "");
          } catch (D) {
            tl(l, l.return, D);
          }
        }
        a & 4 &&
          l.stateNode != null &&
          ((e = l.memoizedProps), O0(l, e, u !== null ? u.memoizedProps : e)),
          a & 1024 && (nc = !0);
        break;
      case 6:
        if ((ct(t, l), it(l), a & 4)) {
          if (l.stateNode === null) throw Error(h(162));
          (a = l.memoizedProps), (u = l.stateNode);
          try {
            u.nodeValue = a;
          } catch (D) {
            tl(l, l.return, D);
          }
        }
        break;
      case 3:
        if (
          ((Un = null),
          (e = mt),
          (mt = Dn(t.containerInfo)),
          ct(t, l),
          (mt = e),
          it(l),
          a & 4 && u !== null && u.memoizedState.isDehydrated)
        )
          try {
            be(t.containerInfo);
          } catch (D) {
            tl(l, l.return, D);
          }
        nc && ((nc = !1), q0(l));
        break;
      case 4:
        (a = mt),
          (mt = Dn(l.stateNode.containerInfo)),
          ct(t, l),
          it(l),
          (mt = a);
        break;
      case 12:
        ct(t, l), it(l);
        break;
      case 13:
        ct(t, l),
          it(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (u !== null && u.memoizedState !== null) &&
            (mc = Et()),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), fc(l, a)));
        break;
      case 22:
        if (
          (a & 512 && (yl || u === null || Wl(u, u.return)),
          (i = l.memoizedState !== null),
          (v = u !== null && u.memoizedState !== null),
          (g = Qt),
          (b = yl),
          (Qt = g || i),
          (yl = b || v),
          ct(t, l),
          (yl = b),
          (Qt = g),
          it(l),
          (t = l.stateNode),
          (t._current = l),
          (t._visibility &= -3),
          (t._visibility |= t._pendingVisibility & 2),
          a & 8192 &&
            ((t._visibility = i ? t._visibility & -2 : t._visibility | 1),
            i && ((t = Qt || yl), u === null || v || t || da(l)),
            l.memoizedProps === null || l.memoizedProps.mode !== "manual"))
        )
          l: for (u = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
              if (u === null) {
                v = u = t;
                try {
                  if (((e = v.stateNode), i))
                    (n = e.style),
                      typeof n.setProperty == "function"
                        ? n.setProperty("display", "none", "important")
                        : (n.display = "none");
                  else {
                    (f = v.stateNode), (c = v.memoizedProps.style);
                    var r =
                      c != null && c.hasOwnProperty("display")
                        ? c.display
                        : null;
                    f.style.display =
                      r == null || typeof r == "boolean" ? "" : ("" + r).trim();
                  }
                } catch (D) {
                  tl(v, v.return, D);
                }
              }
            } else if (t.tag === 6) {
              if (u === null) {
                v = t;
                try {
                  v.stateNode.nodeValue = i ? "" : v.memoizedProps;
                } catch (D) {
                  tl(v, v.return, D);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              u === t && (u = null), (t = t.return);
            }
            u === t && (u = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        a & 4 &&
          ((a = l.updateQueue),
          a !== null &&
            ((u = a.retryQueue),
            u !== null && ((a.retryQueue = null), fc(l, u))));
        break;
      case 19:
        ct(t, l),
          it(l),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), fc(l, a)));
        break;
      case 21:
        break;
      default:
        ct(t, l), it(l);
    }
  }
  function it(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        if (l.tag !== 27) {
          l: {
            for (var u = l.return; u !== null; ) {
              if (_0(u)) {
                var a = u;
                break l;
              }
              u = u.return;
            }
            throw Error(h(160));
          }
          switch (a.tag) {
            case 27:
              var e = a.stateNode,
                n = ac(l);
              vn(l, n, e);
              break;
            case 5:
              var f = a.stateNode;
              a.flags & 32 && (wu(f, ""), (a.flags &= -33));
              var c = ac(l);
              vn(l, c, f);
              break;
            case 3:
            case 4:
              var i = a.stateNode.containerInfo,
                v = ac(l);
              ec(l, v, i);
              break;
            default:
              throw Error(h(161));
          }
        }
      } catch (g) {
        tl(l, l.return, g);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function q0(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        q0(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling);
      }
  }
  function jt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) U0(l, t.alternate, t), (t = t.sibling);
  }
  function da(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          iu(4, t, t.return), da(t);
          break;
        case 1:
          Wl(t, t.return);
          var u = t.stateNode;
          typeof u.componentWillUnmount == "function" && z0(t, t.return, u),
            da(t);
          break;
        case 26:
        case 27:
        case 5:
          Wl(t, t.return), da(t);
          break;
        case 22:
          Wl(t, t.return), t.memoizedState === null && da(t);
          break;
        default:
          da(t);
      }
      l = l.sibling;
    }
  }
  function su(l, t, u) {
    for (u = u && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        e = l,
        n = t,
        f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          su(e, n, u), te(4, n);
          break;
        case 1:
          if (
            (su(e, n, u),
            (a = n),
            (e = a.stateNode),
            typeof e.componentDidMount == "function")
          )
            try {
              e.componentDidMount();
            } catch (v) {
              tl(a, a.return, v);
            }
          if (((a = n), (e = a.updateQueue), e !== null)) {
            var c = a.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                  b0(i[e], c);
            } catch (v) {
              tl(a, a.return, v);
            }
          }
          u && f & 64 && T0(n), Gu(n, n.return);
          break;
        case 26:
        case 27:
        case 5:
          su(e, n, u), u && a === null && f & 4 && A0(n), Gu(n, n.return);
          break;
        case 12:
          su(e, n, u);
          break;
        case 13:
          su(e, n, u), u && f & 4 && N0(e, n);
          break;
        case 22:
          n.memoizedState === null && su(e, n, u), Gu(n, n.return);
          break;
        default:
          su(e, n, u);
      }
      t = t.sibling;
    }
  }
  function cc(l, t) {
    var u = null;
    l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (u = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== u && (l != null && l.refCount++, u != null && Ka(u));
  }
  function ic(l, t) {
    (l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && Ka(l));
  }
  function du(l, t, u, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) B0(l, t, u, a), (t = t.sibling);
  }
  function B0(l, t, u, a) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        du(l, t, u, a), e & 2048 && te(9, t);
        break;
      case 3:
        du(l, t, u, a),
          e & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && Ka(l)));
        break;
      case 12:
        if (e & 2048) {
          du(l, t, u, a), (l = t.stateNode);
          try {
            var n = t.memoizedProps,
              f = n.id,
              c = n.onPostCommit;
            typeof c == "function" &&
              c(
                f,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0
              );
          } catch (i) {
            tl(t, t.return, i);
          }
        } else du(l, t, u, a);
        break;
      case 23:
        break;
      case 22:
        (n = t.stateNode),
          t.memoizedState !== null
            ? n._visibility & 4
              ? du(l, t, u, a)
              : ue(l, t)
            : n._visibility & 4
            ? du(l, t, u, a)
            : ((n._visibility |= 4),
              va(l, t, u, a, (t.subtreeFlags & 10256) !== 0)),
          e & 2048 && cc(t.alternate, t);
        break;
      case 24:
        du(l, t, u, a), e & 2048 && ic(t.alternate, t);
        break;
      default:
        du(l, t, u, a);
    }
  }
  function va(l, t, u, a, e) {
    for (e = e && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var n = l,
        f = t,
        c = u,
        i = a,
        v = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          va(n, f, c, i, e), te(8, f);
          break;
        case 23:
          break;
        case 22:
          var g = f.stateNode;
          f.memoizedState !== null
            ? g._visibility & 4
              ? va(n, f, c, i, e)
              : ue(n, f)
            : ((g._visibility |= 4), va(n, f, c, i, e)),
            e && v & 2048 && cc(f.alternate, f);
          break;
        case 24:
          va(n, f, c, i, e), e && v & 2048 && ic(f.alternate, f);
          break;
        default:
          va(n, f, c, i, e);
      }
      t = t.sibling;
    }
  }
  function ue(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var u = l,
          a = t,
          e = a.flags;
        switch (a.tag) {
          case 22:
            ue(u, a), e & 2048 && cc(a.alternate, a);
            break;
          case 24:
            ue(u, a), e & 2048 && ic(a.alternate, a);
            break;
          default:
            ue(u, a);
        }
        t = t.sibling;
      }
  }
  var ae = 8192;
  function ya(l) {
    if (l.subtreeFlags & ae)
      for (l = l.child; l !== null; ) Y0(l), (l = l.sibling);
  }
  function Y0(l) {
    switch (l.tag) {
      case 26:
        ya(l),
          l.flags & ae &&
            l.memoizedState !== null &&
            eh(mt, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        ya(l);
        break;
      case 3:
      case 4:
        var t = mt;
        (mt = Dn(l.stateNode.containerInfo)), ya(l), (mt = t);
        break;
      case 22:
        l.memoizedState === null &&
          ((t = l.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = ae), (ae = 16777216), ya(l), (ae = t))
            : ya(l));
        break;
      default:
        ya(l);
    }
  }
  function G0(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do (t = l.sibling), (l.sibling = null), (l = t);
      while (l !== null);
    }
  }
  function ee(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          (Dl = a), Q0(a, l);
        }
      G0(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) X0(l), (l = l.sibling);
  }
  function X0(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ee(l), l.flags & 2048 && iu(9, l, l.return);
        break;
      case 3:
        ee(l);
        break;
      case 12:
        ee(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 4 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -5), yn(l))
          : ee(l);
        break;
      default:
        ee(l);
    }
  }
  function yn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          (Dl = a), Q0(a, l);
        }
      G0(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          iu(8, t, t.return), yn(t);
          break;
        case 22:
          (u = t.stateNode),
            u._visibility & 4 && ((u._visibility &= -5), yn(t));
          break;
        default:
          yn(t);
      }
      l = l.sibling;
    }
  }
  function Q0(l, t) {
    for (; Dl !== null; ) {
      var u = Dl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          iu(8, u, t);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var a = u.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Ka(u.memoizedState.cache);
      }
      if (((a = u.child), a !== null)) (a.return = u), (Dl = a);
      else
        l: for (u = l; Dl !== null; ) {
          a = Dl;
          var e = a.sibling,
            n = a.return;
          if ((R0(a), a === u)) {
            Dl = null;
            break l;
          }
          if (e !== null) {
            (e.return = n), (Dl = e);
            break l;
          }
          Dl = n;
        }
    }
  }
  function gy(l, t, u, a) {
    (this.tag = l),
      (this.key = u),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function st(l, t, u, a) {
    return new gy(l, t, u, a);
  }
  function sc(l) {
    return (l = l.prototype), !(!l || !l.isReactComponent);
  }
  function vu(l, t) {
    var u = l.alternate;
    return (
      u === null
        ? ((u = st(l.tag, t, l.key, l.mode)),
          (u.elementType = l.elementType),
          (u.type = l.type),
          (u.stateNode = l.stateNode),
          (u.alternate = l),
          (l.alternate = u))
        : ((u.pendingProps = t),
          (u.type = l.type),
          (u.flags = 0),
          (u.subtreeFlags = 0),
          (u.deletions = null)),
      (u.flags = l.flags & 31457280),
      (u.childLanes = l.childLanes),
      (u.lanes = l.lanes),
      (u.child = l.child),
      (u.memoizedProps = l.memoizedProps),
      (u.memoizedState = l.memoizedState),
      (u.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (u.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (u.sibling = l.sibling),
      (u.index = l.index),
      (u.ref = l.ref),
      (u.refCleanup = l.refCleanup),
      u
    );
  }
  function C0(l, t) {
    l.flags &= 31457282;
    var u = l.alternate;
    return (
      u === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = u.childLanes),
          (l.lanes = u.lanes),
          (l.child = u.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = u.memoizedProps),
          (l.memoizedState = u.memoizedState),
          (l.updateQueue = u.updateQueue),
          (l.type = u.type),
          (t = u.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function hn(l, t, u, a, e, n) {
    var f = 0;
    if (((a = l), typeof l == "function")) sc(l) && (f = 1);
    else if (typeof l == "string")
      f = uh(l, u, bt.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
        ? 27
        : 5;
    else
      l: switch (l) {
        case M:
          return Xu(u.children, e, n, t);
        case E:
          (f = 8), (e |= 24);
          break;
        case $:
          return (
            (l = st(12, u, t, e | 2)), (l.elementType = $), (l.lanes = n), l
          );
        case Pl:
          return (l = st(13, u, t, e)), (l.elementType = Pl), (l.lanes = n), l;
        case Ll:
          return (l = st(19, u, t, e)), (l.elementType = Ll), (l.lanes = n), l;
        case yt:
          return j0(u, e, n, t);
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case cl:
              case gl:
                f = 10;
                break l;
              case il:
                f = 9;
                break l;
              case Ql:
                f = 11;
                break l;
              case Dt:
                f = 14;
                break l;
              case Bl:
                (f = 16), (a = null);
                break l;
            }
          (f = 29),
            (u = Error(h(130, l === null ? "null" : typeof l, ""))),
            (a = null);
      }
    return (
      (t = st(f, u, t, e)), (t.elementType = l), (t.type = a), (t.lanes = n), t
    );
  }
  function Xu(l, t, u, a) {
    return (l = st(7, l, a, t)), (l.lanes = u), l;
  }
  function j0(l, t, u, a) {
    (l = st(22, l, a, t)), (l.elementType = yt), (l.lanes = u);
    var e = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var n = e._current;
        if (n === null) throw Error(h(456));
        if ((e._pendingVisibility & 2) === 0) {
          var f = It(n, 2);
          f !== null && ((e._pendingVisibility |= 2), Xl(f, n, 2));
        }
      },
      attach: function () {
        var n = e._current;
        if (n === null) throw Error(h(456));
        if ((e._pendingVisibility & 2) !== 0) {
          var f = It(n, 2);
          f !== null && ((e._pendingVisibility &= -3), Xl(f, n, 2));
        }
      },
    };
    return (l.stateNode = e), l;
  }
  function dc(l, t, u) {
    return (l = st(6, l, null, t)), (l.lanes = u), l;
  }
  function vc(l, t, u) {
    return (
      (t = st(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = u),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  function Zt(l) {
    l.flags |= 4;
  }
  function Z0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !_d(t))) {
      if (
        ((t = ft.current),
        t !== null &&
          ((K & 4194176) === K
            ? zt !== null
            : ((K & 62914560) !== K && (K & 536870912) === 0) || t !== zt))
      )
        throw ((xa = rf), es);
      l.flags |= 8192;
    }
  }
  function on(l, t) {
    t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? ni() : 536870912), (l.lanes |= t), (oa |= t));
  }
  function ne(l, t) {
    if (!J)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var u = null; t !== null; )
            t.alternate !== null && (u = t), (t = t.sibling);
          u === null ? (l.tail = null) : (u.sibling = null);
          break;
        case "collapsed":
          u = l.tail;
          for (var a = null; u !== null; )
            u.alternate !== null && (a = u), (u = u.sibling);
          a === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function dl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      u = 0,
      a = 0;
    if (t)
      for (var e = l.child; e !== null; )
        (u |= e.lanes | e.childLanes),
          (a |= e.subtreeFlags & 31457280),
          (a |= e.flags & 31457280),
          (e.return = l),
          (e = e.sibling);
    else
      for (e = l.child; e !== null; )
        (u |= e.lanes | e.childLanes),
          (a |= e.subtreeFlags),
          (a |= e.flags),
          (e.return = l),
          (e = e.sibling);
    return (l.subtreeFlags |= a), (l.childLanes = u), t;
  }
  function Sy(l, t, u) {
    var a = t.pendingProps;
    switch ((of(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return dl(t), null;
      case 1:
        return dl(t), null;
      case 3:
        return (
          (u = t.stateNode),
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Xt(Al),
          Zu(),
          u.pendingContext &&
            ((u.context = u.pendingContext), (u.pendingContext = null)),
          (l === null || l.child === null) &&
            (Qa(t)
              ? Zt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), ot !== null && (bc(ot), (ot = null)))),
          dl(t),
          null
        );
      case 26:
        return (
          (u = t.memoizedState),
          l === null
            ? (Zt(t),
              u !== null ? (dl(t), Z0(t, u)) : (dl(t), (t.flags &= -16777217)))
            : u
            ? u !== l.memoizedState
              ? (Zt(t), dl(t), Z0(t, u))
              : (dl(t), (t.flags &= -16777217))
            : (l.memoizedProps !== a && Zt(t), dl(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        _e(t), (u = $t.current);
        var e = t.type;
        if (l !== null && t.stateNode != null) l.memoizedProps !== a && Zt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(h(166));
            return dl(t), null;
          }
          (l = bt.current),
            Qa(t) ? us(t) : ((l = gd(e, a, u)), (t.stateNode = l), Zt(t));
        }
        return dl(t), null;
      case 5:
        if ((_e(t), (u = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== a && Zt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(h(166));
            return dl(t), null;
          }
          if (((l = bt.current), Qa(t))) us(t);
          else {
            switch (((e = _n($t.current)), l)) {
              case 1:
                l = e.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                l = e.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    l = e.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    l = e.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    (l = e.createElement("div")),
                      (l.innerHTML = "<script></script>"),
                      (l = l.removeChild(l.firstChild));
                    break;
                  case "select":
                    (l =
                      typeof a.is == "string"
                        ? e.createElement("select", { is: a.is })
                        : e.createElement("select")),
                      a.multiple
                        ? (l.multiple = !0)
                        : a.size && (l.size = a.size);
                    break;
                  default:
                    l =
                      typeof a.is == "string"
                        ? e.createElement(u, { is: a.is })
                        : e.createElement(u);
                }
            }
            (l[Nl] = t), (l[Zl] = a);
            l: for (e = t.child; e !== null; ) {
              if (e.tag === 5 || e.tag === 6) l.appendChild(e.stateNode);
              else if (e.tag !== 4 && e.tag !== 27 && e.child !== null) {
                (e.child.return = e), (e = e.child);
                continue;
              }
              if (e === t) break l;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === t) break l;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
            t.stateNode = l;
            l: switch ((Hl(l, u, a), u)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!a.autoFocus;
                break l;
              case "img":
                l = !0;
                break l;
              default:
                l = !1;
            }
            l && Zt(t);
          }
        }
        return dl(t), (t.flags &= -16777217), null;
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== a && Zt(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(h(166));
          if (((l = $t.current), Qa(t))) {
            if (
              ((l = t.stateNode),
              (u = t.memoizedProps),
              (a = null),
              (e = Gl),
              e !== null)
            )
              switch (e.tag) {
                case 27:
                case 5:
                  a = e.memoizedProps;
              }
            (l[Nl] = t),
              (l = !!(
                l.nodeValue === u ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                vd(l.nodeValue, u)
              )),
              l || Mu(t);
          } else (l = _n(l).createTextNode(a)), (l[Nl] = t), (t.stateNode = l);
        }
        return dl(t), null;
      case 13:
        if (
          ((a = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((e = Qa(t)), a !== null && a.dehydrated !== null)) {
            if (l === null) {
              if (!e) throw Error(h(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(h(317));
              e[Nl] = t;
            } else
              Ca(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            dl(t), (e = !1);
          } else ot !== null && (bc(ot), (ot = null)), (e = !0);
          if (!e) return t.flags & 256 ? (qt(t), t) : (qt(t), null);
        }
        if ((qt(t), (t.flags & 128) !== 0)) return (t.lanes = u), t;
        if (
          ((u = a !== null), (l = l !== null && l.memoizedState !== null), u)
        ) {
          (a = t.child),
            (e = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (e = a.alternate.memoizedState.cachePool.pool);
          var n = null;
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (n = a.memoizedState.cachePool.pool),
            n !== e && (a.flags |= 2048);
        }
        return (
          u !== l && u && (t.child.flags |= 8192),
          on(t, t.updateQueue),
          dl(t),
          null
        );
      case 4:
        return Zu(), l === null && Hc(t.stateNode.containerInfo), dl(t), null;
      case 10:
        return Xt(t.type), dl(t), null;
      case 19:
        if ((Sl(zl), (e = t.memoizedState), e === null)) return dl(t), null;
        if (((a = (t.flags & 128) !== 0), (n = e.rendering), n === null))
          if (a) ne(e, !1);
          else {
            if (hl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((n = ke(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      ne(e, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      on(t, l),
                      t.subtreeFlags = 0,
                      l = u,
                      u = t.child;
                    u !== null;

                  )
                    C0(u, l), (u = u.sibling);
                  return sl(zl, (zl.current & 1) | 2), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null &&
              Et() > mn &&
              ((t.flags |= 128), (a = !0), ne(e, !1), (t.lanes = 4194304));
          }
        else {
          if (!a)
            if (((l = ke(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                on(t, l),
                ne(e, !0),
                e.tail === null &&
                  e.tailMode === "hidden" &&
                  !n.alternate &&
                  !J)
              )
                return dl(t), null;
            } else
              2 * Et() - e.renderingStartTime > mn &&
                u !== 536870912 &&
                ((t.flags |= 128), (a = !0), ne(e, !1), (t.lanes = 4194304));
          e.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = e.last),
              l !== null ? (l.sibling = n) : (t.child = n),
              (e.last = n));
        }
        return e.tail !== null
          ? ((t = e.tail),
            (e.rendering = t),
            (e.tail = t.sibling),
            (e.renderingStartTime = Et()),
            (t.sibling = null),
            (l = zl.current),
            sl(zl, a ? (l & 1) | 2 : l & 1),
            t)
          : (dl(t), null);
      case 22:
      case 23:
        return (
          qt(t),
          Sf(),
          (a = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (u & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (dl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : dl(t),
          (u = t.updateQueue),
          u !== null && on(t, u.retryQueue),
          (u = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (u = l.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== u && (t.flags |= 2048),
          l !== null && Sl(Ru),
          null
        );
      case 24:
        return (
          (u = null),
          l !== null && (u = l.memoizedState.cache),
          t.memoizedState.cache !== u && (t.flags |= 2048),
          Xt(Al),
          dl(t),
          null
        );
      case 25:
        return null;
    }
    throw Error(h(156, t.tag));
  }
  function by(l, t) {
    switch ((of(t), t.tag)) {
      case 1:
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          Xt(Al),
          Zu(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return _e(t), null;
      case 13:
        if (
          (qt(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(h(340));
          Ca();
        }
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return Sl(zl), null;
      case 4:
        return Zu(), null;
      case 10:
        return Xt(t.type), null;
      case 22:
      case 23:
        return (
          qt(t),
          Sf(),
          l !== null && Sl(Ru),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return Xt(Al), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function x0(l, t) {
    switch ((of(t), t.tag)) {
      case 3:
        Xt(Al), Zu();
        break;
      case 26:
      case 27:
      case 5:
        _e(t);
        break;
      case 4:
        Zu();
        break;
      case 13:
        qt(t);
        break;
      case 19:
        Sl(zl);
        break;
      case 10:
        Xt(t.type);
        break;
      case 22:
      case 23:
        qt(t), Sf(), l !== null && Sl(Ru);
        break;
      case 24:
        Xt(Al);
    }
  }
  var Ey = {
      getCacheForType: function (l) {
        var t = pl(Al),
          u = t.data.get(l);
        return u === void 0 && ((u = l()), t.data.set(l, u)), u;
      },
    },
    Ty = typeof WeakMap == "function" ? WeakMap : Map,
    vl = 0,
    nl = null,
    Z = null,
    K = 0,
    fl = 0,
    kl = null,
    xt = !1,
    ha = !1,
    yc = !1,
    Vt = 0,
    hl = 0,
    yu = 0,
    Qu = 0,
    hc = 0,
    dt = 0,
    oa = 0,
    fe = null,
    Ot = null,
    oc = !1,
    mc = 0,
    mn = 1 / 0,
    rn = null,
    hu = null,
    gn = !1,
    Cu = null,
    ce = 0,
    rc = 0,
    gc = null,
    ie = 0,
    Sc = null;
  function Fl() {
    if ((vl & 2) !== 0 && K !== 0) return K & -K;
    if (N.T !== null) {
      var l = na;
      return l !== 0 ? l : Dc();
    }
    return si();
  }
  function V0() {
    dt === 0 && (dt = (K & 536870912) === 0 || J ? ei() : 536870912);
    var l = ft.current;
    return l !== null && (l.flags |= 32), dt;
  }
  function Xl(l, t, u) {
    ((l === nl && fl === 2) || l.cancelPendingCommit !== null) &&
      (ma(l, 0), Lt(l, K, dt, !1)),
      Da(l, u),
      ((vl & 2) === 0 || l !== nl) &&
        (l === nl &&
          ((vl & 2) === 0 && (Qu |= u), hl === 4 && Lt(l, K, dt, !1)),
        _t(l));
  }
  function L0(l, t, u) {
    if ((vl & 6) !== 0) throw Error(h(327));
    var a = (!u && (t & 60) === 0 && (t & l.expiredLanes) === 0) || _a(l, t),
      e = a ? Oy(l, t) : zc(l, t, !0),
      n = a;
    do {
      if (e === 0) {
        ha && !a && Lt(l, t, 0, !1);
        break;
      } else if (e === 6) Lt(l, t, 0, !xt);
      else {
        if (((u = l.current.alternate), n && !zy(u))) {
          (e = zc(l, t, !1)), (n = !1);
          continue;
        }
        if (e === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var f = 0;
          else
            (f = l.pendingLanes & -536870913),
              (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0);
          if (f !== 0) {
            t = f;
            l: {
              var c = l;
              e = fe;
              var i = c.current.memoizedState.isDehydrated;
              if ((i && (ma(c, f).flags |= 256), (f = zc(c, f, !1)), f !== 2)) {
                if (yc && !i) {
                  (c.errorRecoveryDisabledLanes |= n), (Qu |= n), (e = 4);
                  break l;
                }
                (n = Ot), (Ot = e), n !== null && bc(n);
              }
              e = f;
            }
            if (((n = !1), e !== 2)) continue;
          }
        }
        if (e === 1) {
          ma(l, 0), Lt(l, t, 0, !0);
          break;
        }
        l: {
          switch (((a = l), e)) {
            case 0:
            case 1:
              throw Error(h(345));
            case 4:
              if ((t & 4194176) === t) {
                Lt(a, t, dt, !xt);
                break l;
              }
              break;
            case 2:
              Ot = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(h(329));
          }
          if (
            ((a.finishedWork = u),
            (a.finishedLanes = t),
            (t & 62914560) === t && ((n = mc + 300 - Et()), 10 < n))
          ) {
            if ((Lt(a, t, dt, !xt), Re(a, 0) !== 0)) break l;
            a.timeoutHandle = od(
              K0.bind(null, a, u, Ot, rn, oc, t, dt, Qu, oa, xt, 2, -0, 0),
              n
            );
            break l;
          }
          K0(a, u, Ot, rn, oc, t, dt, Qu, oa, xt, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    _t(l);
  }
  function bc(l) {
    Ot === null ? (Ot = l) : Ot.push.apply(Ot, l);
  }
  function K0(l, t, u, a, e, n, f, c, i, v, g, b, m) {
    var r = t.subtreeFlags;
    if (
      (r & 8192 || (r & 16785408) === 16785408) &&
      ((oe = { stylesheets: null, count: 0, unsuspend: ah }),
      Y0(t),
      (t = nh()),
      t !== null)
    ) {
      (l.cancelPendingCommit = t(P0.bind(null, l, u, a, e, f, c, i, 1, b, m))),
        Lt(l, n, f, !v);
      return;
    }
    P0(l, u, a, e, f, c, i, g, b, m);
  }
  function zy(l) {
    for (var t = l; ; ) {
      var u = t.tag;
      if (
        (u === 0 || u === 11 || u === 15) &&
        t.flags & 16384 &&
        ((u = t.updateQueue), u !== null && ((u = u.stores), u !== null))
      )
        for (var a = 0; a < u.length; a++) {
          var e = u[a],
            n = e.getSnapshot;
          e = e.value;
          try {
            if (!wl(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (((u = t.child), t.subtreeFlags & 16384 && u !== null))
        (u.return = t), (t = u);
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Lt(l, t, u, a) {
    (t &= ~hc),
      (t &= ~Qu),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      a && (l.warmLanes |= t),
      (a = l.expirationTimes);
    for (var e = t; 0 < e; ) {
      var n = 31 - Jl(e),
        f = 1 << n;
      (a[n] = -1), (e &= ~f);
    }
    u !== 0 && fi(l, u, t);
  }
  function Sn() {
    return (vl & 6) === 0 ? (se(0), !1) : !0;
  }
  function Ec() {
    if (Z !== null) {
      if (fl === 0) var l = Z.return;
      else (l = Z), (Gt = Bu = null), Df(l), (aa = null), (Va = 0), (l = Z);
      for (; l !== null; ) x0(l.alternate, l), (l = l.return);
      Z = null;
    }
  }
  function ma(l, t) {
    (l.finishedWork = null), (l.finishedLanes = 0);
    var u = l.timeoutHandle;
    u !== -1 && ((l.timeoutHandle = -1), Zy(u)),
      (u = l.cancelPendingCommit),
      u !== null && ((l.cancelPendingCommit = null), u()),
      Ec(),
      (nl = l),
      (Z = u = vu(l.current, null)),
      (K = t),
      (fl = 0),
      (kl = null),
      (xt = !1),
      (ha = _a(l, t)),
      (yc = !1),
      (oa = dt = hc = Qu = yu = hl = 0),
      (Ot = fe = null),
      (oc = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var e = 31 - Jl(a),
          n = 1 << e;
        (t |= l[e]), (a &= ~n);
      }
    return (Vt = t), Ze(), u;
  }
  function J0(l, t) {
    (C = null),
      (N.H = At),
      t === Za
        ? ((t = cs()), (fl = 3))
        : t === es
        ? ((t = cs()), (fl = 4))
        : (fl =
            t === n0
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (kl = t),
      Z === null && ((hl = 1), cn(l, at(t, l.current)));
  }
  function w0() {
    var l = N.H;
    return (N.H = At), l === null ? At : l;
  }
  function W0() {
    var l = N.A;
    return (N.A = Ey), l;
  }
  function Tc() {
    (hl = 4),
      xt || ((K & 4194176) !== K && ft.current !== null) || (ha = !0),
      ((yu & 134217727) === 0 && (Qu & 134217727) === 0) ||
        nl === null ||
        Lt(nl, K, dt, !1);
  }
  function zc(l, t, u) {
    var a = vl;
    vl |= 2;
    var e = w0(),
      n = W0();
    (nl !== l || K !== t) && ((rn = null), ma(l, t)), (t = !1);
    var f = hl;
    l: do
      try {
        if (fl !== 0 && Z !== null) {
          var c = Z,
            i = kl;
          switch (fl) {
            case 8:
              Ec(), (f = 6);
              break l;
            case 3:
            case 2:
            case 6:
              ft.current === null && (t = !0);
              var v = fl;
              if (((fl = 0), (kl = null), ra(l, c, i, v), u && ha)) {
                f = 0;
                break l;
              }
              break;
            default:
              (v = fl), (fl = 0), (kl = null), ra(l, c, i, v);
          }
        }
        Ay(), (f = hl);
        break;
      } catch (g) {
        J0(l, g);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (Gt = Bu = null),
      (vl = a),
      (N.H = e),
      (N.A = n),
      Z === null && ((nl = null), (K = 0), Ze()),
      f
    );
  }
  function Ay() {
    for (; Z !== null; ) $0(Z);
  }
  function Oy(l, t) {
    var u = vl;
    vl |= 2;
    var a = w0(),
      e = W0();
    nl !== l || K !== t
      ? ((rn = null), (mn = Et() + 500), ma(l, t))
      : (ha = _a(l, t));
    l: do
      try {
        if (fl !== 0 && Z !== null) {
          t = Z;
          var n = kl;
          t: switch (fl) {
            case 1:
              (fl = 0), (kl = null), ra(l, t, n, 1);
              break;
            case 2:
              if (ns(n)) {
                (fl = 0), (kl = null), k0(t);
                break;
              }
              (t = function () {
                fl === 2 && nl === l && (fl = 7), _t(l);
              }),
                n.then(t, t);
              break l;
            case 3:
              fl = 7;
              break l;
            case 4:
              fl = 5;
              break l;
            case 7:
              ns(n)
                ? ((fl = 0), (kl = null), k0(t))
                : ((fl = 0), (kl = null), ra(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (Z.tag) {
                case 26:
                  f = Z.memoizedState;
                case 5:
                case 27:
                  var c = Z;
                  if (!f || _d(f)) {
                    (fl = 0), (kl = null);
                    var i = c.sibling;
                    if (i !== null) Z = i;
                    else {
                      var v = c.return;
                      v !== null ? ((Z = v), bn(v)) : (Z = null);
                    }
                    break t;
                  }
              }
              (fl = 0), (kl = null), ra(l, t, n, 5);
              break;
            case 6:
              (fl = 0), (kl = null), ra(l, t, n, 6);
              break;
            case 8:
              Ec(), (hl = 6);
              break l;
            default:
              throw Error(h(462));
          }
        }
        _y();
        break;
      } catch (g) {
        J0(l, g);
      }
    while (!0);
    return (
      (Gt = Bu = null),
      (N.H = a),
      (N.A = e),
      (vl = u),
      Z !== null ? 0 : ((nl = null), (K = 0), Ze(), hl)
    );
  }
  function _y() {
    for (; Z !== null && !wd(); ) $0(Z);
  }
  function $0(l) {
    var t = g0(l.alternate, l, Vt);
    (l.memoizedProps = l.pendingProps), t === null ? bn(l) : (Z = t);
  }
  function k0(l) {
    var t = l,
      u = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = v0(u, t, t.pendingProps, t.type, void 0, K);
        break;
      case 11:
        t = v0(u, t, t.pendingProps, t.type.render, t.ref, K);
        break;
      case 5:
        Df(t);
      default:
        x0(u, t), (t = Z = C0(t, Vt)), (t = g0(u, t, Vt));
    }
    (l.memoizedProps = l.pendingProps), t === null ? bn(l) : (Z = t);
  }
  function ra(l, t, u, a) {
    (Gt = Bu = null), Df(t), (aa = null), (Va = 0);
    var e = t.return;
    try {
      if (hy(l, e, t, u, K)) {
        (hl = 1), cn(l, at(u, l.current)), (Z = null);
        return;
      }
    } catch (n) {
      if (e !== null) throw ((Z = e), n);
      (hl = 1), cn(l, at(u, l.current)), (Z = null);
      return;
    }
    t.flags & 32768
      ? (J || a === 1
          ? (l = !0)
          : ha || (K & 536870912) !== 0
          ? (l = !1)
          : ((xt = l = !0),
            (a === 2 || a === 3 || a === 6) &&
              ((a = ft.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        F0(t, l))
      : bn(t);
  }
  function bn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        F0(t, xt);
        return;
      }
      l = t.return;
      var u = Sy(t.alternate, t, Vt);
      if (u !== null) {
        Z = u;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Z = t;
        return;
      }
      Z = t = l;
    } while (t !== null);
    hl === 0 && (hl = 5);
  }
  function F0(l, t) {
    do {
      var u = by(l.alternate, l);
      if (u !== null) {
        (u.flags &= 32767), (Z = u);
        return;
      }
      if (
        ((u = l.return),
        u !== null &&
          ((u.flags |= 32768), (u.subtreeFlags = 0), (u.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        Z = l;
        return;
      }
      Z = l = u;
    } while (l !== null);
    (hl = 6), (Z = null);
  }
  function P0(l, t, u, a, e, n, f, c, i, v) {
    var g = N.T,
      b = O.p;
    try {
      (O.p = 2), (N.T = null), Dy(l, t, u, a, b, e, n, f, c, i, v);
    } finally {
      (N.T = g), (O.p = b);
    }
  }
  function Dy(l, t, u, a, e, n, f, c) {
    do ga();
    while (Cu !== null);
    if ((vl & 6) !== 0) throw Error(h(327));
    var i = l.finishedWork;
    if (((a = l.finishedLanes), i === null)) return null;
    if (((l.finishedWork = null), (l.finishedLanes = 0), i === l.current))
      throw Error(h(177));
    (l.callbackNode = null),
      (l.callbackPriority = 0),
      (l.cancelPendingCommit = null);
    var v = i.lanes | i.childLanes;
    if (
      ((v |= vf),
      ev(l, a, v, n, f, c),
      l === nl && ((Z = nl = null), (K = 0)),
      ((i.subtreeFlags & 10256) === 0 && (i.flags & 10256) === 0) ||
        gn ||
        ((gn = !0),
        (rc = v),
        (gc = u),
        Hy(De, function () {
          return ga(), null;
        })),
      (u = (i.flags & 15990) !== 0),
      (i.subtreeFlags & 15990) !== 0 || u
        ? ((u = N.T),
          (N.T = null),
          (n = O.p),
          (O.p = 2),
          (f = vl),
          (vl |= 4),
          my(l, i),
          p0(i, l),
          kv(Bc, l.containerInfo),
          (Nn = !!qc),
          (Bc = qc = null),
          (l.current = i),
          U0(l, i.alternate, i),
          Wd(),
          (vl = f),
          (O.p = n),
          (N.T = u))
        : (l.current = i),
      gn ? ((gn = !1), (Cu = l), (ce = a)) : I0(l, v),
      (v = l.pendingLanes),
      v === 0 && (hu = null),
      Id(i.stateNode),
      _t(l),
      t !== null)
    )
      for (e = l.onRecoverableError, i = 0; i < t.length; i++)
        (v = t[i]), e(v.value, { componentStack: v.stack });
    return (
      (ce & 3) !== 0 && ga(),
      (v = l.pendingLanes),
      (a & 4194218) !== 0 && (v & 42) !== 0
        ? l === Sc
          ? ie++
          : ((ie = 0), (Sc = l))
        : (ie = 0),
      se(0),
      null
    );
  }
  function I0(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), Ka(t)));
  }
  function ga() {
    if (Cu !== null) {
      var l = Cu,
        t = rc;
      rc = 0;
      var u = ii(ce),
        a = N.T,
        e = O.p;
      try {
        if (((O.p = 32 > u ? 32 : u), (N.T = null), Cu === null)) var n = !1;
        else {
          (u = gc), (gc = null);
          var f = Cu,
            c = ce;
          if (((Cu = null), (ce = 0), (vl & 6) !== 0)) throw Error(h(331));
          var i = vl;
          if (
            ((vl |= 4),
            X0(f.current),
            B0(f, f.current, c, u),
            (vl = i),
            se(0, !1),
            Kl && typeof Kl.onPostCommitFiberRoot == "function")
          )
            try {
              Kl.onPostCommitFiberRoot(Oa, f);
            } catch {}
          n = !0;
        }
        return n;
      } finally {
        (O.p = e), (N.T = a), I0(l, t);
      }
    }
    return !1;
  }
  function ld(l, t, u) {
    (t = at(u, t)),
      (t = jf(l.stateNode, t, 2)),
      (l = cu(l, t, 2)),
      l !== null && (Da(l, 2), _t(l));
  }
  function tl(l, t, u) {
    if (l.tag === 3) ld(l, l, u);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ld(t, l, u);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (hu === null || !hu.has(a)))
          ) {
            (l = at(u, l)),
              (u = a0(2)),
              (a = cu(t, u, 2)),
              a !== null && (e0(u, a, t, l), Da(a, 2), _t(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ac(l, t, u) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Ty();
      var e = new Set();
      a.set(t, e);
    } else (e = a.get(t)), e === void 0 && ((e = new Set()), a.set(t, e));
    e.has(u) ||
      ((yc = !0), e.add(u), (l = My.bind(null, l, t, u)), t.then(l, l));
  }
  function My(l, t, u) {
    var a = l.pingCache;
    a !== null && a.delete(t),
      (l.pingedLanes |= l.suspendedLanes & u),
      (l.warmLanes &= ~u),
      nl === l &&
        (K & u) === u &&
        (hl === 4 || (hl === 3 && (K & 62914560) === K && 300 > Et() - mc)
          ? (vl & 2) === 0 && ma(l, 0)
          : (hc |= u),
        oa === K && (oa = 0)),
      _t(l);
  }
  function td(l, t) {
    t === 0 && (t = ni()), (l = It(l, t)), l !== null && (Da(l, t), _t(l));
  }
  function Uy(l) {
    var t = l.memoizedState,
      u = 0;
    t !== null && (u = t.retryLane), td(l, u);
  }
  function Ry(l, t) {
    var u = 0;
    switch (l.tag) {
      case 13:
        var a = l.stateNode,
          e = l.memoizedState;
        e !== null && (u = e.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(h(314));
    }
    a !== null && a.delete(t), td(l, u);
  }
  function Hy(l, t) {
    return jn(l, t);
  }
  var En = null,
    Sa = null,
    Oc = !1,
    Tn = !1,
    _c = !1,
    ju = 0;
  function _t(l) {
    l !== Sa &&
      l.next === null &&
      (Sa === null ? (En = Sa = l) : (Sa = Sa.next = l)),
      (Tn = !0),
      Oc || ((Oc = !0), py(Ny));
  }
  function se(l, t) {
    if (!_c && Tn) {
      _c = !0;
      do
        for (var u = !1, a = En; a !== null; ) {
          if (l !== 0) {
            var e = a.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = a.suspendedLanes,
                c = a.pingedLanes;
              (n = (1 << (31 - Jl(42 | l) + 1)) - 1),
                (n &= e & ~(f & ~c)),
                (n = n & 201326677 ? (n & 201326677) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((u = !0), ed(a, n));
          } else
            (n = K),
              (n = Re(a, a === nl ? n : 0)),
              (n & 3) === 0 || _a(a, n) || ((u = !0), ed(a, n));
          a = a.next;
        }
      while (u);
      _c = !1;
    }
  }
  function Ny() {
    Tn = Oc = !1;
    var l = 0;
    ju !== 0 && (jy() && (l = ju), (ju = 0));
    for (var t = Et(), u = null, a = En; a !== null; ) {
      var e = a.next,
        n = ud(a, t);
      n === 0
        ? ((a.next = null),
          u === null ? (En = e) : (u.next = e),
          e === null && (Sa = u))
        : ((u = a), (l !== 0 || (n & 3) !== 0) && (Tn = !0)),
        (a = e);
    }
    se(l);
  }
  function ud(l, t) {
    for (
      var u = l.suspendedLanes,
        a = l.pingedLanes,
        e = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;

    ) {
      var f = 31 - Jl(n),
        c = 1 << f,
        i = e[f];
      i === -1
        ? ((c & u) === 0 || (c & a) !== 0) && (e[f] = av(c, t))
        : i <= t && (l.expiredLanes |= c),
        (n &= ~c);
    }
    if (
      ((t = nl),
      (u = K),
      (u = Re(l, l === t ? u : 0)),
      (a = l.callbackNode),
      u === 0 || (l === t && fl === 2) || l.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Zn(a),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((u & 3) === 0 || _a(l, u)) {
      if (((t = u & -u), t === l.callbackPriority)) return t;
      switch ((a !== null && Zn(a), ii(u))) {
        case 2:
        case 8:
          u = ui;
          break;
        case 32:
          u = De;
          break;
        case 268435456:
          u = ai;
          break;
        default:
          u = De;
      }
      return (
        (a = ad.bind(null, l)),
        (u = jn(u, a)),
        (l.callbackPriority = t),
        (l.callbackNode = u),
        t
      );
    }
    return (
      a !== null && a !== null && Zn(a),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function ad(l, t) {
    var u = l.callbackNode;
    if (ga() && l.callbackNode !== u) return null;
    var a = K;
    return (
      (a = Re(l, l === nl ? a : 0)),
      a === 0
        ? null
        : (L0(l, a, t),
          ud(l, Et()),
          l.callbackNode != null && l.callbackNode === u
            ? ad.bind(null, l)
            : null)
    );
  }
  function ed(l, t) {
    if (ga()) return null;
    L0(l, t, !0);
  }
  function py(l) {
    xy(function () {
      (vl & 6) !== 0 ? jn(ti, l) : l();
    });
  }
  function Dc() {
    return ju === 0 && (ju = ei()), ju;
  }
  function nd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
      ? l
      : Be("" + l);
  }
  function fd(l, t) {
    var u = t.ownerDocument.createElement("input");
    return (
      (u.name = t.name),
      (u.value = t.value),
      l.id && u.setAttribute("form", l.id),
      t.parentNode.insertBefore(u, t),
      (l = new FormData(l)),
      u.parentNode.removeChild(u),
      l
    );
  }
  function qy(l, t, u, a, e) {
    if (t === "submit" && u && u.stateNode === e) {
      var n = nd((e[Zl] || null).action),
        f = a.submitter;
      f &&
        ((t = (t = f[Zl] || null)
          ? nd(t.formAction)
          : f.getAttribute("formAction")),
        t !== null && ((n = t), (f = null)));
      var c = new Qe("action", "action", null, a, e);
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (ju !== 0) {
                  var i = f ? fd(e, f) : new FormData(e);
                  Yf(
                    u,
                    { pending: !0, data: i, method: e.method, action: n },
                    null,
                    i
                  );
                }
              } else
                typeof n == "function" &&
                  (c.preventDefault(),
                  (i = f ? fd(e, f) : new FormData(e)),
                  Yf(
                    u,
                    { pending: !0, data: i, method: e.method, action: n },
                    n,
                    i
                  ));
            },
            currentTarget: e,
          },
        ],
      });
    }
  }
  for (var Mc = 0; Mc < Pi.length; Mc++) {
    var Uc = Pi[Mc],
      By = Uc.toLowerCase(),
      Yy = Uc[0].toUpperCase() + Uc.slice(1);
    ht(By, "on" + Yy);
  }
  ht(wi, "onAnimationEnd"),
    ht(Wi, "onAnimationIteration"),
    ht($i, "onAnimationStart"),
    ht("dblclick", "onDoubleClick"),
    ht("focusin", "onFocus"),
    ht("focusout", "onBlur"),
    ht(Pv, "onTransitionRun"),
    ht(Iv, "onTransitionStart"),
    ht(ly, "onTransitionCancel"),
    ht(ki, "onTransitionEnd"),
    Ku("onMouseEnter", ["mouseout", "mouseover"]),
    Ku("onMouseLeave", ["mouseout", "mouseover"]),
    Ku("onPointerEnter", ["pointerout", "pointerover"]),
    Ku("onPointerLeave", ["pointerout", "pointerover"]),
    Tu(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Tu(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Tu("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Tu(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Tu(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Tu(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var de =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Gy = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(de)
    );
  function cd(l, t) {
    t = (t & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var a = l[u],
        e = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var f = a.length - 1; 0 <= f; f--) {
            var c = a[f],
              i = c.instance,
              v = c.currentTarget;
            if (((c = c.listener), i !== n && e.isPropagationStopped()))
              break l;
            (n = c), (e.currentTarget = v);
            try {
              n(e);
            } catch (g) {
              fn(g);
            }
            (e.currentTarget = null), (n = i);
          }
        else
          for (f = 0; f < a.length; f++) {
            if (
              ((c = a[f]),
              (i = c.instance),
              (v = c.currentTarget),
              (c = c.listener),
              i !== n && e.isPropagationStopped())
            )
              break l;
            (n = c), (e.currentTarget = v);
            try {
              n(e);
            } catch (g) {
              fn(g);
            }
            (e.currentTarget = null), (n = i);
          }
      }
    }
  }
  function V(l, t) {
    var u = t[Vn];
    u === void 0 && (u = t[Vn] = new Set());
    var a = l + "__bubble";
    u.has(a) || (id(t, l, 2, !1), u.add(a));
  }
  function Rc(l, t, u) {
    var a = 0;
    t && (a |= 4), id(u, l, a, t);
  }
  var zn = "_reactListening" + Math.random().toString(36).slice(2);
  function Hc(l) {
    if (!l[zn]) {
      (l[zn] = !0),
        vi.forEach(function (u) {
          u !== "selectionchange" && (Gy.has(u) || Rc(u, !1, l), Rc(u, !0, l));
        });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[zn] || ((t[zn] = !0), Rc("selectionchange", !1, t));
    }
  }
  function id(l, t, u, a) {
    switch (Nd(t)) {
      case 2:
        var e = ih;
        break;
      case 8:
        e = sh;
        break;
      default:
        e = Vc;
    }
    (u = e.bind(null, t, u, l)),
      (e = void 0),
      !Fn ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (e = !0),
      a
        ? e !== void 0
          ? l.addEventListener(t, u, { capture: !0, passive: e })
          : l.addEventListener(t, u, !0)
        : e !== void 0
        ? l.addEventListener(t, u, { passive: e })
        : l.addEventListener(t, u, !1);
  }
  function Nc(l, t, u, a, e) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (;;) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var c = a.stateNode.containerInfo;
          if (c === e || (c.nodeType === 8 && c.parentNode === e)) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var i = f.tag;
              if (
                (i === 3 || i === 4) &&
                ((i = f.stateNode.containerInfo),
                i === e || (i.nodeType === 8 && i.parentNode === e))
              )
                return;
              f = f.return;
            }
          for (; c !== null; ) {
            if (((f = Eu(c)), f === null)) return;
            if (((i = f.tag), i === 5 || i === 6 || i === 26 || i === 27)) {
              a = n = f;
              continue l;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    Ai(function () {
      var v = n,
        g = $n(u),
        b = [];
      l: {
        var m = Fi.get(l);
        if (m !== void 0) {
          var r = Qe,
            D = l;
          switch (l) {
            case "keypress":
              if (Ge(u) === 0) break l;
            case "keydown":
            case "keyup":
              r = Rv;
              break;
            case "focusin":
              (D = "focus"), (r = tf);
              break;
            case "focusout":
              (D = "blur"), (r = tf);
              break;
            case "beforeblur":
            case "afterblur":
              r = tf;
              break;
            case "click":
              if (u.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              r = Di;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              r = gv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              r = pv;
              break;
            case wi:
            case Wi:
            case $i:
              r = Ev;
              break;
            case ki:
              r = Bv;
              break;
            case "scroll":
            case "scrollend":
              r = mv;
              break;
            case "wheel":
              r = Gv;
              break;
            case "copy":
            case "cut":
            case "paste":
              r = zv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              r = Ui;
              break;
            case "toggle":
            case "beforetoggle":
              r = Qv;
          }
          var Y = (t & 4) !== 0,
            ol = !Y && (l === "scroll" || l === "scrollend"),
            y = Y ? (m !== null ? m + "Capture" : null) : m;
          Y = [];
          for (var d = v, o; d !== null; ) {
            var S = d;
            if (
              ((o = S.stateNode),
              (S = S.tag),
              (S !== 5 && S !== 26 && S !== 27) ||
                o === null ||
                y === null ||
                ((S = Ra(d, y)), S != null && Y.push(ve(d, S, o))),
              ol)
            )
              break;
            d = d.return;
          }
          0 < Y.length &&
            ((m = new r(m, D, null, u, g)), b.push({ event: m, listeners: Y }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((m = l === "mouseover" || l === "pointerover"),
            (r = l === "mouseout" || l === "pointerout"),
            m &&
              u !== Wn &&
              (D = u.relatedTarget || u.fromElement) &&
              (Eu(D) || D[xu]))
          )
            break l;
          if (
            (r || m) &&
            ((m =
              g.window === g
                ? g
                : (m = g.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
            r
              ? ((D = u.relatedTarget || u.toElement),
                (r = v),
                (D = D ? Eu(D) : null),
                D !== null &&
                  ((ol = B(D)),
                  (Y = D.tag),
                  D !== ol || (Y !== 5 && Y !== 27 && Y !== 6)) &&
                  (D = null))
              : ((r = null), (D = v)),
            r !== D)
          ) {
            if (
              ((Y = Di),
              (S = "onMouseLeave"),
              (y = "onMouseEnter"),
              (d = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((Y = Ui),
                (S = "onPointerLeave"),
                (y = "onPointerEnter"),
                (d = "pointer")),
              (ol = r == null ? m : Ua(r)),
              (o = D == null ? m : Ua(D)),
              (m = new Y(S, d + "leave", r, u, g)),
              (m.target = ol),
              (m.relatedTarget = o),
              (S = null),
              Eu(g) === v &&
                ((Y = new Y(y, d + "enter", D, u, g)),
                (Y.target = o),
                (Y.relatedTarget = ol),
                (S = Y)),
              (ol = S),
              r && D)
            )
              t: {
                for (Y = r, y = D, d = 0, o = Y; o; o = ba(o)) d++;
                for (o = 0, S = y; S; S = ba(S)) o++;
                for (; 0 < d - o; ) (Y = ba(Y)), d--;
                for (; 0 < o - d; ) (y = ba(y)), o--;
                for (; d--; ) {
                  if (Y === y || (y !== null && Y === y.alternate)) break t;
                  (Y = ba(Y)), (y = ba(y));
                }
                Y = null;
              }
            else Y = null;
            r !== null && sd(b, m, r, Y, !1),
              D !== null && ol !== null && sd(b, ol, D, Y, !0);
          }
        }
        l: {
          if (
            ((m = v ? Ua(v) : window),
            (r = m.nodeName && m.nodeName.toLowerCase()),
            r === "select" || (r === "input" && m.type === "file"))
          )
            var _ = Gi;
          else if (Bi(m))
            if (Xi) _ = Wv;
            else {
              _ = Jv;
              var j = Kv;
            }
          else
            (r = m.nodeName),
              !r ||
              r.toLowerCase() !== "input" ||
              (m.type !== "checkbox" && m.type !== "radio")
                ? v && wn(v.elementType) && (_ = Gi)
                : (_ = wv);
          if (_ && (_ = _(l, v))) {
            Yi(b, _, u, g);
            break l;
          }
          j && j(l, m, v),
            l === "focusout" &&
              v &&
              m.type === "number" &&
              v.memoizedProps.value != null &&
              Jn(m, "number", m.value);
        }
        switch (((j = v ? Ua(v) : window), l)) {
          case "focusin":
            (Bi(j) || j.contentEditable === "true") &&
              ((Fu = j), (cf = v), (Xa = null));
            break;
          case "focusout":
            Xa = cf = Fu = null;
            break;
          case "mousedown":
            sf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (sf = !1), Ki(b, u, g);
            break;
          case "selectionchange":
            if (Fv) break;
          case "keydown":
          case "keyup":
            Ki(b, u, g);
        }
        var U;
        if (af)
          l: {
            switch (l) {
              case "compositionstart":
                var H = "onCompositionStart";
                break l;
              case "compositionend":
                H = "onCompositionEnd";
                break l;
              case "compositionupdate":
                H = "onCompositionUpdate";
                break l;
            }
            H = void 0;
          }
        else
          ku
            ? pi(l, u) && (H = "onCompositionEnd")
            : l === "keydown" &&
              u.keyCode === 229 &&
              (H = "onCompositionStart");
        H &&
          (Ri &&
            u.locale !== "ko" &&
            (ku || H !== "onCompositionStart"
              ? H === "onCompositionEnd" && ku && (U = Oi())
              : ((Pt = g),
                (Pn = "value" in Pt ? Pt.value : Pt.textContent),
                (ku = !0))),
          (j = An(v, H)),
          0 < j.length &&
            ((H = new Mi(H, l, null, u, g)),
            b.push({ event: H, listeners: j }),
            U ? (H.data = U) : ((U = qi(u)), U !== null && (H.data = U)))),
          (U = jv ? Zv(l, u) : xv(l, u)) &&
            ((H = An(v, "onBeforeInput")),
            0 < H.length &&
              ((j = new Mi("onBeforeInput", "beforeinput", null, u, g)),
              b.push({ event: j, listeners: H }),
              (j.data = U))),
          qy(b, l, v, u, g);
      }
      cd(b, t);
    });
  }
  function ve(l, t, u) {
    return { instance: l, listener: t, currentTarget: u };
  }
  function An(l, t) {
    for (var u = t + "Capture", a = []; l !== null; ) {
      var e = l,
        n = e.stateNode;
      (e = e.tag),
        (e !== 5 && e !== 26 && e !== 27) ||
          n === null ||
          ((e = Ra(l, u)),
          e != null && a.unshift(ve(l, e, n)),
          (e = Ra(l, t)),
          e != null && a.push(ve(l, e, n))),
        (l = l.return);
    }
    return a;
  }
  function ba(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function sd(l, t, u, a, e) {
    for (var n = t._reactName, f = []; u !== null && u !== a; ) {
      var c = u,
        i = c.alternate,
        v = c.stateNode;
      if (((c = c.tag), i !== null && i === a)) break;
      (c !== 5 && c !== 26 && c !== 27) ||
        v === null ||
        ((i = v),
        e
          ? ((v = Ra(u, n)), v != null && f.unshift(ve(u, v, i)))
          : e || ((v = Ra(u, n)), v != null && f.push(ve(u, v, i)))),
        (u = u.return);
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var Xy = /\r\n?/g,
    Qy = /\u0000|\uFFFD/g;
  function dd(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        Xy,
        `
`
      )
      .replace(Qy, "");
  }
  function vd(l, t) {
    return (t = dd(t)), dd(l) === t;
  }
  function On() {}
  function ll(l, t, u, a, e, n) {
    switch (u) {
      case "children":
        typeof a == "string"
          ? t === "body" || (t === "textarea" && a === "") || wu(l, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            t !== "body" &&
            wu(l, "" + a);
        break;
      case "className":
        Ne(l, "class", a);
        break;
      case "tabIndex":
        Ne(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ne(l, u, a);
        break;
      case "style":
        Ti(l, a, n);
        break;
      case "data":
        if (t !== "object") {
          Ne(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          l.removeAttribute(u);
          break;
        }
        (a = Be("" + a)), l.setAttribute(u, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" &&
            (u === "formAction"
              ? (t !== "input" && ll(l, t, "name", e.name, e, null),
                ll(l, t, "formEncType", e.formEncType, e, null),
                ll(l, t, "formMethod", e.formMethod, e, null),
                ll(l, t, "formTarget", e.formTarget, e, null))
              : (ll(l, t, "encType", e.encType, e, null),
                ll(l, t, "method", e.method, e, null),
                ll(l, t, "target", e.target, e, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        (a = Be("" + a)), l.setAttribute(u, a);
        break;
      case "onClick":
        a != null && (l.onclick = On);
        break;
      case "onScroll":
        a != null && V("scroll", l);
        break;
      case "onScrollEnd":
        a != null && V("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(h(61));
          if (((u = a.__html), u != null)) {
            if (e.children != null) throw Error(h(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        (u = Be("" + a)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", u);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? l.setAttribute(u, "" + a)
          : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? l.setAttribute(u, "")
          : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        a === !0
          ? l.setAttribute(u, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? l.setAttribute(u, a)
          : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? l.setAttribute(u, a)
          : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? l.removeAttribute(u)
          : l.setAttribute(u, a);
        break;
      case "popover":
        V("beforetoggle", l), V("toggle", l), He(l, "popover", a);
        break;
      case "xlinkActuate":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        He(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) ||
          (u[0] !== "o" && u[0] !== "O") ||
          (u[1] !== "n" && u[1] !== "N")) &&
          ((u = hv.get(u) || u), He(l, u, a));
    }
  }
  function pc(l, t, u, a, e, n) {
    switch (u) {
      case "style":
        Ti(l, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(h(61));
          if (((u = a.__html), u != null)) {
            if (e.children != null) throw Error(h(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? wu(l, a)
          : (typeof a == "number" || typeof a == "bigint") && wu(l, "" + a);
        break;
      case "onScroll":
        a != null && V("scroll", l);
        break;
      case "onScrollEnd":
        a != null && V("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = On);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!yi.hasOwnProperty(u))
          l: {
            if (
              u[0] === "o" &&
              u[1] === "n" &&
              ((e = u.endsWith("Capture")),
              (t = u.slice(2, e ? u.length - 7 : void 0)),
              (n = l[Zl] || null),
              (n = n != null ? n[u] : null),
              typeof n == "function" && l.removeEventListener(t, n, e),
              typeof a == "function")
            ) {
              typeof n != "function" &&
                n !== null &&
                (u in l
                  ? (l[u] = null)
                  : l.hasAttribute(u) && l.removeAttribute(u)),
                l.addEventListener(t, a, e);
              break l;
            }
            u in l
              ? (l[u] = a)
              : a === !0
              ? l.setAttribute(u, "")
              : He(l, u, a);
          }
    }
  }
  function Hl(l, t, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        V("error", l), V("load", l);
        var a = !1,
          e = !1,
          n;
        for (n in u)
          if (u.hasOwnProperty(n)) {
            var f = u[n];
            if (f != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(h(137, t));
                default:
                  ll(l, t, n, f, u, null);
              }
          }
        e && ll(l, t, "srcSet", u.srcSet, u, null),
          a && ll(l, t, "src", u.src, u, null);
        return;
      case "input":
        V("invalid", l);
        var c = (n = f = e = null),
          i = null,
          v = null;
        for (a in u)
          if (u.hasOwnProperty(a)) {
            var g = u[a];
            if (g != null)
              switch (a) {
                case "name":
                  e = g;
                  break;
                case "type":
                  f = g;
                  break;
                case "checked":
                  i = g;
                  break;
                case "defaultChecked":
                  v = g;
                  break;
                case "value":
                  n = g;
                  break;
                case "defaultValue":
                  c = g;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (g != null) throw Error(h(137, t));
                  break;
                default:
                  ll(l, t, a, g, u, null);
              }
          }
        gi(l, n, c, i, v, f, e, !1), pe(l);
        return;
      case "select":
        V("invalid", l), (a = f = n = null);
        for (e in u)
          if (u.hasOwnProperty(e) && ((c = u[e]), c != null))
            switch (e) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                f = c;
                break;
              case "multiple":
                a = c;
              default:
                ll(l, t, e, c, u, null);
            }
        (t = n),
          (u = f),
          (l.multiple = !!a),
          t != null ? Ju(l, !!a, t, !1) : u != null && Ju(l, !!a, u, !0);
        return;
      case "textarea":
        V("invalid", l), (n = e = a = null);
        for (f in u)
          if (u.hasOwnProperty(f) && ((c = u[f]), c != null))
            switch (f) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                e = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(h(91));
                break;
              default:
                ll(l, t, f, c, u, null);
            }
        bi(l, a, e, n), pe(l);
        return;
      case "option":
        for (i in u)
          if (u.hasOwnProperty(i) && ((a = u[i]), a != null))
            switch (i) {
              case "selected":
                l.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                ll(l, t, i, a, u, null);
            }
        return;
      case "dialog":
        V("cancel", l), V("close", l);
        break;
      case "iframe":
      case "object":
        V("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < de.length; a++) V(de[a], l);
        break;
      case "image":
        V("error", l), V("load", l);
        break;
      case "details":
        V("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        V("error", l), V("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (v in u)
          if (u.hasOwnProperty(v) && ((a = u[v]), a != null))
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(h(137, t));
              default:
                ll(l, t, v, a, u, null);
            }
        return;
      default:
        if (wn(t)) {
          for (g in u)
            u.hasOwnProperty(g) &&
              ((a = u[g]), a !== void 0 && pc(l, t, g, a, u, void 0));
          return;
        }
    }
    for (c in u)
      u.hasOwnProperty(c) && ((a = u[c]), a != null && ll(l, t, c, a, u, null));
  }
  function Cy(l, t, u, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null,
          n = null,
          f = null,
          c = null,
          i = null,
          v = null,
          g = null;
        for (r in u) {
          var b = u[r];
          if (u.hasOwnProperty(r) && b != null)
            switch (r) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = b;
              default:
                a.hasOwnProperty(r) || ll(l, t, r, null, a, b);
            }
        }
        for (var m in a) {
          var r = a[m];
          if (((b = u[m]), a.hasOwnProperty(m) && (r != null || b != null)))
            switch (m) {
              case "type":
                n = r;
                break;
              case "name":
                e = r;
                break;
              case "checked":
                v = r;
                break;
              case "defaultChecked":
                g = r;
                break;
              case "value":
                f = r;
                break;
              case "defaultValue":
                c = r;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(h(137, t));
                break;
              default:
                r !== b && ll(l, t, m, r, a, b);
            }
        }
        Kn(l, f, c, i, v, g, n, e);
        return;
      case "select":
        r = f = c = m = null;
        for (n in u)
          if (((i = u[n]), u.hasOwnProperty(n) && i != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                r = i;
              default:
                a.hasOwnProperty(n) || ll(l, t, n, null, a, i);
            }
        for (e in a)
          if (
            ((n = a[e]),
            (i = u[e]),
            a.hasOwnProperty(e) && (n != null || i != null))
          )
            switch (e) {
              case "value":
                m = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                f = n;
              default:
                n !== i && ll(l, t, e, n, a, i);
            }
        (t = c),
          (u = f),
          (a = r),
          m != null
            ? Ju(l, !!u, m, !1)
            : !!a != !!u &&
              (t != null ? Ju(l, !!u, t, !0) : Ju(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        r = m = null;
        for (c in u)
          if (
            ((e = u[c]),
            u.hasOwnProperty(c) && e != null && !a.hasOwnProperty(c))
          )
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                ll(l, t, c, null, a, e);
            }
        for (f in a)
          if (
            ((e = a[f]),
            (n = u[f]),
            a.hasOwnProperty(f) && (e != null || n != null))
          )
            switch (f) {
              case "value":
                m = e;
                break;
              case "defaultValue":
                r = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(h(91));
                break;
              default:
                e !== n && ll(l, t, f, e, a, n);
            }
        Si(l, m, r);
        return;
      case "option":
        for (var D in u)
          if (
            ((m = u[D]),
            u.hasOwnProperty(D) && m != null && !a.hasOwnProperty(D))
          )
            switch (D) {
              case "selected":
                l.selected = !1;
                break;
              default:
                ll(l, t, D, null, a, m);
            }
        for (i in a)
          if (
            ((m = a[i]),
            (r = u[i]),
            a.hasOwnProperty(i) && m !== r && (m != null || r != null))
          )
            switch (i) {
              case "selected":
                l.selected =
                  m && typeof m != "function" && typeof m != "symbol";
                break;
              default:
                ll(l, t, i, m, a, r);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Y in u)
          (m = u[Y]),
            u.hasOwnProperty(Y) &&
              m != null &&
              !a.hasOwnProperty(Y) &&
              ll(l, t, Y, null, a, m);
        for (v in a)
          if (
            ((m = a[v]),
            (r = u[v]),
            a.hasOwnProperty(v) && m !== r && (m != null || r != null))
          )
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(h(137, t));
                break;
              default:
                ll(l, t, v, m, a, r);
            }
        return;
      default:
        if (wn(t)) {
          for (var ol in u)
            (m = u[ol]),
              u.hasOwnProperty(ol) &&
                m !== void 0 &&
                !a.hasOwnProperty(ol) &&
                pc(l, t, ol, void 0, a, m);
          for (g in a)
            (m = a[g]),
              (r = u[g]),
              !a.hasOwnProperty(g) ||
                m === r ||
                (m === void 0 && r === void 0) ||
                pc(l, t, g, m, a, r);
          return;
        }
    }
    for (var y in u)
      (m = u[y]),
        u.hasOwnProperty(y) &&
          m != null &&
          !a.hasOwnProperty(y) &&
          ll(l, t, y, null, a, m);
    for (b in a)
      (m = a[b]),
        (r = u[b]),
        !a.hasOwnProperty(b) ||
          m === r ||
          (m == null && r == null) ||
          ll(l, t, b, m, a, r);
  }
  var qc = null,
    Bc = null;
  function _n(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function yd(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function hd(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Yc(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Gc = null;
  function jy() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === Gc
        ? !1
        : ((Gc = l), !0)
      : ((Gc = null), !1);
  }
  var od = typeof setTimeout == "function" ? setTimeout : void 0,
    Zy = typeof clearTimeout == "function" ? clearTimeout : void 0,
    md = typeof Promise == "function" ? Promise : void 0,
    xy =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof md < "u"
        ? function (l) {
            return md.resolve(null).then(l).catch(Vy);
          }
        : od;
  function Vy(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function Xc(l, t) {
    var u = t,
      a = 0;
    do {
      var e = u.nextSibling;
      if ((l.removeChild(u), e && e.nodeType === 8))
        if (((u = e.data), u === "/$")) {
          if (a === 0) {
            l.removeChild(e), be(t);
            return;
          }
          a--;
        } else (u !== "$" && u !== "$?" && u !== "$!") || a++;
      u = e;
    } while (u);
    be(t);
  }
  function Qc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var u = t;
      switch (((t = t.nextSibling), u.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Qc(u), Ln(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function Ly(l, t, u, a) {
    for (; l.nodeType === 1; ) {
      var e = u;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (a) {
        if (!l[Ma])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== e.rel ||
                l.getAttribute("href") !== (e.href == null ? null : e.href) ||
                l.getAttribute("crossorigin") !==
                  (e.crossOrigin == null ? null : e.crossOrigin) ||
                l.getAttribute("title") !== (e.title == null ? null : e.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (e.src == null ? null : e.src) ||
                  l.getAttribute("type") !== (e.type == null ? null : e.type) ||
                  l.getAttribute("crossorigin") !==
                    (e.crossOrigin == null ? null : e.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = rt(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function Ky(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !u) ||
        ((l = rt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function rt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return l;
  }
  function rd(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (t === 0) return l;
          t--;
        } else u === "/$" && t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function gd(l, t, u) {
    switch (((t = _n(u)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(h(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(h(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(h(454));
        return l;
      default:
        throw Error(h(451));
    }
  }
  var vt = new Map(),
    Sd = new Set();
  function Dn(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.ownerDocument;
  }
  var Kt = O.d;
  O.d = { f: Jy, r: wy, D: Wy, C: $y, L: ky, m: Fy, X: Iy, S: Py, M: lh };
  function Jy() {
    var l = Kt.f(),
      t = Sn();
    return l || t;
  }
  function wy(l) {
    var t = Vu(l);
    t !== null && t.tag === 5 && t.type === "form" ? Ks(t) : Kt.r(l);
  }
  var Ea = typeof document > "u" ? null : document;
  function bd(l, t, u) {
    var a = Ea;
    if (a && typeof t == "string" && t) {
      var e = tt(t);
      (e = 'link[rel="' + l + '"][href="' + e + '"]'),
        typeof u == "string" && (e += '[crossorigin="' + u + '"]'),
        Sd.has(e) ||
          (Sd.add(e),
          (l = { rel: l, crossOrigin: u, href: t }),
          a.querySelector(e) === null &&
            ((t = a.createElement("link")),
            Hl(t, "link", l),
            Ol(t),
            a.head.appendChild(t)));
    }
  }
  function Wy(l) {
    Kt.D(l), bd("dns-prefetch", l, null);
  }
  function $y(l, t) {
    Kt.C(l, t), bd("preconnect", l, t);
  }
  function ky(l, t, u) {
    Kt.L(l, t, u);
    var a = Ea;
    if (a && l && t) {
      var e = 'link[rel="preload"][as="' + tt(t) + '"]';
      t === "image" && u && u.imageSrcSet
        ? ((e += '[imagesrcset="' + tt(u.imageSrcSet) + '"]'),
          typeof u.imageSizes == "string" &&
            (e += '[imagesizes="' + tt(u.imageSizes) + '"]'))
        : (e += '[href="' + tt(l) + '"]');
      var n = e;
      switch (t) {
        case "style":
          n = Ta(l);
          break;
        case "script":
          n = za(l);
      }
      vt.has(n) ||
        ((l = F(
          {
            rel: "preload",
            href: t === "image" && u && u.imageSrcSet ? void 0 : l,
            as: t,
          },
          u
        )),
        vt.set(n, l),
        a.querySelector(e) !== null ||
          (t === "style" && a.querySelector(ye(n))) ||
          (t === "script" && a.querySelector(he(n))) ||
          ((t = a.createElement("link")),
          Hl(t, "link", l),
          Ol(t),
          a.head.appendChild(t)));
    }
  }
  function Fy(l, t) {
    Kt.m(l, t);
    var u = Ea;
    if (u && l) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        e =
          'link[rel="modulepreload"][as="' + tt(a) + '"][href="' + tt(l) + '"]',
        n = e;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = za(l);
      }
      if (
        !vt.has(n) &&
        ((l = F({ rel: "modulepreload", href: l }, t)),
        vt.set(n, l),
        u.querySelector(e) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(he(n))) return;
        }
        (a = u.createElement("link")),
          Hl(a, "link", l),
          Ol(a),
          u.head.appendChild(a);
      }
    }
  }
  function Py(l, t, u) {
    Kt.S(l, t, u);
    var a = Ea;
    if (a && l) {
      var e = Lu(a).hoistableStyles,
        n = Ta(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var c = { loading: 0, preload: null };
        if ((f = a.querySelector(ye(n)))) c.loading = 5;
        else {
          (l = F({ rel: "stylesheet", href: l, "data-precedence": t }, u)),
            (u = vt.get(n)) && Cc(l, u);
          var i = (f = a.createElement("link"));
          Ol(i),
            Hl(i, "link", l),
            (i._p = new Promise(function (v, g) {
              (i.onload = v), (i.onerror = g);
            })),
            i.addEventListener("load", function () {
              c.loading |= 1;
            }),
            i.addEventListener("error", function () {
              c.loading |= 2;
            }),
            (c.loading |= 4),
            Mn(f, t, a);
        }
        (f = { type: "stylesheet", instance: f, count: 1, state: c }),
          e.set(n, f);
      }
    }
  }
  function Iy(l, t) {
    Kt.X(l, t);
    var u = Ea;
    if (u && l) {
      var a = Lu(u).hoistableScripts,
        e = za(l),
        n = a.get(e);
      n ||
        ((n = u.querySelector(he(e))),
        n ||
          ((l = F({ src: l, async: !0 }, t)),
          (t = vt.get(e)) && jc(l, t),
          (n = u.createElement("script")),
          Ol(n),
          Hl(n, "link", l),
          u.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(e, n));
    }
  }
  function lh(l, t) {
    Kt.M(l, t);
    var u = Ea;
    if (u && l) {
      var a = Lu(u).hoistableScripts,
        e = za(l),
        n = a.get(e);
      n ||
        ((n = u.querySelector(he(e))),
        n ||
          ((l = F({ src: l, async: !0, type: "module" }, t)),
          (t = vt.get(e)) && jc(l, t),
          (n = u.createElement("script")),
          Ol(n),
          Hl(n, "link", l),
          u.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(e, n));
    }
  }
  function Ed(l, t, u, a) {
    var e = (e = $t.current) ? Dn(e) : null;
    if (!e) throw Error(h(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string"
          ? ((t = Ta(u.href)),
            (u = Lu(e).hoistableStyles),
            (a = u.get(t)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              u.set(t, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          u.rel === "stylesheet" &&
          typeof u.href == "string" &&
          typeof u.precedence == "string"
        ) {
          l = Ta(u.href);
          var n = Lu(e).hoistableStyles,
            f = n.get(l);
          if (
            (f ||
              ((e = e.ownerDocument || e),
              (f = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, f),
              (n = e.querySelector(ye(l))) &&
                !n._p &&
                ((f.instance = n), (f.state.loading = 5)),
              vt.has(l) ||
                ((u = {
                  rel: "preload",
                  as: "style",
                  href: u.href,
                  crossOrigin: u.crossOrigin,
                  integrity: u.integrity,
                  media: u.media,
                  hrefLang: u.hrefLang,
                  referrerPolicy: u.referrerPolicy,
                }),
                vt.set(l, u),
                n || th(e, l, u, f.state))),
            t && a === null)
          )
            throw Error(h(528, ""));
          return f;
        }
        if (t && a !== null) throw Error(h(529, ""));
        return null;
      case "script":
        return (
          (t = u.async),
          (u = u.src),
          typeof u == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = za(u)),
              (u = Lu(e).hoistableScripts),
              (a = u.get(t)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                u.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(h(444, l));
    }
  }
  function Ta(l) {
    return 'href="' + tt(l) + '"';
  }
  function ye(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Td(l) {
    return F({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function th(l, t, u, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (a.loading = 1)
      : ((t = l.createElement("link")),
        (a.preload = t),
        t.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Hl(t, "link", u),
        Ol(t),
        l.head.appendChild(t));
  }
  function za(l) {
    return '[src="' + tt(l) + '"]';
  }
  function he(l) {
    return "script[async]" + l;
  }
  function zd(l, t, u) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = l.querySelector('style[data-href~="' + tt(u.href) + '"]');
          if (a) return (t.instance = a), Ol(a), a;
          var e = F({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (l.ownerDocument || l).createElement("style")),
            Ol(a),
            Hl(a, "style", e),
            Mn(a, u.precedence, l),
            (t.instance = a)
          );
        case "stylesheet":
          e = Ta(u.href);
          var n = l.querySelector(ye(e));
          if (n) return (t.state.loading |= 4), (t.instance = n), Ol(n), n;
          (a = Td(u)),
            (e = vt.get(e)) && Cc(a, e),
            (n = (l.ownerDocument || l).createElement("link")),
            Ol(n);
          var f = n;
          return (
            (f._p = new Promise(function (c, i) {
              (f.onload = c), (f.onerror = i);
            })),
            Hl(n, "link", a),
            (t.state.loading |= 4),
            Mn(n, u.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = za(u.src)),
            (e = l.querySelector(he(n)))
              ? ((t.instance = e), Ol(e), e)
              : ((a = u),
                (e = vt.get(n)) && ((a = F({}, u)), jc(a, e)),
                (l = l.ownerDocument || l),
                (e = l.createElement("script")),
                Ol(e),
                Hl(e, "link", a),
                l.head.appendChild(e),
                (t.instance = e))
          );
        case "void":
          return null;
        default:
          throw Error(h(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), Mn(a, u.precedence, l));
    return t.instance;
  }
  function Mn(l, t, u) {
    for (
      var a = u.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        e = a.length ? a[a.length - 1] : null,
        n = e,
        f = 0;
      f < a.length;
      f++
    ) {
      var c = a[f];
      if (c.dataset.precedence === t) n = c;
      else if (n !== e) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = u.nodeType === 9 ? u.head : u), t.insertBefore(l, t.firstChild));
  }
  function Cc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title);
  }
  function jc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity);
  }
  var Un = null;
  function Ad(l, t, u) {
    if (Un === null) {
      var a = new Map(),
        e = (Un = new Map());
      e.set(u, a);
    } else (e = Un), (a = e.get(u)), a || ((a = new Map()), e.set(u, a));
    if (a.has(l)) return a;
    for (
      a.set(l, null), u = u.getElementsByTagName(l), e = 0;
      e < u.length;
      e++
    ) {
      var n = u[e];
      if (
        !(
          n[Ma] ||
          n[Nl] ||
          (l === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var c = a.get(f);
        c ? c.push(n) : a.set(f, [n]);
      }
    }
    return a;
  }
  function Od(l, t, u) {
    (l = l.ownerDocument || l),
      l.head.insertBefore(
        u,
        t === "title" ? l.querySelector("head > title") : null
      );
  }
  function uh(l, t, u) {
    if (u === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (l = t.disabled), typeof t.precedence == "string" && l == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function _d(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var oe = null;
  function ah() {}
  function eh(l, t, u) {
    if (oe === null) throw Error(h(475));
    var a = oe;
    if (
      t.type === "stylesheet" &&
      (typeof u.media != "string" || matchMedia(u.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var e = Ta(u.href),
          n = l.querySelector(ye(e));
        if (n) {
          (l = n._p),
            l !== null &&
              typeof l == "object" &&
              typeof l.then == "function" &&
              (a.count++, (a = Rn.bind(a)), l.then(a, a)),
            (t.state.loading |= 4),
            (t.instance = n),
            Ol(n);
          return;
        }
        (n = l.ownerDocument || l),
          (u = Td(u)),
          (e = vt.get(e)) && Cc(u, e),
          (n = n.createElement("link")),
          Ol(n);
        var f = n;
        (f._p = new Promise(function (c, i) {
          (f.onload = c), (f.onerror = i);
        })),
          Hl(n, "link", u),
          (t.instance = n);
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(t, l),
        (l = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (a.count++,
          (t = Rn.bind(a)),
          l.addEventListener("load", t),
          l.addEventListener("error", t));
    }
  }
  function nh() {
    if (oe === null) throw Error(h(475));
    var l = oe;
    return (
      l.stylesheets && l.count === 0 && Zc(l, l.stylesheets),
      0 < l.count
        ? function (t) {
            var u = setTimeout(function () {
              if ((l.stylesheets && Zc(l, l.stylesheets), l.unsuspend)) {
                var a = l.unsuspend;
                (l.unsuspend = null), a();
              }
            }, 6e4);
            return (
              (l.unsuspend = t),
              function () {
                (l.unsuspend = null), clearTimeout(u);
              }
            );
          }
        : null
    );
  }
  function Rn() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Zc(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        (this.unsuspend = null), l();
      }
    }
  }
  var Hn = null;
  function Zc(l, t) {
    (l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Hn = new Map()),
        t.forEach(fh, l),
        (Hn = null),
        Rn.call(l));
  }
  function fh(l, t) {
    if (!(t.state.loading & 4)) {
      var u = Hn.get(l);
      if (u) var a = u.get(null);
      else {
        (u = new Map()), Hn.set(l, u);
        for (
          var e = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            n = 0;
          n < e.length;
          n++
        ) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") &&
            (u.set(f.dataset.precedence, f), (a = f));
        }
        a && u.set(null, a);
      }
      (e = t.instance),
        (f = e.getAttribute("data-precedence")),
        (n = u.get(f) || a),
        n === a && u.set(null, e),
        u.set(f, e),
        this.count++,
        (a = Rn.bind(this)),
        e.addEventListener("load", a),
        e.addEventListener("error", a),
        n
          ? n.parentNode.insertBefore(e, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(e, l.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var me = {
    $$typeof: gl,
    Provider: null,
    Consumer: null,
    _currentValue: L,
    _currentValue2: L,
    _threadCount: 0,
  };
  function ch(l, t, u, a, e, n, f, c) {
    (this.tag = 1),
      (this.containerInfo = l),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = xn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.finishedLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = xn(0)),
      (this.hiddenUpdates = xn(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = e),
      (this.onCaughtError = n),
      (this.onRecoverableError = f),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = c),
      (this.incompleteTransitions = new Map());
  }
  function Dd(l, t, u, a, e, n, f, c, i, v, g, b) {
    return (
      (l = new ch(l, t, u, f, c, i, v, b)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = st(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = bf()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: a, isDehydrated: u, cache: t }),
      If(n),
      l
    );
  }
  function Md(l) {
    return l ? ((l = la), l) : la;
  }
  function Ud(l, t, u, a, e, n) {
    (e = Md(e)),
      a.context === null ? (a.context = e) : (a.pendingContext = e),
      (a = fu(t)),
      (a.payload = { element: u }),
      (n = n === void 0 ? null : n),
      n !== null && (a.callback = n),
      (u = cu(l, a, t)),
      u !== null && (Xl(u, l, t), Pa(u, l, t));
  }
  function Rd(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function xc(l, t) {
    Rd(l, t), (l = l.alternate) && Rd(l, t);
  }
  function Hd(l) {
    if (l.tag === 13) {
      var t = It(l, 67108864);
      t !== null && Xl(t, l, 67108864), xc(l, 67108864);
    }
  }
  var Nn = !0;
  function ih(l, t, u, a) {
    var e = N.T;
    N.T = null;
    var n = O.p;
    try {
      (O.p = 2), Vc(l, t, u, a);
    } finally {
      (O.p = n), (N.T = e);
    }
  }
  function sh(l, t, u, a) {
    var e = N.T;
    N.T = null;
    var n = O.p;
    try {
      (O.p = 8), Vc(l, t, u, a);
    } finally {
      (O.p = n), (N.T = e);
    }
  }
  function Vc(l, t, u, a) {
    if (Nn) {
      var e = Lc(a);
      if (e === null) Nc(l, t, a, pn, u), pd(l, a);
      else if (vh(e, l, t, u, a)) a.stopPropagation();
      else if ((pd(l, a), t & 4 && -1 < dh.indexOf(l))) {
        for (; e !== null; ) {
          var n = Vu(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var f = bu(n.pendingLanes);
                  if (f !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                      var i = 1 << (31 - Jl(f));
                      (c.entanglements[1] |= i), (f &= ~i);
                    }
                    _t(n), (vl & 6) === 0 && ((mn = Et() + 500), se(0));
                  }
                }
                break;
              case 13:
                (c = It(n, 2)), c !== null && Xl(c, n, 2), Sn(), xc(n, 2);
            }
          if (((n = Lc(a)), n === null && Nc(l, t, a, pn, u), n === e)) break;
          e = n;
        }
        e !== null && a.stopPropagation();
      } else Nc(l, t, a, null, u);
    }
  }
  function Lc(l) {
    return (l = $n(l)), Kc(l);
  }
  var pn = null;
  function Kc(l) {
    if (((pn = null), (l = Eu(l)), l !== null)) {
      var t = B(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (((l = el(t)), l !== null)) return l;
          l = null;
        } else if (u === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return (pn = l), null;
  }
  function Nd(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch ($d()) {
          case ti:
            return 2;
          case ui:
            return 8;
          case De:
          case kd:
            return 32;
          case ai:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Jc = !1,
    ou = null,
    mu = null,
    ru = null,
    re = new Map(),
    ge = new Map(),
    gu = [],
    dh =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function pd(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ou = null;
        break;
      case "dragenter":
      case "dragleave":
        mu = null;
        break;
      case "mouseover":
      case "mouseout":
        ru = null;
        break;
      case "pointerover":
      case "pointerout":
        re.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ge.delete(t.pointerId);
    }
  }
  function Se(l, t, u, a, e, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: u,
          eventSystemFlags: a,
          nativeEvent: n,
          targetContainers: [e],
        }),
        t !== null && ((t = Vu(t)), t !== null && Hd(t)),
        l)
      : ((l.eventSystemFlags |= a),
        (t = l.targetContainers),
        e !== null && t.indexOf(e) === -1 && t.push(e),
        l);
  }
  function vh(l, t, u, a, e) {
    switch (t) {
      case "focusin":
        return (ou = Se(ou, l, t, u, a, e)), !0;
      case "dragenter":
        return (mu = Se(mu, l, t, u, a, e)), !0;
      case "mouseover":
        return (ru = Se(ru, l, t, u, a, e)), !0;
      case "pointerover":
        var n = e.pointerId;
        return re.set(n, Se(re.get(n) || null, l, t, u, a, e)), !0;
      case "gotpointercapture":
        return (
          (n = e.pointerId), ge.set(n, Se(ge.get(n) || null, l, t, u, a, e)), !0
        );
    }
    return !1;
  }
  function qd(l) {
    var t = Eu(l.target);
    if (t !== null) {
      var u = B(t);
      if (u !== null) {
        if (((t = u.tag), t === 13)) {
          if (((t = el(u)), t !== null)) {
            (l.blockedOn = t),
              nv(l.priority, function () {
                if (u.tag === 13) {
                  var a = Fl(),
                    e = It(u, a);
                  e !== null && Xl(e, u, a), xc(u, a);
                }
              });
            return;
          }
        } else if (t === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function qn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var u = Lc(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var a = new u.constructor(u.type, u);
        (Wn = a), u.target.dispatchEvent(a), (Wn = null);
      } else return (t = Vu(u)), t !== null && Hd(t), (l.blockedOn = u), !1;
      t.shift();
    }
    return !0;
  }
  function Bd(l, t, u) {
    qn(l) && u.delete(t);
  }
  function yh() {
    (Jc = !1),
      ou !== null && qn(ou) && (ou = null),
      mu !== null && qn(mu) && (mu = null),
      ru !== null && qn(ru) && (ru = null),
      re.forEach(Bd),
      ge.forEach(Bd);
  }
  function Bn(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      Jc ||
        ((Jc = !0),
        A.unstable_scheduleCallback(A.unstable_NormalPriority, yh)));
  }
  var Yn = null;
  function Yd(l) {
    Yn !== l &&
      ((Yn = l),
      A.unstable_scheduleCallback(A.unstable_NormalPriority, function () {
        Yn === l && (Yn = null);
        for (var t = 0; t < l.length; t += 3) {
          var u = l[t],
            a = l[t + 1],
            e = l[t + 2];
          if (typeof a != "function") {
            if (Kc(a || u) === null) continue;
            break;
          }
          var n = Vu(u);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            Yf(n, { pending: !0, data: e, method: u.method, action: a }, a, e));
        }
      }));
  }
  function be(l) {
    function t(i) {
      return Bn(i, l);
    }
    ou !== null && Bn(ou, l),
      mu !== null && Bn(mu, l),
      ru !== null && Bn(ru, l),
      re.forEach(t),
      ge.forEach(t);
    for (var u = 0; u < gu.length; u++) {
      var a = gu[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < gu.length && ((u = gu[0]), u.blockedOn === null); )
      qd(u), u.blockedOn === null && gu.shift();
    if (((u = (l.ownerDocument || l).$$reactFormReplay), u != null))
      for (a = 0; a < u.length; a += 3) {
        var e = u[a],
          n = u[a + 1],
          f = e[Zl] || null;
        if (typeof n == "function") f || Yd(u);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (((e = n), (f = n[Zl] || null))) c = f.formAction;
            else if (Kc(e) !== null) continue;
          } else c = f.action;
          typeof c == "function" ? (u[a + 1] = c) : (u.splice(a, 3), (a -= 3)),
            Yd(u);
        }
      }
  }
  function wc(l) {
    this._internalRoot = l;
  }
  (Gn.prototype.render = wc.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(h(409));
      var u = t.current,
        a = Fl();
      Ud(u, a, l, t, null, null);
    }),
    (Gn.prototype.unmount = wc.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          l.tag === 0 && ga(),
            Ud(l.current, 2, null, l, null, null),
            Sn(),
            (t[xu] = null);
        }
      });
  function Gn(l) {
    this._internalRoot = l;
  }
  Gn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = si();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < gu.length && t !== 0 && t < gu[u].priority; u++);
      gu.splice(u, 0, l), u === 0 && qd(l);
    }
  };
  var Gd = ul.version;
  if (Gd !== "19.0.0") throw Error(h(527, Gd, "19.0.0"));
  O.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(h(188))
        : ((l = Object.keys(l).join(",")), Error(h(268, l)));
    return (
      (l = T(t)),
      (l = l !== null ? p(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var hh = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: N,
    findFiberByHostInstance: Eu,
    reconcilerVersion: "19.0.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xn.isDisabled && Xn.supportsFiber)
      try {
        (Oa = Xn.inject(hh)), (Kl = Xn);
      } catch {}
  }
  return (
    (Te.createRoot = function (l, t) {
      if (!q(l)) throw Error(h(299));
      var u = !1,
        a = "",
        e = Is,
        n = l0,
        f = t0,
        c = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (u = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (e = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (f = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (c = t.unstable_transitionCallbacks)),
        (t = Dd(l, 1, !1, null, null, u, a, e, n, f, c, null)),
        (l[xu] = t.current),
        Hc(l.nodeType === 8 ? l.parentNode : l),
        new wc(t)
      );
    }),
    (Te.hydrateRoot = function (l, t, u) {
      if (!q(l)) throw Error(h(299));
      var a = !1,
        e = "",
        n = Is,
        f = l0,
        c = t0,
        i = null,
        v = null;
      return (
        u != null &&
          (u.unstable_strictMode === !0 && (a = !0),
          u.identifierPrefix !== void 0 && (e = u.identifierPrefix),
          u.onUncaughtError !== void 0 && (n = u.onUncaughtError),
          u.onCaughtError !== void 0 && (f = u.onCaughtError),
          u.onRecoverableError !== void 0 && (c = u.onRecoverableError),
          u.unstable_transitionCallbacks !== void 0 &&
            (i = u.unstable_transitionCallbacks),
          u.formState !== void 0 && (v = u.formState)),
        (t = Dd(l, 1, !0, t, u ?? null, a, e, n, f, c, i, v)),
        (t.context = Md(null)),
        (u = t.current),
        (a = Fl()),
        (e = fu(a)),
        (e.callback = null),
        cu(u, e, a),
        (t.current.lanes = a),
        Da(t, a),
        _t(t),
        (l[xu] = t.current),
        Hc(l),
        new Gn(t)
      );
    }),
    (Te.version = "19.0.0"),
    Te
  );
}
var Jd;
function Ah() {
  if (Jd) return kc.exports;
  Jd = 1;
  function A() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
      } catch (ul) {
        console.error(ul);
      }
  }
  return A(), (kc.exports = zh()), kc.exports;
}
var Oh = Ah();
const _h = ({
  targetId: A,
  buttonText: ul = "Click Me",
  onClick: x = () => alert("Button clicked inside shadow DOM!"),
}) => {
  const h = ze.useRef(null);
  return (
    ze.useEffect(() => {
      const q = document.getElementById(A);
      if (!q) {
        console.error(`Element with id "${A}" not found`);
        return;
      }
      if (q.shadowRoot)
        for (
          console.log("Element already has a shadow root, using existing one"),
            h.current = q.shadowRoot;
          h.current.firstChild;

        )
          h.current.firstChild.remove();
      else
        console.log("Creating new shadow root"),
          (h.current = q.attachShadow({ mode: "open" }));
      const W = document.createElement("button");
      (W.textContent = ul), W.addEventListener("click", x);
      const al = document.createElement("style");
      return (
        (al.textContent = `
      button {
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 8px;
        transition: background-color 0.3s;
      }
      
      button:hover {
        background-color: #45a049;
      }
      
      button:active {
        background-color: #3e8e41;
      }
    `),
        h.current.appendChild(al),
        h.current.appendChild(W),
        () => {
          if (h.current) {
            const ml = h.current.querySelector("button");
            for (
              ml && ml.removeEventListener("click", x);
              h.current.firstChild;

            )
              h.current.firstChild.remove();
          }
        }
      );
    }, [A, ul, x]),
    null
  );
};
function Dh() {
  const [A, ul] = ze.useState(!1);
  ze.useEffect(() => {
    let h = document.getElementById("bytebellai");
    return (
      h ||
        ((h = document.createElement("div")),
        (h.id = "bytebellai"),
        (h.style.width = "300px"),
        (h.style.height = "100px"),
        (h.style.margin = "20px auto"),
        (h.style.padding = "20px"),
        (h.style.border = "1px dashed #ccc"),
        (h.style.borderRadius = "8px"),
        (h.style.display = "flex"),
        (h.style.justifyContent = "center"),
        (h.style.alignItems = "center"),
        document.body.appendChild(h)),
      ul(!0),
      () => {
        const q = document.getElementById("bytebellai");
        q &&
          q.parentElement &&
          !q.hasChildNodes() &&
          q.parentElement.removeChild(q);
      }
    );
  }, []);
  const x = () => {
    console.log("Button in shadow DOM was clicked!"),
      alert("Hello from the shadow DOM!");
  };
  return gt.jsxs("div", {
    className: "app",
    children: [
      gt.jsx("h1", { children: "Shadow DOM Button Example" }),
      gt.jsx("p", {
        children:
          'This example shows a button inside a Shadow DOM attached to an element with ID "bytebellai".',
      }),
      gt.jsx("p", {
        children: "The button below is styled by the main document's CSS:",
      }),
      gt.jsx("button", {
        className: "regular-button",
        children: "Regular Button",
      }),
      gt.jsxs("div", {
        className: "shadow-container",
        children: [
          gt.jsx("h2", { children: "Shadow DOM Container" }),
          gt.jsx("p", {
            children:
              "The button in this container is rendered inside a Shadow DOM and has isolated styles:",
          }),
        ],
      }),
      A &&
        gt.jsx(_h, {
          targetId: "bytebellai",
          buttonText: "Shadow DOM Button",
          onClick: x,
        }),
    ],
  });
}
Oh.createRoot(document.getElementById("root")).render(
  gt.jsx(ze.StrictMode, { children: gt.jsx(Dh, {}) })
);
