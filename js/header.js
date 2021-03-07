$(function(){
$('.nav li .sub_menu:first').hover(function(){
$(this).parent().children('.ligin-internet').addClass('ligin-active'); 
}, function () {
 $(this).parent().children('.ligin-internet').removeClass('ligin-active')
 }
);	
})

var eURL = "/online-services/offer-zone/"
function callhref1(){
	var sURL = document.URL.toString();
	var strLink = eURL + "lightfb.html?url=" + sURL;
	document.getElementById("link1").setAttribute("href",strLink);
}
function callhref2(){
	var sURL = document.URL.toString();
	var strLink = eURL + "lighttwt.html?url=" + sURL;
	document.getElementById("link2").setAttribute("href",strLink);
}

function callhref5(){
	var sURL = document.URL.toString();
	var strLink = eURL + "lightlinkedin.html?url=" + sURL;
	document.getElementById("link5").setAttribute("href",strLink);
}

var csstype="inline"  
var mac_css='.pbsublinks a{font-size: 10px !important; }' 
var mactest=navigator.userAgent.indexOf("Mac")!=-1
if (csstype=="inline"){
document.write('<style type="text/css">')
if (mactest)
document.write(mac_css)
else{}
document.write('</style>')
}
function validation()   {
	var a = document.getElementById('normal').value;
	if(a.length==0) 	{
		alert("Search : Please enter a word or phrase for the search query.");
		return false;
	} 	else  {
		document.home.action="http://search.icicibank.com/IN/search.jsp";
		document.home.method="POST";
	}
}
 
function kd(e) {
	var intKey = (window.Event) ? e.which : e.keyCode;
	var check = false;
	if (intKey == 13) { //enter key
		pass_value();
		return true;
	} else if((intKey >= 33 && intKey <=47) || (intKey >= 58 && intKey <=64) || (intKey >= 91 && intKey <=96) || (intKey >= 123 && intKey <=127)){
		alert("The field has special characters.");
		return false;
	} else {}
}


$(document).ready(function(){
			$('.discpop').click(function(){
			$('.shadeDiv').fadeIn(1000);
			$('.popupCont2').fadeIn(1000);
			$('.closePop').click(function(){
				$('.popupCont2').fadeOut(1000);
				$('.shadeDiv').fadeOut(1000);
				});
				});
			var eURL = "/online-services/offer-zone/"
						   $('#FacebookBtn').click(function(){
											  	var sURL = document.URL.toString();
												var strLink = eURL + "lightfb.html?url=" + sURL;
												window.location = strLink;
											  });
						   $('#TwitterBtn').click(function(){
												var sURL = document.URL.toString();
												var strLink = eURL + "lighttwt.html?url=" + sURL;
												window.location = strLink;			
												});
						   $('#LinkedInBtn').click(function(){
												var sURL = document.URL.toString();
												var strLink = eURL + "lightlinkedin.html?url=" + sURL;
												window.location = strLink;			
												});
			});



/** Header start **/

