(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/error-Dl9xmUf3.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/errors/createErrorTypeGuard.ts
/**
* Creates a type guard function for any error class.
* The returned function can be called as a standalone function or as a method on an error object.
*
* @example
* ```typescript
* class MyError extends Error {}
* const isMyError = createErrorTypeGuard(MyError);
*
* // As a standalone function
* if (isMyError(error)) { ... }
*
* // As a method (when attached to error object)
* if (error.isMyError()) { ... }
* ```
*/ __turbopack_context__.s([
    "ClerkAPIError",
    ()=>ClerkAPIError,
    "ClerkAPIResponseError",
    ()=>ClerkAPIResponseError,
    "ClerkError",
    ()=>ClerkError,
    "ClerkRuntimeError",
    ()=>ClerkRuntimeError,
    "ClerkWebAuthnError",
    ()=>ClerkWebAuthnError,
    "EmailLinkError",
    ()=>EmailLinkError,
    "EmailLinkErrorCode",
    ()=>EmailLinkErrorCode,
    "EmailLinkErrorCodeStatus",
    ()=>EmailLinkErrorCodeStatus,
    "MissingExpiredTokenError",
    ()=>MissingExpiredTokenError,
    "buildErrorThrower",
    ()=>buildErrorThrower,
    "createClerkGlobalHookError",
    ()=>createClerkGlobalHookError,
    "errorToJSON",
    ()=>errorToJSON,
    "is4xxError",
    ()=>is4xxError,
    "isCaptchaError",
    ()=>isCaptchaError,
    "isClerkAPIError",
    ()=>isClerkAPIError,
    "isClerkAPIResponseError",
    ()=>isClerkAPIResponseError,
    "isClerkError",
    ()=>isClerkError,
    "isClerkRuntimeError",
    ()=>isClerkRuntimeError,
    "isEmailLinkError",
    ()=>isEmailLinkError,
    "isKnownError",
    ()=>isKnownError,
    "isMetamaskError",
    ()=>isMetamaskError,
    "isNetworkError",
    ()=>isNetworkError,
    "isPasswordCompromisedError",
    ()=>isPasswordCompromisedError,
    "isPasswordPwnedError",
    ()=>isPasswordPwnedError,
    "isReverificationCancelledError",
    ()=>isReverificationCancelledError,
    "isUnauthorizedError",
    ()=>isUnauthorizedError,
    "isUserLockedError",
    ()=>isUserLockedError,
    "parseError",
    ()=>parseError,
    "parseErrors",
    ()=>parseErrors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
;
var _class, _ClerkError, _ClerkAPIResponseError, _MissingExpiredTokenError, _ClerkRuntimeError;
function createErrorTypeGuard(ErrorClass) {
    function typeGuard(error) {
        const target = error !== null && error !== void 0 ? error : this;
        if (!target) throw new TypeError("".concat(ErrorClass.kind || ErrorClass.name, " type guard requires an error object"));
        if (ErrorClass.kind && typeof target === "object" && target !== null && "constructor" in target) {
            var _target_constructor;
            if (((_target_constructor = target.constructor) === null || _target_constructor === void 0 ? void 0 : _target_constructor.kind) === ErrorClass.kind) return true;
        }
        return target instanceof ErrorClass;
    }
    return typeGuard;
}
//#endregion
//#region src/errors/clerkApiError.ts
/**
* This error contains the specific error message, code, and any additional metadata that was returned by the Clerk API.
*/ var ClerkAPIError = (_class = class {
    constructor(json){
        var _json_meta, _json_meta1, _json_meta2, _json_meta3, _json_meta4, _json_meta5, _json_meta6;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "code", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "message", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "longMessage", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "meta", void 0);
        const parsedError = {
            code: json.code,
            message: json.message,
            longMessage: json.long_message,
            meta: {
                paramName: (_json_meta = json.meta) === null || _json_meta === void 0 ? void 0 : _json_meta.param_name,
                sessionId: (_json_meta1 = json.meta) === null || _json_meta1 === void 0 ? void 0 : _json_meta1.session_id,
                emailAddresses: (_json_meta2 = json.meta) === null || _json_meta2 === void 0 ? void 0 : _json_meta2.email_addresses,
                identifiers: (_json_meta3 = json.meta) === null || _json_meta3 === void 0 ? void 0 : _json_meta3.identifiers,
                zxcvbn: (_json_meta4 = json.meta) === null || _json_meta4 === void 0 ? void 0 : _json_meta4.zxcvbn,
                plan: (_json_meta5 = json.meta) === null || _json_meta5 === void 0 ? void 0 : _json_meta5.plan,
                isPlanUpgradePossible: (_json_meta6 = json.meta) === null || _json_meta6 === void 0 ? void 0 : _json_meta6.is_plan_upgrade_possible
            }
        };
        this.code = parsedError.code;
        this.message = parsedError.message;
        this.longMessage = parsedError.longMessage;
        this.meta = parsedError.meta;
    }
}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_class, "kind", "ClerkApiError"), _class);
/**
* Type guard to check if a value is a ClerkAPIError instance.
*/ const isClerkAPIError = createErrorTypeGuard(ClerkAPIError);
//#endregion
//#region src/errors/parseError.ts
/**
* Parses an array of ClerkAPIErrorJSON objects into an array of ClerkAPIError objects.
*
* @internal
*/ function parseErrors() {
    let data = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return data.length > 0 ? data.map((e)=>new ClerkAPIError(e)) : [];
}
/**
* Parses a ClerkAPIErrorJSON object into a ClerkAPIError object.
*
* @deprecated Use `ClerkAPIError` class instead
*
* @internal
*/ function parseError(error) {
    return new ClerkAPIError(error);
}
/**
* Converts a ClerkAPIError object into a ClerkAPIErrorJSON object.
*
* @internal
*/ function errorToJSON(error) {
    var _error_meta, _error_meta1, _error_meta2, _error_meta3, _error_meta4, _error_meta5, _error_meta6;
    return {
        code: (error === null || error === void 0 ? void 0 : error.code) || "",
        message: (error === null || error === void 0 ? void 0 : error.message) || "",
        long_message: error === null || error === void 0 ? void 0 : error.longMessage,
        meta: {
            param_name: error === null || error === void 0 ? void 0 : (_error_meta = error.meta) === null || _error_meta === void 0 ? void 0 : _error_meta.paramName,
            session_id: error === null || error === void 0 ? void 0 : (_error_meta1 = error.meta) === null || _error_meta1 === void 0 ? void 0 : _error_meta1.sessionId,
            email_addresses: error === null || error === void 0 ? void 0 : (_error_meta2 = error.meta) === null || _error_meta2 === void 0 ? void 0 : _error_meta2.emailAddresses,
            identifiers: error === null || error === void 0 ? void 0 : (_error_meta3 = error.meta) === null || _error_meta3 === void 0 ? void 0 : _error_meta3.identifiers,
            zxcvbn: error === null || error === void 0 ? void 0 : (_error_meta4 = error.meta) === null || _error_meta4 === void 0 ? void 0 : _error_meta4.zxcvbn,
            plan: error === null || error === void 0 ? void 0 : (_error_meta5 = error.meta) === null || _error_meta5 === void 0 ? void 0 : _error_meta5.plan,
            is_plan_upgrade_possible: error === null || error === void 0 ? void 0 : (_error_meta6 = error.meta) === null || _error_meta6 === void 0 ? void 0 : _error_meta6.isPlanUpgradePossible
        }
    };
}
//#endregion
//#region src/errors/clerkError.ts
var ClerkError = (_ClerkError = class ClerkError extends Error {
    get name() {
        return this.constructor.name;
    }
    toString() {
        return "[".concat(this.name, "]\nMessage:").concat(this.message);
    }
    static formatMessage(name, msg, code, docsUrl) {
        const prefix = "Clerk:";
        const regex = new RegExp(prefix.replace(" ", "\\s*"), "i");
        msg = msg.replace(regex, "");
        msg = "".concat(prefix, " ").concat(msg.trim(), '\n\n(code="').concat(code, '")\n\n');
        if (docsUrl) msg += "\n\nDocs: ".concat(docsUrl);
        return msg;
    }
    constructor(opts){
        super(new.target.formatMessage(new.target.kind, opts.message, opts.code, opts.docsUrl), {
            cause: opts.cause
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "clerkError", true), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "code", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "longMessage", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "docsUrl", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "cause", void 0);
        Object.setPrototypeOf(this, ClerkError.prototype);
        this.code = opts.code;
        this.docsUrl = opts.docsUrl;
        this.longMessage = opts.longMessage;
        this.cause = opts.cause;
    }
}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ClerkError, "kind", "ClerkError"), _ClerkError);
/**
* Type guard to check if a value is a ClerkError instance.
*/ function isClerkError(val) {
    return createErrorTypeGuard(ClerkError)(val) || !!val && typeof val === "object" && "clerkError" in val && val.clerkError === true;
}
//#endregion
//#region src/errors/clerkApiResponseError.ts
var ClerkAPIResponseError = (_ClerkAPIResponseError = class ClerkAPIResponseError extends ClerkError {
    toString() {
        let message = "[".concat(this.name, "]\nMessage:").concat(this.message, "\nStatus:").concat(this.status, "\nSerialized errors: ").concat(this.errors.map((e)=>JSON.stringify(e)));
        if (this.clerkTraceId) message += "\nClerk Trace ID: ".concat(this.clerkTraceId);
        return message;
    }
    static formatMessage(name, msg, _, __) {
        return msg;
    }
    constructor(message, options){
        const { data: errorsJson, status, clerkTraceId, retryAfter } = options;
        super({
            ...options,
            message,
            code: "api_response_error"
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "status", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "clerkTraceId", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "retryAfter", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "errors", void 0);
        Object.setPrototypeOf(this, ClerkAPIResponseError.prototype);
        this.status = status;
        this.clerkTraceId = clerkTraceId;
        this.retryAfter = retryAfter;
        this.errors = (errorsJson || []).map((e)=>new ClerkAPIError(e));
    }
}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ClerkAPIResponseError, "kind", "ClerkAPIResponseError"), _ClerkAPIResponseError);
/**
* Type guard to check if an error is a ClerkAPIResponseError.
* Can be called as a standalone function or as a method on an error object.
*
* @example
* // As a standalone function
* if (isClerkAPIResponseError(error)) { ... }
*
* // As a method (when attached to error object)
* if (error.isClerkAPIResponseError()) { ... }
*/ const isClerkAPIResponseError = createErrorTypeGuard(ClerkAPIResponseError);
//#endregion
//#region src/errors/missingExpiredTokenError.ts
/**
* Error class representing a missing expired token error from the API.
* This error occurs when the server requires an expired token to mint a new session token.
*
* Use the static `is` method to check if a ClerkAPIResponseError matches this error type.
*
* @example
* ```typescript
* if (MissingExpiredTokenError.is(error)) {
*   // Handle the missing expired token error
* }
* ```
*/ var MissingExpiredTokenError = (_MissingExpiredTokenError = class MissingExpiredTokenError extends ClerkAPIResponseError {
    /**
	* Type guard to check if an error is a MissingExpiredTokenError.
	* This checks the error's properties (status and error code) rather than instanceof,
	* allowing it to work with ClerkAPIResponseError instances thrown from the API layer.
	*
	* @example
	* ```typescript
	* try {
	*   await someApiCall();
	* } catch (e) {
	*   if (MissingExpiredTokenError.is(e)) {
	*     // e is typed as ClerkAPIResponseError with the specific error properties
	*   }
	* }
	* ```
	*/ static is(err) {
        return isClerkAPIResponseError(err) && err.status === MissingExpiredTokenError.STATUS && err.errors.length > 0 && err.errors[0].code === MissingExpiredTokenError.ERROR_CODE;
    }
}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_MissingExpiredTokenError, "kind", "MissingExpiredTokenError"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_MissingExpiredTokenError, "ERROR_CODE", "missing_expired_token"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_MissingExpiredTokenError, "STATUS", 422), _MissingExpiredTokenError);
//#endregion
//#region src/errors/errorThrower.ts
const DefaultMessages = Object.freeze({
    InvalidProxyUrlErrorMessage: "The proxyUrl passed to Clerk is invalid. The expected value for proxyUrl is an absolute URL or a relative path with a leading '/'. (key={{url}})",
    InvalidPublishableKeyErrorMessage: "The publishableKey passed to Clerk is invalid. You can get your Publishable key at https://dashboard.clerk.com/last-active?path=api-keys. (key={{key}})",
    MissingPublishableKeyErrorMessage: "Missing publishableKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.",
    MissingSecretKeyErrorMessage: "Missing secretKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.",
    MissingClerkProvider: "{{source}} can only be used within the <ClerkProvider /> component. Learn more: https://clerk.com/docs/components/clerk-provider"
});
/**
* Builds an error thrower.
*
* @internal
*/ function buildErrorThrower(param) {
    let { packageName, customMessages } = param;
    let pkg = packageName;
    /**
	* Builds a message from a raw message and replacements.
	*
	* @internal
	*/ function buildMessage(rawMessage, replacements) {
        if (!replacements) return "".concat(pkg, ": ").concat(rawMessage);
        let msg = rawMessage;
        const matches = rawMessage.matchAll(/{{([a-zA-Z0-9-_]+)}}/g);
        for (const match of matches){
            const replacement = (replacements[match[1]] || "").toString();
            msg = msg.replace("{{".concat(match[1], "}}"), replacement);
        }
        return "".concat(pkg, ": ").concat(msg);
    }
    const messages = {
        ...DefaultMessages,
        ...customMessages
    };
    return {
        setPackageName (param) {
            let { packageName: packageName$1 } = param;
            if (typeof packageName$1 === "string") pkg = packageName$1;
            return this;
        },
        setMessages (param) {
            let { customMessages: customMessages$1 } = param;
            Object.assign(messages, customMessages$1 || {});
            return this;
        },
        throwInvalidPublishableKeyError (params) {
            throw new Error(buildMessage(messages.InvalidPublishableKeyErrorMessage, params));
        },
        throwInvalidProxyUrl (params) {
            throw new Error(buildMessage(messages.InvalidProxyUrlErrorMessage, params));
        },
        throwMissingPublishableKeyError () {
            throw new Error(buildMessage(messages.MissingPublishableKeyErrorMessage));
        },
        throwMissingSecretKeyError () {
            throw new Error(buildMessage(messages.MissingSecretKeyErrorMessage));
        },
        throwMissingClerkProviderError (params) {
            throw new Error(buildMessage(messages.MissingClerkProvider, params));
        },
        throw (message) {
            throw new Error(buildMessage(message));
        }
    };
}
//#endregion
//#region src/errors/emailLinkError.ts
var EmailLinkError = class EmailLinkError extends Error {
    constructor(code){
        super(code), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "code", void 0);
        this.code = code;
        this.name = "EmailLinkError";
        Object.setPrototypeOf(this, EmailLinkError.prototype);
    }
};
/**
* @deprecated Use `EmailLinkErrorCodeStatus` instead.
*
* @internal
*/ const EmailLinkErrorCode = {
    Expired: "expired",
    Failed: "failed",
    ClientMismatch: "client_mismatch"
};
const EmailLinkErrorCodeStatus = {
    Expired: "expired",
    Failed: "failed",
    ClientMismatch: "client_mismatch"
};
//#endregion
//#region src/errors/clerkRuntimeError.ts
/**
* Custom error class for representing Clerk runtime errors.
*
* @class ClerkRuntimeError
*
* @example
*   throw new ClerkRuntimeError('An error occurred', { code: 'password_invalid' });
*/ var ClerkRuntimeError = (_ClerkRuntimeError = class ClerkRuntimeError extends ClerkError {
    constructor(message, options){
        super({
            ...options,
            message
        }), /**
	* @deprecated Use `clerkError` property instead. This property is maintained for backward compatibility.
	*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "clerkRuntimeError", true);
        Object.setPrototypeOf(this, ClerkRuntimeError.prototype);
    }
}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ClerkRuntimeError, "kind", "ClerkRuntimeError"), _ClerkRuntimeError);
/**
* Type guard to check if an error is a ClerkRuntimeError.
* Can be called as a standalone function or as a method on an error object.
*
* @example
* // As a standalone function
* if (isClerkRuntimeError(error)) { ... }
*
* // As a method (when attached to error object)
* if (error.isClerkRuntimeError()) { ... }
*/ const isClerkRuntimeError = createErrorTypeGuard(ClerkRuntimeError);
//#endregion
//#region src/errors/webAuthNError.ts
var ClerkWebAuthnError = class extends ClerkRuntimeError {
    constructor(message, { code }){
        super(message, {
            code
        }), /**
	* A unique code identifying the error, can be used for localization.
	*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "code", void 0);
        this.code = code;
    }
};
//#endregion
//#region src/errors/helpers.ts
/**
* Checks if the provided error object is an unauthorized error.
*
* @internal
*
* @deprecated This is no longer used, and will be removed in the next major version.
*/ function isUnauthorizedError(e) {
    var _e_errors_, _e_errors;
    const status = e === null || e === void 0 ? void 0 : e.status;
    return (e === null || e === void 0 ? void 0 : (_e_errors = e.errors) === null || _e_errors === void 0 ? void 0 : (_e_errors_ = _e_errors[0]) === null || _e_errors_ === void 0 ? void 0 : _e_errors_.code) === "authentication_invalid" && status === 401;
}
/**
* Checks if the provided error object is a captcha error.
*
* @internal
*/ function isCaptchaError(e) {
    return [
        "captcha_invalid",
        "captcha_not_enabled",
        "captcha_missing_token"
    ].includes(e.errors[0].code);
}
/**
* Checks if the provided error is a 4xx error.
*
* @internal
*/ function is4xxError(e) {
    const status = e === null || e === void 0 ? void 0 : e.status;
    return !!status && status >= 400 && status < 500;
}
/**
* Checks if the provided error is a network error.
*
* @internal
*/ function isNetworkError(e) {
    return ("".concat(e.message).concat(e.name) || "").toLowerCase().replace(/\s+/g, "").includes("networkerror");
}
/**
* Checks if the provided error is either a ClerkAPIResponseError, a ClerkRuntimeError, or a MetamaskError.
*
* @internal
*/ function isKnownError(error) {
    return isClerkAPIResponseError(error) || isMetamaskError(error) || isClerkRuntimeError(error);
}
/**
* Checks if the provided error is a Clerk runtime error indicating a reverification was cancelled.
*
* @internal
*/ function isReverificationCancelledError(err) {
    return isClerkRuntimeError(err) && err.code === "reverification_cancelled";
}
/**
* Checks if the provided error is a Metamask error.
*
* @internal
*/ function isMetamaskError(err) {
    return "code" in err && [
        4001,
        32602,
        32603
    ].includes(err.code) && "message" in err;
}
/**
* Checks if the provided error is clerk api response error indicating a user is locked.
*
* @internal
*/ function isUserLockedError(err) {
    var _err_errors_, _err_errors;
    return isClerkAPIResponseError(err) && ((_err_errors = err.errors) === null || _err_errors === void 0 ? void 0 : (_err_errors_ = _err_errors[0]) === null || _err_errors_ === void 0 ? void 0 : _err_errors_.code) === "user_locked";
}
/**
* Checks if the provided error is a clerk api response error indicating a password was pwned.
*
* @internal
*/ function isPasswordPwnedError(err) {
    var _err_errors_, _err_errors;
    return isClerkAPIResponseError(err) && ((_err_errors = err.errors) === null || _err_errors === void 0 ? void 0 : (_err_errors_ = _err_errors[0]) === null || _err_errors_ === void 0 ? void 0 : _err_errors_.code) === "form_password_pwned";
}
/**
* Checks if the provided error is a clerk api response error indicating a password was compromised.
*
* @internal
*/ function isPasswordCompromisedError(err) {
    var _err_errors_, _err_errors;
    return isClerkAPIResponseError(err) && ((_err_errors = err.errors) === null || _err_errors === void 0 ? void 0 : (_err_errors_ = _err_errors[0]) === null || _err_errors_ === void 0 ? void 0 : _err_errors_.code) === "form_password_compromised";
}
/**
* Checks if the provided error is an EmailLinkError.
*
* @internal
*/ function isEmailLinkError(err) {
    return err.name === "EmailLinkError";
}
//#endregion
//#region src/errors/globalHookError.ts
/**
* Creates a ClerkGlobalHookError object from a ClerkError instance.
* It's a wrapper for all the different instances of Clerk errors that can
* be returned when using Clerk hooks.
*/ function createClerkGlobalHookError(error) {
    const predicates = {
        isClerkAPIResponseError,
        isClerkRuntimeError
    };
    for (const [name, fn] of Object.entries(predicates))Object.assign(error, {
        [name]: fn
    });
    return error;
}
;
 //# sourceMappingURL=error-Dl9xmUf3.mjs.map
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/error.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$error$2d$Dl9xmUf3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/error-Dl9xmUf3.mjs [app-client] (ecmascript)");
;
;
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/authorization-CV9xGlIX.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/authorization.ts
__turbopack_context__.s([
    "createCheckAuthorization",
    ()=>createCheckAuthorization,
    "resolveAuthState",
    ()=>resolveAuthState,
    "splitByScope",
    ()=>splitByScope,
    "validateReverificationConfig",
    ()=>validateReverificationConfig
]);
const TYPES_TO_OBJECTS = {
    strict_mfa: {
        afterMinutes: 10,
        level: "multi_factor"
    },
    strict: {
        afterMinutes: 10,
        level: "second_factor"
    },
    moderate: {
        afterMinutes: 60,
        level: "second_factor"
    },
    lax: {
        afterMinutes: 1440,
        level: "second_factor"
    }
};
const ALLOWED_LEVELS = new Set([
    "first_factor",
    "second_factor",
    "multi_factor"
]);
const ALLOWED_TYPES = new Set([
    "strict_mfa",
    "strict",
    "moderate",
    "lax"
]);
const isValidMaxAge = (maxAge)=>typeof maxAge === "number" && maxAge > 0;
const isValidLevel = (level)=>ALLOWED_LEVELS.has(level);
const isValidVerificationType = (type)=>ALLOWED_TYPES.has(type);
const isValidFactorAge = (x)=>typeof x === "number" && Number.isFinite(x) && (x === -1 || x >= 0);
const prefixWithOrg = (value)=>value.replace(/^(org:)*/, "org:");
/**
* Checks if a user has the required organization-level authorization.
* If both role and permission are provided, both must match (AND).
*/ const checkOrgAuthorization = (params, options)=>{
    const { orgId, orgRole, orgPermissions } = options;
    const roleAsked = params.role !== void 0;
    const permissionAsked = params.permission !== void 0;
    if (!roleAsked && !permissionAsked) return "skip";
    if (roleAsked && typeof params.role !== "string") return "fail";
    if (permissionAsked && typeof params.permission !== "string") return "fail";
    if (!orgId) return "fail";
    if (roleAsked) {
        if (typeof orgRole !== "string" || !orgRole) return "fail";
        if (prefixWithOrg(orgRole) !== prefixWithOrg(params.role)) return "fail";
    }
    if (permissionAsked) {
        if (!Array.isArray(orgPermissions)) return "fail";
        if (!orgPermissions.includes(prefixWithOrg(params.permission))) return "fail";
    }
    return "pass";
};
const checkForFeatureOrPlan = (claim, featureOrPlan)=>{
    const { org: orgFeatures, user: userFeatures } = splitByScope(claim);
    const [scope, _id] = featureOrPlan.split(":");
    const id = _id || scope;
    if (scope === "org") return orgFeatures.includes(id);
    else if (scope === "user") return userFeatures.includes(id);
    else return [
        ...orgFeatures,
        ...userFeatures
    ].includes(id);
};
/**
* Checks if a user is entitled to the requested feature or plan.
* If both feature and plan are provided, both must match (AND).
*/ const checkBillingAuthorization = (params, options)=>{
    const { features, plans } = options;
    const featureAsked = params.feature !== void 0;
    const planAsked = params.plan !== void 0;
    if (!featureAsked && !planAsked) return "skip";
    if (featureAsked && typeof params.feature !== "string") return "fail";
    if (planAsked && typeof params.plan !== "string") return "fail";
    if (featureAsked) {
        if (typeof features !== "string" || !features) return "fail";
        try {
            if (!checkForFeatureOrPlan(features, params.feature)) return "fail";
        } catch (e) {
            return "fail";
        }
    }
    if (planAsked) {
        if (typeof plans !== "string" || !plans) return "fail";
        try {
            if (!checkForFeatureOrPlan(plans, params.plan)) return "fail";
        } catch (e) {
            return "fail";
        }
    }
    return "pass";
};
const splitByScope = (fea)=>{
    const features = fea ? fea.split(",").map((f)=>f.trim()) : [];
    return {
        org: features.filter((f)=>f.split(":")[0].includes("o")).map((f)=>f.split(":")[1]),
        user: features.filter((f)=>f.split(":")[0].includes("u")).map((f)=>f.split(":")[1])
    };
};
const validateReverificationConfig = (config)=>{
    if (!config) return false;
    const convertConfigToObject = (config$1)=>{
        if (typeof config$1 === "string") return TYPES_TO_OBJECTS[config$1];
        return config$1;
    };
    const isValidStringValue = typeof config === "string" && isValidVerificationType(config);
    const isValidObjectValue = typeof config === "object" && isValidLevel(config.level) && isValidMaxAge(config.afterMinutes);
    if (isValidStringValue || isValidObjectValue) return convertConfigToObject.bind(null, config);
    return false;
};
/**
* Evaluates if the user meets re-verification authentication requirements.
* Handles different verification levels (first factor, second factor, multi-factor).
*/ const checkReverificationAuthorization = (params, param)=>{
    let { factorVerificationAge } = param;
    if (params.reverification === void 0) return "skip";
    if (!factorVerificationAge) return "fail";
    if (!Array.isArray(factorVerificationAge) || factorVerificationAge.length !== 2 || !isValidFactorAge(factorVerificationAge[0]) || !isValidFactorAge(factorVerificationAge[1])) return "fail";
    const getConfig = validateReverificationConfig(params.reverification);
    if (!getConfig) return "fail";
    const { level, afterMinutes } = getConfig();
    const [factor1Age, factor2Age] = factorVerificationAge;
    if (factor1Age === -1 && factor2Age === -1) return "fail";
    const factor1FreshEnough = factor1Age !== -1 && afterMinutes > factor1Age;
    const factor2FreshEnough = factor2Age !== -1 && afterMinutes > factor2Age;
    switch(level){
        case "first_factor":
            return factor1FreshEnough ? "pass" : "fail";
        case "second_factor":
            if (factor2Age === -1) return factor1FreshEnough ? "pass" : "fail";
            if (factor1Age === -1) return factor2FreshEnough ? "pass" : "fail";
            return factor2FreshEnough ? "pass" : "fail";
        case "multi_factor":
            if (factor2Age === -1) return factor1FreshEnough ? "pass" : "fail";
            if (factor1Age === -1) return "fail";
            return factor1FreshEnough && factor2FreshEnough ? "pass" : "fail";
    }
};
const combine = (results)=>results.some((r)=>r === "pass") && results.every((r)=>r === "pass" || r === "skip");
/**
* Creates a function for comprehensive user authorization checks.
* Combines organization, billing, and reverification checks. The returned function
* authorizes only when every requested dimension passes; any requested dimension
* that cannot be satisfied (including missing or malformed session data) denies
* the request. Fails if `userId` is missing.
*/ const createCheckAuthorization = (options)=>{
    return (params)=>{
        if (!options.userId) return false;
        return combine([
            checkOrgAuthorization(params, options),
            checkBillingAuthorization(params, options),
            checkReverificationAuthorization(params, options)
        ]);
    };
};
/**
* Shared utility function that centralizes auth state resolution logic,
* preventing duplication across different packages.
* @internal
*/ const resolveAuthState = (param)=>{
    let { authObject: { sessionId, sessionStatus, userId, actor, orgId, orgRole, orgSlug, signOut, getToken, has, sessionClaims }, options: { treatPendingAsSignedOut = true } } = param;
    if (sessionId === void 0 && userId === void 0) return {
        isLoaded: false,
        isSignedIn: void 0,
        sessionId,
        sessionClaims: void 0,
        userId,
        actor: void 0,
        orgId: void 0,
        orgRole: void 0,
        orgSlug: void 0,
        has: void 0,
        signOut,
        getToken
    };
    if (sessionId === null && userId === null) return {
        isLoaded: true,
        isSignedIn: false,
        sessionId,
        userId,
        sessionClaims: null,
        actor: null,
        orgId: null,
        orgRole: null,
        orgSlug: null,
        has: ()=>false,
        signOut,
        getToken
    };
    if (treatPendingAsSignedOut && sessionStatus === "pending") return {
        isLoaded: true,
        isSignedIn: false,
        sessionId: null,
        userId: null,
        sessionClaims: null,
        actor: null,
        orgId: null,
        orgRole: null,
        orgSlug: null,
        has: ()=>false,
        signOut,
        getToken
    };
    if (!!sessionId && !!sessionClaims && !!userId && !!orgId && !!orgRole) return {
        isLoaded: true,
        isSignedIn: true,
        sessionId,
        sessionClaims,
        userId,
        actor: actor || null,
        orgId,
        orgRole,
        orgSlug: orgSlug || null,
        has,
        signOut,
        getToken
    };
    if (!!sessionId && !!sessionClaims && !!userId && !orgId) return {
        isLoaded: true,
        isSignedIn: true,
        sessionId,
        sessionClaims,
        userId,
        actor: actor || null,
        orgId: null,
        orgRole: null,
        orgSlug: null,
        has,
        signOut,
        getToken
    };
};
;
 //# sourceMappingURL=authorization-CV9xGlIX.mjs.map
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/authorization.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$authorization$2d$CV9xGlIX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/authorization-CV9xGlIX.mjs [app-client] (ecmascript)");
;
;
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/constants-ByUssRbE.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/constants.ts
__turbopack_context__.s([
    "CURRENT_DEV_INSTANCE_SUFFIXES",
    ()=>CURRENT_DEV_INSTANCE_SUFFIXES,
    "DEV_OR_STAGING_SUFFIXES",
    ()=>DEV_OR_STAGING_SUFFIXES,
    "LEGACY_DEV_INSTANCE_SUFFIXES",
    ()=>LEGACY_DEV_INSTANCE_SUFFIXES,
    "LOCAL_API_URL",
    ()=>LOCAL_API_URL,
    "LOCAL_ENV_SUFFIXES",
    ()=>LOCAL_ENV_SUFFIXES,
    "PROD_API_URL",
    ()=>PROD_API_URL,
    "STAGING_API_URL",
    ()=>STAGING_API_URL,
    "STAGING_ENV_SUFFIXES",
    ()=>STAGING_ENV_SUFFIXES,
    "iconImageUrl",
    ()=>iconImageUrl
]);
const LEGACY_DEV_INSTANCE_SUFFIXES = [
    ".lcl.dev",
    ".lclstage.dev",
    ".lclclerk.com"
];
const CURRENT_DEV_INSTANCE_SUFFIXES = [
    ".accounts.dev",
    ".accountsstage.dev",
    ".accounts.lclclerk.com"
];
const DEV_OR_STAGING_SUFFIXES = [
    ".lcl.dev",
    ".stg.dev",
    ".lclstage.dev",
    ".stgstage.dev",
    ".dev.lclclerk.com",
    ".stg.lclclerk.com",
    ".accounts.lclclerk.com",
    "accountsstage.dev",
    "accounts.dev"
];
const LOCAL_ENV_SUFFIXES = [
    ".lcl.dev",
    "lclstage.dev",
    ".lclclerk.com",
    ".accounts.lclclerk.com"
];
const STAGING_ENV_SUFFIXES = [
    ".accountsstage.dev"
];
const LOCAL_API_URL = "https://api.lclclerk.com";
const STAGING_API_URL = "https://api.clerkstage.dev";
const PROD_API_URL = "https://api.clerk.com";
/**
* Returns the URL for a static image
* using the new img.clerk.com service
*/ function iconImageUrl(id) {
    let format = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "svg";
    return "https://img.clerk.com/static/".concat(id, ".").concat(format);
}
;
 //# sourceMappingURL=constants-ByUssRbE.mjs.map
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/isomorphicAtob-DybBXGFR.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/isomorphicAtob.ts
/**
* A function that decodes a string of data which has been encoded using base-64 encoding.
* Uses `atob` if available, otherwise uses `Buffer` from `global`. If neither are available, returns the data as-is.
*/ __turbopack_context__.s([
    "isomorphicAtob",
    ()=>isomorphicAtob
]);
const isomorphicAtob = (data)=>{
    if (typeof atob !== "undefined" && typeof atob === "function") return atob(data);
    else if (("TURBOPACK compile-time value", "object") !== "undefined" && /*TURBOPACK member replacement*/ __turbopack_context__.g.Buffer) return new /*TURBOPACK member replacement*/ __turbopack_context__.g.Buffer(data, "base64").toString();
    return data;
};
;
 //# sourceMappingURL=isomorphicAtob-DybBXGFR.mjs.map
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/isomorphicBtoa-Dr7WubZv.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/isomorphicBtoa.ts
__turbopack_context__.s([
    "isomorphicBtoa",
    ()=>isomorphicBtoa
]);
const isomorphicBtoa = (data)=>{
    if (typeof btoa !== "undefined" && typeof btoa === "function") return btoa(data);
    else if (("TURBOPACK compile-time value", "object") !== "undefined" && /*TURBOPACK member replacement*/ __turbopack_context__.g.Buffer) return new /*TURBOPACK member replacement*/ __turbopack_context__.g.Buffer(data).toString("base64");
    return data;
};
;
 //# sourceMappingURL=isomorphicBtoa-Dr7WubZv.mjs.map
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/keys-YNv6yjKk.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildPublishableKey",
    ()=>buildPublishableKey,
    "createDevOrStagingUrlCache",
    ()=>createDevOrStagingUrlCache,
    "getCookieSuffix",
    ()=>getCookieSuffix,
    "getSuffixedCookieName",
    ()=>getSuffixedCookieName,
    "isDevelopmentFromPublishableKey",
    ()=>isDevelopmentFromPublishableKey,
    "isDevelopmentFromSecretKey",
    ()=>isDevelopmentFromSecretKey,
    "isProductionFromPublishableKey",
    ()=>isProductionFromPublishableKey,
    "isProductionFromSecretKey",
    ()=>isProductionFromSecretKey,
    "isPublishableKey",
    ()=>isPublishableKey,
    "parsePublishableKey",
    ()=>parsePublishableKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$constants$2d$ByUssRbE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/constants-ByUssRbE.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$isomorphicAtob$2d$DybBXGFR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/isomorphicAtob-DybBXGFR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$isomorphicBtoa$2d$Dr7WubZv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/isomorphicBtoa-Dr7WubZv.mjs [app-client] (ecmascript)");
;
;
;
//#region src/keys.ts
/** Prefix used for production publishable keys */ const PUBLISHABLE_KEY_LIVE_PREFIX = "pk_live_";
/** Prefix used for development publishable keys */ const PUBLISHABLE_KEY_TEST_PREFIX = "pk_test_";
/**
* Regular expression that matches development frontend API keys.
* Matches patterns like: foo-bar-13.clerk.accounts.dev.
*/ const PUBLISHABLE_FRONTEND_API_DEV_REGEX = /^(([a-z]+)-){2}([0-9]{1,2})\.clerk\.accounts([a-z.]*)(dev|com)$/i;
/**
* Converts a frontend API URL into a base64-encoded publishable key.
*
* @param frontendApi - The frontend API URL (e.g., 'clerk.example.com').
* @returns A base64-encoded publishable key with appropriate prefix (pk_live_ or pk_test_).
*/ function buildPublishableKey(frontendApi) {
    return "".concat(PUBLISHABLE_FRONTEND_API_DEV_REGEX.test(frontendApi) || frontendApi.startsWith("clerk.") && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$constants$2d$ByUssRbE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEGACY_DEV_INSTANCE_SUFFIXES"].some((s)=>frontendApi.endsWith(s)) ? PUBLISHABLE_KEY_TEST_PREFIX : PUBLISHABLE_KEY_LIVE_PREFIX).concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$isomorphicBtoa$2d$Dr7WubZv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isomorphicBtoa"])("".concat(frontendApi, "$")));
}
/**
* Validates that a decoded publishable key has the correct format.
* The decoded value should be a frontend API followed by exactly one '$' at the end.
*
* @param decoded - The decoded publishable key string to validate.
* @returns `true` if the decoded key has valid format, `false` otherwise.
*/ function isValidDecodedPublishableKey(decoded) {
    if (!decoded.endsWith("$")) return false;
    const withoutTrailing = decoded.slice(0, -1);
    if (withoutTrailing.includes("$")) return false;
    return withoutTrailing.includes(".");
}
/**
* Parses and validates a publishable key, extracting the frontend API and instance type.
*
* @param key - The publishable key to parse.
* @param options - Configuration options for parsing.
* @param options.fatal
* @param options.domain
* @param options.proxyUrl
* @param options.isSatellite
* @returns Parsed publishable key object with instanceType and frontendApi, or null if invalid.
*
* @throws {Error} When options.fatal is true and key is missing or invalid.
*/ function parsePublishableKey(key) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    key = key || "";
    if (!key || !isPublishableKey(key)) {
        if (options.fatal && !key) throw new Error("Publishable key is missing. Ensure that your publishable key is correctly configured. Double-check your environment configuration for your keys, or access them here: https://dashboard.clerk.com/last-active?path=api-keys");
        if (options.fatal && !isPublishableKey(key)) throw new Error("Publishable key not valid.");
        return null;
    }
    const instanceType = key.startsWith(PUBLISHABLE_KEY_LIVE_PREFIX) ? "production" : "development";
    let decodedFrontendApi;
    try {
        decodedFrontendApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$isomorphicAtob$2d$DybBXGFR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isomorphicAtob"])(key.split("_")[2]);
    } catch (e) {
        if (options.fatal) throw new Error("Publishable key not valid: Failed to decode key.");
        return null;
    }
    if (!isValidDecodedPublishableKey(decodedFrontendApi)) {
        if (options.fatal) throw new Error("Publishable key not valid: Decoded key has invalid format.");
        return null;
    }
    let frontendApi = decodedFrontendApi.slice(0, -1);
    if (options.proxyUrl) frontendApi = options.proxyUrl;
    else if (instanceType !== "development" && options.domain && options.isSatellite) frontendApi = "clerk.".concat(options.domain);
    return {
        instanceType,
        frontendApi
    };
}
/**
* Checks if the provided key is a valid publishable key.
*
* @param key - The key to be checked. Defaults to an empty string if not provided.
* @returns `true` if 'key' is a valid publishable key, `false` otherwise.
*/ function isPublishableKey() {
    let key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    try {
        if (!(key.startsWith(PUBLISHABLE_KEY_LIVE_PREFIX) || key.startsWith(PUBLISHABLE_KEY_TEST_PREFIX))) return false;
        const parts = key.split("_");
        if (parts.length !== 3) return false;
        const encodedPart = parts[2];
        if (!encodedPart) return false;
        return isValidDecodedPublishableKey((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$isomorphicAtob$2d$DybBXGFR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isomorphicAtob"])(encodedPart));
    } catch (e) {
        return false;
    }
}
/**
* Creates a memoized cache for checking if URLs are development or staging environments.
* Uses a Map to cache results for better performance on repeated checks.
*
* @returns An object with an isDevOrStagingUrl method that checks if a URL is dev/staging.
*/ function createDevOrStagingUrlCache() {
    const devOrStagingUrlCache = /* @__PURE__ */ new Map();
    return {
        isDevOrStagingUrl: (url)=>{
            if (!url) return false;
            const hostname = typeof url === "string" ? url : url.hostname;
            let res = devOrStagingUrlCache.get(hostname);
            if (res === void 0) {
                res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$constants$2d$ByUssRbE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEV_OR_STAGING_SUFFIXES"].some((s)=>hostname.endsWith(s));
                devOrStagingUrlCache.set(hostname, res);
            }
            return res;
        }
    };
}
/**
* Checks if a publishable key is for a development environment.
* Supports both legacy format (test_) and new format (pk_test_).
*
* @param apiKey - The API key to check.
* @returns `true` if the key is for development, `false` otherwise.
*/ function isDevelopmentFromPublishableKey(apiKey) {
    return apiKey.startsWith("test_") || apiKey.startsWith("pk_test_");
}
/**
* Checks if a publishable key is for a production environment.
* Supports both legacy format (live_) and new format (pk_live_).
*
* @param apiKey - The API key to check.
* @returns `true` if the key is for production, `false` otherwise.
*/ function isProductionFromPublishableKey(apiKey) {
    return apiKey.startsWith("live_") || apiKey.startsWith("pk_live_");
}
/**
* Checks if a secret key is for a development environment.
* Supports both legacy format (test_) and new format (sk_test_).
*
* @param apiKey - The secret key to check.
* @returns `true` if the key is for development, `false` otherwise.
*/ function isDevelopmentFromSecretKey(apiKey) {
    return apiKey.startsWith("test_") || apiKey.startsWith("sk_test_");
}
/**
* Checks if a secret key is for a production environment.
* Supports both legacy format (live_) and new format (sk_live_).
*
* @param apiKey - The secret key to check.
* @returns `true` if the key is for production, `false` otherwise.
*/ function isProductionFromSecretKey(apiKey) {
    return apiKey.startsWith("live_") || apiKey.startsWith("sk_live_");
}
/**
* Generates a unique cookie suffix based on the publishable key using SHA-1 hashing.
* The suffix is base64-encoded and URL-safe (+ and / characters are replaced).
*
* @param publishableKey - The publishable key to generate suffix from.
* @param subtle - The SubtleCrypto interface to use for hashing (defaults to globalThis.crypto.subtle).
* @returns A promise that resolves to an 8-character URL-safe base64 string.
*/ async function getCookieSuffix(publishableKey) {
    let subtle = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : globalThis.crypto.subtle;
    const data = new TextEncoder().encode(publishableKey);
    const digest = await subtle.digest("sha-1", data);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$isomorphicBtoa$2d$Dr7WubZv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isomorphicBtoa"])(String.fromCharCode(...new Uint8Array(digest))).replace(/\+/gi, "-").replace(/\//gi, "_").substring(0, 8);
}
/**
* Creates a suffixed cookie name by appending the cookie suffix to the base name.
* Used to create unique cookie names based on the publishable key.
*
* @param cookieName - The base cookie name.
* @param cookieSuffix - The suffix to append (typically generated by getCookieSuffix).
* @returns The suffixed cookie name in format: `${cookieName}_${cookieSuffix}`.
*/ const getSuffixedCookieName = (cookieName, cookieSuffix)=>{
    return "".concat(cookieName, "_").concat(cookieSuffix);
};
;
 //# sourceMappingURL=keys-YNv6yjKk.mjs.map
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/underscore-DjQrhefX.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/underscore.ts
/**
* Convert words to a sentence.
*
* @param items - An array of words to be joined.
* @returns A string with the items joined by a comma and the last item joined by ", or".
*/ __turbopack_context__.s([
    "camelToSnake",
    ()=>camelToSnake,
    "deepCamelToSnake",
    ()=>deepCamelToSnake,
    "deepSnakeToCamel",
    ()=>deepSnakeToCamel,
    "getNonUndefinedValues",
    ()=>getNonUndefinedValues,
    "isIPV4Address",
    ()=>isIPV4Address,
    "isTruthy",
    ()=>isTruthy,
    "snakeToCamel",
    ()=>snakeToCamel,
    "titleize",
    ()=>titleize,
    "toSentence",
    ()=>toSentence
]);
const toSentence = (items)=>{
    if (items.length == 0) return "";
    if (items.length == 1) return items[0];
    let sentence = items.slice(0, -1).join(", ");
    sentence += ", or ".concat(items.slice(-1));
    return sentence;
};
const IP_V4_ADDRESS_REGEX = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
/**
* Checks if a string is a valid IPv4 address.
*
* @returns True if the string is a valid IPv4 address, false otherwise.
*/ function isIPV4Address(str) {
    return IP_V4_ADDRESS_REGEX.test(str || "");
}
/**
* Converts the first character of a string to uppercase.
*
* @param str - The string to be converted.
* @returns The modified string with the rest of the string unchanged.
*
* @example
* ```ts
* titleize('hello world') // 'Hello world'
* ```
*/ function titleize(str) {
    const s = str || "";
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/**
* Converts a string from snake_case to camelCase.
*/ function snakeToCamel(str) {
    return str ? str.replace(/([-_][a-z])/g, (match)=>match.toUpperCase().replace(/-|_/, "")) : "";
}
/**
* Converts a string from camelCase to snake_case.
*/ function camelToSnake(str) {
    return str ? str.replace(/[A-Z]/g, (letter)=>"_".concat(letter.toLowerCase())) : "";
}
const createDeepObjectTransformer = (transform)=>{
    const deepTransform = (obj)=>{
        if (!obj) return obj;
        if (Array.isArray(obj)) return obj.map((el)=>{
            if (typeof el === "object" || Array.isArray(el)) return deepTransform(el);
            return el;
        });
        const copy = {
            ...obj
        };
        const keys = Object.keys(copy);
        for (const oldName of keys){
            const newName = transform(oldName.toString());
            if (newName !== oldName) {
                copy[newName] = copy[oldName];
                delete copy[oldName];
            }
            if (typeof copy[newName] === "object") copy[newName] = deepTransform(copy[newName]);
        }
        return copy;
    };
    return deepTransform;
};
/**
* Transforms camelCased objects/ arrays to snake_cased.
* This function recursively traverses all objects and arrays of the passed value
* camelCased keys are removed.
*
* @function
*/ const deepCamelToSnake = createDeepObjectTransformer(camelToSnake);
/**
* Transforms snake_cased objects/ arrays to camelCased.
* This function recursively traverses all objects and arrays of the passed value
* camelCased keys are removed.
*
* @function
*/ const deepSnakeToCamel = createDeepObjectTransformer(snakeToCamel);
/**
* A function to determine if a value is truthy.
*
* @returns True for `true`, true, positive numbers. False for `false`, false, 0, negative integers and anything else.
*/ function isTruthy(value) {
    if (typeof value === "boolean") return value;
    if (value === void 0 || value === null) return false;
    if (typeof value === "string") {
        if (value.toLowerCase() === "true") return true;
        if (value.toLowerCase() === "false") return false;
    }
    const number = parseInt(value, 10);
    if (isNaN(number)) return false;
    if (number > 0) return true;
    return false;
}
/**
* Get all non-undefined values from an object.
*/ function getNonUndefinedValues(obj) {
    return Object.entries(obj).reduce((acc, param)=>{
        let [key, value] = param;
        if (value !== void 0) acc[key] = value;
        return acc;
    }, {});
}
;
 //# sourceMappingURL=underscore-DjQrhefX.mjs.map
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/telemetry-wqMDWlvR.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EVENT_SAMPLING_RATE",
    ()=>EVENT_SAMPLING_RATE,
    "EVENT_THEME_USAGE",
    ()=>EVENT_THEME_USAGE,
    "TelemetryCollector",
    ()=>TelemetryCollector,
    "eventComponentMounted",
    ()=>eventComponentMounted,
    "eventFrameworkMetadata",
    ()=>eventFrameworkMetadata,
    "eventMethodCalled",
    ()=>eventMethodCalled,
    "eventPrebuiltComponentMounted",
    ()=>eventPrebuiltComponentMounted,
    "eventPrebuiltComponentOpened",
    ()=>eventPrebuiltComponentOpened,
    "eventThemeUsage",
    ()=>eventThemeUsage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_method_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_method_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$keys$2d$YNv6yjKk$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/keys-YNv6yjKk.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$underscore$2d$DjQrhefX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/underscore-DjQrhefX.mjs [app-client] (ecmascript)");
;
;
;
;
;
var _cache, _cacheTtl, /**
	* Generates a consistent unique key for telemetry events by sorting payload properties.
	* This ensures that payloads with identical content in different orders produce the same key.
	*/ _generateKey, _class, _storageKey, _getCache, _class1, _cache1, _maxSize, _config, _eventThrottler, _metadata, _buffer, _pendingFlush, _shouldRecord, _shouldRecordLog, _shouldBeSampled, _scheduleFlush, _flush, /**
	* If running in debug mode, log the event and its payload to the console.
	*/ _logEvent, /**
	* If in browser, attempt to lazily grab the SDK metadata from the Clerk singleton, otherwise fallback to the initially passed in values.
	*
	* This is necessary because the sdkMetadata can be set by the host SDK after the TelemetryCollector is instantiated.
	*/ _getSDKMetadata, /**
	* Append relevant metadata from the Clerk singleton to the event payload.
	*/ _preparePayload, /**
	* Best-effort sanitization of the context payload. Returns a plain object with JSON-serializable
	* values or null when the input is missing or not serializable. Arrays are not accepted.
	*/ _sanitizeContext, _class2;
;
;
//#region src/telemetry/throttler.ts
const DEFAULT_CACHE_TTL_MS = 864e5;
/**
* Manages throttling for telemetry events using a configurable cache implementation
* to mitigate event flooding in frequently executed code paths.
*/ var TelemetryEventThrottler = (_cache = /*#__PURE__*/ new WeakMap(), _cacheTtl = /*#__PURE__*/ new WeakMap(), _generateKey = /*#__PURE__*/ new WeakSet(), _class = class {
    isEventThrottled(payload) {
        const now = Date.now();
        const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _generateKey, generateKey).call(this, payload);
        const entry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cache).getItem(key);
        if (!entry) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cache).setItem(key, now);
            return false;
        }
        if (now - entry > (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cacheTtl)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cache).setItem(key, now);
            return false;
        }
        return true;
    }
    constructor(cache){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _generateKey);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cache, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cacheTtl, {
            writable: true,
            value: DEFAULT_CACHE_TTL_MS
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cache, cache);
    }
}, _class);
/**
* LocalStorage-based cache implementation for browser environments.
*/ var LocalStorageThrottlerCache = (_storageKey = /*#__PURE__*/ new WeakMap(), _getCache = /*#__PURE__*/ new WeakSet(), _class1 = class {
    getItem(key) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getCache, getCache).call(this)[key];
    }
    setItem(key, value) {
        try {
            const cache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getCache, getCache).call(this);
            cache[key] = value;
            localStorage.setItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _storageKey), JSON.stringify(cache));
        } catch (err) {
            if (err instanceof DOMException && (err.name === "QuotaExceededError" || err.name === "NS_ERROR_DOM_QUOTA_REACHED") && localStorage.length > 0) localStorage.removeItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _storageKey));
        }
    }
    removeItem(key) {
        try {
            const cache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getCache, getCache).call(this);
            delete cache[key];
            localStorage.setItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _storageKey), JSON.stringify(cache));
        } catch (e) {}
    }
    static isSupported() {
        return typeof window !== "undefined" && !!window.localStorage;
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getCache);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _storageKey, {
            writable: true,
            value: "clerk_telemetry_throttler"
        });
    }
}, _class1);
/**
* In-memory cache implementation for non-browser environments (e.g., React Native).
*/ var InMemoryThrottlerCache = (_cache1 = /*#__PURE__*/ new WeakMap(), _maxSize = /*#__PURE__*/ new WeakMap(), class {
    getItem(key) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cache1).size > (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _maxSize)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cache1).clear();
            return;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cache1).get(key);
    }
    setItem(key, value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cache1).set(key, value);
    }
    removeItem(key) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cache1).delete(key);
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cache1, {
            writable: true,
            value: /* @__PURE__ */ new Map()
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _maxSize, {
            writable: true,
            value: 1e4
        });
    }
});
//#endregion
//#region src/telemetry/collector.ts
/**
* Type guard to check if window.Clerk exists and has the expected structure.
*/ function isWindowClerkWithMetadata(clerk) {
    return typeof clerk === "object" && clerk !== null && "constructor" in clerk && typeof clerk.constructor === "function";
}
const VALID_LOG_LEVELS = new Set([
    "error",
    "warn",
    "info",
    "debug",
    "trace"
]);
const DEFAULT_CONFIG = {
    samplingRate: 1,
    maxBufferSize: 5,
    endpoint: "https://clerk-telemetry.com"
};
var TelemetryCollector = (_config = /*#__PURE__*/ new WeakMap(), _eventThrottler = /*#__PURE__*/ new WeakMap(), _metadata = /*#__PURE__*/ new WeakMap(), _buffer = /*#__PURE__*/ new WeakMap(), _pendingFlush = /*#__PURE__*/ new WeakMap(), _shouldRecord = /*#__PURE__*/ new WeakSet(), _shouldRecordLog = /*#__PURE__*/ new WeakSet(), _shouldBeSampled = /*#__PURE__*/ new WeakSet(), _scheduleFlush = /*#__PURE__*/ new WeakSet(), _flush = /*#__PURE__*/ new WeakSet(), _logEvent = /*#__PURE__*/ new WeakSet(), _getSDKMetadata = /*#__PURE__*/ new WeakSet(), _preparePayload = /*#__PURE__*/ new WeakSet(), _sanitizeContext = /*#__PURE__*/ new WeakSet(), _class2 = class {
    get isEnabled() {
        var _window_navigator, _window;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _metadata).instanceType !== "development") return false;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _config).disabled || typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$underscore$2d$DjQrhefX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTruthy"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.CLERK_TELEMETRY_DISABLED)) return false;
        if (typeof window !== "undefined" && !!((_window = window) === null || _window === void 0 ? void 0 : (_window_navigator = _window.navigator) === null || _window_navigator === void 0 ? void 0 : _window_navigator.webdriver)) return false;
        return true;
    }
    get isDebug() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _config).debug || typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$underscore$2d$DjQrhefX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTruthy"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.CLERK_TELEMETRY_DEBUG);
    }
    record(event) {
        try {
            const preparedPayload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _preparePayload, preparePayload).call(this, event.event, event.payload);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _logEvent, logEvent).call(this, preparedPayload.event, preparedPayload);
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _shouldRecord, shouldRecord).call(this, preparedPayload, event.eventSamplingRate)) return;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _buffer).push({
                kind: "event",
                value: preparedPayload
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _scheduleFlush, scheduleFlush).call(this);
        } catch (error) {
            console.error("[clerk/telemetry] Error recording telemetry event", error);
        }
    }
    /**
	* Records a telemetry log entry if logging is enabled and not in debug mode.
	*
	* @param entry - The telemetry log entry to record.
	*/ recordLog(entry) {
        try {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _shouldRecordLog, shouldRecordLog).call(this, entry)) return;
            const levelIsValid = typeof (entry === null || entry === void 0 ? void 0 : entry.level) === "string" && VALID_LOG_LEVELS.has(entry.level);
            const messageIsValid = typeof (entry === null || entry === void 0 ? void 0 : entry.message) === "string" && entry.message.trim().length > 0;
            let normalizedTimestamp = null;
            const timestampInput = entry === null || entry === void 0 ? void 0 : entry.timestamp;
            if (typeof timestampInput === "number" || typeof timestampInput === "string") {
                const candidate = new Date(timestampInput);
                if (!Number.isNaN(candidate.getTime())) normalizedTimestamp = candidate;
            }
            if (!levelIsValid || !messageIsValid || normalizedTimestamp === null) {
                if (this.isDebug && typeof console !== "undefined") console.warn("[clerk/telemetry] Dropping invalid telemetry log entry", {
                    levelIsValid,
                    messageIsValid,
                    timestampIsValid: normalizedTimestamp !== null
                });
                return;
            }
            const sdkMetadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getSDKMetadata, getSDKMetadata).call(this);
            var _class_private_field_get_clerkVersion;
            const logData = {
                sdk: sdkMetadata.name,
                sdkv: sdkMetadata.version,
                cv: (_class_private_field_get_clerkVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _metadata).clerkVersion) !== null && _class_private_field_get_clerkVersion !== void 0 ? _class_private_field_get_clerkVersion : "",
                lvl: entry.level,
                msg: entry.message,
                ts: normalizedTimestamp.toISOString(),
                pk: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _metadata).publishableKey || null,
                payload: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _sanitizeContext, sanitizeContext).call(this, entry.context)
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _buffer).push({
                kind: "log",
                value: logData
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _scheduleFlush, scheduleFlush).call(this);
        } catch (error) {
            console.error("[clerk/telemetry] Error recording telemetry log entry", error);
        }
    }
    constructor(options){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _shouldRecord);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _shouldRecordLog);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _shouldBeSampled);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _scheduleFlush);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _flush);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _logEvent);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getSDKMetadata);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _preparePayload);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _sanitizeContext);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _config, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _eventThrottler, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _metadata, {
            writable: true,
            value: {}
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _buffer, {
            writable: true,
            value: []
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pendingFlush, {
            writable: true,
            value: null
        });
        var _options_maxBufferSize, _options_samplingRate, _options_perEventSampling, _options_disabled, _options_debug;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _config, {
            maxBufferSize: (_options_maxBufferSize = options.maxBufferSize) !== null && _options_maxBufferSize !== void 0 ? _options_maxBufferSize : DEFAULT_CONFIG.maxBufferSize,
            samplingRate: (_options_samplingRate = options.samplingRate) !== null && _options_samplingRate !== void 0 ? _options_samplingRate : DEFAULT_CONFIG.samplingRate,
            perEventSampling: (_options_perEventSampling = options.perEventSampling) !== null && _options_perEventSampling !== void 0 ? _options_perEventSampling : true,
            disabled: (_options_disabled = options.disabled) !== null && _options_disabled !== void 0 ? _options_disabled : false,
            debug: (_options_debug = options.debug) !== null && _options_debug !== void 0 ? _options_debug : false,
            endpoint: DEFAULT_CONFIG.endpoint
        });
        var _options_clerkVersion;
        if (!options.clerkVersion && typeof window === "undefined") (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _metadata).clerkVersion = "";
        else (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _metadata).clerkVersion = (_options_clerkVersion = options.clerkVersion) !== null && _options_clerkVersion !== void 0 ? _options_clerkVersion : "";
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _metadata).sdk = options.sdk;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _metadata).sdkVersion = options.sdkVersion;
        var _options_publishableKey;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _metadata).publishableKey = (_options_publishableKey = options.publishableKey) !== null && _options_publishableKey !== void 0 ? _options_publishableKey : "";
        const parsedKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$keys$2d$YNv6yjKk$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePublishableKey"])(options.publishableKey);
        if (parsedKey) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _metadata).instanceType = parsedKey.instanceType;
        if (options.secretKey) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _metadata).secretKey = options.secretKey.substring(0, 16);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _eventThrottler, new TelemetryEventThrottler(LocalStorageThrottlerCache.isSupported() ? new LocalStorageThrottlerCache() : new InMemoryThrottlerCache()));
    }
}, _class2);
//#endregion
//#region src/telemetry/events/component-mounted.ts
const EVENT_COMPONENT_MOUNTED = "COMPONENT_MOUNTED";
const EVENT_COMPONENT_OPENED = "COMPONENT_OPENED";
const EVENT_SAMPLING_RATE$3 = .1;
/** Increase sampling for high-signal auth components on mount. */ const AUTH_COMPONENTS = new Set([
    "SignIn",
    "SignUp"
]);
/**
* Returns the per-event sampling rate for component-mounted telemetry events.
* Uses a higher rate for SignIn/SignUp to improve signal quality.
*
*  @internal
*/ function getComponentMountedSamplingRate(component) {
    return AUTH_COMPONENTS.has(component) ? 1 : EVENT_SAMPLING_RATE$3;
}
/**
* Factory for prebuilt component telemetry events.
*
* @internal
*/ function createPrebuiltComponentEvent(event) {
    return function(component, props, additionalPayload) {
        var _props_appearance, _props_appearance1, _props_appearance2;
        return {
            event,
            eventSamplingRate: event === EVENT_COMPONENT_MOUNTED ? getComponentMountedSamplingRate(component) : EVENT_SAMPLING_RATE$3,
            payload: {
                component,
                appearanceProp: Boolean(props === null || props === void 0 ? void 0 : props.appearance),
                baseTheme: Boolean(props === null || props === void 0 ? void 0 : (_props_appearance = props.appearance) === null || _props_appearance === void 0 ? void 0 : _props_appearance.baseTheme),
                elements: Boolean(props === null || props === void 0 ? void 0 : (_props_appearance1 = props.appearance) === null || _props_appearance1 === void 0 ? void 0 : _props_appearance1.elements),
                variables: Boolean(props === null || props === void 0 ? void 0 : (_props_appearance2 = props.appearance) === null || _props_appearance2 === void 0 ? void 0 : _props_appearance2.variables),
                ...additionalPayload
            }
        };
    };
}
/**
* Helper function for `telemetry.record()`. Create a consistent event object for when a prebuilt (AIO) component is mounted.
*
* @param component - The name of the component.
* @param props - The props passed to the component. Will be filtered to a known list of props.
* @param additionalPayload - Additional data to send with the event.
* @example
* telemetry.record(eventPrebuiltComponentMounted('SignUp', props));
*/ function eventPrebuiltComponentMounted(component, props, additionalPayload) {
    return createPrebuiltComponentEvent(EVENT_COMPONENT_MOUNTED)(component, props, additionalPayload);
}
/**
* Helper function for `telemetry.record()`. Create a consistent event object for when a prebuilt (AIO) component is opened as a modal.
*
* @param component - The name of the component.
* @param props - The props passed to the component. Will be filtered to a known list of props.
* @param additionalPayload - Additional data to send with the event.
* @example
* telemetry.record(eventPrebuiltComponentOpened('GoogleOneTap', props));
*/ function eventPrebuiltComponentOpened(component, props, additionalPayload) {
    return createPrebuiltComponentEvent(EVENT_COMPONENT_OPENED)(component, props, additionalPayload);
}
/**
* Helper function for `telemetry.record()`. Create a consistent event object for when a component is mounted. Use `eventPrebuiltComponentMounted` for prebuilt components.
*
* **Caution:** Filter the `props` you pass to this function to avoid sending too much data.
*
* @param component - The name of the component.
* @param props - The props passed to the component. Ideally you only pass a handful of props here.
* @example
* telemetry.record(eventComponentMounted('SignUp', props));
*/ function eventComponentMounted(component) {
    let props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return {
        event: EVENT_COMPONENT_MOUNTED,
        eventSamplingRate: getComponentMountedSamplingRate(component),
        payload: {
            component,
            ...props
        }
    };
}
//#endregion
//#region src/telemetry/events/method-called.ts
const EVENT_METHOD_CALLED = "METHOD_CALLED";
const EVENT_SAMPLING_RATE$2 = .1;
/**
* Fired when a helper method is called from a Clerk SDK.
*/ function eventMethodCalled(method, payload) {
    return {
        event: EVENT_METHOD_CALLED,
        eventSamplingRate: EVENT_SAMPLING_RATE$2,
        payload: {
            method,
            ...payload
        }
    };
}
//#endregion
//#region src/telemetry/events/framework-metadata.ts
const EVENT_FRAMEWORK_METADATA = "FRAMEWORK_METADATA";
const EVENT_SAMPLING_RATE$1 = .1;
/**
* Fired when a helper method is called from a Clerk SDK.
*/ function eventFrameworkMetadata(payload) {
    return {
        event: EVENT_FRAMEWORK_METADATA,
        eventSamplingRate: EVENT_SAMPLING_RATE$1,
        payload
    };
}
//#endregion
//#region src/telemetry/events/theme-usage.ts
const EVENT_THEME_USAGE = "THEME_USAGE";
const EVENT_SAMPLING_RATE = 1;
/**
* Helper function for `telemetry.record()`. Create a consistent event object for tracking theme usage in ClerkProvider.
*
* @param appearance - The appearance prop from ClerkProvider.
* @example
* telemetry.record(eventThemeUsage(appearance));
*/ function eventThemeUsage(appearance) {
    return {
        event: EVENT_THEME_USAGE,
        eventSamplingRate: EVENT_SAMPLING_RATE,
        payload: analyzeThemeUsage(appearance)
    };
}
/**
* Analyzes the appearance prop to extract theme usage information for telemetry.
*
* @internal
*/ function analyzeThemeUsage(appearance) {
    if (!appearance || typeof appearance !== "object") return {};
    const themeProperty = appearance.theme || appearance.baseTheme;
    if (!themeProperty) return {};
    let themeName;
    if (Array.isArray(themeProperty)) for (const theme of themeProperty){
        const name = extractThemeName(theme);
        if (name) {
            themeName = name;
            break;
        }
    }
    else themeName = extractThemeName(themeProperty);
    return {
        themeName
    };
}
/**
* Extracts the theme name from a theme object.
*
* @internal
*/ function extractThemeName(theme) {
    if (typeof theme === "string") return theme;
    if (typeof theme === "object" && theme !== null) {
        if ("name" in theme && typeof theme.name === "string") return theme.name;
    }
}
;
function generateKey(event) {
    const { sk: _sk, pk: _pk, payload, ...rest } = event;
    const sanitizedEvent = {
        ...payload,
        ...rest
    };
    return JSON.stringify(Object.keys({
        ...payload,
        ...rest
    }).sort().map((key)=>sanitizedEvent[key]));
}
function getCache() {
    try {
        const cacheString = localStorage.getItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _storageKey));
        if (!cacheString) return {};
        return JSON.parse(cacheString);
    } catch (e) {
        return {};
    }
}
function shouldRecord(preparedPayload, eventSamplingRate) {
    return this.isEnabled && !this.isDebug && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _shouldBeSampled, shouldBeSampled).call(this, preparedPayload, eventSamplingRate);
}
function shouldRecordLog(_entry) {
    return true;
}
function shouldBeSampled(preparedPayload, eventSamplingRate) {
    const randomSeed = Math.random();
    if (!(randomSeed <= (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _config).samplingRate && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _config).perEventSampling === false || typeof eventSamplingRate === "undefined" || randomSeed <= eventSamplingRate))) return false;
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _eventThrottler).isEventThrottled(preparedPayload);
}
function scheduleFlush() {
    if (typeof window === "undefined") {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _flush, flush).call(this);
        return;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _buffer).length >= (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _config).maxBufferSize) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pendingFlush)) if (typeof cancelIdleCallback !== "undefined") cancelIdleCallback(Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pendingFlush)));
        else clearTimeout(Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pendingFlush)));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _flush, flush).call(this);
        return;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pendingFlush)) return;
    if ("requestIdleCallback" in window) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pendingFlush, requestIdleCallback(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _flush, flush).call(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pendingFlush, null);
    }));
    else (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pendingFlush, setTimeout(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _flush, flush).call(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pendingFlush, null);
    }, 0));
}
function flush() {
    const itemsToSend = [
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _buffer)
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _buffer, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pendingFlush, null);
    if (itemsToSend.length === 0) return;
    const eventsToSend = itemsToSend.filter((item)=>item.kind === "event").map((item)=>item.value);
    const logsToSend = itemsToSend.filter((item)=>item.kind === "log").map((item)=>item.value);
    if (eventsToSend.length > 0) {
        const eventsUrl = new URL("/v1/event", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _config).endpoint);
        fetch(eventsUrl, {
            headers: {
                "Content-Type": "application/json"
            },
            keepalive: true,
            method: "POST",
            body: JSON.stringify({
                events: eventsToSend
            })
        }).catch(()=>void 0);
    }
    if (logsToSend.length > 0) {
        const logsUrl = new URL("/v1/logs", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _config).endpoint);
        fetch(logsUrl, {
            headers: {
                "Content-Type": "application/json"
            },
            keepalive: true,
            method: "POST",
            body: JSON.stringify({
                logs: logsToSend
            })
        }).catch(()=>void 0);
    }
}
function logEvent(event, payload) {
    if (!this.isDebug) return;
    if (typeof console.groupCollapsed !== "undefined") {
        console.groupCollapsed("[clerk/telemetry]", event);
        console.log(payload);
        console.groupEnd();
    } else console.log("[clerk/telemetry]", event, payload);
}
function getSDKMetadata() {
    const sdkMetadata = {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _metadata).sdk,
        version: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _metadata).sdkVersion
    };
    if (typeof window !== "undefined") {
        const windowWithClerk = window;
        if (windowWithClerk.Clerk) {
            const windowClerk = windowWithClerk.Clerk;
            if (isWindowClerkWithMetadata(windowClerk) && windowClerk.constructor.sdkMetadata) {
                const { name, version } = windowClerk.constructor.sdkMetadata;
                if (name !== void 0) sdkMetadata.name = name;
                if (version !== void 0) sdkMetadata.version = version;
            }
        }
    }
    return sdkMetadata;
}
function preparePayload(event, payload) {
    const sdkMetadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getSDKMetadata, getSDKMetadata).call(this);
    var _class_private_field_get_clerkVersion, _class_private_field_get_instanceType;
    return {
        event,
        cv: (_class_private_field_get_clerkVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _metadata).clerkVersion) !== null && _class_private_field_get_clerkVersion !== void 0 ? _class_private_field_get_clerkVersion : "",
        it: (_class_private_field_get_instanceType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _metadata).instanceType) !== null && _class_private_field_get_instanceType !== void 0 ? _class_private_field_get_instanceType : "",
        sdk: sdkMetadata.name,
        sdkv: sdkMetadata.version,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _metadata).publishableKey ? {
            pk: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _metadata).publishableKey
        } : {},
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _metadata).secretKey ? {
            sk: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _metadata).secretKey
        } : {},
        payload
    };
}
function sanitizeContext(context) {
    if (context === null || typeof context === "undefined") return null;
    if (typeof context !== "object") return null;
    try {
        const cleaned = JSON.parse(JSON.stringify(context));
        if (cleaned && typeof cleaned === "object" && !Array.isArray(cleaned)) return cleaned;
        return null;
    } catch (e) {
        return null;
    }
}
 //# sourceMappingURL=telemetry-wqMDWlvR.mjs.map
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/telemetry.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$constants$2d$ByUssRbE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/constants-ByUssRbE.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$isomorphicAtob$2d$DybBXGFR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/isomorphicAtob-DybBXGFR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$isomorphicBtoa$2d$Dr7WubZv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/isomorphicBtoa-Dr7WubZv.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$keys$2d$YNv6yjKk$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/keys-YNv6yjKk.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$underscore$2d$DjQrhefX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/underscore-DjQrhefX.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$telemetry$2d$wqMDWlvR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/telemetry-wqMDWlvR.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/authorization-errors-CS1pNy8i.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/authorization-errors.ts
__turbopack_context__.s([
    "isReverificationHint",
    ()=>isReverificationHint,
    "reverificationError",
    ()=>reverificationError,
    "reverificationErrorResponse",
    ()=>reverificationErrorResponse
]);
const REVERIFICATION_REASON = "reverification-error";
const reverificationError = (missingConfig)=>({
        clerk_error: {
            type: "forbidden",
            reason: REVERIFICATION_REASON,
            metadata: {
                reverification: missingConfig
            }
        }
    });
