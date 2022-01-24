var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/chidiebube/Projects/wordle/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_remix4 = __toModule(require_remix());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-REEKCIMV.css";

// route-module:/Users/chidiebube/Projects/wordle/app/root.tsx
var import_react_toastify = __toModule(require("react-toastify"));

// app/global.css
var global_default = "/build/_assets/global-QOPNEI5R.css";

// app/components/Navbar.tsx
init_react();
var import_react = __toModule(require("react"));
var import_remix2 = __toModule(require_remix());
var Navbar = ({ user }) => {
  const [navbar, setNavbar] = (0, import_react.useState)(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "px-4 py-3 fixed top-0 w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-white font-courgette text-3xl font-bold"
  }, "Wordle Champ"), /* @__PURE__ */ React.createElement("div", {
    className: "cursor-pointer",
    onClick: () => setNavbar(!navbar)
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-8 w-8",
    fill: "#fff",
    viewBox: "0 0 24 24",
    stroke: "#fff"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 6h16M4 12h16M4 18h16"
  }))))), /* @__PURE__ */ React.createElement("div", {
    className: `w-8/12 md:w-2/4 lg:1/4 xl:w-1/5 h-full fixed top-0 left-0 bg-gray-700 z-30 py-3 px-4 transition-opacity duration-300 ${navbar ? "opacity-100" : "opacity-0 -z-10"}`
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-white font-courgette text-3xl font-bold"
  }, "Wordle Champ"), /* @__PURE__ */ React.createElement("div", {
    className: "h-full w-full flex items-center"
  }, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", {
    className: "my-8"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    reloadDocument: true,
    className: "text-gray-200 cursor-pointer text-2xl hover:underline hover:text-sky-400 ",
    to: "/"
  }, "Home")), /* @__PURE__ */ React.createElement("li", {
    className: "my-8"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    reloadDocument: true,
    className: "text-gray-200 cursor-pointer text-2xl hover:underline hover:text-sky-400",
    to: "/play"
  }, "Play")), /* @__PURE__ */ React.createElement("li", {
    className: "my-8"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    reloadDocument: true,
    className: "text-gray-200 cursor-pointer text-2xl hover:underline hover:text-sky-400",
    to: "/leaderboard"
  }, "Leaderboard")), /* @__PURE__ */ React.createElement("li", {
    className: "my-8"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    reloadDocument: true,
    className: "text-gray-200 cursor-pointer text-2xl hover:underline hover:text-sky-400",
    to: user ? "/logout" : "/login"
  }, user ? "Logout" : "Login"))))));
};
var Navbar_default = Navbar;

// app/utils/session.server.ts
init_react();
var import_bcryptjs = __toModule(require("bcryptjs"));
var import_remix3 = __toModule(require_remix());

// app/utils/db.server.ts
init_react();
var import_client = __toModule(require("@prisma/client"));
var db;
if (false) {
  db = new import_client.PrismaClient();
  db.$connect();
} else {
  if (!global.__db) {
    global.__db = new import_client.PrismaClient();
    global.__db.$connect();
  }
  db = global.__db;
}

// app/utils/session.server.ts
var saltRounds = 10;
async function register({ username, password, country, countryEmoji }) {
  const passwordHash = await import_bcryptjs.default.hash(password, saltRounds);
  const user = await db.user.create({
    data: { username, passwordHash, score: 0, country, countryEmoji }
  });
  return user;
}
async function login({ username, password }) {
  const user = await db.user.findUnique({
    where: { username }
  });
  if (!user)
    return null;
  const isCorrectPassword = await import_bcryptjs.default.compare(password, user.passwordHash);
  if (!isCorrectPassword)
    return null;
  return user;
}
async function getUser(request) {
  const userId = await getUserId(request);
  if (typeof userId !== "string") {
    return null;
  }
  try {
    const user = await db.user.findUnique({
      where: { id: userId }
    });
    return user;
  } catch {
    throw logout(request);
  }
}
async function logout(request) {
  const session = await storage.getSession(request.headers.get("Cookie"));
  return (0, import_remix3.redirect)("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}
var storage = (0, import_remix3.createCookieSessionStorage)({
  cookie: {
    name: "Wordle_session",
    secure: false,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true
  }
});
async function createUserSession(userId, redirectTo) {
  const session = await storage.getSession();
  session.set("userId", userId);
  return (0, import_remix3.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}
function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function getUserId(request) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string")
    return null;
  return userId;
}

// route-module:/Users/chidiebube/Projects/wordle/app/root.tsx
var meta = () => {
  return { title: "Wordle App" };
};
var links = () => {
  return [
    { rel: "stylesheet", href: tailwind_default },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "true" },
    { rel: "stylesheet", href: global_default },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Courgette&display=swap"
    },
    {
      rel: "preconnect",
      crossOrigin: "true",
      href: "https://kit.fontawesome.com/36afc40636.js"
    }
  ];
};
var loader = async ({ request }) => {
  let user = await getUser(request);
  return user;
};
function App() {
  const user = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix4.Meta, null), /* @__PURE__ */ React.createElement(import_remix4.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(Navbar_default, {
    user
  }), /* @__PURE__ */ React.createElement(import_react_toastify.ToastContainer, null), /* @__PURE__ */ React.createElement(import_remix4.Outlet, null), /* @__PURE__ */ React.createElement(import_remix4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix4.Scripts, null), /* @__PURE__ */ React.createElement(import_remix4.LiveReload, null)));
}

// route-module:/Users/chidiebube/Projects/wordle/app/routes/leaderboard.tsx
var leaderboard_exports = {};
__export(leaderboard_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => leaderboard_default,
  loader: () => loader2
});
init_react();
var import_remix5 = __toModule(require_remix());

// app/components/Pagination.tsx
init_react();
var Pagination = ({ users, paginate, totalUsers, page, lastPage }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full shadow-slate-400 shadow-lg p-2 mt-4"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("ul", {
    className: "flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement("li", {
    onClick: () => paginate(1),
    className: `${page === 1 ? "disabled" : ""} mr-2 text-blue-600 font-bold cursor-pointer`
  }, /* @__PURE__ */ React.createElement("span", null, "First")), /* @__PURE__ */ React.createElement("li", {
    onClick: () => paginate(+page - 1),
    className: `${page === 1 ? "disabled" : ""}  mr-2 text-blue-600 font-bold cursor-pointer`
  }, /* @__PURE__ */ React.createElement("span", null, "Previous")), new Array(lastPage).fill("x").map((c, index) => {
    let item = index + 1;
    return /* @__PURE__ */ React.createElement("li", {
      key: index,
      className: `${page === item ? "active" : ""} mx-2 border-2 rounded-full border-blue-600 w-8 cursor-pointer text-lg text-center text-blue-600`,
      onClick: () => paginate(item)
    }, /* @__PURE__ */ React.createElement("span", null, item));
  }), /* @__PURE__ */ React.createElement("li", {
    onClick: () => paginate(+page + 1),
    className: `${page === lastPage ? "disabled" : ""} ml-2 text-blue-600 font-bold cursor-pointer`
  }, /* @__PURE__ */ React.createElement("span", null, "Next")), /* @__PURE__ */ React.createElement("li", {
    onClick: () => paginate(lastPage),
    className: `${page === lastPage ? "disabled" : ""} ml-2 text-blue-600 font-bold cursor-pointer`
  }, /* @__PURE__ */ React.createElement("span", null, "Last")))));
};
var Pagination_default = Pagination;

// app/utils/queries.server.ts
init_react();
async function updateScore(userId, score) {
  let updatedUser = await db.user.update({
    where: { id: userId },
    data: {
      score: {
        increment: score
      }
    }
  });
  return updatedUser;
}
async function getUsers(skip, total) {
  let users = await db.user.findMany({
    skip,
    take: total,
    orderBy: {
      score: "desc"
    }
  });
  let totalUsers = await db.user.count();
  return {
    users,
    totalUsers
  };
}

// route-module:/Users/chidiebube/Projects/wordle/app/routes/leaderboard.tsx
var loader2 = async ({ request }) => {
  const url = new URL(request.url);
  const page = url.searchParams.get("page") || 1;
  let perPage = 10;
  let skip = perPage * page - perPage;
  const { users, totalUsers } = await getUsers(skip, perPage);
  let lastPage = Math.ceil(totalUsers / perPage);
  return { users, totalUsers, page, lastPage, perPage };
};
var Leaderboard = () => {
  const submit = (0, import_remix5.useSubmit)();
  const { users, totalUsers, page, lastPage, perPage } = (0, import_remix5.useLoaderData)();
  console.log("users", users);
  const paginate = (goTo) => {
    if (goTo < 1 || goTo > +lastPage) {
      return;
    }
    submit({ page: String(goTo) }, { method: "get" });
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bg-blackbg h-screen w-screen"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center items-center h-full w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-white rounded-lg w-11/12 md:w-2/4 p-6 min-h-min"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-center text-2xl mb-6 font-bold"
  }, "Leaderboard"), /* @__PURE__ */ React.createElement("table", {
    className: "border-collapse w-full"
  }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", {
    className: "shadow-md"
  }, /* @__PURE__ */ React.createElement("th", {
    className: "text-center py-6",
    onClick: () => paginate(1)
  }, "Rank"), /* @__PURE__ */ React.createElement("th", {
    className: "text-center py-6"
  }, "Username"), /* @__PURE__ */ React.createElement("th", {
    className: "text-center py-6"
  }, "Country"), /* @__PURE__ */ React.createElement("th", {
    className: "text-center py-6"
  }, "Points"))), /* @__PURE__ */ React.createElement("tbody", {
    className: ""
  }, users.length ? users.map((user, i) => /* @__PURE__ */ React.createElement("tr", {
    className: "border-b-2 border-solid",
    key: i
  }, /* @__PURE__ */ React.createElement("td", {
    className: `text-center py-4 ${i === 0 ? "text-blue-600 font-bold" : null}`
  }, "#", i + 1 + perPage * page - perPage), /* @__PURE__ */ React.createElement("td", {
    className: `text-center py-4 ${i === 0 ? "text-blue-600 font-bold" : null}`
  }, user.username), /* @__PURE__ */ React.createElement("td", {
    className: `text-center py-4 ${i === 0 ? "text-blue-600 font-bold" : null}`
  }, user.country + " " + user.countryEmoji), /* @__PURE__ */ React.createElement("td", {
    className: `text-center py-4 ${i === 0 ? "text-blue-600 font-bold" : null}`
  }, user.score))) : null)), /* @__PURE__ */ React.createElement(Pagination_default, {
    users,
    paginate,
    totalUsers,
    page,
    lastPage
  })))));
};
function ErrorBoundary() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-screen h-screen bg-blackbg flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-center"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-white font-bold text-4xl"
  }, "An error ?! I knew software engineering was not my thing! "), /* @__PURE__ */ React.createElement(import_remix5.Link, {
    className: "text-blue-600 text-2xl underline mt-4 block",
    to: "/leaderboard"
  }, "Go Back")));
}
var leaderboard_default = Leaderboard;

// route-module:/Users/chidiebube/Projects/wordle/app/routes/register.tsx
var register_exports = {};
__export(register_exports, {
  action: () => action,
  default: () => register_default
});
init_react();
var import_remix6 = __toModule(require_remix());

// app/utils/validation.ts
init_react();
function validateUsername(username) {
  if (typeof username !== "string" || username.length < 3) {
    return `Username must be at least 3 characters long`;
  }
}
function validatePassword(password) {
  if (typeof password !== "string" || password.length < 6) {
    return `Passwords must be at least 6 characters long`;
  }
}
function validateCountry(country) {
  if (typeof country !== "string" || country.length < 4) {
    return `Please select a valid country`;
  }
}

