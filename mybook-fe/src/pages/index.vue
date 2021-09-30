<template>
  <div class="container">
    <el-container>
      <el-aside>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu index="1" title="导航一">
            <el-menu-item-group title="分组1">
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <slot name="title">选项4</slot>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <slot name="title">
              <span>导航二</span>
            </slot>
          </el-menu-item>
          <!-- <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <slot name="title">
              <span>导航三</span>
            </slot>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <slot name="title">
              导航四
            </slot>
          </el-menu-item> -->
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>header </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data: () => {
    return {}
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>

<style lang="sass" scoped></style>
