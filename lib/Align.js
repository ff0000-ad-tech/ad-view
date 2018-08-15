/**
	@npmpackage
	@class Align
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-view">ad-view</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { Align } from 'ad-view'
		</codeblock>
		<br><br>

		Utility for aligning objects, which works for DOM elements and {@link CanvasDrawer} elements.  The x and y alignments are split up
		into separate assignemnts in one call. There are extra parameters that can be passed into the object to handle more complex logic.
		<br><br>

		<b>Notes:</b>
			<br>
			Align, by default, snaps to a full pixel. To change this, see <b>Sample 3</b> ( snap: false )
			<br><br>

		<b>Sample 1</b>
		<codeblock>
			// simple classic usage
			Align.set(myDiv, Align.LEFT)   // only align left
			Align.set(myDiv, Align.BOTTOM) // only align bottom
			Align.set(myDiv, Align.CENTER) // align both x and y to the center
		</codeblock>
		<br><br>
		
		<b>Sample 2</b>
		<codeblock>
			// simply align the x and y seperately
			Align.set(myDiv, {
				x: Align.RIGHT,
				y: Align.BOTTOM
			})
		</codeblock>
		<br><br>

		<b>Sample 3</b>
		<br>
		<b>'against'</b> is an object to which we align our given object, like making myDiv perfectly centered against myOtherDiv
		<br>
		<b>'against'</b> could also be a number, as in align myDiv centered against adParams.adWidth / 2
		<br>
		<br>
		<b>'outer'</b> is an optional complex parameter which determines how we align to the 'against' object; default to false
		<br>
		If <b>'against'</b> is a number, then <b>'outer'</b> will have no affect.
		<br>
		<br>
		<img src="../docs_images/align/align_c.jpg" />
		<br><br>
		<codeblock>
			// complex alignment, align in relation to another div with an offset shift of 10 pixels, without snapping to a whole pixel
			Align.set(myDiv, {
				x: {
					type: Align.RIGHT,
					against: myOtherDiv,
					offset: 10,
					outer: true
				},
				y: {
					type: Align.BOTTOM,
					offset: 14
				},
				snap: false
			})
		</codeblock>
		<br><br>

		<b>Sample 4</b>
		<codeblock>
			// complex alignment, align in relation to a fixed number with an offset shift of 10 pixels
			Align.set(myDiv, {
				x: {
					type: Align.RIGHT,
					against: 200
					offset: 10,
				},
				y: {
					type: Align.BOTTOM,
					against: 30
					offset: 14
				},
			});
		</codeblock>
		<br><br>

		<b>Sample 5</b>
		<br>
		An Array of items can be passed in to the `source` argument. All items will be individually aligned following the rules passed into the `arg` argument
		<br><br>
		<codeblock>
			// aligns all items to the center
			Align.set([myDiv0, myDiv1, myDiv2], Align.CENTER) 

			// aligns all items to the horizontal center and bottom
			Align.set([myDiv0, myDiv1, myDiv2], {
				x: Align.CENTER,
				y: Align.BOTTOM
			}) 
		</codeblock>
		<br><br>

		<b>Sample 6</b>
		<br>
		The optional keys: <b>'against'</b>, <b>'offset'</b>, and <b>'outer'</b> can be set at the top level to apply to <i>BOTH</i> dirctions as applicable.
		However, if a key is set within <b>'x'</b> or <b>'y'</b>, that will take priority
		<br><br>
		<codeblock>
			// aligns all items to the center of myRefDiv
			Align.set([myDiv0, myDiv1, myDiv2], {
				type: Align.CENTER,
				against: myRefDiv
			}) 

			// Note the against set on the top level then in y:
			// This is NOT good syntax but does technically works...
			Align.set([myDiv0, myDiv1, myDiv2], {
				against: myRefDiv,
				offset: 10
				x: Align.CENTER,
				y: {
					type: Align.BOTTOM,
					against: myOtherDiv
				}
			}) 
			// ...in this case use:
			Align.set([myDiv0, myDiv1, myDiv2], {		
				offset: 10
				x: {
					type: Align.CENTER,
					against: myRefDiv
				},
				y: {
					type: Align.BOTTOM,
					against: myOtherDiv
				}
			}) 
		</codeblock>
		<br><br>
*/
import * as Markup from './Markup'
import * as Styles from './Styles'

var _rect = [
	{
		x: 'offsetWidth',
		y: 'offsetHeight',
		parent: 'parentNode'
	},
	{
		x: 'width',
		y: 'height',
		parent: 'stage'
	}
]

/**
		@memberof Align
		@const {string} BOTTOM
			Synonymous with "alignBottom" 
	*/
export const BOTTOM = 'alignBottom'

/**
	@memberof Align
	@const {string} CENTER
		Synonymous with "alignCenter" 
*/
export const CENTER = 'alignCenter'

/**
	@memberof Align
	@const {string} LEFT
		Synonymous with "alignLeft" 
*/
export const LEFT = 'alignLeft'

/**
	@memberof Align
	@const {string} RIGHT
		Synonymous with "alignRight" 
*/
export const RIGHT = 'alignRight'

/**
	@memberof Align
	@const {string} TOP
		Synonymous with "alignTop" 
*/
export const TOP = 'alignTop'

/**
	@memberof Align
	@const {string} BOTTOM_LEFT
		Synonymous with "alignBottomLeft", used for {@link UITextField.alignText} 
*/
export const BOTTOM_LEFT = 'alignBottomLeft'

