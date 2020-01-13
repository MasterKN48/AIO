/**Algo
 * 1-> Converting image to base 64.(In main file)
 * 2-> pass base64 to function.
 * 3-> create canvas with that base64 data uri.
 * 4-> keep mind with window.innerHieght and width
 * 5-> convert canvas to image by toDataUrl() function in js. (In main file)
 */

export const SvgToAllConvertor = dataURL => {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var image = new Image();
  image.onload = function() {
    var width = image.naturalWidth || image.width;
    var height = image.naturalHeight || image.height;
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    ctx.drawImage(image, 0, 0, width, height);
  };
  image.src = dataURL;
};
export const downloadFromSvg = (name, type, setSuccess) => {
  //file name as argument
  document.getElementById("downloader").download = name + "." + type;
  // converting data uri to blob aken form github gist
  let dataURI = document
    .getElementById("canvas")
    .toDataURL("image/" + type, 0.8);

  let byteString = atob(dataURI.split(",")[1]);

  // separate out the mime component
  let mimeString = dataURI
    .split(",")[0]
    .split(":")[1]
    .split(";")[0];

  // write the bytes of the string to an ArrayBuffer
  let arrayBuffer = new ArrayBuffer(byteString.length);
  let _ia = new Uint8Array(arrayBuffer);
  for (let i = 0; i < byteString.length; i++) {
    _ia[i] = byteString.charCodeAt(i);
  }

  let dataView = new DataView(arrayBuffer);
  let blob = new Blob([dataView], { type: mimeString });
  document.getElementById("downloader").href = URL.createObjectURL(blob);
  setSuccess(false);
};
