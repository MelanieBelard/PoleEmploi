//setInterval(function() {
//	if ($('#myModal').hasClass('in') || $('#help').hasClass('in')){}
//	else{
//   $('#myModal').modal();}
//}, 30000);

function showModalHelpSend(){
	$('#help').modal();
}

text();
function text() {
    var t;
    var d;
    window.onload = resetTimer;
    // DOM Events
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;

    function logout() {
    if ($('#myModal').hasClass('in') || $('#help').hasClass('in')){}
	else{
    $('#myModal').modal();}
    }
    function stop(){
        if ($('#myModal').hasClass('in') || $('#help').hasClass('in')){window.location.replace("index.html");}
    }

    function resetTimer() {
        clearTimeout(t);
        clearTimeout(d);
        t = setTimeout(logout, 20000)
        d = setTimeout(stop, 40000)
        // 1000 milisec = 1 sec
    }
};