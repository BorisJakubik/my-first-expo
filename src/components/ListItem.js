import React, { PureComponent, Fragment } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import { selectLibrary } from '../actions';

class LibraryItem extends PureComponent {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { item, expanded } = this.props;
        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>{item.description}</Text>
                </CardSection>
            );
        }
    }

    render() { 
        const { titleStyle } = styles;
        const { title, id } = this.props.item;
        return (
            <Fragment>
                <TouchableWithoutFeedback
                    onPress={() => this.props.selectLibrary(id)}
                >
                    <View>
                        <CardSection>
                            <Text style={titleStyle}>{title}</Text>
                        </CardSection>
                    {this.renderDescription()}
                    </View>
                </TouchableWithoutFeedback>

            </Fragment>
        );
    }
}

const styles = {
    titleStyle: { 
        fontSize: 18,
        paddingLeft: 15,
    }
};

const mapDispatchToProps = (dispatch) => ({
    selectLibrary: (id) => dispatch(selectLibrary(id))
});

const mapStateToProps = (state, ownProps) => ({
    expanded: state.selected === ownProps.item.id,
    selected: state.selected,
});

export default connect(mapStateToProps, mapDispatchToProps)(LibraryItem);
