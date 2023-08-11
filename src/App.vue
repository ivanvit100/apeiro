<template>
  <div id="app">
	<canvas id="stars" class="hyper"></canvas>
	<div class="body">
		<header>
			<nav>
				<img src="/static/logo.png" alt="Логотип сова" class="logo">
				<button class="navButton big">Главная</button>
				<button class="navButton">О нас</button>
				<button class="navButton">Цены</button>
				<button class="navButton">Контакты</button>
				<div class="container">
					<form action="" class="search">
						<input class="search__input" type="search" placeholder="Поиск" id="searchInput">
						<div class="search__icon-container">
							<label for="searchInput" class="search__label" aria-label="Search">
								<svg viewBox="0 0 1000 1000" title="Search"><path fill="currentColor" d="M408 745a337 337 0 1 0 0-674 337 337 0 0 0 0 674zm239-19a396 396 0 0 1-239 80 398 398 0 1 1 319-159l247 248a56 56 0 0 1 0 79 56 56 0 0 1-79 0L647 726z"/></svg>
							</label>
							<button class="search__submit" aria-label="Search">
								<svg viewBox="0 0 1000 1000" title="Search"><path fill="currentColor" d="M408 745a337 337 0 1 0 0-674 337 337 0 0 0 0 674zm239-19a396 396 0 0 1-239 80 398 398 0 1 1 319-159l247 248a56 56 0 0 1 0 79 56 56 0 0 1-79 0L647 726z"/></svg>
							</button>
						</div>
					</form>
				</div>
			</nav>
			<div class="headBanner">
				<div class="headWrapper">
					<div class="space big"></div>
					<div class="headImageWrapper">
						<svg class="triangle" viewBox="0 0 100 100">
							<path class="triangle-line" d="M5 90 L50 0 L95 90 Z"/>
						</svg>
						<img src="/static/images/head.png" alt="Афродита" class="head">
						<svg class="triangle">
							<line x1="300" y1="303" x2="20" y2="303" stroke="white" stroke-width="10"/>
						</svg>
					</div>
					<div class="sloganWrapper">
						<div class="slogan">
							<h1 class="headerH">APEIRO</h1>
							<h2 class="headerH">Креативный взгляд</h2>
							<img src="/static/images/apeiro.png" alt="Бесконечность" class="apeiro">
						</div>
					</div>
					<div class="space big"></div>
				</div>
			</div>
			<div class="space"></div>
			<div class="hrWrapper"><hr/></div>
		</header>
		<div class="intro">
			<div class="aboutH">
				<h1 style="font-weight: 800">О НАШЕЙ</h1>
				<h1 style="font-weight: 300">КОМПАНИИ</h1>
			</div>
			<div class="apo">
				<svg viewBox="0 0 100 100">
					<path d="M5 90 L50 0 L95 90 Z"/>
				</svg>
						<svg viewBox="0 0 100 100">
					<path d="M5 90 L50 0 L95 90 Z"/>
				</svg>
			</div>
			<div class="textWrapper">
				<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan cursus magna, tempus egestas est iaculis ut. Sed non fermentum lacus. Nulla ligula mauris, maximus sed metus id, rhoncus laoreet elit. Aliquam pretium consequat viverra. Suspendisse potenti. Maecenas at auctor nunc, eget interdum erat. Sed id commodo magna. Aenean a consequat urna. Duis vel elit justo. Vivamus in lorem facilisis, hendrerit libero sit amet, fermentum augue.</p><p>
Cras tincidunt ante augue, nec luctus orci commodo quis. Donec a sodales risus, vel convallis eros. Pellentesque vel diam et odio ornare convallis quis sit amet massa. In risus augue, tempor at lorem id, commodo auctor est. Pellentesque a mi sit amet urna congue aliquet at vitae lorem. Vestibulum bibendum vitae erat non sollicitudin. Vivamus tincidunt quam at odio lobortis consequat. Proin ut varius quam. Aliquam vel lobortis enim, ac iaculis magna. Morbi blandit commodo nisi, nec ultrices erat vulputate iaculis. 
				</p>	
			</div>
		</div>
		<div class="pluses">
			<div class="aboutH">
				<h1 style="font-weight: 800">НАШИ</h1>
				<h1 style="font-weight: 300">ПРЕИМУЩЕСТВА</h1>
			</div>
			<div class="space big"></div>
			<div class="plus">
				<img src="/static/images/01.png" alt="1" class="num">
				<h1 class="plusName">НЕЙРОННЫЕ ТЕХНОЛОГИ</h1>
				<div class="apo">
					<svg viewBox="0 0 80 80">
						<path d="M5 5 L30 40 L55 5 Z" fill="transparent"/>
					</svg>
					<svg viewBox="0 0 80 80">
						<path d="M5 5 L30 40 L55 5 Z" fill="transparent"/>
					</svg>
				</div>
				<span>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor consectetur elementum. Nullam finibus metus sodales dictum posuere. Vivamus lacus elit, iaculis sed ante vel, tincidunt ultricies mauris. Etiam dignissim quam eget venenatis sollicitudin.
				</span>
			</div>
			<div class="space big"></div>
			<div class="plus plus2">
				<img src="/static/images/02.png" alt="2" class="num">
				<h1 class="plusName">ИГРОВОЙ ДИЗАЙН</h1>
				<div class="apo">
					<svg viewBox="0 0 80 80">
						<path d="M5 5 L30 40 L55 5 Z" fill="transparent"/>
					</svg>
					<svg viewBox="0 0 80 80">
						<path d="M5 5 L30 40 L55 5 Z" fill="transparent"/>
					</svg>
				</div>
				<span>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor consectetur elementum. Nullam finibus metus sodales dictum posuere. Vivamus lacus elit, iaculis sed ante vel, tincidunt ultricies mauris. Etiam dignissim quam eget venenatis sollicitudin.
				</span>
			</div>
			<div class="space big"></div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="400" height="400" class="side" id="animated-svg">
				<path fill="none" d="M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40 C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z" stroke="#D7D7D7" stroke-width="8" stroke-dasharray="0 256.58892822265625 0">
					<animate attributeName="stroke-dashoffset" values="0;256.58892822265625" dur="1" fill="freeze"></animate>
				</path>
			</svg>
			<img src="/static/images/hand.png" alt="Фон" class="side hand">
			<span class="phrase">Быстро. Качественно. Эффектно.</span>
			<span class="phrase big" style="color: #D7D7D7">Быстро. Качественно. Эффектно.</span>
		</div>
	</div>
  </div>
</template>

<script>
export default{
	name: 'App',
	data(){
		return{
		}
	},
}
</script>
