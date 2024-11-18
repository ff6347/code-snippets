/// <reference path="../node_modules/@types/p5/index.d.ts" />
/// <reference path="../node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="../node_modules/@types/p5/global.d.ts" />
/// <reference path="../node_modules/@types/p5/literals.d.ts" />
/// <reference path="../node_modules/@types/p5/constants.d.ts" />

declare namespace spectral {
	function mix(color1: string, color2: string, position: number): string;
	function palette(
		color1: string,
		color2: string,
		steps: number,
		mode?: string,
	): string[];
}
