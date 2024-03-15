import * as t from "react";
import { useState as g } from "react";
function O({ content: a, entries: k, showing: p, backColor: N, lineColor: b, buttonColor: E, sizeH: S, sizeW: m }) {
  const [r, x] = g(parseInt(k[0])), [h, P] = g(1), [l, T] = g({ key: null, direction: "ascending" }), [$, D] = g("");
  let i = [], y = [], f = Math.ceil(a.length / r);
  const u = (h - 1) * r, c = u + r;
  function A(e) {
    const n = parseInt(e.target.value);
    x(n);
  }
  function C(e) {
    e !== 0 && e !== f + 1 && P(e);
  }
  function B(e) {
    let n = "ascending";
    (l.key === e || l.direction === "ascending") && (n = "descending"), T({ key: e, direction: n });
  }
  const v = (e) => {
    const [n, o, d] = e.split("/");
    return /* @__PURE__ */ new Date(`${d}-${o}-${n}`);
  };
  if (l.key && a.sort((e, n) => {
    const o = e[l.key.content], d = n[l.key.content], L = /^\d{2}\/\d{2}\/\d{4}$/.test(o), j = /^\d{2}\/\d{2}\/\d{4}$/.test(d);
    if (L && j) {
      const w = v(e[l.key.content]), _ = v(n[l.key.content]);
      if (w < _)
        return l.direction === "ascending" ? 1 : -1;
      if (w > _)
        return l.direction === "ascending" ? -1 : 1;
    } else {
      if (e[l.key.content] < n[l.key.content])
        return l.direction === "ascending" ? 1 : -1;
      if (e[l.key.content] > n[l.key.content])
        return l.direction === "ascending" ? -1 : 1;
    }
  }), a.length > 0) {
    let e = a.slice(u, c);
    i = Object.keys(e[0] || {}), y = e.slice(0, r);
  }
  const I = (e) => {
    D(e.target.value);
  }, s = a.filter((e) => i.some((n) => e[n].toString().toLowerCase().includes($.toLowerCase())));
  if (s.length < a.length) {
    let e = s.slice(u, c);
    i = Object.keys(e[0] || {}), y = e.slice(0, r), f = Math.ceil(s.length / r);
  }
  return /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("div", { className: "show", style: { width: m } }, /* @__PURE__ */ t.createElement("div", null, "Show", /* @__PURE__ */ t.createElement("select", { name: "entries", id: "entries", className: "show_select", onChange: A }, k.map((e, n) => /* @__PURE__ */ t.createElement("option", { key: n, value: e }, e))), "entries"), /* @__PURE__ */ t.createElement("input", { className: "search", type: "search", placeholder: "Search", onChange: I })), /* @__PURE__ */ t.createElement("table", { className: "list", style: { width: m, height: S } }, s.length === 0 ? /* @__PURE__ */ t.createElement("div", null, "La recherche n'a donné aucun résultat correspondant à votre requête.") : null, /* @__PURE__ */ t.createElement("thead", null, /* @__PURE__ */ t.createElement("tr", null, i.map((e, n) => /* @__PURE__ */ t.createElement("th", { key: n, onClick: () => B({ content: e }), className: "list_thead" }, e)))), /* @__PURE__ */ t.createElement("tbody", null, y.map((e, n) => /* @__PURE__ */ t.createElement("tr", { key: n }, i.map((o, d) => /* @__PURE__ */ t.createElement("td", { key: d, className: n !== 0 ? "list_tbody list_line" : "list_tbody", style: { backgroundColor: N, borderColor: b } }, e[o])))))), s.length === 0 ? null : /* @__PURE__ */ t.createElement("div", { style: { width: m }, className: p === !1 ? "show center" : "show" }, p === !1 ? null : /* @__PURE__ */ t.createElement("div", null, "Showing ", u + 1, " to ", s.length < a.length ? c > s.length ? s.length : c : c > a.length ? a.length : c, " of ", s.length < a.length ? s.length : a.length, " entries"), /* @__PURE__ */ t.createElement("div", { className: "show_page" }, /* @__PURE__ */ t.createElement("div", { style: { backgroundColor: E }, className: "show_page_prev show_page_button", onClick: () => C(h - 1) }, "Previous"), /* @__PURE__ */ t.createElement("div", { className: "show_page_text" }, h, "/", f), /* @__PURE__ */ t.createElement("div", { style: { backgroundColor: E }, className: "show_page_next show_page_button", onClick: () => C(h + 1) }, "Next"))));
}
export {
  O as default
};
