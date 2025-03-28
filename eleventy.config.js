const { DateTime } = require("luxon");
const markdownItAnchor = require("markdown-it-anchor");

const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginBundle = require("@11ty/eleventy-plugin-bundle");
const pluginNavigation = require("@11ty/eleventy-navigation");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const readingTime = require("eleventy-plugin-reading-time");

const pluginDrafts = require("./eleventy.config.drafts.js");
const pluginImages = require("./eleventy.config.images.js");

module.exports = function (eleventyConfig) {
	// Copy the contents of the `public` folder to the output folder
	// For example, `./public/css/` ends up in `_site/css/`
	eleventyConfig.addPassthroughCopy({
		"./public/": "/",
	});

	eleventyConfig.addPassthroughCopy("content/**/images/**/*");

	// Run Eleventy when these files change:
	// https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets

	// Watch content images for the image pipeline.
	eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpeg,gif}");

	eleventyConfig.setBrowserSyncConfig({
		files: "./_site/css/**/*.css",
	});

	// App plugins
	eleventyConfig.addPlugin(pluginDrafts);
	eleventyConfig.addPlugin(pluginImages);

	eleventyConfig.addPlugin(readingTime);

	// Official plugins
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(pluginSyntaxHighlight, {
		preAttributes: { tabindex: 0 },
	});
	eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
	eleventyConfig.addPlugin(pluginBundle);

	// Filters
	eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
		// Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
		return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(
			format || "dd LLLL yyyy",
		);
	});

	eleventyConfig.addFilter("htmlDateString", (dateObj) => {
		// dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
		return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
	});

	// Get the first `n` elements of a collection.
	eleventyConfig.addFilter("head", (array, n) => {
		if (!Array.isArray(array) || array.length === 0) {
			return [];
		}
		if (n < 0) {
			return array.slice(n);
		}

		return array.slice(0, n);
	});

	// Return the smallest number argument
	eleventyConfig.addFilter("min", (...numbers) => {
		return Math.min.apply(null, numbers);
	});

	// Return all the tags used in a collection
	eleventyConfig.addFilter("getAllTags", (collection) => {
		let tagSet = new Set();
		for (let item of collection) {
			(item.data.tags || []).forEach((tag) => tagSet.add(tag));
		}
		return Array.from(tagSet);
	});

	eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
		return (tags || []).filter(
			(tag) => ["all", "nav", "post", "posts"].indexOf(tag) === -1,
		);
	});

	// Utility filter to log nunjucks data
	eleventyConfig.addFilter("log", (value) => {
		console.log(value);
	});

	// Filter to sort collections by an `order` frontmatter property
	eleventyConfig.addFilter("sortByOrder", (valuesToSort) => {
		let values = [...valuesToSort];
		return values.sort((a, b) => Math.sign(a.data.order - b.data.order));
	});

	// Filter to filter collections by an `publish` frontmatter property
	eleventyConfig.addFilter("filterPublished", (valuesToFilter) => {
		let values = [...valuesToFilter];
		return values.filter((value) => value.data.publish);
	});

	// Customize Markdown library settings:
	eleventyConfig.amendLibrary("md", (mdLib) => {
		mdLib.use(markdownItAnchor, {
			permalink: markdownItAnchor.permalink.ariaHidden({
				placement: "after",
				class: "c-header-anchor",
				symbol: "#",
				ariaHidden: false,
			}),
			level: [1, 2, 3, 4],
			slugify: eleventyConfig.getFilter("slugify"),
		});
	});

	eleventyConfig.addShortcode(
		"describedlink",
		function (label, href, description) {
			const uuid = `described-link-id-${
				Date.now().toString(36) + Math.random().toString(36).substr(2)
			}`;
			return `
				<div class="c-described-link">
					<a id="${uuid}" href="${href}" class="c-described-link__label">${label}</a>
					<span aria-describedby="${uuid}" class="c-described-link__description">${description}</span>
				</div>
			`;
		},
	);

	eleventyConfig.addPairedShortcode(
		"insettext",
		function (content, linkLabel, linkLocation) {
			if (linkLabel && linkLocation) {
				return `
					<div class="c-inset-text">
						<span>${content}</span>
						<div class="c-inset-text__link-container"><a href="${linkLocation}">${linkLabel}</a></div>
					</div>
				`;
			}

			return `
				<div class="c-inset-text">
					<span>${content}</span>
				</div>
			`;
		},
	);

	eleventyConfig.addPairedShortcode(
		"blockquote",
		function (content, cite, citeLocation) {
			function checkHasCiteLocation(citeLocation) {
				return citeLocation ? `cite="${citeLocation}"` : "";
			}

			function checkHasCite(cite) {
				if (cite) {
					return `<footer class="c-block-quote__footer">— <cite>${cite}</cite></footer>`;
				} else {
					return "";
				}
			}

			return `
				<blockquote class="c-block-quote" ${checkHasCiteLocation(citeLocation)}>
					<p class="c-block-quote__content">${content}</p>
					${checkHasCite(cite)}
				</blockquote>
			`;
		},
	);

	// Features to make your build faster (when you need them)

	// If your passthrough copy gets heavy and cumbersome, add this line
	// to emulate the file copy on the dev server. Learn more:
	// https://www.11ty.dev/docs/copy/#emulate-passthrough-copy-during-serve

	// eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

	return {
		// Control which files Eleventy will process
		// e.g.: *.md, *.njk, *.html, *.liquid
		templateFormats: ["md", "njk", "html", "liquid"],

		// Pre-process *.md files with: (default: `liquid`)
		markdownTemplateEngine: "njk",

		// Pre-process *.html files with: (default: `liquid`)
		htmlTemplateEngine: "njk",

		// These are all optional:
		dir: {
			input: "content", // default: "."
			includes: "../_includes", // default: "_includes"
			data: "../_data", // default: "_data"
			output: "_site",
		},

		// -----------------------------------------------------------------
		// Optional items:
		// -----------------------------------------------------------------

		// If your site deploys to a subdirectory, change `pathPrefix`.
		// Read more: https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix

		// When paired with the HTML <base> plugin https://www.11ty.dev/docs/plugins/html-base/
		// it will transform any absolute URLs in your HTML to include this
		// folder name and does **not** affect where things go in the output folder.
		pathPrefix: "/",
	};
};
