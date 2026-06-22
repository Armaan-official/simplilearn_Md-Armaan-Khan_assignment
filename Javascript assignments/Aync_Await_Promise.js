let Student = false;

// creating async function
let aync = new Promise((resolve, reject) => {
    if (Student) {
        resolve('Hello'); 
    } else {
        reject('Bye');
    }
})
.then((result) => {
    setTimeout(() => {
        console.log(result); 
    }, 2000);   
})
.then((resolve) => {
    setTimeout(() => {
        console.log('You are learning');
        deCode();
    }, 3000)
})
.then(() => {
    console.log('Javascript');
})
.catch((error) => {
    console.log(error);
    deCode();
})


// try and final block 
function deCode(){
    try{
        if(Student) {
            console.log('This is for 2nd promise');

        }else {
        console.log('This is for 4th promise')

        }
    }finally{
       console.log('Finally block will always run')
    }
}