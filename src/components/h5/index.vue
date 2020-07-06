<template>
  <div class="mod-index">
    <div class="mod-content">
      <el-row :gutter="10" class="header">
        <el-col :xs="7" class="hidden-sm-and-up">
          <i class="el-icon-s-fold content_icon" @click="drawerHandle"></i>
          <i class="el-icon-search content_icon" @click="searchHandle"></i>
        </el-col>
        <el-col  :xs="17" :sm="8" :md="7" style="display:flex;">
          <img src="../../assets/html/html.png"  class="header_img"/>
          <div class="header_title">Web前端开发</div>
        </el-col>
        <el-col  :sm="12" :md="10" class="hidden-xs-only">
          <el-input v-model="search" style="padding:8px;width: 300px" placeholder="关键字"></el-input>
          <el-button type="primary" style="margin-left: -13px;" >搜索</el-button>
        </el-col>
      </el-row>
      <el-row class="hidden-sm-and-up header mobile_search" ref="searchItem">
        <el-col :span="18">
          <el-input v-model="search" placeholder="关键字"></el-input>
        </el-col>
        <el-col :span="6">
          <el-button type="primary">搜索</el-button>
        </el-col>
      </el-row>
      <footer class="footer">
        <p>© 2014 <a href="http://www.yunshipei.com" target="_blank">AllMobilize, Inc.</a> Licensed under <a
          href="http://opensource.org/licenses/MIT" target="_blank">MIT license</a>. by the AmazeUI Team.</p>
      </footer>
    </div>

    <el-drawer :visible.sync="drawer" direction="ltr" :with-header="false" size="50%">
      <div style="background-color: #19678e;height: 100%;">我来啦!</div>
    </el-drawer>
  </div>

</template>

<script>
    export default {
      data() {
        return {
          drawer: false,
          search: '', // 关键字搜
          title: '',
          description: '',
          keywords:'',
        }
      },
      metaInfo () {
        return {
          title: this.title,
          meta: [
            { vmid: 'description', name: 'description', content: this.description },
            { vmid: 'keywords', name: 'keywords', content: this.keywords }
          ]
        }
      },
      mounted() {
        this.init()
      },
      methods: {
        init() {
          this.title = "web前端开发 前端源代码免费下载"
          this.keywords = 'web前端素材下载,前端开发,前端源代码免费下载,HTML源代码'
        },
        searchHandle() {
          if ( this.$refs.searchItem.$el.style.display === 'block'){
            this.$refs.searchItem.$el.style.display = 'none'
          } else {
            this.$refs.searchItem.$el.style.display = 'block'
          }
        },
        drawerHandle() {
          this.drawer = true
        }
      }
    }
</script>

<style scoped>
  .mod-index {
    width: 100%;
    text-align: center;
    background-color: #7aaff6;
  }
  .mod-index .mod-content {
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    background-color: #f7f8fa;
  }
  .header{
    margin: 0;
    text-align: left;
    box-shadow: 0 4px 8px 0 rgba(7,17,27,.1)
    /*display: flex;*/
  }
  .header_img {
    width: 80px;
    height: 58px;
    margin-left: 5px;
  }
  .header_title {
    vertical-align: center;
    line-height:58px;
    font-weight: 700;
    color: #0cd3d3;
    font-style:italic;
    font-size: 20pt;
  }
  .content_icon{
    font-size: 28pt;
    font-weight: 700;
    padding-top: 10px;
    padding-left:5px;
    color: #3a8ee6;
    cursor: pointer;
  }
  .mobile_search {
    padding:5px;
    display: none;
    -webkit-animation-name: fadeIn; /*动画名称*/
    -webkit-animation-duration: 1s; /*动画持续时间*/
    -webkit-animation-iteration-count: 1; /*动画次数*/
    -webkit-animation-delay: 0s; /*延迟时间*/
  }
  /*动画效果*/
  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0; /*初始状态 透明度为0*/
    }
    50% {
      opacity: 50%; /*中间状态 透明度为0.5*/
    }
    100% {
      opacity: 100%; /*结尾状态 透明度为1*/
    }
  }
</style>
