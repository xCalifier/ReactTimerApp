var React = require('react');

var TimerForm = React.createClass({
    onSubmit: function (e) {
      e.preventDefault();
      var strSeconds = this.refs.seconds.value;

      if(strSeconds.match(/^[0-9]*$/)){
          this.refs.seconds.value = '';
          this.props.onSetTimer(parseInt(strSeconds, 10))
      }
    },
    render: function () {
        return (
            <div>
                <form ref="timer-form" className="timer-form" onSubmit={this.onSubmit}>
                    <input type="text" ref="seconds" placeholder="Enter the number of seconds"/>
                    <button className="button expanded">Submit</button>
                </form>
            </div>
        );
    }
});

module.exports = TimerForm;