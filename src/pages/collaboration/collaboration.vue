<template>
  <view class="collaboration">
    <tui-grid>
      <tui-grid-item
        class="collaboration-list"
        v-for="(item, index) in collaborationList"
        :key="index"
        :border="false"
        :cell="5"
      >
        <view class="icon">
          <tui-icon :name="item.icon" :color="item.color" :size="26"></tui-icon>
        </view>
        <text class="label">{{ item.name }}</text>
      </tui-grid-item>
    </tui-grid>
    <view class="collaboration-item">
      <view class="collaboration-item-main">
        <view class="collaboration-item-left">
          <view class="collaboration-item-title">今日日程</view>
          <view class="collaboration-day">{{ getDay }}</view>
          <view class="collaboration-date">{{ getDate }}</view>
        </view>
        <view class="collaboration-item-content">暂无内容</view>
      </view>
      <tui-icon
        class="collaboration-icon"
        name="plus"
        color="#00BFFF"
      ></tui-icon>
    </view>
    <view class="collaboration-item">
      <view class="collaboration-item-title">待办</view>
      <view class="collaboration-item-content">
        今天做点什么
        <view class="collaboration-add">创建待办</view>
      </view>
      <tui-icon
        class="collaboration-icon"
        name="plus"
        color="#00BFFF"
      ></tui-icon>
    </view>
    <view class="collaboration-item">
      <view class="collaboration-item-title">我发起的审批</view>
      <view class="collaboration-item-content">
        我发起的审批都做完了
        <view class="collaboration-add">发起新的审批</view>
      </view>
    </view>
  </view>
</template>

<script>
import tuiGrid from "thorui-uni/lib/thorui/tui-grid/tui-grid";
import tuiGridItem from "thorui-uni/lib/thorui/tui-grid-item/tui-grid-item";
import tuiIcon from "thorui-uni/lib/thorui/tui-icon/tui-icon";
import { getDay, format } from "date-fns";

export default {
  data: () => ({
    collaborationList: [
      {
        name: "待办",
        icon: "add-fill",
        color: "#00BFFF",
      },
      {
        name: "日历",
        icon: "signin",
        color: "#3CB371",
      },
      {
        name: "便签",
        icon: "edit",
        color: "#FF8C00",
      },
      {
        name: "公告",
        icon: "notice-fill",
        color: "#FF7F50",
      },
      {
        name: "同事圈",
        icon: "moments",
        color: "#1cbbb4",
      },
    ],
  }),
  components: {
    tuiGrid,
    tuiGridItem,
    tuiIcon,
  },
  computed: {
    getDay: () => {
      const week = {
        0: "周日",
        1: "周一",
        2: "周二",
        3: "周三",
        4: "周四",
        5: "周五",
        6: "周六",
      };
      return week[getDay(new Date())];
    },
    getDate: () => format(new Date(), "MM月dd日"),
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.collaboration {
  &-list {
    text-align: center;
    .label {
      font-size: 12px;
      color: #999;
    }
  }
  &-add {
    color: #00bfff;
    font-size: 12px;
  }
  &-icon {
    display: flex;
    flex-direction: row-reverse;
  }
  &-item {
    margin-top: 10px;
    padding: 15px;
    background-color: #ffffff;
    &-main {
      display: flex;
    }
    &-title {
      color: #999999;
      font-size: 14px;
    }
    &-left {
      white-space: nowrap;
      text-align: center;
    }
    &-content {
      width: 100%;
      padding: 10px;
      font-size: 14px;
      color: #999999;
      text-align: center;
      align-self: center;
    }
  }
  &-day {
    font-size: 18px;
  }
}
</style>
