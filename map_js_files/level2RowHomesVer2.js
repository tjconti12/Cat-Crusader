(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("level2RowHomesVer2",
{ "compressionlevel":-1,
 "editorsettings":
    {
     "export":
        {
         "format":"js",
         "target":"level2RowHomesVer2.js"
        }
    },
 "height":14,
 "infinite":false,
 "layers":[
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 169, 170, 171, 12, 13, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 89, 90, 91, 180, 182, 181, 2, 17, 3, 12, 13, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 13, 14, 82, 158, 83, 196, 198, 197, 2, 33, 3, 6, 7, 8, 0, 0, 0, 0, 0, 0, 169, 170, 171, 0, 20, 22, 21, 100, 102, 101, 180, 182, 181, 20, 22, 21, 17, 1, 17, 13, 0, 0, 62, 62, 0, 162, 183, 163, 29, 36, 38, 37, 116, 118, 117, 196, 198, 197, 36, 38, 37, 33, 1, 33, 1, 0, 0, 78, 78, 71, 162, 199, 163, 45, 6, 7, 8, 86, 87, 88, 166, 167, 168, 6, 7, 8, 1, 23, 1, 1, 29, 0, 0, 0, 71, 46, 47, 48, 0, 2, 23, 3, 137, 138, 83, 162, 183, 163, 25, 26, 27, 1, 39, 1, 1, 45, 0, 0, 0, 0, 0, 0, 0, 0, 2, 39, 3, 153, 154, 83, 162, 199, 163, 41, 42, 43, 46, 47, 48, 0, 0, 79, 79, 0, 0, 0, 0, 0, 0, 46, 47, 47, 47, 47, 48, 46, 47, 48, 46, 47, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 62, 62, 62, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 78, 78, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
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
 "width":25
});