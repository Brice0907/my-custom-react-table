import * as n from "react";
import { useState as k } from "react";
function j({ sizeW: a, changeSelect: h, entries: u, handleChange: E }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "show", style: { width: a } }, /* @__PURE__ */ React.createElement("div", null, "Show", /* @__PURE__ */ React.createElement("select", { name: "entries", id: "entries", className: "show_select", onChange: h }, u.map((g, m) => /* @__PURE__ */ React.createElement("option", { key: m, value: g }, g))), "entries"), /* @__PURE__ */ React.createElement("input", { className: "search", type: "search", placeholder: "Search", onChange: E })));
}
function M({ content: a, entries: h, showing: u, backColor: E, lineColor: g, buttonColor: m, sizeH: S, sizeW: p }) {
  const [s, R] = k(parseInt(h[0])), [y, T] = k(1), [l, $] = k({ key: null, direction: "ascending" }), [x, P] = k("");
  let i = [], C = [], v = Math.ceil(a.length / s);
  const f = (y - 1) * s, r = f + s;
  function D(e) {
    const t = parseInt(e.target.value);
    R(t);
  }
  function w(e) {
    e !== 0 && e !== v + 1 && T(e);
  }
  function A(e) {
    let t = "ascending";
    (l.key === e || l.direction === "ascending") && (t = "descending"), $({ key: e, direction: t });
  }
  const _ = (e) => {
    const [t, o, d] = e.split("/");
    return /* @__PURE__ */ new Date(`${d}-${o}-${t}`);
  };
  if (l.key && a.sort((e, t) => {
    const o = e[l.key.content], d = t[l.key.content], I = /^\d{2}\/\d{2}\/\d{4}$/.test(o), L = /^\d{2}\/\d{2}\/\d{4}$/.test(d);
    if (I && L) {
      const b = _(e[l.key.content]), N = _(t[l.key.content]);
      if (b < N)
        return l.direction === "ascending" ? 1 : -1;
      if (b > N)
        return l.direction === "ascending" ? -1 : 1;
    } else {
      if (e[l.key.content] < t[l.key.content])
        return l.direction === "ascending" ? 1 : -1;
      if (e[l.key.content] > t[l.key.content])
        return l.direction === "ascending" ? -1 : 1;
    }
  }), a.length > 0) {
    let e = a.slice(f, r);
    i = Object.keys(e[0] || {}), C = e.slice(0, s);
  }
  const B = (e) => {
    P(e.target.value);
  }, c = a.filter((e) => i.some((t) => e[t].toString().toLowerCase().includes(x.toLowerCase())));
  if (c.length < a.length) {
    let e = c.slice(f, r);
    i = Object.keys(e[0] || {}), C = e.slice(0, s), v = Math.ceil(c.length / s);
  }
  return /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement(j, { sizeW: p, changeSelect: D, entries: h, handleChange: B }), /* @__PURE__ */ n.createElement("table", { className: "list", style: { width: p, height: S } }, c.length === 0 ? /* @__PURE__ */ n.createElement("div", null, "La recherche n'a donné aucun résultat correspondant à votre requête.") : null, /* @__PURE__ */ n.createElement("thead", null, /* @__PURE__ */ n.createElement("tr", null, i.map((e, t) => /* @__PURE__ */ n.createElement("th", { key: t, onClick: () => A({ content: e }), className: "list_thead" }, e)))), /* @__PURE__ */ n.createElement("tbody", null, C.map((e, t) => /* @__PURE__ */ n.createElement("tr", { key: t }, i.map((o, d) => /* @__PURE__ */ n.createElement("td", { key: d, className: t !== 0 ? "list_tbody list_line" : "list_tbody", style: { backgroundColor: E, borderColor: g } }, e[o])))))), c.length === 0 ? null : /* @__PURE__ */ n.createElement("div", { style: { width: p }, className: u === !1 ? "show center" : "show" }, u === !1 ? null : /* @__PURE__ */ n.createElement("div", null, "Showing ", f + 1, " to ", c.length < a.length ? r > c.length ? c.length : r : r > a.length ? a.length : r, " of ", c.length < a.length ? c.length : a.length, " entries"), /* @__PURE__ */ n.createElement("div", { className: "show_page" }, /* @__PURE__ */ n.createElement("div", { style: { backgroundColor: m }, className: "show_page_prev show_page_button", onClick: () => w(y - 1) }, "Previous"), /* @__PURE__ */ n.createElement("div", { className: "show_page_text" }, y, "/", v), /* @__PURE__ */ n.createElement("div", { style: { backgroundColor: m }, className: "show_page_next show_page_button", onClick: () => w(y + 1) }, "Next"))));
}
export {
  M as default
};
