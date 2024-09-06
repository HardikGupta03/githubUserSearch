const searchBtn=document.querySelector('.searchBtn');
const input=document.querySelector('input');
const joinData=document.querySelector('.githubJoinedData');
const userName=document.querySelector('.githubUsername');
const gitProfile=document.querySelector('.git-profile');
const profileBio=document.querySelector('.profile-bio');
const repoTotal=document.querySelector('.Repostats');
const followersTotal=document.querySelector('.Followerstats');
const followingTotal=document.querySelector('.Followingstats');
const located=document.querySelector('.location');
const company=document.querySelector('.company');
const twitter=document.querySelector('.twitter');
const website=document.querySelector('.github');
const githubImage=document.querySelector('.profile-image img');
const modeText=document.querySelector('.text');
const toggler=document.querySelector('.theme-toggle i');
const body=document.querySelector('body');
const container=document.querySelector('.container');
const header=document.querySelector('.header');
const inp=document.querySelector(".input");
const profileContainer=document.querySelector('.profile-container');
const search=document.querySelector('.search');
const profileStats=document.querySelector('.profile-stats');
const adjustIcon=document.querySelector('.adjust i')

searchBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    const url=`https://api.github.com/users/${input.value}`;
   profileContainer.style.display="block"
    async function fetchDetails(){
        const response=await fetch(url);
        const data=await response.json();
        console.log(data)
      const dateData=data.created_at.slice(0,data.created_at.length-10);

      githubImage.src=`${data?.avatar_url}`;
      userName.innerHTML=`${data?.name}`
      joinData.innerHTML=`Joined ${dateData}`
      gitProfile.href=`${data?.html_url}`
      gitProfile.innerHTML=`@${data?.login}`
      repoTotal.innerHTML=`${data?.public_repos}`
      followersTotal.innerHTML=`${data?.followers}`
      followingTotal.innerHTML=`${data?.following}`
      located.innerHTML=`${data?.location}`
      website.href=`${data?.blog}`;
    
if(twitter.innerHTML=data.twitter_username===""||data.twitter_username===null){
    twitter.innerHTML="Not Available";
}
else{
 twitter.innerHTML=`${data?.twitter_username}`
}

if(website.innerHTML=data.blog===""||data.blog===null){
website.innerHTML="Have no Blog"
}
else{
    website.innerHTML=`${data?.blog}`;

}

if(company.innerHTML=data.company===""||data.company===null){
    company.innerHTML="Not in Company"
}
else{
 company.innerHTML=`${data?.company}`
}

if(profileBio.innerHTML=data.bio===""||data.bio===null){
    profileBio.innerHTML="This profile has no bio..."
}
else{
 profileBio.innerText=`${data?.bio}`
}
    }
    fetchDetails();
    input.value="";
})

toggler.addEventListener("click",()=>{
   toggler.classList.toggle('ri-sun-line');
   if( toggler.classList.contains('ri-sun-line')){
    modeText.innerHTML="LIGHT"
   }
   else{
      modeText.innerHTML="DARK"
   }
   document.body.classList.toggle('dark');
})

