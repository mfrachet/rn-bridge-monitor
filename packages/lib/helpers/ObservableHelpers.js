export default class ObservableHelpers {
  static applyOperators(source, parameters) {
    return source.filter(({ module }) => parameters.exclude.indexOf(module) === -1);
  }
}
