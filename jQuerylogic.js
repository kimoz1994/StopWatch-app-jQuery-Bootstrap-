                          //stopwatch app logic

//clicking on start button:
//    1.show Stop and Lap buttons
//    2.stopwatch mode=on 
//    3.start counter
//    
//clicking on stop button:
//    1.show resume and reset buttons
//    2.stop counter
//
//    
//clikcing on resume button:
//    1.show stop and lap buttons
//    2.start counter
//    
//clicking on lap button:
//   if mode = on{
//       1.add lap details to lap box
//       2.restart lap counter
//   }


// good practice to put the jQuery code inside the get dcument function


$(function(){
    
    //defining our variables next here 
    var mode=false;  //mode of our stop watch
    var mycounter; //the setinterval variable
    //main counter variables
    var millisecond =0; 
    var second =0;
    var minute =0;
    //lap counter variables
    
    var millisecondl =0;
    var secondl =0;
    var minutel =0;
    
    //number of the lap
    var lapnumber=0;
    
    //in the beginning, stop, resume and reset buttons are hidden.
    $("#stopbutton").hide();
    $("#resumebutton").hide();
    $("#resetbutton").hide();
    
    //what happens when start button is clicked
    
    $("#startbutton").click(function(){
        
        //hiding and showing the required buttons
        $(this).hide();
        $("#stopbutton").show();
        
        //our stop watch is playing
        mode = true;
        
        //the counter will start counting
        startaction();
        
        
        
        
    });
    
    
    //what happens when the stop button is clicked
    
    $("#stopbutton").click(function(){
        //showing and hidging the required buttons
        $(this).hide();
        $("#lapbutton").hide();
        $("#resumebutton").show();
        $("#resetbutton").show();
        
        //stopping the counter 
        clearInterval(mycounter);
        
        //the stopwatch is not working
        mode = false;
        
    });
    
    
    //what happens when the reset button is clicked
    
    $("#resetbutton").click(function(){
        
        
        location.reload();
        
        
    });
    
    //what happens when the resume button is clicked
    
    $("#resumebutton").click(function(){
        
        //resuming the counter again
        startaction();
        
        
        //our stopwatch is now working 
        mode = true;
        
        //showing and hiding the necessary buttons
        $(this).hide();
        $("#resetbutton").hide();
        $("#stopbutton").show();
        $("#lapbutton").show();
        
        
    });
    
    
    
    
    $("#lapbutton").click(function(){
                          
           if(mode){
        
        //stopping the counter
        clearInterval(mycounter);
        
          //adding lap details in the lap div
             
              addlap();
               
               
               
           //resettting the lap counter variables
               millisecondl = 0;
               secondl = 0;
               minutel = 0;

               //starting the counter again
        
              startaction();
               
              
    }               
                          
                          
                          });
    
    
    
    
    
    
    //function definitions 
    
    //starting the counter function
    function startaction(){
        //our stopwatch is running
        mode=true
        
        mycounter = setInterval(function(){
            
            millisecond++;
            millisecondl++;
            $("#lapcentisecond").text( format(millisecondl));
            $("#timecentisecond").text( format(millisecond));
            if(millisecond == 99|| millisecondl ==99){
             millisecond = 0;
                millisecondl=0;
                second++;
                secondl++;
                $("#lapsecond").text(format(secondl));
                $("#timesecond").text(format(second));
                if(second == 60 ){
                    second = 0;
                    minute++;
                    
                    
                    $("#timeminute").text(format(minute));
                }
                 $("#lapminute").text(format(minutel));

                if(secondl == 60){
                    secondl=0;
                    minutel++;
                    $("#lapminute").text(format(minutel));
                }
                
            }
            
            
        },10);
        
        
        
        
    }
    
    
    
    
    //formating numbers for good representation
    
    
    function format(number){
        
        if(number< 10){
            return '0' + number; 
        }
        else{
            return number;
        }
        
    }
    
    //addlap function: pring lap detail inside the lap box
    
    function addlap(){
        lapnumber++;
        var mylapdetails = '<div class="lap">' + 
            
            '<div class="laptimetitle">' + 
            
            'Lap' + lapnumber +
            
            '</div>'+
            
            '<div class="laptime">' +
                
                '<span>' + format(minutel) + '</span>'+
                '<span>:' + format(secondl) + '</span>'+
                '<span>:' + format(millisecondl) + '</span>'+
                
            
                '</div>'+    
        
                
            
            
            '</div>';
        $(mylapdetails).prependTo("#laps");
        
    }
    
    
});





