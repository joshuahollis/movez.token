(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    78581: function (e, s, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return r(53678);
        },
      ]);
    },
    96808: function (e, s, r) {
      "use strict";
      r.r(s),
        r.d(s, {
          default: function () {
            return t;
          },
        });
      var n = r(85893);
      function t(e) {
        var s = e.title,
          r = void 0 === s ? "" : s,
          t = e.brief,
          i = void 0 === t ? "" : t,
          a = e.image,
          l = void 0 === a ? "" : a,
          o = e.color,
          c = void 0 === o ? "#FC4C02" : o,
          d = e.link,
          h = void 0 === d ? "" : d;
        return (0, n.jsxs)("a", {
          class: "card",
          href: "https://move-me.gitbook.io/movez-litepaper/ktVp6nJ7D3dSh2dPafnL".concat(
            h
          ),
          target: "_blank",
          children: [
            (0, n.jsx)("h2", { children: r }),
            (0, n.jsx)("p", { children: i }),
            (0, n.jsx)("div", {
              class: "pic",
              style: { backgroundImage: "url(".concat(l, ")") },
            }),
            (0, n.jsxs)("ul", {
              children: [
                (0, n.jsx)("li", {}),
                (0, n.jsx)("li", {}),
                (0, n.jsx)("li", {}),
                (0, n.jsx)("li", {}),
                (0, n.jsx)("li", {}),
                (0, n.jsx)("li", {}),
                (0, n.jsx)("li", {}),
                (0, n.jsx)("li", {}),
                (0, n.jsx)("li", {}),
                (0, n.jsx)("li", {}),
                (0, n.jsx)("li", {}),
                (0, n.jsx)("li", {}),
                (0, n.jsx)("li", {}),
                (0, n.jsx)("li", {}),
                (0, n.jsx)("li", {}),
                (0, n.jsx)("li", {}),
                (0, n.jsx)("li", {}),
                (0, n.jsx)("li", {}),
                (0, n.jsx)("li", {}),
                (0, n.jsx)("li", {}),
                (0, n.jsx)("li", {}),
                (0, n.jsx)("li", {}),
                (0, n.jsx)("li", {}),
              ],
            }),
            (0, n.jsx)("div", {
              class: "social",
              children: (0, n.jsx)("i", { class: "fab fa-github" }),
            }),
            (0, n.jsx)("button", { style: { backgroundColor: "".concat(c) } }),
          ],
        });
      }
    },
    79833: function (e, s, r) {
      "use strict";
      r.r(s),
        r.d(s, {
          default: function () {
            return a;
          },
        });
      var n = r(85893),
        t = (r(67294), r(56239)),
        i = r(96808);
      function a() {
        return (0, n.jsxs)("div", {
          className: "container mx-auto py-10",
          children: [
            (0, n.jsxs)("div", {
              className: "px-5 md:px-0",
              children: [
                (0, n.jsxs)("div", {
                  className: "flex title items-center",
                  children: [
                    (0, n.jsxs)("h1", {
                      children: [
                        "Supercharge  ",
                        (0, n.jsx)("span", {
                          className: "outline",
                          children: "Your Fitness",
                        }),
                      ],
                    }),
                    (0, n.jsxs)("a", {
                      href: "https://move-me.gitbook.io/movez-litepaper/ktVp6nJ7D3dSh2dPafnL/supercharge-your-fitness",
                      target: "_blank",
                      className: "link pl-4 pt-2",
                      children: [
                        "  ",
                        (0, n.jsx)(t.cth, {
                          color: "#00000",
                          height: "30px",
                          width: "30px",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("p", {
                  className: "pt-3",
                  children: [
                    " Centered around the MoveZ app, participants will be able to earn ",
                    (0, n.jsx)("strong", { children: "$BURNZ" }),
                    " token rewards ",
                    (0, n.jsx)("br", {}),
                    "for participating in a range of ",
                    (0, n.jsx)("b", { children: "fitness" }),
                    " activities.",
                  ],
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              class: "card-box py-5 grid md:grid-cols-2 grid-cols-1",
              children: [
                (0, n.jsx)(i.default, {
                  link: "/the-movez-mission",
                  title: "Attend to Earn A2E",
                  image: "lifting.jpeg",
                  color: "#A020F0",
                }),
                (0, n.jsx)(i.default, {
                  link: "/explaining-move-to-earn",
                  title: "Move to Earn M2E",
                  image: "walking.jpeg",
                  color: "#A020F0",
                }),
                (0, n.jsx)(i.default, {
                  link: "/participation-ethos",
                  title: "Participate to Earn",
                  title:'(organize, host & promote) P2E',
                  image: "cycling.jpeg",
                  color: "#A020F0",
                }),
                (0, n.jsx)(i.default, {
                  link: "/go-social",
                  title: "Create to Earn C2E",
                  image: "surfing.jpeg",
                  color: "#A020F0",
                }),
              ],
            }),
          ],
        });
      }
    },
    71697: function (e, s, r) {
      "use strict";
      r.r(s),
        r.d(s, {
          default: function () {
            return a;
          },
        });
      var n = r(85893),
        t = r(67294),
        i = r(56239);
      r(28860);
      function a(e) {
        e.time;
        var s = (0, t.useState)(""),
          a = s[0],
          l = s[1];
        return (
          (0, t.useEffect)(function () {
            "undefined" != typeof r.g.navigator &&
              l(
                (function () {
                  if ("undefined" != typeof r.g.navigator) {
                    var e = navigator.userAgent;
                    if (/android/i.test(e)) return "android";
                    if (/iPad|iPhone|iPod|Mac/i.test(e)) return "ios";
                  }
                })()
              );
          }, []),
          (0, n.jsxs)("div", {
            className: "container mx-auto px-5 lg:hidden",
            children: [
              (0, n.jsx)("div", {
                className: "grid grid-cols-1 mb-10",
                children: (0, n.jsxs)("a", {
                  href:
                    "ios" == a
                      ? "https://apps.apple.com/us/app/movez-true-definition-of-m2e/id1628203164"
                      : "https://play.google.com/store/apps/details?id=com.bluezilla.movez",
                  target: "_blank",
                  className: "cta-btn flex",
                  children: [
                    (0, n.jsx)(i.Wje, {
                      color: "#fff",
                      height: "25px",
                      width: "25px",
                      className: "pr-3 py-3",
                    }),
                    (0, n.jsx)(i.Ea1, {
                      color: "#fff",
                      height: "25px",
                      width: "25px",
                      className: " py-3",
                    }),
                    (0, n.jsx)("span", {
                      className: "px-2 ",
                      children: "  | ",
                    }),
                    (0, n.jsx)("span", {
                      className: "",
                      children: " Live Now",
                    }),
                  ],
                }),
              }),
              (0, n.jsxs)("div", {
                className: "grid lg:grid-cols-4 grid-cols-3 gap-5",
                children: [
                  (0, n.jsxs)("a", {
                    href: "https://www.okx.com/trade-spot/movez-usdt",
                    target: "_blank",
                    className: "cta-btn flex relative py-10 lg:py-0",
                    children: [
                      (0, n.jsx)("img", {
                        src: "/logos/okx.svg",
                        alt: "",
                        style: { width: 50 },
                      }),
                      (0, n.jsx)("span", {
                        className: "px-2 hidden lg:block",
                        children: "  | ",
                      }),
                      (0, n.jsx)("span", {
                        className: "hidden lg:block",
                        children: "8:00 am UTC",
                      }),
                      (0, n.jsx)("div", {
                        class:
                          "absolute -top-2 -right-1 px-5 py-1 rounded-full bg-orange ",
                        children: "Live",
                      }),
                    ],
                  }),
                  (0, n.jsxs)("a", {
                    href: "https://www.bybit.com/en-US/trade/spot/MOVEZ/USDT",
                    target: "_blank",
                    className: "cta-btn flex relative",
                    children: [
                      (0, n.jsx)("img", {
                        src: "/logos/bybit.svg",
                        alt: "",
                        style: { width: 40 },
                        className: "py-4 lg:py-0",
                      }),
                      (0, n.jsx)("div", {
                        class:
                          "absolute -top-2 -right-1 px-5 py-1 rounded-full bg-orange ",
                        children: "Live",
                      }),
                    ],
                  }),
                  (0, n.jsxs)("a", {
                    href: "https://www.gate.io/trade/MOVEZ_USDT",
                    target: "_blank",
                    className: "cta-btn flex relative ",
                    children: [
                      (0, n.jsx)("img", {
                        src: "/logos/gate.png",
                        alt: "",
                        style: { width: 25 },
                        className: "py-4 lg:py-0",
                      }),
                      (0, n.jsx)("div", {
                        class:
                          "absolute -top-2 -right-1 px-5 py-1 rounded-full bg-orange ",
                        children: "Live",
                      }),
                    ],
                  }),
                  (0, n.jsxs)("a", {
                    href: "https://pancakeswap.finance/swap?outputCurrency=0x039cd22cb49084142d55fcd4b6096a4f51ffb3b4",
                    target: "_blank",
                    className: "cta-btn flex relative",
                    children: [
                      (0, n.jsx)("img", {
                        src: "https://igo.gamestarter.com/images/612f9cce81330511214a9d1a_Group_165.svg",
                        alt: "",
                        style: { width: 25 },
                      }),
                      (0, n.jsx)("div", {
                        class:
                          "absolute -top-2 -right-1 px-5 py-1 rounded-full bg-orange ",
                        children: "Live",
                      }),
                    ],
                  }),
                  (0, n.jsxs)("a", {
                    href: "https://www.mexc.com/exchange/MOVEZ_USDT",
                    target: "_blank",
                    className: "cta-btn flex relative",
                    children: [
                      (0, n.jsx)("img", {
                        src: "/logos/mexc.png",
                        alt: "",
                        style: { width: 25 },
                        className: "py-4",
                      }),
                      (0, n.jsx)("div", {
                        class:
                          "absolute -top-2 -right-1 px-5 py-1 rounded-full bg-orange ",
                        children: "Live",
                      }),
                    ],
                  }),
                  (0, n.jsxs)("a", {
                    href: "https://www.huobi.com/en-us/exchange/movez_usdt",
                    target: "_blank",
                    className: "cta-btn flex relative",
                    children: [
                      (0, n.jsx)("img", {
                        src: "/logos/huobi.png",
                        alt: "",
                        style: { width: 25 },
                        className: "py-4",
                      }),
                      (0, n.jsx)("div", {
                        class:
                          "absolute -top-2 -right-1 px-5 py-1 rounded-full bg-orange ",
                        children: "Live",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    68728: function (e, s, r) {
      "use strict";
      r.r(s),
        r.d(s, {
          default: function () {
            return a;
          },
        });
      var n = r(85893),
        t = r(67294),
        i = r(56239);
      function a() {
        var e = (0, t.useState)(""),
          s = e[0],
          a = e[1];
        return (
          (0, t.useEffect)(function () {
            "undefined" != typeof r.g.navigator &&
              a(
                (function () {
                  if ("undefined" != typeof r.g.navigator) {
                    var e = navigator.userAgent;
                    if (/android/i.test(e)) return "android";
                    if (/iPad|iPhone|iPod|Mac/i.test(e)) return "ios";
                  }
                })()
              );
          }, []),
          (0, n.jsxs)("div", {
            className: "cta-grp xl:flex gap-5 hidden",
            children: [
              (0, n.jsxs)("a", {
                href:
                  "ios" == s
                    ? "https://apps.apple.com/us/app/movez-true-definition-of-m2e/id1628203164"
                    : "https://play.google.com/store/apps/details?id=com.bluezilla.movez",
                target: "_blank",
                className: "cta-btn flex",
                children: [
                  (0, n.jsx)(i.Wje, {
                    color: "#fff",
                    height: "25px",
                    width: "25px",
                    className: "pr-3",
                  }),
                  (0, n.jsx)(i.Ea1, {
                    color: "#fff",
                    height: "25px",
                    width: "25px",
                  }),
                  (0, n.jsx)("span", {
                    className: "px-2 hidden md:block",
                    children: "  | ",
                  }),
                  (0, n.jsx)("span", {
                    className: "hidden md:block",
                    children: "Live Now",
                  }),
                ],
              }),
              (0, n.jsxs)("a", {
                href: "https://www.okx.com/trade-spot/movez-usdt",
                target: "_blank",
                className: "cta-btn flex relative",
                children: [
                  (0, n.jsx)("img", {
                    src: "/logos/okx.svg",
                    alt: "",
                    style: { width: 50 },
                  }),
                  (0, n.jsx)("div", {
                    class:
                      "absolute -top-2 -right-1 px-5 py-1 rounded-full bg-orange ",
                    children: "Live",
                  }),
                ],
              }),
              (0, n.jsxs)("a", {
                href: "https://www.bybit.com/en-US/trade/spot/MOVEZ/USDT",
                target: "_blank",
                className: "cta-btn flex relative",
                children: [
                  (0, n.jsx)("img", {
                    src: "/logos/bybit.svg",
                    alt: "",
                    style: { width: 40 },
                  }),
                  (0, n.jsx)("div", {
                    class:
                      "absolute -top-2 -right-1 px-5 py-1 rounded-full bg-orange ",
                    children: "Live",
                  }),
                ],
              }),
              (0, n.jsxs)("a", {
                href: "https://www.gate.io/trade/MOVEZ_USDT",
                target: "_blank",
                className: "cta-btn flex relative",
                children: [
                  (0, n.jsx)("img", {
                    src: "/logos/gate.png",
                    alt: "",
                    style: { width: 25 },
                  }),
                  (0, n.jsx)("div", {
                    class:
                      "absolute -top-2 -right-1 px-5 py-1 rounded-full bg-orange ",
                    children: "Live",
                  }),
                ],
              }),
              (0, n.jsxs)("a", {
                href: "https://pancakeswap.finance/swap?outputCurrency=0x039cd22cb49084142d55fcd4b6096a4f51ffb3b4",
                target: "_blank",
                className: "cta-btn flex relative",
                children: [
                  (0, n.jsx)("img", {
                    src: "https://igo.gamestarter.com/images/612f9cce81330511214a9d1a_Group_165.svg",
                    alt: "",
                    style: { width: 25 },
                  }),
                  (0, n.jsx)("div", {
                    class:
                      "absolute -top-2 -right-1 px-5 py-1 rounded-full bg-orange ",
                    children: "Live",
                  }),
                ],
              }),
              (0, n.jsxs)("a", {
                href: "https://www.mexc.com/exchange/MOVEZ_USDT",
                target: "_blank",
                className: "cta-btn flex relative",
                children: [
                  (0, n.jsx)("img", {
                    src: "/logos/mexc.png",
                    alt: "",
                    style: { width: 25 },
                  }),
                  (0, n.jsx)("div", {
                    class:
                      "absolute -top-2 -right-1 px-5 py-1 rounded-full bg-orange ",
                    children: "Live",
                  }),
                ],
              }),
              (0, n.jsxs)("a", {
                href: "https://www.huobi.com/en-us/exchange/movez_usdt/",
                target: "_blank",
                className: "cta-btn flex relative",
                children: [
                  (0, n.jsx)("img", {
                    src: "/logos/huobi.png",
                    alt: "",
                    style: { width: 25 },
                  }),
                  (0, n.jsx)("div", {
                    class:
                      "absolute -top-2 -right-1 px-5 py-1 rounded-full bg-orange ",
                    children: "Live",
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    97283: function (e, s, r) {
      "use strict";
      r.r(s),
        r.d(s, {
          default: function () {
            return v;
          },
        });
      var n = r(85893),
        t = r(99477),
        i = r(26135),
        a = r(88279),
        l = r(18626),
        o = r(6599),
        c = r(41133),
        d = r(71874);
      function h(e, s) {
        (null == s || s > e.length) && (s = e.length);
        for (var r = 0, n = new Array(s); r < s; r++) n[r] = e[r];
        return n;
      }
      function x(e, s, r) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = r),
          e
        );
      }
      function p(e) {
        for (var s = 1; s < arguments.length; s++) {
          var r = null != arguments[s] ? arguments[s] : {},
            n = Object.keys(r);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable;
              })
            )),
            n.forEach(function (s) {
              x(e, s, r[s]);
            });
        }
        return e;
      }
      function u(e, s) {
        if (null == e) return {};
        var r,
          n,
          t = (function (e, s) {
            if (null == e) return {};
            var r,
              n,
              t = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (r = i[n]), s.indexOf(r) >= 0 || (t[r] = e[r]);
            return t;
          })(e, s);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              s.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (t[r] = e[r]));
        }
        return t;
      }
      function g(e, s) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, s) {
            var r =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                t,
                i = [],
                a = !0,
                l = !1;
              try {
                for (
                  r = r.call(e);
                  !(a = (n = r.next()).done) &&
                  (i.push(n.value), !s || i.length !== s);
                  a = !0
                );
              } catch (o) {
                (l = !0), (t = o);
              } finally {
                try {
                  a || null == r.return || r.return();
                } finally {
                  if (l) throw t;
                }
              }
              return i;
            }
          })(e, s) ||
          (function (e, s) {
            if (!e) return;
            if ("string" === typeof e) return h(e, s);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(r);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return h(e, s);
          })(e, s) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var j = new t.Vector3(),
        f = new t.MeshBasicMaterial({ color: "#fefefe", toneMapped: !1 }),
        m = new t.MeshBasicMaterial({ color: "black", toneMapped: !1 });
      new t.CylinderGeometry(0.6, 0.6, 0.5, 3);
      function v(e) {
        var s = e.amount,
          r = void 0 === s ? 12 : s;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)(i.Xz, {
            style: { height: "100vh" },
            dpr: [1, 2],
            camera: { position: [0, 0, 5], fov: 50 },
            children: (0, n.jsxs)(c.wI, {
              gravity: [0, 1, 0],
              children: [
                Array.from({ length: r }, function (e, s) {
                  var r,
                    t = Math.floor(3 * Math.random());
                  return (
                    0 == t && (r = b),
                    1 == t && (r = y),
                    2 == t && (r = w),
                    (0, n.jsx)(
                      r,
                      {
                        mass: 10,
                        angularDamping: 0.4,
                        linearDamping: 0.8,
                        position: [Math.random(), Math.random(), Math.random()],
                      },
                      s
                    )
                  );
                }),
                (0, n.jsx)(M, {
                  mass: 15,
                  angularDamping: 0.5,
                  linearDamping: 0.5,
                  position: [0, 0, 10],
                }),
              ],
            }),
          }),
        });
      }


      function b(e) {
        var s = (0, l.L)("/scene.glb").nodes,
          r = g(
            (0, c.rQ)(function () {
              return p({}, e, {
                shapes: [
                  {
                    type: "Box",
                    args: [0.65, 0.65, 0.5],
                    position: [0.18, 0.18, 0],
                  },
                  {
                    type: "Box",
                    args: [0.3, 0.3, 0.5],
                    position: [-0.35, 0, 0],
                  },
                  {
                    type: "Box",
                    args: [0.3, 0.3, 0.5],
                    position: [0, -0.35, 0],
                  },
                ],
              });
            }),
            2
          ),
          t = r[0],
          i = r[1];
        return (
          (0, a.x)(function () {
            return i.applyForce(
              j
                .setFromMatrixPosition(t.current.matrix)
                .normalize()
                .multiplyScalar(-40)
                .toArray(),
              [0, 0, 0]
            );
          }),
          (0, n.jsx)("group", {
            ref: t,
            children: (0, n.jsx)("mesh", {
              scale: [0.02, 0.02, 0.037],//Yihe MMM new
              position: [-0.02, -0.5, 0.022],
              geometry: s.MMovezstl.geometry,
              material: f,
              children: (0, n.jsx)(o.w, { scale: 1.005, material: m }),
            }),
          })
        );
      }

      function y(e) {
        var s = (0, l.L)("/scene.glb").nodes,
          r = g(
            (0, c.rQ)(function () {
              return p({}, e, {
                shapes: [
                  {
                    type: "Box",
                    args: [0.65, 0.65, 0.5],
                    position: [0.18, 0.18, 0],
                  },
                  {
                    type: "Box",
                    args: [0.3, 0.3, 0.5],
                    position: [-0.35, 0, 0],
                  },
                  {
                    type: "Box",
                    args: [0.3, 0.3, 0.5],
                    position: [0, -0.35, 0],
                  },
                ],
              });
            }),
            2
          ),
          t = r[0],
          i = r[1];
        return (
          console.log(s),
          (0, a.x)(function () {
            return i.applyForce(
              j
                .setFromMatrixPosition(t.current.matrix)
                .normalize()
                .multiplyScalar(-40)
                .toArray(),
              [0, 0, 0]
            );
          }),
          (0, n.jsx)("group", {
            ref: t,
            children: (0, n.jsx)("mesh", {
              scale: [1.5202, 1.2202, 1.6037],//Yihe EEE new
              position: [-0.02, -0.5, 0.022],
              geometry: s.oMovezstl.geometry,
              material: f,
              children: (0, n.jsx)(o.w, { scale: 1.005, material: m }),
            }),
          })
        );
      }


      
      function w(e) {
        var s = (0, l.L)("/scene.glb").nodes,
          r = g(
            (0, c.rQ)(function () {
              return p({}, e, {
                shapes: [
                  {
                    type: "Box",
                    args: [0.65, 0.65, 0.5],
                    position: [0.18, 0.18, 0],
                  },
                  {
                    type: "Box",
                    args: [0.3, 0.3, 0.5],
                    position: [-0.35, 0, 0],
                  },
                  {
                    type: "Box",
                    args: [0.3, 0.3, 0.5],
                    position: [0, -0.35, 0],
                  },
                ],
              });
            }),
            2
          ),
          t = r[0],
          i = r[1];
        return (
          (0, a.x)(function () {
            return i.applyForce(
              j
                .setFromMatrixPosition(t.current.matrix)
                .normalize()
                .multiplyScalar(-40)
                .toArray(),
              [0, 0, 0]
            );
          }),
          (0, n.jsx)("group", {
            ref: t,
            children: (0, n.jsx)("mesh", {
              scale: [0.009, 0.009, 0.037],//Yihe ZZZ new
              position: [-0.02, -0.5, 0.022],
              geometry: s.movezstl.geometry,
              material: f,
              children: (0, n.jsx)(o.w, { scale: 1.005, material: m }),
            }),
          })
        );
      }
      function M(e) {
        var s = e.speed,
          r = void 0 === s ? 10 : s,
          t = e.gradient,
          i = void 0 === t ? 0.7 : t,
          h = u(e, ["speed"]),
          x = (0, l.L)("/cursor.glb").nodes,
          f = (0, a.w)(function (e) {
            return e.viewport;
          }),
          m = g(
            (0, c.rQ)(function () {
              return p({}, h, {
                shapes: [
                  {
                    type: "Cylinder",
                    args: [0.6, 0.6, 0.5, 3],
                    position: [0, 0.2, 0],
                    rotation: [Math.PI / 2, Math.PI, 0],
                  },
                  {
                    type: "Box",
                    args: [0.25, 1, 0.3],
                    position: [0, -0.45, 0],
                  },
                ],
              });
            }),
            2
          ),
          v = m[0],
          b = m[1];
        return (
          (0, a.x)(function (e) {
            j.setFromMatrixPosition(v.current.matrix),
              b.velocity.set(
                ((e.mouse.x * f.width) / 2 - j.x) * r,
                ((e.mouse.y * f.height) / 2 - j.y) * r,
                -j.z
              );
          }),
          (0, n.jsx)("group", {
            ref: v,
            children: (0, n.jsxs)("mesh", {
              scale: [0.5, 1, 0.55],//Yihe Arrow new
              rotation: [0, Math.PI / 2, 0],
              geometry: x.Cube.geometry,
              children: [
                (0, n.jsxs)(d.ud, {
                  toneMapped: !1,
                  
                }),
                (0, n.jsx)(o.w, { scale: 1.03, color: "black" }),
              ],
            }),
          })
        );
      }


    },



    7512: function (e, s, r) {
      "use strict";
      r.r(s),
        r.d(s, {
          default: function () {
            return c;
          },
        });
      var n = r(34051),
        t = r.n(n),
        i = r(85893),
        a = r(67294);
      function l(e, s, r, n, t, i, a) {
        try {
          var l = e[i](a),
            o = l.value;
        } catch (c) {
          return void r(c);
        }
        l.done ? s(o) : Promise.resolve(o).then(n, t);
      }
      var o = r(6158);
      function c() {
        var e = (0, a.useState)(!1),
          s = (e[0], e[1]);
        return (
          (0, a.useEffect)(function () {
            s(!0);
            var e,
              r = new o.Map({
                accessToken:
                  "pk.eyJ1IjoiZ2Vvcmdlc2RhZ2hlcjk4IiwiYSI6ImNqbnd4NjliejBnazgzdm5xbnEzNmlyNjcifQ.fzgI5quej0VPErWiQGwVSA",
                container: "my-map",
                style:
                  "mapbox://styles/georgesdagher98/cl2rleccz000d15ox851hj94d",
                zoom: 0,
              });
            r.on(
              "load",
              ((e = t().mark(function e() {
                var s, n, i, a, l;
                return t().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          fetch(
                            "https://docs.mapbox.com/mapbox-gl-js/assets/hike.geojson"
                          )
                        );
                      case 2:
                        return (s = e.sent), (e.next = 5), s.json();
                      case 5:
                        (n = e.sent),
                          (i = n.features[0].geometry.coordinates),
                          (n.features[0].geometry.coordinates = [i[0]]),
                          r.addSource("trace", { type: "geojson", data: n }),
                          r.addLayer({
                            id: "trace",
                            type: "line",
                            source: "trace",
                            paint: {
                              "line-color": "#FC4C02",
                              "line-opacity": 0.75,
                              "line-width": 2,
                            },
                          }),
                          r.jumpTo({ center: i[0], zoom: 12 }),
                          r.setPitch(50),
                          (a = 0),
                          (l = setInterval(function () {
                            a < i.length
                              ? (n.features[0].geometry.coordinates.push(i[a]),
                                r.getSource("trace").setData(n),
                                r.panTo(i[a]),
                                a++)
                              : window.clearInterval(l);
                          }, 10));
                      case 14:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })),
              function () {
                var s = this,
                  r = arguments;
                return new Promise(function (n, t) {
                  var i = e.apply(s, r);
                  function a(e) {
                    l(i, n, t, a, o, "next", e);
                  }
                  function o(e) {
                    l(i, n, t, a, o, "throw", e);
                  }
                  a(void 0);
                });
              })
            );
          }, []),
          (0, i.jsxs)("div", {
            className: "relative py-10",
            children: [
              (0, i.jsx)("div", {
                className: "container mx-auto px-5 py-5",
                children: (0, i.jsxs)("h1", {
                  style: { zIndex: 1 },
                  children: [
                    "Breaking Down ",
                    (0, i.jsx)("span", {
                      className: "outline",
                      children: "Barriers",
                    }),
                    " ",
                  ],
                }),
              }),
              (0, i.jsx)("div", {
                className: "box",
                children: (0, i.jsx)("p", {
                  className: "brief",
                  children:
                    "At MoveZ, we believe fitness should be for everyone. That\u2019s why the barrier to participation will be low thanks to the use of fractionalized NFTs, organization/group accounts, and NFT lending features. ",
                }),
              }),
              (0, i.jsx)("div", {
                id: "my-map",
                style: { height: 500, width: "100%", pointerEvents: "none" },
              }),
            ],
          })
        );
      }
    },
    63848: function (e, s, r) {
      "use strict";
      r.r(s),
        r.d(s, {
          default: function () {
            return i;
          },
        });
      var n = r(85893),
        t = r(56239);
      function i() {
        return (0, n.jsxs)("div", {
          className: "relative ",
          children: [
            (0, n.jsx)("div", {
              className: "container mx-auto ",
              children: (0, n.jsxs)("div", {
                className: "px-5 md:px-0 py-20",
                children: [
                  (0, n.jsxs)("div", {
                    className: "flex title items-center",
                    children: [
                      (0, n.jsxs)("h1", {
                        children: [
                          "Go  ",
                          (0, n.jsx)("span", {
                            className: "outline",
                            children: "Social",
                          }),
                        ],
                      }),
                      (0, n.jsxs)("a", {
                        href: "https://move-me.gitbook.io/movez-litepaper/ktVp6nJ7D3dSh2dPafnL/supercharge-your-fitness",
                        target: "_blank",
                        className: "link pl-4 pt-2",
                        children: [
                          "  ",
                          (0, n.jsx)(t.cth, {
                            color: "#00000",
                            height: "30px",
                            width: "30px",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsxs)("p", {
                    className: "pt-3",
                    children: [
                      " Featuring powerful boost zones, local challenges, and both national and worldwide leaderboards,",
                      (0, n.jsx)("br", {}),
                      " MoveZ makes staying fit as competitive or relaxed as you choose while unlocking an array of new social experiences.",
                    ],
                  }),
                ],
              }),
            }),
            (0, n.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "absolute hideshow-line",
              style: {
                zIndex: -1,
                right: 0,
                top: -20,
                height: "110%",
                objectFit: "cover",
              },
              viewBox: "0 0 1694 632",
              children: [
                (0, n.jsxs)("defs", {
                  children: [
                    (0, n.jsxs)("filter", {
                      id: "Path_1809",
                      x: "-128.34",
                      y: "-653.017",
                      width: "1873.842",
                      height: "1679.6",
                      filterUnits: "userSpaceOnUse",
                      children: [
                        (0, n.jsx)("feOffset", {
                          dy: "3",
                          input: "SourceAlpha",
                        }),
                        (0, n.jsx)("feGaussianBlur", {
                          stdDeviation: "10",
                          result: "blur",
                        }),
                        (0, n.jsx)("feFlood", {
                          "flood-color": "#fc4c02",
                          "flood-opacity": "0.686",
                        }),
                        (0, n.jsx)("feComposite", {
                          operator: "in",
                          in2: "blur",
                        }),
                        (0, n.jsx)("feComposite", { in: "SourceGraphic" }),
                      ],
                    }),
                    (0, n.jsx)("clipPath", {
                      id: "clip-iPhone_13_12_Pro_Max_8",
                      children: (0, n.jsx)("rect", {
                        width: "1694",
                        height: "632",
                        class: "svg-elem-1",
                      }),
                    }),
                  ],
                }),
                (0, n.jsx)("g", {
                  id: "iPhone_13_12_Pro_Max_8",
                  "data-name": "iPhone 13, 12 Pro Max \u2013 8",
                  "clip-path": "url(#clip-iPhone_13_12_Pro_Max_8)",
                  children: (0, n.jsx)("g", {
                    transform: "matrix(1, 0, 0, 1, 0, 0)",
                    filter: "url(#Path_1809)",
                    children: (0, n.jsx)("path", {
                      id: "Path_1809-2",
                      "data-name": "Path 1809",
                      d: "M10819.705,2627.722s232.789-312.442,412.521-555.4c110.062-148.78,186.822-290.82,111.081-310.741s84.1-195.969,101.01-237.551c13.455-33.076,10.91-67.434,14.3-91,10.876-75.692,4.592-165.5,54.389-200.4,84.545-59.255,53.643-252.151,93.189-268.385",
                      transform:
                        "matrix(0.59, 0.81, -0.81, 0.59, -4329.27, -9942.53)",
                      fill: "none",
                      stroke: "#fc4c02",
                      "stroke-width": "6",
                      class: "svg-elem-2",
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    34295: function (e, s, r) {
      "use strict";
      r.r(s),
        r.d(s, {
          default: function () {
            return i;
          },
        });
      var n = r(85893),
        t = r(67294);
      function i() {
        var e = (0, t.useState)(0),
          s = e[0],
          r = e[1];
        return (
          (0, t.useEffect)(function () {
            var e = function () {
              r(window.scrollY);
            };
            return (
              window.addEventListener("scroll", e),
              function () {
                window.removeEventListener("scroll", e);
              }
            );
          }, []),
          (0, n.jsx)("section", {
            children: (0, n.jsxs)("div", {
              class: "text",
              children: [
                (0, n.jsxs)("h2", {
                  style: {
                    textShadow: "".concat(s, " 100px 0 rgba(255,255,255,0.1)"),
                    transform: "translateX(calc(0% - ".concat(s, "px * 0.5))"),
                  },
                  children: [
                    (0, n.jsx)("span", { children: "Movez " }),
                    (0, n.jsx)("span", { children: "Earn " }),
                    (0, n.jsx)("span", { children: "Win " }),
                    (0, n.jsx)("span", { children: "Rewards " }),
                    (0, n.jsx)("span", { children: "Movez " }),
                    (0, n.jsx)("span", { children: "Movez " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Move " }),
                  ],
                }),
                (0, n.jsxs)("h2", {
                  style: {
                    textShadow: "".concat(s, " 100px 0 rgba(255,255,255,0.1)"),
                    transform: "translateX(calc(0% - ".concat(s, "px * 1.15))"),
                  },
                  children: [
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Fitness " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Win " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Win " }),
                    (0, n.jsx)("span", { children: "Win " }),
                    (0, n.jsx)("span", { children: "Win " }),
                    (0, n.jsx)("span", { children: "Win " }),
                    (0, n.jsx)("span", { children: "Win " }),
                    (0, n.jsx)("span", { children: "Win " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Move " }),
                    (0, n.jsx)("span", { children: "Move " }),
                  ],
                }),
              ],
            }),
          })
        );
      }
    },
    15984: function (e, s, r) {
      "use strict";
      r.r(s),
        r.d(s, {
          default: function () {
            return a;
          },
        });
      var n = r(85893),
        t = r(67294),
        i = r(56239);
      function a() {
        var e = (0, t.useState)(0),
          s = e[0],
          r = e[1];
        return (0, n.jsxs)("div", {
          className: "relative mb-10",
          style: { height: 400 },
          children: [
            (0, n.jsxs)("div", {
              className: "container mx-auto py-10 pb-5 px-3",
              children: [
                (0, n.jsxs)("h1", {
                  children: [
                    "Ready? ",
                    (0, n.jsx)("span", {
                      className: "outline",
                      children: "Set.Go!",
                    }),
                  ],
                }),
                (0, n.jsx)("p", {
                  className: "pt-3",
                  children: "Get ready, the movement's moving! Are you?",
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "relative",
              children: [
                (0, n.jsxs)("div", {
                  className: "btn-grp hidden ",
                  children: [
                    (0, n.jsx)("button", {
                      className: "left",
                      onClick: function () {
                        s < 0 && r(s + 1);
                      },
                      children: (0, n.jsx)(i.xhZ, {
                        width: 15,
                        color: "white",
                      }),
                    }),
                    (0, n.jsx)("button", {
                      className: "right",
                      onClick: function () {
                        s > -3 && r(s - 1);
                      },
                      children: (0, n.jsx)(i.ZJY, {
                        width: 15,
                        color: "white",
                      }),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "relative w-full ",
                  style: {
                    transition: "all 1s ease 0s",
                    height: 250,
                    left: "".concat(190 * s, "px"),
                  },
                  children: [
                    (0, n.jsxs)("ul", {
                      class: "timeline-events",
                      children: [
                        (0, n.jsx)("li", {
                          class:
                            "timeline-event-years-4-5 timeline-event-legend",
                          children: (0, n.jsx)("i", {
                            children: (0, n.jsxs)("span", {
                              className: "flex items-center absolute",
                              style: { left: "140px" },
                              children: [
                                (0, n.jsx)("span", {
                                  className: "text-sm pr-1",
                                  children: "100%",
                                }),
                                (0, n.jsx)(i.pWo, {
                                  width: 15,
                                  color: "white",
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, n.jsxs)("li", {
                          class: "timeline-event-years-2",
                          children: [
                            (0, n.jsx)("h2", { children: "Phase I" }),
                            (0, n.jsx)("h3", { children: "App Beta Launch" }),
                            (0, n.jsx)("h4", { children: "Main website " }),
                            (0, n.jsx)("h4", { children: "Staking " }),
                            (0, n.jsx)("h4", {
                              children: "Dual token Launch ",
                            }),
                            (0, n.jsx)("h4", { children: "Booster NFTs " }),
                          ],
                        }),
                        (0, n.jsxs)("li", {
                          class: "timeline-event-years-2",
                          children: [
                            (0, n.jsx)("h2", { children: "Phase II" }),
                            (0, n.jsx)("h3", {
                              children: "Enhanced user experience",
                            }),
                            (0, n.jsx)("h4", { children: "Additional sports" }),
                            (0, n.jsx)("h4", {
                              children: "Achievement system",
                            }),
                            (0, n.jsx)("h4", {
                              children: "Quests/missions system ",
                            }),
                            (0, n.jsx)("h4", { children: "Boost zones" }),
                          ],
                        }),
                        (0, n.jsxs)("li", {
                          class: "timeline-event-years-2-5",
                          children: [
                            (0, n.jsx)("h2", { children: "Phase III" }),
                            (0, n.jsx)("h3", {
                              children: "Expansion to the physical world",
                            }),
                            (0, n.jsx)("h4", { children: "AR implementation" }),
                            (0, n.jsx)("h4", { children: "Geo-Location NFTs" }),
                            (0, n.jsx)("h4", { children: "MoveZ merchandize" }),
                            (0, n.jsx)("h4", {
                              children: "One time sign-up gift",
                            }),
                            (0, n.jsx)("h4", { children: "Shop partnerships" }),
                          ],
                        }),
                        (0, n.jsxs)("li", {
                          class: "timeline-event-years-7",
                          children: [
                            (0, n.jsx)("h2", { children: "Phase IV" }),
                            (0, n.jsx)("h3", {
                              children: "Expanding with focus on big events",
                            }),
                            (0, n.jsx)("h4", { children: "Mega/Big events " }),
                            (0, n.jsx)("h4", {
                              children: "Multi-chain upgrade ",
                            }),
                            (0, n.jsx)("h4", {
                              children: "Community sports-driven events ",
                            }),
                            (0, n.jsx)("h4", {
                              children: "Geo-location competitions ",
                            }),
                            (0, n.jsx)("h4", {
                              children: "Corporate implementation ",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)("ul", {
                      class: "timelines-years",
                      children: [
                        (0, n.jsx)("li", { children: "Q4 2022" }),
                        (0, n.jsx)("li", { children: "Q1 2023" }),
                        (0, n.jsx)("li", { children: "Q2 2023" }),
                        (0, n.jsx)("li", { children: "Q3 2023" }),
                        (0, n.jsx)("li", { children: "Q4 2023" }),
                        (0, n.jsx)("li", { children: "Q1 2024" }),
                        (0, n.jsx)("li", { children: "Q2 2024" }),
                        (0, n.jsx)("li", { children: "Q3 2024" }),
                        (0, n.jsx)("li", { children: "Q4 2024" }),
                        (0, n.jsx)("li", { children: "Q1 2025" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    40391: function (e, s, r) {
      "use strict";
      r.r(s),
        r.d(s, {
          default: function () {
            return i;
          },
        });
      var n = r(85893),
        t = r(56239);
      function i() {
        return (0, n.jsxs)("div", {
          class:
            "container mx-auto py-10 tokenmetrics relative overflow-hidden px-5",
          children: [
            (0, n.jsxs)("div", {
              className: "flex title items-center",
              children: [
                (0, n.jsxs)("h1", {
                  children: [
                    "Token",
                    (0, n.jsx)("span", {
                      className: "outline",
                      children: "Metrics",
                    }),
                  ],
                }),
                (0, n.jsxs)("a", {
                  href: "https://move-me.gitbook.io/movez-litepaper/ktVp6nJ7D3dSh2dPafnL/tokenomics",
                  target: "_blank",
                  className: "link pl-4 pt-2",
                  children: [
                    "  ",
                    (0, n.jsx)(t.cth, {
                      color: "#00000",
                      height: "30px",
                      width: "30px",
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)("p", {
              className: "pt-3",
              children: [
                "MOVEZ does not require users to own NFT assets to participate",
                (0, n.jsx)("br", {}),
                "in its move-to-earn ecosystem.",
              ],
            }),
            (0, n.jsxs)("div", {
              class: "chart regular-font-size",
              children: [
                (0, n.jsxs)("div", {
                  class: "bar bar-18 yellow",
                  children: [
                    (0, n.jsxs)("div", {
                      class: "face side-0",
                      children: [
                        (0, n.jsx)("div", {
                          class: "growing-bar bg-green-100",
                          style: { transform: "translateY(10%)" },
                          children: (0, n.jsx)("p", { children: "Team" }),
                        }),
                        (0, n.jsx)("div", {
                          class: "growing-bar bg-green-300",
                          style: { transform: "translateY(45%)" },
                          children: (0, n.jsx)("p", { children: "Liquidity" }),
                        }),
                        (0, n.jsx)("div", {
                          class: "growing-bar bg-green-500",
                          style: { transform: "translateY(70%)" },
                          children: (0, n.jsx)("p", { children: " Advisor" }),
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      class: "face side-1",
                      children: [
                        (0, n.jsx)("div", {
                          class: "growing-bar bg-green-100",
                          style: { transform: "translateY(10%)" },
                          children: "12%",
                        }),
                        (0, n.jsx)("div", {
                          class: "growing-bar bg-green-300",
                          style: { transform: "translateY(45%)" },
                          children: "10%",
                        }),
                        (0, n.jsx)("div", {
                          class: "growing-bar bg-green-500",
                          style: { transform: "translateY(70%)" },
                          children: (0, n.jsx)("p", { children: "6%" }),
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", { class: "face top" }),
                    (0, n.jsx)("div", { class: "face floor" }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  class: "bar bar-44 cyan",
                  children: [
                    (0, n.jsxs)("div", {
                      class: "face side-0",
                      children: [
                        (0, n.jsx)("div", {
                          class: "growing-bar bg-blue-100",
                          style: { transform: "translateY(5%)" },
                          children: (0, n.jsx)("p", { children: "Ecosystem" }),
                        }),
                        (0, n.jsx)("div", {
                          class: "growing-bar bg-blue-300",
                          style: { transform: "translateY(37%)" },
                          children: (0, n.jsx)("p", { children: "Rewards" }),
                        }),
                        (0, n.jsx)("div", {
                          class: "growing-bar bg-blue-500",
                          style: { transform: "translateY(70%)" },
                          children: (0, n.jsx)("p", { children: "Reserve" }),
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      class: "face side-1",
                      children: [
                        (0, n.jsx)("div", {
                          class: "growing-bar bg-blue-100",
                          style: { transform: "translateY(5%)" },
                          children: (0, n.jsx)("p", { children: "22%" }),
                        }),
                        (0, n.jsx)("div", {
                          class: "growing-bar bg-blue-300",
                          style: { transform: "translateY(37%)" },
                          children: (0, n.jsx)("p", { children: "22%" }),
                        }),
                        (0, n.jsx)("div", {
                          class: "growing-bar bg-blue-500",
                          style: { transform: "translateY(70%)" },
                          children: (0, n.jsx)("p", { children: "2%" }),
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", { class: "face top" }),
                    (0, n.jsx)("div", { class: "face floor" }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  class: "bar bar-2 lime",
                  children: [
                    (0, n.jsxs)("div", {
                      class: "face side-0",
                      children: [
                        (0, n.jsx)("div", {
                          class: "growing-bar bg-orange-100",
                          style: { transform: "translateY(32%)" },
                          children: (0, n.jsx)("p", { children: "Public" }),
                        }),
                        (0, n.jsx)("div", {
                          class: "growing-bar bg-orange-400",
                          style: { transform: "translateY(50%)" },
                          children: (0, n.jsx)("p", { children: "Private" }),
                        }),
                        (0, n.jsx)("div", {
                          class: "growing-bar bg-orange",
                          style: { transform: "translateY(70%)" },
                          children: (0, n.jsx)("p", { children: "Seed" }),
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      class: "face side-1",
                      children: [
                        (0, n.jsx)("div", {
                          class: "growing-bar bg-orange-100",
                          style: { transform: "translateY(32%)" },
                          children: "6%",
                        }),
                        (0, n.jsx)("div", {
                          class: "growing-bar bg-orange-400",
                          style: { transform: "translateY(50%)" },
                          children: "10%",
                        }),
                        (0, n.jsx)("div", {
                          class: "growing-bar bg-orange",
                          style: { transform: "translateY(70%)", zIndex: 1 },
                          children: (0, n.jsx)("p", { children: "10%" }),
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", { class: "face top" }),
                    (0, n.jsx)("div", { class: "face floor" }),
                  ],
                }),
                (0, n.jsx)("img", { src: "/arrows.svg", className: "arrows" }),
              ],
            }),
          ],
        });
      }
    },
    7067: function (e, s, r) {
      "use strict";
      r.r(s),
        r.d(s, {
          default: function () {
            return u;
          },
        });
      var n = r(85893),
        t = r(67294),
        i = r(88279),
        a = r(26135),
        l = r(18626),
        o = r(6599),
        c = r(87210),
        d = r(71874),
        h = (r(25404), r(77854));
      function x(e, s, r) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = r),
          e
        );
      }
      var p = function (e) {
        var s = (0, t.useRef)(null),
          r = (0, l.L)("/scene.glb").nodes,
          a = 0.4;
        return (
          (0, i.x)(function (e) {
            var r = Math.sin(e.clock.elapsedTime / 2),
              n = Math.cos(e.clock.elapsedTime / 2);
            s.current.layers[0].origin.set(n / 2, 0, 0),
              s.current.layers[1].origin.set(n, r, n),
              s.current.layers[2].origin.set(r, n, r),
              s.current.layers[3].origin.set(n, r, n);
          }),
          console.log(r),
          (0, n.jsxs)(
            "mesh",
            (function (e) {
              for (var s = 1; s < arguments.length; s++) {
                var r = null != arguments[s] ? arguments[s] : {},
                  n = Object.keys(r);
                "function" === typeof Object.getOwnPropertySymbols &&
                  (n = n.concat(
                    Object.getOwnPropertySymbols(r).filter(function (e) {
                      return Object.getOwnPropertyDescriptor(r, e).enumerable;
                    })
                  )),
                  n.forEach(function (s) {
                    x(e, s, r[s]);
                  });
              }
              return e;
            })({}, e, {
              scale: [0.01, 0.01, 0.05],
              rotation: [0, -11.07, 0],
              geometry: r.movezstl.geometry,
              children: [
                (0, n.jsxs)(d.ud, {
                  ref: s,
                  toneMapped: !1,
                  children: [
                    (0, n.jsx)(d.HE, {
                      colorA: "#FC4C02",
                      colorB: "#1788FB",
                      alpha: 1,
                      mode: "normal",
                      near: 0.2,
                      far: 0.5,
                      origin: [0, 0, 0],
                    }),
                    (0, n.jsx)(d.HE, {
                      colorA: "#FFFFFF",
                      colorB: "#FFFFFF",
                      alpha: 1,
                      mode: "normal",
                      near: 0.8,
                      far: 2,
                      origin: [0, 1, 1],
                    }),
                    (0, n.jsx)(d.HE, {
                      colorA: "#1788FB",
                      colorB: "#FC4C02",
                      alpha: 1,
                      mode: "normal",
                      near: 3 * a,
                      far: 2,
                      origin: [0, 1, -1],
                    }),
                    (0, n.jsx)(d.HE, {
                      colorA: "#1788FB",
                      colorB: "#FC4C02",
                      alpha: 1,
                      mode: "normal",
                      near: 1.5 * a,
                      far: 3.5,
                      origin: [1, -1, -1],
                    }),
                  ],
                }),
                (0, n.jsx)(o.w, { color: "white" }),
              ],
            })
          )
        );
      };
      function u() {
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)(a.Xz, {
            style: { height: "60vh" },
            orthographic: !0,
            dpr: [1, 2],
            camera: { position: [0, 0, 10], zoom: 200 },
            children: (0, n.jsx)(t.Suspense, {
              fallback: (0, n.jsx)(h.V, {
                center: !0,
                className: "loading",
                children: "Loading...",
              }),
              children: (0, n.jsxs)("group", {
                rotation: [Math.PI , -Math.PI / 2, Math.PI],
                children: [
                  (0, n.jsx)(c.Y, {
                    fit: !0,
                    clip: !0,
                    observe: !0,
                    margin: 1.25,
                    children: (0, n.jsx)(p, { scale: [0.5, 1, 0.5] }),
                  }),
                  (0, n.jsx)("gridHelper", {
                    colorGrid: "white",
                    args: [10, 40, "white", "#7E7E7E"],
                    position: [-0.25, 0, 0],
                    rotation: [Math.PI/5, -Math.PI/4, Math.PI / 5],
                  }),
                ],
              }),
            }),
          }),
        });
      }
    },
    53678: function (e, s, r) {
      "use strict";
      r.r(s),
        r.d(s, {
          default: function () {
            return m;
          },
        });
      var n = r(85893),
        t = r(9008),
        i = r(28860),
        a = r(7067),
        l = r(97283),
        o = (r(7512), r(79833)),
        c = r(34295),
        d = r(15984),
        h = r(68728),
        x = r(1313),
        p = r(40391),
        u = r(63848),
        g = r(71697),
        j = r(56239),
        f = (0, i.default)(
          function () {
            return Promise.all([r.e(545), r.e(183)]).then(r.bind(r, 7183));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [7183];
              },
            },
            loading: function () {
              return "Loading...";
            },
            ssr: !1,
          }
        );
      function m() {
        return (0, n.jsxs)("div", {
          style: { overflow: "hidden" },
          children: [
            (0, n.jsxs)(t.default, {
              children: [
                (0, n.jsx)("title", { children: "MoveZ" }),
                (0, n.jsx)("link", {
                  rel: "icon",
                  href: "/movez-logo.svg",
                  type: "image/x-icon",
                }),
                (0, n.jsx)("meta", {
                  name: "description",
                  content:
                    "MoveZ is based on a common everyday activity for most people: moving. We are the first team to create and implement a sustainable, working Move-to-Earn (M2E) model. By simply moving, jogging, walking, running, and swimming indoors and outdoors, users will earn IN-APP currency, which can either be donated to numerous charity organizations or cashed out for profit. MoveZ's earn capability intends to incentivize tens of millions of people around the globe toward a healthier lifestyle, introducing them to how revolutionary the web3 can and will be, all while relying on its social elements and simple UI to develop a long-lasting platform encouraging user-generated Web 3.0 content. Note: MoveZ is currently being tested under its Closed Alpha Phase. The contents of this Litepaper may change in the future to better reflect the full scope of the project.",
                }),
                (0, n.jsx)("meta", { name: "author", content: "Movez" }),
                (0, n.jsx)("meta", {
                  name: "keywords",
                  content:
                    "move,earn,blue,zilla,bluezilla,bitcoin,money,crypto,decentrelezied,blockchain",
                }),
                (0, n.jsx)("meta", {
                  name: "image",
                  content: "/movez-logo.svg",
                }),
              ],
            }),
            (0, n.jsx)(h.default, {}),
            (0, n.jsx)("img", { src: "/MMovez.svg", className: "logo" }),
            (0, n.jsx)("a", {
              className: "staking",
              href: "https://staking.movez.me/",
              target: "_blank",
              children: "Staking",
            }),
            (0, n.jsx)("a", {
              className: "litepaper",
              href: "https://move-me.gitbook.io/movez-litepaper/ktVp6nJ7D3dSh2dPafnL/",
              target: "_blank",
              children: "Litepaper",
            }),
            (0, n.jsx)(l.default, {}),
            (0, n.jsx)(c.default, {}),
            (0, n.jsx)(g.default, {}),
            (0, n.jsx)(o.default, {}),
            (0, n.jsx)(f, {}),
            (0, n.jsx)(d.default, {}),
            (0, n.jsx)(x.default, {}),
            (0, n.jsx)(p.default, {}),
            (0, n.jsx)(u.default, {}),
            (0, n.jsxs)("footer", {
              className: "relative",
              children: [
                (0, n.jsx)(a.default, {}),
                (0, n.jsxs)("div", {
                  className: "left-social",
                  children: [
                    (0, n.jsx)("a", {
                      href: "https://Twitter.com/movezapp",
                      target: "_blank",
                      children: (0, n.jsx)(j.jr, {
                        color: "#00000",
                        height: "25px",
                        width: "25px",
                      }),
                    }),
                    (0, n.jsx)("div", { className: "py-10" }),
                    (0, n.jsx)("a", {
                      href: "https://t.me/movezapp",
                      target: "_blank",
                      children: (0, n.jsx)("img", {
                        src: "/tg.svg",
                        height: "25px",
                        width: "25px",
                      }),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "right-social",
                  children: [
                    (0, n.jsx)("a", {
                        href: "https://facebook.com/movezapp",
                        target: "_blank",
                        children: (0, n.jsx)("img", {
                            src: "/fb.svg",  
                          color: "#00000",
                          height: "25px",
                          width: "25px",
                        }),
                      }),
                    
                    (0, n.jsx)("div", { className: "py-10" }),
                    (0, n.jsx)("a", {
                        href: "https://instagram.com/movez",
                        target: "_blank",
                        children: (0, n.jsx)("img", {
                          src: "/insta.svg",
                          height: "25px",
                          width: "25px",
                        }),
                      }),
                       
                  ],
                }),
                (0, n.jsx)("div", { className: "bottom-social" }),
              ],
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [774, 683, 737, 634, 623, 433, 6, 257, 313, 888, 179], function () {
      return (s = 78581), e((e.s = s));
      var s;
    });
    var s = e.O();
    _N_E = s;
  },
]);