// app/components/CountrySelect.tsx
init_react();
var import_react_select = __toModule(require("react-select"));
var import_countries_list = __toModule(require("countries-list"));
var import_react2 = __toModule(require("react"));
var CountrySelect = () => {
  const [options, setOptions] = (0, import_react2.useState)([]);
  const customStyles = {
    container: (provided) => __spreadProps(__spreadValues({}, provided), {
      border: "1px solid #000",
      borderRadius: "6px"
    }),
    input: (provided) => __spreadProps(__spreadValues({}, provided), {
      padding: 16,
      color: "#000"
    }),
    singleValue: (provided) => __spreadProps(__spreadValues({}, provided), {
      fontSize: "18px"
    })
  };
  (0, import_react2.useEffect)(() => {
    buildData();
  }, []);
  const buildData = () => {
    let data = Object.values(import_countries_list.countries).map(({ name, emoji }) => ({ label: name + " " + emoji, value: name + "//" + emoji, emoji }));
    setOptions(data);
  };
  return /* @__PURE__ */ React.createElement(import_react_select.default, {
    options,
    styles: customStyles,
    name: "country"
  });
};
var CountrySelect_default = CountrySelect;

// route-module:/Users/chidiebube/Projects/wordle/app/routes/register.tsx
var badRequest = (data) => (0, import_remix6.json)(data, { status: 400 });
var action = async ({ request }) => {
  const form = await request.formData();
  const username = form.get("username");
  const password = form.get("password");
  const countryData = form.get("country");
  const country = countryData.split("//")[0];
  const countryEmoji = countryData.split("//")[1];
  if (typeof username !== "string" || typeof password !== "string") {
    return badRequest({
      formError: `Form not submitted correctly.`
    });
  }
  const fields = { username, password, country };
  const fieldErrors = {
    username: validateUsername(username),
    password: validatePassword(password),
    country: validateCountry(country)
  };
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({ fieldErrors, fields });
  const user = await register({ username, password, country, countryEmoji });
  console.log({ user });
  if (!user) {
    return {
      fields,
      formError: `Username/Password combination is incorrect`
    };
  }
  return createUserSession(user.id, "/play");
};
var Register = () => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const actionData = (0, import_remix6.useActionData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bg-blackbg h-screen w-screen"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-full w-full flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-white w-11/12 md:w-2/4 lg:w-1/3 h-3/5 p-8 rounded-lg flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement(import_remix6.Form, {
    method: "post",
    className: "w-full",
    autoComplete: "off",
    "aria-describedby": (actionData == null ? void 0 : actionData.formError) ? "There was an error" : void 0
  }, /* @__PURE__ */ React.createElement("legend", {
    className: "text-2xl font-bold"
  }, "Register"), /* @__PURE__ */ React.createElement("div", {
    className: "my-6"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "block text-xl",
    htmlFor: "username"
  }, "Username"), /* @__PURE__ */ React.createElement("input", {
    id: "username",
    autoComplete: "off",
    autoCorrect: "off",
    name: "username",
    placeholder: "Enter Username",
    className: "p-4 rounded-md w-full border-blackbg border-solid border-2 bg-transparent text-lg",
    defaultValue: (_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.username,
    "aria-invalid": Boolean((_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.username),
    "aria-describedby": ((_c = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _c.username) ? "username-error" : void 0
  }), ((_d = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _d.username) ? /* @__PURE__ */ React.createElement("p", {
    className: "text-sm text-red-500",
    role: "alert",
    id: "username-error"
  }, actionData == null ? void 0 : actionData.fieldErrors.username) : null), /* @__PURE__ */ React.createElement("div", {
    className: "my-6"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "block text-xl",
    htmlFor: "country"
  }, "Country"), /* @__PURE__ */ React.createElement(CountrySelect_default, null), ((_e = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _e.country) ? /* @__PURE__ */ React.createElement("p", {
    className: "text-sm text-red-500",
    role: "alert",
    id: "password-error"
  }, actionData == null ? void 0 : actionData.fieldErrors.country) : null), /* @__PURE__ */ React.createElement("div", {
    className: "my-6"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "block text-xl",
    htmlFor: "password"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    id: "password",
    name: "password",
    placeholder: "Enter Password",
    type: "password",
    className: "p-4 rounded-md w-full border-blackbg border-solid border-2 bg-transparent text-lg",
    defaultValue: (_f = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _f.password,
    "aria-invalid": Boolean((_g = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _g.password) || void 0,
    "aria-describedby": ((_h = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _h.password) ? "password-error" : void 0
  }), ((_i = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _i.password) ? /* @__PURE__ */ React.createElement("p", {
    className: "text-sm text-red-500",
    role: "alert",
    id: "password-error"
  }, actionData == null ? void 0 : actionData.fieldErrors.password) : null), /* @__PURE__ */ React.createElement("div", {
    id: "form-error-message"
  }, (actionData == null ? void 0 : actionData.formError) ? /* @__PURE__ */ React.createElement("p", {
    className: "text-sm text-red-500",
    role: "alert"
  }, actionData == null ? void 0 : actionData.formError) : null), /* @__PURE__ */ React.createElement("div", {
    className: "text-right"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "bg-sky-500 px-5 py-3 rounded-md text-white text-center cursor-pointer w-2/4 text-sm md:text-lg"
  }, "Submit")), /* @__PURE__ */ React.createElement("p", {
    className: "text-center py-6"
  }, "Already have an account ?", " ", /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: "/login",
    className: "text-sky-500 underline cursor-pointer"
  }, "Login")))))));
};
var register_default = Register;

// route-module:/Users/chidiebube/Projects/wordle/app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  loader: () => loader3
});
init_react();
var loader3 = async ({ request }) => {
  return logout(request);
};

// route-module:/Users/chidiebube/Projects/wordle/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader4,
  meta: () => meta2
});
init_react();
var import_remix7 = __toModule(require_remix());
var meta2 = () => {
  return {
    title: "WORDLE CHAMP - Built with Remix!",
    description: "Do you have what it takes to compete globally? Play now!"
  };
};
var loader4 = async ({ request }) => {
  let user = await getUser(request);
  console.log(user);
  return user;
};
function Index() {
  const user = (0, import_remix7.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bg-blackbg h-screen w-screen"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-center h-full w-full"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", {
    className: "text-white text-3xl md:text-5xl font-bold text-center"
  }, "WORDLE CHAMP"), !user ? /* @__PURE__ */ React.createElement("p", {
    className: "text-white text-lg text-center mt-4"
  }, "Do you have what it takes to compete globally ?", " ", /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "/register",
    className: "text-sky-400 cursor-pointer"
  }, "Sign up"), " ", "to appear on the global leaderboard") : /* @__PURE__ */ React.createElement("p", {
    className: "text-white text-lg text-center mt-4"
  }, "Welcome ", /* @__PURE__ */ React.createElement("span", {
    className: "text-blue-400"
  }, user.username), ", you current have ", user.score, " points. You can do better!"), /* @__PURE__ */ React.createElement("div", {
    className: "my-8 flex justify-evenly"
  }, /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "/play",
    className: "bg-blue-600 text-white text-md md:text-xl w-1/3 rounded-lg py-3 text-center cursor-pointer"
  }, "Play"), /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "/leaderboard",
    className: "bg-blue-600 text-white text-md md:text-xl w-1/3 rounded-lg py-3 text-center cursor-pointer"
  }, "Leaderboard"))))));
}

// route-module:/Users/chidiebube/Projects/wordle/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => login_default
});
init_react();
var import_remix8 = __toModule(require_remix());
var badRequest2 = (data) => (0, import_remix8.json)(data, { status: 400 });
var action2 = async ({ request }) => {
  const form = await request.formData();
  const username = form.get("username");
  const password = form.get("password");
  if (typeof username !== "string" || typeof password !== "string") {
    return badRequest2({
      formError: `Form not submitted correctly.`
    });
  }
  const fields = { username, password };
  const fieldErrors = {
    username: validateUsername(username),
    password: validatePassword(password)
  };
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest2({ fieldErrors, fields });
  const user = await login({ username, password });
  console.log({ user });
  if (!user) {
    return {
      fields,
      formError: `Username/Password combination is incorrect`
    };
  }
  return createUserSession(user.id, "/play");
};
var Login = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bg-blackbg h-screen w-screen"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-full w-full flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-white w-11/12 md:w-2/4 lg:w-1/3 h-3/5 p-8 rounded-lg flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement(import_remix8.Form, {
    method: "post",
    className: "w-full",
    autoComplete: "off"
  }, /* @__PURE__ */ React.createElement("legend", {
    className: "text-xl font-bold"
  }, "Log in"), /* @__PURE__ */ React.createElement("div", {
    className: "my-6"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "block text-xl"
  }, "Username"), /* @__PURE__ */ React.createElement("input", {
    autoComplete: "off",
    autoCorrect: "off",
    name: "username",
    placeholder: "Enter Username",
    className: "p-4 rounded-md w-full border-blackbg border-solid border-2 bg-transparent text-lg"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "my-6"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "block text-xl"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    name: "password",
    placeholder: "Enter Password",
    type: "password",
    className: "p-4 rounded-md w-full border-blackbg border-solid border-2 bg-transparent text-lg"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "text-right"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "bg-sky-500 px-5 py-3 rounded-md text-white text-center cursor-pointer w-2/4 text-sm md:text-lg"
  }, "Submit")), /* @__PURE__ */ React.createElement("p", {
    className: "text-center py-6"
  }, "Don't have an account ?", " ", /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: "/register",
    className: "text-sky-500 underline cursor-pointer"
  }, "Register")))))));
};
var login_default = Login;

// route-module:/Users/chidiebube/Projects/wordle/app/routes/play.tsx
var play_exports = {};
__export(play_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  action: () => action3,
  default: () => play_default,
  loader: () => loader5
});
init_react();
var import_react3 = __toModule(require("react"));
var import_remix9 = __toModule(require_remix());

// app/components/Keyboard.tsx
init_react();
var letters = "Q,W,E,R,T,Y,U,I,O,P A,S,D,F,G,H,J,K,L Enter,Z,X,C,V,B,N,M,CLR";
var Keyboard = (props) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "p-2"
  }, letters.split(" ").map((row) => /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-center",
    key: row
  }, row.split(",").map((letter) => {
    return /* @__PURE__ */ React.createElement("span", {
      onClick: () => props.addLetter(letter),
      className: `border-2 bg-gray-300 border-gray-300 rounded-sm w-14 h-12 flex items-center justify-center mx-1 my-2 cursor-pointer ${props.keyStyle[letter]}`,
      key: letter
    }, letter === "CLR" ? /* @__PURE__ */ React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-6 w-6",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, /* @__PURE__ */ React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 1.5,
      d: "M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
    })) : letter);
  }))));
};
var Keyboard_default = Keyboard;

// app/utils/toastHandler.ts
init_react();
var import_react_toastify2 = __toModule(require("react-toastify"));
var toastHandler = (message = "\u{1F984} Wow so easy!", time = 5e3) => {
  return (0, import_react_toastify2.toast)(message, {
    position: "top-center",
    autoClose: time,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: void 0
  });
};

