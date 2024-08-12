<template>
  <div class="hl-container">
    <van-row>
      <van-col span="24" class="hl-title-bar">
        <van-nav-bar left-arrow title="Make Apple Pie" class="hl-nav-bar" @click-left="onClickLeft" />
      </van-col>
    </van-row>
    <video autoPlay muted loop playsInline object-fit="cover" class="hl-video" id="headerVideo" controlsList="nodownload nofullscreen" :disablePictureInPicture="true">
      <source :src="Constants.video.task.testTaskVideo" type="video/mp4" />
    </video>
    <div class="hl-info-box">
      <p class="hl-info-time">Duration : 22 : 00</p>
      <van-button class="hl-m5 hl-stop-btn">STOP</van-button>
    </div>
  </div>
</template>

<script setup>
import Constants from "@/plugins/constants/index.js";

const onClickLeft = () => history.go(-1);
</script>

<style scoped lang="scss">
.hl-video{
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  top: 0;
  left: 0;
}

.hl-info-box{
  position: absolute;
  left: 50%;
  bottom: 140px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  .hl-info-time{
    font-family: SFProRounded-Bold;
    font-weight: bold;
    font-size: 15px;
    color: #FFFFFF;
    line-height: 18px;
    font-style: normal;
  }
  .hl-stop-btn{
    width: 142px;
    height: 42px;
    background: none;
    border: none;
    background-image: url("@/assets/images/info/btn-bd.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    font-family: SFProRounded-Black;
    font-weight: 900;
    font-size: 14px;
    color: #ffffff;
    text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
    text-align: center;
    font-style: normal;
    &::before{
      background: none;
      border: none;
    }
  }
}

.hl-m5{
  margin-top: 5px;
}
</style>
