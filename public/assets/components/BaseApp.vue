<template>
    <v-app>
        <v-main>
            <v-container fluid>
                <v-toolbar dark dense shaped color="primary">
                    <v-toolbar-title>Learn App</v-toolbar-title>
                </v-toolbar>
                <v-row>
                    <v-col md="3">
                        <v-card
                                class="mx-auto"
                                max-width="300"
                                tile
                        >
                            <v-list shaped dense>
                                <v-subheader>Menu</v-subheader>
                                <v-list-item-group v-model="item" color="primary">
                                    <v-list-item
                                            :to="item.path"
                                            v-for="(item, i) in items"
                                            :key="i"
                                    >
                                        <v-list-item-icon>
                                            <v-icon v-text="item.icon"></v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            <v-list-item-title v-text="item.text"></v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                        </v-card>
                    </v-col>
                    <v-col md="9">
                        <router-view></router-view>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    export default {
        data: () => ({
            item: 3,
            items: [
                { text: 'Products', icon: 'mdi-post', path: '/products' },
                { text: 'Categories', icon: 'mdi-graph', path: '/categories' },
                { text: 'Tags', icon: 'mdi-tag', path: '/tags' },
                { text: 'Users', icon: 'mdi-account-multiple', path: '/users' },
            ],
        }),
    }
</script>