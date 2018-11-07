<template>
    <el-table :data="list" stripe style="width: 95%;margin:10px auto">
        <el-table-column prop="author" label="作者" width="180">
        </el-table-column>
        <el-table-column prop="display_time" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="title" label="标题">
        </el-table-column>
        <el-table-column label="操作" width="180">
            <template slot-scope="scope">
                <el-button size="mini">编辑</el-button>
                <el-button size="mini" type="danger">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>
<script>
import { getList } from '@/api/table'
export default {
    name: 'Products',
    data() {
        return {
            list: null,
            listLoading: true
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            this.listLoading = true
            getList(this.listQuery).then(response => {
                this.list = response.data.items
                this.listLoading = false
                console.log(this.list)
            })
        }
    }
}
</script>
<style lang="scss">
thead.has-gutter {
	background-color: red !important;
}
</style>


