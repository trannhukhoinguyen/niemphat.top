<template>
    <div class="default-layout-wrapper">
      <div class="top-parts">
          <div class="menu">
              <AllMenu />
          </div>
          <div class="twelve-causes">
              <TwelveCauses />
          </div>
      </div>
        <a-button @click="warning">Warning</a-button>
      <div class="middle-parts">
          <div class="sky">
              <Sky />
          </div>
          <div class="">

          </div>
      </div>

      <div class="bottom-parts">
           <Ocean />
      </div>

    </div>
</template>

<script setup>
import { Modal } from "ant-design-vue";

const modal = Modal;
const warning = () => {
    Modal.warning({
        title: 'This is a warning message',
        content: 'some messages...some messages...',
        onCancel() {
            modal.warning();
        },
    });
};
</script>

<style scoped lang="scss">
.default-layout-wrapper {

}
</style>
