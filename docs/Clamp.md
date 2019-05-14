<a name="Clamp"></a>

## Clamp
**Kind**: global class  
**Npmpackage**:   

* [Clamp](#Clamp)
    * [new Clamp()](#new_Clamp_new)
    * [.X](#Clamp.X) : <code>string</code>
    * [.Y](#Clamp.Y) : <code>string</code>
    * [.XY](#Clamp.XY) : <code>string</code>
    * [.set(source, type, buffer)](#Clamp.set)

<a name="new_Clamp_new"></a>

### new Clamp()
Import from <a href="https://github.com/ff0000-ad-tech/ad-view">ad-view</a>
<br>
<pre class="sunlight-highlight-javascript">
// importing into an ES6 class
import { Clamp } from 'ad-view'
</pre>
<br>
	Utility for resizing a DOM element to the size of all its content, sort of like shrink wrapping.
	<br>
	This will clamp the bounds and potentially move the x and y so that visually the content stays where it is. There is the option to clamp
	both horizontally and vertically, or you can just do one. Additionally there is a optional object to add some buffer space on any of the sides.

**Example**  
```js
// clamp both directions
Clamp.set( View.main.myDiv, Clamp.XY );

// clamp both directions while adding some buffer padding on each side
Clamp.set( View.main.myDiv, Clamp.XY, {
	top : 5,
	left : 10,
	bottom : 5,
	right : 10
});

// clamp only horizontally and add a buffer padding on the left
Clamp.set( View.main.myDiv, Clamp.X, {
	left : 10
});
```
<a name="Clamp.X"></a>

### Clamp.X : <code>string</code>
Synonymous with "clampX" - clamp on the horizontal direction only

**Kind**: static constant of [<code>Clamp</code>](#Clamp)  
<a name="Clamp.Y"></a>

### Clamp.Y : <code>string</code>
Synonymous with "clampY" - clamp on the vertical direction only

**Kind**: static constant of [<code>Clamp</code>](#Clamp)  
<a name="Clamp.XY"></a>

### Clamp.XY : <code>string</code>
Synonymous with "clampXY" - clamp on all sides

**Kind**: static constant of [<code>Clamp</code>](#Clamp)  
<a name="Clamp.set"></a>

### Clamp.set(source, type, buffer)
Resizes and moves the source element horizontally and/or vertically, relative to all its children.

**Kind**: static method of [<code>Clamp</code>](#Clamp)  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>element</code> | The DOM element to resize and move. |
| type | <code>string</code> | A String/Constant representing what directions to clamp on. |
| buffer | <code>object</code> | (optional) An Object that has the values to add buffer padding to each side. See properties for more info: |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| buffer.left | <code>number</code> | Amount of left padding |
| buffer.right | <code>number</code> | Amount of right padding |
| buffer.top | <code>number</code> | Amount of top padding |
| buffer.bottom | <code>number</code> | Amount of bottom padding |

