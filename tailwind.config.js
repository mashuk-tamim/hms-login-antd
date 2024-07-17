/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#3e33e1",
				secondary: "#6b5ced",
			},
			fontFamily: {
				nunito: "Nunito, sans-serif",
			},
		},
	},
	plugins: [],
};
