<template>

    <header>
        <div class="logo">
            <nuxt-link to="/">
            <img src="" alt="">
        </nuxt-link>
        </div>
        <input type="checkbox" id="nav_check" hidden="">
        <nav>
            <div class="logo">
                <img src="" alt="">
            </div>
            <ul>
                <li><nuxt-link to="/">
                    <a href="" class="active">Hl. strana</a>
                </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/Calculator">
                    <a href="">Fit Kalkulačka</a>
                </nuxt-link>
                </li>
            
            
            </ul>
        </nav>
        <label for="nav_check" class="hamburger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </label>
    </header>



</template>




<script>
</script>

<style scoped>

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    
}
img {
    width: 100%;
}
header {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    border-radius: 0 0 10px 10px;
    margin: 0 auto;
}
.logo {
    width: 120px;
    margin-top: 8px;
}
nav .logo {
    display: none;
}
nav ul {
    display: flex;
}
nav ul li a {
    color: white;
    display: block;
    margin: 0 2px;
    font-weight: 600;
    padding: 8px 18px;
    transition: 0.2s;
    border-radius: 30px;
}
nav ul li a:hover {
    background: #F24BB9;
}
nav ul li a.active {
    color: #fff;
    background: #F24BB9;
}
.hamburger {
    background-color: white;
    display: none;
    height: fit-content;
    cursor: pointer;
    padding: 3px 8px;
    border-radius: 5px;
    transition: 0.2s;
}
.hamburger:hover {
    background: #f6f4ff;
}
.hamburger .line {
    width: 30px;
    height: 2px;
    margin: 6px 0;
    background: #212526;
}
@media only screen and (max-width: 1100px) {
    header {
        width: 90%;
        padding: 0 20px;
    }
    nav {
        position: absolute;
        left: -300px;
        top: 0;
        z-index: 999;
        width: 280px;
        height: 100vh;
        background-color: #fefefe;
        transition: 0.2s;
        box-shadow: 2px 0 20px 0 rgba(0, 0, 0, 0.05);
    }
    #nav_check:checked ~ nav {
        left: 0;
    }
    nav .logo {
        display: block;
        height: 70px;
        display: flex;
        align-items: center;
        margin-left: 30px;
    }
    nav ul {
        display: block;
        padding: 0 20px;
        margin-top: 30px;
    }
    nav ul li a {
        margin-bottom: 5px;
        padding: 15px;
        border-radius: 5px;
    }
    .hamburger {
        display: block;
    }
}
</style>