const reverificationErrorResponse = function() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    return new Response(JSON.stringify(reverificationError(...args)), {
        status: 403
    });
};
const isReverificationHint = (result)=>{
    var _result_clerk_error, _result_clerk_error1;
    return result && typeof result === "object" && "clerk_error" in result && ((_result_clerk_error = result.clerk_error) === null || _result_clerk_error === void 0 ? void 0 : _result_clerk_error.type) === "forbidden" && ((_result_clerk_error1 = result.clerk_error) === null || _result_clerk_error1 === void 0 ? void 0 : _result_clerk_error1.reason) === REVERIFICATION_REASON;
};
;
 //# sourceMappingURL=authorization-errors-CS1pNy8i.mjs.map
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/noop-B3MbDAfb.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/utils/noop.ts
__turbopack_context__.s([
    "noop",
    ()=>noop
]);
const noop = function() {
    for(var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++){
        _args[_key] = arguments[_key];
    }
};
;
 //# sourceMappingURL=noop-B3MbDAfb.mjs.map
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/createDeferredPromise-CjYZzUuU.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDeferredPromise",
    ()=>createDeferredPromise
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$noop$2d$B3MbDAfb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/noop-B3MbDAfb.mjs [app-client] (ecmascript)");
;
//#region src/utils/createDeferredPromise.ts
/**
* Create a promise that can be resolved or rejected from
* outside the Promise constructor callback
* A ES6 compatible utility that implements `Promise.withResolvers`
* @internal
*/ const createDeferredPromise = ()=>{
    let resolve = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$noop$2d$B3MbDAfb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
    let reject = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$noop$2d$B3MbDAfb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
    return {
        promise: new Promise((res, rej)=>{
            resolve = res;
            reject = rej;
        }),
        resolve,
        reject
    };
};
;
 //# sourceMappingURL=createDeferredPromise-CjYZzUuU.mjs.map
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/organization-BqxdOtRG.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/organization.ts
/**
* Finds the Organization membership for a given Organization ID from a list of memberships
* @param organizationMemberships - Array of Organization memberships to search through
* @param organizationId - ID of the Organization to find the membership for
* @returns The matching Organization membership or undefined if not found
*/ __turbopack_context__.s([
    "getCurrentOrganizationMembership",
    ()=>getCurrentOrganizationMembership
]);
function getCurrentOrganizationMembership(organizationMemberships, organizationId) {
    return organizationMemberships.find((organizationMembership)=>organizationMembership.organization.id === organizationId);
}
;
 //# sourceMappingURL=organization-BqxdOtRG.mjs.map
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/react/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClerkInstanceContext",
    ()=>ClerkInstanceContext,
    "ClientContext",
    ()=>ClientContext,
    "OptionsContext",
    ()=>OptionsContext,
    "OrganizationProvider",
    ()=>OrganizationProvider,
    "SessionContext",
    ()=>SessionContext,
    "UserContext",
    ()=>UserContext,
    "__experimental_CheckoutProvider",
    ()=>__experimental_CheckoutProvider,
    "__experimental_PaymentElement",
    ()=>PaymentElement,
    "__experimental_PaymentElementProvider",
    ()=>PaymentElementProvider,
    "__experimental_useAPIKeys",
    ()=>useAPIKeys,
    "__experimental_useCheckout",
    ()=>useCheckout,
    "__experimental_usePaymentAttempts",
    ()=>usePaymentAttempts,
    "__experimental_usePaymentElement",
    ()=>usePaymentElement,
    "__experimental_usePaymentMethods",
    ()=>usePaymentMethods,
    "__experimental_usePlans",
    ()=>usePlans,
    "__experimental_useStatements",
    ()=>useStatements,
    "__experimental_useSubscription",
    ()=>useSubscription,
    "__internal_usePaymentAttemptQuery",
    ()=>__internal_usePaymentAttemptQuery,
    "__internal_usePlanDetailsQuery",
    ()=>usePlanDetailsQuery,
    "__internal_useStatementQuery",
    ()=>__internal_useStatementQuery,
    "assertContextExists",
    ()=>assertContextExists,
    "createContextAndHook",
    ()=>createContextAndHook,
    "isDeeplyEqual",
    ()=>isDeeplyEqual,
    "useAssertWrappedByClerkProvider",
    ()=>useAssertWrappedByClerkProvider,
    "useAttemptToEnableOrganizations",
    ()=>useAttemptToEnableOrganizations,
    "useClerk",
    ()=>useClerk,
    "useClerkInstanceContext",
    ()=>useClerkInstanceContext,
    "useClientContext",
    ()=>useClientContext,
    "useDeepEqualMemo",
    ()=>useDeepEqualMemo,
    "useOptionsContext",
    ()=>useOptionsContext,
    "useOrganization",
    ()=>useOrganization,
    "useOrganizationContext",
    ()=>useOrganizationContext,
    "useOrganizationCreationDefaults",
    ()=>useOrganizationCreationDefaultsHook,
    "useOrganizationList",
    ()=>useOrganizationList,
    "useReverification",
    ()=>useReverification,
    "useSafeLayoutEffect",
    ()=>useSafeLayoutEffect,
    "useSession",
    ()=>useSession,
    "useSessionContext",
    ()=>useSessionContext,
    "useSessionList",
    ()=>useSessionList,
    "useUser",
    ()=>useUser,
    "useUserContext",
    ()=>useUserContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$constants$2d$ByUssRbE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/constants-ByUssRbE.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$isomorphicAtob$2d$DybBXGFR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/isomorphicAtob-DybBXGFR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$isomorphicBtoa$2d$Dr7WubZv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/isomorphicBtoa-Dr7WubZv.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$keys$2d$YNv6yjKk$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/keys-YNv6yjKk.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$authorization$2d$errors$2d$CS1pNy8i$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/authorization-errors-CS1pNy8i.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$authorization$2d$CV9xGlIX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/authorization-CV9xGlIX.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$error$2d$Dl9xmUf3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/error-Dl9xmUf3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$noop$2d$B3MbDAfb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/noop-B3MbDAfb.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$createDeferredPromise$2d$CjYZzUuU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/createDeferredPromise-CjYZzUuU.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$underscore$2d$DjQrhefX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/underscore-DjQrhefX.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$organization$2d$BqxdOtRG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/organization-BqxdOtRG.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$telemetry$2d$wqMDWlvR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/telemetry-wqMDWlvR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$4_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/swr@2.3.4_react@19.1.0/node_modules/swr/dist/index/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$4_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/swr@2.3.4_react@19.1.0/node_modules/swr/dist/_internal/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$4_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$infinite$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/swr@2.3.4_react@19.1.0/node_modules/swr/dist/infinite/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dequal$40$2$2e$0$2e$3$2f$node_modules$2f$dequal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$4_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$mutation$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/swr@2.3.4_react@19.1.0/node_modules/swr/dist/mutation/index.mjs [app-client] (ecmascript)");
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
//#region src/react/hooks/createContextAndHook.ts
/**
* Assert that the context value exists, otherwise throw an error.
*
* @internal
*/ function assertContextExists(contextVal, msgOrCtx) {
    if (!contextVal) throw typeof msgOrCtx === "string" ? new Error(msgOrCtx) : /* @__PURE__ */ new Error("".concat(msgOrCtx.displayName, " not found"));
}
/**
* Create and return a Context and two hooks that return the context value.
* The Context type is derived from the type passed in by the user.
*
* The first hook returned guarantees that the context exists so the returned value is always `CtxValue`
* The second hook makes no guarantees, so the returned value can be `CtxValue | undefined`
*
* @internal
*/ const createContextAndHook = (displayName, options)=>{
    const { assertCtxFn = assertContextExists } = options || {};
    const Ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(void 0);
    Ctx.displayName = displayName;
    const useCtx = ()=>{
        const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(Ctx);
        assertCtxFn(ctx, "".concat(displayName, " not found"));
        return ctx.value;
    };
    const useCtxWithoutGuarantee = ()=>{
        const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(Ctx);
        return ctx ? ctx.value : {};
    };
    return [
        Ctx,
        useCtx,
        useCtxWithoutGuarantee
    ];
};
//#endregion
//#region src/react/providers/SWRConfigCompat.swr.tsx
/**
* @internal
*/ function SWRConfigCompat(param) {
    let { swrConfig, children } = param;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$4_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SWRConfig"], {
        value: swrConfig
    }, children);
}
//#endregion
//#region src/react/contexts.tsx
const [ClerkInstanceContext, useClerkInstanceContext] = createContextAndHook("ClerkInstanceContext");
const [UserContext, useUserContext] = createContextAndHook("UserContext");
const [ClientContext, useClientContext] = createContextAndHook("ClientContext");
const [SessionContext, useSessionContext] = createContextAndHook("SessionContext");
const OptionsContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext({});
const [CheckoutContext, useCheckoutContext] = createContextAndHook("CheckoutContext");
const __experimental_CheckoutProvider = (param)=>{
    let { children, ...rest } = param;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(CheckoutContext.Provider, {
        value: {
            value: rest
        }
    }, children);
};
/**
* @internal
*/ function useOptionsContext() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(OptionsContext);
    if (context === void 0) throw new Error("useOptions must be used within an OptionsContext");
    return context;
}
const [OrganizationContextInternal, useOrganizationContext] = createContextAndHook("OrganizationContext");
const OrganizationProvider = (param)=>{
    let { children, organization, swrConfig } = param;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(SWRConfigCompat, {
        swrConfig
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(OrganizationContextInternal.Provider, {
        value: {
            value: {
                organization
            }
        }
    }, children));
};
/**
* @internal
*/ function useAssertWrappedByClerkProvider(displayNameOrFn) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(ClerkInstanceContext)) {
        if (typeof displayNameOrFn === "function") {
            displayNameOrFn();
            return;
        }
        throw new Error("".concat(displayNameOrFn, " can only be used within the <ClerkProvider /> component.\n\nPossible fixes:\n1. Ensure that the <ClerkProvider /> is correctly wrapping your application where this component is used.\n2. Check for multiple versions of the `@clerk/shared` package in your project. Use a tool like `npm ls @clerk/shared` to identify multiple versions, and update your dependencies to only rely on one.\n\nLearn more: https://clerk.com/docs/components/clerk-provider").trim());
    }
}
//#endregion
//#region src/react/stable-keys.ts
const USER_MEMBERSHIPS_KEY = "userMemberships";
const USER_INVITATIONS_KEY = "userInvitations";
const USER_SUGGESTIONS_KEY = "userSuggestions";
const DOMAINS_KEY = "domains";
const MEMBERSHIP_REQUESTS_KEY = "membershipRequests";
const MEMBERSHIPS_KEY = "memberships";
const INVITATIONS_KEY = "invitations";
const API_KEYS_KEY = "apiKeys";
const ORGANIZATION_CREATION_DEFAULTS_KEY = "organizationCreationDefaults";
const PLANS_KEY = "billing-plans";
const SUBSCRIPTION_KEY = "billing-subscription";
const PAYMENT_METHODS_KEY = "billing-payment-methods";
const PAYMENT_ATTEMPTS_KEY = "billing-payment-attempts";
const STATEMENTS_KEY = "billing-statements";
const STABLE_KEYS = {
    USER_MEMBERSHIPS_KEY,
    USER_INVITATIONS_KEY,
    USER_SUGGESTIONS_KEY,
    DOMAINS_KEY,
    MEMBERSHIP_REQUESTS_KEY,
    MEMBERSHIPS_KEY,
    INVITATIONS_KEY,
    PLANS_KEY,
    SUBSCRIPTION_KEY,
    PAYMENT_METHODS_KEY,
    PAYMENT_ATTEMPTS_KEY,
    STATEMENTS_KEY,
    API_KEYS_KEY,
    ORGANIZATION_CREATION_DEFAULTS_KEY
};
/**
* Internal stable keys for queries only used by our UI components.
* These keys are not used by the hooks themselves.
*/ const PAYMENT_ATTEMPT_KEY = "billing-payment-attempt";
const BILLING_PLANS_KEY = "billing-plan";
const BILLING_STATEMENTS_KEY = "billing-statement";
const INTERNAL_STABLE_KEYS = {
    PAYMENT_ATTEMPT_KEY,
    BILLING_PLANS_KEY,
    BILLING_STATEMENTS_KEY
};
//#endregion
//#region src/react/hooks/createCacheKeys.ts
/**
* @internal
*/ function createCacheKeys(params) {
    return {
        queryKey: [
            params.stablePrefix,
            params.authenticated,
            params.tracked,
            params.untracked
        ],
        invalidationKey: [
            params.stablePrefix,
            params.authenticated,
            params.tracked
        ],
        stableKey: params.stablePrefix,
        authenticated: params.authenticated
    };
}
/**
* @internal
*/ function toSWRQuery(keys) {
    const { queryKey } = keys;
    return {
        type: queryKey[0],
        ...queryKey[2],
        ...queryKey[3].args
    };
}
//#endregion
//#region src/react/hooks/usePagesOrInfinite.shared.ts
/**
* A hook that safely merges user-provided pagination options with default values.
* It caches initial pagination values (page and size) until component unmount to prevent unwanted rerenders.
*
* @internal
*
* @example
* ```typescript
* // Example 1: With user-provided options
* const userOptions = { initialPage: 2, pageSize: 20, infinite: true };
* const defaults = { initialPage: 1, pageSize: 10, infinite: false };
* useWithSafeValues(userOptions, defaults);
* // Returns { initialPage: 2, pageSize: 20, infinite: true }
*
* // Example 2: With boolean true (use defaults)
* const params = true;
* const defaults = { initialPage: 1, pageSize: 10, infinite: false };
* useWithSafeValues(params, defaults);
* // Returns { initialPage: 1, pageSize: 10, infinite: false }
*
* // Example 3: With undefined options (fallback to defaults)
* const params = undefined;
* const defaults = { initialPage: 1, pageSize: 10, infinite: false };
* useWithSafeValues(params, defaults);
* // Returns { initialPage: 1, pageSize: 10, infinite: false }
* ```
*/ const useWithSafeValues = (params, defaultValues)=>{
    const shouldUseDefaults = typeof params === "boolean" && params;
    var _params_initialPage;
    const initialPageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(shouldUseDefaults ? defaultValues.initialPage : (_params_initialPage = params === null || params === void 0 ? void 0 : params.initialPage) !== null && _params_initialPage !== void 0 ? _params_initialPage : defaultValues.initialPage);
    var _params_pageSize;
    const pageSizeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(shouldUseDefaults ? defaultValues.pageSize : (_params_pageSize = params === null || params === void 0 ? void 0 : params.pageSize) !== null && _params_pageSize !== void 0 ? _params_pageSize : defaultValues.pageSize);
    const newObj = {};
    var _params_key;
    for (const key of Object.keys(defaultValues))newObj[key] = shouldUseDefaults ? defaultValues[key] : (_params_key = params === null || params === void 0 ? void 0 : params[key]) !== null && _params_key !== void 0 ? _params_key : defaultValues[key];
    return {
        ...newObj,
        initialPage: initialPageRef.current,
        pageSize: pageSizeRef.current
    };
};
/**
* Returns an object containing only the keys from the first object that are not present in the second object.
* Useful for extracting unique parameters that should be passed to a request while excluding common cache keys.
*
* @internal
*
* @example
* ```typescript
* // Example 1: Basic usage
* const obj1 = { name: 'John', age: 30, city: 'NY' };
* const obj2 = { name: 'John', age: 30 };
* getDifferentKeys(obj1, obj2); // Returns { city: 'NY' }
*
* // Example 2: With cache keys
* const requestParams = { page: 1, limit: 10, userId: '123' };
* const cacheKeys = { userId: '123' };
* getDifferentKeys(requestParams, cacheKeys); // Returns { page: 1, limit: 10 }
* ```
*/ function getDifferentKeys(obj1, obj2) {
    const keysSet = new Set(Object.keys(obj2));
    const differentKeysObject = {};
    for (const key1 of Object.keys(obj1))if (!keysSet.has(key1)) differentKeysObject[key1] = obj1[key1];
    return differentKeysObject;
}
//#endregion
//#region src/react/hooks/usePreviousValue.ts
/**
* A hook that retains the previous value of a primitive type.
* It uses a ref to prevent causing unnecessary re-renders.
*
* @internal
*
* @example
* ```
* Render 1: value = 'A' → returns null
* Render 2: value = 'B' → returns 'A'
* Render 3: value = 'B' → returns 'A'
* Render 4: value = 'B' → returns 'A'
* Render 5: value = 'C' → returns 'B'
* ```
*/ function usePreviousValue(value) {
    const currentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(value);
    const previousRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (currentRef.current !== value) {
        previousRef.current = currentRef.current;
        currentRef.current = value;
    }
    return previousRef.current;
}
//#endregion
//#region src/react/hooks/usePagesOrInfinite.swr.tsx
const cachingSWROptions = {
    dedupingInterval: 1e3 * 60,
    focusThrottleInterval: 1e3 * 60 * 2
};
const cachingSWRInfiniteOptions = {
    ...cachingSWROptions,
    revalidateFirstPage: false
};
/**
* A flexible pagination hook that supports both traditional pagination and infinite loading.
* It provides a unified API for handling paginated data fetching, with built-in caching through SWR.
* The hook can operate in two modes:
* - Traditional pagination: Fetches one page at a time with page navigation
* - Infinite loading: Accumulates data as more pages are loaded.
*
* Features:
* - Cache management with SWR
* - Loading and error states
* - Page navigation helpers
* - Data revalidation and updates
* - Support for keeping previous data while loading.
*
* @internal
*/ const usePagesOrInfinite = (params)=>{
    const { fetcher, config, keys } = params;
    var _config_initialPage;
    const [paginatedPage, setPaginatedPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((_config_initialPage = config.initialPage) !== null && _config_initialPage !== void 0 ? _config_initialPage : 1);
    var _config_initialPage1;
    const initialPageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])((_config_initialPage1 = config.initialPage) !== null && _config_initialPage1 !== void 0 ? _config_initialPage1 : 1);
    var _config_pageSize;
    const pageSizeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])((_config_pageSize = config.pageSize) !== null && _config_pageSize !== void 0 ? _config_pageSize : 10);
    var _config_enabled;
    const enabled = (_config_enabled = config.enabled) !== null && _config_enabled !== void 0 ? _config_enabled : true;
    const cacheMode = config.__experimental_mode === "cache";
    var _config_infinite;
    const triggerInfinite = (_config_infinite = config.infinite) !== null && _config_infinite !== void 0 ? _config_infinite : false;
    var _config_keepPreviousData;
    const keepPreviousData = (_config_keepPreviousData = config.keepPreviousData) !== null && _config_keepPreviousData !== void 0 ? _config_keepPreviousData : false;
    const isSignedIn = config.isSignedIn;
    const pagesCacheKey = {
        ...toSWRQuery(keys),
        initialPage: paginatedPage,
        pageSize: pageSizeRef.current
    };
    const previousIsSignedIn = usePreviousValue(isSignedIn);
    const shouldFetch = !triggerInfinite && enabled && (!cacheMode ? !!fetcher : true);
    const { data: swrData, isValidating: swrIsValidating, isLoading: swrIsLoading, error: swrError, mutate: swrMutate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$4_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(typeof isSignedIn === "boolean" ? previousIsSignedIn === true && isSignedIn === false ? pagesCacheKey : isSignedIn ? shouldFetch ? pagesCacheKey : null : null : shouldFetch ? pagesCacheKey : null, !cacheMode && !!fetcher ? ({
        "usePagesOrInfinite.useSWR": (cacheKeyParams)=>{
            if (isSignedIn === false || shouldFetch === false) return null;
            return fetcher(getDifferentKeys(cacheKeyParams, {
                type: keys.queryKey[0],
                ...keys.queryKey[2]
            }));
        }
    })["usePagesOrInfinite.useSWR"] : null, {
        keepPreviousData,
        ...cachingSWROptions
    });
    const { data: swrInfiniteData, isLoading: swrInfiniteIsLoading, isValidating: swrInfiniteIsValidating, error: swrInfiniteError, size, setSize, mutate: swrInfiniteMutate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$4_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$infinite$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "usePagesOrInfinite.useSWRInfinite": (pageIndex)=>{
            if (!triggerInfinite || !enabled || isSignedIn === false) return null;
            return {
                ...toSWRQuery(keys),
                initialPage: initialPageRef.current + pageIndex,
                pageSize: pageSizeRef.current
            };
        }
    }["usePagesOrInfinite.useSWRInfinite"], {
        "usePagesOrInfinite.useSWRInfinite": (cacheKeyParams)=>{
            const requestParams = getDifferentKeys(cacheKeyParams, {
                type: keys.queryKey[0],
                ...keys.queryKey[2]
            });
            return fetcher === null || fetcher === void 0 ? void 0 : fetcher(requestParams);
        }
    }["usePagesOrInfinite.useSWRInfinite"], cachingSWRInfiniteOptions);
    const page = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "usePagesOrInfinite.useMemo[page]": ()=>{
            if (triggerInfinite) return size;
            return paginatedPage;
        }
    }["usePagesOrInfinite.useMemo[page]"], [
        triggerInfinite,
        size,
        paginatedPage
    ]);
    const fetchPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePagesOrInfinite.useCallback[fetchPage]": (numberOrgFn)=>{
            if (triggerInfinite) {
                setSize(numberOrgFn);
                return;
            }
            return setPaginatedPage(numberOrgFn);
        }
    }["usePagesOrInfinite.useCallback[fetchPage]"], [
        setSize,
        triggerInfinite
    ]);
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "usePagesOrInfinite.useMemo[data]": ()=>{
            var _swrInfiniteData_map_flat;
            if (triggerInfinite) return (_swrInfiniteData_map_flat = swrInfiniteData === null || swrInfiniteData === void 0 ? void 0 : swrInfiniteData.map({
                "usePagesOrInfinite.useMemo[data]": (a)=>a === null || a === void 0 ? void 0 : a.data
            }["usePagesOrInfinite.useMemo[data]"]).flat()) !== null && _swrInfiniteData_map_flat !== void 0 ? _swrInfiniteData_map_flat : [];
            var _swrData_data;
            return (_swrData_data = swrData === null || swrData === void 0 ? void 0 : swrData.data) !== null && _swrData_data !== void 0 ? _swrData_data : [];
        }
    }["usePagesOrInfinite.useMemo[data]"], [
        triggerInfinite,
        swrData,
        swrInfiniteData
    ]);
    const count = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "usePagesOrInfinite.useMemo[count]": ()=>{
            var _swrInfiniteData_;
            if (triggerInfinite) return (swrInfiniteData === null || swrInfiniteData === void 0 ? void 0 : (_swrInfiniteData_ = swrInfiniteData[(swrInfiniteData === null || swrInfiniteData === void 0 ? void 0 : swrInfiniteData.length) - 1]) === null || _swrInfiniteData_ === void 0 ? void 0 : _swrInfiniteData_.total_count) || 0;
            var _swrData_total_count;
            return (_swrData_total_count = swrData === null || swrData === void 0 ? void 0 : swrData.total_count) !== null && _swrData_total_count !== void 0 ? _swrData_total_count : 0;
        }
    }["usePagesOrInfinite.useMemo[count]"], [
        triggerInfinite,
        swrData,
        swrInfiniteData
    ]);
    const isLoading = triggerInfinite ? swrInfiniteIsLoading : swrIsLoading;
    const isFetching = triggerInfinite ? swrInfiniteIsValidating : swrIsValidating;
    var _ref;
    const error = (_ref = triggerInfinite ? swrInfiniteError : swrError) !== null && _ref !== void 0 ? _ref : null;
    const isError = !!error;
    const fetchNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePagesOrInfinite.useCallback[fetchNext]": ()=>{
            fetchPage({
                "usePagesOrInfinite.useCallback[fetchNext]": (n)=>Math.max(0, n + 1)
            }["usePagesOrInfinite.useCallback[fetchNext]"]);
        }
    }["usePagesOrInfinite.useCallback[fetchNext]"], [
        fetchPage
    ]);
    const fetchPrevious = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePagesOrInfinite.useCallback[fetchPrevious]": ()=>{
            fetchPage({
                "usePagesOrInfinite.useCallback[fetchPrevious]": (n)=>Math.max(0, n - 1)
            }["usePagesOrInfinite.useCallback[fetchPrevious]"]);
        }
    }["usePagesOrInfinite.useCallback[fetchPrevious]"], [
        fetchPage
    ]);
    const offsetCount = (initialPageRef.current - 1) * pageSizeRef.current;
    return {
        data,
        count,
        error,
        isLoading,
        isFetching,
        isError,
        page,
        pageCount: Math.ceil((count - offsetCount) / pageSizeRef.current),
        fetchPage,
        fetchNext,
        fetchPrevious,
        hasNextPage: count - offsetCount * pageSizeRef.current > page * pageSizeRef.current,
        hasPreviousPage: (page - 1) * pageSizeRef.current > offsetCount * pageSizeRef.current,
        revalidate: triggerInfinite ? ()=>swrInfiniteMutate() : ()=>swrMutate(),
        setData: triggerInfinite ? (value)=>swrInfiniteMutate(value, {
                revalidate: false
            }) : (value)=>swrMutate(value, {
                revalidate: false
            })
    };
};
//#endregion
//#region src/react/hooks/useAPIKeys.swr.tsx
/**
* @internal
*
* The `useAPIKeys()` hook provides access to paginated API keys for the current user or organization.
*
* @example
* ### Basic usage with default pagination
*
* ```tsx
* const { data, isLoading, page, pageCount, fetchNext, fetchPrevious } = useAPIKeys({
*   subject: 'user_123',
*   pageSize: 10,
*   initialPage: 1,
* });
* ```
*
* @example
* ### With search query
*
* ```tsx
* const [searchValue, setSearchValue] = useState('');
* const debouncedSearch = useDebounce(searchValue, 500);
*
* const { data, isLoading } = useAPIKeys({
*   subject: 'user_123',
*   query: debouncedSearch.trim(),
*   pageSize: 10,
* });
* ```
*
* @example
* ### Infinite scroll
*
* ```tsx
* const { data, isLoading, fetchNext, hasNextPage } = useAPIKeys({
*   subject: 'user_123',
*   infinite: true,
* });
* ```
*/ function useAPIKeys(params) {
    var _clerk_telemetry, _clerk_apiKeys;
    useAssertWrappedByClerkProvider("useAPIKeys");
    const safeValues = useWithSafeValues(params, {
        initialPage: 1,
        pageSize: 10,
        keepPreviousData: false,
        infinite: false,
        subject: "",
        query: "",
        enabled: true
    });
    const clerk = useClerkInstanceContext();
    (_clerk_telemetry = clerk.telemetry) === null || _clerk_telemetry === void 0 ? void 0 : _clerk_telemetry.record((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$telemetry$2d$wqMDWlvR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventMethodCalled"])("useAPIKeys"));
    const hookParams = {
        initialPage: safeValues.initialPage,
        pageSize: safeValues.pageSize,
        ...safeValues.subject ? {
            subject: safeValues.subject
        } : {},
        ...safeValues.query ? {
            query: safeValues.query
        } : {}
    };
    var _safeValues_enabled;
    const isEnabled = ((_safeValues_enabled = safeValues.enabled) !== null && _safeValues_enabled !== void 0 ? _safeValues_enabled : true) && clerk.loaded;
    const result = usePagesOrInfinite({
        fetcher: ((_clerk_apiKeys = clerk.apiKeys) === null || _clerk_apiKeys === void 0 ? void 0 : _clerk_apiKeys.getAll) ? ({
            "useAPIKeys.usePagesOrInfinite[result]": (params$1)=>clerk.apiKeys.getAll({
                    ...params$1,
                    subject: safeValues.subject
                })
        })["useAPIKeys.usePagesOrInfinite[result]"] : void 0,
        config: {
            keepPreviousData: safeValues.keepPreviousData,
            infinite: safeValues.infinite,
            enabled: isEnabled,
            isSignedIn: Boolean(clerk.user),
            initialPage: safeValues.initialPage,
            pageSize: safeValues.pageSize
        },
        keys: createCacheKeys({
            stablePrefix: STABLE_KEYS.API_KEYS_KEY,
            authenticated: Boolean(clerk.user),
            tracked: {
                subject: safeValues.subject
            },
            untracked: {
                args: hookParams
            }
        })
    });
    const { mutate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$4_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useSWRConfig"])();
    const invalidateAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAPIKeys.useCallback[invalidateAll]": ()=>{
            return mutate({
                "useAPIKeys.useCallback[invalidateAll]": (key)=>{
                    if (!key || typeof key !== "object") return false;
                    return "type" in key && key.type === "apiKeys" && "subject" in key && key.subject === safeValues.subject;
                }
            }["useAPIKeys.useCallback[invalidateAll]"]);
        }
    }["useAPIKeys.useCallback[invalidateAll]"], [
        mutate,
        safeValues.subject
    ]);
    return {
        ...result,
        revalidate: invalidateAll
    };
}
//#endregion
//#region src/react/hooks/useClerk.ts
/**
* > [!WARNING]
* > This hook should only be used for advanced use cases, such as building a completely custom OAuth flow or as an escape hatch to access to the `Clerk` object.
*
* The `useClerk()` hook provides access to the [`Clerk`](https://clerk.com/docs/reference/javascript/clerk) object, allowing you to build alternatives to any Clerk Component.
*
* @function
*
* @returns The `useClerk()` hook returns the `Clerk` object, which includes all the methods and properties listed in the [`Clerk` reference](https://clerk.com/docs/reference/javascript/clerk).
*
* @example
*
* The following example uses the `useClerk()` hook to access the `clerk` object. The `clerk` object is used to call the [`openSignIn()`](https://clerk.com/docs/reference/javascript/clerk#sign-in) method to open the sign-in modal.
*
* <Tabs items='React,Next.js'>
* <Tab>
*
* ```tsx {{ filename: 'src/Home.tsx' }}
* import { useClerk } from '@clerk/clerk-react'
*
* export default function Home() {
*   const clerk = useClerk()
*
*   return <button onClick={() => clerk.openSignIn({})}>Sign in</button>
* }
* ```
*
* </Tab>
* <Tab>
*
* {@include ../../../docs/use-clerk.md#nextjs-01}
*
* </Tab>
* </Tabs>
*/ const useClerk = ()=>{
    useAssertWrappedByClerkProvider("useClerk");
    return useClerkInstanceContext();
};
//#endregion
//#region src/react/hooks/useAttemptToEnableOrganizations.ts
/**
* Attempts to enable the organizations environment setting for a given caller
*
* @internal
*/ function useAttemptToEnableOrganizations(caller) {
    const clerk = useClerk();
    const hasAttempted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAttemptToEnableOrganizations.useEffect": ()=>{
            var _clerk___internal_attemptToEnableEnvironmentSetting;
            if (hasAttempted.current) return;
            hasAttempted.current = true;
            (_clerk___internal_attemptToEnableEnvironmentSetting = clerk.__internal_attemptToEnableEnvironmentSetting) === null || _clerk___internal_attemptToEnableEnvironmentSetting === void 0 ? void 0 : _clerk___internal_attemptToEnableEnvironmentSetting.call(clerk, {
                for: "organizations",
                caller
            });
        }
    }["useAttemptToEnableOrganizations.useEffect"], [
        clerk,
        caller
    ]);
}
//#endregion
//#region src/react/hooks/useOrganization.tsx
const undefinedPaginatedResource$1 = {
    data: void 0,
    count: void 0,
    error: void 0,
    isLoading: false,
    isFetching: false,
    isError: false,
    page: void 0,
    pageCount: void 0,
    fetchPage: void 0,
    fetchNext: void 0,
    fetchPrevious: void 0,
    hasNextPage: false,
    hasPreviousPage: false,
    revalidate: void 0,
    setData: void 0
};
/**
* The `useOrganization()` hook retrieves attributes of the currently Active Organization.
*
* @example
* ### Expand and paginate attributes
*
* To keep network usage to a minimum, developers are required to opt-in by specifying which resource they need to fetch and paginate through. By default, the `memberships`, `invitations`, `membershipRequests`, and `domains` attributes are not populated. You must pass `true` or an object with the desired properties to fetch and paginate the data.
*
* ```tsx
* // invitations.data will never be populated.
* const { invitations } = useOrganization()
*
* // Use default values to fetch invitations, such as initialPage = 1 and pageSize = 10
* const { invitations } = useOrganization({
*   invitations: true,
* })
*
* // Pass your own values to fetch invitations
* const { invitations } = useOrganization({
*   invitations: {
*     pageSize: 20,
*     initialPage: 2, // skips the first page
*   },
* })
*
* // Aggregate pages in order to render an infinite list
* const { invitations } = useOrganization({
*   invitations: {
*     infinite: true,
*   },
* })
* ```
*
* @example
* ### Infinite pagination
*
* The following example demonstrates how to use the `infinite` property to fetch and append new data to the existing list. The `memberships` attribute will be populated with the first page of the Organization's memberships. When the "Load more" button is clicked, the `fetchNext` helper function will be called to append the next page of memberships to the list.
*
* ```tsx
* import { useOrganization } from '@clerk/clerk-react'
*
* export default function MemberList() {
*   const { memberships } = useOrganization({
*     memberships: {
*       infinite: true, // Append new data to the existing list
*       keepPreviousData: true, // Persist the cached data until the new data has been fetched
*     },
*   })
*
*   if (!memberships) {
*     // Handle loading state
*     return null
*   }
*
*   return (
*     <div>
*       <h2>Organization members</h2>
*       <ul>
*         {memberships.data?.map((membership) => (
*           <li key={membership.id}>
*             {membership.publicUserData.firstName} {membership.publicUserData.lastName} <
*             {membership.publicUserData.identifier}> :: {membership.role}
*           </li>
*         ))}
*       </ul>
*
*       <button
*         disabled={!memberships.hasNextPage} // Disable the button if there are no more available pages to be fetched
*         onClick={memberships.fetchNext}
*       >
*         Load more
*       </button>
*     </div>
*   )
* }
* ```
*
* @example
* ### Simple pagination
*
* The following example demonstrates how to use the `fetchPrevious` and `fetchNext` helper functions to paginate through the data. The `memberships` attribute will be populated with the first page of the Organization's memberships. When the "Previous page" or "Next page" button is clicked, the `fetchPrevious` or `fetchNext` helper function will be called to fetch the previous or next page of memberships.
*
* Notice the difference between this example's pagination and the infinite pagination example above.
*
* ```tsx
* import { useOrganization } from '@clerk/clerk-react'
*
* export default function MemberList() {
*   const { memberships } = useOrganization({
*     memberships: {
*       keepPreviousData: true, // Persist the cached data until the new data has been fetched
*     },
*   })
*
*   if (!memberships) {
*     // Handle loading state
*     return null
*   }
*
*   return (
*     <div>
*       <h2>Organization members</h2>
*       <ul>
*         {memberships.data?.map((membership) => (
*           <li key={membership.id}>
*             {membership.publicUserData.firstName} {membership.publicUserData.lastName} <
*             {membership.publicUserData.identifier}> :: {membership.role}
*           </li>
*         ))}
*       </ul>
*
*       <button disabled={!memberships.hasPreviousPage} onClick={memberships.fetchPrevious}>
*         Previous page
*       </button>
*
*       <button disabled={!memberships.hasNextPage} onClick={memberships.fetchNext}>
*         Next page
*       </button>
*     </div>
*   )
* }
* ```
*/ function useOrganization(params) {
    var _clerk_telemetry;
    const { domains: domainListParams, membershipRequests: membershipRequestsListParams, memberships: membersListParams, invitations: invitationsListParams } = params || {};
    useAssertWrappedByClerkProvider("useOrganization");
    useAttemptToEnableOrganizations("useOrganization");
    const { organization } = useOrganizationContext();
    const session = useSessionContext();
    const domainSafeValues = useWithSafeValues(domainListParams, {
        initialPage: 1,
        pageSize: 10,
        keepPreviousData: false,
        infinite: false,
        enrollmentMode: void 0
    });
    const membershipRequestSafeValues = useWithSafeValues(membershipRequestsListParams, {
        initialPage: 1,
        pageSize: 10,
        status: "pending",
        keepPreviousData: false,
        infinite: false
    });
    const membersSafeValues = useWithSafeValues(membersListParams, {
        initialPage: 1,
        pageSize: 10,
        role: void 0,
        keepPreviousData: false,
        infinite: false,
        query: void 0
    });
    const invitationsSafeValues = useWithSafeValues(invitationsListParams, {
        initialPage: 1,
        pageSize: 10,
        status: [
            "pending"
        ],
        keepPreviousData: false,
        infinite: false
    });
    const clerk = useClerkInstanceContext();
    (_clerk_telemetry = clerk.telemetry) === null || _clerk_telemetry === void 0 ? void 0 : _clerk_telemetry.record((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$telemetry$2d$wqMDWlvR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventMethodCalled"])("useOrganization"));
    const domainParams = typeof domainListParams === "undefined" ? void 0 : {
        initialPage: domainSafeValues.initialPage,
        pageSize: domainSafeValues.pageSize,
        enrollmentMode: domainSafeValues.enrollmentMode
    };
    const membershipRequestParams = typeof membershipRequestsListParams === "undefined" ? void 0 : {
        initialPage: membershipRequestSafeValues.initialPage,
        pageSize: membershipRequestSafeValues.pageSize,
        status: membershipRequestSafeValues.status
    };
    const membersParams = typeof membersListParams === "undefined" ? void 0 : {
        initialPage: membersSafeValues.initialPage,
        pageSize: membersSafeValues.pageSize,
        role: membersSafeValues.role,
        query: membersSafeValues.query
    };
    const invitationsParams = typeof invitationsListParams === "undefined" ? void 0 : {
        initialPage: invitationsSafeValues.initialPage,
        pageSize: invitationsSafeValues.pageSize,
        status: invitationsSafeValues.status
    };
    const domains = usePagesOrInfinite({
        fetcher: organization === null || organization === void 0 ? void 0 : organization.getDomains,
        config: {
            keepPreviousData: domainSafeValues.keepPreviousData,
            infinite: domainSafeValues.infinite,
            enabled: !!domainParams,
            isSignedIn: Boolean(organization),
            initialPage: domainSafeValues.initialPage,
            pageSize: domainSafeValues.pageSize
        },
        keys: createCacheKeys({
            stablePrefix: STABLE_KEYS.DOMAINS_KEY,
            authenticated: Boolean(organization),
            tracked: {
                organizationId: organization === null || organization === void 0 ? void 0 : organization.id
            },
            untracked: {
                args: domainParams
            }
        })
    });
    const membershipRequests = usePagesOrInfinite({
        fetcher: organization === null || organization === void 0 ? void 0 : organization.getMembershipRequests,
        config: {
            keepPreviousData: membershipRequestSafeValues.keepPreviousData,
            infinite: membershipRequestSafeValues.infinite,
            enabled: !!membershipRequestParams,
            isSignedIn: Boolean(organization),
            initialPage: membershipRequestSafeValues.initialPage,
            pageSize: membershipRequestSafeValues.pageSize
        },
        keys: createCacheKeys({
            stablePrefix: STABLE_KEYS.MEMBERSHIP_REQUESTS_KEY,
            authenticated: Boolean(organization),
            tracked: {
                organizationId: organization === null || organization === void 0 ? void 0 : organization.id
            },
            untracked: {
                args: membershipRequestParams
            }
        })
    });
    const memberships = usePagesOrInfinite({
        fetcher: organization === null || organization === void 0 ? void 0 : organization.getMemberships,
        config: {
            keepPreviousData: membersSafeValues.keepPreviousData,
            infinite: membersSafeValues.infinite,
            enabled: !!membersParams,
            isSignedIn: Boolean(organization),
            initialPage: membersSafeValues.initialPage,
            pageSize: membersSafeValues.pageSize
        },
        keys: createCacheKeys({
            stablePrefix: STABLE_KEYS.MEMBERSHIPS_KEY,
            authenticated: Boolean(organization),
            tracked: {
                organizationId: organization === null || organization === void 0 ? void 0 : organization.id
            },
            untracked: {
                args: membersParams
            }
        })
    });
    const invitations = usePagesOrInfinite({
        fetcher: organization === null || organization === void 0 ? void 0 : organization.getInvitations,
        config: {
            keepPreviousData: invitationsSafeValues.keepPreviousData,
            infinite: invitationsSafeValues.infinite,
            enabled: !!invitationsParams,
            isSignedIn: Boolean(organization),
            initialPage: invitationsSafeValues.initialPage,
            pageSize: invitationsSafeValues.pageSize
        },
        keys: createCacheKeys({
            stablePrefix: STABLE_KEYS.INVITATIONS_KEY,
            authenticated: Boolean(organization),
            tracked: {
                organizationId: organization === null || organization === void 0 ? void 0 : organization.id
            },
            untracked: {
                args: invitationsParams
            }
        })
    });
    if (organization === void 0) return {
        isLoaded: false,
        organization: void 0,
        membership: void 0,
        domains: undefinedPaginatedResource$1,
        membershipRequests: undefinedPaginatedResource$1,
        memberships: undefinedPaginatedResource$1,
        invitations: undefinedPaginatedResource$1
    };
    if (organization === null) return {
        isLoaded: true,
        organization: null,
        membership: null,
        domains: null,
        membershipRequests: null,
        memberships: null,
        invitations: null
    };
    /** In SSR context we include only the organization object when loadOrg is set to true. */ if (!clerk.loaded && organization) return {
        isLoaded: true,
        organization,
        membership: void 0,
        domains: undefinedPaginatedResource$1,
        membershipRequests: undefinedPaginatedResource$1,
        memberships: undefinedPaginatedResource$1,
        invitations: undefinedPaginatedResource$1
    };
    return {
        isLoaded: clerk.loaded,
        organization,
        membership: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$organization$2d$BqxdOtRG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentOrganizationMembership"])(session.user.organizationMemberships, organization.id),
        domains,
        membershipRequests,
        memberships,
        invitations
    };
}
//#endregion
//#region src/react/hooks/useOrganizationCreationDefaults.shared.ts
function useOrganizationCreationDefaultsCacheKeys(params) {
    const { userId } = params;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useOrganizationCreationDefaultsCacheKeys.useMemo": ()=>{
            return createCacheKeys({
                stablePrefix: STABLE_KEYS.ORGANIZATION_CREATION_DEFAULTS_KEY,
                authenticated: Boolean(userId),
                tracked: {
                    userId: userId !== null && userId !== void 0 ? userId : null
                },
                untracked: {
                    args: {}
                }
            });
        }
    }["useOrganizationCreationDefaultsCacheKeys.useMemo"], [
        userId
    ]);
}
//#endregion
//#region src/react/hooks/useOrganizationCreationDefaults.swr.tsx
/**
* The `useOrganizationCreationDefaults()` hook retrieves the organization creation defaults for the current user.
*
* @example
* ### Basic usage
*
* ```tsx
* import { useOrganizationCreationDefaults } from '@clerk/clerk-react'
*
* export default function CreateOrganizationForm() {
*   const { data, isLoading } = useOrganizationCreationDefaults()
*
*   if (isLoading) return <div>Loading...</div>
*
*   return (
*     <form>
*       <input defaultValue={data?.form.name} placeholder="Organization name" />
*       <input defaultValue={data?.form.slug} placeholder="Slug" />
*       <button type="submit">Create</button>
*     </form>
*   )
* }
* ```
*/ function useOrganizationCreationDefaultsHook() {
    let params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _clerk___unstable__environment_organizationSettings_organizationCreationDefaults, _clerk___unstable__environment_organizationSettings, _clerk___unstable__environment, _clerk_telemetry;
    const { keepPreviousData = true, enabled = true } = params;
    const clerk = useClerkInstanceContext();
    const user = useUserContext();
    var _clerk___unstable__environment_organizationSettings_organizationCreationDefaults_enabled;
    const featureEnabled = (_clerk___unstable__environment_organizationSettings_organizationCreationDefaults_enabled = (_clerk___unstable__environment = clerk.__unstable__environment) === null || _clerk___unstable__environment === void 0 ? void 0 : (_clerk___unstable__environment_organizationSettings = _clerk___unstable__environment.organizationSettings) === null || _clerk___unstable__environment_organizationSettings === void 0 ? void 0 : (_clerk___unstable__environment_organizationSettings_organizationCreationDefaults = _clerk___unstable__environment_organizationSettings.organizationCreationDefaults) === null || _clerk___unstable__environment_organizationSettings_organizationCreationDefaults === void 0 ? void 0 : _clerk___unstable__environment_organizationSettings_organizationCreationDefaults.enabled) !== null && _clerk___unstable__environment_organizationSettings_organizationCreationDefaults_enabled !== void 0 ? _clerk___unstable__environment_organizationSettings_organizationCreationDefaults_enabled : false;
    (_clerk_telemetry = clerk.telemetry) === null || _clerk_telemetry === void 0 ? void 0 : _clerk_telemetry.record((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$telemetry$2d$wqMDWlvR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventMethodCalled"])("useOrganizationCreationDefaults"));
    var _user_id;
    const { queryKey } = useOrganizationCreationDefaultsCacheKeys({
        userId: (_user_id = user === null || user === void 0 ? void 0 : user.id) !== null && _user_id !== void 0 ? _user_id : null
    });
    const swr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$4_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(Boolean(user) && enabled && featureEnabled && clerk.loaded ? queryKey : null, {
        "useOrganizationCreationDefaultsHook.useSWR[swr]": ()=>{
            if (!user) throw new Error("User is required to fetch organization creation defaults");
            return user.getOrganizationCreationDefaults();
        }
    }["useOrganizationCreationDefaultsHook.useSWR[swr]"], {
        dedupingInterval: 1e3 * 60,
        keepPreviousData
    });
    var _swr_error;
    return {
        data: swr.data,
        error: (_swr_error = swr.error) !== null && _swr_error !== void 0 ? _swr_error : null,
        isLoading: swr.isLoading,
        isFetching: swr.isValidating
    };
}
//#endregion
//#region src/react/hooks/useOrganizationList.tsx
const undefinedPaginatedResource = {
    data: void 0,
    count: void 0,
    error: void 0,
    isLoading: false,
    isFetching: false,
    isError: false,
    page: void 0,
    pageCount: void 0,
    fetchPage: void 0,
    fetchNext: void 0,
    fetchPrevious: void 0,
    hasNextPage: false,
    hasPreviousPage: false,
    revalidate: void 0,
    setData: void 0
};
/**
* The `useOrganizationList()` hook provides access to the current user's organization memberships, invitations, and suggestions. It also includes methods for creating new organizations and managing the active organization.
*
* @example
* ### Expanding and paginating attributes
*
* To keep network usage to a minimum, developers are required to opt-in by specifying which resource they need to fetch and paginate through. So by default, the `userMemberships`, `userInvitations`, and `userSuggestions` attributes are not populated. You must pass true or an object with the desired properties to fetch and paginate the data.
*
* ```tsx
* // userMemberships.data will never be populated
* const { userMemberships } = useOrganizationList()
*
* // Use default values to fetch userMemberships, such as initialPage = 1 and pageSize = 10
* const { userMemberships } = useOrganizationList({
*   userMemberships: true,
* })
*
* // Pass your own values to fetch userMemberships
* const { userMemberships } = useOrganizationList({
*   userMemberships: {
*     pageSize: 20,
*     initialPage: 2, // skips the first page
*   },
* })
*
* // Aggregate pages in order to render an infinite list
* const { userMemberships } = useOrganizationList({
*   userMemberships: {
*     infinite: true,
*   },
* })
* ```
*
* @example
* ### Infinite pagination
*
* The following example demonstrates how to use the `infinite` property to fetch and append new data to the existing list. The `userMemberships` attribute will be populated with the first page of the user's Organization memberships. When the "Load more" button is clicked, the `fetchNext` helper function will be called to append the next page of memberships to the list.
*
* ```tsx {{ filename: 'src/components/JoinedOrganizations.tsx' }}
* import { useOrganizationList } from '@clerk/clerk-react'
* import React from 'react'
*
* const JoinedOrganizations = () => {
*   const { isLoaded, setActive, userMemberships } = useOrganizationList({
*     userMemberships: {
*       infinite: true,
*     },
*   })
*
*   if (!isLoaded) {
*     return <>Loading</>
*   }
*
*   return (
*     <>
*       <ul>
*         {userMemberships.data?.map((mem) => (
*           <li key={mem.id}>
*             <span>{mem.organization.name}</span>
*             <button onClick={() => setActive({ organization: mem.organization.id })}>Select</button>
*           </li>
*         ))}
*       </ul>
*
*       <button disabled={!userMemberships.hasNextPage} onClick={() => userMemberships.fetchNext()}>
*         Load more
*       </button>
*     </>
*   )
* }
*
* export default JoinedOrganizations
* ```
*
* @example
* ### Simple pagination
*
* The following example demonstrates how to use the `fetchPrevious` and `fetchNext` helper functions to paginate through the data. The `userInvitations` attribute will be populated with the first page of invitations. When the "Previous page" or "Next page" button is clicked, the `fetchPrevious` or `fetchNext` helper function will be called to fetch the previous or next page of invitations.
*
* Notice the difference between this example's pagination and the infinite pagination example above.
*
* ```tsx {{ filename: 'src/components/UserInvitationsTable.tsx' }}
* import { useOrganizationList } from '@clerk/clerk-react'
* import React from 'react'
*
* const UserInvitationsTable = () => {
*   const { isLoaded, userInvitations } = useOrganizationList({
*     userInvitations: {
*       infinite: true,
*       keepPreviousData: true,
*     },
*   })
*
*   if (!isLoaded || userInvitations.isLoading) {
*     return <>Loading</>
*   }
*
*   return (
*     <>
*       <table>
*         <thead>
*           <tr>
*             <th>Email</th>
*             <th>Org name</th>
*           </tr>
*         </thead>
*
*         <tbody>
*           {userInvitations.data?.map((inv) => (
*             <tr key={inv.id}>
*               <th>{inv.emailAddress}</th>
*               <th>{inv.publicOrganizationData.name}</th>
*             </tr>
*           ))}
*         </tbody>
*       </table>
*
*       <button disabled={!userInvitations.hasPreviousPage} onClick={userInvitations.fetchPrevious}>
*         Prev
*       </button>
*       <button disabled={!userInvitations.hasNextPage} onClick={userInvitations.fetchNext}>
*         Next
*       </button>
*     </>
*   )
* }
*
* export default UserInvitationsTable
* ```
*/ function useOrganizationList(params) {
    var _clerk_telemetry;
    const { userMemberships, userInvitations, userSuggestions } = params || {};
    useAssertWrappedByClerkProvider("useOrganizationList");
    useAttemptToEnableOrganizations("useOrganizationList");
    const userMembershipsSafeValues = useWithSafeValues(userMemberships, {
        initialPage: 1,
        pageSize: 10,
        keepPreviousData: false,
        infinite: false
    });
    const userInvitationsSafeValues = useWithSafeValues(userInvitations, {
        initialPage: 1,
        pageSize: 10,
        status: "pending",
        keepPreviousData: false,
        infinite: false
    });
    const userSuggestionsSafeValues = useWithSafeValues(userSuggestions, {
        initialPage: 1,
        pageSize: 10,
        status: "pending",
        keepPreviousData: false,
        infinite: false
    });
    const clerk = useClerkInstanceContext();
    const user = useUserContext();
    (_clerk_telemetry = clerk.telemetry) === null || _clerk_telemetry === void 0 ? void 0 : _clerk_telemetry.record((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$telemetry$2d$wqMDWlvR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventMethodCalled"])("useOrganizationList"));
    const userMembershipsParams = typeof userMemberships === "undefined" ? void 0 : {
        initialPage: userMembershipsSafeValues.initialPage,
        pageSize: userMembershipsSafeValues.pageSize
    };
    const userInvitationsParams = typeof userInvitations === "undefined" ? void 0 : {
        initialPage: userInvitationsSafeValues.initialPage,
        pageSize: userInvitationsSafeValues.pageSize,
        status: userInvitationsSafeValues.status
    };
    const userSuggestionsParams = typeof userSuggestions === "undefined" ? void 0 : {
        initialPage: userSuggestionsSafeValues.initialPage,
        pageSize: userSuggestionsSafeValues.pageSize,
        status: userSuggestionsSafeValues.status
    };
    const isClerkLoaded = !!(clerk.loaded && user);
    const memberships = usePagesOrInfinite({
        fetcher: user === null || user === void 0 ? void 0 : user.getOrganizationMemberships,
        config: {
            keepPreviousData: userMembershipsSafeValues.keepPreviousData,
            infinite: userMembershipsSafeValues.infinite,
            enabled: !!userMembershipsParams,
            isSignedIn: Boolean(user),
            initialPage: userMembershipsSafeValues.initialPage,
            pageSize: userMembershipsSafeValues.pageSize
        },
        keys: createCacheKeys({
            stablePrefix: STABLE_KEYS.USER_MEMBERSHIPS_KEY,
            authenticated: Boolean(user),
            tracked: {
                userId: user === null || user === void 0 ? void 0 : user.id
            },
            untracked: {
                args: userMembershipsParams
            }
        })
    });
    const invitations = usePagesOrInfinite({
        fetcher: user === null || user === void 0 ? void 0 : user.getOrganizationInvitations,
        config: {
            keepPreviousData: userInvitationsSafeValues.keepPreviousData,
            infinite: userInvitationsSafeValues.infinite,
            enabled: !!userInvitationsParams,
            isSignedIn: Boolean(user),
            initialPage: userInvitationsSafeValues.initialPage,
            pageSize: userInvitationsSafeValues.pageSize
        },
        keys: createCacheKeys({
            stablePrefix: STABLE_KEYS.USER_INVITATIONS_KEY,
            authenticated: Boolean(user),
            tracked: {
                userId: user === null || user === void 0 ? void 0 : user.id
            },
            untracked: {
                args: userInvitationsParams
            }
        })
    });
    const suggestions = usePagesOrInfinite({
        fetcher: user === null || user === void 0 ? void 0 : user.getOrganizationSuggestions,
        config: {
            keepPreviousData: userSuggestionsSafeValues.keepPreviousData,
            infinite: userSuggestionsSafeValues.infinite,
            enabled: !!userSuggestionsParams,
            isSignedIn: Boolean(user),
            initialPage: userSuggestionsSafeValues.initialPage,
            pageSize: userSuggestionsSafeValues.pageSize
        },
        keys: createCacheKeys({
            stablePrefix: STABLE_KEYS.USER_SUGGESTIONS_KEY,
            authenticated: Boolean(user),
            tracked: {
                userId: user === null || user === void 0 ? void 0 : user.id
            },
            untracked: {
                args: userSuggestionsParams
            }
        })
    });
    if (!isClerkLoaded) return {
        isLoaded: false,
        createOrganization: void 0,
        setActive: void 0,
        userMemberships: undefinedPaginatedResource,
        userInvitations: undefinedPaginatedResource,
        userSuggestions: undefinedPaginatedResource
    };
    return {
        isLoaded: isClerkLoaded,
        setActive: clerk.setActive,
        createOrganization: clerk.createOrganization,
        userMemberships: memberships,
        userInvitations: invitations,
        userSuggestions: suggestions
    };
}
//#endregion
//#region src/react/hooks/useSafeLayoutEffect.tsx
/**
* @internal
*/ const useSafeLayoutEffect = typeof window !== "undefined" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useLayoutEffect : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect;
//#endregion
//#region src/react/hooks/useSession.ts
const hookName$3 = "useSession";
/**
* The `useSession()` hook provides access to the current user's [`Session`](https://clerk.com/docs/reference/javascript/session) object, as well as helpers for setting the active session.
*
* @unionReturnHeadings
* ["Initialization", "Signed out", "Signed in"]
*
* @function
*
* @param [options] - An object containing options for the `useSession()` hook.
* @example
* ### Access the `Session` object
*
* The following example uses the `useSession()` hook to access the `Session` object, which has the `lastActiveAt` property. The `lastActiveAt` property is a `Date` object used to show the time the session was last active.
*
* <Tabs items='React,Next.js'>
* <Tab>
*
* ```tsx {{ filename: 'src/Home.tsx' }}
* import { useSession } from '@clerk/clerk-react'
*
* export default function Home() {
*   const { isLoaded, session, isSignedIn } = useSession()
*
*   if (!isLoaded) {
*     // Handle loading state
*     return null
*   }
*   if (!isSignedIn) {
*     // Handle signed out state
*     return null
*   }
*
*   return (
*     <div>
*       <p>This session has been active since {session.lastActiveAt.toLocaleString()}</p>
*     </div>
*   )
* }
* ```
*
* </Tab>
* <Tab>
*
* {@include ../../../docs/use-session.md#nextjs-01}
*
* </Tab>
* </Tabs>
*/ const useSession = ()=>{
    var _clerk_telemetry;
    useAssertWrappedByClerkProvider(hookName$3);
    const session = useSessionContext();
    const clerk = useClerkInstanceContext();
    (_clerk_telemetry = clerk.telemetry) === null || _clerk_telemetry === void 0 ? void 0 : _clerk_telemetry.record((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$telemetry$2d$wqMDWlvR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventMethodCalled"])(hookName$3));
    if (session === void 0) return {
        isLoaded: false,
        isSignedIn: void 0,
        session: void 0
    };
    if (session === null) return {
        isLoaded: true,
        isSignedIn: false,
        session: null
    };
    return {
        isLoaded: true,
        isSignedIn: clerk.isSignedIn,
        session
    };
};
//#endregion
//#region src/react/hooks/useSessionList.ts
const hookName$2 = "useSessionList";
/**
* The `useSessionList()` hook returns an array of [`Session`](https://clerk.com/docs/reference/javascript/session) objects that have been registered on the client device.
*
* @unionReturnHeadings
* ["Initialization", "Loaded"]
*
* @function
*
* @example
* ### Get a list of sessions
*
* The following example uses `useSessionList()` to get a list of sessions that have been registered on the client device. The `sessions` property is used to show the number of times the user has visited the page.
*
* <Tabs items='React,Next.js'>
* <Tab>
*
* ```tsx {{ filename: 'src/Home.tsx' }}
* import { useSessionList } from '@clerk/clerk-react'
*
* export default function Home() {
*   const { isLoaded, sessions } = useSessionList()
*
*   if (!isLoaded) {
*     // Handle loading state
*     return null
*   }
*
*   return (
*     <div>
*       <p>Welcome back. You've been here {sessions.length} times before.</p>
*     </div>
*   )
* }
* ```
*
* </Tab>
* <Tab>
*
* {@include ../../../docs/use-session-list.md#nextjs-01}
*
* </Tab>
* </Tabs>
*/ const useSessionList = ()=>{
    var _useClerkInstanceContext_telemetry;
    useAssertWrappedByClerkProvider(hookName$2);
    const isomorphicClerk = useClerkInstanceContext();
    const client = useClientContext();
    (_useClerkInstanceContext_telemetry = useClerkInstanceContext().telemetry) === null || _useClerkInstanceContext_telemetry === void 0 ? void 0 : _useClerkInstanceContext_telemetry.record((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$telemetry$2d$wqMDWlvR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventMethodCalled"])(hookName$2));
    if (!client) return {
        isLoaded: false,
        sessions: void 0,
        setActive: void 0
    };
    return {
        isLoaded: true,
        sessions: client.sessions,
        setActive: isomorphicClerk.setActive
    };
};
//#endregion
//#region src/react/hooks/useUser.ts
const hookName$1 = "useUser";
/**
* The `useUser()` hook provides access to the current user's [`User`](https://clerk.com/docs/reference/javascript/user) object, which contains all the data for a single user in your application and provides methods to manage their account. This hook also allows you to check if the user is signed in and if Clerk has loaded and initialized.
*
* @unionReturnHeadings
* ["Initialization", "Signed out", "Signed in"]
*
* @example
* ### Get the current user
*
* The following example uses the `useUser()` hook to access the [`User`](https://clerk.com/docs/reference/javascript/user) object, which contains the current user's data such as their full name. The `isLoaded` and `isSignedIn` properties are used to handle the loading state and to check if the user is signed in, respectively.
*
* ```tsx {{ filename: 'src/Example.tsx' }}
* import { useUser } from '@clerk/clerk-react'
*
* export default function Example() {
*   const { isSignedIn, user, isLoaded } = useUser()
*
*   if (!isLoaded) {
*     return <div>Loading...</div>
*   }
*
*   if (!isSignedIn) {
*     return <div>Sign in to view this page</div>
*   }
*
*   return <div>Hello {user.firstName}!</div>
* }
* ```
*
* @example
* ### Update user data
*
* The following example uses the `useUser()` hook to access the [`User`](https://clerk.com/docs/reference/javascript/user) object, which calls the [`update()`](https://clerk.com/docs/reference/javascript/user#update) method to update the current user's information.
*
* <Tabs items='React,Next.js'>
* <Tab>
*
* ```tsx {{ filename: 'src/Home.tsx' }}
* import { useUser } from '@clerk/clerk-react'
*
* export default function Home() {
*   const { isSignedIn, isLoaded, user } = useUser()
*
*   if (!isLoaded) {
*     // Handle loading state
*     return null
*   }
*
*   if (!isSignedIn) return null
*
*   const updateUser = async () => {
*     await user.update({
*       firstName: 'John',
*       lastName: 'Doe',
*     })
*   }
*
*   return (
*     <>
*       <button onClick={updateUser}>Update your name</button>
*       <p>user.firstName: {user.firstName}</p>
*       <p>user.lastName: {user.lastName}</p>
*     </>
*   )
* }
* ```
* </Tab>
* <Tab>
*
* {@include ../../../docs/use-user.md#nextjs-01}
*
* </Tab>
* </Tabs>
*
* @example
* ### Reload user data
*
* The following example uses the `useUser()` hook to access the [`User`](https://clerk.com/docs/reference/javascript/user) object, which calls the [`reload()`](https://clerk.com/docs/reference/javascript/user#reload) method to get the latest user's information.
*
* <Tabs items='React,Next.js'>
* <Tab>
*
* ```tsx {{ filename: 'src/Home.tsx' }}
* import { useUser } from '@clerk/clerk-react'
*
* export default function Home() {
*   const { isSignedIn, isLoaded, user } = useUser();
*
*   if (!isLoaded) {
*     // Handle loading state
*     return null;
*   }
*
*   if (!isSignedIn) return null;
*
*   const updateUser = async () => {
*     // Update data via an API endpoint
*     const updateMetadata = await fetch('/api/updateMetadata', {
*       method: 'POST',
*       body: JSON.stringify({
*         role: 'admin'
*       })
*     });
*
*     // Check if the update was successful
*     if ((await updateMetadata.json()).message !== 'success') {
*       throw new Error('Error updating');
*     }
*
*     // If the update was successful, reload the user data
*     await user.reload();
*   };
*
*   return (
*     <>
*       <button onClick={updateUser}>Update your metadata</button>
*       <p>user role: {user.publicMetadata.role}</p>
*     </>
*   );
* }
* ```
*
* </Tab>
* <Tab>
*
* {@include ../../../docs/use-user.md#nextjs-02}
*
* </Tab>
* </Tabs>
*/ function useUser() {
    var _useClerkInstanceContext_telemetry;
    useAssertWrappedByClerkProvider(hookName$1);
    const user = useUserContext();
    (_useClerkInstanceContext_telemetry = useClerkInstanceContext().telemetry) === null || _useClerkInstanceContext_telemetry === void 0 ? void 0 : _useClerkInstanceContext_telemetry.record((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$telemetry$2d$wqMDWlvR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventMethodCalled"])(hookName$1));
    if (user === void 0) return {
        isLoaded: false,
        isSignedIn: void 0,
        user: void 0
    };
    if (user === null) return {
        isLoaded: true,
        isSignedIn: false,
        user: null
    };
    return {
        isLoaded: true,
        isSignedIn: true,
        user
    };
}
//#endregion
//#region src/react/hooks/useDeepEqualMemo.ts
const useDeepEqualMemoize = (value)=>{
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(value);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dequal$40$2$2e$0$2e$3$2f$node_modules$2f$dequal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dequal"])(value, ref.current)) ref.current = value;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useDeepEqualMemoize.useMemo": ()=>ref.current
    }["useDeepEqualMemoize.useMemo"], [
        ref.current
    ]);
};
/**
* @internal
*/ const useDeepEqualMemo = (factory, dependencyArray)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo(factory, useDeepEqualMemoize(dependencyArray));
};
/**
* @internal
*/ const isDeeplyEqual = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dequal$40$2$2e$0$2e$3$2f$node_modules$2f$dequal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dequal"];
//#endregion
//#region src/react/hooks/useReverification.ts
const CLERK_API_REVERIFICATION_ERROR_CODE = "session_reverification_required";
/**
*
*/ async function resolveResult(result) {
    try {
        const r = await result;
        if (r instanceof Response) return r.json();
        return r;
    } catch (e) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$error$2d$Dl9xmUf3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isClerkAPIResponseError"])(e) && e.errors.find((param)=>{
            let { code } = param;
            return code === CLERK_API_REVERIFICATION_ERROR_CODE;
        })) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$authorization$2d$errors$2d$CS1pNy8i$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverificationError"])();
        throw e;
    }
}
/**
*
*/ function createReverificationHandler(params) {
    /**
	*
	*/ function assertReverification(fetcher) {
        return async function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            let result = await resolveResult(fetcher(...args));
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$authorization$2d$errors$2d$CS1pNy8i$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReverificationHint"])(result)) {
                var _result_clerk_error_metadata, /**
				* On success resolve the pending promise
				* On cancel reject the pending promise
				*/ _params_openUIComponent;
                /**
				* Create a promise
				*/ const resolvers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$createDeferredPromise$2d$CjYZzUuU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDeferredPromise"])();
                const isValidMetadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$authorization$2d$CV9xGlIX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateReverificationConfig"])((_result_clerk_error_metadata = result.clerk_error.metadata) === null || _result_clerk_error_metadata === void 0 ? void 0 : _result_clerk_error_metadata.reverification);
                const level = isValidMetadata ? isValidMetadata().level : void 0;
                const cancel = ()=>{
                    resolvers.reject(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$error$2d$Dl9xmUf3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClerkRuntimeError"]("User cancelled attempted verification", {
                        code: "reverification_cancelled"
                    }));
                };
                const complete = ()=>{
                    resolvers.resolve(true);
                };
                if (params.onNeedsReverification === void 0) (_params_openUIComponent = params.openUIComponent) === null || _params_openUIComponent === void 0 ? void 0 : _params_openUIComponent.call(params, {
                    level,
                    afterVerification: complete,
                    afterVerificationCancelled: cancel
                });
                else params.onNeedsReverification({
                    cancel,
                    complete,
                    level
                });
                /**
				* Wait until the promise from above have been resolved or rejected
				*/ await resolvers.promise;
                /**
				* After the promise resolved successfully try the original request one more time
				*/ result = await resolveResult(fetcher(...args));
            }
            return result;
        };
    }
    return assertReverification;
}
/**
* > [!WARNING]
* >
* > Depending on the SDK you're using, this feature requires `@clerk/nextjs@6.12.7` or later, `@clerk/clerk-react@5.25.1` or later, and `@clerk/clerk-js@5.57.1` or later.
*
* The `useReverification()` hook is used to handle a session's reverification flow. If a request requires reverification, a modal will display, prompting the user to verify their credentials. Upon successful verification, the original request will automatically retry.
*
* @function
*
* @returns The `useReverification()` hook returns an array with the "enhanced" fetcher.
*
* @example
* ### Handle cancellation of the reverification process
*
* The following example demonstrates how to handle scenarios where a user cancels the reverification flow, such as closing the modal, which might result in `myData` being `null`.
*
* In the following example, `myFetcher` would be a function in your backend that fetches data from the route that requires reverification. See the [guide on how to require reverification](https://clerk.com/docs/guides/secure/reverification) for more information.
*
* ```tsx {{ filename: 'src/components/MyButton.tsx' }}
* import { useReverification } from '@clerk/clerk-react'
* import { isReverificationCancelledError } from '@clerk/clerk-react/error'
*
* type MyData = {
*   balance: number
* }
*
* export function MyButton() {
*   const fetchMyData = () => fetch('/api/balance').then(res=> res.json() as Promise<MyData>)
*   const enhancedFetcher = useReverification(fetchMyData);
*
*   const handleClick = async () => {
*     try {
*       const myData = await enhancedFetcher()
*       //     ^ is types as `MyData`
*     } catch (e) {
*       // Handle error returned from the fetcher here
*
*       // You can also handle cancellation with the following
*       if (isReverificationCancelledError(err)) {
*         // Handle the cancellation error here
*       }
*     }
*   }
*
*   return <button onClick={handleClick}>Update User</button>
* }
* ```
*/ const useReverification = (fetcher, options)=>{
    const { __internal_openReverification, telemetry } = useClerk();
    const fetcherRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(fetcher);
    const optionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(options);
    telemetry === null || telemetry === void 0 ? void 0 : telemetry.record((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$telemetry$2d$wqMDWlvR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventMethodCalled"])("useReverification", {
        onNeedsReverification: Boolean(options === null || options === void 0 ? void 0 : options.onNeedsReverification)
    }));
    useSafeLayoutEffect({
        "useReverification.useSafeLayoutEffect": ()=>{
            fetcherRef.current = fetcher;
            optionsRef.current = options;
        }
    }["useReverification.useSafeLayoutEffect"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useReverification.useCallback": function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return createReverificationHandler({
                openUIComponent: __internal_openReverification,
                telemetry,
                ...optionsRef.current
            })(fetcherRef.current)(...args);
        }
    }["useReverification.useCallback"], [
        __internal_openReverification,
        telemetry
    ]);
};
//#endregion
//#region src/react/hooks/useBillingHookEnabled.ts
/**
* @internal
*/ function useBillingHookEnabled(params) {
    const clerk = useClerkInstanceContext();
    var _params_enabled;
    const enabledFromParam = (_params_enabled = params === null || params === void 0 ? void 0 : params.enabled) !== null && _params_enabled !== void 0 ? _params_enabled : true;
    const environment = clerk.__unstable__environment;
    const user = useUserContext();
    const { organization } = useOrganizationContext();
    const isOrganization = (params === null || params === void 0 ? void 0 : params.for) === "organization";
    const billingEnabled = isOrganization ? environment === null || environment === void 0 ? void 0 : environment.commerceSettings.billing.organization.enabled : environment === null || environment === void 0 ? void 0 : environment.commerceSettings.billing.user.enabled;
    var _params_authenticated;
    const requireUserAndOrganizationWhenAuthenticated = ((_params_authenticated = params === null || params === void 0 ? void 0 : params.authenticated) !== null && _params_authenticated !== void 0 ? _params_authenticated : true) ? (isOrganization ? Boolean(organization === null || organization === void 0 ? void 0 : organization.id) : true) && Boolean(user === null || user === void 0 ? void 0 : user.id) : true;
    return billingEnabled && enabledFromParam && clerk.loaded && requireUserAndOrganizationWhenAuthenticated;
}
//#endregion
//#region src/react/hooks/createBillingPaginatedHook.tsx
/**
* A hook factory that creates paginated data fetching hooks for commerce-related resources.
* It provides a standardized way to create hooks that can fetch either user or Organization resources
* with built-in pagination support.
*
* The generated hooks handle:
* - Clerk authentication context
* - Resource-specific data fetching
* - Pagination (both traditional and infinite scroll)
* - Telemetry tracking
* - Type safety for the specific resource.
*
* @internal
*/ function createBillingPaginatedHook(param) {
    let { hookName: hookName$4, resourceType, useFetcher, options } = param;
    return function useBillingHook(params) {
        var _clerk_telemetry;
        const { for: _for, enabled: externalEnabled, ...paginationParams } = params || {};
        const safeFor = _for || "user";
        useAssertWrappedByClerkProvider(hookName$4);
        const fetchFn = useFetcher(safeFor);
        const safeValues = useWithSafeValues(paginationParams, {
            initialPage: 1,
            pageSize: 10,
            keepPreviousData: false,
            infinite: false,
            __experimental_mode: void 0
        });
        const clerk = useClerkInstanceContext();
        const user = useUserContext();
        const { organization } = useOrganizationContext();
        (_clerk_telemetry = clerk.telemetry) === null || _clerk_telemetry === void 0 ? void 0 : _clerk_telemetry.record((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$telemetry$2d$wqMDWlvR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventMethodCalled"])(hookName$4));
        const isForOrganization = safeFor === "organization";
        const billingEnabled = useBillingHookEnabled({
            for: safeFor,
            enabled: externalEnabled,
            authenticated: !(options === null || options === void 0 ? void 0 : options.unauthenticated)
        });
        const hookParams = typeof paginationParams === "undefined" ? void 0 : {
            initialPage: safeValues.initialPage,
            pageSize: safeValues.pageSize,
            ...(options === null || options === void 0 ? void 0 : options.unauthenticated) ? {} : isForOrganization ? {
                orgId: organization === null || organization === void 0 ? void 0 : organization.id
            } : {}
        };
        const isEnabled = !!hookParams && clerk.loaded && !!billingEnabled;
        return usePagesOrInfinite({
            fetcher: fetchFn,
            config: {
                keepPreviousData: safeValues.keepPreviousData,
                infinite: safeValues.infinite,
                enabled: isEnabled,
                ...(options === null || options === void 0 ? void 0 : options.unauthenticated) ? {} : {
                    isSignedIn: user !== null
                },
                __experimental_mode: safeValues.__experimental_mode,
                initialPage: safeValues.initialPage,
                pageSize: safeValues.pageSize
            },
            keys: createCacheKeys({
                stablePrefix: resourceType,
                authenticated: !(options === null || options === void 0 ? void 0 : options.unauthenticated),
                tracked: (options === null || options === void 0 ? void 0 : options.unauthenticated) ? {
                    for: safeFor
                } : {
                    userId: user === null || user === void 0 ? void 0 : user.id,
                    ...isForOrganization ? {
                        ["_orgId"]: organization === null || organization === void 0 ? void 0 : organization.id
                    } : {}
                },
                untracked: {
                    args: hookParams
                }
            })
        });
    };
}
//#endregion
//#region src/react/hooks/useStatements.tsx
/**
* @internal
*/ const useStatements = createBillingPaginatedHook({
    hookName: "useStatements",
    resourceType: STABLE_KEYS.STATEMENTS_KEY,
    useFetcher: ()=>{
        const clerk = useClerkInstanceContext();
        if (clerk.loaded) return clerk.billing.getStatements;
    }
});
//#endregion
//#region src/react/hooks/usePaymentAttempts.tsx
/**
* @internal
*/ const usePaymentAttempts = createBillingPaginatedHook({
    hookName: "usePaymentAttempts",
    resourceType: STABLE_KEYS.PAYMENT_ATTEMPTS_KEY,
    useFetcher: ()=>{
        const clerk = useClerkInstanceContext();
        if (clerk.loaded) return clerk.billing.getPaymentAttempts;
    }
});
//#endregion
//#region src/react/hooks/usePaymentMethods.tsx
/**
* @internal
*/ const usePaymentMethods = createBillingPaginatedHook({
    hookName: "usePaymentMethods",
    resourceType: STABLE_KEYS.PAYMENT_METHODS_KEY,
    useFetcher: (resource)=>{
        const { organization } = useOrganizationContext();
        const user = useUserContext();
        if (resource === "organization") return organization === null || organization === void 0 ? void 0 : organization.getPaymentMethods;
        return user === null || user === void 0 ? void 0 : user.getPaymentMethods;
    }
});
//#endregion
//#region src/react/hooks/usePlans.tsx
/**
* @internal
*/ const usePlans = createBillingPaginatedHook({
    hookName: "usePlans",
    resourceType: STABLE_KEYS.PLANS_KEY,
    useFetcher: (_for)=>{
        const clerk = useClerkInstanceContext();
        if (!clerk.loaded) return;
        return (params)=>clerk.billing.getPlans({
                ...params,
                for: _for
            });
    },
    options: {
        unauthenticated: true
    }
});
//#endregion
//#region src/react/hooks/useSubscription.shared.ts
function useSubscriptionCacheKeys(params) {
    const { userId, orgId, for: forType } = params;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSubscriptionCacheKeys.useMemo": ()=>{
            const safeOrgId = forType === "organization" ? orgId : void 0;
            return createCacheKeys({
                stablePrefix: STABLE_KEYS.SUBSCRIPTION_KEY,
                authenticated: true,
                tracked: {
                    userId,
                    orgId: safeOrgId
                },
                untracked: {
                    args: {
                        orgId: safeOrgId
                    }
                }
            });
        }
    }["useSubscriptionCacheKeys.useMemo"], [
        userId,
        orgId,
        forType
    ]);
}
//#endregion
//#region src/react/hooks/useSubscription.swr.tsx
const hookName = "useSubscription";
/**
* This is the existing implementation of useSubscription using SWR.
* It is kept here for backwards compatibility until our next major version.
*
* @internal
*/ function useSubscription(params) {
    var _clerk_telemetry;
    useAssertWrappedByClerkProvider(hookName);
    const clerk = useClerkInstanceContext();
    const user = useUserContext();
    const { organization } = useOrganizationContext();
    const environment = clerk.__unstable__environment;
    (_clerk_telemetry = clerk.telemetry) === null || _clerk_telemetry === void 0 ? void 0 : _clerk_telemetry.record((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$telemetry$2d$wqMDWlvR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventMethodCalled"])(hookName));
    const billingEnabled = (params === null || params === void 0 ? void 0 : params.for) === "organization" ? environment === null || environment === void 0 ? void 0 : environment.commerceSettings.billing.organization.enabled : environment === null || environment === void 0 ? void 0 : environment.commerceSettings.billing.user.enabled;
    var _params_enabled;
    const isEnabled = ((_params_enabled = params === null || params === void 0 ? void 0 : params.enabled) !== null && _params_enabled !== void 0 ? _params_enabled : true) && billingEnabled;
    const { queryKey } = useSubscriptionCacheKeys({
        userId: user === null || user === void 0 ? void 0 : user.id,
        orgId: organization === null || organization === void 0 ? void 0 : organization.id,
        for: params === null || params === void 0 ? void 0 : params.for
    });
    const swr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$4_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(isEnabled ? {
        queryKey
    } : null, {
        "useSubscription.useSWR[swr]": (param)=>{
            let { queryKey: queryKey$1 } = param;
            const args = queryKey$1[3].args;
            if (queryKey$1[2].userId) return clerk.billing.getSubscription(args);
            return null;
        }
    }["useSubscription.useSWR[swr]"], {
        dedupingInterval: 1e3 * 60,
        keepPreviousData: params === null || params === void 0 ? void 0 : params.keepPreviousData
    });
    const revalidate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSubscription.useCallback[revalidate]": ()=>{
            swr.mutate();
        }
    }["useSubscription.useCallback[revalidate]"], [
        swr
    ]);
    return {
        data: swr.data,
        error: swr.error,
        isLoading: swr.isLoading,
        isFetching: swr.isValidating,
        revalidate
    };
}
//#endregion
//#region src/react/hooks/useCheckout.ts
/**
* @function
*
* @param [options] - An object containing the configuration for the checkout flow.
*
* **Required** if the hook is used without a `<CheckoutProvider />` wrapping the component tree.
*/ const useCheckout = (options)=>{
    const contextOptions = useCheckoutContext();
    const { for: forOrganization, planId, planPeriod } = options || contextOptions;
    const clerk = useClerk();
    const { organization } = useOrganizationContext();
    const { isLoaded, user } = useUser();
    if (!isLoaded) throw new Error("Clerk: Ensure that `useCheckout` is inside a component wrapped with `<ClerkLoaded />`.");
    if (!user) throw new Error("Clerk: Ensure that `useCheckout` is inside a component wrapped with `<SignedIn />`.");
    if (forOrganization === "organization" && !organization) throw new Error("Clerk: Ensure your flow checks for an active organization. Retrieve `orgId` from `useAuth()` and confirm it is defined. For SSR, see: https://clerk.com/docs/reference/backend/types/auth-object#how-to-access-the-auth-object");
    const manager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCheckout.useMemo[manager]": ()=>clerk.__experimental_checkout({
                planId,
                planPeriod,
                for: forOrganization
            })
    }["useCheckout.useMemo[manager]"], [
        user.id,
        organization === null || organization === void 0 ? void 0 : organization.id,
        planId,
        planPeriod,
        forOrganization
    ]);
    const managerProperties = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])({
        "useCheckout.useSyncExternalStore[managerProperties]": (cb)=>manager.subscribe(cb)
    }["useCheckout.useSyncExternalStore[managerProperties]"], {
        "useCheckout.useSyncExternalStore[managerProperties]": ()=>manager.getState()
    }["useCheckout.useSyncExternalStore[managerProperties]"], {
        "useCheckout.useSyncExternalStore[managerProperties]": ()=>manager.getState()
    }["useCheckout.useSyncExternalStore[managerProperties]"]);
    return {
        checkout: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                "useCheckout.useMemo": ()=>{
                    if (!managerProperties.checkout) return {
                        id: null,
                        externalClientSecret: null,
                        externalGatewayId: null,
                        totals: null,
                        isImmediatePlanChange: null,
                        planPeriod: null,
                        plan: null,
                        paymentMethod: null,
                        freeTrialEndsAt: null,
                        payer: null,
                        needsPaymentMethod: null,
                        planPeriodStart: null
                    };
                    const { reload, confirm, pathRoot, ...rest } = managerProperties.checkout;
                    return rest;
                }
            }["useCheckout.useMemo"], [
                managerProperties.checkout
            ]),
            getState: manager.getState,
            start: manager.start,
            confirm: manager.confirm,
            clear: manager.clear,
            finalize: manager.finalize,
            isStarting: managerProperties.isStarting,
            isConfirming: managerProperties.isConfirming,
            error: managerProperties.error,
            status: managerProperties.status,
            fetchStatus: managerProperties.fetchStatus
        }
    };
};
//#endregion
//#region src/react/hooks/useStatementQuery.shared.ts
function useStatementQueryCacheKeys(params) {
    const { statementId, userId, orgId, for: forType } = params;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useStatementQueryCacheKeys.useMemo": ()=>{
            return createCacheKeys({
                stablePrefix: INTERNAL_STABLE_KEYS.BILLING_STATEMENTS_KEY,
                authenticated: true,
                tracked: {
                    statementId,
                    forType,
                    userId,
                    orgId
                },
                untracked: {
                    args: {
                        id: statementId !== null && statementId !== void 0 ? statementId : void 0,
                        orgId: orgId !== null && orgId !== void 0 ? orgId : void 0
                    }
                }
            });
        }
    }["useStatementQueryCacheKeys.useMemo"], [
        statementId,
        forType,
        userId,
        orgId
    ]);
}
//#endregion
//#region src/react/hooks/useStatementQuery.swr.tsx
/**
* This is the existing implementation of useStatementQuery using SWR.
* It is kept here for backwards compatibility until our next major version.
*
* @internal
*/ function __internal_useStatementQuery() {
    let params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { statementId = null, enabled = true, keepPreviousData = false, for: forType = "user" } = params;
    const clerk = useClerkInstanceContext();
    const user = useUserContext();
    const { organization } = useOrganizationContext();
    var _organization_id;
    const organizationId = forType === "organization" ? (_organization_id = organization === null || organization === void 0 ? void 0 : organization.id) !== null && _organization_id !== void 0 ? _organization_id : null : null;
    var _user_id;
    const { queryKey } = useStatementQueryCacheKeys({
        statementId,
        userId: (_user_id = user === null || user === void 0 ? void 0 : user.id) !== null && _user_id !== void 0 ? _user_id : null,
        orgId: organizationId,
        for: forType
    });
    const swr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$4_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(Boolean(statementId) && enabled && (forType !== "organization" || Boolean(organizationId)) ? queryKey : null, {
        "__internal_useStatementQuery.useSWR[swr]": ()=>{
            if (!statementId) throw new Error("statementId is required to fetch a statement");
            return clerk.billing.getStatement({
                id: statementId,
                orgId: organizationId !== null && organizationId !== void 0 ? organizationId : void 0
            });
        }
    }["__internal_useStatementQuery.useSWR[swr]"], {
        dedupingInterval: 1e3 * 60,
        keepPreviousData
    });
    var _swr_error;
    return {
        data: swr.data,
        error: (_swr_error = swr.error) !== null && _swr_error !== void 0 ? _swr_error : null,
        isLoading: swr.isLoading,
        isFetching: swr.isValidating
    };
}
//#endregion
//#region src/react/hooks/usePlanDetailsQuery.shared.ts
function usePlanDetailsQueryCacheKeys(params) {
    const { planId } = params;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "usePlanDetailsQueryCacheKeys.useMemo": ()=>{
            return createCacheKeys({
                stablePrefix: INTERNAL_STABLE_KEYS.BILLING_PLANS_KEY,
                authenticated: false,
                tracked: {
                    planId: planId !== null && planId !== void 0 ? planId : null
                },
                untracked: {
                    args: {
                        id: planId !== null && planId !== void 0 ? planId : void 0
                    }
                }
            });
        }
    }["usePlanDetailsQueryCacheKeys.useMemo"], [
        planId
    ]);
}
//#endregion
//#region src/react/hooks/usePlanDetailsQuery.swr.tsx
/**
* This is the existing implementation of usePlanDetailsQuery using SWR.
* It is kept here for backwards compatibility until our next major version.
*
* @internal
*/ function usePlanDetailsQuery() {
    let params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { planId, initialPlan = null, enabled = true, keepPreviousData = true } = params;
    const clerk = useClerkInstanceContext();
    var _ref;
    const targetPlanId = (_ref = planId !== null && planId !== void 0 ? planId : initialPlan === null || initialPlan === void 0 ? void 0 : initialPlan.id) !== null && _ref !== void 0 ? _ref : null;
    const { queryKey } = usePlanDetailsQueryCacheKeys({
        planId: targetPlanId
    });
    const swr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$4_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(Boolean(targetPlanId) && enabled ? queryKey : null, {
        "usePlanDetailsQuery.useSWR[swr]": ()=>{
            if (!targetPlanId) throw new Error("planId is required to fetch plan details");
            return clerk.billing.getPlan({
                id: targetPlanId
            });
        }
    }["usePlanDetailsQuery.useSWR[swr]"], {
        dedupingInterval: 1e3 * 60,
        keepPreviousData,
        fallbackData: initialPlan !== null && initialPlan !== void 0 ? initialPlan : void 0
    });
    var _swr_error;
    return {
        data: swr.data,
        error: (_swr_error = swr.error) !== null && _swr_error !== void 0 ? _swr_error : null,
        isLoading: swr.isLoading,
        isFetching: swr.isValidating
    };
}
//#endregion
//#region src/react/hooks/usePaymentAttemptQuery.shared.ts
function usePaymentAttemptQueryCacheKeys(params) {
    const { paymentAttemptId, userId, orgId, for: forType } = params;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "usePaymentAttemptQueryCacheKeys.useMemo": ()=>{
            return createCacheKeys({
                stablePrefix: INTERNAL_STABLE_KEYS.PAYMENT_ATTEMPT_KEY,
                authenticated: true,
                tracked: {
                    paymentAttemptId,
                    forType,
                    userId,
                    orgId
                },
                untracked: {
                    args: {
                        id: paymentAttemptId !== null && paymentAttemptId !== void 0 ? paymentAttemptId : void 0,
                        orgId: orgId !== null && orgId !== void 0 ? orgId : void 0
                    }
                }
            });
        }
    }["usePaymentAttemptQueryCacheKeys.useMemo"], [
        paymentAttemptId,
        forType,
        userId,
        orgId
    ]);
}
//#endregion
//#region src/react/hooks/usePaymentAttemptQuery.swr.tsx
/**
* This is the existing implementation of usePaymentAttemptQuery using SWR.
* It is kept here for backwards compatibility until our next major version.
*
* @internal
*/ function __internal_usePaymentAttemptQuery(params) {
    const { paymentAttemptId, enabled = true, keepPreviousData = false, for: forType = "user" } = params;
    const clerk = useClerkInstanceContext();
    const user = useUserContext();
    const { organization } = useOrganizationContext();
    var _organization_id;
    const organizationId = forType === "organization" ? (_organization_id = organization === null || organization === void 0 ? void 0 : organization.id) !== null && _organization_id !== void 0 ? _organization_id : null : null;
    var _user_id;
    const { queryKey } = usePaymentAttemptQueryCacheKeys({
        paymentAttemptId,
        userId: (_user_id = user === null || user === void 0 ? void 0 : user.id) !== null && _user_id !== void 0 ? _user_id : null,
        orgId: organizationId,
        for: forType
    });
    const swr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$4_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(Boolean(paymentAttemptId) && enabled && (forType !== "organization" || Boolean(organizationId)) ? {
        queryKey
    } : null, {
        "__internal_usePaymentAttemptQuery.useSWR[swr]": (param)=>{
            let { queryKey: queryKey$1 } = param;
            const args = queryKey$1[3].args;
            return clerk.billing.getPaymentAttempt(args);
        }
    }["__internal_usePaymentAttemptQuery.useSWR[swr]"], {
        dedupingInterval: 1e3 * 60,
        keepPreviousData
    });
    var _swr_error;
    return {
        data: swr.data,
        error: (_swr_error = swr.error) !== null && _swr_error !== void 0 ? _swr_error : null,
        isLoading: swr.isLoading,
        isFetching: swr.isValidating
    };
}
//#endregion
//#region src/react/stripe-react/utils.ts
const usePrevious = (value)=>{
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePrevious.useEffect": ()=>{
            ref.current = value;
        }
    }["usePrevious.useEffect"], [
        value
    ]);
    return ref.current;
};
const useAttachEvent = (element, event, cb)=>{
    const cbDefined = !!cb;
    const cbRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(cb);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAttachEvent.useEffect": ()=>{
            cbRef.current = cb;
        }
    }["useAttachEvent.useEffect"], [
        cb
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAttachEvent.useEffect": ()=>{
            if (!cbDefined || !element) return ({
                "useAttachEvent.useEffect": ()=>{}
            })["useAttachEvent.useEffect"];
            const decoratedCb = {
                "useAttachEvent.useEffect.decoratedCb": function() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    if (cbRef.current) cbRef.current(...args);
                }
            }["useAttachEvent.useEffect.decoratedCb"];
            element.on(event, decoratedCb);
            return ({
                "useAttachEvent.useEffect": ()=>{
                    element.off(event, decoratedCb);
                }
            })["useAttachEvent.useEffect"];
        }
    }["useAttachEvent.useEffect"], [
        cbDefined,
        event,
        element,
        cbRef
    ]);
};
//#endregion
//#region src/react/stripe-react/index.tsx
const ElementsContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(null);
ElementsContext.displayName = "ElementsContext";
const parseElementsContext = (ctx, useCase)=>{
    if (!ctx) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(useCase, " in an <Elements> provider."));
    return ctx;
};
/**
* The `Elements` provider allows you to use [Element components](https://stripe.com/docs/stripe-js/react#element-components) and access the [Stripe object](https://stripe.com/docs/js/initializing) in any nested component.
* Render an `Elements` provider at the root of your React app so that it is available everywhere you need it.
*
* To use the `Elements` provider, call `loadStripe` from `@stripe/stripe-js` with your publishable key.
* The `loadStripe` function will asynchronously load the Stripe.js script and initialize a `Stripe` object.
* Pass the returned `Promise` to `Elements`.
*
* @docs https://stripe.com/docs/stripe-js/react#elements-provider
*/ const Elements = (param)=>{
    let { stripe: rawStripeProp, options, children } = param;
    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useMemo[parsed]": ()=>parseStripeProp(rawStripeProp)
    }["useMemo[parsed]"], [
        rawStripeProp
    ]);
    const [ctx, setContext] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(()=>({
            stripe: parsed.tag === "sync" ? parsed.stripe : null,
            elements: parsed.tag === "sync" ? parsed.stripe.elements(options) : null
        }));
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        let isMounted = true;
        const safeSetContext = (stripe)=>{
            setContext((ctx$1)=>{
                if (ctx$1.stripe) return ctx$1;
                return {
                    stripe,
                    elements: stripe.elements(options)
                };
            });
        };
        if (parsed.tag === "async" && !ctx.stripe) parsed.stripePromise.then((stripe)=>{
            if (stripe && isMounted) safeSetContext(stripe);
        });
        else if (parsed.tag === "sync" && !ctx.stripe) safeSetContext(parsed.stripe);
        return ()=>{
            isMounted = false;
        };
    }, [
        parsed,
        ctx,
        options
    ]);
    const prevStripe = usePrevious(rawStripeProp);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (prevStripe !== null && prevStripe !== rawStripeProp) console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.");
    }, [
        prevStripe,
        rawStripeProp
    ]);
    const prevOptions = usePrevious(options);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (!ctx.elements) return;
        const updates = extractAllowedOptionsUpdates(options, prevOptions, [
            "clientSecret",
            "fonts"
        ]);
        if (updates) ctx.elements.update(updates);
    }, [
        options,
        prevOptions,
        ctx.elements
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ElementsContext.Provider, {
        value: ctx
    }, children);
};
const useElementsContextWithUseCase = (useCaseMessage)=>{
    return parseElementsContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(ElementsContext), useCaseMessage);
};
const useElements = ()=>{
    const { elements } = useElementsContextWithUseCase("calls useElements()");
    return elements;
};
const INVALID_STRIPE_ERROR = "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.";
const validateStripe = function(maybeStripe) {
    let errorMsg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : INVALID_STRIPE_ERROR;
    if (maybeStripe === null || isStripe(maybeStripe)) return maybeStripe;
    throw new Error(errorMsg);
};
const parseStripeProp = function(raw) {
    let errorMsg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : INVALID_STRIPE_ERROR;
    if (isPromise(raw)) return {
        tag: "async",
        stripePromise: Promise.resolve(raw).then((result)=>validateStripe(result, errorMsg))
    };
    const stripe = validateStripe(raw, errorMsg);
    if (stripe === null) return {
        tag: "empty"
    };
    return {
        tag: "sync",
        stripe
    };
};
const isUnknownObject = (raw)=>{
    return raw !== null && typeof raw === "object";
};
const isPromise = (raw)=>{
    return isUnknownObject(raw) && typeof raw.then === "function";
};
const isStripe = (raw)=>{
    return isUnknownObject(raw) && typeof raw.elements === "function" && typeof raw.createToken === "function" && typeof raw.createPaymentMethod === "function" && typeof raw.confirmCardPayment === "function";
};
const extractAllowedOptionsUpdates = (options, prevOptions, immutableKeys)=>{
    if (!isUnknownObject(options)) return null;
    return Object.keys(options).reduce((newOptions, key)=>{
        const isUpdated = !isUnknownObject(prevOptions) || !isEqual(options[key], prevOptions[key]);
        if (immutableKeys.includes(key)) {
            if (isUpdated) console.warn("Unsupported prop change: options.".concat(key, " is not a mutable property."));
            return newOptions;
        }
        if (!isUpdated) return newOptions;
        return {
            ...newOptions || {},
            [key]: options[key]
        };
    }, null);
};
const PLAIN_OBJECT_STR = "[object Object]";
const isEqual = (left, right)=>{
    if (!isUnknownObject(left) || !isUnknownObject(right)) return left === right;
    const leftArray = Array.isArray(left);
    if (leftArray !== Array.isArray(right)) return false;
    const leftPlainObject = Object.prototype.toString.call(left) === PLAIN_OBJECT_STR;
    if (leftPlainObject !== (Object.prototype.toString.call(right) === PLAIN_OBJECT_STR)) return false;
    if (!leftPlainObject && !leftArray) return left === right;
    const leftKeys = Object.keys(left);
    const rightKeys = Object.keys(right);
    if (leftKeys.length !== rightKeys.length) return false;
    const keySet = {};
    for(let i = 0; i < leftKeys.length; i += 1)keySet[leftKeys[i]] = true;
    for(let i = 0; i < rightKeys.length; i += 1)keySet[rightKeys[i]] = true;
    const allKeys = Object.keys(keySet);
    if (allKeys.length !== leftKeys.length) return false;
    const l = left;
    const r = right;
    const pred = (key)=>{
        return isEqual(l[key], r[key]);
    };
    return allKeys.every(pred);
};
const useStripe = ()=>{
    const { stripe } = useElementsOrCheckoutSdkContextWithUseCase("calls useStripe()");
    return stripe;
};
const useElementsOrCheckoutSdkContextWithUseCase = (useCaseString)=>{
    return parseElementsContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(ElementsContext), useCaseString);
};
const capitalized = (str)=>str.charAt(0).toUpperCase() + str.slice(1);
const createElementComponent = (type, isServer)=>{
    const displayName = "".concat(capitalized(type), "Element");
    const ClientElement = (param)=>{
        let { id, className, fallback, options = {}, onBlur, onFocus, onReady, onChange, onEscape, onClick, onLoadError, onLoaderStart, onNetworksChange, onConfirm, onCancel, onShippingAddressChange, onShippingRateChange } = param;
        const ctx = useElementsOrCheckoutSdkContextWithUseCase("mounts <".concat(displayName, ">"));
        const elements = "elements" in ctx ? ctx.elements : null;
        const [element, setElement] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
        const elementRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
        const domNode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
        const [isReady, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
        useAttachEvent(element, "blur", onBlur);
        useAttachEvent(element, "focus", onFocus);
        useAttachEvent(element, "escape", onEscape);
        useAttachEvent(element, "click", onClick);
        useAttachEvent(element, "loaderror", onLoadError);
        useAttachEvent(element, "loaderstart", onLoaderStart);
        useAttachEvent(element, "networkschange", onNetworksChange);
        useAttachEvent(element, "confirm", onConfirm);
        useAttachEvent(element, "cancel", onCancel);
        useAttachEvent(element, "shippingaddresschange", onShippingAddressChange);
        useAttachEvent(element, "shippingratechange", onShippingRateChange);
        useAttachEvent(element, "change", onChange);
        let readyCallback;
        if (onReady) readyCallback = ()=>{
            setReady(true);
            onReady(element);
        };
        useAttachEvent(element, "ready", readyCallback);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useLayoutEffect({
            "createElementComponent.ClientElement.useLayoutEffect": ()=>{
                if (elementRef.current === null && domNode.current !== null && elements) {
                    let newElement = null;
                    if (elements) newElement = elements.create(type, options);
                    elementRef.current = newElement;
                    setElement(newElement);
                    if (newElement) newElement.mount(domNode.current);
                }
            }
        }["createElementComponent.ClientElement.useLayoutEffect"], [
            elements,
            options
        ]);
        const prevOptions = usePrevious(options);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
            "createElementComponent.ClientElement.useEffect": ()=>{
                if (!elementRef.current) return;
                const updates = extractAllowedOptionsUpdates(options, prevOptions, [
                    "paymentRequest"
                ]);
                if (updates && "update" in elementRef.current) elementRef.current.update(updates);
            }
        }["createElementComponent.ClientElement.useEffect"], [
            options,
            prevOptions
        ]);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useLayoutEffect({
            "createElementComponent.ClientElement.useLayoutEffect": ()=>{
                return ({
                    "createElementComponent.ClientElement.useLayoutEffect": ()=>{
                        if (elementRef.current && typeof elementRef.current.destroy === "function") try {
                            elementRef.current.destroy();
                            elementRef.current = null;
                        } catch (e) {}
                    }
                })["createElementComponent.ClientElement.useLayoutEffect"];
            }
        }["createElementComponent.ClientElement.useLayoutEffect"], []);
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, !isReady && fallback, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            id,
            style: {
                height: isReady ? "unset" : "0px",
                visibility: isReady ? "visible" : "hidden"
            },
            className,
            ref: domNode
        }));
    };
    const ServerElement = (props)=>{
        useElementsOrCheckoutSdkContextWithUseCase("mounts <".concat(displayName, ">"));
        const { id, className } = props;
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            id,
            className
        });
    };
    const Element = isServer ? ServerElement : ClientElement;
    Element.displayName = displayName;
    Element.__elementType = type;
    return Element;
};
const PaymentElement$1 = createElementComponent("payment", typeof window === "undefined");
//#endregion
//#region src/react/billing/useInitializePaymentMethod.swr.tsx
/**
* This is the existing implementation of the payment method initializer using SWR.
* It is kept here for backwards compatibility until our next major version.
*
* @internal
*/ function useInitializePaymentMethod(options) {
    const { for: forType = "user" } = options !== null && options !== void 0 ? options : {};
    const { organization } = useOrganizationContext();
    const user = useUserContext();
    const resource = forType === "organization" ? organization : user;
    const { data, trigger } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$4_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$mutation$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((resource === null || resource === void 0 ? void 0 : resource.id) ? {
        key: "billing-payment-method-initialize",
        resourceId: resource.id,
        for: forType
    } : null, {
        "useInitializePaymentMethod.useSWRMutation": ()=>{
            return resource === null || resource === void 0 ? void 0 : resource.initializePaymentMethod({
                gateway: "stripe"
            });
        }
    }["useInitializePaymentMethod.useSWRMutation"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInitializePaymentMethod.useEffect": ()=>{
            if (!(resource === null || resource === void 0 ? void 0 : resource.id)) return;
            trigger().catch({
                "useInitializePaymentMethod.useEffect": ()=>{}
            }["useInitializePaymentMethod.useEffect"]);
        }
    }["useInitializePaymentMethod.useEffect"], [
        resource === null || resource === void 0 ? void 0 : resource.id,
        trigger
    ]);
    return {
        initializedPaymentMethod: data,
        initializePaymentMethod: trigger
    };
}
//#endregion
//#region src/react/billing/useStripeClerkLibs.swr.tsx
/**
* This is the existing implementation of the Stripe libraries loader using SWR.
* It is kept here for backwards compatibility until our next major version.
*
* @internal
*/ function useStripeClerkLibs() {
    const clerk = useClerk();
    var _useSWR_data;
    return (_useSWR_data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$4_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])("clerk-stripe-sdk", {
        "useStripeClerkLibs.useSWR": async ()=>{
            return {
                loadStripe: await clerk.__internal_loadStripeJs()
            };
        }
    }["useStripeClerkLibs.useSWR"], {
        keepPreviousData: true,
        revalidateOnFocus: false,
        dedupingInterval: Infinity
    }).data) !== null && _useSWR_data !== void 0 ? _useSWR_data : null;
}
//#endregion
//#region src/react/billing/useStripeLoader.swr.tsx
/**
* This is the existing implementation of the Stripe instance loader using SWR.
* It is kept here for backwards compatibility until our next major version.
*
* @internal
*/ function useStripeLoader(options) {
    const { stripeClerkLibs, externalGatewayId, stripePublishableKey } = options;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$3$2e$4_react$40$19$2e$1$2e$0$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(stripeClerkLibs && externalGatewayId && stripePublishableKey ? {
        key: "stripe-sdk",
        externalGatewayId,
        stripePublishableKey
    } : null, {
        "useStripeLoader.useSWR": (param)=>{
            let { stripePublishableKey: stripePublishableKey$1, externalGatewayId: externalGatewayId$1 } = param;
            return stripeClerkLibs === null || stripeClerkLibs === void 0 ? void 0 : stripeClerkLibs.loadStripe(stripePublishableKey$1, {
                stripeAccount: externalGatewayId$1
            });
        }
    }["useStripeLoader.useSWR"], {
        keepPreviousData: true,
        revalidateOnFocus: false,
        dedupingInterval: 1e3 * 60
    }).data;
}
//#endregion
//#region src/react/billing/payment-element.tsx
const useInternalEnvironment = ()=>{
    return useClerk().__unstable__environment;
};
const useLocalization = ()=>{
    const clerk = useClerk();
    let locale = "en";
    try {
        var _clerk___internal_getOption;
        locale = ((_clerk___internal_getOption = clerk.__internal_getOption("localization")) === null || _clerk___internal_getOption === void 0 ? void 0 : _clerk___internal_getOption.locale) || "en";
    } catch (e) {}
    return locale.split("-")[0];
};
const usePaymentSourceUtils = function() {
    let forResource = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "user";
    const stripeClerkLibs = useStripeClerkLibs();
    const environment = useInternalEnvironment();
    const { initializedPaymentMethod, initializePaymentMethod } = useInitializePaymentMethod({
        for: forResource
    });
    var _environment_commerceSettings_billing_stripePublishableKey;
    const stripePublishableKey = (_environment_commerceSettings_billing_stripePublishableKey = environment === null || environment === void 0 ? void 0 : environment.commerceSettings.billing.stripePublishableKey) !== null && _environment_commerceSettings_billing_stripePublishableKey !== void 0 ? _environment_commerceSettings_billing_stripePublishableKey : void 0;
    return {
        stripe: useStripeLoader({
            stripeClerkLibs,
            externalGatewayId: initializedPaymentMethod === null || initializedPaymentMethod === void 0 ? void 0 : initializedPaymentMethod.externalGatewayId,
            stripePublishableKey
        }),
        initializePaymentMethod,
        externalClientSecret: initializedPaymentMethod === null || initializedPaymentMethod === void 0 ? void 0 : initializedPaymentMethod.externalClientSecret,
        paymentMethodOrder: initializedPaymentMethod === null || initializedPaymentMethod === void 0 ? void 0 : initializedPaymentMethod.paymentMethodOrder
    };
};
const [PaymentElementContext, usePaymentElementContext] = createContextAndHook("PaymentElementContext");
const [StripeUtilsContext, useStripeUtilsContext] = createContextAndHook("StripeUtilsContext");
const ValidateStripeUtils = (param)=>{
    let { children } = param;
    const stripe = useStripe();
    const elements = useElements();
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(StripeUtilsContext.Provider, {
        value: {
            value: {
                stripe,
                elements
            }
        }
    }, children);
};
const DummyStripeUtils = (param)=>{
    let { children } = param;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(StripeUtilsContext.Provider, {
        value: {
            value: {}
        }
    }, children);
};
const PropsProvider = (param)=>{
    let { children, ...props } = param;
    const utils = usePaymentSourceUtils(props.for);
    const [isPaymentElementReady, setIsPaymentElementReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(PaymentElementContext.Provider, {
        value: {
            value: {
                ...props,
                ...utils,
                setIsPaymentElementReady,
                isPaymentElementReady
            }
        }
    }, children);
};
const PaymentElementProvider = (param)=>{
    let { children, ...props } = param;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(PropsProvider, props, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(PaymentElementInternalRoot, null, children));
};
const PaymentElementInternalRoot = (props)=>{
    const { stripe, externalClientSecret, stripeAppearance } = usePaymentElementContext();
    const locale = useLocalization();
    if (stripe && externalClientSecret) return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Elements, {
        key: externalClientSecret,
        stripe,
        options: {
            loader: "never",
            clientSecret: externalClientSecret,
            appearance: {
                variables: stripeAppearance
            },
            locale
        }
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ValidateStripeUtils, null, props.children));
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(DummyStripeUtils, null, props.children);
};
const PaymentElement = (param)=>{
    let { fallback } = param;
    const { setIsPaymentElementReady, paymentMethodOrder, checkout, stripe, externalClientSecret, paymentDescription, for: _for } = usePaymentElementContext();
    const environment = useInternalEnvironment();
    const applePay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PaymentElement.useMemo[applePay]": ()=>{
            var _checkout_totals_totalDueNow;
            if (!checkout || !checkout.totals || !checkout.plan) return;
            return {
                recurringPaymentRequest: {
                    paymentDescription: paymentDescription || "",
                    managementURL: _for === "organization" ? (environment === null || environment === void 0 ? void 0 : environment.displayConfig.organizationProfileUrl) || "" : (environment === null || environment === void 0 ? void 0 : environment.displayConfig.userProfileUrl) || "",
                    regularBilling: {
                        amount: ((_checkout_totals_totalDueNow = checkout.totals.totalDueNow) === null || _checkout_totals_totalDueNow === void 0 ? void 0 : _checkout_totals_totalDueNow.amount) || checkout.totals.grandTotal.amount,
                        label: checkout.plan.name,
                        recurringPaymentIntervalUnit: checkout.planPeriod === "annual" ? "year" : "month"
                    }
                }
            };
        }
    }["PaymentElement.useMemo[applePay]"], [
        checkout,
        paymentDescription,
        _for,
        environment
    ]);
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PaymentElement.useMemo[options]": ()=>{
            return {
                layout: {
                    type: "tabs",
                    defaultCollapsed: false
                },
                paymentMethodOrder,
                applePay
            };
        }
    }["PaymentElement.useMemo[options]"], [
        applePay,
        paymentMethodOrder
    ]);
    const onReady = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PaymentElement.useCallback[onReady]": ()=>{
            setIsPaymentElementReady(true);
        }
    }["PaymentElement.useCallback[onReady]"], [
        setIsPaymentElementReady
    ]);
    if (!stripe || !externalClientSecret) return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, fallback);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(PaymentElement$1, {
        fallback,
        onReady,
        options
    });
};
const throwLibsMissingError = ()=>{
    throw new Error("Clerk: Unable to submit, Stripe libraries are not yet loaded. Be sure to check `isFormReady` before calling `submit`.");
};
const usePaymentElement = ()=>{
    const { isPaymentElementReady, initializePaymentMethod } = usePaymentElementContext();
    const { stripe, elements } = useStripeUtilsContext();
    const { externalClientSecret } = usePaymentElementContext();
    const submit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePaymentElement.useCallback[submit]": async ()=>{
            if (!stripe || !elements) return throwLibsMissingError();
            const { setupIntent, error } = await stripe.confirmSetup({
                elements,
                confirmParams: {
                    return_url: window.location.href
                },
                redirect: "if_required"
            });
            if (error) return {
                data: null,
                error: {
                    gateway: "stripe",
                    error: {
                        code: error.code,
                        message: error.message,
                        type: error.type
                    }
                }
            };
            return {
                data: {
                    gateway: "stripe",
                    paymentToken: setupIntent.payment_method
                },
                error: null
            };
        }
    }["usePaymentElement.useCallback[submit]"], [
        stripe,
        elements
    ]);
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePaymentElement.useCallback[reset]": async ()=>{
            if (!stripe || !elements) return throwLibsMissingError();
            await initializePaymentMethod();
        }
    }["usePaymentElement.useCallback[reset]"], [
        stripe,
        elements,
        initializePaymentMethod
    ]);
    const isProviderReady = Boolean(stripe && externalClientSecret);
    if (!isProviderReady) return {
        submit: throwLibsMissingError,
        reset: throwLibsMissingError,
        isFormReady: false,
        provider: void 0,
        isProviderReady: false
    };
    return {
        submit,
        reset,
        isFormReady: isPaymentElementReady,
        provider: {
            name: "stripe"
        },
        isProviderReady
    };
};
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/runtimeEnvironment-BB2sO-19.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/utils/runtimeEnvironment.ts
__turbopack_context__.s([
    "isDevelopmentEnvironment",
    ()=>isDevelopmentEnvironment,
    "isProductionEnvironment",
    ()=>isProductionEnvironment,
    "isTestEnvironment",
    ()=>isTestEnvironment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const isDevelopmentEnvironment = ()=>{
    try {
        return ("TURBOPACK compile-time value", "development") === "development";
    } catch (e) {}
    return false;
};
const isTestEnvironment = ()=>{
    try {
        return ("TURBOPACK compile-time value", "development") === "test";
    } catch (e) {}
    return false;
};
const isProductionEnvironment = ()=>{
    try {
        return ("TURBOPACK compile-time value", "development") === "production";
    } catch (e) {}
    return false;
};
;
 //# sourceMappingURL=runtimeEnvironment-BB2sO-19.mjs.map
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/deprecated-BqlFbLHj.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deprecated",
    ()=>deprecated,
    "deprecatedObjectProperty",
    ()=>deprecatedObjectProperty,
    "deprecatedProperty",
    ()=>deprecatedProperty
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$runtimeEnvironment$2d$BB2sO$2d$19$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/runtimeEnvironment-BB2sO-19.mjs [app-client] (ecmascript)");
;
//#region src/deprecated.ts
/**
* Mark class method / function as deprecated.
*
* A console WARNING will be displayed when class method / function is invoked.
*
* Examples
* 1. Deprecate class method
* class Example {
*   getSomething = (arg1, arg2) => {
*       deprecated('Example.getSomething', 'Use `getSomethingElse` instead.');
*       return `getSomethingValue:${arg1 || '-'}:${arg2 || '-'}`;
*   };
* }
*
* 2. Deprecate function
* const getSomething = () => {
*   deprecated('getSomething', 'Use `getSomethingElse` instead.');
*   return 'getSomethingValue';
* };
*/ const displayedWarnings = /* @__PURE__ */ new Set();
const deprecated = (fnName, warning, key)=>{
    const hideWarning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$runtimeEnvironment$2d$BB2sO$2d$19$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTestEnvironment"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$runtimeEnvironment$2d$BB2sO$2d$19$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProductionEnvironment"])();
    const messageId = key !== null && key !== void 0 ? key : fnName;
    if (displayedWarnings.has(messageId) || hideWarning) return;
    displayedWarnings.add(messageId);
    console.warn('Clerk - DEPRECATION WARNING: "'.concat(fnName, '" is deprecated and will be removed in the next major release.\n').concat(warning));
};
const deprecatedProperty = function(cls, propName, warning) {
    let isStatic = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    const target = isStatic ? cls : cls.prototype;
    let value = target[propName];
    Object.defineProperty(target, propName, {
        get () {
            deprecated(propName, warning, "".concat(cls.name, ":").concat(propName));
            return value;
        },
        set (v) {
            value = v;
        }
    });
};
/**
* Mark object property as deprecated.
*
* A console WARNING will be displayed when object property is being accessed.
*
* 1. Deprecate object property
* const obj = { something: 'aloha' };
*
* deprecatedObjectProperty(obj, 'something', 'Use `somethingElse` instead.');
*/ const deprecatedObjectProperty = (obj, propName, warning, key)=>{
    let value = obj[propName];
    Object.defineProperty(obj, propName, {
        get () {
            deprecated(propName, warning, key);
            return value;
        },
        set (v) {
            value = v;
        }
    });
};
;
 //# sourceMappingURL=deprecated-BqlFbLHj.mjs.map
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/deprecated.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$runtimeEnvironment$2d$BB2sO$2d$19$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/runtimeEnvironment-BB2sO-19.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$deprecated$2d$BqlFbLHj$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/deprecated-BqlFbLHj.mjs [app-client] (ecmascript)");
;
;
;
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/handleValueOrFn-CcwnRX-K.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/utils/handleValueOrFn.ts
__turbopack_context__.s([
    "handleValueOrFn",
    ()=>handleValueOrFn
]);
function handleValueOrFn(value, url, defaultValue) {
    if (typeof value === "function") return value(url);
    if (typeof value !== "undefined") return value;
    if (typeof defaultValue !== "undefined") return defaultValue;
}
;
 //# sourceMappingURL=handleValueOrFn-CcwnRX-K.mjs.map
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/utils-seY-ehg-.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allSettled",
    ()=>allSettled,
    "fastDeepMergeAndKeep",
    ()=>fastDeepMergeAndKeep,
    "fastDeepMergeAndReplace",
    ()=>fastDeepMergeAndReplace,
    "logErrorInDevMode",
    ()=>logErrorInDevMode,
    "timeLimit",
    ()=>timeLimit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$runtimeEnvironment$2d$BB2sO$2d$19$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/runtimeEnvironment-BB2sO-19.mjs [app-client] (ecmascript)");
