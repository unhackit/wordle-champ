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
var tailwind_default = "/build/_assets/tailwind-VYHJ7WR4.css";

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
    className: "px-4 py-3 fixed top-0 w-full z-80 bg-blackbg bg-opacity-90"
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
    className: `${page === 1 ? "disabled" : ""} mr-2 text-blue-600 text-sm md:text-base font-bold cursor-pointer`
  }, /* @__PURE__ */ React.createElement("span", null, "First")), /* @__PURE__ */ React.createElement("li", {
    onClick: () => paginate(+page - 1),
    className: `${page === 1 ? "disabled" : ""}  mr-2 text-blue-600 text-sm md:text-base font-bold cursor-pointer`
  }, /* @__PURE__ */ React.createElement("span", null, "Previous")), new Array(lastPage).fill("x").map((c, index) => {
    let item = index + 1;
    return /* @__PURE__ */ React.createElement("li", {
      key: index,
      className: `${page === item ? "active" : ""} mx-2 border-2 rounded-full border-blue-600 w-8 cursor-pointer text-center text-blue-600 text-sm md:text-lg`,
      onClick: () => paginate(item)
    }, /* @__PURE__ */ React.createElement("span", null, item));
  }), /* @__PURE__ */ React.createElement("li", {
    onClick: () => paginate(+page + 1),
    className: `${page === lastPage ? "disabled" : ""} ml-2 text-blue-600 text-sm md:text-base font-bold cursor-pointer`
  }, /* @__PURE__ */ React.createElement("span", null, "Next")), /* @__PURE__ */ React.createElement("li", {
    onClick: () => paginate(lastPage),
    className: `${page === lastPage ? "disabled" : ""} ml-2 text-blue-600 text-sm md:text-base font-bold cursor-pointer`
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
    className: "bg-blackbg min-h-screen w-screen py-24"
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
    className: "text-center py-6 text-sm md:text-base",
    onClick: () => paginate(1)
  }, "Rank"), /* @__PURE__ */ React.createElement("th", {
    className: "text-center py-6 text-sm md:text-base"
  }, "Username"), /* @__PURE__ */ React.createElement("th", {
    className: "text-center py-6 text-sm md:text-base"
  }, "Country"), /* @__PURE__ */ React.createElement("th", {
    className: "text-center py-6 text-sm md:text-base"
  }, "Points"))), /* @__PURE__ */ React.createElement("tbody", {
    className: ""
  }, users.length ? users.map((user, i) => /* @__PURE__ */ React.createElement("tr", {
    className: "border-b-2 border-solid",
    key: i
  }, /* @__PURE__ */ React.createElement("td", {
    className: `text-center py-4 text-sm md:text-base ${i === 0 ? "text-blue-600 font-bold" : null}`
  }, "#", i + 1 + perPage * page - perPage), /* @__PURE__ */ React.createElement("td", {
    className: `text-center py-4 text-sm md:text-base ${i === 0 ? "text-blue-600 font-bold" : null}`
  }, user.username), /* @__PURE__ */ React.createElement("td", {
    className: `text-center py-4 text-sm md:text-base ${i === 0 ? "text-blue-600 font-bold" : null}`
  }, user.country + " " + user.countryEmoji), /* @__PURE__ */ React.createElement("td", {
    className: `text-center py-4 text-sm md:text-base ${i === 0 ? "text-blue-600 font-bold" : null}`
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
    className: "bg-white w-11/12 md:w-2/4 lg:w-1/3 h-4/5 p-8 rounded-lg flex items-center justify-center"
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
    className: "bg-white w-11/12 md:w-2/4 lg:w-1/3 min-h-3/5 p-8 short:h-3/4 rounded-lg flex items-center justify-center"
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
    className: `grid gap-3 grid-cols-5 grid-rows-5 p-3 ${wrongGuess ? "animate-shake" : null}`
  }, responses.map((response, idx) => {
    return response.map((letter, i) => {
      return /* @__PURE__ */ React.createElement("div", {
        key: i,
        className: `border-gray-300 border-2 rounded-sm p-4 font-bold text-3xl w-14 h-12 short:h-10 flex items-center justify-center ${letter.className}`
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9jaGlkaWVidWJlL1Byb2plY3RzL3dvcmRsZS9hcHAvcm9vdC50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvTmF2YmFyLnRzeCIsICIuLi8uLi9hcHAvdXRpbHMvc2Vzc2lvbi5zZXJ2ZXIudHMiLCAiLi4vLi4vYXBwL3V0aWxzL2RiLnNlcnZlci50cyIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2NoaWRpZWJ1YmUvUHJvamVjdHMvd29yZGxlL2FwcC9yb3V0ZXMvbGVhZGVyYm9hcmQudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL1BhZ2luYXRpb24udHN4IiwgIi4uLy4uL2FwcC91dGlscy9xdWVyaWVzLnNlcnZlci50cyIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2NoaWRpZWJ1YmUvUHJvamVjdHMvd29yZGxlL2FwcC9yb3V0ZXMvcmVnaXN0ZXIudHN4IiwgIi4uLy4uL2FwcC91dGlscy92YWxpZGF0aW9uLnRzIiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL0NvdW50cnlTZWxlY3QudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvY2hpZGllYnViZS9Qcm9qZWN0cy93b3JkbGUvYXBwL3JvdXRlcy9sb2dvdXQudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvY2hpZGllYnViZS9Qcm9qZWN0cy93b3JkbGUvYXBwL3JvdXRlcy9pbmRleC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9jaGlkaWVidWJlL1Byb2plY3RzL3dvcmRsZS9hcHAvcm91dGVzL2xvZ2luLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2NoaWRpZWJ1YmUvUHJvamVjdHMvd29yZGxlL2FwcC9yb3V0ZXMvcGxheS50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvS2V5Ym9hcmQudHN4IiwgIi4uLy4uL2FwcC91dGlscy90b2FzdEhhbmRsZXIudHMiLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9jaGlkaWVidWJlL1Byb2plY3RzL3dvcmRsZS9hcHAvcm91dGVzL3BsYXkvbG9zZS50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvTW9kYWwudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvY2hpZGllYnViZS9Qcm9qZWN0cy93b3JkbGUvYXBwL3JvdXRlcy9wbGF5L3dpbi50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcbiIsICIvKipcbiAqIHJlbWl4IHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjbGllbnQgPSByZXF1aXJlKCcuL2NsaWVudCcpO1xudmFyIHNlcnZlciA9IHJlcXVpcmUoJy4vc2VydmVyJyk7XG52YXIgcGxhdGZvcm0gPSByZXF1aXJlKCcuL3BsYXRmb3JtJyk7XG5cblxuXG5PYmplY3Qua2V5cyhjbGllbnQpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xpZW50W2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhzZXJ2ZXIpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyW2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhwbGF0Zm9ybSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwbGF0Zm9ybVtrXTsgfVxuXHR9KTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9jaGlkaWVidWJlL1Byb2plY3RzL3dvcmRsZS9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvY2hpZGllYnViZS9Qcm9qZWN0cy93b3JkbGUvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9jaGlkaWVidWJlL1Byb2plY3RzL3dvcmRsZS9hcHAvcm91dGVzL2xlYWRlcmJvYXJkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvY2hpZGllYnViZS9Qcm9qZWN0cy93b3JkbGUvYXBwL3JvdXRlcy9yZWdpc3Rlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL2NoaWRpZWJ1YmUvUHJvamVjdHMvd29yZGxlL2FwcC9yb3V0ZXMvbG9nb3V0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvY2hpZGllYnViZS9Qcm9qZWN0cy93b3JkbGUvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL2NoaWRpZWJ1YmUvUHJvamVjdHMvd29yZGxlL2FwcC9yb3V0ZXMvbG9naW4udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9jaGlkaWVidWJlL1Byb2plY3RzL3dvcmRsZS9hcHAvcm91dGVzL3BsYXkudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9Vc2Vycy9jaGlkaWVidWJlL1Byb2plY3RzL3dvcmRsZS9hcHAvcm91dGVzL3BsYXkvbG9zZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiL1VzZXJzL2NoaWRpZWJ1YmUvUHJvamVjdHMvd29yZGxlL2FwcC9yb3V0ZXMvcGxheS93aW4udHN4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc29uXCI7XG5leHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gIFwicm9vdFwiOiB7XG4gICAgaWQ6IFwicm9vdFwiLFxuICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgcGF0aDogXCJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMFxuICB9LFxuICBcInJvdXRlcy9sZWFkZXJib2FyZFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2xlYWRlcmJvYXJkXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwibGVhZGVyYm9hcmRcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMVxuICB9LFxuICBcInJvdXRlcy9yZWdpc3RlclwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3JlZ2lzdGVyXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwicmVnaXN0ZXJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMlxuICB9LFxuICBcInJvdXRlcy9sb2dvdXRcIjoge1xuICAgIGlkOiBcInJvdXRlcy9sb2dvdXRcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJsb2dvdXRcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlM1xuICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTRcbiAgfSxcbiAgXCJyb3V0ZXMvbG9naW5cIjoge1xuICAgIGlkOiBcInJvdXRlcy9sb2dpblwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTVcbiAgfSxcbiAgXCJyb3V0ZXMvcGxheVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3BsYXlcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJwbGF5XCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTZcbiAgfSxcbiAgXCJyb3V0ZXMvcGxheS9sb3NlXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcGxheS9sb3NlXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL3BsYXlcIixcbiAgICBwYXRoOiBcImxvc2VcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlN1xuICB9LFxuICBcInJvdXRlcy9wbGF5L3dpblwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3BsYXkvd2luXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL3BsYXlcIixcbiAgICBwYXRoOiBcIndpblwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU4XG4gIH1cbn07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgTGlua3MsIExpbmtzRnVuY3Rpb24sIExpdmVSZWxvYWQsIExvYWRlckZ1bmN0aW9uLCBNZXRhLCBPdXRsZXQsIFNjcmlwdHMsIFNjcm9sbFJlc3RvcmF0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi90YWlsd2luZC5jc3NcIjtcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgdG9hc3RTdHlsZXMgZnJvbSBcIi4vZ2xvYmFsLmNzc1wiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9jb21wb25lbnRzL05hdmJhclwiO1xuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gXCIuL3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdHlwZXMvdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4geyB0aXRsZTogXCJXb3JkbGUgQXBwXCIgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiB8IGFueSA9ICgpID0+IHtcbiAgICByZXR1cm4gW1xuICAgICAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9LFxuICAgICAgICB7IHJlbDogXCJwcmVjb25uZWN0XCIsIGhyZWY6IFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiIH0sXG4gICAgICAgIHsgcmVsOiBcInByZWNvbm5lY3RcIiwgaHJlZjogXCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIsIGNyb3NzT3JpZ2luOiBcInRydWVcIiB9LFxuICAgICAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHRvYXN0U3R5bGVzIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q291cmdldHRlJmRpc3BsYXk9c3dhcFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICByZWw6IFwicHJlY29ubmVjdFwiLFxuICAgICAgICAgICAgY3Jvc3NPcmlnaW46IFwidHJ1ZVwiLFxuICAgICAgICAgICAgaHJlZjogXCJodHRwczovL2tpdC5mb250YXdlc29tZS5jb20vMzZhZmM0MDYzNi5qc1wiLFxuICAgICAgICB9LFxuICAgIF07XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICAgIGxldCB1c2VyID0gYXdhaXQgZ2V0VXNlcihyZXF1ZXN0KTtcbiAgICByZXR1cm4gdXNlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgICBjb25zdCB1c2VyOiBVc2VyID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICAgICAgICA8aGVhZD5cbiAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cblxuICAgICAgICAgICAgICAgIDxNZXRhIC8+XG4gICAgICAgICAgICAgICAgPExpbmtzIC8+XG4gICAgICAgICAgICA8L2hlYWQ+XG4gICAgICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgICAgICA8TmF2YmFyIHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XG4gICAgICAgICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICAgICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICAgICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgICAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICAgICAgICA8L2JvZHk+XG4gICAgICAgIDwvaHRtbD5cbiAgICApO1xufVxuIiwgImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIn4vdHlwZXMvdHlwZXNcIjtcblxudHlwZSBOYXZiYXJQcm9wcyA9IHtcbiAgICB1c2VyOiBVc2VyO1xufTtcblxuY29uc3QgTmF2YmFyID0gKHsgdXNlciB9OiBOYXZiYXJQcm9wcykgPT4ge1xuICAgIGNvbnN0IFtuYXZiYXIsIHNldE5hdmJhcl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHB5LTMgZml4ZWQgdG9wLTAgdy1mdWxsIHotODAgYmctYmxhY2tiZyBiZy1vcGFjaXR5LTkwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtY291cmdldHRlIHRleHQtM3hsIGZvbnQtYm9sZFwiPldvcmRsZSBDaGFtcDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9eygpID0+IHNldE5hdmJhcighbmF2YmFyKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9XCJoLTggdy04XCIgZmlsbD17XCIjZmZmXCJ9IHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9e1wiI2ZmZlwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9ezJ9IGQ9XCJNNCA2aDE2TTQgMTJoMTZNNCAxOGgxNlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTgvMTIgbWQ6dy0yLzQgbGc6MS80IHhsOnctMS81IGgtZnVsbCBmaXhlZCB0b3AtMCBsZWZ0LTAgYmctZ3JheS03MDAgei0zMCBweS0zIHB4LTQgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTMwMCAke1xuICAgICAgICAgICAgICAgICAgICBuYXZiYXIgPyBcIm9wYWNpdHktMTAwXCIgOiBcIm9wYWNpdHktMCAtei0xMFwiXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWNvdXJnZXR0ZSB0ZXh0LTN4bCBmb250LWJvbGRcIj5Xb3JkbGUgQ2hhbXA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsb2FkRG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTIwMCBjdXJzb3ItcG9pbnRlciB0ZXh0LTJ4bCBob3Zlcjp1bmRlcmxpbmUgaG92ZXI6dGV4dC1za3ktNDAwIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPVwiL1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsb2FkRG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTIwMCBjdXJzb3ItcG9pbnRlciB0ZXh0LTJ4bCBob3Zlcjp1bmRlcmxpbmUgaG92ZXI6dGV4dC1za3ktNDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89XCIvcGxheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGF5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsb2FkRG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTIwMCBjdXJzb3ItcG9pbnRlciB0ZXh0LTJ4bCBob3Zlcjp1bmRlcmxpbmUgaG92ZXI6dGV4dC1za3ktNDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89XCIvbGVhZGVyYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGVhZGVyYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm15LThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxvYWREb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMjAwIGN1cnNvci1wb2ludGVyIHRleHQtMnhsIGhvdmVyOnVuZGVybGluZSBob3Zlcjp0ZXh0LXNreS00MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17dXNlciA/IFwiL2xvZ291dFwiIDogXCIvbG9naW5cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyID8gXCJMb2dvdXRcIiA6IFwiTG9naW5cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iLCAiaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCB7IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi9kYi5zZXJ2ZXJcIjtcbmNvbnN0IHNhbHRSb3VuZHMgPSAxMDtcblxudHlwZSBMb2dpbkZvcm0gPSB7XG4gICAgdXNlcm5hbWU6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xufTtcblxudHlwZSBSZWdpc3RlckZvcm0gPSB7XG4gICAgdXNlcm5hbWU6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xuICAgIGNvdW50cnk6IHN0cmluZztcbiAgICBjb3VudHJ5RW1vamk6IHN0cmluZztcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3Rlcih7IHVzZXJuYW1lLCBwYXNzd29yZCwgY291bnRyeSwgY291bnRyeUVtb2ppIH06IFJlZ2lzdGVyRm9ybSkge1xuICAgIGNvbnN0IHBhc3N3b3JkSGFzaCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCBzYWx0Um91bmRzKTtcblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHsgdXNlcm5hbWUsIHBhc3N3b3JkSGFzaCwgc2NvcmU6IDAsIGNvdW50cnksIGNvdW50cnlFbW9qaSB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHVzZXI7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbih7IHVzZXJuYW1lLCBwYXNzd29yZCB9OiBMb2dpbkZvcm0pIHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgd2hlcmU6IHsgdXNlcm5hbWUgfSxcbiAgICB9KTtcblxuICAgIGlmICghdXNlcikgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBpc0NvcnJlY3RQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkSGFzaCk7XG5cbiAgICBpZiAoIWlzQ29ycmVjdFBhc3N3b3JkKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdXNlcjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXIocmVxdWVzdDogUmVxdWVzdCkge1xuICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZChyZXF1ZXN0KTtcbiAgICBpZiAodHlwZW9mIHVzZXJJZCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiB1c2VySWQgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB1c2VyO1xuICAgIH0gY2F0Y2gge1xuICAgICAgICB0aHJvdyBsb2dvdXQocmVxdWVzdCk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nb3V0KHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RvcmFnZS5nZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpO1xuICAgIHJldHVybiByZWRpcmVjdChcIi9sb2dpblwiLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiU2V0LUNvb2tpZVwiOiBhd2FpdCBzdG9yYWdlLmRlc3Ryb3lTZXNzaW9uKHNlc3Npb24pLFxuICAgICAgICB9LFxuICAgIH0pO1xufVxuXG5jb25zdCBzZXNzaW9uU2VjcmV0ID0gcHJvY2Vzcy5lbnYuU0VTU0lPTl9TRUNSRVQ7XG5pZiAoIXNlc3Npb25TZWNyZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTRVNTSU9OX1NFQ1JFVCBtdXN0IGJlIHNldFwiKTtcbn1cblxuY29uc3Qgc3RvcmFnZSA9IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlKHtcbiAgICBjb29raWU6IHtcbiAgICAgICAgbmFtZTogXCJXb3JkbGVfc2Vzc2lvblwiLFxuICAgICAgICAvLyBub3JtYWxseSB5b3Ugd2FudCB0aGlzIHRvIGJlIGBzZWN1cmU6IHRydWVgXG4gICAgICAgIC8vIGJ1dCB0aGF0IGRvZXNuJ3Qgd29yayBvbiBsb2NhbGhvc3QgZm9yIFNhZmFyaVxuICAgICAgICAvLyBodHRwczovL3dlYi5kZXYvd2hlbi10by11c2UtbG9jYWwtaHR0cHMvXG4gICAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxuICAgICAgICBzZWNyZXRzOiBbc2Vzc2lvblNlY3JldF0sXG4gICAgICAgIHNhbWVTaXRlOiBcImxheFwiLFxuICAgICAgICBwYXRoOiBcIi9cIixcbiAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCxcbiAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgfSxcbn0pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlclNlc3Npb24odXNlcklkOiBzdHJpbmcsIHJlZGlyZWN0VG86IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdG9yYWdlLmdldFNlc3Npb24oKTtcbiAgICBzZXNzaW9uLnNldChcInVzZXJJZFwiLCB1c2VySWQpO1xuICAgIHJldHVybiByZWRpcmVjdChyZWRpcmVjdFRvLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiU2V0LUNvb2tpZVwiOiBhd2FpdCBzdG9yYWdlLmNvbW1pdFNlc3Npb24oc2Vzc2lvbiksXG4gICAgICAgIH0sXG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyU2Vzc2lvbihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gICAgcmV0dXJuIHN0b3JhZ2UuZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJJZChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFVzZXJTZXNzaW9uKHJlcXVlc3QpO1xuICAgIGNvbnN0IHVzZXJJZCA9IHNlc3Npb24uZ2V0KFwidXNlcklkXCIpO1xuICAgIGlmICghdXNlcklkIHx8IHR5cGVvZiB1c2VySWQgIT09IFwic3RyaW5nXCIpIHJldHVybiBudWxsO1xuICAgIHJldHVybiB1c2VySWQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1aXJlVXNlcklkKHJlcXVlc3Q6IFJlcXVlc3QsIHJlZGlyZWN0VG86IHN0cmluZyA9IG5ldyBVUkwocmVxdWVzdC51cmwpLnBhdGhuYW1lKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFVzZXJTZXNzaW9uKHJlcXVlc3QpO1xuICAgIGNvbnN0IHVzZXJJZCA9IHNlc3Npb24uZ2V0KFwidXNlcklkXCIpO1xuICAgIGlmICghdXNlcklkIHx8IHR5cGVvZiB1c2VySWQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhbW1wicmVkaXJlY3RUb1wiLCByZWRpcmVjdFRvXV0pO1xuICAgICAgICB0aHJvdyByZWRpcmVjdChgL2xvZ2luPyR7c2VhcmNoUGFyYW1zfWApO1xuICAgIH1cbiAgICByZXR1cm4gdXNlcklkO1xufVxuIiwgImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5sZXQgZGI6IFByaXNtYUNsaWVudDtcblxuZGVjbGFyZSBnbG9iYWwge1xuICAgIHZhciBfX2RiOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWQ7XG59XG5cbi8vIHRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgaW4gZGV2ZWxvcG1lbnQgd2UgZG9uJ3Qgd2FudCB0byByZXN0YXJ0XG4vLyB0aGUgc2VydmVyIHdpdGggZXZlcnkgY2hhbmdlLCBidXQgd2Ugd2FudCB0byBtYWtlIHN1cmUgd2UgZG9uJ3Rcbi8vIGNyZWF0ZSBhIG5ldyBjb25uZWN0aW9uIHRvIHRoZSBEQiB3aXRoIGV2ZXJ5IGNoYW5nZSBlaXRoZXIuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgZGIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gICAgZGIuJGNvbm5lY3QoKTtcbn0gZWxzZSB7XG4gICAgaWYgKCFnbG9iYWwuX19kYikge1xuICAgICAgICBnbG9iYWwuX19kYiA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgICAgICAgZ2xvYmFsLl9fZGIuJGNvbm5lY3QoKTtcbiAgICB9XG4gICAgZGIgPSBnbG9iYWwuX19kYjtcbn1cblxuZXhwb3J0IHsgZGIgfTtcbiIsICJpbXBvcnQgeyBMaW5rLCBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSwgdXNlU3VibWl0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL1BhZ2luYXRpb25cIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwifi90eXBlcy90eXBlc1wiO1xuaW1wb3J0IHsgZ2V0VXNlcnMgfSBmcm9tIFwifi91dGlscy9xdWVyaWVzLnNlcnZlclwiO1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgICBjb25zdCBwYWdlOiBhbnkgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInBhZ2VcIikgfHwgMTtcbiAgICBsZXQgcGVyUGFnZSA9IDEwO1xuICAgIGxldCBza2lwID0gcGVyUGFnZSAqIHBhZ2UgLSBwZXJQYWdlO1xuICAgIGNvbnN0IHsgdXNlcnMsIHRvdGFsVXNlcnMgfSA9IGF3YWl0IGdldFVzZXJzKHNraXAsIHBlclBhZ2UpO1xuICAgIGxldCBsYXN0UGFnZSA9IE1hdGguY2VpbCh0b3RhbFVzZXJzIC8gcGVyUGFnZSk7XG4gICAgcmV0dXJuIHsgdXNlcnMsIHRvdGFsVXNlcnMsIHBhZ2UsIGxhc3RQYWdlLCBwZXJQYWdlIH07XG59O1xuXG5jb25zdCBMZWFkZXJib2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBzdWJtaXQgPSB1c2VTdWJtaXQoKTtcbiAgICBjb25zdCB7IHVzZXJzLCB0b3RhbFVzZXJzLCBwYWdlLCBsYXN0UGFnZSwgcGVyUGFnZSB9ID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gICAgY29uc3QgcGFnaW5hdGUgPSAoZ29UbzogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChnb1RvIDwgMSB8fCBnb1RvID4gK2xhc3RQYWdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3VibWl0KHsgcGFnZTogU3RyaW5nKGdvVG8pIH0sIHsgbWV0aG9kOiBcImdldFwiIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFja2JnIG1pbi1oLXNjcmVlbiB3LXNjcmVlbiBweS0yNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1mdWxsIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbGcgdy0xMS8xMiBtZDp3LTIvNCBwLTYgbWluLWgtbWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC0yeGwgbWItNiBmb250LWJvbGRcIj5MZWFkZXJib2FyZDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiYm9yZGVyLWNvbGxhcHNlIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInNoYWRvdy1tZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTYgdGV4dC1zbSBtZDp0ZXh0LWJhc2VcIiBvbkNsaWNrPXsoKSA9PiBwYWdpbmF0ZSgxKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmFua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS02IHRleHQtc20gbWQ6dGV4dC1iYXNlXCI+VXNlcm5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTYgdGV4dC1zbSBtZDp0ZXh0LWJhc2VcIj5Db3VudHJ5PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS02IHRleHQtc20gbWQ6dGV4dC1iYXNlXCI+UG9pbnRzPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB1c2Vycy5tYXAoKHVzZXI6IFVzZXIsIGk6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlci1iLTIgYm9yZGVyLXNvbGlkXCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1jZW50ZXIgcHktNCB0ZXh0LXNtIG1kOnRleHQtYmFzZSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9PT0gMCA/IFwidGV4dC1ibHVlLTYwMCBmb250LWJvbGRcIiA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAje2kgKyAxICsgcGVyUGFnZSAqIHBhZ2UgLSBwZXJQYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtY2VudGVyIHB5LTQgdGV4dC1zbSBtZDp0ZXh0LWJhc2UgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPT09IDAgPyBcInRleHQtYmx1ZS02MDAgZm9udC1ib2xkXCIgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXIudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1jZW50ZXIgcHktNCB0ZXh0LXNtIG1kOnRleHQtYmFzZSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9PT0gMCA/IFwidGV4dC1ibHVlLTYwMCBmb250LWJvbGRcIiA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlci5jb3VudHJ5ICsgXCIgXCIgKyB1c2VyLmNvdW50cnlFbW9qaX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LWNlbnRlciBweS00IHRleHQtc20gbWQ6dGV4dC1iYXNlICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID09PSAwID8gXCJ0ZXh0LWJsdWUtNjAwIGZvbnQtYm9sZFwiIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyLnNjb3JlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb24gdXNlcnM9e3VzZXJzfSBwYWdpbmF0ZT17cGFnaW5hdGV9IHRvdGFsVXNlcnM9e3RvdGFsVXNlcnN9IHBhZ2U9e3BhZ2V9IGxhc3RQYWdlPXtsYXN0UGFnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gaC1zY3JlZW4gYmctYmxhY2tiZyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQtNHhsXCI+QW4gZXJyb3IgPyEgSSBrbmV3IHNvZnR3YXJlIGVuZ2luZWVyaW5nIHdhcyBub3QgbXkgdGhpbmchIDwvcD5cbiAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNjAwIHRleHQtMnhsIHVuZGVybGluZSBtdC00IGJsb2NrXCIgdG89XCIvbGVhZGVyYm9hcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgR28gQmFja1xuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMZWFkZXJib2FyZDtcbiIsICJpbXBvcnQgeyBQYWdpbmF0aW9uUHJvcHMgfSBmcm9tIFwifi90eXBlcy90eXBlc1wiO1xuXG5jb25zdCBQYWdpbmF0aW9uID0gKHsgdXNlcnMsIHBhZ2luYXRlLCB0b3RhbFVzZXJzLCBwYWdlLCBsYXN0UGFnZSB9OiBQYWdpbmF0aW9uUHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzaGFkb3ctc2xhdGUtNDAwIHNoYWRvdy1sZyBwLTIgbXQtNFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwYWdpbmF0ZSgxKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cGFnZSA9PT0gMSA/IFwiZGlzYWJsZWRcIiA6IFwiXCJ9IG1yLTIgdGV4dC1ibHVlLTYwMCB0ZXh0LXNtIG1kOnRleHQtYmFzZSBmb250LWJvbGQgY3Vyc29yLXBvaW50ZXJgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5GaXJzdDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwYWdpbmF0ZSgrcGFnZSAtIDEpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwYWdlID09PSAxID8gXCJkaXNhYmxlZFwiIDogXCJcIn0gIG1yLTIgdGV4dC1ibHVlLTYwMCB0ZXh0LXNtIG1kOnRleHQtYmFzZSBmb250LWJvbGQgY3Vyc29yLXBvaW50ZXJgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5QcmV2aW91czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAge25ldyBBcnJheShsYXN0UGFnZSkuZmlsbChcInhcIikubWFwKChjLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBpbmRleCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZSA9PT0gaXRlbSA/IFwiYWN0aXZlXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gbXgtMiBib3JkZXItMiByb3VuZGVkLWZ1bGwgYm9yZGVyLWJsdWUtNjAwIHctOCBjdXJzb3ItcG9pbnRlciB0ZXh0LWNlbnRlciB0ZXh0LWJsdWUtNjAwIHRleHQtc20gbWQ6dGV4dC1sZ2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHBhZ2luYXRlKGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwYWdpbmF0ZSgrcGFnZSArIDEpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlID09PSBsYXN0UGFnZSA/IFwiZGlzYWJsZWRcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gbWwtMiB0ZXh0LWJsdWUtNjAwIHRleHQtc20gbWQ6dGV4dC1iYXNlIGZvbnQtYm9sZCBjdXJzb3ItcG9pbnRlcmB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk5leHQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcGFnaW5hdGUobGFzdFBhZ2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlID09PSBsYXN0UGFnZSA/IFwiZGlzYWJsZWRcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gbWwtMiB0ZXh0LWJsdWUtNjAwIHRleHQtc20gbWQ6dGV4dC1iYXNlIGZvbnQtYm9sZCBjdXJzb3ItcG9pbnRlcmB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkxhc3Q8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcbiIsICJpbXBvcnQgeyBkYiB9IGZyb20gXCIuL2RiLnNlcnZlclwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2NvcmUodXNlcklkOiBzdHJpbmcsIHNjb3JlOiBudW1iZXIpIHtcbiAgICBsZXQgdXBkYXRlZFVzZXIgPSBhd2FpdCBkYi51c2VyLnVwZGF0ZSh7XG4gICAgICAgIHdoZXJlOiB7IGlkOiB1c2VySWQgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgc2NvcmU6IHtcbiAgICAgICAgICAgICAgICBpbmNyZW1lbnQ6IHNjb3JlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiB1cGRhdGVkVXNlcjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJzKHNraXA6IG51bWJlciwgdG90YWw6IG51bWJlcikge1xuICAgIGxldCB1c2VycyA9IGF3YWl0IGRiLnVzZXIuZmluZE1hbnkoe1xuICAgICAgICBza2lwOiBza2lwLFxuICAgICAgICB0YWtlOiB0b3RhbCxcbiAgICAgICAgb3JkZXJCeToge1xuICAgICAgICAgICAgc2NvcmU6IFwiZGVzY1wiLFxuICAgICAgICB9LFxuICAgIH0pO1xuICAgIGxldCB0b3RhbFVzZXJzID0gYXdhaXQgZGIudXNlci5jb3VudCgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlcnMsXG4gICAgICAgIHRvdGFsVXNlcnMsXG4gICAgfTtcbn1cbiIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgRm9ybSwganNvbiwgTGluaywgdXNlQWN0aW9uRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgQWN0aW9uRGF0YSB9IGZyb20gXCJ+L3R5cGVzL3R5cGVzXCI7XG5pbXBvcnQgeyB2YWxpZGF0ZUNvdW50cnksIHZhbGlkYXRlUGFzc3dvcmQsIHZhbGlkYXRlVXNlcm5hbWUgfSBmcm9tIFwifi91dGlscy92YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBjcmVhdGVVc2VyU2Vzc2lvbiwgcmVnaXN0ZXIgfSBmcm9tIFwiLi4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcbmltcG9ydCBDb3VudHJ5U2VsZWN0IGZyb20gXCJ+L2NvbXBvbmVudHMvQ291bnRyeVNlbGVjdFwiO1xuXG5jb25zdCBiYWRSZXF1ZXN0ID0gKGRhdGE6IEFjdGlvbkRhdGEpID0+IGpzb24oZGF0YSwgeyBzdGF0dXM6IDQwMCB9KTtcblxuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgICBjb25zdCB1c2VybmFtZSA9IGZvcm0uZ2V0KFwidXNlcm5hbWVcIik7XG4gICAgY29uc3QgcGFzc3dvcmQgPSBmb3JtLmdldChcInBhc3N3b3JkXCIpO1xuICAgIGNvbnN0IGNvdW50cnlEYXRhID0gZm9ybS5nZXQoXCJjb3VudHJ5XCIpIGFzIFN0cmluZztcbiAgICBjb25zdCBjb3VudHJ5ID0gY291bnRyeURhdGEuc3BsaXQoXCIvL1wiKVswXTtcbiAgICBjb25zdCBjb3VudHJ5RW1vamkgPSBjb3VudHJ5RGF0YS5zcGxpdChcIi8vXCIpWzFdO1xuXG4gICAgaWYgKHR5cGVvZiB1c2VybmFtZSAhPT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgcGFzc3dvcmQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIGJhZFJlcXVlc3Qoe1xuICAgICAgICAgICAgZm9ybUVycm9yOiBgRm9ybSBub3Qgc3VibWl0dGVkIGNvcnJlY3RseS5gLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBmaWVsZHMgPSB7IHVzZXJuYW1lLCBwYXNzd29yZCwgY291bnRyeSB9O1xuICAgIGNvbnN0IGZpZWxkRXJyb3JzID0ge1xuICAgICAgICB1c2VybmFtZTogdmFsaWRhdGVVc2VybmFtZSh1c2VybmFtZSksXG4gICAgICAgIHBhc3N3b3JkOiB2YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkKSxcbiAgICAgICAgY291bnRyeTogdmFsaWRhdGVDb3VudHJ5KGNvdW50cnkpLFxuICAgIH07XG5cbiAgICBpZiAoT2JqZWN0LnZhbHVlcyhmaWVsZEVycm9ycykuc29tZShCb29sZWFuKSkgcmV0dXJuIGJhZFJlcXVlc3QoeyBmaWVsZEVycm9ycywgZmllbGRzIH0pO1xuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHJlZ2lzdGVyKHsgdXNlcm5hbWUsIHBhc3N3b3JkLCBjb3VudHJ5LCBjb3VudHJ5RW1vamkgfSk7XG4gICAgY29uc29sZS5sb2coeyB1c2VyIH0pO1xuICAgIGlmICghdXNlcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmllbGRzLFxuICAgICAgICAgICAgZm9ybUVycm9yOiBgVXNlcm5hbWUvUGFzc3dvcmQgY29tYmluYXRpb24gaXMgaW5jb3JyZWN0YCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZVVzZXJTZXNzaW9uKHVzZXIuaWQsIFwiL3BsYXlcIik7XG59O1xuXG5jb25zdCBSZWdpc3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YTxBY3Rpb25EYXRhPigpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2tiZyBoLXNjcmVlbiB3LXNjcmVlblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHctMTEvMTIgbWQ6dy0yLzQgbGc6dy0xLzMgaC00LzUgcC04IHJvdW5kZWQtbGcgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kPVwicG9zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e2FjdGlvbkRhdGE/LmZvcm1FcnJvciA/IFwiVGhlcmUgd2FzIGFuIGVycm9yXCIgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5SZWdpc3RlcjwvbGVnZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14bFwiIGh0bWxGb3I9XCJ1c2VybmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlcm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29ycmVjdD1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBVc2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTQgcm91bmRlZC1tZCB3LWZ1bGwgYm9yZGVyLWJsYWNrYmcgYm9yZGVyLXNvbGlkIGJvcmRlci0yIGJnLXRyYW5zcGFyZW50IHRleHQtbGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthY3Rpb25EYXRhPy5maWVsZHM/LnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXtCb29sZWFuKGFjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy51c2VybmFtZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8udXNlcm5hbWUgPyBcInVzZXJuYW1lLWVycm9yXCIgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8udXNlcm5hbWUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtcmVkLTUwMFwiIHJvbGU9XCJhbGVydFwiIGlkPVwidXNlcm5hbWUtZXJyb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnMudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14bFwiIGh0bWxGb3I9XCJjb3VudHJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3VudHJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudHJ5U2VsZWN0IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uY291bnRyeSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1yZWQtNTAwXCIgcm9sZT1cImFsZXJ0XCIgaWQ9XCJwYXNzd29yZC1lcnJvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycy5jb3VudHJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14bFwiIGh0bWxGb3I9XCJwYXNzd29yZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTQgcm91bmRlZC1tZCB3LWZ1bGwgYm9yZGVyLWJsYWNrYmcgYm9yZGVyLXNvbGlkIGJvcmRlci0yIGJnLXRyYW5zcGFyZW50IHRleHQtbGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthY3Rpb25EYXRhPy5maWVsZHM/LnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXtCb29sZWFuKGFjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5wYXNzd29yZCkgfHwgdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LnBhc3N3b3JkID8gXCJwYXNzd29yZC1lcnJvclwiIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LnBhc3N3b3JkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXJlZC01MDBcIiByb2xlPVwiYWxlcnRcIiBpZD1cInBhc3N3b3JkLWVycm9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZm9ybS1lcnJvci1tZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5mb3JtRXJyb3IgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtcmVkLTUwMFwiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5mb3JtRXJyb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXNreS01MDAgcHgtNSBweS0zIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlciB3LTIvNCB0ZXh0LXNtIG1kOnRleHQtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFscmVhZHkgaGF2ZSBhbiBhY2NvdW50ID97XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCIgY2xhc3NOYW1lPVwidGV4dC1za3ktNTAwIHVuZGVybGluZSBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyO1xuIiwgImV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVVzZXJuYW1lKHVzZXJuYW1lOiB1bmtub3duKSB7XG4gICAgaWYgKHR5cGVvZiB1c2VybmFtZSAhPT0gXCJzdHJpbmdcIiB8fCB1c2VybmFtZS5sZW5ndGggPCAzKSB7XG4gICAgICAgIHJldHVybiBgVXNlcm5hbWUgbXVzdCBiZSBhdCBsZWFzdCAzIGNoYXJhY3RlcnMgbG9uZ2A7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVQYXNzd29yZChwYXNzd29yZDogdW5rbm93bikge1xuICAgIGlmICh0eXBlb2YgcGFzc3dvcmQgIT09IFwic3RyaW5nXCIgfHwgcGFzc3dvcmQubGVuZ3RoIDwgNikge1xuICAgICAgICByZXR1cm4gYFBhc3N3b3JkcyBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycyBsb25nYDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUNvdW50cnkoY291bnRyeTogdW5rbm93bikge1xuICAgIGlmICh0eXBlb2YgY291bnRyeSAhPT0gXCJzdHJpbmdcIiB8fCBjb3VudHJ5Lmxlbmd0aCA8IDQpIHtcbiAgICAgICAgcmV0dXJuIGBQbGVhc2Ugc2VsZWN0IGEgdmFsaWQgY291bnRyeWA7XG4gICAgfVxufVxuIiwgImltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xuaW1wb3J0IHsgY291bnRyaWVzIH0gZnJvbSBcImNvdW50cmllcy1saXN0XCI7XG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDb3VudHJ5U2VsZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IHVzZVN0YXRlPHt9W10+KFtdKTtcblxuICAgIGNvbnN0IGN1c3RvbVN0eWxlczogYW55ID0ge1xuICAgICAgICBjb250YWluZXI6IChwcm92aWRlZDogT2JqZWN0KSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJvdmlkZWQsXG4gICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICMwMDBcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI2cHhcIixcbiAgICAgICAgfSksXG4gICAgICAgIGlucHV0OiAocHJvdmlkZWQ6IE9iamVjdCkgPT4gKHtcbiAgICAgICAgICAgIC4uLnByb3ZpZGVkLFxuICAgICAgICAgICAgcGFkZGluZzogMTYsXG4gICAgICAgICAgICBjb2xvcjogXCIjMDAwXCIsXG4gICAgICAgIH0pLFxuICAgICAgICBzaW5nbGVWYWx1ZTogKHByb3ZpZGVkOiBPYmplY3QpID0+ICh7XG4gICAgICAgICAgICAuLi5wcm92aWRlZCxcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgICAgfSksXG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGJ1aWxkRGF0YSgpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGJ1aWxkRGF0YSA9ICgpID0+IHtcbiAgICAgICAgbGV0IGRhdGEgPSBPYmplY3QudmFsdWVzKGNvdW50cmllcykubWFwKCh7IG5hbWUsIGVtb2ppIH0pID0+ICh7IGxhYmVsOiBuYW1lICsgXCIgXCIgKyBlbW9qaSwgdmFsdWU6IG5hbWUgKyBcIi8vXCIgKyBlbW9qaSwgZW1vamkgfSkpO1xuICAgICAgICBzZXRPcHRpb25zKGRhdGEpO1xuICAgIH07XG5cbiAgICByZXR1cm4gPFNlbGVjdCBvcHRpb25zPXtvcHRpb25zfSBzdHlsZXM9e2N1c3RvbVN0eWxlc30gbmFtZT1cImNvdW50cnlcIiAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50cnlTZWxlY3Q7XG4iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgbG9nb3V0IH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcblxuLy8gZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhcImFjdGlvbiBmdW5jdGlvblwiKTtcblxuLy8gfTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgICByZXR1cm4gbG9nb3V0KHJlcXVlc3QpO1xufTtcbiIsICJpbXBvcnQgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdC9yb3V0ZU1vZHVsZXNcIjtcbmltcG9ydCB7IExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhLCBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBnZXRVc2VyIH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogXCJXT1JETEUgQ0hBTVAgLSBCdWlsdCB3aXRoIFJlbWl4IVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEbyB5b3UgaGF2ZSB3aGF0IGl0IHRha2VzIHRvIGNvbXBldGUgZ2xvYmFsbHk/IFBsYXkgbm93IVwiLFxuICAgIH07XG59O1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgICBsZXQgdXNlciA9IGF3YWl0IGdldFVzZXIocmVxdWVzdCk7XG4gICAgY29uc29sZS5sb2codXNlcik7XG5cbiAgICByZXR1cm4gdXNlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICAgIGNvbnN0IHVzZXIgPSB1c2VMb2FkZXJEYXRhKCk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2tiZyBoLXNjcmVlbiB3LXNjcmVlblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1mdWxsIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0zeGwgbWQ6dGV4dC01eGwgZm9udC1ib2xkIHRleHQtY2VudGVyXCI+V09SRExFIENIQU1QPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHshdXNlciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtbGcgdGV4dC1jZW50ZXIgbXQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEbyB5b3UgaGF2ZSB3aGF0IGl0IHRha2VzIHRvIGNvbXBldGUgZ2xvYmFsbHkgP3tcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcmVnaXN0ZXJcIiBjbGFzc05hbWU9XCJ0ZXh0LXNreS00MDAgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYXBwZWFyIG9uIHRoZSBnbG9iYWwgbGVhZGVyYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1sZyB0ZXh0LWNlbnRlciBtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlbGNvbWUgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPnt1c2VyLnVzZXJuYW1lfTwvc3Bhbj4sIHlvdSBjdXJyZW50IGhhdmUge3VzZXIuc2NvcmV9IHBvaW50cy4gWW91XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbiBkbyBiZXR0ZXIhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS04IGZsZXgganVzdGlmeS1ldmVubHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz1cIi9wbGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS02MDAgdGV4dC13aGl0ZSB0ZXh0LW1kIG1kOnRleHQteGwgdy0xLzMgcm91bmRlZC1sZyBweS0zIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89XCIvbGVhZGVyYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIHRleHQtbWQgbWQ6dGV4dC14bCB3LTEvMyByb3VuZGVkLWxnIHB5LTMgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGVhZGVyYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgRm9ybSwganNvbiwgTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgQWN0aW9uRGF0YSB9IGZyb20gXCJ+L3R5cGVzL3R5cGVzXCI7XG5pbXBvcnQgeyBjcmVhdGVVc2VyU2Vzc2lvbiwgbG9naW4gfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuaW1wb3J0IHsgdmFsaWRhdGVQYXNzd29yZCwgdmFsaWRhdGVVc2VybmFtZSB9IGZyb20gXCJ+L3V0aWxzL3ZhbGlkYXRpb25cIjtcblxuY29uc3QgYmFkUmVxdWVzdCA9IChkYXRhOiBBY3Rpb25EYXRhKSA9PiBqc29uKGRhdGEsIHsgc3RhdHVzOiA0MDAgfSk7XG5cbmV4cG9ydCBsZXQgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gICAgY29uc3QgdXNlcm5hbWUgPSBmb3JtLmdldChcInVzZXJuYW1lXCIpO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gZm9ybS5nZXQoXCJwYXNzd29yZFwiKTtcblxuICAgIGlmICh0eXBlb2YgdXNlcm5hbWUgIT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHBhc3N3b3JkICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBiYWRSZXF1ZXN0KHtcbiAgICAgICAgICAgIGZvcm1FcnJvcjogYEZvcm0gbm90IHN1Ym1pdHRlZCBjb3JyZWN0bHkuYCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZmllbGRzID0geyB1c2VybmFtZSwgcGFzc3dvcmQgfTtcbiAgICBjb25zdCBmaWVsZEVycm9ycyA9IHtcbiAgICAgICAgdXNlcm5hbWU6IHZhbGlkYXRlVXNlcm5hbWUodXNlcm5hbWUpLFxuICAgICAgICBwYXNzd29yZDogdmFsaWRhdGVQYXNzd29yZChwYXNzd29yZCksXG4gICAgfTtcblxuICAgIGlmIChPYmplY3QudmFsdWVzKGZpZWxkRXJyb3JzKS5zb21lKEJvb2xlYW4pKSByZXR1cm4gYmFkUmVxdWVzdCh7IGZpZWxkRXJyb3JzLCBmaWVsZHMgfSk7XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgbG9naW4oeyB1c2VybmFtZSwgcGFzc3dvcmQgfSk7XG4gICAgY29uc29sZS5sb2coeyB1c2VyIH0pO1xuICAgIGlmICghdXNlcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmllbGRzLFxuICAgICAgICAgICAgZm9ybUVycm9yOiBgVXNlcm5hbWUvUGFzc3dvcmQgY29tYmluYXRpb24gaXMgaW5jb3JyZWN0YCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZVVzZXJTZXNzaW9uKHVzZXIuaWQsIFwiL3BsYXlcIik7XG59O1xuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFja2JnIGgtc2NyZWVuIHctc2NyZWVuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgdy0xMS8xMiBtZDp3LTIvNCBsZzp3LTEvMyBtaW4taC0zLzUgcC04IHNob3J0OmgtMy80IHJvdW5kZWQtbGcgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBhdXRvQ29tcGxldGU9XCJvZmZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGVnZW5kIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+TG9nIGluPC9sZWdlbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhsXCI+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29ycmVjdD1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBVc2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTQgcm91bmRlZC1tZCB3LWZ1bGwgYm9yZGVyLWJsYWNrYmcgYm9yZGVyLXNvbGlkIGJvcmRlci0yIGJnLXRyYW5zcGFyZW50IHRleHQtbGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14bFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC00IHJvdW5kZWQtbWQgdy1mdWxsIGJvcmRlci1ibGFja2JnIGJvcmRlci1zb2xpZCBib3JkZXItMiBiZy10cmFuc3BhcmVudCB0ZXh0LWxnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1za3ktNTAwIHB4LTUgcHktMyByb3VuZGVkLW1kIHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgdy0yLzQgdGV4dC1zbSBtZDp0ZXh0LWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb24ndCBoYXZlIGFuIGFjY291bnQgP3tcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcmVnaXN0ZXJcIiBjbGFzc05hbWU9XCJ0ZXh0LXNreS01MDAgdW5kZXJsaW5lIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWdpc3RlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBMaW5rLCBMb2FkZXJGdW5jdGlvbiwgT3V0bGV0LCByZWRpcmVjdCwgdXNlTG9hZGVyRGF0YSwgdXNlU3VibWl0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IFdvcmRzIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJ+L3V0aWxzL2RiLnNlcnZlclwiO1xuaW1wb3J0IEtleWJvYXJkIGZyb20gXCJ+L2NvbXBvbmVudHMvS2V5Ym9hcmRcIjtcbmltcG9ydCB7IGtleVN0eWxlLCBSZXNwb25zZSB9IGZyb20gXCJ+L3R5cGVzL3R5cGVzXCI7XG5pbXBvcnQgeyB1cGRhdGVTY29yZSB9IGZyb20gXCJ+L3V0aWxzL3F1ZXJpZXMuc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRVc2VySWQgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuaW1wb3J0IHsgdG9hc3RIYW5kbGVyIH0gZnJvbSBcIn4vdXRpbHMvdG9hc3RIYW5kbGVyXCI7XG5cbnR5cGUgTG9hZGVyRGF0YSA9IHsgd29yZHM6IEFycmF5PFdvcmRzPiB9O1xuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gICAgLy9UT0RPID0+IHJldHVybiBvbmx5IG9uZSByYW5kb20gd29yZCBmcm9tIERCXG4gICAgLy9UT0RPID0+IFJFTU9WRSBudW1iZXIgZnJvbSB3b3JkIHNjaGVtYVxuICAgIGNvbnN0IGRhdGE6IExvYWRlckRhdGEgPSB7XG4gICAgICAgIHdvcmRzOiBhd2FpdCBkYi53b3Jkcy5maW5kTWFueSgpLFxuICAgIH07XG5cbiAgICBsZXQgZm9ybWF0dGVkV29yZHMgPSBkYXRhLndvcmRzLm1hcCgod29yZCkgPT4gd29yZC53b3JkKTtcblxuICAgIGxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MzM3KTtcbiAgICBjb25zb2xlLmxvZyhmb3JtYXR0ZWRXb3Jkcy5sZW5ndGgpO1xuICAgIGxldCByYW5kb21Xb3JkID0gZm9ybWF0dGVkV29yZHNbcmFuZG9tXS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgY29uc29sZS5sb2cocmFuZG9tV29yZCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWxsV29yZHM6IGZvcm1hdHRlZFdvcmRzLFxuICAgICAgICB3b3JkVG9HdWVzczogcmFuZG9tV29yZCxcbiAgICAgICAgaW5pdGlhbFJlc3BvbnNlOiBBcnJheS5mcm9tKHsgbGVuZ3RoOiA2IH0sIChlKSA9PlxuICAgICAgICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogNSB9LCAoKSA9PiAoeyBsZXR0ZXI6IFwiXCIsIGNsYXNzTmFtZTogXCJ0ZXh0LXdoaXRlIGJnLWJsdWVcIiB9KSlcbiAgICAgICAgKSxcbiAgICB9O1xufTtcblxuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gICAgY29uc3QgdXNlcklkID0gYXdhaXQgZ2V0VXNlcklkKHJlcXVlc3QpO1xuICAgIGxldCBkYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICAgIGxldCBzdGF0dXMgPSBkYXRhLmdldChcInN0YXR1c1wiKTtcbiAgICBsZXQgc2NvcmUgPSBkYXRhLmdldChcInNjb3JlXCIpO1xuICAgIGxldCByZWRpcmVjdFRvID0gXCJcIjtcblxuICAgIGlmIChzdGF0dXMgPT09IFwid2luXCIgJiYgc2NvcmUpIHtcbiAgICAgICAgaWYgKHVzZXJJZCkge1xuICAgICAgICAgICAgbGV0IHVwZGF0ZWRTY29yZSA9IGF3YWl0IHVwZGF0ZVNjb3JlKHVzZXJJZCwgK3Njb3JlKTtcbiAgICAgICAgICAgIGlmICghdXBkYXRlZFNjb3JlKSB7XG4gICAgICAgICAgICAgICAgLy90aHJvdyBlcnJvciBoZXJlXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlZGlyZWN0VG8gPSBcIi9wbGF5L3dpblwiO1xuICAgIH1cblxuICAgIGlmIChzdGF0dXMgPT09IFwibG9zZVwiKSB7XG4gICAgICAgIHJlZGlyZWN0VG8gPSBcIi9wbGF5L2xvc2VcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVkaXJlY3QocmVkaXJlY3RUbyk7XG59O1xuXG5jb25zdCBQbGF5ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgYWxsV29yZHMsIHdvcmRUb0d1ZXNzLCBpbml0aWFsUmVzcG9uc2UgfSA9IHVzZUxvYWRlckRhdGEoKTtcbiAgICBjb25zdCBzdWJtaXQgPSB1c2VTdWJtaXQoKTtcbiAgICBjb25zdCBbY3VycmVudFJvdywgc2V0Q3VycmVudFJvd10gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbcmVzcG9uc2VzLCBzZXRSZXNwb25zZXNdID0gdXNlU3RhdGU8UmVzcG9uc2VbXVtdPihpbml0aWFsUmVzcG9uc2UpO1xuICAgIGNvbnN0IFt3cm9uZ0d1ZXNzLCBzZXRXcm9uZ0d1ZXNzXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgICBjb25zdCBba2V5U3R5bGUsIHNldEtleVN0eWxlXSA9IHVzZVN0YXRlPGtleVN0eWxlPih7fSk7XG5cbiAgICBjb25zdCBnZXRDdXJyZW50V29yZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlc1tjdXJyZW50Um93XS5tYXAoKGVsZW0pID0+IGVsZW0ubGV0dGVyKS5qb2luKFwiXCIpO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRMZXR0ZXIgPSAobGV0dGVyOiBzdHJpbmcpID0+IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlVHVwbGUgPSBbLi4ucmVzcG9uc2VzXTtcbiAgICAgICAgbGV0IHJvd1dvcmQgPSBnZXRDdXJyZW50V29yZCgpO1xuXG4gICAgICAgIGlmIChsZXR0ZXIudG9Mb3dlckNhc2UoKSA9PT0gXCJlbnRlclwiKSB7XG4gICAgICAgICAgICBzYXZlRW50cnkoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsZXR0ZXIudG9Mb3dlckNhc2UoKSA9PT0gXCJjbHJcIikge1xuICAgICAgICAgICAgc2V0V3JvbmdHdWVzcyhmYWxzZSk7XG4gICAgICAgICAgICByZW1vdmVMZXR0ZXIoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2YWxpZGF0ZWQgPSB2YWxpZGF0ZUVudHJ5KHJvd1dvcmQpO1xuICAgICAgICBpZiAoIXZhbGlkYXRlZCkgcmV0dXJuO1xuXG4gICAgICAgIHJlc3BvbnNlVHVwbGVbY3VycmVudFJvd11bcm93V29yZC5sZW5ndGhdLmxldHRlciA9IGxldHRlcjtcbiAgICAgICAgc2V0UmVzcG9uc2VzKHJlc3BvbnNlVHVwbGUpO1xuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVMZXR0ZXIgPSAoKSA9PiB7XG4gICAgICAgIGxldCB3b3JkID0gZ2V0Q3VycmVudFdvcmQoKTtcbiAgICAgICAgaWYgKHdvcmQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc3BvbnNlVHVwbGUgPSBbLi4ucmVzcG9uc2VzXTtcbiAgICAgICAgcmVzcG9uc2VUdXBsZVtjdXJyZW50Um93XVt3b3JkLmxlbmd0aCAtIDFdLmxldHRlciA9IFwiXCI7XG4gICAgICAgIHNldFJlc3BvbnNlcyhyZXNwb25zZVR1cGxlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdmFsaWRhdGVFbnRyeSA9IChyb3dXb3JkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKHJvd1dvcmQubGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIGNvbnN0IHNhdmVFbnRyeSA9ICgpID0+IHtcbiAgICAgICAgbGV0IHZhbGlkYXRlZCA9IHNhdmVSZXNwb25zZSgpO1xuICAgICAgICBpZiAoIXZhbGlkYXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNldEN1cnJlbnRSb3coKGMpID0+IGMgKyAxKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZW5kR2FtZSA9IGFzeW5jIChzdGF0dXM6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRDdXJyZW50Um93KDApO1xuICAgICAgICBzZXRSZXNwb25zZXMoQXJyYXkuZnJvbSh7IGxlbmd0aDogNiB9LCAoZSkgPT4gQXJyYXkuZnJvbSh7IGxlbmd0aDogNSB9LCAoKSA9PiAoeyBsZXR0ZXI6IFwiXCIsIGNsYXNzTmFtZTogXCJ0ZXh0LXdoaXRlIGJnLWJsdWVcIiB9KSkpKTtcbiAgICAgICAgc2V0S2V5U3R5bGUoe30pO1xuICAgICAgICBpZiAoc3RhdHVzID09PSBcIndpblwiKSB7XG4gICAgICAgICAgICBzdWJtaXQoeyBzdGF0dXMsIHNjb3JlOiBTdHJpbmcoNiAtIGN1cnJlbnRSb3cpIH0sIHsgbWV0aG9kOiBcInBvc3RcIiB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1Ym1pdCh7IHN0YXR1cyB9LCB7IG1ldGhvZDogXCJwb3N0XCIgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgbWFya0tleXMgPSAob2JqOiBrZXlTdHlsZSkgPT4ge1xuICAgICAgICBzZXRLZXlTdHlsZSh7IC4uLmtleVN0eWxlLCAuLi5vYmogfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNoZWNrRGljdGlvbmFyeSA9ICh3b3JkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKCFhbGxXb3Jkcy5pbmNsdWRlcyh3b3JkLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICB0b2FzdEhhbmRsZXIoXCJXb3JkIG5vdCBpbiBkaWN0aW9uYXJ5IVwiLCAyMDAwKTtcbiAgICAgICAgICAgIHNldFdyb25nR3Vlc3ModHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIGNvbnN0IHNhdmVSZXNwb25zZSA9ICgpID0+IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlVHVwbGUgPSBbLi4ucmVzcG9uc2VzXTtcbiAgICAgICAgbGV0IGN1cnJlbnRXb3JkID0gZ2V0Q3VycmVudFdvcmQoKTtcbiAgICAgICAgY29uc3Qga2V5czoga2V5U3R5bGUgPSB7fTtcblxuICAgICAgICBpZiAoY3VycmVudFdvcmQubGVuZ3RoIDwgNSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjaGVja0RpY3Rpb25hcnkoY3VycmVudFdvcmQpKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3JkVG9HdWVzcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHdvcmQgPSByZXNwb25zZVR1cGxlW2N1cnJlbnRSb3ddO1xuXG4gICAgICAgICAgICBpZiAod29yZFRvR3Vlc3MuaW5jbHVkZXMod29yZFtpXS5sZXR0ZXIpICYmIHdvcmRbaV0ubGV0dGVyICE9PSB3b3JkVG9HdWVzc1tpXSkge1xuICAgICAgICAgICAgICAgIGtleXNbd29yZFtpXS5sZXR0ZXJdID0gXCJ0ZXh0LXdoaXRlIGJnLXllbGxvdy02MDBcIjtcbiAgICAgICAgICAgICAgICB3b3JkW2ldLmNsYXNzTmFtZSA9IFwidGV4dC13aGl0ZSBiZy15ZWxsb3ctNjAwXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdvcmRbaV0ubGV0dGVyID09PSB3b3JkVG9HdWVzc1tpXSkge1xuICAgICAgICAgICAgICAgIGtleXNbd29yZFtpXS5sZXR0ZXJdID0gXCJ0ZXh0LXdoaXRlIGJnLWdyZWVuLTgwMFwiO1xuICAgICAgICAgICAgICAgIHdvcmRbaV0uY2xhc3NOYW1lID0gXCJ0ZXh0LXdoaXRlIGJnLWdyZWVuLTgwMFwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3b3JkW2ldLmNsYXNzTmFtZSA9IFwidGV4dC13aGl0ZSBiZy1ncmF5LTYwMFwiO1xuICAgICAgICAgICAgICAgIGtleXNbd29yZFtpXS5sZXR0ZXJdID0gXCJ0ZXh0LXdoaXRlIGJnLWdyYXktOTAwXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtYXJrS2V5cyhrZXlzKTtcbiAgICAgICAgc2V0UmVzcG9uc2VzKHJlc3BvbnNlVHVwbGUpO1xuICAgICAgICAvL2NoZWNrIGlmIHdvcmQgbWF0Y2hlcyB3b3JkXG4gICAgICAgIGxldCBnYW1lU3RhdHVzID0gY3VycmVudFdvcmQgPT09IHdvcmRUb0d1ZXNzID8gXCJ3aW5cIiA6IGN1cnJlbnRSb3cgPT09IDUgPyBcImxvc2VcIiA6IG51bGw7XG4gICAgICAgIGlmIChnYW1lU3RhdHVzKSB7XG4gICAgICAgICAgICBlbmRHYW1lKGdhbWVTdGF0dXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrYmcgaC1zY3JlZW4gdy1zY3JlZW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMi8zIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BncmlkIGdhcC0zIGdyaWQtY29scy01IGdyaWQtcm93cy01IHAtMyAke3dyb25nR3Vlc3MgPyBcImFuaW1hdGUtc2hha2VcIiA6IG51bGx9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlc3BvbnNlcy5tYXAoKHJlc3BvbnNlLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLm1hcCgobGV0dGVyLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bib3JkZXItZ3JheS0zMDAgYm9yZGVyLTIgcm91bmRlZC1zbSBwLTQgZm9udC1ib2xkIHRleHQtM3hsIHctMTQgaC0xMiBzaG9ydDpoLTEwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyICR7bGV0dGVyLmNsYXNzTmFtZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xldHRlci5sZXR0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctZnVsbCBhYnNvbHV0ZSBib3R0b20tOFwiPlxuICAgICAgICAgICAgICAgICAgICA8S2V5Ym9hcmQgYWRkTGV0dGVyPXthZGRMZXR0ZXJ9IGtleVN0eWxlPXtrZXlTdHlsZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gaC1zY3JlZW4gYmctYmxhY2tiZyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQtNHhsXCI+QW4gZXJyb3IgPyEgSSBrbmV3IHNvZnR3YXJlIGVuZ2luZWVyaW5nIHdhcyBub3QgbXkgdGhpbmchIDwvcD5cbiAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNjAwIHRleHQtMnhsIHVuZGVybGluZSBtdC00IGJsb2NrXCIgdG89XCIvcGxheVwiPlxuICAgICAgICAgICAgICAgICAgICBHbyBCYWNrXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXk7XG4iLCAiY29uc3QgbGV0dGVycyA9IFwiUSxXLEUsUixULFksVSxJLE8sUCBBLFMsRCxGLEcsSCxKLEssTCBFbnRlcixaLFgsQyxWLEIsTixNLENMUlwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIGFkZExldHRlcjogKGFyZzA6IHN0cmluZykgPT4gdm9pZDtcbiAgICBrZXlTdHlsZToge1xuICAgICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG4gICAgfTtcbn1cblxuY29uc3QgS2V5Ym9hcmQgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cbiAgICAgICAgICAgIHtsZXR0ZXJzLnNwbGl0KFwiIFwiKS5tYXAoKHJvdykgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiBrZXk9e3Jvd30+XG4gICAgICAgICAgICAgICAgICAgIHtyb3cuc3BsaXQoXCIsXCIpLm1hcCgobGV0dGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLmFkZExldHRlcihsZXR0ZXIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bib3JkZXItMiBiZy1ncmF5LTMwMCBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1zbSB3LTE0IGgtMTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXgtMSBteS0yIGN1cnNvci1wb2ludGVyICR7cHJvcHMua2V5U3R5bGVbbGV0dGVyXX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2xldHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsZXR0ZXIgPT09IFwiQ0xSXCIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsxLjV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTIgMTRsMi0ybTAgMGwyLTJtLTIgMmwtMi0ybTIgMmwyIDJNMyAxMmw2LjQxNCA2LjQxNGEyIDIgMCAwMDEuNDE0LjU4NkgxOWEyIDIgMCAwMDItMlY3YTIgMiAwIDAwLTItMmgtOC4xNzJhMiAyIDAgMDAtMS40MTQuNTg2TDMgMTJ6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgS2V5Ym9hcmQ7XG4iLCAiaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcblxuZXhwb3J0IGNvbnN0IHRvYXN0SGFuZGxlciA9IChtZXNzYWdlID0gXCJcdUQ4M0VcdUREODQgV293IHNvIGVhc3khXCIsIHRpbWUgPSA1MDAwKSA9PiB7XG4gICAgcmV0dXJuIHRvYXN0KG1lc3NhZ2UsIHtcbiAgICAgICAgcG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxuICAgICAgICBhdXRvQ2xvc2U6IHRpbWUsXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXG4gICAgfSk7XG59O1xuIiwgImltcG9ydCBNb2RhbCBmcm9tIFwifi9jb21wb25lbnRzL01vZGFsXCI7XG5cbmNvbnN0IExvc2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1vZGFsIGljb249e1wiXHUyNzE3XCJ9IHRpdGxlPXtcIlNPUlJZISFcIn0gbWVzc2FnZT17XCJZb3UgbG9zdCB0aGlzIHJvdW5kISB3b3VsZCB5b3UgcmV0cnk/XCJ9IGljb25TdHlsZT17XCJ0ZXh0LXJlZC02MDAgdGV4dC04eGwgbS0wIHAtMFwifSAvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb3NlO1xuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IE1vZGFsUHJvcHMgfSBmcm9tIFwifi90eXBlcy90eXBlc1wiO1xuXG5jb25zdCBNb2RhbCA9ICh7IGljb24sIHRpdGxlLCBtZXNzYWdlLCBpY29uU3R5bGUgfTogTW9kYWxQcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gaC1zY3JlZW4gYmctYmxhY2sgYmctb3BhY2l0eS04MCBmaXhlZCB6LTIwIHRvcC0wIGxlZnQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTExLzEyIGxnOnctMS8zIGgtMS8zIGJnLXdoaXRlIHJvdW5kZWQteGwgIHB4LTUgZmxleCBpdGVtcy1jZW50ZXIgcmVsYXRpdmUganVzdGlmeS1jZW50ZXIgdGV4dC1ibGFja1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtpY29uU3R5bGV9PntpY29ufTwvaT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIG0tMCBwLTBcIj57dGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIG15LTQgXCI+e21lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYXJvdW5kIG10LThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3BsYXlcIiByZWxvYWREb2N1bWVudCBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNjAwIGhvdmVyOnVuZGVybGluZSB0ZXh0LWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVzdGFydCBHYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9sZWFkZXJib2FyZFwiIHJlbG9hZERvY3VtZW50IGNsYXNzTmFtZT1cInRleHQtYmx1ZS02MDAgaG92ZXI6dW5kZXJsaW5lIHRleHQtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3IExlYWRlcmJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcbiIsICJpbXBvcnQgTW9kYWwgZnJvbSBcIn4vY29tcG9uZW50cy9Nb2RhbFwiO1xuXG5jb25zdCBXaW4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICBpY29uPXtcIlx1MjcxM1wifVxuICAgICAgICAgICAgdGl0bGU9e1wiWUlQRUUhIVwifVxuICAgICAgICAgICAgbWVzc2FnZT17XCJDb25ncmF0dWxhdGlvbnMhIFlvdSBoYXZlIFdPTiB0aGUgZ2FtZSFcIn1cbiAgICAgICAgICAgIGljb25TdHlsZT17XCJ0ZXh0LWdyZWVuLTYwMCB0ZXh0LTh4bCBtLTAgcC0wXCJ9XG4gICAgICAgIC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdpbjtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFF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
