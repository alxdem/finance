<template>
  <div>
    <el-container>
      <a href="#">fdsfsd</a>
      <form action="/">
        <Input/>
      </form>
      <el-button>Кнопка</el-button>
    </el-container>

  </div>
</template>
<script>
import Input from '@/components/form/Input';

export default {
  name: 'login',
  components: {
    Input
  }
}
</script>