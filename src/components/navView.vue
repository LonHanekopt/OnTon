<template>
    <div class="nav">
        <div class="nav-logo">
            <a href="#">
                <img src="@/assets/logo.png" />
            </a>
        </div>

        <ul class="nav-links navbar-menu">
            <li class="link"><router-link to="/">Home</router-link></li>
            <li class="link"><a href="#" @click.prevent>{{ $t('Features') }}</a></li>
            <li class="link"><a href="#" @click.prevent>{{ $t('Pricing') }}</a></li>
            <li class="link"><a href="#" @click.prevent>{{ $t('About') }}</a></li>
        </ul>
        <div class="locale">
            <select @change="changeLang($event)" name="locale" id="locale" ref="locale">
                <option value="en">English</option>
                <option value="ru">Русский</option>
            </select>
            <div class="mobile-menu" @click="showMenu">
                <span class="material-symbols-outlined"> menu </span>
            </div>
        </div>

        <aside ref="sidemenu">
            <div class="sidemenu">
                <div class="items">
                    <span class="material-symbols-outlined" @click="closeMenu()"> close </span>
                    <ul>
                        <li class="link"><router-link to="/">Home</router-link></li>
                        <li class="link"><a href="#" @click.prevent>{{ $t('Features') }}</a></li>
                        <li class="link"><a href="#" @click.prevent>{{ $t('Pricing') }}</a></li>
                        <li class="link"><a href="#" @click.prevent>{{ $t('About') }}</a></li>
                    </ul>
                </div>
            </div>
        </aside>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$refs['locale'].value = this.$i18n.locale;
    },
    methods: {
        changeLang(event) {
            this.$i18n.locale = event.target.value
        },
        closeMenu() {
            this.$refs.sidemenu.style['display'] = 'none';
        },
        showMenu() {
            this.$refs.sidemenu.style['display'] = 'block';
        }
    }
}
</script>

<style scoped>
.nav {
    max-width: 1200px;
    margin: auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    border-bottom: 1px solid var(--cyan);
}

.nav-logo {
    max-width: 200px;
}

.nav-links {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 3rem;
}

.link a {
    position: relative;
    padding-bottom: 0.75rem;
    font-size: 1.14rem;
    color: var(--text);

}

.link a::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 0;
    bottom: 0;
    left: 0;
    background-color: var(--cyan);
    transition: all 0.3s ease;
}

.link a:hover::after {
    width: 70%;
}

aside {
    display: none;
    z-index: 100000000000 !important;

}

.items {
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.748);
    height: 100%;
    position: fixed;
    width: 30%;
    color: white;
}

.items span {
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: 1.4rem;
}

.items ul {
    display: flex;
    flex-direction: column;
    margin: 3rem;
    justify-content: flex-start;
    gap: 1rem;
}

.items a {
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 1px;
    color: #fff;
}

.items .indent {
    margin-top: 0.3rem;
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    padding: 0.4em 0;
}

.items .indent a {
    font-size: 0.7rem;
    font-weight: 400;
    text-align: left;
}

.mobile-menu {
    height: 30px;
    display: none;
}

.locale {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2em;
}

.locale #locale {
    font-size: 0.7rem;
}

select {
    border: 1px solid rgb(97, 189, 181);
    padding: 1em 2em;
    border-radius: 5px;
}

select:focus {
    outline: none;
}

@media screen and (max-width: 800px) {


    .mobile-menu {
        display: block;
    }

    .navbar-menu {
        display: none;
    }

    .btn {
        display: none;
    }
}

@media screen and (max-width: 500px) {
    .items {
        width: 45%;
    }

    .items a {
        font-size: 1rem;
        font-weight: 300;
        letter-spacing: 1px;
    }

    .items .indent a {
        font-size: 0.7rem;
        font-weight: 400;
    }
}

@media screen and (max-width: 500px) {
    .items {
        width: 55%;
    }

    .items ul {
        align-items: center;
    }
}
</style>