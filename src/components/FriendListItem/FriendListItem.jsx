



const FriendListItem=({avatar,name,isOnline})=>{
    const styleStatus={color:isOnline?'green':'red'}
    return(
      <div>
        <img src={avatar} alt="Avatar" width="48" />
        <p>{name}</p>
        <p style={styleStatus}>{isOnline ? 'Online' : 'Offline'}</p>
    
       </div>
    )
}

export default FriendListItem