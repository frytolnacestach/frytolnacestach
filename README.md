# frytolnacestach

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).


_____________________________________________________________________

## PROBS

### Skeleton
#### skeleton
Slouží jako určení jestli se má vykreslit skeleton šablona
```bash
skeleton: {
    type: Boolean,
    required: false
}
```

#### skeletonThema
Určuje barevnou variantu skeletonu
```bash
skeletonThema: {
    type: String,
    required: false
}
```

#### skeletonNumber
Určuje počet prvků skeletonu
```bash
skeletonNumber: {
    type: Number,
    required: false
}
```

### Style
// TODO

### Data
// TODO

_____________________________________________________________________

## IMAGE

### Format
- WebP

### Breakpoints
- 0 -> 349     
- 350 -> 374   
- 375 -> 399   
- 400 -> 459   
- 460 -> 575   
- 576 -> 767   
- 768 -> 991    OR 768 -> 1019
- 992 -> 1219   OR 1020 -> 1219
- 1220 -> 1399 
- 1400+        

### Sizes - For folders

#### _default(all sizes)
##### Horizontal
100, 108, 126, 172, 192, 220, 258, 286, 310, 312, 320, 330, 334, 340, 344, 360, 370, 380, 384, 420, 430, 440, 442, 468, 536, 546, 614, 620, 728, 738, 780, 900, 952, 962, 980, 1180, 1248, 1360, 1880
##### Vertical
226, 264, 314, 332, 354, 380, 424
##### Square
40, 50, 70, 166, 172, 186, 210, 224, 230, 240, 256, 274, 306, 320, 344, 360, 370, 430, 556, 738, 962

#### articles
##### Horizontal
320, 340, 360, 384, 420, 442, 536, 620, 728, 980, 1180, 1360, 1880
##### Vertical
null
##### Square
null

#### brands
##### Horizontal
330, 360, 420, 536, 728, 780, 900, 952, 1248
##### Vertical
null
##### Square
172, 186, 210, 224, 240, 274, 306, 360

#### events
##### Horizontal
100, 330, 360, 420, 536, 728, 780, 900, 952, 1248
##### Vertical
null
##### Square
172, 186, 210, 224, 240, 274, 306, 360

#### fauna
##### Horizontal
330, 360, 420, 536, 728, 780, 900, 952, 1248
##### Vertical
null
##### Square
172, 186, 210, 224, 240, 274, 306, 360

#### flora
##### Horizontal
330, 360, 420, 536, 728, 780, 900, 952, 1248
##### Vertical
null
##### Square
172, 186, 210, 224, 240, 274, 306, 360

#### foods
##### Horizontal
330, 360, 420, 536, 728, 780, 900, 952, 1248
##### Vertical
null
##### Square
172, 186, 210, 224, 240, 274, 306, 360

#### chains
##### Horizontal
330, 360, 420, 536, 728, 780, 900, 952, 1248
##### Vertical
null
##### Square
172, 186, 210, 224, 240, 274, 306, 360

#### gallery
##### Horizontal
null
##### Vertical
null
##### Square
null

#### main
##### Horizontal
310, 334, 360, 420, 536, 728, 952, 1180, 1360, 1880
##### Vertical
null
##### Square
320, 344, 370, 430, 556, 738, 962

#### maps
##### Horizontal
320, 344, 370, 430, 546, 738, 962
##### Vertical
null
##### Square
null

#### og
##### Horizontal
null
##### Vertical
null
##### Square
null

#### travel_dictionaries
##### Horizontal
330, 360, 420, 536, 728, 780, 900, 952, 1248
##### Vertical
null
##### Square
172, 186, 210, 224, 240, 274, 306, 360

#### users
##### Horizontal
null
##### Vertical
null
##### Square
186, 230, 256, 274, 360

#### videos
##### Horizontal
320, 340, 360, 384, 420, 442, 536, 620, 728, 980, 1180, 1360, 1880
##### Vertical
null
##### Square
null

#### wall_sockets
##### Horizontal
330, 360, 420, 536, 728, 780, 900, 952, 1248
##### Vertical
null
##### Square
172, 186, 210, 224, 240, 274, 306, 360

#### world/cities
##### Horizontal
108, 126, 172, 192, 220, 258, 286, 312, 334, 360, 380, 420, 440, 468, 536, 614, 728, 780, 900, 952, 1248
##### Vertical 
226, 264, 314, 332, 354, 380, 424
##### Square
40, 50, 70, 166, 186, 210, 224, 240, 256, 274, 306, 360

