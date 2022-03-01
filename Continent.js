function MyFunction(){
    var selectedState = (document.getElementById('state').value);
    var CapitalDisplay = document.getElementById('Capital');
    var arrArizona =["Phoenix"];
    var arrTexas =["Dallas"];
    var arrFlorida =["Tallahassee"];
    var arrCalifornia =["Sacramento"];

    document.getElementById('Capital').innerHTML="";

    if(selectedState == "Arizona"){
        for (i=0; i<arrArizona.length;i++)
        {
            var selectoptions = document.createElement('option');
            selectoptions.innerHTML = arrArizona[i];
            selectoptions.value=arrArizona[i];
            CapitalDisplay.appendChild(selectoptions);
        }
        
    }
    else if(selectedState == "Texas"){
        for (i=0; i<arrTexas.length;i++)
        {
            var selectoptions = document.createElement('option');
            selectoptions.innerHTML = arrTexas[i];
            selectoptions.value=arrTexas[i];
            CapitalDisplay.appendChild(selectoptions);
        }
        
    }
    
    else if(selectedState == "Florida"){
        for (i=0; i<arrTexas.length;i++)
        {
            var selectoptions = document.createElement('option');
            selectoptions.innerHTML = arrFlorida[i];
            selectoptions.value=arrFlorida[i];
            CapitalDisplay.appendChild(selectoptions);
        }
        
    }
    else if(selectedState == "California"){
        for (i=0; i<arrTexas.length;i++)
        {
            var selectoptions = document.createElement('option');
            selectoptions.innerHTML = arrCalifornia[i];
            selectoptions.value=arrCalifornia[i];
            CapitalDisplay.appendChild(selectoptions);
        }
        
    }
}


