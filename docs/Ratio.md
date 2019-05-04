<a name="Ratio"></a>

## Ratio
**Kind**: global class  
**Npmpackage**:   

* [Ratio](#Ratio)
    * [new Ratio()](#new_Ratio_new)
    * [.EXACT](#Ratio.EXACT) : <code>string</code>
    * [.FILL](#Ratio.FILL) : <code>string</code>
    * [.FIT](#Ratio.FIT) : <code>string</code>
    * [.STRETCH](#Ratio.STRETCH) : <code>string</code>

<a name="new_Ratio_new"></a>

### new Ratio()
Utilities for different ratio layouts; used by [UIImage](UIImage) and deprecated Flipbook.<br>
Import from <a href="https://github.com/ff0000-ad-tech/ad-view">ad-view</a>
<pre class="sunlight-highlight-javascript">
import { Ratio } from 'ad-view'
</pre>

<a name="Ratio.EXACT"></a>

### Ratio.EXACT : <code>string</code>
'auto' ~ Images display at the exact height and width of the source

**Kind**: static constant of [<code>Ratio</code>](#Ratio)  
<a name="Ratio.FILL"></a>

### Ratio.FILL : <code>string</code>
'cover' ~ Scales the image to fill the target without distortion while maintaining aspect ratio, may cause a crop.

**Kind**: static constant of [<code>Ratio</code>](#Ratio)  
<a name="Ratio.FIT"></a>

### Ratio.FIT : <code>string</code>
'contain' ~ Scales to fit the full image without distortion while maintaining aspect ratio, may cause negative borders.

**Kind**: static constant of [<code>Ratio</code>](#Ratio)  
<a name="Ratio.STRETCH"></a>

### Ratio.STRETCH : <code>string</code>
'100% 100%' ~ Images stretches to fill the target, may cause aspect ratio distortion.

**Kind**: static constant of [<code>Ratio</code>](#Ratio)  
