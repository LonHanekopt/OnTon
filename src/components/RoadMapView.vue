<template>
    <div class="bg">
        <div class="container">
            <div class="heading">
                <h1 class="gradient-text variant2">Our RoadMap</h1>
                <p>
                    Our Roadmap is split into three <span class="gradient-text">Milestones</span> each one is represented in the board below
                </p>
            </div>

            <div class="switcher">
                <button id="switch" class="btn active" ref="btn1" @click="setActive(1)">Q1</button>
                <button id="switch" class="btn" ref="btn2" @click="setActive(2)">Q2</button>
                <button id="switch" class="btn" ref="btn3" @click="setActive(3)">Q3</button>
            </div>

            <div class="features">
                <div class="wrapper" id="q1" ref="q1" v-show="shown === 'q1'">
                    <div class="card">
                        <div class="top">
                            <h3>DEX</h3>
                        </div>
                        <h4>DEX: Chart view</h4>
                        <h4>DEX: Limit orders</h4>
                        <p>
                            Audit
                        </p>
                    </div>
                    <div class="card">
                        <div class="top">
                            <h3 class="small">Business Development</h3>
                        </div>
                        <h4>Communication with TON network</h4>
                        <h4>Institution liquidity providers</h4>
                        <p>
                            AMM
                        </p>
                    </div>
                    <div class="card">
                        <div class="top">
                            <h3 class="medium">Marketing</h3>
                        </div>
                        <h4>TON network collab</h4>
                        <h4>Social communities
                            by GEO</h4>
                        <h4>Telegram Ads</h4>
                        <h4>Opinion Leaders</h4>
                    </div>
                    <div class="card">
                        <div class="top">
                            <h3>Bridge</h3>
                        </div>
                        <h4>Bizdev with current protocols</h4>
                        <h4>Liquidity attraction campaign</h4>
                        <p>
                            Audit
                        </p>
                    </div>
                    <div class="card">
                        <div class="top">
                            <h3>Staking</h3>
                        </div>
                        <h4>Liquidity attraction campaign</h4>
                        <h4>Institutional capital</h4>
                        <p>
                            Audit
                        </p>
                    </div>
                    <div class="card">
                        <div class="top">
                            <h3>Lending protocol</h3>
                        </div>
                        <h4>Liquidity attraction campaign</h4>
                        <h4>Institutional capital</h4>
                        <p>
                            Audit
                        </p>
                    </div>
                </div>
                <div class="wrapper second" id="q2" ref="q2" v-show="shown === 'q2'">
                    <div class="card">
                        <div class="top">
                            <h3>Tokenomics</h3>
                        </div>

                    </div>
                    <div class="card">
                        <div class="top">
                            <h3>Drop</h3>
                        </div>
                    </div>
                    <div class="card">
                        <div class="top">
                            <h3>KOL round</h3>
                        </div>
                    </div> 
                    <div class="card">
                        <div class="top">
                            <h3>Liquidity attraction campaign</h3>
                        </div>
                    </div>
                    <div class="card">
                        <div class="top">
                            <h3>Point farming</h3>
                        </div>
                        <h4>Specific rewards for every product</h4>
                    </div>
                    
                </div>
                <div class="wrapper last" id="q3" ref="q3" v-show="shown === 'q3'">
                    <div class="card">
                        <div class="top">
                            <h3>ICO / IDO</h3>
                        </div>
                    </div>
                    <div class="card">
                        <div class="top">
                            <h3>Launchpad
                                ICO / Aggregator</h3>
                        </div>
                    </div>
                    <div class="card">
                        <div class="top">
                            <h3>TGE</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            shown: 'q1',
            activeBtn: 'btn1'
        }
    },
    methods: {
        setActive(num) {
            switch (num) {
                case 1:
                    this.shown = 'q1';
                    this.activeBtn = 'btn1'
                    break;
                case 2:
                    this.shown = 'q2';
                    this.activeBtn = 'btn2'
                    break;
                case 3:
                    this.shown = 'q3';
                    this.activeBtn = 'btn3'
            }
        }
    },
    watch: {
        activeBtn(newV, oldV) {
            if (newV !== oldV) {
                const activeBtnRef = newV;
                const oldBtnRef = oldV;
                this.$refs[activeBtnRef].classList.toggle('active')
                this.$refs[oldBtnRef].classList.toggle('active')
            }
        }
    }
}
</script>

