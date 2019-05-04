<a name="Effects"></a>

## Effects
**Kind**: global class  
**Npmpackage**:   

* [Effects](#Effects)
    * [new Effects()](#new_Effects_new)
    * [.blur(obj)](#Effects.blur)
    * [.dropShadow(obj)](#Effects.dropShadow)
    * [.textDropShadow(obj)](#Effects.textDropShadow)
    * [.glow(obj)](#Effects.glow)
    * [.linearGradient(obj)](#Effects.linearGradient)
    * [.radialGradient(obj)](#Effects.radialGradient)

<a name="new_Effects_new"></a>

### new Effects()
Utilities for adding effects to elements<br>
	Import from <a href="https://github.com/ff0000-ad-tech/ad-view">ad-view</a>
	<pre class="sunlight-highlight-javascript">
import { Effects } from 'ad-view'
</pre>
	<br>

<a name="Effects.blur"></a>

### Effects.blur(obj)
Blurs a dom element.

**Kind**: static method of [<code>Effects</code>](#Effects)  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | object containing blur arguments, see Properties for more info: |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| obj.target | <code>element</code> | dom element |
| obj.amount | <code>number</code> | the level of blurriness |

**Example**  
```js
Effects.blur({
	target: _myDiv,
	amount: 10
})
```
<a name="Effects.dropShadow"></a>

### Effects.dropShadow(obj)
Adds a drop shadow to a dom element. Follows the same use specs as Photoshop.

**Kind**: static method of [<code>Effects</code>](#Effects)  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | object containing drop shadow arguments, see Properties for more info: |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| obj.target | <code>element</code> | dom element |
| obj.angle | <code>number</code> | optional NUMBER IN DEGREES for the angle at which the shadow will project. Defaults to 0. |
| obj.distance | <code>number</code> | optional NUMBER for how far away the shadow will offset. Defaults to 0. |
| obj.size | <code>number</code> | optional NUMBER for shadow radius. Defaults to 0. |
| obj.spread | <code>number</code> | optional NUMBER for how much extra the shadow will increase before it begins its gradient fade. Defaults to 0. |
| obj.color | <code>string</code> \| <code>object</code> | optional color of shadow as a HEX STRING :"#ff0000",  		RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)",  		or an RGB/A OBJECT:{r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. Defaults to "#000000". |
| obj.alpha | <code>number</code> | optional NUMBER of shadow opacity, if set will overwrite color.a. Defaults to 1. |
| obj.inner | <code>boolean</code> | optional BOOLEAN to set the shadow as inset. Defaults to false. |

**Example**  
```js
Effects.dropShadow({
	target:_myDiv,
	angle: 135,
	distance: 50,
	size: 20, 
	spread: 10,
	color: 'rgb(90, 0, 0)',
	alpha: 0.1,
	inner: true
})
```
<a name="Effects.textDropShadow"></a>

### Effects.textDropShadow(obj)
Adds a drop shadow to text within a dom element. Follows the same use specs as Photoshop.

**Kind**: static method of [<code>Effects</code>](#Effects)  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | object containing drop shadow arguments, see Properties for more info: |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| obj.target | <code>element</code> | dom element |
| obj.angle | <code>number</code> | optional NUMBER IN DEGREES for the angle at which the shadow will project. Defaults to 0. |
| obj.distance | <code>number</code> | optional NUMBER for how far away the shadow will offset. Defaults to 0. |
| obj.size | <code>number</code> | optional NUMBER for shadow radius. Defaults to 0. |
| obj.color | <code>string</code> \| <code>object</code> | optional color of shadow as a HEX STRING :"#ff0000",  		RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)",  		or an RGB/A OBJECT:{r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. Defaults to "#000000". |
| obj.alpha | <code>number</code> | optional NUMBER of shadow opacity, if set will overwrite color.a. Defaults to 1. |

**Example**  
```js
Effects.textDropShadow({
	target:_myText, 
	angle: 45, 
	distance: 15, 
	size: 1, 
	color: '#ff0000', 
	alpha: 0.5
})
```
<a name="Effects.glow"></a>

### Effects.glow(obj)
Adds a glow to a dom element. Follows the same use specs as Photoshop.

**Kind**: static method of [<code>Effects</code>](#Effects)  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | object containing glow arguments, see Properties for more info: |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| obj.target | <code>element</code> | dom element |
| obj.size | <code>number</code> | optional NUMBER for glow radius. Defaults to 0. |
| obj.spread | <code>number</code> | optional NUMBER for how much extra the glow will increase before it begins its gradient fade. Defaults to 0. |
| obj.color | <code>string</code> \| <code>object</code> | optional color of glow as a HEX STRING :"#ff0000",  		RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)",  		or an RGB/A OBJECT:{r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. Defaults to "#000000". |
| obj.alpha | <code>number</code> | optional NUMBER of glow opacity, if set will overwrite color.a. Defaults to 1. |
| obj.inner | <code>boolean</code> | optional BOOLEAN to set the glow as inset. Defaults to false. |

**Example**  
```js
Effects.glow({
	target: _myDiv,
	size: 20, 
	spread: 0,
	color: 'rgb(90, 0, 0)',
	alpha: 0.5,
	inner: true
})
```
<a name="Effects.linearGradient"></a>

### Effects.linearGradient(obj)
Changes the background of a given dom element to be a linear gradient.
<br><br>
<b>Example</b><br>
Adding a horizontal gradient from red, to blue, fading to a transparent yellow.
<pre class="sunlight-highlight-javascript">
Effects.linearGradient({
	target: _myDiv, 
	colors: ['red', 'blue', 'rgba(255, 255, 0, 0.5)'], 
	angle: 90
})
</pre>

**Kind**: static method of [<code>Effects</code>](#Effects)  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | object containing gradient arguments, see Properties for more info: |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| obj.target | <code>element</code> | dom element |
| obj.colors | <code>array</code> | ARRAY of colors as either a HEX STRING :"#ff0000" or an RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)". |
| obj.angle | <code>number</code> | NUMBER IN DEGREES of angle to draw linear-gradient at. Defaults to 0. |

<a name="Effects.radialGradient"></a>

### Effects.radialGradient(obj)
Changes the background of a given dom element to be a radial gradient.
<br><br>
<b>Example</b><br>
Adding a gradient from red to blue, with a very large choke on the blue.
<pre class="sunlight-highlight-javascript">
Effects.radialGradient({
	target: _myDiv, 
	colors: ['#ff0000', '#0000ff 10%']
});
</pre>

**Kind**: static method of [<code>Effects</code>](#Effects)  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | object containing gradient arguments, see Properties for more info: |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| obj.target | <code>element</code> | dom element |
| obj.colors | <code>array</code> | ARRAY of colors as either a HEX STRING :"#ff0000"  		or an RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)".  		<br><br> 		To add stops, append a % value to the color string: ["#ff0000 50%, "#00ff00 90%"]. |
| obj.angle | <code>number</code> | NUMBER IN DEGREES of angle to draw linear-gradient at. Defaults to 0. |