;
//#region src/utils/allSettled.ts
/**
* A ES6 compatible utility that implements `Promise.allSettled`
* @internal
*/ function allSettled(iterable) {
    const promises = Array.from(iterable).map((p)=>p.then((value)=>({
                status: "fulfilled",
                value
            }), (reason)=>({
                status: "rejected",
                reason
            })));
    return Promise.all(promises);
}
//#endregion
//#region src/utils/logErrorInDevMode.ts
const logErrorInDevMode = (message)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$runtimeEnvironment$2d$BB2sO$2d$19$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDevelopmentEnvironment"])()) console.error("Clerk: ".concat(message));
};
//#endregion
//#region src/utils/fastDeepMerge.ts
const DANGEROUS_KEYS = new Set([
    "__proto__",
    "constructor",
    "prototype"
]);
/**
* Merges 2 objects without creating new object references
* The merged props will appear on the `target` object
* If `target` already has a value for a given key it will not be overwritten
*/ const fastDeepMergeAndReplace = (source, target)=>{
    if (!source || !target) return;
    for(const key in source){
        if (DANGEROUS_KEYS.has(key)) continue;
        if (Object.prototype.hasOwnProperty.call(source, key) && source[key] !== null && typeof source[key] === "object") {
            if (target[key] === void 0) target[key] = new (Object.getPrototypeOf(source[key])).constructor();
            fastDeepMergeAndReplace(source[key], target[key]);
        } else if (Object.prototype.hasOwnProperty.call(source, key) && source[key] !== void 0) target[key] = source[key];
    }
};
const fastDeepMergeAndKeep = (source, target)=>{
    if (!source || !target) return;
    for(const key in source){
        if (DANGEROUS_KEYS.has(key)) continue;
        if (Object.prototype.hasOwnProperty.call(source, key) && source[key] !== null && typeof source[key] === "object") {
            if (target[key] === void 0) target[key] = new (Object.getPrototypeOf(source[key])).constructor();
            fastDeepMergeAndKeep(source[key], target[key]);
        } else if (Object.prototype.hasOwnProperty.call(source, key) && target[key] === void 0) target[key] = source[key];
    }
};
//#endregion
//#region src/utils/timeLimit.ts
function timeLimit(value, ms, abortController) {
    let timeoutId;
    const timeoutPromise = new Promise((_, reject)=>{
        var _timeoutId_unref;
        timeoutId = setTimeout(()=>{
            const error = /* @__PURE__ */ new Error("Timed out after ".concat(ms, "ms"));
            abortController === null || abortController === void 0 ? void 0 : abortController.abort();
            reject(error);
        }, ms);
        (_timeoutId_unref = timeoutId.unref) === null || _timeoutId_unref === void 0 ? void 0 : _timeoutId_unref.call(timeoutId);
    });
    return Promise.race([
        Promise.resolve(value),
        timeoutPromise
    ]).finally(()=>{
        clearTimeout(timeoutId);
    });
}
;
 //# sourceMappingURL=utils-seY-ehg-.mjs.map
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/instance-Cze6Nv61.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/utils/instance.ts
/**
* Check if the frontendApi ends with a staging domain
*/ __turbopack_context__.s([
    "isStaging",
    ()=>isStaging
]);
function isStaging(frontendApi) {
    return frontendApi.endsWith(".lclstage.dev") || frontendApi.endsWith(".stgstage.dev") || frontendApi.endsWith(".clerkstage.dev") || frontendApi.endsWith(".accountsstage.dev");
}
;
 //# sourceMappingURL=instance-Cze6Nv61.mjs.map
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/utils/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$runtimeEnvironment$2d$BB2sO$2d$19$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/runtimeEnvironment-BB2sO-19.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$handleValueOrFn$2d$CcwnRX$2d$K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/handleValueOrFn-CcwnRX-K.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$noop$2d$B3MbDAfb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/noop-B3MbDAfb.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$createDeferredPromise$2d$CjYZzUuU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/createDeferredPromise-CjYZzUuU.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$utils$2d$seY$2d$ehg$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/utils-seY-ehg-.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$instance$2d$Cze6Nv61$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/instance-Cze6Nv61.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/object-Be3MMNTQ.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/object.ts
__turbopack_context__.s([
    "applyFunctionToObj",
    ()=>applyFunctionToObj,
    "filterProps",
    ()=>filterProps,
    "removeUndefined",
    ()=>removeUndefined,
    "without",
    ()=>without
]);
const without = function(obj) {
    for(var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        props[_key - 1] = arguments[_key];
    }
    const copy = {
        ...obj
    };
    for (const prop of props)delete copy[prop];
    return copy;
};
const removeUndefined = (obj)=>{
    return Object.entries(obj).reduce((acc, param)=>{
        let [key, value] = param;
        if (value !== void 0 && value !== null) acc[key] = value;
        return acc;
    }, {});
};
const applyFunctionToObj = (obj, fn)=>{
    const result = {};
    for(const key in obj)result[key] = fn(obj[key], key);
    return result;
};
const filterProps = (obj, filter)=>{
    const result = {};
    for(const key in obj)if (obj[key] && filter(obj[key])) result[key] = obj[key];
    return result;
};
;
 //# sourceMappingURL=object-Be3MMNTQ.mjs.map
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/object.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$object$2d$Be3MMNTQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/object-Be3MMNTQ.mjs [app-client] (ecmascript)");
;
;
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/retry-DAlTROH9.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/retry.ts
__turbopack_context__.s([
    "retry",
    ()=>retry
]);
const defaultOptions = {
    initialDelay: 125,
    maxDelayBetweenRetries: 0,
    factor: 2,
    shouldRetry: (_, iteration)=>iteration < 5,
    retryImmediately: false,
    jitter: true
};
const RETRY_IMMEDIATELY_DELAY = 100;
const sleep = async (ms)=>new Promise((s)=>setTimeout(s, ms));
const applyJitter = (delay, jitter)=>{
    return jitter ? delay * (1 + Math.random()) : delay;
};
const createExponentialDelayAsyncFn = (opts)=>{
    let timesCalled = 0;
    const calculateDelayInMs = ()=>{
        const constant = opts.initialDelay;
        const base = opts.factor;
        let delay = constant * Math.pow(base, timesCalled);
        delay = applyJitter(delay, opts.jitter);
        return Math.min(opts.maxDelayBetweenRetries || delay, delay);
    };
    return async ()=>{
        await sleep(calculateDelayInMs());
        timesCalled++;
    };
};
/**
* Retries a callback until it succeeds or the shouldRetry function returns false.
* See {@link RetryOptions} for the available options.
*/ const retry = async function(callback) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let iterations = 0;
    const { shouldRetry, initialDelay, maxDelayBetweenRetries, factor, retryImmediately, jitter, onBeforeRetry } = {
        ...defaultOptions,
        ...options
    };
    const delay = createExponentialDelayAsyncFn({
        initialDelay,
        maxDelayBetweenRetries,
        factor,
        jitter
    });
    while(true)try {
        return await callback();
    } catch (e) {
        iterations++;
        if (!shouldRetry(e, iterations)) throw e;
        if (onBeforeRetry) await onBeforeRetry(iterations);
        if (retryImmediately && iterations === 1) await sleep(applyJitter(RETRY_IMMEDIATELY_DELAY, jitter));
        else await delay();
    }
};
;
 //# sourceMappingURL=retry-DAlTROH9.mjs.map
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/loadScript-t1vaIfy5.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadScript",
    ()=>loadScript
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$retry$2d$DAlTROH9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/retry-DAlTROH9.mjs [app-client] (ecmascript)");
;
//#region src/loadScript.ts
const NO_DOCUMENT_ERROR = "loadScript cannot be called when document does not exist";
const NO_SRC_ERROR = "loadScript cannot be called without a src";
async function loadScript() {
    let src = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", opts = arguments.length > 1 ? arguments[1] : void 0;
    const { async, defer, beforeLoad, crossOrigin, nonce } = opts || {};
    const load = ()=>{
        return new Promise((resolve, reject)=>{
            if (!src) reject(new Error(NO_SRC_ERROR));
            if (!document || !document.body) reject(new Error(NO_DOCUMENT_ERROR));
            const script = document.createElement("script");
            if (crossOrigin) script.setAttribute("crossorigin", crossOrigin);
            script.async = async || false;
            script.defer = defer || false;
            script.addEventListener("load", ()=>{
                script.remove();
                resolve(script);
            });
            script.addEventListener("error", (event)=>{
                script.remove();
                var _event_error;
                reject((_event_error = event.error) !== null && _event_error !== void 0 ? _event_error : /* @__PURE__ */ new Error("failed to load script: ".concat(src)));
            });
            script.src = src;
            script.nonce = nonce;
            beforeLoad === null || beforeLoad === void 0 ? void 0 : beforeLoad(script);
            document.body.appendChild(script);
        });
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$retry$2d$DAlTROH9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retry"])(load, {
        shouldRetry: (_, iterations)=>iterations <= 5
    });
}
;
 //# sourceMappingURL=loadScript-t1vaIfy5.mjs.map
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/proxy-Bq8EHApG.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/proxy.ts
__turbopack_context__.s([
    "isHttpOrHttps",
    ()=>isHttpOrHttps,
    "isProxyUrlRelative",
    ()=>isProxyUrlRelative,
    "isValidProxyUrl",
    ()=>isValidProxyUrl,
    "proxyUrlToAbsoluteURL",
    ()=>proxyUrlToAbsoluteURL
]);
function isValidProxyUrl(key) {
    if (!key) return true;
    return isHttpOrHttps(key) || isProxyUrlRelative(key);
}
function isHttpOrHttps(key) {
    return /^http(s)?:\/\//.test(key || "");
}
function isProxyUrlRelative(key) {
    return key.startsWith("/");
}
function proxyUrlToAbsoluteURL(url) {
    if (!url) return "";
    return isProxyUrlRelative(url) ? new URL(url, window.location.origin).toString() : url;
}
;
 //# sourceMappingURL=proxy-Bq8EHApG.mjs.map
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/url-Cdy8w8vK.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addClerkPrefix",
    ()=>addClerkPrefix,
    "cleanDoubleSlashes",
    ()=>cleanDoubleSlashes,
    "getClerkJsMajorVersionOrTag",
    ()=>getClerkJsMajorVersionOrTag,
    "getScriptUrl",
    ()=>getScriptUrl,
    "hasLeadingSlash",
    ()=>hasLeadingSlash,
    "hasTrailingSlash",
    ()=>hasTrailingSlash,
    "isAbsoluteUrl",
    ()=>isAbsoluteUrl,
    "isCurrentDevAccountPortalOrigin",
    ()=>isCurrentDevAccountPortalOrigin,
    "isLegacyDevAccountPortalOrigin",
    ()=>isLegacyDevAccountPortalOrigin,
    "isNonEmptyURL",
    ()=>isNonEmptyURL,
    "joinURL",
    ()=>joinURL,
    "parseSearchParams",
    ()=>parseSearchParams,
    "stripScheme",
    ()=>stripScheme,
    "withLeadingSlash",
    ()=>withLeadingSlash,
    "withTrailingSlash",
    ()=>withTrailingSlash,
    "withoutLeadingSlash",
    ()=>withoutLeadingSlash,
    "withoutTrailingSlash",
    ()=>withoutTrailingSlash
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$constants$2d$ByUssRbE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/constants-ByUssRbE.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$instance$2d$Cze6Nv61$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/instance-Cze6Nv61.mjs [app-client] (ecmascript)");
;
;
//#region src/url.ts
function parseSearchParams() {
    let queryString = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    if (queryString.startsWith("?")) queryString = queryString.slice(1);
    return new URLSearchParams(queryString);
}
function stripScheme() {
    let url = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return (url || "").replace(/^.+:\/\//, "");
}
function addClerkPrefix(str) {
    if (!str) return "";
    let regex;
    if (str.match(/^(clerk\.)+\w*$/)) regex = /(clerk\.)*(?=clerk\.)/;
    else if (str.match(/\.clerk.accounts/)) return str;
    else regex = /^(clerk\.)*/gi;
    return "clerk.".concat(str.replace(regex, ""));
}
/**
*
* Retrieve the clerk-js major tag using the major version from the pkgVersion
* param or use the frontendApi to determine if the canary tag should be used.
* The default tag is `latest`.
*/ const getClerkJsMajorVersionOrTag = (frontendApi, version)=>{
    if (!version && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$instance$2d$Cze6Nv61$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStaging"])(frontendApi)) return "canary";
    if (!version) return "latest";
    return version.split(".")[0] || "latest";
};
/**
*
* Retrieve the clerk-js script url from the frontendApi and the major tag
* using the {@link getClerkJsMajorVersionOrTag} or a provided clerkJSVersion tag.
*/ const getScriptUrl = (frontendApi, param)=>{
    let { clerkJSVersion } = param;
    const noSchemeFrontendApi = frontendApi.replace(/http(s)?:\/\//, "");
    const major = getClerkJsMajorVersionOrTag(frontendApi, clerkJSVersion);
    return "https://".concat(noSchemeFrontendApi, "/npm/@clerk/clerk-js@").concat(clerkJSVersion || major, "/dist/clerk.browser.js");
};
function isLegacyDevAccountPortalOrigin(host) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$constants$2d$ByUssRbE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEGACY_DEV_INSTANCE_SUFFIXES"].some((legacyDevSuffix)=>{
        return host.startsWith("accounts.") && host.endsWith(legacyDevSuffix);
    });
}
function isCurrentDevAccountPortalOrigin(host) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$constants$2d$ByUssRbE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_DEV_INSTANCE_SUFFIXES"].some((currentDevSuffix)=>{
        return host.endsWith(currentDevSuffix) && !host.endsWith(".clerk" + currentDevSuffix);
    });
}
const TRAILING_SLASH_RE = /\/$|\/\?|\/#/;
function hasTrailingSlash() {
    let input = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", respectQueryAndFragment = arguments.length > 1 ? arguments[1] : void 0;
    if (!respectQueryAndFragment) return input.endsWith("/");
    return TRAILING_SLASH_RE.test(input);
}
function withTrailingSlash() {
    let input = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", respectQueryAndFragment = arguments.length > 1 ? arguments[1] : void 0;
    if (!respectQueryAndFragment) return input.endsWith("/") ? input : input + "/";
    if (hasTrailingSlash(input, true)) return input || "/";
    let path = input;
    let fragment = "";
    const fragmentIndex = input.indexOf("#");
    if (fragmentIndex >= 0) {
        path = input.slice(0, fragmentIndex);
        fragment = input.slice(fragmentIndex);
        if (!path) return fragment;
    }
    const [s0, ...s] = path.split("?");
    return s0 + "/" + (s.length > 0 ? "?".concat(s.join("?")) : "") + fragment;
}
function withoutTrailingSlash() {
    let input = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", respectQueryAndFragment = arguments.length > 1 ? arguments[1] : void 0;
    if (!respectQueryAndFragment) return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
    if (!hasTrailingSlash(input, true)) return input || "/";
    let path = input;
    let fragment = "";
    const fragmentIndex = input.indexOf("#");
    if (fragmentIndex >= 0) {
        path = input.slice(0, fragmentIndex);
        fragment = input.slice(fragmentIndex);
    }
    const [s0, ...s] = path.split("?");
    return (s0.slice(0, -1) || "/") + (s.length > 0 ? "?".concat(s.join("?")) : "") + fragment;
}
function hasLeadingSlash() {
    let input = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return input.startsWith("/");
}
function withoutLeadingSlash() {
    let input = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return (hasLeadingSlash(input) ? input.slice(1) : input) || "/";
}
function withLeadingSlash() {
    let input = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return hasLeadingSlash(input) ? input : "/" + input;
}
function cleanDoubleSlashes() {
    let input = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return input.split("://").map((string_)=>string_.replace(/\/{2,}/g, "/")).join("://");
}
function isNonEmptyURL(url) {
    return url && url !== "/";
}
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function joinURL(base) {
    for(var _len = arguments.length, input = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        input[_key - 1] = arguments[_key];
    }
    let url = base || "";
    for (const segment of input.filter((url$1)=>isNonEmptyURL(url$1)))if (url) {
        const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
        url = withTrailingSlash(url) + _segment;
    } else url = segment;
    return url;
}
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
;
 //# sourceMappingURL=url-Cdy8w8vK.mjs.map
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/versionSelector-iGKqJXKU.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/versionSelector.ts
/**
* This version selector is a bit complicated, so here is the flow:
* 1. Use the clerkJSVersion prop on the provider
* 2. Use the exact `@clerk/clerk-js` version if it is a `@snapshot` prerelease
* 3. Use the prerelease tag of `@clerk/clerk-js` or the packageVersion provided
* 4. Fallback to the major version of `@clerk/clerk-js` or the packageVersion provided
* @param clerkJSVersion - The optional clerkJSVersion prop on the provider
* @param packageVersion - The version of `@clerk/clerk-js` that will be used if an explicit version is not provided
* @returns The npm tag, version or major version to use
*/ __turbopack_context__.s([
    "getMajorVersion",
    ()=>getMajorVersion,
    "versionSelector",
    ()=>versionSelector
]);
const versionSelector = function(clerkJSVersion) {
    let packageVersion = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "5.127.1";
    if (clerkJSVersion) return clerkJSVersion;
    const prereleaseTag = getPrereleaseTag(packageVersion);
    if (prereleaseTag) {
        if (prereleaseTag === "snapshot") return "5.127.1";
        return prereleaseTag;
    }
    return getMajorVersion(packageVersion);
};
const getPrereleaseTag = (packageVersion)=>{
    var _packageVersion_trim_replace_match;
    return (_packageVersion_trim_replace_match = packageVersion.trim().replace(/^v/, "").match(/-(.+?)(\.|$)/)) === null || _packageVersion_trim_replace_match === void 0 ? void 0 : _packageVersion_trim_replace_match[1];
};
const getMajorVersion = (packageVersion)=>packageVersion.trim().replace(/^v/, "").split(".")[0];
;
 //# sourceMappingURL=versionSelector-iGKqJXKU.mjs.map
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/loadClerkJsScript-CcnvepP5.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildClerkJsScriptAttributes",
    ()=>buildClerkJsScriptAttributes,
    "clerkJsScriptUrl",
    ()=>clerkJsScriptUrl,
    "loadClerkJsScript",
    ()=>loadClerkJsScript,
    "setClerkJsLoadingErrorPackageName",
    ()=>setClerkJsLoadingErrorPackageName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$keys$2d$YNv6yjKk$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/keys-YNv6yjKk.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$error$2d$Dl9xmUf3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/error-Dl9xmUf3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$loadScript$2d$t1vaIfy5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/loadScript-t1vaIfy5.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$proxy$2d$Bq8EHApG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/proxy-Bq8EHApG.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$url$2d$Cdy8w8vK$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/url-Cdy8w8vK.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$versionSelector$2d$iGKqJXKU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/versionSelector-iGKqJXKU.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
