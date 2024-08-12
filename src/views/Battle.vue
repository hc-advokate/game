<template>
	<div class="com-body battle-body">
		<van-row>
			<van-col :span="24" class="battle-pet">
        <div class="pet-l">
          <van-image fit="cover" :src="Constants.img.battle.petCl" class="pet-il"/>
          <div class="re-flex-row-center pet-name">Lala</div>
        </div>
        <van-image fit="cover" :src="Constants.img.battle.pk" class="pet-ic"/>
        <div class="pet-r">
          <van-image fit="cover" :src="Constants.img.battle.all" class="pet-ir"/>
          <div class="re-flex-row-center pet-name">?</div>
        </div>
      </van-col>
			<van-col
				:span="24"
				class="re-flex-row-center battle-time">
				{{ formatSeconds(data.time) }}
			</van-col>
			<van-col
				:span="24"
				class="re-flex-row-center cc-flex">
				<van-button class="battle-btn" @click="onToInfo">Cancel Match</van-button>
			</van-col>
		</van-row>
	</div>
</template>

<script setup>
  import Constants from "@/plugins/constants/index.js";
	import { formatSeconds } from "@/plugins/utils/format.js";
  import {onBeforeRouteLeave} from "vue-router";

	let data = reactive({
    timeObj: null,
		time: 0,
	});

  const router = useRouter();
  const onToInfo = () => {
    window.clearInterval(data.timeObj);
    data.timeObj = null;
    data.time = 0;
    router.push({path: "/info"});
  }
  const onToStart = () => {
    window.clearInterval(data.timeObj);
    data.timeObj = null;
    data.time = 0;
    router.replace({path: "/battle-start"});
  }

	onActivated(() => {
		data.timeObj = window.setInterval(() => {
			data.time++;
      if (data.time === 10) {
        onToStart();
      }
		}, 1000);
	});
</script>

<style scoped lang="scss">
	.cc-flex {
		display: flex;
	}
	.battle-body {
		background: linear-gradient(124deg, #fff3a0 0%, #fac9c7 50%, #59cdff 100%), #d8d8d8;
	}
  .battle-pet {
    position: relative;
    z-index: 8;
    height: 320px;
    margin-top: 200px;
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
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      .pet-il {
        width: 100%;
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
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;
      .pet-ir {
        width: 100%;
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
		margin-top: 12px;
		width: 235px;
		height: 43px;
		border: none;
		background-color: transparent;
		background-image: url("@/assets/images/battle/btn-bg.png");
		background-size: 100% 100%;
		background-repeat: no-repeat;
		font-family: SFProRounded-Black, SFProRounded;
		font-weight: 900;
		font-size: 18px;
		color: #ffffff;
		line-height: 1;
		text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
		text-align: center;
		font-style: normal;
	}
</style>
