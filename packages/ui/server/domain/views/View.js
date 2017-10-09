class View {
  constructor(id, name, props, children = []) {
    this.id = id;
    this.name = name;
    this.props = props;
    this.setChildren(children);
  }

  setChildren(children) {
    const childs = children.map((child, index) => {
      child.index = index;
      child.setParentTag(this.id);
      return child;
    });

    this.children = childs;
  }

  setParentTag(parentId) {
    this.parentId = parentId;
  }

  removeChildrenAtIndex() {
    console.log('remove child at index', this);
  }

  insertChildrenAtIndex(index, child) {
    this.children.splice(index, 0, child);
  }

  setProps(props) {
    this.props = props;
  }

  addProps(props) {
    this.props = { ...this.props, ...props };
  }

  setName(name) {
    this.name = name;
  }
}

module.exports = View;
