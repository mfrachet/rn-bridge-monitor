import React from 'react';
import Container from './../../components/container';
import Section from './../../components/section';
import Title from './../../components/title';
import TreeView from './../../components/treeView';
import Nothing from './../../components/nothing';
import Legend from './../../components/legend';

const legend = [
  {
    name: 'Element is focused',
    color: '#FFECB3',
  },
  {
    name: 'Element is responding',
    color: '#00d1b2',
  },
];

export default function PageTreeView() {
  const { modules } = this.props;
  return (
    <Container>
      <Section>
        <Title>Native Tree view</Title>
        {modules ? (
          <div>
            <Legend items={legend} />
            <div className="m-t">
              <TreeView root={modules} />
            </div>
          </div>
        ) : (
          <Nothing text="No treeview found" />
        )}
      </Section>
    </Container>
  );
}
