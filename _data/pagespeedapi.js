require("dotenv").config();
const { homepage } = require("../package.json");
const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
	const params = new URLSearchParams();
	params.append("url", homepage);
	params.append("key", process.env.PAGE_SPEED_API_KEY);
	// We use the fields query string param to ask the Google API to only
	// return the data we need - a score and title for each category in the
	// Lighthouse test. Without this, the API returns a *lot* of data.
	params.append(
		"fields",
		"lighthouseResult.categories.*.score,lighthouseResult.categories.*.title",
	);
	params.append("prettyPrint", false);
	// I use the `mobile` strategy, but `desktop` is a valid value too.
	params.append("strategy", "desktop");
	params.append("category", "PERFORMANCE");
	params.append("category", "ACCESSIBILITY");
	params.append("category", "BEST-PRACTICES");
	params.append("category", "SEO");

	let data = await EleventyFetch(
		`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${params.toString()}`,
		{
			duration: "1d",
			type: "json",
		},
	);

	data = JSON.parse(JSON.stringify(data.lighthouseResult.categories));
	console.log(data);
	const getGrade = function (score) {
		if (score < 0.5) {
			return "bad";
		}
		if (score < 0.9) {
			return "ok";
		}
		return "good";
	};

	Object.keys(data).map(function (key) {
		data[key].score = parseInt(data[key].score * 100, 10);
		data[key].grade = getGrade(data[key].score);
	});
	console.log(data);
	return {
		categories: data,
	};
};
