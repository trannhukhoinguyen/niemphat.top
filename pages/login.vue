<template>
  <form
    ref="formRef"
    :model="formState"
    name="basic"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <div style="text-align: center; margin-bottom: 40px">
      <h2 class="ant-pro-form-login-title">ĐĂNG NHẬP</h2>
    </div>
    <div v-if="otherState.error">
      <alert message="Email hoặc mật khẩu không chính xác." type="error" style="margin-bottom: 24px" show-icon />
    </div>
      <UCard>
          <template #header>
              <UInput
                :padded="true"
                size="sm"
                v-model="value"
                color="primary"
                variant="outline"
                placeholder="Email đăng nhập"
                class="w-full"
              >
                  <template #leading>
                      <UAvatar
                              src="https://avatars.githubusercontent.com/u/739984?v=4"
                              size="3xs"
                              class="mx-0.5"
                      />
                  </template>
                  <template #trailing>
                      <UButton
                              v-show="q !== ''"
                              color="gray"
                              variant="link"
                              :padded="false"
                              @click="q = ''"
                      />
                  </template>
              </UInput>
              <Placeholder class="h-8" />
          </template>

          <UInput
            :padded="true"
            size="sm"
            v-model="q"
            name="q"
            placeholder="Mật khẩu"
            icon="i-noto-v1-key"
            autocomplete="off"
            :ui="{ icon: { trailing: { pointer: '' } } }"
            type="password"
          >
              <template #trailing>
                  <UButton
                    v-show="q !== ''"
                    color="gray"
                    variant="link"
                    :padded="false"
                    @click="q = ''"
                  />
              </template>
          </UInput>
          <Placeholder class="h-32" />

          <template #footer>
              <div style="display: flex; justify-content: center">
                  <UButton>Đăng nhập</UButton>
              </div>
              <div style="display: flex; justify-content: center">
                  <router-link to="/forgot-password"> Quên mật khẩu? </router-link>
              </div>
              <Placeholder class="h-8" />
          </template>
      </UCard>
  </form>
</template>

<script setup>
const value = ref('')
const q = ref('')
const formRef = ref();
const formState = reactive({
  email: '',
  password: '',
  // remember: true,
});
const otherState = reactive({
  error: false,
});

const onFinish = (values) => {
  let input = { ...values };

  for (let key in input) {
    if (input.hasOwnProperty(key)) {
      if (input[key] === null || input[key] === '') {
        delete input[key];
      }
    }
  }

  // console.log('Success:', input);

  mutate({
    input: input,
  })
    .then(({ data }) => {
      otherState.error = false;
      formRef.value.resetFields();
      // console.log('xxxxxxxx', data.login.accessToken)
      localStorage.setItem('apollo:crm.token', data.login.accessToken);
    })
    .catch((e) => {
      otherState.error = true;
      formState.password = '';
    });
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
</script>

<style scope lang="scss">
.i-noto-v1-key {
    background: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 128 128' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='%23fcc21b' d='M68.53 76.78c5.56 2.87 11.86 4.53 18.55 4.53c22.3 0 40.38-18.08 40.38-40.38c0-22.3-18.08-40.38-40.38-40.38c-22.3 0-40.39 18.08-40.39 40.38c0 6.69 1.65 12.99 4.53 18.54L29.39 81.3v11.54H17.85v11.53H6.3l-5.77 5.78v17.31h17.31zm18.55-47.4c0-6.37 5.16-11.54 11.54-11.54c6.37 0 11.53 5.16 11.53 11.54c0 6.38-5.16 11.54-11.53 11.54c-6.38 0-11.54-5.16-11.54-11.54'/%3E%3C/svg%3E") no-repeat;
    background-size: 100% 100%;
    background-color: transparent;
    width: 1.2em;
    height: 1.2em;
}
</style>
