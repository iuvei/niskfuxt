<template>
  <div id="deposit" class="collapse-group tab-pane active">
          <ul ref="parentNode">
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('如何注册？')>-1}">
              <p>如何注册？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>进入{{WEBCONFIG.title}}官网/App，在登录界面点击“免费注册”按钮，在跳转页面中设置游戏账号、游戏密码、手机号码；填写验证码，再勾选“我已阅读并同意接受所有《规则》与《条款》”，最后点击“立即注册”按钮即可。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('我可以注册多个账号吗？')>-1}">
              <p>我可以注册多个账号吗？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>您好，不可以，一位用户只能拥有一个账户，包括同一姓名，同一邮件地址，同一借记卡/信用卡，同一银行账户，同一电话，都视为一位用户。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('账号忘记？')>-1}">
              <p>账号忘记？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>您好，请联系在线客服提供您注册姓名、手机、邮箱。客服会第一时间核实以及为您找回您的游戏账号。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('账号被锁？')>-1}">
              <p>账号被锁？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>您好，请联系在线客服提供您的会员账号，注册姓名，注册邮箱以及您的注册手机，在线客服会为您查询锁定原因并解锁。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('如何完善个人信息？')>-1}">
              <p>如何完善个人信息？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>您好，请您进入个人中心（我的）＞账户设置，进行完善您的个人信息。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('怎么更改绑定手机和绑定邮箱？')>-1}">
              <p>怎么更改绑定手机和绑定邮箱？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>您好，注册信息是无法进行修改更变，您更换手机号或邮箱都是不会影响您的游戏状况，请您放心。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('怎么更改注册姓名？')>-1}">
              <p>怎么更改注册姓名？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>您好，更改姓名只可更改同音不同字的姓名，申请方法：请您发送邮件到邮箱 cs@ow8.com 进行申请（邮箱格式为 主题：申请更改姓名 内容:账号,注册邮箱,注册电话,身份证正、反面高清照片，以及正脸手持身份证照片)。然后等待上级部门的审核，大概1-5个工作日，谢谢。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('如何绑定提款的银行卡？')>-1}">
              <p>如何绑定提款的银行卡？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>您好，请您在“个人中心--账户设置”有“提款卡绑定”按钮，进行绑定,您只需绑定您平日所使用的银行账号，以后提款时无须再填写，选择银行即出现对应账号。每位玩家可以绑定三个不同的银行，每个银行可绑定一个账号。如需更换银行账号，可联系客服进行解绑后再次自行绑定其他账号。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('怎么解绑已经绑定的银行卡？')>-1}">
              <p>怎么解绑已经绑定的银行卡？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>您好，解绑银行卡请您点击个人中心（我）—帐户设置—提款卡解绑，输入您的注册姓名、邮箱、电话即可解绑，谢谢。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('怎么看我的存款记录？')>-1}">
              <p>怎么看我的存款记录？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>您好，请您进入个人中心（我的）＞账户清单＞　在线存款记录、手工存款记录即可看到您的存款记录。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('怎么看我的提款记录？')>-1}">
              <p>怎么看我的提款记录？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>您好，请您进入个人中心（我的）＞账户清单＞　提款记录即可看到您的提款记录。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('我转账到哪里了？')>-1}">
              <p>我转账到哪里了？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>您好，请您进入个人中心（我的）＞账户清单＞　户内转账记录即可看到您的游戏转账记录。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('我得到了什么优惠了？')>-1}">
              <p>我得到了什么优惠了？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>您好，请您进入个人中心（我的）＞账户清单＞　优惠活动记录即可看到您得到的反水记录。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('站内信怎么删除？')>-1}">
              <p>站内信怎么删除？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>您好，请您进入个人中心（我的）＞站内信，点击您要删除的站内信进行查看删除。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('忘记登录密码怎么办？')>-1}">
              <p>忘记登录密码怎么办？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>您好，如果您遗失了您的登录密码，可以登录我们官网点击登入->忘记密码，使用注册邮箱或者手机进行自助找回密码。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('如何修改密码？')>-1}">
              <p>如何修改密码？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>您好，您在首页登陆后，在登录区域点击"个人中心(我的)"按钮，进入“账户设置”后再点击"修改密码"按钮，即可修改您的密码。</p>
              </div>
            </li>
          </ul>
        </div>
</template>
<script>
  import {
    SETTING,
    WEBCONFIG,
    Download
  } from "@/assets/data"
  export default {
    name: "",
    data() {
      return {
        SETTING,
        WEBCONFIG,
        Download,
        idx:'',
        isShowMsg:[]
      }
    },
    props: {},
    computed: {},
    watch: {},
    methods: {
      showMsg(e){
        let idx = this.isShowMsg.indexOf(e.target.innerText)
        if (idx >= 0) {
          this.isShowMsg.splice(idx,1)
        }else{
          this.isShowMsg.push(e.target.innerText)
        }
      }
    },
    created() {},
    activated() {},
    components: {}
  }

</script>
<style lang="scss" scoped>
  .tab-pane {
    display: none;
    &.active {
      display: block;
    }
  }
  .tab-pane li {
  position: relative;
  line-height: 50px;
  border-bottom: 1px dashed #ddd;
  font-size: 16px;
  cursor: pointer;
  .iconay {
    position: absolute;
    right: 0;
    top: 0;
    transform: rotate(90deg);
    transition: all .3s ease-in;
  }
  &.active {
    .collapse {
      display: block;
    }
    .iconay {
      transform: rotate(-90deg);
    }
  }
}

.collapse {
  display: none;
  font-size: 14px;
  line-height: 24px;
  padding-bottom: 30px;
  margin-left: 15px;
}
</style>
