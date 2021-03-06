(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("shipFinal",
{ "compressionlevel":-1,
 "editorsettings":
    {
     "export":
        {
         "format":"js",
         "target":"testShip.js"
        }
    },
 "height":14,
 "infinite":false,
 "layers":[
        {
         "data":[12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 14, 15, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 14, 15, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 14, 103, 12, 12, 12, 12, 12, 12, 12, 12, 13, 14, 15, 12, 12, 12, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 104, 104, 104, 104, 104, 104, 104, 104, 104, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175],
         "height":14,
         "id":1,
         "name":"Tile Layer 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":25,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 198, 199, 200, 201, 202, 0, 0, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 215, 216, 217, 0, 148, 149, 150, 0, 152, 153, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 230, 231, 232, 233, 234, 0, 165, 166, 167, 0, 169, 170, 167, 0, 0, 0, 0, 0, 0, 0, 0, 0, 57, 41, 42, 115, 113, 146, 115, 115, 115, 188, 146, 189, 0, 188, 146, 189, 0, 0, 0, 0, 0, 0, 0, 0, 161, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 163, 203, 204, 146, 205, 206, 0, 0, 0, 0, 0, 0, 0, 0, 162, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 162, 162, 132, 133, 134, 0, 0, 0, 0, 0, 0, 0, 162, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 162, 163, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 161, 162, 0, 0, 161, 162, 162, 162, 162, 162, 162, 162, 162, 0, 0, 0, 0, 0, 0, 219, 220, 221, 222, 0, 0, 0, 162, 162, 0, 0, 0, 0, 0, 147, 0, 0, 162, 163, 0, 0, 0, 0, 0, 0, 235, 236, 237, 238, 0, 0, 0, 162, 162, 162, 0, 0, 0, 0, 147, 0, 0, 118, 0, 0, 0, 0, 0, 0, 0, 251, 252, 253, 254, 255, 0, 0, 161, 162, 162, 162, 162, 162, 162, 162, 162, 162, 163, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":14,
         "id":4,
         "name":"foreground",
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
         "source":"..\/..\/..\/pirates.tsx"
        }, 
        {
         "firstgid":257,
         "source":"..\/..\/..\/rowHomes.tsx"
        }],
 "tilewidth":16,
 "type":"map",
 "version":1.5,
 "width":25
});