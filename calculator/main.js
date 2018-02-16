$(document).ready(function() {
  let total = 0;
  let factor = 0;
  let operand = "";
  let chain = "";
  let display = $(".display");
  let operation = $(".operation");
  let add = function(a, b) {
    return a + b;
  };
  let subtract = function(a, b) {
    return b - a;
  };
  let multiply = function(a, b) {
    return a * b;
  };
  let divide = function(a, b) {
    return b / a;
  };
  let updateChain = function(a,b) {
  	if (chain === "") {
  		chain = b;
  	}
  	else {
    	chain += " " + a + " " + b;
    	operation.html("<span>"+chain+"</span>");
    }
  }
  let operate = function(val) {
    total = val(parseFloat(factor), parseFloat(total));
    factor = 0;
  }
  $(".allClear").on("click", function() {
    //Create AC function
    let value = $(this).attr("value");
    total = 0;
    factor = 0;
    operand = "";
    chain = "";
    display.html("<span>0</span>");
    operation.html("<span>0</span>");
  });
  $(".clear").on("click", function() {
    //Create C function
    let value = $(this).attr("value");
    display.html("<span>0</span>");
    factor = 0;
  });
  $(".decimal").on("click", function() {
    //Create Decimal function
    let value = $(this).attr("value");
    console.log(value);
  });
  $(".equals").on("click", function() {
    //Create Equals function
    let value = $(this).attr("value");
    // updateChain(factor,operand);
    if(operand === "+"){
    	operate(add);
    }
    if(operand === "-"){
    	operate(subtract);
    }
    if(operand === "/"){
    	operate(divide);
    }
    if(operand === "*"){
    	operate(multiply);
    }
    display.html("<span>"+total+"</span>");
    total = 0;
    factor = 0;
    operand = "";
    chain = "";
  });
  $(".operand").on("click", function() {
    //Create operand function
    let value = $(this).attr("value");
    operand = value;
    if (operand === "+") {
      updateChain(operand,factor);
      operate(add);
    }
    if (operand === "-") {
      updateChain(operand,factor);
      operate(subtract);
    }
    if (operand === "/") {
      updateChain(operand,factor);
      operate(divide);
    }
    if (operand === "*") {
      updateChain(operand,factor);
      operate(multiply);
    }

  });

  //digits
  $(".digit").on("click", function() {
    let value = $(this).attr("value");
    if (factor === 0) {
      factor = value;
    } else {
      factor += value;
    }
    display.html("<span>" + factor + "</span>");
  });

  //Console logs
  $(".btn").on("click", function() {
    console.log("total: " + total);
    console.log("operand: " + operand);
    console.log("factor: " + factor);
  });
})


