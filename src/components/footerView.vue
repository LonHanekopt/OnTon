<template>
    <div class="wrapper">
        <div class="column">
            <div class="logo">
                <img src="@/assets/logo-light.png" alt="" />
            </div>
            <h3 class="gradient-text">Ton Link {{$t('Building innovative technology to shape the future')}}</h3>
            <div class="socials">
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                            d="M19.6069 6.99482C19.5307 6.69695 19.3152 6.47221 19.0684 6.40288C18.6299 6.28062 16.501 6 12.001 6C7.50098 6 5.37252 6.28073 4.93225 6.40323C4.68776 6.47123 4.4723 6.69593 4.3951 6.99482C4.2863 7.41923 4.00098 9.19595 4.00098 12C4.00098 14.804 4.2863 16.5808 4.3954 17.0064C4.47126 17.3031 4.68676 17.5278 4.93251 17.5968C5.37252 17.7193 7.50098 18 12.001 18C16.501 18 18.6299 17.7194 19.0697 17.5968C19.3142 17.5288 19.5297 17.3041 19.6069 17.0052C19.7157 16.5808 20.001 14.8 20.001 12C20.001 9.2 19.7157 7.41923 19.6069 6.99482ZM21.5442 6.49818C22.001 8.28 22.001 12 22.001 12C22.001 12 22.001 15.72 21.5442 17.5018C21.2897 18.4873 20.547 19.2618 19.6056 19.5236C17.8971 20 12.001 20 12.001 20C12.001 20 6.10837 20 4.39637 19.5236C3.45146 19.2582 2.70879 18.4836 2.45774 17.5018C2.00098 15.72 2.00098 12 2.00098 12C2.00098 12 2.00098 8.28 2.45774 6.49818C2.71227 5.51273 3.45495 4.73818 4.39637 4.47636C6.10837 4 12.001 4 12.001 4C12.001 4 17.8971 4 19.6056 4.47636C20.5505 4.74182 21.2932 5.51636 21.5442 6.49818ZM10.001 15.5V8.5L16.001 12L10.001 15.5Z">
                        </path>
                    </svg></a>
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                            d="M19.6069 6.99482C19.5307 6.69695 19.3152 6.47221 19.0684 6.40288C18.6299 6.28062 16.501 6 12.001 6C7.50098 6 5.37252 6.28073 4.93225 6.40323C4.68776 6.47123 4.4723 6.69593 4.3951 6.99482C4.2863 7.41923 4.00098 9.19595 4.00098 12C4.00098 14.804 4.2863 16.5808 4.3954 17.0064C4.47126 17.3031 4.68676 17.5278 4.93251 17.5968C5.37252 17.7193 7.50098 18 12.001 18C16.501 18 18.6299 17.7194 19.0697 17.5968C19.3142 17.5288 19.5297 17.3041 19.6069 17.0052C19.7157 16.5808 20.001 14.8 20.001 12C20.001 9.2 19.7157 7.41923 19.6069 6.99482ZM21.5442 6.49818C22.001 8.28 22.001 12 22.001 12C22.001 12 22.001 15.72 21.5442 17.5018C21.2897 18.4873 20.547 19.2618 19.6056 19.5236C17.8971 20 12.001 20 12.001 20C12.001 20 6.10837 20 4.39637 19.5236C3.45146 19.2582 2.70879 18.4836 2.45774 17.5018C2.00098 15.72 2.00098 12 2.00098 12C2.00098 12 2.00098 8.28 2.45774 6.49818C2.71227 5.51273 3.45495 4.73818 4.39637 4.47636C6.10837 4 12.001 4 12.001 4C12.001 4 17.8971 4 19.6056 4.47636C20.5505 4.74182 21.2932 5.51636 21.5442 6.49818ZM10.001 15.5V8.5L16.001 12L10.001 15.5Z">
                        </path>
                    </svg></a>
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                            d="M19.6069 6.99482C19.5307 6.69695 19.3152 6.47221 19.0684 6.40288C18.6299 6.28062 16.501 6 12.001 6C7.50098 6 5.37252 6.28073 4.93225 6.40323C4.68776 6.47123 4.4723 6.69593 4.3951 6.99482C4.2863 7.41923 4.00098 9.19595 4.00098 12C4.00098 14.804 4.2863 16.5808 4.3954 17.0064C4.47126 17.3031 4.68676 17.5278 4.93251 17.5968C5.37252 17.7193 7.50098 18 12.001 18C16.501 18 18.6299 17.7194 19.0697 17.5968C19.3142 17.5288 19.5297 17.3041 19.6069 17.0052C19.7157 16.5808 20.001 14.8 20.001 12C20.001 9.2 19.7157 7.41923 19.6069 6.99482ZM21.5442 6.49818C22.001 8.28 22.001 12 22.001 12C22.001 12 22.001 15.72 21.5442 17.5018C21.2897 18.4873 20.547 19.2618 19.6056 19.5236C17.8971 20 12.001 20 12.001 20C12.001 20 6.10837 20 4.39637 19.5236C3.45146 19.2582 2.70879 18.4836 2.45774 17.5018C2.00098 15.72 2.00098 12 2.00098 12C2.00098 12 2.00098 8.28 2.45774 6.49818C2.71227 5.51273 3.45495 4.73818 4.39637 4.47636C6.10837 4 12.001 4 12.001 4C12.001 4 17.8971 4 19.6056 4.47636C20.5505 4.74182 21.2932 5.51636 21.5442 6.49818ZM10.001 15.5V8.5L16.001 12L10.001 15.5Z">
                        </path>
                    </svg></a>
            </div>
        </div>
        <div class="column">
            <h4>{{$t('Company')}}</h4>
            <a href="#">{{$t('Business')}}</a>
            <a href="#">{{$t('Partnership')}}</a>
            <a href="#">{{$t('Network')}}</a>
        </div>
        <div class="column">
            <h4>{{$t('About Us')}}</h4>
            <a href="#">{{$t('Chanels')}}</a>
            <a href="#">{{$t('Sponsors')}}</a>
        </div>
        <div class="column">
            <h4>{{$t('Contact')}}</h4>
            <a href="#">{{$t('Contact Us')}}</a>
            <a href="#">{{$t('Privacy Policy')}}</a>
            <a href="#">{{$t('Terms & Conditions')}}</a>
        </div>

        <div class="copyright">Copyright 2023 <span class="gradient-text">Ton Link</span>. {{$t('ALl rights reserved')}}</div>
    </div>
    <span class="blur"></span>

</template>

<script>
export default {

}
</script>

<style scoped>
.wrapper {
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
    max-width: 100px;
    margin: auto;
    margin-bottom: 2rem;
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