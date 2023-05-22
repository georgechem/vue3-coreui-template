<template>
  <CSidebar
    position="fixed"
    :unfoldable="ui.sidebarUnfoldable"
    :visible="ui.sidebarVisible"
    @visible-change="
      (event) =>
        ui.updateSidebarVisible(event)
    "
  >
    <CSidebarBrand>
      <CIcon
        custom-class-name="sidebar-brand-full"
        :icon="logoNegative"
        :height="35"
      />
      <CIcon
        custom-class-name="sidebar-brand-narrow"
        :icon="sygnet"
        :height="35"
      />
    </CSidebarBrand>
    <AppSidebarNav />
    <CSidebarToggler
      class="d-none d-lg-flex"
      @click="ui.toggleUnfoldable"
    />
  </CSidebar>
</template>

<script>
import { AppSidebarNav } from './AppSidebarNav'
import { logoNegative } from '@/assets/brand/logo-negative'
import { sygnet } from '@/assets/brand/sygnet'
import {CSidebarToggler,
  CSidebar, CSidebarBrand
} from "@coreui/vue";
import {useUiStore} from "@/stores/ui";


export default {
  name: 'AppSidebar',
  components: {
    CSidebarBrand,
    CSidebar,
    CSidebarToggler,
    AppSidebarNav,
  },
  setup() {

    const ui = useUiStore();

    return {
      ui,
      logoNegative,
      sygnet,
    }
  },
}
</script>
