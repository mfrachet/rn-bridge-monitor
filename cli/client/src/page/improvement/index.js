import React, { Component } from "react";
import Container from "./../../components/container";
import Section from "./../../components/section";
import Title from "./../../components/title";
import Table from "./../../components/table";
import Nothing from "./../../components/nothing";

const columns = [
  { name: "type" },
  { name: "module" },
  { name: "method" },
  { name: "args" }
];

export default class PageImprovement extends Component {
  render() {
    const { modules } = this.props;
    return (
      <Container>
        <Section>
          <div>
            <Title>Module found for improvement</Title>
            {modules && modules.length ? (
              <div>
                <Table rows={modules} columns={columns} />
              </div>
            ) : (
              <Nothing text="No modules found for improvement" />
            )}
          </div>
        </Section>
      </Container>
    );
  }
}
