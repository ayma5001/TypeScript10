import React, { useState } from "react";

type UserType = {
    name:string;
    sessionId: number;
}

const UseStateExample = () => {
    const [username, setUsername] = useState("")
    const [user, setUser] = useState<UserType| null>(null)

    

    const handleClick  = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setUser({
            name: username,
            sessionId: Math.random()
        })
        console.log(username)

    }


    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
       
    }


   
  return (
    <div className="useStateExample">

        {user ? (`${user.name} is logged in`) :(
      <form>
        <input type="text" placeholder="Username" onChange={handleChange} />
        <button onClick={handleClick}>Login</button>
      </form>
      )}
    </div>
  );
};

export default UseStateExample;
