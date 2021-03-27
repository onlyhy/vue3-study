<template>
    <input
      type="text"
      :value="todoTitle"
      @input="onInputChange"
      v-bind="$attrs"
    />
</template>

<script>

export default {
    props:{
        todoTitle: {
            type: String,
            default: ''
        }
        // 默认名是modelValue
        // modelValue: {
        //     type: String,
        //     default: ''
        // }
    },
    methods: {
        onInputChange(e) {
            this.$emit('update:todoTitle', e.target.value)
            // 默认
            // this.$emit('update:modelValue', e.target.value)
        }
    },
    
}
</script>

<style  scoped>

</style>