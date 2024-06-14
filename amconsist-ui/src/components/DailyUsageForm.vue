<template>
  <div>
    <h1>New Daily Usage Record</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="date">Date:</label>
        <input type="date" v-model="form.date" required />
      </div>
      <div>
        <label for="route">Route:</label>
        <select v-model="form.route_id" required>
          <option v-for="route in routes" :key="route.id" :value="route.id">{{ route.name }}</option>
        </select>
      </div>
      <div>
        <label for="equipment_type">Equipment Type:</label>
        <select v-model="form.equipment_type_id" required>
          <option v-for="type in equipmentTypes" :key="type.id" :value="type.id">{{ type.name }}</option>
        </select>
      </div>
      <div>
        <label for="quantity">Quantity:</label>
        <input type="number" v-model="form.quantity" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
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
        .then(response => {
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
