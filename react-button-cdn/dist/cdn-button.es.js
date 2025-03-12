import { jsxs as c } from "react/jsx-runtime";
import { useState as f } from "react";
const k = ({
  text: e = "Button",
  color: s = "#3498db",
  size: u = "medium",
  showCounter: t = !1,
  className: r = "",
  onClick: n,
  children: a,
  ...d
}) => {
  const [o, l] = f(0), i = (m) => {
    t && l((b) => b + 1), n && n(m);
  };
  return /* @__PURE__ */ c(
    "button",
    {
      className: `cdn-button cdn-button-${u} ${r}`,
      style: { backgroundColor: s },
      onClick: i,
      ...d,
      children: [
        e || a,
        t && o > 0 && /* @__PURE__ */ c("span", { className: "cdn-button-counter", children: [
          "(",
          o,
          ")"
        ] })
      ]
    }
  );
};
export {
  k as Button
};
//# sourceMappingURL=cdn-button.es.js.map
