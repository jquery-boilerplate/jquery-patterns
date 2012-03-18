require({

    paths: {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min',
        'jqueryui': 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.18/jquery-ui.min',
        'boilerplate': '../patterns/jquery.widget-factory.requirejs.boilerplate'
    }
}, ['require', 'jquery', 'jqueryui', 'boilerplate'], 
function (req, $) {
    
    $(function () {
        var instance = ($('body').myWidget());
        console.log(instance);

        instance.myWidget('methodB');

    });
});