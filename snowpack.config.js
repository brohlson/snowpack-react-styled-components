/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",
    src: "/dist",
  },
  plugins: [["@snowpack/plugin-webpack"]],
  routes: [{ match: "routes", src: ".*", dest: "/index.html" }],
};
