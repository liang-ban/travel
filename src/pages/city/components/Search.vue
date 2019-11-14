<template>
<div>
  <div class="search">
    <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
  </div>
  <div class="search-content" v-show="keyword">
    <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配的地方
        </li>
    </ul>
  </div>
</div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
  height :2rem
  padding 0 .1rem
  background :$bgColor
  .search-input
    box-sizing border-box
    width 100%
    height 1.8rem
    line-height 1.8rem
    padding 0 .8rem
    text-align center
    border-radius .5rem
    color #666
.search-content
    overflow hidden
    z-index 1
    position absolute
    top 4.8rem
    left 0
    right 0
    background #eee
    .search-item
      line-height 1.5rem
      padding-left .4rem
      background #eee
      color #666

</style>
