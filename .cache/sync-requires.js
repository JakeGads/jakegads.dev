const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jakeg/source/repo/jakegads.dev/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/jakeg/source/repo/jakegads.dev/src/pages/404.js"))),
  "component---src-pages-education-js": hot(preferDefault(require("/Users/jakeg/source/repo/jakegads.dev/src/pages/education.js"))),
  "component---src-pages-experience-js": hot(preferDefault(require("/Users/jakeg/source/repo/jakegads.dev/src/pages/experience.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/jakeg/source/repo/jakegads.dev/src/pages/index.js"))),
  "component---src-pages-interests-js": hot(preferDefault(require("/Users/jakeg/source/repo/jakegads.dev/src/pages/interests.js"))),
  "component---src-pages-skills-js": hot(preferDefault(require("/Users/jakeg/source/repo/jakegads.dev/src/pages/skills.js")))
}

