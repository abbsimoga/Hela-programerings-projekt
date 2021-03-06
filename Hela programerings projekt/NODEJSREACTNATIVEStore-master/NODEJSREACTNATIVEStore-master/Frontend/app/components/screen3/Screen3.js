import React from 'react';
import { 
    StyleSheet,
    View,
    Button,
} from 'react-native';

import Component8 from './Component8';
import AllProducts from './comp1';

export default class Screen3 extends React.Component {

	
    constructor(props) {

        super(props);

        this.state = {
            Component8Visible: true,
            Component9Visible: true,
            AllUsers: true,
        }

    }

    toggleComponent(component = false) {

        if (!component) {
            return false;
        }

        let prop = component + 'Visible';
        let val  = this.state[prop];
        if (typeof val === 'undefined') {
            return false;
        }

        this.setState({
            [prop]: val === true ? false : true
        })

        return true;

    }

    hideComponent(component = false) {

        if (!component) {
            return false;
        }

        let prop = component + 'Visible';

        this.setState({
            [prop]: false
        })

        return true;

    }

    showComponent(component = false) {

        if (!component) {
            return false;
        }

        let prop = component + 'Visible';

        this.setState({
            [prop]: true
        })

        return true;

    }

    render() {
        return (

            
            <View style={styles.container}>

                <View style={styles.screencontainer}>
                    <Component8 
                        navigation={this.props.navigation}
                        toggleComponent={ (component) => this.toggleComponent(component) }
                        hideComponent={ (component) => this.hideComponent(component) }
                        showComponent={ (component) => this.showComponent(component) }
                        visible={ this.state.Component8Visible }
                    />
 <AllProducts>  </AllProducts>
                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    
	screencontainer: {
	    backgroundColor: 'rgba(163,198,238,1)',
	    flex: 1,
	},
	
});