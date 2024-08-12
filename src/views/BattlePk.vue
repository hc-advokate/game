<template>
  <div class="com-body battle-body">
    <van-image fit="cover" :src="Constants.img.bg.treaBg" class="battle-bg re-full"></van-image>
    <van-row class="battle-ct re-w-full">
      <van-col :span="24" class="re-plr-22 re-pt-20">
        <van-image fit="cover" :src="Constants.img.battle.back" class="back-ico" @click="onToInfo"></van-image>
      </van-col>
      <van-col :span="24" class="battle-pet">
        <div class="pet-l">
          <div class="re-flex-row-center pet-level">
            <div class="prog">
              <div
                  class="prog-num"
                  :style="{ width: `${90}%` }"></div>
            </div>
          </div>
          <van-image fit="cover" :src="Constants.img.battle.petCl" class="pet-il"/>
        </div>
        <div class="pet-r">
          <div class="re-flex-row-center pet-level">
            <div class="prog">
              <div
                  class="prog-num"
                  :style="{ width: `${90}%` }"></div>
            </div>
          </div>
          <van-image fit="cover" :src="Constants.img.battle.petTr" class="pet-ir"/>
        </div>
      </van-col>
      <van-col :span="24" class="re-plr-22 re-mt-20">
        <div class="com-box-bd talk-box talk-left" v-if="pt.id === 0">
          <van-image fit="cover" :src="Constants.img.battle.avCl" class="talk-ico ti-left"></van-image>
          <div class="com-box-bdc">{{ pt.msg }}</div>
        </div>
        <div class="com-box-bd talk-box talk-right" v-if="pt.id === 1">
          <van-image fit="cover" :src="Constants.img.battle.avCr" class="talk-ico ti-right"></van-image>
          <div class="com-box-bdc">{{ pt.msg }}</div>
          <!--          <div class="com-box-bdc">{{ obj.output }}</div>-->
        </div>
      </van-col>
    </van-row>
  </div>

  <div class="hl-dialog">
    <van-dialog v-model:show="isShow" title="" class="com-box-bd">
      <div class="com-box-bdc hl-dialog-content">
        <van-image fit="cover" :src="isWin ? Constants.img.battle.battleWin : Constants.img.battle.battleLose" class="hl-res-img"/>
        <p class="hl-exp">EXP : {{isWin ? '+20' : '-10'}}</p>
        <div class="hl-m15 hl-res-box">
          <van-image fit="cover" :src="Constants.img.battle.battleResL" class="hl-res-l" />
          <van-image fit="cover" :src="Constants.img.battle.battleResVS" class="hl-res-vs"/>
          <van-image fit="cover" :src="Constants.img.battle.battleResR" class="hl-res-r" />
        </div>
        <div class="hl-dialog-footer">
          <van-button class="hl-m6 hl-confirm-btn" @click="onToBattleEnd">CONFIRM</van-button>
        </div>
      </div>
    </van-dialog>
  </div>
</template>

<script setup>
import Constants from "@/plugins/constants/index.js";

const router = useRouter();
const onToInfo = () => {
  router.push({path: "/info"});
}
const onToBattle = () => {
  router.push({ path: "/battle" });
};
const onToBattlePk = () => {
  router.push({ path: "/battle-pk" });
};

const onToBattleEnd = () => {
  isShow.value = false;
  router.push({ path: "/battle-end" });
};

const isShow = ref(false);

const isWin = ref(true);

import EasyTyper from "easy-typer-js";

let pt = ref({});
const obj = reactive({
  output: '',
  isEnd: false,
  speed: 80,
  singleBack: false,
  sleep: 0,
  type: 'normal',
  backSpeed: 0,
  sentencePause: false
});
const tk = [{
  id: 0,
  msg: "Baker threw an impro",
}, {
  id: 1,
  msg: "Miner hit back with a bottle of explosive potion",
}, {
  id: 0,
  msg: "Baker Baker Baker Baker Baker Baker Baker",
}, {
  id: 1,
  msg: "Miner hit Miner with Miner bottle of Miner potion",
}];
const playTalk = async (sleep, list, index) => {
  if (index === null) {
    index = 0;
  }
  // const typed = new EasyTyper(obj, `${list[index].msg}`);
  pt.value = list[index];
  index++;
  if (index < list.length) {
    setTimeout(() => {
      playTalk(sleep, list, index);
    }, sleep);
  } else {
    setTimeout(() => {
      isShow.value = true;
    }, sleep);
  }
}
onActivated(() => {
  playTalk(2000, tk, null);
});
</script>

