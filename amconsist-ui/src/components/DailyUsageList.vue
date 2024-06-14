<template>
  <div>
    <h1>Daily Usage Records</h1>
    <ul>
      <li v-for="usage in dailyUsages" :key="usage.id">
        {{ usage.date }} - {{ usage.route.name }} - {{ usage.equipment_type.name }} - {{ usage.quantity }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from '@/axios';

export default {
  data() {
    return {
      dailyUsages: []
    };
  },
  created() {
    this.fetchDailyUsages();
  },
  methods: {
    fetchDailyUsages() {
      axios.get('/daily_usages')
        .then(response => {
          this.dailyUsages = response.data;
        })
        .catch(error => {
          console.error('Error fetching daily usages:', error);
        });
    }
  }
};
</script>
