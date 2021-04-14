<template>
  <view class="work">
    <view class="work-notice">
      <tui-list-cell :hover="false" :arrow="false" color="#999">
        <tui-icon name="news-fill" :size="20" color="#FF7F24"></tui-icon>
        公告
      </tui-list-cell>
      <view class="work-notice-board">
        革命尚未成功，同志仍需努力！
        <view class="resoure">--企业捷技术团队</view>
      </view>
    </view>
    <view class="work-allApp">
      <view class="tabs">
        <tui-tabs
          :tabs="tabs"
          :currentTab="currentTab"
          color="#999"
          :width="120"
          itemWidth="50%"
          :sliderWidth="45"
          selectedColor="#1cbbb4"
          sliderBgColor="#1cbbb4"
          @change="onTabs"
        ></tui-tabs>
      </view>
      <view class="work-allApp-mine" v-if="currentTab == 0">
        <tui-grid>
          <tui-grid-item
            v-for="(item, index) in myAppList"
            :key="index"
            :border="false"
            :cell="5"
          >
            <view>
              <image class="icon" :src="item.icon" mode="aspectFit"></image>
            </view>
            <text class="label">{{ item.name }}</text>
          </tui-grid-item>
        </tui-grid>
      </view>
      <view class="work-allApp-all" v-else>
        <tui-grid>
          <tui-grid-item
            v-for="(item, index) in workAllAppList"
            :key="index"
            :border="false"
            :cell="5"
          >
            <view>
              <image class="icon" :src="item.icon" mode="aspectFit"></image>
            </view>
            <text class="label">{{ item.name }}</text>
          </tui-grid-item>
        </tui-grid>
      </view>
    </view>
    <view class="work-sign_in">
      <view class="work-sign_in-title">
        <tui-list-cell class="cell" :hover="false" :unlined="true" arrow>
          <image
            class="icon"
            src="http://icon.tanyang.asia/sign_in.png"
            mode="aspectFit"
          ></image>
          考勤打卡
        </tui-list-cell>
      </view>
      <view class="work-sign_in-holiday">
        <view>
          <image
            class="icon"
            src="http://icon.tanyang.asia/holiday.png"
            mode="aspectFit"
          ></image>
        </view>
        今天不上班，好好享受宁静时光吧~</view>
      <view></view>
    </view>
  </view>
</template>

<script>
import tuiGrid from 'thorui-uni/lib/thorui/tui-grid/tui-grid'
import tuiGridItem from 'thorui-uni/lib/thorui/tui-grid-item/tui-grid-item'
import tuiIcon from 'thorui-uni/lib/thorui/tui-icon/tui-icon'
import tuiTabs from 'thorui-uni/lib/thorui/tui-tabs/tui-tabs'
import tuiListCell from 'thorui-uni/lib/thorui/tui-list-cell/tui-list-cell'
// import { user_change_info } from '@/api/index.js'

export default {
  data: () => ({
    myAppList: [
      {
        name: '考勤打卡',
        icon: 'http://icon.tanyang.asia/sign_in.png',
      },
      {
        name: 'OA审批',
        icon: 'http://icon.tanyang.asia/approval.png',
      },
      {
        name: '智能人事',
        icon: 'http://icon.tanyang.asia/hr.png',
      },
      {
        name: '流程中心',
        icon: 'http://icon.tanyang.asia/flow.png',
      },
    ],
    workAllAppList: [
      {
        name: '考勤打卡',
        icon: 'http://icon.tanyang.asia/sign_in.png',
      },
      {
        name: 'OA审批',
        icon: 'http://icon.tanyang.asia/approval.png',
      },
      {
        name: '智能人事',
        icon: 'http://icon.tanyang.asia/hr.png',
      },
      {
        name: '流程中心',
        icon: 'http://icon.tanyang.asia/flow.png',
      },
      {
        name: '财务管理',
        icon: 'http://icon.tanyang.asia/finance.png',
      },
    ],
    tabs: [
      {
        name: '我的',
      },
      {
        name: '全员',
      },
    ],
    currentTab: 1,
  }),
  components: {
    tuiGrid,
    tuiGridItem,
    tuiIcon,
    tuiTabs,
    tuiListCell
  },
	mounted: () => {
		// user_change_info().then(res=>console.log(111,res))
	},
  methods: {
    onTabs(target) {
      this.currentTab = target.index
    },
  },
}
</script>

<style lang="scss" scoped>
.work {
  padding: 10px;
  &-notice {
    background: #ffffff;
    height: 150px;
    border-radius: 10px;
    &-board {
      padding: 15px;
      font-size: 20px;
      color: #ffd700;
      .resoure {
        font-size: 16px;
        float: right;
      }
    }
  }
  &-allApp {
    margin-top: 10px;
    text-align: center;
    background: #ffffff;
    .tabs {
      width: 100%;
    }
    .icon {
      width: 30px;
      height: 30px;
    }
    .label {
      font-size: 12px;
      color: #999;
    }
    &-mine {
    }
    &-all {
    }
  }
  &-sign_in {
    margin-top: 10px;
    background: #ffffff;
    &-title {
      .cell {
        width: 33%;
        display: flex;
      }
      .icon {
        width: 18px;
        height: 18px;
        margin-right: 5px;
      }
    }
    &-holiday {
      text-align: center;
      color: #999;
      padding: 10px;
      .icon {
      width: 80px;
      height: 80px;
    }
    }
  }
}
</style>
