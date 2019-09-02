jQuery(document).ready(function(){
	var url="http://ceqweb1.ceqnep.com.br/producao/farmaapp/ajax/auth.php";
    
    //Login Function
    jQuery("#login").click(function(){
    	
    	var login=jQuery("#sellogin").val();
    	var pass=jQuery("#senha").val();
    	var dataString="login="+login+"&senha="+pass;
    	if($.trim(login).length>0 & $.trim(pass).length>0)
		{
			jQuery.ajax({
				type: "POST",
				url: url,
				data: dataString,
				dataType: "json",
				crossDomain: true,
				cache: false,
				beforeSend: function(){ 
					jQuery("#login").html('Connecting...');
				},
				success: function(data){
					if(data.cod_usua != "")
					{
						localStorage.login="true";
						localStorage.usua=data.cod_usua;
						localStorage.farma=data.farma;
						window.location.href = "index.html";
					}
					else
					{
						alert("Login error");
						jQuery("#login").html('Login');
					}
				}
			});
		}return false;

    });

    //logout function
    jQuery("#logout").click(function(){
    	localStorage.login="false";
    	window.location.href = "login.html";
    });

    //Displaying user email on home page
    jQuery("#farma").html(localStorage.farma);
});