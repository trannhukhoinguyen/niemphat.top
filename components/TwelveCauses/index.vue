<template>
  <a-card style="padding: 24px" class="twelve-cause-card">
    <div style="top: 0" title="Thập Nhị Nhân Duyên (12-linked chain of causation)">
        <a-steps v-model:current="current">
            <a-step title="Vô Minh" description="(Ignorance)">
                <template #icon>
                    <a-avatar size="12" style="background-color: white; display: flex; align-items: center; justify-content: center">
                        <template #icon>
                            <a-image :width="25" src="/assets/images/icons/vo_minh.png" size="small"/>
                        </template>
                    </a-avatar>
                </template>
            </a-step>
            <a-step title="Hành" description="(Actions)">
                <template #icon>
                    <a-avatar size="12" style="background-color: white; display: flex; align-items: center; justify-content: center">
                        <template #icon>
                            <a-image
                                style="-webkit-transform: scaleX(-1); transform: scaleX(-1)"
                                :width="25"
                                src="/assets/images/icons/hanh.png"
                                size="small"
                            />
                        </template>
                    </a-avatar>
                </template>
            </a-step>
            <a-step title="Thức" description="(Consciousness)">
                <template #icon>
                    <a-avatar size="12" style="background-color: white; display: flex; align-items: center; justify-content: center">
                        <template #icon>
                            <a-image :width="25" src="/assets/images/icons/thuc.png" size="small"/>
                        </template>
                    </a-avatar>
                </template>
            </a-step>
            <a-step title="Danh Sắc" description="(Name and Form)">
                <template #icon>
                    <a-avatar size="12" style="background-color: white; display: flex; align-items: center; justify-content: center">
                        <template #icon>
                            <a-image :width="25" src="/assets/images/icons/danh_sac.png" size="small"/>
                        </template>
                    </a-avatar>
                </template>
            </a-step>
            <a-step title="Lục Nhập" description="(Six Entrances)">
                <template #icon>
                    <a-avatar size="12" style="background-color: white; display: flex; align-items: center; justify-content: center">
                        <template #icon>
                            <a-image :width="25" src="/assets/images/icons/luc_nhap.png" size="small"/>
                        </template>
                    </a-avatar>
                </template>
            </a-step>
            <a-step title="Xúc" description="(Contact)">
                <template #icon>
                    <a-avatar size="12" style="background-color: white; display: flex; align-items: center; justify-content: center">
                        <template #icon>
                            <a-image :width="25" src="/assets/images/icons/xuc.png" size="small"/>
                        </template>
                    </a-avatar>
                </template>
            </a-step>
            <a-step title="Thọ" description="(Sensation)">
                <template #icon>
                    <a-avatar size="12" style="background-color: white; display: flex; align-items: center; justify-content: center">
                        <template #icon>
                            <a-image :width="25" src="/assets/images/icons/tho.png" size="small"/>
                        </template>
                    </a-avatar>
                </template>
            </a-step>
            <a-step title="Ái" description="(Desire)">
                <template #icon>
                    <a-avatar size="12" style="background-color: white; display: flex; align-items: center; justify-content: center">
                        <template #icon>
                            <a-image :width="25" src="/assets/images/icons/ai.png" size="small"/>
                        </template>
                    </a-avatar>
                </template>
            </a-step>
            <a-step title="Thủ" description="(Clinging)">
                <template #icon>
                    <a-avatar size="12" style="background-color: white; display: flex; align-items: center; justify-content: center">
                        <template #icon>
                            <a-image :width="25" src="/assets/images/icons/thu.png" size="small"/>
                        </template>
                    </a-avatar>
                </template>
            </a-step>
            <a-step title="Hữu" description="(Existence)">
                <template #icon>
                    <a-avatar size="12" style="background-color: white; display: flex; align-items: center; justify-content: center">
                        <template #icon>
                            <a-image :width="25" src="/assets/images/icons/huu.png" size="small"/>
                        </template>
                    </a-avatar>
                </template>
            </a-step>
            <a-step title="Sanh" description="(Birth)">
                <template #icon>
                    <a-avatar size="12" style="background-color: white; display: flex; align-items: center; justify-content: center">
                        <template #icon>
                            <a-image :width="25" src="/assets/images/icons/sanh.png" size="small"/>
                        </template>
                    </a-avatar>
                </template>
            </a-step>
            <a-step title="Lão Tử" description="(Aging and Death)">
                <template #icon>
                    <a-avatar size="12" style="background-color: white; display: flex; align-items: center; justify-content: center">
                        <template #icon>
                            <a-image :width="25" src="/assets/images/icons/lao_tu.png" size="small"/>
                        </template>
                    </a-avatar>
                </template>
            </a-step>
        </a-steps>
    </div>
  </a-card>
</template>

<script setup>

const current = ref(0);
</script>

<style scoped lang="scss">
.twelve-cause-card {
    .ant-steps-item-title {
        font-family: Vernada;
        font-weight: 700;
        color: grey;
    }
}
</style>
