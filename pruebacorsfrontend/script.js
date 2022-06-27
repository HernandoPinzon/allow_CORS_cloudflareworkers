//Put the url of the worker in cloudflare after do the "wrnagler publish"
url = '';

//Put the url that "wrangler dev" generate in your local machine to a local prove
urlLocal = '';

function httpGet()
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", urlLocal, false );
    //set some headers if you want
    //xmlHttp.setRequestHeader('','');
    xmlHttp.send( null );
    console.log(xmlHttp.responseText);
}