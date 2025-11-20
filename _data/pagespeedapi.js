import dotenv from "dotenv";
dotenv.config();
import Fetch from "@11ty/eleventy-fetch";

export default async function () {
	let data;

	if (process?.env?.ELEVENTY_ENV !== "production") {
		// don't run page speed in development
		return {
			categories: data,
		};
	}

	const params = new URLSearchParams();
	params.append("url", process?.env?.HOMEPAGE_ENV);
	params.append("key", process?.env?.PAGE_SPEED_API_KEY);
	// Use the fields query string param to ask the Google API to only
	// return the data we need - a score and title for each category in the
	// Lighthouse test. Without this, the API returns a *lot* of data.
	params.append(
		"fields",
		"lighthouseResult.categories.*.score,lighthouseResult.categories.*.title",
	);
	params.append("prettyPrint", false);
	params.append("strategy", "desktop"); // alt option: 'mobile'
	params.append("category", "PERFORMANCE");
	params.append("category", "ACCESSIBILITY");
	params.append("category", "BEST-PRACTICES");
	params.append("category", "SEO");

	try {
		data = await Fetch(
			`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${params.toString()}`,
			{
				duration: "1d",
				type: "json",
			},
		);
		data = JSON.parse(JSON.stringify(data.lighthouseResult.categories));
		Object.keys(data).map((key) => {
			data[key].grade = getGradeFromScore(data[key].score);
			data[key].score = parseInt(data[key].score * 100, 10);
		});
	} catch (event) {
		console.log("error");
		console.log(event);
		return {
			categories: undefined,
		};
	}
}

const getGradeFromScore = (score) => {
	if (score < 0.5) {
		return "bad";
	}
	if (score < 0.9) {
		return "ok";
	}
	return "good";
};
