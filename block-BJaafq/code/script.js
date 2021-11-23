// To get the fullName of user

function getName(firstName='',lastName=''){
 
    return firstName+" "+lastName;
   }
   //Test-1
   let result=getName('Sana','Anjum');
   let expected='Sana Anjum';
   if(result!==expected){
       throw new Error(`${result} is not equal to ${expected}`);
   }
   
   //Test-2
    result=getName('Sana','Anjum');
    expected='Sana Anjum';
   if(result!==expected){
       throw new Error(`${result} is not equal to ${expected}`);
   }
   
   
   // To get the actual salary
   function getAmount(amount=0,taxRate=0){
   
    
    return amount+(amount*taxRate);
   }
   //Test-1
   
   result=getAmount(20000,10);
   expected=220000;
   if(result!==expected){
       throw new Error(`${result} is not equal to ${expected}`);
   }
   
   //Test-2
   result=getAmount(20000,10);
   expected=22000;
   if(result!==expected){
       throw new Error(`${result} is not equal to ${expected}`);
   }
