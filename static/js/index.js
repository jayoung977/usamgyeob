 window.onload = function() {
  const mapElement = document.getElementById("image-map");

  for (area )

 };
 
 // Body of the script
 for (i = 0; i < oMap.areas.length; i++) {
  var area = oMap.areas[i];

  area.dataset.idnx = i;
  area.onmouseover = MapshowHideDivs(i);
  area.onmouseout = hideDivs();
}
