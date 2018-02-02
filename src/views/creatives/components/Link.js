import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { translate } from 'admin-on-rest';

import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card';

import Share from '../../../components/Share';
import { colorBg, colorHeader } from '../../../styles/colors';

import CopyToClipboardButton from './CopyToClipboardButton';

const Creative = ({ creative, translate }) => (
  <Card containerStyle={{ backgroundColor: colorBg }}>
    <CardHeader
      style={{ backgroundColor: colorHeader }}
      title={creative.name}
    />

    <CardText>{creative.link}</CardText>

    <CardActions>
      <CopyToClipboardButton text={creative.link} raised={true} />

      {'shareable' in creative &&
        creative.shareable && (
          <span>
            <Share type="facebook" target={creative.link} />
            <Share type="linkedin" target={creative.link} />
            <Share type="twitter" target={creative.link} />
          </span>
        )}
    </CardActions>
  </Card>
);

export default translate(Creative);
