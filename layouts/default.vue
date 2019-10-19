<template>
    <v-app dark>
        <v-app-bar app>
            <v-toolbar-title class="headline text-uppercase">
                <span class="font-weight-medium">xin</span>
                <span class="font-weight-light">struct</span>
            </v-toolbar-title>
        </v-app-bar>

        <v-content>
            <v-container>
                <nuxt />
            </v-container>
        </v-content>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'App',
    data: () => ({
        //
    })
})
</script>
