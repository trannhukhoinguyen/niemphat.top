<template>
    <a-card style="padding: 24px">
        <div style="top: 0">
            <a-steps v-model:current="current1">
                <a-step title="Vô Minh">
                    <template #icon><QuestionCircleOutlined /></template>
                </a-step>
                <a-step title="Hành">
                    <template #icon><QuestionCircleOutlined /></template>
                </a-step>
                <a-step title="Thức">
                    <template #icon><QuestionCircleOutlined /></template>
                </a-step>
                <a-step title="Danh Sắc">
                    <template #icon><QuestionCircleOutlined /></template>
                </a-step>
                <a-step title="Lục Nhập">
                    <template #icon><QuestionCircleOutlined /></template>
                </a-step>
            </a-steps>
        </div>

        <div style="float: left">
            <a-steps v-model:current="current2" direction="vertical">
                <a-step title="Thức">
                    <template #icon><QuestionCircleOutlined /></template>
                </a-step>
                <a-step title="Danh Sắc">
                    <template #icon><QuestionCircleOutlined /></template>
                </a-step>
                <a-step title="">
                    <template #icon><QuestionCircleOutlined /></template>
                </a-step>
            </a-steps>
        </div>
        <div style="float: right">
            <a-steps v-model:current="current3" direction="vertical">
                <a-step title="Thủ" description="This is a description." />
                <a-step title="Hữu" description="This is a description." />
                <a-step title="6" description="This is a description." />
            </a-steps>
        </div>
        <div style="bottom: 0">
            <a-steps v-model:current="current4">
                <a-step title="1" description="This is a description." />
                <a-step title="2" description="This is a description." />
                <a-step title="3" description="This is a description." />
                <a-step title="4" description="This is a description." />
            </a-steps>
        </div>


    </a-card>
</template>

<script setup>
import {
    QuestionCircleOutlined,
} from "@ant-design/icons-vue";

const current1 = ref(0);
const current2 = ref(0);
const current3 = ref(0);
const current4 = ref(0);


</script>

<style lang="scss">

</style>
