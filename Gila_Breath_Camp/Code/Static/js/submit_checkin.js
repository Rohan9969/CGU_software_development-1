send_checkin = function(id)
{ 
	var input = '{"data" :[{"date_id":"'+id+'"}]}';
	document.getElementById("check_click").onclick=''
	var test = 0;
	$.ajax
	(
		{
			type:"POST",
			url:"../../test_js/",
			async:false,
			data: 
   				{
        			vol_name: input // from form
        		},
    		dataType: "text",
    		success: function(data) 
    		{
				var obj = $.parseJSON(data)
				obj_array = obj["data"]
				test = obj_array.length
				
    		},
    		error: function(data)
    		{
        		debugger;
        		alert("Sorry for the inconvinience. Server is not working. check if the server is working.");
      		}
    	}
  	);
	var array = [],med ='1',leg ='1',emer ='1',hel ='1',boot ='1',sleeping_bag ='1',water_bottle ='1',sunscreen ='1',bugs_spray ='1',completed ='1';
				for(i=0;i<test;i++)
				{
				if(document.getElementById("medical"+i).checked){med = '1'}else{med = '0'}
				if(document.getElementById("legal"+i).checked){leg = '1'}else{leg = '0'}
				if(document.getElementById("emergency"+i).checked){emer = '1'}else{emer = '0'}
				if(document.getElementById("helmet"+i).checked){hel = '1'}else{hel = '0'}
				if(document.getElementById("boot"+i).checked){boot = '1'}else{boot = '0'}
				if(document.getElementById("sleeping_bag"+i).checked){sleeping_bag = '1'}else{sleeping_bag = '0'}
				if(document.getElementById("water_bottle"+i).checked){water_bottle = '1'}else{water_bottle = '0'}
				if(document.getElementById("sunscreen"+i).checked){sunscreen = '1'}else{sunscreen = '0'}
				if(document.getElementById("bugs_spray"+i).checked){bugs_spray = '1'}else{bugs_spray = '0'}
				if(document.getElementById("completed"+i).innerText=="COMPLETE"){completed = '1'}else{completed = '0'}
				
				var camp_time = "2017-12-11 00:00:00.000000"
				$.ajax
				(
					{
					type:"POST",
					url:"../../application_status_get/",
					async:false,
					success:function(response){
					var obj = $.parseJSON(resopnse)
					if(id==1)
					{
						camp_time = obj["data"][0]["camp_time_slots1"]
					}
					else if(id==2)
					{
						camp_time = obj["data"][0]["camp_time_slots2"]
					}
					else if(id==3)
					{
						camp_time = obj["data"][0]["camp_time_slots3"]
					}
					}
					}
				);
				
				
				var k = '{"applicant_id":"'+document.getElementById("appl"+i).innerText+'", "applicant_first_name":"'+document.getElementById("firstname"+i).innerText+'","applicant_last_name":"'+document.getElementById("lastname"+i).innerText+'","medical_form":"'+med+'","legal_form":"'+leg+'","emergency_contact":"'+emer+'","helmet":"'+hel+'","boot":"'+boot+'","sleeping_bag":"'+sleeping_bag+'","water_bottle":"'+water_bottle+'","sunscreen":"'+sunscreen+'","bugs_spray":"'+bugs_spray+'","check_in_status":"'+completed+'","camp_time_slots":"'+camp_time+'"}'
				array.push(k)
				
				}
        		var input1 = '{"data":['+array+']}'
	$.ajax
	(
		{
			type:"POST",
			url:"../../test_submit_checkin/",
			async:false,
			data: 
   				{
        			vol_name: input1 // from form
        		},
    		dataType: "text",
    		success: function(data) 
    		{
				var obj = $.parseJSON(data)
				alert(obj["message"])
				location.reload()
        		
    		},
    		error: function(data)
    		{
        		alert("Sorry for the inconvinience. Server is not working. check if the server is working.");
      		}
    	}
  	);
	
	
}


