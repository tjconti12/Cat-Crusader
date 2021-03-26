# Cat-Crusader
Fun nintendo style browser based game. The game is supported for web browsers only.

## Motivation
I was inspired to make a tile based game using vanilla javascript, html, and css. I wanted to create a fun and challenging game where the player has full control of the character. I wanted to test my modularity and organization by being able to reuse multiple sections of code.

## Build Status
The game is currently playable up to level 4. It also includes a tutorial level that is optional. There are a few bugs present with the collision mechanics where the player will randomly fall through a platform when jumping on it. Currently, if the game throws an error, the entire application freezes.

## Tech/framework used
Vanilla javascript, html, and sass for css.
Used an application called tiled for making the maps.

## Features
The game features a reusable tile map builder. You can get the map numbers from tiled when exporting as a js map file. Then just update the map array, the map column and row numbers, pixel size, and the tile atlas row numbers and column numbers. This allows the creation of multiple maps using multiple different tilesets.
The game also includes AI enemy characters that move on their own.

## Installation
No installation required if you visit the site on github pages. The game is fully playable in the web browser.

## Credits
- Spriteshift for Morning Adventures tileset
- Sharm, HughSpectrum and LPC for home objects tileset
- Guardian for Row House Tileset
- MamaNeZakon for Forest Tileset
- 0x72 for Pirates Tileset
- Shepardskin for Cat Sprites https://twitter.com/Shepardskin
- Shepardskin for Dog Sprites https://twitter.com/Shepardskin

## License
&copy; tjconti12


