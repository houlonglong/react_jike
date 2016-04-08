/**
 * Created by houlonglong on 16/4/6.
 */
var HelloWorld = React.createClass({displayName: "HelloWorld",
    render:function(){
        "use strict";
        return React.createElement("p", null, "hello,world")
    }
});
    render(React.createElement(HelloWorld, null),document.body )