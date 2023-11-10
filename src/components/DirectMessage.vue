<script>
export default {
  data: () => ({
    menus:[
      {title: "DM 삭제"},
      {title: "DM 알림해제 "},
    ],
    items: [

      {
        avatar: 'https://picsum.photos/250/300?image=660',
        title: '크리스마스에 뭐할까?',
        subtitle: `<span class="font-weight-bold">홍길동</span> &mdash; 2023/11/10/15:30`,
      },
      {
        avatar: 'https://picsum.photos/250/300?image=821',
        title: '뭐 먹을까? <span class="text-grey-lighten-1"></span>',
        subtitle: '<span class="font-weight-bold">김유신</span> &mdash; 2023/11/10/15:30',
      },
      {
        avatar: 'https://picsum.photos/250/300?image=783',
        title: '몇 시에 집에 갈 수 있어?',
        subtitle: '<span class="font-weight-bold">강감찬</span> &mdash; 2023/11/10/15:30',
      },

      {
        avatar: 'https://picsum.photos/250/300?image=1006',
        title: 'Dinner tonight?',
        subtitle: '<span class="font-weight-bold">LaToya</span> &mdash; Do you want to hang out?',
      },
      {
        avatar: 'https://picsum.photos/250/300?image=146',
        title: 'So long',
        subtitle: '<span class="font-weight-bold">Nancy</span> &mdash; Do you see what time it is?',
      },

      {
        avatar: 'https://picsum.photos/250/300?image=1008',
        title: 'Breakfast?',
        subtitle: '<span class="font-weight-bold">LaToya</span> &mdash; Do you want to hang out?',
      },
      {
        avatar: 'https://picsum.photos/250/300?image=839',
        title: 'Winter Porridge <span class="text-grey-lighten-1"></span>',
        subtitle: '<span class="font-weight-bold">cc: Daniel</span> &mdash; Tell me more...',
      },
      {
        avatar: 'https://picsum.photos/250/300?image=145',
        title: 'Oui oui',
        subtitle: '<span class="font-weight-bold">Nancy</span> &mdash; Do you see what time it is?',
      },
    ],
  }),
}
</script>
<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-toolbar
      color="#223E6D"
      dark
    >
      <v-toolbar-title>DM</v-toolbar-title>

      <v-btn icon>
        <v-icon>mdi mdi-message</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list lines="two" >
      <template v-for="(item) in items" >

        <v-list-item
          v-if="item.title"
          :key="item.title"
          :prepend-avatar="item.avatar"
          ripple
        >
          <template v-slot:title>
            <v-menu>
              <template v-slot:activator="{ props }">
            <v-btn icon="mdi-dots-vertical" v-bind="props" style="float: right; box-shadow:none"></v-btn>
              </template>

              <v-list>
                <v-list-item
                  v-for="(menu, m) in menus"
                  :key="m"
                >
                  <v-list-item-title>{{ menu.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <div v-html="item.title"></div>
            <div v-html="item.subtitle"></div>
          </template>

        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

