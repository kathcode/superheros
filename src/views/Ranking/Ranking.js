import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import Card from '@material-ui/core/Card';
import StyledHeader from '../../components/StyledHeader/StyledHeader';
import styled from 'styled-components';
import SortBy from 'lodash/sortBy';

import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import * as actions from '../../actions/List';

const StyledAvatar = styled(Avatar)`
  width: 160px !important;
  height: 160px !important;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const StyledCardActions = styled(CardActions)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px !important;
`;

const StyledTextGray = styled.strong`
  color: #757575;
  margin-left: 10px;
  font-size: 1.2em;
`;


const StyledContainerAvatar = styled.div`
  @media (max-width: 992px) {
    justify-content: center;
    display: flex;
    margin-bottom: 30px;
  }
`;

class Ranking extends Component {
  state = {
    heros: this.props.superHeros.superHeros,
  }
  componentDidMount() {
    var heros = [...this.state.heros];
       
    const ranking = SortBy(heros, (hero) => {
      if (hero.ranking) {
        return hero.ranking;
      }
    });

    this.setState({ heros: ranking.slice(0,9) })
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };

    return (
      <div>
        <StyledHeader
          history={this.props.history}
          path="/"
          title="Ranking"
          textButton="List"
        />
        <div>
          <h2> Multiple items </h2>
          <Slider {...settings}>
            {this.state.heros.map((hero, position) => (
              <Card>
                <div className="row row-eq-height d-flex align-items-center justify-content-center">
                  <StyledContainerAvatar className="col-lg-12">
                    <StyledAvatar
                      alt={hero.picture}
                      src={hero.picture || 'https://www.namepros.com/a/2018/05/106343_82907bfea9fe97e84861e2ee7c5b4f5b.png'}
                    />
                  </StyledContainerAvatar>
                  <div className="col-lg-8">
                    <strong>{hero.name}</strong>
                    <div className="mt-3">{hero.info === '-' ? 'No description added' : hero.info }</div>
                    <div className="text-rigth">
                      <StyledCardActions>
                        <IconButton aria-label="Add to favorites">
                          {this.state.heros[position].ranking > 0 ?
                            <i className="fas fa-star"></i>
                            :
                            <i className="far fa-star"></i>
                          }
                        </IconButton>
                        <StyledTextGray>{this.state.heros[position].ranking || 0}</StyledTextGray>
                      </StyledCardActions>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default connect(
  state => state,
  actions
)(Ranking);
