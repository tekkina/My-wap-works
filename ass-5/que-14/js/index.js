window.onload = function(){
    const register = document.getElementById("all") ;
    register.onsubmit = function(event){
            event.preventDefault() ;
            const emailId = document.getElementById("emailAdd") ;
            const pass = document.getElementById("pass") ;
            const urlLink= document.getElementById("url") ;
            const markCheck= document.getElementById("check") ;
            const mainEmial = emailId.value ;
            const passMain = pass.value ;
            const urlLinkMain = urlLink.value ;
            const checkMain = markCheck.value ; 
            console.log(`Email is  :${mainEmial}`)
            console.log(`password is  :${passMain}`)
            console.log(`URL website is   :${urlLinkMain}`)
            console.log(`check Box checked   :${checkMain}`)
            document.getElementById("emailId").innerText =`Email is  :${mainEmial}` ;
            document.getElementById("thePass").innerText = `password is  :${passMain}` ;
            document.getElementById("link").innerText = `URL website is   :${urlLinkMain}` ;
            document.getElementById("checkbox").innerText =  `check Box checked   :${checkMain}` ;
            emailId.value ="" ;
            pass.value="" ;
            urlLink.value ="";
            markCheck.value="" ; 
        }        
    }