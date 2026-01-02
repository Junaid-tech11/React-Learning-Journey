import { useState } from "react"
import "./ProfileCard.css"

function ProfileCard({name, job}){
    const [isFollowing, setIsFollowing] = useState(false);
    const [isDark, setIsDark] = useState(false);

    function handleAlert(){
        alert("Followed " + name)
        setIsFollowing(true);
    }

    function toggleMode(){
        setIsDark(!isDark)
    }

    return(
        // 1. Apply the style HERE on the main wrapper, not an inner div
        <div className="card" style={{ 
            backgroundColor: isDark ? "black" : "white", 
            color: isDark ? "white" : "black",
            border: "1px solid #ccc" // Optional: adds a border so you can see it better
        }}>
            <h2>{name}</h2>
            <p>{job}</p>

            {/* 2. Buttons are Neighbors (Siblings), not Parent/Child */}
            <button onClick={toggleMode}>
                Change Theme
            </button>
            
            {/* Add a little space between buttons if you want */}
            <button onClick={handleAlert} style={{ marginLeft: "10px" }}>
                {isFollowing ? "Following" : "Follow"}
            </button>
        </div>
    )
}
export default ProfileCard