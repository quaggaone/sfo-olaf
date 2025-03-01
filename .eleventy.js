module.exports = function (eleventyConfig) {
    eleventyConfig.setServerOptions({
        port: 55660,
        showAllHosts: true, // Set this to true to access the server on your local network
        watch: ["_site/**/*.css"], // Watch CSS files for changes
    });

    eleventyConfig.addPassthroughCopy("./assets/.");
    eleventyConfig.addPassthroughCopy({ "./node_modules/bootstrap-icons/font/fonts/.": "assets/fonts/bootstrap-icons" });
    eleventyConfig.addPassthroughCopy({ "./node_modules/masonry-layout/dist/masonry.pkgd.min.js": "assets/lib/masonry-layout/masonry.pkgd.min.js" });

    return {
        dir: {
            input: "src",
        },
        pathPrefix: "/sfo-olaf/",
    };
};
