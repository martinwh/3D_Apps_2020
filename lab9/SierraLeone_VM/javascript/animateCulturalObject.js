//Javascript function to rotate (animate) the cultural object's 3D media object
function rotateObject(){
    if(document.getElementById('bowl__GrpBowl-TIMER').getAttribute('enabled')!= 'true')
         document.getElementById('bowl__GrpBowl-TIMER').setAttribute('enabled', 'true');
     else
         document.getElementById('bowl__GrpBowl-TIMER').setAttribute('enabled', 'false');
}