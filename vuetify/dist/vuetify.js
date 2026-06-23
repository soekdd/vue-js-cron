import { selectProps as B, setupSelect as N, setupCron as U, cronCoreProps as E } from "@vue-js-cron/core";
import { resolveComponent as n, openBlock as l, createBlock as c, mergeProps as g, createSlots as I, withCtx as t, createTextVNode as u, toDisplayString as p, createVNode as a, createElementBlock as m, Fragment as _, renderList as C, createCommentVNode as d, withModifiers as z, defineComponent as A } from "vue";
const D = {
  inheritAttrs: !1,
  name: "CustomSelect",
  props: {
    ...B(),
    menuProps: {
      type: Object,
      default: () => {
      }
    },
    chipProps: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["update:model-value"],
  setup(e, s) {
    return N(e, () => e.modelValue, s);
  },
  methods: {
    chipIcon() {
      return null;
    }
  }
};
const V = (e, s) => {
  const r = e.__vccOpts || e;
  for (const [y, h] of s)
    r[y] = h;
  return r;
};
function F(e, s, r, y, h, w) {
  const i = n("v-icon"), v = n("v-list-item"), k = n("v-col"), o = n("v-row"), b = n("v-list"), $ = n("v-menu"), S = n("v-chip");
  return l(), c(S, g(r.chipProps, { disabled: e.disabled }), I({
    default: t(() => [
      u(" " + p(e.selection ?? e.selectedStr) + " ", 1),
      a($, g({ activator: "parent" }, r.menuProps), {
        default: t(() => [
          a(b, { class: "pa-0 ma-0" }, {
            default: t(() => [
              (l(!0), m(_, null, C(e.itemRows, (P, O) => (l(), c(o, {
                key: O,
                "no-gutters": ""
              }, {
                default: t(() => [
                  (l(!0), m(_, null, C(P, (f, j) => (l(), c(k, { key: j }, {
                    default: t(() => [
                      f ? (l(), c(v, {
                        key: 0,
                        class: "vcron-v-item",
                        onClick: (H) => e.select(f),
                        active: e.has(f)
                      }, {
                        default: t(() => [
                          u(p(f.text), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick", "active"])) : d("", !0)
                    ]),
                    _: 2
                  }, 1024))), 128))
                ]),
                _: 2
              }, 1024))), 128))
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 16)
    ]),
    _: 2
  }, [
    e.clearable && !e.isEmpty ? {
      name: "append",
      fn: t(() => [
        a(i, {
          class: "ms-1 me-n1",
          size: "small",
          icon: r.chipProps.closeIcon ?? r.chipProps["close-icon"] ?? "mdi-close",
          onClick: s[0] || (s[0] = z((P) => e.clear(), ["stop"]))
        }, null, 8, ["icon"])
      ]),
      key: "0"
    } : void 0
  ]), 1040, ["disabled"]);
}
const L = /* @__PURE__ */ V(D, [["render", F]]), M = () => ({
  /**
   * Properties of Vuetify VChip
   *
   * @remarks
   * See {@link https://vuetifyjs.com/en/api/v-chip/#props}
   */
  chipProps: {
    type: Object,
    default() {
      return {};
    }
  },
  ...E()
}), R = A({
  name: "CronVuetify",
  components: {
    CustomSelect: L
  },
  props: M(),
  emits: ["update:model-value", "update:period", "error"],
  setup(e, s) {
    return U(e, s);
  }
}), T = { style: { display: "inline-block" } };
function q(e, s, r, y, h, w) {
  const i = n("v-col"), v = n("custom-select"), k = n("v-row");
  return l(), m("div", T, [
    a(k, {
      align: "baseline",
      density: "comfortable"
    }, {
      default: t(() => [
        e.period.prefix.value ? (l(), c(i, {
          key: 0,
          class: "flex-grow-0"
        }, {
          default: t(() => [
            u(p(e.period.prefix.value), 1)
          ]),
          _: 1
        })) : d("", !0),
        a(i, { cols: "auto" }, {
          default: t(() => [
            a(v, {
              "model-value": e.period.selected.value.id,
              "item-value": "id",
              items: e.period.items,
              "onUpdate:modelValue": s[0] || (s[0] = (o) => e.period.select(o)),
              disabled: e.disabled,
              "chip-props": e.chipProps
            }, null, 8, ["model-value", "items", "disabled", "chip-props"])
          ]),
          _: 1
        }),
        e.period.suffix.value ? (l(), c(i, {
          key: 1,
          class: "flex-grow-0"
        }, {
          default: t(() => [
            u(p(e.period.suffix.value), 1)
          ]),
          _: 1
        })) : d("", !0),
        (l(!0), m(_, null, C(e.selected, (o) => (l(), m(_, {
          key: o.id
        }, [
          o.prefix.value ? (l(), c(i, {
            key: 0,
            class: "flex-grow-0"
          }, {
            default: t(() => [
              u(p(o.prefix.value), 1)
            ]),
            _: 2
          }, 1024)) : d("", !0),
          a(i, { cols: "auto" }, {
            default: t(() => [
              a(v, {
                "model-value": o.selected.value,
                "onUpdate:modelValue": (b) => o.select(b),
                items: o.items,
                cols: e.cols[o.id] || 1,
                selection: o.text.value,
                multiple: "",
                clearable: "",
                disabled: e.disabled,
                "chip-props": e.chipProps,
                "menu-props": { closeOnContentClick: !1 }
              }, null, 8, ["model-value", "onUpdate:modelValue", "items", "cols", "selection", "disabled", "chip-props"])
            ]),
            _: 2
          }, 1024),
          o.suffix.value ? (l(), c(i, {
            key: 1,
            class: "flex-grow-0"
          }, {
            default: t(() => [
              u(p(o.suffix.value), 1)
            ]),
            _: 2
          }, 1024)) : d("", !0)
        ], 64))), 128))
      ]),
      _: 1
    })
  ]);
}
const G = /* @__PURE__ */ V(R, [["render", q]]), Q = {
  install: (e) => {
    e.component("CronVuetify", G);
  }
};
export {
  G as CronVuetify,
  Q as CronVuetifyPlugin,
  M as cronVuetifyProps,
  Q as default
};
//# sourceMappingURL=vuetify.js.map