//#region src/loadClerkJsScript.ts
const ERROR_CODE = "failed_to_load_clerk_js";
const ERROR_CODE_TIMEOUT = "failed_to_load_clerk_js_timeout";
const FAILED_TO_LOAD_ERROR = "Failed to load Clerk";
const { isDevOrStagingUrl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$keys$2d$YNv6yjKk$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDevOrStagingUrlCache"])();
const errorThrower = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$error$2d$Dl9xmUf3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildErrorThrower"])({
    packageName: "@clerk/shared"
});
/**
* Sets the package name for error messages during ClerkJS script loading.
*
* @param packageName - The name of the package to use in error messages (e.g., '@clerk/clerk-react').
* @example
* ```typescript
* setClerkJsLoadingErrorPackageName('@clerk/clerk-react');
* ```
*/ function setClerkJsLoadingErrorPackageName(packageName) {
    errorThrower.setPackageName({
        packageName
    });
}
/**
* Validates that window.Clerk exists and is properly initialized.
* This ensures we don't have false positives where the script loads but Clerk is malformed.
*
* @returns `true` if window.Clerk exists and has the expected structure with a load method.
*/ function isClerkProperlyLoaded() {
    if (typeof window === "undefined" || !window.Clerk) return false;
    const clerk = window.Clerk;
    return typeof clerk === "object" && typeof clerk.load === "function";
}
/**
* Checks if an existing script has a request error using Performance API.
*
* @param scriptUrl - The URL of the script to check.
* @returns True if the script has failed to load due to a network/HTTP error.
*/ function hasScriptRequestError(scriptUrl) {
    if (typeof window === "undefined" || !window.performance) return false;
    const entries = performance.getEntriesByName(scriptUrl, "resource");
    if (entries.length === 0) return false;
    const scriptEntry = entries[entries.length - 1];
    if (scriptEntry.transferSize === 0 && scriptEntry.decodedBodySize === 0) {
        if (scriptEntry.responseEnd === 0) return true;
        if (scriptEntry.responseEnd > 0 && scriptEntry.responseStart > 0) return true;
        if ("responseStatus" in scriptEntry) {
            if (scriptEntry.responseStatus >= 400) return true;
            if (scriptEntry.responseStatus === 0) return true;
        }
    }
    return false;
}
/**
* Waits for Clerk to be properly loaded with a timeout mechanism.
* Uses polling to check if Clerk becomes available within the specified timeout.
*
* @param timeoutMs - Maximum time to wait in milliseconds.
* @param existingScript - The existing script element to wait for. Optional, for existing scripts.
* @returns Promise that resolves with null if Clerk loads successfully, or rejects with an error if timeout is reached.
*/ function waitForClerkWithTimeout(timeoutMs, existingScript) {
    return new Promise((resolve, reject)=>{
        let resolved = false;
        const cleanup = (timeoutId$1, pollInterval$1)=>{
            clearTimeout(timeoutId$1);
            clearInterval(pollInterval$1);
        };
        existingScript === null || existingScript === void 0 ? void 0 : existingScript.addEventListener("error", ()=>{
            cleanup(timeoutId, pollInterval);
            reject(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$error$2d$Dl9xmUf3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClerkRuntimeError"](FAILED_TO_LOAD_ERROR, {
                code: ERROR_CODE
            }));
        });
        const checkAndResolve = ()=>{
            if (resolved) return;
            if (isClerkProperlyLoaded()) {
                resolved = true;
                cleanup(timeoutId, pollInterval);
                resolve(null);
            }
        };
        const handleTimeout = ()=>{
            if (resolved) return;
            resolved = true;
            cleanup(timeoutId, pollInterval);
            if (!isClerkProperlyLoaded()) reject(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$error$2d$Dl9xmUf3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClerkRuntimeError"](FAILED_TO_LOAD_ERROR, {
                code: ERROR_CODE_TIMEOUT
            }));
            else resolve(null);
        };
        const timeoutId = setTimeout(handleTimeout, timeoutMs);
        checkAndResolve();
        const pollInterval = setInterval(()=>{
            if (resolved) {
                clearInterval(pollInterval);
                return;
            }
            checkAndResolve();
        }, 100);
    });
}
/**
* Hotloads the Clerk JS script with robust failure detection and retry logic.
*
* For existing scripts:
* - If no request error detected: waits for timeout, then retries with loadScript if timeout expires
* - If request error detected: immediately retries with loadScript.
*
* For new scripts: uses loadScript which has built-in retry logic via the retry utility.
*
* @param opts - The options used to build the Clerk JS script URL and load the script.
*               Must include a `publishableKey` if no existing script is found.
* @returns Promise that resolves with null if Clerk loads successfully, or rejects with an error.
*
* @example
* ```typescript
* try {
*   await loadClerkJsScript({ publishableKey: 'pk_test_...' });
*   console.log('Clerk loaded successfully');
* } catch (error) {
*   console.error('Failed to load Clerk:', error.message);
* }
* ```
*/ const loadClerkJsScript = async (opts)=>{
    var _opts_scriptLoadTimeout;
    const timeout = (_opts_scriptLoadTimeout = opts === null || opts === void 0 ? void 0 : opts.scriptLoadTimeout) !== null && _opts_scriptLoadTimeout !== void 0 ? _opts_scriptLoadTimeout : 15e3;
    if (isClerkProperlyLoaded()) return null;
    if (!(opts === null || opts === void 0 ? void 0 : opts.publishableKey)) {
        errorThrower.throwMissingPublishableKeyError();
        return null;
    }
    const scriptUrl = clerkJsScriptUrl(opts);
    const existingScript = document.querySelector("script[data-clerk-js-script]");
    if (existingScript) if (hasScriptRequestError(scriptUrl)) existingScript.remove();
    else try {
        await waitForClerkWithTimeout(timeout, existingScript);
        return null;
    } catch (e) {
        existingScript.remove();
    }
    const loadPromise = waitForClerkWithTimeout(timeout);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$loadScript$2d$t1vaIfy5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadScript"])(scriptUrl, {
        async: true,
        crossOrigin: "anonymous",
        nonce: opts.nonce,
        beforeLoad: applyClerkJsScriptAttributes(opts)
    }).catch((error)=>{
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$error$2d$Dl9xmUf3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClerkRuntimeError"](FAILED_TO_LOAD_ERROR + (error.message ? ", ".concat(error.message) : ""), {
            code: ERROR_CODE,
            cause: error
        });
    });
    return loadPromise;
};
/**
* Generates a Clerk JS script URL based on the provided options.
*
* @param opts - The options to use when building the Clerk JS script URL.
* @returns The complete URL to the Clerk JS script.
*
* @example
* ```typescript
* const url = clerkJsScriptUrl({ publishableKey: 'pk_test_...' });
* // Returns: "https://example.clerk.accounts.dev/npm/@clerk/clerk-js@5/dist/clerk.browser.js"
* ```
*/ const clerkJsScriptUrl = (opts)=>{
    var _parsePublishableKey, _parsePublishableKey1;
    const { clerkJSUrl, clerkJSVariant, clerkJSVersion, proxyUrl, domain, publishableKey } = opts;
    if (clerkJSUrl) return clerkJSUrl;
    let scriptHost = "";
    if (!!proxyUrl && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$proxy$2d$Bq8EHApG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidProxyUrl"])(proxyUrl)) scriptHost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$proxy$2d$Bq8EHApG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxyUrlToAbsoluteURL"])(proxyUrl).replace(/http(s)?:\/\//, "");
    else if (domain && !isDevOrStagingUrl(((_parsePublishableKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$keys$2d$YNv6yjKk$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePublishableKey"])(publishableKey)) === null || _parsePublishableKey === void 0 ? void 0 : _parsePublishableKey.frontendApi) || "")) scriptHost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$url$2d$Cdy8w8vK$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addClerkPrefix"])(domain);
    else scriptHost = ((_parsePublishableKey1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$keys$2d$YNv6yjKk$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePublishableKey"])(publishableKey)) === null || _parsePublishableKey1 === void 0 ? void 0 : _parsePublishableKey1.frontendApi) || "";
    const variant = clerkJSVariant ? "".concat(clerkJSVariant.replace(/\.+$/, ""), ".") : "";
    const version = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$versionSelector$2d$iGKqJXKU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["versionSelector"])(clerkJSVersion);
    return "https://".concat(scriptHost, "/npm/@clerk/clerk-js@").concat(version, "/dist/clerk.").concat(variant, "browser.js");
};
/**
* Builds an object of Clerk JS script attributes based on the provided options.
*
* @param options - The options containing the values for script attributes.
* @returns An object containing data attributes to be applied to the script element.
*/ const buildClerkJsScriptAttributes = (options)=>{
    const obj = {};
    if (options.publishableKey) obj["data-clerk-publishable-key"] = options.publishableKey;
    if (options.proxyUrl) obj["data-clerk-proxy-url"] = options.proxyUrl;
    if (options.domain) obj["data-clerk-domain"] = options.domain;
    if (options.nonce) obj.nonce = options.nonce;
    return obj;
};
/**
* Returns a function that applies Clerk JS script attributes to a script element.
*
* @param options - The options containing the values for script attributes.
* @returns A function that accepts a script element and applies the attributes to it.
*/ const applyClerkJsScriptAttributes = (options)=>(script)=>{
        const attributes = buildClerkJsScriptAttributes(options);
        for(const attribute in attributes)script.setAttribute(attribute, attributes[attribute]);
    };
;
 //# sourceMappingURL=loadClerkJsScript-CcnvepP5.mjs.map
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/loadClerkJsScript.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$constants$2d$ByUssRbE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/constants-ByUssRbE.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$isomorphicAtob$2d$DybBXGFR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/isomorphicAtob-DybBXGFR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$isomorphicBtoa$2d$Dr7WubZv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/isomorphicBtoa-Dr7WubZv.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$keys$2d$YNv6yjKk$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/keys-YNv6yjKk.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$error$2d$Dl9xmUf3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/error-Dl9xmUf3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$instance$2d$Cze6Nv61$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/instance-Cze6Nv61.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$retry$2d$DAlTROH9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/retry-DAlTROH9.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$loadScript$2d$t1vaIfy5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/loadScript-t1vaIfy5.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$proxy$2d$Bq8EHApG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/proxy-Bq8EHApG.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$url$2d$Cdy8w8vK$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/url-Cdy8w8vK.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$versionSelector$2d$iGKqJXKU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/versionSelector-iGKqJXKU.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$loadClerkJsScript$2d$CcnvepP5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/loadClerkJsScript-CcnvepP5.mjs [app-client] (ecmascript)");
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
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/keys.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$constants$2d$ByUssRbE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/constants-ByUssRbE.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$isomorphicAtob$2d$DybBXGFR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/isomorphicAtob-DybBXGFR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$isomorphicBtoa$2d$Dr7WubZv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/isomorphicBtoa-Dr7WubZv.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$keys$2d$YNv6yjKk$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/keys-YNv6yjKk.mjs [app-client] (ecmascript)");
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/deriveState-ChDqlleE.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/deriveState.ts
/**
* Derives authentication state based on the current rendering context (SSR or client-side).
*/ __turbopack_context__.s([
    "deriveState",
    ()=>deriveState
]);
const deriveState = (clerkOperational, state, initialState)=>{
    if (!clerkOperational && initialState) return deriveFromSsrInitialState(initialState);
    return deriveFromClientSideState(state);
};
const deriveFromSsrInitialState = (initialState)=>{
    const userId = initialState.userId;
    const user = initialState.user;
    const sessionId = initialState.sessionId;
    const sessionStatus = initialState.sessionStatus;
    const sessionClaims = initialState.sessionClaims;
    return {
        userId,
        user,
        sessionId,
        session: initialState.session,
        sessionStatus,
        sessionClaims,
        organization: initialState.organization,
        orgId: initialState.orgId,
        orgRole: initialState.orgRole,
        orgPermissions: initialState.orgPermissions,
        orgSlug: initialState.orgSlug,
        actor: initialState.actor,
        factorVerificationAge: initialState.factorVerificationAge
    };
};
const deriveFromClientSideState = (state)=>{
    var _state_session, _state_session_lastActiveToken_jwt, _state_session_lastActiveToken, _user_organizationMemberships;
    const userId = state.user ? state.user.id : state.user;
    const user = state.user;
    const sessionId = state.session ? state.session.id : state.session;
    const session = state.session;
    const sessionStatus = (_state_session = state.session) === null || _state_session === void 0 ? void 0 : _state_session.status;
    const sessionClaims = state.session ? (_state_session_lastActiveToken = state.session.lastActiveToken) === null || _state_session_lastActiveToken === void 0 ? void 0 : (_state_session_lastActiveToken_jwt = _state_session_lastActiveToken.jwt) === null || _state_session_lastActiveToken_jwt === void 0 ? void 0 : _state_session_lastActiveToken_jwt.claims : null;
    const factorVerificationAge = state.session ? state.session.factorVerificationAge : null;
    const actor = session === null || session === void 0 ? void 0 : session.actor;
    const organization = state.organization;
    const orgId = state.organization ? state.organization.id : state.organization;
    const orgSlug = organization === null || organization === void 0 ? void 0 : organization.slug;
    const membership = organization ? user === null || user === void 0 ? void 0 : (_user_organizationMemberships = user.organizationMemberships) === null || _user_organizationMemberships === void 0 ? void 0 : _user_organizationMemberships.find((om)=>om.organization.id === orgId) : organization;
    const orgPermissions = membership ? membership.permissions : membership;
    return {
        userId,
        user,
        sessionId,
        session,
        sessionStatus,
        sessionClaims,
        organization,
        orgId,
        orgRole: membership ? membership.role : membership,
        orgSlug,
        orgPermissions,
        actor,
        factorVerificationAge
    };
};
;
 //# sourceMappingURL=deriveState-ChDqlleE.mjs.map
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/deriveState.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$deriveState$2d$ChDqlleE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/deriveState-ChDqlleE.mjs [app-client] (ecmascript)");
;
;
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/browser-D5e8obql.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/browser.ts
/**
* Checks if the window object is defined. You can also use this to check if something is happening on the client side.
* @returns {boolean}
*/ __turbopack_context__.s([
    "inBrowser",
    ()=>inBrowser,
    "isBrowserOnline",
    ()=>isBrowserOnline,
    "isValidBrowser",
    ()=>isValidBrowser,
    "isValidBrowserOnline",
    ()=>isValidBrowserOnline,
    "userAgentIsRobot",
    ()=>userAgentIsRobot
]);
function inBrowser() {
    return typeof window !== "undefined";
}
const botAgentRegex = new RegExp([
    "bot",
    "spider",
    "crawl",
    "APIs-Google",
    "AdsBot",
    "Googlebot",
    "mediapartners",
    "Google Favicon",
    "FeedFetcher",
    "Google-Read-Aloud",
    "DuplexWeb-Google",
    "googleweblight",
    "bing",
    "yandex",
    "baidu",
    "duckduck",
    "yahoo",
    "ecosia",
    "ia_archiver",
    "facebook",
    "instagram",
    "pinterest",
    "reddit",
    "slack",
    "twitter",
    "whatsapp",
    "youtube",
    "semrush"
].join("|"), "i");
/**
* Checks if the user agent is a bot.
* @param userAgent - Any user agent string
* @returns {boolean}
*/ function userAgentIsRobot(userAgent) {
    return !userAgent ? false : botAgentRegex.test(userAgent);
}
/**
* Checks if the current environment is a browser and the user agent is not a bot.
* @returns {boolean}
*/ function isValidBrowser() {
    var _window;
    const navigator = inBrowser() ? (_window = window) === null || _window === void 0 ? void 0 : _window.navigator : null;
    if (!navigator) return false;
    return !userAgentIsRobot(navigator === null || navigator === void 0 ? void 0 : navigator.userAgent) && !(navigator === null || navigator === void 0 ? void 0 : navigator.webdriver);
}
/**
* Checks if the current environment is a browser and if the navigator is online.
* @returns {boolean}
*/ function isBrowserOnline() {
    var _window, _navigator_connection, _navigator_connection1;
    const navigator = inBrowser() ? (_window = window) === null || _window === void 0 ? void 0 : _window.navigator : null;
    if (!navigator) return false;
    const isNavigatorOnline = navigator === null || navigator === void 0 ? void 0 : navigator.onLine;
    return (navigator === null || navigator === void 0 ? void 0 : (_navigator_connection = navigator.connection) === null || _navigator_connection === void 0 ? void 0 : _navigator_connection.rtt) !== 0 && (navigator === null || navigator === void 0 ? void 0 : (_navigator_connection1 = navigator.connection) === null || _navigator_connection1 === void 0 ? void 0 : _navigator_connection1.downlink) !== 0 && isNavigatorOnline;
}
/**
* Runs `isBrowserOnline` and `isValidBrowser` to check if the current environment is a valid browser and if the navigator is online.
* @returns {boolean}
*/ function isValidBrowserOnline() {
    return isBrowserOnline() && isValidBrowser();
}
;
 //# sourceMappingURL=browser-D5e8obql.mjs.map
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/browser.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$browser$2d$D5e8obql$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/browser-D5e8obql.mjs [app-client] (ecmascript)");
;
;
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/eventBus-UpdW-1JB.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/eventBus.ts
/**
* @internal
*/ __turbopack_context__.s([
    "createEventBus",
    ()=>createEventBus
]);
const _on = (eventToHandlersMap, latestPayloadMap, event, handler, opts)=>{
    const { notify } = opts || {};
    let handlers = eventToHandlersMap.get(event);
    if (!handlers) {
        handlers = [];
        eventToHandlersMap.set(event, handlers);
    }
    handlers.push(handler);
    if (notify && latestPayloadMap.has(event)) handler(latestPayloadMap.get(event));
};
/**
* @internal
*/ const _dispatch = (eventToHandlersMap, event, payload)=>(eventToHandlersMap.get(event) || []).map((h)=>h(payload));
/**
* @internal
*/ const _off = (eventToHandlersMap, event, handler)=>{
    const handlers = eventToHandlersMap.get(event);
    if (handlers) if (handler) handlers.splice(handlers.indexOf(handler) >>> 0, 1);
    else eventToHandlersMap.set(event, []);
};
/**
* A ES6/2015 compatible 300 byte event bus
*
* Creates a strongly-typed event bus that enables publish/subscribe communication between components.
*
* @template Events - A record type that maps event names to their payload types
* @returns An EventBus instance with the following methods:
* - `on`: Subscribe to an event
* - `onPreDispatch`: Subscribe to an event, triggered before regular subscribers
* - `emit`: Publish an event with payload
* - `off`: Unsubscribe from an event
* - `offPreDispatch`: Unsubscribe from a pre-dispatch event
*
* @example
* // Define event types
* const eventBus = createEventBus<{
*   'user-login': { userId: string; timestamp: number };
*   'data-updated': { records: any[] };
*   'error': Error;
* }>();
*
* // Subscribe to events
* eventBus.on('user-login', ({ userId, timestamp }) => {
*   console.log(`User ${userId} logged in at ${timestamp}`);
* });
*
* // Subscribe with immediate notification if event was already dispatched
* eventBus.on('user-login', (payload) => {
*   // This will be called immediately if 'user-login' was previously dispatched
* }, { notify: true });
*
* // Publish an event
* eventBus.emit('user-login', { userId: 'abc123', timestamp: Date.now() });
*
* // Unsubscribe from event
* const handler = (payload) => console.log(payload);
* eventBus.on('error', handler);
* // Later...
* eventBus.off('error', handler);
*
* // Unsubscribe all handlers for an event
* eventBus.off('data-updated');
*/ const createEventBus = ()=>{
    const eventToHandlersMap = /* @__PURE__ */ new Map();
    const latestPayloadMap = /* @__PURE__ */ new Map();
    const eventToPredispatchHandlersMap = /* @__PURE__ */ new Map();
    const emit = (event, payload)=>{
        latestPayloadMap.set(event, payload);
        _dispatch(eventToPredispatchHandlersMap, event, payload);
        _dispatch(eventToHandlersMap, event, payload);
    };
    return {
        on: function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return _on(eventToHandlersMap, latestPayloadMap, ...args);
        },
        prioritizedOn: function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return _on(eventToPredispatchHandlersMap, latestPayloadMap, ...args);
        },
        emit,
        off: function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return _off(eventToHandlersMap, ...args);
        },
        prioritizedOff: function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return _off(eventToPredispatchHandlersMap, ...args);
        },
        internal: {
            retrieveListeners: (event)=>eventToHandlersMap.get(event) || []
        }
    };
};
;
 //# sourceMappingURL=eventBus-UpdW-1JB.mjs.map
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/clerkEventBus.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clerkEvents",
    ()=>clerkEvents,
    "createClerkEventBus",
    ()=>createClerkEventBus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$eventBus$2d$UpdW$2d$1JB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/eventBus-UpdW-1JB.mjs [app-client] (ecmascript)");