// route-module:/Users/chidiebube/Projects/wordle/app/routes/play.tsx
var loader5 = async ({ request }) => {
  const data = {
    words: await db.words.findMany()
  };
  let formattedWords = data.words.map((word) => word.word);
  let random = Math.floor(Math.random() * 9337);
  console.log(formattedWords.length);
  let randomWord = formattedWords[random].toUpperCase();
  console.log(randomWord);
  return {
    allWords: formattedWords,
    wordToGuess: randomWord,
    initialResponse: Array.from({ length: 6 }, (e) => Array.from({ length: 5 }, () => ({ letter: "", className: "text-white bg-blue" })))
  };
};
var action3 = async ({ request }) => {
  const userId = await getUserId(request);
  let data = await request.formData();
  let status = data.get("status");
  let score = data.get("score");
  let redirectTo = "";
  if (status === "win" && score) {
    if (userId) {
      let updatedScore = await updateScore(userId, +score);
      if (!updatedScore) {
        return;
      }
    }
    redirectTo = "/play/win";
  }
  if (status === "lose") {
    redirectTo = "/play/lose";
  }
  return (0, import_remix9.redirect)(redirectTo);
};
var Play = () => {
  const { allWords, wordToGuess, initialResponse } = (0, import_remix9.useLoaderData)();
  const submit = (0, import_remix9.useSubmit)();
  const [currentRow, setCurrentRow] = (0, import_react3.useState)(0);
  const [responses, setResponses] = (0, import_react3.useState)(initialResponse);
  const [wrongGuess, setWrongGuess] = (0, import_react3.useState)(false);
  const [keyStyle, setKeyStyle] = (0, import_react3.useState)({});
  const getCurrentWord = () => {
    return responses[currentRow].map((elem) => elem.letter).join("");
  };
  const addLetter = (letter) => {
    let responseTuple = [...responses];
    let rowWord = getCurrentWord();
    if (letter.toLowerCase() === "enter") {
      saveEntry();
      return;
    }
    if (letter.toLowerCase() === "clr") {
      setWrongGuess(false);
      removeLetter();
      return;
    }
    let validated = validateEntry(rowWord);
    if (!validated)
      return;
    responseTuple[currentRow][rowWord.length].letter = letter;
    setResponses(responseTuple);
  };
  const removeLetter = () => {
    let word = getCurrentWord();
    if (word.length === 0) {
      return;
    }
    let responseTuple = [...responses];
    responseTuple[currentRow][word.length - 1].letter = "";
    setResponses(responseTuple);
  };
  const validateEntry = (rowWord) => {
    if (rowWord.length === 5) {
      return false;
    }
    return true;
  };
  const saveEntry = () => {
    let validated = saveResponse();
    if (!validated) {
      return;
    }
    setCurrentRow((c) => c + 1);
  };
  const endGame = async (status) => {
    setCurrentRow(0);
    setResponses(Array.from({ length: 6 }, (e) => Array.from({ length: 5 }, () => ({ letter: "", className: "text-white bg-blue" }))));
    setKeyStyle({});
    if (status === "win") {
      submit({ status, score: String(6 - currentRow) }, { method: "post" });
    } else {
      submit({ status }, { method: "post" });
    }
  };
  const markKeys = (obj) => {
    setKeyStyle(__spreadValues(__spreadValues({}, keyStyle), obj));
  };
  const checkDictionary = (word) => {
    if (!allWords.includes(word.toLowerCase())) {
      toastHandler("Word not in dictionary!", 2e3);
      setWrongGuess(true);
      return false;
    }
    return true;
  };
  const saveResponse = () => {
    let responseTuple = [...responses];
    let currentWord = getCurrentWord();
    const keys = {};
    if (currentWord.length < 5) {
      return false;
    }
    if (!checkDictionary(currentWord))
      return false;
    for (let i = 0; i < wordToGuess.length; i++) {
      let word = responseTuple[currentRow];
      if (wordToGuess.includes(word[i].letter) && word[i].letter !== wordToGuess[i]) {
        keys[word[i].letter] = "text-white bg-yellow-600";
        word[i].className = "text-white bg-yellow-600";
      } else if (word[i].letter === wordToGuess[i]) {
        keys[word[i].letter] = "text-white bg-green-800";
        word[i].className = "text-white bg-green-800";
      } else {
        word[i].className = "text-white bg-gray-600";
        keys[word[i].letter] = "text-white bg-gray-900";
      }
    }
    markKeys(keys);
    setResponses(responseTuple);
    let gameStatus = currentWord === wordToGuess ? "win" : currentRow === 5 ? "lose" : null;
    if (gameStatus) {
      endGame(gameStatus);
    }
    return true;
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bg-blackbg h-screen w-screen"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-2/3 w-full flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: `grid gap-4 grid-cols-5 grid-rows-5 p-3 ${wrongGuess ? "animate-shake" : null}`
  }, responses.map((response, idx) => {
    return response.map((letter, i) => {
      return /* @__PURE__ */ React.createElement("div", {
        key: i,
        className: `border-gray-300 border-2 rounded-sm p-4 font-bold text-3xl w-14 h-12 flex items-center justify-center ${letter.className}`
      }, letter.letter);
    });
  })))), /* @__PURE__ */ React.createElement("div", {
    className: " w-full absolute bottom-8"
  }, /* @__PURE__ */ React.createElement(Keyboard_default, {
    addLetter,
    keyStyle
  })), /* @__PURE__ */ React.createElement(import_remix9.Outlet, null)));
};
function ErrorBoundary2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-screen h-screen bg-blackbg flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-center"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-white font-bold text-4xl"
  }, "An error ?! I knew software engineering was not my thing! "), /* @__PURE__ */ React.createElement(import_remix9.Link, {
    className: "text-blue-600 text-2xl underline mt-4 block",
    to: "/play"
  }, "Go Back")));
}
var play_default = Play;

// route-module:/Users/chidiebube/Projects/wordle/app/routes/play/lose.tsx
var lose_exports = {};
__export(lose_exports, {
  default: () => lose_default
});
init_react();

// app/components/Modal.tsx
init_react();
var import_remix10 = __toModule(require_remix());
var Modal = ({ icon, title, message, iconStyle }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-screen h-screen bg-black bg-opacity-80 fixed z-20 top-0 left-0 flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-11/12 lg:w-1/3 h-1/3 bg-white rounded-xl  px-5 flex items-center relative justify-center text-black"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-center"
  }, /* @__PURE__ */ React.createElement("i", {
    className: iconStyle
  }, icon), /* @__PURE__ */ React.createElement("p", {
    className: "text-4xl font-bold m-0 p-0"
  }, title), /* @__PURE__ */ React.createElement("p", {
    className: "text-xl my-4 "
  }, message), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-around mt-8"
  }, /* @__PURE__ */ React.createElement(import_remix10.Link, {
    to: "/play",
    reloadDocument: true,
    className: "text-blue-600 hover:underline text-lg"
  }, "Restart Game"), /* @__PURE__ */ React.createElement(import_remix10.Link, {
    to: "/leaderboard",
    reloadDocument: true,
    className: "text-blue-600 hover:underline text-lg"
  }, "View Leaderboard")))));
};
var Modal_default = Modal;

// route-module:/Users/chidiebube/Projects/wordle/app/routes/play/lose.tsx
var Lose = () => {
  return /* @__PURE__ */ React.createElement(Modal_default, {
    icon: "\u2717",
    title: "SORRY!!",
    message: "You lost this round! would you retry?",
    iconStyle: "text-red-600 text-8xl m-0 p-0"
  });
};
var lose_default = Lose;

