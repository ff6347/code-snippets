/// <reference path="../node_modules/@types/p5/index.d.ts" />
/// <reference path="../node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="../node_modules/@types/p5/global.d.ts" />
/// <reference path="../node_modules/@types/p5/literals.d.ts" />
/// <reference path="../node_modules/@types/p5/constants.d.ts" />

// Define a type alias for the function signature
type EasingFunction = (
	time: number,
	start: number,
	end: number,
	duration: number,
) => number;

declare const easeInBack: EasingFunction;
declare const easeInBounce: EasingFunction;
declare const easeInCirc: EasingFunction;
declare const easeInCubic: EasingFunction;
declare const easeInElastic: EasingFunction;
declare const easeInExpo: EasingFunction;
declare const easeInLinear: EasingFunction;
declare const easeInOutBack: EasingFunction;
declare const easeInOutBounce: EasingFunction;
declare const easeInOutCirc: EasingFunction;
declare const easeInOutCubic: EasingFunction;
declare const easeInOutElastic: EasingFunction;
declare const easeInOutExpo: EasingFunction;
declare const easeInOutLinear: EasingFunction;
declare const easeInOutQuad: EasingFunction;
declare const easeInOutQuart: EasingFunction;
declare const easeInOutQuint: EasingFunction;
declare const easeInOutSine: EasingFunction;
declare const easeInQuad: EasingFunction;
declare const easeInQuart: EasingFunction;
declare const easeInQuint: EasingFunction;
declare const easeInSine: EasingFunction;
declare const easeOutBack: EasingFunction;
declare const easeOutBounce: EasingFunction;
declare const easeOutCirc: EasingFunction;
declare const easeOutCubic: EasingFunction;
declare const easeOutElastic: EasingFunction;
declare const easeOutExpo: EasingFunction;
declare const easeOutLinear: EasingFunction;
declare const easeOutQuad: EasingFunction;
declare const easeOutQuart: EasingFunction;
declare const easeOutQuint: EasingFunction;
declare const easeOutSine: EasingFunction;

declare namespace spectral {
	function mix(color1: string, color2: string, position: number): string;
	function palette(
		color1: string,
		color2: string,
		steps: number,
		mode?: string,
	): string[];
}
