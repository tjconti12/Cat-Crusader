(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("level1bigger",
{ "compressionlevel":-1,
 "editorsettings":
    {
     "export":
        {
         "format":"js",
         "target":"level1bigger.js"
        }
    },
 "height":14,
 "infinite":false,
 "layers":[
        {
         "data":[12, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 2, 2, 2, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 17, 18, 18, 18, 18, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 1, 3, 0, 2, 2, 12, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 2, 2, 3, 0, 0, 11, 2, 2, 2, 12, 13, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 31, 32, 0, 21, 22, 23, 0, 0, 21, 22, 22, 22, 22, 23, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 1, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 1, 3, 0, 0, 11, 12, 13, 0, 32, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 3, 0, 21, 23, 0, 0, 11, 12, 13, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 13, 0, 0, 0, 0, 0, 11, 12, 13, 0, 0, 0, 0, 0, 0, 0, 7, 8, 2, 3, 0, 0, 0, 12, 12, 12, 2, 2, 2, 2, 2, 12, 12, 13, 56, 56, 1, 2, 2, 2, 2, 17, 12, 12, 12, 2, 2, 2, 12],
         "height":14,
         "id":1,
         "name":"Tile Layer 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":25,
         "x":0,
         "y":0
        }],
 "nextlayerid":5,
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"2021.02.15",
 "tileheight":16,
 "tilesets":[
        {
         "firstgid":1,
         "source":"..\/..\/..\/hopefullyworks.tsx"
        }],
 "tilewidth":16,
 "type":"map",
 "version":1.5,
 "width":25
});