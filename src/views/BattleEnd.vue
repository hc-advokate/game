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
