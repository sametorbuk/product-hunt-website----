
import "./main-page-header.css"
import React from 'react';


export default function MainPageHeader() {

return(<>

<header className="main-page-header">

<div className="main-page-header-left">
<img className="main-page-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5KFKNkfUtMNcGRswfmr_eh3RK9R9ix9wmSPbosLRAo9hLb0I8IoZb2jjXLQxj49PBzyQ&usqp=CAU" alt="" />
<input type="text" placeholder="Search (ctrl+k)" />
</div>

<nav className="header-nav">
<button>Launches</button>
<button>Products</button>
<button>News</button>
<button>Community</button>
<button>Advertise</button>
</nav>

<div className="main-page-header-sucscribe-and-sign-btn-div">

<button>Subscribe</button>
<button>Sign in</button>


</div>



</header>










</>)







}