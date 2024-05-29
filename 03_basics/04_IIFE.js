//IIFE:-Immediately Invoked Fucntion Expressions
(function connected(){//named IIFE
    console.log("DB Connected")
})();

// we have to always End our IIFE by explicitly adding semi-colon so that we can execute the next section

(()=>{//without-named IIFE
    console.log("Next")
})();

//function that execute immediately and for not facing any problem due to global scope pollution or global scope pollution variables or declaration ,so to avoid this problem we use IIFE

((name)=>{
    console.log(`Hi ${name},How are you doing`)
}
)("Rakshika Vats");