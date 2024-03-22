<template>
    <UContainer>
        <UPage>
            <template #left>
                <UAside :links="links">
                    <UNavigationTree :links="navigationLinks" default-open :multiple="false" />
                </UAside>
            </template>

            <slot />
        </UPage>
    </UContainer>
</template>
