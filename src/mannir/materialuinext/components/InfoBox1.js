import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
//import {white, grey800} from 'material-ui/styles/colors';
import {white, grey800} from 'material-ui/colors';
import purple from 'material-ui/colors/purple';

//import {typography} from 'material-ui/styles';
import Typography from 'material-ui/Typography';

class InfoBox extends React.Component {

  render() {
    const {color, title, value, Icon} = this.props;

    const styles = {
      content: {
        padding: '5px 10px',
        marginLeft: 90,
        height: 80
      },
      number: {
        display: 'block',
        fontWeight: Typography.fontWeightMedium,
        fontSize: 18,
        color: grey800
      },
      text: {
        fontSize: 20,
        fontWeight: Typography.fontWeightLight,
        color: grey800
      },
      iconSpan: {
        float: 'left',
        height: 90,
        width: 90,
        textAlign: 'center',
        backgroundColor: color
      },
      icon: {
        height: 48,
        width: 48,
        marginTop: 20,
        maxWidth: '100%'

      }
    };

    return (
      <Paper>
        <span style={styles.iconSpan}>
          <Icon color={white}
                style={styles.icon}
          />
        </span>

        <div style={styles.content}>
          <span style={styles.text}>{title}</span>
          <span style={styles.number}>{value}</span>
        </div>
      </Paper>
      );
  }
}

InfoBox.propTypes = {
  // Icon: PropTypes.any, // eslint-disable-line
  // color: PropTypes.string,
   title: PropTypes.string,
  // value: PropTypes.string
};

export default InfoBox;
