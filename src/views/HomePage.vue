<template>
  <nav>
    <navView />
  </nav>

  <header class="container">
    <headerView />
  </header>

  <section ref="scenario-analysis">
    <scenarioAnalysisView />
  </section>

  <section class="about" id="about">
    <aboutUs />
  </section>

  <section>
    <RoadMapView />
  </section>

  <section>
    <teamSectionView />
  </section>

</template>

<script>
import headerView from '@/components/headerView.vue';
import scenarioAnalysisView from '@/components/scenarioAnalysisView.vue';
import aboutUs from '@/components/aboutUs.vue';
import RoadMapView from '@/components/RoadMapView.vue';
import teamSectionView from '@/components/teamSectionView.vue';

export default {
  components: {
    headerView,
    scenarioAnalysisView,
    teamSectionView,
    RoadMapView,
    aboutUs,
  }
};
</script>

<style lang="css"></style>