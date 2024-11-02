

function Panel({title,active,isIndex,index}){
  
    return(
        <section className="border mx-10 p-4 space-y-3">
        <h1 className="text-2xl font-semibold py-2 ">{title}</h1>
        {isIndex &&  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dignissimos architecto recusandae perspiciatis ipsam cupiditate dolorem rerum nisi, voluptates labore eaque sequi. Adipisci corporis consectetur fu</p>}
         
       {!isIndex &&  <button onClick={()=> active(index)} className="py-2 px-3 rounded-md bg-green-600">click me</button>}
      
        
        </section>
    )
}
export default Panel;