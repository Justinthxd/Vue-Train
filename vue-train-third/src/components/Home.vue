<script setup>

import AppBar from './AppBar.vue';
</script>

<template>
    <div class="bg-light">
        <div class='bg-dark'>
            <img class='w-100'
                src='https://files.porsche.com/filestore/image/multimedia/none/911-tus-modelimage-sideshot/model/930894f1-6214-11ea-80c8-005056bbdc38/porsche-model.png' />
        </div>
        <div class="container py-5">
            <div class="row">
                <div class="col">
                    <div class="option">
                        <h1>Buy a Car</h1>
                        <p>You can contact us to buy a new car this christmas</p>
                        <button class="btn btn-outline-secondary">Buy</button>
                    </div>
                </div>
                <div class="col">
                    <div class="option">
                        <h1>Rent a Car</h1>
                        <p>You can contact us to buy a new car this christmas</p>
                        <button class="btn btn-outline-danger">Rent</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer d-flex align-items-center justify-content-around">
            <div class="row ">
                <div class="col">
                    <h5>Porsche &copy 2023</h5>
                </div>
                <div class="col">
                    <p>Page yours cars</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.middleBody {
    height: 400px;
    background-color: white;
}

.option {
    width: auto;
    height: 200px;
    padding: 20px;
    text-align: center;
    background-color: white;
    box-shadow: 0px 0px 15px rgb(0, 0, 0, 0.3);
    border-radius: 10px;
    font-family: 'Times New Roman', Times, serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.option:hover {
    background-color: rgb(43, 43, 68);
    transition: 2s ease-out;
    color: white;
}

.footer {
    height: 200px;
    background-color: rgb(37, 37, 37);
    color: white;
}
</style>
