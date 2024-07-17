/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#6b5ced",
				secondary: "#3e33e1",
			},
			fontFamily: {
				nunito: "Nunito, sans-serif",
			},
		},
	},
	plugins: [],
};
