<template>
  <div class="com-body hl-container" :style="{ backgroundImage: 'url(' + currentBgImage + ')' }">
    <van-row>
      <van-col span="24" class="hl-title-bar">
        <van-nav-bar title="Role Select" class="hl-nav-bar" />
      </van-col>
    </van-row>
    <div class="hl-flex-row-between">
      <div @click="changeSwiper(1)">
        <van-image fit="cover" :src="Constants.img.icon.swpLeft" class="hl-swp-left" />
      </div>
      <div class="com-box-bd hl-swipe-box">
        <van-swipe
            ref="rabbitSwiper"
            class="com-box-bdc hl-swipe"
            :show-indicators="false"
            @change="onSwipeChange"
        >
          <van-swipe-item
              v-for="(item, index) in rabbitList"
              :key="index"
              class="hl-swp-item"
          >
            <van-image fit="cover" :src="item.img" class="hl-swp-img" />
            <div class="hl-swp-name">{{ item.name }}</div>
            <div class="hl-swp-desc">{{ item.desc }}</div>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div @click="changeSwiper(2)">
        <van-image fit="cover" :src="Constants.img.icon.swpRight" class="hl-swp-right" />
      </div>
    </div>
    <van-button class="hl-m59 hl-confirm-btn" @click="handleName">CONFIRM</van-button>
  </div>

  <div class="hl-dialog">
    <van-dialog v-model:show="isShow" closeable title="Name" class="com-box-bd">
      <template #default>
        <div class="com-box-bdc hl-dialog-content">
          <p class="hl-dialog-title">Please input {{rabbitType}} Bunny the new name</p>
          <van-field class="hl-dialog-inp" type="text" v-model="name" />
          <div class="hl-dialog-footer">
            <van-button class="hl-m13 hl-confirm-btn" @click="submitName">CONFIRM</van-button>
          </div>
        </div>
      </template>
    </van-dialog>
  </div>
</template>

<script setup>
import Constants from "@/plugins/constants";
import {showToast} from 'vant';

const rabbitList = reactive([
  {img: Constants.img.pet.petC, bgImg: Constants.img.bg.chefBg, name: 'Chef Momo', type: 'Chef', desc: 'Experimenting with new ingredients and flavors to create unique and delicious dishes'},
  {img: Constants.img.pet.petPo, bgImg: Constants.img.bg.poetBg, name: 'Poet Momo', type: 'Poet', desc: 'Composing poetry to bring words alive'},
  {img: Constants.img.pet.petPi, bgImg: Constants.img.bg.pilotBg, name: 'Pilot Momo', type: 'Pilot', desc: 'Flying high to explore the boundless sky'},
  {img: Constants.img.pet.petD, bgImg: Constants.img.bg.dreamBg, name: 'Dreamcatcher Momo', type: 'Dreamcatcher', desc: 'Catching sweet dreams for everyone'},
  {img: Constants.img.pet.petT, bgImg: Constants.img.bg.treaBg, name: 'Treasure Hunter Momo', type: 'Treasure Hunter', desc: 'Searching high and low for precious Gemfruits'},
  {img: Constants.img.pet.petI, bgImg: Constants.img.bg.invenBg, name: 'Inventor Momo', type: 'Inventor', desc: 'Bringing bright ideas to build new creations'},
  {img: Constants.img.pet.petS, bgImg: Constants.img.bg.spellBg, name: 'Spellcaster Momo', type: 'Spellcaster', desc: 'Specializing spells to tailor magical attire'},
]);

const rabbitSwiper = ref(null);

const rabbitType = ref('Chef');

const changeSwiper = (e) => {
  if (e === 1) {
    rabbitSwiper.value.prev();
  } else {
    rabbitSwiper.value.next();
  }
};

const currentBgImage = ref(Constants.img.bg.chefBg);
const onSwipeChange = (index) => {
  currentBgImage.value = rabbitList[index].bgImg;
  rabbitType.value = rabbitList[index].type;
};

const isShow = ref(false);
const name = ref('');

const handleName = () => {
  isShow.value = true;
  name.value = '';
};


const router = useRouter();
const submitName = () => {
  if (name.value) {
    isShow.value = false;
    router.push({ path: "/info" });
    return false;
  }
  showToast('Please input name');
};
</script>

<style scoped lang="scss">
.hl-flex-row-between{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.hl-container{
  background-size: 100% 100%;
  background-repeat: no-repeat;
  text-align: center;
}

.hl-swp-left,.hl-swp-right{
  height: 76px;
  margin-left: 19px;
}

.hl-swp-right{
  margin-left: 0;
  margin-right: 19px;
}

.hl-swipe-box{
  margin-top: 33px;
  .hl-swipe{
    width: 224px;
    padding: 14px 0;
    .hl-swp-item{
      text-align: center;
      .hl-swp-img{
        height: 319px;
        text-align: center;
      }
      .hl-swp-name{
        font-family: SFProRounded-Black;
        font-weight: 900;
        font-size: 15px;
        color: #B68B19;
        line-height: 18px;
        font-style: normal;
      }
      .hl-swp-desc{
        width: 188px;
        font-family: SFProRounded-Bold;
        font-weight: bold;
        font-size: 13px;
        color: #B68B19;
        line-height: 15px;
        font-style: normal;
        margin: 0 auto;
        margin-top: 5px;
      }
    }
  }
}

.hl-confirm-btn{
  width: 235px;
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

.hl-m59{
  margin-top: 59px;
}

.hl-m13{
  margin-top: 13px;
}

.hl-dialog{
  :deep(.van-dialog){
    width: 80%;
    overflow: initial;
    .van-dialog__header{
      width: 166px;
      height: 41px;
      padding-top: 0;
      background-image: url("@/assets/images/home/dialog-head-bg.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      font-family: SFProRounded-Black;
      font-weight: 900;
      font-size: 15px;
      color: #FFFFFF;
      line-height: 41px;
      text-shadow: 1px 2px 0px rgba(255,0,0,0.5);
      font-style: normal;
      position: absolute;
      top: -21px;
      left: 50%;
      transform: translateX(-50%);
    }

    .van-popup__close-icon{
      width: 30px;
      height: 30px;
      background-image: url("@/assets/images/home/dialog-close-btn.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      color: transparent;
      top: -16px;
      right: -15px;
    }

    .van-dialog__footer {
      display: none;
    }

    .hl-dialog-content{
      width: 100%;
      padding-top: 32px;
      padding-bottom: 17px;
      .hl-dialog-title{
        width: 190px;
        font-family: SFProRounded-Bold;
        font-weight: bold;
        font-size: 15px;
        color: #B68B19;
        line-height: 20px;
        font-style: normal;
        text-align: center;
        margin: 0 auto;
      }
      .hl-dialog-inp{
        width: 197px;
        height: 41px;
        margin: 0 auto;
        margin-top: 12px;
        border: 1px dashed #FFF !important;
        border-radius: 9px !important;
        background-clip: padding-box, border-box !important;
        background-origin: padding-box, border-box !important;
        background-image: linear-gradient(0deg, #FFF 0%, #FFF 100%), linear-gradient(135deg, rgba(255, 213, 211, 1), rgba(255, 243, 160, 1), rgba(72, 255, 177, 1), rgba(212, 183, 230, 1), rgba(110, 210, 249, 1)) !important;
        .van-field__control{
          font-family: SFProRounded-Semibold;
          font-weight: 600;
          font-size: 15px;
          line-height: 18px;
          text-align: left;
          font-style: normal;
          color: #B68B19;
        }
      }
      .hl-dialog-footer{
        text-align: center;
      }
    }
  }
}
</style>
