<template>
    <v-layout column justify-center align-center>
        <under-construction />
    </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import UnderConstruction from '~/components/UnderConstruction.vue'

export default Vue.extend({
    components: {
        UnderConstruction
    }
})
</script>