#### world/continets
##### Horizontal
108, 126, 172, 192, 220, 258, 286, 312, 334, 360, 380, 420, 440, 468, 536, 614, 728, 780, 900, 952, 1248
##### Vertical 
226, 264, 314, 332, 354, 380, 424
##### Square
40, 50, 70, 166, 186, 210, 224, 240, 256, 274, 306, 360

#### world/regions
##### Horizontal
108, 126, 172, 192, 220, 258, 286, 312, 334, 360, 380, 420, 440, 468, 536, 614, 728, 780, 900, 952, 1248
##### Vertical 
226, 264, 314, 332, 354, 380, 424
##### Square
40, 50, 70, 166, 186, 210, 224, 240, 256, 274, 306, 360

#### world/spots
##### Horizontal
108, 126, 172, 192, 220, 258, 286, 312, 334, 360, 380, 420, 440, 468, 536, 614, 728, 780, 900, 952, 1248
##### Vertical 
226, 264, 314, 332, 354, 380, 424
##### Square
40, 50, 70, 166, 186, 210, 224, 240, 256, 274, 306, 360

#### world/states
##### Horizontal
108, 126, 172, 192, 220, 258, 286, 312, 334, 360, 380, 420, 440, 468, 536, 614, 728, 780, 900, 952, 1248
##### Vertical 
226, 264, 314, 332, 354, 380, 424
##### Square
40, 50, 70, 166, 186, 210, 224, 240, 256, 274, 306, 360
________________________________________

### Sizes - For components

#### o-video-list (WARNING - SHOW WIDTH and Breakpoints)
##### Type:
- _default
- videos
#### Sizes (horizontal):
|Breakpoint    |width  |width img  |show width
- 0 -> 349      = 310
- 350 -> 374    = 334
- 375 -> 399    = 360
- 400 -> 459    = 420
- 460 -> 575    = 536
- 576 -> 767    = 356
- 768 -> 1019   = 316
- 1020 -> 1219  = 384
- 1220 -> 1399  = 442
- 1400+         = 620

#### o-article-list (WARNING - SHOW WIDTH and Breakpoints)
##### Type:
- _default
- articles
#### Sizes (horizontal):
|Breakpoint    |width  |width img  |show width
- 0 -> 349      = 310
- 350 -> 374    = 334
- 375 -> 399    = 360
- 400 -> 459    = 420
- 460 -> 575    = 536
- 576 -> 767    = 356
- 768 -> 1019   = 316
- 1020 -> 1219  = 384
- 1220 -> 1399  = 442
- 1400+         = 620

#### o-hero-video (WARNING - SHOW WIDTH and Breakpoints)
##### Type:
- _default
- videos
#### Sizes (horizontal):
|Breakpoint    |width  |width img  |show width
- 0 -> 349      = 310   = 320       = 320w
- 350 -> 374    = 334   = 340       = 340w
- 375 -> 399    = 360   = 360       = 360w
- 400 -> 459    = 420   = 420       = 420w
- 460 -> 575    = 536   = 536       = 536w
- 576 -> 767    = 728   = 728       = 728w
- 768 -> 1019   = 980   = 980       = 980w
- 1020 -> 1219  = 1180  = 1180      = 1180w
- 1220 -> 1399  = 1360  = 1360      = 1360w
- 1400+         = 1880  = 1880      = 1880w


#### o-hero-article (WARNING - SHOW WIDTH and Breakpoints)
##### Type:
- _default
- articles
#### Sizes (horizontal):
|Breakpoint    |width  |width img  |show width
- 0 -> 349      = 310   = 320       = 320w
- 350 -> 374    = 334   = 340       = 340w
- 375 -> 399    = 360   = 360       = 360w
- 400 -> 459    = 420   = 420       = 420w
- 460 -> 575    = 536   = 536       = 536w
- 576 -> 767    = 728   = 728       = 728w
- 768 -> 1019   = 980   = 980       = 980w
- 1020 -> 1219  = 1180  = 1180      = 1180w
- 1220 -> 1399  = 1360  = 1360      = 1360w
- 1400+         = 1880  = 1880      = 1880w


#### (DONE) | o-sidebar-map-mapy
##### Type:
- _default
- maps
#### Sizes (horizontal):
|Breakpoint    |width  |width img  |show width
- 0+            = 320   = 320       = 320w

#### (DONE) | o-map-mapy
##### Type:
- _default
- maps
#### Sizes (horizontal):
|Breakpoint    |width  |width img  |show width
- 0 -> 349      = 320   = 320       = 320w
- 350 -> 374    = 344   = 344       = 344w
- 375 -> 399    = 370   = 370       = 370w
- 400 -> 459    = 430   = 430       = 430w
- 460 -> 575    = 546   = 546       = 546w
- 576 -> 767    = 738   = 738       = 738w
- 768+          = 962   = 962       = 962w

