<template>
    <div class="footerGuide">
      <a class="guide_item" :class="{on: '/msite'===$route.path}" @click="goTo('/msite')">
        <span>
          <i class="iconfont icon-home-fill"></i>
        </span>
        <span>Home</span>
      </a>
      <a class="guide_item" :class="{on: '/search'===$route.path}" @click="goTo('/search')">
        <span>
          <i class="iconfont icon-search-b"></i>
        </span>
        <span>search</span>
      </a>
      <a class="guide_item" :class="{on: '/order'===$route.path}" @click="goTo('/order')">
        <span>
          <i class="iconfont icon-cart-fill"></i>
        </span>
        <span>order</span>
      </a>
      <a class="guide_item" :class="{on: '/profile'===$route.path}" @click="goTo('/profile')">
        <span>
          <i class="iconfont icon-user-fill"></i>
        </span>
        <span>profile</span>
      </a>
    </div>
</template>

<script>
  export default {
    name: "Msite",
    methods: {
      goTo(path) {
        this.$router.replace(path)
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footerGuide
    clearFix()
    top-border-1px(#e4e4e4)
    width 100%
    background-color #fff
    position fixed
    left 0
    reight 0
    bottom 0
    padding 0px 0px 10px
    a
      /*background-color #2e6da4*/
      font-size 14px
      display inline-block
      width 24%
      span
        margin 0 22px
        display block
  .iconfont
    font-size 40px
  .on
    color #a6e1ec

  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
