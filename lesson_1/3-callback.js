var maxTime = 1000;

var evenDoubler = function (v, callback){
    var waitTime = Math.floor(Math.random() * (maxTime + 1));
    if(v%2){
        setTimeout(function(){
            callback(new Error("Odd Input"));
        }, waitTime);
    } else {
        setTimeout(function(){
            callback(null,v*2,waitTime);
        }, waitTime);
    }
};

var handleResults = function(err,results,time){
    if(err){
        console.log("ERROR: " + err.message);
    }else{
        console.log("The results are: " + results + " (" + time + " ms)" );
    }
};

// note that the results returned will not be in the same order since
// nodejs operators async, non-blocking
evenDoubler(2,handleResults);
evenDoubler(10,handleResults);
evenDoubler(202,handleResults);
evenDoubler(1400,handleResults);
evenDoubler(54002,handleResults);

console.log("-------");
