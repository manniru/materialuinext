# materialuinext
Mannir Material UI Next developed using Facebook ReactJS and Google Material Design


# Conversion from 0.1 to next
material-ui/svg-icons/<category>/<icon-name> to @material-ui/icons/<IconName>.

Works:
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';

Doesn't work:
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';