send_cancel = function(id){
	var input = '{"data" :[{"date_id":"'+id+'"}]}';
	document.getElementById("check_click").onclick=''
	var test = 0;
	$.ajax
	(
		{
			type:"POST",
			url:"../../test_js/",
			async:false,
			data: 
   				{
        			vol_name: input // from form
        		},
    		dataType: "text",
    		success: function(data) 
    		{
				var obj = $.parseJSON(data)
				obj_array = obj["data"]
				test = obj_array.length
				
    		},
    		error: function(data)
    		{
        		debugger;
        		alert("Sorry for the inconvinience. Server is not working. check if the server is working.");
      		}
    	}
  	);
	var array = [];
	
	
	for(i=0;i<test;i++)
				{
				//var can_flag = '0'
				if(document.getElementById("cancel"+i).type=="checkbox"){can_flag = '1'}else{can_flag = '0'}
				
				var camp_time = "2017-12-11 00:00:00.000000"
				$.ajax
				(
					{
					type:"POST",
					url:"../../application_status_get/",
					async:false,
					success:function(response){
					var obj = $.parseJSON(resopnse)
					if(id==1)
					{
						camp_time = obj["data"][0]["camp_time_slots1"]
					}
					else if(id==2)
					{
						camp_time = obj["data"][0]["camp_time_slots2"]
					}
					else if(id==3)
					{
						camp_time = obj["data"][0]["camp_time_slots3"]
					}
					}
					}
				);
				
				
				var k = '{"applicant_id":"'+document.getElementById("appl"+i).innerText+'", "cancel_flag":"'+can_flag+'"}'
				if(can_flag=="1"){
				array.push(k)
				}
				else{}
				
				}
			
        		var input1 = '{"data":['+array+']}'
	$.ajax
	(
		{
			type:"POST",
			url:"../../send_cancel/",
			async:false,
			data: 
   				{
        			vol_name: input1 // from form
        		},
    		dataType: "text",
    		success: function(data) 
    		{
				var obj = $.parseJSON(data)
				alert(obj["message"])
				location.reload()
        		
    		},
    		error: function(data)
    		{
        		alert("Sorry for the inconvinience. Server is not working. check if the server is working.");
      		}
    	}
  	);
	
}

send_priority = function(id){
	var input = '{"data" :[{"date_id":"'+id+'"}]}';
	
	document.getElementById("check_click").onclick=''
	var test = 0;
	$.ajax
	(
		{
			type:"POST",
			url:"../../priorities_get/",
			async:false,
			data: 
   				{
        			prior: input // from form
        		},
    		dataType: "text",
    		success: function(data) 
    		{
				var obj = $.parseJSON(data)
				obj_array = obj["data"]
				test = obj_array.length
				//alert(test)
				
    		},
    		error: function(data)
    		{
        		debugger;
        		alert("Sorry for the inconvinience. Server is not working. check if the server is working.");
      		}
    	}
  	);
	var array = [];
				for(i=0;i<test;i++)
				{
				//if(document.getElementById("medical"+i).checked){med = '1'}else{med = '0'}
				//if(document.getElementById("legal"+i).checked){leg = '1'}else{leg = '0'}
				//if(document.getElementById("emergency"+i).checked){emer = '1'}else{emer = '0'}
				//if(document.getElementById("helmet"+i).checked){hel = '1'}else{hel = '0'}
				//if(document.getElementById("boot"+i).checked){boot = '1'}else{boot = '0'}
				//if(document.getElementById("sleeping_bag"+i).checked){sleeping_bag = '1'}else{sleeping_bag = '0'}
				//if(document.getElementById("water_bottle"+i).checked){water_bottle = '1'}else{water_bottle = '0'}
				//if(document.getElementById("sunscreen"+i).checked){sunscreen = '1'}else{sunscreen = '0'}
				//if(document.getElementById("bugs_spray"+i).checked){bugs_spray = '1'}else{bugs_spray = '0'}
				//if(document.getElementById("completed"+i).innerText=="COMPLETE"){completed = '1'}else{completed = '0'}
				
				
				//var option = this.options[this.selectedIndex];
				//alert($('#sel_appl_name'+i).text(this.options[this.selectedIndex].value));
				//alert($( "#sel_appl_name"+i+" option:selected" ).text())
				//alert($('#sel_appl_name'+i).val($(this).find(":selected").text()))
				var k = '{"applicant_id":"'+document.getElementById("appl"+i).innerText+'", "name":"'+document.getElementById("name"+i).innerText+'","applicant_name_together_with":"'+$( "#sel_appl_name"+i+" option:selected" ).text()+'","applicant_id_together_with":"'+$( "#guar_with"+i+" option:selected" ).text()+'","applicant_name_not_together_with":"'+$( "#appl_name_without"+i+" option:selected" ).text()+'","applicant_id_not_together_with":"'+$( "#guar_without"+i+" option:selected" ).text()+'"}'
				array.push(k)
				
				}
        		var input1 = '{"data":['+array+']}'
				alert(input1)
	$.ajax
	(
		{
			type:"POST",
			url:"../../priorities_set_submit/",
			async:false,
			data: 
   				{
        			prior: input1 // from form
        		},
    		dataType: "text",
    		success: function(data) 
    		{
				var obj = $.parseJSON(data)
				alert(obj["message"])
				location.reload()
        		
    		},
    		error: function(data)
    		{
        		alert("Sorry for the inconvinience. Server is not working. check if the server is working.");
      		}
    	}
  	);
}