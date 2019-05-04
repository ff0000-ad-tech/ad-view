import * as Markup from './Markup'
import { CssManager } from 'ad-control'
import { Matrix2D, Matrix3D, cssToData } from 'ad-geom'

/**
 * @npmpackage
 * @class Styles
 * @desc
 * Utilities for CSS style related purposes. <br>
 * Import from <a href="https://github.com/ff0000-ad-tech/ad-view">ad-view</a>
 * <codeblock>
 * import { Styles } from 'ad-view'
 * </codeblock>
 */

/**
 * @memberof Styles
 * @method setCss
 * @param {string|element} _target
 * 	id or element to which the style(s) should be applied
 * @param {string|object|array} args
 * 	any type of CssDeclaration, an object of key-value pairs, a semicolon separated string of styles, or a separate( key, value )arguments
 * @desc
 * 	Sets specified styles on target object.
 * @example
 * // set multiple styles using a css-string
 * Styles.setCss(myDiv, 'top: 30px; left: 10px')
 * 
 * // set multiple styles using a css-object, same as the 'css' property on {@link UIComponent}s
 * Styles.setCss(myDiv, { top:30, left:10 })
 * 
 * // set a single style, using individual( key, value )args
 * Styles.setCss(myDiv, 'top', 30)
 */
export function setCss(element, args) {
	element = Markup.get(element)
	var cssList = {}
	if (arguments.length > 2) {
		for (var i = 1; i < arguments.length; i += 2) {
			cssList = CssManager.conformCssKeyValue(arguments[i], arguments[i + 1])
		}
	} else if (typeof arguments[1] == 'string') {
		cssList = CssManager.conformCssString(arguments[1], element)
	} else {
		cssList = CssManager.conformCssObject(arguments[1], element)
	}
	CssManager.apply(element, cssList)
}

/**
 * @memberof Styles
 * @method getCss
 * @param {string|element} _target
 * 	id or element to which css style should be applied
 * @param {string} key
 * 	css key
 * @desc
 * 	Gets a specific style for a particular key.
*/
export function getCss(element, key) {
	element = Markup.get(element)

	var cssValue
	if (key === 'x' || key === 'y') {
		const existingTransform = element.style[CssManager.getDeviceKey('transform')]
		let matrix = new Matrix2D()
		if (existingTransform) {
			const matrixArray = cssToData(existingTransform)
			// 2d matrix length = 6
			// 3d matrix length = 16
			// translate3d length = 3
			if (matrixArray.length !== 6) {
				matrix = new Matrix3D()
			}
			matrix.setFromArray(matrixArray)
		}
		cssValue = key === 'x' ? matrix.getX() : matrix.getY()
	} else {
		var style = window.getComputedStyle(element, null)
		cssValue = style.getPropertyValue(key).replace(/px/, '')
		if (!isNaN(cssValue)) cssValue = parseInt(cssValue, 10)
	}

	return cssValue
}

/**
 * @memberof Styles
 * @method injectStylesheet
 * @param {string} nodeId
 * 	the id of the &lt;style> node written to the &lt;head>
 * @param {string|object|array} styles
 * 	any type of CssDeclaration: an object of key-value pairs, a semicolon separated string of styles, or a separate( key, value )arguments
 * @desc
 * 	Creates a new CSS stylesheet node (class, tag, etc) DEFINITION out of the submitted styles. 
 * @example
 * // selector/CSS string pair
 * Styles.injectStylesheet('myFirstStyle', 
 * 	'.class-a', 'position:absolute; width:inherit;'
 * )
 * 
 * // selector/CSS string pair: add multiple class declarations to the same node
 * Styles.injectStylesheet('mySecondStyle', 
 * 	'.class-b', 'position:absolute;',
 * 	'.class-b-top', 'width:inherit; height:inherit;'
 * )
 * 
 * // selector/CSS string pair:  have mulitple classes share the same logic
 * Styles.injectStylesheet('myThirdStyle', 
 * 	'.class-c, .class-d', 'position:absolute;'
 * )
 * 
 * // selector/CSS string pair: add style to a tag name globally
 * Styles.injectStylesheet('myFourthStyle', 
 * 	'h1', 'position:absolute;'
 * )
 * 
 * // self-contained CSS string
 * var myCssString = '.myClass, h1 { color: blue; margin: 10px; }'
 * Styles.injectStylesheet('myFifthStyle', myCssString)
*/
export function injectStylesheet(nodeId, styles) {
	if (document.getElementById(nodeId)) {
		return
	}

	var style = document.createElement('style')
	style.type = 'text/css'
	style.id = nodeId

	// if only two parameters, assuming styles is CSS string
	// else process as selector/style pair
	var str = arguments.length === 2 ? styles : ''

	if (arguments.length > 2) {
		for (var i = 0; i < arguments.length - 1; i += 2) {
			// strip out the white space after comma
			var names = arguments[i + 1].replace(/\,\s+/g, ',')

			str += names
			str += ' { ' + (arguments[i + 2] || '') + ' }\n'
		}
	}
	style.innerHTML = str
	document.getElementsByTagName('head')[0].appendChild(style)
}

/**
 * @memberof Styles
 * @method addClass
 * @param {string|element} target
 * 	id or element to which css style should be added
 * @param {string} className
 * 	css class association to be added to this target
 * @desc
 * 	Add a CSS class ASSOCIATION to the targeted element.
 */
export function addClass(target, className) {
	var element = Markup.get(target)

	// IE does not support multiple classes being added as arguments, so must loop
	for (var i = 0; i < arguments.length - 1; i++) {
		element.classList.add(arguments[i + 1])
	}
}

/**
 * @memberof Styles
 * @method removeClass
 * @param {string|element} target
 * 	id or element from which css style should be removed
 * @param {string} className
 * 	css class association to be removed from this target
 * @desc
 * 	Removes a CSS class ASSOCIATION from the targeted element.
*/
export function removeClass(target, className) {
	var element = Markup.get(target)
	element.classList.remove(className)
}
