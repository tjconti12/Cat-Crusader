(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("level1",
{ "compressionlevel":-1,
 "height":9,
 "infinite":false,
 "layers":[
        {
         "data":[12, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 0, 0, 0, 0, 7, 8, 2, 2, 13, 0, 0, 0, 0, 2, 3, 0, 16, 18, 22, 12, 13, 0, 0, 33, 0, 0, 0, 0, 21, 23, 0, 11, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 13, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 11, 13, 0, 11, 13, 0, 0, 7, 8, 2, 3, 0, 11, 12, 2, 12, 12, 2, 2, 17, 18, 12, 12, 2, 12],
         "height":9,
         "id":1,
         "name":"Tile Layer 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":12,
         "x":0,
         "y":0
        }],
 "nextlayerid":2,
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
 "width":12
});