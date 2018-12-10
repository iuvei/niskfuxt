<template>
  <div class="mobile ng-scope">
    <div class="container">
      <div class="row">
        <banner></banner>
        <pros></pros>
        <menus></menus>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    queryLatestPreferential
  } from '@/api/show'
  import annunciate from 'pc/components/annunciate'
  import banner from './components/banner'
  import menus from './components/menus'
  import pros from './components/pros'
  export default {
    name: "",
    data() {
      return {}
    },
    created() {

    },
    components: {
      menus,
      banner,
      pros,
      annunciate
    }
  }

</script>
<style lang="scss">
  .mobile {
    background: linear-gradient(339deg, rgba(183,164,109,0.91), #d2c38b, #e2d192, #c7b983, #c5b889, #d4c798, #e2d193, #d0ac7f, #ccbc84, #a2997e, rgba(216, 203, 142, 0.91), #d0c18a);
    background-size: 800% 800%;
    overflow: hidden;
    -webkit-animation: ocean-wave 15s ease infinite;
    animation: ocean-wave 15s ease infinite;
    height: 937px;
    .container {
      padding-top: 60px;
      width: 1280px;
      margin: 0 auto;
      .row{
        margin-left: -.75rem;
        margin-right: -.75rem;
        margin-bottom: 20px;
        display: flex;
        .col{
          float: left;
          box-sizing: border-box;
          padding: 0 .75rem;
          min-height: 1px;
        }
      }
      .teachBtn {
        color: #fff;
        display: block;
        width: 155px;
        height: 46px;
        line-height: 44px;
        background: url(./images/btn_1.png);
        text-align: center;
        &:hover {
          background: url(./images/btn_hover.png);
        }
      }
    }
  }
  .animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}
.bounceInLeft {
    -webkit-animation-name: bounceInLeft;
    animation-name: bounceInLeft;
}
@-webkit-keyframes ocean-wave {
  0% {
    background-position: 0 55%;
  }

  50% {
    background-position: 100% 46%;
  }

  to {
    background-position: 0 55%;
  }
}


@keyframes ocean-wave {
  0% {
    background-position: 0 55%;
  }

  50% {
    background-position: 100% 46%;
  }

  to {
    background-position: 0 55%;
  }
}
@-webkit-keyframes bounceInLeft {

    0%,
    60%,
    75%,
    90%,
    to {
        -webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);
        animation-timing-function: cubic-bezier(.215, .61, .355, 1)
    }

    0% {
        opacity: 0;
        -webkit-transform: translate3d(-3000px, 0, 0);
        transform: translate3d(-3000px, 0, 0)
    }

    60% {
        opacity: 1;
        -webkit-transform: translate3d(25px, 0, 0);
        transform: translate3d(25px, 0, 0)
    }

    75% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0)
    }

    90% {
        -webkit-transform: translate3d(5px, 0, 0);
        transform: translate3d(5px, 0, 0)
    }

    to {
        -webkit-transform: none;
        transform: none
    }
}

@keyframes bounceInLeft {

    0%,
    60%,
    75%,
    90%,
    to {
        -webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);
        animation-timing-function: cubic-bezier(.215, .61, .355, 1)
    }

    0% {
        opacity: 0;
        -webkit-transform: translate3d(-3000px, 0, 0);
        transform: translate3d(-3000px, 0, 0)
    }

    60% {
        opacity: 1;
        -webkit-transform: translate3d(25px, 0, 0);
        transform: translate3d(25px, 0, 0)
    }

    75% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0)
    }

    90% {
        -webkit-transform: translate3d(5px, 0, 0);
        transform: translate3d(5px, 0, 0)
    }

    to {
        -webkit-transform: none;
        transform: none
    }
}
@-webkit-keyframes bounceInRight {

    0%,
    60%,
    75%,
    90%,
    to {
        -webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);
        animation-timing-function: cubic-bezier(.215, .61, .355, 1)
    }

    0% {
        opacity: 0;
        -webkit-transform: translate3d(3000px, 0, 0);
        transform: translate3d(3000px, 0, 0)
    }

    60% {
        opacity: 1;
        -webkit-transform: translate3d(-25px, 0, 0);
        transform: translate3d(-25px, 0, 0)
    }

    75% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0)
    }

    90% {
        -webkit-transform: translate3d(-5px, 0, 0);
        transform: translate3d(-5px, 0, 0)
    }

    to {
        -webkit-transform: none;
        transform: none
    }
}

@keyframes bounceInRight {

    0%,
    60%,
    75%,
    90%,
    to {
        -webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);
        animation-timing-function: cubic-bezier(.215, .61, .355, 1)
    }

    0% {
        opacity: 0;
        -webkit-transform: translate3d(3000px, 0, 0);
        transform: translate3d(3000px, 0, 0)
    }

    60% {
        opacity: 1;
        -webkit-transform: translate3d(-25px, 0, 0);
        transform: translate3d(-25px, 0, 0)
    }

    75% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0)
    }

    90% {
        -webkit-transform: translate3d(-5px, 0, 0);
        transform: translate3d(-5px, 0, 0)
    }

    to {
        -webkit-transform: none;
        transform: none
    }
}

.bounceInRight {
    -webkit-animation-name: bounceInRight;
    animation-name: bounceInRight
}
</style>
