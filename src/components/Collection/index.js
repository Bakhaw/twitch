import React from 'react';
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry,
  WindowScroller
} from 'react-virtualized';

import GameCard from '../GameCard';
import StreamCard from '../StreamCard';
import { layout } from '../../stylesheets';

class Collection extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      columnWidth: layout[props.type].width,
      gutterSize: 25,
      height: window.screen.height,
      overscanByPixels: 0,
      windowScrollerEnabled: true
    };
    this._cache = new CellMeasurerCache({
      defaultHeight: layout[props.type].height,
      defaultWidth: layout[props.type].width,
      fixedWidth: true
    });
    this._columnCount = 0;
  }

  _calculateColumnCount = () => {
    const { columnWidth, gutterSize } = this.state;

    this._columnCount = Math.floor(this._width / (columnWidth + gutterSize));
  };

  _cellRenderer = ({ index, key, parent, style }) => {
    const { data, type } = this.props;
    const { columnWidth } = this.state;
    const currentData = data[index];
    const containerStyle = {
      ...style,
      margin: '0 35px',
      height: layout[type].height,
      width: columnWidth
    };
    const children =
      type === 'StreamCard' ? (
        <StreamCard stream={currentData} />
      ) : (
        <GameCard game={currentData} />
      );

    return (
      <CellMeasurer cache={this._cache} index={index} key={key} parent={parent}>
        <div style={containerStyle}>{children}</div>
      </CellMeasurer>
    );
  };

  _initCellPositioner = () => {
    if (typeof this._cellPositioner === 'undefined') {
      const { columnWidth, gutterSize } = this.state;

      this._cellPositioner = createMasonryCellPositioner({
        cellMeasurerCache: this._cache,
        columnCount: this._columnCount,
        columnWidth,
        spacer: gutterSize
      });
    }
  };

  _onResize = ({ width }) => {
    this._width = width;

    this._calculateColumnCount();
    this._resetCellPositioner();
    this._masonry.recomputeCellPositions();
  };

  _renderAutoSizer = ({ height, scrollTop }) => {
    this._height = height;
    this._scrollTop = scrollTop;

    const { overscanByPixels } = this.state;

    return (
      <AutoSizer
        disableHeight
        height={height}
        onResize={this._onResize}
        overscanByPixels={overscanByPixels}
        scrollTop={this._scrollTop}
      >
        {this._renderMasonry}
      </AutoSizer>
    );
  };

  _renderMasonry = ({ width }) => {
    this._width = width;

    this._calculateColumnCount();
    this._initCellPositioner();

    const { height, overscanByPixels, windowScrollerEnabled } = this.state;

    return (
      <Masonry
        autoHeight={windowScrollerEnabled}
        cellCount={this.props.cellCount}
        cellMeasurerCache={this._cache}
        cellPositioner={this._cellPositioner}
        cellRenderer={this._cellRenderer}
        height={height}
        overscanByPixels={overscanByPixels}
        ref={this._setMasonryRef}
        scrollTop={this._scrollTop}
        style={{ margin: '30px 0' }}
        width={width}
      />
    );
  };

  _resetCellPositioner = () => {
    const { columnWidth, gutterSize } = this.state;

    this._cellPositioner.reset({
      columnCount: this._columnCount,
      columnWidth,
      spacer: gutterSize
    });
  };

  _setMasonryRef = ref => {
    this._masonry = ref;
  };

  render() {
    const { overscanByPixels } = this.state;

    return (
      <WindowScroller overscanByPixels={overscanByPixels}>
        {this._renderAutoSizer}
      </WindowScroller>
    );
  }
}

export default Collection;
