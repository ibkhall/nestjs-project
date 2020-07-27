<template>
    <v-card class="pa-4">
        <v-toolbar dense dark color="primary">
            <v-toolbar-title>Products</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-btn color="success" @click="dialog= true" small><v-icon>mdi-plus-circle</v-icon> Add</v-btn>
        </v-toolbar>
        <v-dialog v-model="dialog" persistent max-width="400">
            <v-card>
                <v-form @submit.prevent="onSubmit">
                    <v-container>
                        <v-text-field v-model="form.name" outlined label="Title"></v-text-field>
                        <v-textarea v-model="form.content" outlined label="Content"></v-textarea>
                        <v-autocomplete
                                label="Category"
                                outlined
                                item-value="id"
                                item-text="name"
                                v-model="form.category"
                                :items="categories"
                        >
                        </v-autocomplete>
                        <v-autocomplete
                                label="Tags"
                                outlined
                                item-value="id"
                                item-text="name"
                                multiple
                                v-model="form.tags"
                                :items="tags"
                        >
                        </v-autocomplete>
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
            <template v-slot:item.tags="{ item }">
                <v-chip x-small color="info" class="ma-1" v-for="tag in item.tags" v-html="tag.name" :key="tag.id"></v-chip>
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
        categories: [],
        tags: [],
        form: {},
        headers: [
            {
                text: 'ID',
                value: 'id',
            },
            {
                text: 'Title',
                value: 'name',
            },
            {
                text: 'Content',
                value: 'content',
            },
            {
                text: 'Category',
                value: 'category.name',
            },
            {
                text: 'Tags',
                value: 'tags',
            },
            {
                text: 'Actions',
                value: 'actions',
                align: 'center',
                width: 100
            }
        ],
    }),
     mounted() {
        axios.get('/categories').then((response) => {
            this.categories = response.data
        })

         axios.get('/tags').then((response) => {
             this.tags = response.data
         })
        this.fetchData()
    },

    methods: {
        fetchData() {
            axios.get('/products').then((res) => {
                console.log(res)
                this.data = res.data
            })
        },
        onSubmit() {
            if(this.form.id) {
                this.form.tags = this.tags.filter((item) => this.form.tags.includes(item.id))
                this.form.category = this.categories.find((item) => item.id === this.form.category)
                axios.put('/products/'+this.form.id, this.form).then((res) => {
                    this.fetchData()
                    this.close()
                })
            }else {
                this.form.tags = this.tags.filter((item) => this.form.tags.includes(item.id))
                this.form.category = this.categories.find((item) => item.id === this.form.category)
                axios.post('/products', this.form).then((res) => {
                    this.fetchData()
                    this.close()
                })
            }
        },

        edit(item) {
            this.form = item
            this.form.tags = item.tags.map((el) => el.id)
            this.dialog = true
        },

        remove(item) {
            axios.delete('/products/'+item.id).then((response) => {
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