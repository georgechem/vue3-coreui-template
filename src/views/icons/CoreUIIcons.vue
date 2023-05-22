<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>CoreUI Icons Free</CCardHeader>
        <CCardBody>
          <CRow class="text-center">
            <template v-for="(icon, iconName) in icons" :key="iconName">
              <CCol class="mb-5" :xs="3" :sm="2">
                <CIcon :content="icon" size="xxl" />
                <div>{{ toKebabCase(iconName) }}</div>
              </CCol>
            </template>
          </CRow>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import { freeSet } from '@coreui/icons'
import {CCol, CRow,
  CCard, CCardBody, CCardHeader,
} from "@coreui/vue";

export default {
  name: 'CoreUIIcons',
  components: {CCardBody, CCardHeader, CCard, CCol, CRow},
  setup() {
    const toKebabCase = (str) =>
      str.replace(/([a-z])([A-Z0-9])/g, '$1-$2').toLowerCase()
    const icons = freeSet

    return {
      icons,
      toKebabCase,
    }
  },
}
</script>
