const getStoredReadList =()=>{
    //read-list
    const storedListStr = localStorage.getItem('read-list'); // localStorage e read-list name e kichu ache ki na,jodi thake tahole ,json.parse kore javascript object e convert kore return kore dicchi.

    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return[]; // jodi na thake tahole ekta mt-array return kore dicchi.
    }
}
const addToStoredReadList = (id)=>{
    const storedList = getStoredReadList();// uporer function k call kore list take niye nisi jekhane ami add korbo.

    if(storedList.includes(id)){ // tarpor check kortesi je id ta add korbo seta ase ki na? 
        //already exists, do not add it
        console.log(id, "already exists in the read list")
    }
    else{
        storedList.push(id); // jodi na thake tahole ami etake push kortesi. but push korle kintu localStorage e jacche na. ami je array ta banaisi sekhane jacche.

        const storedListStr = JSON.stringify(storedList); // localStorage e kintu javaScript er object k sorasori rakhte pari na,sejonno string e convert kore rakhte holo.
        localStorage.setItem('read-list', storedListStr); // tarpor localStorage e set kore rakhlam.

        //ideally trigger toast from the component
        toast.success("This is a success message!");
    }

    // korar por addToStoredReadList function e use korar jonno export korbo and jekhane use korbo sekhane import korbo.
}
 export {addToStoredReadList, getStoredReadList}