<template>
  <div class="center">
    <h1>Auth Page</h1>
    <button :class="[{active: hover}, 'auth']" @click="getUser"
    @mouseover = "hover = true" @mouseleave = "hover = false"
    >
    GetUser
    </button>
  </div>
</template>

<script>
import { env } from '../../../env'

export default {
  name: 'Auth',
  data () {
    return {
      hover: false
    }
  },
  methods: {
    async getUser () {
      const githubAuthApi = 'https://github.com/login/oauth/authorize'
      const params = new URLSearchParams()
      params.append('client_id', env.clientId)
      params.append('scope', 'repo:status read:user')
      window.location.href = `${githubAuthApi}?${params}`
    //   try {
    //     const response = await fetch('https://api.github.com/user')
    //     const data = await response.json()
    //     console.log(data)
    //   } catch (e) {
    //     console.log(e)
    //   }
    }
  },
  async created () {
    const code = new URLSearchParams(window.location.search).get('code')
    if (code) {
      try {
        const response = await fetch('http://localhost:8080/github', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            clientId: env.clientId,
            code,
            clientSecret: env.clientSecret
          })
        })
        const { token } = await response.json()
        localStorage.setItem('token', token)
        this.$router.replace({ name: 'feeds' })
        console.log(token)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -20px;
  margin-top: -20px;
}
.auth {
    margin-top: 20px;
    padding: 10px;
    border: 2px solid black;
    border-radius: 10%;
}
.active {
    background: green;
}
</style>