function showHeader(){
  var serverName = "http://10.16.240.94";
  document.write('<header class="nav-header"><div class="middleContainer clearfix"><ul class="menu"><li><a href="/index.page?">Personal</a></li><li class="selected"><a href="/privilege-banking/index.page?">Privilege</a></li><li><a href="/wealth-management/index.page?">Wealth</a></li><li><a href="http://www.icicibankprivatebanking.com/">Private</a></li><li><a href="/nri-banking/nri-banking.page?">NRI</a></li><li><a href="/corporate/corp-index.page?">Corporate</a></li><li><a href="/business-banking/index.page?">Business</a></li></ul><div class="SearcContainer" ajax="/en/ajax/ajax-suggestions.page?"><form method="post" action="/en/search/search-results.page?"><input type="hidden" name="segment" value="Personal"><input type="text" name="token" id="Search"><input type="image" src="/html/en/privilege-banking/personal/images/MagnifyingGlass.png"></form></div></div></header><div class="middleContainer secondNav clearfix"><a class="Logo" href="/privilege-banking/index.page?" style="background-image:url(/html/en/privilege-banking/personal/images/logo-big.jpg);"></a><ul class="menu clearfix"><li class="subnav-header hover mobile-show" id="nav-personal"><a href="/privilege-banking/index.page?">Privilege</a><i class="icon-angle-down"></i><i class="icon-angle-up"></i></li><li class="nav-products shorter"><a href="/privilege-banking/personal/privilege-banking-advantage.page?">Advantage</a><span class="arrow-up" style="display: none;"></span><div class="nav-child" id="nav-child" style="display: none;"><div class="sub-container"><ul><li class="clearfix"><div class="icon-holder"><a href="/privilege-banking/personal/DedicatedServiceArea.page?"><img src="/managed-assets/images/flyout/privilege/Dedicated-Service-Area.png"></a></div><div class="info-holder"><h5><a href="/privilege-banking/personal/DedicatedServiceArea.page?">Dedicated Service Area</a></h5><a href="/privilege-banking/personal/DedicatedServiceArea.page?"><p></p><p>Exclusive area at branches for Privilege Banking customers</p><p></p></a></div></li></ul><ul><li class="clearfix"><div class="icon-holder"><a href="/privilege-banking/personal/PriorityService.page?"><img src="/managed-assets/images/flyout/privilege/Priority-Service.png"></a></div><div class="info-holder"><h5><a href="/privilege-banking/personal/PriorityService.page?">Priority Service</a></h5><a href="/privilege-banking/personal/PriorityService.page?"><p></p><p>Effortless and hassle-free banking experience</p><p></p></a></div></li></ul><ul class="last"><li class="clearfix"><div class="icon-holder"><a href="/privilege-banking/personal/SpecialPrivileges.page?"><img src="/managed-assets/images/flyout/privilege/special-privileges-new.png"></a></div><div class="info-holder"><h5><a href="/privilege-banking/personal/SpecialPrivileges.page?">Special Privileges</a></h5><a href="/privilege-banking/personal/SpecialPrivileges.page?"><p></p><p>Exclusive relationship and lifestyle privileges</p><p></p></a></div></li></ul></div><div class="blue-banner"><p><a href="/privilege-banking/personal/SpecialPrivileges-overview.page?"><img src="/managed-assets/images/privilege/top-flyout/privilege-banking.jpg" alt=""></a></p></div></div></li><li class="nav-products shorter"><a href="/privilege-banking/personal/your-life-stage.page?">Your Lifestage</a><span class="arrow-up" style="display: none;"></span><div class="nav-child" id="nav-child" style="display: none;"><div class="sub-container"><ul><li class="clearfix"><div class="icon-holder"><a href="/privilege-banking/personal/the-early-days.page?"><img src="/managed-assets/images/flyout/privilege/Early-Days.png"></a></div><div class="info-holder"><h5><a href="/privilege-banking/personal/the-early-days.page?">Early  Days</a></h5><a href="/privilege-banking/personal/the-early-days.page?"><p></p><p>Banking services to meet your goals</p><p></p></a></div></li><li class="clearfix"><div class="icon-holder"><a href="/privilege-banking/personal/protecting-your-loved-ones.page?"><img src="/managed-assets/images/flyout/privilege/protecting your loved ones.png"></a></div><div class="info-holder"><h5><a href="/privilege-banking/personal/protecting-your-loved-ones.page?">Protecting Your Loved Ones</a></h5><a href="/privilege-banking/personal/protecting-your-loved-ones.page?"><p></p><p>Secure your family\'s future</p><p></p></a></div></li></ul><ul><li class="clearfix"><div class="icon-holder"><a href="/privilege-banking/personal/family-and-you.page?"><img src="/managed-assets/images/flyout/privilege/family-new.png"></a></div><div class="info-holder"><h5><a href="/privilege-banking/personal/family-and-you.page?">Family and You</a></h5><a href="/privilege-banking/personal/family-and-you.page?"><p></p><p>Plan a better tomorrow for your family</p><p></p></a></div></li></ul><ul class="last"><li class="clearfix"><div class="icon-holder"><a href="/privilege-banking/personal/retirement.page?"><img src="/managed-assets/images/flyout/privilege/Retirement.png"></a></div><div class="info-holder"><h5><a href="/privilege-banking/personal/retirement.page?">Retirement</a></h5><a href="/privilege-banking/personal/retirement.page?"><p></p><p>Comfortable and financially secure retirement</p><p></p></a></div></li></ul></div><div class="blue-banner"><p><a href="/privilege-banking/personal/iMobile.page?"><img src="/managed-assets/images/privilege/top-flyout/iMobile.jpg" alt=""></a></p></div></div></li><li class="nav-products shorter"><a href="/privilege-banking/personal/products-services.page?">Products</a><span class="arrow-up"></span><div class="nav-child" id="nav-child"><div class="sub-container"><ul><li class="clearfix"><div class="icon-holder"><a href="/privilege-banking/personal/account-and-deposits.page?"><img src="/managed-assets/images/flyout/personal/investment.png"></a></div><div class="info-holder"><h5><a href="/privilege-banking/personal/account-and-deposits.page?">Accounts &amp; Deposits</a></h5><a href="/privilege-banking/personal/account-and-deposits.page?"><p></p><p>A range of accounts to cater to your banking needs</p><p></p></a></div></li><li class="clearfix"><div class="icon-holder"><a href="/privilege-banking/personal/investments.page?"><img src="/managed-assets/images/flyout/personal/wealth.png"></a></div><div class="info-holder"><h5><a href="/privilege-banking/personal/investments.page?">Investments</a></h5><a href="/privilege-banking/personal/investments.page?"><p></p><p>Manage your investments smartly with ICICI Bank</p><p></p></a></div></li></ul><ul><li class="clearfix"><div class="icon-holder"><a href="/privilege-banking/personal/credit-and-debit-cards.page?"><img src="/assets/img/icici_version6_homepage_10Sep13_V1_21.png"></a></div><div class="info-holder"><h5><a href="/privilege-banking/personal/credit-and-debit-cards.page?">Credit and Debit Cards</a></h5><a href="/privilege-banking/personal/credit-and-debit-cards.page?"><p></p><p>Get exclusive privileges with ICICI Bank cards</p><p></p></a></div></li><li class="clearfix"><div class="icon-holder"><a href="/privilege-banking/personal/insurance.page?"><img src="/assets/img/icici_version6_homepage_04Sep13_V1-(1)_08.png"></a></div><div class="info-holder"><h5><a href="/privilege-banking/personal/insurance.page?">Insurance</a></h5><a href="/privilege-banking/personal/insurance.page?"><p></p><p>Insurance products for all your needs</p><p></p></a></div></li></ul><ul class="last"><li class="clearfix"><div class="icon-holder"><a href="/privilege-banking/personal/loans.page?"><img src="/managed-assets/images/flyout/personal/payments-icon.png"></a></div><div class="info-holder"><h5><a href="/privilege-banking/personal/loans.page?">Loans</a></h5><a href="/privilege-banking/personal/loans.page?"><p></p><p>Turn your dreams into reality</p><p></p></a></div></li></ul></div><div class="blue-banner"><p><a href="/privilege-banking/personal/Provident-Fund-Accounts.page?"><img src="/managed-assets/images/privilege/top-flyout/PPF.jpg" alt=""></a></p></div></div></li><li class="nav-products shorter"><a href="/privilege-banking/personal/SpecialPrivileges-overview.page?">Special Privileges</a><span class="arrow-up" style="display: none;"></span><div class="nav-child" id="nav-child" style="display: none;"><div class="sub-container"><ul><li class="clearfix"><div class="icon-holder"><a href="/privilege-banking/personal/relationship-privileges.page?"><img src="/managed-assets/images/flyout/privilege/Relationship-Privileges.png"></a></div><div class="info-holder"><h5><a href="/privilege-banking/personal/relationship-privileges.page?">Relationship Privileges</a></h5><a href="/privilege-banking/personal/relationship-privileges.page?"><p></p><p>Enjoy privileges across ICICI Bank products and services</p><p></p></a></div></li></ul><ul class="last"><li class="clearfix"><div class="icon-holder"><a href="/privilege-banking/personal/privilege-delights.page?"><img src="/managed-assets/images/flyout/privilege/Privilege-Delights.png"></a></div><div class="info-holder"><h5><a href="/privilege-banking/personal/privilege-delights.page?">Privilege Delights</a></h5><a href="/privilege-banking/personal/privilege-delights.page?"><p></p><p>Exclusive offers that compliment your lifestyle</p><p></p></a></div></li></ul></div><div class="blue-banner"><p><a href="/privilege-banking/personal/e-Locker.page?"><img src="/managed-assets/images/privilege/top-flyout/e-locker.jpg" alt=""></a></p></div></div></li><li class="nav-products shorter"><a href="/privilege-banking/personal/resource-center.page?">Resource Centre</a><span class="arrow-up"></span><div class="nav-child" id="nav-child"><div class="sub-container"><ul><li class="clearfix"><div class="icon-holder"><a href="/privilege-banking/personal/investment-insights.page?"><img src="/managed-assets/images/flyout/privilege/investment-new.png"></a></div><div class="info-holder"><h5><a href="/privilege-banking/personal/investment-insights.page?">Investment Insights</a></h5><a href="/privilege-banking/personal/investment-insights.page?"><p></p><p>Insights to help you make informed decisions</p><p></p></a></div></li></ul><ul><li class="clearfix"><div class="icon-holder"><a href="/privilege-banking/personal/global-outlook-research.page?"><img src="/managed-assets/images/flyout/privilege/reports-new.png"></a></div><div class="info-holder"><h5><a href="/privilege-banking/personal/global-outlook-research.page?">Reports</a></h5><a href="/privilege-banking/personal/global-outlook-research.page?"><p></p><p>Get access to in-depth research from our experts</p><p></p></a></div></li></ul><ul class="last"><li class="clearfix"><div class="icon-holder"><a href="/privilege-banking/personal/tools-and-calculators.page?"><img src="/managed-assets/images/flyout/privilege/tool-new.png"></a></div><div class="info-holder"><h5><a href="/privilege-banking/personal/tools-and-calculators.page?">Tools &amp; Calculators</a></h5><a href="/privilege-banking/personal/tools-and-calculators.page?"><p></p><p>Plan investments using personal finance tools</p><p></p></a></div></li></ul></div><div class="blue-banner"><p><a href="/privilege-banking/personal/Mutual-Funds.page?"><img src="/managed-assets/images/privilege/top-flyout/mutual-funds.jpg" alt=""></a></p></div></div></li></ul><div class="LeftPanel">&nbsp;</div></div>');
}

  $('.menu li').live("mouseover", function(){
    $(this).find('.arrow-up').css('display', 'block');
    $(this).find('.nav-child').show();
  });

  $('.menu li').live("mouseout", function(){
    $(this).find('.arrow-up').hide();
    $(this).find('.nav-child').hide();
  });

