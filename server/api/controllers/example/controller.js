const examples = [{id: 0, name: 'example 1'}, {id: 1, name: 'example 2'}];
export class Controller {
  examples(req, res) {
    res.json(examples);
  }
  example(req, res) {
    if (req.params.id > 1 || req.params.id < 0) {
      res.status(404).end()
    } else {
      res.json(examples[req.params.id]);
    }
  }
}
export default new Controller();