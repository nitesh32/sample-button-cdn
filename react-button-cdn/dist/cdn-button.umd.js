(function (e, t) {
  typeof exports == "object" && typeof module < "u"
    ? t(exports, require("react/jsx-runtime"), require("react"))
    : typeof define == "function" && define.amd
    ? define(["exports", "react/jsx-runtime", "react"], t)
    : ((e = typeof globalThis < "u" ? globalThis : e || self),
      t((e.CdnButton = {}), e.jsxRuntime, e.React));
})(this, function (e, t, s) {
  "use strict";
  const i = ({
    text: c = "Button",
    color: d = "#3498db",
    size: r = "medium",
    showCounter: n = !1,
    className: f = "",
    onClick: u,
    children: a,
    ...l
  }) => {
    const [o, m] = s.useState(0),
      p = (b) => {
        n && m((j) => j + 1), u && u(b);
      };
    return t.jsxs("button", {
      className: `cdn-button cdn-button-${r} ${f}`,
      style: { backgroundColor: d },
      onClick: p,
      ...l,
      children: [
        c || a,
        n &&
          o > 0 &&
          t.jsxs("span", {
            className: "cdn-button-counter",
            children: ["(", o, ")"],
          }),
      ],
    });
  };
  (e.Button = i),
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
});
//# sourceMappingURL=cdn-button.umd.js.map