;
//#region src/clerkEventBus.ts
const clerkEvents = {
    Status: "status"
};
const createClerkEventBus = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$eventBus$2d$UpdW$2d$1JB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEventBus"])();
};
;
 //# sourceMappingURL=clerkEventBus.mjs.map
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/logger-B9q7E6uE.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/logger.ts
__turbopack_context__.s([
    "logger",
    ()=>logger
]);
const loggedMessages = /* @__PURE__ */ new Set();
const logger = {
    warnOnce: (msg)=>{
        if (loggedMessages.has(msg)) return;
        loggedMessages.add(msg);
        console.warn(msg);
    },
    logOnce: (msg)=>{
        if (loggedMessages.has(msg)) return;
        console.log(msg);
        loggedMessages.add(msg);
    }
};
;
 //# sourceMappingURL=logger-B9q7E6uE.mjs.map
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/logger.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$logger$2d$B9q7E6uE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/logger-B9q7E6uE.mjs [app-client] (ecmascript)");
;
;
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/apiUrlFromPublishableKey-B2KkwQp6.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiUrlFromPublishableKey",
    ()=>apiUrlFromPublishableKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$constants$2d$ByUssRbE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/constants-ByUssRbE.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$keys$2d$YNv6yjKk$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/keys-YNv6yjKk.mjs [app-client] (ecmascript)");
