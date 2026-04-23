const GifBlock = (function () {
  const gif = document.createElement("img");

  const reload = () => {
    fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=65FESTa9dwAbZhFGa4X5DHYBLi9c6xy3`,
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        gif.src = response.data.images.original.url;
      });
  };

  const search = (text) => {
    fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=65FESTa9dwAbZhFGa4X5DHYBLi9c6xy3&s=${text}`,
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        gif.src = response.data.images.original.url;
      });
  };

  reload();

  return {
    element: gif,
    reload,
    search,
  };
})();

export default GifBlock;
