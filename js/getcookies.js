  function getCookie(name)
  {
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
  }
  
function ReadCookie()
    {
        var allcookies = document.cookie;
//        document.write ("All Cookies : " + allcookies );
               
        // Get all the cookies pairs in an array
        cookiearray = allcookies.split(';');
               
        // Now take key value pair out of this array
        for(var i=0; i<cookiearray.length; i++){
            name = cookiearray[i].split('=')[0];
            value = cookiearray[i].split('=')[1];
            document.write ("Key is : " + name + " and Value is : " + unescape(value) + "<br>");
            }
    }