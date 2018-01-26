import React from 'react';
import { translate } from 'admin-on-rest';

import {
  Card,
  CardHeader,
  CardTitle,
  CardText,
  CardActions
} from 'material-ui/Card';
import { Tabs, Tab } from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';

import { httpClient } from '../../../api/restClient';

import IconEmail from 'material-ui/svg-icons/communication/email';
import IconImages from 'material-ui/svg-icons/image/collections';

import Image from './Image';
import Newsletter from './Newsletter';
import Link from './Link';
import { colorSubheader } from '../../../styles/colors';

import { Heading, Subheading, Body } from '../../../components/Typography';
import Wrapper from '../../../components/Wrapper';

function handleActive(tab) {
  //  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

class Creatives extends React.Component {
  state = {
    creatives: []
  };

  componentDidMount() {
    this.getCreatives();
  }

  getCreatives() {
    httpClient(`${process.env.REACT_APP_API_ENDPOINT}/creatives`).then(
      response => {
        this.setState({
          creatives:
            'creatives' in response.json.meta
              ? response.json.meta.creatives
              : []
        });

        this.renderNewsletters();
      }
    );
  }

  filterByType(type) {
    const { creatives } = this.state;
    return Array.isArray(creatives)
      ? creatives.filter(item => item.act_as === type)
      : [];
  }

  renderLinks() {
    return this.filterByType('link').map((item, i) => (
      <Link key={i} creative={item} />
    ));
  }

  renderNewsletters() {
    return this.filterByType('newsletter').map((item, i) => (
      <Newsletter key={i} creative={item} />
    ));
  }

  renderImages() {
    return this.filterByType('image').map((item, i) => (
      <Image key={i} creative={item} />
    ));
  }

  render() {
    const { translate } = this.props;
    const { creatives } = this.state;

    return (
      <Card>
        <Heading first={true}>
          Do you want to join the contest? We recommend using promo materials
          provided below.
        </Heading>

        <Wrapper>{this.renderLinks()}</Wrapper>

        <Subheading>Wait ...there is more!</Subheading>

        <Body />

        <Wrapper>
          <Tabs>
            <Tab
              label="newsletters"
              onActive={handleActive}
              icon={<IconEmail />}
            >
              <div style={{ marginTop: 30 }}>{this.renderNewsletters()}</div>
            </Tab>

            <Tab label="banners" onActive={handleActive} icon={<IconImages />}>
              <Wrapper>
                <img src="https://files.ecommerceberlin.com/eb3/600x200.jpg" />
              </Wrapper>

              <CardTitle title="Choose size" />
              {this.renderImages()}
            </Tab>
          </Tabs>
        </Wrapper>
      </Card>
    );
  }
}

export default translate(Creatives);
