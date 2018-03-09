import React from 'react';
import { translate } from 'admin-on-rest';

import { Card, CardTitle } from 'material-ui/Card';
import { Tabs, Tab } from 'material-ui/Tabs';

import { httpClient } from '../../../api/restClient';

import IconEmail from 'material-ui/svg-icons/communication/email';
import IconImages from 'material-ui/svg-icons/image/collections';

import Image from './Image';
import Newsletter from './Newsletter';
import Link from './Link';

import { Heading, Subheading, Body } from '../../../components/Typography';
import Wrapper from '../../../components/Wrapper';

function handleActive(tab) {
  //  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

class Creatives extends React.Component {
  state = {
    creatives: []
  };

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  async componentDidMount() {
    const res = await httpClient(
      `${process.env.REACT_APP_API_ENDPOINT}/creatives`
    );
    const { meta } = await res.json;
    await this.setStateAsync({ creatives: meta.creatives });
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

    return (
      <Card>
        <Heading first={true}>
          {translate("resources.creatives.heading")}
        </Heading>

        <Wrapper>{this.renderLinks()}</Wrapper>

        <Subheading>{translate("resources.creatives.subheading")}</Subheading>

        <Body />

        <Wrapper>
          <Tabs>
            <Tab
              label={translate("resources.creatives.newsletters")}
              onActive={handleActive}
              icon={<IconEmail />}
            >
              <div style={{ marginTop: 30 }}>{this.renderNewsletters()}</div>
            </Tab>

            <Tab label={translate("resources.creatives.banners")} onActive={handleActive} icon={<IconImages />}>
              <Wrapper>
                <img
                  src="https://files.ecommerceberlin.com/eb3/600x200.jpg"
                  alt="example"
                />
              </Wrapper>

              <CardTitle title={translate("resources.creatives.choose_size")} />
              {this.renderImages()}
            </Tab>
          </Tabs>
        </Wrapper>
      </Card>
    );
  }
}

export default translate(Creatives);