<style scoped lang="scss">
.cc-flex {
  display: flex;
}
.back-ico {
  width: 25px;
  height: 21px;
}
.battle-body {
  overflow: hidden;
  position: relative;
  z-index: 0;
}
.battle-ct {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
}
.battle-pet {
  position: relative;
  z-index: 8;
  height: 320px;
  margin-top: 56px;

  .prog {
    width: 110px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 1);
    border-radius: 10px;
    background-color: rgba(255, 243, 160, 1);
    position: relative;
    .prog-num {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      background: linear-gradient(90deg, rgba(255, 243, 160, 1) 0%, rgba(255, 181, 72, 1) 51%, rgba(255, 153, 204, 1) 100%);
    }
  }

  .pet-l {
    width: 50%;
    //width: 100%;
    //text-align: left;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    .pet-il {
      width: 100%;
      //height: 319px;
    }
  }
  .pet-r {
    width: 50%;
    //width: 100%;
    //text-align: right;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    .pet-ir {
      width: 100%;
      //height: 319px;
    }
  }
}
.battle-time {
  font-family: SFProRounded-Heavy, SFProRounded;
  font-weight: 800;
  font-size: 49px;
  color: #ffa95b;
  line-height: 1;
  text-stroke: 3px #ffffff;
  -webkit-text-stroke: 3px #ffffff;
  text-align: center;
  font-style: normal;
  margin-top: 27px;
}

.talk-box {
  position: relative;
  .com-box-bdc {
    font-family: SFProRounded-Regular, SFProRounded;
    font-weight: 400;
    font-size: 15px;
    color: #B68B19;
    line-height: 20px;
    text-align: left;
    font-style: normal;
  }
  .talk-ico {
    position: absolute;
    height: 60px;
  }
  .ti-left {
    left: -20px;
    top: -15px;
  }
  .ti-right {
    right: -20px;
    top: -15px;
  }
}
.talk-left {
  .com-box-bdc {
    padding: 5px 10px 5px 30px;
  }
}
.talk-right {
  .com-box-bdc {
    padding: 5px 30px 5px 10px;
  }
}
.hl-dialog{
  :deep(.van-dialog){
    width: 80%;
    overflow: initial;

    .van-dialog__footer {
      display: none;
    }

    .hl-dialog-content{
      width: 100%;
      padding: 17px 20px 7px 20px;
      text-align: center;
      .hl-res-img{
        height: 42px;
      }
      .hl-exp{
        font-family: SFProRounded-Regular;
        font-weight: 400;
        font-size: 12px;
        color: #B68B19;
        line-height: 15px;
        font-style: normal;
      }
      .hl-res-box{
        width: 100%;
        height: 120px;
        border-radius: 10px;
        background: linear-gradient( 124deg, #FFF3A0 0%, #FAC9C7 50%, #59CDFF 100%), #D8D8D8;
        position: relative;
        z-index: 8;
        .hl-res-l{
          height: 120px;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
        }
        .hl-res-vs {
          width: 84px;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 0);
          z-index: 9;
        }
        .hl-res-r{
          height: 120px;
          position: absolute;
          top: 0;
          right: 0;
          z-index: 1;
        }
      }
      .hl-dialog-footer{
        text-align: center;
      }
      .hl-confirm-btn{
        width: 100%;
        height: 43px;
        background: none;
        border: none;
        background-image: url("@/assets/images/home/confirm-btn-bg.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        font-family: SFProRounded-Black;
        font-weight: 900;
        font-size: 18px;
        color: #FFFFFF;
        text-shadow: 0px 0px 2px rgba(0,0,0,0.5);
        font-style: normal;
        &::before{
          background: none;
          border: none;
        }
      }
    }
  }
}

.hl-m6{
  margin-top: 6px;
}
.hl-m15{
  margin-top: 15px;
}
</style>
