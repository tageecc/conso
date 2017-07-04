<<<<<<< HEAD
=======
let State = require('./State');
module.exports = class Request {
    constructor(res) {
        return this.handle(res);
    }

    handle(res) {
        return res;
    }
};
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233
'use strict';

/**
 * Module dependencies.
 */

const net = require('net');
const contentType = require('content-type');
const stringify = require('url').format;
const parse = require('parseurl');
const qs = require('querystring');
const typeis = require('type-is');
<<<<<<< HEAD
const accepts = require('accepts');
=======
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233
const fresh = require('fresh');
const only = require('only');

/**
 * Prototype.
 */

<<<<<<< HEAD
class Request {

    constructor(ctx) {
        this.ctx = this.app = ctx;
        this.req = ctx.req;
        this.res = ctx.res;
        this.accept = accepts(ctx.req);
    }
=======
module.exports = {
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Return request header.
     *
     * @return {Object}
     * @api public
     */

    get header() {
        return this.req.headers;
<<<<<<< HEAD
    }
=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Return request header, alias as request.header
     *
     * @return {Object}
     * @api public
     */

    get headers() {
        return this.req.headers;
<<<<<<< HEAD
    }
=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Get request URL.
     *
     * @return {String}
     * @api public
     */

    get url() {
        return this.req.url;
<<<<<<< HEAD
    }
=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Set request URL.
     *
     * @api public
     */

    set url(val) {
        this.req.url = val;
<<<<<<< HEAD
    }
=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Get origin of URL.
     *
     * @return {String}
     * @api public
     */

    get origin() {
        return `${this.protocol}://${this.host}`;
<<<<<<< HEAD
    }
=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Get full request URL.
     *
     * @return {String}
     * @api public
     */

    get href() {
        // support: `GET http://example.com/foo`
        if (/^https?:\/\//i.test(this.originalUrl)) return this.originalUrl;
        return this.origin + this.originalUrl;
<<<<<<< HEAD
    }
=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Get request method.
     *
     * @return {String}
     * @api public
     */

    get method() {
        return this.req.method;
<<<<<<< HEAD
    }
=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Set request method.
     *
     * @param {String} val
     * @api public
     */

    set method(val) {
        this.req.method = val;
<<<<<<< HEAD
    }
=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Get request pathname.
     *
     * @return {String}
     * @api public
     */

    get path() {
        return parse(this.req).pathname;
<<<<<<< HEAD
    }
=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Set pathname, retaining the query-string when present.
     *
     * @param {String} path
     * @api public
     */

    set path(path) {
        const url = parse(this.req);
        if (url.pathname === path) return;

        url.pathname = path;
        url.path = null;

        this.url = stringify(url);
<<<<<<< HEAD
    }
=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Get parsed query-string.
     *
     * @return {Object}
     * @api public
     */

    get query() {
        const str = this.querystring;
        const c = this._querycache = this._querycache || {};
        return c[str] || (c[str] = qs.parse(str));
<<<<<<< HEAD
    }
=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Set query-string as an object.
     *
     * @param {Object} obj
     * @api public
     */

    set query(obj) {
        this.querystring = qs.stringify(obj);
<<<<<<< HEAD
    }
=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Get query string.
     *
     * @return {String}
     * @api public
     */

    get querystring() {
        if (!this.req) return '';
        return parse(this.req).query || '';
<<<<<<< HEAD
    }
=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Set querystring.
     *
     * @param {String} str
     * @api public
     */

    set querystring(str) {
        const url = parse(this.req);
        if (url.search === `?${str}`) return;

        url.search = str;
        url.path = null;

        this.url = stringify(url);
<<<<<<< HEAD
    }
=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Get the search string. Same as the querystring
     * except it includes the leading ?.
     *
     * @return {String}
     * @api public
     */

    get search() {
        if (!this.querystring) return '';
        return `?${this.querystring}`;
<<<<<<< HEAD
    }
=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Set the search string. Same as
     * response.querystring= but included for ubiquity.
     *
     * @param {String} str
     * @api public
     */

    set search(str) {
        this.querystring = str;
<<<<<<< HEAD
    }
=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Parse the "Host" header field host
     * and support X-Forwarded-Host when a
     * proxy is enabled.
     *
     * @return {String} hostname:port
     * @api public
     */

    get host() {
        const proxy = this.app.proxy;
        let host = proxy && this.get('X-Forwarded-Host');
        host = host || this.get('Host');
        if (!host) return '';
        return host.split(/\s*,\s*/)[0];
<<<<<<< HEAD
    }
=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Parse the "Host" header field hostname
     * and support X-Forwarded-Host when a
     * proxy is enabled.
     *
     * @return {String} hostname
     * @api public
     */

    get hostname() {
        const host = this.host;
        if (!host) return '';
        return host.split(':')[0];
<<<<<<< HEAD
    }
=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Check if the request is fresh, aka
     * Last-Modified and/or the ETag
     * still match.
     *
     * @return {Boolean}
     * @api public
     */

    get fresh() {
        const method = this.method;
        const s = this.ctx.status;

        // GET or HEAD for weak freshness validation only
        if ('GET' != method && 'HEAD' != method) return false;

        // 2xx or 304 as per rfc2616 14.26
        if ((s >= 200 && s < 300) || 304 == s) {
            return fresh(this.header, this.ctx.response.header);
        }

        return false;
<<<<<<< HEAD
    }
=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Check if the request is stale, aka
     * "Last-Modified" and / or the "ETag" for the
     * resource has changed.
     *
     * @return {Boolean}
     * @api public
     */

    get stale() {
        return !this.fresh;
<<<<<<< HEAD
    }
=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Check if the request is idempotent.
     *
     * @return {Boolean}
     * @api public
     */

    get idempotent() {
        const methods = ['GET', 'HEAD', 'PUT', 'DELETE', 'OPTIONS', 'TRACE'];
        return !!~methods.indexOf(this.method);
<<<<<<< HEAD
    }
=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Return the request socket.
     *
     * @return {Connection}
     * @api public
     */

    get socket() {
        return this.req.socket;
<<<<<<< HEAD
    }
=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Get the charset when present or undefined.
     *
     * @return {String}
     * @api public
     */

    get charset() {
        const type = this.get('Content-Type');
        if (!type) return '';

        return contentType.parse(type).parameters.charset || '';
<<<<<<< HEAD
    }

=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Return parsed Content-Length when present.
     *
     * @return {Number}
     * @api public
     */

    get length() {
        const len = this.get('Content-Length');
        if (len == '') return;
        return ~~len;
<<<<<<< HEAD
    }

=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Return the protocol string "http" or "https"
     * when requested with TLS. When the proxy setting
     * is enabled the "X-Forwarded-Proto" header
     * field will be trusted. If you're running behind
     * a reverse proxy that supplies https for you this
     * may be enabled.
     *
     * @return {String}
     * @api public
     */

    get protocol() {
        const proxy = this.app.proxy;
        if (this.socket.encrypted) return 'https';
        if (!proxy) return 'http';
        const proto = this.get('X-Forwarded-Proto') || 'http';
        return proto.split(/\s*,\s*/)[0];
<<<<<<< HEAD
    }

=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Short-hand for:
     *
     *    this.protocol == 'https'
     *
     * @return {Boolean}
     * @api public
     */

    get secure() {
        return 'https' == this.protocol;
<<<<<<< HEAD
    }

=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * When `app.proxy` is `true`, parse
     * the "X-Forwarded-For" ip address list.
     *
     * For example if the value were "client, proxy1, proxy2"
     * you would receive the array `["client", "proxy1", "proxy2"]`
     * where "proxy2" is the furthest down-stream.
     *
     * @return {Array}
     * @api public
     */

    get ips() {
        const proxy = this.app.proxy;
        const val = this.get('X-Forwarded-For');
        return proxy && val
            ? val.split(/\s*,\s*/)
            : [];
<<<<<<< HEAD
    }

=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Return subdomains as an array.
     *
     * Subdomains are the dot-separated parts of the host before the main domain
     * of the app. By default, the domain of the app is assumed to be the last two
     * parts of the host. This can be changed by setting `app.subdomainOffset`.
     *
     * For example, if the domain is "tobi.ferrets.example.com":
     * If `app.subdomainOffset` is not set, this.subdomains is
     * `["ferrets", "tobi"]`.
     * If `app.subdomainOffset` is 3, this.subdomains is `["tobi"]`.
     *
     * @return {Array}
     * @api public
     */

    get subdomains() {
        const offset = this.app.subdomainOffset;
        const hostname = this.hostname;
        if (net.isIP(hostname)) return [];
        return hostname
            .split('.')
            .reverse()
            .slice(offset);
<<<<<<< HEAD
    }
=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Check if the given `type(s)` is acceptable, returning
     * the best match when true, otherwise `undefined`, in which
     * case you should respond with 406 "Not Acceptable".
     *
     * The `type` value may be a single mime type string
     * such as "application/json", the extension name
     * such as "json" or an array `["json", "html", "text/plain"]`. When a list
     * or array is given the _best_ match, if any is returned.
     *
     * Examples:
     *
     *     // Accept: text/html
     *     this.accepts('html');
     *     // => "html"
     *
     *     // Accept: text/*, application/json
     *     this.accepts('html');
     *     // => "html"
     *     this.accepts('text/html');
     *     // => "text/html"
     *     this.accepts('json', 'text');
     *     // => "json"
     *     this.accepts('application/json');
     *     // => "application/json"
     *
     *     // Accept: text/*, application/json
     *     this.accepts('image/png');
     *     this.accepts('png');
     *     // => undefined
     *
     *     // Accept: text/*;q=.5, application/json
     *     this.accepts(['html', 'json']);
     *     this.accepts('html', 'json');
     *     // => "json"
     *
     * @param {String|Array} type(s)...
     * @return {String|Array|Boolean}
     * @api public
     */

    accepts() {
        return this.accept.types.apply(this.accept, arguments);
<<<<<<< HEAD
    }
=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Return accepted encodings or best fit based on `encodings`.
     *
     * Given `Accept-Encoding: gzip, deflate`
     * an array sorted by quality is returned:
     *
     *     ['gzip', 'deflate']
     *
     * @param {String|Array} encoding(s)...
     * @return {String|Array}
     * @api public
     */

    acceptsEncodings() {
        return this.accept.encodings.apply(this.accept, arguments);
<<<<<<< HEAD
    }

=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Return accepted charsets or best fit based on `charsets`.
     *
     * Given `Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5`
     * an array sorted by quality is returned:
     *
     *     ['utf-8', 'utf-7', 'iso-8859-1']
     *
     * @param {String|Array} charset(s)...
     * @return {String|Array}
     * @api public
     */

    acceptsCharsets() {
        return this.accept.charsets.apply(this.accept, arguments);
<<<<<<< HEAD
    }

=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Return accepted languages or best fit based on `langs`.
     *
     * Given `Accept-Language: en;q=0.8, es, pt`
     * an array sorted by quality is returned:
     *
     *     ['es', 'pt', 'en']
     *
     * @param {String|Array} lang(s)...
     * @return {Array|String}
     * @api public
     */

    acceptsLanguages() {
        return this.accept.languages.apply(this.accept, arguments);
<<<<<<< HEAD
    }

=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Check if the incoming request contains the "Content-Type"
     * header field, and it contains any of the give mime `type`s.
     * If there is no request body, `null` is returned.
     * If there is no content type, `false` is returned.
     * Otherwise, it returns the first `type` that matches.
     *
     * Examples:
     *
     *     // With Content-Type: text/html; charset=utf-8
     *     this.is('html'); // => 'html'
     *     this.is('text/html'); // => 'text/html'
     *     this.is('text/*', 'application/json'); // => 'text/html'
     *
     *     // When Content-Type is application/json
     *     this.is('json', 'urlencoded'); // => 'json'
     *     this.is('application/json'); // => 'application/json'
     *     this.is('html', 'application/*'); // => 'application/json'
     *
     *     this.is('html'); // => false
     *
     * @param {String|Array} types...
     * @return {String|false|null}
     * @api public
     */

    is(types) {
        if (!types) return typeis(this.req);
        if (!Array.isArray(types)) types = [].slice.call(arguments);
        return typeis(this.req, types);
<<<<<<< HEAD
    }

=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Return the request mime type void of
     * parameters such as "charset".
     *
     * @return {String}
     * @api public
     */

    get type() {
        const type = this.get('Content-Type');
        if (!type) return '';
        return type.split(';')[0];
<<<<<<< HEAD
    }

=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Return request header.
     *
     * The `Referrer` header field is special-cased,
     * both `Referrer` and `Referer` are interchangeable.
     *
     * Examples:
     *
     *     this.get('Content-Type');
     *     // => "text/plain"
     *
     *     this.get('content-type');
     *     // => "text/plain"
     *
     *     this.get('Something');
     *     // => undefined
     *
     * @param {String} field
     * @return {String}
     * @api public
     */
<<<<<<< HEAD
=======

>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233
    get(field) {
        const req = this.req;
        switch (field = field.toLowerCase()) {
            case 'referer':
            case 'referrer':
                return req.headers.referrer || req.headers.referer || '';
            default:
                return req.headers[field] || '';
        }
<<<<<<< HEAD
    }

=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Inspect implementation.
     *
     * @return {Object}
     * @api public
     */

    inspect() {
        if (!this.req) return;
        return this.toJSON();
<<<<<<< HEAD
    }
=======
    },
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233

    /**
     * Return JSON representation.
     *
     * @return {Object}
     * @api public
     */

    toJSON() {
        return only(this, [
            'method',
            'url',
            'header'
        ]);
    }
<<<<<<< HEAD
}


module.exports = Request;
=======
};
>>>>>>> a7c5de60be46194ab901db6de9332592d53b6233