#### (DONE) | o-place-block
##### Type:
- _default
- world/cities
- world/continets
- world/regions
- world/spots
- world/states
#### Sizes (horizontal):
|Breakpoint    |width  |width img  |show width
- 0 -> 349      = 310   = 312       = 310w
- 350 -> 374    = 334   = 334       = 334w
- 375 -> 399    = 360   = 360       = 360w
- 400 -> 459    = 420   = 420       = 420w
- 460 -> 575    = 536   = 536       = 536w
- 576 -> 767    = 728   = 728       = 728w
- 768 -> 991    = 304   = 312       = 304w
- 992 -> 1219   = 380   = 380       = 380w
- 1220 -> 1399  = 440   = 440       = 440w
- 1400+         = 614   = 614       = 614w

#### (DONE) | o-hero-big
##### Type:
- _default
- main
#### Sizes (horizontal):
|Breakpoint    |width  |width img  |show width
- 0 -> 349      = 310   = 310       = 310w
- 350 -> 374    = 334   = 334       = 334w
- 375 -> 399    = 360   = 360       = 360w
- 400 -> 459    = 420   = 420       = 420w
- 460 -> 575    = 536   = 536       = 536w
- 576 -> 767    = 728   = 728       = 728w
- 768 -> 991    = 952   = 952       = 952w
- 992 -> 1219   = 1180  = 1180      = 1180w
- 1220 -> 1399  = 1360  = 1360      = 1360w
- 1400+         = 1880  = 1880      = 1880w

#### (DONE) | o-hero-place
##### Type:
- _default
- world/cities
- world/continets
- world/regions
- world/spots
- world/states
#### Sizes (horizontal):
|Breakpoint    |width  |width img  |show width
- 0 -> 349     = 330    = 334       = 330w
- 350 -> 374   = 354    = 360       = 354w
- 375 -> 399   = 360    = 360       = 360w
- 400 -> 459   = 420    = 420       = 420w
- 460 -> 575   = 536    = 536       = 536w
- 576 -> 767   = 728    = 728       = 728w
- 768 -> 991   = 952    = 952       = 952w
- 992 -> 1219  = 780    = 780       = 780w
- 1220 -> 1399 = 900    = 900       = 900w
- 1400+        = 1248   = 1248      = 1248w

#### (DONE) | o-hero-item-detail
##### Type:
- _default
- brands
- events
- fauna
- flora
- foods
- travel_dictionaries
#### Sizes (horizontal):
|Breakpoint    |width  |width img  |show width
- 0 -> 349      = 330   = 334       = 330w
- 350 -> 374    = 354   = 360       = 354w
- 375 -> 399    = 360   = 360       = 360w
- 400 -> 459    = 420   = 420       = 420w
- 460 -> 575    = 536   = 536       = 536w
- 576 -> 767    = 728   = 728       = 728w
- 768 -> 991    = 952   = 952       = 952w
- 992 -> 1219   = 780   = 780       = 780w
- 1220 -> 1399  = 900   = 900       = 900w
- 1400+         = 1248  = 1248      = 1248w

#### (DONE) | o-place-teaser
##### Type:
- _default
- world/cities
- world/continets
- world/regions
- world/spots
- world/states
#### Sizes (horizontal):
|Breakpoint    |width  |width img  |show width
- 0 -> 349      = 330   = 334       = 330w
- 350 -> 374    = 354   = 360       = 354w
- 375 -> 399    = 360   = 360       = 360w
- 400 -> 459    = 420   = 420       = 420w
- 460 -> 575    = 536   = 536       = 536w
- 576 -> 767    = 728   = 728       = 728w
- 768 -> 991    = 286   = 286       = 286w
- 992 -> 1219   = 258   = 258       = 258w
- 1220 -> 1399  = 312   = 312       = 312w
- 1400+         = 468   = 468       = 468w

#### (DONE) | o-place-teaser-spots
##### Type:
- _default
- world/spots
#### Sizes (horizontal):
|Breakpoint    |width  |width img  |show width
- 0 -> 349     = 100    = 108       = 100w
- 350 -> 374   = 108    = 108       = 108w
- 375 -> 399   = 108    = 108       = 108w
- 400 -> 459   = 126    = 126       = 126w
- 460 -> 575   = 162    = 172       = 162w
- 576 -> 767   = 220    = 220       = 220w
- 768 -> 991   = 192    = 192       = 192w
- 992 -> 1219  = 172    = 172       = 172w
- 1220 -> 1399 = 208    = 220       = 208w
- 1400+        = 312    = 312       = 312w

