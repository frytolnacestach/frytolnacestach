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

## IMAGE


### Format
- WebP
- PNG
- JPG


### Sizes
_default(all sizes) = 130, 180, 220, 250, 280, 300, 340, 345, 360, 374, 380, 390, 400, 420, 540, 550, 575, 740, 767, 980, 991, 1139, 1219, 1399, 1920
main                = 130, 374, 575, 767, 991, 1139, 1219, 1399, 1920
articles            = 340, 374, 400, 540. 575, 767, 991, 1139, 1219, 1399, 1920
maps                = 300, 340, 420, 550, 740, 980
videos              = 340, 400, 540
world/continets     = 180, 220, 250, 280, 345, 360, 374, 380, 390, 540, 575, 767, 991, 1139, 1219, 1399, 1920
world/states        = 180, 220, 250, 280, 345, 360, 374, 380, 390, 540, 575, 767, 991, 1139, 1219, 1399, 1920
world/cities        = 180, 220, 250, 280, 345, 360, 374, 380, 390, 540, 575, 767, 991, 1139, 1219, 1399, 1920

#### o-video-list
Type:
- _default
- videos
Sizes:
0 -> 374   = 334px = (USE 340PX)
375 -> 439 = 399px = (USE 400PX)
440 -> 575 = 535px = (USE 540PX)
576 -> 767 = 356px = (USE 400PX)
768 -> 991 = 306px = (USE 340PX)
992 ->     = 386px = (USE 400PX)


#### o-cover-place
Type:
- _default
- world/continets
- world/states
- world/cities
Sizes:
0 -> 374   = 178px =   (USE 180PX)
375 -> 575 = 280px =   (USE 280PX)
576 -> 767 = 248px =   (USE 280PX)
768 -> 991 = 240px =   (USE 280PX)
991 -> 1400 = 272px =  (USE 280PX)
1400 -> 1920 = 377px = (USE 380PX)
1920 -> = 500px =      (USE 540PX)


#### o-cover-place-detail
Type:
- _default
- world/continets
- world/states
- world/cities
Sizes:
0 -> 374   = 248px    = (USE 250PX)
375 ->  575  = 216px  = (USE 220PX)
576 ->  767  = 200px  = (USE 220PX)
768 ->  991  = 204px  = (USE 220PX)
992 -> 1399  = 198px  = (USE 220PX)
1400 -> 1920  = 278px = (USE 280PX)
1921 ->               = (USE 360PX)


#### o-place-block
Type:
- _default
- world/continets
- world/states
- world/cities
Sizes:
0 -> 374   = 344px  = (USE 345PX)
375 ->     = 345px  = (USE 390PX)


#### o-article-list
Type:
- _default
- articles
Sizes:
0 -> 374   = 334px = (USE 340PX)
375 -> 439 = 399px = (USE 400PX)
440 -> 575 = 535px = (USE 540PX)
576 -> 767 = 356px = (USE 400PX)
768 -> 991 = 306px = (USE 340PX)
992 ->     = 386px = (USE 400PX)


#### o-sidebar-map-mapy
Type:
- _default
- maps
Sizes:
0 -> 374   = 344px = (USE 340PX)
375 -> 439 = 409px = (USE 420PX)
440 -> 575 = 545px = (USE 550PX)
576 -> 767 = 737px = (USE 740PX)
768 -> 991 = 961px = (USE 980PX)
992 ->     = 300px = (USE 300PX)


#### o-whoiam
Type:
- _default
- main
Sizes:
0 ->         = 130px =


#### o-hero-article
Type:
- _default
- articles
Sizes:
0 ->    374  = 374px = 
375 ->  575  = 575px = 
576 ->  767  = 767px = 
768 ->  991  = 991px = 
992 ->  1139 = 1139px = 
1140 -> 1219 = 1219px = 
1220 -> 1399 = 1399px =
1400 ->      = 1920px 


#### o-hero-big
Type:
- _default
- main
Sizes:
0 ->    374  = 374px = 
375 ->  575  = 575px = 
576 ->  767  = 767px = 
768 ->  991  = 991px = 
992 ->  1139 = 1139px = 
1140 -> 1219 = 1219px = 
1220 -> 1399 = 1399px =
1400 ->      = 1920px 


#### o-hero-place
Type:
- _default
- world/continets
- world/states
- world/cities
Sizes:
0 ->    374  = 374px = 
375 ->  575  = 575px = 
576 ->  767  = 767px = 
768 ->  991  = 991px = 
992 ->  1139 = 1139px = 
1140 -> 1219 = 1219px = 
1220 -> 1399 = 1399px =
1400 ->      = 1920px 


_____________________________________________________________________

## PLACES

###LEVELS
- Continents
    - State
        - City
            - Other place (FUTURE)