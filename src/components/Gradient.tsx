"use client";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

export const Gradient = ({
	firstColor = "100, 220, 255",
	secondColor = "100, 220, 255",
	thirdColor = "100, 220, 255",
	fourthColor = "200, 50, 50",
	size = "80%",
	blendingValue = "hard-light",
}: {
	firstColor?: string;
	secondColor?: string;
	thirdColor?: string;
	fourthColor?: string;
	size?: string;
	blendingValue?: string;
}) => {
	useEffect(() => {
		document.body.style.setProperty("--first-color", firstColor);
		document.body.style.setProperty("--second-color", secondColor);
		document.body.style.setProperty("--third-color", thirdColor);
		document.body.style.setProperty("--fourth-color", fourthColor);
		document.body.style.setProperty("--size", size);
		document.body.style.setProperty("--blending-value", blendingValue);
	}, []);

	return (
		<>
			<div
				className={cn(
					`absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]`,
					`[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
					// `[transform-origin:center_center]`,
					`opacity-90`
				)}
			></div>
			<div
				className={cn(
					`absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
					`[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] -top-1/2 left-1/3`,
					`[transform-origin:calc(50%-400px)]`,
					`opacity-20`,
					`[transform:translateX(-48%)]`
				)}
			></div>
			<div
				className={cn(
					`absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
					`[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] -right-1/2`,
					`[transform-origin:calc(50%+400px)]`,
					`opacity-20`
				)}
			></div>
			<div
				className={cn(
					`absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
					`[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(80%-var(--size)/2)] -left-1/2`,
					`[transform-origin:calc(50%-200px)]`,
					`animate-fourth`,
					`opacity-20`
				)}
			></div>
		</>
	);
};
