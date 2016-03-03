$( document ).ready(function() {
    console.log( "ready!" );

    var patients = "data.json";

  	$.getJSON( patients, function( data ) {
console.log( data );
      $.each( data.entry, function( i,patient ) {
      	
      	console.log( patient.resource[0].name[0] );
		
		console.log("Checking Name");
        if (patient.resource[0].hasOwnProperty('name')) {
        	console.log('found it');
        	$( "#PatientName" ).append(patient.resource[0].name[0].family + ' , '+patient.resource[0].name[0].given); }
        	else {
        		console.log('canee find it');
        		$("PatientName").append(' N/A ')
        	}		 
		

		console.log("Checking DOB");
        if (patient.resource[0].hasOwnProperty('birthDate')) {
        	console.log('found it');
        	$( "#DOB" ).append('<span class="half column">' + patient.resource[0].birthDate + '</span>'); }
        	else {
        		console.log('canee find it');
        		$("DOB").append(' N/A ')
        	}

        console.log("Checking Phone");
        if (patient.resource[0].telecom[0].hasOwnProperty('value')) {
        	console.log('found it');
        	$( "#Phone" ).append(patient.resource[0].telecom[0].value); }
        	else {
        		console.log('canee find it');
        		$("Phone").append('N/A')
        	}


        console.log("Checking Address");
        if (patient.resource[0].hasOwnProperty('address')){
        	console.log('found it');
        		$( "#Address" ).append('<p>' +patient.resource[0].address[0].line + "<br />" +  patient.resource[0].address[0].city + "<br />" + patient.resource[0].address[0].postalCode + '</p>' );}
        	else {
        		console.log('canee find it');
        	$( "#Address" ).append('<p> N/A </p>'); 
        	}

		
         
        console.log("Checking EmergencyContacts");
       // if (relatedPerson.telecom[0].hasOwnProperty('value')){
       	if (patient.resource[0].hasOwnProperty('emergencyNumber')){
        	console.log('found it');
        		$( "#EmergencyContacts" ).append(patient.resource[0].telecom[0].value  ); }
        	else {
        		console.log('canee find it');
        	$( "#EmergencyContacts" ).append(' N/A '); 
        	}

        	console.log("Checking Insurance");
        if (patient.resource[0].careProvider.hasOwnProperty('reference')){
        	console.log('found it');
        		$( "#Insurance" ).append(patient.resource[0].careProvider.reference);}
        	else {
        		console.log('canee find it');
        	$( "#Insurance" ).append('N/A'); 
        	}

		 if ( i === 0 ) {
          return false;
        }
      });
    });
});