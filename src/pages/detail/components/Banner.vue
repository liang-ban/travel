<template>
<div>
      <div class="banner" @click="handleBannerClick">
          <img class="banner-img" :src="bannerImg" />
          <div class="banner-info">
            <div class="banner-title">{{this.sightName}}</div>
            <div class="banner-number"
            ><span class="iconfont banner-icon">&#xe625;</span>{{this.bannerImgs.length}}
            </div>
            </div>
        </div>
        <common-fade>
          <common-gallary :imgs="bannerImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
        </common-fade>
  </div>

</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
import CommonFade from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary,
    CommonFade
  }
}
</script>
<style lang="stylus" scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    position absolute
    left 0
    right 0
    bottom 0
    color #fff
    background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,1.8))
    .banner-title
      flex 1
      font-size 1.1rem
      padding 0 .8rem
      float left
      font-weight bold
    .banner-number
      padding 0 .6rem
      height 1.2rem
      line-height 1.2rem
      border-radius .4rem
      background rgba(0,0,0,.8)
      font-size .34rem
      color #fff
      float right
      margin 0 .4rem .4rem 0
      .banner-icon
       font-size .43rem
</style>
