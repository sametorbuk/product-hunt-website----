import "./user-comment-comp.css"




export default function UserCommmentComp(){

return(<>

<div className="user-comment-component">

  <img className="commenters-photo" src="https://ph-avatars.imgix.net/4438396/079fabcb-7d01-42d9-a98f-2fc7befce04e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=36&h=36&fit=crop&dpr=2" alt="" />


<div className="user-comment-content">
<div className="user-comment-component-prof-info">
 
     <p>Prem Saini</p>
     <p>@prem_saini1</p>
     

</div>

<p>If I have a photo of someone 
    standing near the edge of the frame, 
    can your AI figure out how to naturally extend
     the background without messing up the person's proportions? 
     Kudos on the launch, amazing tool🥳</p>

     <div className="comment-interactions-div">
        <button className="comment-interactions-btn">Up vote</button>
        <button  className="comment-interactions-btn" >Share</button>
        


     </div>
     </div>



</div>





</>)
}