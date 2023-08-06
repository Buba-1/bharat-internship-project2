
console.log("I want to test if the JS file has been linked properly to the HTML file");


let my_name= "Buba";
console.log(` I am ${my_name}`);




// let us innitiate a variable for the input data of Faranheit
let Faranheit_input= document.getElementById('Faranheit_Input');




// let us innitiate a variable for the input data of Celcius
let Celcius_input = document.getElementById('Celcius_Input');



//let us initiate a variable for the Faranheit Button
let Faranheit_Button= document.getElementById('Faranheit_Button');



//let us initiate a variable for the Celcius Button
let Celcius_Button= document.getElementById("Celcius_Button");





 //let us initialize the paragraphs of the page that will will  be accessed by the JS to display the results






 // First, let us initialize the 3 P tag in which we will diplay the results of the Faranheit 
    
    
    let Faranheit_result_paragraph = document.getElementById("Faranheit_result_Paragraph");
    
    
    let faranheit_value_paragraph = document.getElementById("faranheit_value_paragraph");
    
    
    let faranheit_unit_paragraph= document.getElementById("faranheit_unit_paragraph");
    
    
    
    
    
    
   

    
    
   // secondly, let us initialize the 3 P tag in which we will diplay the results of the Celcius 
    
    
    let Celcius_result_paragraph = document.getElementById("Celcius_result_paragrah");
    
    
    let  Celcius_value_paragraph= document.getElementById("Celcius_value_Paragraph");
    
    
    let Celcius_unit_paragraph= document.getElementById("Celcius_unit_paragraph");
    
    




















// Now let us add event listeners to the buttons below, in these eent listeners once a click is done the unction will convert the input to the neccessary unit, then he result displayed on the result paragraphs




Faranheit_Button.addEventListener("click", ()=>{
    
    
    // This parses the input from a string to a float number
    const value = parseFloat(Faranheit_input.value) ;
    
    
    console.log("The faranheit button has been clicked");
    
    console.log(`the input is ${value}` );
    
     
    
    //this equation below is the one for converting celcius to fahranheit
    // so  F= (9/5C + 32) / 32
    
    
    //here the result variable stores the computed Fahranheit value
    let result=((9/5)*value + 32);
    
    result=result.toFixed(2);
   
    
    
    
    //console.log(`Faranheit is : ${result}`);
    
    
    // now let us make a condition to execute the code if a number is entered or not entered
    
    
    if (isNaN(value) || Faranheit_input.value ==="" ) {
        
        alert("Please Enter a Numberic Value to convert to Fahranheit ") ;
        
         }
    
    
    else{
    
        
        //now let us access the 3 paragprahs to display the result of the conversion.
        
        
        // first, let us initialise the three strings ("sentences) to display as results of the computataion
        
        let para2 =`${ result}`;
        let para3 ="Degrees FAHRENHEITS";
        
        
        
        //now let us pass the strings to their respective p tags as textContent.
        
        faranheit_value_paragraph.textContent=para2;
        faranheit_unit_paragraph.textContent=para3;
        
        
        
        //NOW LET US ADD THE STYLES TO TAGS OF THE RESULT
        
        faranheit_value_paragraph.style.fontSize = '40px' ;
        faranheit_value_paragraph.style.color='black';
        faranheit_value_paragraph.style.fontWeight ="bold";
        faranheit_value_paragraph.style.fontFamily='monospace';
        faranheit_value_paragraph.style.textAlign='';
        
        
        
        
        
        faranheit_unit_paragraph.style.fontSize = '15px' ;
        faranheit_unit_paragraph.style.color='black';
        faranheit_unit_paragraph.style.fontWeight ="bold";
        faranheit_unit_paragraph.style.fontFamily='monospace';
        faranheit_unit_paragraph.style.textAlign='';
        
        
        
        
        
        
        }
    
    
   
     
    
    
    
    
    
            
                        
    
    
});









Celcius_Button.addEventListener("click", ()=>{
    
    // This value below store the the parsed input as a flaot
    const value = parseFloat(Celcius_input.value) ;
    
   // console.log("The Celcius button has been clicked");
    //console.log(`the input is ${value}` );
    
    
     // so  C= (F-32)*(5/9)
    
    // The result variable below stores the computed Celcius value
    let result= (value-32)*(5/9);
    result=result.toFixed(2);
   
     
    
    // now let us make a condition to execute the code if a number is entered or not entered
    
    
    if (isNaN(value) || Celcius_input.value ==="" ) {
        
        alert("Please Enter a Numberic Value to convert to Fahranheit ") ;
        
         }
    
    
    else{
        
        //now let us access the 3 paragprahs to display the result of the conversion.
        
        
        // first, let us initialise the three strings ("sentences) to display as results of the Celcius computataion
        
        let paraa1 ="the value is" ;
        let paraa2 =`${ result}`;
        let paraa3 ="Degrees CELSIUS";
        
        
        
        //now let us pass the strings to their respective p tags as textContent.
        
        Celcius_value_paragraph.textContent=paraa2;
        Celcius_unit_paragraph.textContent=paraa3;
        
        
                //NOW LET US ADD THE STYLES TO TAGS OF THE RESULT
        
        Celcius_value_paragraph.style.fontSize = '40px' ;
        Celcius_value_paragraph.style.color='black';
        Celcius_value_paragraph.style.fontWeight ="bold";
        Celcius_value_paragraph.style.fontFamily='monospace';
      
     
        
        
        
        
        Celcius_unit_paragraph.style.fontSize = '15px' ;
        Celcius_unit_paragraph.style.color='black';
        Celcius_unit_paragraph.style.fontWeight ="bold";
        Celcius_unit_paragraph.style.fontFamily='monospace';
        Celcius_unit_paragraph.style.textAlign='';
        
  
          }
    
    
   

});

console.log("Testing for decimals");
let j = 3.45655;
j=j.toFixed(3);
console.log(j);
console.log("The unit conversion works");


