module.exports = [
"[project]/node_modules/.pnpm/@clerk+nextjs@6.39.6_next@1_e4f340dc9b8ea70227def0df2f5abc5c/node_modules/@clerk/nextjs/dist/esm/server/middleware-storage.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clerkMiddlewareRequestDataStorage",
    ()=>clerkMiddlewareRequestDataStorage,
    "clerkMiddlewareRequestDataStore",
    ()=>clerkMiddlewareRequestDataStore
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$async_hooks__$5b$external$5d$__$28$node$3a$async_hooks$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:async_hooks [external] (node:async_hooks, cjs)");
;
;
const clerkMiddlewareRequestDataStore = /* @__PURE__ */ new Map();
const clerkMiddlewareRequestDataStorage = new __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$async_hooks__$5b$external$5d$__$28$node$3a$async_hooks$2c$__cjs$29$__["AsyncLocalStorage"]();
;
 //# sourceMappingURL=middleware-storage.js.map
}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.39.6_next@1_e4f340dc9b8ea70227def0df2f5abc5c/node_modules/@clerk/nextjs/dist/esm/server/clerkClient.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clerkClient",
    ()=>clerkClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$2$2e$33$2e$6_react_be6585eb000905ff97c61a8c190bb45a$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$internal$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@2.33.6_react_be6585eb000905ff97c61a8c190bb45a/node_modules/@clerk/backend/dist/internal.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$2$2e$33$2e$6_react_be6585eb000905ff97c61a8c190bb45a$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$QQ3KHOKZ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@2.33.6_react_be6585eb000905ff97c61a8c190bb45a/node_modules/@clerk/backend/dist/chunk-QQ3KHOKZ.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.39.6_next@1_e4f340dc9b8ea70227def0df2f5abc5c/node_modules/@clerk/nextjs/dist/esm/app-router/server/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$createClerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.39.6_next@1_e4f340dc9b8ea70227def0df2f5abc5c/node_modules/@clerk/nextjs/dist/esm/server/createClerkClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$headers$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.39.6_next@1_e4f340dc9b8ea70227def0df2f5abc5c/node_modules/@clerk/nextjs/dist/esm/server/headers-utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$middleware$2d$storage$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.39.6_next@1_e4f340dc9b8ea70227def0df2f5abc5c/node_modules/@clerk/nextjs/dist/esm/server/middleware-storage.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.39.6_next@1_e4f340dc9b8ea70227def0df2f5abc5c/node_modules/@clerk/nextjs/dist/esm/server/utils.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const clerkClient = async ()=>{
    var _a, _b;
    let requestData;
    try {
        const request = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildRequestLike"])();
        const encryptedRequestData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$headers$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHeader"])(request, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$2$2e$33$2e$6_react_be6585eb000905ff97c61a8c190bb45a$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$QQ3KHOKZ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.ClerkRequestData);
        requestData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decryptClerkRequestData"])(encryptedRequestData);
    } catch (err) {
        if (err && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPrerenderingBailout"])(err)) {
            throw err;
        }
    }
    const options = (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$middleware$2d$storage$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clerkMiddlewareRequestDataStorage"].getStore()) == null ? void 0 : _a.get("requestData")) != null ? _b : requestData;
    if ((options == null ? void 0 : options.secretKey) || (options == null ? void 0 : options.publishableKey)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$createClerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClerkClientWithOptions"])(options);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$createClerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClerkClientWithOptions"])({});
};
;
 //# sourceMappingURL=clerkClient.js.map
}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.39.6_next@1_e4f340dc9b8ea70227def0df2f5abc5c/node_modules/@clerk/nextjs/dist/esm/app-router/server/currentUser.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "currentUser",
    ()=>currentUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$clerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.39.6_next@1_e4f340dc9b8ea70227def0df2f5abc5c/node_modules/@clerk/nextjs/dist/esm/server/clerkClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.39.6_next@1_e4f340dc9b8ea70227def0df2f5abc5c/node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js [app-rsc] (ecmascript)");
;
;
;
async function currentUser(opts) {
    __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/server-only/empty.js [app-rsc] (ecmascript)");
    const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])({
        treatPendingAsSignedOut: opts == null ? void 0 : opts.treatPendingAsSignedOut
    });
    if (!userId) {
        return null;
    }
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$clerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clerkClient"])()).users.getUser(userId);
}
;
 //# sourceMappingURL=currentUser.js.map
}),
"[project]/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/runtime/library.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var yu = Object.create;
var jt = Object.defineProperty;
var bu = Object.getOwnPropertyDescriptor;
var Eu = Object.getOwnPropertyNames;
var wu = Object.getPrototypeOf, xu = Object.prototype.hasOwnProperty;
var Do = (e, r)=>()=>(e && (r = e(e = 0)), r);
var ue = (e, r)=>()=>(r || e((r = {
            exports: {}
        }).exports, r), r.exports), tr = (e, r)=>{
    for(var t in r)jt(e, t, {
        get: r[t],
        enumerable: !0
    });
}, Oo = (e, r, t, n)=>{
    if (r && typeof r == "object" || typeof r == "function") for (let i of Eu(r))!xu.call(e, i) && i !== t && jt(e, i, {
        get: ()=>r[i],
        enumerable: !(n = bu(r, i)) || n.enumerable
    });
    return e;
};
var O = (e, r, t)=>(t = e != null ? yu(wu(e)) : {}, Oo(r || !e || !e.__esModule ? jt(t, "default", {
        value: e,
        enumerable: !0
    }) : t, e)), vu = (e)=>Oo(jt({}, "__esModule", {
        value: !0
    }), e);
var hi = ue((_g, is)=>{
    "use strict";
    is.exports = (e, r = process.argv)=>{
        let t = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", n = r.indexOf(t + e), i = r.indexOf("--");
        return n !== -1 && (i === -1 || n < i);
    };
});
var as = ue((Ng, ss)=>{
    "use strict";
    var Fc = __turbopack_context__.r("[externals]/node:os [external] (node:os, cjs)"), os = __turbopack_context__.r("[externals]/node:tty [external] (node:tty, cjs)"), de = hi(), { env: G } = process, Qe;
    de("no-color") || de("no-colors") || de("color=false") || de("color=never") ? Qe = 0 : (de("color") || de("colors") || de("color=true") || de("color=always")) && (Qe = 1);
    "FORCE_COLOR" in G && (G.FORCE_COLOR === "true" ? Qe = 1 : G.FORCE_COLOR === "false" ? Qe = 0 : Qe = G.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(G.FORCE_COLOR, 10), 3));
    function yi(e) {
        return e === 0 ? !1 : {
            level: e,
            hasBasic: !0,
            has256: e >= 2,
            has16m: e >= 3
        };
    }
    function bi(e, r) {
        if (Qe === 0) return 0;
        if (de("color=16m") || de("color=full") || de("color=truecolor")) return 3;
        if (de("color=256")) return 2;
        if (e && !r && Qe === void 0) return 0;
        let t = Qe || 0;
        if (G.TERM === "dumb") return t;
        if ("TURBOPACK compile-time truthy", 1) {
            let n = Fc.release().split(".");
            return Number(n[0]) >= 10 && Number(n[2]) >= 10586 ? Number(n[2]) >= 14931 ? 3 : 2 : 1;
        }
        //TURBOPACK unreachable
        ;
    }
    function Mc(e) {
        let r = bi(e, e && e.isTTY);
        return yi(r);
    }
    ss.exports = {
        supportsColor: Mc,
        stdout: yi(bi(!0, os.isatty(1))),
        stderr: yi(bi(!0, os.isatty(2)))
    };
});
var cs = ue((Lg, us)=>{
    "use strict";
    var $c = as(), br = hi();
    function ls(e) {
        if (/^\d{3,4}$/.test(e)) {
            let t = /(\d{1,2})(\d{2})/.exec(e) || [];
            return {
                major: 0,
                minor: parseInt(t[1], 10),
                patch: parseInt(t[2], 10)
            };
        }
        let r = (e || "").split(".").map((t)=>parseInt(t, 10));
        return {
            major: r[0],
            minor: r[1],
            patch: r[2]
        };
    }
    function Ei(e) {
        let { CI: r, FORCE_HYPERLINK: t, NETLIFY: n, TEAMCITY_VERSION: i, TERM_PROGRAM: o, TERM_PROGRAM_VERSION: s, VTE_VERSION: a, TERM: l } = process.env;
        if (t) return !(t.length > 0 && parseInt(t, 10) === 0);
        if (br("no-hyperlink") || br("no-hyperlinks") || br("hyperlink=false") || br("hyperlink=never")) return !1;
        if (br("hyperlink=true") || br("hyperlink=always") || n) return !0;
        if (!$c.supportsColor(e) || e && !e.isTTY) return !1;
        if ("WT_SESSION" in process.env) return !0;
        if ("TURBOPACK compile-time truthy", 1) return !1;
        //TURBOPACK unreachable
        ;
    }
    us.exports = {
        supportsHyperlink: Ei,
        stdout: Ei(process.stdout),
        stderr: Ei(process.stderr)
    };
});
var ps = ue((Kg, qc)=>{
    qc.exports = {
        name: "@prisma/internals",
        version: "6.19.3",
        description: "This package is intended for Prisma's internal use",
        main: "dist/index.js",
        types: "dist/index.d.ts",
        repository: {
            type: "git",
            url: "https://github.com/prisma/prisma.git",
            directory: "packages/internals"
        },
        homepage: "https://www.prisma.io",
        author: "Tim Suchanek <suchanek@prisma.io>",
        bugs: "https://github.com/prisma/prisma/issues",
        license: "Apache-2.0",
        scripts: {
            dev: "DEV=true tsx helpers/build.ts",
            build: "tsx helpers/build.ts",
            test: "dotenv -e ../../.db.env -- jest --silent",
            prepublishOnly: "pnpm run build"
        },
        files: [
            "README.md",
            "dist",
            "!**/libquery_engine*",
            "!dist/get-generators/engines/*",
            "scripts"
        ],
        devDependencies: {
            "@babel/helper-validator-identifier": "7.25.9",
            "@opentelemetry/api": "1.9.0",
            "@swc/core": "1.11.5",
            "@swc/jest": "0.2.37",
            "@types/babel__helper-validator-identifier": "7.15.2",
            "@types/jest": "29.5.14",
            "@types/node": "18.19.76",
            "@types/resolve": "1.20.6",
            archiver: "6.0.2",
            "checkpoint-client": "1.1.33",
            "cli-truncate": "4.0.0",
            dotenv: "16.5.0",
            empathic: "2.0.0",
            "escape-string-regexp": "5.0.0",
            execa: "8.0.1",
            "fast-glob": "3.3.3",
            "find-up": "7.0.0",
            "fp-ts": "2.16.9",
            "fs-extra": "11.3.0",
            "global-directory": "4.0.0",
            globby: "11.1.0",
            "identifier-regex": "1.0.0",
            "indent-string": "4.0.0",
            "is-windows": "1.0.2",
            "is-wsl": "3.1.0",
            jest: "29.7.0",
            "jest-junit": "16.0.0",
            kleur: "4.1.5",
            "mock-stdin": "1.0.0",
            "new-github-issue-url": "0.2.1",
            "node-fetch": "3.3.2",
            "npm-packlist": "5.1.3",
            open: "7.4.2",
            "p-map": "4.0.0",
            resolve: "1.22.10",
            "string-width": "7.2.0",
            "strip-indent": "4.0.0",
            "temp-dir": "2.0.0",
            tempy: "1.0.1",
            "terminal-link": "4.0.0",
            tmp: "0.2.3",
            "ts-pattern": "5.6.2",
            "ts-toolbelt": "9.6.0",
            typescript: "5.4.5",
            yarn: "1.22.22"
        },
        dependencies: {
            "@prisma/config": "workspace:*",
            "@prisma/debug": "workspace:*",
            "@prisma/dmmf": "workspace:*",
            "@prisma/driver-adapter-utils": "workspace:*",
            "@prisma/engines": "workspace:*",
            "@prisma/fetch-engine": "workspace:*",
            "@prisma/generator": "workspace:*",
            "@prisma/generator-helper": "workspace:*",
            "@prisma/get-platform": "workspace:*",
            "@prisma/prisma-schema-wasm": "7.1.1-3.c2990dca591cba766e3b7ef5d9e8a84796e47ab7",
            "@prisma/schema-engine-wasm": "7.1.1-3.c2990dca591cba766e3b7ef5d9e8a84796e47ab7",
            "@prisma/schema-files-loader": "workspace:*",
            arg: "5.0.2",
            prompts: "2.4.2"
        },
        peerDependencies: {
            typescript: ">=5.1.0"
        },
        peerDependenciesMeta: {
            typescript: {
                optional: !0
            }
        },
        sideEffects: !1
    };
});
var Ti = ue((gh, Qc)=>{
    Qc.exports = {
        name: "@prisma/engines-version",
        version: "7.1.1-3.c2990dca591cba766e3b7ef5d9e8a84796e47ab7",
        main: "index.js",
        types: "index.d.ts",
        license: "Apache-2.0",
        author: "Tim Suchanek <suchanek@prisma.io>",
        prisma: {
            enginesVersion: "c2990dca591cba766e3b7ef5d9e8a84796e47ab7"
        },
        repository: {
            type: "git",
            url: "https://github.com/prisma/engines-wrapper.git",
            directory: "packages/engines-version"
        },
        devDependencies: {
            "@types/node": "18.19.76",
            typescript: "4.9.5"
        },
        files: [
            "index.js",
            "index.d.ts"
        ],
        scripts: {
            build: "tsc -d"
        }
    };
});
var on = ue((nn)=>{
    "use strict";
    Object.defineProperty(nn, "__esModule", {
        value: !0
    });
    nn.enginesVersion = void 0;
    nn.enginesVersion = Ti().prisma.enginesVersion;
});
var hs = ue((Ih, gs)=>{
    "use strict";
    gs.exports = (e)=>{
        let r = e.match(/^[ \t]*(?=\S)/gm);
        return r ? r.reduce((t, n)=>Math.min(t, n.length), 1 / 0) : 0;
    };
});
var Di = ue((kh, Es)=>{
    "use strict";
    Es.exports = (e, r = 1, t)=>{
        if (t = {
            indent: " ",
            includeEmptyLines: !1,
            ...t
        }, typeof e != "string") throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
        if (typeof r != "number") throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof r}\``);
        if (typeof t.indent != "string") throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof t.indent}\``);
        if (r === 0) return e;
        let n = t.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return e.replace(n, t.indent.repeat(r));
    };
});
var vs = ue((jh, tp)=>{
    tp.exports = {
        name: "dotenv",
        version: "16.5.0",
        description: "Loads environment variables from .env file",
        main: "lib/main.js",
        types: "lib/main.d.ts",
        exports: {
            ".": {
                types: "./lib/main.d.ts",
                require: "./lib/main.js",
                default: "./lib/main.js"
            },
            "./config": "./config.js",
            "./config.js": "./config.js",
            "./lib/env-options": "./lib/env-options.js",
            "./lib/env-options.js": "./lib/env-options.js",
            "./lib/cli-options": "./lib/cli-options.js",
            "./lib/cli-options.js": "./lib/cli-options.js",
            "./package.json": "./package.json"
        },
        scripts: {
            "dts-check": "tsc --project tests/types/tsconfig.json",
            lint: "standard",
            pretest: "npm run lint && npm run dts-check",
            test: "tap run --allow-empty-coverage --disable-coverage --timeout=60000",
            "test:coverage": "tap run --show-full-coverage --timeout=60000 --coverage-report=lcov",
            prerelease: "npm test",
            release: "standard-version"
        },
        repository: {
            type: "git",
            url: "git://github.com/motdotla/dotenv.git"
        },
        homepage: "https://github.com/motdotla/dotenv#readme",
        funding: "https://dotenvx.com",
        keywords: [
            "dotenv",
            "env",
            ".env",
            "environment",
            "variables",
            "config",
            "settings"
        ],
        readmeFilename: "README.md",
        license: "BSD-2-Clause",
        devDependencies: {
            "@types/node": "^18.11.3",
            decache: "^4.6.2",
            sinon: "^14.0.1",
            standard: "^17.0.0",
            "standard-version": "^9.5.0",
            tap: "^19.2.0",
            typescript: "^4.8.4"
        },
        engines: {
            node: ">=12"
        },
        browser: {
            fs: !1
        }
    };
});
var As = ue((Bh, _e)=>{
    "use strict";
    var Fi = __turbopack_context__.r("[externals]/node:fs [external] (node:fs, cjs)"), Mi = __turbopack_context__.r("[externals]/node:path [external] (node:path, cjs)"), np = __turbopack_context__.r("[externals]/node:os [external] (node:os, cjs)"), ip = __turbopack_context__.r("[externals]/node:crypto [external] (node:crypto, cjs)"), op = vs(), Ts = op.version, sp = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
    function ap(e) {
        let r = {}, t = e.toString();
        t = t.replace(/\r\n?/mg, `
`);
        let n;
        for(; (n = sp.exec(t)) != null;){
            let i = n[1], o = n[2] || "";
            o = o.trim();
            let s = o[0];
            o = o.replace(/^(['"`])([\s\S]*)\1$/mg, "$2"), s === '"' && (o = o.replace(/\\n/g, `
`), o = o.replace(/\\r/g, "\r")), r[i] = o;
        }
        return r;
    }
    function lp(e) {
        let r = Rs(e), t = B.configDotenv({
            path: r
        });
        if (!t.parsed) {
            let s = new Error(`MISSING_DATA: Cannot parse ${r} for an unknown reason`);
            throw s.code = "MISSING_DATA", s;
        }
        let n = Ss(e).split(","), i = n.length, o;
        for(let s = 0; s < i; s++)try {
            let a = n[s].trim(), l = cp(t, a);
            o = B.decrypt(l.ciphertext, l.key);
            break;
        } catch (a) {
            if (s + 1 >= i) throw a;
        }
        return B.parse(o);
    }
    function up(e) {
        console.log(`[dotenv@${Ts}][WARN] ${e}`);
    }
    function ot(e) {
        console.log(`[dotenv@${Ts}][DEBUG] ${e}`);
    }
    function Ss(e) {
        return e && e.DOTENV_KEY && e.DOTENV_KEY.length > 0 ? e.DOTENV_KEY : process.env.DOTENV_KEY && process.env.DOTENV_KEY.length > 0 ? process.env.DOTENV_KEY : "";
    }
    function cp(e, r) {
        let t;
        try {
            t = new URL(r);
        } catch (a) {
            if (a.code === "ERR_INVALID_URL") {
                let l = new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");
                throw l.code = "INVALID_DOTENV_KEY", l;
            }
            throw a;
        }
        let n = t.password;
        if (!n) {
            let a = new Error("INVALID_DOTENV_KEY: Missing key part");
            throw a.code = "INVALID_DOTENV_KEY", a;
        }
        let i = t.searchParams.get("environment");
        if (!i) {
            let a = new Error("INVALID_DOTENV_KEY: Missing environment part");
            throw a.code = "INVALID_DOTENV_KEY", a;
        }
        let o = `DOTENV_VAULT_${i.toUpperCase()}`, s = e.parsed[o];
        if (!s) {
            let a = new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${o} in your .env.vault file.`);
            throw a.code = "NOT_FOUND_DOTENV_ENVIRONMENT", a;
        }
        return {
            ciphertext: s,
            key: n
        };
    }
    function Rs(e) {
        let r = null;
        if (e && e.path && e.path.length > 0) if (Array.isArray(e.path)) for (let t of e.path)Fi.existsSync(t) && (r = t.endsWith(".vault") ? t : `${t}.vault`);
        else r = e.path.endsWith(".vault") ? e.path : `${e.path}.vault`;
        else r = Mi.resolve(process.cwd(), ".env.vault");
        return Fi.existsSync(r) ? r : null;
    }
    function Ps(e) {
        return e[0] === "~" ? Mi.join(np.homedir(), e.slice(1)) : e;
    }
    function pp(e) {
        !!(e && e.debug) && ot("Loading env from encrypted .env.vault");
        let t = B._parseVault(e), n = process.env;
        return e && e.processEnv != null && (n = e.processEnv), B.populate(n, t, e), {
            parsed: t
        };
    }
    function dp(e) {
        let r = Mi.resolve(process.cwd(), ".env"), t = "utf8", n = !!(e && e.debug);
        e && e.encoding ? t = e.encoding : n && ot("No encoding is specified. UTF-8 is used by default");
        let i = [
            r
        ];
        if (e && e.path) if (!Array.isArray(e.path)) i = [
            Ps(e.path)
        ];
        else {
            i = [];
            for (let l of e.path)i.push(Ps(l));
        }
        let o, s = {};
        for (let l of i)try {
            let u = B.parse(Fi.readFileSync(l, {
                encoding: t
            }));
            B.populate(s, u, e);
        } catch (u) {
            n && ot(`Failed to load ${l} ${u.message}`), o = u;
        }
        let a = process.env;
        return e && e.processEnv != null && (a = e.processEnv), B.populate(a, s, e), o ? {
            parsed: s,
            error: o
        } : {
            parsed: s
        };
    }
    function mp(e) {
        if (Ss(e).length === 0) return B.configDotenv(e);
        let r = Rs(e);
        return r ? B._configVault(e) : (up(`You set DOTENV_KEY but you are missing a .env.vault file at ${r}. Did you forget to build it?`), B.configDotenv(e));
    }
    function fp(e, r) {
        let t = Buffer.from(r.slice(-64), "hex"), n = Buffer.from(e, "base64"), i = n.subarray(0, 12), o = n.subarray(-16);
        n = n.subarray(12, -16);
        try {
            let s = ip.createDecipheriv("aes-256-gcm", t, i);
            return s.setAuthTag(o), `${s.update(n)}${s.final()}`;
        } catch (s) {
            let a = s instanceof RangeError, l = s.message === "Invalid key length", u = s.message === "Unsupported state or unable to authenticate data";
            if (a || l) {
                let c = new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");
                throw c.code = "INVALID_DOTENV_KEY", c;
            } else if (u) {
                let c = new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");
                throw c.code = "DECRYPTION_FAILED", c;
            } else throw s;
        }
    }
    function gp(e, r, t = {}) {
        let n = !!(t && t.debug), i = !!(t && t.override);
        if (typeof r != "object") {
            let o = new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");
            throw o.code = "OBJECT_REQUIRED", o;
        }
        for (let o of Object.keys(r))Object.prototype.hasOwnProperty.call(e, o) ? (i === !0 && (e[o] = r[o]), n && ot(i === !0 ? `"${o}" is already defined and WAS overwritten` : `"${o}" is already defined and was NOT overwritten`)) : e[o] = r[o];
    }
    var B = {
        configDotenv: dp,
        _configVault: pp,
        _parseVault: lp,
        config: mp,
        decrypt: fp,
        parse: ap,
        populate: gp
    };
    _e.exports.configDotenv = B.configDotenv;
    _e.exports._configVault = B._configVault;
    _e.exports._parseVault = B._parseVault;
    _e.exports.config = B.config;
    _e.exports.decrypt = B.decrypt;
    _e.exports.parse = B.parse;
    _e.exports.populate = B.populate;
    _e.exports = B;
});
var Os = ue((Kh, cn)=>{
    "use strict";
    cn.exports = (e = {})=>{
        let r;
        if (e.repoUrl) r = e.repoUrl;
        else if (e.user && e.repo) r = `https://github.com/${e.user}/${e.repo}`;
        else throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");
        let t = new URL(`${r}/issues/new`), n = [
            "body",
            "title",
            "labels",
            "template",
            "milestone",
            "assignee",
            "projects"
        ];
        for (let i of n){
            let o = e[i];
            if (o !== void 0) {
                if (i === "labels" || i === "projects") {
                    if (!Array.isArray(o)) throw new TypeError(`The \`${i}\` option should be an array`);
                    o = o.join(",");
                }
                t.searchParams.set(i, o);
            }
        }
        return t.toString();
    };
    cn.exports.default = cn.exports;
});
var Ki = ue((vb, ea)=>{
    "use strict";
    ea.exports = function() {
        function e(r, t, n, i, o) {
            return r < t || n < t ? r > n ? n + 1 : r + 1 : i === o ? t : t + 1;
        }
        return function(r, t) {
            if (r === t) return 0;
            if (r.length > t.length) {
                var n = r;
                r = t, t = n;
            }
            for(var i = r.length, o = t.length; i > 0 && r.charCodeAt(i - 1) === t.charCodeAt(o - 1);)i--, o--;
            for(var s = 0; s < i && r.charCodeAt(s) === t.charCodeAt(s);)s++;
            if (i -= s, o -= s, i === 0 || o < 3) return o;
            var a = 0, l, u, c, p, d, f, h, g, I, T, S, b, D = [];
            for(l = 0; l < i; l++)D.push(l + 1), D.push(r.charCodeAt(s + l));
            for(var me = D.length - 1; a < o - 3;)for(I = t.charCodeAt(s + (u = a)), T = t.charCodeAt(s + (c = a + 1)), S = t.charCodeAt(s + (p = a + 2)), b = t.charCodeAt(s + (d = a + 3)), f = a += 4, l = 0; l < me; l += 2)h = D[l], g = D[l + 1], u = e(h, u, c, I, g), c = e(u, c, p, T, g), p = e(c, p, d, S, g), f = e(p, d, f, b, g), D[l] = f, d = p, p = c, c = u, u = h;
            for(; a < o;)for(I = t.charCodeAt(s + (u = a)), f = ++a, l = 0; l < me; l += 2)h = D[l], D[l] = f = e(h, u, f, I, D[l + 1]), u = h;
            return f;
        };
    }();
});
var oa = Do(()=>{
    "use strict";
});
var sa = Do(()=>{
    "use strict";
});
var jf = {};
tr(jf, {
    DMMF: ()=>ct,
    Debug: ()=>N,
    Decimal: ()=>Fe,
    Extensions: ()=>ni,
    MetricsClient: ()=>Lr,
    PrismaClientInitializationError: ()=>P,
    PrismaClientKnownRequestError: ()=>z,
    PrismaClientRustPanicError: ()=>ae,
    PrismaClientUnknownRequestError: ()=>V,
    PrismaClientValidationError: ()=>Z,
    Public: ()=>ii,
    Sql: ()=>ie,
    createParam: ()=>va,
    defineDmmfProperty: ()=>Ca,
    deserializeJsonResponse: ()=>Vr,
    deserializeRawResult: ()=>Xn,
    dmmfToRuntimeDataModel: ()=>Ns,
    empty: ()=>Oa,
    getPrismaClient: ()=>fu,
    getRuntime: ()=>Kn,
    join: ()=>Da,
    makeStrictEnum: ()=>gu,
    makeTypedQueryFactory: ()=>Ia,
    objectEnumValues: ()=>On,
    raw: ()=>no,
    serializeJsonQuery: ()=>$n,
    skip: ()=>Mn,
    sqltag: ()=>io,
    warnEnvConflicts: ()=>hu,
    warnOnce: ()=>at
});
module.exports = vu(jf);
var ni = {};
tr(ni, {
    defineExtension: ()=>ko,
    getExtensionContext: ()=>_o
});
function ko(e) {
    return typeof e == "function" ? e : (r)=>r.$extends(e);
}
function _o(e) {
    return e;
}
var ii = {};
tr(ii, {
    validator: ()=>No
});
function No(...e) {
    return (r)=>r;
}
var Bt = {};
tr(Bt, {
    $: ()=>qo,
    bgBlack: ()=>ku,
    bgBlue: ()=>Fu,
    bgCyan: ()=>$u,
    bgGreen: ()=>Nu,
    bgMagenta: ()=>Mu,
    bgRed: ()=>_u,
    bgWhite: ()=>qu,
    bgYellow: ()=>Lu,
    black: ()=>Cu,
    blue: ()=>nr,
    bold: ()=>W,
    cyan: ()=>De,
    dim: ()=>Ce,
    gray: ()=>Hr,
    green: ()=>qe,
    grey: ()=>Ou,
    hidden: ()=>Ru,
    inverse: ()=>Su,
    italic: ()=>Tu,
    magenta: ()=>Iu,
    red: ()=>ce,
    reset: ()=>Pu,
    strikethrough: ()=>Au,
    underline: ()=>Y,
    white: ()=>Du,
    yellow: ()=>Ie
});
var oi, Lo, Fo, Mo, $o = !0;
typeof process < "u" && ({ FORCE_COLOR: oi, NODE_DISABLE_COLORS: Lo, NO_COLOR: Fo, TERM: Mo } = process.env || {}, $o = process.stdout && process.stdout.isTTY);
var qo = {
    enabled: !Lo && Fo == null && Mo !== "dumb" && (oi != null && oi !== "0" || $o)
};
function F(e, r) {
    let t = new RegExp(`\\x1b\\[${r}m`, "g"), n = `\x1B[${e}m`, i = `\x1B[${r}m`;
    return function(o) {
        return !qo.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(t, i + n) : o) + i;
    };
}
var Pu = F(0, 0), W = F(1, 22), Ce = F(2, 22), Tu = F(3, 23), Y = F(4, 24), Su = F(7, 27), Ru = F(8, 28), Au = F(9, 29), Cu = F(30, 39), ce = F(31, 39), qe = F(32, 39), Ie = F(33, 39), nr = F(34, 39), Iu = F(35, 39), De = F(36, 39), Du = F(37, 39), Hr = F(90, 39), Ou = F(90, 39), ku = F(40, 49), _u = F(41, 49), Nu = F(42, 49), Lu = F(43, 49), Fu = F(44, 49), Mu = F(45, 49), $u = F(46, 49), qu = F(47, 49);
var Vu = 100, Vo = [
    "green",
    "yellow",
    "blue",
    "magenta",
    "cyan",
    "red"
], Yr = [], jo = Date.now(), ju = 0, si = typeof process < "u" ? process.env : {};
globalThis.DEBUG ??= si.DEBUG ?? "";
globalThis.DEBUG_COLORS ??= si.DEBUG_COLORS ? si.DEBUG_COLORS === "true" : !0;
var zr = {
    enable (e) {
        typeof e == "string" && (globalThis.DEBUG = e);
    },
    disable () {
        let e = globalThis.DEBUG;
        return globalThis.DEBUG = "", e;
    },
    enabled (e) {
        let r = globalThis.DEBUG.split(",").map((i)=>i.replace(/[.+?^${}()|[\]\\]/g, "\\$&")), t = r.some((i)=>i === "" || i[0] === "-" ? !1 : e.match(RegExp(i.split("*").join(".*") + "$"))), n = r.some((i)=>i === "" || i[0] !== "-" ? !1 : e.match(RegExp(i.slice(1).split("*").join(".*") + "$")));
        return t && !n;
    },
    log: (...e)=>{
        let [r, t, ...n] = e;
        (console.warn ?? console.log)(`${r} ${t}`, ...n);
    },
    formatters: {}
};
function Bu(e) {
    let r = {
        color: Vo[ju++ % Vo.length],
        enabled: zr.enabled(e),
        namespace: e,
        log: zr.log,
        extend: ()=>{}
    }, t = (...n)=>{
        let { enabled: i, namespace: o, color: s, log: a } = r;
        if (n.length !== 0 && Yr.push([
            o,
            ...n
        ]), Yr.length > Vu && Yr.shift(), zr.enabled(o) || i) {
            let l = n.map((c)=>typeof c == "string" ? c : Uu(c)), u = `+${Date.now() - jo}ms`;
            jo = Date.now(), globalThis.DEBUG_COLORS ? a(Bt[s](W(o)), ...l, Bt[s](u)) : a(o, ...l, u);
        }
    };
    return new Proxy(t, {
        get: (n, i)=>r[i],
        set: (n, i, o)=>r[i] = o
    });
}
var N = new Proxy(Bu, {
    get: (e, r)=>zr[r],
    set: (e, r, t)=>zr[r] = t
});
function Uu(e, r = 2) {
    let t = new Set;
    return JSON.stringify(e, (n, i)=>{
        if (typeof i == "object" && i !== null) {
            if (t.has(i)) return "[Circular *]";
            t.add(i);
        } else if (typeof i == "bigint") return i.toString();
        return i;
    }, r);
}
function Bo(e = 7500) {
    let r = Yr.map(([t, ...n])=>`${t} ${n.map((i)=>typeof i == "string" ? i : JSON.stringify(i)).join(" ")}`).join(`
`);
    return r.length < e ? r : r.slice(-e);
}
function Uo() {
    Yr.length = 0;
}
var gr = N;
var Go = O(__turbopack_context__.r("[externals]/node:fs [external] (node:fs, cjs)"));
function ai() {
    let e = process.env.PRISMA_QUERY_ENGINE_LIBRARY;
    if (!(e && Go.default.existsSync(e)) && process.arch === "ia32") //TURBOPACK unreachable
    ;
}
var li = [
    "darwin",
    "darwin-arm64",
    "debian-openssl-1.0.x",
    "debian-openssl-1.1.x",
    "debian-openssl-3.0.x",
    "rhel-openssl-1.0.x",
    "rhel-openssl-1.1.x",
    "rhel-openssl-3.0.x",
    "linux-arm64-openssl-1.1.x",
    "linux-arm64-openssl-1.0.x",
    "linux-arm64-openssl-3.0.x",
    "linux-arm-openssl-1.1.x",
    "linux-arm-openssl-1.0.x",
    "linux-arm-openssl-3.0.x",
    "linux-musl",
    "linux-musl-openssl-3.0.x",
    "linux-musl-arm64-openssl-1.1.x",
    "linux-musl-arm64-openssl-3.0.x",
    "linux-nixos",
    "linux-static-x64",
    "linux-static-arm64",
    "windows",
    "freebsd11",
    "freebsd12",
    "freebsd13",
    "freebsd14",
    "freebsd15",
    "openbsd",
    "netbsd",
    "arm"
];
var Ut = "libquery_engine";
function Gt(e, r) {
    let t = r === "url";
    return e.includes("windows") ? t ? "query_engine.dll.node" : `query_engine-${e}.dll.node` : e.includes("darwin") ? t ? `${Ut}.dylib.node` : `${Ut}-${e}.dylib.node` : t ? `${Ut}.so.node` : `${Ut}-${e}.so.node`;
}
var Ko = O(__turbopack_context__.r("[externals]/node:child_process [external] (node:child_process, cjs)")), mi = O(__turbopack_context__.r("[externals]/node:fs/promises [external] (node:fs/promises, cjs)")), Ht = O(__turbopack_context__.r("[externals]/node:os [external] (node:os, cjs)"));
var Oe = Symbol.for("@ts-pattern/matcher"), Gu = Symbol.for("@ts-pattern/isVariadic"), Wt = "@ts-pattern/anonymous-select-key", ui = (e)=>!!(e && typeof e == "object"), Qt = (e)=>e && !!e[Oe], Ee = (e, r, t)=>{
    if (Qt(e)) {
        let n = e[Oe](), { matched: i, selections: o } = n.match(r);
        return i && o && Object.keys(o).forEach((s)=>t(s, o[s])), i;
    }
    if (ui(e)) {
        if (!ui(r)) return !1;
        if (Array.isArray(e)) {
            if (!Array.isArray(r)) return !1;
            let n = [], i = [], o = [];
            for (let s of e.keys()){
                let a = e[s];
                Qt(a) && a[Gu] ? o.push(a) : o.length ? i.push(a) : n.push(a);
            }
            if (o.length) {
                if (o.length > 1) throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                if (r.length < n.length + i.length) return !1;
                let s = r.slice(0, n.length), a = i.length === 0 ? [] : r.slice(-i.length), l = r.slice(n.length, i.length === 0 ? 1 / 0 : -i.length);
                return n.every((u, c)=>Ee(u, s[c], t)) && i.every((u, c)=>Ee(u, a[c], t)) && (o.length === 0 || Ee(o[0], l, t));
            }
            return e.length === r.length && e.every((s, a)=>Ee(s, r[a], t));
        }
        return Reflect.ownKeys(e).every((n)=>{
            let i = e[n];
            return (n in r || Qt(o = i) && o[Oe]().matcherType === "optional") && Ee(i, r[n], t);
            //TURBOPACK unreachable
            ;
            var o;
        });
    }
    return Object.is(r, e);
}, Ge = (e)=>{
    var r, t, n;
    return ui(e) ? Qt(e) ? (r = (t = (n = e[Oe]()).getSelectionKeys) == null ? void 0 : t.call(n)) != null ? r : [] : Array.isArray(e) ? Zr(e, Ge) : Zr(Object.values(e), Ge) : [];
}, Zr = (e, r)=>e.reduce((t, n)=>t.concat(r(n)), []);
function pe(e) {
    return Object.assign(e, {
        optional: ()=>Qu(e),
        and: (r)=>q(e, r),
        or: (r)=>Wu(e, r),
        select: (r)=>r === void 0 ? Qo(e) : Qo(r, e)
    });
}
function Qu(e) {
    return pe({
        [Oe]: ()=>({
                match: (r)=>{
                    let t = {}, n = (i, o)=>{
                        t[i] = o;
                    };
                    return r === void 0 ? (Ge(e).forEach((i)=>n(i, void 0)), {
                        matched: !0,
                        selections: t
                    }) : {
                        matched: Ee(e, r, n),
                        selections: t
                    };
                },
                getSelectionKeys: ()=>Ge(e),
                matcherType: "optional"
            })
    });
}
function q(...e) {
    return pe({
        [Oe]: ()=>({
                match: (r)=>{
                    let t = {}, n = (i, o)=>{
                        t[i] = o;
                    };
                    return {
                        matched: e.every((i)=>Ee(i, r, n)),
                        selections: t
                    };
                },
                getSelectionKeys: ()=>Zr(e, Ge),
                matcherType: "and"
            })
    });
}
function Wu(...e) {
    return pe({
        [Oe]: ()=>({
                match: (r)=>{
                    let t = {}, n = (i, o)=>{
                        t[i] = o;
                    };
                    return Zr(e, Ge).forEach((i)=>n(i, void 0)), {
                        matched: e.some((i)=>Ee(i, r, n)),
                        selections: t
                    };
                },
                getSelectionKeys: ()=>Zr(e, Ge),
                matcherType: "or"
            })
    });
}
function A(e) {
    return {
        [Oe]: ()=>({
                match: (r)=>({
                        matched: !!e(r)
                    })
            })
    };
}
function Qo(...e) {
    let r = typeof e[0] == "string" ? e[0] : void 0, t = e.length === 2 ? e[1] : typeof e[0] == "string" ? void 0 : e[0];
    return pe({
        [Oe]: ()=>({
                match: (n)=>{
                    let i = {
                        [r ?? Wt]: n
                    };
                    return {
                        matched: t === void 0 || Ee(t, n, (o, s)=>{
                            i[o] = s;
                        }),
                        selections: i
                    };
                },
                getSelectionKeys: ()=>[
                        r ?? Wt
                    ].concat(t === void 0 ? [] : Ge(t))
            })
    });
}
function ye(e) {
    return typeof e == "number";
}
function Ve(e) {
    return typeof e == "string";
}
function je(e) {
    return typeof e == "bigint";
}
var eg = pe(A(function(e) {
    return !0;
}));
var Be = (e)=>Object.assign(pe(e), {
        startsWith: (r)=>{
            return Be(q(e, (t = r, A((n)=>Ve(n) && n.startsWith(t)))));
            //TURBOPACK unreachable
            ;
            var t;
        },
        endsWith: (r)=>{
            return Be(q(e, (t = r, A((n)=>Ve(n) && n.endsWith(t)))));
            //TURBOPACK unreachable
            ;
            var t;
        },
        minLength: (r)=>Be(q(e, ((t)=>A((n)=>Ve(n) && n.length >= t))(r))),
        length: (r)=>Be(q(e, ((t)=>A((n)=>Ve(n) && n.length === t))(r))),
        maxLength: (r)=>Be(q(e, ((t)=>A((n)=>Ve(n) && n.length <= t))(r))),
        includes: (r)=>{
            return Be(q(e, (t = r, A((n)=>Ve(n) && n.includes(t)))));
            //TURBOPACK unreachable
            ;
            var t;
        },
        regex: (r)=>{
            return Be(q(e, (t = r, A((n)=>Ve(n) && !!n.match(t)))));
            //TURBOPACK unreachable
            ;
            var t;
        }
    }), rg = Be(A(Ve)), be = (e)=>Object.assign(pe(e), {
        between: (r, t)=>be(q(e, ((n, i)=>A((o)=>ye(o) && n <= o && i >= o))(r, t))),
        lt: (r)=>be(q(e, ((t)=>A((n)=>ye(n) && n < t))(r))),
        gt: (r)=>be(q(e, ((t)=>A((n)=>ye(n) && n > t))(r))),
        lte: (r)=>be(q(e, ((t)=>A((n)=>ye(n) && n <= t))(r))),
        gte: (r)=>be(q(e, ((t)=>A((n)=>ye(n) && n >= t))(r))),
        int: ()=>be(q(e, A((r)=>ye(r) && Number.isInteger(r)))),
        finite: ()=>be(q(e, A((r)=>ye(r) && Number.isFinite(r)))),
        positive: ()=>be(q(e, A((r)=>ye(r) && r > 0))),
        negative: ()=>be(q(e, A((r)=>ye(r) && r < 0)))
    }), tg = be(A(ye)), Ue = (e)=>Object.assign(pe(e), {
        between: (r, t)=>Ue(q(e, ((n, i)=>A((o)=>je(o) && n <= o && i >= o))(r, t))),
        lt: (r)=>Ue(q(e, ((t)=>A((n)=>je(n) && n < t))(r))),
        gt: (r)=>Ue(q(e, ((t)=>A((n)=>je(n) && n > t))(r))),
        lte: (r)=>Ue(q(e, ((t)=>A((n)=>je(n) && n <= t))(r))),
        gte: (r)=>Ue(q(e, ((t)=>A((n)=>je(n) && n >= t))(r))),
        positive: ()=>Ue(q(e, A((r)=>je(r) && r > 0))),
        negative: ()=>Ue(q(e, A((r)=>je(r) && r < 0)))
    }), ng = Ue(A(je)), ig = pe(A(function(e) {
    return typeof e == "boolean";
})), og = pe(A(function(e) {
    return typeof e == "symbol";
})), sg = pe(A(function(e) {
    return e == null;
})), ag = pe(A(function(e) {
    return e != null;
}));
var ci = class extends Error {
    constructor(r){
        let t;
        try {
            t = JSON.stringify(r);
        } catch  {
            t = r;
        }
        super(`Pattern matching error: no pattern matches value ${t}`), this.input = void 0, this.input = r;
    }
}, pi = {
    matched: !1,
    value: void 0
};
function hr(e) {
    return new di(e, pi);
}
var di = class e {
    constructor(r, t){
        this.input = void 0, this.state = void 0, this.input = r, this.state = t;
    }
    with(...r) {
        if (this.state.matched) return this;
        let t = r[r.length - 1], n = [
            r[0]
        ], i;
        r.length === 3 && typeof r[1] == "function" ? i = r[1] : r.length > 2 && n.push(...r.slice(1, r.length - 1));
        let o = !1, s = {}, a = (u, c)=>{
            o = !0, s[u] = c;
        }, l = !n.some((u)=>Ee(u, this.input, a)) || i && !i(this.input) ? pi : {
            matched: !0,
            value: t(o ? Wt in s ? s[Wt] : s : this.input, this.input)
        };
        return new e(this.input, l);
    }
    when(r, t) {
        if (this.state.matched) return this;
        let n = !!r(this.input);
        return new e(this.input, n ? {
            matched: !0,
            value: t(this.input, this.input)
        } : pi);
    }
    otherwise(r) {
        return this.state.matched ? this.state.value : r(this.input);
    }
    exhaustive() {
        if (this.state.matched) return this.state.value;
        throw new ci(this.input);
    }
    run() {
        return this.exhaustive();
    }
    returnType() {
        return this;
    }
};
var Ho = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)");
var Ju = {
    warn: Ie("prisma:warn")
}, Ku = {
    warn: ()=>!process.env.PRISMA_DISABLE_WARNINGS
};
function Jt(e, ...r) {
    Ku.warn() && console.warn(`${Ju.warn} ${e}`, ...r);
}
var Hu = (0, Ho.promisify)(Ko.default.exec), ee = gr("prisma:get-platform"), Yu = [
    "1.0.x",
    "1.1.x",
    "3.0.x"
];
async function Yo() {
    let e = Ht.default.platform(), r = process.arch;
    if (e === "freebsd") {
        let s = await Yt("freebsd-version");
        if (s && s.trim().length > 0) {
            let l = /^(\d+)\.?/.exec(s);
            if (l) return {
                platform: "freebsd",
                targetDistro: `freebsd${l[1]}`,
                arch: r
            };
        }
    }
    if (e !== "linux") return {
        platform: e,
        arch: r
    };
    let t = await Zu(), n = await sc(), i = ec({
        arch: r,
        archFromUname: n,
        familyDistro: t.familyDistro
    }), { libssl: o } = await rc(i);
    return {
        platform: "linux",
        libssl: o,
        arch: r,
        archFromUname: n,
        ...t
    };
}
function zu(e) {
    let r = /^ID="?([^"\n]*)"?$/im, t = /^ID_LIKE="?([^"\n]*)"?$/im, n = r.exec(e), i = n && n[1] && n[1].toLowerCase() || "", o = t.exec(e), s = o && o[1] && o[1].toLowerCase() || "", a = hr({
        id: i,
        idLike: s
    }).with({
        id: "alpine"
    }, ({ id: l })=>({
            targetDistro: "musl",
            familyDistro: l,
            originalDistro: l
        })).with({
        id: "raspbian"
    }, ({ id: l })=>({
            targetDistro: "arm",
            familyDistro: "debian",
            originalDistro: l
        })).with({
        id: "nixos"
    }, ({ id: l })=>({
            targetDistro: "nixos",
            originalDistro: l,
            familyDistro: "nixos"
        })).with({
        id: "debian"
    }, {
        id: "ubuntu"
    }, ({ id: l })=>({
            targetDistro: "debian",
            familyDistro: "debian",
            originalDistro: l
        })).with({
        id: "rhel"
    }, {
        id: "centos"
    }, {
        id: "fedora"
    }, ({ id: l })=>({
            targetDistro: "rhel",
            familyDistro: "rhel",
            originalDistro: l
        })).when(({ idLike: l })=>l.includes("debian") || l.includes("ubuntu"), ({ id: l })=>({
            targetDistro: "debian",
            familyDistro: "debian",
            originalDistro: l
        })).when(({ idLike: l })=>i === "arch" || l.includes("arch"), ({ id: l })=>({
            targetDistro: "debian",
            familyDistro: "arch",
            originalDistro: l
        })).when(({ idLike: l })=>l.includes("centos") || l.includes("fedora") || l.includes("rhel") || l.includes("suse"), ({ id: l })=>({
            targetDistro: "rhel",
            familyDistro: "rhel",
            originalDistro: l
        })).otherwise(({ id: l })=>({
            targetDistro: void 0,
            familyDistro: void 0,
            originalDistro: l
        }));
    return ee(`Found distro info:
${JSON.stringify(a, null, 2)}`), a;
}
async function Zu() {
    let e = "/etc/os-release";
    try {
        let r = await mi.default.readFile(e, {
            encoding: "utf-8"
        });
        return zu(r);
    } catch  {
        return {
            targetDistro: void 0,
            familyDistro: void 0,
            originalDistro: void 0
        };
    }
}
function Xu(e) {
    let r = /^OpenSSL\s(\d+\.\d+)\.\d+/.exec(e);
    if (r) {
        let t = `${r[1]}.x`;
        return zo(t);
    }
}
function Wo(e) {
    let r = /libssl\.so\.(\d)(\.\d)?/.exec(e);
    if (r) {
        let t = `${r[1]}${r[2] ?? ".0"}.x`;
        return zo(t);
    }
}
function zo(e) {
    let r = (()=>{
        if (Xo(e)) return e;
        let t = e.split(".");
        return t[1] = "0", t.join(".");
    })();
    if (Yu.includes(r)) return r;
}
function ec(e) {
    return hr(e).with({
        familyDistro: "musl"
    }, ()=>(ee('Trying platform-specific paths for "alpine"'), [
            "/lib",
            "/usr/lib"
        ])).with({
        familyDistro: "debian"
    }, ({ archFromUname: r })=>(ee('Trying platform-specific paths for "debian" (and "ubuntu")'), [
            `/usr/lib/${r}-linux-gnu`,
            `/lib/${r}-linux-gnu`
        ])).with({
        familyDistro: "rhel"
    }, ()=>(ee('Trying platform-specific paths for "rhel"'), [
            "/lib64",
            "/usr/lib64"
        ])).otherwise(({ familyDistro: r, arch: t, archFromUname: n })=>(ee(`Don't know any platform-specific paths for "${r}" on ${t} (${n})`), []));
}
async function rc(e) {
    let r = 'grep -v "libssl.so.0"', t = await Jo(e);
    if (t) {
        ee(`Found libssl.so file using platform-specific paths: ${t}`);
        let o = Wo(t);
        if (ee(`The parsed libssl version is: ${o}`), o) return {
            libssl: o,
            strategy: "libssl-specific-path"
        };
    }
    ee('Falling back to "ldconfig" and other generic paths');
    let n = await Yt(`ldconfig -p | sed "s/.*=>s*//" | sed "s|.*/||" | grep libssl | sort | ${r}`);
    if (n || (n = await Jo([
        "/lib64",
        "/usr/lib64",
        "/lib",
        "/usr/lib"
    ])), n) {
        ee(`Found libssl.so file using "ldconfig" or other generic paths: ${n}`);
        let o = Wo(n);
        if (ee(`The parsed libssl version is: ${o}`), o) return {
            libssl: o,
            strategy: "ldconfig"
        };
    }
    let i = await Yt("openssl version -v");
    if (i) {
        ee(`Found openssl binary with version: ${i}`);
        let o = Xu(i);
        if (ee(`The parsed openssl version is: ${o}`), o) return {
            libssl: o,
            strategy: "openssl-binary"
        };
    }
    return ee("Couldn't find any version of libssl or OpenSSL in the system"), {};
}
async function Jo(e) {
    for (let r of e){
        let t = await tc(r);
        if (t) return t;
    }
}
async function tc(e) {
    try {
        return (await mi.default.readdir(e)).find((t)=>t.startsWith("libssl.so.") && !t.startsWith("libssl.so.0"));
    } catch (r) {
        if (r.code === "ENOENT") return;
        throw r;
    }
}
async function ir() {
    let { binaryTarget: e } = await Zo();
    return e;
}
function nc(e) {
    return e.binaryTarget !== void 0;
}
async function fi() {
    let { memoized: e, ...r } = await Zo();
    return r;
}
var Kt = {};
async function Zo() {
    if (nc(Kt)) return Promise.resolve({
        ...Kt,
        memoized: !0
    });
    let e = await Yo(), r = ic(e);
    return Kt = {
        ...e,
        binaryTarget: r
    }, {
        ...Kt,
        memoized: !1
    };
}
function ic(e) {
    let { platform: r, arch: t, archFromUname: n, libssl: i, targetDistro: o, familyDistro: s, originalDistro: a } = e;
    r === "linux" && ![
        "x64",
        "arm64"
    ].includes(t) && Jt(`Prisma only officially supports Linux on amd64 (x86_64) and arm64 (aarch64) system architectures (detected "${t}" instead). If you are using your own custom Prisma engines, you can ignore this warning, as long as you've compiled the engines for your system architecture "${n}".`);
    let l = "1.1.x";
    if (r === "linux" && i === void 0) {
        let c = hr({
            familyDistro: s
        }).with({
            familyDistro: "debian"
        }, ()=>"Please manually install OpenSSL via `apt-get update -y && apt-get install -y openssl` and try installing Prisma again. If you're running Prisma on Docker, add this command to your Dockerfile, or switch to an image that already has OpenSSL installed.").otherwise(()=>"Please manually install OpenSSL and try installing Prisma again.");
        Jt(`Prisma failed to detect the libssl/openssl version to use, and may not work as expected. Defaulting to "openssl-${l}".
${c}`);
    }
    let u = "debian";
    if (r === "linux" && o === void 0 && ee(`Distro is "${a}". Falling back to Prisma engines built for "${u}".`), r === "darwin" && t === "arm64") return "darwin-arm64";
    if (r === "darwin") return "darwin";
    if (r === "win32") return "windows";
    if (r === "freebsd") return o;
    if (r === "openbsd") return "openbsd";
    if (r === "netbsd") return "netbsd";
    if (r === "linux" && o === "nixos") return "linux-nixos";
    if (r === "linux" && t === "arm64") return `${o === "musl" ? "linux-musl-arm64" : "linux-arm64"}-openssl-${i || l}`;
    if (r === "linux" && t === "arm") return `linux-arm-openssl-${i || l}`;
    if (r === "linux" && o === "musl") {
        let c = "linux-musl";
        return !i || Xo(i) ? c : `${c}-openssl-${i}`;
    }
    return r === "linux" && o && i ? `${o}-openssl-${i}` : (r !== "linux" && Jt(`Prisma detected unknown OS "${r}" and may not work as expected. Defaulting to "linux".`), i ? `${u}-openssl-${i}` : o ? `${o}-openssl-${l}` : `${u}-openssl-${l}`);
}
async function oc(e) {
    try {
        return await e();
    } catch  {
        return;
    }
}
function Yt(e) {
    return oc(async ()=>{
        let r = await Hu(e);
        return ee(`Command "${e}" successfully returned "${r.stdout}"`), r.stdout;
    });
}
async function sc() {
    return typeof Ht.default.machine == "function" ? Ht.default.machine() : (await Yt("uname -m"))?.trim();
}
function Xo(e) {
    return e.startsWith("1.");
}
var Xt = {};
tr(Xt, {
    beep: ()=>kc,
    clearScreen: ()=>Cc,
    clearTerminal: ()=>Ic,
    cursorBackward: ()=>mc,
    cursorDown: ()=>pc,
    cursorForward: ()=>dc,
    cursorGetPosition: ()=>hc,
    cursorHide: ()=>Ec,
    cursorLeft: ()=>ts,
    cursorMove: ()=>cc,
    cursorNextLine: ()=>yc,
    cursorPrevLine: ()=>bc,
    cursorRestorePosition: ()=>gc,
    cursorSavePosition: ()=>fc,
    cursorShow: ()=>wc,
    cursorTo: ()=>uc,
    cursorUp: ()=>rs,
    enterAlternativeScreen: ()=>Dc,
    eraseDown: ()=>Tc,
    eraseEndLine: ()=>vc,
    eraseLine: ()=>ns,
    eraseLines: ()=>xc,
    eraseScreen: ()=>gi,
    eraseStartLine: ()=>Pc,
    eraseUp: ()=>Sc,
    exitAlternativeScreen: ()=>Oc,
    iTerm: ()=>Lc,
    image: ()=>Nc,
    link: ()=>_c,
    scrollDown: ()=>Ac,
    scrollUp: ()=>Rc
});
var Zt = O(__turbopack_context__.r("[externals]/node:process [external] (node:process, cjs)"), 1);
var zt = globalThis.window?.document !== void 0, gg = globalThis.process?.versions?.node !== void 0, hg = globalThis.process?.versions?.bun !== void 0, yg = globalThis.Deno?.version?.deno !== void 0, bg = globalThis.process?.versions?.electron !== void 0, Eg = globalThis.navigator?.userAgent?.includes("jsdom") === !0, wg = typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope, xg = typeof DedicatedWorkerGlobalScope < "u" && globalThis instanceof DedicatedWorkerGlobalScope, vg = typeof SharedWorkerGlobalScope < "u" && globalThis instanceof SharedWorkerGlobalScope, Pg = typeof ServiceWorkerGlobalScope < "u" && globalThis instanceof ServiceWorkerGlobalScope, Xr = globalThis.navigator?.userAgentData?.platform, Tg = Xr === "macOS" || globalThis.navigator?.platform === "MacIntel" || globalThis.navigator?.userAgent?.includes(" Mac ") === !0 || globalThis.process?.platform === "darwin", Sg = Xr === "Windows" || globalThis.navigator?.platform === "Win32" || globalThis.process?.platform === "win32", Rg = Xr === "Linux" || globalThis.navigator?.platform?.startsWith("Linux") === !0 || globalThis.navigator?.userAgent?.includes(" Linux ") === !0 || globalThis.process?.platform === "linux", Ag = Xr === "iOS" || globalThis.navigator?.platform === "MacIntel" && globalThis.navigator?.maxTouchPoints > 1 || /iPad|iPhone|iPod/.test(globalThis.navigator?.platform), Cg = Xr === "Android" || globalThis.navigator?.platform === "Android" || globalThis.navigator?.userAgent?.includes(" Android ") === !0 || globalThis.process?.platform === "android";
var C = "\x1B[", rt = "\x1B]", yr = "\x07", et = ";", es = !zt && Zt.default.env.TERM_PROGRAM === "Apple_Terminal", ac = !zt && Zt.default.platform === "win32", lc = zt ? ()=>{
    throw new Error("`process.cwd()` only works in Node.js, not the browser.");
} : Zt.default.cwd, uc = (e, r)=>{
    if (typeof e != "number") throw new TypeError("The `x` argument is required");
    return typeof r != "number" ? C + (e + 1) + "G" : C + (r + 1) + et + (e + 1) + "H";
}, cc = (e, r)=>{
    if (typeof e != "number") throw new TypeError("The `x` argument is required");
    let t = "";
    return e < 0 ? t += C + -e + "D" : e > 0 && (t += C + e + "C"), r < 0 ? t += C + -r + "A" : r > 0 && (t += C + r + "B"), t;
}, rs = (e = 1)=>C + e + "A", pc = (e = 1)=>C + e + "B", dc = (e = 1)=>C + e + "C", mc = (e = 1)=>C + e + "D", ts = C + "G", fc = es ? "\x1B7" : C + "s", gc = es ? "\x1B8" : C + "u", hc = C + "6n", yc = C + "E", bc = C + "F", Ec = C + "?25l", wc = C + "?25h", xc = (e)=>{
    let r = "";
    for(let t = 0; t < e; t++)r += ns + (t < e - 1 ? rs() : "");
    return e && (r += ts), r;
}, vc = C + "K", Pc = C + "1K", ns = C + "2K", Tc = C + "J", Sc = C + "1J", gi = C + "2J", Rc = C + "S", Ac = C + "T", Cc = "\x1Bc", Ic = ac ? `${gi}${C}0f` : `${gi}${C}3J${C}H`, Dc = C + "?1049h", Oc = C + "?1049l", kc = yr, _c = (e, r)=>[
        rt,
        "8",
        et,
        et,
        r,
        yr,
        e,
        rt,
        "8",
        et,
        et,
        yr
    ].join(""), Nc = (e, r = {})=>{
    let t = `${rt}1337;File=inline=1`;
    return r.width && (t += `;width=${r.width}`), r.height && (t += `;height=${r.height}`), r.preserveAspectRatio === !1 && (t += ";preserveAspectRatio=0"), t + ":" + Buffer.from(e).toString("base64") + yr;
}, Lc = {
    setCwd: (e = lc())=>`${rt}50;CurrentDir=${e}${yr}`,
    annotation (e, r = {}) {
        let t = `${rt}1337;`, n = r.x !== void 0, i = r.y !== void 0;
        if ((n || i) && !(n && i && r.length !== void 0)) throw new Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");
        return e = e.replaceAll("|", ""), t += r.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation=", r.length > 0 ? t += (n ? [
            e,
            r.length,
            r.x,
            r.y
        ] : [
            r.length,
            e
        ]).join("|") : t += e, t + yr;
    }
};
var en = O(cs(), 1);
function or(e, r, { target: t = "stdout", ...n } = {}) {
    return en.default[t] ? Xt.link(e, r) : n.fallback === !1 ? e : typeof n.fallback == "function" ? n.fallback(e, r) : `${e} (\u200B${r}\u200B)`;
}
or.isSupported = en.default.stdout;
or.stderr = (e, r, t = {})=>or(e, r, {
        target: "stderr",
        ...t
    });
or.stderr.isSupported = en.default.stderr;
function wi(e) {
    return or(e, e, {
        fallback: Y
    });
}
var Vc = ps(), xi = Vc.version;
function Er(e) {
    let r = jc();
    return r || (e?.config.engineType === "library" ? "library" : e?.config.engineType === "binary" ? "binary" : e?.config.engineType === "client" ? "client" : Bc());
}
function jc() {
    let e = process.env.PRISMA_CLIENT_ENGINE_TYPE;
    return e === "library" ? "library" : e === "binary" ? "binary" : e === "client" ? "client" : void 0;
}
function Bc() {
    return "library";
}
function vi(e) {
    return e.name === "DriverAdapterError" && typeof e.cause == "object";
}
function rn(e) {
    return {
        ok: !0,
        value: e,
        map (r) {
            return rn(r(e));
        },
        flatMap (r) {
            return r(e);
        }
    };
}
function sr(e) {
    return {
        ok: !1,
        error: e,
        map () {
            return sr(e);
        },
        flatMap () {
            return sr(e);
        }
    };
}
var ds = N("driver-adapter-utils"), Pi = class {
    registeredErrors = [];
    consumeError(r) {
        return this.registeredErrors[r];
    }
    registerNewError(r) {
        let t = 0;
        for(; this.registeredErrors[t] !== void 0;)t++;
        return this.registeredErrors[t] = {
            error: r
        }, t;
    }
};
var tn = (e, r = new Pi)=>{
    let t = {
        adapterName: e.adapterName,
        errorRegistry: r,
        queryRaw: ke(r, e.queryRaw.bind(e)),
        executeRaw: ke(r, e.executeRaw.bind(e)),
        executeScript: ke(r, e.executeScript.bind(e)),
        dispose: ke(r, e.dispose.bind(e)),
        provider: e.provider,
        startTransaction: async (...n)=>(await ke(r, e.startTransaction.bind(e))(...n)).map((o)=>Uc(r, o))
    };
    return e.getConnectionInfo && (t.getConnectionInfo = Gc(r, e.getConnectionInfo.bind(e))), t;
}, Uc = (e, r)=>({
        adapterName: r.adapterName,
        provider: r.provider,
        options: r.options,
        queryRaw: ke(e, r.queryRaw.bind(r)),
        executeRaw: ke(e, r.executeRaw.bind(r)),
        commit: ke(e, r.commit.bind(r)),
        rollback: ke(e, r.rollback.bind(r))
    });
function ke(e, r) {
    return async (...t)=>{
        try {
            return rn(await r(...t));
        } catch (n) {
            if (ds("[error@wrapAsync]", n), vi(n)) return sr(n.cause);
            let i = e.registerNewError(n);
            return sr({
                kind: "GenericJs",
                id: i
            });
        }
    };
}
function Gc(e, r) {
    return (...t)=>{
        try {
            return rn(r(...t));
        } catch (n) {
            if (ds("[error@wrapSync]", n), vi(n)) return sr(n.cause);
            let i = e.registerNewError(n);
            return sr({
                kind: "GenericJs",
                id: i
            });
        }
    };
}
var Wc = O(on());
var M = O(__turbopack_context__.r("[externals]/node:path [external] (node:path, cjs)")), Jc = O(on()), wh = N("prisma:engines");
function ms() {
    return M.default.join(("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/runtime"), "../");
}
var xh = "libquery-engine";
M.default.join(("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/runtime"), "../query-engine-darwin");
M.default.join(("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/runtime"), "../query-engine-darwin-arm64");
M.default.join(("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/runtime"), "../query-engine-debian-openssl-1.0.x");
M.default.join(("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/runtime"), "../query-engine-debian-openssl-1.1.x");
M.default.join(("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/runtime"), "../query-engine-debian-openssl-3.0.x");
M.default.join(("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/runtime"), "../query-engine-linux-static-x64");
M.default.join(("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/runtime"), "../query-engine-linux-static-arm64");
M.default.join(("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/runtime"), "../query-engine-rhel-openssl-1.0.x");
M.default.join(("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/runtime"), "../query-engine-rhel-openssl-1.1.x");
M.default.join(("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/runtime"), "../query-engine-rhel-openssl-3.0.x");
M.default.join(("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/runtime"), "../libquery_engine-darwin.dylib.node");
M.default.join(("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/runtime"), "../libquery_engine-darwin-arm64.dylib.node");
M.default.join(("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/runtime"), "../libquery_engine-debian-openssl-1.0.x.so.node");
M.default.join(("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/runtime"), "../libquery_engine-debian-openssl-1.1.x.so.node");
M.default.join(("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/runtime"), "../libquery_engine-debian-openssl-3.0.x.so.node");
M.default.join(("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/runtime"), "../libquery_engine-linux-arm64-openssl-1.0.x.so.node");
M.default.join(("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/runtime"), "../libquery_engine-linux-arm64-openssl-1.1.x.so.node");
M.default.join(("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/runtime"), "../libquery_engine-linux-arm64-openssl-3.0.x.so.node");
M.default.join(("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/runtime"), "../libquery_engine-linux-musl.so.node");
M.default.join(("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/runtime"), "../libquery_engine-linux-musl-openssl-3.0.x.so.node");
M.default.join(("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/runtime"), "../libquery_engine-rhel-openssl-1.0.x.so.node");
M.default.join(("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/runtime"), "../libquery_engine-rhel-openssl-1.1.x.so.node");
M.default.join(("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/runtime"), "../libquery_engine-rhel-openssl-3.0.x.so.node");
M.default.join(("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/runtime"), "../query_engine-windows.dll.node");
var Si = O(__turbopack_context__.r("[externals]/node:fs [external] (node:fs, cjs)")), fs = gr("chmodPlusX");
function Ri(e) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    let r, t;
    let n;
}
function Ai(e) {
    let r = e.e, t = (a)=>`Prisma cannot find the required \`${a}\` system library in your system`, n = r.message.includes("cannot open shared object file"), i = `Please refer to the documentation about Prisma's system requirements: ${wi("https://pris.ly/d/system-requirements")}`, o = `Unable to require(\`${Ce(e.id)}\`).`, s = hr({
        message: r.message,
        code: r.code
    }).with({
        code: "ENOENT"
    }, ()=>"File does not exist.").when(({ message: a })=>n && a.includes("libz"), ()=>`${t("libz")}. Please install it and try again.`).when(({ message: a })=>n && a.includes("libgcc_s"), ()=>`${t("libgcc_s")}. Please install it and try again.`).when(({ message: a })=>n && a.includes("libssl"), ()=>{
        let a = e.platformInfo.libssl ? `openssl-${e.platformInfo.libssl}` : "openssl";
        return `${t("libssl")}. Please install ${a} and try again.`;
    }).when(({ message: a })=>a.includes("GLIBC"), ()=>`Prisma has detected an incompatible version of the \`glibc\` C standard library installed in your system. This probably means your system may be too old to run Prisma. ${i}`).when(({ message: a })=>e.platformInfo.platform === "linux" && a.includes("symbol not found"), ()=>`The Prisma engines are not compatible with your system ${e.platformInfo.originalDistro} on (${e.platformInfo.archFromUname}) which uses the \`${e.platformInfo.binaryTarget}\` binaryTarget by default. ${i}`).otherwise(()=>`The Prisma engines do not seem to be compatible with your system. ${i}`);
    return `${o}
${s}

Details: ${r.message}`;
}
var ys = O(hs(), 1);
function Ci(e) {
    let r = (0, ys.default)(e);
    if (r === 0) return e;
    let t = new RegExp(`^[ \\t]{${r}}`, "gm");
    return e.replace(t, "");
}
var bs = "prisma+postgres", sn = `${bs}:`;
function an(e) {
    return e?.toString().startsWith(`${sn}//`) ?? !1;
}
function Ii(e) {
    if (!an(e)) return !1;
    let { host: r } = new URL(e);
    return r.includes("localhost") || r.includes("127.0.0.1") || r.includes("[::1]");
}
var ws = O(Di());
function ki(e) {
    return String(new Oi(e));
}
var Oi = class {
    constructor(r){
        this.config = r;
    }
    toString() {
        let { config: r } = this, t = r.provider.fromEnvVar ? `env("${r.provider.fromEnvVar}")` : r.provider.value, n = JSON.parse(JSON.stringify({
            provider: t,
            binaryTargets: Kc(r.binaryTargets)
        }));
        return `generator ${r.name} {
${(0, ws.default)(Hc(n), 2)}
}`;
    }
};
function Kc(e) {
    let r;
    if (e.length > 0) {
        let t = e.find((n)=>n.fromEnvVar !== null);
        t ? r = `env("${t.fromEnvVar}")` : r = e.map((n)=>n.native ? "native" : n.value);
    } else r = void 0;
    return r;
}
function Hc(e) {
    let r = Object.keys(e).reduce((t, n)=>Math.max(t, n.length), 0);
    return Object.entries(e).map(([t, n])=>`${t.padEnd(r)} = ${Yc(n)}`).join(`
`);
}
function Yc(e) {
    return JSON.parse(JSON.stringify(e, (r, t)=>Array.isArray(t) ? `[${t.map((n)=>JSON.stringify(n)).join(", ")}]` : JSON.stringify(t)));
}
var nt = {};
tr(nt, {
    error: ()=>Xc,
    info: ()=>Zc,
    log: ()=>zc,
    query: ()=>ep,
    should: ()=>xs,
    tags: ()=>tt,
    warn: ()=>_i
});
var tt = {
    error: ce("prisma:error"),
    warn: Ie("prisma:warn"),
    info: De("prisma:info"),
    query: nr("prisma:query")
}, xs = {
    warn: ()=>!process.env.PRISMA_DISABLE_WARNINGS
};
function zc(...e) {
    console.log(...e);
}
function _i(e, ...r) {
    xs.warn() && console.warn(`${tt.warn} ${e}`, ...r);
}
function Zc(e, ...r) {
    console.info(`${tt.info} ${e}`, ...r);
}
function Xc(e, ...r) {
    console.error(`${tt.error} ${e}`, ...r);
}
function ep(e, ...r) {
    console.log(`${tt.query} ${e}`, ...r);
}
function ln(e, r) {
    if (!e) throw new Error(`${r}. This should never happen. If you see this error, please, open an issue at https://pris.ly/prisma-prisma-bug-report`);
}
function ar(e, r) {
    throw new Error(r);
}
function Ni({ onlyFirst: e = !1 } = {}) {
    let t = [
        "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))",
        "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"
    ].join("|");
    return new RegExp(t, e ? void 0 : "g");
}
var rp = Ni();
function wr(e) {
    if (typeof e != "string") throw new TypeError(`Expected a \`string\`, got \`${typeof e}\``);
    return e.replace(rp, "");
}
var it = O(__turbopack_context__.r("[externals]/node:path [external] (node:path, cjs)"));
function Li(e) {
    return it.default.sep === it.default.posix.sep ? e : e.split(it.default.sep).join(it.default.posix.sep);
}
var qi = O(As()), un = O(__turbopack_context__.r("[externals]/node:fs [external] (node:fs, cjs)"));
var xr = O(__turbopack_context__.r("[externals]/node:path [external] (node:path, cjs)"));
function Cs(e) {
    let r = e.ignoreProcessEnv ? {} : process.env, t = (n)=>n.match(/(.?\${(?:[a-zA-Z0-9_]+)?})/g)?.reduce(function(o, s) {
            let a = /(.?)\${([a-zA-Z0-9_]+)?}/g.exec(s);
            if (!a) return o;
            let l = a[1], u, c;
            if (l === "\\") c = a[0], u = c.replace("\\$", "$");
            else {
                let p = a[2];
                c = a[0].substring(l.length), u = Object.hasOwnProperty.call(r, p) ? r[p] : e.parsed[p] || "", u = t(u);
            }
            return o.replace(c, u);
        }, n) ?? n;
    for(let n in e.parsed){
        let i = Object.hasOwnProperty.call(r, n) ? r[n] : e.parsed[n];
        e.parsed[n] = t(i);
    }
    for(let n in e.parsed)r[n] = e.parsed[n];
    return e;
}
var $i = gr("prisma:tryLoadEnv");
function st({ rootEnvPath: e, schemaEnvPath: r }, t = {
    conflictCheck: "none"
}) {
    let n = Is(e);
    t.conflictCheck !== "none" && hp(n, r, t.conflictCheck);
    let i = null;
    return Ds(n?.path, r) || (i = Is(r)), !n && !i && $i("No Environment variables loaded"), i?.dotenvResult.error ? console.error(ce(W("Schema Env Error: ")) + i.dotenvResult.error) : {
        message: [
            n?.message,
            i?.message
        ].filter(Boolean).join(`
`),
        parsed: {
            ...n?.dotenvResult?.parsed,
            ...i?.dotenvResult?.parsed
        }
    };
}
function hp(e, r, t) {
    let n = e?.dotenvResult.parsed, i = !Ds(e?.path, r);
    if (n && r && i && un.default.existsSync(r)) {
        let o = qi.default.parse(un.default.readFileSync(r)), s = [];
        for(let a in o)n[a] === o[a] && s.push(a);
        if (s.length > 0) {
            let a = xr.default.relative(process.cwd(), e.path), l = xr.default.relative(process.cwd(), r);
            if (t === "error") {
                let u = `There is a conflict between env var${s.length > 1 ? "s" : ""} in ${Y(a)} and ${Y(l)}
Conflicting env vars:
${s.map((c)=>`  ${W(c)}`).join(`
`)}

We suggest to move the contents of ${Y(l)} to ${Y(a)} to consolidate your env vars.
`;
                throw new Error(u);
            } else if (t === "warn") {
                let u = `Conflict for env var${s.length > 1 ? "s" : ""} ${s.map((c)=>W(c)).join(", ")} in ${Y(a)} and ${Y(l)}
Env vars from ${Y(l)} overwrite the ones from ${Y(a)}
      `;
                console.warn(`${Ie("warn(prisma)")} ${u}`);
            }
        }
    }
}
function Is(e) {
    if (yp(e)) {
        $i(`Environment variables loaded from ${e}`);
        let r = qi.default.config({
            path: e,
            debug: process.env.DOTENV_CONFIG_DEBUG ? !0 : void 0
        });
        return {
            dotenvResult: Cs(r),
            message: Ce(`Environment variables loaded from ${xr.default.relative(process.cwd(), e)}`),
            path: e
        };
    } else $i(`Environment variables not found at ${e}`);
    return null;
}
function Ds(e, r) {
    return e && r && xr.default.resolve(e) === xr.default.resolve(r);
}
function yp(e) {
    return !!(e && un.default.existsSync(e));
}
function Vi(e, r) {
    return Object.prototype.hasOwnProperty.call(e, r);
}
function pn(e, r) {
    let t = {};
    for (let n of Object.keys(e))t[n] = r(e[n], n);
    return t;
}
function ji(e, r) {
    if (e.length === 0) return;
    let t = e[0];
    for(let n = 1; n < e.length; n++)r(t, e[n]) < 0 && (t = e[n]);
    return t;
}
function x(e, r) {
    Object.defineProperty(e, "name", {
        value: r,
        configurable: !0
    });
}
var ks = new Set, at = (e, r, ...t)=>{
    ks.has(e) || (ks.add(e), _i(r, ...t));
};
var P = class e extends Error {
    clientVersion;
    errorCode;
    retryable;
    constructor(r, t, n){
        super(r), this.name = "PrismaClientInitializationError", this.clientVersion = t, this.errorCode = n, Error.captureStackTrace(e);
    }
    get [Symbol.toStringTag]() {
        return "PrismaClientInitializationError";
    }
};
x(P, "PrismaClientInitializationError");
var z = class extends Error {
    code;
    meta;
    clientVersion;
    batchRequestIdx;
    constructor(r, { code: t, clientVersion: n, meta: i, batchRequestIdx: o }){
        super(r), this.name = "PrismaClientKnownRequestError", this.code = t, this.clientVersion = n, this.meta = i, Object.defineProperty(this, "batchRequestIdx", {
            value: o,
            enumerable: !1,
            writable: !0
        });
    }
    get [Symbol.toStringTag]() {
        return "PrismaClientKnownRequestError";
    }
};
x(z, "PrismaClientKnownRequestError");
var ae = class extends Error {
    clientVersion;
    constructor(r, t){
        super(r), this.name = "PrismaClientRustPanicError", this.clientVersion = t;
    }
    get [Symbol.toStringTag]() {
        return "PrismaClientRustPanicError";
    }
};
x(ae, "PrismaClientRustPanicError");
var V = class extends Error {
    clientVersion;
    batchRequestIdx;
    constructor(r, { clientVersion: t, batchRequestIdx: n }){
        super(r), this.name = "PrismaClientUnknownRequestError", this.clientVersion = t, Object.defineProperty(this, "batchRequestIdx", {
            value: n,
            writable: !0,
            enumerable: !1
        });
    }
    get [Symbol.toStringTag]() {
        return "PrismaClientUnknownRequestError";
    }
};
x(V, "PrismaClientUnknownRequestError");
var Z = class extends Error {
    name = "PrismaClientValidationError";
    clientVersion;
    constructor(r, { clientVersion: t }){
        super(r), this.clientVersion = t;
    }
    get [Symbol.toStringTag]() {
        return "PrismaClientValidationError";
    }
};
x(Z, "PrismaClientValidationError");
var we = class {
    _map = new Map;
    get(r) {
        return this._map.get(r)?.value;
    }
    set(r, t) {
        this._map.set(r, {
            value: t
        });
    }
    getOrCreate(r, t) {
        let n = this._map.get(r);
        if (n) return n.value;
        let i = t();
        return this.set(r, i), i;
    }
};
function We(e) {
    return e.substring(0, 1).toLowerCase() + e.substring(1);
}
function _s(e, r) {
    let t = {};
    for (let n of e){
        let i = n[r];
        t[i] = n;
    }
    return t;
}
function lt(e) {
    let r;
    return {
        get () {
            return r || (r = {
                value: e()
            }), r.value;
        }
    };
}
function Ns(e) {
    return {
        models: Bi(e.models),
        enums: Bi(e.enums),
        types: Bi(e.types)
    };
}
function Bi(e) {
    let r = {};
    for (let { name: t, ...n } of e)r[t] = n;
    return r;
}
function vr(e) {
    return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function mn(e) {
    return e.toString() !== "Invalid Date";
}
var Pr = 9e15, Ye = 1e9, Ui = "0123456789abcdef", hn = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", yn = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Gi = {
    precision: 20,
    rounding: 4,
    modulo: 1,
    toExpNeg: -7,
    toExpPos: 21,
    minE: -Pr,
    maxE: Pr,
    crypto: !1
}, $s, Ne, w = !0, En = "[DecimalError] ", He = En + "Invalid argument: ", qs = En + "Precision limit exceeded", Vs = En + "crypto unavailable", js = "[object Decimal]", X = Math.floor, U = Math.pow, bp = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Ep = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, wp = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Bs = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, fe = 1e7, E = 7, xp = 9007199254740991, vp = hn.length - 1, Qi = yn.length - 1, m = {
    toStringTag: js
};
m.absoluteValue = m.abs = function() {
    var e = new this.constructor(this);
    return e.s < 0 && (e.s = 1), y(e);
};
m.ceil = function() {
    return y(new this.constructor(this), this.e + 1, 2);
};
m.clampedTo = m.clamp = function(e, r) {
    var t, n = this, i = n.constructor;
    if (e = new i(e), r = new i(r), !e.s || !r.s) return new i(NaN);
    if (e.gt(r)) throw Error(He + r);
    return t = n.cmp(e), t < 0 ? e : n.cmp(r) > 0 ? r : new i(n);
};
m.comparedTo = m.cmp = function(e) {
    var r, t, n, i, o = this, s = o.d, a = (e = new o.constructor(e)).d, l = o.s, u = e.s;
    if (!s || !a) return !l || !u ? NaN : l !== u ? l : s === a ? 0 : !s ^ l < 0 ? 1 : -1;
    if (!s[0] || !a[0]) return s[0] ? l : a[0] ? -u : 0;
    if (l !== u) return l;
    if (o.e !== e.e) return o.e > e.e ^ l < 0 ? 1 : -1;
    for(n = s.length, i = a.length, r = 0, t = n < i ? n : i; r < t; ++r)if (s[r] !== a[r]) return s[r] > a[r] ^ l < 0 ? 1 : -1;
    return n === i ? 0 : n > i ^ l < 0 ? 1 : -1;
};
m.cosine = m.cos = function() {
    var e, r, t = this, n = t.constructor;
    return t.d ? t.d[0] ? (e = n.precision, r = n.rounding, n.precision = e + Math.max(t.e, t.sd()) + E, n.rounding = 1, t = Pp(n, Js(n, t)), n.precision = e, n.rounding = r, y(Ne == 2 || Ne == 3 ? t.neg() : t, e, r, !0)) : new n(1) : new n(NaN);
};
m.cubeRoot = m.cbrt = function() {
    var e, r, t, n, i, o, s, a, l, u, c = this, p = c.constructor;
    if (!c.isFinite() || c.isZero()) return new p(c);
    for(w = !1, o = c.s * U(c.s * c, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (t = J(c.d), e = c.e, (o = (e - t.length + 1) % 3) && (t += o == 1 || o == -2 ? "0" : "00"), o = U(t, 1 / 3), e = X((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? t = "5e" + e : (t = o.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new p(t), n.s = c.s) : n = new p(o.toString()), s = (e = p.precision) + 3;;)if (a = n, l = a.times(a).times(a), u = l.plus(c), n = L(u.plus(c).times(a), u.plus(l), s + 2, 1), J(a.d).slice(0, s) === (t = J(n.d)).slice(0, s)) if (t = t.slice(s - 3, s + 1), t == "9999" || !i && t == "4999") {
        if (!i && (y(a, e + 1, 0), a.times(a).times(a).eq(c))) {
            n = a;
            break;
        }
        s += 4, i = 1;
    } else {
        (!+t || !+t.slice(1) && t.charAt(0) == "5") && (y(n, e + 1, 1), r = !n.times(n).times(n).eq(c));
        break;
    }
    return w = !0, y(n, e, p.rounding, r);
};
m.decimalPlaces = m.dp = function() {
    var e, r = this.d, t = NaN;
    if (r) {
        if (e = r.length - 1, t = (e - X(this.e / E)) * E, e = r[e], e) for(; e % 10 == 0; e /= 10)t--;
        t < 0 && (t = 0);
    }
    return t;
};
m.dividedBy = m.div = function(e) {
    return L(this, new this.constructor(e));
};
m.dividedToIntegerBy = m.divToInt = function(e) {
    var r = this, t = r.constructor;
    return y(L(r, new t(e), 0, 1, 1), t.precision, t.rounding);
};
m.equals = m.eq = function(e) {
    return this.cmp(e) === 0;
};
m.floor = function() {
    return y(new this.constructor(this), this.e + 1, 3);
};
m.greaterThan = m.gt = function(e) {
    return this.cmp(e) > 0;
};
m.greaterThanOrEqualTo = m.gte = function(e) {
    var r = this.cmp(e);
    return r == 1 || r === 0;
};
m.hyperbolicCosine = m.cosh = function() {
    var e, r, t, n, i, o = this, s = o.constructor, a = new s(1);
    if (!o.isFinite()) return new s(o.s ? 1 / 0 : NaN);
    if (o.isZero()) return a;
    t = s.precision, n = s.rounding, s.precision = t + Math.max(o.e, o.sd()) + 4, s.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), r = (1 / xn(4, e)).toString()) : (e = 16, r = "2.3283064365386962890625e-10"), o = Tr(s, 1, o.times(r), new s(1), !0);
    for(var l, u = e, c = new s(8); u--;)l = o.times(o), o = a.minus(l.times(c.minus(l.times(c))));
    return y(o, s.precision = t, s.rounding = n, !0);
};
m.hyperbolicSine = m.sinh = function() {
    var e, r, t, n, i = this, o = i.constructor;
    if (!i.isFinite() || i.isZero()) return new o(i);
    if (r = o.precision, t = o.rounding, o.precision = r + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3) i = Tr(o, 2, i, i, !0);
    else {
        e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / xn(5, e)), i = Tr(o, 2, i, i, !0);
        for(var s, a = new o(5), l = new o(16), u = new o(20); e--;)s = i.times(i), i = i.times(a.plus(s.times(l.times(s).plus(u))));
    }
    return o.precision = r, o.rounding = t, y(i, r, t, !0);
};
m.hyperbolicTangent = m.tanh = function() {
    var e, r, t = this, n = t.constructor;
    return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + 7, n.rounding = 1, L(t.sinh(), t.cosh(), n.precision = e, n.rounding = r)) : new n(t.s);
};
m.inverseCosine = m.acos = function() {
    var e = this, r = e.constructor, t = e.abs().cmp(1), n = r.precision, i = r.rounding;
    return t !== -1 ? t === 0 ? e.isNeg() ? xe(r, n, i) : new r(0) : new r(NaN) : e.isZero() ? xe(r, n + 4, i).times(.5) : (r.precision = n + 6, r.rounding = 1, e = new r(1).minus(e).div(e.plus(1)).sqrt().atan(), r.precision = n, r.rounding = i, e.times(2));
};
m.inverseHyperbolicCosine = m.acosh = function() {
    var e, r, t = this, n = t.constructor;
    return t.lte(1) ? new n(t.eq(1) ? 0 : NaN) : t.isFinite() ? (e = n.precision, r = n.rounding, n.precision = e + Math.max(Math.abs(t.e), t.sd()) + 4, n.rounding = 1, w = !1, t = t.times(t).minus(1).sqrt().plus(t), w = !0, n.precision = e, n.rounding = r, t.ln()) : new n(t);
};
m.inverseHyperbolicSine = m.asinh = function() {
    var e, r, t = this, n = t.constructor;
    return !t.isFinite() || t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + 2 * Math.max(Math.abs(t.e), t.sd()) + 6, n.rounding = 1, w = !1, t = t.times(t).plus(1).sqrt().plus(t), w = !0, n.precision = e, n.rounding = r, t.ln());
};
m.inverseHyperbolicTangent = m.atanh = function() {
    var e, r, t, n, i = this, o = i.constructor;
    return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, r = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? y(new o(i), e, r, !0) : (o.precision = t = n - i.e, i = L(i.plus(1), new o(1).minus(i), t + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = r, i.times(.5))) : new o(NaN);
};
m.inverseSine = m.asin = function() {
    var e, r, t, n, i = this, o = i.constructor;
    return i.isZero() ? new o(i) : (r = i.abs().cmp(1), t = o.precision, n = o.rounding, r !== -1 ? r === 0 ? (e = xe(o, t + 4, n).times(.5), e.s = i.s, e) : new o(NaN) : (o.precision = t + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = t, o.rounding = n, i.times(2)));
};
m.inverseTangent = m.atan = function() {
    var e, r, t, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding;
    if (u.isFinite()) {
        if (u.isZero()) return new c(u);
        if (u.abs().eq(1) && p + 4 <= Qi) return s = xe(c, p + 4, d).times(.25), s.s = u.s, s;
    } else {
        if (!u.s) return new c(NaN);
        if (p + 4 <= Qi) return s = xe(c, p + 4, d).times(.5), s.s = u.s, s;
    }
    for(c.precision = a = p + 10, c.rounding = 1, t = Math.min(28, a / E + 2 | 0), e = t; e; --e)u = u.div(u.times(u).plus(1).sqrt().plus(1));
    for(w = !1, r = Math.ceil(a / E), n = 1, l = u.times(u), s = new c(u), i = u; e !== -1;)if (i = i.times(l), o = s.minus(i.div(n += 2)), i = i.times(l), s = o.plus(i.div(n += 2)), s.d[r] !== void 0) for(e = r; s.d[e] === o.d[e] && e--;);
    return t && (s = s.times(2 << t - 1)), w = !0, y(s, c.precision = p, c.rounding = d, !0);
};
m.isFinite = function() {
    return !!this.d;
};
m.isInteger = m.isInt = function() {
    return !!this.d && X(this.e / E) > this.d.length - 2;
};
m.isNaN = function() {
    return !this.s;
};
m.isNegative = m.isNeg = function() {
    return this.s < 0;
};
m.isPositive = m.isPos = function() {
    return this.s > 0;
};
m.isZero = function() {
    return !!this.d && this.d[0] === 0;
};
m.lessThan = m.lt = function(e) {
    return this.cmp(e) < 0;
};
m.lessThanOrEqualTo = m.lte = function(e) {
    return this.cmp(e) < 1;
};
m.logarithm = m.log = function(e) {
    var r, t, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding, f = 5;
    if (e == null) e = new c(10), r = !0;
    else {
        if (e = new c(e), t = e.d, e.s < 0 || !t || !t[0] || e.eq(1)) return new c(NaN);
        r = e.eq(10);
    }
    if (t = u.d, u.s < 0 || !t || !t[0] || u.eq(1)) return new c(t && !t[0] ? -1 / 0 : u.s != 1 ? NaN : t ? 0 : 1 / 0);
    if (r) if (t.length > 1) o = !0;
    else {
        for(i = t[0]; i % 10 === 0;)i /= 10;
        o = i !== 1;
    }
    if (w = !1, a = p + f, s = Ke(u, a), n = r ? bn(c, a + 10) : Ke(e, a), l = L(s, n, a, 1), ut(l.d, i = p, d)) do if (a += 10, s = Ke(u, a), n = r ? bn(c, a + 10) : Ke(e, a), l = L(s, n, a, 1), !o) {
        +J(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = y(l, p + 1, 0));
        break;
    }
    while (ut(l.d, i += 10, d))
    return w = !0, y(l, p, d);
};
m.minus = m.sub = function(e) {
    var r, t, n, i, o, s, a, l, u, c, p, d, f = this, h = f.constructor;
    if (e = new h(e), !f.d || !e.d) return !f.s || !e.s ? e = new h(NaN) : f.d ? e.s = -e.s : e = new h(e.d || f.s !== e.s ? f : NaN), e;
    if (f.s != e.s) return e.s = -e.s, f.plus(e);
    if (u = f.d, d = e.d, a = h.precision, l = h.rounding, !u[0] || !d[0]) {
        if (d[0]) e.s = -e.s;
        else if (u[0]) e = new h(f);
        else return new h(l === 3 ? -0 : 0);
        return w ? y(e, a, l) : e;
    }
    if (t = X(e.e / E), c = X(f.e / E), u = u.slice(), o = c - t, o) {
        for(p = o < 0, p ? (r = u, o = -o, s = d.length) : (r = d, t = c, s = u.length), n = Math.max(Math.ceil(a / E), s) + 2, o > n && (o = n, r.length = 1), r.reverse(), n = o; n--;)r.push(0);
        r.reverse();
    } else {
        for(n = u.length, s = d.length, p = n < s, p && (s = n), n = 0; n < s; n++)if (u[n] != d[n]) {
            p = u[n] < d[n];
            break;
        }
        o = 0;
    }
    for(p && (r = u, u = d, d = r, e.s = -e.s), s = u.length, n = d.length - s; n > 0; --n)u[s++] = 0;
    for(n = d.length; n > o;){
        if (u[--n] < d[n]) {
            for(i = n; i && u[--i] === 0;)u[i] = fe - 1;
            --u[i], u[n] += fe;
        }
        u[n] -= d[n];
    }
    for(; u[--s] === 0;)u.pop();
    for(; u[0] === 0; u.shift())--t;
    return u[0] ? (e.d = u, e.e = wn(u, t), w ? y(e, a, l) : e) : new h(l === 3 ? -0 : 0);
};
m.modulo = m.mod = function(e) {
    var r, t = this, n = t.constructor;
    return e = new n(e), !t.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || t.d && !t.d[0] ? y(new n(t), n.precision, n.rounding) : (w = !1, n.modulo == 9 ? (r = L(t, e.abs(), 0, 3, 1), r.s *= e.s) : r = L(t, e, 0, n.modulo, 1), r = r.times(e), w = !0, t.minus(r));
};
m.naturalExponential = m.exp = function() {
    return Wi(this);
};
m.naturalLogarithm = m.ln = function() {
    return Ke(this);
};
m.negated = m.neg = function() {
    var e = new this.constructor(this);
    return e.s = -e.s, y(e);
};
m.plus = m.add = function(e) {
    var r, t, n, i, o, s, a, l, u, c, p = this, d = p.constructor;
    if (e = new d(e), !p.d || !e.d) return !p.s || !e.s ? e = new d(NaN) : p.d || (e = new d(e.d || p.s === e.s ? p : NaN)), e;
    if (p.s != e.s) return e.s = -e.s, p.minus(e);
    if (u = p.d, c = e.d, a = d.precision, l = d.rounding, !u[0] || !c[0]) return c[0] || (e = new d(p)), w ? y(e, a, l) : e;
    if (o = X(p.e / E), n = X(e.e / E), u = u.slice(), i = o - n, i) {
        for(i < 0 ? (t = u, i = -i, s = c.length) : (t = c, n = o, s = u.length), o = Math.ceil(a / E), s = o > s ? o + 1 : s + 1, i > s && (i = s, t.length = 1), t.reverse(); i--;)t.push(0);
        t.reverse();
    }
    for(s = u.length, i = c.length, s - i < 0 && (i = s, t = c, c = u, u = t), r = 0; i;)r = (u[--i] = u[i] + c[i] + r) / fe | 0, u[i] %= fe;
    for(r && (u.unshift(r), ++n), s = u.length; u[--s] == 0;)u.pop();
    return e.d = u, e.e = wn(u, n), w ? y(e, a, l) : e;
};
m.precision = m.sd = function(e) {
    var r, t = this;
    if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(He + e);
    return t.d ? (r = Us(t.d), e && t.e + 1 > r && (r = t.e + 1)) : r = NaN, r;
};
m.round = function() {
    var e = this, r = e.constructor;
    return y(new r(e), e.e + 1, r.rounding);
};
m.sine = m.sin = function() {
    var e, r, t = this, n = t.constructor;
    return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + Math.max(t.e, t.sd()) + E, n.rounding = 1, t = Sp(n, Js(n, t)), n.precision = e, n.rounding = r, y(Ne > 2 ? t.neg() : t, e, r, !0)) : new n(NaN);
};
m.squareRoot = m.sqrt = function() {
    var e, r, t, n, i, o, s = this, a = s.d, l = s.e, u = s.s, c = s.constructor;
    if (u !== 1 || !a || !a[0]) return new c(!u || u < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
    for(w = !1, u = Math.sqrt(+s), u == 0 || u == 1 / 0 ? (r = J(a), (r.length + l) % 2 == 0 && (r += "0"), u = Math.sqrt(r), l = X((l + 1) / 2) - (l < 0 || l % 2), u == 1 / 0 ? r = "5e" + l : (r = u.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + l), n = new c(r)) : n = new c(u.toString()), t = (l = c.precision) + 3;;)if (o = n, n = o.plus(L(s, o, t + 2, 1)).times(.5), J(o.d).slice(0, t) === (r = J(n.d)).slice(0, t)) if (r = r.slice(t - 3, t + 1), r == "9999" || !i && r == "4999") {
        if (!i && (y(o, l + 1, 0), o.times(o).eq(s))) {
            n = o;
            break;
        }
        t += 4, i = 1;
    } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (y(n, l + 1, 1), e = !n.times(n).eq(s));
        break;
    }
    return w = !0, y(n, l, c.rounding, e);
};
m.tangent = m.tan = function() {
    var e, r, t = this, n = t.constructor;
    return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + 10, n.rounding = 1, t = t.sin(), t.s = 1, t = L(t, new n(1).minus(t.times(t)).sqrt(), e + 10, 0), n.precision = e, n.rounding = r, y(Ne == 2 || Ne == 4 ? t.neg() : t, e, r, !0)) : new n(NaN);
};
m.times = m.mul = function(e) {
    var r, t, n, i, o, s, a, l, u, c = this, p = c.constructor, d = c.d, f = (e = new p(e)).d;
    if (e.s *= c.s, !d || !d[0] || !f || !f[0]) return new p(!e.s || d && !d[0] && !f || f && !f[0] && !d ? NaN : !d || !f ? e.s / 0 : e.s * 0);
    for(t = X(c.e / E) + X(e.e / E), l = d.length, u = f.length, l < u && (o = d, d = f, f = o, s = l, l = u, u = s), o = [], s = l + u, n = s; n--;)o.push(0);
    for(n = u; --n >= 0;){
        for(r = 0, i = l + n; i > n;)a = o[i] + f[n] * d[i - n - 1] + r, o[i--] = a % fe | 0, r = a / fe | 0;
        o[i] = (o[i] + r) % fe | 0;
    }
    for(; !o[--s];)o.pop();
    return r ? ++t : o.shift(), e.d = o, e.e = wn(o, t), w ? y(e, p.precision, p.rounding) : e;
};
m.toBinary = function(e, r) {
    return Ji(this, 2, e, r);
};
m.toDecimalPlaces = m.toDP = function(e, r) {
    var t = this, n = t.constructor;
    return t = new n(t), e === void 0 ? t : (ne(e, 0, Ye), r === void 0 ? r = n.rounding : ne(r, 0, 8), y(t, e + t.e + 1, r));
};
m.toExponential = function(e, r) {
    var t, n = this, i = n.constructor;
    return e === void 0 ? t = ve(n, !0) : (ne(e, 0, Ye), r === void 0 ? r = i.rounding : ne(r, 0, 8), n = y(new i(n), e + 1, r), t = ve(n, !0, e + 1)), n.isNeg() && !n.isZero() ? "-" + t : t;
};
m.toFixed = function(e, r) {
    var t, n, i = this, o = i.constructor;
    return e === void 0 ? t = ve(i) : (ne(e, 0, Ye), r === void 0 ? r = o.rounding : ne(r, 0, 8), n = y(new o(i), e + i.e + 1, r), t = ve(n, !1, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + t : t;
};
m.toFraction = function(e) {
    var r, t, n, i, o, s, a, l, u, c, p, d, f = this, h = f.d, g = f.constructor;
    if (!h) return new g(f);
    if (u = t = new g(1), n = l = new g(0), r = new g(n), o = r.e = Us(h) - f.e - 1, s = o % E, r.d[0] = U(10, s < 0 ? E + s : s), e == null) e = o > 0 ? r : u;
    else {
        if (a = new g(e), !a.isInt() || a.lt(u)) throw Error(He + a);
        e = a.gt(r) ? o > 0 ? r : u : a;
    }
    for(w = !1, a = new g(J(h)), c = g.precision, g.precision = o = h.length * E * 2; p = L(a, r, 0, 1, 1), i = t.plus(p.times(n)), i.cmp(e) != 1;)t = n, n = i, i = u, u = l.plus(p.times(i)), l = i, i = r, r = a.minus(p.times(i)), a = i;
    return i = L(e.minus(t), n, 0, 1, 1), l = l.plus(i.times(u)), t = t.plus(i.times(n)), l.s = u.s = f.s, d = L(u, n, o, 1).minus(f).abs().cmp(L(l, t, o, 1).minus(f).abs()) < 1 ? [
        u,
        n
    ] : [
        l,
        t
    ], g.precision = c, w = !0, d;
};
m.toHexadecimal = m.toHex = function(e, r) {
    return Ji(this, 16, e, r);
};
m.toNearest = function(e, r) {
    var t = this, n = t.constructor;
    if (t = new n(t), e == null) {
        if (!t.d) return t;
        e = new n(1), r = n.rounding;
    } else {
        if (e = new n(e), r === void 0 ? r = n.rounding : ne(r, 0, 8), !t.d) return e.s ? t : e;
        if (!e.d) return e.s && (e.s = t.s), e;
    }
    return e.d[0] ? (w = !1, t = L(t, e, 0, r, 1).times(e), w = !0, y(t)) : (e.s = t.s, t = e), t;
};
m.toNumber = function() {
    return +this;
};
m.toOctal = function(e, r) {
    return Ji(this, 8, e, r);
};
m.toPower = m.pow = function(e) {
    var r, t, n, i, o, s, a = this, l = a.constructor, u = +(e = new l(e));
    if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new l(U(+a, u));
    if (a = new l(a), a.eq(1)) return a;
    if (n = l.precision, o = l.rounding, e.eq(1)) return y(a, n, o);
    if (r = X(e.e / E), r >= e.d.length - 1 && (t = u < 0 ? -u : u) <= xp) return i = Gs(l, a, t, n), e.s < 0 ? new l(1).div(i) : y(i, n, o);
    if (s = a.s, s < 0) {
        if (r < e.d.length - 1) return new l(NaN);
        if ((e.d[r] & 1) == 0 && (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1) return a.s = s, a;
    }
    return t = U(+a, u), r = t == 0 || !isFinite(t) ? X(u * (Math.log("0." + J(a.d)) / Math.LN10 + a.e + 1)) : new l(t + "").e, r > l.maxE + 1 || r < l.minE - 1 ? new l(r > 0 ? s / 0 : 0) : (w = !1, l.rounding = a.s = 1, t = Math.min(12, (r + "").length), i = Wi(e.times(Ke(a, n + t)), n), i.d && (i = y(i, n + 5, 1), ut(i.d, n, o) && (r = n + 10, i = y(Wi(e.times(Ke(a, r + t)), r), r + 5, 1), +J(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = y(i, n + 1, 0)))), i.s = s, w = !0, l.rounding = o, y(i, n, o));
};
m.toPrecision = function(e, r) {
    var t, n = this, i = n.constructor;
    return e === void 0 ? t = ve(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (ne(e, 1, Ye), r === void 0 ? r = i.rounding : ne(r, 0, 8), n = y(new i(n), e, r), t = ve(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + t : t;
};
m.toSignificantDigits = m.toSD = function(e, r) {
    var t = this, n = t.constructor;
    return e === void 0 ? (e = n.precision, r = n.rounding) : (ne(e, 1, Ye), r === void 0 ? r = n.rounding : ne(r, 0, 8)), y(new n(t), e, r);
};
m.toString = function() {
    var e = this, r = e.constructor, t = ve(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
    return e.isNeg() && !e.isZero() ? "-" + t : t;
};
m.truncated = m.trunc = function() {
    return y(new this.constructor(this), this.e + 1, 1);
};
m.valueOf = m.toJSON = function() {
    var e = this, r = e.constructor, t = ve(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
    return e.isNeg() ? "-" + t : t;
};
function J(e) {
    var r, t, n, i = e.length - 1, o = "", s = e[0];
    if (i > 0) {
        for(o += s, r = 1; r < i; r++)n = e[r] + "", t = E - n.length, t && (o += Je(t)), o += n;
        s = e[r], n = s + "", t = E - n.length, t && (o += Je(t));
    } else if (s === 0) return "0";
    for(; s % 10 === 0;)s /= 10;
    return o + s;
}
function ne(e, r, t) {
    if (e !== ~~e || e < r || e > t) throw Error(He + e);
}
function ut(e, r, t, n) {
    var i, o, s, a;
    for(o = e[0]; o >= 10; o /= 10)--r;
    return --r < 0 ? (r += E, i = 0) : (i = Math.ceil((r + 1) / E), r %= E), o = U(10, E - r), a = e[i] % o | 0, n == null ? r < 3 ? (r == 0 ? a = a / 100 | 0 : r == 1 && (a = a / 10 | 0), s = t < 4 && a == 99999 || t > 3 && a == 49999 || a == 5e4 || a == 0) : s = (t < 4 && a + 1 == o || t > 3 && a + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == U(10, r - 2) - 1 || (a == o / 2 || a == 0) && (e[i + 1] / o / 100 | 0) == 0 : r < 4 ? (r == 0 ? a = a / 1e3 | 0 : r == 1 ? a = a / 100 | 0 : r == 2 && (a = a / 10 | 0), s = (n || t < 4) && a == 9999 || !n && t > 3 && a == 4999) : s = ((n || t < 4) && a + 1 == o || !n && t > 3 && a + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == U(10, r - 3) - 1, s;
}
function fn(e, r, t) {
    for(var n, i = [
        0
    ], o, s = 0, a = e.length; s < a;){
        for(o = i.length; o--;)i[o] *= r;
        for(i[0] += Ui.indexOf(e.charAt(s++)), n = 0; n < i.length; n++)i[n] > t - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / t | 0, i[n] %= t);
    }
    return i.reverse();
}
function Pp(e, r) {
    var t, n, i;
    if (r.isZero()) return r;
    n = r.d.length, n < 32 ? (t = Math.ceil(n / 3), i = (1 / xn(4, t)).toString()) : (t = 16, i = "2.3283064365386962890625e-10"), e.precision += t, r = Tr(e, 1, r.times(i), new e(1));
    for(var o = t; o--;){
        var s = r.times(r);
        r = s.times(s).minus(s).times(8).plus(1);
    }
    return e.precision -= t, r;
}
var L = function() {
    function e(n, i, o) {
        var s, a = 0, l = n.length;
        for(n = n.slice(); l--;)s = n[l] * i + a, n[l] = s % o | 0, a = s / o | 0;
        return a && n.unshift(a), n;
    }
    function r(n, i, o, s) {
        var a, l;
        if (o != s) l = o > s ? 1 : -1;
        else for(a = l = 0; a < o; a++)if (n[a] != i[a]) {
            l = n[a] > i[a] ? 1 : -1;
            break;
        }
        return l;
    }
    function t(n, i, o, s) {
        for(var a = 0; o--;)n[o] -= a, a = n[o] < i[o] ? 1 : 0, n[o] = a * s + n[o] - i[o];
        for(; !n[0] && n.length > 1;)n.shift();
    }
    return function(n, i, o, s, a, l) {
        var u, c, p, d, f, h, g, I, T, S, b, D, me, se, Kr, j, te, Ae, K, fr, Vt = n.constructor, ti = n.s == i.s ? 1 : -1, H = n.d, k = i.d;
        if (!H || !H[0] || !k || !k[0]) return new Vt(!n.s || !i.s || (H ? k && H[0] == k[0] : !k) ? NaN : H && H[0] == 0 || !k ? ti * 0 : ti / 0);
        for(l ? (f = 1, c = n.e - i.e) : (l = fe, f = E, c = X(n.e / f) - X(i.e / f)), K = k.length, te = H.length, T = new Vt(ti), S = T.d = [], p = 0; k[p] == (H[p] || 0); p++);
        if (k[p] > (H[p] || 0) && c--, o == null ? (se = o = Vt.precision, s = Vt.rounding) : a ? se = o + (n.e - i.e) + 1 : se = o, se < 0) S.push(1), h = !0;
        else {
            if (se = se / f + 2 | 0, p = 0, K == 1) {
                for(d = 0, k = k[0], se++; (p < te || d) && se--; p++)Kr = d * l + (H[p] || 0), S[p] = Kr / k | 0, d = Kr % k | 0;
                h = d || p < te;
            } else {
                for(d = l / (k[0] + 1) | 0, d > 1 && (k = e(k, d, l), H = e(H, d, l), K = k.length, te = H.length), j = K, b = H.slice(0, K), D = b.length; D < K;)b[D++] = 0;
                fr = k.slice(), fr.unshift(0), Ae = k[0], k[1] >= l / 2 && ++Ae;
                do d = 0, u = r(k, b, K, D), u < 0 ? (me = b[0], K != D && (me = me * l + (b[1] || 0)), d = me / Ae | 0, d > 1 ? (d >= l && (d = l - 1), g = e(k, d, l), I = g.length, D = b.length, u = r(g, b, I, D), u == 1 && (d--, t(g, K < I ? fr : k, I, l))) : (d == 0 && (u = d = 1), g = k.slice()), I = g.length, I < D && g.unshift(0), t(b, g, D, l), u == -1 && (D = b.length, u = r(k, b, K, D), u < 1 && (d++, t(b, K < D ? fr : k, D, l))), D = b.length) : u === 0 && (d++, b = [
                    0
                ]), S[p++] = d, u && b[0] ? b[D++] = H[j] || 0 : (b = [
                    H[j]
                ], D = 1);
                while ((j++ < te || b[0] !== void 0) && se--)
                h = b[0] !== void 0;
            }
            S[0] || S.shift();
        }
        if (f == 1) T.e = c, $s = h;
        else {
            for(p = 1, d = S[0]; d >= 10; d /= 10)p++;
            T.e = p + c * f - 1, y(T, a ? o + T.e + 1 : o, s, h);
        }
        return T;
    };
}();
function y(e, r, t, n) {
    var i, o, s, a, l, u, c, p, d, f = e.constructor;
    e: if (r != null) {
        if (p = e.d, !p) return e;
        for(i = 1, a = p[0]; a >= 10; a /= 10)i++;
        if (o = r - i, o < 0) o += E, s = r, c = p[d = 0], l = c / U(10, i - s - 1) % 10 | 0;
        else if (d = Math.ceil((o + 1) / E), a = p.length, d >= a) if (n) {
            for(; a++ <= d;)p.push(0);
            c = l = 0, i = 1, o %= E, s = o - E + 1;
        } else break e;
        else {
            for(c = a = p[d], i = 1; a >= 10; a /= 10)i++;
            o %= E, s = o - E + i, l = s < 0 ? 0 : c / U(10, i - s - 1) % 10 | 0;
        }
        if (n = n || r < 0 || p[d + 1] !== void 0 || (s < 0 ? c : c % U(10, i - s - 1)), u = t < 4 ? (l || n) && (t == 0 || t == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (t == 4 || n || t == 6 && (o > 0 ? s > 0 ? c / U(10, i - s) : 0 : p[d - 1]) % 10 & 1 || t == (e.s < 0 ? 8 : 7)), r < 1 || !p[0]) return p.length = 0, u ? (r -= e.e + 1, p[0] = U(10, (E - r % E) % E), e.e = -r || 0) : p[0] = e.e = 0, e;
        if (o == 0 ? (p.length = d, a = 1, d--) : (p.length = d + 1, a = U(10, E - o), p[d] = s > 0 ? (c / U(10, i - s) % U(10, s) | 0) * a : 0), u) for(;;)if (d == 0) {
            for(o = 1, s = p[0]; s >= 10; s /= 10)o++;
            for(s = p[0] += a, a = 1; s >= 10; s /= 10)a++;
            o != a && (e.e++, p[0] == fe && (p[0] = 1));
            break;
        } else {
            if (p[d] += a, p[d] != fe) break;
            p[d--] = 0, a = 1;
        }
        for(o = p.length; p[--o] === 0;)p.pop();
    }
    return w && (e.e > f.maxE ? (e.d = null, e.e = NaN) : e.e < f.minE && (e.e = 0, e.d = [
        0
    ])), e;
}
function ve(e, r, t) {
    if (!e.isFinite()) return Ws(e);
    var n, i = e.e, o = J(e.d), s = o.length;
    return r ? (t && (n = t - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Je(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + Je(-i - 1) + o, t && (n = t - s) > 0 && (o += Je(n))) : i >= s ? (o += Je(i + 1 - s), t && (n = t - i - 1) > 0 && (o = o + "." + Je(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), t && (n = t - s) > 0 && (i + 1 === s && (o += "."), o += Je(n))), o;
}
function wn(e, r) {
    var t = e[0];
    for(r *= E; t >= 10; t /= 10)r++;
    return r;
}
function bn(e, r, t) {
    if (r > vp) throw w = !0, t && (e.precision = t), Error(qs);
    return y(new e(hn), r, 1, !0);
}
function xe(e, r, t) {
    if (r > Qi) throw Error(qs);
    return y(new e(yn), r, t, !0);
}
function Us(e) {
    var r = e.length - 1, t = r * E + 1;
    if (r = e[r], r) {
        for(; r % 10 == 0; r /= 10)t--;
        for(r = e[0]; r >= 10; r /= 10)t++;
    }
    return t;
}
function Je(e) {
    for(var r = ""; e--;)r += "0";
    return r;
}
function Gs(e, r, t, n) {
    var i, o = new e(1), s = Math.ceil(n / E + 4);
    for(w = !1;;){
        if (t % 2 && (o = o.times(r), Fs(o.d, s) && (i = !0)), t = X(t / 2), t === 0) {
            t = o.d.length - 1, i && o.d[t] === 0 && ++o.d[t];
            break;
        }
        r = r.times(r), Fs(r.d, s);
    }
    return w = !0, o;
}
function Ls(e) {
    return e.d[e.d.length - 1] & 1;
}
function Qs(e, r, t) {
    for(var n, i, o = new e(r[0]), s = 0; ++s < r.length;){
        if (i = new e(r[s]), !i.s) {
            o = i;
            break;
        }
        n = o.cmp(i), (n === t || n === 0 && o.s === t) && (o = i);
    }
    return o;
}
function Wi(e, r) {
    var t, n, i, o, s, a, l, u = 0, c = 0, p = 0, d = e.constructor, f = d.rounding, h = d.precision;
    if (!e.d || !e.d[0] || e.e > 17) return new d(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
    for(r == null ? (w = !1, l = h) : l = r, a = new d(.03125); e.e > -2;)e = e.times(a), p += 5;
    for(n = Math.log(U(2, p)) / Math.LN10 * 2 + 5 | 0, l += n, t = o = s = new d(1), d.precision = l;;){
        if (o = y(o.times(e), l, 1), t = t.times(++c), a = s.plus(L(o, t, l, 1)), J(a.d).slice(0, l) === J(s.d).slice(0, l)) {
            for(i = p; i--;)s = y(s.times(s), l, 1);
            if (r == null) if (u < 3 && ut(s.d, l - n, f, u)) d.precision = l += 10, t = o = a = new d(1), c = 0, u++;
            else return y(s, d.precision = h, f, w = !0);
            else return d.precision = h, s;
        }
        s = a;
    }
}
function Ke(e, r) {
    var t, n, i, o, s, a, l, u, c, p, d, f = 1, h = 10, g = e, I = g.d, T = g.constructor, S = T.rounding, b = T.precision;
    if (g.s < 0 || !I || !I[0] || !g.e && I[0] == 1 && I.length == 1) return new T(I && !I[0] ? -1 / 0 : g.s != 1 ? NaN : I ? 0 : g);
    if (r == null ? (w = !1, c = b) : c = r, T.precision = c += h, t = J(I), n = t.charAt(0), Math.abs(o = g.e) < 15e14) {
        for(; n < 7 && n != 1 || n == 1 && t.charAt(1) > 3;)g = g.times(e), t = J(g.d), n = t.charAt(0), f++;
        o = g.e, n > 1 ? (g = new T("0." + t), o++) : g = new T(n + "." + t.slice(1));
    } else return u = bn(T, c + 2, b).times(o + ""), g = Ke(new T(n + "." + t.slice(1)), c - h).plus(u), T.precision = b, r == null ? y(g, b, S, w = !0) : g;
    for(p = g, l = s = g = L(g.minus(1), g.plus(1), c, 1), d = y(g.times(g), c, 1), i = 3;;){
        if (s = y(s.times(d), c, 1), u = l.plus(L(s, new T(i), c, 1)), J(u.d).slice(0, c) === J(l.d).slice(0, c)) if (l = l.times(2), o !== 0 && (l = l.plus(bn(T, c + 2, b).times(o + ""))), l = L(l, new T(f), c, 1), r == null) if (ut(l.d, c - h, S, a)) T.precision = c += h, u = s = g = L(p.minus(1), p.plus(1), c, 1), d = y(g.times(g), c, 1), i = a = 1;
        else return y(l, T.precision = b, S, w = !0);
        else return T.precision = b, l;
        l = u, i += 2;
    }
}
function Ws(e) {
    return String(e.s * e.s / 0);
}
function gn(e, r) {
    var t, n, i;
    for((t = r.indexOf(".")) > -1 && (r = r.replace(".", "")), (n = r.search(/e/i)) > 0 ? (t < 0 && (t = n), t += +r.slice(n + 1), r = r.substring(0, n)) : t < 0 && (t = r.length), n = 0; r.charCodeAt(n) === 48; n++);
    for(i = r.length; r.charCodeAt(i - 1) === 48; --i);
    if (r = r.slice(n, i), r) {
        if (i -= n, e.e = t = t - n - 1, e.d = [], n = (t + 1) % E, t < 0 && (n += E), n < i) {
            for(n && e.d.push(+r.slice(0, n)), i -= E; n < i;)e.d.push(+r.slice(n, n += E));
            r = r.slice(n), n = E - r.length;
        } else n -= i;
        for(; n--;)r += "0";
        e.d.push(+r), w && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [
            0
        ]));
    } else e.e = 0, e.d = [
        0
    ];
    return e;
}
function Tp(e, r) {
    var t, n, i, o, s, a, l, u, c;
    if (r.indexOf("_") > -1) {
        if (r = r.replace(/(\d)_(?=\d)/g, "$1"), Bs.test(r)) return gn(e, r);
    } else if (r === "Infinity" || r === "NaN") return +r || (e.s = NaN), e.e = NaN, e.d = null, e;
    if (Ep.test(r)) t = 16, r = r.toLowerCase();
    else if (bp.test(r)) t = 2;
    else if (wp.test(r)) t = 8;
    else throw Error(He + r);
    for(o = r.search(/p/i), o > 0 ? (l = +r.slice(o + 1), r = r.substring(2, o)) : r = r.slice(2), o = r.indexOf("."), s = o >= 0, n = e.constructor, s && (r = r.replace(".", ""), a = r.length, o = a - o, i = Gs(n, new n(t), o, o * 2)), u = fn(r, t, fe), c = u.length - 1, o = c; u[o] === 0; --o)u.pop();
    return o < 0 ? new n(e.s * 0) : (e.e = wn(u, c), e.d = u, w = !1, s && (e = L(e, i, a * 4)), l && (e = e.times(Math.abs(l) < 54 ? U(2, l) : Le.pow(2, l))), w = !0, e);
}
function Sp(e, r) {
    var t, n = r.d.length;
    if (n < 3) return r.isZero() ? r : Tr(e, 2, r, r);
    t = 1.4 * Math.sqrt(n), t = t > 16 ? 16 : t | 0, r = r.times(1 / xn(5, t)), r = Tr(e, 2, r, r);
    for(var i, o = new e(5), s = new e(16), a = new e(20); t--;)i = r.times(r), r = r.times(o.plus(i.times(s.times(i).minus(a))));
    return r;
}
function Tr(e, r, t, n, i) {
    var o, s, a, l, u = 1, c = e.precision, p = Math.ceil(c / E);
    for(w = !1, l = t.times(t), a = new e(n);;){
        if (s = L(a.times(l), new e(r++ * r++), c, 1), a = i ? n.plus(s) : n.minus(s), n = L(s.times(l), new e(r++ * r++), c, 1), s = a.plus(n), s.d[p] !== void 0) {
            for(o = p; s.d[o] === a.d[o] && o--;);
            if (o == -1) break;
        }
        o = a, a = n, n = s, s = o, u++;
    }
    return w = !0, s.d.length = p + 1, s;
}
function xn(e, r) {
    for(var t = e; --r;)t *= e;
    return t;
}
function Js(e, r) {
    var t, n = r.s < 0, i = xe(e, e.precision, 1), o = i.times(.5);
    if (r = r.abs(), r.lte(o)) return Ne = n ? 4 : 1, r;
    if (t = r.divToInt(i), t.isZero()) Ne = n ? 3 : 2;
    else {
        if (r = r.minus(t.times(i)), r.lte(o)) return Ne = Ls(t) ? n ? 2 : 3 : n ? 4 : 1, r;
        Ne = Ls(t) ? n ? 1 : 4 : n ? 3 : 2;
    }
    return r.minus(i).abs();
}
function Ji(e, r, t, n) {
    var i, o, s, a, l, u, c, p, d, f = e.constructor, h = t !== void 0;
    if (h ? (ne(t, 1, Ye), n === void 0 ? n = f.rounding : ne(n, 0, 8)) : (t = f.precision, n = f.rounding), !e.isFinite()) c = Ws(e);
    else {
        for(c = ve(e), s = c.indexOf("."), h ? (i = 2, r == 16 ? t = t * 4 - 3 : r == 8 && (t = t * 3 - 2)) : i = r, s >= 0 && (c = c.replace(".", ""), d = new f(1), d.e = c.length - s, d.d = fn(ve(d), 10, i), d.e = d.d.length), p = fn(c, 10, i), o = l = p.length; p[--l] == 0;)p.pop();
        if (!p[0]) c = h ? "0p+0" : "0";
        else {
            if (s < 0 ? o-- : (e = new f(e), e.d = p, e.e = o, e = L(e, d, t, n, 0, i), p = e.d, o = e.e, u = $s), s = p[t], a = i / 2, u = u || p[t + 1] !== void 0, u = n < 4 ? (s !== void 0 || u) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : s > a || s === a && (n === 4 || u || n === 6 && p[t - 1] & 1 || n === (e.s < 0 ? 8 : 7)), p.length = t, u) for(; ++p[--t] > i - 1;)p[t] = 0, t || (++o, p.unshift(1));
            for(l = p.length; !p[l - 1]; --l);
            for(s = 0, c = ""; s < l; s++)c += Ui.charAt(p[s]);
            if (h) {
                if (l > 1) if (r == 16 || r == 8) {
                    for(s = r == 16 ? 4 : 3, --l; l % s; l++)c += "0";
                    for(p = fn(c, i, r), l = p.length; !p[l - 1]; --l);
                    for(s = 1, c = "1."; s < l; s++)c += Ui.charAt(p[s]);
                } else c = c.charAt(0) + "." + c.slice(1);
                c = c + (o < 0 ? "p" : "p+") + o;
            } else if (o < 0) {
                for(; ++o;)c = "0" + c;
                c = "0." + c;
            } else if (++o > l) for(o -= l; o--;)c += "0";
            else o < l && (c = c.slice(0, o) + "." + c.slice(o));
        }
        c = (r == 16 ? "0x" : r == 2 ? "0b" : r == 8 ? "0o" : "") + c;
    }
    return e.s < 0 ? "-" + c : c;
}
function Fs(e, r) {
    if (e.length > r) return e.length = r, !0;
}
function Rp(e) {
    return new this(e).abs();
}
function Ap(e) {
    return new this(e).acos();
}
function Cp(e) {
    return new this(e).acosh();
}
function Ip(e, r) {
    return new this(e).plus(r);
}
function Dp(e) {
    return new this(e).asin();
}
function Op(e) {
    return new this(e).asinh();
}
function kp(e) {
    return new this(e).atan();
}
function _p(e) {
    return new this(e).atanh();
}
function Np(e, r) {
    e = new this(e), r = new this(r);
    var t, n = this.precision, i = this.rounding, o = n + 4;
    return !e.s || !r.s ? t = new this(NaN) : !e.d && !r.d ? (t = xe(this, o, 1).times(r.s > 0 ? .25 : .75), t.s = e.s) : !r.d || e.isZero() ? (t = r.s < 0 ? xe(this, n, i) : new this(0), t.s = e.s) : !e.d || r.isZero() ? (t = xe(this, o, 1).times(.5), t.s = e.s) : r.s < 0 ? (this.precision = o, this.rounding = 1, t = this.atan(L(e, r, o, 1)), r = xe(this, o, 1), this.precision = n, this.rounding = i, t = e.s < 0 ? t.minus(r) : t.plus(r)) : t = this.atan(L(e, r, o, 1)), t;
}
function Lp(e) {
    return new this(e).cbrt();
}
function Fp(e) {
    return y(e = new this(e), e.e + 1, 2);
}
function Mp(e, r, t) {
    return new this(e).clamp(r, t);
}
function $p(e) {
    if (!e || typeof e != "object") throw Error(En + "Object expected");
    var r, t, n, i = e.defaults === !0, o = [
        "precision",
        1,
        Ye,
        "rounding",
        0,
        8,
        "toExpNeg",
        -Pr,
        0,
        "toExpPos",
        0,
        Pr,
        "maxE",
        0,
        Pr,
        "minE",
        -Pr,
        0,
        "modulo",
        0,
        9
    ];
    for(r = 0; r < o.length; r += 3)if (t = o[r], i && (this[t] = Gi[t]), (n = e[t]) !== void 0) if (X(n) === n && n >= o[r + 1] && n <= o[r + 2]) this[t] = n;
    else throw Error(He + t + ": " + n);
    if (t = "crypto", i && (this[t] = Gi[t]), (n = e[t]) !== void 0) if (n === !0 || n === !1 || n === 0 || n === 1) if (n) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[t] = !0;
    else throw Error(Vs);
    else this[t] = !1;
    else throw Error(He + t + ": " + n);
    return this;
}
function qp(e) {
    return new this(e).cos();
}
function Vp(e) {
    return new this(e).cosh();
}
function Ks(e) {
    var r, t, n;
    function i(o) {
        var s, a, l, u = this;
        if (!(u instanceof i)) return new i(o);
        if (u.constructor = i, Ms(o)) {
            u.s = o.s, w ? !o.d || o.e > i.maxE ? (u.e = NaN, u.d = null) : o.e < i.minE ? (u.e = 0, u.d = [
                0
            ]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
            return;
        }
        if (l = typeof o, l === "number") {
            if (o === 0) {
                u.s = 1 / o < 0 ? -1 : 1, u.e = 0, u.d = [
                    0
                ];
                return;
            }
            if (o < 0 ? (o = -o, u.s = -1) : u.s = 1, o === ~~o && o < 1e7) {
                for(s = 0, a = o; a >= 10; a /= 10)s++;
                w ? s > i.maxE ? (u.e = NaN, u.d = null) : s < i.minE ? (u.e = 0, u.d = [
                    0
                ]) : (u.e = s, u.d = [
                    o
                ]) : (u.e = s, u.d = [
                    o
                ]);
                return;
            }
            if (o * 0 !== 0) {
                o || (u.s = NaN), u.e = NaN, u.d = null;
                return;
            }
            return gn(u, o.toString());
        }
        if (l === "string") return (a = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (a === 43 && (o = o.slice(1)), u.s = 1), Bs.test(o) ? gn(u, o) : Tp(u, o);
        if (l === "bigint") return o < 0 ? (o = -o, u.s = -1) : u.s = 1, gn(u, o.toString());
        throw Error(He + o);
    }
    if (i.prototype = m, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = $p, i.clone = Ks, i.isDecimal = Ms, i.abs = Rp, i.acos = Ap, i.acosh = Cp, i.add = Ip, i.asin = Dp, i.asinh = Op, i.atan = kp, i.atanh = _p, i.atan2 = Np, i.cbrt = Lp, i.ceil = Fp, i.clamp = Mp, i.cos = qp, i.cosh = Vp, i.div = jp, i.exp = Bp, i.floor = Up, i.hypot = Gp, i.ln = Qp, i.log = Wp, i.log10 = Kp, i.log2 = Jp, i.max = Hp, i.min = Yp, i.mod = zp, i.mul = Zp, i.pow = Xp, i.random = ed, i.round = rd, i.sign = td, i.sin = nd, i.sinh = id, i.sqrt = od, i.sub = sd, i.sum = ad, i.tan = ld, i.tanh = ud, i.trunc = cd, e === void 0 && (e = {}), e && e.defaults !== !0) for(n = [
        "precision",
        "rounding",
        "toExpNeg",
        "toExpPos",
        "maxE",
        "minE",
        "modulo",
        "crypto"
    ], r = 0; r < n.length;)e.hasOwnProperty(t = n[r++]) || (e[t] = this[t]);
    return i.config(e), i;
}
function jp(e, r) {
    return new this(e).div(r);
}
function Bp(e) {
    return new this(e).exp();
}
function Up(e) {
    return y(e = new this(e), e.e + 1, 3);
}
function Gp() {
    var e, r, t = new this(0);
    for(w = !1, e = 0; e < arguments.length;)if (r = new this(arguments[e++]), r.d) t.d && (t = t.plus(r.times(r)));
    else {
        if (r.s) return w = !0, new this(1 / 0);
        t = r;
    }
    return w = !0, t.sqrt();
}
function Ms(e) {
    return e instanceof Le || e && e.toStringTag === js || !1;
}
function Qp(e) {
    return new this(e).ln();
}
function Wp(e, r) {
    return new this(e).log(r);
}
function Jp(e) {
    return new this(e).log(2);
}
function Kp(e) {
    return new this(e).log(10);
}
function Hp() {
    return Qs(this, arguments, -1);
}
function Yp() {
    return Qs(this, arguments, 1);
}
function zp(e, r) {
    return new this(e).mod(r);
}
function Zp(e, r) {
    return new this(e).mul(r);
}
function Xp(e, r) {
    return new this(e).pow(r);
}
function ed(e) {
    var r, t, n, i, o = 0, s = new this(1), a = [];
    if (e === void 0 ? e = this.precision : ne(e, 1, Ye), n = Math.ceil(e / E), this.crypto) if (crypto.getRandomValues) for(r = crypto.getRandomValues(new Uint32Array(n)); o < n;)i = r[o], i >= 429e7 ? r[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = i % 1e7;
    else if (crypto.randomBytes) {
        for(r = crypto.randomBytes(n *= 4); o < n;)i = r[o] + (r[o + 1] << 8) + (r[o + 2] << 16) + ((r[o + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(r, o) : (a.push(i % 1e7), o += 4);
        o = n / 4;
    } else throw Error(Vs);
    else for(; o < n;)a[o++] = Math.random() * 1e7 | 0;
    for(n = a[--o], e %= E, n && e && (i = U(10, E - e), a[o] = (n / i | 0) * i); a[o] === 0; o--)a.pop();
    if (o < 0) t = 0, a = [
        0
    ];
    else {
        for(t = -1; a[0] === 0; t -= E)a.shift();
        for(n = 1, i = a[0]; i >= 10; i /= 10)n++;
        n < E && (t -= E - n);
    }
    return s.e = t, s.d = a, s;
}
function rd(e) {
    return y(e = new this(e), e.e + 1, this.rounding);
}
function td(e) {
    return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function nd(e) {
    return new this(e).sin();
}
function id(e) {
    return new this(e).sinh();
}
function od(e) {
    return new this(e).sqrt();
}
function sd(e, r) {
    return new this(e).sub(r);
}
function ad() {
    var e = 0, r = arguments, t = new this(r[e]);
    for(w = !1; t.s && ++e < r.length;)t = t.plus(r[e]);
    return w = !0, y(t, this.precision, this.rounding);
}
function ld(e) {
    return new this(e).tan();
}
function ud(e) {
    return new this(e).tanh();
}
function cd(e) {
    return y(e = new this(e), e.e + 1, 1);
}
m[Symbol.for("nodejs.util.inspect.custom")] = m.toString;
m[Symbol.toStringTag] = "Decimal";
var Le = m.constructor = Ks(Gi);
hn = new Le(hn);
yn = new Le(yn);
var Fe = Le;
function Sr(e) {
    return Le.isDecimal(e) ? !0 : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
}
var ct = {};
tr(ct, {
    ModelAction: ()=>Rr,
    datamodelEnumToSchemaEnum: ()=>pd
});
function pd(e) {
    return {
        name: e.name,
        values: e.values.map((r)=>r.name)
    };
}
var Rr = ((b)=>(b.findUnique = "findUnique", b.findUniqueOrThrow = "findUniqueOrThrow", b.findFirst = "findFirst", b.findFirstOrThrow = "findFirstOrThrow", b.findMany = "findMany", b.create = "create", b.createMany = "createMany", b.createManyAndReturn = "createManyAndReturn", b.update = "update", b.updateMany = "updateMany", b.updateManyAndReturn = "updateManyAndReturn", b.upsert = "upsert", b.delete = "delete", b.deleteMany = "deleteMany", b.groupBy = "groupBy", b.count = "count", b.aggregate = "aggregate", b.findRaw = "findRaw", b.aggregateRaw = "aggregateRaw", b))(Rr || {});
var Xs = O(Di());
var Zs = O(__turbopack_context__.r("[externals]/node:fs [external] (node:fs, cjs)"));
var Hs = {
    keyword: De,
    entity: De,
    value: (e)=>W(nr(e)),
    punctuation: nr,
    directive: De,
    function: De,
    variable: (e)=>W(nr(e)),
    string: (e)=>W(qe(e)),
    boolean: Ie,
    number: De,
    comment: Hr
};
var dd = (e)=>e, vn = {}, md = 0, v = {
    manual: vn.Prism && vn.Prism.manual,
    disableWorkerMessageHandler: vn.Prism && vn.Prism.disableWorkerMessageHandler,
    util: {
        encode: function(e) {
            if (e instanceof ge) {
                let r = e;
                return new ge(r.type, v.util.encode(r.content), r.alias);
            } else return Array.isArray(e) ? e.map(v.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        },
        type: function(e) {
            return Object.prototype.toString.call(e).slice(8, -1);
        },
        objId: function(e) {
            return e.__id || Object.defineProperty(e, "__id", {
                value: ++md
            }), e.__id;
        },
        clone: function e(r, t) {
            let n, i, o = v.util.type(r);
            switch(t = t || {}, o){
                case "Object":
                    if (i = v.util.objId(r), t[i]) return t[i];
                    n = {}, t[i] = n;
                    for(let s in r)r.hasOwnProperty(s) && (n[s] = e(r[s], t));
                    return n;
                case "Array":
                    return i = v.util.objId(r), t[i] ? t[i] : (n = [], t[i] = n, r.forEach(function(s, a) {
                        n[a] = e(s, t);
                    }), n);
                default:
                    return r;
            }
        }
    },
    languages: {
        extend: function(e, r) {
            let t = v.util.clone(v.languages[e]);
            for(let n in r)t[n] = r[n];
            return t;
        },
        insertBefore: function(e, r, t, n) {
            n = n || v.languages;
            let i = n[e], o = {};
            for(let a in i)if (i.hasOwnProperty(a)) {
                if (a == r) for(let l in t)t.hasOwnProperty(l) && (o[l] = t[l]);
                t.hasOwnProperty(a) || (o[a] = i[a]);
            }
            let s = n[e];
            return n[e] = o, v.languages.DFS(v.languages, function(a, l) {
                l === s && a != e && (this[a] = o);
            }), o;
        },
        DFS: function e(r, t, n, i) {
            i = i || {};
            let o = v.util.objId;
            for(let s in r)if (r.hasOwnProperty(s)) {
                t.call(r, s, r[s], n || s);
                let a = r[s], l = v.util.type(a);
                l === "Object" && !i[o(a)] ? (i[o(a)] = !0, e(a, t, null, i)) : l === "Array" && !i[o(a)] && (i[o(a)] = !0, e(a, t, s, i));
            }
        }
    },
    plugins: {},
    highlight: function(e, r, t) {
        let n = {
            code: e,
            grammar: r,
            language: t
        };
        return v.hooks.run("before-tokenize", n), n.tokens = v.tokenize(n.code, n.grammar), v.hooks.run("after-tokenize", n), ge.stringify(v.util.encode(n.tokens), n.language);
    },
    matchGrammar: function(e, r, t, n, i, o, s) {
        for(let g in t){
            if (!t.hasOwnProperty(g) || !t[g]) continue;
            if (g == s) return;
            let I = t[g];
            I = v.util.type(I) === "Array" ? I : [
                I
            ];
            for(let T = 0; T < I.length; ++T){
                let S = I[T], b = S.inside, D = !!S.lookbehind, me = !!S.greedy, se = 0, Kr = S.alias;
                if (me && !S.pattern.global) {
                    let j = S.pattern.toString().match(/[imuy]*$/)[0];
                    S.pattern = RegExp(S.pattern.source, j + "g");
                }
                S = S.pattern || S;
                for(let j = n, te = i; j < r.length; te += r[j].length, ++j){
                    let Ae = r[j];
                    if (r.length > e.length) return;
                    if (Ae instanceof ge) continue;
                    if (me && j != r.length - 1) {
                        S.lastIndex = te;
                        var p = S.exec(e);
                        if (!p) break;
                        var c = p.index + (D ? p[1].length : 0), d = p.index + p[0].length, a = j, l = te;
                        for(let k = r.length; a < k && (l < d || !r[a].type && !r[a - 1].greedy); ++a)l += r[a].length, c >= l && (++j, te = l);
                        if (r[j] instanceof ge) continue;
                        u = a - j, Ae = e.slice(te, l), p.index -= te;
                    } else {
                        S.lastIndex = 0;
                        var p = S.exec(Ae), u = 1;
                    }
                    if (!p) {
                        if (o) break;
                        continue;
                    }
                    D && (se = p[1] ? p[1].length : 0);
                    var c = p.index + se, p = p[0].slice(se), d = c + p.length, f = Ae.slice(0, c), h = Ae.slice(d);
                    let K = [
                        j,
                        u
                    ];
                    f && (++j, te += f.length, K.push(f));
                    let fr = new ge(g, b ? v.tokenize(p, b) : p, Kr, p, me);
                    if (K.push(fr), h && K.push(h), Array.prototype.splice.apply(r, K), u != 1 && v.matchGrammar(e, r, t, j, te, !0, g), o) break;
                }
            }
        }
    },
    tokenize: function(e, r) {
        let t = [
            e
        ], n = r.rest;
        if (n) {
            for(let i in n)r[i] = n[i];
            delete r.rest;
        }
        return v.matchGrammar(e, t, r, 0, 0, !1), t;
    },
    hooks: {
        all: {},
        add: function(e, r) {
            let t = v.hooks.all;
            t[e] = t[e] || [], t[e].push(r);
        },
        run: function(e, r) {
            let t = v.hooks.all[e];
            if (!(!t || !t.length)) for(var n = 0, i; i = t[n++];)i(r);
        }
    },
    Token: ge
};
v.languages.clike = {
    comment: [
        {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: !0
        },
        {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: !0,
            greedy: !0
        }
    ],
    string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    "class-name": {
        pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
        lookbehind: !0,
        inside: {
            punctuation: /[.\\]/
        }
    },
    keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/
};
v.languages.javascript = v.languages.extend("clike", {
    "class-name": [
        v.languages.clike["class-name"],
        {
            pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
            lookbehind: !0
        }
    ],
    keyword: [
        {
            pattern: /((?:^|})\s*)(?:catch|finally)\b/,
            lookbehind: !0
        },
        {
            pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: !0
        }
    ],
    number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
    function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
});
v.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
v.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
        lookbehind: !0,
        greedy: !0
    },
    "function-variable": {
        pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
        alias: "function"
    },
    parameter: [
        {
            pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
            lookbehind: !0,
            inside: v.languages.javascript
        },
        {
            pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
            inside: v.languages.javascript
        },
        {
            pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
            lookbehind: !0,
            inside: v.languages.javascript
        },
        {
            pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
            lookbehind: !0,
            inside: v.languages.javascript
        }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
v.languages.markup && v.languages.markup.tag.addInlined("script", "javascript");
v.languages.js = v.languages.javascript;
v.languages.typescript = v.languages.extend("javascript", {
    keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
    builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/
});
v.languages.ts = v.languages.typescript;
function ge(e, r, t, n, i) {
    this.type = e, this.content = r, this.alias = t, this.length = (n || "").length | 0, this.greedy = !!i;
}
ge.stringify = function(e, r) {
    return typeof e == "string" ? e : Array.isArray(e) ? e.map(function(t) {
        return ge.stringify(t, r);
    }).join("") : fd(e.type)(e.content);
};
function fd(e) {
    return Hs[e] || dd;
}
function Ys(e) {
    return gd(e, v.languages.javascript);
}
function gd(e, r) {
    return v.tokenize(e, r).map((n)=>ge.stringify(n)).join("");
}
function zs(e) {
    return Ci(e);
}
var Pn = class e {
    firstLineNumber;
    lines;
    static read(r) {
        let t;
        try {
            t = Zs.default.readFileSync(r, "utf-8");
        } catch  {
            return null;
        }
        return e.fromContent(t);
    }
    static fromContent(r) {
        let t = r.split(/\r?\n/);
        return new e(1, t);
    }
    constructor(r, t){
        this.firstLineNumber = r, this.lines = t;
    }
    get lastLineNumber() {
        return this.firstLineNumber + this.lines.length - 1;
    }
    mapLineAt(r, t) {
        if (r < this.firstLineNumber || r > this.lines.length + this.firstLineNumber) return this;
        let n = r - this.firstLineNumber, i = [
            ...this.lines
        ];
        return i[n] = t(i[n]), new e(this.firstLineNumber, i);
    }
    mapLines(r) {
        return new e(this.firstLineNumber, this.lines.map((t, n)=>r(t, this.firstLineNumber + n)));
    }
    lineAt(r) {
        return this.lines[r - this.firstLineNumber];
    }
    prependSymbolAt(r, t) {
        return this.mapLines((n, i)=>i === r ? `${t} ${n}` : `  ${n}`);
    }
    slice(r, t) {
        let n = this.lines.slice(r - 1, t).join(`
`);
        return new e(r, zs(n).split(`
`));
    }
    highlight() {
        let r = Ys(this.toString());
        return new e(this.firstLineNumber, r.split(`
`));
    }
    toString() {
        return this.lines.join(`
`);
    }
};
var hd = {
    red: ce,
    gray: Hr,
    dim: Ce,
    bold: W,
    underline: Y,
    highlightSource: (e)=>e.highlight()
}, yd = {
    red: (e)=>e,
    gray: (e)=>e,
    dim: (e)=>e,
    bold: (e)=>e,
    underline: (e)=>e,
    highlightSource: (e)=>e
};
function bd({ message: e, originalMethod: r, isPanic: t, callArguments: n }) {
    return {
        functionName: `prisma.${r}()`,
        message: e,
        isPanic: t ?? !1,
        callArguments: n
    };
}
function Ed({ callsite: e, message: r, originalMethod: t, isPanic: n, callArguments: i }, o) {
    let s = bd({
        message: r,
        originalMethod: t,
        isPanic: n,
        callArguments: i
    });
    if (!e || "undefined" < "u" || ("TURBOPACK compile-time value", "development") === "production") return s;
    let a = e.getLocation();
    if (!a || !a.lineNumber || !a.columnNumber) return s;
    let l = Math.max(1, a.lineNumber - 3), u = Pn.read(a.fileName)?.slice(l, a.lineNumber), c = u?.lineAt(a.lineNumber);
    if (u && c) {
        let p = xd(c), d = wd(c);
        if (!d) return s;
        s.functionName = `${d.code})`, s.location = a, n || (u = u.mapLineAt(a.lineNumber, (h)=>h.slice(0, d.openingBraceIndex))), u = o.highlightSource(u);
        let f = String(u.lastLineNumber).length;
        if (s.contextLines = u.mapLines((h, g)=>o.gray(String(g).padStart(f)) + " " + h).mapLines((h)=>o.dim(h)).prependSymbolAt(a.lineNumber, o.bold(o.red("\u2192"))), i) {
            let h = p + f + 1;
            h += 2, s.callArguments = (0, Xs.default)(i, h).slice(h);
        }
    }
    return s;
}
function wd(e) {
    let r = Object.keys(Rr).join("|"), n = new RegExp(String.raw`\.(${r})\(`).exec(e);
    if (n) {
        let i = n.index + n[0].length, o = e.lastIndexOf(" ", n.index) + 1;
        return {
            code: e.slice(o, i),
            openingBraceIndex: i
        };
    }
    return null;
}
function xd(e) {
    let r = 0;
    for(let t = 0; t < e.length; t++){
        if (e.charAt(t) !== " ") return r;
        r++;
    }
    return r;
}
function vd({ functionName: e, location: r, message: t, isPanic: n, contextLines: i, callArguments: o }, s) {
    let a = [
        ""
    ], l = r ? " in" : ":";
    if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)), r && a.push(s.underline(Pd(r))), i) {
        a.push("");
        let u = [
            i.toString()
        ];
        o && (u.push(o), u.push(s.dim(")"))), a.push(u.join("")), o && a.push("");
    } else a.push(""), o && a.push(o), a.push("");
    return a.push(t), a.join(`
`);
}
function Pd(e) {
    let r = [
        e.fileName
    ];
    return e.lineNumber && r.push(String(e.lineNumber)), e.columnNumber && r.push(String(e.columnNumber)), r.join(":");
}
function Tn(e) {
    let r = e.showColors ? hd : yd, t;
    return t = Ed(e, r), vd(t, r);
}
var la = O(Ki());
function na(e, r, t) {
    let n = ia(e), i = Td(n), o = Rd(i);
    o ? Sn(o, r, t) : r.addErrorMessage(()=>"Unknown error");
}
function ia(e) {
    return e.errors.flatMap((r)=>r.kind === "Union" ? ia(r) : [
            r
        ]);
}
function Td(e) {
    let r = new Map, t = [];
    for (let n of e){
        if (n.kind !== "InvalidArgumentType") {
            t.push(n);
            continue;
        }
        let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = r.get(i);
        o ? r.set(i, {
            ...n,
            argument: {
                ...n.argument,
                typeNames: Sd(o.argument.typeNames, n.argument.typeNames)
            }
        }) : r.set(i, n);
    }
    return t.push(...r.values()), t;
}
function Sd(e, r) {
    return [
        ...new Set(e.concat(r))
    ];
}
function Rd(e) {
    return ji(e, (r, t)=>{
        let n = ra(r), i = ra(t);
        return n !== i ? n - i : ta(r) - ta(t);
    });
}
function ra(e) {
    let r = 0;
    return Array.isArray(e.selectionPath) && (r += e.selectionPath.length), Array.isArray(e.argumentPath) && (r += e.argumentPath.length), r;
}
function ta(e) {
    switch(e.kind){
        case "InvalidArgumentValue":
        case "ValueTooLarge":
            return 20;
        case "InvalidArgumentType":
            return 10;
        case "RequiredArgumentMissing":
            return -10;
        default:
            return 0;
    }
}
var le = class {
    constructor(r, t){
        this.name = r;
        this.value = t;
    }
    isRequired = !1;
    makeRequired() {
        return this.isRequired = !0, this;
    }
    write(r) {
        let { colors: { green: t } } = r.context;
        r.addMarginSymbol(t(this.isRequired ? "+" : "?")), r.write(t(this.name)), this.isRequired || r.write(t("?")), r.write(t(": ")), typeof this.value == "string" ? r.write(t(this.value)) : r.write(this.value);
    }
};
sa();
var Ar = class {
    constructor(r = 0, t){
        this.context = t;
        this.currentIndent = r;
    }
    lines = [];
    currentLine = "";
    currentIndent = 0;
    marginSymbol;
    afterNextNewLineCallback;
    write(r) {
        return typeof r == "string" ? this.currentLine += r : r.write(this), this;
    }
    writeJoined(r, t, n = (i, o)=>o.write(i)) {
        let i = t.length - 1;
        for(let o = 0; o < t.length; o++)n(t[o], this), o !== i && this.write(r);
        return this;
    }
    writeLine(r) {
        return this.write(r).newLine();
    }
    newLine() {
        this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
        let r = this.afterNextNewLineCallback;
        return this.afterNextNewLineCallback = void 0, r?.(), this;
    }
    withIndent(r) {
        return this.indent(), r(this), this.unindent(), this;
    }
    afterNextNewline(r) {
        return this.afterNextNewLineCallback = r, this;
    }
    indent() {
        return this.currentIndent++, this;
    }
    unindent() {
        return this.currentIndent > 0 && this.currentIndent--, this;
    }
    addMarginSymbol(r) {
        return this.marginSymbol = r, this;
    }
    toString() {
        return this.lines.concat(this.indentedCurrentLine()).join(`
`);
    }
    getCurrentLineLength() {
        return this.currentLine.length;
    }
    indentedCurrentLine() {
        let r = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
        return this.marginSymbol ? this.marginSymbol + r.slice(1) : r;
    }
};
oa();
var Rn = class {
    constructor(r){
        this.value = r;
    }
    write(r) {
        r.write(this.value);
    }
    markAsError() {
        this.value.markAsError();
    }
};
var An = (e)=>e, Cn = {
    bold: An,
    red: An,
    green: An,
    dim: An,
    enabled: !1
}, aa = {
    bold: W,
    red: ce,
    green: qe,
    dim: Ce,
    enabled: !0
}, Cr = {
    write (e) {
        e.writeLine(",");
    }
};
var Pe = class {
    constructor(r){
        this.contents = r;
    }
    isUnderlined = !1;
    color = (r)=>r;
    underline() {
        return this.isUnderlined = !0, this;
    }
    setColor(r) {
        return this.color = r, this;
    }
    write(r) {
        let t = r.getCurrentLineLength();
        r.write(this.color(this.contents)), this.isUnderlined && r.afterNextNewline(()=>{
            r.write(" ".repeat(t)).writeLine(this.color("~".repeat(this.contents.length)));
        });
    }
};
var ze = class {
    hasError = !1;
    markAsError() {
        return this.hasError = !0, this;
    }
};
var Ir = class extends ze {
    items = [];
    addItem(r) {
        return this.items.push(new Rn(r)), this;
    }
    getField(r) {
        return this.items[r];
    }
    getPrintWidth() {
        return this.items.length === 0 ? 2 : Math.max(...this.items.map((t)=>t.value.getPrintWidth())) + 2;
    }
    write(r) {
        if (this.items.length === 0) {
            this.writeEmpty(r);
            return;
        }
        this.writeWithItems(r);
    }
    writeEmpty(r) {
        let t = new Pe("[]");
        this.hasError && t.setColor(r.context.colors.red).underline(), r.write(t);
    }
    writeWithItems(r) {
        let { colors: t } = r.context;
        r.writeLine("[").withIndent(()=>r.writeJoined(Cr, this.items).newLine()).write("]"), this.hasError && r.afterNextNewline(()=>{
            r.writeLine(t.red("~".repeat(this.getPrintWidth())));
        });
    }
    asObject() {}
};
var Dr = class e extends ze {
    fields = {};
    suggestions = [];
    addField(r) {
        this.fields[r.name] = r;
    }
    addSuggestion(r) {
        this.suggestions.push(r);
    }
    getField(r) {
        return this.fields[r];
    }
    getDeepField(r) {
        let [t, ...n] = r, i = this.getField(t);
        if (!i) return;
        let o = i;
        for (let s of n){
            let a;
            if (o.value instanceof e ? a = o.value.getField(s) : o.value instanceof Ir && (a = o.value.getField(Number(s))), !a) return;
            o = a;
        }
        return o;
    }
    getDeepFieldValue(r) {
        return r.length === 0 ? this : this.getDeepField(r)?.value;
    }
    hasField(r) {
        return !!this.getField(r);
    }
    removeAllFields() {
        this.fields = {};
    }
    removeField(r) {
        delete this.fields[r];
    }
    getFields() {
        return this.fields;
    }
    isEmpty() {
        return Object.keys(this.fields).length === 0;
    }
    getFieldValue(r) {
        return this.getField(r)?.value;
    }
    getDeepSubSelectionValue(r) {
        let t = this;
        for (let n of r){
            if (!(t instanceof e)) return;
            let i = t.getSubSelectionValue(n);
            if (!i) return;
            t = i;
        }
        return t;
    }
    getDeepSelectionParent(r) {
        let t = this.getSelectionParent();
        if (!t) return;
        let n = t;
        for (let i of r){
            let o = n.value.getFieldValue(i);
            if (!o || !(o instanceof e)) return;
            let s = o.getSelectionParent();
            if (!s) return;
            n = s;
        }
        return n;
    }
    getSelectionParent() {
        let r = this.getField("select")?.value.asObject();
        if (r) return {
            kind: "select",
            value: r
        };
        let t = this.getField("include")?.value.asObject();
        if (t) return {
            kind: "include",
            value: t
        };
    }
    getSubSelectionValue(r) {
        return this.getSelectionParent()?.value.fields[r].value;
    }
    getPrintWidth() {
        let r = Object.values(this.fields);
        return r.length == 0 ? 2 : Math.max(...r.map((n)=>n.getPrintWidth())) + 2;
    }
    write(r) {
        let t = Object.values(this.fields);
        if (t.length === 0 && this.suggestions.length === 0) {
            this.writeEmpty(r);
            return;
        }
        this.writeWithContents(r, t);
    }
    asObject() {
        return this;
    }
    writeEmpty(r) {
        let t = new Pe("{}");
        this.hasError && t.setColor(r.context.colors.red).underline(), r.write(t);
    }
    writeWithContents(r, t) {
        r.writeLine("{").withIndent(()=>{
            r.writeJoined(Cr, [
                ...t,
                ...this.suggestions
            ]).newLine();
        }), r.write("}"), this.hasError && r.afterNextNewline(()=>{
            r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
        });
    }
};
var Q = class extends ze {
    constructor(t){
        super();
        this.text = t;
    }
    getPrintWidth() {
        return this.text.length;
    }
    write(t) {
        let n = new Pe(this.text);
        this.hasError && n.underline().setColor(t.context.colors.red), t.write(n);
    }
    asObject() {}
};
var pt = class {
    fields = [];
    addField(r, t) {
        return this.fields.push({
            write (n) {
                let { green: i, dim: o } = n.context.colors;
                n.write(i(o(`${r}: ${t}`))).addMarginSymbol(i(o("+")));
            }
        }), this;
    }
    write(r) {
        let { colors: { green: t } } = r.context;
        r.writeLine(t("{")).withIndent(()=>{
            r.writeJoined(Cr, this.fields).newLine();
        }).write(t("}")).addMarginSymbol(t("+"));
    }
};
function Sn(e, r, t) {
    switch(e.kind){
        case "MutuallyExclusiveFields":
            Ad(e, r);
            break;
        case "IncludeOnScalar":
            Cd(e, r);
            break;
        case "EmptySelection":
            Id(e, r, t);
            break;
        case "UnknownSelectionField":
            _d(e, r);
            break;
        case "InvalidSelectionValue":
            Nd(e, r);
            break;
        case "UnknownArgument":
            Ld(e, r);
            break;
        case "UnknownInputField":
            Fd(e, r);
            break;
        case "RequiredArgumentMissing":
            Md(e, r);
            break;
        case "InvalidArgumentType":
            $d(e, r);
            break;
        case "InvalidArgumentValue":
            qd(e, r);
            break;
        case "ValueTooLarge":
            Vd(e, r);
            break;
        case "SomeFieldsMissing":
            jd(e, r);
            break;
        case "TooManyFieldsGiven":
            Bd(e, r);
            break;
        case "Union":
            na(e, r, t);
            break;
        default:
            throw new Error("not implemented: " + e.kind);
    }
}
function Ad(e, r) {
    let t = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    t && (t.getField(e.firstField)?.markAsError(), t.getField(e.secondField)?.markAsError()), r.addErrorMessage((n)=>`Please ${n.bold("either")} use ${n.green(`\`${e.firstField}\``)} or ${n.green(`\`${e.secondField}\``)}, but ${n.red("not both")} at the same time.`);
}
function Cd(e, r) {
    let [t, n] = Or(e.selectionPath), i = e.outputType, o = r.arguments.getDeepSelectionParent(t)?.value;
    if (o && (o.getField(n)?.markAsError(), i)) for (let s of i.fields)s.isRelation && o.addSuggestion(new le(s.name, "true"));
    r.addErrorMessage((s)=>{
        let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
        return i ? a += ` on model ${s.bold(i.name)}. ${dt(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
    });
}
function Id(e, r, t) {
    let n = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    if (n) {
        let i = n.getField("omit")?.value.asObject();
        if (i) {
            Dd(e, r, i);
            return;
        }
        if (n.hasField("select")) {
            Od(e, r);
            return;
        }
    }
    if (t?.[We(e.outputType.name)]) {
        kd(e, r);
        return;
    }
    r.addErrorMessage(()=>`Unknown field at "${e.selectionPath.join(".")} selection"`);
}
function Dd(e, r, t) {
    t.removeAllFields();
    for (let n of e.outputType.fields)t.addSuggestion(new le(n.name, "false"));
    r.addErrorMessage((n)=>`The ${n.red("omit")} statement includes every field of the model ${n.bold(e.outputType.name)}. At least one field must be included in the result`);
}
function Od(e, r) {
    let t = e.outputType, n = r.arguments.getDeepSelectionParent(e.selectionPath)?.value, i = n?.isEmpty() ?? !1;
    n && (n.removeAllFields(), pa(n, t)), r.addErrorMessage((o)=>i ? `The ${o.red("`select`")} statement for type ${o.bold(t.name)} must not be empty. ${dt(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(t.name)} needs ${o.bold("at least one truthy value")}.`);
}
function kd(e, r) {
    let t = new pt;
    for (let i of e.outputType.fields)i.isRelation || t.addField(i.name, "false");
    let n = new le("omit", t).makeRequired();
    if (e.selectionPath.length === 0) r.arguments.addSuggestion(n);
    else {
        let [i, o] = Or(e.selectionPath), a = r.arguments.getDeepSelectionParent(i)?.value.asObject()?.getField(o);
        if (a) {
            let l = a?.value.asObject() ?? new Dr;
            l.addSuggestion(n), a.value = l;
        }
    }
    r.addErrorMessage((i)=>`The global ${i.red("omit")} configuration excludes every field of the model ${i.bold(e.outputType.name)}. At least one field must be included in the result`);
}
function _d(e, r) {
    let t = da(e.selectionPath, r);
    if (t.parentKind !== "unknown") {
        t.field.markAsError();
        let n = t.parent;
        switch(t.parentKind){
            case "select":
                pa(n, e.outputType);
                break;
            case "include":
                Ud(n, e.outputType);
                break;
            case "omit":
                Gd(n, e.outputType);
                break;
        }
    }
    r.addErrorMessage((n)=>{
        let i = [
            `Unknown field ${n.red(`\`${t.fieldName}\``)}`
        ];
        return t.parentKind !== "unknown" && i.push(`for ${n.bold(t.parentKind)} statement`), i.push(`on model ${n.bold(`\`${e.outputType.name}\``)}.`), i.push(dt(n)), i.join(" ");
    });
}
function Nd(e, r) {
    let t = da(e.selectionPath, r);
    t.parentKind !== "unknown" && t.field.value.markAsError(), r.addErrorMessage((n)=>`Invalid value for selection field \`${n.red(t.fieldName)}\`: ${e.underlyingError}`);
}
function Ld(e, r) {
    let t = e.argumentPath[0], n = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    n && (n.getField(t)?.markAsError(), Qd(n, e.arguments)), r.addErrorMessage((i)=>ua(i, t, e.arguments.map((o)=>o.name)));
}
function Fd(e, r) {
    let [t, n] = Or(e.argumentPath), i = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    if (i) {
        i.getDeepField(e.argumentPath)?.markAsError();
        let o = i.getDeepFieldValue(t)?.asObject();
        o && ma(o, e.inputType);
    }
    r.addErrorMessage((o)=>ua(o, n, e.inputType.fields.map((s)=>s.name)));
}
function ua(e, r, t) {
    let n = [
        `Unknown argument \`${e.red(r)}\`.`
    ], i = Jd(r, t);
    return i && n.push(`Did you mean \`${e.green(i)}\`?`), t.length > 0 && n.push(dt(e)), n.join(" ");
}
function Md(e, r) {
    let t;
    r.addErrorMessage((l)=>t?.value instanceof Q && t.value.text === "null" ? `Argument \`${l.green(o)}\` must not be ${l.red("null")}.` : `Argument \`${l.green(o)}\` is missing.`);
    let n = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    if (!n) return;
    let [i, o] = Or(e.argumentPath), s = new pt, a = n.getDeepFieldValue(i)?.asObject();
    if (a) {
        if (t = a.getField(o), t && a.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
            for (let l of e.inputTypes[0].fields)s.addField(l.name, l.typeNames.join(" | "));
            a.addSuggestion(new le(o, s).makeRequired());
        } else {
            let l = e.inputTypes.map(ca).join(" | ");
            a.addSuggestion(new le(o, l).makeRequired());
        }
        if (e.dependentArgumentPath) {
            n.getDeepField(e.dependentArgumentPath)?.markAsError();
            let [, l] = Or(e.dependentArgumentPath);
            r.addErrorMessage((u)=>`Argument \`${u.green(o)}\` is required because argument \`${u.green(l)}\` was provided.`);
        }
    }
}
function ca(e) {
    return e.kind === "list" ? `${ca(e.elementType)}[]` : e.name;
}
function $d(e, r) {
    let t = e.argument.name, n = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), r.addErrorMessage((i)=>{
        let o = In("or", e.argument.typeNames.map((s)=>i.green(s)));
        return `Argument \`${i.bold(t)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
    });
}
function qd(e, r) {
    let t = e.argument.name, n = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), r.addErrorMessage((i)=>{
        let o = [
            `Invalid value for argument \`${i.bold(t)}\``
        ];
        if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push("."), e.argument.typeNames.length > 0) {
            let s = In("or", e.argument.typeNames.map((a)=>i.green(a)));
            o.push(` Expected ${s}.`);
        }
        return o.join("");
    });
}
function Vd(e, r) {
    let t = e.argument.name, n = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i;
    if (n) {
        let s = n.getDeepField(e.argumentPath)?.value;
        s?.markAsError(), s instanceof Q && (i = s.text);
    }
    r.addErrorMessage((o)=>{
        let s = [
            "Unable to fit value"
        ];
        return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(t)}\``), s.join(" ");
    });
}
function jd(e, r) {
    let t = e.argumentPath[e.argumentPath.length - 1], n = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    if (n) {
        let i = n.getDeepFieldValue(e.argumentPath)?.asObject();
        i && ma(i, e.inputType);
    }
    r.addErrorMessage((i)=>{
        let o = [
            `Argument \`${i.bold(t)}\` of type ${i.bold(e.inputType.name)} needs`
        ];
        return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${In("or", e.constraints.requiredFields.map((s)=>`\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(dt(i)), o.join(" ");
    });
}
function Bd(e, r) {
    let t = e.argumentPath[e.argumentPath.length - 1], n = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i = [];
    if (n) {
        let o = n.getDeepFieldValue(e.argumentPath)?.asObject();
        o && (o.markAsError(), i = Object.keys(o.getFields()));
    }
    r.addErrorMessage((o)=>{
        let s = [
            `Argument \`${o.bold(t)}\` of type ${o.bold(e.inputType.name)} needs`
        ];
        return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${In("and", i.map((a)=>o.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" ");
    });
}
function pa(e, r) {
    for (let t of r.fields)e.hasField(t.name) || e.addSuggestion(new le(t.name, "true"));
}
function Ud(e, r) {
    for (let t of r.fields)t.isRelation && !e.hasField(t.name) && e.addSuggestion(new le(t.name, "true"));
}
function Gd(e, r) {
    for (let t of r.fields)!e.hasField(t.name) && !t.isRelation && e.addSuggestion(new le(t.name, "true"));
}
function Qd(e, r) {
    for (let t of r)e.hasField(t.name) || e.addSuggestion(new le(t.name, t.typeNames.join(" | ")));
}
function da(e, r) {
    let [t, n] = Or(e), i = r.arguments.getDeepSubSelectionValue(t)?.asObject();
    if (!i) return {
        parentKind: "unknown",
        fieldName: n
    };
    let o = i.getFieldValue("select")?.asObject(), s = i.getFieldValue("include")?.asObject(), a = i.getFieldValue("omit")?.asObject(), l = o?.getField(n);
    return o && l ? {
        parentKind: "select",
        parent: o,
        field: l,
        fieldName: n
    } : (l = s?.getField(n), s && l ? {
        parentKind: "include",
        field: l,
        parent: s,
        fieldName: n
    } : (l = a?.getField(n), a && l ? {
        parentKind: "omit",
        field: l,
        parent: a,
        fieldName: n
    } : {
        parentKind: "unknown",
        fieldName: n
    }));
}
function ma(e, r) {
    if (r.kind === "object") for (let t of r.fields)e.hasField(t.name) || e.addSuggestion(new le(t.name, t.typeNames.join(" | ")));
}
function Or(e) {
    let r = [
        ...e
    ], t = r.pop();
    if (!t) throw new Error("unexpected empty path");
    return [
        r,
        t
    ];
}
function dt({ green: e, enabled: r }) {
    return "Available options are " + (r ? `listed in ${e("green")}` : "marked with ?") + ".";
}
function In(e, r) {
    if (r.length === 1) return r[0];
    let t = [
        ...r
    ], n = t.pop();
    return `${t.join(", ")} ${e} ${n}`;
}
var Wd = 3;
function Jd(e, r) {
    let t = 1 / 0, n;
    for (let i of r){
        let o = (0, la.default)(e, i);
        o > Wd || o < t && (t = o, n = i);
    }
    return n;
}
var mt = class {
    modelName;
    name;
    typeName;
    isList;
    isEnum;
    constructor(r, t, n, i, o){
        this.modelName = r, this.name = t, this.typeName = n, this.isList = i, this.isEnum = o;
    }
    _toGraphQLInputType() {
        let r = this.isList ? "List" : "", t = this.isEnum ? "Enum" : "";
        return `${r}${t}${this.typeName}FieldRefInput<${this.modelName}>`;
    }
};
function kr(e) {
    return e instanceof mt;
}
var Dn = Symbol(), Yi = new WeakMap, Me = class {
    constructor(r){
        r === Dn ? Yi.set(this, `Prisma.${this._getName()}`) : Yi.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
    }
    _getName() {
        return this.constructor.name;
    }
    toString() {
        return Yi.get(this);
    }
}, ft = class extends Me {
    _getNamespace() {
        return "NullTypes";
    }
}, gt = class extends ft {
    #e;
};
zi(gt, "DbNull");
var ht = class extends ft {
    #e;
};
zi(ht, "JsonNull");
var yt = class extends ft {
    #e;
};
zi(yt, "AnyNull");
var On = {
    classes: {
        DbNull: gt,
        JsonNull: ht,
        AnyNull: yt
    },
    instances: {
        DbNull: new gt(Dn),
        JsonNull: new ht(Dn),
        AnyNull: new yt(Dn)
    }
};
function zi(e, r) {
    Object.defineProperty(e, "name", {
        value: r,
        configurable: !0
    });
}
var fa = ": ", kn = class {
    constructor(r, t){
        this.name = r;
        this.value = t;
    }
    hasError = !1;
    markAsError() {
        this.hasError = !0;
    }
    getPrintWidth() {
        return this.name.length + this.value.getPrintWidth() + fa.length;
    }
    write(r) {
        let t = new Pe(this.name);
        this.hasError && t.underline().setColor(r.context.colors.red), r.write(t).write(fa).write(this.value);
    }
};
var Zi = class {
    arguments;
    errorMessages = [];
    constructor(r){
        this.arguments = r;
    }
    write(r) {
        r.write(this.arguments);
    }
    addErrorMessage(r) {
        this.errorMessages.push(r);
    }
    renderAllMessages(r) {
        return this.errorMessages.map((t)=>t(r)).join(`
`);
    }
};
function _r(e) {
    return new Zi(ga(e));
}
function ga(e) {
    let r = new Dr;
    for (let [t, n] of Object.entries(e)){
        let i = new kn(t, ha(n));
        r.addField(i);
    }
    return r;
}
function ha(e) {
    if (typeof e == "string") return new Q(JSON.stringify(e));
    if (typeof e == "number" || typeof e == "boolean") return new Q(String(e));
    if (typeof e == "bigint") return new Q(`${e}n`);
    if (e === null) return new Q("null");
    if (e === void 0) return new Q("undefined");
    if (Sr(e)) return new Q(`new Prisma.Decimal("${e.toFixed()}")`);
    if (e instanceof Uint8Array) return Buffer.isBuffer(e) ? new Q(`Buffer.alloc(${e.byteLength})`) : new Q(`new Uint8Array(${e.byteLength})`);
    if (e instanceof Date) {
        let r = mn(e) ? e.toISOString() : "Invalid Date";
        return new Q(`new Date("${r}")`);
    }
    return e instanceof Me ? new Q(`Prisma.${e._getName()}`) : kr(e) ? new Q(`prisma.${We(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? Kd(e) : typeof e == "object" ? ga(e) : new Q(Object.prototype.toString.call(e));
}
function Kd(e) {
    let r = new Ir;
    for (let t of e)r.addItem(ha(t));
    return r;
}
function _n(e, r) {
    let t = r === "pretty" ? aa : Cn, n = e.renderAllMessages(t), i = new Ar(0, {
        colors: t
    }).write(e).toString();
    return {
        message: n,
        args: i
    };
}
function Nn({ args: e, errors: r, errorFormat: t, callsite: n, originalMethod: i, clientVersion: o, globalOmit: s }) {
    let a = _r(e);
    for (let p of r)Sn(p, a, s);
    let { message: l, args: u } = _n(a, t), c = Tn({
        message: l,
        callsite: n,
        originalMethod: i,
        showColors: t === "pretty",
        callArguments: u
    });
    throw new Z(c, {
        clientVersion: o
    });
}
function Te(e) {
    return e.replace(/^./, (r)=>r.toLowerCase());
}
function ba(e, r, t) {
    let n = Te(t);
    return !r.result || !(r.result.$allModels || r.result[n]) ? e : Hd({
        ...e,
        ...ya(r.name, e, r.result.$allModels),
        ...ya(r.name, e, r.result[n])
    });
}
function Hd(e) {
    let r = new we, t = (n, i)=>r.getOrCreate(n, ()=>i.has(n) ? [
                n
            ] : (i.add(n), e[n] ? e[n].needs.flatMap((o)=>t(o, i)) : [
                n
            ]));
    return pn(e, (n)=>({
            ...n,
            needs: t(n.name, new Set)
        }));
}
function ya(e, r, t) {
    return t ? pn(t, ({ needs: n, compute: i }, o)=>({
            name: o,
            needs: n ? Object.keys(n).filter((s)=>n[s]) : [],
            compute: Yd(r, o, i)
        })) : {};
}
function Yd(e, r, t) {
    let n = e?.[r]?.compute;
    return n ? (i)=>t({
            ...i,
            [r]: n(i)
        }) : t;
}
function Ea(e, r) {
    if (!r) return e;
    let t = {
        ...e
    };
    for (let n of Object.values(r))if (e[n.name]) for (let i of n.needs)t[i] = !0;
    return t;
}
function wa(e, r) {
    if (!r) return e;
    let t = {
        ...e
    };
    for (let n of Object.values(r))if (!e[n.name]) for (let i of n.needs)delete t[i];
    return t;
}
var Ln = class {
    constructor(r, t){
        this.extension = r;
        this.previous = t;
    }
    computedFieldsCache = new we;
    modelExtensionsCache = new we;
    queryCallbacksCache = new we;
    clientExtensions = lt(()=>this.extension.client ? {
            ...this.previous?.getAllClientExtensions(),
            ...this.extension.client
        } : this.previous?.getAllClientExtensions());
    batchCallbacks = lt(()=>{
        let r = this.previous?.getAllBatchQueryCallbacks() ?? [], t = this.extension.query?.$__internalBatch;
        return t ? r.concat(t) : r;
    });
    getAllComputedFields(r) {
        return this.computedFieldsCache.getOrCreate(r, ()=>ba(this.previous?.getAllComputedFields(r), this.extension, r));
    }
    getAllClientExtensions() {
        return this.clientExtensions.get();
    }
    getAllModelExtensions(r) {
        return this.modelExtensionsCache.getOrCreate(r, ()=>{
            let t = Te(r);
            return !this.extension.model || !(this.extension.model[t] || this.extension.model.$allModels) ? this.previous?.getAllModelExtensions(r) : {
                ...this.previous?.getAllModelExtensions(r),
                ...this.extension.model.$allModels,
                ...this.extension.model[t]
            };
        });
    }
    getAllQueryCallbacks(r, t) {
        return this.queryCallbacksCache.getOrCreate(`${r}:${t}`, ()=>{
            let n = this.previous?.getAllQueryCallbacks(r, t) ?? [], i = [], o = this.extension.query;
            return !o || !(o[r] || o.$allModels || o[t] || o.$allOperations) ? n : (o[r] !== void 0 && (o[r][t] !== void 0 && i.push(o[r][t]), o[r].$allOperations !== void 0 && i.push(o[r].$allOperations)), r !== "$none" && o.$allModels !== void 0 && (o.$allModels[t] !== void 0 && i.push(o.$allModels[t]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[t] !== void 0 && i.push(o[t]), o.$allOperations !== void 0 && i.push(o.$allOperations), n.concat(i));
        });
    }
    getAllBatchQueryCallbacks() {
        return this.batchCallbacks.get();
    }
}, Nr = class e {
    constructor(r){
        this.head = r;
    }
    static empty() {
        return new e;
    }
    static single(r) {
        return new e(new Ln(r));
    }
    isEmpty() {
        return this.head === void 0;
    }
    append(r) {
        return new e(new Ln(r, this.head));
    }
    getAllComputedFields(r) {
        return this.head?.getAllComputedFields(r);
    }
    getAllClientExtensions() {
        return this.head?.getAllClientExtensions();
    }
    getAllModelExtensions(r) {
        return this.head?.getAllModelExtensions(r);
    }
    getAllQueryCallbacks(r, t) {
        return this.head?.getAllQueryCallbacks(r, t) ?? [];
    }
    getAllBatchQueryCallbacks() {
        return this.head?.getAllBatchQueryCallbacks() ?? [];
    }
};
var Fn = class {
    constructor(r){
        this.name = r;
    }
};
function xa(e) {
    return e instanceof Fn;
}
function va(e) {
    return new Fn(e);
}
var Pa = Symbol(), bt = class {
    constructor(r){
        if (r !== Pa) throw new Error("Skip instance can not be constructed directly");
    }
    ifUndefined(r) {
        return r === void 0 ? Mn : r;
    }
}, Mn = new bt(Pa);
function Se(e) {
    return e instanceof bt;
}
var zd = {
    findUnique: "findUnique",
    findUniqueOrThrow: "findUniqueOrThrow",
    findFirst: "findFirst",
    findFirstOrThrow: "findFirstOrThrow",
    findMany: "findMany",
    count: "aggregate",
    create: "createOne",
    createMany: "createMany",
    createManyAndReturn: "createManyAndReturn",
    update: "updateOne",
    updateMany: "updateMany",
    updateManyAndReturn: "updateManyAndReturn",
    upsert: "upsertOne",
    delete: "deleteOne",
    deleteMany: "deleteMany",
    executeRaw: "executeRaw",
    queryRaw: "queryRaw",
    aggregate: "aggregate",
    groupBy: "groupBy",
    runCommandRaw: "runCommandRaw",
    findRaw: "findRaw",
    aggregateRaw: "aggregateRaw"
}, Ta = "explicitly `undefined` values are not allowed";
function $n({ modelName: e, action: r, args: t, runtimeDataModel: n, extensions: i = Nr.empty(), callsite: o, clientMethod: s, errorFormat: a, clientVersion: l, previewFeatures: u, globalOmit: c }) {
    let p = new Xi({
        runtimeDataModel: n,
        modelName: e,
        action: r,
        rootArgs: t,
        callsite: o,
        extensions: i,
        selectionPath: [],
        argumentPath: [],
        originalMethod: s,
        errorFormat: a,
        clientVersion: l,
        previewFeatures: u,
        globalOmit: c
    });
    return {
        modelName: e,
        action: zd[r],
        query: Et(t, p)
    };
}
function Et({ select: e, include: r, ...t } = {}, n) {
    let i = t.omit;
    return delete t.omit, {
        arguments: Ra(t, n),
        selection: Zd(e, r, i, n)
    };
}
function Zd(e, r, t, n) {
    return e ? (r ? n.throwValidationError({
        kind: "MutuallyExclusiveFields",
        firstField: "include",
        secondField: "select",
        selectionPath: n.getSelectionPath()
    }) : t && n.throwValidationError({
        kind: "MutuallyExclusiveFields",
        firstField: "omit",
        secondField: "select",
        selectionPath: n.getSelectionPath()
    }), tm(e, n)) : Xd(n, r, t);
}
function Xd(e, r, t) {
    let n = {};
    return e.modelOrType && !e.isRawAction() && (n.$composites = !0, n.$scalars = !0), r && em(n, r, e), rm(n, t, e), n;
}
function em(e, r, t) {
    for (let [n, i] of Object.entries(r)){
        if (Se(i)) continue;
        let o = t.nestSelection(n);
        if (eo(i, o), i === !1 || i === void 0) {
            e[n] = !1;
            continue;
        }
        let s = t.findField(n);
        if (s && s.kind !== "object" && t.throwValidationError({
            kind: "IncludeOnScalar",
            selectionPath: t.getSelectionPath().concat(n),
            outputType: t.getOutputTypeDescription()
        }), s) {
            e[n] = Et(i === !0 ? {} : i, o);
            continue;
        }
        if (i === !0) {
            e[n] = !0;
            continue;
        }
        e[n] = Et(i, o);
    }
}
function rm(e, r, t) {
    let n = t.getComputedFields(), i = {
        ...t.getGlobalOmit(),
        ...r
    }, o = wa(i, n);
    for (let [s, a] of Object.entries(o)){
        if (Se(a)) continue;
        eo(a, t.nestSelection(s));
        let l = t.findField(s);
        n?.[s] && !l || (e[s] = !a);
    }
}
function tm(e, r) {
    let t = {}, n = r.getComputedFields(), i = Ea(e, n);
    for (let [o, s] of Object.entries(i)){
        if (Se(s)) continue;
        let a = r.nestSelection(o);
        eo(s, a);
        let l = r.findField(o);
        if (!(n?.[o] && !l)) {
            if (s === !1 || s === void 0 || Se(s)) {
                t[o] = !1;
                continue;
            }
            if (s === !0) {
                l?.kind === "object" ? t[o] = Et({}, a) : t[o] = !0;
                continue;
            }
            t[o] = Et(s, a);
        }
    }
    return t;
}
function Sa(e, r) {
    if (e === null) return null;
    if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return e;
    if (typeof e == "bigint") return {
        $type: "BigInt",
        value: String(e)
    };
    if (vr(e)) {
        if (mn(e)) return {
            $type: "DateTime",
            value: e.toISOString()
        };
        r.throwValidationError({
            kind: "InvalidArgumentValue",
            selectionPath: r.getSelectionPath(),
            argumentPath: r.getArgumentPath(),
            argument: {
                name: r.getArgumentName(),
                typeNames: [
                    "Date"
                ]
            },
            underlyingError: "Provided Date object is invalid"
        });
    }
    if (xa(e)) return {
        $type: "Param",
        value: e.name
    };
    if (kr(e)) return {
        $type: "FieldRef",
        value: {
            _ref: e.name,
            _container: e.modelName
        }
    };
    if (Array.isArray(e)) return nm(e, r);
    if (ArrayBuffer.isView(e)) {
        let { buffer: t, byteOffset: n, byteLength: i } = e;
        return {
            $type: "Bytes",
            value: Buffer.from(t, n, i).toString("base64")
        };
    }
    if (im(e)) return e.values;
    if (Sr(e)) return {
        $type: "Decimal",
        value: e.toFixed()
    };
    if (e instanceof Me) {
        if (e !== On.instances[e._getName()]) throw new Error("Invalid ObjectEnumValue");
        return {
            $type: "Enum",
            value: e._getName()
        };
    }
    if (om(e)) return e.toJSON();
    if (typeof e == "object") return Ra(e, r);
    r.throwValidationError({
        kind: "InvalidArgumentValue",
        selectionPath: r.getSelectionPath(),
        argumentPath: r.getArgumentPath(),
        argument: {
            name: r.getArgumentName(),
            typeNames: []
        },
        underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it`
    });
}
function Ra(e, r) {
    if (e.$type) return {
        $type: "Raw",
        value: e
    };
    let t = {};
    for(let n in e){
        let i = e[n], o = r.nestArgument(n);
        Se(i) || (i !== void 0 ? t[n] = Sa(i, o) : r.isPreviewFeatureOn("strictUndefinedChecks") && r.throwValidationError({
            kind: "InvalidArgumentValue",
            argumentPath: o.getArgumentPath(),
            selectionPath: r.getSelectionPath(),
            argument: {
                name: r.getArgumentName(),
                typeNames: []
            },
            underlyingError: Ta
        }));
    }
    return t;
}
function nm(e, r) {
    let t = [];
    for(let n = 0; n < e.length; n++){
        let i = r.nestArgument(String(n)), o = e[n];
        if (o === void 0 || Se(o)) {
            let s = o === void 0 ? "undefined" : "Prisma.skip";
            r.throwValidationError({
                kind: "InvalidArgumentValue",
                selectionPath: i.getSelectionPath(),
                argumentPath: i.getArgumentPath(),
                argument: {
                    name: `${r.getArgumentName()}[${n}]`,
                    typeNames: []
                },
                underlyingError: `Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values`
            });
        }
        t.push(Sa(o, i));
    }
    return t;
}
function im(e) {
    return typeof e == "object" && e !== null && e.__prismaRawParameters__ === !0;
}
function om(e) {
    return typeof e == "object" && e !== null && typeof e.toJSON == "function";
}
function eo(e, r) {
    e === void 0 && r.isPreviewFeatureOn("strictUndefinedChecks") && r.throwValidationError({
        kind: "InvalidSelectionValue",
        selectionPath: r.getSelectionPath(),
        underlyingError: Ta
    });
}
var Xi = class e {
    constructor(r){
        this.params = r;
        this.params.modelName && (this.modelOrType = this.params.runtimeDataModel.models[this.params.modelName] ?? this.params.runtimeDataModel.types[this.params.modelName]);
    }
    modelOrType;
    throwValidationError(r) {
        Nn({
            errors: [
                r
            ],
            originalMethod: this.params.originalMethod,
            args: this.params.rootArgs ?? {},
            callsite: this.params.callsite,
            errorFormat: this.params.errorFormat,
            clientVersion: this.params.clientVersion,
            globalOmit: this.params.globalOmit
        });
    }
    getSelectionPath() {
        return this.params.selectionPath;
    }
    getArgumentPath() {
        return this.params.argumentPath;
    }
    getArgumentName() {
        return this.params.argumentPath[this.params.argumentPath.length - 1];
    }
    getOutputTypeDescription() {
        if (!(!this.params.modelName || !this.modelOrType)) return {
            name: this.params.modelName,
            fields: this.modelOrType.fields.map((r)=>({
                    name: r.name,
                    typeName: "boolean",
                    isRelation: r.kind === "object"
                }))
        };
    }
    isRawAction() {
        return [
            "executeRaw",
            "queryRaw",
            "runCommandRaw",
            "findRaw",
            "aggregateRaw"
        ].includes(this.params.action);
    }
    isPreviewFeatureOn(r) {
        return this.params.previewFeatures.includes(r);
    }
    getComputedFields() {
        if (this.params.modelName) return this.params.extensions.getAllComputedFields(this.params.modelName);
    }
    findField(r) {
        return this.modelOrType?.fields.find((t)=>t.name === r);
    }
    nestSelection(r) {
        let t = this.findField(r), n = t?.kind === "object" ? t.type : void 0;
        return new e({
            ...this.params,
            modelName: n,
            selectionPath: this.params.selectionPath.concat(r)
        });
    }
    getGlobalOmit() {
        return this.params.modelName && this.shouldApplyGlobalOmit() ? this.params.globalOmit?.[We(this.params.modelName)] ?? {} : {};
    }
    shouldApplyGlobalOmit() {
        switch(this.params.action){
            case "findFirst":
            case "findFirstOrThrow":
            case "findUniqueOrThrow":
            case "findMany":
            case "upsert":
            case "findUnique":
            case "createManyAndReturn":
            case "create":
            case "update":
            case "updateManyAndReturn":
            case "delete":
                return !0;
            case "executeRaw":
            case "aggregateRaw":
            case "runCommandRaw":
            case "findRaw":
            case "createMany":
            case "deleteMany":
            case "groupBy":
            case "updateMany":
            case "count":
            case "aggregate":
            case "queryRaw":
                return !1;
            default:
                ar(this.params.action, "Unknown action");
        }
    }
    nestArgument(r) {
        return new e({
            ...this.params,
            argumentPath: this.params.argumentPath.concat(r)
        });
    }
};
function Aa(e) {
    if (!e._hasPreviewFlag("metrics")) throw new Z("`metrics` preview feature must be enabled in order to access metrics API", {
        clientVersion: e._clientVersion
    });
}
var Lr = class {
    _client;
    constructor(r){
        this._client = r;
    }
    prometheus(r) {
        return Aa(this._client), this._client._engine.metrics({
            format: "prometheus",
            ...r
        });
    }
    json(r) {
        return Aa(this._client), this._client._engine.metrics({
            format: "json",
            ...r
        });
    }
};
function Ca(e, r) {
    let t = lt(()=>sm(r));
    Object.defineProperty(e, "dmmf", {
        get: ()=>t.get()
    });
}
function sm(e) {
    return {
        datamodel: {
            models: ro(e.models),
            enums: ro(e.enums),
            types: ro(e.types)
        }
    };
}
function ro(e) {
    return Object.entries(e).map(([r, t])=>({
            name: r,
            ...t
        }));
}
var to = new WeakMap, qn = "$$PrismaTypedSql", wt = class {
    constructor(r, t){
        to.set(this, {
            sql: r,
            values: t
        }), Object.defineProperty(this, qn, {
            value: qn
        });
    }
    get sql() {
        return to.get(this).sql;
    }
    get values() {
        return to.get(this).values;
    }
};
function Ia(e) {
    return (...r)=>new wt(e, r);
}
function Vn(e) {
    return e != null && e[qn] === qn;
}
var cu = O(Ti());
var pu = __turbopack_context__.r("[externals]/node:async_hooks [external] (node:async_hooks, cjs)"), du = __turbopack_context__.r("[externals]/node:events [external] (node:events, cjs)"), mu = O(__turbopack_context__.r("[externals]/node:fs [external] (node:fs, cjs)")), ri = O(__turbopack_context__.r("[externals]/node:path [external] (node:path, cjs)"));
var ie = class e {
    constructor(r, t){
        if (r.length - 1 !== t.length) throw r.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${r.length} strings to have ${r.length - 1} values`);
        let n = t.reduce((s, a)=>s + (a instanceof e ? a.values.length : 1), 0);
        this.values = new Array(n), this.strings = new Array(n + 1), this.strings[0] = r[0];
        let i = 0, o = 0;
        for(; i < t.length;){
            let s = t[i++], a = r[i];
            if (s instanceof e) {
                this.strings[o] += s.strings[0];
                let l = 0;
                for(; l < s.values.length;)this.values[o++] = s.values[l++], this.strings[o] = s.strings[l];
                this.strings[o] += a;
            } else this.values[o++] = s, this.strings[o] = a;
        }
    }
    get sql() {
        let r = this.strings.length, t = 1, n = this.strings[0];
        for(; t < r;)n += `?${this.strings[t++]}`;
        return n;
    }
    get statement() {
        let r = this.strings.length, t = 1, n = this.strings[0];
        for(; t < r;)n += `:${t}${this.strings[t++]}`;
        return n;
    }
    get text() {
        let r = this.strings.length, t = 1, n = this.strings[0];
        for(; t < r;)n += `$${t}${this.strings[t++]}`;
        return n;
    }
    inspect() {
        return {
            sql: this.sql,
            statement: this.statement,
            text: this.text,
            values: this.values
        };
    }
};
function Da(e, r = ",", t = "", n = "") {
    if (e.length === 0) throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
    return new ie([
        t,
        ...Array(e.length - 1).fill(r),
        n
    ], e);
}
function no(e) {
    return new ie([
        e
    ], []);
}
var Oa = no("");
function io(e, ...r) {
    return new ie(e, r);
}
function xt(e) {
    return {
        getKeys () {
            return Object.keys(e);
        },
        getPropertyValue (r) {
            return e[r];
        }
    };
}
function re(e, r) {
    return {
        getKeys () {
            return [
                e
            ];
        },
        getPropertyValue () {
            return r();
        }
    };
}
function lr(e) {
    let r = new we;
    return {
        getKeys () {
            return e.getKeys();
        },
        getPropertyValue (t) {
            return r.getOrCreate(t, ()=>e.getPropertyValue(t));
        },
        getPropertyDescriptor (t) {
            return e.getPropertyDescriptor?.(t);
        }
    };
}
var jn = {
    enumerable: !0,
    configurable: !0,
    writable: !0
};
function Bn(e) {
    let r = new Set(e);
    return {
        getPrototypeOf: ()=>Object.prototype,
        getOwnPropertyDescriptor: ()=>jn,
        has: (t, n)=>r.has(n),
        set: (t, n, i)=>r.add(n) && Reflect.set(t, n, i),
        ownKeys: ()=>[
                ...r
            ]
    };
}
var ka = Symbol.for("nodejs.util.inspect.custom");
function he(e, r) {
    let t = am(r), n = new Set, i = new Proxy(e, {
        get (o, s) {
            if (n.has(s)) return o[s];
            let a = t.get(s);
            return a ? a.getPropertyValue(s) : o[s];
        },
        has (o, s) {
            if (n.has(s)) return !0;
            let a = t.get(s);
            return a ? a.has?.(s) ?? !0 : Reflect.has(o, s);
        },
        ownKeys (o) {
            let s = _a(Reflect.ownKeys(o), t), a = _a(Array.from(t.keys()), t);
            return [
                ...new Set([
                    ...s,
                    ...a,
                    ...n
                ])
            ];
        },
        set (o, s, a) {
            return t.get(s)?.getPropertyDescriptor?.(s)?.writable === !1 ? !1 : (n.add(s), Reflect.set(o, s, a));
        },
        getOwnPropertyDescriptor (o, s) {
            let a = Reflect.getOwnPropertyDescriptor(o, s);
            if (a && !a.configurable) return a;
            let l = t.get(s);
            return l ? l.getPropertyDescriptor ? {
                ...jn,
                ...l?.getPropertyDescriptor(s)
            } : jn : a;
        },
        defineProperty (o, s, a) {
            return n.add(s), Reflect.defineProperty(o, s, a);
        },
        getPrototypeOf: ()=>Object.prototype
    });
    return i[ka] = function() {
        let o = {
            ...this
        };
        return delete o[ka], o;
    }, i;
}
function am(e) {
    let r = new Map;
    for (let t of e){
        let n = t.getKeys();
        for (let i of n)r.set(i, t);
    }
    return r;
}
function _a(e, r) {
    return e.filter((t)=>r.get(t)?.has?.(t) ?? !0);
}
function Fr(e) {
    return {
        getKeys () {
            return e;
        },
        has () {
            return !1;
        },
        getPropertyValue () {}
    };
}
function Mr(e, r) {
    return {
        batch: e,
        transaction: r?.kind === "batch" ? {
            isolationLevel: r.options.isolationLevel
        } : void 0
    };
}
function Na(e) {
    if (e === void 0) return "";
    let r = _r(e);
    return new Ar(0, {
        colors: Cn
    }).write(r).toString();
}
var lm = "P2037";
function $r({ error: e, user_facing_error: r }, t, n) {
    return r.error_code ? new z(um(r, n), {
        code: r.error_code,
        clientVersion: t,
        meta: r.meta,
        batchRequestIdx: r.batch_request_idx
    }) : new V(e, {
        clientVersion: t,
        batchRequestIdx: r.batch_request_idx
    });
}
function um(e, r) {
    let t = e.message;
    return (r === "postgresql" || r === "postgres" || r === "mysql") && e.error_code === lm && (t += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`), t;
}
var vt = "<unknown>";
function La(e) {
    var r = e.split(`
`);
    return r.reduce(function(t, n) {
        var i = dm(n) || fm(n) || ym(n) || xm(n) || Em(n);
        return i && t.push(i), t;
    }, []);
}
var cm = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|rsc|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, pm = /\((\S*)(?::(\d+))(?::(\d+))\)/;
function dm(e) {
    var r = cm.exec(e);
    if (!r) return null;
    var t = r[2] && r[2].indexOf("native") === 0, n = r[2] && r[2].indexOf("eval") === 0, i = pm.exec(r[2]);
    return n && i != null && (r[2] = i[1], r[3] = i[2], r[4] = i[3]), {
        file: t ? null : r[2],
        methodName: r[1] || vt,
        arguments: t ? [
            r[2]
        ] : [],
        lineNumber: r[3] ? +r[3] : null,
        column: r[4] ? +r[4] : null
    };
}
var mm = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|rsc|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function fm(e) {
    var r = mm.exec(e);
    return r ? {
        file: r[2],
        methodName: r[1] || vt,
        arguments: [],
        lineNumber: +r[3],
        column: r[4] ? +r[4] : null
    } : null;
}
var gm = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|rsc|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, hm = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function ym(e) {
    var r = gm.exec(e);
    if (!r) return null;
    var t = r[3] && r[3].indexOf(" > eval") > -1, n = hm.exec(r[3]);
    return t && n != null && (r[3] = n[1], r[4] = n[2], r[5] = null), {
        file: r[3],
        methodName: r[1] || vt,
        arguments: r[2] ? r[2].split(",") : [],
        lineNumber: r[4] ? +r[4] : null,
        column: r[5] ? +r[5] : null
    };
}
var bm = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
function Em(e) {
    var r = bm.exec(e);
    return r ? {
        file: r[3],
        methodName: r[1] || vt,
        arguments: [],
        lineNumber: +r[4],
        column: r[5] ? +r[5] : null
    } : null;
}
var wm = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function xm(e) {
    var r = wm.exec(e);
    return r ? {
        file: r[2],
        methodName: r[1] || vt,
        arguments: [],
        lineNumber: +r[3],
        column: r[4] ? +r[4] : null
    } : null;
}
var oo = class {
    getLocation() {
        return null;
    }
}, so = class {
    _error;
    constructor(){
        this._error = new Error;
    }
    getLocation() {
        let r = this._error.stack;
        if (!r) return null;
        let n = La(r).find((i)=>{
            if (!i.file) return !1;
            let o = Li(i.file);
            return o !== "<anonymous>" && !o.includes("@prisma") && !o.includes("/packages/client/src/runtime/") && !o.endsWith("/runtime/binary.js") && !o.endsWith("/runtime/library.js") && !o.endsWith("/runtime/edge.js") && !o.endsWith("/runtime/edge-esm.js") && !o.startsWith("internal/") && !i.methodName.includes("new ") && !i.methodName.includes("getCallSite") && !i.methodName.includes("Proxy.") && i.methodName.split(".").length < 4;
        });
        return !n || !n.file ? null : {
            fileName: n.file,
            lineNumber: n.lineNumber,
            columnNumber: n.column
        };
    }
};
function Ze(e) {
    return e === "minimal" ? typeof $EnabledCallSite == "function" && e !== "minimal" ? new $EnabledCallSite : new oo : new so;
}
var Fa = {
    _avg: !0,
    _count: !0,
    _sum: !0,
    _min: !0,
    _max: !0
};
function qr(e = {}) {
    let r = Pm(e);
    return Object.entries(r).reduce((n, [i, o])=>(Fa[i] !== void 0 ? n.select[i] = {
            select: o
        } : n[i] = o, n), {
        select: {}
    });
}
function Pm(e = {}) {
    return typeof e._count == "boolean" ? {
        ...e,
        _count: {
            _all: e._count
        }
    } : e;
}
function Un(e = {}) {
    return (r)=>(typeof e._count == "boolean" && (r._count = r._count._all), r);
}
function Ma(e, r) {
    let t = Un(e);
    return r({
        action: "aggregate",
        unpacker: t,
        argsMapper: qr
    })(e);
}
function Tm(e = {}) {
    let { select: r, ...t } = e;
    return typeof r == "object" ? qr({
        ...t,
        _count: r
    }) : qr({
        ...t,
        _count: {
            _all: !0
        }
    });
}
function Sm(e = {}) {
    return typeof e.select == "object" ? (r)=>Un(e)(r)._count : (r)=>Un(e)(r)._count._all;
}
function $a(e, r) {
    return r({
        action: "count",
        unpacker: Sm(e),
        argsMapper: Tm
    })(e);
}
function Rm(e = {}) {
    let r = qr(e);
    if (Array.isArray(r.by)) for (let t of r.by)typeof t == "string" && (r.select[t] = !0);
    else typeof r.by == "string" && (r.select[r.by] = !0);
    return r;
}
function Am(e = {}) {
    return (r)=>(typeof e?._count == "boolean" && r.forEach((t)=>{
            t._count = t._count._all;
        }), r);
}
function qa(e, r) {
    return r({
        action: "groupBy",
        unpacker: Am(e),
        argsMapper: Rm
    })(e);
}
function Va(e, r, t) {
    if (r === "aggregate") return (n)=>Ma(n, t);
    if (r === "count") return (n)=>$a(n, t);
    if (r === "groupBy") return (n)=>qa(n, t);
}
function ja(e, r) {
    let t = r.fields.filter((i)=>!i.relationName), n = _s(t, "name");
    return new Proxy({}, {
        get (i, o) {
            if (o in i || typeof o == "symbol") return i[o];
            let s = n[o];
            if (s) return new mt(e, o, s.type, s.isList, s.kind === "enum");
        },
        ...Bn(Object.keys(n))
    });
}
var Ba = (e)=>Array.isArray(e) ? e : e.split("."), ao = (e, r)=>Ba(r).reduce((t, n)=>t && t[n], e), Ua = (e, r, t)=>Ba(r).reduceRight((n, i, o, s)=>Object.assign({}, ao(e, s.slice(0, o)), {
            [i]: n
        }), t);
function Cm(e, r) {
    return e === void 0 || r === void 0 ? [] : [
        ...r,
        "select",
        e
    ];
}
function Im(e, r, t) {
    return r === void 0 ? e ?? {} : Ua(r, t, e || !0);
}
function lo(e, r, t, n, i, o) {
    let a = e._runtimeDataModel.models[r].fields.reduce((l, u)=>({
            ...l,
            [u.name]: u
        }), {});
    return (l)=>{
        let u = Ze(e._errorFormat), c = Cm(n, i), p = Im(l, o, c), d = t({
            dataPath: c,
            callsite: u
        })(p), f = Dm(e, r);
        return new Proxy(d, {
            get (h, g) {
                if (!f.includes(g)) return h[g];
                let T = [
                    a[g].type,
                    t,
                    g
                ], S = [
                    c,
                    p
                ];
                return lo(e, ...T, ...S);
            },
            ...Bn([
                ...f,
                ...Object.getOwnPropertyNames(d)
            ])
        });
    };
}
function Dm(e, r) {
    return e._runtimeDataModel.models[r].fields.filter((t)=>t.kind === "object").map((t)=>t.name);
}
var Om = [
    "findUnique",
    "findUniqueOrThrow",
    "findFirst",
    "findFirstOrThrow",
    "create",
    "update",
    "upsert",
    "delete"
], km = [
    "aggregate",
    "count",
    "groupBy"
];
function uo(e, r) {
    let t = e._extensions.getAllModelExtensions(r) ?? {}, n = [
        _m(e, r),
        Lm(e, r),
        xt(t),
        re("name", ()=>r),
        re("$name", ()=>r),
        re("$parent", ()=>e._appliedParent)
    ];
    return he({}, n);
}
function _m(e, r) {
    let t = Te(r), n = Object.keys(Rr).concat("count");
    return {
        getKeys () {
            return n;
        },
        getPropertyValue (i) {
            let o = i, s = (a)=>(l)=>{
                    let u = Ze(e._errorFormat);
                    return e._createPrismaPromise((c)=>{
                        let p = {
                            args: l,
                            dataPath: [],
                            action: o,
                            model: r,
                            clientMethod: `${t}.${i}`,
                            jsModelName: t,
                            transaction: c,
                            callsite: u
                        };
                        return e._request({
                            ...p,
                            ...a
                        });
                    }, {
                        action: o,
                        args: l,
                        model: r
                    });
                };
            return Om.includes(o) ? lo(e, r, s) : Nm(i) ? Va(e, i, s) : s({});
        }
    };
}
function Nm(e) {
    return km.includes(e);
}
function Lm(e, r) {
    return lr(re("fields", ()=>{
        let t = e._runtimeDataModel.models[r];
        return ja(r, t);
    }));
}
function Ga(e) {
    return e.replace(/^./, (r)=>r.toUpperCase());
}
var co = Symbol();
function Pt(e) {
    let r = [
        Fm(e),
        Mm(e),
        re(co, ()=>e),
        re("$parent", ()=>e._appliedParent)
    ], t = e._extensions.getAllClientExtensions();
    return t && r.push(xt(t)), he(e, r);
}
function Fm(e) {
    let r = Object.getPrototypeOf(e._originalClient), t = [
        ...new Set(Object.getOwnPropertyNames(r))
    ];
    return {
        getKeys () {
            return t;
        },
        getPropertyValue (n) {
            return e[n];
        }
    };
}
function Mm(e) {
    let r = Object.keys(e._runtimeDataModel.models), t = r.map(Te), n = [
        ...new Set(r.concat(t))
    ];
    return lr({
        getKeys () {
            return n;
        },
        getPropertyValue (i) {
            let o = Ga(i);
            if (e._runtimeDataModel.models[o] !== void 0) return uo(e, o);
            if (e._runtimeDataModel.models[i] !== void 0) return uo(e, i);
        },
        getPropertyDescriptor (i) {
            if (!t.includes(i)) return {
                enumerable: !1
            };
        }
    });
}
function Qa(e) {
    return e[co] ? e[co] : e;
}
function Wa(e) {
    if (typeof e == "function") return e(this);
    if (e.client?.__AccelerateEngine) {
        let t = e.client.__AccelerateEngine;
        this._originalClient._engine = new t(this._originalClient._accelerateEngineConfig);
    }
    let r = Object.create(this._originalClient, {
        _extensions: {
            value: this._extensions.append(e)
        },
        _appliedParent: {
            value: this,
            configurable: !0
        },
        $on: {
            value: void 0
        }
    });
    return Pt(r);
}
function Ja({ result: e, modelName: r, select: t, omit: n, extensions: i }) {
    let o = i.getAllComputedFields(r);
    if (!o) return e;
    let s = [], a = [];
    for (let l of Object.values(o)){
        if (n) {
            if (n[l.name]) continue;
            let u = l.needs.filter((c)=>n[c]);
            u.length > 0 && a.push(Fr(u));
        } else if (t) {
            if (!t[l.name]) continue;
            let u = l.needs.filter((c)=>!t[c]);
            u.length > 0 && a.push(Fr(u));
        }
        $m(e, l.needs) && s.push(qm(l, he(e, s)));
    }
    return s.length > 0 || a.length > 0 ? he(e, [
        ...s,
        ...a
    ]) : e;
}
function $m(e, r) {
    return r.every((t)=>Vi(e, t));
}
function qm(e, r) {
    return lr(re(e.name, ()=>e.compute(r)));
}
function Gn({ visitor: e, result: r, args: t, runtimeDataModel: n, modelName: i }) {
    if (Array.isArray(r)) {
        for(let s = 0; s < r.length; s++)r[s] = Gn({
            result: r[s],
            args: t,
            modelName: i,
            runtimeDataModel: n,
            visitor: e
        });
        return r;
    }
    let o = e(r, i, t) ?? r;
    return t.include && Ka({
        includeOrSelect: t.include,
        result: o,
        parentModelName: i,
        runtimeDataModel: n,
        visitor: e
    }), t.select && Ka({
        includeOrSelect: t.select,
        result: o,
        parentModelName: i,
        runtimeDataModel: n,
        visitor: e
    }), o;
}
function Ka({ includeOrSelect: e, result: r, parentModelName: t, runtimeDataModel: n, visitor: i }) {
    for (let [o, s] of Object.entries(e)){
        if (!s || r[o] == null || Se(s)) continue;
        let l = n.models[t].fields.find((c)=>c.name === o);
        if (!l || l.kind !== "object" || !l.relationName) continue;
        let u = typeof s == "object" ? s : {};
        r[o] = Gn({
            visitor: i,
            result: r[o],
            args: u,
            modelName: l.type,
            runtimeDataModel: n
        });
    }
}
function Ha({ result: e, modelName: r, args: t, extensions: n, runtimeDataModel: i, globalOmit: o }) {
    return n.isEmpty() || e == null || typeof e != "object" || !i.models[r] ? e : Gn({
        result: e,
        args: t ?? {},
        modelName: r,
        runtimeDataModel: i,
        visitor: (a, l, u)=>{
            let c = Te(l);
            return Ja({
                result: a,
                modelName: c,
                select: u.select,
                omit: u.select ? void 0 : {
                    ...o?.[c],
                    ...u.omit
                },
                extensions: n
            });
        }
    });
}
var Vm = [
    "$connect",
    "$disconnect",
    "$on",
    "$transaction",
    "$extends"
], Ya = Vm;
function za(e) {
    if (e instanceof ie) return jm(e);
    if (Vn(e)) return Bm(e);
    if (Array.isArray(e)) {
        let t = [
            e[0]
        ];
        for(let n = 1; n < e.length; n++)t[n] = Tt(e[n]);
        return t;
    }
    let r = {};
    for(let t in e)r[t] = Tt(e[t]);
    return r;
}
function jm(e) {
    return new ie(e.strings, e.values);
}
function Bm(e) {
    return new wt(e.sql, e.values);
}
function Tt(e) {
    if (typeof e != "object" || e == null || e instanceof Me || kr(e)) return e;
    if (Sr(e)) return new Fe(e.toFixed());
    if (vr(e)) return new Date(+e);
    if (ArrayBuffer.isView(e)) return e.slice(0);
    if (Array.isArray(e)) {
        let r = e.length, t;
        for(t = Array(r); r--;)t[r] = Tt(e[r]);
        return t;
    }
    if (typeof e == "object") {
        let r = {};
        for(let t in e)t === "__proto__" ? Object.defineProperty(r, t, {
            value: Tt(e[t]),
            configurable: !0,
            enumerable: !0,
            writable: !0
        }) : r[t] = Tt(e[t]);
        return r;
    }
    ar(e, "Unknown value");
}
function Xa(e, r, t, n = 0) {
    return e._createPrismaPromise((i)=>{
        let o = r.customDataProxyFetch;
        return "transaction" in r && i !== void 0 && (r.transaction?.kind === "batch" && r.transaction.lock.then(), r.transaction = i), n === t.length ? e._executeRequest(r) : t[n]({
            model: r.model,
            operation: r.model ? r.action : r.clientMethod,
            args: za(r.args ?? {}),
            __internalParams: r,
            query: (s, a = r)=>{
                let l = a.customDataProxyFetch;
                return a.customDataProxyFetch = nl(o, l), a.args = s, Xa(e, a, t, n + 1);
            }
        });
    });
}
function el(e, r) {
    let { jsModelName: t, action: n, clientMethod: i } = r, o = t ? n : i;
    if (e._extensions.isEmpty()) return e._executeRequest(r);
    let s = e._extensions.getAllQueryCallbacks(t ?? "$none", o);
    return Xa(e, r, s);
}
function rl(e) {
    return (r)=>{
        let t = {
            requests: r
        }, n = r[0].extensions.getAllBatchQueryCallbacks();
        return n.length ? tl(t, n, 0, e) : e(t);
    };
}
function tl(e, r, t, n) {
    if (t === r.length) return n(e);
    let i = e.customDataProxyFetch, o = e.requests[0].transaction;
    return r[t]({
        args: {
            queries: e.requests.map((s)=>({
                    model: s.modelName,
                    operation: s.action,
                    args: s.args
                })),
            transaction: o ? {
                isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0
            } : void 0
        },
        __internalParams: e,
        query (s, a = e) {
            let l = a.customDataProxyFetch;
            return a.customDataProxyFetch = nl(i, l), tl(a, r, t + 1, n);
        }
    });
}
var Za = (e)=>e;
function nl(e = Za, r = Za) {
    return (t)=>e(r(t));
}
var il = N("prisma:client"), ol = {
    Vercel: "vercel",
    "Netlify CI": "netlify"
};
function sl({ postinstall: e, ciName: r, clientVersion: t, generator: n }) {
    if (il("checkPlatformCaching:postinstall", e), il("checkPlatformCaching:ciName", r), e === !0 && !(n?.output && typeof (n.output.fromEnvVar ?? n.output.value) == "string") && r && r in ol) {
        let i = `Prisma has detected that this project was built on ${r}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${ol[r]}-build`;
        throw console.error(i), new P(i, t);
    }
}
function al(e, r) {
    return e ? e.datasources ? e.datasources : e.datasourceUrl ? {
        [r[0]]: {
            url: e.datasourceUrl
        }
    } : {} : {};
}
var dl = O(__turbopack_context__.r("[externals]/node:fs [external] (node:fs, cjs)")), St = O(__turbopack_context__.r("[externals]/node:path [external] (node:path, cjs)"));
function Qn(e) {
    let { runtimeBinaryTarget: r } = e;
    return `Add "${r}" to \`binaryTargets\` in the "schema.prisma" file and run \`prisma generate\` after saving it:

${Um(e)}`;
}
function Um(e) {
    let { generator: r, generatorBinaryTargets: t, runtimeBinaryTarget: n } = e, i = {
        fromEnvVar: null,
        value: n
    }, o = [
        ...t,
        i
    ];
    return ki({
        ...r,
        binaryTargets: o
    });
}
function Xe(e) {
    let { runtimeBinaryTarget: r } = e;
    return `Prisma Client could not locate the Query Engine for runtime "${r}".`;
}
function er(e) {
    let { searchedLocations: r } = e;
    return `The following locations have been searched:
${[
        ...new Set(r)
    ].map((i)=>`  ${i}`).join(`
`)}`;
}
function ll(e) {
    let { runtimeBinaryTarget: r } = e;
    return `${Xe(e)}

This happened because \`binaryTargets\` have been pinned, but the actual deployment also required "${r}".
${Qn(e)}

${er(e)}`;
}
function Wn(e) {
    return `We would appreciate if you could take the time to share some information with us.
Please help us by answering a few questions: https://pris.ly/${e}`;
}
function Jn(e) {
    let { errorStack: r } = e;
    return r?.match(/\/\.next|\/next@|\/next\//) ? `

We detected that you are using Next.js, learn how to fix this: https://pris.ly/d/engine-not-found-nextjs.` : "";
}
function ul(e) {
    let { queryEngineName: r } = e;
    return `${Xe(e)}${Jn(e)}

This is likely caused by a bundler that has not copied "${r}" next to the resulting bundle.
Ensure that "${r}" has been copied next to the bundle or in "${e.expectedLocation}".

${Wn("engine-not-found-bundler-investigation")}

${er(e)}`;
}
function cl(e) {
    let { runtimeBinaryTarget: r, generatorBinaryTargets: t } = e, n = t.find((i)=>i.native);
    return `${Xe(e)}

This happened because Prisma Client was generated for "${n?.value ?? "unknown"}", but the actual deployment required "${r}".
${Qn(e)}

${er(e)}`;
}
function pl(e) {
    let { queryEngineName: r } = e;
    return `${Xe(e)}${Jn(e)}

This is likely caused by tooling that has not copied "${r}" to the deployment folder.
Ensure that you ran \`prisma generate\` and that "${r}" has been copied to "${e.expectedLocation}".

${Wn("engine-not-found-tooling-investigation")}

${er(e)}`;
}
var Gm = N("prisma:client:engines:resolveEnginePath"), Qm = ()=>new RegExp("runtime[\\\\/]library\\.m?js$");
async function ml(e, r) {
    let t = {
        binary: process.env.PRISMA_QUERY_ENGINE_BINARY,
        library: process.env.PRISMA_QUERY_ENGINE_LIBRARY
    }[e] ?? r.prismaPath;
    if (t !== void 0) return t;
    let { enginePath: n, searchedLocations: i } = await Wm(e, r);
    if (Gm("enginePath", n), n !== void 0 && e === "binary" && Ri(n), n !== void 0) return r.prismaPath = n;
    let o = await ir(), s = r.generator?.binaryTargets ?? [], a = s.some((d)=>d.native), l = !s.some((d)=>d.value === o), u = ("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/runtime/library.js").match(Qm()) === null, c = {
        searchedLocations: i,
        generatorBinaryTargets: s,
        generator: r.generator,
        runtimeBinaryTarget: o,
        queryEngineName: fl(e, o),
        expectedLocation: St.default.relative(process.cwd(), r.dirname),
        errorStack: new Error().stack
    }, p;
    throw a && l ? p = cl(c) : l ? p = ll(c) : u ? p = ul(c) : p = pl(c), new P(p, r.clientVersion);
}
async function Wm(e, r) {
    let t = await ir(), n = [], i = [
        r.dirname,
        St.default.resolve(("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/runtime"), ".."),
        r.generator?.output?.value ?? ("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/runtime"),
        St.default.resolve(("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/runtime"), "../../../.prisma/client"),
        "/tmp/prisma-engines",
        r.cwd
    ];
    ("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/runtime/library.js").includes("resolveEnginePath") && i.push(ms());
    for (let o of i){
        let s = fl(e, t), a = St.default.join(o, s);
        if (n.push(o), dl.default.existsSync(a)) return {
            enginePath: a,
            searchedLocations: n
        };
    }
    return {
        enginePath: void 0,
        searchedLocations: n
    };
}
function fl(e, r) {
    return e === "library" ? Gt(r, "fs") : `query-engine-${r}${r === "windows" ? ".exe" : ""}`;
}
function gl(e) {
    return e ? e.replace(/".*"/g, '"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (r)=>`${r[0]}5`) : "";
}
function hl(e) {
    return e.split(`
`).map((r)=>r.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, "").replace(/\+\d+\s*ms$/, "")).join(`
`);
}
var yl = O(Os());
function bl({ title: e, user: r = "prisma", repo: t = "prisma", template: n = "bug_report.yml", body: i }) {
    return (0, yl.default)({
        user: r,
        repo: t,
        template: n,
        title: e,
        body: i
    });
}
function El({ version: e, binaryTarget: r, title: t, description: n, engineVersion: i, database: o, query: s }) {
    let a = Bo(6e3 - (s?.length ?? 0)), l = hl(wr(a)), u = n ? `# Description
\`\`\`
${n}
\`\`\`` : "", c = wr(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${process.version?.padEnd(19)}| 
| OS              | ${r?.padEnd(19)}|
| Prisma Client   | ${e?.padEnd(19)}|
| Query Engine    | ${i?.padEnd(19)}|
| Database        | ${o?.padEnd(19)}|

${u}

## Logs
\`\`\`
${l}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? gl(s) : ""}
\`\`\`
`), p = bl({
        title: t,
        body: c
    });
    return `${t}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${Y(p)}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
}
function wl(e, r) {
    throw new Error(r);
}
function Jm(e) {
    return e !== null && typeof e == "object" && typeof e.$type == "string";
}
function Km(e, r) {
    let t = {};
    for (let n of Object.keys(e))t[n] = r(e[n], n);
    return t;
}
function Vr(e) {
    return e === null ? e : Array.isArray(e) ? e.map(Vr) : typeof e == "object" ? Jm(e) ? Hm(e) : e.constructor !== null && e.constructor.name !== "Object" ? e : Km(e, Vr) : e;
}
function Hm({ $type: e, value: r }) {
    switch(e){
        case "BigInt":
            return BigInt(r);
        case "Bytes":
            {
                let { buffer: t, byteOffset: n, byteLength: i } = Buffer.from(r, "base64");
                return new Uint8Array(t, n, i);
            }
        case "DateTime":
            return new Date(r);
        case "Decimal":
            return new Le(r);
        case "Json":
            return JSON.parse(r);
        default:
            wl(r, "Unknown tagged value");
    }
}
var xl = "6.19.3";
var zm = ()=>globalThis.process?.release?.name === "node", Zm = ()=>!!globalThis.Bun || !!globalThis.process?.versions?.bun, Xm = ()=>!!globalThis.Deno, ef = ()=>typeof globalThis.Netlify == "object", rf = ()=>typeof globalThis.EdgeRuntime == "object", tf = ()=>globalThis.navigator?.userAgent === "Cloudflare-Workers";
function nf() {
    return [
        [
            ef,
            "netlify"
        ],
        [
            rf,
            "edge-light"
        ],
        [
            tf,
            "workerd"
        ],
        [
            Xm,
            "deno"
        ],
        [
            Zm,
            "bun"
        ],
        [
            zm,
            "node"
        ]
    ].flatMap((t)=>t[0]() ? [
            t[1]
        ] : []).at(0) ?? "";
}
var of = {
    node: "Node.js",
    workerd: "Cloudflare Workers",
    deno: "Deno and Deno Deploy",
    netlify: "Netlify Edge Functions",
    "edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)"
};
function Kn() {
    let e = nf();
    return {
        id: e,
        prettyName: of[e] || e,
        isEdge: [
            "workerd",
            "deno",
            "netlify",
            "edge-light"
        ].includes(e)
    };
}
function jr({ inlineDatasources: e, overrideDatasources: r, env: t, clientVersion: n }) {
    let i, o = Object.keys(e)[0], s = e[o]?.url, a = r[o]?.url;
    if (o === void 0 ? i = void 0 : a ? i = a : s?.value ? i = s.value : s?.fromEnvVar && (i = t[s.fromEnvVar]), s?.fromEnvVar !== void 0 && i === void 0) throw new P(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
    if (i === void 0) throw new P("error: Missing URL environment variable, value, or override.", n);
    return i;
}
var Hn = class extends Error {
    clientVersion;
    cause;
    constructor(r, t){
        super(r), this.clientVersion = t.clientVersion, this.cause = t.cause;
    }
    get [Symbol.toStringTag]() {
        return this.name;
    }
};
var oe = class extends Hn {
    isRetryable;
    constructor(r, t){
        super(r, t), this.isRetryable = t.isRetryable ?? !0;
    }
};
function R(e, r) {
    return {
        ...e,
        isRetryable: r
    };
}
var ur = class extends oe {
    name = "InvalidDatasourceError";
    code = "P6001";
    constructor(r, t){
        super(r, R(t, !1));
    }
};
x(ur, "InvalidDatasourceError");
function vl(e) {
    let r = {
        clientVersion: e.clientVersion
    }, t = Object.keys(e.inlineDatasources)[0], n = jr({
        inlineDatasources: e.inlineDatasources,
        overrideDatasources: e.overrideDatasources,
        clientVersion: e.clientVersion,
        env: {
            ...e.env,
            ...typeof process < "u" ? process.env : {}
        }
    }), i;
    try {
        i = new URL(n);
    } catch  {
        throw new ur(`Error validating datasource \`${t}\`: the URL must start with the protocol \`prisma://\``, r);
    }
    let { protocol: o, searchParams: s } = i;
    if (o !== "prisma:" && o !== sn) throw new ur(`Error validating datasource \`${t}\`: the URL must start with the protocol \`prisma://\` or \`prisma+postgres://\``, r);
    let a = s.get("api_key");
    if (a === null || a.length < 1) throw new ur(`Error validating datasource \`${t}\`: the URL must contain a valid API key`, r);
    let l = Ii(i) ? "http:" : "https:";
    process.env.TEST_CLIENT_ENGINE_REMOTE_EXECUTOR && i.searchParams.has("use_http") && (l = "http:");
    let u = new URL(i.href.replace(o, l));
    return {
        apiKey: a,
        url: u
    };
}
var Pl = O(on()), Yn = class {
    apiKey;
    tracingHelper;
    logLevel;
    logQueries;
    engineHash;
    constructor({ apiKey: r, tracingHelper: t, logLevel: n, logQueries: i, engineHash: o }){
        this.apiKey = r, this.tracingHelper = t, this.logLevel = n, this.logQueries = i, this.engineHash = o;
    }
    build({ traceparent: r, transactionId: t } = {}) {
        let n = {
            Accept: "application/json",
            Authorization: `Bearer ${this.apiKey}`,
            "Content-Type": "application/json",
            "Prisma-Engine-Hash": this.engineHash,
            "Prisma-Engine-Version": Pl.enginesVersion
        };
        this.tracingHelper.isEnabled() && (n.traceparent = r ?? this.tracingHelper.getTraceParent()), t && (n["X-Transaction-Id"] = t);
        let i = this.#e();
        return i.length > 0 && (n["X-Capture-Telemetry"] = i.join(", ")), n;
    }
    #e() {
        let r = [];
        return this.tracingHelper.isEnabled() && r.push("tracing"), this.logLevel && r.push(this.logLevel), this.logQueries && r.push("query"), r;
    }
};
function sf(e) {
    return e[0] * 1e3 + e[1] / 1e6;
}
function po(e) {
    return new Date(sf(e));
}
var Br = class extends oe {
    name = "ForcedRetryError";
    code = "P5001";
    constructor(r){
        super("This request must be retried", R(r, !0));
    }
};
x(Br, "ForcedRetryError");
var cr = class extends oe {
    name = "NotImplementedYetError";
    code = "P5004";
    constructor(r, t){
        super(r, R(t, !1));
    }
};
x(cr, "NotImplementedYetError");
var $ = class extends oe {
    response;
    constructor(r, t){
        super(r, t), this.response = t.response;
        let n = this.response.headers.get("prisma-request-id");
        if (n) {
            let i = `(The request id was: ${n})`;
            this.message = this.message + " " + i;
        }
    }
};
var pr = class extends $ {
    name = "SchemaMissingError";
    code = "P5005";
    constructor(r){
        super("Schema needs to be uploaded", R(r, !0));
    }
};
x(pr, "SchemaMissingError");
var mo = "This request could not be understood by the server", Rt = class extends $ {
    name = "BadRequestError";
    code = "P5000";
    constructor(r, t, n){
        super(t || mo, R(r, !1)), n && (this.code = n);
    }
};
x(Rt, "BadRequestError");
var At = class extends $ {
    name = "HealthcheckTimeoutError";
    code = "P5013";
    logs;
    constructor(r, t){
        super("Engine not started: healthcheck timeout", R(r, !0)), this.logs = t;
    }
};
x(At, "HealthcheckTimeoutError");
var Ct = class extends $ {
    name = "EngineStartupError";
    code = "P5014";
    logs;
    constructor(r, t, n){
        super(t, R(r, !0)), this.logs = n;
    }
};
x(Ct, "EngineStartupError");
var It = class extends $ {
    name = "EngineVersionNotSupportedError";
    code = "P5012";
    constructor(r){
        super("Engine version is not supported", R(r, !1));
    }
};
x(It, "EngineVersionNotSupportedError");
var fo = "Request timed out", Dt = class extends $ {
    name = "GatewayTimeoutError";
    code = "P5009";
    constructor(r, t = fo){
        super(t, R(r, !1));
    }
};
x(Dt, "GatewayTimeoutError");
var af = "Interactive transaction error", Ot = class extends $ {
    name = "InteractiveTransactionError";
    code = "P5015";
    constructor(r, t = af){
        super(t, R(r, !1));
    }
};
x(Ot, "InteractiveTransactionError");
var lf = "Request parameters are invalid", kt = class extends $ {
    name = "InvalidRequestError";
    code = "P5011";
    constructor(r, t = lf){
        super(t, R(r, !1));
    }
};
x(kt, "InvalidRequestError");
var go = "Requested resource does not exist", _t = class extends $ {
    name = "NotFoundError";
    code = "P5003";
    constructor(r, t = go){
        super(t, R(r, !1));
    }
};
x(_t, "NotFoundError");
var ho = "Unknown server error", Ur = class extends $ {
    name = "ServerError";
    code = "P5006";
    logs;
    constructor(r, t, n){
        super(t || ho, R(r, !0)), this.logs = n;
    }
};
x(Ur, "ServerError");
var yo = "Unauthorized, check your connection string", Nt = class extends $ {
    name = "UnauthorizedError";
    code = "P5007";
    constructor(r, t = yo){
        super(t, R(r, !1));
    }
};
x(Nt, "UnauthorizedError");
var bo = "Usage exceeded, retry again later", Lt = class extends $ {
    name = "UsageExceededError";
    code = "P5008";
    constructor(r, t = bo){
        super(t, R(r, !0));
    }
};
x(Lt, "UsageExceededError");
async function uf(e) {
    let r;
    try {
        r = await e.text();
    } catch  {
        return {
            type: "EmptyError"
        };
    }
    try {
        let t = JSON.parse(r);
        if (typeof t == "string") switch(t){
            case "InternalDataProxyError":
                return {
                    type: "DataProxyError",
                    body: t
                };
            default:
                return {
                    type: "UnknownTextError",
                    body: t
                };
        }
        if (typeof t == "object" && t !== null) {
            if ("is_panic" in t && "message" in t && "error_code" in t) return {
                type: "QueryEngineError",
                body: t
            };
            if ("EngineNotStarted" in t || "InteractiveTransactionMisrouted" in t || "InvalidRequestError" in t) {
                let n = Object.values(t)[0].reason;
                return typeof n == "string" && ![
                    "SchemaMissing",
                    "EngineVersionNotSupported"
                ].includes(n) ? {
                    type: "UnknownJsonError",
                    body: t
                } : {
                    type: "DataProxyError",
                    body: t
                };
            }
        }
        return {
            type: "UnknownJsonError",
            body: t
        };
    } catch  {
        return r === "" ? {
            type: "EmptyError"
        } : {
            type: "UnknownTextError",
            body: r
        };
    }
}
async function Ft(e, r) {
    if (e.ok) return;
    let t = {
        clientVersion: r,
        response: e
    }, n = await uf(e);
    if (n.type === "QueryEngineError") throw new z(n.body.message, {
        code: n.body.error_code,
        clientVersion: r
    });
    if (n.type === "DataProxyError") {
        if (n.body === "InternalDataProxyError") throw new Ur(t, "Internal Data Proxy error");
        if ("EngineNotStarted" in n.body) {
            if (n.body.EngineNotStarted.reason === "SchemaMissing") return new pr(t);
            if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported") throw new It(t);
            if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
                let { msg: i, logs: o } = n.body.EngineNotStarted.reason.EngineStartupError;
                throw new Ct(t, i, o);
            }
            if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
                let { msg: i, error_code: o } = n.body.EngineNotStarted.reason.KnownEngineStartupError;
                throw new P(i, r, o);
            }
            if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
                let { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
                throw new At(t, i);
            }
        }
        if ("InteractiveTransactionMisrouted" in n.body) {
            let i = {
                IDParseError: "Could not parse interactive transaction ID",
                NoQueryEngineFoundError: "Could not find Query Engine for the specified host and transaction ID",
                TransactionStartError: "Could not start interactive transaction"
            };
            throw new Ot(t, i[n.body.InteractiveTransactionMisrouted.reason]);
        }
        if ("InvalidRequestError" in n.body) throw new kt(t, n.body.InvalidRequestError.reason);
    }
    if (e.status === 401 || e.status === 403) throw new Nt(t, Gr(yo, n));
    if (e.status === 404) return new _t(t, Gr(go, n));
    if (e.status === 429) throw new Lt(t, Gr(bo, n));
    if (e.status === 504) throw new Dt(t, Gr(fo, n));
    if (e.status >= 500) throw new Ur(t, Gr(ho, n));
    if (e.status >= 400) throw new Rt(t, Gr(mo, n));
}
function Gr(e, r) {
    return r.type === "EmptyError" ? e : `${e}: ${JSON.stringify(r)}`;
}
function Tl(e) {
    let r = Math.pow(2, e) * 50, t = Math.ceil(Math.random() * r) - Math.ceil(r / 2), n = r + t;
    return new Promise((i)=>setTimeout(()=>i(n), n));
}
var $e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function Sl(e) {
    let r = new TextEncoder().encode(e), t = "", n = r.byteLength, i = n % 3, o = n - i, s, a, l, u, c;
    for(let p = 0; p < o; p = p + 3)c = r[p] << 16 | r[p + 1] << 8 | r[p + 2], s = (c & 16515072) >> 18, a = (c & 258048) >> 12, l = (c & 4032) >> 6, u = c & 63, t += $e[s] + $e[a] + $e[l] + $e[u];
    return i == 1 ? (c = r[o], s = (c & 252) >> 2, a = (c & 3) << 4, t += $e[s] + $e[a] + "==") : i == 2 && (c = r[o] << 8 | r[o + 1], s = (c & 64512) >> 10, a = (c & 1008) >> 4, l = (c & 15) << 2, t += $e[s] + $e[a] + $e[l] + "="), t;
}
function Rl(e) {
    if (!!e.generator?.previewFeatures.some((t)=>t.toLowerCase().includes("metrics"))) throw new P("The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate", e.clientVersion);
}
var Al = {
    "@prisma/debug": "workspace:*",
    "@prisma/engines-version": "7.1.1-3.c2990dca591cba766e3b7ef5d9e8a84796e47ab7",
    "@prisma/fetch-engine": "workspace:*",
    "@prisma/get-platform": "workspace:*"
};
var Mt = class extends oe {
    name = "RequestError";
    code = "P5010";
    constructor(r, t){
        super(`Cannot fetch data from service:
${r}`, R(t, !0));
    }
};
x(Mt, "RequestError");
async function dr(e, r, t = (n)=>n) {
    let { clientVersion: n, ...i } = r, o = t(fetch);
    try {
        return await o(e, i);
    } catch (s) {
        let a = s.message ?? "Unknown error";
        throw new Mt(a, {
            clientVersion: n,
            cause: s
        });
    }
}
var pf = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/, Cl = N("prisma:client:dataproxyEngine");
async function df(e, r) {
    let t = Al["@prisma/engines-version"], n = r.clientVersion ?? "unknown";
    if (process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION || globalThis.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION) return process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION || globalThis.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
    if (e.includes("accelerate") && n !== "0.0.0" && n !== "in-memory") return n;
    let [i, o] = n?.split("-") ?? [];
    if (o === void 0 && pf.test(i)) return i;
    if (o !== void 0 || n === "0.0.0" || n === "in-memory") {
        let [s] = t.split("-") ?? [], [a, l, u] = s.split("."), c = mf(`<=${a}.${l}.${u}`), p = await dr(c, {
            clientVersion: n
        });
        if (!p.ok) throw new Error(`Failed to fetch stable Prisma version, unpkg.com status ${p.status} ${p.statusText}, response body: ${await p.text() || "<empty body>"}`);
        let d = await p.text();
        Cl("length of body fetched from unpkg.com", d.length);
        let f;
        try {
            f = JSON.parse(d);
        } catch (h) {
            throw console.error("JSON.parse error: body fetched from unpkg.com: ", d), h;
        }
        return f.version;
    }
    throw new cr("Only `major.minor.patch` versions are supported by Accelerate.", {
        clientVersion: n
    });
}
async function Il(e, r) {
    let t = await df(e, r);
    return Cl("version", t), t;
}
function mf(e) {
    return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
}
var Dl = 3, $t = N("prisma:client:dataproxyEngine"), qt = class {
    name = "DataProxyEngine";
    inlineSchema;
    inlineSchemaHash;
    inlineDatasources;
    config;
    logEmitter;
    env;
    clientVersion;
    engineHash;
    tracingHelper;
    remoteClientVersion;
    host;
    headerBuilder;
    startPromise;
    protocol;
    constructor(r){
        Rl(r), this.config = r, this.env = r.env, this.inlineSchema = Sl(r.inlineSchema), this.inlineDatasources = r.inlineDatasources, this.inlineSchemaHash = r.inlineSchemaHash, this.clientVersion = r.clientVersion, this.engineHash = r.engineVersion, this.logEmitter = r.logEmitter, this.tracingHelper = r.tracingHelper;
    }
    apiKey() {
        return this.headerBuilder.apiKey;
    }
    version() {
        return this.engineHash;
    }
    async start() {
        this.startPromise !== void 0 && await this.startPromise, this.startPromise = (async ()=>{
            let { apiKey: r, url: t } = this.getURLAndAPIKey();
            this.host = t.host, this.protocol = t.protocol, this.headerBuilder = new Yn({
                apiKey: r,
                tracingHelper: this.tracingHelper,
                logLevel: this.config.logLevel ?? "error",
                logQueries: this.config.logQueries,
                engineHash: this.engineHash
            }), this.remoteClientVersion = await Il(this.host, this.config), $t("host", this.host), $t("protocol", this.protocol);
        })(), await this.startPromise;
    }
    async stop() {}
    propagateResponseExtensions(r) {
        r?.logs?.length && r.logs.forEach((t)=>{
            switch(t.level){
                case "debug":
                case "trace":
                    $t(t);
                    break;
                case "error":
                case "warn":
                case "info":
                    {
                        this.logEmitter.emit(t.level, {
                            timestamp: po(t.timestamp),
                            message: t.attributes.message ?? "",
                            target: t.target ?? "BinaryEngine"
                        });
                        break;
                    }
                case "query":
                    {
                        this.logEmitter.emit("query", {
                            query: t.attributes.query ?? "",
                            timestamp: po(t.timestamp),
                            duration: t.attributes.duration_ms ?? 0,
                            params: t.attributes.params ?? "",
                            target: t.target ?? "BinaryEngine"
                        });
                        break;
                    }
                default:
                    t.level;
            }
        }), r?.traces?.length && this.tracingHelper.dispatchEngineSpans(r.traces);
    }
    onBeforeExit() {
        throw new Error('"beforeExit" hook is not applicable to the remote query engine');
    }
    async url(r) {
        return await this.start(), `${this.protocol}//${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${r}`;
    }
    async uploadSchema() {
        let r = {
            name: "schemaUpload",
            internal: !0
        };
        return this.tracingHelper.runInChildSpan(r, async ()=>{
            let t = await dr(await this.url("schema"), {
                method: "PUT",
                headers: this.headerBuilder.build(),
                body: this.inlineSchema,
                clientVersion: this.clientVersion
            });
            t.ok || $t("schema response status", t.status);
            let n = await Ft(t, this.clientVersion);
            if (n) throw this.logEmitter.emit("warn", {
                message: `Error while uploading schema: ${n.message}`,
                timestamp: new Date,
                target: ""
            }), n;
            this.logEmitter.emit("info", {
                message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`,
                timestamp: new Date,
                target: ""
            });
        });
    }
    request(r, { traceparent: t, interactiveTransaction: n, customDataProxyFetch: i }) {
        return this.requestInternal({
            body: r,
            traceparent: t,
            interactiveTransaction: n,
            customDataProxyFetch: i
        });
    }
    async requestBatch(r, { traceparent: t, transaction: n, customDataProxyFetch: i }) {
        let o = n?.kind === "itx" ? n.options : void 0, s = Mr(r, n);
        return (await this.requestInternal({
            body: s,
            customDataProxyFetch: i,
            interactiveTransaction: o,
            traceparent: t
        })).map((l)=>(l.extensions && this.propagateResponseExtensions(l.extensions), "errors" in l ? this.convertProtocolErrorsToClientError(l.errors) : l));
    }
    requestInternal({ body: r, traceparent: t, customDataProxyFetch: n, interactiveTransaction: i }) {
        return this.withRetry({
            actionGerund: "querying",
            callback: async ({ logHttpCall: o })=>{
                let s = i ? `${i.payload.endpoint}/graphql` : await this.url("graphql");
                o(s);
                let a = await dr(s, {
                    method: "POST",
                    headers: this.headerBuilder.build({
                        traceparent: t,
                        transactionId: i?.id
                    }),
                    body: JSON.stringify(r),
                    clientVersion: this.clientVersion
                }, n);
                a.ok || $t("graphql response status", a.status), await this.handleError(await Ft(a, this.clientVersion));
                let l = await a.json();
                if (l.extensions && this.propagateResponseExtensions(l.extensions), "errors" in l) throw this.convertProtocolErrorsToClientError(l.errors);
                return "batchResult" in l ? l.batchResult : l;
            }
        });
    }
    async transaction(r, t, n) {
        let i = {
            start: "starting",
            commit: "committing",
            rollback: "rolling back"
        };
        return this.withRetry({
            actionGerund: `${i[r]} transaction`,
            callback: async ({ logHttpCall: o })=>{
                if (r === "start") {
                    let s = JSON.stringify({
                        max_wait: n.maxWait,
                        timeout: n.timeout,
                        isolation_level: n.isolationLevel
                    }), a = await this.url("transaction/start");
                    o(a);
                    let l = await dr(a, {
                        method: "POST",
                        headers: this.headerBuilder.build({
                            traceparent: t.traceparent
                        }),
                        body: s,
                        clientVersion: this.clientVersion
                    });
                    await this.handleError(await Ft(l, this.clientVersion));
                    let u = await l.json(), { extensions: c } = u;
                    c && this.propagateResponseExtensions(c);
                    let p = u.id, d = u["data-proxy"].endpoint;
                    return {
                        id: p,
                        payload: {
                            endpoint: d
                        }
                    };
                } else {
                    let s = `${n.payload.endpoint}/${r}`;
                    o(s);
                    let a = await dr(s, {
                        method: "POST",
                        headers: this.headerBuilder.build({
                            traceparent: t.traceparent
                        }),
                        clientVersion: this.clientVersion
                    });
                    await this.handleError(await Ft(a, this.clientVersion));
                    let l = await a.json(), { extensions: u } = l;
                    u && this.propagateResponseExtensions(u);
                    return;
                }
            }
        });
    }
    getURLAndAPIKey() {
        return vl({
            clientVersion: this.clientVersion,
            env: this.env,
            inlineDatasources: this.inlineDatasources,
            overrideDatasources: this.config.overrideDatasources
        });
    }
    metrics() {
        throw new cr("Metrics are not yet supported for Accelerate", {
            clientVersion: this.clientVersion
        });
    }
    async withRetry(r) {
        for(let t = 0;; t++){
            let n = (i)=>{
                this.logEmitter.emit("info", {
                    message: `Calling ${i} (n=${t})`,
                    timestamp: new Date,
                    target: ""
                });
            };
            try {
                return await r.callback({
                    logHttpCall: n
                });
            } catch (i) {
                if (!(i instanceof oe) || !i.isRetryable) throw i;
                if (t >= Dl) throw i instanceof Br ? i.cause : i;
                this.logEmitter.emit("warn", {
                    message: `Attempt ${t + 1}/${Dl} failed for ${r.actionGerund}: ${i.message ?? "(unknown)"}`,
                    timestamp: new Date,
                    target: ""
                });
                let o = await Tl(t);
                this.logEmitter.emit("warn", {
                    message: `Retrying after ${o}ms`,
                    timestamp: new Date,
                    target: ""
                });
            }
        }
    }
    async handleError(r) {
        if (r instanceof pr) throw await this.uploadSchema(), new Br({
            clientVersion: this.clientVersion,
            cause: r
        });
        if (r) throw r;
    }
    convertProtocolErrorsToClientError(r) {
        return r.length === 1 ? $r(r[0], this.config.clientVersion, this.config.activeProvider) : new V(JSON.stringify(r), {
            clientVersion: this.config.clientVersion
        });
    }
    applyPendingMigrations() {
        throw new Error("Method not implemented.");
    }
};
function Ol(e) {
    if (e?.kind === "itx") return e.options.id;
}
var wo = O(__turbopack_context__.r("[externals]/node:os [external] (node:os, cjs)")), kl = O(__turbopack_context__.r("[externals]/node:path [external] (node:path, cjs)"));
var Eo = Symbol("PrismaLibraryEngineCache");
function ff() {
    let e = globalThis;
    return e[Eo] === void 0 && (e[Eo] = {}), e[Eo];
}
function gf(e) {
    let r = ff();
    if (r[e] !== void 0) return r[e];
    let t = kl.default.toNamespacedPath(e), n = {
        exports: {}
    }, i = 0;
    return process.platform !== "win32" && (i = wo.default.constants.dlopen.RTLD_LAZY | wo.default.constants.dlopen.RTLD_DEEPBIND), process.dlopen(n, t, i), r[e] = n.exports, n.exports;
}
var _l = {
    async loadLibrary (e) {
        let r = await fi(), t = await ml("library", e);
        try {
            return e.tracingHelper.runInChildSpan({
                name: "loadLibrary",
                internal: !0
            }, ()=>gf(t));
        } catch (n) {
            let i = Ai({
                e: n,
                platformInfo: r,
                id: t
            });
            throw new P(i, e.clientVersion);
        }
    }
};
var xo, Nl = {
    async loadLibrary (e) {
        let { clientVersion: r, adapter: t, engineWasm: n } = e;
        if (t === void 0) throw new P(`The \`adapter\` option for \`PrismaClient\` is required in this context (${Kn().prettyName})`, r);
        if (n === void 0) throw new P("WASM engine was unexpectedly `undefined`", r);
        xo === void 0 && (xo = (async ()=>{
            let o = await n.getRuntime(), s = await n.getQueryEngineWasmModule();
            if (s == null) throw new P("The loaded wasm module was unexpectedly `undefined` or `null` once loaded", r);
            let a = {
                "./query_engine_bg.js": o
            }, l = new WebAssembly.Instance(s, a), u = l.exports.__wbindgen_start;
            return o.__wbg_set_wasm(l.exports), u(), o.QueryEngine;
        })());
        let i = await xo;
        return {
            debugPanic () {
                return Promise.reject("{}");
            },
            dmmf () {
                return Promise.resolve("{}");
            },
            version () {
                return {
                    commit: "unknown",
                    version: "unknown"
                };
            },
            QueryEngine: i
        };
    }
};
var hf = "P2036", Re = N("prisma:client:libraryEngine");
function yf(e) {
    return e.item_type === "query" && "query" in e;
}
function bf(e) {
    return "level" in e ? e.level === "error" && e.message === "PANIC" : !1;
}
var Ll = [
    ...li,
    "native"
], Ef = 0xffffffffffffffffn, vo = 1n;
function wf() {
    let e = vo++;
    return vo > Ef && (vo = 1n), e;
}
var Qr = class {
    name = "LibraryEngine";
    engine;
    libraryInstantiationPromise;
    libraryStartingPromise;
    libraryStoppingPromise;
    libraryStarted;
    executingQueryPromise;
    config;
    QueryEngineConstructor;
    libraryLoader;
    library;
    logEmitter;
    libQueryEnginePath;
    binaryTarget;
    datasourceOverrides;
    datamodel;
    logQueries;
    logLevel;
    lastQuery;
    loggerRustPanic;
    tracingHelper;
    adapterPromise;
    versionInfo;
    constructor(r, t){
        this.libraryLoader = t ?? _l, r.engineWasm !== void 0 && (this.libraryLoader = t ?? Nl), this.config = r, this.libraryStarted = !1, this.logQueries = r.logQueries ?? !1, this.logLevel = r.logLevel ?? "error", this.logEmitter = r.logEmitter, this.datamodel = r.inlineSchema, this.tracingHelper = r.tracingHelper, r.enableDebugLogs && (this.logLevel = "debug");
        let n = Object.keys(r.overrideDatasources)[0], i = r.overrideDatasources[n]?.url;
        n !== void 0 && i !== void 0 && (this.datasourceOverrides = {
            [n]: i
        }), this.libraryInstantiationPromise = this.instantiateLibrary();
    }
    wrapEngine(r) {
        return {
            applyPendingMigrations: r.applyPendingMigrations?.bind(r),
            commitTransaction: this.withRequestId(r.commitTransaction.bind(r)),
            connect: this.withRequestId(r.connect.bind(r)),
            disconnect: this.withRequestId(r.disconnect.bind(r)),
            metrics: r.metrics?.bind(r),
            query: this.withRequestId(r.query.bind(r)),
            rollbackTransaction: this.withRequestId(r.rollbackTransaction.bind(r)),
            sdlSchema: r.sdlSchema?.bind(r),
            startTransaction: this.withRequestId(r.startTransaction.bind(r)),
            trace: r.trace.bind(r),
            free: r.free?.bind(r)
        };
    }
    withRequestId(r) {
        return async (...t)=>{
            let n = wf().toString();
            try {
                return await r(...t, n);
            } finally{
                if (this.tracingHelper.isEnabled()) {
                    let i = await this.engine?.trace(n);
                    if (i) {
                        let o = JSON.parse(i);
                        this.tracingHelper.dispatchEngineSpans(o.spans);
                    }
                }
            }
        };
    }
    async applyPendingMigrations() {
        throw new Error("Cannot call this method from this type of engine instance");
    }
    async transaction(r, t, n) {
        await this.start();
        let i = await this.adapterPromise, o = JSON.stringify(t), s;
        if (r === "start") {
            let l = JSON.stringify({
                max_wait: n.maxWait,
                timeout: n.timeout,
                isolation_level: n.isolationLevel
            });
            s = await this.engine?.startTransaction(l, o);
        } else r === "commit" ? s = await this.engine?.commitTransaction(n.id, o) : r === "rollback" && (s = await this.engine?.rollbackTransaction(n.id, o));
        let a = this.parseEngineResponse(s);
        if (xf(a)) {
            let l = this.getExternalAdapterError(a, i?.errorRegistry);
            throw l ? l.error : new z(a.message, {
                code: a.error_code,
                clientVersion: this.config.clientVersion,
                meta: a.meta
            });
        } else if (typeof a.message == "string") throw new V(a.message, {
            clientVersion: this.config.clientVersion
        });
        return a;
    }
    async instantiateLibrary() {
        if (Re("internalSetup"), this.libraryInstantiationPromise) return this.libraryInstantiationPromise;
        ai(), this.binaryTarget = await this.getCurrentBinaryTarget(), await this.tracingHelper.runInChildSpan("load_engine", ()=>this.loadEngine()), this.version();
    }
    async getCurrentBinaryTarget() {
        {
            if (this.binaryTarget) return this.binaryTarget;
            let r = await this.tracingHelper.runInChildSpan("detect_platform", ()=>ir());
            if (!Ll.includes(r)) throw new P(`Unknown ${ce("PRISMA_QUERY_ENGINE_LIBRARY")} ${ce(W(r))}. Possible binaryTargets: ${qe(Ll.join(", "))} or a path to the query engine library.
You may have to run ${qe("prisma generate")} for your changes to take effect.`, this.config.clientVersion);
            return r;
        }
    }
    parseEngineResponse(r) {
        if (!r) throw new V("Response from the Engine was empty", {
            clientVersion: this.config.clientVersion
        });
        try {
            return JSON.parse(r);
        } catch  {
            throw new V("Unable to JSON.parse response from engine", {
                clientVersion: this.config.clientVersion
            });
        }
    }
    async loadEngine() {
        if (!this.engine) {
            this.QueryEngineConstructor || (this.library = await this.libraryLoader.loadLibrary(this.config), this.QueryEngineConstructor = this.library.QueryEngine);
            try {
                let r = new WeakRef(this);
                this.adapterPromise || (this.adapterPromise = this.config.adapter?.connect()?.then(tn));
                let t = await this.adapterPromise;
                t && Re("Using driver adapter: %O", t), this.engine = this.wrapEngine(new this.QueryEngineConstructor({
                    datamodel: this.datamodel,
                    env: process.env,
                    logQueries: this.config.logQueries ?? !1,
                    ignoreEnvVarErrors: !0,
                    datasourceOverrides: this.datasourceOverrides ?? {},
                    logLevel: this.logLevel,
                    configDir: this.config.cwd,
                    engineProtocol: "json",
                    enableTracing: this.tracingHelper.isEnabled()
                }, (n)=>{
                    r.deref()?.logger(n);
                }, t));
            } catch (r) {
                let t = r, n = this.parseInitError(t.message);
                throw typeof n == "string" ? t : new P(n.message, this.config.clientVersion, n.error_code);
            }
        }
    }
    logger(r) {
        let t = this.parseEngineResponse(r);
        t && (t.level = t?.level.toLowerCase() ?? "unknown", yf(t) ? this.logEmitter.emit("query", {
            timestamp: new Date,
            query: t.query,
            params: t.params,
            duration: Number(t.duration_ms),
            target: t.module_path
        }) : bf(t) ? this.loggerRustPanic = new ae(Po(this, `${t.message}: ${t.reason} in ${t.file}:${t.line}:${t.column}`), this.config.clientVersion) : this.logEmitter.emit(t.level, {
            timestamp: new Date,
            message: t.message,
            target: t.module_path
        }));
    }
    parseInitError(r) {
        try {
            return JSON.parse(r);
        } catch  {}
        return r;
    }
    parseRequestError(r) {
        try {
            return JSON.parse(r);
        } catch  {}
        return r;
    }
    onBeforeExit() {
        throw new Error('"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.');
    }
    async start() {
        if (this.libraryInstantiationPromise || (this.libraryInstantiationPromise = this.instantiateLibrary()), await this.libraryInstantiationPromise, await this.libraryStoppingPromise, this.libraryStartingPromise) return Re(`library already starting, this.libraryStarted: ${this.libraryStarted}`), this.libraryStartingPromise;
        if (this.libraryStarted) return;
        let r = async ()=>{
            Re("library starting");
            try {
                let t = {
                    traceparent: this.tracingHelper.getTraceParent()
                };
                await this.engine?.connect(JSON.stringify(t)), this.libraryStarted = !0, this.adapterPromise || (this.adapterPromise = this.config.adapter?.connect()?.then(tn)), await this.adapterPromise, Re("library started");
            } catch (t) {
                let n = this.parseInitError(t.message);
                throw typeof n == "string" ? t : new P(n.message, this.config.clientVersion, n.error_code);
            } finally{
                this.libraryStartingPromise = void 0;
            }
        };
        return this.libraryStartingPromise = this.tracingHelper.runInChildSpan("connect", r), this.libraryStartingPromise;
    }
    async stop() {
        if (await this.libraryInstantiationPromise, await this.libraryStartingPromise, await this.executingQueryPromise, this.libraryStoppingPromise) return Re("library is already stopping"), this.libraryStoppingPromise;
        if (!this.libraryStarted) {
            await (await this.adapterPromise)?.dispose(), this.adapterPromise = void 0;
            return;
        }
        let r = async ()=>{
            await new Promise((n)=>setImmediate(n)), Re("library stopping");
            let t = {
                traceparent: this.tracingHelper.getTraceParent()
            };
            await this.engine?.disconnect(JSON.stringify(t)), this.engine?.free && this.engine.free(), this.engine = void 0, this.libraryStarted = !1, this.libraryStoppingPromise = void 0, this.libraryInstantiationPromise = void 0, await (await this.adapterPromise)?.dispose(), this.adapterPromise = void 0, Re("library stopped");
        };
        return this.libraryStoppingPromise = this.tracingHelper.runInChildSpan("disconnect", r), this.libraryStoppingPromise;
    }
    version() {
        return this.versionInfo = this.library?.version(), this.versionInfo?.version ?? "unknown";
    }
    debugPanic(r) {
        return this.library?.debugPanic(r);
    }
    async request(r, { traceparent: t, interactiveTransaction: n }) {
        Re(`sending request, this.libraryStarted: ${this.libraryStarted}`);
        let i = JSON.stringify({
            traceparent: t
        }), o = JSON.stringify(r);
        try {
            await this.start();
            let s = await this.adapterPromise;
            this.executingQueryPromise = this.engine?.query(o, i, n?.id), this.lastQuery = o;
            let a = this.parseEngineResponse(await this.executingQueryPromise);
            if (a.errors) throw a.errors.length === 1 ? this.buildQueryError(a.errors[0], s?.errorRegistry) : new V(JSON.stringify(a.errors), {
                clientVersion: this.config.clientVersion
            });
            if (this.loggerRustPanic) throw this.loggerRustPanic;
            return {
                data: a
            };
        } catch (s) {
            if (s instanceof P) throw s;
            if (s.code === "GenericFailure" && s.message?.startsWith("PANIC:")) throw new ae(Po(this, s.message), this.config.clientVersion);
            let a = this.parseRequestError(s.message);
            throw typeof a == "string" ? s : new V(`${a.message}
${a.backtrace}`, {
                clientVersion: this.config.clientVersion
            });
        }
    }
    async requestBatch(r, { transaction: t, traceparent: n }) {
        Re("requestBatch");
        let i = Mr(r, t);
        await this.start();
        let o = await this.adapterPromise;
        this.lastQuery = JSON.stringify(i), this.executingQueryPromise = this.engine?.query(this.lastQuery, JSON.stringify({
            traceparent: n
        }), Ol(t));
        let s = await this.executingQueryPromise, a = this.parseEngineResponse(s);
        if (a.errors) throw a.errors.length === 1 ? this.buildQueryError(a.errors[0], o?.errorRegistry) : new V(JSON.stringify(a.errors), {
            clientVersion: this.config.clientVersion
        });
        let { batchResult: l, errors: u } = a;
        if (Array.isArray(l)) return l.map((c)=>c.errors && c.errors.length > 0 ? this.loggerRustPanic ?? this.buildQueryError(c.errors[0], o?.errorRegistry) : {
                data: c
            });
        throw u && u.length === 1 ? new Error(u[0].error) : new Error(JSON.stringify(a));
    }
    buildQueryError(r, t) {
        if (r.user_facing_error.is_panic) return new ae(Po(this, r.user_facing_error.message), this.config.clientVersion);
        let n = this.getExternalAdapterError(r.user_facing_error, t);
        return n ? n.error : $r(r, this.config.clientVersion, this.config.activeProvider);
    }
    getExternalAdapterError(r, t) {
        if (r.error_code === hf && t) {
            let n = r.meta?.id;
            ln(typeof n == "number", "Malformed external JS error received from the engine");
            let i = t.consumeError(n);
            return ln(i, "External error with reported id was not registered"), i;
        }
    }
    async metrics(r) {
        await this.start();
        let t = await this.engine.metrics(JSON.stringify(r));
        return r.format === "prometheus" ? t : this.parseEngineResponse(t);
    }
};
function xf(e) {
    return typeof e == "object" && e !== null && e.error_code !== void 0;
}
function Po(e, r) {
    return El({
        binaryTarget: e.binaryTarget,
        title: r,
        version: e.config.clientVersion,
        engineVersion: e.versionInfo?.commit,
        database: e.config.activeProvider,
        query: e.lastQuery
    });
}
function Fl({ url: e, adapter: r, copyEngine: t, targetBuildType: n }) {
    let i = [], o = [], s = (g)=>{
        i.push({
            _tag: "warning",
            value: g
        });
    }, a = (g)=>{
        let I = g.join(`
`);
        o.push({
            _tag: "error",
            value: I
        });
    }, l = !!e?.startsWith("prisma://"), u = an(e), c = !!r, p = l || u;
    !c && t && p && n !== "client" && n !== "wasm-compiler-edge" && s([
        "recommend--no-engine",
        "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)"
    ]);
    let d = p || !t;
    c && (d || n === "edge") && (n === "edge" ? a([
        "Prisma Client was configured to use the `adapter` option but it was imported via its `/edge` endpoint.",
        "Please either remove the `/edge` endpoint or remove the `adapter` from the Prisma Client constructor."
    ]) : p ? a([
        "You've provided both a driver adapter and an Accelerate database URL. Driver adapters currently cannot connect to Accelerate.",
        "Please provide either a driver adapter with a direct database URL or an Accelerate URL and no driver adapter."
    ]) : t || a([
        "Prisma Client was configured to use the `adapter` option but `prisma generate` was run with `--no-engine`.",
        "Please run `prisma generate` without `--no-engine` to be able to use Prisma Client with the adapter."
    ]));
    let f = {
        accelerate: d,
        ppg: u,
        driverAdapters: c
    };
    function h(g) {
        return g.length > 0;
    }
    return h(o) ? {
        ok: !1,
        diagnostics: {
            warnings: i,
            errors: o
        },
        isUsing: f
    } : {
        ok: !0,
        diagnostics: {
            warnings: i
        },
        isUsing: f
    };
}
function Ml({ copyEngine: e = !0 }, r) {
    let t;
    try {
        t = jr({
            inlineDatasources: r.inlineDatasources,
            overrideDatasources: r.overrideDatasources,
            env: {
                ...r.env,
                ...process.env
            },
            clientVersion: r.clientVersion
        });
    } catch  {}
    let { ok: n, isUsing: i, diagnostics: o } = Fl({
        url: t,
        adapter: r.adapter,
        copyEngine: e,
        targetBuildType: "library"
    });
    for (let p of o.warnings)at(...p.value);
    if (!n) {
        let p = o.errors[0];
        throw new Z(p.value, {
            clientVersion: r.clientVersion
        });
    }
    let s = Er(r.generator), a = s === "library", l = s === "binary", u = s === "client", c = (i.accelerate || i.ppg) && !i.driverAdapters;
    return i.accelerate ? new qt(r) : (i.driverAdapters, a ? new Qr(r) : new Qr(r));
}
function $l({ generator: e }) {
    return e?.previewFeatures ?? [];
}
var ql = (e)=>({
        command: e
    });
var Vl = (e)=>e.strings.reduce((r, t, n)=>`${r}@P${n}${t}`);
function Wr(e) {
    try {
        return jl(e, "fast");
    } catch  {
        return jl(e, "slow");
    }
}
function jl(e, r) {
    return JSON.stringify(e.map((t)=>Ul(t, r)));
}
function Ul(e, r) {
    if (Array.isArray(e)) return e.map((t)=>Ul(t, r));
    if (typeof e == "bigint") return {
        prisma__type: "bigint",
        prisma__value: e.toString()
    };
    if (vr(e)) return {
        prisma__type: "date",
        prisma__value: e.toJSON()
    };
    if (Fe.isDecimal(e)) return {
        prisma__type: "decimal",
        prisma__value: e.toJSON()
    };
    if (Buffer.isBuffer(e)) return {
        prisma__type: "bytes",
        prisma__value: e.toString("base64")
    };
    if (vf(e)) return {
        prisma__type: "bytes",
        prisma__value: Buffer.from(e).toString("base64")
    };
    if (ArrayBuffer.isView(e)) {
        let { buffer: t, byteOffset: n, byteLength: i } = e;
        return {
            prisma__type: "bytes",
            prisma__value: Buffer.from(t, n, i).toString("base64")
        };
    }
    return typeof e == "object" && r === "slow" ? Gl(e) : e;
}
function vf(e) {
    return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? !0 : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : !1;
}
function Gl(e) {
    if (typeof e != "object" || e === null) return e;
    if (typeof e.toJSON == "function") return e.toJSON();
    if (Array.isArray(e)) return e.map(Bl);
    let r = {};
    for (let t of Object.keys(e))r[t] = Bl(e[t]);
    return r;
}
function Bl(e) {
    return typeof e == "bigint" ? e.toString() : Gl(e);
}
var Pf = /^(\s*alter\s)/i, Ql = N("prisma:client");
function To(e, r, t, n) {
    if (!(e !== "postgresql" && e !== "cockroachdb") && t.length > 0 && Pf.exec(r)) throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
}
var So = ({ clientMethod: e, activeProvider: r })=>(t)=>{
        let n = "", i;
        if (Vn(t)) n = t.sql, i = {
            values: Wr(t.values),
            __prismaRawParameters__: !0
        };
        else if (Array.isArray(t)) {
            let [o, ...s] = t;
            n = o, i = {
                values: Wr(s || []),
                __prismaRawParameters__: !0
            };
        } else switch(r){
            case "sqlite":
            case "mysql":
                {
                    n = t.sql, i = {
                        values: Wr(t.values),
                        __prismaRawParameters__: !0
                    };
                    break;
                }
            case "cockroachdb":
            case "postgresql":
            case "postgres":
                {
                    n = t.text, i = {
                        values: Wr(t.values),
                        __prismaRawParameters__: !0
                    };
                    break;
                }
            case "sqlserver":
                {
                    n = Vl(t), i = {
                        values: Wr(t.values),
                        __prismaRawParameters__: !0
                    };
                    break;
                }
            default:
                throw new Error(`The ${r} provider does not support ${e}`);
        }
        return i?.values ? Ql(`prisma.${e}(${n}, ${i.values})`) : Ql(`prisma.${e}(${n})`), {
            query: n,
            parameters: i
        };
    }, Wl = {
    requestArgsToMiddlewareArgs (e) {
        return [
            e.strings,
            ...e.values
        ];
    },
    middlewareArgsToRequestArgs (e) {
        let [r, ...t] = e;
        return new ie(r, t);
    }
}, Jl = {
    requestArgsToMiddlewareArgs (e) {
        return [
            e
        ];
    },
    middlewareArgsToRequestArgs (e) {
        return e[0];
    }
};
function Ro(e) {
    return function(t, n) {
        let i, o = (s = e)=>{
            try {
                return s === void 0 || s?.kind === "itx" ? i ??= Kl(t(s)) : Kl(t(s));
            } catch (a) {
                return Promise.reject(a);
            }
        };
        return {
            get spec () {
                return n;
            },
            then (s, a) {
                return o().then(s, a);
            },
            catch (s) {
                return o().catch(s);
            },
            finally (s) {
                return o().finally(s);
            },
            requestTransaction (s) {
                let a = o(s);
                return a.requestTransaction ? a.requestTransaction(s) : a;
            },
            [Symbol.toStringTag]: "PrismaPromise"
        };
    };
}
function Kl(e) {
    return typeof e.then == "function" ? e : Promise.resolve(e);
}
var Tf = xi.split(".")[0], Sf = {
    isEnabled () {
        return !1;
    },
    getTraceParent () {
        return "00-10-10-00";
    },
    dispatchEngineSpans () {},
    getActiveContext () {},
    runInChildSpan (e, r) {
        return r();
    }
}, Ao = class {
    isEnabled() {
        return this.getGlobalTracingHelper().isEnabled();
    }
    getTraceParent(r) {
        return this.getGlobalTracingHelper().getTraceParent(r);
    }
    dispatchEngineSpans(r) {
        return this.getGlobalTracingHelper().dispatchEngineSpans(r);
    }
    getActiveContext() {
        return this.getGlobalTracingHelper().getActiveContext();
    }
    runInChildSpan(r, t) {
        return this.getGlobalTracingHelper().runInChildSpan(r, t);
    }
    getGlobalTracingHelper() {
        let r = globalThis[`V${Tf}_PRISMA_INSTRUMENTATION`], t = globalThis.PRISMA_INSTRUMENTATION;
        return r?.helper ?? t?.helper ?? Sf;
    }
};
function Hl() {
    return new Ao;
}
function Yl(e, r = ()=>{}) {
    let t, n = new Promise((i)=>t = i);
    return {
        then (i) {
            return --e === 0 && t(r()), i?.(n);
        }
    };
}
function zl(e) {
    return typeof e == "string" ? e : e.reduce((r, t)=>{
        let n = typeof t == "string" ? t : t.level;
        return n === "query" ? r : r && (t === "info" || r === "info") ? "info" : n;
    }, void 0);
}
function zn(e) {
    return typeof e.batchRequestIdx == "number";
}
function Zl(e) {
    if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow") return;
    let r = [];
    return e.modelName && r.push(e.modelName), e.query.arguments && r.push(Co(e.query.arguments)), r.push(Co(e.query.selection)), r.join("");
}
function Co(e) {
    return `(${Object.keys(e).sort().map((t)=>{
        let n = e[t];
        return typeof n == "object" && n !== null ? `(${t} ${Co(n)})` : t;
    }).join(" ")})`;
}
var Rf = {
    aggregate: !1,
    aggregateRaw: !1,
    createMany: !0,
    createManyAndReturn: !0,
    createOne: !0,
    deleteMany: !0,
    deleteOne: !0,
    executeRaw: !0,
    findFirst: !1,
    findFirstOrThrow: !1,
    findMany: !1,
    findRaw: !1,
    findUnique: !1,
    findUniqueOrThrow: !1,
    groupBy: !1,
    queryRaw: !1,
    runCommandRaw: !0,
    updateMany: !0,
    updateManyAndReturn: !0,
    updateOne: !0,
    upsertOne: !0
};
function Io(e) {
    return Rf[e];
}
var Zn = class {
    constructor(r){
        this.options = r;
        this.batches = {};
    }
    batches;
    tickActive = !1;
    request(r) {
        let t = this.options.batchBy(r);
        return t ? (this.batches[t] || (this.batches[t] = [], this.tickActive || (this.tickActive = !0, process.nextTick(()=>{
            this.dispatchBatches(), this.tickActive = !1;
        }))), new Promise((n, i)=>{
            this.batches[t].push({
                request: r,
                resolve: n,
                reject: i
            });
        })) : this.options.singleLoader(r);
    }
    dispatchBatches() {
        for(let r in this.batches){
            let t = this.batches[r];
            delete this.batches[r], t.length === 1 ? this.options.singleLoader(t[0].request).then((n)=>{
                n instanceof Error ? t[0].reject(n) : t[0].resolve(n);
            }).catch((n)=>{
                t[0].reject(n);
            }) : (t.sort((n, i)=>this.options.batchOrder(n.request, i.request)), this.options.batchLoader(t.map((n)=>n.request)).then((n)=>{
                if (n instanceof Error) for(let i = 0; i < t.length; i++)t[i].reject(n);
                else for(let i = 0; i < t.length; i++){
                    let o = n[i];
                    o instanceof Error ? t[i].reject(o) : t[i].resolve(o);
                }
            }).catch((n)=>{
                for(let i = 0; i < t.length; i++)t[i].reject(n);
            }));
        }
    }
    get [Symbol.toStringTag]() {
        return "DataLoader";
    }
};
function mr(e, r) {
    if (r === null) return r;
    switch(e){
        case "bigint":
            return BigInt(r);
        case "bytes":
            {
                let { buffer: t, byteOffset: n, byteLength: i } = Buffer.from(r, "base64");
                return new Uint8Array(t, n, i);
            }
        case "decimal":
            return new Fe(r);
        case "datetime":
        case "date":
            return new Date(r);
        case "time":
            return new Date(`1970-01-01T${r}Z`);
        case "bigint-array":
            return r.map((t)=>mr("bigint", t));
        case "bytes-array":
            return r.map((t)=>mr("bytes", t));
        case "decimal-array":
            return r.map((t)=>mr("decimal", t));
        case "datetime-array":
            return r.map((t)=>mr("datetime", t));
        case "date-array":
            return r.map((t)=>mr("date", t));
        case "time-array":
            return r.map((t)=>mr("time", t));
        default:
            return r;
    }
}
function Xn(e) {
    let r = [], t = Af(e);
    for(let n = 0; n < e.rows.length; n++){
        let i = e.rows[n], o = {
            ...t
        };
        for(let s = 0; s < i.length; s++)o[e.columns[s]] = mr(e.types[s], i[s]);
        r.push(o);
    }
    return r;
}
function Af(e) {
    let r = {};
    for(let t = 0; t < e.columns.length; t++)r[e.columns[t]] = null;
    return r;
}
var Cf = N("prisma:client:request_handler"), ei = class {
    client;
    dataloader;
    logEmitter;
    constructor(r, t){
        this.logEmitter = t, this.client = r, this.dataloader = new Zn({
            batchLoader: rl(async ({ requests: n, customDataProxyFetch: i })=>{
                let { transaction: o, otelParentCtx: s } = n[0], a = n.map((p)=>p.protocolQuery), l = this.client._tracingHelper.getTraceParent(s), u = n.some((p)=>Io(p.protocolQuery.action));
                return (await this.client._engine.requestBatch(a, {
                    traceparent: l,
                    transaction: If(o),
                    containsWrite: u,
                    customDataProxyFetch: i
                })).map((p, d)=>{
                    if (p instanceof Error) return p;
                    try {
                        return this.mapQueryEngineResult(n[d], p);
                    } catch (f) {
                        return f;
                    }
                });
            }),
            singleLoader: async (n)=>{
                let i = n.transaction?.kind === "itx" ? Xl(n.transaction) : void 0, o = await this.client._engine.request(n.protocolQuery, {
                    traceparent: this.client._tracingHelper.getTraceParent(),
                    interactiveTransaction: i,
                    isWrite: Io(n.protocolQuery.action),
                    customDataProxyFetch: n.customDataProxyFetch
                });
                return this.mapQueryEngineResult(n, o);
            },
            batchBy: (n)=>n.transaction?.id ? `transaction-${n.transaction.id}` : Zl(n.protocolQuery),
            batchOrder (n, i) {
                return n.transaction?.kind === "batch" && i.transaction?.kind === "batch" ? n.transaction.index - i.transaction.index : 0;
            }
        });
    }
    async request(r) {
        try {
            return await this.dataloader.request(r);
        } catch (t) {
            let { clientMethod: n, callsite: i, transaction: o, args: s, modelName: a } = r;
            this.handleAndLogRequestError({
                error: t,
                clientMethod: n,
                callsite: i,
                transaction: o,
                args: s,
                modelName: a,
                globalOmit: r.globalOmit
            });
        }
    }
    mapQueryEngineResult({ dataPath: r, unpacker: t }, n) {
        let i = n?.data, o = this.unpack(i, r, t);
        return process.env.PRISMA_CLIENT_GET_TIME ? {
            data: o
        } : o;
    }
    handleAndLogRequestError(r) {
        try {
            this.handleRequestError(r);
        } catch (t) {
            throw this.logEmitter && this.logEmitter.emit("error", {
                message: t.message,
                target: r.clientMethod,
                timestamp: new Date
            }), t;
        }
    }
    handleRequestError({ error: r, clientMethod: t, callsite: n, transaction: i, args: o, modelName: s, globalOmit: a }) {
        if (Cf(r), Df(r, i)) throw r;
        if (r instanceof z && Of(r)) {
            let u = eu(r.meta);
            Nn({
                args: o,
                errors: [
                    u
                ],
                callsite: n,
                errorFormat: this.client._errorFormat,
                originalMethod: t,
                clientVersion: this.client._clientVersion,
                globalOmit: a
            });
        }
        let l = r.message;
        if (n && (l = Tn({
            callsite: n,
            originalMethod: t,
            isPanic: r.isPanic,
            showColors: this.client._errorFormat === "pretty",
            message: l
        })), l = this.sanitizeMessage(l), r.code) {
            let u = s ? {
                modelName: s,
                ...r.meta
            } : r.meta;
            throw new z(l, {
                code: r.code,
                clientVersion: this.client._clientVersion,
                meta: u,
                batchRequestIdx: r.batchRequestIdx
            });
        } else {
            if (r.isPanic) throw new ae(l, this.client._clientVersion);
            if (r instanceof V) throw new V(l, {
                clientVersion: this.client._clientVersion,
                batchRequestIdx: r.batchRequestIdx
            });
            if (r instanceof P) throw new P(l, this.client._clientVersion);
            if (r instanceof ae) throw new ae(l, this.client._clientVersion);
        }
        throw r.clientVersion = this.client._clientVersion, r;
    }
    sanitizeMessage(r) {
        return this.client._errorFormat && this.client._errorFormat !== "pretty" ? wr(r) : r;
    }
    unpack(r, t, n) {
        if (!r || (r.data && (r = r.data), !r)) return r;
        let i = Object.keys(r)[0], o = Object.values(r)[0], s = t.filter((u)=>u !== "select" && u !== "include"), a = ao(o, s), l = i === "queryRaw" ? Xn(a) : Vr(a);
        return n ? n(l) : l;
    }
    get [Symbol.toStringTag]() {
        return "RequestHandler";
    }
};
function If(e) {
    if (e) {
        if (e.kind === "batch") return {
            kind: "batch",
            options: {
                isolationLevel: e.isolationLevel
            }
        };
        if (e.kind === "itx") return {
            kind: "itx",
            options: Xl(e)
        };
        ar(e, "Unknown transaction kind");
    }
}
function Xl(e) {
    return {
        id: e.id,
        payload: e.payload
    };
}
function Df(e, r) {
    return zn(e) && r?.kind === "batch" && e.batchRequestIdx !== r.index;
}
function Of(e) {
    return e.code === "P2009" || e.code === "P2012";
}
function eu(e) {
    if (e.kind === "Union") return {
        kind: "Union",
        errors: e.errors.map(eu)
    };
    if (Array.isArray(e.selectionPath)) {
        let [, ...r] = e.selectionPath;
        return {
            ...e,
            selectionPath: r
        };
    }
    return e;
}
var ru = xl;
var su = O(Ki());
var _ = class extends Error {
    constructor(r){
        super(r + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
    }
    get [Symbol.toStringTag]() {
        return "PrismaClientConstructorValidationError";
    }
};
x(_, "PrismaClientConstructorValidationError");
var tu = [
    "datasources",
    "datasourceUrl",
    "errorFormat",
    "adapter",
    "log",
    "transactionOptions",
    "omit",
    "__internal"
], nu = [
    "pretty",
    "colorless",
    "minimal"
], iu = [
    "info",
    "query",
    "warn",
    "error"
], kf = {
    datasources: (e, { datasourceNames: r })=>{
        if (e) {
            if (typeof e != "object" || Array.isArray(e)) throw new _(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`);
            for (let [t, n] of Object.entries(e)){
                if (!r.includes(t)) {
                    let i = Jr(t, r) || ` Available datasources: ${r.join(", ")}`;
                    throw new _(`Unknown datasource ${t} provided to PrismaClient constructor.${i}`);
                }
                if (typeof n != "object" || Array.isArray(n)) throw new _(`Invalid value ${JSON.stringify(e)} for datasource "${t}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
                if (n && typeof n == "object") for (let [i, o] of Object.entries(n)){
                    if (i !== "url") throw new _(`Invalid value ${JSON.stringify(e)} for datasource "${t}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
                    if (typeof o != "string") throw new _(`Invalid value ${JSON.stringify(o)} for datasource "${t}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
                }
            }
        }
    },
    adapter: (e, r)=>{
        if (!e && Er(r.generator) === "client") throw new _('Using engine type "client" requires a driver adapter to be provided to PrismaClient constructor.');
        if (e !== null) {
            if (e === void 0) throw new _('"adapter" property must not be undefined, use null to conditionally disable driver adapters.');
            if (Er(r.generator) === "binary") throw new _('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.');
        }
    },
    datasourceUrl: (e)=>{
        if (typeof e < "u" && typeof e != "string") throw new _(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    },
    errorFormat: (e)=>{
        if (e) {
            if (typeof e != "string") throw new _(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
            if (!nu.includes(e)) {
                let r = Jr(e, nu);
                throw new _(`Invalid errorFormat ${e} provided to PrismaClient constructor.${r}`);
            }
        }
    },
    log: (e)=>{
        if (!e) return;
        if (!Array.isArray(e)) throw new _(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
        function r(t) {
            if (typeof t == "string" && !iu.includes(t)) {
                let n = Jr(t, iu);
                throw new _(`Invalid log level "${t}" provided to PrismaClient constructor.${n}`);
            }
        }
        for (let t of e){
            r(t);
            let n = {
                level: r,
                emit: (i)=>{
                    let o = [
                        "stdout",
                        "event"
                    ];
                    if (!o.includes(i)) {
                        let s = Jr(i, o);
                        throw new _(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
                    }
                }
            };
            if (t && typeof t == "object") for (let [i, o] of Object.entries(t))if (n[i]) n[i](o);
            else throw new _(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
        }
    },
    transactionOptions: (e)=>{
        if (!e) return;
        let r = e.maxWait;
        if (r != null && r <= 0) throw new _(`Invalid value ${r} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);
        let t = e.timeout;
        if (t != null && t <= 0) throw new _(`Invalid value ${t} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`);
    },
    omit: (e, r)=>{
        if (typeof e != "object") throw new _('"omit" option is expected to be an object.');
        if (e === null) throw new _('"omit" option can not be `null`');
        let t = [];
        for (let [n, i] of Object.entries(e)){
            let o = Nf(n, r.runtimeDataModel);
            if (!o) {
                t.push({
                    kind: "UnknownModel",
                    modelKey: n
                });
                continue;
            }
            for (let [s, a] of Object.entries(i)){
                let l = o.fields.find((u)=>u.name === s);
                if (!l) {
                    t.push({
                        kind: "UnknownField",
                        modelKey: n,
                        fieldName: s
                    });
                    continue;
                }
                if (l.relationName) {
                    t.push({
                        kind: "RelationInOmit",
                        modelKey: n,
                        fieldName: s
                    });
                    continue;
                }
                typeof a != "boolean" && t.push({
                    kind: "InvalidFieldValue",
                    modelKey: n,
                    fieldName: s
                });
            }
        }
        if (t.length > 0) throw new _(Lf(e, t));
    },
    __internal: (e)=>{
        if (!e) return;
        let r = [
            "debug",
            "engine",
            "configOverride"
        ];
        if (typeof e != "object") throw new _(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
        for (let [t] of Object.entries(e))if (!r.includes(t)) {
            let n = Jr(t, r);
            throw new _(`Invalid property ${JSON.stringify(t)} for "__internal" provided to PrismaClient constructor.${n}`);
        }
    }
};
function au(e, r) {
    for (let [t, n] of Object.entries(e)){
        if (!tu.includes(t)) {
            let i = Jr(t, tu);
            throw new _(`Unknown property ${t} provided to PrismaClient constructor.${i}`);
        }
        kf[t](n, r);
    }
    if (e.datasourceUrl && e.datasources) throw new _('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them');
}
function Jr(e, r) {
    if (r.length === 0 || typeof e != "string") return "";
    let t = _f(e, r);
    return t ? ` Did you mean "${t}"?` : "";
}
function _f(e, r) {
    if (r.length === 0) return null;
    let t = r.map((i)=>({
            value: i,
            distance: (0, su.default)(e, i)
        }));
    t.sort((i, o)=>i.distance < o.distance ? -1 : 1);
    let n = t[0];
    return n.distance < 3 ? n.value : null;
}
function Nf(e, r) {
    return ou(r.models, e) ?? ou(r.types, e);
}
function ou(e, r) {
    let t = Object.keys(e).find((n)=>We(n) === r);
    if (t) return e[t];
}
function Lf(e, r) {
    let t = _r(e);
    for (let o of r)switch(o.kind){
        case "UnknownModel":
            t.arguments.getField(o.modelKey)?.markAsError(), t.addErrorMessage(()=>`Unknown model name: ${o.modelKey}.`);
            break;
        case "UnknownField":
            t.arguments.getDeepField([
                o.modelKey,
                o.fieldName
            ])?.markAsError(), t.addErrorMessage(()=>`Model "${o.modelKey}" does not have a field named "${o.fieldName}".`);
            break;
        case "RelationInOmit":
            t.arguments.getDeepField([
                o.modelKey,
                o.fieldName
            ])?.markAsError(), t.addErrorMessage(()=>'Relations are already excluded by default and can not be specified in "omit".');
            break;
        case "InvalidFieldValue":
            t.arguments.getDeepFieldValue([
                o.modelKey,
                o.fieldName
            ])?.markAsError(), t.addErrorMessage(()=>"Omit field option value must be a boolean.");
            break;
    }
    let { message: n, args: i } = _n(t, "colorless");
    return `Error validating "omit" option:

${i}

${n}`;
}
function lu(e) {
    return e.length === 0 ? Promise.resolve([]) : new Promise((r, t)=>{
        let n = new Array(e.length), i = null, o = !1, s = 0, a = ()=>{
            o || (s++, s === e.length && (o = !0, i ? t(i) : r(n)));
        }, l = (u)=>{
            o || (o = !0, t(u));
        };
        for(let u = 0; u < e.length; u++)e[u].then((c)=>{
            n[u] = c, a();
        }, (c)=>{
            if (!zn(c)) {
                l(c);
                return;
            }
            c.batchRequestIdx === u ? l(c) : (i || (i = c), a());
        });
    });
}
var rr = N("prisma:client");
typeof globalThis == "object" && (globalThis.NODE_CLIENT = !0);
var Ff = {
    requestArgsToMiddlewareArgs: (e)=>e,
    middlewareArgsToRequestArgs: (e)=>e
}, Mf = Symbol.for("prisma.client.transaction.id"), $f = {
    id: 0,
    nextId () {
        return ++this.id;
    }
};
function fu(e) {
    class r {
        _originalClient = this;
        _runtimeDataModel;
        _requestHandler;
        _connectionPromise;
        _disconnectionPromise;
        _engineConfig;
        _accelerateEngineConfig;
        _clientVersion;
        _errorFormat;
        _tracingHelper;
        _previewFeatures;
        _activeProvider;
        _globalOmit;
        _extensions;
        _engine;
        _appliedParent;
        _createPrismaPromise = Ro();
        constructor(n){
            e = n?.__internal?.configOverride?.(e) ?? e, sl(e), n && au(n, e);
            let i = new du.EventEmitter().on("error", ()=>{});
            this._extensions = Nr.empty(), this._previewFeatures = $l(e), this._clientVersion = e.clientVersion ?? ru, this._activeProvider = e.activeProvider, this._globalOmit = n?.omit, this._tracingHelper = Hl();
            let o = e.relativeEnvPaths && {
                rootEnvPath: e.relativeEnvPaths.rootEnvPath && ri.default.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath),
                schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && ri.default.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath)
            }, s;
            if (n?.adapter) {
                s = n.adapter;
                let l = e.activeProvider === "postgresql" || e.activeProvider === "cockroachdb" ? "postgres" : e.activeProvider;
                if (s.provider !== l) throw new P(`The Driver Adapter \`${s.adapterName}\`, based on \`${s.provider}\`, is not compatible with the provider \`${l}\` specified in the Prisma schema.`, this._clientVersion);
                if (n.datasources || n.datasourceUrl !== void 0) throw new P("Custom datasource configuration is not compatible with Prisma Driver Adapters. Please define the database connection string directly in the Driver Adapter configuration.", this._clientVersion);
            }
            let a = !s && o && st(o, {
                conflictCheck: "none"
            }) || e.injectableEdgeEnv?.();
            try {
                let l = n ?? {}, u = l.__internal ?? {}, c = u.debug === !0;
                c && N.enable("prisma:client");
                let p = ri.default.resolve(e.dirname, e.relativePath);
                mu.default.existsSync(p) || (p = e.dirname), rr("dirname", e.dirname), rr("relativePath", e.relativePath), rr("cwd", p);
                let d = u.engine || {};
                if (l.errorFormat ? this._errorFormat = l.errorFormat : ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : process.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = {
                    cwd: p,
                    dirname: e.dirname,
                    enableDebugLogs: c,
                    allowTriggerPanic: d.allowTriggerPanic,
                    prismaPath: d.binaryPath ?? void 0,
                    engineEndpoint: d.endpoint,
                    generator: e.generator,
                    showColors: this._errorFormat === "pretty",
                    logLevel: l.log && zl(l.log),
                    logQueries: l.log && !!(typeof l.log == "string" ? l.log === "query" : l.log.find((f)=>typeof f == "string" ? f === "query" : f.level === "query")),
                    env: a?.parsed ?? {},
                    flags: [],
                    engineWasm: e.engineWasm,
                    compilerWasm: e.compilerWasm,
                    clientVersion: e.clientVersion,
                    engineVersion: e.engineVersion,
                    previewFeatures: this._previewFeatures,
                    activeProvider: e.activeProvider,
                    inlineSchema: e.inlineSchema,
                    overrideDatasources: al(l, e.datasourceNames),
                    inlineDatasources: e.inlineDatasources,
                    inlineSchemaHash: e.inlineSchemaHash,
                    tracingHelper: this._tracingHelper,
                    transactionOptions: {
                        maxWait: l.transactionOptions?.maxWait ?? 2e3,
                        timeout: l.transactionOptions?.timeout ?? 5e3,
                        isolationLevel: l.transactionOptions?.isolationLevel
                    },
                    logEmitter: i,
                    isBundled: e.isBundled,
                    adapter: s
                }, this._accelerateEngineConfig = {
                    ...this._engineConfig,
                    accelerateUtils: {
                        resolveDatasourceUrl: jr,
                        getBatchRequestPayload: Mr,
                        prismaGraphQLToJSError: $r,
                        PrismaClientUnknownRequestError: V,
                        PrismaClientInitializationError: P,
                        PrismaClientKnownRequestError: z,
                        debug: N("prisma:client:accelerateEngine"),
                        engineVersion: cu.version,
                        clientVersion: e.clientVersion
                    }
                }, rr("clientVersion", e.clientVersion), this._engine = Ml(e, this._engineConfig), this._requestHandler = new ei(this, i), l.log) for (let f of l.log){
                    let h = typeof f == "string" ? f : f.emit === "stdout" ? f.level : null;
                    h && this.$on(h, (g)=>{
                        nt.log(`${nt.tags[h] ?? ""}`, g.message || g.query);
                    });
                }
            } catch (l) {
                throw l.clientVersion = this._clientVersion, l;
            }
            return this._appliedParent = Pt(this);
        }
        get [Symbol.toStringTag]() {
            return "PrismaClient";
        }
        $on(n, i) {
            return n === "beforeExit" ? this._engine.onBeforeExit(i) : n && this._engineConfig.logEmitter.on(n, i), this;
        }
        $connect() {
            try {
                return this._engine.start();
            } catch (n) {
                throw n.clientVersion = this._clientVersion, n;
            }
        }
        async $disconnect() {
            try {
                await this._engine.stop();
            } catch (n) {
                throw n.clientVersion = this._clientVersion, n;
            } finally{
                Uo();
            }
        }
        $executeRawInternal(n, i, o, s) {
            let a = this._activeProvider;
            return this._request({
                action: "executeRaw",
                args: o,
                transaction: n,
                clientMethod: i,
                argsMapper: So({
                    clientMethod: i,
                    activeProvider: a
                }),
                callsite: Ze(this._errorFormat),
                dataPath: [],
                middlewareArgsMapper: s
            });
        }
        $executeRaw(n, ...i) {
            return this._createPrismaPromise((o)=>{
                if (n.raw !== void 0 || n.sql !== void 0) {
                    let [s, a] = uu(n, i);
                    return To(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
                }
                throw new Z("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", {
                    clientVersion: this._clientVersion
                });
            });
        }
        $executeRawUnsafe(n, ...i) {
            return this._createPrismaPromise((o)=>(To(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [
                    n,
                    ...i
                ])));
        }
        $runCommandRaw(n) {
            if (e.activeProvider !== "mongodb") throw new Z(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, {
                clientVersion: this._clientVersion
            });
            return this._createPrismaPromise((i)=>this._request({
                    args: n,
                    clientMethod: "$runCommandRaw",
                    dataPath: [],
                    action: "runCommandRaw",
                    argsMapper: ql,
                    callsite: Ze(this._errorFormat),
                    transaction: i
                }));
        }
        async $queryRawInternal(n, i, o, s) {
            let a = this._activeProvider;
            return this._request({
                action: "queryRaw",
                args: o,
                transaction: n,
                clientMethod: i,
                argsMapper: So({
                    clientMethod: i,
                    activeProvider: a
                }),
                callsite: Ze(this._errorFormat),
                dataPath: [],
                middlewareArgsMapper: s
            });
        }
        $queryRaw(n, ...i) {
            return this._createPrismaPromise((o)=>{
                if (n.raw !== void 0 || n.sql !== void 0) return this.$queryRawInternal(o, "$queryRaw", ...uu(n, i));
                throw new Z("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", {
                    clientVersion: this._clientVersion
                });
            });
        }
        $queryRawTyped(n) {
            return this._createPrismaPromise((i)=>{
                if (!this._hasPreviewFlag("typedSql")) throw new Z("`typedSql` preview feature must be enabled in order to access $queryRawTyped API", {
                    clientVersion: this._clientVersion
                });
                return this.$queryRawInternal(i, "$queryRawTyped", n);
            });
        }
        $queryRawUnsafe(n, ...i) {
            return this._createPrismaPromise((o)=>this.$queryRawInternal(o, "$queryRawUnsafe", [
                    n,
                    ...i
                ]));
        }
        _transactionWithArray({ promises: n, options: i }) {
            let o = $f.nextId(), s = Yl(n.length), a = n.map((l, u)=>{
                if (l?.[Symbol.toStringTag] !== "PrismaPromise") throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
                let c = i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel, p = {
                    kind: "batch",
                    id: o,
                    index: u,
                    isolationLevel: c,
                    lock: s
                };
                return l.requestTransaction?.(p) ?? l;
            });
            return lu(a);
        }
        async _transactionWithCallback({ callback: n, options: i }) {
            let o = {
                traceparent: this._tracingHelper.getTraceParent()
            }, s = {
                maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait,
                timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout,
                isolationLevel: i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel
            }, a = await this._engine.transaction("start", o, s), l;
            try {
                let u = {
                    kind: "itx",
                    ...a
                };
                l = await n(this._createItxClient(u)), await this._engine.transaction("commit", o, a);
            } catch (u) {
                throw await this._engine.transaction("rollback", o, a).catch(()=>{}), u;
            }
            return l;
        }
        _createItxClient(n) {
            return he(Pt(he(Qa(this), [
                re("_appliedParent", ()=>this._appliedParent._createItxClient(n)),
                re("_createPrismaPromise", ()=>Ro(n)),
                re(Mf, ()=>n.id)
            ])), [
                Fr(Ya)
            ]);
        }
        $transaction(n, i) {
            let o;
            typeof n == "function" ? this._engineConfig.adapter?.adapterName === "@prisma/adapter-d1" ? o = ()=>{
                throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.");
            } : o = ()=>this._transactionWithCallback({
                    callback: n,
                    options: i
                }) : o = ()=>this._transactionWithArray({
                    promises: n,
                    options: i
                });
            let s = {
                name: "transaction",
                attributes: {
                    method: "$transaction"
                }
            };
            return this._tracingHelper.runInChildSpan(s, o);
        }
        _request(n) {
            n.otelParentCtx = this._tracingHelper.getActiveContext();
            let i = n.middlewareArgsMapper ?? Ff, o = {
                args: i.requestArgsToMiddlewareArgs(n.args),
                dataPath: n.dataPath,
                runInTransaction: !!n.transaction,
                action: n.action,
                model: n.model
            }, s = {
                operation: {
                    name: "operation",
                    attributes: {
                        method: o.action,
                        model: o.model,
                        name: o.model ? `${o.model}.${o.action}` : o.action
                    }
                }
            }, a = async (l)=>{
                let { runInTransaction: u, args: c, ...p } = l, d = {
                    ...n,
                    ...p
                };
                c && (d.args = i.middlewareArgsToRequestArgs(c)), n.transaction !== void 0 && u === !1 && delete d.transaction;
                let f = await el(this, d);
                return d.model ? Ha({
                    result: f,
                    modelName: d.model,
                    args: d.args,
                    extensions: this._extensions,
                    runtimeDataModel: this._runtimeDataModel,
                    globalOmit: this._globalOmit
                }) : f;
            };
            return this._tracingHelper.runInChildSpan(s.operation, ()=>new pu.AsyncResource("prisma-client-request").runInAsyncScope(()=>a(o)));
        }
        async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: l, argsMapper: u, transaction: c, unpacker: p, otelParentCtx: d, customDataProxyFetch: f }) {
            try {
                n = u ? u(n) : n;
                let h = {
                    name: "serialize"
                }, g = this._tracingHelper.runInChildSpan(h, ()=>$n({
                        modelName: l,
                        runtimeDataModel: this._runtimeDataModel,
                        action: a,
                        args: n,
                        clientMethod: i,
                        callsite: s,
                        extensions: this._extensions,
                        errorFormat: this._errorFormat,
                        clientVersion: this._clientVersion,
                        previewFeatures: this._previewFeatures,
                        globalOmit: this._globalOmit
                    }));
                return N.enabled("prisma:client") && (rr("Prisma Client call:"), rr(`prisma.${i}(${Na(n)})`), rr("Generated request:"), rr(JSON.stringify(g, null, 2) + `
`)), c?.kind === "batch" && await c.lock, this._requestHandler.request({
                    protocolQuery: g,
                    modelName: l,
                    action: a,
                    clientMethod: i,
                    dataPath: o,
                    callsite: s,
                    args: n,
                    extensions: this._extensions,
                    transaction: c,
                    unpacker: p,
                    otelParentCtx: d,
                    otelChildCtx: this._tracingHelper.getActiveContext(),
                    globalOmit: this._globalOmit,
                    customDataProxyFetch: f
                });
            } catch (h) {
                throw h.clientVersion = this._clientVersion, h;
            }
        }
        $metrics = new Lr(this);
        _hasPreviewFlag(n) {
            return !!this._engineConfig.previewFeatures?.includes(n);
        }
        $applyPendingMigrations() {
            return this._engine.applyPendingMigrations();
        }
        $extends = Wa;
    }
    return r;
}
function uu(e, r) {
    return qf(e) ? [
        new ie(e, r),
        Wl
    ] : [
        e,
        Jl
    ];
}
function qf(e) {
    return Array.isArray(e) && Array.isArray(e.raw);
}
var Vf = new Set([
    "toJSON",
    "$$typeof",
    "asymmetricMatch",
    Symbol.iterator,
    Symbol.toStringTag,
    Symbol.isConcatSpreadable,
    Symbol.toPrimitive
]);
function gu(e) {
    return new Proxy(e, {
        get (r, t) {
            if (t in r) return r[t];
            if (!Vf.has(t)) throw new TypeError(`Invalid enum value: ${String(t)}`);
        }
    });
}
function hu(e) {
    st(e, {
        conflictCheck: "warn"
    });
}
0 && (module.exports = {
    DMMF,
    Debug,
    Decimal,
    Extensions,
    MetricsClient,
    PrismaClientInitializationError,
    PrismaClientKnownRequestError,
    PrismaClientRustPanicError,
    PrismaClientUnknownRequestError,
    PrismaClientValidationError,
    Public,
    Sql,
    createParam,
    defineDmmfProperty,
    deserializeJsonResponse,
    deserializeRawResult,
    dmmfToRuntimeDataModel,
    empty,
    getPrismaClient,
    getRuntime,
    join,
    makeStrictEnum,
    makeTypedQueryFactory,
    objectEnumValues,
    raw,
    serializeJsonQuery,
    skip,
    sqltag,
    warnEnvConflicts,
    warnOnce
}); /*! Bundled license information:

decimal.js/decimal.mjs:
  (*!
   *  decimal.js v10.5.0
   *  An arbitrary-precision Decimal type for JavaScript.
   *  https://github.com/MikeMcl/decimal.js
   *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
   *  MIT Licence
   *)
*/  //# sourceMappingURL=library.js.map
}),
"[project]/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/.prisma/client/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */ // biome-ignore-all lint: generated file
Object.defineProperty(exports, "__esModule", {
    value: true
});
const { PrismaClientKnownRequestError, PrismaClientUnknownRequestError, PrismaClientRustPanicError, PrismaClientInitializationError, PrismaClientValidationError, getPrismaClient, sqltag, empty, join, raw, skip, Decimal, Debug, objectEnumValues, makeStrictEnum, Extensions, warnOnce, defineDmmfProperty, Public, getRuntime, createParam } = __turbopack_context__.r("[project]/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/runtime/library.js [app-rsc] (ecmascript)");
const Prisma = {};
exports.Prisma = Prisma;
exports.$Enums = {};
/**
 * Prisma Client JS version: 6.19.3
 * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
 */ Prisma.prismaVersion = {
    client: "6.19.3",
    engine: "c2990dca591cba766e3b7ef5d9e8a84796e47ab7"
};
Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
Prisma.PrismaClientValidationError = PrismaClientValidationError;
Prisma.Decimal = Decimal;
/**
 * Re-export of sql-template-tag
 */ Prisma.sql = sqltag;
Prisma.empty = empty;
Prisma.join = join;
Prisma.raw = raw;
Prisma.validator = Public.validator;
/**
* Extensions
*/ Prisma.getExtensionContext = Extensions.getExtensionContext;
Prisma.defineExtension = Extensions.defineExtension;
/**
 * Shorthand utilities for JSON filtering
 */ Prisma.DbNull = objectEnumValues.instances.DbNull;
Prisma.JsonNull = objectEnumValues.instances.JsonNull;
Prisma.AnyNull = objectEnumValues.instances.AnyNull;
Prisma.NullTypes = {
    DbNull: objectEnumValues.classes.DbNull,
    JsonNull: objectEnumValues.classes.JsonNull,
    AnyNull: objectEnumValues.classes.AnyNull
};
const path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
/**
 * Enums
 */ exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.Prisma.UserScalarFieldEnum = {
    id: 'id',
    clerkUserId: 'clerkUserId',
    email: 'email',
    name: 'name',
    imageUrl: 'imageUrl',
    phone: 'phone',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.Prisma.DealerScalarFieldEnum = {
    id: 'id',
    name: 'name',
    address: 'address',
    phone: 'phone',
    email: 'email',
    description: 'description',
    logoUrl: 'logoUrl',
    archived: 'archived',
    avgRating: 'avgRating',
    reviewCount: 'reviewCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ownerId: 'ownerId'
};
exports.Prisma.CarScalarFieldEnum = {
    id: 'id',
    make: 'make',
    model: 'model',
    year: 'year',
    color: 'color',
    mileage: 'mileage',
    fuelType: 'fuelType',
    transmission: 'transmission',
    bodyType: 'bodyType',
    seats: 'seats',
    description: 'description',
    status: 'status',
    featured: 'featured',
    images: 'images',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    avgRating: 'avgRating',
    countViews: 'countViews',
    durationView: 'durationView',
    reviewCount: 'reviewCount',
    statusChangedAt: 'statusChangedAt',
    statusChangedBy: 'statusChangedBy',
    dealerId: 'dealerId'
};
exports.Prisma.SaleInfoScalarFieldEnum = {
    id: 'id',
    carId: 'carId',
    price: 'price',
    negotiable: 'negotiable',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    statusChangedAt: 'statusChangedAt',
    statusChangedBy: 'statusChangedBy'
};
exports.Prisma.RentInfoScalarFieldEnum = {
    id: 'id',
    carId: 'carId',
    hourlyPrice: 'hourlyPrice',
    dailyPrice: 'dailyPrice',
    deposit: 'deposit',
    available: 'available',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    statusChangedAt: 'statusChangedAt',
    statusChangedBy: 'statusChangedBy'
};
exports.Prisma.WorkingHourScalarFieldEnum = {
    id: 'id',
    dayOfWeek: 'dayOfWeek',
    isOpen: 'isOpen',
    openTime: 'openTime',
    closeTime: 'closeTime',
    dealerId: 'dealerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.Prisma.BookingScalarFieldEnum = {
    id: 'id',
    carId: 'carId',
    userId: 'userId',
    dealerId: 'dealerId',
    bookingType: 'bookingType',
    bookingDate: 'bookingDate',
    startTime: 'startTime',
    endTime: 'endTime',
    totalPrice: 'totalPrice',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    statusChangedAt: 'statusChangedAt',
    statusChangedBy: 'statusChangedBy'
};
exports.Prisma.PurchaseScalarFieldEnum = {
    id: 'id',
    carId: 'carId',
    userId: 'userId',
    dealerId: 'dealerId',
    price: 'price',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    statusChangedAt: 'statusChangedAt',
    statusChangedBy: 'statusChangedBy'
};
exports.Prisma.UserSavedCarScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    carId: 'carId',
    savedAt: 'savedAt'
};
exports.Prisma.ReviewScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    carId: 'carId',
    dealerId: 'dealerId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.Prisma.MessageScalarFieldEnum = {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId',
    carId: 'carId',
    conversationId: 'conversationId',
    content: 'content',
    type: 'type',
    readAt: 'readAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.Prisma.ConversationScalarFieldEnum = {
    id: 'id',
    carId: 'carId',
    userId: 'userId',
    dealerId: 'dealerId',
    lastMessageAt: 'lastMessageAt',
    createdAt: 'createdAt'
};
exports.Prisma.NotificationScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    title: 'title',
    message: 'message',
    type: 'type',
    read: 'read',
    data: 'data',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.Prisma.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.Prisma.NullableJsonNullValueInput = {
    DbNull: Prisma.DbNull,
    JsonNull: Prisma.JsonNull
};
exports.Prisma.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.Prisma.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.Prisma.JsonNullValueFilter = {
    DbNull: Prisma.DbNull,
    JsonNull: Prisma.JsonNull,
    AnyNull: Prisma.AnyNull
};
exports.MessageType = exports.$Enums.MessageType = {
    TEXT: 'TEXT',
    IMAGE: 'IMAGE',
    FILE: 'FILE'
};
exports.NotificationType = exports.$Enums.NotificationType = {
    CHAT: 'CHAT',
    BOOKING: 'BOOKING',
    PURCHASE: 'PURCHASE',
    GENERAL: 'GENERAL'
};
exports.UserRole = exports.$Enums.UserRole = {
    USER: 'USER',
    ADMIN: 'ADMIN'
};
exports.CarStatus = exports.$Enums.CarStatus = {
    AVAILABLE: 'AVAILABLE',
    RESERVED: 'RESERVED',
    SOLD: 'SOLD',
    RENTED: 'RENTED',
    MAINTENANCE: 'MAINTENANCE',
    PENDING: 'PENDING'
};
exports.SaleStatus = exports.$Enums.SaleStatus = {
    AVAILABLE: 'AVAILABLE',
    RESERVED: 'RESERVED',
    SOLD: 'SOLD',
    NEGOTIATION: 'NEGOTIATION'
};
exports.PurchaseStatus = exports.$Enums.PurchaseStatus = {
    PENDING: 'PENDING',
    CONFIRMED: 'CONFIRMED',
    COMPLETED: 'COMPLETED',
    CANCELLED: 'CANCELLED'
};
exports.BookingStatus = exports.$Enums.BookingStatus = {
    PENDING: 'PENDING',
    CONFIRMED: 'CONFIRMED',
    ACTIVE: 'ACTIVE',
    COMPLETED: 'COMPLETED',
    CANCELLED: 'CANCELLED',
    NO_SHOW: 'NO_SHOW'
};
exports.BookingType = exports.$Enums.BookingType = {
    RENTAL: 'RENTAL',
    TEST_DRIVE: 'TEST_DRIVE'
};
exports.DayOfWeek = exports.$Enums.DayOfWeek = {
    MONDAY: 'MONDAY',
    TUESDAY: 'TUESDAY',
    WEDNESDAY: 'WEDNESDAY',
    THURSDAY: 'THURSDAY',
    FRIDAY: 'FRIDAY',
    SATURDAY: 'SATURDAY',
    SUNDAY: 'SUNDAY'
};
exports.Prisma.ModelName = {
    User: 'User',
    Dealer: 'Dealer',
    Car: 'Car',
    SaleInfo: 'SaleInfo',
    RentInfo: 'RentInfo',
    WorkingHour: 'WorkingHour',
    Booking: 'Booking',
    Purchase: 'Purchase',
    UserSavedCar: 'UserSavedCar',
    Review: 'Review',
    Message: 'Message',
    Conversation: 'Conversation',
    Notification: 'Notification'
};
/**
 * Create the Client
 */ const config = {
    "generator": {
        "name": "client",
        "provider": {
            "fromEnvVar": null,
            "value": "prisma-client-js"
        },
        "output": {
            "value": "C:\\Users\\chuan\\Desktop\\Car\\car_marketplace\\node_modules\\.pnpm\\@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e\\node_modules\\@prisma\\client",
            "fromEnvVar": null
        },
        "config": {
            "engineType": "library"
        },
        "binaryTargets": [
            {
                "fromEnvVar": null,
                "value": "windows",
                "native": true
            }
        ],
        "previewFeatures": [],
        "sourceFilePath": "C:\\Users\\chuan\\Desktop\\Car\\car_marketplace\\packages\\database\\prisma\\schema.prisma"
    },
    "relativeEnvPaths": {
        "rootEnvPath": null,
        "schemaEnvPath": "../../../../../../packages/database/.env"
    },
    "relativePath": "../../../../../../packages/database/prisma",
    "clientVersion": "6.19.3",
    "engineVersion": "c2990dca591cba766e3b7ef5d9e8a84796e47ab7",
    "datasourceNames": [
        "db"
    ],
    "activeProvider": "postgresql",
    "postinstall": false,
    "inlineDatasources": {
        "db": {
            "url": {
                "fromEnvVar": "DATABASE_URLV2",
                "value": null
            }
        }
    },
    "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n}\n\ndatasource db {\n  provider  = \"postgresql\"\n  url       = env(\"DATABASE_URLV2\")\n  directUrl = env(\"DIRECT_URLV2\")\n}\n\nmodel User {\n  id          String   @id @default(uuid())\n  clerkUserId String   @unique\n  email       String   @unique\n  name        String?\n  imageUrl    String?\n  phone       String?\n  role        UserRole @default(USER)\n  createdAt   DateTime @default(now())\n  updatedAt   DateTime @updatedAt\n\n  // Relations\n  dealers          Dealer[]       @relation(\"UserDealer\")\n  reviews          Review[]\n  bookings         Booking[]      @relation(\"UserBookings\")\n  savedCars        UserSavedCar[]\n  purchases        Purchase[]     @relation(\"UserPurchases\")\n  sentMessages     Message[]      @relation(\"SentMessages\")\n  receivedMessages Message[]      @relation(\"ReceivedMessages\")\n  notifications    Notification[]\n  conversations    Conversation[]\n}\n\nmodel Dealer {\n  id          String   @id @default(uuid())\n  name        String\n  address     String\n  phone       String\n  email       String   @unique\n  description String?\n  logoUrl     String?\n  archived    Boolean  @default(false)\n  avgRating   Float?   @default(0)\n  reviewCount Int      @default(0)\n  createdAt   DateTime @default(now())\n  updatedAt   DateTime @updatedAt\n\n  ownerId       String?\n  owner         User?          @relation(\"UserDealer\", fields: [ownerId], references: [id])\n  cars          Car[]\n  reviews       Review[]       @relation(\"DealerReviews\")\n  workingHours  WorkingHour[]\n  bookings      Booking[]      @relation(\"DealerBookings\")\n  purchases     Purchase[]     @relation(\"DealerPurchases\")\n  conversations Conversation[]\n\n  @@index([name])\n}\n\nmodel Car {\n  id              String    @id @default(uuid())\n  make            String\n  model           String\n  year            Int\n  color           String\n  mileage         Int\n  fuelType        String\n  transmission    String\n  bodyType        String\n  seats           Int?\n  description     String\n  status          CarStatus @default(AVAILABLE)\n  featured        Boolean   @default(false)\n  images          String[]\n  createdAt       DateTime  @default(now())\n  updatedAt       DateTime  @updatedAt\n  avgRating       Float?    @default(0)\n  countViews      Int       @default(0)\n  durationView    Int       @default(0)\n  reviewCount     Int       @default(0)\n  statusChangedAt DateTime?\n  statusChangedBy String?\n\n  dealerId      String?\n  dealer        Dealer?        @relation(fields: [dealerId], references: [id], onDelete: Cascade)\n  saleInfo      SaleInfo?\n  rentInfo      RentInfo?\n  bookings      Booking[]      @relation(\"CarBookings\")\n  savedBy       UserSavedCar[]\n  reviews       Review[]       @relation(\"CarReviews\")\n  purchases     Purchase[]     @relation(\"CarPurchases\")\n  messages      Message[]\n  conversations Conversation[]\n\n  @@index([make, model])\n  @@index([bodyType])\n  @@index([year])\n  @@index([status])\n  @@index([fuelType])\n  @@index([featured])\n  @@index([countViews])\n}\n\nmodel SaleInfo {\n  id              String     @id @default(uuid())\n  carId           String     @unique\n  price           Decimal    @db.Decimal(13, 2)\n  negotiable      Boolean    @default(false)\n  status          SaleStatus @default(AVAILABLE)\n  createdAt       DateTime   @default(now())\n  updatedAt       DateTime   @updatedAt\n  statusChangedAt DateTime?\n  statusChangedBy String?\n\n  car Car @relation(fields: [carId], references: [id], onDelete: Cascade)\n\n  @@index([carId])\n  @@index([price])\n  @@index([status])\n}\n\nmodel RentInfo {\n  id              String    @id @default(uuid())\n  carId           String    @unique\n  hourlyPrice     Decimal   @db.Decimal(13, 2)\n  dailyPrice      Decimal?  @db.Decimal(13, 2)\n  deposit         Decimal?  @db.Decimal(13, 2)\n  available       Boolean   @default(true)\n  createdAt       DateTime  @default(now())\n  updatedAt       DateTime  @updatedAt\n  statusChangedAt DateTime?\n  statusChangedBy String?\n\n  car Car @relation(fields: [carId], references: [id], onDelete: Cascade)\n\n  @@index([carId])\n  @@index([hourlyPrice])\n  @@index([available])\n}\n\nmodel WorkingHour {\n  id        String    @id @default(uuid())\n  dayOfWeek DayOfWeek\n  isOpen    Boolean   @default(true)\n  openTime  Int\n  closeTime Int\n  dealerId  String\n  createdAt DateTime  @default(now())\n  updatedAt DateTime  @updatedAt\n\n  dealer Dealer @relation(fields: [dealerId], references: [id], onDelete: Cascade)\n\n  @@unique([dealerId, dayOfWeek])\n  @@index([dealerId])\n  @@index([dayOfWeek])\n  @@index([isOpen])\n}\n\nmodel Booking {\n  id              String        @id @default(uuid())\n  carId           String\n  userId          String\n  dealerId        String\n  bookingType     BookingType   @default(RENTAL)\n  bookingDate     DateTime      @db.Date\n  startTime       DateTime\n  endTime         DateTime\n  totalPrice      Decimal?      @db.Decimal(13, 2) // For rentals\n  status          BookingStatus @default(PENDING)\n  notes           String?\n  createdAt       DateTime      @default(now())\n  updatedAt       DateTime      @updatedAt\n  statusChangedAt DateTime?\n  statusChangedBy String?\n\n  car    Car    @relation(\"CarBookings\", fields: [carId], references: [id], onDelete: Cascade)\n  user   User   @relation(\"UserBookings\", fields: [userId], references: [id], onDelete: Cascade)\n  dealer Dealer @relation(\"DealerBookings\", fields: [dealerId], references: [id], onDelete: Cascade)\n\n  @@index([carId])\n  @@index([userId])\n  @@index([dealerId])\n  @@index([bookingDate])\n  @@index([status])\n  @@index([bookingType])\n  @@index([carId, bookingDate])\n}\n\nmodel Purchase {\n  id              String         @id @default(uuid())\n  carId           String\n  userId          String\n  dealerId        String\n  price           Decimal        @db.Decimal(13, 2)\n  status          PurchaseStatus @default(PENDING)\n  createdAt       DateTime       @default(now())\n  updatedAt       DateTime       @updatedAt\n  statusChangedAt DateTime?\n  statusChangedBy String?\n\n  car    Car    @relation(\"CarPurchases\", fields: [carId], references: [id], onDelete: Cascade)\n  user   User   @relation(\"UserPurchases\", fields: [userId], references: [id], onDelete: Cascade)\n  dealer Dealer @relation(\"DealerPurchases\", fields: [dealerId], references: [id], onDelete: Cascade)\n\n  @@index([carId])\n  @@index([userId])\n  @@index([dealerId])\n  @@index([status])\n}\n\nmodel UserSavedCar {\n  id      String   @id @default(uuid())\n  userId  String\n  carId   String\n  savedAt DateTime @default(now())\n\n  car  Car  @relation(fields: [carId], references: [id], onDelete: Cascade)\n  user User @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@unique([userId, carId])\n  @@index([userId])\n  @@index([carId])\n}\n\nmodel Review {\n  id        String   @id @default(uuid())\n  userId    String\n  carId     String?\n  dealerId  String?\n  rating    Int\n  comment   String?\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  car    Car?    @relation(\"CarReviews\", fields: [carId], references: [id], onDelete: Cascade)\n  dealer Dealer? @relation(\"DealerReviews\", fields: [dealerId], references: [id], onDelete: Cascade)\n  user   User    @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@index([carId])\n  @@index([dealerId])\n  @@index([rating])\n}\n\nmodel Message {\n  id             String      @id @default(uuid())\n  senderId       String\n  receiverId     String\n  carId          String?\n  conversationId String\n  content        String\n  type           MessageType @default(TEXT)\n  readAt         DateTime?\n  createdAt      DateTime    @default(now())\n  updatedAt      DateTime    @updatedAt\n\n  sender       User         @relation(\"SentMessages\", fields: [senderId], references: [id], onDelete: Cascade)\n  receiver     User         @relation(\"ReceivedMessages\", fields: [receiverId], references: [id], onDelete: Cascade)\n  car          Car?         @relation(fields: [carId], references: [id], onDelete: Cascade)\n  conversation Conversation @relation(fields: [conversationId], references: [id], onDelete: Cascade)\n\n  @@index([senderId, receiverId, createdAt])\n  @@index([receiverId])\n}\n\nmodel Conversation {\n  id            String    @id @default(uuid())\n  carId         String\n  userId        String\n  dealerId      String\n  lastMessageAt DateTime? @default(now())\n  createdAt     DateTime  @default(now())\n\n  car      Car       @relation(fields: [carId], references: [id], onDelete: Cascade)\n  user     User      @relation(fields: [userId], references: [id], onDelete: Cascade)\n  dealer   Dealer    @relation(fields: [dealerId], references: [id], onDelete: Cascade)\n  messages Message[]\n\n  @@unique([carId, userId, dealerId])\n  @@index([userId, lastMessageAt(sort: Desc)]) //get conversations newest first\n  @@index([dealerId, lastMessageAt(sort: Desc)]) //dealer dashboard\n}\n\nmodel Notification {\n  id        String           @id @default(uuid())\n  userId    String\n  title     String\n  message   String\n  type      NotificationType @default(GENERAL)\n  read      Boolean          @default(false)\n  data      Json?            @db.Json\n  createdAt DateTime         @default(now())\n  updatedAt DateTime         @updatedAt\n\n  user User @relation(fields: [userId], references: [id])\n\n  @@index([userId])\n  @@index([read])\n}\n\nenum MessageType {\n  TEXT\n  IMAGE\n  FILE\n}\n\nenum NotificationType {\n  CHAT\n  BOOKING\n  PURCHASE\n  GENERAL\n}\n\nenum UserRole {\n  USER\n  ADMIN\n}\n\nenum CarStatus {\n  AVAILABLE\n  RESERVED\n  SOLD\n  RENTED\n  MAINTENANCE\n  PENDING\n}\n\nenum SaleStatus {\n  AVAILABLE\n  RESERVED\n  SOLD\n  NEGOTIATION\n}\n\nenum PurchaseStatus {\n  PENDING\n  CONFIRMED\n  COMPLETED\n  CANCELLED\n}\n\nenum BookingStatus {\n  PENDING\n  CONFIRMED\n  ACTIVE\n  COMPLETED\n  CANCELLED\n  NO_SHOW\n}\n\nenum BookingType {\n  RENTAL\n  TEST_DRIVE\n}\n\nenum DayOfWeek {\n  MONDAY\n  TUESDAY\n  WEDNESDAY\n  THURSDAY\n  FRIDAY\n  SATURDAY\n  SUNDAY\n}\n",
    "inlineSchemaHash": "cd3ef6861b7912dd11366886d7f1934035e4b3579345f02f23b5b359433f1e3b",
    "copyEngine": true
};
const fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
config.dirname = ("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/.prisma/client");
if (!fs.existsSync(path.join(("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/.prisma/client"), 'schema.prisma'))) {
    const alternativePaths = [
        "../../node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/.prisma/client",
        "../node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/.prisma/client"
    ];
    const alternativePath = alternativePaths.find((altPath)=>{
        return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'));
    }) ?? alternativePaths[0];
    config.dirname = path.join(process.cwd(), alternativePath);
    config.isBundled = true;
}
config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clerkUserId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imageUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserRole\",\"nativeType\":null,\"default\":\"USER\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"dealers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Dealer\",\"nativeType\":null,\"relationName\":\"UserDealer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reviews\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Review\",\"nativeType\":null,\"relationName\":\"ReviewToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bookings\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Booking\",\"nativeType\":null,\"relationName\":\"UserBookings\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"savedCars\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserSavedCar\",\"nativeType\":null,\"relationName\":\"UserToUserSavedCar\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"purchases\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Purchase\",\"nativeType\":null,\"relationName\":\"UserPurchases\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentMessages\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Message\",\"nativeType\":null,\"relationName\":\"SentMessages\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"receivedMessages\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Message\",\"nativeType\":null,\"relationName\":\"ReceivedMessages\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notifications\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Notification\",\"nativeType\":null,\"relationName\":\"NotificationToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conversations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Conversation\",\"nativeType\":null,\"relationName\":\"ConversationToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Dealer\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logoUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"archived\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avgRating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reviewCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"ownerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"owner\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"UserDealer\",\"relationFromFields\":[\"ownerId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cars\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Car\",\"nativeType\":null,\"relationName\":\"CarToDealer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reviews\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Review\",\"nativeType\":null,\"relationName\":\"DealerReviews\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workingHours\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorkingHour\",\"nativeType\":null,\"relationName\":\"DealerToWorkingHour\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bookings\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Booking\",\"nativeType\":null,\"relationName\":\"DealerBookings\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"purchases\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Purchase\",\"nativeType\":null,\"relationName\":\"DealerPurchases\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conversations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Conversation\",\"nativeType\":null,\"relationName\":\"ConversationToDealer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Car\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"make\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"model\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"year\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mileage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fuelType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transmission\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bodyType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seats\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"CarStatus\",\"nativeType\":null,\"default\":\"AVAILABLE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"featured\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"images\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"avgRating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"countViews\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"durationView\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reviewCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statusChangedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statusChangedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dealerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dealer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Dealer\",\"nativeType\":null,\"relationName\":\"CarToDealer\",\"relationFromFields\":[\"dealerId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"saleInfo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SaleInfo\",\"nativeType\":null,\"relationName\":\"CarToSaleInfo\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rentInfo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RentInfo\",\"nativeType\":null,\"relationName\":\"CarToRentInfo\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bookings\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Booking\",\"nativeType\":null,\"relationName\":\"CarBookings\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"savedBy\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserSavedCar\",\"nativeType\":null,\"relationName\":\"CarToUserSavedCar\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reviews\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Review\",\"nativeType\":null,\"relationName\":\"CarReviews\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"purchases\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Purchase\",\"nativeType\":null,\"relationName\":\"CarPurchases\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"messages\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Message\",\"nativeType\":null,\"relationName\":\"CarToMessage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conversations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Conversation\",\"nativeType\":null,\"relationName\":\"CarToConversation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SaleInfo\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"13\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"negotiable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"SaleStatus\",\"nativeType\":null,\"default\":\"AVAILABLE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"statusChangedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statusChangedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"car\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Car\",\"nativeType\":null,\"relationName\":\"CarToSaleInfo\",\"relationFromFields\":[\"carId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RentInfo\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hourlyPrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"13\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dailyPrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"13\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deposit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"13\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"available\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"statusChangedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statusChangedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"car\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Car\",\"nativeType\":null,\"relationName\":\"CarToRentInfo\",\"relationFromFields\":[\"carId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"WorkingHour\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dayOfWeek\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DayOfWeek\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isOpen\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"openTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"closeTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dealerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"dealer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Dealer\",\"nativeType\":null,\"relationName\":\"DealerToWorkingHour\",\"relationFromFields\":[\"dealerId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"dealerId\",\"dayOfWeek\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"dealerId\",\"dayOfWeek\"]}],\"isGenerated\":false},\"Booking\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dealerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bookingType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BookingType\",\"nativeType\":null,\"default\":\"RENTAL\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bookingDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalPrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"13\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BookingStatus\",\"nativeType\":null,\"default\":\"PENDING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"statusChangedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statusChangedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"car\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Car\",\"nativeType\":null,\"relationName\":\"CarBookings\",\"relationFromFields\":[\"carId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"UserBookings\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dealer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Dealer\",\"nativeType\":null,\"relationName\":\"DealerBookings\",\"relationFromFields\":[\"dealerId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Purchase\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dealerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"13\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"PurchaseStatus\",\"nativeType\":null,\"default\":\"PENDING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"statusChangedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statusChangedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"car\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Car\",\"nativeType\":null,\"relationName\":\"CarPurchases\",\"relationFromFields\":[\"carId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"UserPurchases\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dealer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Dealer\",\"nativeType\":null,\"relationName\":\"DealerPurchases\",\"relationFromFields\":[\"dealerId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserSavedCar\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"savedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"car\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Car\",\"nativeType\":null,\"relationName\":\"CarToUserSavedCar\",\"relationFromFields\":[\"carId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"UserToUserSavedCar\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"userId\",\"carId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"userId\",\"carId\"]}],\"isGenerated\":false},\"Review\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dealerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"car\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Car\",\"nativeType\":null,\"relationName\":\"CarReviews\",\"relationFromFields\":[\"carId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dealer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Dealer\",\"nativeType\":null,\"relationName\":\"DealerReviews\",\"relationFromFields\":[\"dealerId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"ReviewToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Message\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"senderId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"receiverId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conversationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"MessageType\",\"nativeType\":null,\"default\":\"TEXT\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"readAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"sender\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"SentMessages\",\"relationFromFields\":[\"senderId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"receiver\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"ReceivedMessages\",\"relationFromFields\":[\"receiverId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"car\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Car\",\"nativeType\":null,\"relationName\":\"CarToMessage\",\"relationFromFields\":[\"carId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conversation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Conversation\",\"nativeType\":null,\"relationName\":\"ConversationToMessage\",\"relationFromFields\":[\"conversationId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Conversation\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dealerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastMessageAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"car\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Car\",\"nativeType\":null,\"relationName\":\"CarToConversation\",\"relationFromFields\":[\"carId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"ConversationToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dealer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Dealer\",\"nativeType\":null,\"relationName\":\"ConversationToDealer\",\"relationFromFields\":[\"dealerId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"messages\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Message\",\"nativeType\":null,\"relationName\":\"ConversationToMessage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"carId\",\"userId\",\"dealerId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"carId\",\"userId\",\"dealerId\"]}],\"isGenerated\":false},\"Notification\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"NotificationType\",\"nativeType\":null,\"default\":\"GENERAL\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"read\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":[\"Json\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"NotificationToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"MessageType\":{\"values\":[{\"name\":\"TEXT\",\"dbName\":null},{\"name\":\"IMAGE\",\"dbName\":null},{\"name\":\"FILE\",\"dbName\":null}],\"dbName\":null},\"NotificationType\":{\"values\":[{\"name\":\"CHAT\",\"dbName\":null},{\"name\":\"BOOKING\",\"dbName\":null},{\"name\":\"PURCHASE\",\"dbName\":null},{\"name\":\"GENERAL\",\"dbName\":null}],\"dbName\":null},\"UserRole\":{\"values\":[{\"name\":\"USER\",\"dbName\":null},{\"name\":\"ADMIN\",\"dbName\":null}],\"dbName\":null},\"CarStatus\":{\"values\":[{\"name\":\"AVAILABLE\",\"dbName\":null},{\"name\":\"RESERVED\",\"dbName\":null},{\"name\":\"SOLD\",\"dbName\":null},{\"name\":\"RENTED\",\"dbName\":null},{\"name\":\"MAINTENANCE\",\"dbName\":null},{\"name\":\"PENDING\",\"dbName\":null}],\"dbName\":null},\"SaleStatus\":{\"values\":[{\"name\":\"AVAILABLE\",\"dbName\":null},{\"name\":\"RESERVED\",\"dbName\":null},{\"name\":\"SOLD\",\"dbName\":null},{\"name\":\"NEGOTIATION\",\"dbName\":null}],\"dbName\":null},\"PurchaseStatus\":{\"values\":[{\"name\":\"PENDING\",\"dbName\":null},{\"name\":\"CONFIRMED\",\"dbName\":null},{\"name\":\"COMPLETED\",\"dbName\":null},{\"name\":\"CANCELLED\",\"dbName\":null}],\"dbName\":null},\"BookingStatus\":{\"values\":[{\"name\":\"PENDING\",\"dbName\":null},{\"name\":\"CONFIRMED\",\"dbName\":null},{\"name\":\"ACTIVE\",\"dbName\":null},{\"name\":\"COMPLETED\",\"dbName\":null},{\"name\":\"CANCELLED\",\"dbName\":null},{\"name\":\"NO_SHOW\",\"dbName\":null}],\"dbName\":null},\"BookingType\":{\"values\":[{\"name\":\"RENTAL\",\"dbName\":null},{\"name\":\"TEST_DRIVE\",\"dbName\":null}],\"dbName\":null},\"DayOfWeek\":{\"values\":[{\"name\":\"MONDAY\",\"dbName\":null},{\"name\":\"TUESDAY\",\"dbName\":null},{\"name\":\"WEDNESDAY\",\"dbName\":null},{\"name\":\"THURSDAY\",\"dbName\":null},{\"name\":\"FRIDAY\",\"dbName\":null},{\"name\":\"SATURDAY\",\"dbName\":null},{\"name\":\"SUNDAY\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}");
defineDmmfProperty(exports.Prisma, config.runtimeDataModel);
config.engineWasm = undefined;
config.compilerWasm = undefined;
const { warnEnvConflicts } = __turbopack_context__.r("[project]/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/runtime/library.js [app-rsc] (ecmascript)");
warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
});
const PrismaClient = getPrismaClient(config);
exports.PrismaClient = PrismaClient;
Object.assign(exports, Prisma);
// file annotations for bundling tools to include these files
path.join(("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/.prisma/client"), "query_engine-windows.dll.node");
path.join(process.cwd(), "../../node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/.prisma/client/query_engine-windows.dll.node");
// file annotations for bundling tools to include these files
path.join(("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/.prisma/client"), "schema.prisma");
path.join(process.cwd(), "../../node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/.prisma/client/schema.prisma");
}),
"[project]/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/.prisma/client/default.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */ // biome-ignore-all lint: generated file
module.exports = {
    ...__turbopack_context__.r("[project]/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/.prisma/client/index.js [app-rsc] (ecmascript)")
};
}),
"[project]/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/default.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    ...__turbopack_context__.r("[project]/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/.prisma/client/default.js [app-rsc] (ecmascript)")
};
}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.39.6_next@1_e4f340dc9b8ea70227def0df2f5abc5c/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7f1751175aba60fac908ae79b712aaf3102b3e2787":"invalidateCacheAction"},"",""] */ __turbopack_context__.s([
    "invalidateCacheAction",
    ()=>invalidateCacheAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function invalidateCacheAction() {
    void (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).delete(`__clerk_invalidate_cache_cookie_${Date.now()}`);
}
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    invalidateCacheAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(invalidateCacheAction, "7f1751175aba60fac908ae79b712aaf3102b3e2787", null);
}),
"[project]/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/constants.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */ /**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */ __turbopack_context__.s([
    "constructFromSymbol",
    ()=>constructFromSymbol,
    "daysInWeek",
    ()=>daysInWeek,
    "daysInYear",
    ()=>daysInYear,
    "maxTime",
    ()=>maxTime,
    "millisecondsInDay",
    ()=>millisecondsInDay,
    "millisecondsInHour",
    ()=>millisecondsInHour,
    "millisecondsInMinute",
    ()=>millisecondsInMinute,
    "millisecondsInSecond",
    ()=>millisecondsInSecond,
    "millisecondsInWeek",
    ()=>millisecondsInWeek,
    "minTime",
    ()=>minTime,
    "minutesInDay",
    ()=>minutesInDay,
    "minutesInHour",
    ()=>minutesInHour,
    "minutesInMonth",
    ()=>minutesInMonth,
    "minutesInYear",
    ()=>minutesInYear,
    "monthsInQuarter",
    ()=>monthsInQuarter,
    "monthsInYear",
    ()=>monthsInYear,
    "quartersInYear",
    ()=>quartersInYear,
    "secondsInDay",
    ()=>secondsInDay,
    "secondsInHour",
    ()=>secondsInHour,
    "secondsInMinute",
    ()=>secondsInMinute,
    "secondsInMonth",
    ()=>secondsInMonth,
    "secondsInQuarter",
    ()=>secondsInQuarter,
    "secondsInWeek",
    ()=>secondsInWeek,
    "secondsInYear",
    ()=>secondsInYear
]);
const daysInWeek = 7;
const daysInYear = 365.2425;
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
const minTime = -maxTime;
const millisecondsInWeek = 604800000;
const millisecondsInDay = 86400000;
const millisecondsInMinute = 60000;
const millisecondsInHour = 3600000;
const millisecondsInSecond = 1000;
const minutesInYear = 525600;
const minutesInMonth = 43200;
const minutesInDay = 1440;
const minutesInHour = 60;
const monthsInQuarter = 3;
const monthsInYear = 12;
const quartersInYear = 4;
const secondsInHour = 3600;
const secondsInMinute = 60;
const secondsInDay = secondsInHour * 24;
const secondsInWeek = secondsInDay * 7;
const secondsInYear = secondsInDay * daysInYear;
const secondsInMonth = secondsInYear / 12;
const secondsInQuarter = secondsInMonth * 3;
const constructFromSymbol = Symbol.for("constructDateFrom");
}),
"[project]/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/constructFrom.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "constructFrom",
    ()=>constructFrom,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/constants.js [app-rsc] (ecmascript)");
;
function constructFrom(date, value) {
    if (typeof date === "function") return date(value);
    if (date && typeof date === "object" && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constructFromSymbol"] in date) return date[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constructFromSymbol"]](value);
    if (date instanceof Date) return new date.constructor(value);
    return new Date(value);
}
const __TURBOPACK__default__export__ = constructFrom;
}),
"[project]/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/normalizeDates.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeDates",
    ()=>normalizeDates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/constructFrom.js [app-rsc] (ecmascript)");
;
function normalizeDates(context, ...dates) {
    const normalize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constructFrom"].bind(null, context || dates.find((date)=>typeof date === "object"));
    return dates.map(normalize);
}
}),
"[project]/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/toDate.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "toDate",
    ()=>toDate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/constructFrom.js [app-rsc] (ecmascript)");
;
function toDate(argument, context) {
    // [TODO] Get rid of `toDate` or `constructFrom`?
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constructFrom"])(context || argument, argument);
}
const __TURBOPACK__default__export__ = toDate;
}),
"[project]/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTimezoneOffsetInMilliseconds",
    ()=>getTimezoneOffsetInMilliseconds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/toDate.js [app-rsc] (ecmascript)");
;
function getTimezoneOffsetInMilliseconds(date) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toDate"])(date);
    const utcDate = new Date(Date.UTC(_date.getFullYear(), _date.getMonth(), _date.getDate(), _date.getHours(), _date.getMinutes(), _date.getSeconds(), _date.getMilliseconds()));
    utcDate.setUTCFullYear(_date.getFullYear());
    return +date - +utcDate;
}
}),
"[project]/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfDay.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfDay",
    ()=>startOfDay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/toDate.js [app-rsc] (ecmascript)");
;
function startOfDay(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    _date.setHours(0, 0, 0, 0);
    return _date;
}
const __TURBOPACK__default__export__ = startOfDay;
}),
"[project]/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/differenceInCalendarDays.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "differenceInCalendarDays",
    ()=>differenceInCalendarDays
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/normalizeDates.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/startOfDay.js [app-rsc] (ecmascript)");
;
;
;
;
function differenceInCalendarDays(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeDates"])(options?.in, laterDate, earlierDate);
    const laterStartOfDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(laterDate_);
    const earlierStartOfDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(earlierDate_);
    const laterTimestamp = +laterStartOfDay - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTimezoneOffsetInMilliseconds"])(laterStartOfDay);
    const earlierTimestamp = +earlierStartOfDay - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTimezoneOffsetInMilliseconds"])(earlierStartOfDay);
    // Round the number of days to the nearest integer because the number of
    // milliseconds in a day is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round((laterTimestamp - earlierTimestamp) / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["millisecondsInDay"]);
}
const __TURBOPACK__default__export__ = differenceInCalendarDays;
}),
"[project]/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/differenceInDays.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "differenceInDays",
    ()=>differenceInDays
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/normalizeDates.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/differenceInCalendarDays.js [app-rsc] (ecmascript)");
;
;
function differenceInDays(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeDates"])(options?.in, laterDate, earlierDate);
    const sign = compareLocalAsc(laterDate_, earlierDate_);
    const difference = Math.abs((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["differenceInCalendarDays"])(laterDate_, earlierDate_));
    laterDate_.setDate(laterDate_.getDate() - sign * difference);
    // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
    // If so, result must be decreased by 1 in absolute value
    const isLastDayNotFull = Number(compareLocalAsc(laterDate_, earlierDate_) === -sign);
    const result = sign * (difference - isLastDayNotFull);
    // Prevent negative zero
    return result === 0 ? 0 : result;
}
// Like `compareAsc` but uses local time not UTC, which is needed
// for accurate equality comparisons of UTC timestamps that end up
// having the same representation in local time, e.g. one hour before
// DST ends vs. the instant that DST ends.
function compareLocalAsc(laterDate, earlierDate) {
    const diff = laterDate.getFullYear() - earlierDate.getFullYear() || laterDate.getMonth() - earlierDate.getMonth() || laterDate.getDate() - earlierDate.getDate() || laterDate.getHours() - earlierDate.getHours() || laterDate.getMinutes() - earlierDate.getMinutes() || laterDate.getSeconds() - earlierDate.getSeconds() || laterDate.getMilliseconds() - earlierDate.getMilliseconds();
    if (diff < 0) return -1;
    if (diff > 0) return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
    return diff;
}
const __TURBOPACK__default__export__ = differenceInDays;
}),
"[project]/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/getRoundingMethod.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRoundingMethod",
    ()=>getRoundingMethod
]);
function getRoundingMethod(method) {
    return (number)=>{
        const round = method ? Math[method] : Math.trunc;
        const result = round(number);
        // Prevent negative zero
        return result === 0 ? 0 : result;
    };
}
}),
"[project]/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/differenceInHours.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "differenceInHours",
    ()=>differenceInHours
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getRoundingMethod$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/getRoundingMethod.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/_lib/normalizeDates.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/constants.js [app-rsc] (ecmascript)");
;
;
;
function differenceInHours(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeDates"])(options?.in, laterDate, earlierDate);
    const diff = (+laterDate_ - +earlierDate_) / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["millisecondsInHour"];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getRoundingMethod$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRoundingMethod"])(options?.roundingMethod)(diff);
}
const __TURBOPACK__default__export__ = differenceInHours;
}),
"[project]/node_modules/.pnpm/@google+generative-ai@0.24.1/node_modules/@google/generative-ai/dist/index.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Contains the list of OpenAPI data types
 * as defined by https://swagger.io/docs/specification/data-models/data-types/
 * @public
 */ __turbopack_context__.s([
    "BlockReason",
    ()=>BlockReason,
    "ChatSession",
    ()=>ChatSession,
    "DynamicRetrievalMode",
    ()=>DynamicRetrievalMode,
    "ExecutableCodeLanguage",
    ()=>ExecutableCodeLanguage,
    "FinishReason",
    ()=>FinishReason,
    "FunctionCallingMode",
    ()=>FunctionCallingMode,
    "GenerativeModel",
    ()=>GenerativeModel,
    "GoogleGenerativeAI",
    ()=>GoogleGenerativeAI,
    "GoogleGenerativeAIAbortError",
    ()=>GoogleGenerativeAIAbortError,
    "GoogleGenerativeAIError",
    ()=>GoogleGenerativeAIError,
    "GoogleGenerativeAIFetchError",
    ()=>GoogleGenerativeAIFetchError,
    "GoogleGenerativeAIRequestInputError",
    ()=>GoogleGenerativeAIRequestInputError,
    "GoogleGenerativeAIResponseError",
    ()=>GoogleGenerativeAIResponseError,
    "HarmBlockThreshold",
    ()=>HarmBlockThreshold,
    "HarmCategory",
    ()=>HarmCategory,
    "HarmProbability",
    ()=>HarmProbability,
    "Outcome",
    ()=>Outcome,
    "POSSIBLE_ROLES",
    ()=>POSSIBLE_ROLES,
    "SchemaType",
    ()=>SchemaType,
    "TaskType",
    ()=>TaskType
]);
var SchemaType;
(function(SchemaType) {
    /** String type. */ SchemaType["STRING"] = "string";
    /** Number type. */ SchemaType["NUMBER"] = "number";
    /** Integer type. */ SchemaType["INTEGER"] = "integer";
    /** Boolean type. */ SchemaType["BOOLEAN"] = "boolean";
    /** Array type. */ SchemaType["ARRAY"] = "array";
    /** Object type. */ SchemaType["OBJECT"] = "object";
})(SchemaType || (SchemaType = {}));
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @public
 */ var ExecutableCodeLanguage;
(function(ExecutableCodeLanguage) {
    ExecutableCodeLanguage["LANGUAGE_UNSPECIFIED"] = "language_unspecified";
    ExecutableCodeLanguage["PYTHON"] = "python";
})(ExecutableCodeLanguage || (ExecutableCodeLanguage = {}));
/**
 * Possible outcomes of code execution.
 * @public
 */ var Outcome;
(function(Outcome) {
    /**
     * Unspecified status. This value should not be used.
     */ Outcome["OUTCOME_UNSPECIFIED"] = "outcome_unspecified";
    /**
     * Code execution completed successfully.
     */ Outcome["OUTCOME_OK"] = "outcome_ok";
    /**
     * Code execution finished but with a failure. `stderr` should contain the
     * reason.
     */ Outcome["OUTCOME_FAILED"] = "outcome_failed";
    /**
     * Code execution ran for too long, and was cancelled. There may or may not
     * be a partial output present.
     */ Outcome["OUTCOME_DEADLINE_EXCEEDED"] = "outcome_deadline_exceeded";
})(Outcome || (Outcome = {}));
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Possible roles.
 * @public
 */ const POSSIBLE_ROLES = [
    "user",
    "model",
    "function",
    "system"
];
/**
 * Harm categories that would cause prompts or candidates to be blocked.
 * @public
 */ var HarmCategory;
(function(HarmCategory) {
    HarmCategory["HARM_CATEGORY_UNSPECIFIED"] = "HARM_CATEGORY_UNSPECIFIED";
    HarmCategory["HARM_CATEGORY_HATE_SPEECH"] = "HARM_CATEGORY_HATE_SPEECH";
    HarmCategory["HARM_CATEGORY_SEXUALLY_EXPLICIT"] = "HARM_CATEGORY_SEXUALLY_EXPLICIT";
    HarmCategory["HARM_CATEGORY_HARASSMENT"] = "HARM_CATEGORY_HARASSMENT";
    HarmCategory["HARM_CATEGORY_DANGEROUS_CONTENT"] = "HARM_CATEGORY_DANGEROUS_CONTENT";
    HarmCategory["HARM_CATEGORY_CIVIC_INTEGRITY"] = "HARM_CATEGORY_CIVIC_INTEGRITY";
})(HarmCategory || (HarmCategory = {}));
/**
 * Threshold above which a prompt or candidate will be blocked.
 * @public
 */ var HarmBlockThreshold;
(function(HarmBlockThreshold) {
    /** Threshold is unspecified. */ HarmBlockThreshold["HARM_BLOCK_THRESHOLD_UNSPECIFIED"] = "HARM_BLOCK_THRESHOLD_UNSPECIFIED";
    /** Content with NEGLIGIBLE will be allowed. */ HarmBlockThreshold["BLOCK_LOW_AND_ABOVE"] = "BLOCK_LOW_AND_ABOVE";
    /** Content with NEGLIGIBLE and LOW will be allowed. */ HarmBlockThreshold["BLOCK_MEDIUM_AND_ABOVE"] = "BLOCK_MEDIUM_AND_ABOVE";
    /** Content with NEGLIGIBLE, LOW, and MEDIUM will be allowed. */ HarmBlockThreshold["BLOCK_ONLY_HIGH"] = "BLOCK_ONLY_HIGH";
    /** All content will be allowed. */ HarmBlockThreshold["BLOCK_NONE"] = "BLOCK_NONE";
})(HarmBlockThreshold || (HarmBlockThreshold = {}));
/**
 * Probability that a prompt or candidate matches a harm category.
 * @public
 */ var HarmProbability;
(function(HarmProbability) {
    /** Probability is unspecified. */ HarmProbability["HARM_PROBABILITY_UNSPECIFIED"] = "HARM_PROBABILITY_UNSPECIFIED";
    /** Content has a negligible chance of being unsafe. */ HarmProbability["NEGLIGIBLE"] = "NEGLIGIBLE";
    /** Content has a low chance of being unsafe. */ HarmProbability["LOW"] = "LOW";
    /** Content has a medium chance of being unsafe. */ HarmProbability["MEDIUM"] = "MEDIUM";
    /** Content has a high chance of being unsafe. */ HarmProbability["HIGH"] = "HIGH";
})(HarmProbability || (HarmProbability = {}));
/**
 * Reason that a prompt was blocked.
 * @public
 */ var BlockReason;
(function(BlockReason) {
    // A blocked reason was not specified.
    BlockReason["BLOCKED_REASON_UNSPECIFIED"] = "BLOCKED_REASON_UNSPECIFIED";
    // Content was blocked by safety settings.
    BlockReason["SAFETY"] = "SAFETY";
    // Content was blocked, but the reason is uncategorized.
    BlockReason["OTHER"] = "OTHER";
})(BlockReason || (BlockReason = {}));
/**
 * Reason that a candidate finished.
 * @public
 */ var FinishReason;
(function(FinishReason) {
    // Default value. This value is unused.
    FinishReason["FINISH_REASON_UNSPECIFIED"] = "FINISH_REASON_UNSPECIFIED";
    // Natural stop point of the model or provided stop sequence.
    FinishReason["STOP"] = "STOP";
    // The maximum number of tokens as specified in the request was reached.
    FinishReason["MAX_TOKENS"] = "MAX_TOKENS";
    // The candidate content was flagged for safety reasons.
    FinishReason["SAFETY"] = "SAFETY";
    // The candidate content was flagged for recitation reasons.
    FinishReason["RECITATION"] = "RECITATION";
    // The candidate content was flagged for using an unsupported language.
    FinishReason["LANGUAGE"] = "LANGUAGE";
    // Token generation stopped because the content contains forbidden terms.
    FinishReason["BLOCKLIST"] = "BLOCKLIST";
    // Token generation stopped for potentially containing prohibited content.
    FinishReason["PROHIBITED_CONTENT"] = "PROHIBITED_CONTENT";
    // Token generation stopped because the content potentially contains Sensitive Personally Identifiable Information (SPII).
    FinishReason["SPII"] = "SPII";
    // The function call generated by the model is invalid.
    FinishReason["MALFORMED_FUNCTION_CALL"] = "MALFORMED_FUNCTION_CALL";
    // Unknown reason.
    FinishReason["OTHER"] = "OTHER";
})(FinishReason || (FinishReason = {}));
/**
 * Task type for embedding content.
 * @public
 */ var TaskType;
(function(TaskType) {
    TaskType["TASK_TYPE_UNSPECIFIED"] = "TASK_TYPE_UNSPECIFIED";
    TaskType["RETRIEVAL_QUERY"] = "RETRIEVAL_QUERY";
    TaskType["RETRIEVAL_DOCUMENT"] = "RETRIEVAL_DOCUMENT";
    TaskType["SEMANTIC_SIMILARITY"] = "SEMANTIC_SIMILARITY";
    TaskType["CLASSIFICATION"] = "CLASSIFICATION";
    TaskType["CLUSTERING"] = "CLUSTERING";
})(TaskType || (TaskType = {}));
/**
 * @public
 */ var FunctionCallingMode;
(function(FunctionCallingMode) {
    // Unspecified function calling mode. This value should not be used.
    FunctionCallingMode["MODE_UNSPECIFIED"] = "MODE_UNSPECIFIED";
    // Default model behavior, model decides to predict either a function call
    // or a natural language repspose.
    FunctionCallingMode["AUTO"] = "AUTO";
    // Model is constrained to always predicting a function call only.
    // If "allowed_function_names" are set, the predicted function call will be
    // limited to any one of "allowed_function_names", else the predicted
    // function call will be any one of the provided "function_declarations".
    FunctionCallingMode["ANY"] = "ANY";
    // Model will not predict any function call. Model behavior is same as when
    // not passing any function declarations.
    FunctionCallingMode["NONE"] = "NONE";
})(FunctionCallingMode || (FunctionCallingMode = {}));
/**
 * The mode of the predictor to be used in dynamic retrieval.
 * @public
 */ var DynamicRetrievalMode;
(function(DynamicRetrievalMode) {
    // Unspecified function calling mode. This value should not be used.
    DynamicRetrievalMode["MODE_UNSPECIFIED"] = "MODE_UNSPECIFIED";
    // Run retrieval only when system decides it is necessary.
    DynamicRetrievalMode["MODE_DYNAMIC"] = "MODE_DYNAMIC";
})(DynamicRetrievalMode || (DynamicRetrievalMode = {}));
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Basic error type for this SDK.
 * @public
 */ class GoogleGenerativeAIError extends Error {
    constructor(message){
        super(`[GoogleGenerativeAI Error]: ${message}`);
    }
}
/**
 * Errors in the contents of a response from the model. This includes parsing
 * errors, or responses including a safety block reason.
 * @public
 */ class GoogleGenerativeAIResponseError extends GoogleGenerativeAIError {
    constructor(message, response){
        super(message);
        this.response = response;
    }
}
/**
 * Error class covering HTTP errors when calling the server. Includes HTTP
 * status, statusText, and optional details, if provided in the server response.
 * @public
 */ class GoogleGenerativeAIFetchError extends GoogleGenerativeAIError {
    constructor(message, status, statusText, errorDetails){
        super(message);
        this.status = status;
        this.statusText = statusText;
        this.errorDetails = errorDetails;
    }
}
/**
 * Errors in the contents of a request originating from user input.
 * @public
 */ class GoogleGenerativeAIRequestInputError extends GoogleGenerativeAIError {
}
/**
 * Error thrown when a request is aborted, either due to a timeout or
 * intentional cancellation by the user.
 * @public
 */ class GoogleGenerativeAIAbortError extends GoogleGenerativeAIError {
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const DEFAULT_BASE_URL = "https://generativelanguage.googleapis.com";
const DEFAULT_API_VERSION = "v1beta";
/**
 * We can't `require` package.json if this runs on web. We will use rollup to
 * swap in the version number here at build time.
 */ const PACKAGE_VERSION = "0.24.1";
const PACKAGE_LOG_HEADER = "genai-js";
var Task;
(function(Task) {
    Task["GENERATE_CONTENT"] = "generateContent";
    Task["STREAM_GENERATE_CONTENT"] = "streamGenerateContent";
    Task["COUNT_TOKENS"] = "countTokens";
    Task["EMBED_CONTENT"] = "embedContent";
    Task["BATCH_EMBED_CONTENTS"] = "batchEmbedContents";
})(Task || (Task = {}));
class RequestUrl {
    constructor(model, task, apiKey, stream, requestOptions){
        this.model = model;
        this.task = task;
        this.apiKey = apiKey;
        this.stream = stream;
        this.requestOptions = requestOptions;
    }
    toString() {
        var _a, _b;
        const apiVersion = ((_a = this.requestOptions) === null || _a === void 0 ? void 0 : _a.apiVersion) || DEFAULT_API_VERSION;
        const baseUrl = ((_b = this.requestOptions) === null || _b === void 0 ? void 0 : _b.baseUrl) || DEFAULT_BASE_URL;
        let url = `${baseUrl}/${apiVersion}/${this.model}:${this.task}`;
        if (this.stream) {
            url += "?alt=sse";
        }
        return url;
    }
}
/**
 * Simple, but may become more complex if we add more versions to log.
 */ function getClientHeaders(requestOptions) {
    const clientHeaders = [];
    if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.apiClient) {
        clientHeaders.push(requestOptions.apiClient);
    }
    clientHeaders.push(`${PACKAGE_LOG_HEADER}/${PACKAGE_VERSION}`);
    return clientHeaders.join(" ");
}
async function getHeaders(url) {
    var _a;
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("x-goog-api-client", getClientHeaders(url.requestOptions));
    headers.append("x-goog-api-key", url.apiKey);
    let customHeaders = (_a = url.requestOptions) === null || _a === void 0 ? void 0 : _a.customHeaders;
    if (customHeaders) {
        if (!(customHeaders instanceof Headers)) {
            try {
                customHeaders = new Headers(customHeaders);
            } catch (e) {
                throw new GoogleGenerativeAIRequestInputError(`unable to convert customHeaders value ${JSON.stringify(customHeaders)} to Headers: ${e.message}`);
            }
        }
        for (const [headerName, headerValue] of customHeaders.entries()){
            if (headerName === "x-goog-api-key") {
                throw new GoogleGenerativeAIRequestInputError(`Cannot set reserved header name ${headerName}`);
            } else if (headerName === "x-goog-api-client") {
                throw new GoogleGenerativeAIRequestInputError(`Header name ${headerName} can only be set using the apiClient field`);
            }
            headers.append(headerName, headerValue);
        }
    }
    return headers;
}
async function constructModelRequest(model, task, apiKey, stream, body, requestOptions) {
    const url = new RequestUrl(model, task, apiKey, stream, requestOptions);
    return {
        url: url.toString(),
        fetchOptions: Object.assign(Object.assign({}, buildFetchOptions(requestOptions)), {
            method: "POST",
            headers: await getHeaders(url),
            body
        })
    };
}
async function makeModelRequest(model, task, apiKey, stream, body, requestOptions = {}, // Allows this to be stubbed for tests
fetchFn = fetch) {
    const { url, fetchOptions } = await constructModelRequest(model, task, apiKey, stream, body, requestOptions);
    return makeRequest(url, fetchOptions, fetchFn);
}
async function makeRequest(url, fetchOptions, fetchFn = fetch) {
    let response;
    try {
        response = await fetchFn(url, fetchOptions);
    } catch (e) {
        handleResponseError(e, url);
    }
    if (!response.ok) {
        await handleResponseNotOk(response, url);
    }
    return response;
}
function handleResponseError(e, url) {
    let err = e;
    if (err.name === "AbortError") {
        err = new GoogleGenerativeAIAbortError(`Request aborted when fetching ${url.toString()}: ${e.message}`);
        err.stack = e.stack;
    } else if (!(e instanceof GoogleGenerativeAIFetchError || e instanceof GoogleGenerativeAIRequestInputError)) {
        err = new GoogleGenerativeAIError(`Error fetching from ${url.toString()}: ${e.message}`);
        err.stack = e.stack;
    }
    throw err;
}
async function handleResponseNotOk(response, url) {
    let message = "";
    let errorDetails;
    try {
        const json = await response.json();
        message = json.error.message;
        if (json.error.details) {
            message += ` ${JSON.stringify(json.error.details)}`;
            errorDetails = json.error.details;
        }
    } catch (e) {
    // ignored
    }
    throw new GoogleGenerativeAIFetchError(`Error fetching from ${url.toString()}: [${response.status} ${response.statusText}] ${message}`, response.status, response.statusText, errorDetails);
}
/**
 * Generates the request options to be passed to the fetch API.
 * @param requestOptions - The user-defined request options.
 * @returns The generated request options.
 */ function buildFetchOptions(requestOptions) {
    const fetchOptions = {};
    if ((requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.signal) !== undefined || (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeout) >= 0) {
        const controller = new AbortController();
        if ((requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeout) >= 0) {
            setTimeout(()=>controller.abort(), requestOptions.timeout);
        }
        if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.signal) {
            requestOptions.signal.addEventListener("abort", ()=>{
                controller.abort();
            });
        }
        fetchOptions.signal = controller.signal;
    }
    return fetchOptions;
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Adds convenience helper methods to a response object, including stream
 * chunks (as long as each chunk is a complete GenerateContentResponse JSON).
 */ function addHelpers(response) {
    response.text = ()=>{
        if (response.candidates && response.candidates.length > 0) {
            if (response.candidates.length > 1) {
                console.warn(`This response had ${response.candidates.length} ` + `candidates. Returning text from the first candidate only. ` + `Access response.candidates directly to use the other candidates.`);
            }
            if (hadBadFinishReason(response.candidates[0])) {
                throw new GoogleGenerativeAIResponseError(`${formatBlockErrorMessage(response)}`, response);
            }
            return getText(response);
        } else if (response.promptFeedback) {
            throw new GoogleGenerativeAIResponseError(`Text not available. ${formatBlockErrorMessage(response)}`, response);
        }
        return "";
    };
    /**
     * TODO: remove at next major version
     */ response.functionCall = ()=>{
        if (response.candidates && response.candidates.length > 0) {
            if (response.candidates.length > 1) {
                console.warn(`This response had ${response.candidates.length} ` + `candidates. Returning function calls from the first candidate only. ` + `Access response.candidates directly to use the other candidates.`);
            }
            if (hadBadFinishReason(response.candidates[0])) {
                throw new GoogleGenerativeAIResponseError(`${formatBlockErrorMessage(response)}`, response);
            }
            console.warn(`response.functionCall() is deprecated. ` + `Use response.functionCalls() instead.`);
            return getFunctionCalls(response)[0];
        } else if (response.promptFeedback) {
            throw new GoogleGenerativeAIResponseError(`Function call not available. ${formatBlockErrorMessage(response)}`, response);
        }
        return undefined;
    };
    response.functionCalls = ()=>{
        if (response.candidates && response.candidates.length > 0) {
            if (response.candidates.length > 1) {
                console.warn(`This response had ${response.candidates.length} ` + `candidates. Returning function calls from the first candidate only. ` + `Access response.candidates directly to use the other candidates.`);
            }
            if (hadBadFinishReason(response.candidates[0])) {
                throw new GoogleGenerativeAIResponseError(`${formatBlockErrorMessage(response)}`, response);
            }
            return getFunctionCalls(response);
        } else if (response.promptFeedback) {
            throw new GoogleGenerativeAIResponseError(`Function call not available. ${formatBlockErrorMessage(response)}`, response);
        }
        return undefined;
    };
    return response;
}
/**
 * Returns all text found in all parts of first candidate.
 */ function getText(response) {
    var _a, _b, _c, _d;
    const textStrings = [];
    if ((_b = (_a = response.candidates) === null || _a === void 0 ? void 0 : _a[0].content) === null || _b === void 0 ? void 0 : _b.parts) {
        for (const part of (_d = (_c = response.candidates) === null || _c === void 0 ? void 0 : _c[0].content) === null || _d === void 0 ? void 0 : _d.parts){
            if (part.text) {
                textStrings.push(part.text);
            }
            if (part.executableCode) {
                textStrings.push("\n```" + part.executableCode.language + "\n" + part.executableCode.code + "\n```\n");
            }
            if (part.codeExecutionResult) {
                textStrings.push("\n```\n" + part.codeExecutionResult.output + "\n```\n");
            }
        }
    }
    if (textStrings.length > 0) {
        return textStrings.join("");
    } else {
        return "";
    }
}
/**
 * Returns functionCall of first candidate.
 */ function getFunctionCalls(response) {
    var _a, _b, _c, _d;
    const functionCalls = [];
    if ((_b = (_a = response.candidates) === null || _a === void 0 ? void 0 : _a[0].content) === null || _b === void 0 ? void 0 : _b.parts) {
        for (const part of (_d = (_c = response.candidates) === null || _c === void 0 ? void 0 : _c[0].content) === null || _d === void 0 ? void 0 : _d.parts){
            if (part.functionCall) {
                functionCalls.push(part.functionCall);
            }
        }
    }
    if (functionCalls.length > 0) {
        return functionCalls;
    } else {
        return undefined;
    }
}
const badFinishReasons = [
    FinishReason.RECITATION,
    FinishReason.SAFETY,
    FinishReason.LANGUAGE
];
function hadBadFinishReason(candidate) {
    return !!candidate.finishReason && badFinishReasons.includes(candidate.finishReason);
}
function formatBlockErrorMessage(response) {
    var _a, _b, _c;
    let message = "";
    if ((!response.candidates || response.candidates.length === 0) && response.promptFeedback) {
        message += "Response was blocked";
        if ((_a = response.promptFeedback) === null || _a === void 0 ? void 0 : _a.blockReason) {
            message += ` due to ${response.promptFeedback.blockReason}`;
        }
        if ((_b = response.promptFeedback) === null || _b === void 0 ? void 0 : _b.blockReasonMessage) {
            message += `: ${response.promptFeedback.blockReasonMessage}`;
        }
    } else if ((_c = response.candidates) === null || _c === void 0 ? void 0 : _c[0]) {
        const firstCandidate = response.candidates[0];
        if (hadBadFinishReason(firstCandidate)) {
            message += `Candidate was blocked due to ${firstCandidate.finishReason}`;
            if (firstCandidate.finishMessage) {
                message += `: ${firstCandidate.finishMessage}`;
            }
        }
    }
    return message;
}
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol */ function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const responseLineRE = /^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;
/**
 * Process a response.body stream from the backend and return an
 * iterator that provides one complete GenerateContentResponse at a time
 * and a promise that resolves with a single aggregated
 * GenerateContentResponse.
 *
 * @param response - Response from a fetch call
 */ function processStream(response) {
    const inputStream = response.body.pipeThrough(new TextDecoderStream("utf8", {
        fatal: true
    }));
    const responseStream = getResponseStream(inputStream);
    const [stream1, stream2] = responseStream.tee();
    return {
        stream: generateResponseSequence(stream1),
        response: getResponsePromise(stream2)
    };
}
async function getResponsePromise(stream) {
    const allResponses = [];
    const reader = stream.getReader();
    while(true){
        const { done, value } = await reader.read();
        if (done) {
            return addHelpers(aggregateResponses(allResponses));
        }
        allResponses.push(value);
    }
}
function generateResponseSequence(stream) {
    return __asyncGenerator(this, arguments, function* generateResponseSequence_1() {
        const reader = stream.getReader();
        while(true){
            const { value, done } = yield __await(reader.read());
            if (done) {
                break;
            }
            yield yield __await(addHelpers(value));
        }
    });
}
/**
 * Reads a raw stream from the fetch response and join incomplete
 * chunks, returning a new stream that provides a single complete
 * GenerateContentResponse in each iteration.
 */ function getResponseStream(inputStream) {
    const reader = inputStream.getReader();
    const stream = new ReadableStream({
        start (controller) {
            let currentText = "";
            return pump();
            //TURBOPACK unreachable
            ;
            function pump() {
                return reader.read().then(({ value, done })=>{
                    if (done) {
                        if (currentText.trim()) {
                            controller.error(new GoogleGenerativeAIError("Failed to parse stream"));
                            return;
                        }
                        controller.close();
                        return;
                    }
                    currentText += value;
                    let match = currentText.match(responseLineRE);
                    let parsedResponse;
                    while(match){
                        try {
                            parsedResponse = JSON.parse(match[1]);
                        } catch (e) {
                            controller.error(new GoogleGenerativeAIError(`Error parsing JSON response: "${match[1]}"`));
                            return;
                        }
                        controller.enqueue(parsedResponse);
                        currentText = currentText.substring(match[0].length);
                        match = currentText.match(responseLineRE);
                    }
                    return pump();
                }).catch((e)=>{
                    let err = e;
                    err.stack = e.stack;
                    if (err.name === "AbortError") {
                        err = new GoogleGenerativeAIAbortError("Request aborted when reading from the stream");
                    } else {
                        err = new GoogleGenerativeAIError("Error reading from the stream");
                    }
                    throw err;
                });
            }
        }
    });
    return stream;
}
/**
 * Aggregates an array of `GenerateContentResponse`s into a single
 * GenerateContentResponse.
 */ function aggregateResponses(responses) {
    const lastResponse = responses[responses.length - 1];
    const aggregatedResponse = {
        promptFeedback: lastResponse === null || lastResponse === void 0 ? void 0 : lastResponse.promptFeedback
    };
    for (const response of responses){
        if (response.candidates) {
            let candidateIndex = 0;
            for (const candidate of response.candidates){
                if (!aggregatedResponse.candidates) {
                    aggregatedResponse.candidates = [];
                }
                if (!aggregatedResponse.candidates[candidateIndex]) {
                    aggregatedResponse.candidates[candidateIndex] = {
                        index: candidateIndex
                    };
                }
                // Keep overwriting, the last one will be final
                aggregatedResponse.candidates[candidateIndex].citationMetadata = candidate.citationMetadata;
                aggregatedResponse.candidates[candidateIndex].groundingMetadata = candidate.groundingMetadata;
                aggregatedResponse.candidates[candidateIndex].finishReason = candidate.finishReason;
                aggregatedResponse.candidates[candidateIndex].finishMessage = candidate.finishMessage;
                aggregatedResponse.candidates[candidateIndex].safetyRatings = candidate.safetyRatings;
                /**
                 * Candidates should always have content and parts, but this handles
                 * possible malformed responses.
                 */ if (candidate.content && candidate.content.parts) {
                    if (!aggregatedResponse.candidates[candidateIndex].content) {
                        aggregatedResponse.candidates[candidateIndex].content = {
                            role: candidate.content.role || "user",
                            parts: []
                        };
                    }
                    const newPart = {};
                    for (const part of candidate.content.parts){
                        if (part.text) {
                            newPart.text = part.text;
                        }
                        if (part.functionCall) {
                            newPart.functionCall = part.functionCall;
                        }
                        if (part.executableCode) {
                            newPart.executableCode = part.executableCode;
                        }
                        if (part.codeExecutionResult) {
                            newPart.codeExecutionResult = part.codeExecutionResult;
                        }
                        if (Object.keys(newPart).length === 0) {
                            newPart.text = "";
                        }
                        aggregatedResponse.candidates[candidateIndex].content.parts.push(newPart);
                    }
                }
            }
            candidateIndex++;
        }
        if (response.usageMetadata) {
            aggregatedResponse.usageMetadata = response.usageMetadata;
        }
    }
    return aggregatedResponse;
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function generateContentStream(apiKey, model, params, requestOptions) {
    const response = await makeModelRequest(model, Task.STREAM_GENERATE_CONTENT, apiKey, /* stream */ true, JSON.stringify(params), requestOptions);
    return processStream(response);
}
async function generateContent(apiKey, model, params, requestOptions) {
    const response = await makeModelRequest(model, Task.GENERATE_CONTENT, apiKey, /* stream */ false, JSON.stringify(params), requestOptions);
    const responseJson = await response.json();
    const enhancedResponse = addHelpers(responseJson);
    return {
        response: enhancedResponse
    };
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function formatSystemInstruction(input) {
    // null or undefined
    if (input == null) {
        return undefined;
    } else if (typeof input === "string") {
        return {
            role: "system",
            parts: [
                {
                    text: input
                }
            ]
        };
    } else if (input.text) {
        return {
            role: "system",
            parts: [
                input
            ]
        };
    } else if (input.parts) {
        if (!input.role) {
            return {
                role: "system",
                parts: input.parts
            };
        } else {
            return input;
        }
    }
}
function formatNewContent(request) {
    let newParts = [];
    if (typeof request === "string") {
        newParts = [
            {
                text: request
            }
        ];
    } else {
        for (const partOrString of request){
            if (typeof partOrString === "string") {
                newParts.push({
                    text: partOrString
                });
            } else {
                newParts.push(partOrString);
            }
        }
    }
    return assignRoleToPartsAndValidateSendMessageRequest(newParts);
}
/**
 * When multiple Part types (i.e. FunctionResponsePart and TextPart) are
 * passed in a single Part array, we may need to assign different roles to each
 * part. Currently only FunctionResponsePart requires a role other than 'user'.
 * @private
 * @param parts Array of parts to pass to the model
 * @returns Array of content items
 */ function assignRoleToPartsAndValidateSendMessageRequest(parts) {
    const userContent = {
        role: "user",
        parts: []
    };
    const functionContent = {
        role: "function",
        parts: []
    };
    let hasUserContent = false;
    let hasFunctionContent = false;
    for (const part of parts){
        if ("functionResponse" in part) {
            functionContent.parts.push(part);
            hasFunctionContent = true;
        } else {
            userContent.parts.push(part);
            hasUserContent = true;
        }
    }
    if (hasUserContent && hasFunctionContent) {
        throw new GoogleGenerativeAIError("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");
    }
    if (!hasUserContent && !hasFunctionContent) {
        throw new GoogleGenerativeAIError("No content is provided for sending chat message.");
    }
    if (hasUserContent) {
        return userContent;
    }
    return functionContent;
}
function formatCountTokensInput(params, modelParams) {
    var _a;
    let formattedGenerateContentRequest = {
        model: modelParams === null || modelParams === void 0 ? void 0 : modelParams.model,
        generationConfig: modelParams === null || modelParams === void 0 ? void 0 : modelParams.generationConfig,
        safetySettings: modelParams === null || modelParams === void 0 ? void 0 : modelParams.safetySettings,
        tools: modelParams === null || modelParams === void 0 ? void 0 : modelParams.tools,
        toolConfig: modelParams === null || modelParams === void 0 ? void 0 : modelParams.toolConfig,
        systemInstruction: modelParams === null || modelParams === void 0 ? void 0 : modelParams.systemInstruction,
        cachedContent: (_a = modelParams === null || modelParams === void 0 ? void 0 : modelParams.cachedContent) === null || _a === void 0 ? void 0 : _a.name,
        contents: []
    };
    const containsGenerateContentRequest = params.generateContentRequest != null;
    if (params.contents) {
        if (containsGenerateContentRequest) {
            throw new GoogleGenerativeAIRequestInputError("CountTokensRequest must have one of contents or generateContentRequest, not both.");
        }
        formattedGenerateContentRequest.contents = params.contents;
    } else if (containsGenerateContentRequest) {
        formattedGenerateContentRequest = Object.assign(Object.assign({}, formattedGenerateContentRequest), params.generateContentRequest);
    } else {
        // Array or string
        const content = formatNewContent(params);
        formattedGenerateContentRequest.contents = [
            content
        ];
    }
    return {
        generateContentRequest: formattedGenerateContentRequest
    };
}
function formatGenerateContentInput(params) {
    let formattedRequest;
    if (params.contents) {
        formattedRequest = params;
    } else {
        // Array or string
        const content = formatNewContent(params);
        formattedRequest = {
            contents: [
                content
            ]
        };
    }
    if (params.systemInstruction) {
        formattedRequest.systemInstruction = formatSystemInstruction(params.systemInstruction);
    }
    return formattedRequest;
}
function formatEmbedContentInput(params) {
    if (typeof params === "string" || Array.isArray(params)) {
        const content = formatNewContent(params);
        return {
            content
        };
    }
    return params;
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // https://ai.google.dev/api/rest/v1beta/Content#part
const VALID_PART_FIELDS = [
    "text",
    "inlineData",
    "functionCall",
    "functionResponse",
    "executableCode",
    "codeExecutionResult"
];
const VALID_PARTS_PER_ROLE = {
    user: [
        "text",
        "inlineData"
    ],
    function: [
        "functionResponse"
    ],
    model: [
        "text",
        "functionCall",
        "executableCode",
        "codeExecutionResult"
    ],
    // System instructions shouldn't be in history anyway.
    system: [
        "text"
    ]
};
function validateChatHistory(history) {
    let prevContent = false;
    for (const currContent of history){
        const { role, parts } = currContent;
        if (!prevContent && role !== "user") {
            throw new GoogleGenerativeAIError(`First content should be with role 'user', got ${role}`);
        }
        if (!POSSIBLE_ROLES.includes(role)) {
            throw new GoogleGenerativeAIError(`Each item should include role field. Got ${role} but valid roles are: ${JSON.stringify(POSSIBLE_ROLES)}`);
        }
        if (!Array.isArray(parts)) {
            throw new GoogleGenerativeAIError("Content should have 'parts' property with an array of Parts");
        }
        if (parts.length === 0) {
            throw new GoogleGenerativeAIError("Each Content should have at least one part");
        }
        const countFields = {
            text: 0,
            inlineData: 0,
            functionCall: 0,
            functionResponse: 0,
            fileData: 0,
            executableCode: 0,
            codeExecutionResult: 0
        };
        for (const part of parts){
            for (const key of VALID_PART_FIELDS){
                if (key in part) {
                    countFields[key] += 1;
                }
            }
        }
        const validParts = VALID_PARTS_PER_ROLE[role];
        for (const key of VALID_PART_FIELDS){
            if (!validParts.includes(key) && countFields[key] > 0) {
                throw new GoogleGenerativeAIError(`Content with role '${role}' can't contain '${key}' part`);
            }
        }
        prevContent = true;
    }
}
/**
 * Returns true if the response is valid (could be appended to the history), flase otherwise.
 */ function isValidResponse(response) {
    var _a;
    if (response.candidates === undefined || response.candidates.length === 0) {
        return false;
    }
    const content = (_a = response.candidates[0]) === null || _a === void 0 ? void 0 : _a.content;
    if (content === undefined) {
        return false;
    }
    if (content.parts === undefined || content.parts.length === 0) {
        return false;
    }
    for (const part of content.parts){
        if (part === undefined || Object.keys(part).length === 0) {
            return false;
        }
        if (part.text !== undefined && part.text === "") {
            return false;
        }
    }
    return true;
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Do not log a message for this error.
 */ const SILENT_ERROR = "SILENT_ERROR";
/**
 * ChatSession class that enables sending chat messages and stores
 * history of sent and received messages so far.
 *
 * @public
 */ class ChatSession {
    constructor(apiKey, model, params, _requestOptions = {}){
        this.model = model;
        this.params = params;
        this._requestOptions = _requestOptions;
        this._history = [];
        this._sendPromise = Promise.resolve();
        this._apiKey = apiKey;
        if (params === null || params === void 0 ? void 0 : params.history) {
            validateChatHistory(params.history);
            this._history = params.history;
        }
    }
    /**
     * Gets the chat history so far. Blocked prompts are not added to history.
     * Blocked candidates are not added to history, nor are the prompts that
     * generated them.
     */ async getHistory() {
        await this._sendPromise;
        return this._history;
    }
    /**
     * Sends a chat message and receives a non-streaming
     * {@link GenerateContentResult}.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async sendMessage(request, requestOptions = {}) {
        var _a, _b, _c, _d, _e, _f;
        await this._sendPromise;
        const newContent = formatNewContent(request);
        const generateContentRequest = {
            safetySettings: (_a = this.params) === null || _a === void 0 ? void 0 : _a.safetySettings,
            generationConfig: (_b = this.params) === null || _b === void 0 ? void 0 : _b.generationConfig,
            tools: (_c = this.params) === null || _c === void 0 ? void 0 : _c.tools,
            toolConfig: (_d = this.params) === null || _d === void 0 ? void 0 : _d.toolConfig,
            systemInstruction: (_e = this.params) === null || _e === void 0 ? void 0 : _e.systemInstruction,
            cachedContent: (_f = this.params) === null || _f === void 0 ? void 0 : _f.cachedContent,
            contents: [
                ...this._history,
                newContent
            ]
        };
        const chatSessionRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        let finalResult;
        // Add onto the chain.
        this._sendPromise = this._sendPromise.then(()=>generateContent(this._apiKey, this.model, generateContentRequest, chatSessionRequestOptions)).then((result)=>{
            var _a;
            if (isValidResponse(result.response)) {
                this._history.push(newContent);
                const responseContent = Object.assign({
                    parts: [],
                    // Response seems to come back without a role set.
                    role: "model"
                }, (_a = result.response.candidates) === null || _a === void 0 ? void 0 : _a[0].content);
                this._history.push(responseContent);
            } else {
                const blockErrorMessage = formatBlockErrorMessage(result.response);
                if (blockErrorMessage) {
                    console.warn(`sendMessage() was unsuccessful. ${blockErrorMessage}. Inspect response object for details.`);
                }
            }
            finalResult = result;
        }).catch((e)=>{
            // Resets _sendPromise to avoid subsequent calls failing and throw error.
            this._sendPromise = Promise.resolve();
            throw e;
        });
        await this._sendPromise;
        return finalResult;
    }
    /**
     * Sends a chat message and receives the response as a
     * {@link GenerateContentStreamResult} containing an iterable stream
     * and a response promise.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async sendMessageStream(request, requestOptions = {}) {
        var _a, _b, _c, _d, _e, _f;
        await this._sendPromise;
        const newContent = formatNewContent(request);
        const generateContentRequest = {
            safetySettings: (_a = this.params) === null || _a === void 0 ? void 0 : _a.safetySettings,
            generationConfig: (_b = this.params) === null || _b === void 0 ? void 0 : _b.generationConfig,
            tools: (_c = this.params) === null || _c === void 0 ? void 0 : _c.tools,
            toolConfig: (_d = this.params) === null || _d === void 0 ? void 0 : _d.toolConfig,
            systemInstruction: (_e = this.params) === null || _e === void 0 ? void 0 : _e.systemInstruction,
            cachedContent: (_f = this.params) === null || _f === void 0 ? void 0 : _f.cachedContent,
            contents: [
                ...this._history,
                newContent
            ]
        };
        const chatSessionRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        const streamPromise = generateContentStream(this._apiKey, this.model, generateContentRequest, chatSessionRequestOptions);
        // Add onto the chain.
        this._sendPromise = this._sendPromise.then(()=>streamPromise)// This must be handled to avoid unhandled rejection, but jump
        // to the final catch block with a label to not log this error.
        .catch((_ignored)=>{
            throw new Error(SILENT_ERROR);
        }).then((streamResult)=>streamResult.response).then((response)=>{
            if (isValidResponse(response)) {
                this._history.push(newContent);
                const responseContent = Object.assign({}, response.candidates[0].content);
                // Response seems to come back without a role set.
                if (!responseContent.role) {
                    responseContent.role = "model";
                }
                this._history.push(responseContent);
            } else {
                const blockErrorMessage = formatBlockErrorMessage(response);
                if (blockErrorMessage) {
                    console.warn(`sendMessageStream() was unsuccessful. ${blockErrorMessage}. Inspect response object for details.`);
                }
            }
        }).catch((e)=>{
            // Errors in streamPromise are already catchable by the user as
            // streamPromise is returned.
            // Avoid duplicating the error message in logs.
            if (e.message !== SILENT_ERROR) {
                // Users do not have access to _sendPromise to catch errors
                // downstream from streamPromise, so they should not throw.
                console.error(e);
            }
        });
        return streamPromise;
    }
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function countTokens(apiKey, model, params, singleRequestOptions) {
    const response = await makeModelRequest(model, Task.COUNT_TOKENS, apiKey, false, JSON.stringify(params), singleRequestOptions);
    return response.json();
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function embedContent(apiKey, model, params, requestOptions) {
    const response = await makeModelRequest(model, Task.EMBED_CONTENT, apiKey, false, JSON.stringify(params), requestOptions);
    return response.json();
}
async function batchEmbedContents(apiKey, model, params, requestOptions) {
    const requestsWithModel = params.requests.map((request)=>{
        return Object.assign(Object.assign({}, request), {
            model
        });
    });
    const response = await makeModelRequest(model, Task.BATCH_EMBED_CONTENTS, apiKey, false, JSON.stringify({
        requests: requestsWithModel
    }), requestOptions);
    return response.json();
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Class for generative model APIs.
 * @public
 */ class GenerativeModel {
    constructor(apiKey, modelParams, _requestOptions = {}){
        this.apiKey = apiKey;
        this._requestOptions = _requestOptions;
        if (modelParams.model.includes("/")) {
            // Models may be named "models/model-name" or "tunedModels/model-name"
            this.model = modelParams.model;
        } else {
            // If path is not included, assume it's a non-tuned model.
            this.model = `models/${modelParams.model}`;
        }
        this.generationConfig = modelParams.generationConfig || {};
        this.safetySettings = modelParams.safetySettings || [];
        this.tools = modelParams.tools;
        this.toolConfig = modelParams.toolConfig;
        this.systemInstruction = formatSystemInstruction(modelParams.systemInstruction);
        this.cachedContent = modelParams.cachedContent;
    }
    /**
     * Makes a single non-streaming call to the model
     * and returns an object containing a single {@link GenerateContentResponse}.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async generateContent(request, requestOptions = {}) {
        var _a;
        const formattedParams = formatGenerateContentInput(request);
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return generateContent(this.apiKey, this.model, Object.assign({
            generationConfig: this.generationConfig,
            safetySettings: this.safetySettings,
            tools: this.tools,
            toolConfig: this.toolConfig,
            systemInstruction: this.systemInstruction,
            cachedContent: (_a = this.cachedContent) === null || _a === void 0 ? void 0 : _a.name
        }, formattedParams), generativeModelRequestOptions);
    }
    /**
     * Makes a single streaming call to the model and returns an object
     * containing an iterable stream that iterates over all chunks in the
     * streaming response as well as a promise that returns the final
     * aggregated response.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async generateContentStream(request, requestOptions = {}) {
        var _a;
        const formattedParams = formatGenerateContentInput(request);
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return generateContentStream(this.apiKey, this.model, Object.assign({
            generationConfig: this.generationConfig,
            safetySettings: this.safetySettings,
            tools: this.tools,
            toolConfig: this.toolConfig,
            systemInstruction: this.systemInstruction,
            cachedContent: (_a = this.cachedContent) === null || _a === void 0 ? void 0 : _a.name
        }, formattedParams), generativeModelRequestOptions);
    }
    /**
     * Gets a new {@link ChatSession} instance which can be used for
     * multi-turn chats.
     */ startChat(startChatParams) {
        var _a;
        return new ChatSession(this.apiKey, this.model, Object.assign({
            generationConfig: this.generationConfig,
            safetySettings: this.safetySettings,
            tools: this.tools,
            toolConfig: this.toolConfig,
            systemInstruction: this.systemInstruction,
            cachedContent: (_a = this.cachedContent) === null || _a === void 0 ? void 0 : _a.name
        }, startChatParams), this._requestOptions);
    }
    /**
     * Counts the tokens in the provided request.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async countTokens(request, requestOptions = {}) {
        const formattedParams = formatCountTokensInput(request, {
            model: this.model,
            generationConfig: this.generationConfig,
            safetySettings: this.safetySettings,
            tools: this.tools,
            toolConfig: this.toolConfig,
            systemInstruction: this.systemInstruction,
            cachedContent: this.cachedContent
        });
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return countTokens(this.apiKey, this.model, formattedParams, generativeModelRequestOptions);
    }
    /**
     * Embeds the provided content.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async embedContent(request, requestOptions = {}) {
        const formattedParams = formatEmbedContentInput(request);
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return embedContent(this.apiKey, this.model, formattedParams, generativeModelRequestOptions);
    }
    /**
     * Embeds an array of {@link EmbedContentRequest}s.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async batchEmbedContents(batchEmbedContentRequest, requestOptions = {}) {
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return batchEmbedContents(this.apiKey, this.model, batchEmbedContentRequest, generativeModelRequestOptions);
    }
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Top-level class for this SDK
 * @public
 */ class GoogleGenerativeAI {
    constructor(apiKey){
        this.apiKey = apiKey;
    }
    /**
     * Gets a {@link GenerativeModel} instance for the provided model name.
     */ getGenerativeModel(modelParams, requestOptions) {
        if (!modelParams.model) {
            throw new GoogleGenerativeAIError(`Must provide a model name. ` + `Example: genai.getGenerativeModel({ model: 'my-model-name' })`);
        }
        return new GenerativeModel(this.apiKey, modelParams, requestOptions);
    }
    /**
     * Creates a {@link GenerativeModel} instance from provided content cache.
     */ getGenerativeModelFromCachedContent(cachedContent, modelParams, requestOptions) {
        if (!cachedContent.name) {
            throw new GoogleGenerativeAIRequestInputError("Cached content must contain a `name` field.");
        }
        if (!cachedContent.model) {
            throw new GoogleGenerativeAIRequestInputError("Cached content must contain a `model` field.");
        }
        /**
         * Not checking tools and toolConfig for now as it would require a deep
         * equality comparison and isn't likely to be a common case.
         */ const disallowedDuplicates = [
            "model",
            "systemInstruction"
        ];
        for (const key of disallowedDuplicates){
            if ((modelParams === null || modelParams === void 0 ? void 0 : modelParams[key]) && cachedContent[key] && (modelParams === null || modelParams === void 0 ? void 0 : modelParams[key]) !== cachedContent[key]) {
                if (key === "model") {
                    const modelParamsComp = modelParams.model.startsWith("models/") ? modelParams.model.replace("models/", "") : modelParams.model;
                    const cachedContentComp = cachedContent.model.startsWith("models/") ? cachedContent.model.replace("models/", "") : cachedContent.model;
                    if (modelParamsComp === cachedContentComp) {
                        continue;
                    }
                }
                throw new GoogleGenerativeAIRequestInputError(`Different value for "${key}" specified in modelParams` + ` (${modelParams[key]}) and cachedContent (${cachedContent[key]})`);
            }
        }
        const modelParamsFromCache = Object.assign(Object.assign({}, modelParams), {
            model: cachedContent.model,
            tools: cachedContent.tools,
            toolConfig: cachedContent.toolConfig,
            systemInstruction: cachedContent.systemInstruction,
            cachedContent
        });
        return new GenerativeModel(this.apiKey, modelParamsFromCache, requestOptions);
    }
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/lib/clone-response.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "cloneResponse", {
    enumerable: true,
    get: function() {
        return cloneResponse;
    }
});
const noop = ()=>{};
let registry;
if (globalThis.FinalizationRegistry) {
    registry = new FinalizationRegistry((weakRef)=>{
        const stream = weakRef.deref();
        if (stream && !stream.locked) {
            stream.cancel('Response object has been garbage collected').then(noop);
        }
    });
}
function cloneResponse(original) {
    // If the response has no body, then we can just return the original response
    // twice because it's immutable.
    if (!original.body) {
        return [
            original,
            original
        ];
    }
    const [body1, body2] = original.body.tee();
    const cloned1 = new Response(body1, {
        status: original.status,
        statusText: original.statusText,
        headers: original.headers
    });
    Object.defineProperty(cloned1, 'url', {
        value: original.url,
        // How the original response.url behaves
        configurable: true,
        enumerable: true,
        writable: false
    });
    // The Fetch Standard allows users to skip consuming the response body by
    // relying on garbage collection to release connection resources.
    // https://github.com/nodejs/undici?tab=readme-ov-file#garbage-collection
    //
    // To cancel the stream you then need to cancel both resulting branches.
    // Teeing a stream will generally lock it for the duration, preventing other
    // readers from locking it.
    // https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/tee
    // cloned2 is stored in a react cache and cloned for subsequent requests.
    // It is the original request, and is is garbage collected by a
    // FinalizationRegistry in Undici, but since we're tee-ing the stream
    // ourselves, we need to cancel clone1's stream (the response returned from
    // our dedupe fetch) when clone1 is reclaimed, otherwise we leak memory.
    if (registry && cloned1.body) {
        registry.register(cloned1, new WeakRef(cloned1.body));
    }
    const cloned2 = new Response(body2, {
        status: original.status,
        statusText: original.statusText,
        headers: original.headers
    });
    Object.defineProperty(cloned2, 'url', {
        value: original.url,
        // How the original response.url behaves
        configurable: true,
        enumerable: true,
        writable: false
    });
    return [
        cloned1,
        cloned2
    ];
} //# sourceMappingURL=clone-response.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/lib/dedupe-fetch.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Based on https://github.com/facebook/react/blob/d4e78c42a94be027b4dc7ed2659a5fddfbf9bd4e/packages/react/src/ReactFetch.js
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createDedupeFetch", {
    enumerable: true,
    get: function() {
        return createDedupeFetch;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)"));
const _cloneresponse = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/lib/clone-response.js [app-rsc] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const simpleCacheKey = '["GET",[],null,"follow",null,null,null,null]' // generateCacheKey(new Request('https://blank'));
;
function generateCacheKey(request) {
    // We pick the fields that goes into the key used to dedupe requests.
    // We don't include the `cache` field, because we end up using whatever
    // caching resulted from the first request.
    // Notably we currently don't consider non-standard (or future) options.
    // This might not be safe. TODO: warn for non-standard extensions differing.
    // IF YOU CHANGE THIS UPDATE THE simpleCacheKey ABOVE.
    return JSON.stringify([
        request.method,
        Array.from(request.headers.entries()),
        request.mode,
        request.redirect,
        request.credentials,
        request.referrer,
        request.referrerPolicy,
        request.integrity
    ]);
}
function createDedupeFetch(originalFetch) {
    const getCacheEntries = _react.cache((url)=>[]);
    return function dedupeFetch(resource, options) {
        if (options && options.signal) {
            // If we're passed a signal, then we assume that
            // someone else controls the lifetime of this object and opts out of
            // caching. It's effectively the opt-out mechanism.
            // Ideally we should be able to check this on the Request but
            // it always gets initialized with its own signal so we don't
            // know if it's supposed to override - unless we also override the
            // Request constructor.
            return originalFetch(resource, options);
        }
        // Normalize the Request
        let url;
        let cacheKey;
        if (typeof resource === 'string' && !options) {
            // Fast path.
            cacheKey = simpleCacheKey;
            url = resource;
        } else {
            // Normalize the request.
            // if resource is not a string or a URL (its an instance of Request)
            // then do not instantiate a new Request but instead
            // reuse the request as to not disturb the body in the event it's a ReadableStream.
            const request = typeof resource === 'string' || resource instanceof URL ? new Request(resource, options) : resource;
            if (request.method !== 'GET' && request.method !== 'HEAD' || request.keepalive) {
                // We currently don't dedupe requests that might have side-effects. Those
                // have to be explicitly cached. We assume that the request doesn't have a
                // body if it's GET or HEAD.
                // keepalive gets treated the same as if you passed a custom cache signal.
                return originalFetch(resource, options);
            }
            cacheKey = generateCacheKey(request);
            url = request.url;
        }
        const cacheEntries = getCacheEntries(url);
        for(let i = 0, j = cacheEntries.length; i < j; i += 1){
            const [key, promise] = cacheEntries[i];
            if (key === cacheKey) {
                return promise.then(()=>{
                    const response = cacheEntries[i][2];
                    if (!response) throw Object.defineProperty(new _invarianterror.InvariantError('No cached response'), "__NEXT_ERROR_CODE", {
                        value: "E579",
                        enumerable: false,
                        configurable: true
                    });
                    // We're cloning the response using this utility because there exists
                    // a bug in the undici library around response cloning. See the
                    // following pull request for more details:
                    // https://github.com/vercel/next.js/pull/73274
                    const [cloned1, cloned2] = (0, _cloneresponse.cloneResponse)(response);
                    cacheEntries[i][2] = cloned2;
                    return cloned1;
                });
            }
        }
        // We pass the original arguments here in case normalizing the Request
        // doesn't include all the options in this environment.
        const promise = originalFetch(resource, options);
        const entry = [
            cacheKey,
            promise,
            null
        ];
        cacheEntries.push(entry);
        return promise.then((response)=>{
            // We're cloning the response using this utility because there exists
            // a bug in the undici library around response cloning. See the
            // following pull request for more details:
            // https://github.com/vercel/next.js/pull/73274
            const [cloned1, cloned2] = (0, _cloneresponse.cloneResponse)(response);
            entry[2] = cloned2;
            return cloned1;
        });
    };
} //# sourceMappingURL=dedupe-fetch.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/response-cache/types.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    CachedRouteKind: null,
    IncrementalCacheKind: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    CachedRouteKind: function() {
        return CachedRouteKind;
    },
    IncrementalCacheKind: function() {
        return IncrementalCacheKind;
    }
});
var CachedRouteKind = /*#__PURE__*/ function(CachedRouteKind) {
    CachedRouteKind["APP_PAGE"] = "APP_PAGE";
    CachedRouteKind["APP_ROUTE"] = "APP_ROUTE";
    CachedRouteKind["PAGES"] = "PAGES";
    CachedRouteKind["FETCH"] = "FETCH";
    CachedRouteKind["REDIRECT"] = "REDIRECT";
    CachedRouteKind["IMAGE"] = "IMAGE";
    return CachedRouteKind;
}({});
var IncrementalCacheKind = /*#__PURE__*/ function(IncrementalCacheKind) {
    IncrementalCacheKind["APP_PAGE"] = "APP_PAGE";
    IncrementalCacheKind["APP_ROUTE"] = "APP_ROUTE";
    IncrementalCacheKind["PAGES"] = "PAGES";
    IncrementalCacheKind["FETCH"] = "FETCH";
    IncrementalCacheKind["IMAGE"] = "IMAGE";
    return IncrementalCacheKind;
}({}); //# sourceMappingURL=types.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/lib/batcher.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Batcher", {
    enumerable: true,
    get: function() {
        return Batcher;
    }
});
const _detachedpromise = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/lib/detached-promise.js [app-rsc] (ecmascript)");
class Batcher {
    constructor(cacheKeyFn, /**
     * A function that will be called to schedule the wrapped function to be
     * executed. This defaults to a function that will execute the function
     * immediately.
     */ schedulerFn = (fn)=>fn()){
        this.cacheKeyFn = cacheKeyFn;
        this.schedulerFn = schedulerFn;
        this.pending = new Map();
    }
    static create(options) {
        return new Batcher(options == null ? void 0 : options.cacheKeyFn, options == null ? void 0 : options.schedulerFn);
    }
    /**
   * Wraps a function in a promise that will be resolved or rejected only once
   * for a given key. This will allow multiple calls to the function to be
   * made, but only one will be executed at a time. The result of the first
   * call will be returned to all callers.
   *
   * @param key the key to use for the cache
   * @param fn the function to wrap
   * @returns a promise that resolves to the result of the function
   */ async batch(key, fn) {
        const cacheKey = this.cacheKeyFn ? await this.cacheKeyFn(key) : key;
        if (cacheKey === null) {
            return fn(cacheKey, Promise.resolve);
        }
        const pending = this.pending.get(cacheKey);
        if (pending) return pending;
        const { promise, resolve, reject } = new _detachedpromise.DetachedPromise();
        this.pending.set(cacheKey, promise);
        this.schedulerFn(async ()=>{
            try {
                const result = await fn(cacheKey, resolve);
                // Resolving a promise multiple times is a no-op, so we can safely
                // resolve all pending promises with the same result.
                resolve(result);
            } catch (err) {
                reject(err);
            } finally{
                this.pending.delete(cacheKey);
            }
        });
        return promise;
    }
} //# sourceMappingURL=batcher.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/request-meta.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable no-redeclare */ Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    NEXT_REQUEST_META: null,
    addRequestMeta: null,
    getRequestMeta: null,
    removeRequestMeta: null,
    setRequestMeta: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    NEXT_REQUEST_META: function() {
        return NEXT_REQUEST_META;
    },
    addRequestMeta: function() {
        return addRequestMeta;
    },
    getRequestMeta: function() {
        return getRequestMeta;
    },
    removeRequestMeta: function() {
        return removeRequestMeta;
    },
    setRequestMeta: function() {
        return setRequestMeta;
    }
});
const NEXT_REQUEST_META = Symbol.for('NextInternalRequestMeta');
function getRequestMeta(req, key) {
    const meta = req[NEXT_REQUEST_META] || {};
    return typeof key === 'string' ? meta[key] : meta;
}
function setRequestMeta(req, meta) {
    req[NEXT_REQUEST_META] = meta;
    return meta;
}
function addRequestMeta(request, key, value) {
    const meta = getRequestMeta(request);
    meta[key] = value;
    return setRequestMeta(request, meta);
}
function removeRequestMeta(request, key) {
    const meta = getRequestMeta(request);
    delete meta[key];
    return setRequestMeta(request, meta);
} //# sourceMappingURL=request-meta.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/base-http/helpers.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    isNodeNextRequest: null,
    isNodeNextResponse: null,
    isWebNextRequest: null,
    isWebNextResponse: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isNodeNextRequest: function() {
        return isNodeNextRequest;
    },
    isNodeNextResponse: function() {
        return isNodeNextResponse;
    },
    isWebNextRequest: function() {
        return isWebNextRequest;
    },
    isWebNextResponse: function() {
        return isWebNextResponse;
    }
});
const isWebNextRequest = (req)=>("TURBOPACK compile-time value", "nodejs") === 'edge';
const isWebNextResponse = (res)=>("TURBOPACK compile-time value", "nodejs") === 'edge';
const isNodeNextRequest = (req)=>("TURBOPACK compile-time value", "nodejs") !== 'edge';
const isNodeNextResponse = (res)=>("TURBOPACK compile-time value", "nodejs") !== 'edge'; //# sourceMappingURL=helpers.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/web/spec-extension/adapters/next-request.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    NextRequestAdapter: null,
    ResponseAborted: null,
    ResponseAbortedName: null,
    createAbortController: null,
    signalFromNodeResponse: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    NextRequestAdapter: function() {
        return NextRequestAdapter;
    },
    ResponseAborted: function() {
        return ResponseAborted;
    },
    ResponseAbortedName: function() {
        return ResponseAbortedName;
    },
    createAbortController: function() {
        return createAbortController;
    },
    signalFromNodeResponse: function() {
        return signalFromNodeResponse;
    }
});
const _requestmeta = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/request-meta.js [app-rsc] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/web/utils.js [app-rsc] (ecmascript)");
const _request = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/web/spec-extension/request.js [app-rsc] (ecmascript)");
const _helpers = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/base-http/helpers.js [app-rsc] (ecmascript)");
const ResponseAbortedName = 'ResponseAborted';
class ResponseAborted extends Error {
    constructor(...args){
        super(...args), this.name = ResponseAbortedName;
    }
}
function createAbortController(response) {
    const controller = new AbortController();
    // If `finish` fires first, then `res.end()` has been called and the close is
    // just us finishing the stream on our side. If `close` fires first, then we
    // know the client disconnected before we finished.
    response.once('close', ()=>{
        if (response.writableFinished) return;
        controller.abort(new ResponseAborted());
    });
    return controller;
}
function signalFromNodeResponse(response) {
    const { errored, destroyed } = response;
    if (errored || destroyed) {
        return AbortSignal.abort(errored ?? new ResponseAborted());
    }
    const { signal } = createAbortController(response);
    return signal;
}
class NextRequestAdapter {
    static fromBaseNextRequest(request, signal) {
        if (// environment variable check provides dead code elimination.
        ("TURBOPACK compile-time value", "nodejs") === 'edge' && (0, _helpers.isWebNextRequest)(request)) //TURBOPACK unreachable
        ;
        else if (// environment variable check provides dead code elimination.
        ("TURBOPACK compile-time value", "nodejs") !== 'edge' && (0, _helpers.isNodeNextRequest)(request)) {
            return NextRequestAdapter.fromNodeNextRequest(request, signal);
        } else {
            throw Object.defineProperty(new Error('Invariant: Unsupported NextRequest type'), "__NEXT_ERROR_CODE", {
                value: "E345",
                enumerable: false,
                configurable: true
            });
        }
    }
    static fromNodeNextRequest(request, signal) {
        // HEAD and GET requests can not have a body.
        let body = null;
        if (request.method !== 'GET' && request.method !== 'HEAD' && request.body) {
            // @ts-expect-error - this is handled by undici, when streams/web land use it instead
            body = request.body;
        }
        let url;
        if (request.url.startsWith('http')) {
            url = new URL(request.url);
        } else {
            // Grab the full URL from the request metadata.
            const base = (0, _requestmeta.getRequestMeta)(request, 'initURL');
            if (!base || !base.startsWith('http')) {
                // Because the URL construction relies on the fact that the URL provided
                // is absolute, we need to provide a base URL. We can't use the request
                // URL because it's relative, so we use a dummy URL instead.
                url = new URL(request.url, 'http://n');
            } else {
                url = new URL(request.url, base);
            }
        }
        return new _request.NextRequest(url, {
            method: request.method,
            headers: (0, _utils.fromNodeOutgoingHttpHeaders)(request.headers),
            duplex: 'half',
            signal,
            // geo
            // ip
            // nextConfig
            // body can not be passed if request was aborted
            // or we get a Request body was disturbed error
            ...signal.aborted ? {} : {
                body
            }
        });
    }
    static fromWebNextRequest(request) {
        // HEAD and GET requests can not have a body.
        let body = null;
        if (request.method !== 'GET' && request.method !== 'HEAD') {
            body = request.body;
        }
        return new _request.NextRequest(request.url, {
            method: request.method,
            headers: (0, _utils.fromNodeOutgoingHttpHeaders)(request.headers),
            duplex: 'half',
            signal: request.request.signal,
            // geo
            // ip
            // nextConfig
            // body can not be passed if request was aborted
            // or we get a Request body was disturbed error
            ...request.request.signal.aborted ? {} : {
                body
            }
        });
    }
} //# sourceMappingURL=next-request.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/client-component-renderer-logger.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getClientComponentLoaderMetrics: null,
    wrapClientComponentLoader: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getClientComponentLoaderMetrics: function() {
        return getClientComponentLoaderMetrics;
    },
    wrapClientComponentLoader: function() {
        return wrapClientComponentLoader;
    }
});
// Combined load times for loading client components
let clientComponentLoadStart = 0;
let clientComponentLoadTimes = 0;
let clientComponentLoadCount = 0;
function wrapClientComponentLoader(ComponentMod) {
    if (!('performance' in globalThis)) {
        return ComponentMod.__next_app__;
    }
    return {
        require: (...args)=>{
            const startTime = performance.now();
            if (clientComponentLoadStart === 0) {
                clientComponentLoadStart = startTime;
            }
            try {
                clientComponentLoadCount += 1;
                return ComponentMod.__next_app__.require(...args);
            } finally{
                clientComponentLoadTimes += performance.now() - startTime;
            }
        },
        loadChunk: (...args)=>{
            const startTime = performance.now();
            const result = ComponentMod.__next_app__.loadChunk(...args);
            // Avoid wrapping `loadChunk`'s result in an extra promise in case something like React depends on its identity.
            // We only need to know when it's settled.
            result.finally(()=>{
                clientComponentLoadTimes += performance.now() - startTime;
            });
            return result;
        }
    };
}
function getClientComponentLoaderMetrics(options = {}) {
    const metrics = clientComponentLoadStart === 0 ? undefined : {
        clientComponentLoadStart,
        clientComponentLoadTimes,
        clientComponentLoadCount
    };
    if (options.reset) {
        clientComponentLoadStart = 0;
        clientComponentLoadTimes = 0;
        clientComponentLoadCount = 0;
    }
    return metrics;
} //# sourceMappingURL=client-component-renderer-logger.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/pipe-readable.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    isAbortError: null,
    pipeToNodeResponse: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isAbortError: function() {
        return isAbortError;
    },
    pipeToNodeResponse: function() {
        return pipeToNodeResponse;
    }
});
const _nextrequest = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/web/spec-extension/adapters/next-request.js [app-rsc] (ecmascript)");
const _detachedpromise = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/lib/detached-promise.js [app-rsc] (ecmascript)");
const _tracer = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/lib/trace/tracer.js [app-rsc] (ecmascript)");
const _constants = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/lib/trace/constants.js [app-rsc] (ecmascript)");
const _clientcomponentrendererlogger = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/client-component-renderer-logger.js [app-rsc] (ecmascript)");
function isAbortError(e) {
    return (e == null ? void 0 : e.name) === 'AbortError' || (e == null ? void 0 : e.name) === _nextrequest.ResponseAbortedName;
}
function createWriterFromResponse(res, waitUntilForEnd) {
    let started = false;
    // Create a promise that will resolve once the response has drained. See
    // https://nodejs.org/api/stream.html#stream_event_drain
    let drained = new _detachedpromise.DetachedPromise();
    function onDrain() {
        drained.resolve();
    }
    res.on('drain', onDrain);
    // If the finish event fires, it means we shouldn't block and wait for the
    // drain event.
    res.once('close', ()=>{
        res.off('drain', onDrain);
        drained.resolve();
    });
    // Create a promise that will resolve once the response has finished. See
    // https://nodejs.org/api/http.html#event-finish_1
    const finished = new _detachedpromise.DetachedPromise();
    res.once('finish', ()=>{
        finished.resolve();
    });
    // Create a writable stream that will write to the response.
    return new WritableStream({
        write: async (chunk)=>{
            // You'd think we'd want to use `start` instead of placing this in `write`
            // but this ensures that we don't actually flush the headers until we've
            // started writing chunks.
            if (!started) {
                started = true;
                if ('performance' in globalThis && process.env.NEXT_OTEL_PERFORMANCE_PREFIX) {
                    const metrics = (0, _clientcomponentrendererlogger.getClientComponentLoaderMetrics)();
                    if (metrics) {
                        performance.measure(`${process.env.NEXT_OTEL_PERFORMANCE_PREFIX}:next-client-component-loading`, {
                            start: metrics.clientComponentLoadStart,
                            end: metrics.clientComponentLoadStart + metrics.clientComponentLoadTimes
                        });
                    }
                }
                res.flushHeaders();
                (0, _tracer.getTracer)().trace(_constants.NextNodeServerSpan.startResponse, {
                    spanName: 'start response'
                }, ()=>undefined);
            }
            try {
                const ok = res.write(chunk);
                // Added by the `compression` middleware, this is a function that will
                // flush the partially-compressed response to the client.
                if ('flush' in res && typeof res.flush === 'function') {
                    res.flush();
                }
                // If the write returns false, it means there's some backpressure, so
                // wait until it's streamed before continuing.
                if (!ok) {
                    await drained.promise;
                    // Reset the drained promise so that we can wait for the next drain event.
                    drained = new _detachedpromise.DetachedPromise();
                }
            } catch (err) {
                res.end();
                throw Object.defineProperty(new Error('failed to write chunk to response', {
                    cause: err
                }), "__NEXT_ERROR_CODE", {
                    value: "E321",
                    enumerable: false,
                    configurable: true
                });
            }
        },
        abort: (err)=>{
            if (res.writableFinished) return;
            res.destroy(err);
        },
        close: async ()=>{
            // if a waitUntil promise was passed, wait for it to resolve before
            // ending the response.
            if (waitUntilForEnd) {
                await waitUntilForEnd;
            }
            if (res.writableFinished) return;
            res.end();
            return finished.promise;
        }
    });
}
async function pipeToNodeResponse(readable, res, waitUntilForEnd) {
    try {
        // If the response has already errored, then just return now.
        const { errored, destroyed } = res;
        if (errored || destroyed) return;
        // Create a new AbortController so that we can abort the readable if the
        // client disconnects.
        const controller = (0, _nextrequest.createAbortController)(res);
        const writer = createWriterFromResponse(res, waitUntilForEnd);
        await readable.pipeTo(writer, {
            signal: controller.signal
        });
    } catch (err) {
        // If this isn't related to an abort error, re-throw it.
        if (isAbortError(err)) return;
        throw Object.defineProperty(new Error('failed to pipe response', {
            cause: err
        }), "__NEXT_ERROR_CODE", {
            value: "E180",
            enumerable: false,
            configurable: true
        });
    }
} //# sourceMappingURL=pipe-readable.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/render-result.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RenderResult;
    }
});
const _nodewebstreamshelper = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/stream-utils/node-web-streams-helper.js [app-rsc] (ecmascript)");
const _pipereadable = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/pipe-readable.js [app-rsc] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
class RenderResult {
    static #_ = /**
   * A render result that represents an empty response. This is used to
   * represent a response that was not found or was already sent.
   */ this.EMPTY = new RenderResult(null, {
        metadata: {},
        contentType: null
    });
    /**
   * Creates a new RenderResult instance from a static response.
   *
   * @param value the static response value
   * @param contentType the content type of the response
   * @returns a new RenderResult instance
   */ static fromStatic(value, contentType) {
        return new RenderResult(value, {
            metadata: {},
            contentType
        });
    }
    constructor(response, { contentType, waitUntil, metadata }){
        this.response = response;
        this.contentType = contentType;
        this.metadata = metadata;
        this.waitUntil = waitUntil;
    }
    assignMetadata(metadata) {
        Object.assign(this.metadata, metadata);
    }
    /**
   * Returns true if the response is null. It can be null if the response was
   * not found or was already sent.
   */ get isNull() {
        return this.response === null;
    }
    /**
   * Returns false if the response is a string. It can be a string if the page
   * was prerendered. If it's not, then it was generated dynamically.
   */ get isDynamic() {
        return typeof this.response !== 'string';
    }
    toUnchunkedString(stream = false) {
        if (this.response === null) {
            // If the response is null, return an empty string. This behavior is
            // intentional as we're now providing the `RenderResult.EMPTY` value.
            return '';
        }
        if (typeof this.response !== 'string') {
            if (!stream) {
                throw Object.defineProperty(new _invarianterror.InvariantError('dynamic responses cannot be unchunked. This is a bug in Next.js'), "__NEXT_ERROR_CODE", {
                    value: "E732",
                    enumerable: false,
                    configurable: true
                });
            }
            return (0, _nodewebstreamshelper.streamToString)(this.readable);
        }
        return this.response;
    }
    /**
   * Returns a readable stream of the response.
   */ get readable() {
        if (this.response === null) {
            // If the response is null, return an empty stream. This behavior is
            // intentional as we're now providing the `RenderResult.EMPTY` value.
            return new ReadableStream({
                start (controller) {
                    controller.close();
                }
            });
        }
        if (typeof this.response === 'string') {
            return (0, _nodewebstreamshelper.streamFromString)(this.response);
        }
        if (Buffer.isBuffer(this.response)) {
            return (0, _nodewebstreamshelper.streamFromBuffer)(this.response);
        }
        // If the response is an array of streams, then chain them together.
        if (Array.isArray(this.response)) {
            return (0, _nodewebstreamshelper.chainStreams)(...this.response);
        }
        return this.response;
    }
    /**
   * Coerces the response to an array of streams. This will convert the response
   * to an array of streams if it is not already one.
   *
   * @returns An array of streams
   */ coerce() {
        if (this.response === null) {
            // If the response is null, return an empty stream. This behavior is
            // intentional as we're now providing the `RenderResult.EMPTY` value.
            return [];
        }
        if (typeof this.response === 'string') {
            return [
                (0, _nodewebstreamshelper.streamFromString)(this.response)
            ];
        } else if (Array.isArray(this.response)) {
            return this.response;
        } else if (Buffer.isBuffer(this.response)) {
            return [
                (0, _nodewebstreamshelper.streamFromBuffer)(this.response)
            ];
        } else {
            return [
                this.response
            ];
        }
    }
    /**
   * Unshifts a new stream to the response. This will convert the response to an
   * array of streams if it is not already one and will add the new stream to
   * the start of the array. When this response is piped, all of the streams
   * will be piped one after the other.
   *
   * @param readable The new stream to unshift
   */ unshift(readable) {
        // Coerce the response to an array of streams.
        this.response = this.coerce();
        // Add the new stream to the start of the array.
        this.response.unshift(readable);
    }
    /**
   * Chains a new stream to the response. This will convert the response to an
   * array of streams if it is not already one and will add the new stream to
   * the end. When this response is piped, all of the streams will be piped
   * one after the other.
   *
   * @param readable The new stream to chain
   */ push(readable) {
        // Coerce the response to an array of streams.
        this.response = this.coerce();
        // Add the new stream to the end of the array.
        this.response.push(readable);
    }
    /**
   * Pipes the response to a writable stream. This will close/cancel the
   * writable stream if an error is encountered. If this doesn't throw, then
   * the writable stream will be closed or aborted.
   *
   * @param writable Writable stream to pipe the response to
   */ async pipeTo(writable) {
        try {
            await this.readable.pipeTo(writable, {
                // We want to close the writable stream ourselves so that we can wait
                // for the waitUntil promise to resolve before closing it. If an error
                // is encountered, we'll abort the writable stream if we swallowed the
                // error.
                preventClose: true
            });
            // If there is a waitUntil promise, wait for it to resolve before
            // closing the writable stream.
            if (this.waitUntil) await this.waitUntil;
            // Close the writable stream.
            await writable.close();
        } catch (err) {
            // If this is an abort error, we should abort the writable stream (as we
            // took ownership of it when we started piping). We don't need to re-throw
            // because we handled the error.
            if ((0, _pipereadable.isAbortError)(err)) {
                // Abort the writable stream if an error is encountered.
                await writable.abort(err);
                return;
            }
            // We're not aborting the writer here as when this method throws it's not
            // clear as to how so the caller should assume it's their responsibility
            // to clean up the writer.
            throw err;
        }
    }
    /**
   * Pipes the response to a node response. This will close/cancel the node
   * response if an error is encountered.
   *
   * @param res
   */ async pipeToNodeResponse(res) {
        await (0, _pipereadable.pipeToNodeResponse)(this.readable, res, this.waitUntil);
    }
} //# sourceMappingURL=render-result.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-kind.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RouteKind", {
    enumerable: true,
    get: function() {
        return RouteKind;
    }
});
var RouteKind = /*#__PURE__*/ function(RouteKind) {
    /**
   * `PAGES` represents all the React pages that are under `pages/`.
   */ RouteKind["PAGES"] = "PAGES";
    /**
   * `PAGES_API` represents all the API routes under `pages/api/`.
   */ RouteKind["PAGES_API"] = "PAGES_API";
    /**
   * `APP_PAGE` represents all the React pages that are under `app/` with the
   * filename of `page.{j,t}s{,x}`.
   */ RouteKind["APP_PAGE"] = "APP_PAGE";
    /**
   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the
   * filename of `route.{j,t}s{,x}`.
   */ RouteKind["APP_ROUTE"] = "APP_ROUTE";
    /**
   * `IMAGE` represents all the images that are generated by `next/image`.
   */ RouteKind["IMAGE"] = "IMAGE";
    return RouteKind;
}({}); //# sourceMappingURL=route-kind.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/response-cache/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    fromResponseCacheEntry: null,
    routeKindToIncrementalCacheKind: null,
    toResponseCacheEntry: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    fromResponseCacheEntry: function() {
        return fromResponseCacheEntry;
    },
    routeKindToIncrementalCacheKind: function() {
        return routeKindToIncrementalCacheKind;
    },
    toResponseCacheEntry: function() {
        return toResponseCacheEntry;
    }
});
const _types = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/response-cache/types.js [app-rsc] (ecmascript)");
const _renderresult = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/render-result.js [app-rsc] (ecmascript)"));
const _routekind = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-kind.js [app-rsc] (ecmascript)");
const _constants = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/lib/constants.js [app-rsc] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function fromResponseCacheEntry(cacheEntry) {
    var _cacheEntry_value, _cacheEntry_value1;
    return {
        ...cacheEntry,
        value: ((_cacheEntry_value = cacheEntry.value) == null ? void 0 : _cacheEntry_value.kind) === _types.CachedRouteKind.PAGES ? {
            kind: _types.CachedRouteKind.PAGES,
            html: await cacheEntry.value.html.toUnchunkedString(true),
            pageData: cacheEntry.value.pageData,
            headers: cacheEntry.value.headers,
            status: cacheEntry.value.status
        } : ((_cacheEntry_value1 = cacheEntry.value) == null ? void 0 : _cacheEntry_value1.kind) === _types.CachedRouteKind.APP_PAGE ? {
            kind: _types.CachedRouteKind.APP_PAGE,
            html: await cacheEntry.value.html.toUnchunkedString(true),
            postponed: cacheEntry.value.postponed,
            rscData: cacheEntry.value.rscData,
            headers: cacheEntry.value.headers,
            status: cacheEntry.value.status,
            segmentData: cacheEntry.value.segmentData
        } : cacheEntry.value
    };
}
async function toResponseCacheEntry(response) {
    var _response_value, _response_value1;
    if (!response) return null;
    return {
        isMiss: response.isMiss,
        isStale: response.isStale,
        cacheControl: response.cacheControl,
        value: ((_response_value = response.value) == null ? void 0 : _response_value.kind) === _types.CachedRouteKind.PAGES ? {
            kind: _types.CachedRouteKind.PAGES,
            html: _renderresult.default.fromStatic(response.value.html, _constants.HTML_CONTENT_TYPE_HEADER),
            pageData: response.value.pageData,
            headers: response.value.headers,
            status: response.value.status
        } : ((_response_value1 = response.value) == null ? void 0 : _response_value1.kind) === _types.CachedRouteKind.APP_PAGE ? {
            kind: _types.CachedRouteKind.APP_PAGE,
            html: _renderresult.default.fromStatic(response.value.html, _constants.HTML_CONTENT_TYPE_HEADER),
            rscData: response.value.rscData,
            headers: response.value.headers,
            status: response.value.status,
            postponed: response.value.postponed,
            segmentData: response.value.segmentData
        } : response.value
    };
}
function routeKindToIncrementalCacheKind(routeKind) {
    switch(routeKind){
        case _routekind.RouteKind.PAGES:
            return _types.IncrementalCacheKind.PAGES;
        case _routekind.RouteKind.APP_PAGE:
            return _types.IncrementalCacheKind.APP_PAGE;
        case _routekind.RouteKind.IMAGE:
            return _types.IncrementalCacheKind.IMAGE;
        case _routekind.RouteKind.APP_ROUTE:
            return _types.IncrementalCacheKind.APP_ROUTE;
        case _routekind.RouteKind.PAGES_API:
            // Pages Router API routes are not cached in the incremental cache.
            throw Object.defineProperty(new Error(`Unexpected route kind ${routeKind}`), "__NEXT_ERROR_CODE", {
                value: "E64",
                enumerable: false,
                configurable: true
            });
        default:
            return routeKind;
    }
} //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/response-cache/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ResponseCache;
    }
});
0 && __export(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/response-cache/types.js [app-rsc] (ecmascript)"));
const _batcher = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/lib/batcher.js [app-rsc] (ecmascript)");
const _scheduler = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/lib/scheduler.js [app-rsc] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/response-cache/utils.js [app-rsc] (ecmascript)");
_export_star(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/response-cache/types.js [app-rsc] (ecmascript)"), exports);
function _export_star(from, to) {
    Object.keys(from).forEach(function(k) {
        if (k !== "default" && !Object.prototype.hasOwnProperty.call(to, k)) {
            Object.defineProperty(to, k, {
                enumerable: true,
                get: function() {
                    return from[k];
                }
            });
        }
    });
    return from;
}
class ResponseCache {
    constructor(minimal_mode){
        this.batcher = _batcher.Batcher.create({
            // Ensure on-demand revalidate doesn't block normal requests, it should be
            // safe to run an on-demand revalidate for the same key as a normal request.
            cacheKeyFn: ({ key, isOnDemandRevalidate })=>`${key}-${isOnDemandRevalidate ? '1' : '0'}`,
            // We wait to do any async work until after we've added our promise to
            // `pendingResponses` to ensure that any any other calls will reuse the
            // same promise until we've fully finished our work.
            schedulerFn: _scheduler.scheduleOnNextTick
        });
        this.minimal_mode = minimal_mode;
    }
    async get(key, responseGenerator, context) {
        // If there is no key for the cache, we can't possibly look this up in the
        // cache so just return the result of the response generator.
        if (!key) {
            return responseGenerator({
                hasResolved: false,
                previousCacheEntry: null
            });
        }
        const { incrementalCache, isOnDemandRevalidate = false, isFallback = false, isRoutePPREnabled = false, waitUntil } = context;
        const response = await this.batcher.batch({
            key,
            isOnDemandRevalidate
        }, (cacheKey, resolve)=>{
            const prom = (async ()=>{
                var _this_previousCacheItem;
                // We keep the previous cache entry around to leverage when the
                // incremental cache is disabled in minimal mode.
                if (this.minimal_mode && ((_this_previousCacheItem = this.previousCacheItem) == null ? void 0 : _this_previousCacheItem.key) === cacheKey && this.previousCacheItem.expiresAt > Date.now()) {
                    return this.previousCacheItem.entry;
                }
                // Coerce the kindHint into a given kind for the incremental cache.
                const kind = (0, _utils.routeKindToIncrementalCacheKind)(context.routeKind);
                let resolved = false;
                let cachedResponse = null;
                try {
                    cachedResponse = !this.minimal_mode ? await incrementalCache.get(key, {
                        kind,
                        isRoutePPREnabled: context.isRoutePPREnabled,
                        isFallback
                    }) : null;
                    if (cachedResponse && !isOnDemandRevalidate) {
                        resolve(cachedResponse);
                        resolved = true;
                        if (!cachedResponse.isStale || context.isPrefetch) {
                            // The cached value is still valid, so we don't need
                            // to update it yet.
                            return null;
                        }
                    }
                    const cacheEntry = await responseGenerator({
                        hasResolved: resolved,
                        previousCacheEntry: cachedResponse,
                        isRevalidating: true
                    });
                    // If the cache entry couldn't be generated, we don't want to cache
                    // the result.
                    if (!cacheEntry) {
                        // Unset the previous cache item if it was set.
                        if (this.minimal_mode) this.previousCacheItem = undefined;
                        return null;
                    }
                    const resolveValue = await (0, _utils.fromResponseCacheEntry)({
                        ...cacheEntry,
                        isMiss: !cachedResponse
                    });
                    if (!resolveValue) {
                        // Unset the previous cache item if it was set.
                        if (this.minimal_mode) this.previousCacheItem = undefined;
                        return null;
                    }
                    // For on-demand revalidate wait to resolve until cache is set.
                    // Otherwise resolve now.
                    if (!isOnDemandRevalidate && !resolved) {
                        resolve(resolveValue);
                        resolved = true;
                    }
                    // We want to persist the result only if it has a cache control value
                    // defined.
                    if (resolveValue.cacheControl) {
                        if (this.minimal_mode) {
                            this.previousCacheItem = {
                                key: cacheKey,
                                entry: resolveValue,
                                expiresAt: Date.now() + 1000
                            };
                        } else {
                            await incrementalCache.set(key, resolveValue.value, {
                                cacheControl: resolveValue.cacheControl,
                                isRoutePPREnabled,
                                isFallback
                            });
                        }
                    }
                    return resolveValue;
                } catch (err) {
                    // When a path is erroring we automatically re-set the existing cache
                    // with new revalidate and expire times to prevent non-stop retrying.
                    if (cachedResponse == null ? void 0 : cachedResponse.cacheControl) {
                        const newRevalidate = Math.min(Math.max(cachedResponse.cacheControl.revalidate || 3, 3), 30);
                        const newExpire = cachedResponse.cacheControl.expire === undefined ? undefined : Math.max(newRevalidate + 3, cachedResponse.cacheControl.expire);
                        await incrementalCache.set(key, cachedResponse.value, {
                            cacheControl: {
                                revalidate: newRevalidate,
                                expire: newExpire
                            },
                            isRoutePPREnabled,
                            isFallback
                        });
                    }
                    // While revalidating in the background we can't reject as we already
                    // resolved the cache entry so log the error here.
                    if (resolved) {
                        console.error(err);
                        return null;
                    }
                    // We haven't resolved yet, so let's throw to indicate an error.
                    throw err;
                }
            })();
            // we need to ensure background revalidates are
            // passed to waitUntil
            if (waitUntil) {
                waitUntil(prom);
            }
            return prom;
        });
        return (0, _utils.toResponseCacheEntry)(response);
    }
} //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/lib/patch-fetch.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    NEXT_PATCH_SYMBOL: null,
    createPatchedFetcher: null,
    patchFetch: null,
    validateRevalidate: null,
    validateTags: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    NEXT_PATCH_SYMBOL: function() {
        return NEXT_PATCH_SYMBOL;
    },
    createPatchedFetcher: function() {
        return createPatchedFetcher;
    },
    patchFetch: function() {
        return patchFetch;
    },
    validateRevalidate: function() {
        return validateRevalidate;
    },
    validateTags: function() {
        return validateTags;
    }
});
const _constants = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/lib/trace/constants.js [app-rsc] (ecmascript)");
const _tracer = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/lib/trace/tracer.js [app-rsc] (ecmascript)");
const _constants1 = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/lib/constants.js [app-rsc] (ecmascript)");
const _dynamicrendering = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)");
const _dedupefetch = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/lib/dedupe-fetch.js [app-rsc] (ecmascript)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _responsecache = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/response-cache/index.js [app-rsc] (ecmascript)");
const _scheduler = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/lib/scheduler.js [app-rsc] (ecmascript)");
const _cloneresponse = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/lib/clone-response.js [app-rsc] (ecmascript)");
const isEdgeRuntime = ("TURBOPACK compile-time value", "nodejs") === 'edge';
const NEXT_PATCH_SYMBOL = Symbol.for('next-patch');
function isFetchPatched() {
    return globalThis[NEXT_PATCH_SYMBOL] === true;
}
function validateRevalidate(revalidateVal, route) {
    try {
        let normalizedRevalidate = undefined;
        if (revalidateVal === false) {
            normalizedRevalidate = _constants1.INFINITE_CACHE;
        } else if (typeof revalidateVal === 'number' && !isNaN(revalidateVal) && revalidateVal > -1) {
            normalizedRevalidate = revalidateVal;
        } else if (typeof revalidateVal !== 'undefined') {
            throw Object.defineProperty(new Error(`Invalid revalidate value "${revalidateVal}" on "${route}", must be a non-negative number or false`), "__NEXT_ERROR_CODE", {
                value: "E179",
                enumerable: false,
                configurable: true
            });
        }
        return normalizedRevalidate;
    } catch (err) {
        // handle client component error from attempting to check revalidate value
        if (err instanceof Error && err.message.includes('Invalid revalidate')) {
            throw err;
        }
        return undefined;
    }
}
function validateTags(tags, description) {
    const validTags = [];
    const invalidTags = [];
    for(let i = 0; i < tags.length; i++){
        const tag = tags[i];
        if (typeof tag !== 'string') {
            invalidTags.push({
                tag,
                reason: 'invalid type, must be a string'
            });
        } else if (tag.length > _constants1.NEXT_CACHE_TAG_MAX_LENGTH) {
            invalidTags.push({
                tag,
                reason: `exceeded max length of ${_constants1.NEXT_CACHE_TAG_MAX_LENGTH}`
            });
        } else {
            validTags.push(tag);
        }
        if (validTags.length > _constants1.NEXT_CACHE_TAG_MAX_ITEMS) {
            console.warn(`Warning: exceeded max tag count for ${description}, dropped tags:`, tags.slice(i).join(', '));
            break;
        }
    }
    if (invalidTags.length > 0) {
        console.warn(`Warning: invalid tags passed to ${description}: `);
        for (const { tag, reason } of invalidTags){
            console.log(`tag: "${tag}" ${reason}`);
        }
    }
    return validTags;
}
function trackFetchMetric(workStore, ctx) {
    if (!workStore.shouldTrackFetchMetrics) {
        return;
    }
    workStore.fetchMetrics ??= [];
    workStore.fetchMetrics.push({
        ...ctx,
        end: performance.timeOrigin + performance.now(),
        idx: workStore.nextFetchId || 0
    });
}
async function createCachedPrerenderResponse(res, cacheKey, incrementalCacheContext, incrementalCache, revalidate, handleUnlock) {
    // We are prerendering at build time or revalidate time with cacheComponents so we
    // need to buffer the response so we can guarantee it can be read in a
    // microtask.
    const bodyBuffer = await res.arrayBuffer();
    const fetchedData = {
        headers: Object.fromEntries(res.headers.entries()),
        body: Buffer.from(bodyBuffer).toString('base64'),
        status: res.status,
        url: res.url
    };
    // We can skip setting the serverComponentsHmrCache because we aren't in dev
    // mode.
    if (incrementalCacheContext) {
        await incrementalCache.set(cacheKey, {
            kind: _responsecache.CachedRouteKind.FETCH,
            data: fetchedData,
            revalidate
        }, incrementalCacheContext);
    }
    await handleUnlock();
    // We return a new Response to the caller.
    return new Response(bodyBuffer, {
        headers: res.headers,
        status: res.status,
        statusText: res.statusText
    });
}
async function createCachedDynamicResponse(workStore, res, cacheKey, incrementalCacheContext, incrementalCache, serverComponentsHmrCache, revalidate, input, handleUnlock) {
    // We're cloning the response using this utility because there exists a bug in
    // the undici library around response cloning. See the following pull request
    // for more details: https://github.com/vercel/next.js/pull/73274
    const [cloned1, cloned2] = (0, _cloneresponse.cloneResponse)(res);
    // We are dynamically rendering including dev mode. We want to return the
    // response to the caller as soon as possible because it might stream over a
    // very long time.
    const cacheSetPromise = cloned1.arrayBuffer().then(async (arrayBuffer)=>{
        const bodyBuffer = Buffer.from(arrayBuffer);
        const fetchedData = {
            headers: Object.fromEntries(cloned1.headers.entries()),
            body: bodyBuffer.toString('base64'),
            status: cloned1.status,
            url: cloned1.url
        };
        serverComponentsHmrCache == null ? void 0 : serverComponentsHmrCache.set(cacheKey, fetchedData);
        if (incrementalCacheContext) {
            await incrementalCache.set(cacheKey, {
                kind: _responsecache.CachedRouteKind.FETCH,
                data: fetchedData,
                revalidate
            }, incrementalCacheContext);
        }
    }).catch((error)=>console.warn(`Failed to set fetch cache`, input, error)).finally(handleUnlock);
    const pendingRevalidateKey = `cache-set-${cacheKey}`;
    workStore.pendingRevalidates ??= {};
    if (pendingRevalidateKey in workStore.pendingRevalidates) {
        // there is already a pending revalidate entry that we need to await to
        // avoid race conditions
        await workStore.pendingRevalidates[pendingRevalidateKey];
    }
    workStore.pendingRevalidates[pendingRevalidateKey] = cacheSetPromise.finally(()=>{
        var _workStore_pendingRevalidates;
        // If the pending revalidate is not present in the store, then we have
        // nothing to delete.
        if (!((_workStore_pendingRevalidates = workStore.pendingRevalidates) == null ? void 0 : _workStore_pendingRevalidates[pendingRevalidateKey])) {
            return;
        }
        delete workStore.pendingRevalidates[pendingRevalidateKey];
    });
    return cloned2;
}
function createPatchedFetcher(originFetch, { workAsyncStorage, workUnitAsyncStorage }) {
    // Create the patched fetch function.
    const patched = async function fetch(input, init) {
        var _init_method, _init_next;
        let url;
        try {
            url = new URL(input instanceof Request ? input.url : input);
            url.username = '';
            url.password = '';
        } catch  {
            // Error caused by malformed URL should be handled by native fetch
            url = undefined;
        }
        const fetchUrl = (url == null ? void 0 : url.href) ?? '';
        const method = (init == null ? void 0 : (_init_method = init.method) == null ? void 0 : _init_method.toUpperCase()) || 'GET';
        // Do create a new span trace for internal fetches in the
        // non-verbose mode.
        const isInternal = (init == null ? void 0 : (_init_next = init.next) == null ? void 0 : _init_next.internal) === true;
        const hideSpan = process.env.NEXT_OTEL_FETCH_DISABLED === '1';
        // We don't track fetch metrics for internal fetches
        // so it's not critical that we have a start time, as it won't be recorded.
        // This is to workaround a flaky issue where performance APIs might
        // not be available and will require follow-up investigation.
        const fetchStart = isInternal ? undefined : performance.timeOrigin + performance.now();
        const workStore = workAsyncStorage.getStore();
        const workUnitStore = workUnitAsyncStorage.getStore();
        // During static generation we track cache reads so we can reason about when they fill
        let cacheSignal = workUnitStore ? (0, _workunitasyncstorageexternal.getCacheSignal)(workUnitStore) : null;
        if (cacheSignal) {
            cacheSignal.beginRead();
        }
        const result = (0, _tracer.getTracer)().trace(isInternal ? _constants.NextNodeServerSpan.internalFetch : _constants.AppRenderSpan.fetch, {
            hideSpan,
            kind: _tracer.SpanKind.CLIENT,
            spanName: [
                'fetch',
                method,
                fetchUrl
            ].filter(Boolean).join(' '),
            attributes: {
                'http.url': fetchUrl,
                'http.method': method,
                'net.peer.name': url == null ? void 0 : url.hostname,
                'net.peer.port': (url == null ? void 0 : url.port) || undefined
            }
        }, async ()=>{
            var _getRequestMeta;
            // If this is an internal fetch, we should not do any special treatment.
            if (isInternal) {
                return originFetch(input, init);
            }
            // If the workStore is not available, we can't do any
            // special treatment of fetch, therefore fallback to the original
            // fetch implementation.
            if (!workStore) {
                return originFetch(input, init);
            }
            // We should also fallback to the original fetch implementation if we
            // are in draft mode, it does not constitute a static generation.
            if (workStore.isDraftMode) {
                return originFetch(input, init);
            }
            const isRequestInput = input && typeof input === 'object' && typeof input.method === 'string';
            const getRequestMeta = (field)=>{
                // If request input is present but init is not, retrieve from input first.
                const value = init == null ? void 0 : init[field];
                return value || (isRequestInput ? input[field] : null);
            };
            let finalRevalidate = undefined;
            const getNextField = (field)=>{
                var _init_next, _init_next1, _input_next;
                return typeof (init == null ? void 0 : (_init_next = init.next) == null ? void 0 : _init_next[field]) !== 'undefined' ? init == null ? void 0 : (_init_next1 = init.next) == null ? void 0 : _init_next1[field] : isRequestInput ? (_input_next = input.next) == null ? void 0 : _input_next[field] : undefined;
            };
            // RequestInit doesn't keep extra fields e.g. next so it's
            // only available if init is used separate
            const originalFetchRevalidate = getNextField('revalidate');
            let currentFetchRevalidate = originalFetchRevalidate;
            const tags = validateTags(getNextField('tags') || [], `fetch ${input.toString()}`);
            let revalidateStore;
            if (workUnitStore) {
                switch(workUnitStore.type){
                    case 'prerender':
                    case 'prerender-runtime':
                    // TODO: Stop accumulating tags in client prerender. (fallthrough)
                    case 'prerender-client':
                    case 'prerender-ppr':
                    case 'prerender-legacy':
                    case 'cache':
                    case 'private-cache':
                        revalidateStore = workUnitStore;
                        break;
                    case 'request':
                    case 'unstable-cache':
                        break;
                    default:
                        workUnitStore;
                }
            }
            if (revalidateStore) {
                if (Array.isArray(tags)) {
                    // Collect tags onto parent caches or parent prerenders.
                    const collectedTags = revalidateStore.tags ?? (revalidateStore.tags = []);
                    for (const tag of tags){
                        if (!collectedTags.includes(tag)) {
                            collectedTags.push(tag);
                        }
                    }
                }
            }
            const implicitTags = workUnitStore == null ? void 0 : workUnitStore.implicitTags;
            let pageFetchCacheMode = workStore.fetchCache;
            if (workUnitStore) {
                switch(workUnitStore.type){
                    case 'unstable-cache':
                        // Inside unstable-cache we treat it the same as force-no-store on
                        // the page.
                        pageFetchCacheMode = 'force-no-store';
                        break;
                    case 'prerender':
                    case 'prerender-client':
                    case 'prerender-runtime':
                    case 'prerender-ppr':
                    case 'prerender-legacy':
                    case 'request':
                    case 'cache':
                    case 'private-cache':
                        break;
                    default:
                        workUnitStore;
                }
            }
            const isUsingNoStore = !!workStore.isUnstableNoStore;
            let currentFetchCacheConfig = getRequestMeta('cache');
            let cacheReason = '';
            let cacheWarning;
            if (typeof currentFetchCacheConfig === 'string' && typeof currentFetchRevalidate !== 'undefined') {
                // If the revalidate value conflicts with the cache value, we should warn the user and unset the conflicting values.
                const isConflictingRevalidate = currentFetchCacheConfig === 'force-cache' && currentFetchRevalidate === 0 || // revalidate: >0 or revalidate: false and cache: no-store
                currentFetchCacheConfig === 'no-store' && (currentFetchRevalidate > 0 || currentFetchRevalidate === false);
                if (isConflictingRevalidate) {
                    cacheWarning = `Specified "cache: ${currentFetchCacheConfig}" and "revalidate: ${currentFetchRevalidate}", only one should be specified.`;
                    currentFetchCacheConfig = undefined;
                    currentFetchRevalidate = undefined;
                }
            }
            const hasExplicitFetchCacheOptOut = currentFetchCacheConfig === 'no-cache' || currentFetchCacheConfig === 'no-store' || // the fetch isn't explicitly caching and the segment level cache config signals not to cache
            // note: `pageFetchCacheMode` is also set by being in an unstable_cache context.
            pageFetchCacheMode === 'force-no-store' || pageFetchCacheMode === 'only-no-store';
            // If no explicit fetch cache mode is set, but dynamic = `force-dynamic` is set,
            // we shouldn't consider caching the fetch. This is because the `dynamic` cache
            // is considered a "top-level" cache mode, whereas something like `fetchCache` is more
            // fine-grained. Top-level modes are responsible for setting reasonable defaults for the
            // other configurations.
            const noFetchConfigAndForceDynamic = !pageFetchCacheMode && !currentFetchCacheConfig && !currentFetchRevalidate && workStore.forceDynamic;
            if (// which will signal the cache to not revalidate
            currentFetchCacheConfig === 'force-cache' && typeof currentFetchRevalidate === 'undefined') {
                currentFetchRevalidate = false;
            } else if (hasExplicitFetchCacheOptOut || noFetchConfigAndForceDynamic) {
                currentFetchRevalidate = 0;
            }
            if (currentFetchCacheConfig === 'no-cache' || currentFetchCacheConfig === 'no-store') {
                cacheReason = `cache: ${currentFetchCacheConfig}`;
            }
            finalRevalidate = validateRevalidate(currentFetchRevalidate, workStore.route);
            const _headers = getRequestMeta('headers');
            const initHeaders = typeof (_headers == null ? void 0 : _headers.get) === 'function' ? _headers : new Headers(_headers || {});
            const hasUnCacheableHeader = initHeaders.get('authorization') || initHeaders.get('cookie');
            const isUnCacheableMethod = ![
                'get',
                'head'
            ].includes(((_getRequestMeta = getRequestMeta('method')) == null ? void 0 : _getRequestMeta.toLowerCase()) || 'get');
            /**
         * We automatically disable fetch caching under the following conditions:
         * - Fetch cache configs are not set. Specifically:
         *    - A page fetch cache mode is not set (export const fetchCache=...)
         *    - A fetch cache mode is not set in the fetch call (fetch(url, { cache: ... }))
         *      or the fetch cache mode is set to 'default'
         *    - A fetch revalidate value is not set in the fetch call (fetch(url, { revalidate: ... }))
         * - OR the fetch comes after a configuration that triggered dynamic rendering (e.g., reading cookies())
         *   and the fetch was considered uncacheable (e.g., POST method or has authorization headers)
         */ const hasNoExplicitCacheConfig = pageFetchCacheMode == undefined && // eslint-disable-next-line eqeqeq
            (currentFetchCacheConfig == undefined || // when considering whether to opt into the default "no-cache" fetch semantics,
            // a "default" cache config should be treated the same as no cache config
            currentFetchCacheConfig === 'default') && // eslint-disable-next-line eqeqeq
            currentFetchRevalidate == undefined;
            let autoNoCache = Boolean((hasUnCacheableHeader || isUnCacheableMethod) && (revalidateStore == null ? void 0 : revalidateStore.revalidate) === 0);
            let isImplicitBuildTimeCache = false;
            if (!autoNoCache && hasNoExplicitCacheConfig) {
                // We don't enable automatic no-cache behavior during build-time
                // prerendering so that we can still leverage the fetch cache between
                // export workers.
                if (workStore.isBuildTimePrerendering) {
                    isImplicitBuildTimeCache = true;
                } else {
                    autoNoCache = true;
                }
            }
            // If we have no cache config, and we're in Dynamic I/O prerendering,
            // it'll be a dynamic call. We don't have to issue that dynamic call.
            if (hasNoExplicitCacheConfig && workUnitStore !== undefined) {
                switch(workUnitStore.type){
                    case 'prerender':
                    case 'prerender-runtime':
                    // While we don't want to do caching in the client scope we know the
                    // fetch will be dynamic for cacheComponents so we may as well avoid the
                    // call here. (fallthrough)
                    case 'prerender-client':
                        if (cacheSignal) {
                            cacheSignal.endRead();
                            cacheSignal = null;
                        }
                        return (0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, 'fetch()');
                    case 'prerender-ppr':
                    case 'prerender-legacy':
                    case 'request':
                    case 'cache':
                    case 'private-cache':
                    case 'unstable-cache':
                        break;
                    default:
                        workUnitStore;
                }
            }
            switch(pageFetchCacheMode){
                case 'force-no-store':
                    {
                        cacheReason = 'fetchCache = force-no-store';
                        break;
                    }
                case 'only-no-store':
                    {
                        if (currentFetchCacheConfig === 'force-cache' || typeof finalRevalidate !== 'undefined' && finalRevalidate > 0) {
                            throw Object.defineProperty(new Error(`cache: 'force-cache' used on fetch for ${fetchUrl} with 'export const fetchCache = 'only-no-store'`), "__NEXT_ERROR_CODE", {
                                value: "E448",
                                enumerable: false,
                                configurable: true
                            });
                        }
                        cacheReason = 'fetchCache = only-no-store';
                        break;
                    }
                case 'only-cache':
                    {
                        if (currentFetchCacheConfig === 'no-store') {
                            throw Object.defineProperty(new Error(`cache: 'no-store' used on fetch for ${fetchUrl} with 'export const fetchCache = 'only-cache'`), "__NEXT_ERROR_CODE", {
                                value: "E521",
                                enumerable: false,
                                configurable: true
                            });
                        }
                        break;
                    }
                case 'force-cache':
                    {
                        if (typeof currentFetchRevalidate === 'undefined' || currentFetchRevalidate === 0) {
                            cacheReason = 'fetchCache = force-cache';
                            finalRevalidate = _constants1.INFINITE_CACHE;
                        }
                        break;
                    }
                case 'default-cache':
                case 'default-no-store':
                case 'auto':
                case undefined:
                    break;
                default:
                    pageFetchCacheMode;
            }
            if (typeof finalRevalidate === 'undefined') {
                if (pageFetchCacheMode === 'default-cache' && !isUsingNoStore) {
                    finalRevalidate = _constants1.INFINITE_CACHE;
                    cacheReason = 'fetchCache = default-cache';
                } else if (pageFetchCacheMode === 'default-no-store') {
                    finalRevalidate = 0;
                    cacheReason = 'fetchCache = default-no-store';
                } else if (isUsingNoStore) {
                    finalRevalidate = 0;
                    cacheReason = 'noStore call';
                } else if (autoNoCache) {
                    finalRevalidate = 0;
                    cacheReason = 'auto no cache';
                } else {
                    // TODO: should we consider this case an invariant?
                    cacheReason = 'auto cache';
                    finalRevalidate = revalidateStore ? revalidateStore.revalidate : _constants1.INFINITE_CACHE;
                }
            } else if (!cacheReason) {
                cacheReason = `revalidate: ${finalRevalidate}`;
            }
            if (// `revalidate: 0` values
            !(workStore.forceStatic && finalRevalidate === 0) && // we don't consider autoNoCache to switch to dynamic for ISR
            !autoNoCache && // If the revalidate value isn't currently set or the value is less
            // than the current revalidate value, we should update the revalidate
            // value.
            revalidateStore && finalRevalidate < revalidateStore.revalidate) {
                // If we were setting the revalidate value to 0, we should try to
                // postpone instead first.
                if (finalRevalidate === 0) {
                    if (workUnitStore) {
                        switch(workUnitStore.type){
                            case 'prerender':
                            case 'prerender-client':
                            case 'prerender-runtime':
                                if (cacheSignal) {
                                    cacheSignal.endRead();
                                    cacheSignal = null;
                                }
                                return (0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, 'fetch()');
                            case 'prerender-ppr':
                            case 'prerender-legacy':
                            case 'request':
                            case 'cache':
                            case 'private-cache':
                            case 'unstable-cache':
                                break;
                            default:
                                workUnitStore;
                        }
                    }
                    (0, _dynamicrendering.markCurrentScopeAsDynamic)(workStore, workUnitStore, `revalidate: 0 fetch ${input} ${workStore.route}`);
                }
                // We only want to set the revalidate store's revalidate time if it
                // was explicitly set for the fetch call, i.e.
                // originalFetchRevalidate.
                if (revalidateStore && originalFetchRevalidate === finalRevalidate) {
                    revalidateStore.revalidate = finalRevalidate;
                }
            }
            const isCacheableRevalidate = typeof finalRevalidate === 'number' && finalRevalidate > 0;
            let cacheKey;
            const { incrementalCache } = workStore;
            let isHmrRefresh = false;
            let serverComponentsHmrCache;
            if (workUnitStore) {
                switch(workUnitStore.type){
                    case 'request':
                    case 'cache':
                    case 'private-cache':
                        isHmrRefresh = workUnitStore.isHmrRefresh ?? false;
                        serverComponentsHmrCache = workUnitStore.serverComponentsHmrCache;
                        break;
                    case 'prerender':
                    case 'prerender-client':
                    case 'prerender-runtime':
                    case 'prerender-ppr':
                    case 'prerender-legacy':
                    case 'unstable-cache':
                        break;
                    default:
                        workUnitStore;
                }
            }
            if (incrementalCache && (isCacheableRevalidate || serverComponentsHmrCache)) {
                try {
                    cacheKey = await incrementalCache.generateCacheKey(fetchUrl, isRequestInput ? input : init);
                } catch (err) {
                    console.error(`Failed to generate cache key for`, input);
                }
            }
            const fetchIdx = workStore.nextFetchId ?? 1;
            workStore.nextFetchId = fetchIdx + 1;
            let handleUnlock = ()=>{};
            const doOriginalFetch = async (isStale, cacheReasonOverride)=>{
                const requestInputFields = [
                    'cache',
                    'credentials',
                    'headers',
                    'integrity',
                    'keepalive',
                    'method',
                    'mode',
                    'redirect',
                    'referrer',
                    'referrerPolicy',
                    'window',
                    'duplex',
                    // don't pass through signal when revalidating
                    ...isStale ? [] : [
                        'signal'
                    ]
                ];
                if (isRequestInput) {
                    const reqInput = input;
                    const reqOptions = {
                        body: reqInput._ogBody || reqInput.body
                    };
                    for (const field of requestInputFields){
                        // @ts-expect-error custom fields
                        reqOptions[field] = reqInput[field];
                    }
                    input = new Request(reqInput.url, reqOptions);
                } else if (init) {
                    const { _ogBody, body, signal, ...otherInput } = init;
                    init = {
                        ...otherInput,
                        body: _ogBody || body,
                        signal: isStale ? undefined : signal
                    };
                }
                // add metadata to init without editing the original
                const clonedInit = {
                    ...init,
                    next: {
                        ...init == null ? void 0 : init.next,
                        fetchType: 'origin',
                        fetchIdx
                    }
                };
                return originFetch(input, clonedInit).then(async (res)=>{
                    if (!isStale && fetchStart) {
                        trackFetchMetric(workStore, {
                            start: fetchStart,
                            url: fetchUrl,
                            cacheReason: cacheReasonOverride || cacheReason,
                            cacheStatus: finalRevalidate === 0 || cacheReasonOverride ? 'skip' : 'miss',
                            cacheWarning,
                            status: res.status,
                            method: clonedInit.method || 'GET'
                        });
                    }
                    if (res.status === 200 && incrementalCache && cacheKey && (isCacheableRevalidate || serverComponentsHmrCache)) {
                        const normalizedRevalidate = finalRevalidate >= _constants1.INFINITE_CACHE ? _constants1.CACHE_ONE_YEAR : finalRevalidate;
                        const incrementalCacheConfig = isCacheableRevalidate ? {
                            fetchCache: true,
                            fetchUrl,
                            fetchIdx,
                            tags,
                            isImplicitBuildTimeCache
                        } : undefined;
                        switch(workUnitStore == null ? void 0 : workUnitStore.type){
                            case 'prerender':
                            case 'prerender-client':
                            case 'prerender-runtime':
                                return createCachedPrerenderResponse(res, cacheKey, incrementalCacheConfig, incrementalCache, normalizedRevalidate, handleUnlock);
                            case 'prerender-ppr':
                            case 'prerender-legacy':
                            case 'request':
                            case 'cache':
                            case 'private-cache':
                            case 'unstable-cache':
                            case undefined:
                                return createCachedDynamicResponse(workStore, res, cacheKey, incrementalCacheConfig, incrementalCache, serverComponentsHmrCache, normalizedRevalidate, input, handleUnlock);
                            default:
                                workUnitStore;
                        }
                    }
                    // we had response that we determined shouldn't be cached so we return it
                    // and don't cache it. This also needs to unlock the cache lock we acquired.
                    await handleUnlock();
                    return res;
                }).catch((error)=>{
                    handleUnlock();
                    throw error;
                });
            };
            let cacheReasonOverride;
            let isForegroundRevalidate = false;
            let isHmrRefreshCache = false;
            if (cacheKey && incrementalCache) {
                let cachedFetchData;
                if (isHmrRefresh && serverComponentsHmrCache) {
                    cachedFetchData = serverComponentsHmrCache.get(cacheKey);
                    isHmrRefreshCache = true;
                }
                if (isCacheableRevalidate && !cachedFetchData) {
                    handleUnlock = await incrementalCache.lock(cacheKey);
                    const entry = workStore.isOnDemandRevalidate ? null : await incrementalCache.get(cacheKey, {
                        kind: _responsecache.IncrementalCacheKind.FETCH,
                        revalidate: finalRevalidate,
                        fetchUrl,
                        fetchIdx,
                        tags,
                        softTags: implicitTags == null ? void 0 : implicitTags.tags
                    });
                    if (hasNoExplicitCacheConfig && workUnitStore) {
                        switch(workUnitStore.type){
                            case 'prerender':
                            case 'prerender-client':
                            case 'prerender-runtime':
                                // We sometimes use the cache to dedupe fetches that do not
                                // specify a cache configuration. In these cases we want to
                                // make sure we still exclude them from prerenders if
                                // cacheComponents is on so we introduce an artificial task boundary
                                // here.
                                await (0, _scheduler.waitAtLeastOneReactRenderTask)();
                                break;
                            case 'prerender-ppr':
                            case 'prerender-legacy':
                            case 'request':
                            case 'cache':
                            case 'private-cache':
                            case 'unstable-cache':
                                break;
                            default:
                                workUnitStore;
                        }
                    }
                    if (entry) {
                        await handleUnlock();
                    } else {
                        // in dev, incremental cache response will be null in case the browser adds `cache-control: no-cache` in the request headers
                        cacheReasonOverride = 'cache-control: no-cache (hard refresh)';
                    }
                    if ((entry == null ? void 0 : entry.value) && entry.value.kind === _responsecache.CachedRouteKind.FETCH) {
                        // when stale and is revalidating we wait for fresh data
                        // so the revalidated entry has the updated data
                        if (workStore.isRevalidate && entry.isStale) {
                            isForegroundRevalidate = true;
                        } else {
                            if (entry.isStale) {
                                workStore.pendingRevalidates ??= {};
                                if (!workStore.pendingRevalidates[cacheKey]) {
                                    const pendingRevalidate = doOriginalFetch(true).then(async (response)=>({
                                            body: await response.arrayBuffer(),
                                            headers: response.headers,
                                            status: response.status,
                                            statusText: response.statusText
                                        })).finally(()=>{
                                        workStore.pendingRevalidates ??= {};
                                        delete workStore.pendingRevalidates[cacheKey || ''];
                                    });
                                    // Attach the empty catch here so we don't get a "unhandled
                                    // promise rejection" warning.
                                    pendingRevalidate.catch(console.error);
                                    workStore.pendingRevalidates[cacheKey] = pendingRevalidate;
                                }
                            }
                            cachedFetchData = entry.value.data;
                        }
                    }
                }
                if (cachedFetchData) {
                    if (fetchStart) {
                        trackFetchMetric(workStore, {
                            start: fetchStart,
                            url: fetchUrl,
                            cacheReason,
                            cacheStatus: isHmrRefreshCache ? 'hmr' : 'hit',
                            cacheWarning,
                            status: cachedFetchData.status || 200,
                            method: (init == null ? void 0 : init.method) || 'GET'
                        });
                    }
                    const response = new Response(Buffer.from(cachedFetchData.body, 'base64'), {
                        headers: cachedFetchData.headers,
                        status: cachedFetchData.status
                    });
                    Object.defineProperty(response, 'url', {
                        value: cachedFetchData.url
                    });
                    return response;
                }
            }
            if (workStore.isStaticGeneration && init && typeof init === 'object') {
                const { cache } = init;
                // Delete `cache` property as Cloudflare Workers will throw an error
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                if (cache === 'no-store') {
                    // If enabled, we should bail out of static generation.
                    if (workUnitStore) {
                        switch(workUnitStore.type){
                            case 'prerender':
                            case 'prerender-client':
                            case 'prerender-runtime':
                                if (cacheSignal) {
                                    cacheSignal.endRead();
                                    cacheSignal = null;
                                }
                                return (0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, 'fetch()');
                            case 'prerender-ppr':
                            case 'prerender-legacy':
                            case 'request':
                            case 'cache':
                            case 'private-cache':
                            case 'unstable-cache':
                                break;
                            default:
                                workUnitStore;
                        }
                    }
                    (0, _dynamicrendering.markCurrentScopeAsDynamic)(workStore, workUnitStore, `no-store fetch ${input} ${workStore.route}`);
                }
                const hasNextConfig = 'next' in init;
                const { next = {} } = init;
                if (typeof next.revalidate === 'number' && revalidateStore && next.revalidate < revalidateStore.revalidate) {
                    if (next.revalidate === 0) {
                        // If enabled, we should bail out of static generation.
                        if (workUnitStore) {
                            switch(workUnitStore.type){
                                case 'prerender':
                                case 'prerender-client':
                                case 'prerender-runtime':
                                    return (0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, 'fetch()');
                                case 'request':
                                case 'cache':
                                case 'private-cache':
                                case 'unstable-cache':
                                case 'prerender-legacy':
                                case 'prerender-ppr':
                                    break;
                                default:
                                    workUnitStore;
                            }
                        }
                        (0, _dynamicrendering.markCurrentScopeAsDynamic)(workStore, workUnitStore, `revalidate: 0 fetch ${input} ${workStore.route}`);
                    }
                    if (!workStore.forceStatic || next.revalidate !== 0) {
                        revalidateStore.revalidate = next.revalidate;
                    }
                }
                if (hasNextConfig) delete init.next;
            }
            // if we are revalidating the whole page via time or on-demand and
            // the fetch cache entry is stale we should still de-dupe the
            // origin hit if it's a cache-able entry
            if (cacheKey && isForegroundRevalidate) {
                const pendingRevalidateKey = cacheKey;
                workStore.pendingRevalidates ??= {};
                let pendingRevalidate = workStore.pendingRevalidates[pendingRevalidateKey];
                if (pendingRevalidate) {
                    const revalidatedResult = await pendingRevalidate;
                    return new Response(revalidatedResult.body, {
                        headers: revalidatedResult.headers,
                        status: revalidatedResult.status,
                        statusText: revalidatedResult.statusText
                    });
                }
                // We used to just resolve the Response and clone it however for
                // static generation with cacheComponents we need the response to be able to
                // be resolved in a microtask and cloning the response will never have
                // a body that can resolve in a microtask in node (as observed through
                // experimentation) So instead we await the body and then when it is
                // available we construct manually cloned Response objects with the
                // body as an ArrayBuffer. This will be resolvable in a microtask
                // making it compatible with cacheComponents.
                const pendingResponse = doOriginalFetch(true, cacheReasonOverride) // We're cloning the response using this utility because there
                // exists a bug in the undici library around response cloning.
                // See the following pull request for more details:
                // https://github.com/vercel/next.js/pull/73274
                .then(_cloneresponse.cloneResponse);
                pendingRevalidate = pendingResponse.then(async (responses)=>{
                    const response = responses[0];
                    return {
                        body: await response.arrayBuffer(),
                        headers: response.headers,
                        status: response.status,
                        statusText: response.statusText
                    };
                }).finally(()=>{
                    var _workStore_pendingRevalidates;
                    // If the pending revalidate is not present in the store, then
                    // we have nothing to delete.
                    if (!((_workStore_pendingRevalidates = workStore.pendingRevalidates) == null ? void 0 : _workStore_pendingRevalidates[pendingRevalidateKey])) {
                        return;
                    }
                    delete workStore.pendingRevalidates[pendingRevalidateKey];
                });
                // Attach the empty catch here so we don't get a "unhandled promise
                // rejection" warning
                pendingRevalidate.catch(()=>{});
                workStore.pendingRevalidates[pendingRevalidateKey] = pendingRevalidate;
                return pendingResponse.then((responses)=>responses[1]);
            } else {
                return doOriginalFetch(false, cacheReasonOverride);
            }
        });
        if (cacheSignal) {
            try {
                return await result;
            } finally{
                if (cacheSignal) {
                    cacheSignal.endRead();
                }
            }
        }
        return result;
    };
    // Attach the necessary properties to the patched fetch function.
    // We don't use this to determine if the fetch function has been patched,
    // but for external consumers to determine if the fetch function has been
    // patched.
    patched.__nextPatched = true;
    patched.__nextGetStaticStore = ()=>workAsyncStorage;
    patched._nextOriginalFetch = originFetch;
    globalThis[NEXT_PATCH_SYMBOL] = true;
    // Assign the function name also as a name property, so that it's preserved
    // even when mangling is enabled.
    Object.defineProperty(patched, 'name', {
        value: 'fetch',
        writable: false
    });
    return patched;
}
function patchFetch(options) {
    // If we've already patched fetch, we should not patch it again.
    if (isFetchPatched()) return;
    // Grab the original fetch function. We'll attach this so we can use it in
    // the patched fetch function.
    const original = (0, _dedupefetch.createDedupeFetch)(globalThis.fetch);
    // Set the global fetch to the patched fetch.
    globalThis.fetch = createPatchedFetcher(original, options);
} //# sourceMappingURL=patch-fetch.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/web/spec-extension/unstable-cache.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_cache", {
    enumerable: true,
    get: function() {
        return unstable_cache;
    }
});
const _constants = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/lib/constants.js [app-rsc] (ecmascript)");
const _patchfetch = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/lib/patch-fetch.js [app-rsc] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _responsecache = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/response-cache/index.js [app-rsc] (ecmascript)");
let noStoreFetchIdx = 0;
async function cacheNewResult(result, incrementalCache, cacheKey, tags, revalidate, fetchIdx, fetchUrl) {
    await incrementalCache.set(cacheKey, {
        kind: _responsecache.CachedRouteKind.FETCH,
        data: {
            headers: {},
            // TODO: handle non-JSON values?
            body: JSON.stringify(result),
            status: 200,
            url: ''
        },
        revalidate: typeof revalidate !== 'number' ? _constants.CACHE_ONE_YEAR : revalidate
    }, {
        fetchCache: true,
        tags,
        fetchIdx,
        fetchUrl
    });
    return;
}
function unstable_cache(cb, keyParts, options = {}) {
    if (options.revalidate === 0) {
        throw Object.defineProperty(new Error(`Invariant revalidate: 0 can not be passed to unstable_cache(), must be "false" or "> 0" ${cb.toString()}`), "__NEXT_ERROR_CODE", {
            value: "E57",
            enumerable: false,
            configurable: true
        });
    }
    // Validate the tags provided are valid
    const tags = options.tags ? (0, _patchfetch.validateTags)(options.tags, `unstable_cache ${cb.toString()}`) : [];
    // Validate the revalidate options
    (0, _patchfetch.validateRevalidate)(options.revalidate, `unstable_cache ${cb.name || cb.toString()}`);
    // Stash the fixed part of the key at construction time. The invocation key will combine
    // the fixed key with the arguments when actually called
    // @TODO if cb.toString() is long we should hash it
    // @TODO come up with a collision-free way to combine keyParts
    // @TODO consider validating the keyParts are all strings. TS can't provide runtime guarantees
    // and the error produced by accidentally using something that cannot be safely coerced is likely
    // hard to debug
    const fixedKey = `${cb.toString()}-${Array.isArray(keyParts) && keyParts.join(',')}`;
    const cachedCb = async (...args)=>{
        const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
        const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
        // We must be able to find the incremental cache otherwise we throw
        const maybeIncrementalCache = (workStore == null ? void 0 : workStore.incrementalCache) || globalThis.__incrementalCache;
        if (!maybeIncrementalCache) {
            throw Object.defineProperty(new Error(`Invariant: incrementalCache missing in unstable_cache ${cb.toString()}`), "__NEXT_ERROR_CODE", {
                value: "E469",
                enumerable: false,
                configurable: true
            });
        }
        const incrementalCache = maybeIncrementalCache;
        const cacheSignal = workUnitStore ? (0, _workunitasyncstorageexternal.getCacheSignal)(workUnitStore) : null;
        if (cacheSignal) {
            cacheSignal.beginRead();
        }
        try {
            // If there's no request store, we aren't in a request (or we're not in
            // app router) and if there's no static generation store, we aren't in app
            // router. Default to an empty pathname and search params when there's no
            // request store or static generation store available.
            const fetchUrlPrefix = workStore && workUnitStore ? getFetchUrlPrefix(workStore, workUnitStore) : '';
            // Construct the complete cache key for this function invocation
            // @TODO stringify is likely not safe here. We will coerce undefined to null which will make
            // the keyspace smaller than the execution space
            const invocationKey = `${fixedKey}-${JSON.stringify(args)}`;
            const cacheKey = await incrementalCache.generateCacheKey(invocationKey);
            // $urlWithPath,$sortedQueryStringKeys,$hashOfEveryThingElse
            const fetchUrl = `unstable_cache ${fetchUrlPrefix} ${cb.name ? ` ${cb.name}` : cacheKey}`;
            const fetchIdx = (workStore ? workStore.nextFetchId : noStoreFetchIdx) ?? 1;
            const implicitTags = workUnitStore == null ? void 0 : workUnitStore.implicitTags;
            const innerCacheStore = {
                type: 'unstable-cache',
                phase: 'render',
                implicitTags,
                draftMode: workUnitStore && workStore && (0, _workunitasyncstorageexternal.getDraftModeProviderForCacheScope)(workStore, workUnitStore)
            };
            if (workStore) {
                workStore.nextFetchId = fetchIdx + 1;
                // We are in an App Router context. We try to return the cached entry if it exists and is valid
                // If the entry is fresh we return it. If the entry is stale we return it but revalidate the entry in
                // the background. If the entry is missing or invalid we generate a new entry and return it.
                let isNestedUnstableCache = false;
                if (workUnitStore) {
                    switch(workUnitStore.type){
                        case 'cache':
                        case 'private-cache':
                        case 'prerender':
                        case 'prerender-runtime':
                        case 'prerender-ppr':
                        case 'prerender-legacy':
                            // We update the store's revalidate property if the option.revalidate is a higher precedence
                            // options.revalidate === undefined doesn't affect timing.
                            // options.revalidate === false doesn't shrink timing. it stays at the maximum.
                            if (typeof options.revalidate === 'number') {
                                if (workUnitStore.revalidate < options.revalidate) {
                                // The store is already revalidating on a shorter time interval, leave it alone
                                } else {
                                    workUnitStore.revalidate = options.revalidate;
                                }
                            }
                            // We need to accumulate the tags for this invocation within the store
                            const collectedTags = workUnitStore.tags;
                            if (collectedTags === null) {
                                workUnitStore.tags = tags.slice();
                            } else {
                                for (const tag of tags){
                                    // @TODO refactor tags to be a set to avoid this O(n) lookup
                                    if (!collectedTags.includes(tag)) {
                                        collectedTags.push(tag);
                                    }
                                }
                            }
                            break;
                        case 'unstable-cache':
                            isNestedUnstableCache = true;
                            break;
                        case 'prerender-client':
                        case 'request':
                            break;
                        default:
                            workUnitStore;
                    }
                }
                if (// we should bypass cache similar to fetches
                !isNestedUnstableCache && workStore.fetchCache !== 'force-no-store' && !workStore.isOnDemandRevalidate && !incrementalCache.isOnDemandRevalidate && !workStore.isDraftMode) {
                    // We attempt to get the current cache entry from the incremental cache.
                    const cacheEntry = await incrementalCache.get(cacheKey, {
                        kind: _responsecache.IncrementalCacheKind.FETCH,
                        revalidate: options.revalidate,
                        tags,
                        softTags: implicitTags == null ? void 0 : implicitTags.tags,
                        fetchIdx,
                        fetchUrl
                    });
                    if (cacheEntry && cacheEntry.value) {
                        // The entry exists and has a value
                        if (cacheEntry.value.kind !== _responsecache.CachedRouteKind.FETCH) {
                            // The entry is invalid and we need a special warning
                            // @TODO why do we warn this way? Should this just be an error? How are these errors surfaced
                            // so bugs can be reported
                            // @TODO the invocation key can have sensitive data in it. we should not log this entire object
                            console.error(`Invariant invalid cacheEntry returned for ${invocationKey}`);
                        // will fall through to generating a new cache entry below
                        } else {
                            // We have a valid cache entry so we will be returning it. We also check to see if we need
                            // to background revalidate it by checking if it is stale.
                            const cachedResponse = cacheEntry.value.data.body !== undefined ? JSON.parse(cacheEntry.value.data.body) : undefined;
                            if (cacheEntry.isStale) {
                                // In App Router we return the stale result and revalidate in the background
                                if (!workStore.pendingRevalidates) {
                                    workStore.pendingRevalidates = {};
                                }
                                // We run the cache function asynchronously and save the result when it completes
                                workStore.pendingRevalidates[invocationKey] = _workunitasyncstorageexternal.workUnitAsyncStorage.run(innerCacheStore, cb, ...args).then((result)=>{
                                    return cacheNewResult(result, incrementalCache, cacheKey, tags, options.revalidate, fetchIdx, fetchUrl);
                                }) // @TODO This error handling seems wrong. We swallow the error?
                                .catch((err)=>console.error(`revalidating cache with key: ${invocationKey}`, err));
                            }
                            // We had a valid cache entry so we return it here
                            return cachedResponse;
                        }
                    }
                }
                // If we got this far then we had an invalid cache entry and need to generate a new one
                const result = await _workunitasyncstorageexternal.workUnitAsyncStorage.run(innerCacheStore, cb, ...args);
                if (!workStore.isDraftMode) {
                    if (!workStore.pendingRevalidates) {
                        workStore.pendingRevalidates = {};
                    }
                    // We need to push the cache result promise to pending
                    // revalidates otherwise it won't be awaited and is just
                    // dangling
                    workStore.pendingRevalidates[invocationKey] = cacheNewResult(result, incrementalCache, cacheKey, tags, options.revalidate, fetchIdx, fetchUrl);
                }
                return result;
            } else {
                noStoreFetchIdx += 1;
                // We are in Pages Router or were called outside of a render. We don't have a store
                // so we just call the callback directly when it needs to run.
                // If the entry is fresh we return it. If the entry is stale we return it but revalidate the entry in
                // the background. If the entry is missing or invalid we generate a new entry and return it.
                if (!incrementalCache.isOnDemandRevalidate) {
                    // We aren't doing an on demand revalidation so we check use the cache if valid
                    const cacheEntry = await incrementalCache.get(cacheKey, {
                        kind: _responsecache.IncrementalCacheKind.FETCH,
                        revalidate: options.revalidate,
                        tags,
                        fetchIdx,
                        fetchUrl,
                        softTags: implicitTags == null ? void 0 : implicitTags.tags
                    });
                    if (cacheEntry && cacheEntry.value) {
                        // The entry exists and has a value
                        if (cacheEntry.value.kind !== _responsecache.CachedRouteKind.FETCH) {
                            // The entry is invalid and we need a special warning
                            // @TODO why do we warn this way? Should this just be an error? How are these errors surfaced
                            // so bugs can be reported
                            console.error(`Invariant invalid cacheEntry returned for ${invocationKey}`);
                        // will fall through to generating a new cache entry below
                        } else if (!cacheEntry.isStale) {
                            // We have a valid cache entry and it is fresh so we return it
                            return cacheEntry.value.data.body !== undefined ? JSON.parse(cacheEntry.value.data.body) : undefined;
                        }
                    }
                }
                // If we got this far then we had an invalid cache entry and need to generate a new one
                const result = await _workunitasyncstorageexternal.workUnitAsyncStorage.run(innerCacheStore, cb, ...args);
                // we need to wait setting the new cache result here as
                // we don't have pending revalidates on workStore to
                // push to and we can't have a dangling promise
                await cacheNewResult(result, incrementalCache, cacheKey, tags, options.revalidate, fetchIdx, fetchUrl);
                return result;
            }
        } finally{
            if (cacheSignal) {
                cacheSignal.endRead();
            }
        }
    };
    // TODO: once AsyncLocalStorage.run() returns the correct types this override will no longer be necessary
    return cachedCb;
}
function getFetchUrlPrefix(workStore, workUnitStore) {
    switch(workUnitStore.type){
        case 'request':
            const pathname = workUnitStore.url.pathname;
            const searchParams = new URLSearchParams(workUnitStore.url.search);
            const sortedSearch = [
                ...searchParams.keys()
            ].sort((a, b)=>a.localeCompare(b)).map((key)=>`${key}=${searchParams.get(key)}`).join('&');
            return `${pathname}${sortedSearch.length ? '?' : ''}${sortedSearch}`;
        case 'prerender':
        case 'prerender-client':
        case 'prerender-runtime':
        case 'prerender-ppr':
        case 'prerender-legacy':
        case 'cache':
        case 'private-cache':
        case 'unstable-cache':
            return workStore.route;
        default:
            return workUnitStore;
    }
} //# sourceMappingURL=unstable-cache.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/router/utils/sorted-routes.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getSortedRouteObjects: null,
    getSortedRoutes: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getSortedRouteObjects: function() {
        return getSortedRouteObjects;
    },
    getSortedRoutes: function() {
        return getSortedRoutes;
    }
});
class UrlNode {
    insert(urlPath) {
        this._insert(urlPath.split('/').filter(Boolean), [], false);
    }
    smoosh() {
        return this._smoosh();
    }
    _smoosh(prefix) {
        if (prefix === void 0) prefix = '/';
        const childrenPaths = [
            ...this.children.keys()
        ].sort();
        if (this.slugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf('[]'), 1);
        }
        if (this.restSlugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf('[...]'), 1);
        }
        if (this.optionalRestSlugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf('[[...]]'), 1);
        }
        const routes = childrenPaths.map((c)=>this.children.get(c)._smoosh("" + prefix + c + "/")).reduce((prev, curr)=>[
                ...prev,
                ...curr
            ], []);
        if (this.slugName !== null) {
            routes.push(...this.children.get('[]')._smoosh(prefix + "[" + this.slugName + "]/"));
        }
        if (!this.placeholder) {
            const r = prefix === '/' ? '/' : prefix.slice(0, -1);
            if (this.optionalRestSlugName != null) {
                throw Object.defineProperty(new Error('You cannot define a route with the same specificity as a optional catch-all route ("' + r + '" and "' + r + "[[..." + this.optionalRestSlugName + ']]").'), "__NEXT_ERROR_CODE", {
                    value: "E458",
                    enumerable: false,
                    configurable: true
                });
            }
            routes.unshift(r);
        }
        if (this.restSlugName !== null) {
            routes.push(...this.children.get('[...]')._smoosh(prefix + "[..." + this.restSlugName + "]/"));
        }
        if (this.optionalRestSlugName !== null) {
            routes.push(...this.children.get('[[...]]')._smoosh(prefix + "[[..." + this.optionalRestSlugName + "]]/"));
        }
        return routes;
    }
    _insert(urlPaths, slugNames, isCatchAll) {
        if (urlPaths.length === 0) {
            this.placeholder = false;
            return;
        }
        if (isCatchAll) {
            throw Object.defineProperty(new Error("Catch-all must be the last part of the URL."), "__NEXT_ERROR_CODE", {
                value: "E392",
                enumerable: false,
                configurable: true
            });
        }
        // The next segment in the urlPaths list
        let nextSegment = urlPaths[0];
        // Check if the segment matches `[something]`
        if (nextSegment.startsWith('[') && nextSegment.endsWith(']')) {
            // Strip `[` and `]`, leaving only `something`
            let segmentName = nextSegment.slice(1, -1);
            let isOptional = false;
            if (segmentName.startsWith('[') && segmentName.endsWith(']')) {
                // Strip optional `[` and `]`, leaving only `something`
                segmentName = segmentName.slice(1, -1);
                isOptional = true;
            }
            if (segmentName.startsWith('…')) {
                throw Object.defineProperty(new Error("Detected a three-dot character ('…') at ('" + segmentName + "'). Did you mean ('...')?"), "__NEXT_ERROR_CODE", {
                    value: "E147",
                    enumerable: false,
                    configurable: true
                });
            }
            if (segmentName.startsWith('...')) {
                // Strip `...`, leaving only `something`
                segmentName = segmentName.substring(3);
                isCatchAll = true;
            }
            if (segmentName.startsWith('[') || segmentName.endsWith(']')) {
                throw Object.defineProperty(new Error("Segment names may not start or end with extra brackets ('" + segmentName + "')."), "__NEXT_ERROR_CODE", {
                    value: "E421",
                    enumerable: false,
                    configurable: true
                });
            }
            if (segmentName.startsWith('.')) {
                throw Object.defineProperty(new Error("Segment names may not start with erroneous periods ('" + segmentName + "')."), "__NEXT_ERROR_CODE", {
                    value: "E288",
                    enumerable: false,
                    configurable: true
                });
            }
            function handleSlug(previousSlug, nextSlug) {
                if (previousSlug !== null) {
                    // If the specific segment already has a slug but the slug is not `something`
                    // This prevents collisions like:
                    // pages/[post]/index.js
                    // pages/[id]/index.js
                    // Because currently multiple dynamic params on the same segment level are not supported
                    if (previousSlug !== nextSlug) {
                        // TODO: This error seems to be confusing for users, needs an error link, the description can be based on above comment.
                        throw Object.defineProperty(new Error("You cannot use different slug names for the same dynamic path ('" + previousSlug + "' !== '" + nextSlug + "')."), "__NEXT_ERROR_CODE", {
                            value: "E337",
                            enumerable: false,
                            configurable: true
                        });
                    }
                }
                slugNames.forEach((slug)=>{
                    if (slug === nextSlug) {
                        throw Object.defineProperty(new Error('You cannot have the same slug name "' + nextSlug + '" repeat within a single dynamic path'), "__NEXT_ERROR_CODE", {
                            value: "E247",
                            enumerable: false,
                            configurable: true
                        });
                    }
                    if (slug.replace(/\W/g, '') === nextSegment.replace(/\W/g, '')) {
                        throw Object.defineProperty(new Error('You cannot have the slug names "' + slug + '" and "' + nextSlug + '" differ only by non-word symbols within a single dynamic path'), "__NEXT_ERROR_CODE", {
                            value: "E499",
                            enumerable: false,
                            configurable: true
                        });
                    }
                });
                slugNames.push(nextSlug);
            }
            if (isCatchAll) {
                if (isOptional) {
                    if (this.restSlugName != null) {
                        throw Object.defineProperty(new Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + urlPaths[0] + '" ).'), "__NEXT_ERROR_CODE", {
                            value: "E299",
                            enumerable: false,
                            configurable: true
                        });
                    }
                    handleSlug(this.optionalRestSlugName, segmentName);
                    // slugName is kept as it can only be one particular slugName
                    this.optionalRestSlugName = segmentName;
                    // nextSegment is overwritten to [[...]] so that it can later be sorted specifically
                    nextSegment = '[[...]]';
                } else {
                    if (this.optionalRestSlugName != null) {
                        throw Object.defineProperty(new Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + urlPaths[0] + '").'), "__NEXT_ERROR_CODE", {
                            value: "E300",
                            enumerable: false,
                            configurable: true
                        });
                    }
                    handleSlug(this.restSlugName, segmentName);
                    // slugName is kept as it can only be one particular slugName
                    this.restSlugName = segmentName;
                    // nextSegment is overwritten to [...] so that it can later be sorted specifically
                    nextSegment = '[...]';
                }
            } else {
                if (isOptional) {
                    throw Object.defineProperty(new Error('Optional route parameters are not yet supported ("' + urlPaths[0] + '").'), "__NEXT_ERROR_CODE", {
                        value: "E435",
                        enumerable: false,
                        configurable: true
                    });
                }
                handleSlug(this.slugName, segmentName);
                // slugName is kept as it can only be one particular slugName
                this.slugName = segmentName;
                // nextSegment is overwritten to [] so that it can later be sorted specifically
                nextSegment = '[]';
            }
        }
        // If this UrlNode doesn't have the nextSegment yet we create a new child UrlNode
        if (!this.children.has(nextSegment)) {
            this.children.set(nextSegment, new UrlNode());
        }
        this.children.get(nextSegment)._insert(urlPaths.slice(1), slugNames, isCatchAll);
    }
    constructor(){
        this.placeholder = true;
        this.children = new Map();
        this.slugName = null;
        this.restSlugName = null;
        this.optionalRestSlugName = null;
    }
}
function getSortedRoutes(normalizedPages) {
    // First the UrlNode is created, and every UrlNode can have only 1 dynamic segment
    // Eg you can't have pages/[post]/abc.js and pages/[hello]/something-else.js
    // Only 1 dynamic segment per nesting level
    // So in the case that is test/integration/dynamic-routing it'll be this:
    // pages/[post]/comments.js
    // pages/blog/[post]/comment/[id].js
    // Both are fine because `pages/[post]` and `pages/blog` are on the same level
    // So in this case `UrlNode` created here has `this.slugName === 'post'`
    // And since your PR passed through `slugName` as an array basically it'd including it in too many possibilities
    // Instead what has to be passed through is the upwards path's dynamic names
    const root = new UrlNode();
    // Here the `root` gets injected multiple paths, and insert will break them up into sublevels
    normalizedPages.forEach((pagePath)=>root.insert(pagePath));
    // Smoosh will then sort those sublevels up to the point where you get the correct route definition priority
    return root.smoosh();
}
function getSortedRouteObjects(objects, getter) {
    // We're assuming here that all the pathnames are unique, that way we can
    // sort the list and use the index as the key.
    const indexes = {};
    const pathnames = [];
    for(let i = 0; i < objects.length; i++){
        const pathname = getter(objects[i]);
        indexes[pathname] = i;
        pathnames[i] = pathname;
    }
    // Sort the pathnames.
    const sorted = getSortedRoutes(pathnames);
    // Map the sorted pathnames back to the original objects using the new sorted
    // index.
    return sorted.map((pathname)=>objects[indexes[pathname]]);
} //# sourceMappingURL=sorted-routes.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/router/utils/is-dynamic.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isDynamicRoute", {
    enumerable: true,
    get: function() {
        return isDynamicRoute;
    }
});
const _interceptionroutes = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)");
// Identify /.*[param].*/ in route string
const TEST_ROUTE = /\/[^/]*\[[^/]+\][^/]*(?=\/|$)/;
// Identify /[param]/ in route string
const TEST_STRICT_ROUTE = /\/\[[^/]+\](?=\/|$)/;
function isDynamicRoute(route, strict) {
    if (strict === void 0) strict = true;
    if ((0, _interceptionroutes.isInterceptionRouteAppPath)(route)) {
        route = (0, _interceptionroutes.extractInterceptionRouteInformation)(route).interceptedRoute;
    }
    if (strict) {
        return TEST_STRICT_ROUTE.test(route);
    }
    return TEST_ROUTE.test(route);
} //# sourceMappingURL=is-dynamic.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/router/utils/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getSortedRouteObjects: null,
    getSortedRoutes: null,
    isDynamicRoute: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getSortedRouteObjects: function() {
        return _sortedroutes.getSortedRouteObjects;
    },
    getSortedRoutes: function() {
        return _sortedroutes.getSortedRoutes;
    },
    isDynamicRoute: function() {
        return _isdynamic.isDynamicRoute;
    }
});
const _sortedroutes = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/router/utils/sorted-routes.js [app-rsc] (ecmascript)");
const _isdynamic = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/router/utils/is-dynamic.js [app-rsc] (ecmascript)"); //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/web/spec-extension/revalidate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    revalidatePath: null,
    revalidateTag: null,
    unstable_expirePath: null,
    unstable_expireTag: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    revalidatePath: function() {
        return revalidatePath;
    },
    revalidateTag: function() {
        return revalidateTag;
    },
    unstable_expirePath: function() {
        return unstable_expirePath;
    },
    unstable_expireTag: function() {
        return unstable_expireTag;
    }
});
const _dynamicrendering = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/router/utils/index.js [app-rsc] (ecmascript)");
const _constants = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/lib/constants.js [app-rsc] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _hooksservercontext = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/hooks-server-context.js [app-rsc] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
function revalidateTag(tag) {
    return revalidate([
        tag
    ], `revalidateTag ${tag}`);
}
function unstable_expirePath(originalPath, type) {
    if (originalPath.length > _constants.NEXT_CACHE_SOFT_TAG_MAX_LENGTH) {
        console.warn(`Warning: expirePath received "${originalPath}" which exceeded max length of ${_constants.NEXT_CACHE_SOFT_TAG_MAX_LENGTH}. See more info here https://nextjs.org/docs/app/api-reference/functions/unstable_expirePath`);
        return;
    }
    let normalizedPath = `${_constants.NEXT_CACHE_IMPLICIT_TAG_ID}${originalPath}`;
    if (type) {
        normalizedPath += `${normalizedPath.endsWith('/') ? '' : '/'}${type}`;
    } else if ((0, _utils.isDynamicRoute)(originalPath)) {
        console.warn(`Warning: a dynamic page path "${originalPath}" was passed to "expirePath", but the "type" parameter is missing. This has no effect by default, see more info here https://nextjs.org/docs/app/api-reference/functions/unstable_expirePath`);
    }
    return revalidate([
        normalizedPath
    ], `unstable_expirePath ${originalPath}`);
}
function unstable_expireTag(...tags) {
    return revalidate(tags, `unstable_expireTag ${tags.join(', ')}`);
}
function revalidatePath(originalPath, type) {
    if (originalPath.length > _constants.NEXT_CACHE_SOFT_TAG_MAX_LENGTH) {
        console.warn(`Warning: revalidatePath received "${originalPath}" which exceeded max length of ${_constants.NEXT_CACHE_SOFT_TAG_MAX_LENGTH}. See more info here https://nextjs.org/docs/app/api-reference/functions/revalidatePath`);
        return;
    }
    let normalizedPath = `${_constants.NEXT_CACHE_IMPLICIT_TAG_ID}${originalPath}`;
    if (type) {
        normalizedPath += `${normalizedPath.endsWith('/') ? '' : '/'}${type}`;
    } else if ((0, _utils.isDynamicRoute)(originalPath)) {
        console.warn(`Warning: a dynamic page path "${originalPath}" was passed to "revalidatePath", but the "type" parameter is missing. This has no effect by default, see more info here https://nextjs.org/docs/app/api-reference/functions/revalidatePath`);
    }
    return revalidate([
        normalizedPath
    ], `revalidatePath ${originalPath}`);
}
function revalidate(tags, expression) {
    const store = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (!store || !store.incrementalCache) {
        throw Object.defineProperty(new Error(`Invariant: static generation store missing in ${expression}`), "__NEXT_ERROR_CODE", {
            value: "E263",
            enumerable: false,
            configurable: true
        });
    }
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        if (workUnitStore.phase === 'render') {
            throw Object.defineProperty(new Error(`Route ${store.route} used "${expression}" during render which is unsupported. To ensure revalidation is performed consistently it must always happen outside of renders and cached functions. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
                value: "E7",
                enumerable: false,
                configurable: true
            });
        }
        switch(workUnitStore.type){
            case 'cache':
            case 'private-cache':
                throw Object.defineProperty(new Error(`Route ${store.route} used "${expression}" inside a "use cache" which is unsupported. To ensure revalidation is performed consistently it must always happen outside of renders and cached functions. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
                    value: "E181",
                    enumerable: false,
                    configurable: true
                });
            case 'unstable-cache':
                throw Object.defineProperty(new Error(`Route ${store.route} used "${expression}" inside a function cached with "unstable_cache(...)" which is unsupported. To ensure revalidation is performed consistently it must always happen outside of renders and cached functions. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
                    value: "E306",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender':
            case 'prerender-runtime':
                // cacheComponents Prerender
                const error = Object.defineProperty(new Error(`Route ${store.route} used ${expression} without first calling \`await connection()\`.`), "__NEXT_ERROR_CODE", {
                    value: "E406",
                    enumerable: false,
                    configurable: true
                });
                return (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(store.route, expression, error, workUnitStore);
            case 'prerender-client':
                throw Object.defineProperty(new _invarianterror.InvariantError(`${expression} must not be used within a client component. Next.js should be preventing ${expression} from being included in client components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E693",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-ppr':
                return (0, _dynamicrendering.postponeWithTracking)(store.route, expression, workUnitStore.dynamicTracking);
            case 'prerender-legacy':
                workUnitStore.revalidate = 0;
                const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
                    value: "E558",
                    enumerable: false,
                    configurable: true
                });
                store.dynamicUsageDescription = expression;
                store.dynamicUsageStack = err.stack;
                throw err;
            case 'request':
                if ("TURBOPACK compile-time truthy", 1) {
                    // TODO: This is most likely incorrect. It would lead to the ISR
                    // status being flipped when revalidating a static page with a server
                    // action.
                    workUnitStore.usedDynamic = true;
                }
                break;
            default:
                workUnitStore;
        }
    }
    if (!store.pendingRevalidatedTags) {
        store.pendingRevalidatedTags = [];
    }
    for (const tag of tags){
        if (!store.pendingRevalidatedTags.includes(tag)) {
            store.pendingRevalidatedTags.push(tag);
        }
    }
    // TODO: only revalidate if the path matches
    store.pathWasRevalidated = true;
} //# sourceMappingURL=revalidate.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/web/spec-extension/unstable-no-store.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_noStore", {
    enumerable: true,
    get: function() {
        return unstable_noStore;
    }
});
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _dynamicrendering = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)");
function unstable_noStore() {
    const callingExpression = 'unstable_noStore()';
    const store = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (!store) {
        // This generally implies we are being called in Pages router. We should probably not support
        // unstable_noStore in contexts outside of `react-server` condition but since we historically
        // have not errored here previously, we maintain that behavior for now.
        return;
    } else if (store.forceStatic) {
        return;
    } else {
        store.isUnstableNoStore = true;
        if (workUnitStore) {
            switch(workUnitStore.type){
                case 'prerender':
                case 'prerender-client':
                case 'prerender-runtime':
                    // unstable_noStore() is a noop in Dynamic I/O.
                    return;
                case 'prerender-ppr':
                case 'prerender-legacy':
                case 'request':
                case 'cache':
                case 'private-cache':
                case 'unstable-cache':
                    break;
                default:
                    workUnitStore;
            }
        }
        (0, _dynamicrendering.markCurrentScopeAsDynamic)(store, workUnitStore, callingExpression);
    }
} //# sourceMappingURL=unstable-no-store.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/use-cache/cache-life.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "cacheLife", {
    enumerable: true,
    get: function() {
        return cacheLife;
    }
});
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
function validateCacheLife(profile) {
    if (profile.stale !== undefined) {
        if (profile.stale === false) {
            throw Object.defineProperty(new Error('Pass `Infinity` instead of `false` if you want to cache on the client forever ' + 'without checking with the server.'), "__NEXT_ERROR_CODE", {
                value: "E407",
                enumerable: false,
                configurable: true
            });
        } else if (typeof profile.stale !== 'number') {
            throw Object.defineProperty(new Error('The stale option must be a number of seconds.'), "__NEXT_ERROR_CODE", {
                value: "E308",
                enumerable: false,
                configurable: true
            });
        }
    }
    if (profile.revalidate !== undefined) {
        if (profile.revalidate === false) {
            throw Object.defineProperty(new Error('Pass `Infinity` instead of `false` if you do not want to revalidate by time.'), "__NEXT_ERROR_CODE", {
                value: "E104",
                enumerable: false,
                configurable: true
            });
        } else if (typeof profile.revalidate !== 'number') {
            throw Object.defineProperty(new Error('The revalidate option must be a number of seconds.'), "__NEXT_ERROR_CODE", {
                value: "E233",
                enumerable: false,
                configurable: true
            });
        }
    }
    if (profile.expire !== undefined) {
        if (profile.expire === false) {
            throw Object.defineProperty(new Error('Pass `Infinity` instead of `false` if you want to cache on the server forever ' + 'without checking with the origin.'), "__NEXT_ERROR_CODE", {
                value: "E658",
                enumerable: false,
                configurable: true
            });
        } else if (typeof profile.expire !== 'number') {
            throw Object.defineProperty(new Error('The expire option must be a number of seconds.'), "__NEXT_ERROR_CODE", {
                value: "E3",
                enumerable: false,
                configurable: true
            });
        }
    }
    if (profile.revalidate !== undefined && profile.expire !== undefined) {
        if (profile.revalidate > profile.expire) {
            throw Object.defineProperty(new Error('If providing both the revalidate and expire options, ' + 'the expire option must be greater than the revalidate option. ' + 'The expire option indicates how many seconds from the start ' + 'until it can no longer be used.'), "__NEXT_ERROR_CODE", {
                value: "E656",
                enumerable: false,
                configurable: true
            });
        }
    }
    if (profile.stale !== undefined && profile.expire !== undefined) {
        if (profile.stale > profile.expire) {
            throw Object.defineProperty(new Error('If providing both the stale and expire options, ' + 'the expire option must be greater than the stale option. ' + 'The expire option indicates how many seconds from the start ' + 'until it can no longer be used.'), "__NEXT_ERROR_CODE", {
                value: "E655",
                enumerable: false,
                configurable: true
            });
        }
    }
}
function cacheLife(profile) {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error('cacheLife() is only available with the experimental.useCache config.'), "__NEXT_ERROR_CODE", {
            value: "E627",
            enumerable: false,
            configurable: true
        });
    }
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    switch(workUnitStore == null ? void 0 : workUnitStore.type){
        case 'prerender':
        case 'prerender-client':
        case 'prerender-runtime':
        case 'prerender-ppr':
        case 'prerender-legacy':
        case 'request':
        case 'unstable-cache':
        case undefined:
            throw Object.defineProperty(new Error('cacheLife() can only be called inside a "use cache" function.'), "__NEXT_ERROR_CODE", {
                value: "E250",
                enumerable: false,
                configurable: true
            });
        case 'cache':
        case 'private-cache':
            break;
        default:
            workUnitStore;
    }
    if (typeof profile === 'string') {
        const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
        if (!workStore) {
            throw Object.defineProperty(new Error('cacheLife() can only be called during App Router rendering at the moment.'), "__NEXT_ERROR_CODE", {
                value: "E94",
                enumerable: false,
                configurable: true
            });
        }
        if (!workStore.cacheLifeProfiles) {
            throw Object.defineProperty(new Error('cacheLifeProfiles should always be provided. This is a bug in Next.js.'), "__NEXT_ERROR_CODE", {
                value: "E294",
                enumerable: false,
                configurable: true
            });
        }
        // TODO: This should be globally available and not require an AsyncLocalStorage.
        const configuredProfile = workStore.cacheLifeProfiles[profile];
        if (configuredProfile === undefined) {
            if (workStore.cacheLifeProfiles[profile.trim()]) {
                throw Object.defineProperty(new Error(`Unknown cacheLife profile "${profile}" is not configured in next.config.js\n` + `Did you mean "${profile.trim()}" without the spaces?`), "__NEXT_ERROR_CODE", {
                    value: "E16",
                    enumerable: false,
                    configurable: true
                });
            }
            throw Object.defineProperty(new Error(`Unknown cacheLife profile "${profile}" is not configured in next.config.js\n` + 'module.exports = {\n' + '  experimental: {\n' + '    cacheLife: {\n' + `      "${profile}": ...\n` + '    }\n' + '  }\n' + '}'), "__NEXT_ERROR_CODE", {
                value: "E137",
                enumerable: false,
                configurable: true
            });
        }
        profile = configuredProfile;
    } else if (typeof profile !== 'object' || profile === null || Array.isArray(profile)) {
        throw Object.defineProperty(new Error('Invalid cacheLife() option. Either pass a profile name or object.'), "__NEXT_ERROR_CODE", {
            value: "E110",
            enumerable: false,
            configurable: true
        });
    } else {
        validateCacheLife(profile);
    }
    if (profile.revalidate !== undefined) {
        // Track the explicit revalidate time.
        if (workUnitStore.explicitRevalidate === undefined || workUnitStore.explicitRevalidate > profile.revalidate) {
            workUnitStore.explicitRevalidate = profile.revalidate;
        }
    }
    if (profile.expire !== undefined) {
        // Track the explicit expire time.
        if (workUnitStore.explicitExpire === undefined || workUnitStore.explicitExpire > profile.expire) {
            workUnitStore.explicitExpire = profile.expire;
        }
    }
    if (profile.stale !== undefined) {
        // Track the explicit stale time.
        if (workUnitStore.explicitStale === undefined || workUnitStore.explicitStale > profile.stale) {
            workUnitStore.explicitStale = profile.stale;
        }
    }
} //# sourceMappingURL=cache-life.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/use-cache/cache-tag.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "cacheTag", {
    enumerable: true,
    get: function() {
        return cacheTag;
    }
});
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _patchfetch = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/lib/patch-fetch.js [app-rsc] (ecmascript)");
function cacheTag(...tags) {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error('cacheTag() is only available with the experimental.useCache config.'), "__NEXT_ERROR_CODE", {
            value: "E628",
            enumerable: false,
            configurable: true
        });
    }
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    switch(workUnitStore == null ? void 0 : workUnitStore.type){
        case 'prerender':
        case 'prerender-client':
        case 'prerender-runtime':
        case 'prerender-ppr':
        case 'prerender-legacy':
        case 'request':
        case 'unstable-cache':
        case undefined:
            throw Object.defineProperty(new Error('cacheTag() can only be called inside a "use cache" function.'), "__NEXT_ERROR_CODE", {
                value: "E177",
                enumerable: false,
                configurable: true
            });
        case 'cache':
        case 'private-cache':
            break;
        default:
            workUnitStore;
    }
    const validTags = (0, _patchfetch.validateTags)(tags, 'cacheTag()');
    if (!workUnitStore.tags) {
        workUnitStore.tags = validTags;
    } else {
        workUnitStore.tags.push(...validTags);
    }
} //# sourceMappingURL=cache-tag.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/cache.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const cacheExports = {
    unstable_cache: __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/web/spec-extension/unstable-cache.js [app-rsc] (ecmascript)").unstable_cache,
    revalidateTag: __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/web/spec-extension/revalidate.js [app-rsc] (ecmascript)").revalidateTag,
    revalidatePath: __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/web/spec-extension/revalidate.js [app-rsc] (ecmascript)").revalidatePath,
    unstable_expireTag: __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/web/spec-extension/revalidate.js [app-rsc] (ecmascript)").unstable_expireTag,
    unstable_expirePath: __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/web/spec-extension/revalidate.js [app-rsc] (ecmascript)").unstable_expirePath,
    unstable_noStore: __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/web/spec-extension/unstable-no-store.js [app-rsc] (ecmascript)").unstable_noStore,
    unstable_cacheLife: __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/use-cache/cache-life.js [app-rsc] (ecmascript)").cacheLife,
    unstable_cacheTag: __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/use-cache/cache-tag.js [app-rsc] (ecmascript)").cacheTag
};
// https://nodejs.org/api/esm.html#commonjs-namespaces
// When importing CommonJS modules, the module.exports object is provided as the default export
module.exports = cacheExports;
// make import { xxx } from 'next/cache' work
exports.unstable_cache = cacheExports.unstable_cache;
exports.revalidatePath = cacheExports.revalidatePath;
exports.revalidateTag = cacheExports.revalidateTag;
exports.unstable_expireTag = cacheExports.unstable_expireTag;
exports.unstable_expirePath = cacheExports.unstable_expirePath;
exports.unstable_noStore = cacheExports.unstable_noStore;
exports.unstable_cacheLife = cacheExports.unstable_cacheLife;
exports.unstable_cacheTag = cacheExports.unstable_cacheTag;
}),
"[project]/apps/web/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/node_modules/.pnpm/@clerk+nextjs@6.39.6_next@1_e4f340dc9b8ea70227def0df2f5abc5c/node_modules/@clerk/nextjs/dist/esm/server/keyless-custom-headers.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/node_modules/.pnpm/@clerk+nextjs@6.39.6_next@1_e4f340dc9b8ea70227def0df2f5abc5c/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/apps/web/lib/getOrderUser.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/node_modules/.pnpm/@clerk+nextjs@6.39.6_next@1_e4f340dc9b8ea70227def0df2f5abc5c/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/apps/web/actions/home.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE5 => \"[project]/apps/web/actions/car-listing.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.39.6_next@1_e4f340dc9b8ea70227def0df2f5abc5c/node_modules/@clerk/nextjs/dist/esm/server/keyless-custom-headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.39.6_next@1_e4f340dc9b8ea70227def0df2f5abc5c/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$getOrderUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/getOrderUser.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.39.6_next@1_e4f340dc9b8ea70227def0df2f5abc5c/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$actions$2f$home$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/actions/home.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$actions$2f$car$2d$listing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/actions/car-listing.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/apps/web/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/node_modules/.pnpm/@clerk+nextjs@6.39.6_next@1_e4f340dc9b8ea70227def0df2f5abc5c/node_modules/@clerk/nextjs/dist/esm/server/keyless-custom-headers.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/node_modules/.pnpm/@clerk+nextjs@6.39.6_next@1_e4f340dc9b8ea70227def0df2f5abc5c/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/apps/web/lib/getOrderUser.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/node_modules/.pnpm/@clerk+nextjs@6.39.6_next@1_e4f340dc9b8ea70227def0df2f5abc5c/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/apps/web/actions/home.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE5 => \"[project]/apps/web/actions/car-listing.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "008f7ab740e40ddfb234d50c5acbea1dfcaea484c2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$getOrderUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOrCreateUser"],
    "401069f31be1ae2375914ea61738c495d089849c19",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$actions$2f$home$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFeaturedCars"],
    "404f6a6ae9aa204db4be26b3540ba07dbddab8f869",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$actions$2f$car$2d$listing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toggleSavedCar"],
    "40e1f3f63454781840cf3b0fc73a546e9b511eb3cb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$actions$2f$home$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["processImageSearch"],
    "7f00912195dcbeb1c153bc3feb87af32efc6d9ef63",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["syncKeylessConfigAction"],
    "7f1751175aba60fac908ae79b712aaf3102b3e2787",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["invalidateCacheAction"],
    "7f24f55530d7ea43c0f6379cbea34d97be0e11beb2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteKeylessAction"],
    "7f39fe2c4d05c6e5489a8809da393698d238f0b06a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatMetadataHeaders"],
    "7f984ff98620becab56d780c8c4dc50cb3f96c49dc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["detectKeylessEnvDriftAction"],
    "7f9d70adfeacbcea4e8a8b203404f09a0535453520",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["collectKeylessMetadata"],
    "7fe8d1da3b7f8254f4006cfea8203f2e16ab65a72d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createOrReadKeylessAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$lib$2f$getOrderUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$actions$2f$home$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$actions$2f$car$2d$listing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/apps/web/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/node_modules/.pnpm/@clerk+nextjs@6.39.6_next@1_e4f340dc9b8ea70227def0df2f5abc5c/node_modules/@clerk/nextjs/dist/esm/server/keyless-custom-headers.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/node_modules/.pnpm/@clerk+nextjs@6.39.6_next@1_e4f340dc9b8ea70227def0df2f5abc5c/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/apps/web/lib/getOrderUser.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/node_modules/.pnpm/@clerk+nextjs@6.39.6_next@1_e4f340dc9b8ea70227def0df2f5abc5c/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE4 => "[project]/apps/web/actions/home.ts [app-rsc] (ecmascript)", ACTIONS_MODULE5 => "[project]/apps/web/actions/car-listing.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.39.6_next@1_e4f340dc9b8ea70227def0df2f5abc5c/node_modules/@clerk/nextjs/dist/esm/server/keyless-custom-headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.39.6_next@1_e4f340dc9b8ea70227def0df2f5abc5c/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$getOrderUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/getOrderUser.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.39.6_next@1_e4f340dc9b8ea70227def0df2f5abc5c/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$actions$2f$home$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/actions/home.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$actions$2f$car$2d$listing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/actions/car-listing.ts [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript, Next.js server utility)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript)"));}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript, Next.js server utility)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript)"));}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/instrumentation/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRevalidateReason",
    ()=>getRevalidateReason
]);
function getRevalidateReason(params) {
    if (params.isOnDemandRevalidate) {
        return 'on-demand';
    }
    if (params.isRevalidate) {
        return 'stale';
    }
    return undefined;
} //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/app-render/interop-default.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Interop between "export default" and "module.exports".
 */ __turbopack_context__.s([
    "interopDefault",
    ()=>interopDefault
]);
function interopDefault(mod) {
    return mod.default || mod;
} //# sourceMappingURL=interop-default.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/app-render/strip-flight-headers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stripFlightHeaders",
    ()=>stripFlightHeaders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)");
;
function stripFlightHeaders(headers) {
    for (const header of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FLIGHT_HEADERS"]){
        delete headers[header];
    }
} //# sourceMappingURL=strip-flight-headers.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeadersAdapter",
    ()=>HeadersAdapter,
    "ReadonlyHeadersError",
    ()=>ReadonlyHeadersError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [app-rsc] (ecmascript)");
;
class ReadonlyHeadersError extends Error {
    constructor(){
        super('Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers');
    }
    static callable() {
        throw new ReadonlyHeadersError();
    }
}
class HeadersAdapter extends Headers {
    constructor(headers){
        // We've already overridden the methods that would be called, so we're just
        // calling the super constructor to ensure that the instanceof check works.
        super();
        this.headers = new Proxy(headers, {
            get (target, prop, receiver) {
                // Because this is just an object, we expect that all "get" operations
                // are for properties. If it's a "get" for a symbol, we'll just return
                // the symbol.
                if (typeof prop === 'symbol') {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return undefined.
                if (typeof original === 'undefined') return;
                // If the original casing exists, return the value.
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, original, receiver);
            },
            set (target, prop, value, receiver) {
                if (typeof prop === 'symbol') {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].set(target, prop, value, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, use the prop as the key.
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].set(target, original ?? prop, value, receiver);
            },
            has (target, prop) {
                if (typeof prop === 'symbol') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].has(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return false.
                if (typeof original === 'undefined') return false;
                // If the original casing exists, return true.
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].has(target, original);
            },
            deleteProperty (target, prop) {
                if (typeof prop === 'symbol') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].deleteProperty(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return true.
                if (typeof original === 'undefined') return true;
                // If the original casing exists, delete the property.
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].deleteProperty(target, original);
            }
        });
    }
    /**
   * Seals a Headers instance to prevent modification by throwing an error when
   * any mutating method is called.
   */ static seal(headers) {
        return new Proxy(headers, {
            get (target, prop, receiver) {
                switch(prop){
                    case 'append':
                    case 'delete':
                    case 'set':
                        return ReadonlyHeadersError.callable;
                    default:
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
            }
        });
    }
    /**
   * Merges a header value into a string. This stores multiple values as an
   * array, so we need to merge them into a string.
   *
   * @param value a header value
   * @returns a merged header value (a string)
   */ merge(value) {
        if (Array.isArray(value)) return value.join(', ');
        return value;
    }
    /**
   * Creates a Headers instance from a plain object or a Headers instance.
   *
   * @param headers a plain object or a Headers instance
   * @returns a headers instance
   */ static from(headers) {
        if (headers instanceof Headers) return headers;
        return new HeadersAdapter(headers);
    }
    append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === 'string') {
            this.headers[name] = [
                existing,
                value
            ];
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            this.headers[name] = value;
        }
    }
    delete(name) {
        delete this.headers[name];
    }
    get(name) {
        const value = this.headers[name];
        if (typeof value !== 'undefined') return this.merge(value);
        return null;
    }
    has(name) {
        return typeof this.headers[name] !== 'undefined';
    }
    set(name, value) {
        this.headers[name] = value;
    }
    forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()){
            callbackfn.call(thisArg, value, name, this);
        }
    }
    *entries() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(name);
            yield [
                name,
                value
            ];
        }
    }
    *keys() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            yield name;
        }
    }
    *values() {
        for (const key of Object.keys(this.headers)){
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(key);
            yield value;
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
} //# sourceMappingURL=headers.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/api-utils/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiError",
    ()=>ApiError,
    "COOKIE_NAME_PRERENDER_BYPASS",
    ()=>COOKIE_NAME_PRERENDER_BYPASS,
    "COOKIE_NAME_PRERENDER_DATA",
    ()=>COOKIE_NAME_PRERENDER_DATA,
    "RESPONSE_LIMIT_DEFAULT",
    ()=>RESPONSE_LIMIT_DEFAULT,
    "SYMBOL_CLEARED_COOKIES",
    ()=>SYMBOL_CLEARED_COOKIES,
    "SYMBOL_PREVIEW_DATA",
    ()=>SYMBOL_PREVIEW_DATA,
    "checkIsOnDemandRevalidate",
    ()=>checkIsOnDemandRevalidate,
    "clearPreviewData",
    ()=>clearPreviewData,
    "redirect",
    ()=>redirect,
    "sendError",
    ()=>sendError,
    "sendStatusCode",
    ()=>sendStatusCode,
    "setLazyProp",
    ()=>setLazyProp,
    "wrapApiHandler",
    ()=>wrapApiHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)");
;
;
;
;
function wrapApiHandler(page, handler) {
    return (...args)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTracer"])().setRootSpanAttribute('next.route', page);
        // Call API route method
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTracer"])().trace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeSpan"].runHandler, {
            spanName: `executing api route (pages) ${page}`
        }, ()=>handler(...args));
    };
}
function sendStatusCode(res, statusCode) {
    res.statusCode = statusCode;
    return res;
}
function redirect(res, statusOrUrl, url) {
    if (typeof statusOrUrl === 'string') {
        url = statusOrUrl;
        statusOrUrl = 307;
    }
    if (typeof statusOrUrl !== 'number' || typeof url !== 'string') {
        throw Object.defineProperty(new Error(`Invalid redirect arguments. Please use a single argument URL, e.g. res.redirect('/destination') or use a status code and URL, e.g. res.redirect(307, '/destination').`), "__NEXT_ERROR_CODE", {
            value: "E389",
            enumerable: false,
            configurable: true
        });
    }
    res.writeHead(statusOrUrl, {
        Location: url
    });
    res.write(url);
    res.end();
    return res;
}
function checkIsOnDemandRevalidate(req, previewProps) {
    const headers = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HeadersAdapter"].from(req.headers);
    const previewModeId = headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PRERENDER_REVALIDATE_HEADER"]);
    const isOnDemandRevalidate = previewModeId === previewProps.previewModeId;
    const revalidateOnlyGenerated = headers.has(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER"]);
    return {
        isOnDemandRevalidate,
        revalidateOnlyGenerated
    };
}
const COOKIE_NAME_PRERENDER_BYPASS = `__prerender_bypass`;
const COOKIE_NAME_PRERENDER_DATA = `__next_preview_data`;
const RESPONSE_LIMIT_DEFAULT = 4 * 1024 * 1024;
const SYMBOL_PREVIEW_DATA = Symbol(COOKIE_NAME_PRERENDER_DATA);
const SYMBOL_CLEARED_COOKIES = Symbol(COOKIE_NAME_PRERENDER_BYPASS);
function clearPreviewData(res, options = {}) {
    if (SYMBOL_CLEARED_COOKIES in res) {
        return res;
    }
    const { serialize } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/cookie/index.js [app-rsc] (ecmascript)");
    const previous = res.getHeader('Set-Cookie');
    res.setHeader(`Set-Cookie`, [
        ...typeof previous === 'string' ? [
            previous
        ] : Array.isArray(previous) ? previous : [],
        serialize(COOKIE_NAME_PRERENDER_BYPASS, '', {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'lax',
            secure: ("TURBOPACK compile-time value", "development") !== 'development',
            path: '/',
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        }),
        serialize(COOKIE_NAME_PRERENDER_DATA, '', {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'lax',
            secure: ("TURBOPACK compile-time value", "development") !== 'development',
            path: '/',
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        })
    ]);
    Object.defineProperty(res, SYMBOL_CLEARED_COOKIES, {
        value: true,
        enumerable: false
    });
    return res;
}
class ApiError extends Error {
    constructor(statusCode, message){
        super(message);
        this.statusCode = statusCode;
    }
}
function sendError(res, statusCode, message) {
    res.statusCode = statusCode;
    res.statusMessage = message;
    res.end(message);
}
function setLazyProp({ req }, prop, getter) {
    const opts = {
        configurable: true,
        enumerable: true
    };
    const optsReset = {
        ...opts,
        writable: true
    };
    Object.defineProperty(req, prop, {
        ...opts,
        get: ()=>{
            const value = getter();
            // we set the property on the object to avoid recalculating it
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
            return value;
        },
        set: (value)=>{
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
        }
    });
} //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/api-utils/get-cookie-parser.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Parse cookies from the `headers` of request
 * @param req request object
 */ __turbopack_context__.s([
    "getCookieParser",
    ()=>getCookieParser
]);
function getCookieParser(headers) {
    return function parseCookie() {
        const { cookie } = headers;
        if (!cookie) {
            return {};
        }
        const { parse: parseCookieFn } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/cookie/index.js [app-rsc] (ecmascript)");
        return parseCookieFn(Array.isArray(cookie) ? cookie.join('; ') : cookie);
    };
} //# sourceMappingURL=get-cookie-parser.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/base-http/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseNextRequest",
    ()=>BaseNextRequest,
    "BaseNextResponse",
    ()=>BaseNextResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/client/components/redirect-status-code.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$get$2d$cookie$2d$parser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/api-utils/get-cookie-parser.js [app-rsc] (ecmascript)");
;
;
class BaseNextRequest {
    constructor(method, url, body){
        this.method = method;
        this.url = url;
        this.body = body;
    }
    // Utils implemented using the abstract methods above
    get cookies() {
        if (this._cookies) return this._cookies;
        return this._cookies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$get$2d$cookie$2d$parser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCookieParser"])(this.headers)();
    }
}
class BaseNextResponse {
    constructor(destination){
        this.destination = destination;
    }
    // Utils implemented using the abstract methods above
    redirect(destination, statusCode) {
        this.setHeader('Location', destination);
        this.statusCode = statusCode;
        // Since IE11 doesn't support the 308 header add backwards
        // compatibility using refresh header
        if (statusCode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RedirectStatusCode"].PermanentRedirect) {
            this.setHeader('Refresh', `0;url=${destination}`);
        }
        return this;
    }
} //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/base-http/node.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeNextRequest",
    ()=>NodeNextRequest,
    "NodeNextResponse",
    ()=>NodeNextResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/api-utils/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/request-meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/base-http/index.js [app-rsc] (ecmascript)");
;
;
;
let prop;
class NodeNextRequest extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseNextRequest"] {
    static #_ = prop = _NEXT_REQUEST_META = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_REQUEST_META"];
    constructor(_req){
        var _this__req;
        super(_req.method.toUpperCase(), _req.url, _req), this._req = _req, this.headers = this._req.headers, this.fetchMetrics = (_this__req = this._req) == null ? void 0 : _this__req.fetchMetrics, this[_NEXT_REQUEST_META] = this._req[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_REQUEST_META"]] || {}, this.streaming = false;
    }
    get originalRequest() {
        // Need to mimic these changes to the original req object for places where we use it:
        // render.tsx, api/ssg requests
        this._req[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_REQUEST_META"]] = this[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_REQUEST_META"]];
        this._req.url = this.url;
        this._req.cookies = this.cookies;
        return this._req;
    }
    set originalRequest(value) {
        this._req = value;
    }
    /**
   * Returns the request body as a Web Readable Stream. The body here can only
   * be read once as the body will start flowing as soon as the data handler
   * is attached.
   *
   * @internal
   */ stream() {
        if (this.streaming) {
            throw Object.defineProperty(new Error('Invariant: NodeNextRequest.stream() can only be called once'), "__NEXT_ERROR_CODE", {
                value: "E467",
                enumerable: false,
                configurable: true
            });
        }
        this.streaming = true;
        return new ReadableStream({
            start: (controller)=>{
                this._req.on('data', (chunk)=>{
                    controller.enqueue(new Uint8Array(chunk));
                });
                this._req.on('end', ()=>{
                    controller.close();
                });
                this._req.on('error', (err)=>{
                    controller.error(err);
                });
            }
        });
    }
}
class NodeNextResponse extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseNextResponse"] {
    get originalResponse() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SYMBOL_CLEARED_COOKIES"] in this) {
            this._res[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SYMBOL_CLEARED_COOKIES"]] = this[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SYMBOL_CLEARED_COOKIES"]];
        }
        return this._res;
    }
    constructor(_res){
        super(_res), this._res = _res, this.textBody = undefined;
    }
    get sent() {
        return this._res.finished || this._res.headersSent;
    }
    get statusCode() {
        return this._res.statusCode;
    }
    set statusCode(value) {
        this._res.statusCode = value;
    }
    get statusMessage() {
        return this._res.statusMessage;
    }
    set statusMessage(value) {
        this._res.statusMessage = value;
    }
    setHeader(name, value) {
        this._res.setHeader(name, value);
        return this;
    }
    removeHeader(name) {
        this._res.removeHeader(name);
        return this;
    }
    getHeaderValues(name) {
        const values = this._res.getHeader(name);
        if (values === undefined) return undefined;
        return (Array.isArray(values) ? values : [
            values
        ]).map((value)=>value.toString());
    }
    hasHeader(name) {
        return this._res.hasHeader(name);
    }
    getHeader(name) {
        const values = this.getHeaderValues(name);
        return Array.isArray(values) ? values.join(',') : undefined;
    }
    getHeaders() {
        return this._res.getHeaders();
    }
    appendHeader(name, value) {
        const currentValues = this.getHeaderValues(name) ?? [];
        if (!currentValues.includes(value)) {
            this._res.setHeader(name, [
                ...currentValues,
                value
            ]);
        }
        return this;
    }
    body(value) {
        this.textBody = value;
        return this;
    }
    send() {
        this._res.end(this.textBody);
    }
    onClose(callback) {
        this.originalResponse.on('close', callback);
    }
}
var _NEXT_REQUEST_META; //# sourceMappingURL=node.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/lib/experimental/ppr.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * If set to `incremental`, only those leaf pages that export
 * `experimental_ppr = true` will have partial prerendering enabled. If any
 * page exports this value as `false` or does not export it at all will not
 * have partial prerendering enabled. If set to a boolean, the options for
 * `experimental_ppr` will be ignored.
 */ /**
 * Returns true if partial prerendering is enabled for the application. It does
 * not tell you if a given route has PPR enabled, as that requires analysis of
 * the route's configuration.
 *
 * @see {@link checkIsRoutePPREnabled} - for checking if a specific route has PPR enabled.
 */ __turbopack_context__.s([
    "checkIsAppPPREnabled",
    ()=>checkIsAppPPREnabled,
    "checkIsRoutePPREnabled",
    ()=>checkIsRoutePPREnabled
]);
function checkIsAppPPREnabled(config) {
    // If the config is undefined, partial prerendering is disabled.
    if (typeof config === 'undefined') return false;
    // If the config is a boolean, use it directly.
    if (typeof config === 'boolean') return config;
    // If the config is a string, it must be 'incremental' to enable partial
    // prerendering.
    if (config === 'incremental') return true;
    return false;
}
function checkIsRoutePPREnabled(config, appConfig) {
    // If the config is undefined, partial prerendering is disabled.
    if (typeof config === 'undefined') return false;
    // If the config is a boolean, use it directly.
    if (typeof config === 'boolean') return config;
    // If the config is a string, it must be 'incremental' to enable partial
    // prerendering.
    if (config === 'incremental' && appConfig.experimental_ppr === true) {
        return true;
    }
    return false;
} //# sourceMappingURL=ppr.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/shared/lib/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Web vitals provided to _app.reportWebVitals by Core Web Vitals plugin developed by Google Chrome team.
 * https://nextjs.org/blog/next-9-4#integrated-web-vitals-reporting
 */ __turbopack_context__.s([
    "DecodeError",
    ()=>DecodeError,
    "MiddlewareNotFoundError",
    ()=>MiddlewareNotFoundError,
    "MissingStaticPage",
    ()=>MissingStaticPage,
    "NormalizeError",
    ()=>NormalizeError,
    "PageNotFoundError",
    ()=>PageNotFoundError,
    "SP",
    ()=>SP,
    "ST",
    ()=>ST,
    "WEB_VITALS",
    ()=>WEB_VITALS,
    "execOnce",
    ()=>execOnce,
    "getDisplayName",
    ()=>getDisplayName,
    "getLocationOrigin",
    ()=>getLocationOrigin,
    "getURL",
    ()=>getURL,
    "isAbsoluteUrl",
    ()=>isAbsoluteUrl,
    "isResSent",
    ()=>isResSent,
    "loadGetInitialProps",
    ()=>loadGetInitialProps,
    "normalizeRepeatedSlashes",
    ()=>normalizeRepeatedSlashes,
    "stringifyError",
    ()=>stringifyError
]);
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return protocol + "//" + hostname + (port ? ':' + port : '');
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? "?" + urlParts.slice(1).join('?') : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        var _App_prototype;
        if ((_App_prototype = App.prototype) == null ? void 0 : _App_prototype.getInitialProps) {
            const message = '"' + getDisplayName(App) + '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.';
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn("" + getDisplayName(App) + " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps");
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = "Cannot find module for page: " + page;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = "Failed to load static file for page: " + page + " " + message;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = "Cannot find the middleware module";
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/lib/route-pattern-normalizer.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Route pattern normalization utilities for path-to-regexp compatibility.
 *
 * path-to-regexp 6.3.0+ introduced stricter validation that rejects certain
 * patterns commonly used in Next.js interception routes. This module provides
 * normalization functions to make Next.js route patterns compatible with the
 * updated library while preserving all functionality.
 */ /**
 * Internal separator used to normalize adjacent parameter patterns.
 * This unique marker is inserted between adjacent parameters and stripped out
 * during parameter extraction to avoid conflicts with real URL content.
 */ __turbopack_context__.s([
    "hasAdjacentParameterIssues",
    ()=>hasAdjacentParameterIssues,
    "normalizeAdjacentParameters",
    ()=>normalizeAdjacentParameters,
    "normalizeTokensForRegexp",
    ()=>normalizeTokensForRegexp,
    "stripParameterSeparators",
    ()=>stripParameterSeparators
]);
const PARAM_SEPARATOR = '_NEXTSEP_';
function hasAdjacentParameterIssues(route) {
    if (typeof route !== 'string') return false;
    // Check for interception route markers followed immediately by parameters
    // Pattern: /(.):param, /(..):param, /(...):param, /(.)(.):param etc.
    // These patterns cause "Must have text between two parameters" errors
    if (/\/\(\.{1,3}\):[^/\s]+/.test(route)) {
        return true;
    }
    // Check for basic adjacent parameters without separators
    // Pattern: :param1:param2 (but not :param* or other URL patterns)
    if (/:[a-zA-Z_][a-zA-Z0-9_]*:[a-zA-Z_][a-zA-Z0-9_]*/.test(route)) {
        return true;
    }
    return false;
}
function normalizeAdjacentParameters(route) {
    let normalized = route;
    // Handle interception route patterns: (.):param -> (.)_NEXTSEP_:param
    normalized = normalized.replace(/(\([^)]*\)):([^/\s]+)/g, `$1${PARAM_SEPARATOR}:$2`);
    // Handle other adjacent parameter patterns: :param1:param2 -> :param1_NEXTSEP_:param2
    normalized = normalized.replace(/:([^:/\s)]+)(?=:)/g, `:$1${PARAM_SEPARATOR}`);
    return normalized;
}
function normalizeTokensForRegexp(tokens) {
    return tokens.map((token)=>{
        // Token union type: Token = string | TokenObject
        // Literal path segments are strings, parameters/wildcards are objects
        if (typeof token === 'object' && token !== null && // Not all token objects have 'modifier' property (e.g., simple text tokens)
        'modifier' in token && // Only repeating modifiers (* or +) cause the validation error
        // Other modifiers like '?' (optional) are fine
        (token.modifier === '*' || token.modifier === '+') && // Token objects can have different shapes depending on route pattern
        'prefix' in token && 'suffix' in token && // Both prefix and suffix must be empty strings
        // This is what causes the validation error in path-to-regexp
        token.prefix === '' && token.suffix === '') {
            // Add minimal prefix to satisfy path-to-regexp validation
            // We use '/' as it's the most common path delimiter and won't break route matching
            // The prefix gets used in regex generation but doesn't affect parameter extraction
            return {
                ...token,
                prefix: '/'
            };
        }
        return token;
    });
}
function stripParameterSeparators(params) {
    const cleaned = {};
    for (const [key, value] of Object.entries(params)){
        if (typeof value === 'string') {
            // Remove the separator if it appears at the start of parameter values
            cleaned[key] = value.replace(new RegExp(`^${PARAM_SEPARATOR}`), '');
        } else if (Array.isArray(value)) {
            // Handle array parameters (from repeated route segments)
            cleaned[key] = value.map((item)=>typeof item === 'string' ? item.replace(new RegExp(`^${PARAM_SEPARATOR}`), '') : item);
        } else {
            cleaned[key] = value;
        }
    }
    return cleaned;
} //# sourceMappingURL=route-pattern-normalizer.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/shared/lib/router/utils/route-match-utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Client-safe utilities for route matching that don't import server-side
 * utilities to avoid bundling issues with Turbopack
 */ __turbopack_context__.s([
    "safeCompile",
    ()=>safeCompile,
    "safePathToRegexp",
    ()=>safePathToRegexp,
    "safeRegexpToFunction",
    ()=>safeRegexpToFunction,
    "safeRouteMatcher",
    ()=>safeRouteMatcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/path-to-regexp/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/lib/route-pattern-normalizer.js [app-rsc] (ecmascript)");
;
;
function safePathToRegexp(route, keys, options) {
    if (typeof route !== 'string') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pathToRegexp"])(route, keys, options);
    }
    // Check if normalization is needed and cache the result
    const needsNormalization = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasAdjacentParameterIssues"])(route);
    const routeToUse = needsNormalization ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAdjacentParameters"])(route) : route;
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pathToRegexp"])(routeToUse, keys, options);
    } catch (error) {
        // Only try normalization if we haven't already normalized
        if (!needsNormalization) {
            try {
                const normalizedRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAdjacentParameters"])(route);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pathToRegexp"])(normalizedRoute, keys, options);
            } catch (retryError) {
                // If that doesn't work, fall back to original error
                throw error;
            }
        }
        throw error;
    }
}
function safeCompile(route, options) {
    // Check if normalization is needed and cache the result
    const needsNormalization = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasAdjacentParameterIssues"])(route);
    const routeToUse = needsNormalization ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAdjacentParameters"])(route) : route;
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compile"])(routeToUse, options);
    } catch (error) {
        // Only try normalization if we haven't already normalized
        if (!needsNormalization) {
            try {
                const normalizedRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAdjacentParameters"])(route);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compile"])(normalizedRoute, options);
            } catch (retryError) {
                // If that doesn't work, fall back to original error
                throw error;
            }
        }
        throw error;
    }
}
function safeRegexpToFunction(regexp, keys) {
    const originalMatcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["regexpToFunction"])(regexp, keys || []);
    return (pathname)=>{
        const result = originalMatcher(pathname);
        if (!result) return false;
        // Clean parameters before returning
        return {
            ...result,
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripParameterSeparators"])(result.params)
        };
    };
}
function safeRouteMatcher(matcherFn) {
    return (pathname)=>{
        const result = matcherFn(pathname);
        if (!result) return false;
        // Clean parameters before returning
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripParameterSeparators"])(result);
    };
} //# sourceMappingURL=route-match-utils.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/shared/lib/router/utils/route-matcher.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRouteMatcher",
    ()=>getRouteMatcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/shared/lib/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$match$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/shared/lib/router/utils/route-match-utils.js [app-rsc] (ecmascript)");
;
;
function getRouteMatcher(param) {
    let { re, groups } = param;
    const rawMatcher = (pathname)=>{
        const routeMatch = re.exec(pathname);
        if (!routeMatch) return false;
        const decode = (param)=>{
            try {
                return decodeURIComponent(param);
            } catch (e) {
                throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DecodeError"]('failed to decode param'), "__NEXT_ERROR_CODE", {
                    value: "E528",
                    enumerable: false,
                    configurable: true
                });
            }
        };
        const params = {};
        for (const [key, group] of Object.entries(groups)){
            const match = routeMatch[group.pos];
            if (match !== undefined) {
                if (group.repeat) {
                    params[key] = match.split('/').map((entry)=>decode(entry));
                } else {
                    params[key] = decode(match);
                }
            }
        }
        return params;
    };
    // Wrap with safe matcher to handle parameter cleaning
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$match$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["safeRouteMatcher"])(rawMatcher);
} //# sourceMappingURL=route-matcher.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */ __turbopack_context__.s([
    "ensureLeadingSlash",
    ()=>ensureLeadingSlash
]);
function ensureLeadingSlash(path) {
    return path.startsWith('/') ? path : "/" + path;
} //# sourceMappingURL=ensure-leading-slash.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeAppPath",
    ()=>normalizeAppPath,
    "normalizeRscURL",
    ()=>normalizeRscURL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$page$2d$path$2f$ensure$2d$leading$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/shared/lib/segment.js [app-rsc] (ecmascript)");
;
;
function normalizeAppPath(route) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$page$2d$path$2f$ensure$2d$leading$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureLeadingSlash"])(route.split('/').reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isGroupSegment"])(segment)) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === '@') {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === 'page' || segment === 'route') && index === segments.length - 1) {
            return pathname;
        }
        return pathname + "/" + segment;
    }, ''));
}
function normalizeRscURL(url) {
    return url.replace(/\.rsc($|\?)/, '$1');
} //# sourceMappingURL=app-paths.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INTERCEPTION_ROUTE_MARKERS",
    ()=>INTERCEPTION_ROUTE_MARKERS,
    "extractInterceptionRouteInformation",
    ()=>extractInterceptionRouteInformation,
    "isInterceptionRouteAppPath",
    ()=>isInterceptionRouteAppPath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
;
const INTERCEPTION_ROUTE_MARKERS = [
    '(..)(..)',
    '(.)',
    '(..)',
    '(...)'
];
function isInterceptionRouteAppPath(path) {
    // TODO-APP: add more serious validation
    return path.split('/').find((segment)=>INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m))) !== undefined;
}
function extractInterceptionRouteInformation(path) {
    let interceptingRoute, marker, interceptedRoute;
    for (const segment of path.split('/')){
        marker = INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
        if (marker) {
            ;
            [interceptingRoute, interceptedRoute] = path.split(marker, 2);
            break;
        }
    }
    if (!interceptingRoute || !marker || !interceptedRoute) {
        throw Object.defineProperty(new Error("Invalid interception route: " + path + ". Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>"), "__NEXT_ERROR_CODE", {
            value: "E269",
            enumerable: false,
            configurable: true
        });
    }
    interceptingRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAppPath"])(interceptingRoute) // normalize the path, e.g. /(blog)/feed -> /feed
    ;
    switch(marker){
        case '(.)':
            // (.) indicates that we should match with sibling routes, so we just need to append the intercepted route to the intercepting route
            if (interceptingRoute === '/') {
                interceptedRoute = "/" + interceptedRoute;
            } else {
                interceptedRoute = interceptingRoute + '/' + interceptedRoute;
            }
            break;
        case '(..)':
            // (..) indicates that we should match at one level up, so we need to remove the last segment of the intercepting route
            if (interceptingRoute === '/') {
                throw Object.defineProperty(new Error("Invalid interception route: " + path + ". Cannot use (..) marker at the root level, use (.) instead."), "__NEXT_ERROR_CODE", {
                    value: "E207",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptedRoute = interceptingRoute.split('/').slice(0, -1).concat(interceptedRoute).join('/');
            break;
        case '(...)':
            // (...) will match the route segment in the root directory, so we need to use the root directory to prepend the intercepted route
            interceptedRoute = '/' + interceptedRoute;
            break;
        case '(..)(..)':
            // (..)(..) indicates that we should match at two levels up, so we need to remove the last two segments of the intercepting route
            const splitInterceptingRoute = interceptingRoute.split('/');
            if (splitInterceptingRoute.length <= 2) {
                throw Object.defineProperty(new Error("Invalid interception route: " + path + ". Cannot use (..)(..) marker at the root level or one level up."), "__NEXT_ERROR_CODE", {
                    value: "E486",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join('/');
            break;
        default:
            throw Object.defineProperty(new Error('Invariant: unexpected marker'), "__NEXT_ERROR_CODE", {
                value: "E112",
                enumerable: false,
                configurable: true
            });
    }
    return {
        interceptingRoute,
        interceptedRoute
    };
} //# sourceMappingURL=interception-routes.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/shared/lib/escape-regexp.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// regexp is based on https://github.com/sindresorhus/escape-string-regexp
__turbopack_context__.s([
    "escapeStringRegexp",
    ()=>escapeStringRegexp
]);
const reHasRegExp = /[|\\{}()[\]^$+*?.-]/;
const reReplaceRegExp = /[|\\{}()[\]^$+*?.-]/g;
function escapeStringRegexp(str) {
    // see also: https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/escapeRegExp.js#L23
    if (reHasRegExp.test(str)) {
        return str.replace(reReplaceRegExp, '\\$&');
    }
    return str;
} //# sourceMappingURL=escape-regexp.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/shared/lib/router/utils/get-dynamic-param.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 *
 * Shared logic on client and server for creating a dynamic param value.
 *
 * This code needs to be shared with the client so it can extract dynamic route
 * params from the URL without a server request.
 *
 * Because everything in this module is sent to the client, we should aim to
 * keep this code as simple as possible. The special case handling for catchall
 * and optional is, alas, unfortunate.
 */ __turbopack_context__.s([
    "PARAMETER_PATTERN",
    ()=>PARAMETER_PATTERN,
    "getDynamicParam",
    ()=>getDynamicParam,
    "parseMatchedParameter",
    ()=>parseMatchedParameter,
    "parseParameter",
    ()=>parseParameter
]);
function getDynamicParam(params, segmentKey, dynamicParamType, pagePath, fallbackRouteParams) {
    let value = params[segmentKey];
    if (fallbackRouteParams && fallbackRouteParams.has(segmentKey)) {
        value = fallbackRouteParams.get(segmentKey);
    } else if (Array.isArray(value)) {
        value = value.map((i)=>encodeURIComponent(i));
    } else if (typeof value === 'string') {
        value = encodeURIComponent(value);
    }
    if (!value) {
        const isCatchall = dynamicParamType === 'c';
        const isOptionalCatchall = dynamicParamType === 'oc';
        if (isCatchall || isOptionalCatchall) {
            // handle the case where an optional catchall does not have a value,
            // e.g. `/dashboard/[[...slug]]` when requesting `/dashboard`
            if (isOptionalCatchall) {
                return {
                    param: segmentKey,
                    value: null,
                    type: dynamicParamType,
                    treeSegment: [
                        segmentKey,
                        '',
                        dynamicParamType
                    ]
                };
            }
            // handle the case where a catchall or optional catchall does not have a value,
            // e.g. `/foo/bar/hello` and `@slot/[...catchall]` or `@slot/[[...catchall]]` is matched
            value = pagePath.split('/') // remove the first empty string
            .slice(1) // replace any dynamic params with the actual values
            .flatMap((pathSegment)=>{
                const param = parseParameter(pathSegment);
                var _params_param_key;
                // if the segment matches a param, return the param value
                // otherwise, it's a static segment, so just return that
                return (_params_param_key = params[param.key]) != null ? _params_param_key : param.key;
            });
            return {
                param: segmentKey,
                value,
                type: dynamicParamType,
                // This value always has to be a string.
                treeSegment: [
                    segmentKey,
                    value.join('/'),
                    dynamicParamType
                ]
            };
        }
    }
    return {
        param: segmentKey,
        // The value that is passed to user code.
        value: value,
        // The value that is rendered in the router tree.
        treeSegment: [
            segmentKey,
            Array.isArray(value) ? value.join('/') : value,
            dynamicParamType
        ],
        type: dynamicParamType
    };
}
const PARAMETER_PATTERN = /^([^[]*)\[((?:\[[^\]]*\])|[^\]]+)\](.*)$/;
function parseParameter(param) {
    const match = param.match(PARAMETER_PATTERN);
    if (!match) {
        return parseMatchedParameter(param);
    }
    return parseMatchedParameter(match[2]);
}
function parseMatchedParameter(param) {
    const optional = param.startsWith('[') && param.endsWith(']');
    if (optional) {
        param = param.slice(1, -1);
    }
    const repeat = param.startsWith('...');
    if (repeat) {
        param = param.slice(3);
    }
    return {
        key: param,
        repeat,
        optional
    };
} //# sourceMappingURL=get-dynamic-param.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/shared/lib/router/utils/route-regex.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNamedMiddlewareRegex",
    ()=>getNamedMiddlewareRegex,
    "getNamedRouteRegex",
    ()=>getNamedRouteRegex,
    "getRouteRegex",
    ()=>getRouteRegex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/shared/lib/escape-regexp.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/shared/lib/router/utils/get-dynamic-param.js [app-rsc] (ecmascript)");
;
;
;
;
;
function getParametrizedRoute(route, includeSuffix, includePrefix) {
    const groups = {};
    let groupIndex = 1;
    const segments = [];
    for (const segment of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeTrailingSlash"])(route).slice(1).split('/')){
        const markerMatch = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INTERCEPTION_ROUTE_MARKERS"].find((m)=>segment.startsWith(m));
        const paramMatches = segment.match(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PARAMETER_PATTERN"]) // Check for parameters
        ;
        if (markerMatch && paramMatches && paramMatches[2]) {
            const { key, optional, repeat } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseMatchedParameter"])(paramMatches[2]);
            groups[key] = {
                pos: groupIndex++,
                repeat,
                optional
            };
            segments.push("/" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(markerMatch) + "([^/]+?)");
        } else if (paramMatches && paramMatches[2]) {
            const { key, repeat, optional } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseMatchedParameter"])(paramMatches[2]);
            groups[key] = {
                pos: groupIndex++,
                repeat,
                optional
            };
            if (includePrefix && paramMatches[1]) {
                segments.push("/" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(paramMatches[1]));
            }
            let s = repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
            // Remove the leading slash if includePrefix already added it.
            if (includePrefix && paramMatches[1]) {
                s = s.substring(1);
            }
            segments.push(s);
        } else {
            segments.push("/" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(segment));
        }
        // If there's a suffix, add it to the segments if it's enabled.
        if (includeSuffix && paramMatches && paramMatches[3]) {
            segments.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(paramMatches[3]));
        }
    }
    return {
        parameterizedRoute: segments.join(''),
        groups
    };
}
function getRouteRegex(normalizedRoute, param) {
    let { includeSuffix = false, includePrefix = false, excludeOptionalTrailingSlash = false } = param === void 0 ? {} : param;
    const { parameterizedRoute, groups } = getParametrizedRoute(normalizedRoute, includeSuffix, includePrefix);
    let re = parameterizedRoute;
    if (!excludeOptionalTrailingSlash) {
        re += '(?:/)?';
    }
    return {
        re: new RegExp("^" + re + "$"),
        groups: groups
    };
}
/**
 * Builds a function to generate a minimal routeKey using only a-z and minimal
 * number of characters.
 */ function buildGetSafeRouteKey() {
    let i = 0;
    return ()=>{
        let routeKey = '';
        let j = ++i;
        while(j > 0){
            routeKey += String.fromCharCode(97 + (j - 1) % 26);
            j = Math.floor((j - 1) / 26);
        }
        return routeKey;
    };
}
function getSafeKeyFromSegment(param) {
    let { interceptionMarker, getSafeRouteKey, segment, routeKeys, keyPrefix, backreferenceDuplicateKeys } = param;
    const { key, optional, repeat } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseMatchedParameter"])(segment);
    // replace any non-word characters since they can break
    // the named regex
    let cleanedKey = key.replace(/\W/g, '');
    if (keyPrefix) {
        cleanedKey = "" + keyPrefix + cleanedKey;
    }
    let invalidKey = false;
    // check if the key is still invalid and fallback to using a known
    // safe key
    if (cleanedKey.length === 0 || cleanedKey.length > 30) {
        invalidKey = true;
    }
    if (!isNaN(parseInt(cleanedKey.slice(0, 1)))) {
        invalidKey = true;
    }
    if (invalidKey) {
        cleanedKey = getSafeRouteKey();
    }
    const duplicateKey = cleanedKey in routeKeys;
    if (keyPrefix) {
        routeKeys[cleanedKey] = "" + keyPrefix + key;
    } else {
        routeKeys[cleanedKey] = key;
    }
    // if the segment has an interception marker, make sure that's part of the regex pattern
    // this is to ensure that the route with the interception marker doesn't incorrectly match
    // the non-intercepted route (ie /app/(.)[username] should not match /app/[username])
    const interceptionPrefix = interceptionMarker ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(interceptionMarker) : '';
    let pattern;
    if (duplicateKey && backreferenceDuplicateKeys) {
        // Use a backreference to the key to ensure that the key is the same value
        // in each of the placeholders.
        pattern = "\\k<" + cleanedKey + ">";
    } else if (repeat) {
        pattern = "(?<" + cleanedKey + ">.+?)";
    } else {
        pattern = "(?<" + cleanedKey + ">[^/]+?)";
    }
    return optional ? "(?:/" + interceptionPrefix + pattern + ")?" : "/" + interceptionPrefix + pattern;
}
function getNamedParametrizedRoute(route, prefixRouteKeys, includeSuffix, includePrefix, backreferenceDuplicateKeys) {
    const getSafeRouteKey = buildGetSafeRouteKey();
    const routeKeys = {};
    const segments = [];
    for (const segment of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeTrailingSlash"])(route).slice(1).split('/')){
        const hasInterceptionMarker = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INTERCEPTION_ROUTE_MARKERS"].some((m)=>segment.startsWith(m));
        const paramMatches = segment.match(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PARAMETER_PATTERN"]) // Check for parameters
        ;
        if (hasInterceptionMarker && paramMatches && paramMatches[2]) {
            // If there's an interception marker, add it to the segments.
            segments.push(getSafeKeyFromSegment({
                getSafeRouteKey,
                interceptionMarker: paramMatches[1],
                segment: paramMatches[2],
                routeKeys,
                keyPrefix: prefixRouteKeys ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_INTERCEPTION_MARKER_PREFIX"] : undefined,
                backreferenceDuplicateKeys
            }));
        } else if (paramMatches && paramMatches[2]) {
            // If there's a prefix, add it to the segments if it's enabled.
            if (includePrefix && paramMatches[1]) {
                segments.push("/" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(paramMatches[1]));
            }
            let s = getSafeKeyFromSegment({
                getSafeRouteKey,
                segment: paramMatches[2],
                routeKeys,
                keyPrefix: prefixRouteKeys ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_QUERY_PARAM_PREFIX"] : undefined,
                backreferenceDuplicateKeys
            });
            // Remove the leading slash if includePrefix already added it.
            if (includePrefix && paramMatches[1]) {
                s = s.substring(1);
            }
            segments.push(s);
        } else {
            segments.push("/" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(segment));
        }
        // If there's a suffix, add it to the segments if it's enabled.
        if (includeSuffix && paramMatches && paramMatches[3]) {
            segments.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(paramMatches[3]));
        }
    }
    return {
        namedParameterizedRoute: segments.join(''),
        routeKeys
    };
}
function getNamedRouteRegex(normalizedRoute, options) {
    var _options_includeSuffix, _options_includePrefix, _options_backreferenceDuplicateKeys;
    const result = getNamedParametrizedRoute(normalizedRoute, options.prefixRouteKeys, (_options_includeSuffix = options.includeSuffix) != null ? _options_includeSuffix : false, (_options_includePrefix = options.includePrefix) != null ? _options_includePrefix : false, (_options_backreferenceDuplicateKeys = options.backreferenceDuplicateKeys) != null ? _options_backreferenceDuplicateKeys : false);
    let namedRegex = result.namedParameterizedRoute;
    if (!options.excludeOptionalTrailingSlash) {
        namedRegex += '(?:/)?';
    }
    return {
        ...getRouteRegex(normalizedRoute, options),
        namedRegex: "^" + namedRegex + "$",
        routeKeys: result.routeKeys
    };
}
function getNamedMiddlewareRegex(normalizedRoute, options) {
    const { parameterizedRoute } = getParametrizedRoute(normalizedRoute, false, false);
    const { catchAll = true } = options;
    if (parameterizedRoute === '/') {
        let catchAllRegex = catchAll ? '.*' : '';
        return {
            namedRegex: "^/" + catchAllRegex + "$"
        };
    }
    const { namedParameterizedRoute } = getNamedParametrizedRoute(normalizedRoute, false, false, false, false);
    let catchAllGroupedRegex = catchAll ? '(?:(/.*)?)' : '';
    return {
        namedRegex: "^" + namedParameterizedRoute + catchAllGroupedRegex + "$"
    };
} //# sourceMappingURL=route-regex.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/request/fallback-params.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFallbackRouteParams",
    ()=>getFallbackRouteParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$matcher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/shared/lib/router/utils/route-matcher.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/shared/lib/router/utils/route-regex.js [app-rsc] (ecmascript)");
;
;
function getParamKeys(page) {
    const pattern = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRouteRegex"])(page);
    const matcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$matcher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRouteMatcher"])(pattern);
    // Get the default list of allowed params.
    return Object.keys(matcher(page));
}
function getFallbackRouteParams(pageOrKeys) {
    let keys;
    if (typeof pageOrKeys === 'string') {
        keys = getParamKeys(pageOrKeys);
    } else {
        keys = pageOrKeys;
    }
    // If there are no keys, we can return early.
    if (keys.length === 0) return null;
    const params = new Map();
    // As we're creating unique keys for each of the dynamic route params, we only
    // need to generate a unique ID once per request because each of the keys will
    // be also be unique.
    const uniqueID = Math.random().toString(16).slice(2);
    for (const key of keys){
        params.set(key, `%%drp:${key}:${uniqueID}%%`);
    }
    return params;
} //# sourceMappingURL=fallback-params.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/app-render/encryption-utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arrayBufferToString",
    ()=>arrayBufferToString,
    "decrypt",
    ()=>decrypt,
    "encrypt",
    ()=>encrypt,
    "getActionEncryptionKey",
    ()=>getActionEncryptionKey,
    "getClientReferenceManifestForRsc",
    ()=>getClientReferenceManifestForRsc,
    "getServerModuleMap",
    ()=>getServerModuleMap,
    "setReferenceManifestsSingleton",
    ()=>setReferenceManifestsSingleton,
    "stringToUint8Array",
    ()=>stringToUint8Array
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
;
;
;
let __next_loaded_action_key;
function arrayBufferToString(buffer) {
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    // @anonrig: V8 has a limit of 65535 arguments in a function.
    // For len < 65535, this is faster.
    // https://github.com/vercel/next.js/pull/56377#pullrequestreview-1656181623
    if (len < 65535) {
        return String.fromCharCode.apply(null, bytes);
    }
    let binary = '';
    for(let i = 0; i < len; i++){
        binary += String.fromCharCode(bytes[i]);
    }
    return binary;
}
function stringToUint8Array(binary) {
    const len = binary.length;
    const arr = new Uint8Array(len);
    for(let i = 0; i < len; i++){
        arr[i] = binary.charCodeAt(i);
    }
    return arr;
}
function encrypt(key, iv, data) {
    return crypto.subtle.encrypt({
        name: 'AES-GCM',
        iv
    }, key, data);
}
function decrypt(key, iv, data) {
    return crypto.subtle.decrypt({
        name: 'AES-GCM',
        iv
    }, key, data);
}
// This is a global singleton that is used to encode/decode the action bound args from
// the closure. This can't be using a AsyncLocalStorage as it might happen on the module
// level. Since the client reference manifest won't be mutated, let's use a global singleton
// to keep it.
const SERVER_ACTION_MANIFESTS_SINGLETON = Symbol.for('next.server.action-manifests');
function setReferenceManifestsSingleton({ page, clientReferenceManifest, serverActionsManifest, serverModuleMap }) {
    var _globalThis_SERVER_ACTION_MANIFESTS_SINGLETON;
    // @ts-expect-error
    const clientReferenceManifestsPerPage = (_globalThis_SERVER_ACTION_MANIFESTS_SINGLETON = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON]) == null ? void 0 : _globalThis_SERVER_ACTION_MANIFESTS_SINGLETON.clientReferenceManifestsPerPage;
    // @ts-expect-error
    globalThis[SERVER_ACTION_MANIFESTS_SINGLETON] = {
        clientReferenceManifestsPerPage: {
            ...clientReferenceManifestsPerPage,
            [(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAppPath"])(page)]: clientReferenceManifest
        },
        serverActionsManifest,
        serverModuleMap
    };
}
function getServerModuleMap() {
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('Missing manifest for Server Actions.'), "__NEXT_ERROR_CODE", {
            value: "E606",
            enumerable: false,
            configurable: true
        });
    }
    return serverActionsManifestSingleton.serverModuleMap;
}
function getClientReferenceManifestForRsc() {
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('Missing manifest for Server Actions.'), "__NEXT_ERROR_CODE", {
            value: "E606",
            enumerable: false,
            configurable: true
        });
    }
    const { clientReferenceManifestsPerPage } = serverActionsManifestSingleton;
    const workStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workAsyncStorage"].getStore();
    if (!workStore) {
        // If there's no work store defined, we can assume that a client reference
        // manifest is needed during module evaluation, e.g. to create a server
        // action using a higher-order function. This might also use client
        // components which need to be serialized by Flight, and therefore client
        // references need to be resolvable. To make this work, we're returning a
        // merged manifest across all pages. This is fine as long as the module IDs
        // are not page specific, which they are not for Webpack. TODO: Fix this in
        // Turbopack.
        return mergeClientReferenceManifests(clientReferenceManifestsPerPage);
    }
    const clientReferenceManifest = clientReferenceManifestsPerPage[workStore.route];
    if (!clientReferenceManifest) {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`Missing Client Reference Manifest for ${workStore.route}.`), "__NEXT_ERROR_CODE", {
            value: "E570",
            enumerable: false,
            configurable: true
        });
    }
    return clientReferenceManifest;
}
async function getActionEncryptionKey() {
    if (__next_loaded_action_key) {
        return __next_loaded_action_key;
    }
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('Missing manifest for Server Actions.'), "__NEXT_ERROR_CODE", {
            value: "E606",
            enumerable: false,
            configurable: true
        });
    }
    const rawKey = process.env.NEXT_SERVER_ACTIONS_ENCRYPTION_KEY || serverActionsManifestSingleton.serverActionsManifest.encryptionKey;
    if (rawKey === undefined) {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('Missing encryption key for Server Actions'), "__NEXT_ERROR_CODE", {
            value: "E571",
            enumerable: false,
            configurable: true
        });
    }
    __next_loaded_action_key = await crypto.subtle.importKey('raw', stringToUint8Array(atob(rawKey)), 'AES-GCM', true, [
        'encrypt',
        'decrypt'
    ]);
    return __next_loaded_action_key;
}
function mergeClientReferenceManifests(clientReferenceManifestsPerPage) {
    const clientReferenceManifests = Object.values(clientReferenceManifestsPerPage);
    const mergedClientReferenceManifest = {
        clientModules: {},
        edgeRscModuleMapping: {},
        rscModuleMapping: {}
    };
    for (const clientReferenceManifest of clientReferenceManifests){
        mergedClientReferenceManifest.clientModules = {
            ...mergedClientReferenceManifest.clientModules,
            ...clientReferenceManifest.clientModules
        };
        mergedClientReferenceManifest.edgeRscModuleMapping = {
            ...mergedClientReferenceManifest.edgeRscModuleMapping,
            ...clientReferenceManifest.edgeRscModuleMapping
        };
        mergedClientReferenceManifest.rscModuleMapping = {
            ...mergedClientReferenceManifest.rscModuleMapping,
            ...clientReferenceManifest.rscModuleMapping
        };
    }
    return mergedClientReferenceManifest;
} //# sourceMappingURL=encryption-utils.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/shared/lib/router/utils/html-bots.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This regex contains the bots that we need to do a blocking render for and can't safely stream the response
// due to how they parse the DOM. For example, they might explicitly check for metadata in the `head` tag, so we can't stream metadata tags after the `head` was sent.
// Note: The pattern [\w-]+-Google captures all Google crawlers with "-Google" suffix (e.g., Mediapartners-Google, AdsBot-Google, Storebot-Google)
// as well as crawlers starting with "Google-" (e.g., Google-PageRenderer, Google-InspectionTool)
__turbopack_context__.s([
    "HTML_LIMITED_BOT_UA_RE",
    ()=>HTML_LIMITED_BOT_UA_RE
]);
const HTML_LIMITED_BOT_UA_RE = /[\w-]+-Google|Google-[\w-]+|Chrome-Lighthouse|Slurp|DuckDuckBot|baiduspider|yandex|sogou|bitlybot|tumblr|vkShare|quora link preview|redditbot|ia_archiver|Bingbot|BingPreview|applebot|facebookexternalhit|facebookcatalog|Twitterbot|LinkedInBot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|Yeti|googleweblight/i; //# sourceMappingURL=html-bots.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HTML_LIMITED_BOT_UA_RE_STRING",
    ()=>HTML_LIMITED_BOT_UA_RE_STRING,
    "getBotType",
    ()=>getBotType,
    "isBot",
    ()=>isBot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$html$2d$bots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/shared/lib/router/utils/html-bots.js [app-rsc] (ecmascript)");
;
// Bot crawler that will spin up a headless browser and execute JS.
// Only the main Googlebot search crawler executes JavaScript, not other Google crawlers.
// x-ref: https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
// This regex specifically matches "Googlebot" but NOT "Mediapartners-Google", "AdsBot-Google", etc.
const HEADLESS_BROWSER_BOT_UA_RE = /Googlebot(?!-)|Googlebot$/i;
const HTML_LIMITED_BOT_UA_RE_STRING = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$html$2d$bots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HTML_LIMITED_BOT_UA_RE"].source;
;
function isDomBotUA(userAgent) {
    return HEADLESS_BROWSER_BOT_UA_RE.test(userAgent);
}
function isHtmlLimitedBotUA(userAgent) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$html$2d$bots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HTML_LIMITED_BOT_UA_RE"].test(userAgent);
}
function isBot(userAgent) {
    return isDomBotUA(userAgent) || isHtmlLimitedBotUA(userAgent);
}
function getBotType(userAgent) {
    if (isDomBotUA(userAgent)) {
        return 'dom';
    }
    if (isHtmlLimitedBotUA(userAgent)) {
        return 'html';
    }
    return undefined;
} //# sourceMappingURL=is-bot.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/lib/streaming-metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isHtmlBotRequest",
    ()=>isHtmlBotRequest,
    "shouldServeStreamingMetadata",
    ()=>shouldServeStreamingMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript) <locals>");
;
function shouldServeStreamingMetadata(userAgent, htmlLimitedBots) {
    const blockingMetadataUARegex = new RegExp(htmlLimitedBots || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HTML_LIMITED_BOT_UA_RE_STRING"], 'i');
    // Only block metadata for HTML-limited bots
    if (userAgent && blockingMetadataUARegex.test(userAgent)) {
        return false;
    }
    return true;
}
function isHtmlBotRequest(req) {
    const ua = req.headers['user-agent'] || '';
    const botType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getBotType"])(ua);
    return botType === 'html';
} //# sourceMappingURL=streaming-metadata.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/app-render/action-utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createServerModuleMap",
    ()=>createServerModuleMap,
    "selectWorkerForForwarding",
    ()=>selectWorkerForForwarding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$path$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
;
;
;
;
function createServerModuleMap({ serverActionsManifest }) {
    return new Proxy({}, {
        get: (_, id)=>{
            var _serverActionsManifest__id, _serverActionsManifest_;
            const workers = (_serverActionsManifest_ = serverActionsManifest[("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'node']) == null ? void 0 : (_serverActionsManifest__id = _serverActionsManifest_[id]) == null ? void 0 : _serverActionsManifest__id.workers;
            if (!workers) {
                return undefined;
            }
            const workStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workAsyncStorage"].getStore();
            let workerEntry;
            if (workStore) {
                workerEntry = workers[normalizeWorkerPageName(workStore.page)];
            } else {
                // If there's no work store defined, we can assume that a server
                // module map is needed during module evaluation, e.g. to create a
                // server action using a higher-order function. Therefore it should be
                // safe to return any entry from the manifest that matches the action
                // ID. They all refer to the same module ID, which must also exist in
                // the current page bundle. TODO: This is currently not guaranteed in
                // Turbopack, and needs to be fixed.
                workerEntry = Object.values(workers).at(0);
            }
            if (!workerEntry) {
                return undefined;
            }
            const { moduleId, async } = workerEntry;
            return {
                id: moduleId,
                name: id,
                chunks: [],
                async
            };
        }
    });
}
function selectWorkerForForwarding(actionId, pageName, serverActionsManifest) {
    var _serverActionsManifest__actionId;
    const workers = (_serverActionsManifest__actionId = serverActionsManifest[("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'node'][actionId]) == null ? void 0 : _serverActionsManifest__actionId.workers;
    const workerName = normalizeWorkerPageName(pageName);
    // no workers, nothing to forward to
    if (!workers) return;
    // if there is a worker for this page, no need to forward it.
    if (workers[workerName]) {
        return;
    }
    // otherwise, grab the first worker that has a handler for this action id
    return denormalizeWorkerPageName(Object.keys(workers)[0]);
}
/**
 * The flight entry loader keys actions by bundlePath.
 * bundlePath corresponds with the relative path (including 'app') to the page entrypoint.
 */ function normalizeWorkerPageName(pageName) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pathHasPrefix"])(pageName, 'app')) {
        return pageName;
    }
    return 'app' + pageName;
}
/**
 * Converts a bundlePath (relative path to the entrypoint) to a routable page name
 */ function denormalizeWorkerPageName(bundlePath) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAppPath"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$path$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removePathPrefix"])(bundlePath, 'app'));
} //# sourceMappingURL=action-utils.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/lib/server-action-request-meta.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getIsPossibleServerAction",
    ()=>getIsPossibleServerAction,
    "getServerActionRequestMetadata",
    ()=>getServerActionRequestMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)");
;
function getServerActionRequestMetadata(req) {
    let actionId;
    let contentType;
    if (req.headers instanceof Headers) {
        actionId = req.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ACTION_HEADER"]) ?? null;
        contentType = req.headers.get('content-type');
    } else {
        actionId = req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ACTION_HEADER"]] ?? null;
        contentType = req.headers['content-type'] ?? null;
    }
    const isURLEncodedAction = Boolean(req.method === 'POST' && contentType === 'application/x-www-form-urlencoded');
    const isMultipartAction = Boolean(req.method === 'POST' && (contentType == null ? void 0 : contentType.startsWith('multipart/form-data')));
    const isFetchAction = Boolean(actionId !== undefined && typeof actionId === 'string' && req.method === 'POST');
    const isPossibleServerAction = Boolean(isFetchAction || isURLEncodedAction || isMultipartAction);
    return {
        actionId,
        isURLEncodedAction,
        isMultipartAction,
        isFetchAction,
        isPossibleServerAction
    };
}
function getIsPossibleServerAction(req) {
    return getServerActionRequestMetadata(req).isPossibleServerAction;
} //# sourceMappingURL=server-action-request-meta.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/lib/fallback.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Describes the different fallback modes that a given page can have.
 */ __turbopack_context__.s([
    "FallbackMode",
    ()=>FallbackMode,
    "fallbackModeToFallbackField",
    ()=>fallbackModeToFallbackField,
    "parseFallbackField",
    ()=>parseFallbackField,
    "parseStaticPathsResult",
    ()=>parseStaticPathsResult
]);
var FallbackMode = /*#__PURE__*/ function(FallbackMode) {
    /**
   * A BLOCKING_STATIC_RENDER fallback will block the request until the page is
   * generated. No fallback page will be rendered, and users will have to wait
   * to render the page.
   */ FallbackMode["BLOCKING_STATIC_RENDER"] = "BLOCKING_STATIC_RENDER";
    /**
   * When set to PRERENDER, a fallback page will be sent to users in place of
   * forcing them to wait for the page to be generated. This allows the user to
   * see a rendered page earlier.
   */ FallbackMode["PRERENDER"] = "PRERENDER";
    /**
   * When set to NOT_FOUND, pages that are not already prerendered will result
   * in a not found response.
   */ FallbackMode["NOT_FOUND"] = "NOT_FOUND";
    return FallbackMode;
}({});
function parseFallbackField(fallbackField) {
    if (typeof fallbackField === 'string') {
        return "PRERENDER";
    } else if (fallbackField === null) {
        return "BLOCKING_STATIC_RENDER";
    } else if (fallbackField === false) {
        return "NOT_FOUND";
    } else if (fallbackField === undefined) {
        return undefined;
    } else {
        throw Object.defineProperty(new Error(`Invalid fallback option: ${fallbackField}. Fallback option must be a string, null, undefined, or false.`), "__NEXT_ERROR_CODE", {
            value: "E285",
            enumerable: false,
            configurable: true
        });
    }
}
function fallbackModeToFallbackField(fallback, page) {
    switch(fallback){
        case "BLOCKING_STATIC_RENDER":
            return null;
        case "NOT_FOUND":
            return false;
        case "PRERENDER":
            if (!page) {
                throw Object.defineProperty(new Error(`Invariant: expected a page to be provided when fallback mode is "${fallback}"`), "__NEXT_ERROR_CODE", {
                    value: "E422",
                    enumerable: false,
                    configurable: true
                });
            }
            return page;
        default:
            throw Object.defineProperty(new Error(`Invalid fallback mode: ${fallback}`), "__NEXT_ERROR_CODE", {
                value: "E254",
                enumerable: false,
                configurable: true
            });
    }
}
function parseStaticPathsResult(result) {
    if (result === true) {
        return "PRERENDER";
    } else if (result === 'blocking') {
        return "BLOCKING_STATIC_RENDER";
    } else {
        return "NOT_FOUND";
    }
} //# sourceMappingURL=fallback.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/lib/etag.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * FNV-1a Hash implementation
 * @author Travis Webb (tjwebb) <me@traviswebb.com>
 *
 * Ported from https://github.com/tjwebb/fnv-plus/blob/master/index.js
 *
 * Simplified, optimized and add modified for 52 bit, which provides a larger hash space
 * and still making use of Javascript's 53-bit integer space.
 */ __turbopack_context__.s([
    "fnv1a52",
    ()=>fnv1a52,
    "generateETag",
    ()=>generateETag
]);
const fnv1a52 = (str)=>{
    const len = str.length;
    let i = 0, t0 = 0, v0 = 0x2325, t1 = 0, v1 = 0x8422, t2 = 0, v2 = 0x9ce4, t3 = 0, v3 = 0xcbf2;
    while(i < len){
        v0 ^= str.charCodeAt(i++);
        t0 = v0 * 435;
        t1 = v1 * 435;
        t2 = v2 * 435;
        t3 = v3 * 435;
        t2 += v0 << 8;
        t3 += v1 << 8;
        t1 += t0 >>> 16;
        v0 = t0 & 65535;
        t2 += t1 >>> 16;
        v1 = t1 & 65535;
        v3 = t3 + (t2 >>> 16) & 65535;
        v2 = t2 & 65535;
    }
    return (v3 & 15) * 281474976710656 + v2 * 4294967296 + v1 * 65536 + (v0 ^ v3 >> 4);
};
const generateETag = (payload, weak = false)=>{
    const prefix = weak ? 'W/"' : '"';
    return prefix + fnv1a52(payload).toString(36) + payload.length.toString(36) + '"';
}; //# sourceMappingURL=etag.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/fresh/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    var e = {
        695: (e)=>{
            /*!
 * fresh
 * Copyright(c) 2012 TJ Holowaychuk
 * Copyright(c) 2016-2017 Douglas Christopher Wilson
 * MIT Licensed
 */ var r = /(?:^|,)\s*?no-cache\s*?(?:,|$)/;
            e.exports = fresh;
            function fresh(e, a) {
                var t = e["if-modified-since"];
                var s = e["if-none-match"];
                if (!t && !s) {
                    return false;
                }
                var i = e["cache-control"];
                if (i && r.test(i)) {
                    return false;
                }
                if (s && s !== "*") {
                    var f = a["etag"];
                    if (!f) {
                        return false;
                    }
                    var n = true;
                    var u = parseTokenList(s);
                    for(var _ = 0; _ < u.length; _++){
                        var o = u[_];
                        if (o === f || o === "W/" + f || "W/" + o === f) {
                            n = false;
                            break;
                        }
                    }
                    if (n) {
                        return false;
                    }
                }
                if (t) {
                    var p = a["last-modified"];
                    var v = !p || !(parseHttpDate(p) <= parseHttpDate(t));
                    if (v) {
                        return false;
                    }
                }
                return true;
            }
            function parseHttpDate(e) {
                var r = e && Date.parse(e);
                return typeof r === "number" ? r : NaN;
            }
            function parseTokenList(e) {
                var r = 0;
                var a = [];
                var t = 0;
                for(var s = 0, i = e.length; s < i; s++){
                    switch(e.charCodeAt(s)){
                        case 32:
                            if (t === r) {
                                t = r = s + 1;
                            }
                            break;
                        case 44:
                            a.push(e.substring(t, r));
                            t = r = s + 1;
                            break;
                        default:
                            r = s + 1;
                            break;
                    }
                }
                a.push(e.substring(t, r));
                return a;
            }
        }
    };
    var r = {};
    function __nccwpck_require__(a) {
        var t = r[a];
        if (t !== undefined) {
            return t.exports;
        }
        var s = r[a] = {
            exports: {}
        };
        var i = true;
        try {
            e[a](s, s.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete r[a];
        }
        return s.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/fresh") + "/";
    var a = __nccwpck_require__(695);
    module.exports = a;
})();
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/lib/cache-control.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCacheControlHeader",
    ()=>getCacheControlHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
;
function getCacheControlHeader({ revalidate, expire }) {
    const swrHeader = typeof revalidate === 'number' && expire !== undefined && revalidate < expire ? `, stale-while-revalidate=${expire - revalidate}` : '';
    if (revalidate === 0) {
        return 'private, no-cache, no-store, max-age=0, must-revalidate';
    } else if (typeof revalidate === 'number') {
        return `s-maxage=${revalidate}${swrHeader}`;
    }
    return `s-maxage=${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CACHE_ONE_YEAR"]}${swrHeader}`;
} //# sourceMappingURL=cache-control.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/send-payload.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendEtagResponse",
    ()=>sendEtagResponse,
    "sendRenderResult",
    ()=>sendRenderResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/shared/lib/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$etag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/lib/etag.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$fresh$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/fresh/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$cache$2d$control$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/lib/cache-control.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
;
;
;
;
;
function sendEtagResponse(req, res, etag) {
    if (etag) {
        /**
     * The server generating a 304 response MUST generate any of the
     * following header fields that would have been sent in a 200 (OK)
     * response to the same request: Cache-Control, Content-Location, Date,
     * ETag, Expires, and Vary. https://tools.ietf.org/html/rfc7232#section-4.1
     */ res.setHeader('ETag', etag);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$fresh$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(req.headers, {
        etag
    })) {
        res.statusCode = 304;
        res.end();
        return true;
    }
    return false;
}
async function sendRenderResult({ req, res, result, generateEtags, poweredByHeader, cacheControl }) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isResSent"])(res)) {
        return;
    }
    if (poweredByHeader && result.contentType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HTML_CONTENT_TYPE_HEADER"]) {
        res.setHeader('X-Powered-By', 'Next.js');
    }
    // If cache control is already set on the response we don't
    // override it to allow users to customize it via next.config
    if (cacheControl && !res.getHeader('Cache-Control')) {
        res.setHeader('Cache-Control', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$cache$2d$control$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheControlHeader"])(cacheControl));
    }
    const payload = result.isDynamic ? null : result.toUnchunkedString();
    if (generateEtags && payload !== null) {
        const etag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$etag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateETag"])(payload);
        if (sendEtagResponse(req, res, etag)) {
            return;
        }
    }
    if (!res.getHeader('Content-Type') && result.contentType) {
        res.setHeader('Content-Type', result.contentType);
    }
    if (payload) {
        res.setHeader('Content-Length', Buffer.byteLength(payload));
    }
    if (req.method === 'HEAD') {
        res.end(null);
        return;
    }
    if (payload !== null) {
        res.end(payload);
        return;
    }
    // Pipe the render result to the response after we get a writer for it.
    await result.pipeToNodeResponse(res);
} //# sourceMappingURL=send-payload.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility) <locals>", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript) <locals>"));}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript)"));}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { GLOBAL_ERROR_MODULE => \"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", METADATA_0 => \"[project]/apps/web/app/favicon.ico.mjs { IMAGE => \\\"[project]/apps/web/app/favicon.ico (static in ecmascript)\\\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)\", MODULE_1 => \"[project]/apps/web/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_2 => \"[project]/apps/web/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_3 => \"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_4 => \"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_5 => \"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_6 => \"[project]/apps/web/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)\" } [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__next_app__",
    ()=>__next_app__,
    "handler",
    ()=>handler,
    "pages",
    ()=>pages,
    "routeModule",
    ()=>routeModule,
    "tree",
    ()=>tree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29$__ = __turbopack_context__.i('[project]/apps/web/app/favicon.ico.mjs { IMAGE => "[project]/apps/web/app/favicon.ico (static in ecmascript)" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__ = __turbopack_context__.i("[project]/apps/web/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__ = __turbopack_context__.i("[project]/apps/web/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__ = __turbopack_context__.i("[project]/apps/web/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$instrumentation$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/instrumentation/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/request-meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$interop$2d$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/app-render/interop-default.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$strip$2d$flight$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/app-render/strip-flight-headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/base-http/node.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$experimental$2f$ppr$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/lib/experimental/ppr.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/request/fallback-params.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$encryption$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/app-render/encryption-utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$streaming$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/lib/streaming-metadata.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$action$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/app-render/action-utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$server$2d$action$2d$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/lib/server-action-request-meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/response-cache/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/response-cache/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/lib/fallback.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/render-result.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/stream-utils/encoded-tags.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/send-payload.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/client/components/redirect-status-code.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = [
    "",
    {
        "children": [
            "__PAGE__",
            {},
            {
                metadata: {},
                "page": [
                    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__,
                    "[project]/apps/web/app/page.tsx"
                ]
            }
        ]
    },
    {
        metadata: {
            icon: [
                async (props)=>[
                        {
                            url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["fillMetadataSegment"])("//", await props.params, "favicon.ico") + `?${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29$__["default"].src.split("/").splice(-1)[0]}`,
                            sizes: `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29$__["default"].width}x${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29$__["default"].height}`,
                            type: `image/x-icon`
                        }
                    ]
            ]
        },
        "layout": [
            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__,
            "[project]/apps/web/app/layout.tsx"
        ],
        "not-found": [
            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__,
            "[project]/apps/web/app/not-found.tsx"
        ],
        "forbidden": [
            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__,
            "[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/builtin/forbidden.js"
        ],
        "unauthorized": [
            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__,
            "[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/builtin/unauthorized.js"
        ],
        "global-error": [
            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__,
            "[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/builtin/global-error.js"
        ]
    }
];
const pages = [
    "[project]/apps/web/app/page.tsx"
];
;
;
;
const __next_app_require__ = __turbopack_context__.r.bind(__turbopack_context__);
const __next_app_load_chunk__ = __turbopack_context__.l.bind(__turbopack_context__);
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};
;
;
;
const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppPageRouteModule"]({
    definition: {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: '',
        filename: '',
        appPaths: []
    },
    userland: {
        loaderTree: tree
    },
    distDir: ("TURBOPACK compile-time value", ".next") || '',
    relativeProjectDir: ("TURBOPACK compile-time value", "") || ''
});
async function handler(req, res, ctx) {
    var _this;
    let srcPage = "/page";
    // turbopack doesn't normalize `/index` in the page name
    // so we need to to process dynamic routes properly
    // TODO: fix turbopack providing differing value from webpack
    if ("TURBOPACK compile-time truthy", 1) {
        srcPage = srcPage.replace(/\/index$/, '') || '/';
    } else if (srcPage === '/index') {
        // we always normalize /index specifically
        srcPage = '/';
    }
    const multiZoneDraftMode = ("TURBOPACK compile-time value", false);
    const initialPostponed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'postponed');
    // TODO: replace with more specific flags
    const minimalMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'minimalMode');
    const prepareResult = await routeModule.prepare(req, res, {
        srcPage,
        multiZoneDraftMode
    });
    if (!prepareResult) {
        res.statusCode = 400;
        res.end('Bad Request');
        ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());
        return null;
    }
    const { buildId, query, params, parsedUrl, pageIsDynamic, buildManifest, nextFontManifest, reactLoadableManifest, serverActionsManifest, clientReferenceManifest, subresourceIntegrityManifest, prerenderManifest, isDraftMode, resolvedPathname, revalidateOnlyGenerated, routerServerContext, nextConfig, interceptionRoutePatterns } = prepareResult;
    const pathname = parsedUrl.pathname || '/';
    const normalizedSrcPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAppPath"])(srcPage);
    let { isOnDemandRevalidate } = prepareResult;
    const prerenderInfo = routeModule.match(pathname, prerenderManifest);
    const isPrerendered = !!prerenderManifest.routes[resolvedPathname];
    let isSSG = Boolean(prerenderInfo || isPrerendered || prerenderManifest.routes[normalizedSrcPage]);
    const userAgent = req.headers['user-agent'] || '';
    const botType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getBotType"])(userAgent);
    const isHtmlBot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$streaming$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHtmlBotRequest"])(req);
    /**
   * If true, this indicates that the request being made is for an app
   * prefetch request.
   */ const isPrefetchRSCRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'isPrefetchRSCRequest') ?? req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_ROUTER_PREFETCH_HEADER"]] === '1' // exclude runtime prefetches, which use '2'
    ;
    // NOTE: Don't delete headers[RSC] yet, it still needs to be used in renderToHTML later
    const isRSCRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'isRSCRequest') ?? Boolean(req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RSC_HEADER"]]);
    const isPossibleServerAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$server$2d$action$2d$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIsPossibleServerAction"])(req);
    /**
   * If the route being rendered is an app page, and the ppr feature has been
   * enabled, then the given route _could_ support PPR.
   */ const couldSupportPPR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$experimental$2f$ppr$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkIsAppPPREnabled"])(nextConfig.experimental.ppr);
    // When enabled, this will allow the use of the `?__nextppronly` query to
    // enable debugging of the static shell.
    const hasDebugStaticShellQuery = ("TURBOPACK compile-time value", false) === '1' && typeof query.__nextppronly !== 'undefined' && couldSupportPPR;
    // When enabled, this will allow the use of the `?__nextppronly` query
    // to enable debugging of the fallback shell.
    const hasDebugFallbackShellQuery = hasDebugStaticShellQuery && query.__nextppronly === 'fallback';
    // This page supports PPR if it is marked as being `PARTIALLY_STATIC` in the
    // prerender manifest and this is an app page.
    const isRoutePPREnabled = couldSupportPPR && (((_this = prerenderManifest.routes[normalizedSrcPage] ?? prerenderManifest.dynamicRoutes[normalizedSrcPage]) == null ? void 0 : _this.renderingMode) === 'PARTIALLY_STATIC' || // Ideally we'd want to check the appConfig to see if this page has PPR
    // enabled or not, but that would require plumbing the appConfig through
    // to the server during development. We assume that the page supports it
    // but only during development.
    hasDebugStaticShellQuery && (routeModule.isDev === true || (routerServerContext == null ? void 0 : routerServerContext.experimentalTestProxy) === true));
    const isDebugStaticShell = hasDebugStaticShellQuery && isRoutePPREnabled;
    // We should enable debugging dynamic accesses when the static shell
    // debugging has been enabled and we're also in development mode.
    const isDebugDynamicAccesses = isDebugStaticShell && routeModule.isDev === true;
    const isDebugFallbackShell = hasDebugFallbackShellQuery && isRoutePPREnabled;
    // If we're in minimal mode, then try to get the postponed information from
    // the request metadata. If available, use it for resuming the postponed
    // render.
    const minimalPostponed = isRoutePPREnabled ? initialPostponed : undefined;
    // If PPR is enabled, and this is a RSC request (but not a prefetch), then
    // we can use this fact to only generate the flight data for the request
    // because we can't cache the HTML (as it's also dynamic).
    const isDynamicRSCRequest = isRoutePPREnabled && isRSCRequest && !isPrefetchRSCRequest;
    // Need to read this before it's stripped by stripFlightHeaders. We don't
    // need to transfer it to the request meta because it's only read
    // within this function; the static segment data should have already been
    // generated, so we will always either return a static response or a 404.
    const segmentPrefetchHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'segmentPrefetchRSCRequest');
    // TODO: investigate existing bug with shouldServeStreamingMetadata always
    // being true for a revalidate due to modifying the base-server this.renderOpts
    // when fixing this to correct logic it causes hydration issue since we set
    // serveStreamingMetadata to true during export
    let serveStreamingMetadata = !userAgent ? true : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$streaming$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["shouldServeStreamingMetadata"])(userAgent, nextConfig.htmlLimitedBots);
    if (isHtmlBot && isRoutePPREnabled) {
        isSSG = false;
        serveStreamingMetadata = false;
    }
    // In development, we always want to generate dynamic HTML.
    let supportsDynamicResponse = // a data request, in which case we only produce static HTML.
    routeModule.isDev === true || // If this is not SSG or does not have static paths, then it supports
    // dynamic HTML.
    !isSSG || // If this request has provided postponed data, it supports dynamic
    // HTML.
    typeof initialPostponed === 'string' || // If this is a dynamic RSC request, then this render supports dynamic
    // HTML (it's dynamic).
    isDynamicRSCRequest;
    // When html bots request PPR page, perform the full dynamic rendering.
    const shouldWaitOnAllReady = isHtmlBot && isRoutePPREnabled;
    let ssgCacheKey = null;
    if (!isDraftMode && isSSG && !supportsDynamicResponse && !isPossibleServerAction && !minimalPostponed && !isDynamicRSCRequest) {
        ssgCacheKey = resolvedPathname;
    }
    // the staticPathKey differs from ssgCacheKey since
    // ssgCacheKey is null in dev since we're always in "dynamic"
    // mode in dev to bypass the cache, but we still need to honor
    // dynamicParams = false in dev mode
    let staticPathKey = ssgCacheKey;
    if (!staticPathKey && routeModule.isDev) {
        staticPathKey = resolvedPathname;
    }
    // If this is a request for an app path that should be statically generated
    // and we aren't in the edge runtime, strip the flight headers so it will
    // generate the static response.
    if (!routeModule.isDev && !isDraftMode && isSSG && isRSCRequest && !isDynamicRSCRequest) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$strip$2d$flight$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripFlightHeaders"])(req.headers);
    }
    const ComponentMod = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__,
        tree,
        pages,
        GlobalError: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__["default"],
        handler,
        routeModule,
        __next_app__
    };
    // Before rendering (which initializes component tree modules), we have to
    // set the reference manifests to our global store so Server Action's
    // encryption util can access to them at the top level of the page module.
    if (serverActionsManifest && clientReferenceManifest) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$encryption$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setReferenceManifestsSingleton"])({
            page: srcPage,
            clientReferenceManifest,
            serverActionsManifest,
            serverModuleMap: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$action$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerModuleMap"])({
                serverActionsManifest
            })
        });
    }
    const method = req.method || 'GET';
    const tracer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTracer"])();
    const activeSpan = tracer.getActiveScopeSpan();
    try {
        const varyHeader = routeModule.getVaryHeader(resolvedPathname, interceptionRoutePatterns);
        res.setHeader('Vary', varyHeader);
        const invokeRouteModule = async (span, context)=>{
            const nextReq = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeNextRequest"](req);
            const nextRes = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeNextResponse"](res);
            // TODO: adapt for putting the RDC inside the postponed data
            // If we're in dev, and this isn't a prefetch or a server action,
            // we should seed the resume data cache.
            if ("TURBOPACK compile-time truthy", 1) {
                if (nextConfig.experimental.cacheComponents && !isPrefetchRSCRequest && !context.renderOpts.isPossibleServerAction) {
                    const warmup = await routeModule.warmup(nextReq, nextRes, context);
                    // If the warmup is successful, we should use the resume data
                    // cache from the warmup.
                    if (warmup.metadata.renderResumeDataCache) {
                        context.renderOpts.renderResumeDataCache = warmup.metadata.renderResumeDataCache;
                    }
                }
            }
            return routeModule.render(nextReq, nextRes, context).finally(()=>{
                if (!span) return;
                span.setAttributes({
                    'http.status_code': res.statusCode,
                    'next.rsc': false
                });
                const rootSpanAttributes = tracer.getRootSpanAttributes();
                // We were unable to get attributes, probably OTEL is not enabled
                if (!rootSpanAttributes) {
                    return;
                }
                if (rootSpanAttributes.get('next.span_type') !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseServerSpan"].handleRequest) {
                    console.warn(`Unexpected root span type '${rootSpanAttributes.get('next.span_type')}'. Please report this Next.js issue https://github.com/vercel/next.js`);
                    return;
                }
                const route = rootSpanAttributes.get('next.route');
                if (route) {
                    const name = `${method} ${route}`;
                    span.setAttributes({
                        'next.route': route,
                        'http.route': route,
                        'next.span_name': name
                    });
                    span.updateName(name);
                } else {
                    span.updateName(`${method} ${req.url}`);
                }
            });
        };
        const doRender = async ({ span, postponed, fallbackRouteParams })=>{
            const context = {
                query,
                params,
                page: normalizedSrcPage,
                sharedContext: {
                    buildId
                },
                serverComponentsHmrCache: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'serverComponentsHmrCache'),
                fallbackRouteParams,
                renderOpts: {
                    App: ()=>null,
                    Document: ()=>null,
                    pageConfig: {},
                    ComponentMod,
                    Component: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$interop$2d$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["interopDefault"])(ComponentMod),
                    params,
                    routeModule,
                    page: srcPage,
                    postponed,
                    shouldWaitOnAllReady,
                    serveStreamingMetadata,
                    supportsDynamicResponse: typeof postponed === 'string' || supportsDynamicResponse,
                    buildManifest,
                    nextFontManifest,
                    reactLoadableManifest,
                    subresourceIntegrityManifest,
                    serverActionsManifest,
                    clientReferenceManifest,
                    setIsrStatus: routerServerContext == null ? void 0 : routerServerContext.setIsrStatus,
                    dir: ("TURBOPACK compile-time truthy", 1) ? require('path').join(/* turbopackIgnore: true */ process.cwd(), routeModule.relativeProjectDir) : "TURBOPACK unreachable",
                    isDraftMode,
                    isRevalidate: isSSG && !postponed && !isDynamicRSCRequest,
                    botType,
                    isOnDemandRevalidate,
                    isPossibleServerAction,
                    assetPrefix: nextConfig.assetPrefix,
                    nextConfigOutput: nextConfig.output,
                    crossOrigin: nextConfig.crossOrigin,
                    trailingSlash: nextConfig.trailingSlash,
                    previewProps: prerenderManifest.preview,
                    deploymentId: nextConfig.deploymentId,
                    enableTainting: nextConfig.experimental.taint,
                    htmlLimitedBots: nextConfig.htmlLimitedBots,
                    devtoolSegmentExplorer: nextConfig.experimental.devtoolSegmentExplorer,
                    reactMaxHeadersLength: nextConfig.reactMaxHeadersLength,
                    multiZoneDraftMode,
                    incrementalCache: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'incrementalCache'),
                    cacheLifeProfiles: nextConfig.experimental.cacheLife,
                    basePath: nextConfig.basePath,
                    serverActions: nextConfig.experimental.serverActions,
                    ...isDebugStaticShell || isDebugDynamicAccesses ? {
                        nextExport: true,
                        supportsDynamicResponse: false,
                        isStaticGeneration: true,
                        isRevalidate: true,
                        isDebugDynamicAccesses: isDebugDynamicAccesses
                    } : {},
                    experimental: {
                        isRoutePPREnabled,
                        expireTime: nextConfig.expireTime,
                        staleTimes: nextConfig.experimental.staleTimes,
                        cacheComponents: Boolean(nextConfig.experimental.cacheComponents),
                        clientSegmentCache: Boolean(nextConfig.experimental.clientSegmentCache),
                        clientParamParsing: Boolean(nextConfig.experimental.clientParamParsing),
                        dynamicOnHover: Boolean(nextConfig.experimental.dynamicOnHover),
                        inlineCss: Boolean(nextConfig.experimental.inlineCss),
                        authInterrupts: Boolean(nextConfig.experimental.authInterrupts),
                        clientTraceMetadata: nextConfig.experimental.clientTraceMetadata || []
                    },
                    waitUntil: ctx.waitUntil,
                    onClose: (cb)=>{
                        res.on('close', cb);
                    },
                    onAfterTaskError: ()=>{},
                    onInstrumentationRequestError: (error, _request, errorContext)=>routeModule.onRequestError(req, error, errorContext, routerServerContext),
                    err: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'invokeError'),
                    dev: routeModule.isDev
                }
            };
            const result = await invokeRouteModule(span, context);
            const { metadata } = result;
            const { cacheControl, headers = {}, fetchTags: cacheTags } = metadata;
            if (cacheTags) {
                headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"]] = cacheTags;
            }
            // Pull any fetch metrics from the render onto the request.
            ;
            req.fetchMetrics = metadata.fetchMetrics;
            // we don't throw static to dynamic errors in dev as isSSG
            // is a best guess in dev since we don't have the prerender pass
            // to know whether the path is actually static or not
            if (isSSG && (cacheControl == null ? void 0 : cacheControl.revalidate) === 0 && !routeModule.isDev && !isRoutePPREnabled) {
                const staticBailoutInfo = metadata.staticBailoutInfo;
                const err = Object.defineProperty(new Error(`Page changed from static to dynamic at runtime ${resolvedPathname}${(staticBailoutInfo == null ? void 0 : staticBailoutInfo.description) ? `, reason: ${staticBailoutInfo.description}` : ``}` + `\nsee more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`), "__NEXT_ERROR_CODE", {
                    value: "E132",
                    enumerable: false,
                    configurable: true
                });
                if (staticBailoutInfo == null ? void 0 : staticBailoutInfo.stack) {
                    const stack = staticBailoutInfo.stack;
                    err.stack = err.message + stack.substring(stack.indexOf('\n'));
                }
                throw err;
            }
            return {
                value: {
                    kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE,
                    html: result,
                    headers,
                    rscData: metadata.flightData,
                    postponed: metadata.postponed,
                    status: metadata.statusCode,
                    segmentData: metadata.segmentData
                },
                cacheControl
            };
        };
        const responseGenerator = async ({ hasResolved, previousCacheEntry, isRevalidating, span })=>{
            const isProduction = routeModule.isDev === false;
            const didRespond = hasResolved || res.writableEnded;
            // skip on-demand revalidate if cache is not present and
            // revalidate-if-generated is set
            if (isOnDemandRevalidate && revalidateOnlyGenerated && !previousCacheEntry && !minimalMode) {
                if (routerServerContext == null ? void 0 : routerServerContext.render404) {
                    await routerServerContext.render404(req, res);
                } else {
                    res.statusCode = 404;
                    res.end('This page could not be found');
                }
                return null;
            }
            let fallbackMode;
            if (prerenderInfo) {
                fallbackMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseFallbackField"])(prerenderInfo.fallback);
            }
            // When serving a HTML bot request, we want to serve a blocking render and
            // not the prerendered page. This ensures that the correct content is served
            // to the bot in the head.
            if (fallbackMode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].PRERENDER && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isBot"])(userAgent)) {
                if (!isRoutePPREnabled || isHtmlBot) {
                    fallbackMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].BLOCKING_STATIC_RENDER;
                }
            }
            if ((previousCacheEntry == null ? void 0 : previousCacheEntry.isStale) === -1) {
                isOnDemandRevalidate = true;
            }
            // TODO: adapt for PPR
            // only allow on-demand revalidate for fallback: true/blocking
            // or for prerendered fallback: false paths
            if (isOnDemandRevalidate && (fallbackMode !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].NOT_FOUND || previousCacheEntry)) {
                fallbackMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].BLOCKING_STATIC_RENDER;
            }
            if (!minimalMode && fallbackMode !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].BLOCKING_STATIC_RENDER && staticPathKey && !didRespond && !isDraftMode && pageIsDynamic && (isProduction || !isPrerendered)) {
                // if the page has dynamicParams: false and this pathname wasn't
                // prerendered trigger the no fallback handling
                if (// getStaticPaths.
                (isProduction || prerenderInfo) && // When fallback isn't present, abort this render so we 404
                fallbackMode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].NOT_FOUND) {
                    throw new __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__["NoFallbackError"]();
                }
                let fallbackResponse;
                if (isRoutePPREnabled && !isRSCRequest) {
                    const cacheKey = typeof (prerenderInfo == null ? void 0 : prerenderInfo.fallback) === 'string' ? prerenderInfo.fallback : isProduction ? normalizedSrcPage : null;
                    // We use the response cache here to handle the revalidation and
                    // management of the fallback shell.
                    fallbackResponse = await routeModule.handleResponse({
                        cacheKey,
                        req,
                        nextConfig,
                        routeKind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
                        isFallback: true,
                        prerenderManifest,
                        isRoutePPREnabled,
                        responseGenerator: async ()=>doRender({
                                span,
                                // We pass `undefined` as rendering a fallback isn't resumed
                                // here.
                                postponed: undefined,
                                fallbackRouteParams: // shell then we should postpone when dynamic params are
                                // accessed.
                                isProduction || isDebugFallbackShell ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFallbackRouteParams"])(normalizedSrcPage) : null
                            }),
                        waitUntil: ctx.waitUntil
                    });
                    // If the fallback response was set to null, then we should return null.
                    if (fallbackResponse === null) return null;
                    // Otherwise, if we did get a fallback response, we should return it.
                    if (fallbackResponse) {
                        // Remove the cache control from the response to prevent it from being
                        // used in the surrounding cache.
                        delete fallbackResponse.cacheControl;
                        return fallbackResponse;
                    }
                }
            }
            // Only requests that aren't revalidating can be resumed. If we have the
            // minimal postponed data, then we should resume the render with it.
            const postponed = !isOnDemandRevalidate && !isRevalidating && minimalPostponed ? minimalPostponed : undefined;
            // When we're in minimal mode, if we're trying to debug the static shell,
            // we should just return nothing instead of resuming the dynamic render.
            if ((isDebugStaticShell || isDebugDynamicAccesses) && typeof postponed !== 'undefined') {
                return {
                    cacheControl: {
                        revalidate: 1,
                        expire: undefined
                    },
                    value: {
                        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].PAGES,
                        html: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].EMPTY,
                        pageData: {},
                        headers: undefined,
                        status: undefined
                    }
                };
            }
            // If this is a dynamic route with PPR enabled and the default route
            // matches were set, then we should pass the fallback route params to
            // the renderer as this is a fallback revalidation request.
            const fallbackRouteParams = pageIsDynamic && isRoutePPREnabled && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'renderFallbackShell') || isDebugFallbackShell) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFallbackRouteParams"])(pathname) : null;
            // Perform the render.
            return doRender({
                span,
                postponed,
                fallbackRouteParams
            });
        };
        const handleResponse = async (span)=>{
            var _cacheEntry_value, _cachedData_headers;
            const cacheEntry = await routeModule.handleResponse({
                cacheKey: ssgCacheKey,
                responseGenerator: (c)=>responseGenerator({
                        span,
                        ...c
                    }),
                routeKind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
                isOnDemandRevalidate,
                isRoutePPREnabled,
                req,
                nextConfig,
                prerenderManifest,
                waitUntil: ctx.waitUntil
            });
            if (isDraftMode) {
                res.setHeader('Cache-Control', 'private, no-cache, no-store, max-age=0, must-revalidate');
            }
            // In dev, we should not cache pages for any reason.
            if (routeModule.isDev) {
                res.setHeader('Cache-Control', 'no-store, must-revalidate');
            }
            if (!cacheEntry) {
                if (ssgCacheKey) {
                    // A cache entry might not be generated if a response is written
                    // in `getInitialProps` or `getServerSideProps`, but those shouldn't
                    // have a cache key. If we do have a cache key but we don't end up
                    // with a cache entry, then either Next.js or the application has a
                    // bug that needs fixing.
                    throw Object.defineProperty(new Error('invariant: cache entry required but not generated'), "__NEXT_ERROR_CODE", {
                        value: "E62",
                        enumerable: false,
                        configurable: true
                    });
                }
                return null;
            }
            if (((_cacheEntry_value = cacheEntry.value) == null ? void 0 : _cacheEntry_value.kind) !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE) {
                var _cacheEntry_value1;
                throw Object.defineProperty(new Error(`Invariant app-page handler received invalid cache entry ${(_cacheEntry_value1 = cacheEntry.value) == null ? void 0 : _cacheEntry_value1.kind}`), "__NEXT_ERROR_CODE", {
                    value: "E707",
                    enumerable: false,
                    configurable: true
                });
            }
            const didPostpone = typeof cacheEntry.value.postponed === 'string';
            if (isSSG && // We don't want to send a cache header for requests that contain dynamic
            // data. If this is a Dynamic RSC request or wasn't a Prefetch RSC
            // request, then we should set the cache header.
            !isDynamicRSCRequest && (!didPostpone || isPrefetchRSCRequest)) {
                if (!minimalMode) {
                    // set x-nextjs-cache header to match the header
                    // we set for the image-optimizer
                    res.setHeader('x-nextjs-cache', isOnDemandRevalidate ? 'REVALIDATED' : cacheEntry.isMiss ? 'MISS' : cacheEntry.isStale ? 'STALE' : 'HIT');
                }
                // Set a header used by the client router to signal the response is static
                // and should respect the `static` cache staleTime value.
                res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_IS_PRERENDER_HEADER"], '1');
            }
            const { value: cachedData } = cacheEntry;
            // Coerce the cache control parameter from the render.
            let cacheControl;
            // If this is a resume request in minimal mode it is streamed with dynamic
            // content and should not be cached.
            if (minimalPostponed) {
                cacheControl = {
                    revalidate: 0,
                    expire: undefined
                };
            } else if (minimalMode && isRSCRequest && !isPrefetchRSCRequest && isRoutePPREnabled) {
                cacheControl = {
                    revalidate: 0,
                    expire: undefined
                };
            } else if (!routeModule.isDev) {
                // If this is a preview mode request, we shouldn't cache it
                if (isDraftMode) {
                    cacheControl = {
                        revalidate: 0,
                        expire: undefined
                    };
                } else if (!isSSG) {
                    if (!res.getHeader('Cache-Control')) {
                        cacheControl = {
                            revalidate: 0,
                            expire: undefined
                        };
                    }
                } else if (cacheEntry.cacheControl) {
                    // If the cache entry has a cache control with a revalidate value that's
                    // a number, use it.
                    if (typeof cacheEntry.cacheControl.revalidate === 'number') {
                        var _cacheEntry_cacheControl;
                        if (cacheEntry.cacheControl.revalidate < 1) {
                            throw Object.defineProperty(new Error(`Invalid revalidate configuration provided: ${cacheEntry.cacheControl.revalidate} < 1`), "__NEXT_ERROR_CODE", {
                                value: "E22",
                                enumerable: false,
                                configurable: true
                            });
                        }
                        cacheControl = {
                            revalidate: cacheEntry.cacheControl.revalidate,
                            expire: ((_cacheEntry_cacheControl = cacheEntry.cacheControl) == null ? void 0 : _cacheEntry_cacheControl.expire) ?? nextConfig.expireTime
                        };
                    } else {
                        cacheControl = {
                            revalidate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CACHE_ONE_YEAR"],
                            expire: undefined
                        };
                    }
                }
            }
            cacheEntry.cacheControl = cacheControl;
            if (typeof segmentPrefetchHeader === 'string' && (cachedData == null ? void 0 : cachedData.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE && cachedData.segmentData) {
                var _cachedData_headers1;
                // This is a prefetch request issued by the client Segment Cache. These
                // should never reach the application layer (lambda). We should either
                // respond from the cache (HIT) or respond with 204 No Content (MISS).
                // Set a header to indicate that PPR is enabled for this route. This
                // lets the client distinguish between a regular cache miss and a cache
                // miss due to PPR being disabled. In other contexts this header is used
                // to indicate that the response contains dynamic data, but here we're
                // only using it to indicate that the feature is enabled — the segment
                // response itself contains whether the data is dynamic.
                res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_DID_POSTPONE_HEADER"], '2');
                // Add the cache tags header to the response if it exists and we're in
                // minimal mode while rendering a static page.
                const tags = (_cachedData_headers1 = cachedData.headers) == null ? void 0 : _cachedData_headers1[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"]];
                if (minimalMode && isSSG && tags && typeof tags === 'string') {
                    res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"], tags);
                }
                const matchedSegment = cachedData.segmentData.get(segmentPrefetchHeader);
                if (matchedSegment !== undefined) {
                    // Cache hit
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                        req,
                        res,
                        generateEtags: nextConfig.generateEtags,
                        poweredByHeader: nextConfig.poweredByHeader,
                        result: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].fromStatic(matchedSegment, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RSC_CONTENT_TYPE_HEADER"]),
                        cacheControl: cacheEntry.cacheControl
                    });
                }
                // Cache miss. Either a cache entry for this route has not been generated
                // (which technically should not be possible when PPR is enabled, because
                // at a minimum there should always be a fallback entry) or there's no
                // match for the requested segment. Respond with a 204 No Content. We
                // don't bother to respond with 404, because these requests are only
                // issued as part of a prefetch.
                res.statusCode = 204;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].EMPTY,
                    cacheControl: cacheEntry.cacheControl
                });
            }
            // If there's a callback for `onCacheEntry`, call it with the cache entry
            // and the revalidate options.
            const onCacheEntry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'onCacheEntry');
            if (onCacheEntry) {
                const finished = await onCacheEntry({
                    ...cacheEntry,
                    // TODO: remove this when upstream doesn't
                    // always expect this value to be "PAGE"
                    value: {
                        ...cacheEntry.value,
                        kind: 'PAGE'
                    }
                }, {
                    url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'initURL')
                });
                if (finished) {
                    // TODO: maybe we have to end the request?
                    return null;
                }
            }
            // If the request has a postponed state and it's a resume request we
            // should error.
            if (didPostpone && minimalPostponed) {
                throw Object.defineProperty(new Error('Invariant: postponed state should not be present on a resume request'), "__NEXT_ERROR_CODE", {
                    value: "E396",
                    enumerable: false,
                    configurable: true
                });
            }
            if (cachedData.headers) {
                const headers = {
                    ...cachedData.headers
                };
                if (!minimalMode || !isSSG) {
                    delete headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"]];
                }
                for (let [key, value] of Object.entries(headers)){
                    if (typeof value === 'undefined') continue;
                    if (Array.isArray(value)) {
                        for (const v of value){
                            res.appendHeader(key, v);
                        }
                    } else if (typeof value === 'number') {
                        value = value.toString();
                        res.appendHeader(key, value);
                    } else {
                        res.appendHeader(key, value);
                    }
                }
            }
            // Add the cache tags header to the response if it exists and we're in
            // minimal mode while rendering a static page.
            const tags = (_cachedData_headers = cachedData.headers) == null ? void 0 : _cachedData_headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"]];
            if (minimalMode && isSSG && tags && typeof tags === 'string') {
                res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"], tags);
            }
            // If the request is a data request, then we shouldn't set the status code
            // from the response because it should always be 200. This should be gated
            // behind the experimental PPR flag.
            if (cachedData.status && (!isRSCRequest || !isRoutePPREnabled)) {
                res.statusCode = cachedData.status;
            }
            // Redirect information is encoded in RSC payload, so we don't need to use redirect status codes
            if (!minimalMode && cachedData.status && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RedirectStatusCode"][cachedData.status] && isRSCRequest) {
                res.statusCode = 200;
            }
            // Mark that the request did postpone.
            if (didPostpone) {
                res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_DID_POSTPONE_HEADER"], '1');
            }
            // we don't go through this block when preview mode is true
            // as preview mode is a dynamic request (bypasses cache) and doesn't
            // generate both HTML and payloads in the same request so continue to just
            // return the generated payload
            if (isRSCRequest && !isDraftMode) {
                // If this is a dynamic RSC request, then stream the response.
                if (typeof cachedData.rscData === 'undefined') {
                    if (cachedData.postponed) {
                        throw Object.defineProperty(new Error('Invariant: Expected postponed to be undefined'), "__NEXT_ERROR_CODE", {
                            value: "E372",
                            enumerable: false,
                            configurable: true
                        });
                    }
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                        req,
                        res,
                        generateEtags: nextConfig.generateEtags,
                        poweredByHeader: nextConfig.poweredByHeader,
                        result: cachedData.html,
                        // Dynamic RSC responses cannot be cached, even if they're
                        // configured with `force-static` because we have no way of
                        // distinguishing between `force-static` and pages that have no
                        // postponed state.
                        // TODO: distinguish `force-static` from pages with no postponed state (static)
                        cacheControl: isDynamicRSCRequest ? {
                            revalidate: 0,
                            expire: undefined
                        } : cacheEntry.cacheControl
                    });
                }
                // As this isn't a prefetch request, we should serve the static flight
                // data.
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].fromStatic(cachedData.rscData, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RSC_CONTENT_TYPE_HEADER"]),
                    cacheControl: cacheEntry.cacheControl
                });
            }
            // This is a request for HTML data.
            let body = cachedData.html;
            // If there's no postponed state, we should just serve the HTML. This
            // should also be the case for a resume request because it's completed
            // as a server render (rather than a static render).
            if (!didPostpone || minimalMode || isRSCRequest) {
                // If we're in test mode, we should add a sentinel chunk to the response
                // that's between the static and dynamic parts so we can compare the
                // chunks and add assertions.
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result: body,
                    cacheControl: cacheEntry.cacheControl
                });
            }
            // If we're debugging the static shell or the dynamic API accesses, we
            // should just serve the HTML without resuming the render. The returned
            // HTML will be the static shell so all the Dynamic API's will be used
            // during static generation.
            if (isDebugStaticShell || isDebugDynamicAccesses) {
                // Since we're not resuming the render, we need to at least add the
                // closing body and html tags to create valid HTML.
                body.push(new ReadableStream({
                    start (controller) {
                        controller.enqueue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML);
                        controller.close();
                    }
                }));
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result: body,
                    cacheControl: {
                        revalidate: 0,
                        expire: undefined
                    }
                });
            }
            // If we're in test mode, we should add a sentinel chunk to the response
            // that's between the static and dynamic parts so we can compare the
            // chunks and add assertions.
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // This request has postponed, so let's create a new transformer that the
            // dynamic data can pipe to that will attach the dynamic data to the end
            // of the response.
            const transformer = new TransformStream();
            body.push(transformer.readable);
            // Perform the render again, but this time, provide the postponed state.
            // We don't await because we want the result to start streaming now, and
            // we've already chained the transformer's readable to the render result.
            doRender({
                span,
                postponed: cachedData.postponed,
                // This is a resume render, not a fallback render, so we don't need to
                // set this.
                fallbackRouteParams: null
            }).then(async (result)=>{
                var _result_value;
                if (!result) {
                    throw Object.defineProperty(new Error('Invariant: expected a result to be returned'), "__NEXT_ERROR_CODE", {
                        value: "E463",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (((_result_value = result.value) == null ? void 0 : _result_value.kind) !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE) {
                    var _result_value1;
                    throw Object.defineProperty(new Error(`Invariant: expected a page response, got ${(_result_value1 = result.value) == null ? void 0 : _result_value1.kind}`), "__NEXT_ERROR_CODE", {
                        value: "E305",
                        enumerable: false,
                        configurable: true
                    });
                }
                // Pipe the resume result to the transformer.
                await result.value.html.pipeTo(transformer.writable);
            }).catch((err)=>{
                // An error occurred during piping or preparing the render, abort
                // the transformers writer so we can terminate the stream.
                transformer.writable.abort(err).catch((e)=>{
                    console.error("couldn't abort transformer", e);
                });
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                req,
                res,
                generateEtags: nextConfig.generateEtags,
                poweredByHeader: nextConfig.poweredByHeader,
                result: body,
                // We don't want to cache the response if it has postponed data because
                // the response being sent to the client it's dynamic parts are streamed
                // to the client on the same request.
                cacheControl: {
                    revalidate: 0,
                    expire: undefined
                }
            });
        };
        // TODO: activeSpan code path is for when wrapped by
        // next-server can be removed when this is no longer used
        if (activeSpan) {
            await handleResponse(activeSpan);
        } else {
            return await tracer.withPropagatedContext(req.headers, ()=>tracer.trace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseServerSpan"].handleRequest, {
                    spanName: `${method} ${req.url}`,
                    kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SpanKind"].SERVER,
                    attributes: {
                        'http.method': method,
                        'http.target': req.url
                    }
                }, handleResponse));
        }
    } catch (err) {
        if (!(err instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__["NoFallbackError"])) {
            await routeModule.onRequestError(req, err, {
                routerKind: 'App Router',
                routePath: srcPage,
                routeType: 'render',
                revalidateReason: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$instrumentation$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRevalidateReason"])({
                    isRevalidate: isSSG,
                    isOnDemandRevalidate
                })
            }, routerServerContext);
        }
        // rethrow so that we can handle serving error page
        throw err;
    }
}
// TODO: omit this from production builds, only test builds should include it
/**
 * Creates a readable stream that emits a PPR boundary sentinel.
 *
 * @returns A readable stream that emits a PPR boundary sentinel.
 */ function createPPRBoundarySentinel() {
    return new ReadableStream({
        start (controller) {
            controller.enqueue(new TextEncoder().encode('<!-- PPR_BOUNDARY_SENTINEL -->'));
            controller.close();
        }
    });
} //# sourceMappingURL=app-page.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { GLOBAL_ERROR_MODULE => \"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", METADATA_0 => \"[project]/apps/web/app/favicon.ico.mjs { IMAGE => \\\"[project]/apps/web/app/favicon.ico (static in ecmascript)\\\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)\", MODULE_1 => \"[project]/apps/web/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_2 => \"[project]/apps/web/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_3 => \"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_4 => \"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_5 => \"[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_6 => \"[project]/apps/web/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)\" } [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientPageRoot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ClientPageRoot"],
    "ClientSegmentRoot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ClientSegmentRoot"],
    "GlobalError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__["default"],
    "HTTPAccessFallbackBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["HTTPAccessFallbackBoundary"],
    "LayoutRouter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["LayoutRouter"],
    "MetadataBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["MetadataBoundary"],
    "OutletBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["OutletBoundary"],
    "Postpone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["Postpone"],
    "RenderFromTemplateContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RenderFromTemplateContext"],
    "RootLayoutBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RootLayoutBoundary"],
    "SegmentViewNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["SegmentViewNode"],
    "SegmentViewStateNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["SegmentViewStateNode"],
    "ViewportBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ViewportBoundary"],
    "__next_app__",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__METADATA_0__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$apps$2f$web$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["__next_app__"],
    "actionAsyncStorage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["actionAsyncStorage"],
    "captureOwnerStack",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["captureOwnerStack"],
    "collectSegmentData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["collectSegmentData"],
    "createMetadataComponents",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createMetadataComponents"],
    "createPrerenderParamsForClientSegment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createPrerenderParamsForClientSegment"],
    "createPrerenderSearchParamsForClientPage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createPrerenderSearchParamsForClientPage"],
    "createServerParamsForServerSegment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createServerParamsForServerSegment"],
    "createServerSearchParamsForServerPage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createServerSearchParamsForServerPage"],
    "createTemporaryReferenceSet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createTemporaryReferenceSet"],
    "decodeAction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeAction"],
    "decodeFormState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeFormState"],
    "decodeReply",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeReply"],
    "handler",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__METADATA_0__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$apps$2f$web$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["handler"],
    "pages",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__METADATA_0__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$apps$2f$web$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["pages"],
    "patchFetch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["patchFetch"],
    "preconnect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preconnect"],
    "preloadFont",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preloadFont"],
    "preloadStyle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preloadStyle"],
    "prerender",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["prerender"],
    "renderToReadableStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["renderToReadableStream"],
    "routeModule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__METADATA_0__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$apps$2f$web$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["routeModule"],
    "serverHooks",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["serverHooks"],
    "taintObjectReference",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["taintObjectReference"],
    "tree",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__METADATA_0__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$apps$2f$web$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tree"],
    "workAsyncStorage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["workAsyncStorage"],
    "workUnitAsyncStorage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["workUnitAsyncStorage"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__METADATA_0__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$apps$2f$web$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { GLOBAL_ERROR_MODULE => "[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", METADATA_0 => "[project]/apps/web/app/favicon.ico.mjs { IMAGE => \\"[project]/apps/web/app/favicon.ico (static in ecmascript)\\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", MODULE_1 => "[project]/apps/web/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", MODULE_2 => "[project]/apps/web/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", MODULE_3 => "[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_4 => "[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_5 => "[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_6 => "[project]/apps/web/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)" } [app-rsc] (ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)");
}),
];

//# sourceMappingURL=_6a172516._.js.map