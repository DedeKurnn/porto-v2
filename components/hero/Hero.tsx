import React from "react";

type Props = {};

const Hero = (props: Props) => {
	return (
		<section className="h-screen flex justify-center items-center">
			<div></div>
			<div className="container mx-auto">
				<p className="mb-2 text-lg font-medium">Hic Sunt Dracones 🐲</p>
				<h1 className="text-5xl font-semibold mb-8">
					I make amazing website
					<br />
					So, what are you wating for?
				</h1>
				<button className="button-primary">Download CV</button>
			</div>
		</section>
	);
};

export default Hero;
