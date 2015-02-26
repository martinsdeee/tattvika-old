<html>
	<head>
		<link href='//fonts.googleapis.com/css?family=Lato:100' rel='stylesheet' type='text/css'>
		<link href='/vendor/font-awesome/css/font-awesome.css' type='text/css'>
		<title>Tattvika.com</title>
		<style>
			body {
				background: #F8CA00;
				background: url('/img/desk.jpg');
				background-size: cover;
				margin: 0;
				padding: 0;
				width: 100%;
				height: 100%;
				color:  #ffffff;
				display: table;
				text-shadow: 0 1px 3px rgba(0,0,0,.5);
				font-weight: 100;
				font-family: 'Lato';

			}

			.container {
				background: rgba(0, 0, 0, 0.54);
				text-align: center;
				display: table-cell;
				vertical-align: middle;
			}

			.content {
				border-radius: 7px;
				padding: 27px;
				text-align: center;
				display: inline-block;
			}

			.title {
				font-size: 96px;
				margin-bottom: 40px;
			}

			.quote {
				font-size: 24px;
			}
		</style>
	</head>
	<body>
		<div class="container">
			<div class="content">
				<h1 class="title">{{Config::get('app.business.title')}}</h1>
				<h2 class="quote">{{Config::get('app.business.slogan')}}</h2>
			</div>
		</div>
		@include('partials/analytics')
	</body>
</html>
