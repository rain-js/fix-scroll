# fix-scroll

> Vue directive to fix layer scroll

## Installation

``` bash
$ npm i fix-layer-scroll
```

## Usage

main.js 
``` bash
import fixScroll from 'fix-layer-scroll'

Vue.use(fixScroll)
```

template
``` bash
<div class="dialog-mask" v-if="visible" v-fixscroll>
  <div class="dialog-wrapper">
  </div>
</div>
```
