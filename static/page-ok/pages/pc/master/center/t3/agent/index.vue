<template>
  <div class="agent-page">
    <!-- <banner></banner> -->
    <div class="user-top">
      <info>
        <!-- 代理信息模块 -->
      </info>
      <top-menus>
        <!-- 代理菜单 -->
      </top-menus>
    </div>
    <div class="user-content content">
      <div class="agent-u-c-shows">
        <router-view>
          <!-- 路由内容区域 -->
        </router-view>
      </div>
    </div>
  </div>
</template>
<script>
  // 代理个人信息
  import info from './components/info' // 代理信息
  // 代理操作菜单
  import topMenus from './components/top-menus' // 代理菜单
  import banner from "./components/banner/" //个人中心banner
  export default {
    name: "userMaster",
    data() {
      return {
        myData: []
      }
    },
    components: {
      info,
      topMenus,
      banner
    }
  }

</script>
<style lang="scss">
  .agent-page {
    background: url('./images/bg1.jpg');
    padding-top: 100px;
    // background-color: #202020;
    .user-content {
      padding: 20px 0;
      background: transparent;
      min-height: 600px;
      display: flex;
      justify-content: space-between;
    }
    .agent-content {
      // padding:20px;
      // background:#f2f2f2;
      min-height: 800px;
      display: flex;
      justify-content: space-between;
      .u-c-shows {
        width: 100%;
      }
    }
    .agent-u-c-shows {
      width: 1200px;
      .u-c-menu {
        margin-right: 20px; // display: flex;
        // justify-content: space-between;
        .u-c-router {
          background-color: #000;
          display: block;
          width: 200px;
          height: 60px;
          line-height: 60px;
          border: 1px solid #303030;
          font-size: 16px;
          color: #b4b4b4;
          padding-left: 30px;
          position: relative;
          cursor: pointer;
          &:before {
            content: '';
            width: 100%;
            background: none;
            height: 5px;
            position: absolute;
            bottom: -4px;
            left: 0;
          }
          &:hover,
          &.active {
            background: #e2b85a;
            /* Old browsers */
            background: -moz-linear-gradient(left, #e2b85a 0%, #e2b85a 100%);
            /* FF3.6-15 */
            background: -webkit-linear-gradient(left, #e2b85a 0%, #e2b85a 100%);
            /* Chrome10-25,Safari5.1-6 */
            background: linear-gradient(to right, #e2b85a 0%, #e2b85a 100%);
            /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2b85a', endColorstr='#e2b85a', GradientType=1);
            /* IE6-9 */
            .iconyg {
              color: #fff;
            }
          }
          .iconyg {
            color: #25b79e;
            margin-right: 10px;
            font-size: 26px;
            vertical-align: middle;
            height: 40px;
            line-height: 40px;
          }
        }
      }
    }
  }

  .userSet {
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
.agent-u-c-shows .el-table th,.agent-u-c-shows .el-table tr ,.agent-u-c-shows .el-table,.agent-u-c-shows .el-table__expanded-cell{
  background-color: #202020;
}

.el-table--enable-row-hover .el-table__body tr:hover>td {
  background-color:#c0c4cc;
}
.el-button--primary {
	background-color:#d66d2e!important;
	border-color:#d66d2e!important;
}
.el-radio__input.is-checked+.el-radio__label{
  color: #e2b85a!important;
}
.el-radio__input.is-checked .el-radio__inner{
  border-color: #e2b85a!important;
  background: #e2b85a!important;
}
.el-radio.is-bordered.is-checked{
  border-color: #e2b85a!important;
}
.el-form-item__label {
	color: #fff!important;
}
.el-button--text {
	color: #f6d48d!important;
}
.el-carousel__mask, .el-cascader-menu, .el-cascader-menu__item.is-disabled:hover, .el-collapse-item__header {
	background-color: #202020!important; 
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
