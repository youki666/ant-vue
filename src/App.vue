<template>
  <div style="width: 256px">
    <a-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <a-menu
            :defaultSelectedKeys="['1']"
            :defaultOpenKeys="['2']"
            mode="inline"
            theme="dark"
            :inlineCollapsed="collapsed"
            @click="clicked"
            @select="selected"
    >
      <template v-for="item in list">
        <a-menu-item v-if="!item.children" :key="item.key">
          <a-icon type="pie-chart" />
          <span>{{item.title}}</span>
        </a-menu-item>
        <sub-menu v-else :menu-info="item" :key="item.key" />
      </template>
    </a-menu>
    <div style="margin-left: 200px;">
      <img src="./assets/menu@2x.png" alt="" style="width: 200px;height: 200px;">
    </div>
  </div>
</template>

<script>
  /*
   * recommend SubMenu.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu.vue
   * SubMenu1.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu1.vue
   * */
  import SubMenu from './components/SubMenu';
  export default {
    components: {
      'sub-menu': SubMenu,
    },
    data() {
      return {
        collapsed: false,
        list: [
          {
            key: '1',
            title: 'Option 1',
          },
          {
            key: '2',
            title: 'Navigation 2',
            children: [
              {
                key: '2.1',
                title: 'Navigation 3',
                children: [{ key: '2.1.1', title: 'Option 2.1.1' }],
              },
            ],
          },
        ],
      };
    },
    methods: {
      toggleCollapsed() {
        this.collapsed = !this.collapsed;
      },
      selected({item}){
        console.log(item)
      },
      clicked({item}){
        console.log(item)
      }
    },
  };
</script>
