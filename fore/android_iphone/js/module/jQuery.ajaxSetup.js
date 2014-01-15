$.ajaxSetup({
    global: true,
    error: function(xhr, status, err) {
        if (xhr.status == 401){
            silentLogout();
        }
    }
});
