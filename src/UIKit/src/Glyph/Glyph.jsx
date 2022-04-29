import './Glyph.css';

import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import * as Glyphs from './Glyphs';

import { joinClassNames } from '../Utils';


function Loading() {
  return <div className="glyph__loading" />;
}

/**
 * Символ обозначающий какое-либо слово
 *
 * Глиф находится в квадратной области.
 * Размер области по умолчанию `1rem`.
 * Для переопределения размера используется
 * кастомное css свойство `--glyph-size`
 */
function Glyph({ name, className }) {
  const Image = Glyphs[name];
  return (
    <div className={joinClassNames(['glyph', className])}>
      <Suspense fallback={<Loading />}>
        <Image />
      </Suspense>
    </div>
  );
}

Glyph.propTypes = {
  /**
   * Имя глифа
   */
  name: PropTypes.oneOf([
    'Chevron',
    'Checkmark',
    'Edit',
    'Menu',
    'Filter',
    'Cross',
    'Ok',
    'Warning',
  ]).isRequired,

  /**
   * Имена классов для расширения
   */
  className: PropTypes.string,
};

Glyph.defaultProps = {
  className: '',
};

export default Glyph;
