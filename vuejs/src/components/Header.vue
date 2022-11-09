<template>
    <header>
        <h1>{{ title }}</h1>
        <Button @AddTaskModal="$emit('AddTaskModal')" :text="showModal ? 'Close' : 'Add Task'"
            :color="showModal ? 'red' : 'green'" />
    </header>
</template>
  
<script>
import Button from './Button.vue';
export default {
    name: 'Header',
    props: {
        title: '',
        showModal: Boolean

    },
    components: {
        Button
    }
}

</script>


<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>