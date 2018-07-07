
<!DOCTYPE html>
<html>

<head>

  <meta charset="UTF-8">

  <!--
Copyright (c) 2015 by Rex Kirby (http://codepen.io/rexkirby/pen/ekvtL)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
-->

  <title>Contact Form</title>

  <style>
  @import url(http://fonts.googleapis.com/css?family=Montserrat:400,700);

html{
  background:#3498db;
}

#feedback-page{
	text-align:center;
}

#text-feedback{
	width: 80%;
	padding-left: 10%;
	padding-right: 10%;
	background-color:white;
	text-align:center;
}

#form-main{
	width:100%;
	float:left;
	padding-top:30px;
}

#centered-div {
	background-color:#3c3c3c;
	padding-left:35px;
	padding-right:35px;
	padding-top:35px;
	padding-bottom:50px;
	width: 450px;
	float: left;
	left: 50%;
	position: absolute;
	margin-left: -260px;
	font-family: 'Montserrat', Helvetica, Arial, sans-serif;
	font-weight:0;
	color: rgba(255,255,255,0.5);
	font-size: 18px;
}


h1
{
	text-align: center;
	font-family: 'Montserrat', Helvetica, Arial, sans-serif;
	font-weight:0;
	color: rgba(255,255,255,0.5);
	font-size: 18px;
}



#button-blue{
	font-family: 'Montserrat', Helvetica, Arial,  sans-serif;
	float:left;
	width: 100%;
	border: #fbfbfb solid 4px;
	cursor:pointer;
	background-color: #3498db;
	color:white;
	font-size:24px;
	padding-top:22px;
	padding-bottom:22px;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	transition: all 0.3s;
}

#button-blue:hover{
	background-color: rgba(0,0,0,0);
	color: #0493bd;
}

.submit:hover {
	color: #3498db;
}

.ease {
  border-top:3px #3c3c3c solid;
	width: 0px;
	height: 76px;
	background-color: #fbfbfb;
	-webkit-transition: .3s ease;
	-moz-transition: .3s ease;
	-o-transition: .3s ease;
	-ms-transition: .3s ease;
	transition: .3s ease;
}

.submit:hover .ease{
  width:100%;
  background-color:white;
}

@media only screen and (max-width: 580px) {
	#centered-div{
		left: 3%;
		margin-right: 3%;
		width: 88%;
		margin-left: 0;
		padding-left: 3%;
		padding-right: 3%;
	}
}

  </style>

  <script>
    window.console = window.console || function(t) {};
    window.open = function(){ console.log('window.open is disabled.'); };
    window.print = function(){ console.log('window.print is disabled.'); };
    // Support hover state for mobile.
    if (false) {
      window.ontouchstart = function(){};
    }
  </script>

</head>

<body>
 <h1>Weet waar je woont - Steenbergen - Contact</h1>
  <div id="form-main">
  <div id="centered-div">
	Your message has been received.<br><BR>
	 <input type="button" value="BACK" id="button-blue"/>
  </div>

  <script>
    if (document.location.search.match(/type=embed/gi)) {
      window.parent.postMessage('resize', "*");
    }
  </script>

</body>

</html>
