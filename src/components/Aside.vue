<template>
    <div class="aside">
        <img src="@/assets/profile.png" alt="个人头像">
        <h2>BigFox</h2>
        <p>前端小白 | 宅神一个 | 单机游戏爱好者</p>
        <ul>
            <li>
                <a href="mailto:bigfox323@gmail.com">
                    <i class="fas fa-envelope icon"></i>
                    <span class="link-text">Email</span>
                </a>
            </li>
            <li>
                <a href="https://github.com/BigFox323" target="_blank">
                    <i class="fab fa-github icon"></i>
                    <span class="link-text">GitHub</span>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/BigFox323" target="_blank">
                    <i class="fab fa-twitter icon"></i>
                    <span class="link-text">Twitter</span>
                </a>
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    name: "Aside",
};
</script>
  
<style scoped>
.aside {
    /* max-width: 400px;
    width:100%; */
    box-shadow: 0 2px 4px rgba(29, 4, 4, 0.1);
    padding: 30px 30px;
    margin: 30px 15px;
    border-radius: 8px;
    background-color: #fff;
}

.aside img {
    display: block;
    width: 70%;
    margin: 0 auto;
    border-radius: 50%;
    margin-bottom: 10px;
}

.aside h2 {
    text-align: center;
    color: #444;
    margin: 30px;
}

.aside p {
    text-align: center;
    color: #444;
}

.aside ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    padding-left: 0;
    margin: 30px;
}

.aside ul li {
        margin: 0 5px;
    }
    
.aside a {
    text-decoration: none;
    color: #888;
}

.aside ul li a:hover {
    color: #333;
    ;
}

.icon {
    margin-right: 5px;
}

@media (max-width: 768px) {
    .aside {
        /* width: 90%; */
        height:auto;
        padding: 15px 15px;
        margin: 10px auto;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .aside img {
        width: 50%;
    }

    .aside h2 {
        margin: 10px;
    }

    .aside ul {
        justify-content: center;
        margin: 20px;
    }

    .aside ul li {
        margin: 0 5px;
    }

    .link-text {
        display: none;
    }

    .aside i {
        font-size: 22px;
    }
}
</style>