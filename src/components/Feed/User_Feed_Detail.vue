<template>
  <div class="profile" style="width: 100%; height: 100%">
    <div>
      <v-container style="height: 100%">
        <!-- Content start -->
        <div>
          <v-card
            class="proCard"
            style="
              display: grid;
              margin-left: 15%;
              max-height: 700px;
              max-width: 100%;
              width: auto;
              height: auto;
              margin-top: 10%;
            "
          >
            <!--    <v-card-text class="text-h5 py-2">
            "Turns out semicolon-less style is easier and safer in TS because most
            gotcha edge cases are type invalid as well."
          </v-card-text>-->
            <div>
              <v-img
                cover
                height="500"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>
            </div>

            <div>
              <v-card-actions
                :loading="loading"
                class="my-12 mainFeed"
                max-width="700"
                style="display: inline-block; width: 100%; margin-top: 30%"
                cols="12"
                md="8"
              >
                <v-list-item class="w-100">
                  <template v-slot:prepend>
                    <v-avatar
                      color="grey-darken-3"
                      image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    ></v-avatar>
                  </template>
                  <v-list-item-title>Evan You</v-list-item-title>
                  <v-list-item-subtitle>Vue Creator</v-list-item-subtitle>
                  <template v-slot:append>
                    <div class="justify-self-end">
                      <v-icon class="me-1" icon="mdi-heart"></v-icon>
                      <span class="subheading me-2">256</span>
                      <span class="me-1">·</span>
                      <v-icon class="me-1" icon="mdi-share-variant"></v-icon>
                      <span class="subheading">45</span>
                    </div>
                  </template>
                </v-list-item>
              </v-card-actions>
              <template>
                <v-progress-linear
                  color="deep-purple"
                  height="4"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-card-item>
                <v-card-title>일정 제목</v-card-title>
                <!--      <v-card-subtitle>
              <span class="me-1">Local Favorite</span>

              <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
            </v-card-subtitle>-->
              </v-card-item>
              <!-- 태그 목록 -->
              <v-card-text>
                <v-row align="center" class="mx-0"> </v-row>
              </v-card-text>
              <v-divider class="mx-4 mb-1"></v-divider>
              <v-card-title>태그 목록</v-card-title>
              <div class="px-4">
                <v-chip-group v-model="selection">
                  <v-chip  size="small"># 초콜릿</v-chip>
                  <v-chip  size="small"># 제과제빵</v-chip>
                  <v-chip size="small"># 달다달아</v-chip>
                  <v-chip size="small"># 숩다 수워</v-chip>
                </v-chip-group>
              </div>

              <!-- 댓글창 시작 -->
              <v-list lines="two">
                <v-infinite-scroll :height="300" :items="items" :onLoad="load">
                <template v-for="(item, index) in items">
                  <div
                    :class="['pa-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']">
                  <v-list-subheader
                    v-if="item.header"
                    :key="item.header"
                    inset
                  >
                    {{ item.header }}
                  </v-list-subheader>

                  <v-divider
                    v-else-if="item.divider"
                    :key="index"
                    inset
                  ></v-divider>

                  <v-list-item
                    v-else
                    :key="item.title"
                    :prepend-avatar="item.avatar"
                    ripple
                  >
                    <template v-slot:title>
                      <div v-html="item.title"></div>
                    </template>

                    <template v-slot:subtitle>
                      <div v-html="item.subtitle"></div>
                    </template>
                  </v-list-item>
                  </div>
                </template>
                </v-infinite-scroll>
              </v-list>
            </div>
          </v-card>
        </div>

        <!-- Content end -->
      </v-container>
    </div>
    <!-- end -->
    <div>
      <!-- 우측 사이드 검색/친구or랜덤추천 -->
      <v-card
        class="right_SideBar"
        max-width="500"
        style="
          margin-right: 20%;
          width: auto;
          height: auto;
          margin-left: 10%;
          margin-top: 40%;
        "
        cols="12"
        md="4"
      >
        <v-layout>
          <v-list nav>
            <v-list-item>
              <v-text-field
                v-model="search"
                outlined
                clearable
                rounded
                variant="solo"
                theme="light"
                prepend-inner-icon="mdi-magnify"
                placeholder="Search...."
                class="no-padding"
                style="float: left; clear: both; width: 30%; margin-top: 5%"
                @input="searchItem"
              ></v-text-field>
            </v-list-item>
            <v-list-item
              prepend-avatar="../"
              title="추천 1"
              value="inbox"
            ></v-list-item>

            <v-list-item
              prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
              title="추천 2"
              value="supervisors"
            ></v-list-item>
            <v-list-item
              prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
              title="추천 3"
              value="clockin"
            ></v-list-item>
          </v-list>
          <!--      <v-main style="height: 500px"></v-main>-->
        </v-layout>
      </v-card>
    </div>
    <!-- 우측 사이드 end -->
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mdiAccount, mdiDelete, mdiPencil, mdiShareVariant } from "@mdi/js";
export default {
  data: () => ({
    loading: false,
    selection: 1,
    items: [

      { divider: true },
      {
        avatar: 'https://picsum.photos/250/300?image=660',
        title: 'Meeting @ Noon',
        subtitle: `<span class="font-weight-bold">Spike Lee</span> &mdash; I'll be in your neighborhood`,
      },
      {
        avatar: 'https://picsum.photos/250/300?image=821',
        title: 'Summer BBQ <span class="text-grey-lighten-1"></span>',
        subtitle: '<span class="font-weight-bold">to Operations support</span> &mdash; Wish I could come.',
      },
      {
        avatar: 'https://picsum.photos/250/300?image=783',
        title: 'Yes yes',
        subtitle: '<span class="font-weight-bold">Bella</span> &mdash; Do you have Paris recommendations',
      },
      {
        header: 'Yesterday',
      },
      { divider: true },
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
        header: 'Last Week',
      },
      { divider: true },
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

  methods: {
    mdiDelete() {
      return mdiDelete;
    },
    mdiPencil() {
      return mdiPencil;
    },
    mdiShareVariant() {
      return mdiShareVariant;
    },
    mdiAccount() {
      return mdiAccount;
    },

    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },

    /*스크롤 관련 메서드 start*/
    methods: {
      async api () {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(Array.from({ length: 10 }, (k, v) => v + this.items.at(-1) + 1))
          }, 1000)
        })
      },
      async load ({ done }) {
        // Perform API call
        const res = await this.api()

        this.items.push(...res)

        done('ok')
      },
    }/*스크롤 관련 메서드 end*/,
  },
};





</script>

<style>
.proCard {
  width: 80%;
  grid-template-columns: 50% 50%;
}
.profile {
  width: 100%;
  height: 42%;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 100% 0;
}
/*. {
  display: grid;
  grid-template-columns: 40% 70%;
  grid-template-rows: 70% 30%;
}*/
/*.profile {
  display: grid;
  grid-template-columns: 500px 400px;
  grid-template-rows: 500px 400px;
  grid-column: 2/4;
  grid-row: 1/3;
  margin-bottom: 50px;
}*/
.right_SideBar {
  float: right;
  margin: 100px 0;
  width: 300px;
  height: 400px;
  align-self: center;
}

.v-input__control {
  width: 200px;
  float: left;
}
.v-input__control {
  width: 250px;
}
.element {
  justify-content: space-between;
}
</style>
