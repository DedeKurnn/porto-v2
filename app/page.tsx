"use client";

import Project from "@/components/Project";
import Hero from "@/components/hero/Hero";
import { useState, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
	return (
		<main>
			<Hero />
			<section>
				<Project />
				<Project />
				<Project />
			</section>
		</main>
	);
}
