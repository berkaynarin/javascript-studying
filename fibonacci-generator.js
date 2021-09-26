function fibonacciGenerator(n) {
    
    var fibonacci = [];
    
    if(n === 1) {
        fibonacci.push(0);
    }
    
    else if(n === 2) {
        fibonacci.push(0,1);
    }
    
    else if(n > 2) {
        
        fibonacci.push(0,1);
        
        for(var i = 2; i < n; i++){
            
            fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];          
        }
    }  
    
    return fibonacci;
}

fibonacciGenerator(9);