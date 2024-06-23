<template>
    <div class="container">
        <h1 class="heading gradient-text">{{$t('Our Skills and Expertise')}}</h1>
        <p class="subheading">
            {{$t('At')}} <span class="gradient-text">Ton Link</span>, {{$t('Our Skills p')}}
        </p>
        <div class="features">
            <div class="card">
                <div class="icon">
                    <span style="transform: scaleX(-1)" class="material-symbols-outlined"> computer </span>
                </div>
                <h4>{{$t('Web Applications')}}</h4>
                <p>
                    {{$t('web p')}}
                </p>
            </div>
            <div class="card">
                <div class="icon">
                    <span style="transform: scaleX(-1)" class="material-symbols-outlined"> work_history </span>
                </div>
                <h4>{{$t('Agile Project Management')}}</h4>
                <p>{{$t('agile p')}}</p>
            </div>
            <div class="card">
                <div class="icon">
                    <span class="material-symbols-outlined"> contacts </span>
                </div>
                <h4>{{$t('User-Centric Approach')}}
                </h4>
                <p>
                    {{$t('User-Centric Approach p')}}
                </p>
            </div>
            <div class="card">
                <div class="icon">
                    <span class="material-symbols-outlined"> lightbulb </span>
                </div>
                <h4>{{$t('Commitment to Innovation')}}
                </h4>
                <p>
                    {{$t('Commitment to Innovation p')}}
                </p>
            </div>
            <div class="card">
                <div class="icon">
                    <span class="material-symbols-outlined"> star_rate_half </span>
                </div>
                <h4>{{$t('Uncompromising Quality')}}
                </h4>
                <p>
                    {{$t('Uncompromising Quality p')}}
                    
                </p>
            </div>
            <div class="card">
                <div class="icon">
                    <span class="material-symbols-outlined"> group_add </span>
                </div>
                <h4>{{$t('Strategic Partnerships')}}
                </h4>
                <p>
                    {{$t('Strategic Partnerships p')}}
                    
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.features {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

.features .heading h1 {
    margin-bottom: 1rem;
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
}

.subheading {
    width: 80%;
    margin: 3em auto;
    text-align: center;

    font-size: 1.2rem;
    line-height: 2rem;
    letter-spacing: 2px;
    font-weight: 300;
}

.features .card {
    background-color: var(--card);
    padding: 1rem;
    border: 2px solid transparent;
    border-radius: 15px;
    transition: all 0.3s ease;
}

.features .card:hover {
    background-color: var(--card-hover);
    border-color: #fff;
}

.features .card .icon {
    display: inline-block;
    background-color: var(--aqua);
    cursor: pointer;
    padding: 3px 9px;
    margin-bottom: 1rem;
    border-radius: 5px;
    transition: all 0.2s ease;
}

.features .card span {
    color: #fff;
    font-size: 2rem;

}

.features .card .icon:hover {
    transform: scale(1.05);
}


.features .card h4 {
    margin-bottom: 1rem;
    color: var(--bg);
    font-size: 1.21rem;
    font-weight: 600;
}

.features .card p {
    margin-bottom: 1rem;
    color: var(--bg);
}

.features .card .join {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;
    gap: 4px;
}

.features .card .join a {
    transition: all 0.3s ease;
}

.features .card .join span {
    cursor: pointer;
    color: var(--bg);
    font-size: 1.2rem;
    transition: all 0.3s ease;
}

.features .card a:hover {
    color: var(--cyan);
}

.features .card .join span:hover {
    color: var(--cyan);
}

@media (max-width: 1200px) {}

@media (max-width: 800px) {
    .features {
        margin-top: 4rem;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 2rem;
    }
}

@media (max-width: 500px) {
    .features .card {
        padding: 2em 2em;
        text-align: center;
    }
    .features .card h4 {
        margin-bottom: 1rem;
        margin-top: 1rem;
        font-size: 1.51rem;
        font-weight: 600;
    }

    .features .card p {
        margin-bottom: 1rem;
        color: var(--bg);
    }
}

@media (max-width: 360px) {}
</style>