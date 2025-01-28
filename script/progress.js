/*language=vue*/
add(`
	<style>
		@scope {
			.max-h {
				animation-name: progress;
				animation-fill-mode: both;
				animation-duration: 1.2s;
				animation-timing-function: ease;
			}
			@keyframes progress {
				from {
					width: 0;
				}
			}
		}
	</style>
	<div class="content f fdc" style="gap: 16px">
		<div v-for="(e,index) of data" class="f fdc">
			<div>
				<div class="f jcsb">
					<span>{{e[0]}}</span>
					<span>{{e[2]}}%</span>
				</div>
				<p style="color:#999;font-size:14px">{{e[1]}}</p>
				<div class="max-w" style="height:4px;margin:8px 0;background-color:#484848;border-radius:4px">
					<div class="max-h" :style="{width:e[2]+'%', animationDelay: index * 0.1 + 's'}" style="background:linear-gradient(to right, #007AFF, #64D2FF);border-radius:4px"></div>
				</div>
			</div>
		</div>
	</div>
`, 'progress', '创作蓝图', '从构思到发布，见证所有路程');
PetiteVue.createApp({
	data: [['玩法设计', '制定核心玩法机制与关卡难度曲线设计', 100], ['制谱器开发', '构建直观的谱面编辑工具，支持可视化音符布局', 100], ['游戏核心开发', '完善打击判定系统与音频处理引擎', 85], ['内部测试阶段', '进行性能优化与游戏平衡性调整', 50], ['UI系统重置', '重新设计游戏界面，优化视觉反馈体验', 20], ['谱面内容制作', '创作并调校多样化难度的游戏谱面', 10], ['内测版本准备', '完善新手引导与社区反馈系统', 0]]
}).mount('#progress');
next();