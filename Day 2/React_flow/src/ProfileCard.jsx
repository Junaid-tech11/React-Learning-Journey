import { useState } from "react"
import "./ProfileCard.css"

function ProfileCard({name, job}){
        const [isFollowing ,  setIsFollowing] = useState(false);
        function handleAlert(){
            alert("Followed " + name)
            setIsFollowing(true);
        }
    return(
        <div className="card">
            <h2> {name}</h2>
            <p> {job}</p>
            <button onClick={handleAlert}>
            {isFollowing ? "Following":"Follow"}

            </button>
        </div>
    )

}
export default ProfileCard