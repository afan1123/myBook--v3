<template>
  <div class="container">
    <el-table :data="data.tableData" style="width: 100%">
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column label="操作">
        <template v-slot="item">
          <el-button type="text" @click="editClick(item.row)">详情</el-button>
          <el-button type="text" @click="deleteClick(item.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import staff from '../services/staff';
import { reactive, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const data = reactive({
  tableData: [],
});
const router = useRouter();
const editClick = (item) => {
  console.log(item);
  router.push({ name: 'edit', params: { id: item.id } });
};

const deleteClick = (item) => {
  console.log(item);
};

onMounted(async () => {
  const result = await staff.fetchStaff();
  data.tableData.push(...result);
});
</script>
