import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends PureComponent {
    renderItem = (library) => {
        return (<ListItem item={library.item} />);
    }
    render() {
        return (
            <FlatList
                data={this.props.data}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.title}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    data: state.libraries,
});

export default connect(mapStateToProps)(LibraryList);
