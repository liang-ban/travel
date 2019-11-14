<template>
<div class="icons">
    <swiper :options="swiperOption">
    <swiper-slide v-for="(page,index) of pages" :key="index">
            <div class="icon" v-for="item of page" :key="item.id">
              <div class="icon-img">
                <img class="icon-img-content" :src="item.imgUrl"/>
              </div>
              <p class="icon-desc">{{item.desc}}</p>
            </div>
    </swiper-slide>
      </swiper>
  </div>

</template>
<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }

}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons{
    overflow :hidden;
    height : 0;
    padding-bottom:50%;
   }
   .icons >>> .swiper-container{
     height :0
     padding-bottom:50%
     }
  .icons .icon{
    position:relative
    overflow : hidden
    float:left
    height :0
    width: 25%
    padding-bottom:25%
  }
  .icon-desc{
    position : absolute
    left :0
    right :0
    bottom:0
    line-height 2.0rem
    height :1.5rem
    text-align:center
    color :$darkTextColor
    ellipsis()
    }
  .icon-img{
    position:absolute
    top:.5rem
    left:0
    right:0
    bottom: .84rem
    box-sizing :border-box
    padding:.1rem
    }
  .icon-img-content{
    display : block
    margin : 0 auto
    width :70%
    }
</style>
