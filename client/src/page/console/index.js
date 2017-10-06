import React, { Component } from "react";
import Container from "./../../components/container";
import Section from "./../../components/section";
import Title from "./../../components/title";
import Console from "./../../components/console";
import ConsoleLine from "./../../components/consoleLine";
import Nothing from "./../../components/nothing";

export default class PageConsole extends Component {
  render() {
    const lines = this.props.lines;
    return (
      <Container>
        <Section>
          <Title>Console streaming</Title>
          <Console>
            {lines.length ? (
              lines.map((line, index) => (
                <div key={index}>
                  <ConsoleLine {...line} />
                </div>
              ))
            ) : (
              <Nothing text="Nothing to show for now" />
            )}
          </Console>
        </Section>
      </Container>
    );
  }
}
