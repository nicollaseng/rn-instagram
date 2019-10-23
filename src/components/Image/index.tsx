import * as React from 'react';
import {Img, BaseImg} from './styles';

const Image = ({
  source,
  width,
  height,
  mt,
  mb,
  mr,
}: {
  source?: any;
  width?: string;
  height?: string;
  mt?: string;
  mb?: string;
  mr?: string;
}) => {
  return (
    <BaseImg width={width} height={height} mt={mt} mb={mb} mr={mr}>
      <Img source={source} />
    </BaseImg>
  );
};

export default Image;
