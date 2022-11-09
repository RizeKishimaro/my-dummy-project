(function(window) {
    function hidecontrols(){
        var v = document.getElementById("videos1");
        v.addEventListener('mouseover', function() { this.controls = true; }, false);
        v.addEventListener('mouseout', function() { this.controls = false; }, false);
    }
    function a(){
        var a = document.getElementById("videos2");
        a.addEventListener('mouseover', function() { this.controls = true; }, false);
        a.addEventListener('mouseout', function() { this.controls = false; }, false);
    }
    function b(){
        var b = document.getElementById("videos3");
        b.addEventListener('mouseover', function() { this.controls = true; }, false);
        b.addEventListener('mouseout', function() { this.controls = false; }, false);
    }
    function d(){
        var d = document.getElementById("videos4");
        d.addEventListener('mouseover', function() { this.controls = true; }, false);
        d.addEventListener('mouseout', function() { this.controls = false; }, false);
    }
    function c(){
        var c = document.getElementById("videos5");
        c.addEventListener('mouseover', function() { c.controls = true; }, false);
        c.addEventListener('mouseout', function() { c.controls = false; }, false);
    }

    window.addEventListener('load',a,b,c,d, hidecontrols, false);
})(window);