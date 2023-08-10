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
				<h1 style="font-weight: 800; margin-top: 40px; margin-bottom: -20px;">О НАШЕЙ</h1>
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
