<template>
    <tweet-item :btns="btnArray" @follow="followUser" class="mx-auto tweet-item">
    </tweet-item>
</template>
 
<script>
import TweetItem from '@/components/TweetItem.vue'
import { ref } from 'vue';
import flitterApi from "../api/flitterApi"


export default {
    name: "OldPublicView",
    components: {
        TweetItem,
    },

    setup() {
        const btnArray = ref([
            {
                txt: 'Follow',
                class: `${btnArray.value[0].isSuccess ? 'btn-success' : ''} ${btnArray.value[0].isLoading ? 'btn-loading' : ''}`,
                action: () => followUser(),
                isLoading: false,
                isSuccess: false,
            },
            {
                txt: 'Kudos',
                class: 'fa-regular fa-thumbs-up',
            },
        ])

        const followUser = async () => {
            btnArray.value[0].isLoading = true;
            try {
                await flitterApi.post(`/:userId/follow`);
                btnArray.value[0].isLoading = false;
                btnArray.value[0].isSuccess = true;
            } catch (error) {
                btnArray.value[0].isLoading = false;
                console.error(error);
            }
        };

        return {
            btnArray,
            followUser,
        }
    },
}
</script>

<style scoped>
.btn-success {
    background-color: rgb(112, 185, 112),
}
</style>

<!-- OLD PUBLIC VIEW
    
    <template>
   
    <div class="row">
        <div class="col-auto text-center flex-column d-none d-sm-flex">
            <div class="row h-50">
                <div class="col">&nbsp;</div>
                <div class="col">&nbsp;</div>
            </div>
            <h5 class="m-2">
                <span class="badge rounded-circle bg-light border">&nbsp;</span>
            </h5>
            <div class="row h-50">
                <div class="col border-end">&nbsp;</div>
                <div class="col">&nbsp;</div>
            </div>
        </div>

        <div class="col py-2">
            <div class="card">
                <div class="card-body">
                    <div class="float-end">Saturday, Feb 4th 2023</div>
                    <h4 class="card-title text-muted">Fleet 1</h4>
                    <p class="card-text text-muted">Oh my God! Life is hard...and overall with the Bootcamp</p>
                </div>
            </div>
        </div>
    </div>


    <div class="row">
        <div class="col-auto text-center flex-column d-none d-sm-flex">
            <div class="row h-50">
                <div class="col">&nbsp;</div>
                <div class="col">&nbsp;</div>
            </div>
            <h5 class="m-2">
                <span class="badge rounded-circle bg-light border">&nbsp;</span>
            </h5>
            <div class="row h-50">
                <div class="col border-end">&nbsp;</div>
                <div class="col">&nbsp;</div>
            </div>
        </div>
        <div class="col py-2">
            <div class="card">
                <div class="card-body">
                    <div class="float-end">Saturday, Feb 4th 2023</div>
                    <h4 class="card-title text-muted">Fleet 2</h4>
                    <p class="card-text text-muted">Where is the Sil queen when we need her?</p>
                </div>
            </div>
        </div>

    </div>

    <div class="row">
        <div class="col-auto text-center flex-column d-none d-sm-flex">
            <div class="row h-50">
                <div class="col">&nbsp;</div>
                <div class="col">&nbsp;</div>
            </div>
            <h5 class="m-2">
                <span class="badge rounded-circle bg-light border">&nbsp;</span>
            </h5>
            <div class="row h-50">
                <div class="col border-end">&nbsp;</div>
                <div class="col">&nbsp;</div>
            </div>
        </div>

        <div class="col py-2">
            <div class="card">
                <div class="card-body">
                    <div class="float-end">Saturday, Feb 4th 2023</div>
                    <h4 class="card-title text-muted">Fleet 3</h4>
                    <p class="card-text text-muted">David deserves a several beers from all of us</p>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-auto text-center flex-column d-none d-sm-flex">
            <div class="row h-50">
                <div class="col">&nbsp;</div>
                <div class="col">&nbsp;</div>
            </div>
            <h5 class="m-2">
                <span class="badge rounded-circle bg-light border">&nbsp;</span>
            </h5>
            <div class="row h-50">
                <div class="col border-end">&nbsp;</div>
                <div class="col">&nbsp;</div>
            </div>
        </div>

        <div class="col py-2">
            <div class="card">
                <div class="card-body">
                    <div class="float-end">Saturday, Feb 4th 2023</div>
                    <h4 class="card-title text-muted">Fleet 4</h4>
                    <p class="card-text text-muted">Andrea is the cobaya </p>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-auto text-center flex-column d-none d-sm-flex">
            <div class="row h-50">
                <div class="col">&nbsp;</div>
                <div class="col">&nbsp;</div>
            </div>
            <h5 class="m-2">
                <span class="badge rounded-circle bg-light border">&nbsp;</span>
            </h5>
            <div class="row h-50">
                <div class="col border-end">&nbsp;</div>
                <div class="col">&nbsp;</div>
            </div>
        </div>

        <div class="col py-2">
            <div class="card">
                <div class="card-body">
                    <div class="float-end">Saturday, Feb 4th 2023</div>
                    <h4 class="card-title text-muted">Fleet 5</h4>
                    <p class="card-text text-muted">Nela has pelassssso</p>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-auto text-center flex-column d-none d-sm-flex">
            <div class="row h-50">
                <div class="col">&nbsp;</div>
                <div class="col">&nbsp;</div>
            </div>
            <h5 class="m-2">
                <span class="badge rounded-circle bg-light border">&nbsp;</span>
            </h5>
            <div class="row h-50">
                <div class="col border-end">&nbsp;</div>
                <div class="col">&nbsp;</div>
            </div>
        </div>

        <div class="col py-2">
            <div class="card">
                <div class="card-body">
                    <div class="float-end">Saturday, Feb 4th 2023</div>
                    <h4 class="card-title text-muted">Fleet 6</h4>
                    <p class="card-text text-muted">Don't worry Mariana, backend waits</p>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-auto text-center flex-column d-none d-sm-flex">
            <div class="row h-50">
                <div class="col">&nbsp;</div>
                <div class="col">&nbsp;</div>
            </div>
            <h5 class="m-2">
                <span class="badge rounded-circle bg-light border">&nbsp;</span>
            </h5>
            <div class="row h-50">
                <div class="col border-end">&nbsp;</div>
                <div class="col">&nbsp;</div>
            </div>
        </div>

        <div class="col py-2">
            <div class="card">
                <div class="card-body">
                    <div class="float-end">Saturday, Feb 4th 2023</div>
                    <h4 class="card-title text-muted">Fleet 7</h4>
                    <p class="card-text text-muted">Emma is waiting for the next chap of The Last of Us</p>
                </div>
            </div>
        </div>
    </div>




</template>


<script>
   

</script>


<style scooped>
    
   

</style>
-->
