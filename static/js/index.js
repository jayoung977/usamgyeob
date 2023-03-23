 window.onload = function() {
  const mapElement = document.getElementById("image-map");
  for (let i = 0; i < mapElement.areas.length; i++) {
    const areaElement = mapElement.areas[i];
    areaElement.addEventListener("mouseover", showArea);
  }
 };
