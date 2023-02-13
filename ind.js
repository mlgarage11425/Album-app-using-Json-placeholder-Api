//for search

const search = () => {
  const searchbox = document.getElementById("in").value.toUpperCase();
  const storeuser = document.getElementById("cards")
  const user = document.querySelectorAll(".card")
  const name = storeuser.getElementsByTagName("p")

  for(var i=0; i < name.length; i++){
    let match = user[i].getElementsByTagName('p')[0];

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







// for user card
fetch('https://jsonplaceholder.typicode.com/users')
.then((data)=>{
  //console.log(data);
  return data.json();   

}).then((complete)=>{  
  //console.log(complete);
  let data1="";
  
  
  complete.map((values)=>{
    data1+=`
    <div class="card">
        <img src="image/download.jpeg" alt="" class="images">
        <p class="name">${values.name}</p>
        <p class="email">${values.email}</p>
        <button id="dash"><a href="http://127.0.0.1:5500/dashboard.html?userId=${values.id}">Dashboard</a></button>
    </div>`
  });
  document.getElementById("cards").innerHTML=data1;

  
}).catch((err)=>{
  console.log(err);
})


