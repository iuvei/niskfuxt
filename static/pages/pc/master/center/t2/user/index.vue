<template>
      <div class="user-page">
  	    <!-- <banner></banner> -->
        <div class="user-top">
          <info>
            <!-- 用户信息模块 -->
          </info>
        </div>
        <div class="user-content content">
          <user-menus>
            <!-- 左边的菜单内容 -->
          </user-menus>
          <div class="u-c-shows">
            <router-view>
              <!-- 路由内容区域 -->
            </router-view>
          </div>
        </div>
      </div>
</template>
<script>
  import info from './components/info' // 用户信息栏目
  // import games from './components/games' // 用户钱包数据
  import userMenus from './components/user-menus' // 用户菜单
  // import banner from "./components/banner/" //个人中心banner
  export default {
    name: "userMaster",
    data() {
      return {
        myData: []
      }
    },
    components: {
      info,
      // games,
      userMenus,
      // banner
    }
  }

</script>
<style lang="scss">
.user-page{
    // background:#202020;
    background: url('./images/bg1.jpg');
    padding-top: 43px;
    padding-bottom: 40px;
    // .user-content{
    //   // background:#202020;
    //   /*min-height:800px;
    //   display:flex;
    //   justify-content: space-between;*/
    // }
  .u-c-shows{
    width:100%;
    .u-c-menu{
    	margin-right: 20px;
      /*display:flex;
      justify-content:space-between;*/
      .u-c-router{
      	background-color: rgba(0, 0, 0, .7);
      	display: block;
      	width: 140px;
      	height: 60px;
      	line-height: 60px;
        border:1px solid #303030;
        font-size:16px;
        color:#fff;
        padding-left: 30px;
        position:relative;
        cursor:pointer;
          &:before{
            content:'';
            width:100%;
            background:none;
            height:5px;
            position:absolute;
            bottom:-4px;
            left:0;
          }
        &:hover,&.active{
          background: #8d3e3c; /* Old browsers */
					background: -moz-linear-gradient(left,  #8d3e3c 0%, #bb4e49 100%); /* FF3.6-15 */
					background: -webkit-linear-gradient(left,  #8d3e3c 0%,#bb4e49 100%); /* Chrome10-25,Safari5.1-6 */
					background: linear-gradient(to right,  #8d3e3c 0%,#bb4e49 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8d3e3c', endColorstr='#bb4e49',GradientType=1 ); /* IE6-9 */
          .icobjh{
            color:#fff;
          }
        }
        .icobjh{
          color:#b4b4b4;
          margin-right:10px;
          font-size:26px;
          vertical-align:middle;
          height:40px;
          line-height:40px;
        }
      }
    }
  }
  }
  .userSet{
		display: flex;
		justify-content: space-between;
		.u-c-box {
			width: 100%;
      background-color: rgba(0, 0, 0, 0.7);
			border: 1px solid #303030;
      padding: 20px;
		}
	}

/*更改ui默认样式*/
.search .el-input__inner {
  border: none!important;
  background-color:#fff!important;
  color: #000!important;
}

.el-input-group__append{
  background: #8b3e3a!important;
  border: none!important;
  span{
    color: #fff!important;
  }
  i{
    color: #fff!important;
  }
}
.u-c-box .el-input__inner {
  border: none!important;
  background-color:#202020!important;
  color: #fff!important;
}
// .user-log .el-table th,.user-log .el-table tr ,.user-log .el-table,.user-log .el-table__expanded-cell{
//   background-color: #4c3928;
// }
.el-button--primary {
	background-color:#d66d2e!important;
	border-color:#d66d2e!important;
}
.el-radio__input.is-checked+.el-radio__label{
  color: #a72c2f!important;
}
.el-radio__input.is-checked .el-radio__inner{
  border-color: #a72c2f!important;
  background: #a72c2f!important;
}
.el-radio.is-bordered.is-checked{
  border-color: #a72c2f!important;
}
.el-form-item__label {
	color: #fff!important;
}
.el-button--text {
	color: #f6d48d!important;
}
.el-carousel__mask, .el-cascader-menu, .el-cascader-menu__item.is-disabled:hover, .el-collapse-item__header {
	background-color: #40362c!important; 
}
.el-collapse-item__wrap {
	background-color: #1f1a12!important; 
	.el-collapse-item__content {
		padding-bottom: 0!important;
		.letter-content {
			border:none!important;
			color: #fff!important;
			.html {
				border: none!important;
			}
		}
	}
}
.el-collapse-item__header {
	color: #fff!important;
}
.user-message .message-item .u-m-head .date{
	color: #fff!important;
}
.el-step__title.is-process {
	color: #fff!important;
}
</style>
