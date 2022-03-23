let posts = [];
let url = "https://jsonplaceholder.typicode.com/posts";
document.querySelector("#result").innerHTML = `<p class="text-center">
  <img src="https://thumbs.gfycat.com/GeneralUnpleasantApisdorsatalaboriosa-size_restricted.gif">
 </p>`
fetch(url).then((res) => {
   return res.json()
}).then((data) => {
    posts = data
    render(posts);
}).catch(() => {
    document.querySelector("#result").innerHTML = `<i class="text-danger">
      Error while fetching posts
    </i>`
})


function render(output_new){
  let output = `<div class="row">`
   output_new.forEach(function(i){
     output += `<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
       <div class="card mt-2">
         <img src="https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA=" class="w-100">
         <h5 class="text-center">${i.title}</h5>
         <p class="text-secondary text-center" style="font-size:18px">${i.body}</p>
         <a class="text-info text-center" href="https://vnexpress.net/dung-khai-thac-duong-bay-den-nga-4442142.html" target="_blank">Xem chi tiết</a>
       </div>
     </div>`
   })
  output += `</div>`
  document.querySelector("#result").innerHTML = output;
}

function filterNews(){
  let news_input = document.querySelector("#filter").value;
  let news_title = posts.filter(function(news){
   return news.title.search(news_input) > -1;
  })
  return news_title
}

document.querySelector("#btn_search").addEventListener("click", function(e){
  let result = filterNews(posts,e.target.value);
  render(result);
})
