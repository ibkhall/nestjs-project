<template>
    <v-card class="pa-4">
        <v-toolbar dense dark color="primary">
            <v-toolbar-title>Categories</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-btn color="success" @click="dialog= true" small><v-icon>mdi-plus-circle</v-icon> Add</v-btn>
        </v-toolbar>
        <v-dialog v-model="dialog" persistent max-width="400">
            <v-card>
                <v-form @submit.prevent="onSubmit">
                    <v-container>
                        <v-text-field v-model="form.name" outlined label="Name"></v-text-field>
                    </v-container>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="text-right" @click="close" color="secondary">Cancel</v-btn>
                        <v-btn class="text-right" type="submit" color="primary">Save</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>
        <v-data-table
                dense
                :items="data"
                :headers="headers"
                :page.sync="page"
                :items-per-page="perPage"
                hide-default-footer
                @page-count="pageCount = $event"
        >
            <template v-slot:item.actions="{ item }">
                <v-btn small icon color="warning" @click="edit(item)"><v-icon>mdi-pencil</v-icon></v-btn>
                <v-btn small icon color="error" @click="remove(item)"><v-icon>mdi-trash-can</v-icon></v-btn>
            </template>
        </v-data-table>
        <v-pagination v-model="page" :length="pageCount"></v-pagination>
    </v-card>
</template>

<script>
    export default {
        data: () => ({
            item: 3,
            page: 1,
            dialog: false,
            perPage: 10,
            pageCount: 0,
            data: [],
            form: {},
            headers: [
                {
                    text: 'ID',
                    value: 'id',
                },
                {
                    text: 'Name',
                    value: 'name',
                },
                {
                    text: 'Actions',
                    value: 'actions',
                    align: 'center'
                }
            ],
        }),
        mounted() {
            this.fetchData()
        },

        methods: {
            fetchData() {
                axios.get('/categories').then((res) => {
                    console.log(res)
                    this.data = res.data
                })
            },
            onSubmit() {
                if(this.id) {
                    axios.put('/categories/'+this.form.id, this.form).then((res) => {
                        this.fetchData()
                        this.close()
                    })
                }else {
                    axios.post('/categories', this.form).then((res) => {
                        this.fetchData()
                        this.close()
                    })
                }
            },

            edit(item) {
                this.form = item
                this.dialog = true
            },

            remove(item) {
                axios.delete('/categories/'+item.id).then((response) => {
                    console.log(response)
                    this.fetchData()
                })
            },

            close() {
                this.dialog = false
                this.form = {}
            }
        }
    }
</script>