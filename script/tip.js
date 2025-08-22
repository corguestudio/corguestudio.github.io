/*language=vue*/
document.body.innerHTML += `
	<h1 :class="{hide: h}" @vue:mounted="onMounted" id="tip" style="white-space:nowrap;transition:linear all 0.3s" v-scope="app">{{s}}</h1>
	<style>
		@scope {
			.hide {
				opacity: 0;
			}
		}
	</style>`;
PetiteVue.createApp({
	app: PetiteVue.reactive({
		h: false,
		s: '',
		onMounted() {
			const allTips = ['真正的梦想为何物？', '航行器，前进四！', '我失忆了，这游戏怎么玩？', '航途 Route 没有 rating 机制，尽可能取得高分吧！', '洛尔萨斯快报：近期有大量人员失踪，请大家注意防范。',
				'猫猫～猫猫～（吸溜）', '众所周知，航途有一套算法……', '相信吧！只管相信就是了！', '如果累了的话，就早点休息哦～', '为什么你还不放下手机去睡觉，是不想吗？', '要天天开心！', '笑啊？为什么不笑呢？',
				'大神们只需要起飞就行了，谱师考虑的就多了……', '想知道起飞是什么感觉吗？', '快看我快看我！', '平板飞走了？！', '航途↑Route↓ 是一款单人掉线开飞机游戏（？', '大量记忆波纹会导致屏幕起火。',
				'教练教我，我要玩航途！', '您的航行器飞走啦!', '航行器五块钱两个！', 'AP 的一小步，是航行的一大步', '航线千万条，安全第一条！', '航途的意义？',
				'你知道吗？当你重开游戏后，航行器会在世界的某处静静地等待着你的到来。', '当你在看 tip 时，tip 也在凝视着你……'];
			const next = () => {
				const x = (this.s = allTips[Math.floor(Math.random() * allTips.length)]).length;
				setTimeout(() => {
					this.h = true;
					setTimeout(next, 300);
				}, x < 10 ? 3000 : 3000 + (x - 10) * 100);
				this.h = false;
			}
			next();
		}
	})
}).mount('#tip');
next();