import React, {Component} from "react";
import Superhero from "./Superhero";
import Hero from "./Hero";
import { Input } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import nomatch from "../../nomatch.gif";
import Auxiliary from "../../util/Auxiliary";
import axios from 'axios';

const { Search } = Input;

class Superheros extends Component {

  state = {
    allNames: '',
    names: '',
    selectedHero: '',
    selected: false,
    value: '',
    loading: true,
  }

  componentDidMount () {
    axios.get(`https://akabab.github.io/superhero-api/api/all.json`)
    .then(superherosData => {
      this.setState({...this.state, names: superherosData.data, allNames: superherosData.data, loading: false})
    })
    .catch(error => error);
  }

  heroSelected = hero => {
    this.setState({...this.state, selectedHero: hero, selected: true});
  }

  onBack = () => {
    this.setState({...this.state, selected: false});
  }

  handleSearch = value => {
    if(value) {
      let names = [];
      this.state.allNames.forEach((hero, index) => {
        if((hero.name).toLowerCase().includes(value.toLowerCase())) {
          names.push(hero);
        }
      })
      this.setState({...this.state, names: names, value: value});
    } else {
      this.setState({...this.state, names: this.state.allNames, value: value});
    }
  }

  render() {
    return (
      <Auxiliary>
        {this.state.loading ?
          <span className="loader">
            <LoadingOutlined />Loading...
          </span> :
          <div className="page">
            {this.state.selected ? <Hero hero={this.state.selectedHero} onBack={this.onBack}/> :
            <Auxiliary>
              <div className="searcharea">
                <Search
                  allowClear
                  placeholder="Look for superhero"
                  onSearch={this.handleSearch}
                  onChange={(e) => this.handleSearch(e.target.value)}
                  value={this.state.value}
                  style={{ width: 200, marginTop: 10 }}
                />
              </div>
              {this.state.names.length > 0 ?
              <ul className="superheros">
                {this.state.names.map((hero, index) => (
                    <Superhero hero={hero} heroSelected={this.heroSelected}/>
                  )
                )}
              </ul> :
              <div className="nomatch">
                <img src={nomatch} alt="nomatch" height="200" width="250"/>
                Does your superhero really exists?
              </div>}
              </Auxiliary>
            }
          </div>
        }
      </Auxiliary>
    );
  }
}

export default Superheros;
