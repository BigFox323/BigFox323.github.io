<template>
  <header class="header">
    <h1 class="logo">
      <router-link to="/" class="logo-item">BigFox Blog</router-link>
    </h1>
    <nav class="navbar">
      <ul>
        <li><router-link to="/" class="nav-item">首页</router-link></li>
        <li><router-link to="/blog" class="nav-item">博客</router-link></li>
      </ul>
      <div class="theme-switch">
        <input id="themeSwitch" class="switch-checkbox" type="checkbox" v-model="isDarkMode" @change="toggleDarkMode">
        <label class="theme-slider" for="themeSwitch">
          <i class="fas fa-moon"></i>
          <i class="fas fa-sun"></i>
        </label>
      </div>
    </nav>
  </header>
</template>

<script>
import Darkmode from 'darkmode-js';

export default {
  name: 'Navbar',
  data() {
    return {
      isDarkMode: false,
      darkmode: null
    };
  },
  methods: {
    toggleDarkMode() {
      this.darkmode.toggle();
    }
  },
  mounted() {
    this.$nextTick(() => {
      const options = {
        bottom: 'unset',
        right: 'unset',
        left: 'unset',
        time: '0.5s',
        mixColor: '#fff',
        backgroundColor: '#fff',
        buttonColorDark: '#000000',
        buttonColorLight: '#fff',
        saveInCookies: true,
        label: '',
        autoMatchOsTheme: true
      };

      this.darkmode = new Darkmode(options);
      this.isDarkMode = this.darkmode.isActivated();
    });
  }
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  height: 55px;
  justify-content: space-between;
  background-color: #f2f2f2;
  padding: 8px 30px;
  width: 100%;
  flex-shrink: 0;
}

.logo {
  color: #888;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  margin-left: 5px;
}

.logo-item {
  color: inherit;
  text-decoration: none;
}

.logo-item,
.nav-item {
  transition: color 0.2s;
}

.logo-item:hover {
  color: #ddd;
}

.navbar {
  display: flex;
  margin-right: 50px;
}

.nav-item {
  color: #888;
  padding: 0 18px;
  text-decoration: none;
}

.nav-item:hover {
  color: #ddd;
}

.navbar ul {
  list-style-type: none;
  padding: 0;
}

.navbar li {
  display: inline-block;
}

.theme-switch {
  position: relative;
  width: 60px;
  height: 24px;
  display: inline-block;
  left: 30px;
}

.switch-checkbox {
  display: none;
}

.theme-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ccc;
  border-radius: 34px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s, border-color 0.3s;
}

.theme-slider:before {
  content: "";
  height: 24px;
  width: 24px;
  margin: 0 1px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.3s;
}

input:checked+.theme-slider {
  background-color: #ccc;
}

input:checked+.theme-slider:before {
  transform: translateX(32px);
}

.theme-slider .fas.fa-sun,
.theme-slider .fas.fa-moon {
  position: absolute;
}

.theme-slider .fas.fa-sun {
  right: 10%;
  display: none;
}

.theme-slider .fas.fa-moon {
  left: 10%;
}

input:checked+.theme-slider .fas.fa-sun {
  display: block;
}

input:checked+.theme-slider .fas.fa-moon {
  display: none;
}


/* Responsive Styles for Mobile */
@media (max-width: 768px) {
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f2f2f2;
    padding: 10px 20px;
  }

  .logo {
    color: #888;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    margin-left: 5px;
  }

  .logo-item {
    color: inherit;
    text-decoration: none;
  }

  .navbar {
    display: flex;
    align-items: center;
  }

  .nav-item {
    color: #888;
    padding: 0 5px;
    text-decoration: none;
    font-size: 15px;
  }

  .theme-switch {
    width: 40px;
    height: 20px;
  }

  .theme-slider:before {
    content: "";
    height: 20px;
    width: 20px;
    margin: 0 1px;
  }

  input:checked+.theme-slider:before {
    transform: translateX(15px);
  }

}
</style>