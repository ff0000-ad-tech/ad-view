<a name="Align"></a>

## Align
**Kind**: global class  
**Npmpackage**:   

* [Align](#Align)
    * [new Align()](#new_Align_new)
    * [.BOTTOM](#Align.BOTTOM) : <code>string</code>
    * [.CENTER](#Align.CENTER) : <code>string</code>
    * [.LEFT](#Align.LEFT) : <code>string</code>
    * [.RIGHT](#Align.RIGHT) : <code>string</code>
    * [.TOP](#Align.TOP) : <code>string</code>
    * [.BOTTOM_LEFT](#Align.BOTTOM_LEFT) : <code>string</code>
    * [.BOTTOM_RIGHT](#Align.BOTTOM_RIGHT) : <code>string</code>
    * [.TOP_LEFT](#Align.TOP_LEFT) : <code>string</code>
    * [.TOP_RIGHT](#Align.TOP_RIGHT) : <code>string</code>
    * [.get()](#Align.get)
    * [.set()](#Align.set)

<a name="new_Align_new"></a>

### new Align()
Import from <a href="https://github.com/ff0000-ad-tech/ad-view">ad-view</a>
<br>
<pre class="sunlight-highlight-javascript">
// importing into an ES6 class
import { Align } from 'ad-view'
</pre>
<br>
Utility for aligning objects, which works for DOM elements and [CanvasDrawer](CanvasDrawer) elements.  The x and y alignments are split up
into separate assignemnts in one call. There are extra parameters that can be passed into the object to handle more complex logic.
<br>
<b>Notes:</b>
<br>
Align, by default, snaps to a full pixel. To change this, see <b>Sample 3</b> ( snap: false )
<br>
<b>Sample 1</b>
<pre class="sunlight-highlight-javascript">
// simple classic usage
Align.set(myDiv, Align.LEFT)   // only align left
Align.set(myDiv, Align.BOTTOM) // only align bottom
Align.set(myDiv, Align.CENTER) // align both x and y to the center
</pre>
<br>
<b>Sample 2</b>
<pre class="sunlight-highlight-javascript">
// simply align the x and y seperately
Align.set(myDiv, {
	x: Align.RIGHT,
	y: Align.BOTTOM
})
</pre>
<br>
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
<img src="https://github.com/ff0000-ad-tech/ad-docs/blob/master/docs/docs_images/align/align_c.jpg" />
<br><br>
<pre class="sunlight-highlight-javascript">
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
</pre>
<br><br>

<b>Sample 4</b>
<pre class="sunlight-highlight-javascript">
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
</pre>
<br><br>

<b>Sample 5</b>
<br>
An Array of items can be passed in to the `source` argument. All items will be individually aligned following the rules passed into the `arg` argument
<br><br>
<pre class="sunlight-highlight-javascript">
// aligns all items to the center
Align.set([myDiv0, myDiv1, myDiv2], Align.CENTER)

// aligns all items to the horizontal center and bottom
Align.set([myDiv0, myDiv1, myDiv2], {
	x: Align.CENTER,
	y: Align.BOTTOM
})
</pre>
<br><br>

<b>Sample 6</b>
<br>
The optional keys: <b>'against'</b>, <b>'offset'</b>, and <b>'outer'</b> can be set at the top level to apply to <i>BOTH</i> dirctions as applicable.
However, if a key is set within <b>'x'</b> or <b>'y'</b>, that will take priority
<br><br>
<pre class="sunlight-highlight-javascript">
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
</pre>

<a name="Align.BOTTOM"></a>

### Align.BOTTOM : <code>string</code>
Synonymous with "alignBottom"

**Kind**: static constant of [<code>Align</code>](#Align)  
<a name="Align.CENTER"></a>

### Align.CENTER : <code>string</code>
Synonymous with "alignCenter"

**Kind**: static constant of [<code>Align</code>](#Align)  
<a name="Align.LEFT"></a>

### Align.LEFT : <code>string</code>
Synonymous with "alignLeft"

**Kind**: static constant of [<code>Align</code>](#Align)  
<a name="Align.RIGHT"></a>

### Align.RIGHT : <code>string</code>
Synonymous with "alignRight"

**Kind**: static constant of [<code>Align</code>](#Align)  
<a name="Align.TOP"></a>

### Align.TOP : <code>string</code>
Synonymous with "alignTop"

**Kind**: static constant of [<code>Align</code>](#Align)  
<a name="Align.BOTTOM_LEFT"></a>

### Align.BOTTOM\_LEFT : <code>string</code>
Synonymous with "alignBottomLeft", used for [UITextField.alignText](UITextField.alignText)

**Kind**: static constant of [<code>Align</code>](#Align)  
<a name="Align.BOTTOM_RIGHT"></a>

### Align.BOTTOM\_RIGHT : <code>string</code>
Synonymous with "alignBottomRight" used for [UITextField.alignText](UITextField.alignText)

**Kind**: static constant of [<code>Align</code>](#Align)  
<a name="Align.TOP_LEFT"></a>

### Align.TOP\_LEFT : <code>string</code>
Synonymous with "alignTopLeft" used for [UITextField.alignText](UITextField.alignText)

**Kind**: static constant of [<code>Align</code>](#Align)  
<a name="Align.TOP_RIGHT"></a>

### Align.TOP\_RIGHT : <code>string</code>
Synonymous with "alignTopRight" used for [UITextField.alignText](UITextField.alignText)

**Kind**: static constant of [<code>Align</code>](#Align)  
<a name="Align.get"></a>

### Align.get()
Calculates but does not apply the amount the source element will move horizontally and/or vertically, relative to its parent
	according to provided mode. The constants allow for picking which coordinate to apply.

**Kind**: static method of [<code>Align</code>](#Align)  
<a name="Align.set"></a>

### Align.set()
Moves the source element horizontally and/or vertically, relative to its parent according to provided mode. The constants
	allow for picking which coordinate to apply. Will additionally return the get() value. NOTE: If setting an array, there will NOT be a return

**Kind**: static method of [<code>Align</code>](#Align)  
