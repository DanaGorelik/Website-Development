$("h1").addClass("big-title");
$("a").attr("href", "https://www.yahoo.com/");

$("h1").click(function()
{
    $("h1").css("color", "purple");
});

$("button").click(function() {
    $("h1").css("color", "purple");
});

$("body").keypress(function(event)
{
    $("h1").text(event.key);
});

// $("h1").on("mouseover", function()
// {
//     $("Button").css("color", "yellow");
// });

$("h1").on("mouseover", function()
{
    $("h1").slideUp();
});
