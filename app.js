 const app = Vue.createApp({
   data() {
    return {
        firstName:'John Goody',
        lastName:'Doe',
        email: 'john@email.com',
        picture: "https://randomuser.me/api/portraits/men/10.jpg",
        gender:'male'
    }
   },
   methods: {
     getUser() {
// const res = await fetch('https://randomuser.me/api')
// const {results} = res.json()
// console.log(results)
        // this.firstName ='sam',
        // this.lastName = 'smith',
        // this.email = 'sam@gmail.com',
        // this.picture ="https://randomuser.me/api/portraits/women/10.jpg",
        // this.gender ='female'
    }
   },
 })

 app.mount('#app');