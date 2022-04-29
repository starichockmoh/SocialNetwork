import './TextRadioGroup.css';

import React from 'react';
import PropTypes from 'prop-types';

import TextMarker from './TextMarker';
import Switcher from '../Switcher';
import { joinClassNames } from '../Utils';


function TextRadioGroup({
  className,
  selectedItem,
  items,
  groupName,
  onSelect = () => {},
}) {
  return (
    <div className={joinClassNames(['text_radio_group', className])}>
      {items.map((item) => (
        <Switcher
          key={item.value}
          name={groupName}
          className="text_radio_group__switcher"
          type="radio"
          checked={selectedItem.value === item.value}
          value={item.value}
          markerRenderFn={(checked) => (
            <TextMarker
              caption={item.display}
              checked={checked}
              className="text_radio_group__marker"
            />
          )}
          onChange={(e) => onSelect(e.target.value)}
        />
      ))}
    </div>
  );
}

TextRadioGroup.propTypes = {
  groupName: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({ value: PropTypes.string, display: PropTypes.string }),
  ),
  selectedItem: PropTypes.shape({
    value: PropTypes.string,
    display: PropTypes.string,
  }),
  className: PropTypes.string,
  onSelect: PropTypes.func,
};

TextRadioGroup.defaultProps = {
  items: [],
  selectedItem: undefined,
  className: undefined,
  onSelect: () => {},
};

export default TextRadioGroup;