#### (DONE) | o-place-teaser-regions
##### Type:
- _default
- world/regions
#### Sizes (horizontal):
|Breakpoint    |width  |width img  |show width
- 0 -> 349     = 100    = 108       = 100w
- 350 -> 374   = 108    = 108       = 108w
- 375 -> 399   = 108    = 108       = 108w
- 400 -> 459   = 126    = 126       = 126w
- 460 -> 575   = 162    = 172       = 162w
- 576 -> 767   = 220    = 220       = 220w
- 768 -> 991   = 192    = 192       = 192w
- 992 -> 1219  = 172    = 172       = 172w
- 1220 -> 1399 = 208    = 220       = 208w
- 1400+        = 312    = 312       = 312w

#### (DONE) | o-place-teaser-cities
##### Type:
- _default
- world/cities
#### Sizes (horizontal):
|Breakpoint    |width  |width img  |show width
- 0 -> 349     = 100    = 108       = 100w
- 350 -> 374   = 108    = 108       = 108w
- 375 -> 399   = 108    = 108       = 108w
- 400 -> 459   = 126    = 126       = 126w
- 460 -> 575   = 162    = 172       = 162w
- 576 -> 767   = 220    = 220       = 220w
- 768 -> 991   = 192    = 192       = 192w
- 992 -> 1219  = 172    = 172       = 172w
- 1220 -> 1399 = 208    = 220       = 208w
- 1400+        = 312    = 312       = 312w

#### (DONE) | o-cover-neighboring
##### Type:
- _default
- world/states
#### Sizes (square):
|Breakpoint    |height |height img |show width
- 0 -> 349      = 160   = 166       = 160w       
- 350 -> 374    = 172   = 186       = 172w
- 375 -> 399    = 180   = 186       = 180w
- 400 -> 459    = 210   = 210       = 210w
- 460 -> 575    = 268   = 274       = 274w
- 576 -> 767    = 240   = 240       = 240w
- 768 -> 991    = 234   = 240       = 234w
- 992 -> 1219   = 166   = 186       = 166w
- 1220 -> 1399  = 202   = 210       = 202w
- 1400+         = 306   = 306       = 306w

#### (DONE) | o-cover-item-state
##### Type:
- _default
- brands
- events
- fauna
- flora
- foods
- travel_dictionaries
#### Sizes (square):
|Breakpoint    |height |height img |show width
- 0 -> 349      = 160   = 166       = 160w     
- 350 -> 374    = 172   = 186       = 172w
- 375 -> 399    = 180   = 186       = 180w
- 400 -> 459    = 210   = 210       = 210w
- 460 -> 575    = 268   = 274       = 274w
- 576 -> 767    = 240   = 240       = 240w
- 768 -> 991    = 234   = 240       = 234w
- 992 -> 1219   = 166   = 186       = 166w
- 1220 -> 1399  = 202   = 210       = 202w
- 1400+         = 306   = 306       = 306w

#### (DONE) | o-cover-place-detail
##### Type:
- _default
- world/cities
- world/states
#### Sizes (vertical):
|Breakpoint    |height |height img | show width
- 0 -> 349      = 354   = 354       = 230w
- 350 -> 374    = 380   = 380       = 248w
- 375 -> 399    = 226   = 226       = 146w
- 400 -> 459    = 262   = 264       = 170w
- 460 -> 575    = 332   = 332       = 216w
- 576 -> 767    = 310   = 314       = 310w
- 768 -> 991    = 314   = 314       = 206w
- 992 -> 1219   = 264   = 264       = 172w
- 1220 -> 1399  = 306   = 314       = 200w
- 1400+         = 424   = 424       = 278w

#### (DONE) | o-cover-place-visited
##### Type:
- _default
- world/cities
- world/continets
- world/regions
- world/spots
- world/states
#### Sizes (square):
|Breakpoint    |height |height img |show width
- 0 -> 349      = 160   = 166       = 160w
- 350 -> 374    = 172   = 186       = 172w
- 375 -> 399    = 176   = 186       = 176w
- 400 -> 459    = 206   = 210       = 206w
- 460 -> 575    = 264   = 274       = 264w
- 576 -> 767    = 236   = 240       = 236w
- 768 -> 991    = 232   = 240       = 232w
- 992 -> 1219   = 164   = 166       = 164w
- 1220 -> 1399  = 200   = 210       = 200w
- 1400+         = 304   = 306       = 304w

