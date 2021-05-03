/*
Descrizione:
    Attraverso l'apposita API di Boolean 

    https://flynn.boolean.careers/exercises/api/random/mail 

    generare 10 indirizzi email e stamparli in pagina all'interno di una lista con Vue JS e Axios.
*/

const app = new Vue({
    el: '#app',
    data: {
        emailList: [],
    },
    created() {
        this.emailGenerator()
    },
    methods: {
        // Generate random email
        emailGenerator() {
            for (let i = 0; i < 10; i++) {
                // API
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')

                // Success
                .then(res => {
                    this.emailList.push(res.data.response);
                })
                // Error
                .catch (err => {
                    console.log('Errore:', err);
                })
            }
        }
    }
})