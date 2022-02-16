<template>
  <div class="center">
    <div class="wrap">
      <icon class="logo" name='logo'/>
      <p class="slog">More than just one repository. <br> This is our digital world.</p>
      <button :class="[{active: hover}, 'auth']" @click="getUser"
      @mouseover = "hover = true" @mouseleave = "hover = false"
      >
      Authorization with github
        <icon class="github" name='github'/>
      </button>
    </div>
    <div class="macbook">
      <div class="monitor">
        <div class="screen">
          <div class="image">
            <img src="../../assets/Screen.jpg"/>
          </div>
        </div>
        <p class="made">Gitogram</p>
      </div>
      <div class="clop"/>
      <div class="mac corp"/>
      <div class="mac dno"/>
    </div>
  </div>
  <p class="footer">&copy; Gitogram from Loftschool</p>
</template>

<script>
import env from '../../../env.js'
import { icon } from '../../icons'

export default {
  name: 'Auth',
  components: {
    icon
  },
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
      params.append('scope', 'repo:status public_repo read:user')
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
        const response = await fetch('https://webdev-api.loftschool.com/github', {
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
  justify-content: space-around;
  align-self: center;
  margin-top: auto;
  height: 100vh;
  min-height: 720px;
}
.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.macbook {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.logo {
  font-size: 36px;
  margin-left: -3px;
  margin-top: 3%;
}
.slog {
  text-align: center;
    font-family: Inter;
    font-style: normal;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    color: gray;
    letter-spacing: 1px;
    margin-bottom: 2px;
}
.auth {
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;
    width: 252px;
    height: 44px;
    border: 1px solid rgba(49, 174, 84, 1);
    background: rgba(49, 174, 84, 1);
    font-family: Inter;
    font-style: normal;
    color: white;
    font-size: 16px;
    font-weight: 700;
    line-height: 19.36px;
}
.github {
  margin-top: -3px;
  float: right;
}
.active {
    background: none;
    color: green;
}
.monitor {
  width: 648px;
  height: 440px;
  border-radius: 28px 28px 0 0;
  border: 2px solid rgba(74, 85, 104, 1);
  border-bottom: none;
  background: rgba(26, 32, 44, 1);
  position: relative;
  margin-top: 2%;
}
.screen {
  width: 640px;
  height: 420px;
  background: rgba(0, 0, 0, 1);
  left: 0.3%;
  position: absolute;
  border-radius: 28px 28px 0 0;
}
.image {
  width: 611px;
  height: 381px;
  background: white;
  border: 4px;
  margin: auto;
  margin-top: 21px;
}
.made {
font-family: Inter;
font-size: 8px;
font-style: normal;
font-weight: 700;
line-height: 8px;
letter-spacing: 0px;
text-align: center;
bottom: 1%;
left: 47.4%;
position: absolute;
color: #647279;
}
.clop {
  background: linear-gradient(90deg, #3C3C3C 9.86%, rgba(60, 60, 60, 0) 35.92%, rgba(60, 60, 60, 0) 64.08%, #444444 91.93%),
linear-gradient(0deg, #96A1A8, #96A1A8);
width: 132px;
height: 12px;
border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;
margin-bottom: -12px;
z-index: 200;
}
.corp {
  height: 14.29px;
  background: linear-gradient(90deg, #0D1012 0%, #CAD4DB 2.95%, #242729 6.25%, #A3ACB1 13.36%, #A3ACB1 86.6%, #242729 94.19%, #CAD4DB 97.13%, #0D1012 99.64%),
linear-gradient(0deg, #A3ACB1, #A3ACB1);
z-index: 100;
}
.dno {
  height: 18px;
  background: linear-gradient(180deg, #7A7F83 0%, #0B0B0E 100%), #647279;
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
  margin-top: -9px;
  margin-bottom: 40px;
}
.mac {
  width: 800px;
}
.footer {
  position: absolute;
  left: 50%;
  bottom: 0;
  margin-left: -120px;
  margin-bottom: 20px;
  text-align: center;
  font-family: Inter;
  font-style: normal;
  color: gray;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.36px;
  letter-spacing: 1px;
  flex: 0 0 auto;
}
</style>