#### (DONE) | o-sidebar-list (WARNING - add 100)
##### Type:
- _default
- events
#### Sizes (horizontal):
|Breakpoint    |width  |width img  |show width
- 0+            = 100   = 100       = 100w

#### (DONE) | o-whoiam
##### Type:
- _default
- main
#### Sizes (square):
|Breakpoint    |height |height img |show width
- 0 -> 349      = 320   = 320       = 320
- 350 -> 374    = 344   = 344       = 344
- 375 -> 399    = 370   = 370       = 370
- 400 -> 459    = 430   = 430       = 430
- 460 -> 575    = 546   = 556       = 546
- 576 -> 767    = 738   = 738       = 738
- 768 -> 991    = 962   = 962       = 962
- 992+          = 320   = 320       = 320

#### (DONE) | o-top-place
##### Type:
- _default
- world/cities
- world/continets
- world/regions
- world/spots
- world/states
#### Sizes (square):
|Breakpoint    |height |height img |show width
- 0 -> 349      = 160   = 166       = 160
- 350 -> 374    = 172   = 186       = 172
- 375 -> 399    = 186   = 186       = 186
- 400 -> 459    = 216   = 224       = 216
- 460 -> 575    = 274   = 274       = 274
- 576 -> 767    = 230   = 240       = 230
- 768 -> 991    = 224   = 224       = 224
- 992 -> 1219   = 220   = 224       = 220
- 1220 -> 1399  = 256   = 256       = 256
- 1400+         = 360   = 360       = 360

#### (DONE) | #### o-cover-place
##### Type:
- _default
- world/cities
- world/continets
- world/regions
- world/spots
- world/states
#### Sizes (square):
|Breakpoint    |height |height img |show width
- 0 -> 349      = 160   = 166       = 160
- 350 -> 374    = 172   = 186       = 172
- 375 -> 399    = 186   = 186       = 186
- 400 -> 459    = 216   = 224       = 216
- 460 -> 575    = 274   = 274       = 274
- 576 -> 767    = 230   = 240       = 230
- 768 -> 991    = 224   = 224       = 224
- 992 -> 1219   = 220   = 224       = 220
- 1220 -> 1399  = 256   = 256       = 256
- 1400+         = 360   = 360       = 360

#### (DONE) | o-cover-item
##### Type:
- _default
- brands
- events
- fauna
- flora
- foods
- travel_dictionaries
#### Sizes (square):
|Breakpoint    |height |height img |show width
- 0 -> 349      = 160   = 172       = 160
- 350 -> 374    = 172   = 172       = 172
- 375 -> 399    = 186   = 186       = 186
- 400 -> 459    = 216   = 224       = 216
- 460 -> 575    = 274   = 274       = 274
- 576 -> 767    = 230   = 240       = 230
- 768 -> 991    = 224   = 224       = 224
- 992 -> 1219   = 220   = 224       = 220
- 1220 -> 1399  = 256   = 274       = 256
- 1400+         = 360   = 360       = 360

#### (DONE) | o-user-list
##### Type:
- _default
- users
#### Sizes (square):
|Breakpoint    |height |height img |show width
- 0 -> 349      = 160   = 186       = 160
- 350 -> 374    = 172   = 186       = 172
- 375 -> 399    = 186   = 186       = 186
- 400 -> 459    = 216   = 230       = 216
- 460 -> 575    = 274   = 274       = 274
- 576 -> 767    = 230   = 230       = 230
- 768 -> 991    = 224   = 230       = 224
- 992 -> 1219   = 220   = 230       = 220
- 1220 -> 1399  = 256   = 256       = 256
- 1400+         = 360   = 360       = 360

#### (DONE) | o-review-item-list-account
##### Type:
- _default
- world/cities
- world/continets
- world/regions
- world/spots
- world/states
#### Sizes (square):
|Breakpoint    |height |height img |show width
- 0 -> 374      = 40    = 40        = 40w
- 375 -> 575    = 50    = 50        = 50w
- 576+          = 70    = 70        = 70w

#### (DONE) | o-review-item-list-user
##### Type:
- _default
- world/cities
- world/continets
- world/regions
- world/spots
- world/states
#### Sizes (square):
|Breakpoint    |height |height img |show width
- 0 -> 374      = 40    = 40        = 40w
- 375 -> 575    = 50    = 50        = 50w
- 576+          = 70    = 70        = 70w

----------------------------------------

## TODO:
### Images
- o-article-list -latest (aktuálně vychází z klasikcého o-article-list)
- o-video-list -latest (aktuálně vychází z klasikcého o-video-list)
- o-review-item-list (stejné jako o-review-item-list-account)
- m-user-header
- m-account-header

### Props
- Probs pro style
- Probs pro data