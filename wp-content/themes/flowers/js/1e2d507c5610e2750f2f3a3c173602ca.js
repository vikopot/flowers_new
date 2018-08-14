/*!jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license*/ ! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "1.12.4",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === n.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            try {
                if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (!l.ownFirst)
                for (b in a) return k.call(a, b);
            for (b in a);
            return void 0 === b || k.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && n.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++)
                    if (b.call(a[d], d, a[d]) === !1) break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (h) return h.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, g = 0,
                h = [];
            if (s(a))
                for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
            else
                for (g in a) e = b(a[g], g, c), null != e && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function() {
                return a.apply(b || this, c.concat(e.call(arguments)))
            }, d.guid = a.guid = a.guid || n.guid++, d) : void 0
        },
        now: function() {
            return +new Date
        },
        support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ga(),
            z = ga(),
            A = ga(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            da = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) w = b, s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--) r[h] = l + " " + qa(r[h]);
                        s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s) try {
                        return H.apply(d, w.querySelectorAll(s)), d
                    } catch (y) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }

        function ga() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ha(a) {
            return a[u] = !0, a
        }

        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ja(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function ka(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function na(a) {
            return ha(function(b) {
                return b = +b, ha(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = fa.support = {}, f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return ka(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, fa.matches = function(a, b) {
            return fa(a, null, null, b)
        }, fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return fa(b, n, null, [a]).length > 0
        }, fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fa.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fa.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0
                    }
                }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: na(function() {
                    return [0]
                }),
                last: na(function(a, b) {
                    return [b - 1]
                }),
                eq: na(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: na(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: na(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = la(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = ma(b);

        function pa() {}
        pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        };

        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function ra(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                            if (i[d] = k, k[2] = a(b, c, g)) return !0
                        }
            }
        }

        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
            return c
        }

        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ua(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ua(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                    return a === b
                }, h, !0), l = ra(function(a) {
                    return J(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                }
            return sa(m)
        }

        function xa(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = F.call(i));
                            u = ua(u)
                        }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ha(f) : f
        }
        return h = fa.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)), f.selector = a
            }
            return f
        }, i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ia(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ia(function(a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fa
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        v = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;

    function z(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return n.inArray(a, b) > -1 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (n.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) n.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = n.fn.init = function(a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || A, "string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                        for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                if (f = d.getElementById(e[2]), f && f.parentNode) {
                    if (f.id !== e[2]) return A.find(a);
                    this.length = 1, this[0] = f
                }
                return this.context = d, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/,
        E = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.fn.extend({
        has: function(a) {
            var b, c = n(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (n.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function F(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return F(a, "nextSibling")
        },
        prev: function(a) {
            return F(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var G = /\S+/g;

    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function() {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        n.each(b, function(b, c) {
                            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function() {
                    return n.each(arguments, function(a, b) {
                        var c;
                        while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = g = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = !0, c || j.disable(), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return j
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = e.call(arguments),
                d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(d) {
                        b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (d > 1)
                for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
        }
    });

    function J() {
        d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
    }

    function K() {
        (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready())
    }
    n.ready.promise = function(b) {
        if (!I)
            if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready);
            else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);
        else {
            d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
            var c = !1;
            try {
                c = null == a.frameElement && d.documentElement
            } catch (e) {}
            c && c.doScroll && ! function f() {
                if (!n.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (b) {
                        return a.setTimeout(f, 50)
                    }
                    J(), n.ready()
                }
            }()
        }
        return I.promise(b)
    }, n.ready.promise();
    var L;
    for (L in n(l)) break;
    l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function() {
            var a, b, c, e;
            c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
        }),
        function() {
            var a = d.createElement("div");
            l.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                l.deleteExpando = !1
            }
            a = null
        }();
    var M = function(a) {
            var b = n.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        },
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;

    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                n.data(a, b, c)
            } else c = void 0;
        }
        return c
    }

    function Q(a) {
        var b;
        for (b in a)
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function R(a, b, d, e) {
        if (M(a)) {
            var f, g, h = n.expando,
                i = a.nodeType,
                j = i ? n.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: n.noop
            }), "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
        }
    }

    function S(a, b, c) {
        if (M(a)) {
            var d, e, f = a.nodeType,
                g = f ? n.cache : a,
                h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !Q(d) : !n.isEmptyObject(d)) return
                }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
            }
        }
    }
    n.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(a) {
                return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a)
            },
            data: function(a, b, c) {
                return R(a, b, c)
            },
            removeData: function(a, b) {
                return S(a, b)
            },
            _data: function(a, b, c) {
                return R(a, b, c, !0)
            },
            _removeData: function(a, b) {
                return S(a, b, !0)
            }
        }), n.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                        c = g.length;
                        while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                        n._data(f, "parsedAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() {
                    n.data(this, a)
                }) : arguments.length > 1 ? this.each(function() {
                    n.data(this, a, b)
                }) : f ? P(f, a, n.data(f, a)) : void 0
            },
            removeData: function(a) {
                return this.each(function() {
                    n.removeData(this, a)
                })
            }
        }), n.extend({
            queue: function(a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = n.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = n._queueHooks(a, b),
                    g = function() {
                        n.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return n._data(a, c) || n._data(a, c, {
                    empty: n.Callbacks("once memory").add(function() {
                        n._removeData(a, b + "queue"), n._removeData(a, c)
                    })
                })
            }
        }), n.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = n.queue(this, a, b);
                    n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    n.dequeue(this, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                var c, d = 1,
                    e = n.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {
                        --d || e.resolveWith(f, [f])
                    };
                "string" != typeof a && (b = a, a = void 0), a = a || "fx";
                while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        }),
        function() {
            var a;
            l.shrinkWrapBlocks = function() {
                if (null != a) return a;
                a = !1;
                var b, c, e;
                return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0
            }
        }();
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
        V = ["Top", "Right", "Bottom", "Left"],
        W = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        };

    function X(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return n.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var Y = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) Y(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(n(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        Z = /^(?:checkbox|radio)$/i,
        $ = /<([\w:-]+)/,
        _ = /^$|\/(?:java|ecma)script/i,
        aa = /^\s+/,
        ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function ca(a) {
        var b = ba.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }! function() {
        var a = d.createElement("div"),
            b = d.createDocumentFragment(),
            c = d.createElement("input");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando)
    }();
    var da = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;

    function ea(a, b) {
        var c, d, e = 0,
            f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }

    function fa(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
    }
    var ga = /<|&#?\w+;/,
        ha = /<tbody/i;

    function ia(a) {
        Z.test(a.type) && (a.defaultChecked = a.checked)
    }

    function ja(a, b, c, d, e) {
        for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++)
            if (g = a[r], g || 0 === g)
                if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
                else if (ga.test(g)) {
            i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];
            while (f--) i = i.lastChild;
            if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
                g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;
                while (f--) n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
            }
            n.merge(q, i.childNodes), i.textContent = "";
            while (i.firstChild) i.removeChild(i.firstChild);
            i = p.lastChild
        } else q.push(b.createTextNode(g));
        i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;
        while (g = q[r++])
            if (d && n.inArray(g, d) > -1) e && e.push(g);
            else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
            f = 0;
            while (g = i[f++]) _.test(g.type || "") && c.push(g)
        }
        return i = null, p
    }! function() {
        var b, c, e = d.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1);
        e = null
    }();
    var ka = /^(?:input|select|textarea)$/i,
        la = /^key/,
        ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        na = /^(?:focusinfocus|focusoutblur)$/,
        oa = /^([^.]*)(?:\.(.+)|)/;

    function pa() {
        return !0
    }

    function qa() {
        return !1
    }

    function ra() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function sa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) sa(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = qa;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return n().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(G) || [""], h = b.length;
                while (h--) f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(G) || [""], j = b.length;
                while (j--)
                    if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
                        while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
            }
        },
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
                if (!f && !l.noBubble && !n.isWindow(e)) {
                    for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) p.push(i), m = i;
                    m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
                }
                o = 0;
                while ((i = p[o++]) && !b.isPropagationStopped()) b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault());
                if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
                    m = e[h], m && (e[h] = null), n.event.triggered = q;
                    try {
                        e[q]()
                    } catch (s) {}
                    n.event.triggered = void 0, m && (e[h] = m)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [],
                i = e.call(arguments),
                j = (n._data(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, e, f = a.type,
                g = a,
                h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
            while (b--) c = e[b], a[c] = g[c];
            return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button,
                    h = b.fromElement;
                return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ra() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ra() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = d.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: qa,
        isPropagationStopped: qa,
        isImmediatePropagationStopped: qa,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), l.submit || (n.event.special.submit = {
        setup: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
                c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function(a) {
                    a._submitBubble = !0
                }), n._data(c, "submit", !0))
            })
        },
        postDispatch: function(a) {
            a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
        },
        teardown: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
        }
    }), l.change || (n.event.special.change = {
        setup: function() {
            return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
            }), n.event.add(this, "click._change", function(a) {
                this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a)
            })), !1) : void n.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
                }), n._data(b, "change", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return n.event.remove(this, "._change"), !ka.test(this.nodeName)
        }
    }), l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b);
                e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d) {
            return sa(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return sa(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = qa), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var ta = / jQuery\d+="(?:null|\d+)"/g,
        ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
        va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        wa = /<script|<style|<link/i,
        xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ya = /^true\/(.*)/,
        za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Aa = ca(d),
        Ba = Aa.appendChild(d.createElement("div"));

    function Ca(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function Da(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
    }

    function Ea(a) {
        var b = ya.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Fa(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a),
                g = n._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d])
            }
            g.data && (g.data = n.extend({}, g.data))
        }
    }

    function Ga(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events) n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
        }
    }

    function Ha(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d)
        });
        if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
            for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m);
            if (h)
                for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
            k = e = null
        }
        return a
    }

    function Ia(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(va, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) d[g] && Ga(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) Fa(e, d[g]);
                else Fa(a, f);
            return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++)
                if ((b || M(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f))
                }
        }
    }), n.fn.extend({
        domManip: Ha,
        detach: function(a) {
            return Ia(this, a, !0)
        },
        remove: function(a) {
            return Ia(this, a)
        },
        text: function(a) {
            return Y(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && n.cleanData(ea(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return Y(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
                if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ha(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Ja, Ka = {
        HTML: "block",
        BODY: "block"
    };

    function La(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");
        return c.detach(), d
    }

    function Ma(a) {
        var b = d,
            c = Ka[a];
        return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c
    }
    var Na = /^margin/,
        Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
        Pa = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        },
        Qa = d.documentElement;
    ! function() {
        var b, c, e, f, g, h, i = d.createElement("div"),
            j = d.createElement("div");
        if (j.style) {
            j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
                reliableHiddenOffsets: function() {
                    return null == b && k(), f
                },
                boxSizingReliable: function() {
                    return null == b && k(), e
                },
                pixelMarginRight: function() {
                    return null == b && k(), c
                },
                pixelPosition: function() {
                    return null == b && k(), b
                },
                reliableMarginRight: function() {
                    return null == b && k(), g
                },
                reliableMarginLeft: function() {
                    return null == b && k(), h
                }
            });

            function k() {
                var k, l, m = d.documentElement;
                m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
                    width: "4px"
                }).width, j.style.marginRight = "50%", c = "4px" === (l || {
                    marginRight: "4px"
                }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i)
            }
        }
    }();
    var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ra = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a), c.getComputedStyle(b)
    }, Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + ""
    }) : Qa.currentStyle && (Ra = function(a) {
        return a.currentStyle
    }, Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function Ua(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Va = /alpha\([^)]*\)/i,
        Wa = /opacity\s*=\s*([^)]*)/i,
        Xa = /^(none|table(?!-c[ea]).+)/,
        Ya = new RegExp("^(" + T + ")(.*)$", "i"),
        Za = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        $a = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        _a = ["Webkit", "O", "Moz", "ms"],
        ab = d.createElement("div").style;

    function bb(a) {
        if (a in ab) return a;
        var b = a.charAt(0).toUpperCase() + a.slice(1),
            c = _a.length;
        while (c--)
            if (a = _a[c] + b, a in ab) return a
    }

    function cb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function db(a, b, c) {
        var d = Ya.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function eb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
        return g
    }

    function fb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ra(a),
            g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Sa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Oa.test(e)) return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Sa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": l.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c
                } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function() {
                    return fb(a, b, d)
                }) : fb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ra(a);
                return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), l.opacity || (n.cssHooks.opacity = {
        get: function(a, b) {
            return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
        }
    }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function(a, b) {
        return b ? Pa(a, {
            display: "inline-block"
        }, Sa, [a, "marginRight"]) : void 0
    }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Na.test(a) || (n.cssHooks[a + b].set = db)
    }), n.fn.extend({
        css: function(a, b) {
            return Y(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return cb(this, !0)
        },
        hide: function() {
            return cb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                W(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function gb(a, b, c, d, e) {
        return new gb.prototype.init(a, b, c, d, e)
    }
    n.Tween = gb, gb.prototype = {
        constructor: gb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = gb.propHooks[this.prop];
            return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = gb.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this
        }
    }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, n.fx = gb.prototype.init, n.fx.step = {};
    var hb, ib, jb = /^(?:toggle|show|hide)$/,
        kb = /queueHooks$/;

    function lb() {
        return a.setTimeout(function() {
            hb = void 0
        }), hb = n.now()
    }

    function mb(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = V[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function nb(a, b, c) {
        for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function ob(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this,
            o = {},
            p = a.style,
            q = a.nodeType && W(a),
            r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, m.always(function() {
            m.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], jb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || n.style(a, d)
            } else j = void 0;
        if (n.isEmptyObject(o)) "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function() {
                n(a).hide()
            }), m.done(function() {
                var b;
                n._removeData(a, "fxshow");
                for (b in o) n.style(a, b, o[b])
            });
            for (d in o) g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function pb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function qb(a, b, c) {
        var d, e, f = 0,
            g = qb.prefilters.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {},
                    easing: n.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: hb || lb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (pb(k, j.opts.specialEasing); g > f; f++)
            if (d = qb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(qb, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return X(c.elem, a, U.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b)
            },
            prefilters: [ob],
            prefilter: function(a, b) {
                b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
            }
        }), n.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
            }, d
        }, n.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(W).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() {
                        var b = qb(this, n.extend({}, a), f);
                        (e || n._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = n._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || n.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = n._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function(a, b) {
            var c = n.fn[b];
            n.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e)
            }
        }), n.each({
            slideDown: mb("show"),
            slideUp: mb("hide"),
            slideToggle: mb("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            n.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), n.timers = [], n.fx.tick = function() {
            var a, b = n.timers,
                c = 0;
            for (hb = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || n.fx.stop(), hb = void 0
        }, n.fx.timer = function(a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function() {
            ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function() {
            a.clearInterval(ib), ib = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function(b, c) {
            return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        },
        function() {
            var a, b = d.createElement("input"),
                c = d.createElement("div"),
                e = d.createElement("select"),
                f = e.appendChild(d.createElement("option"));
            c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value
        }();
    var rb = /\r/g,
        sb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(sb, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var tb, ub, vb = n.expr.attrHandle,
        wb = /^(?:checked|selected)$/i,
        xb = l.getSetAttribute,
        yb = l.input;
    n.fn.extend({
        attr: function(a, b) {
            return Y(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(G);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(xb ? c : d)
        }
    }), ub = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = vb[b] || n.find.attr;
        yb && xb || !wb.test(b) ? vb[b] = function(a, b, d) {
            var e, f;
            return d || (f = vb[b], vb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, vb[b] = f), e
        } : vb[b] = function(a, b, c) {
            return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), yb && xb || (n.attrHooks.value = {
        set: function(a, b, c) {
            return n.nodeName(a, "input") ? void(a.defaultValue = b) : tb && tb.set(a, b, c)
        }
    }), xb || (tb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, vb.id = vb.name = vb.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, n.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: tb.set
    }, n.attrHooks.contenteditable = {
        set: function(a, b, c) {
            tb.set(a, "" === b ? !1 : b, c)
        }
    }, n.each(["width", "height"], function(a, b) {
        n.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), l.style || (n.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var zb = /^(?:input|select|textarea|button|object)$/i,
        Ab = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return Y(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = n.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), l.hrefNormalized || n.each(["href", "src"], function(a, b) {
        n.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    }), l.enctype || (n.propFix.enctype = "encoding");
    var Bb = /[\t\r\n\f]/g;

    function Cb(a) {
        return n.attr(a, "class") || ""
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, Cb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, Cb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, Cb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = n(this), f = a.match(G) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else void 0 !== a && "boolean" !== c || (b = Cb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1) return !0;
            return !1
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var Db = a.location,
        Eb = n.now(),
        Fb = /\?/,
        Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = n.trim(b + "");
        return e && !n.trim(e.replace(Gb, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    }, n.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var Hb = /#.*$/,
        Ib = /([?&])_=[^&]*/,
        Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Lb = /^(?:GET|HEAD)$/,
        Mb = /^\/\//,
        Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ob = {},
        Pb = {},
        Qb = "*/".concat("*"),
        Rb = Db.href,
        Sb = Nb.exec(Rb.toLowerCase()) || [];

    function Tb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Ub(a, b, c, d) {
        var e = {},
            f = a === Pb;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Vb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c), a
    }

    function Wb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Xb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Rb,
            type: "GET",
            isLocal: Kb.test(Sb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Qb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a)
        },
        ajaxPrefilter: Tb(Ob),
        ajaxTransport: Tb(Pb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c),
                m = l.context || l,
                o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
                p = n.Deferred(),
                q = n.Callbacks("once memory"),
                r = l.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === u) {
                            if (!k) {
                                k = {};
                                while (b = Jb.exec(g)) k[b[1].toLowerCase()] = b[2]
                            }
                            b = k[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === u ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return u || (a = t[c] = t[c] || a, s[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return u || (l.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > u)
                                for (b in a) r[b] = [r[b], a[b]];
                            else w.always(a[w.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || v;
                        return j && j.abort(b), y(0, b), this
                    }
                };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Ub(Ob, l, c, w), 2 === u) return w;
            i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Lb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (e in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[e](l[e]);
            if (j = Ub(Pb, l, c, w)) {
                if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
                l.async && l.timeout > 0 && (h = a.setTimeout(function() {
                    w.abort("timeout")
                }, l.timeout));
                try {
                    u = 1, j.send(s, y)
                } catch (x) {
                    if (!(2 > u)) throw x;
                    y(-1, x)
                }
            } else y(-1, "No Transport");

            function y(b, c, d, e) {
                var k, s, t, v, x, y = c;
                2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Wb(l, w, d)), v = Xb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    });

    function Yb(a) {
        return a.style && a.style.display || n.css(a, "display")
    }

    function Zb(a) {
        if (!n.contains(a.ownerDocument || d, a)) return !0;
        while (a && 1 === a.nodeType) {
            if ("none" === Yb(a) || "hidden" === a.type) return !0;
            a = a.parentNode
        }
        return !1
    }
    n.expr.filters.hidden = function(a) {
        return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a)
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    };
    var $b = /%20/g,
        _b = /\[\]$/,
        ac = /\r?\n/g,
        bc = /^(?:submit|button|image|reset|file)$/i,
        cc = /^(?:input|select|textarea|keygen)/i;

    function dc(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) dc(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) dc(c, a[c], b, e);
        return d.join("&").replace($b, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(ac, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(ac, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic()
    } : hc;
    var ec = 0,
        fc = {},
        gc = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in fc) fc[a](void 0, !0)
    }), l.cors = !!gc && "withCredentials" in gc, gc = l.ajax = !!gc, gc && n.ajaxTransport(function(b) {
        if (!b.crossDomain || l.cors) {
            var c;
            return {
                send: function(d, e) {
                    var f, g = b.xhr(),
                        h = ++ec;
                    if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                        for (f in b.xhrFields) g[f] = b.xhrFields[f];
                    b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                    for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                    g.send(b.hasContent && b.data || null), c = function(a, d) {
                        var f, i, j;
                        if (c && (d || 4 === g.readyState))
                            if (delete fc[h], c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();
                            else {
                                j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
                                try {
                                    i = g.statusText
                                } catch (k) {
                                    i = ""
                                }
                                f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                            }
                        j && e(f, i, j, g.getAllResponseHeaders())
                    }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[h] = c : c()
                },
                abort: function() {
                    c && c(void 0, !0)
                }
            }
        }
    });

    function hc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function ic() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = d.head || n("head")[0] || d.documentElement;
            return {
                send: function(e, f) {
                    b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var jc = [],
        kc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = jc.pop() || n.expando + "_" + Eb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || d;
        var e = x.exec(a),
            f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
    };
    var lc = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && lc) return lc.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };

    function mc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = mc(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - n.css(d, "marginTop", !0),
                    left: b.left - c.left - n.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Qa
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function(d) {
            return Y(this, function(a, d, e) {
                var f = mc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Ua(l.pixelPosition, function(a, c) {
            return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return Y(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), n.fn.size = function() {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var nc = a.jQuery,
        oc = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n
    }, b || (a.jQuery = a.$ = n), n
});
jQuery.noConflict();;
/*!jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license*/
/*
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(a, b, c) {
        function d(c) {
            var d = b.console;
            f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
        }

        function e(b, c, e, f) {
            if (Object.defineProperty) try {
                return void Object.defineProperty(b, c, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return d(f), e
                    },
                    set: function(a) {
                        d(f), e = a
                    }
                })
            } catch (g) {}
            a._definePropertyBroken = !0, b[c] = e
        }
        a.migrateVersion = "1.4.1";
        var f = {};
        a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function() {
            f = {}, a.migrateWarnings.length = 0
        }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
        var g = a("<input/>", {
                size: 1
            }).attr("size") && a.attrFn,
            h = a.attr,
            i = a.attrHooks.value && a.attrHooks.value.get || function() {
                return null
            },
            j = a.attrHooks.value && a.attrHooks.value.set || function() {
                return c
            },
            k = /^(?:input|button)$/i,
            l = /^[238]$/,
            m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            n = /^(?:checked|selected)$/i;
        e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function(b, e, f, i) {
            var j = e.toLowerCase(),
                o = b && b.nodeType;
            return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
                get: function(b, d) {
                    var e, f = a.prop(b, d);
                    return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
                },
                set: function(b, c, d) {
                    var e;
                    return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
                }
            }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
        }, a.attrHooks.value = {
            get: function(a, b) {
                var c = (a.nodeName || "").toLowerCase();
                return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
            },
            set: function(a, b) {
                var c = (a.nodeName || "").toLowerCase();
                return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b))
            }
        };
        var o, p, q = a.fn.init,
            r = a.find,
            s = a.parseJSON,
            t = /^\s*</,
            u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        a.fn.init = function(b, e, f) {
            var g, h;
            return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
        }, a.fn.init.prototype = a.fn, a.find = function(a) {
            var b = Array.prototype.slice.call(arguments);
            if ("string" == typeof a && u.test(a)) try {
                document.querySelector(a)
            } catch (c) {
                a = a.replace(v, function(a, b, c, d) {
                    return "[" + b + c + '"' + d + '"]'
                });
                try {
                    document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
                } catch (e) {
                    d("Attribute selector with '#' was not fixed: " + b[0])
                }
            }
            return r.apply(this, b)
        };
        var x;
        for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
        a.parseJSON = function(a) {
            return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
        }, a.uaMatch = function(a) {
            a = a.toLowerCase();
            var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
            return {
                browser: b[1] || "",
                version: b[2] || "0"
            }
        }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function() {
            function b(a, c) {
                return new b.fn.init(a, c)
            }
            a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function(d, e) {
                var f = a.fn.init.call(this, d, e, c);
                return f instanceof b ? f : b(f)
            }, b.fn.init.prototype = b.fn;
            var c = b(document);
            return d("jQuery.sub() is deprecated"), b
        }, a.fn.size = function() {
            return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
        };
        var y = !1;
        a.swap && a.each(["height", "width", "reliableMarginRight"], function(b, c) {
            var d = a.cssHooks[c] && a.cssHooks[c].get;
            d && (a.cssHooks[c].get = function() {
                var a;
                return y = !0, a = d.apply(this, arguments), y = !1, a
            })
        }), a.swap = function(a, b, c, e) {
            var f, g, h = {};
            y || d("jQuery.swap() is undocumented and deprecated");
            for (g in b) h[g] = a.style[g], a.style[g] = b[g];
            f = c.apply(a, e || []);
            for (g in b) a.style[g] = h[g];
            return f
        }, a.ajaxSetup({
            converters: {
                "text json": a.parseJSON
            }
        });
        var z = a.fn.data;
        a.fn.data = function(b) {
            var e, f, g = this[0];
            return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
        };
        var A = /\/(java|ecma)script/i;
        a.clean || (a.clean = function(b, c, e, f) {
            c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
            var g, h, i, j, k = [];
            if (a.merge(k, a.buildFragment(b, c).childNodes), e)
                for (i = function(a) {
                        return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
                    }, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
            return k
        });
        var B = a.event.add,
            C = a.event.remove,
            D = a.event.trigger,
            E = a.fn.toggle,
            F = a.fn.live,
            G = a.fn.die,
            H = a.fn.load,
            I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            J = new RegExp("\\b(?:" + I + ")\\b"),
            K = /(?:^|\s)hover(\.\S+|)\b/,
            L = function(b) {
                return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
            };
        a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function(a, b, c, e, f) {
            a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
        }, a.event.remove = function(a, b, c, d, e) {
            C.call(this, a, L(b) || "", c, d, e)
        }, a.each(["load", "unload", "error"], function(b, c) {
            a.fn[c] = function() {
                var a = Array.prototype.slice.call(arguments, 0);
                return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
            }
        }), a.fn.toggle = function(b, c) {
            if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
            d("jQuery.fn.toggle(handler, handler...) is deprecated");
            var e = arguments,
                f = b.guid || a.guid++,
                g = 0,
                h = function(c) {
                    var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
                    return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
                };
            for (h.guid = f; g < e.length;) e[g++].guid = f;
            return this.click(h)
        }, a.fn.live = function(b, c, e) {
            return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
        }, a.fn.die = function(b, c) {
            return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
        }, a.event.trigger = function(a, b, c, e) {
            return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
        }, a.each(I.split("|"), function(b, c) {
            a.event.special[c] = {
                setup: function() {
                    var b = this;
                    return b !== document && (a.event.add(document, c + "." + a.guid, function() {
                        a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
                    }), a._data(this, c, a.guid++)), !1
                },
                teardown: function() {
                    return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
                }
            }
        }), a.event.special.ready = {
            setup: function() {
                this === document && d("'ready' event is deprecated")
            }
        };
        var M = a.fn.andSelf || a.fn.addBack,
            N = a.fn.find;
        if (a.fn.andSelf = function() {
                return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
            }, a.fn.find = function(a) {
                var b = N.apply(this, arguments);
                return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
            }, a.Callbacks) {
            var O = a.Deferred,
                P = [
                    ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
                ];
            a.Deferred = function(b) {
                var c = O(),
                    e = c.promise();
                return c.pipe = e.pipe = function() {
                    var b = arguments;
                    return d("deferred.pipe() is deprecated"), a.Deferred(function(d) {
                        a.each(P, function(f, g) {
                            var h = a.isFunction(b[f]) && b[f];
                            c[g[1]](function() {
                                var b = h && h.apply(this, arguments);
                                b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
                            })
                        }), b = null
                    }).promise()
                }, c.isResolved = function() {
                    return d("deferred.isResolved is deprecated"), "resolved" === c.state()
                }, c.isRejected = function() {
                    return d("deferred.isRejected is deprecated"), "rejected" === c.state()
                }, b && b.call(c, c), c
            }
        }
    }(jQuery, window);;
(function(a) {
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define(["jquery"], a)
    } else {
        a(jQuery)
    }
}(function(f) {
    var y = "1.6.9",
        p = "left",
        o = "right",
        e = "up",
        x = "down",
        c = "in",
        A = "out",
        m = "none",
        s = "auto",
        l = "swipe",
        t = "pinch",
        B = "tap",
        j = "doubletap",
        b = "longtap",
        z = "hold",
        E = "horizontal",
        u = "vertical",
        i = "all",
        r = 10,
        g = "start",
        k = "move",
        h = "end",
        q = "cancel",
        a = "ontouchstart" in window,
        v = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
        d = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
        C = "TouchSwipe";
    var n = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        hold: null,
        triggerOnTouchEnd: true,
        triggerOnTouchLeave: false,
        allowPageScroll: "auto",
        fallbackToMouseEvents: true,
        excludedElements: "label, button, input, select, textarea, a, .noSwipe",
        preventDefaultEvents: true
    };
    f.fn.swipetp = function(H) {
        var G = f(this),
            F = G.data(C);
        if (F && typeof H === "string") {
            if (F[H]) {
                return F[H].apply(this, Array.prototype.slice.call(arguments, 1))
            } else {
                f.error("Method " + H + " does not exist on jQuery.swipetp")
            }
        } else {
            if (!F && (typeof H === "object" || !H)) {
                return w.apply(this, arguments)
            }
        }
        return G
    };
    f.fn.swipetp.version = y;
    f.fn.swipetp.defaults = n;
    f.fn.swipetp.phases = {
        PHASE_START: g,
        PHASE_MOVE: k,
        PHASE_END: h,
        PHASE_CANCEL: q
    };
    f.fn.swipetp.directions = {
        LEFT: p,
        RIGHT: o,
        UP: e,
        DOWN: x,
        IN: c,
        OUT: A
    };
    f.fn.swipetp.pageScroll = {
        NONE: m,
        HORIZONTAL: E,
        VERTICAL: u,
        AUTO: s
    };
    f.fn.swipetp.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: i
    };

    function w(F) {
        if (F && (F.allowPageScroll === undefined && (F.swipe !== undefined || F.swipeStatus !== undefined))) {
            F.allowPageScroll = m
        }
        if (F.click !== undefined && F.tap === undefined) {
            F.tap = F.click
        }
        if (!F) {
            F = {}
        }
        F = f.extend({}, f.fn.swipetp.defaults, F);
        return this.each(function() {
            var H = f(this);
            var G = H.data(C);
            if (!G) {
                G = new D(this, F);
                H.data(C, G)
            }
        })
    }

    function D(a5, aw) {
        var aA = (a || d || !aw.fallbackToMouseEvents),
            K = aA ? (d ? (v ? "MSPointerDown" : "pointerdown") : "touchstart") : "mousedown",
            az = aA ? (d ? (v ? "MSPointerMove" : "pointermove") : "touchmove") : "mousemove",
            V = aA ? (d ? (v ? "MSPointerUp" : "pointerup") : "touchend") : "mouseup",
            T = aA ? null : "mouseleave",
            aE = (d ? (v ? "MSPointerCancel" : "pointercancel") : "touchcancel");
        var ah = 0,
            aQ = null,
            ac = 0,
            a2 = 0,
            a0 = 0,
            H = 1,
            ar = 0,
            aK = 0,
            N = null;
        var aS = f(a5);
        var aa = "start";
        var X = 0;
        var aR = null;
        var U = 0,
            a3 = 0,
            a6 = 0,
            ae = 0,
            O = 0;
        var aX = null,
            ag = null;
        try {
            aS.bind(K, aO);
            aS.bind(aE, ba)
        } catch (al) {
            f.error("events not supported " + K + "," + aE + " on jQuery.swipetp")
        }
        this.enable = function() {
            aS.bind(K, aO);
            aS.bind(aE, ba);
            return aS
        };
        this.disable = function() {
            aL();
            return aS
        };
        this.destroy = function() {
            aL();
            aS.data(C, null);
            aS = null
        };
        this.option = function(bd, bc) {
            if (aw[bd] !== undefined) {
                if (bc === undefined) {
                    return aw[bd]
                } else {
                    aw[bd] = bc
                }
            } else {
                f.error("Option " + bd + " does not exist on jQuery.swipetp.options")
            }
            return null
        };

        function aO(be) {
            if (aC()) {
                return
            }
            if (f(be.target).closest(aw.excludedElements, aS).length > 0) {
                return
            }
            var bf = be.originalEvent ? be.originalEvent : be;
            var bd, bg = bf.touches,
                bc = bg ? bg[0] : bf;
            aa = g;
            if (bg) {
                X = bg.length
            } else {
                be.preventDefault()
            }
            ah = 0;
            aQ = null;
            aK = null;
            ac = 0;
            a2 = 0;
            a0 = 0;
            H = 1;
            ar = 0;
            aR = ak();
            N = ab();
            S();
            if (!bg || (X === aw.fingers || aw.fingers === i) || aY()) {
                aj(0, bc);
                U = au();
                if (X == 2) {
                    aj(1, bg[1]);
                    a2 = a0 = av(aR[0].start, aR[1].start)
                }
                if (aw.swipeStatus || aw.pinchStatus) {
                    bd = P(bf, aa)
                }
            } else {
                bd = false
            }
            if (bd === false) {
                aa = q;
                P(bf, aa);
                return bd
            } else {
                if (aw.hold) {
                    ag = setTimeout(f.proxy(function() {
                        aS.trigger("hold", [bf.target]);
                        if (aw.hold) {
                            bd = aw.hold.call(aS, bf, bf.target)
                        }
                    }, this), aw.longTapThreshold)
                }
                ap(true)
            }
            return null
        }

        function a4(bf) {
            var bi = bf.originalEvent ? bf.originalEvent : bf;
            if (aa === h || aa === q || an()) {
                return
            }
            var be, bj = bi.touches,
                bd = bj ? bj[0] : bi;
            var bg = aI(bd);
            a3 = au();
            if (bj) {
                X = bj.length
            }
            if (aw.hold) {
                clearTimeout(ag)
            }
            aa = k;
            if (X == 2) {
                if (a2 == 0) {
                    aj(1, bj[1]);
                    a2 = a0 = av(aR[0].start, aR[1].start)
                } else {
                    aI(bj[1]);
                    a0 = av(aR[0].end, aR[1].end);
                    aK = at(aR[0].end, aR[1].end)
                }
                H = a8(a2, a0);
                ar = Math.abs(a2 - a0)
            }
            if ((X === aw.fingers || aw.fingers === i) || !bj || aY()) {
                aQ = aM(bg.start, bg.end);
                am(bf, aQ);
                ah = aT(bg.start, bg.end);
                ac = aN();
                aJ(aQ, ah);
                if (aw.swipeStatus || aw.pinchStatus) {
                    be = P(bi, aa)
                }
                if (!aw.triggerOnTouchEnd || aw.triggerOnTouchLeave) {
                    var bc = true;
                    if (aw.triggerOnTouchLeave) {
                        var bh = aZ(this);
                        bc = F(bg.end, bh)
                    }
                    if (!aw.triggerOnTouchEnd && bc) {
                        aa = aD(k)
                    } else {
                        if (aw.triggerOnTouchLeave && !bc) {
                            aa = aD(h)
                        }
                    }
                    if (aa == q || aa == h) {
                        P(bi, aa)
                    }
                }
            } else {
                aa = q;
                P(bi, aa)
            }
            if (be === false) {
                aa = q;
                P(bi, aa)
            }
        }

        function M(bc) {
            var bd = bc.originalEvent ? bc.originalEvent : bc,
                be = bd.touches;
            if (be) {
                if (be.length) {
                    G();
                    return true
                }
            }
            if (an()) {
                X = ae
            }
            a3 = au();
            ac = aN();
            if (bb() || !ao()) {
                aa = q;
                P(bd, aa)
            } else {
                if (aw.triggerOnTouchEnd || (aw.triggerOnTouchEnd == false && aa === k)) {
                    bc.preventDefault();
                    aa = h;
                    P(bd, aa)
                } else {
                    if (!aw.triggerOnTouchEnd && a7()) {
                        aa = h;
                        aG(bd, aa, B)
                    } else {
                        if (aa === k) {
                            aa = q;
                            P(bd, aa)
                        }
                    }
                }
            }
            ap(false);
            return null
        }

        function ba() {
            X = 0;
            a3 = 0;
            U = 0;
            a2 = 0;
            a0 = 0;
            H = 1;
            S();
            ap(false)
        }

        function L(bc) {
            var bd = bc.originalEvent ? bc.originalEvent : bc;
            if (aw.triggerOnTouchLeave) {
                aa = aD(h);
                P(bd, aa)
            }
        }

        function aL() {
            aS.unbind(K, aO);
            aS.unbind(aE, ba);
            aS.unbind(az, a4);
            aS.unbind(V, M);
            if (T) {
                aS.unbind(T, L)
            }
            ap(false)
        }

        function aD(bg) {
            var bf = bg;
            var be = aB();
            var bd = ao();
            var bc = bb();
            if (!be || bc) {
                bf = q
            } else {
                if (bd && bg == k && (!aw.triggerOnTouchEnd || aw.triggerOnTouchLeave)) {
                    bf = h
                } else {
                    if (!bd && bg == h && aw.triggerOnTouchLeave) {
                        bf = q
                    }
                }
            }
            return bf
        }

        function P(be, bc) {
            var bd, bf = be.touches;
            if ((J() || W()) || (Q() || aY())) {
                if (J() || W()) {
                    bd = aG(be, bc, l)
                }
                if ((Q() || aY()) && bd !== false) {
                    bd = aG(be, bc, t)
                }
            } else {
                if (aH() && bd !== false) {
                    bd = aG(be, bc, j)
                } else {
                    if (aq() && bd !== false) {
                        bd = aG(be, bc, b)
                    } else {
                        if (ai() && bd !== false) {
                            bd = aG(be, bc, B)
                        }
                    }
                }
            }
            if (bc === q) {
                ba(be)
            }
            if (bc === h) {
                if (bf) {
                    if (!bf.length) {
                        ba(be)
                    }
                } else {
                    ba(be)
                }
            }
            return bd
        }

        function aG(bf, bc, be) {
            var bd;
            if (be == l) {
                aS.trigger("swipeStatus", [bc, aQ || null, ah || 0, ac || 0, X, aR]);
                if (aw.swipeStatus) {
                    bd = aw.swipeStatus.call(aS, bf, bc, aQ || null, ah || 0, ac || 0, X, aR);
                    if (bd === false) {
                        return false
                    }
                }
                if (bc == h && aW()) {
                    aS.trigger("swipe", [aQ, ah, ac, X, aR]);
                    if (aw.swipe) {
                        bd = aw.swipe.call(aS, bf, aQ, ah, ac, X, aR);
                        if (bd === false) {
                            return false
                        }
                    }
                    switch (aQ) {
                        case p:
                            aS.trigger("swipeLeft", [aQ, ah, ac, X, aR]);
                            if (aw.swipeLeft) {
                                bd = aw.swipeLeft.call(aS, bf, aQ, ah, ac, X, aR)
                            }
                            break;
                        case o:
                            aS.trigger("swipeRight", [aQ, ah, ac, X, aR]);
                            if (aw.swipeRight) {
                                bd = aw.swipeRight.call(aS, bf, aQ, ah, ac, X, aR)
                            }
                            break;
                        case e:
                            aS.trigger("swipeUp", [aQ, ah, ac, X, aR]);
                            if (aw.swipeUp) {
                                bd = aw.swipeUp.call(aS, bf, aQ, ah, ac, X, aR)
                            }
                            break;
                        case x:
                            aS.trigger("swipeDown", [aQ, ah, ac, X, aR]);
                            if (aw.swipeDown) {
                                bd = aw.swipeDown.call(aS, bf, aQ, ah, ac, X, aR)
                            }
                            break
                    }
                }
            }
            if (be == t) {
                aS.trigger("pinchStatus", [bc, aK || null, ar || 0, ac || 0, X, H, aR]);
                if (aw.pinchStatus) {
                    bd = aw.pinchStatus.call(aS, bf, bc, aK || null, ar || 0, ac || 0, X, H, aR);
                    if (bd === false) {
                        return false
                    }
                }
                if (bc == h && a9()) {
                    switch (aK) {
                        case c:
                            aS.trigger("pinchIn", [aK || null, ar || 0, ac || 0, X, H, aR]);
                            if (aw.pinchIn) {
                                bd = aw.pinchIn.call(aS, bf, aK || null, ar || 0, ac || 0, X, H, aR)
                            }
                            break;
                        case A:
                            aS.trigger("pinchOut", [aK || null, ar || 0, ac || 0, X, H, aR]);
                            if (aw.pinchOut) {
                                bd = aw.pinchOut.call(aS, bf, aK || null, ar || 0, ac || 0, X, H, aR)
                            }
                            break
                    }
                }
            }
            if (be == B) {
                if (bc === q || bc === h) {
                    clearTimeout(aX);
                    clearTimeout(ag);
                    if (Z() && !I()) {
                        O = au();
                        aX = setTimeout(f.proxy(function() {
                            O = null;
                            aS.trigger("tap", [bf.target]);
                            if (aw.tap) {
                                bd = aw.tap.call(aS, bf, bf.target)
                            }
                        }, this), aw.doubleTapThreshold)
                    } else {
                        O = null;
                        aS.trigger("tap", [bf.target]);
                        if (aw.tap) {
                            bd = aw.tap.call(aS, bf, bf.target)
                        }
                    }
                }
            } else {
                if (be == j) {
                    if (bc === q || bc === h) {
                        clearTimeout(aX);
                        O = null;
                        aS.trigger("doubletap", [bf.target]);
                        if (aw.doubleTap) {
                            bd = aw.doubleTap.call(aS, bf, bf.target)
                        }
                    }
                } else {
                    if (be == b) {
                        if (bc === q || bc === h) {
                            clearTimeout(aX);
                            O = null;
                            aS.trigger("longtap", [bf.target]);
                            if (aw.longTap) {
                                bd = aw.longTap.call(aS, bf, bf.target)
                            }
                        }
                    }
                }
            }
            return bd
        }

        function ao() {
            var bc = true;
            if (aw.threshold !== null) {
                bc = ah >= aw.threshold
            }
            return bc
        }

        function bb() {
            var bc = false;
            if (aw.cancelThreshold !== null && aQ !== null) {
                bc = (aU(aQ) - ah) >= aw.cancelThreshold
            }
            return bc
        }

        function af() {
            if (aw.pinchThreshold !== null) {
                return ar >= aw.pinchThreshold
            }
            return true
        }

        function aB() {
            var bc;
            if (aw.maxTimeThreshold) {
                if (ac >= aw.maxTimeThreshold) {
                    bc = false
                } else {
                    bc = true
                }
            } else {
                bc = true
            }
            return bc
        }

        function am(bc, bd) {
            if (aw.preventDefaultEvents === false) {
                return
            }
            if (aw.allowPageScroll === m) {
                bc.preventDefault()
            } else {
                var be = aw.allowPageScroll === s;
                switch (bd) {
                    case p:
                        if ((aw.swipeLeft && be) || (!be && aw.allowPageScroll != E)) {
                            bc.preventDefault()
                        }
                        break;
                    case o:
                        if ((aw.swipeRight && be) || (!be && aw.allowPageScroll != E)) {
                            bc.preventDefault()
                        }
                        break;
                    case e:
                        if ((aw.swipeUp && be) || (!be && aw.allowPageScroll != u)) {
                            bc.preventDefault()
                        }
                        break;
                    case x:
                        if ((aw.swipeDown && be) || (!be && aw.allowPageScroll != u)) {
                            bc.preventDefault()
                        }
                        break
                }
            }
        }

        function a9() {
            var bd = aP();
            var bc = Y();
            var be = af();
            return bd && bc && be
        }

        function aY() {
            return !!(aw.pinchStatus || aw.pinchIn || aw.pinchOut)
        }

        function Q() {
            return !!(a9() && aY())
        }

        function aW() {
            var bf = aB();
            var bh = ao();
            var be = aP();
            var bc = Y();
            var bd = bb();
            var bg = !bd && bc && be && bh && bf;
            return bg
        }

        function W() {
            return !!(aw.swipe || aw.swipeStatus || aw.swipeLeft || aw.swipeRight || aw.swipeUp || aw.swipeDown)
        }

        function J() {
            return !!(aW() && W())
        }

        function aP() {
            return ((X === aw.fingers || aw.fingers === i) || !a)
        }

        function Y() {
            return aR[0].end.x !== 0
        }

        function a7() {
            return !!(aw.tap)
        }

        function Z() {
            return !!(aw.doubleTap)
        }

        function aV() {
            return !!(aw.longTap)
        }

        function R() {
            if (O == null) {
                return false
            }
            var bc = au();
            return (Z() && ((bc - O) <= aw.doubleTapThreshold))
        }

        function I() {
            return R()
        }

        function ay() {
            return ((X === 1 || !a) && (isNaN(ah) || ah < aw.threshold))
        }

        function a1() {
            return ((ac > aw.longTapThreshold) && (ah < r))
        }

        function ai() {
            return !!(ay() && a7())
        }

        function aH() {
            return !!(R() && Z())
        }

        function aq() {
            return !!(a1() && aV())
        }

        function G() {
            a6 = au();
            ae = event.touches.length + 1
        }

        function S() {
            a6 = 0;
            ae = 0
        }

        function an() {
            var bc = false;
            if (a6) {
                var bd = au() - a6;
                if (bd <= aw.fingerReleaseThreshold) {
                    bc = true
                }
            }
            return bc
        }

        function aC() {
            return !!(aS.data(C + "_intouch") === true)
        }

        function ap(bc) {
            if (bc === true) {
                aS.bind(az, a4);
                aS.bind(V, M);
                if (T) {
                    aS.bind(T, L)
                }
            } else {
                aS.unbind(az, a4, false);
                aS.unbind(V, M, false);
                if (T) {
                    aS.unbind(T, L, false)
                }
            }
            aS.data(C + "_intouch", bc === true)
        }

        function aj(bd, bc) {
            var be = bc.identifier !== undefined ? bc.identifier : 0;
            aR[bd].identifier = be;
            aR[bd].start.x = aR[bd].end.x = bc.pageX || bc.clientX;
            aR[bd].start.y = aR[bd].end.y = bc.pageY || bc.clientY;
            return aR[bd]
        }

        function aI(bc) {
            var be = bc.identifier !== undefined ? bc.identifier : 0;
            var bd = ad(be);
            bd.end.x = bc.pageX || bc.clientX;
            bd.end.y = bc.pageY || bc.clientY;
            return bd
        }

        function ad(bd) {
            for (var bc = 0; bc < aR.length; bc++) {
                if (aR[bc].identifier == bd) {
                    return aR[bc]
                }
            }
        }

        function ak() {
            var bc = [];
            for (var bd = 0; bd <= 5; bd++) {
                bc.push({
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    },
                    identifier: 0
                })
            }
            return bc
        }

        function aJ(bc, bd) {
            bd = Math.max(bd, aU(bc));
            N[bc].distance = bd
        }

        function aU(bc) {
            if (N[bc]) {
                return N[bc].distance
            }
            return undefined
        }

        function ab() {
            var bc = {};
            bc[p] = ax(p);
            bc[o] = ax(o);
            bc[e] = ax(e);
            bc[x] = ax(x);
            return bc
        }

        function ax(bc) {
            return {
                direction: bc,
                distance: 0
            }
        }

        function aN() {
            return a3 - U
        }

        function av(bf, be) {
            var bd = Math.abs(bf.x - be.x);
            var bc = Math.abs(bf.y - be.y);
            return Math.round(Math.sqrt(bd * bd + bc * bc))
        }

        function a8(bc, bd) {
            var be = (bd / bc) * 1;
            return be.toFixed(2)
        }

        function at() {
            if (H < 1) {
                return A
            } else {
                return c
            }
        }

        function aT(bd, bc) {
            return Math.round(Math.sqrt(Math.pow(bc.x - bd.x, 2) + Math.pow(bc.y - bd.y, 2)))
        }

        function aF(bf, bd) {
            var bc = bf.x - bd.x;
            var bh = bd.y - bf.y;
            var be = Math.atan2(bh, bc);
            var bg = Math.round(be * 180 / Math.PI);
            if (bg < 0) {
                bg = 360 - Math.abs(bg)
            }
            return bg
        }

        function aM(bd, bc) {
            var be = aF(bd, bc);
            if ((be <= 45) && (be >= 0)) {
                return p
            } else {
                if ((be <= 360) && (be >= 315)) {
                    return p
                } else {
                    if ((be >= 135) && (be <= 225)) {
                        return o
                    } else {
                        if ((be > 45) && (be < 135)) {
                            return x
                        } else {
                            return e
                        }
                    }
                }
            }
        }

        function au() {
            var bc = new Date();
            return bc.getTime()
        }

        function aZ(bc) {
            bc = f(bc);
            var be = bc.offset();
            var bd = {
                left: be.left,
                right: be.left + bc.outerWidth(),
                top: be.top,
                bottom: be.top + bc.outerHeight()
            };
            return bd
        }

        function F(bc, bd) {
            return (bc.x > bd.left && bc.x < bd.right && bc.y > bd.top && bc.y < bd.bottom)
        }
    }
}));
if (typeof(console) === 'undefined') {
    var console = {};
    console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function() {};
}
if (window.tplogs == true)
    try {
        console.groupCollapsed("ThemePunch GreenSocks Logs");
    } catch (e) {}
var oldgs = window.GreenSockGlobals,
    oldgs_queue = window._gsQueue;
var punchgs = window.GreenSockGlobals = {};
if (window.tplogs == true)
    try {
        console.info("Build GreenSock SandBox for ThemePunch Plugins");
        console.info("GreenSock TweenLite Engine Initalised by ThemePunch Plugin");
    } catch (e) {}
    */
    /*!
     * VERSION: 1.19.0
     * DATE: 2016-07-16
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     */
    ! function(a, b) {
        "use strict";
        var c = {},
            d = a.GreenSockGlobals = a.GreenSockGlobals || a;
        if (!d.TweenLite) {
            var e, f, g, h, i, j = function(a) {
                    var b, c = a.split("."),
                        e = d;
                    for (b = 0; b < c.length; b++) e[c[b]] = e = e[c[b]] || {};
                    return e
                },
                k = j("com.greensock"),
                l = 1e-10,
                m = function(a) {
                    var b, c = [],
                        d = a.length;
                    for (b = 0; b !== d; c.push(a[b++]));
                    return c
                },
                n = function() {},
                o = function() {
                    var a = Object.prototype.toString,
                        b = a.call([]);
                    return function(c) {
                        return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b)
                    }
                }(),
                p = {},
                q = function(e, f, g, h) {
                    this.sc = p[e] ? p[e].sc : [], p[e] = this, this.gsClass = null, this.func = g;
                    var i = [];
                    this.check = function(k) {
                        for (var l, m, n, o, r, s = f.length, t = s; --s > -1;)(l = p[f[s]] || new q(f[s], [])).gsClass ? (i[s] = l.gsClass, t--) : k && l.sc.push(this);
                        if (0 === t && g) {
                            if (m = ("com.greensock." + e).split("."), n = m.pop(), o = j(m.join("."))[n] = this.gsClass = g.apply(g, i), h)
                                if (d[n] = c[n] = o, r = "undefined" != typeof module && module.exports, !r && "function" == typeof define && define.amd) define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + e.split(".").pop(), [], function() {
                                    return o
                                });
                                else if (r)
                                if (e === b) {
                                    module.exports = c[b] = o;
                                    for (s in c) o[s] = c[s]
                                } else c[b] && (c[b][n] = o);
                            for (s = 0; s < this.sc.length; s++) this.sc[s].check()
                        }
                    }, this.check(!0)
                },
                r = a._gsDefine = function(a, b, c, d) {
                    return new q(a, b, c, d)
                },
                s = k._class = function(a, b, c) {
                    return b = b || function() {}, r(a, [], function() {
                        return b
                    }, c), b
                };
            r.globals = d;
            var t = [0, 0, 1, 1],
                u = s("easing.Ease", function(a, b, c, d) {
                    this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? t.concat(b) : t
                }, !0),
                v = u.map = {},
                w = u.register = function(a, b, c, d) {
                    for (var e, f, g, h, i = b.split(","), j = i.length, l = (c || "easeIn,easeOut,easeInOut").split(","); --j > -1;)
                        for (f = i[j], e = d ? s("easing." + f, null, !0) : k.easing[f] || {}, g = l.length; --g > -1;) h = l[g], v[f + "." + h] = v[h + f] = e[h] = a.getRatio ? a : a[h] || new a
                };
            for (g = u.prototype, g._calcEnd = !1, g.getRatio = function(a) {
                    if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
                    var b = this._type,
                        c = this._power,
                        d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
                    return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
                }, e = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], f = e.length; --f > -1;) g = e[f] + ",Power" + f, w(new u(null, null, 1, f), g, "easeOut", !0), w(new u(null, null, 2, f), g, "easeIn" + (0 === f ? ",easeNone" : "")), w(new u(null, null, 3, f), g, "easeInOut");
            v.linear = k.easing.Linear.easeIn, v.swing = k.easing.Quad.easeInOut;
            var x = s("events.EventDispatcher", function(a) {
                this._listeners = {}, this._eventTarget = a || this
            });
            g = x.prototype, g.addEventListener = function(a, b, c, d, e) {
                e = e || 0;
                var f, g, j = this._listeners[a],
                    k = 0;
                for (this !== h || i || h.wake(), null == j && (this._listeners[a] = j = []), g = j.length; --g > -1;) f = j[g], f.c === b && f.s === c ? j.splice(g, 1) : 0 === k && f.pr < e && (k = g + 1);
                j.splice(k, 0, {
                    c: b,
                    s: c,
                    up: d,
                    pr: e
                })
            }, g.removeEventListener = function(a, b) {
                var c, d = this._listeners[a];
                if (d)
                    for (c = d.length; --c > -1;)
                        if (d[c].c === b) return void d.splice(c, 1)
            }, g.dispatchEvent = function(a) {
                var b, c, d, e = this._listeners[a];
                if (e)
                    for (b = e.length, b > 1 && (e = e.slice(0)), c = this._eventTarget; --b > -1;) d = e[b], d && (d.up ? d.c.call(d.s || c, {
                        type: a,
                        target: c
                    }) : d.c.call(d.s || c))
            };
            var y = a.requestAnimationFrame,
                z = a.cancelAnimationFrame,
                A = Date.now || function() {
                    return (new Date).getTime()
                },
                B = A();
            for (e = ["ms", "moz", "webkit", "o"], f = e.length; --f > -1 && !y;) y = a[e[f] + "RequestAnimationFrame"], z = a[e[f] + "CancelAnimationFrame"] || a[e[f] + "CancelRequestAnimationFrame"];
            s("Ticker", function(a, b) {
                var c, d, e, f, g, j = this,
                    k = A(),
                    m = b !== !1 && y ? "auto" : !1,
                    o = 500,
                    p = 33,
                    q = "tick",
                    r = function(a) {
                        var b, h, i = A() - B;
                        i > o && (k += i - p), B += i, j.time = (B - k) / 1e3, b = j.time - g, (!c || b > 0 || a === !0) && (j.frame++, g += b + (b >= f ? .004 : f - b), h = !0), a !== !0 && (e = d(r)), h && j.dispatchEvent(q)
                    };
                x.call(j), j.time = j.frame = 0, j.tick = function() {
                    r(!0)
                }, j.lagSmoothing = function(a, b) {
                    o = a || 1 / l, p = Math.min(b, o, 0)
                }, j.sleep = function() {
                    null != e && (m && z ? z(e) : clearTimeout(e), d = n, e = null, j === h && (i = !1))
                }, j.wake = function(a) {
                    null !== e ? j.sleep() : a ? k += -B + (B = A()) : j.frame > 10 && (B = A() - o + 5), d = 0 === c ? n : m && y ? y : function(a) {
                        return setTimeout(a, 1e3 * (g - j.time) + 1 | 0)
                    }, j === h && (i = !0), r(2)
                }, j.fps = function(a) {
                    return arguments.length ? (c = a, f = 1 / (c || 60), g = this.time + f, void j.wake()) : c
                }, j.useRAF = function(a) {
                    return arguments.length ? (j.sleep(), m = a, void j.fps(c)) : m
                }, j.fps(a), setTimeout(function() {
                    "auto" === m && j.frame < 5 && "hidden" !== document.visibilityState && j.useRAF(!1)
                }, 1500)
            }), g = k.Ticker.prototype = new k.events.EventDispatcher, g.constructor = k.Ticker;
            var C = s("core.Animation", function(a, b) {
                if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = b.immediateRender === !0, this.data = b.data, this._reversed = b.reversed === !0, V) {
                    i || h.wake();
                    var c = this.vars.useFrames ? U : V;
                    c.add(this, c._time), this.vars.paused && this.paused(!0)
                }
            });
            h = C.ticker = new k.Ticker, g = C.prototype, g._dirty = g._gc = g._initted = g._paused = !1, g._totalTime = g._time = 0, g._rawPrevTime = -1, g._next = g._last = g._onUpdate = g._timeline = g.timeline = null, g._paused = !1;
            var D = function() {
                i && A() - B > 2e3 && h.wake(), setTimeout(D, 2e3)
            };
            D(), g.play = function(a, b) {
                return null != a && this.seek(a, b), this.reversed(!1).paused(!1)
            }, g.pause = function(a, b) {
                return null != a && this.seek(a, b), this.paused(!0)
            }, g.resume = function(a, b) {
                return null != a && this.seek(a, b), this.paused(!1)
            }, g.seek = function(a, b) {
                return this.totalTime(Number(a), b !== !1)
            }, g.restart = function(a, b) {
                return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0)
            }, g.reverse = function(a, b) {
                return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
            }, g.render = function(a, b, c) {}, g.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, g.isActive = function() {
                var a, b = this._timeline,
                    c = this._startTime;
                return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime()) >= c && a < c + this.totalDuration() / this._timeScale
            }, g._enabled = function(a, b) {
                return i || h.wake(), this._gc = !a, this._active = this.isActive(), b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
            }, g._kill = function(a, b) {
                return this._enabled(!1, !1)
            }, g.kill = function(a, b) {
                return this._kill(a, b), this
            }, g._uncache = function(a) {
                for (var b = a ? this : this.timeline; b;) b._dirty = !0, b = b.timeline;
                return this
            }, g._swapSelfInParams = function(a) {
                for (var b = a.length, c = a.concat(); --b > -1;) "{self}" === a[b] && (c[b] = this);
                return c
            }, g._callback = function(a) {
                var b = this.vars,
                    c = b[a],
                    d = b[a + "Params"],
                    e = b[a + "Scope"] || b.callbackScope || this,
                    f = d ? d.length : 0;
                switch (f) {
                    case 0:
                        c.call(e);
                        break;
                    case 1:
                        c.call(e, d[0]);
                        break;
                    case 2:
                        c.call(e, d[0], d[1]);
                        break;
                    default:
                        c.apply(e, d)
                }
            }, g.eventCallback = function(a, b, c, d) {
                if ("on" === (a || "").substr(0, 2)) {
                    var e = this.vars;
                    if (1 === arguments.length) return e[a];
                    null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = o(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b)
                }
                return this
            }, g.delay = function(a) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
            }, g.duration = function(a) {
                return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, g.totalDuration = function(a) {
                return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
            }, g.time = function(a, b) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
            }, g.totalTime = function(a, b, c) {
                if (i || h.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var d = this._totalDuration,
                            e = this._timeline;
                        if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline)
                            for (; e._timeline;) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (I.length && X(), this.render(a, b, !1), I.length && X())
                }
                return this
            }, g.progress = g.totalProgress = function(a, b) {
                var c = this.duration();
                return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio
            }, g.startTime = function(a) {
                return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
            }, g.endTime = function(a) {
                return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
            }, g.timeScale = function(a) {
                if (!arguments.length) return this._timeScale;
                if (a = a || l, this._timeline && this._timeline.smoothChildTiming) {
                    var b = this._pauseTime,
                        c = b || 0 === b ? b : this._timeline.totalTime();
                    this._startTime = c - (c - this._startTime) * this._timeScale / a
                }
                return this._timeScale = a, this._uncache(!1)
            }, g.reversed = function(a) {
                return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, g.paused = function(a) {
                if (!arguments.length) return this._paused;
                var b, c, d = this._timeline;
                return a != this._paused && d && (i || a || h.wake(), b = d.rawTime(), c = b - this._pauseTime, !a && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this
            };
            var E = s("core.SimpleTimeline", function(a) {
                C.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            g = E.prototype = new C, g.constructor = E, g.kill()._gc = !1, g._first = g._last = g._recent = null, g._sortChildren = !1, g.add = g.insert = function(a, b, c, d) {
                var e, f;
                if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), e = this._last, this._sortChildren)
                    for (f = a._startTime; e && e._startTime > f;) e = e._prev;
                return e ? (a._next = e._next, e._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = e, this._recent = a, this._timeline && this._uncache(!0), this
            }, g._remove = function(a, b) {
                return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, g.render = function(a, b, c) {
                var d, e = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = a; e;) d = e._next, (e._active || a >= e._startTime && !e._paused) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d
            }, g.rawTime = function() {
                return i || h.wake(), this._totalTime
            };
            var F = s("TweenLite", function(b, c, d) {
                    if (C.call(this, c, d), this.render = F.prototype.render, null == b) throw "Cannot tween a null target.";
                    this.target = b = "string" != typeof b ? b : F.selector(b) || b;
                    var e, f, g, h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType),
                        i = this.vars.overwrite;
                    if (this._overwrite = i = null == i ? T[F.defaultOverwrite] : "number" == typeof i ? i >> 0 : T[i], (h || b instanceof Array || b.push && o(b)) && "number" != typeof b[0])
                        for (this._targets = g = m(b), this._propLookup = [], this._siblings = [], e = 0; e < g.length; e++) f = g[e], f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(m(f))) : (this._siblings[e] = Y(f, this, !1), 1 === i && this._siblings[e].length > 1 && $(f, this, null, 1, this._siblings[e])) : (f = g[e--] = F.selector(f), "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);
                    else this._propLookup = {}, this._siblings = Y(b, this, !1), 1 === i && this._siblings.length > 1 && $(b, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -l, this.render(Math.min(0, -this._delay)))
                }, !0),
                G = function(b) {
                    return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType)
                },
                H = function(a, b) {
                    var c, d = {};
                    for (c in a) S[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!P[c] || P[c] && P[c]._autoCSS) || (d[c] = a[c], delete a[c]);
                    a.css = d
                };
            g = F.prototype = new C, g.constructor = F, g.kill()._gc = !1, g.ratio = 0, g._firstPT = g._targets = g._overwrittenProps = g._startAt = null, g._notifyPluginsOfEnabled = g._lazy = !1, F.version = "1.19.0", F.defaultEase = g._ease = new u(null, null, 1, 1), F.defaultOverwrite = "auto", F.ticker = h, F.autoSleep = 120, F.lagSmoothing = function(a, b) {
                h.lagSmoothing(a, b)
            }, F.selector = a.$ || a.jQuery || function(b) {
                var c = a.$ || a.jQuery;
                return c ? (F.selector = c, c(b)) : "undefined" == typeof document ? b : document.querySelectorAll ? document.querySelectorAll(b) : document.getElementById("#" === b.charAt(0) ? b.substr(1) : b)
            };
            var I = [],
                J = {},
                K = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                L = function(a) {
                    for (var b, c = this._firstPT, d = 1e-6; c;) b = c.blob ? a ? this.join("") : this.start : c.c * a + c.s, c.m ? b = c.m(b, this._target || c.t) : d > b && b > -d && (b = 0), c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b, c = c._next
                },
                M = function(a, b, c, d) {
                    var e, f, g, h, i, j, k, l = [a, b],
                        m = 0,
                        n = "",
                        o = 0;
                    for (l.start = a, c && (c(l), a = l[0], b = l[1]), l.length = 0, e = a.match(K) || [], f = b.match(K) || [], d && (d._next = null, d.blob = 1, l._firstPT = l._applyPT = d), i = f.length, h = 0; i > h; h++) k = f[h], j = b.substr(m, b.indexOf(k, m) - m), n += j || !h ? j : ",", m += j.length, o ? o = (o + 1) % 5 : "rgba(" === j.substr(-5) && (o = 1), k === e[h] || e.length <= h ? n += k : (n && (l.push(n), n = ""), g = parseFloat(e[h]), l.push(g), l._firstPT = {
                        _next: l._firstPT,
                        t: l,
                        p: l.length - 1,
                        s: g,
                        c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0,
                        f: 0,
                        m: o && 4 > o ? Math.round : 0
                    }), m += k.length;
                    return n += b.substr(m), n && l.push(n), l.setRatio = L, l
                },
                N = function(a, b, c, d, e, f, g, h, i) {
                    "function" == typeof d && (d = d(i || 0, a));
                    var j, k, l = "get" === c ? a[b] : c,
                        m = typeof a[b],
                        n = "string" == typeof d && "=" === d.charAt(1),
                        o = {
                            t: a,
                            p: b,
                            s: l,
                            f: "function" === m,
                            pg: 0,
                            n: e || b,
                            m: f ? "function" == typeof f ? f : Math.round : 0,
                            pr: 0,
                            c: n ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - l || 0
                        };
                    return "number" !== m && ("function" === m && "get" === c && (k = b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3), o.s = l = g ? a[k](g) : a[k]()), "string" == typeof l && (g || isNaN(l)) ? (o.fp = g, j = M(l, d, h || F.defaultStringFilter, o), o = {
                        t: j,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: e || b,
                        pr: 0,
                        m: 0
                    }) : n || (o.s = parseFloat(l), o.c = parseFloat(d) - o.s || 0)), o.c ? ((o._next = this._firstPT) && (o._next._prev = o), this._firstPT = o, o) : void 0
                },
                O = F._internals = {
                    isArray: o,
                    isSelector: G,
                    lazyTweens: I,
                    blobDif: M
                },
                P = F._plugins = {},
                Q = O.tweenLookup = {},
                R = 0,
                S = O.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1,
                    id: 1
                },
                T = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                U = C._rootFramesTimeline = new E,
                V = C._rootTimeline = new E,
                W = 30,
                X = O.lazyRender = function() {
                    var a, b = I.length;
                    for (J = {}; --b > -1;) a = I[b], a && a._lazy !== !1 && (a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1);
                    I.length = 0
                };
            V._startTime = h.time, U._startTime = h.frame, V._active = U._active = !0, setTimeout(X, 1), C._updateRoot = F.render = function() {
                var a, b, c;
                if (I.length && X(), V.render((h.time - V._startTime) * V._timeScale, !1, !1), U.render((h.frame - U._startTime) * U._timeScale, !1, !1), I.length && X(), h.frame >= W) {
                    W = h.frame + (parseInt(F.autoSleep, 10) || 120);
                    for (c in Q) {
                        for (b = Q[c].tweens, a = b.length; --a > -1;) b[a]._gc && b.splice(a, 1);
                        0 === b.length && delete Q[c]
                    }
                    if (c = V._first, (!c || c._paused) && F.autoSleep && !U._first && 1 === h._listeners.tick.length) {
                        for (; c && c._paused;) c = c._next;
                        c || h.sleep()
                    }
                }
            }, h.addEventListener("tick", C._updateRoot);
            var Y = function(a, b, c) {
                    var d, e, f = a._gsTweenID;
                    if (Q[f || (a._gsTweenID = f = "t" + R++)] || (Q[f] = {
                            target: a,
                            tweens: []
                        }), b && (d = Q[f].tweens, d[e = d.length] = b, c))
                        for (; --e > -1;) d[e] === b && d.splice(e, 1);
                    return Q[f].tweens
                },
                Z = function(a, b, c, d) {
                    var e, f, g = a.vars.onOverwrite;
                    return g && (e = g(a, b, c, d)), g = F.onOverwrite, g && (f = g(a, b, c, d)), e !== !1 && f !== !1
                },
                $ = function(a, b, c, d, e) {
                    var f, g, h, i;
                    if (1 === d || d >= 4) {
                        for (i = e.length, f = 0; i > f; f++)
                            if ((h = e[f]) !== b) h._gc || h._kill(null, a, b) && (g = !0);
                            else if (5 === d) break;
                        return g
                    }
                    var j, k = b._startTime + l,
                        m = [],
                        n = 0,
                        o = 0 === b._duration;
                    for (f = e.length; --f > -1;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || _(b, 0, o), 0 === _(h, j, o) && (m[n++] = h)) : h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale > k && ((o || !h._initted) && k - h._startTime <= 2e-10 || (m[n++] = h)));
                    for (f = n; --f > -1;)
                        if (h = m[f], 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || !h._firstPT && h._initted) {
                            if (2 !== d && !Z(h, b)) continue;
                            h._enabled(!1, !1) && (g = !0)
                        }
                    return g
                },
                _ = function(a, b, c) {
                    for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
                        if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
                        d = d._timeline
                    }
                    return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * l > f - b ? l : (f += a.totalDuration() / a._timeScale / e) > b + l ? 0 : f - b - l
                };
            g._init = function() {
                var a, b, c, d, e, f, g = this.vars,
                    h = this._overwrittenProps,
                    i = this._duration,
                    j = !!g.immediateRender,
                    k = g.ease;
                if (g.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), e = {};
                    for (d in g.startAt) e[d] = g.startAt[d];
                    if (e.overwrite = !1, e.immediateRender = !0, e.lazy = j && g.lazy !== !1, e.startAt = e.delay = null, this._startAt = F.to(this.target, 0, e), j)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== i) return
                } else if (g.runBackwards && 0 !== i)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (j = !1), c = {};
                        for (d in g) S[d] && "autoCSS" !== d || (c[d] = g[d]);
                        if (c.overwrite = 0, c.data = "isFromStart", c.lazy = j && g.lazy !== !1, c.immediateRender = j, this._startAt = F.to(this.target, 0, c), j) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = k = k ? k instanceof u ? k : "function" == typeof k ? new u(k, g.easeParams) : v[k] || F.defaultEase : F.defaultEase, g.easeParams instanceof Array && k.config && (this._ease = k.config.apply(k, g.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (f = this._targets.length, a = 0; f > a; a++) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], h ? h[a] : null, a) && (b = !0);
                else b = this._initProps(this.target, this._propLookup, this._siblings, h, 0);
                if (b && F._onPluginEvent("_onInitAllProps", this), h && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), g.runBackwards)
                    for (c = this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;
                this._onUpdate = g.onUpdate, this._initted = !0
            }, g._initProps = function(b, c, d, e, f) {
                var g, h, i, j, k, l;
                if (null == b) return !1;
                J[b._gsTweenID] && X(), this.vars.css || b.style && b !== a && b.nodeType && P.css && this.vars.autoCSS !== !1 && H(this.vars, b);
                for (g in this.vars)
                    if (l = this.vars[g], S[g]) l && (l instanceof Array || l.push && o(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = l = this._swapSelfInParams(l, this));
                    else if (P[g] && (j = new P[g])._onInitTween(b, this.vars[g], this, f)) {
                    for (this._firstPT = k = {
                            _next: this._firstPT,
                            t: j,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: g,
                            pg: 1,
                            pr: j._priority,
                            m: 0
                        }, h = j._overwriteProps.length; --h > -1;) c[j._overwriteProps[h]] = this._firstPT;
                    (j._priority || j._onInitAllProps) && (i = !0), (j._onDisable || j._onEnable) && (this._notifyPluginsOfEnabled = !0), k._next && (k._next._prev = k)
                } else c[g] = N.call(this, b, g, "get", l, g, 0, null, this.vars.stringFilter, f);
                return e && this._kill(e, b) ? this._initProps(b, c, d, e, f) : this._overwrite > 1 && this._firstPT && d.length > 1 && $(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e, f)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (J[b._gsTweenID] = !0), i)
            }, g.render = function(a, b, c) {
                var d, e, f, g, h = this._time,
                    i = this._duration,
                    j = this._rawPrevTime;
                if (a >= i - 1e-7) this._totalTime = this._time = i, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 > j || 0 >= a && a >= -1e-7 || j === l && "isPause" !== this.data) && j !== a && (c = !0, j > l && (e = "onReverseComplete")), this._rawPrevTime = g = !b || a || j === a ? a : l);
                else if (1e-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === i && j > 0) && (e = "onReverseComplete", d = this._reversed), 0 > a && (this._active = !1, 0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (j !== l || "isPause" !== this.data) && (c = !0), this._rawPrevTime = g = !b || a || j === a ? a : l)), this._initted || (c = !0);
                else if (this._totalTime = this._time = a, this._easeType) {
                    var k = a / i,
                        m = this._easeType,
                        n = this._easePower;
                    (1 === m || 3 === m && k >= .5) && (k = 1 - k), 3 === m && (k *= 2), 1 === n ? k *= k : 2 === n ? k *= k * k : 3 === n ? k *= k * k * k : 4 === n && (k *= k * k * k * k), 1 === m ? this.ratio = 1 - k : 2 === m ? this.ratio = k : .5 > a / i ? this.ratio = k / 2 : this.ratio = 1 - k / 2
                } else this.ratio = this._ease.getRatio(a / i);
                if (this._time !== h || c) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = h, this._rawPrevTime = j, I.push(this), void(this._lazy = [a, b]);
                        this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0), 0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === i) && (b || this._callback("onStart"))), f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
                    this._onUpdate && (0 > a && this._startAt && a !== -1e-4 && this._startAt.render(a, b, c), b || (this._time !== h || d || c) && this._callback("onUpdate")), e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && a !== -1e-4 && this._startAt.render(a, b, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this._callback(e), 0 === i && this._rawPrevTime === l && g !== l && (this._rawPrevTime = 0))
                }
            }, g._kill = function(a, b, c) {
                if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                b = "string" != typeof b ? b || this._targets || this.target : F.selector(b) || b;
                var d, e, f, g, h, i, j, k, l, m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline;
                if ((o(b) || G(b)) && "number" != typeof b[0])
                    for (d = b.length; --d > -1;) this._kill(a, b[d], c) && (i = !0);
                else {
                    if (this._targets) {
                        for (d = this._targets.length; --d > -1;)
                            if (b === this._targets[d]) {
                                h = this._propLookup[d] || {}, this._overwrittenProps = this._overwrittenProps || [], e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";
                                break
                            }
                    } else {
                        if (b !== this.target) return !1;
                        h = this._propLookup, e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                    }
                    if (h) {
                        if (j = a || h, k = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill), c && (F.onOverwrite || this.vars.onOverwrite)) {
                            for (f in j) h[f] && (l || (l = []), l.push(f));
                            if ((l || !a) && !Z(this, c, b, l)) return !1
                        }
                        for (f in j)(g = h[f]) && (m && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s, i = !0), g.pg && g.t._kill(j) && (i = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete h[f]), k && (e[f] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return i
            }, g.invalidate = function() {
                return this._notifyPluginsOfEnabled && F._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], C.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -l, this.render(Math.min(0, -this._delay))), this
            }, g._enabled = function(a, b) {
                if (i || h.wake(), a && this._gc) {
                    var c, d = this._targets;
                    if (d)
                        for (c = d.length; --c > -1;) this._siblings[c] = Y(d[c], this, !0);
                    else this._siblings = Y(this.target, this, !0)
                }
                return C.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? F._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
            }, F.to = function(a, b, c) {
                return new F(a, b, c)
            }, F.from = function(a, b, c) {
                return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new F(a, b, c)
            }, F.fromTo = function(a, b, c, d) {
                return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new F(a, b, d)
            }, F.delayedCall = function(a, b, c, d, e) {
                return new F(b, 0, {
                    delay: a,
                    onComplete: b,
                    onCompleteParams: c,
                    callbackScope: d,
                    onReverseComplete: b,
                    onReverseCompleteParams: c,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: e,
                    overwrite: 0
                })
            }, F.set = function(a, b) {
                return new F(a, 0, b)
            }, F.getTweensOf = function(a, b) {
                if (null == a) return [];
                a = "string" != typeof a ? a : F.selector(a) || a;
                var c, d, e, f;
                if ((o(a) || G(a)) && "number" != typeof a[0]) {
                    for (c = a.length, d = []; --c > -1;) d = d.concat(F.getTweensOf(a[c], b));
                    for (c = d.length; --c > -1;)
                        for (f = d[c], e = c; --e > -1;) f === d[e] && d.splice(c, 1)
                } else
                    for (d = Y(a).concat(), c = d.length; --c > -1;)(d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
                return d
            }, F.killTweensOf = F.killDelayedCallsTo = function(a, b, c) {
                "object" == typeof b && (c = b, b = !1);
                for (var d = F.getTweensOf(a, b), e = d.length; --e > -1;) d[e]._kill(c, a)
            };
            var aa = s("plugins.TweenPlugin", function(a, b) {
                this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = aa.prototype
            }, !0);
            if (g = aa.prototype, aa.version = "1.19.0", aa.API = 2, g._firstPT = null, g._addTween = N, g.setRatio = L, g._kill = function(a) {
                    var b, c = this._overwriteProps,
                        d = this._firstPT;
                    if (null != a[this._propName]) this._overwriteProps = [];
                    else
                        for (b = c.length; --b > -1;) null != a[c[b]] && c.splice(b, 1);
                    for (; d;) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
                    return !1
                }, g._mod = g._roundProps = function(a) {
                    for (var b, c = this._firstPT; c;) b = a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")], b && "function" == typeof b && (2 === c.f ? c.t._applyPT.m = b : c.m = b), c = c._next
                }, F._onPluginEvent = function(a, b) {
                    var c, d, e, f, g, h = b._firstPT;
                    if ("_onInitAllProps" === a) {
                        for (; h;) {
                            for (g = h._next, d = e; d && d.pr > h.pr;) d = d._next;
                            (h._prev = d ? d._prev : f) ? h._prev._next = h: e = h, (h._next = d) ? d._prev = h : f = h, h = g
                        }
                        h = b._firstPT = e
                    }
                    for (; h;) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
                    return c
                }, aa.activate = function(a) {
                    for (var b = a.length; --b > -1;) a[b].API === aa.API && (P[(new a[b])._propName] = a[b]);
                    return !0
                }, r.plugin = function(a) {
                    if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
                    var b, c = a.propName,
                        d = a.priority || 0,
                        e = a.overwriteProps,
                        f = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_mod",
                            mod: "_mod",
                            initAll: "_onInitAllProps"
                        },
                        g = s("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function() {
                            aa.call(this, c, d), this._overwriteProps = e || []
                        }, a.global === !0),
                        h = g.prototype = new aa(c);
                    h.constructor = g, g.API = a.API;
                    for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
                    return g.version = a.version, aa.activate([g]), g
                }, e = a._gsQueue) {
                for (f = 0; f < e.length; f++) e[f]();
                for (g in p) p[g].func || a.console.log("GSAP encountered missing dependency: " + g)
            }
            i = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
/*!
 * VERSION: 1.17.0
 * DATE: 2015-05-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
            var s = function(t) {
                    e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                    var i, s, r = this.vars;
                    for (s in r) i = r[s], h(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
                    h(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                },
                r = 1e-10,
                n = i._internals,
                a = s._internals = {},
                o = n.isSelector,
                h = n.isArray,
                l = n.lazyTweens,
                _ = n.lazyRender,
                u = [],
                f = _gsScope._gsDefine.globals,
                c = function(t) {
                    var e, i = {};
                    for (e in t) i[e] = t[e];
                    return i
                },
                p = a.pauseCallback = function(t, e, i, s) {
                    var n, a = t._timeline,
                        o = a._totalTime,
                        h = t._startTime,
                        l = 0 > t._rawPrevTime || 0 === t._rawPrevTime && a._reversed,
                        _ = l ? 0 : r,
                        f = l ? r : 0;
                    if (e || !this._forcingPlayhead) {
                        for (a.pause(h), n = t._prev; n && n._startTime === h;) n._rawPrevTime = f, n = n._prev;
                        for (n = t._next; n && n._startTime === h;) n._rawPrevTime = _, n = n._next;
                        e && e.apply(s || a.vars.callbackScope || a, i || u), (this._forcingPlayhead || !a._paused) && a.seek(o)
                    }
                },
                m = function(t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i
                },
                d = s.prototype = new e;
            return s.version = "1.17.0", d.constructor = s, d.kill()._gc = d._forcingPlayhead = !1, d.to = function(t, e, s, r) {
                var n = s.repeat && f.TweenMax || i;
                return e ? this.add(new n(t, e, s), r) : this.set(t, s, r)
            }, d.from = function(t, e, s, r) {
                return this.add((s.repeat && f.TweenMax || i).from(t, e, s), r)
            }, d.fromTo = function(t, e, s, r, n) {
                var a = r.repeat && f.TweenMax || i;
                return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n)
            }, d.staggerTo = function(t, e, r, n, a, h, l, _) {
                var u, f = new s({
                    onComplete: h,
                    onCompleteParams: l,
                    callbackScope: _,
                    smoothChildTiming: this.smoothChildTiming
                });
                for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = m(t)), n = n || 0, 0 > n && (t = m(t), t.reverse(), n *= -1), u = 0; t.length > u; u++) r.startAt && (r.startAt = c(r.startAt)), f.to(t[u], e, c(r), u * n);
                return this.add(f, a)
            }, d.staggerFrom = function(t, e, i, s, r, n, a, o) {
                return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o)
            }, d.staggerFromTo = function(t, e, i, s, r, n, a, o, h) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, h)
            }, d.call = function(t, e, s, r) {
                return this.add(i.delayedCall(0, t, e, s), r)
            }, d.set = function(t, e, s) {
                return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s)
            }, s.exportRoot = function(t, e) {
                t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                var r, n, a = new s(t),
                    o = a._timeline;
                for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n;
                return o.add(a, 0), a
            }, d.add = function(r, n, a, o) {
                var l, _, u, f, c, p;
                if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
                    if (r instanceof Array || r && r.push && h(r)) {
                        for (a = a || "normal", o = o || 0, l = n, _ = r.length, u = 0; _ > u; u++) h(f = r[u]) && (f = new s({
                            tweens: f
                        })), this.add(f, l), "string" != typeof f && "function" != typeof f && ("sequence" === a ? l = f._startTime + f.totalDuration() / f._timeScale : "start" === a && (f._startTime -= f.delay())), l += o;
                        return this._uncache(!0)
                    }
                    if ("string" == typeof r) return this.addLabel(r, n);
                    if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                    r = i.delayedCall(0, r)
                }
                if (e.prototype.add.call(this, r, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                    for (c = this, p = c.rawTime() > r._startTime; c._timeline;) p && c._timeline.smoothChildTiming ? c.totalTime(c._totalTime, !0) : c._gc && c._enabled(!0, !1), c = c._timeline;
                return this
            }, d.remove = function(e) {
                if (e instanceof t) return this._remove(e, !1);
                if (e instanceof Array || e && e.push && h(e)) {
                    for (var i = e.length; --i > -1;) this.remove(e[i]);
                    return this
                }
                return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
            }, d._remove = function(t, i) {
                e.prototype._remove.call(this, t, i);
                var s = this._last;
                return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, d.append = function(t, e) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
            }, d.insert = d.insertMultiple = function(t, e, i, s) {
                return this.add(t, e || 0, i, s)
            }, d.appendMultiple = function(t, e, i, s) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
            }, d.addLabel = function(t, e) {
                return this._labels[t] = this._parseTimeOrLabel(e), this
            }, d.addPause = function(t, e, s, r) {
                var n = i.delayedCall(0, p, ["{self}", e, s, r], this);
                return n.data = "isPause", this.add(n, t)
            }, d.removeLabel = function(t) {
                return delete this._labels[t], this
            }, d.getLabelTime = function(t) {
                return null != this._labels[t] ? this._labels[t] : -1
            }, d._parseTimeOrLabel = function(e, i, s, r) {
                var n;
                if (r instanceof t && r.timeline === this) this.remove(r);
                else if (r && (r instanceof Array || r.push && h(r)))
                    for (n = r.length; --n > -1;) r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
                if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
                if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                else {
                    if (n = e.indexOf("="), -1 === n) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                    i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration()
                }
                return Number(e) + i
            }, d.seek = function(t, e) {
                return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
            }, d.stop = function() {
                return this.paused(!0)
            }, d.gotoAndPlay = function(t, e) {
                return this.play(t, e)
            }, d.gotoAndStop = function(t, e) {
                return this.pause(t, e)
            }, d.render = function(t, e, i) {
                this._gc && this._enabled(!0, !1);
                var s, n, a, o, h, u = this._dirty ? this.totalDuration() : this._totalDuration,
                    f = this._time,
                    c = this._startTime,
                    p = this._timeScale,
                    m = this._paused;
                if (t >= u) this._totalTime = this._time = u, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = u + 1e-4;
                else if (1e-7 > t)
                    if (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = n = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t;
                    else {
                        if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && n)
                            for (s = this._first; s && 0 === s._startTime;) s._duration || (n = !1), s = s._next;
                        t = 0, this._initted || (h = !0)
                    }
                else this._totalTime = this._time = this._rawPrevTime = t;
                if (this._time !== f && this._first || i || h) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), this._time >= f)
                        for (s = this._first; s && (a = s._next, !this._paused || m);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                    else
                        for (s = this._last; s && (a = s._prev, !this._paused || m);)(s._active || f >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                    this._onUpdate && (e || (l.length && _(), this._callback("onUpdate"))), o && (this._gc || (c === this._startTime || p !== this._timeScale) && (0 === this._time || u >= this.totalDuration()) && (n && (l.length && _(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
                }
            }, d._hasPausedChild = function() {
                for (var t = this._first; t;) {
                    if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
                    t = t._next
                }
                return !1
            }, d.getChildren = function(t, e, s, r) {
                r = r || -9999999999;
                for (var n = [], a = this._first, o = 0; a;) r > a._startTime || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next;
                return n
            }, d.getTweensOf = function(t, e) {
                var s, r, n = this._gc,
                    a = [],
                    o = 0;
                for (n && this._enabled(!0, !0), s = i.getTweensOf(t), r = s.length; --r > -1;)(s[r].timeline === this || e && this._contains(s[r])) && (a[o++] = s[r]);
                return n && this._enabled(!1, !0), a
            }, d.recent = function() {
                return this._recent
            }, d._contains = function(t) {
                for (var e = t.timeline; e;) {
                    if (e === this) return !0;
                    e = e.timeline
                }
                return !1
            }, d.shiftChildren = function(t, e, i) {
                i = i || 0;
                for (var s, r = this._first, n = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                if (e)
                    for (s in n) n[s] >= i && (n[s] += t);
                return this._uncache(!0)
            }, d._kill = function(t, e) {
                if (!t && !e) return this._enabled(!1, !1);
                for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) i[s]._kill(t, e) && (r = !0);
                return r
            }, d.clear = function(t) {
                var e = this.getChildren(!1, !0, !0),
                    i = e.length;
                for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                return t !== !1 && (this._labels = {}), this._uncache(!0)
            }, d.invalidate = function() {
                for (var e = this._first; e;) e.invalidate(), e = e._next;
                return t.prototype.invalidate.call(this)
            }, d._enabled = function(t, i) {
                if (t === this._gc)
                    for (var s = this._first; s;) s._enabled(t, !0), s = s._next;
                return e.prototype._enabled.call(this, t, i)
            }, d.totalTime = function() {
                this._forcingPlayhead = !0;
                var e = t.prototype.totalTime.apply(this, arguments);
                return this._forcingPlayhead = !1, e
            }, d.duration = function(t) {
                return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
            }, d.totalDuration = function(t) {
                if (!arguments.length) {
                    if (this._dirty) {
                        for (var e, i, s = 0, r = this._last, n = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, 0 > r._startTime && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e;
                        this._duration = this._totalDuration = s, this._dirty = !1
                    }
                    return this._totalDuration
                }
                return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
            }, d.paused = function(e) {
                if (!e)
                    for (var i = this._first, s = this._time; i;) i._startTime === s && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                return t.prototype.paused.apply(this, arguments)
            }, d.usesFrames = function() {
                for (var e = this._timeline; e._timeline;) e = e._timeline;
                return e === t._rootFramesTimeline
            }, d.rawTime = function() {
                return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
            }, s
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t) {
        "use strict";
        var e = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[t]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("./TweenLite.js"), module.exports = e())
    }("TimelineLite");
/*!
 * VERSION: 1.15.5
 * DATE: 2016-07-08
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(a) {
            var b, c, d, e = _gsScope.GreenSockGlobals || _gsScope,
                f = e.com.greensock,
                g = 2 * Math.PI,
                h = Math.PI / 2,
                i = f._class,
                j = function(b, c) {
                    var d = i("easing." + b, function() {}, !0),
                        e = d.prototype = new a;
                    return e.constructor = d, e.getRatio = c, d
                },
                k = a.register || function() {},
                l = function(a, b, c, d, e) {
                    var f = i("easing." + a, {
                        easeOut: new b,
                        easeIn: new c,
                        easeInOut: new d
                    }, !0);
                    return k(f, a), f
                },
                m = function(a, b, c) {
                    this.t = a, this.v = b, c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a)
                },
                n = function(b, c) {
                    var d = i("easing." + b, function(a) {
                            this._p1 = a || 0 === a ? a : 1.70158, this._p2 = 1.525 * this._p1
                        }, !0),
                        e = d.prototype = new a;
                    return e.constructor = d, e.getRatio = c, e.config = function(a) {
                        return new d(a)
                    }, d
                },
                o = l("Back", n("BackOut", function(a) {
                    return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1
                }), n("BackIn", function(a) {
                    return a * a * ((this._p1 + 1) * a - this._p1)
                }), n("BackInOut", function(a) {
                    return (a *= 2) < 1 ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
                })),
                p = i("easing.SlowMo", function(a, b, c) {
                    b = b || 0 === b ? b : .7, null == a ? a = .7 : a > 1 && (a = 1), this._p = 1 !== a ? b : 0, this._p1 = (1 - a) / 2, this._p2 = a, this._p3 = this._p1 + this._p2, this._calcEnd = c === !0
                }, !0),
                q = p.prototype = new a;
            return q.constructor = p, q.getRatio = function(a) {
                var b = a + (.5 - a) * this._p;
                return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b
            }, p.ease = new p(.7, .7), q.config = p.config = function(a, b, c) {
                return new p(a, b, c)
            }, b = i("easing.SteppedEase", function(a) {
                a = a || 1, this._p1 = 1 / a, this._p2 = a + 1
            }, !0), q = b.prototype = new a, q.constructor = b, q.getRatio = function(a) {
                return 0 > a ? a = 0 : a >= 1 && (a = .999999999), (this._p2 * a >> 0) * this._p1
            }, q.config = b.config = function(a) {
                return new b(a)
            }, c = i("easing.RoughEase", function(b) {
                b = b || {};
                for (var c, d, e, f, g, h, i = b.taper || "none", j = [], k = 0, l = 0 | (b.points || 20), n = l, o = b.randomize !== !1, p = b.clamp === !0, q = b.template instanceof a ? b.template : null, r = "number" == typeof b.strength ? .4 * b.strength : .4; --n > -1;) c = o ? Math.random() : 1 / l * n, d = q ? q.getRatio(c) : c, "none" === i ? e = r : "out" === i ? (f = 1 - c, e = f * f * r) : "in" === i ? e = c * c * r : .5 > c ? (f = 2 * c, e = f * f * .5 * r) : (f = 2 * (1 - c), e = f * f * .5 * r), o ? d += Math.random() * e - .5 * e : n % 2 ? d += .5 * e : d -= .5 * e, p && (d > 1 ? d = 1 : 0 > d && (d = 0)), j[k++] = {
                    x: c,
                    y: d
                };
                for (j.sort(function(a, b) {
                        return a.x - b.x
                    }), h = new m(1, 1, null), n = l; --n > -1;) g = j[n], h = new m(g.x, g.y, h);
                this._prev = new m(0, 0, 0 !== h.t ? h : h.next)
            }, !0), q = c.prototype = new a, q.constructor = c, q.getRatio = function(a) {
                var b = this._prev;
                if (a > b.t) {
                    for (; b.next && a >= b.t;) b = b.next;
                    b = b.prev
                } else
                    for (; b.prev && a <= b.t;) b = b.prev;
                return this._prev = b, b.v + (a - b.t) / b.gap * b.c
            }, q.config = function(a) {
                return new c(a)
            }, c.ease = new c, l("Bounce", j("BounceOut", function(a) {
                return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
            }), j("BounceIn", function(a) {
                return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
            }), j("BounceInOut", function(a) {
                var b = .5 > a;
                return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, b ? .5 * (1 - a) : .5 * a + .5
            })), l("Circ", j("CircOut", function(a) {
                return Math.sqrt(1 - (a -= 1) * a)
            }), j("CircIn", function(a) {
                return -(Math.sqrt(1 - a * a) - 1)
            }), j("CircInOut", function(a) {
                return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
            })), d = function(b, c, d) {
                var e = i("easing." + b, function(a, b) {
                        this._p1 = a >= 1 ? a : 1, this._p2 = (b || d) / (1 > a ? a : 1), this._p3 = this._p2 / g * (Math.asin(1 / this._p1) || 0), this._p2 = g / this._p2
                    }, !0),
                    f = e.prototype = new a;
                return f.constructor = e, f.getRatio = c, f.config = function(a, b) {
                    return new e(a, b)
                }, e
            }, l("Elastic", d("ElasticOut", function(a) {
                return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1
            }, .3), d("ElasticIn", function(a) {
                return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2))
            }, .3), d("ElasticInOut", function(a) {
                return (a *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) * .5 + 1
            }, .45)), l("Expo", j("ExpoOut", function(a) {
                return 1 - Math.pow(2, -10 * a)
            }), j("ExpoIn", function(a) {
                return Math.pow(2, 10 * (a - 1)) - .001
            }), j("ExpoInOut", function(a) {
                return (a *= 2) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)))
            })), l("Sine", j("SineOut", function(a) {
                return Math.sin(a * h)
            }), j("SineIn", function(a) {
                return -Math.cos(a * h) + 1
            }), j("SineInOut", function(a) {
                return -.5 * (Math.cos(Math.PI * a) - 1)
            })), i("easing.EaseLookup", {
                find: function(b) {
                    return a.map[b]
                }
            }, !0), k(e.SlowMo, "SlowMo", "ease,"), k(c, "RoughEase", "ease,"), k(b, "SteppedEase", "ease,"), o
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function() {
        "use strict";
        var a = function() {
            return _gsScope.GreenSockGlobals || _gsScope
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], a) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = a())
    }();
/*!
 * VERSION: 1.19.0
 * DATE: 2016-07-14
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(a, b) {
            var c, d, e, f, g = function() {
                    a.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = g.prototype.setRatio
                },
                h = _gsScope._gsDefine.globals,
                i = {},
                j = g.prototype = new a("css");
            j.constructor = g, g.version = "1.19.0", g.API = 2, g.defaultTransformPerspective = 0, g.defaultSkewType = "compensated", g.defaultSmoothOrigin = !0, j = "px", g.suffixMap = {
                top: j,
                right: j,
                bottom: j,
                left: j,
                width: j,
                height: j,
                fontSize: j,
                padding: j,
                margin: j,
                perspective: j,
                lineHeight: ""
            };
            var k, l, m, n, o, p, q, r, s = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                t = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                u = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                v = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                w = /(?:\d|\-|\+|=|#|\.)*/g,
                x = /opacity *= *([^)]*)/i,
                y = /opacity:([^;]*)/i,
                z = /alpha\(opacity *=.+?\)/i,
                A = /^(rgb|hsl)/,
                B = /([A-Z])/g,
                C = /-([a-z])/gi,
                D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                E = function(a, b) {
                    return b.toUpperCase()
                },
                F = /(?:Left|Right|Width)/i,
                G = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                H = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                I = /,(?=[^\)]*(?:\(|$))/gi,
                J = /[\s,\(]/i,
                K = Math.PI / 180,
                L = 180 / Math.PI,
                M = {},
                N = document,
                O = function(a) {
                    return N.createElementNS ? N.createElementNS("http://www.w3.org/1999/xhtml", a) : N.createElement(a)
                },
                P = O("div"),
                Q = O("img"),
                R = g._internals = {
                    _specialProps: i
                },
                S = navigator.userAgent,
                T = function() {
                    var a = S.indexOf("Android"),
                        b = O("a");
                    return m = -1 !== S.indexOf("Safari") && -1 === S.indexOf("Chrome") && (-1 === a || Number(S.substr(a + 8, 1)) > 3), o = m && Number(S.substr(S.indexOf("Version/") + 8, 1)) < 6, n = -1 !== S.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(S) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(S)) && (p = parseFloat(RegExp.$1)), b ? (b.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(b.style.opacity)) : !1
                }(),
                U = function(a) {
                    return x.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                },
                V = function(a) {
                    window.console && console.log(a)
                },
                W = "",
                X = "",
                Y = function(a, b) {
                    b = b || P;
                    var c, d, e = b.style;
                    if (void 0 !== e[a]) return a;
                    for (a = a.charAt(0).toUpperCase() + a.substr(1), c = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && void 0 === e[c[d] + a];);
                    return d >= 0 ? (X = 3 === d ? "ms" : c[d], W = "-" + X.toLowerCase() + "-", X + a) : null
                },
                Z = N.defaultView ? N.defaultView.getComputedStyle : function() {},
                $ = g.getStyle = function(a, b, c, d, e) {
                    var f;
                    return T || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || Z(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(B, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : U(a)
                },
                _ = R.convertToPixels = function(a, c, d, e, f) {
                    if ("px" === e || !e) return d;
                    if ("auto" === e || !d) return 0;
                    var h, i, j, k = F.test(c),
                        l = a,
                        m = P.style,
                        n = 0 > d,
                        o = 1 === d;
                    if (n && (d = -d), o && (d *= 100), "%" === e && -1 !== c.indexOf("border")) h = d / 100 * (k ? a.clientWidth : a.clientHeight);
                    else {
                        if (m.cssText = "border:0 solid red;position:" + $(a, "position") + ";line-height:0;", "%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e) m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
                        else {
                            if (l = a.parentNode || N.body, i = l._gsCache, j = b.ticker.frame, i && k && i.time === j) return i.width * d / 100;
                            m[k ? "width" : "height"] = d + e
                        }
                        l.appendChild(P), h = parseFloat(P[k ? "offsetWidth" : "offsetHeight"]), l.removeChild(P), k && "%" === e && g.cacheWidths !== !1 && (i = l._gsCache = l._gsCache || {}, i.time = j, i.width = h / d * 100), 0 !== h || f || (h = _(a, c, d, e, !0))
                    }
                    return o && (h /= 100), n ? -h : h
                },
                aa = R.calculateOffset = function(a, b, c) {
                    if ("absolute" !== $(a, "position", c)) return 0;
                    var d = "left" === b ? "Left" : "Top",
                        e = $(a, "margin" + d, c);
                    return a["offset" + d] - (_(a, b, parseFloat(e), e.replace(w, "")) || 0)
                },
                ba = function(a, b) {
                    var c, d, e, f = {};
                    if (b = b || Z(a, null))
                        if (c = b.length)
                            for (; --c > -1;) e = b[c], (-1 === e.indexOf("-transform") || Ca === e) && (f[e.replace(C, E)] = b.getPropertyValue(e));
                        else
                            for (c in b)(-1 === c.indexOf("Transform") || Ba === c) && (f[c] = b[c]);
                    else if (b = a.currentStyle || a.style)
                        for (c in b) "string" == typeof c && void 0 === f[c] && (f[c.replace(C, E)] = b[c]);
                    return T || (f.opacity = U(a)), d = Pa(a, b, !1), f.rotation = d.rotation, f.skewX = d.skewX, f.scaleX = d.scaleX, f.scaleY = d.scaleY, f.x = d.x, f.y = d.y, Ea && (f.z = d.z, f.rotationX = d.rotationX, f.rotationY = d.rotationY, f.scaleZ = d.scaleZ), f.filters && delete f.filters, f
                },
                ca = function(a, b, c, d, e) {
                    var f, g, h, i = {},
                        j = a.style;
                    for (g in c) "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(v, "") ? f : 0 : aa(a, g), void 0 !== j[g] && (h = new ra(j, g, j[g], h)));
                    if (d)
                        for (g in d) "className" !== g && (i[g] = d[g]);
                    return {
                        difs: i,
                        firstMPT: h
                    }
                },
                da = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                },
                ea = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                fa = function(a, b, c) {
                    if ("svg" === (a.nodeName + "").toLowerCase()) return (c || Z(a))[b] || 0;
                    if (a.getBBox && Ma(a)) return a.getBBox()[b] || 0;
                    var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
                        e = da[b],
                        f = e.length;
                    for (c = c || Z(a, null); --f > -1;) d -= parseFloat($(a, "padding" + e[f], c, !0)) || 0, d -= parseFloat($(a, "border" + e[f] + "Width", c, !0)) || 0;
                    return d
                },
                ga = function(a, b) {
                    if ("contain" === a || "auto" === a || "auto auto" === a) return a + " ";
                    (null == a || "" === a) && (a = "0 0");
                    var c, d = a.split(" "),
                        e = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : d[0],
                        f = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : d[1];
                    if (d.length > 3 && !b) {
                        for (d = a.split(", ").join(",").split(","), a = [], c = 0; c < d.length; c++) a.push(ga(d[c]));
                        return a.join(",")
                    }
                    return null == f ? f = "center" === e ? "50%" : "0" : "center" === f && (f = "50%"), ("center" === e || isNaN(parseFloat(e)) && -1 === (e + "").indexOf("=")) && (e = "50%"), a = e + " " + f + (d.length > 2 ? " " + d[2] : ""), b && (b.oxp = -1 !== e.indexOf("%"), b.oyp = -1 !== f.indexOf("%"), b.oxr = "=" === e.charAt(1), b.oyr = "=" === f.charAt(1), b.ox = parseFloat(e.replace(v, "")), b.oy = parseFloat(f.replace(v, "")), b.v = a), b || a
                },
                ha = function(a, b) {
                    return "function" == typeof a && (a = a(r, q)), "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b) || 0
                },
                ia = function(a, b) {
                    return "function" == typeof a && (a = a(r, q)), null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a) || 0
                },
                ja = function(a, b, c, d) {
                    var e, f, g, h, i, j = 1e-6;
                    return "function" == typeof a && (a = a(r, q)), null == a ? h = b : "number" == typeof a ? h = a : (e = 360, f = a.split("_"), i = "=" === a.charAt(1), g = (i ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : L) - (i ? 0 : b), f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && (g %= e, g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)), -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (g / e | 0) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (g / e | 0) * e)), h = b + g), j > h && h > -j && (h = 0), h
                },
                ka = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                la = function(a, b, c) {
                    return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 255 * (1 > 6 * a ? b + (c - b) * a * 6 : .5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0
                },
                ma = g.parseColor = function(a, b) {
                    var c, d, e, f, g, h, i, j, k, l, m;
                    if (a)
                        if ("number" == typeof a) c = [a >> 16, a >> 8 & 255, 255 & a];
                        else {
                            if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), ka[a]) c = ka[a];
                            else if ("#" === a.charAt(0)) 4 === a.length && (d = a.charAt(1), e = a.charAt(2), f = a.charAt(3), a = "#" + d + d + e + e + f + f), a = parseInt(a.substr(1), 16), c = [a >> 16, a >> 8 & 255, 255 & a];
                            else if ("hsl" === a.substr(0, 3))
                                if (c = m = a.match(s), b) {
                                    if (-1 !== a.indexOf("=")) return a.match(t)
                                } else g = Number(c[0]) % 360 / 360, h = Number(c[1]) / 100, i = Number(c[2]) / 100, e = .5 >= i ? i * (h + 1) : i + h - i * h, d = 2 * i - e, c.length > 3 && (c[3] = Number(a[3])), c[0] = la(g + 1 / 3, d, e), c[1] = la(g, d, e), c[2] = la(g - 1 / 3, d, e);
                            else c = a.match(s) || ka.transparent;
                            c[0] = Number(c[0]), c[1] = Number(c[1]), c[2] = Number(c[2]), c.length > 3 && (c[3] = Number(c[3]))
                        }
                    else c = ka.black;
                    return b && !m && (d = c[0] / 255, e = c[1] / 255, f = c[2] / 255, j = Math.max(d, e, f), k = Math.min(d, e, f), i = (j + k) / 2, j === k ? g = h = 0 : (l = j - k, h = i > .5 ? l / (2 - j - k) : l / (j + k), g = j === d ? (e - f) / l + (f > e ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4, g *= 60), c[0] = g + .5 | 0, c[1] = 100 * h + .5 | 0, c[2] = 100 * i + .5 | 0), c
                },
                na = function(a, b) {
                    var c, d, e, f = a.match(oa) || [],
                        g = 0,
                        h = f.length ? "" : a;
                    for (c = 0; c < f.length; c++) d = f[c], e = a.substr(g, a.indexOf(d, g) - g), g += e.length + d.length, d = ma(d, b), 3 === d.length && d.push(1), h += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")";
                    return h + a.substr(g)
                },
                oa = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (j in ka) oa += "|" + j + "\\b";
            oa = new RegExp(oa + ")", "gi"), g.colorStringFilter = function(a) {
                var b, c = a[0] + a[1];
                oa.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("), a[0] = na(a[0], b), a[1] = na(a[1], b)), oa.lastIndex = 0
            }, b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);
            var pa = function(a, b, c, d) {
                    if (null == a) return function(a) {
                        return a
                    };
                    var e, f = b ? (a.match(oa) || [""])[0] : "",
                        g = a.split(f).join("").match(u) || [],
                        h = a.substr(0, a.indexOf(g[0])),
                        i = ")" === a.charAt(a.length - 1) ? ")" : "",
                        j = -1 !== a.indexOf(" ") ? " " : ",",
                        k = g.length,
                        l = k > 0 ? g[0].replace(s, "") : "";
                    return k ? e = b ? function(a) {
                        var b, m, n, o;
                        if ("number" == typeof a) a += l;
                        else if (d && I.test(a)) {
                            for (o = a.replace(I, "|").split("|"), n = 0; n < o.length; n++) o[n] = e(o[n]);
                            return o.join(",")
                        }
                        if (b = (a.match(oa) || [f])[0], m = a.split(b).join("").match(u) || [], n = m.length, k > n--)
                            for (; ++n < k;) m[n] = c ? m[(n - 1) / 2 | 0] : g[n];
                        return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "")
                    } : function(a) {
                        var b, f, m;
                        if ("number" == typeof a) a += l;
                        else if (d && I.test(a)) {
                            for (f = a.replace(I, "|").split("|"), m = 0; m < f.length; m++) f[m] = e(f[m]);
                            return f.join(",")
                        }
                        if (b = a.match(u) || [], m = b.length, k > m--)
                            for (; ++m < k;) b[m] = c ? b[(m - 1) / 2 | 0] : g[m];
                        return h + b.join(j) + i
                    } : function(a) {
                        return a
                    }
                },
                qa = function(a) {
                    return a = a.split(","),
                        function(b, c, d, e, f, g, h) {
                            var i, j = (c + "").split(" ");
                            for (h = {}, i = 0; 4 > i; i++) h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
                            return e.parse(b, h, f, g)
                        }
                },
                ra = (R._setPluginRatio = function(a) {
                    this.plugin.setRatio(a);
                    for (var b, c, d, e, f, g = this.data, h = g.proxy, i = g.firstMPT, j = 1e-6; i;) b = h[i.v], i.r ? b = Math.round(b) : j > b && b > -j && (b = 0), i.t[i.p] = b, i = i._next;
                    if (g.autoRotate && (g.autoRotate.rotation = g.mod ? g.mod(h.rotation, this.t) : h.rotation), 1 === a || 0 === a)
                        for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i;) {
                            if (c = i.t, c.type) {
                                if (1 === c.type) {
                                    for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++) e += c["xn" + d] + c["xs" + (d + 1)];
                                    c[f] = e
                                }
                            } else c[f] = c.s + c.xs0;
                            i = i._next
                        }
                }, function(a, b, c, d, e) {
                    this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d)
                }),
                sa = (R._parseToProxy = function(a, b, c, d, e, f) {
                    var g, h, i, j, k, l = d,
                        m = {},
                        n = {},
                        o = c._transform,
                        p = M;
                    for (c._transform = null, M = b, d = k = c.parse(a, b, d, e), M = p, f && (c._transform = o, l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l;) {
                        if (d.type <= 1 && (h = d.p, n[h] = d.s + d.c, m[h] = d.s, f || (j = new ra(d, "s", h, j, d.r), d.c = 0), 1 === d.type))
                            for (g = d.l; --g > 0;) i = "xn" + g, h = d.p + "_" + i, n[h] = d.data[i], m[h] = d[i], f || (j = new ra(d, i, h, j, d.rxp[i]));
                        d = d._next
                    }
                    return {
                        proxy: m,
                        end: n,
                        firstMPT: j,
                        pt: k
                    }
                }, R.CSSPropTween = function(a, b, d, e, g, h, i, j, k, l, m) {
                    this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || b, a instanceof sa || f.push(this.n), this.r = j, this.type = h || 0, k && (this.pr = k, c = !0), this.b = void 0 === l ? d : l, this.e = void 0 === m ? d + e : m, g && (this._next = g, g._prev = this)
                }),
                ta = function(a, b, c, d, e, f) {
                    var g = new sa(a, b, c, d - c, e, -1, f);
                    return g.b = c, g.e = g.xs0 = d, g
                },
                ua = g.parseComplex = function(a, b, c, d, e, f, h, i, j, l) {
                    c = c || f || "", "function" == typeof d && (d = d(r, q)), h = new sa(a, b, 0, 0, h, l ? 2 : 1, null, !1, i, c, d), d += "", e && oa.test(d + c) && (d = [c, d], g.colorStringFilter(d), c = d[0], d = d[1]);
                    var m, n, o, p, u, v, w, x, y, z, A, B, C, D = c.split(", ").join(",").split(" "),
                        E = d.split(", ").join(",").split(" "),
                        F = D.length,
                        G = k !== !1;
                    for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (D = D.join(" ").replace(I, ", ").split(" "), E = E.join(" ").replace(I, ", ").split(" "), F = D.length), F !== E.length && (D = (f || "").split(" "), F = D.length), h.plugin = j, h.setRatio = l, oa.lastIndex = 0, m = 0; F > m; m++)
                        if (p = D[m], u = E[m], x = parseFloat(p), x || 0 === x) h.appendXtra("", x, ha(u, x), u.replace(t, ""), G && -1 !== u.indexOf("px"), !0);
                        else if (e && oa.test(p)) B = u.indexOf(")") + 1, B = ")" + (B ? u.substr(B) : ""), C = -1 !== u.indexOf("hsl") && T, p = ma(p, C), u = ma(u, C), y = p.length + u.length > 6, y && !T && 0 === u[3] ? (h["xs" + h.l] += h.l ? " transparent" : "transparent", h.e = h.e.split(E[m]).join("transparent")) : (T || (y = !1), C ? h.appendXtra(y ? "hsla(" : "hsl(", p[0], ha(u[0], p[0]), ",", !1, !0).appendXtra("", p[1], ha(u[1], p[1]), "%,", !1).appendXtra("", p[2], ha(u[2], p[2]), y ? "%," : "%" + B, !1) : h.appendXtra(y ? "rgba(" : "rgb(", p[0], u[0] - p[0], ",", !0, !0).appendXtra("", p[1], u[1] - p[1], ",", !0).appendXtra("", p[2], u[2] - p[2], y ? "," : B, !0), y && (p = p.length < 4 ? 1 : p[3], h.appendXtra("", p, (u.length < 4 ? 1 : u[3]) - p, B, !1))), oa.lastIndex = 0;
                    else if (v = p.match(s)) {
                        if (w = u.match(t), !w || w.length !== v.length) return h;
                        for (o = 0, n = 0; n < v.length; n++) A = v[n], z = p.indexOf(A, o), h.appendXtra(p.substr(o, z - o), Number(A), ha(w[n], A), "", G && "px" === p.substr(z + A.length, 2), 0 === n), o = z + A.length;
                        h["xs" + h.l] += p.substr(o)
                    } else h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + u : u;
                    if (-1 !== d.indexOf("=") && h.data) {
                        for (B = h.xs0 + h.data.s, m = 1; m < h.l; m++) B += h["xs" + m] + h.data["xn" + m];
                        h.e = B + h["xs" + m]
                    }
                    return h.l || (h.type = -1, h.xs0 = h.e), h.xfirst || h
                },
                va = 9;
            for (j = sa.prototype, j.l = j.pr = 0; --va > 0;) j["xn" + va] = 0, j["xs" + va] = "";
            j.xs0 = "", j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null, j.appendXtra = function(a, b, c, d, e, f) {
                var g = this,
                    h = g.l;
                return g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new sa(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), g.xfirst.xs0 = 0), g) : (g.data = {
                    s: b + c
                }, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g)
            };
            var wa = function(a, b) {
                    b = b || {}, this.p = b.prefix ? Y(a) || a : a, i[a] = i[this.p] = this, this.format = b.formatter || pa(b.defaultValue, b.color, b.collapsible, b.multi), b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, this.keyword = b.keyword, this.dflt = b.defaultValue, this.pr = b.priority || 0
                },
                xa = R._registerComplexSpecialProp = function(a, b, c) {
                    "object" != typeof b && (b = {
                        parser: c
                    });
                    var d, e, f = a.split(","),
                        g = b.defaultValue;
                    for (c = c || [g], d = 0; d < f.length; d++) b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, e = new wa(f[d], b)
                },
                ya = R._registerPluginProp = function(a) {
                    if (!i[a]) {
                        var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                        xa(a, {
                            parser: function(a, c, d, e, f, g, j) {
                                var k = h.com.greensock.plugins[b];
                                return k ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j)) : (V("Error: " + b + " js file not loaded."), f)
                            }
                        })
                    }
                };
            j = wa.prototype, j.parseComplex = function(a, b, c, d, e, f) {
                var g, h, i, j, k, l, m = this.keyword;
                if (this.multi && (I.test(c) || I.test(b) ? (h = b.replace(I, "|").split("|"), i = c.replace(I, "|").split("|")) : m && (h = [b], i = [c])), i) {
                    for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++) b = h[g] = h[g] || this.dflt, c = i[g] = i[g] || this.dflt, m && (k = b.indexOf(m), l = c.indexOf(m), k !== l && (-1 === l ? h[g] = h[g].split(m).join("") : -1 === k && (h[g] += " " + m)));
                    b = h.join(", "), c = i.join(", ")
                }
                return ua(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f)
            }, j.parse = function(a, b, c, d, f, g, h) {
                return this.parseComplex(a.style, this.format($(a, this.p, e, !1, this.dflt)), this.format(b), f, g)
            }, g.registerSpecialProp = function(a, b, c) {
                xa(a, {
                    parser: function(a, d, e, f, g, h, i) {
                        var j = new sa(a, e, 0, 0, g, 2, e, !1, c);
                        return j.plugin = h, j.setRatio = b(a, d, f._tween, e), j
                    },
                    priority: c
                })
            }, g.useSVGTransformAttr = m || n;
            var za, Aa = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                Ba = Y("transform"),
                Ca = W + "transform",
                Da = Y("transformOrigin"),
                Ea = null !== Y("perspective"),
                Fa = R.Transform = function() {
                    this.perspective = parseFloat(g.defaultTransformPerspective) || 0, this.force3D = g.defaultForce3D !== !1 && Ea ? g.defaultForce3D || "auto" : !1
                },
                Ga = window.SVGElement,
                Ha = function(a, b, c) {
                    var d, e = N.createElementNS("http://www.w3.org/2000/svg", a),
                        f = /([a-z])([A-Z])/g;
                    for (d in c) e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
                    return b.appendChild(e), e
                },
                Ia = N.documentElement,
                Ja = function() {
                    var a, b, c, d = p || /Android/i.test(S) && !window.chrome;
                    return N.createElementNS && !d && (a = Ha("svg", Ia), b = Ha("rect", a, {
                        width: 100,
                        height: 50,
                        x: 100
                    }), c = b.getBoundingClientRect().width, b.style[Da] = "50% 50%", b.style[Ba] = "scaleX(0.5)", d = c === b.getBoundingClientRect().width && !(n && Ea), Ia.removeChild(a)), d
                }(),
                Ka = function(a, b, c, d, e, f) {
                    var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = a._gsTransform,
                        w = Oa(a, !0);
                    v && (t = v.xOrigin, u = v.yOrigin), (!d || (h = d.split(" ")).length < 2) && (n = a.getBBox(), b = ga(b).split(" "), h = [(-1 !== b[0].indexOf("%") ? parseFloat(b[0]) / 100 * n.width : parseFloat(b[0])) + n.x, (-1 !== b[1].indexOf("%") ? parseFloat(b[1]) / 100 * n.height : parseFloat(b[1])) + n.y]), c.xOrigin = k = parseFloat(h[0]), c.yOrigin = l = parseFloat(h[1]), d && w !== Na && (m = w[0], n = w[1], o = w[2], p = w[3], q = w[4], r = w[5], s = m * p - n * o, i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s, j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s, k = c.xOrigin = h[0] = i, l = c.yOrigin = h[1] = j), v && (f && (c.xOffset = v.xOffset, c.yOffset = v.yOffset, v = c), e || e !== !1 && g.defaultSmoothOrigin !== !1 ? (i = k - t, j = l - u, v.xOffset += i * w[0] + j * w[2] - i, v.yOffset += i * w[1] + j * w[3] - j) : v.xOffset = v.yOffset = 0), f || a.setAttribute("data-svg-origin", h.join(" "))
                },
                La = function(a) {
                    try {
                        return a.getBBox()
                    } catch (a) {}
                },
                Ma = function(a) {
                    return !!(Ga && a.getBBox && a.getCTM && La(a) && (!a.parentNode || a.parentNode.getBBox && a.parentNode.getCTM))
                },
                Na = [1, 0, 0, 1, 0, 0],
                Oa = function(a, b) {
                    var c, d, e, f, g, h, i = a._gsTransform || new Fa,
                        j = 1e5,
                        k = a.style;
                    if (Ba ? d = $(a, Ca, null, !0) : a.currentStyle && (d = a.currentStyle.filter.match(G), d = d && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), i.x || 0, i.y || 0].join(",") : ""), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, c && Ba && ((h = "none" === Z(a).display) || !a.parentNode) && (h && (f = k.display, k.display = "block"), a.parentNode || (g = 1, Ia.appendChild(a)), d = $(a, Ca, null, !0), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, f ? k.display = f : h && Ta(k, "display"), g && Ia.removeChild(a)), (i.svg || a.getBBox && Ma(a)) && (c && -1 !== (k[Ba] + "").indexOf("matrix") && (d = k[Ba], c = 0), e = a.getAttribute("transform"), c && e && (-1 !== e.indexOf("matrix") ? (d = e, c = 0) : -1 !== e.indexOf("translate") && (d = "matrix(1,0,0,1," + e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", c = 0))), c) return Na;
                    for (e = (d || "").match(s) || [], va = e.length; --va > -1;) f = Number(e[va]), e[va] = (g = f - (f |= 0)) ? (g * j + (0 > g ? -.5 : .5) | 0) / j + f : f;
                    return b && e.length > 6 ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e
                },
                Pa = R.getTransform = function(a, c, d, e) {
                    if (a._gsTransform && d && !e) return a._gsTransform;
                    var f, h, i, j, k, l, m = d ? a._gsTransform || new Fa : new Fa,
                        n = m.scaleX < 0,
                        o = 2e-5,
                        p = 1e5,
                        q = Ea ? parseFloat($(a, Da, c, !1, "0 0 0").split(" ")[2]) || m.zOrigin || 0 : 0,
                        r = parseFloat(g.defaultTransformPerspective) || 0;
                    if (m.svg = !(!a.getBBox || !Ma(a)), m.svg && (Ka(a, $(a, Da, c, !1, "50% 50%") + "", m, a.getAttribute("data-svg-origin")), za = g.useSVGTransformAttr || Ja), f = Oa(a), f !== Na) {
                        if (16 === f.length) {
                            var s, t, u, v, w, x = f[0],
                                y = f[1],
                                z = f[2],
                                A = f[3],
                                B = f[4],
                                C = f[5],
                                D = f[6],
                                E = f[7],
                                F = f[8],
                                G = f[9],
                                H = f[10],
                                I = f[12],
                                J = f[13],
                                K = f[14],
                                M = f[11],
                                N = Math.atan2(D, H);
                            m.zOrigin && (K = -m.zOrigin, I = F * K - f[12], J = G * K - f[13], K = H * K + m.zOrigin - f[14]), m.rotationX = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), s = B * v + F * w, t = C * v + G * w, u = D * v + H * w, F = B * -w + F * v, G = C * -w + G * v, H = D * -w + H * v, M = E * -w + M * v, B = s, C = t, D = u), N = Math.atan2(-z, H), m.rotationY = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), s = x * v - F * w, t = y * v - G * w, u = z * v - H * w, G = y * w + G * v, H = z * w + H * v, M = A * w + M * v, x = s, y = t, z = u), N = Math.atan2(y, x), m.rotation = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), x = x * v + B * w, t = y * v + C * w, C = y * -w + C * v, D = z * -w + D * v, y = t), m.rotationX && Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 && (m.rotationX = m.rotation = 0, m.rotationY = 180 - m.rotationY), m.scaleX = (Math.sqrt(x * x + y * y) * p + .5 | 0) / p, m.scaleY = (Math.sqrt(C * C + G * G) * p + .5 | 0) / p, m.scaleZ = (Math.sqrt(D * D + H * H) * p + .5 | 0) / p, m.rotationX || m.rotationY ? m.skewX = 0 : (m.skewX = B || C ? Math.atan2(B, C) * L + m.rotation : m.skewX || 0, Math.abs(m.skewX) > 90 && Math.abs(m.skewX) < 270 && (n ? (m.scaleX *= -1, m.skewX += m.rotation <= 0 ? 180 : -180, m.rotation += m.rotation <= 0 ? 180 : -180) : (m.scaleY *= -1, m.skewX += m.skewX <= 0 ? 180 : -180))), m.perspective = M ? 1 / (0 > M ? -M : M) : 0, m.x = I, m.y = J, m.z = K, m.svg && (m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B), m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C))
                        } else if (!Ea || e || !f.length || m.x !== f[4] || m.y !== f[5] || !m.rotationX && !m.rotationY) {
                            var O = f.length >= 6,
                                P = O ? f[0] : 1,
                                Q = f[1] || 0,
                                R = f[2] || 0,
                                S = O ? f[3] : 1;
                            m.x = f[4] || 0, m.y = f[5] || 0, i = Math.sqrt(P * P + Q * Q), j = Math.sqrt(S * S + R * R), k = P || Q ? Math.atan2(Q, P) * L : m.rotation || 0, l = R || S ? Math.atan2(R, S) * L + k : m.skewX || 0, Math.abs(l) > 90 && Math.abs(l) < 270 && (n ? (i *= -1, l += 0 >= k ? 180 : -180, k += 0 >= k ? 180 : -180) : (j *= -1, l += 0 >= l ? 180 : -180)), m.scaleX = i, m.scaleY = j, m.rotation = k, m.skewX = l, Ea && (m.rotationX = m.rotationY = m.z = 0, m.perspective = r, m.scaleZ = 1), m.svg && (m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R), m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S))
                        }
                        m.zOrigin = q;
                        for (h in m) m[h] < o && m[h] > -o && (m[h] = 0)
                    }
                    return d && (a._gsTransform = m, m.svg && (za && a.style[Ba] ? b.delayedCall(.001, function() {
                        Ta(a.style, Ba)
                    }) : !za && a.getAttribute("transform") && b.delayedCall(.001, function() {
                        a.removeAttribute("transform")
                    }))), m
                },
                Qa = function(a) {
                    var b, c, d = this.data,
                        e = -d.rotation * K,
                        f = e + d.skewX * K,
                        g = 1e5,
                        h = (Math.cos(e) * d.scaleX * g | 0) / g,
                        i = (Math.sin(e) * d.scaleX * g | 0) / g,
                        j = (Math.sin(f) * -d.scaleY * g | 0) / g,
                        k = (Math.cos(f) * d.scaleY * g | 0) / g,
                        l = this.t.style,
                        m = this.t.currentStyle;
                    if (m) {
                        c = i, i = -j, j = -c, b = m.filter, l.filter = "";
                        var n, o, q = this.t.offsetWidth,
                            r = this.t.offsetHeight,
                            s = "absolute" !== m.position,
                            t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k,
                            u = d.x + q * d.xPercent / 100,
                            v = d.y + r * d.yPercent / 100;
                        if (null != d.ox && (n = (d.oxp ? q * d.ox * .01 : d.ox) - q / 2, o = (d.oyp ? r * d.oy * .01 : d.oy) - r / 2, u += n - (n * h + o * i), v += o - (n * j + o * k)), s ? (n = q / 2, o = r / 2, t += ", Dx=" + (n - (n * h + o * i) + u) + ", Dy=" + (o - (n * j + o * k) + v) + ")") : t += ", sizingMethod='auto expand')", -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.filter = b.replace(H, t) : l.filter = t + " " + b, (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === t.indexOf("Dx=0, Dy=0") || x.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter")), !s) {
                            var y, z, A, B = 8 > p ? 1 : -1;
                            for (n = d.ieOffsetX || 0, o = d.ieOffsetY || 0, d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + u), d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + v), va = 0; 4 > va; va++) z = ea[va], y = m[z], c = -1 !== y.indexOf("px") ? parseFloat(y) : _(this.t, z, parseFloat(y), y.replace(w, "")) || 0, A = c !== d[z] ? 2 > va ? -d.ieOffsetX : -d.ieOffsetY : 2 > va ? n - d.ieOffsetX : o - d.ieOffsetY, l[z] = (d[z] = Math.round(c - A * (0 === va || 2 === va ? 1 : B))) + "px"
                        }
                    }
                },
                Ra = R.set3DTransformRatio = R.setTransformRatio = function(a) {
                    var b, c, d, e, f, g, h, i, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z = this.data,
                        A = this.t.style,
                        B = z.rotation,
                        C = z.rotationX,
                        D = z.rotationY,
                        E = z.scaleX,
                        F = z.scaleY,
                        G = z.scaleZ,
                        H = z.x,
                        I = z.y,
                        J = z.z,
                        L = z.svg,
                        M = z.perspective,
                        N = z.force3D;
                    if (((1 === a || 0 === a) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !N) && !J && !M && !D && !C && 1 === G || za && L || !Ea) return void(B || z.skewX || L ? (B *= K, x = z.skewX * K, y = 1e5, b = Math.cos(B) * E, e = Math.sin(B) * E, c = Math.sin(B - x) * -F, f = Math.cos(B - x) * F, x && "simple" === z.skewType && (s = Math.tan(x - z.skewY * K), s = Math.sqrt(1 + s * s), c *= s, f *= s, z.skewY && (s = Math.tan(z.skewY * K), s = Math.sqrt(1 + s * s), b *= s, e *= s)), L && (H += z.xOrigin - (z.xOrigin * b + z.yOrigin * c) + z.xOffset, I += z.yOrigin - (z.xOrigin * e + z.yOrigin * f) + z.yOffset, za && (z.xPercent || z.yPercent) && (p = this.t.getBBox(), H += .01 * z.xPercent * p.width, I += .01 * z.yPercent * p.height), p = 1e-6, p > H && H > -p && (H = 0), p > I && I > -p && (I = 0)), u = (b * y | 0) / y + "," + (e * y | 0) / y + "," + (c * y | 0) / y + "," + (f * y | 0) / y + "," + H + "," + I + ")", L && za ? this.t.setAttribute("transform", "matrix(" + u) : A[Ba] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + u) : A[Ba] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + F + "," + H + "," + I + ")");
                    if (n && (p = 1e-4, p > E && E > -p && (E = G = 2e-5), p > F && F > -p && (F = G = 2e-5), !M || z.z || z.rotationX || z.rotationY || (M = 0)), B || z.skewX) B *= K, q = b = Math.cos(B), r = e = Math.sin(B), z.skewX && (B -= z.skewX * K, q = Math.cos(B), r = Math.sin(B), "simple" === z.skewType && (s = Math.tan((z.skewX - z.skewY) * K), s = Math.sqrt(1 + s * s), q *= s, r *= s, z.skewY && (s = Math.tan(z.skewY * K), s = Math.sqrt(1 + s * s), b *= s, e *= s))), c = -r, f = q;
                    else {
                        if (!(D || C || 1 !== G || M || L)) return void(A[Ba] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") + H + "px," + I + "px," + J + "px)" + (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));
                        b = f = 1, c = e = 0
                    }
                    j = 1, d = g = h = i = k = l = 0, m = M ? -1 / M : 0, o = z.zOrigin, p = 1e-6, v = ",", w = "0", B = D * K, B && (q = Math.cos(B), r = Math.sin(B), h = -r, k = m * -r, d = b * r, g = e * r, j = q, m *= q, b *= q, e *= q), B = C * K, B && (q = Math.cos(B), r = Math.sin(B), s = c * q + d * r, t = f * q + g * r, i = j * r, l = m * r, d = c * -r + d * q, g = f * -r + g * q, j *= q, m *= q, c = s, f = t), 1 !== G && (d *= G, g *= G, j *= G, m *= G), 1 !== F && (c *= F, f *= F, i *= F, l *= F), 1 !== E && (b *= E, e *= E, h *= E, k *= E), (o || L) && (o && (H += d * -o, I += g * -o, J += j * -o + o), L && (H += z.xOrigin - (z.xOrigin * b + z.yOrigin * c) + z.xOffset, I += z.yOrigin - (z.xOrigin * e + z.yOrigin * f) + z.yOffset), p > H && H > -p && (H = w), p > I && I > -p && (I = w), p > J && J > -p && (J = 0)), u = z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "matrix3d(", u += (p > b && b > -p ? w : b) + v + (p > e && e > -p ? w : e) + v + (p > h && h > -p ? w : h), u += v + (p > k && k > -p ? w : k) + v + (p > c && c > -p ? w : c) + v + (p > f && f > -p ? w : f), C || D || 1 !== G ? (u += v + (p > i && i > -p ? w : i) + v + (p > l && l > -p ? w : l) + v + (p > d && d > -p ? w : d), u += v + (p > g && g > -p ? w : g) + v + (p > j && j > -p ? w : j) + v + (p > m && m > -p ? w : m) + v) : u += ",0,0,0,0,1,0,", u += H + v + I + v + J + v + (M ? 1 + -J / M : 1) + ")", A[Ba] = u
                };
            j = Fa.prototype, j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0, j.scaleX = j.scaleY = j.scaleZ = 1, xa("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                parser: function(a, b, c, d, f, h, i) {
                    if (d._lastParsedTransform === i) return f;
                    d._lastParsedTransform = i;
                    var j;
                    "function" == typeof i[c] && (j = i[c], i[c] = b);
                    var k, l, m, n, o, p, s, t, u, v = a._gsTransform,
                        w = a.style,
                        x = 1e-6,
                        y = Aa.length,
                        z = i,
                        A = {},
                        B = "transformOrigin",
                        C = Pa(a, e, !0, z.parseTransform),
                        D = z.transform && ("function" == typeof z.transform ? z.transform(r, q) : z.transform);
                    if (d._transform = C, D && "string" == typeof D && Ba) l = P.style, l[Ba] = D, l.display = "block", l.position = "absolute", N.body.appendChild(P), k = Pa(P, null, !1), C.svg && (p = C.xOrigin, s = C.yOrigin, k.x -= C.xOffset, k.y -= C.yOffset, (z.transformOrigin || z.svgOrigin) && (D = {}, Ka(a, ga(z.transformOrigin), D, z.svgOrigin, z.smoothOrigin, !0), p = D.xOrigin, s = D.yOrigin, k.x -= D.xOffset - C.xOffset, k.y -= D.yOffset - C.yOffset), (p || s) && (t = Oa(P, !0), k.x -= p - (p * t[0] + s * t[2]), k.y -= s - (p * t[1] + s * t[3]))), N.body.removeChild(P), k.perspective || (k.perspective = C.perspective), null != z.xPercent && (k.xPercent = ia(z.xPercent, C.xPercent)), null != z.yPercent && (k.yPercent = ia(z.yPercent, C.yPercent));
                    else if ("object" == typeof z) {
                        if (k = {
                                scaleX: ia(null != z.scaleX ? z.scaleX : z.scale, C.scaleX),
                                scaleY: ia(null != z.scaleY ? z.scaleY : z.scale, C.scaleY),
                                scaleZ: ia(z.scaleZ, C.scaleZ),
                                x: ia(z.x, C.x),
                                y: ia(z.y, C.y),
                                z: ia(z.z, C.z),
                                xPercent: ia(z.xPercent, C.xPercent),
                                yPercent: ia(z.yPercent, C.yPercent),
                                perspective: ia(z.transformPerspective, C.perspective)
                            }, o = z.directionalRotation, null != o)
                            if ("object" == typeof o)
                                for (l in o) z[l] = o[l];
                            else z.rotation = o;
                            "string" == typeof z.x && -1 !== z.x.indexOf("%") && (k.x = 0, k.xPercent = ia(z.x, C.xPercent)), "string" == typeof z.y && -1 !== z.y.indexOf("%") && (k.y = 0, k.yPercent = ia(z.y, C.yPercent)), k.rotation = ja("rotation" in z ? z.rotation : "shortRotation" in z ? z.shortRotation + "_short" : "rotationZ" in z ? z.rotationZ : C.rotation - C.skewY, C.rotation - C.skewY, "rotation", A), Ea && (k.rotationX = ja("rotationX" in z ? z.rotationX : "shortRotationX" in z ? z.shortRotationX + "_short" : C.rotationX || 0, C.rotationX, "rotationX", A), k.rotationY = ja("rotationY" in z ? z.rotationY : "shortRotationY" in z ? z.shortRotationY + "_short" : C.rotationY || 0, C.rotationY, "rotationY", A)), k.skewX = ja(z.skewX, C.skewX - C.skewY), (k.skewY = ja(z.skewY, C.skewY)) && (k.skewX += k.skewY, k.rotation += k.skewY)
                    }
                    for (Ea && null != z.force3D && (C.force3D = z.force3D, n = !0), C.skewType = z.skewType || C.skewType || g.defaultSkewType, m = C.force3D || C.z || C.rotationX || C.rotationY || k.z || k.rotationX || k.rotationY || k.perspective, m || null == z.scale || (k.scaleZ = 1); --y > -1;) u = Aa[y], D = k[u] - C[u], (D > x || -x > D || null != z[u] || null != M[u]) && (n = !0, f = new sa(C, u, C[u], D, f), u in A && (f.e = A[u]), f.xs0 = 0, f.plugin = h, d._overwriteProps.push(f.n));
                    return D = z.transformOrigin, C.svg && (D || z.svgOrigin) && (p = C.xOffset, s = C.yOffset, Ka(a, ga(D), k, z.svgOrigin, z.smoothOrigin), f = ta(C, "xOrigin", (v ? C : k).xOrigin, k.xOrigin, f, B), f = ta(C, "yOrigin", (v ? C : k).yOrigin, k.yOrigin, f, B), (p !== C.xOffset || s !== C.yOffset) && (f = ta(C, "xOffset", v ? p : C.xOffset, C.xOffset, f, B), f = ta(C, "yOffset", v ? s : C.yOffset, C.yOffset, f, B)), D = za ? null : "0px 0px"), (D || Ea && m && C.zOrigin) && (Ba ? (n = !0, u = Da, D = (D || $(a, u, e, !1, "50% 50%")) + "", f = new sa(w, u, 0, 0, f, -1, B), f.b = w[u], f.plugin = h, Ea ? (l = C.zOrigin, D = D.split(" "), C.zOrigin = (D.length > 2 && (0 === l || "0px" !== D[2]) ? parseFloat(D[2]) : l) || 0, f.xs0 = f.e = D[0] + " " + (D[1] || "50%") + " 0px", f = new sa(C, "zOrigin", 0, 0, f, -1, f.n), f.b = l, f.xs0 = f.e = C.zOrigin) : f.xs0 = f.e = D) : ga(D + "", C)), n && (d._transformType = C.svg && za || !m && 3 !== this._transformType ? 2 : 3), j && (i[c] = j), f
                },
                prefix: !0
            }), xa("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), xa("borderRadius", {
                defaultValue: "0px",
                parser: function(a, b, c, f, g, h) {
                    b = this.format(b);
                    var i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        z = a.style;
                    for (q = parseFloat(a.offsetWidth), r = parseFloat(a.offsetHeight), i = b.split(" "), j = 0; j < y.length; j++) this.p.indexOf("border") && (y[j] = Y(y[j])), m = l = $(a, y[j], e, !1, "0px"), -1 !== m.indexOf(" ") && (l = m.split(" "), m = l[0], l = l[1]), n = k = i[j], o = parseFloat(m), t = m.substr((o + "").length), u = "=" === n.charAt(1), u ? (p = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), p *= parseFloat(n), s = n.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(n), s = n.substr((p + "").length)), "" === s && (s = d[c] || t), s !== t && (v = _(a, "borderLeft", o, t), w = _(a, "borderTop", o, t), "%" === s ? (m = v / q * 100 + "%", l = w / r * 100 + "%") : "em" === s ? (x = _(a, "borderLeft", 1, "em"), m = v / x + "em", l = w / x + "em") : (m = v + "px", l = w + "px"), u && (n = parseFloat(m) + p + s, k = parseFloat(l) + p + s)), g = ua(z, y[j], m + " " + l, n + " " + k, !1, "0px", g);
                    return g
                },
                prefix: !0,
                formatter: pa("0px 0px 0px 0px", !1, !0)
            }), xa("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                defaultValue: "0px",
                parser: function(a, b, c, d, f, g) {
                    return ua(a.style, c, this.format($(a, c, e, !1, "0px 0px")), this.format(b), !1, "0px", f)
                },
                prefix: !0,
                formatter: pa("0px 0px", !1, !0)
            }), xa("backgroundPosition", {
                defaultValue: "0 0",
                parser: function(a, b, c, d, f, g) {
                    var h, i, j, k, l, m, n = "background-position",
                        o = e || Z(a, null),
                        q = this.format((o ? p ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
                        r = this.format(b);
                    if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && r.split(",").length < 2 && (m = $(a, "backgroundImage").replace(D, ""), m && "none" !== m)) {
                        for (h = q.split(" "), i = r.split(" "), Q.setAttribute("src", m), j = 2; --j > -1;) q = h[j], k = -1 !== q.indexOf("%"), k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - Q.width : a.offsetHeight - Q.height, h[j] = k ? parseFloat(q) / 100 * l + "px" : parseFloat(q) / l * 100 + "%");
                        q = h.join(" ")
                    }
                    return this.parseComplex(a.style, q, r, f, g)
                },
                formatter: ga
            }), xa("backgroundSize", {
                defaultValue: "0 0",
                formatter: function(a) {
                    return a += "", ga(-1 === a.indexOf(" ") ? a + " " + a : a)
                }
            }), xa("perspective", {
                defaultValue: "0px",
                prefix: !0
            }), xa("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), xa("transformStyle", {
                prefix: !0
            }), xa("backfaceVisibility", {
                prefix: !0
            }), xa("userSelect", {
                prefix: !0
            }), xa("margin", {
                parser: qa("marginTop,marginRight,marginBottom,marginLeft")
            }), xa("padding", {
                parser: qa("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), xa("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function(a, b, c, d, f, g) {
                    var h, i, j;
                    return 9 > p ? (i = a.currentStyle, j = 8 > p ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")", b = this.format(b).split(",").join(j)) : (h = this.format($(a, this.p, e, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, h, b, f, g)
                }
            }), xa("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), xa("autoRound,strictUnits", {
                parser: function(a, b, c, d, e) {
                    return e
                }
            }), xa("border", {
                defaultValue: "0px solid #000",
                parser: function(a, b, c, d, f, g) {
                    var h = $(a, "borderTopWidth", e, !1, "0px"),
                        i = this.format(b).split(" "),
                        j = i[0].replace(w, "");
                    return "px" !== j && (h = parseFloat(h) / _(a, "borderTopWidth", 1, j) + j), this.parseComplex(a.style, this.format(h + " " + $(a, "borderTopStyle", e, !1, "solid") + " " + $(a, "borderTopColor", e, !1, "#000")), i.join(" "), f, g)
                },
                color: !0,
                formatter: function(a) {
                    var b = a.split(" ");
                    return b[0] + " " + (b[1] || "solid") + " " + (a.match(oa) || ["#000"])[0]
                }
            }), xa("borderWidth", {
                parser: qa("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), xa("float,cssFloat,styleFloat", {
                parser: function(a, b, c, d, e, f) {
                    var g = a.style,
                        h = "cssFloat" in g ? "cssFloat" : "styleFloat";
                    return new sa(g, h, 0, 0, e, -1, c, !1, 0, g[h], b)
                }
            });
            var Sa = function(a) {
                var b, c = this.t,
                    d = c.filter || $(this.data, "filter") || "",
                    e = this.s + this.c * a | 0;
                100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), b = !$(this.data, "filter")) : (c.filter = d.replace(z, ""), b = !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), -1 === d.indexOf("pacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(x, "opacity=" + e))
            };
            xa("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function(a, b, c, d, f, g) {
                    var h = parseFloat($(a, "opacity", e, !1, "1")),
                        i = a.style,
                        j = "autoAlpha" === c;
                    return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h), j && 1 === h && "hidden" === $(a, "visibility", e) && 0 !== b && (h = 0), T ? f = new sa(i, "opacity", h, b - h, f) : (f = new sa(i, "opacity", 100 * h, 100 * (b - h), f), f.xn1 = j ? 1 : 0, i.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = a, f.plugin = g, f.setRatio = Sa), j && (f = new sa(i, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit"), f.xs0 = "inherit", d._overwriteProps.push(f.n), d._overwriteProps.push(c)), f
                }
            });
            var Ta = function(a, b) {
                    b && (a.removeProperty ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) && (b = "-" + b), a.removeProperty(b.replace(B, "-$1").toLowerCase())) : a.removeAttribute(b))
                },
                Ua = function(a) {
                    if (this.t._gsClassPT = this, 1 === a || 0 === a) {
                        this.t.setAttribute("class", 0 === a ? this.b : this.e);
                        for (var b = this.data, c = this.t.style; b;) b.v ? c[b.p] = b.v : Ta(c, b.p), b = b._next;
                        1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                };
            xa("className", {
                parser: function(a, b, d, f, g, h, i) {
                    var j, k, l, m, n, o = a.getAttribute("class") || "",
                        p = a.style.cssText;
                    if (g = f._classNamePT = new sa(a, d, 0, 0, g, 2), g.setRatio = Ua, g.pr = -11, c = !0, g.b = o, k = ba(a, e), l = a._gsClassPT) {
                        for (m = {}, n = l.data; n;) m[n.p] = 1, n = n._next;
                        l.setRatio(1)
                    }
                    return a._gsClassPT = g, g.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), a.setAttribute("class", g.e), j = ca(a, k, ba(a), i, m), a.setAttribute("class", o), g.data = j.firstMPT, a.style.cssText = p, g = g.xfirst = f.parse(a, j.difs, g, h)
                }
            });
            var Va = function(a) {
                if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var b, c, d, e, f, g = this.t.style,
                        h = i.transform.parse;
                    if ("all" === this.e) g.cssText = "", e = !0;
                    else
                        for (b = this.e.split(" ").join("").split(","), d = b.length; --d > -1;) c = b[d], i[c] && (i[c].parse === h ? e = !0 : c = "transformOrigin" === c ? Da : i[c].p), Ta(g, c);
                    e && (Ta(g, Ba), f = this.t._gsTransform, f && (f.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                }
            };
            for (xa("clearProps", {
                    parser: function(a, b, d, e, f) {
                        return f = new sa(a, d, 0, 0, f, 2), f.setRatio = Va, f.e = b, f.pr = -10, f.data = e._tween, c = !0, f
                    }
                }), j = "bezier,throwProps,physicsProps,physics2D".split(","), va = j.length; va--;) ya(j[va]);
            j = g.prototype, j._firstPT = j._lastParsedTransform = j._transform = null, j._onInitTween = function(a, b, h, j) {
                if (!a.nodeType) return !1;
                this._target = q = a, this._tween = h, this._vars = b, r = j, k = b.autoRound, c = !1, d = b.suffixMap || g.suffixMap, e = Z(a, ""), f = this._overwriteProps;
                var n, p, s, t, u, v, w, x, z, A = a.style;
                if (l && "" === A.zIndex && (n = $(a, "zIndex", e), ("auto" === n || "" === n) && this._addLazySet(A, "zIndex", 0)), "string" == typeof b && (t = A.cssText, n = ba(a, e), A.cssText = t + ";" + b, n = ca(a, n, ba(a)).difs, !T && y.test(b) && (n.opacity = parseFloat(RegExp.$1)), b = n, A.cssText = t), b.className ? this._firstPT = p = i.className.parse(a, b.className, "className", this, null, null, b) : this._firstPT = p = this.parse(a, b, null), this._transformType) {
                    for (z = 3 === this._transformType, Ba ? m && (l = !0, "" === A.zIndex && (w = $(a, "zIndex", e), ("auto" === w || "" === w) && this._addLazySet(A, "zIndex", 0)), o && this._addLazySet(A, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (z ? "visible" : "hidden"))) : A.zoom = 1, s = p; s && s._next;) s = s._next;
                    x = new sa(a, "transform", 0, 0, null, 2), this._linkCSSP(x, null, s), x.setRatio = Ba ? Ra : Qa, x.data = this._transform || Pa(a, e, !0), x.tween = h, x.pr = -1, f.pop()
                }
                if (c) {
                    for (; p;) {
                        for (v = p._next, s = t; s && s.pr > p.pr;) s = s._next;
                        (p._prev = s ? s._prev : u) ? p._prev._next = p: t = p, (p._next = s) ? s._prev = p : u = p, p = v
                    }
                    this._firstPT = t
                }
                return !0
            }, j.parse = function(a, b, c, f) {
                var g, h, j, l, m, n, o, p, s, t, u = a.style;
                for (g in b) n = b[g], "function" == typeof n && (n = n(r, q)), h = i[g], h ? c = h.parse(a, n, g, this, c, f, b) : (m = $(a, g, e) + "", s = "string" == typeof n, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || s && A.test(n) ? (s || (n = ma(n), n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"), c = ua(u, g, m, n, !0, "transparent", c, 0, f)) : s && J.test(n) ? c = ua(u, g, m, n, !0, null, c, 0, f) : (j = parseFloat(m), o = j || 0 === j ? m.substr((j + "").length) : "", ("" === m || "auto" === m) && ("width" === g || "height" === g ? (j = fa(a, g, e), o = "px") : "left" === g || "top" === g ? (j = aa(a, g, e), o = "px") : (j = "opacity" !== g ? 0 : 1, o = "")), t = s && "=" === n.charAt(1), t ? (l = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), l *= parseFloat(n), p = n.replace(w, "")) : (l = parseFloat(n), p = s ? n.replace(w, "") : ""), "" === p && (p = g in d ? d[g] : o), n = l || 0 === l ? (t ? l + j : l) + p : b[g], o !== p && "" !== p && (l || 0 === l) && j && (j = _(a, g, j, o), "%" === p ? (j /= _(a, g, 100, "%") / 100, b.strictUnits !== !0 && (m = j + "%")) : "em" === p || "rem" === p || "vw" === p || "vh" === p ? j /= _(a, g, 1, p) : "px" !== p && (l = _(a, g, l, p), p = "px"), t && (l || 0 === l) && (n = l + j + p)), t && (l += j), !j && 0 !== j || !l && 0 !== l ? void 0 !== u[g] && (n || n + "" != "NaN" && null != n) ? (c = new sa(u, g, l || j || 0, 0, c, -1, g, !1, 0, m, n), c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : V("invalid " + g + " tween value: " + b[g]) : (c = new sa(u, g, j, l - j, c, 0, g, k !== !1 && ("px" === p || "zIndex" === g), 0, m, n), c.xs0 = p))), f && c && !c.plugin && (c.plugin = f);
                return c
            }, j.setRatio = function(a) {
                var b, c, d, e = this._firstPT,
                    f = 1e-6;
                if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                        for (; e;) {
                            if (b = e.c * a + e.s, e.r ? b = Math.round(b) : f > b && b > -f && (b = 0), e.type)
                                if (1 === e.type)
                                    if (d = e.l, 2 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                                    else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                            else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;
                            else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;
                            else {
                                for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                                e.t[e.p] = c
                            } else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a);
                            else e.t[e.p] = b + e.xs0;
                            e = e._next
                        } else
                            for (; e;) 2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next;
                    else
                        for (; e;) {
                            if (2 !== e.type)
                                if (e.r && -1 !== e.type)
                                    if (b = Math.round(e.s + e.c), e.type) {
                                        if (1 === e.type) {
                                            for (d = e.l, c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                                            e.t[e.p] = c
                                        }
                                    } else e.t[e.p] = b + e.xs0;
                            else e.t[e.p] = e.e;
                            else e.setRatio(a);
                            e = e._next
                        }
            }, j._enableTransforms = function(a) {
                this._transform = this._transform || Pa(this._target, e, !0), this._transformType = this._transform.svg && za || !a && 3 !== this._transformType ? 2 : 3
            };
            var Wa = function(a) {
                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            };
            j._addLazySet = function(a, b, c) {
                var d = this._firstPT = new sa(a, b, 0, 0, this._firstPT, 2);
                d.e = c, d.setRatio = Wa, d.data = this
            }, j._linkCSSP = function(a, b, c, d) {
                return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = c), a
            }, j._mod = function(a) {
                for (var b = this._firstPT; b;) "function" == typeof a[b.p] && a[b.p] === Math.round && (b.r = 1), b = b._next
            }, j._kill = function(b) {
                var c, d, e, f = b;
                if (b.autoAlpha || b.alpha) {
                    f = {};
                    for (d in b) f[d] = b[d];
                    f.opacity = 1, f.autoAlpha && (f.visibility = 1)
                }
                for (b.className && (c = this._classNamePT) && (e = c.xfirst, e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), c = this._firstPT; c;) c.plugin && c.plugin !== d && c.plugin._kill && (c.plugin._kill(b), d = c.plugin), c = c._next;
                return a.prototype._kill.call(this, f)
            };
            var Xa = function(a, b, c) {
                var d, e, f, g;
                if (a.slice)
                    for (e = a.length; --e > -1;) Xa(a[e], b, c);
                else
                    for (d = a.childNodes, e = d.length; --e > -1;) f = d[e], g = f.type, f.style && (b.push(ba(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Xa(f, b, c)
            };
            return g.cascadeTo = function(a, c, d) {
                var e, f, g, h, i = b.to(a, c, d),
                    j = [i],
                    k = [],
                    l = [],
                    m = [],
                    n = b._internals.reservedProps;
                for (a = i._targets || i.target, Xa(a, k, m), i.render(c, !0, !0), Xa(a, l), i.render(0, !0, !0), i._enabled(!0), e = m.length; --e > -1;)
                    if (f = ca(m[e], k[e], l[e]), f.firstMPT) {
                        f = f.difs;
                        for (g in d) n[g] && (f[g] = d[g]);
                        h = {};
                        for (g in f) h[g] = k[e][g];
                        j.push(b.fromTo(m[e], c, h, f))
                    }
                return j
            }, a.activate([g]), g
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(a) {
        "use strict";
        var b = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[a]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], b) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = b())
    }("CSSPlugin");
/*!
 * VERSION: 0.4.0
 * DATE: 2016-07-09
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
! function(a) {
    "use strict";
    var b = a.GreenSockGlobals || a,
        c = function(a) {
            var c, d = a.split("."),
                e = b;
            for (c = 0; c < d.length; c++) e[d[c]] = e = e[d[c]] || {};
            return e
        },
        d = c("com.greensock.utils"),
        e = function(a) {
            var b = a.nodeType,
                c = "";
            if (1 === b || 9 === b || 11 === b) {
                if ("string" == typeof a.textContent) return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
            } else if (3 === b || 4 === b) return a.nodeValue;
            return c
        },
        f = document,
        g = f.defaultView ? f.defaultView.getComputedStyle : function() {},
        h = /([A-Z])/g,
        i = function(a, b, c, d) {
            var e;
            return (c = c || g(a, null)) ? (a = c.getPropertyValue(b.replace(h, "-$1").toLowerCase()), e = a || c.length ? a : c[b]) : a.currentStyle && (c = a.currentStyle, e = c[b]), d ? e : parseInt(e, 10) || 0
        },
        j = function(a) {
            return a.length && a[0] && (a[0].nodeType && a[0].style && !a.nodeType || a[0].length && a[0][0]) ? !0 : !1
        },
        k = function(a) {
            var b, c, d, e = [],
                f = a.length;
            for (b = 0; f > b; b++)
                if (c = a[b], j(c))
                    for (d = c.length, d = 0; d < c.length; d++) e.push(c[d]);
                else e.push(c);
            return e
        },
        l = /(?:\r|\n|\s\s|\t\t)/g,
        m = ")eefec303079ad17405c",
        n = /(?:<br>|<br\/>|<br \/>)/gi,
        o = f.all && !f.addEventListener,
        p = " style='position:relative;display:inline-block;" + (o ? "*display:inline;*zoom:1;'" : "'"),
        q = function(a, b) {
            a = a || "";
            var c = -1 !== a.indexOf("++"),
                d = 1;
            return c && (a = a.split("++").join("")),
                function() {
                    return "<" + b + p + (a ? " class='" + a + (c ? d++ : "") + "'>" : ">")
                }
        },
        r = d.SplitText = b.SplitText = function(a, b) {
            if ("string" == typeof a && (a = r.selector(a)), !a) throw "cannot split a null element.";
            this.elements = j(a) ? k(a) : [a], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = b || {}, this.split(b)
        },
        s = function(a, b, c) {
            var d = a.nodeType;
            if (1 === d || 9 === d || 11 === d)
                for (a = a.firstChild; a; a = a.nextSibling) s(a, b, c);
            else(3 === d || 4 === d) && (a.nodeValue = a.nodeValue.split(b).join(c))
        },
        t = function(a, b) {
            for (var c = b.length; --c > -1;) a.push(b[c])
        },
        u = function(a, b, c, d, h) {
            n.test(a.innerHTML) && (a.innerHTML = a.innerHTML.replace(n, m));
            var j, k, o, p, r, u, v, w, x, y, z, A, B, C, D = e(a),
                E = b.span ? "span" : "div",
                F = b.type || b.split || "chars,words,lines",
                G = -1 !== F.indexOf("lines") ? [] : null,
                H = -1 !== F.indexOf("words"),
                I = -1 !== F.indexOf("chars"),
                J = "absolute" === b.position || b.absolute === !0,
                K = b.wordDelimiter || " ",
                L = " " !== K ? "" : J ? "­ " : " ",
                M = -999,
                N = g(a),
                O = i(a, "paddingLeft", N),
                P = i(a, "borderBottomWidth", N) + i(a, "borderTopWidth", N),
                Q = i(a, "borderLeftWidth", N) + i(a, "borderRightWidth", N),
                R = i(a, "paddingTop", N) + i(a, "paddingBottom", N),
                S = i(a, "paddingLeft", N) + i(a, "paddingRight", N),
                T = i(a, "textAlign", N, !0),
                U = .2 * i(a, "fontSize"),
                V = a.clientHeight,
                W = a.clientWidth,
                X = b.span ? "</span>" : "</div>",
                Y = q(b.wordsClass, E),
                Z = q(b.charsClass, E),
                $ = -1 !== (b.linesClass || "").indexOf("++"),
                _ = b.linesClass,
                aa = -1 !== D.indexOf("<"),
                ba = !0,
                ca = [],
                da = [],
                ea = [];
            for (!b.reduceWhiteSpace != !1 && (D = D.replace(l, "")), $ && (_ = _.split("++").join("")), aa && (D = D.split("<").join("{{LT}}")), j = D.length, p = Y(), r = 0; j > r; r++)
                if (v = D.charAt(r), ")" === v && D.substr(r, 20) === m) p += (ba ? X : "") + "<BR/>", ba = !1, r !== j - 20 && D.substr(r + 20, 20) !== m && (p += " " + Y(), ba = !0), r += 19;
                else if (v === K && D.charAt(r - 1) !== K && r !== j - 1 && D.substr(r - 20, 20) !== m) {
                for (p += ba ? X : "", ba = !1; D.charAt(r + 1) === K;) p += L, r++;
                (")" !== D.charAt(r + 1) || D.substr(r + 1, 20) !== m) && (p += L + Y(), ba = !0)
            } else "{" === v && "{{LT}}" === D.substr(r, 6) ? (p += I ? Z() + "{{LT}}</" + E + ">" : "{{LT}}", r += 5) : p += I && " " !== v ? Z() + v + "</" + E + ">" : v;
            for (a.innerHTML = p + (ba ? X : ""), aa && s(a, "{{LT}}", "<"), u = a.getElementsByTagName("*"), j = u.length, w = [], r = 0; j > r; r++) w[r] = u[r];
            if (G || J)
                for (r = 0; j > r; r++) x = w[r], o = x.parentNode === a, (o || J || I && !H) && (y = x.offsetTop, G && o && Math.abs(y - M) > U && "BR" !== x.nodeName && (k = [], G.push(k), M = y), J && (x._x = x.offsetLeft, x._y = y, x._w = x.offsetWidth, x._h = x.offsetHeight), G && (H !== o && I || (k.push(x), x._x -= O), o && r && (w[r - 1]._wordEnd = !0), "BR" === x.nodeName && x.nextSibling && "BR" === x.nextSibling.nodeName && G.push([])));
            for (r = 0; j > r; r++) x = w[r], o = x.parentNode === a, "BR" !== x.nodeName ? (J && (A = x.style, H || o || (x._x += x.parentNode._x, x._y += x.parentNode._y), A.left = x._x + "px", A.top = x._y + "px", A.position = "absolute", A.display = "block", A.width = x._w + 1 + "px", A.height = x._h + "px"), H ? o && "" !== x.innerHTML ? da.push(x) : I && ca.push(x) : o ? (a.removeChild(x), w.splice(r--, 1), j--) : !o && I && (y = !G && !J && x.nextSibling, a.appendChild(x), y || a.appendChild(f.createTextNode(" ")), ca.push(x))) : G || J ? (a.removeChild(x), w.splice(r--, 1), j--) : H || a.appendChild(x);
            if (G) {
                for (J && (z = f.createElement(E), a.appendChild(z), B = z.offsetWidth + "px", y = z.offsetParent === a ? 0 : a.offsetLeft, a.removeChild(z)), A = a.style.cssText, a.style.cssText = "display:none;"; a.firstChild;) a.removeChild(a.firstChild);
                for (C = " " === K && (!J || !H && !I), r = 0; r < G.length; r++) {
                    for (k = G[r], z = f.createElement(E), z.style.cssText = "display:block;text-align:" + T + ";position:" + (J ? "absolute;" : "relative;"), _ && (z.className = _ + ($ ? r + 1 : "")), ea.push(z), j = k.length, u = 0; j > u; u++) "BR" !== k[u].nodeName && (x = k[u], z.appendChild(x), C && (x._wordEnd || H) && z.appendChild(f.createTextNode(" ")), J && (0 === u && (z.style.top = x._y + "px", z.style.left = O + y + "px"), x.style.top = "0px", y && (x.style.left = x._x - y + "px")));
                    0 === j && (z.innerHTML = " "), H || I || (z.innerHTML = e(z).split(String.fromCharCode(160)).join(" ")), J && (z.style.width = B, z.style.height = x._h + "px"), a.appendChild(z)
                }
                a.style.cssText = A
            }
            J && (V > a.clientHeight && (a.style.height = V - R + "px", a.clientHeight < V && (a.style.height = V + P + "px")), W > a.clientWidth && (a.style.width = W - S + "px", a.clientWidth < W && (a.style.width = W + Q + "px"))), t(c, ca), t(d, da), t(h, ea)
        },
        v = r.prototype;
    v.split = function(a) {
        this.isSplit && this.revert(), this.vars = a || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var b = this.elements.length; --b > -1;) this._originals[b] = this.elements[b].innerHTML, u(this.elements[b], this.vars, this.chars, this.words, this.lines);
        return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
    }, v.revert = function() {
        if (!this._originals) throw "revert() call wasn't scoped properly.";
        for (var a = this._originals.length; --a > -1;) this.elements[a].innerHTML = this._originals[a];
        return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
    }, r.selector = a.$ || a.jQuery || function(b) {
        var c = a.$ || a.jQuery;
        return c ? (r.selector = c, c(b)) : "undefined" == typeof document ? b : document.querySelectorAll ? document.querySelectorAll(b) : document.getElementById("#" === b.charAt(0) ? b.substr(1) : b)
    }, r.version = "0.4.0"
}(_gsScope),
function(a) {
    "use strict";
    var b = function() {
        return (_gsScope.GreenSockGlobals || _gsScope)[a]
    };
    "function" == typeof define && define.amd ? define([], b) : "undefined" != typeof module && module.exports && (module.exports = b())
}("SplitText");
try {
    window.GreenSockGlobals = null;
    window._gsQueue = null;
    window._gsDefine = null;
    delete(window.GreenSockGlobals);
    delete(window._gsQueue);
    delete(window._gsDefine);
} catch (e) {}
try {
    window.GreenSockGlobals = oldgs;
    window._gsQueue = oldgs_queue;
} catch (e) {}
if (window.tplogs == true)
    try {
        console.groupEnd();
    } catch (e) {}
    (function(e, t) {
        e.waitForImages = {
            hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage"]
        };
        e.expr[":"].uncached = function(t) {
            var n = document.createElement("img");
            n.src = t.src;
            return e(t).is('img[src!=""]') && !n.complete
        };
        e.fn.waitForImages = function(t, n, r) {
            if (e.isPlainObject(arguments[0])) {
                n = t.each;
                r = t.waitForAll;
                t = t.finished
            }
            t = t || e.noop;
            n = n || e.noop;
            r = !!r;
            if (!e.isFunction(t) || !e.isFunction(n)) {
                throw new TypeError("An invalid callback was supplied.")
            }
            return this.each(function() {
                var i = e(this),
                    s = [];
                if (r) {
                    var o = e.waitForImages.hasImageProperties || [],
                        u = /url\((['"]?)(.*?)\1\)/g;
                    i.find("*").each(function() {
                        var t = e(this);
                        if (t.is("img:uncached")) {
                            s.push({
                                src: t.attr("src"),
                                element: t[0]
                            })
                        }
                        e.each(o, function(e, n) {
                            var r = t.css(n);
                            if (!r) {
                                return true
                            }
                            var i;
                            while (i = u.exec(r)) {
                                s.push({
                                    src: i[2],
                                    element: t[0]
                                })
                            }
                        })
                    })
                } else {
                    i.find("img:uncached").each(function() {
                        s.push({
                            src: this.src,
                            element: this
                        })
                    })
                }
                var f = s.length,
                    l = 0;
                if (f == 0) {
                    t.call(i[0])
                }
                e.each(s, function(r, s) {
                    var o = new Image;
                    e(o).bind("load error", function(e) {
                        l++;
                        n.call(s.element, l, f, e.type == "load");
                        if (l == f) {
                            t.call(i[0]);
                            return false
                        }
                    });
                    o.src = s.src
                })
            })
        };
    })(jQuery);
! function(jQuery, undefined) {
    "use strict";
    var version = {
        core: "5.4.1",
        "revolution.extensions.actions.min.js": "2.0.4",
        "revolution.extensions.carousel.min.js": "1.2.1",
        "revolution.extensions.kenburn.min.js": "1.2.0",
        "revolution.extensions.layeranimation.min.js": "3.5.2",
        "revolution.extensions.navigation.min.js": "1.3.3",
        "revolution.extensions.parallax.min.js": "2.2.0",
        "revolution.extensions.slideanims.min.js": "1.6",
        "revolution.extensions.video.min.js": "2.0.3"
    };
    jQuery.fn.extend({
        revolution: function(a) {
            var b = {
                delay: 9e3,
                responsiveLevels: 4064,
                visibilityLevels: [2048, 1024, 778, 480],
                gridwidth: 960,
                gridheight: 500,
                minHeight: 0,
                autoHeight: "off",
                sliderType: "standard",
                sliderLayout: "auto",
                fullScreenAutoWidth: "off",
                fullScreenAlignForce: "off",
                fullScreenOffsetContainer: "",
                fullScreenOffset: "0",
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLimit: 0,
                hideSliderAtLimit: 0,
                disableProgressBar: "off",
                stopAtSlide: -1,
                stopAfterLoops: -1,
                shadow: 0,
                dottedOverlay: "none",
                startDelay: 0,
                lazyType: "smart",
                spinner: "spinner0",
                shuffle: "off",
                viewPort: {
                    enable: !1,
                    outof: "wait",
                    visible_area: "60%",
                    presize: !1
                },
                fallbacks: {
                    isJoomla: !1,
                    panZoomDisableOnMobile: "off",
                    simplifyAll: "on",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: !0,
                    ignoreHeightChanges: "off",
                    ignoreHeightChangesSize: 0,
                    allowHTML5AutoPlayOnAndroid: !0
                },
                parallax: {
                    type: "off",
                    levels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
                    origo: "enterpoint",
                    speed: 400,
                    bgparallax: "off",
                    opacity: "on",
                    disable_onmobile: "off",
                    ddd_shadow: "on",
                    ddd_bgfreeze: "off",
                    ddd_overflow: "visible",
                    ddd_layer_overflow: "visible",
                    ddd_z_correction: 65,
                    ddd_path: "mouse"
                },
                scrolleffect: {
                    fade: "off",
                    blur: "off",
                    grayscale: "off",
                    maxblur: 10,
                    on_layers: "off",
                    on_slidebg: "off",
                    on_static_layers: "off",
                    on_parallax_layers: "off",
                    on_parallax_static_layers: "off",
                    direction: "both",
                    multiplicator: 1.35,
                    multiplicator_layers: .5,
                    tilt: 30,
                    disable_on_mobile: "on"
                },
                carousel: {
                    easing: punchgs.Power3.easeInOut,
                    speed: 800,
                    showLayersAllTime: "off",
                    horizontal_align: "center",
                    vertical_align: "center",
                    infinity: "on",
                    space: 0,
                    maxVisibleItems: 3,
                    stretch: "off",
                    fadeout: "on",
                    maxRotation: 0,
                    minScale: 0,
                    vary_fade: "off",
                    vary_rotation: "on",
                    vary_scale: "off",
                    border_radius: "0px",
                    padding_top: 0,
                    padding_bottom: 0
                },
                navigation: {
                    keyboardNavigation: "off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    onHoverStop: "on",
                    touch: {
                        touchenabled: "off",
                        touchOnDesktop: "off",
                        swipe_treshold: 75,
                        swipe_min_touches: 1,
                        drag_block_vertical: !1,
                        swipe_direction: "horizontal"
                    },
                    arrows: {
                        style: "",
                        enable: !1,
                        hide_onmobile: !1,
                        hide_onleave: !0,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        tmp: "",
                        rtl: !1,
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0,
                            container: "slider"
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0,
                            container: "slider"
                        }
                    },
                    bullets: {
                        container: "slider",
                        rtl: !1,
                        style: "",
                        enable: !1,
                        hide_onmobile: !1,
                        hide_onleave: !0,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "horizontal",
                        h_align: "left",
                        v_align: "center",
                        space: 0,
                        h_offset: 20,
                        v_offset: 0,
                        tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>'
                    },
                    thumbnails: {
                        container: "slider",
                        rtl: !1,
                        style: "",
                        enable: !1,
                        width: 100,
                        height: 50,
                        min_width: 100,
                        wrapper_padding: 2,
                        wrapper_color: "#f5f5f5",
                        wrapper_opacity: 1,
                        tmp: '<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',
                        visibleAmount: 5,
                        hide_onmobile: !1,
                        hide_onleave: !0,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "horizontal",
                        span: !1,
                        position: "inner",
                        space: 2,
                        h_align: "left",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    },
                    tabs: {
                        container: "slider",
                        rtl: !1,
                        style: "",
                        enable: !1,
                        width: 100,
                        min_width: 100,
                        height: 50,
                        wrapper_padding: 10,
                        wrapper_color: "#f5f5f5",
                        wrapper_opacity: 1,
                        tmp: '<span class="tp-tab-image"></span>',
                        visibleAmount: 5,
                        hide_onmobile: !1,
                        hide_onleave: !0,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "horizontal",
                        span: !1,
                        space: 0,
                        position: "inner",
                        h_align: "left",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    }
                },
                extensions: "extensions/",
                extensions_suffix: ".min.js",
                debugMode: !1
            };
            return a = jQuery.extend(!0, {}, b, a), this.each(function() {
                var b = jQuery(this);
                a.minHeight = a.minHeight != undefined ? parseInt(a.minHeight, 0) : a.minHeight, a.scrolleffect.on = "on" === a.scrolleffect.fade || "on" === a.scrolleffect.blur || "on" === a.scrolleffect.grayscale, "hero" == a.sliderType && b.find(">ul>li").each(function(a) {
                    a > 0 && jQuery(this).remove()
                }), a.jsFileLocation = a.jsFileLocation || getScriptLocation("themepunch.revolution.min.js"), a.jsFileLocation = a.jsFileLocation + a.extensions, a.scriptsneeded = getNeededScripts(a, b), a.curWinRange = 0, a.rtl = !0, a.navigation != undefined && a.navigation.touch != undefined && (a.navigation.touch.swipe_min_touches = a.navigation.touch.swipe_min_touches > 5 ? 1 : a.navigation.touch.swipe_min_touches), jQuery(this).on("scriptsloaded", function() {
                    return a.modulesfailing ? (b.html('<div style="margin:auto;line-height:40px;font-size:14px;color:#fff;padding:15px;background:#e74c3c;margin:20px 0px;">!! Error at loading Slider Revolution 5.0 Extrensions.' + a.errorm + "</div>").show(), !1) : (_R.migration != undefined && (a = _R.migration(b, a)), punchgs.force3D = !0, "on" !== a.simplifyAll && punchgs.TweenLite.lagSmoothing(1e3, 16), prepareOptions(b, a), void initSlider(b, a))
                }), b[0].opt = a, waitForScripts(b, a)
            })
        },
        revremoveslide: function(a) {
            return this.each(function() {
                var b = jQuery(this),
                    c = b[0].opt;
                if (!(a < 0 || a > c.slideamount) && b != undefined && b.length > 0 && jQuery("body").find("#" + b.attr("id")).length > 0 && c && c.li.length > 0 && (a > 0 || a <= c.li.length)) {
                    var d = jQuery(c.li[a]),
                        e = d.data("index"),
                        f = !1;
                    c.slideamount = c.slideamount - 1, c.realslideamount = c.realslideamount - 1, removeNavWithLiref(".tp-bullet", e, c), removeNavWithLiref(".tp-tab", e, c), removeNavWithLiref(".tp-thumb", e, c), d.hasClass("active-revslide") && (f = !0), d.remove(), c.li = removeArray(c.li, a), c.carousel && c.carousel.slides && (c.carousel.slides = removeArray(c.carousel.slides, a)), c.thumbs = removeArray(c.thumbs, a), _R.updateNavIndexes && _R.updateNavIndexes(c), f && b.revnext(), punchgs.TweenLite.set(c.li, {
                        minWidth: "99%"
                    }), punchgs.TweenLite.set(c.li, {
                        minWidth: "100%"
                    })
                }
            })
        },
        revaddcallback: function(a) {
            return this.each(function() {
                this.opt && (this.opt.callBackArray === undefined && (this.opt.callBackArray = new Array), this.opt.callBackArray.push(a))
            })
        },
        revgetparallaxproc: function() {
            return jQuery(this)[0].opt.scrollproc
        },
        revdebugmode: function() {
            return this.each(function() {
                var a = jQuery(this);
                a[0].opt.debugMode = !0, containerResized(a, a[0].opt)
            })
        },
        revscroll: function(a) {
            return this.each(function() {
                var b = jQuery(this);
                jQuery("body,html").animate({
                    scrollTop: b.offset().top + b.height() - a + "px"
                }, {
                    duration: 400
                })
            })
        },
        revredraw: function(a) {
            return this.each(function() {
                var a = jQuery(this);
                containerResized(a, a[0].opt)
            })
        },
        revkill: function(a) {
            var b = this,
                c = jQuery(this);
            if (punchgs.TweenLite.killDelayedCallsTo(_R.showHideNavElements), c != undefined && c.length > 0 && jQuery("body").find("#" + c.attr("id")).length > 0) {
                c.data("conthover", 1), c.data("conthover-changed", 1), c.trigger("revolution.slide.onpause");
                var d = c.parent().find(".tp-bannertimer"),
                    e = c[0].opt;
                e.tonpause = !0, c.trigger("stoptimer"), punchgs.TweenLite.killTweensOf(c.find("*"), !1), punchgs.TweenLite.killTweensOf(c, !1), c.unbind("hover, mouseover, mouseenter,mouseleave, resize");
                var f = "resize.revslider-" + c.attr("id");
                jQuery(window).off(f), c.find("*").each(function() {
                    var a = jQuery(this);
                    a.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"), a.off("on, hover, mouseenter,mouseleave,mouseover, resize"), a.data("mySplitText", null), a.data("ctl", null), a.data("tween") != undefined && a.data("tween").kill(), a.data("kenburn") != undefined && a.data("kenburn").kill(), a.data("timeline_out") != undefined && a.data("timeline_out").kill(), a.data("timeline") != undefined && a.data("timeline").kill(), a.remove(), a.empty(), a = null
                }), punchgs.TweenLite.killTweensOf(c.find("*"), !1), punchgs.TweenLite.killTweensOf(c, !1), d.remove();
                try {
                    c.closest(".forcefullwidth_wrapper_tp_banner").remove()
                } catch (a) {}
                try {
                    c.closest(".rev_slider_wrapper").remove()
                } catch (a) {}
                try {
                    c.remove()
                } catch (a) {}
                return c.empty(), c.html(), c = null, e = null, delete b.c, delete b.opt, !0
            }
            return !1
        },
        revpause: function() {
            return this.each(function() {
                var a = jQuery(this);
                a != undefined && a.length > 0 && jQuery("body").find("#" + a.attr("id")).length > 0 && (a.data("conthover", 1), a.data("conthover-changed", 1), a.trigger("revolution.slide.onpause"), a[0].opt.tonpause = !0, a.trigger("stoptimer"))
            })
        },
        revresume: function() {
            return this.each(function() {
                var a = jQuery(this);
                a != undefined && a.length > 0 && jQuery("body").find("#" + a.attr("id")).length > 0 && (a.data("conthover", 0), a.data("conthover-changed", 1), a.trigger("revolution.slide.onresume"), a[0].opt.tonpause = !1, a.trigger("starttimer"))
            })
        },
        revstart: function() {
            var a = jQuery(this);
            if (a != undefined && a.length > 0 && jQuery("body").find("#" + a.attr("id")).length > 0 && a[0].opt !== undefined) return a[0].opt.sliderisrunning ? (console.log("Slider Is Running Already"), !1) : (runSlider(a, a[0].opt), !0)
        },
        revnext: function() {
            return this.each(function() {
                var a = jQuery(this);
                a != undefined && a.length > 0 && jQuery("body").find("#" + a.attr("id")).length > 0 && _R.callingNewSlide(a, 1)
            })
        },
        revprev: function() {
            return this.each(function() {
                var a = jQuery(this);
                a != undefined && a.length > 0 && jQuery("body").find("#" + a.attr("id")).length > 0 && _R.callingNewSlide(a, -1)
            })
        },
        revmaxslide: function() {
            return jQuery(this).find(".tp-revslider-mainul >li").length
        },
        revcurrentslide: function() {
            var a = jQuery(this);
            if (a != undefined && a.length > 0 && jQuery("body").find("#" + a.attr("id")).length > 0) return parseInt(a[0].opt.act, 0) + 1
        },
        revlastslide: function() {
            return jQuery(this).find(".tp-revslider-mainul >li").length
        },
        revshowslide: function(a) {
            return this.each(function() {
                var b = jQuery(this);
                b != undefined && b.length > 0 && jQuery("body").find("#" + b.attr("id")).length > 0 && _R.callingNewSlide(b, "to" + (a - 1))
            })
        },
        revcallslidewithid: function(a) {
            return this.each(function() {
                var b = jQuery(this);
                b != undefined && b.length > 0 && jQuery("body").find("#" + b.attr("id")).length > 0 && _R.callingNewSlide(b, a)
            })
        }
    });
    var _R = jQuery.fn.revolution;
    jQuery.extend(!0, _R, {
        getversion: function() {
            return version
        },
        compare_version: function(a) {
            return "stop" != a.check && (_R.getversion().core < a.min_core ? (a.check === undefined && (console.log("%cSlider Revolution Warning (Core:" + _R.getversion().core + ")", "color:#c0392b;font-weight:bold;"), console.log("%c     Core is older than expected (" + a.min_core + ") from " + a.alias, "color:#333"), console.log("%c     Please update Slider Revolution to the latest version.", "color:#333"), console.log("%c     It might be required to purge and clear Server/Client side Caches.", "color:#333")), a.check = "stop") : _R.getversion()[a.name] != undefined && a.version < _R.getversion()[a.name] && (a.check === undefined && (console.log("%cSlider Revolution Warning (Core:" + _R.getversion().core + ")", "color:#c0392b;font-weight:bold;"), console.log("%c     " + a.alias + " (" + a.version + ") is older than requiered (" + _R.getversion()[a.name] + ")", "color:#333"), console.log("%c     Please update Slider Revolution to the latest version.", "color:#333"), console.log("%c     It might be required to purge and clear Server/Client side Caches.", "color:#333")), a.check = "stop")), a
        },
        currentSlideIndex: function(a) {
            var b = a.c.find(".active-revslide").index();
            return b = b == -1 ? 0 : b
        },
        simp: function(a, b, c) {
            var d = Math.abs(a) - Math.floor(Math.abs(a / b)) * b;
            return c ? d : a < 0 ? -1 * d : d
        },
        iOSVersion: function() {
            var a = !1;
            return navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) ? navigator.userAgent.match(/OS 4_\d like Mac OS X/i) && (a = !0) : a = !1, a
        },
        isIE: function(a, b) {
            var c = jQuery('<div style="display:none;"/>').appendTo(jQuery("body"));
            c.html("<!--[if " + (b || "") + " IE " + (a || "") + "]><a> </a><![endif]-->");
            var d = c.find("a").length;
            return c.remove(), d
        },
        is_mobile: function() {
            var a = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", , "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"],
                b = !1;
            for (var c in a) navigator.userAgent.split(a[c]).length > 1 && (b = !0);
            return b
        },
        is_android: function() {
            var a = ["android", "Android"],
                b = !1;
            for (var c in a) navigator.userAgent.split(a[c]).length > 1 && (b = !0);
            return b
        },
        callBackHandling: function(a, b, c) {
            try {
                a.callBackArray && jQuery.each(a.callBackArray, function(a, d) {
                    d && d.inmodule && d.inmodule === b && d.atposition && d.atposition === c && d.callback && d.callback.call()
                })
            } catch (a) {
                console.log("Call Back Failed")
            }
        },
        get_browser: function() {
            var c, a = navigator.appName,
                b = navigator.userAgent,
                d = b.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            return d && null != (c = b.match(/version\/([\.\d]+)/i)) && (d[2] = c[1]), d = d ? [d[1], d[2]] : [a, navigator.appVersion, "-?"], d[0]
        },
        get_browser_version: function() {
            var c, a = navigator.appName,
                b = navigator.userAgent,
                d = b.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            return d && null != (c = b.match(/version\/([\.\d]+)/i)) && (d[2] = c[1]), d = d ? [d[1], d[2]] : [a, navigator.appVersion, "-?"], d[1]
        },
        getHorizontalOffset: function(a, b) {
            var c = gWiderOut(a, ".outer-left"),
                d = gWiderOut(a, ".outer-right");
            switch (b) {
                case "left":
                    return c;
                case "right":
                    return d;
                case "both":
                    return c + d
            }
        },
        callingNewSlide: function(a, b) {
            var c = a.find(".next-revslide").length > 0 ? a.find(".next-revslide").index() : a.find(".processing-revslide").length > 0 ? a.find(".processing-revslide").index() : a.find(".active-revslide").index(),
                d = 0,
                e = a[0].opt;
            a.find(".next-revslide").removeClass("next-revslide"), a.find(".active-revslide").hasClass("tp-invisible-slide") && (c = e.last_shown_slide), b && jQuery.isNumeric(b) || b.match(/to/g) ? (1 === b || b === -1 ? (d = c + b, d = d < 0 ? e.slideamount - 1 : d >= e.slideamount ? 0 : d) : (b = jQuery.isNumeric(b) ? b : parseInt(b.split("to")[1], 0), d = b < 0 ? 0 : b > e.slideamount - 1 ? e.slideamount - 1 : b), a.find(".tp-revslider-slidesli:eq(" + d + ")").addClass("next-revslide")) : b && a.find(".tp-revslider-slidesli").each(function() {
                var a = jQuery(this);
                a.data("index") === b && a.addClass("next-revslide")
            }), d = a.find(".next-revslide").index(), a.trigger("revolution.nextslide.waiting"), c === d && c === e.last_shown_slide || d !== c && d != -1 ? swapSlide(a) : a.find(".next-revslide").removeClass("next-revslide")
        },
        slotSize: function(a, b) {
            b.slotw = Math.ceil(b.width / b.slots), "fullscreen" == b.sliderLayout ? b.sloth = Math.ceil(jQuery(window).height() / b.slots) : b.sloth = Math.ceil(b.height / b.slots), "on" == b.autoHeight && a !== undefined && "" !== a && (b.sloth = Math.ceil(a.height() / b.slots))
        },
        setSize: function(a) {
            var b = (a.top_outer || 0) + (a.bottom_outer || 0),
                c = parseInt(a.carousel.padding_top || 0, 0),
                d = parseInt(a.carousel.padding_bottom || 0, 0),
                e = a.gridheight[a.curWinRange],
                f = 0,
                g = a.nextSlide === -1 || a.nextSlide === undefined ? 0 : a.nextSlide;
            if (a.paddings = a.paddings === undefined ? {
                    top: parseInt(a.c.parent().css("paddingTop"), 0) || 0,
                    bottom: parseInt(a.c.parent().css("paddingBottom"), 0) || 0
                } : a.paddings, a.rowzones && a.rowzones.length > 0)
                for (var h = 0; h < a.rowzones[g].length; h++) f += a.rowzones[g][h][0].offsetHeight;
            if (e = e < a.minHeight ? a.minHeight : e, e = e < f ? f : e, "fullwidth" == a.sliderLayout && "off" == a.autoHeight && punchgs.TweenLite.set(a.c, {
                    maxHeight: e + "px"
                }), a.c.css({
                    marginTop: c,
                    marginBottom: d
                }), a.width = a.ul.width(), a.height = a.ul.height(), setScale(a), a.height = Math.round(a.gridheight[a.curWinRange] * (a.width / a.gridwidth[a.curWinRange])), a.height > a.gridheight[a.curWinRange] && "on" != a.autoHeight && (a.height = a.gridheight[a.curWinRange]), "fullscreen" == a.sliderLayout || a.infullscreenmode) {
                a.height = a.bw * a.gridheight[a.curWinRange];
                var j = (a.c.parent().width(), jQuery(window).height());
                if (a.fullScreenOffsetContainer != undefined) {
                    try {
                        var k = a.fullScreenOffsetContainer.split(",");
                        k && jQuery.each(k, function(a, b) {
                            j = jQuery(b).length > 0 ? j - jQuery(b).outerHeight(!0) : j
                        })
                    } catch (a) {}
                    try {
                        a.fullScreenOffset.split("%").length > 1 && a.fullScreenOffset != undefined && a.fullScreenOffset.length > 0 ? j -= jQuery(window).height() * parseInt(a.fullScreenOffset, 0) / 100 : a.fullScreenOffset != undefined && a.fullScreenOffset.length > 0 && (j -= parseInt(a.fullScreenOffset, 0))
                    } catch (a) {}
                }
                j = j < a.minHeight ? a.minHeight : j, j -= b, a.c.parent().height(j), a.c.closest(".rev_slider_wrapper").height(j), a.c.css({
                    height: "100%"
                }), a.height = j, a.minHeight != undefined && a.height < a.minHeight && (a.height = a.minHeight), a.height = parseInt(f, 0) > parseInt(a.height, 0) ? f : a.height
            } else a.minHeight != undefined && a.height < a.minHeight && (a.height = a.minHeight), a.height = parseInt(f, 0) > parseInt(a.height, 0) ? f : a.height, a.c.height(a.height);
            var l = {
                height: c + d + b + a.height + a.paddings.top + a.paddings.bottom
            };
            a.c.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css(l), a.c.closest(".rev_slider_wrapper").css(l), setScale(a)
        },
        enterInViewPort: function(a) {
            a.waitForCountDown && (countDown(a.c, a), a.waitForCountDown = !1), a.waitForFirstSlide && (swapSlide(a.c), a.waitForFirstSlide = !1, setTimeout(function() {
                a.c.removeClass("tp-waitforfirststart")
            }, 500)), "playing" != a.sliderlaststatus && a.sliderlaststatus != undefined || a.c.trigger("starttimer"), a.lastplayedvideos != undefined && a.lastplayedvideos.length > 0 && jQuery.each(a.lastplayedvideos, function(b, c) {
                _R.playVideo(c, a)
            })
        },
        leaveViewPort: function(a) {
            a.sliderlaststatus = a.sliderstatus, a.c.trigger("stoptimer"), a.playingvideos != undefined && a.playingvideos.length > 0 && (a.lastplayedvideos = jQuery.extend(!0, [], a.playingvideos), a.playingvideos && jQuery.each(a.playingvideos, function(b, c) {
                a.leaveViewPortBasedStop = !0, _R.stopVideo && _R.stopVideo(c, a)
            }))
        },
        unToggleState: function(a) {
            a != undefined && a.length > 0 && jQuery.each(a, function(a, b) {
                b.removeClass("rs-toggle-content-active")
            })
        },
        toggleState: function(a) {
            a != undefined && a.length > 0 && jQuery.each(a, function(a, b) {
                b.addClass("rs-toggle-content-active")
            })
        },
        swaptoggleState: function(a) {
            a != undefined && a.length > 0 && jQuery.each(a, function(a, b) {
                jQuery(b).hasClass("rs-toggle-content-active") ? jQuery(b).removeClass("rs-toggle-content-active") : jQuery(b).addClass("rs-toggle-content-active")
            })
        },
        lastToggleState: function(a) {
            var b = 0;
            return a != undefined && a.length > 0 && jQuery.each(a, function(a, c) {
                b = c.hasClass("rs-toggle-content-active")
            }), b
        }
    });
    var _ISM = _R.is_mobile(),
        _ANDROID = _R.is_android(),
        checkIDS = function(a, b) {
            a.anyid = a.anyid === undefined ? [] : a.anyid;
            var c = jQuery.inArray(b.attr("id"), a.anyid);
            if (c != -1) {
                var d = b.attr("id") + "_" + Math.round(9999 * Math.random());
                b.attr("id", d)
            }
            a.anyid.push(b.attr("id"))
        },
        removeArray = function(a, b) {
            var c = [];
            return jQuery.each(a, function(a, d) {
                a != b && c.push(d)
            }), c
        },
        removeNavWithLiref = function(a, b, c) {
            c.c.find(a).each(function() {
                var a = jQuery(this);
                a.data("liref") === b && a.remove()
            })
        },
        lAjax = function(a, b) {
            return !jQuery("body").data(a) && (b.filesystem ? (b.errorm === undefined && (b.errorm = "<br>Local Filesystem Detected !<br>Put this to your header:"), console.warn("Local Filesystem detected !"), b.errorm = b.errorm + '<br><script type="text/javascript" src="' + b.jsFileLocation + a + b.extensions_suffix + '"></script>', console.warn(b.jsFileLocation + a + b.extensions_suffix + " could not be loaded !"), console.warn("Please use a local Server or work online or make sure that you load all needed Libraries manually in your Document."), console.log(" "), b.modulesfailing = !0, !1) : (jQuery.ajax({
                url: b.jsFileLocation + a + b.extensions_suffix + "?version=" + version.core,
                dataType: "script",
                cache: !0,
                error: function(c) {
                    console.warn("Slider Revolution 5.0 Error !"), console.error("Failure at Loading:" + a + b.extensions_suffix + " on Path:" + b.jsFileLocation), console.info(c)
                }
            }), void jQuery("body").data(a, !0)))
        },
        getNeededScripts = function(a, b) {
            var c = new Object,
                d = a.navigation;
            return c.kenburns = !1, c.parallax = !1, c.carousel = !1, c.navigation = !1, c.videos = !1, c.actions = !1, c.layeranim = !1, c.migration = !1, b.data("version") && b.data("version").toString().match(/5./gi) ? (b.find("img").each(function() {
                "on" == jQuery(this).data("kenburns") && (c.kenburns = !0)
            }), ("carousel" == a.sliderType || "on" == d.keyboardNavigation || "on" == d.mouseScrollNavigation || "on" == d.touch.touchenabled || d.arrows.enable || d.bullets.enable || d.thumbnails.enable || d.tabs.enable) && (c.navigation = !0), b.find(".tp-caption, .tp-static-layer, .rs-background-video-layer").each(function() {
                var a = jQuery(this);
                (a.data("ytid") != undefined || a.find("iframe").length > 0 && a.find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && (c.videos = !0), (a.data("vimeoid") != undefined || a.find("iframe").length > 0 && a.find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && (c.videos = !0), a.data("actions") !== undefined && (c.actions = !0), c.layeranim = !0
            }), b.find("li").each(function() {
                jQuery(this).data("link") && jQuery(this).data("link") != undefined && (c.layeranim = !0, c.actions = !0)
            }), !c.videos && (b.find(".rs-background-video-layer").length > 0 || b.find(".tp-videolayer").length > 0 || b.find(".tp-audiolayer").length > 0 || b.find("iframe").length > 0 || b.find("video").length > 0) && (c.videos = !0), "carousel" == a.sliderType && (c.carousel = !0), ("off" !== a.parallax.type || a.viewPort.enable || "true" == a.viewPort.enable || "true" === a.scrolleffect.on || a.scrolleffect.on) && (c.parallax = !0)) : (c.kenburns = !0, c.parallax = !0, c.carousel = !1, c.navigation = !0, c.videos = !0, c.actions = !0, c.layeranim = !0, c.migration = !0), "hero" == a.sliderType && (c.carousel = !1, c.navigation = !1), window.location.href.match(/file:/gi) && (c.filesystem = !0, a.filesystem = !0), c.videos && "undefined" == typeof _R.isVideoPlaying && lAjax("revolution.extension.video", a), c.carousel && "undefined" == typeof _R.prepareCarousel && lAjax("revolution.extension.carousel", a), c.carousel || "undefined" != typeof _R.animateSlide || lAjax("revolution.extension.slideanims", a), c.actions && "undefined" == typeof _R.checkActions && lAjax("revolution.extension.actions", a), c.layeranim && "undefined" == typeof _R.handleStaticLayers && lAjax("revolution.extension.layeranimation", a), c.kenburns && "undefined" == typeof _R.stopKenBurn && lAjax("revolution.extension.kenburn", a), c.navigation && "undefined" == typeof _R.createNavigation && lAjax("revolution.extension.navigation", a), c.migration && "undefined" == typeof _R.migration && lAjax("revolution.extension.migration", a), c.parallax && "undefined" == typeof _R.checkForParallax && lAjax("revolution.extension.parallax", a), a.addons != undefined && a.addons.length > 0 && jQuery.each(a.addons, function(b, c) {
                "object" == typeof c && c.fileprefix != undefined && lAjax(c.fileprefix, a)
            }), c
        },
        waitForScripts = function(a, b) {
            var c = !0,
                d = b.scriptsneeded;
            b.addons != undefined && b.addons.length > 0 && jQuery.each(b.addons, function(a, b) {
                "object" == typeof b && b.init != undefined && _R[b.init] === undefined && (c = !1)
            }), d.filesystem || "undefined" != typeof punchgs && c && (!d.kenburns || d.kenburns && "undefined" != typeof _R.stopKenBurn) && (!d.navigation || d.navigation && "undefined" != typeof _R.createNavigation) && (!d.carousel || d.carousel && "undefined" != typeof _R.prepareCarousel) && (!d.videos || d.videos && "undefined" != typeof _R.resetVideo) && (!d.actions || d.actions && "undefined" != typeof _R.checkActions) && (!d.layeranim || d.layeranim && "undefined" != typeof _R.handleStaticLayers) && (!d.migration || d.migration && "undefined" != typeof _R.migration) && (!d.parallax || d.parallax && "undefined" != typeof _R.checkForParallax) && (d.carousel || !d.carousel && "undefined" != typeof _R.animateSlide) ? a.trigger("scriptsloaded") : setTimeout(function() {
                waitForScripts(a, b)
            }, 50)
        },
        getScriptLocation = function(a) {
            var b = new RegExp("themepunch.revolution.min.js", "gi"),
                c = "";
            return jQuery("script").each(function() {
                var a = jQuery(this).attr("src");
                a && a.match(b) && (c = a)
            }), c = c.replace("jquery.themepunch.revolution.min.js", ""), c = c.replace("jquery.themepunch.revolution.js", ""), c = c.split("?")[0]
        },
        setCurWinRange = function(a, b) {
            var d = 9999,
                e = 0,
                f = 0,
                g = 0,
                h = jQuery(window).width(),
                i = b && 9999 == a.responsiveLevels ? a.visibilityLevels : a.responsiveLevels;
            i && i.length && jQuery.each(i, function(a, b) {
                h < b && (0 == e || e > b) && (d = b, g = a, e = b), h > b && e < b && (e = b, f = a)
            }), e < d && (g = f), b ? a.forcedWinRange = g : a.curWinRange = g
        },
        prepareOptions = function(a, b) {
            b.carousel.maxVisibleItems = b.carousel.maxVisibleItems < 1 ? 999 : b.carousel.maxVisibleItems, b.carousel.vertical_align = "top" === b.carousel.vertical_align ? "0%" : "bottom" === b.carousel.vertical_align ? "100%" : "50%"
        },
        gWiderOut = function(a, b) {
            var c = 0;
            return a.find(b).each(function() {
                var a = jQuery(this);
                !a.hasClass("tp-forcenotvisible") && c < a.outerWidth() && (c = a.outerWidth())
            }), c
        },
        initSlider = function(container, opt) {
            return container != undefined && (container.data("aimg") != undefined && ("enabled" == container.data("aie8") && _R.isIE(8) || "enabled" == container.data("amobile") && _ISM) && container.html('<img class="tp-slider-alternative-image" src="' + container.data("aimg") + '">'), container.find(">ul").addClass("tp-revslider-mainul"), opt.c = container, opt.ul = container.find(".tp-revslider-mainul"), opt.ul.find(">li").each(function(a) {
                var b = jQuery(this);
                "on" == b.data("hideslideonmobile") && _ISM && b.remove(), (b.data("invisible") || b.data("invisible") === !0) && (b.addClass("tp-invisible-slide"), b.appendTo(opt.ul))
            }), opt.addons != undefined && opt.addons.length > 0 && jQuery.each(opt.addons, function(i, obj) {
                "object" == typeof obj && obj.init != undefined && _R[obj.init](eval(obj.params))
            }), opt.cid = container.attr("id"), opt.ul.css({
                visibility: "visible"
            }), opt.slideamount = opt.ul.find(">li").not(".tp-invisible-slide").length, opt.realslideamount = opt.ul.find(">li").length, opt.slayers = container.find(".tp-static-layers"), opt.slayers.data("index", "staticlayers"), void(1 != opt.waitForInit && (container[0].opt = opt, runSlider(container, opt))))
        },
        onFullScreenChange = function() {
            jQuery("body").data("rs-fullScreenMode", !jQuery("body").data("rs-fullScreenMode")), jQuery("body").data("rs-fullScreenMode") && setTimeout(function() {
                jQuery(window).trigger("resize")
            }, 200)
        },
        runSlider = function(a, b) {
            if (b.sliderisrunning = !0, b.ul.find(">li").each(function(a) {
                    jQuery(this).data("originalindex", a)
                }), b.allli = b.ul.find(">li"), jQuery.each(b.allli, function(a, b) {
                    var b = jQuery(b);
                    b.data("origindex", b.index())
                }), b.li = b.ul.find(">li").not(".tp-invisible-slide"), "on" == b.shuffle) {
                var c = new Object,
                    d = b.ul.find(">li:first-child");
                c.fstransition = d.data("fstransition"), c.fsmasterspeed = d.data("fsmasterspeed"), c.fsslotamount = d.data("fsslotamount");
                for (var e = 0; e < b.slideamount; e++) {
                    var f = Math.round(Math.random() * b.slideamount);
                    b.ul.find(">li:eq(" + f + ")").prependTo(b.ul)
                }
                var g = b.ul.find(">li:first-child");
                g.data("fstransition", c.fstransition), g.data("fsmasterspeed", c.fsmasterspeed), g.data("fsslotamount", c.fsslotamount), b.allli = b.ul.find(">li"), b.li = b.ul.find(">li").not(".tp-invisible-slide")
            }
            if (b.inli = b.ul.find(">li.tp-invisible-slide"), b.thumbs = new Array, b.slots = 4, b.act = -1, b.firststart = 1, b.loadqueue = new Array, b.syncload = 0, b.conw = a.width(), b.conh = a.height(), b.responsiveLevels.length > 1 ? b.responsiveLevels[0] = 9999 : b.responsiveLevels = 9999, jQuery.each(b.allli, function(a, c) {
                    var c = jQuery(c),
                        d = c.find(".rev-slidebg") || c.find("img").first(),
                        e = 0;
                    c.addClass("tp-revslider-slidesli"), c.data("index") === undefined && c.data("index", "rs-" + Math.round(999999 * Math.random()));
                    var f = new Object;
                    f.params = new Array, f.id = c.data("index"), f.src = c.data("thumb") !== undefined ? c.data("thumb") : d.data("lazyload") !== undefined ? d.data("lazyload") : d.attr("src"), c.data("title") !== undefined && f.params.push({
                        from: RegExp("\\{\\{title\\}\\}", "g"),
                        to: c.data("title")
                    }), c.data("description") !== undefined && f.params.push({
                        from: RegExp("\\{\\{description\\}\\}", "g"),
                        to: c.data("description")
                    });
                    for (var e = 1; e <= 10; e++) c.data("param" + e) !== undefined && f.params.push({
                        from: RegExp("\\{\\{param" + e + "\\}\\}", "g"),
                        to: c.data("param" + e)
                    });
                    if (b.thumbs.push(f), c.data("link") != undefined) {
                        var g = c.data("link"),
                            h = c.data("target") || "_self",
                            i = "back" === c.data("slideindex") ? 0 : 60,
                            j = c.data("linktoslide"),
                            k = j;
                        j != undefined && "next" != j && "prev" != j && b.allli.each(function() {
                            var a = jQuery(this);
                            a.data("origindex") + 1 == k && (j = a.data("index"))
                        }), "slide" != g && (j = "no");
                        var l = '<div class="tp-caption slidelink" style="cursor:pointer;width:100%;height:100%;z-index:' + i + ';" data-x="center" data-y="center" data-basealign="slide" ',
                            m = "scroll_under" === j ? '[{"event":"click","action":"scrollbelow","offset":"100px","delay":"0"}]' : "prev" === j ? '[{"event":"click","action":"jumptoslide","slide":"prev","delay":"0.2"}]' : "next" === j ? '[{"event":"click","action":"jumptoslide","slide":"next","delay":"0.2"}]' : '[{"event":"click","action":"jumptoslide","slide":"' + j + '","delay":"0.2"}]',
                            n = ' data-frames=\'[{"delay":0,"speed":100,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]\'';
                        l = "no" == j ? l + n + " >" : l + "data-actions='" + m + "'" + n + " >", l += '<a style="width:100%;height:100%;display:block"', l = "slide" != g ? l + ' target="' + h + '" href="' + g + '"' : l, l += '><span style="width:100%;height:100%;display:block"></span></a></div>', c.append(l)
                    }
                }), b.rle = b.responsiveLevels.length || 1, b.gridwidth = cArray(b.gridwidth, b.rle), b.gridheight = cArray(b.gridheight, b.rle), "on" == b.simplifyAll && (_R.isIE(8) || _R.iOSVersion()) && (a.find(".tp-caption").each(function() {
                    var a = jQuery(this);
                    a.removeClass("customin customout").addClass("fadein fadeout"), a.data("splitin", ""), a.data("speed", 400)
                }), b.allli.each(function() {
                    var a = jQuery(this);
                    a.data("transition", "fade"), a.data("masterspeed", 500), a.data("slotamount", 1);
                    var b = a.find(".rev-slidebg") || a.find(">img").first();
                    b.data("kenburns", "off")
                })), b.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), b.autoHeight = "fullscreen" == b.sliderLayout ? "on" : b.autoHeight, "fullwidth" == b.sliderLayout && "off" == b.autoHeight && a.css({
                    maxHeight: b.gridheight[b.curWinRange] + "px"
                }), "auto" != b.sliderLayout && 0 == a.closest(".forcefullwidth_wrapper_tp_banner").length && ("fullscreen" !== b.sliderLayout || "on" != b.fullScreenAutoWidth)) {
                var h = a.parent(),
                    i = h.css("marginBottom"),
                    j = h.css("marginTop"),
                    k = a.attr("id") + "_forcefullwidth";
                i = i === undefined ? 0 : i, j = j === undefined ? 0 : j, h.wrap('<div class="forcefullwidth_wrapper_tp_banner" id="' + k + '" style="position:relative;width:100%;height:auto;margin-top:' + j + ";margin-bottom:" + i + '"></div>'), a.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + a.height() + 'px"></div>'), a.parent().css({
                    marginTop: "0px",
                    marginBottom: "0px"
                }), a.parent().css({
                    position: "absolute"
                })
            }
            if (b.shadow !== undefined && b.shadow > 0 && (a.parent().addClass("tp-shadow" + b.shadow), a.parent().append('<div class="tp-shadowcover"></div>'), a.parent().find(".tp-shadowcover").css({
                    backgroundColor: a.parent().css("backgroundColor"),
                    backgroundImage: a.parent().css("backgroundImage")
                })), setCurWinRange(b), setCurWinRange(b, !0), !a.hasClass("revslider-initialised")) {
                a.addClass("revslider-initialised"), a.addClass("tp-simpleresponsive"), a.attr("id") == undefined && a.attr("id", "revslider-" + Math.round(1e3 * Math.random() + 5)), checkIDS(b, a), b.firefox13 = !1, b.ie = !jQuery.support.opacity, b.ie9 = 9 == document.documentMode, b.origcd = b.delay;
                var l = jQuery.fn.jquery.split("."),
                    m = parseFloat(l[0]),
                    n = parseFloat(l[1]);
                parseFloat(l[2] || "0");
                1 == m && n < 7 && a.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + l + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"), m > 1 && (b.ie = !1);
                var p = new Object;
                p.addedyt = 0, p.addedvim = 0, p.addedvid = 0, b.scrolleffect.on && (b.scrolleffect.layers = new Array), a.find(".tp-caption, .rs-background-video-layer").each(function(a) {
                    var c = jQuery(this),
                        d = c.data(),
                        e = d.autoplayonlyfirsttime,
                        f = d.autoplay,
                        g = d.videomp4 !== undefined || d.videowebm !== undefined || d.videoogv !== undefined,
                        h = c.hasClass("tp-audiolayer"),
                        i = d.videoloop,
                        j = !0,
                        k = !1;
                    d.startclasses = c.attr("class"), d.isparallaxlayer = d.startclasses.indexOf("rs-parallax") >= 0, c.hasClass("tp-static-layer") && _R.handleStaticLayers && (_R.handleStaticLayers(c, b), b.scrolleffect.on && ("on" === b.scrolleffect.on_parallax_static_layers && d.isparallaxlayer || "on" === b.scrolleffect.on_static_layers && !d.isparallaxlayer) && (k = !0), j = !1);
                    var l = c.data("noposteronmobile") || c.data("noPosterOnMobile") || c.data("posteronmobile") || c.data("posterOnMobile") || c.data("posterOnMObile");
                    c.data("noposteronmobile", l);
                    var m = 0;
                    if (c.find("iframe").each(function() {
                            punchgs.TweenLite.set(jQuery(this), {
                                autoAlpha: 0
                            }), m++
                        }), m > 0 && c.data("iframes", !0), c.hasClass("tp-caption")) {
                        var n = c.hasClass("slidelink") ? "width:100% !important;height:100% !important;" : "",
                            o = c.data(),
                            q = o.type,
                            r = "row" === q || "column" === q ? "relative" : "absolute",
                            s = "";
                        "row" === q ? (c.addClass("rev_row").removeClass("tp-resizeme"), s = "rev_row_wrap") : "column" === q ? (s = "rev_column", c.addClass("rev_column_inner").removeClass("tp-resizeme"), c.data("width", "auto"), punchgs.TweenLite.set(c, {
                            width: "auto"
                        })) : "group" === q && c.removeClass("tp-resizeme");
                        var t = "",
                            u = "";
                        "row" !== q && "group" !== q && "column" !== q ? (t = "display:" + c.css("display") + ";", c.closest(".rev_column").length > 0 ? (c.addClass("rev_layer_in_column"), j = !1) : c.closest(".rev_group").length > 0 && (c.addClass("rev_layer_in_group"), j = !1)) : "column" === q && (j = !1), o.wrapper_class !== undefined && (s = s + " " + o.wrapper_class), o.wrapper_id !== undefined && (u = 'id="' + o.wrapper_id + '"'), c.wrap("<div " + u + ' class="tp-parallax-wrap ' + s + '" style="' + n + "position:" + r + ";" + t + ';visibility:hidden"><div class="tp-loop-wrap" style="' + n + "position:" + r + ";" + t + ';"><div class="tp-mask-wrap" style="' + n + "position:" + r + ";" + t + ';" ></div></div></div>'), j && b.scrolleffect.on && ("on" === b.scrolleffect.on_parallax_layers && d.isparallaxlayer || "on" === b.scrolleffect.on_layers && !d.isparallaxlayer) && b.scrolleffect.layers.push(c.parent()), k && b.scrolleffect.layers.push(c.parent()), "column" === q && (c.append('<div class="rev_column_bg rev_column_bg_man_sized" style="display:none"></div>'), c.closest(".tp-parallax-wrap").append('<div class="rev_column_bg rev_column_bg_auto_sized"></div>'));
                        var v = ["pendulum", "rotate", "slideloop", "pulse", "wave"],
                            w = c.closest(".tp-loop-wrap");
                        jQuery.each(v, function(a, b) {
                            var d = c.find(".rs-" + b),
                                e = d.data() || "";
                            "" != e && (w.data(e), w.addClass("rs-" + b), d.children(0).unwrap(), c.data("loopanimation", "on"))
                        }), c.attr("id") === undefined && c.attr("id", "layer-" + Math.round(999999999 * Math.random())), checkIDS(b, c), punchgs.TweenLite.set(c, {
                            visibility: "hidden"
                        })
                    }
                    var x = c.data("actions");
                    x !== undefined && _R.checkActions(c, b, x), checkHoverDependencies(c, b), _R.checkVideoApis && (p = _R.checkVideoApis(c, b, p)), !_ISM || _ANDROID && b.fallbacks.allowHTML5AutoPlayOnAndroid && g || (1 != e && "true" != e || (d.autoplayonlyfirsttime = !1, e = !1), 1 != f && "true" != f && "on" != f && "1sttime" != f || (d.autoplay = "off", f = "off")), h || 1 != e && "true" != e && "1sttime" != f || "loopandnoslidestop" == i || c.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-once"), h || 1 != f && "true" != f && "on" != f && "no1sttime" != f || "loopandnoslidestop" == i || c.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-always")
                }), a[0].addEventListener("mouseenter", function() {
                    a.trigger("tp-mouseenter"), b.overcontainer = !0
                }, {
                    passive: !0
                }), a[0].addEventListener("mouseover", function() {
                    a.trigger("tp-mouseover"), b.overcontainer = !0
                }, {
                    passive: !0
                }), a[0].addEventListener("mouseleave", function() {
                    a.trigger("tp-mouseleft"), b.overcontainer = !1
                }, {
                    passive: !0
                }), a.find(".tp-caption video").each(function(a) {
                    var b = jQuery(this);
                    b.removeClass("video-js vjs-default-skin"), b.attr("preload", ""), b.css({
                        display: "none"
                    })
                }), "standard" !== b.sliderType && (b.lazyType = "all"), loadImages(a.find(".tp-static-layers"), b, 0, !0), waitForCurrentImages(a.find(".tp-static-layers"), b, function() {
                    a.find(".tp-static-layers img").each(function() {
                        var a = jQuery(this),
                            c = a.data("lazyload") != undefined ? a.data("lazyload") : a.attr("src"),
                            d = getLoadObj(b, c);
                        a.attr("src", d.src)
                    })
                }), b.rowzones = [], b.allli.each(function(a) {
                    var c = jQuery(this);
                    b.rowzones[a] = [], c.find(".rev_row_zone").each(function() {
                        b.rowzones[a].push(jQuery(this))
                    }), "all" != b.lazyType && ("smart" != b.lazyType || 0 != a && 1 != a && a != b.slideamount && a != b.slideamount - 1) || (loadImages(c, b, a), waitForCurrentImages(c, b, function() {}))
                });
                var q = getUrlVars("#")[0];
                if (q.length < 9 && q.split("slide").length > 1) {
                    var r = parseInt(q.split("slide")[1], 0);
                    r < 1 && (r = 1), r > b.slideamount && (r = b.slideamount), b.startWithSlide = r - 1
                }
                a.append('<div class="tp-loader ' + b.spinner + '"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'), b.loader = a.find(".tp-loader"), 0 === a.find(".tp-bannertimer").length && a.append('<div class="tp-bannertimer" style="visibility:hidden"></div>'), a.find(".tp-bannertimer").css({
                    width: "0%"
                }), b.ul.css({
                    display: "block"
                }), prepareSlides(a, b), ("off" !== b.parallax.type || b.scrolleffect.on) && _R.checkForParallax && _R.checkForParallax(a, b), _R.setSize(b), "hero" !== b.sliderType && _R.createNavigation && _R.createNavigation(a, b), _R.resizeThumbsTabs && _R.resizeThumbsTabs && _R.resizeThumbsTabs(b), contWidthManager(b);
                var s = b.viewPort;
                b.inviewport = !1, s != undefined && s.enable && (jQuery.isNumeric(s.visible_area) || s.visible_area.indexOf("%") !== -1 && (s.visible_area = parseInt(s.visible_area) / 100), _R.scrollTicker && _R.scrollTicker(b, a)), "carousel" === b.sliderType && _R.prepareCarousel && (punchgs.TweenLite.set(b.ul, {
                    opacity: 0
                }), _R.prepareCarousel(b, new punchgs.TimelineLite, undefined, 0), b.onlyPreparedSlide = !0), setTimeout(function() {
                    if (!s.enable || s.enable && b.inviewport || s.enable && !b.inviewport && "wait" == !s.outof) swapSlide(a);
                    else if (b.c.addClass("tp-waitforfirststart"), b.waitForFirstSlide = !0, s.presize) {
                        var c = jQuery(b.li[0]);
                        loadImages(c, b, 0, !0), waitForCurrentImages(c.find(".tp-layers"), b, function() {
                            _R.animateTheCaptions({
                                slide: c,
                                opt: b,
                                preset: !0
                            })
                        })
                    }
                    _R.manageNavigation && _R.manageNavigation(b), b.slideamount > 1 && (!s.enable || s.enable && b.inviewport ? countDown(a, b) : b.waitForCountDown = !0), setTimeout(function() {
                        a.trigger("revolution.slide.onloaded")
                    }, 100)
                }, b.startDelay), b.startDelay = 0, jQuery("body").data("rs-fullScreenMode", !1), window.addEventListener("fullscreenchange", onFullScreenChange, {
                    passive: !0
                }), window.addEventListener("mozfullscreenchange", onFullScreenChange, {
                    passive: !0
                }), window.addEventListener("webkitfullscreenchange", onFullScreenChange, {
                    passive: !0
                });
                var t = "resize.revslider-" + a.attr("id");
                jQuery(window).on(t, function() {
                    if (a == undefined) return !1;
                    0 != jQuery("body").find(a) && contWidthManager(b);
                    var c = !1;
                    if ("fullscreen" == b.sliderLayout) {
                        var d = jQuery(window).height();
                        "mobile" == b.fallbacks.ignoreHeightChanges && _ISM || "always" == b.fallbacks.ignoreHeightChanges ? (b.fallbacks.ignoreHeightChangesSize = b.fallbacks.ignoreHeightChangesSize == undefined ? 0 : b.fallbacks.ignoreHeightChangesSize, c = d != b.lastwindowheight && Math.abs(d - b.lastwindowheight) > b.fallbacks.ignoreHeightChangesSize) : c = d != b.lastwindowheight
                    }(a.outerWidth(!0) != b.width || a.is(":hidden") || c) && (b.lastwindowheight = jQuery(window).height(), containerResized(a, b))
                }), hideSliderUnder(a, b), contWidthManager(b), b.fallbacks.disableFocusListener || "true" == b.fallbacks.disableFocusListener || b.fallbacks.disableFocusListener === !0 || tabBlurringCheck(a, b)
            }
        },
        cArray = function(a, b) {
            if (!jQuery.isArray(a)) {
                var c = a;
                a = new Array, a.push(c)
            }
            if (a.length < b)
                for (var c = a[a.length - 1], d = 0; d < b - a.length + 2; d++) a.push(c);
            return a
        },
        checkHoverDependencies = function(a, b) {
            var c = a.data(),
                d = "sliderenter" === c.start || c.frames !== undefined && c.frames[0] != undefined && "sliderenter" === c.frames[0].delay;
            d && (b.layersonhover === undefined && (b.c.on("tp-mouseenter", function() {
                b.layersonhover && jQuery.each(b.layersonhover, function(a, c) {
                    var d = c.data("closestli") || c.closest(".tp-revslider-slidesli"),
                        e = c.data("staticli") || c.closest(".tp-static-layers");
                    c.data("closestli") === undefined && (c.data("closestli", d), c.data("staticli", e)), (d.length > 0 && d.hasClass("active-revslide") || d.hasClass("processing-revslide") || e.length > 0) && (c.data("animdirection", "in"), _R.playAnimationFrame && _R.playAnimationFrame({
                        caption: c,
                        opt: b,
                        frame: "frame_0",
                        triggerdirection: "in",
                        triggerframein: "frame_0",
                        triggerframeout: "frame_999"
                    }), c.data("triggerstate", "on"))
                })
            }), b.c.on("tp-mouseleft", function() {
                b.layersonhover && jQuery.each(b.layersonhover, function(a, c) {
                    c.data("animdirection", "out"), c.data("triggered", !0), c.data("triggerstate", "off"), _R.stopVideo && _R.stopVideo(c, b), _R.playAnimationFrame && _R.playAnimationFrame({
                        caption: c,
                        opt: b,
                        frame: "frame_999",
                        triggerdirection: "out",
                        triggerframein: "frame_0",
                        triggerframeout: "frame_999"
                    })
                })
            }), b.layersonhover = new Array), b.layersonhover.push(a))
        },
        contWidthManager = function(a) {
            var b = _R.getHorizontalOffset(a.c, "left");
            if ("auto" == a.sliderLayout || "fullscreen" === a.sliderLayout && "on" == a.fullScreenAutoWidth) "fullscreen" == a.sliderLayout && "on" == a.fullScreenAutoWidth ? punchgs.TweenLite.set(a.ul, {
                left: 0,
                width: a.c.width()
            }) : punchgs.TweenLite.set(a.ul, {
                left: b,
                width: a.c.width() - _R.getHorizontalOffset(a.c, "both")
            });
            else {
                var c = Math.ceil(a.c.closest(".forcefullwidth_wrapper_tp_banner").offset().left - b);
                punchgs.TweenLite.set(a.c.parent(), {
                    left: 0 - c + "px",
                    width: jQuery(window).width() - _R.getHorizontalOffset(a.c, "both")
                })
            }
            a.slayers && "fullwidth" != a.sliderLayout && "fullscreen" != a.sliderLayout && punchgs.TweenLite.set(a.slayers, {
                left: b
            })
        },
        cv = function(a, b) {
            return a === undefined ? b : a
        },
        hideSliderUnder = function(a, b, c) {
            var d = a.parent();
            jQuery(window).width() < b.hideSliderAtLimit ? (a.trigger("stoptimer"), "none" != d.css("display") && d.data("olddisplay", d.css("display")), d.css({
                display: "none"
            })) : a.is(":hidden") && c && (d.data("olddisplay") != undefined && "undefined" != d.data("olddisplay") && "none" != d.data("olddisplay") ? d.css({
                display: d.data("olddisplay")
            }) : d.css({
                display: "block"
            }), a.trigger("restarttimer"), setTimeout(function() {
                containerResized(a, b)
            }, 150)), _R.hideUnHideNav && _R.hideUnHideNav(b)
        },
        containerResized = function(a, b) {
            if (a.trigger("revolution.slide.beforeredraw"), 1 == b.infullscreenmode && (b.minHeight = jQuery(window).height()), setCurWinRange(b), setCurWinRange(b, !0), !_R.resizeThumbsTabs || _R.resizeThumbsTabs(b) === !0) {
                if (hideSliderUnder(a, b, !0), contWidthManager(b), "carousel" == b.sliderType && _R.prepareCarousel(b, !0), a === undefined) return !1;
                _R.setSize(b), b.conw = b.c.width(), b.conh = b.infullscreenmode ? b.minHeight : b.c.height();
                var c = a.find(".active-revslide .slotholder"),
                    d = a.find(".processing-revslide .slotholder");
                removeSlots(a, b, a, 2), "standard" === b.sliderType && (punchgs.TweenLite.set(d.find(".defaultimg"), {
                    opacity: 0
                }), c.find(".defaultimg").css({
                    opacity: 1
                })), "carousel" === b.sliderType && b.lastconw != b.conw && (clearTimeout(b.pcartimer), b.pcartimer = setTimeout(function() {
                    _R.prepareCarousel(b, !0), "carousel" == b.sliderType && "on" === b.carousel.showLayersAllTime && jQuery.each(b.li, function(a) {
                        _R.animateTheCaptions({
                            slide: jQuery(b.li[a]),
                            opt: b,
                            recall: !0
                        })
                    })
                }, 100), b.lastconw = b.conw), _R.manageNavigation && _R.manageNavigation(b), _R.animateTheCaptions && a.find(".active-revslide").length > 0 && _R.animateTheCaptions({
                    slide: a.find(".active-revslide"),
                    opt: b,
                    recall: !0
                }), "on" == d.data("kenburns") && _R.startKenBurn(d, b, d.data("kbtl").progress()), "on" == c.data("kenburns") && _R.startKenBurn(c, b, c.data("kbtl").progress()), _R.animateTheCaptions && a.find(".processing-revslide").length > 0 && _R.animateTheCaptions({
                    slide: a.find(".processing-revslide"),
                    opt: b,
                    recall: !0
                }), _R.manageNavigation && _R.manageNavigation(b)
            }
            a.trigger("revolution.slide.afterdraw")
        },
        setScale = function(a) {
            a.bw = a.width / a.gridwidth[a.curWinRange], a.bh = a.height / a.gridheight[a.curWinRange], a.bh > a.bw ? a.bh = a.bw : a.bw = a.bh, (a.bh > 1 || a.bw > 1) && (a.bw = 1, a.bh = 1)
        },
        prepareSlides = function(a, b) {
            if (a.find(".tp-caption").each(function() {
                    var a = jQuery(this);
                    a.data("transition") !== undefined && a.addClass(a.data("transition"))
                }), b.ul.css({
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                    maxHeight: a.parent().css("maxHeight")
                }), "on" == b.autoHeight && (b.ul.css({
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                    maxHeight: "none"
                }), a.css({
                    maxHeight: "none"
                }), a.parent().css({
                    maxHeight: "none"
                })), b.allli.each(function(a) {
                    var c = jQuery(this),
                        d = c.data("originalindex");
                    (b.startWithSlide != undefined && d == b.startWithSlide || b.startWithSlide === undefined && 0 == a) && c.addClass("next-revslide"), c.css({
                        width: "100%",
                        height: "100%",
                        overflow: "hidden"
                    })
                }), "carousel" === b.sliderType) {
                b.ul.css({
                    overflow: "visible"
                }).wrap('<div class="tp-carousel-wrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden;"></div>');
                var c = '<div style="clear:both;display:block;width:100%;height:1px;position:relative;margin-bottom:-1px"></div>';
                b.c.parent().prepend(c), b.c.parent().append(c), _R.prepareCarousel(b)
            }
            a.parent().css({
                overflow: "visible"
            }), b.allli.find(">img").each(function(a) {
                var c = jQuery(this),
                    d = c.closest("li"),
                    e = d.find(".rs-background-video-layer");
                e.addClass("defaultvid").css({
                    zIndex: 30
                }), c.addClass("defaultimg"), "on" == b.fallbacks.panZoomDisableOnMobile && _ISM && (c.data("kenburns", "off"), c.data("bgfit", "cover"));
                var f = d.data("mediafilter");
                f = "none" === f || f === undefined ? "" : f, c.wrap('<div class="slotholder" style="position:absolute; top:0px; left:0px; z-index:0;width:100%;height:100%;"></div>'), e.appendTo(d.find(".slotholder"));
                var g = c.data();
                c.closest(".slotholder").data(g), e.length > 0 && g.bgparallax != undefined && e.data("bgparallax", g.bgparallax), "none" != b.dottedOverlay && b.dottedOverlay != undefined && c.closest(".slotholder").append('<div class="tp-dottedoverlay ' + b.dottedOverlay + '"></div>');
                var h = c.attr("src");
                g.src = h, g.bgfit = g.bgfit || "cover", g.bgrepeat = g.bgrepeat || "no-repeat", g.bgposition = g.bgposition || "center center";
                var j = (c.closest(".slotholder"), c.data("bgcolor")),
                    k = "";
                k = j !== undefined && j.indexOf("gradient") >= 0 ? '"background:' + j + ';width:100%;height:100%;"' : '"background-color:' + j + ";background-repeat:" + g.bgrepeat + ";background-image:url(" + h + ");background-size:" + g.bgfit + ";background-position:" + g.bgposition + ';width:100%;height:100%;"';
                var l = jQuery('<div class="tp-bgimg defaultimg ' + f + '" data-bgcolor="' + j + '" style=' + k + "></div>");
                c.parent().append(l), c.data("mediafilter", f);
                var m = document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - " + c.get(0).outerHTML);
                c.replaceWith(m), l.data(g), l.attr("src", h), "standard" !== b.sliderType && "undefined" !== b.sliderType || l.css({
                    opacity: 0
                })
            }), b.scrolleffect.on && "on" === b.scrolleffect.on_slidebg && (b.allslotholder = new Array, b.allli.find(".slotholder").each(function() {
                jQuery(this).wrap('<div style="display:block;position:absolute;top:0px;left:0px;width:100%;height:100%" class="slotholder_fadeoutwrap"></div>')
            }), b.allslotholder = b.c.find(".slotholder_fadeoutwrap"))
        },
        removeSlots = function(a, b, c, d) {
            b.removePrepare = b.removePrepare + d, c.find(".slot, .slot-circle-wrapper").each(function() {
                jQuery(this).remove()
            }), b.transition = 0, b.removePrepare = 0
        },
        cutParams = function(a) {
            var b = a;
            return a != undefined && a.length > 0 && (b = a.split("?")[0]), b
        },
        relativeRedir = function(a) {
            return location.pathname.replace(/(.*)\/[^\/]*/, "$1/" + a)
        },
        abstorel = function(a, b) {
            var c = a.split("/"),
                d = b.split("/");
            c.pop();
            for (var e = 0; e < d.length; e++) "." != d[e] && (".." == d[e] ? c.pop() : c.push(d[e]));
            return c.join("/")
        },
        imgLoaded = function(a, b, c) {
            b.syncload--, b.loadqueue && jQuery.each(b.loadqueue, function(b, d) {
                var e = d.src.replace(/\.\.\/\.\.\//gi, ""),
                    f = self.location.href,
                    g = document.location.origin,
                    h = f.substring(0, f.length - 1) + "/" + e,
                    i = g + "/" + e,
                    j = abstorel(self.location.href, d.src);
                f = f.substring(0, f.length - 1) + e, g += e, (cutParams(g) === cutParams(decodeURIComponent(a.src)) || cutParams(f) === cutParams(decodeURIComponent(a.src)) || cutParams(j) === cutParams(decodeURIComponent(a.src)) || cutParams(i) === cutParams(decodeURIComponent(a.src)) || cutParams(h) === cutParams(decodeURIComponent(a.src)) || cutParams(d.src) === cutParams(decodeURIComponent(a.src)) || cutParams(d.src).replace(/^.*\/\/[^\/]+/, "") === cutParams(decodeURIComponent(a.src)).replace(/^.*\/\/[^\/]+/, "") || "file://" === window.location.origin && cutParams(a.src).match(new RegExp(e))) && (d.progress = c, d.width = a.width, d.height = a.height)
            }), progressImageLoad(b)
        },
        progressImageLoad = function(a) {
            3 != a.syncload && a.loadqueue && jQuery.each(a.loadqueue, function(b, c) {
                if (c.progress.match(/prepared/g) && a.syncload <= 3) {
                    if (a.syncload++, "img" == c.type) {
                        var d = new Image;
                        d.onload = function() {
                            imgLoaded(this, a, "loaded"), c.error = !1
                        }, d.onerror = function() {
                            imgLoaded(this, a, "failed"), c.error = !0
                        }, d.src = c.src
                    } else jQuery.get(c.src, function(b) {
                        c.innerHTML = (new XMLSerializer).serializeToString(b.documentElement), c.progress = "loaded", a.syncload--, progressImageLoad(a)
                    }).fail(function() {
                        c.progress = "failed", a.syncload--, progressImageLoad(a)
                    });
                    c.progress = "inload"
                }
            })
        },
        addToLoadQueue = function(a, b, c, d, e) {
            var f = !1;
            if (b.loadqueue && jQuery.each(b.loadqueue, function(b, c) {
                    c.src === a && (f = !0)
                }), !f) {
                var g = new Object;
                g.src = a, g.starttoload = jQuery.now(), g.type = d || "img", g.prio = c, g.progress = "prepared", g.static = e, b.loadqueue.push(g)
            }
        },
        loadImages = function(a, b, c, d) {
            a.find("img,.defaultimg, .tp-svg-layer").each(function() {
                var a = jQuery(this),
                    e = a.data("lazyload") !== undefined && "undefined" !== a.data("lazyload") ? a.data("lazyload") : a.data("svg_src") != undefined ? a.data("svg_src") : a.attr("src"),
                    f = a.data("svg_src") != undefined ? "svg" : "img";
                a.data("start-to-load", jQuery.now()), addToLoadQueue(e, b, c, f, d)
            }), progressImageLoad(b)
        },
        getLoadObj = function(a, b) {
            var c = new Object;
            return a.loadqueue && jQuery.each(a.loadqueue, function(a, d) {
                d.src == b && (c = d)
            }), c
        },
        waitForCurrentImages = function(a, b, c) {
            var d = !1;
            a.find("img,.defaultimg, .tp-svg-layer").each(function() {
                var c = jQuery(this),
                    e = c.data("lazyload") != undefined ? c.data("lazyload") : c.data("svg_src") != undefined ? c.data("svg_src") : c.attr("src"),
                    f = getLoadObj(b, e);
                if (c.data("loaded") === undefined && f !== undefined && f.progress && f.progress.match(/loaded/g)) {
                    if (c.attr("src", f.src), "img" == f.type)
                        if (c.hasClass("defaultimg")) _R.isIE(8) ? defimg.attr("src", f.src) : f.src.indexOf("images/transparent.png") == -1 || c.data("bgcolor") === undefined ? c.css({
                            backgroundImage: 'url("' + f.src + '")'
                        }) : c.data("bgcolor") !== undefined && c.css({
                            background: c.data("bgcolor")
                        }), a.data("owidth", f.width), a.data("oheight", f.height), a.find(".slotholder").data("owidth", f.width), a.find(".slotholder").data("oheight", f.height);
                        else {
                            var g = c.data("ww"),
                                h = c.data("hh");
                            c.data("owidth", f.width), c.data("oheight", f.height), g = g == undefined || "auto" == g || "" == g ? f.width : g, h = h == undefined || "auto" == h || "" == h ? f.height : h, !jQuery.isNumeric(g) && g.indexOf("%") > 0 && (h = g), c.data("ww", g), c.data("hh", h)
                        }
                    else "svg" == f.type && "loaded" == f.progress && (c.append('<div class="tp-svg-innercontainer"></div>'), c.find(".tp-svg-innercontainer").append(f.innerHTML));
                    c.data("loaded", !0)
                }
                if (f && f.progress && f.progress.match(/inprogress|inload|prepared/g) && (!f.error && jQuery.now() - c.data("start-to-load") < 5e3 ? d = !0 : (f.progress = "failed", f.reported_img || (f.reported_img = !0, console.warn(e + "  Could not be loaded !")))), 1 == b.youtubeapineeded && (!window.YT || YT.Player == undefined) && (d = !0, jQuery.now() - b.youtubestarttime > 5e3 && 1 != b.youtubewarning)) {
                    b.youtubewarning = !0;
                    var i = "YouTube Api Could not be loaded !";
                    "https:" === location.protocol && (i += " Please Check and Renew SSL Certificate !"), console.error(i), b.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + i + "</strong></div>")
                }
                if (1 == b.vimeoapineeded && !window.Froogaloop && (d = !0, jQuery.now() - b.vimeostarttime > 5e3 && 1 != b.vimeowarning)) {
                    b.vimeowarning = !0;
                    var i = "Vimeo Froogaloop Api Could not be loaded !";
                    "https:" === location.protocol && (i += " Please Check and Renew SSL Certificate !"), console.error(i), b.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + i + "</strong></div>")
                }
            }), !_ISM && b.audioqueue && b.audioqueue.length > 0 && jQuery.each(b.audioqueue, function(a, b) {
                b.status && "prepared" === b.status && jQuery.now() - b.start < b.waittime && (d = !0)
            }), jQuery.each(b.loadqueue, function(a, b) {
                b.static !== !0 || "loaded" == b.progress && "failed" !== b.progress || ("failed" == b.progress ? b.reported || (b.reported = !0, console.warn("Static Image " + b.src + "  Could not be loaded in time. Error Exists:" + b.error)) : !b.error && jQuery.now() - b.starttoload < 5e3 ? d = !0 : b.reported || (b.reported = !0, console.warn("Static Image " + b.src + "  Could not be loaded within 5s! Error Exists:" + b.error)))
            }), d ? punchgs.TweenLite.delayedCall(.18, waitForCurrentImages, [a, b, c]) : punchgs.TweenLite.delayedCall(.18, c)
        },
        swapSlide = function(a) {
            var b = a[0].opt;
            if (clearTimeout(b.waitWithSwapSlide), a.find(".processing-revslide").length > 0) return b.waitWithSwapSlide = setTimeout(function() {
                swapSlide(a)
            }, 150), !1;
            var c = a.find(".active-revslide"),
                d = a.find(".next-revslide"),
                e = d.find(".defaultimg");
            return "carousel" !== b.sliderType || b.carousel.fadein || (punchgs.TweenLite.to(b.ul, 1, {
                opacity: 1
            }), b.carousel.fadein = !0), d.index() === c.index() && b.onlyPreparedSlide !== !0 ? (d.removeClass("next-revslide"), !1) : (b.onlyPreparedSlide === !0 && (b.onlyPreparedSlide = !1, jQuery(b.li[0]).addClass("processing-revslide")), d.removeClass("next-revslide").addClass("processing-revslide"), d.index() === -1 && "carousel" === b.sliderType && (d = jQuery(b.li[0])), d.data("slide_on_focus_amount", d.data("slide_on_focus_amount") + 1 || 1), "on" == b.stopLoop && d.index() == b.lastslidetoshow - 1 && (a.find(".tp-bannertimer").css({
                visibility: "hidden"
            }), a.trigger("revolution.slide.onstop"), b.noloopanymore = 1), d.index() === b.slideamount - 1 && (b.looptogo = b.looptogo - 1, b.looptogo <= 0 && (b.stopLoop = "on")), b.tonpause = !0, a.trigger("stoptimer"), b.cd = 0, "off" === b.spinner && (b.loader !== undefined ? b.loader.css({
                display: "none"
            }) : b.loadertimer = setTimeout(function() {
                b.loader !== undefined && b.loader.css({
                    display: "block"
                })
            }, 50)), loadImages(d, b, 1), _R.preLoadAudio && _R.preLoadAudio(d, b, 1), void waitForCurrentImages(d, b, function() {
                d.find(".rs-background-video-layer").each(function() {
                    var a = jQuery(this);
                    a.hasClass("HasListener") || (a.data("bgvideo", 1), _R.manageVideoLayer && _R.manageVideoLayer(a, b)), 0 == a.find(".rs-fullvideo-cover").length && a.append('<div class="rs-fullvideo-cover"></div>')
                }), swapSlideProgress(e, a)
            }))
        },
        swapSlideProgress = function(a, b) {
            var c = b.find(".active-revslide"),
                d = b.find(".processing-revslide"),
                e = c.find(".slotholder"),
                f = d.find(".slotholder"),
                g = b[0].opt;
            g.tonpause = !1, g.cd = 0, clearTimeout(g.loadertimer), g.loader !== undefined && g.loader.css({
                display: "none"
            }), _R.setSize(g), _R.slotSize(a, g), _R.manageNavigation && _R.manageNavigation(g);
            var h = {};
            h.nextslide = d, h.currentslide = c, b.trigger("revolution.slide.onbeforeswap", h), g.transition = 1, g.videoplaying = !1, d.data("delay") != undefined ? (g.cd = 0, g.delay = d.data("delay")) : g.delay = g.origcd, "true" == d.data("ssop") || d.data("ssop") === !0 ? g.ssop = !0 : g.ssop = !1, b.trigger("nulltimer");
            var i = c.index(),
                j = d.index();
            g.sdir = j < i ? 1 : 0, "arrow" == g.sc_indicator && (0 == i && j == g.slideamount - 1 && (g.sdir = 1), i == g.slideamount - 1 && 0 == j && (g.sdir = 0)), g.lsdir = g.lsdir === undefined ? g.sdir : g.lsdir, g.dirc = g.lsdir != g.sdir, g.lsdir = g.sdir, c.index() != d.index() && 1 != g.firststart && _R.removeTheCaptions && _R.removeTheCaptions(c, g), d.hasClass("rs-pause-timer-once") || d.hasClass("rs-pause-timer-always") ? g.videoplaying = !0 : b.trigger("restarttimer"), d.removeClass("rs-pause-timer-once");
            var k, m;
            if (g.currentSlide = c.index(), g.nextSlide = d.index(), "carousel" == g.sliderType) m = new punchgs.TimelineLite, _R.prepareCarousel(g, m), letItFree(b, f, e, d, c, m), g.transition = 0, g.firststart = 0;
            else {
                m = new punchgs.TimelineLite({
                    onComplete: function() {
                        letItFree(b, f, e, d, c, m)
                    }
                }), m.add(punchgs.TweenLite.set(f.find(".defaultimg"), {
                    opacity: 0
                })), m.pause(), _R.animateTheCaptions && _R.animateTheCaptions({
                    slide: d,
                    opt: g,
                    preset: !0
                }), 1 == g.firststart && (punchgs.TweenLite.set(c, {
                    autoAlpha: 0
                }), g.firststart = 0), punchgs.TweenLite.set(c, {
                    zIndex: 18
                }), punchgs.TweenLite.set(d, {
                    autoAlpha: 0,
                    zIndex: 20
                }), "prepared" == d.data("differentissplayed") && (d.data("differentissplayed", "done"), d.data("transition", d.data("savedtransition")), d.data("slotamount", d.data("savedslotamount")), d.data("masterspeed", d.data("savedmasterspeed"))), d.data("fstransition") != undefined && "done" != d.data("differentissplayed") && (d.data("savedtransition", d.data("transition")), d.data("savedslotamount", d.data("slotamount")), d.data("savedmasterspeed", d.data("masterspeed")), d.data("transition", d.data("fstransition")), d.data("slotamount", d.data("fsslotamount")), d.data("masterspeed", d.data("fsmasterspeed")), d.data("differentissplayed", "prepared")), d.data("transition") == undefined && d.data("transition", "random"), k = 0;
                var n = d.data("transition") !== undefined ? d.data("transition").split(",") : "fade",
                    o = d.data("nexttransid") == undefined ? -1 : d.data("nexttransid");
                "on" == d.data("randomtransition") ? o = Math.round(Math.random() * n.length) : o += 1, o == n.length && (o = 0), d.data("nexttransid", o);
                var p = n[o];
                g.ie && ("boxfade" == p && (p = "boxslide"), "slotfade-vertical" == p && (p = "slotzoom-vertical"), "slotfade-horizontal" == p && (p = "slotzoom-horizontal")), _R.isIE(8) && (p = 11), m = _R.animateSlide(k, p, b, d, c, f, e, m), "on" == f.data("kenburns") && (_R.startKenBurn(f, g), m.add(punchgs.TweenLite.set(f, {
                    autoAlpha: 0
                }))), m.pause()
            }
            _R.scrollHandling && (_R.scrollHandling(g, !0), m.eventCallback("onUpdate", function() {
                _R.scrollHandling(g, !0)
            })), "off" != g.parallax.type && g.parallax.firstgo == undefined && _R.scrollHandling && (g.parallax.firstgo = !0, g.lastscrolltop = -999, _R.scrollHandling(g, !0), setTimeout(function() {
                g.lastscrolltop = -999, _R.scrollHandling(g, !0)
            }, 210), setTimeout(function() {
                g.lastscrolltop = -999, _R.scrollHandling(g, !0)
            }, 420)), _R.animateTheCaptions ? "carousel" === g.sliderType && "on" === g.carousel.showLayersAllTime ? (jQuery.each(g.li, function(a) {
                g.carousel.allLayersStarted ? _R.animateTheCaptions({
                    slide: jQuery(g.li[a]),
                    opt: g,
                    recall: !0
                }) : g.li[a] === d ? _R.animateTheCaptions({
                    slide: jQuery(g.li[a]),
                    maintimeline: m,
                    opt: g,
                    startslideanimat: 0
                }) : _R.animateTheCaptions({
                    slide: jQuery(g.li[a]),
                    opt: g,
                    startslideanimat: 0
                })
            }), g.carousel.allLayersStarted = !0) : _R.animateTheCaptions({
                slide: d,
                opt: g,
                maintimeline: m,
                startslideanimat: 0
            }) : m != undefined && setTimeout(function() {
                m.resume()
            }, 30), punchgs.TweenLite.to(d, .001, {
                autoAlpha: 1
            })
        },
        letItFree = function(a, b, c, d, e, f) {
            var g = a[0].opt;
            "carousel" === g.sliderType || (g.removePrepare = 0, punchgs.TweenLite.to(b.find(".defaultimg"), .001, {
                zIndex: 20,
                autoAlpha: 1,
                onComplete: function() {
                    removeSlots(a, g, d, 1)
                }
            }), d.index() != e.index() && punchgs.TweenLite.to(e, .2, {
                zIndex: 18,
                autoAlpha: 0,
                onComplete: function() {
                    removeSlots(a, g, e, 1)
                }
            })), a.find(".active-revslide").removeClass("active-revslide"), a.find(".processing-revslide").removeClass("processing-revslide").addClass("active-revslide"), g.act = d.index(), g.c.attr("data-slideactive", a.find(".active-revslide").data("index")), "scroll" != g.parallax.type && "scroll+mouse" != g.parallax.type && "mouse+scroll" != g.parallax.type || (g.lastscrolltop = -999, _R.scrollHandling(g)), f.clear(), c.data("kbtl") != undefined && (c.data("kbtl").reverse(), c.data("kbtl").timeScale(25)), "on" == b.data("kenburns") && (b.data("kbtl") != undefined ? (b.data("kbtl").timeScale(1), b.data("kbtl").play()) : _R.startKenBurn(b, g)), d.find(".rs-background-video-layer").each(function(a) {
                if (_ISM && (!_ANDROID || !g.fallbacks.allowHTML5AutoPlayOnAndroid)) return !1;
                var b = jQuery(this);
                _R.resetVideo(b, g), punchgs.TweenLite.fromTo(b, 1, {
                    autoAlpha: 0
                }, {
                    autoAlpha: 1,
                    ease: punchgs.Power3.easeInOut,
                    delay: .2,
                    onComplete: function() {
                        _R.animcompleted && _R.animcompleted(b, g)
                    }
                })
            }), e.find(".rs-background-video-layer").each(function(a) {
                if (_ISM) return !1;
                var b = jQuery(this);
                _R.stopVideo && (_R.resetVideo(b, g), _R.stopVideo(b, g)), punchgs.TweenLite.to(b, 1, {
                    autoAlpha: 0,
                    ease: punchgs.Power3.easeInOut,
                    delay: .2
                })
            });
            var h = {};
            h.slideIndex = d.index() + 1, h.slideLIIndex = d.index(), h.slide = d, h.currentslide = d, h.prevslide = e, g.last_shown_slide = e.index(), a.trigger("revolution.slide.onchange", h), a.trigger("revolution.slide.onafterswap", h), g.duringslidechange = !1;
            var i = e.data("slide_on_focus_amount"),
                j = e.data("hideafterloop");
            0 != j && j <= i && g.c.revremoveslide(e.index());
            var k = g.nextSlide === -1 || g.nextSlide === undefined ? 0 : g.nextSlide;
            g.rowzones != undefined && (k = k > g.rowzones.length ? g.rowzones.length : k), g.rowzones != undefined && g.rowzones.length > 0 && g.rowzones[k] != undefined && k >= 0 && k <= g.rowzones.length && g.rowzones[k].length > 0 && _R.setSize(g)
        },
        removeAllListeners = function(a, b) {
            a.children().each(function() {
                try {
                    jQuery(this).die("click")
                } catch (a) {}
                try {
                    jQuery(this).die("mouseenter")
                } catch (a) {}
                try {
                    jQuery(this).die("mouseleave")
                } catch (a) {}
                try {
                    jQuery(this).unbind("hover")
                } catch (a) {}
            });
            try {
                a.die("click", "mouseenter", "mouseleave")
            } catch (a) {}
            clearInterval(b.cdint), a = null
        },
        countDown = function(a, b) {
            b.cd = 0, b.loop = 0, b.stopAfterLoops != undefined && b.stopAfterLoops > -1 ? b.looptogo = b.stopAfterLoops : b.looptogo = 9999999, b.stopAtSlide != undefined && b.stopAtSlide > -1 ? b.lastslidetoshow = b.stopAtSlide : b.lastslidetoshow = 999, b.stopLoop = "off", 0 == b.looptogo && (b.stopLoop = "on");
            var c = a.find(".tp-bannertimer");
            a.on("stoptimer", function() {
                var a = jQuery(this).find(".tp-bannertimer");
                a[0].tween.pause(), "on" == b.disableProgressBar && a.css({
                    visibility: "hidden"
                }), b.sliderstatus = "paused", _R.unToggleState(b.slidertoggledby)
            }), a.on("starttimer", function() {
                b.forcepause_viatoggle || (1 != b.conthover && 1 != b.videoplaying && b.width > b.hideSliderAtLimit && 1 != b.tonpause && 1 != b.overnav && 1 != b.ssop && (1 === b.noloopanymore || b.viewPort.enable && !b.inviewport || (c.css({
                    visibility: "visible"
                }), c[0].tween.resume(), b.sliderstatus = "playing")), "on" == b.disableProgressBar && c.css({
                    visibility: "hidden"
                }), _R.toggleState(b.slidertoggledby))
            }), a.on("restarttimer", function() {
                if (!b.forcepause_viatoggle) {
                    var a = jQuery(this).find(".tp-bannertimer");
                    if (b.mouseoncontainer && "on" == b.navigation.onHoverStop && !_ISM) return !1;
                    1 === b.noloopanymore || b.viewPort.enable && !b.inviewport || 1 == b.ssop || (a.css({
                        visibility: "visible"
                    }), a[0].tween.kill(), a[0].tween = punchgs.TweenLite.fromTo(a, b.delay / 1e3, {
                        width: "0%"
                    }, {
                        force3D: "auto",
                        width: "100%",
                        ease: punchgs.Linear.easeNone,
                        onComplete: d,
                        delay: 1
                    }), b.sliderstatus = "playing"), "on" == b.disableProgressBar && a.css({
                        visibility: "hidden"
                    }), _R.toggleState(b.slidertoggledby)
                }
            }), a.on("nulltimer", function() {
                c[0].tween.kill(), c[0].tween = punchgs.TweenLite.fromTo(c, b.delay / 1e3, {
                    width: "0%"
                }, {
                    force3D: "auto",
                    width: "100%",
                    ease: punchgs.Linear.easeNone,
                    onComplete: d,
                    delay: 1
                }), c[0].tween.pause(0), "on" == b.disableProgressBar && c.css({
                    visibility: "hidden"
                }), b.sliderstatus = "paused"
            });
            var d = function() {
                0 == jQuery("body").find(a).length && (removeAllListeners(a, b), clearInterval(b.cdint)), a.trigger("revolution.slide.slideatend"), 1 == a.data("conthover-changed") && (b.conthover = a.data("conthover"), a.data("conthover-changed", 0)), _R.callingNewSlide(a, 1)
            };
            c[0].tween = punchgs.TweenLite.fromTo(c, b.delay / 1e3, {
                width: "0%"
            }, {
                force3D: "auto",
                width: "100%",
                ease: punchgs.Linear.easeNone,
                onComplete: d,
                delay: 1
            }), b.slideamount > 1 && (0 != b.stopAfterLoops || 1 != b.stopAtSlide) ? a.trigger("starttimer") : (b.noloopanymore = 1, a.trigger("nulltimer")), a.on("tp-mouseenter", function() {
                b.mouseoncontainer = !0, "on" != b.navigation.onHoverStop || _ISM || (a.trigger("stoptimer"), a.trigger("revolution.slide.onpause"))
            }), a.on("tp-mouseleft", function() {
                b.mouseoncontainer = !1, 1 != a.data("conthover") && "on" == b.navigation.onHoverStop && (1 == b.viewPort.enable && b.inviewport || 0 == b.viewPort.enable) && (a.trigger("revolution.slide.onresume"), a.trigger("starttimer"))
            })
        },
        vis = function() {
            var a, b, c = {
                hidden: "visibilitychange",
                webkitHidden: "webkitvisibilitychange",
                mozHidden: "mozvisibilitychange",
                msHidden: "msvisibilitychange"
            };
            for (a in c)
                if (a in document) {
                    b = c[a];
                    break
                }
            return function(c) {
                return c && document.addEventListener(b, c, {
                    pasive: !0
                }), !document[a]
            }
        }(),
        restartOnFocus = function(a) {
            return a != undefined && a.c != undefined && void(1 != a.windowfocused && (a.windowfocused = !0, punchgs.TweenLite.delayedCall(.3, function() {
                "on" == a.fallbacks.nextSlideOnWindowFocus && a.c.revnext(), a.c.revredraw(), "playing" == a.lastsliderstatus && a.c.revresume()
            })))
        },
        lastStatBlur = function(a) {
            a.windowfocused = !1, a.lastsliderstatus = a.sliderstatus, a.c.revpause();
            var b = a.c.find(".active-revslide .slotholder"),
                c = a.c.find(".processing-revslide .slotholder");
            "on" == c.data("kenburns") && _R.stopKenBurn(c, a), "on" == b.data("kenburns") && _R.stopKenBurn(b, a)
        },
        tabBlurringCheck = function(a, b) {
            var c = document.documentMode === undefined,
                d = window.chrome;
            c && !d ? jQuery(window).on("focusin", function() {
                restartOnFocus(b)
            }).on("focusout", function() {
                lastStatBlur(b)
            }) : window.addEventListener ? (window.addEventListener("focus", function(a) {
                restartOnFocus(b)
            }, {
                capture: !1,
                passive: !0
            }), window.addEventListener("blur", function(a) {
                lastStatBlur(b)
            }, {
                capture: !1,
                passive: !0
            })) : (window.attachEvent("focus", function(a) {
                restartOnFocus(b)
            }), window.attachEvent("blur", function(a) {
                lastStatBlur(b)
            }))
        },
        getUrlVars = function(a) {
            for (var c, b = [], d = window.location.href.slice(window.location.href.indexOf(a) + 1).split("_"), e = 0; e < d.length; e++) d[e] = d[e].replace("%3D", "="), c = d[e].split("="), b.push(c[0]), b[c[0]] = c[1];
            return b
        }
}(jQuery);;
/*add-to-cart.min.js*/
// jQuery(function(t) {
//     if ("undefined" == typeof wc_add_to_cart_params) return !1;
//     var a = function() {
//         t(document.body).on("click", ".add_to_cart_button", this.onAddToCart).on("click", ".remove_from_cart_button", this.onRemoveFromCart).on("added_to_cart", this.updateButton).on("added_to_cart", this.updateCartPage).on("added_to_cart removed_from_cart", this.updateFragments)
//     };
//     a.prototype.onAddToCart = function(a) {
//         var o = t(this);
//         if (o.is(".ajax_add_to_cart")) {
//             if (!o.attr("data-product_id")) return !0;
//             a.preventDefault(), o.removeClass("added"), o.addClass("loading");
//             var r = {};
//             t.each(o.data(), function(t, a) {
//                 r[t] = a
//             }), t(document.body).trigger("adding_to_cart", [o, r]), t.post(wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%", "add_to_cart"), r, function(a) {
//                 a && (a.error && a.product_url ? window.location = a.product_url : "yes" !== wc_add_to_cart_params.cart_redirect_after_add ? t(document.body).trigger("added_to_cart", [a.fragments, a.cart_hash, o]) : window.location = wc_add_to_cart_params.cart_url)
//             })
//         }
//     }, a.prototype.onRemoveFromCart = function(a) {
//         var o = t(this),
//             r = o.closest(".woocommerce-mini-cart-item");
//         a.preventDefault(), r.block({
//             message: null,
//             overlayCSS: {
//                 opacity: .6
//             }
//         }), t.post(wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%", "remove_from_cart"), {
//             cart_item_key: o.data("cart_item_key")
//         }, function(a) {
//             a && a.fragments ? t(document.body).trigger("removed_from_cart", [a.fragments, a.cart_hash]) : window.location = o.attr("href")
//         }).fail(function() {
//             window.location = o.attr("href")
//         })
//     }, a.prototype.updateButton = function(a, o, r, e) {
//         (e = void 0 !== e && e) && (e.removeClass("loading"), e.addClass("added"), wc_add_to_cart_params.is_cart || 0 !== e.parent().find(".added_to_cart").length || e.after(' <a href="' + wc_add_to_cart_params.cart_url + '" class="added_to_cart wc-forward" title="' + wc_add_to_cart_params.i18n_view_cart + '">' + wc_add_to_cart_params.i18n_view_cart + "</a>"), t(document.body).trigger("wc_cart_button_updated", [e]))
//     }, a.prototype.updateCartPage = function() {
//         var a = window.location.toString().replace("add-to-cart", "added-to-cart");
//         t(".shop_table.cart").load(a + " .shop_table.cart:eq(0) > *", function() {
//             t(".shop_table.cart").stop(!0).css("opacity", "1").unblock(), t(document.body).trigger("cart_page_refreshed")
//         }), t(".cart_totals").load(a + " .cart_totals:eq(0) > *", function() {
//             t(".cart_totals").stop(!0).css("opacity", "1").unblock(), t(document.body).trigger("cart_totals_refreshed")
//         })
//     }, a.prototype.updateFragments = function(a, o) {
//         o && (t.each(o, function(a) {
//             t(a).addClass("updating").fadeTo("400", "0.6").block({
//                 message: null,
//                 overlayCSS: {
//                     opacity: .6
//                 }
//             })
//         }), t.each(o, function(a, o) {
//             t(a).replaceWith(o), t(a).stop(!0).css("opacity", "1").unblock()
//         }), t(document.body).trigger("wc_fragments_loaded"))
//     }, new a
// });;
window.jQuery(document).ready(function($) {
    $('body').on('adding_to_cart', function(event, $button, data) {
        $button && $button.hasClass('vc_gitem-link') && $button.addClass('vc-gitem-add-to-cart-loading-btn').parents('.vc_grid-item-mini').addClass('vc-woocommerce-add-to-cart-loading').append($('<div class="vc_wc-load-add-to-loader-wrapper"><div class="vc_wc-load-add-to-loader"></div></div>'));
    }).on('added_to_cart', function(event, fragments, cart_hash, $button) {
        if ('undefined' === typeof($button)) {
            $button = $('.vc-gitem-add-to-cart-loading-btn');
        }
        $button && $button.hasClass('vc_gitem-link') && $button.removeClass('vc-gitem-add-to-cart-loading-btn').parents('.vc_grid-item-mini').removeClass('vc-woocommerce-add-to-cart-loading').find('.vc_wc-load-add-to-loader-wrapper').remove();
    });
});;
! function(a, b) {
    "use strict";

    function c() {
        if (!e) {
            e = !0;
            var a, c, d, f, g = -1 !== navigator.appVersion.indexOf("MSIE 10"),
                h = !!navigator.userAgent.match(/Trident.*rv:11\./),
                i = b.querySelectorAll("iframe.wp-embedded-content");
            for (c = 0; c < i.length; c++) {
                if (d = i[c], !d.getAttribute("data-secret")) f = Math.random().toString(36).substr(2, 10), d.src += "#?secret=" + f, d.setAttribute("data-secret", f);
                if (g || h) a = d.cloneNode(!0), a.removeAttribute("security"), d.parentNode.replaceChild(a, d)
            }
        }
    }
    var d = !1,
        e = !1;
    if (b.querySelector)
        if (a.addEventListener) d = !0;
    if (a.wp = a.wp || {}, !a.wp.receiveEmbedMessage)
        if (a.wp.receiveEmbedMessage = function(c) {
                var d = c.data;
                if (d.secret || d.message || d.value)
                    if (!/[^a-zA-Z0-9]/.test(d.secret)) {
                        var e, f, g, h, i, j = b.querySelectorAll('iframe[data-secret="' + d.secret + '"]'),
                            k = b.querySelectorAll('blockquote[data-secret="' + d.secret + '"]');
                        for (e = 0; e < k.length; e++) k[e].style.display = "none";
                        for (e = 0; e < j.length; e++)
                            if (f = j[e], c.source === f.contentWindow) {
                                if (f.removeAttribute("style"), "height" === d.message) {
                                    if (g = parseInt(d.value, 10), g > 1e3) g = 1e3;
                                    else if (~~g < 200) g = 200;
                                    f.height = g
                                }
                                if ("link" === d.message)
                                    if (h = b.createElement("a"), i = b.createElement("a"), h.href = f.getAttribute("src"), i.href = d.value, i.host === h.host)
                                        if (b.activeElement === f) a.top.location.href = d.value
                            } else;
                    }
            }, d) a.addEventListener("message", a.wp.receiveEmbedMessage, !1), b.addEventListener("DOMContentLoaded", c, !1), a.addEventListener("load", c, !1)
}(window, document);;

function vc_js() {
    vc_toggleBehaviour(), vc_tabsBehaviour(), vc_accordionBehaviour(), vc_teaserGrid(), vc_carouselBehaviour(), vc_slidersBehaviour(), vc_prettyPhoto(), vc_googleplus(), vc_pinterest(), vc_progress_bar(), vc_plugin_flexslider(), vc_google_fonts(), vc_gridBehaviour(), vc_rowBehaviour(), vc_googleMapsPointer(), vc_ttaActivation(), jQuery(document).trigger("vc_js"), window.setTimeout(vc_waypoints, 500)
}

function getSizeName() {
    var screen_w = jQuery(window).width();
    return 1170 < screen_w ? "desktop_wide" : 960 < screen_w && 1169 > screen_w ? "desktop" : 768 < screen_w && 959 > screen_w ? "tablet" : 300 < screen_w && 767 > screen_w ? "mobile" : 300 > screen_w ? "mobile_portrait" : ""
}

function loadScript(url, $obj, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript", script.readyState && (script.onreadystatechange = function() {
        "loaded" !== script.readyState && "complete" !== script.readyState || (script.onreadystatechange = null, callback())
    }), script.src = url, $obj.get(0).appendChild(script)
}

function vc_ttaActivation() {
    jQuery("[data-vc-accordion]").on("show.vc.accordion", function(e) {
        var $ = window.jQuery,
            ui = {};
        ui.newPanel = $(this).data("vc.accordion").getTarget(), window.wpb_prepare_tab_content(e, ui)
    })
}

function vc_accordionActivate(event, ui) {
    if (ui.newPanel.length && ui.newHeader.length) {
        var $pie_charts = ui.newPanel.find(".vc_pie_chart:not(.vc_ready)"),
            $round_charts = ui.newPanel.find(".vc_round-chart"),
            $line_charts = ui.newPanel.find(".vc_line-chart"),
            $carousel = ui.newPanel.find('[data-ride="vc_carousel"]');
        void 0 !== jQuery.fn.isotope && ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
            var grid = jQuery(this).data("vcGrid");
            grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
        }), vc_carouselBehaviour(ui.newPanel), vc_plugin_flexslider(ui.newPanel), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
            reload: !1
        }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
            reload: !1
        }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), ui.newPanel.parents(".isotope").length && ui.newPanel.parents(".isotope").each(function() {
            jQuery(this).isotope("layout")
        })
    }
}

function initVideoBackgrounds() {
    return window.console && window.console.warn && window.console.warn("this function is deprecated use vc_initVideoBackgrounds"), vc_initVideoBackgrounds()
}

function vc_initVideoBackgrounds() {
    jQuery("[data-vc-video-bg]").each(function() {
        var youtubeUrl, youtubeId, $element = jQuery(this);
        $element.data("vcVideoBg") ? (youtubeUrl = $element.data("vcVideoBg"), youtubeId = vcExtractYoutubeId(youtubeUrl), youtubeId && ($element.find(".vc_video-bg").remove(), insertYoutubeVideoAsBackground($element, youtubeId)), jQuery(window).on("grid:items:added", function(event, $grid) {
            $element.has($grid).length && vcResizeVideoBackground($element)
        })) : $element.find(".vc_video-bg").remove()
    })
}

function insertYoutubeVideoAsBackground($element, youtubeId, counter) {
    if ("undefined" == typeof YT || void 0 === YT.Player) return 100 < (counter = void 0 === counter ? 0 : counter) ? void console.warn("Too many attempts to load YouTube api") : void setTimeout(function() {
        insertYoutubeVideoAsBackground($element, youtubeId, counter++)
    }, 100);
    var $container = $element.prepend('<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>').find(".inner");
    new YT.Player($container[0], {
        width: "100%",
        height: "100%",
        videoId: youtubeId,
        playerVars: {
            playlist: youtubeId,
            iv_load_policy: 3,
            enablejsapi: 1,
            disablekb: 1,
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            rel: 0,
            loop: 1,
            wmode: "transparent"
        },
        events: {
            onReady: function(event) {
                event.target.mute().setLoop(!0)
            }
        }
    }), vcResizeVideoBackground($element), jQuery(window).bind("resize", function() {
        vcResizeVideoBackground($element)
    })
}

function vcResizeVideoBackground($element) {
    var iframeW, iframeH, marginLeft, marginTop, containerW = $element.innerWidth(),
        containerH = $element.innerHeight();
    containerW / containerH < 16 / 9 ? (iframeW = containerH * (16 / 9), iframeH = containerH, marginLeft = -Math.round((iframeW - containerW) / 2) + "px", marginTop = -Math.round((iframeH - containerH) / 2) + "px", iframeW += "px", iframeH += "px") : (iframeW = containerW, iframeH = containerW * (9 / 16), marginTop = -Math.round((iframeH - containerH) / 2) + "px", marginLeft = -Math.round((iframeW - containerW) / 2) + "px", iframeW += "px", iframeH += "px"), $element.find(".vc_video-bg iframe").css({
        maxWidth: "1000%",
        marginLeft: marginLeft,
        marginTop: marginTop,
        width: iframeW,
        height: iframeH
    })
}

function vcExtractYoutubeId(url) {
    if (void 0 === url) return !1;
    var id = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
    return null !== id && id[1]
}

function vc_googleMapsPointer() {
    var $ = window.jQuery,
        $wpbGmapsWidget = $(".wpb_gmaps_widget");
    $wpbGmapsWidget.click(function() {
        $("iframe", this).css("pointer-events", "auto")
    }), $wpbGmapsWidget.mouseleave(function() {
        $("iframe", this).css("pointer-events", "none")
    }), $(".wpb_gmaps_widget iframe").css("pointer-events", "none")
}
document.documentElement.className += " js_active ", document.documentElement.className += "ontouchstart" in document.documentElement ? " vc_mobile " : " vc_desktop ",
    function() {
        for (var prefix = ["-webkit-", "-moz-", "-ms-", "-o-", ""], i = 0; i < prefix.length; i++) prefix[i] + "transform" in document.documentElement.style && (document.documentElement.className += " vc_transform ")
    }(), "function" != typeof window.vc_plugin_flexslider && (window.vc_plugin_flexslider = function($parent) {
        ($parent ? $parent.find(".wpb_flexslider") : jQuery(".wpb_flexslider")).each(function() {
            var this_element = jQuery(this),
                sliderTimeout = 1e3 * parseInt(this_element.attr("data-interval")),
                sliderFx = this_element.attr("data-flex_fx"),
                slideshow = !0;
            0 === sliderTimeout && (slideshow = !1), this_element.is(":visible") && this_element.flexslider({
                animation: sliderFx,
                slideshow: slideshow,
                slideshowSpeed: sliderTimeout,
                sliderSpeed: 800,
                smoothHeight: !0
            })
        })
    }), "function" != typeof window.vc_googleplus && (window.vc_googleplus = function() {
        0 < jQuery(".wpb_googleplus").length && function() {
            var po = document.createElement("script");
            po.type = "text/javascript", po.async = !0, po.src = "//apis.google.com/js/plusone.js";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(po, s)
        }()
    }), "function" != typeof window.vc_pinterest && (window.vc_pinterest = function() {
        0 < jQuery(".wpb_pinterest").length && function() {
            var po = document.createElement("script");
            po.type = "text/javascript", po.async = !0, po.src = "//assets.pinterest.com/js/pinit.js";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(po, s)
        }()
    }), "function" != typeof window.vc_progress_bar && (window.vc_progress_bar = function() {
        void 0 !== jQuery.fn.waypoint && jQuery(".vc_progress_bar").waypoint(function() {
            jQuery(this).find(".vc_single_bar").each(function(index) {
                var $this = jQuery(this),
                    bar = $this.find(".vc_bar"),
                    val = bar.data("percentage-value");
                setTimeout(function() {
                    bar.css({
                        width: val + "%"
                    })
                }, 200 * index)
            })
        }, {
            offset: "85%"
        })
    }), "function" != typeof window.vc_waypoints && (window.vc_waypoints = function() {
        void 0 !== jQuery.fn.waypoint && jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").waypoint(function() {
            jQuery(this).addClass("wpb_start_animation animated")
        }, {
            offset: "85%"
        })
    }), "function" != typeof window.vc_toggleBehaviour && (window.vc_toggleBehaviour = function($el) {
        function event(e) {
            e && e.preventDefault && e.preventDefault();
            var title = jQuery(this),
                element = title.closest(".vc_toggle"),
                content = element.find(".vc_toggle_content");
            element.hasClass("vc_toggle_active") ? content.slideUp({
                duration: 300,
                complete: function() {
                    element.removeClass("vc_toggle_active")
                }
            }) : content.slideDown({
                duration: 300,
                complete: function() {
                    element.addClass("vc_toggle_active")
                }
            })
        }
        $el ? $el.hasClass("vc_toggle_title") ? $el.unbind("click").click(event) : $el.find(".vc_toggle_title").unbind("click").click(event) : jQuery(".vc_toggle_title").unbind("click").on("click", event)
    }), "function" != typeof window.vc_tabsBehaviour && (window.vc_tabsBehaviour = function($tab) {
        if (jQuery.ui) {
            var $call = $tab || jQuery(".wpb_tabs, .wpb_tour"),
                ver = jQuery.ui && jQuery.ui.version ? jQuery.ui.version.split(".") : "1.10",
                old_version = 1 === parseInt(ver[0]) && 9 > parseInt(ver[1]);
            $call.each(function(index) {
                var $tabs, interval = jQuery(this).attr("data-interval"),
                    tabs_array = [];
                if ($tabs = jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({
                        show: function(event, ui) {
                            wpb_prepare_tab_content(event, ui)
                        },
                        beforeActivate: function(event, ui) {
                            1 !== ui.newPanel.index() && ui.newPanel.find(".vc_pie_chart:not(.vc_ready)")
                        },
                        activate: function(event, ui) {
                            wpb_prepare_tab_content(event, ui)
                        }
                    }), interval && 0 < interval) try {
                    $tabs.tabs("rotate", 1e3 * interval)
                } catch (e) {
                    window.console && window.console.log && console.log(e)
                }
                jQuery(this).find(".wpb_tab").each(function() {
                    tabs_array.push(this.id)
                }), jQuery(this).find(".wpb_tabs_nav li").click(function(e) {
                    return e.preventDefault(), old_version ? $tabs.tabs("select", jQuery("a", this).attr("href")) : $tabs.tabs("option", "active", jQuery(this).index()), !1
                }), jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").click(function(e) {
                    if (e.preventDefault(), old_version) {
                        var index = $tabs.tabs("option", "selected");
                        jQuery(this).parent().hasClass("wpb_next_slide") ? index++ : index--, 0 > index ? index = $tabs.tabs("length") - 1 : index >= $tabs.tabs("length") && (index = 0), $tabs.tabs("select", index)
                    } else {
                        var index = $tabs.tabs("option", "active"),
                            length = $tabs.find(".wpb_tab").length;
                        index = jQuery(this).parent().hasClass("wpb_next_slide") ? index + 1 >= length ? 0 : index + 1 : 0 > index - 1 ? length - 1 : index - 1, $tabs.tabs("option", "active", index)
                    }
                })
            })
        }
    }), "function" != typeof window.vc_accordionBehaviour && (window.vc_accordionBehaviour = function() {
        jQuery(".wpb_accordion").each(function(index) {
            var $tabs, $this = jQuery(this),
                active_tab = ($this.attr("data-interval"), !isNaN(jQuery(this).data("active-tab")) && 0 < parseInt($this.data("active-tab")) && parseInt($this.data("active-tab")) - 1),
                collapsible = !1 === active_tab || "yes" === $this.data("collapsible");
            $tabs = $this.find(".wpb_accordion_wrapper").accordion({
                header: "> div > h3",
                autoHeight: !1,
                heightStyle: "content",
                active: active_tab,
                collapsible: collapsible,
                navigation: !0,
                activate: vc_accordionActivate,
                change: function(event, ui) {
                    void 0 !== jQuery.fn.isotope && ui.newContent.find(".isotope").isotope("layout"), vc_carouselBehaviour(ui.newPanel)
                }
            }), !0 === $this.data("vcDisableKeydown") && ($tabs.data("uiAccordion")._keydown = function() {})
        })
    }), "function" != typeof window.vc_teaserGrid && (window.vc_teaserGrid = function() {
        var layout_modes = {
            fitrows: "fitRows",
            masonry: "masonry"
        };
        jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function() {
            var $container = jQuery(this),
                $thumbs = $container.find(".wpb_thumbnails"),
                layout_mode = $thumbs.attr("data-layout-mode");
            $thumbs.isotope({
                itemSelector: ".isotope-item",
                layoutMode: void 0 === layout_modes[layout_mode] ? "fitRows" : layout_modes[layout_mode]
            }), $container.find(".categories_filter a").data("isotope", $thumbs).click(function(e) {
                e.preventDefault();
                var $thumbs = jQuery(this).data("isotope");
                jQuery(this).parent().parent().find(".active").removeClass("active"), jQuery(this).parent().addClass("active"), $thumbs.isotope({
                    filter: jQuery(this).attr("data-filter")
                })
            }), jQuery(window).bind("load resize", function() {
                $thumbs.isotope("layout")
            })
        })
    }), "function" != typeof window.vc_carouselBehaviour && (window.vc_carouselBehaviour = function($parent) {
        ($parent ? $parent.find(".wpb_carousel") : jQuery(".wpb_carousel")).each(function() {
            var $this = jQuery(this);
            if (!0 !== $this.data("carousel_enabled") && $this.is(":visible")) {
                $this.data("carousel_enabled", !0), getColumnsCount(jQuery(this)), jQuery(this).hasClass("columns_count_1");
                var carousele_li = jQuery(this).find(".wpb_thumbnails-fluid li");
                carousele_li.css({
                    "margin-right": carousele_li.css("margin-left"),
                    "margin-left": 0
                });
                var fluid_ul = jQuery(this).find("ul.wpb_thumbnails-fluid");
                fluid_ul.width(fluid_ul.width() + 300), jQuery(window).resize(function() {
                    var before_resize = screen_size;
                    screen_size = getSizeName(), before_resize != screen_size && window.setTimeout("location.reload()", 20)
                })
            }
        })
    }), "function" != typeof window.vc_slidersBehaviour && (window.vc_slidersBehaviour = function() {
        jQuery(".wpb_gallery_slides").each(function(index) {
            var $imagesGrid, this_element = jQuery(this);
            if (this_element.hasClass("wpb_slider_nivo")) {
                var sliderTimeout = 1e3 * this_element.attr("data-interval");
                0 === sliderTimeout && (sliderTimeout = 9999999999), this_element.find(".nivoSlider").nivoSlider({
                    effect: "boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",
                    slices: 15,
                    boxCols: 8,
                    boxRows: 4,
                    animSpeed: 800,
                    pauseTime: sliderTimeout,
                    startSlide: 0,
                    directionNav: !0,
                    directionNavHide: !0,
                    controlNav: !0,
                    keyboardNav: !1,
                    pauseOnHover: !0,
                    manualAdvance: !1,
                    prevText: "Prev",
                    nextText: "Next"
                })
            } else this_element.hasClass("wpb_image_grid") && (jQuery.fn.imagesLoaded ? $imagesGrid = this_element.find(".wpb_image_grid_ul").imagesLoaded(function() {
                $imagesGrid.isotope({
                    itemSelector: ".isotope-item",
                    layoutMode: "fitRows"
                })
            }) : this_element.find(".wpb_image_grid_ul").isotope({
                itemSelector: ".isotope-item",
                layoutMode: "fitRows"
            }))
        })
    }), "function" != typeof window.vc_prettyPhoto && (window.vc_prettyPhoto = function() {
        try {
            jQuery && jQuery.fn && jQuery.fn.prettyPhoto && jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({
                animationSpeed: "normal",
                hook: "data-rel",
                padding: 15,
                opacity: .7,
                showTitle: !0,
                allowresize: !0,
                counter_separator_label: "/",
                hideflash: !1,
                deeplinking: !1,
                modal: !1,
                callback: function() {
                    location.href.indexOf("#!prettyPhoto") > -1 && (location.hash = "")
                },
                social_tools: ""
            })
        } catch (err) {
            window.console && window.console.log && console.log(err)
        }
    }), "function" != typeof window.vc_google_fonts && (window.vc_google_fonts = function() {
        return !1
    }), window.vcParallaxSkroll = !1, "function" != typeof window.vc_rowBehaviour && (window.vc_rowBehaviour = function() {
        function fullWidthRow() {
            var $elements = $('[data-vc-full-width="true"]');
            $.each($elements, function(key, item) {
                var $el = $(this);
                $el.addClass("vc_hidden");
                var $el_full = $el.next(".vc_row-full-width");
                if ($el_full.length || ($el_full = $el.parent().next(".vc_row-full-width")), $el_full.length) {
                    var el_margin_left = parseInt($el.css("margin-left"), 10),
                        el_margin_right = parseInt($el.css("margin-right"), 10),
                        offset = 0 - $el_full.offset().left - el_margin_left,
                        width = $(window).width();
                    if ($el.css({
                            position: "relative",
                            left: offset,
                            "box-sizing": "border-box",
                            width: $(window).width()
                        }), !$el.data("vcStretchContent")) {
                        var padding = -1 * offset;
                        0 > padding && (padding = 0);
                        var paddingRight = width - padding - $el_full.width() + el_margin_left + el_margin_right;
                        0 > paddingRight && (paddingRight = 0), $el.css({
                            "padding-left": padding + "px",
                            "padding-right": paddingRight + "px"
                        })
                    }
                    $el.attr("data-vc-full-width-init", "true"), $el.removeClass("vc_hidden"), $(document).trigger("vc-full-width-row-single", {
                        el: $el,
                        offset: offset,
                        marginLeft: el_margin_left,
                        marginRight: el_margin_right,
                        elFull: $el_full,
                        width: width
                    })
                }
            }), $(document).trigger("vc-full-width-row", $elements)
        }

        function fullHeightRow() {
            var $element = $(".vc_row-o-full-height:first");
            if ($element.length) {
                var $window, windowHeight, offsetTop, fullHeight;
                $window = $(window), windowHeight = $window.height(), offsetTop = $element.offset().top, offsetTop < windowHeight && (fullHeight = 100 - offsetTop / (windowHeight / 100), $element.css("min-height", fullHeight + "vh"))
            }
            $(document).trigger("vc-full-height-row", $element)
        }
        var $ = window.jQuery;
        $(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour", fullWidthRow).on("resize.vcRowBehaviour", fullHeightRow), fullWidthRow(), fullHeightRow(),
            function() {
                (window.navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) && $(".vc_row-o-full-height").each(function() {
                    "flex" === $(this).css("display") && $(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')
                })
            }(), vc_initVideoBackgrounds(),
            function() {
                var vcSkrollrOptions, callSkrollInit = !1;
                window.vcParallaxSkroll && window.vcParallaxSkroll.destroy(), $(".vc_parallax-inner").remove(), $("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"), $("[data-vc-parallax]").each(function() {
                    var skrollrSpeed, skrollrSize, skrollrStart, skrollrEnd, $parallaxElement, parallaxImage, youtubeId;
                    callSkrollInit = !0, "on" === $(this).data("vcParallaxOFade") && $(this).children().attr("data-5p-top-bottom", "opacity:0;").attr("data-30p-top-bottom", "opacity:1;"), skrollrSize = 100 * $(this).data("vcParallax"), $parallaxElement = $("<div />").addClass("vc_parallax-inner").appendTo($(this)), $parallaxElement.height(skrollrSize + "%"), parallaxImage = $(this).data("vcParallaxImage"), youtubeId = vcExtractYoutubeId(parallaxImage), youtubeId ? insertYoutubeVideoAsBackground($parallaxElement, youtubeId) : void 0 !== parallaxImage && $parallaxElement.css("background-image", "url(" + parallaxImage + ")"), skrollrSpeed = skrollrSize - 100, skrollrStart = -skrollrSpeed, skrollrEnd = 0, $parallaxElement.attr("data-bottom-top", "top: " + skrollrStart + "%;").attr("data-top-bottom", "top: " + skrollrEnd + "%;")
                }), !(!callSkrollInit || !window.skrollr) && (vcSkrollrOptions = {
                    forceHeight: !1,
                    smoothScrolling: !1,
                    mobileCheck: function() {
                        return !1
                    }
                }, window.vcParallaxSkroll = skrollr.init(vcSkrollrOptions), window.vcParallaxSkroll)
            }()
    }), "function" != typeof window.vc_gridBehaviour && (window.vc_gridBehaviour = function() {
        jQuery.fn.vcGrid && jQuery("[data-vc-grid]").vcGrid()
    }), "function" != typeof window.getColumnsCount && (window.getColumnsCount = function(el) {
        for (var find = !1, i = 1; !1 === find;) {
            if (el.hasClass("columns_count_" + i)) return find = !0, i;
            i++
        }
    });
var screen_size = getSizeName();
"function" != typeof window.wpb_prepare_tab_content && (window.wpb_prepare_tab_content = function(event, ui) {
    var $ui_panel, $google_maps, panel = ui.panel || ui.newPanel,
        $pie_charts = panel.find(".vc_pie_chart:not(.vc_ready)"),
        $round_charts = panel.find(".vc_round-chart"),
        $line_charts = panel.find(".vc_line-chart"),
        $carousel = panel.find('[data-ride="vc_carousel"]');
    if (vc_carouselBehaviour(), vc_plugin_flexslider(panel), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
            var grid = jQuery(this).data("vcGrid");
            grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
        }), panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
            var grid = jQuery(this).data("vcGrid");
            grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
        }), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
            reload: !1
        }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
            reload: !1
        }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), $ui_panel = panel.find(".isotope, .wpb_image_grid_ul"), $google_maps = panel.find(".wpb_gmaps_widget"), 0 < $ui_panel.length && $ui_panel.isotope("layout"), $google_maps.length && !$google_maps.is(".map_ready")) {
        var $frame = $google_maps.find("iframe");
        $frame.attr("src", $frame.attr("src")), $google_maps.addClass("map_ready")
    }
    panel.parents(".isotope").length && panel.parents(".isotope").each(function() {
        jQuery(this).isotope("layout")
    })
}), window.vc_googleMapsPointer, jQuery(document).ready(function($) {
    window.vc_js()
});;
var G5Plus_Product_Categories_Home = G5Plus_Product_Categories_Home || {};
(function($) {
    "use strict";
    G5Plus_Product_Categories_Home = {
        init: function() {
            G5Plus_Product_Categories_Home.setHeight();
            G5Plus_Product_Categories_Home.showMoreClick();
        },
        setHeight: function() {
            $('.sc-product-categories-home-wrap').each(function() {
                /*var wrapCurrent=$(this);var heightFull=$('.product-categories-home',wrapCurrent).outerHeight()+parseInt($(wrapCurrent).css('padding-top').replace('px',''),10)+parseInt($(wrapCurrent).css('padding-bottom').replace('px',''),10);var heightConfig=parseInt($(wrapCurrent).data('height'),10);var responsivePoint=767;if($(wrapCurrent).hasClass('style-02')){responsivePoint=991;}
                        if(!isNaN(heightConfig)){if(window.matchMedia('(max-width: '+responsivePoint+'px)').matches&&(heightConfig>heightFull)){$(wrapCurrent).css('height','');}else{$(wrapCurrent).css('height',heightConfig+'px');}}*/
            });
        },
        showMoreClick: function() {
            /*var wrap=$('.sc-product-categories-home-wrap');$(wrap).on('click','.show-more',function(){var wrapCurrent=$(this).parent();var heightFull=$('.product-categories-home',wrapCurrent).outerHeight()+parseInt($(wrapCurrent).css('padding-top').replace('px',''),10)+parseInt($(wrapCurrent).css('padding-bottom').replace('px',''),10);var heightConfig=parseInt($(wrapCurrent).data('height'),10);var heightCurrent=$(wrapCurrent).css('height');if(heightCurrent.indexOf('px')>=0){heightCurrent=parseInt(heightCurrent.replace('px',''),10);}
                    if(isNaN(heightConfig)||(heightConfig>=heightFull)){return;}
                    if(heightConfig==heightCurrent){$(wrapCurrent).css('height',heightFull+'px');$(this).addClass('up');}else{$(wrapCurrent).css('height',heightConfig+'px');$(this).removeClass('up');}});*/
        },
        isDesktop: function() {
            return window.matchMedia('(max-width: 767px)').matches;
        },
        windowResized: function() {
            G5Plus_Product_Categories_Home.setHeight();
        }
    };
    $(document).ready(G5Plus_Product_Categories_Home.init);
    $(window).resize(G5Plus_Product_Categories_Home.windowResized);
})(jQuery);; + function($) {
    "use strict";

    function Plugin(action, options) {
        var args;
        return args = Array.prototype.slice.call(arguments, 1), this.each(function() {
            var $this, data;
            $this = $(this), data = $this.data("vc.accordion"), data || (data = new Accordion($this, $.extend(!0, {}, options)), $this.data("vc.accordion", data)), "string" == typeof action && data[action].apply(data, args)
        })
    }
    var Accordion, clickHandler, old, hashNavigation;
    Accordion = function($element, options) {
        this.$element = $element, this.activeClass = "vc_active", this.animatingClass = "vc_animating", this.useCacheFlag = void 0, this.$target = void 0, this.$targetContent = void 0, this.selector = void 0, this.$container = void 0, this.animationDuration = void 0, this.index = 0
    }, Accordion.transitionEvent = function() {
        var transition, transitions, el;
        el = document.createElement("vcFakeElement"), transitions = {
            transition: "transitionend",
            MSTransition: "msTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd"
        };
        for (transition in transitions)
            if (void 0 !== el.style[transition]) return transitions[transition]
    }, Accordion.emulateTransitionEnd = function($el, duration) {
        var callback, called;
        called = !1, duration || (duration = 250), $el.one(Accordion.transitionName, function() {
            called = !0
        }), callback = function() {
            called || $el.trigger(Accordion.transitionName)
        }, setTimeout(callback, duration)
    }, Accordion.DEFAULT_TYPE = "collapse", Accordion.transitionName = Accordion.transitionEvent(), Accordion.prototype.controller = function(options) {
        var $this;
        $this = this.$element;
        var action = options;
        "string" != typeof action && (action = $this.data("vcAction") || this.getContainer().data("vcAction")), void 0 === action && (action = Accordion.DEFAULT_TYPE), "string" == typeof action && Plugin.call($this, action, options)
    }, Accordion.prototype.isCacheUsed = function() {
        var useCache, that;
        return that = this, useCache = function() {
            return !1 !== that.$element.data("vcUseCache")
        }, void 0 === this.useCacheFlag && (this.useCacheFlag = useCache()), this.useCacheFlag
    }, Accordion.prototype.getSelector = function() {
        var findSelector, $this;
        return $this = this.$element, findSelector = function() {
            var selector;
            return selector = $this.data("vcTarget"), selector || (selector = $this.attr("href")), selector
        }, this.isCacheUsed() ? (void 0 === this.selector && (this.selector = findSelector()), this.selector) : findSelector()
    }, Accordion.prototype.findContainer = function() {
        var $container;
        return $container = this.$element.closest(this.$element.data("vcContainer")), $container.length || ($container = $("body")), $container
    }, Accordion.prototype.getContainer = function() {
        return this.isCacheUsed() ? (void 0 === this.$container && (this.$container = this.findContainer()), this.$container) : this.findContainer()
    }, Accordion.prototype.getTarget = function() {
        var selector, that, getTarget;
        return that = this, selector = that.getSelector(), getTarget = function() {
            var element;
            return element = that.getContainer().find(selector), element.length || (element = that.getContainer().filter(selector)), element
        }, this.isCacheUsed() ? (void 0 === this.$target && (this.$target = getTarget()), this.$target) : getTarget()
    }, Accordion.prototype.getTargetContent = function() {
        var $target, $targetContent;
        return $target = this.getTarget(), this.isCacheUsed() ? (void 0 === this.$targetContent && ($targetContent = $target, $target.data("vcContent") && ($targetContent = $target.find($target.data("vcContent")), $targetContent.length || ($targetContent = $target)), this.$targetContent = $targetContent), this.$targetContent) : $target.data("vcContent") && ($targetContent = $target.find($target.data("vcContent")), $targetContent.length) ? $targetContent : $target
    }, Accordion.prototype.getTriggers = function() {
        var i;
        return i = 0, this.getContainer().find("[data-vc-accordion]").each(function() {
            var accordion, $this;
            $this = $(this), accordion = $this.data("vc.accordion"), void 0 === accordion && ($this.vcAccordion(), accordion = $this.data("vc.accordion")), accordion && accordion.setIndex && accordion.setIndex(i++)
        })
    }, Accordion.prototype.setIndex = function(index) {
        this.index = index
    }, Accordion.prototype.getIndex = function() {
        return this.index
    }, Accordion.prototype.triggerEvent = function(event, opt) {
        var $event;
        "string" == typeof event && ($event = $.Event(event), this.$element.trigger($event, opt))
    }, Accordion.prototype.getActiveTriggers = function() {
        return this.getTriggers().filter(function() {
            var $this, accordion;
            return $this = $(this), accordion = $this.data("vc.accordion"), accordion.getTarget().hasClass(accordion.activeClass)
        })
    }, Accordion.prototype.changeLocationHash = function() {
        var id, $target;
        $target = this.getTarget(), $target.length && (id = $target.attr("id")), id && (history.pushState ? history.pushState(null, null, "#" + id) : location.hash = "#" + id)
    }, Accordion.prototype.isActive = function() {
        return this.getTarget().hasClass(this.activeClass)
    }, Accordion.prototype.getAnimationDuration = function() {
        var findAnimationDuration, that;
        return that = this, findAnimationDuration = function() {
            var $targetContent, duration;
            return void 0 === Accordion.transitionName ? "0s" : ($targetContent = that.getTargetContent(), duration = $targetContent.css("transition-duration"), duration = duration.split(",")[0])
        }, this.isCacheUsed() ? (void 0 === this.animationDuration && (this.animationDuration = findAnimationDuration()), this.animationDuration) : findAnimationDuration()
    }, Accordion.prototype.getAnimationDurationMilliseconds = function() {
        var duration;
        return duration = this.getAnimationDuration(), "ms" === duration.substr(-2) ? parseInt(duration) : "s" === duration.substr(-1) ? Math.round(1e3 * parseFloat(duration)) : void 0
    }, Accordion.prototype.isAnimated = function() {
        return parseFloat(this.getAnimationDuration()) > 0
    }, Accordion.prototype.show = function(opt) {
        var $target, that, $targetContent;
        that = this, $target = that.getTarget(), $targetContent = that.getTargetContent(), that.isActive() || (that.isAnimated() ? (that.triggerEvent("beforeShow.vc.accordion"), $target.queue(function(next) {
            $targetContent.one(Accordion.transitionName, function() {
                $target.removeClass(that.animatingClass), $targetContent.attr("style", ""), that.triggerEvent("afterShow.vc.accordion", opt)
            }), Accordion.emulateTransitionEnd($targetContent, that.getAnimationDurationMilliseconds() + 100), next()
        }).queue(function(next) {
            $targetContent.attr("style", ""), $targetContent.css({
                position: "absolute",
                visibility: "hidden",
                display: "block"
            });
            var height = $targetContent.height();
            $targetContent.data("vcHeight", height), $targetContent.attr("style", ""), next()
        }).queue(function(next) {
            $targetContent.height(0), $targetContent.css({
                "padding-top": 0,
                "padding-bottom": 0
            }), next()
        }).queue(function(next) {
            $target.addClass(that.animatingClass), $target.addClass(that.activeClass), ("object" == typeof opt && opt.hasOwnProperty("changeHash") && opt.changeHash || void 0 === opt) && that.changeLocationHash(), that.triggerEvent("show.vc.accordion", opt), next()
        }).queue(function(next) {
            var height = $targetContent.data("vcHeight");
            $targetContent.animate({
                height: height
            }, {
                duration: that.getAnimationDurationMilliseconds(),
                complete: function() {
                    $targetContent.data("events") || $targetContent.attr("style", "")
                }
            }), $targetContent.css({
                "padding-top": "",
                "padding-bottom": ""
            }), next()
        })) : ($target.addClass(that.activeClass), that.triggerEvent("show.vc.accordion", opt)))
    }, Accordion.prototype.hide = function(opt) {
        var $target, that, $targetContent;
        that = this, $target = that.getTarget(), $targetContent = that.getTargetContent(), that.isActive() && (that.isAnimated() ? (that.triggerEvent("beforeHide.vc.accordion"), $target.queue(function(next) {
            $targetContent.one(Accordion.transitionName, function() {
                $target.removeClass(that.animatingClass), $targetContent.attr("style", ""), that.triggerEvent("afterHide.vc.accordion", opt)
            }), Accordion.emulateTransitionEnd($targetContent, that.getAnimationDurationMilliseconds() + 100), next()
        }).queue(function(next) {
            $target.addClass(that.animatingClass), $target.removeClass(that.activeClass), that.triggerEvent("hide.vc.accordion", opt), next()
        }).queue(function(next) {
            var height = $targetContent.height();
            $targetContent.height(height), next()
        }).queue(function(next) {
            $targetContent.animate({
                height: 0
            }, that.getAnimationDurationMilliseconds()), $targetContent.css({
                "padding-top": 0,
                "padding-bottom": 0
            }), next()
        })) : ($target.removeClass(that.activeClass), that.triggerEvent("hide.vc.accordion", opt)))
    }, Accordion.prototype.toggle = function(opt) {
        var $this;
        $this = this.$element, this.isActive() ? Plugin.call($this, "hide", opt) : Plugin.call($this, "show", opt)
    }, Accordion.prototype.dropdown = function(opt) {
        var $this;
        $this = this.$element, this.isActive() ? Plugin.call($this, "hide", opt) : (Plugin.call($this, "show", opt), $(document).on("click.vc.accordion.data-api.dropdown", function(e) {
            Plugin.call($this, "hide", opt), $(document).off(e)
        }))
    }, Accordion.prototype.collapse = function(opt) {
        var $this, $triggers;
        $this = this.$element, $triggers = this.getActiveTriggers().filter(function() {
            return $this[0] !== this
        }), $triggers.length && Plugin.call($triggers, "hide", opt), Plugin.call($this, "show", opt)
    }, Accordion.prototype.collapseAll = function(opt) {
        var $this, $triggers;
        $this = this.$element, $triggers = this.getActiveTriggers().filter(function() {
            return $this[0] !== this
        }), $triggers.length && Plugin.call($triggers, "hide", opt), Plugin.call($this, "toggle", opt)
    }, Accordion.prototype.showNext = function(opt) {
        var $triggers, $activeTriggers, activeIndex;
        if ($triggers = this.getTriggers(), $activeTriggers = this.getActiveTriggers(), $triggers.length) {
            if ($activeTriggers.length) {
                var lastActiveAccordion;
                lastActiveAccordion = $activeTriggers.eq($activeTriggers.length - 1).vcAccordion().data("vc.accordion"), lastActiveAccordion && lastActiveAccordion.getIndex && (activeIndex = lastActiveAccordion.getIndex())
            } - 1 < activeIndex && activeIndex + 1 < $triggers.length ? Plugin.call($triggers.eq(activeIndex + 1), "controller", opt) : Plugin.call($triggers.eq(0), "controller", opt)
        }
    }, Accordion.prototype.showPrev = function(opt) {
        var $triggers, $activeTriggers, activeIndex;
        if ($triggers = this.getTriggers(), $activeTriggers = this.getActiveTriggers(), $triggers.length) {
            if ($activeTriggers.length) {
                var lastActiveAccordion;
                lastActiveAccordion = $activeTriggers.eq($activeTriggers.length - 1).vcAccordion().data("vc.accordion"), lastActiveAccordion && lastActiveAccordion.getIndex && (activeIndex = lastActiveAccordion.getIndex())
            } - 1 < activeIndex ? 0 <= activeIndex - 1 ? Plugin.call($triggers.eq(activeIndex - 1), "controller", opt) : Plugin.call($triggers.eq($triggers.length - 1), "controller", opt) : Plugin.call($triggers.eq(0), "controller", opt)
        }
    }, Accordion.prototype.showAt = function(index, opt) {
        var $triggers;
        $triggers = this.getTriggers(), $triggers.length && index && index < $triggers.length && Plugin.call($triggers.eq(index), "controller", opt)
    }, Accordion.prototype.scrollToActive = function(opt) {
        if (void 0 === opt || void 0 === opt.scrollTo || opt.scrollTo) {
            var that, $targetElement, offset, delay, speed;
            that = this, offset = 1, delay = 300, speed = 300, $targetElement = $(this.getTarget()), $targetElement.length && this.$element.length && setTimeout(function() {
                $targetElement.offset().top - $(window).scrollTop() - that.$element.outerHeight() * offset < 0 && $("html, body").animate({
                    scrollTop: $targetElement.offset().top - that.$element.outerHeight() * offset
                }, speed)
            }, delay)
        }
    }, old = $.fn.vcAccordion, $.fn.vcAccordion = Plugin, $.fn.vcAccordion.Constructor = Accordion, $.fn.vcAccordion.noConflict = function() {
        return $.fn.vcAccordion = old, this
    }, clickHandler = function(e) {
        var $this;
        $this = $(this), e.preventDefault(), Plugin.call($this, "controller")
    }, hashNavigation = function() {
        var hash, $targetElement, $accordion, offset, delay, speed;
        offset = .2, delay = 300, speed = 0, (hash = window.location.hash) && ($targetElement = $(hash), $targetElement.length && ($accordion = $targetElement.find('[data-vc-accordion][href="' + hash + '"],[data-vc-accordion][data-vc-target="' + hash + '"]'), $accordion.length && (setTimeout(function() {
            $("html, body").animate({
                scrollTop: $targetElement.offset().top - $(window).height() * offset
            }, speed)
        }, delay), $accordion.trigger("click"))))
    }, $(window).on("hashchange.vc.accordion", hashNavigation), $(document).on("click.vc.accordion.data-api", "[data-vc-accordion]", clickHandler), $(document).on("ready.vc.accordion", hashNavigation), $(document).on("afterShow.vc.accordion", function(e, opt) {
        Plugin.call($(e.target), "scrollToActive", opt)
    })
}(window.jQuery);; + function($) {
    "use strict";

    function startAutoPlay() {
        $("[data-vc-tta-autoplay]").each(function() {
            $(this).vcTtaAutoPlay()
        })
    }
    var Plugin, TtaAutoPlay, old;
    Plugin = function(action, options) {
        var args;
        return args = Array.prototype.slice.call(arguments, 1), this.each(function() {
            var $this, data;
            $this = $(this), data = $this.data("vc.tta.autoplay"), data || (data = new TtaAutoPlay($this, $.extend(!0, {}, TtaAutoPlay.DEFAULTS, $this.data("vc-tta-autoplay"), options)), $this.data("vc.tta.autoplay", data)), "string" == typeof action ? data[action].apply(data, args) : data.start(args)
        })
    }, TtaAutoPlay = function($element, options) {
        this.$element = $element, this.options = options
    }, TtaAutoPlay.DEFAULTS = {
        delay: 5e3,
        pauseOnHover: !0,
        stopOnClick: !0
    }, TtaAutoPlay.prototype.show = function() {
        this.$element.find("[data-vc-accordion]:eq(0)").vcAccordion("showNext", {
            changeHash: !1,
            scrollTo: !1
        })
    }, TtaAutoPlay.prototype.hasTimer = function() {
        return void 0 !== this.$element.data("vc.tta.autoplay.timer")
    }, TtaAutoPlay.prototype.setTimer = function(windowInterval) {
        this.$element.data("vc.tta.autoplay.timer", windowInterval)
    }, TtaAutoPlay.prototype.getTimer = function() {
        return this.$element.data("vc.tta.autoplay.timer")
    }, TtaAutoPlay.prototype.deleteTimer = function() {
        this.$element.removeData("vc.tta.autoplay.timer")
    }, TtaAutoPlay.prototype.start = function() {
        function stopHandler(e) {
            e.preventDefault && e.preventDefault(), that.hasTimer() && Plugin.call($this, "stop")
        }

        function hoverHandler(e) {
            e.preventDefault && e.preventDefault(), that.hasTimer() && Plugin.call($this, "mouseleave" === e.type ? "resume" : "pause")
        }
        var $this, that;
        $this = this.$element, that = this, this.hasTimer() || (this.setTimer(window.setInterval(this.show.bind(this), this.options.delay)), this.options.stopOnClick && $this.on("click.vc.tta.autoplay.data-api", "[data-vc-accordion]", stopHandler), this.options.pauseOnHover && $this.hover(hoverHandler))
    }, TtaAutoPlay.prototype.resume = function() {
        this.hasTimer() && this.setTimer(window.setInterval(this.show.bind(this), this.options.delay))
    }, TtaAutoPlay.prototype.stop = function() {
        this.pause(), this.deleteTimer(), this.$element.off("click.vc.tta.autoplay.data-api mouseenter mouseleave")
    }, TtaAutoPlay.prototype.pause = function() {
        var timer;
        void 0 !== (timer = this.getTimer()) && window.clearInterval(timer)
    }, old = $.fn.vcTtaAutoPlay, $.fn.vcTtaAutoPlay = Plugin, $.fn.vcTtaAutoPlay.Constructor = TtaAutoPlay, $.fn.vcTtaAutoPlay.noConflict = function() {
        return $.fn.vcTtaAutoPlay = old, this
    }, $(document).ready(startAutoPlay)
}(window.jQuery);; + function($) {
    "use strict";

    function Plugin(action, options) {
        var args;
        return args = Array.prototype.slice.call(arguments, 1), this.each(function() {
            var $this, data;
            $this = $(this), data = $this.data("vc.tabs"), data || (data = new Tabs($this, $.extend(!0, {}, options)), $this.data("vc.tabs", data)), "string" == typeof action && data[action].apply(data, args)
        })
    }
    var Tabs, old, clickHandler, changeHandler;
    Tabs = function(element, options) {
        this.$element = $(element), this.activeClass = "vc_active", this.tabSelector = "[data-vc-tab]", this.useCacheFlag = void 0, this.$target = void 0, this.selector = void 0, this.$targetTab = void 0, this.$relatedAccordion = void 0, this.$container = void 0
    }, Tabs.prototype.isCacheUsed = function() {
        var useCache, that;
        return that = this, useCache = function() {
            return !1 !== that.$element.data("vcUseCache")
        }, void 0 === this.useCacheFlag && (this.useCacheFlag = useCache()), this.useCacheFlag
    }, Tabs.prototype.getContainer = function() {
        return this.isCacheUsed() ? (void 0 === this.$container && (this.$container = this.findContainer()), this.$container) : this.findContainer()
    }, Tabs.prototype.findContainer = function() {
        var $container;
        return $container = this.$element.closest(this.$element.data("vcContainer")), $container.length || ($container = $("body")), $container
    }, Tabs.prototype.getContainerAccordion = function() {
        return this.getContainer().find("[data-vc-accordion]")
    }, Tabs.prototype.getSelector = function() {
        var findSelector, $this;
        return $this = this.$element, findSelector = function() {
            var selector;
            return selector = $this.data("vcTarget"), selector || (selector = $this.attr("href")), selector
        }, this.isCacheUsed() ? (void 0 === this.selector && (this.selector = findSelector()), this.selector) : findSelector()
    }, Tabs.prototype.getTarget = function() {
        var selector;
        return selector = this.getSelector(), this.isCacheUsed() ? (void 0 === this.$target && (this.$target = this.getContainer().find(selector)), this.$target) : this.getContainer().find(selector)
    }, Tabs.prototype.getRelatedAccordion = function() {
        var tab, filterElements;
        return tab = this, filterElements = function() {
            var $elements;
            if ($elements = tab.getContainerAccordion().filter(function() {
                    var $that, accordion;
                    return $that = $(this), accordion = $that.data("vc.accordion"), void 0 === accordion && ($that.vcAccordion(), accordion = $that.data("vc.accordion")), tab.getSelector() === accordion.getSelector()
                }), $elements.length) return $elements
        }, this.isCacheUsed() ? (void 0 === this.$relatedAccordion && (this.$relatedAccordion = filterElements()), this.$relatedAccordion) : filterElements()
    }, Tabs.prototype.triggerEvent = function(event) {
        var $event;
        "string" == typeof event && ($event = $.Event(event), this.$element.trigger($event))
    }, Tabs.prototype.getTargetTab = function() {
        var $this;
        return $this = this.$element, this.isCacheUsed() ? (void 0 === this.$targetTab && (this.$targetTab = $this.closest(this.tabSelector)), this.$targetTab) : $this.closest(this.tabSelector)
    }, Tabs.prototype.tabClick = function() {
        this.getRelatedAccordion().trigger("click")
    }, Tabs.prototype.show = function() {
        this.getTargetTab().hasClass(this.activeClass) || (this.triggerEvent("show.vc.tab"), this.getTargetTab().addClass(this.activeClass))
    }, Tabs.prototype.hide = function() {
        this.getTargetTab().hasClass(this.activeClass) && (this.triggerEvent("hide.vc.tab"), this.getTargetTab().removeClass(this.activeClass))
    }, old = $.fn.vcTabs, $.fn.vcTabs = Plugin, $.fn.vcTabs.Constructor = Tabs, $.fn.vcTabs.noConflict = function() {
        return $.fn.vcTabs = old, this
    }, clickHandler = function(e) {
        var $this;
        $this = $(this), e.preventDefault(), Plugin.call($this, "tabClick")
    }, changeHandler = function(e) {
        var caller;
        caller = $(e.target).data("vc.accordion"), void 0 === caller.getRelatedTab && (caller.getRelatedTab = function() {
            var findTargets;
            return findTargets = function() {
                return caller.getContainer().find("[data-vc-tabs]").filter(function() {
                    var $this, tab;
                    return $this = $(this), tab = $this.data("vc.accordion"), void 0 === tab && $this.vcAccordion(), tab = $this.data("vc.accordion"), tab.getSelector() === caller.getSelector()
                })
            }, caller.isCacheUsed() ? (void 0 === caller.relatedTab && (caller.relatedTab = findTargets()), caller.relatedTab) : findTargets()
        }), Plugin.call(caller.getRelatedTab(), e.type)
    }, $(document).on("click.vc.tabs.data-api", "[data-vc-tabs]", clickHandler), $(document).on("show.vc.accordion hide.vc.accordion", changeHandler)
}(window.jQuery);;
(function($) {
    "use strict";
    var G5PlusGoogleMap = {
        init: function() {
            var mapStyleArr = [];
            mapStyleArr['none'] = [];
            mapStyleArr['gray_scale'] = [{
                "featureType": "landscape",
                "stylers": [{
                    "saturation": -100
                }, {
                    "lightness": 65
                }, {
                    "visibility": "on"
                }]
            }, {
                "featureType": "poi",
                "stylers": [{
                    "saturation": -100
                }, {
                    "lightness": 51
                }, {
                    "visibility": "simplified"
                }]
            }, {
                "featureType": "road.highway",
                "stylers": [{
                    "saturation": -100
                }, {
                    "visibility": "simplified"
                }]
            }, {
                "featureType": "road.arterial",
                "stylers": [{
                    "saturation": -100
                }, {
                    "lightness": 30
                }, {
                    "visibility": "on"
                }]
            }, {
                "featureType": "road.local",
                "stylers": [{
                    "saturation": -100
                }, {
                    "lightness": 40
                }, {
                    "visibility": "on"
                }]
            }, {
                "featureType": "transit",
                "stylers": [{
                    "saturation": -100
                }, {
                    "visibility": "simplified"
                }]
            }, {
                "featureType": "administrative.province",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "lightness": -25
                }, {
                    "saturation": -100
                }]
            }, {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "hue": "#ffff00"
                }, {
                    "lightness": -25
                }, {
                    "saturation": -97
                }]
            }];
            mapStyleArr['icy_blue'] = [{
                "stylers": [{
                    "hue": "#2c3e50"
                }, {
                    "saturation": 250
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "lightness": 50
                }, {
                    "visibility": "simplified"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            }];
            mapStyleArr['mono_green'] = [{
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#8dcaaa"
                }]
            }, {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#8dcaaa"
                }, {
                    "lightness": "60"
                }, {
                    "saturation": "20"
                }]
            }, {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#8dcaaa"
                }, {
                    "lightness": "-40"
                }, {
                    "weight": "3"
                }, {
                    "saturation": "10"
                }]
            }, {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{
                    "lightness": "-20"
                }]
            }, {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "lightness": "-15"
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "lightness": "-35"
                }]
            }, {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{
                    "lightness": "-10"
                }]
            }];
            $('.handmade-google-map').each(function() {
                var locationX = $(this).attr('data-location-x');
                var locationY = $(this).attr('data-location-y');
                var markerTitle = $(this).attr('data-marker-title');
                var mapZoom = $(this).attr('data-map-zoom');
                var mapStyle = $(this).attr('data-map-style');
                if (locationX == '') {
                    locationX = 0;
                }
                if (locationY == '') {
                    locationY = 0;
                }
                if (mapZoom == '') {
                    mapZoom = 11;
                }
                mapZoom = parseInt(mapZoom, 10);
                if (typeof(mapStyleArr[mapStyle]) == "undefined") {
                    mapStyle = 'none';
                }
                var mapOptions = {
                    zoom: mapZoom,
                    scrollwheel: false,
                    center: new google.maps.LatLng(locationX, locationY),
                    styles: mapStyleArr[mapStyle]
                };
                var mapElement = this;
                var map = new google.maps.Map(mapElement, mapOptions);
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locationX, locationY),
                    map: map,
                    title: markerTitle
                });
            });
        }
    };
    $(document).ready(G5PlusGoogleMap.init);
})(jQuery);;
var APP_XMENU = APP_XMENU || {};
(function($) {
    "use strict";
    APP_XMENU = {
        timeOutHoverMenu: [],
        timeOutHoverOutMenu: [],
        initialize: function() {
            APP_XMENU.event();
        },
        event: function() {
            APP_XMENU.window_resize();
            APP_XMENU.menu_event();
            APP_XMENU.window_scroll();
            APP_XMENU.tabs_position(5);
            APP_XMENU.windowLoad();
        },
        windowLoad: function() {
            $(window).load(function() {
                $('header.main-header .x-nav-menu').each(function() {
                    var main_menu = this;
                    $('header.main-header .x-nav-menu > li').each(function() {
                        APP_XMENU.process_menu_position(this);
                        APP_XMENU.process_tab_padding(this, main_menu);
                    });
                });
            });
        },
        window_scroll: function() {
            $(window).on('scroll', function(event) {
                if (APP_XMENU.is_desktop()) {
                    $('header.main-header .x-nav-menu > li').each(function() {
                        APP_XMENU.process_menu_position(this);
                    });
                }
            });
        },
        window_resize: function() {
            $(window).resize(function() {
                if (APP_XMENU.is_desktop()) {
                    APP_XMENU.tabs_position(5);
                    $('header.main-header .x-nav-menu').each(function() {
                        var main_menu = this;
                        $('header.main-header .x-nav-menu > li').each(function() {
                            APP_XMENU.process_menu_position(this);
                            APP_XMENU.process_tab_padding(this, main_menu);
                        });
                    });
                }
            });
        },
        tabs_position: function(number_retry) {
            $('header.main-header ul.x-nav-menu').each(function() {
                if ($(this).hasClass('x-nav-vmenu')) {
                    return;
                }
                $('.x-sub-menu-tab', this).each(function() {
                    var $this = $(this);
                    var tab_left_width = $(this).parent().outerWidth();
                    if ($('> li.x-menu-active', this).length == 0) {
                        $('> li:first-child', this).addClass('x-menu-active');
                    }
                    $('> li', this).each(function() {
                        $('> ul', this).css('left', tab_left_width + 'px');
                    });
                    $('> li.x-menu-active', this).each(function() {
                        APP_XMENU.tab_position($(this));
                    });
                });
                if (number_retry > 0) {
                    setTimeout(function() {
                        APP_XMENU.tabs_position(number_retry - 1);
                    }, 500);
                }
            });
        },
        tab_position: function($tab) {
            var tab_right_height = 0;
            if ($('> ul', $tab).length != 0) {
                tab_right_height = $('> ul', $tab).outerHeight();
            }
            $tab.parent().css('min-height', tab_right_height + 'px');
        },
        menu_event: function() {
            $('header.main-header .x-sub-menu-tab > li:first-child').addClass('x-menu-active');
            APP_XMENU.process_menu_mobile_click();
            $('header.main-header .x-nav-menu').each(function() {
                if ($(this).hasClass('x-nav-vmenu')) {
                    return;
                }
                var transition_name = APP_XMENU.get_transition_name(this);
                APP_XMENU.transition_menu(this, transition_name, this);
                $('.x-sub-menu-tab > li', this).hover(function() {
                    if (!APP_XMENU.is_desktop()) {
                        return;
                    }
                    $('> li', $(this).parent()).removeClass('x-menu-active');
                    $(this).addClass('x-menu-active');
                    APP_XMENU.tab_position($(this));
                }, function() {});
            });
        },
        process_menu_mobile_click: function() {
            $('.header-mobile-nav li.x-menu-item, header.header-left li.x-menu-item').click(function(event) {
                if ($('> ul.x-sub-menu', this).length == 0) {
                    return;
                }
                if ($(event.target).closest($('> ul.x-sub-menu', this)).length > 0) {
                    return;
                }
                event.preventDefault();
                $(this).toggleClass('x-sub-menu-open');
                $('> ul.x-sub-menu', this).slideToggle();
            });
        },
        process_tab_padding: function(target, main_menu) {
            if (!APP_XMENU.is_desktop()) {
                return;
            }
            if ($(main_menu).hasClass('x-nav-vmenu')) {
                return;
            }
            var $this = $(target);
            if ($this.hasClass('x-sub-menu-multi-column')) {
                var $tab = $('> ul.x-sub-menu > li.x-tabs', $this);
                if ($tab.length > 0) {
                    $(' > ul.x-sub-menu', $this).addClass('no-padding');
                }
            }
            $('> ul.x-sub-menu > li').each(function() {
                APP_XMENU.process_tab_padding(this, main_menu);
            });
        },
        transition_menu: function(target, transition_name, main_menu) {
            var $this = $(target);
            if ($(main_menu).hasClass('x-nav-vmenu')) {
                return;
            }
            $('> li.x-menu-item', $this).each(function() {
                var transition_name_current = APP_XMENU.get_transition_name($('> ul', this));
                if (transition_name_current == '') {
                    transition_name_current = transition_name;
                }
                var time_out_duration = 300;
                if (transition_name_current == '') {
                    time_out_duration = 200;
                }
                var current_li_id = 0;
                $(this).hover(function() {
                    if (!APP_XMENU.is_desktop()) {
                        return;
                    }
                    var $this_li = $(this);
                    current_li_id = $this_li.prop('id');
                    if ($('.main-menu').hasClass('x-nav-vmenu')) {
                        if ($this_li.offset().top - jQuery(window).scrollTop() - $(window).outerHeight() / 2 > 0) {
                            $('> ul', $this_li).removeClass('x-drop-from-bottom').addClass('x-drop-from-bottom');
                        }
                    }
                    if (typeof(APP_XMENU.timeOutHoverMenu[$this_li.prop('id')]) != "undefined") {
                        clearTimeout(APP_XMENU.timeOutHoverMenu[$this_li.prop('id')]);
                    }
                    APP_XMENU.timeOutHoverMenu[$this_li.prop('id')] = setTimeout(function() {
                        $this_li.addClass('x-active');
                        if (transition_name_current != '') {
                            $('> ul', $this_li).addClass(transition_name_current);
                        }
                    }, time_out_duration);
                }, function() {
                    if (!APP_XMENU.is_desktop()) {
                        return;
                    }
                    var $this_li = $(this);
                    current_li_id = 0;
                    if ($('.main-menu').hasClass('x-nav-vmenu')) {
                        if ($this_li.offset().top - jQuery(window).scrollTop() - $(window).outerHeight() / 2 > 0) {
                            $('> ul', $this_li).removeClass('x-drop-from-bottom');
                        }
                    }
                    clearTimeout(APP_XMENU.timeOutHoverMenu[$this_li.prop('id')]);
                    APP_XMENU.timeOutHoverOutMenu[$this_li.prop('id')] = setTimeout(function() {
                        if (current_li_id == $this_li.prop('id')) {
                            return;
                        }
                        if ($this_li.hasClass('x-active')) {
                            $('> ul', $this_li).addClass(transition_name_current + '-out');
                            setTimeout(function() {
                                if (transition_name_current != '') {
                                    $('> ul', $this_li).removeClass(transition_name_current);
                                    $('> ul', $this_li).removeClass(transition_name_current + '-out');
                                }
                                $($this_li).removeClass('x-active');
                            }, time_out_duration);
                        }
                    }, 200);
                });
                if (!$(this).hasClass('x-sub-menu-multi-column')) {
                    APP_XMENU.transition_menu($('> ul.x-sub-menu', this), transition_name, main_menu);
                }
            });
        },
        get_transition_name: function(target) {
            var transition_name = '';
            if ($(target).hasClass('x-animate-slide-up')) {
                transition_name = 'x-slide-up';
            } else if ($(target).hasClass('x-animate-slide-down')) {
                transition_name = 'x-slide-down';
            } else if ($(target).hasClass('x-animate-slide-left')) {
                transition_name = 'x-slide-left';
            } else if ($(target).hasClass('x-animate-slide-right')) {
                transition_name = 'x-slide-right';
            } else if ($(target).hasClass('x-animate-fade-in')) {
                transition_name = 'x-fade-in';
            } else if ($(target).hasClass('x-animate-sign-flip')) {
                transition_name = 'x-sign-flip';
            }
            return transition_name;
        },
        process_menu_position: function(target) {
            if ($('.main-menu').hasClass('x-nav-vmenu')) {
                return;
            }
            var $this = $(target);
            var $menuBar = $('.x-nav-menu');
            var $parentMenu = $(target).parent();
            if ($this.hasClass('x-pos-left-menu-parent')) {
                APP_XMENU.process_position_left_menu_parent(target);
            } else if ($this.hasClass('x-pos-right-menu-parent')) {
                APP_XMENU.process_position_right_menu_parent(target);
            } else if ($this.hasClass('x-pos-center-menu-parent')) {
                APP_XMENU.process_position_center_menu_parent(target);
            } else if ($this.hasClass('x-pos-left-menu-bar')) {
                APP_XMENU.process_position_left_menu_bar(target);
            } else if ($this.hasClass('x-pos-right-menu-bar')) {
                APP_XMENU.process_position_right_menu_bar(target);
            } else if ($this.hasClass('x-pos-full')) {} else {
                APP_XMENU.process_position_right_menu_parent(target);
            }
        },
        get_margin_left: function(target) {
            var margin_left = $(target).css('margin-left');
            try {
                margin_left = parseInt(margin_left.replace('px', ''), 10);
            } catch (ex) {
                margin_left = 0;
            }
            return margin_left;
        },
        process_position_left_menu_parent: function(target) {
            var $this = $(target);
            var $menuBar = $('header.main-header .x-nav-menu');
            while (($menuBar.prop('tagName') != 'BODY') && ($menuBar.css('position') == 'static')) {
                $menuBar = $menuBar.parent();
            }
            var $sub_menu = $('> ul.x-sub-menu', $this);
            if ($sub_menu.length == 0) {
                return;
            }
            if ($menuBar.outerWidth() <= $sub_menu.outerWidth()) {
                $sub_menu.css('left', '0');
                $sub_menu.css('right', '0');
            } else {
                var margin_left = APP_XMENU.get_margin_left(target);
                var right = $menuBar.outerWidth() - $(target).outerWidth() - $(target).position().left - margin_left;
                if ($(target).outerWidth() + $(target).position().left + margin_left < $sub_menu.outerWidth()) {
                    $sub_menu.css('left', '0');
                    $sub_menu.css('right', 'auto');
                } else {
                    $sub_menu.css('left', 'auto');
                    $sub_menu.css('right', right + 'px');
                }
            }
        },
        process_position_right_menu_parent: function(target) {
            var $this = $(target);
            var $menuBar = $('header.main-header .x-nav-menu');
            while (($menuBar.prop('tagName') != 'BODY') && ($menuBar.css('position') == 'static')) {
                $menuBar = $menuBar.parent();
            }
            var $sub_menu = $('> ul.x-sub-menu', $this);
            if ($sub_menu.length == 0) {
                return;
            }
            var margin_left = APP_XMENU.get_margin_left(target);
            if ($menuBar.outerWidth() <= $sub_menu.outerWidth()) {
                $sub_menu.css('left', '0');
                $sub_menu.css('right', '0');
            } else {
                if ($menuBar.outerWidth() - $(target).position().left - margin_left < $sub_menu.outerWidth()) {
                    $sub_menu.css('left', 'auto');
                    $sub_menu.css('right', '0');
                } else {
                    $sub_menu.css('left', ($(target).position().left + margin_left) + 'px');
                    $sub_menu.css('right', 'auto');
                }
            }
        },
        process_position_center_menu_parent: function(target) {
            var $this = $(target);
            var $menuBar = $('header.main-header .x-nav-menu');
            while (($menuBar.prop('tagName') != 'BODY') && ($menuBar.css('position') == 'static')) {
                $menuBar = $menuBar.parent();
            }
            var $sub_menu = $('> ul.x-sub-menu', $this);
            if ($sub_menu.length == 0) {
                return;
            }
            if ($menuBar.outerWidth() <= $sub_menu.outerWidth()) {
                $sub_menu.css('left', '0');
                $sub_menu.css('right', '0');
            } else {
                var margin_left = APP_XMENU.get_margin_left(target);
                var left = ($sub_menu.outerWidth() - $this.outerWidth() - margin_left) / 2;
                if (left > $(target).position().left) {
                    $sub_menu.css('left', '0');
                    $sub_menu.css('right', 'auto');
                } else if (left > $menuBar.outerWidth() - $(target).outerWidth() - $(target).position().left) {
                    $sub_menu.css('left', 'auto');
                    $sub_menu.css('right', '0');
                } else {
                    $sub_menu.css('left', ($(target).position().left - left) + 'px');
                    $sub_menu.css('right', 'auto');
                }
            }
        },
        process_position_left_menu_bar: function(target) {
            var $this = $(target);
            var $sub_menu = $('> ul.x-sub-menu', $this);
            $sub_menu.css('left', '0');
            $sub_menu.css('right', 'auto');
        },
        process_position_right_menu_bar: function(target) {
            var $this = $(target);
            var $sub_menu = $('> ul.x-sub-menu', $this);
            $sub_menu.css('left', 'auto');
            $sub_menu.css('right', '0');
        },
        is_desktop: function() {
            var responsive_breakpoint = 991;
            var $body = $('body');
            if ((typeof($body.attr('data-breakpoint')) != "undefined") && !isNaN(parseInt($body.attr('data-breakpoint'), 10))) {
                responsive_breakpoint = parseInt($body.attr('data-breakpoint'), 10);
            }
            return window.matchMedia('(min-width: ' + (responsive_breakpoint + 1) + 'px)').matches;
        }
    }
    $(document).ready(function() {
        APP_XMENU.initialize();
    });
})(jQuery);