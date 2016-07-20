/*eslint-disable react/no-multi-comp */
import React, {PropTypes} from 'react';

const CircleGraph = ({width = 239, height = 239, itemsCount = 4, category = 'software'}) => (
  <svg className={`graph ${category}-graph`} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 239 239">
    <defs>
      <g id="4-items">
        <path fill="none" stroke="#908E89" d="M37.122 201.878L201.878 37.122"/>
        <path fill="none" stroke="#908E89" d="M37.12 37.12l164.757 164.756"/>
        <circle fill="#54534E" cx="201.877" cy="201.876" r="3"/>
        <circle fill="#54534E" cx="201.878" cy="37.122" r="3"/>
        <circle fill="#54534E" cx="37.122" cy="201.877" r="3"/>
        <circle fill="#54534E" cx="37.122" cy="37.123" r="3"/>
      </g>
      <g id="6-items">
        <path fill="none" stroke="#908E89" d="M119.5 119.5V3"/>
        <path fill="none" stroke="#908E89" d="M119.5 119.5L18.605 61.25"/>
        <path fill="none" stroke="#908E89" d="M119.5 119.5L18.605 177.75"/>
        <path fill="none" stroke="#908E89" d="M119.5 119.5V236"/>
        <path fill="none" stroke="#908E89" d="M119.5 119.5l100.892 58.25"/>
        <path fill="none" stroke="#908E89" d="M119.5 119.5L220.39 61.25"/>
        <circle fill="#54534E" cx="119.499" cy="3" r="3"/>
        <circle fill="#54534E" cx="220.392" cy="61.249" r="3"/>
        <circle fill="#54534E" cx="220.392" cy="177.749" r="3"/>
        <circle fill="#54534E" cx="119.499" cy="236" r="3"/>
        <circle fill="#54534E" cx="18.606" cy="177.749" r="3"/>
        <circle fill="#54534E" cx="18.606" cy="61.249" r="3"/>
      </g>
      <path id="software-path" fill="#FF4326" fillOpacity=".3" stroke="#FF4326" strokeWidth="6" d="M47.417 47.75C78.5 18.167 149.093 24.823 181.167 57.5c53.25 54.25 14.318 64.484-25 99-37.023 32.5-55.214 75.41-103.5 29.75-36.75-34.75-37.354-107.945-5.25-138.5z"/>
      <path id="skills-path" fill="#FF4326" fillOpacity=".3" stroke="#FF4326" strokeWidth="6" d="M201.167 166.75c-13.753 32.702-25.084 14.75-52.542 20.75s-58.995 37.72-82.888-37.647C35.667 55 103.167 3 163.167 30.75c34.685 16.043 71.75 55.75 38 136z"/>
      <path id="developement-path" fill="#FF4326" fillOpacity=".3" stroke="#FF4326" strokeWidth="6" d="M119.657 41.834c49.843 0 117.217 77.285 87.218 128.798C184.88 208.4 158.335 191 119 191.332c-39.332.335-70.418 11.665-86.875-20.917s13.21-54.082 28.21-85.082c15-31 25.98-43.5 59.322-43.5z"/>
    </defs>
    <g className="graph-bgr">
      <circle fill="none" stroke="#908E89" strokeWidth="2" cx="119.5" cy="119.499" r="116.5"/>
      <circle fill="none" stroke="#908E89" cx="119.5" cy="119.499" r="58.25"/>
      <circle fill="none" stroke="#908E89" cx="119.5" cy="119.499" r="87.375"/>
      <circle opacity=".5" fill="#FFF" cx="119.5" cy="119.499" r="29.125"/>
    </g>
    <use className="graph-items-count" xlinkHref={`#${itemsCount}-items`} x="0" y="0" />
    <use className="graph-path" xlinkHref={`#${category}-path`} x="0" y="0" />
  </svg>
);

CircleGraph.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  itemsCount: PropTypes.number,
  category: PropTypes.string
};

export {CircleGraph};
