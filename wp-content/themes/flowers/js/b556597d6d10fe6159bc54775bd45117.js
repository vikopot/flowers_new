/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto)
}(function(e) {
    "use strict";

    function t(t) {
        var r = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(r))
    }

    function r(t) {
        var r = t.target,
            a = e(r);
        if (!a.is("[type=submit],[type=image]")) {
            var n = a.closest("[type=submit]");
            if (0 === n.length) return;
            r = n[0]
        }
        var i = this;
        if (i.clk = r, "image" == r.type)
            if (void 0 !== t.offsetX) i.clk_x = t.offsetX, i.clk_y = t.offsetY;
            else if ("function" == typeof e.fn.offset) {
            var o = a.offset();
            i.clk_x = t.pageX - o.left, i.clk_y = t.pageY - o.top
        } else i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop;
        setTimeout(function() {
            i.clk = i.clk_x = i.clk_y = null
        }, 100)
    }

    function a() {
        if (e.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }
    var n = {};
    n.fileapi = void 0 !== e("<input type='file'/>").get(0).files, n.formdata = void 0 !== window.FormData;
    var i = !!e.fn.prop;
    e.fn.attr2 = function() {
        if (!i) return this.attr.apply(this, arguments);
        var e = this.prop.apply(this, arguments);
        return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
    }, e.fn.ajaxSubmit = function(t) {
        function r(r) {
            var a, n, i = e.param(r, t.traditional).split("&"),
                o = i.length,
                s = [];
            for (a = 0; o > a; a++) i[a] = i[a].replace(/\+/g, " "), n = i[a].split("="), s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
            return s
        }

        function o(a) {
            for (var n = new FormData, i = 0; i < a.length; i++) n.append(a[i].name, a[i].value);
            if (t.extraData) {
                var o = r(t.extraData);
                for (i = 0; i < o.length; i++) o[i] && n.append(o[i][0], o[i][1])
            }
            t.data = null;
            var s = e.extend(!0, {}, e.ajaxSettings, t, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: u || "POST"
            });
            t.uploadProgress && (s.xhr = function() {
                var r = e.ajaxSettings.xhr();
                return r.upload && r.upload.addEventListener("progress", function(e) {
                    var r = 0,
                        a = e.loaded || e.position,
                        n = e.total;
                    e.lengthComputable && (r = Math.ceil(a / n * 100)), t.uploadProgress(e, a, n, r)
                }, !1), r
            }), s.data = null;
            var c = s.beforeSend;
            return s.beforeSend = function(e, r) {
                r.data = t.formData ? t.formData : n, c && c.call(this, e, r)
            }, e.ajax(s)
        }

        function s(r) {
            function n(e) {
                var t = null;
                try {
                    e.contentWindow && (t = e.contentWindow.document)
                } catch (r) {
                    a("cannot get iframe.contentWindow document: " + r)
                }
                if (t) return t;
                try {
                    t = e.contentDocument ? e.contentDocument : e.document
                } catch (r) {
                    a("cannot get iframe.contentDocument: " + r), t = e.document
                }
                return t
            }

            function o() {
                function t() {
                    try {
                        var e = n(g).readyState;
                        a("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
                    } catch (r) {
                        a("Server abort: ", r, " (", r.name, ")"), s(k), j && clearTimeout(j), j = void 0
                    }
                }
                var r = f.attr2("target"),
                    i = f.attr2("action"),
                    o = "multipart/form-data",
                    c = f.attr("enctype") || f.attr("encoding") || o;
                w.setAttribute("target", p), (!u || /post/i.test(u)) && w.setAttribute("method", "POST"), i != m.url && w.setAttribute("action", m.url), m.skipEncodingOverride || u && !/post/i.test(u) || f.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }), m.timeout && (j = setTimeout(function() {
                    T = !0, s(D)
                }, m.timeout));
                var l = [];
                try {
                    if (m.extraData)
                        for (var d in m.extraData) m.extraData.hasOwnProperty(d) && l.push(e.isPlainObject(m.extraData[d]) && m.extraData[d].hasOwnProperty("name") && m.extraData[d].hasOwnProperty("value") ? e('<input type="hidden" name="' + m.extraData[d].name + '">').val(m.extraData[d].value).appendTo(w)[0] : e('<input type="hidden" name="' + d + '">').val(m.extraData[d]).appendTo(w)[0]);
                    m.iframeTarget || v.appendTo("body"), g.attachEvent ? g.attachEvent("onload", s) : g.addEventListener("load", s, !1), setTimeout(t, 15);
                    try {
                        w.submit()
                    } catch (h) {
                        var x = document.createElement("form").submit;
                        x.apply(w)
                    }
                } finally {
                    w.setAttribute("action", i), w.setAttribute("enctype", c), r ? w.setAttribute("target", r) : f.removeAttr("target"), e(l).remove()
                }
            }

            function s(t) {
                if (!x.aborted && !F) {
                    if (M = n(g), M || (a("cannot access response document"), t = k), t === D && x) return x.abort("timeout"), void S.reject(x, "timeout");
                    if (t == k && x) return x.abort("server abort"), void S.reject(x, "error", "server abort");
                    if (M && M.location.href != m.iframeSrc || T) {
                        g.detachEvent ? g.detachEvent("onload", s) : g.removeEventListener("load", s, !1);
                        var r, i = "success";
                        try {
                            if (T) throw "timeout";
                            var o = "xml" == m.dataType || M.XMLDocument || e.isXMLDoc(M);
                            if (a("isXml=" + o), !o && window.opera && (null === M.body || !M.body.innerHTML) && --O) return a("requeing onLoad callback, DOM not available"), void setTimeout(s, 250);
                            var u = M.body ? M.body : M.documentElement;
                            x.responseText = u ? u.innerHTML : null, x.responseXML = M.XMLDocument ? M.XMLDocument : M, o && (m.dataType = "xml"), x.getResponseHeader = function(e) {
                                var t = {
                                    "content-type": m.dataType
                                };
                                return t[e.toLowerCase()]
                            }, u && (x.status = Number(u.getAttribute("status")) || x.status, x.statusText = u.getAttribute("statusText") || x.statusText);
                            var c = (m.dataType || "").toLowerCase(),
                                l = /(json|script|text)/.test(c);
                            if (l || m.textarea) {
                                var f = M.getElementsByTagName("textarea")[0];
                                if (f) x.responseText = f.value, x.status = Number(f.getAttribute("status")) || x.status, x.statusText = f.getAttribute("statusText") || x.statusText;
                                else if (l) {
                                    var p = M.getElementsByTagName("pre")[0],
                                        h = M.getElementsByTagName("body")[0];
                                    p ? x.responseText = p.textContent ? p.textContent : p.innerText : h && (x.responseText = h.textContent ? h.textContent : h.innerText)
                                }
                            } else "xml" == c && !x.responseXML && x.responseText && (x.responseXML = X(x.responseText));
                            try {
                                E = _(x, c, m)
                            } catch (y) {
                                i = "parsererror", x.error = r = y || i
                            }
                        } catch (y) {
                            a("error caught: ", y), i = "error", x.error = r = y || i
                        }
                        x.aborted && (a("upload aborted"), i = null), x.status && (i = x.status >= 200 && x.status < 300 || 304 === x.status ? "success" : "error"), "success" === i ? (m.success && m.success.call(m.context, E, "success", x), S.resolve(x.responseText, "success", x), d && e.event.trigger("ajaxSuccess", [x, m])) : i && (void 0 === r && (r = x.statusText), m.error && m.error.call(m.context, x, i, r), S.reject(x, "error", r), d && e.event.trigger("ajaxError", [x, m, r])), d && e.event.trigger("ajaxComplete", [x, m]), d && !--e.active && e.event.trigger("ajaxStop"), m.complete && m.complete.call(m.context, x, i), F = !0, m.timeout && clearTimeout(j), setTimeout(function() {
                            m.iframeTarget ? v.attr("src", m.iframeSrc) : v.remove(), x.responseXML = null
                        }, 100)
                    }
                }
            }
            var c, l, m, d, p, v, g, x, y, b, T, j, w = f[0],
                S = e.Deferred();
            if (S.abort = function(e) {
                    x.abort(e)
                }, r)
                for (l = 0; l < h.length; l++) c = e(h[l]), i ? c.prop("disabled", !1) : c.removeAttr("disabled");
            if (m = e.extend(!0, {}, e.ajaxSettings, t), m.context = m.context || m, p = "jqFormIO" + (new Date).getTime(), m.iframeTarget ? (v = e(m.iframeTarget), b = v.attr2("name"), b ? p = b : v.attr2("name", p)) : (v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />'), v.css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                })), g = v[0], x = {
                    aborted: 0,
                    responseText: null,
                    responseXML: null,
                    status: 0,
                    statusText: "n/a",
                    getAllResponseHeaders: function() {},
                    getResponseHeader: function() {},
                    setRequestHeader: function() {},
                    abort: function(t) {
                        var r = "timeout" === t ? "timeout" : "aborted";
                        a("aborting upload... " + r), this.aborted = 1;
                        try {
                            g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop")
                        } catch (n) {}
                        v.attr("src", m.iframeSrc), x.error = r, m.error && m.error.call(m.context, x, r, t), d && e.event.trigger("ajaxError", [x, m, r]), m.complete && m.complete.call(m.context, x, r)
                    }
                }, d = m.global, d && 0 === e.active++ && e.event.trigger("ajaxStart"), d && e.event.trigger("ajaxSend", [x, m]), m.beforeSend && m.beforeSend.call(m.context, x, m) === !1) return m.global && e.active--, S.reject(), S;
            if (x.aborted) return S.reject(), S;
            y = w.clk, y && (b = y.name, b && !y.disabled && (m.extraData = m.extraData || {}, m.extraData[b] = y.value, "image" == y.type && (m.extraData[b + ".x"] = w.clk_x, m.extraData[b + ".y"] = w.clk_y)));
            var D = 1,
                k = 2,
                A = e("meta[name=csrf-token]").attr("content"),
                L = e("meta[name=csrf-param]").attr("content");
            L && A && (m.extraData = m.extraData || {}, m.extraData[L] = A), m.forceSync ? o() : setTimeout(o, 10);
            var E, M, F, O = 50,
                X = e.parseXML || function(e, t) {
                    return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
                },
                C = e.parseJSON || function(e) {
                    return window.eval("(" + e + ")")
                },
                _ = function(t, r, a) {
                    var n = t.getResponseHeader("content-type") || "",
                        i = "xml" === r || !r && n.indexOf("xml") >= 0,
                        o = i ? t.responseXML : t.responseText;
                    return i && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"), a && a.dataFilter && (o = a.dataFilter(o, r)), "string" == typeof o && ("json" === r || !r && n.indexOf("json") >= 0 ? o = C(o) : ("script" === r || !r && n.indexOf("javascript") >= 0) && e.globalEval(o)), o
                };
            return S
        }
        if (!this.length) return a("ajaxSubmit: skipping submit process - no element selected"), this;
        var u, c, l, f = this;
        "function" == typeof t ? t = {
            success: t
        } : void 0 === t && (t = {}), u = t.type || this.attr2("method"), c = t.url || this.attr2("action"), l = "string" == typeof c ? e.trim(c) : "", l = l || window.location.href || "", l && (l = (l.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
            url: l,
            success: e.ajaxSettings.success,
            type: u || e.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, t);
        var m = {};
        if (this.trigger("form-pre-serialize", [this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (t.beforeSerialize && t.beforeSerialize(this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var d = t.traditional;
        void 0 === d && (d = e.ajaxSettings.traditional);
        var p, h = [],
            v = this.formToArray(t.semantic, h);
        if (t.data && (t.extraData = t.data, p = e.param(t.data, d)), t.beforeSubmit && t.beforeSubmit(v, this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [v, this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var g = e.param(v, d);
        p && (g = g ? g + "&" + p : p), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g, t.data = null) : t.data = g;
        var x = [];
        if (t.resetForm && x.push(function() {
                f.resetForm()
            }), t.clearForm && x.push(function() {
                f.clearForm(t.includeHidden)
            }), !t.dataType && t.target) {
            var y = t.success || function() {};
            x.push(function(r) {
                var a = t.replaceTarget ? "replaceWith" : "html";
                e(t.target)[a](r).each(y, arguments)
            })
        } else t.success && x.push(t.success);
        if (t.success = function(e, r, a) {
                for (var n = t.context || this, i = 0, o = x.length; o > i; i++) x[i].apply(n, [e, r, a || f, f])
            }, t.error) {
            var b = t.error;
            t.error = function(e, r, a) {
                var n = t.context || this;
                b.apply(n, [e, r, a, f])
            }
        }
        if (t.complete) {
            var T = t.complete;
            t.complete = function(e, r) {
                var a = t.context || this;
                T.apply(a, [e, r, f])
            }
        }
        var j = e("input[type=file]:enabled", this).filter(function() {
                return "" !== e(this).val()
            }),
            w = j.length > 0,
            S = "multipart/form-data",
            D = f.attr("enctype") == S || f.attr("encoding") == S,
            k = n.fileapi && n.formdata;
        a("fileAPI :" + k);
        var A, L = (w || D) && !k;
        t.iframe !== !1 && (t.iframe || L) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function() {
            A = s(v)
        }) : A = s(v) : A = (w || D) && k ? o(v) : e.ajax(t), f.removeData("jqxhr").data("jqxhr", A);
        for (var E = 0; E < h.length; E++) h[E] = null;
        return this.trigger("form-submit-notify", [this, t]), this
    }, e.fn.ajaxForm = function(n) {
        if (n = n || {}, n.delegation = n.delegation && e.isFunction(e.fn.on), !n.delegation && 0 === this.length) {
            var i = {
                s: this.selector,
                c: this.context
            };
            return !e.isReady && i.s ? (a("DOM not ready, queuing ajaxForm"), e(function() {
                e(i.s, i.c).ajaxForm(n)
            }), this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
        }
        return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, r), this) : this.ajaxFormUnbind().bind("submit.form-plugin", n, t).bind("click.form-plugin", n, r)
    }, e.fn.ajaxFormUnbind = function() {
        return this.unbind("submit.form-plugin click.form-plugin")
    }, e.fn.formToArray = function(t, r) {
        var a = [];
        if (0 === this.length) return a;
        var i, o = this[0],
            s = this.attr("id"),
            u = t ? o.getElementsByTagName("*") : o.elements;
        if (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()), s && (i = e(':input[form="' + s + '"]').get(), i.length && (u = (u || []).concat(i))), !u || !u.length) return a;
        var c, l, f, m, d, p, h;
        for (c = 0, p = u.length; p > c; c++)
            if (d = u[c], f = d.name, f && !d.disabled)
                if (t && o.clk && "image" == d.type) o.clk == d && (a.push({
                    name: f,
                    value: e(d).val(),
                    type: d.type
                }), a.push({
                    name: f + ".x",
                    value: o.clk_x
                }, {
                    name: f + ".y",
                    value: o.clk_y
                }));
                else if (m = e.fieldValue(d, !0), m && m.constructor == Array)
            for (r && r.push(d), l = 0, h = m.length; h > l; l++) a.push({
                name: f,
                value: m[l]
            });
        else if (n.fileapi && "file" == d.type) {
            r && r.push(d);
            var v = d.files;
            if (v.length)
                for (l = 0; l < v.length; l++) a.push({
                    name: f,
                    value: v[l],
                    type: d.type
                });
            else a.push({
                name: f,
                value: "",
                type: d.type
            })
        } else null !== m && "undefined" != typeof m && (r && r.push(d), a.push({
            name: f,
            value: m,
            type: d.type,
            required: d.required
        }));
        if (!t && o.clk) {
            var g = e(o.clk),
                x = g[0];
            f = x.name, f && !x.disabled && "image" == x.type && (a.push({
                name: f,
                value: g.val()
            }), a.push({
                name: f + ".x",
                value: o.clk_x
            }, {
                name: f + ".y",
                value: o.clk_y
            }))
        }
        return a
    }, e.fn.formSerialize = function(t) {
        return e.param(this.formToArray(t))
    }, e.fn.fieldSerialize = function(t) {
        var r = [];
        return this.each(function() {
            var a = this.name;
            if (a) {
                var n = e.fieldValue(this, t);
                if (n && n.constructor == Array)
                    for (var i = 0, o = n.length; o > i; i++) r.push({
                        name: a,
                        value: n[i]
                    });
                else null !== n && "undefined" != typeof n && r.push({
                    name: this.name,
                    value: n
                })
            }
        }), e.param(r)
    }, e.fn.fieldValue = function(t) {
        for (var r = [], a = 0, n = this.length; n > a; a++) {
            var i = this[a],
                o = e.fieldValue(i, t);
            null === o || "undefined" == typeof o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(r, o) : r.push(o))
        }
        return r
    }, e.fieldValue = function(t, r) {
        var a = t.name,
            n = t.type,
            i = t.tagName.toLowerCase();
        if (void 0 === r && (r = !0), r && (!a || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == i && -1 == t.selectedIndex)) return null;
        if ("select" == i) {
            var o = t.selectedIndex;
            if (0 > o) return null;
            for (var s = [], u = t.options, c = "select-one" == n, l = c ? o + 1 : u.length, f = c ? o : 0; l > f; f++) {
                var m = u[f];
                if (m.selected) {
                    var d = m.value;
                    if (d || (d = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), c) return d;
                    s.push(d)
                }
            }
            return s
        }
        return e(t).val()
    }, e.fn.clearForm = function(t) {
        return this.each(function() {
            e("input,select,textarea", this).clearFields(t)
        })
    }, e.fn.clearFields = e.fn.clearInputs = function(t) {
        var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var a = this.type,
                n = this.tagName.toLowerCase();
            r.test(a) || "textarea" == n ? this.value = "" : "checkbox" == a || "radio" == a ? this.checked = !1 : "select" == n ? this.selectedIndex = -1 : "file" == a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(a) || "string" == typeof t && e(this).is(t)) && (this.value = "")
        })
    }, e.fn.resetForm = function() {
        return this.each(function() {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    }, e.fn.enable = function(e) {
        return void 0 === e && (e = !0), this.each(function() {
            this.disabled = !e
        })
    }, e.fn.selected = function(t) {
        return void 0 === t && (t = !0), this.each(function() {
            var r = this.type;
            if ("checkbox" == r || "radio" == r) this.checked = t;
            else if ("option" == this.tagName.toLowerCase()) {
                var a = e(this).parent("select");
                t && a[0] && "select-one" == a[0].type && a.find("option").selected(!1), this.selected = t
            }
        })
    }, e.fn.ajaxSubmit.debug = !1
});;
(function($) {
    'use strict';
    if (typeof _wpcf7 === 'undefined' || _wpcf7 === null) {
        return;
    }
    _wpcf7 = $.extend({
        cached: 0,
        inputs: []
    }, _wpcf7);
    $.fn.wpcf7InitForm = function() {
        this.ajaxForm({
            beforeSubmit: function(arr, $form, options) {
                $form.wpcf7ClearResponseOutput();
                $form.find('[aria-invalid]').attr('aria-invalid', 'false');
                $form.find('.ajax-loader').addClass('is-active');
                return true;
            },
            beforeSerialize: function($form, options) {
                $form.find('[placeholder].placeheld').each(function(i, n) {
                    $(n).val('');
                });
                return true;
            },
            data: {
                '_wpcf7_is_ajax_call': 1
            },
            dataType: 'json',
            success: $.wpcf7AjaxSuccess,
            error: function(xhr, status, error, $form) {
                var e = $('<div class="ajax-error"></div>').text(error.message);
                $form.after(e);
            }
        });
        if (_wpcf7.cached) {
            this.wpcf7OnloadRefill();
        }
        this.wpcf7ToggleSubmit();
        this.find('.wpcf7-submit').wpcf7AjaxLoader();
        this.find('.wpcf7-acceptance').click(function() {
            $(this).closest('form').wpcf7ToggleSubmit();
        });
        this.find('.wpcf7-exclusive-checkbox').wpcf7ExclusiveCheckbox();
        this.find('.wpcf7-list-item.has-free-text').wpcf7ToggleCheckboxFreetext();
        this.find('[placeholder]').wpcf7Placeholder();
        if (_wpcf7.jqueryUi && !_wpcf7.supportHtml5.date) {
            this.find('input.wpcf7-date[type="date"]').each(function() {
                $(this).datepicker({
                    dateFormat: 'yy-mm-dd',
                    minDate: new Date($(this).attr('min')),
                    maxDate: new Date($(this).attr('max'))
                });
            });
        }
        if (_wpcf7.jqueryUi && !_wpcf7.supportHtml5.number) {
            this.find('input.wpcf7-number[type="number"]').each(function() {
                $(this).spinner({
                    min: $(this).attr('min'),
                    max: $(this).attr('max'),
                    step: $(this).attr('step')
                });
            });
        }
        this.find('.wpcf7-character-count').wpcf7CharacterCount();
        this.find('.wpcf7-validates-as-url').change(function() {
            $(this).wpcf7NormalizeUrl();
        });
        this.find('.wpcf7-recaptcha').wpcf7Recaptcha();
    };
    $.wpcf7AjaxSuccess = function(data, status, xhr, $form) {
        if (!$.isPlainObject(data) || $.isEmptyObject(data)) {
            return;
        }
        _wpcf7.inputs = $form.serializeArray();
        var $responseOutput = $form.find('div.wpcf7-response-output');
        $form.wpcf7ClearResponseOutput();
        $form.find('.wpcf7-form-control').removeClass('wpcf7-not-valid');
        $form.removeClass('invalid spam sent failed');
        if (data.captcha) {
            $form.wpcf7RefillCaptcha(data.captcha);
        }
        if (data.quiz) {
            $form.wpcf7RefillQuiz(data.quiz);
        }
        if (data.invalids) {
            $.each(data.invalids, function(i, n) {
                $form.find(n.into).wpcf7NotValidTip(n.message);
                $form.find(n.into).find('.wpcf7-form-control').addClass('wpcf7-not-valid');
                $form.find(n.into).find('[aria-invalid]').attr('aria-invalid', 'true');
            });
            $responseOutput.addClass('wpcf7-validation-errors');
            $form.addClass('invalid');
            $(data.into).wpcf7TriggerEvent('invalid');
        } else if (1 == data.spam) {
            $form.find('[name="g-recaptcha-response"]').each(function() {
                if ('' == $(this).val()) {
                    var $recaptcha = $(this).closest('.wpcf7-form-control-wrap');
                    $recaptcha.wpcf7NotValidTip(_wpcf7.recaptcha.messages.empty);
                }
            });
            $responseOutput.addClass('wpcf7-spam-blocked');
            $form.addClass('spam');
            $(data.into).wpcf7TriggerEvent('spam');
        } else if (1 == data.mailSent) {
            $responseOutput.addClass('wpcf7-mail-sent-ok');
            $form.addClass('sent');
            if (data.onSentOk) {
                $.each(data.onSentOk, function(i, n) {
                    eval(n)
                });
            }
            $(data.into).wpcf7TriggerEvent('mailsent');
        } else {
            $responseOutput.addClass('wpcf7-mail-sent-ng');
            $form.addClass('failed');
            $(data.into).wpcf7TriggerEvent('mailfailed');
        }
        if (data.onSubmit) {
            $.each(data.onSubmit, function(i, n) {
                eval(n)
            });
        }
        $(data.into).wpcf7TriggerEvent('submit');
        if (1 == data.mailSent) {
            $form.resetForm();
        }
        $form.find('[placeholder].placeheld').each(function(i, n) {
            $(n).val($(n).attr('placeholder'));
        });
        $responseOutput.append(data.message).slideDown('fast');
        $responseOutput.attr('role', 'alert');
        $.wpcf7UpdateScreenReaderResponse($form, data);
    };
    $.fn.wpcf7TriggerEvent = function(name) {
        return this.each(function() {
            var elmId = this.id;
            var inputs = _wpcf7.inputs;
            var event = new CustomEvent('wpcf7' + name, {
                bubbles: true,
                detail: {
                    id: elmId,
                    inputs: inputs
                }
            });
            this.dispatchEvent(event);
            $(this).trigger('wpcf7:' + name);
            $(this).trigger(name + '.wpcf7');
        });
    };
    $.fn.wpcf7ExclusiveCheckbox = function() {
        return this.find('input:checkbox').click(function() {
            var name = $(this).attr('name');
            $(this).closest('form').find('input:checkbox[name="' + name + '"]').not(this).prop('checked', false);
        });
    };
    $.fn.wpcf7Placeholder = function() {
        if (_wpcf7.supportHtml5.placeholder) {
            return this;
        }
        return this.each(function() {
            $(this).val($(this).attr('placeholder'));
            $(this).addClass('placeheld');
            $(this).focus(function() {
                if ($(this).hasClass('placeheld')) {
                    $(this).val('').removeClass('placeheld');
                }
            });
            $(this).blur(function() {
                if ('' === $(this).val()) {
                    $(this).val($(this).attr('placeholder'));
                    $(this).addClass('placeheld');
                }
            });
        });
    };
    $.fn.wpcf7AjaxLoader = function() {
        return this.each(function() {
            $(this).after('<span class="ajax-loader"></span>');
        });
    };
    $.fn.wpcf7ToggleSubmit = function() {
        return this.each(function() {
            var form = $(this);
            if (this.tagName.toLowerCase() != 'form') {
                form = $(this).find('form').first();
            }
            if (form.hasClass('wpcf7-acceptance-as-validation')) {
                return;
            }
            var submit = form.find('input:submit');
            if (!submit.length) {
                return;
            }
            var acceptances = form.find('input:checkbox.wpcf7-acceptance');
            if (!acceptances.length) {
                return;
            }
            submit.removeAttr('disabled');
            acceptances.each(function(i, n) {
                n = $(n);
                if (n.hasClass('wpcf7-invert') && n.is(':checked') || !n.hasClass('wpcf7-invert') && !n.is(':checked')) {
                    submit.attr('disabled', 'disabled');
                }
            });
        });
    };
    $.fn.wpcf7ToggleCheckboxFreetext = function() {
        return this.each(function() {
            var $wrap = $(this).closest('.wpcf7-form-control');
            if ($(this).find(':checkbox, :radio').is(':checked')) {
                $(this).find(':input.wpcf7-free-text').prop('disabled', false);
            } else {
                $(this).find(':input.wpcf7-free-text').prop('disabled', true);
            }
            $wrap.find(':checkbox, :radio').change(function() {
                var $cb = $('.has-free-text', $wrap).find(':checkbox, :radio');
                var $freetext = $(':input.wpcf7-free-text', $wrap);
                if ($cb.is(':checked')) {
                    $freetext.prop('disabled', false).focus();
                } else {
                    $freetext.prop('disabled', true);
                }
            });
        });
    };
    $.fn.wpcf7CharacterCount = function() {
        return this.each(function() {
            var $count = $(this);
            var name = $count.attr('data-target-name');
            var down = $count.hasClass('down');
            var starting = parseInt($count.attr('data-starting-value'), 10);
            var maximum = parseInt($count.attr('data-maximum-value'), 10);
            var minimum = parseInt($count.attr('data-minimum-value'), 10);
            var updateCount = function($target) {
                var length = $target.val().length;
                var count = down ? starting - length : length;
                $count.attr('data-current-value', count);
                $count.text(count);
                if (maximum && maximum < length) {
                    $count.addClass('too-long');
                } else {
                    $count.removeClass('too-long');
                }
                if (minimum && length < minimum) {
                    $count.addClass('too-short');
                } else {
                    $count.removeClass('too-short');
                }
            };
            $count.closest('form').find(':input[name="' + name + '"]').each(function() {
                updateCount($(this));
                $(this).keyup(function() {
                    updateCount($(this));
                });
            });
        });
    };
    $.fn.wpcf7NormalizeUrl = function() {
        return this.each(function() {
            var val = $.trim($(this).val());
            if (val && !val.match(/^[a-z][a-z0-9.+-]*:/i)) {
                val = val.replace(/^\/+/, '');
                val = 'http://' + val;
            }
            $(this).val(val);
        });
    };
    $.fn.wpcf7NotValidTip = function(message) {
        return this.each(function() {
            var $into = $(this);
            $into.find('span.wpcf7-not-valid-tip').remove();
            $into.append('<span role="alert" class="wpcf7-not-valid-tip">' + message + '</span>');
            if ($into.is('.use-floating-validation-tip *')) {
                $('.wpcf7-not-valid-tip', $into).mouseover(function() {
                    $(this).wpcf7FadeOut();
                });
                $(':input', $into).focus(function() {
                    $('.wpcf7-not-valid-tip', $into).not(':hidden').wpcf7FadeOut();
                });
            }
        });
    };
    $.fn.wpcf7FadeOut = function() {
        return this.each(function() {
            $(this).animate({
                opacity: 0
            }, 'fast', function() {
                $(this).css({
                    'z-index': -100
                });
            });
        });
    };
    $.fn.wpcf7OnloadRefill = function() {
        return this.each(function() {
            var url = $(this).attr('action');
            if (0 < url.indexOf('#')) {
                url = url.substr(0, url.indexOf('#'));
            }
            var id = $(this).find('input[name="_wpcf7"]').val();
            var unitTag = $(this).find('input[name="_wpcf7_unit_tag"]').val();
            $.getJSON(url, {
                _wpcf7_is_ajax_call: 1,
                _wpcf7: id,
                _wpcf7_request_ver: $.now()
            }, function(data) {
                if (data && data.captcha) {
                    $('#' + unitTag).wpcf7RefillCaptcha(data.captcha);
                }
                if (data && data.quiz) {
                    $('#' + unitTag).wpcf7RefillQuiz(data.quiz);
                }
            });
        });
    };
    $.fn.wpcf7RefillCaptcha = function(captcha) {
        return this.each(function() {
            var form = $(this);
            $.each(captcha, function(i, n) {
                form.find(':input[name="' + i + '"]').clearFields();
                form.find('img.wpcf7-captcha-' + i).attr('src', n);
                var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
                form.find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]').attr('value', match[1]);
            });
        });
    };
    $.fn.wpcf7RefillQuiz = function(quiz) {
        return this.each(function() {
            var form = $(this);
            $.each(quiz, function(i, n) {
                form.find(':input[name="' + i + '"]').clearFields();
                form.find(':input[name="' + i + '"]').siblings('span.wpcf7-quiz-label').text(n[0]);
                form.find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]').attr('value', n[1]);
            });
        });
    };
    $.fn.wpcf7ClearResponseOutput = function() {
        return this.each(function() {
            $(this).find('div.wpcf7-response-output').hide().empty().removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked').removeAttr('role');
            $(this).find('span.wpcf7-not-valid-tip').remove();
            $(this).find('.ajax-loader').removeClass('is-active');
        });
    };
    $.fn.wpcf7Recaptcha = function() {
        return this.each(function() {
            var events = 'wpcf7:spam wpcf7:mailsent wpcf7:mailfailed';
            $(this).closest('div.wpcf7').on(events, function(e) {
                if (recaptchaWidgets && grecaptcha) {
                    $.each(recaptchaWidgets, function(index, value) {
                        grecaptcha.reset(value);
                    });
                }
            });
        });
    };
    $.wpcf7UpdateScreenReaderResponse = function($form, data) {
        $('.wpcf7 .screen-reader-response').html('').attr('role', '');
        if (data.message) {
            var $response = $form.siblings('.screen-reader-response').first();
            $response.append(data.message);
            if (data.invalids) {
                var $invalids = $('<ul></ul>');
                $.each(data.invalids, function(i, n) {
                    if (n.idref) {
                        var $li = $('<li></li>').append($('<a></a>').attr('href', '#' + n.idref).append(n.message));
                    } else {
                        var $li = $('<li></li>').append(n.message);
                    }
                    $invalids.append($li);
                });
                $response.append($invalids);
            }
            $response.attr('role', 'alert').focus();
        }
    };
    $.wpcf7SupportHtml5 = function() {
        var features = {};
        var input = document.createElement('input');
        features.placeholder = 'placeholder' in input;
        var inputTypes = ['email', 'url', 'tel', 'number', 'range', 'date'];
        $.each(inputTypes, function(index, value) {
            input.setAttribute('type', value);
            features[value] = input.type !== 'text';
        });
        return features;
    };
    $(function() {
        _wpcf7.supportHtml5 = $.wpcf7SupportHtml5();
        $('div.wpcf7 > form').wpcf7InitForm();
    });
})(jQuery);


//https://searchcode.com/file/136729606/src/js/polyfills/custom-event.js
//custom-event.js
(function() {
    if (typeof window.CustomEvent === "function") return false;

    function CustomEvent(event, params) {
        params = params || {
            bubbles: false,
            cancelable: false,
            detail: undefined
        };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
})();;
/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
 /*
! function() {
    "use strict";

    function e(e) {
        function t(t, n) {
            var s, h, k = t == window,
                y = n && n.message !== undefined ? n.message : undefined;
            if (!(n = e.extend({}, e.blockUI.defaults, n || {})).ignoreIfBlocked || !e(t).data("blockUI.isBlocked")) {
                if (n.overlayCSS = e.extend({}, e.blockUI.defaults.overlayCSS, n.overlayCSS || {}), s = e.extend({}, e.blockUI.defaults.css, n.css || {}), n.onOverlayClick && (n.overlayCSS.cursor = "pointer"), h = e.extend({}, e.blockUI.defaults.themedCSS, n.themedCSS || {}), y = y === undefined ? n.message : y, k && p && o(window, {
                        fadeOut: 0
                    }), y && "string" != typeof y && (y.parentNode || y.jquery)) {
                    var m = y.jquery ? y[0] : y,
                        g = {};
                    e(t).data("blockUI.history", g), g.el = m, g.parent = m.parentNode, g.display = m.style.display, g.position = m.style.position, g.parent && g.parent.removeChild(m)
                }
                e(t).data("blockUI.onUnblock", n.onUnblock);
                var v, I, w, U, x = n.baseZ;
                v = e(r || n.forceIframe ? '<iframe class="blockUI" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + n.iframeSrc + '"></iframe>' : '<div class="blockUI" style="display:none"></div>'), I = e(n.theme ? '<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + x++ + ';display:none"></div>' : '<div class="blockUI blockOverlay" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'), n.theme && k ? (U = '<div class="blockUI ' + n.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:fixed">', n.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : n.theme ? (U = '<div class="blockUI ' + n.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:absolute">', n.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : U = k ? '<div class="blockUI ' + n.blockMsgClass + ' blockPage" style="z-index:' + (x + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + n.blockMsgClass + ' blockElement" style="z-index:' + (x + 10) + ';display:none;position:absolute"></div>', w = e(U), y && (n.theme ? (w.css(h), w.addClass("ui-widget-content")) : w.css(s)), n.theme || I.css(n.overlayCSS), I.css("position", k ? "fixed" : "absolute"), (r || n.forceIframe) && v.css("opacity", 0);
                var C = [v, I, w],
                    S = e(k ? "body" : t);
                e.each(C, function() {
                    this.appendTo(S)
                }), n.theme && n.draggable && e.fn.draggable && w.draggable({
                    handle: ".ui-dialog-titlebar",
                    cancel: "li"
                });
                var O = f && (!e.support.boxModel || e("object,embed", k ? null : t).length > 0);
                if (u || O) {
                    if (k && n.allowBodyStretch && e.support.boxModel && e("html,body").css("height", "100%"), (u || !e.support.boxModel) && !k) var E = a(t, "borderTopWidth"),
                        T = a(t, "borderLeftWidth"),
                        M = E ? "(0 - " + E + ")" : 0,
                        B = T ? "(0 - " + T + ")" : 0;
                    e.each(C, function(e, t) {
                        var o = t[0].style;
                        if (o.position = "absolute", e < 2) k ? o.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + n.quirksmodeOffsetHack + ') + "px"') : o.setExpression("height", 'this.parentNode.offsetHeight + "px"'), k ? o.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : o.setExpression("width", 'this.parentNode.offsetWidth + "px"'), B && o.setExpression("left", B), M && o.setExpression("top", M);
                        else if (n.centerY) k && o.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), o.marginTop = 0;
                        else if (!n.centerY && k) {
                            var i = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + (n.css && n.css.top ? parseInt(n.css.top, 10) : 0) + ') + "px"';
                            o.setExpression("top", i)
                        }
                    })
                }
                if (y && (n.theme ? w.find(".ui-widget-content").append(y) : w.append(y), (y.jquery || y.nodeType) && e(y).show()), (r || n.forceIframe) && n.showOverlay && v.show(), n.fadeIn) {
                    var j = n.onBlock ? n.onBlock : c,
                        H = n.showOverlay && !y ? j : c,
                        z = y ? j : c;
                    n.showOverlay && I._fadeIn(n.fadeIn, H), y && w._fadeIn(n.fadeIn, z)
                } else n.showOverlay && I.show(), y && w.show(), n.onBlock && n.onBlock.bind(w)();
                if (i(1, t, n), k ? (p = w[0], b = e(n.focusableElements, p), n.focusInput && setTimeout(l, 20)) : d(w[0], n.centerX, n.centerY), n.timeout) {
                    var W = setTimeout(function() {
                        k ? e.unblockUI(n) : e(t).unblock(n)
                    }, n.timeout);
                    e(t).data("blockUI.timeout", W)
                }
            }
        }

        function o(t, o) {
            var s, l = t == window,
                d = e(t),
                a = d.data("blockUI.history"),
                c = d.data("blockUI.timeout");
            c && (clearTimeout(c), d.removeData("blockUI.timeout")), o = e.extend({}, e.blockUI.defaults, o || {}), i(0, t, o), null === o.onUnblock && (o.onUnblock = d.data("blockUI.onUnblock"), d.removeData("blockUI.onUnblock"));
            var r;
            r = l ? e(document.body).children().filter(".blockUI").add("body > .blockUI") : d.find(">.blockUI"), o.cursorReset && (r.length > 1 && (r[1].style.cursor = o.cursorReset), r.length > 2 && (r[2].style.cursor = o.cursorReset)), l && (p = b = null), o.fadeOut ? (s = r.length, r.stop().fadeOut(o.fadeOut, function() {
                0 == --s && n(r, a, o, t)
            })) : n(r, a, o, t)
        }

        function n(t, o, n, i) {
            var s = e(i);
            if (!s.data("blockUI.isBlocked")) {
                t.each(function(e, t) {
                    this.parentNode && this.parentNode.removeChild(this)
                }), o && o.el && (o.el.style.display = o.display, o.el.style.position = o.position, o.el.style.cursor = "default", o.parent && o.parent.appendChild(o.el), s.removeData("blockUI.history")), s.data("blockUI.static") && s.css("position", "static"), "function" == typeof n.onUnblock && n.onUnblock(i, n);
                var l = e(document.body),
                    d = l.width(),
                    a = l[0].style.width;
                l.width(d - 1).width(d), l[0].style.width = a
            }
        }

        function i(t, o, n) {
            var i = o == window,
                l = e(o);
            if ((t || (!i || p) && (i || l.data("blockUI.isBlocked"))) && (l.data("blockUI.isBlocked", t), i && n.bindEvents && (!t || n.showOverlay))) {
                var d = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
                t ? e(document).bind(d, n, s) : e(document).unbind(d, s)
            }
        }

        function s(t) {
            if ("keydown" === t.type && t.keyCode && 9 == t.keyCode && p && t.data.constrainTabKey) {
                var o = b,
                    n = !t.shiftKey && t.target === o[o.length - 1],
                    i = t.shiftKey && t.target === o[0];
                if (n || i) return setTimeout(function() {
                    l(i)
                }, 10), !1
            }
            var s = t.data,
                d = e(t.target);
            return d.hasClass("blockOverlay") && s.onOverlayClick && s.onOverlayClick(t), d.parents("div." + s.blockMsgClass).length > 0 || 0 === d.parents().children().filter("div.blockUI").length
        }

        function l(e) {
            if (b) {
                var t = b[!0 === e ? b.length - 1 : 0];
                t && t.focus()
            }
        }

        function d(e, t, o) {
            var n = e.parentNode,
                i = e.style,
                s = (n.offsetWidth - e.offsetWidth) / 2 - a(n, "borderLeftWidth"),
                l = (n.offsetHeight - e.offsetHeight) / 2 - a(n, "borderTopWidth");
            t && (i.left = s > 0 ? s + "px" : "0"), o && (i.top = l > 0 ? l + "px" : "0")
        }

        function a(t, o) {
            return parseInt(e.css(t, o), 10) || 0
        }
        e.fn._fadeIn = e.fn.fadeIn;
        var c = e.noop || function() {},
            r = /MSIE/.test(navigator.userAgent),
            u = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
            f = (document.documentMode, e.isFunction(document.createElement("div").style.setExpression));
        e.blockUI = function(e) {
            t(window, e)
        }, e.unblockUI = function(e) {
            o(window, e)
        }, e.growlUI = function(t, o, n, i) {
            var s = e('<div class="growlUI"></div>');
            t && s.append("<h1>" + t + "</h1>"), o && s.append("<h2>" + o + "</h2>"), n === undefined && (n = 3e3);
            var l = function(t) {
                t = t || {}, e.blockUI({
                    message: s,
                    fadeIn: "undefined" != typeof t.fadeIn ? t.fadeIn : 700,
                    fadeOut: "undefined" != typeof t.fadeOut ? t.fadeOut : 1e3,
                    timeout: "undefined" != typeof t.timeout ? t.timeout : n,
                    centerY: !1,
                    showOverlay: !1,
                    onUnblock: i,
                    css: e.blockUI.defaults.growlCSS
                })
            };
            l();
            s.css("opacity");
            s.mouseover(function() {
                l({
                    fadeIn: 0,
                    timeout: 3e4
                });
                var t = e(".blockMsg");
                t.stop(), t.fadeTo(300, 1)
            }).mouseout(function() {
                e(".blockMsg").fadeOut(1e3)
            })
        }, e.fn.block = function(o) {
            if (this[0] === window) return e.blockUI(o), this;
            var n = e.extend({}, e.blockUI.defaults, o || {});
            return this.each(function() {
                var t = e(this);
                n.ignoreIfBlocked && t.data("blockUI.isBlocked") || t.unblock({
                    fadeOut: 0
                })
            }), this.each(function() {
                "static" == e.css(this, "position") && (this.style.position = "relative", e(this).data("blockUI.static", !0)), this.style.zoom = 1, t(this, o)
            })
        }, e.fn.unblock = function(t) {
            return this[0] === window ? (e.unblockUI(t), this) : this.each(function() {
                o(this, t)
            })
        }, e.blockUI.version = 2.7, e.blockUI.defaults = {
            message: "<h1>Please wait...</h1>",
            title: null,
            draggable: !0,
            theme: !1,
            css: {
                padding: 0,
                margin: 0,
                width: "30%",
                top: "40%",
                left: "35%",
                textAlign: "center",
                color: "#000",
                border: "3px solid #aaa",
                backgroundColor: "#fff",
                cursor: "wait"
            },
            themedCSS: {
                width: "30%",
                top: "40%",
                left: "35%"
            },
            overlayCSS: {
                backgroundColor: "#000",
                opacity: .6,
                cursor: "wait"
            },
            cursorReset: "default",
            growlCSS: {
                width: "350px",
                top: "10px",
                left: "",
                right: "10px",
                border: "none",
                padding: "5px",
                opacity: .6,
                cursor: "default",
                color: "#fff",
                backgroundColor: "#000",
                "-webkit-border-radius": "10px",
                "-moz-border-radius": "10px",
                "border-radius": "10px"
            },
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
            forceIframe: !1,
            baseZ: 1e3,
            centerX: !0,
            centerY: !0,
            allowBodyStretch: !0,
            bindEvents: !0,
            constrainTabKey: !0,
            fadeIn: 200,
            fadeOut: 400,
            timeout: 0,
            showOverlay: !0,
            focusInput: !0,
            focusableElements: ":input:enabled:visible",
            onBlock: null,
            onUnblock: null,
            onOverlayClick: null,
            quirksmodeOffsetHack: 4,
            blockMsgClass: "blockMsg",
            ignoreIfBlocked: !1
        };
        var p = null,
            b = []
    }
    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery)
}();;
*/
/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
// ! function(e) {
//     var n = !1;
//     if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == typeof exports && (module.exports = e(), n = !0), !n) {
//         var o = window.Cookies,
//             t = window.Cookies = e();
//         t.noConflict = function() {
//             return window.Cookies = o, t
//         }
//     }
// }(function() {
//     function e() {
//         for (var e = 0, n = {}; e < arguments.length; e++) {
//             var o = arguments[e];
//             for (var t in o) n[t] = o[t]
//         }
//         return n
//     }

//     function n(o) {
//         function t(n, r, i) {
//             var c;
//             if ("undefined" != typeof document) {
//                 if (arguments.length > 1) {
//                     if ("number" == typeof(i = e({
//                             path: "/"
//                         }, t.defaults, i)).expires) {
//                         var a = new Date;
//                         a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires), i.expires = a
//                     }
//                     i.expires = i.expires ? i.expires.toUTCString() : "";
//                     try {
//                         c = JSON.stringify(r), /^[\{\[]/.test(c) && (r = c)
//                     } catch (m) {}
//                     r = o.write ? o.write(r, n) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = (n = (n = encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
//                     var f = "";
//                     for (var s in i) i[s] && (f += "; " + s, !0 !== i[s] && (f += "=" + i[s]));
//                     return document.cookie = n + "=" + r + f
//                 }
//                 n || (c = {});
//                 for (var p = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, u = 0; u < p.length; u++) {
//                     var l = p[u].split("="),
//                         C = l.slice(1).join("=");
//                     '"' === C.charAt(0) && (C = C.slice(1, -1));
//                     try {
//                         var g = l[0].replace(d, decodeURIComponent);
//                         if (C = o.read ? o.read(C, g) : o(C, g) || C.replace(d, decodeURIComponent), this.json) try {
//                             C = JSON.parse(C)
//                         } catch (m) {}
//                         if (n === g) {
//                             c = C;
//                             break
//                         }
//                         n || (c[g] = C)
//                     } catch (m) {}
//                 }
//                 return c
//             }
//         }
//         return t.set = t, t.get = function(e) {
//             return t.call(t, e)
//         }, t.getJSON = function() {
//             return t.apply({
//                 json: !0
//             }, [].slice.call(arguments))
//         }, t.defaults = {}, t.remove = function(n, o) {
//             t(n, "", e(o, {
//                 expires: -1
//             }))
//         }, t.withConverter = n, t
//     }
//     return n(function() {})
// });;
/*woocommerce.min.js*/
// jQuery(function(o) {
//     o(".woocommerce-ordering").on("change", "select.orderby", function() {
//         o(this).closest("form").submit()
//     }), o("input.qty:not(.product-quantity input.qty)").each(function() {
//         var e = parseFloat(o(this).attr("min"));
//         e >= 0 && parseFloat(o(this).val()) < e && o(this).val(e)
//     }), o(".woocommerce-store-notice__dismiss-link").click(function() {
//         Cookies.set("store_notice", "hidden", {
//             path: "/"
//         }), o(".woocommerce-store-notice").hide()
//     }), "hidden" === Cookies.get("store_notice") ? o(".woocommerce-store-notice").hide() : o(".woocommerce-store-notice").show(), o(document.body).on("click", function() {
//         o(".woocommerce-input-wrapper span.description:visible").prop("aria-hidden", !0).slideUp(250)
//     }), o(".woocommerce-input-wrapper").on("click", function(o) {
//         o.stopPropagation()
//     }), o(".woocommerce-input-wrapper :input").on("keydown", function(e) {
//         var t = o(this).parent().find("span.description");
//         if (27 === e.which && t.length && t.is(":visible")) return t.prop("aria-hidden", !0).slideUp(250), e.preventDefault(), !1
//     }).on("focus", function() {
//         var e = o(this).parent(),
//             t = e.find("span.description");
//         e.addClass("currentTarget"), o(".woocommerce-input-wrapper:not(.currentTarget) span.description:visible").prop("aria-hidden", !0).slideUp(250), t.length && t.is(":hidden") && t.prop("aria-hidden", !1).slideDown(250), e.removeClass("currentTarget")
//     }), o.scroll_to_notices = function(e) {
//         var t = "scrollBehavior" in document.documentElement.style;
//         e.length && (t ? e[0].scrollIntoView({
//             behavior: "smooth",
//             block: "center"
//         }) : o("html, body").animate({
//             scrollTop: e.offset().top - 100
//         }, 1e3))
//     }
// });;
/*cart-fragment.min.js*/
// jQuery(function(e) {
//     function t() {
//         o && sessionStorage.setItem("wc_cart_created", (new Date).getTime())
//     }

//     function n(e) {
//         o && (localStorage.setItem(a, e), sessionStorage.setItem(a, e))
//     }

//     function r() {
//         e.ajax(s)
//     }
//     if ("undefined" == typeof wc_cart_fragments_params) return !1;
//     var o = !0,
//         a = wc_cart_fragments_params.cart_hash_key;
//     try {
//         o = "sessionStorage" in window && null !== window.sessionStorage, window.sessionStorage.setItem("wc", "test"), window.sessionStorage.removeItem("wc"), window.localStorage.setItem("wc", "test"), window.localStorage.removeItem("wc")
//     } catch (w) {
//         o = !1
//     }
//     var s = {
//         url: wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%", "get_refreshed_fragments"),
//         type: "POST",
//         success: function(r) {
//             r && r.fragments && (e.each(r.fragments, function(t, n) {
//                 e(t).replaceWith(n)
//             }), o && (sessionStorage.setItem(wc_cart_fragments_params.fragment_name, JSON.stringify(r.fragments)), n(r.cart_hash), r.cart_hash && t()), e(document.body).trigger("wc_fragments_refreshed"))
//         }
//     };
//     if (o) {
//         var i = null;
//         e(document.body).on("wc_fragment_refresh updated_wc_div", function() {
//             r()
//         }), e(document.body).on("added_to_cart removed_from_cart", function(e, r, o) {
//             var s = sessionStorage.getItem(a);
//             null !== s && s !== undefined && "" !== s || t(), sessionStorage.setItem(wc_cart_fragments_params.fragment_name, JSON.stringify(r)), n(o)
//         }), e(document.body).on("wc_fragments_refreshed", function() {
//             clearTimeout(i), i = setTimeout(r, 864e5)
//         }), e(window).on("storage onstorage", function(e) {
//             a === e.originalEvent.key && localStorage.getItem(a) !== sessionStorage.getItem(a) && r()
//         }), e(window).on("pageshow", function(t) {
//             t.originalEvent.persisted && (e(".widget_shopping_cart_content").empty(), e(document.body).trigger("wc_fragment_refresh"))
//         });
//         try {
//             var c = e.parseJSON(sessionStorage.getItem(wc_cart_fragments_params.fragment_name)),
//                 _ = sessionStorage.getItem(a),
//                 g = Cookies.get("woocommerce_cart_hash"),
//                 m = sessionStorage.getItem("wc_cart_created");
//             if (null !== _ && _ !== undefined && "" !== _ || (_ = ""), null !== g && g !== undefined && "" !== g || (g = ""), _ && (null === m || m === undefined || "" === m)) throw "No cart_created";
//             if (m) {
//                 var d = 1 * m + 864e5,
//                     f = (new Date).getTime();
//                 if (d < f) throw "Fragment expired";
//                 i = setTimeout(r, d - f)
//             }
//             if (!c || !c["div.widget_shopping_cart_content"] || _ !== g) throw "No fragment";
//             e.each(c, function(t, n) {
//                 e(t).replaceWith(n)
//             }), e(document.body).trigger("wc_fragments_loaded")
//         } catch (w) {
//             r()
//         }
//     } else r();
//     Cookies.get("woocommerce_items_in_cart") > 0 ? e(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show() : e(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").hide(), e(document.body).on("adding_to_cart", function() {
//         e(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show()
//     })
// });;

/*yith woocompare plugin*/
// jQuery(document).ready(function(a) {
//     function b(a, b) {
//         a = escape(a), b = escape(b);
//         var c = document.location.search,
//             d = a + "=" + b,
//             e = new RegExp("(&|\\?)" + a + "=[^&]*");
//         return c = c.replace(e, "$1" + d), RegExp.$1 || (c += (c.length > 0 ? "&" : "?") + d), c
//     }
//     a(document).on("click", ".product a.compare:not(.added)", function(b) {
//         b.preventDefault();
//         var c = a(this),
//             d = {
//                 action: yith_woocompare.actionadd,
//                 id: c.data("product_id"),
//                 context: "frontend"
//             },
//             e = a(".yith-woocompare-widget ul.products-list");
//         "undefined" != typeof a.fn.block && (c.block({
//             message: null,
//             overlayCSS: {
//                 background: "#fff url(" + yith_woocompare.loader + ") no-repeat center",
//                 backgroundSize: "16px 16px",
//                 opacity: .6
//             }
//         }), e.block({
//             message: null,
//             overlayCSS: {
//                 background: "#fff url(" + yith_woocompare.loader + ") no-repeat center",
//                 backgroundSize: "16px 16px",
//                 opacity: .6
//             }
//         })), a.ajax({
//             type: "post",
//             url: yith_woocompare.ajaxurl.toString().replace("%%endpoint%%", yith_woocompare.actionadd),
//             data: d,
//             dataType: "json",
//             success: function(b) {
//                 "undefined" != typeof a.fn.block && (c.unblock(), e.unblock()), c.addClass("added").attr("href", b.table_url).text(yith_woocompare.added_label), e.html(b.widget_table), "yes" == yith_woocompare.auto_open && a("body").trigger("yith_woocompare_open_popup", {
//                     response: b.table_url,
//                     button: c
//                 })
//             }
//         })
//     }), a(document).on("click", ".product a.compare.added", function(b) {
//         b.preventDefault();
//         var c = this.href;
//         "undefined" != typeof c && a("body").trigger("yith_woocompare_open_popup", {
//             response: c,
//             button: a(this)
//         })
//     }), a("body").on("yith_woocompare_open_popup", function(b, c) {
//         var d = c.response;
//         if (a(window).width() >= 768) a.colorbox({
//             href: d,
//             iframe: !0,
//             width: "90%",
//             height: "90%",
//             className: "yith_woocompare_colorbox",
//             onClosed: function() {
//                 var b = a(".yith-woocompare-widget ul.products-list"),
//                     c = {
//                         action: yith_woocompare.actionreload,
//                         context: "frontend"
//                     };
//                 "undefined" != typeof a.fn.block && b.block({
//                     message: null,
//                     overlayCSS: {
//                         background: "#fff url(" + yith_woocompare.loader + ") no-repeat center",
//                         backgroundSize: "16px 16px",
//                         opacity: .6
//                     }
//                 }), a.ajax({
//                     type: "post",
//                     url: yith_woocompare.ajaxurl.toString().replace("%%endpoint%%", yith_woocompare.actionreload),
//                     data: c,
//                     success: function(c) {
//                         "undefined" != typeof a.fn.block && b.unblock().html(c), b.html(c)
//                     }
//                 })
//             }
//         }), a(window).resize(function() {
//             a.colorbox.resize({
//                 width: "90%",
//                 height: "90%"
//             })
//         });
//         else {
//             var e = d.split("?"),
//                 f = "iframe";
//             if (e.length >= 2) {
//                 for (var g = encodeURIComponent(f) + "=", h = e[1].split(/[&;]/g), i = h.length; i-- > 0;) h[i].lastIndexOf(g, 0) !== -1 && h.splice(i, 1);
//                 d = e[0] + "?" + h.join("&")
//             }
//             window.open(d, yith_woocompare.table_title)
//         }
//     }), a(document).on("click", ".remove a", function(b) {
//         b.preventDefault();
//         var c = a(this),
//             d = {
//                 action: yith_woocompare.actionremove,
//                 id: c.data("product_id"),
//                 context: "frontend"
//             };
//         a("td.product_" + d.id + ", th.product_" + d.id);
//         "undefined" != typeof a.fn.block && c.block({
//             message: null,
//             overlayCSS: {
//                 background: "#fff url(" + yith_woocompare.loader + ") no-repeat center",
//                 backgroundSize: "16px 16px",
//                 opacity: .6
//             }
//         }), a.ajax({
//             type: "post",
//             url: yith_woocompare.ajaxurl.toString().replace("%%endpoint%%", yith_woocompare.actionremove),
//             data: d,
//             dataType: "html",
//             success: function(b) {
//                 var d = a(b).filter("table.compare-list");
//                 a("body > table.compare-list").replaceWith(d), a('.compare[data-product_id="' + c.data("product_id") + '"]', window.parent.document).removeClass("added").html(yith_woocompare.button_text), a(window).trigger("yith_woocompare_product_removed")
//             }
//         })
//     }), a(".yith-woocompare-open a, a.yith-woocompare-open").on("click", function(c) {
//         c.preventDefault(), a("body").trigger("yith_woocompare_open_popup", {
//             response: b("action", yith_woocompare.actionview) + "&iframe=true"
//         })
//     }), a(".yith-woocompare-widget").on("click", "a.compare", function(b) {
//         b.preventDefault(), a("body").trigger("yith_woocompare_open_popup", {
//             response: a(this).attr("href")
//         })
//     }).on("click", "li a.remove, a.clear-all", function(b) {
//         b.preventDefault();
//         var c = a(".yith-woocompare-widget .products-list").data("lang"),
//             d = a(this),
//             e = d.data("product_id"),
//             f = {
//                 action: yith_woocompare.actionremove,
//                 id: e,
//                 context: "frontend",
//                 responseType: "product_list",
//                 lang: c
//             },
//             g = d.parents(".yith-woocompare-widget").find("ul.products-list");
//         "undefined" != typeof a.fn.block && g.block({
//             message: null,
//             overlayCSS: {
//                 background: "#fff url(" + yith_woocompare.loader + ") no-repeat center",
//                 backgroundSize: "16px 16px",
//                 opacity: .6
//             }
//         }), a.ajax({
//             type: "post",
//             url: yith_woocompare.ajaxurl.toString().replace("%%endpoint%%", yith_woocompare.actionremove),
//             data: f,
//             dataType: "html",
//             success: function(b) {
//                 "all" == e ? a(".compare.added").removeClass("added").html(yith_woocompare.button_text) : a('.compare[data-product_id="' + e + '"]').removeClass("added").html(yith_woocompare.button_text), g.html(b), "undefined" != typeof a.fn.block && g.unblock()
//             }
//         })
//     })
// });;
/*!
Colorbox v1.5.10 - 2014-06-26
jQuery lightbox and modal window plugin
(c) 2014 Jack Moore - http://www.jacklmoore.com/colorbox
license: http://www.opensource.org/licenses/mit-license.php
*/
(function(t, e, i) {
    function n(i, n, o) {
        var r = e.createElement(i);
        return n && (r.id = Z + n), o && (r.style.cssText = o), t(r)
    }

    function o() {
        return i.innerHeight ? i.innerHeight : t(i).height()
    }

    function r(e, i) {
        i !== Object(i) && (i = {}), this.cache = {}, this.el = e, this.value = function(e) {
            var n;
            return void 0 === this.cache[e] && (n = t(this.el).attr("data-cbox-" + e), void 0 !== n ? this.cache[e] = n : void 0 !== i[e] ? this.cache[e] = i[e] : void 0 !== X[e] && (this.cache[e] = X[e])), this.cache[e]
        }, this.get = function(e) {
            var i = this.value(e);
            return t.isFunction(i) ? i.call(this.el, this) : i
        }
    }

    function h(t) {
        var e = W.length,
            i = (z + t) % e;
        return 0 > i ? e + i : i
    }

    function a(t, e) {
        return Math.round((/%/.test(t) ? ("x" === e ? E.width() : o()) / 100 : 1) * parseInt(t, 10))
    }

    function s(t, e) {
        return t.get("photo") || t.get("photoRegex").test(e)
    }

    function l(t, e) {
        return t.get("retinaUrl") && i.devicePixelRatio > 1 ? e.replace(t.get("photoRegex"), t.get("retinaSuffix")) : e
    }

    function d(t) {
        "contains" in y[0] && !y[0].contains(t.target) && t.target !== v[0] && (t.stopPropagation(), y.focus())
    }

    function c(t) {
        c.str !== t && (y.add(v).removeClass(c.str).addClass(t), c.str = t)
    }

    function g(e) {
        z = 0, e && e !== !1 && "nofollow" !== e ? (W = t("." + te).filter(function() {
            var i = t.data(this, Y),
                n = new r(this, i);
            return n.get("rel") === e
        }), z = W.index(_.el), -1 === z && (W = W.add(_.el), z = W.length - 1)) : W = t(_.el)
    }

    function u(i) {
        t(e).trigger(i), ae.triggerHandler(i)
    }

    function f(i) {
        var o;
        if (!G) {
            if (o = t(i).data(Y), _ = new r(i, o), g(_.get("rel")), !$) {
                $ = q = !0, c(_.get("className")), y.css({
                    visibility: "hidden",
                    display: "block",
                    opacity: ""
                }), L = n(se, "LoadedContent", "width:0; height:0; overflow:hidden; visibility:hidden"), b.css({
                    width: "",
                    height: ""
                }).append(L), D = T.height() + k.height() + b.outerHeight(!0) - b.height(), j = C.width() + H.width() + b.outerWidth(!0) - b.width(), A = L.outerHeight(!0), N = L.outerWidth(!0);
                var h = a(_.get("initialWidth"), "x"),
                    s = a(_.get("initialHeight"), "y"),
                    l = _.get("maxWidth"),
                    f = _.get("maxHeight");
                _.w = (l !== !1 ? Math.min(h, a(l, "x")) : h) - N - j, _.h = (f !== !1 ? Math.min(s, a(f, "y")) : s) - A - D, L.css({
                    width: "",
                    height: _.h
                }), J.position(), u(ee), _.get("onOpen"), O.add(I).hide(), y.focus(), _.get("trapFocus") && e.addEventListener && (e.addEventListener("focus", d, !0), ae.one(re, function() {
                    e.removeEventListener("focus", d, !0)
                })), _.get("returnFocus") && ae.one(re, function() {
                    t(_.el).focus()
                })
            }
            v.css({
                opacity: parseFloat(_.get("opacity")) || "",
                cursor: _.get("overlayClose") ? "pointer" : "",
                visibility: "visible"
            }).show(), _.get("closeButton") ? B.html(_.get("close")).appendTo(b) : B.appendTo("<div/>"), w()
        }
    }

    function p() {
        !y && e.body && (V = !1, E = t(i), y = n(se).attr({
            id: Y,
            "class": t.support.opacity === !1 ? Z + "IE" : "",
            role: "dialog",
            tabindex: "-1"
        }).hide(), v = n(se, "Overlay").hide(), S = t([n(se, "LoadingOverlay")[0], n(se, "LoadingGraphic")[0]]), x = n(se, "Wrapper"), b = n(se, "Content").append(I = n(se, "Title"), R = n(se, "Current"), P = t('<button type="button"/>').attr({
            id: Z + "Previous"
        }), K = t('<button type="button"/>').attr({
            id: Z + "Next"
        }), F = n("button", "Slideshow"), S), B = t('<button type="button"/>').attr({
            id: Z + "Close"
        }), x.append(n(se).append(n(se, "TopLeft"), T = n(se, "TopCenter"), n(se, "TopRight")), n(se, !1, "clear:left").append(C = n(se, "MiddleLeft"), b, H = n(se, "MiddleRight")), n(se, !1, "clear:left").append(n(se, "BottomLeft"), k = n(se, "BottomCenter"), n(se, "BottomRight"))).find("div div").css({
            "float": "left"
        }), M = n(se, !1, "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"), O = K.add(P).add(R).add(F), t(e.body).append(v, y.append(x, M)))
    }

    function m() {
        function i(t) {
            t.which > 1 || t.shiftKey || t.altKey || t.metaKey || t.ctrlKey || (t.preventDefault(), f(this))
        }
        return y ? (V || (V = !0, K.click(function() {
            J.next()
        }), P.click(function() {
            J.prev()
        }), B.click(function() {
            J.close()
        }), v.click(function() {
            _.get("overlayClose") && J.close()
        }), t(e).bind("keydown." + Z, function(t) {
            var e = t.keyCode;
            $ && _.get("escKey") && 27 === e && (t.preventDefault(), J.close()), $ && _.get("arrowKey") && W[1] && !t.altKey && (37 === e ? (t.preventDefault(), P.click()) : 39 === e && (t.preventDefault(), K.click()))
        }), t.isFunction(t.fn.on) ? t(e).on("click." + Z, "." + te, i) : t("." + te).live("click." + Z, i)), !0) : !1
    }

    function w() {
        var e, o, r, h = J.prep,
            d = ++le;
        if (q = !0, U = !1, u(he), u(ie), _.get("onLoad"), _.h = _.get("height") ? a(_.get("height"), "y") - A - D : _.get("innerHeight") && a(_.get("innerHeight"), "y"), _.w = _.get("width") ? a(_.get("width"), "x") - N - j : _.get("innerWidth") && a(_.get("innerWidth"), "x"), _.mw = _.w, _.mh = _.h, _.get("maxWidth") && (_.mw = a(_.get("maxWidth"), "x") - N - j, _.mw = _.w && _.w < _.mw ? _.w : _.mw), _.get("maxHeight") && (_.mh = a(_.get("maxHeight"), "y") - A - D, _.mh = _.h && _.h < _.mh ? _.h : _.mh), e = _.get("href"), Q = setTimeout(function() {
                S.show()
            }, 100), _.get("inline")) {
            var c = t(e);
            r = t("<div>").hide().insertBefore(c), ae.one(he, function() {
                r.replaceWith(c)
            }), h(c)
        } else _.get("iframe") ? h(" ") : _.get("html") ? h(_.get("html")) : s(_, e) ? (e = l(_, e), U = new Image, t(U).addClass(Z + "Photo").bind("error", function() {
            h(n(se, "Error").html(_.get("imgError")))
        }).one("load", function() {
            d === le && setTimeout(function() {
                var e;
                t.each(["alt", "longdesc", "aria-describedby"], function(e, i) {
                    var n = t(_.el).attr(i) || t(_.el).attr("data-" + i);
                    n && U.setAttribute(i, n)
                }), _.get("retinaImage") && i.devicePixelRatio > 1 && (U.height = U.height / i.devicePixelRatio, U.width = U.width / i.devicePixelRatio), _.get("scalePhotos") && (o = function() {
                    U.height -= U.height * e, U.width -= U.width * e
                }, _.mw && U.width > _.mw && (e = (U.width - _.mw) / U.width, o()), _.mh && U.height > _.mh && (e = (U.height - _.mh) / U.height, o())), _.h && (U.style.marginTop = Math.max(_.mh - U.height, 0) / 2 + "px"), W[1] && (_.get("loop") || W[z + 1]) && (U.style.cursor = "pointer", U.onclick = function() {
                    J.next()
                }), U.style.width = U.width + "px", U.style.height = U.height + "px", h(U)
            }, 1)
        }), U.src = e) : e && M.load(e, _.get("data"), function(e, i) {
            d === le && h("error" === i ? n(se, "Error").html(_.get("xhrError")) : t(this).contents())
        })
    }
    var v, y, x, b, T, C, H, k, W, E, L, M, S, I, R, F, K, P, B, O, _, D, j, A, N, z, U, $, q, G, Q, J, V, X = {
            html: !1,
            photo: !1,
            iframe: !1,
            inline: !1,
            transition: "elastic",
            speed: 300,
            fadeOut: 300,
            width: !1,
            initialWidth: "600",
            innerWidth: !1,
            maxWidth: !1,
            height: !1,
            initialHeight: "450",
            innerHeight: !1,
            maxHeight: !1,
            scalePhotos: !0,
            scrolling: !0,
            opacity: .9,
            preloading: !0,
            className: !1,
            overlayClose: !0,
            escKey: !0,
            arrowKey: !0,
            top: !1,
            bottom: !1,
            left: !1,
            right: !1,
            fixed: !1,
            data: void 0,
            closeButton: !0,
            fastIframe: !0,
            open: !1,
            reposition: !0,
            loop: !0,
            slideshow: !1,
            slideshowAuto: !0,
            slideshowSpeed: 2500,
            slideshowStart: "start slideshow",
            slideshowStop: "stop slideshow",
            photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
            retinaImage: !1,
            retinaUrl: !1,
            retinaSuffix: "@2x.$1",
            current: "image {current} of {total}",
            previous: "previous",
            next: "next",
            close: "close",
            xhrError: "This content failed to load.",
            imgError: "This image failed to load.",
            returnFocus: !0,
            trapFocus: !0,
            onOpen: !1,
            onLoad: !1,
            onComplete: !1,
            onCleanup: !1,
            onClosed: !1,
            rel: function() {
                return this.rel
            },
            href: function() {
                return t(this).attr("href")
            },
            title: function() {
                return this.title
            }
        },
        Y = "colorbox",
        Z = "cbox",
        te = Z + "Element",
        ee = Z + "_open",
        ie = Z + "_load",
        ne = Z + "_complete",
        oe = Z + "_cleanup",
        re = Z + "_closed",
        he = Z + "_purge",
        ae = t("<a/>"),
        se = "div",
        le = 0,
        de = {},
        ce = function() {
            function t() {
                clearTimeout(h)
            }

            function e() {
                (_.get("loop") || W[z + 1]) && (t(), h = setTimeout(J.next, _.get("slideshowSpeed")))
            }

            function i() {
                F.html(_.get("slideshowStop")).unbind(s).one(s, n), ae.bind(ne, e).bind(ie, t), y.removeClass(a + "off").addClass(a + "on")
            }

            function n() {
                t(), ae.unbind(ne, e).unbind(ie, t), F.html(_.get("slideshowStart")).unbind(s).one(s, function() {
                    J.next(), i()
                }), y.removeClass(a + "on").addClass(a + "off")
            }

            function o() {
                r = !1, F.hide(), t(), ae.unbind(ne, e).unbind(ie, t), y.removeClass(a + "off " + a + "on")
            }
            var r, h, a = Z + "Slideshow_",
                s = "click." + Z;
            return function() {
                r ? _.get("slideshow") || (ae.unbind(oe, o), o()) : _.get("slideshow") && W[1] && (r = !0, ae.one(oe, o), _.get("slideshowAuto") ? i() : n(), F.show())
            }
        }();
    t[Y] || (t(p), J = t.fn[Y] = t[Y] = function(e, i) {
        var n, o = this;
        if (e = e || {}, t.isFunction(o)) o = t("<a/>"), e.open = !0;
        else if (!o[0]) return o;
        return o[0] ? (p(), m() && (i && (e.onComplete = i), o.each(function() {
            var i = t.data(this, Y) || {};
            t.data(this, Y, t.extend(i, e))
        }).addClass(te), n = new r(o[0], e), n.get("open") && f(o[0])), o) : o
    }, J.position = function(e, i) {
        function n() {
            T[0].style.width = k[0].style.width = b[0].style.width = parseInt(y[0].style.width, 10) - j + "px", b[0].style.height = C[0].style.height = H[0].style.height = parseInt(y[0].style.height, 10) - D + "px"
        }
        var r, h, s, l = 0,
            d = 0,
            c = y.offset();
        if (E.unbind("resize." + Z), y.css({
                top: -9e4,
                left: -9e4
            }), h = E.scrollTop(), s = E.scrollLeft(), _.get("fixed") ? (c.top -= h, c.left -= s, y.css({
                position: "fixed"
            })) : (l = h, d = s, y.css({
                position: "absolute"
            })), d += _.get("right") !== !1 ? Math.max(E.width() - _.w - N - j - a(_.get("right"), "x"), 0) : _.get("left") !== !1 ? a(_.get("left"), "x") : Math.round(Math.max(E.width() - _.w - N - j, 0) / 2), l += _.get("bottom") !== !1 ? Math.max(o() - _.h - A - D - a(_.get("bottom"), "y"), 0) : _.get("top") !== !1 ? a(_.get("top"), "y") : Math.round(Math.max(o() - _.h - A - D, 0) / 2), y.css({
                top: c.top,
                left: c.left,
                visibility: "visible"
            }), x[0].style.width = x[0].style.height = "9999px", r = {
                width: _.w + N + j,
                height: _.h + A + D,
                top: l,
                left: d
            }, e) {
            var g = 0;
            t.each(r, function(t) {
                return r[t] !== de[t] ? (g = e, void 0) : void 0
            }), e = g
        }
        de = r, e || y.css(r), y.dequeue().animate(r, {
            duration: e || 0,
            complete: function() {
                n(), q = !1, x[0].style.width = _.w + N + j + "px", x[0].style.height = _.h + A + D + "px", _.get("reposition") && setTimeout(function() {
                    E.bind("resize." + Z, J.position)
                }, 1), i && i()
            },
            step: n
        })
    }, J.resize = function(t) {
        var e;
        $ && (t = t || {}, t.width && (_.w = a(t.width, "x") - N - j), t.innerWidth && (_.w = a(t.innerWidth, "x")), L.css({
            width: _.w
        }), t.height && (_.h = a(t.height, "y") - A - D), t.innerHeight && (_.h = a(t.innerHeight, "y")), t.innerHeight || t.height || (e = L.scrollTop(), L.css({
            height: "auto"
        }), _.h = L.height()), L.css({
            height: _.h
        }), e && L.scrollTop(e), J.position("none" === _.get("transition") ? 0 : _.get("speed")))
    }, J.prep = function(i) {
        function o() {
            return _.w = _.w || L.width(), _.w = _.mw && _.mw < _.w ? _.mw : _.w, _.w
        }

        function a() {
            return _.h = _.h || L.height(), _.h = _.mh && _.mh < _.h ? _.mh : _.h, _.h
        }
        if ($) {
            var d, g = "none" === _.get("transition") ? 0 : _.get("speed");
            L.remove(), L = n(se, "LoadedContent").append(i), L.hide().appendTo(M.show()).css({
                width: o(),
                overflow: _.get("scrolling") ? "auto" : "hidden"
            }).css({
                height: a()
            }).prependTo(b), M.hide(), t(U).css({
                "float": "none"
            }), c(_.get("className")), d = function() {
                function i() {
                    t.support.opacity === !1 && y[0].style.removeAttribute("filter")
                }
                var n, o, a = W.length;
                $ && (o = function() {
                    clearTimeout(Q), S.hide(), u(ne), _.get("onComplete")
                }, I.html(_.get("title")).show(), L.show(), a > 1 ? ("string" == typeof _.get("current") && R.html(_.get("current").replace("{current}", z + 1).replace("{total}", a)).show(), K[_.get("loop") || a - 1 > z ? "show" : "hide"]().html(_.get("next")), P[_.get("loop") || z ? "show" : "hide"]().html(_.get("previous")), ce(), _.get("preloading") && t.each([h(-1), h(1)], function() {
                    var i, n = W[this],
                        o = new r(n, t.data(n, Y)),
                        h = o.get("href");
                    h && s(o, h) && (h = l(o, h), i = e.createElement("img"), i.src = h)
                })) : O.hide(), _.get("iframe") ? (n = e.createElement("iframe"), "frameBorder" in n && (n.frameBorder = 0), "allowTransparency" in n && (n.allowTransparency = "true"), _.get("scrolling") || (n.scrolling = "no"), t(n).attr({
                    src: _.get("href"),
                    name: (new Date).getTime(),
                    "class": Z + "Iframe",
                    allowFullScreen: !0
                }).one("load", o).appendTo(L), ae.one(he, function() {
                    n.src = "//about:blank"
                }), _.get("fastIframe") && t(n).trigger("load")) : o(), "fade" === _.get("transition") ? y.fadeTo(g, 1, i) : i())
            }, "fade" === _.get("transition") ? y.fadeTo(g, 0, function() {
                J.position(0, d)
            }) : J.position(g, d)
        }
    }, J.next = function() {
        !q && W[1] && (_.get("loop") || W[z + 1]) && (z = h(1), f(W[z]))
    }, J.prev = function() {
        !q && W[1] && (_.get("loop") || z) && (z = h(-1), f(W[z]))
    }, J.close = function() {
        $ && !G && (G = !0, $ = !1, u(oe), _.get("onCleanup"), E.unbind("." + Z), v.fadeTo(_.get("fadeOut") || 0, 0), y.stop().fadeTo(_.get("fadeOut") || 0, 0, function() {
            y.hide(), v.hide(), u(he), L.remove(), setTimeout(function() {
                G = !1, u(re), _.get("onClosed")
            }, 1)
        }))
    }, J.remove = function() {
        y && (y.stop(), t[Y].close(), y.stop(!1, !0).remove(), v.remove(), G = !1, y = null, t("." + te).removeData(Y).removeClass(te), t(e).unbind("click." + Z).unbind("keydown." + Z))
    }, J.element = function() {
        return t(_.el)
    }, J.settings = X)
})(jQuery, document, window);;
! function(t) {
    function e() {
        var t = location.href;
        return hashtag = -1 !== t.indexOf("#prettyPhoto") && decodeURI(t.substring(t.indexOf("#prettyPhoto") + 1, t.length)), hashtag && (hashtag = hashtag.replace(/<|>/g, "")), hashtag
    }

    function i() {
        "undefined" != typeof theRel && (location.hash = theRel + "/" + rel_index + "/")
    }

    function p() {
        -1 !== location.href.indexOf("#prettyPhoto") && (location.hash = "prettyPhoto")
    }

    function o(t, e) {
        var i = "[\\?&]" + (t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]")) + "=([^&#]*)",
            p = new RegExp(i).exec(e);
        return null == p ? "" : p[1]
    }
    t.prettyPhoto = {
        version: "3.1.6"
    }, t.fn.prettyPhoto = function(a) {
        function s() {
            t(".pp_loaderIcon").hide(), projectedTop = scroll_pos.scrollTop + (I / 2 - u.containerHeight / 2), projectedTop < 0 && (projectedTop = 0), $ppt.fadeTo(settings.animation_speed, 1), $pp_pic_holder.find(".pp_content").animate({
                height: u.contentHeight,
                width: u.contentWidth
            }, settings.animation_speed), $pp_pic_holder.animate({
                top: projectedTop,
                left: j / 2 - u.containerWidth / 2 < 0 ? 0 : j / 2 - u.containerWidth / 2,
                width: u.containerWidth
            }, settings.animation_speed, function() {
                $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(u.height).width(u.width), $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed), isSet && "image" == h(pp_images[set_position]) ? $pp_pic_holder.find(".pp_hoverContainer").show() : $pp_pic_holder.find(".pp_hoverContainer").hide(), settings.allow_expand && (u.resized ? t("a.pp_expand,a.pp_contract").show() : t("a.pp_expand").hide()), !settings.autoplay_slideshow || P || v || t.prettyPhoto.startSlideshow(), settings.changepicturecallback(), v = !0
            }), m(), a.ajaxcallback()
        }

        function n(e) {
            $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden"), $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function() {
                t(".pp_loaderIcon").show(), e()
            })
        }

        function l(e) {
            e > 1 ? t(".pp_nav").show() : t(".pp_nav").hide()
        }

        function r(t, e) {
            if (resized = !1, d(t, e), imageWidth = t, imageHeight = e, (k > j || b > I) && doresize && settings.allow_resize && !$) {
                for (resized = !0, fitting = !1; !fitting;) k > j ? (imageWidth = j - 200, imageHeight = e / t * imageWidth) : b > I ? (imageHeight = I - 200, imageWidth = t / e * imageHeight) : fitting = !0, b = imageHeight, k = imageWidth;
                (k > j || b > I) && r(k, b), d(imageWidth, imageHeight)
            }
            return {
                width: Math.floor(imageWidth),
                height: Math.floor(imageHeight),
                containerHeight: Math.floor(b),
                containerWidth: Math.floor(k) + 2 * settings.horizontal_padding,
                contentHeight: Math.floor(y),
                contentWidth: Math.floor(w),
                resized: resized
            }
        }

        function d(e, i) {
            e = parseFloat(e), i = parseFloat(i), $pp_details = $pp_pic_holder.find(".pp_details"), $pp_details.width(e), detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom")), $pp_details = $pp_details.clone().addClass(settings.theme).width(e).appendTo(t("body")).css({
                position: "absolute",
                top: -1e4
            }), detailsHeight += $pp_details.height(), detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight, $pp_details.remove(), $pp_title = $pp_pic_holder.find(".ppt"), $pp_title.width(e), titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom")), $pp_title = $pp_title.clone().appendTo(t("body")).css({
                position: "absolute",
                top: -1e4
            }), titleHeight += $pp_title.height(), $pp_title.remove(), y = i + detailsHeight, w = e, b = y + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height(), k = e
        }

        function h(t) {
            return t.match(/youtube\.com\/watch/i) || t.match(/youtu\.be/i) ? "youtube" : t.match(/vimeo\.com/i) ? "vimeo" : t.match(/\b.mov\b/i) ? "quicktime" : t.match(/\b.swf\b/i) ? "flash" : t.match(/\biframe=true\b/i) ? "iframe" : t.match(/\bajax=true\b/i) ? "ajax" : t.match(/\bcustom=true\b/i) ? "custom" : "#" == t.substr(0, 1) ? "inline" : "image"
        }

        function c() {
            if (doresize && "undefined" != typeof $pp_pic_holder) {
                if (scroll_pos = _(), contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width(), projectedTop = I / 2 + scroll_pos.scrollTop - contentHeight / 2, projectedTop < 0 && (projectedTop = 0), contentHeight > I) return;
                $pp_pic_holder.css({
                    top: projectedTop,
                    left: j / 2 + scroll_pos.scrollLeft - contentwidth / 2
                })
            }
        }

        function _() {
            return self.pageYOffset ? {
                scrollTop: self.pageYOffset,
                scrollLeft: self.pageXOffset
            } : document.documentElement && document.documentElement.scrollTop ? {
                scrollTop: document.documentElement.scrollTop,
                scrollLeft: document.documentElement.scrollLeft
            } : document.body ? {
                scrollTop: document.body.scrollTop,
                scrollLeft: document.body.scrollLeft
            } : void 0
        }

        function g() {
            I = t(window).height(), j = t(window).width(), "undefined" != typeof $pp_overlay && $pp_overlay.height(t(document).height()).width(j)
        }

        function m() {
            isSet && settings.overlay_gallery && "image" == h(pp_images[set_position]) ? (itemWidth = 57, navWidth = "facebook" == settings.theme || "pp_default" == settings.theme ? 50 : 30, itemsPerPage = Math.floor((u.containerWidth - 100 - navWidth) / itemWidth), itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length, totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1, 0 == totalPage ? (navWidth = 0, $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()) : $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(), galleryWidth = itemsPerPage * itemWidth, fullGalleryWidth = pp_images.length * itemWidth, $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"), goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage, t.prettyPhoto.changeGalleryPage(goToPage), $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")) : $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")
        }

        function f(e) {
            if (settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href))), settings.markup = settings.markup.replace("{pp_social}", ""), t("body").append(settings.markup), $pp_pic_holder = t(".pp_pic_holder"), $ppt = t(".ppt"), $pp_overlay = t("div.pp_overlay"), isSet && settings.overlay_gallery) {
                currentGalleryPage = 0, toInject = "";
                for (var i = 0; i < pp_images.length; i++) pp_images[i].match(/\b(jpg|jpeg|png|gif)\b/gi) ? (classname = "", img_src = pp_images[i]) : (classname = "default", img_src = ""), toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
                toInject = settings.gallery_markup.replace(/{gallery}/g, toInject), $pp_pic_holder.find("#pp_full_res").after(toInject), $pp_gallery = t(".pp_pic_holder .pp_gallery"), $pp_gallery_li = $pp_gallery.find("li"), $pp_gallery.find(".pp_arrow_next").click(function() {
                    return t.prettyPhoto.changeGalleryPage("next"), t.prettyPhoto.stopSlideshow(), !1
                }), $pp_gallery.find(".pp_arrow_previous").click(function() {
                    return t.prettyPhoto.changeGalleryPage("previous"), t.prettyPhoto.stopSlideshow(), !1
                }), $pp_pic_holder.find(".pp_content").hover(function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
                }, function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
                }), itemWidth = 57, $pp_gallery_li.each(function(e) {
                    t(this).find("a").click(function() {
                        return t.prettyPhoto.changePage(e), t.prettyPhoto.stopSlideshow(), !1
                    })
                })
            }
            settings.slideshow && ($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'), $pp_pic_holder.find(".pp_nav .pp_play").click(function() {
                return t.prettyPhoto.startSlideshow(), !1
            })), $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme), $pp_overlay.css({
                opacity: 0,
                height: t(document).height(),
                width: t(window).width()
            }).bind("click", function() {
                settings.modal || t.prettyPhoto.close()
            }), t("a.pp_close").bind("click", function() {
                return t.prettyPhoto.close(), !1
            }), settings.allow_expand && t("a.pp_expand").bind("click", function(e) {
                return t(this).hasClass("pp_expand") ? (t(this).removeClass("pp_expand").addClass("pp_contract"), doresize = !1) : (t(this).removeClass("pp_contract").addClass("pp_expand"), doresize = !0), n(function() {
                    t.prettyPhoto.open()
                }), !1
            }), $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function() {
                return t.prettyPhoto.changePage("previous"), t.prettyPhoto.stopSlideshow(), !1
            }), $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function() {
                return t.prettyPhoto.changePage("next"), t.prettyPhoto.stopSlideshow(), !1
            }), c()
        }
        a = jQuery.extend({
            hook: "rel",
            animation_speed: "fast",
            ajaxcallback: function() {},
            slideshow: 5e3,
            autoplay_slideshow: !1,
            opacity: .8,
            show_title: !0,
            allow_resize: !0,
            allow_expand: !0,
            default_width: 500,
            default_height: 344,
            counter_separator_label: "/",
            theme: "pp_default",
            horizontal_padding: 20,
            hideflash: !1,
            wmode: "opaque",
            autoplay: !0,
            modal: !1,
            deeplinking: !0,
            overlay_gallery: !0,
            overlay_gallery_max: 30,
            keyboard_shortcuts: !0,
            changepicturecallback: function() {},
            callback: function() {},
            ie6_fallback: !0,
            markup: '<div class="pp_pic_holder"> \t\t\t\t\t\t<div class="ppt">&nbsp;</div> \t\t\t\t\t\t<div class="pp_top"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_content_container"> \t\t\t\t\t\t\t<div class="pp_left"> \t\t\t\t\t\t\t<div class="pp_right"> \t\t\t\t\t\t\t\t<div class="pp_content"> \t\t\t\t\t\t\t\t\t<div class="pp_loaderIcon"></div> \t\t\t\t\t\t\t\t\t<div class="pp_fade"> \t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_expand" title="Expand the image">Expand</a> \t\t\t\t\t\t\t\t\t\t<div class="pp_hoverContainer"> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_next" href="#">next</a> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_previous" href="#">previous</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t<div id="pp_full_res"></div> \t\t\t\t\t\t\t\t\t\t<div class="pp_details"> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_nav"> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t\t\t\t\t<p class="currentTextHolder">0/0</p> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t\t<p class="pp_description"></p> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_social">{pp_social}</div> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_close" href="#">Close</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_bottom"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t</div> \t\t\t\t\t<div class="pp_overlay"></div>',
            gallery_markup: '<div class="pp_gallery"> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t<div> \t\t\t\t\t\t\t\t\t<ul> \t\t\t\t\t\t\t\t\t\t{gallery} \t\t\t\t\t\t\t\t\t</ul> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t</div>',
            image_markup: '<img id="fullResImage" src="{path}" />',
            flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
            quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="https://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="https://www.apple.com/quicktime/download/"></embed></object>',
            iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
            inline_markup: '<div class="pp_inline">{content}</div>',
            custom_markup: "",
            social_tools: '<div class="twitter"><a href="//twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="//platform.twitter.com/widgets.js"><\/script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
        }, a);
        var u, v, y, w, b, k, P, x = this,
            $ = !1,
            I = t(window).height(),
            j = t(window).width();
        return doresize = !0, scroll_pos = _(), t(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function() {
            c(), g()
        }), a.keyboard_shortcuts && t(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function(e) {
            if ("undefined" != typeof $pp_pic_holder && $pp_pic_holder.is(":visible")) switch (e.keyCode) {
                case 37:
                    t.prettyPhoto.changePage("previous"), e.preventDefault();
                    break;
                case 39:
                    t.prettyPhoto.changePage("next"), e.preventDefault();
                    break;
                case 27:
                    settings.modal || t.prettyPhoto.close(), e.preventDefault()
            }
        }), t.prettyPhoto.initialize = function() {
            return settings = a, "pp_default" == settings.theme && (settings.horizontal_padding = 16), theRel = t(this).attr(settings.hook), galleryRegExp = /\[(?:.*)\]/, isSet = !!galleryRegExp.exec(theRel), pp_images = isSet ? jQuery.map(x, function(e, i) {
                if (-1 != t(e).attr(settings.hook).indexOf(theRel)) return t(e).attr("href")
            }) : t.makeArray(t(this).attr("href")), pp_titles = isSet ? jQuery.map(x, function(e, i) {
                if (-1 != t(e).attr(settings.hook).indexOf(theRel)) return t(e).find("img").attr("alt") ? t(e).find("img").attr("alt") : ""
            }) : t.makeArray(t(this).find("img").attr("alt")), pp_descriptions = isSet ? jQuery.map(x, function(e, i) {
                if (-1 != t(e).attr(settings.hook).indexOf(theRel)) return t(e).attr("title") ? t(e).attr("title") : ""
            }) : t.makeArray(t(this).attr("title")), pp_images.length > settings.overlay_gallery_max && (settings.overlay_gallery = !1), set_position = jQuery.inArray(t(this).attr("href"), pp_images), rel_index = isSet ? set_position : t("a[" + settings.hook + "^='" + theRel + "']").index(t(this)), f(), settings.allow_resize && t(window).bind("scroll.prettyphoto", function() {
                c()
            }), t.prettyPhoto.open(), !1
        }, t.prettyPhoto.open = function(e) {
            return "undefined" == typeof settings && (settings = a, pp_images = t.makeArray(arguments[0]), pp_titles = arguments[1] ? t.makeArray(arguments[1]) : t.makeArray(""), pp_descriptions = arguments[2] ? t.makeArray(arguments[2]) : t.makeArray(""), isSet = pp_images.length > 1, set_position = arguments[3] ? arguments[3] : 0, f(e.target)), settings.hideflash && t("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden"), l(t(pp_images).length), t(".pp_loaderIcon").show(), settings.deeplinking && i(), settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)), $pp_pic_holder.find(".pp_social").html(facebook_like_link)), $ppt.is(":hidden") && $ppt.css("opacity", 0).show(), $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity), $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + t(pp_images).length), "undefined" != typeof pp_descriptions[set_position] && "" != pp_descriptions[set_position] ? $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])) : $pp_pic_holder.find(".pp_description").hide(), movie_width = parseFloat(o("width", pp_images[set_position])) ? o("width", pp_images[set_position]) : settings.default_width.toString(), movie_height = parseFloat(o("height", pp_images[set_position])) ? o("height", pp_images[set_position]) : settings.default_height.toString(), $ = !1, -1 != movie_height.indexOf("%") && (movie_height = parseFloat(t(window).height() * parseFloat(movie_height) / 100 - 150), $ = !0), -1 != movie_width.indexOf("%") && (movie_width = parseFloat(t(window).width() * parseFloat(movie_width) / 100 - 150), $ = !0), $pp_pic_holder.fadeIn(function() {
                switch (settings.show_title && "" != pp_titles[set_position] && "undefined" != typeof pp_titles[set_position] ? $ppt.html(unescape(pp_titles[set_position])) : $ppt.html("&nbsp;"), imgPreloader = "", skipInjection = !1, h(pp_images[set_position])) {
                    case "image":
                        imgPreloader = new Image, nextImage = new Image, isSet && set_position < t(pp_images).length - 1 && (nextImage.src = pp_images[set_position + 1]), prevImage = new Image, isSet && pp_images[set_position - 1] && (prevImage.src = pp_images[set_position - 1]), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]), imgPreloader.onload = function() {
                            u = r(imgPreloader.width, imgPreloader.height), s()
                        }, imgPreloader.onerror = function() {
                            alert("Image cannot be loaded. Make sure the path is correct and image exist."), t.prettyPhoto.close()
                        }, imgPreloader.src = pp_images[set_position];
                        break;
                    case "youtube":
                        u = r(movie_width, movie_height), movie_id = o("v", pp_images[set_position]), "" == movie_id && (movie_id = pp_images[set_position].split("youtu.be/"), movie_id = movie_id[1], movie_id.indexOf("?") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("?"))), movie_id.indexOf("&") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("&")))), movie = "//www.youtube.com/embed/" + movie_id, o("rel", pp_images[set_position]) ? movie += "?rel=" + o("rel", pp_images[set_position]) : movie += "?rel=1", settings.autoplay && (movie += "&autoplay=1"), toInject = settings.iframe_markup.replace(/{width}/g, u.width).replace(/{height}/g, u.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
                        break;
                    case "vimeo":
                        u = r(movie_width, movie_height), movie_id = pp_images[set_position];
                        var e = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/,
                            i = movie_id.match(e);
                        movie = "//player.vimeo.com/video/" + i[3] + "?title=0&amp;byline=0&amp;portrait=0", settings.autoplay && (movie += "&autoplay=1;"), vimeo_width = u.width + "/embed/?moog_width=" + u.width, toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, u.height).replace(/{path}/g, movie);
                        break;
                    case "quicktime":
                        (u = r(movie_width, movie_height)).height += 15, u.contentHeight += 15, u.containerHeight += 15, toInject = settings.quicktime_markup.replace(/{width}/g, u.width).replace(/{height}/g, u.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
                        break;
                    case "flash":
                        u = r(movie_width, movie_height), flash_vars = pp_images[set_position], flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length), filename = pp_images[set_position], filename = filename.substring(0, filename.indexOf("?")), toInject = settings.flash_markup.replace(/{width}/g, u.width).replace(/{height}/g, u.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
                        break;
                    case "iframe":
                        u = r(movie_width, movie_height), frame_url = pp_images[set_position], frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1), toInject = settings.iframe_markup.replace(/{width}/g, u.width).replace(/{height}/g, u.height).replace(/{path}/g, frame_url);
                        break;
                    case "ajax":
                        doresize = !1, u = r(movie_width, movie_height), doresize = !0, skipInjection = !0, t.get(pp_images[set_position], function(t) {
                            toInject = settings.inline_markup.replace(/{content}/g, t), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, s()
                        });
                        break;
                    case "custom":
                        u = r(movie_width, movie_height), toInject = settings.custom_markup;
                        break;
                    case "inline":
                        myClone = t(pp_images[set_position]).clone().append('<br clear="all" />').css({
                            width: settings.default_width
                        }).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(t("body")).show(), doresize = !1, u = r(t(myClone).width(), t(myClone).height()), doresize = !0, t(myClone).remove(), toInject = settings.inline_markup.replace(/{content}/g, t(pp_images[set_position]).html())
                }
                imgPreloader || skipInjection || ($pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, s())
            }), !1
        }, t.prettyPhoto.changePage = function(e) {
            currentGalleryPage = 0, "previous" == e ? --set_position < 0 && (set_position = t(pp_images).length - 1) : "next" == e ? ++set_position > t(pp_images).length - 1 && (set_position = 0) : set_position = e, rel_index = set_position, doresize || (doresize = !0), settings.allow_expand && t(".pp_contract").removeClass("pp_contract").addClass("pp_expand"), n(function() {
                t.prettyPhoto.open()
            })
        }, t.prettyPhoto.changeGalleryPage = function(t) {
            "next" == t ? ++currentGalleryPage > totalPage && (currentGalleryPage = 0) : "previous" == t ? --currentGalleryPage < 0 && (currentGalleryPage = totalPage) : currentGalleryPage = t, slide_speed = "next" == t || "previous" == t ? settings.animation_speed : 0, slide_to = currentGalleryPage * (itemsPerPage * itemWidth), $pp_gallery.find("ul").animate({
                left: -slide_to
            }, slide_speed)
        }, t.prettyPhoto.startSlideshow = function() {
            void 0 === P ? ($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function() {
                return t.prettyPhoto.stopSlideshow(), !1
            }), P = setInterval(t.prettyPhoto.startSlideshow, settings.slideshow)) : t.prettyPhoto.changePage("next")
        }, t.prettyPhoto.stopSlideshow = function() {
            $pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function() {
                return t.prettyPhoto.startSlideshow(), !1
            }), clearInterval(P), P = undefined
        }, t.prettyPhoto.close = function() {
            $pp_overlay.is(":animated") || (t.prettyPhoto.stopSlideshow(), $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden"), t("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function() {
                t(this).remove()
            }), $pp_overlay.fadeOut(settings.animation_speed, function() {
                settings.hideflash && t("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible"), t(this).remove(), t(window).unbind("scroll.prettyphoto"), p(), settings.callback(), doresize = !0, v = !1, delete settings
            }))
        }, !pp_alreadyInitialized && e() && (pp_alreadyInitialized = !0, hashIndex = e(), hashRel = hashIndex, hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1), hashRel = hashRel.substring(0, hashRel.indexOf("/")), setTimeout(function() {
            t("a[" + a.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
        }, 50)), this.unbind("click.prettyphoto").bind("click.prettyphoto", t.prettyPhoto.initialize)
    }
}(jQuery);
var pp_alreadyInitialized = !1;;
(function(a) {
    var b = this.SelectBox = function(c, d) {
        if (c instanceof jQuery) {
            if (c.length > 0) {
                c = c[0]
            } else {
                return
            }
        }
        this.typeTimer = null;
        this.typeSearch = "";
        this.isMac = navigator.platform.match(/mac/i);
        d = "object" === typeof d ? d : {};
        this.selectElement = c;
        if (!d.mobile && navigator.userAgent.match(/iPad|iPhone|Android|IEMobile|BlackBerry/i)) {
            return false
        }
        if ("select" !== c.tagName.toLowerCase()) {
            return false
        }
        this.init(d)
    };
    b.prototype.version = "1.2.0";
    b.prototype.init = function(o) {
        var j = a(this.selectElement);
        if (j.data("selectBox-control")) {
            return false
        }
        var f = a('<a class="selectBox" />'),
            h = j.attr("multiple") || parseInt(j.attr("size")) > 1,
            d = o || {},
            c = parseInt(j.prop("tabindex")) || 0,
            m = this;
        f.width(j.outerWidth()).addClass(j.attr("class")).attr("title", j.attr("title") || "").attr("tabindex", c).css("display", "inline-block").bind("focus.selectBox", function() {
            if (this !== document.activeElement && document.body !== document.activeElement) {
                a(document.activeElement).blur()
            }
            if (f.hasClass("selectBox-active")) {
                return
            }
            f.addClass("selectBox-active");
            j.trigger("focus")
        }).bind("blur.selectBox", function() {
            if (!f.hasClass("selectBox-active")) {
                return
            }
            f.removeClass("selectBox-active");
            j.trigger("blur")
        });
        if (!a(window).data("selectBox-bindings")) {
            a(window).data("selectBox-bindings", true).bind("scroll.selectBox", this.hideMenus).bind("resize.selectBox", this.hideMenus)
        }
        if (j.attr("disabled")) {
            f.addClass("selectBox-disabled")
        }
        j.bind("click.selectBox", function(p) {
            f.focus();
            p.preventDefault()
        });
        if (h) {
            o = this.getOptions("inline");
            f.append(o).data("selectBox-options", o).addClass("selectBox-inline selectBox-menuShowing").bind("keydown.selectBox", function(p) {
                m.handleKeyDown(p)
            }).bind("keypress.selectBox", function(p) {
                m.handleKeyPress(p)
            }).bind("mousedown.selectBox", function(p) {
                if (1 !== p.which) {
                    return
                }
                if (a(p.target).is("A.selectBox-inline")) {
                    p.preventDefault()
                }
                if (!f.hasClass("selectBox-focus")) {
                    f.focus()
                }
            }).insertAfter(j);
            if (!j[0].style.height) {
                var n = j.attr("size") ? parseInt(j.attr("size")) : 5;
                var e = f.clone().removeAttr("id").css({
                    position: "absolute",
                    top: "-9999em"
                }).show().appendTo("body");
                e.find(".selectBox-options").html("<li><a>\u00A0</a></li>");
                var l = parseInt(e.find(".selectBox-options A:first").html("&nbsp;").outerHeight());
                e.remove();
                f.height(l * n)
            }
            this.disableSelection(f)
        } else {
            var i = a('<span class="selectBox-label" />'),
                k = a('<span class="selectBox-arrow" />');
            i.attr("class", this.getLabelClass()).text(this.getLabelText());
            o = this.getOptions("dropdown");
            o.appendTo("BODY");
            f.data("selectBox-options", o).addClass("selectBox-dropdown").append(i).append(k).bind("mousedown.selectBox", function(p) {
                if (1 === p.which) {
                    if (f.hasClass("selectBox-menuShowing")) {
                        m.hideMenus()
                    } else {
                        p.stopPropagation();
                        o.data("selectBox-down-at-x", p.screenX).data("selectBox-down-at-y", p.screenY);
                        m.showMenu()
                    }
                }
            }).bind("keydown.selectBox", function(p) {
                m.handleKeyDown(p)
            }).bind("keypress.selectBox", function(p) {
                m.handleKeyPress(p)
            }).bind("open.selectBox", function(q, p) {
                if (p && p._selectBox === true) {
                    return
                }
                m.showMenu()
            }).bind("close.selectBox", function(q, p) {
                if (p && p._selectBox === true) {
                    return
                }
                m.hideMenus()
            }).insertAfter(j);
            var g = f.width() - k.outerWidth() - parseInt(i.css("paddingLeft")) || 0 - parseInt(i.css("paddingRight")) || 0;
            i.width(g);
            this.disableSelection(f)
        }
        j.addClass("selectBox").data("selectBox-control", f).data("selectBox-settings", d).hide()
    };
    b.prototype.getOptions = function(j) {
        var f;
        var c = a(this.selectElement);
        var e = this;
        var d = function(i, k) {
            i.children("OPTION, OPTGROUP").each(function() {
                if (a(this).is("OPTION")) {
                    if (a(this).length > 0) {
                        e.generateOptions(a(this), k)
                    } else {
                        k.append("<li>\u00A0</li>")
                    }
                } else {
                    var l = a('<li class="selectBox-optgroup" />');
                    l.text(a(this).attr("label"));
                    k.append(l);
                    k = d(a(this), k)
                }
            });
            return k
        };
        switch (j) {
            case "inline":
                f = a('<ul class="selectBox-options" />');
                f = d(c, f);
                f.find("A").bind("mouseover.selectBox", function(i) {
                    e.addHover(a(this).parent())
                }).bind("mouseout.selectBox", function(i) {
                    e.removeHover(a(this).parent())
                }).bind("mousedown.selectBox", function(i) {
                    if (1 !== i.which) {
                        return
                    }
                    i.preventDefault();
                    if (!c.selectBox("control").hasClass("selectBox-active")) {
                        c.selectBox("control").focus()
                    }
                }).bind("mouseup.selectBox", function(i) {
                    if (1 !== i.which) {
                        return
                    }
                    e.hideMenus();
                    e.selectOption(a(this).parent(), i)
                });
                this.disableSelection(f);
                return f;
            case "dropdown":
                f = a('<ul class="selectBox-dropdown-menu selectBox-options" />');
                f = d(c, f);
                f.data("selectBox-select", c).css("display", "none").appendTo("BODY").find("A").bind("mousedown.selectBox", function(i) {
                    if (i.which === 1) {
                        i.preventDefault();
                        if (i.screenX === f.data("selectBox-down-at-x") && i.screenY === f.data("selectBox-down-at-y")) {
                            f.removeData("selectBox-down-at-x").removeData("selectBox-down-at-y");
                            e.hideMenus()
                        }
                    }
                }).bind("mouseup.selectBox", function(i) {
                    if (1 !== i.which) {
                        return
                    }
                    if (i.screenX === f.data("selectBox-down-at-x") && i.screenY === f.data("selectBox-down-at-y")) {
                        return
                    } else {
                        f.removeData("selectBox-down-at-x").removeData("selectBox-down-at-y")
                    }
                    e.selectOption(a(this).parent());
                    e.hideMenus()
                }).bind("mouseover.selectBox", function(i) {
                    e.addHover(a(this).parent())
                }).bind("mouseout.selectBox", function(i) {
                    e.removeHover(a(this).parent())
                });
                var h = c.attr("class") || "";
                if ("" !== h) {
                    h = h.split(" ");
                    for (var g in h) {
                        f.addClass(h[g] + "-selectBox-dropdown-menu")
                    }
                }
                this.disableSelection(f);
                return f
        }
    };
    b.prototype.getLabelClass = function() {
        var c = a(this.selectElement).find("OPTION:selected");
        return ("selectBox-label " + (c.attr("class") || "")).replace(/\s+$/, "")
    };
    b.prototype.getLabelText = function() {
        var c = a(this.selectElement).find("OPTION:selected");
        return c.text() || "\u00A0"
    };
    b.prototype.setLabel = function() {
        var c = a(this.selectElement);
        var d = c.data("selectBox-control");
        if (!d) {
            return
        }
        d.find(".selectBox-label").attr("class", this.getLabelClass()).text(this.getLabelText())
    };
    b.prototype.destroy = function() {
        var c = a(this.selectElement);
        var e = c.data("selectBox-control");
        if (!e) {
            return
        }
        var d = e.data("selectBox-options");
        d.remove();
        e.remove();
        c.removeClass("selectBox").removeData("selectBox-control").data("selectBox-control", null).removeData("selectBox-settings").data("selectBox-settings", null).show()
    };
    b.prototype.refresh = function() {
        var c = a(this.selectElement),
            e = c.data("selectBox-control"),
            f = e.hasClass("selectBox-dropdown"),
            d = e.hasClass("selectBox-menuShowing");
        c.selectBox("options", c.html());
        if (f && d) {
            this.showMenu()
        }
    };
    b.prototype.showMenu = function() {
        var e = this,
            d = a(this.selectElement),
            j = d.data("selectBox-control"),
            h = d.data("selectBox-settings"),
            f = j.data("selectBox-options");
        if (j.hasClass("selectBox-disabled")) {
            return false
        }
        this.hideMenus();
        var g = parseInt(j.css("borderBottomWidth")) || 0;
        f.width(j.innerWidth()).css({
            top: j.offset().top + j.outerHeight() - g,
            left: j.offset().left
        });
        if (d.triggerHandler("beforeopen")) {
            return false
        }
        var i = function() {
            d.triggerHandler("open", {
                _selectBox: true
            })
        };
        switch (h.menuTransition) {
            case "fade":
                f.fadeIn(h.menuSpeed, i);
                break;
            case "slide":
                f.slideDown(h.menuSpeed, i);
                break;
            default:
                f.show(h.menuSpeed, i);
                break
        }
        if (!h.menuSpeed) {
            i()
        }
        var c = f.find(".selectBox-selected:first");
        this.keepOptionInView(c, true);
        this.addHover(c);
        j.addClass("selectBox-menuShowing");
        a(document).bind("mousedown.selectBox", function(k) {
            if (1 === k.which) {
                if (a(k.target).parents().andSelf().hasClass("selectBox-options")) {
                    return
                }
                e.hideMenus()
            }
        })
    };
    b.prototype.hideMenus = function() {
        if (a(".selectBox-dropdown-menu:visible").length === 0) {
            return
        }
        a(document).unbind("mousedown.selectBox");
        a(".selectBox-dropdown-menu").each(function() {
            var d = a(this),
                c = d.data("selectBox-select"),
                g = c.data("selectBox-control"),
                e = c.data("selectBox-settings");
            if (c.triggerHandler("beforeclose")) {
                return false
            }
            var f = function() {
                c.triggerHandler("close", {
                    _selectBox: true
                })
            };
            if (e) {
                switch (e.menuTransition) {
                    case "fade":
                        d.fadeOut(e.menuSpeed, f);
                        break;
                    case "slide":
                        d.slideUp(e.menuSpeed, f);
                        break;
                    default:
                        d.hide(e.menuSpeed, f);
                        break
                }
                if (!e.menuSpeed) {
                    f()
                }
                g.removeClass("selectBox-menuShowing")
            } else {
                a(this).hide();
                a(this).triggerHandler("close", {
                    _selectBox: true
                });
                a(this).removeClass("selectBox-menuShowing")
            }
        })
    };
    b.prototype.selectOption = function(d, j) {
        var c = a(this.selectElement);
        d = a(d);
        var k = c.data("selectBox-control"),
            h = c.data("selectBox-settings");
        if (k.hasClass("selectBox-disabled")) {
            return false
        }
        if (0 === d.length || d.hasClass("selectBox-disabled")) {
            return false
        }
        if (c.attr("multiple")) {
            if (j.shiftKey && k.data("selectBox-last-selected")) {
                d.toggleClass("selectBox-selected");
                var e;
                if (d.index() > k.data("selectBox-last-selected").index()) {
                    e = d.siblings().slice(k.data("selectBox-last-selected").index(), d.index())
                } else {
                    e = d.siblings().slice(d.index(), k.data("selectBox-last-selected").index())
                }
                e = e.not(".selectBox-optgroup, .selectBox-disabled");
                if (d.hasClass("selectBox-selected")) {
                    e.addClass("selectBox-selected")
                } else {
                    e.removeClass("selectBox-selected")
                }
            } else {
                if ((this.isMac && j.metaKey) || (!this.isMac && j.ctrlKey)) {
                    d.toggleClass("selectBox-selected")
                } else {
                    d.siblings().removeClass("selectBox-selected");
                    d.addClass("selectBox-selected")
                }
            }
        } else {
            d.siblings().removeClass("selectBox-selected");
            d.addClass("selectBox-selected")
        }
        if (k.hasClass("selectBox-dropdown")) {
            k.find(".selectBox-label").text(d.text())
        }
        var f = 0,
            g = [];
        if (c.attr("multiple")) {
            k.find(".selectBox-selected A").each(function() {
                g[f++] = a(this).attr("rel")
            })
        } else {
            g = d.find("A").attr("rel")
        }
        k.data("selectBox-last-selected", d);
        if (c.val() !== g) {
            c.val(g);
            this.setLabel();
            c.trigger("change")
        }
        return true
    };
    b.prototype.addHover = function(d) {
        d = a(d);
        var c = a(this.selectElement),
            f = c.data("selectBox-control"),
            e = f.data("selectBox-options");
        e.find(".selectBox-hover").removeClass("selectBox-hover");
        d.addClass("selectBox-hover")
    };
    b.prototype.getSelectElement = function() {
        return this.selectElement
    };
    b.prototype.removeHover = function(d) {
        d = a(d);
        var c = a(this.selectElement),
            f = c.data("selectBox-control"),
            e = f.data("selectBox-options");
        e.find(".selectBox-hover").removeClass("selectBox-hover")
    };
    b.prototype.keepOptionInView = function(e, d) {
        if (!e || e.length === 0) {
            return
        }
        var c = a(this.selectElement),
            j = c.data("selectBox-control"),
            g = j.data("selectBox-options"),
            h = j.hasClass("selectBox-dropdown") ? g : g.parent(),
            i = parseInt(e.offset().top - h.position().top),
            f = parseInt(i + e.outerHeight());
        if (d) {
            h.scrollTop(e.offset().top - h.offset().top + h.scrollTop() - (h.height() / 2))
        } else {
            if (i < 0) {
                h.scrollTop(e.offset().top - h.offset().top + h.scrollTop())
            }
            if (f > h.height()) {
                h.scrollTop((e.offset().top + e.outerHeight()) - h.offset().top + h.scrollTop() - h.height())
            }
        }
    };
    b.prototype.handleKeyDown = function(c) {
        var k = a(this.selectElement),
            g = k.data("selectBox-control"),
            l = g.data("selectBox-options"),
            e = k.data("selectBox-settings"),
            f = 0,
            h = 0;
        if (g.hasClass("selectBox-disabled")) {
            return
        }
        switch (c.keyCode) {
            case 8:
                c.preventDefault();
                this.typeSearch = "";
                break;
            case 9:
            case 27:
                this.hideMenus();
                this.removeHover();
                break;
            case 13:
                if (g.hasClass("selectBox-menuShowing")) {
                    this.selectOption(l.find("LI.selectBox-hover:first"), c);
                    if (g.hasClass("selectBox-dropdown")) {
                        this.hideMenus()
                    }
                } else {
                    this.showMenu()
                }
                break;
            case 38:
            case 37:
                c.preventDefault();
                if (g.hasClass("selectBox-menuShowing")) {
                    var d = l.find(".selectBox-hover").prev("LI");
                    f = l.find("LI:not(.selectBox-optgroup)").length;
                    h = 0;
                    while (d.length === 0 || d.hasClass("selectBox-disabled") || d.hasClass("selectBox-optgroup")) {
                        d = d.prev("LI");
                        if (d.length === 0) {
                            if (e.loopOptions) {
                                d = l.find("LI:last")
                            } else {
                                d = l.find("LI:first")
                            }
                        }
                        if (++h >= f) {
                            break
                        }
                    }
                    this.addHover(d);
                    this.selectOption(d, c);
                    this.keepOptionInView(d)
                } else {
                    this.showMenu()
                }
                break;
            case 40:
            case 39:
                c.preventDefault();
                if (g.hasClass("selectBox-menuShowing")) {
                    var j = l.find(".selectBox-hover").next("LI");
                    f = l.find("LI:not(.selectBox-optgroup)").length;
                    h = 0;
                    while (0 === j.length || j.hasClass("selectBox-disabled") || j.hasClass("selectBox-optgroup")) {
                        j = j.next("LI");
                        if (j.length === 0) {
                            if (e.loopOptions) {
                                j = l.find("LI:first")
                            } else {
                                j = l.find("LI:last")
                            }
                        }
                        if (++h >= f) {
                            break
                        }
                    }
                    this.addHover(j);
                    this.selectOption(j, c);
                    this.keepOptionInView(j)
                } else {
                    this.showMenu()
                }
                break
        }
    };
    b.prototype.handleKeyPress = function(e) {
        var c = a(this.selectElement),
            f = c.data("selectBox-control"),
            d = f.data("selectBox-options");
        if (f.hasClass("selectBox-disabled")) {
            return
        }
        switch (e.keyCode) {
            case 9:
            case 27:
            case 13:
            case 38:
            case 37:
            case 40:
            case 39:
                break;
            default:
                if (!f.hasClass("selectBox-menuShowing")) {
                    this.showMenu()
                }
                e.preventDefault();
                clearTimeout(this.typeTimer);
                this.typeSearch += String.fromCharCode(e.charCode || e.keyCode);
                d.find("A").each(function() {
                    if (a(this).text().substr(0, this.typeSearch.length).toLowerCase() === this.typeSearch.toLowerCase()) {
                        this.addHover(a(this).parent());
                        this.selectOption(a(this).parent(), e);
                        this.keepOptionInView(a(this).parent());
                        return false
                    }
                });
                this.typeTimer = setTimeout(function() {
                    this.typeSearch = ""
                }, 1000);
                break
        }
    };
    b.prototype.enable = function() {
        var c = a(this.selectElement);
        c.prop("disabled", false);
        var d = c.data("selectBox-control");
        if (!d) {
            return
        }
        d.removeClass("selectBox-disabled")
    };
    b.prototype.disable = function() {
        var c = a(this.selectElement);
        c.prop("disabled", true);
        var d = c.data("selectBox-control");
        if (!d) {
            return
        }
        d.addClass("selectBox-disabled")
    };
    b.prototype.setValue = function(f) {
        var c = a(this.selectElement);
        c.val(f);
        f = c.val();
        if (null === f) {
            f = c.children().first().val();
            c.val(f)
        }
        var g = c.data("selectBox-control");
        if (!g) {
            return
        }
        var e = c.data("selectBox-settings"),
            d = g.data("selectBox-options");
        this.setLabel();
        d.find(".selectBox-selected").removeClass("selectBox-selected");
        d.find("A").each(function() {
            if (typeof(f) === "object") {
                for (var h = 0; h < f.length; h++) {
                    if (a(this).attr("rel") == f[h]) {
                        a(this).parent().addClass("selectBox-selected")
                    }
                }
            } else {
                if (a(this).attr("rel") == f) {
                    a(this).parent().addClass("selectBox-selected")
                }
            }
        });
        if (e.change) {
            e.change.call(c)
        }
    };
    b.prototype.setOptions = function(m) {
        var l = a(this.selectElement),
            f = l.data("selectBox-control"),
            d = l.data("selectBox-settings"),
            k;
        switch (typeof(m)) {
            case "string":
                l.html(m);
                break;
            case "object":
                l.html("");
                for (var g in m) {
                    if (m[g] === null) {
                        continue
                    }
                    if (typeof(m[g]) === "object") {
                        var c = a('<optgroup label="' + g + '" />');
                        for (var e in m[g]) {
                            c.append('<option value="' + e + '">' + m[g][e] + "</option>")
                        }
                        l.append(c)
                    } else {
                        var h = a('<option value="' + g + '">' + m[g] + "</option>");
                        l.append(h)
                    }
                }
                break
        }
        if (!f) {
            return
        }
        f.data("selectBox-options").remove();
        k = f.hasClass("selectBox-dropdown") ? "dropdown" : "inline";
        m = this.getOptions(k);
        f.data("selectBox-options", m);
        switch (k) {
            case "inline":
                f.append(m);
                break;
            case "dropdown":
                this.setLabel();
                a("BODY").append(m);
                break
        }
    };
    b.prototype.disableSelection = function(c) {
        a(c).css("MozUserSelect", "none").bind("selectstart", function(d) {
            d.preventDefault()
        })
    };
    b.prototype.generateOptions = function(e, f) {
        var c = a("<li />"),
            d = a("<a />");
        c.addClass(e.attr("class"));
        c.data(e.data());
        d.attr("rel", e.val()).text(e.text());
        c.append(d);
        if (e.attr("disabled")) {
            c.addClass("selectBox-disabled")
        }
        if (e.attr("selected")) {
            c.addClass("selectBox-selected")
        }
        f.append(c)
    };
    a.extend(a.fn, {
        selectBox: function(e, c) {
            var d;
            switch (e) {
                case "control":
                    return a(this).data("selectBox-control");
                case "settings":
                    if (!c) {
                        return a(this).data("selectBox-settings")
                    }
                    a(this).each(function() {
                        a(this).data("selectBox-settings", a.extend(true, a(this).data("selectBox-settings"), c))
                    });
                    break;
                case "options":
                    if (undefined === c) {
                        return a(this).data("selectBox-control").data("selectBox-options")
                    }
                    a(this).each(function() {
                        if (d = a(this).data("selectBox")) {
                            d.setOptions(c)
                        }
                    });
                    break;
                case "value":
                    if (undefined === c) {
                        return a(this).val()
                    }
                    a(this).each(function() {
                        if (d = a(this).data("selectBox")) {
                            d.setValue(c)
                        }
                    });
                    break;
                case "refresh":
                    a(this).each(function() {
                        if (d = a(this).data("selectBox")) {
                            d.refresh()
                        }
                    });
                    break;
                case "enable":
                    a(this).each(function() {
                        if (d = a(this).data("selectBox")) {
                            d.enable(this)
                        }
                    });
                    break;
                case "disable":
                    a(this).each(function() {
                        if (d = a(this).data("selectBox")) {
                            d.disable()
                        }
                    });
                    break;
                case "destroy":
                    a(this).each(function() {
                        if (d = a(this).data("selectBox")) {
                            d.destroy();
                            a(this).data("selectBox", null)
                        }
                    });
                    break;
                case "instance":
                    return a(this).data("selectBox");
                default:
                    a(this).each(function(g, f) {
                        if (!a(f).data("selectBox")) {
                            a(f).data("selectBox", new b(f, e))
                        }
                    });
                    break
            }
            return a(this)
        }
    })
})(jQuery);;
/*yith plugin js*/
// jQuery(document).ready(function(b) {
//     function l() {
//         h.off("change");
//         h = b('.wishlist_table tbody input[type="checkbox"]');
//         "undefined" != typeof b.fn.selectBox && b("select.selectBox").selectBox();
//         k();
//         m()
//     }

//     function t() {
//         var a = b(".woocommerce-message");
//         0 == a.length ? b("#yith-wcwl-form").prepend(yith_wcwl_l10n.labels.added_to_cart_message) : a.fadeOut(300, function() {
//             b(this).replaceWith(yith_wcwl_l10n.labels.added_to_cart_message).fadeIn()
//         })
//     }

//     function u(a) {
//         var c = a.data("product-id"),
//             d = b(".add-to-wishlist-" + c),
//             c = {
//                 add_to_wishlist: c,
//                 product_type: a.data("product-type"),
//                 action: yith_wcwl_l10n.actions.add_to_wishlist_action
//             };
//         if (yith_wcwl_l10n.multi_wishlist && yith_wcwl_l10n.is_user_logged_in) {
//             var e = a.parents(".yith-wcwl-popup-footer").prev(".yith-wcwl-popup-content"),
//                 f = e.find(".wishlist-select"),
//                 g = e.find(".wishlist-name"),
//                 e = e.find(".wishlist-visibility");
//             c.wishlist_id = f.val();
//             c.wishlist_name = g.val();
//             c.wishlist_visibility = e.val()
//         }
//         q() ? b.ajax({
//             type: "POST",
//             url: yith_wcwl_l10n.ajax_url,
//             data: c,
//             dataType: "json",
//             beforeSend: function() {
//                 a.siblings(".ajax-loading").css("visibility", "visible")
//             },
//             complete: function() {
//                 a.siblings(".ajax-loading").css("visibility", "hidden")
//             },
//             success: function(a) {
//                 var c = b("#yith-wcwl-popup-message"),
//                     e = a.result,
//                     f = a.message;
//                 if (yith_wcwl_l10n.multi_wishlist && yith_wcwl_l10n.is_user_logged_in) {
//                     var g = b("select.wishlist-select");
//                     "undefined" != typeof b.prettyPhoto && "undefined" != typeof b.prettyPhoto.close && b.prettyPhoto.close();
//                     g.each(function(d) {
//                         d = b(this);
//                         var c = d.find("option"),
//                             c = c.slice(1, c.length - 1);
//                         c.remove();
//                         if ("undefined" != typeof a.user_wishlists)
//                             for (c in c = 0, a.user_wishlists) "1" != a.user_wishlists[c].is_default && b("<option>").val(a.user_wishlists[c].ID).html(a.user_wishlists[c].wishlist_name).insertBefore(d.find("option:last-child"))
//                     })
//                 }
//                 b("#yith-wcwl-message").html(f);
//                 c.css("margin-left", "-" + b(c).width() + "px").fadeIn();
//                 window.setTimeout(function() {
//                     c.fadeOut()
//                 }, 2E3);
//                 "true" == e ? ((!yith_wcwl_l10n.multi_wishlist || !yith_wcwl_l10n.is_user_logged_in || yith_wcwl_l10n.multi_wishlist && yith_wcwl_l10n.is_user_logged_in && yith_wcwl_l10n.hide_add_button) && d.find(".yith-wcwl-add-button").hide().removeClass("show").addClass("hide"), d.find(".yith-wcwl-wishlistexistsbrowse").hide().removeClass("show").addClass("hide").find("a").attr("href", a.wishlist_url), d.find(".yith-wcwl-wishlistaddedbrowse").show().removeClass("hide").addClass("show").find("a").attr("href", a.wishlist_url)) : "exists" == e ? ((!yith_wcwl_l10n.multi_wishlist || !yith_wcwl_l10n.is_user_logged_in || yith_wcwl_l10n.multi_wishlist && yith_wcwl_l10n.is_user_logged_in && yith_wcwl_l10n.hide_add_button) && d.find(".yith-wcwl-add-button").hide().removeClass("show").addClass("hide"), d.find(".yith-wcwl-wishlistexistsbrowse").show().removeClass("hide").addClass("show").find("a").attr("href", a.wishlist_url), d.find(".yith-wcwl-wishlistaddedbrowse").hide().removeClass("show").addClass("hide").find("a").attr("href", a.wishlist_url)) : (d.find(".yith-wcwl-add-button").show().removeClass("hide").addClass("show"), d.find(".yith-wcwl-wishlistexistsbrowse").hide().removeClass("show").addClass("hide"), d.find(".yith-wcwl-wishlistaddedbrowse").hide().removeClass("show").addClass("hide"));
//                 b("body").trigger("added_to_wishlist")
//             }
//         }) : alert(yith_wcwl_l10n.labels.cookie_disabled)
//     }

//     function v(a) {
//         var c = a.parents(".cart.wishlist_table"),
//             d = c.data("pagination"),
//             e = c.data("per-page"),
//             f = c.data("page");
//         a = a.parents("[data-row-id]");
//         c.find(".pagination-row");
//         a = a.data("row-id");
//         var g = c.data("id"),
//             n = c.data("token"),
//             d = {
//                 action: yith_wcwl_l10n.actions.remove_from_wishlist_action,
//                 remove_from_wishlist: a,
//                 pagination: d,
//                 per_page: e,
//                 current_page: f,
//                 wishlist_id: g,
//                 wishlist_token: n
//             };
//         b("#yith-wcwl-message").html("&nbsp;");
//         "undefined" != typeof b.fn.block && c.fadeTo("400", "0.6").block({
//             message: null,
//             overlayCSS: {
//                 background: "transparent url(" + yith_wcwl_l10n.ajax_loader_url + ") no-repeat center",
//                 backgroundSize: "16px 16px",
//                 opacity: .6
//             }
//         });
//         b("#yith-wcwl-form").load(yith_wcwl_l10n.ajax_url + " #yith-wcwl-form", d, function() {
//             "undefined" != typeof b.fn.unblock && c.stop(!0).css("opacity", "1").unblock();
//             l();
//             b("body").trigger("removed_from_wishlist")
//         })
//     }

//     function w(a, c) {
//         var d = a.data("product-id"),
//             e = b(document).find(".cart.wishlist_table"),
//             f = e.data("pagination"),
//             g = e.data("per-page"),
//             n = e.data("id"),
//             h = e.data("token"),
//             d = {
//                 action: yith_wcwl_l10n.actions.reload_wishlist_and_adding_elem_action,
//                 pagination: f,
//                 per_page: g,
//                 wishlist_id: n,
//                 wishlist_token: h,
//                 add_to_wishlist: d,
//                 product_type: a.data("product-type")
//             };
//         q() ? b.ajax({
//             type: "POST",
//             url: yith_wcwl_l10n.ajax_url,
//             data: d,
//             dataType: "html",
//             beforeSend: function() {
//                 "undefined" != typeof b.fn.block && e.fadeTo("400", "0.6").block({
//                     message: null,
//                     overlayCSS: {
//                         background: "transparent url(" + yith_wcwl_l10n.ajax_loader_url + ") no-repeat center",
//                         backgroundSize: "16px 16px",
//                         opacity: .6
//                     }
//                 })
//             },
//             success: function(a) {
//                 a = b(a).find("#yith-wcwl-form");
//                 c.replaceWith(a);
//                 l()
//             }
//         }) : alert(yith_wcwl_l10n.labels.cookie_disabled)
//     }

//     function x(a) {
//         var c = a.parents(".cart.wishlist_table"),
//             d = c.data("token"),
//             e = c.data("id"),
//             f = a.parents("[data-row-id]").data("row-id");
//         a = a.val();
//         var g = c.data("pagination"),
//             h = c.data("per-page"),
//             k = c.data("page"),
//             d = {
//                 action: yith_wcwl_l10n.actions.move_to_another_wishlist_action,
//                 wishlist_token: d,
//                 wishlist_id: e,
//                 destination_wishlist_token: a,
//                 item_id: f,
//                 pagination: g,
//                 per_page: h,
//                 current_page: k
//             };
//         "" != a && ("undefined" != typeof b.fn.block && c.fadeTo("400", "0.6").block({
//             message: null,
//             overlayCSS: {
//                 background: "transparent url(" + yith_wcwl_l10n.ajax_loader_url + ") no-repeat center",
//                 backgroundSize: "16px 16px",
//                 opacity: .6
//             }
//         }), b("#yith-wcwl-form").load(yith_wcwl_l10n.ajax_url + " #yith-wcwl-form", d, function() {
//             "undefined" != typeof b.fn.unblock && c.stop(!0).css("opacity", "1").unblock();
//             l();
//             b("body").trigger("moved_to_another_wishlist")
//         }))
//     }

//     function r(a) {
//         var c = b(this);
//         a.preventDefault();
//         c.parents(".wishlist-title").next().show();
//         c.parents(".wishlist-title").hide()
//     }

//     function y(a) {
//         var c = b(this);
//         a.preventDefault();
//         c.parents(".hidden-title-form").hide();
//         c.parents(".hidden-title-form").prev().show()
//     }

//     function q() {
//         if (navigator.cookieEnabled) return !0;
//         document.cookie = "cookietest=1";
//         var a = -1 != document.cookie.indexOf("cookietest=");
//         document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT";
//         return a
//     }

//     function z() {
//         if (0 != b(".yith-wcwl-add-to-wishlist").length && 0 == b("#yith-wcwl-popup-message").length) {
//             var a = b("<div>").attr("id", "yith-wcwl-message"),
//                 a = b("<div>").attr("id", "yith-wcwl-popup-message").html(a).hide();
//             b("body").prepend(a)
//         }
//     }

//     function k() {
//         h.on("change", function() {
//             var a = "",
//                 c = b(this).parents(".cart.wishlist_table"),
//                 d = c.data("id"),
//                 c = c.data("token"),
//                 e = document.URL;
//             h.filter(":checked").each(function() {
//                 var c = b(this);
//                 a += 0 != a.length ? "," : "";
//                 a += c.parents("[data-row-id]").data("row-id")
//             });
//             e = p(e, "wishlist_products_to_add_to_cart", a);
//             e = p(e, "wishlist_token", c);
//             e = p(e, "wishlist_id", d);
//             b("#custom_add_to_cart").attr("href", e)
//         })
//     }

//     function m() {
//         "undefined" != typeof b.prettyPhoto && b('a[data-rel^="prettyPhoto[add_to_wishlist_"]').add('a[data-rel="prettyPhoto[ask_an_estimate]"]').unbind("click").prettyPhoto({
//             hook: "data-rel",
//             social_tools: !1,
//             theme: "pp_woocommerce",
//             horizontal_padding: 20,
//             opacity: .8,
//             deeplinking: !1
//         })
//     }

//     function p(a, b, d) {
//         d = b + "=" + d;
//         a = a.replace(new RegExp("(&|\\?)" + b + "=[^&]*"), "$1" + d); - 1 < a.indexOf(b + "=") || (a = -1 < a.indexOf("?") ? a + ("&" + d) : a + ("?" + d));
//         return a
//     }
//     var A = "undefined" !== typeof wc_add_to_cart_params && null !== wc_add_to_cart_params ? wc_add_to_cart_params.cart_redirect_after_add : "",
//         h = b('.wishlist_table tbody input[type="checkbox"]:not(:disabled)');
//     b(document).on("yith_wcwl_init", function() {
//         var a = b(this),
//             c = b('.wishlist_table tbody input[type="checkbox"]:not(:disabled)');
//         a.on("click", ".add_to_wishlist", function(a) {
//             var c = b(this);
//             a.preventDefault();
//             u(c);
//             return !1
//         });
//         a.on("click", ".remove_from_wishlist", function(a) {
//             var c = b(this);
//             a.preventDefault();
//             v(c);
//             return !1
//         });
//         a.on("adding_to_cart", "body", function(a, b, c) {
//             "undefined" != typeof b && "undefined" != typeof c && 0 != b.closest(".wishlist_table").length && (c.remove_from_wishlist_after_add_to_cart = b.closest("[data-row-id]").data("row-id"), c.wishlist_id = b.closest(".wishlist_table").data("id"), wc_add_to_cart_params.cart_redirect_after_add = yith_wcwl_l10n.redirect_to_cart)
//         });
//         a.on("added_to_cart", "body", function(a) {
//             wc_add_to_cart_params.cart_redirect_after_add = A;
//             a = b(".wishlist_table");
//             a.find(".added").removeClass("added");
//             a.find(".added_to_cart").remove()
//         });
//         a.on("added_to_cart", "body", t);
//         a.on("cart_page_refreshed", "body", l);
//         a.on("click", ".show-title-form", r);
//         a.on("click", ".wishlist-title-with-form h2", r);
//         a.on("click", ".hide-title-form", y);
//         a.on("change", ".change-wishlist", function(a) {
//             a = b(this);
//             x(a);
//             return !1
//         });
//         a.on("change", ".yith-wcwl-popup-content .wishlist-select", function(a) {
//             a = b(this);
//             "new" == a.val() ? a.parents(".yith-wcwl-first-row").next(".yith-wcwl-second-row").css("display", "table-row") : a.parents(".yith-wcwl-first-row").next(".yith-wcwl-second-row").hide()
//         });
//         a.on("change", "#bulk_add_to_cart", function() {
//             b(this).is(":checked") ? c.attr("checked", "checked").change() : c.removeAttr("checked").change()
//         });
//         a.on("click", "#custom_add_to_cart", function(a) {
//             var d = b(this),
//                 f = d.parents(".cart.wishlist_table");
//             yith_wcwl_l10n.ajax_add_to_cart_enabled && (a.preventDefault(), "undefined" != typeof b.fn.block && f.fadeTo("400", "0.6").block({
//                 message: null,
//                 overlayCSS: {
//                     background: "transparent url(" + yith_wcwl_l10n.ajax_loader_url + ") no-repeat center",
//                     backgroundSize: "16px 16px",
//                     opacity: .6
//                 }
//             }), b("#yith-wcwl-form").load(yith_wcwl_l10n.ajax_url + d.attr("href") + " #yith-wcwl-form", {
//                 action: yith_wcwl_l10n.actions.bulk_add_to_cart_action
//             }, function() {
//                 "undefined" != typeof b.fn.unblock && f.stop(!0).css("opacity", "1").unblock();
//                 c.off("change");
//                 c = b('.wishlist_table tbody input[type="checkbox"]');
//                 "undefined" != typeof b.fn.selectBox && b("select.selectBox").selectBox();
//                 k();
//                 m()
//             }))
//         });
//         a.on("click", ".yith-wfbt-add-wishlist", function(a) {
//             a.preventDefault();
//             a = b(this);
//             var c = b("#yith-wcwl-form");
//             b("html, body").animate({
//                 scrollTop: c.offset().top
//             }, 500);
//             w(a, c)
//         });
//         z();
//         k();
//         m()
//     }).trigger("yith_wcwl_init");
//     "undefined" != typeof b.fn.selectBox && b("select.selectBox").selectBox()
// });;
/*!
 * Bootstrap v3.3.2 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function(a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b)
            if (void 0 !== a.style[c]) return {
                end: b[c]
            };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function() {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]',
        d = function(b) {
            a(b).on("click", c, this.close)
        };
    d.VERSION = "3.3.2", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this),
            f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.3.2", c.DEFAULTS = {
        loadingText: "loading..."
    }, c.prototype.setState = function(b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, c.prototype.toggle = function() {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        a && this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), c.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.2", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b),
            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function(a) {
        var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, c.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, c.prototype.slide = function(b, d) {
        var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this;
        if (f.hasClass("active")) return this.sliding = !1;
        var j = f[0],
            k = a.Event("slide.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d, this
    };
    var e = function(c) {
        var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }

    function c(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && "show" == b && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }
    var d = function(b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a(this.options.trigger).filter('[href="#' + b.id + '"], [data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.2", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
        toggle: !0,
        trigger: '[data-toggle="collapse"]'
    }, d.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition) return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, d.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : a.extend({}, e.data(), {
                trigger: this
            });
        c.call(f, h)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        b && 3 === b.which || (a(e).remove(), a(f).each(function() {
            var d = a(this),
                e = c(d),
                f = {
                    relatedTarget: this
                };
            e.hasClass("open") && (e.trigger(b = a.Event("hide.bs.dropdown", f)), b.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f)))
        }))
    }

    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function d(b) {
        return this.each(function() {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function(b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    g.VERSION = "3.3.2", g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e),
                g = f.hasClass("open");
            if (b(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
            }
            return !1
        }
    }, g.prototype.keydown = function(b) {
        if (/(38|40|27|32)/.test(b.which) && !/input|textarea/i.test(b.target.tagName)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = c(d),
                    g = e.hasClass("open");
                if (!g && 27 != b.which || g && 27 == b.which) return 27 == b.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.divider):visible a",
                    i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
                if (i.length) {
                    var j = i.index(b.target);
                    38 == b.which && j > 0 && j--, 40 == b.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', g.prototype.keydown)
}(jQuery), + function(a) {
    "use strict";

    function b(b, d) {
        return this.each(function() {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.2", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function(b) {
        var d = this,
            e = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function() {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.options.backdrop && d.adjustBackdrop(), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in").attr("aria-hidden", !1), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function(b) {
        var d = this,
            e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a('<div class="modal-backdrop ' + e + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", a.proxy(function(a) {
                    a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function() {
        this.options.backdrop && this.adjustBackdrop(), this.adjustDialog()
    }, c.prototype.adjustBackdrop = function() {
        this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight)
    }, c.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }, c.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, c.prototype.checkScrollbar = function() {
        this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    }, c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(e) && e
            }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;
            (e || "destroy" != b) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.2", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, c.prototype.init = function(b, c, d) {
        this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport);
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function() {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c && c.$tip && c.$tip.is(":visible") ? void(c.hoverState = "in") : (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide()
    }, c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d) return;
            var e = this,
                f = this.tip(),
                g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element);
            var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight;
            if (j) {
                var n = h,
                    o = this.options.container ? a(this.options.container) : this.$element.parent(),
                    p = this.getPosition(o);
                h = "bottom" == h && k.bottom + m > p.bottom ? "top" : "top" == h && k.top - m < p.top ? "bottom" : "right" == h && k.right + l > p.width ? "left" : "left" == h && k.left - l < p.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var q = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(q, h);
            var r = function() {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", r).emulateTransitionEnd(c.TRANSITION_DURATION) : r()
        }
    }, c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top = b.top + g, b.left = b.left + h, a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth,
            j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function(b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }
        var e = this,
            f = this.tip(),
            g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
    }, c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function() {
        return this.getTitle()
    }, c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top
        }));
        var f = d ? {
                top: 0,
                left: 0
            } : b.offset(),
            g = {
                scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
            },
            h = d ? {
                width: a(window).width(),
                height: a(window).height()
            } : null;
        return a.extend({}, e, g, h, f)
    }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function() {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function(a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a
    }, c.prototype.tip = function() {
        return this.$tip = this.$tip || a(this.options.template)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function() {
        this.enabled = !0
    }, c.prototype.disable = function() {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout), this.hide(function() {
            a.$element.off("." + a.type).removeData("bs." + a.type)
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;
            (e || "destroy" != b) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.2", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function() {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, c.prototype.tip = function() {
        return this.$tip || (this.$tip = a(this.options.template)), this.$tip
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
        return a.fn.popover = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(c, d) {
        var e = a.proxy(this.process, this);
        this.$body = a("body"), this.$scrollElement = a(a(c).is("body") ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e), this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.3.2", b.DEFAULTS = {
        offset: 10
    }, b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function() {
        var b = "offset",
            c = 0;
        a.isWindow(this.$scrollElement[0]) || (b = "position", c = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var d = this;
        this.$body.find(this.selector).map(function() {
            var d = a(this),
                e = d.data("target") || d.attr("href"),
                f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [
                [f[b]().top + c, e]
            ] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            d.offsets.push(this[0]), d.targets.push(this[1])
        })
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return this.activeTarget = null, this.clear();
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function() {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.2", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", {
                    relatedTarget: b[0]
                }),
                g = a.Event("show.bs.tab", {
                    relatedTarget: e[0]
                });
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, c.prototype.activate = function(b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }
        var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
        return a.fn.tab = d, this
    };
    var e = function(c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.2", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function(a, b, c, d) {
        var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height();
        if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
        if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
        var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b;
        return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
    }, c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
            b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = a("body").height();
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({
                top: g - b - f
            })
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
        return a.fn.affix = d, this
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery);;;
/*end bootstrap*/

window.Modernizr = function(a, b, c) {
        function z(a) {
            j.cssText = a
        }

        function A(a, b) {
            return z(m.join(a + ";") + (b || ""))
        }

        function B(a, b) {
            return typeof a === b
        }

        function C(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function D(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!C(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
            }
            return !1
        }

        function E(a, b, d) {
            for (var e in a) {
                var f = b[a[e]];
                if (f !== c) return d === !1 ? a[e] : B(f, "function") ? f.bind(d || b) : f
            }
            return !1
        }

        function F(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + o.join(d + " ") + d).split(" ");
            return B(b, "string") || B(b, "undefined") ? D(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), E(e, b, c))
        }
        var d = "2.8.3",
            e = {},
            f = !0,
            g = b.documentElement,
            h = "modernizr",
            i = b.createElement(h),
            j = i.style,
            k, l = {}.toString,
            m = " -webkit- -moz- -o- -ms- ".split(" "),
            n = "Webkit Moz O ms",
            o = n.split(" "),
            p = n.toLowerCase().split(" "),
            q = {},
            r = {},
            s = {},
            t = [],
            u = t.slice,
            v, w = function(a, c, d, e) {
                var f, i, j, k, l = b.createElement("div"),
                    m = b.body,
                    n = m || b.createElement("body");
                if (parseInt(d, 10))
                    while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
                return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
            },
            x = {}.hasOwnProperty,
            y;
        !B(x, "undefined") && !B(x.call, "undefined") ? y = function(a, b) {
            return x.call(a, b)
        } : y = function(a, b) {
            return b in a && B(a.constructor.prototype[b], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function(b) {
            var c = this;
            if (typeof c != "function") throw new TypeError;
            var d = u.call(arguments, 1),
                e = function() {
                    if (this instanceof e) {
                        var a = function() {};
                        a.prototype = c.prototype;
                        var f = new a,
                            g = c.apply(f, d.concat(u.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return c.apply(b, d.concat(u.call(arguments)))
                };
            return e
        }), q.rgba = function() {
            return z("background-color:rgba(150,255,150,.5)"), C(j.backgroundColor, "rgba")
        }, q.backgroundsize = function() {
            return F("backgroundSize")
        }, q.borderimage = function() {
            return F("borderImage")
        }, q.borderradius = function() {
            return F("borderRadius")
        }, q.boxshadow = function() {
            return F("boxShadow")
        }, q.textshadow = function() {
            return b.createElement("div").style.textShadow === ""
        }, q.opacity = function() {
            return A("opacity:.55"), /^0.55$/.test(j.opacity)
        }, q.cssanimations = function() {
            return F("animationName")
        }, q.csstransitions = function() {
            return F("transition")
        }, q.fontface = function() {
            var a;
            return w('@font-face {font-family:"font";src:url("https://")}', function(c, d) {
                var e = b.getElementById("smodernizr"),
                    f = e.sheet || e.styleSheet,
                    g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
                a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0
            }), a
        };
        for (var G in q) y(q, G) && (v = G.toLowerCase(), e[v] = q[G](), t.push((e[v] ? "" : "no-") + v));
        return e.addTest = function(a, b) {
                if (typeof a == "object")
                    for (var d in a) y(a, d) && e.addTest(d, a[d]);
                else {
                    a = a.toLowerCase();
                    if (e[a] !== c) return e;
                    b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
                }
                return e
            }, z(""), i = k = null,
            function(a, b) {
                function l(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function m() {
                    var a = s.elements;
                    return typeof a == "string" ? a.split(" ") : a
                }

                function n(a) {
                    var b = j[a[h]];
                    return b || (b = {}, i++, a[h] = i, j[i] = b), b
                }

                function o(a, c, d) {
                    c || (c = b);
                    if (k) return c.createElement(a);
                    d || (d = n(c));
                    var g;
                    return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g
                }

                function p(a, c) {
                    a || (a = b);
                    if (k) return a.createDocumentFragment();
                    c = c || n(a);
                    var d = c.frag.cloneNode(),
                        e = 0,
                        f = m(),
                        g = f.length;
                    for (; e < g; e++) d.createElement(f[e]);
                    return d
                }

                function q(a, b) {
                    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                        return s.shivMethods ? o(c, a, b) : b.createElem(c)
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function(a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(s, b.frag)
                }

                function r(a) {
                    a || (a = b);
                    var c = n(a);
                    return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a
                }
                var c = "3.7.0",
                    d = a.html5 || {},
                    e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    g, h = "_html5shiv",
                    i = 0,
                    j = {},
                    k;
                (function() {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", g = "hidden" in a, k = a.childNodes.length == 1 || function() {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                        }()
                    } catch (c) {
                        g = !0, k = !0
                    }
                })();
                var s = {
                    elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: c,
                    shivCSS: d.shivCSS !== !1,
                    supportsUnknownElements: k,
                    shivMethods: d.shivMethods !== !1,
                    type: "default",
                    shivDocument: r,
                    createElement: o,
                    createDocumentFragment: p
                };
                a.html5 = s, r(b)
            }(this, b), e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.testProp = function(a) {
                return D([a])
            }, e.testAllProps = F, e.testStyles = w, e.prefixed = function(a, b, c) {
                return b ? F(a, b, c) : F(a, "pfx")
            }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + t.join(" ") : ""), e
    }(this, this.document),
    function(a, b, c) {
        function d(a) {
            return "[object Function]" == o.call(a)
        }

        function e(a) {
            return "string" == typeof a
        }

        function f() {}

        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }

        function h() {
            var a = p.shift();
            q = 1, a ? a.t ? m(function() {
                ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : q = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                    "img" != a && m(function() {
                        t.removeChild(l)
                    }, 50);
                    for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
                }
            }
            var j = j || B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = {
                    t: d,
                    s: c,
                    e: f,
                    a: i,
                    x: j
                };
            1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                k.call(this, r)
            }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
        }

        function j(a, b, c, d, f) {
            return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
        }

        function k() {
            var a = B;
            return a.loader = {
                load: j,
                i: 0
            }, a
        }
        var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera),
            l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img",
            v = l ? "script" : u,
            w = Array.isArray || function(a) {
                return "[object Array]" == o.call(a)
            },
            x = [],
            y = {},
            z = {
                timeout: function(a, b) {
                    return b.length && (a.timeout = b[0]), a
                }
            },
            A, B;
        B = function(a) {
            function b(a) {
                var a = a.split("!"),
                    b = x.length,
                    c = a.pop(),
                    d = a.length,
                    c = {
                        url: c,
                        origUrl: c,
                        prefixes: a
                    },
                    e, f, g;
                for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++) c = x[f](c);
                return c
            }

            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
                })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        }), g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in m = function() {
                                    var b = 0,
                                        c;
                                    for (c in a) a.hasOwnProperty(c) && b++;
                                    return b
                                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a), l()
                            } : j[n] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), l()
                                }
                            }(k[n])), g(a[n], j, b, n, h))
                    } else !c && l()
                }
                var h = !!a.test,
                    i = a.load || a.both,
                    j = a.callback || f,
                    k = j,
                    l = a.complete || f,
                    m, n;
                c(h ? a.yep : a.nope, !!i), i && c(i)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (w(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l)
        }, B.addPrefix = function(a, b) {
            z[a] = b
        }, B.addFilter = function(a) {
            x.push(a)
        }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
            b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
        }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
            var k = b.createElement("script"),
                l, o, e = e || B.errorTimeout;
            k.src = a;
            for (o in d) k.setAttribute(o, d[o]);
            c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
                !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
            }, m(function() {
                l || (l = 1, c(1))
            }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
        }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
            var e = b.createElement("link"),
                j, c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (n.parentNode.insertBefore(e, n), m(c, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };;

/*Sticky Plugin v?? for jQuery*/
(function($) {
    var defaults = {
            topSpacing: 0,
            topSticky: 0,
            bottomSpacing: 0,
            className: 'is-sticky',
            wrapperClassName: 'sticky-wrapper',
            center: false,
            getWidthFrom: '',
            responsiveWidth: false
        },
        $window = $(window),
        $document = $(document),
        sticked = [],
        windowHeight = $window.height(),
        scroller = function() {
            var scrollTop = $window.scrollTop(),
                documentHeight = $document.height(),
                dwh = documentHeight - windowHeight,
                extra = (scrollTop > dwh) ? dwh - scrollTop : 0;
            var stickyInClearTimeOut = null,
                stickyOutClearTimeOut = null;
            for (var i = 0; i < sticked.length; i++) {
                var s = sticked[i],
                    elementTop = s.stickyWrapper.offset().top,
                    etse = elementTop - s.topSpacing - extra;
                if (scrollTop <= etse) {
                    if ((s.currentTop !== null) && s.stickyElement.hasClass('sticky-on')) {
                        s.stickyElement.removeClass('sticky-on');
                        s.stickyElement.removeClass('sticky-in');
                        s.stickyElement.addClass('sticky-out');
                        clearTimeout(stickyOutClearTimeOut);
                        stickyOutClearTimeOut = setTimeout(function() {
                            s.stickyElement.removeClass('sticky-out');
                            s.stickyElement.css('position', '').css('top', '');
                            s.stickyElement.trigger('sticky-end', [s]).parent().removeClass(s.className);
                            s.currentTop = null;
                            if ((typeof(s.change) != "undefined") && (s.change != null)) {
                                s.change();
                            }
                        }, 300);
                    }
                } else {
                    var newTop = documentHeight - s.stickyElement.outerHeight() -
                        s.topSpacing - s.bottomSpacing - scrollTop - extra;
                    if (newTop < 0) {
                        newTop = newTop + s.topSticky;
                    } else {
                        newTop = s.topSticky;
                    }
                    if (s.currentTop != newTop) {
                        clearTimeout(stickyInClearTimeOut);
                        clearTimeout(stickyOutClearTimeOut);
                        s.stickyElement.addClass('sticky-on');
                        s.stickyElement.addClass('sticky-in');
                        s.stickyElement.removeClass('sticky-out');
                        stickyInClearTimeOut = setTimeout(function() {
                            s.stickyElement.removeClass('sticky-in');
                        }, 500);
                        s.stickyElement.css('position', 'fixed').css('top', newTop);
                        if (typeof s.getWidthFrom !== 'undefined') {
                            s.stickyElement.css('width', $(s.getWidthFrom).width());
                        }
                        s.stickyElement.trigger('sticky-start', [s]).parent().addClass(s.className);
                        s.currentTop = newTop;
                        if ((typeof(s.change) != "undefined") && (s.change != null)) {
                            s.change();
                        }
                    }
                }
            }
        },
        resizer = function() {
            windowHeight = $window.height();
            for (var i = 0; i < sticked.length; i++) {
                var s = sticked[i];
                if (typeof s.getWidthFrom !== 'undefined' && s.responsiveWidth === true) {
                    s.stickyElement.css('width', $(s.getWidthFrom).width());
                }
            }
        },
        methods = {
            init: function(options) {
                var o = $.extend({}, defaults, options);
                return this.each(function() {
                    var stickyElement = $(this);
                    var stickyId = stickyElement.attr('id');
                    var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName
                    var wrapper = $('<div></div>').attr('id', stickyId + '-sticky-wrapper').addClass(o.wrapperClassName);
                    stickyElement.wrapAll(wrapper);
                    if (o.center) {
                        stickyElement.parent().css({
                            width: stickyElement.outerWidth(),
                            marginLeft: "auto",
                            marginRight: "auto"
                        });
                    }
                    if (stickyElement.css("float") == "right") {
                        stickyElement.css({
                            "float": "none"
                        }).parent().css({
                            "float": "right"
                        });
                    }
                    var stickyWrapper = stickyElement.parent();
                    var stickyHeight = stickyElement.outerHeight(true);
                    if (stickyHeight > 0) {
                        stickyWrapper.css('height', stickyElement.outerHeight(true));
                    }
                    sticked.push({
                        topSpacing: o.topSpacing,
                        topSticky: o.topSticky,
                        bottomSpacing: o.bottomSpacing,
                        stickyElement: stickyElement,
                        currentTop: null,
                        stickyWrapper: stickyWrapper,
                        className: o.className,
                        getWidthFrom: o.getWidthFrom,
                        responsiveWidth: o.responsiveWidth,
                        change: o.change
                    });
                });
            },
            update: scroller,
            unstick: function(options) {
                return this.each(function() {
                    var unstickyElement = $(this);
                    var removeIdx = -1;
                    for (var i = 0; i < sticked.length; i++) {
                        if (sticked[i].stickyElement.get(0) == unstickyElement.get(0)) {
                            removeIdx = i;
                        }
                    }
                    if (removeIdx != -1) {
                        sticked.splice(removeIdx, 1);
                        unstickyElement.unwrap();
                        unstickyElement.removeAttr('style');
                    }
                });
            }
        };
    if (window.addEventListener) {
        window.addEventListener('scroll', scroller, false);
        window.addEventListener('resize', resizer, false);
    } else if (window.attachEvent) {
        window.attachEvent('onscroll', scroller);
        window.attachEvent('onresize', resizer);
    }
    $.fn.sticky = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.sticky');
        }
    };
    $.fn.unstick = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.unstick.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.sticky');
        }
    };
    $(function() {
        setTimeout(scroller, 0);
    });
})(jQuery);;
/*END Sticky Plugin v?? for jQuery*/


if (typeof Object.create !== "function") {
    Object.create = function(b) {
        function a() {}
        a.prototype = b;
        return new a()
    }
}(function(c, b, a) {
    var d = {
        init: function(e, f) {
            var g = this;
            g.$elem = c(f);
            g.options = c.extend({}, c.fn.owlCarousel.options, g.$elem.data(), e);
            g.userOptions = e;
            g.loadContent()
        },
        loadContent: function() {
            var g = this,
                f;

            function e(k) {
                var h, j = "";
                if (typeof g.options.jsonSuccess === "function") {
                    g.options.jsonSuccess.apply(this, [k])
                } else {
                    for (h in k.owl) {
                        if (k.owl.hasOwnProperty(h)) {
                            j += k.owl[h].item
                        }
                    }
                    g.$elem.html(j)
                }
                g.logIn()
            }
            if (typeof g.options.beforeInit === "function") {
                g.options.beforeInit.apply(this, [g.$elem])
            }
            if (typeof g.options.jsonPath === "string") {
                f = g.options.jsonPath;
                c.getJSON(f, e)
            } else {
                g.logIn()
            }
        },
        logIn: function() {
            var e = this;
            e.$elem.data("owl-originalStyles", e.$elem.attr("style"));
            e.$elem.data("owl-originalClasses", e.$elem.attr("class"));
            e.$elem.css({
                opacity: 0
            });
            e.orignalItems = e.options.items;
            e.checkBrowser();
            e.wrapperWidth = 0;
            e.checkVisible = null;
            e.setVars()
        },
        setVars: function() {
            var e = this;
            if (e.$elem.children().length === 0) {
                return false
            }
            e.baseClass();
            e.eventTypes();
            e.$userItems = e.$elem.children();
            e.itemsAmount = e.$userItems.length;
            e.wrapItems();
            e.$owlItems = e.$elem.find(".owl-item");
            e.$owlWrapper = e.$elem.find(".owl-wrapper");
            e.playDirection = "next";
            e.prevItem = 0;
            e.prevArr = [0];
            e.currentItem = 0;
            e.customEvents();
            e.onStartup()
        },
        onStartup: function() {
            var e = this;
            e.updateItems();
            e.calculateAll();
            e.buildControls();
            e.updateControls();
            e.response();
            e.moveEvents();
            e.stopOnHover();
            e.owlStatus();
            if (e.options.transitionStyle !== false) {
                e.transitionTypes(e.options.transitionStyle)
            }
            if (e.options.autoPlay === true) {
                e.options.autoPlay = 5000
            }
            e.play();
            e.$elem.find(".owl-wrapper").css("display", "block");
            if (!e.$elem.is(":visible")) {
                e.watchVisibility()
            } else {
                e.$elem.css("opacity", 1)
            }
            e.onstartup = false;
            e.eachMoveUpdate();
            if (typeof e.options.afterInit === "function") {
                e.options.afterInit.apply(this, [e.$elem])
            }
        },
        eachMoveUpdate: function() {
            var e = this;
            if (e.options.lazyLoad === true) {
                e.lazyLoad()
            }
            if (e.options.autoHeight === true) {
                e.autoHeight()
            }
            e.onVisibleItems();
            if (typeof e.options.afterAction === "function") {
                e.options.afterAction.apply(this, [e.$elem])
            }
        },
        updateVars: function() {
            var e = this;
            if (typeof e.options.beforeUpdate === "function") {
                e.options.beforeUpdate.apply(this, [e.$elem])
            }
            e.watchVisibility();
            e.updateItems();
            e.calculateAll();
            e.updatePosition();
            e.updateControls();
            e.eachMoveUpdate();
            if (typeof e.options.afterUpdate === "function") {
                e.options.afterUpdate.apply(this, [e.$elem])
            }
        },
        reload: function() {
            var e = this;
            b.setTimeout(function() {
                e.updateVars()
            }, 0)
        },
        watchVisibility: function() {
            var e = this;
            if (e.$elem.is(":visible") === false) {
                e.$elem.css({
                    opacity: 0
                });
                b.clearInterval(e.autoPlayInterval);
                b.clearInterval(e.checkVisible)
            } else {
                return false
            }
            e.checkVisible = b.setInterval(function() {
                if (e.$elem.is(":visible")) {
                    e.reload();
                    e.$elem.animate({
                        opacity: 1
                    }, 200);
                    b.clearInterval(e.checkVisible)
                }
            }, 500)
        },
        wrapItems: function() {
            var e = this;
            e.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');
            e.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
            e.wrapperOuter = e.$elem.find(".owl-wrapper-outer");
            e.$elem.css("display", "block")
        },
        baseClass: function() {
            var g = this,
                e = g.$elem.hasClass(g.options.baseClass),
                f = g.$elem.hasClass(g.options.theme);
            if (!e) {
                g.$elem.addClass(g.options.baseClass)
            }
            if (!f) {
                g.$elem.addClass(g.options.theme)
            }
        },
        updateItems: function() {
            var g = this,
                f, e;
            if (g.options.responsive === false) {
                return false
            }
            if (g.options.singleItem === true) {
                g.options.items = g.orignalItems = 1;
                g.options.itemsCustom = false;
                g.options.itemsDesktop = false;
                g.options.itemsDesktopSmall = false;
                g.options.itemsTablet = false;
                g.options.itemsTabletSmall = false;
                g.options.itemsMobile = false;
                return false
            }
            f = c(g.options.responsiveBaseWidth).width();
            if (f > (g.options.itemsDesktop[0] || g.orignalItems)) {
                g.options.items = g.orignalItems
            }
            if (g.options.itemsCustom !== false) {
                g.options.itemsCustom.sort(function(i, h) {
                    return i[0] - h[0]
                });
                for (e = 0; e < g.options.itemsCustom.length; e += 1) {
                    if (g.options.itemsCustom[e][0] <= f) {
                        g.options.items = g.options.itemsCustom[e][1]
                    }
                }
            } else {
                if (f <= g.options.itemsDesktop[0] && g.options.itemsDesktop !== false) {
                    g.options.items = g.options.itemsDesktop[1]
                }
                if (f <= g.options.itemsDesktopSmall[0] && g.options.itemsDesktopSmall !== false) {
                    g.options.items = g.options.itemsDesktopSmall[1]
                }
                if (f <= g.options.itemsTablet[0] && g.options.itemsTablet !== false) {
                    g.options.items = g.options.itemsTablet[1]
                }
                if (f <= g.options.itemsTabletSmall[0] && g.options.itemsTabletSmall !== false) {
                    g.options.items = g.options.itemsTabletSmall[1]
                }
                if (f <= g.options.itemsMobile[0] && g.options.itemsMobile !== false) {
                    g.options.items = g.options.itemsMobile[1]
                }
            }
            if (g.options.items > g.itemsAmount && g.options.itemsScaleUp === true) {
                g.options.items = g.itemsAmount
            }
        },
        response: function() {
            var g = this,
                f, e;
            if (g.options.responsive !== true) {
                return false
            }
            e = c(b).width();
            g.resizer = function() {
                if (c(b).width() !== e) {
                    if (g.options.autoPlay !== false) {
                        b.clearInterval(g.autoPlayInterval)
                    }
                    b.clearTimeout(f);
                    f = b.setTimeout(function() {
                        e = c(b).width();
                        g.updateVars()
                    }, g.options.responsiveRefreshRate)
                }
            };
            c(b).resize(g.resizer)
        },
        updatePosition: function() {
            var e = this;
            e.jumpTo(e.currentItem);
            if (e.options.autoPlay !== false) {
                e.checkAp()
            }
        },
        appendItemsSizes: function() {
            var g = this,
                e = 0,
                f = g.itemsAmount - g.options.items;
            g.$owlItems.each(function(h) {
                var i = c(this);
                i.css({
                    width: g.itemWidth
                }).data("owl-item", Number(h));
                if (h % g.options.items === 0 || h === f) {
                    if (!(h > f)) {
                        e += 1
                    }
                }
                i.data("owl-roundPages", e)
            })
        },
        appendWrapperSizes: function() {
            var f = this,
                e = f.$owlItems.length * f.itemWidth;
            f.$owlWrapper.css({
                width: e * 2,
                left: 0
            });
            f.appendItemsSizes()
        },
        calculateAll: function() {
            var e = this;
            e.calculateWidth();
            e.appendWrapperSizes();
            e.loops();
            e.max()
        },
        calculateWidth: function() {
            var e = this;
            e.itemWidth = Math.round(e.$elem.width() / e.options.items)
        },
        max: function() {
            var e = this,
                f = ((e.itemsAmount * e.itemWidth) - e.options.items * e.itemWidth) * -1;
            if (e.options.items > e.itemsAmount) {
                e.maximumItem = 0;
                f = 0;
                e.maximumPixels = 0
            } else {
                e.maximumItem = e.itemsAmount - e.options.items;
                e.maximumPixels = f
            }
            return f
        },
        min: function() {
            return 0
        },
        loops: function() {
            var k = this,
                j = 0,
                g = 0,
                f, h, e;
            k.positionsInArray = [0];
            k.pagesInArray = [];
            for (f = 0; f < k.itemsAmount; f += 1) {
                g += k.itemWidth;
                k.positionsInArray.push(-g);
                if (k.options.scrollPerPage === true) {
                    h = c(k.$owlItems[f]);
                    e = h.data("owl-roundPages");
                    if (e !== j) {
                        k.pagesInArray[j] = k.positionsInArray[f];
                        j = e
                    }
                }
            }
        },
        buildControls: function() {
            var e = this;
            if (e.options.navigation === true || e.options.pagination === true) {
                e.owlControls = c('<div class="owl-controls"/>').toggleClass("clickable", !e.browser.isTouch).appendTo(e.$elem)
            }
            if (e.options.pagination === true) {
                e.buildPagination()
            }
            if (e.options.navigation === true) {
                e.buildButtons()
            }
        },
        buildButtons: function() {
            var f = this,
                e = c('<div class="owl-buttons"/>');
            f.owlControls.append(e);
            f.buttonPrev = c("<div/>", {
                "class": "owl-prev",
                html: f.options.navigationText[0] || ""
            });
            f.buttonNext = c("<div/>", {
                "class": "owl-next",
                html: f.options.navigationText[1] || ""
            });
            e.append(f.buttonPrev).append(f.buttonNext);
            e.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(g) {
                g.preventDefault()
            });
            e.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(g) {
                g.preventDefault();
                if (c(this).hasClass("owl-next")) {
                    f.next()
                } else {
                    f.prev()
                }
            })
        },
        buildPagination: function() {
            var e = this;
            e.paginationWrapper = c('<div class="owl-pagination"/>');
            e.owlControls.append(e.paginationWrapper);
            e.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(f) {
                f.preventDefault();
                if (Number(c(this).data("owl-page")) !== e.currentItem) {
                    e.goTo(Number(c(this).data("owl-page")), true)
                }
            })
        },
        updatePagination: function() {
            var l = this,
                f, k, j, h, g, e;
            if (l.options.pagination === false) {
                return false
            }
            l.paginationWrapper.html("");
            f = 0;
            k = l.itemsAmount - l.itemsAmount % l.options.items;
            for (h = 0; h < l.itemsAmount; h += 1) {
                if (h % l.options.items === 0) {
                    f += 1;
                    if (k === h) {
                        j = l.itemsAmount - l.options.items
                    }
                    g = c("<div/>", {
                        "class": "owl-page"
                    });
                    e = c("<span></span>", {
                        text: l.options.paginationNumbers === true ? f : "",
                        "class": l.options.paginationNumbers === true ? "owl-numbers" : ""
                    });
                    g.append(e);
                    g.data("owl-page", k === h ? j : h);
                    g.data("owl-roundPages", f);
                    l.paginationWrapper.append(g)
                }
            }
            l.checkPagination()
        },
        checkPagination: function() {
            var e = this;
            if (e.options.pagination === false) {
                return false
            }
            e.paginationWrapper.find(".owl-page").each(function() {
                if (c(this).data("owl-roundPages") === c(e.$owlItems[e.currentItem]).data("owl-roundPages")) {
                    e.paginationWrapper.find(".owl-page").removeClass("active");
                    c(this).addClass("active")
                }
            })
        },
        checkNavigation: function() {
            var e = this;
            if (e.options.navigation === false) {
                return false
            }
            if (e.options.rewindNav === false) {
                if (e.currentItem === 0 && e.maximumItem === 0) {
                    e.buttonPrev.addClass("disabled");
                    e.buttonNext.addClass("disabled")
                } else {
                    if (e.currentItem === 0 && e.maximumItem !== 0) {
                        e.buttonPrev.addClass("disabled");
                        e.buttonNext.removeClass("disabled")
                    } else {
                        if (e.currentItem === e.maximumItem) {
                            e.buttonPrev.removeClass("disabled");
                            e.buttonNext.addClass("disabled")
                        } else {
                            if (e.currentItem !== 0 && e.currentItem !== e.maximumItem) {
                                e.buttonPrev.removeClass("disabled");
                                e.buttonNext.removeClass("disabled")
                            }
                        }
                    }
                }
            }
        },
        updateControls: function() {
            var e = this;
            e.updatePagination();
            e.checkNavigation();
            if (e.owlControls) {
                if (e.options.items >= e.itemsAmount) {
                    e.owlControls.hide()
                } else {
                    e.owlControls.show()
                }
            }
        },
        destroyControls: function() {
            var e = this;
            if (e.owlControls) {
                e.owlControls.remove()
            }
        },
        next: function(f) {
            var e = this;
            if (e.isTransition) {
                return false
            }
            e.currentItem += e.options.scrollPerPage === true ? e.options.items : 1;
            if (e.currentItem > e.maximumItem + (e.options.scrollPerPage === true ? (e.options.items - 1) : 0)) {
                if (e.options.rewindNav === true) {
                    e.currentItem = 0;
                    f = "rewind"
                } else {
                    e.currentItem = e.maximumItem;
                    return false
                }
            }
            e.goTo(e.currentItem, f)
        },
        prev: function(f) {
            var e = this;
            if (e.isTransition) {
                return false
            }
            if (e.options.scrollPerPage === true && e.currentItem > 0 && e.currentItem < e.options.items) {
                e.currentItem = 0
            } else {
                e.currentItem -= e.options.scrollPerPage === true ? e.options.items : 1
            }
            if (e.currentItem < 0) {
                if (e.options.rewindNav === true) {
                    e.currentItem = e.maximumItem;
                    f = "rewind"
                } else {
                    e.currentItem = 0;
                    return false
                }
            }
            e.goTo(e.currentItem, f)
        },
        goTo: function(e, i, g) {
            var h = this,
                f;
            if (h.isTransition) {
                return false
            }
            if (typeof h.options.beforeMove === "function") {
                h.options.beforeMove.apply(this, [h.$elem])
            }
            if (e >= h.maximumItem) {
                e = h.maximumItem
            } else {
                if (e <= 0) {
                    e = 0
                }
            }
            h.currentItem = h.owl.currentItem = e;
            if (h.options.transitionStyle !== false && g !== "drag" && h.options.items === 1 && h.browser.support3d === true) {
                h.swapSpeed(0);
                if (h.browser.support3d === true) {
                    h.transition3d(h.positionsInArray[e])
                } else {
                    h.css2slide(h.positionsInArray[e], 1)
                }
                h.afterGo();
                h.singleItemTransition();
                return false
            }
            f = h.positionsInArray[e];
            if (h.browser.support3d === true) {
                h.isCss3Finish = false;
                if (i === true) {
                    h.swapSpeed("paginationSpeed");
                    b.setTimeout(function() {
                        h.isCss3Finish = true
                    }, h.options.paginationSpeed)
                } else {
                    if (i === "rewind") {
                        h.swapSpeed(h.options.rewindSpeed);
                        b.setTimeout(function() {
                            h.isCss3Finish = true
                        }, h.options.rewindSpeed)
                    } else {
                        h.swapSpeed("slideSpeed");
                        b.setTimeout(function() {
                            h.isCss3Finish = true
                        }, h.options.slideSpeed)
                    }
                }
                h.transition3d(f)
            } else {
                if (i === true) {
                    h.css2slide(f, h.options.paginationSpeed)
                } else {
                    if (i === "rewind") {
                        h.css2slide(f, h.options.rewindSpeed)
                    } else {
                        h.css2slide(f, h.options.slideSpeed)
                    }
                }
            }
            h.afterGo()
        },
        jumpTo: function(e) {
            var f = this;
            if (typeof f.options.beforeMove === "function") {
                f.options.beforeMove.apply(this, [f.$elem])
            }
            if (e >= f.maximumItem || e === -1) {
                e = f.maximumItem
            } else {
                if (e <= 0) {
                    e = 0
                }
            }
            f.swapSpeed(0);
            if (f.browser.support3d === true) {
                f.transition3d(f.positionsInArray[e])
            } else {
                f.css2slide(f.positionsInArray[e], 1)
            }
            f.currentItem = f.owl.currentItem = e;
            f.afterGo()
        },
        afterGo: function() {
            var e = this;
            e.prevArr.push(e.currentItem);
            e.prevItem = e.owl.prevItem = e.prevArr[e.prevArr.length - 2];
            e.prevArr.shift(0);
            if (e.prevItem !== e.currentItem) {
                e.checkPagination();
                e.checkNavigation();
                e.eachMoveUpdate();
                if (e.options.autoPlay !== false) {
                    e.checkAp()
                }
            }
            if (typeof e.options.afterMove === "function" && e.prevItem !== e.currentItem) {
                e.options.afterMove.apply(this, [e.$elem])
            }
        },
        stop: function() {
            var e = this;
            e.apStatus = "stop";
            b.clearInterval(e.autoPlayInterval)
        },
        checkAp: function() {
            var e = this;
            if (e.apStatus !== "stop") {
                e.play()
            }
        },
        play: function() {
            var e = this;
            e.apStatus = "play";
            if (e.options.autoPlay === false) {
                return false
            }
            b.clearInterval(e.autoPlayInterval);
            e.autoPlayInterval = b.setInterval(function() {
                e.next(true)
            }, e.options.autoPlay)
        },
        swapSpeed: function(f) {
            var e = this;
            if (f === "slideSpeed") {
                e.$owlWrapper.css(e.addCssSpeed(e.options.slideSpeed))
            } else {
                if (f === "paginationSpeed") {
                    e.$owlWrapper.css(e.addCssSpeed(e.options.paginationSpeed))
                } else {
                    if (typeof f !== "string") {
                        e.$owlWrapper.css(e.addCssSpeed(f))
                    }
                }
            }
        },
        addCssSpeed: function(e) {
            return {
                "-webkit-transition": "all " + e + "ms ease",
                "-moz-transition": "all " + e + "ms ease",
                "-o-transition": "all " + e + "ms ease",
                transition: "all " + e + "ms ease"
            }
        },
        removeTransition: function() {
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-o-transition": "",
                transition: ""
            }
        },
        doTranslate: function(e) {
            return {
                "-webkit-transform": "translate3d(" + e + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + e + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + e + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + e + "px, 0px, 0px)",
                transform: "translate3d(" + e + "px, 0px,0px)"
            }
        },
        transition3d: function(f) {
            var e = this;
            e.$owlWrapper.css(e.doTranslate(f))
        },
        css2move: function(f) {
            var e = this;
            e.$owlWrapper.css({
                left: f
            })
        },
        css2slide: function(g, f) {
            var e = this;
            e.isCssFinish = false;
            e.$owlWrapper.stop(true, true).animate({
                left: g
            }, {
                duration: f || e.options.slideSpeed,
                complete: function() {
                    e.isCssFinish = true
                }
            })
        },
        checkBrowser: function() {
            var j = this,
                g = "translate3d(0px, 0px, 0px)",
                i = a.createElement("div"),
                h, f, k, e;
            i.style.cssText = "  -moz-transform:" + g + "; -ms-transform:" + g + "; -o-transform:" + g + "; -webkit-transform:" + g + "; transform:" + g;
            h = /translate3d\(0px, 0px, 0px\)/g;
            f = i.style.cssText.match(h);
            k = (f !== null && f.length >= 1 && f.length <= 2);
            e = "ontouchstart" in b || b.navigator.msMaxTouchPoints;
            j.browser = {
                support3d: k,
                isTouch: e
            }
        },
        moveEvents: function() {
            var e = this;
            if (e.options.mouseDrag !== false || e.options.touchDrag !== false) {
                e.gestures();
                e.disabledEvents()
            }
        },
        eventTypes: function() {
            var f = this,
                e = ["s", "e", "x"];
            f.ev_types = {};
            if (f.options.mouseDrag === true && f.options.touchDrag === true) {
                e = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"]
            } else {
                if (f.options.mouseDrag === false && f.options.touchDrag === true) {
                    e = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"]
                } else {
                    if (f.options.mouseDrag === true && f.options.touchDrag === false) {
                        e = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]
                    }
                }
            }
            f.ev_types.start = e[0];
            f.ev_types.move = e[1];
            f.ev_types.end = e[2]
        },
        disabledEvents: function() {
            var e = this;
            e.$elem.on("dragstart.owl", function(f) {
                f.preventDefault()
            });
            e.$elem.on("mousedown.disableTextSelect", function(f) {
                return c(f.target).is("input, textarea, select, option")
            })
        },
        gestures: function() {
            var h = this,
                i = {
                    offsetX: 0,
                    offsetY: 0,
                    baseElWidth: 0,
                    relativePos: 0,
                    position: null,
                    minSwipe: null,
                    maxSwipe: null,
                    sliding: null,
                    dargging: null,
                    targetElement: null
                };
            h.isCssFinish = true;

            function k(l) {
                if (l.touches !== undefined) {
                    return {
                        x: l.touches[0].pageX,
                        y: l.touches[0].pageY
                    }
                }
                if (l.touches === undefined) {
                    if (l.pageX !== undefined) {
                        return {
                            x: l.pageX,
                            y: l.pageY
                        }
                    }
                    if (l.pageX === undefined) {
                        return {
                            x: l.clientX,
                            y: l.clientY
                        }
                    }
                }
            }

            function j(l) {
                if (l === "on") {
                    c(a).on(h.ev_types.move, g);
                    c(a).on(h.ev_types.end, e)
                } else {
                    if (l === "off") {
                        c(a).off(h.ev_types.move);
                        c(a).off(h.ev_types.end)
                    }
                }
            }

            function f(n) {
                var m = n.originalEvent || n || b.event,
                    l;
                if (m.which === 3) {
                    return false
                }
                if (h.itemsAmount <= h.options.items) {
                    return
                }
                if (h.isCssFinish === false && !h.options.dragBeforeAnimFinish) {
                    return false
                }
                if (h.isCss3Finish === false && !h.options.dragBeforeAnimFinish) {
                    return false
                }
                if (h.options.autoPlay !== false) {
                    b.clearInterval(h.autoPlayInterval)
                }
                if (h.browser.isTouch !== true && !h.$owlWrapper.hasClass("grabbing")) {
                    h.$owlWrapper.addClass("grabbing")
                }
                h.newPosX = 0;
                h.newRelativeX = 0;
                c(this).css(h.removeTransition());
                l = c(this).position();
                i.relativePos = l.left;
                i.offsetX = k(m).x - l.left;
                i.offsetY = k(m).y - l.top;
                j("on");
                i.sliding = false;
                i.targetElement = m.target || m.srcElement
            }

            function g(o) {
                var n = o.originalEvent || o || b.event,
                    l, m;
                h.newPosX = k(n).x - i.offsetX;
                h.newPosY = k(n).y - i.offsetY;
                h.newRelativeX = h.newPosX - i.relativePos;
                if (typeof h.options.startDragging === "function" && i.dragging !== true && h.newRelativeX !== 0) {
                    i.dragging = true;
                    h.options.startDragging.apply(h, [h.$elem])
                }
                if ((h.newRelativeX > 8 || h.newRelativeX < -8) && (h.browser.isTouch === true)) {
                    if (n.preventDefault !== undefined) {
                        n.preventDefault()
                    } else {
                        n.returnValue = false
                    }
                    i.sliding = true
                }
                if ((h.newPosY > 10 || h.newPosY < -10) && i.sliding === false) {
                    c(a).off("touchmove.owl")
                }
                l = function() {
                    return h.newRelativeX / 5
                };
                m = function() {
                    return h.maximumPixels + h.newRelativeX / 5
                };
                h.newPosX = Math.max(Math.min(h.newPosX, l()), m());
                if (h.browser.support3d === true) {
                    h.transition3d(h.newPosX)
                } else {
                    h.css2move(h.newPosX)
                }
            }

            function e(p) {
                var o = p.originalEvent || p || b.event,
                    n, m, l;
                o.target = o.target || o.srcElement;
                i.dragging = false;
                if (h.browser.isTouch !== true) {
                    h.$owlWrapper.removeClass("grabbing")
                }
                if (h.newRelativeX < 0) {
                    h.dragDirection = h.owl.dragDirection = "left"
                } else {
                    h.dragDirection = h.owl.dragDirection = "right"
                }
                if (h.newRelativeX !== 0) {
                    n = h.getNewPosition();
                    h.goTo(n, false, "drag");
                    if (i.targetElement === o.target && h.browser.isTouch !== true) {
                        c(o.target).on("click.disable", function(q) {
                            q.stopImmediatePropagation();
                            q.stopPropagation();
                            q.preventDefault();
                            c(q.target).off("click.disable")
                        });
                        m = c._data(o.target, "events").click;
                        l = m.pop();
                        m.splice(0, 0, l)
                    }
                }
                j("off")
            }
            h.$elem.on(h.ev_types.start, ".owl-wrapper", f)
        },
        getNewPosition: function() {
            var f = this,
                e = f.closestItem();
            if (e > f.maximumItem) {
                f.currentItem = f.maximumItem;
                e = f.maximumItem
            } else {
                if (f.newPosX >= 0) {
                    e = 0;
                    f.currentItem = 0
                }
            }
            return e
        },
        closestItem: function() {
            var g = this,
                h = g.options.scrollPerPage === true ? g.pagesInArray : g.positionsInArray,
                e = g.newPosX,
                f = null;
            c.each(h, function(k, j) {
                if (e - (g.itemWidth / 20) > h[k + 1] && e - (g.itemWidth / 20) < j && g.moveDirection() === "left") {
                    f = j;
                    if (g.options.scrollPerPage === true) {
                        g.currentItem = c.inArray(f, g.positionsInArray)
                    } else {
                        g.currentItem = k
                    }
                } else {
                    if (e + (g.itemWidth / 20) < j && e + (g.itemWidth / 20) > (h[k + 1] || h[k] - g.itemWidth) && g.moveDirection() === "right") {
                        if (g.options.scrollPerPage === true) {
                            f = h[k + 1] || h[h.length - 1];
                            g.currentItem = c.inArray(f, g.positionsInArray)
                        } else {
                            f = h[k + 1];
                            g.currentItem = k + 1
                        }
                    }
                }
            });
            return g.currentItem
        },
        moveDirection: function() {
            var e = this,
                f;
            if (e.newRelativeX < 0) {
                f = "right";
                e.playDirection = "next"
            } else {
                f = "left";
                e.playDirection = "prev"
            }
            return f
        },
        customEvents: function() {
            var e = this;
            e.$elem.on("owl.next", function() {
                e.next()
            });
            e.$elem.on("owl.prev", function() {
                e.prev()
            });
            e.$elem.on("owl.play", function(f, g) {
                e.options.autoPlay = g;
                e.play();
                e.hoverStatus = "play"
            });
            e.$elem.on("owl.stop", function() {
                e.stop();
                e.hoverStatus = "stop"
            });
            e.$elem.on("owl.goTo", function(g, f) {
                e.goTo(f)
            });
            e.$elem.on("owl.jumpTo", function(g, f) {
                e.jumpTo(f)
            })
        },
        stopOnHover: function() {
            var e = this;
            if (e.options.stopOnHover === true && e.browser.isTouch !== true && e.options.autoPlay !== false) {
                e.$elem.on("mouseover", function() {
                    e.stop()
                });
                e.$elem.on("mouseout", function() {
                    if (e.hoverStatus !== "stop") {
                        e.play()
                    }
                })
            }
        },
        lazyLoad: function() {
            var k = this,
                h, f, j, g, e;
            if (k.options.lazyLoad === false) {
                return false
            }
            for (h = 0; h < k.itemsAmount; h += 1) {
                f = c(k.$owlItems[h]);
                if (f.data("owl-loaded") === "loaded") {
                    continue
                }
                j = f.data("owl-item");
                g = f.find(".lazyOwl");
                if (typeof g.data("src") !== "string") {
                    f.data("owl-loaded", "loaded");
                    continue
                }
                if (f.data("owl-loaded") === undefined) {
                    g.hide();
                    f.addClass("loading").data("owl-loaded", "checked")
                }
                if (k.options.lazyFollow === true) {
                    e = j >= k.currentItem
                } else {
                    e = true
                }
                if (e && j < k.currentItem + k.options.items && g.length) {
                    k.lazyPreload(f, g)
                }
            }
        },
        lazyPreload: function(e, f) {
            var i = this,
                h = 0,
                j;
            if (f.prop("tagName") === "DIV") {
                f.css("background-image", "url(" + f.data("src") + ")");
                j = true
            } else {
                f[0].src = f.data("src")
            }

            function g() {
                e.data("owl-loaded", "loaded").removeClass("loading");
                f.removeAttr("data-src");
                if (i.options.lazyEffect === "fade") {
                    f.fadeIn(400)
                } else {
                    f.show()
                }
                if (typeof i.options.afterLazyLoad === "function") {
                    i.options.afterLazyLoad.apply(this, [i.$elem])
                }
            }

            function k() {
                h += 1;
                if (i.completeImg(f.get(0)) || j === true) {
                    g()
                } else {
                    if (h <= 100) {
                        b.setTimeout(k, 100)
                    } else {
                        g()
                    }
                }
            }
            k()
        },
        autoHeight: function() {
            var h = this,
                i = c(h.$owlItems[h.currentItem]).find("img"),
                g;

            function e() {
                var j = c(h.$owlItems[h.currentItem]).height();
                h.wrapperOuter.css("height", j + "px");
                if (!h.wrapperOuter.hasClass("autoHeight")) {
                    b.setTimeout(function() {
                        h.wrapperOuter.addClass("autoHeight")
                    }, 0)
                }
            }

            function f() {
                g += 1;
                if (h.completeImg(i.get(0))) {
                    e()
                } else {
                    if (g <= 100) {
                        b.setTimeout(f, 100)
                    } else {
                        h.wrapperOuter.css("height", "")
                    }
                }
            }
            if (i.get(0) !== undefined) {
                g = 0;
                f()
            } else {
                e()
            }
        },
        completeImg: function(e) {
            var f;
            if (!e.complete) {
                return false
            }
            f = typeof e.naturalWidth;
            if (f !== "undefined" && e.naturalWidth === 0) {
                return false
            }
            return true
        },
        onVisibleItems: function() {
            var f = this,
                e;
            if (f.options.addClassActive === true) {
                f.$owlItems.removeClass("active")
            }
            f.visibleItems = [];
            for (e = f.currentItem; e < f.currentItem + f.options.items; e += 1) {
                f.visibleItems.push(e);
                if (f.options.addClassActive === true) {
                    c(f.$owlItems[e]).addClass("active")
                }
            }
            f.owl.visibleItems = f.visibleItems
        },
        transitionTypes: function(e) {
            var f = this;
            f.outClass = "owl-" + e + "-out";
            f.inClass = "owl-" + e + "-in"
        },
        singleItemTransition: function() {
            var f = this,
                h = f.outClass,
                k = f.inClass,
                j = f.$owlItems.eq(f.currentItem),
                i = f.$owlItems.eq(f.prevItem),
                m = Math.abs(f.positionsInArray[f.currentItem]) + f.positionsInArray[f.prevItem],
                l = Math.abs(f.positionsInArray[f.currentItem]) + f.itemWidth / 2,
                g = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
            f.isTransition = true;
            f.$owlWrapper.addClass("owl-origin").css({
                "-webkit-transform-origin": l + "px",
                "-moz-perspective-origin": l + "px",
                "perspective-origin": l + "px"
            });

            function e(n) {
                return {
                    position: "relative",
                    left: n + "px"
                }
            }
            i.css(e(m, 10)).addClass(h).on(g, function() {
                f.endPrev = true;
                i.off(g);
                f.clearTransStyle(i, h)
            });
            j.addClass(k).on(g, function() {
                f.endCurrent = true;
                j.off(g);
                f.clearTransStyle(j, k)
            })
        },
        clearTransStyle: function(f, e) {
            var g = this;
            f.css({
                position: "",
                left: ""
            }).removeClass(e);
            if (g.endPrev && g.endCurrent) {
                g.$owlWrapper.removeClass("owl-origin");
                g.endPrev = false;
                g.endCurrent = false;
                g.isTransition = false
            }
        },
        owlStatus: function() {
            var e = this;
            e.owl = {
                userOptions: e.userOptions,
                baseElement: e.$elem,
                userItems: e.$userItems,
                owlItems: e.$owlItems,
                currentItem: e.currentItem,
                prevItem: e.prevItem,
                visibleItems: e.visibleItems,
                isTouch: e.browser.isTouch,
                browser: e.browser,
                dragDirection: e.dragDirection
            }
        },
        clearEvents: function() {
            var e = this;
            e.$elem.off(".owl owl mousedown.disableTextSelect");
            c(a).off(".owl owl");
            c(b).off("resize", e.resizer)
        },
        unWrap: function() {
            var e = this;
            if (e.$elem.children().length !== 0) {
                e.$owlWrapper.unwrap();
                e.$userItems.unwrap().unwrap();
                if (e.owlControls) {
                    e.owlControls.remove()
                }
            }
            e.clearEvents();
            e.$elem.attr("style", e.$elem.data("owl-originalStyles") || "").attr("class", e.$elem.data("owl-originalClasses"))
        },
        destroy: function() {
            var e = this;
            e.stop();
            b.clearInterval(e.checkVisible);
            e.unWrap();
            e.$elem.removeData()
        },
        reinit: function(g) {
            var f = this,
                e = c.extend({}, f.userOptions, g);
            f.unWrap();
            f.init(e, f.$elem)
        },
        addItem: function(h, f) {
            var g = this,
                e;
            if (!h) {
                return false
            }
            if (g.$elem.children().length === 0) {
                g.$elem.append(h);
                g.setVars();
                return false
            }
            g.unWrap();
            if (f === undefined || f === -1) {
                e = -1
            } else {
                e = f
            }
            if (e >= g.$userItems.length || e === -1) {
                g.$userItems.eq(-1).after(h)
            } else {
                g.$userItems.eq(e).before(h)
            }
            g.setVars()
        },
        removeItem: function(f) {
            var g = this,
                e;
            if (g.$elem.children().length === 0) {
                return false
            }
            if (f === undefined || f === -1) {
                e = -1
            } else {
                e = f
            }
            g.unWrap();
            g.$userItems.eq(e).remove();
            g.setVars()
        }
    };
    c.fn.owlCarousel = function(e) {
        return this.each(function() {
            if (c(this).data("owl-init") === true) {
                return false
            }
            c(this).data("owl-init", true);
            var f = Object.create(d);
            f.init(e, this);
            c.data(this, "owlCarousel", f)
        })
    };
    c.fn.owlCarousel.options = {
        items: 5,
        itemsCustom: false,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1000,
        autoPlay: false,
        stopOnHover: false,
        navigation: false,
        navigationText: ["prev", "next"],
        rewindNav: true,
        scrollPerPage: false,
        pagination: true,
        paginationNumbers: false,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: b,
        baseClass: "owl-carousel",
        theme: "owl-theme",
        lazyLoad: false,
        lazyFollow: true,
        lazyEffect: "fade",
        autoHeight: false,
        jsonPath: false,
        jsonSuccess: false,
        dragBeforeAnimFinish: true,
        mouseDrag: true,
        touchDrag: true,
        addClassActive: false,
        transitionStyle: false,
        beforeUpdate: false,
        afterUpdate: false,
        beforeInit: false,
        afterInit: false,
        beforeMove: false,
        afterMove: false,
        afterAction: false,
        startDragging: false,
        afterLazyLoad: false
    }
}(jQuery, window, document));
/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
;
(function() {
    function e() {}

    function t(e, t) {
        for (var n = e.length; n--;)
            if (e[n].listener === t) return n;
        return -1
    }

    function n(e) {
        return function() {
            return this[e].apply(this, arguments)
        }
    }
    var i = e.prototype,
        r = this,
        o = r.EventEmitter;
    i.getListeners = function(e) {
        var t, n, i = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
        } else t = i[e] || (i[e] = []);
        return t
    }, i.flattenListeners = function(e) {
        var t, n = [];
        for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
        return n
    }, i.getListenersAsObject = function(e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && (t = {}, t[e] = n), t || n
    }, i.addListener = function(e, n) {
        var i, r = this.getListenersAsObject(e),
            o = "object" == typeof n;
        for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {
            listener: n,
            once: !1
        });
        return this
    }, i.on = n("addListener"), i.addOnceListener = function(e, t) {
        return this.addListener(e, {
            listener: t,
            once: !0
        })
    }, i.once = n("addOnceListener"), i.defineEvent = function(e) {
        return this.getListeners(e), this
    }, i.defineEvents = function(e) {
        for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
        return this
    }, i.removeListener = function(e, n) {
        var i, r, o = this.getListenersAsObject(e);
        for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
        return this
    }, i.off = n("removeListener"), i.addListeners = function(e, t) {
        return this.manipulateListeners(!1, e, t)
    }, i.removeListeners = function(e, t) {
        return this.manipulateListeners(!0, e, t)
    }, i.manipulateListeners = function(e, t, n) {
        var i, r, o = e ? this.removeListener : this.addListener,
            s = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
            for (i = n.length; i--;) o.call(this, t, n[i]);
        else
            for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
        return this
    }, i.removeEvent = function(e) {
        var t, n = typeof e,
            i = this._getEvents();
        if ("string" === n) delete i[e];
        else if ("object" === n)
            for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
        else delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(e, t) {
        var n, i, r, o, s = this.getListenersAsObject(e);
        for (r in s)
            if (s.hasOwnProperty(r))
                for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }, i.setOnceReturnValue = function(e) {
        return this._onceReturnValue = e, this
    }, i._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, i._getEvents = function() {
        return this._events || (this._events = {})
    }, e.noConflict = function() {
        return r.EventEmitter = o, e
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this),
    function(e) {
        function t(t) {
            var n = e.event;
            return n.target = n.target || n.srcElement || t, n
        }
        var n = document.documentElement,
            i = function() {};
        n.addEventListener ? i = function(e, t, n) {
            e.addEventListener(t, n, !1)
        } : n.attachEvent && (i = function(e, n, i) {
            e[n + i] = i.handleEvent ? function() {
                var n = t(e);
                i.handleEvent.call(i, n)
            } : function() {
                var n = t(e);
                i.call(e, n)
            }, e.attachEvent("on" + n, e[n + i])
        });
        var r = function() {};
        n.removeEventListener ? r = function(e, t, n) {
            e.removeEventListener(t, n, !1)
        } : n.detachEvent && (r = function(e, t, n) {
            e.detachEvent("on" + t, e[t + n]);
            try {
                delete e[t + n]
            } catch (i) {
                e[t + n] = void 0
            }
        });
        var o = {
            bind: i,
            unbind: r
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
    }(this),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) {
            return t(e, n, i)
        }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
    }(window, function(e, t, n) {
        function i(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function r(e) {
            return "[object Array]" === d.call(e)
        }

        function o(e) {
            var t = [];
            if (r(e)) t = e;
            else if ("number" == typeof e.length)
                for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
            else t.push(e);
            return t
        }

        function s(e, t, n) {
            if (!(this instanceof s)) return new s(e, t);
            "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), a && (this.jqDeferred = new a.Deferred);
            var r = this;
            setTimeout(function() {
                r.check()
            })
        }

        function f(e) {
            this.img = e
        }

        function c(e) {
            this.src = e, v[e] = this
        }
        var a = e.jQuery,
            u = e.console,
            h = u !== void 0,
            d = Object.prototype.toString;
        s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function() {
            this.images = [];
            for (var e = 0, t = this.elements.length; t > e; e++) {
                var n = this.elements[e];
                "IMG" === n.nodeName && this.addImage(n);
                var i = n.nodeType;
                if (i && (1 === i || 9 === i || 11 === i))
                    for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
                        var f = r[o];
                        this.addImage(f)
                    }
            }
        }, s.prototype.addImage = function(e) {
            var t = new f(e);
            this.images.push(t)
        }, s.prototype.check = function() {
            function e(e, r) {
                return t.options.debug && h && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0
            }
            var t = this,
                n = 0,
                i = this.images.length;
            if (this.hasAnyBroken = !1, !i) return this.complete(), void 0;
            for (var r = 0; i > r; r++) {
                var o = this.images[r];
                o.on("confirm", e), o.check()
            }
        }, s.prototype.progress = function(e) {
            this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
            var t = this;
            setTimeout(function() {
                t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
            })
        }, s.prototype.complete = function() {
            var e = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var t = this;
            setTimeout(function() {
                if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                    var n = t.hasAnyBroken ? "reject" : "resolve";
                    t.jqDeferred[n](t)
                }
            })
        }, a && (a.fn.imagesLoaded = function(e, t) {
            var n = new s(this, e, t);
            return n.jqDeferred.promise(a(this))
        }), f.prototype = new t, f.prototype.check = function() {
            var e = v[this.img.src] || new c(this.img.src);
            if (e.isConfirmed) return this.confirm(e.isLoaded, "cached was confirmed"), void 0;
            if (this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
            var t = this;
            e.on("confirm", function(e, n) {
                return t.confirm(e.isLoaded, n), !0
            }), e.check()
        }, f.prototype.confirm = function(e, t) {
            this.isLoaded = e, this.emit("confirm", this, t)
        };
        var v = {};
        return c.prototype = new t, c.prototype.check = function() {
            if (!this.isChecked) {
                var e = new Image;
                n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
            }
        }, c.prototype.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, c.prototype.onload = function(e) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(e)
        }, c.prototype.onerror = function(e) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
        }, c.prototype.confirm = function(e, t) {
            this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
        }, c.prototype.unbindProxyEvents = function(e) {
            n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
        }, s
    });
/*!
--------------------------------
Infinite Scroll
--------------------------------
+ https://github.com/paulirish/infinite-scroll
+ version 2.1.0
+ Copyright 2011/12 Paul Irish & Luke Shumard
+ Licensed under the MIT license
+ Documentation: http://infinite-scroll.com/
*/
;
(function(e) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], e)
    } else {
        e(jQuery)
    }
})(function(e, t) {
    "use strict";
    e.infinitescroll = function(n, r, i) {
        this.element = e(i);
        if (!this._create(n, r)) {
            this.failed = true
        }
    };
    e.infinitescroll.defaults = {
        loading: {
            finished: t,
            finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>",
            img: "data:image/gif;base64,R0lGODlh3AATAPQeAPDy+MnQ6LW/4N3h8MzT6rjC4sTM5r/I5NHX7N7j8c7U6tvg8OLl8uXo9Ojr9b3G5MfP6Ovu9tPZ7PT1+vX2+tbb7vf4+8/W69jd7rC73vn5/O/x+K243ai02////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQECgD/ACwAAAAA3AATAAAF/6AnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEj0BAScpHLJbDqf0Kh0Sq1ar9isdioItAKGw+MAKYMFhbF63CW438f0mg1R2O8EuXj/aOPtaHx7fn96goR4hmuId4qDdX95c4+RBIGCB4yAjpmQhZN0YGYGXitdZBIVGAsLoq4BBKQDswm1CQRkcG6ytrYKubq8vbfAcMK9v7q7EMO1ycrHvsW6zcTKsczNz8HZw9vG3cjTsMIYqQkCLBwHCgsMDQ4RDAYIqfYSFxDxEfz88/X38Onr16+Bp4ADCco7eC8hQYMAEe57yNCew4IVBU7EGNDiRn8Z831cGLHhSIgdFf9chIeBg7oA7gjaWUWTVQAGE3LqBDCTlc9WOHfm7PkTqNCh54rePDqB6M+lR536hCpUqs2gVZM+xbrTqtGoWqdy1emValeXKzggYBBB5y1acFNZmEvXAoN2cGfJrTv3bl69Ffj2xZt3L1+/fw3XRVw4sGDGcR0fJhxZsF3KtBTThZxZ8mLMgC3fRatCbYMNFCzwLEqLgE4NsDWs/tvqdezZf13Hvk2A9Szdu2X3pg18N+68xXn7rh1c+PLksI/Dhe6cuO3ow3NfV92bdArTqC2Ebd3A8vjf5QWfH6Bg7Nz17c2fj69+fnq+8N2Lty+fuP78/eV2X13neIcCeBRwxorbZrA1ANoCDGrgoG8RTshahQ9iSKEEzUmYIYfNWViUhheCGJyIP5E4oom7WWjgCeBFAJNv1DVV01MAdJhhjdkplWNzO/5oXI846njjVEIqR2OS2B1pE5PVscajkxhMycqLJghQSwT40PgfAl4GqNSXYdZXJn5gSkmmmmJu1aZYb14V51do+pTOCmA40AqVCIhG5IJ9PvYnhIFOxmdqhpaI6GeHCtpooisuutmg+Eg62KOMKuqoTaXgicQWoIYq6qiklmoqFV0UoeqqrLbq6quwxirrrLTWauutJ4QAACH5BAUKABwALAcABADOAAsAAAX/IPd0D2dyRCoUp/k8gpHOKtseR9yiSmGbuBykler9XLAhkbDavXTL5k2oqFqNOxzUZPU5YYZd1XsD72rZpBjbeh52mSNnMSC8lwblKZGwi+0QfIJ8CncnCoCDgoVnBHmKfByGJimPkIwtiAeBkH6ZHJaKmCeVnKKTHIihg5KNq4uoqmEtcRUtEREMBggtEr4QDrjCuRC8h7/BwxENeicSF8DKy82pyNLMOxzWygzFmdvD2L3P0dze4+Xh1Arkyepi7dfFvvTtLQkZBC0T/FX3CRgCMOBHsJ+EHYQY7OinAGECgQsB+Lu3AOK+CewcWjwxQeJBihtNGHSoQOE+iQ3//4XkwBBhRZMcUS6YSXOAwIL8PGqEaSJCiYt9SNoCmnJPAgUVLChdaoFBURN8MAzl2PQphwQLfDFd6lTowglHve6rKpbjhK7/pG5VinZP1qkiz1rl4+tr2LRwWU64cFEihwEtZgbgR1UiHaMVvxpOSwBA37kzGz9e8G+B5MIEKLutOGEsAH2ATQwYfTmuX8aETWdGPZmiZcccNSzeTCA1Sw0bdiitC7LBWgu8jQr8HRzqgpK6gX88QbrB14z/kF+ELpwB8eVQj/JkqdylAudji/+ts3039vEEfK8Vz2dlvxZKG0CmbkKDBvllRd6fCzDvBLKBDSCeffhRJEFebFk1k/Mv9jVIoIJZSeBggwUaNeB+Qk34IE0cXlihcfRxkOAJFFhwGmKlmWDiakZhUJtnLBpnWWcnKaAZcxI0piFGGLBm1mc90kajSCveeBVWKeYEoU2wqeaQi0PetoE+rr14EpVC7oAbAUHqhYExbn2XHHsVqbcVew9tx8+XJKk5AZsqqdlddGpqAKdbAYBn1pcczmSTdWvdmZ17c1b3FZ99vnTdCRFM8OEcAhLwm1NdXnWcBBSMRWmfkWZqVlsmLIiAp/o1gGV2vpS4lalGYsUOqXrddcKCmK61aZ8SjEpUpVFVoCpTj4r661Km7kBHjrDyc1RAIQAAIfkEBQoAGwAsBwAEAM4ACwAABf/gtmUCd4goQQgFKj6PYKi0yrrbc8i4ohQt12EHcal+MNSQiCP8gigdz7iCioaCIvUmZLp8QBzW0EN2vSlCuDtFKaq4RyHzQLEKZNdiQDhRDVooCwkbfm59EAmKi4SGIm+AjIsKjhsqB4mSjT2IOIOUnICeCaB/mZKFNTSRmqVpmJqklSqskq6PfYYCDwYHDC4REQwGCBLGxxIQDsHMwhAIX8bKzcENgSLGF9PU1j3Sy9zX2NrgzQziChLk1BHWxcjf7N046tvN82715czn9Pryz6Ilc4ACj4EBOCZM8KEnAYYADBRKnACAYUMFv1wotIhCEcaJCisqwJFgAUSQGyX/kCSVUUTIdKMwJlyo0oXHlhskwrTJciZHEXsgaqS4s6PJiCAr1uzYU8kBBSgnWFqpoMJMUjGtDmUwkmfVmVypakWhEKvXsS4nhLW5wNjVroJIoc05wSzTr0PtiigpYe4EC2vj4iWrFu5euWIMRBhacaVJhYQBEFjA9jHjyQ0xEABwGceGAZYjY0YBOrRLCxUp29QM+bRkx5s7ZyYgVbTqwwti2ybJ+vLtDYpycyZbYOlptxdx0kV+V7lC5iJAyyRrwYKxAdiz82ng0/jnAdMJFz0cPi104Ec1Vj9/M6F173vKL/feXv156dw11tlqeMMnv4V5Ap53GmjQQH97nFfg+IFiucfgRX5Z8KAgbUlQ4IULIlghhhdOSB6AgX0IVn8eReghen3NRIBsRgnH4l4LuEidZBjwRpt6NM5WGwoW0KSjCwX6yJSMab2GwwAPDXfaBCtWpluRTQqC5JM5oUZAjUNS+VeOLWpJEQ7VYQANW0INJSZVDFSnZphjSikfmzE5N4EEbQI1QJmnWXCmHulRp2edwDXF43txukenJwvI9xyg9Q26Z3MzGUcBYFEChZh6DVTq34AU8Iflh51Sd+CnKFYQ6mmZkhqfBKfSxZWqA9DZanWjxmhrWwi0qtCrt/43K6WqVjjpmhIqgEGvculaGKklKstAACEAACH5BAUKABwALAcABADOAAsAAAX/ICdyQmaMYyAUqPgIBiHPxNpy79kqRXH8wAPsRmDdXpAWgWdEIYm2llCHqjVHU+jjJkwqBTecwItShMXkEfNWSh8e1NGAcLgpDGlRgk7EJ/6Ae3VKfoF/fDuFhohVeDeCfXkcCQqDVQcQhn+VNDOYmpSWaoqBlUSfmowjEA+iEAEGDRGztAwGCDcXEA60tXEiCrq8vREMEBLIyRLCxMWSHMzExnbRvQ2Sy7vN0zvVtNfU2tLY3rPgLdnDvca4VQS/Cpk3ABwSLQkYAQwT/P309vcI7OvXr94jBQMJ/nskkGA/BQBRLNDncAIAiDcG6LsxAWOLiQzmeURBKWSLCQbv/1F0eDGinJUKR47YY1IEgQASKk7Yc7ACRwZm7mHweRJoz59BJUogisKCUaFMR0x4SlJBVBFTk8pZivTR0K73rN5wqlXEAq5Fy3IYgHbEzQ0nLy4QSoCjXLoom96VOJEeCosK5n4kkFfqXjl94wa+l1gvAcGICbewAOAxY8l/Ky/QhAGz4cUkGxu2HNozhwMGBnCUqUdBg9UuW9eUynqSwLHIBujePef1ZGQZXcM+OFuEBeBhi3OYgLyqcuaxbT9vLkf4SeqyWxSQpKGB2gQpm1KdWbu72rPRzR9Ne2Nu9Kzr/1Jqj0yD/fvqP4aXOt5sW/5qsXXVcv1Nsp8IBUAmgswGF3llGgeU1YVXXKTN1FlhWFXW3gIE+DVChApysACHHo7Q4A35lLichh+ROBmLKAzgYmYEYDAhCgxKGOOMn4WR4kkDaoBBOxJtdNKQxFmg5JIWIBnQc07GaORfUY4AEkdV6jHlCEISSZ5yTXpp1pbGZbkWmcuZmQCaE6iJ0FhjMaDjTMsgZaNEHFRAQVp3bqXnZED1qYcECOz5V6BhSWCoVJQIKuKQi2KFKEkEFAqoAo7uYSmO3jk61wUUMKmknJ4SGimBmAa0qVQBhAAAIfkEBQoAGwAsBwAEAM4ACwAABf/gJm5FmRlEqhJC+bywgK5pO4rHI0D3pii22+Mg6/0Ej96weCMAk7cDkXf7lZTTnrMl7eaYoy10JN0ZFdco0XAuvKI6qkgVFJXYNwjkIBcNBgR8TQoGfRsJCRuCYYQQiI+ICosiCoGOkIiKfSl8mJkHZ4U9kZMbKaI3pKGXmJKrngmug4WwkhA0lrCBWgYFCCMQFwoQDRHGxwwGCBLMzRLEx8iGzMMO0cYNeCMKzBDW19lnF9DXDIY/48Xg093f0Q3s1dcR8OLe8+Y91OTv5wrj7o7B+7VNQqABIoRVCMBggsOHE36kSoCBIcSH3EbFangxogJYFi8CkJhqQciLJEf/LDDJEeJIBT0GsOwYUYJGBS0fjpQAMidGmyVP6sx4Y6VQhzs9VUwkwqaCCh0tmKoFtSMDmBOf9phg4SrVrROuasRQAaxXpVUhdsU6IsECZlvX3kwLUWzRt0BHOLTbNlbZG3vZinArge5Dvn7wbqtQkSYAAgtKmnSsYKVKo2AfW048uaPmG386i4Q8EQMBAIAnfB7xBxBqvapJ9zX9WgRS2YMpnvYMGdPK3aMjt/3dUcNI4blpj7iwkMFWDXDvSmgAlijrt9RTR78+PS6z1uAJZIe93Q8g5zcsWCi/4Y+C8bah5zUv3vv89uft30QP23punGCx5954oBBwnwYaNCDY/wYrsYeggnM9B2Fpf8GG2CEUVWhbWAtGouEGDy7Y4IEJVrbSiXghqGKIo7z1IVcXIkKWWR361QOLWWnIhwERpLaaCCee5iMBGJQmJGyPFTnbkfHVZGRtIGrg5HALEJAZbu39BuUEUmq1JJQIPtZilY5hGeSWsSk52G9XqsmgljdIcABytq13HyIM6RcUA+r1qZ4EBF3WHWB29tBgAzRhEGhig8KmqKFv8SeCeo+mgsF7YFXa1qWSbkDpom/mqR1PmHCqJ3fwNRVXjC7S6CZhFVCQ2lWvZiirhQq42SACt25IK2hv8TprriUV1usGgeka7LFcNmCldMLi6qZMgFLgpw16Cipb7bC1knXsBiEAACH5BAUKABsALAcABADOAAsAAAX/4FZsJPkUmUGsLCEUTywXglFuSg7fW1xAvNWLF6sFFcPb42C8EZCj24EJdCp2yoegWsolS0Uu6fmamg8n8YYcLU2bXSiRaXMGvqV6/KAeJAh8VgZqCX+BexCFioWAYgqNi4qAR4ORhRuHY408jAeUhAmYYiuVlpiflqGZa5CWkzc5fKmbbhIpsAoQDRG8vQwQCBLCwxK6vb5qwhfGxxENahvCEA7NzskSy7vNzzzK09W/PNHF1NvX2dXcN8K55cfh69Luveol3vO8zwi4Yhj+AQwmCBw4IYclDAAJDlQggVOChAoLKkgFkSCAHDwWLKhIEOONARsDKryogFPIiAUb/95gJNIiw4wnI778GFPhzBKFOAq8qLJEhQpiNArjMcHCmlTCUDIouTKBhApELSxFWiGiVKY4E2CAekPgUphDu0742nRrVLJZnyrFSqKQ2ohoSYAMW6IoDpNJ4bLdILTnAj8KUF7UeENjAKuDyxIgOuGiOI0EBBMgLNew5AUrDTMGsFixwBIaNCQuAXJB57qNJ2OWm2Aj4skwCQCIyNkhhtMkdsIuodE0AN4LJDRgfLPtn5YDLdBlraAByuUbBgxQwICxMOnYpVOPej074OFdlfc0TqC62OIbcppHjV4o+LrieWhfT8JC/I/T6W8oCl29vQ0XjLdBaA3s1RcPBO7lFvpX8BVoG4O5jTXRQRDuJ6FDTzEWF1/BCZhgbyAKE9qICYLloQYOFtahVRsWYlZ4KQJHlwHS/IYaZ6sZd9tmu5HQm2xi1UaTbzxYwJk/wBF5g5EEYOBZeEfGZmNdFyFZmZIR4jikbLThlh5kUUVJGmRT7sekkziRWUIACABk3T4qCsedgO4xhgGcY7q5pHJ4klBBTQRJ0CeHcoYHHUh6wgfdn9uJdSdMiebGJ0zUPTcoS286FCkrZxnYoYYKWLkBowhQoBeaOlZAgVhLidrXqg2GiqpQpZ4apwSwRtjqrB3muoF9BboaXKmshlqWqsWiGt2wphJkQbAU5hoCACH5BAUKABsALAcABADOAAsAAAX/oGFw2WZuT5oZROsSQnGaKjRvilI893MItlNOJ5v5gDcFrHhKIWcEYu/xFEqNv6B1N62aclysF7fsZYe5aOx2yL5aAUGSaT1oTYMBwQ5VGCAJgYIJCnx1gIOBhXdwiIl7d0p2iYGQUAQBjoOFSQR/lIQHnZ+Ue6OagqYzSqSJi5eTpTxGcjcSChANEbu8DBAIEsHBChe5vL13G7fFuscRDcnKuM3H0La3EA7Oz8kKEsXazr7Cw9/Gztar5uHHvte47MjktznZ2w0G1+D3BgirAqJmJMAQgMGEgwgn5Ei0gKDBhBMALGRYEOJBb5QcWlQo4cbAihZz3GgIMqFEBSM1/4ZEOWPAgpIIJXYU+PIhRG8ja1qU6VHlzZknJNQ6UanCjQkWCIGSUGEjAwVLjc44+DTqUQtPPS5gejUrTa5TJ3g9sWCr1BNUWZI161StiQUDmLYdGfesibQ3XMq1OPYthrwuA2yU2LBs2cBHIypYQPPlYAKFD5cVvNPtW8eVGbdcQADATsiNO4cFAPkvHpedPzc8kUcPgNGgZ5RNDZG05reoE9s2vSEP79MEGiQGy1qP8LA4ZcdtsJE48ONoLTBtTV0B9LsTnPceoIDBDQvS7W7vfjVY3q3eZ4A339J4eaAmKqU/sV58HvJh2RcnIBsDUw0ABqhBA5aV5V9XUFGiHfVeAiWwoFgJJrIXRH1tEMiDFV4oHoAEGlaWhgIGSGBO2nFomYY3mKjVglidaNYJGJDkWW2xxTfbjCbVaOGNqoX2GloR8ZeTaECS9pthRGJH2g0b3Agbk6hNANtteHD2GJUucfajCQBy5OOTQ25ZgUPvaVVQmbKh9510/qQpwXx3SQdfk8tZJOd5b6JJFplT3ZnmmX3qd5l1eg5q00HrtUkUn0AKaiGjClSAgKLYZcgWXwocGRcCFGCKwSB6ceqphwmYRUFYT/1WKlOdUpipmxW0mlCqHjYkAaeoZlqrqZ4qd+upQKaapn/AmgAegZ8KUtYtFAQQAgAh+QQFCgAbACwHAAQAzgALAAAF/+C2PUcmiCiZGUTrEkKBis8jQEquKwU5HyXIbEPgyX7BYa5wTNmEMwWsSXsqFbEh8DYs9mrgGjdK6GkPY5GOeU6ryz7UFopSQEzygOGhJBjoIgMDBAcBM0V/CYqLCQqFOwobiYyKjn2TlI6GKC2YjJZknouaZAcQlJUHl6eooJwKooobqoewrJSEmyKdt59NhRKFMxLEEA4RyMkMEAjDEhfGycqAG8TQx9IRDRDE3d3R2ctD1RLg0ttKEnbY5wZD3+zJ6M7X2RHi9Oby7u/r9g38UFjTh2xZJBEBMDAboogAgwkQI07IMUORwocSJwCgWDFBAIwZOaJIsOBjRogKJP8wTODw5ESVHVtm3AhzpEeQElOuNDlTZ0ycEUWKWFASqEahGwYUPbnxoAgEdlYSqDBkgoUNClAlIHbSAoOsqCRQnQHxq1axVb06FWFxLIqyaze0Tft1JVqyE+pWXMD1pF6bYl3+HTqAWNW8cRUFzmih0ZAAB2oGKukSAAGGRHWJgLiR6AylBLpuHKKUMlMCngMpDSAa9QIUggZVVvDaJobLeC3XZpvgNgCmtPcuwP3WgmXSq4do0DC6o2/guzcseECtUoO0hmcsGKDgOt7ssBd07wqesAIGZC1YIBa7PQHvb1+SFo+++HrJSQfB33xfav3i5eX3Hnb4CTJgegEq8tH/YQEOcIJzbm2G2EoYRLgBXFpVmFYDcREV4HIcnmUhiGBRouEMJGJGzHIspqgdXxK0yCKHRNXoIX4uorCdTyjkyNtdPWrA4Up82EbAbzMRxxZRR54WXVLDIRmRcag5d2R6ugl3ZXzNhTecchpMhIGVAKAYpgJjjsSklBEd99maZoo535ZvdamjBEpusJyctg3h4X8XqodBMx0tiNeg/oGJaKGABpogS40KSqiaEgBqlQWLUtqoVQnytekEjzo0hHqhRorppOZt2p923M2AAV+oBtpAnnPNoB6HaU6mAAIU+IXmi3j2mtFXuUoHKwXpzVrsjcgGOauKEjQrwq157hitGq2NoWmjh7z6Wmxb0m5w66+2VRAuXN/yFUAIACH5BAUKABsALAcABADOAAsAAAX/4CZuRiaM45MZqBgIRbs9AqTcuFLE7VHLOh7KB5ERdjJaEaU4ClO/lgKWjKKcMiJQ8KgumcieVdQMD8cbBeuAkkC6LYLhOxoQ2PF5Ys9PKPBMen17f0CCg4VSh32JV4t8jSNqEIOEgJKPlkYBlJWRInKdiJdkmQlvKAsLBxdABA4RsbIMBggtEhcQsLKxDBC2TAS6vLENdJLDxMZAubu8vjIbzcQRtMzJz79S08oQEt/guNiyy7fcvMbh4OezdAvGrakLAQwyABsELQkY9BP+//ckyPDD4J9BfAMh1GsBoImMeQUN+lMgUJ9CiRMa5msxoB9Gh/o8GmxYMZXIgxtR/yQ46S/gQAURR0pDwYDfywoyLPip5AdnCwsMFPBU4BPFhKBDi444quCmDKZOfwZ9KEGpCKgcN1jdALSpPqIYsabS+nSqvqplvYqQYAeDPgwKwjaMtiDl0oaqUAyo+3TuWwUAMPpVCfee0cEjVBGQq2ABx7oTWmQk4FglZMGN9fGVDMCuiH2AOVOu/PmyxM630gwM0CCn6q8LjVJ8GXvpa5Uwn95OTC/nNxkda1/dLSK475IjCD6dHbK1ZOa4hXP9DXs5chJ00UpVm5xo2qRpoxptwF2E4/IbJpB/SDz9+q9b1aNfQH08+p4a8uvX8B53fLP+ycAfemjsRUBgp1H20K+BghHgVgt1GXZXZpZ5lt4ECjxYR4ScUWiShEtZqBiIInRGWnERNnjiBglw+JyGnxUmGowsyiiZg189lNtPGACjV2+S9UjbU0JWF6SPvEk3QZEqsZYTk3UAaRSUnznJI5LmESCdBVSyaOWUWLK4I5gDUYVeV1T9l+FZClCAUVA09uSmRHBCKAECFEhW51ht6rnmWBXkaR+NjuHpJ40D3DmnQXt2F+ihZxlqVKOfQRACACH5BAUKABwALAcABADOAAsAAAX/ICdyUCkUo/g8mUG8MCGkKgspeC6j6XEIEBpBUeCNfECaglBcOVfJFK7YQwZHQ6JRZBUqTrSuVEuD3nI45pYjFuWKvjjSkCoRaBUMWxkwBGgJCXspQ36Bh4EEB0oKhoiBgyNLjo8Ki4QElIiWfJqHnISNEI+Ql5J9o6SgkqKkgqYihamPkW6oNBgSfiMMDQkGCBLCwxIQDhHIyQwQCGMKxsnKVyPCF9DREQ3MxMPX0cu4wt7J2uHWx9jlKd3o39MiuefYEcvNkuLt5O8c1ePI2tyELXGQwoGDAQf+iEC2xByDCRAjTlAgIUWCBRgCPJQ4AQBFXAs0coT40WLIjRxL/47AcHLkxIomRXL0CHPERZkpa4q4iVKiyp0tR/7kwHMkTUBBJR5dOCEBAVcKKtCAyOHpowXCpk7goABqBZdcvWploACpBKkpIJI1q5OD2rIWE0R1uTZu1LFwbWL9OlKuWb4c6+o9i3dEgw0RCGDUG9KlRw56gDY2qmCByZBaASi+TACA0TucAaTteCcy0ZuOK3N2vJlx58+LRQyY3Xm0ZsgjZg+oPQLi7dUcNXi0LOJw1pgNtB7XG6CBy+U75SYfPTSQAgZTNUDnQHt67wnbZyvwLgKiMN3oCZB3C76tdewpLFgIP2C88rbi4Y+QT3+8S5USMICZXWj1pkEDeUU3lOYGB3alSoEiMIjgX4WlgNF2EibIwQIXauWXSRg2SAOHIU5IIIMoZkhhWiJaiFVbKo6AQEgQXrTAazO1JhkBrBG3Y2Y6EsUhaGn95hprSN0oWpFE7rhkeaQBchGOEWnwEmc0uKWZj0LeuNV3W4Y2lZHFlQCSRjTIl8uZ+kG5HU/3sRlnTG2ytyadytnD3HrmuRcSn+0h1dycexIK1KCjYaCnjCCVqOFFJTZ5GkUUjESWaUIKU2lgCmAKKQIUjHapXRKE+t2og1VgankNYnohqKJ2CmKplso6GKz7WYCgqxeuyoF8u9IQAgA7",
            msg: null,
            msgText: "<em>Loading the next set of posts...</em>",
            selector: null,
            speed: "fast",
            start: t
        },
        state: {
            isDuringAjax: false,
            isInvalidPage: false,
            isDestroyed: false,
            isDone: false,
            isPaused: false,
            isBeyondMaxPage: false,
            currPage: 1
        },
        debug: false,
        behavior: t,
        binder: e(window),
        nextSelector: "div.navigation a:first",
        navSelector: "div.navigation",
        contentSelector: null,
        extraScrollPx: 150,
        itemSelector: "div.post",
        animate: false,
        pathParse: t,
        dataType: "html",
        appendCallback: true,
        bufferPx: 40,
        errorCallback: function() {},
        infid: 0,
        pixelsFromNavToBottom: t,
        path: t,
        prefill: false,
        maxPage: t
    };
    e.infinitescroll.prototype = {
        _binding: function(n) {
            var r = this,
                i = r.options;
            i.v = "2.0b2.120520";
            if (!!i.behavior && this["_binding_" + i.behavior] !== t) {
                this["_binding_" + i.behavior].call(this);
                return
            }
            if (n !== "bind" && n !== "unbind") {
                this._debug("Binding value  " + n + " not valid");
                return false
            }
            if (n === "unbind") {
                this.options.binder.unbind("smartscroll.infscr." + r.options.infid)
            } else {
                this.options.binder[n]("smartscroll.infscr." + r.options.infid, function() {
                    r.scroll()
                })
            }
            this._debug("Binding", n)
        },
        _create: function(r, i) {
            var s = e.extend(true, {}, e.infinitescroll.defaults, r);
            this.options = s;
            var o = e(window);
            var u = this;
            if (!u._validate(r)) {
                return false
            }
            var a = e(s.nextSelector).attr("href");
            if (!a) {
                this._debug("Navigation selector not found");
                return false
            }
            s.path = s.path || this._determinepath(a);
            s.contentSelector = s.contentSelector || this.element;
            s.loading.selector = s.loading.selector || s.contentSelector;
            s.loading.msg = s.loading.msg || e('<div id="infscr-loading"><img alt="Loading..." src="' + s.loading.img + '" /><div>' + s.loading.msgText + "</div></div>");
            (new Image).src = s.loading.img;
            if (s.pixelsFromNavToBottom === t) {
                s.pixelsFromNavToBottom = e(document).height() - e(s.navSelector).offset().top;
                this._debug("pixelsFromNavToBottom: " + s.pixelsFromNavToBottom)
            }
            var f = this;
            s.loading.start = s.loading.start || function() {
                e(s.navSelector).hide();
                s.loading.msg.appendTo(s.loading.selector).show(s.loading.speed, e.proxy(function() {
                    this.beginAjax(s)
                }, f))
            };
            s.loading.finished = s.loading.finished || function() {
                if (!s.state.isBeyondMaxPage) s.loading.msg.fadeOut(s.loading.speed)
            };
            s.callback = function(n, r, u) {
                if (!!s.behavior && n["_callback_" + s.behavior] !== t) {
                    n["_callback_" + s.behavior].call(e(s.contentSelector)[0], r, u)
                }
                if (i) {
                    i.call(e(s.contentSelector)[0], r, s, u)
                }
                if (s.prefill) {
                    o.bind("resize.infinite-scroll", n._prefill)
                }
            };
            if (r.debug) {
                if (Function.prototype.bind && (typeof console === "object" || typeof console === "function") && typeof console.log === "object") {
                    ["log", "info", "warn", "error", "assert", "dir", "clear", "profile", "profileEnd"].forEach(function(e) {
                        console[e] = this.call(console[e], console)
                    }, Function.prototype.bind)
                }
            }
            this._setup();
            if (s.prefill) {
                this._prefill()
            }
            return true
        },
        _prefill: function() {
            function i() {
                return e(n.options.contentSelector).height() <= r.height()
            }
            var n = this;
            var r = e(window);
            this._prefill = function() {
                if (i()) {
                    n.scroll()
                }
                r.bind("resize.infinite-scroll", function() {
                    if (i()) {
                        r.unbind("resize.infinite-scroll");
                        n.scroll()
                    }
                })
            };
            this._prefill()
        },
        _debug: function() {
            if (true !== this.options.debug) {
                return
            }
            if (typeof console !== "undefined" && typeof console.log === "function") {
                if (Array.prototype.slice.call(arguments).length === 1 && typeof Array.prototype.slice.call(arguments)[0] === "string") {
                    console.log(Array.prototype.slice.call(arguments).toString())
                } else {
                    console.log(Array.prototype.slice.call(arguments))
                }
            } else if (!Function.prototype.bind && typeof console !== "undefined" && typeof console.log === "object") {
                Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments))
            }
        },
        _determinepath: function(n) {
            var r = this.options;
            if (!!r.behavior && this["_determinepath_" + r.behavior] !== t) {
                return this["_determinepath_" + r.behavior].call(this, n)
            }
            if (!!r.pathParse) {
                this._debug("pathParse manual");
                return r.pathParse(n, this.options.state.currPage + 1)
            } else if (n.match(/^(.*?)\b2\b(.*?$)/)) {
                n = n.match(/^(.*?)\b2\b(.*?$)/).slice(1)
            } else if (n.match(/^(.*?)2(.*?$)/)) {
                if (n.match(/^(.*?page=)2(\/.*|$)/)) {
                    n = n.match(/^(.*?page=)2(\/.*|$)/).slice(1);
                    return n
                }
                n = n.match(/^(.*?)2(.*?$)/).slice(1)
            } else {
                if (n.match(/^(.*?page=)1(\/.*|$)/)) {
                    n = n.match(/^(.*?page=)1(\/.*|$)/).slice(1);
                    return n
                } else {
                    this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com.");
                    r.state.isInvalidPage = true
                }
            }
            this._debug("determinePath", n);
            return n
        },
        _error: function(n) {
            var r = this.options;
            if (!!r.behavior && this["_error_" + r.behavior] !== t) {
                this["_error_" + r.behavior].call(this, n);
                return
            }
            if (n !== "destroy" && n !== "end") {
                n = "unknown"
            }
            this._debug("Error", n);
            if (n === "end" || r.state.isBeyondMaxPage) {
                this._showdonemsg()
            }
            r.state.isDone = true;
            r.state.currPage = 1;
            r.state.isPaused = false;
            r.state.isBeyondMaxPage = false;
            this._binding("unbind")
        },
        _loadcallback: function(r, i, s) {
            var o = this.options,
                u = this.options.callback,
                a = o.state.isDone ? "done" : !o.appendCallback ? "no-append" : "append",
                f;
            if (!!o.behavior && this["_loadcallback_" + o.behavior] !== t) {
                this["_loadcallback_" + o.behavior].call(this, r, i);
                return
            }
            switch (a) {
                case "done":
                    this._showdonemsg();
                    return false;
                case "no-append":
                    if (o.dataType === "html") {
                        i = "<div>" + i + "</div>";
                        i = e(i).find(o.itemSelector)
                    }
                    if (i.length === 0) {
                        return this._error("end")
                    }
                    break;
                case "append":
                    var l = r.children();
                    if (l.length === 0) {
                        return this._error("end")
                    }
                    f = document.createDocumentFragment();
                    while (r[0].firstChild) {
                        f.appendChild(r[0].firstChild)
                    }
                    this._debug("contentSelector", e(o.contentSelector)[0]);
                    e(o.contentSelector)[0].appendChild(f);
                    i = l.get();
                    break
            }
            o.loading.finished.call(e(o.contentSelector)[0], o);
            if (o.animate) {
                var c = e(window).scrollTop() + e(o.loading.msg).height() + o.extraScrollPx + "px";
                e("html,body").animate({
                    scrollTop: c
                }, 800, function() {
                    o.state.isDuringAjax = false
                })
            }
            if (!o.animate) {
                o.state.isDuringAjax = false
            }
            u(this, i, s);
            if (o.prefill) {
                this._prefill()
            }
        },
        _nearbottom: function() {
            var r = this.options,
                i = 0 + e(document).height() - r.binder.scrollTop() - e(window).height();
            if (!!r.behavior && this["_nearbottom_" + r.behavior] !== t) {
                return this["_nearbottom_" + r.behavior].call(this)
            }
            this._debug("math:", i, r.pixelsFromNavToBottom);
            return i - r.bufferPx < r.pixelsFromNavToBottom
        },
        _pausing: function(n) {
            var r = this.options;
            if (!!r.behavior && this["_pausing_" + r.behavior] !== t) {
                this["_pausing_" + r.behavior].call(this, n);
                return
            }
            if (n !== "pause" && n !== "resume" && n !== null) {
                this._debug("Invalid argument. Toggling pause value instead")
            }
            n = n && (n === "pause" || n === "resume") ? n : "toggle";
            switch (n) {
                case "pause":
                    r.state.isPaused = true;
                    break;
                case "resume":
                    r.state.isPaused = false;
                    break;
                case "toggle":
                    r.state.isPaused = !r.state.isPaused;
                    break
            }
            this._debug("Paused", r.state.isPaused);
            return false
        },
        _setup: function() {
            var n = this.options;
            if (!!n.behavior && this["_setup_" + n.behavior] !== t) {
                this["_setup_" + n.behavior].call(this);
                return
            }
            this._binding("bind");
            return false
        },
        _showdonemsg: function() {
            var r = this.options;
            if (!!r.behavior && this["_showdonemsg_" + r.behavior] !== t) {
                this["_showdonemsg_" + r.behavior].call(this);
                return
            }
            r.loading.msg.find("img").hide().parent().find("div").html(r.loading.finishedMsg).animate({
                opacity: 1
            }, 2e3, function() {
                e(this).parent().fadeOut(r.loading.speed)
            });
            r.errorCallback.call(e(r.contentSelector)[0], "done")
        },
        _validate: function(n) {
            for (var r in n) {
                if (r.indexOf && r.indexOf("Selector") > -1 && e(n[r]).length === 0) {
                    this._debug("Your " + r + " found no elements.");
                    return false
                }
            }
            return true
        },
        bind: function() {
            this._binding("bind")
        },
        destroy: function() {
            this.options.state.isDestroyed = true;
            this.options.loading.finished();
            return this._error("destroy")
        },
        pause: function() {
            this._pausing("pause")
        },
        resume: function() {
            this._pausing("resume")
        },
        beginAjax: function(r) {
            var i = this,
                s = r.path,
                o, u, a, f;
            r.state.currPage++;
            if (r.maxPage !== t && r.state.currPage > r.maxPage) {
                r.state.isBeyondMaxPage = true;
                this.destroy();
                return
            }
            o = e(r.contentSelector).is("table, tbody") ? e("<tbody/>") : e("<div/>");
            u = typeof s === "function" ? s(r.state.currPage) : s.join(r.state.currPage);
            i._debug("heading into ajax", u);
            a = r.dataType === "html" || r.dataType === "json" ? r.dataType : "html+callback";
            if (r.appendCallback && r.dataType === "html") {
                a += "+callback"
            }
            switch (a) {
                case "html+callback":
                    i._debug("Using HTML via .load() method");
                    o.load(u + " " + r.itemSelector, t, function(t) {
                        i._loadcallback(o, t, u)
                    });
                    break;
                case "html":
                    i._debug("Using " + a.toUpperCase() + " via $.ajax() method");
                    e.ajax({
                        url: u,
                        dataType: r.dataType,
                        complete: function(t, n) {
                            f = typeof t.isResolved !== "undefined" ? t.isResolved() : n === "success" || n === "notmodified";
                            if (f) {
                                i._loadcallback(o, t.responseText, u)
                            } else {
                                i._error("end")
                            }
                        }
                    });
                    break;
                case "json":
                    i._debug("Using " + a.toUpperCase() + " via $.ajax() method");
                    e.ajax({
                        dataType: "json",
                        type: "GET",
                        url: u,
                        success: function(e, n, s) {
                            f = typeof s.isResolved !== "undefined" ? s.isResolved() : n === "success" || n === "notmodified";
                            if (r.appendCallback) {
                                if (r.template !== t) {
                                    var a = r.template(e);
                                    o.append(a);
                                    if (f) {
                                        i._loadcallback(o, a)
                                    } else {
                                        i._error("end")
                                    }
                                } else {
                                    i._debug("template must be defined.");
                                    i._error("end")
                                }
                            } else {
                                if (f) {
                                    i._loadcallback(o, e, u)
                                } else {
                                    i._error("end")
                                }
                            }
                        },
                        error: function() {
                            i._debug("JSON ajax request failed.");
                            i._error("end")
                        }
                    });
                    break
            }
        },
        retrieve: function(r) {
            r = r || null;
            var i = this,
                s = i.options;
            if (!!s.behavior && this["retrieve_" + s.behavior] !== t) {
                this["retrieve_" + s.behavior].call(this, r);
                return
            }
            if (s.state.isDestroyed) {
                this._debug("Instance is destroyed");
                return false
            }
            s.state.isDuringAjax = true;
            s.loading.start.call(e(s.contentSelector)[0], s)
        },
        scroll: function() {
            var n = this.options,
                r = n.state;
            if (!!n.behavior && this["scroll_" + n.behavior] !== t) {
                this["scroll_" + n.behavior].call(this);
                return
            }
            if (r.isDuringAjax || r.isInvalidPage || r.isDone || r.isDestroyed || r.isPaused) {
                return
            }
            if (!this._nearbottom()) {
                return
            }
            this.retrieve()
        },
        toggle: function() {
            this._pausing()
        },
        unbind: function() {
            this._binding("unbind")
        },
        update: function(n) {
            if (e.isPlainObject(n)) {
                this.options = e.extend(true, this.options, n)
            }
        }
    };
    e.fn.infinitescroll = function(n, r) {
        var i = typeof n;
        switch (i) {
            case "string":
                var s = Array.prototype.slice.call(arguments, 1);
                this.each(function() {
                    var t = e.data(this, "infinitescroll");
                    if (!t) {
                        return false
                    }
                    if (!e.isFunction(t[n]) || n.charAt(0) === "_") {
                        return false
                    }
                    t[n].apply(t, s)
                });
                break;
            case "object":
                this.each(function() {
                    var t = e.data(this, "infinitescroll");
                    if (t) {
                        t.update(n)
                    } else {
                        t = new e.infinitescroll(n, r, this);
                        if (!t.failed) {
                            e.data(this, "infinitescroll", t)
                        }
                    }
                });
                break
        }
        return this
    };
    var n = e.event,
        r;
    n.special.smartscroll = {
        setup: function() {
            e(this).bind("scroll", n.special.smartscroll.handler)
        },
        teardown: function() {
            e(this).unbind("scroll", n.special.smartscroll.handler)
        },
        handler: function(t, n) {
            var i = this,
                s = arguments;
            t.type = "smartscroll";
            if (r) {
                clearTimeout(r)
            }
            r = setTimeout(function() {
                e(i).trigger("smartscroll", s)
            }, n === "execAsap" ? 0 : 100)
        }
    };
    e.fn.smartscroll = function(e) {
        return e ? this.bind("smartscroll", e) : this.trigger("smartscroll", ["execAsap"])
    }
}); 
/*!Stellar.js v0.6.2 | Copyright 2014, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org*/ ;
! function(a, b, c, d) {
    function e(b, c) {
        this.element = b, this.options = a.extend({}, g, c), this._defaults = g, this._name = f, this.init()
    }
    var f = "stellar",
        g = {
            scrollProperty: "scroll",
            positionProperty: "position",
            horizontalScrolling: !0,
            verticalScrolling: !0,
            horizontalOffset: 0,
            verticalOffset: 0,
            responsive: !1,
            parallaxBackgrounds: !0,
            parallaxElements: !0,
            hideDistantElements: !0,
            hideElement: function(a) {
                a.hide()
            },
            showElement: function(a) {
                a.show()
            }
        },
        h = {
            scroll: {
                getLeft: function(a) {
                    return a.scrollLeft()
                },
                setLeft: function(a, b) {
                    a.scrollLeft(b)
                },
                getTop: function(a) {
                    return a.scrollTop()
                },
                setTop: function(a, b) {
                    a.scrollTop(b)
                }
            },
            position: {
                getLeft: function(a) {
                    return -1 * parseInt(a.css("left"), 10)
                },
                getTop: function(a) {
                    return -1 * parseInt(a.css("top"), 10)
                }
            },
            margin: {
                getLeft: function(a) {
                    return -1 * parseInt(a.css("margin-left"), 10)
                },
                getTop: function(a) {
                    return -1 * parseInt(a.css("margin-top"), 10)
                }
            },
            transform: {
                getLeft: function(a) {
                    var b = getComputedStyle(a[0])[k];
                    return "none" !== b ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[4], 10) : 0
                },
                getTop: function(a) {
                    var b = getComputedStyle(a[0])[k];
                    return "none" !== b ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[5], 10) : 0
                }
            }
        },
        i = {
            position: {
                setLeft: function(a, b) {
                    a.css("left", b)
                },
                setTop: function(a, b) {
                    a.css("top", b)
                }
            },
            transform: {
                setPosition: function(a, b, c, d, e) {
                    a[0].style[k] = "translate3d(" + (b - c) + "px, " + (d - e) + "px, 0)"
                }
            }
        },
        j = function() {
            var b, c = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                d = a("script")[0].style,
                e = "";
            for (b in d)
                if (c.test(b)) {
                    e = b.match(c)[0];
                    break
                }
            return "WebkitOpacity" in d && (e = "Webkit"), "KhtmlOpacity" in d && (e = "Khtml"),
                function(a) {
                    return e + (e.length > 0 ? a.charAt(0).toUpperCase() + a.slice(1) : a)
                }
        }(),
        k = j("transform"),
        l = a("<div />", {
            style: "background:#fff"
        }).css("background-position-x") !== d,
        m = l ? function(a, b, c) {
            a.css({
                "background-position-x": b,
                "background-position-y": c
            })
        } : function(a, b, c) {
            a.css("background-position", b + " " + c)
        },
        n = l ? function(a) {
            return [a.css("background-position-x"), a.css("background-position-y")]
        } : function(a) {
            return a.css("background-position").split(" ")
        },
        o = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame || function(a) {
            setTimeout(a, 1e3 / 60)
        };
    e.prototype = {
        init: function() {
            this.options.name = f + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({
                firstLoad: !0
            }), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
        },
        _defineElements: function() {
            this.element === c.body && (this.element = b), this.$scrollElement = a(this.element), this.$element = this.element === b ? a("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== d ? a(this.options.viewportElement) : this.$scrollElement[0] === b || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
        },
        _defineGetters: function() {
            var a = this,
                b = h[a.options.scrollProperty];
            this._getScrollLeft = function() {
                return b.getLeft(a.$scrollElement)
            }, this._getScrollTop = function() {
                return b.getTop(a.$scrollElement)
            }
        },
        _defineSetters: function() {
            var b = this,
                c = h[b.options.scrollProperty],
                d = i[b.options.positionProperty],
                e = c.setLeft,
                f = c.setTop;
            this._setScrollLeft = "function" == typeof e ? function(a) {
                e(b.$scrollElement, a)
            } : a.noop, this._setScrollTop = "function" == typeof f ? function(a) {
                f(b.$scrollElement, a)
            } : a.noop, this._setPosition = d.setPosition || function(a, c, e, f, g) {
                b.options.horizontalScrolling && d.setLeft(a, c, e), b.options.verticalScrolling && d.setTop(a, f, g)
            }
        },
        _handleWindowLoadAndResize: function() {
            var c = this,
                d = a(b);
            c.options.responsive && d.bind("load." + this.name, function() {
                c.refresh()
            }), d.bind("resize." + this.name, function() {
                c._detectViewport(), c.options.responsive && c.refresh()
            })
        },
        refresh: function(c) {
            var d = this,
                e = d._getScrollLeft(),
                f = d._getScrollTop();
            c && c.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), c && c.firstLoad && /WebKit/.test(navigator.userAgent) && a(b).load(function() {
                var a = d._getScrollLeft(),
                    b = d._getScrollTop();
                d._setScrollLeft(a + 1), d._setScrollTop(b + 1), d._setScrollLeft(a), d._setScrollTop(b)
            }), this._setScrollLeft(e), this._setScrollTop(f)
        },
        _detectViewport: function() {
            var a = this.$viewportElement.offset(),
                b = null !== a && a !== d;
            this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = b ? a.top : 0, this.viewportOffsetLeft = b ? a.left : 0
        },
        _findParticles: function() {
            {
                var b = this;
                this._getScrollLeft(), this._getScrollTop()
            }
            if (this.particles !== d)
                for (var c = this.particles.length - 1; c >= 0; c--) this.particles[c].$element.data("stellar-elementIsActive", d);
            this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function() {
                var c, e, f, g, h, i, j, k, l, m = a(this),
                    n = 0,
                    o = 0,
                    p = 0,
                    q = 0;
                if (m.data("stellar-elementIsActive")) {
                    if (m.data("stellar-elementIsActive") !== this) return
                } else m.data("stellar-elementIsActive", this);
                b.options.showElement(m), m.data("stellar-startingLeft") ? (m.css("left", m.data("stellar-startingLeft")), m.css("top", m.data("stellar-startingTop"))) : (m.data("stellar-startingLeft", m.css("left")), m.data("stellar-startingTop", m.css("top"))), f = m.position().left, g = m.position().top, h = "auto" === m.css("margin-left") ? 0 : parseInt(m.css("margin-left"), 10), i = "auto" === m.css("margin-top") ? 0 : parseInt(m.css("margin-top"), 10), k = m.offset().left - h, l = m.offset().top - i, m.parents().each(function() {
                    var b = a(this);
                    return b.data("stellar-offset-parent") === !0 ? (n = p, o = q, j = b, !1) : (p += b.position().left, void(q += b.position().top))
                }), c = m.data("stellar-horizontal-offset") !== d ? m.data("stellar-horizontal-offset") : j !== d && j.data("stellar-horizontal-offset") !== d ? j.data("stellar-horizontal-offset") : b.horizontalOffset, e = m.data("stellar-vertical-offset") !== d ? m.data("stellar-vertical-offset") : j !== d && j.data("stellar-vertical-offset") !== d ? j.data("stellar-vertical-offset") : b.verticalOffset, b.particles.push({
                    $element: m,
                    $offsetParent: j,
                    isFixed: "fixed" === m.css("position"),
                    horizontalOffset: c,
                    verticalOffset: e,
                    startingPositionLeft: f,
                    startingPositionTop: g,
                    startingOffsetLeft: k,
                    startingOffsetTop: l,
                    parentOffsetLeft: n,
                    parentOffsetTop: o,
                    stellarRatio: m.data("stellar-ratio") !== d ? m.data("stellar-ratio") : 1,
                    width: m.outerWidth(!0),
                    height: m.outerHeight(!0),
                    isHidden: !1
                })
            })
        },
        _findBackgrounds: function() {
            var b, c = this,
                e = this._getScrollLeft(),
                f = this._getScrollTop();
            this.backgrounds = [], this.options.parallaxBackgrounds && (b = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (b = b.add(this.$element)), b.each(function() {
                var b, g, h, i, j, k, l, o = a(this),
                    p = n(o),
                    q = 0,
                    r = 0,
                    s = 0,
                    t = 0;
                if (o.data("stellar-backgroundIsActive")) {
                    if (o.data("stellar-backgroundIsActive") !== this) return
                } else o.data("stellar-backgroundIsActive", this);
                o.data("stellar-backgroundStartingLeft") ? m(o, o.data("stellar-backgroundStartingLeft"), o.data("stellar-backgroundStartingTop")) : (o.data("stellar-backgroundStartingLeft", p[0]), o.data("stellar-backgroundStartingTop", p[1])), h = "auto" === o.css("margin-left") ? 0 : parseInt(o.css("margin-left"), 10), i = "auto" === o.css("margin-top") ? 0 : parseInt(o.css("margin-top"), 10), j = o.offset().left - h - e, k = o.offset().top - i - f, o.parents().each(function() {
                    var b = a(this);
                    return b.data("stellar-offset-parent") === !0 ? (q = s, r = t, l = b, !1) : (s += b.position().left, void(t += b.position().top))
                }), b = o.data("stellar-horizontal-offset") !== d ? o.data("stellar-horizontal-offset") : l !== d && l.data("stellar-horizontal-offset") !== d ? l.data("stellar-horizontal-offset") : c.horizontalOffset, g = o.data("stellar-vertical-offset") !== d ? o.data("stellar-vertical-offset") : l !== d && l.data("stellar-vertical-offset") !== d ? l.data("stellar-vertical-offset") : c.verticalOffset, c.backgrounds.push({
                    $element: o,
                    $offsetParent: l,
                    isFixed: "fixed" === o.css("background-attachment"),
                    horizontalOffset: b,
                    verticalOffset: g,
                    startingValueLeft: p[0],
                    startingValueTop: p[1],
                    startingBackgroundPositionLeft: isNaN(parseInt(p[0], 10)) ? 0 : parseInt(p[0], 10),
                    startingBackgroundPositionTop: isNaN(parseInt(p[1], 10)) ? 0 : parseInt(p[1], 10),
                    startingPositionLeft: o.position().left,
                    startingPositionTop: o.position().top,
                    startingOffsetLeft: j,
                    startingOffsetTop: k,
                    parentOffsetLeft: q,
                    parentOffsetTop: r,
                    stellarRatio: o.data("stellar-background-ratio") === d ? 1 : o.data("stellar-background-ratio")
                })
            }))
        },
        _reset: function() {
            var a, b, c, d, e;
            for (e = this.particles.length - 1; e >= 0; e--) a = this.particles[e], b = a.$element.data("stellar-startingLeft"), c = a.$element.data("stellar-startingTop"), this._setPosition(a.$element, b, b, c, c), this.options.showElement(a.$element), a.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
            for (e = this.backgrounds.length - 1; e >= 0; e--) d = this.backgrounds[e], d.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), m(d.$element, d.startingValueLeft, d.startingValueTop)
        },
        destroy: function() {
            this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = a.noop, a(b).unbind("load." + this.name).unbind("resize." + this.name)
        },
        _setOffsets: function() {
            var c = this,
                d = a(b);
            d.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), d.bind("resize.horizontal-" + this.name, function() {
                c.horizontalOffset = c.options.horizontalOffset()
            })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), d.bind("resize.vertical-" + this.name, function() {
                c.verticalOffset = c.options.verticalOffset()
            })) : this.verticalOffset = this.options.verticalOffset
        },
        _repositionElements: function() {
            var a, b, c, d, e, f, g, h, i, j, k = this._getScrollLeft(),
                l = this._getScrollTop(),
                n = !0,
                o = !0;
            if (this.currentScrollLeft !== k || this.currentScrollTop !== l || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
                for (this.currentScrollLeft = k, this.currentScrollTop = l, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, j = this.particles.length - 1; j >= 0; j--) a = this.particles[j], b = a.isFixed ? 1 : 0, this.options.horizontalScrolling ? (f = (k + a.horizontalOffset + this.viewportOffsetLeft + a.startingPositionLeft - a.startingOffsetLeft + a.parentOffsetLeft) * -(a.stellarRatio + b - 1) + a.startingPositionLeft, h = f - a.startingPositionLeft + a.startingOffsetLeft) : (f = a.startingPositionLeft, h = a.startingOffsetLeft), this.options.verticalScrolling ? (g = (l + a.verticalOffset + this.viewportOffsetTop + a.startingPositionTop - a.startingOffsetTop + a.parentOffsetTop) * -(a.stellarRatio + b - 1) + a.startingPositionTop, i = g - a.startingPositionTop + a.startingOffsetTop) : (g = a.startingPositionTop, i = a.startingOffsetTop), this.options.hideDistantElements && (o = !this.options.horizontalScrolling || h + a.width > (a.isFixed ? 0 : k) && h < (a.isFixed ? 0 : k) + this.viewportWidth + this.viewportOffsetLeft, n = !this.options.verticalScrolling || i + a.height > (a.isFixed ? 0 : l) && i < (a.isFixed ? 0 : l) + this.viewportHeight + this.viewportOffsetTop), o && n ? (a.isHidden && (this.options.showElement(a.$element), a.isHidden = !1), this._setPosition(a.$element, f, a.startingPositionLeft, g, a.startingPositionTop)) : a.isHidden || (this.options.hideElement(a.$element), a.isHidden = !0);
                for (j = this.backgrounds.length - 1; j >= 0; j--) c = this.backgrounds[j], b = c.isFixed ? 0 : 1, d = this.options.horizontalScrolling ? (k + c.horizontalOffset - this.viewportOffsetLeft - c.startingOffsetLeft + c.parentOffsetLeft - c.startingBackgroundPositionLeft) * (b - c.stellarRatio) + "px" : c.startingValueLeft, e = this.options.verticalScrolling ? (l + c.verticalOffset - this.viewportOffsetTop - c.startingOffsetTop + c.parentOffsetTop - c.startingBackgroundPositionTop) * (b - c.stellarRatio) + "px" : c.startingValueTop, m(c.$element, d, e)
            }
        },
        _handleScrollEvent: function() {
            var a = this,
                b = !1,
                c = function() {
                    a._repositionElements(), b = !1
                },
                d = function() {
                    b || (o(c), b = !0)
                };
            this.$scrollElement.bind("scroll." + this.name, d), d()
        },
        _startAnimationLoop: function() {
            var a = this;
            this._animationLoop = function() {
                o(a._animationLoop), a._repositionElements()
            }, this._animationLoop()
        }
    }, a.fn[f] = function(b) {
        var c = arguments;
        return b === d || "object" == typeof b ? this.each(function() {
            a.data(this, "plugin_" + f) || a.data(this, "plugin_" + f, new e(this, b))
        }) : "string" == typeof b && "_" !== b[0] && "init" !== b ? this.each(function() {
            var d = a.data(this, "plugin_" + f);
            d instanceof e && "function" == typeof d[b] && d[b].apply(d, Array.prototype.slice.call(c, 1)), "destroy" === b && a.data(this, "plugin_" + f, null)
        }) : void 0
    }, a[f] = function() {
        var c = a(b);
        return c.stellar.apply(c, Array.prototype.slice.call(arguments, 0))
    }, a[f].scrollProperty = h, a[f].positionProperty = i, b.Stellar = e
}(jQuery, this, document);;
! function(e) {
    function t() {
        var e = location.href;
        return hashtag = -1 !== e.indexOf("#prettyPhoto") ? decodeURI(e.substring(e.indexOf("#prettyPhoto") + 1, e.length)) : !1, hashtag && (hashtag = hashtag.replace(/<|>/g, "")), hashtag
    }

    function i() {
        "undefined" != typeof theRel && (location.hash = theRel + "/" + rel_index + "/")
    }

    function p() {
        -1 !== location.href.indexOf("#prettyPhoto") && (location.hash = "prettyPhoto")
    }

    function o(e, t) {
        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var i = "[\\?&]" + e + "=([^&#]*)",
            p = new RegExp(i),
            o = p.exec(t);
        return null == o ? "" : o[1]
    }
    e.prettyPhoto = {
        version: "3.1.6"
    }, e.fn.prettyPhoto = function(a) {
        function s() {
            e(".pp_loaderIcon").hide(), projectedTop = scroll_pos.scrollTop + (I / 2 - f.containerHeight / 2), projectedTop < 0 && (projectedTop = 0), $ppt.fadeTo(settings.animation_speed, 1), $pp_pic_holder.find(".pp_content").animate({
                height: f.contentHeight,
                width: f.contentWidth
            }, settings.animation_speed), $pp_pic_holder.animate({
                top: projectedTop,
                left: j / 2 - f.containerWidth / 2 < 0 ? 0 : j / 2 - f.containerWidth / 2,
                width: f.containerWidth
            }, settings.animation_speed, function() {
                $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(f.height).width(f.width), $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed), isSet && "image" == h(pp_images[set_position]) ? $pp_pic_holder.find(".pp_hoverContainer").show() : $pp_pic_holder.find(".pp_hoverContainer").hide(), settings.allow_expand && (f.resized ? e("a.pp_expand,a.pp_contract").show() : e("a.pp_expand").hide()), !settings.autoplay_slideshow || P || v || e.prettyPhoto.startSlideshow(), settings.changepicturecallback(), v = !0
            }), m(), a.ajaxcallback()
        }

        function n(t) {
            $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden"), $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function() {
                e(".pp_loaderIcon").show(), t()
            })
        }

        function r(t) {
            t > 1 ? e(".pp_nav").show() : e(".pp_nav").hide()
        }

        function l(e, t) {
            if (resized = !1, d(e, t), imageWidth = e, imageHeight = t, (k > j || b > I) && doresize && settings.allow_resize && !$) {
                for (resized = !0, fitting = !1; !fitting;) k > j ? (imageWidth = j - 200, imageHeight = t / e * imageWidth) : b > I ? (imageHeight = I - 200, imageWidth = e / t * imageHeight) : fitting = !0, b = imageHeight, k = imageWidth;
                (k > j || b > I) && l(k, b), d(imageWidth, imageHeight)
            }
            return {
                width: Math.floor(imageWidth),
                height: Math.floor(imageHeight),
                containerHeight: Math.floor(b),
                containerWidth: Math.floor(k) + 2 * settings.horizontal_padding,
                contentHeight: Math.floor(y),
                contentWidth: Math.floor(w),
                resized: resized
            }
        }

        function d(t, i) {
            t = parseFloat(t), i = parseFloat(i), $pp_details = $pp_pic_holder.find(".pp_details"), $pp_details.width(t), detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom")), $pp_details = $pp_details.clone().addClass(settings.theme).width(t).appendTo(e("body")).css({
                position: "absolute",
                top: -1e4
            }), detailsHeight += $pp_details.height(), detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight, $pp_details.remove(), $pp_title = $pp_pic_holder.find(".ppt"), $pp_title.width(t), titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom")), $pp_title = $pp_title.clone().appendTo(e("body")).css({
                position: "absolute",
                top: -1e4
            }), titleHeight += $pp_title.height(), $pp_title.remove(), y = i + detailsHeight, w = t, b = y + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height(), k = t
        }

        function h(e) {
            return e.match(/youtube\.com\/watch/i) || e.match(/youtu\.be/i) ? "youtube" : e.match(/vimeo\.com/i) ? "vimeo" : e.match(/\b.mov\b/i) ? "quicktime" : e.match(/\b.swf\b/i) ? "flash" : e.match(/\biframe=true\b/i) ? "iframe" : e.match(/\bajax=true\b/i) ? "ajax" : e.match(/\bcustom=true\b/i) ? "custom" : "#" == e.substr(0, 1) ? "inline" : "image"
        }

        function c() {
            if (doresize && "undefined" != typeof $pp_pic_holder) {
                if (scroll_pos = _(), contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width(), projectedTop = I / 2 + scroll_pos.scrollTop - contentHeight / 2, projectedTop < 0 && (projectedTop = 0), contentHeight > I) return;
                $pp_pic_holder.css({
                    top: projectedTop,
                    left: j / 2 + scroll_pos.scrollLeft - contentwidth / 2
                })
            }
        }

        function _() {
            return self.pageYOffset ? {
                scrollTop: self.pageYOffset,
                scrollLeft: self.pageXOffset
            } : document.documentElement && document.documentElement.scrollTop ? {
                scrollTop: document.documentElement.scrollTop,
                scrollLeft: document.documentElement.scrollLeft
            } : document.body ? {
                scrollTop: document.body.scrollTop,
                scrollLeft: document.body.scrollLeft
            } : void 0
        }

        function g() {
            I = e(window).height(), j = e(window).width(), "undefined" != typeof $pp_overlay && $pp_overlay.height(e(document).height()).width(j)
        }

        function m() {
            isSet && settings.overlay_gallery && "image" == h(pp_images[set_position]) ? (itemWidth = 57, navWidth = "facebook" == settings.theme || "pp_default" == settings.theme ? 50 : 30, itemsPerPage = Math.floor((f.containerWidth - 100 - navWidth) / itemWidth), itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length, totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1, 0 == totalPage ? (navWidth = 0, $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()) : $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(), galleryWidth = itemsPerPage * itemWidth, fullGalleryWidth = pp_images.length * itemWidth, $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"), goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage, e.prettyPhoto.changeGalleryPage(goToPage), $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")) : $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")
        }

        function u() {
            if (settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href))), settings.markup = settings.markup.replace("{pp_social}", ""), e("body").append(settings.markup), $pp_pic_holder = e(".pp_pic_holder"), $ppt = e(".ppt"), $pp_overlay = e("div.pp_overlay"), isSet && settings.overlay_gallery) {
                currentGalleryPage = 0, toInject = "";
                for (var t = 0; t < pp_images.length; t++) pp_images[t].match(/\b(jpg|jpeg|png|gif)\b/gi) ? (classname = "", img_src = pp_images[t]) : (classname = "default", img_src = ""), toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
                toInject = settings.gallery_markup.replace(/{gallery}/g, toInject), $pp_pic_holder.find("#pp_full_res").after(toInject), $pp_gallery = e(".pp_pic_holder .pp_gallery"), $pp_gallery_li = $pp_gallery.find("li"), $pp_gallery.find(".pp_arrow_next").click(function() {
                    return e.prettyPhoto.changeGalleryPage("next"), e.prettyPhoto.stopSlideshow(), !1
                }), $pp_gallery.find(".pp_arrow_previous").click(function() {
                    return e.prettyPhoto.changeGalleryPage("previous"), e.prettyPhoto.stopSlideshow(), !1
                }), $pp_pic_holder.find(".pp_content").hover(function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
                }, function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
                }), itemWidth = 57, $pp_gallery_li.each(function(t) {
                    e(this).find("a").click(function() {
                        return e.prettyPhoto.changePage(t), e.prettyPhoto.stopSlideshow(), !1
                    })
                })
            }
            settings.slideshow && ($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'), $pp_pic_holder.find(".pp_nav .pp_play").click(function() {
                return e.prettyPhoto.startSlideshow(), !1
            })), $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme), $pp_overlay.css({
                opacity: 0,
                height: e(document).height(),
                width: e(window).width()
            }).bind("click", function() {
                settings.modal || e.prettyPhoto.close()
            }), e("a.pp_close").bind("click", function() {
                return e.prettyPhoto.close(), !1
            }), settings.allow_expand && e("a.pp_expand").bind("click", function() {
                return e(this).hasClass("pp_expand") ? (e(this).removeClass("pp_expand").addClass("pp_contract"), doresize = !1) : (e(this).removeClass("pp_contract").addClass("pp_expand"), doresize = !0), n(function() {
                    e.prettyPhoto.open()
                }), !1
            }), $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function() {
                return e.prettyPhoto.changePage("previous"), e.prettyPhoto.stopSlideshow(), !1
            }), $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function() {
                return e.prettyPhoto.changePage("next"), e.prettyPhoto.stopSlideshow(), !1
            }), c()
        }
        a = jQuery.extend({
            hook: "rel",
            animation_speed: "fast",
            ajaxcallback: function() {},
            slideshow: 5e3,
            autoplay_slideshow: !1,
            opacity: .8,
            show_title: !0,
            allow_resize: !0,
            allow_expand: !0,
            default_width: 500,
            default_height: 344,
            counter_separator_label: "/",
            theme: "pp_default",
            horizontal_padding: 20,
            hideflash: !1,
            wmode: "opaque",
            autoplay: !0,
            modal: !1,
            deeplinking: !0,
            overlay_gallery: !0,
            overlay_gallery_max: 30,
            keyboard_shortcuts: !0,
            changepicturecallback: function() {},
            callback: function() {},
            ie6_fallback: !0,
            markup: '<div class="pp_pic_holder">       <div class="ppt">&nbsp;</div>       <div class="pp_top">        <div class="pp_left"></div>        <div class="pp_middle"></div>        <div class="pp_right"></div>       </div>       <div class="pp_content_container">        <div class="pp_left">        <div class="pp_right">         <div class="pp_content">          <div class="pp_loaderIcon"></div>          <div class="pp_fade">           <a href="#" class="pp_expand" title="Expand the image">Expand</a>           <div class="pp_hoverContainer">            <a class="pp_next" href="#">next</a>            <a class="pp_previous" href="#">previous</a>           </div>           <div id="pp_full_res"></div>           <div class="pp_details">            <div class="pp_nav">             <a href="#" class="pp_arrow_previous">Previous</a>             <p class="currentTextHolder">0/0</p>             <a href="#" class="pp_arrow_next">Next</a>            </div>            <p class="pp_description"></p>            <div class="pp_social">{pp_social}</div>            <a class="pp_close" href="#">Close</a>           </div>          </div>         </div>        </div>        </div>       </div>       <div class="pp_bottom">        <div class="pp_left"></div>        <div class="pp_middle"></div>        <div class="pp_right"></div>       </div>      </div>      <div class="pp_overlay"></div>',
            gallery_markup: '<div class="pp_gallery">         <a href="#" class="pp_arrow_previous">Previous</a>         <div>          <ul>           {gallery}          </ul>         </div>         <a href="#" class="pp_arrow_next">Next</a>        </div>',
            image_markup: '<img id="fullResImage" src="{path}" />',
            flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
            quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
            iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
            inline_markup: '<div class="pp_inline">{content}</div>',
            custom_markup: "",
            social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
        }, a);
        var f, v, y, w, b, k, P, x = this,
            $ = !1,
            I = e(window).height(),
            j = e(window).width();
        return doresize = !0, scroll_pos = _(), e(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function() {
            c(), g()
        }), a.keyboard_shortcuts && e(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function(t) {
            if ("undefined" != typeof $pp_pic_holder && $pp_pic_holder.is(":visible")) switch (t.keyCode) {
                case 37:
                    e.prettyPhoto.changePage("previous"), t.preventDefault();
                    break;
                case 39:
                    e.prettyPhoto.changePage("next"), t.preventDefault();
                    break;
                case 27:
                    settings.modal || e.prettyPhoto.close(), t.preventDefault()
            }
        }), e.prettyPhoto.initialize = function() {
            return settings = a, "pp_default" == settings.theme && (settings.horizontal_padding = 16), theRel = e(this).attr(settings.hook), galleryRegExp = /\[(?:.*)\]/, isSet = galleryRegExp.exec(theRel) ? !0 : !1, pp_images = isSet ? jQuery.map(x, function(t) {
                return -1 != e(t).attr(settings.hook).indexOf(theRel) ? e(t).attr("href") : void 0
            }) : e.makeArray(e(this).attr("href")), pp_titles = isSet ? jQuery.map(x, function(t) {
                return -1 != e(t).attr(settings.hook).indexOf(theRel) ? e(t).find("img").attr("alt") ? e(t).find("img").attr("alt") : "" : void 0
            }) : e.makeArray(e(this).find("img").attr("alt")), pp_descriptions = isSet ? jQuery.map(x, function(t) {
                return -1 != e(t).attr(settings.hook).indexOf(theRel) ? e(t).attr("title") ? e(t).attr("title") : "" : void 0
            }) : e.makeArray(e(this).attr("title")), pp_images.length > settings.overlay_gallery_max && (settings.overlay_gallery = !1), set_position = jQuery.inArray(e(this).attr("href"), pp_images), rel_index = isSet ? set_position : e("a[" + settings.hook + "^='" + theRel + "']").index(e(this)), u(this), settings.allow_resize && e(window).bind("scroll.prettyphoto", function() {
                c()
            }), e.prettyPhoto.open(), !1
        }, e.prettyPhoto.open = function(t) {
            return "undefined" == typeof settings && (settings = a, pp_images = e.makeArray(arguments[0]), pp_titles = e.makeArray(arguments[1] ? arguments[1] : ""), pp_descriptions = e.makeArray(arguments[2] ? arguments[2] : ""), isSet = pp_images.length > 1 ? !0 : !1, set_position = arguments[3] ? arguments[3] : 0, u(t.target)), settings.hideflash && e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden"), r(e(pp_images).size()), e(".pp_loaderIcon").show(), settings.deeplinking && i(), settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)), $pp_pic_holder.find(".pp_social").html(facebook_like_link)), $ppt.is(":hidden") && $ppt.css("opacity", 0).show(), $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity), $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + e(pp_images).size()), "undefined" != typeof pp_descriptions[set_position] && "" != pp_descriptions[set_position] ? $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])) : $pp_pic_holder.find(".pp_description").hide(), movie_width = parseFloat(o("width", pp_images[set_position])) ? o("width", pp_images[set_position]) : settings.default_width.toString(), movie_height = parseFloat(o("height", pp_images[set_position])) ? o("height", pp_images[set_position]) : settings.default_height.toString(), $ = !1, -1 != movie_height.indexOf("%") && (movie_height = parseFloat(e(window).height() * parseFloat(movie_height) / 100 - 150), $ = !0), -1 != movie_width.indexOf("%") && (movie_width = parseFloat(e(window).width() * parseFloat(movie_width) / 100 - 150), $ = !0), $pp_pic_holder.fadeIn(function() {
                switch ($ppt.html(settings.show_title && "" != pp_titles[set_position] && "undefined" != typeof pp_titles[set_position] ? unescape(pp_titles[set_position]) : "&nbsp;"), imgPreloader = "", skipInjection = !1, h(pp_images[set_position])) {
                    case "image":
                        imgPreloader = new Image, nextImage = new Image, isSet && set_position < e(pp_images).size() - 1 && (nextImage.src = pp_images[set_position + 1]), prevImage = new Image, isSet && pp_images[set_position - 1] && (prevImage.src = pp_images[set_position - 1]), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]), imgPreloader.onload = function() {
                            f = l(imgPreloader.width, imgPreloader.height), s()
                        }, imgPreloader.onerror = function() {
                            alert("Image cannot be loaded. Make sure the path is correct and image exist."), e.prettyPhoto.close()
                        }, imgPreloader.src = pp_images[set_position];
                        break;
                    case "youtube":
                        f = l(movie_width, movie_height), movie_id = o("v", pp_images[set_position]), "" == movie_id && (movie_id = pp_images[set_position].split("youtu.be/"), movie_id = movie_id[1], movie_id.indexOf("?") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("?"))), movie_id.indexOf("&") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("&")))), movie = "http://www.youtube.com/embed/" + movie_id, movie += o("rel", pp_images[set_position]) ? "?rel=" + o("rel", pp_images[set_position]) : "?rel=1", settings.autoplay && (movie += "&autoplay=1"), toInject = settings.iframe_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
                        break;
                    case "vimeo":
                        f = l(movie_width, movie_height), movie_id = pp_images[set_position];
                        var t = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/,
                            i = movie_id.match(t);
                        movie = "http://player.vimeo.com/video/" + i[3] + "?title=0&byline=0&portrait=0", settings.autoplay && (movie += "&autoplay=1;"), vimeo_width = f.width + "/embed/?moog_width=" + f.width, toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, f.height).replace(/{path}/g, movie);
                        break;
                    case "quicktime":
                        f = l(movie_width, movie_height), f.height += 15, f.contentHeight += 15, f.containerHeight += 15, toInject = settings.quicktime_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
                        break;
                    case "flash":
                        f = l(movie_width, movie_height), flash_vars = pp_images[set_position], flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length), filename = pp_images[set_position], filename = filename.substring(0, filename.indexOf("?")), toInject = settings.flash_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
                        break;
                    case "iframe":
                        f = l(movie_width, movie_height), frame_url = pp_images[set_position], frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1), toInject = settings.iframe_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{path}/g, frame_url);
                        break;
                    case "ajax":
                        doresize = !1, f = l(movie_width, movie_height), doresize = !0, skipInjection = !0, e.get(pp_images[set_position], function(e) {
                            toInject = settings.inline_markup.replace(/{content}/g, e), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, s()
                        });
                        break;
                    case "custom":
                        f = l(movie_width, movie_height), toInject = settings.custom_markup;
                        break;
                    case "inline":
                        myClone = e(pp_images[set_position]).clone().append('<br clear="all" />').css({
                            width: settings.default_width
                        }).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(e("body")).show(), doresize = !1, f = l(e(myClone).width(), e(myClone).height()), doresize = !0, e(myClone).remove(), toInject = settings.inline_markup.replace(/{content}/g, e(pp_images[set_position]).html())
                }
                imgPreloader || skipInjection || ($pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, s())
            }), !1
        }, e.prettyPhoto.changePage = function(t) {
            currentGalleryPage = 0, "previous" == t ? (set_position--, set_position < 0 && (set_position = e(pp_images).size() - 1)) : "next" == t ? (set_position++, set_position > e(pp_images).size() - 1 && (set_position = 0)) : set_position = t, rel_index = set_position, doresize || (doresize = !0), settings.allow_expand && e(".pp_contract").removeClass("pp_contract").addClass("pp_expand"), n(function() {
                e.prettyPhoto.open()
            })
        }, e.prettyPhoto.changeGalleryPage = function(e) {
            "next" == e ? (currentGalleryPage++, currentGalleryPage > totalPage && (currentGalleryPage = 0)) : "previous" == e ? (currentGalleryPage--, currentGalleryPage < 0 && (currentGalleryPage = totalPage)) : currentGalleryPage = e, slide_speed = "next" == e || "previous" == e ? settings.animation_speed : 0, slide_to = currentGalleryPage * itemsPerPage * itemWidth, $pp_gallery.find("ul").animate({
                left: -slide_to
            }, slide_speed)
        }, e.prettyPhoto.startSlideshow = function() {
            "undefined" == typeof P ? ($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function() {
                return e.prettyPhoto.stopSlideshow(), !1
            }), P = setInterval(e.prettyPhoto.startSlideshow, settings.slideshow)) : e.prettyPhoto.changePage("next")
        }, e.prettyPhoto.stopSlideshow = function() {
            $pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function() {
                return e.prettyPhoto.startSlideshow(), !1
            }), clearInterval(P), P = void 0
        }, e.prettyPhoto.close = function() {
            $pp_overlay.is(":animated") || (e.prettyPhoto.stopSlideshow(), $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden"), e("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function() {
                e(this).remove()
            }), $pp_overlay.fadeOut(settings.animation_speed, function() {
                settings.hideflash && e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible"), e(this).remove(), e(window).unbind("scroll.prettyphoto"), p(), settings.callback(), doresize = !0, v = !1, delete settings
            }))
        }, !pp_alreadyInitialized && t() && (pp_alreadyInitialized = !0, hashIndex = t(), hashRel = hashIndex, hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1), hashRel = hashRel.substring(0, hashRel.indexOf("/")), setTimeout(function() {
            e("a[" + a.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
        }, 50)), this.unbind("click.prettyphoto").bind("click.prettyphoto", e.prettyPhoto.initialize)
    }
}(jQuery);
var pp_alreadyInitialized = !1;;
! function t(e, n, r) {
    function o(l, s) {
        if (!n[l]) {
            if (!e[l]) {
                var a = "function" == typeof require && require;
                if (!s && a) return a(l, !0);
                if (i) return i(l, !0);
                var c = new Error("Cannot find module '" + l + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var u = n[l] = {
                exports: {}
            };
            e[l][0].call(u.exports, function(t) {
                var n = e[l][1][t];
                return o(n ? n : t)
            }, u, u.exports, t, e, n, r)
        }
        return n[l].exports
    }
    for (var i = "function" == typeof require && require, l = 0; l < r.length; l++) o(r[l]);
    return o
}({
    1: [function(t, e) {
        "use strict";

        function n(t) {
            t.fn.perfectScrollbar = function(e) {
                return this.each(function() {
                    if ("object" == typeof e || "undefined" == typeof e) {
                        var n = e;
                        o.get(this) || r.initialize(this, n)
                    } else {
                        var i = e;
                        "update" === i ? r.update(this) : "destroy" === i && r.destroy(this)
                    }
                    return t(this)
                })
            }
        }
        var r = t("../main"),
            o = t("../plugin/instances");
        if ("function" == typeof define && define.amd) define(["jquery"], n);
        else {
            var i = window.jQuery ? window.jQuery : window.$;
            "undefined" != typeof i && n(i)
        }
        e.exports = n
    }, {
        "../main": 7,
        "../plugin/instances": 18
    }],
    2: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            var n = t.className.split(" ");
            n.indexOf(e) < 0 && n.push(e), t.className = n.join(" ")
        }

        function o(t, e) {
            var n = t.className.split(" "),
                r = n.indexOf(e);
            r >= 0 && n.splice(r, 1), t.className = n.join(" ")
        }
        n.add = function(t, e) {
            t.classList ? t.classList.add(e) : r(t, e)
        }, n.remove = function(t, e) {
            t.classList ? t.classList.remove(e) : o(t, e)
        }, n.list = function(t) {
            return t.classList ? t.classList : t.className.split(" ")
        }
    }, {}],
    3: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            return window.getComputedStyle(t)[e]
        }

        function o(t, e, n) {
            return "number" == typeof n && (n = n.toString() + "px"), t.style[e] = n, t
        }

        function i(t, e) {
            for (var n in e) {
                var r = e[n];
                "number" == typeof r && (r = r.toString() + "px"), t.style[n] = r
            }
            return t
        }
        n.e = function(t, e) {
            var n = document.createElement(t);
            return n.className = e, n
        }, n.appendTo = function(t, e) {
            return e.appendChild(t), t
        }, n.css = function(t, e, n) {
            return "object" == typeof e ? i(t, e) : "undefined" == typeof n ? r(t, e) : o(t, e, n)
        }, n.matches = function(t, e) {
            return "undefined" != typeof t.matches ? t.matches(e) : "undefined" != typeof t.matchesSelector ? t.matchesSelector(e) : "undefined" != typeof t.webkitMatchesSelector ? t.webkitMatchesSelector(e) : "undefined" != typeof t.mozMatchesSelector ? t.mozMatchesSelector(e) : "undefined" != typeof t.msMatchesSelector ? t.msMatchesSelector(e) : void 0
        }, n.remove = function(t) {
            "undefined" != typeof t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
        }
    }, {}],
    4: [function(t, e) {
        "use strict";
        var n = function(t) {
            this.element = t, this.events = {}
        };
        n.prototype.bind = function(t, e) {
            "undefined" == typeof this.events[t] && (this.events[t] = []), this.events[t].push(e), this.element.addEventListener(t, e, !1)
        }, n.prototype.unbind = function(t, e) {
            var n = "undefined" != typeof e;
            this.events[t] = this.events[t].filter(function(r) {
                return n && r !== e ? !0 : (this.element.removeEventListener(t, r, !1), !1)
            }, this)
        }, n.prototype.unbindAll = function() {
            for (var t in this.events) this.unbind(t)
        };
        var r = function() {
            this.eventElements = []
        };
        r.prototype.eventElement = function(t) {
            var e = this.eventElements.filter(function(e) {
                return e.element === t
            })[0];
            return "undefined" == typeof e && (e = new n(t), this.eventElements.push(e)), e
        }, r.prototype.bind = function(t, e, n) {
            this.eventElement(t).bind(e, n)
        }, r.prototype.unbind = function(t, e, n) {
            this.eventElement(t).unbind(e, n)
        }, r.prototype.unbindAll = function() {
            for (var t = 0; t < this.eventElements.length; t++) this.eventElements[t].unbindAll()
        }, r.prototype.once = function(t, e, n) {
            var r = this.eventElement(t),
                o = function(t) {
                    r.unbind(e, o), n(t)
                };
            r.bind(e, o)
        }, e.exports = r
    }, {}],
    5: [function(t, e) {
        "use strict";
        e.exports = function() {
            function t() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }
            return function() {
                return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
            }
        }()
    }, {}],
    6: [function(t, e, n) {
        "use strict";
        var r = t("./class"),
            o = t("./dom");
        n.toInt = function(t) {
            return "string" == typeof t ? parseInt(t, 10) : ~~t
        }, n.clone = function(t) {
            if (null === t) return null;
            if ("object" == typeof t) {
                var e = {};
                for (var n in t) e[n] = this.clone(t[n]);
                return e
            }
            return t
        }, n.extend = function(t, e) {
            var n = this.clone(t);
            for (var r in e) n[r] = this.clone(e[r]);
            return n
        }, n.isEditable = function(t) {
            return o.matches(t, "input,[contenteditable]") || o.matches(t, "select,[contenteditable]") || o.matches(t, "textarea,[contenteditable]") || o.matches(t, "button,[contenteditable]")
        }, n.removePsClasses = function(t) {
            for (var e = r.list(t), n = 0; n < e.length; n++) {
                var o = e[n];
                0 === o.indexOf("ps-") && r.remove(t, o)
            }
        }, n.outerWidth = function(t) {
            return this.toInt(o.css(t, "width")) + this.toInt(o.css(t, "paddingLeft")) + this.toInt(o.css(t, "paddingRight")) + this.toInt(o.css(t, "borderLeftWidth")) + this.toInt(o.css(t, "borderRightWidth"))
        }, n.startScrolling = function(t, e) {
            r.add(t, "ps-in-scrolling"), "undefined" != typeof e ? r.add(t, "ps-" + e) : (r.add(t, "ps-x"), r.add(t, "ps-y"))
        }, n.stopScrolling = function(t, e) {
            r.remove(t, "ps-in-scrolling"), "undefined" != typeof e ? r.remove(t, "ps-" + e) : (r.remove(t, "ps-x"), r.remove(t, "ps-y"))
        }, n.env = {
            isWebKit: "WebkitAppearance" in document.documentElement.style,
            supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            supportsIePointer: null !== window.navigator.msMaxTouchPoints
        }
    }, {
        "./class": 2,
        "./dom": 3
    }],
    7: [function(t, e) {
        "use strict";
        var n = t("./plugin/destroy"),
            r = t("./plugin/initialize"),
            o = t("./plugin/update");
        e.exports = {
            initialize: r,
            update: o,
            destroy: n
        }
    }, {
        "./plugin/destroy": 9,
        "./plugin/initialize": 17,
        "./plugin/update": 20
    }],
    8: [function(t, e) {
        "use strict";
        e.exports = {
            wheelSpeed: 1,
            wheelPropagation: !1,
            swipePropagation: !0,
            minScrollbarLength: null,
            maxScrollbarLength: null,
            useBothWheelAxes: !1,
            useKeyboard: !0,
            suppressScrollX: !1,
            suppressScrollY: !1,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0
        }
    }, {}],
    9: [function(t, e) {
        "use strict";
        var n = t("../lib/dom"),
            r = t("../lib/helper"),
            o = t("./instances");
        e.exports = function(t) {
            var e = o.get(t);
            e.event.unbindAll(), n.remove(e.scrollbarX), n.remove(e.scrollbarY), n.remove(e.scrollbarXRail), n.remove(e.scrollbarYRail), r.removePsClasses(t), o.remove(t)
        }
    }, {
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18
    }],
    10: [function(t, e) {
        "use strict";

        function n(t, e) {
            function n(t) {
                return t.getBoundingClientRect()
            }
            var o = window.Event.prototype.stopPropagation.bind;
            e.event.bind(e.scrollbarY, "click", o), e.event.bind(e.scrollbarYRail, "click", function(o) {
                var l = r.toInt(e.scrollbarYHeight / 2),
                    s = o.pageY - n(e.scrollbarYRail).top - l,
                    a = e.containerHeight - e.scrollbarYHeight,
                    c = s / a;
                0 > c ? c = 0 : c > 1 && (c = 1), t.scrollTop = (e.contentHeight - e.containerHeight) * c, i(t)
            }), e.event.bind(e.scrollbarX, "click", o), e.event.bind(e.scrollbarXRail, "click", function(o) {
                var l = r.toInt(e.scrollbarXWidth / 2),
                    s = o.pageX - n(e.scrollbarXRail).left - l;
                console.log(o.pageX, e.scrollbarXRail.offsetLeft);
                var a = e.containerWidth - e.scrollbarXWidth,
                    c = s / a;
                0 > c ? c = 0 : c > 1 && (c = 1), t.scrollLeft = (e.contentWidth - e.containerWidth) * c, i(t)
            })
        }
        var r = t("../../lib/helper"),
            o = t("../instances"),
            i = t("../update-geometry");
        e.exports = function(t) {
            var e = o.get(t);
            n(t, e)
        }
    }, {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19
    }],
    11: [function(t, e) {
        "use strict";

        function n(t, e) {
            function n(n) {
                var o = r + n,
                    l = e.containerWidth - e.scrollbarXWidth;
                e.scrollbarXLeft = 0 > o ? 0 : o > l ? l : o;
                var s = i.toInt(e.scrollbarXLeft * (e.contentWidth - e.containerWidth) / (e.containerWidth - e.scrollbarXWidth));
                t.scrollLeft = s
            }
            var r = null,
                l = null,
                a = function(e) {
                    n(e.pageX - l), s(t), e.stopPropagation(), e.preventDefault()
                },
                c = function() {
                    i.stopScrolling(t, "x"), e.event.unbind(e.ownerDocument, "mousemove", a)
                };
            e.event.bind(e.scrollbarX, "mousedown", function(n) {
                l = n.pageX, r = i.toInt(o.css(e.scrollbarX, "left")), i.startScrolling(t, "x"), e.event.bind(e.ownerDocument, "mousemove", a), e.event.once(e.ownerDocument, "mouseup", c), n.stopPropagation(), n.preventDefault()
            })
        }

        function r(t, e) {
            function n(n) {
                var o = r + n,
                    l = e.containerHeight - e.scrollbarYHeight;
                e.scrollbarYTop = 0 > o ? 0 : o > l ? l : o;
                var s = i.toInt(e.scrollbarYTop * (e.contentHeight - e.containerHeight) / (e.containerHeight - e.scrollbarYHeight));
                t.scrollTop = s
            }
            var r = null,
                l = null,
                a = function(e) {
                    n(e.pageY - l), s(t), e.stopPropagation(), e.preventDefault()
                },
                c = function() {
                    i.stopScrolling(t, "y"), e.event.unbind(e.ownerDocument, "mousemove", a)
                };
            e.event.bind(e.scrollbarY, "mousedown", function(n) {
                l = n.pageY, r = i.toInt(o.css(e.scrollbarY, "top")), i.startScrolling(t, "y"), e.event.bind(e.ownerDocument, "mousemove", a), e.event.once(e.ownerDocument, "mouseup", c), n.stopPropagation(), n.preventDefault()
            })
        }
        var o = t("../../lib/dom"),
            i = t("../../lib/helper"),
            l = t("../instances"),
            s = t("../update-geometry");
        e.exports = function(t) {
            var e = l.get(t);
            n(t, e), r(t, e)
        }
    }, {
        "../../lib/dom": 3,
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19
    }],
    12: [function(t, e) {
        "use strict";

        function n(t, e) {
            function n(n, r) {
                var o = t.scrollTop;
                if (0 === n) {
                    if (!e.scrollbarYActive) return !1;
                    if (0 === o && r > 0 || o >= e.contentHeight - e.containerHeight && 0 > r) return !e.settings.wheelPropagation
                }
                var i = t.scrollLeft;
                if (0 === r) {
                    if (!e.scrollbarXActive) return !1;
                    if (0 === i && 0 > n || i >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation
                }
                return !0
            }
            var o = !1;
            e.event.bind(t, "mouseenter", function() {
                o = !0
            }), e.event.bind(t, "mouseleave", function() {
                o = !1
            });
            var l = !1;
            e.event.bind(e.ownerDocument, "keydown", function(s) {
                if ((!s.isDefaultPrevented || !s.isDefaultPrevented()) && o) {
                    var a = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
                    if (a) {
                        for (; a.shadowRoot;) a = a.shadowRoot.activeElement;
                        if (r.isEditable(a)) return
                    }
                    var c = 0,
                        u = 0;
                    switch (s.which) {
                        case 37:
                            c = -30;
                            break;
                        case 38:
                            u = 30;
                            break;
                        case 39:
                            c = 30;
                            break;
                        case 40:
                            u = -30;
                            break;
                        case 33:
                            u = 90;
                            break;
                        case 32:
                        case 34:
                            u = -90;
                            break;
                        case 35:
                            u = s.ctrlKey ? -e.contentHeight : -e.containerHeight;
                            break;
                        case 36:
                            u = s.ctrlKey ? t.scrollTop : e.containerHeight;
                            break;
                        default:
                            return
                    }
                    t.scrollTop = t.scrollTop - u, t.scrollLeft = t.scrollLeft + c, i(t), l = n(c, u), l && s.preventDefault()
                }
            })
        }
        var r = t("../../lib/helper"),
            o = t("../instances"),
            i = t("../update-geometry");
        e.exports = function(t) {
            var e = o.get(t);
            n(t, e)
        }
    }, {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19
    }],
    13: [function(t, e) {
        "use strict";

        function n(t, e) {
            function n(n, r) {
                var o = t.scrollTop;
                if (0 === n) {
                    if (!e.scrollbarYActive) return !1;
                    if (0 === o && r > 0 || o >= e.contentHeight - e.containerHeight && 0 > r) return !e.settings.wheelPropagation
                }
                var i = t.scrollLeft;
                if (0 === r) {
                    if (!e.scrollbarXActive) return !1;
                    if (0 === i && 0 > n || i >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation
                }
                return !0
            }

            function o(t) {
                var e = t.deltaX,
                    n = -1 * t.deltaY;
                return ("undefined" == typeof e || "undefined" == typeof n) && (e = -1 * t.wheelDeltaX / 6, n = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, n *= 10), e !== e && n !== n && (e = 0, n = t.wheelDelta), [e, n]
            }

            function l(e, n) {
                var r = t.querySelector("textarea:hover");
                if (r) {
                    var o = r.scrollHeight - r.clientHeight;
                    if (o > 0 && !(0 === r.scrollTop && n > 0 || r.scrollTop === o && 0 > n)) return !0;
                    var i = r.scrollLeft - r.clientWidth;
                    if (i > 0 && !(0 === r.scrollLeft && 0 > e || r.scrollLeft === i && e > 0)) return !0
                }
                return !1
            }

            function s(s) {
                if (r.env.isWebKit || !t.querySelector("select:focus")) {
                    var c = o(s),
                        u = c[0],
                        d = c[1];
                    l(u, d) || (a = !1, e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (t.scrollTop = d ? t.scrollTop - d * e.settings.wheelSpeed : t.scrollTop + u * e.settings.wheelSpeed, a = !0) : e.scrollbarXActive && !e.scrollbarYActive && (t.scrollLeft = u ? t.scrollLeft + u * e.settings.wheelSpeed : t.scrollLeft - d * e.settings.wheelSpeed, a = !0) : (t.scrollTop = t.scrollTop - d * e.settings.wheelSpeed, t.scrollLeft = t.scrollLeft + u * e.settings.wheelSpeed), i(t), a = a || n(u, d), a && (s.stopPropagation(), s.preventDefault()))
                }
            }
            var a = !1;
            "undefined" != typeof window.onwheel ? e.event.bind(t, "wheel", s) : "undefined" != typeof window.onmousewheel && e.event.bind(t, "mousewheel", s)
        }
        var r = t("../../lib/helper"),
            o = t("../instances"),
            i = t("../update-geometry");
        e.exports = function(t) {
            var e = o.get(t);
            n(t, e)
        }
    }, {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19
    }],
    14: [function(t, e) {
        "use strict";

        function n(t, e) {
            e.event.bind(t, "scroll", function() {
                o(t)
            })
        }
        var r = t("../instances"),
            o = t("../update-geometry");
        e.exports = function(t) {
            var e = r.get(t);
            n(t, e)
        }
    }, {
        "../instances": 18,
        "../update-geometry": 19
    }],
    15: [function(t, e) {
        "use strict";

        function n(t, e) {
            function n() {
                var t = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
                return 0 === t.toString().length ? null : t.getRangeAt(0).commonAncestorContainer
            }

            function l() {
                a || (a = setInterval(function() {
                    return o.get(t) ? (t.scrollTop = t.scrollTop + c.top, t.scrollLeft = t.scrollLeft + c.left, void i(t)) : void clearInterval(a)
                }, 50))
            }

            function s() {
                a && (clearInterval(a), a = null), r.stopScrolling(t)
            }
            var a = null,
                c = {
                    top: 0,
                    left: 0
                },
                u = !1;
            e.event.bind(e.ownerDocument, "selectionchange", function() {
                t.contains(n()) ? u = !0 : (u = !1, s())
            }), e.event.bind(window, "mouseup", function() {
                u && (u = !1, s())
            }), e.event.bind(window, "mousemove", function(e) {
                if (u) {
                    var n = {
                            x: e.pageX,
                            y: e.pageY
                        },
                        o = {
                            left: t.offsetLeft,
                            right: t.offsetLeft + t.offsetWidth,
                            top: t.offsetTop,
                            bottom: t.offsetTop + t.offsetHeight
                        };
                    n.x < o.left + 3 ? (c.left = -5, r.startScrolling(t, "x")) : n.x > o.right - 3 ? (c.left = 5, r.startScrolling(t, "x")) : c.left = 0, n.y < o.top + 3 ? (c.top = o.top + 3 - n.y < 5 ? -5 : -20, r.startScrolling(t, "y")) : n.y > o.bottom - 3 ? (c.top = n.y - o.bottom + 3 < 5 ? 5 : 20, r.startScrolling(t, "y")) : c.top = 0, 0 === c.top && 0 === c.left ? s() : l()
                }
            })
        }
        var r = t("../../lib/helper"),
            o = t("../instances"),
            i = t("../update-geometry");
        e.exports = function(t) {
            var e = o.get(t);
            n(t, e)
        }
    }, {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19
    }],
    16: [function(t, e) {
        "use strict";

        function n(t, e, n, i) {
            function l(n, r) {
                var o = t.scrollTop,
                    i = t.scrollLeft,
                    l = Math.abs(n),
                    s = Math.abs(r);
                if (s > l) {
                    if (0 > r && o === e.contentHeight - e.containerHeight || r > 0 && 0 === o) return !e.settings.swipePropagation
                } else if (l > s && (0 > n && i === e.contentWidth - e.containerWidth || n > 0 && 0 === i)) return !e.settings.swipePropagation;
                return !0
            }

            function s(e, n) {
                t.scrollTop = t.scrollTop - n, t.scrollLeft = t.scrollLeft - e, o(t)
            }

            function a() {
                w = !0
            }

            function c() {
                w = !1
            }

            function u(t) {
                return t.targetTouches ? t.targetTouches[0] : t
            }

            function d(t) {
                return t.targetTouches && 1 === t.targetTouches.length ? !0 : t.pointerType && "mouse" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_MOUSE ? !0 : !1
            }

            function p(t) {
                if (d(t)) {
                    y = !0;
                    var e = u(t);
                    b.pageX = e.pageX, b.pageY = e.pageY, g = (new Date).getTime(), null !== m && clearInterval(m), t.stopPropagation()
                }
            }

            function f(t) {
                if (!w && y && d(t)) {
                    var e = u(t),
                        n = {
                            pageX: e.pageX,
                            pageY: e.pageY
                        },
                        r = n.pageX - b.pageX,
                        o = n.pageY - b.pageY;
                    s(r, o), b = n;
                    var i = (new Date).getTime(),
                        a = i - g;
                    a > 0 && (v.x = r / a, v.y = o / a, g = i), l(r, o) && (t.stopPropagation(), t.preventDefault())
                }
            }

            function h() {
                !w && y && (y = !1, clearInterval(m), m = setInterval(function() {
                    return r.get(t) ? Math.abs(v.x) < .01 && Math.abs(v.y) < .01 ? void clearInterval(m) : (s(30 * v.x, 30 * v.y), v.x *= .8, void(v.y *= .8)) : void clearInterval(m)
                }, 10))
            }
            var b = {},
                g = 0,
                v = {},
                m = null,
                w = !1,
                y = !1;
            n && (e.event.bind(window, "touchstart", a), e.event.bind(window, "touchend", c), e.event.bind(t, "touchstart", p), e.event.bind(t, "touchmove", f), e.event.bind(t, "touchend", h)), i && (window.PointerEvent ? (e.event.bind(window, "pointerdown", a), e.event.bind(window, "pointerup", c), e.event.bind(t, "pointerdown", p), e.event.bind(t, "pointermove", f), e.event.bind(t, "pointerup", h)) : window.MSPointerEvent && (e.event.bind(window, "MSPointerDown", a), e.event.bind(window, "MSPointerUp", c), e.event.bind(t, "MSPointerDown", p), e.event.bind(t, "MSPointerMove", f), e.event.bind(t, "MSPointerUp", h)))
        }
        var r = t("../instances"),
            o = t("../update-geometry");
        e.exports = function(t, e, o) {
            var i = r.get(t);
            n(t, i, e, o)
        }
    }, {
        "../instances": 18,
        "../update-geometry": 19
    }],
    17: [function(t, e) {
        "use strict";
        var n = t("../lib/class"),
            r = t("../lib/helper"),
            o = t("./instances"),
            i = t("./update-geometry"),
            l = t("./handler/click-rail"),
            s = t("./handler/drag-scrollbar"),
            a = t("./handler/keyboard"),
            c = t("./handler/mouse-wheel"),
            u = t("./handler/native-scroll"),
            d = t("./handler/selection"),
            p = t("./handler/touch");
        e.exports = function(t, e) {
            e = "object" == typeof e ? e : {}, n.add(t, "ps-container");
            var f = o.add(t);
            f.settings = r.extend(f.settings, e), l(t), s(t), c(t), u(t), d(t), (r.env.supportsTouch || r.env.supportsIePointer) && p(t, r.env.supportsTouch, r.env.supportsIePointer), f.settings.useKeyboard && a(t), i(t)
        }
    }, {
        "../lib/class": 2,
        "../lib/helper": 6,
        "./handler/click-rail": 10,
        "./handler/drag-scrollbar": 11,
        "./handler/keyboard": 12,
        "./handler/mouse-wheel": 13,
        "./handler/native-scroll": 14,
        "./handler/selection": 15,
        "./handler/touch": 16,
        "./instances": 18,
        "./update-geometry": 19
    }],
    18: [function(t, e, n) {
        "use strict";

        function r(t) {
            var e = this;
            e.settings = d.clone(a), e.containerWidth = null, e.containerHeight = null, e.contentWidth = null, e.contentHeight = null, e.isRtl = "rtl" === s.css(t, "direction"), e.event = new c, e.ownerDocument = t.ownerDocument || document, e.scrollbarXRail = s.appendTo(s.e("div", "ps-scrollbar-x-rail"), t), e.scrollbarX = s.appendTo(s.e("div", "ps-scrollbar-x"), e.scrollbarXRail), e.scrollbarXActive = null, e.scrollbarXWidth = null, e.scrollbarXLeft = null, e.scrollbarXBottom = d.toInt(s.css(e.scrollbarXRail, "bottom")), e.isScrollbarXUsingBottom = e.scrollbarXBottom === e.scrollbarXBottom, e.scrollbarXTop = e.isScrollbarXUsingBottom ? null : d.toInt(s.css(e.scrollbarXRail, "top")), e.railBorderXWidth = d.toInt(s.css(e.scrollbarXRail, "borderLeftWidth")) + d.toInt(s.css(e.scrollbarXRail, "borderRightWidth")), e.railXMarginWidth = d.toInt(s.css(e.scrollbarXRail, "marginLeft")) + d.toInt(s.css(e.scrollbarXRail, "marginRight")), e.railXWidth = null, e.scrollbarYRail = s.appendTo(s.e("div", "ps-scrollbar-y-rail"), t), e.scrollbarY = s.appendTo(s.e("div", "ps-scrollbar-y"), e.scrollbarYRail), e.scrollbarYActive = null, e.scrollbarYHeight = null, e.scrollbarYTop = null, e.scrollbarYRight = d.toInt(s.css(e.scrollbarYRail, "right")), e.isScrollbarYUsingRight = e.scrollbarYRight === e.scrollbarYRight, e.scrollbarYLeft = e.isScrollbarYUsingRight ? null : d.toInt(s.css(e.scrollbarYRail, "left")), e.scrollbarYOuterWidth = e.isRtl ? d.outerWidth(e.scrollbarY) : null, e.railBorderYWidth = d.toInt(s.css(e.scrollbarYRail, "borderTopWidth")) + d.toInt(s.css(e.scrollbarYRail, "borderBottomWidth")), e.railYMarginHeight = d.toInt(s.css(e.scrollbarYRail, "marginTop")) + d.toInt(s.css(e.scrollbarYRail, "marginBottom")), e.railYHeight = null
        }

        function o(t) {
            return "undefined" == typeof t.dataset ? t.getAttribute("data-ps-id") : t.dataset.psId
        }

        function i(t, e) {
            "undefined" == typeof t.dataset ? t.setAttribute("data-ps-id", e) : t.dataset.psId = e
        }

        function l(t) {
            "undefined" == typeof t.dataset ? t.removeAttribute("data-ps-id") : delete t.dataset.psId
        }
        var s = t("../lib/dom"),
            a = t("./default-setting"),
            c = t("../lib/event-manager"),
            u = t("../lib/guid"),
            d = t("../lib/helper"),
            p = {};
        n.add = function(t) {
            var e = u();
            return i(t, e), p[e] = new r(t), p[e]
        }, n.remove = function(t) {
            delete p[o(t)], l(t)
        }, n.get = function(t) {
            return p[o(t)]
        }
    }, {
        "../lib/dom": 3,
        "../lib/event-manager": 4,
        "../lib/guid": 5,
        "../lib/helper": 6,
        "./default-setting": 8
    }],
    19: [function(t, e) {
        "use strict";

        function n(t, e) {
            return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e
        }

        function r(t, e) {
            var n = {
                width: e.railXWidth
            };
            n.left = e.isRtl ? t.scrollLeft + e.containerWidth - e.contentWidth : t.scrollLeft, e.isScrollbarXUsingBottom ? n.bottom = e.scrollbarXBottom - t.scrollTop : n.top = e.scrollbarXTop + t.scrollTop, i.css(e.scrollbarXRail, n);
            var r = {
                top: t.scrollTop,
                height: e.railYHeight
            };
            e.isScrollbarYUsingRight ? r.right = e.isRtl ? e.contentWidth - t.scrollLeft - e.scrollbarYRight - e.scrollbarYOuterWidth : e.scrollbarYRight - t.scrollLeft : r.left = e.isRtl ? t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : e.scrollbarYLeft + t.scrollLeft, i.css(e.scrollbarYRail, r), i.css(e.scrollbarX, {
                left: e.scrollbarXLeft,
                width: e.scrollbarXWidth - e.railBorderXWidth
            }), i.css(e.scrollbarY, {
                top: e.scrollbarYTop,
                height: e.scrollbarYHeight - e.railBorderYWidth
            })
        }
        var o = t("../lib/class"),
            i = t("../lib/dom"),
            l = t("../lib/helper"),
            s = t("./instances");
        e.exports = function(t) {
            var e = s.get(t);
            e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight, t.contains(e.scrollbarXRail) || i.appendTo(e.scrollbarXRail, t), t.contains(e.scrollbarYRail) || i.appendTo(e.scrollbarYRail, t), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.scrollbarXWidth = n(e, l.toInt(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = l.toInt(t.scrollLeft * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : (e.scrollbarXActive = !1, e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, t.scrollLeft = 0), !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.scrollbarYHeight = n(e, l.toInt(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = l.toInt(t.scrollTop * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : (e.scrollbarYActive = !1, e.scrollbarYHeight = 0, e.scrollbarYTop = 0, t.scrollTop = 0), e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), r(t, e), o[e.scrollbarXActive ? "add" : "remove"](t, "ps-active-x"), o[e.scrollbarYActive ? "add" : "remove"](t, "ps-active-y")
        }
    }, {
        "../lib/class": 2,
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18
    }],
    20: [function(t, e) {
        "use strict";
        var n = t("../lib/dom"),
            r = t("./instances"),
            o = t("./update-geometry");
        e.exports = function(t) {
            var e = r.get(t);
            n.css(e.scrollbarXRail, "display", "none"), n.css(e.scrollbarYRail, "display", "none"), o(t), n.css(e.scrollbarXRail, "display", "block"), n.css(e.scrollbarYRail, "display", "block")
        }
    }, {
        "../lib/dom": 3,
        "./instances": 18,
        "./update-geometry": 19
    }]
}, {}, [1]);
/*!
 * Isotope PACKAGED v2.2.0
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */
;
(function(t) {
    function e() {}

    function i(t) {
        function i(e) {
            e.prototype.option || (e.prototype.option = function(e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            })
        }

        function n(e, i) {
            t.fn[e] = function(n) {
                if ("string" == typeof n) {
                    for (var s = o.call(arguments, 1), a = 0, u = this.length; u > a; a++) {
                        var p = this[a],
                            h = t.data(p, e);
                        if (h)
                            if (t.isFunction(h[n]) && "_" !== n.charAt(0)) {
                                var f = h[n].apply(h, s);
                                if (void 0 !== f) return f
                            } else r("no such method '" + n + "' for " + e + " instance");
                        else r("cannot call methods on " + e + " prior to initialization; " + "attempted to call '" + n + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var o = t.data(this, e);
                    o ? (o.option(n), o._init()) : (o = new i(this, n), t.data(this, e, o))
                })
            }
        }
        if (t) {
            var r = "undefined" == typeof console ? e : function(t) {
                console.error(t)
            };
            return t.bridget = function(t, e) {
                i(e), n(t, e)
            }, t.bridget
        }
    }
    var o = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : "object" == typeof exports ? i(require("jquery")) : i(t.jQuery)
})(window),
function(t) {
    function e(e) {
        var i = t.event;
        return i.target = i.target || i.srcElement || e, i
    }
    var i = document.documentElement,
        o = function() {};
    i.addEventListener ? o = function(t, e, i) {
        t.addEventListener(e, i, !1)
    } : i.attachEvent && (o = function(t, i, o) {
        t[i + o] = o.handleEvent ? function() {
            var i = e(t);
            o.handleEvent.call(o, i)
        } : function() {
            var i = e(t);
            o.call(t, i)
        }, t.attachEvent("on" + i, t[i + o])
    });
    var n = function() {};
    i.removeEventListener ? n = function(t, e, i) {
        t.removeEventListener(e, i, !1)
    } : i.detachEvent && (n = function(t, e, i) {
        t.detachEvent("on" + e, t[e + i]);
        try {
            delete t[e + i]
        } catch (o) {
            t[e + i] = void 0
        }
    });
    var r = {
        bind: o,
        unbind: n
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
}(window),
function() {
    function t() {}

    function e(t, e) {
        for (var i = t.length; i--;)
            if (t[i].listener === e) return i;
        return -1
    }

    function i(t) {
        return function() {
            return this[t].apply(this, arguments)
        }
    }
    var o = t.prototype,
        n = this,
        r = n.EventEmitter;
    o.getListeners = function(t) {
        var e, i, o = this._getEvents();
        if (t instanceof RegExp) {
            e = {};
            for (i in o) o.hasOwnProperty(i) && t.test(i) && (e[i] = o[i])
        } else e = o[t] || (o[t] = []);
        return e
    }, o.flattenListeners = function(t) {
        var e, i = [];
        for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
        return i
    }, o.getListenersAsObject = function(t) {
        var e, i = this.getListeners(t);
        return i instanceof Array && (e = {}, e[t] = i), e || i
    }, o.addListener = function(t, i) {
        var o, n = this.getListenersAsObject(t),
            r = "object" == typeof i;
        for (o in n) n.hasOwnProperty(o) && -1 === e(n[o], i) && n[o].push(r ? i : {
            listener: i,
            once: !1
        });
        return this
    }, o.on = i("addListener"), o.addOnceListener = function(t, e) {
        return this.addListener(t, {
            listener: e,
            once: !0
        })
    }, o.once = i("addOnceListener"), o.defineEvent = function(t) {
        return this.getListeners(t), this
    }, o.defineEvents = function(t) {
        for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
        return this
    }, o.removeListener = function(t, i) {
        var o, n, r = this.getListenersAsObject(t);
        for (n in r) r.hasOwnProperty(n) && (o = e(r[n], i), -1 !== o && r[n].splice(o, 1));
        return this
    }, o.off = i("removeListener"), o.addListeners = function(t, e) {
        return this.manipulateListeners(!1, t, e)
    }, o.removeListeners = function(t, e) {
        return this.manipulateListeners(!0, t, e)
    }, o.manipulateListeners = function(t, e, i) {
        var o, n, r = t ? this.removeListener : this.addListener,
            s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
            for (o = i.length; o--;) r.call(this, e, i[o]);
        else
            for (o in e) e.hasOwnProperty(o) && (n = e[o]) && ("function" == typeof n ? r.call(this, o, n) : s.call(this, o, n));
        return this
    }, o.removeEvent = function(t) {
        var e, i = typeof t,
            o = this._getEvents();
        if ("string" === i) delete o[t];
        else if (t instanceof RegExp)
            for (e in o) o.hasOwnProperty(e) && t.test(e) && delete o[e];
        else delete this._events;
        return this
    }, o.removeAllListeners = i("removeEvent"), o.emitEvent = function(t, e) {
        var i, o, n, r, s = this.getListenersAsObject(t);
        for (n in s)
            if (s.hasOwnProperty(n))
                for (o = s[n].length; o--;) i = s[n][o], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }, o.trigger = i("emitEvent"), o.emit = function(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, o.setOnceReturnValue = function(t) {
        return this._onceReturnValue = t, this
    }, o._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, o._getEvents = function() {
        return this._events || (this._events = {})
    }, t.noConflict = function() {
        return n.EventEmitter = r, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : n.EventEmitter = t
}.call(this),
    function(t) {
        function e(t) {
            if (t) {
                if ("string" == typeof o[t]) return t;
                t = t.charAt(0).toUpperCase() + t.slice(1);
                for (var e, n = 0, r = i.length; r > n; n++)
                    if (e = i[n] + t, "string" == typeof o[e]) return e
            }
        }
        var i = "Webkit Moz ms Ms O".split(" "),
            o = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return e
        }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
    }(window),
    function(t) {
        function e(t) {
            var e = parseFloat(t),
                i = -1 === t.indexOf("%") && !isNaN(e);
            return i && e
        }

        function i() {}

        function o() {
            for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0, i = s.length; i > e; e++) {
                var o = s[e];
                t[o] = 0
            }
            return t
        }

        function n(i) {
            function n() {
                if (!d) {
                    d = !0;
                    var o = t.getComputedStyle;
                    if (p = function() {
                            var t = o ? function(t) {
                                return o(t, null)
                            } : function(t) {
                                return t.currentStyle
                            };
                            return function(e) {
                                var i = t(e);
                                return i || r("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? " + "See http://bit.ly/getsizebug1"), i
                            }
                        }(), h = i("boxSizing")) {
                        var n = document.createElement("div");
                        n.style.width = "200px", n.style.padding = "1px 2px 3px 4px", n.style.borderStyle = "solid", n.style.borderWidth = "1px 2px 3px 4px", n.style[h] = "border-box";
                        var s = document.body || document.documentElement;
                        s.appendChild(n);
                        var a = p(n);
                        f = 200 === e(a.width), s.removeChild(n)
                    }
                }
            }

            function a(t) {
                if (n(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                    var i = p(t);
                    if ("none" === i.display) return o();
                    var r = {};
                    r.width = t.offsetWidth, r.height = t.offsetHeight;
                    for (var a = r.isBorderBox = !(!h || !i[h] || "border-box" !== i[h]), d = 0, l = s.length; l > d; d++) {
                        var c = s[d],
                            m = i[c];
                        m = u(t, m);
                        var y = parseFloat(m);
                        r[c] = isNaN(y) ? 0 : y
                    }
                    var g = r.paddingLeft + r.paddingRight,
                        v = r.paddingTop + r.paddingBottom,
                        _ = r.marginLeft + r.marginRight,
                        I = r.marginTop + r.marginBottom,
                        z = r.borderLeftWidth + r.borderRightWidth,
                        L = r.borderTopWidth + r.borderBottomWidth,
                        x = a && f,
                        E = e(i.width);
                    E !== !1 && (r.width = E + (x ? 0 : g + z));
                    var b = e(i.height);
                    return b !== !1 && (r.height = b + (x ? 0 : v + L)), r.innerWidth = r.width - (g + z), r.innerHeight = r.height - (v + L), r.outerWidth = r.width + _, r.outerHeight = r.height + I, r
                }
            }

            function u(e, i) {
                if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
                var o = e.style,
                    n = o.left,
                    r = e.runtimeStyle,
                    s = r && r.left;
                return s && (r.left = e.currentStyle.left), o.left = i, i = o.pixelLeft, o.left = n, s && (r.left = s), i
            }
            var p, h, f, d = !1;
            return a
        }
        var r = "undefined" == typeof console ? i : function(t) {
                console.error(t)
            },
            s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], n) : "object" == typeof exports ? module.exports = n(require("desandro-get-style-property")) : t.getSize = n(t.getStyleProperty)
    }(window),
    function(t) {
        function e(t) {
            "function" == typeof t && (e.isReady ? t() : s.push(t))
        }

        function i(t) {
            var i = "readystatechange" === t.type && "complete" !== r.readyState;
            e.isReady || i || o()
        }

        function o() {
            e.isReady = !0;
            for (var t = 0, i = s.length; i > t; t++) {
                var o = s[t];
                o()
            }
        }

        function n(n) {
            return "complete" === r.readyState ? o() : (n.bind(r, "DOMContentLoaded", i), n.bind(r, "readystatechange", i), n.bind(t, "load", i)), e
        }
        var r = t.document,
            s = [];
        e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], n) : "object" == typeof exports ? module.exports = n(require("eventie")) : t.docReady = n(t.eventie)
    }(window),
    function(t) {
        function e(t, e) {
            return t[s](e)
        }

        function i(t) {
            if (!t.parentNode) {
                var e = document.createDocumentFragment();
                e.appendChild(t)
            }
        }

        function o(t, e) {
            i(t);
            for (var o = t.parentNode.querySelectorAll(e), n = 0, r = o.length; r > n; n++)
                if (o[n] === t) return !0;
            return !1
        }

        function n(t, o) {
            return i(t), e(t, o)
        }
        var r, s = function() {
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0, o = e.length; o > i; i++) {
                var n = e[i],
                    r = n + "MatchesSelector";
                if (t[r]) return r
            }
        }();
        if (s) {
            var a = document.createElement("div"),
                u = e(a, "div");
            r = u ? e : n
        } else r = o;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return r
        }) : "object" == typeof exports ? module.exports = r : window.matchesSelector = r
    }(Element.prototype),
    function(t, e) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(i, o) {
            return e(t, i, o)
        }) : "object" == typeof exports ? module.exports = e(t, require("doc-ready"), require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector)
    }(window, function(t, e, i) {
        var o = {};
        o.extend = function(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }, o.modulo = function(t, e) {
            return (t % e + e) % e
        };
        var n = Object.prototype.toString;
        o.isArray = function(t) {
            return "[object Array]" == n.call(t)
        }, o.makeArray = function(t) {
            var e = [];
            if (o.isArray(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var i = 0, n = t.length; n > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }, o.indexOf = Array.prototype.indexOf ? function(t, e) {
            return t.indexOf(e)
        } : function(t, e) {
            for (var i = 0, o = t.length; o > i; i++)
                if (t[i] === e) return i;
            return -1
        }, o.removeFrom = function(t, e) {
            var i = o.indexOf(t, e); - 1 != i && t.splice(i, 1)
        }, o.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(t) {
            return t instanceof HTMLElement
        } : function(t) {
            return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName
        }, o.setText = function() {
            function t(t, i) {
                e = e || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), t[e] = i
            }
            var e;
            return t
        }(), o.getParent = function(t, e) {
            for (; t != document.body;)
                if (t = t.parentNode, i(t, e)) return t
        }, o.getQueryElement = function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, o.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, o.filterFindElements = function(t, e) {
            t = o.makeArray(t);
            for (var n = [], r = 0, s = t.length; s > r; r++) {
                var a = t[r];
                if (o.isElement(a))
                    if (e) {
                        i(a, e) && n.push(a);
                        for (var u = a.querySelectorAll(e), p = 0, h = u.length; h > p; p++) n.push(u[p])
                    } else n.push(a)
            }
            return n
        }, o.debounceMethod = function(t, e, i) {
            var o = t.prototype[e],
                n = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[n];
                t && clearTimeout(t);
                var e = arguments,
                    r = this;
                this[n] = setTimeout(function() {
                    o.apply(r, e), delete r[n]
                }, i || 100)
            }
        }, o.toDashed = function(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        };
        var r = t.console;
        return o.htmlInit = function(i, n) {
            e(function() {
                for (var e = o.toDashed(n), s = document.querySelectorAll(".js-" + e), a = "data-" + e + "-options", u = 0, p = s.length; p > u; u++) {
                    var h, f = s[u],
                        d = f.getAttribute(a);
                    try {
                        h = d && JSON.parse(d)
                    } catch (l) {
                        r && r.error("Error parsing " + a + " on " + f.nodeName.toLowerCase() + (f.id ? "#" + f.id : "") + ": " + l);
                        continue
                    }
                    var c = new i(f, h),
                        m = t.jQuery;
                    m && m.data(f, n, c)
                }
            })
        }, o
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(i, o, n, r) {
            return e(t, i, o, n, r)
        }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (t.Outlayer = {}, t.Outlayer.Item = e(t, t.EventEmitter, t.getSize, t.getStyleProperty, t.fizzyUIUtils))
    }(window, function(t, e, i, o, n) {
        function r(t) {
            for (var e in t) return !1;
            return e = null, !0
        }

        function s(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }
        var a = t.getComputedStyle,
            u = a ? function(t) {
                return a(t, null)
            } : function(t) {
                return t.currentStyle
            },
            p = o("transition"),
            h = o("transform"),
            f = p && h,
            d = !!o("perspective"),
            l = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            }[p],
            c = ["transform", "transition", "transitionDuration", "transitionProperty"],
            m = function() {
                for (var t = {}, e = 0, i = c.length; i > e; e++) {
                    var n = c[e],
                        r = o(n);
                    r && r !== n && (t[n] = r)
                }
                return t
            }();
        n.extend(s.prototype, e.prototype), s.prototype._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, s.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, s.prototype.getSize = function() {
            this.size = i(this.element)
        }, s.prototype.css = function(t) {
            var e = this.element.style;
            for (var i in t) {
                var o = m[i] || i;
                e[o] = t[i]
            }
        }, s.prototype.getPosition = function() {
            var t = u(this.element),
                e = this.layout.options,
                i = e.isOriginLeft,
                o = e.isOriginTop,
                n = parseInt(t[i ? "left" : "right"], 10),
                r = parseInt(t[o ? "top" : "bottom"], 10);
            n = isNaN(n) ? 0 : n, r = isNaN(r) ? 0 : r;
            var s = this.layout.size;
            n -= i ? s.paddingLeft : s.paddingRight, r -= o ? s.paddingTop : s.paddingBottom, this.position.x = n, this.position.y = r
        }, s.prototype.layoutPosition = function() {
            var t = this.layout.size,
                e = this.layout.options,
                i = {},
                o = e.isOriginLeft ? "paddingLeft" : "paddingRight",
                n = e.isOriginLeft ? "left" : "right",
                r = e.isOriginLeft ? "right" : "left",
                s = this.position.x + t[o];
            s = e.percentPosition && !e.isHorizontal ? 100 * (s / t.width) + "%" : s + "px", i[n] = s, i[r] = "";
            var a = e.isOriginTop ? "paddingTop" : "paddingBottom",
                u = e.isOriginTop ? "top" : "bottom",
                p = e.isOriginTop ? "bottom" : "top",
                h = this.position.y + t[a];
            h = e.percentPosition && e.isHorizontal ? 100 * (h / t.height) + "%" : h + "px", i[u] = h, i[p] = "", this.css(i), this.emitEvent("layout", [this])
        };
        var y = d ? function(t, e) {
            return "translate3d(" + t + "px, " + e + "px, 0)"
        } : function(t, e) {
            return "translate(" + t + "px, " + e + "px)"
        };
        s.prototype._transitionTo = function(t, e) {
            this.getPosition();
            var i = this.position.x,
                o = this.position.y,
                n = parseInt(t, 10),
                r = parseInt(e, 10),
                s = n === this.position.x && r === this.position.y;
            if (this.setPosition(t, e), s && !this.isTransitioning) return this.layoutPosition(), void 0;
            var a = t - i,
                u = e - o,
                p = {},
                h = this.layout.options;
            a = h.isOriginLeft ? a : -a, u = h.isOriginTop ? u : -u, p.transform = y(a, u), this.transition({
                to: p,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, s.prototype.goTo = function(t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, s.prototype.moveTo = f ? s.prototype._transitionTo : s.prototype.goTo, s.prototype.setPosition = function(t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, s.prototype._nonTransition = function(t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, s.prototype._transition = function(t) {
            if (!parseFloat(this.layout.options.transitionDuration)) return this._nonTransition(t), void 0;
            var e = this._transn;
            for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                var o = this.element.offsetHeight;
                o = null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        };
        var g = h && n.toDashed(h) + ",opacity";
        s.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({
                transitionProperty: g,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(l, this, !1))
        }, s.prototype.transition = s.prototype[p ? "_transition" : "_nonTransition"], s.prototype.onwebkitTransitionEnd = function(t) {
            this.ontransitionend(t)
        }, s.prototype.onotransitionend = function(t) {
            this.ontransitionend(t)
        };
        var v = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        s.prototype.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn,
                    i = v[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[i], r(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) {
                    var o = e.onEnd[i];
                    o.call(this), delete e.onEnd[i]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, s.prototype.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(l, this, !1), this.isTransitioning = !1
        }, s.prototype._removeStyles = function(t) {
            var e = {};
            for (var i in t) e[i] = "";
            this.css(e)
        };
        var _ = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return s.prototype.removeTransitionStyles = function() {
            this.css(_)
        }, s.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, s.prototype.remove = function() {
            if (!p || !parseFloat(this.layout.options.transitionDuration)) return this.removeElem(), void 0;
            var t = this;
            this.once("transitionEnd", function() {
                t.removeElem()
            }), this.hide()
        }, s.prototype.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("visibleStyle");
            e[i] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, s.prototype.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, s.prototype.getHideRevealTransitionEndProperty = function(t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var i in e) return i
        }, s.prototype.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("hiddenStyle");
            e[i] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, s.prototype.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, s.prototype.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, s
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, o, n, r, s) {
            return e(t, i, o, n, r, s)
        }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.eventie, t.EventEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
    }(window, function(t, e, i, o, n, r) {
        function s(t, e) {
            var i = n.getQueryElement(t);
            if (!i) return a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t)), void 0;
            this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
            var o = ++h;
            this.element.outlayerGUID = o, f[o] = this, this._create(), this.options.isInitLayout && this.layout()
        }
        var a = t.console,
            u = t.jQuery,
            p = function() {},
            h = 0,
            f = {};
        return s.namespace = "outlayer", s.Item = r, s.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, n.extend(s.prototype, i.prototype), s.prototype.option = function(t) {
            n.extend(this.options, t)
        }, s.prototype._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, s.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, s.prototype._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0, r = e.length; r > n; n++) {
                var s = e[n],
                    a = new i(s, this);
                o.push(a)
            }
            return o
        }, s.prototype._filterFindItemElements = function(t) {
            return n.filterFindElements(t, this.options.itemSelector)
        }, s.prototype.getItemElements = function() {
            for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
            return t
        }, s.prototype.layout = function() {
            this._resetLayout(), this._manageStamps();
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, t), this._isLayoutInited = !0
        }, s.prototype._init = s.prototype.layout, s.prototype._resetLayout = function() {
            this.getSize()
        }, s.prototype.getSize = function() {
            this.size = o(this.element)
        }, s.prototype._getMeasurement = function(t, e) {
            var i, r = this.options[t];
            r ? ("string" == typeof r ? i = this.element.querySelector(r) : n.isElement(r) && (i = r), this[t] = i ? o(i)[e] : r) : this[t] = 0
        }, s.prototype.layoutItems = function(t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, s.prototype._getItemsForLayout = function(t) {
            for (var e = [], i = 0, o = t.length; o > i; i++) {
                var n = t[i];
                n.isIgnored || e.push(n)
            }
            return e
        }, s.prototype._layoutItems = function(t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                for (var i = [], o = 0, n = t.length; n > o; o++) {
                    var r = t[o],
                        s = this._getItemLayoutPosition(r);
                    s.item = r, s.isInstant = e || r.isLayoutInstant, i.push(s)
                }
                this._processLayoutQueue(i)
            }
        }, s.prototype._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, s.prototype._processLayoutQueue = function(t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var o = t[e];
                this._positionItem(o.item, o.x, o.y, o.isInstant)
            }
        }, s.prototype._positionItem = function(t, e, i, o) {
            o ? t.goTo(e, i) : t.moveTo(e, i)
        }, s.prototype._postLayout = function() {
            this.resizeContainer()
        }, s.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, s.prototype._getContainerSize = p, s.prototype._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, s.prototype._emitCompleteOnItems = function(t, e) {
            function i() {
                n.emitEvent(t + "Complete", [e])
            }

            function o() {
                s++, s === r && i()
            }
            var n = this,
                r = e.length;
            if (!e || !r) return i(), void 0;
            for (var s = 0, a = 0, u = e.length; u > a; a++) {
                var p = e[a];
                p.once(t, o)
            }
        }, s.prototype.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, s.prototype.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, s.prototype.stamp = function(t) {
            if (t = this._find(t)) {
                this.stamps = this.stamps.concat(t);
                for (var e = 0, i = t.length; i > e; e++) {
                    var o = t[e];
                    this.ignore(o)
                }
            }
        }, s.prototype.unstamp = function(t) {
            if (t = this._find(t))
                for (var e = 0, i = t.length; i > e; e++) {
                    var o = t[e];
                    n.removeFrom(this.stamps, o), this.unignore(o)
                }
        }, s.prototype._find = function(t) {
            return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0
        }, s.prototype._manageStamps = function() {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var t = 0, e = this.stamps.length; e > t; t++) {
                    var i = this.stamps[t];
                    this._manageStamp(i)
                }
            }
        }, s.prototype._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, s.prototype._manageStamp = p, s.prototype._getElementOffset = function(t) {
            var e = t.getBoundingClientRect(),
                i = this._boundingRect,
                n = o(t),
                r = {
                    left: e.left - i.left - n.marginLeft,
                    top: e.top - i.top - n.marginTop,
                    right: i.right - e.right - n.marginRight,
                    bottom: i.bottom - e.bottom - n.marginBottom
                };
            return r
        }, s.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, s.prototype.bindResize = function() {
            this.isResizeBound || (e.bind(t, "resize", this), this.isResizeBound = !0)
        }, s.prototype.unbindResize = function() {
            this.isResizeBound && e.unbind(t, "resize", this), this.isResizeBound = !1
        }, s.prototype.onresize = function() {
            function t() {
                e.resize(), delete e.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var e = this;
            this.resizeTimeout = setTimeout(t, 100)
        }, s.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, s.prototype.needsResizeLayout = function() {
            var t = o(this.element),
                e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }, s.prototype.addItems = function(t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, s.prototype.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, s.prototype.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
            }
        }, s.prototype.reveal = function(t) {
            this._emitCompleteOnItems("reveal", t);
            for (var e = t && t.length, i = 0; e && e > i; i++) {
                var o = t[i];
                o.reveal()
            }
        }, s.prototype.hide = function(t) {
            this._emitCompleteOnItems("hide", t);
            for (var e = t && t.length, i = 0; e && e > i; i++) {
                var o = t[i];
                o.hide()
            }
        }, s.prototype.revealItemElements = function(t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, s.prototype.hideItemElements = function(t) {
            var e = this.getItems(t);
            this.hide(e)
        }, s.prototype.getItem = function(t) {
            for (var e = 0, i = this.items.length; i > e; e++) {
                var o = this.items[e];
                if (o.element === t) return o
            }
        }, s.prototype.getItems = function(t) {
            t = n.makeArray(t);
            for (var e = [], i = 0, o = t.length; o > i; i++) {
                var r = t[i],
                    s = this.getItem(r);
                s && e.push(s)
            }
            return e
        }, s.prototype.remove = function(t) {
            var e = this.getItems(t);
            if (this._emitCompleteOnItems("remove", e), e && e.length)
                for (var i = 0, o = e.length; o > i; i++) {
                    var r = e[i];
                    r.remove(), n.removeFrom(this.items, r)
                }
        }, s.prototype.destroy = function() {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "";
            for (var e = 0, i = this.items.length; i > e; e++) {
                var o = this.items[e];
                o.destroy()
            }
            this.unbindResize();
            var n = this.element.outlayerGUID;
            delete f[n], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
        }, s.data = function(t) {
            t = n.getQueryElement(t);
            var e = t && t.outlayerGUID;
            return e && f[e]
        }, s.create = function(t, e) {
            function i() {
                s.apply(this, arguments)
            }
            return Object.create ? i.prototype = Object.create(s.prototype) : n.extend(i.prototype, s.prototype), i.prototype.constructor = i, i.defaults = n.extend({}, s.defaults), n.extend(i.defaults, e), i.prototype.settings = {}, i.namespace = t, i.data = s.data, i.Item = function() {
                r.apply(this, arguments)
            }, i.Item.prototype = new r, n.htmlInit(i, t), u && u.bridget && u.bridget(t, i), i
        }, s.Item = r, s
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
    }(window, function(t) {
        function e() {
            t.Item.apply(this, arguments)
        }
        e.prototype = new t.Item, e.prototype._create = function() {
            this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {}
        }, e.prototype.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var t = this.layout.options.getSortData,
                    e = this.layout._sorters;
                for (var i in t) {
                    var o = e[i];
                    this.sortData[i] = o(this.element, this)
                }
            }
        };
        var i = e.prototype.destroy;
        return e.prototype.destroy = function() {
            i.apply(this, arguments), this.css({
                display: ""
            })
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
    }(window, function(t, e) {
        function i(t) {
            this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
        }
        return function() {
            function t(t) {
                return function() {
                    return e.prototype[t].apply(this.isotope, arguments)
                }
            }
            for (var o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], n = 0, r = o.length; r > n; n++) {
                var s = o[n];
                i.prototype[s] = t(s)
            }
        }(), i.prototype.needsVerticalResizeLayout = function() {
            var e = t(this.isotope.element),
                i = this.isotope.size && e;
            return i && e.innerHeight != this.isotope.size.innerHeight
        }, i.prototype._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }, i.prototype.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }, i.prototype.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }, i.prototype.getSegmentSize = function(t, e) {
            var i = t + e,
                o = "outer" + e;
            if (this._getMeasurement(i, o), !this[i]) {
                var n = this.getFirstItemSize();
                this[i] = n && n[o] || this.isotope.size["inner" + e]
            }
        }, i.prototype.getFirstItemSize = function() {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element)
        }, i.prototype.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }, i.prototype.getSize = function() {
            this.isotope.getSize(), this.size = this.isotope.size
        }, i.modes = {}, i.create = function(t, e) {
            function o() {
                i.apply(this, arguments)
            }
            return o.prototype = new i, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : t.Masonry = e(t.Outlayer, t.getSize, t.fizzyUIUtils)
    }(window, function(t, e, i) {
        var o = t.create("masonry");
        return o.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var t = this.cols;
            for (this.colYs = []; t--;) this.colYs.push(0);
            this.maxY = 0
        }, o.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    i = t && t.element;
                this.columnWidth = i && e(i).outerWidth || this.containerWidth
            }
            var o = this.columnWidth += this.gutter,
                n = this.containerWidth + this.gutter,
                r = n / o,
                s = o - n % o,
                a = s && 1 > s ? "round" : "floor";
            r = Math[a](r), this.cols = Math.max(r, 1)
        }, o.prototype.getContainerWidth = function() {
            var t = this.options.isFitWidth ? this.element.parentNode : this.element,
                i = e(t);
            this.containerWidth = i && i.innerWidth
        }, o.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                o = e && 1 > e ? "round" : "ceil",
                n = Math[o](t.size.outerWidth / this.columnWidth);
            n = Math.min(n, this.cols);
            for (var r = this._getColGroup(n), s = Math.min.apply(Math, r), a = i.indexOf(r, s), u = {
                    x: this.columnWidth * a,
                    y: s
                }, p = s + t.size.outerHeight, h = this.cols + 1 - r.length, f = 0; h > f; f++) this.colYs[a + f] = p;
            return u
        }, o.prototype._getColGroup = function(t) {
            if (2 > t) return this.colYs;
            for (var e = [], i = this.cols + 1 - t, o = 0; i > o; o++) {
                var n = this.colYs.slice(o, o + t);
                e[o] = Math.max.apply(Math, n)
            }
            return e
        }, o.prototype._manageStamp = function(t) {
            var i = e(t),
                o = this._getElementOffset(t),
                n = this.options.isOriginLeft ? o.left : o.right,
                r = n + i.outerWidth,
                s = Math.floor(n / this.columnWidth);
            s = Math.max(0, s);
            var a = Math.floor(r / this.columnWidth);
            a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
            for (var u = (this.options.isOriginTop ? o.top : o.bottom) + i.outerHeight, p = s; a >= p; p++) this.colYs[p] = Math.max(u, this.colYs[p])
        }, o.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
        }, o.prototype._getContainerFitWidth = function() {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, o.prototype.needsResizeLayout = function() {
            var t = this.containerWidth;
            return this.getContainerWidth(), t !== this.containerWidth
        }, o
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
    }(window, function(t, e) {
        function i(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }
        var o = t.create("masonry"),
            n = o.prototype._getElementOffset,
            r = o.prototype.layout,
            s = o.prototype._getMeasurement;
        i(o.prototype, e.prototype), o.prototype._getElementOffset = n, o.prototype.layout = r, o.prototype._getMeasurement = s;
        var a = o.prototype.measureColumns;
        o.prototype.measureColumns = function() {
            this.items = this.isotope.filteredItems, a.call(this)
        };
        var u = o.prototype._manageStamp;
        return o.prototype._manageStamp = function() {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, u.apply(this, arguments)
        }, o
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function(t) {
        var e = t.create("fitRows");
        return e.prototype._resetLayout = function() {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, e.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth + this.gutter,
                i = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
            var o = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
        }, e.prototype._getContainerSize = function() {
            return {
                height: this.maxY
            }
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function(t) {
        var e = t.create("vertical", {
            horizontalAlignment: 0
        });
        return e.prototype._resetLayout = function() {
            this.y = 0
        }, e.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                i = this.y;
            return this.y += t.size.outerHeight, {
                x: e,
                y: i
            }
        }, e.prototype._getContainerSize = function() {
            return {
                height: this.y
            }
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, o, n, r, s, a) {
            return e(t, i, o, n, r, s, a)
        }) : "object" == typeof exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
    }(window, function(t, e, i, o, n, r, s) {
        function a(t, e) {
            return function(i, o) {
                for (var n = 0, r = t.length; r > n; n++) {
                    var s = t[n],
                        a = i.sortData[s],
                        u = o.sortData[s];
                    if (a > u || u > a) {
                        var p = void 0 !== e[s] ? e[s] : e,
                            h = p ? 1 : -1;
                        return (a > u ? 1 : -1) * h
                    }
                }
                return 0
            }
        }
        var u = t.jQuery,
            p = String.prototype.trim ? function(t) {
                return t.trim()
            } : function(t) {
                return t.replace(/^\s+|\s+$/g, "")
            },
            h = document.documentElement,
            f = h.textContent ? function(t) {
                return t.textContent
            } : function(t) {
                return t.innerText
            },
            d = e.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        d.Item = r, d.LayoutMode = s, d.prototype._create = function() {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var t in s.modes) this._initLayoutMode(t)
        }, d.prototype.reloadItems = function() {
            this.itemGUID = 0, e.prototype.reloadItems.call(this)
        }, d.prototype._itemize = function() {
            for (var t = e.prototype._itemize.apply(this, arguments), i = 0, o = t.length; o > i; i++) {
                var n = t[i];
                n.id = this.itemGUID++
            }
            return this._updateItemsSortData(t), t
        }, d.prototype._initLayoutMode = function(t) {
            var e = s.modes[t],
                i = this.options[t] || {};
            this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this)
        }, d.prototype.layout = function() {
            return !this._isLayoutInited && this.options.isInitLayout ? (this.arrange(), void 0) : (this._layout(), void 0)
        }, d.prototype._layout = function() {
            var t = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
        }, d.prototype.arrange = function(t) {
            function e() {
                o.reveal(i.needReveal), o.hide(i.needHide)
            }
            this.option(t), this._getIsInstant();
            var i = this._filter(this.items);
            this.filteredItems = i.matches;
            var o = this;
            this._bindArrangeComplete(), this._isInstant ? this._noTransition(e) : e(), this._sort(), this._layout()
        }, d.prototype._init = d.prototype.arrange, d.prototype._getIsInstant = function() {
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = t, t
        }, d.prototype._bindArrangeComplete = function() {
            function t() {
                e && i && o && n.emitEvent("arrangeComplete", [n.filteredItems])
            }
            var e, i, o, n = this;
            this.once("layoutComplete", function() {
                e = !0, t()
            }), this.once("hideComplete", function() {
                i = !0, t()
            }), this.once("revealComplete", function() {
                o = !0, t()
            })
        }, d.prototype._filter = function(t) {
            var e = this.options.filter;
            e = e || "*";
            for (var i = [], o = [], n = [], r = this._getFilterTest(e), s = 0, a = t.length; a > s; s++) {
                var u = t[s];
                if (!u.isIgnored) {
                    var p = r(u);
                    p && i.push(u), p && u.isHidden ? o.push(u) : p || u.isHidden || n.push(u)
                }
            }
            return {
                matches: i,
                needReveal: o,
                needHide: n
            }
        }, d.prototype._getFilterTest = function(t) {
            return u && this.options.isJQueryFiltering ? function(e) {
                return u(e.element).is(t)
            } : "function" == typeof t ? function(e) {
                return t(e.element)
            } : function(e) {
                return o(e.element, t)
            }
        }, d.prototype.updateSortData = function(t) {
            var e;
            t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
        }, d.prototype._getSorters = function() {
            var t = this.options.getSortData;
            for (var e in t) {
                var i = t[e];
                this._sorters[e] = l(i)
            }
        }, d.prototype._updateItemsSortData = function(t) {
            for (var e = t && t.length, i = 0; e && e > i; i++) {
                var o = t[i];
                o.updateSortData()
            }
        };
        var l = function() {
            function t(t) {
                if ("string" != typeof t) return t;
                var i = p(t).split(" "),
                    o = i[0],
                    n = o.match(/^\[(.+)\]$/),
                    r = n && n[1],
                    s = e(r, o),
                    a = d.sortDataParsers[i[1]];
                return t = a ? function(t) {
                    return t && a(s(t))
                } : function(t) {
                    return t && s(t)
                }
            }

            function e(t, e) {
                var i;
                return i = t ? function(e) {
                    return e.getAttribute(t)
                } : function(t) {
                    var i = t.querySelector(e);
                    return i && f(i)
                }
            }
            return t
        }();
        d.sortDataParsers = {
            parseInt: function(t) {
                return parseInt(t, 10)
            },
            parseFloat: function(t) {
                return parseFloat(t)
            }
        }, d.prototype._sort = function() {
            var t = this.options.sortBy;
            if (t) {
                var e = [].concat.apply(t, this.sortHistory),
                    i = a(e, this.options.sortAscending);
                this.filteredItems.sort(i), t != this.sortHistory[0] && this.sortHistory.unshift(t)
            }
        }, d.prototype._mode = function() {
            var t = this.options.layoutMode,
                e = this.modes[t];
            if (!e) throw Error("No layout mode: " + t);
            return e.options = this.options[t], e
        }, d.prototype._resetLayout = function() {
            e.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, d.prototype._getItemLayoutPosition = function(t) {
            return this._mode()._getItemLayoutPosition(t)
        }, d.prototype._manageStamp = function(t) {
            this._mode()._manageStamp(t)
        }, d.prototype._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }, d.prototype.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }, d.prototype.appended = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(i)
            }
        }, d.prototype.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                this._resetLayout(), this._manageStamps();
                var i = this._filterRevealAdded(e);
                this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
            }
        }, d.prototype._filterRevealAdded = function(t) {
            var e = this._filter(t);
            return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
        }, d.prototype.insert = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i, o, n = e.length;
                for (i = 0; n > i; i++) o = e[i], this.element.appendChild(o.element);
                var r = this._filter(e).matches;
                for (i = 0; n > i; i++) e[i].isLayoutInstant = !0;
                for (this.arrange(), i = 0; n > i; i++) delete e[i].isLayoutInstant;
                this.reveal(r)
            }
        };
        var c = d.prototype.remove;
        return d.prototype.remove = function(t) {
            t = n.makeArray(t);
            var e = this.getItems(t);
            c.call(this, t);
            var i = e && e.length;
            if (i)
                for (var o = 0; i > o; o++) {
                    var r = e[o];
                    n.removeFrom(this.filteredItems, r)
                }
        }, d.prototype.shuffle = function() {
            for (var t = 0, e = this.items.length; e > t; t++) {
                var i = this.items[t];
                i.sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, d.prototype._noTransition = function(t) {
            var e = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var i = t.call(this);
            return this.options.transitionDuration = e, i
        }, d.prototype.getFilteredItemElements = function() {
            for (var t = [], e = 0, i = this.filteredItems.length; i > e; e++) t.push(this.filteredItems[e].element);
            return t
        }, d
    });;
! function(t) {
    "use strict";
    var i = function(i, e) {
        this.$element = t(i), this.$indicators = this.$element.find(".vc_carousel-indicators"), this.options = e, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", t.proxy(this.pause, this)).on("mouseleave", t.proxy(this.cycle, this)), this._build()
    };
    i.DEFAULTS = {
        mode: "horizontal",
        partial: !1,
        interval: 5e3,
        pause: "hover",
        wrap: !1,
        autoHeight: !1,
        perView: 1
    }, i.prototype.cycle = function(i) {
        return i || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this.touch_start_position = 0, this
    }, i.prototype.getActiveIndex = function() {
        return this.$active = this.$element.find(".vc_item.vc_active"), this.$active.length || (this.$active = this.$element.find(".vc_item:first").addClass("vc_active")), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
    }, i.prototype.showHideControl = function(t) {
        if ("undefined" == typeof t) var t = this.getActiveIndex();
        this.$left_control[0 === t ? "hide" : "show"](), this.$right_control[t === this.items_count - 1 ? "hide" : "show"]()
    }, i.prototype.to = function(i) {
        var e = this,
            s = this.getActiveIndex();
        return i > this.$items.length - 1 || 0 > i ? void 0 : this.sliding ? this.$element.one("slid", function() {
            e.to(i)
        }) : s == i ? this.pause().cycle() : this.slide(i > s ? "next" : "prev", t(this.$items[i]))
    }, i.prototype.pause = function(i) {
        return i || (this.paused = !0), this.$element.find(".vc_right.vc_carousel-control, .vc_left.vc_carousel-control").length && t.support.transition.end && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, i.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, i.prototype.slide = function(i, e) {
        var s = this.$element.find(".vc_item.vc_active"),
            n = e || s[i](),
            o = this.interval,
            a = "next" == i ? "vc_left" : "vc_right",
            r = "next" == i ? "first" : "last",
            h = this;
        if (!n.length) {
            if (!this.options.wrap) return void this.returnSwipedSlide();
            n = this.$element.find(".vc_item")[r]()
        }
        this.sliding = !0, o && this.pause();
        var l = t.Event("slide.vc.carousel", {
            relatedTarget: n[0],
            direction: a
        });
        if (!n.hasClass("vc_active")) {
            if (this.$indicators.length && (this.$indicators.find(".vc_active").removeClass("vc_active"), this.$indicators.find(".vc_partial").removeClass("vc_partial"), this.$element.one("slid", function() {
                    var i = h.getActiveIndex(),
                        e = t(h.$indicators.children().slice(i, h.getActiveIndex() + h.options.perView));
                    e && e.addClass("vc_active"), h.options.partial && e && (i + 1 < h.items_count ? e.last().next().addClass("vc_partial") : e.first().prev().addClass("vc_partial")), !h.options.wrap && h.showHideControl(i)
                })), this.current_index = n.index(), this.current_index > this.items_count ? this.current_index = 0 : this.current_index < 0 && (this.current_index = this.items_count - 1), this.current_pos_value = this.options.autoHeight ? -1 * this._step * this.current_index : -1 * n.position()[this.animation_position], this.options.partial && this.current_index >= this.items_count - 1 && (this.current_pos_value += this._step * (1 - this.partial_part)), t.support.transition && this.$element.hasClass("vc_slide")) {
                if (this.$element.trigger(l), l.isDefaultPrevented()) return;
                this.$slideline_inner.addClass("vc_transition").css(this.animation_position, this.current_pos_value + h.pos_units), this.options.autoHeight || this.recalculateSlidelineHeight(n.height(), !0), this.$slideline_inner.one(t.support.transition.end, function() {
                    n.addClass("vc_active"), s.removeClass("vc_active"), h.$slideline_inner.removeClass([i, "vc_transition"].join(" ")), h.sliding = !1, h.removeSwipeAnimationSpeed(), setTimeout(function() {
                        h.$element.trigger("slid")
                    }, 0)
                }).emulateTransitionEnd(this.transition_speed)
            } else {
                if (this.$element.trigger(l), l.isDefaultPrevented()) return;
                s.removeClass("vc_active"), n.addClass("vc_active"), this.sliding = !1, this.$slideline_inner.css(this.animation_position, this.current_pos_value + h.pos_units)
            }
            return o && this.cycle(), this
        }
    }, i.prototype.setSwipeAnimationSpeed = function() {
        this.$slideline_inner.addClass("vc_swipe-transition")
    }, i.prototype.removeSwipeAnimationSpeed = function() {
        this.$slideline_inner.removeClass("vc_swipe-transition")
    }, i.prototype.velocity = function(t, i) {
        return {
            x: Math.abs(i / t) || 0
        }
    }, i.prototype.recalculateSlidelineHeight = function(t, i) {
        i === !0 ? this.$slideline.animate({
            height: t
        }) : this.$slideline.height(t)
    }, i.prototype.resizeAction = function() {
        var i = 0,
            e = 0;
        "horizontal" === this.options.mode && (this.el_effect_size = this.$element.width() * (this.options.partial ? this.partial_part : 1), this.$slideline.width(this.items_count * this.el_effect_size)), this.options.autoHeight ? (this.$items.height("auto"), this.$items.each(function() {
            var e = t(this).height();
            e > i && (i = e)
        }), this.$items.height(i)) : this.recalculateSlidelineHeight(this.$active.height()), "vertical" === this.options.mode && (this._step = this.$active.height(), e = this.$active.height() * this.options.perView * (this.options.partial ? 2 - this.partial_part : 1), this.recalculateSlidelineHeight(e, !1), this.$slideline_inner.css({
            top: -1 * this.$active.position().top
        }), this.el_effect_size = this._step)
    }, i.prototype.returnSwipedSlide = function() {
        var t = {};
        t[this.animation_position] = this.current_pos_value + this.pos_units, this.$slideline_inner.animate(t)
    }, i.prototype._build = function() {
        var i = this.$element.get(0),
            e = !1,
            s = 0,
            n = 0,
            o = 0,
            a = !1,
            r = this,
            h = this.options.mode;
        if (this.getActiveIndex(), this.el_width = 0, this.items_count = this.$items.length, this.$slideline = this.$element.find(".vc_carousel-slideline"), this.$slideline_inner = this.$slideline.find("> div"), this.slideline_inner = this.$slideline_inner.get(0), this.partial_part = .8, this._slide_width = 0, this.swipe_velocity = .7, this.current_pos_value = 0, this.current_index = 0, this.el_effect_size = 0, this.transition_speed = 600, this.$left_control = this.$element.find(".vc_left.vc_carousel-control"), this.$right_control = this.$element.find(".vc_right.vc_carousel-control"), this.options.partial && (this.options.autoHeight = !0), this.options.perView > 1 && this.$element.addClass("vc_per-view-more vc_per-view-" + this.options.perView), "horizontal" === h ? (this.pos_units = "%", this._step = 100 / this.items_count / this.options.perView, this.animation_position = "left", this.$items.width(this._step + this.pos_units), this.touch_direction = "pageX") : (this.pos_units = "px", this.animation_position = "top", this.touch_direction = "pageY", this.$element.addClass("vc_carousel_vertical")), !r.options.wrap && this.showHideControl(), this.options.partial && this.$element.addClass("vc_partial"), this.$indicators.length) {
            var l = r.$indicators.children().slice(this.current_index, this.current_index + this.options.perView).addClass("vc_active");
            this.options.partial && l.last().next().addClass("vc_partial")
        }
        return t(window).resize(this.resizeAction.bind(this)), this.resizeAction(), i.addEventListener("touchstart", function(t) {
            e = parseFloat(t[r.touch_direction]), s = t.timeStamp, n = r.$slideline_inner.position()[r.animation_position]
        }.bind(this), !1), i.addEventListener("touchmove", function(t) {
            return o = parseFloat(t[r.touch_direction]) - e, (a = Math.abs(o) > 0) ? (t.preventDefault(), void(r.slideline_inner.style[r.animation_position] = n + o + "px")) : !0
        }, !1), i.addEventListener("touchend", function(t) {
            var i, e, n;
            a && (i = (t.timeStamp - s) / 1e3, e = o / r.el_effect_size, n = r.velocity(i, e), n.x > r.swipe_velocity && 0 > e || -.7 >= e ? (r.setSwipeAnimationSpeed(), r.next()) : n.x > r.swipe_velocity || e >= .7 ? (r.setSwipeAnimationSpeed(), r.prev()) : r.returnSwipedSlide(), a = !1)
        }, !1), this.$element.addClass("vc_build"), this
    };
    var e = t.fn.carousel;
    t.fn.carousel = function(e, s) {
        return this.each(function() {
            var n = t(this),
                o = n.data("vc.carousel"),
                a = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
                r = "string" == typeof e ? e : a.slide;
            o || n.data("vc.carousel", o = new i(this, a)), "number" == typeof e ? o.to(e) : r ? o[r](s) : a.interval && o.pause().cycle()
        })
    }, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = e, this
    }, t(document).off("click.vc.carousel.data-api").on("click.vc.carousel.data-api", "[data-slide], [data-slide-to]", function(i) {
        var e, s = t(this),
            n = t(s.attr("data-target") || (e = s.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "")),
            o = t.extend({}, n.data(), s.data()),
            a = s.attr("data-slide-to");
        a && (o.interval = !1), n.carousel(o), (a = s.attr("data-slide-to")) && n.data("vc.carousel").to(a), i.preventDefault()
    }), t(window).on("load", function() {
        t('[data-ride="vc_carousel"]').each(function() {
            var i = t(this);
            i.carousel(i.data())
        })
    })
}(window.jQuery);
/*!
jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
;
(function() {
    var t = [].indexOf || function(t) {
            for (var e = 0, n = this.length; e < n; e++) {
                if (e in this && this[e] === t) return e
            }
            return -1
        },
        e = [].slice;
    (function(t, e) {
        if (typeof define === "function" && define.amd) {
            return define("waypoints", ["jquery"], function(n) {
                return e(n, t)
            })
        } else {
            return e(t.jQuery, t)
        }
    })(window, function(n, r) {
        var i, o, l, s, f, u, c, a, h, d, p, y, v, w, g, m;
        i = n(r);
        a = t.call(r, "ontouchstart") >= 0;
        s = {
            horizontal: {},
            vertical: {}
        };
        f = 1;
        c = {};
        u = "waypoints-context-id";
        p = "resize.waypoints";
        y = "scroll.waypoints";
        v = 1;
        w = "waypoints-waypoint-ids";
        g = "waypoint";
        m = "waypoints";
        o = function() {
            function t(t) {
                var e = this;
                this.$element = t;
                this.element = t[0];
                this.didResize = false;
                this.didScroll = false;
                this.id = "context" + f++;
                this.oldScroll = {
                    x: t.scrollLeft(),
                    y: t.scrollTop()
                };
                this.waypoints = {
                    horizontal: {},
                    vertical: {}
                };
                this.element[u] = this.id;
                c[this.id] = this;
                t.bind(y, function() {
                    var t;
                    if (!(e.didScroll || a)) {
                        e.didScroll = true;
                        t = function() {
                            e.doScroll();
                            return e.didScroll = false
                        };
                        return r.setTimeout(t, n[m].settings.scrollThrottle)
                    }
                });
                t.bind(p, function() {
                    var t;
                    if (!e.didResize) {
                        e.didResize = true;
                        t = function() {
                            n[m]("refresh");
                            return e.didResize = false
                        };
                        return r.setTimeout(t, n[m].settings.resizeThrottle)
                    }
                })
            }
            t.prototype.doScroll = function() {
                var t, e = this;
                t = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
                if (a && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
                    n[m]("refresh")
                }
                n.each(t, function(t, r) {
                    var i, o, l;
                    l = [];
                    o = r.newScroll > r.oldScroll;
                    i = o ? r.forward : r.backward;
                    n.each(e.waypoints[t], function(t, e) {
                        var n, i;
                        if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
                            return l.push(e)
                        } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
                            return l.push(e)
                        }
                    });
                    l.sort(function(t, e) {
                        return t.offset - e.offset
                    });
                    if (!o) {
                        l.reverse()
                    }
                    return n.each(l, function(t, e) {
                        if (e.options.continuous || t === l.length - 1) {
                            return e.trigger([i])
                        }
                    })
                });
                return this.oldScroll = {
                    x: t.horizontal.newScroll,
                    y: t.vertical.newScroll
                }
            };
            t.prototype.refresh = function() {
                var t, e, r, i = this;
                r = n.isWindow(this.element);
                e = this.$element.offset();
                this.doScroll();
                t = {
                    horizontal: {
                        contextOffset: r ? 0 : e.left,
                        contextScroll: r ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: r ? 0 : e.top,
                        contextScroll: r ? 0 : this.oldScroll.y,
                        contextDimension: r ? n[m]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                };
                return n.each(t, function(t, e) {
                    return n.each(i.waypoints[t], function(t, r) {
                        var i, o, l, s, f;
                        i = r.options.offset;
                        l = r.offset;
                        o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
                        if (n.isFunction(i)) {
                            i = i.apply(r.element)
                        } else if (typeof i === "string") {
                            i = parseFloat(i);
                            if (r.options.offset.indexOf("%") > -1) {
                                i = Math.ceil(e.contextDimension * i / 100)
                            }
                        }
                        r.offset = o - e.contextOffset + e.contextScroll - i;
                        if (r.options.onlyOnScroll && l != null || !r.enabled) {
                            return
                        }
                        if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
                            return r.trigger([e.backward])
                        } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
                            return r.trigger([e.forward])
                        } else if (l === null && e.oldScroll >= r.offset) {
                            return r.trigger([e.forward])
                        }
                    })
                })
            };
            t.prototype.checkEmpty = function() {
                if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
                    this.$element.unbind([p, y].join(" "));
                    return delete c[this.id]
                }
            };
            return t
        }();
        l = function() {
            function t(t, e, r) {
                var i, o;
                if (r.offset === "bottom-in-view") {
                    r.offset = function() {
                        var t;
                        t = n[m]("viewportHeight");
                        if (!n.isWindow(e.element)) {
                            t = e.$element.height()
                        }
                        return t - n(this).outerHeight()
                    }
                }
                this.$element = t;
                this.element = t[0];
                this.axis = r.horizontal ? "horizontal" : "vertical";
                this.callback = r.handler;
                this.context = e;
                this.enabled = r.enabled;
                this.id = "waypoints" + v++;
                this.offset = null;
                this.options = r;
                e.waypoints[this.axis][this.id] = this;
                s[this.axis][this.id] = this;
                i = (o = this.element[w]) != null ? o : [];
                i.push(this.id);
                this.element[w] = i
            }
            t.prototype.trigger = function(t) {
                if (!this.enabled) {
                    return
                }
                if (this.callback != null) {
                    this.callback.apply(this.element, t)
                }
                if (this.options.triggerOnce) {
                    return this.destroy()
                }
            };
            t.prototype.disable = function() {
                return this.enabled = false
            };
            t.prototype.enable = function() {
                this.context.refresh();
                return this.enabled = true
            };
            t.prototype.destroy = function() {
                delete s[this.axis][this.id];
                delete this.context.waypoints[this.axis][this.id];
                return this.context.checkEmpty()
            };
            t.getWaypointsByElement = function(t) {
                var e, r;
                r = t[w];
                if (!r) {
                    return []
                }
                e = n.extend({}, s.horizontal, s.vertical);
                return n.map(r, function(t) {
                    return e[t]
                })
            };
            return t
        }();
        d = {
            init: function(t, e) {
                var r;
                e = n.extend({}, n.fn[g].defaults, e);
                if ((r = e.handler) == null) {
                    e.handler = t
                }
                this.each(function() {
                    var t, r, i, s;
                    t = n(this);
                    i = (s = e.context) != null ? s : n.fn[g].defaults.context;
                    if (!n.isWindow(i)) {
                        i = t.closest(i)
                    }
                    i = n(i);
                    r = c[i[0][u]];
                    if (!r) {
                        r = new o(i)
                    }
                    return new l(t, r, e)
                });
                n[m]("refresh");
                return this
            },
            disable: function() {
                return d._invoke.call(this, "disable")
            },
            enable: function() {
                return d._invoke.call(this, "enable")
            },
            destroy: function() {
                return d._invoke.call(this, "destroy")
            },
            prev: function(t, e) {
                return d._traverse.call(this, t, e, function(t, e, n) {
                    if (e > 0) {
                        return t.push(n[e - 1])
                    }
                })
            },
            next: function(t, e) {
                return d._traverse.call(this, t, e, function(t, e, n) {
                    if (e < n.length - 1) {
                        return t.push(n[e + 1])
                    }
                })
            },
            _traverse: function(t, e, i) {
                var o, l;
                if (t == null) {
                    t = "vertical"
                }
                if (e == null) {
                    e = r
                }
                l = h.aggregate(e);
                o = [];
                this.each(function() {
                    var e;
                    e = n.inArray(this, l[t]);
                    return i(o, e, l[t])
                });
                return this.pushStack(o)
            },
            _invoke: function(t) {
                this.each(function() {
                    var e;
                    e = l.getWaypointsByElement(this);
                    return n.each(e, function(e, n) {
                        n[t]();
                        return true
                    })
                });
                return this
            }
        };
        n.fn[g] = function() {
            var t, r;
            r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (d[r]) {
                return d[r].apply(this, t)
            } else if (n.isFunction(r)) {
                return d.init.apply(this, arguments)
            } else if (n.isPlainObject(r)) {
                return d.init.apply(this, [null, r])
            } else if (!r) {
                return n.error("jQuery Waypoints needs a callback function or handler option.")
            } else {
                return n.error("The " + r + " method does not exist in jQuery Waypoints.")
            }
        };
        n.fn[g].defaults = {
            context: r,
            continuous: true,
            enabled: true,
            horizontal: false,
            offset: 0,
            triggerOnce: false
        };
        h = {
            refresh: function() {
                return n.each(c, function(t, e) {
                    return e.refresh()
                })
            },
            viewportHeight: function() {
                var t;
                return (t = r.innerHeight) != null ? t : i.height()
            },
            aggregate: function(t) {
                var e, r, i;
                e = s;
                if (t) {
                    e = (i = c[n(t)[0][u]]) != null ? i.waypoints : void 0
                }
                if (!e) {
                    return []
                }
                r = {
                    horizontal: [],
                    vertical: []
                };
                n.each(r, function(t, i) {
                    n.each(e[t], function(t, e) {
                        return i.push(e)
                    });
                    i.sort(function(t, e) {
                        return t.offset - e.offset
                    });
                    r[t] = n.map(i, function(t) {
                        return t.element
                    });
                    return r[t] = n.unique(r[t])
                });
                return r
            },
            above: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "vertical", function(t, e) {
                    return e.offset <= t.oldScroll.y
                })
            },
            below: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "vertical", function(t, e) {
                    return e.offset > t.oldScroll.y
                })
            },
            left: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "horizontal", function(t, e) {
                    return e.offset <= t.oldScroll.x
                })
            },
            right: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "horizontal", function(t, e) {
                    return e.offset > t.oldScroll.x
                })
            },
            enable: function() {
                return h._invoke("enable")
            },
            disable: function() {
                return h._invoke("disable")
            },
            destroy: function() {
                return h._invoke("destroy")
            },
            extendFn: function(t, e) {
                return d[t] = e
            },
            _invoke: function(t) {
                var e;
                e = n.extend({}, s.vertical, s.horizontal);
                return n.each(e, function(e, n) {
                    n[t]();
                    return true
                })
            },
            _filter: function(t, e, r) {
                var i, o;
                i = c[n(t)[0][u]];
                if (!i) {
                    return []
                }
                o = [];
                n.each(i.waypoints[e], function(t, e) {
                    if (r(i, e)) {
                        return o.push(e)
                    }
                });
                o.sort(function(t, e) {
                    return t.offset - e.offset
                });
                return n.map(o, function(t) {
                    return t.element
                })
            }
        };
        n[m] = function() {
            var t, n;
            n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (h[n]) {
                return h[n].apply(null, t)
            } else {
                return h.aggregate.call(null, n)
            }
        };
        n[m].settings = {
            resizeThrottle: 100,
            scrollThrottle: 30
        };
        return i.on("load.waypoints", function() {
            return n[m]("refresh")
        })
    })
}).call(this);
/*!
 * jQuery One Page Nav Plugin
 * http://github.com/davist11/jQuery-One-Page-Nav
 *
 * Copyright (c) 2010 Trevor Davis (http://trevordavis.net)
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://jquery.org/license
 *
 * @version 3.0.0
 *
 * Example usage:
 * $('#nav').onePageNav({
 * currentClass: 'current',
 * changeHash: false,
 * scrollSpeed: 750
 * });
 */
;
(function($, window, document, undefined) {
    var OnePageNav = function(elem, options) {
        this.elem = elem;
        this.$elem = $(elem);
        this.options = options;
        this.metadata = this.$elem.data('plugin-options');
        this.$win = $(window);
        this.sections = {};
        this.didScroll = false;
        this.$doc = $(document);
        this.docHeight = this.$doc.height();
    };
    OnePageNav.prototype = {
        defaults: {
            navItems: 'a',
            currentClass: 'current',
            changeHash: false,
            easing: 'swing',
            filter: '',
            scrollSpeed: 750,
            scrollThreshold: 0.5,
            begin: false,
            end: false,
            scrollChange: false
        },
        init: function() {
            this.config = $.extend({}, this.defaults, this.options, this.metadata);
            this.$nav = this.$elem.find(this.config.navItems);
            if (this.config.filter !== '') {
                this.$nav = this.$nav.filter(this.config.filter);
            }
            this.$nav.on('click.onePageNav', $.proxy(this.handleClick, this));
            this.getPositions();
            this.bindInterval();
            this.$win.on('resize.onePageNav', $.proxy(this.getPositions, this));
            return this;
        },
        adjustNav: function(self, $parent) {
            self.$elem.find('.' + self.config.currentClass).removeClass(self.config.currentClass);
            $parent.addClass(self.config.currentClass);
        },
        bindInterval: function() {
            var self = this;
            var docHeight;
            self.$win.on('scroll.onePageNav', function() {
                self.didScroll = true;
            });
            self.t = setInterval(function() {
                docHeight = self.$doc.height();
                if (self.didScroll) {
                    self.didScroll = false;
                    self.scrollChange();
                }
                if (docHeight !== self.docHeight) {
                    self.docHeight = docHeight;
                    self.getPositions();
                }
            }, 250);
        },
        getHash: function($link) {
            return $link.attr('href').split('#')[1];
        },
        getPositions: function() {
            var self = this;
            var linkHref;
            var topPos;
            var $target;
            self.$nav.each(function() {
                linkHref = self.getHash($(this));
                $target = $('#' + linkHref);
                if ($target.length) {
                    topPos = $target.offset().top;
                    self.sections[linkHref] = Math.round(topPos);
                }
            });
        },
        getSection: function(windowPos) {
            var returnValue = null;
            var windowHeight = Math.round(this.$win.height() * this.config.scrollThreshold);
            for (var section in this.sections) {
                if ((this.sections[section] - windowHeight - this.headerOffsetTop()) < windowPos) {
                    returnValue = section;
                }
            }
            return returnValue;
        },
        headerOffsetTop: function() {
            var offsetTop = 0;
            if (($('#wpadminbar').length > 0) && ($('#wpadminbar').css('position') == 'fixed')) {
                offsetTop = $('#wpadminbar').outerHeight();
            }
            if ($('header.main-header .header-sticky').length > 0) {
                if ($('header.main-header').css('position') == 'fixed') {
                    offsetTop += $('header.main-header').outerHeight();
                } else {
                    offsetTop += 60;
                }
            }
            return offsetTop;
        },
        handleClick: function(e) {
            var self = this;
            var $link = $(e.currentTarget);
            var $parent = $link.parent();
            var newLoc = '#' + self.getHash($link);
            if (newLoc == '#undefined') {
                return;
            }
            if ((1) || !$parent.hasClass(self.config.currentClass)) {
                if (self.config.begin) {
                    self.config.begin();
                }
                self.adjustNav(self, $parent);
                self.unbindInterval();
                self.scrollTo(newLoc, function() {
                    if (self.config.changeHash) {
                        window.location.hash = newLoc;
                    }
                    self.bindInterval();
                    if (self.config.end) {
                        self.config.end();
                    }
                });
            }
            e.preventDefault();
        },
        scrollChange: function() {
            var windowTop = this.$win.scrollTop();
            var position = this.getSection(windowTop);
            var $parent;
            if (position !== null) {
                $parent = this.$elem.find('a[href$="#' + position + '"]').parent();
                if (!$parent.hasClass(this.config.currentClass)) {
                    this.adjustNav(this, $parent);
                    if (this.config.scrollChange) {
                        this.config.scrollChange($parent);
                    }
                }
            }
        },
        scrollTo: function(target, callback) {
            if ($(target).length == 0) {
                return;
            }
            var offset = $(target).offset().top - this.headerOffsetTop();
            $('html, body').animate({
                scrollTop: offset
            }, this.config.scrollSpeed, this.config.easing, callback);
        },
        unbindInterval: function() {
            clearInterval(this.t);
            this.$win.unbind('scroll.onePageNav');
        }
    };
    OnePageNav.defaults = OnePageNav.prototype.defaults;
    $.fn.onePageNav = function(options) {
        return this.each(function() {
            new OnePageNav(this, options).init();
        });
    };
})(jQuery, window, document);;
(function($) {
    'use strict';
    $.fn.equalHeight = function() {
        var heights = [];
        $.each(this, function(i, element) {
            var $element = $(element);
            var element_height;
            var includePadding = ($element.css('box-sizing') == 'border-box') || ($element.css('-moz-box-sizing') == 'border-box');
            if (includePadding) {
                element_height = $element.innerHeight();
            } else {
                element_height = $element.height();
            }
            heights.push(element_height);
        });
        this.height(Math.max.apply(window, heights));
        return this;
    };
    $.fn.equalHeightGrid = function(columns) {
        var $tiles = this;
        $tiles.css('height', 'auto');
        for (var i = 0; i < $tiles.length; i++) {
            if (i % columns === 0) {
                var row = $($tiles[i]);
                for (var n = 1; n < columns; n++) {
                    row = row.add($tiles[i + n]);
                }
                row.equalHeight();
            }
        }
        return this;
    };
    $.fn.detectGridColumns = function() {
        var offset = 0,
            cols = 0;
        this.each(function(i, elem) {
            var elem_offset = $(elem).offset().top;
            if (offset === 0 || elem_offset == offset) {
                cols++;
                offset = elem_offset;
            } else {
                return false;
            }
        });
        return cols;
    };
    $.fn.responsiveEqualHeightGrid = function() {
        var _this = this;

        function syncHeights() {
            var cols = _this.detectGridColumns();
            _this.equalHeightGrid(cols);
        }
        $(window).bind('resize load', syncHeights);
        syncHeights();
        return this;
    };
})(jQuery);
jQuery(document).ready(function() {
    jQuery(function($) {
        if ($('.column-equal-height').length) {
            $('.column-equal-height').each(function() {
                $('> div', this).responsiveEqualHeightGrid();
            })
        }
    });
});
/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */
;
(function(window) {
    'use strict';

    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }
    var hasClass, addClass, removeClass;
    if ('classList' in document.documentElement) {
        hasClass = function(elem, c) {
            return elem.classList.contains(c);
        };
        addClass = function(elem, c) {
            elem.classList.add(c);
        };
        removeClass = function(elem, c) {
            elem.classList.remove(c);
        };
    } else {
        hasClass = function(elem, c) {
            return classReg(c).test(elem.className);
        };
        addClass = function(elem, c) {
            if (!hasClass(elem, c)) {
                elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function(elem, c) {
            elem.className = elem.className.replace(classReg(c), ' ');
        };
    }

    function toggleClass(elem, c) {
        var fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c);
    }
    var classie = {
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };
    if (typeof define === 'function' && define.amd) {
        define(classie);
    } else {
        window.classie = classie;
    }
})(window);;
(function(window) {
    'use strict';
    var support = {
            animations: Modernizr.cssanimations
        },
        animEndEventNames = {
            'WebkitAnimation': 'webkitAnimationEnd',
            'OAnimation': 'oAnimationEnd',
            'msAnimation': 'MSAnimationEnd',
            'animation': 'animationend'
        },
        animEndEventName = animEndEventNames[Modernizr.prefixed('animation')],
        onEndAnimation = function(el, callback) {
            var onEndCallbackFn = function(ev) {
                if (support.animations) {
                    if (ev.target != this) return;
                    this.removeEventListener(animEndEventName, onEndCallbackFn);
                }
                if (callback && typeof callback === 'function') {
                    callback.call();
                }
            };
            if (support.animations) {
                el.addEventListener(animEndEventName, onEndCallbackFn);
            } else {
                onEndCallbackFn();
            }
        };

    function extend(a, b) {
        for (var key in b) {
            if (b.hasOwnProperty(key)) {
                a[key] = b[key];
            }
        }
        return a;
    }

    function DialogFx(el, options) {
        this.el = el;
        this.options = extend({}, this.options);
        extend(this.options, options);
        this.ctrlClose = this.el.querySelector('[data-dialog-close]');
        this.isOpen = false;
        this._initEvents();
    }
    DialogFx.prototype.options = {
        onOpenDialog: function() {
            return false;
        },
        onCloseDialog: function() {
            return false;
        }
    }
    DialogFx.prototype._initEvents = function() {
        var self = this;
        this.ctrlClose.addEventListener('click', this.toggle.bind(this));
        document.addEventListener('keydown', function(ev) {
            var keyCode = ev.keyCode || ev.which;
            if (keyCode === 27 && self.isOpen) {
                self.toggle();
            }
        });
        this.el.querySelector('.dialog__overlay').addEventListener('click', this.toggle.bind(this));
    }
    DialogFx.prototype.toggle = function() {
        var self = this;
        if (this.isOpen) {
            classie.remove(this.el, 'dialog--open');
            classie.add(self.el, 'dialog--close');
            onEndAnimation(this.el.querySelector('.dialog__content'), function() {
                classie.remove(self.el, 'dialog--close');
            });
            this.options.onCloseDialog(this);
        } else {
            classie.add(this.el, 'dialog--open');
            this.options.onOpenDialog(this);
        }
        this.isOpen = !this.isOpen;
    };
    window.DialogFx = DialogFx;
})(window);
/*!matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license*/ ;
window.matchMedia || (window.matchMedia = function() {
    "use strict";
    var styleMedia = (window.styleMedia || window.media);
    if (!styleMedia) {
        var style = document.createElement('style'),
            script = document.getElementsByTagName('script')[0],
            info = null;
        style.type = 'text/css';
        style.id = 'matchmediajs-test';
        script.parentNode.insertBefore(style, script);
        info = ('getComputedStyle' in window) && window.getComputedStyle(style, null) || style.currentStyle;
        styleMedia = {
            matchMedium: function(media) {
                var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';
                if (style.styleSheet) {
                    style.styleSheet.cssText = text;
                } else {
                    style.textContent = text;
                }
                return info.width === '1px';
            }
        };
    }
    return function(media) {
        return {
            matches: styleMedia.matchMedium(media || 'all'),
            media: media || 'all'
        };
    };
}());;
(function() {
    var defaultOptions = {
        frameRate: 150,
        animationTime: 500,
        stepSize: 150,
        pulseAlgorithm: true,
        pulseScale: 6,
        pulseNormalize: 1,
        accelerationDelta: 20,
        accelerationMax: 1,
        keyboardSupport: true,
        arrowScroll: 50,
        touchpadSupport: true,
        fixedBackground: true,
        excluded: ""
    };
    var options = defaultOptions;
    var isExcluded = false;
    var isFrame = false;
    var direction = {
        x: 0,
        y: 0
    };
    var initDone = false;
    var root = document.documentElement;
    var activeElement;
    var observer;
    var deltaBuffer = [120, 120, 120];
    var key = {
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        spacebar: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36
    };
    var options = defaultOptions;

    function initTest() {
        var disableKeyboard = false;
        if (disableKeyboard) {
            removeEvent("keydown", keydown);
        }
        if (options.keyboardSupport && !disableKeyboard) {
            addEvent("keydown", keydown);
        }
    }

    function init() {
        if (!document.body) return;
        var body = document.body;
        var html = document.documentElement;
        var windowHeight = window.innerHeight;
        var scrollHeight = body.scrollHeight;
        root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;
        activeElement = body;
        initTest();
        initDone = true;
        if (top != self) {
            isFrame = true;
        } else if (scrollHeight > windowHeight && (body.offsetHeight <= windowHeight || html.offsetHeight <= windowHeight)) {
            html.style.height = 'auto';
            if (root.offsetHeight <= windowHeight) {
                var underlay = document.createElement("div");
                underlay.style.clear = "both";
                body.appendChild(underlay);
            }
        }
        if (!options.fixedBackground && !isExcluded) {
            body.style.backgroundAttachment = "scroll";
            html.style.backgroundAttachment = "scroll";
        }
    }
    var que = [];
    var pending = false;
    var lastScroll = +new Date;

    function scrollArray(elem, left, top, delay) {
        delay || (delay = 1000);
        directionCheck(left, top);
        if (options.accelerationMax != 1) {
            var now = +new Date;
            var elapsed = now - lastScroll;
            if (elapsed < options.accelerationDelta) {
                var factor = (1 + (30 / elapsed)) / 2;
                if (factor > 1) {
                    factor = Math.min(factor, options.accelerationMax);
                    left *= factor;
                    top *= factor;
                }
            }
            lastScroll = +new Date;
        }
        que.push({
            x: left,
            y: top,
            lastX: (left < 0) ? 0.99 : -0.99,
            lastY: (top < 0) ? 0.99 : -0.99,
            start: +new Date
        });
        if (pending) {
            return;
        }
        var scrollWindow = (elem === document.body);
        var step = function(time) {
            var now = +new Date;
            var scrollX = 0;
            var scrollY = 0;
            for (var i = 0; i < que.length; i++) {
                var item = que[i];
                var elapsed = now - item.start;
                var finished = (elapsed >= options.animationTime);
                var position = (finished) ? 1 : elapsed / options.animationTime;
                if (options.pulseAlgorithm) {
                    position = pulse(position);
                }
                var x = (item.x * position - item.lastX) >> 0;
                var y = (item.y * position - item.lastY) >> 0;
                scrollX += x;
                scrollY += y;
                item.lastX += x;
                item.lastY += y;
                if (finished) {
                    que.splice(i, 1);
                    i--;
                }
            }
            if (scrollWindow) {
                window.scrollBy(scrollX, scrollY);
            } else {
                if (scrollX) elem.scrollLeft += scrollX;
                if (scrollY) elem.scrollTop += scrollY;
            }
            if (!left && !top) {
                que = [];
            }
            if (que.length) {
                requestFrame(step, elem, (delay / options.frameRate + 1));
            } else {
                pending = false;
            }
        };
        requestFrame(step, elem, 0);
        pending = true;
    }

    function wheel(event) {
        if (jQuery('body').hasClass('woocommerce-checkout')) return;
        if (jQuery(event.target).closest(".navbar-collapse").length === 1) {
            return;
        }
        if (jQuery(event.target).closest(".chosen-results").length === 1) {
            return;
        }
        if (jQuery(event.target).closest(".select2-results").length === 1) {
            return;
        }
        if (jQuery(event.target).closest('.modal-open').length === 1) {
            return;
        }
        if (jQuery(event.target).closest(".search-header-wrapper").length === 1) {
            return;
        }
        if (!initDone) {
            init();
        }
        var target = event.target;
        var overflowing = overflowingAncestor(target);
        if (!overflowing || event.defaultPrevented || isNodeName(activeElement, "embed") || (isNodeName(target, "embed") && /\.pdf/i.test(target.src))) {
            return true;
        }
        var deltaX = event.wheelDeltaX || 0;
        var deltaY = event.wheelDeltaY || 0;
        if (!deltaX && !deltaY) {
            deltaY = event.wheelDelta || 0;
        }
        if (!options.touchpadSupport && isTouchpad(deltaY)) {
            return true;
        }
        if (Math.abs(deltaX) > 1.2) {
            deltaX *= options.stepSize / 120;
        }
        if (Math.abs(deltaY) > 1.2) {
            deltaY *= options.stepSize / 120;
        }
        scrollArray(overflowing, -deltaX, -deltaY);
        event.preventDefault();
    }

    function keydown(event) {
        var target = event.target;
        var modifier = event.ctrlKey || event.altKey || event.metaKey || (event.shiftKey && event.keyCode !== key.spacebar);
        if (/input|textarea|select|embed/i.test(target.nodeName) || target.isContentEditable || event.defaultPrevented || modifier) {
            return true;
        }
        if (isNodeName(target, "button") && event.keyCode === key.spacebar) {
            return true;
        }
        var shift, x = 0,
            y = 0;
        var elem = overflowingAncestor(activeElement);
        var clientHeight = elem.clientHeight;
        if (elem == document.body) {
            clientHeight = window.innerHeight;
        }
        switch (event.keyCode) {
            case key.up:
                y = -options.arrowScroll;
                break;
            case key.down:
                y = options.arrowScroll;
                break;
            case key.spacebar:
                shift = event.shiftKey ? 1 : -1;
                y = -shift * clientHeight * 0.9;
                break;
            case key.pageup:
                y = -clientHeight * 0.9;
                break;
            case key.pagedown:
                y = clientHeight * 0.9;
                break;
            case key.home:
                y = -elem.scrollTop;
                break;
            case key.end:
                var damt = elem.scrollHeight - elem.scrollTop - clientHeight;
                y = (damt > 0) ? damt + 10 : 0;
                break;
            case key.left:
                x = -options.arrowScroll;
                break;
            case key.right:
                x = options.arrowScroll;
                break;
            default:
                return true;
        }
        scrollArray(elem, x, y);
        event.preventDefault();
    }

    function mousedown(event) {
        activeElement = event.target;
    }
    var cache = {};
    setInterval(function() {
        cache = {};
    }, 10 * 1000);
    var uniqueID = (function() {
        var i = 0;
        return function(el) {
            return el.uniqueID || (el.uniqueID = i++);
        };
    })();

    function setCache(elems, overflowing) {
        for (var i = elems.length; i--;)
            cache[uniqueID(elems[i])] = overflowing;
        return overflowing;
    }

    function overflowingAncestor(el) {
        var elems = [];
        var rootScrollHeight = root.scrollHeight;
        do {
            var cached = cache[uniqueID(el)];
            if (cached) {
                return setCache(elems, cached);
            }
            elems.push(el);
            if (rootScrollHeight === el.scrollHeight) {
                if (!isFrame || root.clientHeight + 10 < rootScrollHeight) {
                    return setCache(elems, document.body);
                }
            } else if (el.clientHeight + 10 < el.scrollHeight) {
                overflow = getComputedStyle(el, "").getPropertyValue("overflow-y");
                if (overflow === "scroll" || overflow === "auto") {
                    return setCache(elems, el);
                }
            }
        } while (el = el.parentNode);
    }

    function addEvent(type, fn, bubble) {
        window.addEventListener(type, fn, (bubble || false));
    }

    function removeEvent(type, fn, bubble) {
        window.removeEventListener(type, fn, (bubble || false));
    }

    function isNodeName(el, tag) {
        return (el.nodeName || "").toLowerCase() === tag.toLowerCase();
    }

    function directionCheck(x, y) {
        x = (x > 0) ? 1 : -1;
        y = (y > 0) ? 1 : -1;
        if (direction.x !== x || direction.y !== y) {
            direction.x = x;
            direction.y = y;
            que = [];
            lastScroll = 0;
        }
    }
    var deltaBufferTimer;

    function isTouchpad(deltaY) {
        if (!deltaY) return;
        deltaY = Math.abs(deltaY)
        deltaBuffer.push(deltaY);
        deltaBuffer.shift();
        clearTimeout(deltaBufferTimer);
        var allEquals = (deltaBuffer[0] == deltaBuffer[1] && deltaBuffer[1] == deltaBuffer[2]);
        var allDivisable = (isDivisible(deltaBuffer[0], 120) && isDivisible(deltaBuffer[1], 120) && isDivisible(deltaBuffer[2], 120));
        return !(allEquals || allDivisable);
    }

    function isDivisible(n, divisor) {
        return (Math.floor(n / divisor) == n / divisor);
    }
    var requestFrame = (function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(callback, element, delay) {
            window.setTimeout(callback, delay || (1000 / 60));
        };
    })();

    function pulse_(x) {
        var val, start, expx;
        x = x * options.pulseScale;
        if (x < 1) {
            val = x - (1 - Math.exp(-x));
        } else {
            start = Math.exp(-1);
            x -= 1;
            expx = 1 - Math.exp(-x);
            val = start + (expx * (1 - start));
        }
        return val * options.pulseNormalize;
    }

    function pulse(x) {
        if (x >= 1) return 1;
        if (x <= 0) return 0;
        if (options.pulseNormalize == 1) {
            options.pulseNormalize /= pulse_(1);
        }
        return pulse_(x);
    }
    var isChrome = /chrome/i.test(window.navigator.userAgent);
    var isMouseWheelSupported = 'onmousewheel' in document;
    if (isMouseWheelSupported && isChrome) {
        addEvent("mousedown", mousedown);
        addEvent("mousewheel", wheel);
        addEvent("load", init);
    };
})();;
var G5Plus = G5Plus || {};
(function($) {
    "use strict";
    var $window = $(window),
        $body = $('body'),
        isRTL = $body.data('rtl') ? true : false,
        deviceAgent = navigator.userAgent.toLowerCase(),
        isMobile = deviceAgent.match(/(iphone|ipod|android|iemobile)/),
        isMobileAlt = deviceAgent.match(/(iphone|ipod|ipad|android|iemobile)/),
        isAppleDevice = deviceAgent.match(/(iphone|ipod|ipad)/),
        isIEMobile = deviceAgent.match(/(iemobile)/);
    G5Plus.common = {
        init: function() {
            G5Plus.common.owlCarousel();
            G5Plus.common.stellar();
            G5Plus.common.prettyPhoto();
            G5Plus.common.magicLine();
            G5Plus.common.tooltip();
        },
        owlCarousel: function() {
            $('div.owl-carousel:not(.manual)').each(function() {
                var slider = $(this);
                var defaults = {
                    items: 5,
                    itemsCustom: false,
                    itemsDesktop: [1199, 4],
                    itemsDesktopSmall: [980, 3],
                    itemsTablet: [768, 2],
                    itemsTabletSmall: false,
                    itemsMobile: [479, 1],
                    singleItem: false,
                    itemsScaleUp: false,
                    slideSpeed: 200,
                    paginationSpeed: 800,
                    rewindSpeed: 1000,
                    autoPlay: false,
                    stopOnHover: true,
                    navigation: false,
                    navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                    rewindNav: true,
                    scrollPerPage: false,
                    pagination: true,
                    paginationNumbers: false,
                    responsive: true,
                    responsiveRefreshRate: 200,
                    responsiveBaseWidth: window,
                    baseClass: "owl-carousel",
                    theme: "owl-theme",
                    lazyLoad: false,
                    lazyFollow: true,
                    lazyEffect: "fade",
                    autoHeight: false,
                    jsonPath: false,
                    jsonSuccess: false,
                    dragBeforeAnimFinish: true,
                    mouseDrag: true,
                    touchDrag: true,
                    transitionStyle: false,
                    addClassActive: false,
                    beforeUpdate: false,
                    afterUpdate: false,
                    beforeInit: false,
                    afterInit: false,
                    beforeMove: false,
                    afterMove: false,
                    afterAction: false,
                    startDragging: false,
                    afterLazyLoad: false
                };
                var config = $.extend({}, defaults, slider.data("plugin-options"));
                var fucStr_afterInit = config.afterInit;
                var fuc_afterInit = function() {
                    eval(fucStr_afterInit);
                };
                if (config.afterInit != false) {
                    config.afterInit = fuc_afterInit;
                }
                var fucStr_afterMove = config.afterMove;
                var fuc_afterMove = function() {
                    eval(fucStr_afterMove);
                };
                if (config.afterMove != false) {
                    config.afterMove = fuc_afterMove;
                }
                slider.owlCarousel(config);
            });
        },
        isDesktop: function() {
            var responsive_breakpoint = 991;
            var $menu = $('.x-nav-menu');
            if (($menu.length > 0) && (typeof($menu.attr('responsive-breakpoint')) != "undefined") && !isNaN(parseInt($menu.attr('responsive-breakpoint'), 10))) {
                responsive_breakpoint = parseInt($menu.attr('responsive-breakpoint'), 10);
            }
            return window.matchMedia('(min-width: ' + (responsive_breakpoint + 1) + 'px)').matches;
        },
        stellar: function() {
            $.stellar({
                horizontalScrolling: false,
                scrollProperty: 'scroll',
                positionProperty: 'position'
            });
        },
        prettyPhoto: function() {
            $("a[data-rel^='prettyPhoto']").prettyPhoto({
                hook: 'data-rel',
                social_tools: '',
                animation_speed: 'normal',
                theme: 'light_square'
            });
        },
        magicLine: function() {
            $('.magic-line-container').each(function() {
                var activeItem = $('li.active', this);
                G5Plus.common.magicLineSetPosition(activeItem);
                $('li', this).hover(function() {
                    if (!$(this).hasClass('none-magic-line')) {
                        G5Plus.common.magicLineSetPosition(this);
                    }
                }, function() {
                    if (!$(this).hasClass('none-magic-line')) {
                        G5Plus.common.magicLineReturnActive(this);
                    }
                });
            });
        },
        magicLineSetPosition: function(item) {
            if (item != null && item != 'undefined') {
                var left = 0;
                if ($(item).position() != null)
                    left = $(item).position().left;
                var marginLeft = $(item).css('margin-left');
                var marginRight = $(item).css('margin-right');
                var topMagicLine = $('.top.magic-line', $(item).parent());
                var bottomMagicLine = $('.bottom.magic-line', $(item).parent());
                if (topMagicLine != null && topMagicLine != 'undefined') {
                    $(topMagicLine).css('left', left);
                    $(topMagicLine).css('width', $(item).width());
                    $(topMagicLine).css('margin-left', marginLeft);
                    $(topMagicLine).css('margin-right', marginRight);
                }
                if (bottomMagicLine != null && bottomMagicLine != 'undefined') {
                    $(bottomMagicLine).css('left', left);
                    $(bottomMagicLine).css('width', $(item).width());
                    $(bottomMagicLine).css('margin-left', marginLeft);
                    $(bottomMagicLine).css('margin-right', marginRight);
                }
            }
        },
        magicLineReturnActive: function(current_item) {
            if (!$(current_item).hasClass('active')) {
                var activeItem = $('li.active', $(current_item).parent());
                G5Plus.common.magicLineSetPosition(activeItem);
            }
        },
        showLoading: function() {
            $body.addClass('overflow-hidden');
            if ($('.loading-wrapper').length == 0) {
                $body.append('<div class="loading-wrapper"><span class="spinner-double-section-far"></span></div>');
            }
        },
        hideLoading: function() {
            $('.loading-wrapper').fadeOut(function() {
                $('.loading-wrapper').remove();
                $('body').removeClass('overflow-hidden');
            });
        },
        tooltip: function() {
            if ($().tooltip && !isMobileAlt) {
                if (!$body.hasClass('woocommerce-compare-page')) {
                    $('[data-toggle="tooltip"]').tooltip();
                }
                $('.yith-wcwl-wishlistexistsbrowse,.yith-wcwl-add-button,.yith-wcwl-wishlistaddedbrowse', '.product-actions').tooltip({
                    title: g5plus_framework_constant.product_wishList
                });
            }
        },
        isIE: function() {
            var ua = window.navigator.userAgent;
            var msie = ua.indexOf("MSIE ");
            if (msie || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
                return true;
            }
            return false;
        }
    };
    G5Plus.page = {
        init: function() {
            G5Plus.page.footerParallax();
            G5Plus.page.topDrawer();
            G5Plus.page.setOverlayVC();
            G5Plus.page.events();
            G5Plus.page.backToTop();
            G5Plus.page.vc_tabs_title();
            G5Plus.page.setWidgetCollapse();
            G5Plus.page.setUnderConstruction();
        },
        events: function() {
            $('.wpb_map_wraper').on('click', G5Plus.page.onMapClickHandler);
        },
        windowLoad: function() {
            if ($body.hasClass('site-loading')) {
                G5Plus.page.pageIn();
            }
            G5Plus.page.setPositionPageTitle();
        },
        windowResized: function() {
            G5Plus.page.footerParallax();
            G5Plus.page.setPositionPageTitle();
            G5Plus.page.setWidgetCollapse();
            G5Plus.page.setUnderConstruction();
        },
        setPositionPageTitle: function() {
            if (!G5Plus.common.isDesktop()) {
                return;
            }
            var sectionTitle = $('.page-title-wrap');
            if ($('header.main-header').hasClass('header-float')) {
                if (sectionTitle != null && typeof sectionTitle != 'undefined') {
                    var headerHeight = $('header.main-header').outerHeight();
                    if ($('.top-bar').length) {
                        headerHeight += $('.top-bar').outerHeight();
                    }
                    var buffer = ($(sectionTitle).outerHeight() - headerHeight - $('.block-center-inner', sectionTitle).outerHeight()) / 2;
                    $(sectionTitle).css('padding-top', headerHeight + buffer);
                    $(sectionTitle).css('padding-bottom', buffer);
                    var pageTitleInner = $('.page-title-inner', sectionTitle);
                    $(pageTitleInner).css('transition', 'all 0.5s');
                    $(pageTitleInner).css('-webkit-transition', 'all 0.5s ease-in-out');
                    $(pageTitleInner).css('-moz-transition', 'all 0.5s ease-in-out');
                    $(pageTitleInner).css('-o-transition', 'all 0.5s ease-in-out');
                    $(pageTitleInner).css('-ms-transition', 'all 0.5s ease-in-out');
                }
            }
        },
        footerParallax: function() {
            var $footer = $('footer'),
                headerSticky = $('header.main-header .sticky-wrapper').length > 0 ? 60 : 0,
                $adminBar = $('#wpadminbar'),
                $adminBarHeight = $adminBar.length > 0 ? $adminBar.outerHeight() : 0;
            if (!$body.hasClass('page-template-coming-soon')) {
                if ($footer.hasClass('enable-parallax')) {
                    if ((G5Plus.common.isDesktop()) && ($window.height() >= ($footer.outerHeight() + headerSticky + $adminBarHeight))) {
                        $body.css({
                            'padding-bottom': ($footer.outerHeight()) + 'px'
                        });
                        $body.removeClass('footer-static');
                    } else {
                        $body.addClass('footer-static');
                        $body.css({
                            'padding-bottom': '0px'
                        });
                    }
                }
            } else {
                $body.removeClass('footer-static');
            }
        },
        topDrawer: function() {
            $('.top-drawer-toggle').click(function() {
                var $topDrawerBar = $('#top-drawer-bar');
                $topDrawerBar.slideToggle('slow');
                $(this).toggleClass('open');
            });
        },
        setOverlayVC: function() {
            $('[data-overlay-image]').each(function() {
                var $selector = $(this);
                setTimeout(function() {
                    var overlay_image = $selector.data('overlay-image');
                    var overlay_opacity = $selector.data('overlay-opacity');
                    var html = '<div class="overlay-bg-vc" style="background-image: url(' + overlay_image + ') ;background-repeat:repeat; opacity:' + overlay_opacity + '"></div>';
                    $selector.prepend(html);
                }, 100);
            });
            $('[data-overlay-color]').each(function() {
                var $selector = $(this);
                setTimeout(function() {
                    var overlay_color = $selector.data('overlay-color');
                    var html = '<div class="overlay-bg-vc" style="background-color: ' + overlay_color + '"></div>';
                    $selector.prepend(html);
                }, 100);
            });
        },
        backToTop: function() {
            var $backToTop = $('.back-to-top');
            if ($backToTop.length > 0) {
                $backToTop.click(function(event) {
                    event.preventDefault();
                    $('html,body').animate({
                        scrollTop: '0px'
                    }, 800);
                });
                $window.on('scroll', function(event) {
                    var scrollPosition = $window.scrollTop();
                    var windowHeight = $window.height() / 2;
                    if (scrollPosition > windowHeight) {
                        $backToTop.addClass('in');
                    } else {
                        $backToTop.removeClass('in');
                    }
                });
            }
        },
        onMapClickHandler: function() {
            var that = $(this);
            that.off('click', G5Plus.page.onMapClickHandler);
            that.find('iframe').css("pointer-events", "auto");
            that.on('mouseleave', G5Plus.page.onMapMouseleaveHandler);
        },
        onMapMouseleaveHandler: function() {
            var that = $(this);
            that.on('click', G5Plus.page.onMapClickHandler);
            that.off('mouseleave', G5Plus.page.onMapMouseleaveHandler);
            that.find('iframe').css("pointer-events", "none");
        },
        vc_tabs_title: function() {
            if ($('.vc_tta-style-tab_style1').length) {
                $('.vc_tta-style-tab_style1').each(function() {
                    var $parrent = $(this).prev();
                    if ($parrent.prop("tagName").toLowerCase() == 'h2') {
                        $('.vc_tta-tabs-container', this).prepend($parrent);
                    }
                })
            }
        },
        pageIn: function() {
            setTimeout(function() {
                $('#site-loading').fadeOut(300);
            }, 300);
        },
        setWidgetCollapse: function() {
            var windowWidth = $window.width();
            if (window.matchMedia('(max-width: 767px)').matches) {
                $('footer.footer-collapse-able aside.widget').each(function() {
                    var title = $('h4:first', this);
                    var content = $(title).next();
                    $(title).addClass('collapse');
                    if (content != null && content != 'undefined')
                        $(content).hide();
                    $(title).off();
                    $(title).click(function() {
                        var content = $(this).next();
                        if ($(this).hasClass('expanded')) {
                            $(this).removeClass('expanded');
                            $(title).addClass('collapse');
                            $(content).slideUp();
                        } else {
                            $(this).addClass('expanded');
                            $(title).removeClass('collapse');
                            $(content).slideDown();
                        }
                    });
                });
            } else {
                $('footer aside.widget').each(function() {
                    var title = $('h4:first', this);
                    $(title).off();
                    var content = $(title).next();
                    $(title).removeClass('collapse');
                    $(title).removeClass('expanded');
                    $(content).show();
                });
            }
        },
        setUnderConstruction: function() {
            var $under_wrap = $('body.under-construction, body.coming-soon');
            if (typeof $under_wrap != 'undefined') {
                var $content = $('.content', $under_wrap[0]);
                if ($(window).width() > 768) {
                    var $wpb_wrapper = $('.wpb_wrapper', $content);
                    var $height = $wpb_wrapper.outerHeight();
                    var $wpadminbar = $('#wpadminbar');
                    var $windowHeight = $(window).height();
                    if ($windowHeight > $wpb_wrapper.outerHeight()) {
                        $content.css('height', $windowHeight);
                    } else {
                        $content.css('height', 'auto');
                    }
                    if ($wpadminbar.length > 0) {
                        $windowHeight = $windowHeight - $wpadminbar.outerHeight();
                    }
                    var $padding = $windowHeight - $height;
                    if ($padding > 0) {
                        $content.css('padding-top', $padding / 2 + 'px');
                        $content.css('padding-bottom', $padding / 2 + 'px');
                    }
                } else {
                    $content.css('height', 'auto');
                }
            }
        }
    };
    G5Plus.portfolio = {
        init: function() {}
    };
    G5Plus.blog = {
        init: function() {
            G5Plus.blog.jPlayerSetup();
            G5Plus.blog.infiniteScroll();
            G5Plus.blog.loadMore();
            G5Plus.blog.gridLayout();
            setInterval(G5Plus.blog.gridLayout, 300);
            G5Plus.blog.masonryLayout();
            setInterval(G5Plus.blog.masonryLayout, 300);
        },
        windowResized: function() {
            G5Plus.blog.processWidthAudioPlayer();
        },
        jPlayerSetup: function() {
            $('.jp-jplayer').each(function() {
                var $this = $(this),
                    url = $this.data('audio'),
                    title = $this.data('title'),
                    type = url.substr(url.lastIndexOf('.') + 1),
                    player = '#' + $this.data('player'),
                    audio = {};
                audio[type] = url;
                audio['title'] = title;
                $this.jPlayer({
                    ready: function() {
                        $this.jPlayer('setMedia', audio);
                    },
                    swfPath: '../plugins/jquery.jPlayer',
                    cssSelectorAncestor: player
                });
            });
            G5Plus.blog.processWidthAudioPlayer();
        },
        processWidthAudioPlayer: function() {
            setTimeout(function() {
                $('.jp-audio .jp-type-playlist').each(function() {
                    var _width = $(this).outerWidth() - $('.jp-play-pause', this).outerWidth() - parseInt($('.jp-play-pause', this).css('margin-left').replace('px', ''), 10) - parseInt($('.jp-progress', this).css('margin-left').replace('px', ''), 10) - $('.jp-volume', this).outerWidth() - parseInt($('.jp-volume', this).css('margin-left').replace('px', ''), 10) - 15;
                    $('.jp-progress', this).width(_width);
                });
            }, 100);
        },
        infiniteScroll: function() {
            var contentWrapper = '.blog-inner';
            $('.blog-inner').infinitescroll({
                navSelector: "#infinite_scroll_button",
                nextSelector: "#infinite_scroll_button a",
                itemSelector: "article",
                loading: {
                    'selector': '#infinite_scroll_loading',
                    'img': g5plus_framework_theme_url + 'assets/images/ajax-loader.gif',
                    'msgText': 'Loading...',
                    'finishedMsg': ''
                }
            }, function(newElements, data, url) {
                var $newElems = $(newElements).css({
                    opacity: 0
                });
                $newElems.imagesLoaded(function() {
                    G5Plus.common.owlCarousel();
                    G5Plus.blog.jPlayerSetup();
                    G5Plus.common.prettyPhoto();
                    $newElems.animate({
                        opacity: 1
                    });
                    if (($(contentWrapper).hasClass('blog-style-masonry')) || ($(contentWrapper).hasClass('blog-style-grid'))) {
                        $(contentWrapper).isotope('appended', $newElems);
                        setTimeout(function() {
                            $(contentWrapper).isotope('layout');
                        }, 400);
                    }
                });
            });
        },
        loadMore: function() {
            $('.blog-load-more').on('click', function(event) {
                event.preventDefault();
                var $this = $(this).button('loading');
                var link = $(this).attr('data-href');
                var contentWrapper = '.blog-inner';
                var element = 'article';
                $.get(link, function(data) {
                    var next_href = $('.blog-load-more', data).attr('data-href');
                    var $newElems = $(element, data).css({
                        opacity: 0
                    });
                    $(contentWrapper).append($newElems);
                    $newElems.imagesLoaded(function() {
                        G5Plus.common.owlCarousel();
                        G5Plus.blog.jPlayerSetup();
                        G5Plus.common.prettyPhoto();
                        $newElems.animate({
                            opacity: 1
                        });
                        if (($(contentWrapper).hasClass('blog-style-masonry')) || ($(contentWrapper).hasClass('blog-style-grid'))) {
                            $(contentWrapper).isotope('appended', $newElems);
                            setTimeout(function() {
                                $(contentWrapper).isotope('layout');
                            }, 400);
                        }
                    });
                    if (typeof(next_href) == 'undefined') {
                        $this.parent().remove();
                    } else {
                        $this.button('reset');
                        $this.attr('data-href', next_href);
                    }
                });
            });
        },
        gridLayout: function() {
            var $blog_grid = $('.blog-style-grid');
            $blog_grid.imagesLoaded(function() {
                $blog_grid.isotope({
                    itemSelector: 'article',
                    layoutMode: "fitRows",
                    isOriginLeft: !isRTL
                });
                setTimeout(function() {
                    $blog_grid.isotope('layout');
                }, 500);
            });
        },
        masonryLayout: function() {
            var $blog_masonry = $('.blog-style-masonry');
            $blog_masonry.imagesLoaded(function() {
                $blog_masonry.isotope({
                    itemSelector: 'article',
                    layoutMode: "masonry",
                    isOriginLeft: !isRTL
                });
                setTimeout(function() {
                    $blog_masonry.isotope('layout');
                }, 500);
            });
        },
    };
    G5Plus.woocommerce = {
        init: function() {
            G5Plus.woocommerce.setCartScrollBar();
            G5Plus.woocommerce.addCartQuantity();
            if (!$body.hasClass('woocommerce-compare-page')) {
                G5Plus.woocommerce.addToCart();
            }
            G5Plus.woocommerce.quickView();
            G5Plus.woocommerce.updateShippingMethod();
            G5Plus.woocommerce.addToWishlist();
            G5Plus.woocommerce.masonryInit();
            G5Plus.woocommerce.paymentMethod();
        },
        windowResized: function() {
            G5Plus.woocommerce.setCartScrollBar();
        },
        windowLoad: function() {
            G5Plus.woocommerce.setCartScrollBar();
        },
        setCartScrollBar: function() {
            setTimeout(function() {
                var $adminBar = $('#wpadminbar');
                var $adminBarHeight = $adminBar.outerHeight();
                var $site_top = $('.site-top').outerHeight();
                var $shopping_cart_wrapper = $('.shopping-cart-wrapper').outerHeight();
                var $windowHeight = $window.height();
                var $divCartWrapperHeight = 417;
                var $bufferBottom = 40;
                var $maxCartHeight = 325;
                var $heightScroll = '124px';
                var $max_item_product = 3;
                if ($windowHeight - $adminBarHeight - $site_top - $shopping_cart_wrapper - $bufferBottom < $divCartWrapperHeight) {
                    $maxCartHeight = 200;
                    $heightScroll = '100px';
                    $max_item_product = 2;
                }
                $('ul.cart_list.product_list_widget').css('max-height', $maxCartHeight);
                $('ul.cart_list.product_list_widget').perfectScrollbar({
                    wheelSpeed: 0.5,
                    suppressScrollX: true
                });
                $('ul.cart_list.product_list_widget').perfectScrollbar('update');
                if ($("ul.cart_list.product_list_widget li").length > $max_item_product) {
                    $('ul.cart_list.product_list_widget .ps-scrollbar-y').css('height', $heightScroll);
                }
            }, 1000);
        },
        addCartQuantity: function() {
            $(document).off('click', '.quantity .btn-number').on('click', '.quantity .btn-number', function(event) {
                event.preventDefault();
                var type = $(this).data('type'),
                    input = $('input', $(this).parent()),
                    current_value = parseFloat(input.val()),
                    max = parseFloat(input.attr('max')),
                    min = parseFloat(input.attr('min')),
                    step = parseFloat(input.attr('step')),
                    stepLength = 0;
                if (input.attr('step').indexOf('.') > 0) {
                    stepLength = input.attr('step').split('.')[1].length;
                }
                if (isNaN(max)) {
                    max = 100;
                }
                if (isNaN(min)) {
                    min = 0;
                }
                if (isNaN(step)) {
                    step = 1;
                    stepLength = 0;
                }
                if (!isNaN(current_value)) {
                    if (type == 'minus') {
                        if (current_value > min) {
                            current_value = (current_value - step).toFixed(stepLength);
                            input.val(current_value).change();
                        }
                        if (parseFloat(input.val()) <= min) {
                            input.val(min).change();
                            $(this).attr('disabled', true);
                        }
                    }
                    if (type == 'plus') {
                        if (current_value < max) {
                            current_value = (current_value + step).toFixed(stepLength);
                            input.val(current_value).change();
                        }
                        if (parseFloat(input.val()) >= max) {
                            input.val(max).change();
                            $(this).attr('disabled', true);
                        }
                    }
                } else {
                    input.val(min);
                }
            });
            $('input', '.quantity').focusin(function() {
                $(this).data('oldValue', $(this).val());
            });
            $('input', '.quantity').on('change', function() {
                var input = $(this),
                    max = parseFloat(input.attr('max')),
                    min = parseFloat(input.attr('min')),
                    current_value = parseFloat(input.val()),
                    step = parseFloat(input.attr('step'));
                if (isNaN(max)) {
                    max = 100;
                }
                if (isNaN(min)) {
                    min = 0;
                }
                if (isNaN(step)) {
                    step = 1;
                }
                var btn_add_to_cart = $('.add_to_cart_button', $(this).parent().parent().parent());
                if (current_value >= min) {
                    $(".btn-number[data-type='minus']", $(this).parent()).removeAttr('disabled');
                    if (typeof(btn_add_to_cart) != 'undefined') {
                        btn_add_to_cart.attr('data-quantity', current_value);
                    }
                } else {
                    alert('Sorry, the minimum value was reached');
                    $(this).val($(this).data('oldValue'));
                    if (typeof(btn_add_to_cart) != 'undefined') {
                        btn_add_to_cart.attr('data-quantity', $(this).data('oldValue'));
                    }
                }
                if (current_value <= max) {
                    $(".btn-number[data-type='plus']", $(this).parent()).removeAttr('disabled');
                    if (typeof(btn_add_to_cart) != 'undefined') {
                        btn_add_to_cart.attr('data-quantity', current_value);
                    }
                } else {
                    alert('Sorry, the maximum value was reached');
                    $(this).val($(this).data('oldValue'));
                    if (typeof(btn_add_to_cart) != 'undefined') {
                        btn_add_to_cart.attr('data-quantity', $(this).data('oldValue'));
                    }
                }
            });
        },
        addToCart: function() {
            $(document).on('click', '.add_to_cart_button', function() {
                var button = $(this),
                    buttonWrap = button.parent();
                if (!button.hasClass('single_add_to_cart_button') && button.is('.product_type_simple')) {
                    button.addClass("added-spinner");
                    button.find('i').attr('class', 'fa fa-spinner fa-spin');
                    var productWrap = buttonWrap.parent().parent().parent().parent();
                    if (typeof(productWrap) == 'undefined') {
                        return;
                    }
                    productWrap.addClass('active');
                }
            });
            $body.on('wc_cart_button_updated', function(event, $button) {
                G5Plus.woocommerce.setCartScrollBar();
                var is_single_product = $button.hasClass('single_add_to_cart_button');
                if (is_single_product) return;
                var buttonWrap = $button.parent(),
                    buttonViewCart = buttonWrap.find('.added_to_cart'),
                    addedTitle = buttonViewCart.text(),
                    productWrap = buttonWrap.parent().parent().parent().parent();
                $button.remove();
                buttonViewCart.html('<i class="fa fa-check"></i>');
                setTimeout(function() {
                    buttonWrap.tooltip('hide').attr('title', addedTitle).tooltip('fixTitle');
                }, 500);
                setTimeout(function() {
                    productWrap.removeClass('active');
                }, 700);
            });
            $body.on('wc_fragments_refreshed', function() {
                G5Plus.woocommerce.setCartScrollBar();
            });
        },
        quickView: function() {
            var is_click_quick_view = false;
            $('.product-quick-view').on('click', function(event) {
                event.preventDefault();
                if (is_click_quick_view) return;
                is_click_quick_view = true;
                var product_id = $(this).data('product_id'),
                    popupWrapper = '#popup-product-quick-view-wrapper',
                    $icon = $(this).find('i'),
                    iconClass = $icon.attr('class'),
                    productWrap = $(this).parent().parent().parent().parent(),
                    button = $(this);
                productWrap.addClass('active');
                button.addClass('active');
                $icon.attr('class', 'fa fa-spinner fa-spin');
                $.ajax({
                    url: g5plus_framework_ajax_url,
                    data: {
                        action: 'product_quick_view',
                        id: product_id
                    },
                    success: function(html) {
                        productWrap.removeClass('active');
                        button.removeClass('active');
                        $icon.attr('class', iconClass);
                        if ($(popupWrapper).length) {
                            $(popupWrapper).remove();
                        }
                        $('body').append(html);
                        G5Plus.woocommerce.addCartQuantity();
                        G5Plus.common.tooltip();
                        $(popupWrapper).modal();
                        is_click_quick_view = false;
                    },
                    error: function(html) {
                        G5Plus.common.hideLoading();
                        is_click_quick_view = false;
                    }
                });
            });
        },
        updateShippingMethod: function() {
            $body.bind('updated_shipping_method', function() {
                $('select.country_to_state, input.country_to_state').change();
            });
        },
        addToWishlist: function() {
            $(document).on('click', '.add_to_wishlist', function() {
                var button = $(this),
                    buttonWrap = button.parent().parent();
                if (!buttonWrap.parent().hasClass('single-product-function')) {
                    button.addClass("added-spinner");
                    var productWrap = buttonWrap.parent().parent().parent().parent();
                    if (typeof(productWrap) == 'undefined') {
                        return;
                    }
                    productWrap.addClass('active');
                }
            });
            $body.bind("added_to_wishlist", function(event, fragments, cart_hash, $thisbutton) {
                var button = $('.added-spinner.add_to_wishlist'),
                    buttonWrap = button.parent().parent();
                if (!buttonWrap.parent().hasClass('single-product-function')) {
                    var productWrap = buttonWrap.parent().parent().parent().parent();
                    if (typeof(productWrap) == 'undefined') {
                        return;
                    }
                    setTimeout(function() {
                        productWrap.removeClass('active');
                        button.removeClass('added-spinner');
                    }, 700);
                }
            });
        },
        masonryInit: function() {
            $('.product-listing', '.product-creative').each(function() {
                var $container = $(this);
                var $col = $($container).parent().attr('data-columns');
                var $columnWidth = '.col-md-3';
                if ($col == '2') {
                    $columnWidth = '.col-md-4';
                }
                $container.imagesLoaded(function() {
                    $container.isotope({
                        itemSelector: '.product-item-wrap',
                        percentPosition: true,
                        masonry: {
                            columnWidth: $columnWidth
                        }
                    }).isotope({
                        filter: '.page-1'
                    });
                });
            });
            $('.iso-filter', '.product-creative').click(function() {
                var $data_section_id = $(this).attr('data-section-id');
                var $navigation = $(this).attr('data-navigation');
                var $total_pages = $(this).attr('data-total-pages');
                var $page = $(this).attr('data-page');
                if ($navigation == 'next') {
                    if ($page == $total_pages) {
                        $page = 1;
                    } else {
                        $page = parseInt($page) + 1;
                    }
                } else {
                    if ($page == 1) {
                        $page = $total_pages;
                    } else if ($page > 1) {
                        $page = parseInt($page) - 1;
                    }
                }
                var $container = jQuery('.product-listing', '#' + $data_section_id);
                var $filter_value = '.page-' + $page;
                $container.isotope({
                    filter: '*'
                }).isotope({
                    filter: $filter_value
                });
                $('.iso-filter', '#' + $data_section_id).attr('data-page', $page);
            });
            $(window).resize(function() {
                G5Plus.woocommerce.reinitFilter();
            });
            G5Plus.woocommerce.reinitFilter();
        },
        reinitFilter: function() {
            $('.product-creative').each(function() {
                var $col = $(this).attr('data-columns');
                var $item_per_page = 6;
                if ($col == '2')
                    $item_per_page = 5;
                var $windowSize = $(window).width();
                if (600 <= $windowSize && $windowSize <= 1023) {
                    $item_per_page = 2;
                }
                if ($windowSize < 600) {
                    $item_per_page = 1;
                }
                var $total_product = $('.iso-filter', $(this)).attr('data-total-product');
                var $total_page = 0;
                $total_product = parseInt($total_product);
                if ($total_product % $item_per_page > 0)
                    $total_page = Math.floor($total_product / $item_per_page) + 1;
                else
                    $total_page = Math.floor($total_product / $item_per_page);
                $('.iso-filter', $(this)).attr('data-total-pages', $total_page);
                var $product_wrap = $('.product-listing', $(this));
                var $index = 1;
                var $page_class = '';
                $('.product-item-wrap', $product_wrap).each(function() {
                    $(this).removeClass(function(index, css) {
                        return (css.match(/\bpage-\S+/g) || []).join(' ');
                    });
                    if ($index % $item_per_page > 0) {
                        $page_class = 'page-' + (Math.floor($index / $item_per_page) + 1);
                    } else {
                        $page_class = 'page-' + Math.floor($index / $item_per_page);
                    }
                    $(this).addClass($page_class);
                    $index++;
                });
                var $filter_value = '.page-1';
                $product_wrap.isotope({
                    filter: $filter_value
                });
                $('.iso-filter', $(this)).attr('data-page', 1);
            })
        },
        paymentMethod: function() {
            var $orderReview = $('#order_review');
            $orderReview.on('click', 'input[name=payment_method]', function() {
                $('.payment_box_title').removeClass('active');
                $(this).parent().addClass('active');
            });
        }
    };
    G5Plus.search = {
        up: function($wrapper) {
            var $item = $('li.selected', $wrapper);
            if ($('li', $wrapper).length < 2) return;
            var $prev = $item.prev();
            $item.removeClass('selected');
            if ($prev.length) {
                $prev.addClass('selected');
            } else {
                $('li:last', $wrapper).addClass('selected');
                $prev = $('li:last', $wrapper);
            }
            var $ajaxSearchResult = $(' > ul', $wrapper);
            if ($prev.position().top < $ajaxSearchResult.scrollTop()) {
                $ajaxSearchResult.scrollTop($prev.position().top);
            } else if ($prev.position().top + $prev.outerHeight() > $ajaxSearchResult.scrollTop() + $ajaxSearchResult.height()) {
                $ajaxSearchResult.scrollTop($prev.position().top - $ajaxSearchResult.height() + $prev.outerHeight());
            }
        },
        down: function($wrapper) {
            var $item = $('li.selected', $wrapper);
            if ($('li', $wrapper).length < 2) return;
            var $next = $item.next();
            $item.removeClass('selected');
            if ($next.length) {
                $next.addClass('selected');
            } else {
                $('li:first', $wrapper).addClass('selected');
                $next = $('li:first', $wrapper);
            }
            var $ajaxSearchResult = $('> ul', $wrapper);
            if ($next.position().top < $ajaxSearchResult.scrollTop()) {
                $ajaxSearchResult.scrollTop($next.position().top);
            } else if ($next.position().top + $next.outerHeight() > $ajaxSearchResult.scrollTop() + $ajaxSearchResult.height()) {
                $ajaxSearchResult.scrollTop($next.position().top - $ajaxSearchResult.height() + $next.outerHeight());
            }
        }
    };
    G5Plus.header = {
        timeOutSearch: null,
        init: function() {
            G5Plus.header.stickyHeader();
            G5Plus.header.menuOnePage();
            G5Plus.header.menuMobile();
            G5Plus.header.events();
            G5Plus.header.search();
            G5Plus.header.searchAjaxForm();
            G5Plus.header.headerLeftPosition();
            G5Plus.header.searchCategory();
        },
        events: function() {
            $("a[data-hash]").on("click", function(e) {
                e.preventDefault();
                G5Plus.page.anchorsPosition(this);
                return false;
            });
        },
        windowResized: function() {
            G5Plus.header.stickyHeader();
            G5Plus.header.headerNavSpacing();
            if (G5Plus.common.isDesktop()) {
                $('.toggle-icon-wrapper[data-drop]').removeClass('in');
            }
            var $adminBar = $('#wpadminbar');
            if ($adminBar.length > 0) {
                $body.attr('data-offset', $adminBar.outerHeight() + 1);
            }
            if ($adminBar.length > 0) {
                $body.attr('data-offset', $adminBar.outerHeight() + 1);
            }
            G5Plus.header.headerMobileFlyPosition();
            G5Plus.header.headerMobilePosition();
        },
        windowLoad: function() {
            G5Plus.header.headerNavSpacing(1);
            G5Plus.header.headerLeftScrollBar();
            G5Plus.header.headerMobileFlyPosition();
            G5Plus.header.headerMobilePosition();
            G5Plus.header.fixStickyLogoSize();
        },
        fixStickyLogoSize: function() {
            if (G5Plus.common.isIE()) {
                var $logo = $("header .logo-sticky img");
                if ($logo.length == 0) {
                    return;
                }
                var logo_url = $logo.attr('src');
                if (logo_url.length - logo_url.lastIndexOf('.svg') != 4) {
                    return;
                }
                $.get(logo_url, function(svgxml) {
                    var attrs = svgxml.documentElement.attributes;
                    var pic_real_width = attrs.width.value;
                    var pic_real_height = attrs.height.value;
                    if (typeof(pic_real_width) == "string") {
                        pic_real_width = pic_real_width.replace('px', '');
                        pic_real_width = parseInt(pic_real_width, 10);
                    }
                    if (typeof(pic_real_height) == "string") {
                        pic_real_height = pic_real_height.replace('px', '');
                        pic_real_height = parseInt(pic_real_height, 10);
                    }
                    if (pic_real_height > 0) {
                        $logo.css('width', (pic_real_width * 30 / pic_real_height) + 'px');
                    }
                }, "xml");
            }
        },
        headerMobileFlyPosition: function() {
            var top = 0;
            if (($('#wpadminbar').length > 0) && ($('#wpadminbar').css('position') == 'fixed')) {
                top = $('#wpadminbar').outerHeight();
            }
            if (top > 0) {
                $('.header-mobile-nav.menu-drop-fly').css('top', top + 'px');
            } else {
                $('.header-mobile-nav.menu-drop-fly').css('top', '');
            }
        },
        headerMobilePosition: function() {
            var top = 0;
            if (($('#wpadminbar').length > 0) && ($('#wpadminbar').css('position') == 'fixed')) {
                top = $('#wpadminbar').outerHeight();
            }
            if (top > 0) {
                $('.header-mobile-nav.menu-drop-fly').css('top', top + 'px');
            } else {
                $('.header-mobile-nav.menu-drop-fly').css('top', '');
            }
        },
        headerLeftPosition: function() {
            var top = 0;
            if ($('#wpadminbar').length > 0) {
                top = $('#wpadminbar').outerHeight();
            }
            if (top > 0) {
                $('header.header-left').css('top', top + 'px');
            }
        },
        stickyHeader: function() {
            var topSpacing = 0,
                $adminBar = $('#wpadminbar');
            if (($adminBar.length > 0) && ($adminBar.css('position') == 'fixed')) {
                topSpacing = $adminBar.outerHeight();
            }
            if ($('.demo_store').length && ($('.demo_store').css('position') == 'fixed')) {
                topSpacing += $('.demo_store').outerHeight();
            }
            $('.header-sticky, .header-mobile-sticky').unstick();
            var topSticky = topSpacing;
            if (G5Plus.common.isDesktop()) {
                topSpacing = -$(window).height() + 65;
                $('.header-sticky').sticky({
                    topSpacing: topSpacing,
                    topSticky: topSticky,
                    change: function() {
                        G5Plus.header.headerNavSpacing();
                        $('header.main-header .x-nav-menu > li').each(function() {
                            APP_XMENU.process_menu_position(this);
                        });
                    }
                });
            } else {
                $('.header-mobile-sticky').sticky({
                    topSpacing: topSpacing,
                    topSticky: topSticky
                });
            }
        },
        menuOnePage: function() {
            $('.menu-one-page').onePageNav({
                currentClass: 'menu-current',
                changeHash: false,
                scrollSpeed: 750,
                scrollThreshold: 0.5,
                filter: '',
                easing: 'swing'
            });
        },
        anchorsPosition: function(obj, time) {
            var target = $(obj).attr("href");
            if ($(target).length > 0) {
                var _scrollTop = $(target).offset().top,
                    $adminBar = $('#wpadminbar');
                if ($adminBar.length > 0) {
                    _scrollTop -= $adminBar.outerHeight();
                }
                $("html,body").animate({
                    scrollTop: _scrollTop
                }, time, 'swing', function() {});
            }
        },
        menuMobile: function() {
            $('.toggle-mobile-menu[data-ref]').click(function(event) {
                event.preventDefault();
                var $this = $(this);
                var data_drop = $this.data('ref');
                $this.toggleClass('in');
                switch ($this.data('drop-type')) {
                    case 'dropdown':
                        $('#' + data_drop).slideToggle();
                        break;
                    case 'fly':
                        $('body').toggleClass('menu-mobile-in');
                        $('#' + data_drop).toggleClass('in');
                        break;
                }
            });
            $('.toggle-icon-wrapper[data-ref]:not(.toggle-mobile-menu)').click(function(event) {
                event.preventDefault();
                var $this = $(this);
                var data_ref = $this.data('ref');
                $this.toggleClass('in');
                $('#' + data_ref).toggleClass('in');
            });
            $('.main-menu-overlay').click(function() {
                $body.removeClass('menu-mobile-in');
                $('#nav-menu-mobile').removeClass('in');
                $('.toggle-icon-wrapper[data-ref]').removeClass('in');
            });
            $('.x-menu-a-text.scrollto_link').click(function() {
                $body.removeClass('menu-mobile-in');
                $('#nav-menu-mobile').removeClass('in');
                $('.toggle-icon-wrapper[data-ref]').removeClass('in');
            });
        },
        search: function() {
            var $search_popup = $('#search_popup_wrapper');
            if (($search_popup.length > 0) && ($('header .icon-search-menu').data('search-type') == 'standard')) {
                var dlg_search = new DialogFx($search_popup[0]);
                $('header .icon-search-menu').click(dlg_search.toggle.bind(dlg_search));
            }
            $('header .icon-search-menu').click(function(event) {
                event.preventDefault();
                if ($(this).data('search-type') == 'ajax') {
                    G5Plus.header.searchPopupOpen();
                } else {
                    $('#search_popup_wrapper input[type="text"]').focus();
                }
            });
            $('.g5plus-dismiss-modal, .modal-backdrop', '#g5plus-modal-search').click(function() {
                G5Plus.header.searchPopupClose();
            });
            $('.g5plus-search-wrapper button > i.ajax-search-icon').click(function() {
                s_search();
            });
            $('#search-ajax', '#g5plus-modal-search').on('keyup', function(event) {
                if (event.altKey || event.ctrlKey || event.shiftKey || event.metaKey) {
                    return;
                }
                var keys = ["Control", "Alt", "Shift"];
                if (keys.indexOf(event.key) != -1) return;
                switch (event.which) {
                    case 27:
                        G5Plus.header.searchPopupClose();
                        break;
                    case 38:
                        s_up();
                        break;
                    case 40:
                        s_down();
                        break;
                    case 13:
                        var $item = $('li.selected a', '#g5plus-modal-search');
                        if ($item.length == 0) {
                            event.preventDefault();
                            return false;
                        }
                        s_enter();
                        break;
                    default:
                        clearTimeout(G5Plus.header.timeOutSearch);
                        G5Plus.header.timeOutSearch = setTimeout(s_search, 500);
                        break;
                }
            });

            function s_up() {
                var $item = $('li.selected', '#g5plus-modal-search');
                if ($('li', '#g5plus-modal-search').length < 2) return;
                var $prev = $item.prev();
                $item.removeClass('selected');
                if ($prev.length) {
                    $prev.addClass('selected');
                } else {
                    $('li:last', '#g5plus-modal-search').addClass('selected');
                    $prev = $('li:last', '#g5plus-modal-search');
                }
                if ($prev.position().top < $('#g5plus-modal-search .ajax-search-result').scrollTop()) {
                    $('#g5plus-modal-search .ajax-search-result').scrollTop($prev.position().top);
                } else if ($prev.position().top + $prev.outerHeight() > $('#g5plus-modal-search .ajax-search-result').scrollTop() + $('#g5plus-modal-search .ajax-search-result').height()) {
                    $('#g5plus-modal-search .ajax-search-result').scrollTop($prev.position().top - $('#g5plus-modal-search .ajax-search-result').height() + $prev.outerHeight());
                }
            }

            function s_down() {
                var $item = $('li.selected', '#g5plus-modal-search');
                if ($('li', '#g5plus-modal-search').length < 2) return;
                var $next = $item.next();
                $item.removeClass('selected');
                if ($next.length) {
                    $next.addClass('selected');
                } else {
                    $('li:first', '#g5plus-modal-search').addClass('selected');
                    $next = $('li:first', '#g5plus-modal-search');
                }
                if ($next.position().top < $('#g5plus-modal-search .ajax-search-result').scrollTop()) {
                    $('#g5plus-modal-search .ajax-search-result').scrollTop($next.position().top);
                } else if ($next.position().top + $next.outerHeight() > $('#g5plus-modal-search .ajax-search-result').scrollTop() + $('#g5plus-modal-search .ajax-search-result').height()) {
                    $('#g5plus-modal-search .ajax-search-result').scrollTop($next.position().top - $('#g5plus-modal-search .ajax-search-result').height() + $next.outerHeight());
                }
            }

            function s_enter() {
                var $item = $('li.selected a', '#g5plus-modal-search');
                if ($item.length > 0) {
                    window.location = $item.attr('href');
                }
            }

            function s_search() {
                var keyword = $('input[type="search"]', '#g5plus-modal-search').val();
                if (keyword.length < 3) {
                    $('.ajax-search-result', '#g5plus-modal-search').html('');
                    return;
                }
                $('.ajax-search-icon', '#g5plus-modal-search').addClass('fa-spinner fa-spin');
                $('.ajax-search-icon', '#g5plus-modal-search').removeClass('fa-search');
                $.ajax({
                    type: 'POST',
                    data: 'action=result_search&keyword=' + keyword,
                    url: g5plus_framework_ajax_url,
                    success: function(data) {
                        $('.ajax-search-icon', '#g5plus-modal-search').removeClass('fa-spinner fa-spin');
                        $('.ajax-search-icon', '#g5plus-modal-search').addClass('fa-search');
                        var html = '';
                        var html_view_more = '';
                        if (data) {
                            var items = $.parseJSON(data);
                            if (items.length) {
                                html += '<ul>';
                                if (items[0]['id'] == -1) {
                                    html += '<li>' + items[0]['title'] + '</li>';
                                } else {
                                    $.each(items, function(index) {
                                        if (this['id'] == -2) {
                                            html_view_more = '<div class="search-view-more">' + this['title'] + '</div>';
                                        } else {
                                            if (index == 0) {
                                                html += '<li class="selected">';
                                            } else {
                                                html += '<li>';
                                            }
                                            if (this['title'] == null || this['title'] == '') {
                                                html += '<a href="' + this['guid'] + '">' + this['date'] + '</a>';
                                            } else {
                                                html += '<a href="' + this['guid'] + '">' + this['title'] + '</a>';
                                                html += '<span>' + this['date'] + ' </span>';
                                            }
                                            html += '</li>';
                                        }
                                    });
                                }
                                html += '</ul>';
                            } else {
                                html = '';
                            }
                        }
                        $('.ajax-search-result', '#g5plus-modal-search').html(html + html_view_more);
                        $('#g5plus-modal-search .ajax-search-result').scrollTop(0);
                    },
                    error: function(data) {
                        $('.ajax-search-icon', '#g5plus-modal-search').removeClass('fa-spinner fa-spin');
                        $('.ajax-search-icon', '#g5plus-modal-search').addClass('fa-search');
                    }
                });
            }
        },
        searchPopupOpen: function() {
            if (!$('#g5plus-modal-search').hasClass('in')) {
                $('body').addClass('overflow-hidden');
                $('#g5plus-modal-search').show();
                setTimeout(function() {
                    $('#g5plus-modal-search').addClass('in');
                }, 300);
                if ($('#search-ajax', '#g5plus-modal-search').length > 0) {
                    $('#search-ajax', '#g5plus-modal-search').focus();
                    $('#search-ajax', '#g5plus-modal-search').val('');
                } else {
                    $('#search-standard', '#g5plus-modal-search').focus();
                    $('#search-standard', '#g5plus-modal-search').val('');
                }
                $('.ajax-search-result', '#g5plus-modal-search').html('');
            }
        },
        searchPopupClose: function() {
            if ($('#g5plus-modal-search').hasClass('in')) {
                $('#g5plus-modal-search').removeClass('in');
                setTimeout(function() {
                    $('#g5plus-modal-search').hide();
                    $('body').removeClass('overflow-hidden');
                }, 300);
            }
        },
        searchAjaxForm: function() {
            var $wrapper = $('header.main-header .search-box-wrapper');
            var $form_wrapper = $('header.main-header .search-box-wrapper form.search-type-ajax');
            $($window).click(function(event) {
                if ($(event.target).closest('header.main-header .search-box-wrapper').length == 0) {
                    $('.ajax-search-result', $wrapper).remove();
                    $('> input[type="text"]', $form_wrapper).val('');
                }
            });
            $form_wrapper.submit(function() {
                return false;
            });
            $('> input[type="text"]', $form_wrapper).on('keyup', function(event) {
                if (event.altKey || event.ctrlKey || event.shiftKey || event.metaKey) {
                    return;
                }
                var keys = ["Control", "Alt", "Shift"];
                if (keys.indexOf(event.key) != -1) return;
                switch (event.which) {
                    case 27:
                        remove_search_result();
                        break;
                    case 38:
                        G5Plus.search.up($wrapper);
                        break;
                    case 40:
                        G5Plus.search.down($wrapper);
                        break;
                    case 13:
                        s_enter();
                        break;
                    default:
                        clearTimeout(G5Plus.header.timeOutSearch);
                        G5Plus.header.timeOutSearch = setTimeout(s_search, 500);
                        break;
                }

                function remove_search_result() {
                    $('.ajax-search-result', $wrapper).remove();
                    $('> input[type="text"]', $form_wrapper).val('');
                }

                function s_enter() {
                    var $item = $('li.selected a', $wrapper);
                    if ($item.length > 0) {
                        window.location = $item.attr('href');
                    }
                }

                function s_search() {
                    var keyword = $('input[type="text"]', $form_wrapper).val();
                    if (keyword.length < 3) {
                        if ($('.ajax-search-result', $form_wrapper).length == 0) {
                            $($form_wrapper).append('<div class="ajax-search-result"></div>');
                        }
                        var hint_message = $wrapper.attr('data-hint-message');
                        $('.ajax-search-result', $wrapper).html('<ul><li class="no-result">' + hint_message + '</li></ul>');
                        return;
                    }
                    $('button > i', $form_wrapper).addClass('fa-spinner fa-spin');
                    $('button > i', $form_wrapper).removeClass('fa-search');
                    $.ajax({
                        type: 'POST',
                        data: 'action=result_search&keyword=' + keyword,
                        url: g5plus_framework_ajax_url,
                        success: function(data) {
                            $('button > i', $wrapper).removeClass('fa-spinner fa-spin');
                            $('button > i', $wrapper).addClass('fa-search');
                            var html = '';
                            var html_view_more = '';
                            if (data) {
                                var items = $.parseJSON(data);
                                if (items.length) {
                                    html += '<ul>';
                                    if (items[0]['id'] == -1) {
                                        html += '<li class="no-result">' + items[0]['title'] + '</li>';
                                    } else {
                                        $.each(items, function(index) {
                                            if (this['id'] == -2) {
                                                html_view_more = '<div class="search-view-more">' + this['title'] + '</div>';
                                            } else {
                                                if (index == 0) {
                                                    html += '<li class="selected">';
                                                } else {
                                                    html += '<li>';
                                                }
                                                if (this['title'] == null || this['title'] == '') {
                                                    html += '<a href="' + this['guid'] + '">' + this['date'] + '</a>';
                                                } else {
                                                    html += '<a href="' + this['guid'] + '">' + this['title'] + '</a>';
                                                }
                                                html += '</li>';
                                            }
                                        });
                                    }
                                    html += '</ul>';
                                } else {
                                    html = '';
                                }
                            }
                            if ($('.ajax-search-result', $form_wrapper).length == 0) {
                                $($form_wrapper).append('<div class="ajax-search-result"></div>');
                            }
                            $('.ajax-search-result', $wrapper).html(html + html_view_more);
                            $('.ajax-search-result ul', $wrapper).scrollTop(0);
                        },
                        error: function(data) {
                            $('button > i', $wrapper).removeClass('fa-spinner fa-spin');
                            $('button > i', $wrapper).addClass('fa-search');
                        }
                    });
                }
            });
        },
        headerNavSpacing: function(retryAmount) {
            if (typeof(retryAmount) == "undefined") {
                retryAmount = 0;
            }
            if (!G5Plus.common.isDesktop()) {
                return;
            }
            var $container = $('header.main-header .header-nav-wrapper > .container');
            $('ul.main-menu > li, .header-customize', $container).css('margin-left', '');
            var navContainerWidth = $container.width();
            var navItemWidth = 0;
            var navItemCount = 0;
            var marginLeft = 0;
            var totalMarginLeft = 0;
            $('ul.main-menu > li, .header-customize,.header-left .header-logo,.header-left .logo-sticky', $container).each(function() {
                var $this = $(this);
                if ($this.is(':visible')) {
                    marginLeft = parseInt($this.css('margin-left').replace('px', ''), 10);
                    navItemWidth += $this.outerWidth() + marginLeft + 1;
                    totalMarginLeft += marginLeft;
                    if (marginLeft > 0) {
                        navItemCount++;
                    }
                }
            });
            if ($('.header-customize', $container).length > 0) {
                marginLeft = parseInt($('.header-customize', $container).css('margin-left').replace('px', ''), 10);
                totalMarginLeft += marginLeft;
                navItemWidth += marginLeft;
                if (marginLeft > 0) {
                    navItemCount++;
                }
            }
            navItemWidth += 50;
            if ((navItemCount > 0) && (navItemWidth > navContainerWidth)) {
                var newMarginLeft = (totalMarginLeft - (navItemWidth - navContainerWidth)) / (1.0 * navItemCount);
                if (marginLeft < 5) {
                    marginLeft = 5;
                }
                $('ul.main-menu > li.x-menu-item + li, .header-customize', $container).css('margin-left', newMarginLeft + 'px');
                if ($('ul.main-menu > li.logo-sticky', $container).is(':visible')) {
                    $('ul.main-menu > li.logo-sticky + li', $container).css('margin-left', newMarginLeft + 'px');
                }
            }
            if (retryAmount > 0) {
                setTimeout(function() {
                    G5Plus.header.headerNavSpacing(retryAmount - 1);
                }, 100);
            }
        },
        changeStickyWrapperSize: function(count) {
            var $sticky_wrapper = $('header.main-header .sticky-wrapper');
            if ($sticky_wrapper.length > 0) {
                // $sticky_wrapper.height($(' > .header-sticky', $sticky_wrapper).outerHeight());
            }
            if (count > 0) {
                setTimeout(function() {
                    G5Plus.header.changeStickyWrapperSize(count - 1);
                }, 100);
            }
        },
        headerLeftScrollBar: function() {
            $('header.header-left').perfectScrollbar({
                wheelSpeed: 0.5,
                suppressScrollX: true
            });
        },
        searchCategory: function() {
            $('.search-with-category').each(function() {
                var $wrapperLeft = $('.form-search-left', this);
                var $wrapper = $(this);
                $(document).on('click', function(event) {
                    if ($(event.target).closest('.form-search-left', $wrapper).length === 0) {
                        $(' > ul', $wrapperLeft).slideUp();
                    }
                    if (($(event.target).closest('.form-search-right,.ajax-search-result', $wrapper).length === 0)) {
                        $('.ajax-search-result', $wrapper).remove();
                        $('input', $wrapper).val('');
                    }
                });
                var sHtml = '<li><span data-id="-1" data-value="' + $('> span', $wrapperLeft).text() + '">[' + $('> span', $wrapperLeft).text() + ']</span></li>';
                $('> ul', $wrapperLeft).prepend(sHtml);
                $('> span', $wrapperLeft).on('click', function() {
                    $('> ul', $(this).parent()).slideToggle();
                });
                $('li > span', $wrapperLeft).on('click', function() {
                    var $this = $(this);
                    var id = $this.attr('data-id');
                    var text = '';
                    if (typeof($this.attr('data-value')) != "undefined") {
                        text = $this.attr('data-value');
                    } else {
                        text = $this.text();
                    }
                    var $cate_current = $('> span', $wrapperLeft);
                    $cate_current.text(text);
                    $cate_current.attr('data-id', id);
                    $(' > ul', $wrapperLeft).slideUp();
                });
                var $inputSearch = $('input', $wrapper);
                $inputSearch.on('keyup', function(event) {
                    var s_timeOut_search = null;
                    if (event.altKey || event.ctrlKey || event.shiftKey || event.metaKey) {
                        return;
                    }
                    var keys = ["Control", "Alt", "Shift"];
                    if (keys.indexOf(event.key) != -1) return;
                    switch (event.which) {
                        case 37:
                        case 39:
                            break;
                        case 27:
                            $('.ajax-search-result', $wrapper).remove();
                            $(this).val('');
                            break;
                        case 38:
                            G5Plus.search.up($('.ajax-search-result', $wrapper));
                            break;
                        case 40:
                            G5Plus.search.down($('.ajax-search-result', $wrapper));
                            break;
                        case 13:
                            var $item = $('.ajax-search-result li.selected a', $wrapper);
                            if ($item.length == 0) {
                                event.preventDefault();
                                return false;
                            }
                            window.location = $item.attr('href');
                            event.preventDefault();
                            return false;
                        default:
                            clearTimeout(s_timeOut_search);
                            s_timeOut_search = setTimeout(function() {
                                s_search($wrapper);
                            }, 500);
                            break;
                    }
                });
            });

            function s_search($wrapper) {
                var keyword = $('input[type="text"]', $wrapper).val();
                if (keyword.length < 3) {
                    if ($('.ajax-search-result', $wrapper).length == 0) {
                        $($wrapper).append('<div class="ajax-search-result"></div>');
                    }
                    var hint_message = $wrapper.attr('data-hint-message');
                    $('.ajax-search-result', $wrapper).html('<ul><li class="no-result">' + hint_message + '</li></ul>');
                    return;
                }
                $('button > i', $wrapper).addClass('fa-spinner fa-spin');
                $('button > i', $wrapper).removeClass('fa-search');
                $.ajax({
                    type: 'POST',
                    data: 'action=result_search_product&keyword=' + keyword + '&cate_id=' + $('.form-search-left > span', $wrapper).attr('data-id'),
                    url: g5plus_framework_ajax_url,
                    success: function(data) {
                        $('button > i', $wrapper).removeClass('fa-spinner fa-spin');
                        $('button > i', $wrapper).addClass('fa-search');
                        var html = '';
                        var sHtmlViewMore = '';
                        if (data) {
                            var items = $.parseJSON(data);
                            if (items.length) {
                                html += '<ul>';
                                if (items[0]['id'] == -1) {
                                    html += '<li class="no-result">' + items[0]['title'] + '</li>';
                                } else {
                                    $.each(items, function(index) {
                                        if (this['id'] == -2) {
                                            sHtmlViewMore = '<div class="search-view-more">' + this['title'] + '</div>';
                                        } else {
                                            if (index == 0) {
                                                html += '<li class="selected">';
                                            } else {
                                                html += '<li>';
                                            }
                                            html += '<a href="' + this['guid'] + '">';
                                            html += this['thumb'];
                                            html += this['title'] + '</a>';
                                            html += '<div class="price">' + this['price'] + '</div>';
                                            html += '</li>';
                                        }
                                    });
                                }
                                html += '</ul>';
                            } else {
                                html = '';
                            }
                        }
                        if ($('.ajax-search-result', $wrapper).length == 0) {
                            $($wrapper).append('<div class="ajax-search-result"></div>');
                        }
                        $('.ajax-search-result', $wrapper).html(html + sHtmlViewMore);
                        $('.ajax-search-result li', $wrapper).hover(function() {
                            $('.ajax-search-result li', $wrapper).removeClass('selected');
                            $(this).addClass('selected');
                        });
                        $('.ajax-search-result ul', $wrapper).scrollTop(0);
                    },
                    error: function(data) {
                        $('button > i', $wrapper).removeClass('fa-spinner fa-spin');
                        $('button > i', $wrapper).addClass('fa-search');
                    }
                });
            }
        }
    };
    G5Plus.footer = {
        init: function() {
            G5Plus.footer.showMap();
            G5Plus.footer.scrollUp();
        },
        showMap: function() {
            var $map_wrap = $('.handmade-map', '.map-scroll-up');
            var $maps = $('.handmade-google-map', '.map-scroll-up');
            $($map_wrap).hide();
            $('.a-map', '.map-scroll-up').click(function() {
                if ($($map_wrap).is(':visible')) {
                    $($map_wrap).slideUp();
                } else {
                    $($map_wrap).slideDown(function() {
                        if ($maps.length > 0) {
                            var $map = $maps[0];
                            var isInit = $($map).attr('data-map-init');
                            if ((typeof isInit) == 'undefined' || isInit == null || isInit == '') {
                                var locationX = $($map).attr('data-location-x');
                                var locationY = $($map).attr('data-location-y');
                                var markerTitle = $($map).attr('data-marker-title');
                                var mapZoom = $($map).attr('data-map-zoom');
                                if (mapZoom == '' || (typeof mapZoom) == 'undefined') {
                                    mapZoom = 11;
                                }
                                if ((typeof markerTitle) == 'markerTitle') {
                                    markerTitle = 'Our location';
                                }
                                mapZoom = parseInt(mapZoom, 10);
                                var map = new google.maps.Map($map, {
                                    zoom: mapZoom,
                                    scrollwheel: false,
                                    center: new google.maps.LatLng(locationX, locationY)
                                });
                                var marker = new google.maps.Marker({
                                    position: new google.maps.LatLng(locationX, locationY),
                                    map: map,
                                    title: markerTitle
                                });
                                $($map).attr('data-map-init', 1);
                            }
                        }
                    });
                }
            });
        },
        scrollUp: function() {
            var $scrollUp = $('.a-scroll-up', '.map-scroll-up');
            if ($scrollUp.length > 0) {
                $scrollUp.click(function(event) {
                    event.preventDefault();
                    $('html,body').animate({
                        scrollTop: '0px'
                    }, 800);
                });
            }
        }
    };
    G5Plus.onReady = {
        init: function() {
            G5Plus.common.init();
            G5Plus.header.init();
            G5Plus.page.init();
            G5Plus.blog.init();
            G5Plus.portfolio.init();
            G5Plus.woocommerce.init();
            G5Plus.footer.init();
        }
    };
    G5Plus.onLoad = {
        init: function() {
            G5Plus.header.windowLoad();
            G5Plus.page.windowLoad();
            G5Plus.woocommerce.windowLoad();
        }
    };
    G5Plus.onResize = {
        init: function() {
            G5Plus.page.windowResized();
            G5Plus.woocommerce.windowResized();
            G5Plus.header.windowResized();
            G5Plus.blog.windowResized();
        }
    };
    G5Plus.onScroll = {
        init: function() {}
    };
    $(window).resize(G5Plus.onResize.init);
    $(window).scroll(G5Plus.onScroll.init);
    $(document).ready(G5Plus.onReady.init);
    $(window).load(G5Plus.onLoad.init);
})(jQuery);;
(function(b, f) {
    "function" === typeof define && define.amd ? define(["jquery"], f) : b.jQuery ? f(b.jQuery) : f(b.Zepto)
})(this, function(b, f) {
    b.fn.jPlayer = function(a) {
        var c = "string" === typeof a,
            d = Array.prototype.slice.call(arguments, 1),
            e = this;
        a = !c && d.length ? b.extend.apply(null, [!0, a].concat(d)) : a;
        if (c && "_" === a.charAt(0)) return e;
        c ? this.each(function() {
            var c = b(this).data("jPlayer"),
                h = c && b.isFunction(c[a]) ? c[a].apply(c, d) : c;
            if (h !== c && h !== f) return e = h, !1
        }) : this.each(function() {
            var c = b(this).data("jPlayer");
            c ? c.option(a || {}) : b(this).data("jPlayer", new b.jPlayer(a, this))
        });
        return e
    };
    b.jPlayer = function(a, c) {
        if (arguments.length) {
            this.element = b(c);
            this.options = b.extend(!0, {}, this.options, a);
            var d = this;
            this.element.bind("remove.jPlayer", function() {
                d.destroy()
            });
            this._init()
        }
    };
    "function" !== typeof b.fn.stop && (b.fn.stop = function() {});
    b.jPlayer.emulateMethods = "load play pause";
    b.jPlayer.emulateStatus = "src readyState networkState currentTime duration paused ended playbackRate";
    b.jPlayer.emulateOptions = "muted volume";
    b.jPlayer.reservedEvent = "ready flashreset resize repeat error warning";
    b.jPlayer.event = {};
    b.each("ready setmedia flashreset resize repeat click error warning loadstart progress suspend abort emptied stalled play pause loadedmetadata loadeddata waiting playing canplay canplaythrough seeking seeked timeupdate ended ratechange durationchange volumechange".split(" "), function() {
        b.jPlayer.event[this] = "jPlayer_" + this
    });
    b.jPlayer.htmlEvent = "loadstart abort emptied stalled loadedmetadata loadeddata canplay canplaythrough".split(" ");
    b.jPlayer.pause = function() {
        b.each(b.jPlayer.prototype.instances, function(a, c) {
            c.data("jPlayer").status.srcSet && c.jPlayer("pause")
        })
    };
    b.jPlayer.timeFormat = {
        showHour: !1,
        showMin: !0,
        showSec: !0,
        padHour: !1,
        padMin: !0,
        padSec: !0,
        sepHour: ":",
        sepMin: ":",
        sepSec: ""
    };
    var l = function() {
        this.init()
    };
    l.prototype = {
        init: function() {
            this.options = {
                timeFormat: b.jPlayer.timeFormat
            }
        },
        time: function(a) {
            var c = new Date(1E3 * (a && "number" === typeof a ? a : 0)),
                b = c.getUTCHours();
            a = this.options.timeFormat.showHour ? c.getUTCMinutes() : c.getUTCMinutes() +
                60 * b;
            c = this.options.timeFormat.showMin ? c.getUTCSeconds() : c.getUTCSeconds() + 60 * a;
            b = this.options.timeFormat.padHour && 10 > b ? "0" + b : b;
            a = this.options.timeFormat.padMin && 10 > a ? "0" + a : a;
            c = this.options.timeFormat.padSec && 10 > c ? "0" + c : c;
            b = "" + (this.options.timeFormat.showHour ? b + this.options.timeFormat.sepHour : "");
            b += this.options.timeFormat.showMin ? a + this.options.timeFormat.sepMin : "";
            return b += this.options.timeFormat.showSec ? c + this.options.timeFormat.sepSec : ""
        }
    };
    var n = new l;
    b.jPlayer.convertTime = function(a) {
        return n.time(a)
    };
    b.jPlayer.uaBrowser = function(a) {
        a = a.toLowerCase();
        var c = /(opera)(?:.*version)?[ \/]([\w.]+)/,
            b = /(msie) ([\w.]+)/,
            e = /(mozilla)(?:.*? rv:([\w.]+))?/;
        a = /(webkit)[ \/]([\w.]+)/.exec(a) || c.exec(a) || b.exec(a) || 0 > a.indexOf("compatible") && e.exec(a) || [];
        return {
            browser: a[1] || "",
            version: a[2] || "0"
        }
    };
    b.jPlayer.uaPlatform = function(a) {
        var c = a.toLowerCase(),
            b = /(android)/,
            e = /(mobile)/;
        a = /(ipad|iphone|ipod|android|blackberry|playbook|windows ce|webos)/.exec(c) || [];
        c = /(ipad|playbook)/.exec(c) || !e.exec(c) && b.exec(c) || [];
        a[1] && (a[1] = a[1].replace(/\s/g, "_"));
        return {
            platform: a[1] || "",
            tablet: c[1] || ""
        }
    };
    b.jPlayer.browser = {};
    b.jPlayer.platform = {};
    var k = b.jPlayer.uaBrowser(navigator.userAgent);
    k.browser && (b.jPlayer.browser[k.browser] = !0, b.jPlayer.browser.version = k.version);
    k = b.jPlayer.uaPlatform(navigator.userAgent);
    k.platform && (b.jPlayer.platform[k.platform] = !0, b.jPlayer.platform.mobile = !k.tablet, b.jPlayer.platform.tablet = !!k.tablet);
    b.jPlayer.getDocMode = function() {
        var a;
        b.jPlayer.browser.msie && (document.documentMode ? a = document.documentMode : (a = 5, document.compatMode && "CSS1Compat" === document.compatMode && (a = 7)));
        return a
    };
    b.jPlayer.browser.documentMode = b.jPlayer.getDocMode();
    b.jPlayer.nativeFeatures = {
        init: function() {
            var a = document,
                c = a.createElement("video"),
                b = {
                    w3c: "fullscreenEnabled fullscreenElement requestFullscreen exitFullscreen fullscreenchange fullscreenerror".split(" "),
                    moz: "mozFullScreenEnabled mozFullScreenElement mozRequestFullScreen mozCancelFullScreen mozfullscreenchange mozfullscreenerror".split(" "),
                    webkit: " webkitCurrentFullScreenElement webkitRequestFullScreen webkitCancelFullScreen webkitfullscreenchange ".split(" "),
                    webkitVideo: "webkitSupportsFullscreen webkitDisplayingFullscreen webkitEnterFullscreen webkitExitFullscreen  ".split(" ")
                },
                e = ["w3c", "moz", "webkit", "webkitVideo"],
                g, h;
            this.fullscreen = c = {
                support: {
                    w3c: !!a[b.w3c[0]],
                    moz: !!a[b.moz[0]],
                    webkit: "function" === typeof a[b.webkit[3]],
                    webkitVideo: "function" === typeof c[b.webkitVideo[2]]
                },
                used: {}
            };
            g = 0;
            for (h = e.length; g < h; g++) {
                var f = e[g];
                if (c.support[f]) {
                    c.spec = f;
                    c.used[f] = !0;
                    break
                }
            }
            if (c.spec) {
                var m = b[c.spec];
                c.api = {
                    fullscreenEnabled: !0,
                    fullscreenElement: function(c) {
                        c = c ? c : a;
                        return c[m[1]]
                    },
                    requestFullscreen: function(a) {
                        return a[m[2]]()
                    },
                    exitFullscreen: function(c) {
                        c = c ? c : a;
                        return c[m[3]]()
                    }
                };
                c.event = {
                    fullscreenchange: m[4],
                    fullscreenerror: m[5]
                }
            } else c.api = {
                fullscreenEnabled: !1,
                fullscreenElement: function() {
                    return null
                },
                requestFullscreen: function() {},
                exitFullscreen: function() {}
            }, c.event = {}
        }
    };
    b.jPlayer.nativeFeatures.init();
    b.jPlayer.focus = null;
    b.jPlayer.keyIgnoreElementNames = "A INPUT TEXTAREA SELECT BUTTON";
    var p = function(a) {
        var c = b.jPlayer.focus,
            d = document.activeElement,
            e;
        c && ("undefined" !== typeof d ? null !== d && "BODY" !== d.nodeName.toUpperCase() && (e = !0) : b.each(b.jPlayer.keyIgnoreElementNames.split(/\s+/g), function(c, b) {
            if (a.target.nodeName.toUpperCase() === b.toUpperCase()) return e = !0, !1
        }), e || b.each(c.options.keyBindings, function(d, e) {
            if (e && a.which === e.key && b.isFunction(e.fn)) return a.preventDefault(), e.fn(c), !1
        }))
    };
    b.jPlayer.keys = function(a) {
        b(document.documentElement).unbind("keydown.jPlayer");
        a && b(document.documentElement).bind("keydown.jPlayer", p)
    };
    b.jPlayer.keys(!0);
    b.jPlayer.prototype = {
        count: 0,
        version: {
            script: "2.7.0",
            needFlash: "2.7.0",
            flash: "unknown"
        },
        options: {
            swfPath: "js",
            solution: "html, flash",
            supplied: "mp3",
            preload: "metadata",
            volume: .8,
            muted: !1,
            remainingDuration: !1,
            toggleDuration: !1,
            captureDuration: !0,
            playbackRate: 1,
            defaultPlaybackRate: 1,
            minPlaybackRate: .5,
            maxPlaybackRate: 4,
            wmode: "opaque",
            backgroundColor: "#000000",
            cssSelectorAncestor: "#jp_container_1",
            cssSelector: {
                videoPlay: ".jp-video-play",
                play: ".jp-play",
                pause: ".jp-pause",
                stop: ".jp-stop",
                seekBar: ".jp-seek-bar",
                playBar: ".jp-play-bar",
                mute: ".jp-mute",
                unmute: ".jp-unmute",
                volumeBar: ".jp-volume-bar",
                volumeBarValue: ".jp-volume-bar-value",
                volumeMax: ".jp-volume-max",
                playbackRateBar: ".jp-playback-rate-bar",
                playbackRateBarValue: ".jp-playback-rate-bar-value",
                currentTime: ".jp-current-time",
                duration: ".jp-duration",
                title: ".jp-title",
                fullScreen: ".jp-full-screen",
                restoreScreen: ".jp-restore-screen",
                repeat: ".jp-repeat",
                repeatOff: ".jp-repeat-off",
                gui: ".jp-gui",
                noSolution: ".jp-no-solution"
            },
            stateClass: {
                playing: "jp-state-playing",
                seeking: "jp-state-seeking",
                muted: "jp-state-muted",
                looped: "jp-state-looped",
                fullScreen: "jp-state-full-screen"
            },
            useStateClassSkin: !1,
            autoBlur: !0,
            smoothPlayBar: !1,
            fullScreen: !1,
            fullWindow: !1,
            autohide: {
                restored: !1,
                full: !0,
                fadeIn: 200,
                fadeOut: 600,
                hold: 1E3
            },
            loop: !1,
            repeat: function(a) {
                a.jPlayer.options.loop ? b(this).unbind(".jPlayerRepeat").bind(b.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
                    b(this).jPlayer("play")
                }) : b(this).unbind(".jPlayerRepeat")
            },
            nativeVideoControls: {},
            noFullWindow: {
                msie: /msie [0-6]\./,
                ipad: /ipad.*?os [0-4]\./,
                iphone: /iphone/,
                ipod: /ipod/,
                android_pad: /android [0-3]\.(?!.*?mobile)/,
                android_phone: /android.*?mobile/,
                blackberry: /blackberry/,
                windows_ce: /windows ce/,
                iemobile: /iemobile/,
                webos: /webos/
            },
            noVolume: {
                ipad: /ipad/,
                iphone: /iphone/,
                ipod: /ipod/,
                android_pad: /android(?!.*?mobile)/,
                android_phone: /android.*?mobile/,
                blackberry: /blackberry/,
                windows_ce: /windows ce/,
                iemobile: /iemobile/,
                webos: /webos/,
                playbook: /playbook/
            },
            timeFormat: {},
            keyEnabled: !1,
            audioFullScreen: !1,
            keyBindings: {
                play: {
                    key: 32,
                    fn: function(a) {
                        a.status.paused ? a.play() : a.pause()
                    }
                },
                fullScreen: {
                    key: 13,
                    fn: function(a) {
                        (a.status.video || a.options.audioFullScreen) && a._setOption("fullScreen", !a.options.fullScreen)
                    }
                },
                muted: {
                    key: 8,
                    fn: function(a) {
                        a._muted(!a.options.muted)
                    }
                },
                volumeUp: {
                    key: 38,
                    fn: function(a) {
                        a.volume(a.options.volume + .1)
                    }
                },
                volumeDown: {
                    key: 40,
                    fn: function(a) {
                        a.volume(a.options.volume - .1)
                    }
                }
            },
            verticalVolume: !1,
            verticalPlaybackRate: !1,
            globalVolume: !1,
            idPrefix: "jp",
            noConflict: "jQuery",
            emulateHtml: !1,
            consoleAlerts: !0,
            errorAlerts: !1,
            warningAlerts: !1
        },
        optionsAudio: {
            size: {
                width: "0px",
                height: "0px",
                cssClass: ""
            },
            sizeFull: {
                width: "0px",
                height: "0px",
                cssClass: ""
            }
        },
        optionsVideo: {
            size: {
                width: "480px",
                height: "270px",
                cssClass: "jp-video-270p"
            },
            sizeFull: {
                width: "100%",
                height: "100%",
                cssClass: "jp-video-full"
            }
        },
        instances: {},
        status: {
            src: "",
            media: {},
            paused: !0,
            format: {},
            formatType: "",
            waitForPlay: !0,
            waitForLoad: !0,
            srcSet: !1,
            video: !1,
            seekPercent: 0,
            currentPercentRelative: 0,
            currentPercentAbsolute: 0,
            currentTime: 0,
            duration: 0,
            remaining: 0,
            videoWidth: 0,
            videoHeight: 0,
            readyState: 0,
            networkState: 0,
            playbackRate: 1,
            ended: 0
        },
        internal: {
            ready: !1
        },
        solution: {
            html: !0,
            flash: !0
        },
        format: {
            mp3: {
                codec: "audio/mpeg",
                flashCanPlay: !0,
                media: "audio"
            },
            m4a: {
                codec: 'audio/mp4; codecs="mp4a.40.2"',
                flashCanPlay: !0,
                media: "audio"
            },
            m3u8a: {
                codec: 'application/vnd.apple.mpegurl; codecs="mp4a.40.2"',
                flashCanPlay: !1,
                media: "audio"
            },
            m3ua: {
                codec: "audio/mpegurl",
                flashCanPlay: !1,
                media: "audio"
            },
            oga: {
                codec: 'audio/ogg; codecs="vorbis, opus"',
                flashCanPlay: !1,
                media: "audio"
            },
            flac: {
                codec: "audio/x-flac",
                flashCanPlay: !1,
                media: "audio"
            },
            wav: {
                codec: 'audio/wav; codecs="1"',
                flashCanPlay: !1,
                media: "audio"
            },
            webma: {
                codec: 'audio/webm; codecs="vorbis"',
                flashCanPlay: !1,
                media: "audio"
            },
            fla: {
                codec: "audio/x-flv",
                flashCanPlay: !0,
                media: "audio"
            },
            rtmpa: {
                codec: 'audio/rtmp; codecs="rtmp"',
                flashCanPlay: !0,
                media: "audio"
            },
            m4v: {
                codec: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
                flashCanPlay: !0,
                media: "video"
            },
            m3u8v: {
                codec: 'application/vnd.apple.mpegurl; codecs="avc1.42E01E, mp4a.40.2"',
                flashCanPlay: !1,
                media: "video"
            },
            m3uv: {
                codec: "audio/mpegurl",
                flashCanPlay: !1,
                media: "video"
            },
            ogv: {
                codec: 'video/ogg; codecs="theora, vorbis"',
                flashCanPlay: !1,
                media: "video"
            },
            webmv: {
                codec: 'video/webm; codecs="vorbis, vp8"',
                flashCanPlay: !1,
                media: "video"
            },
            flv: {
                codec: "video/x-flv",
                flashCanPlay: !0,
                media: "video"
            },
            rtmpv: {
                codec: 'video/rtmp; codecs="rtmp"',
                flashCanPlay: !0,
                media: "video"
            }
        },
        _init: function() {
            var a = this;
            this.element.empty();
            this.status = b.extend({}, this.status);
            this.internal = b.extend({}, this.internal);
            this.options.timeFormat = b.extend({}, b.jPlayer.timeFormat, this.options.timeFormat);
            this.internal.cmdsIgnored = b.jPlayer.platform.ipad || b.jPlayer.platform.iphone || b.jPlayer.platform.ipod;
            this.internal.domNode = this.element.get(0);
            this.options.keyEnabled && !b.jPlayer.focus && (b.jPlayer.focus = this);
            this.androidFix = {
                setMedia: !1,
                play: !1,
                pause: !1,
                time: NaN
            };
            b.jPlayer.platform.android && (this.options.preload = "auto" !== this.options.preload ? "metadata" : "auto");
            this.formats = [];
            this.solutions = [];
            this.require = {};
            this.htmlElement = {};
            this.html = {};
            this.html.audio = {};
            this.html.video = {};
            this.flash = {};
            this.css = {};
            this.css.cs = {};
            this.css.jq = {};
            this.ancestorJq = [];
            this.options.volume = this._limitValue(this.options.volume, 0, 1);
            b.each(this.options.supplied.toLowerCase().split(","), function(c, d) {
                var e = d.replace(/^\s+|\s+$/g, "");
                if (a.format[e]) {
                    var f = !1;
                    b.each(a.formats, function(a, c) {
                        if (e === c) return f = !0, !1
                    });
                    f || a.formats.push(e)
                }
            });
            b.each(this.options.solution.toLowerCase().split(","), function(c, d) {
                var e = d.replace(/^\s+|\s+$/g, "");
                if (a.solution[e]) {
                    var f = !1;
                    b.each(a.solutions, function(a, c) {
                        if (e === c) return f = !0, !1
                    });
                    f || a.solutions.push(e)
                }
            });
            this.internal.instance = "jp_" + this.count;
            this.instances[this.internal.instance] = this.element;
            this.element.attr("id") || this.element.attr("id", this.options.idPrefix + "_jplayer_" + this.count);
            this.internal.self = b.extend({}, {
                id: this.element.attr("id"),
                jq: this.element
            });
            this.internal.audio = b.extend({}, {
                id: this.options.idPrefix + "_audio_" + this.count,
                jq: f
            });
            this.internal.video = b.extend({}, {
                id: this.options.idPrefix + "_video_" +
                    this.count,
                jq: f
            });
            this.internal.flash = b.extend({}, {
                id: this.options.idPrefix + "_flash_" + this.count,
                jq: f,
                swf: this.options.swfPath + (".swf" !== this.options.swfPath.toLowerCase().slice(-4) ? (this.options.swfPath && "/" !== this.options.swfPath.slice(-1) ? "/" : "") + "Jplayer.swf" : "")
            });
            this.internal.poster = b.extend({}, {
                id: this.options.idPrefix + "_poster_" + this.count,
                jq: f
            });
            b.each(b.jPlayer.event, function(c, b) {
                a.options[c] !== f && (a.element.bind(b + ".jPlayer", a.options[c]), a.options[c] = f)
            });
            this.require.audio = !1;
            this.require.video = !1;
            b.each(this.formats, function(c, b) {
                a.require[a.format[b].media] = !0
            });
            this.options = this.require.video ? b.extend(!0, {}, this.optionsVideo, this.options) : b.extend(!0, {}, this.optionsAudio, this.options);
            this._setSize();
            this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls);
            this.status.noFullWindow = this._uaBlocklist(this.options.noFullWindow);
            this.status.noVolume = this._uaBlocklist(this.options.noVolume);
            b.jPlayer.nativeFeatures.fullscreen.api.fullscreenEnabled && this._fullscreenAddEventListeners();
            this._restrictNativeVideoControls();
            this.htmlElement.poster = document.createElement("img");
            this.htmlElement.poster.id = this.internal.poster.id;
            this.htmlElement.poster.onload = function() {
                a.status.video && !a.status.waitForPlay || a.internal.poster.jq.show()
            };
            this.element.append(this.htmlElement.poster);
            this.internal.poster.jq = b("#" + this.internal.poster.id);
            this.internal.poster.jq.css({
                width: this.status.width,
                height: this.status.height
            });
            this.internal.poster.jq.hide();
            this.internal.poster.jq.bind("click.jPlayer", function() {
                a._trigger(b.jPlayer.event.click)
            });
            this.html.audio.available = !1;
            this.require.audio && (this.htmlElement.audio = document.createElement("audio"), this.htmlElement.audio.id = this.internal.audio.id, this.html.audio.available = !!this.htmlElement.audio.canPlayType && this._testCanPlayType(this.htmlElement.audio));
            this.html.video.available = !1;
            this.require.video && (this.htmlElement.video = document.createElement("video"), this.htmlElement.video.id = this.internal.video.id, this.html.video.available = !!this.htmlElement.video.canPlayType && this._testCanPlayType(this.htmlElement.video));
            this.flash.available = this._checkForFlash(10.1);
            this.html.canPlay = {};
            this.flash.canPlay = {};
            b.each(this.formats, function(c, b) {
                a.html.canPlay[b] = a.html[a.format[b].media].available && "" !== a.htmlElement[a.format[b].media].canPlayType(a.format[b].codec);
                a.flash.canPlay[b] = a.format[b].flashCanPlay && a.flash.available
            });
            this.html.desired = !1;
            this.flash.desired = !1;
            b.each(this.solutions, function(c, d) {
                if (0 === c) a[d].desired = !0;
                else {
                    var e = !1,
                        f = !1;
                    b.each(a.formats, function(c, b) {
                        a[a.solutions[0]].canPlay[b] && ("video" === a.format[b].media ? f = !0 : e = !0)
                    });
                    a[d].desired = a.require.audio && !e || a.require.video && !f
                }
            });
            this.html.support = {};
            this.flash.support = {};
            b.each(this.formats, function(c, b) {
                a.html.support[b] = a.html.canPlay[b] && a.html.desired;
                a.flash.support[b] = a.flash.canPlay[b] && a.flash.desired
            });
            this.html.used = !1;
            this.flash.used = !1;
            b.each(this.solutions, function(c, d) {
                b.each(a.formats, function(c, b) {
                    if (a[d].support[b]) return a[d].used = !0, !1
                })
            });
            this._resetActive();
            this._resetGate();
            this._cssSelectorAncestor(this.options.cssSelectorAncestor);
            this.html.used || this.flash.used ? this.css.jq.noSolution.length && this.css.jq.noSolution.hide() : (this._error({
                type: b.jPlayer.error.NO_SOLUTION,
                context: "{solution:'" + this.options.solution + "', supplied:'" + this.options.supplied + "'}",
                message: b.jPlayer.errorMsg.NO_SOLUTION,
                hint: b.jPlayer.errorHint.NO_SOLUTION
            }), this.css.jq.noSolution.length && this.css.jq.noSolution.show());
            if (this.flash.used) {
                var c, d = "jQuery=" + encodeURI(this.options.noConflict) + "&id=" +
                    encodeURI(this.internal.self.id) + "&vol=" + this.options.volume + "&muted=" + this.options.muted;
                if (b.jPlayer.browser.msie && (9 > Number(b.jPlayer.browser.version) || 9 > b.jPlayer.browser.documentMode)) {
                    d = ['<param name="movie" value="' + this.internal.flash.swf + '" />', '<param name="FlashVars" value="' + d + '" />', '<param name="allowScriptAccess" value="always" />', '<param name="bgcolor" value="' + this.options.backgroundColor + '" />', '<param name="wmode" value="' + this.options.wmode + '" />'];
                    c = document.createElement('<object id="' +
                        this.internal.flash.id + '" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="0" height="0" tabindex="-1"></object>');
                    for (var e = 0; e < d.length; e++) c.appendChild(document.createElement(d[e]))
                } else e = function(a, c, b) {
                    var d = document.createElement("param");
                    d.setAttribute("name", c);
                    d.setAttribute("value", b);
                    a.appendChild(d)
                }, c = document.createElement("object"), c.setAttribute("id", this.internal.flash.id), c.setAttribute("name", this.internal.flash.id), c.setAttribute("data", this.internal.flash.swf), c.setAttribute("type", "application/x-shockwave-flash"), c.setAttribute("width", "1"), c.setAttribute("height", "1"), c.setAttribute("tabindex", "-1"), e(c, "flashvars", d), e(c, "allowscriptaccess", "always"), e(c, "bgcolor", this.options.backgroundColor), e(c, "wmode", this.options.wmode);
                this.element.append(c);
                this.internal.flash.jq = b(c)
            }
            this.status.playbackRateEnabled = this.html.used && !this.flash.used ? this._testPlaybackRate("audio") : !1;
            this._updatePlaybackRate();
            this.html.used && (this.html.audio.available && (this._addHtmlEventListeners(this.htmlElement.audio, this.html.audio), this.element.append(this.htmlElement.audio), this.internal.audio.jq = b("#" + this.internal.audio.id)), this.html.video.available && (this._addHtmlEventListeners(this.htmlElement.video, this.html.video), this.element.append(this.htmlElement.video), this.internal.video.jq = b("#" + this.internal.video.id), this.status.nativeVideoControls ? this.internal.video.jq.css({
                width: this.status.width,
                height: this.status.height
            }) : this.internal.video.jq.css({
                width: "0px",
                height: "0px"
            }), this.internal.video.jq.bind("click.jPlayer", function() {
                a._trigger(b.jPlayer.event.click)
            })));
            this.options.emulateHtml && this._emulateHtmlBridge();
            this.html.used && !this.flash.used && setTimeout(function() {
                a.internal.ready = !0;
                a.version.flash = "n/a";
                a._trigger(b.jPlayer.event.repeat);
                a._trigger(b.jPlayer.event.ready)
            }, 100);
            this._updateNativeVideoControls();
            this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide();
            b.jPlayer.prototype.count++
        },
        destroy: function() {
            this.clearMedia();
            this._removeUiClass();
            this.css.jq.currentTime.length && this.css.jq.currentTime.text("");
            this.css.jq.duration.length && this.css.jq.duration.text("");
            b.each(this.css.jq, function(a, c) {
                c.length && c.unbind(".jPlayer")
            });
            this.internal.poster.jq.unbind(".jPlayer");
            this.internal.video.jq && this.internal.video.jq.unbind(".jPlayer");
            this._fullscreenRemoveEventListeners();
            this === b.jPlayer.focus && (b.jPlayer.focus = null);
            this.options.emulateHtml && this._destroyHtmlBridge();
            this.element.removeData("jPlayer");
            this.element.unbind(".jPlayer");
            this.element.empty();
            delete this.instances[this.internal.instance]
        },
        enable: function() {},
        disable: function() {},
        _testCanPlayType: function(a) {
            try {
                return a.canPlayType(this.format.mp3.codec), !0
            } catch (c) {
                return !1
            }
        },
        _testPlaybackRate: function(a) {
            a = document.createElement("string" === typeof a ? a : "audio");
            try {
                return "playbackRate" in a ? (a.playbackRate = .5, .5 === a.playbackRate) : !1
            } catch (c) {
                return !1
            }
        },
        _uaBlocklist: function(a) {
            var c = navigator.userAgent.toLowerCase(),
                d = !1;
            b.each(a, function(a, b) {
                if (b && b.test(c)) return d = !0, !1
            });
            return d
        },
        _restrictNativeVideoControls: function() {
            this.require.audio && this.status.nativeVideoControls && (this.status.nativeVideoControls = !1, this.status.noFullWindow = !0)
        },
        _updateNativeVideoControls: function() {
            this.html.video.available && this.html.used && (this.htmlElement.video.controls = this.status.nativeVideoControls, this._updateAutohide(), this.status.nativeVideoControls && this.require.video ? (this.internal.poster.jq.hide(), this.internal.video.jq.css({
                width: this.status.width,
                height: this.status.height
            })) : this.status.waitForPlay && this.status.video && (this.internal.poster.jq.show(), this.internal.video.jq.css({
                width: "0px",
                height: "0px"
            })))
        },
        _addHtmlEventListeners: function(a, c) {
            var d = this;
            a.preload = this.options.preload;
            a.muted = this.options.muted;
            a.volume = this.options.volume;
            this.status.playbackRateEnabled && (a.defaultPlaybackRate = this.options.defaultPlaybackRate, a.playbackRate = this.options.playbackRate);
            a.addEventListener("progress", function() {
                c.gate && (d.internal.cmdsIgnored && 0 < this.readyState && (d.internal.cmdsIgnored = !1), d.androidFix.setMedia = !1, d.androidFix.play && (d.androidFix.play = !1, d.play(d.androidFix.time)), d.androidFix.pause && (d.androidFix.pause = !1, d.pause(d.androidFix.time)), d._getHtmlStatus(a), d._updateInterface(), d._trigger(b.jPlayer.event.progress))
            }, !1);
            a.addEventListener("timeupdate", function() {
                c.gate && (d._getHtmlStatus(a), d._updateInterface(), d._trigger(b.jPlayer.event.timeupdate))
            }, !1);
            a.addEventListener("durationchange", function() {
                c.gate && (d._getHtmlStatus(a), d._updateInterface(), d._trigger(b.jPlayer.event.durationchange))
            }, !1);
            a.addEventListener("play", function() {
                c.gate && (d._updateButtons(!0), d._html_checkWaitForPlay(), d._trigger(b.jPlayer.event.play))
            }, !1);
            a.addEventListener("playing", function() {
                c.gate && (d._updateButtons(!0), d._seeked(), d._trigger(b.jPlayer.event.playing))
            }, !1);
            a.addEventListener("pause", function() {
                c.gate && (d._updateButtons(!1), d._trigger(b.jPlayer.event.pause))
            }, !1);
            a.addEventListener("waiting", function() {
                c.gate && (d._seeking(), d._trigger(b.jPlayer.event.waiting))
            }, !1);
            a.addEventListener("seeking", function() {
                c.gate && (d._seeking(), d._trigger(b.jPlayer.event.seeking))
            }, !1);
            a.addEventListener("seeked", function() {
                c.gate && (d._seeked(), d._trigger(b.jPlayer.event.seeked))
            }, !1);
            a.addEventListener("volumechange", function() {
                c.gate && (d.options.volume = a.volume, d.options.muted = a.muted, d._updateMute(), d._updateVolume(), d._trigger(b.jPlayer.event.volumechange))
            }, !1);
            a.addEventListener("ratechange", function() {
                c.gate && (d.options.defaultPlaybackRate = a.defaultPlaybackRate, d.options.playbackRate = a.playbackRate, d._updatePlaybackRate(), d._trigger(b.jPlayer.event.ratechange))
            }, !1);
            a.addEventListener("suspend", function() {
                c.gate && (d._seeked(), d._trigger(b.jPlayer.event.suspend))
            }, !1);
            a.addEventListener("ended", function() {
                c.gate && (b.jPlayer.browser.webkit || (d.htmlElement.media.currentTime = 0), d.htmlElement.media.pause(), d._updateButtons(!1), d._getHtmlStatus(a, !0), d._updateInterface(), d._trigger(b.jPlayer.event.ended))
            }, !1);
            a.addEventListener("error", function() {
                c.gate && (d._updateButtons(!1), d._seeked(), d.status.srcSet && (clearTimeout(d.internal.htmlDlyCmdId), d.status.waitForLoad = !0, d.status.waitForPlay = !0, d.status.video && !d.status.nativeVideoControls && d.internal.video.jq.css({
                    width: "0px",
                    height: "0px"
                }), d._validString(d.status.media.poster) && !d.status.nativeVideoControls && d.internal.poster.jq.show(), d.css.jq.videoPlay.length && d.css.jq.videoPlay.show(), d._error({
                    type: b.jPlayer.error.URL,
                    context: d.status.src,
                    message: b.jPlayer.errorMsg.URL,
                    hint: b.jPlayer.errorHint.URL
                })))
            }, !1);
            b.each(b.jPlayer.htmlEvent, function(e, g) {
                a.addEventListener(this, function() {
                    c.gate && d._trigger(b.jPlayer.event[g])
                }, !1)
            })
        },
        _getHtmlStatus: function(a, c) {
            var b = 0,
                e = 0,
                g = 0,
                f = 0;
            isFinite(a.duration) && (this.status.duration = a.duration);
            b = a.currentTime;
            e = 0 < this.status.duration ? 100 * b / this.status.duration : 0;
            "object" === typeof a.seekable && 0 < a.seekable.length ? (g = 0 < this.status.duration ? 100 * a.seekable.end(a.seekable.length - 1) / this.status.duration : 100, f = 0 < this.status.duration ? 100 * a.currentTime / a.seekable.end(a.seekable.length - 1) : 0) : (g = 100, f = e);
            c && (e = f = b = 0);
            this.status.seekPercent = g;
            this.status.currentPercentRelative = f;
            this.status.currentPercentAbsolute = e;
            this.status.currentTime = b;
            this.status.remaining = this.status.duration - this.status.currentTime;
            this.status.videoWidth = a.videoWidth;
            this.status.videoHeight = a.videoHeight;
            this.status.readyState = a.readyState;
            this.status.networkState = a.networkState;
            this.status.playbackRate = a.playbackRate;
            this.status.ended = a.ended
        },
        _resetStatus: function() {
            this.status = b.extend({}, this.status, b.jPlayer.prototype.status)
        },
        _trigger: function(a, c, d) {
            a = b.Event(a);
            a.jPlayer = {};
            a.jPlayer.version = b.extend({}, this.version);
            a.jPlayer.options = b.extend(!0, {}, this.options);
            a.jPlayer.status = b.extend(!0, {}, this.status);
            a.jPlayer.html = b.extend(!0, {}, this.html);
            a.jPlayer.flash = b.extend(!0, {}, this.flash);
            c && (a.jPlayer.error = b.extend({}, c));
            d && (a.jPlayer.warning = b.extend({}, d));
            this.element.trigger(a)
        },
        jPlayerFlashEvent: function(a, c) {
            if (a === b.jPlayer.event.ready)
                if (!this.internal.ready) this.internal.ready = !0, this.internal.flash.jq.css({
                    width: "0px",
                    height: "0px"
                }), this.version.flash = c.version, this.version.needFlash !== this.version.flash && this._error({
                    type: b.jPlayer.error.VERSION,
                    context: this.version.flash,
                    message: b.jPlayer.errorMsg.VERSION + this.version.flash,
                    hint: b.jPlayer.errorHint.VERSION
                }), this._trigger(b.jPlayer.event.repeat), this._trigger(a);
                else if (this.flash.gate) {
                if (this.status.srcSet) {
                    var d = this.status.currentTime,
                        e = this.status.paused;
                    this.setMedia(this.status.media);
                    this.volumeWorker(this.options.volume);
                    0 < d && (e ? this.pause(d) : this.play(d))
                }
                this._trigger(b.jPlayer.event.flashreset)
            }
            if (this.flash.gate) switch (a) {
                case b.jPlayer.event.progress:
                    this._getFlashStatus(c);
                    this._updateInterface();
                    this._trigger(a);
                    break;
                case b.jPlayer.event.timeupdate:
                    this._getFlashStatus(c);
                    this._updateInterface();
                    this._trigger(a);
                    break;
                case b.jPlayer.event.play:
                    this._seeked();
                    this._updateButtons(!0);
                    this._trigger(a);
                    break;
                case b.jPlayer.event.pause:
                    this._updateButtons(!1);
                    this._trigger(a);
                    break;
                case b.jPlayer.event.ended:
                    this._updateButtons(!1);
                    this._trigger(a);
                    break;
                case b.jPlayer.event.click:
                    this._trigger(a);
                    break;
                case b.jPlayer.event.error:
                    this.status.waitForLoad = !0;
                    this.status.waitForPlay = !0;
                    this.status.video && this.internal.flash.jq.css({
                        width: "0px",
                        height: "0px"
                    });
                    this._validString(this.status.media.poster) && this.internal.poster.jq.show();
                    this.css.jq.videoPlay.length && this.status.video && this.css.jq.videoPlay.show();
                    this.status.video ? this._flash_setVideo(this.status.media) : this._flash_setAudio(this.status.media);
                    this._updateButtons(!1);
                    this._error({
                        type: b.jPlayer.error.URL,
                        context: c.src,
                        message: b.jPlayer.errorMsg.URL,
                        hint: b.jPlayer.errorHint.URL
                    });
                    break;
                case b.jPlayer.event.seeking:
                    this._seeking();
                    this._trigger(a);
                    break;
                case b.jPlayer.event.seeked:
                    this._seeked();
                    this._trigger(a);
                    break;
                case b.jPlayer.event.ready:
                    break;
                default:
                    this._trigger(a)
            }
            return !1
        },
        _getFlashStatus: function(a) {
            this.status.seekPercent = a.seekPercent;
            this.status.currentPercentRelative = a.currentPercentRelative;
            this.status.currentPercentAbsolute = a.currentPercentAbsolute;
            this.status.currentTime = a.currentTime;
            this.status.duration = a.duration;
            this.status.remaining = a.duration - a.currentTime;
            this.status.videoWidth = a.videoWidth;
            this.status.videoHeight = a.videoHeight;
            this.status.readyState = 4;
            this.status.networkState = 0;
            this.status.playbackRate = 1;
            this.status.ended = !1
        },
        _updateButtons: function(a) {
            a === f ? a = !this.status.paused : this.status.paused = !a;
            a ? this.addStateClass("playing") : this.removeStateClass("playing");
            !this.status.noFullWindow && this.options.fullWindow ? this.addStateClass("fullScreen") : this.removeStateClass("fullScreen");
            this.options.loop ? this.addStateClass("looped") : this.removeStateClass("looped");
            this.css.jq.play.length && this.css.jq.pause.length && (a ? (this.css.jq.play.hide(), this.css.jq.pause.show()) : (this.css.jq.play.show(), this.css.jq.pause.hide()));
            this.css.jq.restoreScreen.length && this.css.jq.fullScreen.length && (this.status.noFullWindow ? (this.css.jq.fullScreen.hide(), this.css.jq.restoreScreen.hide()) : this.options.fullWindow ? (this.css.jq.fullScreen.hide(), this.css.jq.restoreScreen.show()) : (this.css.jq.fullScreen.show(), this.css.jq.restoreScreen.hide()));
            this.css.jq.repeat.length && this.css.jq.repeatOff.length && (this.options.loop ? (this.css.jq.repeat.hide(), this.css.jq.repeatOff.show()) : (this.css.jq.repeat.show(), this.css.jq.repeatOff.hide()))
        },
        _updateInterface: function() {
            this.css.jq.seekBar.length && this.css.jq.seekBar.width(this.status.seekPercent + "%");
            this.css.jq.playBar.length && (this.options.smoothPlayBar ? this.css.jq.playBar.stop().animate({
                width: this.status.currentPercentAbsolute + "%"
            }, 250, "linear") : this.css.jq.playBar.width(this.status.currentPercentRelative + "%"));
            var a = "";
            this.css.jq.currentTime.length && (a = this._convertTime(this.status.currentTime), a !== this.css.jq.currentTime.text() && this.css.jq.currentTime.text(this._convertTime(this.status.currentTime)));
            var a = "",
                a = this.status.duration,
                c = this.status.remaining;
            this.css.jq.duration.length && ("string" === typeof this.status.media.duration ? a = this.status.media.duration : ("number" === typeof this.status.media.duration && (a = this.status.media.duration, c = a - this.status.currentTime), a = this.options.remainingDuration ? (0 < c ? "-" : "") + this._convertTime(c) : this._convertTime(a)), a !== this.css.jq.duration.text() && this.css.jq.duration.text(a))
        },
        _convertTime: l.prototype.time,
        _seeking: function() {
            this.css.jq.seekBar.length && this.css.jq.seekBar.addClass("jp-seeking-bg");
            this.addStateClass("seeking")
        },
        _seeked: function() {
            this.css.jq.seekBar.length && this.css.jq.seekBar.removeClass("jp-seeking-bg");
            this.removeStateClass("seeking")
        },
        _resetGate: function() {
            this.html.audio.gate = !1;
            this.html.video.gate = !1;
            this.flash.gate = !1
        },
        _resetActive: function() {
            this.html.active = !1;
            this.flash.active = !1
        },
        _escapeHtml: function(a) {
            return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;")
        },
        _qualifyURL: function(a) {
            var c = document.createElement("div");
            c.innerHTML = '<a href="' + this._escapeHtml(a) + '">x</a>';
            return c.firstChild.href
        },
        _absoluteMediaUrls: function(a) {
            var c = this;
            b.each(a, function(b, e) {
                e && c.format[b] && (a[b] = c._qualifyURL(e))
            });
            return a
        },
        addStateClass: function(a) {
            this.ancestorJq.length && this.ancestorJq.addClass(this.options.stateClass[a])
        },
        removeStateClass: function(a) {
            this.ancestorJq.length && this.ancestorJq.removeClass(this.options.stateClass[a])
        },
        setMedia: function(a) {
            var c = this,
                d = !1,
                e = this.status.media.poster !== a.poster;
            this._resetMedia();
            this._resetGate();
            this._resetActive();
            this.androidFix.setMedia = !1;
            this.androidFix.play = !1;
            this.androidFix.pause = !1;
            a = this._absoluteMediaUrls(a);
            b.each(this.formats, function(e, f) {
                var k = "video" === c.format[f].media;
                b.each(c.solutions, function(e, g) {
                    if (c[g].support[f] && c._validString(a[f])) {
                        var l = "html" === g;
                        k ? (l ? (c.html.video.gate = !0, c._html_setVideo(a), c.html.active = !0) : (c.flash.gate = !0, c._flash_setVideo(a), c.flash.active = !0), c.css.jq.videoPlay.length && c.css.jq.videoPlay.show(), c.status.video = !0) : (l ? (c.html.audio.gate = !0, c._html_setAudio(a), c.html.active = !0, b.jPlayer.platform.android && (c.androidFix.setMedia = !0)) : (c.flash.gate = !0, c._flash_setAudio(a), c.flash.active = !0), c.css.jq.videoPlay.length && c.css.jq.videoPlay.hide(), c.status.video = !1);
                        d = !0;
                        return !1
                    }
                });
                if (d) return !1
            });
            d ? (this.status.nativeVideoControls && this.html.video.gate || !this._validString(a.poster) || (e ? this.htmlElement.poster.src = a.poster : this.internal.poster.jq.show()), this.css.jq.title.length && "string" === typeof a.title && (this.css.jq.title.html(a.title), this.htmlElement.audio && this.htmlElement.audio.setAttribute("title", a.title), this.htmlElement.video && this.htmlElement.video.setAttribute("title", a.title)), this.status.srcSet = !0, this.status.media = b.extend({}, a), this._updateButtons(!1), this._updateInterface(), this._trigger(b.jPlayer.event.setmedia)) : this._error({
                type: b.jPlayer.error.NO_SUPPORT,
                context: "{supplied:'" + this.options.supplied + "'}",
                message: b.jPlayer.errorMsg.NO_SUPPORT,
                hint: b.jPlayer.errorHint.NO_SUPPORT
            })
        },
        _resetMedia: function() {
            this._resetStatus();
            this._updateButtons(!1);
            this._updateInterface();
            this._seeked();
            this.internal.poster.jq.hide();
            clearTimeout(this.internal.htmlDlyCmdId);
            this.html.active ? this._html_resetMedia() : this.flash.active && this._flash_resetMedia()
        },
        clearMedia: function() {
            this._resetMedia();
            this.html.active ? this._html_clearMedia() : this.flash.active && this._flash_clearMedia();
            this._resetGate();
            this._resetActive()
        },
        load: function() {
            this.status.srcSet ? this.html.active ? this._html_load() : this.flash.active && this._flash_load() : this._urlNotSetError("load")
        },
        focus: function() {
            this.options.keyEnabled && (b.jPlayer.focus = this)
        },
        play: function(a) {
            "object" === typeof a && this.options.useStateClassSkin && !this.status.paused ? this.pause(a) : (a = "number" === typeof a ? a : NaN, this.status.srcSet ? (this.focus(), this.html.active ? this._html_play(a) : this.flash.active && this._flash_play(a)) : this._urlNotSetError("play"))
        },
        videoPlay: function() {
            this.play()
        },
        pause: function(a) {
            a = "number" === typeof a ? a : NaN;
            this.status.srcSet ? this.html.active ? this._html_pause(a) : this.flash.active && this._flash_pause(a) : this._urlNotSetError("pause")
        },
        tellOthers: function(a, c) {
            var d = this,
                e = "function" === typeof c,
                g = Array.prototype.slice.call(arguments);
            "string" === typeof a && (e && g.splice(1, 1), b.each(this.instances, function() {
                d.element !== this && (e && !c.call(this.data("jPlayer"), d) || this.jPlayer.apply(this, g))
            }))
        },
        pauseOthers: function(a) {
            this.tellOthers("pause", function() {
                return this.status.srcSet
            }, a)
        },
        stop: function() {
            this.status.srcSet ? this.html.active ? this._html_pause(0) : this.flash.active && this._flash_pause(0) : this._urlNotSetError("stop")
        },
        playHead: function(a) {
            a = this._limitValue(a, 0, 100);
            this.status.srcSet ? this.html.active ? this._html_playHead(a) : this.flash.active && this._flash_playHead(a) : this._urlNotSetError("playHead")
        },
        _muted: function(a) {
            this.mutedWorker(a);
            this.options.globalVolume && this.tellOthers("mutedWorker", function() {
                return this.options.globalVolume
            }, a)
        },
        mutedWorker: function(a) {
            this.options.muted = a;
            this.html.used && this._html_setProperty("muted", a);
            this.flash.used && this._flash_mute(a);
            this.html.video.gate || this.html.audio.gate || (this._updateMute(a), this._updateVolume(this.options.volume), this._trigger(b.jPlayer.event.volumechange))
        },
        mute: function(a) {
            "object" === typeof a && this.options.useStateClassSkin && this.options.muted ? this._muted(!1) : (a = a === f ? !0 : !!a, this._muted(a))
        },
        unmute: function(a) {
            a = a === f ? !0 : !!a;
            this._muted(!a)
        },
        _updateMute: function(a) {
            a === f && (a = this.options.muted);
            a ? this.addStateClass("muted") : this.removeStateClass("muted");
            this.css.jq.mute.length && this.css.jq.unmute.length && (this.status.noVolume ? (this.css.jq.mute.hide(), this.css.jq.unmute.hide()) : a ? (this.css.jq.mute.hide(), this.css.jq.unmute.show()) : (this.css.jq.mute.show(), this.css.jq.unmute.hide()))
        },
        volume: function(a) {
            this.volumeWorker(a);
            this.options.globalVolume && this.tellOthers("volumeWorker", function() {
                return this.options.globalVolume
            }, a)
        },
        volumeWorker: function(a) {
            a = this._limitValue(a, 0, 1);
            this.options.volume = a;
            this.html.used && this._html_setProperty("volume", a);
            this.flash.used && this._flash_volume(a);
            this.html.video.gate || this.html.audio.gate || (this._updateVolume(a), this._trigger(b.jPlayer.event.volumechange))
        },
        volumeBar: function(a) {
            if (this.css.jq.volumeBar.length) {
                var c = b(a.currentTarget),
                    d = c.offset(),
                    e = a.pageX - d.left,
                    g = c.width();
                a = c.height() - a.pageY + d.top;
                c = c.height();
                this.options.verticalVolume ? this.volume(a / c) : this.volume(e / g)
            }
            this.options.muted && this._muted(!1)
        },
        _updateVolume: function(a) {
            a === f && (a = this.options.volume);
            a = this.options.muted ? 0 : a;
            this.status.noVolume ? (this.css.jq.volumeBar.length && this.css.jq.volumeBar.hide(), this.css.jq.volumeBarValue.length && this.css.jq.volumeBarValue.hide(), this.css.jq.volumeMax.length && this.css.jq.volumeMax.hide()) : (this.css.jq.volumeBar.length && this.css.jq.volumeBar.show(), this.css.jq.volumeBarValue.length && (this.css.jq.volumeBarValue.show(), this.css.jq.volumeBarValue[this.options.verticalVolume ? "height" : "width"](100 * a + "%")), this.css.jq.volumeMax.length && this.css.jq.volumeMax.show())
        },
        volumeMax: function() {
            this.volume(1);
            this.options.muted && this._muted(!1)
        },
        _cssSelectorAncestor: function(a) {
            var c = this;
            this.options.cssSelectorAncestor = a;
            this._removeUiClass();
            this.ancestorJq = a ? b(a) : [];
            a && 1 !== this.ancestorJq.length && this._warning({
                type: b.jPlayer.warning.CSS_SELECTOR_COUNT,
                context: a,
                message: b.jPlayer.warningMsg.CSS_SELECTOR_COUNT + this.ancestorJq.length + " found for cssSelectorAncestor.",
                hint: b.jPlayer.warningHint.CSS_SELECTOR_COUNT
            });
            this._addUiClass();
            b.each(this.options.cssSelector, function(a, b) {
                c._cssSelector(a, b)
            });
            this._updateInterface();
            this._updateButtons();
            this._updateAutohide();
            this._updateVolume();
            this._updateMute()
        },
        _cssSelector: function(a, c) {
            var d = this;
            "string" === typeof c ? b.jPlayer.prototype.options.cssSelector[a] ? (this.css.jq[a] && this.css.jq[a].length && this.css.jq[a].unbind(".jPlayer"), this.options.cssSelector[a] = c, this.css.cs[a] = this.options.cssSelectorAncestor + " " + c, this.css.jq[a] = c ? b(this.css.cs[a]) : [], this.css.jq[a].length && this[a] && this.css.jq[a].bind("click.jPlayer", function(c) {
                c.preventDefault();
                d[a](c);
                d.options.autoBlur && b(this).blur()
            }), c && 1 !== this.css.jq[a].length && this._warning({
                type: b.jPlayer.warning.CSS_SELECTOR_COUNT,
                context: this.css.cs[a],
                message: b.jPlayer.warningMsg.CSS_SELECTOR_COUNT + this.css.jq[a].length + " found for " + a + " method.",
                hint: b.jPlayer.warningHint.CSS_SELECTOR_COUNT
            })) : this._warning({
                type: b.jPlayer.warning.CSS_SELECTOR_METHOD,
                context: a,
                message: b.jPlayer.warningMsg.CSS_SELECTOR_METHOD,
                hint: b.jPlayer.warningHint.CSS_SELECTOR_METHOD
            }) : this._warning({
                type: b.jPlayer.warning.CSS_SELECTOR_STRING,
                context: c,
                message: b.jPlayer.warningMsg.CSS_SELECTOR_STRING,
                hint: b.jPlayer.warningHint.CSS_SELECTOR_STRING
            })
        },
        duration: function(a) {
            this.options.toggleDuration && (this.options.captureDuration && a.stopPropagation(), this._setOption("remainingDuration", !this.options.remainingDuration))
        },
        seekBar: function(a) {
            if (this.css.jq.seekBar.length) {
                var c = b(a.currentTarget),
                    d = c.offset();
                a = a.pageX - d.left;
                c = c.width();
                this.playHead(100 * a / c)
            }
        },
        playbackRate: function(a) {
            this._setOption("playbackRate", a)
        },
        playbackRateBar: function(a) {
            if (this.css.jq.playbackRateBar.length) {
                var c = b(a.currentTarget),
                    d = c.offset(),
                    e = a.pageX - d.left,
                    g = c.width();
                a = c.height() - a.pageY + d.top;
                c = c.height();
                this.playbackRate((this.options.verticalPlaybackRate ? a / c : e / g) * (this.options.maxPlaybackRate - this.options.minPlaybackRate) + this.options.minPlaybackRate)
            }
        },
        _updatePlaybackRate: function() {
            var a = (this.options.playbackRate - this.options.minPlaybackRate) / (this.options.maxPlaybackRate - this.options.minPlaybackRate);
            this.status.playbackRateEnabled ? (this.css.jq.playbackRateBar.length && this.css.jq.playbackRateBar.show(), this.css.jq.playbackRateBarValue.length && (this.css.jq.playbackRateBarValue.show(), this.css.jq.playbackRateBarValue[this.options.verticalPlaybackRate ? "height" : "width"](100 * a + "%"))) : (this.css.jq.playbackRateBar.length && this.css.jq.playbackRateBar.hide(), this.css.jq.playbackRateBarValue.length && this.css.jq.playbackRateBarValue.hide())
        },
        repeat: function(a) {
            "object" === typeof a && this.options.useStateClassSkin && this.options.loop ? this._loop(!1) : this._loop(!0)
        },
        repeatOff: function() {
            this._loop(!1)
        },
        _loop: function(a) {
            this.options.loop !== a && (this.options.loop = a, this._updateButtons(), this._trigger(b.jPlayer.event.repeat))
        },
        option: function(a, c) {
            var d = a;
            if (0 === arguments.length) return b.extend(!0, {}, this.options);
            if ("string" === typeof a) {
                var e = a.split(".");
                if (c === f) {
                    for (var d = b.extend(!0, {}, this.options), g = 0; g < e.length; g++)
                        if (d[e[g]] !== f) d = d[e[g]];
                        else return this._warning({
                            type: b.jPlayer.warning.OPTION_KEY,
                            context: a,
                            message: b.jPlayer.warningMsg.OPTION_KEY,
                            hint: b.jPlayer.warningHint.OPTION_KEY
                        }), f;
                    return d
                }
                for (var g = d = {}, h = 0; h < e.length; h++) h < e.length - 1 ? (g[e[h]] = {}, g = g[e[h]]) : g[e[h]] = c
            }
            this._setOptions(d);
            return this
        },
        _setOptions: function(a) {
            var c = this;
            b.each(a, function(a, b) {
                c._setOption(a, b)
            });
            return this
        },
        _setOption: function(a, c) {
            var d = this;
            switch (a) {
                case "volume":
                    this.volume(c);
                    break;
                case "muted":
                    this._muted(c);
                    break;
                case "globalVolume":
                    this.options[a] = c;
                    break;
                case "cssSelectorAncestor":
                    this._cssSelectorAncestor(c);
                    break;
                case "cssSelector":
                    b.each(c, function(a, c) {
                        d._cssSelector(a, c)
                    });
                    break;
                case "playbackRate":
                    this.options[a] = c = this._limitValue(c, this.options.minPlaybackRate, this.options.maxPlaybackRate);
                    this.html.used && this._html_setProperty("playbackRate", c);
                    this._updatePlaybackRate();
                    break;
                case "defaultPlaybackRate":
                    this.options[a] = c = this._limitValue(c, this.options.minPlaybackRate, this.options.maxPlaybackRate);
                    this.html.used && this._html_setProperty("defaultPlaybackRate", c);
                    this._updatePlaybackRate();
                    break;
                case "minPlaybackRate":
                    this.options[a] = c = this._limitValue(c, .1, this.options.maxPlaybackRate - .1);
                    this._updatePlaybackRate();
                    break;
                case "maxPlaybackRate":
                    this.options[a] = c = this._limitValue(c, this.options.minPlaybackRate + .1, 16);
                    this._updatePlaybackRate();
                    break;
                case "fullScreen":
                    if (this.options[a] !== c) {
                        var e = b.jPlayer.nativeFeatures.fullscreen.used.webkitVideo;
                        if (!e || e && !this.status.waitForPlay) e || (this.options[a] = c), c ? this._requestFullscreen() : this._exitFullscreen(), e || this._setOption("fullWindow", c)
                    }
                    break;
                case "fullWindow":
                    this.options[a] !== c && (this._removeUiClass(), this.options[a] = c, this._refreshSize());
                    break;
                case "size":
                    this.options.fullWindow || this.options[a].cssClass === c.cssClass || this._removeUiClass();
                    this.options[a] = b.extend({}, this.options[a], c);
                    this._refreshSize();
                    break;
                case "sizeFull":
                    this.options.fullWindow && this.options[a].cssClass !== c.cssClass && this._removeUiClass();
                    this.options[a] = b.extend({}, this.options[a], c);
                    this._refreshSize();
                    break;
                case "autohide":
                    this.options[a] = b.extend({}, this.options[a], c);
                    this._updateAutohide();
                    break;
                case "loop":
                    this._loop(c);
                    break;
                case "remainingDuration":
                    this.options[a] = c;
                    this._updateInterface();
                    break;
                case "toggleDuration":
                    this.options[a] = c;
                    break;
                case "nativeVideoControls":
                    this.options[a] = b.extend({}, this.options[a], c);
                    this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls);
                    this._restrictNativeVideoControls();
                    this._updateNativeVideoControls();
                    break;
                case "noFullWindow":
                    this.options[a] = b.extend({}, this.options[a], c);
                    this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls);
                    this.status.noFullWindow = this._uaBlocklist(this.options.noFullWindow);
                    this._restrictNativeVideoControls();
                    this._updateButtons();
                    break;
                case "noVolume":
                    this.options[a] = b.extend({}, this.options[a], c);
                    this.status.noVolume = this._uaBlocklist(this.options.noVolume);
                    this._updateVolume();
                    this._updateMute();
                    break;
                case "emulateHtml":
                    this.options[a] !== c && ((this.options[a] = c) ? this._emulateHtmlBridge() : this._destroyHtmlBridge());
                    break;
                case "timeFormat":
                    this.options[a] = b.extend({}, this.options[a], c);
                    break;
                case "keyEnabled":
                    this.options[a] = c;
                    c || this !== b.jPlayer.focus || (b.jPlayer.focus = null);
                    break;
                case "keyBindings":
                    this.options[a] = b.extend(!0, {}, this.options[a], c);
                    break;
                case "audioFullScreen":
                    this.options[a] = c;
                    break;
                case "autoBlur":
                    this.options[a] = c
            }
            return this
        },
        _refreshSize: function() {
            this._setSize();
            this._addUiClass();
            this._updateSize();
            this._updateButtons();
            this._updateAutohide();
            this._trigger(b.jPlayer.event.resize)
        },
        _setSize: function() {
            this.options.fullWindow ? (this.status.width = this.options.sizeFull.width, this.status.height = this.options.sizeFull.height, this.status.cssClass = this.options.sizeFull.cssClass) : (this.status.width = this.options.size.width, this.status.height = this.options.size.height, this.status.cssClass = this.options.size.cssClass);
            this.element.css({
                width: this.status.width,
                height: this.status.height
            })
        },
        _addUiClass: function() {
            this.ancestorJq.length && this.ancestorJq.addClass(this.status.cssClass)
        },
        _removeUiClass: function() {
            this.ancestorJq.length && this.ancestorJq.removeClass(this.status.cssClass)
        },
        _updateSize: function() {
            this.internal.poster.jq.css({
                width: this.status.width,
                height: this.status.height
            });
            !this.status.waitForPlay && this.html.active && this.status.video || this.html.video.available && this.html.used && this.status.nativeVideoControls ? this.internal.video.jq.css({
                width: this.status.width,
                height: this.status.height
            }) : !this.status.waitForPlay && this.flash.active && this.status.video && this.internal.flash.jq.css({
                width: this.status.width,
                height: this.status.height
            })
        },
        _updateAutohide: function() {
            var a = this,
                c = function() {
                    a.css.jq.gui.fadeIn(a.options.autohide.fadeIn, function() {
                        clearTimeout(a.internal.autohideId);
                        a.internal.autohideId = setTimeout(function() {
                            a.css.jq.gui.fadeOut(a.options.autohide.fadeOut)
                        }, a.options.autohide.hold)
                    })
                };
            this.css.jq.gui.length && (this.css.jq.gui.stop(!0, !0), clearTimeout(this.internal.autohideId), this.element.unbind(".jPlayerAutohide"), this.css.jq.gui.unbind(".jPlayerAutohide"), this.status.nativeVideoControls ? this.css.jq.gui.hide() : this.options.fullWindow && this.options.autohide.full || !this.options.fullWindow && this.options.autohide.restored ? (this.element.bind("mousemove.jPlayer.jPlayerAutohide", c), this.css.jq.gui.bind("mousemove.jPlayer.jPlayerAutohide", c), this.css.jq.gui.hide()) : this.css.jq.gui.show())
        },
        fullScreen: function(a) {
            "object" === typeof a && this.options.useStateClassSkin && this.options.fullScreen ? this._setOption("fullScreen", !1) : this._setOption("fullScreen", !0)
        },
        restoreScreen: function() {
            this._setOption("fullScreen", !1)
        },
        _fullscreenAddEventListeners: function() {
            var a = this,
                c = b.jPlayer.nativeFeatures.fullscreen;
            c.api.fullscreenEnabled && c.event.fullscreenchange && ("function" !== typeof this.internal.fullscreenchangeHandler && (this.internal.fullscreenchangeHandler = function() {
                a._fullscreenchange()
            }), document.addEventListener(c.event.fullscreenchange, this.internal.fullscreenchangeHandler, !1))
        },
        _fullscreenRemoveEventListeners: function() {
            var a = b.jPlayer.nativeFeatures.fullscreen;
            this.internal.fullscreenchangeHandler && document.removeEventListener(a.event.fullscreenchange, this.internal.fullscreenchangeHandler, !1)
        },
        _fullscreenchange: function() {
            this.options.fullScreen && !b.jPlayer.nativeFeatures.fullscreen.api.fullscreenElement() && this._setOption("fullScreen", !1)
        },
        _requestFullscreen: function() {
            var a = this.ancestorJq.length ? this.ancestorJq[0] : this.element[0],
                c = b.jPlayer.nativeFeatures.fullscreen;
            c.used.webkitVideo && (a = this.htmlElement.video);
            c.api.fullscreenEnabled && c.api.requestFullscreen(a)
        },
        _exitFullscreen: function() {
            var a = b.jPlayer.nativeFeatures.fullscreen,
                c;
            a.used.webkitVideo && (c = this.htmlElement.video);
            a.api.fullscreenEnabled && a.api.exitFullscreen(c)
        },
        _html_initMedia: function(a) {
            var c = b(this.htmlElement.media).empty();
            b.each(a.track || [], function(a, b) {
                var g = document.createElement("track");
                g.setAttribute("kind", b.kind ? b.kind : "");
                g.setAttribute("src", b.src ? b.src : "");
                g.setAttribute("srclang", b.srclang ? b.srclang : "");
                g.setAttribute("label", b.label ? b.label : "");
                b.def && g.setAttribute("default", b.def);
                c.append(g)
            });
            this.htmlElement.media.src = this.status.src;
            "none" !== this.options.preload && this._html_load();
            this._trigger(b.jPlayer.event.timeupdate)
        },
        _html_setFormat: function(a) {
            var c = this;
            b.each(this.formats, function(b, e) {
                if (c.html.support[e] && a[e]) return c.status.src = a[e], c.status.format[e] = !0, c.status.formatType = e, !1
            })
        },
        _html_setAudio: function(a) {
            this._html_setFormat(a);
            this.htmlElement.media = this.htmlElement.audio;
            this._html_initMedia(a)
        },
        _html_setVideo: function(a) {
            this._html_setFormat(a);
            this.status.nativeVideoControls && (this.htmlElement.video.poster = this._validString(a.poster) ? a.poster : "");
            this.htmlElement.media = this.htmlElement.video;
            this._html_initMedia(a)
        },
        _html_resetMedia: function() {
            this.htmlElement.media && (this.htmlElement.media.id !== this.internal.video.id || this.status.nativeVideoControls || this.internal.video.jq.css({
                width: "0px",
                height: "0px"
            }), this.htmlElement.media.pause())
        },
        _html_clearMedia: function() {
            this.htmlElement.media && (this.htmlElement.media.src = "about:blank", this.htmlElement.media.load())
        },
        _html_load: function() {
            this.status.waitForLoad && (this.status.waitForLoad = !1, this.htmlElement.media.load());
            clearTimeout(this.internal.htmlDlyCmdId)
        },
        _html_play: function(a) {
            var b = this,
                d = this.htmlElement.media;
            this.androidFix.pause = !1;
            this._html_load();
            if (this.androidFix.setMedia) this.androidFix.play = !0, this.androidFix.time = a;
            else if (isNaN(a)) d.play();
            else {
                this.internal.cmdsIgnored && d.play();
                try {
                    if (!d.seekable || "object" === typeof d.seekable && 0 < d.seekable.length) d.currentTime = a, d.play();
                    else throw 1;
                } catch (e) {
                    this.internal.htmlDlyCmdId = setTimeout(function() {
                        b.play(a)
                    }, 250);
                    return
                }
            }
            this._html_checkWaitForPlay()
        },
        _html_pause: function(a) {
            var b = this,
                d = this.htmlElement.media;
            this.androidFix.play = !1;
            0 < a ? this._html_load() : clearTimeout(this.internal.htmlDlyCmdId);
            d.pause();
            if (this.androidFix.setMedia) this.androidFix.pause = !0, this.androidFix.time = a;
            else if (!isNaN(a)) try {
                if (!d.seekable || "object" === typeof d.seekable && 0 < d.seekable.length) d.currentTime = a;
                else throw 1;
            } catch (e) {
                this.internal.htmlDlyCmdId = setTimeout(function() {
                    b.pause(a)
                }, 250);
                return
            }
            0 < a && this._html_checkWaitForPlay()
        },
        _html_playHead: function(a) {
            var b = this,
                d = this.htmlElement.media;
            this._html_load();
            try {
                if ("object" === typeof d.seekable && 0 < d.seekable.length) d.currentTime = a * d.seekable.end(d.seekable.length - 1) / 100;
                else if (0 < d.duration && !isNaN(d.duration)) d.currentTime = a * d.duration / 100;
                else throw "e";
            } catch (e) {
                this.internal.htmlDlyCmdId = setTimeout(function() {
                    b.playHead(a)
                }, 250);
                return
            }
            this.status.waitForLoad || this._html_checkWaitForPlay()
        },
        _html_checkWaitForPlay: function() {
            this.status.waitForPlay && (this.status.waitForPlay = !1, this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide(), this.status.video && (this.internal.poster.jq.hide(), this.internal.video.jq.css({
                width: this.status.width,
                height: this.status.height
            })))
        },
        _html_setProperty: function(a, b) {
            this.html.audio.available && (this.htmlElement.audio[a] = b);
            this.html.video.available && (this.htmlElement.video[a] = b)
        },
        _flash_setAudio: function(a) {
            var c = this;
            try {
                b.each(this.formats, function(b, d) {
                    if (c.flash.support[d] && a[d]) {
                        switch (d) {
                            case "m4a":
                            case "fla":
                                c._getMovie().fl_setAudio_m4a(a[d]);
                                break;
                            case "mp3":
                                c._getMovie().fl_setAudio_mp3(a[d]);
                                break;
                            case "rtmpa":
                                c._getMovie().fl_setAudio_rtmp(a[d])
                        }
                        c.status.src = a[d];
                        c.status.format[d] = !0;
                        c.status.formatType = d;
                        return !1
                    }
                }), "auto" === this.options.preload && (this._flash_load(), this.status.waitForLoad = !1)
            } catch (d) {
                this._flashError(d)
            }
        },
        _flash_setVideo: function(a) {
            var c = this;
            try {
                b.each(this.formats, function(b, d) {
                    if (c.flash.support[d] && a[d]) {
                        switch (d) {
                            case "m4v":
                            case "flv":
                                c._getMovie().fl_setVideo_m4v(a[d]);
                                break;
                            case "rtmpv":
                                c._getMovie().fl_setVideo_rtmp(a[d])
                        }
                        c.status.src = a[d];
                        c.status.format[d] = !0;
                        c.status.formatType = d;
                        return !1
                    }
                }), "auto" === this.options.preload && (this._flash_load(), this.status.waitForLoad = !1)
            } catch (d) {
                this._flashError(d)
            }
        },
        _flash_resetMedia: function() {
            this.internal.flash.jq.css({
                width: "0px",
                height: "0px"
            });
            this._flash_pause(NaN)
        },
        _flash_clearMedia: function() {
            try {
                this._getMovie().fl_clearMedia()
            } catch (a) {
                this._flashError(a)
            }
        },
        _flash_load: function() {
            try {
                this._getMovie().fl_load()
            } catch (a) {
                this._flashError(a)
            }
            this.status.waitForLoad = !1
        },
        _flash_play: function(a) {
            try {
                this._getMovie().fl_play(a)
            } catch (b) {
                this._flashError(b)
            }
            this.status.waitForLoad = !1;
            this._flash_checkWaitForPlay()
        },
        _flash_pause: function(a) {
            try {
                this._getMovie().fl_pause(a)
            } catch (b) {
                this._flashError(b)
            }
            0 < a && (this.status.waitForLoad = !1, this._flash_checkWaitForPlay())
        },
        _flash_playHead: function(a) {
            try {
                this._getMovie().fl_play_head(a)
            } catch (b) {
                this._flashError(b)
            }
            this.status.waitForLoad || this._flash_checkWaitForPlay()
        },
        _flash_checkWaitForPlay: function() {
            this.status.waitForPlay && (this.status.waitForPlay = !1, this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide(), this.status.video && (this.internal.poster.jq.hide(), this.internal.flash.jq.css({
                width: this.status.width,
                height: this.status.height
            })))
        },
        _flash_volume: function(a) {
            try {
                this._getMovie().fl_volume(a)
            } catch (b) {
                this._flashError(b)
            }
        },
        _flash_mute: function(a) {
            try {
                this._getMovie().fl_mute(a)
            } catch (b) {
                this._flashError(b)
            }
        },
        _getMovie: function() {
            return document[this.internal.flash.id]
        },
        _getFlashPluginVersion: function() {
            var a = 0,
                b;
            if (window.ActiveXObject) try {
                if (b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) {
                    var d = b.GetVariable("$version");
                    d && (d = d.split(" ")[1].split(","), a = parseInt(d[0], 10) + "." + parseInt(d[1], 10))
                }
            } catch (e) {} else navigator.plugins && 0 < navigator.mimeTypes.length && (b = navigator.plugins["Shockwave Flash"]) && (a = navigator.plugins["Shockwave Flash"].description.replace(/.*\s(\d+\.\d+).*/, "$1"));
            return 1 * a
        },
        _checkForFlash: function(a) {
            var b = !1;
            this._getFlashPluginVersion() >= a && (b = !0);
            return b
        },
        _validString: function(a) {
            return a && "string" === typeof a
        },
        _limitValue: function(a, b, d) {
            return a < b ? b : a > d ? d : a
        },
        _urlNotSetError: function(a) {
            this._error({
                type: b.jPlayer.error.URL_NOT_SET,
                context: a,
                message: b.jPlayer.errorMsg.URL_NOT_SET,
                hint: b.jPlayer.errorHint.URL_NOT_SET
            })
        },
        _flashError: function(a) {
            var c;
            c = this.internal.ready ? "FLASH_DISABLED" : "FLASH";
            this._error({
                type: b.jPlayer.error[c],
                context: this.internal.flash.swf,
                message: b.jPlayer.errorMsg[c] + a.message,
                hint: b.jPlayer.errorHint[c]
            });
            this.internal.flash.jq.css({
                width: "1px",
                height: "1px"
            })
        },
        _error: function(a) {
            this._trigger(b.jPlayer.event.error, a);
            this.options.errorAlerts && this._alert("Error!" + (a.message ? "\n" + a.message : "") + (a.hint ? "\n" + a.hint : "") + "\nContext: " + a.context)
        },
        _warning: function(a) {
            this._trigger(b.jPlayer.event.warning, f, a);
            this.options.warningAlerts && this._alert("Warning!" + (a.message ? "\n" + a.message : "") + (a.hint ? "\n" + a.hint : "") + "\nContext: " + a.context)
        },
        _alert: function(a) {
            a = "jPlayer " + this.version.script + " : id='" + this.internal.self.id + "' : " + a;
            this.options.consoleAlerts ? window.console && window.console.log && window.console.log(a) : alert(a)
        },
        _emulateHtmlBridge: function() {
            var a = this;
            b.each(b.jPlayer.emulateMethods.split(/\s+/g), function(b, d) {
                a.internal.domNode[d] = function(b) {
                    a[d](b)
                }
            });
            b.each(b.jPlayer.event, function(c, d) {
                var e = !0;
                b.each(b.jPlayer.reservedEvent.split(/\s+/g), function(a, b) {
                    if (b === c) return e = !1
                });
                e && a.element.bind(d + ".jPlayer.jPlayerHtml", function() {
                    a._emulateHtmlUpdate();
                    var b = document.createEvent("Event");
                    b.initEvent(c, !1, !0);
                    a.internal.domNode.dispatchEvent(b)
                })
            })
        },
        _emulateHtmlUpdate: function() {
            var a = this;
            b.each(b.jPlayer.emulateStatus.split(/\s+/g), function(b, d) {
                a.internal.domNode[d] = a.status[d]
            });
            b.each(b.jPlayer.emulateOptions.split(/\s+/g), function(b, d) {
                a.internal.domNode[d] = a.options[d]
            })
        },
        _destroyHtmlBridge: function() {
            var a = this;
            this.element.unbind(".jPlayerHtml");
            b.each((b.jPlayer.emulateMethods + " " + b.jPlayer.emulateStatus + " " + b.jPlayer.emulateOptions).split(/\s+/g), function(b, d) {
                delete a.internal.domNode[d]
            })
        }
    };
    b.jPlayer.error = {
        FLASH: "e_flash",
        FLASH_DISABLED: "e_flash_disabled",
        NO_SOLUTION: "e_no_solution",
        NO_SUPPORT: "e_no_support",
        URL: "e_url",
        URL_NOT_SET: "e_url_not_set",
        VERSION: "e_version"
    };
    b.jPlayer.errorMsg = {
        FLASH: "jPlayer's Flash fallback is not configured correctly, or a command was issued before the jPlayer Ready event. Details: ",
        FLASH_DISABLED: "jPlayer's Flash fallback has been disabled by the browser due to the CSS rules you have used. Details: ",
        NO_SOLUTION: "No solution can be found by jPlayer in this browser. Neither HTML nor Flash can be used.",
        NO_SUPPORT: "It is not possible to play any media format provided in setMedia() on this browser using your current options.",
        URL: "Media URL could not be loaded.",
        URL_NOT_SET: "Attempt to issue media playback commands, while no media url is set.",
        VERSION: "jPlayer " + b.jPlayer.prototype.version.script + " needs Jplayer.swf version " + b.jPlayer.prototype.version.needFlash + " but found "
    };
    b.jPlayer.errorHint = {
        FLASH: "Check your swfPath option and that Jplayer.swf is there.",
        FLASH_DISABLED: "Check that you have not display:none; the jPlayer entity or any ancestor.",
        NO_SOLUTION: "Review the jPlayer options: support and supplied.",
        NO_SUPPORT: "Video or audio formats defined in the supplied option are missing.",
        URL: "Check media URL is valid.",
        URL_NOT_SET: "Use setMedia() to set the media URL.",
        VERSION: "Update jPlayer files."
    };
    b.jPlayer.warning = {
        CSS_SELECTOR_COUNT: "e_css_selector_count",
        CSS_SELECTOR_METHOD: "e_css_selector_method",
        CSS_SELECTOR_STRING: "e_css_selector_string",
        OPTION_KEY: "e_option_key"
    };
    b.jPlayer.warningMsg = {
        CSS_SELECTOR_COUNT: "The number of css selectors found did not equal one: ",
        CSS_SELECTOR_METHOD: "The methodName given in jPlayer('cssSelector') is not a valid jPlayer method.",
        CSS_SELECTOR_STRING: "The methodCssSelector given in jPlayer('cssSelector') is not a String or is empty.",
        OPTION_KEY: "The option requested in jPlayer('option') is undefined."
    };
    b.jPlayer.warningHint = {
        CSS_SELECTOR_COUNT: "Check your css selector and the ancestor.",
        CSS_SELECTOR_METHOD: "Check your method name.",
        CSS_SELECTOR_STRING: "Check your css selector is a string.",
        OPTION_KEY: "Check your option name."
    }
});