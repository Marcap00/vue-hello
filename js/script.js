
const { createApp } = Vue;

createApp({
    data() {
        return {
            /* Title property */
            title: 'Il mio primo progetto con Vue',
            classTitle: 'text-center text-primary my-3',
            /* Img container property */
            classImgCont: 'd-flex justify-content-center',
            /* Img property */
            url: 'imgs/code.jpg',
            classImg: 'border rounded-5'
        }
    }
}).mount('#app')