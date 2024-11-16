const getStoredWishList = () => {
    //wish-list
    const storedListStr = localStorage.getItem('wish-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}
const addToStoredWishList = (id)=> {
    const storedList = getStoredWishList();
    if(storedList.includes(id)){
        console.log('already exist in the wishList')
    }
    else{
        storedList.push(id);

        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr);
    }
}
export {addToStoredWishList}