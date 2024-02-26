const app = Vue.createApp({
  data() {
    return {
      firstName: 'Cheetos',
      lastName: 'Orange',
      email: 'cheetos4ever@gmail.com',
      gender: 'male',
      picture: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/Chester_Cheetah.png/220px-Chester_Cheetah.png',
    }
  },
  methods: {
    async getUser() {
      const res = await fetch('https://randomuser.me/api')
      const { results } = await res.json()
      //destructure

      console.log(results)

      this.firstName = results[0].name.first
      this.lastName = results[0].name.last
      this.email = results[0].email
      this.gender = results[0].gender
      this.picture = results[0].picture.large
    },
  },
})

app.mount('#app')