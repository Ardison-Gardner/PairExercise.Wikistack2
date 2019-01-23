const html = require("html-template-tag");
const layout = require("./layout");

module.exports = (err) => {
  layout(html`
  <h1>What the heckin' heck?!</h1>
  <p>${err}</p>
  `);
};
