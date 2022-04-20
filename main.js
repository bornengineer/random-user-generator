const app = Vue.createApp({
    data() {
        return {
            firstname: '',
            lastname: '',
            email: '',
            dob: '',
            city: '',
            country: '',
            postcode: '',
            gender: '',
            phone: '',
            image: '',

        }
    },
    created: function() {
        this.getUser()
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()
            console.log(results);

            this.firstname = results[0].name.first
            this.lastname = results[0].name.last
            this.email = results[0].email
            this.dob = results[0].dob.date.slice(0, 10)
            this.city = results[0].location.city
            this.country = results[0].location.country
            this.postcode = results[0].location.postcode
            this.gender = results[0].gender
            this.phone = results[0].phone
            this.image = results[0].picture.large
        },
    },
})

app.mount('#app')