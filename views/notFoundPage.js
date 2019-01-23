const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => {
  layout(html`
  <h1>You done fucked up, boy!</h1>
  `);
};
