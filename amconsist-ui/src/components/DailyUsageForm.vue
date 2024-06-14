<template>
  <!-- ... -->
</template>

<script>
import axios from '@/axios';

export default {
  data() {
    return {
      form: {
        date: '',
        route_id: '',
        equipment_type_id: '',
        quantity: ''
      },
      routes: [],
      equipmentTypes: []
    };
  },
  created() {
    this.fetchRoutes();
    this.fetchEquipmentTypes();
  },
  methods: {
    fetchRoutes() {
      axios.get('/routes')
        .then(response => {
          this.routes = response.data;
        })
        .catch(error => {
          console.error('Error fetching routes:', error);
        });
    },
    fetchEquipmentTypes() {
      axios.get('/equipment_types')
        .then(response => {
          this.equipmentTypes = response.data;
        })
        .catch(error => {
          console.error('Error fetching equipment types:', error);
        });
    },
    submitForm() {
      axios.post('/daily_usages', this.form)
        .then(() => {  // Removed 'response' as it's not used
          alert('Daily usage record created successfully!');
          this.$router.push('/daily_usages');
        })
        .catch(error => {
          console.error('Error creating daily usage record:', error);
        });
    }
  }
};
</script>