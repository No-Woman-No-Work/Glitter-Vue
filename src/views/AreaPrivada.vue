<template>
<div class="container-fluid">
  <h1>Hello (username)</h1>
  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" 
  class="avator">



  <img
            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
            class="rounded-circle"
            height="24"
            alt="User"
            loading="lazy"
          />
          <b-dropdown-item>Logout</b-dropdown-item>

    <div class="row">
        <div class="col-sm-4" style="background-color:white;">Home</div>
        <div class="col-md-3 offset-md-3">Logout</div>
        <div class="col-md-3 offset-md-3" style="background-color:black;">Unsubscribe :(</div>
    </div>


    <div class="newtweet">
  <form>
    <div class="form-group">
      <label for="newpub">New Tweet:</label>
      <textarea class="form-control" rows="5" id="newpub"></textarea>
    </div>
  </form>
</div>



    <!-- <div class="follow">
        <form>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" 
                       id="switch" />
                <label class="form-check-label" for="switch">
                  </label>
            </div>
        </form>
    </div> -->


<div class="tweet-wrap">
  <div class="tweet-header">
    <img src="https://cdn.ghanaweb.com/imagelib/pics/423/42373436.jpg" alt="" class="avator">
    <div class="tweet-header-info">
      Megan Hola <span>@meganhola</span><span>. Sunday, Feb 4th 2023
</span>
      <p>Always feeling hungry!!!</p>
      
    </div>
    </div>

      </div>
  <div class="tweet-img-wrap">
    <img src="https://blogmaladeviagem.com.br/wp-content/uploads/2019/10/Onde-comer-Campo-Grande.png" alt="" class="tweet-img">
  </div>
  <div class="tweet-info-counts">
    
    
    <div class="likes">
      <svg class="feather feather-heart sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
      <div class="likes-count">
        2.6k
      </div>
    </div>
</div>
<div class="tweet-wrap">
  <div class="tweet-header">
    <img src="data:image/jpeg;base64,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" alt="" class="avator">
    <div class="tweet-header-info">
      Arthur FMG <span>@arthurfmg</span><span>. Wednesday, Feb 1st 2023
</span>
      <p>My husband found me intently typing, wearing yesterday's clothes, with a piece of pizza hanging out of my mouth, and I yelled (through pizza), "I'M LIVING MY BEST LIFE."</p>
      
    </div>
    

      </div>
  <div class="tweet-img-wrap">
  </div>
  <div class="tweet-info-counts">
    
    
    <div class="likes">
      <svg class="feather feather-heart sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
      <div class="likes-count">
        1.6k
      </div>
    </div>
</div>
</div>
</div>
</template>

<script>

</script>

<style scoped>

body {
  background: #e6ecf0;
  font-family: 'Asap', sans-serif;
  font-family: 'Roboto', sans-serif;

}
img {
  max-width:60%;
}
.avator {
  border-radius:100px;
  width:48px;
  margin-right: 15px;
}
.tweet-wrap {
  max-width:490px;
  background: #fff;
  margin: 0 auto;
  margin-top: 50px;
  border-radius:3px;
  padding: 30px;
  border-bottom: 1px solid #e6ecf0;
  border-top: 1px solid #e6ecf0;
}

.tweet-header {
  display: flex;
  align-items:flex-start;
  font-size:14px;
}
.tweet-header-info {
  font-weight:bold;
}
.tweet-header-info span {
  color:#657786;
  font-weight:normal;
  margin-left: 5px;
}
.tweet-header-info p {
  font-weight:normal;
  margin-top: 5px;
  
}
.tweet-img-wrap {
  padding-left: 60px;
}

.tweet-info-counts {
  display: flex;
  margin-left: 60px;
  margin-top: 10px;
}
.tweet-info-counts div {
  display: flex;
  margin-right: 20px;
}
.tweet-info-counts div svg {
  color:#657786;
  margin-right: 10px;
}
@media screen and (max-width:430px){
  body {
    padding-left: 20px;
    padding-right: 20px;
  }
  .tweet-header {
    flex-direction:column;
  }
  .tweet-header img {
    margin-bottom: 20px;
  }
  .tweet-header-info p {
    margin-bottom: 30px;
  }
  .tweet-img-wrap {
    padding-left: 0;
  }
  .tweet-info-counts {
  display: flex;
  margin-left: 0;
}
.tweet-info-counts div {
  margin-right: 10px;
}
}
</style>