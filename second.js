document.getElementById("btn-deposit").addEventListener("click",function(){
    const depositValeu= document.getElementById("input-deposit");
    const nowdepositstring = depositValeu.value;
    const nowdepositamount= parseFloat(nowdepositstring);
    
    //dap 2
    const setdeposit= document.getElementById("Deposit-values");
    const priveousdepositstring = setdeposit.innerText;
    const priveousdeposit= parseFloat(priveousdepositstring)
    const totaldepositvaleu = priveousdeposit + nowdepositamount;
    setdeposit.innerText= totaldepositvaleu;
    //dap-3
    depositValeu.value= "";
   //dap-4
   const totalbalens= document.getElementById("Balanse-values");
   const priveousbalansSting = totalbalens.innerText
   const priveousbalans = parseFloat(priveousbalansSting);
   const sumbanlens= priveousbalans + nowdepositamount;
    totalbalens.innerText = sumbanlens;
})

