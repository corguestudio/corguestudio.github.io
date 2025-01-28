/*language=vue*/
add(`
	<style>
		@scope {
			.timeline {
				position: relative;
				display: flex;
				flex-direction: column;
				
				.item {
					.content {
						padding: 20px;
						background: #1e1e1e;
						box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
						transition: all 0.3s ease;
					}
				}
			}
			
			@media (max-width: 431px) {
				.timeline {
					margin: 0;
					gap: 16px;
				}
			}
			
			@media (min-width: 431px) {
				.timeline {
					display: flex;
					flex-direction: column;
					align-items: center;
					max-width: 800px;
					margin: 0 auto;
					
					.line {
						position: absolute;
						top: 0;
						height: 100%;
						left: 50%;
						width: 2px;
						background: #2196f3;
						box-shadow: 0 0 20px 1px rgb(0 142 255 / 90%);
					}
					
					.item {
						width: calc(50%);
						
						&:nth-child(odd) {
							margin-right: calc(50%);
							
							.content {
								border-radius: 8px 0 0 8px;
							}
						}
						
						&:nth-child(even) {
							margin-left: calc(50%);
							
							.content {
								border-radius: 0 8px 8px 0;
							}
						}
					}
				}
			}
		}
	</style>
	<div class="content">
		<div class="timeline">
			<p class="line"></p>
			<div class="item" v-for="e of d">
				<div class="content">
					<p style="color:#2196f3;font-size:16px;margin-bottom:8px">{{ e.date }}</p>
					<p style="font-size:20px;margin-bottom:12px;color:#fff">{{ e.title }}</p>
					<p style="color:#aaa;line-height:1.6">{{ e.desc }}</p>
				</div>
			</div>
		</div>
	</div>
`, 'timeline', '时间的旅程', '探索我们的故事与梦想');
PetiteVue.createApp({
	d: [{
		date: '2023.1.17',
		title: '项目启动',
		desc: '我们开始了这个激动人心的项目，团队充满热情地投入到工作中。'
	}, {
		date: '2023.1.24',
		title: '工作室成立',
		desc: '棱角工作室正式成立，团队开始组建。'
	}, {
		date: '2024.2.11',
		title: '玩法演示',
		desc: '发布了游戏的实机演示，展示了核心玩法。'
	}, {
		date: '2024.7.29',
		title: '开发日志#1',
		desc: '发布了初版UI和游戏概念的介绍。'
	}, {
		date: '2025.7后',
		title: '开发日志#2',
		desc: '将发布全新UI和部分游戏机制的介绍。'
	}]
}).mount('#timeline');
next();