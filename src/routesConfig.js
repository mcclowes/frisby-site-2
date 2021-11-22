import Data from "./components/common/Data";
import NotFound from "./components/pages/404";

import Home from "./components/pages/Home";
import Credits from "./components/pages/Credits";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Credit from "./components/pages/Credit";

import data from "src/data";

const routesConfig = [
	{
		path: "/",
		title: "Home",
		component: Home,
		exact: true,
		show: false,
	},
	{
		path: "/data",
		title: "Data",
		component: Data(data),
		show: false,
	},
	{
		path: "/about",
		title: "About",
		component: About,
		show: true,
	},
	{
		path: "/credits",
		title: "Credits",
		component: Credits,
		show: true,
	},

	{
		path: "/contact",
		title: "Contact",
		component: Contact,
		show: true,
	},
];

data.credits.forEach((o) => {
	routesConfig.push({
		path: "/credit/" + o.slug,
		component: Credit,
		...o,
	});
});

routesConfig.push({
	component: NotFound,
});

export default routesConfig;
