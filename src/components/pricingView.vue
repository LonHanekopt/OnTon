<template>
    <div class="pricing">
        <div class="card">
            <div class="icon">
                <span class="material-symbols-outlined"> star </span>
                <span class="material-symbols-outlined"> star </span>
                <span class="material-symbols-outlined"> star_half </span>
            </div>
            <h1>Hello</h1>
            <p>Paragraph</p>
            <div class="button">
                <button class="btn">Click Me</button>
            </div>
        </div>
        <div class="card">
            <div class="icon">
                <span class="material-symbols-outlined"> star </span>
                <span class="material-symbols-outlined"> star </span>
                <span class="material-symbols-outlined"> star </span>
                <span class="material-symbols-outlined"> star_half </span>
            </div>
            <h1>Hello</h1>
            <p>Paragraph</p>
            <div class="button">
                <button class="btn">Click Me</button>
            </div>
        </div>
        <div class="card">
            <div class="icon">
                <span class="material-symbols-outlined"> star </span>
                <span class="material-symbols-outlined"> star </span>
                <span class="material-symbols-outlined"> star </span>
                <span class="material-symbols-outlined"> star </span>
                <span class="material-symbols-outlined"> star </span>
            </div>
            <h1>Hello</h1>
            <p>Paragraph</p>
            <div class="button">
                <button class="btn">Click Me</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.pricing {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row: auto;
    gap: 2rem;
}

.pricing .card {
    background-color: rgb(53, 53, 53);
    padding: 2rem 2rem;
    border: 2px solid transparent;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-radius: 10px;
    transition: all 0.3s ease;
}

.pricing .card:hover {
    background-color: #3c3c3c;
    color: #fff;
    border-color: #fff;
}

.pricing .card .icon span {
    margin: 0;
    font-variation-settings: 
    'FILL' 1;
    color: rgb(235, 228, 31);
}

.pricing .card .content {}

.pricing .card h1 {
    color: #fff;
    font-size: 2.2rem;
    letter-spacing: 2px;
    font-weight: 600;
}

.pricing .card p {
    font-size: 1rem;
    color: #ccc;
}

.pricing .card button {
    margin-top: 1rem;
    color: #fff;
    background-color: transparent;
    border: 2px solid #fff;
}

.pricing .card button:hover {
    background-color: blue;
    border-color: blue;
}
</style>