/** Header end **/



/** **/

function showFooter(){
   document.write('<footer><ul class="containers"><li class="first"><div class="textcontent"><div class="header first">Explore</div><a href="/Personal-Banking/faq/index.page?">ICICI Bank Answers</a><a href="/Personal-Banking/cards/Consumer-Cards/Credit-Card/all-cards.page?">Credit Cards</a><div class="header">Initiatives</div><a href="http://www.icicifoundation.org/" target="_blank">Social Initiatives (ICICI Bank Foundation)</a><a href="/go-green/Index.html" target="_blank">Go Green</a><div class="header"><a href="/aboutus/awards.page?">Awards</a></div><a href="/aboutus/awards.page?year=2013&amp;type=Awards">2013</a> <a href="/aboutus/awards.page?year=2012&amp;type=Awards">2012</a><a href="/aboutus/awards.page?year=2011&amp;type=Awards">2011</a> <!--textContent div close--></div><div class="textcontent"><div class="header first">Rates and Charges</div><a href="/interest-rates.page?">Interest Rates</a><a href="https://infinity.icicibank.co.in/BANKAWAY?Action.Gold.NLI=Y&_ga=1.223502619.1467881933.1438229030" target="_blank">Gold Rate Today</a> <a href="/service-charges/service-charges.page?" target="_self">Service Charges and Fees</a><div class="header">Others</div><a href="/customer-care.page?">Customer Care</a><a href="/form-center.page?">Form Center</a> <a href="/media-gallery/media-gallery.page?">Media Gallery</a> <a href="/notice-board.page?">Notice Board</a> <a href="/feedback.page?">Feedback</a> <a href="/sitemap.page?tabname=privilege">Sitemap</a> <a class="spacer" href="/aboutus/about-us.page?">About Us</a> <!--textContent div close--></div></li><li class="second"><a class="facebook" onclick="window.open("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(location.href),"facebook-share-dialog","width=626,height=436");return false;" href="#">Share this Page</a> <a class="twitter" onclick="window.open( "https://twitter.com/share?text=An%20Awesome%20Link&amp;", "width=626,height=436"); return false;" href="#">Tweet This Page</a> <a class="linkedIn" onclick="window.open( "https://www.linkedin.com/shareArticle?mini=true&amp;url=/index.page?", "width=626,height=436"); return false;" href="#">Link This Page</a> </li><li><fieldset><label>Other ICICI Bank Website</label><div class="selector" id="uniform-Other" style="width: 217px;"><span style="width: 217px; -webkit-user-select: none;">Select ICICI Website</span><select class="Other" id="Other" name="Other"><option>Select ICICI Website</option><option value="http://www.icicigroupcompanies.com/">ICICI Group</option><option value="http://www.icicifoundation.org/">ICICI Foundation</option><option value="https://www.icicilombard.com/">ICICI Lombard General Insurance</option><option value="http://www.icicisecurities.com/">ICICI Securities</option><option value="http://www.iciciprulife.com/public/default.htm"> ICICI Prudential Life Insurance</option><option value="http://www.icicipruamc.com/">ICICI Prudential AMC</option><option value="http://www.iciciventure.com/">ICICI Venture</option><option value="http://www.icicidirect.com/">ICICI Direct</option><option value="http://www.icicisecuritiespd.com/">ICICI Securities Primary Dealership Ltd</option><option value="http://dishafc.org/">DISHA Financial Counselling</option><option value="http://www.icicihfc.com/"> ICICI Home Finance</option><option value="/ebor/index.html">Erstwhile The Bank of Rajasthan </option><option value="https://www.icicicareers.com/icici_career/home.aspx?X">Careers</option></select></div></fieldset><fieldset class="mtop"><label> ICICI Bank Country Websites</label><div class="selector" id="uniform-Other" style="width: 217px;"><span style="width: 217px; -webkit-user-select: none;">Select Country</span><select class="Other" id="Other" name="Other"><option>Select Country</option><option value="http://www.icicibankbahrain.com/">Bahrain</option><option value="http://www.icicibank.ca/">Canada</option><option value="http://www.icicibank.de/">Germany</option><option value="http://www.icicibank.hk/">HongKong</option><option value="http://www.icicibankrussia.com/">Russia</option><option value="http://www.icicibank.com.sg/">Singapore</option><option value="http://www.icicibank.lk/"> SriLanka</option><option value="http://www.icicibank.co.uk/">UK</option><option value="http://www.icicibankusa.com/">US</option></select></div></fieldset></li></ul><div class="middleContainer"><span class="mobile-show copyrightclass">ICICI Bank © 2014  |  </span><a href="/terms-condition/terms-and-conditions.page?">Terms &amp; Conditions</a>&nbsp;|&nbsp;<a href="/do-not-call.page?">Do Not Call Registry</a>&nbsp;|&nbsp;<a href="/disclaimer.page?">Disclaimer</a>&nbsp;|&nbsp;<a href="/multilingual-disclaimer.page?">Multilingual Disclaimer</a>&nbsp;|&nbsp;<a href="/code-of-commitment.page?">Code of Commitment</a>&nbsp;|&nbsp;<a href="/managed-assets/docs/personal/general-links/code_of_business_conduct_ethics.pdf"> Group Code of Business Conduct and Ethics</a>&nbsp;|&nbsp;<a href="/unparliamentary-language-by-customers.page?">Use of Unparliamentary Language by Customers</a>&nbsp;|&nbsp;<a href="/privacy.page?">privacy</a>&nbsp;|&nbsp;<a href="/usa-patriot-act-certification.page?">USA Patriot Act Certification</a></div></footer>');
}

