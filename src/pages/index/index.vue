<template>
  <view class="message">
    <view class="cu-list menu-avatar">
      <view
        class="cu-item"
        :class="modalName == 'move-box-' + index ? 'move-cur' : ''"
        v-for="(item, index) in messageArray"
        :key="index"
        @touchstart="ListTouchStart"
        @touchmove="ListTouchMove"
        @touchend="ListTouchEnd"
        :data-target="'move-box-' + index"
      >
        <view
          class="message-avatar cu-avatar round lg"
          :style="[
            {
              backgroundImage:
                'url(https://ossweb-img.qq.com/images/lol/web201310/skin/big2100' +
                (index + 2) +
                '.jpg)'
            }
          ]"
        ></view>
        <!-- <uni-badge class="message-badge" v-if="item.newMsg != 0" :text="item.newMsg" type="error"></uni-badge> -->
        <view class="message-content">
          <view class="text-grey">
            {{ item.name }}
            <span class="text-grey text-xs message-time">{{ item.time }}</span>
          </view>
          <view class="text-gray text-sm">
            <!-- <text v-if="item.failure"
						class="cuIcon-infofill text-red margin-right-xs"></text> -->
            <text
              :class="{
                'cuIcon-infofill': item.failure,
                'text-red': item.failure,
                'margin-right-xs': item.failure
              }"
            ></text>
            {{ item.preContent }}
          </view>
        </view>
        <view class="move">
          <view class="bg-grey">置顶</view>
          <view class="bg-red">删除</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      messageArray: [
        {
          name: '张三',
          preContent: '预览消息内容',
          newMsg: 0,
          time: '今天',
          failure: false
        },
        {
          name: '李四',
          preContent: 'djdscfsdcdsv',
          newMsg: 3,
          time: '今天',
          failure: false
        },
        {
          name: '兰兰',
          preContent: 'djdscfsdcdsv',
          newMsg: 4,
          time: '昨天',
          failure: false
        },
        {
          name: 'Jason',
          preContent: '啦啦啦啦',
          newMsg: 5,
          time: '今天',
          failure: true
        }
      ],
      cuIconList: [
        {
          cuIcon: 'cardboardfill',
          color: 'red',
          badge: 120,
          name: 'VR'
        },
        {
          cuIcon: 'recordfill',
          color: 'orange',
          badge: 1,
          name: '录像'
        },
        {
          cuIcon: 'picfill',
          color: 'yellow',
          badge: 0,
          name: '图像'
        },
        {
          cuIcon: 'noticefill',
          color: 'olive',
          badge: 22,
          name: '通知'
        },
        {
          cuIcon: 'upstagefill',
          color: 'cyan',
          badge: 0,
          name: '排行榜'
        },
        {
          cuIcon: 'clothesfill',
          color: 'blue',
          badge: 0,
          name: '皮肤'
        },
        {
          cuIcon: 'discoverfill',
          color: 'purple',
          badge: 0,
          name: '发现'
        },
        {
          cuIcon: 'questionfill',
          color: 'mauve',
          badge: 0,
          name: '帮助'
        },
        {
          cuIcon: 'commandfill',
          color: 'purple',
          badge: 0,
          name: '问答'
        },
        {
          cuIcon: 'brandfill',
          color: 'mauve',
          badge: 0,
          name: '版权'
        }
      ],
      modalName: null,
      gridCol: 3,
      gridBorder: false,
      menuBorder: false,
      menuArrow: false,
      menuCard: false,
      skin: false,
      listTouchStart: 0,
      listTouchDirection: null
    }
  },
  methods: {
    open() {
      this.$refs.popup.open()
    },
    showModal(e) {
      this.modalName = e.currentTarget.dataset.target
    },
    hideModal(e) {
      this.modalName = null
    },
    Gridchange(e) {
      this.gridCol = e.detail.value
    },
    Gridswitch(e) {
      this.gridBorder = e.detail.value
    },
    MenuBorder(e) {
      this.menuBorder = e.detail.value
    },
    MenuArrow(e) {
      this.menuArrow = e.detail.value
    },
    MenuCard(e) {
      this.menuCard = e.detail.value
    },
    SwitchSex(e) {
      this.skin = e.detail.value
    },

    // ListTouch触摸开始
    ListTouchStart(e) {
      this.listTouchStart = e.touches[0].pageX
    },

    // ListTouch计算方向
    ListTouchMove(e) {
      this.listTouchDirection =
        e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left'
    },

    // ListTouch计算滚动
    ListTouchEnd(e) {
      if (this.listTouchDirection == 'left') {
        this.modalName = e.currentTarget.dataset.target
      } else {
        this.modalName = null
      }
      this.listTouchDirection = null
    }
  }
}
</script>

<style lang="scss">
.message {
  &-avatar {
    position: relative;
  }
  &-badge {
    position: absolute;
    top: 5%;
    left: 12%;
  }
  &-content {
    width: 80%;
    height: 70px;
    padding: 15px;
    border-bottom: 1px solid #eeeeee;
  }
  &-time {
    float: right;
  }
}
// .uni-badge {
// 	padding: 0;
// }
</style>
