members=
    {
        name2:"",
        mobile2:"",
        email2:"",
        message2:""
    }
;
var k=0;
const formSubmit=document.getElementById("sub");
formSubmit.addEventListener("click", e=>{
    e.preventDefault();
    const name1=document.getElementById("name").value;
    const mobile1=document.getElementById("mobile").value;
    const mail1=document.getElementById("mail").value;
    const check=/[1-9]........./;
        if(name1==='')
        {
            alert("Enter Name!!");
        }
        else if(mobile1==='')
        {
            alert("Enter Mobile Number!!")
        }
        else if(mail1==='')
        {
            alert("Enter Email Id!!")
        }
        else if(check.test(mobile1)===false)
        {
            alert("invalid Number!!!");
        }
        else
        {
            members.name2=name1;
            members.mobile2=mobile1;
            members.email2=mail1;
            members.message2=document.getElementById("message").value;
            localStorage.setItem(`members[${k}]`, JSON.stringify(members));
            alert("Hello" + " " + JSON.parse(localStorage.getItem(`members[${k}]`)).name2);
         k=k+1;
            console.log(window);
        }
});
