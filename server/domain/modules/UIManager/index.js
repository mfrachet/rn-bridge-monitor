const TreeModule = require("./../TreeModule");
const Constants = require("./../../../constants");
const View = require("./../../views/View");
const Command = require("./../../command/Command");

/**
 * React Native bridge methods
 */
class UIManager extends TreeModule {
  clearJSResponder(command) {
    const { args } = command;
    this.viewContainer.clearResponders();

    return new Command(command);
  }

  createView(command) {
    const { args } = command;
    const view = new View(args[0], args[1], args[3]);
    this.viewContainer.add(view);
    return new Command(command);
  }

  setChildren(command) {
    const { args } = command;
    const view = this.viewContainer.find(args[0]);
    const children = args[1].map(this.viewContainer.find);
    view.setChildren(children);
    return new Command(command);
  }

  _removeChildren(view, indices) {
    const newChilds = view.children.filter(
      (child, index) => indices.indexOf(index) === -1
    );
    view.setChildren(newChilds);
  }

  _moveChildren() {
    console.log("Move children of ManageChildren is now needed");
  }

  _addChildren(view, childTags, indices) {
    const newChilds = [...view.children];
    childTags.forEach((child, index) => {
      const v = this.viewContainer.find(child);
      newChilds.splice(indices[index], 0, v);
    });
    view.setChildren(newChilds);
  }

  manageChildren(command) {
    const { args } = command;
    const viewTag = args[0];
    const moveFrom = args[1];
    const moveTo = args[2];
    const addChildTags = args[3];
    const addAtIndices = args[4];
    const removeFrom = args[5];
    const view = this.viewContainer.find(viewTag);

    if (moveFrom || moveTo) {
      this._moveChildren();
    }

    if (addChildTags || addAtIndices) {
      this._addChildren(view, addChildTags, addAtIndices);
    }

    if (removeFrom) {
      this._removeChildren(view, removeFrom);
    }

    return new Command(command);
  }

  measure(command) {
    const { args } = command;
    const view = this.viewContainer.find(args[0]);
    return new Command(command);
  }

  setJSResponder(command) {
    const { args } = command;
    const view = this.viewContainer.find(args[0]);
    this.viewContainer.registerResponder(view);

    return new Command(command);
  }

  updateView(command) {
    const { args } = command;
    const view = this.viewContainer.find(args[0]);
    view.setName(args[1]);
    view.setProps({ ...view.props, ...args[2] });
    return new Command(command);
  }

  replaceExistingNonRootView() {
    const { args } = command;
    const tagToRemove = args[0];
    const tagToMove = args[1];

    const viewToRemove = this.viewContainer.find(tagToRemove);
    const viewToMove = this.viewContainer.find(tagToMove);

    // Remove and insert child inside the parent oldTag
    const parent = this.viewContainer.find(viewToRemove.parentId);
    if (parent) {
      parent.insertChildrenAtIndex(viewToRemove.index, viewToMove);
    }

    // Remove child tag inside the newTag parent, doesnt exist anymore
    const parentToMove = this.viewContainer.find(viewToMove.parentId);
    if (parentToMove) {
      parentToMove.removeChildrenAtIndex(viewToMove.index);
    }

    return new Command(command);
  }

  focus(command) {
    const focusedId = command.args[0];
    const view = this.viewContainer.find(focusedId);
    this.viewContainer.registerFocus(view);

    return new Command(command);
  }
}

module.exports = UIManager;
