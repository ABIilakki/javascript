// fetch("https://mimic-server-api.vercel.app/users")
// .then((res)=>res.json())

// .then(res=>{
//     if(res.ok)
//         console.log("success");
//     else
//         console.log("fail");
//         return res.json()
// })

// .then((msg)=>console.log(msg))
// .catch((err)=>console.log(err))


// method:'POST',
// headers:{'content-type':'application/json'},
// body:JSON.stringify({
//     name:"abinesh",
//     email:"abinesh@gmail.com",
//     username:"abiii"
// })
// })

async function getusers() {
    const response=await fetch("https://mimic-server-api.vercel.app/users")
    const userdata=await response.json()
    console.log(userdata);   
}
getusers()

async function getemail() {
    const response=await fetch("https://mimic-server-api.vercel.app/users/4",{
        method:"GET",
        headers:{
           "content-type":"application/json"
        }
    })
// getusers()
}
// getemail()

async function postnewuser(){
    const response=await fetch("https://mimic-server-api.vercel.app/users",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            name:"abinesh",
            email:"abinesh@gmail.com",
            username:"abi"
        })
    })
//    getusers()
}
// postnewuser()


async function putnewuser1(){
    const response=await fetch("https://mimic-server-api.vercel.app/users/58",{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            name:"ramesh",
            email:"ramesh@gmail.com",
            username:"ram"
        })
    })
    // getusers()
}
// putnewuser1()
 
async function deleteuser() {
    const  response=await fetch("https://mimic-server-api.vercel.app/users/62",{
        method:'DELETE'
    })
   getusers()    
}
deleteuser()




