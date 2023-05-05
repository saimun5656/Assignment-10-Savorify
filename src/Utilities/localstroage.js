const addToDB=(item)=>{
    const oldSaved=getrecipe();
    if(oldSaved){
    const filterOldSaved= oldSaved.find(os=>os.recipeName===item.recipeName)
    if(filterOldSaved){
        alert('alrady fav')
        return
    }
    const newSaved =[item,...oldSaved]
    const newSavedJson=JSON.stringify(newSaved)
    localStorage.setItem('recipes',newSavedJson)
    return
    }
    localStorage.setItem('recipes',JSON.stringify([item]))

}
const getrecipe=()=>{
   const initsaved=''
   const savedstr= localStorage.getItem('recipes');
   if(savedstr){
   const saved= JSON.parse(savedstr);
   return saved
   }
   return initsaved
}
export {addToDB,getrecipe}