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
      <h2 class="ant-pro-form-login-title">QUÊN MẬT KHẨU</h2>
    </div>
    <div v-if="otherState.error">
      <alert
        message="Yêu cầu quên mật khẩu không thành công."
        type="error"
        style="margin-bottom: 24px"
        show-icon
      />
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

      <template #footer>
        <div style="display: flex; justify-content: center">
          <UButton>Gửi</UButton>
        </div>
        <Placeholder class="h-8" />
      </template>
    </UCard>
  </form>
</template>

<script setup lang="ts">
const value = ref("");
const q = ref("");
const formRef = ref();
const formState = reactive({
  email: "",
});
const otherState = reactive({
  error: false,
});
const router = useRouter();
const onFinish = (values) => {
  let input = { ...values };

  for (let key in input) {
    if (input.hasOwnProperty(key)) {
      if (input[key] === null || input[key] === "") {
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
      router.push("/login");
    })
    .catch((e) => {
      otherState.error = true;
      formRef.value.resetFields();
    });
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
</script>

<style scope lang="scss"></style>