;
;
//#region src/apiUrlFromPublishableKey.ts
/**
* Get the correct API url based on the publishable key.
*
* @param publishableKey - The publishable key to parse.
* @returns One of Clerk's API URLs.
*/ const apiUrlFromPublishableKey = (publishableKey)=>{
    var _parsePublishableKey;
    const frontendApi = (_parsePublishableKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$keys$2d$YNv6yjKk$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePublishableKey"])(publishableKey)) === null || _parsePublishableKey === void 0 ? void 0 : _parsePublishableKey.frontendApi;
    if ((frontendApi === null || frontendApi === void 0 ? void 0 : frontendApi.startsWith("clerk.")) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$constants$2d$ByUssRbE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEGACY_DEV_INSTANCE_SUFFIXES"].some((suffix)=>frontendApi === null || frontendApi === void 0 ? void 0 : frontendApi.endsWith(suffix))) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$constants$2d$ByUssRbE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROD_API_URL"];
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$constants$2d$ByUssRbE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCAL_ENV_SUFFIXES"].some((suffix)=>frontendApi === null || frontendApi === void 0 ? void 0 : frontendApi.endsWith(suffix))) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$constants$2d$ByUssRbE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCAL_API_URL"];
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$constants$2d$ByUssRbE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAGING_ENV_SUFFIXES"].some((suffix)=>frontendApi === null || frontendApi === void 0 ? void 0 : frontendApi.endsWith(suffix))) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$constants$2d$ByUssRbE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAGING_API_URL"];
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$constants$2d$ByUssRbE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROD_API_URL"];
};
;
 //# sourceMappingURL=apiUrlFromPublishableKey-B2KkwQp6.mjs.map
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/apiUrlFromPublishableKey.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$constants$2d$ByUssRbE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/constants-ByUssRbE.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$isomorphicAtob$2d$DybBXGFR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/isomorphicAtob-DybBXGFR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$isomorphicBtoa$2d$Dr7WubZv$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/isomorphicBtoa-Dr7WubZv.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$keys$2d$YNv6yjKk$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/keys-YNv6yjKk.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$apiUrlFromPublishableKey$2d$B2KkwQp6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/apiUrlFromPublishableKey-B2KkwQp6.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/underscore.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$47$2e$8_react$2d$_d43637bfe4014d0b0c61ca38a56e7489$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$runtime$2f$underscore$2d$DjQrhefX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.47.8_react-_d43637bfe4014d0b0c61ca38a56e7489/node_modules/@clerk/shared/dist/runtime/underscore-DjQrhefX.mjs [app-client] (ecmascript)");
;
;
}),
]);

//# sourceMappingURL=ec092_%40clerk_shared_dist_runtime_0398206b._.js.map