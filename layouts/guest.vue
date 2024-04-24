<template>
  <div class="guest-layout">
    <div class="guest-layout-content">
      <div class="pro-form-login-container">
        <div class="pro-form-login-top">
          <div class="pro-form-login-header"></div>
        </div>
        <div class="pro-form-login-main">
          <slot />
        </div>
      </div>
    </div>
    <!--    <footer class="layout-footer" style="padding: 0px">
      <div class="pro-global-footer">
        <div class="pro-global-footer-copyright">
            <p>Nguyện sanh Tây-phương Tịnh độ trung</p>
            <p>Cửu phẩm Liên hoa vi phụ mẫu</p>
            <p>Hoa khai kiến Phật ngộ Vô sanh</p>
            <p>Bất thối Bồ-tát vi bạn lữ</p>
        </div>
      </div>
    </footer>-->
  </div>
</template>

<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? titleChunk : "guest-layout";
  },
});
</script>

<style lang="scss">
.guest-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  background: #f0f2f5;

  .layout-footer {
    padding: 24px 50px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    background: #f0f2f5;
    flex: 0 0 auto;
  }
  .pro-global-footer {
    margin: 48px 0 24px;
    padding: 0 16px;
    text-align: center;
  }
  .pro-global-footer-copyright {
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
  }
  .guest-layout-content {
    flex: 1 1;
    padding: 32px 0;
  }
  @media (min-width: 768px) {
    .guest-layout-content {
      padding: 32px 0 24px;
    }
  }
  .pro-form-login-title {
    position: relative;
    top: 2px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    font-size: 33px;
  }
  .pro-form-login-container {
    display: flex;
    flex: 1 1;
    flex-direction: column;
    height: 100%;
    padding: 32px 0;
    overflow: auto;
    background: inherit;
  }
  @media (min-width: 768px) {
    .pro-form-login-container {
      padding: 32px 0 24px;
      background-repeat: no-repeat;
      background-position: center 110px;
      background-size: 100%;
    }
  }
  .pro-form-login-top {
    text-align: center;
  }
  .pro-form-login-header {
    display: flex;
    align-items: center;
    justify-content: center;
    /*height: 44px;*/
    /*line-height: 44px;*/
  }
  .pro-form-login-logo {
    /*width: 44px;*/
    /*height: 44px;*/
    vertical-align: top;
  }
  .pro-form-login-logo img {
    max-width: 100%;
    height: 60px;
  }
  .pro-form-login-desc {
    margin-top: 12px;
    margin-bottom: 40px;
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
  }
  .pro-form-login-main {
    min-width: 328px;
    max-width: 500px;
    margin: 0 auto;
    width: 328px;
  }
  .login-form-button {
    width: 100%;
  }
}
</style>
