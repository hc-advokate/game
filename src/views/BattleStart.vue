<template>
  <div class="com-body battle-body">
    <van-image fit="cover" :src="Constants.img.bg.treaBg" class="battle-bg re-full"></van-image>
    <div class="battle-mask re-full"></div>
    <van-row class="battle-ct re-w-full">
      <van-col :span="24" class="re-plr-22 re-pt-20">
        <van-image fit="cover" :src="Constants.img.battle.back" class="back-ico" @click="onToInfo"></van-image>
      </van-col>
      <van-col :span="24" class="battle-pet">
        <div class="pet-l">
          <div class="re-flex-row-center pet-level">Lv 7</div>
          <van-image fit="cover" :src="Constants.img.battle.petCl" class="pet-il"/>
          <div class="re-flex-row-center pet-name">Lala</div>
        </div>
        <van-image fit="cover" :src="Constants.img.battle.pk" class="pet-ic"/>
        <div class="pet-r">
          <div class="re-flex-row-center pet-level">Lv 7</div>
          <van-image fit="cover" :src="Constants.img.battle.petTr" class="pet-ir"/>
          <div class="re-flex-row-center pet-name">BaBaBa</div>
        </div>
      </van-col>
      <van-col
          :span="24"
          class="re-flex-row-center cc-flex re-mt-17">
        <van-button class="battle-btn battle-btn_confirm com-btn-txt_black" @click="onToBattlePk">Battle</van-button>
      </van-col>
      <van-col
          :span="24"
          class="re-flex-row-center cc-flex">
        <van-button class="battle-btn battle-btn_cancel com-btn-txt_black" @click="onToBattle">Continue Matching</van-button>
      </van-col>
    </van-row>
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
.battle-mask {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background: rgba(0,0,0,0.6);
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
  .pet-level {
    font-family: SFProRounded-Heavy, SFProRounded;
    font-weight: 800;
    font-size: 18px;
    color: #59CDFF;
    line-height: 22px;
    text-stroke: 2px #FFFFFF;
    text-align: center;
    font-style: normal;
    -webkit-text-stroke: 2px #FFFFFF;
  }
  .pet-name {
    font-family: SFProRounded-Bold, SFProRounded;
    font-weight: bold;
    font-size: 15px;
    color: #FFFFFF;
    line-height: 1;
    text-align: center;
    font-style: normal;
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
  .pet-ic {
    width: 150px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 9;
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
.battle-btn {
  width: 235px;
  height: 43px;
  border: none;
  font-family: SFProRounded-Black, SFProRounded;
  font-weight: 900;
  font-size: 18px;
  color: #FFFFFF;
  line-height: 20px;
  text-shadow: 0px 0px 2px rgba(0,0,0,0.5);
  text-align: center;
  font-style: normal;
}
.battle-btn_confirm {
  margin-top: 17px;
  background-color: transparent;
  background-image: url("@/assets/images/battle/btn-confirm.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.battle-btn_cancel {
  margin-top: 2px;
  background-color: transparent;
  background-image: url("@/assets/images/battle/btn-re.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
