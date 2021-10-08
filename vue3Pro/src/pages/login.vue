<template>
  <div class="container">
    <el-form
      :rules="rules"
      :model="formData"
      ref="loginForm"
      label-position="right"
      label-width="100px"
    >
      <el-form-item label="用户名：" prop="userName">
        <el-input type="text" v-model="formData.userName" />
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input type="text" v-model="formData.password" />
      </el-form-item>
      <el-form-item>
        <el-button @click="submit">提交</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { ref, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const loginForm = ref(null);
    const rules = {
      userName: [
        {
          required: true,
          message: '请输入用户名',
          trigger: 'blur',
        },
      ],
      password: [
        {
          required: true,
          message: '请输入密码',
          trigger: 'blur',
        },
      ],
    };
    const formData = reactive({
      userName: '',
      password: '',
    });
    const submit = () => {
      loginForm.value.validate((vali) => {
        if (vali) {
          store.commit('changeUser', formData);
          router.push({ path: '/' });
        } else {
          ElMessage.error({
            message: '用户名或者密码错误',
          });
        }
      });
    };
    const reset = () => {
      loginForm.value.resetFields();
    };
    return {
      rules,
      loginForm,
      formData,
      submit,
      reset,
    };
  },
};
</script>