/**
	@memberof Align
	@const {string} BOTTOM_RIGHT
		Synonymous with "alignBottomRight" used for {@link UITextField.alignText} 
*/
export const BOTTOM_RIGHT = 'alignBottomRight'

/**
	@memberof Align
	@const {string} TOP_LEFT
		Synonymous with "alignTopLeft" used for {@link UITextField.alignText} 
*/
export const TOP_LEFT = 'alignTopLeft'

/**
	@memberof Align
	@const {string} TOP_RIGHT
		Synonymous with "alignTopRight" used for {@link UITextField.alignText} 
*/
export const TOP_RIGHT = 'alignTopRight'

/* ------------------------------------------------------------------------------------------------------------------------------- */
// PUBLIC METHODS

/**
		@memberof Align
		@method get
		@desc
			Calculates but does not apply the amount the source element will move horizontally and/or vertically, relative to its parent 
			according to provided mode. The constants allow for picking which coordinate to apply.  
	*/
export function get(source, arg) {
	var elem = source.canvas || Markup.get(source)
	var obj = {}
	var snap = arg.snap !== false
	var sourceRect = isDomElement(source) ? 0 : 1

	if (typeof arg == 'string') {
		arg = calculate(arg)
	}
	// check for top level against
	const topAgainst = arg.against
	if (arg.type) {
		const typeToObj = calculate(arg.type)
		for (let key in typeToObj) {
			if (!arg.hasOwnProperty(key)) {
				arg[key] = typeToObj[key]
			}
		}
	}

	for (let xy in arg) {
		if (xy == 'x' || xy == 'y') {
			let params = arg[xy]

			// the x or y is null or undefined, so skip this pass of the loop
			if (!params) continue

			if (typeof params == 'string') {
				params = {
					type: params
				}
			}

			let against
			let againstDimension
			let againstX = 0
			let againstNumber = false
			let offset = params.offset || arg.offset || 0

			// check the outer vs top
			params.outer = params.outer || arg.outer

			if (params.against !== undefined || topAgainst !== undefined) {
				// console.log('\t params.against:', params.against)
				against = params.against || topAgainst
				var againstRect = 0

				// console.log('\t against:', against)

				if (isDomElement(against)) {
					if (against.canvas) againstRect = 1
					else againstX = Styles.getCss(against, xy)
				} else if (typeof against === 'number') {
					againstNumber = true
					againstX = against
				} else {
					againstX = against[xy]
					againstRect = 1
				}

				againstDimension = _rect[againstRect][xy]

				if (params.type === CENTER) params.outer = false
			} else {
				against = elem[_rect[sourceRect].parent]
				againstDimension = _rect[sourceRect][xy]
			}

			var widthOrHeight = elem[_rect[sourceRect][xy]]

			switch (source._type) {
				case 'arc':
				case 'path':
					if (parrams.type == CENTER) {
						widthOrHeight = 0
					} else {
						offset += widthOrHeight / 2
					}
					break
				case 'text':
					if (xy === 'x') {
						switch (source.alignText) {
							case 'center':
								widthOrHeight = 0
							case 'right':
								widthOrHeight *= -1
						}
					}
					break
			}

			var pos = calculate(
				params.type,
				widthOrHeight,
				againstNumber ? 0 : against[againstDimension],
				!againstNumber && !!params.outer
			)

			if (pos != null) {
				pos += againstX + offset
				obj[xy] = snap ? Math.round(pos) : pos
			}
		}
	}

	return obj
}

/**
		@memberof Align
		@method set
		@desc
			Moves the source element horizontally and/or vertically, relative to its parent according to provided mode. The constants 
			allow for picking which coordinate to apply. Will additionally return the get() value. NOTE: If setting an array, there will NOT be a return
	*/
export function set(source, arg) {
	let _sources = Array.isArray(source) ? source : [source]
	let first
	for (let item of _sources) {
		var obj = get(item, arg)
		if (isDomElement(item)) {
			var elem = item.canvas || Markup.get(item)
			Styles.setCss(elem, obj)
		} else {
			for (var prop in obj) item[prop] = obj[prop]
		}
		if (first == undefined) {
			first = obj
		}
	}

	if (_sources.length == 1) return first
}

/* ------------------------------------------------------------------------------------------------------------------------------- */
// PRIVATE METHODS

// used internally by Flipbook
export function calculate(mode, source, target, outer) {
	//console.log( 'calculate()', mode, source, target, outer )
	// when only passing a string, this will create {x/y} from string
	var isConvert = arguments.length == 1
	switch (mode) {
		case 'alignBottom':
			if (outer) source = 0
			if (!isConvert) return target - source

		case 'alignTop':
			return isConvert ? { y: mode } : outer ? -source : 0

		case 'alignRight':
			if (outer) target += source
			if (!isConvert) return target - source

		case 'alignLeft':
			return isConvert ? { x: mode } : outer ? -source : 0

		case 'alignCenter':
			if (outer) target = 0
			return isConvert ? { x: mode, y: mode } : (target - source) / 2

		default:
			return null
	}
}

/* ------------------------------------------------------------------------------------------------------------------------------- */
// PRIVATE METHODS
function isDomElement(elem) {
	return elem instanceof HTMLElement || elem.canvas != undefined
}

/* ------------------------------------------------------------------------------------------------------------------------------- */
