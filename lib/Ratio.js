/**
	@npmpackage
	@class Ratio
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-view">ad-view</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { Ratio } from 'ad-view'
		</codeblock>
		<br><br>
		
		Utilities for different ratio layouts; used by {@link UIImage} and deprecated Flipbook.
*/

/**
	@memberof Ratio
	@const {string} EXACT
		'auto' ~ Images display at the exact height and width of the source 
*/
export const EXACT = 'auto'

/**
	@memberof Ratio
	@const {string} FILL
		'cover' ~ Scales the image to fill the target without distortion while maintaining aspect ratio, may cause a crop. 
*/
export const FILL = 'cover'

/**
	@memberof Ratio
	@const {string} FIT
		'contain' ~ Scales to fit the full image without distortion while maintaining aspect ratio, may cause negative borders. 
*/
export const FIT = 'contain'

/**
	@memberof Ratio
	@const {string} STRETCH
		'100% 100%' ~ Images stretches to fill the target, may cause aspect ratio distortion. 
*/
export const STRETCH = '100% 100%'

export function resize(mode, source, target, returnObj) {
	mode = mode || EXACT
	returnObj ||
		(returnObj = {
			width: 0,
			height: 0
		})
	if (mode == EXACT) {
		returnObj.width = source.width
		returnObj.height = source.height
	} else if (mode == STRETCH) {
		returnObj.width = target.width
		returnObj.height = target.height
	} else {
		var s = source.width / source.height
		var t = target.width / target.height
		var a = mode == FILL ? s : t
		var b = mode == FILL ? t : s
		if (a < b) {
			returnObj.height = source.height / (source.width / target.width)
			returnObj.width = target.width
		} else {
			returnObj.width = source.width / (source.height / target.height)
			returnObj.height = target.height
		}
	}
	return returnObj
}
