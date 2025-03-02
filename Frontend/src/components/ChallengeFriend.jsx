const ChallengeFriend = ({ username }) => {
    const inviteLink = `http://localhost:5173/challenge?inviter=${username}`;
  
    const handleShare = () => {
      const shareText = `Hey! Challenge me in Globetrotter! Can you beat my score? 🎉\n\nPlay here: ${inviteLink}`;
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
      window.open(whatsappUrl, "_blank");
    };
  
    return (
      <div className="challenge-friend">
        <button onClick={handleShare}>Challenge a Friend</button>
      </div>
    );
  };
  
  export default ChallengeFriend;