/** **/



function TopLinks(){
	document.write('<div class="top-links">'+
      '<div class="top-links-left"> <a href="/">ICICI Bank Home</a><span>|</span><a href="/aboutus/about-us.page">About Us</a><span>|</span><a href="/sitemap.page">Sitemap</a><span>|</span> <a href="https://infinity.icicibank.co.in/web/emailus/jsp/emailUs.jsp" target="_blank">Email Us</a><span>|</span> <a href="/customer-care.page">24hr Customer Care</a><span>|</span> <a href="/find-atm-branch.page">Find ATM / Branch</a><span>|</span></div>'+
      '<div class="top-links-right">'+
        '<div class="sharebox">'+
            '<div class="left rlspace">Share</div>'+
            	'<img src="/images/home-header/FacebookShareButton.png" id="FacebookBtn" /> <img src="/images/home-header/TwitterShareButton.png" id="TwitterBtn" /> <img src="/images/home-header/LinkedInShareButton.png" id="LinkedInBtn" />'+
            '</div>'+'<div class="searchbox">'+
          '<form style="padding-bottom: 0pt; margin-bottom: 0pt;" target="_blank" action="http://search.icicibank.com/IN/search.jsp" method="POST">'+
'<input name="normal" type="text" id="normal" value="Search" size="22" maxlength="256"  onfocus="if (this.value == \'Search\') this.value =\'\';"'+
                'onblur="if (this.value == \'\' ){ this.value = \'Search\';}" />'+
'<input type="SUBMIT" value=" " onKeyPress="javascript:validation();" alt="Search" style="cursor: pointer; border:0; width:25px; height:20px" title="Search">'+
'</form>'+ 
        '</div>'+
      '</div>'+
    '</div>');
}

