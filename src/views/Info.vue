<template>
	<div class="info-body re-fill">
		<van-row class="info-container">
			<van-col
				span="24"
				class="info-header">
				<div class="prog-body">
					<div class="prog re-mt-8">
						<div
							class="prog-num prog-num1"
							:style="{ width: `${90}%` }"></div>
						<div class="prog-txt re-flex-row-center">90/100</div>
					</div>
					<div class="prog re-mt-8">
						<div
							class="prog-num prog-num2"
							:style="{ width: `${90}%` }"></div>
						<div class="prog-txt re-flex-row-center">90/100</div>
					</div>
				</div>
				<div class="score-body re-flex-row-between">
					<span class="score">Score</span>
					<span class="score re-ml-5">5</span>
					<van-image
              fit="cover"
              :src="Constants.img.info.score"
						class="score-img re-ml-10" />
				</div>
				<div class="amount-body">
					<van-image
              fit="cover"
              :src="Constants.img.info.amount"
						class="amount-img re-ml-10" />
					<div class="amount-num re-flex-row-center-ai">{{ formatThousand(19483) }}</div>
				</div>
			</van-col>
			<van-col
				span="24"
				class="name-level re-flex-row-center">
				<span>Baker</span>
				<span class="re-ml-10">Lv 7</span>
			</van-col>
			<van-col
				span="24"
				class="pet-bat re-flex-row-center">
				<van-image
            fit="cover"
            :src="Constants.img.pet.petPo"
					class="pet-img" />
				<van-image
            fit="cover"
            :src="Constants.img.info.battle"
					class="battle-img"
					@click="onToBattle" />
			</van-col>
			<van-col
				span="24"
				class="task-body">
				<div class="com-box-bd">
					<div class="com-box-bdc task-body-c">
						<div class="btn-list re-flex-row">
							<div
								class="btn-item re-flex-row-center"
								v-for="(item, index) in taskList"
								:key="index"
								@click="onChangeTask(index)"
								:class="data.selectTask === index ? 'btn-item_active' : 'com-btn'">
								<span class="com-btn-txt">{{ item.text }}</span>
							</div>
						</div>
						<van-swipe
							:loop="false"
							:show-indicators="false"
							:width="170"
							class="task-list"
							v-if="taskList[data.selectTask]">
							<van-swipe-item
								class="task-item"
								v-for="(item, index) in taskList[data.selectTask].child"
								:key="index">
								<div class="item-body">
									<van-image
                      fit="cover"
                      :src="item.img"
										class="" />
									<div class="task-title task-txt">{{ item.title }}</div>
									<div class="task-title task-txt">Score: {{ item.score }}</div>
									<van-button
										class="task-btn"
										@click="onToTask"
										>START</van-button
									>
								</div>
							</van-swipe-item>
						</van-swipe>
					</div>
				</div>
			</van-col>
		</van-row>
	</div>
</template>

<script setup>
	import Constants from "@/plugins/constants";
	import { formatThousand } from "@/plugins/utils/format.js";

	const taskList = [
		{
			index: 0,
			text: "Mission",
			child: [
				{
					id: 11,
					img: Constants.img.info.taskHb,
					video: "",
					title: "Make apple pie",
					score: 10,
				},
				{
					id: 12,
					img: Constants.img.info.taskRen,
					video: "",
					title: "Make clothes",
					score: 5,
				},
				{
					id: 13,
					img: Constants.img.info.taskBs,
					video: "",
					title: "Gem mining",
					score: 5,
				},
				{
					id: 14,
					img: Constants.img.info.taskCc,
					video: "",
					title: "Make tools",
					score: 5,
				},
				{
					id: 15,
					img: Constants.img.info.taskDl,
					video: "",
					title: "Gem mining",
					score: 5,
				},
				{
					id: 16,
					img: Constants.img.info.taskXf,
					video: "",
					title: "Mail delivery",
					score: 5,
				},
				{
					id: 17,
					img: Constants.img.info.taskYp,
					video: "",
					title: "Catch dream",
					score: 5,
				},
			],
		},
		{
			index: 1,
			text: "Recreation",
			child: [],
		},
		{
			index: 2,
			text: "Collection",
			child: [],
		},
	];

	let data = reactive({
		selectTask: 0,
	});

	const onChangeTask = (index) => {
		data.selectTask = index;
	};

	const router = useRouter();
	const onToBattle = () => {
		router.push({ path: "/battle" });
	};
	const onToTask = () => {
		router.push({ path: "/task" });
	};
</script>

