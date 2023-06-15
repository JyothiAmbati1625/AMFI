var dob = new Date(dobInput);	
                    var month_diff = Date.now() - dob.getTime();	
                    var age_dt = new Date(month_diff);	
                    var year = age_dt.getUTCFullYear();                   	
                    var age = Math.abs(year - 1970);                   	
                    var getAge = age;                    	
                    if(getAge>=18){	
                        console.log("you are eligible");	
                        
                    }	
                    else{
                        console.log("you are not eligible");		
                        	
                    }	