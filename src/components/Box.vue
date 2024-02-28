<template>
    <div class="box has-text-weight-bold" :style="estilos">
        <slot></slot>
        <!-- slot eh como se fosse o children no react -->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BoxVue',
    data () {
        return {
            estilos: {
                background: '#FAF0CA'
            }
        }
    }
})
</script>
