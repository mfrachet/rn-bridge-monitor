class ViewContainer {
  constructor() {
    this.views = [];
    this.responders = [];
    this.viewIds = {};
    this.rootId = null;

    this.find = this.find.bind(this);
  }

  registerResponder(view) {
    view.isResponding = true;
    this.responders.push(view);
  }

  registerFocus(view) {
    this.views.forEach((v) => {
      v.isFocused = false;
    });
    view.isFocused = true;
  }

  /**
   * Can potentally work with only objects, not array
   * @return {[type]} [description]
   */
  clearResponders() {
    this.responders.forEach((view) => {
      view.isResponding = false;
    });
    this.responders = [];
  }

  add(view) {
    this.views.push(view);
    this.viewIds[view.id] = view;
    return view;
  }

  find(id) {
    return this.viewIds[id];
  }

  findRoot() {
    return this.viewIds[this.rootId];
  }

  setRootId(rootId) {
    this.rootId = rootId;
  }
}

module.exports = ViewContainer;
