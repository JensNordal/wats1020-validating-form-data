/* Custom JS validation exercise */

$(document).on('ready', function(){

    // Form validation
    $('#order-form').validate({
        submitHandler: function(form) {
            // If form is valid, submit it!
            form.submit();
        },

        rules: {
            "your-name": {
              required: true,
              maxlength: 128,
              lettersonly: true
            },

            "your-address": {
              required: true
            },

            "your-city": {
              required: true
            },

            "your-state": {
                required: true,
                maxlength: 2,
                stateUS: true
            },

            "your-zip": {
                required: true,
                minlength: 5,
                digits: true,
                zipcodeUS: true,
            },

            "card-holder-name": {
              required: true,
              maxlength: 128
            },

            "card-number": {
                required: true,
                creditcard: true,
            },

            "expiry-month": {
                required: true,
            },

            "expiry-year": {
                required: true
            },

            "cvv": {
                required: true,
                maxlength: 3,
                digits: true,
               // integer: true
            },

            "shipping-method": {
               required: true
            },

            "comments": {
                maxlength: 500,
            }
        } // End rules
    }); // End validate function

    // Letters only script
    $.validator.addMethod( "lettersonly", function( value, element ) {
	   return this.optional( element ) || /^[a-z]+$/i.test( value );
        }, "Letters only please" ); // End letters only script

    // Valdate US State abbreviation
    $.validator.addMethod( "stateUS", function( value, element, options ) {
	var isDefault = typeof options === "undefined",
		caseSensitive = ( isDefault || typeof options.caseSensitive === "undefined" ) ? false : options.caseSensitive,
		includeTerritories = ( isDefault || typeof options.includeTerritories === "undefined" ) ? false : options.includeTerritories,
		includeMilitary = ( isDefault || typeof options.includeMilitary === "undefined" ) ? false : options.includeMilitary,
		regex;

	if ( !includeTerritories && !includeMilitary ) {
		regex = "^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$";
	} else if ( includeTerritories && includeMilitary ) {
		regex = "^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$";
	} else if ( includeTerritories ) {
		regex = "^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$";
	} else {
		regex = "^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$";
	}

	regex = caseSensitive ? new RegExp( regex ) : new RegExp( regex, "i" );
	return this.optional( element ) || regex.test( value );
    }, "Please specify a valid state" ); // End US State validation

    // Check for valid US zip code
    $.validator.addMethod( "zipcodeUS", function( value, element ) {
	   return this.optional( element ) || /^\d{5}(-\d{4})?$/.test( value );
    }, "The specified US ZIP Code is invalid" );  // End US zip code validation

    // Ensure number is an integer
    $.validator.addMethod( "integer", function( value, element ) {
	   return this.optional( element ) || /^-?\d+$/.test( value );
    }, "Please enter a non-decimal number" ); //End cvv integer check

    // Tooltips
    $('label span.glyphicon').tooltip(); // End tooltips
}); // End .on ready function
