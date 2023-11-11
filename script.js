$(document).ready(function() {
    $("#generate-btn").click(function() {
        var characters = "abcdefghijklmnopqrstuvwxyz";
        var name = "";
        var nameLength = Math.floor(Math.random() * 6) + 4;
        for (var i = 0; i < nameLength; i++) {
            name += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        $("#name").text(name);
    });
});