// route-module:/Users/chidiebube/Projects/wordle/app/routes/play/win.tsx
var win_exports = {};
__export(win_exports, {
  default: () => win_default
});
init_react();
var Win = () => {
  return /* @__PURE__ */ React.createElement(Modal_default, {
    icon: "\u2713",
    title: "YIPEE!!",
    message: "Congratulations! You have WON the game!",
    iconStyle: "text-green-600 text-8xl m-0 p-0"
  });
};
var win_default = Win;

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/leaderboard": {
    id: "routes/leaderboard",
    parentId: "root",
    path: "leaderboard",
    index: void 0,
    caseSensitive: void 0,
    module: leaderboard_exports
  },
  "routes/register": {
    id: "routes/register",
    parentId: "root",
    path: "register",
    index: void 0,
    caseSensitive: void 0,
    module: register_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/play": {
    id: "routes/play",
    parentId: "root",
    path: "play",
    index: void 0,
    caseSensitive: void 0,
    module: play_exports
  },
  "routes/play/lose": {
    id: "routes/play/lose",
    parentId: "routes/play",
    path: "lose",
    index: void 0,
    caseSensitive: void 0,
    module: lose_exports
  },
  "routes/play/win": {
    id: "routes/play/win",
    parentId: "routes/play",
    path: "win",
    index: void 0,
    caseSensitive: void 0,
    module: win_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9jaGlkaWVidWJlL1Byb2plY3RzL3dvcmRsZS9hcHAvcm9vdC50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvTmF2YmFyLnRzeCIsICIuLi8uLi9hcHAvdXRpbHMvc2Vzc2lvbi5zZXJ2ZXIudHMiLCAiLi4vLi4vYXBwL3V0aWxzL2RiLnNlcnZlci50cyIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2NoaWRpZWJ1YmUvUHJvamVjdHMvd29yZGxlL2FwcC9yb3V0ZXMvbGVhZGVyYm9hcmQudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL1BhZ2luYXRpb24udHN4IiwgIi4uLy4uL2FwcC91dGlscy9xdWVyaWVzLnNlcnZlci50cyIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2NoaWRpZWJ1YmUvUHJvamVjdHMvd29yZGxlL2FwcC9yb3V0ZXMvcmVnaXN0ZXIudHN4IiwgIi4uLy4uL2FwcC91dGlscy92YWxpZGF0aW9uLnRzIiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL0NvdW50cnlTZWxlY3QudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvY2hpZGllYnViZS9Qcm9qZWN0cy93b3JkbGUvYXBwL3JvdXRlcy9sb2dvdXQudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvY2hpZGllYnViZS9Qcm9qZWN0cy93b3JkbGUvYXBwL3JvdXRlcy9pbmRleC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9jaGlkaWVidWJlL1Byb2plY3RzL3dvcmRsZS9hcHAvcm91dGVzL2xvZ2luLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2NoaWRpZWJ1YmUvUHJvamVjdHMvd29yZGxlL2FwcC9yb3V0ZXMvcGxheS50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvS2V5Ym9hcmQudHN4IiwgIi4uLy4uL2FwcC91dGlscy90b2FzdEhhbmRsZXIudHMiLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9jaGlkaWVidWJlL1Byb2plY3RzL3dvcmRsZS9hcHAvcm91dGVzL3BsYXkvbG9zZS50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvTW9kYWwudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvY2hpZGllYnViZS9Qcm9qZWN0cy93b3JkbGUvYXBwL3JvdXRlcy9wbGF5L3dpbi50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcbiIsICIvKipcbiAqIHJlbWl4IHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjbGllbnQgPSByZXF1aXJlKCcuL2NsaWVudCcpO1xudmFyIHNlcnZlciA9IHJlcXVpcmUoJy4vc2VydmVyJyk7XG52YXIgcGxhdGZvcm0gPSByZXF1aXJlKCcuL3BsYXRmb3JtJyk7XG5cblxuXG5PYmplY3Qua2V5cyhjbGllbnQpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xpZW50W2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhzZXJ2ZXIpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyW2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhwbGF0Zm9ybSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwbGF0Zm9ybVtrXTsgfVxuXHR9KTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9jaGlkaWVidWJlL1Byb2plY3RzL3dvcmRsZS9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvY2hpZGllYnViZS9Qcm9qZWN0cy93b3JkbGUvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9jaGlkaWVidWJlL1Byb2plY3RzL3dvcmRsZS9hcHAvcm91dGVzL2xlYWRlcmJvYXJkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvY2hpZGllYnViZS9Qcm9qZWN0cy93b3JkbGUvYXBwL3JvdXRlcy9yZWdpc3Rlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL2NoaWRpZWJ1YmUvUHJvamVjdHMvd29yZGxlL2FwcC9yb3V0ZXMvbG9nb3V0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvY2hpZGllYnViZS9Qcm9qZWN0cy93b3JkbGUvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL2NoaWRpZWJ1YmUvUHJvamVjdHMvd29yZGxlL2FwcC9yb3V0ZXMvbG9naW4udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9jaGlkaWVidWJlL1Byb2plY3RzL3dvcmRsZS9hcHAvcm91dGVzL3BsYXkudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9Vc2Vycy9jaGlkaWVidWJlL1Byb2plY3RzL3dvcmRsZS9hcHAvcm91dGVzL3BsYXkvbG9zZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiL1VzZXJzL2NoaWRpZWJ1YmUvUHJvamVjdHMvd29yZGxlL2FwcC9yb3V0ZXMvcGxheS93aW4udHN4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc29uXCI7XG5leHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gIFwicm9vdFwiOiB7XG4gICAgaWQ6IFwicm9vdFwiLFxuICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgcGF0aDogXCJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMFxuICB9LFxuICBcInJvdXRlcy9sZWFkZXJib2FyZFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2xlYWRlcmJvYXJkXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwibGVhZGVyYm9hcmRcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMVxuICB9LFxuICBcInJvdXRlcy9yZWdpc3RlclwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3JlZ2lzdGVyXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwicmVnaXN0ZXJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMlxuICB9LFxuICBcInJvdXRlcy9sb2dvdXRcIjoge1xuICAgIGlkOiBcInJvdXRlcy9sb2dvdXRcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJsb2dvdXRcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlM1xuICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTRcbiAgfSxcbiAgXCJyb3V0ZXMvbG9naW5cIjoge1xuICAgIGlkOiBcInJvdXRlcy9sb2dpblwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTVcbiAgfSxcbiAgXCJyb3V0ZXMvcGxheVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3BsYXlcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJwbGF5XCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTZcbiAgfSxcbiAgXCJyb3V0ZXMvcGxheS9sb3NlXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcGxheS9sb3NlXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL3BsYXlcIixcbiAgICBwYXRoOiBcImxvc2VcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlN1xuICB9LFxuICBcInJvdXRlcy9wbGF5L3dpblwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3BsYXkvd2luXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL3BsYXlcIixcbiAgICBwYXRoOiBcIndpblwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU4XG4gIH1cbn07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgTGlua3MsIExpbmtzRnVuY3Rpb24sIExpdmVSZWxvYWQsIExvYWRlckZ1bmN0aW9uLCBNZXRhLCBPdXRsZXQsIFNjcmlwdHMsIFNjcm9sbFJlc3RvcmF0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi90YWlsd2luZC5jc3NcIjtcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgdG9hc3RTdHlsZXMgZnJvbSBcIi4vZ2xvYmFsLmNzc1wiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9jb21wb25lbnRzL05hdmJhclwiO1xuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gXCIuL3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdHlwZXMvdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4geyB0aXRsZTogXCJXb3JkbGUgQXBwXCIgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiB8IGFueSA9ICgpID0+IHtcbiAgICByZXR1cm4gW1xuICAgICAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9LFxuICAgICAgICB7IHJlbDogXCJwcmVjb25uZWN0XCIsIGhyZWY6IFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiIH0sXG4gICAgICAgIHsgcmVsOiBcInByZWNvbm5lY3RcIiwgaHJlZjogXCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIsIGNyb3NzT3JpZ2luOiBcInRydWVcIiB9LFxuICAgICAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHRvYXN0U3R5bGVzIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q291cmdldHRlJmRpc3BsYXk9c3dhcFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICByZWw6IFwicHJlY29ubmVjdFwiLFxuICAgICAgICAgICAgY3Jvc3NPcmlnaW46IFwidHJ1ZVwiLFxuICAgICAgICAgICAgaHJlZjogXCJodHRwczovL2tpdC5mb250YXdlc29tZS5jb20vMzZhZmM0MDYzNi5qc1wiLFxuICAgICAgICB9LFxuICAgIF07XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICAgIGxldCB1c2VyID0gYXdhaXQgZ2V0VXNlcihyZXF1ZXN0KTtcbiAgICByZXR1cm4gdXNlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgICBjb25zdCB1c2VyOiBVc2VyID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICAgICAgICA8aGVhZD5cbiAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cblxuICAgICAgICAgICAgICAgIDxNZXRhIC8+XG4gICAgICAgICAgICAgICAgPExpbmtzIC8+XG4gICAgICAgICAgICA8L2hlYWQ+XG4gICAgICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgICAgICA8TmF2YmFyIHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XG4gICAgICAgICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICAgICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICAgICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgICAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICAgICAgICA8L2JvZHk+XG4gICAgICAgIDwvaHRtbD5cbiAgICApO1xufVxuIiwgImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIn4vdHlwZXMvdHlwZXNcIjtcblxudHlwZSBOYXZiYXJQcm9wcyA9IHtcbiAgICB1c2VyOiBVc2VyO1xufTtcblxuY29uc3QgTmF2YmFyID0gKHsgdXNlciB9OiBOYXZiYXJQcm9wcykgPT4ge1xuICAgIGNvbnN0IFtuYXZiYXIsIHNldE5hdmJhcl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHB5LTMgZml4ZWQgdG9wLTAgdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtY291cmdldHRlIHRleHQtM3hsIGZvbnQtYm9sZFwiPldvcmRsZSBDaGFtcDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9eygpID0+IHNldE5hdmJhcighbmF2YmFyKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9XCJoLTggdy04XCIgZmlsbD17XCIjZmZmXCJ9IHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9e1wiI2ZmZlwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9ezJ9IGQ9XCJNNCA2aDE2TTQgMTJoMTZNNCAxOGgxNlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTgvMTIgbWQ6dy0yLzQgbGc6MS80IHhsOnctMS81IGgtZnVsbCBmaXhlZCB0b3AtMCBsZWZ0LTAgYmctZ3JheS03MDAgei0zMCBweS0zIHB4LTQgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTMwMCAke1xuICAgICAgICAgICAgICAgICAgICBuYXZiYXIgPyBcIm9wYWNpdHktMTAwXCIgOiBcIm9wYWNpdHktMCAtei0xMFwiXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWNvdXJnZXR0ZSB0ZXh0LTN4bCBmb250LWJvbGRcIj5Xb3JkbGUgQ2hhbXA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsb2FkRG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTIwMCBjdXJzb3ItcG9pbnRlciB0ZXh0LTJ4bCBob3Zlcjp1bmRlcmxpbmUgaG92ZXI6dGV4dC1za3ktNDAwIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPVwiL1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsb2FkRG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTIwMCBjdXJzb3ItcG9pbnRlciB0ZXh0LTJ4bCBob3Zlcjp1bmRlcmxpbmUgaG92ZXI6dGV4dC1za3ktNDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89XCIvcGxheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGF5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsb2FkRG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTIwMCBjdXJzb3ItcG9pbnRlciB0ZXh0LTJ4bCBob3Zlcjp1bmRlcmxpbmUgaG92ZXI6dGV4dC1za3ktNDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89XCIvbGVhZGVyYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGVhZGVyYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm15LThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxvYWREb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMjAwIGN1cnNvci1wb2ludGVyIHRleHQtMnhsIGhvdmVyOnVuZGVybGluZSBob3Zlcjp0ZXh0LXNreS00MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17dXNlciA/IFwiL2xvZ291dFwiIDogXCIvbG9naW5cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyID8gXCJMb2dvdXRcIiA6IFwiTG9naW5cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iLCAiaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCB7IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi9kYi5zZXJ2ZXJcIjtcbmNvbnN0IHNhbHRSb3VuZHMgPSAxMDtcblxudHlwZSBMb2dpbkZvcm0gPSB7XG4gICAgdXNlcm5hbWU6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xufTtcblxudHlwZSBSZWdpc3RlckZvcm0gPSB7XG4gICAgdXNlcm5hbWU6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xuICAgIGNvdW50cnk6IHN0cmluZztcbiAgICBjb3VudHJ5RW1vamk6IHN0cmluZztcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3Rlcih7IHVzZXJuYW1lLCBwYXNzd29yZCwgY291bnRyeSwgY291bnRyeUVtb2ppIH06IFJlZ2lzdGVyRm9ybSkge1xuICAgIGNvbnN0IHBhc3N3b3JkSGFzaCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCBzYWx0Um91bmRzKTtcblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHsgdXNlcm5hbWUsIHBhc3N3b3JkSGFzaCwgc2NvcmU6IDAsIGNvdW50cnksIGNvdW50cnlFbW9qaSB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHVzZXI7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbih7IHVzZXJuYW1lLCBwYXNzd29yZCB9OiBMb2dpbkZvcm0pIHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgd2hlcmU6IHsgdXNlcm5hbWUgfSxcbiAgICB9KTtcblxuICAgIGlmICghdXNlcikgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBpc0NvcnJlY3RQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkSGFzaCk7XG5cbiAgICBpZiAoIWlzQ29ycmVjdFBhc3N3b3JkKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdXNlcjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXIocmVxdWVzdDogUmVxdWVzdCkge1xuICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZChyZXF1ZXN0KTtcbiAgICBpZiAodHlwZW9mIHVzZXJJZCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiB1c2VySWQgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB1c2VyO1xuICAgIH0gY2F0Y2gge1xuICAgICAgICB0aHJvdyBsb2dvdXQocmVxdWVzdCk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nb3V0KHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RvcmFnZS5nZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpO1xuICAgIHJldHVybiByZWRpcmVjdChcIi9sb2dpblwiLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiU2V0LUNvb2tpZVwiOiBhd2FpdCBzdG9yYWdlLmRlc3Ryb3lTZXNzaW9uKHNlc3Npb24pLFxuICAgICAgICB9LFxuICAgIH0pO1xufVxuXG5jb25zdCBzZXNzaW9uU2VjcmV0ID0gcHJvY2Vzcy5lbnYuU0VTU0lPTl9TRUNSRVQ7XG5pZiAoIXNlc3Npb25TZWNyZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTRVNTSU9OX1NFQ1JFVCBtdXN0IGJlIHNldFwiKTtcbn1cblxuY29uc3Qgc3RvcmFnZSA9IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlKHtcbiAgICBjb29raWU6IHtcbiAgICAgICAgbmFtZTogXCJXb3JkbGVfc2Vzc2lvblwiLFxuICAgICAgICAvLyBub3JtYWxseSB5b3Ugd2FudCB0aGlzIHRvIGJlIGBzZWN1cmU6IHRydWVgXG4gICAgICAgIC8vIGJ1dCB0aGF0IGRvZXNuJ3Qgd29yayBvbiBsb2NhbGhvc3QgZm9yIFNhZmFyaVxuICAgICAgICAvLyBodHRwczovL3dlYi5kZXYvd2hlbi10by11c2UtbG9jYWwtaHR0cHMvXG4gICAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxuICAgICAgICBzZWNyZXRzOiBbc2Vzc2lvblNlY3JldF0sXG4gICAgICAgIHNhbWVTaXRlOiBcImxheFwiLFxuICAgICAgICBwYXRoOiBcIi9cIixcbiAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCxcbiAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgfSxcbn0pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlclNlc3Npb24odXNlcklkOiBzdHJpbmcsIHJlZGlyZWN0VG86IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdG9yYWdlLmdldFNlc3Npb24oKTtcbiAgICBzZXNzaW9uLnNldChcInVzZXJJZFwiLCB1c2VySWQpO1xuICAgIHJldHVybiByZWRpcmVjdChyZWRpcmVjdFRvLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiU2V0LUNvb2tpZVwiOiBhd2FpdCBzdG9yYWdlLmNvbW1pdFNlc3Npb24oc2Vzc2lvbiksXG4gICAgICAgIH0sXG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyU2Vzc2lvbihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gICAgcmV0dXJuIHN0b3JhZ2UuZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJJZChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFVzZXJTZXNzaW9uKHJlcXVlc3QpO1xuICAgIGNvbnN0IHVzZXJJZCA9IHNlc3Npb24uZ2V0KFwidXNlcklkXCIpO1xuICAgIGlmICghdXNlcklkIHx8IHR5cGVvZiB1c2VySWQgIT09IFwic3RyaW5nXCIpIHJldHVybiBudWxsO1xuICAgIHJldHVybiB1c2VySWQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1aXJlVXNlcklkKHJlcXVlc3Q6IFJlcXVlc3QsIHJlZGlyZWN0VG86IHN0cmluZyA9IG5ldyBVUkwocmVxdWVzdC51cmwpLnBhdGhuYW1lKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFVzZXJTZXNzaW9uKHJlcXVlc3QpO1xuICAgIGNvbnN0IHVzZXJJZCA9IHNlc3Npb24uZ2V0KFwidXNlcklkXCIpO1xuICAgIGlmICghdXNlcklkIHx8IHR5cGVvZiB1c2VySWQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhbW1wicmVkaXJlY3RUb1wiLCByZWRpcmVjdFRvXV0pO1xuICAgICAgICB0aHJvdyByZWRpcmVjdChgL2xvZ2luPyR7c2VhcmNoUGFyYW1zfWApO1xuICAgIH1cbiAgICByZXR1cm4gdXNlcklkO1xufVxuIiwgImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5sZXQgZGI6IFByaXNtYUNsaWVudDtcblxuZGVjbGFyZSBnbG9iYWwge1xuICAgIHZhciBfX2RiOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWQ7XG59XG5cbi8vIHRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgaW4gZGV2ZWxvcG1lbnQgd2UgZG9uJ3Qgd2FudCB0byByZXN0YXJ0XG4vLyB0aGUgc2VydmVyIHdpdGggZXZlcnkgY2hhbmdlLCBidXQgd2Ugd2FudCB0byBtYWtlIHN1cmUgd2UgZG9uJ3Rcbi8vIGNyZWF0ZSBhIG5ldyBjb25uZWN0aW9uIHRvIHRoZSBEQiB3aXRoIGV2ZXJ5IGNoYW5nZSBlaXRoZXIuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgZGIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gICAgZGIuJGNvbm5lY3QoKTtcbn0gZWxzZSB7XG4gICAgaWYgKCFnbG9iYWwuX19kYikge1xuICAgICAgICBnbG9iYWwuX19kYiA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgICAgICAgZ2xvYmFsLl9fZGIuJGNvbm5lY3QoKTtcbiAgICB9XG4gICAgZGIgPSBnbG9iYWwuX19kYjtcbn1cblxuZXhwb3J0IHsgZGIgfTtcbiIsICJpbXBvcnQgeyBMaW5rLCBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSwgdXNlU3VibWl0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL1BhZ2luYXRpb25cIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwifi90eXBlcy90eXBlc1wiO1xuaW1wb3J0IHsgZ2V0VXNlcnMgfSBmcm9tIFwifi91dGlscy9xdWVyaWVzLnNlcnZlclwiO1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgICBjb25zdCBwYWdlOiBhbnkgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInBhZ2VcIikgfHwgMTtcbiAgICBsZXQgcGVyUGFnZSA9IDEwO1xuICAgIGxldCBza2lwID0gcGVyUGFnZSAqIHBhZ2UgLSBwZXJQYWdlO1xuICAgIGNvbnN0IHsgdXNlcnMsIHRvdGFsVXNlcnMgfSA9IGF3YWl0IGdldFVzZXJzKHNraXAsIHBlclBhZ2UpO1xuICAgIGxldCBsYXN0UGFnZSA9IE1hdGguY2VpbCh0b3RhbFVzZXJzIC8gcGVyUGFnZSk7XG4gICAgcmV0dXJuIHsgdXNlcnMsIHRvdGFsVXNlcnMsIHBhZ2UsIGxhc3RQYWdlLCBwZXJQYWdlIH07XG59O1xuXG5jb25zdCBMZWFkZXJib2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBzdWJtaXQgPSB1c2VTdWJtaXQoKTtcbiAgICBjb25zdCB7IHVzZXJzLCB0b3RhbFVzZXJzLCBwYWdlLCBsYXN0UGFnZSwgcGVyUGFnZSB9ID0gdXNlTG9hZGVyRGF0YSgpO1xuICAgIGNvbnNvbGUubG9nKFwidXNlcnNcIiwgdXNlcnMpO1xuXG4gICAgY29uc3QgcGFnaW5hdGUgPSAoZ29UbzogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChnb1RvIDwgMSB8fCBnb1RvID4gK2xhc3RQYWdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3VibWl0KHsgcGFnZTogU3RyaW5nKGdvVG8pIH0sIHsgbWV0aG9kOiBcImdldFwiIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFja2JnIGgtc2NyZWVuIHctc2NyZWVuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLWZ1bGwgdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC1sZyB3LTExLzEyIG1kOnctMi80IHAtNiBtaW4taC1taW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTJ4bCBtYi02IGZvbnQtYm9sZFwiPkxlYWRlcmJvYXJkPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJib3JkZXItY29sbGFwc2Ugdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwic2hhZG93LW1kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktNlwiIG9uQ2xpY2s9eygpID0+IHBhZ2luYXRlKDEpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSYW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTZcIj5Vc2VybmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktNlwiPkNvdW50cnk8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTZcIj5Qb2ludHM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcnMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHVzZXJzLm1hcCgodXNlcjogVXNlciwgaTogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyLWItMiBib3JkZXItc29saWRcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e2B0ZXh0LWNlbnRlciBweS00ICR7aSA9PT0gMCA/IFwidGV4dC1ibHVlLTYwMCBmb250LWJvbGRcIiA6IG51bGx9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICN7aSArIDEgKyBwZXJQYWdlICogcGFnZSAtIHBlclBhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtgdGV4dC1jZW50ZXIgcHktNCAke2kgPT09IDAgPyBcInRleHQtYmx1ZS02MDAgZm9udC1ib2xkXCIgOiBudWxsfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlci51c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e2B0ZXh0LWNlbnRlciBweS00ICR7aSA9PT0gMCA/IFwidGV4dC1ibHVlLTYwMCBmb250LWJvbGRcIiA6IG51bGx9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyLmNvdW50cnkgKyBcIiBcIiArIHVzZXIuY291bnRyeUVtb2ppfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17YHRleHQtY2VudGVyIHB5LTQgJHtpID09PSAwID8gXCJ0ZXh0LWJsdWUtNjAwIGZvbnQtYm9sZFwiIDogbnVsbH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXIuc2NvcmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbiB1c2Vycz17dXNlcnN9IHBhZ2luYXRlPXtwYWdpbmF0ZX0gdG90YWxVc2Vycz17dG90YWxVc2Vyc30gcGFnZT17cGFnZX0gbGFzdFBhZ2U9e2xhc3RQYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBoLXNjcmVlbiBiZy1ibGFja2JnIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC00eGxcIj5BbiBlcnJvciA/ISBJIGtuZXcgc29mdHdhcmUgZW5naW5lZXJpbmcgd2FzIG5vdCBteSB0aGluZyEgPC9wPlxuICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cInRleHQtYmx1ZS02MDAgdGV4dC0yeGwgdW5kZXJsaW5lIG10LTQgYmxvY2tcIiB0bz1cIi9sZWFkZXJib2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICBHbyBCYWNrXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExlYWRlcmJvYXJkO1xuIiwgImltcG9ydCB7IFBhZ2luYXRpb25Qcm9wcyB9IGZyb20gXCJ+L3R5cGVzL3R5cGVzXCI7XG5cbmNvbnN0IFBhZ2luYXRpb24gPSAoeyB1c2VycywgcGFnaW5hdGUsIHRvdGFsVXNlcnMsIHBhZ2UsIGxhc3RQYWdlIH06IFBhZ2luYXRpb25Qcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNoYWRvdy1zbGF0ZS00MDAgc2hhZG93LWxnIHAtMiBtdC00XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHBhZ2luYXRlKDEpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwYWdlID09PSAxID8gXCJkaXNhYmxlZFwiIDogXCJcIn0gbXItMiB0ZXh0LWJsdWUtNjAwIGZvbnQtYm9sZCBjdXJzb3ItcG9pbnRlcmB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkZpcnN0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHBhZ2luYXRlKCtwYWdlIC0gMSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3BhZ2UgPT09IDEgPyBcImRpc2FibGVkXCIgOiBcIlwifSAgbXItMiB0ZXh0LWJsdWUtNjAwIGZvbnQtYm9sZCBjdXJzb3ItcG9pbnRlcmB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlByZXZpb3VzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICB7bmV3IEFycmF5KGxhc3RQYWdlKS5maWxsKFwieFwiKS5tYXAoKGMsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGluZGV4ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlID09PSBpdGVtID8gXCJhY3RpdmVcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBteC0yIGJvcmRlci0yIHJvdW5kZWQtZnVsbCBib3JkZXItYmx1ZS02MDAgdy04IGN1cnNvci1wb2ludGVyIHRleHQtbGcgdGV4dC1jZW50ZXIgdGV4dC1ibHVlLTYwMGB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHBhZ2luYXRlKGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwYWdpbmF0ZSgrcGFnZSArIDEpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwYWdlID09PSBsYXN0UGFnZSA/IFwiZGlzYWJsZWRcIiA6IFwiXCJ9IG1sLTIgdGV4dC1ibHVlLTYwMCBmb250LWJvbGQgY3Vyc29yLXBvaW50ZXJgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5OZXh0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHBhZ2luYXRlKGxhc3RQYWdlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cGFnZSA9PT0gbGFzdFBhZ2UgPyBcImRpc2FibGVkXCIgOiBcIlwifSBtbC0yIHRleHQtYmx1ZS02MDAgZm9udC1ib2xkIGN1cnNvci1wb2ludGVyYH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TGFzdDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uO1xuIiwgImltcG9ydCB7IGRiIH0gZnJvbSBcIi4vZGIuc2VydmVyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVTY29yZSh1c2VySWQ6IHN0cmluZywgc2NvcmU6IG51bWJlcikge1xuICAgIGxldCB1cGRhdGVkVXNlciA9IGF3YWl0IGRiLnVzZXIudXBkYXRlKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHVzZXJJZCB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBzY29yZToge1xuICAgICAgICAgICAgICAgIGluY3JlbWVudDogc2NvcmUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHVwZGF0ZWRVc2VyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcnMoc2tpcDogbnVtYmVyLCB0b3RhbDogbnVtYmVyKSB7XG4gICAgbGV0IHVzZXJzID0gYXdhaXQgZGIudXNlci5maW5kTWFueSh7XG4gICAgICAgIHNraXA6IHNraXAsXG4gICAgICAgIHRha2U6IHRvdGFsLFxuICAgICAgICBvcmRlckJ5OiB7XG4gICAgICAgICAgICBzY29yZTogXCJkZXNjXCIsXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgbGV0IHRvdGFsVXNlcnMgPSBhd2FpdCBkYi51c2VyLmNvdW50KCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VycyxcbiAgICAgICAgdG90YWxVc2VycyxcbiAgICB9O1xufVxuIiwgImltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBGb3JtLCBqc29uLCBMaW5rLCB1c2VBY3Rpb25EYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBBY3Rpb25EYXRhIH0gZnJvbSBcIn4vdHlwZXMvdHlwZXNcIjtcbmltcG9ydCB7IHZhbGlkYXRlQ291bnRyeSwgdmFsaWRhdGVQYXNzd29yZCwgdmFsaWRhdGVVc2VybmFtZSB9IGZyb20gXCJ+L3V0aWxzL3ZhbGlkYXRpb25cIjtcbmltcG9ydCB7IGNyZWF0ZVVzZXJTZXNzaW9uLCByZWdpc3RlciB9IGZyb20gXCIuLi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuaW1wb3J0IENvdW50cnlTZWxlY3QgZnJvbSBcIn4vY29tcG9uZW50cy9Db3VudHJ5U2VsZWN0XCI7XG5cbmNvbnN0IGJhZFJlcXVlc3QgPSAoZGF0YTogQWN0aW9uRGF0YSkgPT4ganNvbihkYXRhLCB7IHN0YXR1czogNDAwIH0pO1xuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICAgIGNvbnN0IHVzZXJuYW1lID0gZm9ybS5nZXQoXCJ1c2VybmFtZVwiKTtcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm0uZ2V0KFwicGFzc3dvcmRcIik7XG4gICAgY29uc3QgY291bnRyeURhdGEgPSBmb3JtLmdldChcImNvdW50cnlcIikgYXMgU3RyaW5nO1xuICAgIGNvbnN0IGNvdW50cnkgPSBjb3VudHJ5RGF0YS5zcGxpdChcIi8vXCIpWzBdO1xuICAgIGNvbnN0IGNvdW50cnlFbW9qaSA9IGNvdW50cnlEYXRhLnNwbGl0KFwiLy9cIilbMV07XG5cbiAgICBpZiAodHlwZW9mIHVzZXJuYW1lICE9PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBwYXNzd29yZCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gYmFkUmVxdWVzdCh7XG4gICAgICAgICAgICBmb3JtRXJyb3I6IGBGb3JtIG5vdCBzdWJtaXR0ZWQgY29ycmVjdGx5LmAsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZpZWxkcyA9IHsgdXNlcm5hbWUsIHBhc3N3b3JkLCBjb3VudHJ5IH07XG4gICAgY29uc3QgZmllbGRFcnJvcnMgPSB7XG4gICAgICAgIHVzZXJuYW1lOiB2YWxpZGF0ZVVzZXJuYW1lKHVzZXJuYW1lKSxcbiAgICAgICAgcGFzc3dvcmQ6IHZhbGlkYXRlUGFzc3dvcmQocGFzc3dvcmQpLFxuICAgICAgICBjb3VudHJ5OiB2YWxpZGF0ZUNvdW50cnkoY291bnRyeSksXG4gICAgfTtcblxuICAgIGlmIChPYmplY3QudmFsdWVzKGZpZWxkRXJyb3JzKS5zb21lKEJvb2xlYW4pKSByZXR1cm4gYmFkUmVxdWVzdCh7IGZpZWxkRXJyb3JzLCBmaWVsZHMgfSk7XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcmVnaXN0ZXIoeyB1c2VybmFtZSwgcGFzc3dvcmQsIGNvdW50cnksIGNvdW50cnlFbW9qaSB9KTtcbiAgICBjb25zb2xlLmxvZyh7IHVzZXIgfSk7XG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaWVsZHMsXG4gICAgICAgICAgICBmb3JtRXJyb3I6IGBVc2VybmFtZS9QYXNzd29yZCBjb21iaW5hdGlvbiBpcyBpbmNvcnJlY3RgLFxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlVXNlclNlc3Npb24odXNlci5pZCwgXCIvcGxheVwiKTtcbn07XG5cbmNvbnN0IFJlZ2lzdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhPEFjdGlvbkRhdGE+KCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFja2JnIGgtc2NyZWVuIHctc2NyZWVuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgdy0xMS8xMiBtZDp3LTIvNCBsZzp3LTEvMyBoLTMvNSBwLTggcm91bmRlZC1sZyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q9XCJwb3N0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17YWN0aW9uRGF0YT8uZm9ybUVycm9yID8gXCJUaGVyZSB3YXMgYW4gZXJyb3JcIiA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGVnZW5kIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPlJlZ2lzdGVyPC9sZWdlbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhsXCIgaHRtbEZvcj1cInVzZXJuYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VybmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db3JyZWN0PVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtNCByb3VuZGVkLW1kIHctZnVsbCBib3JkZXItYmxhY2tiZyBib3JkZXItc29saWQgYm9yZGVyLTIgYmctdHJhbnNwYXJlbnQgdGV4dC1sZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmZpZWxkcz8udXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9e0Jvb2xlYW4oYWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LnVzZXJuYW1lKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy51c2VybmFtZSA/IFwidXNlcm5hbWUtZXJyb3JcIiA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy51c2VybmFtZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1yZWQtNTAwXCIgcm9sZT1cImFsZXJ0XCIgaWQ9XCJ1c2VybmFtZS1lcnJvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycy51c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhsXCIgaHRtbEZvcj1cImNvdW50cnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvdW50cnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvdW50cnlTZWxlY3QgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5jb3VudHJ5ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXJlZC01MDBcIiByb2xlPVwiYWxlcnRcIiBpZD1cInBhc3N3b3JkLWVycm9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzLmNvdW50cnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhsXCIgaHRtbEZvcj1cInBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtNCByb3VuZGVkLW1kIHctZnVsbCBib3JkZXItYmxhY2tiZyBib3JkZXItc29saWQgYm9yZGVyLTIgYmctdHJhbnNwYXJlbnQgdGV4dC1sZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmZpZWxkcz8ucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9e0Jvb2xlYW4oYWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LnBhc3N3b3JkKSB8fCB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8ucGFzc3dvcmQgPyBcInBhc3N3b3JkLWVycm9yXCIgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8ucGFzc3dvcmQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtcmVkLTUwMFwiIHJvbGU9XCJhbGVydFwiIGlkPVwicGFzc3dvcmQtZXJyb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnMucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJmb3JtLWVycm9yLW1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZvcm1FcnJvciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1yZWQtNTAwXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZvcm1FcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctc2t5LTUwMCBweC01IHB5LTMgcm91bmRlZC1tZCB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyIHctMi80IHRleHQtc20gbWQ6dGV4dC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQgP3tcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvbG9naW5cIiBjbGFzc05hbWU9XCJ0ZXh0LXNreS01MDAgdW5kZXJsaW5lIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlVXNlcm5hbWUodXNlcm5hbWU6IHVua25vd24pIHtcbiAgICBpZiAodHlwZW9mIHVzZXJuYW1lICE9PSBcInN0cmluZ1wiIHx8IHVzZXJuYW1lLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgcmV0dXJuIGBVc2VybmFtZSBtdXN0IGJlIGF0IGxlYXN0IDMgY2hhcmFjdGVycyBsb25nYDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkOiB1bmtub3duKSB7XG4gICAgaWYgKHR5cGVvZiBwYXNzd29yZCAhPT0gXCJzdHJpbmdcIiB8fCBwYXNzd29yZC5sZW5ndGggPCA2KSB7XG4gICAgICAgIHJldHVybiBgUGFzc3dvcmRzIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIGxvbmdgO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQ291bnRyeShjb3VudHJ5OiB1bmtub3duKSB7XG4gICAgaWYgKHR5cGVvZiBjb3VudHJ5ICE9PSBcInN0cmluZ1wiIHx8IGNvdW50cnkubGVuZ3RoIDwgNCkge1xuICAgICAgICByZXR1cm4gYFBsZWFzZSBzZWxlY3QgYSB2YWxpZCBjb3VudHJ5YDtcbiAgICB9XG59XG4iLCAiaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XG5pbXBvcnQgeyBjb3VudHJpZXMgfSBmcm9tIFwiY291bnRyaWVzLWxpc3RcIjtcbmltcG9ydCB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IENvdW50cnlTZWxlY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGU8e31bXT4oW10pO1xuXG4gICAgY29uc3QgY3VzdG9tU3R5bGVzOiBhbnkgPSB7XG4gICAgICAgIGNvbnRhaW5lcjogKHByb3ZpZGVkOiBPYmplY3QpID0+ICh7XG4gICAgICAgICAgICAuLi5wcm92aWRlZCxcbiAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgIzAwMFwiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjZweFwiLFxuICAgICAgICB9KSxcbiAgICAgICAgaW5wdXQ6IChwcm92aWRlZDogT2JqZWN0KSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJvdmlkZWQsXG4gICAgICAgICAgICBwYWRkaW5nOiAxNixcbiAgICAgICAgICAgIGNvbG9yOiBcIiMwMDBcIixcbiAgICAgICAgfSksXG4gICAgICAgIHNpbmdsZVZhbHVlOiAocHJvdmlkZWQ6IE9iamVjdCkgPT4gKHtcbiAgICAgICAgICAgIC4uLnByb3ZpZGVkLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgICB9KSxcbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYnVpbGREYXRhKCk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgYnVpbGREYXRhID0gKCkgPT4ge1xuICAgICAgICBsZXQgZGF0YSA9IE9iamVjdC52YWx1ZXMoY291bnRyaWVzKS5tYXAoKHsgbmFtZSwgZW1vamkgfSkgPT4gKHsgbGFiZWw6IG5hbWUgKyBcIiBcIiArIGVtb2ppLCB2YWx1ZTogbmFtZSArIFwiLy9cIiArIGVtb2ppLCBlbW9qaSB9KSk7XG4gICAgICAgIHNldE9wdGlvbnMoZGF0YSk7XG4gICAgfTtcblxuICAgIHJldHVybiA8U2VsZWN0IG9wdGlvbnM9e29wdGlvbnN9IHN0eWxlcz17Y3VzdG9tU3R5bGVzfSBuYW1lPVwiY291bnRyeVwiIC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ291bnRyeVNlbGVjdDtcbiIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuXG4vLyBleHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKFwiYWN0aW9uIGZ1bmN0aW9uXCIpO1xuXG4vLyB9O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICAgIHJldHVybiBsb2dvdXQocmVxdWVzdCk7XG59O1xuIiwgImltcG9ydCB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0L3JvdXRlTW9kdWxlc1wiO1xuaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEsIExpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiBcIldPUkRMRSBDSEFNUCAtIEJ1aWx0IHdpdGggUmVtaXghXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRvIHlvdSBoYXZlIHdoYXQgaXQgdGFrZXMgdG8gY29tcGV0ZSBnbG9iYWxseT8gUGxheSBub3chXCIsXG4gICAgfTtcbn07XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICAgIGxldCB1c2VyID0gYXdhaXQgZ2V0VXNlcihyZXF1ZXN0KTtcbiAgICBjb25zb2xlLmxvZyh1c2VyKTtcblxuICAgIHJldHVybiB1c2VyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gICAgY29uc3QgdXNlciA9IHVzZUxvYWRlckRhdGEoKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFja2JnIGgtc2NyZWVuIHctc2NyZWVuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLWZ1bGwgdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTN4bCBtZDp0ZXh0LTV4bCBmb250LWJvbGQgdGV4dC1jZW50ZXJcIj5XT1JETEUgQ0hBTVA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyF1c2VyID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1sZyB0ZXh0LWNlbnRlciBtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvIHlvdSBoYXZlIHdoYXQgaXQgdGFrZXMgdG8gY29tcGV0ZSBnbG9iYWxseSA/e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9yZWdpc3RlclwiIGNsYXNzTmFtZT1cInRleHQtc2t5LTQwMCBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiB1cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhcHBlYXIgb24gdGhlIGdsb2JhbCBsZWFkZXJib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWxnIHRleHQtY2VudGVyIG10LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2VsY29tZSA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+e3VzZXIudXNlcm5hbWV9PC9zcGFuPiwgeW91IGN1cnJlbnQgaGF2ZSB7dXNlci5zY29yZX0gcG9pbnRzLiBZb3VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuIGRvIGJldHRlciFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTggZmxleCBqdXN0aWZ5LWV2ZW5seVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPVwiL3BsYXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIHRleHQtbWQgbWQ6dGV4dC14bCB3LTEvMyByb3VuZGVkLWxnIHB5LTMgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz1cIi9sZWFkZXJib2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNjAwIHRleHQtd2hpdGUgdGV4dC1tZCBtZDp0ZXh0LXhsIHctMS8zIHJvdW5kZWQtbGcgcHktMyB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZWFkZXJib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuIiwgImltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBGb3JtLCBqc29uLCBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBBY3Rpb25EYXRhIH0gZnJvbSBcIn4vdHlwZXMvdHlwZXNcIjtcbmltcG9ydCB7IGNyZWF0ZVVzZXJTZXNzaW9uLCBsb2dpbiB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5pbXBvcnQgeyB2YWxpZGF0ZVBhc3N3b3JkLCB2YWxpZGF0ZVVzZXJuYW1lIH0gZnJvbSBcIn4vdXRpbHMvdmFsaWRhdGlvblwiO1xuXG5jb25zdCBiYWRSZXF1ZXN0ID0gKGRhdGE6IEFjdGlvbkRhdGEpID0+IGpzb24oZGF0YSwgeyBzdGF0dXM6IDQwMCB9KTtcblxuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgICBjb25zdCB1c2VybmFtZSA9IGZvcm0uZ2V0KFwidXNlcm5hbWVcIik7XG4gICAgY29uc3QgcGFzc3dvcmQgPSBmb3JtLmdldChcInBhc3N3b3JkXCIpO1xuXG4gICAgaWYgKHR5cGVvZiB1c2VybmFtZSAhPT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgcGFzc3dvcmQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIGJhZFJlcXVlc3Qoe1xuICAgICAgICAgICAgZm9ybUVycm9yOiBgRm9ybSBub3Qgc3VibWl0dGVkIGNvcnJlY3RseS5gLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBmaWVsZHMgPSB7IHVzZXJuYW1lLCBwYXNzd29yZCB9O1xuICAgIGNvbnN0IGZpZWxkRXJyb3JzID0ge1xuICAgICAgICB1c2VybmFtZTogdmFsaWRhdGVVc2VybmFtZSh1c2VybmFtZSksXG4gICAgICAgIHBhc3N3b3JkOiB2YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkKSxcbiAgICB9O1xuXG4gICAgaWYgKE9iamVjdC52YWx1ZXMoZmllbGRFcnJvcnMpLnNvbWUoQm9vbGVhbikpIHJldHVybiBiYWRSZXF1ZXN0KHsgZmllbGRFcnJvcnMsIGZpZWxkcyB9KTtcblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBsb2dpbih7IHVzZXJuYW1lLCBwYXNzd29yZCB9KTtcbiAgICBjb25zb2xlLmxvZyh7IHVzZXIgfSk7XG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaWVsZHMsXG4gICAgICAgICAgICBmb3JtRXJyb3I6IGBVc2VybmFtZS9QYXNzd29yZCBjb21iaW5hdGlvbiBpcyBpbmNvcnJlY3RgLFxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlVXNlclNlc3Npb24odXNlci5pZCwgXCIvcGxheVwiKTtcbn07XG5cbmNvbnN0IExvZ2luID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrYmcgaC1zY3JlZW4gdy1zY3JlZW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSB3LTExLzEyIG1kOnctMi80IGxnOnctMS8zIGgtMy81IHAtOCByb3VuZGVkLWxnIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCIgY2xhc3NOYW1lPVwidy1mdWxsXCIgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZFwiPkxvZyBpbjwvbGVnZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14bFwiPlVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvcnJlY3Q9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgVXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC00IHJvdW5kZWQtbWQgdy1mdWxsIGJvcmRlci1ibGFja2JnIGJvcmRlci1zb2xpZCBib3JkZXItMiBiZy10cmFuc3BhcmVudCB0ZXh0LWxnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteGxcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtNCByb3VuZGVkLW1kIHctZnVsbCBib3JkZXItYmxhY2tiZyBib3JkZXItc29saWQgYm9yZGVyLTIgYmctdHJhbnNwYXJlbnQgdGV4dC1sZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctc2t5LTUwMCBweC01IHB5LTMgcm91bmRlZC1tZCB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyIHctMi80IHRleHQtc20gbWQ6dGV4dC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG9uJ3QgaGF2ZSBhbiBhY2NvdW50ID97XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3JlZ2lzdGVyXCIgY2xhc3NOYW1lPVwidGV4dC1za3ktNTAwIHVuZGVybGluZSBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVnaXN0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIiwgImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgTGluaywgTG9hZGVyRnVuY3Rpb24sIE91dGxldCwgcmVkaXJlY3QsIHVzZUxvYWRlckRhdGEsIHVzZVN1Ym1pdCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBXb3JkcyB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwifi91dGlscy9kYi5zZXJ2ZXJcIjtcbmltcG9ydCBLZXlib2FyZCBmcm9tIFwifi9jb21wb25lbnRzL0tleWJvYXJkXCI7XG5pbXBvcnQgeyBrZXlTdHlsZSwgUmVzcG9uc2UgfSBmcm9tIFwifi90eXBlcy90eXBlc1wiO1xuaW1wb3J0IHsgdXBkYXRlU2NvcmUgfSBmcm9tIFwifi91dGlscy9xdWVyaWVzLnNlcnZlclwiO1xuaW1wb3J0IHsgZ2V0VXNlcklkIH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcbmltcG9ydCB7IHRvYXN0SGFuZGxlciB9IGZyb20gXCJ+L3V0aWxzL3RvYXN0SGFuZGxlclwiO1xuXG50eXBlIExvYWRlckRhdGEgPSB7IHdvcmRzOiBBcnJheTxXb3Jkcz4gfTtcbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICAgIC8vVE9ETyA9PiByZXR1cm4gb25seSBvbmUgcmFuZG9tIHdvcmQgZnJvbSBEQlxuICAgIC8vVE9ETyA9PiBSRU1PVkUgbnVtYmVyIGZyb20gd29yZCBzY2hlbWFcbiAgICBjb25zdCBkYXRhOiBMb2FkZXJEYXRhID0ge1xuICAgICAgICB3b3JkczogYXdhaXQgZGIud29yZHMuZmluZE1hbnkoKSxcbiAgICB9O1xuXG4gICAgbGV0IGZvcm1hdHRlZFdvcmRzID0gZGF0YS53b3Jkcy5tYXAoKHdvcmQpID0+IHdvcmQud29yZCk7XG5cbiAgICBsZXQgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTMzNyk7XG4gICAgY29uc29sZS5sb2coZm9ybWF0dGVkV29yZHMubGVuZ3RoKTtcbiAgICBsZXQgcmFuZG9tV29yZCA9IGZvcm1hdHRlZFdvcmRzW3JhbmRvbV0udG9VcHBlckNhc2UoKTtcblxuICAgIGNvbnNvbGUubG9nKHJhbmRvbVdvcmQpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGFsbFdvcmRzOiBmb3JtYXR0ZWRXb3JkcyxcbiAgICAgICAgd29yZFRvR3Vlc3M6IHJhbmRvbVdvcmQsXG4gICAgICAgIGluaXRpYWxSZXNwb25zZTogQXJyYXkuZnJvbSh7IGxlbmd0aDogNiB9LCAoZSkgPT5cbiAgICAgICAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IDUgfSwgKCkgPT4gKHsgbGV0dGVyOiBcIlwiLCBjbGFzc05hbWU6IFwidGV4dC13aGl0ZSBiZy1ibHVlXCIgfSkpXG4gICAgICAgICksXG4gICAgfTtcbn07XG5cbmV4cG9ydCBsZXQgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZChyZXF1ZXN0KTtcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgICBsZXQgc3RhdHVzID0gZGF0YS5nZXQoXCJzdGF0dXNcIik7XG4gICAgbGV0IHNjb3JlID0gZGF0YS5nZXQoXCJzY29yZVwiKTtcbiAgICBsZXQgcmVkaXJlY3RUbyA9IFwiXCI7XG5cbiAgICBpZiAoc3RhdHVzID09PSBcIndpblwiICYmIHNjb3JlKSB7XG4gICAgICAgIGlmICh1c2VySWQpIHtcbiAgICAgICAgICAgIGxldCB1cGRhdGVkU2NvcmUgPSBhd2FpdCB1cGRhdGVTY29yZSh1c2VySWQsICtzY29yZSk7XG4gICAgICAgICAgICBpZiAoIXVwZGF0ZWRTY29yZSkge1xuICAgICAgICAgICAgICAgIC8vdGhyb3cgZXJyb3IgaGVyZVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZWRpcmVjdFRvID0gXCIvcGxheS93aW5cIjtcbiAgICB9XG5cbiAgICBpZiAoc3RhdHVzID09PSBcImxvc2VcIikge1xuICAgICAgICByZWRpcmVjdFRvID0gXCIvcGxheS9sb3NlXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZGlyZWN0KHJlZGlyZWN0VG8pO1xufTtcblxuY29uc3QgUGxheSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGFsbFdvcmRzLCB3b3JkVG9HdWVzcywgaW5pdGlhbFJlc3BvbnNlIH0gPSB1c2VMb2FkZXJEYXRhKCk7XG4gICAgY29uc3Qgc3VibWl0ID0gdXNlU3VibWl0KCk7XG4gICAgY29uc3QgW2N1cnJlbnRSb3csIHNldEN1cnJlbnRSb3ddID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3Jlc3BvbnNlcywgc2V0UmVzcG9uc2VzXSA9IHVzZVN0YXRlPFJlc3BvbnNlW11bXT4oaW5pdGlhbFJlc3BvbnNlKTtcbiAgICBjb25zdCBbd3JvbmdHdWVzcywgc2V0V3JvbmdHdWVzc10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gICAgY29uc3QgW2tleVN0eWxlLCBzZXRLZXlTdHlsZV0gPSB1c2VTdGF0ZTxrZXlTdHlsZT4oe30pO1xuXG4gICAgY29uc3QgZ2V0Q3VycmVudFdvcmQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZXNbY3VycmVudFJvd10ubWFwKChlbGVtKSA9PiBlbGVtLmxldHRlcikuam9pbihcIlwiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkTGV0dGVyID0gKGxldHRlcjogc3RyaW5nKSA9PiB7XG4gICAgICAgIGxldCByZXNwb25zZVR1cGxlID0gWy4uLnJlc3BvbnNlc107XG4gICAgICAgIGxldCByb3dXb3JkID0gZ2V0Q3VycmVudFdvcmQoKTtcblxuICAgICAgICBpZiAobGV0dGVyLnRvTG93ZXJDYXNlKCkgPT09IFwiZW50ZXJcIikge1xuICAgICAgICAgICAgc2F2ZUVudHJ5KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGV0dGVyLnRvTG93ZXJDYXNlKCkgPT09IFwiY2xyXCIpIHtcbiAgICAgICAgICAgIHNldFdyb25nR3Vlc3MoZmFsc2UpO1xuICAgICAgICAgICAgcmVtb3ZlTGV0dGVyKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFsaWRhdGVkID0gdmFsaWRhdGVFbnRyeShyb3dXb3JkKTtcbiAgICAgICAgaWYgKCF2YWxpZGF0ZWQpIHJldHVybjtcblxuICAgICAgICByZXNwb25zZVR1cGxlW2N1cnJlbnRSb3ddW3Jvd1dvcmQubGVuZ3RoXS5sZXR0ZXIgPSBsZXR0ZXI7XG4gICAgICAgIHNldFJlc3BvbnNlcyhyZXNwb25zZVR1cGxlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlTGV0dGVyID0gKCkgPT4ge1xuICAgICAgICBsZXQgd29yZCA9IGdldEN1cnJlbnRXb3JkKCk7XG4gICAgICAgIGlmICh3b3JkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXNwb25zZVR1cGxlID0gWy4uLnJlc3BvbnNlc107XG4gICAgICAgIHJlc3BvbnNlVHVwbGVbY3VycmVudFJvd11bd29yZC5sZW5ndGggLSAxXS5sZXR0ZXIgPSBcIlwiO1xuICAgICAgICBzZXRSZXNwb25zZXMocmVzcG9uc2VUdXBsZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHZhbGlkYXRlRW50cnkgPSAocm93V29yZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChyb3dXb3JkLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBjb25zdCBzYXZlRW50cnkgPSAoKSA9PiB7XG4gICAgICAgIGxldCB2YWxpZGF0ZWQgPSBzYXZlUmVzcG9uc2UoKTtcbiAgICAgICAgaWYgKCF2YWxpZGF0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRDdXJyZW50Um93KChjKSA9PiBjICsgMSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGVuZEdhbWUgPSBhc3luYyAoc3RhdHVzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudFJvdygwKTtcbiAgICAgICAgc2V0UmVzcG9uc2VzKEFycmF5LmZyb20oeyBsZW5ndGg6IDYgfSwgKGUpID0+IEFycmF5LmZyb20oeyBsZW5ndGg6IDUgfSwgKCkgPT4gKHsgbGV0dGVyOiBcIlwiLCBjbGFzc05hbWU6IFwidGV4dC13aGl0ZSBiZy1ibHVlXCIgfSkpKSk7XG4gICAgICAgIHNldEtleVN0eWxlKHt9KTtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gXCJ3aW5cIikge1xuICAgICAgICAgICAgc3VibWl0KHsgc3RhdHVzLCBzY29yZTogU3RyaW5nKDYgLSBjdXJyZW50Um93KSB9LCB7IG1ldGhvZDogXCJwb3N0XCIgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdWJtaXQoeyBzdGF0dXMgfSwgeyBtZXRob2Q6IFwicG9zdFwiIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IG1hcmtLZXlzID0gKG9iajoga2V5U3R5bGUpID0+IHtcbiAgICAgICAgc2V0S2V5U3R5bGUoeyAuLi5rZXlTdHlsZSwgLi4ub2JqIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBjaGVja0RpY3Rpb25hcnkgPSAod29yZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmICghYWxsV29yZHMuaW5jbHVkZXMod29yZC50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgdG9hc3RIYW5kbGVyKFwiV29yZCBub3QgaW4gZGljdGlvbmFyeSFcIiwgMjAwMCk7XG4gICAgICAgICAgICBzZXRXcm9uZ0d1ZXNzKHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBjb25zdCBzYXZlUmVzcG9uc2UgPSAoKSA9PiB7XG4gICAgICAgIGxldCByZXNwb25zZVR1cGxlID0gWy4uLnJlc3BvbnNlc107XG4gICAgICAgIGxldCBjdXJyZW50V29yZCA9IGdldEN1cnJlbnRXb3JkKCk7XG4gICAgICAgIGNvbnN0IGtleXM6IGtleVN0eWxlID0ge307XG5cbiAgICAgICAgaWYgKGN1cnJlbnRXb3JkLmxlbmd0aCA8IDUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY2hlY2tEaWN0aW9uYXJ5KGN1cnJlbnRXb3JkKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZFRvR3Vlc3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB3b3JkID0gcmVzcG9uc2VUdXBsZVtjdXJyZW50Um93XTtcblxuICAgICAgICAgICAgaWYgKHdvcmRUb0d1ZXNzLmluY2x1ZGVzKHdvcmRbaV0ubGV0dGVyKSAmJiB3b3JkW2ldLmxldHRlciAhPT0gd29yZFRvR3Vlc3NbaV0pIHtcbiAgICAgICAgICAgICAgICBrZXlzW3dvcmRbaV0ubGV0dGVyXSA9IFwidGV4dC13aGl0ZSBiZy15ZWxsb3ctNjAwXCI7XG4gICAgICAgICAgICAgICAgd29yZFtpXS5jbGFzc05hbWUgPSBcInRleHQtd2hpdGUgYmcteWVsbG93LTYwMFwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3b3JkW2ldLmxldHRlciA9PT0gd29yZFRvR3Vlc3NbaV0pIHtcbiAgICAgICAgICAgICAgICBrZXlzW3dvcmRbaV0ubGV0dGVyXSA9IFwidGV4dC13aGl0ZSBiZy1ncmVlbi04MDBcIjtcbiAgICAgICAgICAgICAgICB3b3JkW2ldLmNsYXNzTmFtZSA9IFwidGV4dC13aGl0ZSBiZy1ncmVlbi04MDBcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd29yZFtpXS5jbGFzc05hbWUgPSBcInRleHQtd2hpdGUgYmctZ3JheS02MDBcIjtcbiAgICAgICAgICAgICAgICBrZXlzW3dvcmRbaV0ubGV0dGVyXSA9IFwidGV4dC13aGl0ZSBiZy1ncmF5LTkwMFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWFya0tleXMoa2V5cyk7XG4gICAgICAgIHNldFJlc3BvbnNlcyhyZXNwb25zZVR1cGxlKTtcbiAgICAgICAgLy9jaGVjayBpZiB3b3JkIG1hdGNoZXMgd29yZFxuICAgICAgICBsZXQgZ2FtZVN0YXR1cyA9IGN1cnJlbnRXb3JkID09PSB3b3JkVG9HdWVzcyA/IFwid2luXCIgOiBjdXJyZW50Um93ID09PSA1ID8gXCJsb3NlXCIgOiBudWxsO1xuICAgICAgICBpZiAoZ2FtZVN0YXR1cykge1xuICAgICAgICAgICAgZW5kR2FtZShnYW1lU3RhdHVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFja2JnIGgtc2NyZWVuIHctc2NyZWVuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTIvMyB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZ3JpZCBnYXAtNCBncmlkLWNvbHMtNSBncmlkLXJvd3MtNSBwLTMgJHt3cm9uZ0d1ZXNzID8gXCJhbmltYXRlLXNoYWtlXCIgOiBudWxsfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXNwb25zZXMubWFwKChyZXNwb25zZSwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5tYXAoKGxldHRlciwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYm9yZGVyLWdyYXktMzAwIGJvcmRlci0yIHJvdW5kZWQtc20gcC00IGZvbnQtYm9sZCB0ZXh0LTN4bCB3LTE0IGgtMTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgJHtsZXR0ZXIuY2xhc3NOYW1lfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGV0dGVyLmxldHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdy1mdWxsIGFic29sdXRlIGJvdHRvbS04XCI+XG4gICAgICAgICAgICAgICAgICAgIDxLZXlib2FyZCBhZGRMZXR0ZXI9e2FkZExldHRlcn0ga2V5U3R5bGU9e2tleVN0eWxlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBoLXNjcmVlbiBiZy1ibGFja2JnIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC00eGxcIj5BbiBlcnJvciA/ISBJIGtuZXcgc29mdHdhcmUgZW5naW5lZXJpbmcgd2FzIG5vdCBteSB0aGluZyEgPC9wPlxuICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cInRleHQtYmx1ZS02MDAgdGV4dC0yeGwgdW5kZXJsaW5lIG10LTQgYmxvY2tcIiB0bz1cIi9wbGF5XCI+XG4gICAgICAgICAgICAgICAgICAgIEdvIEJhY2tcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheTtcbiIsICJjb25zdCBsZXR0ZXJzID0gXCJRLFcsRSxSLFQsWSxVLEksTyxQIEEsUyxELEYsRyxILEosSyxMIEVudGVyLFosWCxDLFYsQixOLE0sQ0xSXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgYWRkTGV0dGVyOiAoYXJnMDogc3RyaW5nKSA9PiB2b2lkO1xuICAgIGtleVN0eWxlOiB7XG4gICAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbiAgICB9O1xufVxuXG5jb25zdCBLZXlib2FyZCA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMlwiPlxuICAgICAgICAgICAge2xldHRlcnMuc3BsaXQoXCIgXCIpLm1hcCgocm93KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiIGtleT17cm93fT5cbiAgICAgICAgICAgICAgICAgICAge3Jvdy5zcGxpdChcIixcIikubWFwKChsZXR0ZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuYWRkTGV0dGVyKGxldHRlcil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJvcmRlci0yIGJnLWdyYXktMzAwIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLXNtIHctMTQgaC0xMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBteC0xIG15LTIgY3Vyc29yLXBvaW50ZXIgJHtwcm9wcy5rZXlTdHlsZVtsZXR0ZXJdfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bGV0dGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xldHRlciA9PT0gXCJDTFJcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezEuNX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMiAxNGwyLTJtMCAwbDItMm0tMiAybC0yLTJtMiAybDIgMk0zIDEybDYuNDE0IDYuNDE0YTIgMiAwIDAwMS40MTQuNTg2SDE5YTIgMiAwIDAwMi0yVjdhMiAyIDAgMDAtMi0yaC04LjE3MmEyIDIgMCAwMC0xLjQxNC41ODZMMyAxMnpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBLZXlib2FyZDtcbiIsICJpbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xuXG5leHBvcnQgY29uc3QgdG9hc3RIYW5kbGVyID0gKG1lc3NhZ2UgPSBcIlx1RDgzRVx1REQ4NCBXb3cgc28gZWFzeSFcIiwgdGltZSA9IDUwMDApID0+IHtcbiAgICByZXR1cm4gdG9hc3QobWVzc2FnZSwge1xuICAgICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXG4gICAgICAgIGF1dG9DbG9zZTogdGltZSxcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcbiAgICB9KTtcbn07XG4iLCAiaW1wb3J0IE1vZGFsIGZyb20gXCJ+L2NvbXBvbmVudHMvTW9kYWxcIjtcblxuY29uc3QgTG9zZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TW9kYWwgaWNvbj17XCJcdTI3MTdcIn0gdGl0bGU9e1wiU09SUlkhIVwifSBtZXNzYWdlPXtcIllvdSBsb3N0IHRoaXMgcm91bmQhIHdvdWxkIHlvdSByZXRyeT9cIn0gaWNvblN0eWxlPXtcInRleHQtcmVkLTYwMCB0ZXh0LTh4bCBtLTAgcC0wXCJ9IC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvc2U7XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgTW9kYWxQcm9wcyB9IGZyb20gXCJ+L3R5cGVzL3R5cGVzXCI7XG5cbmNvbnN0IE1vZGFsID0gKHsgaWNvbiwgdGl0bGUsIG1lc3NhZ2UsIGljb25TdHlsZSB9OiBNb2RhbFByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBoLXNjcmVlbiBiZy1ibGFjayBiZy1vcGFjaXR5LTgwIGZpeGVkIHotMjAgdG9wLTAgbGVmdC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTEvMTIgbGc6dy0xLzMgaC0xLzMgYmctd2hpdGUgcm91bmRlZC14bCAgcHgtNSBmbGV4IGl0ZW1zLWNlbnRlciByZWxhdGl2ZSBqdXN0aWZ5LWNlbnRlciB0ZXh0LWJsYWNrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2ljb25TdHlsZX0+e2ljb259PC9pPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbS0wIHAtMFwiPnt0aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgbXktNCBcIj57bWVzc2FnZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1hcm91bmQgbXQtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcGxheVwiIHJlbG9hZERvY3VtZW50IGNsYXNzTmFtZT1cInRleHQtYmx1ZS02MDAgaG92ZXI6dW5kZXJsaW5lIHRleHQtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXN0YXJ0IEdhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xlYWRlcmJvYXJkXCIgcmVsb2FkRG9jdW1lbnQgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTYwMCBob3Zlcjp1bmRlcmxpbmUgdGV4dC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcgTGVhZGVyYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuIiwgImltcG9ydCBNb2RhbCBmcm9tIFwifi9jb21wb25lbnRzL01vZGFsXCI7XG5cbmNvbnN0IFdpbiA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgIGljb249e1wiXHUyNzEzXCJ9XG4gICAgICAgICAgICB0aXRsZT17XCJZSVBFRSEhXCJ9XG4gICAgICAgICAgICBtZXNzYWdlPXtcIkNvbmdyYXR1bGF0aW9ucyEgWW91IGhhdmUgV09OIHRoZSBnYW1lIVwifVxuICAgICAgICAgICAgaWNvblN0eWxlPXtcInRleHQtZ3JlZW4tNjAwIHRleHQtOHhsIG0tMCBwLTBcIn1cbiAgICAgICAgLz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2luO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLFFBQVEsUUFBUTtBQUlwQixXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxTQUFTO0FBQUEsTUFDdEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFB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
