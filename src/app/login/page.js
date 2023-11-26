'use client'
import {useState,useEffect} from "react";
import mongodbServerDatabase from '../lib/mongodb'
import {NextResponse} from "next/server";
export default  function Login(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('');
    const [error,setError]= useState(null);
    const handleSubmit =  async (e) => {

        e.preventDefault();
        try{
            const {email,password} = await request.json();
            await mongodbServerDatabase();
            return NextResponse.json({message:'Send!!'},{status:201})
        }catch (error){
            setError(error.message)
            return NextResponse.json({message:'something'},{status:500})
        }
    };
    return(
        <div>
            {error && (
                <div>error</div>
            )}

            <input type="email" className="p-2 px-2 py-2 border"placeholder='Email Address' onChange={(e) =>setEmail((e.target.value))}/>
            <input type="password" className="p-2 px-2 py-2 border"placeholder='Enter Password'onChange={(e) => setPassword(e.target.value)}/>
            <button className="bg-black text-white p-2" type="button"onClick={handleSubmit}>Submit</button>


        </div>
    )
}