<style scoped lang="scss">
	.info-body {
		background-image: url("@/assets/images/info/bg.png");
		background-size: 100% 100%;
		background-repeat: no-repeat;
		overflow: scroll;
	}
	.info-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		padding: 15px 20px 0;
	}
	.prog {
		width: 110px;
		height: 16px;
		border: 2px solid rgba(255, 255, 255, 1);
		border-radius: 10px;
		background-color: rgba(255, 165, 165, 1);
		position: relative;
		.prog-num {
			width: 100%;
			height: 100%;
			border-radius: 10px;
		}
		.prog-num1 {
			background: linear-gradient(90deg, #59cdff 0%, #48ffb1 51%, #fff3a0 100%);
		}
		.prog-num2 {
			background: linear-gradient(90deg, #fff3a0 0%, #ffb948 100%);
		}
		.prog-txt {
			width: 100%;
			height: 100%;
			background: transparent;
			position: absolute;
			top: 0;
			left: 0;
			font-family: SFProRounded-Bold, SFProRounded;
			font-weight: bold;
			font-size: 11px;
			color: #ffffff;
			line-height: 1;
			text-shadow: 0px 0px 4px rgba(177, 61, 61, 0.74);
			text-align: left;
			font-style: normal;
		}
	}
	.score-body {
		.score {
			font-family: SFProRounded-Bold, SFProRounded;
			font-weight: bold;
			font-size: 15px;
			color: #ffffff;
			line-height: 1;
			text-shadow: 0px 0px 4px rgba(177, 61, 61, 0.74);
			text-align: left;
			font-style: normal;
		}
		.score-img {
			width: 30px;
			height: 30px;
		}
	}
	.amount-body {
		position: relative;
		.amount-img {
			width: 90px;
			height: 30px;
		}
		.amount-num {
			width: 90px;
			height: 30px;
			position: absolute;
			top: 0;
			left: 0;
			font-family: SFProRounded-Bold, SFProRounded;
			font-weight: bold;
			font-size: 15px;
			color: #ffffff;
			line-height: 1;
			text-shadow: 0px 0px 4px rgba(177, 61, 61, 0.74);
			text-align: left;
			font-style: normal;
			justify-content: flex-end;
		}
	}
	.name-level {
		font-family: SFProRounded-Bold, SFProRounded;
		font-weight: bold;
		font-size: 15px;
		color: #ffffff;
		line-height: 1;
		text-align: center;
		font-style: normal;
	}
	.pet-bat {
		position: relative;
		display: flex;
		.pet-img {
			height: 400px;
		}
		.battle-img {
			width: 42px;
			height: 42px;
			position: absolute;
			bottom: 0;
			right: 20px;
		}
	}
	.task-body {
		margin-top: 7px;
		padding: 10px;
		.task-body-c {
			padding: 8px;
		}
		.btn-list {
			overflow-x: hidden;
			overflow-y: hidden;
			scrollbar-width: none;
			&::-webkit-scrollbar {
				display: none;
			}
			.btn-item {
				flex-basis: 99px;
				flex-shrink: 0;
				width: 99px;
				height: 25px;
				margin-right: 10px;
			}
			.btn-item_active {
				background-image: url("@/assets/images/info/btn-bg.png");
				background-size: 100% 100%;
				background-repeat: no-repeat;
				.com-btn-txt {
					font-family: SFProRounded-Bold, SFProRounded;
					font-weight: 900;
					font-size: 15px;
					color: #ffffff;
					line-height: 1;
					text-shadow: 0px 0px 4px rgba(177, 61, 61, 0.74);
					text-align: center;
					font-style: normal;
				}
			}
		}
		.task-list {
			margin-top: 8px;
			.task-item {
				padding: 5px;
				.task-txt {
					font-family: SFProRounded-Bold, SFProRounded;
					font-weight: bold;
					font-size: 15px;
					color: #b68b19;
					line-height: 1.2;
					text-align: center;
					font-style: normal;
				}
				.task-btn {
					width: 100%;
					border: none;
					background-image: url("@/assets/images/info/btn-bd.png");
					background-size: 100% 100%;
					background-repeat: no-repeat;
					font-family: SFProRounded-Black, SFProRounded;
					font-weight: 900;
					font-size: 14px;
					color: #ffffff;
					line-height: 1;
					text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
					text-align: center;
					font-style: normal;
				}
				.item-body {
					padding: 15px 5px;
					border: 1px solid transparent;
					border-radius: 10px;
					background-clip: padding-box, border-box;
					background-origin: padding-box, border-box;
					background-image: linear-gradient(0deg, #fff 0%, #fff 100%),
						linear-gradient(180deg, rgba(212, 183, 230, 1), rgba(255, 213, 211, 1), rgba(255, 243, 160, 1), rgba(72, 255, 177, 1), rgba(110, 210, 249, 1));
				}
			}
		}
	}
</style>
