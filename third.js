document.getElementById("btn-withdraw").addEventListener("click",function(){
    const withdrawbalance = document.getElementById("input-withdraw");
    const withdrawinputfieldsting= withdrawbalance.value;
    const withdrawfield = parseFloat(withdrawinputfieldsting);
    // dap-2
    const setwithdraw = document.getElementById("withdraw-values");
    const priveouswithstring= setwithdraw.innerText;
    const priveouswithdraw = parseFloat(priveouswithstring);
    const totalwithdraw = priveouswithdraw+withdrawfield;
    setwithdraw.innerText= totalwithdraw;
    // dap-3
    withdrawbalance.value= "";
    // dap-4
    const withdrawtobalance= document.getElementById("Balanse-values")
    const totalbalance = withdrawtobalance.innerText;
    const subcremsion = totalbalance- withdrawfield;
    withdrawtobalance.innerText= subcremsion;

})