function callNavigationLinks(active){
	document.write('<div class="pbsublinks">'+
      '<div class="nav-tabs"> <a href="/privilege-banking/index.page" class="personal-tab"></a>'+ 
      '<a href="/index.page" class="business-tab active"></a>'+ 
      '</div>'+
      '<ul class="nav" style="display:block">'+
        '<li><a href="https://infinity.icicibank.co.in/BANKAWAY?Action.RetUser.Init.001=Y&AppSignonBankId=ICI&AppType=corporate&abrdPrf=N" class="ligin-internet"> </a>'+
        '<ul class="sub_menu">'+
'<div class="option"><img src="/privilege-banking/images/spacer.gif" width="220" height="1"/></div>'+
'<li><a href="/safe-online-banking/safe-online-banking.page" target="_blank">Personal</a></li>'+
'<li><a href="/corporate/safe-online-CIBbanking.page" target="_blank">Corporate</a></li>'+
'<li><a href="https://m2inet.icicibank.co.in/m2iNet/m2iNetLoginForm.jsp" target="_blank">Money2India</a></li>'+
'<li><a href="/Personal-Banking/account-deposit/young-stars/landing-page.page" target="_blank">Young Stars</a></li>'+
'<li><a href="http://www.b2.icicibank.com/" target="_blank">b2 branchfree banking</a></li>'+
'<li class="gapbtw"><div class="gapline"></div></li>'+
'<li><a href="/forgot-userid.page" target="_blank">New User?</a></li>'+
'<li><a href="/generate-password.page" target="_blank">Forgot password?</a></li>'+
'</ul>'+
        '</li>'+
        '<li><a href="/"'); if(active=='home'){ document.write('class="active"');} document.write('>Home</a></li>'+
        '<li><a href="/privilege-banking/personal/privilege-banking-advantage.page"'); if(active=='aboutprivilegebanking'){ document.write('class="active"');} document.write('>Privilege Banking Advantage</a>'+
          '<ul class="sub_menu">'+
            '<div class="option"><img src="/privilege-banking/images/spacer.gif" width="200" height="1"/></div>'+
            '<li><a href="/privilege-banking/personal/DedicatedServiceArea.page">Dedicated Service Area </a></li>'+
            '<li><a href="/privilege-banking/personal/PriorityService.page">Priority Service</a></li>'+
			'<li><a href="/privilege-banking/personal/SpecialPrivileges.page">Special Privileges</a></li>'+
            '<!--li> <a href="/privilege-banking/personal/the-privilege-banking-experience.page">The Privilege Experience</a> </li-->'+
          '</ul>'+
        '</li>'+
        '<li><a href="/privilege-banking/personal/your-life-stage.page"'); if(active=='businesslifestage'){ document.write('class="active"');} document.write(' >Business Lifestage</a>'+
        '<ul class="sub_menu">'+
            '<div class="option"><img src="/privilege-banking/images/spacer.gif" width="220" height="1"/></div>'+
            '<li> <a href="/privilege-banking/personal/the-early-days.page">Early Days</a> </li>'+
            '<li> <a href="/privilege-banking/personal/growing-your-business.page">Growing your Business</a> </li>'+
            '<li> <a href="/privilege-banking/personal/business-partnersand-you.page">Business Partners and You</a> </li>'+
            '<li> <a href="/privilege-banking/business/mergers-and-acquisitions.html">Raising Growth Capital</a> </li>'+
          '</ul>'+
        '</li>'+
        '<li><a href="/privilege-banking/business/products-services.html"'); if(active=='productsandservices'){ document.write('class="active"');} document.write('>Products and Services</a>'+
        '<ul class="sub_menu">'+
            '<div class="option"><img src="/privilege-banking/images/spacer.gif" width="220" height="1"/></div>'+
            '<li> <a href="/privilege-banking/business/products-services.html?tab=1">Deposits and Accounts</a>'+
              '<ul>'+
                '<div class="option"><img src="/privilege-banking/images/spacer.gif" width="220" height="1"/></div>'+
                '<li><a href="/privilege-banking/business/titanium-savings-account.html">Titanium Privilege Savings Account</a></li><li><a href="/privilege-banking/business/gold-savings-account.html">Gold Privilege Savings Account</a></li>'+
                '<li><a href="/privilege-banking/business/fixed-deposits.html">Fixed Deposit</a></li>'+
                '<li><a href="/privilege-banking/business/recurring-deposits.html">Recurring Deposits</a></li>'+
                '<li><a href="/privilege-banking/business/current-account.html">Current Accounts </a></li>'+
				'<li><a href="/privilege-banking/business/Family-banking.html">Family Banking</a></li>'+
              '</ul>'+
            '</li>'+
            '<!--<li>'+
'<a href="/privilege-banking/business/passioninvestments.html">Passsion Investments</a>'+
'<ul>'+
'<div class="option"><img src="/privilege-banking/images/spacer.gif" width="220" height="1"/></div>'+
'<li><a href="/privilege-banking/business/glitteringgold.html">24 Carat ICICI Bank Pure Gold</a></li>'+
'</ul>'+
'</li>-->'+
            '<li> <a href="/privilege-banking/business/products-services.html?tab=2">Credit and Debit Cards</a>'+
              '<ul>'+
                '<div class="/privilege-banking/business/option"><img src="/privilege-banking/images/spacer.gif" width="220" height="1"/></div>'+
                '<li><a href="/privilege-banking/business/titanium-debit-card.html">Titanium Debit Card</a></li>'+
                '<li><a href="/privilege-banking/business/gold-debit-card.html">Gold Debit Card</a></li>'+
                '<li><a href="/privilege-banking/business/rubyx-card.html">Rubyx Credit Card</a></li>'+
				 '<li><a href="/privilege-banking/business/Rubyx-Debit-Card.html">Rubyx Debit Card</a></li>'+
              '</ul>'+
            '</li>'+
            '<li> <a href="/privilege-banking/business/products-services.html?tab=3">Loans</a>'+
              '<ul>'+
                '<div class="option"><img src="/privilege-banking/images/spacer.gif" width="220" height="1"/></div>'+
                '<li><a href="/privilege-banking/business/home-loan.html">Home Loan</a></li><li><a href="car-loan.html">Car Loan</a></li>'+
                '<li><a href="/privilege-banking/business/personal-loan.html">Personal Loan</a></li>'+
              '</ul>'+
            '</li>'+
            '<li> <a href="/privilege-banking/business/products-services.html?tab=4">Investments</a>'+
              '<ul>'+
                '<div class="option"><img src="/privilege-banking/images/spacer.gif" width="220" height="1"/></div>'+
                '<li><a href="/privilege-banking/personal/Pure-Gold.html">ICICI Bank Pure Gold</a></li>'+
                '<li><a href="/privilege-banking/personal/Exchange-Services.html">Foreign Exchange Services</a></li>'+
                '<li><a href="/privilege-banking/personal/Provident-Fund-Accounts.html">Public Provident Fund Account</a></li>'+
                '<li><a href="/privilege-banking/personal/Mutual-Funds.html">Mutual Funds</a></li>'+
              '</ul>'+
            '</li>'+
            '<li> <a href="/privilege-banking/business/products-services.html?tab=5">Insurance</a>'+
              '<!--<ul>'+
                '<div class="option"><img src="/privilege-banking/images/spacer.gif" width="220" height="1"/></div>'+
                '<li><a href="/privilege-banking/business/icici-pru-guaranteed-savings-investment-plan.html">ICICI Pru Guaranteed Savings Investment Plan </a></li>'+
                '<li><a href="/privilege-banking/business/icici-pru-i-protect.html">ICICI Pru I Protect</a></li>'+
                '<li><a href="/privilege-banking/business/travel-insurance.html">Travel Insurance</a></li>'+
                '<li><a href="/privilege-banking/business/health-insurance.html">Health Insurance</a></li>'+
                '<li><a href="/privilege-banking/business/house-insurance.html">House Insuranceance</a></li>'+
              '</ul> -->'+
			  '</li>'+
			  '<li><a href="/privilege-banking/business/products-services.html?tab=6">Value-added Services</a>'+
              '<ul>'+
                '<div class="option"><img src="/privilege-banking/images/spacer.gif" width="220" height="1"/></div>'+
                '<li><a href="/privilege-banking/business/e-Locker.html">e-Locker</a></li>'+
                '<li><a href="/privilege-banking/business/internetbanking.html">Internet Banking</a></li>'+
                '<li><a href="/privilege-banking/business/iMobile.html">iMobile</a></li>'+
                '<li><a href="/privilege-banking/business/billpay.html">Bill Pay</a></li>'+
              '</ul>'+
			  '</li>'+
          '</ul>'+
        '</li>'+
'<li><a href="/privilege-banking/business/SpecialPrivileges.html"'); if(active=='benefitsandrewards'){ document.write('class="active"');} document.write('>Special Privileges</a>'+
          '<ul class="sub_menu">'+
            '<div class="option"><img src="/privilege-banking/images/spacer.gif" width="220" height="1"/></div>'+
            '<li> <a href="/privilege-banking/business/SpecialPrivileges.html?tab=1">Relationship Privileges</a> </li>'+
            '<li> <a href="/privilege-banking/business/SpecialPrivileges.html?tab=2">Privilege Delights</a> '+
			'<ul>'+
                '<div class="option"><img src="/privilege-banking/images/spacer.gif" width="220" height="1"/></div>'+
                '<li><a href="/privilege-banking/business/privilege-delights.html?tab=1">Travel</a></li>'+																			'<li><a href="/privilege-banking/business/privilege-delights.html?tab=2">Dining</a></li>'+																									'<li><a href="/privilege-banking/business/privilege-delights.html?tab=3">Retail</a></li>'+
                '<li><a href="/privilege-banking/business/privilege-delights.html?tab=4">Others</a></li>'+
              '</ul>'+
              '</ul> <li><a href="/privilege-banking/business/resource-center.html"'); if(active=='resourcecenter'){ document.write('class="active"');}else{ document.write('class="no-bdr"');} document.write('>Resource Centre</a>'+
          '<ul class="sub_menu-sml last" style="width:175px;">'+
            '<div class="option"><img src="/privilege-banking/images/spacer.gif" width="220" height="1"/></div>'+
            '<li> <a href="/privilege-banking/business/resource-center.html?tab=1">Investment Insights</a> </li>'+
            '<li> <a href="/privilege-banking/business/resource-center.html?tab=2">Global Outlook & Research</a> </li>'+
            '<li> <a href="/privilege-banking/business/resource-center.html?tab=3">Tools and Calculators</a> </li>'+
          '</ul>'+
        '</li>'+
      '</ul>'+
        
    '</div>');
}

