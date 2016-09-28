import App from '../../../config';

export default class ExamplesController {
  examples(req, res) {
    res.json([{
        name: 'example 1'
      }, {
        name: 'example 2'
      }
    ]);
  }
}