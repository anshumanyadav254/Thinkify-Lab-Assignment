import React ,{useState} from 'react'


const arr=[
    {
      name:"Anshuman"
    },
    {
      name:"Aam"
      
    },
    {
      name:"Ahyam"
    }
  ]
  
 

 const Search=()=> {

    const [name, setName] = useState('')

    const onhandleChange=(e)=>{
        setName(e.target.value)
    }

    const getSuggetions=(value)=>{
        const input=value.trim().toLowerCase();
        const length=input.length;
        
        return length===0 ?  []:arr.filter(x=>x.name.toLowerCase().slice(0,length)===input)
      }
      const onHandleClick=(val)=>{
          return <div>
              {getSuggetions(val)}

          </div>
      }

    return (
        <div>

            <input value={name} type="text" onChange={onhandleChange}/>
            <button type="submit" onClick={onHandleClick}>Submit</button>
            
        </div>
    )
}
export default Search;
