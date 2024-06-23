<template>
  <div class="chart-container">
    <div class="chart-section">
      <div class="card left">
        <h1 class="heading">Stock analytics</h1>
        <div class="inside-card">
          <h1>DCF Analysis</h1>
          <h2>Market Price based on dcf analytics 240$</h2>
        </div>
        <div class="inside-card">
          <h1>Analysit Recommendation</h1>
          <h2>MGet concencus analysit recommendations</h2>
        </div>
        <div class="inside-card">
          <h1>Financial Ratios</h1>
          <h2>Get vital finaantial ratios</h2>
        </div>
      </div>
      <div class="card right">
        <h1>Important Company News</h1>
        <h1 class="second-heading">Importnat news tat affect directly stock price and performance</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          amet, nesciunt eos sequi assumenda quibusdam saepe vitae culpa tempore
          ad, eum suscipit quidem veritatis optio, fugiat labore. Dolore, facere
          animi.
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style scoped>
.chart-container {
  margin: 4rem 0;
  padding: 0rem 1rem;
}

.chart-section {
  position: relative;
  padding-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  align-self: center;
  text-align: center;
  color: var(--text);
}

.chart-section .left {
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.chart-section .left .heading {
  color: var(--text);

}

.chart-section .left .inside-card {
  border: 1px solid var(--text);
  border-radius: 5px;
  padding: 0 0.7rem 1.2rem 0.7rem;
}

.chart-section .left h1 {
  color: orange;
  font-size: 1.6rem;
  margin: 1.2rem 0;
}

.chart-section .left h2 {
  font-size: 1.2rem;
  font-weight: 400;
}

.chart-section .chart {
  border-radius: 10px;
}

.chart-section .right {
  border-radius: 10px;
  margin-left: 1rem;
  padding: 1rem;
}

.chart-section .right .second-heading {
  color: orange;
  margin: 1.2rem 0;
  font-size: 1.3rem;
}
</style>