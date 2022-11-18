window.onload = function () {
    const checkAll = document.getElementById('chkAll');
    const chks = document.querySelectorAll('.chk');  
    const chkBoxLength = chks.length;

    const chk01 =document.getElementById("chk01");
    const chk02 =document.getElementById("chk02");
    const chk03 =document.getElementById("chk03");

    
    checkAll.addEventListener('click', function(event) {
        if(event.target.checked)  {
            chks.forEach(function(value){
            value.checked = true;
        })
        }else {
           chks.forEach(function(value){
           value.checked = false;
        })
     }
      });

    for (chks of chks){
        chks.addEventListener('click', function() {
            let count = 0;
            chks.forEach(function(value){
                if(value.checked == true){
                    count++;
                }
            })
            if(count !== chkBoxLength){
                checkAll.checked = false;
            }else{
                checkAll.checked = true;
            }
          })
    }

}

