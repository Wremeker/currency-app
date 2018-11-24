import React, { Component, Fragment } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import dragCurrency from './../actions/dragCurrency';
import reorderCurrency from './reorderCurrency';
import CurrencyItem from './CurrencyItem';


class CurrencyItems extends Component {
    onDragEnd = result => {
        if (!result.destination) {
            return;
        }
        if (this.props.currency) {
            const items = reorderCurrency(
                this.props.currency,
                result.source.index,
                result.destination.index
            );
            this.props.dragCurrency(items);
        }
    }
    render() {
        return (
            <Fragment>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="droppable">
                        {
                            (provided, snapshot) => (
                                <div className="currency__items" ref={provided.innerRef}>
                                    {
                                        this.props.currency ? this.props.currency.map((item, index) => {
                                            return (
                                                <Draggable key={index} draggableId={item.timestamp} index={index}>
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                        >
                                                            <CurrencyItem
                                                                key={index}
                                                                count={index + 2}
                                                                data={item.data}
                                                                firstCurrency={false}
                                                                name={item.name}
                                                                timestamp={item.timestamp}
                                                            />
                                                        </div>
                                                    )}
                                                </Draggable>

                                            )
                                        }) : ''
                                    }
                                </div>
                            )
                        }
                    </Droppable>
                </DragDropContext>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        currency: state.persistedReducer.currency
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dragCurrency: data => {
            dispatch(dragCurrency(data))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyItems);

