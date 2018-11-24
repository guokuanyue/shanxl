<template>
  <div class="login">
    <div class="form">
      <el-form v-model="formInfo.username" ref="formInfo" label-width="60px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="text">
          <el-input type="text" v-model="formInfo.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="checkPass">
          <el-input type="password" v-model="formInfo.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="login" type="primary" >登录</el-button>
          <el-button @click="resetForm('formInfo')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formInfo: {
          username: '',
          password: ''
        },
      }
    },
    methods: {
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      login(){
        localStorage.setItem('user',JSON.stringify(this.formInfo));
        this.$router.push({name:'home'});
      }
    }
  }
</script>

<style lang="less" scoped>

.login{
  position: fixed;
  top:0;
  bottom: 0;
  width:100%;
  background-color: turquoise;
  display: flex;
  justify-content: center;
  align-items: center;
  .form{
    height: 150px;
    width:350px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px;
    padding-top: 80px;
    border-radius: 10px;
  }
}
</style>