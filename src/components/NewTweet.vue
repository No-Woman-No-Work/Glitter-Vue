<template>
    <div class = "Tweet">
            <div class = "d-flex flex-row wholetweet">
                <div class = "d-flex p-2">
                <img src="https://imgs.search.brave.com/664pVg0vb28Y3up2wXdxbdnIuM08I9HS2mgx9tQ4CbQ/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvd2Vic2l0ZS1p/bnRlcm5ldC80OC93/ZWJzaXRlXy1fZmVt/YWxlX2J1c2luZXNz/LTUxMi5wbmc" alt="user" id = "profpic" style = "height:55px;width:55px"></div>
                <div class = "d-flex p-1 flex-column align-items-start" style = "padding-top:20px;">
                    <div class = "d-flex flex-column"> 
                        <div class = "d-flex" style = "max-height: 20px;">
                            <p class = "font-weight-bold  d-none d-md-block d-lg-block">NWNA &nbsp;</p>
                            <p class = "font-weight-bold text-secondary">@No_Woman_No_Api &nbsp;</p>
                            <p class = "font-weight-bold text-secondary">&#8231;&nbsp;2m </p>
                        </div>
                        <div class = "d-flex p-1" v-if="edit==false">
                            <p>
                            Aquí va un tweet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name: 'NewTweet',
    props:{
        text: String,
        thistweet:Number,
        // editText:String
        // edit:Boolean,
    },data(){
        return{
                edit:false,
                editText:""
        }
  },
  methods:{
    // showEdit(){
    //       edit = true
    //   }
  }
}
</script>
