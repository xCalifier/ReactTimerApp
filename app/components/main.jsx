var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
    return (
        <div>
            <Nav/>
            {/*<div>*/}
            {/*<div>*/}
            <div className="grid-x">
                <div className="cell large-4 small-8 cent">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

module.exports = Main;