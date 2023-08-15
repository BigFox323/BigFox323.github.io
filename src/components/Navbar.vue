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
    </nav>
  </header>
</template>

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
    padding: 5px 10px;
    text-decoration: none;
    font-size: 15px;
  }
}
</style>