import e from "react";
const s = ({ isOpen: a, onClose: t, modalContent: l, modalButtonText: o, modalBackgroundColor: c, modalTextColor: n, modalButtonColor: r }) => a ? /* @__PURE__ */ e.createElement("div", { id: "modal", className: "modal" }, /* @__PURE__ */ e.createElement("div", { className: "modal-overlay" }), /* @__PURE__ */ e.createElement("div", { className: "modal-container" }, /* @__PURE__ */ e.createElement("div", { className: "modal-content", style: { backgroundColor: c, color: n } }, /* @__PURE__ */ e.createElement("div", { className: "content" }, l), /* @__PURE__ */ e.createElement("div", { className: "footer" }, /* @__PURE__ */ e.createElement("button", { onClick: t, className: "close-button", style: { backgroundColor: r } }, o))))) : null;
export {
  s as default
};
