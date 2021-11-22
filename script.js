var app = new Vue ({
    el: '#myapp',
    data: {
        emails: []
    },
    mounted(){
        let self = this.emails
        for(let i = 0; i < 10; i++){
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(function (response){
                self.push(response.data.response)
            console.log(self);
            })
        }
        
    


    }
})