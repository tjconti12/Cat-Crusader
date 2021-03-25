(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("transitionScreen",
{ "compressionlevel":-1,
 "editorsettings":
    {
     "export":
        {
         "format":"js",
         "target":"transitionScreen.js"
        }
    },
 "height":7,
 "infinite":false,
 "layers":[
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 13, 14, 10, 169, 170, 171, 89, 90, 91, 12, 13, 14, 18, 19, 17, 0, 178, 179, 177, 97, 98, 99, 17, 18, 19, 34, 35, 33, 0, 194, 195, 193, 113, 114, 115, 33, 34, 35, 25, 26, 27, 29, 161, 183, 161, 81, 103, 81, 25, 26, 27, 41, 39, 43, 45, 161, 199, 161, 81, 119, 81, 41, 42, 43, 46, 47, 48, 79, 46, 47, 48, 46, 47, 48, 46, 47, 48],
         "height":7,
         "id":1,
         "name":"Tile Layer 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":13,
         "x":0,
         "y":0
        }],
 "nextlayerid":2,
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"2021.02.15",
 "tileheight":32,
 "tilesets":[
        {
         "firstgid":1,
         "source":"..\/..\/..\/rowHomes.tsx"
        }],
 "tilewidth":32,
 "type":"map",
 "version":1.5,
 "width":13
});