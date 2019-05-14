<a name="Styles"></a>

## Styles
**Kind**: global class  
**Npmpackage**:   

* [Styles](#Styles)
    * [new Styles()](#new_Styles_new)
    * [.setCss(_target, args)](#Styles.setCss)
    * [.getCss(_target, key)](#Styles.getCss)
    * [.injectStylesheet(nodeId, styles)](#Styles.injectStylesheet)
    * [.addClass(target, className)](#Styles.addClass)
    * [.removeClass(target, className)](#Styles.removeClass)

<a name="new_Styles_new"></a>

### new Styles()
Utilities for CSS style related purposes. <br>
Import from <a href="https://github.com/ff0000-ad-tech/ad-view">ad-view</a>
<pre class="sunlight-highlight-javascript">
import { Styles } from 'ad-view'
</pre>

<a name="Styles.setCss"></a>

### Styles.setCss(_target, args)
Sets specified styles on target object.

**Kind**: static method of [<code>Styles</code>](#Styles)  

| Param | Type | Description |
| --- | --- | --- |
| _target | <code>string</code> \| <code>element</code> | id or element to which the style(s) should be applied |
| args | <code>string</code> \| <code>object</code> \| <code>array</code> | any type of CssDeclaration, an object of key-value pairs, a semicolon separated string of styles, or a separate( key, value )arguments |

**Example**  
```js
// set multiple styles using a css-string
Styles.setCss(myDiv, 'top: 30px; left: 10px')

// set multiple styles using a css-object, same as the 'css' property on [UIComponent](UIComponent)s
Styles.setCss(myDiv, { top:30, left:10 })

// set a single style, using individual( key, value )args
Styles.setCss(myDiv, 'top', 30)
```
<a name="Styles.getCss"></a>

### Styles.getCss(_target, key)
Gets a specific style for a particular key.

**Kind**: static method of [<code>Styles</code>](#Styles)  

| Param | Type | Description |
| --- | --- | --- |
| _target | <code>string</code> \| <code>element</code> | id or element to which css style should be applied |
| key | <code>string</code> | css key |

<a name="Styles.injectStylesheet"></a>

### Styles.injectStylesheet(nodeId, styles)
Creates a new CSS stylesheet node (class, tag, etc) DEFINITION out of the submitted styles.

**Kind**: static method of [<code>Styles</code>](#Styles)  

| Param | Type | Description |
| --- | --- | --- |
| nodeId | <code>string</code> | the id of the &lt;style> node written to the &lt;head> |
| styles | <code>string</code> \| <code>object</code> \| <code>array</code> | any type of CssDeclaration: an object of key-value pairs, a semicolon separated string of styles, or a separate( key, value )arguments |

**Example**  
```js
// selector/CSS string pair
Styles.injectStylesheet('myFirstStyle',
	'.class-a', 'position:absolute; width:inherit;'
)

// selector/CSS string pair: add multiple class declarations to the same node
Styles.injectStylesheet('mySecondStyle',
	'.class-b', 'position:absolute;',
	'.class-b-top', 'width:inherit; height:inherit;'
)

// selector/CSS string pair:  have mulitple classes share the same logic
Styles.injectStylesheet('myThirdStyle',
	'.class-c, .class-d', 'position:absolute;'
)

// selector/CSS string pair: add style to a tag name globally
Styles.injectStylesheet('myFourthStyle',
	'h1', 'position:absolute;'
)

// self-contained CSS string
var myCssString = '.myClass, h1 { color: blue; margin: 10px; }'
Styles.injectStylesheet('myFifthStyle', myCssString)
```
<a name="Styles.addClass"></a>

### Styles.addClass(target, className)
Add a CSS class ASSOCIATION to the targeted element.

**Kind**: static method of [<code>Styles</code>](#Styles)  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>string</code> \| <code>element</code> | id or element to which css style should be added |
| className | <code>string</code> | css class association to be added to this target |

<a name="Styles.removeClass"></a>

### Styles.removeClass(target, className)
Removes a CSS class ASSOCIATION from the targeted element.

**Kind**: static method of [<code>Styles</code>](#Styles)  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>string</code> \| <code>element</code> | id or element from which css style should be removed |
| className | <code>string</code> | css class association to be removed from this target |

