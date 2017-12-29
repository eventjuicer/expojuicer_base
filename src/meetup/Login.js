import React, {Component} from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Card, CardText } from 'material-ui/Card';



import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import { Notification, ViewTitle, translate, userLogin as userLoginAction } from 'admin-on-rest';
//import LinkToRelatedCustomers from './LinkToRelatedCustomers';
//import segments from './data';

import { withRouter } from 'react-router-dom'
import {validateToken, getColorsFromTheme} from '../api/helpers'
import styles from './styles'









class Login extends Component {

    state = {



    }

    componentWillMount = () => {

        const {userLogin, history,location, match} = this.props;

       // console.log(this.props);

        if(match && "params" in match && "token" in match.params)
        {
            if(validateToken(match.params.token))
            {
                userLogin({token: match.params.token}, location.state ? location.state.nextPathname : '/');

            }


        }

        //history.push('/asd')

    }

    render()
    {


        const {match, translate, theme} = this.props;
        const muiTheme = getMuiTheme(theme);
        const { primary1Color, accent1Color } = getColorsFromTheme(muiTheme);


        return (


<MuiThemeProvider muiTheme={muiTheme}>
 <div style={{ ...styles.main, backgroundColor: primary1Color }}>
<Card style={styles.card}>
<ViewTitle title={translate('auth.unauthorized')} />
<CardText>
    Use special link with token....

</CardText>

</Card>

<Notification />

</div>
</MuiThemeProvider>
        )
    }

}


const enhance = compose(
    withRouter,
    translate,
    connect(null, { userLogin: userLoginAction }),
);

export default enhance(Login);