function callNavigationLinks_Personal(active){
	document.write('<div class="pbsublinks">'+
      '<div class="nav-tabs"> <a href="/privilege-banking/index.html" class="personal-tab active"></a>'+ 
      '<a href="/privilege-banking/business-banking/index.html" class="business-tab"></a>'+
      '</div>'+
      '<ul class="nav pmenu" style="display:block">'+
        '<li><a href="https://infinity.icicibank.co.in/BANKAWAY?Action.RetUser.Init.001=Y&AppSignonBankId=ICI&AppType=corporate&abrdPrf=N" class="ligin-internet"> </a>'+
        '<ul class="sub_menu">'+
'<div class="option"><img src="/privilege-banking/images/spacer.gif" width="220" height="1"/></div>'+
'<li><a href="/safe-online-banking/safe-online-banking.html" target="_blank">Personal</a></li>'+
'<li><a href="/corporate/safe-online-CIBbanking.html" target="_blank">Corporate</a></li>'+
'<li><a href="https://m2inet.icicibank.co.in/m2iNet/m2iNetLoginForm.jsp" target="_blank">Money2India</a></li>'+
'<li><a href="/Personal-Banking/account-deposit/young-stars/landing-page.html" target="_blank">Young Stars</a></li>'+
'<li><a href="http://www.b2.icicibank.com/" target="_blank">b2 branchfree banking</a></li>'+
'<li class="gapbtw"><div class="gapline"></div></li>'+
'<li><a href="/forgot-userid.html" target="_blank">New User?</a></li>'+
'<li><a href="/generate-password.html" target="_blank">Forgot password?</a></li>'+
'</ul>'+
        '</li>'+
        '<li><a href="/privilege-banking/index.html"'); if(active=='home'){ document.write('class="active"');} document.write('>Home</a></li>'+
        '<li><a href="/privilege-banking/personal/privilege-banking-advantage.html"'); if(active=='aboutprivilegebanking'){ document.write('class="active"');} document.write('>Privilege Banking Advantage</a>'+
          '<ul class="sub_menu">'+
            '<div class="option"><img src="/privilege-banking/images/spacer.gif" width="200" height="1"/></div>'+
            '<li><a href="/campaigns/mailers/pb-delight2/PB/dedicatedServiceArea.html">Dedicated Service Area </a></li>'+
            '<li><a href="/privilege-banking/personal/PriorityService.html">Priority Service</a></li>'+
			'<li><a href="/privilege-banking/personal/SpecialPrivileges.html">Special Privileges</a></li>'+
            '<!--li> <a href="/privilege-banking/personal/the-privilege-banking-experience.html">The Privilege Experience</a> </li-->'+
          '</ul>'+
        '</li>'+
        '<li><a href="/privilege-banking/personal/your-life-stage.html"'); if(active=='yourlifestage'){ document.write('class="active"');} document.write(' >Your Lifestage</a>'+
          '<ul class="sub_menu">'+
            '<div class="option"><img src="/privilege-banking/images/spacer.gif" width="220" height="1"/></div>'+
            '<li> <a href="/privilege-banking/personal/the-early-days.html">Early Days</a> </li>'+
            '<li> <a href="/privilege-banking/personal/family-and-you.html">Family and You </a> </li>'+
            '<li> <a href="/privilege-banking/personal/retirement.html">Retirement</a> </li>'+
            '<li> <a href="/privilege-banking/personal/protecting-your-loved-ones.html">Protecting Your Loved Ones</a> </li>'+
          '</ul>'+
        '</li>'+
        '<li><a href="/privilege-banking/personal/products-services.html"'); if(active=='productsandservices'){ document.write('class="active"');} document.write('>Products and Services</a>'+
        '<ul class="sub_menu">'+
            '<div class="option"><img src="/privilege-banking/images/spacer.gif" width="220" height="1"/></div>'+
            '<li> <a href="/privilege-banking/personal/products-services.html?tab=1">Deposits and Accounts</a>'+
              '<ul>'+
                '<div class="option"><img src="/privilege-banking/images/spacer.gif" width="220" height="1"/></div>'+
                '<li><a href="/privilege-banking/personal/titanium-savings-account.html">Titanium Privilege Savings Account</a></li><li><a href="/privilege-banking/personal/gold-savings-account.html">Gold Privilege Savings Account</a></li>'+
                '<li><a href="/privilege-banking/personal/fixed-deposits.html">Fixed Deposit</a></li>'+
                '<li><a href="/privilege-banking/personal/recurring-deposits.html">Recurring Deposits</a></li>'+
                '<li><a href="/privilege-banking/personal/current-account.html">Current Accounts </a></li>'+
				 '<li><a href="/privilege-banking/personal/Family-banking.html">Family Banking</a></li>'+
              '</ul>'+
            '</li>'+
            '<!--<li>'+
'<a href="/privilege-banking/personal/passioninvestments.html"'); if(active=='passioninvestment'){ document.write('class="active"');} document.write('>Passsion Investments</a>'+
'<ul>'+
'<div class="option"><img src="/privilege-banking/images/spacer.gif" width="220" height="1"/></div>'+
'<li><a href="/privilege-banking/personal/glitteringgold.html">24 Carat ICICI Bank Pure Gold</a></li>'+
'</ul>'+
'</li>-->'+
            '<li> <a href="/privilege-banking/personal/products-services.html?tab=2">Credit and Debit Cards</a>'+
              '<ul>'+
                '<div class="option"><img src="/privilege-banking/images/spacer.gif" width="220" height="1"/></div>'+
                '<li><a href="/privilege-banking/personal/titanium-debit-card.html">Titanium Debit Card</a></li>'+
                '<li><a href="/privilege-banking/personal/gold-debit-card.html">Gold Debit Card</a></li>'+
                '<li><a href="/privilege-banking/personal/rubyx-card.html">Rubyx Credit Card</a></li>'+
				'<li><a href="/privilege-banking/personal/Rubyx-Debit-Card.html">Rubyx Debit Card</a></li>'+
              '</ul>'+
            '</li>'+
            '<li> <a href="/privilege-banking/personal/products-services.html?tab=3">Loans</a>'+
              '<ul>'+
                '<div class="option"><img src="/privilege-banking/images/spacer.gif" width="220" height="1"/></div>'+
                '<li><a href="/privilege-banking/personal/home-loan.html">Home Loan</a></li><li><a href="/privilege-banking/personal/car-loan.html">Car Loan</a></li>'+
                '<li><a href="/privilege-banking/personal/personal-loan.html">Personal Loan</a></li>'+
              '</ul>'+
            '</li>'+
            '<li> <a href="/privilege-banking/personal/products-services.html?tab=4">Investments</a>'+
              '<ul>'+
                '<div class="option"><img src="/privilege-banking/images/spacer.gif" width="220" height="1"/></div>'+
                '<li><a href="/privilege-banking/personal/Pure-Gold.html">ICICI Bank Pure Gold</a></li>'+
                '<li><a href="/privilege-banking/personal/Exchange-Services.html">Foreign Exchange Services</a></li>'+
                '<li><a href="/privilege-banking/personal/Provident-Fund-Accounts.html">Public Provident Fund Account</a></li>'+
                '<li><a href="/privilege-banking/personal/Mutual-Funds.html">Mutual Funds</a></li>'+
              '</ul>'+
            '</li>'+
			'<li> <a href="/privilege-banking/personal/products-services.html?tab=5">Insurance</a>'+
              '<!--<ul>'+
                '<div class="option"><img src="/privilege-banking/images/spacer.gif" width="220" height="1"/></div>'+
                '<li><a href="/privilege-banking/personal/icici-pru-guaranteed-savings-investment-plan.html">ICICI Pru Guaranteed Savings Investment Plan </a></li>'+
                '<li><a href="/privilege-banking/personal/icici-pru-i-protect.html">ICICI Pru I Protect</a></li>'+
                '<li><a href="/privilege-banking/personal/travel-insurance.html">Travel Insurance</a></li>'+
                '<li><a href="/privilege-banking/personal/health-insurance.html">Health Insurance</a></li>'+
                '<li><a href="/privilege-banking/personal/house-insurance.html">House Insuranceance</a></li>'+
              '</ul> -->'+
			 '</li>'+
			 '<li><a href="/privilege-banking/personal/products-services.html?tab=6">Value-added Services</a>'+
              '<ul>'+
                '<div class="option"><img src="/privilege-banking/images/spacer.gif" width="220" height="1"/></div>'+
                '<li><a href="/privilege-banking/personal/e-Locker.html">e-Locker</a></li>'+
                '<li><a href="/privilege-banking/personal/internetbanking.html">Internet Banking</a></li>'+
                '<li><a href="/privilege-banking/personal/iMobile.html">iMobile</a></li>'+
                '<li><a href="/privilege-banking/personal/billpay.html">Bill Pay</a></li>'+
              '</ul>'+
			  '</li>'+
          '</ul>'+
        '</li>'+
        '<li><a href="/privilege-banking/personal/SpecialPrivileges.html"'); if(active=='benefitsandrewards'){ document.write('class="active"');} document.write('>Special Privileges</a>'+
          '<ul class="sub_menu">'+
            '<div class="option"><img src="/privilege-banking/images/spacer.gif" width="220" height="1"/></div>'+
            '<li> <a href="/privilege-banking/personal/SpecialPrivileges.html?tab=1">Relationship Privileges</a> </li>'+
            '<li> <a href="/privilege-banking/personal/SpecialPrivileges.html?tab=2">Privilege Delights</a> '+
			'<ul>'+
                '<div class="option"><img src="/privilege-banking/images/spacer.gif" width="220" height="1"/></div>'+
                '<li><a href="/privilege-banking/personal/privilege-delights.html?tab=1">Travel</a>																				</li><li><a href="/privilege-banking/personal/privilege-delights.html?tab=2">Dining</a></li>																										<li><a href="/privilege-banking/personal/privilege-delights.html?tab=3">Retail</a></li>'+                                                        
                '<li><a href="/privilege-banking/personal/privilege-delights.html?tab=5">Others</a></li>'+
              '</ul>'+
          '</ul>'+
        '</li> <li><a href="/privilege-banking/personal/resource-center.html"'); if(active=='resourcecenter'){ document.write('class="active"');}else{ document.write('class="no-bdr"');} document.write('>Resource Centre</a>'+
          '<ul class="sub_menu-sml last" style="width:175px;">'+
            '<div class="option"><img src="/privilege-banking/images/spacer.gif" width="220" height="1"/></div>'+
            '<li> <a href="/privilege-banking/personal/resource-center.html?tab=1">Investment Insights</a> </li>'+
            '<li> <a href="/privilege-banking/personal/resource-center.html?tab=2">Global Outlook & Research</a> </li>'+
            '<li> <a href="/privilege-banking/personal/resource-center.html?tab=3">Tools and Calculators</a> </li>'+
          '</ul>'+
        '</li>'+
      '</ul>'+
    '</div>');
}

