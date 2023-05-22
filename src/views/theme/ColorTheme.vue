<template>
  <CCol :xl="2" :md="4" :sm="6" :xs="12" class="mb-4">
    <div
      :class="['theme-color w-75 rounded mb-3', color]"
      style="padding-top: 75%"
    ></div>
    <slot></slot>
  </CCol>
</template>

<script>
import {CCol} from "@coreui/vue";

export default {
  name: 'ColorTheme',
  components: {CCol},
  props: {
    color: {
      type: String,
      default: undefined,
    },
  },
}
</script>
