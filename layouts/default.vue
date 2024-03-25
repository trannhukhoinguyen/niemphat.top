<template>
  <div class="container___1sYa-">
    <div class="content___2zk1-">
      <div class="ant-pro-form-login-container">
        <div class="ant-pro-form-login-top">
          <div class="ant-pro-form-login-header">
          </div>
        </div>
        <div class="ant-pro-form-login-main">
          <slot />
        </div>
      </div>
    </div>
    <footer class="ant-layout-footer" style="padding: 0px">
      <div class="ant-pro-global-footer">
        <div class="ant-pro-global-footer-copyright">
          <p>Nguyện sanh Tây-phương Tịnh độ trung</p>
          <p>Cửu phẩm Liên hoa vi phụ mẫu</p>
          <p>Hoa khai kiến Phật ngộ Vô sanh</p>
          <p>Bất thối Bồ-tát vi bạn lữ</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - A Di Đà Phật` : 'A Di Đà Phật';
  },
});
</script>

<style lang="scss">
.container___1sYa- {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  background: #f0f2f5;
}
.ant-layout-footer {
  padding: 24px 50px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  background: #f0f2f5;
  flex: 0 0 auto;
}
.ant-pro-global-footer {
  margin: 48px 0 24px;
  padding: 0 16px;
  text-align: center;
}
.ant-pro-global-footer-copyright {
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}
.content___2zk1- {
  flex: 1 1;
  padding: 32px 0;
}
@media (min-width: 768px) {
  .content___2zk1- {
    padding: 32px 0 24px;
  }
}
.ant-pro-form-login-title {
  position: relative;
  top: 2px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
  font-size: 33px;
}
.ant-pro-form-login-container {
  display: flex;
  flex: 1 1;
  flex-direction: column;
  height: 100%;
  padding: 32px 0;
  overflow: auto;
  background: inherit;
}
@media (min-width: 768px) {
  .ant-pro-form-login-container {
    padding: 32px 0 24px;
    background-repeat: no-repeat;
    background-position: center 110px;
    background-size: 100%;
  }
}
.ant-pro-form-login-top {
  text-align: center;
}
.ant-pro-form-login-header {
  display: flex;
  align-items: center;
  justify-content: center;
  /*height: 44px;*/
  /*line-height: 44px;*/
}
.ant-pro-form-login-logo {
  /*width: 44px;*/
  /*height: 44px;*/
  vertical-align: top;
}
.ant-pro-form-login-logo img {
  max-width: 100%;
  height: 60px;
}
.ant-pro-form-login-desc {
  margin-top: 12px;
  margin-bottom: 40px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}
.ant-pro-form-login-main {
  min-width: 328px;
  max-width: 500px;
  margin: 0 auto;
  width: 328px;
}
.login-form-button {
  width: 100%;
}
</style>
