<template>
    <div class="wrapper">
        <div class="column">
            <div class="logo">
                <img src="@/assets/logo.png" alt="" />
            </div>
            <h3 class="gradient-text">Ton Link {{ $t('Building innovative technology to shape the future') }}</h3>

            <div class="copyright">Copyright 2023 <span class="gradient-text">Ton Link</span>. {{ $t('ALl rights reserved')}}</div>

        </div>
        <div class="column">
            <h4>{{ $t('Company') }}</h4>
            <a href="#">{{ $t('Business') }}</a>
            <a href="#">{{ $t('Partnership') }}</a>
            <a href="#">{{ $t('Network') }}</a>
        </div>
        <div class="column">
            <h4>{{ $t('About Us') }}</h4>
            <a href="#">{{ $t('Chanels') }}</a>
            <a href="#">{{ $t('Sponsors') }}</a>
        </div>
        <div class="column">
            <h4>{{ $t('Contact') }}</h4>
            <a href="#">{{ $t('Contact Us') }}</a>
            <a href="#">{{ $t('Privacy Policy') }}</a>
            <a href="#">{{ $t('Terms & Conditions') }}</a>
        </div>

    </div>
    <span class="blur"></span>

</template>

<script>
export default {

}
</script>

<style scoped>
.wrapper {
    padding-top: 3rem;
    border-top: 1px solid var(--cyan);
    position: relative;
    display: grid;
    grid-template-columns: 400px repeat(3, 1fr);
    gap: 2rem;
}

.wrapper .column {
    padding: 0 2em 0 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.wrapper .column .logo {
    max-width: 300px;
    margin: auto;
}

.wrapper .column .p {
    color: var(--text);
    margin-bottom: 2rem;
}

.wrapper .column a {
    color: var(--text);
}

.wrapper .column .socials {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.wrapper svg {
    max-width: 35px;
}

@media (max-width: 1024px) {
    .wrapper {
        display: grid;
        grid-template-columns: 400px repeat(2, 1fr);
        grid-template-rows: auto;
    }
}

@media (max-width: 800px) {
    .wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin: auto;
        align-items: center;
        justify-content: center;
        grid-template-rows: auto;
    }

    .wrapper .column {
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .wrapper .column .logo {
        max-width: 200px;
        margin-bottom: 0;
    }
}

@media (max-width: 500px) {
    .wrapper {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        align-items: center;
        text-align: center;
        justify-content: center;
        grid-template-rows: auto;
    }
}

@media (max-width: 360px) {}
</style>