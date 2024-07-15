const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@widgets": path.resolve(__dirname, "src/widgets/"),
      "@shared": path.resolve(__dirname, "src/shared/"),
    },
  },
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
              @import "src/shared/styles/variables.scss";
              @import "src/shared/styles/mixins.scss";
            `,
      },
    },
  },
};
