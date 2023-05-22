<template>
  <CHeader position="sticky" class="mb-4">
    <CContainer fluid>
      <CHeaderToggler class="ps-1" @click="ui.toggleSidebar">
        <CIcon icon="cil-menu" size="lg" />
      </CHeaderToggler>
      <CHeaderBrand class="mx-auto d-lg-none" to="/">
        <CIcon :icon="logo" height="48" alt="Logo" />
      </CHeaderBrand>
      <CHeaderNav class="d-none d-md-flex me-auto">
        <CNavItem>
          <CNavLink href="/dashboard"> Dashboard </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Users</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Settings</CNavLink>
        </CNavItem>
      </CHeaderNav>
      <CHeaderNav>
        <CNavItem>
          <CNavLink href="#">
            <CIcon class="mx-2" icon="cil-bell" size="lg" />
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">
            <CIcon class="mx-2" icon="cil-list" size="lg" />
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">
            <CIcon class="mx-2" icon="cil-envelope-open" size="lg" />
          </CNavLink>
        </CNavItem>
        <AppHeaderDropdownAccnt />
      </CHeaderNav>
    </CContainer>
    <CHeaderDivider />
    <CContainer fluid>
      <AppBreadcrumb />
    </CContainer>
  </CHeader>
</template>

<script>
import AppBreadcrumb from './AppBreadcrumb.vue'
import AppHeaderDropdownAccnt from './AppHeaderDropdownAccnt.vue'
import { logo } from '@/assets/brand/logo'
import {
  CHeader, CContainer,
  CHeaderBrand, CHeaderDivider, CHeaderNav, CHeaderToggler,
  CNavItem, CNavLink
} from "@coreui/vue";
import {useUiStore} from "@/stores/ui";

export default {
  name: 'AppHeader',
  components: {
    CHeaderDivider,
    CHeaderNav,
    CNavLink,
    CNavItem,
    CHeaderToggler,
    CHeaderBrand,
    CContainer,
    CHeader,
    AppBreadcrumb,
    AppHeaderDropdownAccnt,
  },
  setup() {
    const ui = useUiStore();
    return {
      logo, ui,
    }
  },
}
</script>
