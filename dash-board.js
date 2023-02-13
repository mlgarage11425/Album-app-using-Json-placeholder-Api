//for search
const search = () => {
    const searchbox = document.getElementById("se").value.toUpperCase();
    const storeuser = document.getElementById("alu")
    const user = document.querySelectorAll(".card")
    const name = storeuser.getElementsByClassName(".usid")
  
    for(var i=0; i < name.length; i++){
      let match = user[i].getElementsByClassName('.usid')[0];
  
      if(match){
        let textvalue = match.textContent || match.innerHTML
  
        if(textvalue.toUpperCase().indexOf(searchbox) > -1){
          user[i].style.display = "";
        }else{
          user[i].style.display = "none";
  
        }
      }
    }
  }



//for fetch userid from url
const urlParams = new URLSearchParams(window.location.search);


const userId = urlParams.get('userId');

//perticular user
function req1() {

  //console.log("hi",userId)
  fetch('https://jsonplaceholder.typicode.com/users/'+ userId)
    .then(response => response.json())
    .then(json => {
      const id = json.id;
      const name = json.name;
      const phn = json.phone;
      const email = json.email;
  
      document.getElementById("id").innerHTML = id;
      document.getElementById("nm").innerHTML = name;
      document.getElementById("pn").innerHTML = phn;
      document.getElementById("em").innerHTML= email;



      //console.log(id);
      
    });
}
req1();



//album section
 let data = "";
 fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
 .then((data) => {
  //console.log("hi bro",data);
  return data.json();
})
.then((complete) => {
  let filteredAlbums = complete.filter(album => album.userId);
  //console.log("bro",userId);
  filteredAlbums.map((values) => {
    console.log(values);
    data += `<div class="card">
    <p class="us">${values.userId} </p>
    <p class="usid">${values.id}</p>
    <p class="tit">${values.title}</p>
    <button id="ph"><a href="http://127.0.0.1:5500/photo.html?userId=${values.userId}">PHOTO</a></button>
    <button id="de">DELETE</button>
   

</div> `
  });
  document.getElementsByClassName("album")[0].innerHTML = data;
})




  
  



 
 




 



