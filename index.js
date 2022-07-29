

button=document.getElementById("button");

random_ten_quotes={
   "Quote #1":{"author":"Marcus Aurelius",
             "quote":"Waste no more time arguing what a good man should be. Be One"},
     "Quote #2":{"author":"Marcus Aurelius",
             "quote":"No great thing is created suddenly, any more than a bunch of grapes or a fig. If you tell me that you desire a fig, I answer that there must be time. Let it first blossom, then bear fruit, then ripen."}, 
     "Quote #3":{"author":"Epictetus",
             "quote":"Waste no more time arguing what a good man should be. Be One"},
    "Quote #4":{"author":"Seneca",
             "quote":"It’s not because things are difficult that we dare not venture. It’s because we dare not venture that they are difficult"},
    "Quote #5":{"author":"Seneca",
             "quote":"You live as if you were destined to live forever, no thought of your frailty ever enters your head, of how much time has already gone by you take no heed. You squander time as if you drew from a full and abundant supply, though all the while that day which you bestow on some person or thing is perhaps your last."}         
}


button.onclick=function(){
    let index=Math.floor(Math.random() * 5);
    let key=Object.keys(random_ten_quotes)[index];
    console.log(key);
    document.getElementById("quote-name").innerHTML=key;
    document.getElementById("quote").innerHTML=random_ten_quotes[key]["quote"];
    document.getElementById("author").innerHTML=random_ten_quotes[key]["author"];
    
}