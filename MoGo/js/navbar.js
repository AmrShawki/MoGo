<script>
$.get("index.html", function(data){
    $("#navbar").replaceWith(data);
});
</script>

<script src="//code.jquery.com/jquery.min.js"></script>