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
if (true) {
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
    secure: true,
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
  }), /* @__PURE__ */ React.createElement(import_react_toastify.ToastContainer, null), /* @__PURE__ */ React.createElement(import_remix4.Outlet, null), /* @__PURE__ */ React.createElement(import_remix4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix4.Scripts, null), false));
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
  }, users.map((user, i) => /* @__PURE__ */ React.createElement("tr", {
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
  }, user.score))))), /* @__PURE__ */ React.createElement(Pagination_default, {
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
