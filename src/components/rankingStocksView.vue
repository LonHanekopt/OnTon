<template>
    <div class="container">
        <h1 class="heading">Professional Analysis</h1>
        <p class="subHeading">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero repellat
            magni voluptate autem porro commodi cumque cupiditate, est inventore
            aspernatur praesentium culpa recusandae? Eligendi porro vero quod nihil,
            esse voluptate.
        </p>
        <h1 class="heading">
            Top Action ranked by market cap with fundamental raw DATA
        </h1>

        <div class="table">
            <div class="title">
                <div class="border-r">No</div>
                <div class="border-r">Ticker</div>
                <div class="border-r">Market Cap</div>
                <div class="border-r">P/E</div>
                <div class="border-r">P/B</div>
                <div class="">AD</div>
            </div>
            <div class="cards">
                <div class="card">
                    <div class="item no border-r">1</div>
                    <div class="item link border-r"><a href="#">AAPL</a></div>
                    <div class="item market-cap border-r">1,000,000,000.00</div>
                    <div class="item pb border-r">10</div>
                    <div class="item pe border-r">15</div>
                    <div class="item ad">25</div>
                </div>
                <div class="card">
                    <div class="item no border-r">1</div>
                    <div class="item link border-r"><a href="#">AAPL</a></div>
                    <div class="item market-cap border-r">1,000,000,000.00</div>
                    <div class="item pb border-r">10</div>
                    <div class="item pe border-r">15</div>
                    <div class="item ad">25</div>
                </div>
                <div class="card">
                    <div class="item no border-r">1</div>
                    <div class="item link border-r"><a href="#">AAPL</a></div>
                    <div class="item market-cap border-r">1,000,000,000.00</div>
                    <div class="item pb border-r">10</div>
                    <div class="item pe border-r">15</div>
                    <div class="item ad">25</div>
                </div>
                <div class="card">
                    <div class="item no border-r">1</div>
                    <div class="item link border-r"><a href="#">AAPL</a></div>
                    <div class="item market-cap border-r">1,000,000,000.00</div>
                    <div class="item pb border-r">10</div>
                    <div class="item pe border-r">15</div>
                    <div class="item ad">25</div>
                </div>
                <div class="card">
                    <div class="item no border-r">1</div>
                    <div class="item link border-r"><a href="#">AAPL</a></div>
                    <div class="item market-cap border-r">1,000,000,000.00</div>
                    <div class="item pb border-r">10</div>
                    <div class="item pe border-r">15</div>
                    <div class="item ad">25</div>
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
table {
  color: #ccc;
  border-block: 3px solid white;
  font-size: 1.4rem;
  margin: 10px;
}

.table {
  margin-top: 40px;
  padding: 0;
  max-width: 1200px;
  border: 1px solid white;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}

.table .title {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr 1fr 1fr;
  gap: 1rem;
  padding: 1.3rem 0rem;
  text-align: center;
  border-bottom: 1px solid white;
  font-weight: 700;
  font-size: 20px;
}

.table .cards {
  gap: 1rem;
}

.table .card:nth-child(2n) {
  background-color: #252529;
}

.table .card {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr 1fr 1fr;
  gap: 1rem;
  padding: 2rem 0rem;
  font-weight: 600;
  font-size: 18px;
}

.table .card:hover {
  background-color: #0e0e10;
}


.table .item {
  text-align: center;
}
</style>