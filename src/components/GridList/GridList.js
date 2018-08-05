import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

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
  render() {
    const {
      hero,
      position,
      superHeros
    } = this.props;

    return (
      <div className="col-md-6 mb-3">
        <Card className="pt-3 pr-3 pl-3 pb-3">
          <div className="row row-eq-height d-flex align-items-center justify-content-center">
            <StyledContainerAvatar className="col-lg-4">
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
                  <IconButton  onClick={() => this.addRanking(position)} aria-label="Add to favorites">
                    <i className="far fa-star"></i>
                  </IconButton>
                  <StyledTextGray>{superHeros[position].ranking || 0}</StyledTextGray>
                </StyledCardActions>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default Ranking;
