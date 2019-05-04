<a name="Markup"></a>

## Markup
**Kind**: global class  
**Npmpackage**:   

* [Markup](#Markup)
    * [new Markup()](#new_Markup_new)
    * [.get(selector, parent)](#Markup.get) ⇒ <code>element</code> \| <code>HTMLCollection</code>
    * [.removeChildren(_target)](#Markup.removeChildren)
    * [.applyToElements(arg)](#Markup.applyToElements)

<a name="new_Markup_new"></a>

### new Markup()
This object contains utilities relateed to dom elements.<br>
Import from <a href="https://github.com/ff0000-ad-tech/ad-view">ad-view</a>
<pre class="sunlight-highlight-javascript">
import { Markup } from 'ad-view'
</pre>

<a name="Markup.get"></a>

### Markup.get(selector, parent) ⇒ <code>element</code> \| <code>HTMLCollection</code>
Used to select elements.

**Kind**: static method of [<code>Markup</code>](#Markup)  
**Returns**: <code>element</code> \| <code>HTMLCollection</code> - One single element if the selector is an id. With class name or tag name, it returns an HTML collection ( similiar to an array ).  

| Param | Type | Description |
| --- | --- | --- |
| selector | <code>string</code> | A string selector. It defaults to find the string as an id, or if the string starts with '#'.  	If starts with '.', it selects by class name. If wrapped with '<>', it selects by tag name. |
| parent | <code>element</code> | Optional parent element to get the element(s) from. Defaults to document. |

**Example**  
```js
// get element by its id called 'myId'
Markup.get('myId')

// same as above
Markup.get('#myId')

// get element by CSS classname 'myClass'
Markup.get('.myClass')

// get elements by tag name 'head'
Markup.get('<head>')
```
<a name="Markup.removeChildren"></a>

### Markup.removeChildren(_target)
Removes all the children elements of an element

**Kind**: static method of [<code>Markup</code>](#Markup)  

| Param | Type | Description |
| --- | --- | --- |
| _target | <code>element</code> | element to be targeted |

<a name="Markup.applyToElements"></a>

### Markup.applyToElements(arg)
Apply a method to multiple elements. Currently assuming the method accepts element as the first argument,
	and a second argument as the setting.

**Kind**: static method of [<code>Markup</code>](#Markup)  

| Param | Type | Description |
| --- | --- | --- |
| arg | <code>object</code> | See properties for more info: |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| arg.scope | <code>object</code> | the scope of this |
| arg.method | <code>function</code> | the function to use |
| arg.element | <code>element</code> \| <code>array</code> | the element(s) to apply the method to, can be a single element or an array |
| arg.methodArg | <code>string</code> \| <code>number</code> \| <code>array</code> \| <code>object</code> | the argument to pass to the method function |

**Example**  
```js
var myElements = Markup.get( '.centered-blocks' );
Markup.applyToElements({
	scope: Align,
	method: Align.set,
	elements: myElements,
	methodArg: { x: Align.CENTER }
})
```