function callFooter(){
	document.write('<p>'+ 
        '<a href="/terms-condition/terms-and-conditions.html" target="_blank">Terms & Conditions</a>'+ 
        '<a href="/interest-rates.html" target="_blank">Interest Rates</a> '+
        '<a href="/service-charges/service-charges.html" target="_blank">Service Charges & Fees</a> '+
        '<a href="/campaigns/khayal-aapka/khayal-aapka.html" target="_blank">Khayaal Aapka</a>'+ 
        '<a href="/financial-tools/index.html" target="_blank">Personal Finance Tools Form Center</a> '+
        '<a href="/form-center.html" target="_blank">Form Center</a> '+
        '<a href="/do-not-call.html" target="_blank">Do Not Call Registry</a> '+
        '<a href="/privilege-banking/personal/disclaimer.html" target="_blank">Disclaimer</a> '+
        '<a href="/multilingual-disclaimer.html" target="_blank">Multilingual Disclaimer</a>'+ 
        '<a href="/code-of-commitment.html" target="_blank">Code of Commitment</a> '+
        '<a href="/aboutus/pdf/code_of_business_conduct_ethics.pdf" target="_blank">Group Code of Business Conduct and Ethics</a> '+
        '<a href="/aboutus/invest-disclosure.html" target="_blank">Basel II Disclosures</a> '+
        '<a href="/notice-board.html" target="_blank">Notice Board</a> '+
        '<a href="/unparliamentary-language-by-customers.html" target="_blank">Use of Unparliamentary Language by Customers</a>'+
        '<a href="/e-brochures.html" target="_blank">E-Brochures</a> '+
        '<a href="/privacy.html" target="_blank">privacy</a> '+
        '<a href="/usa-patriot-act-certification.html" target="_blank">USA Patriot Act Certification</a> '+
        '<a href="/online-safe-banking/index.html" target="_blank">Safe Banking</a> '+
        '<a href="/pfsuser/webnews/go-green/Index.html" target="_blank">Go Green</a> '+
        '<a href="/media-gallery/media-gallery.html" target="_blank" style="border:none">Gallery</a> '+
    '</p>'+
	'<div class="spacer5"></div>'+
    '<p class="bestveiw-topspace">Best viewed with Internet Explorer 7 or Firefox 3.6 with a resolution of 1024 x 768</p>');
}