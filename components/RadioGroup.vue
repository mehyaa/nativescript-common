<template>
    <StackLayout class="radio-group">
        <StackLayout
            v-for="item in items"
            :key="valueKey ? item[valueKey] : item"
            class="radio-group-item"
            orientation="horizontal"
            @tap="select(item)">
            <label
                v-if="isSelected(item)"
                class="mdi icon">
                <Span>{{ 'radio_button_checked' | fonticon }}</Span>
            </Label>

            <label
                v-else
                class="mdi icon">
                <Span>{{ 'radio_button_unchecked' | fonticon }}</Span>
            </Label>

            <Label
                class="label"
                :text="labelKey ? item[labelKey] : item"
                :textWrap="true" />
        </StackLayout>
    </StackLayout>
</template>

<style lang="scss" scoped>

.radio-group {
    .radio-group-item {
        .icon {
            margin-top: 3;
            margin-right: 5;
            vertical-align: top;
        }

        .label {
            vertical-align: top;
        }
    }
}

</style>

<script>

export default {
    name: 'RadioGroup',

    props: {
        value: {
            required: false
        },

        items: {
            type: Array,
            required: true
        },

        valueKey: String,

        labelKey: String
    },

    methods: {
        isSelected(item) {
            const vm = this;

            let value = item;

            if (vm.valueKey) {
                value = item[vm.valueKey];
            }

            return value === vm.value;
        },

        select(item) {
            const vm = this;

            let value = item;

            if (vm.valueKey) {
                value = item[vm.valueKey];
            }

            vm.$emit('input', value);
        }
    }
};

</script>
