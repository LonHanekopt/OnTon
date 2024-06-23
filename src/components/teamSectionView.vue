<template>
    <div class="container">
        <div class="heading">
            <h1 class="gradient-text">{{$t('Meet Our Team')}}</h1>
            <p>
                {{$t('Meet Our Team p')}}
            </p>
        </div>

        <div class="wrapper">
            <div class="grid">
                <div class="item">
                    <div class="photo"><img src="@/assets/geva.png" alt="profile"></div>
                    <div class="content">
                        <h1 class="gradient-text">GEVA</h1>
                        <h2>{{$t('Front End Design')}}</h2>
                    </div>
                </div>
                <div class="item">
                    <div class="photo"><img src="@/assets/sergio.jpg" alt="profile"></div>
                    <div class="content">
                        <h1 class="gradient-text">{{$t('Sergei')}}</h1>
                        <h2>{{$t('Communications')}}</h2>
                    </div>
                </div>
                <div class="item">
                    <div class="photo"><img src="@/assets/shepel.jpg" alt="profile"></div>
                    <div class="content">
                        <h1 class="gradient-text">{{$t('Alex (Shepel)')}}</h1>
                        <h2>CEO</h2>
                    </div>
                </div>
                <div class="item">
                    <div class="photo"><img src="@/assets/valera.jpg" alt="profile"></div>
                    <div class="content">
                        <h1 class="gradient-text">{{$t('Valera')}}</h1>
                        <h2>{{$t('Software Engineer')}}</h2>
                    </div>
                </div>
                <div class="item">
                    <div class="photo"><img src="@/assets/dmytro.jpg" alt="profile"></div>
                    <div class="content">
                        <h1 class="gradient-text">{{$t('Dmytro')}}</h1>
                        <h2>{{$t('Marketing')}}</h2>
                    </div>
                </div>
                <div class="item">
                    <div class="photo"><img src="@/assets/den.jpg" alt="profile"></div>
                    <div class="content">
                        <h1 class="gradient-text">{{$t('Denys')}}</h1>
                        <h2>{{$t('Human Resources')}}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
}
</script>

<style scoped>
.heading {
}

.heading h1 {
    font-size: 2rem;
    letter-spacing: 3px;
    font-weight: 600;
}

.heading p {
    letter-spacing: 3px;
    word-spacing: 3px;
    font-weight: 300;
    font-size: 1.4rem;
    width: 80%;
    margin-top: 1em;
    margin-left: auto;
    margin-right: auto;
}

.wrapper {
    background-color: #0b2229;
    color: var(--bg);
    height: min-content;
    margin-top: 3rem;
    margin-bottom: 3rem;
    padding: 2rem;
    border-radius: 2rem;
}

.wrapper .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 2;
    gap: 2em;
}

.wrapper .grid .photo {
    width: 120px;
    height: 120px;
    margin: 1rem auto;
}

.wrapper .grid .photo img {
    border-radius: 50%;
    border: 2px solid #41f6f6;
}

.wrapper .grid .item {
    text-align: center;
    user-select: none;
    transition: all 0.15s;
}

.content {
    border: 2px solid #41f6f6;
    border-radius: 1rem;
    width: 120px;
    margin: auto;
    padding: 1em 0;
}

.wrapper h1 {
    font-size: 1.4rem;
    font-weight: 600;
}

.wrapper h2 {
    font-weight: 300;
    font-size: 1rem;
    margin-top: 1rem;
}

@media (max-width: 1024px) {
    .wrapper .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 2;
        gap: 2em;
        column-gap: 0;
    }

    .wrapper .grid .photo {
        width: 140px;
        height: 140px;
        margin: 1rem auto;
    }

    .content {
        width: 140px;
    }
}

@media (max-width: 800px) {
    .wrapper .grid {
        display: flex;
        flex-direction: column;
    }

    .wrapper .grid .photo {
        width: 180px;
        height: 180px;
    }

    .content {
        width: 180px;
    }
    .wrapper h1 {
        font-size: 2rem;
    }

    .wrapper h2 {
        font-size: 1.2rem;
    }
}

@media (max-width: 600px) {
    .wrapper .grid .photo {
        width: 80%;
        height: 40%;
    }

    .content {
        width: 80%;

    }
    .wrapper h1 {
        font-size: 1.2rem;
    }

    .wrapper h2 {
        font-size: 1rem;
    }
}

@media (max-width: 360px) {}
</style>