import Asterisk from "@/../public/assets/icons/asterisk.svg";
import Code from "@/../public/assets/icons/code.svg";
import Server from "@/../public/assets/icons/server.svg";
import Wrench from "@/../public/assets/icons/wrench.svg";
import Flask from "@/../public/assets/icons/flask.svg";
import Globe from "@/../public/assets/icons/globe.svg";
import Router from "@/../public/assets/icons/router.svg";

export const HOME_SKILLS_ITEMS = [
	"FrontEnd",
	"BackEnd",
];

export const HOME_SKILLS_CARDS = {
	FrontEnd: {
		icon: Code,
		items: [
			{
				title: "JavaScript",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
				invert: false,
			},

			{
				title: "React",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
				invert: false,
			},
			{
				title: "Next.js",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
				invert: true, // Next.js logo is dark, so invert for better display
			},
			{
				title: "Tailwind CSS",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
				invert: false,
			},
			{
				title: "Shadcn",
				icon: Asterisk,
				invert: true,
			},
			{
				title: "HTML5",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
				invert: false,
			},
			{
				title: "CSS3",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
				invert: false,
			},
		],
	},

	BackEnd: {
		icon: Server,
		items: [
			{
				title: "Laravel",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
				invert: false,
			},
			{
				title: "Node.js",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
				invert: false,
			},

			{
				title: "PHP",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
				invert: false,
			},
			{
				title: "MySQL",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
				invert: false,
			},
		],
	},

	
	// WebHosting: {
	// 	icon: Router,
	// 	items: [
	// 		{
	// 			title: "Vercel",
	// 			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
	// 			invert: true,
	// 		},
	// 		{
	// 			title: "AWS",
	// 			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
	// 			invert: false,
	// 		},
	// 		{
	// 			title: "Cloudflare",
	// 			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg",
	// 			invert: false,
	// 		},
	// 		{
	// 			title: "HostGator",
	// 			icon: Asterisk,
	// 			invert: true,
	// 		},
	// 		{
	// 			title: "Email",
	// 			icon: Asterisk,
	// 			invert: true,
	// 		},
	// 	],
	// },
};
