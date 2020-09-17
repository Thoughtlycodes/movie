var checkVal = 0;
var allArray = ['the favourite','superman','roma','ex machina','the master','her','moonlight','the social network','drive','the shape of water','inception','birdman','spotlight','ipman','hereditary','what we do in the shadows','whiplash','annihilation','the witch','lady brid','getout','boyhood','iron man','godzilla','hulk','the avengers','ice age','madmax','avatar','titanic','joker','black panther','jurassic world','frozen','shazam','incredibles','spider man','minions','aquaman','captain marvel','skyfall','transformers',
                'avengers endgame','despicable me','jurassic park','finding dory','star wars' ,'alice in wonderland','zootopia','the hobbit','the dark knight','the lion king','toy story']
var pre = a;
var text = document.getElementById('text').innerHTML;
var score = 8;
var capName;
var name;
var a = [];
var scoLev = 0
document.getElementById('life').innerHTML = 'Life : '+ score;
var topDiv = document.getElementById("topdiv");
var preLen;
function reload()
{
    var whichName = Math.floor(Math.random()*(allArray.length));
    var name = allArray[whichName];
    console.log(name);
    pre = name;
    var halfLen = Math.floor(name.length/2);
    for(var i=0;i<name.length;i++)
    {
        var box = document.createElement('div');
        topDiv.appendChild(box);
        // box.style.position = "absolute";
        box.setAttribute('id',i)
        box.setAttribute('class','box')
        // box.style.left = (80*i)+'px'
        box.innerHTML = name[i];
        if(name[i] == ' ')
        {
            box.style.backgroundColor = 'black'
            box.style.color = 'red'
        }
    }
    for(var j=0;j<halfLen;j++)
    {
        var space = Math.floor(Math.random()*(name.length));
        for(var k=0;k<(a.length);k++)
        {
            if(a[k] == space)
            {
                var Notsame = 1;
                var space = Math.floor(Math.random()*(name.length));
            }
        }
            Notsame = 1
            a.push(space)
            var emptyBox = document.getElementById(space);
            emptyBox.innerHTML = ' '
            // var input = document.createElement('input');
            // input.type = 'text';
            // input.setAttribute('id','0.1'+j)
            // emptyBox.appendChild(input);
            // input.style.width = '34px' 
            // input.style.height = '48px'
    }
    preLen = name.length;
    return name;
}
reload();
var text;
function check()
{
    var capName = pre.toUpperCase();
    console.log(pre);
    var text = document.getElementById("text").value;
    checkVal = 0;
    for(var p=0;p<pre.length;p++)
    {
        if((text == (capName[p])) || (text == pre[p]))
        {
            checkVal = 1;
            document.getElementById(p).innerHTML = text;
        }
    }
    if(checkVal == 0)
    {
        score=score-1;
        document.getElementById('life').innerHTML = 'Life : '+ score;
    }
    if(score == 0)
    {
        alert('Game Over!!! \n The movie was '+name +' \n Score :'+scoLev);
        location.reload()
    }
    console.log(text);   
}
var count = 0;
function next()
{
    score=8;
    document.getElementById('life').innerHTML = 'Life : '+ score;
    for (let index = 0; index < pre.length; index++) 
    {
        var div = document.getElementById(index).innerHTML
         if(div == pre[index])
         {
             count++
         }  
    }
    if(count == pre.length)
    {
        scoLev++
        document.getElementById('score').innerHTML = 'Score : '+ scoLev;
        for(var i = 0;i < preLen;i++)
        {
            var div = document.getElementById(i);
            div.parentNode.removeChild(div);
        }
        reload()
    }
    else
    {
        alert('Not finished !!!')
    }
    
}