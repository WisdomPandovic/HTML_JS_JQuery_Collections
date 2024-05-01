function render(data){
    return `
     <div class="blog">
        <span>${data.title}</span>
        <div>
          ${data.body}
        </div>
      </div>
  `
  }
  
  // This uses multiple argument which
  // could be bad for certain reason
  // function render(title,body,a,b,c,d){
  //   return `
  //    <div class="blog">
  //       <span>${title}</span>
  //       <div>
  //         ${body}
  //       </div>
  //     </div>
  // `
  // }
  
  // TYPE
  // post - Create
  // get - Read
  // put - Update
  // delete - Delete
  function load(){
     $.ajax({
       url:"https://jsonplaceholder.typicode.com/posts",
       type:"GET",
       success:function(res){
         for(let i=0;i<res.length;i++){
           let r = res[i]
           let template = render(r)
           $('.content').append(template)
         }
       },
       error:function(err){
         console.log(err)
       }
     })
  }
  //https://reqres.in/api/users
  load()