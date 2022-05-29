import React from 'react';
import moment from 'moment';
import { View, Text, StyleSheet } from 'react-native'
import Svg, {
    Path,
  } from 'react-native-svg';

class Countdown extends React.Component {
 
    state = {
        seconds: undefined,
        days: undefined,
        hours: undefined,
        minutes: undefined,
    }
    
    componentDidMount() {
        this.interval = setInterval(() => {
            const { timeTillDate, timeFormat } = this.props;
            const then = moment(timeTillDate, timeFormat);
            const now = moment();
            const countdown = moment(then - now)
            const seconds = countdown.format('ss')
            const minutes = countdown.format('mm')
            const hours = countdown.format('HH')
            const days = countdown.format('D')
            this.setState({ days, hours, minutes, seconds }); 
        }, 1000)
    }

    componentWillUnmount() {
        if (this.interval) {
        clearInterval(this.interval)
        }
    }

    render() {
        const { seconds, days, hours, minutes } = this.state;
        
        const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);
        const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
        const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
        const daysRadius = mapNumber(days, 30, 0, 0, 360);

        if (!seconds) {
            return null;
        }
        
        return (
            
                <View style={styles.countdownWrapper}>
                {days && (
                        <View style={styles.countdownItem}>
                            <SVGCircle radius={daysRadius} />
                            
                            <Text>{days}D</Text>
                        </View>
                    )}
                    {hours && (
                         <View style={styles.countdownItem}>
                            <SVGCircle radius={hoursRadius} />
                            
                            <Text>{hours}H</Text>
                        </View>
                    )}
                    {minutes && (
                         <View style={styles.countdownItem}>
                            <SVGCircle radius={minutesRadius} />
                            
                            <Text>{minutes}M</Text>
                        </View>
                    )}
                    {seconds && (
                         <View style={styles.countdownItem}>
                            <SVGCircle radius={secondsRadius} />
                            
                            <Text>{seconds}S</Text>
                        </View>
                    )}
                </View>
           
        )
    }
}

export default Countdown

const SVGCircle = ({ radius }) => (
    <Svg style={styles.countdownSvg}>
        <Path
            fill="none"
            stroke="#333"
            stroke-width="4"
            d={describeArc(50, 50, 48, 0, radius)}
        />
    </Svg>
);

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    
    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
    };
}

function describeArc(x, y, radius, startAngle, endAngle) {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);
    var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    var d = [
        'M',
        start.x,
        start.y,
        'A',
        radius,
        radius,
        0,
        largeArcFlag,
        0,
        end.x,
        end.y
    ].join(' ');
    
    return d;
}

function mapNumber(number, in_min, in_max, out_min, out_max) {
    return (
        ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
}

const styles = StyleSheet.create({
    countdownSvg: {
        top: 0,
        left: 0,
        width: 100,
        height: 100,
    },
    countdownWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    countdownItem: {
        color: 'white',
        fontSize: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    }
  });
  