<template>
    <div class="box has-text-weight-bold">
        <slot></slot>
        <!-- slot eh como se fosse o children no react -->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BoxVue'
})
</script>

<style scoped>
.box{
    background: #FAF0CA;
}
</style>