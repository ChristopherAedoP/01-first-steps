/** @format */

import type { Metadata } from "next";


export const metadata: Metadata = {
	title: 'About Page',
	description: 'About Page',
	keywords: ['About Page', 'Chris', 'Informacion'],
};

export default function AboutPage() {
	return <span className="text-7xl">About Page</span>;
}
