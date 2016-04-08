/**
 * Created by houlonglong on 16/4/6.
 */
var HelloWorld = React.createClass({
    render:function(){
        "use strict";
        return <p>hello,world</p>
    }
});
React.render( <HelloWorld />,document.body )