<style scoped>
.bg {
    background: var(--text);
    color: var(--bg);
    position: relative;
}

.heading {
    padding: 1em 0;
}

.heading h1 {
    font-size: 2.5rem;
    letter-spacing: 3px;
    font-weight: 600;
}

.heading p {
    letter-spacing: 3px;
    word-spacing: 3px;
    line-height: 2.2rem;
    font-weight: 400;
    font-size: 1.4rem;
    width: 80%;
    margin-top: 1em;
    margin-left: auto;
    margin-right: auto;
}

.switcher {
    position: absolute;
    top: 30px;
    right: 20px;
    display: flex;
    flex-direction: column;
    gap: 1em;
}

.switcher #switch {
    padding: 1rem 2rem;
    font-size: 1.05rem;
    color: var(--bg);
    background-color: rgba(7, 205, 231, 0.203);
    background-image: var(--switch-gradient);
    opacity: 0.9;
    background-size: 100%;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.6s ease;
}

.switcher #switch:hover {
    background-color: rgb(30, 229, 255);
    background-image: var(--text-gradient-variant2);
}

.switcher #switch.active {
    opacity: 1;
    background-color: rgba(130, 255, 47, 0.868);
    background-image: var(--text-gradient-variant);
}

.features .wrapper {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    animation-name: fadeinLeft;
    animation-duration: 0.5s;
    animation-timing-function: ease-out;
}

.features .wrapper.second {
    animation-name: fadeinRight;
}

.features .wrapper.last {
    animation-name: grow;
}

@keyframes grow {
    0% {
        opacity: 0;
        transform: scale(0.3);
    }

    80% {
        opacity: 1;
        transform: scale(1.1);

    }

    100% {
        opacity: 1;
        transform: scale(1);

    }
}

@keyframes fadeinLeft {
    0% {
        opacity: 0;
        transform: translateX(-400px);
    }

    80% {
        opacity: 1;
        transform: translateX(20px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeinRight {
    0% {
        opacity: 0;
        transform: translateX(400px);
    }

    80% {
        opacity: 1;
        transform: translateX(-20px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
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
    background-color: var(--card-light);
    padding: 1rem;
    border: 2px solid transparent;
    border-radius: 15px;
    transition: all 0.3s ease;
}

.features .card:hover {
    background-color: var(--card-light-hover);
    border-color: #fff;
}

.features .card .top {
    width: 100%;
    margin-bottom: 1rem;
    transition: all 0.2s ease;
}

.features .card .top h3 {
    border-radius: 5px;
    background: rgb(23, 106, 94);
    background: linear-gradient(90deg, rgb(50, 191, 194) 0%, rgb(17, 130, 215) 100%);
    clip-path: polygon(90% 0, 100% 50%, 90% 99%, 0% 100%, 7% 49%, 0% 0%);
    cursor: pointer;

    padding: 10px 10% 10px 20%;
    font-size: 1rem;
    font-weight: 400;
}

.features .card .top:hover {
    transform: scale(1.05);
}

.features .card h4 {
    margin: 2rem 0;
    color: var(--bg);
    font-size: 1.1rem;
    font-weight: 100;
    letter-spacing: 1.3px;
}

.features .card h4::before {
    content: "• ";
}

.features .card p {
    color: var(--bg);
    background-color: rgb(7, 205, 231);
    background-image: var(--text-gradient);
    opacity: 0.9;

    background-size: 100%;

    text-align: center;
    width: 100%;
    margin: 0 auto;
    padding: 0.5rem;
    font-size: 1rem;
    letter-spacing: 3px;
    border-radius: 0.3em;
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
</style>