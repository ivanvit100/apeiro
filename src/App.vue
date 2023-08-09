<template>
  <div id="app">
	<canvas id="stars" class="hyper"></canvas>
	<div class="body">
		<header>
			<nav>
				<img src="/static/logo.png" alt="Логотип сова" class="logo">
				<button class="navButton">Главная</button>
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
					<div class="space"></div>
					<img src="/static/images/head.png" alt="Афродита" class="head">
					<div class="sloganWrapper">
						<div class="slogan">
							<h1 class="headerH">APEIRO</h1>
							<h2 class="headerH">Креативный взгляд</h2>
							<img src="/static/images/apeiro.png" alt="Бесконечность" class="apeiro">
						</div>
					</div>
					<div class="space"></div>
				</div>
			</div>
			<div class="space"></div>
			<div class="hrWrapper"><hr/></div>
		</header>
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
