var app = new Vue ({
    el: '#myapp',
    data: {
        emails: []
    },
    mounted(){
        let self = this

        // mi pusha 10 volte una mail generata dentro l'array dall' API di boolean
        for(let i = 0; i < 10; i++){
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(function (email){
                self.emails.push(email.data.response)
            })
        }
        
    


    }
})