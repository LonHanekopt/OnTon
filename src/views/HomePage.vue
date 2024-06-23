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
  
    <section class="container">
      <teamSectionView />
    </section>
  
    <section class="container">
      <footerView />
    </section>
  </template>
  
  <script>
  import headerView from '@/components/headerView.vue';
  import scenarioAnalysisView from '@/components/scenarioAnalysisView.vue';
  import aboutUs from '@/components/aboutUs.vue';
  import teamSectionView from '@/components/teamSectionView.vue';
  
  export default {
    components: {
      headerView,
      scenarioAnalysisView,
      teamSectionView,
      aboutUs,
  
    }
  };
  </script>
  
  <style lang="css">
  
  </style>
  