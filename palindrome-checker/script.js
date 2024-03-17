const s = document.querySelector('#text-input');

const check = document.querySelector('#check-btn');
const ans = document.querySelector('#result');

// function isPalindrome(s)
// {
//   // var str = s.replace(/[^A-Z0-9]+/ig, "");
//   var str = s.replace(/[,\s\W]/g, '');

//   let rev = str.split("").reverse().join("");
//   if (rev == str){ return true; }
//     return false;
// }

function isPalindrome(str) 
{
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

check.addEventListener
( "click", function f()
  {
    if(s.value === "")
    { alert("Please input a value"); }
    else
    {
      if(isPalindrome(s.value))
      {
        ans.innerHTML = `${s.value} is a palindrome`;
      }
      else
      {
        ans.innerHTML = `${s.value} is not a palindrome`;
      }
    }
  }
)