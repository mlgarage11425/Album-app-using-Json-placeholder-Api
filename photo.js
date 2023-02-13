const urlParams = new URLSearchParams(window.location.search);


const userId = urlParams.get('userId');



//console.log(userId)

let data = "";
fetch(`https://jsonplaceholder.typicode.com/photos?userId=${userId}`)
.then((data) => {
  //console.log("hi all",data);
  return data.json();
  
})
.then((complete) => {
  let filteredAlbums = complete.filter(album => album.albumId == userId);
  //console.log("bro",complete);
  filteredAlbums.map((values) => {
    //console.log("VALUES--------------------->",values);
    data += `<div class="card">
    <img src="${values.url}" alt="">
    <p>"${values.albumId}"</p>
    <p>"${values.id}"</p>
    <p>"${values.title}"</p>
    <button>DELETE</button>
</div> `
  });
  document.getElementsByClassName("container")[0].innerHTML = data;
})
